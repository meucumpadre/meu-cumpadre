---
tipo: playbook-engenharia-reversa
nome: MC-Playbook · Prompt Deep Research & Engenharia Reversa (caderno MÉTODO)
versao: v1.0
status: PROVISIONAL
data: 2026-06-01
origem: pesquisa Perplexity conduzida pelo Founder Alessandro (5 âncoras YouTube 2024-2026 + prompt-stack de 7 prompts)
relaciona: "Princípio #46 (Motor Externo · Lapidação Interna) · MC-Squad lab · NotebookLM · caderno Claude Design (ASSUNTO) · playbook Claude Design (estratégia)"
audiencia: L1-L2 (founder · cofounder)
proof-first: cada âncora com URL + data; views/duração a conferir no YouTube; [web:NN] = citações da consulta Perplexity
nota: "Caderno do MÉTODO (como fazer deep research / engenharia reversa). Complementar ao caderno do ASSUNTO (Claude Design)."
---


# MC-PLAYBOOK — Fontes YouTube para Prompt Deep Research (Atualizado 06/2026)

Este caderno define 5 fontes globais âncora em 2024–2026 para montar estratégia de **prompt deep research** e **engenharia reversa com NotebookLM/Deep Research**, focadas em agentes, orquestração e produto real.

---

## 1. Full AI Prompting Course with Andrew Ng (2026)

- **Título**: Full AI Prompting Course with Andrew Ng  
- **URL**: https://www.youtube.com/watch?v=8ib4Qnh2HFE  
- **Ano / contexto**: 05/2026, curso completo para virar “AI power user” com foco em prompting avançado, neutral prompting, rubricas de avaliação, deep research e construção de apps com LLM.[web:31][web:37]  
- **Por que é âncora MC**: trata prompting como **engenharia de projeto** (objetivo → pesquisa → instruções → teste), mostra como usar deep research para travar o modelo em fontes aprovadas antes de gerar código, e explicita o papel do humano como diretor.[web:37]  

**Uso recomendado no NotebookLM**  
1. Adicionar o vídeo como fonte YouTube.  
2. Criar um notebook "P1-Fundamentos-Prompting-Ng" só com esse curso e, se quiser, o masterclass "AI For Everyone" como visão de estratégia de IA na empresa.  
3. Rodar prompts de engenharia reversa para extrair: fases do fluxo (definir objetivo, pesquisar, instruir, testar, implantar), padrões de prompt e critérios de qualidade.

---

## 2. Prompt Engineering Full Course 2026 (Simplilearn)

- **Título**: Prompt Engineering Full Course 2026 | Generative AI  
- **URL**: https://www.youtube.com/watch?v=0NrZYT2VRJc  
- **Ano / contexto**: 12/2025, curso longo que cobre fundamentos de prompt engineering, RAG vs fine‑tuning vs prompt tuning, context engineering, multimodal e criação de apps/agents.[web:22][web:39][web:44][web:45]  
- **Por que é âncora MC**: funciona como "grade curricular industrial" de prompting, com tópicos de mercado de trabalho, monetização e uso prático de ferramentas (Claude, Gemini, ChatGPT, Copilot), ideal para engenharia reversa de **currículo e trilhas de habilidade**.[web:22]  

**Uso recomendado no NotebookLM**  
1. Criar notebook "P1-Curriculo-Prompting-Simplilearn" com esse full course e, se quiser, o "Generative AI Full Course 2026" da mesma escola.  
2. Pedir ao llmcode para mapear todos os módulos, habilidades treinadas e exemplos em tabela (Módulo / Objetivo / Técnica de Prompt / Ferramentas citadas).  
3. Usar essa tabela como base para desenhar o **roadmap interno** de treinamento de prompts do Meu Cumpadre.

---

## 3. Prompt Engineering para AI Agents (2025–2026)

- **Título**: Prompt Engineering for AI Agents (2026 Masterclass for Beginners)  
- **URL**: https://www.youtube.com/watch?v=7hAGBuRrqDk  
- **Complemento**: vídeos e talks sobre "10 Fundamentals for Creating Real Prompts (Agent + RAG + Tools)" (https://www.youtube.com/watch?v=-HJWoaJnsnA&vl=pt-BR).  
- **Ano / contexto**: 11/2025–01/2026, foco em arquitetura de prompts para agentes com ferramentas, RAG e fluxos multi‑etapa.[web:40][web:46]  
- **Por que é âncora MC**: traduz prompt engineering em **padrões de agente** (planner, executor, crítico, roteador), muito alinhado ao teu llmcode e à orquestração multi‑modelo/agents do Meu Cumpadre.[web:40][web:46][cite:5]  

**Uso recomendado no NotebookLM**  
1. Notebook "P5-Agents-Prompts" com essa masterclass + vídeos do mesmo canal sobre agents/RAG.  
2. Prompts para extrair catálogo de padrões: roles, estrutura de prompt (instruções + memória + ferramentas + formato de saída), protocolos de coordenação.  
3. A partir do catálogo, derivar metaprompts padrão para: agente pesquisador, agente de código (Claude Code / llmcode), agente revisor PROOF-FIRST.

---

## 4. Prompt Engineering 2.0 (2026 Edition) + Crítica 2025

- **Título**: Prompt Engineering 2.0 Course ( 2026 Edition )  
- **URL**: https://www.youtube.com/watch?v=MYeBSy5eHBk  
- **Complemento crítico**: "AI prompt engineering in 2025: What works and what doesn't" (https://www.youtube.com/watch?v=eKuFqQKYRrA).  
- **Ano / contexto**: 01/2026 (curso 2.0) e 06/2025 (talk crítica), tratando explicitamente da evolução das técnicas (o que morreu, o que ainda funciona, o que virou anti‑padrão).[web:42][web:35]  
- **Por que é âncora MC**: serve de base para teu **pilar P8 (limites & crítica honesta)**, ajudando a documentar técnicas que já não entregam (spaghetti prompt, “act as a…” vazio) e princípios que ainda são fortes (iteração, avaliação, estruturação).[web:35][web:42][cite:17]  

**Uso recomendado no NotebookLM**  
1. Notebook "P8-Limites-Critica" com o curso 2.0 + talk crítica.  
2. Prompt para construir tabela "Técnica / Funciona / Não funciona / Motivo / Risco": isso vira checklist antes de qualquer novo metaprompt ser adotado.  
3. Destacar explicitamente o que deve ser **proibido** nos prompts internos do MC (por exemplo: prompts sem requisito de fonte, sem rubrica de avaliação, etc.).

---

## 5. Engenharia reversa de canais YouTube com NotebookLM (2026)

- **Título**: Clone ANY YouTube Channel With NotebookLM AI Hack 2026  
- **URL**: https://www.youtube.com/watch?v=61YpQYl3z3Y  
- **Complementos práticos**:  
  - Episódio "How to Reverse-Engineer Any YouTube Channel in 10 Minutes" (podcast / descrição de workflow NotebookLM): https://rss.com/podcasts/ai-fire-daily/2457250/  
  - Post Reddit com pipeline em 5 passos + prompts de engenharia reversa: https://www.reddit.com/r/PromptEngineering/comments/1s4pimt/i_built_a_5minute_youtube_automation_pipeline/  
  - Extensão "YouTube to NotebookLM" (Chrome): https://chromewebstore.google.com/detail/youtube-to-notebooklm/kobncfkmjelbefaoohoblamnbackjggk  
- **Ano / contexto**: 01–03/2026, tudo focado em usar NotebookLM como máquina de análise de canais (bulk transcripts, extração de padrões, geração de scripts e vídeos).[web:47][web:38][web:27][web:43]  
- **Por que é âncora MC**: é literalmente a prova de conceito do que você quer: usar NotebookLM/Deep Research para engenharia reversa sistemática (hooks, formatos, temas, tom) e transformar isso em pipeline de produção — aqui você só troca "YouTube growth" por "prompt deep research / Claude Design".[web:38][web:27][web:47]  

**Uso recomendado no NotebookLM**  
1. Notebook "P3-NotebookLM-EngenhariaReversa" com o vídeo, o episódio e o post do Reddit.  
2. Pedir ao llmcode para decompor o workflow em etapas genéricas (coleta, ingestão, prompts, síntese, aplicação) e gerar um **pipeline adaptado** para análise de fontes de prompting e documentação técnica, não só canais.  
3. Usar a extensão "YouTube to NotebookLM" para importar playlists/canais que surgirem do teu filtro de 300 fontes, mantendo coerência com o pipeline.[web:43]

---

## Prompt-stack sugerido para o llmcode (NotebookLM / Deep Research)

A seguir, uma sequência de prompts em português para você rodar no llmcode dentro do NotebookLM ou Deep Research, usando estas 5 âncoras como base.

### Prompt 1 — Metamodelo de "Prompt Deep Research"

> Contexto: você tem as transcrições e descrições dos vídeos:  
> – Full AI Prompting Course with Andrew Ng (2026)  
> – Prompt Engineering Full Course 2026 (Simplilearn)  
> – Prompt Engineering 2.0 Course (2026 Edition)  
> – Prompt Engineering para AI Agents (masterclass)  
> – Clone ANY YouTube Channel With NotebookLM AI Hack 2026 + episódio + post Reddit.  
>  
> Atue como **arquiteto de sistemas de pesquisa com LLMs**.  
> Tarefa: faça **engenharia reversa** do metamodelo de "prompt deep research" que está implícito nessas fontes.  
>  
> Entregue:  
> 1. Lista de **FASES** (por exemplo: definir objetivo, mapear fontes, arquitetar prompts, iterar, avaliar, implantar).  
> 2. Para cada fase, quais **tipos de prompts** aparecem (metaprompt, checklist, crítica, agente, etc.).  
> 3. Quais **indicadores de qualidade** são sugeridos (precisão, cobertura de fontes, custo, latência, risco de alucinação).  
> 4. Diferenças claras de abordagem entre Andrew Ng, Simplilearn, cursos 2.0, masterclass de agents e workflow NotebookLM.  
>  
> Regra PROOF-FIRST: para cada afirmação, cite a fonte concreta (título do vídeo + timestamp aproximado ou trecho da transcrição). Se não houver evidência direta, marque como **inferência** e explique.

---

### Prompt 2 — Currículo de Prompting a partir de Ng + Simplilearn

> Contexto: notebook com transcrições do curso de Andrew Ng e dos full courses de Prompt Engineering 2025/2026.  
>  
> Atue como **designer instrucional**.  
> Tarefa: desenhar um **currículo unificado** de prompting para o Meu Cumpadre a partir desses cursos.  
>  
> Entregue uma **tabela** com colunas:  
> – Módulo (nome inferido)  
> – Objetivo de aprendizagem  
> – Habilidades de prompting  
> – Tipo de exercício ou exemplo usado  
> – Fonte (Ng, Simplilearn, ambos).  
>  
> Regra PROOF-FIRST: cada linha deve ter, pelo menos, uma referência a trecho específico de vídeo; diferencie claramente o que é transcrição literal do que é síntese.

---

### Prompt 3 — Catálogo de padrões de prompts para Agents

> Contexto: masterclass "Prompt Engineering for AI Agents", vídeo "10 Fundamentals for Creating Real Prompts" e quaisquer vídeos relacionados do mesmo canal.  
>  
> Atue como **engenheiro de agentes LLM**.  
> Tarefa: construir um catálogo de padrões de prompt específicos para **agents com ferramentas/RAG**.  
>  
> Entregue:  
> 1. Padrões de **role** (planner, executor, crítico, roteador, guardião de segurança etc.).  
> 2. Padrões de **estrutura** (blocos obrigatórios: contexto, objetivo, restrições, ferramentas, formato de output).  
> 3. Padrões de **coordenação** entre agentes (quem chama quem, em qual condição).  
> 4. Recomendações explícitas sobre o que **não fazer** com prompts de agents.  
>  
> Regra PROOF-FIRST: associe cada padrão e anti‑padrão a exemplos concretos da masterclass.

---

### Prompt 4 — Quadro "Funciona / Não funciona" em 2025–2026

> Contexto: curso "Prompt Engineering 2.0 (2026 Edition)" + vídeo "AI prompt engineering in 2025: What works and what doesn't".  
>  
> Atue como **auditor de métodos de prompting**.  
> Tarefa: montar um quadro de técnicas que **funcionam** e que **não funcionam mais / são arriscadas** em 2025–2026.  
>  
> Entregue uma tabela com colunas:  
> – Técnica  
> – Julgamento (Funciona / Não funciona / Depende)  
> – Motivo  
> – Evidência (trecho dos vídeos)  
> – Implicação prática para o Meu Cumpadre / Claude Design.  
>  
> Regra PROOF-FIRST: não invente técnicas que não apareçam nas fontes; se faltar dado, sinalize como tal.

---

### Prompt 5 — Pipeline NotebookLM + YouTube para Engenharia Reversa

> Contexto: vídeo "Clone ANY YouTube Channel With NotebookLM AI Hack 2026", episódio de podcast e post do Reddit com pipeline em 5 passos.  
>  
> Atue como **arquiteto de workflow NotebookLM**.  
> Tarefa: transformar o método descrito nesses materiais em um **pipeline genérico de engenharia reversa** de conteúdo, não só de canais.  
>  
> Entregue:  
> 1. Diagrama textual de etapas (coleta, ingestão, prompts, síntese, aplicação).  
> 2. Lista de prompts‑modelo usados em cada etapa, generalizados para análise de **fontes de prompting / docs técnicos**.  
> 3. Riscos e limites do pipeline, com mitigação sugerida (ex.: viés de seleção, cortes de contexto, dependência de extensões).  
> 4. Versão adaptada explicitamente para o caderno "MC-PLAYBOOK-EngenhariaReversa-PromptDeepResearch".  

---

### Prompt 6 — Plano de 300 fontes (Mapa MC)

> Contexto: resultados sintetizados dos Prompts 1–5.  
>  
> Atue como **estrategista de pesquisa do Meu Cumpadre**.  
> Tarefa: propor um plano de expansão para chegar a **300 fontes** no caderno, distribuídas em pilares e subtemas.  
>  
> Entregue:  
> 1. Lista de **pilares** (Fundamentos, Currículo, Agents, Deep Research/NotebookLM, Limites & Crítica, Casos etc.).  
> 2. Para cada pilar, subtemas e tipos de fonte desejada (curso longo, talk crítica, tutorial, case).  
> 3. Para cada subtema, **brief de busca YouTube** (palavras‑chave em inglês, filtros de data >= 2024, duração >= 20min, ordenação por relevância/views).  
> 4. Regras gerais de aceitação/recusa de fonte (por exemplo: sem data ou autor claro = descarta).  

---

### Prompt 7 — Adaptação para Playbook MC / Claude Design

> Contexto: todo o caderno + tua arquitetura MC (PROOF-FIRST, engenharia reversa, Claude Design em 8 pilares).  
>  
> Atue como **arquiteto de prompts do Meu Cumpadre**.  
> Tarefa: adaptar o metamodelo de prompting/deep research extraído das fontes em um **playbook operacional** para Claude Design e NotebookLM dentro da operação MC.  
>  
> Entregue:  
> 1. Princípios orientadores (2–3 páginas) em linguagem Dona Zilda / investidor / OAB.  
> 2. 5–10 metaprompts base (pesquisa jurídica, produto, UX, agents, stress‑test de tese).  
> 3. Checklist de governança PROOF-FIRST (obrigações, proibições, como registrar fontes e URLs).  

---

## Referências base da consulta (escopo web)

- Full AI Prompting Course with Andrew Ng (2026): https://www.youtube.com/watch?v=8ib4Qnh2HFE [web:31]  
- Prompt Engineering Full Course 2026 | Simplilearn: https://www.youtube.com/watch?v=0NrZYT2VRJc [web:44]  
- Generative AI Full Course 2026 (Simplilearn, complemento): https://www.youtube.com/watch?v=mnkiYN6qikw [web:39]  
- Prompt Engineering for AI Agents (2026 Masterclass for Beginners): https://www.youtube.com/watch?v=7hAGBuRrqDk [web:40]  
- 10 Fundamentals for Creating Real Prompts (Agent + RAG + Tools): https://www.youtube.com/watch?v=-HJWoaJnsnA&vl=pt-BR [web:46]  
- Prompt Engineering 2.0 Course ( 2026 Edition ): https://www.youtube.com/watch?v=MYeBSy5eHBk [web:42]  
- AI prompt engineering in 2025: What works and what doesn't: https://www.youtube.com/watch?v=eKuFqQKYRrA [web:35]  
- Clone ANY YouTube Channel With NotebookLM AI Hack 2026: https://www.youtube.com/watch?v=61YpQYl3z3Y [web:47]  
- How to Reverse-Engineer Any YouTube Channel in 10 Minutes (podcast): https://rss.com/podcasts/ai-fire-daily/2457250/ [web:38]  
- I built a 5-minute YouTube automation pipeline using Google NotebookLM (Reddit): https://www.reddit.com/r/PromptEngineering/comments/1s4pimt/i_built_a_5minute_youtube_automation_pipeline/ [web:27]  
- YouTube to NotebookLM — Chrome extension: https://chromewebstore.google.com/detail/youtube-to-notebooklm/kobncfkmjelbefaoohoblamnbackjggk [web:43]  
- Lista de canais/sugestões globais de prompt engineering e AI agents em 2025: https://www.analyticsinsight.net/tech-news/top-youtube-channels-to-learn-prompt-engineering-in-2025 [web:23]  

