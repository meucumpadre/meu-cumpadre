#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
mc-lint — Stop hook do Meu Cumpadre (Fase 1 · MB Best-Practices)
================================================================
Converte as PROIBIÇÕES ABSOLUTAS do CLAUDE.md de conselho (advisory) em
verificação determinística (best practice oficial: "hooks são pra coisas que
devem acontecer toda vez, com zero exceção").

MODO PADRÃO DO CÓDIGO: warn  (env ausente → avisa via systemMessage · NÃO bloqueia)
MODO block:             MC_LINT_MODE=block  (bloqueia o Stop e devolve o motivo)
IMPLANTADO EM settings.json: block  (decisão soberana do Founder · R1 · 2026-06-01)

Escopo: varre SÓ as linhas ADICIONADAS no working tree (git diff HEAD + arquivos
novos não-rastreados), apenas .md/.txt/.json. Pula linhas que são o próprio
enunciado de uma proibição (marcadores de negação) pra não autodelatar a seção
de Proibições Absolutas e os memoriais de errata.

Uso manual (teste):  python3 .claude/hooks/mc-lint.py --all
Hierarquia: D > C > V · Proof-First · v0.1 PROVISIONAL · 2026-06-01
"""
import json
import os
import re
import subprocess
import sys

MODE = os.environ.get("MC_LINT_MODE", "warn").strip().lower()
if "--block" in sys.argv:
    MODE = "block"
elif "--warn" in sys.argv:
    MODE = "warn"

# Extensões que carregam doutrina/artefato MC (onde as proibições importam).
SCAN_EXT = (".md", ".txt", ".json", ".markdown")

# Caminhos legados/backup — por definição não regem o presente.
SKIP_PATH_FRAGMENTS = (
    "99-ARQUIVO-Legado/",
    "_LEGADO",
    "_HISTORICO/",
    ".bak",
    "CLAUDE.md.",          # backups datados do CLAUDE.md
    ".claude/hooks/",      # o próprio hook (este arquivo cita os padrões)
    ".claude/agents/",     # defs de subagente enunciam as regras no checklist (mesma classe de hooks/)
)

# Marcadores de NEGAÇÃO: se a linha adicionada contém um destes, ela está
# *enunciando* a proibição (não cometendo-a) → pula. É o que impede a seção
# "Proibições Absolutas" e os memoriais de errata de se autodelatarem.
NEGATION_MARKERS = (
    "❌", "⚠️", "🚫",
    "superado", "superada", "vedad", "proibi", "nunca ", "não citar",
    "não é ", "nao citar", "nao e ", "corrigido para", "corrigida para",
    "eliminad", "ciclo encerrado", "→ é", "-> é", "→ e", "errata",
    "não confundir", "nao confundir", "não usar", "nao usar",
    "substituí", "substitui", "descartad", "deprecad",
)

# ── Catálogo de proibições (padrão contextual, rótulo, correção) ──────────────
# Cada regra: (regex compilada, rótulo curto, lembrete da forma correta)
def C(p):  # compila com IGNORECASE + UNICODE
    return re.compile(p, re.IGNORECASE | re.UNICODE)

RULES = [
    (C(r"R\$\s*900\b"),
     "Preço CadÚnico superado",
     "R$ 900 foi superado — CadÚnico Φ₁c é R$ 1.500 (ADR-007 v3.x)."),

    (C(r"(?:1\.?500[^\n]{0,40}(?:standard|padr[ãa]o))|(?:(?:standard|padr[ãa]o)[^\n]{0,40}1\.?500)"),
     "R$ 1.500 citado como Standard",
     "Standard (Φ₁) é R$ 2.200. R$ 1.500 é exclusivo do CadÚnico (Φ₁c)."),

    (C(r"(?:Φ₂|Phi\s*2|Phi₂)[^\n]{0,30}(?:B2C|cobran)|(?:B2C|cobran)[^\n]{0,30}(?:Φ₂|Phi\s*2|Phi₂)"),
     "Φ₂ como cobrança B2C",
     "Φ₂ foi ELIMINADO do B2C (ADR-007 v3.x). Zero cobrança B2C adicional ao Φ₁."),

    (C(r"(?:Φ₁[^\n]{0,30}3\s*[×x])|(?:3\s*[×x][^\n]{0,30}(?:Φ₁|standard|padr[ãa]o))"),
     "Φ₁ standard com parcelamento 3×",
     "Φ₁ standard é 4× (Lei 14.181/2021 art.54-A — 3× viola teto 35% SM)."),

    (C(r"Ψ₁[^\n]{0,40}(?:200\D{0,3}800|R\$\s*200)"),
     "Ψ₁ como faixa única R$200-800",
     "Ψ₁ são 3 tiers: R$600-800 / R$1.200-1.800 / R$2.500-4.000 (ADR-007 v3.4)."),

    (C(r"Ψ₂[^\n]{0,30}(?:299|599)|\b299\D{0,3}599\b"),
     "Ψ₂ como R$299-599",
     "Ψ₂ são 3 tiers: R$699 / R$1.499 / R$2.499/mês (ADR-007 v3.4)."),

    (C(r"Router\s*[-–]?\s*Ethics\s*(?:9|10)(?:\.0)?\b|\b9\d\s*n[óo]s\b|\b105\s*n[óo]s\b|Score\s*≥?\s*39"),
     "Router-Ethics versão/contagem superada",
     "Atual: Router-Ethics 11.0 · 140 nós · 7 hooks · threshold tripartite."),

    (C(r"legaltech|escrit[óo]rio com IA|marketplace de advogados"),
     "Categorização proibida do MC",
     "MC = infraestrutura de simetria informacional (atividade-meio). Não é legaltech/escritório com IA/marketplace."),

    (C(r"Juliana\s+Alencar"),
     "Nome encerrado: Juliana Alencar",
     "É Dra. Juliana Pereira de Melo (OAB-GO 38.662). Alencar = ciclo encerrado 13/04/2026."),

    (C(r"servidor[^\n]{0,15}INSS[^\n]{0,15}ativ"),
     "Alessandro como servidor INSS ativo",
     "Vínculo extinto (Portaria PRES/INSS 1.505/2025). 22 anos INSS, hoje Founder/CEO."),

    (C(r"(?:senha[^\n]{0,40}ClickUp)|(?:ClickUp[^\n]{0,40}senha)|(?:gov\.?br[^\n]{0,30}ClickUp)"),
     "Senha gov.br associada ao ClickUp",
     "Senha gov.br NUNCA no ClickUp (ADR-009a) — custódia Bitwarden Org MC."),

    (C(r"DeepSeek"),
     "DeepSeek citado",
     "DeepSeek é vedado (não é opção viável). Stack: Gemini Flash + Llama 4 Scout + Claude."),

    (C(r"Autentique"),
     "Autentique citada",
     "Autentique vedada (ADR-014, 10/05/2026) — plataforma ativa é ZapSign."),

    (C(r"(?:garant\w*|promet\w*)[^\n]{0,30}(?:concess|deferimento|resultado jur|benef[íi]cio (?:concedido|garantido))"),
     "Promessa de resultado/prazo INSS",
     "Nunca prometer prazo de concessão nem resultado jurídico (Firewall OAB · Correção 48h)."),
]


def is_negation(line: str) -> bool:
    low = line.lower()
    return any(m in low for m in NEGATION_MARKERS)


def added_lines():
    """Gera (arquivo, nº_linha_aprox, texto) das linhas ADICIONADAS no working tree."""
    out = []
    # 1) Mudanças rastreadas vs HEAD (unified=0 → só hunks alterados)
    try:
        diff = subprocess.run(
            ["git", "diff", "HEAD", "--unified=0", "--no-color"],
            capture_output=True, text=True, timeout=20,
        ).stdout
    except Exception:
        diff = ""
    cur_file, cur_no = None, 0
    for raw in diff.splitlines():
        if raw.startswith("+++ b/"):
            cur_file = raw[6:]
            cur_no = 0
        elif raw.startswith("@@"):
            m = re.search(r"\+(\d+)", raw)
            cur_no = int(m.group(1)) if m else 0
        elif raw.startswith("+") and not raw.startswith("+++"):
            out.append((cur_file, cur_no, raw[1:]))
            cur_no += 1
    # 2) Arquivos novos não-rastreados (tudo é "adicionado")
    try:
        untracked = subprocess.run(
            ["git", "ls-files", "--others", "--exclude-standard"],
            capture_output=True, text=True, timeout=20,
        ).stdout.splitlines()
    except Exception:
        untracked = []
    for f in untracked:
        if not f:
            continue
        try:
            with open(f, encoding="utf-8", errors="ignore") as fh:
                for i, ln in enumerate(fh, 1):
                    out.append((f, i, ln.rstrip("\n")))
        except Exception:
            continue
    return out


def all_tracked_lines():
    """Modo --all: varre conteúdo completo dos arquivos rastreados (teste)."""
    out = []
    try:
        files = subprocess.run(
            ["git", "ls-files"], capture_output=True, text=True, timeout=20
        ).stdout.splitlines()
    except Exception:
        files = []
    for f in files:
        try:
            with open(f, encoding="utf-8", errors="ignore") as fh:
                for i, ln in enumerate(fh, 1):
                    out.append((f, i, ln.rstrip("\n")))
        except Exception:
            continue
    return out


def scan(lines):
    findings = []
    for fpath, no, text in lines:
        if not fpath:
            continue
        if not fpath.endswith(SCAN_EXT):
            continue
        if any(frag in fpath for frag in SKIP_PATH_FRAGMENTS):
            continue
        if is_negation(text):       # linha enuncia a proibição → não a comete
            continue
        for rx, label, fix in RULES:
            if rx.search(text):
                findings.append((fpath, no, label, fix, text.strip()[:120]))
    return findings


def render(findings, mode="warn"):
    head = f"🔍 mc-lint · {len(findings)} possível(is) violação(ões) de Proibição Absoluta MC:"
    body = []
    for fpath, no, label, fix, snippet in findings[:25]:
        body.append(f"  • [{label}] {fpath}:{no}\n      ↳ {fix}\n      «{snippet}»")
    extra = "" if len(findings) <= 25 else f"\n  … +{len(findings)-25} outras."
    if mode == "block":
        tail = ("\n(BLOCK-MODE: turno BLOQUEADO até corrigir. Revise contra ADR-007/009a/014. "
                "Falso-positivo legítimo? marque a linha com ❌/'superado'/'vedad' pra liberar.)")
    else:
        tail = ("\n(warn-mode: turno NÃO bloqueado. Revise contra ADR-007/009a/014. "
                "Falso-positivo? marque a linha com ❌/'superado'/'vedad'.)")
    return head + "\n" + "\n".join(body) + extra + tail


def main():
    # Evita loop infinito se já reativado por um Stop anterior.
    stdin_data = ""
    if not sys.stdin.isatty():
        try:
            stdin_data = sys.stdin.read()
        except Exception:
            stdin_data = ""
    try:
        payload = json.loads(stdin_data) if stdin_data.strip() else {}
    except Exception:
        payload = {}
    if payload.get("stop_hook_active"):
        sys.exit(0)

    manual_all = "--all" in sys.argv
    lines = all_tracked_lines() if manual_all else added_lines()
    findings = scan(lines)

    if manual_all:
        # Execução de teste: relatório legível no stdout.
        if findings:
            print(render(findings, "warn"))
            sys.exit(1)
        print("✅ mc-lint: nenhuma violação encontrada (varredura completa).")
        sys.exit(0)

    if not findings:
        sys.exit(0)  # silêncio limpo: nada a reportar

    msg = render(findings, MODE)
    if MODE == "block":
        print(json.dumps({"decision": "block", "reason": msg}))
        sys.exit(0)
    # warn-mode (padrão): visível, não bloqueia
    print(json.dumps({"systemMessage": msg}))
    sys.exit(0)


if __name__ == "__main__":
    main()
