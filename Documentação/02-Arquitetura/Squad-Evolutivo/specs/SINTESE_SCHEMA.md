# SINTESE_SCHEMA — Interface das Fases 1-3 → Sintetizador

**v1.1 · shape validado pelo Founder (revisão pontos 2/4) · 2026-06-04 · Cérebro 1 (mesa de trabalho) · PROVISIONAL · NÃO-SELADO**

Fonte da verdade do **contrato de interface** entre as pétalas (Arquiteto, Disrupter, Guardião), o Auxiliar e o resto do motor (Teste F → Curador). O `SINTESE_SCHEMA` no `sintetizador-evolutivo.workflow.js` **espelha** este doc — se um mudar, o outro acompanha.

> **v1.1 (revisão):** ponto 2 — o **Sintetizador** decide a dignidade e **pode divergir** do `dignidade.sinal` do Disrupter; ponto 4 — a `sintese` carrega `fontes[]`/`lacunas[]`, e o **Curador destila** `fonte`+`prova` singulares no registro (§3).

---

## Propósito
A `sintese` é o pacote que o **Auxiliar** consolida a partir das 3 pétalas e entrega "pronto para o Sintetizador aplicar o Teste de Aceitação F" (spec `sintetizador-auxiliar`). Ela carrega **tudo que o downstream consome**: o que o **Teste F** julga (§8), o que o **Curador** usa p/ registrar o attempt (§3) e o que aciona o **handoff R3**.

## Proveniência (quem produz cada bloco)
| Bloco | Produtor |
|---|---|
| `minuta`, `artefatos` | **Arquiteto do Invisível** (Guardião do SDD) |
| `dignidade` (assessment) | **Disrupter da Escala Zilda** |
| `proof_first` (`fontes[]`/`lacunas[]`), `escala_compliance` | **Guardião** (catraca leve Proof-First) |
| `convergencias`, `divergencias` + montagem | **Sintetizador Auxiliar** (consolida · preserva divergências · não decide) |

## Shape

```
sintese {
  disponivel: boolean              # mecânico (workflow) — as Fases 1-3 produziram?
  tema: string                     # da rodada

  # — substância (Arquiteto) —
  minuta: string                   # [obrigatório] a proposta consolidada — o que o Teste F julga
  artefatos: [{ tipo, ref }]       # specs/máquinas de estado/contratos = PONTEIROS p/ Cérebro 1 (não inline)

  # — convergência / divergência (Auxiliar) —
  convergencias: [string]
  divergencias: [{ ponto, posicoes: [{ petala, posicao }] }]   # preservadas, COM AUTORIA

  # — sinais p/ o Teste F (Disrupter ASSESSA; o Sintetizador DECIDE — ponto 2) —
  dignidade {                      # [obrigatório]
    sinal: 'aumenta' | 'neutro' | 'diminui'   # assessment do Disrupter (o Teste F pode divergir)
    zilda_stf: boolean                          # legível p/ Dona Zilda E ministro do STF?
    escala_4060M: string                        # como serve/quebra na escala
    justificativa: string
  }

  # — Proof-First / compliance (Guardião · catraca leve) —
  proof_first {                    # [obrigatório]
    fontes: [string]               # todas as fontes da rodada — o Curador DESTILA fonte+prova no registro (ponto 4)
    lacunas: [string]              # gaps de lastro → [FONTE PENDENTE]; bloqueiam validado (Decisão 4)
  }
  escala_compliance {
    toca_oab_lgpd_anpd: boolean    #  → gancho handoff R3 (toca_compliance_pesado)
    nota: string
  }
}
```

> A `sintese` **não** carrega `fonte`/`prova` singulares — só `fontes[]` (contexto da rodada). Os singulares (§3 do attempt) são **destilados pelo Curador** na hora de registrar.

## Mapeamento downstream
| Campo | Consumido por | Vira |
|---|---|---|
| `minuta` + `dignidade` + `proof_first` | **Teste F (P5)** | `dignidade_decidida` (o Sintetizador decide) → minuta/veto (§8) |
| `dignidade.sinal` | **Teste F (P5)** | **input** (assessment do Disrupter · o Sintetizador pode divergir) |
| Teste F `dignidade_decidida` | **Curador (P4)** | `attempt.dignidade_impacto` (§3) — a decisão do Sintetizador |
| `proof_first.fontes[]` | **Curador (P4)** | destila → `attempt.fonte` + `attempt.prova` (§3, singulares) |
| `proof_first.lacunas` | **Curador (P6)** | bloqueia promoção a `validado`/skill |
| `escala_compliance.toca_oab_lgpd_anpd` | **gancho R3** | `toca_compliance_pesado` → Dra. Juliana |
| `divergencias` | **Gate (Founder)** | o que o humano decide |

## Regra de fonte/prova (Decisão 4 · validada pelo Founder · revisão ponto 4)
1. **Registrar attempt (§3):** `fonte` **E** `prova` (singulares) são **obrigatórios** — o **Curador destila** dos `proof_first.fontes[]` da rodada na hora de registrar. Sem fontes p/ destilar lastro real → o Curador **não registra**.
2. **Interface da sintese:** carrega `fontes[]` + `lacunas[]` (contexto da rodada). `lacunas` preenchidas **não bloqueiam** a `sintese` de existir.
3. **Promoção a `validado` / skill:** **bloqueada** se houver `lacunas` (somado aos critérios do §4: ≥2 rodadas independentes · sem contraexemplo · `dignidade_impacto ≠ diminui`).

## Decisões de design (validadas)
- **Artefatos = ponteiros** (paths no Cérebro 1), não inline — mantém a `sintese` leve + bate com o escopo de escrita do Arquiteto.
- **Divergências com autoria** (`posicoes:[{petala,posicao}]`) — preserva "divergências honestas" sem forçar consenso.
- **Dignidade em 2 camadas (ponto 2):** o **Disrupter** assessa (`dignidade.sinal`); o **Sintetizador** decide (`dignidade_decidida`) e **pode divergir**. O attempt (§3) registra **a decisão do Sintetizador**, não o assessment do Disrupter.
- **fonte/prova destiladas (ponto 4):** a `sintese` tem `fontes[]`/`lacunas[]`; o **Curador destila** os singulares `fonte`/`prova` no registro. O attempt (§3) permanece singular.

## Governança
Cérebro 1 · Zona Verde · **PII nunca entra** na memory/ (§7) · o **motor não escreve** na memory/ (§6, só o Curador grava). Status: **shape validado** (Founder, v1.1); doc **PROVISIONAL** até as Fases 1-3 rodarem de fato (pós-instalação dos agentes em `.claude/agents/`).

---
**Hierarquia:** Dignidade > Compliance > Viabilidade · **Proof-First** · ∞
