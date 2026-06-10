---
artefato: MC-ERRATA-CLAUDE-StackLLM-Llama-para-GAIA
versao: v0.1
status: SUPERSEDIDA pela v0.2 (2026-06-09) · histórico R2 (VOLTA + escalada R3) preservado abaixo — NÃO selar, CLAUDE.md NÃO tocado
data: 2026-06-08
rito: declarado R2 — RE-ROTEADO p/ R3 (edita Regra LGPD ancorada em ADR sob parecer Dra. Juliana 10/10) · fail-closed
veredito_r2: VOLTA · escalada_R3=true · 3 BLOQUEIA (Anciã) · ver §Veredito R2 abaixo
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

## Veredito R2 (rito rodado · 2026-06-09 · /squad-r2)

> **VEREDITO: VOLTA** · `escalada_R3 = true` · régua determinística (`nBloqueia > 0 ⇒ VOLTA`).
> Deliberação: F0 Enquadrar + F1 C3.1 (orquestrador) + **F2 Sister Anciã (agente real)** + F3 Coerência + F4 Síntese. **NÃO selado. CLAUDE.md NÃO tocado.**

**3 BLOQUEIA (Sister Anciã):**
1. **Proof-First / supersessão** — o texto PARA mantém `(~25%, sensível)` colado em GAIA. ADR-012:67 põe GAIA em **~70-75%**; o slot ~25% é **Sabiá-4**. A errata corrige `Llama→GAIA` e canoniza um percentual errado por arrasto. *(errata:28-29 vs ADR-012:67)*
2. **Coerência LGPD não-reconciliada** — Regra 5 diz CID **EXCLUSIVAMENTE** self-hosted; ADR-012:120-121 documenta escalada de CID via Claude **Bedrock sa-east-1** (opt-in + DPIA + Art. 11 II "d") e GAIA só "preferencialmente". A palavra "EXCLUSIVAMENTE" já é falsa hoje, e a errata troca o nome do motor sem tocá-la. *(CLAUDE.md:30 vs ADR-012:120-121)*
3. **Disciplina de gate (R3)** — edita a Regra 5 (Proteção LGPD) ancorando-a num ADR cujo status é `PROVISIONAL · aguarda parecer Dra. Juliana 10/10/2026`, e a pendência dela é exatamente a base legal da transferência internacional do CID. **Matéria R3, não R2.** *(ADR-012:5,137)*

**+ CORRIGIR:** garantir que **ambas** as linhas (CLAUDE.md:30 e :80) larguem o "GCP"; o PARA não nomeia a infra nova (coerente com "apontar, não cravar").
**+ NOTA:** mc-lint acusa ~540 ocorrências "Llama/GCP" em legados de `01-DNA/` — corrigir só o manual-mãe não fecha a superfície (dado, não pendência desta rodada).

**Ponto cego (Anciã):** *"A única edição que importa é semântica — 'EXCLUSIVAMENTE self-hosted' virou ficção no dia em que o ADR-012 admitiu Bedrock para CID. A errata que não toca essa palavra está canonizando uma promessa LGPD que o sistema não cumpre."* → falha no Teste Zilda-STF.

**O que corrigir antes de re-deliberar (→ v0.2, por C3.1):**
- tirar `~25%` de GAIA; refletir o multi-modelo real (ou só apontar ADR-012 sem cravar percentual);
- **reconciliar "EXCLUSIVAMENTE"** na Regra 5 com a escalada Bedrock (a edição que de fato importa);
- **re-rotear como R3** (Dra. Juliana antes do selo);
- ambas as linhas 30 e 80 largarem "GCP".

**Disposição:** errata `v0.1` → aguarda **v0.2 reescrita** (C3.1). CLAUDE.md permanece **v3.0** (não aplicado). Mapa de supersessão: nenhum. Mesmo a v0.2 corrigida **exige a Dra. Juliana (R3) antes de selar** — o R2 sozinho não basta.

---

## Sucessão → v0.2 (2026-06-09)

A C3.1 reescreveu a v0.2 (`MC-ERRATA-CLAUDE-Regra5-e-StackLLM-ponteiro-ADR012`), que **supersede esta v0.1** e larga a moldura rejeitada "Llama-para-GAIA" (nome de motor) pela moldura real "Regra 5 + ponteiro ADR-012". Auditoria da Sister Anciã sobre a v0.2 (2026-06-09): **CONDICIONADO** — os 3 BLOQUEIA desta v0.1 estão LIMPOS; decisões de cunhagem A/B/C validadas; **1 CORRIGIR de fidelidade** (a Regra 5 reescrita suavizou a vedação nominal "NUNCA Claude API direta" do Princípio #8 ATIVO). Por decisão do Founder, a v0.2 voltou à C3.1 para costura → **v0.3** (preservar o piso do #8), antes do kit-dossiê R3 da Dra. Juliana.

Footprint de drift ampliado na auditoria → 2 itens de backlog abertos: `MC-ERRATA-Principio008-...` (R3) e `MC-ERRATA-Principio021-...` (selo Founder).

---
*Esta v0.1 fica como registro histórico do rito R2 (VOLTA). A linha viva é v0.2 → v0.3 → R3. CLAUDE.md permanece v3.0, intocado.*
