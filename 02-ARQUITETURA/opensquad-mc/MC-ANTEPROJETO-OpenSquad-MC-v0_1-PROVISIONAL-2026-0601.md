---
tipo: anteprojeto-arquitetura
nome: MC-Squad · Orquestração Multi-Agente com Governança Embutida
nome-internacional: Governance-Embedded Multi-Agent Orchestration Layer
versao: v0.1
status: PROVISIONAL
data: 2026-06-01
gate-promocao: parecer Juliana (R3 — LGPD/OAB/ANPD) + validação Igor (autoridade técnica backend) + decisão founder R2 + 1ª aplicação Fase 1 ponta-a-ponta
substitui: —
relaciona: "OpenSquad (renatoasse/opensquad, MIT) · ADR-009a Custódia · ADR-011 Trinity 3 Cérebros · ADR-016 Anti-Injection · MC-ACI v2.0 · Router-Ethics 11.0 · Jornada E0-E7 · ADR-007 v3.5 Precificação · ADR-014 ZapSign · MC-SPEC-PLAYWRIGHT"
autor: Claude (claude-opus-4-8) como arquiteto+executor × Alessandro de Souza Neves (Founder/CEO)
audiencia: L1-L3 (founder/cofounder · time técnico Igor · parecerista Juliana)
poc-anexo: ./poc/ (rodável · Node ≥20 · offline · validado 2026-06-01)
proof-first: scores Router-Ethics do PoC são heurística de demonstração; custos marcados [PENDENTE]
hierarquia-decisao: R2 (cunhagem fundacional) → promoção condicionada a R3 (Juliana)
---

# MC-ANTEPROJETO-OpenSquad-MC-v0_1-PROVISIONAL-2026-0601

**MC-Squad · Camada de Orquestração Multi-Agente com Governança Embutida**
**v0.1 PROVISIONAL · 2026-06-01 · anteprojeto de duas frentes (marketing + operação) em fases com gates**

> Lucro é combustível. Causa é destino. Jogo é infinito.
> **D > C > V** · Provérbios 31:8 · "O diamante é carbono que não desistiu da pressão."

---

## 0 · NOTA PRÉVIA — O QUE ESTE ANTEPROJETO É (E O QUE NÃO É)

**É:** um anteprojeto de engenharia para uma **camada de orquestração multi-agente** do MC, inspirada no OpenSquad, entregue em **duas fases com gate de promoção entre elas**, acompanhado de um **PoC mínimo rodável** que prova o fluxo de controle e os gates de governança.

**NÃO É:** decisão de adoção selada (isso depende de R3/Juliana e validação de Igor); não é fork do OpenSquad em produção; não é autorização para tocar dado sensível em nuvem; não é promessa de cronograma com datas firmes (Crisálida Z3 é pré-revenue, N=150).

**Por que agora:** o founder trouxe o OpenSquad (Renato Asse, MIT) como gatilho. O fit com a camada de **conteúdo/marketing** do MC é altíssimo; o fit com a **operação de casos** é condicionado a um firewall LGPD rígido. Este documento separa as duas coisas com disciplina.

---

## 1 · CONTEXTO E GATILHO

### 1.1 As duas ferramentas comparadas pelo founder
- **OpenSquad** (Renato Asse · MIT): orquestração multi-agente *dentro da IDE*, squads descritos em linguagem natural (Pesquisador→Estrategista→Redator→Designer→Revisor), **pipeline com checkpoints de aprovação humana**, **"escritório virtual"** (dashboard 2D em tempo real), Node 20+, multi-IDE (Claude Code, Cursor, Copilot, Gemini CLI…), multi-LLM. Foco: automação corporativa + marketing de conteúdo.
- **Squad** (GitHub/Copilot): agentes especialistas coordenados *dentro do repositório*, via `squad-cli` + VS Code. Foco: engenharia de software.

### 1.2 Leitura arquitetural
O MC **já é** um sistema multi-agente cognitivo (MC-ACI v2.0): quarteto Founder · C3.1 Cofounder · Sister Anciã · Voo CLR001, sobre Router-Ethics 11.0 e a trinca de cérebros (ADR-011). O que o OpenSquad oferece de novo **não é a ideia de squad** — é a **mecânica operacional reutilizável**: definição declarativa de pipeline, checkpoints como artefato de primeira classe e dashboard de observabilidade. É isso que vale capturar.

### 1.3 Decisão do founder para este anteprojeto
- Alvo: **as duas frentes** (marketing + operação de casos), **em fases com gates**.
- Entrega: **documento + PoC mínimo** (este pacote).

---

## 2 · ANÁLISE DO OPENSQUAD (fit × risco para o MC)

| Dimensão | OpenSquad | Fit MC | Risco / Nota |
|---|---|---|---|
| Pipeline declarativo + papéis | ✅ nativo | 🟢 alto | — |
| Checkpoints de aprovação humana | ✅ nativo | 🟢 alto | Casa com handoff Router-Ethics |
| Dashboard "escritório virtual" | ✅ 2D tempo real | 🟢 alto | Observabilidade — valioso p/ Beto/founder |
| Multi-LLM (cloud + local Ollama) | ✅ | 🟡 médio | Precisa **forçar** roteamento por zona LGPD |
| Playwright headless (sessões browser) | ✅ | 🔴 sensível | gov.br/credenciais = **proibido fora do self-hosted** (ADR-009a). Já temos MC-SPEC-PLAYWRIGHT |
| Roda na IDE (Claude Code etc.) | ✅ | 🟢 alto | Alinha com operador único TALÃO (founder) |
| Licença MIT | ✅ | 🟢 alto | Uso/fork/adaptação livres |
| Persistência de cookies/profiles | ✅ local | 🔴 sensível | Custódia é Bitwarden Org MC, não pasta local |

**Veredito de análise:** OpenSquad é **excelente como referência e como motor da Fase 1 (marketing, zona segura)**. Para a Fase 2 (operação, zona sensível) ele **não pode ser usado como vem** — o roteamento por zona, a custódia de credenciais e o anti-injection (ADR-016) precisam ser *enforcement*, não convenção.

---

## 3 · TESE ARQUITETURAL — "MC-Squad"

> **Uma camada de orquestração fina, agnóstica de IDE, em que governança é gate de execução — não checklist.**

Princípios de projeto:
1. **Zona antes de tudo.** Todo squad declara `zona: segura | sensivel`. A zona decide o provider permitido (cloud vs self-hosted). Violação = bloqueio na entrada.
2. **Checkpoint = artefato.** Aprovação humana é nó explícito do pipeline, logado, auditável (não um "lembre-se de revisar").
3. **Router-Ethics no laço.** Os três scores (Confidence/Complexity/Fraudscore) rodam por estágio; qualquer cruzamento de threshold → handoff humano. Autonomia só se os três aprovam.
4. **D > C > V como circuit-breaker.** Flag de dignidade faz HALT imediato, acima de qualquer otimização.
5. **Proof-First por construção.** Sem fonte → `[FONTE PENDENTE]`. O orquestrador nunca "preenche" métrica.
6. **Trilha de auditoria sempre.** JSONL append-only por execução (insumo de LAI/ANPD e de melhoria).

---

## 4 · ARQUITETURA PROPOSTA (camadas)

```
┌─────────────────────────────────────────────────────────────┐
│  OBSERVABILIDADE — Escritório Virtual (dashboard) + audit JSONL │
├─────────────────────────────────────────────────────────────┤
│  GOVERNANÇA (enforcement)                                       │
│   Gate Zona LGPD · Anti-PII · Router-Ethics 11.0 · D>C>V        │
├─────────────────────────────────────────────────────────────┤
│  ORQUESTRADOR — pipeline declarativo + checkpoints humanos      │
├─────────────────────────────────────────────────────────────┤
│  ROTEADOR DE PROVIDER (por zona)                                │
│   cloud: Gemini 2.5 Flash / Claude   self-hosted: Llama 4 Scout │
│   ético: Claude Sonnet via MCP                                  │
├─────────────────────────────────────────────────────────────┤
│  AGENTES (papéis) · SQUADS (definições declarativas .json)      │
└─────────────────────────────────────────────────────────────┘
```

Mapeamento aos 3 LLMs da stack MC (CLAUDE.md): Triage ~70% Gemini (cloud, não-sensível) · Core ~25% Llama 4 Scout (self-hosted, sensível) · Ético ~5% Claude via MCP. **O roteador é o ponto onde a regra LGPD vira código.**

---

## 5 · FASE 1 — MARKETING / CONTEÚDO (zona segura) 🟢

**Premissa:** zero dado pessoal. Provider cloud liberado. Risco LGPD baixo. Aqui o OpenSquad pode ser usado **quase como vem** (fork/adaptação MIT).

**Escopo:**
- Squads de conteúdo: carrosséis Instagram, roteiros (vídeo→multiformato), manifesto missionário, tutoriais com screenshots.
- Compliance embutido no agente Revisor: firewall OAB (sem promessa de resultado/prazo), preços corretos (ADR-007 v3.5: R$ 2.200 / R$ 1.500 CadÚnico), Proof-First, Teste Zilda-STF.
- Dashboard "escritório virtual" para Beto/founder acompanharem.

**Entregáveis Fase 1:**
1. Fork/adaptação do OpenSquad em repo de código MC (não no vault Obsidian).
2. Biblioteca de 3-5 squads de marketing versionados.
3. Agente Revisor-Compliance com as proibições do CLAUDE.md.
4. Métricas de uso/custo de token reais (alimenta a aritmética — hoje `[A4-PENDENTE]`).

**Gate de saída G1 → libera Fase 2:** Fase 1 estável + custos de token medidos + parecer Juliana sobre publicação de conteúdo.

---

## 6 · FASE 2 — OPERAÇÃO E0-E7 (zona sensível) 🔴

**Premissa:** CPF/NB/CID/CNIS/senha gov.br em jogo. **Provider cloud proibido** (ADR-009a). Tudo self-hosted (Llama 4 Scout / GCP Brasil).

**Escopo (mapeado à Jornada E0-E7):**
- E2 Triagem/Deliberação · E3 Coleta Documental · E4 Protocolo INSS — como squads self-hosted.
- Protocolo DIB Urgency (B31/B91/B42/B43, janela 30 dias) como flag de dignidade → prioridade/SLA 24h.
- Anti-injection (ADR-016, gates G1-G5) no ingestão de documentos.
- Custódia: credenciais **nunca** no squad/pasta local — Bitwarden Org MC (ADR-009a Modelo B).

**Gates obrigatórios Fase 2:**
- Roteador recusa qualquer provider cloud para `zona: sensivel` (provado no PoC).
- Scanner anti-PII bloqueia vazamento entre zonas.
- Handoff humano onde Router-Ethics ou D>C>V dispara.
- Três Estados do Dossiê (ADR-009b): S1→S2→S3 com TTA; apagamentos por Alessandro pessoalmente.

**Gate de entrada G2 (R3 — inegociável):** parecer Juliana (LGPD/OAB/ANPD) + validação Igor + DPIA/RIPD da operação self-hosted antes de qualquer dado real.

---

## 7 · GATES ENTRE FASES (resumo)

| Gate | O quê | Quem | Bloqueia |
|---|---|---|---|
| **G0** | Aprovar este anteprojeto | Founder (R2) | início Fase 1 |
| **G1** | Fase 1 estável + custos medidos | Founder + Juliana (conteúdo) | início Fase 2 |
| **G2** | DPIA + parecer LGPD/OAB | **Juliana (R3)** + Igor | dado sensível real |
| **G3** | Auditoria self-hosted + anti-injection | Igor + Juliana | escala Fase 2 |

---

## 8 · POC ENTREGUE (evidência — Proof-First)

Local: [`./poc/`](./poc/) · Node ≥20 · **offline** (stub determinístico, sem rede/chave). Validado em 2026-06-01.

**O que o PoC prova (rodado, não afirmado):**
| Cenário | Comando | Resultado observado |
|---|---|---|
| Marketing zona segura | `run marketing-manifesto.json --auto` | `status=CONCLUIDO` (exit 0) |
| Sensível + cloud | `run triagem-caso-sensivel.json --auto` | **BLOQUEADO** `LGPD_ZONE_VIOLATION` (exit 3) |
| Sensível + self-hosted | `… --provider stub-self-hosted` | roda + **handoff** Router-Ethics na deliberação |

Trecho real do audit log (handoff):
```json
{"ev":"router_ethics","stage":"deliberacao","confidence":65,"complexity":75,
 "fraudscore":35,"faixaConfidence":"Amarela","handoff":true,"autonomia":false,
 "motivos":["confidence 65 (Amarela)","complexity 75 > 70"]}
```

**O que o PoC NÃO é:** os scores são heurística de demonstração (não o motor de 140 nós); o provider é stub (não chama LLM real). É prova do **fluxo de controle e dos gates**, não de qualidade de geração.

---

## 9 · RISCOS E MITIGAÇÃO

| Risco | Sev. | Mitigação |
|---|---|---|
| Vazamento de dado sensível para cloud | 🔴 Crítico | Roteador por zona (enforcement) + scanner anti-PII — provado no PoC |
| Playwright tocando gov.br fora do self-hosted | 🔴 Crítico | Fase 2 self-hosted only; credenciais em Bitwarden, nunca em profile local |
| Exercício indevido de advocacia (firewall OAB) | 🔴 Crítico | Agente Revisor-Compliance + R3 Juliana; atividade-fim é da Dra. Juliana |
| Prompt injection em documentos | 🟠 Alto | ADR-016 gates G1-G5 na ingestão (Fase 2) |
| Lock-in de IDE/provider | 🟡 Médio | Camada agnóstica; abstração de provider (já no PoC) |
| Custo de token não medido | 🟡 Médio | Fase 1 mede antes de escalar; resolve `[A4-PENDENTE]` |
| Fabricação de dado pelo LLM (Gemini) | 🟠 Alto | Proof-First por construção (`[FONTE PENDENTE]`) + cross-ref |

---

## 10 · ROADMAP (sequência, sem datas firmes — Crisálida Z3)

1. **G0** — aprovação founder + leitura Sister Anciã (contraintuição) + parecer Igor.
2. **Fase 1** — fork OpenSquad em repo de código; 3-5 squads marketing; Revisor-Compliance; medir custo.
3. **G1** — estabilizar + parecer Juliana conteúdo.
4. **DPIA/RIPD** Fase 2 (pré-requisito R3).
5. **G2 (Juliana R3)** — só então tocar dado sensível.
6. **Fase 2** — squads E2-E4 self-hosted + anti-injection + Três Estados.
7. **G3** — auditoria e escala.

---

## 11 · CUSTOS (Proof-First — não fabricar)

- Software OpenSquad: **R$ 0** (MIT).
- Tokens cloud (Fase 1): **[PENDENTE — medir no PoC→Fase 1]**. OpenSquad alerta que investigação/imagem é token-intensivo.
- Infra self-hosted (Fase 2): incremental sobre stack GCP Brasil já prevista — **[PENDENTE — Igor dimensionar]**.
- OPEX Z3 atual: R$ 18k/mês (CLAUDE.md). Este anteprojeto **não** propõe headcount novo (operador único = founder/TALÃO).

---

## 12 · DECISÃO E RACI

| Papel | Responsável |
|---|---|
| **A**prova fundacional (R2) | Founder Alessandro |
| **A**prova soberania/LGPD/OAB (R3) | Dra. Juliana Pereira de Melo |
| **R**esponsável técnico | Igor (backend, autoridade) |
| **C**onsultado (contraintuição) | Sister Anciã |
| **C**onsultado (execução caso) | Voo CLR001 |
| **I**nformado | Beto (operação) |

**Próximo passo único e concreto:** decisão **G0** do founder. Se 🟢, abrir repositório de código (fora do vault) para o fork da Fase 1 — o vault Obsidian guarda doutrina, não código de produção.

---

## 13 · PERGUNTAS PARA O GATE (pauta Juliana / founder)

1. Publicação de conteúdo gerado por agente precisa de disclaimer/curadoria humana nominal? (OAB/CDC)
2. DPIA/RIPD da Fase 2 self-hosted — quem assina como controlador?
3. Audit log JSONL com metadados de caso — retenção e base legal?
4. Dashboard "escritório virtual" pode exibir nome/iniciais de titular? (presumir que **não** em zona sensível)
5. Fork do OpenSquad mantém atribuição MIT + aviso de adaptação MC — confirmar conformidade.

---

## Apêndice A · Comandos do PoC
Ver [`./poc/README.md`](./poc/README.md).

## Apêndice B · Glossário de gates
- **Zona LGPD** — `segura` (cloud OK) vs `sensivel` (self-hosted only).
- **Handoff** — pausa obrigatória para decisão humana quando Router-Ethics/D>C>V dispara.
- **Checkpoint** — nó de aprovação humana declarado no pipeline.

---
*MC-ANTEPROJETO-OpenSquad-MC v0.1 PROVISIONAL · 2026-06-01*
*Arquiteto+executor: Claude × Founder Alessandro · promoção condicionada a R3 (Juliana)*
*D > C > V · Provérbios 31:8 · SEMPRE*
