---
title: Memória de Entendimento — Meu Cumpadre × Carlos × Igor × Claude
data: 2026-05-10
fase: 2 (descritivo, não-assinável)
escopo: fusão documental da pasta "Ata de Reuniões Código Documentação e Contrato"
protocolo: Proof-First / D > C > V (V — viabilidade operacional)
stakeholders: Alessandro de Souza Neves, Carlos Augusto Bittencourt Batista, Igor Fernandes Barreto, Claude
status: WIP — aguardando revisão dos stakeholders
---

# Memória de Entendimento

## Meu Cumpadre × Carlos × Igor × Claude

> Documento descritivo (memória de entendimento, não-contratual) produzido a partir da leitura sistemática de 74 arquivos prioritários da pasta-fonte. Toda afirmação aponta o arquivo de origem (Proof-First). Ambiguidades estão marcadas como **[REVISAR]**.

---

## 0. Como ler este documento

- **Seção 1** descreve o contexto e quem é quem.
- **Seção 2** apresenta a linha do tempo das interações (set/2025 → mai/2026).
- **Seção 3** consolida a tabela mestra de acordos (com fonte).
- **Seção 4** lista o que está pacificado entre as partes.
- **Seção 5** lista as divergências, pontos abertos e [REVISAR].
- **Seção 6** propõe próximos passos para fechamento.
- **Seção 7** traz o índice de arquivos-fonte usado.

Este documento **não substitui o contrato de prestação de serviço** (07/09/2025, R$ 15.000, ainda vigente). Ele organiza a memória do que foi acordado verbalmente, em reuniões e em documentos paralelos.

---

## 1. Contexto

### 1.1 As partes

| Papel | Nome | Vínculo formal | Documentos identificadores | E-mail |
|---|---|---|---|---|
| CEO / CONTRATANTE | **Alessandro de Souza Neves** | Idealizador e CEO do Meu Cumpadre. Servidor público do INSS em paralelo. | CPF 941.829.901.10 — Goiânia/GO (Rua 13, Qd 7, Lt 2, Parque Industrial) | `asnccb@gmail.com` |
| UX / Testemunha 1 | **Carlos Augusto Bittencourt Batista** ("Carlos UX") | Designer e mediador. Testemunha do contrato 07/09/2025. | Sem dado público nos arquivos lidos | (não identificado nos arquivos) |
| Dev / CONTRATADO | **Igor Fernandes Barreto** | Desenvolvedor full-stack contratado para construir a plataforma. | CPF ***.***.***-** — Maricá/RJ (Rua Antônio José Ribeiro, 18, Itaipuaçu) | `fernandesdeveloperfullstack@gmail.com` |
| Testemunha 2 | **GIL001** ("Gil") | Assinou como testemunha. Presença em reuniões. | Sem dado público nos arquivos lidos | (não identificado) |
| IA / copiloto | **Claude** (Anthropic) | Co-autor de visão, organização documental e síntese. Função operacional, não contratual. | — | — |

**Outras pessoas que aparecem no corpus:**
- **"Ian"** — consultor especialista em ClickUp/automação. Aparece como destinatário da "PAUTA SaaS inicial" e protagonista da reunião 01/09/2025 questionando a contratação do Igor. Identidade completa não consta. [REVISAR — nome completo, papel atual]
- **"Prof. Potrik"** — acadêmico/jurista consultado por áudio em 02/10/2025 sobre desintermediação, IA e OAB. Não há registro contratual. [REVISAR — identidade completa]
- **Hib001** — pagadora do PIX de R$ 5.000 ao Igor (02/09/2025). Pessoa diferente do CONTRATANTE. Provável vínculo familiar com Alessandro. [REVISAR — relação formal]

### 1.2 O projeto

**Meu Cumpadre** é uma plataforma digital (LawTech + GovTech + HealthTech) cujo propósito é democratizar o acesso à cidadania previdenciária e social para a população brasileira hipervulnerável.

**Modelo declarado:** P2P2P (cidadão ↔ plataforma ↔ rede multiprofissional) + JaaS (Justice as a Service).
**Fonte:** `Igor Fernandes e Carlos Batista _ SaaS e Identidade Visual/PAUTA reunião Igor e Carlos - SaaS - inicial.md`, seção "Manifesto Corporativo".

**Cobertura-alvo das personas:** ≈ 26 milhões de cidadãos (78% da demanda previdenciária brasileira), em 5 perfis: Dona Zilda (66+, idosa periférica, 31%), Seu João do Sertão (rural, 24%), Carlos Operário (CLT/MEI, 19%), Ana Cuidadora (16%), Lucas Resiliente (PCD, 8%).
**Fonte:** `Carlos UX/Personas B2C - simplificado.pdf`.

**Origem do nome "Meu Cumpadre":** decidida na reunião 31/08/2025. Substitui "Aposentadoria na Mão" (que vira nome de produto, não da marca-mãe). Razão: expansão futura para outras verticais (bancário, saúde, trabalhista) sem ficar travado em "aposentadoria".
**Fonte:** `Reunião com Carlos + Igor _ domingo - 2025-08-31 17-35-34.pdf`, pp. 4-7.

### 1.3 O contrato vigente

| Item | Valor |
|---|---|
| Tipo | Prestação de serviço autônoma (sem vínculo empregatício) |
| Assinatura | 07/09/2025, Rio de Janeiro |
| Objeto | Desenvolvimento de software web + adaptação de sistema ERP de titularidade do CONTRATADO |
| Valor total | **R$ 15.000,00** |
| Forma | 50% entrada + 50% entrega (no contrato) — modificado verbalmente para 3 parcelas |
| Prazo | **45 dias corridos** a partir do início efetivo (suspende durante aprovações pelo CONTRATANTE) |
| Garantia | 3 meses sobre funcionalidades desenvolvidas |
| Treinamento | 3 sessões online (até 1h30 cada) inclusas; R$ 75/hora adicional |
| Propriedade intelectual | **Transferida integralmente ao CONTRATANTE** (interfaces, módulos, manuais, documentações) |
| Foro | Comarca do Rio de Janeiro/RJ, com mediação extrajudicial prévia |
| Canais oficiais | Jira (tickets), Confluence (docs), Discord (reuniões), e-mail, Figma (interface) |

**Fonte:** `CONTRATO DE PRESTAÇÃO DE SERVIÇO - Meu Cumpadre _ Assinado.pdf` (13 pp, com anexo de PIX) e `mcux@gmail/Assinado - CONTRATO DE PRESTAÇÃO DE SERVIÇO - Meu Cumpadre.pdf` (10 pp, versão limpa).

---

## 2. Linha do tempo

| Data | Evento | Fonte |
|---|---|---|
| Pré-31/08/2025 | Alessandro tinha o nome "Aposentadoria na Mão", usava ClickUp + CleanCap, com domínios `aposentadorianamao.com.br` registrados. Carlos UX já estava envolvido. Apresentação do Igor a Alessandro feita pelo Carlos ("dupla, sinergia perfeita"). | Reunião 31/08, p. 18 |
| **31/08/2025** (dom 17h35) | Reunião Alessandro + Igor + Carlos UX (e mais 2 pessoas não-identificadas). **Marco fundacional:** decidido o nome "Meu Cumpadre"; orçamento e prazo negociados (Igor propôs R$ 17k/60d; Alessandro contrapôs R$ 14k/45d; **acordado R$ 15k em 45 dias**); WhatsApp criado como canal de coordenação. | `Reunião com Carlos + Igor _ domingo - 2025-08-31 17-35-34.pdf` |
| **01/09/2025** (seg) | Reunião Alessandro + **Ian** (consultor ClickUp) + Gil. Ian questiona a contratação do Igor, defende continuidade do ClickUp, alerta para custo de programador. Alessandro essencialmente ouve sem decidir na reunião. | `Reunião com IAN 01-09-2025.pdf` |
| **02/09/2025** (ter 11h55) | **PIX de R$ 5.000,00** a Igor, pagado por **Hib001** (CAIXA → NU). 5 dias antes da assinatura formal. **Não bate com a cláusula 15ª** (50% = R$ 7.500). | Anexo do contrato, p. 11-12 |
| **03/09/2025** (qua 18h45) | Reunião técnica Igor + Alessandro + Carlos. Decisões: HostGator como hospedagem, VPS dedicada, compra de template (R$ 29 ou R$ 39), criptografia seletiva, Asaas como gateway. | `0 2025 09 03 18 45 30.pdf` |
| **07/09/2025** | **Assinatura formal do contrato** em Rio de Janeiro. Carlos e Gil como testemunhas. | Contratos |
| **15/09/2025** | Documento `Meu Cumpadre - Levantamento de requisitos.md/.pdf` consolida acessos (n8n, Evolution, HostGator, Hostinger, Make, domínio) e Requisitos Funcionais (4 entidades × 31+ RFs). Igor anota observações de compliance OAB. | `mcux@gmail/Meu Cumpadre - Levantamento de requisitos.md` |
| **02/10/2025** | Áudios PTT de **Prof. Potrik** sobre desintermediação no Brasil, monopólio OAB, Legal Triage, risco assimétrico, hierarquia DKW, simplicidade linguística. Insumo estratégico (não contratual). | `OAB _ ADVOGADO/CONVERSA COM O PROF. POTRIK 1.pdf` |
| **07/10/2025** | Reunião Igor + Alessandro. Igor pede **pagamento intermediário antecipado** (não previsto no contrato). Alessandro propõe R$ 5.000 entre 10-15/10 (vs 50% final do contrato). Acordo verbal. Igor confirma que API gov.br não é viável (revisão de expectativa inicial). | `2025 10 07 - reunião Igor.pdf` |
| 10-22/10/2025 (esperado) | **Prazo contratual de 45 dias expira em ~22/10/2025.** Não há documento confirmando entrega nem aditivo de prazo. [REVISAR] | — |
| **04/11/2025** | Adicionados ACTs OAB-INSS (compilação de 44 MB) à pasta — provável insumo para a estratégia de roteamento jurídico. | inventário, mtime |
| Out/2025 → Mar/2026 | **Lacuna de comunicação** (citada por Alessandro em 04/04/2026: "a gente ficou muito tempo sem conversar"). Igor escreve menos. Trabalho continua de forma reservada. [REVISAR — o que foi entregue nesse período?] | Reunião 04/04 |
| **02/03/2026** | Reunião Carlos UX + Igor + RJ — pauta não totalmente clara nos arquivos (PDF de 73 KB existe). [REVISAR] | `2026-03-02 18-52-55 Carlos UX _ Igor RJ.pdf` |
| **04/04/2026** | Reunião de **"reset"** Carlos + Alessandro + Igor. Carlos diagnostica: escopo original não foi entregue; backend "quase pronto"; faltam frontend, histórico de pagamento, chat. Alessandro está trazendo features novas (IA pra ler documento, Cloud) que estão **fora do escopo**. Decidido: voltar pro fluxograma original, Carlos transcreve em documento escrito, validação formal entre os 3. | `2026 04 04 18 13 22 reunião Carlos Igor.pdf` |
| **10/05/2026** | Data do presente documento. Inventário completo da pasta-fonte (Fase 1) e síntese descritiva (Fase 2). Projeto **continua sem entrega final formalizada**; relação Alessandro × Carlos × Igor permanece, mas o canal contratual está em "reset". | — |

---

## 3. Tabela mestra de acordos

Cada linha = um acordo identificável nos documentos. Coluna **Fonte** aponta o arquivo.

| Acordo | Quem | Prazo / Status | Valor | Fonte |
|---|---|---|---|---|
| Desenvolvimento de plataforma SaaS Meu Cumpadre (front + back) | Igor entrega; Alessandro paga | 45 dias a partir do início efetivo (deveria ter sido ~22/10/2025); **VENCIDO** | R$ 15.000,00 | Contrato 07/09/2025 (cláusulas 1ª, 9ª, 14ª) |
| Adaptação do sistema ERP de titularidade do Igor (licença de uso) | Igor cede licença; Alessandro recebe IP transferido na entrega final | Conjugado ao prazo do projeto | Incluso no R$ 15k | Contrato (cláusulas 1ª, 11ª) |
| Entrada de R$ 5.000 via PIX | Hib001 paga; Igor recebe | Executado em 02/09/2025 | R$ 5.000 (≠ 50% / R$ 7.500 do contrato — divergência verbal vs escrito) | Anexo do contrato (pp. 11-12) |
| Pagamento intermediário de R$ 5.000 | Alessandro paga; Igor recebe | Acordo verbal em 07/10/2025 — pagar entre 10-15/10/2025 | R$ 5.000 | `2025 10 07 - reunião Igor.pdf`, p. 46 |
| Pagamento final restante | Alessandro paga; Igor recebe | Após entrega aprovada (cláusula 17ª) — **NÃO QUITADO** | R$ 5.000 estimado (saldo) [REVISAR — valor real depende do que foi pago no intermediário] | Contrato + reunião 07/10 |
| Adoção do nome "Meu Cumpadre" | Marca da empresa-mãe | Decidido em 31/08/2025 | — | Reunião 31/08, p. 4-7 |
| HostGator como hospedagem inicial; VPS dedicada | Igor configura | Decidido em 03/09/2025 | Compartilhada com outros projetos do Igor inicialmente (não há valor fechado) | `0 2025 09 03 18 45 30.pdf`, pp. 1-4 |
| Asaas como gateway de pagamento | Igor integra | Stack | Taxa percentual variável | Reunião 03/09 + Levantamento de Requisitos |
| Stack técnica final | Igor define | Em revisão (3 versões diferentes nos documentos) | — | **[REVISAR — stack canônica não está formalizada]** |
| Carlos como UX (telas) e mediador | Carlos entrega | Telas feitas com base no fluxograma; backend Igor já se baseou nelas | Não há valor formalizado para Carlos nos arquivos lidos **[REVISAR — Carlos é pago? por quem? quanto?]** | — |
| Claude como copiloto estratégico (visão, prompts, organização documental) | Anthropic API / Claude | Em uso contínuo desde meados de 2025 | Custo de assinatura Anthropic (não MC) | `PAUTA SaaS inicial` (Manifesto destinado a "Alessandro, Igor, Carlos, Ian, Claude") |
| Compliance OAB (advogado fatura fora; taxa interna depois) | Igor implementa; advogados parceiros operam | Solução de RF-A4 | — | Levantamento de Requisitos, comentário inline do Igor |
| Treinamento incluso (3 sessões × 1h30) | Igor ministra; Alessandro/equipe consome | Após entrega | Incluso no R$ 15k | Contrato (cláusula 17ª, V) |
| Reset de escopo + formalização documental | Carlos transcreve, todos validam | A executar (acordo de 04/04/2026) | — | Reunião 04/04, p. 22 |

---

## 4. O que ficou acordado (consenso pacificado)

Estes itens não estão em disputa entre as partes (todos os arquivos lidos convergem):

### 4.1 Propósito e modelo
- O Meu Cumpadre é uma plataforma **proprietária** (não SaaS de terceiro), **WhatsApp-first**, com **administração solidária** (cidadão nunca refém de um profissional isolado; a matriz é sempre a plataforma).
- Modelo de negócio: **P2P2P + JaaS**. Monetização via **tecnologia e serviços** (não via comissão sobre honorários — para garantir compliance OAB).
- Atende prioritariamente cinco personas pré-definidas, totalizando ~26 M de cidadãos.
- O nome "Aposentadoria na Mão" continua existindo como **nome de produto** dentro do guarda-chuva Meu Cumpadre.

### 4.2 Compliance OAB (solução implementada por Igor)
- Advogado **não cobra dentro da plataforma**. Ele entra como "chancela" / "bater carimbo".
- Plataforma cobra **taxa de tecnologia** do advogado parceiro **após** a operação ser realizada fora dela.
- Esse desenho elimina o risco de a empresa ser caracterizada como "captação de clientela" ou "exercício irregular de advocacia".

### 4.3 Stack operacional já adotada (concordância das partes)
- **WhatsApp Business API** + **Evolution API** (canal de cliente)
- **n8n** self-hosted (automação; preferido a Zapier/Make)
- **ClickUp** (orquestração operacional / "QG" — confirmado por Alessandro mesmo após divergência com Ian)
- **Asaas** (gateway de pagamento; Igor já tem experiência prévia)
- **HostGator** (hospedagem inicial, VPS)
- **Autentique** (assinatura digital)
- **Tramitação Inteligente** (`planilha.tramitacaointeligente.com.br/api`) como insumo de dados
- **Domínio:** `aposentadorianamao.com.br` (raiz registrada via Registro.BR; já existe DNS HostGator)

### 4.4 Personas e KPIs-alvo
- 5 personas (Zilda, João, Carlos, Ana, Lucas) com proporções e barreiras conhecidas.
- KPIs centrais: Taxa Autonomia >70%, TMR <48h, Custo/Resolução <R$50, NPS >80.
- **WhatsApp não é canal, é "sistema operacional" das personas.**

### 4.5 Quatro entidades do sistema
- Cliente (autonomia máxima), Advogado (chancela excepcional), Agência (supervisão), Adm (governança técnica).
- Igor inseriu correções pontuais nas funções da Agência e do Advogado para preservar compliance OAB.

### 4.6 5 Anti-patterns inegociáveis
1. Apps nativos (PWA-first)
2. Formulários longos (cadastro parcial)
3. Advogado como primeiro contato (handoff, não default)
4. Cobranças antecipadas
5. Interfaces desktop-first

### 4.7 Linhagem da relação
- Alessandro e Carlos co-criaram boa parte da visão antes do Igor entrar.
- Carlos apresentou Igor a Alessandro como "dupla de sinergia perfeita".
- Carlos atua como **mediador** quando há divergência técnica/operacional Igor × Alessandro (visível especialmente na reunião 04/04/2026).
- A relação tem componente humano forte (afeto, missão, "compromisso de propósito").

---

## 5. Pontos abertos, divergências e [REVISAR]

### 5.1 Financeiros (críticos)

| Item | Status | Pergunta-chave |
|---|---|---|
| Valor pago a Igor até hoje | R$ 5.000 PIX confirmado (02/09/2025). R$ 5.000 intermediário verbal (10-15/10/2025) **sem comprovante na pasta** | Quanto Igor já recebeu, total? Há comprovantes além do PIX de R$ 5k? |
| Saldo do contrato | Entre R$ 5.000 e R$ 10.000 dependendo do item anterior | Qual o valor exato pendente? |
| Pagamento por Hib001 (PIX de R$ 5k) | Pagadora diferente do CONTRATANTE | Há implicação contábil/fiscal? Foi por procuração? Por que não foi diretamente Alessandro? |
| Remuneração de Carlos UX | Não consta nos arquivos | Carlos é pago? Por quem (Alessandro direto, ou Igor repassa)? Qual valor? Esse vínculo está formalizado? |
| Precificação operacional do MC | Não há tabela B2C/B2B/B2G definida | Quanto o MC vai cobrar do cliente final? Success fee 11% (Manifesto) é meta ou está validado? |

### 5.2 Cronograma e entrega (críticos)

| Item | Status | Pergunta-chave |
|---|---|---|
| Prazo contratual de 45 dias | **Vencido em ~22/10/2025** (sem aditivo formal) | Houve aditivo escrito? Em quais datas? |
| Entrega do MVP | **Não confirmada nos arquivos**. Reunião 04/04/2026 mostra reset, não entrega. | O que foi efetivamente entregue (backend, telas, módulos)? Há acesso a um ambiente rodando? |
| Roadmap original Q1-Q4/2025 | **Inteiramente expirado.** Hoje é Q2/2026. | Há roadmap revisado pós-reset 04/04/2026? |
| 7 meses sem entrega | Tensão visível na reunião 04/04 (Carlos: "está atendendo até ano passado, então tem que entender por que está aí") | Quais foram as causas: escopo móvel, custos imprevistos, falta de comunicação, ou outra? |

### 5.3 Técnicos (importantes)

| Item | Status | Pergunta-chave |
|---|---|---|
| Stack canônica | **3 versões divergentes nos documentos.** PHP+PostgreSQL (Manifesto Pauta); Node+Express+PostgreSQL (Levantamento 15/09); Node+Nest+TypeScript+MySQL (DNA Operacional) | Qual a stack efetivamente em produção? Onde está documentado oficialmente? |
| API gov.br/INSS | Alessandro acreditou em 31/08/2025 que seria viável. Igor confirmou em 04/04/2026 que **NÃO é viável publicamente**. | Como substituir o gov.br no fluxo? Selenium Grid? GERID via advogado parceiro? |
| Router-Ethics LSTM (500k casos) | Mencionado em vários docs como componente central | Qual a origem dos 500k casos? São reais ou sintéticos? Há dataset de treino? |
| Telas SaaS (`Telas SaaS - Meu Cumpadre/`) | Pasta com código React/TypeScript dentro do escopo inventariado | Esse front é o oficial? Está sincronizado com o backend? |
| Fluxograma de Carlos UX | Existe em algum lugar (referenciado na reunião 04/04 como peça-chave do reset) | Em qual arquivo está? Está na pasta-fonte? |

### 5.4 Pessoas e governança (importantes)

| Item | Status | Pergunta-chave |
|---|---|---|
| Posição do "Ian" | Apareceu como destinatário da Pauta (set/2025), questionou o Igor (01/09), não aparece nas reuniões posteriores | Ian ainda está no projeto? Qual seu papel hoje? Há conflito Ian×Igor? |
| Prof. Potrik | Consultor pontual via WhatsApp PTT (out/2025), sem registro contratual | Continua sendo conselheiro? Formaliza? |
| Alessandro como servidor INSS | Confirmado em 07/10/2025 ("não pode ninguém saber que eu sou funcionário da NSS") | Há conflito de interesse formal? Como o MC trata isso na governança/marketing? |
| Modelo societário | DNA Operacional cita SPE/holdings com prioridade baixa | Há CNPJ? Quem é sócio? Qual a estrutura? |
| Co-créditos | Plataforma é "co-criada" entre Alessandro, Carlos, Igor (e Claude como copiloto) | Como é dividida a propriedade futura (sucesso comercial)? O contrato transfere IP "ao CONTRATANTE" — Carlos e Claude estão fora dessa partilha? |

### 5.5 Compliance e segurança (críticos)

| Item | Status | Pergunta-chave |
|---|---|---|
| Credenciais expostas em texto plano | Levantamento de Requisitos 15/09/2025 contém senhas (`Jesus@1000`, `Peace.10`, `Previa.01`, `@20252025`) + API key Evolution | **Trocar todas as credenciais imediatamente.** Quem mais tem acesso a essa pasta no Drive? |
| LGPD | Mencionada em vários docs, sem plano de implementação operacional | Há DPO? Há RIPD? Onde estão registrados? |
| Patentes/IP | "Plano Estratégico de Patentes" existe como documento, mas registro INPI/Software não confirmado | Há registro INPI da marca? Pedido de software? Procuração com agente da PI? |

### 5.6 Documentais (acumulativos)

- **Documento de "reset" prometido em 04/04/2026** (Carlos transcrevendo fluxograma): existe? Foi assinado pelos 3?
- **Aditivos contratuais** (prazo, parcelas): não há nenhum nos arquivos lidos. Vale formalizar.
- **Atas de reuniões pós-04/04/2026**: existem? Há registros do mês de abril/2026 a maio/2026?

---

## 6. Próximos passos sugeridos (para fechamento da memória)

Esta memória de entendimento ficará **provisória** até que os pontos críticos sejam endereçados. Sugestões em ordem de prioridade:

### 6.1 Imediato (≤ 7 dias)
1. **Reunião dos 3** (Alessandro + Carlos + Igor) para validar este documento, especialmente as seções 5.1 (financeiros) e 5.2 (cronograma).
2. **Trocar credenciais** expostas no Levantamento de Requisitos (Hostinger, HostGator, Make, Evolution API).
3. **Confirmar o que está pago a Igor** até hoje, com comprovantes. Se houver saldo, definir cronograma de quitação.
4. **Pedir a Igor um snapshot do estado atual do código** (commits, telas funcionando, módulos prontos).

### 6.2 Curto prazo (≤ 30 dias)
1. **Aditivo escrito** ao contrato 07/09/2025 cobrindo: novo cronograma, novas parcelas, escopo revisado, IA generativa (se for incluída).
2. **Stack canônica documentada** em UM arquivo único, substituindo as 3 versões conflitantes.
3. **Status formal do Ian** no projeto (entrou, saiu, segue).
4. **Status formal de Carlos UX** (escopo, valor, prazo, se aplicável).
5. **Documento de reset escrito** prometido em 04/04/2026 — transformar em PDF assinado/anuído pelos 3.

### 6.3 Médio prazo (≤ 90 dias)
1. **Plano de compliance LGPD** operacional (DPO, RIPD, política de retenção).
2. **Registro INPI da marca "Meu Cumpadre"** + registro do software (se ainda não feito).
3. **Estrutura societária** definida (CNPJ, sócios, governança), refletindo a relação entre Alessandro, Carlos, Igor (e eventualmente Claude/Anthropic via licenciamento).
4. **Política de comunicação** sobre o vínculo Alessandro × INSS (em produto, marketing e captação).

---

## 7. Índice de arquivos-fonte (Fase 2)

Foram lidos integralmente ou amostrados via Grep os seguintes 74 arquivos prioritários, organizados por categoria:

### Contratos
- `CONTRATO DE PRESTAÇÃO DE SERVIÇO - Meu Cumpadre _ Assinado.pdf` (13 pp, com PIX anexo)
- `mcux@gmail/Assinado - CONTRATO DE PRESTAÇÃO DE SERVIÇO - Meu Cumpadre.pdf` (10 pp, versão limpa)

### Atas de reunião
- `Reunião com Carlos + Igor _ domingo - 2025-08-31 17-35-34.pdf` (24 pp) — marco fundacional
- `Reunião com IAN 01-09-2025.pdf` (17 pp) — divergência consultor
- `Reunião com IAN 01-09-2025.pdf` (não confundir com a do dia 31/08)
- `Igor Fernandes e Carlos Batista _ SaaS e Identidade Visual/OAB _ ADVOGADO/CONVERSA COM O PROF. POTRIK 1.pdf` (5 pp)
- `Igor Fernandes e Carlos Batista _ SaaS e Identidade Visual/PAUTA reunião Igor e Carlos - SaaS - inicial.md` (1400+ linhas, documento-mãe)
- `2026-03-02 18-52-55 Carlos UX _ Igor RJ.pdf` (73 KB — não totalmente analisado) [REVISAR]

### Transcrições de áudio (PDFs gerados via TurboScribe)
- `0 2025 09 03 18 45 30.pdf` (37 pp) — reunião técnica 03/09
- `2025 10 07 - reunião Igor.pdf` (~50 pp) — pagamento intermediário
- `2026 04 04 18 13 22 reunião Carlos Igor.pdf` (~25 pp) — **reset** abril/2026
- `OAB/PTT-20251002-WA0188.pdf`, `WA0192.pdf`, `WA0193.pdf`, `WA0194.pdf` — áudios Prof. Potrik

### Especificações técnicas
- `mcux@gmail/Meu Cumpadre - Levantamento de requisitos.md` (RF formais 15/09/2025, com observações inline do Igor)
- `0 ARQUITETURA TÉCNICA FINAL — MEUCUMPADRE v1.0.pdf`
- `ARQUITETURA TÉCNICA - MEUCUMPADRE.md`
- `Igor Fernandes e Carlos Batista _ SaaS e Identidade Visual/Carlos UX/9 Relatório Técnico- Arquitetura Jurídico-Tecnológica.pdf`
- `Igor Fernandes e Carlos Batista _ SaaS e Identidade Visual/Carlos UX/Levantamento de Requisitos - Funcionais e Não Funcionais.pdf`
- `Igor Fernandes e Carlos Batista _ SaaS e Identidade Visual/FLUXOGRAMA SaaS/agencia.fluxograma.drawio.pdf`
- `Igor Fernandes e Carlos Batista _ SaaS e Identidade Visual/FLUXOGRAMA SaaS/users.fluxograma.drawio.pdf`

### Personas / UX
- `Igor Fernandes e Carlos Batista _ SaaS e Identidade Visual/Carlos UX/Personas B2C - simplificado.pdf`
- `Igor Fernandes e Carlos Batista _ SaaS e Identidade Visual/Carlos UX/PERSONAS - B2C.pdf` (2,1 MB)
- `Igor Fernandes e Carlos Batista _ SaaS e Identidade Visual/Persona - Clientes B2C.pdf`
- `Igor Fernandes e Carlos Batista _ SaaS e Identidade Visual/Persona - Clientes B2C Claude.pdf`

### Financeiro
- `Igor Fernandes e Carlos Batista _ SaaS e Identidade Visual/Carlos UX/0 Honorários ADV Previdenciários - cenário Brasil.pdf` (estudo de mercado, não interno)
- 3 outros PDFs de honorários (estudos de mercado externos)

### Estratégicos / IP
- `Igor Fernandes e Carlos Batista _ SaaS e Identidade Visual/Carlos UX/0 MEU CUMPADRE v1.1 DNA OPERACIONAL.md` (Q&A engenharia de prompt)
- `Identidade Visual & PATENTES _ Meu Cumpadre/Plano Estratégico de Patentes e Propriedade Intelectual.pdf`
- `mcux@gmail/0 ESTRATÉGIA DE TRANSFORMAÇÃO DIGITAL - MEU CUMPADRE 5.0.pdf`
- `mcux@gmail/0 PLANO DE AÇÃO 90 DIAS - IMPLEMENTAÇÃO MEU CUMPADRE 5.0.pdf`
- ...e outros documentos estratégicos amostrados

### Comunicações
- `mcux@gmail/Aplicação interface WHATSAPP.md` (visão "WhatsApp como porta, MC como casa" + Metaprompt Discovery JaaS)

### Inventário-base
- `Documentação/INVENTARIO-mcux-gmail-FASE1-2026-0510.md` (Fase 1, mesma pasta)

**Arquivos NÃO lidos integralmente** (devido a volume): pasta `Telas SaaS - Meu Cumpadre/` com código-fonte React/TS (220+ arquivos), arquivos OAB de regulação (Estatuto OAB + ACTs estaduais — 44 MB), e-books e materiais de referência externa.

---

## 8. Notas sobre este documento

- **Status:** Memória de entendimento descritiva, conforme combinado com Alessandro em 10/05/2026 (resposta "6. descritivo" às perguntas da Fase 1).
- **Não substitui** o contrato de 07/09/2025 nem qualquer aditivo formal.
- **Pode ser referenciado** em uma futura formalização (aditivo ao contrato, acordo de sócios, proposta a investidor), mas não tem peso legal por si só.
- **Aprovação esperada:** Alessandro, Carlos e Igor revisam, anotam discordâncias, e em consenso podem promovê-lo a "documento de referência" do projeto.
- **Próxima iteração:** após reunião de validação dos 3 stakeholders, novas decisões e mudanças entram em uma v2.

---

**Gerado por Claude (Anthropic) em 10/05/2026, a partir da leitura sistemática dos 74 arquivos prioritários da pasta-fonte. Toda afirmação é referenciada (Proof-First). Em caso de divergência entre este documento e os arquivos originais, vale o arquivo original.**
