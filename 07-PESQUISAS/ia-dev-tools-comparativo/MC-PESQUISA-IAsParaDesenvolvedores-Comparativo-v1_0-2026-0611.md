# MC-PESQUISA — IAs para Desenvolvedores: Comparativo Profundo (Substrato de Decisão de Stack)

> **Tipo:** Pesquisa externa (deep research) · **Versão:** v1.0 · **Data:** 2026-06-11
> **Zona:** 🧠 Cérebro 1 (mesa de trabalho) · **Rito:** R1 (operacional — substrato, não decisão)
> **Status:** NÃO SELADO — insumo para deliberação de stack/orquestração/arquitetura/integrações
> **Solicitante:** Founder (Alessandro) · **Executor:** Code TALÃO via workflow deep-research
> **Gatilho:** Artigo TechTudo jun/2026 "Melhor IA para desenvolvedores" ([FONTE INACESSÍVEL — ver §0])

---

## Metodologia (Proof-First)

Workflow **deep-research** em 4 fases, executado em 11/06/2026:

1. **Scope** — questão decomposta em 5 ângulos: (a) assistentes/agentes de código; (b) benchmarks de qualidade de código; (c) LLMs via API para produção; (d) orquestração MCP/N8N/multi-agente; (e) privacidade/LGPD/residência de dados.
2. **Search** — 5 agentes de busca paralelos, ~45 buscas web (EN+PT-BR), exigência de claim falsificável + URL + data + grau de confiança.
3. **Verify** — 3 agentes verificadores adversariais re-testaram os **17 claims mais decisivos** contra fontes primárias. Resultado: 16 confirmados (3 com correção de precisão), **1 refutado** (H100 em São Paulo — ver §6.1).
4. **Synthesize** — este documento. Claims que sobreviveram à verificação estão marcados ✅; vendor-only sem reprodução independente, ⚠️; refutados, ❌; lacunas, `[FONTE PENDENTE]`.

**Limitações declaradas:** (i) diversas páginas oficiais (TechTudo, anthropic.com/news, openai.com, ai.google.dev, docs.cloud.google.com, devin.ai) bloquearam fetch direto por agentes (HTTP 403) — claims correspondentes foram lastreados por conteúdo indexado + corroboração múltipla e tiveram confiança rebaixada onde aplicável; (ii) números de benchmark pós-jan/2026 vêm exclusivamente das buscas desta sessão; (iii) **nenhum número deste documento deve ir a artefato selado sem conferência manual do link primário.**

---

## §0 · O artigo TechTudo (ponto de partida)

- A URL exata fornecida (jun/2026, série "edsoftwares") retornou **HTTP 403** em todas as tentativas (AMP e não-AMP). Conteúdo integral e veredito do especialista: `[FONTE PENDENTE — requer leitura manual pelo Founder]`.
- Artigo correlato localizado: *"Qual é a melhor IA para programação? Especialista aponta 7 destaques de 2026"* (TechTudo, mar/2026, mesma série). Pelo indexado: compara GitHub Copilot (maior base instalada, fricção quase zero no ecossistema GitHub), Cursor (projetos de média/alta complexidade, dependente de modelos de terceiros), Amazon Q (cloud-native AWS) e agentes CLI open-source. Tese central: **"IA substitui tarefas, não profissões"**. Confiança: média (snippet de busca).
- **Avaliação crítica:** o comparativo TechTudo é jornalismo de divulgação — útil como mapa de nomes, insuficiente como substrato de decisão. As seções seguintes vão à evidência primária.

---

## §1 · Assistentes/Agentes de código (estado jun/2026)

### 1.1 Quadro consolidado

| Ferramenta | Preço de entrada (jun/2026) | Modelo de negócio | Nota verificada |
|---|---|---|---|
| **Claude Code** (Anthropic) | US$ 20/mês (Pro) · Max 5x US$ 100 · Max 20x US$ 200 · ou API por token | Assinatura ou token | ✅ [claude.com/pricing](https://claude.com/pricing) |
| **GitHub Copilot** | Pro US$ 10 · Pro+ US$ 39 · Business US$ 19/user | **Mudou em 01/06/2026**: billing por uso ("GitHub AI Credits", 1 crédito = US$ 0,01); completions seguem sem consumir créditos | ✅ [GitHub Blog](https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/) |
| **Cursor** (Anysphere) | Hobby US$ 0 · Pro US$ 20 · Pro+ US$ 60 · Ultra US$ 200 · Teams US$ 40 (Standard) / US$ 120 (Premium, novo jun/2026) | Assinatura; modelo próprio **Composer 2.5** + modelos de terceiros | ✅ [cursor.com/pricing](https://cursor.com/pricing) |
| **OpenAI Codex** | Incluso em Plus/Pro; desde 02/04/2026 billing alinhado a tokens de API | GPT-5.1-Codex-Max: treinado para tarefas longas via "compaction" | ✅/⚠️ [openai.com](https://openai.com/index/gpt-5-1-codex-max/) |
| **Google Antigravity** | Substitui Gemini Code Assist/CLI individuais **em 18/06/2026** (corporativo Standard/Enterprise continua) | Antigravity 2.0 lançado no I/O 2026 (19/05/2026): app standalone + CLI + SDK | ✅ [Google Dev Blog](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/) · [TechCrunch](https://techcrunch.com/2026/05/19/google-launches-antigravity-2-0-with-an-updated-desktop-app-and-cli-tool-at-io-2026/) |
| **Devin** (Cognition) | Core ~US$ 20 pay-as-you-go (ACU US$ 2,25) · Team US$ 500/mês | Abandonou preço único US$ 500 em abr/2025 | ✅ [TechCrunch](https://techcrunch.com/2025/04/03/devin-the-viral-coding-ai-agent-gets-a-new-pay-as-you-go-plan/) |
| **Open-source** (Aider, Cline, Roo Code, OpenCode, Kilo Code) | Harness grátis; paga-se só o token do modelo (BYOM) | Claude Code, Codex, Devin e Amazon Q **não** suportam BYOM | ⚠️ blogs comparativos convergentes |

### 1.2 Consolidação do mercado (2025-2026) — fatos verificados

- ✅ **Windsurf desmontada em jul/2025**: Google levou CEO Varun Mohan + líderes por ~US$ 2,4 bi (licenciamento+compensação); dias depois (14/07/2025) a **Cognition** (Devin) adquiriu IP, marca e equipe remanescente (~US$ 250M estimados). Cognition avaliada em US$ 10,2 bi (set/2025). Fontes: [CNBC](https://www.cnbc.com/2025/07/14/cognition-to-buy-ai-startup-windsurf-days-after-google-poached-ceo.html) · [TechCrunch](https://techcrunch.com/2025/07/14/cognition-maker-of-the-ai-coding-agent-devin-acquires-windsurf/).
- ✅ **Google consolida tudo no Antigravity** (Gemini Code Assist e Gemini CLI individuais morrem 18/06/2026 — **daqui a 7 dias**).
- ⚠️ Cursor: ~US$ 1 bi ARR (nov/2025), valuation ~US$ 30 bi (Fortune, mar/2026), com tese pública de "futuro incerto" pela dependência de modelos Anthropic/OpenAI — risco de plataforma de quem constrói sobre wrapper.
- ⚠️ Sentimento de devs (Reddit/HN, amostras auto-selecionadas — termômetro, não estatística): Codex vence em volume de menções e eficiência de tokens; Claude Code vence em qualidade percebida de código (~67% em revisões cegas), UI/frontend e ecossistema MCP; queixa nº 1 contra Claude Code = rate limits. Fonte: [DEV Community](https://dev.to/_46ea277e677b888e0cd13/claude-code-vs-codex-2026-what-500-reddit-developers-really-think-31pb).
- ✅ **Padrão dominante: combinar ferramentas** (IDE assistant + agente de terminal), não escolher uma só — convergência de 3+ fontes independentes.

---

## §2 · Benchmarks: o que a evidência realmente sustenta

### 2.1 A crise do SWE-bench Verified (achado central)

- ✅ **A OpenAI abandonou o SWE-bench Verified em ~23/02/2026** ([post oficial](https://openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/)): auditoria achou **59,4% de testes falhos** nos 138 problemas em que o o3 falhava; modelos frontier reproduzem gold patches *verbatim* só com o task ID (contaminação de treino). Recomendação: migrar para SWE-bench Pro.
- **Consequência Proof-First:** scores de 88-95% em Verified (2026) **não são comparáveis** aos 70-80% de 2025 e devem ser tratados como inflados por contaminação. Qualquer citação de SWE-bench Verified em material MC deve trazer esta ressalva.

### 2.2 O "scaffold gap" (corrigido pela verificação adversarial)

- ✅ Fenômeno real: o mesmo benchmark dá resultados muito diferentes conforme o harness. SWE-bench Pro: ~80,3% (Claude Fable 5, scaffold da Anthropic) vs 51,9% (melhor Claude no leaderboard padronizado [Scale SEAL](https://labs.scale.com/leaderboard/swe_bench_pro_public) — Opus 4.6 thinking).
- ❗ **Correção da verificação:** comparação *same-model* documentada dá gap de **~9,5 a ~17 pontos** (Opus 4.5: 45,9% SEAL vs 55,4% Claude Code, [arXiv 2605.23950](https://arxiv.org/html/2605.23950v1)); a faixa "20-28 pontos" circula em agregadores mas mistura modelos diferentes. **Regra prática: sempre perguntar *qual harness?* e descontar ~10-17 pontos de claims em scaffold próprio do vendor.**

### 2.3 Fotografia jun/2026 (com grau de confiança)

| Sinal | Valor | Confiança |
|---|---|---|
| Claude Opus 4.5 = 1º modelo >80% SWE-bench Verified (80,9%, 24/11/2025; GPT-5.1 76,3%, Gemini 3 Pro 76,2%) | ✅ verificado | Alta (anúncio + corroboração) — mas benchmark hoje desacreditado (§2.1) |
| LMArena Code (24/05/2026): claude-opus-4-7-thinking lidera (Elo 1567, 328k votos) | ✅ | Alta (leaderboard independente; mede *preferência*, não correção) |
| Artificial Analysis Coding Index (jun/2026): Claude Fable 5 lidera (62/100) | ✅ | Alta (reprodução independente padronizada) |
| Claude Fable 5/Mythos 5 (lançados 09/06/2026): SWE-bench Pro 80,3%, Terminal-Bench 2.1 88,0% — scaffold próprio | ⚠️ | Média (vendor; 2 dias de mercado, sem reprodução independente) |
| GPT-5.5 (23/04/2026): Terminal-Bench 2.0 82,7%, SWE-bench Pro 58,6% (consistente com SEAL) | ⚠️ | Média-alta |
| Gemini 3.1 Pro (19/02/2026): "lidera 13 de 16 benchmarks" — escolhidos pelo Google | ⚠️ | Média (seleção favorável documentada por análise independente) |
| Open-weights: DeepSeek V4 e Qwen3.7 Max na faixa ~80% Verified | ⚠️ | Baixa-média |
| HumanEval: morto como discriminador (saturado desde 2024) | ✅ | Alta (consenso) |

**Hierarquia de valor probatório para decisões MC:** 1º Scale SEAL · 2º Artificial Analysis · 3º LMArena · por último, claims de vendor em scaffold próprio.

---

## §3 · LLMs via API para produção (custos verificados)

### 3.1 Preços (USD/MTok input/output, jun/2026)

| Modelo | Preço | Confiança |
|---|---|---|
| Claude Fable 5 | $10/$50 | ✅ Alta — [página oficial acessada na íntegra 11/06/2026](https://platform.claude.com/docs/en/about-claude/pricing) |
| Claude Opus 4.8/4.7/4.6/4.5 | $5/$25 | ✅ Alta (idem) |
| Claude Sonnet 4.6/4.5 | $3/$15 | ✅ Alta (idem) |
| Claude Haiku 4.5 | $1/$5 (batch $0,50/$2,50) | ✅ Alta (idem) |
| GPT-5.1 | $1,25/$10 (cache $0,125) · 400k ctx | ✅ Alta (convergência múltipla) |
| GPT-5.5 | ~$5/$30 | ⚠️ Média |
| Gemini 2.5 Flash | $0,30/$2,50 | ✅ Alta |
| Gemini 2.5 Pro | $1,25/$10 (≤200k) | ✅ Alta |
| Gemini 3 Pro | ~$2/$12 (≤200k) | ⚠️ Média |
| Gemini 3.5 Flash | ~$1,50/$9 — **~3× o Flash que substitui** | ⚠️ Média ("fim da IA barata") |
| Llama 4 Scout via Groq | $0,11/$0,34 | ✅ Alta ([Groq oficial](https://groq.com/blog/llama-4-now-live-on-groq-build-fast-at-the-lowest-cost-without-compromise)) |

Mecânicas relevantes (✅ fonte oficial Anthropic): cache read = 0,1× input · Batch −50% · contexto 1M tokens sem sobretaxa (Fable 5, Opus 4.8-4.6, Sonnet 4.6) · endpoints regionais Bedrock/Vertex = **+10%** sobre o global · tokenizer Opus 4.7+ pode consumir até **35% mais tokens** pelo mesmo texto (afeta comparações de custo).

### 3.2 Self-hosting Llama 4 Scout — ordem de grandeza

- ⚠️ Scout (109B MoE, 17B ativos): INT4 ≈ 55 GB VRAM → 1× H100 80GB (ctx ~32k); FP16 ≈ 218 GB → 4× H100. Confiança média.
- ⚠️ GCP on-demand: a3-highgpu-1g (1× H100) ≈ **US$ 8.000/mês** lista. Piso de self-host viável: ~US$ 8-16k/mês antes de descontos.
- **Comparação brutal:** para o volume do piloto N=150, o self-host custa ordens de magnitude mais que API gerenciada (Groq cobraria centavos/mês no mesmo volume). A única justificativa do self-host é **soberania de dados/LGPD** — e ela esbarra no achado §6.1.

---

## §4 · Orquestração e integrações

- ✅ **MCP virou padrão de indústria com governança neutra**: doado pela Anthropic à Linux Foundation em **09/12/2025**, criando a **Agentic AI Foundation (AAIF)** — cofundadores Anthropic (MCP), OpenAI (AGENTS.md) e Block (goose); apoio Google, Microsoft, AWS, Cloudflare. Adotado por ChatGPT, Gemini, Copilot. Menor risco de lock-in da camada de integração. Fontes: [Linux Foundation](https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation) · [TechCrunch](https://techcrunch.com/2025/12/09/openai-anthropic-and-block-join-new-linux-foundation-effort-to-standardize-the-ai-agent-era/).
- ✅ **Segurança MCP é o risco nº 1 da camada**: tool poisoning tem CVE público (CVE-2025-54136); benchmark MCPTox mostrou maioria de 20 agentes vulneráveis a servers maliciosos; incidente real Supabase/Cursor (jun/2025). **Conecta-se diretamente ao ADR-016 (Anti-Injection)**: tool descriptions de servers MCP de terceiros são vetor de injeção. Fontes: [arXiv 2603.22489](https://arxiv.org/abs/2603.22489) · [TrueFoundry](https://www.truefoundry.com/blog/blog-mcp-tool-poisoning-gateway-defense).
- ✅ **N8N**: nodes MCP nativos (Server Trigger + Client Tool) **desde a v1.88** — exatamente a versão do MC; **n8n 2.0 stable saiu em 15/12/2025** ([blog oficial](https://blog.n8n.io/introducing-n8n-2-0/)). O MC está várias versões atrás; upgrade a avaliar (AI Agent node, 70+ nodes de IA). Licença fair-code: self-host irrestrito para uso próprio.
- ❌→corrigido: claim circulante em blog PT-BR de que "MCP garante processamento local de PII" é **tecnicamente falso** — MCP é protocolo de transporte; o conteúdo vai ao LLM onde quer que ele rode. A salvaguarda LGPD real é o **roteamento por sensibilidade**, não o protocolo.
- ✅ **Padrões de arquitetura**: orchestrator-workers é o padrão canônico ([Anthropic, Building Effective Agents](https://www.anthropic.com/research/building-effective-agents)); multi-agente da Anthropic reportou +90,2% qualidade vs single-agent ao custo de ~15× tokens **vs chat comum** (correção da verificação: a base do 15× é chat, não single-agent) ([fonte](https://www.anthropic.com/engineering/multi-agent-research-system)). Roteamento multi-LLM por custo/sensibilidade é padrão formalizado na literatura ([arXiv 2601.04861](https://arxiv.org/pdf/2601.04861)) — **valida a arquitetura atual do MC** (Gemini ~70% / Llama ~25% / Claude ~5%).
- ⚠️ Frameworks multi-agente (maturidade jun/2026): LangGraph 1.0 GA (maior base de produção verificada; model-agnostic) · CrewAI (MCP+A2A nativos) · OpenAI Agents SDK (aceita modelos externos via API compatível) · Claude Agent SDK (MCP-native, Claude-only) · Google ADK (atrelado a Vertex). Lock-in decresce nessa ordem: ADK/Claude SDK > OpenAI SDK > LangGraph/CrewAI.
- ✅ WhatsApp Cloud API + N8N: padrão dominante = webhook → 200 imediato → processamento assíncrono → AI Agent node → resposta; System User token permanente; human handoff. Coincide com a arquitetura E0-E7 do MC.

---

## §5 · Privacidade, residência de dados e LGPD

### 5.1 Políticas de treinamento (verificadas em fonte primária)

| Provedor | Treina com dados da API? | Retenção | ZDR |
|---|---|---|---|
| Anthropic (Commercial Terms) | ✅ NÃO | ~30 dias padrão | Sim, mediante aprovação caso-a-caso. **Ressalva verificada:** para certos "Covered Models" recentes, retenção 30d é obrigatória e ZDR indisponível | 
| OpenAI (API/Enterprise) | ✅ NÃO | ~30 dias | Sim, clientes elegíveis |
| Google Gemini API **free tier / AI Studio** | ❌ **SIM — usa prompts/respostas para melhorar produtos, com revisão humana possível**. Termos literais: *"Do not submit sensitive, confidential, or personal information to the Unpaid Services"* | — | — |
| Google Gemini API **paid tier / Vertex AI** | ✅ NÃO (DPA Google Cloud) | conforme DPA | — |

Fonte free/paid Gemini: [Gemini API Additional Terms](https://ai.google.dev/gemini-api/terms) — **confirmado por verificação adversarial em 11/06/2026**.

> **🚨 Implicação imediata MC:** o uso de Gemini 2.5 Flash (~70% da triagem) só é defensável sob LGPD se for **tier pago ou Vertex AI**. Free tier/AI Studio é vedado para *qualquer* dado pessoal — mesmo "não-sensível". **Ação: confirmar qual tier o N8N do MC está usando hoje. Se free tier → migração imediata.**

### 5.2 Residência de dados — Brasil (verificado)

- ✅ Vertex AI GenAI disponível em **southamerica-east1 (São Paulo)** com data residency **at-rest** garantida para features GA; **mas** o endpoint global "does not guarantee that requests will be processed in any specific location", e ML processing com garantia regional prioriza multi-regiões US/EU. **At-rest ≠ processamento.** Tabela modelo-a-modelo para São Paulo: `[FONTE PENDENTE — conferir docs.cloud.google.com/vertex-ai/generative-ai/docs/learn/data-residency no console]`.
- ✅ AWS Bedrock ativo em sa-east-1 com opção de inferência In-Region; AgentCore chegou a São Paulo em mai/2026. Lista exata de modelos in-region: `[FONTE PENDENTE]`.
- ✅ Azure: Brazil South existe, mas **Data Zones do Azure OpenAI cobrem só EUA e UE** — sem Data Zone Brasil.

### 5.3 Regulação brasileira

- ✅ **PL 2338/2023 NÃO é lei em jun/2026**: aprovado no Senado (10/12/2024), parado na Comissão Especial da Câmara; votação empurrada para 2026. Modelo de risco tipo AI Act; ANPD coordenadora do SIA; sanções até R$ 50 mi.
- ✅ Precedente ANPD (caso Meta, 2024): legítimo interesse para treinar IA exige transparência + opt-out facilitado; dado sensível e menores têm barreira maior (Nota Técnica 39/2024/FIS/ANPD).
- ✅ **Llama 4 Community License**: uso comercial OK (gatilho 700M MAU irrelevante para o MC); badge "Built with Llama" obrigatório; **AUP veda literalmente "unauthorized or unlicensed practice of any profession including... legal"** ([USE_POLICY oficial](https://raw.githubusercontent.com/meta-llama/llama-models/main/models/llama4/USE_POLICY.md)) — **o Firewall OAB é também condição de licença do modelo**, não só de compliance regulatório.
- `[FONTE PENDENTE]` Cláusulas-padrão contratuais ANPD para transferência internacional (Resolução CD/ANPD nº 19/2024) — fechar antes de qualquer parecer R3 sobre provedores estrangeiros.

---

## §6 · Substrato para a decisão de stack do MC

> Esta seção organiza implicações — **não decide**. Decisões de stack são R2 (cunhagem fundacional: Founder + C3.1 + Anciã); o que tocar LGPD/dados sensíveis escala a R3 (Dra. Juliana).

### 6.1 🚨 ACHADO CRÍTICO (refutado pela verificação): H100 não existe em São Paulo

A verificação adversarial **refutou** a viabilidade da premissa "Llama 4 Scout self-hosted em GCP Brasil" como está formulada hoje:

- ❌ **southamerica-east1 oferece apenas NVIDIA T4** (zonas a/b/c). Nenhuma zona com H100, A100 ou L4 listada em [GPU regions/zones do GCP](https://docs.cloud.google.com/compute/docs/regions-zones/gpu-regions-zones) (consulta 11/06/2026). T4 (16 GB) é insuficiente para Scout mesmo em INT4 (~55 GB).
- Caminhos possíveis a deliberar (R2, e R3 no que tocar dado sensível): (a) GPU em outra região GCP ⇒ perde o argumento de residência nacional; (b) outro provedor com H100 no Brasil `[FONTE PENDENTE — mapear: Oracle OCI São Paulo? Azure Brazil South? provedores nacionais?]`; (c) modelo menor que caiba em T4/L4 para a fatia sensível; (d) Vertex AI região SP com modelo gerenciado que tenha processamento garantido na região (depende da tabela pendente §5.2); (e) Bedrock sa-east-1 In-Region.
- **Enquanto isso:** verificar onde o Llama 4 Scout do MC roda *de fato* hoje. Se a inferência já ocorre fora de southamerica-east1, o argumento de soberania precisa ser reauditado.

### 6.2 Ações de curto prazo (R1, baixo risco)

1. **Auditar o tier da Gemini API em produção** (§5.1) — se free tier, migrar para pago/Vertex imediatamente.
2. **Deprecação Gemini CLI individual em 18/06/2026** — se alguém no MC usa Gemini CLI/Code Assist individual, planejar transição (Antigravity CLI ou alternativa).
3. **Avaliar upgrade N8N 1.88 → 2.x** — MCP nativo já existe na 1.88, mas 2.0 (dez/2025) traz AI Agent node maduro; pesar custo de migração de workflows.
4. **Política MCP de terceiros**: só servers auditados/pinados (tool poisoning, CVE-2025-54136) — anexar ao ADR-016.

### 6.3 Leituras estratégicas (insumo R2)

- **A arquitetura de roteamento por sensibilidade/custo do MC está validada pela literatura e pela prática de mercado** (§4) — o que está em xeque não é o desenho, é a *implementação física* da rota sensível (§6.1).
- **Tendência de preço**: a camada barata está encarecendo (Gemini 3.5 Flash ~3× o 2.5) enquanto a camada premium barateia por capacidade (cache 0,1×, batch −50%, contexto 1M flat). Orçar pipelines com cache/batch agressivo importa mais que trocar de modelo.
- **Haiku 4.5 ($1/$5; batch $0,50/$2,50)** é candidato a slot intermediário entre Gemini Flash e Sonnet para tarefas não-sensíveis com exigência de qualidade.
- **Lock-in**: a aposta MCP do MC envelheceu bem (governança Linux Foundation, adoção universal). Na camada de framework, LangGraph/CrewAI são os menos amarrados; Claude Agent SDK amarra à Anthropic — aceitável onde Claude já é a escolha deliberada (camada ética ~5%).
- **Ferramentas de dev**: para a realidade do MC (1 dev backend + founder não-dev orquestrando por agentes), o padrão de mercado "IDE assistant + agente de terminal" sugere manter Claude Code como agente principal (alinhado ao ecossistema MCP já adotado) e tratar Copilot/Cursor como complemento do Igor no IDE — decisão de tooling individual, R1.
- **Benchmarks em material MC**: nunca citar SWE-bench Verified sem a ressalva §2.1; preferir Scale SEAL/Artificial Analysis; descontar ~10-17 pontos de claims em scaffold de vendor.

---

## §7 · Lacunas consolidadas `[FONTE PENDENTE]`

1. Conteúdo integral do artigo TechTudo jun/2026 (403) — leitura manual pelo Founder.
2. Tabela modelo-a-modelo de ML processing do Vertex AI em southamerica-east1.
3. Lista de modelos Bedrock In-Region em sa-east-1.
4. Provedores com H100/A100/L4 em território brasileiro (GCP refutado; mapear OCI/Azure/nacionais).
5. Cláusulas-padrão ANPD de transferência internacional (Resolução CD/ANPD 19/2024).
6. Compatibilidade formal endpoint OpenAI-compatible da Gemini API.
7. Dia exato de lançamento do GPT-5.1-Codex-Max; preços o-series atuais (fontes conflitantes).
8. Status de manutenção do repositório Aider.

---

## §8 · Matriz de verificação adversarial (17 claims decisivos)

| # | Claim | Veredito |
|---|---|---|
| 1 | Gemini free tier treina com dados; paid não | ✅ CONFIRMA (termos oficiais) |
| 2 | Vertex SP: at-rest sim, ML processing limitado | ✅ CONFIRMA (enumeração pendente) |
| 3 | H100 em southamerica-east1 | ❌ **REFUTA** — só T4 |
| 4 | Llama 4: comercial OK + AUP veda prática jurídica | ✅ CONFIRMA |
| 5 | Anthropic: ZDR sob aprovação, 30d, sem treino | ✅ CONFIRMA (ressalva Covered Models) |
| 6 | Copilot → AI Credits 01/06/2026 | ✅ CONFIRMA |
| 7 | Gemini CLI individual morre 18/06/2026 → Antigravity | ✅ CONFIRMA (só tiers individuais) |
| 8 | Devin Core ~US$ 20 | ✅ CONFIRMA |
| 9 | Cursor pricing + Composer | ✅ CONFIRMA (Teams reestruturado jun/2026) |
| 10 | Claude Code pricing | ✅ CONFIRMA |
| 11 | Cognition × Windsurf × Google jul/2025 | ✅ CONFIRMA |
| 12 | OpenAI abandonou SWE-bench Verified (fev/2026) | ✅ CONFIRMA |
| 13 | Scaffold gap 20-28 pts same-model | ⚠️ CORRIGIDO — fenômeno real, gap same-model ~9,5-17 pts |
| 14 | MCP → Linux Foundation/AAIF dez/2025 | ✅ CONFIRMA (09/12/2025) |
| 15 | N8N MCP desde 1.88; 2.0 fim de 2025 | ✅ CONFIRMA (stable 15/12/2025) |
| 16 | Opus 4.5 primeiro >80% Verified | ✅ CONFIRMA (benchmark hoje desacreditado) |
| 17 | Multi-agente +90% / 15× tokens | ⚠️ CORRIGIDO — 15× é vs chat, não vs single-agent |

---

*MC-PESQUISA-IAsParaDesenvolvedores-Comparativo-v1_0-2026-0611 · Cérebro 1 (mesa de trabalho) · NÃO SELADO*
*Workflow: deep-research (5 agentes de busca + 3 verificadores adversariais) · 11/06/2026*
*Hierarquia: D > C > V | Proof-First | Provérbios 31:8 | SEMPRE*
