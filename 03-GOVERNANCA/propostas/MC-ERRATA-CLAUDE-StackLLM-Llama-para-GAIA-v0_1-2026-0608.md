---
artefato: MC-ERRATA-CLAUDE-StackLLM-Llama-para-GAIA
versao: v0.1
status: PROPOSTA · aguardando R2 (C3.1 + Sister Anciã → selo Founder)
data: 2026-06-08
rito: R2 (refactor do manual-mãe CLAUDE.md = fundacional)
escopo: corrigir drift no CLAUDE.md §Stack — modelo self-host desatualizado vs ADR-012
lastro: ADR-012 v1.2 PROVISIONAL-REFINADO (2026-05-28)
executor: Falcão-canônico (Code TALÃO · sessão na org meucumpadre/meu-cumpadre)
hierarquia: D > C > V
---

# Errata CLAUDE.md §Stack — "Llama 4 Scout" → GAIA-4B/Gemma 3 (ADR-012)

## Problema
O `CLAUDE.md` ativo cita **"Llama 4 Scout"** como motor self-host em **2 lugares**.
O canônico, por **ADR-012 v1.2**, é **GAIA-4B** (`CEIA-UFG/Gemma-3-Gaia-PT-BR-4b-it`, Q5_K_M),
rodando em **Mac Mini M4 local** (servidor MC) — **não** Llama 4 Scout, **não** GCP.
O manual-mãe semeia toda instância nova → o drift se propaga. Barato matar agora.

## Ocorrências exatas (confirmadas no CLAUDE.md ativo)

**1) Regra 5 · Proteção LGPD (linha ~30)**
- DE:  `...processados EXCLUSIVAMENTE em stack self-hosted (Llama 4 Scout/GCP Brasil).`
- PARA: `...processados EXCLUSIVAMENTE em stack self-hosted soberana (motor GAIA-4B/Gemma 3 · ver ADR-012).`

**2) §Stack Técnica · LLMs (linha ~80)**
- DE:  `Llama 4 Scout self-hosted GCP BR (~25%, sensível)`
- PARA: `GAIA-4B/Gemma 3 self-host soberano (~25%, sensível · ver ADR-012)`

## ⚠️ Dois alertas (Proof-First) — ler antes de aplicar
1. **Não é só o nome do modelo.** A **infra** também mudou: ADR-012 diz **Mac Mini M4 local**, não "GCP BR". Por isso a errata **aponta pro ADR-012** em vez de cravar a infra. Se quiser cravar, **confirme a infra no ADR-012** antes.
2. **ADR-012 v1.2 é PROVISIONAL** + multi-modelo (GAIA-4B + Sabiá-4 + Claude Bedrock sa-east-1 + Llama 3.3 fallback). Cravar nome fixo no manual-mãe enquanto o ADR está provisional **re-semeia drift**. A forma **"ver ADR-012"** (fonte única) é a mais robusta — mesma lógica da lâmina C3.1 (apontar, não repetir).

## Rito (R2)
- [ ] Deliberação C3.1 (cunhagem)
- [ ] Sister Anciã (contraintuição)
- [ ] Selo Founder
- [ ] Aplicado na org pelo Falcão-canônico + commit/push
- [ ] (Opcional) registrar a errata no índice de erratas/patches

## Nota de fronteira
Esta errata **NÃO** se conflate com a selagem da Convenção de Assinaturas (gate leve, já feita). É R2 **próprio**, rodada **separada**.

---
*Parqueada no Vault como PROPOSTA R2-pendente por Falcão (Code TALÃO · 2026-06-09). CLAUDE.md NÃO foi tocado — aguarda o rito R2 completo (C3.1 + Sister Anciã + selo Founder) antes de qualquer aplicação no manual-mãe.*
