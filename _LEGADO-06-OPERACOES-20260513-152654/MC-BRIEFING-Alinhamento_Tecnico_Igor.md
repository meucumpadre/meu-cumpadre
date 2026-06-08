# Meu Cumpadre — Briefing de alinhamento técnico-estratégico

**O Igor tem razão.** O documento estratégico do CEO não é especificação de MVP, os custos de IA precisam de controle rigoroso e nenhum desenvolvedor solo deveria herdar um escopo de produto final como se fosse sprint 1. Este briefing existe para reconciliar a visão estratégica com a realidade técnica, construindo **em cima** do que já foi feito — não recomeçando do zero. É uma proposta aberta: Igor, Carlos, Alessandro, Juliana e Beto podem (e devem) questionar, ajustar e complementar cada ponto antes de qualquer linha de código nova.

O projeto Meu Cumpadre atende **40-60 milhões de cidadãos hipervulneráveis** no acesso a benefícios previdenciários do INSS, operando via WhatsApp com uma equipe de 5 pessoas. O fluxograma de setembro/2025 com 4 entidades e 71 requisitos funcionais permanece como alicerce válido. O que mudou desde então foi a camada estratégica — nomenclaturas, modelo de negócio B2B2C e a jornada E0-E7 — e este documento formaliza essas mudanças para que o backend reflita a realidade atual sem surpresas.

---

## 1. De "Agência" a "Escritório Alencar": o dicionário de tradução

Entre setembro/2025 e abril/2026, a linguagem do projeto evoluiu enquanto o código ficou parado. O resultado é um desalinhamento semântico que gera confusão desnecessária. A tabela abaixo mapeia cada termo do fluxograma original para o termo atual, com justificativa funcional para que Igor saiba exatamente o que cada entidade representa no backend.

| Termo no fluxograma (set/2025) | Termo atual (abr/2026) | O que significa para o backend |
|---|---|---|
| **Entidade "Agência"** | Escritório Alencar Advogados Associados (Dra. Juliana Alencar) | Parceiro B2B com ~95% de exclusividade. Na modelagem, é a entidade `Partner` — possui CNPJ, inscrição OAB, configura checklists por espécie de benefício e visualiza casos atribuídos. |
| **Entidade "Advogado"** | Parceiro jurídico B2B (atividade-fim OAB) | Não é um "usuário" genérico. É o responsável legal pelos casos. Na prática atual, é a Dra. Juliana. O sistema deve suportar múltiplos parceiros futuramente, mas o MVP atende **um escritório**. |
| **Entidade "Cliente/Usuário"** | Cidadão hipervulnerável (B2C) — persona Dona Zilda | Pessoa de 68 anos, analfabeta digital, que interage exclusivamente via WhatsApp com áudios e fotos. O `Citizen` no banco precisa de campos mínimos: nome, CPF, telefone WhatsApp, data de nascimento. Nada de e-mail obrigatório ou login com senha. |
| **Entidade "Admin"** | Alessandro (CEO/validador) + Beto (operador) | Dois perfis no mesmo role `Operator`, diferenciados por `permission_level`. Alessandro aprova entradas no pipeline pago; Beto executa operações diárias. |
| **"Router-Ethics 47 nós threshold 40"** | Router-Ethics 11.0 (140 nós + 7 hooks, 3 blocos D>C>V, thresholds 39 e 70) | Para o MVP, traduz-se em um **serviço de scoring** que recebe dados coletados na triagem e retorna uma classificação A/B/C. Os 105 nós são regras de negócio — não precisam ser 105 endpoints. Pode ser implementado como um módulo NestJS com lógica condicional estruturada, alimentado progressivamente. |

A regra prática é simples: **onde o fluxograma diz "Agência", leia "Partner"; onde diz "Cliente", leia "Citizen"; onde diz "Admin", leia "Operator".** A arquitetura de entidades que Igor já construiu — autenticação, CRUD básico, relações entre entidades — absorve essa renomeação sem refatoração profunda. É uma questão de aliases e ajustes de schema, não de reescrita.

---

## 2. O modelo B2B2C e o firewall da OAB explicados em termos de API

Este é provavelmente o ponto que mais gerou ruído entre a documentação estratégica e a especificação técnica. O modelo B2B2C não é um conceito abstrato — ele define **quais endpoints o backend expõe, para quem, e o que cada perfil pode fazer**.

O Meu Cumpadre (CNPJ 6201-5/01, atividade-meio) presta **infraestrutura tecnológica** ao Escritório Alencar. A Dra. Juliana (OAB, atividade-fim) é responsável por todo o contencioso: peticionamento, audiências, pareceres, estratégia processual. O cidadão (Dona Zilda) chega via WhatsApp, é atendido pela plataforma MC na coleta e triagem, e quando entra no pipeline jurídico passa a ser cliente do escritório Alencar — não do MC.

Essa separação não é burocracia. **O Art. 1º da Lei 8.906/94 e o Provimento 205/2021 da OAB proíbem que empresas de tecnologia pratiquem atos privativos de advocacia.** Em 2021, a OAB investigou 132 legaltechs e moveu ações contra mais de 20. Empresas como Resolvvi e Liberfly enfrentaram processos por cruzar a linha entre atividade-meio e atividade-fim. A distinção é clara na jurisprudência: o teste é se a plataforma "se limita a fornecer ferramentas ou se ela efetivamente presta um serviço que se enquadra no rol de atos privativos."

Para o backend, isso se traduz em regras concretas de permissão:

**O que o sistema MC FAZ (endpoints e funcionalidades do backend):**

- Monitoramento de trâmites processuais — polling periódico ou webhook de atualizações de status no Meu INSS, armazenamento em `case_timeline`
- Comunicação operacional com o cidadão B2C — mensagens de status, lembretes de documentos, convocações via WhatsApp (Evolution API)
- Instrução documental — checklist de documentos por espécie de benefício, OCR via Gemini Flash, validação de completude do dossiê
- Convocação do cidadão — notificações para comparecer, enviar documentos, assinar procuração
- Montagem do dossiê Proof-First — agregação de documentos, geração de PDF consolidado, envio para assinatura via ZapSign (ADR-014)

**O que o sistema MC NÃO FAZ (bloqueado por design):**

- Reuniões jurídicas entre advogado e cliente — ficam FORA da plataforma ou em canal segregado que o MC não monitora nem armazena
- Pareceres ou opinião legal — nenhum endpoint gera texto jurídico opinativo para o cidadão
- Estratégia processual — o campo `legal_strategy` no caso pertence exclusivamente ao parceiro B2B
- Representação em qualquer instância — o MC não protocola petições em nome do cidadão; o advogado faz isso usando dados que a plataforma organizou

Na prática arquitetural, isso significa que o módulo `partners/` no NestJS expõe um dashboard onde a Dra. Juliana visualiza casos atribuídos, documentos coletados e prazos, mas a comunicação profissional sigilosa (a relação advogado-cliente protegida pelo Art. 7º do Estatuto da OAB) opera em canal separado. **O backend do MC é um CRM operacional com firewall jurídico, não um sistema de gestão de escritório de advocacia.**

Para referência de mercado: a **Advbox**, legaltech brasileira fundada em 2014 por Eduardo Koetz (advogado previdenciário) e Murilo Mella (programador), começou exatamente com **2 pessoas** — um advogado e um dev. O MVP interno chamava-se "Flow" e era um gerenciador de tarefas para o próprio escritório de previdência. Só se tornou produto comercial após 3 anos. A Advbox hoje é uma das maiores legaltechs brasileiras, mas nasceu resolvendo o problema de **um escritório de INSS com um programador**. O paralelo com o Meu Cumpadre é direto.

---

## 3. A jornada E0 a E7 traduzida para o que o backend precisa entregar

A jornada E0-E7 descrita nos documentos estratégicos pode parecer um escopo imenso. Não é — se entendida como um **roadmap progressivo** em que cada etapa é um módulo independente. Abaixo, cada etapa está traduzida para endpoints, entidades de banco e integrações concretas.

### E0 — Sinal Fraco (intake via WhatsApp)

O cidadão manda uma mensagem no WhatsApp. Pode ser texto, áudio ou até uma foto de um documento. O sistema precisa capturar essa intenção e criar um registro.

No backend, E0 é um **webhook da Evolution API** que recebe a mensagem, identifica o remetente pelo número de telefone, verifica se já existe um `Citizen` no banco (busca por `phone_whatsapp`), e cria ou atualiza um registro de `Conversation` no Redis com o estado atual do diálogo. Se for áudio, enfileira no BullMQ para transcrição via Gemini Flash. O resultado é um `Case` com status `intake` e os dados brutos da primeira interação.

### E1 — Triagem (coleta progressiva + scoring)

Aqui o bot conduz uma conversa estruturada para coletar informações mínimas: idade, tipo de benefício desejado, tempo de contribuição estimado, condição de saúde (se aplicável). A coleta é **progressiva** — não é um formulário de 30 campos de uma vez. São 8-12 perguntas em linguagem simples, espaçadas naturalmente na conversa.

O backend mantém o estado da conversa no Redis (`session:{phoneNumber}`) e, quando a coleta atinge o mínimo necessário, submete os dados ao módulo de scoring (Router-Ethics simplificado). O scoring retorna uma classificação: **Rota A** (caso forte, alta probabilidade de deferimento), **Rota B** (caso viável com ressalvas), **Rota C** (caso fraco ou fora do escopo). O `Case` é atualizado com `route` e `score`.

### E2 — Deliberação (decisão humana)

O caso triado aparece no dashboard do Beto (operador) ou Alessandro (validador). Um humano decide se o caso entra no pipeline pago. Isso é um endpoint `PATCH /cases/:id/deliberation` com `{ decision: 'approved' | 'rejected' | 'pending', notes: string }`. Nenhuma automação aqui — é decisão humana informada pelo score.

### E3 — Dossiê (coleta de documentos + montagem Proof-First)

O cidadão recebe via WhatsApp uma lista de documentos necessários (checklist específico por espécie de benefício: aposentadoria por idade, BPC/LOAS, auxílio-doença etc.). Ele fotografa e envia pelo WhatsApp. O backend recebe via webhook da Evolution API, armazena o arquivo, enfileira para OCR (Gemini Flash extrai dados do documento), e atualiza o checklist.

Entidades envolvidas: `CaseDocument` (id, case_id, document_type, file_url, ocr_text, ocr_status, validated), e uma tabela `DocumentChecklist` que define quais documentos são necessários por espécie de benefício. Quando todos os documentos obrigatórios estão coletados e validados, o dossiê é montado como PDF consolidado.

### E4 — Protocolo (login gov.br + upload INSS)

**Fase MVP: manual.** O operador Beto faz login no gov.br/Meu INSS com a procuração digital do cidadão, faz upload do dossiê e protocola o requerimento. O sistema registra o número de protocolo e a DER (Data de Entrada do Requerimento) no `Case`.

**Fase pós-MVP:** Automação via Playwright. Um worker BullMQ recebe o job, abre browser headless, faz login no gov.br, navega ao Meu INSS, faz upload dos documentos e captura o protocolo. Importante: gov.br usa reCAPTCHA, sessões curtas e muda a UI sem aviso — o Playwright precisa de seletores resilientes (`getByRole`, `getByLabel`) e retry logic com screenshot em caso de falha. Custo estimado de serviço de CAPTCHA: ~R$5-15/mil solves.

### E5 — Acompanhamento (monitoramento mensal)

Um job agendado (cron via BullMQ ou N8N) verifica mensalmente o status de cada caso ativo no Meu INSS. Se houver mudança de status ou exigência, cria um evento em `case_timeline` e dispara notificação via WhatsApp para o cidadão e alerta no dashboard para o operador.

### E6 — Desfecho (resultado + cobrança)

Quando o INSS defere ou indefere, o sistema atualiza o status do caso. Se deferido, aciona o fluxo de cobrança Φ2 via Asaas (PIX) e oferece o serviço Guardião (monitoramento contínuo). Se indeferido, sinaliza para o parceiro jurídico avaliar recurso.

### E7 — Soberania (monitoramento contínuo pós-concessão)

Monitoramento ativo contra fraude de consignado, empréstimos não autorizados e alterações indevidas no benefício. Este é um módulo de **retenção/fidelização** — definitivamente pós-MVP.

**Para o MVP, o escopo real são E0 a E3, com E4 manual.** As etapas E5-E7 são módulos futuros que não bloqueiam o lançamento.

---

## 4. O MVP mínimo: lições de quem já fez com equipe pequena

A definição de MVP para o Meu Cumpadre não precisa ser inventada — ela pode (e deve) se basear em padrões comprovados por legaltechs brasileiras que começaram em condições similares.

A **RevisaPrev**, startup de previdência acelerada pela Aleve LegalTech Ventures, começou em 2020 com **6 pessoas em uma sala**. O fundador Bruno Motomatsu relata: "Nosso modelo não escalava de jeito nenhum porque tínhamos uma limitação operacional — éramos seis pessoas." A virada foi investir ~R$25 mil para um desenvolvedor transformar a análise previdenciária manual em algoritmo. Começaram com **uma única tese** (Revisão da Vida Toda), escalaram para 25+ teses, e hoje fazem **10 mil análises por mês** com captação de R$3,8M em investimento.

A **Previdenciarista**, fundada em 2013 por dois advogados previdenciários, começou como um site de conteúdo — artigos e modelos de petições. Evoluiu para plataforma automatizada: upload de CNIS → cálculo automático de benefício → geração de petição → gestão de cliente. Hoje atende **9 mil advogados** e realizou mais de **1 milhão de cálculos previdenciários** só em 2020.

A **RIA Systems** construiu o produto "Briefing Jurídico" que roda **nativamente no WhatsApp**: o cliente responde 8-12 perguntas inteligentes, o sistema gera um briefing jurídico, e o advogado recebe o caso qualificado. Equipe atual de 11 pessoas, recebeu US$80 mil de investimento-anjo do fundador da Omie.

O padrão que emerge é consistente: **começar com um fluxo só, resolver um problema específico, e expandir depois.** A metodologia "Wizard of Oz" — onde o usuário interage com o que parece ser um sistema automatizado, mas humanos executam por trás — é especialmente adequada para serviços jurídicos. Permite testar quais tipos de caso são mais comuns, entender a persona real (não a imaginada) e descobrir quais orientações são mais valiosas, tudo antes de investir em automação.

### Escopo proposto para o MVP (3-4 meses, 1 dev + 1 UX)

**Incluído no MVP:**

- Intake via WhatsApp com bot conversacional simples (8-12 perguntas de triagem)
- Cadastro de cidadão por número de telefone (sem login/senha)
- Criação de caso com classificação por espécie de benefício
- Scoring simplificado (versão reduzida do Router-Ethics — regras condicionais, não IA complexa)
- Coleta de documentos via WhatsApp (foto → armazenamento → checklist)
- OCR básico via Gemini Flash para extrair dados de documentos
- Dashboard operacional web para Beto (lista de casos, status, timeline)
- Área do parceiro jurídico para Juliana (visualização de casos atribuídos e documentos)
- Integração com Asaas para cobrança PIX no deferimento
- Autenticação JWT com 3 roles: citizen (via WhatsApp), operator, partner

**Excluído do MVP (Fase 2+):**

- Automação Playwright para gov.br/Meu INSS (protocolo manual na Fase 1)
- Assinatura eletrônica via ZapSign (manual na Fase 1; ADR-014, substitui Autentique)
- Router-Ethics completo com 105 nós
- Módulo Guardião (E7)
- IA complexa para análise de CNIS/cálculos previdenciários
- Multi-escritório (MVP atende apenas Escritório Alencar)
- Jurimetria e analytics avançados

Esse recorte é coerente com benchmarks de mercado. Dados da indústria de SaaS indicam que um MVP básico para plataformas reguladas leva **7-15 semanas** de desenvolvimento com equipe enxuta. O ciclo proposto de 3-4 meses (12-16 semanas) é realista se o escopo for disciplinado.

---

## 5. As preocupações do Igor, reconhecidas e endereçadas com dados

A reunião de 04/04/2026 trouxe preocupações legítimas que merecem respostas baseadas em dados, não em otimismo.

### Custo de IA: menor do que estimado

O cenário apresentado de R$0,003/mensagem texto e R$0,05/áudio era conservador — e mesmo assim viável. Com os preços atuais do **Gemini 2.5 Flash** (US$0,15/milhão de tokens de input, US$0,60/milhão de output), os números reais são ainda melhores. Uma mensagem de triagem típica (~500 tokens input + ~200 tokens output) custa aproximadamente **R$0,001** — três vezes menos que o estimado. Processamento de 1 minuto de áudio sai por **R$0,005-0,01**, dez vezes menos que o cenário R$0,05.

Além disso, o Gemini oferece **Context Caching** (90% de desconto em tokens cacheados) e **Batch API** (50% de desconto para processamento assíncrono). Com caching de system prompts — e a triagem usa o mesmo prompt base para todos os cidadãos — o custo operacional de IA para **1.000 interações/dia** fica em torno de **R$5-15/mês**. O free tier (1.000 requests/dia) cobre todo o período de desenvolvimento e testes.

### Complexidade do stack: já está simplificada

O stack proposto não adiciona nada novo ao que já está rodando no servidor **31.97.167.252**. Redis, Coolify e N8N já estão operacionais. A proposta é manter tudo e apenas conectar as peças:

| Componente | Status | Ação necessária |
|---|---|---|
| NestJS + TypeScript + MySQL | Igor já construiu a base | Ajustar schema, adicionar módulos |
| Redis | Já rodando no servidor | Usar para sessões WhatsApp + BullMQ |
| N8N | Já rodando (aposentadorianamao.com.br) | Migrar domínio, criar workflows |
| Coolify | Já rodando | Deploy do NestJS, SSL automático |
| Evolution API | Já planejado | Deploy via Docker no Coolify |
| Asaas | API REST padrão | Integração direta, sem SDK pesado |
| ZapSign (ADR-014) | API REST/JSON | Pós-MVP (Fase 2) |
| Gemini Flash | API REST | Módulo `ai/` no NestJS |

O custo mensal de infraestrutura estimado para o MVP completo é de **R$200-400/mês** (VPS, domínio, ZapSign plan, transações Asaas). Não há licenças caras nem dependências proprietárias.

### Escopo: é MVP, não produto final

O documento estratégico de 40+ páginas do Alessandro descreve o **produto final em 2-3 anos**. O MVP é uma fração disso. A analogia mais precisa é a da RevisaPrev: eles começaram com uma tese, um algoritmo e 6 pessoas. Não tentaram resolver todas as espécies de benefício no dia 1. O MVP do MC deve seguir a mesma lógica: **uma jornada completa (E0-E3 + E4 manual) para uma espécie de benefício (aposentadoria por idade, por exemplo), com um escritório parceiro.**

### O que já foi construído é fundação, não lixo

O fluxograma de autenticação, o backend NestJS com TypeORM, a lógica de entidades com 4 roles, os 71 requisitos funcionais mapeados — tudo isso é a base. A proposta é renomear entidades (Agência → Partner, Cliente → Citizen), adicionar os módulos de WhatsApp e documentos, e conectar às integrações já disponíveis. A estimativa de esforço para adaptar o schema existente é de **1-2 sprints** (2-4 semanas), não de reescrita.

---

## 6. Stack técnico reconciliado: arquitetura modular para 1 dev

A arquitetura proposta segue o padrão modular nativo do NestJS, onde cada domínio de negócio é um módulo independente com seu controller, service e entities. Isso permite que Igor trabalhe em um módulo por vez sem quebrar os demais.

```
src/
├── modules/
│   ├── auth/           → JWT + Passport, guards por role
│   ├── citizens/       → Perfis, CPF, contato WhatsApp
│   ├── partners/       → Escritório Alencar (B2B)
│   ├── cases/          → Casos INSS, workflow de status
│   ├── documents/      → Upload, OCR, dossiê
│   ├── whatsapp/       → Camada Evolution API
│   ├── payments/       → Asaas PIX
│   ├── ai/             → Gemini Flash triagem
│   └── notifications/  → Mensagens outbound
├── common/
│   ├── guards/         → JwtAuthGuard, RolesGuard
│   ├── decorators/     → @Roles(), @CurrentUser()
│   └── filters/        → Exception handling
├── config/             → TypeORM, Redis, filas
└── queues/             → Processors BullMQ
```

O schema MySQL mantém a estrutura relacional que Igor já conhece. As entidades principais são **partners** (escritório B2B), **operators** (Alessandro, Beto), **citizens** (Dona Zilda), **cases** (requerimento INSS com status, espécie, score), **case_documents** (arquivos coletados com OCR) e **case_timeline** (histórico de eventos). A autenticação usa JWT com payload `{ sub, role, partnerId }` e três tipos de acesso: cidadão (autenticado por telefone WhatsApp, sem senha), operador (email/senha) e parceiro (email/senha com escopo restrito aos seus casos).

Para filas assíncronas, o **BullMQ** (via `@nestjs/bullmq`) usando o Redis já disponível gerencia jobs de processamento de documentos, chamadas Gemini Flash, envio de mensagens WhatsApp rate-limited e, futuramente, automação Playwright. O Bull Board serve como dashboard de monitoramento de filas — uma view web simples que não requer desenvolvimento custom.

A comunicação entre NestJS e N8N é bidirecional via HTTP: NestJS dispara workflows no N8N via webhook, e N8N chama endpoints da API NestJS para atualizar dados. Ambos compartilham acesso ao MySQL e Redis dentro da rede Docker interna do Coolify, sem expor portas desnecessárias.

### Ponto de atenção sobre a Evolution API

A Evolution API suporta dois modos de conexão: **Baileys** (gratuito, protocolo não-oficial do WhatsApp Web) e **WhatsApp Cloud API oficial** (pago, ~R$0,25-0,40 por conversa, aprovado pela Meta). Para o MVP e testes, Baileys é suficiente. Para produção com cidadãos vulneráveis, a recomendação é migrar para a API oficial para evitar risco de banimento do número — perder o canal de comunicação com Dona Zilda por ban do WhatsApp seria catastrófico.

### LGPD desde o dia 1

O sistema processa dados sensíveis (saúde, previdência) de população vulnerável. A LGPD (Art. 11, II, d) permite processamento sem consentimento explícito quando indispensável para "exercício regular de direitos em processo judicial, administrativo e arbitral" — o que cobre o caso de uso previdenciário. Ainda assim, boas práticas recomendam consentimento via WhatsApp em linguagem simples: "Vamos guardar seus documentos médicos para ajudar seu advogado no processo do INSS. Tudo bem? Responda SIM para aceitar." A ANPD exige que informações para idosos sejam "simples, claras, acessíveis e adequadas ao seu entendimento."

Na prática para o backend: armazenar o registro de consentimento (timestamp + método + texto aceito), criptografar PII em repouso (CPF, dados de saúde), implementar `soft_delete` com política de retenção (dados de caso ativo retidos durante o processo; após conclusão, retidos por 5 anos conforme CDC; registros médicos por 20 anos), e restringir acesso por role — Juliana só vê casos atribuídos a ela, Beto vê painel operacional, cidadão vê apenas seu próprio status.

---

## 7. Faseamento proposto: quatro fases em quatro meses

O cronograma abaixo é uma proposta para discussão. Os prazos são estimativas baseadas em benchmarks de legaltechs brasileiras com equipes enxutas e consideram que Igor trabalha full-time no backend enquanto Carlos entrega as telas usando o template já comprado.

### Fase 1 — Meses 1-2: "Do WhatsApp ao dossiê" (E0-E3)

Este é o core do MVP. O cidadão manda mensagem no WhatsApp, o sistema faz triagem, coleta documentos e monta o dossiê.

**Semanas 1-2: Fundação**
Ajuste do schema existente (renomear entidades, adicionar campos), deploy do Evolution API no Coolify, webhook básico para receber mensagens WhatsApp, autenticação JWT com os 3 roles. Carlos entrega wireframes do dashboard operacional.

**Semanas 3-4: Fluxo conversacional**
Sessão de conversa no Redis, bot de triagem com perguntas progressivas (texto simples, sem IA inicialmente — a IA entra como upgrade, não como requisito), criação de caso a partir da conversa, classificação por espécie de benefício.

**Semanas 5-6: Coleta de documentos**
Recebimento de fotos/PDFs via WhatsApp, armazenamento no servidor (MinIO ou filesystem local), checklist por espécie de benefício, notificação de documentos pendentes. Integração Gemini Flash para OCR — extrair dados de RG, CPF, CTPS fotografados.

**Semanas 7-8: Montagem de dossiê + scoring**
Consolidação dos documentos em PDF único, scoring simplificado (regras condicionais, não o Router-Ethics completo), endpoint de deliberação para Alessandro/Beto aprovar entrada no pipeline. Carlos entrega frontend do dashboard operacional.

**Entregável da Fase 1:** Um cidadão manda mensagem no WhatsApp → bot coleta informações → operador vê o caso no dashboard → cidadão envia documentos → sistema monta dossiê → operador aprova ou rejeita.

### Fase 2 — Meses 2-3: "Do dossiê ao INSS" (E4-E5)

**Semanas 9-10: Protocolo manual assistido**
Interface para Beto registrar protocolo INSS (número, DER, status) após fazer o upload manualmente no Meu INSS. Timeline do caso atualizada. Notificação via WhatsApp ao cidadão: "Seu requerimento foi protocolado no INSS."

**Semanas 11-12: Acompanhamento**
Job agendado (cron/N8N) para verificar status — inicialmente por checagem manual do operador com registro no sistema. Alertas de exigência via WhatsApp. Endpoint para atualizar status do caso.

**Entregável da Fase 2:** Caso protocolado com rastreamento, cidadão recebe atualizações de status via WhatsApp, operador tem visão completa do pipeline.

### Fase 3 — Meses 3-4: "Dashboard e pagamentos" (operacional)

**Semanas 13-14: Dashboard operacional completo**
Visões filtradas para Beto (todos os casos, métricas operacionais) e Alessandro (aprovações pendentes, KPIs). Carlos finaliza interface responsiva.

**Semanas 15-16: Área do parceiro + pagamentos**
Dashboard restrito para Dra. Juliana (casos atribuídos, documentos, prazos — sem acesso à comunicação cidadão-MC). Integração Asaas para cobrança PIX quando caso é deferido. Webhook de confirmação de pagamento.

**Entregável da Fase 3:** Plataforma operacional completa para os 3 perfis (operador, parceiro, cidadão via WhatsApp), com fluxo de pagamento funcional. **Este é o MVP.**

### Fase 4 — Pós-MVP: automação e expansão

Automação Playwright para gov.br/Meu INSS, assinatura eletrônica via ZapSign (ADR-014), Router-Ethics completo (105 nós), módulo Guardião (E7), suporte a múltiplos escritórios parceiros, IA avançada para análise de CNIS e cálculo de benefícios, jurimetria. Cada item entra como módulo independente, priorizado por impacto operacional.

---

## Conclusão: o que muda a partir deste documento

Este briefing não é um mandato. É um mapa que traduz a evolução estratégica dos últimos 6 meses para a linguagem que o backend precisa. Os pontos não-negociáveis são poucos: o firewall OAB (o sistema não pode praticar advocacia), a LGPD (dados sensíveis de vulneráveis exigem cuidado desde o dia 1), e o escopo mínimo (E0-E3 + E4 manual, não o produto final).

Tudo o mais é ajustável. Se Igor avaliar que o scoring simplificado deveria usar tabela de decisão em vez de lógica condicional, ótimo. Se Carlos identificar que o fluxo de coleta de documentos precisa de uma etapa intermediária, incorpora. Se Juliana precisar de um campo adicional na visualização de casos, adiciona. A arquitetura modular do NestJS existe justamente para isso — módulos independentes que evoluem sem quebrar o sistema.

O benchmark mais relevante é o da Advbox: **1 advogado + 1 dev construíram um MVP interno em meses, que se tornou um produto comercial em 3 anos, e hoje é uma das maiores legaltechs do Brasil.** O Meu Cumpadre está na mesma posição inicial, com a vantagem de já ter backend parcialmente construído, servidor rodando e stack definido. O próximo passo é validar este documento com toda a equipe, ajustar o que for necessário e começar a Fase 1 com escopo travado.

A proposta está aberta. Igor, a palavra é sua.