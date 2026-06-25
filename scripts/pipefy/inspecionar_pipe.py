#!/usr/bin/env python3
"""
Inspeciona (READ-ONLY) a estrutura do pipe MEU CUMPADRE no Pipefy:
fases (em ordem), campos do formulário inicial e campos de cada fase
(id, label, tipo, obrigatório, opções).

NÃO cria, NÃO move, NÃO edita nada. Só lê e imprime + grava um JSON
(`pipe_estrutura.json`) ao lado deste script, para servir de base à
geração dos scripts de criação de campos/automações (MC-BLUEPRINT-GHS-Pipefy).

Uso (PowerShell):
    $env:PIPEFY_TOKEN='seu_token_aqui'
    $env:PIPEFY_PIPE_ID='306835133'
    python scripts\\pipefy\\inspecionar_pipe.py

Uso (CMD):
    set PIPEFY_TOKEN=seu_token_aqui
    set PIPEFY_PIPE_ID=306835133
    python scripts\\pipefy\\inspecionar_pipe.py

Requisitos (variáveis de ambiente):
    PIPEFY_TOKEN    Personal Access Token do Pipefy (cole SEM aspas no set/CMD).
    PIPEFY_PIPE_ID  ID do pipe (está na URL: https://app.pipefy.com/pipes/SEU_PIPE_ID).
"""

import os
import sys
import json
import urllib.request
import urllib.error
from pathlib import Path

PIPEFY_API = "https://api.pipefy.com/graphql"
OUT_JSON = Path(__file__).with_name("pipe_estrutura.json")


def graphql(token: str, query: str, variables: dict | None = None) -> dict:
    payload = json.dumps({"query": query, "variables": variables or {}}).encode()
    req = urllib.request.Request(
        PIPEFY_API,
        data=payload,
        headers={
            "Content-Type": "application/json",
            "Authorization": f"Bearer {token}",
        },
    )
    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            body = json.loads(resp.read())
    except urllib.error.HTTPError as e:
        print(f"[ERRO] HTTP {e.code}: {e.reason}", file=sys.stderr)
        if e.code == 401:
            print(
                "       Token rejeitado. Cole o token SEM aspas e completo;\n"
                "       gere um novo em Pipefy > Configurações > Tokens de acesso pessoal.",
                file=sys.stderr,
            )
        sys.exit(1)
    except urllib.error.URLError as e:
        print(f"[ERRO] Conexão falhou: {e.reason}", file=sys.stderr)
        sys.exit(1)

    if "errors" in body:
        for err in body["errors"]:
            print(f"[ERRO GraphQL] {err.get('message')}", file=sys.stderr)
        sys.exit(1)

    return body["data"]


def fetch_pipe(token: str, pipe_id: str) -> dict:
    query = """
    query Inspecionar($id: ID!) {
      pipe(id: $id) {
        id
        name
        start_form_fields { id label type required options }
        phases {
          id
          name
          fields { id label type required options description }
        }
      }
    }
    """
    data = graphql(token, query, {"id": pipe_id})
    pipe = data.get("pipe")
    if pipe is None:
        print(
            f'[ERRO] Pipe id "{pipe_id}" não encontrado ou sem acesso.\n'
            f"       Confira PIPEFY_PIPE_ID (está na URL do pipe).",
            file=sys.stderr,
        )
        sys.exit(1)
    return pipe


def fmt_field(f: dict) -> str:
    req = "OBRIG" if f.get("required") else "opc"
    opts = f.get("options") or []
    opts_str = f"  opções={opts}" if opts else ""
    return f'      - [{req}] "{f["label"]}"  (id={f["id"]}, tipo={f["type"]}){opts_str}'


def main() -> None:
    token = os.environ.get("PIPEFY_TOKEN", "").strip().strip('"').strip("'")
    if not token:
        print(
            "[ERRO] PIPEFY_TOKEN não definida.\n"
            "       PowerShell: $env:PIPEFY_TOKEN='seu_token'",
            file=sys.stderr,
        )
        sys.exit(1)

    pipe_id = os.environ.get("PIPEFY_PIPE_ID", "").strip().strip('"').strip("'")
    if not pipe_id:
        print(
            "[ERRO] PIPEFY_PIPE_ID não definida.\n"
            "       PowerShell: $env:PIPEFY_PIPE_ID='306835133'",
            file=sys.stderr,
        )
        sys.exit(1)

    pipe = fetch_pipe(token, pipe_id)

    print(f'\nPIPE: "{pipe["name"]}"  (id={pipe["id"]})')

    start = pipe.get("start_form_fields") or []
    print(f'\n── FORMULÁRIO INICIAL ({len(start)} campos) ──')
    for f in start:
        print(fmt_field(f))
    if not start:
        print("      (sem campos)")

    phases = pipe.get("phases") or []
    print(f'\n── FASES ({len(phases)}) ──')
    for i, ph in enumerate(phases):
        fields = ph.get("fields") or []
        print(f'\n[{i}] FASE "{ph["name"]}"  (id={ph["id"]}) — {len(fields)} campo(s)')
        for f in fields:
            print(fmt_field(f))
        if not fields:
            print("      (sem campos nesta fase)")

    OUT_JSON.write_text(json.dumps(pipe, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f'\n✓ Estrutura completa salva em: {OUT_JSON}')
    print("  (me devolva este arquivo — ou o caminho — para eu gerar os scripts de campos/automações)")


if __name__ == "__main__":
    main()
