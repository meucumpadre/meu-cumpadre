---
id: MC-PRINCIPIO-004
titulo: Errata Absorve, Não Inventa
versao: 1.0
data_cunhagem: anterior a 2026-05-12 · consolidado em Instruções v7.0 §6
cunhado_por: Alessandro × Claude · práticas cumulativas governança Vault
status: ATIVO
escopo: governanca-documental
hash_corpo: 2e52b8871fe708ca253feda2480def48ed69b3d00d310b3ebf1cfe95ef5f8d90
---

# Princípio MC #4 — Errata Absorve, Não Inventa

## Enunciado
> Correções, retificações e mudanças de decisão são absorvidas em nova versão do artefato preservando o histórico. NÃO se deleta fisicamente o conteúdo anterior. O passado fica auditável.

## Origem
Cunhado durante práticas iterativas no Vault Obsidian, onde a tentação de "limpar" versões antigas surgiu várias vezes. Anchor: governança institucional requer trilha auditável.

## Aplicação
1. Cópia: SEMPRE `Copy-Item`, NUNCA `Move-Item` (preserva original)
2. Versão: nova versão como arquivo distinto (v1_0 → v1_1), não overwrite
3. Patches: em pasta dedicada `03-GOVERNANCA/patches/` (Princípio MC #5)
4. Erratas formais: documento canônico que NEGA conteúdo anterior, sem deletá-lo
5. Backup .bak antes de qualquer overwrite forçado

## Antiexemplos
- ❌ `Move-Item origem destino` (apaga origem)
- ❌ `Set-Content arquivo.md` sem backup prévio
- ❌ Deletar pasta inteira "porque tava obsoleta"
- ❌ Substituir versão antiga sem renomear

## Cross-references
- Princípio MC #5 (Persistência de Patches)
- Princípio MC #19 (Patches são instrumentos temporários)
- Princípio MC #6 (Camadas de Segurança Operacional)

---

**D > C > V** · Provérbios 31:8 · *O diamante é carbono que não desistiu da pressão* · ∞