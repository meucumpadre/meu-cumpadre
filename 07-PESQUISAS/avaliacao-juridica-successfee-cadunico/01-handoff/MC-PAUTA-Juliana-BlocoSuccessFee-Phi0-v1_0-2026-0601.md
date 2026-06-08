---
tipo: PAUTA-BLOCO-R3
nome: Bloco Success Fee / Φ₀ CadÚnico — pauta Dra. Juliana
versao: v1.0
status: PARA REVISÃO JULIANA (R3 · OAB) · não-decidido
data: 2026-06-01
origem: descoberto na Fase 3 (refactor CLAUDE.md v3.0) — drift entre core e ADR-007 v3.8
gate: R3 — Dra. Juliana Pereira de Melo (OAB-GO 38.662) decide antes de selar redação no core
relaciona: "ADR-007 v3.8 Addendum · MC-INSTRUCOES-PROJETO v6.0.2 · CLAUDE.md v3.0 · Pauta Juliana Bloco M2 · Pauta 19Mai N7"
hierarquia: Dignidade > Compliance > Viabilidade
---

# Bloco Success Fee / Φ₀ CadÚnico — para parecer Dra. Juliana (R3)

## 1. Por que este bloco existe (1 parágrafo)

No refactor do `CLAUDE.md` (v2.2 → v3.0, 01/06/2026), a revisão adversarial detectou que o manual-mãe afirmava, em bloco, **"Success fee percentual VEDADO"** — mas o **ADR-007 v3.8** já tinha cindido a regra: **VEDADO no Φ₁ previdenciário · PERMITIDO (PROVISIONAL) no Φ₀ CadÚnico**, pendente justamente do **seu** parecer (Bloco M2). O core foi mantido em `[PENDENTE Juliana]` e nada foi decidido. Este bloco organiza a tensão e as perguntas.

## 2. A tensão documental (Proof-First · fonte linha-a-linha)

### Lado A — VEDAÇÃO estabelecida (success fee no previdenciário)
| Fonte | Trecho |
|---|---|
| `CLAUDE.md` v3.0 (Regra Inviolável #2) | Firewall OAB — nunca prometer resultado, advocacia, match comercial. |
| `MC-ESTUDO-Arquitetura-Custo-Sistemico:25,248,382` | "A vedação ao success fee percentual (ADR-007 v3.1) é a fronteira que mantém o MC do lado correto do firewall OAB." Ancorado em **REsp 2.079.440/RO** (STJ, Nancy Andrighi, 20/02/2024). |
| `MC-PRODUTO-Guardiao-...:355` | "Success fee é vedação dupla: REsp 2.079.440/RO + ADR-007 v3.2 (vedação interna do MC)." |
| `MC-CONCEITO-EssenciaDignidade:45` | Kant — "aquilo que tem dignidade não tem preço"; vedação como recusa de precificar o direito pelo valor econômico. |

### Lado B — PERMISSÃO nova, PROVISIONAL (success fee no Φ₀ CadÚnico)
| Fonte | Trecho |
|---|---|
| `ADR-007 v3.8 :42` | Φ₀-Dossiê — "R$ 60 no ato + R$ 60 condicionado à liberação do benefício (success fee em 4× R$ 15)". |
| `ADR-007 v3.8 :43` | "Base legal do success fee: **Permitido — não há prerrogativa OAB no âmbito CadÚnico/assistencial.** ⚠️ PROVISIONAL — validação Dra. Juliana Bloco M2." |
| `ADR-007 v3.8 :96` | "Success fee **PERMITIDO no Φ₀ CadÚnico** — não há prerrogativa OAB. ⚠️ PROVISIONAL — validação Juliana Bloco M2. Esta permissão **NÃO se estende ao Φ₁ previdenciário** (vedação mantida integralmente)." |
| `ADR-007 v3.8 :98` | "Φ₀ e Φ₁ são produtos distintos com regras distintas — o MC mantém firewall entre verticais." |
| `MC-INSTRUCOES-PROJETO v6.0.2 :125` | "success fee VEDADO no previdenciário (Φ₁) · success fee PERMITIDO no CadÚnico (Φ₀) ⚠️ validação Juliana Bloco M2." |
| `MC-INSTRUCOES-PROJETO v6.0.2 :360` | "Φ₀-Dossiê R$60+R$60(success) em 4×R$15 = R$120. Success fee permitido no CadÚnico." |
| `MC-INSTRUCOES-PROJETO v6.0.2 :474` | "❌ Aplicar success fee no Φ₁ previdenciário por analogia ao Φ₀ CadÚnico *(NOVO v6.0.1)*." |

**Síntese:** não é contradição real — é uma **cisão por vertical** (Φ₁ previdenciário VEDADO ≠ Φ₀ CadÚnico PERMITIDO), que **ainda não foi validada por você** e que **não chegou ao `CLAUDE.md`**, gerando aparência de contradição pra quem lê só o core.

## 3. Perguntas para seu parecer (R3)

1. **Confirma a cisão?** Success fee VEDADO no Φ₁ previdenciário e PERMITIDO no Φ₀ CadÚnico — a separação se sustenta juridicamente?
2. **A base legal de B.** A tese "não há prerrogativa OAB no âmbito CadÚnico/assistencial" (ADR-007:43,96) procede? O CadÚnico/CRAS é assistência social (fora da reserva da Lei 8.906/94) — mas a **cobrança contingente** (R$60 condicionada à liberação) cria risco de parecer captura/êxito disfarçado?
3. **Risco regulatório do modelo.** R$60 + R$60(success) em 4×R$15: há risco de pagamento contingente típico de instituição financeira (Lei 4.595/64 art. 17), na mesma linha que a pauta **N7** levantou pro Φ₂?
4. **Redação final pro core.** Qual a linha exata que deve entrar no `CLAUDE.md` (hoje: *"Success fee: VEDADO no Φ₁ previdenciário · em avaliação no Φ₀ CadÚnico [PENDENTE Juliana]"*)?
5. **Tabela de preços.** O produto **Φ₀** (hoje ausente da tabela do core) deve ser incluído no `CLAUDE.md` após seu OK?

## 4. Recomendação do Code TALÃO (até seu parecer)

- Manter `[PENDENTE Juliana]` no core (já feito) · **não cobrar** success fee em nada previdenciário (Φ₁) · não incluir Φ₀ na tabela do core antes do seu OK.
- Esta é matéria **R3** — Code não decide. Só organizou a fonte.

---
*Bloco preparado por Code TALÃO · 01/06/2026 · para Bloco M2 da pauta Juliana · não-decidido · Proof-First*
