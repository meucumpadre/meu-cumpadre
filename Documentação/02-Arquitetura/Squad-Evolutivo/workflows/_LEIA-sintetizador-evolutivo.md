# _LEIA — sintetizador-evolutivo (orquestrador do Squad Evolutivo)

**v0.4 (acompanha o workflow) · PROVISIONAL · 2026-06-04 · drop zone · NÃO-INSTALADO · NÃO-SELADO**
**Gate humano: Founder. Instalação no `.claude/` = gate (copiar agentes+workflow+skill, regenerar o RUA).**

Orquestra o **Squad Evolutivo** num **workflow executável** (idioma MC: `phase()` / `await agent({agentType, schema})` / `return` — igual ao `mc-pre-selagem`; **não** é mais o manifesto estático do v0.1). Dado um tema, roda o loop dos papéis e devolve um **resultado-rascunho + perguntas p/ o gate** — sem selar. O diferencial é o **loop evolutivo**: cada rodada lê e atualiza a `memory/` (via Curador), então a próxima parte de um ponto melhor.

> **Por que existe.** Orquestrador de método/arquitetura do squad. **NÃO é** o `squad-r3` (compliance de política/preço), nem o `mc-especimen-autoevolutivo` (motor de casos de-identificados), nem a `mc-pre-selagem` (gate de selagem). Aqui o produto é **desenho + aprendizado registrado**, não parecer nem selo.

## Estado de implementação (build incremental)

| Lote | Entrega | Estado |
|---|---|---|
| **Lote 1** | Fase 0 — leitura **real** da `memory/` (read-only, Explore) · `data` via arg · redação §6 | ✅ |
| **Lote 2** | Teste F (básico) · registro de attempt (§3) · promoção note→skill (§4) | ✅ |
| **Lote 3** | Fases 1-3 com **delegação real** aos agentes → `sintese` (SINTESE_SCHEMA) · **Decisão 4** | ✅ |
| **Lote 4** | Handoff R3 real (gancho `toca_compliance_pesado` já pronto) | ☐ pendente |

## Os arquivos (drop zone)

| Arquivo | Papel |
|---|---|
| `sintetizador-evolutivo.workflow.js` | Script executável · **5 fases** · `meta` literal + FIXTURE + **delegação real** via `agentType` + STOP no gate |
| `Documentação/02-Arquitetura/Squad-Evolutivo/specs/SINTESE_SCHEMA.md` | **Contrato de interface** pétalas→Sintetizador (fonte da verdade do shape da `sintese`) |
| `Documentação/02-Arquitetura/Squad-Evolutivo/memory/CONTRATO-memory.md` | Contrato da `memory/` (v0.3 · §3 formato · §4 promoção · §7 LGPD) |
| `Documentação/02-Arquitetura/Squad-Evolutivo/skills/sintetizador-evolutivo.md` | Wrapper `/sintetizador-evolutivo` |
| `Documentação/02-Arquitetura/Squad-Evolutivo/agents/*.md` | Os 4 papéis do squad |
| `Documentação/02-Arquitetura/Squad-Evolutivo/memory/{attempts,notes,skills}/` | A memória que evolui · **escrita EXCLUSIVA do Curador** (`guardiao-grimorio`), sob o Contrato v0.3 |

## Como rodar + o que esperar

- **Sem args** → **fixture** (regressão do loop): roda o loop inteiro simulado e valida a régua. `regressao_fixture.veredito` deve dar **PASSOU** (sintese no shape · Teste F=minuta · attempt registrado `rascunho` · 0 promoções na 1ª rodada · motor não grava).
- **Com `{ tema, data }`** → roda de verdade até onde dá sem instalação: Fase 0 (real, Explore) + Teste F (se houver `sintese`). `data` é **obrigatória** p/ registrar (§3, formato YYYY-MM-DD).
- **`args.sintese`** → injeta uma `sintese` manual (testa Teste F/Curadoria sem os agentes).
- **`args.instalado: true`** → habilita a **delegação real** às pétalas e ao Curador (exige os agentes em `.claude/agents/`).

> ⚠️ A delegação real (`agentType:'arquiteto-invisivel'`, `'guardiao-grimorio'`, etc.) só funciona **depois** que os agentes existirem em `.claude/agents/` e o RUA for regenerado (gate). Até lá: fixture + Fase 0 (Explore é built-in) + Teste F (agente default). ⚠️ **Rodar é opt-in e gasta agentes.**

### As 5 fases

| Fase | Faz | Quem |
|---|---|---|
| **Memória** | lê `memory/{attempts,notes,skills}` **read-only** + parseia o schema §3 | `Explore` |
| **Proposta** (Fases 1-3) | arquiteto desenha (minuta/artefatos) → disrupter assessa (dignidade) → guardião-catraca (proof_first/escala_compliance) → **auxiliar consolida** a `sintese` (preserva divergências) | `arquiteto-invisivel` · `disrupter-escala-zilda` · `guardiao-grimorio` · `sintetizador-auxiliar` |
| **Teste F** | o Sintetizador decide **minuta/veto** via `increasesDignity(DonaZilda)` (§8) | (motor · agente default) |
| **Curadoria** | **INVOCA o Curador** → registra attempt (§3) + promove note→skill (§4) · **o motor não grava (§6)** | `guardiao-grimorio` (Curador) |
| **Gate** | consolida + perguntas abertas · **STOP** (NÃO sela) | humano (Founder) |

## A interface `sintese` (o que liga Fases 1-3 ao resto)

A `sintese` é o pacote que o **Auxiliar** consolida e entrega ao Teste F / Curador. Shape, proveniência e mapeamento downstream vivem em **`Documentação/02-Arquitetura/Squad-Evolutivo/specs/SINTESE_SCHEMA.md`** (v1.1, validado). Em resumo: `minuta` + `artefatos` (ponteiros) + `convergencias`/`divergencias` (com autoria) + `dignidade` (Disrupter) + `proof_first` (Guardião) + `escala_compliance` (gancho R3).

> **Shape validado (v1.1):** revisado nos pontos 2 (o Sintetizador decide a dignidade · pode divergir do Disrupter) e 4 (o Curador destila `fonte`/`prova`). É a interface entre os agentes e o Sintetizador. Rode o fixture p/ vê-lo de pé.

## O loop evolutivo (por que "evolutivo")

```
 memory/ (Fase 0 · read-only)
    │
    ▼
 Proposta:  arquiteto ─► disrupter ─► guardião-catraca ─► auxiliar ──► sintese
                                                                          │
                                                                          ▼
                                                                    Teste F (minuta/veto)
                                                                          │
    ┌───── Curador grava attempt (§3) + promove note→skill (§4) ◄─────────┘
    │  (motor NÃO grava — §6)
    ▼
  memory/ mais rica  ──►  a próxima rodada parte daqui
```

A `memory/` é o que faz o squad **melhorar**: a Curadoria grava o aprendizado (via Curador), a Fase 0 da próxima rodada o lê. `attempts/` (bruto) → `notes/` (destilado) → `skills/` (grimório). A promoção exige **≥2 rodadas independentes** (§4) — por isso nada cristaliza na 1ª.

## Régua de governança (fail-closed · D > C > V)

- **Motor não grava (§6):** o `.workflow.js` **NÃO escreve na `memory/`** — só o **Curador** grava, quando invocado. E **NÃO sela / NÃO escreve no Vault** (ADR-011).
- **Zona Verde:** método/arquitetura. **PII nunca entra** na `memory/` (§7); se a leitura achar → incidente, não registro.
- **Proof-First + Decisão 4:** registrar attempt exige `fonte` **E** `prova` (§3); `lacunas` não bloqueiam a `sintese`, mas **bloqueiam** `validado`/skill (§4).
- **Teste F (§8):** só vira minuta se aumenta a dignidade operacional da Dona Zilda; senão, veto.
- **Firewall OAB:** a escala do disrupter para na atividade-meio; **compliance pesado não é adjudicado aqui** → gancho `toca_compliance_pesado` → **handoff R3** (Dra. Juliana · Lote 4).

## Limites (fail-closed)

- **Na dúvida, PARA no gate** (o squad propõe; o Founder decide e sela).
- O `.workflow.js` honra as regras do harness: sem `Date.now()/Math.random()/new Date()` (a data vem por `args.data`; ids variam por índice); `meta` literal. **Sintaxe validada** (parser, corpo envolvido em função async).

## TABELA DE LASTRO

| Peça | Fonte |
|---|---|
| Os 4 papéis do squad | `Documentação/02-Arquitetura/Squad-Evolutivo/agents/{arquiteto-invisivel,disrupter-escala-zilda,sintetizador-auxiliar,guardiao-grimorio}.md` |
| Shape da `sintese` (interface) | `Documentação/02-Arquitetura/Squad-Evolutivo/specs/SINTESE_SCHEMA.md` (v1.1) |
| Formato/escrita/promoção da `memory/` (§3/§4/§6/§7) | `Documentação/02-Arquitetura/Squad-Evolutivo/memory/CONTRATO-memory.md` (v0.3) |
| Teste Zilda-STF · D>C>V · Proof-First · Firewall OAB · missão 40-60M | `CLAUDE.md` |
| Escrita só em Cérebro 1 / gate p/ Vault | `CLAUDE.md` §Arquitetura 3 Cérebros (ADR-011) |

---

**Hierarquia:** Dignidade > Compliance > Viabilidade · **Proof-First** · **fail-closed**
**Status:** v0.4 PROVISIONAL · drop zone · gate humano (Founder) · próximo: **gate de instalação** (pré-selagem ✓ CONDICIONADO · SoR→MoR ✅ · paths ✅ · resolver **R2**) → depois Lote 4 (R3)
∞
