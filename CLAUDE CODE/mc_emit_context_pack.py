#!/usr/bin/env python3
"""
MC Emit Context Pack — Grok Build helper v0.1
Pequena ferramenta de build para gerar consistentemente a tabela + BLOCO PURO + estrutura exigida pelo MC-RAG.

Uso:
  python mc_emit_context_pack.py --assunto "Obsidian MCP Claude Code" --foco "Técnico" --registro "🛠️" ...

Saída: Markdown pronto (tabela + bloco) que você cola no comparativo ou colheita.

Alinha com papéis v2.2 (Grok Build como preparador de pacotes 100% Compasso-compliant).
"""

import argparse
import sys
from datetime import datetime
from pathlib import Path

def emit_pack(assunto, foco, fontes):
    """fontes: list of dicts with 'nome', 'url', 'registro', 'escalao', 'jogada'"""
    now = datetime.now().strftime("%Y-%m-%d")
    header = f"""---
assunto: {assunto}
foco_escalao: {foco}
data: {now}
gerado_por: Grok Build (mc_emit_context_pack.py)
compasso: REGISTRO x ESCALAO x JOGADA
---
# Pacote de Contexto - {assunto}

**Filtros aplicados (exemplo):** recencia 2025-2026, convergencia tecnica real (codigo + passos), evitar hype sem demo, recorte operacao MC (vault local, integracoes sem poluicao).

| Fonte (Nome + Link) | Registro | Escalao | Jogada Causal |
|---------------------|----------|---------|---------------|
"""
    rows = []
    urls = []
    for f in fontes:
        rows.append(f"| [{f['nome']}]({f['url']}) | {f['registro']} | {f['escalao']} | {f['jogada']} |")
        urls.append(f['url'])

    table = "\n".join(rows)
    bloco = "\n".join(urls)

    full = f"""{header}{table}

## BLOCO DE TEXTO PURO (Ctrl+C -> Ctrl+V NotebookLM)

{bloco}

**Proximo:** Cole no Falcao (Gemini) ou NotebookLM MTODO/ASSUNTO. Depois rode validador de Compasso se existir.
"""
    return full

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--assunto", required=True)
    parser.add_argument("--foco", default="Técnico")
    parser.add_argument("--out", type=Path)
    # For simplicity in v0.1, fontes hardcoded via --fonte "Nome|url|🛠️|Técnico|jogada texto"
    parser.add_argument("--fonte", action="append", help="Repita: Nome|url|REGISTRO|ESCALAO|jogada curta")

    args = parser.parse_args()

    if not args.fonte:
        print("Use --fonte 'Nome|https://...|🛠️|Técnico|Injetar no MTODO: ...' (repita para múltiplas)", file=sys.stderr)
        sys.exit(1)

    fontes = []
    for raw in args.fonte:
        parts = [p.strip() for p in raw.split("|")]
        if len(parts) != 5:
            print(f"Formato errado: {raw}", file=sys.stderr)
            sys.exit(1)
        reg_map = {"🎯": "[Bala de Prata]", "🛠️": "[Ensina-fazendo]", "💎": "[Outlier]"}
        fontes.append({
            "nome": parts[0],
            "url": parts[1],
            "registro": reg_map.get(parts[2], parts[2]),
            "escalao": parts[3],
            "jogada": parts[4]
        })

    md = emit_pack(args.assunto, args.foco, fontes)

    if args.out:
        args.out.write_text(md, encoding="utf-8")
        print(f"Escrito: {args.out}")
    else:
        print(md)

if __name__ == "__main__":
    main()