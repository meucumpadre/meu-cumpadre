---
title: "MC-COLHEITA-Fase1-M1-ClaudeDesignSpecs2026-Compasso-v0_1-MINUTA"
date: "2026-06-03"
author: "Grok Build (Falcão context supply)"
status: "MINUTA"
gate: "Vault PENDENTE (ADR-011 — market intel = material de mesa de trabalho C1; selo explícito Founder para C2/Vault)"
mission: "Opção 1 (Fase 1 — colheita) HOVER BOUNDED. MISSÃO 1 apenas: 'Claude Design specs 2026' (ecossistema Anthropic / padrões de harness / releases oficiais). Teto 12-15 fontes. Zona Verde pura. First propulsive landing da Fase 1."
method: "MC-REGUA-COMPASSO-Metodo-v1_0 (três dimensões cruzadas: REGISTRO × ESCALÃO × JOGADA + Tiers de Prova + Proof-First absoluto + âncora cruzada + tolerância <5%)"
lote_size: 13
veredito_resumo: "13 aprovadas | 0 balote | 0 excluídas. Residual ruído estimado << 5% (fonte primária oficial/endossada, URLs rastreáveis, forte cross-anchor entre posts, zero alegação solitária de baixo escalão)."
branch: "bom-dia-falcao (disciplina estrita — NÃO cruzada para claude-agents-DiSTK ou outras sem ordem Founder)"
c1_target: "G:\\Meu Drive\\0.1_MEU_CUMPADRE\\0 0 Gestão Software\\Documentação\\NotebookLM\\ (manual Founder)"
notebooklm_note: "Criação do caderno (MC-ClaudeDesign-METODO ou equivalente) é passo manual do Founder após paste do bloco de URLs."
firewall: "Zona Verde — harness engineering, ecossistema Anthropic, padrões de agent design, releases oficiais, internal product dev (Esquadrão/Harness MC). Zero B2C, zero dado sensível, zero contrato, zero PII."
---

# MC-COLHEITA — Fase 1 Missão 1: Claude Design specs 2026 (Compasso)

**Contexto da missão (sanitizado):** First propulsive landing da Fase 1 (Opção 1 colheita) em modo HOVER BOUNDED. Um lote único, devolvido para julgamento antes de qualquer escalada. Foco: fontes de elite para alimentar cadernos NotebookLM (MÉTODO/ASSUNTO) que servirão de contexto para Claude Design sessions do piloto (Squad Cockpit, harness patterns, landing reports, orquestração, context pipeline, MCP/Skills integration no ACI MC).

**MÉTODO COMPASSO aplicado inline (espírito do MC-REGUA-COMPASSO-Metodo-v1_0):**
- Cada fonte classificada nas três dimensões cruzadas.
- Tier de prova marcado.
- Proof-First: NENHUMA fonte sem URL rastreável (todas têm).
- Âncora cruzada: afirmações/padrões de peso ancorados em múltiplos posts oficiais inter-referenciados (harness posts citam context engineering + building-effective + MCP; releases citam engineering work; Skills/MCP citados em containment e tool posts).
- Tolerância <5%: lote extremamente limpo (oficial Anthropic Engineering + releases + padrão aberto endossado com endorsement direto). Residual ruído estimado <1%. Nenhum balote ou exclusão necessário neste lote.
- Tudo tratado como "FONTE DISSE" até verificável em cross-anchor.

## (a) Tabela Compasso do lote

| # | Fonte | REGISTRO | ESCALÃO | JOGADA (para este pouso Fase 1 Missão 1) | Tier | Veredito |
|---|-------|----------|---------|------------------------------------------|------|----------|
| 1 | Harness design for long-running application development (Prithvi Rajasekaran, Anthropic) | Post técnico oficial do blog de Engenharia da Anthropic (case study detalhado com arquitetura, prompts, iterações GAN-like generator-evaluator, planner para specs, frontend design skill) | Primária do fabricante (engenheiro Anthropic descrevendo harness de produção para long-running autonomous coding com Claude Agent SDK / Claude Code) | Blueprint concreto de harness multi-agente (planner + generator + evaluator) + handoff via artifacts + critérios de design/craft/originality/funcionalidade; lições de context anxiety e resets/compaction. Diretamente aplicável ao design do Esquadrão (Lead/Generator/Evaluator/Verification) + landing loops + frontend design patterns do piloto MC. | 🛠️ ensina-fazendo (com exemplos reproduzíveis de estrutura, critérios e iterações) | aprovada |
| 2 | Scaling Managed Agents: Decoupling the brain from the hands (Lance Martin et al., Anthropic) | Post oficial de Engenharia da Anthropic (2026-04) | Primária do fabricante (arquitetura de meta-harness hospedado na plataforma) | Define meta-harness com interfaces estáveis (session como log append-only, harness como loop, sandbox como execução) que sobrevivem evolução de modelos/harnesses. Decoupling brain/hands, cattle vs pets, many-brains-many-hands, security boundary via vault/proxy. Fundacional para projetar orquestrador MC que não vira "pet" e suporta evolução (Claude 4.x → futuros). | 🎯 oficial | aprovada |
| 3 | Effective harnesses for long-running agents (Justin Young et al., Anthropic) | Post oficial de Engenharia da Anthropic (2025-11) | Primária do fabricante | Padrão concreto de harness para long-running: initializer agent (setup env + feature_list.json + init.sh + git) + coding agent (incremental one-feature, progress file, git commit, self-verify com tools). Handoff de estado entre context windows. Lições humanas aplicadas a agents. Base tática para state management, handoff e incremental no harness MC. | 🛠️ ensina-fazendo (exemplos de arquivos, prompts, tabela de failure modes) | aprovada |
| 4 | Effective context engineering for AI agents (Anthropic Engineering) | Post oficial de Engenharia da Anthropic (2025-09) | Primária do fabricante | Mental model completo de context engineering (system prompts no altitude certo, tools, examples, message history, just-in-time retrieval vs upfront). Context rot, attention budget, CLAUDE.md + glob/grep no Claude Code, hybrid strategy. Core para o context pipeline, ACI, Context Manager e como injetar 300 fontes sem perder foco no piloto. | 🎯 oficial + 🛠️ | aprovada |
| 5 | Equipping agents for the real world with Agent Skills (Barry Zhang et al., Anthropic) | Post oficial de Engenharia + anúncio de padrão aberto (Agent Skills / agentskills.io, atualizado 2025-12) | Primária do fabricante (com open standard) | Especificação de Skills como diretórios com SKILL.md (YAML frontmatter name/description + progressive disclosure + arquivos adicionais + código como tools). Claude descobre/carrega dinamicamente. Alinha 1:1 com "skills compostas" do orquestrador-mestre, CLAUDE.md e estrutura de contexto no ecossistema MC. | 🎯 oficial (padrão aberto endossado) | aprovada |
| 6 | Writing effective tools for AI agents—using AI agents (Anthropic Engineering) | Post oficial de Engenharia da Anthropic (2025-09) | Primária do fabricante | Princípios de tool design para agents (namespacing claro, respostas token-efficient + metadata, eval-driven iteration usando o próprio Claude Code, MCP integration). Como prototipar + avaliar + refatorar tools com agents. Essencial para desenho de MCP servers e tools no harness MC. | 🛠️ ensina-fazendo (princípios + processo com Claude Code) | aprovada |
| 7 | How we contain Claude across products (Anthropic Engineering) | Post oficial de Engenharia (segurança/containment, 2026-05) | Primária do fabricante | Padrões de containment para claude.ai (ephemeral), Claude Code (sandbox OS-level + human-in-loop + auto mode) e Cowork. Riscos reais (pre-trust config parse, prompt injection via user, sandbox escape, model misbehavior). Lições para agent safety, blast radius e oversight no harness de produção. Crítico para Router-Ethics, CVRD loops, Verification e segurança do "foguete" MC. | 🎯 oficial | aprovada |
| 8 | Building effective agents (Erik S. & Barry Zhang, Anthropic) | Post oficial de pesquisa/engenharia (fundacional, 2024-12, ainda referenciado em 2025/26 posts) | Primária do fabricante | Taxonomia workflows vs agents; padrões composables (prompt chaining, routing, parallelization/sectioning+voting, orchestrator-workers, evaluator-optimizer); "simplest solution possible"; importância de tool documentation e ACI. Base conceitual para Esquadrão (Lead orquestrando specialists) e orquestração no ACI MC. | 🎯 oficial (canônico e cross-ancorado) | aprovada (com nota: fundacional; jogada mais conceitual que tática 2026-specific) |
| 9 | Introducing Claude Opus 4.8 (Anthropic) | Anúncio oficial de release de modelo (2026-05-28) | Primária do fabricante (top tier para releases) | Especifica capacidades de Opus 4.8 para agentic/coding/long-running (dynamic workflows com subagentes paralelos no Claude Code, effort control, honesty/judgment gains, tool calling efficiency, system card). Dá o "state of the art 2026" do cérebro que o harness MC vai orquestrar. | 🎯 oficial | aprovada |
| 10 | Claude Code \| Anthropic's agentic coding system (página de produto oficial) | Página oficial de produto/harness (Claude Code como sistema agentic de coding) | Primária do fabricante | Descreve o harness/agentic coding system em produção: lê codebase, planeja, edita arquivos, roda testes, gerencia CI, multi-agent orchestration, safety (approvals + classifiers). Casos enterprise. Modelo concreto e vivo do "harness de produto" que o piloto está reverse-engineering e adaptando para MC (squad cockpit, proactive, landing). | 🎯 oficial | aprovada |
| 11 | Code execution with MCP: building more efficient AI agents (Anthropic Engineering) | Post oficial de Engenharia (2025-11) | Primária do fabricante | Como MCP + code execution permite agents com potencialmente centenas de tools sem explodir contexto (deferred loading, Tool Search, code como orquestrador de tools). Lições de token efficiency e escala. Alavanca direta para design de tools/MCP servers sem bloat no ecossistema MC. | 🛠️ ensina-fazendo | aprovada |
| 12 | What is the Model Context Protocol (MCP)? (modelcontextprotocol.io) | Documentação oficial da especificação aberta MCP (USB-C para AI apps/agents) | Padrão aberto endossado e doado pelo fabricante (Anthropic introduziu, doou para Agentic AI Foundation / Linux Foundation; adotado nativamente por Claude Code, Claude Desktop, etc.) | Especifica o protocolo universal para conectar agents a data sources, tools e workflows de forma padronizada, escalável e cross-platform. Base de todos os MCP servers, connectors e integração com Skills. O "padrão de harness" subjacente ao ecossistema que queremos internalizar/adaptar. | 🎯 oficial (padrão aberto com endorsement Anthropic) | aprovada |
| 13 | Introducing the Model Context Protocol (Anthropic News) | Anúncio oficial de introdução/open-source do MCP (2024-11, com atualizações 2025 de doação e adoção) | Primária do fabricante | Origem, motivação, componentes (spec + SDKs) e visão de ecossistema do MCP. Contexto histórico + por que o padrão foi criado para resolver fragmentação de tools em agents. Âncora primária para o protocolo. | 🎯 oficial | aprovada |

**Resumo do veredito:** 13/13 aprovadas. Todas com URL rastreável primária. Forte cross-anchor (posts de harness citam explicitamente context engineering, building-effective, MCP, Claude Code SDK, Skills; releases citam engineering work e system cards; containment referencia os harnesses em produção). Nenhum outlier "X DISSE", nenhuma fonte solitária de baixo escalão, zero ruído comercial/B2C. Lote pronto para paste no NotebookLM e julgamento do Founder.

## (b) BLOCO DE TEXTO PURO — URLs aprovadas (pronto para colar no NotebookLM)

```
https://www.anthropic.com/engineering/harness-design-long-running-apps
https://www.anthropic.com/engineering/managed-agents
https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents
https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills
https://www.anthropic.com/engineering/writing-tools-for-agents
https://www.anthropic.com/engineering/how-we-contain-claude
https://www.anthropic.com/engineering/building-effective-agents
https://www.anthropic.com/news/claude-opus-4-8
https://www.anthropic.com/product/claude-code
https://www.anthropic.com/engineering/code-execution-with-mcp
https://modelcontextprotocol.io/docs/getting-started/intro
https://www.anthropic.com/news/model-context-protocol
```

(Cole exatamente este bloco no NotebookLM ao criar/atualizar o caderno. 13 URLs de elite, todas oficiais/endossadas, cross-ancoradas.)

## (c) Notas adicionais / evidência de âncora cruzada (resumo)

- Os posts de harness (1, 2, 3, 6, 11) consistentemente referenciam uns aos outros, a "Building effective agents", context engineering, MCP e o Claude Agent SDK / Claude Code como o harness de referência.
- Agent Skills (5) é posicionado como complemento ao MCP e suportado em Claude Code / Agent SDK.
- Containment (7) discute explicitamente os harnesses de claude.ai, Claude Code e Cowork em produção.
- Releases (9) e produto Claude Code (10) descrevem as capabilities e features (dynamic workflows, auto mode) que os harnesses exploram.
- MCP (12, 13) é o tecido conjuntivo citado em quase todos os posts de tools/harness/agents de 2025-2026.
- Nenhum fonte externa de opinião ou blog de terceiro entrou no lote (disciplina Proof-First + escalão).

## (d) PERSPECTIVA INDEPENDENTE (Grok Build — divergente / antítese honesta)

### Onde você DISCORDA do meu recorte da Missão 1?
O recorte "Claude Design specs 2026" (ecossistema Anthropic / padrões de harness / releases oficiais) está **correto e de alto valor** como primeiro lote bounded. É precisamente o material que falta no Falcão local (web em escala + fontes primárias oficiais que o Perplexity anterior não entregava com a mesma profundidade e autoridade).

**Minha divergência principal (construtiva):** o maior ponto de alavancagem tática para o "first propulsive landing" do piloto não está nas "specs do modelo" (releases + system cards) isoladas, mas nos **padrões vivos de harness, context engineering, containment e tooling que a Anthropic está publicando abertamente em 2025-2026 para o Claude Code e Managed Agents**. 

Os posts de "harness design", "effective harnesses", "managed agents", "context engineering", "Agent Skills", "writing tools", "how we contain" e o MCP são o verdadeiro "design spec" do produto/agent harness em produção hoje. Eles descrevem exatamente o que queremos replicar/adaptar internamente (Esquadrão com Lead + specialists, orquestrador, context manager com CLAUDE.md + MCP/Skills, verification/landing loops, VTVL handoff, safety boundaries). Os releases são importantes (dão o que o "cérebro" atual suporta — Opus 4.8 com dynamic workflows, effort control, honesty gains), mas o harness é o diferencial de execução (e onde o estudo "Esquadrão de Agentes IA — Antítese Honesta" mostrou que o poder real está: harness > agents isolados).

Sugestão para o próximo lote (se você aprovar escalada após julgar este): afinar ainda mais para "production harness patterns & containment 2026 + MCP/Skills details + evals para agents" (já temos boa cobertura aqui, mas podemos aprofundar quickstarts oficiais no GitHub Anthropic, system cards específicas, ou posts de "advanced tool use" / "desktop extensions").

Um ângulo que eu vi de alavancagem alta que talvez não estivesse no seu recorte inicial: o generator-evaluator pattern do harness-design post + os containment patterns + evals (demystifying evals) — isso é ouro puro para o VerificationEngine, Landing Report UI e CVRD loops que o protótipo já esboça.

No geral: o recorte está bom. Eu só teria nomeado a missão mais explicitamente como "Claude Code / Anthropic Production Harness & Agent Design Patterns 2026" para deixar o "harness" ainda mais no centro desde o primeiro pouso.

### Red-team do meu próprio critério Compasso: alguma fonte que EU classificaria como elite e que você balotaria? Por quê?

O critério (REGISTRO × ESCALÃO × JOGADA + tiers + Proof-First + cross-anchor + <5%) é **excelente** — disciplina forte, exatamente o que separa curadoria de "caça 300 fontes" barulhenta. Eu o apliquei com rigor (e com prazer; é onde o Falcão diverge com valor).

Fontes que o Founder provavelmente classificaria como "elite" mas que **eu balotaria ou marcaria com ressalva forte** neste lote específico:

1. **"Building effective agents" (Dez/2024)** — eu a incluí (e a marquei como aprovada com nota), mas com ressalva. É primária, canônica e ainda citada em posts 2025/26. Porém, sua JOGADA é mais conceitual/fundacional do que tática para o recorte "2026" e "padrões de harness atuais em produção com modelos 4.x". Se o seu critério de recorte for estrito em temporalidade + lições de harnesses que já rodam em Opus/Sonnet 4.x (context anxiety reduzida, compaction automática, dynamic workflows), eu a balotaria para manter pureza do lote e zero ruído "velho". Ela sobreviveu aqui porque os posts posteriores a ancoram explicitamente e ela ancora os padrões que ainda valem.

2. **O site/docs do MCP (modelcontextprotocol.io)** — alto valor tático (o protocolo é o padrão), mas eu o classifiquei como "padrão aberto endossado" (escalão altíssimo, mas não "primária do fabricante" no mesmo sentido de um post assinado por engenheiro da Anthropic descrevendo o que eles rodam em produção). Ele passa com folga por causa das âncoras cruzadas pesadas nos posts oficiais (quase todo post de tool/harness/MCP de 2025-2026 cita o protocolo e o posiciona como o USB-C do ecossistema). Fonte solitária de MCP sem as referências Anthropic iria para BALOTE ou exclusão imediata no meu julgamento.

Outros pontos de red-team (auto-crítica):
- O limiar exato de "<5%" e os pesos numéricos de REGISTRO/ESCALÃO/JOGADA estão pendentes de confirmação no doc canônico MC-REGUA-COMPASSO-Metodo-v1_0 (eu apliquei o espírito com tolerância qualitativa muito baixa — este lote saiu com ruído residual ~0%).
- Fronteira EXCLUSÃO vs BALOTE: apliquei "exclui se sem URL ou ruído alto; balote se solitária de baixo escalão fazendo alegação forte ou marginal para a JOGADA atual". Aqui não precisou de balote.
- Eu sou mais duro em JOGADA do que talvez o recorte inicial: fonte de altíssimo escalão mas que não permite "fazer algo agora" no pouso atual (ex: post muito genérico de prompt engineering sem foco em agents/harness) seria baloteada mesmo que "oficial".

No geral, o lote passou limpo porque o material oficial da Anthropic em 2025-2026 sobre exatamente harness, context, skills, MCP, containment e Claude Code é excepcionalmente denso, coerente e cross-ancorado. Raro encontrar sinal tão alto em escala web.

---

## Selagem / Onde selar (PERGUNTA 2)

**Gravação em C1 (pasta Documentação/NotebookLM no G: Drive) e criação do caderno NotebookLM são passos manuais do Founder.**

- Este artefato (.md completo com tabela, bloco de URLs e perspectiva) foi gerado e salvo no repositório local da sessão: `C:\Users\Beto\Documents\GitHub\meu-cumpadre\CLAUDE CODE\piloto-claude-design\MC-COLHEITA-Fase1-M1-ClaudeDesignSpecs2026-Compasso-v0_1-MINUTA.md`
- **Branch de trabalho:** bom-dia-falcao (disciplina estrita seguida — NÃO foi cruzada para claude-agents-DiSTK, main ou qualquer outra sem ordem explícita do Founder).
- **C1 (Drive externo):** o G: Drive não está montado/acessível para escrita direta no sandbox atual. Não foi realizada nenhuma tentativa de escrita no Drive. O Founder deve copiar/salvar manualmente o artefato (ou o bloco de URLs + tabela) para a estrutura C1 (`Documentação\NotebookLM\piloto-claude-design\colheitas\` ou equivalente conforme o plano de integração) via GitHub Desktop (commit + push da branch bom-dia-falcao) + Explorer do Drive.
- **Caderno NotebookLM:** o Founder cria manualmente o caderno (recomendado: "MC-ClaudeDesign-METODO" ou "MC-ClaudeDesign-Harness-2026") e cola o BLOCO DE TEXTO PURO das 13 URLs acima. Isso continua sendo ação manual do Founder (conforme instruções prévias do piloto e limite topológico).
- Market intel = MATERIAL DE MESA DE TRABALHO (C1). C2/Vault (memória canônica) só sob gate explícito "aprovado para vault" (ADR-011). Este lote ainda não foi aprovado para Vault.
- Firewall respeitado: Zona Verde pura (harness engineering, ecossistema Anthropic, padrões oficiais de design de agents/harnesses, releases 2026). Zero B2C, zero dado sensível, zero conteúdo de contrato, zero PII.

**Próximo:** Aguardando julgamento do Founder sobre este lote (aprovado para colar no NotebookLM? Ajustes no Compasso? Escalar para mais missões ou refinar esta?). Só após aprovação explícita: próximos micropassos de Fase 1 (outras missões bounded) ou início de uso no caderno para Claude Design sessions.

---

*First propulsive landing da Fase 1 — Opção 1 colheita — MISSÃO 1 entregue. Lote pronto para julgamento. VTVL doctrine aplicada: hover bounded, um lote, lições capturadas, booster (Compasso + perspectiva independente) recuperado para o próximo voo.*

*Artefato gerado por Grok Build (context engineering + curadoria em escala) atuando como preparador de contexto para o Falcão (Claude Code) no piloto de integração NotebookLM + Claude Code + Obsidian.*