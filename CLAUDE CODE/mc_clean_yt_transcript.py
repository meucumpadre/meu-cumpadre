#!/usr/bin/env python3
"""
MC Clean YT Transcript — Grok Build v0.1
Ferramenta de aplicação build para o ecossistema MC-RAG (NotebookLM x CODE x Obsidian).

Propósito:
- Limpar transcrições de YouTube (long form "engenharia reversa em tela") para injeção imediata no NotebookLM (caderno MÉTODO ou ASSUNTO).
- Gerar .md com frontmatter YAML compatível com Obsidian + CLAUDE.md conventions (tags, source, compasso).
- Respeitar Compasso MC-RÉGUA-COMPASSO: toda saída traz REGISTRO/ESCALÃO/JOGADA explícitos.
- Zero poluição: só texto estruturado + metadados limpos. Sem binários.

Uso rápido (após salvar no vault CLAUDE CODE/):
  python mc_clean_yt_transcript.py --input minha_transcricao.txt --url "https://youtube.com/watch?v=XXXX" --registro "🛠️" --escalao "Técnico" --jogada "Injeção no MTODO: passo a passo de Tweaks + handoff para Claude Code via Obsidian" --out "colheitas/limpo_yt_XXXX.md"

  # Ou paste interativo:
  python mc_clean_yt_transcript.py --stdin --url "..." --registro "💎" ...

Saídas seguem o padrão das colheitas v0_5: tabela de metadados + corpo limpo + (opcional) bloco para NotebookLM.

Requisitos: Python 3.11+ stdlib apenas (sem deps externas para máxima portabilidade no vault). Adicione yt-dlp + youtube-transcript-api depois se quiser --fetch.

Alinhado a:
- MC-RÉGUA-COMPASSO-Metodo-v1_0-2026-0601.md (Compasso + pipeline)
- _Papéis das Instâncias no Ecossistema MC‑RAG.md (v2.2, seção Grok Build)
- CLAUDE.md (frontmatter, Proof-First, D>C>V, jornada E0-E7)
- Exemplos de colheita em _ARQUIVO\_Engenharia Reversa\...

Autor: Grok Build (assumindo missão do embate) | Tolerância alvo: <5% ruído na fonte
"""

import argparse
import re
import sys
import textwrap
from datetime import datetime
from pathlib import Path
from typing import Optional, Dict, Any

# Padrões de limpeza (baseados em transcrições YT comuns + colheitas observadas)
TIMESTAMP_PATTERNS = [
    r'\[\d{1,2}:\d{2}(?::\d{2})?\]',           # [00:12] or [1:23:45]
    r'\(\d{1,2}:\d{2}(?::\d{2})?\)',           # (00:12)
    r'\b\d{1,2}:\d{2}(?::\d{2})?\b(?=\s|$)',   # bare 00:12 at start of token
    r'\d{1,2}:\d{2}:\d{2}\.\d{3}',             # 00:12:34.000 SRT style
]
SPEAKER_PATTERNS = [
    r'^(Speaker\s*\d*|Host|Entrevistado|Narrador|Você|Alex|Nome)\s*[:\-–]\s*',
    r'^\s*[A-Z][a-z]+:\s+',                     # Generic "Nome: "
]
MULTI_WS = re.compile(r'[ \t]+')
MULTI_NL = re.compile(r'\n{3,}')

def clean_text(raw: str) -> str:
    """Remove timestamps, speaker labels, normaliza whitespace. Mantém parágrafos reais."""
    text = raw
    for pat in TIMESTAMP_PATTERNS:
        text = re.sub(pat, '', text, flags=re.IGNORECASE)
    for pat in SPEAKER_PATTERNS:
        text = re.sub(pat, '', text, flags=re.MULTILINE | re.IGNORECASE)

    # Normaliza
    text = MULTI_WS.sub(' ', text)
    text = MULTI_NL.sub('\n\n', text)
    lines = [ln.strip() for ln in text.splitlines()]
    text = '\n'.join(ln for ln in lines if ln)

    # Quebras suaves para legibilidade (mantém densidade para NotebookLM)
    text = textwrap.fill(text, width=100, replace_whitespace=False, drop_whitespace=True)
    return text.strip()

def make_frontmatter(
    source_url: str,
    registro: str,
    escalao: str,
    jogada: str,
    titulo: Optional[str] = None,
    data_colheita: Optional[str] = None,
    extra: Optional[Dict[str, Any]] = None,
) -> str:
    """Emite frontmatter YAML manual (sem PyYAML dep). Compatível com Obsidian + CLAUDE.md."""
    if not data_colheita:
        data_colheita = datetime.now().strftime("%Y-%m-%d")
    fm = [
        "---",
        f"source: {source_url}",
        f"data_colheita: {data_colheita}",
        f"registro: {registro}",
        f"escalao: {escalao}",
        f"jogada: {jogada}",
        "tags: [youtube, transcricao-limpa, mc-rag, ensina-fazendo]",
        "tipo: colheita-yt-limpa",
        "status: pronto-para-injecao-notebooklm",
        "compasso: REGISTRO x ESCALAO x JOGADA (ver MC-RÉGUA-COMPASSO)",
        "tolerancia_erro: <5% (fonte curada por exclusao de timestamps/ruido)",
    ]
    if extra:
        for k, v in extra.items():
            if isinstance(v, (list, tuple)):
                fm.append(f"{k}: {list(v)}")
            else:
                fm.append(f"{k}: {v}")
    fm.append("---")
    return "\n".join(fm)

def build_output_md(
    cleaned: str,
    source_url: str,
    registro: str,
    escalao: str,
    jogada: str,
    titulo: Optional[str] = None,
    extra_meta: Optional[Dict[str, Any]] = None,
) -> str:
    header = make_frontmatter(source_url, registro, escalao, jogada, titulo, extra=extra_meta)
    title_line = f"# {titulo or 'Transcrição Limpa — YouTube (Engenharia Reversa MC)'}"
    meta_block = f"\n**Fonte:** {source_url}\n**Registro:** {registro}  |  **Escalão:** {escalao}\n**Jogada Causal:** {jogada}\n"
    body = f"{header}\n\n{title_line}\n{meta_block}\n\n{cleaned}\n"
    # Bloco pronto para NotebookLM (no final, como nas colheitas v0_x)
    bloco = f"\n\n---\n## 📋 BLOCO DE TEXTO PURO (Ctrl+C → Ctrl+V para NotebookLM)\n\n{source_url}\n"
    return body + bloco

def process(
    input_text: str,
    source_url: str,
    registro: str = "🛠️",
    escalao: str = "Técnico",
    jogada: str = "Injeção no caderno MÉTODO: walkthrough técnico replicável para orquestração NotebookLM ↔ Obsidian ↔ Claude Code.",
    titulo: Optional[str] = None,
    extra: Optional[Dict[str, Any]] = None,
) -> str:
    cleaned = clean_text(input_text)
    return build_output_md(cleaned, source_url, registro, escalao, jogada, titulo, extra)

def main():
    parser = argparse.ArgumentParser(
        description="MC Clean YT Transcript — Grok Build. Produz .md limpo + frontmatter + Compasso labels para MC-RAG."
    )
    parser.add_argument("--input", type=Path, help="Arquivo de transcrição (txt, srt, vtt, ou texto bruto).")
    parser.add_argument("--stdin", action="store_true", help="Ler transcrição do stdin (paste interativo).")
    parser.add_argument("--url", required=True, help="URL original do vídeo (obrigatório para rastreabilidade e Linha de Evidência).")
    parser.add_argument("--registro", default="🛠️", choices=["🎯", "🛠️", "💎"], help="Bala de Prata / Ensina-fazendo / Outlier.")
    parser.add_argument("--escalao", default="Técnico", choices=["Design", "Marketing", "Técnico", "Design/Técnico"], help="Escalão alvo no Compasso.")
    parser.add_argument("--jogada", default="Injeção no MTODO: passo a passo de engenharia/prática para replicar no ecossistema MC (Claude Code + Obsidian).", help="Jogada causal explícita (o que NotebookLM injeta no Claude Code via Obsidian).")
    parser.add_argument("--titulo", help="Título customizado para o .md.")
    parser.add_argument("--out", type=Path, help="Caminho de saída do .md limpo (default: stdout ou ./limpo_<slug>.md).")
    parser.add_argument("--extra", nargs="*", help="Metadados extras key=value (ex: video_id=abc123 duracao=47min).")

    args = parser.parse_args()

    if args.input:
        raw = args.input.read_text(encoding="utf-8-sig", errors="ignore")
    elif args.stdin:
        if sys.stdin.isatty():
            print("Cole a transcrição bruta (Ctrl+Z + Enter no Windows para EOF):", file=sys.stderr)
        raw = sys.stdin.read()
    else:
        parser.error("Forneça --input ou --stdin.")

    extra = {}
    if args.extra:
        for kv in args.extra:
            if "=" in kv:
                k, v = kv.split("=", 1)
                extra[k.strip()] = v.strip()

    md = process(
        raw,
        source_url=args.url,
        registro=args.registro,
        escalao=args.escalao,
        jogada=args.jogada,
        titulo=args.titulo,
        extra=extra or None,
    )

    if args.out:
        args.out.parent.mkdir(parents=True, exist_ok=True)
        args.out.write_text(md, encoding="utf-8")
        print(f"Escrito: {args.out.resolve()}", file=sys.stderr)
        print("Lembrete: git add + commit com mensagem referenciando o selo/missão (ex: feat: limpeza-yt para colheita v0_6).", file=sys.stderr)
    else:
        print(md)

    # Dica de uso no Compasso
    print("\n# Dica Grok Build: cole o BLOCO DE URL no rodapé no NotebookLM. O .md gerado já traz frontmatter para Obsidian graph e injeção no Claude Code.", file=sys.stderr)

if __name__ == "__main__":
    main()