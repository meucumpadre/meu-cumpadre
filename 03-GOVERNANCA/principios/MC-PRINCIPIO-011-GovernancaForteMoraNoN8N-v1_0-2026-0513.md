---
id: MC-PRINCIPIO-011
titulo: Governança forte mora no N8N
versao: 1.0
data_cunhagem: anterior a 2026-05-12 · consolidado em Instruções v7.0 §6
cunhado_por: Alessandro × Claude · arquitetura backend MC
status: ATIVO
escopo: arquitetura-tecnica
hash_corpo: f387c618a1d41491af010c1a98263901666c7734cc7589587e887542d34db876
---

# Princípio MC #11 — Governança forte mora no N8N

## Enunciado
> Gates de fluxo, regras de roteamento, validações estruturais e lógica condicional moram no N8N (workflow engine). ClickUp é vitrine de estado · não motor de regra. Lógica embutida em Custom Field/Automação ClickUp é frágil e não auditável.

## Origem
Cunhado durante avaliação de TIML (Task Inheritance with Multiple Lists) e features avançadas ClickUp (ADR-015). Decisão estrutural: governança forte em N8N, ClickUp como display layer.

## Aplicação
1. Regras de Hook 0 gov.br → N8N workflow `hook0-gateway`
2. Router-Ethics 11.0 (140 nós) → N8N + LiteLLM, NÃO ClickUp Automation
3. Cálculo IPH-MC, IVCAD-MC → N8N + GAIA-4B, escreve resultado em Custom Field ClickUp
4. Custom Field ClickUp = espelho do estado, não fonte da verdade

## Cross-references
- ADR-015 (TIML NÃO na Fase 1)
- Princípio MC #14 (Webhooks reativos + polling complementar)

---

**D > C > V** · Provérbios 31:8 · *O diamante é carbono que não desistiu da pressão* · ∞