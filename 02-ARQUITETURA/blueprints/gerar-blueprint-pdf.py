#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
gerar-blueprint-pdf.py — Renderiza o Blueprint Técnico RUA (Markdown → PDF on-brand)
====================================================================================
Converte MC-BLUEPRINT-Tecnico-RUA-v1_0-2026-0603.md em PDF (markdown + weasyprint).
"gerado, não mantido": o canônico é o .md; o PDF é projeção. Zona Verde · não selado.

Uso:  python3 02-ARQUITETURA/blueprints/gerar-blueprint-pdf.py
Hierarquia: D > C > V · Proof-First · 2026-06-03
"""
import os
import re
import markdown
from weasyprint import HTML

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "MC-BLUEPRINT-Tecnico-RUA-v1_0-2026-0603.md")
OUT = os.path.join(HERE, "MC-BLUEPRINT-Tecnico-RUA-v1_0-2026-0603.pdf")

CSS = """
@page { size:A4; margin:18mm 15mm 16mm 15mm;
  @top-right { content:"Blueprint Técnico RUA · v1.0"; font:8pt 'DejaVu Sans'; color:#a08b3a; }
  @bottom-center { content:"MC · Zona Verde · D > C > V · gerado, não mantido"; font:7.5pt 'DejaVu Sans'; color:#9a9a9a; }
  @bottom-right { content:counter(page) " / " counter(pages); font:8pt 'DejaVu Sans'; color:#777; }
}
* { box-sizing:border-box; }
body { font-family:'DejaVu Sans', sans-serif; font-size:9.6pt; line-height:1.46; color:#23201a; }
h1 { color:#6b5000; font-size:21pt; margin:0 0 2px; }
h2 { color:#7a5c00; font-size:13.5pt; margin:16px 0 5px; padding-bottom:3px;
     border-bottom:2px solid #d9c463; break-after:avoid; }
h3 { color:#9a7d0a; font-size:11pt; margin:11px 0 3px; break-after:avoid; }
p { margin:5px 0; }
strong { color:#3a3225; }
a { color:#8a6d00; text-decoration:none; }
ul,ol { margin:5px 0 5px 0; padding-left:20px; }
li { margin:2.5px 0; }
hr { border:none; border-top:1px solid #e5dcb8; margin:12px 0; }
table { border-collapse:collapse; width:100%; margin:8px 0; font-size:8.7pt; break-inside:auto; }
th { background:#7a5c00; color:#fff; text-align:left; padding:4px 6px; font-size:8.6pt; }
td { border:1px solid #ddd2a8; padding:4px 6px; vertical-align:top; }
tr:nth-child(even) td { background:#faf7e8; }
code { font-family:'DejaVu Sans Mono', monospace; font-size:8.4pt; background:#f3eecf;
       padding:1px 3px; border-radius:3px; color:#5a4500; }
pre { font-family:'DejaVu Sans Mono', monospace; font-size:8pt; line-height:1.22;
      background:#15130d; color:#e8dfc0; padding:11px 12px; border-radius:7px;
      white-space:pre; overflow:visible; border-left:4px solid #b8860b; break-inside:avoid; }
pre code { background:none; color:inherit; padding:0; font-size:8pt; }
blockquote { border-left:3px solid #d9c463; background:#fcfaef; margin:8px 0; padding:6px 12px;
             color:#5a513c; font-size:9.2pt; }
h1 + hr, .frontmatter { color:#8a7c5a; }
"""

def main():
    raw = open(SRC, encoding="utf-8").read()
    # remove o frontmatter YAML (--- ... ---) do topo p/ não renderizar como texto
    raw = re.sub(r"^---\n.*?\n---\n", "", raw, count=1, flags=re.DOTALL)
    body = markdown.markdown(raw, extensions=["tables", "fenced_code", "sane_lists"])
    html = f"<!DOCTYPE html><html lang='pt-BR'><head><meta charset='utf-8'>" \
           f"<style>{CSS}</style></head><body>{body}</body></html>"
    HTML(string=html).write_pdf(OUT)
    print(f"✅ Blueprint PDF gerado: {OUT}")
    print(f"   {os.path.getsize(OUT)} bytes")

if __name__ == "__main__":
    main()
