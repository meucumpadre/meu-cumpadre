---
doc_id: "MC-VAS-Diagnostico-Proposta-v0_3"
tipo: "VAS"
codigo: "MC-VAS-Diagnostico-Proposta"
titulo: "VAS — Validação Automatizada da Arquitetura Soberana · Diagnóstico + Proposta de Arquitetura"
versao: "0.3"
data: "2026-06-19"
status: "RASCUNHO — PRÉ-R2 · NÃO SELADO (o status governa a selagem, não a pasta)"
local: "02-ARQUITETURA/vas/ — área de trabalho viva, linted pelo mc-lint · NÃO canônico até R2 + 'aprovado para vault'"
supersede: "MC-VAS-Diagnostico-Proposta-v0_2 (atualização com Status de Implementação dos validadores Lúmus)"
plano: "Arquitetura Soberana (NÃO Jornada Operacional)"
zona: "Verde · zero PII"
autoria:
  - "Code TALÃO (Arquiteto+Executor) — diagnóstico e desenho"
  - "Grok — supervisor/curador (atualização v0.3)"
  - "Founder Alessandro — gate soberano (sela)"
gera_a_partir_de:
  - ".claude/hooks/mc-lint.py (enforcement léxico · linha-a-linha verificado)"
  - ".claude/registro/gerar-registro.py + _LEIA-registro.md (stack RUA · L1/L5/L6)"
  - ".claude/workflows/mc-pre-selagem.workflow.js (gate de selagem)"
  - "02-ARQUITETURA/router-ethics/MC-SPEC-EnforcementHooks-RE11xHarness-v0_1 (lacuna de citação)"
  - ".claude/vas/mc-coerencia.py (implementação Tier 3 Lúmus + fix eh_lumus)"
ancora_biblica: "Provérbios 31:8"
hierarquia: "Dignidade > Compliance > Viabilidade"
---

# VAS — Validação Automatizada da Arquitetura Soberana
## Diagnóstico + Proposta de Arquitetura (v0.3 · RASCUNHO PRÉ-R2)

> **Plano:** Arquitetura Soberana (governança, substrato agêntico, Lúmus, regras de decisão).
> **Fora de escopo:** Jornada Operacional (atendimento E0–E7, PII, caso do cidadão).
> Hierarquia: **D > C > V** · Proof-First · Zona Verde · *para no gate*.

---

## 1 · Resumo Executivo

A Arquitetura Soberana do MC já possui maquinaria de governança real e madura (mc-lint, stack RUA, mc-pre-selagem, squad-r2/r3, sister-ancia). O gargalo **não** é ausência de validação — é que a supervisão humana ainda é *load-bearing* em verificações que são **lógico-estruturais** (e não julgamento estratégico). São sete lacunas concretas onde a checagem poderia ser automatizada sem perda de qualidade.

O **VAS** fecha esses buracos com uma suíte de validadores organizados em tiers, estruturados pela **dupla gramática** (Lúmus + Gramática do Vale do Silício), e agregados em um único **Boletim de Coerência Soberana**. O VAS **diagnostica e barra**; nunca sela, nunca escreve no Vault e nunca toma decisões estratégicas de governança.

A primeira implementação foca em **V-supersessao + V-citacao**, por oferecerem o maior retorno com menor risco e serem 100% determinísticas.

---

## 2 · Leitura do Terreno (o que já existe)

Não estamos em greenfield. A maquinaria de governança já possui os seguintes componentes verificados:

| Peça | Arquivo | Papel | Maturidade |
|---|---|---|---|
| **mc-lint** | `.claude/hooks/mc-lint.py` | Stop hook block-mode · ~13 regras determinísticas das Proibições Absolutas | INSTALADO |
| **RUA** | `.claude/registro/gerar-registro.py` | Registro determinístico do `.claude/`, fail-closed, "gerado não mantido" | INSTALADO (100% cobertura) |
| **Telemetria (L5)** | `.claude/hooks/mc-audit.py` + `ler-audit.py` | Emissor com firewall LGPD | DEFAULT OFF (gate R2 pendente) |
| **Cockpit (L6)** | `.claude/registro/gerar-cockpit.py` | Geração de painel visual a partir do registro | INSTALADO |
| **mc-pre-selagem** | `.claude/workflows/mc-pre-selagem.workflow.js` | Gate de selagem (mc-lint + sister-ancia + rito) | INSTALADO (v0.1) |
| **squad-r2 / r3** | `.claude/workflows/squad-r2.*`, `squad-r3-*` | Ritos de cunhagem fundacional e parecer de compliance | INSTALADO |
| **sister-ancia** | `.claude/agents/sister-ancia.md` | Revisão adversarial (9 eixos) | INSTALADO |

**Conclusão:** o que falta não é criar validação do zero, mas fechar lacunas específicas onde o humano ainda realiza verificações que são, na essência, lógico-estruturais.

---

## 3 · Diagnóstico — Lacunas (G1–G7)

As lacunas foram organizadas em três famílias distintas:

### Família A — Extensão do mc-lint (regras estruturais)

| # | Lacuna | Hoje depende de | Evidência |
|---|---|---|---|
| G1 | mc-lint é apenas denylist de valores proibidos. Não possui regras estruturais | Humano | `mc-lint.py:65-121` e `:129-168` |
| G4 | Convenção de nome e coerência mínima de frontmatter não são validadas | Humano/revisão | `CLAUDE.md §Convenções` |
| G7 | Enforcement é *session-coupled*, não *commit-coupled* | A sessão de Claude existir | `settings.json:23-34` |

### Família B — Validadores de consistência positiva

| # | Lacuna | Hoje depende de | Evidência |
|---|---|---|---|
| G2 | Integridade de `[[wikilinks]]` | Humano clicar e verificar | `CLAUDE.md §Mapa Canônico` |
| G3 | Disciplina de supersessão e versão única canônica | LLM julgando (`gate_versao_ok`) | `mc-pre-selagem.workflow.js:137-163` |
| G5 | Lastro Proof-First de citações (linha, hash, `[FONTE PENDENTE]`) | Humano cross-referenciar | SPEC EnforcementHooks (alucinação de nós corrigida manualmente) |

> **G3 (detalhe importante):** atualmente o `mc-pre-selagem` delega a um LLM o julgamento de `gate_versao_ok`, algo que é essencialmente um problema de grafo determinístico. Esta é uma das maiores oportunidades de redução de não-determinismo em um gate já existente.

### Família C — Extensão do conceito de Registro

| # | Lacuna | Hoje depende de | Evidência | Prioridade |
|---|---|---|---|---|
| G6 ⭐ | A stack RUA não cobre o corpus do Vault (ADRs, Princípios, SPECs) | Inexistente | `gerar-registro.py` varre apenas `.claude/` | Alta |

> **G6** é estruturalmente a lacuna mais relevante: o princípio "gerado, não mantido" nunca foi estendido à doutrina. Materializa-se no **Tier 4** (consumidor) como a *RUA-doutrina*, projetada a partir dos fatos do VAS.

---

## 4 · Proposta de Arquitetura — VAS

### 4.1 · Princípio organizador: Dupla Gramática

- **Gramática do Vale do Silício (F02):** determinismo, fail-closed, policy-as-code, commit-coupled, golden fixtures.
- **Gramática do Lúmus (F01):** coerência do organismo (link quebrado = hifa rompida, supersessão falha = pulso perdido, citação sem lastro = mutação de borda não reconciliada).

A Família A fala sobretudo Vale do Silício (higiene de engenharia); a Família B/C fala sobretudo Lúmus (saúde do organismo). O Boletim reconcilia as duas numa leitura só.

### 4.2 · Camadas (tiers)

```
                    ┌─────────────────────────────────────────────┐
                    │   BOLETIM DE COERÊNCIA SOBERANA              │  ← humano consome
                    │   json (máquina) + md (humano) · 🟢 🟡 🔴      │
                    └───────────────▲─────────────────────────────┘
                                    │ agrega (determinístico · byte-idêntico/commit)
  ┌──────────────── VAS ───────────┴────────────────────────────────────┐
  │   TIER 0          TIER 1            TIER 2            TIER 3          │
  │   Léxico          Estrutura         Consistência      Canônico        │
  │   mc-lint +       V-nome            V-supersessao     V-router-nodes  │
  │   regras estrut.  V-frontmatter     V-citacao         V-constantes    │
  │                   V-wikilink                                          │
  └────────────────────────────────┬─────────────────────────────────────┘
                                    │ FATOS PRÉ-COMPUTADOS (o produto do VAS)
                    ┌───────────────▼─────────────────────────────┐
                    │  TIER 4 — FIAÇÃO  (CONSOME o VAS · não é VAS) │
                    │  • git pre-commit / CI                        │
                    │  • mc-pre-selagem (como pré-passo)            │
                    │  • RUA-doutrina: estende o conceito RUA ao Vault │
                    └─────────────────────────────────────────────┘
```

> **Observação importante:** o **Tier 4 não faz parte do VAS.** O VAS = Tiers 0–3 (produz *fatos pré-computados*); o Tier 4 = quem **age** sobre eles (barra commit, alimenta o gate, projeta o registro doutrinário).

**Validadores por tier** (definição terse — o "o quê" de cada um):
- **Tier 0 · Léxico** — `mc-lint` (já existe) + poucas regras estruturais no mesmo diff (Família A).
- **Tier 1 · Estrutura** — `V-nome` (convenção de nome MC, G4) · `V-frontmatter` (`doc_id`↔nome↔`versao`↔`status`, G4) · `V-wikilink` (todo `[[link]]` resolve, G2).
- **Tier 2 · Consistência** — `V-supersessao` (grafo de supersessão = DAG; um canônico por família; antigo com banner, G3) · `V-citacao` (`(linha N)`/hash/`[FONTE PENDENTE]`: arquivo existe, linha em range, dívida registrada, G5).
- **Tier 3 · Canônico** — `V-router-nodes` (nó C74/V120/D24… checado contra a tabela real do `_MC-RouterEthics_11_v1_1`, G5) · `V-constantes` (preços/versões/contagens batem com a fonte canônica — o mc-lint do avesso, G1).
- **Tier 4 · Fiação** *(consome, não é VAS)* — `mc-coerencia.py` em git pre-commit/CI (G7) · pré-passo determinístico do `mc-pre-selagem` · **RUA-doutrina** (estende "gerado não mantido" ao Vault, G6⭐).

---

## 5 · Priorização da Primeira Implementação

**Ordem recomendada:** `V-supersessao` → `V-citacao` → `V-router-nodes`

Justificativa:

- **`V-supersessao`** oferece o maior ganho imediato: remove julgamento de LLM de uma checagem que já está em produção (`mc-pre-selagem` `gate_versao_ok`). Falso-negativo aqui é o erro mais caro (selar duas versões "canônicas" da mesma família).
- **`V-citacao`** ataca diretamente o coração do Proof-First (G5).
- **`V-router-nodes`** é caso especializado de `V-citacao` (fonte fixa); deve vir logo após, reaproveitando o motor já construído.

Ambos nascem com **golden fixture** (casos bom/ruim), no molde do `FIXTURE_PRESELAGEM` (`mc-pre-selagem.workflow.js:50-68`), entregues num único `mc-coerencia.py` determinístico.

---

## 5.1 · Status de Implementação (atualizado em 19/06/2026)

Os validadores do **Tier 3 — Lúmus Substrate** já foram implementados, testados e versionados:

- `V-lumus-folder-structure`
- `V-lumus-self-referential`

**Detalhes da implementação:**
- Desenvolvidos com base no `MC-POP-Workflow-Lumus-Substrate-v0_1` (§4 a §6).
- Utilizam o gate `eh_lumus` para restringir o escopo apenas a artefatos do substrato Lúmus.
- Passaram por selftest com fixtures dedicadas e dogfooding (incluindo detecção e correção de falso-positivo no gate `eh_lumus`).
- Foram ativados via flag própria (`LUMUS_IMPLEMENTADO = True`), sem interferir no gate R2 dos validadores `V-supersessao` e `V-citacao`.
- Commitados no branch `claude/eloquent-fermat-mMuQq` junto com o fix do gate `eh_lumus`.

Os validadores estão **operacionais** e já demonstram valor ao identificar inconsistências de estrutura e completude em artefatos Lúmus.

---

## 6 · Limites do Sistema

O VAS **diagnostica e barra**. Ele **nunca**:

- Sela artefatos
- Escreve no Vault
- Toma decisões estratégicas de governança
- Interpreta tensões doutrinárias de alto nível

Essas responsabilidades permanecem com o Founder, os Ritos R2/R3 e o Code TALÃO (conforme ADR-011). Mesma postura do `mc-pre-selagem` e do `sister-ancia`: **reporta gaps, não conserta, não sela.**

---

## 7 · Critérios de Qualidade dos Validadores

1. Determinístico (saída byte-idêntica no mesmo commit)
2. Fail-closed na direção de **D > C > V**
3. Proof-First e auditável (`file:linha` + id da regra)
4. Possui golden fixture por validador
5. Falso-positivo é medido e tratado
6. Opera apenas em Zona Verde (nunca lê PII)
7. Para no gate (não sela, não escreve no Vault)

---

## 8 · Próximos Passos

Após aprovação desta v0.3, o próximo passo é a implementação de **`mc-coerencia.py`** contendo:

- `V-supersessao`
- `V-citacao`
- Golden fixtures para ambos

**Gate desta proposta:** R2 (fundacional — toca arquitetura de governança). Não toca OAB/LGPD/PII → **não** exige R3. v0.3 RASCUNHO em `02-ARQUITETURA/vas/` (área viva); não vira canônico sem "aprovado para vault" + R2 — a pasta não sela, o `status:` sela.

---

> **Atualização (19/06/2026):** Os validadores Lúmus (Tier 3) foram implementados e validados com sucesso. O gate `eh_lumus` foi ajustado para utilizar `tipo == LUMUS` (allowlist) em vez de substring no `doc_id`, evitando falsos-positivos em documentos de governança que apenas citam "Lúmus".

---
*MC-VAS-Diagnostico-Proposta v0.3 · 2026-06-19 · Code TALÃO + Grok (curadoria) · `02-ARQUITETURA/vas/` · NÃO SELADO · Hierarquia: D > C > V · Provérbios 31:8 · ∞*