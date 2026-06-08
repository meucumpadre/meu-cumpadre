#!/usr/bin/env python3
"""
MC-VTVL Landing Validator v0.1 — Grok Build
Ferramenta de verificação de "pouso propulsivo" para o programa MC-VTVL.

Propósito:
- Após uma "missão" (processamento de caso Φ₀/E0-E7 ou simulado), avaliar se o pouso foi controlado e propulsivo.
- Scoring contra: D > C > V, 6 Filtros Universais, Router-Ethics nós críticos, métricas de jornada (tempo, autonomia, outcome), Proof-First.
- Gerar relatório estruturado + lições + recomendações de contexto MC-RAG a injetar no próximo voo.
- Saída pronta para salvar no vault (frontmatter + relatório) e atualizar orquestrador-mestre / lições aprendidas.

Uso (exemplo):
  python mc_vtvl_landing_validator.py --case "Hib001" --input caso_hib001_log.json --out "04-OPERACAO/especimes-diamantados/Hib001_pouso_report.md"

Integra com:
- orquestrador-mestre v3.1 (os 6 filtros, Router-Ethics 11, jornada table)
- ACI v2.1 (closed loops, C4 como motor de pouso)
- MC-RAG / Compasso (as recomendações de contexto são "jogadas causais" para o cérebro de contexto)
- VTVL Programa (este script é o "sensor de pouso" da Fase 0/1)

Alinhado à visão: fazer o foguete voltar de ré com precisão, para que o vácuo quântico de benefícios se manifeste.

Tolerância: zero violação de D>C>V ou Firewall. Erros de contexto <5% (medido por handoff evitável e gaps detectados).
"""

import argparse
import json
import sys
from datetime import datetime
from pathlib import Path
from typing import Dict, Any, List

def load_case(input_path: Path) -> Dict[str, Any]:
    if input_path.suffix == ".json":
        return json.loads(input_path.read_text(encoding="utf-8"))
    else:
        # Suporte básico para .md com frontmatter + seções (parse simples para v0.1)
        text = input_path.read_text(encoding="utf-8")
        # Em produção real, usar parser YAML + markdown mais robusto
        return {"raw": text, "parsed": "simples (melhorar com frontmatter completo)"}

def compute_pouso_score(case: Dict[str, Any]) -> Dict[str, Any]:
    """
    Lógica de scoring (v0.1 — expandir com nós reais do Router-Ethics 140 e métricas empíricas).
    Retorna dict com scores 0-100 por categoria + overall + flags de violação.
    """
    scores = {
        "dignidade": 100,
        "compliance": 100,
        "viabilidade": 100,
        "prooffirst": 100,
        "lgpd": 100,
        "inversao_cosmica": 100,
        "autonomia": 80,  # % de nós executados sem handoff desnecessário
        "tempo": 70,      # vs SLA interno 48h E0-E4, TMC E5 etc.
        "outcome": 90,    # benefício concedido / soberania / NPS proxy
    }

    violacoes = []
    recomendacoes_rag = []

    # Exemplo de checagens (em real, cruzar com log real do caso + orquestrador output)
    # D > C > V
    if case.get("handoff_desnecessario") and case.get("risco_dignidade"):
        scores["dignidade"] -= 40
        violacoes.append("Handoff evitável com risco de dignidade (violação D>C>V)")

    # Proof-First
    if not case.get("hash_sha256") or case.get("fontes_pendentes", 0) > 0:
        scores["prooffirst"] -= 30
        violacoes.append("Dado sem hash ou fonte pendente")
        recomendacoes_rag.append("Injetar mais fontes primárias (Grimório caps relevantes + Router-Ethics nós) no pack do caso")

    # Router-Ethics (simplificado)
    if case.get("router_nodes_triggered", 0) < 5:  # threshold fake
        scores["compliance"] -= 15
        recomendacoes_rag.append("Context pack insuficiente para nós críticos de Router-Ethics (ex: DIB Urgente, rural, multi-vertical)")

    # Autonomia vs C4/Cowork
    if case.get("ia_autonomia_pct", 60) < 70:
        scores["autonomia"] = case.get("ia_autonomia_pct", 60)
        violacoes.append("Baixa autonomia — pouso dependeu demais de intervenção humana (C4 ainda não maduro)")
        recomendacoes_rag.append("Melhorar context pack para C4 agents: incluir exemplos de casos âncora com pouso bem sucedido (Hib001, CLR001)")

    # Tempo (E0-E4 sprint)
    if case.get("tempo_e0e4_min", 999) > 48*60:
        scores["tempo"] = max(40, 100 - (case.get("tempo_e0e4_min", 999) - 48*60) / 10)
        violacoes.append("SLA interno 48h violado")

    overall = sum(scores.values()) / len(scores)

    landing_status = "PROPULSIVO" if overall >= 85 and len(violacoes) == 0 else \
                     "CONTROLADO COM RESSALVAS" if overall >= 70 else \
                     "FALHA DE POUSO (requer inspeção booster + retrofit contexto)"

    return {
        "scores": scores,
        "overall": round(overall, 1),
        "status": landing_status,
        "violacoes": violacoes,
        "recomendacoes_rag": recomendacoes_rag,
        "booster_inspection": "Capturar lições, atualizar Grimório/Router-Ethics/ACI/VTVL doc, gerar novo context pack para próximos voos."
    }

def generate_report(case_id: str, case: Dict[str, Any], score_data: Dict[str, Any]) -> str:
    now = datetime.now().strftime("%Y-%m-%d %H:%M")
    header = f"""---
caso: {case_id}
data_pouso: {now}
programa: MC-VTVL v0_1
status_pouso: {score_data['status']}
overall_score: {score_data['overall']}
tags: [vtvl, landing-validator, pouso, contexto-rag, orquestrador]
fonte: mc_vtvl_landing_validator.py (Grok Build)
---

# MC-VTVL Landing Report — {case_id}

**Data do relatório:** {now}
**Status do Pouso:** **{score_data['status']}**
**Score Geral:** {score_data['overall']}/100

## Scores por Categoria
"""
    for k, v in score_data["scores"].items():
        header += f"- {k}: {v}\n"

    header += "\n## Violações Críticas\n"
    if score_data["violacoes"]:
        for v in score_data["violacoes"]:
            header += f"- ❌ {v}\n"
    else:
        header += "- Nenhuma violação crítica detectada.\n"

    header += "\n## Recomendações de Contexto (MC-RAG / Compasso)\n"
    if score_data["recomendacoes_rag"]:
        for r in score_data["recomendacoes_rag"]:
            header += f"- 🛠️ {r}\n"
    else:
        header += "- Contexto suficiente para este pouso.\n"

    header += f"""
## Booster Inspection & Refurbishment
{score_data['booster_inspection']}

## Lições para o Próximo Voo
- Atualizar orquestrador-mestre / skills com os gaps detectados.
- Gerar context pack específico usando mc_emit_context_pack.py + MC-RAG (Grimório + Router-Ethics 11 + ACI + este VTVL doc).
- Re-testar em caso similar (mesmo perfil: rural/DIB/multi-vertical/etc.).

---
**Referência:** MC-VTVL-Propulsive-Landing-Programa-v0_1 + ACI v2.1 + orquestrador-mestre v3.1 + Jornada E0E7 v1.3
**Próximo passo no programa:** Fase 0 hover test → validar 5-10 casos reais com este validator → primeiro pouso propulsivo documentado.
"""

    return header

def main():
    parser = argparse.ArgumentParser(description="MC-VTVL Landing Validator — verifica se o 'pouso' do caso foi propulsivo.")
    parser.add_argument("--case", required=True, help="ID do caso (ex: Hib001, CLR001)")
    parser.add_argument("--input", type=Path, required=True, help="Arquivo de log/dados do caso (.json ou .md)")
    parser.add_argument("--out", type=Path, help="Onde salvar o relatório de pouso")
    args = parser.parse_args()

    case = load_case(args.input)
    score_data = compute_pouso_score(case)
    report = generate_report(args.case, case, score_data)

    if args.out:
        args.out.parent.mkdir(parents=True, exist_ok=True)
        args.out.write_text(report, encoding="utf-8")
        print(f"Relatório de pouso salvo: {args.out}")
        print(f"Status: {score_data['status']} | Score: {score_data['overall']}")
    else:
        print(report)

if __name__ == "__main__":
    main()