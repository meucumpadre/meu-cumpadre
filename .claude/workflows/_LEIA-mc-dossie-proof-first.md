# _LEIA — mc-dossie-proof-first (lastro de alegações com fonte:linha + SIV)

**v0.1 PROVISIONAL · 2026-06-02 · drop zone · NÃO-INSTALADO · NÃO-SELADO**
**Gate humano: Founder. Instalação no `.claude/` batched com os outros 3 workflows (pós-conflito CLAUDE.md).**

Generaliza o **Coletor do squad-r3** (evidência lado A/B com fonte:linha) sob a anatomia **CP-MC** (Constelação Probatória: GPN/SIV/ICE · 5 vedações) num workflow executável (molde squad-r3). Dado um tema/claims, monta um dossiê Proof-First — sem concluir, sem selar.

> **Por que existe separado / firewall.** Cada workflow nasce do SEU método-fonte. Este lastra **alegações de Zona Verde** (doutrina/método/métrica). **NÃO é** o dossiê probatório OPERACIONAL do cidadão (esse tem PII, é atividade-meio sob **R3**, vive no C1 com os 16 componentes CP-MC). Aqui: zero PII; atividade-meio que organiza evidência, nunca conclui (atividade-fim = advogada).

## Os 3 arquivos (drop zone)

| Arquivo | Papel |
|---|---|
| `mc-dossie-proof-first.workflow.js` | Script · 3 fases · `meta` literal + FIXTURE + `agent({schema})` + SIV (SHA-256) + STOP no gate |
| `SKILL-mc-dossie-proof-first.md` | Wrapper `/mc-dossie-proof-first` |
| `_LEIA-mc-dossie-proof-first.md` | Este arquivo |

## Como rodar + o que esperar

- **Sem args** → **fixture** (dogfooding das métricas MC): A1 RA-MC ≥4× → `verificado`; A2 CMD North Star → `verificado`; A3 fórmula TENV-MC canônica → `nao-verificado` ([FONTE PENDENTE]); A4 preço "standard" superado → `refutado`. `regressao_fixture.veredito` deve dar **PASSOU**.
- **Com args** `{ tema, alegacoes?, fonte_pasta? }` → decompõe → garimpa lado A/B → carimba prova + SIV.

> ⚠️ **Rodar é opt-in e gasta agentes** (Garimpo = N coletores paralelos, um por alegação).

O motor **para no gate** e devolve (sem selar):

```
{ tema, modo, gate, linha_de_evidencia, quadro_sintese, tabela_md, bloco_siv,
  gaps_fonte_pendente, vedacoes_ok, regressao_fixture, pendencias }
```

### As 3 fases

| Fase | Faz |
|---|---|
| 0 · Alegações | decompõe o tema em proposições verificáveis (tipo: fato/metrica/capacidade/norma/tese) |
| 1 · Garimpo *(paralelo)* | por alegação: **lado A** (corrobora) + **lado B** (contraprova obrigatória) com fonte:linha/URL/Lei · firewall PII fail-closed |
| 2 · Dossiê | estado de prova ✅/⚠️/❌ + **SIV** (SHA-256 das fontes-arquivo) + linha de evidência + tabela + `[FONTE PENDENTE]` + checa as 5 vedações |

## Limites (governança dura · fail-closed)

- **Zona Verde:** zero PII (CPF/NB/CID/CNIS); fonte com PII → `[GATE R3]`, não transcreve.
- **5 vedações CP-MC** (C2-20:86-94): zero conclusão jurídica · zero adjetivação interpretativa · zero redação de despacho · **zero omissão de contraprova** · zero promessa de resultado.
- **NÃO sela, NÃO escreve no Vault, NÃO conclui juridicamente** (atividade-fim = advogada).
- **Proof-First:** ✅/⚠️/❌ + origem rastreável; sem rastro → `[FONTE PENDENTE]`; nunca fabricar.

## TABELA DE LASTRO (peças reais — `arquivo:linha`)

| Peça reusada | Fonte |
|---|---|
| Coletor — evidência lado A/B + fonte:linha + gaps | `.claude/workflows/squad-r3-pipeline.js` (COLETA_SCHEMA :29-45) |
| CP-MC = Constelação Probatória (GPN / SIV / ICE) | `C2-20 MC-POP-VisualLaw-DossieSelado-PARTE1` :36, :42-46 |
| SIV = Selo de Integridade Visual (SHA-256 + ICP + OpenTimestamps + QR) | `C2-20` :44 |
| 3 camadas cognitivas (entrada 10s · malha auditável · scaffolding) | `C2-20` :191-201 |
| 5 vedações da linha ética (inclui zero omissão de contraprova) | `C2-20` :86-94 |
| Proof-First (verificado / não-verificado / refutado · citar origem) | `MC-RÉGUA-COMPASSO` §2.4 :145-156 |

---

**Hierarquia:** Dignidade > Compliance > Viabilidade · **Proof-First** · **Zona Verde** (sem PII) · atividade-meio
**Status:** v0.1 PROVISIONAL · drop zone · gate humano (Founder; instalação batched pós-conflito CLAUDE.md)
∞
