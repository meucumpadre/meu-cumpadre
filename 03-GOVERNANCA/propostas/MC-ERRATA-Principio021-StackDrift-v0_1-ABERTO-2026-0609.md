---
artefato: MC-ERRATA-Principio021-StackDrift
versao: v0.1
status: ABERTO · backlog · aguarda priorização — NÃO INICIADO
data: 2026-06-09
rito: selo Founder (princípio PROVISIONAL aguardando selo — NÃO é matéria R3 nova; é higiene de drift)
origem: flag da Errata-CLAUDE v0.2 (§5) + auditoria Sister Anciã (2026-06-09)
hierarquia: D > C > V
---

# Backlog — corrigir stack-drift no Princípio #21 (Camadas IA por Finalidade)

## O drift (verbatim verificado · 1ª mão)
`03-GOVERNANCA/principios/MC-PRINCIPIO-021-CamadasIAPorFinalidade-v1_0-PROVISIONAL-2026-0603.md`:
- **l.31**: `Triagem não-sensível | Gemini 2.5 Flash | ... | ~70% | Verde`
- **l.32**: `Processamento sensível | Llama 4 Scout self-hosted (GCP Brasil) | ... | ~25% | Vermelha (stack soberana)`
- **l.44**: `Dado Vermelho ... → só stack self-hosted soberana (Llama 4 Scout / GCP BR)`

Mesmo drift do CLAUDE.md l.80: nome desatualizado (`Llama 4 Scout/GCP`) + atribuição de triagem ao Gemini que o ADR-012 v1.2 (l.59) move pro GAIA self-host.

## Por que é selo Founder (não R3)
O #21 está **PROVISIONAL aguardando selo Founder** (frontmatter l.9 do próprio princípio). A correção do drift entra na mesma decisão de selo — não abre matéria LGPD nova (a posture de zona de dado já está no #8). Gate = Founder, não a Dra.

## Forma recomendada (coerente com a Errata-CLAUDE)
Mesmo tratamento de ponteiro: não cravar motor/percentual enquanto ADR-012 PROVISIONAL; apontar `ver ADR-012` para a distribuição corrente. A tabela do #21 pode manter as **finalidades/zonas** (o invariante) e remeter motores/percentuais ao ADR.

## Gate
- [ ] Priorização Founder (abrir a rodada · pode casar com o selo pendente do #21)
- [ ] Cunhagem C3.1
- [ ] Selo Founder

> Aberto por Falcão (Code TALÃO · 2026-06-09) por decisão do Founder. Item rastreado, não iniciado.
