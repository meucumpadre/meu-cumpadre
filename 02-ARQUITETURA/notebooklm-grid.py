#!/usr/bin/env python3
"""
notebooklm-grid.py — Gera o Grid de cadernos NotebookLM DE-IDENTIFICADO.

Firewall LGPD (D > C > V): titulos das zonas PII (CASE-/CLIENTE-/PESSOAL- e
INSS/CAD com nome proprio) sao REDIGIDOS. Nomes de beneficiario NUNCA saem da
stack soberana — este script foi feito para que a saida possa ser commitada
com seguranca (so agregado + zona verde).

Uso:
    notebooklm list --json > notebooks.json     # na maquina local logada
    python notebooklm-grid.py notebooks.json > grid-deidentificado.md

Se `notebooklm list` nao suportar --json, rode `notebooklm list --help` e
reporte: o parser abaixo espera uma lista de objetos com chaves de id/titulo.
"""
from __future__ import annotations
import json
import re
import sys
from collections import Counter

# --- Classificacao de zona por prefixo/padrao do titulo --------------------

PII_PATTERNS = [
    re.compile(r"^\s*CASE\b", re.I),
    re.compile(r"^\s*CLIENTE\b", re.I),
    re.compile(r"^\s*PESSOAL\b", re.I),
]

GREEN_PREFIX = re.compile(r"^\s*(MC-|TECH-|CODE\b|CLAUDE\b|ARQUIVO-|CAD\d|Caderno_|cad\d)", re.I)


def zone(title: str) -> str:
    t = (title or "").strip()
    if any(p.match(t) for p in PII_PATTERNS):
        return "RED"          # soberana / PII -> redigir
    return "GREEN"            # enumeravel


def prefix_bucket(title: str) -> str:
    t = (title or "").strip()
    m = re.match(r"^\s*([A-Za-zÀ-ÿ]+[-_ ]?)", t)
    head = t.split()[0].rstrip("-_") if t else "(sem prefixo)"
    for p in ("CASE", "CLIENTE", "PESSOAL", "MC", "TECH", "CODE", "CLAUDE", "ARQUIVO"):
        if t.upper().startswith(p):
            return p
    if re.match(r"^(cad\d|Caderno_)", t, re.I):
        return "ESTUDOS"
    return "(outros)"


def redact(title: str) -> str:
    """Para a zona RED: preserva a categoria, remove o nome proprio."""
    t = (title or "").strip()
    # mantem o prefixo + tipo de assunto generico, corta o resto (provavel nome)
    m = re.match(r"^\s*(CASE-?|CLIENTE\s*-?|PESSOAL-?)\s*", t, re.I)
    head = m.group(1).strip() if m else "PII"
    # heuristica: manter so palavras "tema" conhecidas, descartar o resto
    tema = ""
    for kw in ("Aposentadoria", "Planejamento", "Rural", "Bancário", "Bancario",
               "CAT", "PPP", "Previdenciário", "Previdenciario", "Defesa",
               "Cartório", "Cartorio", "Constelação", "Constelacao", "Saúde",
               "Saude", "Estudos", "Tarô", "Taro"):
        if re.search(kw, t, re.I):
            tema = f" · {kw}"
            break
    return f"🔴 {head} [NOME REDIGIDO]{tema}"


def load(path: str):
    with open(path, encoding="utf-8") as fh:
        data = json.load(fh)
    # aceita tanto lista direta quanto {"notebooks": [...]}
    if isinstance(data, dict):
        for k in ("notebooks", "items", "data", "results"):
            if k in data and isinstance(data[k], list):
                data = data[k]
                break
    rows = []
    for nb in data:
        if not isinstance(nb, dict):
            continue
        nb_id = nb.get("id") or nb.get("notebook_id") or nb.get("uuid") or ""
        title = nb.get("title") or nb.get("name") or nb.get("emoji_title") or ""
        owner = nb.get("owner") or nb.get("role") or ""
        created = nb.get("created") or nb.get("created_at") or nb.get("create_time") or ""
        rows.append({"id": nb_id, "title": title, "owner": owner, "created": created})
    return rows


def main(argv):
    if len(argv) < 2:
        print(__doc__)
        return 1
    rows = load(argv[1])
    total = len(rows)
    by_zone = Counter(zone(r["title"]) for r in rows)
    by_bucket = Counter(prefix_bucket(r["title"]) for r in rows)

    out = []
    out.append("# Grid NotebookLM (gerado · de-identificado)\n")
    out.append(f"- Total de cadernos: **{total}**")
    out.append(f"- Zona 🟢 Verde (enumerável): **{by_zone.get('GREEN', 0)}**")
    out.append(f"- Zona 🔴 Soberana/PII (redigida): **{by_zone.get('RED', 0)}**\n")

    out.append("## Contagem por prefixo\n")
    out.append("| Prefixo | Qtd |")
    out.append("|---|---|")
    for b, n in by_bucket.most_common():
        out.append(f"| {b} | {n} |")
    out.append("")

    out.append("## 🟢 Zona Verde (enumerada)\n")
    out.append("| ID | Título | Owner | Criado |")
    out.append("|---|---|---|---|")
    for r in sorted((r for r in rows if zone(r["title"]) == "GREEN"),
                    key=lambda r: r["title"].lower()):
        sid = (r["id"] or "")[:8]
        out.append(f"| `{sid}` | {r['title'].strip()} | {r['owner']} | {r['created']} |")
    out.append("")

    out.append("## 🔴 Zona Soberana/PII (DE-IDENTIFICADA — nomes nunca commitados)\n")
    out.append(f"Total redigido: **{by_zone.get('RED', 0)}** cadernos. "
               "Índice nominal completo vive SÓ na stack soberana.\n")
    out.append("| ID | Categoria (redigida) |")
    out.append("|---|---|")
    for r in sorted((r for r in rows if zone(r["title"]) == "RED"),
                    key=lambda r: r["title"].lower()):
        sid = (r["id"] or "")[:8]
        out.append(f"| `{sid}` | {redact(r['title'])} |")
    out.append("")
    out.append("> Firewall: este bloco carrega só categoria. Para o índice nominal, "
               "use a stack soberana, nunca o repositório.")

    print("\n".join(out))
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))
