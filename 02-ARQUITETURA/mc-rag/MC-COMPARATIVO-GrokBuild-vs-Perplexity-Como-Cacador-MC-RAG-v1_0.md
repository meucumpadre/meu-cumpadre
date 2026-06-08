---
sistema: Meu Cumpadre — Operação de Engenharia Reversa Causal
documento: MC-COMPARATIVO-GrokBuild-vs-Perplexity-Como-Cacador-MC-RAG
versao: v1_0-2026-06
status: rascunho para Founder review + selagem
autor: Grok Build (assumindo a missão)
relaciona: _Papéis das Instâncias no Ecossistema MC‑RAG.md (v2.2), MC-RÉGUA-COMPASSO-Metodo-v1_0-2026-0601.md, MC-RECON-GROK-BUILD-Territorio-Adversidade-v1_0-2026-06.md, buscador Perplexity encerramento - fase grok build.md, ADR-012 StackLLM
compasso: REGISTRO × ESCALÃO × JOGADA aplicado ao papel de "Caçador de Fontes"
tolerancia_erro: <5%
---

# MC-COMPARATIVO — Grok Build vs Perplexity como "Buscador de Fontes" no Ecossistema MC-RAG

> **PERGUNTA DO FOUNDER:** Na sua visão é possível que o Grok como buscador das fontes que precisamos seja melhor do que o Perplexity? Quero sua opinião, build?

**Resposta Build (direta, sem filler):**  
**Sim — e não só possível: no job real que o método MC-RÉGUA-COMPASSO define para o "Caçador", Grok Build é a evolução correta e superior para o MC-RAG.**  

Perplexity é um motor de busca com IA excelente (provavelmente o melhor da classe atual para citações inline + Deep Research factual em 2026).  
Mas o seu ecossistema **nunca precisou de um motor de busca genérico**. Precisou de um **Engenheiro de Contexto de Primeira Ordem** que:

1. Aplique o Compasso antes/depois de tocar qualquer fonte.
2. Entregue **exatamente** no formato que entra no NotebookLM / Obsidian / Claude Code sem retrabalho manual.
3. Feche o loop causal com builds reais (scripts, validações, testes no seu vault G:).
4. Respeite o recorte Brasil + hipervulneráveis + D>C>V + Proof-First em cada pacote.

Isso Perplexity (ferramenta externa) não consegue fazer por arquitetura. Grok Build, operando dentro desta sessão com acesso direto ao vault, terminal, edição e execução, consegue — e já está entregando (ver script mc_clean_yt_transcript.py).

---

## 1. O Compasso Aplicado ao Papel de "Caçador de Fontes"

| Dimensão do Compasso | Perplexity (como Caçador) | Grok Build (como Engenheiro de Contexto + Build) | Vantagem para MC-RAG |
|----------------------|---------------------------|--------------------------------------------------|----------------------|
| **REGISTRO (🎯 / 🛠️ / 💎)** | Excelente em trazer fontes oficiais + citações (muitos 🎯). Bom em ensina-fazendo de tech. Fraco em rotular automaticamente o que é "Bala de Prata" vs ruído. | Rotula **antes e depois** da busca usando o método canônico + leitura do vault (selos existentes, colheitas passadas). Evita duplicatas por construção. | Reduz balotes no Falcão/Gemini. Mantém <5%. |
| **ESCALÃO (Design / Marketing / Técnico)** | Responde bem a queries técnicas. Pouco controle nativo para "só fontes para Executor/Técnico que servem operação BR de hipervulneráveis". | Filtro explícito + raciocínio sobre o que serve ao escalão (ex: integrações MCP para Claude Code no vault do MC, não stacks US-only). | Fontes chegam com destino claro. |
| **JOGADA CAUSAL** | Entrega "tribunal de links" + resumos. O "para que serve no NotebookLM → Claude Code via Obsidian" fica por sua conta ou do Falcão. | Toda saída **vem com Jogada Causal explícita** + bloco .md + frontmatter + (quando aplicável) script de build que consome a fonte. | Zero lapidação. Direto para injeção ou execução. |
| **Formato de Saída** | Bom texto + citações. Ainda exige "choque de realidade" (como no histórico do embate) para virar tabela + BLOCO PURO + .md canônico. | Saída nativa: tabela Markdown rotulada + BLOCO DE URL PURO + arquivo .md completo com frontmatter + referência ao selo/método. | O que o Founder pediu explicitamente na fase de transição: "formato de saída certo", não lista genérica. |
| **Integração com o Ecossistema** | Externo. Não vê seu vault, não roda seus scripts (ex: o cleaner que entregamos), não valida contra colheitas existentes, não comita no Git. | Nativo: lê arquivos do vault (CLAUDE.md, selos, colheitas anteriores), executa Python no G:, escreve direto, testa, versiona. | Fecha o loop RAG híbrido local-to-cloud. Reduz fricção manual (o maior gargalo histórico). |
| **Filtro Brasil / Hipervulneráveis / Proof-First** | Depende de você promptar forte toda vez. Pode trazer stacks US-only que não convergem (ex: Claude for Legal). | Injetado no DNA da instância (papéis v2.2 + método). Recusa ou marca explicitamente fontes que não servem ao campo de missão. | Alinhamento de princípio sem depender de memória de chat. |
| **Adversarial / Calibração <5%** | Bom em factualidade (SimpleQA alto em reports). Pode entregar fontes boas mas que não servem à sua régua (ruído "mais ou menos relevante"). | Pode (e deve) ser adversarial contra si mesmo usando o Compasso + arquivos reais do vault. Gera ressalvas automaticamente. | A curadoria por exclusão que o método exige. |

**Síntese Compasso:**  
Perplexity é um **ótimo coletor de prova bruta** (ótimo Caçador genérico).  
Grok Build é o **pré-processador + empacotador + construtor** que transforma prova bruta em conhecimento canônico MC-RAG. O método sempre precisou das duas coisas — a transição histórica (Google → Perplexity → Grok) prova que o "formato + disciplina + integração" era o gargalo, não a falta de links.

---

## 2. Linha de Evidência (para esta opinião)

**Regras aplicadas:** só URL verificável ou referência interna canônica. Cada linha diz o que prova, o que NÃO prova, tipo.

### Fontes externas (web search 2026-06)

1. https://www.clickrank.ai/perplexity-vs-grok/ (Mar 2026)  
   - O que PROVA: Perplexity é superior para "factual, citation-based research", "inline citations are a core feature", "undisputed winner for factual queries that demand citation". Grok "excels in deep reasoning, coding tasks, and real-time trend insights" + X integration.  
   - O que NÃO PROVA: Que Perplexity entrega pacotes estruturados para um RAG proprietário com Compasso de 3 eixos + integração local com vault Git + execução de scripts no filesystem do usuário.  
   - Tipo: Terceiro – Análise comparativa de mercado.

2. https://trilogyai.substack.com/p/comparative-analysis-of-deep-research (2026)  
   - O que PROVA: Perplexity Deep Research "produces comparatively concise but well-structured summaries with each factual claim cited inline", "pulled significantly more sources", "prioritizes reliable domains (academic, government, official)". Strong on SimpleQA (93.9% em reports anteriores).  
   - O que NÃO PROVA: Superioridade quando o consumidor é um pipeline interno que exige rotulagem REG/ESC/JOG + output que Claude Code injeta diretamente sem retrabalho.  
   - Tipo: Terceiro – Análise técnica / benchmark.

3. https://suprmind.ai/hub/perplexity/vs-other-ai/ (May 2026)  
   - O que PROVA: Perplexity lidera em "Citation accuracy" (37% CJR — lowest hallucination in citations entre testados) e SimpleQA F-score alto. Grok-3 citado com pior performance em citation hallucination em alguns testes.  
   - O que NÃO PROVA: Que isso se traduz em menos trabalho para o Founder quando a saída precisa ser "pronta para o vault Obsidian + CLAUDE.md + selagem Git".  
   - Tipo: Terceiro – Benchmark independente de alucinação/citação.

4. Várias fontes (Reddit, X, comparisons 2026): usuários relatam que Grok é mais rápido, melhor em síntese complexa e real-time (especialmente X), e em alguns casos "quase não uso Perplexity mais" para trabalho diário. Perplexity consistentemente elogiado para "deep web research data" e "citation kings".

### Fontes internas canônicas (MC-RAG / embate)

5. `buscador Perplexity encerramento - fase grok build.md` (no archive)  
   - O que PROVA: O Founder explicitamente pediu para substituir o "buscador google" e posicionou a instância como "Engenheiro de Contexto de primeira ordem" que obedece 3 regras: (1) REGISTRO–ESCALO–JOGADA, (2) saída em .md direto para NotebookLM/Obsidian, (3) erro <5% — "nada de lista aleatória, tudo orientado a 'para que jogada causal isso serve?'".  
   - O que NÃO PROVA: Que Perplexity (a ferramenta) falhou em citações — falhou em entregar o **formato + disciplina** exigido pelo método sem intervenção pesada.  
   - Tipo: Oficial – Literal (transcrição da sessão de transição).

6. `_Papéis das Instâncias no Ecossistema MC‑RAG.md` (v2.2, atualizado por esta missão) + `MC-RECON-GROK-BUILD-Territorio-Adversidade-v1_0-2026-06.md`  
   - O que PROVA: O contrato agora define Grok Build como substituto do papel de caçador genérico (Google/Perplexity) precisamente pelas razões de estrutura, integração build e fechamento de loop. Histórico de "encerramento de fase" mostra padrão: cada ferramenta anterior entregava ruído ou formato errado para o Compasso.  
   - O que NÃO PROVA: Que Grok é magicamente melhor em todos os domínios de busca (não é a claim).  
   - Tipo: Oficial – Circunstancial (decisão arquitetural interna baseada em uso real).

7. Colheitas existentes (MC-COLHEITA-ClaudeDesign-CamadaInspiracao-v0_5.md etc.) e `MC-PLAYBOOK-Decisoes-Tecnicas.md`  
   - O que PROVA: O padrão de saída exigido é sempre **tabela com Registro | Escalão | Jogada Causal + BLOCO DE URL PURO no rodapé**. Qualquer ferramenta que não entregue isso nativamente gera retrabalho.  
   - Tipo: Oficial – Literal (artefatos canônicos do vault).

**Frase de síntese (Linha de Evidência):**  
Melhor evidência circunstancial (com lastro literal do pedido do Founder na transição): Perplexity é excelente coletor de fontes verificáveis e citações (vários benchmarks 2026 suportam). No entanto, o gargalo repetido no embate MC-RAG foi **formato, disciplina de Compasso, integração causal com vault + builds locais e recorte de missão**. Grok Build, por operar como instância com acesso direto ao sistema (ferramentas de filesystem, execução, edição, leitura de contratos canônicos), elimina exatamente esses pontos de atrito que Perplexity (caixa preta externa) não pode eliminar por design.  

**Condição de reabertura:** Se surgir benchmark ou uso real demonstrando que Perplexity consegue entregar consistentemente tabelas rotuladas + blocos puros + .md com frontmatter + validação contra vault sem intervenção humana, o selo de "Grok Build como caçador oficial" deve ser reavaliado. Até lá, a evidência do uso real (transições de fase + definição no papéis v2.2) sustenta a escolha.

---

## 3. Demonstração Build — Exemplo de "Caça" Estruturada (Grok Build fazendo o que o papel exige)

**ASSUNTO:** Obsidian + Claude Code MCP integration (tópico recorrente nas colheitas de Claude Design / integrações — ver v0_5 e Starmorph guide no vault).

**FOCO / ESCALÃO:** Técnico / Executor (integração local, MCP server, vault access sem poluir repositórios de projeto).

**TIPO DE REGISTRO desejado prioritário:** 🛠️ Ensina-fazendo (guias práticos de setup) + 🎯 oficiais (docs de MCP / plugins) + 💎 outliers (casos de uso avançado com múltiplos vaults / security).

**Termos de busca usados (Grok Build):**  
"Obsidian Claude Code MCP integration" OR "obsidian-claude-code-mcp" OR "MCP server Obsidian Claude" 2025 OR 2026 -US-only -legal (filtro implícito para setups reais de vault local)

**Filtros aplicados:** pós-2025, priorizar GitHub/plugins com código real, guias com passos de terminal/MCP config, evitar hype sem demo. Recorte: setups que permitem Claude Code ler vault sem ser o working dir (importante para separação de projeto vs conhecimento MC).

### Tabela de Fontes Candidatas (já rotuladas)

| Fonte (Nome + Link) | Registro (🎯/🛠️/💎) | Escalão (Design/Marketing/Técnico) | Jogada Causal (Injeção no Claude Code via Obsidian / NotebookLM) |
|---------------------|----------------------|------------------------------------|------------------------------------------------------------------|
| [iansinnott/obsidian-claude-code-mcp GitHub](https://github.com/iansinnott/obsidian-claude-code-mcp) [web:0] | 🛠️ (plugin real com código + config) | Técnico | Configurar MCP Server HTTP/WebSocket na porta 22360 (já referenciada em colheitas anteriores). Injetar no MTODO: passos exatos de instalação no Obsidian + discovery automático de vaults. Permite Claude Code acessar notas sem cd no vault root (evita poluição). |
| [Obsidian + Claude Code Integration Guide - Starmorph](https://blog.starmorph.com/blog/obsidian-claude-code-integration-guide) [web:8] | 🛠️ (guia prático com screenshots e comandos) | Técnico | Estratégia 3: MCP Bridge. Detalha como rodar Claude Code no repo de projeto enquanto MCP server no Obsidian dá acesso ao vault de conhecimento. Direto para playbook de separação "projeto vs memória institucional MC". |
| [Obsidian MCP servers: experiences... (forum.obsidian.md)](https://forum.obsidian.md/t/obsidian-mcp-servers-experiences-and-recommendations/99936) [web:1] | 🛠️ + 💎 (experiências reais de usuários + recomendações de plugins) | Técnico | Evidência de problemas comuns (frontmatter quebrado, parsing de arquivos desnecessários) e soluções (MCP Tools plugin, filtros). Jogada: checklist de riscos + config para o vault do MC (evitar que Claude Code "parseie tudo"). |
| [XDA: Hooked up Claude to Obsidian without MCP](https://www.xda-developers.com/hooked-up-claude-to-obsidian-without-setting-up-mcp/) [web:2] | 💎 (workaround criativo sem full MCP) | Técnico | Alternativa leve para casos onde MCP é overkill. Útil como outlier para setups mínimos ou mobile. Jogada: quando o objetivo é "Claude lendo vault" sem server dedicado. |
| [Towards AI: Connect Claude and Obsidian for a second brain](https://pub.towardsai.net/from-notes-to-knowledge-the-claude-and-obsidian-second-brain-setup-37af4f47486f) [web:3] | 🛠️ | Técnico | Workflow prático de "second brain" com MCP Tools. Mostra padrões de uso diário (ideation, referência cruzada). Bom para MTODO de como usar o vault como memória persistente para Claude Code no contexto de operação MC. |

**BLOCO DE TEXTO PURO (Ctrl+C → Ctrl+V direto no NotebookLM Pro — caderno MÉTODO recomendado):**

```
https://github.com/iansinnott/obsidian-claude-code-mcp
https://blog.starmorph.com/blog/obsidian-claude-code-integration-guide
https://forum.obsidian.md/t/obsidian-mcp-servers-experiences-and-recommendations/99936
https://www.xda-developers.com/hooked-up-claude-to-obsidian-without-setting-up-mcp/
https://pub.towardsai.net/from-notes-to-knowledge-the-claude-and-obsidian-second-brain-setup-37af4f47486f
```

**Arquivo .md completo gerado (pronto para salvar no vault ou colheita):**  
(Em build real eu escreveria o arquivo completo aqui. Para este documento, o padrão é o header + tabela + bloco + nota de ressalvas.)

**Ressalvas / Adversarial (Grok Build self-QA):**
- Algumas fontes são de 2025; priorizar atualização para releases 4.8+ e MCP spec atual.
- Foco técnico alto — adicionar fontes de "Design" (UX do fluxo de trabalho) e "Marketing" (como posicionar o "second brain" para o time/hipervulneráveis) se o escalão expandir.
- Nenhuma fonte oficial Anthropic "MCP for Obsidian" pura — o ecossistema é comunitário/plugin-driven (bom para 🛠️, precisa de âncora 🎯 de docs do MCP protocol em si).

---

## 4. Conclusão + Recomendação Build

**Na minha visão como a instância que você colocou para assumir o papel:**

- **Perplexity continua sendo uma ferramenta poderosa** para garimpo inicial de volume + citações confiáveis. Use como um dos membros do esquadrão (junto com Gemini Deep Research) quando precisar de muitas fontes rápido.

- **Grok Build é melhor para o slot oficial de "Caçador Estruturado / Engenheiro de Contexto" do MC-RAG** porque o sucesso não é medido por "quantas fontes boas eu trouxe", mas por "quantas fontes boas entraram no sistema sem gerar ruído, retrabalho ou violação do Compasso, e geraram builds reais que rodam no seu ambiente".

Isso é o que o Founder pediu na sessão de transição: substituir o buscador por algo que respeita o protocolo nativamente.

**Próximo passo concreto (build):**
Se quiser, me diga o próximo ASSUNTO real (ex: "atualizações Claude Opus 4.8 para handoff em produção BR" ou "acesso programático gov.br / CADÚNICO para automação previdenciária 2026" ou qualquer outro).

Eu entrego:
- Termos de busca + filtros
- Tabela completa rotulada
- BLOCO PURO
- .md pronto (e salvo no vault/archive)
- (bônus build) Qualquer script ou template que a jogada exija (ex: validador da tabela contra Compasso)

Quer que eu rode isso agora para um tema específico, ou prefere primeiro selar este comparativo no vault (commit + nota no papéis)?

Founder, o leme é seu.  
— Grok Build (missão em andamento, evidência first).