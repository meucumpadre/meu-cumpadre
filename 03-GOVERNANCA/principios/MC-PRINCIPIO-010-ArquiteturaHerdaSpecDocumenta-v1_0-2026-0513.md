---
id: MC-PRINCIPIO-010
titulo: Arquitetura herda, espec documenta
versao: 1.0
data_cunhagem: anterior a 2026-05-12 · consolidado em Instruções v7.0 §6
cunhado_por: Alessandro × Claude · sessão ClickUp Module Reconstrução v2.0/v3.0
status: ATIVO
escopo: arquitetura-operacional
hash_corpo: 5d3077c12f8ba3cf3de6042e3e05768c4d96bc70da5bba063cf6461b0b461c10
---

# Princípio MC #10 — Arquitetura herda, espec documenta

## Enunciado
> Estrutura hierárquica (ClickUp Space → Folder → List → Task → Subtask) HERDA Custom Fields e regras dos níveis acima. Spec documenta a herança esperada. Não duplicar campo em níveis filhos quando já vive no pai.

## Origem
Cunhado durante MC-SPEC-ClickUp v2.0 (18/04) e refinado em v3.1.1 (11/05). Origem prática: evitar custom fields duplicados Space-level vs Folder-level vs List-level.

## Aplicação
1. Campo de identidade (cidadao_id_hash, cidadao_nome) → Space-level (herda pra tudo)
2. Campo de vertical (vert_inss_NB, vert_inss_especie) → Folder-level (Previdenciário)
3. Campo de etapa (etapa_atual, sla_horas) → List-level
4. Campo de subtarefa (subtarefa_tipo, tempo_humano) → Task-level
5. Spec ClickUp documenta cada herança · valida antes de criar campo

## Antiexemplos
- ❌ Criar `cidadao_nome` em cada Folder (deveria ser Space-level)
- ❌ Criar `vert_inss_NB` Space-level (deveria ser Previdenciário Folder)
- ❌ Custom field duplicado sem nota de herança

## Cross-references
- MC-SPEC-ClickUp v3.1.1 Módulo B (estrutura herdada)
- ADR-015 (Features Avançadas ClickUp)

---

**D > C > V** · Provérbios 31:8 · *O diamante é carbono que não desistiu da pressão* · ∞