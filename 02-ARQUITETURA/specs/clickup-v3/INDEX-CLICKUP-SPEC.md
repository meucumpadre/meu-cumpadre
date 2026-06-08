---
tipo: index
codigo: MC-INDEX-CLICKUP-SPEC
titulo: MC-SPEC ClickUp v3.0 — Index de Módulos
data_criacao: 2026-05-12
data_ultima_atualizacao: 2026-05-12
autor: Claude Code DELL (via MB-013)
hierarquia: D > C > V
---

# MC-SPEC ClickUp v3.0 — Index de Módulos

Specs do sistema ClickUp Meu Cumpadre v3.0 persistidas no Vault. Módulo B é o único canonizado pós-execução (Field IDs UUID reais em produção). Demais permanecem em chat-only até persistência.

## Tabela de módulos

| Módulo | Versão | Status | Data | Filename |
|---|---|---|---|---|
| A — Arquitetura | v3.0 | ⏳ chat-only | 11/05/2026 | _pendente persistência_ |
| **B — Custom Fields** | **v3.0.1** | ✅ **canonizado** | 12/05/2026 | [[MC-SPEC-ClickUp-v3_0-MODULO-B-CustomFields-v3_0_1-Canonizado]] |
| C — Automations | v3.0 | ⏳ chat-only | 11/05/2026 | _pendente persistência_ |
| D — POP Beto | v3.0.1 | ⏳ chat-only | 11/05/2026 | _pendente persistência_ |

## Patches relacionados

Vide [[../../03-GOVERNANCA/INDEX-PATCHES|03-GOVERNANCA/INDEX-PATCHES.md]] — 4 patches v3.0 persistidos (v3.0-1, v3.0-2, v3.0-3, v3.0-4 v2.0).

## Histórico de Mission Briefs ClickUp v3.0

- MB-001 — Hib001 Desbloqueio (10/05)
- MB-004 — Marketplace Setup (11/05)
- MB-005 — Auditoria Estrutural (12/05)
- MB-006 v2.1 — Export + Eliminação Bravy (12/05) — 27/28 deletes; archive remanescente UI manual
- MB-007 v2.0 — Correção card Lorrane (12/05)
- MB-008 — Persistência patch v3.0-4 v2.0 + banners (12/05)
- MB-010 — Pacote Consolidado: descoberta archive (não-exposto) + descoberta endpoint custom fields (POST /v2/list/{id}/field) (12/05)
- MB-011 — Persistência 3 patches no Vault (12/05)
- MB-002 Fase 1 — DRY RUN custom fields (12/05)
- MB-002 Fase 2 — Execução 8 fields via API (12/05) — 8/8 HTTP 200
- MB-013 — Persistência Módulo B v3.0.1 no Vault (12/05, este INDEX)

## Pendências persistência

- [ ] Módulo A v3.0 (Arquitetura)
- [ ] Módulo C v3.0 (Automations) — aguardando v3.0.1 (refatoração com Field IDs reais + patch §A5)
- [ ] Módulo D v3.0.1 (POP Beto) — aguardando v3.0.2 (errata Lorrane inline)

## Pendências UI Beto pós-MB-002

- [ ] Cleanup 6 fields `_TEST_*` na E1-Triagem (lista `901326912219`)
- [ ] Propagar 8 fields novos para "Available everywhere" (~5 min)
- [ ] Decidir grafia field legacy `pseudônimo` (acento ô viola convenção snake_case ASCII)
- [ ] Decidir entre `fraud_score` e `fraudscore` (duplicação histórica)
- [ ] Avaliar opções de `estado_custodia` (curtas Pré-S1/S1/S2/S3 vs longas S1-Intermediario-MC etc.)

## Pendências UI Beto pós-MB-006

- [ ] Archive folder `901310346531` (Gestão de Processos)
- [ ] Archive space `90134861080` (Comercial)
- [ ] Archive lista `901314997411` (tarefas órfã)
- [ ] Archive folder `901318129101` (E0-E7 duplicado)

---

**Hierarquia:** D > C > V
**Selo:** "O diamante é carbono que não desistiu da pressão."

## MC-SPEC-ClickUp v3.0 Modulo B - v3.1.1 (CANONICO CORRENTE)

- **Arquivo:** [[MC-SPEC-ClickUp-v3_0-MODULO-B-CustomFields-v3_1_1-Canonizado]]
- **Versao:** v3.1.1
- **Data:** 2026-05-12
- **Status:** canonizado pos-ADR-015
- **Substitui:** v3.0.1 (historica no Vault, banner SUPERSEDED aplicado MB-016 v2) - v3.1 (existiu apenas em chat Claude.ai)
- **Conteudo:** Refinamento pos-deep research + ADR-015. Principios estendidos 11-17. Spec `cidadao_id_hash` Space-level (a criar via MB-018). 10 proibicoes absolutas formalizadas. Roadmap Custom Relationships Fase 2. Insight gov.br como horizonte cross-vertical.
- **MBs relacionados:** MB-014 (criou 26 fields canonicos), MB-016 v2 (este - persistencia), MB-018 (criar cidadao_id_hash)
- **Tags:** clickup, arquitetura-3-niveis, cofounder-cross-vertical, identidade-digital-brasileira, adr-015-incorporado

