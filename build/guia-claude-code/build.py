#!/usr/bin/env python3
"""Monta o PDF do Guia Claude Code para o Meu Cumpadre (WeasyPrint)."""
import sys, pathlib
from weasyprint import HTML, CSS

BASE = pathlib.Path(__file__).parent
body = (BASE / "body.html").read_text(encoding="utf-8")
css = (BASE / "theme.css").read_text(encoding="utf-8")

html_doc = f"""<!DOCTYPE html>
<html lang="pt-BR"><head><meta charset="utf-8"><title>Guia Claude Code — Meu Cumpadre</title></head>
<body>{body}</body></html>"""

out = BASE / "MC-GUIA-ClaudeCode-Canivete-v1_0-2026-0605.pdf"
HTML(string=html_doc, base_url=str(BASE)).write_pdf(
    str(out), stylesheets=[CSS(string=css)]
)
print("PDF gerado:", out, out.stat().st_size, "bytes")
