---
id: MC-PRINCIPIO-032
titulo: Sweep Total Pré-Cunhagem
versao: 1.0
data_cunhagem: 2026-05-15
cunhado_por: Alessandro × Claude · sessão 15/05 (cascata RIPDs v0.2)
status: PROPOSTO
escopo: governanca-cofounder-anti-colisao
hierarchy: Dignidade > Compliance > Viabilidade
hash_corpo: 09e0db11d59299e900ccc2de9338186221ce0d35694c707ae53a9d3441354a38
---

# Princípio MC #32 — Sweep Total Pré-Cunhagem

## Enunciado

> Antes de cunhar versão evolutiva de qualquer artefato canônico (RIPD, ADR, Spec, contrato), cofounder executa **sweep + leitura COMPLETA da v anterior** — não apenas resumo do que mudou. Sem isso, há risco de perder seções íntegras da versão pai ou duplicar conteúdo já existente. Aplicação ortogonal ao Princípio #26 (Anti-Colisão de numeração) — #32 garante integridade de evolução intra-artefato.

## Origem

Cunhado em 15/05/2026 durante cascata RIPDs v0.1 → v0.2 (3 RIPDs cunhados na mesma sessão: Φ₁ + Φ₄ + Hook1b). Cofounder leu integralmente as v0.1 dos 3 RIPDs ANTES de cunhar v0.2, preservando §1-§7 da v0.1 (íntegros) e adicionando §X + §0 + §2.X + §8-§12 sem perda. Resultado: 3 v0.2 com crescimento entre +222% e +322% e zero conteúdo da v0.1 destruído.

## Aplicação

1. Toda evolução v0.X → v0.(X+1) ou v1.0 → v1.1 dispara sweep da versão pai
2. Leitura COMPLETA, não snippet (Google Drive `read_file_content` ou view do path explorer)
3. Marcar explicitamente seções preservadas vs novas no frontmatter (`mudancas_v0_X` + `preservado_da_v0_(X-1)`)
4. Se versão pai tem >50KB, ler em partes mas garantir cobertura 100%
5. Princípio aplica-se também a quem recebe handoff de outra sessão Claude.ai (não confiar apenas no resumo)

## Antiexemplos

- ❌ "Vou cunhar v0.2 do RIPD-Φ₁ adicionando G1-G8 — já lembro do que tinha em v0.1"
- ❌ Reescrever §1-§7 baseado em descrição da v0.1, em vez de copiar bit-a-bit
- ❌ "v0.2 do contrato Φ₁ — cláusulas X, Y, Z novas" sem confirmar que A, B, C antigas continuam idênticas
- ❌ Pular leitura porque "tô com pouco contexto restante"

## Status PROPOSTO

Cunhado em sessão 15/05 sem ciclo de validação completo. Aplicação imediata 15/05 (3 RIPDs v0.2 cunhados sob este princípio). Selagem ATIVO pós-revisão founder 16/05 ou pós-Juliana 19/05.

## Cross-references

- Princípio MC #26 (Anti-Colisão Pré-Cunhagem · governa numeração entre artefatos)
- Princípio MC #1 (Inventário de Caminhos · sweep estrutural)
- Princípio MC #4 (Errata absorve, não inventa · preservação)
- Princípio MC #15 (Entrega cofounder cross-vertical · persistência mesmo turno)
- Aplicação inaugural: RIPDs v0.1 → v0.2 (15/05/2026)

---

**D > C > V** · Provérbios 31:8 · *O diamante é carbono que não desistiu da pressão* · ∞
