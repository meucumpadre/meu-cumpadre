

**ARQUITETURA MCP**

**MEU CUMPADRE v2.0**

*Model Context Protocol como Sistema Nervoso Soberano*

*do Ecossistema de Verticais Especializadas para Hipervulneraveis*

**Hybrid Vertical AI Full Stack Company**

Documento de Arquitetura Tecnica  |  Classificacao: Estrategico-Operacional

Versao 2.0  |  Marco 2026  |  Integracao Systems Claude/Meu Cumpadre

Autor: Alessandro de Souza Neves (SIAPE 1.378.671)  |  Co-autor: Claude (Anthropic)  
*"Lucro e combustivel. Causa e destino. Jogo e infinito."*

**SUMARIO**

# **1  FUNDAMENTOS: POR QUE MCP E O SISTEMA NERVOSO DO MEU CUMPADRE**

## **1.1  O MCP Como Infraestrutura Existencial**

O Model Context Protocol nao e uma escolha tecnica. E uma decisao existencial. Quando o Meu Cumpadre adota o MCP como espinha dorsal da sua arquitetura, nao esta escolhendo um protocolo de comunicacao entre software. Esta escolhendo a forma como o ecossistema inteiro vai lembrar, aprender, proteger e servir 40 a 60 milhoes de brasileiros hipervulneraveis ao longo de decadas. Cada interacao, cada documento fotografado no WhatsApp, cada audio tremulo de uma aposentada rural de 66 anos pedindo ajuda para entender uma carta do INSS, tudo isso precisa ser persistido, contextualizado e protegido com a mesma reverencia com que se guarda a historia de vida de alguem.

A analogia oficial do MCP e USB-C para aplicacoes de IA. Antes do USB-C, cada dispositivo exigia conector proprietario. O MCP padroniza: um protocolo serve para conectar qualquer LLM a qualquer ferramenta externa. Mas para o Meu Cumpadre, a analogia precisa ir alem. O MCP nao e apenas conector. E sistema nervoso. Assim como o sistema nervoso humano conecta percepcao (olhos, ouvidos, tato) a memoria (hipocampo) a acao (musculos) a protecao (reflexos), o MCP conecta percepcao (WhatsApp, audio, OCR) a memoria (Firestore, BigQuery, 4 Tiers) a acao (protocolo INSS, envio de documentos, blindagem bancaria) a protecao (Router-Ethics, Circuit Breaker Fenix, handoff humano).

## **1.2  De Protocolo Anthropic a Infraestrutura Global**

O MCP foi lancado pela Anthropic em novembro de 2024\. Em dezembro de 2025, foi doado para a Agentic AI Foundation (AAIF), fundo dirigido sob governanca da Linux Foundation, cofundado por Anthropic, Block e OpenAI, com membership platinum de AWS, Google, Microsoft, Cloudflare e Bloomberg. Esta movimentacao garante neutralidade e interoperabilidade de longo prazo. Nenhuma empresa controla o protocolo.

| Indicador de Adocao | Valor (marco/2026) | Implicacao para o Meu Cumpadre |
| ----- | ----- | ----- |
| Downloads mensais SDK | 97+ milhoes | Ecossistema maduro, baixo risco de abandono |
| MCP Servers publicados | 10.000+ | Integracao pronta: Evolution API, PostgreSQL, OCR, Playwright |
| Adocao por players | ChatGPT, Claude, Gemini, Copilot, VS Code | Portabilidade total entre LLMs |
| Governanca | Linux Foundation (AAIF) | Neutralidade garantida, sem vendor lock-in |
| Spec vigente | 2025-11-25 | Tasks assincronas, OAuth, Elicitation, Sampling com Tools |
| Extensoes recentes | MCP Apps (SEP-1865) | UI interativa padronizada (Anthropic \+ OpenAI juntos) |

*DECISAO ESTRATEGICA: A aposta no MCP e de baixo risco porque o protocolo ja venceu a guerra de padroes. O Meu Cumpadre nao precisa construir cada integracao do zero. E se amanha migrar de Claude para outro LLM, a camada MCP permanece intacta.*

## **1.3  Arquitetura Cliente-Host-Servidor**

O MCP opera sobre JSON-RPC 2.0 com separacao clara de papeis. O Host e a aplicacao de IA que coordena (no Meu Cumpadre: WhatsApp \+ LangGraph). O Client mantem conexao 1:1 com cada servidor. O Server expoe contexto e ferramentas. A comunicacao ocorre via STDIO para servidores locais ou Streamable HTTP para conexoes remotas.

A spec 2025-11-25 trouxe avancos criticos para o ecossistema Meu Cumpadre. Tasks permitem operacoes asincronas com status tracking, perfeitas para processos INSS que demoram dias ou semanas. URL Mode Elicitation permite fluxos OAuth seguros sem que credenciais transitem pelo client. Sampling com Tools habilita loops agenticos server-side, onde o Router-Ethics pode orquestrar raciocinio multi-etapa usando primitivas MCP padrao.

# **2  AS PRIMITIVAS MCP APLICADAS AO ECOSSISTEMA**

O MCP define primitivas fundamentais que se dividem em server-side (expostas pelo servidor) e client-side (expostas pelo cliente). Cada uma mapeia diretamente para necessidades operacionais do atendimento a hipervulneraveis.

## **2.1  Resources: A Biografia Digital do Hipervulneravel**

Resources sao dados read-only expostos pelo servidor via URI unico. Funcionam como endpoints GET em APIs REST. No Meu Cumpadre, Resources representam a biografia digital de cada pessoa atendida.

| Resource URI | Conteudo | Acesso |
| ----- | ----- | ----- |
| mcp://perfil/{cpf} | Nome, idade, IVCAD score, nivel gov.br, consentimento LGPD | Tier 1 (Identitario) |
| mcp://cnis/{cpf} | Extrato CNIS completo, vinculos, contribuicoes, lacunas | Tier 3 (Documental) |
| mcp://dossie/{cpf}/{beneficio} | Dossie Proof-First montado: lei \+ evidencia \+ hash | Tier 3 (Documental) |
| mcp://historico/{cpf} | Timeline de todas interacoes, verticais ativadas, cascatas | Tier 2 (Contextual) |
| mcp://documentos/{cpf}/{doc\_id} | Imagem OCR processada com metadados e validacao | Tier 3 (Documental) |
| mcp://emocional/{cpf} | Estado de confianca, gatilhos, preferencia de comunicacao | Tier 2 (Contextual) |

*PRINCIPIO PROOF-FIRST: Cada Resource carrega hash SHA-256 e referencia legal. O dossie nao e apenas dados; e prova auditavel que o INSS nao pode contestar.*

## **2.2  Tools: As Maos do Cumpadre**

Tools sao funcoes executaveis com side effects. O modelo de IA decide quando invoca-las. No ecossistema, Tools sao as acoes concretas que transformam a vida do hipervulneravel.

| Tool | Funcao | Side Effect | Requer Consentimento |
| ----- | ----- | ----- | ----- |
| ocr\_documento | Extrai texto de foto via Google Vision | Persiste no Tier 3 | Nao (documento ja enviado) |
| calcular\_beneficio | Simula valor e elegibilidade | Nenhum | Nao |
| montar\_dossie | Gera dossie Proof-First hashado | Persiste dossie \+ hash | Sim (acao irreversivel) |
| protocolar\_inss | Protocola requerimento via Human API | Acao no gov.br | Sim (Elicitation obrigatoria) |
| enviar\_whatsapp | Envia mensagem/audio/midia via Evolution API | Mensagem ao usuario | Nao (fluxo normal) |
| blindagem\_bancaria | Ativa Watchdog contra consignados fraudulentos | Monitoramento ativo | Sim |
| router\_ethics\_score | Calcula Score (0.40R \+ 0.30P \+ 0.30A) | Log auditavel | Nao (automatico) |
| escalar\_anjo | Handoff para Anjo humano com contexto MCP | Cria task na fila | Nao (protecao) |

## **2.3  Prompts: Os Rituais de Acolhimento**

Prompts sao templates reutilizaveis para interacoes estruturadas, acessados via slash commands. No Meu Cumpadre, Prompts codificam os rituais de acolhimento que garantem consistencia sem robotizar o atendimento.

| Prompt | Funcao | Argumentos Dinamicos |
| ----- | ----- | ----- |
| /triagem | Fluxo inicial de acolhimento e classificacao | {nome}, {tipo\_demanda}, {urgencia} |
| /explicacao\_xai | Explica decisao do Router-Ethics em linguagem 5a serie | {score}, {fatores}, {decisao} |
| /acolhimento\_anjo | Script de inicio quente para Anjo humano | {nome}, {historico\_resumo}, {estado\_emocional} |
| /simulacao | Simula beneficio com dados do usuario | {tipo\_beneficio}, {idade}, {contribuicoes} |
| /cascata | Apresenta oportunidades cross-vertical pos-concessao | {beneficio\_concedido}, {verticais\_elegiveis} |

## **2.4  Sampling: O Cerebro Distribuido**

Sampling permite que servidores MCP solicitem completions de LLM atraves do client, sem precisar de API keys proprias. No Meu Cumpadre, Sampling habilita uma arquitetura de cerebro distribuido onde servidores especializados podem invocar raciocinio profundo quando necessario.

Com a spec 2025-11-25, Sampling agora suporta tool calling, permitindo server-side agent loops. O Router-Ethics pode iniciar uma cadeia de raciocinio multi-etapa: (1) analisar documento, (2) consultar jurisprudencia, (3) calcular score, (4) decidir handoff, tudo usando primitivas MCP padrao sem frameworks customizados.

## **2.5  Elicitation: O Consentimento Informado**

Elicitation permite que servidores solicitem informacoes adicionais dos usuarios durante execucao. No contexto do Meu Cumpadre, Elicitation e o mecanismo que permite ao sistema perguntar: Dona Zilda, posso protocolar seu pedido agora? E aguardar confirmacao antes de executar acao irreversivel.

A novidade URL Mode Elicitation (SEP-1036) da spec 2025-11-25 e especialmente relevante: ao inves de pedir credenciais dentro do client MCP, o servidor pode enviar uma URL para que o usuario complete um fluxo OAuth em browser seguro. O client nunca manipula secrets. Para o Meu Cumpadre, isso significa fluxos de autorizacao gov.br mais seguros e compliance LGPD nativo.

## **2.6  Tasks: O Acompanhamento do Processo**

Tasks sao a primitiva experimental da spec 2025-11-25 que permite operacoes assincronas de longa duracao. Qualquer request pode retornar um task handle com estados (working, input\_required, completed, failed, cancelled). Para o Meu Cumpadre, Tasks modelam perfeitamente o ciclo de vida de um requerimento INSS, que pode levar de 45 a 180 dias.

*ANALOGIA OPERACIONAL: Cada requerimento INSS e um Task MCP. O usuario envia documentos (working), o INSS pede exigencia (input\_required), a Human API responde, o INSS concede (completed) ou indefere (failed). O Watchdog monitora status via polling do Task. Tudo rastreavel, auditavel, persistente.*

# **3  ARQUITETURA EM 4 TIERS DE PERSISTENCIA**

A persistencia no MCP nao e plana. E estratificada em quatro camadas com caracteristicas distintas de mutabilidade, retencao, seguranca e acesso. A estratificacao reflete principio fundamental: nem todos os dados sao iguais. O CPF de Dona Zilda e imutavel e permanente. O estado emocional dela e volatil e contextual. A foto do RG e documento probatorio com validade temporal. O log de quem acessou seus dados e registro de auditoria com retencao legal de 10 anos.

| Tier | Nome | Mutabilidade | Retencao | Armazenamento | Criptografia |
| ----- | ----- | ----- | ----- | ----- | ----- |
| 1 | Nucleo Identitario | Imutavel (append-only) | Permanente | PostgreSQL \+ repouso | AES-256 \+ Cloud KMS |
| 2 | Contexto Atual | Mutavel, versionado | 2 anos ativo \+ 5 arquivo | Firestore \+ Vector DB | AES-256 transito/repouso |
| 3 | Documentacao | Imutavel pos-hash | 5 anos ativo \+ 10 arquivo | Google Cloud Storage | AES-256 \+ SHA-256/doc |
| 4 | Log Auditoria | Imutavel (write-once) | 10 anos (LGPD) | Cloud Audit Logs \+ BigQuery | Criptografia nativa GCP |

## **3.1  Tier 1: Nucleo Identitario (Imutavel)**

O Tier 1 armazena a identidade fundamental do cidadao: CPF (chave primaria universal com validacao modulo 11), nome completo conforme documento oficial, data de nascimento (critica para calculo de idade e elegibilidade), nome da mae (chave secundaria para desambiguacao CNIS e Receita Federal), consentimento LGPD com timestamp de aceite, versao do termo, hash do documento e canal de coleta (WhatsApp audio ou texto), e data de criacao do perfil.

Principio de design: append-only. Dados do Tier 1 nunca sao sobrescritos. Se o nome precisa ser corrigido por retificacao judicial, a versao anterior permanece com flag de retificacao. Isso garante trilha de auditoria completa e compliance com LGPD Art. 18\.

## **3.2  Tier 2: Contexto Atual (Mutavel, Versionado)**

O Tier 2 e o tier mais dinamico. Captura o estado atual do relacionamento com o usuario: verticais ativas e progresso em cada uma, estado emocional estimado (confianca, medo, urgencia), demanda principal e demandas secundarias detectadas, nivel de literacia digital (escala 0-10), canal preferido (audio, texto, video), horario preferido de contato, e score de confianca progressivo.

Implementacao: Firestore real-time para perfis ativos (leitura inferior a 100ms) combinado com Vector DB (Qdrant) para busca semantica de historico. Versionamento automatico: cada atualizacao gera snapshot para rollback se necessario.

## **3.3  Tier 3: Documentacao Centralizada**

O Tier 3 e o cofre probatorio. Cada documento recebe processamento OCR via Google Vision MCP, hash SHA-256 para prova de integridade, classificacao automatica (RG, CPF, CNIS, CTPS, certidao, laudo medico, comprovante rural, DAP, RGP, bloco produtor), e metadados de qualidade (resolucao, legibilidade, data de emissao estimada).

*PROVA INLINE: O Tier 3 nao armazena apenas documentos. Armazena PROVAS. Cada item e vinculado a regra juridica especifica do Grimorio Previdenciario (3.265+ regras) e referencia legal correspondente. O dossie que sai do Tier 3 e uma Torre Reta probatoria que o INSS nao pode negar.*

## **3.4  Tier 4: Log de Auditoria (LGPD)**

O Tier 4 registra TUDO: quem acessou o que, quando, por que, com qual resultado. Cada entrada carrega timestamp UTC, identificacao do operador (IA, Anjo, estagiario, advogado), acao realizada, justificativa, resultado, e hash da entrada anterior (chain of custody). Retencao obrigatoria de 10 anos conforme LGPD.

Implementacao: Cloud Audit Logs para captura automatica de eventos GCP, com replicacao para BigQuery para analytics de padroes. Cada decisao do Router-Ethics gera entrada no Tier 4 com explicacao XAI completa, permitindo auditoria noh-a-noh se necessario.

# **4  STACK DE MCP SERVERS DO ECOSSISTEMA**

O ecossistema Meu Cumpadre opera com um consorcio de MCP Servers especializados, cada um responsavel por um dominio funcional. A orquestracao e feita pelo LangGraph via langchain-mcp-adapters, com o MultiServerMCPClient mantendo conexoes simultaneas.

| MCP Server | Funcao no Ecossistema | Transporte | Prioridade |
| ----- | ----- | ----- | ----- |
| WhatsApp Cloud API (custom) | Canal primario entrada/saida. Audio, texto, midia, localizacao | Streamable HTTP | CRITICA |
| PostgreSQL Server (oficial) | Persistencia de dossies, estados, perfis Tier 1 e 2 | STDIO | CRITICA |
| Google Vision OCR | Processamento de documentos fotografados | STDIO | CRITICA |
| Playwright (Microsoft) | Automacao gov.br quando necessario via Human API | STDIO | ALTA |
| Firestore (custom) | Perfis real-time, contexto mutavel, sessoes | Streamable HTTP | ALTA |
| BigQuery (custom) | Analytics, padroes, BEPS cruzamento, auditoria | Streamable HTTP | MEDIA |
| Cloud KMS (custom) | Criptografia, gestao de chaves, LGPD | STDIO | CRITICA |
| LangFuse (self-hosted) | Observabilidade, tracing, custos, debugging | Streamable HTTP | ALTA |
| Knowledge Graph Memory | Relacoes entre entidades, grafos de conhecimento | STDIO | MEDIA |
| Grimorio Juridico (custom) | RAG sobre 3.265+ regras previdenciarias | STDIO | CRITICA |

## **4.1  Migracao WhatsApp: Evolution API para Cloud API**

Decisao estrategica documentada no registro formal D01-D08: migracao da Evolution API (open-source, Baileys) para WhatsApp Cloud API (oficial Meta) antes da mudanca arquitetural Linked Device ID prevista para meados de 2026\. A Evolution API, apesar de 6.200+ stars no GitHub, depende de engenharia reversa do protocolo WhatsApp, o que representa risco operacional inaceitavel para atendimento a hipervulneraveis.

O MCP Server custom para WhatsApp Cloud API sera implementado sobre Streamable HTTP com suporte a: envio e recebimento de mensagens texto, audio transcrito via Whisper, imagens processadas via OCR, templates pre-aprovados pela Meta, e webhooks para notificacoes de status. A transicao usa estrategia de numero duplo para zero downtime.

## **4.2  Arquitetura Multi-LLM via MCP**

O Sistema Nervoso Soberano opera com tres camadas de LLM, orquestradas pelo MCP como protocolo unificador:

| Camada LLM | Modelo | Funcao | Dados Sensiveis | Custo Relativo |
| ----- | ----- | ----- | ----- | ----- |
| Triagem Rapida | Gemini 2.5 Flash | Classificacao inicial, NLU, perguntas simples | NAO (sem CPF/dados pessoais) | Baixo (GCP nativo) |
| Processamento Core | Llama 4 Scout (self-hosted GCP) | Todos dados sensiveis, CNIS, dossies, calculo | SIM (CPF, beneficio, laudos) | Medio (infra propria) |
| Orquestrador Etico | Claude Sonnet (via MCP) | Casos complexos, Router-Ethics Score \>=39, XAI | Apenas contexto anonimizado | Alto (5% dos casos) |

*A portabilidade do MCP garante que se amanha surgir um LLM melhor ou mais barato, a troca ocorre na camada de configuracao, sem refatoracao do core. O investimento em MCP Servers, Resources, Tools e Prompts permanece intacto.*

# **5  ORQUESTRACAO: LANGGRAPH \+ MCP \+ ROUTER-ETHICS**

## **5.1  O Padrao de Orquestracao**

O LangGraph oferece a melhor combinacao para o modelo Meu Cumpadre: gerenciamento de estado persistente via StateGraph, suporte nativo a ciclos e loops para fluxos iterativos de coleta documental, e integracao oficial com MCP via langchain-mcp-adapters.

O padrao de implementacao segue cinco etapas. Primeiro: o MultiServerMCPClient conecta todos os MCP Servers simultaneamente (WhatsApp, OCR, Database, Grimorio). Segundo: o agente recebe mensagem e carrega contexto do usuario via Resources MCP (perfil, historico, documentos). Terceiro: o Router-Ethics calcula score em menos de 800 milissegundos usando Tools MCP. Quarto: se o Score for igual ou superior a 39, ou se qualquer trigger dos blocos R ou A for ativado, a funcao interrupt() do LangGraph pausa o fluxo e roteia para a Task Queue humana. Quinto: o operador Human API executa a acao e o Command(goto=proceed) retoma o fluxo automaticamente.

## **5.2  Human-in-the-Loop Nativo**

O LangGraph implementa human-in-the-loop atraves da funcao interrupt(), que pausa a execucao em pontos criticos aguardando aprovacao humana. Quando combinado com Checkpointers (PostgreSQL ou Redis), permite interrupt/resume de conversas atraves de sessoes e dispositivos.

Isso e essencial para usuarios hipervulneraveis que podem interagir em multiplas sessoes ao longo de dias ou semanas. Dona Zilda pode enviar foto do RG na segunda-feira, responder pergunta sobre tempo de trabalho rural na quarta-feira, e receber a simulacao de beneficio na sexta-feira, tudo com contexto completo preservado pelo Checkpointer \+ MCP Tier 2\.

## **5.3  Router-Ethics 11.0 como MCP Tool**

O Router-Ethics opera como Tool MCP nativo: recebe parametros estruturados (tipo\_demanda, complexidade, vulnerabilidade, urgencia), executa a arvore hibrida de decisao com 105 nohs distribuidos em tres blocos (R: 30 nohs Muralha Regulatoria, P: 25 nohs Profundidade, A: 50 nohs Amuleto Fenix), calcula Score\_Final \= (0.40 x R) \+ (0.30 x P) \+ (0.30 x A), e retorna decisao binaria AUTONOMIA vs HANDOFF com explicacao XAI.

O Circuit Breaker Fenix e o mecanismo de seguranca final: se qualquer violacao grave de dignidade for detectada (A01 Desespero/Risco de vida, A13 Crise de saude mental, A30 Fome/Inseguranca alimentar), o sistema aborta a automacao instantaneamente e aciona handoff urgente com log permanente no Tier 4\.

*HIERARQUIA INVIOLAVEL: Dignidade do hipervulneravel \> Conformidade regulatoria \> Viabilidade tecnica. Esta hierarquia esta codificada no Router-Ethics e nao pode ser sobrescrita por nenhuma configuracao.*

# **6  FLUXO END-TO-END: DA MENSAGEM A CONCESSAO**

O usuario percebe apenas WhatsApp \+ problema resolvido. O backend orquestra um balE de agentes, MCP Servers, decisoes eticas e intervencoes humanas invisiveis.

## **6.1  Etapa 1: Entrada (WhatsApp-First)**

Usuario envia mensagem via WhatsApp. O MCP Server WhatsApp recebe e classifica o tipo de midia (texto, audio, imagem, video). Se audio: Whisper transcreve com suporte a sotaques regionais (Norte/Nordeste). Se imagem: OCR MCP processa. O LangGraph ativa agente conversacional com tom Cumpadre: Calma, cumpadre. Voce sempre mereceu. O MCP carrega Resources do perfil via URI mcp://perfil/{cpf}.

## **6.2  Etapa 2: Coleta Progressiva**

Diferente de formularios roboticos, a coleta e progressiva ao longo de dias ou semanas. Cada interacao alimenta o Tier 2 (Contexto Atual). O agente identifica gaps documentais e solicita fotos de documentos especificos. O OCR processa e classifica automaticamente. O Grimorio Juridico (MCP Server custom) valida elegibilidade em tempo real, cruzando dados coletados com as 3.265+ regras previdenciarias.

## **6.3  Etapa 3: Decisao (Router-Ethics)**

Score calculado em menos de 800ms. Se Score inferior a 39 e nenhum trigger R/A ativado: AUTONOMIA (fluxo automatizado continua). Se Score igual ou superior a 39, ou qualquer trigger R/A: HANDOFF (interrupt() pausa fluxo, Task Queue distribui para Anjo/estagiario/advogado conforme complexidade). Explicacao XAI gerada automaticamente em linguagem de 5a serie via Prompt MCP /explicacao\_xai.

## **6.4  Etapa 4: Processamento e Protocolo**

Agentes IA montam dossie Proof-First via Tool montar\_dossie. Human API executa acoes em gov.br quando necessario (login, download CNIS, protocolo de requerimento). Estado persistido no Checkpointer LangGraph \+ MCP Tiers 2 e 3\. O sprint interno triagem-ate-protocolo INSS e de 48 horas. Apos o protocolo: analise INSS (media 50 dias), possibilidade de exigencias, prazo bancario ate 24 dias (DDB ate DIP).

*CORRECAO NARRATIVA 48H: O prazo de 48h e o sprint INTERNO triagem-protocolo. NUNCA prometemos prazo de concessao do beneficio. Prometemos transparencia, acompanhamento e eficiencia no que esta sob nosso controle.*

## **6.5  Etapa 5: Monitoramento (Watchdog)**

E-mail mascarado configurado recebe notificacoes do INSS. Scraping passivo detecta exigencias e atualizacoes de status. Atualizacao em tempo real no WhatsApp do usuario. O Watchdog opera como Task MCP de longa duracao, com estados mapeados: working (aguardando INSS), input\_required (exigencia recebida), completed (concessao), failed (indeferimento, aciona passarela para advogado).

## **6.6  Etapa 6: Saida e Evento Cascata**

Beneficio concedido gera notificacao WhatsApp com explicacao XAI. Automaticamente, o Prompt MCP /cascata apresenta oportunidades cross-vertical: aprovacao de aposentadoria por invalidez \+ doenca grave dispara passarela para isencao IRPF (Tributario), blindagem bancaria contra consignados predatorios (Consumidor), telemedicina para laudo complementar (Saude), verificacao de direito a adicional de 25% por grande invalidez (Previdenciario). LTV estimado do Evento Cascata em 24 horas: R$ 171.000.

# **7  SEGURANCA, LGPD E COMPLIANCE**

## **7.1  LGPD e o Modelo Human API**

O modelo Human API, onde operadores acessam sistemas com credenciais delegadas do usuario, configura tratamento de dados pessoais sob a LGPD. O Meu Cumpadre atua como Operador (Art. 5, VII) enquanto o usuario e Controlador de seus proprios dados.

**Consentimento valido (Art. 8):** Livre, informado, inequivoco, finalidade determinada, clausula destacada, revogavel. Coletado via audio WhatsApp com hash no Tier 1\.

**Seguranca de credenciais (Arts. 46-49):** Vault criptografado AES-256, nunca em logs, acesso Just-in-Time, MFA quando disponivel. URL Mode Elicitation para fluxos OAuth gov.br.

**Auditoria completa:** Log de cada acao no Tier 4 com timestamp, operador, acao, resultado, justificativa. Chain of custody com hash encadeado.

## **7.2  OAB e a Blindagem Regulatoria**

O Bloco R do Router-Ethics dedica 30 nohs exclusivamente a blindagem contra exercicio ilegal da advocacia. O Meu Cumpadre opera como Servicos de Tecnologia e Orquestracao Documental (atividade-meio), NUNCA como servico juridico (atividade-fim). Terminologia obrigatoria: orientacao, organizacao documental, triagem, dossie, simulacao. Terminologia proibida: consulta juridica, parecer, acao, causa, processo.

Casos complexos (Score superior a 70\) sao encaminhados para advogados parceiros via Marketplace Etico. O Meu Cumpadre cobra B2B lead fee, nao honorarios advocaticios, com segregacao de notas fiscais para compliance total.

## **7.3  Arquitetura Soberana de Dados**

Decisao estrategica documentada: dados sensiveis (CPF, numeros de beneficio, documentos pessoais) NUNCA transitam por APIs de terceiros em nuvem publica. O Llama 4 Scout e self-hosted em GCP, garantindo soberania total sobre dados sensiveis. A API do DeepSeek em nuvem foi explicitamente descartada por risco geopolitico e compliance LGPD.

# **8  METRICAS DE PERFORMANCE E IMPACTO**

## **8.1  Metricas Finitas (Combustivel)**

| Metrica | Meta | Fonte de Dados |
| ----- | ----- | ----- |
| Leitura de contexto MCP | \< 100ms | Firestore \+ cache Redis |
| Calculo Router-Ethics | \< 800ms | Tool MCP dedicado |
| Capacidade usuarios | 500.000 | GCP auto-scaling |
| Capacidade documentos | 10.000.000 | GCS \+ BigQuery |
| Custo por usuario/mes | R$ 0,05 | Cloud billing |
| Taxa de autonomia (sem handoff) | \>= 70% | Router-Ethics logs |
| Taxa aprovacao INSS | \>= 84% | Watchdog \+ DATAPREV |
| NPS | \>= 85 | Pesquisa pos-atendimento |
| Churn rate | \<= 5% | Analytics |
| Uptime SLA | 99,9% | Cloud Monitoring |

## **8.2  Metricas Infinitas (Bussola)**

| Metrica Infinita | O Que Mede | Codigo DNA Ativado |
| ----- | ----- | ----- |
| Autonomia Progressiva | Quantos deixam de precisar de nos | Codigo Supremo |
| Impacto Sistemico | R$ bilhoes nao capturados por predadores | Loop Quebrado |
| Efeito Rede | Crescimento organico boca-a-boca | Ressonancia Morfica |
| Pressao Sistemica | Melhorias gov.br forcadas pela nossa existencia | Torre Reta |
| Ressignificacao Psicologica | Zildas que lembram: Eu sempre mereci | Dissolucao Falsa |

# **9  ROADMAP DE IMPLEMENTACAO MCP**

| Fase | Periodo | Entregas MCP | Gate |
| ----- | ----- | ----- | ----- |
| Fundacao | Q2 2026 | MCP Servers core (WhatsApp Cloud, PostgreSQL, OCR). Tier 1+2 implementados. Router-Ethics como Tool MCP. | 50 usuarios piloto |
| Consolidacao | Q3 2026 | Tier 3+4 completos. Grimorio RAG como MCP Server. Checkpointer PostgreSQL. LangFuse integrado. | 500 usuarios |
| Escala | Q4 2026 | Multi-LLM operacional (Gemini+Llama+Claude). Tasks asincronas para Watchdog. Evento Cascata automatizado. | 2.000 usuarios |
| Expansao | Q1-Q2 2027 | 8 verticais com MCP Servers dedicados. Passarelas automatizadas. BigQuery analytics em producao. | 10.000 usuarios |
| Soberania | S2 2027 | Fine-tuning Llama com dados Grimorio. MCP Apps (UI interativa). Cartao do Cumpadre integrado. | 50.000 usuarios |

**NOTA FINAL**

Este documento nao e especificacao tecnica fria. E codigo-fonte instalado no sistema nervoso de um ecossistema que existe para devolver dignidade a quem o Estado prometeu proteger e nao protegeu.

Cada MCP Server descrito aqui e um orgao desse corpo. Cada Tool e uma mao que age. Cada Resource e uma memoria que persiste. Cada Prompt e uma voz que acolhe. Cada Elicitation e um pedido de permissao que respeita. Cada Task e uma promessa de acompanhamento que nao abandona.

O MCP vai evoluir. Novas specs virao. Novos servidores serao criados. A arquitetura multi-LLM vai pivotar conforme modelos melhores e mais baratos surgirem. Mas a camada MCP permanece intacta porque foi construida sobre protocolo aberto, governanca neutra e principios que transcendem tecnologia.

As ferramentas mudarao. As verticais pivotarao. O modelo se reinventara. Mas a frequencia permanece: restituir a 40 a 60 milhoes de hipervulneraveis o acesso que sempre foi deles por direito.

*Lucro e combustivel. Causa e destino. Jogo e infinito.*

— DNA Estrategico Meu Cumpadre v4.0