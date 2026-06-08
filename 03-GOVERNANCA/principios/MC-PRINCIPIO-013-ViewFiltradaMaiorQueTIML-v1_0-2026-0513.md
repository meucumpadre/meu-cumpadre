---
id: MC-PRINCIPIO-013
titulo: View filtrada > TIML
versao: 1.0
data_cunhagem: anterior a 2026-05-12 · consolidado em ADR-015
cunhado_por: Alessandro × Claude · sessão ADR-015
status: ATIVO
escopo: arquitetura-clickup
hash_corpo: 173460a9a730cde0367837a07f2ba71c91dd93c915e29e99fb82ec620de5e9d7
---

# Princípio MC #13 — View filtrada > TIML

## Enunciado
> Views ClickUp com filtros dinâmicos resolvem "sprint atual", "casos pendentes", "casos amarela" sem precisar de TIML (Task Inheritance with Multiple Lists). TIML cria overhead arquitetural · View é display layer barata.

## Origem
Cunhado em ADR-015. TIML foi avaliada como feature avançada · concluiu-se que overhead > benefício para <100 casos (Fase Crisálida).

## Aplicação
1. "Sprint atual" = View filtrada por `etapa_atual IN (E1, E2, E3)` + ordenação por SLA
2. "Casos amarela" = View filtrada por `router_ethics_rota = B` + `confidence < 70`
3. "Casos H3 pendentes Alessandro" = View filtrada por `humano_irredutivel CONTAINS H3` + status pending
4. TIML reservado para Fase 2 pós-validação N=100

## Cross-references
- ADR-015 (TIML NÃO na Fase 1)
- Princípio MC #12 (Custom Field dropdown > Task Central)

---

**D > C > V** · Provérbios 31:8 · *O diamante é carbono que não desistiu da pressão* · ∞