#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
cofre-lint — Stop hook GENERALIZADO (motor de proibições por-cofre)
===================================================================
Motor extraído do mc-lint.py do Meu Cumpadre e DESACOPLADO da identidade MC.
As regras NÃO são mais hardcoded: vêm de `lint-rules.json` colocado ao lado
deste arquivo. Cada cofre (mcholding, ômega, …) define as PRÓPRIAS proibições.

MODO PADRÃO: warn (env ausente → avisa, NÃO bloqueia)
MODO block:  COFRE_LINT_MODE=block (bloqueia o Stop e devolve o motivo)

Escopo: varre SÓ linhas ADICIONADAS no working tree (git diff HEAD + novos),
apenas .md/.txt/.json. Pula linhas que enunciam a própria proibição.

lint-rules.json (schema):
{
  "skip_path_fragments": ["99-ARQUIVO/", "_LEGADO", ".bak"],
  "negation_markers": ["❌", "⚠️", "vedad", "superad", "nunca "],
  "rules": [
    {"pattern": "regex", "label": "rótulo curto", "fix": "forma correta"}
  ]
}
Sem o arquivo (ou rules vazias) → no-op silencioso. Hierarquia do cofre prevalece.
"""
import json
import os
import re
import subprocess
import sys

MODE = os.environ.get("COFRE_LINT_MODE", "warn").strip().lower()
HERE = os.path.dirname(os.path.abspath(__file__))
RULES_FILE = os.path.join(HERE, "lint-rules.json")

SCAN_EXT = (".md", ".txt", ".json", ".markdown")

DEFAULT_SKIP = (".claude/hooks/", ".claude/agents/", "_LEGADO", ".bak")
DEFAULT_NEGATION = ("❌", "⚠️", "🚫", "vedad", "proibi", "superad", "nunca ",
                    "não citar", "nao citar", "errata", "descartad", "deprecad")


def load_config():
    """Carrega regras do cofre. Ausência = engine inerte (sem regras → sem ruído)."""
    if not os.path.exists(RULES_FILE):
        return [], DEFAULT_SKIP, DEFAULT_NEGATION
    try:
        with open(RULES_FILE, encoding="utf-8") as fh:
            cfg = json.load(fh)
    except Exception as e:
        # Config quebrada não pode travar o cofre: avisa e segue inerte.
        print(json.dumps({"systemMessage": f"cofre-lint: lint-rules.json inválido ({e}) — engine inerte."}))
        return [], DEFAULT_SKIP, DEFAULT_NEGATION
    skip = tuple(cfg.get("skip_path_fragments", [])) + DEFAULT_SKIP
    neg = tuple(m.lower() for m in cfg.get("negation_markers", [])) or DEFAULT_NEGATION
    rules = []
    for r in cfg.get("rules", []):
        try:
            rx = re.compile(r["pattern"], re.IGNORECASE | re.UNICODE)
            rules.append((rx, r.get("label", "regra"), r.get("fix", "")))
        except Exception:
            continue
    return rules, skip, neg


def is_negation(line, markers):
    low = line.lower()
    return any(m in low for m in markers)


def added_lines():
    out = []
    try:
        diff = subprocess.run(["git", "diff", "HEAD", "--unified=0", "--no-color"],
                              capture_output=True, text=True, timeout=20).stdout
    except Exception:
        diff = ""
    cur_file, cur_no = None, 0
    for raw in diff.splitlines():
        if raw.startswith("+++ b/"):
            cur_file, cur_no = raw[6:], 0
        elif raw.startswith("@@"):
            m = re.search(r"\+(\d+)", raw)
            cur_no = int(m.group(1)) if m else 0
        elif raw.startswith("+") and not raw.startswith("+++"):
            out.append((cur_file, cur_no, raw[1:])); cur_no += 1
    try:
        untracked = subprocess.run(["git", "ls-files", "--others", "--exclude-standard"],
                                   capture_output=True, text=True, timeout=20).stdout.splitlines()
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
    out = []
    try:
        files = subprocess.run(["git", "ls-files"], capture_output=True, text=True, timeout=20).stdout.splitlines()
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


def scan(lines, rules, skip, neg):
    findings = []
    for fpath, no, text in lines:
        if not fpath or not fpath.endswith(SCAN_EXT):
            continue
        if any(frag in fpath for frag in skip):
            continue
        if is_negation(text, neg):
            continue
        for rx, label, fix in rules:
            if rx.search(text):
                findings.append((fpath, no, label, fix, text.strip()[:120]))
    return findings


def render(findings, mode):
    head = f"🔍 cofre-lint · {len(findings)} possível(is) violação(ões):"
    body = [f"  • [{lb}] {fp}:{no}\n      ↳ {fx}\n      «{sn}»"
            for fp, no, lb, fx, sn in findings[:25]]
    extra = "" if len(findings) <= 25 else f"\n  … +{len(findings)-25} outras."
    tail = ("\n(BLOCK-MODE: turno BLOQUEADO até corrigir. Falso-positivo? marque a linha "
            "com ❌/'vedad'/'superad'.)" if mode == "block"
            else "\n(warn-mode: turno NÃO bloqueado. Falso-positivo? marque com ❌/'vedad'.)")
    return head + "\n" + "\n".join(body) + extra + tail


def main():
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

    rules, skip, neg = load_config()
    if not rules:
        sys.exit(0)  # cofre sem proibições definidas → engine inerte

    manual_all = "--all" in sys.argv
    lines = all_tracked_lines() if manual_all else added_lines()
    findings = scan(lines, rules, skip, neg)

    if manual_all:
        if findings:
            print(render(findings, "warn")); sys.exit(1)
        print("✅ cofre-lint: nenhuma violação (varredura completa)."); sys.exit(0)

    if not findings:
        sys.exit(0)

    msg = render(findings, MODE)
    if MODE == "block":
        print(json.dumps({"decision": "block", "reason": msg})); sys.exit(0)
    print(json.dumps({"systemMessage": msg})); sys.exit(0)


if __name__ == "__main__":
    main()
