#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
ler-audit.py — Analisador de telemetria · a ALÇA DE OTIMIZAÇÃO (RUA · L5 da stack ASE)
======================================================================================
Implementa a Fase 4 do MC-SPEC-RegistroAgentes-ASE v0.1 (gate R2). Lê o log JSONL
emitido por `mc-audit.py`, cruza com o Registro e fecha a alça de otimização: diz ao
Founder QUAIS ferramentas de fato ganham seu lugar e QUAIS são candidatas ao
"critério de morte" (§6 da spec: se em 30d uma UA não poupou retrabalho, rasgar).

NÃO é o snapshot do Registro (isso é L1 · gerar-registro.py). É a leitura da SÉRIE
TEMPORAL de execuções — o sinal que transforma o plano de controle em decisão.

DETERMINÍSTICO: rodar 2× no mesmo commit, sobre o mesmo JSONL → saída byte-idêntica
(período vem dos próprios dados, não de wall-clock; carimbo de origem = SHA do commit).

ZONA VERDE: lê só metadado de governança (o log já é fechado por construção em
mc-audit.py · zero PII). NÃO sela, NÃO escreve no Vault.

Uso:
    python3 .claude/registro/ler-audit.py                       # log ao vivo (audit.jsonl)
    python3 .claude/registro/ler-audit.py --fixture             # usa o fixture sintético
    python3 .claude/registro/ler-audit.py --in PATH.jsonl       # log específico
    python3 .claude/registro/ler-audit.py --md SAIDA.md         # também escreve a view .md
Hierarquia: D > C > V · Proof-First · v0.1 PROVISIONAL · 2026-06-03
"""
import json
import os
import subprocess
import sys
from collections import Counter

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
REPO_ROOT = os.path.abspath(os.path.join(SCRIPT_DIR, "..", ".."))
REGISTRO_JSON = os.path.join(SCRIPT_DIR, "registro-unidades-agenticas.json")
AUDIT_DIR = os.path.join(SCRIPT_DIR, "audit")
LIVE_LOG = os.path.join(AUDIT_DIR, "audit.jsonl")
FIXTURE_LOG = os.path.join(AUDIT_DIR, "audit-FIXTURE.jsonl")

GATE_ORDER = ["R1", "R2", "R3"]
ZONA_ORDER = ["Verde", "Amarela", "Vermelha"]


def rel(path):
    return os.path.relpath(path, REPO_ROOT).replace("\\", "/")


def commit_sha():
    try:
        r = subprocess.run(["git", "-C", REPO_ROOT, "rev-parse", "--short", "HEAD"],
                           capture_output=True, text=True, timeout=10)
        return r.stdout.strip() or "[sem-git]"
    except Exception:
        return "[sem-git]"


def carregar_registro():
    """Conjunto completo de UAs do Registro (completas + incompletas) → mapa id→meta."""
    try:
        reg = json.load(open(REGISTRO_JSON, encoding="utf-8"))
    except Exception:
        return {}, "[registro ausente]"
    idx = {}
    for u in reg.get("unidades", []) + reg.get("incompletas", []):
        if u.get("id"):
            idx[u["id"]] = u
    return idx, reg.get("_meta", {}).get("gerado_de_commit", "?")


def carregar_log(path):
    """Lê o JSONL (tolerante a linha quebrada — fail-soft por linha)."""
    eventos = []
    if not os.path.isfile(path):
        return eventos
    for ln in open(path, encoding="utf-8", errors="ignore"):
        ln = ln.strip()
        if not ln:
            continue
        try:
            eventos.append(json.loads(ln))
        except Exception:
            continue  # linha corrompida não derruba a leitura
    return eventos


def analisar(eventos, registro):
    # Linhas-sentinela (event começa com '_', ex.: rótulo de fixture sintético)
    # não são dados — descarta antes de qualquer contagem (Proof-First: o rótulo
    # vive NO dado sem poluir a métrica).
    reais = [e for e in eventos if not str(e.get("event", "")).startswith("_")]
    # Só contamos eventos de invocação (não 'result') p/ não contar 2× quando os
    # dois hooks (Pre+Post) estão fiados.
    inv = [e for e in reais if e.get("event", "invoke") == "invoke"]

    por_ua = Counter(e.get("ua") for e in inv if e.get("ua"))
    sessoes = {e.get("sessao_hash") for e in inv if e.get("sessao_hash")}

    # Carga de governança / superfície LGPD: pela verdade do Registro (não pelo
    # que o log carimbou), p/ refletir a classificação canônica atual.
    por_gate, por_zona = Counter(), Counter()
    fora_registro = Counter()
    for e in inv:
        uid = e.get("ua")
        meta = registro.get(uid)
        if meta:
            por_gate[meta.get("gate") or "?"] += 1
            por_zona[meta.get("zona") or "?"] += 1
        else:
            fora_registro[uid] += 1

    # Critério de morte (§6): UAs no Registro que NUNCA apareceram no log.
    rodaram = set(por_ua)
    nunca = sorted(uid for uid in registro if uid not in rodaram)

    # Cobertura de telemetria: quantas UAs declaram emite_audit=true.
    opt_in = sorted(uid for uid, m in registro.items() if m.get("emite_audit") is True)

    # Período coberto: min/max ts DOS DADOS (determinístico · não wall-clock).
    ts = sorted(e.get("ts") for e in inv if e.get("ts"))
    periodo = (ts[0], ts[-1]) if ts else (None, None)

    return {
        "total_eventos": len(reais),
        "total_invocacoes": len(inv),
        "sessoes_distintas": len(sessoes),
        "periodo": periodo,
        "por_ua": por_ua,
        "por_gate": por_gate,
        "por_zona": por_zona,
        "fora_registro": fora_registro,
        "nunca": nunca,
        "opt_in": opt_in,
        "total_uas_registro": len(registro),
    }


def render(a, fonte, sha):
    L = []
    L.append("# Resumo de Telemetria (RUA · L5) — view")
    L.append("")
    L.append("> **GERADO — não editar à mão.** Alça de otimização sobre o log de auditoria.")
    L.append(f"> Regenere: `python3 .claude/registro/ler-audit.py`. Derivado · Zona Verde · NÃO selado.")
    L.append("")
    L.append(f"- **Commit de origem:** `{sha}`")
    L.append(f"- **Fonte (log):** `{fonte}`")
    p0, p1 = a["periodo"]
    L.append(f"- **Período coberto:** {p0 or '—'} → {p1 or '—'}")
    L.append(f"- **Eventos:** {a['total_eventos']} · **invocações:** {a['total_invocacoes']} · "
             f"**sessões distintas:** {a['sessoes_distintas']}")
    L.append(f"- **Cobertura de telemetria:** {len(a['opt_in'])} de {a['total_uas_registro']} UAs com `emite_audit: true`")
    L.append("")

    L.append("## Ranking de invocações (o que ganha seu lugar)")
    L.append("")
    if a["por_ua"]:
        L.append("| # | UA | invocações |")
        L.append("|---|---|---|")
        # count desc, depois id asc → determinístico
        ordem = sorted(a["por_ua"].items(), key=lambda kv: (-kv[1], kv[0]))
        for i, (uid, n) in enumerate(ordem, 1):
            L.append(f"| {i} | `{uid}` | {n} |")
    else:
        L.append("_(nenhuma invocação no log)_")
    L.append("")

    L.append("## ⚰️ Critério de morte (§6) — UAs que NUNCA rodaram no período")
    L.append("")
    L.append("> Candidatas a rasgar se em 30d não pouparem decisão/retrabalho. Não é veredito — é sinal p/ o Founder.")
    L.append("")
    if a["nunca"]:
        for uid in a["nunca"]:
            L.append(f"- `{uid}`")
    else:
        L.append("_(todas as UAs do Registro rodaram ao menos uma vez)_")
    L.append("")

    L.append("## Carga de governança (quanto o tráfego custa de supervisão humana)")
    L.append("")
    L.append("| gate | invocações |")
    L.append("|---|---|")
    for g in GATE_ORDER:
        L.append(f"| **{g}** | {a['por_gate'].get(g, 0)} |")
    outros_g = sorted(k for k in a["por_gate"] if k not in GATE_ORDER)
    for g in outros_g:
        L.append(f"| {g} | {a['por_gate'][g]} |")
    L.append("")

    L.append("## Superfície LGPD (quanto do tráfego toca zona sensível)")
    L.append("")
    L.append("| zona | invocações |")
    L.append("|---|---|")
    for z in ZONA_ORDER:
        L.append(f"| {z} | {a['por_zona'].get(z, 0)} |")
    outros_z = sorted(k for k in a["por_zona"] if k not in ZONA_ORDER)
    for z in outros_z:
        L.append(f"| {z} | {a['por_zona'][z]} |")
    L.append("")

    if a["fora_registro"]:
        L.append("## ⚠️ Rodaram FORA do Registro (dívida de cobertura vista em runtime)")
        L.append("")
        for uid, n in sorted(a["fora_registro"].items(), key=lambda kv: (-kv[1], kv[0])):
            L.append(f"- `{uid}` — {n}× (sem bloco `rua:` · instrumentar)")
        L.append("")

    L.append("---")
    L.append("**D > C > V** · Proof-First · Zona Verde · *gerado, não mantido* · ∞")
    return "\n".join(L) + "\n"


def main():
    args = sys.argv[1:]
    if "--fixture" in args:
        fonte = FIXTURE_LOG
    elif "--in" in args:
        fonte = args[args.index("--in") + 1]
    else:
        fonte = LIVE_LOG

    md_out = None
    if "--md" in args:
        md_out = args[args.index("--md") + 1]

    registro, _ = carregar_registro()
    eventos = carregar_log(fonte)
    a = analisar(eventos, registro)
    sha = commit_sha()
    texto = render(a, rel(fonte) if os.path.isabs(fonte) or os.path.exists(fonte) else fonte, sha)

    sys.stdout.write(texto)
    if md_out:
        with open(md_out, "w", encoding="utf-8") as fh:
            fh.write(texto)
        sys.stderr.write(f"\n→ view escrita em {rel(os.path.abspath(md_out))}\n")


if __name__ == "__main__":
    main()
