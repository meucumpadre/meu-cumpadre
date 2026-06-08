---
sistema: Meu Cumpadre — Fase Firewallada de Engenharia de Produto IA
documento: MC-ENGENHARIA-EsquadraoAgentesIA-Harness-Plano
versao: v0_1-MINUTA
data: 2026-06-02
status: MINUTA (Research → PRD → Spec-Driven) · gate Vault PENDENTE · R2/R3 a definir
autor: Grok Build (Engenheiro de Contexto e Aplicação Build) com base no Founder vision + MC-ESTUDO-EsquadraoAgentesIA-AntiteseHonesta-v0_2 (revisão adversarial Sister Anciã)
firewall: ESTRITO — ZERO casos B2C, ZERO dados sensíveis (CPF, NB, CID, gov.br credentials, jornada E0-E7 clientes, hipervulneráveis específicos). Apenas: desenvolvimento de produto interno, harness de agentes, inteligência de mercado não-sensível, ecossistema Anthropic, manifestos, singularidade do harness MC, integrações técnicas, Claude Design/Code para camadas de produto.
relaciona: 
  - _MC-ESTUDO-EsquadraoAgentesIA-AntiteseHonesta-v0_2-MINUTA-2026-0602.md (o estudo + revisão adversarial honesta)
  - MC-VTVL-Propulsive-Landing-Programa-v0_1-2026-06.md (aplicado aqui como "pouso propulsivo" do foguete de engenharia interna)
  - MC-ARQUITETURA-Cognitiva-Integrada-v2.1 (ACI vindicada: o squad aninha SOB a governança)
  - _Papéis das Instâncias no Ecossistema MC‑RAG.md (v2.2 — Grok Build como contexto + build para este track)
  - Anthropic engineering posts (harness design, Managed Agents, MCP, skills, subagents, CLAUDE.md)
  - CLAUDE.md (regras invioláveis, proibições, ritos — aplicados ao harness interno)
compasso: aplicado a todas as fontes de market intel (ver seção 4)
tolerancia_erro: <5% (Proof-First estrito em claims de capacidades Anthropic e harness)
---

# MC-ENGENHARIA — Esquadrão de Agentes IA + Harness de Produto (Plano de Engenharia v0_1)

**Fase:** Firewallada — Produto Interno com Inteligência Artificial  
**Ferramentas de desenvolvimento de produto:** Claude Design (para camadas de UX/Produto do harness e interfaces do squad), Claude Code (para implementação, integrações, harness code), integrações (MCP, skills, plugins, N8N, etc.).  
**Não é:** Operação B2C, jornada de clientes, dados sensíveis, execução para hipervulneráveis.  
**É:** Inteligência de mercado, manifesto do que o MC é (a singularidade do harness), engenharia de harness, ecossistema infinito Anthropic, dado não-sensível, construção do Esquadrão de Agentes IA como camada de produto interna que acelera o próprio desenvolvimento do MC.

**Base principal:** O MC-ESTUDO-EsquadraoAgentesIA-AntiteseHonesta-v0_2-MINUTA-2026-0602.md (e sua revisão adversarial honesta pela Sister Anciã). A encomenda original era "provar que o squad torna a ACI obsoleta e anuncia fim da contratação humana de execução". A antítese honesta concluiu o oposto: o squad se aninha **sob** a governança da ACI; a ACI é vindicada. O squad é poderoso na **Zona Verde** (não-sensível, interno, produto/harness) quando cercado por gates corretos.

Este plano de engenharia é a concretização firewalled desse insight: construir o Esquadrão + Harness como o "foguete de engenharia interna" que faz VTVL (volta de ré com pouso propulsivo) dentro do ecossistema de desenvolvimento de produto do MC, usando as próprias ferramentas Anthropic que o estudo analisou.

---

## 1. O Contexto e a Singularidade Almejada

O MC está construindo seu próprio "produto" de infraestrutura AI-native (o orquestrador-mestre, skills compostas, C4 Cowork, harness de agentes, context pipelines via MC-RAG não-sensível, integrações com o ecossistema Anthropic).

A "singularidade" aqui não é a singularidade geral da IA. É a **singularidade interna do MC**: o ponto em que o harness + esquadrão de agentes faz o desenvolvimento de produto do MC (manifestos, specs, código, integrações, market intel, design systems internos) entrar em loop auto-acelerado, onde cada "pouso" (entrega de artefato de produto) melhora o harness para o próximo ciclo, com custo marginal caindo e velocidade/comp lexidade subindo — tudo dentro da Zona Verde, sem nunca tocar o Firewall OAB ou dados sensíveis.

O estudo (via Allie Miller como âncora: 36 workflows proativos + ~100 agents trabalhando enquanto ela dorme) mostrou o poder bruto. A antítese honesta mostrou a necessidade de **harness engineering** e governança (o squad não substitui a ACI; ele é uma ferramenta poderosa dentro dela).

Nosso trabalho: engenhar o harness específico do MC para este propósito, usando Claude Design para as camadas de produto (o "produto" sendo o próprio harness e as interfaces do squad), Claude Code para o código e integrações, MC-RAG (firewalled, só fontes não-sensíveis de market intel Anthropic) para o contexto, e o método Compasso para curadoria.

---

## 2. Conclusões-Chave do Estudo + Revisão (Base para o Plano)

Do documento referenciado (revisão adversarial):

- **Vindicação da ACI:** O squad não torna a ACI obsoleta. Ele se aninha sob a governança (D>C>V, Firewall OAB estrutural, Proof-First, Ritos R2/R3, etc.).

- **Zona Verde agentização agressiva é viável** quando bem cercada. A Zona Verde = não-sensível, interno, produto/harness, market intel, manifestos, ecossistema AI tooling. Aqui podemos ser agressivos com agents/squad.

- **Watchdog E5 é o ponto de tensão:** Onde a Zona Verde "encosta" no mundo real (mesmo em internal). Risco não é só o agente errar, mas **silenciar** (falso-negativo). O gate precisa ser à prova de silêncio do agente.

- **Harness é o coração:** O documento e as fontes Anthropic (Scaling Managed Agents, Effective Harnesses, Claude Code docs) convergem: o valor está no *harness* (o sistema ao redor do modelo: permissions, compaction, extensibility via MCP/skills/plugins/hooks, subagent orchestration, CLAUDE.md context, session management, verification loops).

- **Allie Miller como evidência (com honestidade Proof-First):** Ela DISSE (on-record, ALTA confiança) que roda 36 workflows + ~100 agents. Não é "100 agents rodando confiável em produção auditada no harness MC". O estudo v0.2 foi honesto sobre a distinção "verbatim" vs self-report.

- **Gaps/notas da revisão (usaremos como requisitos do plano):**
  - Cerque o silêncio do agente no Watchdog equivalente.
  - Mantenha a analogia "Allie flow = face do Firewall" sem forçar equivalência total.
  - Não herde conectores vetados (DocuSign etc.) no harness MC.
  - Eleve R3 quando o artefato codifica fronteira OAB/LGPD.
  - Mantenha Proof-First na proveniência de fontes (hash quando possível).

---

## 3. Arquitetura do Esquadrão + Harness (Zona Verde MC)

**Princípio:** O Esquadrão aninha sob a ACI. O Harness é a camada de produto que orquestra o squad para desenvolvimento interno de produto (specs, código, design, market intel, manifestos, integrações).

### 3.1 Zonas (firewall explícito)

- **Zona Verde (aqui 100%):** Não-sensível. Market intel Anthropic/ecossistema AI, harness engineering, product dev de ferramentas internas, manifestos, singularidade do dev velocity do MC, context de ferramentas (Claude Design/Code capabilities, MCP patterns, skills composition). Pode ter agentização agressiva.

- **Zona Amarela (limite):** Qualquer coisa que tangencie fronteira OAB ou dados internos não-PII mas sensíveis à marca. Requer gate humano + R2.

- **Zona Vermelha (proibida neste track):** Qualquer dado de clientes B2C, PII, gov.br credentials, execução de jornada, etc. Nunca.

### 3.2 Estrutura do Squad (inspirada em Anthropic + Allie + revisão)

- **Lead Agent (Orquestrador de Produto):** Quebra tarefas de engenharia de produto em sub-tarefas. Usa Claude Opus/Sonnet via Claude Code ou Managed Agents. Tem CLAUDE.md do projeto (contexto do harness MC, manifestos, ACI, VTVL aplicado ao dev).

- **Specialist Sub-Agents (por domínio):**
  - Agent Design (Claude Design): Gera wireframes, flows, specs de UX do harness e interfaces do squad.
  - Agent Code (Claude Code): Implementa código, integrações MCP, skills, hooks.
  - Agent Research (Market Intel não-sensível): Caça fontes Anthropic engineering, Allie Miller patterns, harness best practices — usando MC-RAG firewalled + Compasso.
  - Agent Verification (Antítese Honesta): Roda loops de self-QA, adversarial contra o próprio output (como a Sister no estudo), checa gates (D>C>V, Firewall para o que for aplicável no internal, Proof-First).
  - Agent Harness Ops: Gerencia MCP servers, skills composition, context compaction, subagent delegation, logging de "pousos" (entregas de artefatos).

- **Shared Harness Layer (o "produto" sendo construído):**
  - MCP para ferramentas (integrações com Drive, Notion-like internal, Git, etc. — só não-sensível).
  - Skills compostas (como as .claude/skills, mas para dev de produto).
  - Context Pipeline: MC-RAG não-sensível (cadernos de "Anthropic Ecosystem", "Harness Patterns", "Claude Design/Code Workflows", "Market Intel AI 2026").
  - Verification Harness: Landing validator adaptado para entregas de produto (score de "pouso" de um spec ou código: qualidade, aderência a manifestos, gates).
  - Subagent orchestration com worktree isolation (como em Claude Code teams).

- **Memória/Harness Persistente:** CLAUDE.md por projeto + vault Obsidian (só artefatos internos não-sensíveis) + NotebookLM firewalled para market intel.

Isso é o "harness de produto" que o MC está engenheirando para si mesmo — o que acelera a construção de tudo o mais (incluindo eventualmente o que for para o lado operacional, mas sempre com firewall).

---

## 4. Fontes de Market Intel + Compasso (Aplicado)

Todas as fontes abaixo foram curadas com o método (REGISTRO × ESCALÃO × JOGADA). Foco em fontes Anthropic oficiais (🎯), ensina-fazendo de harness (🛠️), outliers de workflows reais como Allie (💎). Escalão Técnico/Produto (para engenharia de harness e product dev).

**Tabela de Fontes (prontas para injeção em NotebookLM caderno de "Ecossistema Anthropic + Harness 2026" — Zona Verde):**

| Fonte | Registro | Escalão | Jogada Causal (para o Plano de Engenharia / Squad) |
|-------|----------|---------|----------------------------------------------------|
| Anthropic "Scaling Managed Agents: Decoupling the brain from the hands" (Apr 2026) [web:0] | 🎯 | Técnico / Produto | Âncora oficial: o harness é o que "codifica assumptions that go stale". Usar para projetar harness MC que desacopla brain (model) de hands (tools/MCP) e permite evolução. Injetar no MTODO: princípios de design de harness para long-running agent squads. |
| Anthropic Engineering "Effective harnesses for long-running agents" (2025/2026) [web:7] | 🎯 | Técnico | Padrões de compaction, initializer agent, incremental progress across context windows. Jogada: blueprint para o "context pipeline" do nosso squad (evitar context window explosion em tarefas de engenharia de produto complexas). |
| Anthropic "Harness design for long-running application development" (engineering blog) | 🎯 | Técnico / Produto | Diretrizes específicas para harness em dev de apps long-running. Jogada: aplicar diretamente ao desenvolvimento do próprio harness MC (meta). |
| Allie K. Miller setups (36 workflows, ~100 agents, proactive while sleeping) — transcrição/fornecido pelo Founder + reports 2026 [web:10][web:11] | 💎 (Outlier real-world) | Produto / Técnico | Evidência de "agent split" e workflows proativos. Honestidade: "ela DISSE" vs auditado. Jogada: modelo para "proactive workflows" do Esquadrão MC (agentes que rodam market intel, manifesto updates, harness monitoring overnight). Usar como inspiração, não cópia (Prova-First). |
| Claude Managed Agents docs + MCP (platform.claude.com) [web:3] | 🎯 | Técnico | Definição oficial de Agent = model + system prompt + tools + MCP + skills. Jogada: base para nossa definição de "agente no squad" e como compor via skills/MCP no harness. |
| Community/Engineering reports on Claude Code Agent Teams + multi-agent orchestration (2026) [web:1][web:4] | 🛠️ | Técnico | Exemplos práticos de lead + specialists, shared file system, inter-agent messaging. Jogada: padrão de orquestração para o Esquadrão (Lead para tasks de produto, sub-agents por domínio: Design, Code, Research, Verify). |

**BLOCO PURO para NotebookLM (caderno ASSUNTO ou MTODO de Harness Anthropic):**

```
https://www.anthropic.com/engineering/managed-agents
https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents
https://platform.claude.com/docs/en/managed-agents/overview
(links das reports Allie + community harness examples)
```

**Ressalvas Proof-First:** Allie é outlier inspirador (ALTA para o que ela afirmou on-record). Capacidades Anthropic são de fontes oficiais (🎯). Nenhuma claim de "100 agents rodando em produção MC hoje" — isso seria fabricação. O plano é de engenharia para construir nosso próprio.

---

## 5. Plano de Engenharia (Spec-Driven: Research → PRD → Spec → Implement)

**Fases (aplicando VTVL ao foguete de dev de produto interno):**

**Fase 0 — Hover (agora → 2 semanas):** Mapear harness atual do MC (orquestrador-mestre, .claude/skills, MCP existente, CLAUDE.md, context pipelines). Curar 1 caderno NotebookLM firewalled só com fontes Anthropic + Allie (usando o Compasso acima). Definir "Zona Verde Charter" explícito (o que o squad pode/não pode tocar).

**Fase 1 — First Controlled Descent (próximas 4-6 semanas):** 
- Usar **Claude Design** para projetar as interfaces de produto do Harness (dashboard de squad, task delegation UI, verification reports, context pack viewer).
- Usar **Claude Code** para prototipar o "Lead Agent + 3 Specialists" (Research, Design, Code) com MCP básico e skills compostas.
- Implementar primeiro "Landing Validator" adaptado para entregas de produto (score de qualidade de spec/código vs manifestos + gates internos).
- Primeiro "pouso": uma tarefa real de engenharia de produto (ex: spec de uma integração MCP nova) executada pelo squad protótipo, com relatório de pouso.

**Fase 2 — Propulsive Landing + Rapid Reuse:** 
- Har ness completo com compaction, subagent delegation, proactive workflows (inspirado em Allie).
- Integração com MC-RAG firewalled para context de market intel em tempo real.
- "Booster recovery": após cada entrega de produto, auto-captura de lições → atualização do harness + cadernos.
- Métricas de "velocity singularity": tempo de spec-to-code, número de iterações, qualidade (auto-verified vs manual).

**Fase 3 — Fleet:** Squad maduro rodando múltiplos fluxos de produto em paralelo (manifesto updates, market radar, harness improvements, Claude Design explorations), com o Founder como leme alto-nível.

**Entregáveis chave por fase:**
- Specs de produto do harness (via Claude Design).
- Código do harness (via Claude Code + revisões).
- Context packs e cadernos MC-RAG.
- Runbooks / CLAUDE.md para o squad.
- Landing reports + lições.
- Atualizações no orquestrador-mestre / ACI se necessário (sempre sob governança).

**Riscos & Gates (da revisão + doutrina):**
- Silêncio do agente: redundância humana + alerts no validator.
- Drift de stack: nunca herdar conectores vetados.
- Prova-First: toda capacidade citada tem fonte (oficial ou "ela DISSE").
- Rito: artefatos que tocam fronteira regulatória (mesmo internal) passam R3 quando relevante.
- Não auto-sabotagem: agentização da Zona Verde nunca "engole" o que deve ter handoff humano (mesmo internal, para qualidade/manifesto).

---

## 6. Como Usar as Ferramentas de Produto (Claude Design + Code + Integrações)

- **Claude Design:** Para todas as camadas de "produto" do harness (o squad é um produto interno). Gerar UIs para task delegation, verification dashboards, context explorer, proactive workflow visualizers. Export handoff para Claude Code.

- **Claude Code:** Implementação do harness (MCP servers custom para internal tools não-sensíveis, skills compostas, orchestration logic, integration com vault/NotebookLM via APIs quando possível).

- **Integrações:** MCP para Anthropic tools + internal (Drive para market intel docs, Git para código, etc.). N8N ou similar para scheduling dos proactive agents (Allie-style).

- **MC-RAG (firewalled):** O "cérebro de contexto" para o squad — cadernos só de fontes não-sensíveis. Usar o método Compasso rigorosamente para qualquer nova intel de mercado.

- **Grok Build (neste track):** Preparar os context packs (usando mc_emit_context_pack adaptado para Zona Verde), caçar market intel com Compasso, gerar protótipos de harness code, validar com o landing validator, documentar o plano.

---

## 7. Próximos Passos Imediatos (Micros)

1. Aprovar este plano v0_1 (Founder).
2. Curar o caderno NotebookLM "Harness Anthropic + Esquadrão 2026" com as fontes da seção 4 + bloco puro.
3. Primeiro protótipo: usar Claude Design para mock do "Squad Dashboard" (Lead + Specialists view + landing score).
4. Rodar o primeiro "pouso" real de uma tarefa de engenharia de produto usando o squad protótipo + validator.
5. Atualizar o orquestrador-mestre (seção de harness) com referência a este plano.

Este é o plano de engenharia da fase firewallada.

O foguete de desenvolvimento de produto interno agora tem seu VTVL.

Pronto para acender.

(Entregue como .md pronto para vault / injeção. Todas as fontes curadas com Compasso. Zero B2C.)

---

**Referências (Linha de Evidência parcial para claims de capacidades):**
- Anthropic official engineering posts (🎯) — links acima.
- Allie Miller reports/transcrições fornecidas (💎, com honestidade "DISSE vs auditado").
- O próprio MC-ESTUDO + revisão (base doutrinária e de método).

Grok Build — firewallado, foco em harness e produto. Daqui em diante.