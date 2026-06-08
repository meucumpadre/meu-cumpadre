# README — Squad Evolutivo (Sintetizador Evolutivo)

**v0.2 (reconciliado com o workflow v0.4) · PROVISIONAL · RASCUNHO · 2026-06-04 · drop zone (Cérebro 1 / mesa de trabalho) · NÃO-INSTALADO · NÃO-SELADO**
**Gate humano: Founder. Instalação no `.claude/` = gate (copiar artefatos + regenerar Registro de Unidades Agênticas).**

> Lucro é combustível. Causa é destino. Jogo é infinito.
> Hierarquia inviolável: **Dignidade > Compliance > Viabilidade**

---

## O que é

O **Squad Evolutivo** é um pequeno time de agentes do lado Code que **melhora ao longo das iterações** acumulando memória. Não é um agente único: é uma orquestração (o workflow `sintetizador-evolutivo`) onde **3 pétalas** (Arquiteto, Disrupter, Guardião) produzem pareceres, o **Auxiliar consolida** numa `sintese`, o **Sintetizador** aplica o **Teste de Aceitação F** (minuta ou veto) e o **Curador** registra/promove o aprendizado na `memory/`.

A metáfora é a do MC: **infraestrutura que opera abaixo da camada do mercado** — o squad é andaime invisível que equipa o trabalho de quem o usa, não um produto que se vende.

> **Estado:** os 4 papéis são **canônicos** (definidos pelo Founder). A interface entre eles é o `specs/SINTESE_SCHEMA.md` (v1.1). Snapshot de revisão em `ESTADO-REVISAO-prefR3.md`. Nada aqui está selado.

---

## A estrutura

```
Squad-Evolutivo/
├── agents/                              # specs canônicos dos 4 papéis (instalar em .claude/agents/ = gate)
│   ├── arquiteto-invisivel.md           # Guardião do SDD — produz a minuta + artefatos
│   ├── guardiao-grimorio.md             # Curador da memory/ (único que escreve) + catraca leve Proof-First
│   ├── disrupter-escala-zilda.md        # Lente de escala: Zilda-STF + Flywheel/MoR (de-identificado) + dependência
│   └── sintetizador-auxiliar.md         # Auxiliar: consolida as pétalas na `sintese`
├── workflows/
│   ├── sintetizador-evolutivo.workflow.js   # o motor (Sintetizador) que orquestra o loop + aplica o Teste F
│   └── _LEIA-sintetizador-evolutivo.md      # doc do workflow
├── specs/
│   └── SINTESE_SCHEMA.md                # contrato de interface pétalas→Sintetizador (v1.1)
├── memory/                              # aprendizado do squad · escrita EXCLUSIVA do Curador (Contrato v0.3)
│   ├── CONTRATO-memory.md               # contrato de escrita/promoção da memory/ (v0.3)
│   ├── attempts/                        # o que foi tentado + desfecho (bruto)
│   ├── notes/                           # aprendizados destilados
│   └── skills/                          # procedimentos cristalizados (o grimório)
├── skills/
│   └── sintetizador-evolutivo.md        # wrapper /sintetizador-evolutivo (invoca o workflow)
├── ESTADO-REVISAO-prefR3.md             # snapshot oficial de revisão
└── README-SQUAD-EVOLUTIVO.md            # este arquivo
```

---

## Os 4 papéis (canônicos)

| Agente | Papel | Escreve? | Gate |
|---|---|---|---|
| **arquiteto-invisivel** | **Guardião do SDD** — traduz narrativa + necessidades da ponta em specs/máquinas de estado/contratos executáveis (produz a `minuta` + `artefatos`). Atividade-meio; não sela. | Specs no work desk (Cérebro 1) · **nunca** `memory/` | R1 |
| **guardiao-grimorio** | **Curador da `memory/`** (papel principal): único que escreve/edita a `memory/`, sob o Contrato v0.3. Catraca **leve de Proof-First** (fonte/prova · sem PII · sem valor superado). Compliance pesado (OAB/LGPD/ANPD) → **handoff R3** (Dra. Juliana), não resolve interno. | **Único** que escreve em `memory/` (Contrato v0.3) | R1 |
| **disrupter-escala-zilda** | **Lente de escala** (read-only): **Teste Zilda-STF** (legível p/ Dona Zilda 68 **e** ministro do STF) + escala 40-60M + Proprietary Data Flywheel / Method-of-Record (MoR · de-identificado) + dependência. Reporta o `dignidade.sinal` (assessment); **o Sintetizador decide**. | Não (read-only · reporta) | R1 |
| **sintetizador-auxiliar** | **Auxiliar**: consolida as pétalas numa `sintese` (minuta provisória), **preserva divergências com autoria**. Não decide, não veta. | Rascunho no work desk · **nunca** `memory/` | R1 |

> O **Sintetizador** não é um agente — é o **próprio workflow**, que aplica o **Teste de Aceitação F** (`increasesDignity(DonaZilda)` → minuta/veto) e **invoca o Curador** para registrar/promover. O motor **nunca grava** na `memory/` (§6).

---

## O loop evolutivo (visão · detalhe no `_LEIA`)

```
 memory/ (Fase 0 · read-only)
    │
    ▼
 Pétalas:  arquiteto ─► disrupter ─► guardião-catraca ─► auxiliar ──► sintese
                                                                        │
                                                                        ▼
                                                                  Teste F (minuta / veto)
                                                                        │
    ┌──── Curador registra attempt (§3) + promove note→skill (§4) ◄─────┘
    │  (o MOTOR não grava — §6 · só o Curador escreve)
    ▼
  memory/ mais rica  ──►  a próxima rodada parte daqui   ──►   STOP no gate humano
```

A `memory/` é o que faz o squad **melhorar**: o Curador grava o aprendizado, a Fase 0 da próxima rodada o lê. `attempts/` (bruto) → `notes/` (destilado) → `skills/` (grimório). A promoção a skill exige **≥2 rodadas independentes** (§4) — por isso nada cristaliza na 1ª.

---

## Governança (fail-closed · D > C > V)

- **Zona:** Verde — opera sobre **método/arquitetura**, não sobre PII de cliente. CPF/NB/CID/CNIS/senha gov.br **nunca** entram aqui (LGPD · §7).
- **Motor não grava (§6):** o workflow **NÃO escreve** na `memory/` — só o **Curador** (`guardiao-grimorio`) grava, quando invocado. E **NÃO sela / NÃO escreve no Vault** (ADR-011).
- **`memory/` tem dono único (Contrato v0.3):** somente o Curador escreve/edita em `memory/{attempts,notes,skills}`, sob o **[Contrato da Memory/ v0.3](memory/CONTRATO-memory.md)**.
- **Proof-First (Decisão 4):** registrar attempt exige `fonte`+`prova` (§3) — o Curador destila dos `fontes[]` da rodada; `lacunas` bloqueiam `validado`/skill (§4).
- **Firewall OAB:** o squad é atividade-**meio**. A escala que o `disrupter` persegue **para** na fronteira regulatória.
- **Catraca dura R3:** compliance pesado (OAB/LGPD/ANPD/PII) → **handoff** p/ a Dra. Juliana Pereira de Melo (gancho `toca_compliance_pesado` · roteamento real = Lote 4).

---

## Como instalar

Guia completo (passo a passo + gate + path-references) → **[`INSTALAR-SQUAD-EVOLUTIVO.md`](INSTALAR-SQUAD-EVOLUTIVO.md)**.

Estado do gate (**pré-selagem rodada → `CONDICIONADO` · rito R2**):

1. ☑ Blocos `rua` dos 4 agentes enriquecidos (passam no gerador, sem colisão de id).
2. ☑ Pré-selagem (`mc-lint` ✅ + `sister-ancia` + rito) — veredito **CONDICIONADO** (sem 🔴).
3. ☑ ~~SoR~~ renomeado → **MoR** (colisão removida) · ☑ path-references repo-relativas · ☐ **R2** (cunhagem fundacional — único item aberto do gate).
4. ☐ Copiar p/ `.claude/{agents,skills,workflows}/` + regenerar o RUA (`gerar-registro.py`).
5. ☐ Founder sela.

---

**Hierarquia:** Dignidade > Compliance > Viabilidade · **Proof-First** · **Zona Verde**
**Selo:** "O diamante é carbono que não desistiu da pressão."
**Status:** v0.2 PROVISIONAL · drop zone · gate humano (Founder) · ∞
