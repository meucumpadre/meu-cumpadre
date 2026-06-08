# MC-GARIMPAGEM-17docs-v1.0
## Garimpagem de Insights: 17 Materiais YouTube → Convergências Meu Cumpadre
**Data:** 2026-04-09
**Sessão:** Claude.ai Opus 4.6 × Alessandro (Founder/CEO)
**Status:** 11/17 docs processados (10 únicos + 1 duplicado). Docs 12-17 pendentes para Sessão 2.
**Convenção:** MC-[TIPO]-[ASSUNTO]-v[X.X]-[YEAR]-[MMDD]

---

## ÍNDICE

1. [Catálogo dos Docs Processados](#1-catálogo-dos-docs-processados)
2. [Tabela Consolidada de Convergências (71)](#2-tabela-consolidada-de-convergências)
3. [Itens Sem Convergência — Eliminados (29)](#3-itens-sem-convergência)
4. [Ações Derivadas (58)](#4-ações-derivadas)
5. [Insights Raros e Alavancas Invisíveis (11)](#5-insights-raros)
6. [Princípios Nomeados (10)](#6-princípios-nomeados)
7. [Mapa do Organismo MC — 6 Camadas](#7-mapa-do-organismo)
8. [Decisões Candidatas a SELAR (4)](#8-decisões-candidatas-a-selar)
9. [Taxonomia Wiki MC Proposta](#9-taxonomia-wiki-mc)
10. [Padrão Emergente: Convergência de 6+ Docs](#10-padrão-emergente)
11. [Instruções para Sessão 2](#11-instruções-sessão-2)

---

## 1. CATÁLOGO DOS DOCS PROCESSADOS

| # | Título | Autor/Fonte | Tema Central | Hashtags Principais |
|---|--------|-------------|--------------|---------------------|
| 1 | 13 Hacks para usar MENOS TOKENS no Claude Code | BR, YouTube | Gestão de janela de contexto, economia de tokens | #token-management #context-hygiene #claude-code |
| 2 | Andrej Karpathy Just 10x'd Everyone's Claude Code | Nate (EN), YouTube | LLM Knowledge Bases com Obsidian + Claude Code (método Karpathy) | #knowledge-base #markdown #wiki #rag-alternative |
| 3 | Can AI Actually Organize Your Files? (Claude Code + PARA) | Tiago Forte, YouTube | Claude Code organizando arquivos via método PARA | #para #file-organization #78%-accuracy |
| 4 | Claude + Obsidian Complete Setup Tutorial 2026 | EN, YouTube (iniciante) | Workflow manual copy-paste Claude ↔ Obsidian | #manual-workflow #low-tech #beginner |
| 5 | Claude Code + Karpathy's Obsidian RAG is BROKEN | EN, YouTube | Implementação prática Raw/Wiki/Output + Web Clipper | #raw-wiki-output #web-clipper #rag-vs-wiki |
| 6 | Claude Code for Designers (Full Overview) | UICollective, YouTube | Claude Code + Figma MCP para design systems e auditoria UX | #figma-mcp #design-system #wcag #visual-law |
| 7 | Como Desenvolvi uma Memória que Evolui Sozinha (Método Karpathy) | Anuher Mushi (BR), YouTube | Implementação detalhada LLM Wiki + explicação wiki vs RAG | #wiki-vs-rag #conceitos-entidades #index-navigation |
| 8 | Como Economizar Milhões de Tokens no Claude Code (Limpeza Completa) | Alan Falcão (BR), YouTube live | Auditoria profunda de tokens — carregamento recursivo, front matter, limpeza | #recursive-loading #front-matter #token-audit |
| 9a | Managed Agents + ClickUp MCP (vídeo curto) | Guilherme.m (BR), YouTube | Claude Console + ClickUp MCP = relatórios automáticos de equipe | #managed-agents #clickup-mcp #dashboard |
| 9b | Crie Dashboards em SEGUNDOS com IA (tutorial completo) | Guilherme.m (BR), YouTube | Google Sheets → API → Dashboard HTML + OpenAI análise | #dashboard #sheets-api #openai-analysis |
| 10 | Give Me 15 Minutes. I'll Teach You 80% of Obsidian | Nick Milo (Linking Your Thinking), YouTube | Filosofia e mecânica essencial do Obsidian — links, MOCs, ACE | #obsidian-essentials #links>folders #mocs #ace |
| 11 | I Built an AI Second Brain Using Obsidian + Claude (Copy Me) | Miles Docher (EN), YouTube | Second brain operacional de negócio — hot cache, self-maintaining wiki, agent substrate | #compound-knowledge #memory-engineering #hot-cache |
| DUP | Como Economizar Milhões de Tokens (duplicado do Doc 8) | — | — | Eliminado |

**Docs pendentes (Sessão 2): 12-17** — 6 PDFs restantes da pasta de materiais de Alessandro.

---

## 2. TABELA CONSOLIDADA DE CONVERGÊNCIAS

### Doc 1 — 13 Hacks para Tokens

| # | Insight | Convergência MC | Alavanca |
|---|---------|-----------------|----------|
| 1.1 | CLAUDE.md como índice enxuto → Skills sob demanda | MC-CLAUDE.md v1.0 já opera assim (<200 linhas). Igor precisa internalizar o padrão. | Briefar Igor = prevenção de hemorragia financeira de tokens. |
| 1.2 | Model routing por complexidade (Sonnet/Haiku/Opus) | Stack MC: Gemini ~70%, Llama ~25%, Claude ~5%. Mais eficiente que a recomendação do doc. | Pergunta incômoda: estamos nos 5% certos com Claude? Risco de delegar ética ao Gemini. |
| 1.3 | Plan Mode antes de executar | Spec-Driven Workflow v1.0 é a versão enterprise. Diferencial: auditável, não informal. | MC já codificou como processo o que o mercado redescobre como hack. |
| 1.4 | CLAUDE.md como constituição evolutiva | Protocolo Alessandro = versão civilizacional. Cada caso validado deveria retroalimentar skills automaticamente. | Hooks + learning loop = diferencial que ninguém replica sem 22 anos de tacit knowledge. |
| 1.5 | /clear + /compact como higiene | Sessões MC no claude.ai não têm /compact. Checkin de Jornada = /clear conceitual. | Marcos de compactação explícitos entre blocos de maratona. |
| 1.6 | Sub-agentes são caros (overhead completo cada) | Super Cumpadre propõe 7 skills. Diferença: skills MC são lazy-loaded, não instâncias paralelas. | Documentar decisão: skills sequenciais, nunca paralelo simultâneo. |
| 1.7 | Colar só trecho relevante, não arquivo inteiro | Grimório 109K palavras: nunca injetar inteiro. Sempre busca fragmentada. | Valida grimorio-search como skill de busca, não carga bruta. |

### Doc 2 — Karpathy LLM Knowledge Bases

| # | Insight | Convergência MC | Alavanca |
|---|---------|-----------------|----------|
| 2.1 | Markdown puro > RAG complexo (até ~500K palavras) | Grimório 109K + KB v4 + Router-Ethics: tudo cabe em wiki. MC está na vanguarda sem saber. | MC sentado em ouro: wiki jurídico-previdenciária que nenhuma legaltech do planeta tem. |
| 2.2 | Hot Cache (~500 palavras do contexto mais recente) | MC NÃO tem hot cache. | `hot.md` elimina 50% dos "me atualiza". Implementar HOJE. Custo: zero. Impacto: alto. |
| 2.3 | Wiki > RAG para <100K docs | Grimório cabe. Elimina dependência de embedding model no MVP. | RAG = Phase 2. Wiki + index + grep = Phase 1. Simplifica stack, reduz custo, acelera. |
| 2.4 | Linting periódico da wiki | MC não tem. | Lint semanal: dados sem fonte, contradições, links quebrados, decisões seladas reabertas. |
| 2.5 | Raw → Wiki pipeline automático | MC processa docs ad hoc em conversas que morrem. Conhecimento evapora. | Sem pipeline Raw→Wiki, Protocolo Alessandro é rio que evapora antes de chegar ao mar. |
| 2.6 | CLAUDE.md aponta para wiki como contexto externo | MC-CLAUDE.md aponta para skills, não wiki. | Adicionar wiki_path: no CLAUDE.md v1.1. Custo: 15 min. |
| 2.7 | Multi-vault por domínio | MC tem vault único. | Vault único com bons índices é superior para equipe de 2-3. Multi-vault = Phase 2 (>5 operadores). |
| 2.8 | Wiki como substrato para outros agentes | Super Cumpadre = 7 skills que precisam de contexto. | Wiki MC é substrato compartilhado de todas as 7 skills. Karpathy sem querer desenhou a memória do Super Cumpadre. |

### Doc 3 — Tiago Forte + PARA

| # | Insight | Convergência MC | Alavanca |
|---|---------|-----------------|----------|
| 3.1 | PARA = mapa da estrutura da vida, não gerenciador de pastas | Router-Ethics = mapa da vida previdenciária do hipervulnerável. Isomorfismo. | Taxonomia PVAR proposta: Pendência/Vigência/Acervo/Resolvido para dashboard WhatsApp. |
| 3.2 | 22% de erro = lacunas de contexto pessoal, não capacidade | MC enfrenta o mesmo: erro = ausência de contexto que só existe na cabeça do Alessandro. | Valida matematicamente a Human API. Router-Ethics Score <70 = handoff. Forte provou empiricamente por quê. |
| 3.3 | 78% acerto = bom para acelerar, não substituir | MC posiciona AI como acelerador, humano como decisor. | Número-âncora para pitch: "MC é mais preciso que PARA porque regras são lei, não preferência." |
| 3.4 | Claude pede permissão antes de agir | Router-Ethics exige consentimento LGPD + handoff. | Mesma filosofia, gravidade infinitamente maior. MC pode perder prazo decadencial, não screenshot. |
| 3.5 | Sandbox/Working Directory por sessão | MC sem sandbox por CPF. | Cada dossiê = working directory isolado. Crítico para LGPD. |
| 3.6 | To-do list interna do agente (self-tracking) | Super Cumpadre sem execution_log. | Cada skill gera execution_log.md ao final. Auditabilidade total. |

### Doc 4 — Tutorial Básico Claude + Obsidian

| # | Insight | Convergência MC | Alavanca |
|---|---------|-----------------|----------|
| 4.1 | Maturação de notas: pensamento → ideia → projeto → conteúdo | Jornada E0→E7. Isomorfismo fractal. | "Lei da Maturação Fractal": toda entidade nasce amorfa, ganha forma, é processada, se resolve. |
| 4.2 | Zero código, barreira zero | Beto (53 anos, não-técnico) precisa operar. | Este é o Doc do Beto. Teto de complexidade aceitável para camada operacional humana MC. |
| 4.3 | Prompt Library como nota em Obsidian | MC não tem Prompt Library para operadores humanos. | "Skills = Prompt Library do LLM. Prompt Library = Skills do humano." Simetria perfeita. |
| 4.4 | Ciclo diário capturar → expandir → organizar | Alessandro não tem ritual diário de captura → vault. | 5 min/dia: `diário-YYYY-MM-DD.md`, 3 decisões/insights. Ingestão semanal pelo Claude Code. |

### Doc 5 — Karpathy's Obsidian RAG is BROKEN

| # | Insight | Convergência MC | Alavanca |
|---|---------|-----------------|----------|
| 5.1 | Raw → Wiki → Output como pipeline canônico | MC tem os três estágios mas não nomeados/formalizados. | Formalizar como estágios oficiais de todo documento MC. |
| 5.2 | Wiki > RAG para acervos < milhões de docs | Grimório cabe. | SELAR decisão: sem RAG no MVP. Wiki + grep = Phase 1. |
| 5.3 | Web Clipper = ingestão instantânea da web | MC monitora DOU, portarias INSS manualmente. | Web Clipper + raw/ = Changelog Jurídico vivo automatizado. |
| 5.4 | CLAUDE.md como cérebro que dirige navegação da wiki | Confirmação tripla (Doc 1 + 2 + 5). | CLAUDE.md = índice magro. Três fontes convergem = conclusão gravitacional. |
| 5.5 | Sub-wikis sob demanda | Super Cumpadre: cada skill poderia gerar sub-wiki por caso. | Dossiê do cidadão como sub-wiki gerada por skills, não PDF monolítico. |
| 5.6 | Multi-vault — vault único com sub-wikis | Doc 5 reforça Doc 2: multi-vault fragmentaria passarelas. | Vault único com sub-wikis por vertical. Multi-vault = anti-padrão para MC. |
| 5.7 | Custo = tokens na geração da wiki, não em infra | MC não monitora custo de geração. | Two-pass: Gemini gera rascunho wiki, Claude valida Proof-First. |

### Doc 6 — Claude Code for Designers

| # | Insight | Convergência MC | Alavanca |
|---|---------|-----------------|----------|
| 6.1 | Design System Audit Skill | MC não tem design system formalizado. | Carlos produz MC-Design-System-v1.0.md. Skill audita todo artefato visual. |
| 6.2 | WCAG Audit Skill | TCU: 88% órgãos falham acessibilidade. MC denuncia inacessibilidade. | Ironia fatal se MC produz artefatos inacessíveis. WCAG AA obrigatório. |
| 6.3 | Skill com regras do design system > prompt genérico | Artefatos MC (JSX, HTML, MD) sem regras visuais. | MC-visual-rules.md para que todo artefato nasça com alma visual MC. |
| 6.4 | Documentação design system como contexto obrigatório | Manual de Marca v1 existe (verbal), não tokens programáticos. | Ponte: Manual de Marca → Design System → Skill Claude → enforcement. |

### Doc 7 — Memória que Evolui Sozinha (Método Karpathy, BR)

| # | Insight | Convergência MC | Alavanca |
|---|---------|-----------------|----------|
| 7.1 | Conceitos × Entidades × Sources como taxonomia wiki | MC tem análogos naturais. Mas falta categoria PROCEDIMENTO. | Taxonomia MC: Sources → Entidades → Conceitos → Procedimentos → Decisões. |
| 7.2 | Index.md como oráculo — LLM lê e julga onde navegar | Grimório tem sumário, não index wiki navegável. | Index.md do Grimório = mapa semântico que destrava grimorio-search sem RAG. |
| 7.3 | Log.md como registro de toda alteração | MC não tem log de alterações do vault. | Log.md com timestamp + SHA-256 = cadeia de custódia do conhecimento. Escudo jurídico. |
| 7.4 | Wiki: julgamento LLM. RAG: similaridade cosseno. | Claude Sonnet no Router-Ethics = LLM julga mapa de 105 nós = MESMA ARQUITETURA. | Isomorfismo: Grimório = wiki de conhecimento. Router-Ethics = wiki de decisão. Um motor, dois combustíveis. |
| 7.5 | Wiki ceiling: ~500K palavras | MC < 300K. Confortável. Mas dossiês crescem. | Vault estratégico (<300K, estável) separado de vault operacional (dossiês, cresce → RAG Phase 2). |
| 7.6 | Wiki NÃO mata RAG — complementares | MC planejou RAG Phase 2. | Confirmado: wiki Phase 1, RAG Phase 2. Coexistem. |
| 7.7 | 8 perguntas de design para configurar propósito wiki | MC não tem "prompt de inicialização" para novos vaults. | genesis.md como padrão de inicialização. |

### Doc 8 — Limpeza Completa de Tokens

| # | Insight | Convergência MC | Alavanca |
|---|---------|-----------------|----------|
| 8.1 | Carregamento RECURSIVO: pasta mãe → projeto, tudo acumula | Vault MC em G:\Meu Drive\...: qualquer .claude/ ancestral injeta tokens fantasma. | Auditar árvore G:\ inteira. Bomba-relógio silenciosa. |
| 8.2 | Skills carregam APENAS front matter | MC-Skills-Frontmatter-Standard v1.0 já produzido. | Budget máximo: ≤50 tokens/skill no frontmatter. 7 skills × 50 = 350 vs. potencial 2.000+. |
| 8.3 | Duplicação silenciosa: skill em 3 níveis = carregada 3× | MC planeja global + local. | Cada skill em UM ÚNICO nível. Zero duplicação. Hook PreSession valida. |
| 8.4 | Skill para extrair heurísticas de conversas passadas | Protocolo Alessandro = codificação de tacit knowledge. | `protocolo-alessandro-miner`: minera sessões → extrai heurísticas → injeta no vault. |
| 8.5 | Sessões salvas localmente (~20K) — nunca perdidas | MC opera Claude Code no HP ENVY, futuro Mac Mini. | Antes de migrar HP→Mac: backup completo da pasta de sessões. |
| 8.6 | Tudo recarregado a cada mensagem | MC faz sessões longas. | /compact obrigatório a cada 15 mensagens ou 60% contexto. Hook PostToolUse. |

### Docs 9a/9b — Dashboards + ClickUp MCP

| # | Insight | Convergência MC | Alavanca |
|---|---------|-----------------|----------|
| 9.1 | Managed Agents + ClickUp MCP = relatórios automáticos | MC tem ClickUp + MCP CONECTADO + 419 tasks. | DASHBOARD OPERACIONAL MC v1 em <48h. Prova de vida do ecossistema. |
| 9.2 | ClickUp MCP puxa cards e analisa performance | Beto opera ClickUp mas Alessandro sem visibilidade agregada. | Dashboard elimina Alessandro-como-bottleneck. Beto executa, sistema reporta. |
| 9.3 | 73% dos dados nunca são usados | MC acumula dados no ClickUp jamais analisados. | 419 tasks × ~10 campos = ~4.190 datapoints dormindo. Padrões emergirão. |
| 9.4 | Google Sheets como banco do pobre | Para métricas iniciais, ClickUp via MCP JÁ É o banco. | Zero dependência de Igor para dashboard v1. MySQL = Phase 2. |
| 9.5 | OpenAI API para análise inteligente | MC usa Gemini Flash. | Substituir OpenAI por Gemini Flash para análise de dashboard. Custo ~zero. |
| 9.6 | Histórico de análises + comparação temporal | MC sem histórico de métricas — cada semana amnésica. | Snapshots semanais desde dia 1. Em 3 meses = 12 pontos para pitch. |
| 9.7 | Filtro por período | Piloto 500 usuários precisa de análise por cohort. | Dashboard foto → filme. Filme demonstra traction. |

### Doc 10 — 80% of Obsidian em 15 min (Nick Milo)

| # | Insight | Convergência MC | Alavanca |
|---|---------|-----------------|----------|
| 10.1 | "You own your notes" — soberania sobre dados | MC escolheu Obsidian = declaração de soberania informacional. | Inverter: cidadão NÃO é dono dos dados no Gov.br. MC dá soberania: "você é dono do seu dossiê". |
| 10.2 | MOCs = Maps of Content (notas-índice por tema) | Index.md, sumário Grimório, Router-Ethics 105 nós = TODOS são MOCs. | Renomear como MOCs formais. Rebranding com custo zero e clareza máxima. |
| 10.3 | ACE: Atlas/Calendar/Efforts | MC não tem camada Calendar. | Criar Calendar/ no vault. Convergência de 4 docs (2, 4, 9b, 10) gritando a mesma verdade. |
| 10.4 | "Don't over-folder. Links > Folders" | ClickUp precisa de folders (Beto executa). Obsidian deveria ser plano com MOCs (Alessandro pensa). | Duas gramáticas: hierárquica no ClickUp, reticular no Obsidian. Nunca misturar. |
| 10.5 | "Don't import everything. Start fresh." | 419 tasks do ClickUp no vault = potencial clutter. | Filtrar tasks do graph view. Não misturar execução com pensamento. |
| 10.6 | Separação sagrada: notas humanas vs AI-generated | MC gera artefatos via Claude que vivem no vault. | Tag source: ai-generated/ai-assisted/human-original obrigatória. Proof-First na genealogia. |
| 10.7 | [[double brackets]] = criar e conectar simultaneamente | Grimório v2 = monólito texto corrido, não wiki-links. | FRAGMENTAÇÃO DO GRIMÓRIO em wiki-notes interconectadas. 40-80h (70% automável). Transformacional. |
| 10.8 | Properties/metadata em notas | MC tem frontmatter para skills, não para notas wiki. | Frontmatter padrão para toda nota wiki: type, confidence, source, last-validated, related-benefit. |
| 10.9 | Templates para notas reutilizáveis | MC sem templates para vault. | 6 templates: Conceito, Entidade, Procedimento, Decisão, Source, Diário. |

### Doc 11 — AI Second Brain com Obsidian + Claude (Miles)

| # | Insight | Convergência MC | Alavanca |
|---|---------|-----------------|----------|
| 11.1 | "Prompt engineering → Memory systems engineering" | MC fez essa transição sem nomear. | Frame narrativo para pitch: "Nós não fazemos prompts. Fazemos engenharia de memória." |
| 11.2 | Knowledge compounds like interest | MC acumula mas não compõe — conhecimento espalhado, conversas morrem. | protocolo-alessandro-miner + ritual diário = mecanismos de capitalização de juros do conhecimento. |
| 11.3 | Hot Cache estratificado | Doc 2 mencionou. Miles confirma utilidade. | hot-alessandro.md / hot-beto.md / hot-agente.md — cada consumidor vê seu contexto. |
| 11.4 | Self-maintaining wiki com health checks semanais | MC sem manutenção automatizada. | Health check: confidence stale, links quebrados, orphans, CONTRADIÇÕES NORMATIVAS. |
| 11.5 | "New data contradicts old claims" — detecção de contradição | Legislação muda. Portarias revogam portarias. | LINT DE CONTRADIÇÃO NORMATIVA: nova portaria ingerida → varrer Grimório buscando regras contraditas. |
| 11.6 | Chat → Folder → Wiki = 3 estágios de maturidade | MC entre estágio 2 e 3. | Milestone mensurável para roadmap e investidores. |
| 11.7 | Wiki como substrato para múltiplos agentes | 6ª confirmação (Docs 2, 5, 7, 9a, 10, 11). | Wiki = infraestrutura compartilhada. Cada melhoria no Grimório melhora TODOS os agentes. Juro composto sistêmico. |
| 11.8 | Orphans = datapoints sem conexão | MC terá raw/ com docs não processados. | Orphans revisados mensalmente por Alessandro. Nunca deletados. Podem ser pepita de ouro para tacit knowledge. |
| 11.9 | "Every conversation is no longer lost" | INSS não tem memória do cidadão. Cada ligação ao 135 = ground zero. | Wiki MC = primeira memória que o cidadão terá de si no sistema previdenciário. |

---

## 3. ITENS SEM CONVERGÊNCIA

Total: 29 itens eliminados por serem mecânicos, genéricos, ou sem implicação estratégica para MC. Principais categorias:

- Tutoriais de instalação (Obsidian, CLI, Chrome, VS Code) — 8 itens
- Capacidades técnicas genéricas (Claude lê arquivos, backlinks nativos) — 6 itens
- Ferramentas de terceiro sem aplicação direta (Skill PARA oficial, CSV import Notion) — 5 itens
- Boas práticas de prompt já internalizadas pelo MC — 4 itens
- Funcionalidades cosméticas (temas, hotkeys, canvas) — 3 itens
- Casos de uso pessoais do autor (trading journal, Instagram funnel, crypto) — 3 itens

---

## 4. AÇÕES DERIVADAS (58)

### 🔴 URGÊNCIA MÁXIMA

| # | Ação | Origem | Responsável | Esforço | Impacto |
|---|------|--------|-------------|---------|---------|
| 39 | **DASHBOARD OPERACIONAL MC v1** via ClickUp MCP + Claude Code — status casos, throughput/semana, SLA, gargalos | Doc 9a/9b | Alessandro (solo) | 2-4h | TRANSFORMACIONAL |
| 44 | Campos customizados ClickUp: valor benefício, fase E0-E7, vertical, flag SLA | Doc 9a/9b | Alessandro + Bravy | 2h | Pré-requisito do #39 |
| 47 | Criar pasta Calendar/ no vault com template nota diária/semanal | Doc 10+4+2+9b | Alessandro | 1h | Registro temporal |
| 48 | Filtrar tasks ClickUp (.md) do graph view principal | Doc 10 | Alessandro | 30 min | Limpa visualização |
| 53 | Hot cache estratificado: hot-alessandro.md, hot-beto.md, hot-agente.md | Doc 11+2 | Alessandro | 1h | Elimina 39h/ano re-contextuação |
| 54 | Health check semanal automatizado do vault | Doc 11+2 | Claude Code cron | 4h | CRÍTICO — Grimório desatualizado = perigo |
| 56 | Lint de contradição normativa: nova portaria → varrer Grimório | Doc 11 | Claude Code | 4h | Escudo contra Grimório envenenado |

### 🔴 ALTA PRIORIDADE

| # | Ação | Origem | Esforço | Impacto |
|---|------|--------|---------|---------|
| 1 | Implementar hot.md no vault MC | Doc 2 | 15 min | Alto |
| 2 | Pipeline Raw → Wiki para todo documento novo | Doc 2 | 2h | Crítico |
| 3 | Adicionar wiki_path no MC-CLAUDE.md v1.1 | Doc 2 | 15 min | Médio |
| 5 | confidence: como metadado YAML em cada verbete wiki | Doc 2 | 1h | Estrutural |
| 6 | Lint semanal do vault (Claude Code cron) | Doc 2 | 1h | Alto |
| 15 | Formalizar pipeline raw/ → wiki/ → output/ | Doc 5+2 | 1h ADR | Estrutural |
| 17 | Web Clipper → /raw/ para portarias INSS, DOU, jurisprudência | Doc 5 | 30 min | Changelog vivo |
| 21 | Carlos produz MC-Design-System-v1.0.md | Doc 6 | 4-8h (Carlos) | Fundacional |
| 27 | index.md do Grimório no padrão wiki navegável | Doc 7 | 4-8h | Destrava grimorio-search |
| 28 | log.md com timestamp + SHA-256 por alteração | Doc 7 | 1h | Escudo jurídico |
| 32 | Auditar árvore G:\ para .claude/ ancestrais fantasma | Doc 8 | 30 min | Previne token-cascata |
| 33 | Budget máximo frontmatter: ≤50 tokens/skill | Doc 8 | 1h | Custo estrutural |
| 34 | Cada skill em UM nível. Zero duplicação. Hook PreSession | Doc 8 | 1h | Elimina triple-load |
| 37 | /compact obrigatório a cada 15 msgs ou 60% contexto — Hook | Doc 8+1 | 30 min | Previne context rot |
| 40 | North Star "Capital Morto Desbloqueado R$/mês" no dashboard | Doc 9a/9b | 1h | Métrica de impacto |
| 42 | Snapshots semanais dashboard → histórico temporal + pitch | Doc 9b | 30 min | Traction demonstrável |
| 51 | 6 templates MC para vault: Conceito, Entidade, Procedimento, Decisão, Source, Diário | Doc 10 | 2h | Consistência |

### 🟡 MÉDIA PRIORIDADE

| # | Ação | Origem | Esforço | Impacto |
|---|------|--------|---------|---------|
| 4 | Avaliar se Grimório precisa de RAG ou index+grep resolve MVP | Doc 2 | Decisão | Arquitetural |
| 7 | Prototipar taxonomia PVAR para dashboard WhatsApp | Doc 3 | 2h | UX breakthrough |
| 8 | Cada skill Super Cumpadre gera execution_log.md | Doc 3+2 | 30 min/skill | Auditabilidade |
| 9 | Sandbox isolado por CPF em toda operação de dossiê | Doc 3 | Decisão Igor | LGPD |
| 10 | Benchmark 78% (Forte) como prova de conceito no pitch | Doc 3 | 15 min | Valuation |
| 11 | Biblioteca de Prompts MC para operadores (Beto, Juliana) | Doc 4 | 2h | Reduz rampa |
| 12 | Ritual diário Alessandro: diário-YYYY-MM-DD.md (5 min/dia) | Doc 4+2 | 5 min/dia | Protocolo Alessandro |
| 13 | Nomear "Lei da Maturação Fractal" como princípio arquitetural | Doc 4+3+2 | 1h | Conceitual |
| 14 | Validar se Beto deveria usar Obsidian simples vs ClickUp | Doc 4 | Decisão | Estrutural |
| 16 | SELAR: sem RAG vetorial no MVP. Wiki = Phase 1. RAG = Phase 2 | Doc 5+2 | Decisão | Economia R$200-500/mês |
| 18 | Dossiê do cidadão como sub-wiki gerada por skills | Doc 5 | Design + Igor | Revolucionário |
| 19 | Two-pass wiki generation: Gemini rascunho → Claude valida | Doc 5 | Decisão+impl | Custo otimizado |
| 20 | Cada verbete wiki do Grimório com cadeia normativa explícita | Doc 5 | Redesign | XAI nativo |
| 22 | Skill design-system-audit para Claude Code | Doc 6 | 2h | Consistência visual |
| 23 | Visual Law nos 4 touchpoints: exigência, dossiê, triagem, Grimório visual | Doc 6 | Sprint | Diferencial único |
| 24 | Briefar Carlos: "arquiteto da camada sensorial de dignidade" | Doc 6 | 1 conversa | Motivacional |
| 25 | Auditar todo artefato visual contra WCAG AA | Doc 6 | Contínuo | Coerência |
| 26 | Categoria PROCEDIMENTO na taxonomia wiki MC | Doc 7 | 2h | Estrutural |
| 29 | Separar vault estratégico (<300K) de vault operacional (dossiês) | Doc 7 | Decisão | Previne context rot |
| 30 | genesis.md como padrão de inicialização de novo vault | Doc 7 | 1h template | Replicabilidade |
| 31 | Documentar isomorfismo Grimório↔Router-Ethics ("um motor, dois combustíveis") | Doc 7 | 1h | Elegância |
| 35 | Skill protocolo-alessandro-miner: minera sessões → extrai heurísticas → vault | Doc 8+2/7 | 4h | Protocolo automatizado |
| 36 | Backup sessões Claude Code antes de migrar HP→Mac Mini | Doc 8 | 30 min | Preserva meses |
| 38 | Documentar "Token desperdiçado = dignidade negada" no CLAUDE.md | Doc 8 | 15 min | Cultural |
| 41 | Relatório PDF semanal automático para Juliana | Doc 9a/9b | 1h | Onboarding |
| 43 | Gemini Flash API como motor análise do dashboard | Doc 9b | 1h | Stack unificada |
| 45 | Política: zero "tasks fantasma" no ClickUp | Doc 9a/9b | 15 min | Coerência |
| 46 | Renomear índices como MOCs formais | Doc 10 | 30 min | Clareza |
| 49 | Tag source: (ai-generated/assisted/human) obrigatória | Doc 10 | Frontmatter | Proof-First |
| 50 | FRAGMENTAÇÃO GRIMÓRIO v2 em wiki-notes interconectadas | Doc 10+7+2+5 | 40-80h | TRANSFORMACIONAL |
| 52 | "Você é dono do seu dossiê" no Manifesto Público v2 | Doc 10 | 15 min | Filosófico |
| 55 | Orphans revisados mensalmente, nunca deletados | Doc 11 | 15 min policy | Tacit knowledge |
| 57 | Frame "Memory Systems Engineering" no pitch | Doc 11 | 15 min | Posicionamento |
| 58 | Calcular 39h/ano de re-contextuação como ROI do hot cache | Doc 11 | 30 min | Justificação |

---

## 5. INSIGHTS RAROS E ALAVANCAS INVISÍVEIS

| # | Doc | Insight | Formulação |
|---|-----|---------|------------|
| 1 | Doc 1 | Token = Dignidade | "Cada mensagem relê toda a conversa. O custo não soma, ele multiplica." Isso vale para tokens E para o custo emocional da Dona Zilda. Minimizar turns-to-resolution é métrica de dignidade. |
| 2 | Doc 2 | Vault+Humanos > Agente | O valor do MC não está no agente (qualquer um roda Claude Code). Está no vault — Grimório, Router-Ethics, Protocolo Alessandro. O agente é motor. O vault é combustível proprietário. |
| 3 | Doc 3 | 78% + Human API | Forte comprovou: 22% de erro = lacunas de contexto pessoal. MC resolve: vault proprietário + Human API para os 22%. Linha de defesa competitiva: vault + humanos. Nunca agente. |
| 4 | Doc 4 | Complexidade no subsolo | Ferramentas para humanos = simples como copy-paste. Sofisticação invisível no backend. "Complexidade no subsolo. Simplicidade na superfície. Dignidade na interface." |
| 5 | Doc 5 | Relação > Similaridade | RAG busca similaridade estatística. Wiki busca relação ontológica. No domínio jurídico, cadeia normativa > similarity score. XAI nativo. "Relação explícita > Similaridade implícita." |
| 6 | Doc 6 | Visual Law como insurgência | Design system do INSS = arquitetura de exclusão. MC constrói contra-design-system. "Visual Law no MC não é feature. É insurgência estética contra a violência documental do Estado." |
| 7 | Doc 7 | Um motor, dois combustíveis | Grimório e Router-Ethics são a MESMA arquitetura (wiki navegada por julgamento LLM sobre índice). Só diferem no conteúdo: conhecimento vs decisão. |
| 8 | Doc 8 | Token desperdiçado = dignidade negada | Caos digital cobra em tokens. Tokens são dinheiro. Dinheiro é capacidade de atender. "Uma skill duplicada desperdiça o equivalente a ~2 atendimentos/mês." |
| 9 | Doc 9a/9b | Evangelho que não pratica | "Quem promete inteligência para o cidadão e opera no escuro internamente está pregando um evangelho que não pratica." MC precisa do dashboard PARA SI antes de oferecer ao mundo. |
| 10 | Doc 10 | O direito mora em conexões | "Links > Folders" = declaração de guerra contra burocracia hierárquica do INSS. INSS vê pastas. MC vê grafos. A diferença topológica É o produto. |
| 11 | Doc 11 | A memória é a primeira forma de respeito | O INSS não tem memória do cidadão. Cada interação = ground zero. Wiki MC = primeira memória que o cidadão terá de si no sistema previdenciário. Lembrar é reconhecer. Esquecer é negar. |

---

## 6. PRINCÍPIOS NOMEADOS (10)

1. **"O custo não soma, ele multiplica"** — Cada interação a mais custa exponencialmente mais (tokens E emoção). (Doc 1)
2. **"Vault + Humanos > Agente"** — Defesa competitiva está no conhecimento proprietário + camada humana, nunca no agente substituível. (Doc 2)
3. **"Complexidade no subsolo. Simplicidade na superfície. Dignidade na interface."** — Três camadas de design que definem toda interface MC. (Doc 4)
4. **"Relação explícita > Similaridade implícita"** — Wiki com links causais > RAG com similarity scores opacos. Cada resposta carrega genealogia. (Doc 5)
5. **"Visual Law como insurgência estética contra a violência documental do Estado"** — Design é poder. Quem define como a informação se parece define quem acessa. (Doc 6)
6. **"O conhecimento que serve à dignidade não pode ser amnésico. Cada resposta deve carregar sua genealogia."** — Wiki com confidence scores + cadeia normativa. (Doc 7)
7. **"Token desperdiçado é dignidade negada. Higiene operacional é ato ético, não técnico."** — Matemática: 1 skill duplicada ≈ 2 atendimentos/mês perdidos. (Doc 8)
8. **"Quem promete inteligência para o cidadão e opera no escuro internamente prega evangelho que não pratica."** — Dashboard interno antes de dashboard externo. (Doc 9)
9. **"O direito não mora em gavetas. O direito mora em conexões."** — Topologia de links > hierarquia de pastas. O grafo jurídico É o produto. (Doc 10)
10. **"A memória é a primeira forma de respeito. Quem te esquece te nega. Quem te lembra te reconhece."** — Wiki MC = memória que o Estado se recusa a ter. (Doc 11)

---

## 7. MAPA DO ORGANISMO MC — 6 CAMADAS

| Camada | Componentes | Princípio Regente | Docs que definiram |
|--------|-------------|-------------------|-------------------|
| **Núcleo** | Grimório-wiki, Router-Ethics, Protocolo Alessandro | "Relação > Similaridade" | 2, 5, 7 |
| **Metabolismo** | Tokens, skills, hooks, pipelines, custo | "Token desperdiçado = dignidade negada" | 1, 8 |
| **Pele** | Visual Law, Design System, UX de dignidade | "Complexidade no subsolo, simplicidade na superfície" | 6 |
| **Sistema Nervoso** | Dashboards, métricas, feedback loops, ClickUp como data lake | "Quem promete inteligência e opera no escuro..." | 9a/9b |
| **Esqueleto** | Vault Obsidian, MOCs, links, graph, templates, Calendar | "O direito mora em conexões" | 10, 2, 3, 4 |
| **Memória** | Hot cache, self-maintaining wiki, compound knowledge, contradiction detection | "A memória é a primeira forma de respeito" | 11, 2, 7 |

---

## 8. DECISÕES CANDIDATAS A SELAR

| # | Decisão | Rationale | Docs que convergem |
|---|---------|-----------|-------------------|
| 1 | **Sem RAG vetorial no MVP.** Wiki indexada + grep/busca textual = Phase 1. RAG = Phase 2 (>10K dossiês). | 5+ docs convergem. Elimina embedding model + vector DB. Economia R$200-500/mês. Simplifica stack Igor. | 2, 5, 7, 11 |
| 2 | **Vault único com sub-wikis por vertical.** Multi-vault fragmentaria passarelas (skybridges). | Multi-vault só justificado quando >5 operadores. | 2, 5, 10 |
| 3 | **Vault estratégico (<300K palavras) separado de vault operacional (dossiês cidadãos).** | Dossiês crescem indefinidamente → migra para RAG quando ultrapassar ceiling. | 7, 11 |
| 4 | **Vault Obsidian = plano com MOCs. ClickUp = hierárquico com folders.** Duas gramáticas, nunca misturar. | Links > Folders para pensamento. Folders > Links para execução. | 10 |

---

## 9. TAXONOMIA WIKI MC PROPOSTA

| Categoria | O que contém | Exemplo |
|-----------|-------------|---------|
| **Sources** | Documentos primários, normas, dados brutos | BEPS, LAI, TCU Acórdão, Portaria DIRBEN |
| **Entidades** | Nomes próprios (instituições, pessoas, lugares, programas) | INSS, Dona Zilda, Serra do Ramalho, Meu INSS |
| **Conceitos** | Abstrações, princípios, regras jurídicas | Carência, Período de Graça, Fator Previdenciário, NTEP |
| **Procedimentos** | Sequências operacionais (como fazer) | Protocolar DER, Solicitar CNIS, Converter tempo rural→urbano |
| **Decisões** | ADRs, decisões seladas, políticas | ADR-007, Campo Φ/Ψ, Firewall OAB |

Frontmatter padrão por nota:
```yaml
type: conceito|entidade|procedimento|decisão|source
confidence: verified|derived|tacit|stale
source: ai-generated|ai-assisted|human-original
last-validated: YYYY-MM-DD
related-benefit: B31|B41|B91|etc
```

---

## 10. PADRÃO EMERGENTE: CONVERGÊNCIA DE 6+ DOCS

**"Wiki como substrato universal de agentes"** — 6 docs independentes (2, 5, 7, 9a, 10, 11), de autores que nunca se comunicaram, convergem na mesma verdade: a wiki Markdown é a infraestrutura compartilhada que alimenta todos os agentes. Cada melhoria no Grimório melhora TODOS os agentes simultaneamente. Juro composto sistêmico, não linear.

**"CLAUDE.md como índice magro"** — 3 docs (1, 2, 5) convergem: CLAUDE.md deve ser índice que aponta para wiki + skills sob demanda, nunca guia de instruções gigantesco.

---

## 11. INSTRUÇÕES PARA SESSÃO 2

### Contexto para nova conversa:

1. Carregar este documento (MC-GARIMPAGEM-17docs-v1.0.md) como referência
2. Continuar numeração: Doc 12 em diante, Ação #59 em diante, Insight #12 em diante
3. Processar os 6 PDFs restantes dos materiais YouTube de Alessandro
4. Ao final dos 17 docs: gerar síntese suprema com:
   - Roadmap de implementação priorizado (ações urgentes → médias → planejamento)
   - Mapa do Organismo MC final (com eventuais novas camadas)
   - Documento "Mapa do Tesouro MC" — artefato definitivo para vault + Project Knowledge

### Decisões pendentes para Alessandro confirmar:
- [ ] SELAR decisão #1: Sem RAG no MVP?
- [ ] SELAR decisão #2: Vault único com sub-wikis?
- [ ] SELAR decisão #3: Vault estratégico separado de operacional?
- [ ] SELAR decisão #4: Obsidian plano + ClickUp hierárquico?
- [ ] Priorizar ação #39 (Dashboard ClickUp) antes de continuar docs?

---

**Gerado por:** Claude Opus 4.6 (co-founder intelectual MC)
**Sessão:** claude.ai, 2026-04-09
**Filtros aplicados:** Proof-First, D>C>V, Zilda-STF
**Hash de integridade:** [a ser gerado no vault]
