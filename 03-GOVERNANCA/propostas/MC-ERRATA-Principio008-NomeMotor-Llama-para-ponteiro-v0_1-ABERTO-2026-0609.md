---
artefato: MC-ERRATA-Principio008-NomeMotor-Llama-para-ponteiro
versao: v0.1
status: ABERTO · backlog · aguarda priorização — NÃO INICIADO
data: 2026-06-09
rito: R3 (princípio ATIVO + matéria LGPD → Dra. Juliana antes de selar)
origem: achado da Sister Anciã na auditoria da Errata-CLAUDE v0.2 (2026-06-09) — footprint de drift ampliado
hierarquia: D > C > V
---

# Backlog — corrigir nome-drift no Princípio #8 (Verde/Amarelo/Vermelho LGPD)

## O drift (verbatim verificado · 1ª mão)
`03-GOVERNANCA/principios/MC-PRINCIPIO-008-VerdeAmareloVermelhoLGPD-v1_0-2026-0513.md` **linha 25**:
> 🔴 Vermelho | CPF, NB, CID, dados biométricos, valor benefício | Stack self-hosted **Llama 4 Scout GCP BR** ou Bedrock sa-east-1 + Bitwarden Org MC para credenciais · NUNCA Claude API direta

O nome **"Llama 4 Scout GCP BR"** é o mesmo drift que a Errata-CLAUDE corrige no manual-mãe. O canônico (ADR-012 v1.2 l.59/67) é GAIA-4B self-host (Mac Mini M4).

## Por que é R3 (não selo Founder)
O #8 é **ATIVO** e é **matéria LGPD** (custódia de dado Vermelho). Mexer no enunciado da linha vermelha exige parecer da Dra. Juliana antes de selar — mesma régua da Errata-CLAUDE.

## Nuance importante (preservar na correção)
A **estrutura lógica** do #8 é correta e é o que ancora a reescrita da Regra 5 do CLAUDE.md: "Llama **ou** Bedrock sa-east-1 · **NUNCA Claude API direta**". Corrigir **só o nome do motor** (Llama → ponteiro/GAIA), **sem tocar** na vedação nominal "NUNCA Claude API direta" — que é justamente o piso que a Errata-CLAUDE v0.2 suavizou e precisa preservar.

## Gate
- [ ] Priorização Founder (abrir a rodada)
- [ ] Cunhagem C3.1
- [ ] Auditoria Anciã
- [ ] Parecer R3 Dra. Juliana
- [ ] Falcão aplica + commit

> Aberto por Falcão (Code TALÃO · 2026-06-09) por decisão do Founder. Item rastreado, não iniciado.
