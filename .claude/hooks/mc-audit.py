#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
mc-audit.py — Emissor de telemetria do Registro de Unidades Agênticas (RUA · L5 da stack ASE)
=============================================================================================
Implementa a Fase 4 do MC-SPEC-RegistroAgentes-ASE v0.1 (gate R2 · toca arquitetura).
É o "hook-in" do campo `emite_audit` da ontologia (Bloco E, §3 da spec).

O QUE FAZ: ao ser disparado por um hook do Claude Code (PreToolUse/PostToolUse sobre
os tools Skill/Task/Agent), resolve QUAL Unidade Agêntica foi acionada, cruza com o
Registro e APENSA UMA linha JSONL ao log de auditoria. O analisador (`ler-audit.py`)
fecha a alça de otimização (L5) sobre esse log.

╔═══════════════════════════════════════════════════════════════════════════════╗
║  FIREWALL LGPD — A LINHA VERMELHA DESTE HOOK (catraca dura · #21 · ADR-009a)   ║
║                                                                                ║
║  Este emissor SÓ lê UMA chave whitelisted do payload — o id da UA acionada     ║
║  (`tool_input.skill` ou `tool_input.subagent_type`). TODO o resto do payload   ║
║  (args, prompt, descrição, caminhos, tool_input livre) é DESCARTADO e NUNCA     ║
║  tocado. A linha JSONL só pode conter o CONJUNTO FECHADO de metadados de        ║
║  governança Zona Verde que vêm do Registro — jamais o conteúdo da invocação.   ║
║                                                                                ║
║  Consequência: mesmo quando uma UA Vermelha (handoff-juridico, novo-cliente)    ║
║  roda, o audit grava só "essa UA rodou em T · gate R3 · zona Vermelha" — que    ║
║  é metadado de governança, NÃO dado de caso. Zero PII por construção.          ║
║  O session_id é HASHEADO (sha256[:8]) — conta sessões distintas sem retê-lo.   ║
╚═══════════════════════════════════════════════════════════════════════════════╝

FAIL-SAFE: qualquer erro/ambiguidade → exit 0 silencioso. Este hook NUNCA bloqueia
um turno, NUNCA derruba a sessão, NUNCA escreve payload. Telemetria é observação
passiva; se não consegue observar com segurança, não observa.

DEFAULT OFF: este arquivo NÃO está fiado em settings.json. Ligá-lo (capturar ao
vivo, em todas as sessões) é o ATO R2 do Founder — instrução exata no _LEIA-audit.md.

Uso (teste manual, sem hook):
    echo '{"tool_name":"Skill","tool_input":{"skill":"mc-compasso-sweep"}}' \
        | python3 .claude/hooks/mc-audit.py
Hierarquia: D > C > V · Proof-First · Zona Verde · v0.1 PROVISIONAL · 2026-06-03
"""
import datetime
import hashlib
import json
import os
import sys

# Raiz do repo = dois níveis acima (.claude/hooks/ → repo). Repo-relativo: resolve
# em sessão local E cloud (não usa cwd nem caminho absoluto). Mesma regra do gerador.
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
REPO_ROOT = os.path.abspath(os.path.join(SCRIPT_DIR, "..", ".."))
REGISTRO_JSON = os.path.join(REPO_ROOT, ".claude", "registro", "registro-unidades-agenticas.json")
AUDIT_DIR = os.path.join(REPO_ROOT, ".claude", "registro", "audit")
AUDIT_LOG = os.path.join(AUDIT_DIR, "audit.jsonl")  # log AO VIVO (gitignored · efêmero)

# Conjunto FECHADO de chaves que uma linha de audit pode carregar. Nenhuma outra
# chave é jamais escrita. Esta lista É o firewall LGPD em forma de dados.
CHAVES_PERMITIDAS = (
    "ts", "event", "ua", "tipo", "gate", "zona", "instancia_aci",
    "in_registro", "sessao_hash",
)


def _ler_payload():
    """Lê o JSON do hook do Claude Code via stdin. Falha → {} (fail-safe)."""
    if sys.stdin.isatty():
        return {}
    try:
        raw = sys.stdin.read()
        return json.loads(raw) if raw.strip() else {}
    except Exception:
        return {}


def _resolver_ua(payload):
    """Extrai SÓ o id da UA acionada. Lê chaves whitelisted; ignora o resto.

    Esta é a única porta por onde o payload entra — e só passa o id, nunca o
    conteúdo. Retorna (ua_id, tipo_provavel) ou (None, None) se não der p/ resolver.
    """
    ti = payload.get("tool_input")
    if not isinstance(ti, dict):
        return None, None
    skill = ti.get("skill")
    if isinstance(skill, str) and skill.strip():
        return skill.strip(), "skill"
    sub = ti.get("subagent_type")
    if isinstance(sub, str) and sub.strip():
        return sub.strip(), "agent"
    return None, None


def _carregar_registro():
    """Mapa id → metadado Zona Verde da UA. Falha → {} (fail-safe)."""
    try:
        reg = json.load(open(REGISTRO_JSON, encoding="utf-8"))
    except Exception:
        return {}
    idx = {}
    for u in reg.get("unidades", []) + reg.get("incompletas", []):
        uid = u.get("id")
        if uid:
            idx[uid] = u
    return idx


def _hash_sessao(payload):
    """Token opaco da sessão: sha256[:8] do session_id. Conta sessões distintas
    sem reter o id. Sem session_id → '0' * 8 (anônimo)."""
    sid = payload.get("session_id") or payload.get("sessionId") or ""
    if not isinstance(sid, str) or not sid:
        return "00000000"
    return hashlib.sha256(sid.encode("utf-8")).hexdigest()[:8]


def _evento(payload):
    """Normaliza o tipo de evento do hook (invoke/result). Default 'invoke'."""
    he = (payload.get("hook_event_name") or payload.get("hookEventName") or "").strip()
    if he == "PostToolUse":
        return "result"
    return "invoke"


def main():
    payload = _ler_payload()
    ua_id, tipo_prov = _resolver_ua(payload)
    if not ua_id:
        sys.exit(0)  # nada de UA p/ observar — fail-safe silencioso

    idx = _carregar_registro()
    meta = idx.get(ua_id)

    # Monta a linha SÓ com o conjunto fechado. Metadados vêm do Registro (Zona
    # Verde); o payload só contribuiu o id. Wall-clock é legítimo aqui: telemetria
    # é série temporal de eventos (≠ o snapshot byte-idêntico do Registro).
    linha = {
        "ts": datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "event": _evento(payload),
        "ua": ua_id,
        "tipo": (meta.get("tipo") if meta else tipo_prov),
        "gate": (meta.get("gate") if meta else None),
        "zona": (meta.get("zona") if meta else None),
        "instancia_aci": (meta.get("instancia_aci") if meta else None),
        "in_registro": meta is not None,
        "sessao_hash": _hash_sessao(payload),
    }
    # Cinto de segurança do firewall: descarta qualquer chave fora do conjunto
    # fechado (defesa em profundidade — nada escapa, nem por bug futuro).
    linha = {k: linha[k] for k in CHAVES_PERMITIDAS if k in linha}

    try:
        os.makedirs(AUDIT_DIR, exist_ok=True)
        with open(AUDIT_LOG, "a", encoding="utf-8") as fh:
            fh.write(json.dumps(linha, ensure_ascii=False) + "\n")
    except Exception:
        pass  # fail-safe: telemetria nunca quebra o turno

    sys.exit(0)


if __name__ == "__main__":
    main()
