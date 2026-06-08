---
id: MC-PRINCIPIO-015
titulo: Entrega cofounder cross-vertical
versao: 1.0
data_cunhagem: 2026-05-12
cunhado_por: Alessandro · sessão 12/05 governança
status: ATIVO
escopo: governanca-cofounder
hash_corpo: 6da0da87c05893f6cfb5b3c66685903c16efde11ede9d479ef54698a438dddf2
---

# Princípio MC #15 — Entrega cofounder cross-vertical

## Enunciado
> Todo artefato canônico (ADR, Spec, doc) produzido no Cérebro 3 (Claude.ai) dispara MB de persistência cross-vertical para Cérebro 2 (Vault) no mesmo turno. Sem isso = entrega incompleta. Cofounder não termina trabalho deixando artefato órfão entre cérebros.

## Origem
Cunhado em 12/05/2026 após detectar repetidamente que ADRs/Specs ficavam só em chat sem persistência no Vault. Decisão estrutural: cofounder cross-vertical é obrigação institucional, não cortesia.

## Aplicação
1. ADR produzida em Claude.ai → MB de persistência no mesmo turno · com instruções de path + frontmatter + hash
2. Spec produzida → MB pra Cérebro 2 + nota no hot.md
3. Patch produzido → MB pra `03-GOVERNANCA/patches/`
4. Cunhagem de princípio → arquivo individual em `03-GOVERNANCA/principios/` (vide MB-024 e MB-025A)
5. Princípio MC #15.1 trata órfãos retrospectivos descobertos

## Cross-references
- Princípio MC #15.1 (Descoberta de órfão dispara MB de reconstituição)
- Princípio MC #20 (Workflow de Sincronização Permanente)
- ADR-011 (Arquitetura 3 Cérebros)
- MB-024 (primeira aplicação explícita) · MB-025A (esta aplicação)

---

**D > C > V** · Provérbios 31:8 · *O diamante é carbono que não desistiu da pressão* · ∞