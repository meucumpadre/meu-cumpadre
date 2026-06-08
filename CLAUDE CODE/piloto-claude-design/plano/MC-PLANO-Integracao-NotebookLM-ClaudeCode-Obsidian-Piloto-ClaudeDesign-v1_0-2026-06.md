---
sistema: Meu Cumpadre — Fase Firewallada de Engenharia de Produto IA (Internal Only)
documento: MC-PLANO-Integracao-NotebookLM-ClaudeCode-Obsidian-Piloto-ClaudeDesign
versao: v1_0
data: 2026-06-02
status: PLANO COMPLETO — Pronto para Execução (Spec-Driven, micropassos detalhados)
autor: Grok Build (Engenheiro de Contexto e Aplicação Build) como arquiteto sênior
firewall: ESTRITO — ZONA VERDE 100%. Zero B2C, zero dados sensíveis, zero jornada de clientes/hipervulneráveis. Apenas desenvolvimento interno de produto, harness engineering, ecossistema Anthropic/Claude Design/Code/agents, market intel não-sensível, manifestos, singularidade do dev velocity do MC.
missao: Este é o teste piloto da integração NotebookLM + Claude Code + Obsidian como o "sistema de pouso propulsivo" (VTVL) para dominar e aplicar Claude Design dentro do Meu Cumpadre (construção do Esquadrão de Agentes IA + Harness de Produto).
relaciona:
  - _Papéis das Instâncias no Ecossistema MC‑RAG.md (v2.2)
  - MC-RÉGUA-COMPASSO-Metodo-v1_0-2026-0601.md
  - MC-VTVL-Propulsive-Landing-Programa-v0_1-2026-06.md (a integração é o "foguete" ; o pilot é o primeiro pouso controlado)
  - MC-ENGENHARIA-EsquadraoAgentesIA-Harness-Plano-v0_1-2026-06.md + esquadrao-harness/ (o tema do pilot: usar o sistema integrado para avançar o harness/squad cockpit usando Claude Design)
  - _MC-ESTUDO-EsquadraoAgentesIA-AntiteseHonesta-v0_2-MINUTA-2026-0602.md (base doutrinária: squad aninha sob ACI; harness é o valor na Zona Verde)
  - MC-ARQUITETURA-Cognitiva-Integrada-v2.1 (C2 Obsidian + C4 Cowork + context via NotebookLM)
  - MCP architecture docs, existing scripts (mc_clean_yt_transcript.py, mc_emit_context_pack.py, mc_vtvl_landing_validator.py, harness_orchestrator.py)
  - GitHub Desktop integration (já feita para vault e code repos)
objetivo_maximo: Aproveitar ao máximo o limite de 300 fontes por caderno no NotebookLM para curar conhecimento de elite sobre Claude Design, Anthropic agentic ecosystem, harness engineering, e usar isso para construir partes reais do produto interno (harness, squad interfaces, etc.) via o loop fechado multi-instância.
---

# MC-PLANO — Integração NotebookLM + Claude Code + Obsidian (Piloto: Claude Design dentro do Meu Cumpadre)

**Visão Executiva**

Esta é a missão: transformar o trio NotebookLM (cérebro de contexto de longo alcance) + Claude Code (executor local sniper) + Obsidian + Git (memória canônica persistente e versionada) em um sistema integrado de "pouso propulsivo" (VTVL) para o desenvolvimento de produto interno com IA.

O piloto é focado no tema **"Claude Design dentro do Meu Cumpadre"**: usar o ecossistema Anthropic (Claude Design para camadas de produto/UI do harness, Claude Code para implementação, agents/squad patterns, MCP, skills) para construir e iterar o próprio **Esquadrão de Agentes IA + Harness de Produto** (o "produto" firewalled da MC para acelerar seu dev velocity interno / singularidade).

A integração já tem base:
- GitHub Desktop integrado para sync do vault Obsidian e repositórios de código/harness.
- MCP existente para Claude Code ler/escrever no Obsidian de forma controlada.
- Scripts existentes (limpeza de transcrições, emissão de context packs, landing validator, protótipo de orchestrator).
- Método MC-RÉGUA-COMPASSO + papéis das instâncias + VTVL como framework de execução e aprendizado.
- Limite de 300 fontes por caderno no NotebookLM como "orçamento precioso" a ser usado com disciplina cirúrgica (curadoria por exclusão <5% erro).

O plano é **completo, em micropassos detalhados, orquestrado entre múltiplas instâncias de IA**, cada uma com papel claro (inspirado nos Papéis v2.2 e no estudo de antítese honesta).

**Estrutura do Plano**
- Fases (0 a 4), com micropassos numerados (granulares, acionáveis em minutos/horas).
- Para cada micropasso: Instância responsável, Entrada, Ação (com comandos/prompts exatos), Saída, Verificação de pouso, Risco & Mitigação.
- Uso máximo do limite 300 fontes: 1 caderno "MÉTODO" (como usar Claude Design/Code/agents no harness MC) + 1 caderno "ASSUNTO" (conhecimento profundo de Claude Design, Anthropic ecosystem 2026, harness engineering, Allie Miller patterns, etc.).
- Multi-instâncias (conforme correção do Founder + ACI v2.1):
  - **Grok Build (esta instância)**: Engenheiro de Contexto de Primeira Ordem + Aplicação Build (prepara packs com Compasso, orquestra o plano completo, constrói/adapta scripts e protótipos como o harness_orchestrator, injeta contexto, roda validações de pouso, mantém artefatos no embate e vault).
  - **Claude Code (chamado de Falcão aqui)**: O Falcão prático do setup. Julgador do Compasso (aplica REGISTRO–ESCALÃO–JOGADA em fontes candidatas e em outputs gerados) + Executor Local e Adversário / Sniper (via MCP/Obsidian lê o contexto do NotebookLM e vault, executa código, integrações, roda Claude Design quando for a ferramenta de produto, e faz julgamento adversarial / verificação). Claude Code é o "falcão" neste piloto.
  - **Claude Design (sessões dedicadas dentro do Claude Code ou separadas)**: Designer de produto (usa a ferramenta Claude Design para prototipar as interfaces do harness/squad cockpit, flows, Squad Cockpit views etc., alimentado pelo contexto das 300 fontes via Obsidian).
  - **NotebookLM Pro (Cérebro de Contexto)**: O cérebro compartilhado. Mantém os dois cadernos (MÉTODO + ASSUNTO) com até 300 fontes cada sobre Claude Design / Anthropic ecosystem / harness. Fonte primária de queries durante todo o design e código.
  - **Obsidian + Git + GitHub Desktop**: O Registro Canônico e a sincronização. Memória auditável persistente (salva todos os packs, tabelas, designs exportados, código, relatórios de pouso). Bridge principal (via MCP ou filesystem) para Claude Code. GitHub Desktop para commits e sync fácil entre instâncias.
  - **Gemini (Deep Research)**: Mínimo uso. Apenas para relatórios de pesquisa profunda específicos onde o UX e o acesso nativo direto ao NotebookLM seja claramente superior. Mesmo nesses casos, priorizamos engenharia reversa via Obsidian + Claude Code (conforme ACI: pesquisa externa pode listar Gemini, mas o setup atual usa Claude Code + Obsidian como o falcão e executor principal).
- Cada "pouso" (entrega de artefato: spec, código, design, relatório) é verificado com landing validator adaptado, lições retroalimentam o sistema (VTVL).
- Tudo firewalled: só fontes não-sensíveis, foco em produto interno.

**Sucesso do Piloto**: Ter curado e injetado ~300 fontes de elite no NotebookLM sobre o tema, usado o loop integrado para produzir entregas reais de produto (ex: specs + protótipos do Squad Cockpit / harness usando Claude Design/Code), com pousos documentados, lições capturadas, e o sistema "pousando" de forma controlada e reutilizável.

---

## Fase 0 — Setup da Integração e Ambiente (1-2 dias, micropassos de preparação)

**Objetivo da Fase**: Garantir que todas as peças técnicas estão conectadas (NotebookLM, Obsidian/Git via GitHub Desktop, Claude Code via MCP, scripts existentes), papéis das instâncias injetados, e o "orçamento" de 300 fontes alocado para o tema Claude Design.

**Instâncias envolvidas**: Grok Build (líder), Claude Code (verificação técnica), Obsidian (config).

**Micropassos**:

0.1 Grok Build: Criar este plano no vault e no folder do embate. Injetar contexto completo (papéis v2.2, REGUA COMPASSO, VTVL, estudo de antítese, harness spec anterior, ACI) em todas as instâncias futuras. Saída: este arquivo salvo + link no orquestrador-mestre (seção de harness interno).

0.2 Grok Build: No Obsidian, criar pasta dedicada `02-ARQUITETURA/esquadrao-harness/piloto-claude-design/` (ou similar) + subpastas: /notebooklm-packs, /designs, /code, /landings, /context. Configurar Git ignore para binários pesados (conforme regras do vault).

0.3 Grok Build + Claude Code (via terminal/MCP): Verificar integração GitHub Desktop. Fazer commit/push de teste de um arquivo .md simples na pasta do piloto. Verificar que Claude Code consegue ler via MCP ou file system e que GitHub Desktop reflete mudanças. Saída: log de teste + "integração VCS validada".

0.4 Grok Build: Verificar/criar dois cadernos no NotebookLM Pro (limite 300 fontes cada):
   - Caderno "MC-ClaudeDesign-MÉTODO" (foco: Ensina-fazendo — como usar Claude Design/Code/agents/harness no contexto MC internal product dev).
   - Caderno "MC-ClaudeDesign-ASSUNTO" (foco: Balas de Prata + Outliers — specs oficiais Anthropic, releases, harness engineering patterns, Allie Miller workflows, market intel 2026).
   Configurar Studio para geração de artefatos (se aplicável) com tema "Claude Design para Harness MC".

0.5 Grok Build: Adaptar scripts existentes para o piloto (copiar para a pasta /piloto/scripts/):
   - mc_emit_context_pack.py → versão "ClaudeDesign" com labels específicos para MÉTODO/ASSUNTO.
   - mc_vtvl_landing_validator.py → versão para "pousos de produto Claude Design" (scores de aderência a manifestos, harness principles, Proof-First em claims de Anthropic).
   Testar com um exemplo pequeno. Saída: scripts adaptados + teste rodado.

0.6 Claude Code (sessão dedicada): Verificar/criar MCP server para Obsidian (se ainda não 100% — porta 22360 ou conforme docs anteriores). Testar leitura de pasta do piloto + escrita de arquivo de teste. Integrar com Git (claude code commit via terminal, GitHub Desktop para UI). Saída: MCP funcional + "Claude Code consegue operar no vault do piloto via Git".

0.7 Grok Build: Criar "CLAUDE.md" específico para a pasta do piloto (contexto para todas as sessões Claude Code/Design): regras firewalled, resumo do plano, links para papéis, REGUA, VTVL, harness spec, e "sempre injetar contexto do NotebookLM packs antes de tarefas de design/code".

0.8 Todas as instâncias (Grok injeta): Criar "Contrato de Orquestração do Piloto" (arquivo .md simples) listando os papéis exatos das instâncias e o ritual de troca de contexto (sempre via Obsidian/Git ou packs do NotebookLM).

**Verificação de Fase (Pouso da Fase 0)**: Rodar o landing validator adaptado na pasta do piloto. Score >80, zero violação de firewall, integração VCS + MCP validada, dois cadernos NotebookLM criados e prontos para fontes.

---

## Fase 1 — Curadoria Cirúrgica das 300 Fontes (Garimpo + Julgamento + Injeção) — ~3-5 dias

**Objetivo**: Encher os dois cadernos com ~300 fontes de altíssima qualidade sobre o tema, usando o Compasso ao máximo. Nada de ruído. Foco em fontes que sirvam diretamente ao desenvolvimento do harness/squad usando Claude Design/Code.

**Instâncias**:
- Grok Build: Caçador de Contexto + Preparador de Pacotes (traduz missões em termos de busca + REG/ESC/JOG, entrega blocos puros + tabelas).
- Gemini (Deep Research): Usado minimamente (apenas relatórios profundos específicos com UX nativo superior). O Falcão prático é Claude Code.
- NotebookLM: Cérebro (recebe as fontes nos cadernos MÉTODO e ASSUNTO).
- Obsidian/Git: Registro (salva tabelas de colheita, blocos, relatórios de curadoria).

**Micropassos** (repetir em ciclos até ~300 fontes totais, priorizando qualidade; use ~150-200 no ASSUNTO, ~100-150 no MÉTODO):

1.1 Grok Build: Definir "missões de colheita" em micropassos (ex: 1. Claude Design official specs + releases 2026; 2. Anthropic Managed Agents + harness engineering papers/blog; 3. Claude Code + MCP + skills composition patterns; 4. Allie Miller agent workflows + proactive squads (transcrições + reports); 5. Multi-agent orchestration in Claude ecosystem; 6. Context management / compaction for long-running design/code agents; 7. Integrações Claude Design → Code handoff; 8. Market intel 2026 sobre "AI product dev harness" de players semelhantes; 9. Exemplos de "squad cockpit" / agent UI patterns (não-sensíveis); 10. Proof-First / verification loops em agent systems).

**Status first propulsive landing (2026-06-03):** MISSÃO 1 ("Claude Design specs 2026") executada em modo HOVER BOUNDED (um lote único de 13 fontes de elite, NÃO 300). Compasso full aplicado (REGISTRO × ESCALÃO × JOGADA + tiers + Proof-First + cross-anchor + <5%). Artefato oficial gerado: `CLAUDE CODE/piloto-claude-design/MC-COLHEITA-Fase1-M1-ClaudeDesignSpecs2026-Compasso-v0_1-MINUTA.md` (tabela + bloco URLs puro pronto para NotebookLM + frontmatter MC MINUTA + gate Vault PENDENTE + PERSPECTIVA INDEPENDENTE com divergências de escopo e red-team do Compasso). Salvo no repo (branch bom-dia-falcao). Gravação em C1 (Drive G: Documentação/NotebookLM) + criação do caderno NotebookLM = passos manuais do Founder (Drive externo não montado para escrita no sandbox). 

**Pouso registrado (2026-06-03):** Landing report completo gerado em `CLAUDE CODE/piloto-claude-design/landings/MC-LANDING-Fase1-M1-Colheita-HarnessAgentDesignPatterns2026-v0_1-2026-06.md`. Score: 93.8 — CONTROLADO COM RESSALVAS (VTVL). Evidência: caderno NotebookLM "Harness & Agent Design Patterns 2026" criado pelo Founder com paste exato das 13 URLs (screenshot fornecido confirma match perfeito das fontes, 13/13). Aderência total ao bounded + Compasso + firewall. RESSALVAS: cópia manual para G:\...\landings\ pendente (topologia), respostas de teste do NB ainda não salvas, apenas 1 missão de 10. Lições capturadas na PERSPECTIVA e no landing (harness patterns > releases isoladas; Compasso validado em escala; bounded é o jeito certo). Aguardando julgamento Founder. Ver landing report para detalhes completos, booster recs e selagem.

1.2 Grok Build: Para cada missão, gerar "pacote de caça" (usando emitter adaptado ou manual):
   - Termos de busca otimizados (pós-data 2025/2026, "Claude Design", "harness", "MCP", "subagents", "Allie Miller", etc., evitar hype US-only se não aplicável ao internal MC).
   - Filtros: priorizar fontes oficiais Anthropic (🎯), ensina-fazendo com demo em tela/código (🛠️), outliers de workflows reais (💎).
   - Rótulos preliminares REGISTRO–ESCALÃO–JOGADA (ex: para MÉTODO: 🛠️ Técnico "Injeção no Claude Code via Obsidian para gerar código do harness").
   - Bloco de URLs puro + tabela Markdown.

1.3 Claude Code (Falcão): Receber o pacote via Obsidian (MCP ou filesystem) ou paste. Aplicar julgamento full Compasso:
   - Para cada fonte candidata: classificar REGISTRO exato, ESCALÃO (foco Técnico/Produto para harness), JOGADA CAUSAL específica ("o que o NotebookLM injeta no Claude Code para construir X parte do Squad Cockpit").
   - Balotear fontes fracas/redundantes/hype sem demo.
   - Priorizar fontes que ajudam a "usar Claude Design para projetar o produto do harness" e "Claude Code para implementar".
   - Gerar tabela final rotulada + bloco URLs limpo + nota de "o que PROVA / NÃO PROVA" (Linha de Evidência style).
   - Saída: pacote julgado pronto para injeção. (Se precisar de deep research massivo com UX nativo do NotebookLM, pode-se usar Gemini pontualmente, mas o padrão é Claude Code via Obsidian.)

1.4 Grok Build: Pegar o pacote julgado, formatar como colheita oficial (tabela + bloco + frontmatter com compasso + data + missão). Salvar em Obsidian `/piloto/colheitas/`. Fazer commit via GitHub Desktop.

1.5 Grok Build: Injetar no NotebookLM:
   - Para fontes de "como fazer" (ensina-fazendo, workflows, patterns): caderno MÉTODO.
   - Para fontes de "o que é" (specs oficiais, releases, benchmarks, casos-teto): caderno ASSUNTO.
   - Respeitar limite 300 total por caderno. Usar "Deep Research" do NotebookLM se disponível para síntese interna.
   - Após injeção: fazer query de teste no NotebookLM ("Como usar Claude Design para prototipar o Squad Cockpit do harness MC?") e salvar resposta como "nota de contexto" no Obsidian.

1.6 Repetir ciclos 1.1-1.5 até atingir ~250-300 fontes combinadas (deixar margem para qualidade). Manter registro em tabela mestre no Obsidian (fonte | caderno | REG | ESC | JOGADA | data injeção | link NotebookLM se possível).

1.7 Claude Code (Falcão) + Grok Build: Fazer "auditoria de orçamento" final: revisar se as 300 fontes estão realmente de elite (alta densidade para o tema). Balotear e substituir as mais fracas por melhores. Atualizar via Git. (Gemini só se o relatório de auditoria precisar de deep research massivo com UX nativo do NotebookLM.)

**Verificação de Fase (Pouso da Fase 1)**: Dois cadernos NotebookLM com fontes curadas (contagem exata <300 cada), tabela mestre no Obsidian com 100% das fontes rotuladas Compasso, respostas de teste do NotebookLM salvas no vault, commit Git limpo via GitHub Desktop, landing validator adaptado rodado na pasta /piloto (score alto, lições capturadas).

---

## Fase 2 — Execução do Piloto: Usar o Sistema Integrado para Produzir com Claude Design (Core do Teste)

**Objetivo**: Fechar o loop. Usar o contexto de 300 fontes (via NotebookLM → Obsidian injection → Claude Code) para realmente **usar Claude Design** (a ferramenta) para projetar partes do produto (Squad Cockpit, interfaces do harness, etc.), e Claude Code para implementar protótipos/integrações. Documentar tudo como "voos" com pousos.

**Instâncias** (conforme correção):
- Grok Build: Orquestrador do piloto + Context Prep (prepara prompts/packs específicos para sessões Claude Design/Code, usando o emitter e Compasso).
- Claude Design (sessão dedicada): Designer do produto (protótipo o Squad Cockpit / interfaces do harness usando o contexto injetado das 300 fontes via Obsidian).
- Claude Code (Falcão + Executor): O Falcão do piloto. Aplica julgamento Compasso em fontes e outputs. Executor (implementa código do harness baseado nos designs, usando MCP/Obsidian para ler contexto do NotebookLM/vault, escrever código, integrações, roda verificações). Também pode fazer revisão adversarial.
- NotebookLM: Fonte de verdade para queries durante o design/code ("baseado nos 300 fontes, qual o melhor pattern de harness para...").
- Obsidian/Git/GitHub Desktop: Memória compartilhada e VCS (designs exportados do Claude Design vão para Obsidian; código de Claude Code commitado; tudo versionado e sincronizado entre instâncias). Bridge principal via MCP ou filesystem para Claude Code.

**Micropassos** (exemplo de um ciclo de "voo" de produto; repetir para múltiplos artefatos):

2.1 Grok Build: Preparar "pacote de missão" para uma tarefa específica de produto (ex: "Prototipar o Mission Control / Landing Reports do Squad Cockpit usando Claude Design").
   - Extrair contexto relevante do NotebookLM (query no caderno MÉTODO + ASSUNTO).
   - Gerar prompt otimizado para Claude Design (incluindo referências às fontes curadas, princípios do harness spec, VTVL "pouso reports como feature", Allie patterns para proatividade).
   - Salvar o pacote em Obsidian `/piloto/missoes/`.

2.2 Claude (Design session): Abrir Claude Design, injetar o pacote (via paste ou link para Obsidian export se possível; ou copiar manualmente). Usar Claude Design para gerar:
   - Wireframes / high-fidelity do Squad Cockpit (foco em views de Mission Control, Agent Fleet, Landing Reports, Proactive Workflows).
   - Flows de como o humano interage com o squad para uma tarefa de "design de harness".
   - Exportar artefatos (imagens, specs, prompts gerados) para pasta no Obsidian (via GitHub Desktop sync ou manual commit).

2.3 Grok Build: Após geração, "julgar" o output com Claude Code (Falcão): aplicar critérios do Compasso/estudo (é aderente aos harness principles? Tem verificação clara? Evita drift?). Salvar revisão em Obsidian. (Gemini só se o relatório de revisão precisar de deep research massivo com UX nativo.)

2.4 Claude (Code session): Usar Claude Code (com MCP no Obsidian da pasta do piloto). Injetar contexto (designs do passo 2.2 + packs do NotebookLM + harness spec). Implementar protótipo de código correspondente (ex: backend para os landing reports, ou integração MCP para o cockpit).
   - Escrever código que lê contexto do vault/NotebookLM packs.
   - Testar localmente.
   - Commit via terminal + GitHub Desktop para refletir no Obsidian.

2.5 Todas as instâncias: Executar "pouso" do voo:
   - Grok Build roda o landing validator adaptado no artefato gerado (design + código).
   - Gerar relatório de pouso (score, issues, lições, melhorias no harness).
   - Salvar relatório no Obsidian `/piloto/landings/`.
   - Commit via GitHub Desktop.
   - Feedback loop: lições viram novas fontes ou atualizações no NotebookLM (se caber no limite 300) ou em context packs.

2.6 Repetir 2.1-2.5 para outros artefatos do piloto (ex: "Implementar Verification specialist no orchestrator prototype usando patterns de harness da curadoria"; "Design do Agent Fleet view"; "Proactive workflow para atualização de market intel Anthropic").

**Verificação de Fase (Pouso da Fase 2)**: Múltiplos artefatos reais de produto gerados com o loop (designs via Claude Design + código via Claude Code), todos com pouso reports documentados no vault, commits via GitHub Desktop, contexto de 300 fontes efetivamente usado (evidenciado em prompts/outputs), sistema demonstrando "pouso controlado" (lições retroalimentam o harness).

---

## Fase 3 — Validação, Iteração e "Rapid Reuse" (Fechamento do Piloto)

**Objetivo**: Provar que o sistema integrado permite "rapid reuse" (o próximo artefato é mais rápido/melhor graças ao pouso anterior). Documentar o piloto completo como case de sucesso da integração. Preparar para expansão (mais temas, mais fontes se possível, ou C4 Cowork).

**Micropassos**:

3.1 Grok Build + Gemini: Auditoria final do piloto.
   - Contagem exata de fontes usadas vs limite 300.
   - Revisão de todos os pousos: tendência de melhoria (scores subindo, tempo por artefato caindo, qualidade subindo).
   - Verificação de aderência ao estudo (harness principles respeitados, gates aplicados, antítese honesta mantida).

3.2 Todas as instâncias: Executar 1-2 "reflights" (artefatos subsequentes usando lições explícitas dos pousos anteriores). Medir métricas (tempo, qualidade, % de contexto reutilizado do NotebookLM).

3.3 Grok Build: Produzir "Relatório de Piloto" completo no Obsidian (resumo de curadoria, fluxo de integração, artefatos entregues, lições para o harness/squad, recomendações para próximo piloto/tema).

3.4 Claude Code + Obsidian/Git: "Refurbish" o harness prototype com as melhores lições do piloto (ex: adicionar features de landing reports diretamente no código do orchestrator).

3.5 Grok Build: Atualizar o VTVL program e o harness spec com os resultados deste piloto (o "pouso" foi bem-sucedido; agora documentar para "fleet expansion").

**Verificação Final do Piloto (Pouso da Missão)**: Relatório de piloto selado no vault, sistema demonstrando loop fechado com reuse, 300 fontes aproveitadas ao máximo, integração técnica (NotebookLM → Obsidian/Git/GitHub Desktop → Claude Code) funcionando end-to-end, e entregas reais de "Claude Design dentro do Meu Cumpadre" (usando a ferramenta para construir o próprio produto).

---

## Fase 4 — Lições, Expansão e Manutenção (Pós-Piloto)

- Documentar "como operar o sistema integrado" em um runbook no Obsidian (ritual de troca de instâncias, injeção de contexto, commit via GitHub Desktop, uso dos scripts).
- Manter os cadernos NotebookLM atualizados (substituir fontes obsoletas dentro do limite 300).
- Planejar próximos pilotos (outros temas de Anthropic ecosystem para o harness).
- Integrar com C4 Cowork quando nascer (o squad/harness como parte da esteira).

---

## Papéis Resumidos das Instâncias no Piloto (conforme correção do Founder)

- **Grok Build**: Líder da missão, preparador de contexto/pacotes (com Compasso), construtor de ferramentas (scripts, protótipos), orquestrador de micropassos, validador de pousos, mantém os artefatos no embate e vault.
- **Claude Code (o Falcão aqui)**: Juiz implacável do Compasso (aplica julgamento REGISTRO–ESCALÃO–JOGADA em fontes e outputs) + Executor Local e Adversário / Sniper (via MCP/Obsidian lê contexto do NotebookLM/vault, executa código e integrações, roda Claude Design quando for a ferramenta de produto, faz revisão adversarial). O "code" é o falcão prático neste piloto.
- **Claude Design (sessões)**: Designer de produto (protótipo das interfaces do harness/squad cockpit usando o contexto das 300 fontes).
- **NotebookLM**: Memória de longo prazo compartilhada (cérebro com os dois cadernos até 300 fontes cada).
- **Obsidian + Git + GitHub Desktop**: Memória persistente, auditável e sincronizada (o "livro de atas" + bridge principal para Claude Code via MCP ou filesystem).
- **Gemini (Deep Research)**: Mínimo. Apenas para relatórios de pesquisa profunda específicos onde o UX e acesso nativo direto ao NotebookLM seja vantajoso. Preferir sempre via Obsidian + Claude Code (reverse engineering).

**Ritual de Troca entre Instâncias**: Sempre via Obsidian (salvar prompt/pacote/resultado) + Git commit via GitHub Desktop + referência ao caderno NotebookLM. Nunca contexto só em chat — tudo persiste no vault para o próximo "voo".

---

**Este plano é a missão completa.** Execute micropasso por micropasso, documentando cada pouso. O limite de 300 fontes é o seu "orçamento de combustível" — use com precisão sniper.

Quando o piloto pousar com sucesso, teremos não só conhecimento de Claude Design, mas o sistema integrado funcionando como o "foguete reutilizável" para todo o desenvolvimento de produto interno do Meu Cumpadre.

Pronto para o primeiro micropasso? Diga "inicia Fase 0.1" ou escolha o ponto de partida.

Grok Build — arquiteto e executor, no comando deste piloto. 

∞

**Localização**: Este arquivo + subpasta `plano-integracao/` no folder do embate. Sincronize para o vault via GitHub Desktop após revisão.