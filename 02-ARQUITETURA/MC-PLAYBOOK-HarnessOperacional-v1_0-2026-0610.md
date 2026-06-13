---
codigo: MC-PLAYBOOK-HarnessOperacional
versao: v1.0
data: 2026-06-10
autor: Code TALÃO (sessão web · branch claude/quirky-euler-eZHHG)
estado: CANÔNICO — destino main (modelo institucional MC)
rito: R1 (índice operacional; consolida artefatos já cunhados). Refactor deste
      playbook = R2 (Founder + C3.1 + Anciã).
proposito: índice canônico único do harness Claude Code do MC — skills de
           doutrina, agentes, hooks, métodos, ritos e gate.
tags: [playbook, harness, skills, doutrina, governanca, indice-canonico]
---

# MC-PLAYBOOK — Harness Operacional do Meu Cumpadre

> Manual operacional único do harness Claude Code do MC. Fonte da verdade do
> **o quê existe e quando acionar**. D > C > V · Proof-First · Firewall OAB ·
> Teste Zilda-STF. Detalhe de cada peça vive na sua própria fonte (linkada).

---

## 1. Princípios de operação (inviolável)

- **D > C > V** — Dignidade do hipervulnerável > Compliance > Viabilidade.
- **Proof-First** — zero dado fabricado; fonte = Lei + Evidência + hash. Lacuna → `[FONTE PENDENTE]`.
- **Firewall OAB** — MC = atividade-meio; atividade-fim = Dra. Juliana Pereira de Melo.
- **Firewall LGPD** — PII (CPF/NB/CID/CNIS/senha gov.br) só na stack soberana; nunca em repo/NotebookLM-US.
- **Teste Zilda-STF** — legível para Dona Zilda *e* para ministro do STF.

---

## 2. Ritos de cunhagem & Gate (ADR-011)

| Rito | Quando | Quem decide | Skill |
|---|---|---|---|
| **R1** | Operacional corrente | Founder soberano | — |
| **R2** | Fundacional (ADR · Princípio · refactor CLAUDE.md · stack) | Founder + C3.1 + Anciã | `squad-r2` |
| **R3** | Soberania/OAB/LGPD/ANPD | Dra. Juliana revisa antes de selar | `squad-r3` |

**Gate de selagem (ADR-011):** mesa de trabalho (escrita livre) → "aprovado para
vault" → canônico. Catraca dura: OAB/LGPD/PII ⇒ R3 fail-closed. Skill de gate:
`mc-pre-selagem` (Camada 0 lint + Camada 1 sister-ancia + checagem de rito).

---

## 3. Enforcement determinístico (hooks)

| Hook | Tipo | Função |
|---|---|---|
| `mc-lint.py` | Stop (block-mode) | Converte as Proibições Absolutas do CLAUDE.md em verificação determinística |
| `mc-audit.py` | — | Auditoria do harness |
| `session-start.sh` | SessionStart | Prepara ambiente (Docling) no Code web |

> Best-practice: o que **deve** acontecer toda vez vira hook, não conselho.

---

## 4. Agentes (subagentes)

| Agente | Papel |
|---|---|
| `sister-ancia` | Revisor adversarial em contexto fresco — 3ª voz, contraintuição pura. Revisa drift doutrinário antes de selar. |
| `mc-grok-context-engineer` | Engenheiro de contexto/prompt que mira o terminal Grok Build (fase firewallada, Zona Verde). |

---

## 5. Catálogo de skills de doutrina (por função)

### A · Governança & Cunhagem
| Skill | O que faz | Rito |
|---|---|---|
| `squad-r2` | Rito R2 fundacional — trio C3.1+Anciã, veredito PRONTO/CONDICIONADO/VOLTA | R2 |
| `squad-r3` | Rito R3 — parecer de compliance/OAB com teste adversarial Zilda-STF | R3 |
| `mc-pre-selagem` | Gate pré-vault — consolida lint + sister-ancia + rito num go/no-go | gate |

### B · Inteligência & Método
| Skill | O que faz |
|---|---|
| `mc-strategic-intelligence` | Research → NotebookLM → Brief Proof-First (**executor do método ER-MC**) |
| `mc-compasso-sweep` | Curadoria de fontes sob régua <5% + BLOCO de URLs puro p/ NotebookLM |
| `mc-dossie-proof-first` | Dossiê de alegações: lado A + contraprova obrigatória + SIV (hash) |
| `mc-especimen-autoevolutivo` | Motor #45/#46/#47 — engenharia reversa de espécimen + upgrade de template |
| `mc-prompt` | Forja de metaprompts (system prompts de excelência p/ instâncias Claude) |

### C · Jornada do Cidadão (E0-E7)
| Skill | O que faz |
|---|---|
| `novo-cliente` | Onboarding/abertura de caso |
| `status-caso` | Status do caso na jornada |
| `watchdog` | Monitoramento (E5 Watchdog) |
| `handoff-juridico` | Handoff da atividade-meio → atividade-fim (Dra. Juliana) |
| `checklist-docs` | Checklist documental |

### D · Registro & Operação
| Skill | O que faz |
|---|---|
| `diario` | Diário de sessão (05-MEMORIAL) |
| `auditoria-coletanea` | Auditoria de coletânea |
| `orquestracao` | Modo de planejamento |

### E · Aposentada (não invocar)
| Skill | Estado |
|---|---|
| `meu-cumpadre-orquestrador-mestre` | ⚠️ SUPERSEDED (2026-06-03) — conteúdo em 99-ARQUIVO-Legado. Fonte da verdade migrou p/ CLAUDE.md + ADRs + skills modulares. |

---

## 6. Métodos canônicos

- **ER-MC** — Método Engenharia Reversa MC (destilação de cadernos NotebookLM em
  inteligência Proof-First). Fonte: `MC-METODO-EngenhariaReversaMC-NotebookLM-v0_1`.
- **Motor Espécimen #45/#46/#47** — Diamante Bifronte + Engenharia Reversa + DNA
  Precede Ato (via `mc-especimen-autoevolutivo`).
- **Compasso (<5%)** — curadoria de fontes (via `mc-compasso-sweep`).
- **Proof-First / SIV** — linha de evidência + hash (via `mc-dossie-proof-first`).

---

## 7. Runtimes & NotebookLM

- **Desktop (local)** = NotebookLM/Drive/ferramentas locais. **Web (nuvem)** =
  Git/Vault/push. MCP local não atravessa pra nuvem. Fonte:
  `MC-INFRA-RuntimesClaudeCode-DesktopVsWeb-v1_0`.
- **NotebookLM** via `notebooklm-py` CLI. Grid de cadernos:
  `MC-INFRA-NotebookLM-Grid-v0_1` + `notebooklm-grid.py`. Receitas:
  `MC-INFRA-NotebookLM-CLI-v1_0`.

---

## 8. Replicação p/ outros cofres

Kit `08-ARTEFATOS/cofre-bootstrap/` — harness **generalizado** (motor de lint
desacoplado da identidade MC). As skills de doutrina deste playbook são **MC-
específicas**: cada cofre define a própria doutrina; o kit traz só o esqueleto +
camada NotebookLM.

---

*MC-PLAYBOOK-HarnessOperacional v1.0 · 2026-06-10 · canônico · D > C > V ·
Proof-First · Firewall OAB/LGPD. Refactor = R2.*
