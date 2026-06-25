#!/usr/bin/env python3
"""
Cria um novo card na fase INGESTÃO do pipe MEU CUMPADRE (OpenSquad Dashboard).

LOCKSTEP COM criar_campos.py v0.3:
  A fase INGESTÃO tem 3 campos `required` (Tipo de demanda, Solicitante, Descrição
  do mandato). Um card precisa nascer COM esses fatos, senão fica TRAVADO em
  INGESTÃO (não avança). Este script os emite na criação.

  Régua de proveniência: o agente-dono da fase (aqui, o Claude Code) possui os fatos
  de INGESTÃO ao criar o card. Os demais campos (Origem do sinal, Rito, Data limite)
  são opcionais.

Uso (PowerShell):
    $env:PIPEFY_TOKEN='seu_token'      # aspas SIMPLES
    $env:PIPEFY_PIPE_ID='306835133'
    python scripts\\pipefy\\criar_card.py --descricao "Migrar X para Y" --tipo Refactor
    python scripts\\pipefy\\criar_card.py -d "Selar ADR-021" -t ADR --origem Auditoria

Argumentos:
    --descricao/-d   (OBRIGATÓRIO) Descrição do mandato (semente / Definição de Pronto).
    --tipo/-t        Tipo de demanda. Um de: ADR, Spec, Feature, Refactor, Correção,
                     Pesquisa, Documentação, Infra. (default: Pesquisa)
    --solicitante/-s Quem/qual agente originou. (default: "Claude Code")
    --origem         Origem do sinal (opcional).
    --rito           Rito requerido: "R1 Operacional" | "R2 Fundacional" |
                     "R3 Soberania/OAB/LGPD" (opcional).
    --data-limite    Data limite estimada YYYY-MM-DD (opcional).
    --titulo         Título do card. (default: primeiros ~60 chars da descrição)

NOTA (smoke-test pendente): o preenchimento de campos na criação usa
`createCard.fields_attributes` resolvendo field_id por LABEL. Se o Pipefy tratar os
campos de INGESTÃO como phase-fields (e não start-form), trocar para updateCardField
pós-criação. Validar logo após `criar_campos.py --apply`. Campos cujo label não existir
ainda são PULADOS com aviso (degrada com elegância antes do --apply dos campos).
"""

import os
import sys
import argparse
import urllib.request
import urllib.error
import json

PIPEFY_API = "https://api.pipefy.com/graphql"
PHASE_NAME = "INGESTÃO"

TIPOS_VALIDOS = ["ADR", "Spec", "Feature", "Refactor", "Correção",
                 "Pesquisa", "Documentação", "Infra"]

# label do campo -> chave do valor a enviar (resolvido por label em INGESTÃO)
# (apenas os que este agente possui na criação)
CAMPOS_INGESTAO = {
    "Tipo de demanda": "tipo",
    "Solicitante": "solicitante",
    "Descrição do mandato": "descricao",
    "Origem do sinal": "origem",
    "Rito requerido": "rito",
    "Data limite estimada": "data_limite",
}


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
        with urllib.request.urlopen(req, timeout=15) as resp:
            body = json.loads(resp.read())
    except urllib.error.HTTPError as e:
        print(f"[ERRO] HTTP {e.code}: {e.reason}", file=sys.stderr)
        if e.code == 401:
            print(
                "       Token rejeitado pelo Pipefy. Verifique:\n"
                "       1. PowerShell: aspas SIMPLES no token ($env:PIPEFY_TOKEN='...').\n"
                "       2. O token está completo (não foi cortado ao copiar)?\n"
                "       3. O token não expirou? Gere um novo em app.pipefy.com/tokens.",
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


def fetch_ingestao(token: str, pipe_id: str) -> tuple[str, dict]:
    """Retorna (phase_id, {label: field_id}) da fase INGESTÃO."""
    query = """
    query GetPipe($id: ID!) {
      pipe(id: $id) {
        id
        name
        phases { id name fields { id label } }
      }
    }
    """
    data = graphql(token, query, {"id": pipe_id})
    pipe = data.get("pipe")
    if pipe is None:
        print(
            f'[ERRO] Pipe com id "{pipe_id}" não encontrado ou sem acesso.\n'
            f"       Confira PIPEFY_PIPE_ID (está na URL do pipe).",
            file=sys.stderr,
        )
        sys.exit(1)

    phase = next((ph for ph in pipe["phases"] if ph["name"] == PHASE_NAME), None)
    if phase is None:
        names = ", ".join(f'"{ph["name"]}"' for ph in pipe["phases"])
        print(
            f'[ERRO] Fase "{PHASE_NAME}" não encontrada no pipe "{pipe["name"]}".\n'
            f"Fases disponíveis: {names or '(nenhuma)'}",
            file=sys.stderr,
        )
        sys.exit(1)

    labels = {f["label"]: f["id"] for f in (phase.get("fields") or [])}
    print(f'  pipe: "{pipe["name"]}"  (id={pipe["id"]})')
    return phase["id"], labels


def build_fields_attributes(label_to_id: dict, valores: dict) -> list:
    """Monta fields_attributes resolvendo field_id por label. Pula labels ausentes."""
    attrs = []
    for label, chave in CAMPOS_INGESTAO.items():
        valor = valores.get(chave)
        if valor in (None, ""):
            continue
        fid = label_to_id.get(label)
        if fid is None:
            print(f'   [aviso] campo "{label}" ainda não existe no pipe — pulando '
                  f'(rode criar_campos.py --apply).')
            continue
        attrs.append({"field_id": fid, "field_value": valor})
    return attrs


def create_card(token: str, pipe_id: str, phase_id: str, title: str,
                fields_attributes: list) -> dict:
    mutation = """
    mutation CreateCard($input: CreateCardInput!) {
      createCard(input: $input) {
        card { id title url }
      }
    }
    """
    inp = {"pipe_id": pipe_id, "phase_id": phase_id, "title": title}
    if fields_attributes:
        inp["fields_attributes"] = fields_attributes
    data = graphql(token, mutation, {"input": inp})
    return data["createCard"]["card"]


def parse_args() -> argparse.Namespace:
    p = argparse.ArgumentParser(description="Cria card em INGESTÃO (OpenSquad Dashboard).")
    p.add_argument("--descricao", "-d", required=True,
                   help="Descrição do mandato (semente / Definição de Pronto).")
    p.add_argument("--tipo", "-t", default="Pesquisa", choices=TIPOS_VALIDOS,
                   help="Tipo de demanda (default: Pesquisa).")
    p.add_argument("--solicitante", "-s", default="Claude Code",
                   help='Quem originou (default: "Claude Code").')
    p.add_argument("--origem", default=None, help="Origem do sinal (opcional).")
    p.add_argument("--rito", default=None, help="Rito requerido (opcional).")
    p.add_argument("--data-limite", dest="data_limite", default=None,
                   help="Data limite YYYY-MM-DD (opcional).")
    p.add_argument("--titulo", default=None,
                   help="Título do card (default: ~60 chars da descrição).")
    return p.parse_args()


def main() -> None:
    args = parse_args()

    token = os.environ.get("PIPEFY_TOKEN", "").strip().strip('"').strip("'")
    if not token:
        print(
            "[ERRO] PIPEFY_TOKEN não definida.\n"
            "       PowerShell: $env:PIPEFY_TOKEN='seu_token' (aspas SIMPLES).",
            file=sys.stderr,
        )
        sys.exit(1)

    pipe_id = os.environ.get("PIPEFY_PIPE_ID", "").strip().strip('"').strip("'")
    if not pipe_id:
        print(
            "[ERRO] PIPEFY_PIPE_ID não definida.\n"
            "       O ID está na URL do pipe: https://app.pipefy.com/pipes/SEU_PIPE_ID\n"
            "       PowerShell: $env:PIPEFY_PIPE_ID='306835133'",
            file=sys.stderr,
        )
        sys.exit(1)

    title = args.titulo or (args.descricao[:60] + ("…" if len(args.descricao) > 60 else ""))

    valores = {
        "tipo": args.tipo,
        "solicitante": args.solicitante,
        "descricao": args.descricao,
        "origem": args.origem,
        "rito": args.rito,
        "data_limite": args.data_limite,
    }

    print(f'Localizando fase "{PHASE_NAME}"...')
    phase_id, label_to_id = fetch_ingestao(token, pipe_id)
    print(f"  phase_id={phase_id}  (campos existentes: {len(label_to_id)})")

    attrs = build_fields_attributes(label_to_id, valores)

    print(f'Criando card "{title}"...  ({len(attrs)} campo(s) preenchido(s))')
    card = create_card(token, pipe_id, phase_id, title, attrs)

    print(f"\n✓ Card criado com sucesso!")
    print(f"  ID    : {card['id']}")
    print(f"  Título: {card['title']}")
    print(f"  URL   : {card.get('url', '(não retornada pela API)')}")
    if not attrs:
        print("\n[atenção] Nenhum campo preenchido — o card pode nascer TRAVADO em "
              "INGESTÃO (campos required vazios). Rode criar_campos.py --apply primeiro.")


if __name__ == "__main__":
    main()
