#!/usr/bin/env python3
"""
Cria os campos por fase no pipe MEU CUMPADRE (OpenSquad Dashboard),
conforme MC-BLUEPRINT-GHS-Pipefy v0.3.

FRAME (decisão Founder 2026-06-17):
  - Os campos são ESCRITOS POR AGENTES (Claude OS / webhooks GitHub), não por
    humanos preenchendo formulário. Cada campo é um FATO DE ESTADO que um agente
    emite deterministicamente — o pipe só torna VISÍVEL o estado da máquina.
  - O GHS (Gestão Híbrida de Software / PRINCE2 Agile, de Agustinho Risso) já está
    implementado no MC sob outro VOCABULÁRIO. Aqui o método é traduzido para os
    termos MC: gate = Router-Ethics (Confidence/Complexity/Fraudscore); valor = CMD
    (Capital Morto Desbloqueado, nunca ARR); selagem = ADR + hash SHA-256; encerramento
    planejado vs. prematuro; tolerâncias 6D + gestão por exceção; Definição de Pronto
    (InVest) vs. Definição de Concluído (= Proof-First: Lei + Evidência + Hash).

PRINCÍPIO DE PROVENIÊNCIA / CARRY-FORWARD (auditoria v0.3, Founder 2026-06-17):
  - Um campo só é `required` na ÚNICA fase que o PRODUZ — onde o agente-dono possui
    o fato deterministicamente ao avançar o card. Régua: required ⇔ o agente-dono da
    fase tem o fato na mão ao sair dela.
  - Um fato NÃO é redefinido nas fases seguintes. No Pipefy o valor preenchido persiste
    no card e fica visível no detalhe do card em qualquer fase — então "carregar de uma
    fase anterior (read-only)" se obtém DEFININDO O FATO UMA ÚNICA VEZ, sem duplicá-lo.
  - Métrica defasada (medida ao longo do tempo) NUNCA é required na entrada da fase —
    exigi-la seria fabricar dado (viola Proof-First). Ex.: CMD/benefícios realizados.

`required` = CONTRATO DE TRANSIÇÃO: o agente-dono não sai da fase sem emitir o fato.
Narrativa/medições defasadas ficam OPCIONAIS para não travar a automação por webhook.

SEGURANÇA:
  - DRY-RUN por padrão: sem --apply, apenas MOSTRA o que seria criado.
  - Resolve fases por NOME (não depende de IDs chumbados).
  - DEDUP: relê os campos existentes e PULA os que já existem (re-rodável).

Uso (PowerShell):
    $env:PIPEFY_TOKEN='seu_token'
    $env:PIPEFY_PIPE_ID='306835133'
    python scripts\\pipefy\\criar_campos.py            # dry-run (preview)
    python scripts\\pipefy\\criar_campos.py --apply     # cria de verdade

Tipos Pipefy usados: short_text, long_text, number, currency, date, select.
"""

import os
import sys
import json
import urllib.request
import urllib.error

PIPEFY_API = "https://api.pipefy.com/graphql"
APPLY = "--apply" in sys.argv

# ── Blueprint v0.3: campos por fase (label, tipo, obrigatório, opções, desc) ──
# 'r' = required (contrato de transição — agente-dono não sai da fase sem o fato)
# 'opts' = opções (para type 'select') ; 'desc' = ajuda/rastro do conceito GHS↔MC
# Cada fato é definido na ÚNICA fase que o PRODUZ (proveniência). Fases seguintes
# leem o valor já persistido no card — sem redefinir o campo.
FIELDS = {
    # PRODUZ: Mandato (GHS Concepção). DONO: Claude Code (criar_card.py — lockstep:
    # o script emite Tipo/Solicitante/Descrição na criação, senão o card nasce travado).
    "INGESTÃO": [
        {"label": "Tipo de demanda", "type": "select", "r": True,
         "opts": ["ADR", "Spec", "Feature", "Refactor", "Correção", "Pesquisa",
                  "Documentação", "Infra"],
         "desc": "Emitido por criar_card.py na criação"},
        {"label": "Solicitante", "type": "short_text", "r": True,
         "desc": "Auto-preenchido pelo agente (Founder, Claude OS, GitHub)"},
        {"label": "Descrição do mandato", "type": "long_text", "r": True,
         "desc": "Semente / Definição de Pronto do card"},
        {"label": "Origem do sinal", "type": "select", "r": False,
         "opts": ["Sinal fraco (E0)", "Necessidade de negócio", "Pressão competitiva",
                  "Mudança legal", "Auditoria", "Outro"]},
        {"label": "Rito requerido", "type": "select", "r": False,
         "opts": ["R1 Operacional", "R2 Fundacional", "R3 Soberania/OAB/LGPD"],
         "desc": "Autorização doutrinária (= 'quem autorizou' no método)"},
        {"label": "Data limite estimada", "type": "date", "r": False},
    ],
    # PRODUZ: priorização AHP (GHS 6.5) + deliberação Router-Ethics 11.0 inteira.
    # DONO: Claude. Os scores e a Decisão são FABRICADOS aqui (required legítimo);
    # no GATE são apenas lidos do card.
    "DIAGNÓSTICO": [
        {"label": "Prioridade AHP", "type": "number", "r": True,
         "desc": "Score multicritério (GHS 6.5 — AHP)"},
        {"label": "Critérios AHP", "type": "short_text", "r": False,
         "desc": "Critérios × pesos usados na priorização"},
        {"label": "Confidence", "type": "number", "r": True,
         "desc": "Router-Ethics — Verde ≥70 / Amarela 40-70 / Vermelha <40"},
        {"label": "Faixa de confiança", "type": "select", "r": False,
         "opts": ["Verde", "Amarela", "Vermelha"],
         "desc": "DERIVADA de Confidence — não exigir as duas"},
        {"label": "Complexity", "type": "select", "r": True,
         "opts": ["Baixa", "Média", "Alta"]},
        {"label": "Fraudscore", "type": "select", "r": True,
         "opts": ["Normal", "Alto"]},
        # NOTA-R2: 'Dentro das tolerâncias?' depende das Tolerâncias 6D, que nascem em
        # BLUEPRINT (fase posterior). Mantido aqui por instrução do Founder; é a única
        # tensão de proveniência do blueprint — submeter ao /mc-pre-selagem (R2).
        {"label": "Dentro das tolerâncias?", "type": "select", "r": True,
         "opts": ["Sim", "Não"], "desc": "Gatilho de exceção (GHS) — ver NOTA-R2"},
        {"label": "Decisão", "type": "select", "r": True,
         "opts": ["Autonomia", "Handoff / Plano de exceção"]},
        {"label": "Benefício-alvo", "type": "short_text", "r": True},
        {"label": "Resumo do diagnóstico", "type": "long_text", "r": True},
    ],
    # PRODUZ: Business Case + Planejamento + SELO doutrinário (ADR no Vault).
    # DONO: Claude (ao selar Spec/ADR no Vault). ADR/hash/link nascem AQUI (o selo),
    # não na SELAGEM (que é o merge de código).
    "BLUEPRINT": [
        {"label": "Produto-alvo", "type": "short_text", "r": True},
        {"label": "Abordagem", "type": "select", "r": True,
         "opts": ["Preditiva", "Adaptativa", "Híbrida"],
         "desc": "Abordagem de desenvolvimento (GHS)"},
        {"label": "Opções de negócio", "type": "select", "r": False,
         "opts": ["Fazer totalmente", "Fazer parcialmente", "Não fazer"],
         "desc": "Business case — opções (GHS)"},
        {"label": "Business case (motivos + benefícios)", "type": "long_text", "r": True},
        {"label": "Tolerâncias 6D", "type": "long_text", "r": True,
         "desc": "Escopo/prazo/custo/qualidade/risco/benefícios — gestão por exceção. "
                 "Convenção: dimensão não aplicável = 'N/A tailored'"},
        {"label": "Critério de Concluído (Lei+Evidência+Hash)", "type": "long_text", "r": True,
         "desc": "Proof-First = Definição de Concluído (GHS)"},
        {"label": "ID do ADR", "type": "short_text", "r": True,
         "desc": "ID do ADR selado no Vault"},
        {"label": "Hash do artefato (Vault)", "type": "short_text", "r": True,
         "desc": "SHA-256 de integridade do artefato selado (NÃO é git-SHA)"},
        {"label": "Link spec/ADR", "type": "short_text", "r": True,
         "desc": "Prova do selo (promovido a required)"},
        {"label": "CMD estimado", "type": "currency", "r": False,
         "desc": "Capital Morto Desbloqueado projetado (nunca ARR)"},
    ],
    # PRODUZ: pacote de trabalho (GHS aceitar→executar→entregar). É o MODELO das demais.
    # DONO: webhook GitHub (ao abrir PR). Pacote = título do PR; Link = URL do PR.
    "EXECUÇÃO": [
        {"label": "Pacote de trabalho", "type": "short_text", "r": True,
         "desc": "Título do PR"},
        {"label": "Link PR/artefato", "type": "short_text", "r": True},
        {"label": "Definição de Pronto (InVest)", "type": "long_text", "r": False,
         "desc": "Pronto para INICIAR (GHS 16.24)"},
        {"label": "Definição de Concluído", "type": "long_text", "r": False,
         "desc": "Critérios de aceitação atendidos (GHS 16.23)"},
        {"label": "Status do estágio", "type": "select", "r": False,
         "opts": ["Bom", "Médio", "Ruim"],
         "desc": "Saúde do estágio (Status multidimensional GHS condensado)"},
        {"label": "% concluído", "type": "number", "r": False},
    ],
    # PRODUZ: resultado do PR review (GHS Autorizar). DONO: webhook GitHub (PR review).
    # Os scores Router-Ethics NÃO vivem aqui — são lidos do DIAGNÓSTICO. O gate só
    # registra o fato que o webhook possui: aprovação e o reviewer.
    "GATE": [
        {"label": "Resultado do review", "type": "select", "r": True,
         "opts": ["Aprovado", "Mudanças solicitadas"]},
        {"label": "Reviewer (login GitHub)", "type": "short_text", "r": True},
    ],
    # PRODUZ: merge em main. DONO: webhook GitHub (merge). Único fato determinístico
    # no merge é o SHA do commit. ADR/hash do Vault vêm do BLUEPRINT (lidos do card).
    "SELAGEM": [
        {"label": "Merge commit SHA", "type": "short_text", "r": True,
         "desc": "SHA do merge em main (NÃO confundir com hash de integridade do Vault)"},
        {"label": "Tipo de encerramento", "type": "select", "r": False,
         "opts": ["Planejado", "Prematuro"],
         "desc": "Default 'Planejado'; 'Prematuro' por gatilho próprio (GHS)"},
        {"label": "Lição aprendida (retrospectiva)", "type": "long_text", "r": False,
         "desc": "Diferido — pode ser preenchido após o merge"},
        {"label": "Documentação arquivada", "type": "short_text", "r": False},
    ],
    # PRODUZ: análise de resultados (GHS). Métricas DEFASADAS (medidas ao longo do
    # tempo) — exigi-las na entrada seria fabricar dado (Proof-First). Tudo opcional.
    "DIAMANTE": [
        {"label": "Valor desbloqueado (CMD)", "type": "currency", "r": False,
         "desc": "Medido ao longo do tempo — opcional na entrada (Proof-First)"},
        {"label": "Benefícios realizados vs. planejados", "type": "long_text", "r": False,
         "desc": "Medido ao longo do tempo (Proof-First)"},
        {"label": "NPS", "type": "number", "r": False},
        {"label": "Plano de acompanhamento", "type": "long_text", "r": False},
    ],
}


def graphql(token: str, query: str, variables: dict | None = None) -> dict:
    payload = json.dumps({"query": query, "variables": variables or {}}).encode()
    req = urllib.request.Request(
        PIPEFY_API, data=payload,
        headers={"Content-Type": "application/json", "Authorization": f"Bearer {token}"},
    )
    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            body = json.loads(resp.read())
    except urllib.error.HTTPError as e:
        print(f"[ERRO] HTTP {e.code}: {e.reason}", file=sys.stderr)
        if e.code == 401:
            print("       Token rejeitado (cole SEM aspas, completo, não expirado).", file=sys.stderr)
        sys.exit(1)
    except urllib.error.URLError as e:
        print(f"[ERRO] Conexão falhou: {e.reason}", file=sys.stderr)
        sys.exit(1)
    if "errors" in body:
        for err in body["errors"]:
            print(f"[ERRO GraphQL] {err.get('message')}", file=sys.stderr)
        sys.exit(1)
    return body["data"]


def get_phases(token: str, pipe_id: str) -> dict:
    """Retorna {nome_fase: {'id':..., 'labels': set(labels existentes)}}."""
    query = """
    query($id: ID!) {
      pipe(id: $id) {
        name
        phases { id name fields { label } }
      }
    }
    """
    pipe = graphql(token, query, {"id": pipe_id}).get("pipe")
    if pipe is None:
        print(f'[ERRO] Pipe "{pipe_id}" não encontrado ou sem acesso.', file=sys.stderr)
        sys.exit(1)
    out = {}
    for ph in pipe["phases"]:
        out[ph["name"]] = {
            "id": ph["id"],
            "labels": {f["label"] for f in (ph.get("fields") or [])},
        }
    return out


def create_phase_field(token: str, phase_id: str, spec: dict) -> str:
    mutation = """
    mutation($input: CreatePhaseFieldInput!) {
      createPhaseField(input: $input) { phase_field { id label } }
    }
    """
    inp = {
        "phase_id": phase_id,
        "label": spec["label"],
        "type": spec["type"],
        "required": spec.get("r", False),
    }
    if spec.get("opts"):
        inp["options"] = spec["opts"]
    if spec.get("desc"):
        inp["description"] = spec["desc"]
    data = graphql(token, mutation, {"input": inp})
    return data["createPhaseField"]["phase_field"]["id"]


def main() -> None:
    token = os.environ.get("PIPEFY_TOKEN", "").strip().strip('"').strip("'")
    pipe_id = os.environ.get("PIPEFY_PIPE_ID", "").strip().strip('"').strip("'")
    if not token or not pipe_id:
        print("[ERRO] Defina PIPEFY_TOKEN e PIPEFY_PIPE_ID.\n"
              "  PowerShell: $env:PIPEFY_TOKEN='...'; $env:PIPEFY_PIPE_ID='306835133'", file=sys.stderr)
        sys.exit(1)

    modo = "APLICAR (cria de verdade)" if APPLY else "DRY-RUN (preview — nada é alterado)"
    print(f"== criar_campos.py — modo: {modo} ==")

    phases = get_phases(token, pipe_id)
    criados = pulados = faltando = 0

    for nome, specs in FIELDS.items():
        if nome not in phases:
            print(f'\n[AVISO] Fase "{nome}" não existe no pipe — pulando os {len(specs)} campos.')
            faltando += len(specs)
            continue
        ph = phases[nome]
        print(f'\nFASE "{nome}" (id={ph["id"]})')
        for spec in specs:
            if spec["label"] in ph["labels"]:
                print(f'   = já existe: "{spec["label"]}"')
                pulados += 1
                continue
            req = "OBRIG" if spec.get("r") else "opc"
            if APPLY:
                fid = create_phase_field(token, ph["id"], spec)
                print(f'   + criado [{req}]: "{spec["label"]}" ({spec["type"]}) id={fid}')
            else:
                print(f'   + criaria [{req}]: "{spec["label"]}" ({spec["type"]})')
            criados += 1

    print(f'\n── resumo: {"criados" if APPLY else "a criar"}={criados}  já_existentes={pulados}  fase_ausente={faltando} ──')
    if not APPLY:
        print("   Rode novamente com  --apply  para criar de verdade.")


if __name__ == "__main__":
    main()
