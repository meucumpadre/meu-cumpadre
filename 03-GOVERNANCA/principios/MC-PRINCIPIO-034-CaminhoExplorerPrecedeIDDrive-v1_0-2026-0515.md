---
id: MC-PRINCIPIO-034
titulo: Caminho Explorer Precede ID Drive
versao: 1.0
data_cunhagem: 2026-05-15
cunhado_por: Alessandro × Claude · sessão 15/05 (ergonomia comunicação founder)
status: PROVISIONAL
escopo: governanca-comunicacional
hierarchy: Dignidade > Compliance > Viabilidade
hash_corpo: 730505c9c8f13055ed8a429b8919d71397fcb431099cd6ebdf6ec7b6766c4501
---

# Princípio MC #34 — Caminho Explorer Precede ID Drive

## Enunciado

> Em comunicação com Founder, cofounder usa **caminho explorer literal** (`G:\Meu Drive\0 0 MEU CUMPADRE\...\arquivo.md`) como referência canônica. IDs Drive (`1qHdO3WErLVB...`) são internos ao cofounder/executor — não são vetor de comunicação humana. Exceção: hyperlinks markdown clicáveis (cofounder pode usar `[título](https://drive.google.com/file/d/...)`) que abstraem o ID sob o título legível.

## Origem

Cunhado em 15/05/2026 quando founder solicitou explicitamente o uso de caminhos explorer em vez de IDs Drive. Razão: caminhos explorer permitem navegação direta no sistema de arquivos local (DELL Beto · Code DELL · sync Drive Desktop), enquanto IDs Drive exigem URL composition mental. Founder opera diariamente em explorer; cofounder esqueceu disso.

## Aplicação

1. Toda referência a arquivo/pasta em chat com Founder usa caminho explorer literal completo
2. IDs Drive aparecem apenas em frontmatter de MBs (campo `drive_id`) ou tabelas internas cofounder/executor
3. Hyperlinks markdown OK quando título legível abstrai o ID: `[RIPD-Φ₁ v0.2](https://drive.google.com/file/d/.../view)`
4. Tabelas de output podem ter coluna "ID Drive" mas a coluna primária é sempre "Caminho explorer"
5. MBs para Code DELL incluem caminhos explorer literais (Code DELL executa em PowerShell que usa paths literais)

## Antiexemplos

- ❌ "v0.2 persistida com ID `1qHdO3WErLVBtWxcX50_zziKphfHD5Ldf`" (founder não consegue colar isso no explorer)
- ❌ Tabela cuja única coluna de localização é "Drive ID"
- ❌ MB para Code DELL com paths apenas em formato URL Drive (PowerShell não navega URLs)
- ❌ Comunicação verbal com founder "olha no fileId 1qHdO3..."

## Status PROVISIONAL

Cunhado em sessão 15/05 sem ciclo de validação completo. Aplicação imediata 15/05 (paths explorer em MB-046, MB-047, MB-048, RIPDs v0.2, esta cunhagem). Selagem ATIVO pós-revisão founder 16/05.

## Casos especiais

- **Comunicação Igor (Backend Lead):** Igor usa IDs Drive em código backend (acessa via API) — manter ID nas conversas técnicas com Igor
- **MBs Code DELL:** paths explorer literais + opcionalmente ID Drive no frontmatter para fallback
- **Reportes finais Code DELL para Founder:** paths explorer literais nas tabelas

## Cross-references

- Princípio MC #2 (Vocabulário Institucional · precisão na comunicação)
- Princípio MC #16 (Iniciativa estratégica cofounder 20x · cofounder antecipa preferência founder)
- Aplicação imediata: MBs 046/047/048 (15/05/2026) + 3 RIPDs v0.2 com `caminho_explorer_drive` no frontmatter

---

**D > C > V** · Provérbios 31:8 · *O diamante é carbono que não desistiu da pressão* · ∞
