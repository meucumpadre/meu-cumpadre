---
id: MC-PRINCIPIO-005
titulo: Persistência de Patches
versao: 1.0
data_cunhagem: 2026-05-12
cunhado_por: Alessandro × Claude · sessão 12/05 governança ADRs
status: ATIVO
escopo: governanca-documental
hash_corpo: 211a4c6ce002c0b767eb747b04840fceef79cce42f821c29f1b9b169e2663c50
---

# Princípio MC #5 — Persistência de Patches

## Enunciado
> Todo patch memo, errata ou decisão estrutural que altere artefato canônico (ADR, Spec) deve ser persistido no Vault Obsidian (Cérebro 2) em pasta dedicada `03-GOVERNANCA/patches/` tão logo Alessandro confirme a leitura. Patches são governança institucional, não conversa de chat.

## Origem
Cunhado em 12/05/2026 após detectar que patches v3.0-1, v3.0-2, v3.0-3, v3.0-4 v2.0 ficaram apenas em chat sem persistência. Aplicação retroativa: esses patches precisam ser persistidos no vault.

## Aplicação
1. Padrão de nomenclatura: `MC-PATCH-MEMO-vX_Y-Z-{Titulo}.md`
2. Localização canônica: `03-GOVERNANCA/patches/`
3. Após aplicação completa, arquivar em `03-GOVERNANCA/patches/_HISTORICO_PATCHES_APLICADOS/` (Princípio MC #19)
4. Frontmatter mínimo: id, titulo, versao, data_emissao, target_artefato, status (pendente/aplicado)
5. Patches NUNCA vivem em `03-GOVERNANCA/adrs/` — vão em `patches/`

## Cross-references
- Princípio MC #4 (Errata Absorve, Não Inventa)
- Princípio MC #19 (Patches são instrumentos temporários)
- Estrutura Vault Cérebro 2 (ADR-011 §3 estado pós-12/05)

---

**D > C > V** · Provérbios 31:8 · *O diamante é carbono que não desistiu da pressão* · ∞