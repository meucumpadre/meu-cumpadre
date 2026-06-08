---
id: MC-PRINCIPIO-019
titulo: Patches são instrumentos temporários
versao: 1.0
data_cunhagem: 2026-05-12
cunhado_por: Alessandro · sessão 12/05 governança ADRs
status: ATIVO
escopo: governanca-documental
hash_corpo: c583185893712b68e43a0149eb30ea1465cff290682c52199eb491c4b9bd3241
---

# Princípio MC #19 — Patches são instrumentos temporários

## Enunciado
> Patches são instrumentos temporários de governança. Vivem em `03-GOVERNANCA/patches/` enquanto aguardam aplicação. Aplicação gera nova versão integral da ADR/Spec + arquivamento do patch em `_HISTORICO_PATCHES_APLICADOS/`. Patch nunca substitui ADR — é correção temporária com prazo de absorção.

## Origem
Cunhado em 12/05/2026. Necessidade emergente: distinguir patch (temporário) de errata (que vira nova versão). Patches v3.0-1 a v3.0-4 estavam misturados com ADRs no Vault.

## Ciclo de vida do patch

```
1. Patch emitido → 03-GOVERNANCA/patches/MC-PATCH-MEMO-vX_Y-Z-{Titulo}.md
2. Founder valida → status: aprovado
3. Aplicação cria nova versão ADR/Spec → ADR-NNN v(Y+1)
4. Patch movido para 03-GOVERNANCA/patches/_HISTORICO_PATCHES_APLICADOS/
5. Audit trail preservado
```

## Aplicação
1. Patch ≠ ADR · não vai para `adrs/`
2. Patch ≠ errata formal · errata renomeia + preserva original (Princípio #4)
3. Patch tem alvo explícito (ADR-NNN vX.Y) + razão + mudança proposta
4. Após aplicação, patch original NÃO é deletado · vai para _HISTORICO

## Cross-references
- Princípio MC #4 (Errata Absorve, Não Inventa)
- Princípio MC #5 (Persistência de Patches)
- ADR-012 PATCH v1.0→v1.1 (caso ativo · ainda pendente aplicação MB-019b)

---

**D > C > V** · Provérbios 31:8 · *O diamante é carbono que não desistiu da pressão* · ∞