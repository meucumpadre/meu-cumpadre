---
título: MC-GOVBR-Matriz-NivelServico
versão: v1_1
data: 2026-05-08
status: RASCUNHO — REVISÃO PÓS-KBA
autor: Claude Code × Alessandro Neves
fonte: E1 + E2 + E3 + E4 v1.0 + E5 (CatálogoTravas) + evidência empírica KBA + decisão arquitetural Alessandro 08/05
supersede: E4 v1.0
---

# MC-GOVBR — Matriz Nível de Conta × Serviço × Impacto MC (v1.1)

> Documento E4 v1.1 — revisão da v1.0 à luz da descoberta empírica do **Selo Previdenciário via KBA Dataprev** (08/05/2026) e das decisões arquiteturais do founder Alessandro Neves quanto a (a) coleta de inteligência contributiva pré-gov.br, (b) posição ética sobre operação KBA (Cenários A / A+ / B), (c) inserção do **Hook 0 — Triagem de nível gov.br** na jornada MC.
>
> Convenção de confiança da informação:
> - **CONFIRMADO**: nível mínimo declarado em fonte oficial gov.br listada em E1.
> - **INFERIDO [n E1]**: nível mínimo extraído de tutorial/vídeo/blog em E1, sem confirmação oficial.
> - **NÃO MAPEADO**: nenhuma fonte em E1 informa o nível mínimo do serviço.
> - **EMPÍRICO 08/05**: observado em teste com usuária Bronze real em 08/05/2026.
>
> Convenção de jornadas MC:
> - **Φ₀** = jornada CadÚnico (triagem → inscrição/atualização)
> - **Φ₁** = jornada protocolar INSS (triagem → protocolo de benefício/recurso)
> - **Φ₄** = jornada Guardião pós-concessão (monitoramento contínuo do benefício ativo)

---

## 0. Sumário das mudanças v1.0 → v1.1

(Detalhamento completo na Seção 6 — Changelog.)

A versão v1.1 incorpora a descoberta de uma **quarta rota de elevação Bronze→Prata** (Selo Previdenciário via KBA), inexistente em E1. Implicações:

1. **Seção 1.1 (Meu INSS)** — anotação KBA em cada serviço bloqueado em Bronze.
2. **Seção 2.1b (Mapa de bloqueio)** — novo cenário "Bronze + KBA" entre Bronze puro (2.1) e Prata (2.2).
3. **Seção 3.1 (O nó da jornada)** — gargalo redefinido como **"nível de conta OU conhecimento contributivo"** (era apenas "nível de conta").
4. **Seção 3.3 (Rotas sem gov.br)** — adicionada **Fonte 4 (Central 135 por telefone)**.
5. **Seção 5.1/5.2/5.3** — KBA promovido a **Rota 0** (mais barata, mais rápida, sem hardware nem presencial), com recálculo do custo médio ponderado.
6. **Seção 5.4 (NOVA)** — Posição ética sobre operação KBA: Cenários A (APROVADO), A+ (APROVADO com protocolo), B (VETADO).
7. **Seção 5.5 (NOVA)** — **Hook 0 — Triagem de nível gov.br** + coleta de inteligência contributiva pré-gov.br.
8. **Seção 6 (NOVA)** — Changelog v1.0 → v1.1.

---

## 1. Matriz principal

### 1.1 Meu INSS

> **Nota KBA (NOVA v1.1):** O gateway "Selo Previdenciário" (`meu.inss.gov.br/#/selo-previdencia`) intercepta clientes Bronze que tentam acessar serviços bloqueados e oferece elevação via questionário KBA operado pela Dataprev. **NÃO CONFIRMADO** se o selo gerado equivale a Prata pleno gov.br ou apenas libera acesso interno ao Meu INSS — verificação empírica pendente (lacuna E5 §7 L2). Onde a coluna "Nível mínimo exigido" é Prata e o serviço é coberto pelo Meu INSS, o KBA é uma rota alternativa de elevação **antes** do serviço-alvo, não um bypass do serviço.

| Serviço | Portal/App | Nível mínimo exigido | O que permite fazer | Nível recomendado | Impacto MC | Fonte E1 | Confiança | Rota alternativa via KBA? |
|---|---|---|---|---|---|---|---|---|
| Consultar CNIS (extrato previdenciário) | Meu INSS / app | **Prata** | Histórico de vínculos empregatícios e contribuições — base de toda triagem MC. | Prata | **Φ₁ (núcleo) / Φ₄** | [1, 2, 3, 26] | INFERIDO [26] | **Sim** — KBA eleva o cliente e libera o CNIS na sequência. |
| Consultar benefício ativo | Meu INSS / app | **Prata** | Ver benefício em manutenção, valor, banco pagador. | Prata | **Φ₄ (núcleo)** | [23] | INFERIDO [23] | **Sim** — após KBA, acesso liberado dentro do Meu INSS. |
| Simular aposentadoria | Meu INSS / app | **Bronze** | Cálculo estimativo de tempo de contribuição. | Prata | Φ₁ | [1, 26] | INFERIDO [1] | N/A — Bronze já basta. |
| Protocolar requerimento de benefício (DER) | Meu INSS / app | **Prata** | Abertura de pedido formal (aposentadoria, BPC, pensão). | Prata | **Φ₁ (núcleo)** | [3, 4] | INFERIDO [4] | **Sim** — pré-elevação por KBA destrava DER. |
| Agendar perícia médica | Meu INSS / app | **Bronze** | Marcação para benefícios por incapacidade. | Bronze | Φ₁ | — | NÃO MAPEADO | N/A. |
| Apresentar recurso ao CRPS | Meu INSS / app | **Prata** | Recurso administrativo contra indeferimento. | Prata | Φ₁ | — | NÃO MAPEADO | **Sim** — pré-elevação por KBA. |
| Cadastrar representante legal | Meu INSS / app | **Prata** | Vincula curador/procurador ao CPF do beneficiário. | Prata | **Φ₁ + Φ₄** | [17, 18, 44] | CONFIRMADO [17] | **Sim** — outorgante e/ou outorgado podem subir via KBA. |
| Consultar andamento de processo | Meu INSS / app | **Bronze** | Status de protocolo aberto. | Bronze | Φ₁ + Φ₄ | [1] | INFERIDO [1] | N/A. |
| Emitir carta de concessão | Meu INSS / app | **Prata** | Documento oficial de deferimento. | Prata | Φ₄ | — | NÃO MAPEADO | **Sim** — pré-elevação por KBA. |
| Atualizar dados cadastrais | Meu INSS / app | **Prata** | Endereço, banco pagador, dados pessoais. | Prata | Φ₄ | [21] | INFERIDO [21] | **Sim** — pré-elevação por KBA. |
| Prova de vida digital | Meu INSS / app | **Ouro** (ou Prata via banco) | Prova de vida obrigatória anual para benefícios ativos. | Ouro | **Φ₄ (crítico)** | [49, 7] | INFERIDO [49] | **Não** — KBA destrava no máximo Prata. Prova de vida Ouro continua exigindo banco/biometria/CIN. |
| **Selo Previdenciário via KBA** *(NOVO)* | Meu INSS / app (gateway) | **Bronze** (entrada) → **Prata** (saída, NÃO CONFIRMADO) | Eleva conta sem biometria, sem banco, sem câmera. Exige memória contributiva. | — | **Destravador transversal Φ₁/Φ₄** | EMPÍRICA 08/05 | EMPÍRICO 08/05 | — (este é a rota) |

### 1.2 CadÚnico / Meu CadÚnico

| Serviço | Portal/App | Nível mínimo exigido | O que permite fazer | Nível recomendado | Impacto MC | Fonte E1 | Confiança |
|---|---|---|---|---|---|---|---|
| Consultar situação cadastral | App Meu CadÚnico | **Prata** | Status do cadastro, dados da família, RF. | Prata | **Φ₀ + Φ₄** | [32, 41] | INFERIDO [32] |
| Pré-cadastro online | gov.br/cadunico | **Bronze** | Geração de pré-cadastro a ser confirmado em CRAS presencial. | Bronze | **Φ₀ (entrada)** | [41] | INFERIDO [41] |
| Consultar benefícios vinculados (BF, BPC, Tarifa Social) | App Meu CadÚnico / Caixa Tem | **Prata** | Bolsa Família, BPC, Tarifa Social, Pé-de-Meia. | Prata | Φ₀ + Φ₄ | [32, 33, 41] | INFERIDO [32] |
| Atualizar dados cadastrais (efetivo) | **Presencial no CRAS** | **Não exige conta gov.br** | Atualização cadastral oficial — feita por entrevistador SUAS. | — | **Φ₀ (núcleo)** | [32, 41] | INFERIDO [32] |

> **Nota KBA:** o Selo Previdenciário **não cobre** o CadÚnico. Lacuna E5 §7 L4 levanta a hipótese de existirem outros KBA (cadunico, rfb) — **não confirmado**. Para Φ₀, KBA é irrelevante até que essa lacuna seja fechada.

### 1.3 Receita Federal / e-CAC

| Serviço | Portal/App | Nível mínimo exigido | O que permite fazer | Nível recomendado | Impacto MC | Fonte E1 | Confiança |
|---|---|---|---|---|---|---|---|
| Consultar CPF (situação cadastral) | gov.br/receitafederal | **Não exige login** | Verificação pública via CPF + nome/data nascimento. | — | Triagem Φ₀/Φ₁ | — | CONFIRMADO (público) |
| Emitir comprovante de situação cadastral CPF | gov.br/receitafederal | **Não exige login** | PDF oficial. | — | Triagem | — | CONFIRMADO (público) |
| Declaração IRPF (acesso e-CAC) | e-CAC | **Prata** | Declarar, retificar, consultar malha. | Prata | Φ₁ (extensão) | [4] | CONFIRMADO [4] |
| Consultar restituição | gov.br/receitafederal | **Bronze** | Status de restituição liberada. | Bronze | Φ₄ | — | NÃO MAPEADO |
| Cadastrar procuração digital (e-CAC) | e-CAC | **Prata** (outorgante) + **Prata** (outorgado) | Procuração eletrônica para representação fiscal. | Prata | **Φ₁ + Φ₄** | [38] | CONFIRMADO [38] |

> **Nota KBA:** se o selo KBA Previdenciário equivaler a Prata pleno gov.br (a confirmar), ele também destrava e-CAC. Se equivaler apenas a "acesso interno Meu INSS", não destrava. Essa é a lacuna mais crítica para a recomendação operacional do MC.

### 1.4 CTPS Digital

| Serviço | Portal/App | Nível mínimo exigido | O que permite fazer | Nível recomendado | Impacto MC | Fonte E1 | Confiança |
|---|---|---|---|---|---|---|---|
| Consultar vínculos empregatícios | App CTPS Digital | **Prata** | Histórico de empregos e contratos. | Prata | Φ₁ (subsídio CNIS) | — | NÃO MAPEADO |
| Emitir CTPS digital | App CTPS Digital | **Bronze** | Geração inicial do documento digital. | Bronze | Φ₁ (subsídio) | — | NÃO MAPEADO |
| Consultar seguro-desemprego | gov.br/empregabrasil | **Prata** | Status de pedido e parcelas. | Prata | Φ₁ (subsídio) | — | NÃO MAPEADO |

### 1.5 Outros serviços gov.br relevantes

| Serviço | Portal/App | Nível mínimo exigido | O que permite fazer | Nível recomendado | Impacto MC | Fonte E1 | Confiança |
|---|---|---|---|---|---|---|---|
| Carteira Nacional de Habilitação (CNH) digital | App CDT (gov.br/senatran) | **Prata** | CNH digital com QR autenticável. | Prata | Subsídio (rota 5 elevação) | — | NÃO MAPEADO |
| Título de Eleitor digital (e-Título) | App e-Título | **Bronze** | Documento eleitoral digital. | Bronze | Subsídio | — | NÃO MAPEADO |
| Assinatura digital de documentos (Avançada) | gov.br/assinador | **Prata** | Assinatura avançada — força probatória entre partes. | Prata | Φ₁ + Φ₄ (peças) | [25] | INFERIDO [25] |
| Assinatura digital de documentos (Qualificada) | gov.br/assinador | **Ouro** | Assinatura qualificada — equiparada a firma reconhecida. | Ouro | Φ₁ + Φ₄ (peças críticas) | [25] | INFERIDO [25] |
| Procuração Digital gov.br (SPE / Sistema Procurações Eletrônicas) | gov.br | **Prata** (outorgante) + **Prata** (outorgado) | Outorga digital genérica intra-gov.br. | Prata | **Φ₁ + Φ₄ (núcleo)** | [40, 16] | INFERIDO [40] |

**Total de serviços mapeados:** 28 (12 Meu INSS [+1 KBA novo] + 4 CadÚnico + 5 Receita + 3 CTPS + 4 Outros).
**Confiança agregada:** 4 CONFIRMADO + 14 INFERIDO + 9 NÃO MAPEADO + 1 EMPÍRICO 08/05 = 32% confiança forte (ligeiramente inferior à v1.0 porque adicionamos 1 entrada empírica não-confirmada — o KBA — que precisa ser validada para subir o score).

---

## 2. Mapa de bloqueio por nível

### 2.1 Cenário **Bronze puro** (cliente recém-cadastrado, sem KBA)

| Métrica | Valor |
|---|---|
| Serviços ACESSÍVEIS | 9 / 28 (32%) |
| Serviços BLOQUEADOS | 19 / 28 (68%) |
| Cobertura **Φ₁ (INSS)** | ~25% (apenas consultas e agendamento — protocolar / recorrer / extrair documento bloqueado) |
| Cobertura **Φ₀ (CadÚnico)** | ~50% (pré-cadastro online + atualização presencial CRAS funcionam; consulta digital bloqueada) |
| Cobertura **Φ₄ (Guardião)** | ~10% (apenas consulta de andamento — não consegue ver benefício ativo nem CNIS) |

Serviços acessíveis em Bronze puro: simular aposentadoria, agendar perícia, consultar andamento, pré-cadastro CadÚnico, atualização CRAS presencial, consulta CPF público, comprovante CPF, restituição, emitir CTPS digital, e-Título.

### 2.1b Cenário **Bronze + Selo Previdenciário KBA** *(NOVO v1.1)*

Cliente que entrou em Bronze e foi elevado pela Rota KBA. Pré-condições: ter contribuição registrada no CNIS + lembrar (ou ter sido preparado a partir de fontes próprias — ver §5.5) dados básicos do próprio histórico.

| Métrica | Valor (estimado, NÃO CONFIRMADO) |
|---|---|
| Serviços ACESSÍVEIS no **Meu INSS** | 12 / 12 (100%) — assumindo que o selo libera plenamente o Meu INSS |
| Serviços ACESSÍVEIS **fora do Meu INSS** | A confirmar — ver lacuna L2 do E5 §7 |
| Cenário otimista (selo = Prata pleno gov.br) | Equivale a §2.2 — 25 / 28 (89%) |
| Cenário pessimista (selo = acesso só ao Meu INSS) | ~14 / 28 (50%) — 100% Φ₁/Φ₄ via Meu INSS, mas Φ₀ digital, e-CAC, SPE permanecem bloqueados |

Serviços bloqueados mesmo após KBA, em qualquer cenário: prova de vida digital pelo app (Ouro), assinatura qualificada (Ouro), CTPS Digital (provavelmente), CNH digital (provavelmente — selo é específico de Previdência).

> **Decisão de produto provisória (até confirmar L2):** o MC opera o KBA assumindo o **cenário pessimista**. Se o cliente precisa apenas de Φ₁/Φ₄ via Meu INSS (DER de aposentadoria, consulta CNIS, recurso CRPS, cadastro de representante, consulta de benefício ativo) — e este é o caso da grande maioria — o KBA é suficiente. Se o cliente precisa de Φ₀ digital ou e-CAC, a triagem do Hook 0 (§5.5) deve sinalizar para Rota 1 (banco) em vez de KBA.

### 2.2 Cenário **Prata** (cliente após validação bancária ou CNH/SENATRAN)

| Métrica | Valor |
|---|---|
| Serviços ACESSÍVEIS | 25 / 28 (89%) |
| Serviços BLOQUEADOS | 3 / 28 (11%) |
| Cobertura **Φ₁ (INSS)** | ~91% (tudo exceto prova de vida digital pelo app — que pode ir presencial/banco) |
| Cobertura **Φ₀ (CadÚnico)** | ~100% |
| Cobertura **Φ₄ (Guardião)** | ~91% (prova de vida e assinatura qualificada bloqueadas) |

Serviços bloqueados em Prata: prova de vida digital pelo app (Ouro), assinatura qualificada (Ouro), procuração de outorgante Bronze que precisa Prata para emitir (caso de aprisionamento).

### 2.3 Cenário **Ouro** (cliente com biometria TSE/SENATRAN, CIN ou ICP-Brasil)

| Métrica | Valor |
|---|---|
| Serviços ACESSÍVEIS | 28 / 28 (100%) |
| Serviços BLOQUEADOS | 0 / 28 |
| Cobertura **Φ₁ / Φ₀ / Φ₄** | 100% |

---

## 3. Análise de impacto para o MC

### 3.1 O "nó" da jornada MC (revisado)

**v1.0 dizia:** *"O gargalo é a consulta ao CNIS — sem CNIS o MC não tem como executar a triagem; CNIS exige Prata."*

**v1.1 reformula:** **o gargalo continua sendo a triagem (E2 da jornada interna), mas a fonte do gargalo desdobra-se em duas dimensões independentes:**

1. **Dimensão técnica/credencial:** acesso ao CNIS digital exige Prata.
2. **Dimensão cognitiva/probatória:** o KBA exige conhecimento do próprio histórico contributivo.

A novidade da v1.1 é que essas duas dimensões **podem ser atacadas separadamente** pelo MC. Em particular:

- Se o cliente **tem credencial Prata mas não conhece o histórico** → MC consulta CNIS para ele e prepara a triagem (caminho clássico v1.0).
- Se o cliente **tem conhecimento do histórico mas está em Bronze** → MC orienta KBA e em 5-10 min ele sobe a Prata (caminho novo v1.1).
- Se o cliente **não tem credencial nem conhece o histórico** → o MC precisa **colher inteligência contributiva pré-gov.br** (ver §5.5 — Hook 0), antes mesmo de tocar no app gov.br.

**Pré-condições para a Rota KBA — 4 fontes de inteligência contributiva (decisão Alessandro 08/05):**

1. **Fonte 1 — CNIS físico em casa.** Cliente já foi à agência INSS no passado e tem extrato impresso. O CNIS físico é a "cola legítima" — é dado próprio do titular. Pergunta de triagem: *"Você tem algum papel do INSS em casa? Pode mandar uma foto?"*
2. **Fonte 2 — CTPS física.** Foto das páginas com carimbos de cada contrato — empresa, admissão, saída. Reconstrói linha do tempo contributiva mesmo sem CNIS.
3. **Fonte 3 — Questionário MC de memória contributiva.** Mini-questionário em linguagem Dona Zilda na triagem WhatsApp: *"A senhora trabalhou de carteira assinada alguma vez? Em que ano mais ou menos? Qual era a empresa? Faz quanto tempo que parou?"* Acomoda o "analfabeto previdenciário" (E5 T2.16).
4. **Fonte 4 — Central 135.** Beto liga no 135 com CPF + dados pessoais do cidadão e pede extrato CNIS por telefone. Funciona para Bronze sem nada (sem papel, sem CTPS, sem memória precisa). Não passa pelo gov.br — é canal paralelo do INSS. Demora, mas funciona.

**Onde o nó incide na jornada E0→E5 do MC (atualizado):**
- **E0 (descoberta) — desbloqueado**: cliente chega via WhatsApp.
- **E1 (cadastro MC) — desbloqueado**.
- **E2 (triagem)** — ⚠ **Gargalo dual (credencial + cognição)**: a v1.1 mitiga via Hook 0 + 4 fontes contributivas + Rota KBA.
- **E3 (orientação) — desbloqueado**.
- **E4 (protocolo)** — ⚠ **Bloqueio secundário** (Prata): KBA destrava no Meu INSS; outras frentes podem precisar Rota 1/2/4.
- **E5 (Guardião)** — ⚠ **Bloqueio terciário** (Prata + Ouro pontual para prova de vida).

**% estimado do público-alvo MC em Bronze (preservado da v1.0, com nota):**

> ⚠ **ESTIMATIVA — não há fonte primária em E1 com esse dado. Necessária validação por LAI ao MGI.**
>
> - Idoso urbano bancarizado: 30–40% em Bronze.
> - Idoso rural / sertanejo: 60–80% em Bronze.
> - PcD com limitação motora/visual severa: 50–70% em Bronze.
> - Beneficiário BPC sem CNH: 70–85% em Bronze.
>
> **Média ponderada do funil MC: ~55–65% chega em Bronze.**
>
> **v1.1 acrescenta:** desses Bronze, estimativa **40-55% tem contribuição registrada** (ex-CLT, MEI, doméstica, rural ex-segurado especial) — **público-alvo elegível para KBA**. Os 45-60% restantes são BPC puro / informal vitalício / dependente sem vínculo próprio — vão para Rota 1 ou Rota 3 (não KBA, ver E5 T2.15).

### 3.2 Nível mínimo viável para o MC

| Jornada | Nível mínimo viável | Justificativa |
|---|---|---|
| **a) Φ₁ (triagem → protocolo INSS)** | **Prata** (alcançável via banco, KBA, câmera traseira ou balcão) | CNIS + DER + recurso exigem Prata. KBA é a rota mais barata para alcançá-la quando há contribuição registrada. |
| **b) Φ₀ (triagem → CadÚnico)** | **Bronze** (com fallback presencial CRAS) | KBA Previdenciário NÃO ajuda em Φ₀ — manter recomendação v1.0. |
| **c) Φ₄ (Guardião pós-concessão)** | **Prata** + **Ouro pontual para prova de vida** | KBA destrava Prata para Φ₄ no Meu INSS. Prova de vida Ouro continua exigindo banco/biometria. |

**Conclusão (preservada):** o **piso operacional do MC é Prata**. KBA é o caminho mais barato para chegar lá quando o cliente tem contribuição.

### 3.3 Serviços que NÃO exigem conta gov.br (ou aceitam Bronze)

Lista de **rotas de fallback** que o MC pode acionar quando o cliente está em Bronze irreversível **ou** como **fontes de inteligência contributiva pré-elevação**.

| Rota | Canal | O que destrava | Limitação | Custo (cliente) |
|---|---|---|---|---|
| **Central 135 INSS** *(reforçada na v1.1)* | telefone | Consultas, agendamentos, status de benefício, perícia. **NOVA FUNÇÃO v1.1: Beto liga no 135 com dados do cidadão e obtém extrato CNIS por telefone — Fonte 4 da inteligência contributiva pré-KBA.** | Sem protocolo de DER nem recurso. Tempo de espera variável. | Grátis. |
| CRAS presencial | balcão | CadÚnico completo (Φ₀), encaminhamentos a BPC | Depende da agenda do CRAS local. | Grátis + deslocamento. |
| Agência INSS presencial | balcão | Φ₁ completo + cadastro de representante + selo Balcão Prata [1, 17] | Agendamento via 135; tempo de espera. | Grátis + deslocamento. |
| Defensoria Pública | atendimento jurídico | Recurso CRPS, ação judicial previdenciária, curatela | Disponibilidade variável. | Grátis. |
| Cartório de notas | presencial | Procuração pública em papel para e-CAC/INSS [BLOCO 4.2 E1] | Custo emolumentos. | Pago. |
| Agência bancária credenciada | balcão / TAA | Selo Prata via terminal [BLOCO 3.3 E1] | Cobertura rural fraca; gerentes refratários. | Grátis. |
| Posto Identificação Civil | balcão (PCs estaduais) | Emissão CIN — destrava Ouro futuro [BLOCO 3.7, 3.9 E1] | Tempo de emissão variável por estado. | Geralmente grátis. |
| TRE / Cartório Eleitoral | balcão | Coleta biométrica → libera Ouro futuro [BLOCO 3.7 E1] | Agendamento; depende de mutirão. | Grátis. |
| Consulta CPF / restituição | site público RFB | Triagem básica sem login | Apenas leitura de dados públicos. | Grátis. |

**Observação para o produto (v1.1):** O **135 é o canal mais subutilizado** do mapa MC. Antes da v1.1, era visto apenas como fallback para clientes "sem nada" — ou seja, piso mínimo de cobertura. **Na v1.1 o 135 ascende a peça-chave da estratégia KBA**: para o cliente Bronze sem CNIS físico nem CTPS nem memória precisa, o MC pode reconstituir a história contributiva por telefone **antes** de iniciar o KBA, transformando "Bronze irreversível" em "Bronze elegível para Rota KBA".

---

## 4. Lacunas da matriz

> **Observação v1.1:** as 11 lacunas de v1.0 permanecem. A v1.1 acrescenta 4 lacunas novas, todas relacionadas ao KBA — referenciadas como L_KBA_1..4, herdadas do E5 §7.

| Serviço | O que sabemos | O que falta | Ação recomendada |
|---|---|---|---|
| Agendar perícia médica | Aparenta ser Bronze (consulta + agendamento) | Confirmação oficial INSS | TESTAR EMPIRICAMENTE |
| Apresentar recurso CRPS | Inferido como Prata por analogia com DER | Confirmação na IN INSS/PRES 128/2022 ou no site CRPS | BUSCAR Regulamento Interno do CRPS |
| Emitir carta de concessão | Inferido como Prata | Confirmação oficial | TESTAR EMPIRICAMENTE |
| Consultar restituição RFB | Inferido como Bronze | Confirmar se exige login ou apenas CPF | TESTAR |
| Consultar vínculos CTPS Digital | Não mapeado | Nível mínimo do app CTPS Digital | TESTAR EMPIRICAMENTE |
| Emitir CTPS digital | Não mapeado | Nível mínimo na primeira emissão | TESTAR |
| Seguro-desemprego digital | Não mapeado | Nível para protocolar pedido | LAI ao MTE |
| CNH digital (CDT) | Não mapeado | Nível mínimo para baixar CNH no CDT | BUSCAR FAQ do app CDT |
| e-Título | Inferido como Bronze | Confirmar | TESTAR |
| Prova de vida digital INSS | Inferido Ouro / Prata via banco | Qual é exatamente o fluxo aceito? Bancos aceitos? | BUSCAR Portaria INSS prova de vida 2024-2025 (norma fantasma F5 do E3) |
| Cadastro de representante legal — documentos exatos por tipo | Confirmado que exige Prata | Lista exata por curatela/tutela/procuração | LAI ao INSS (lacuna #5 do E2) |
| **L_KBA_1 — Comportamento de bloqueio do KBA** *(NOVA v1.1)* | Cidadão erra → questionário trava | Existe cooldown? Quantas tentativas? Janela? | Teste empírico controlado + LAI à Dataprev |
| **L_KBA_2 — Escopo do selo gerado pelo KBA** *(NOVA v1.1)* | Selo criado dentro do Meu INSS | Equivale a Prata pleno gov.br ou só interno INSS? | Após KBA, testar acesso e-CAC, CadÚnico, SPE |
| **L_KBA_3 — Expiração do selo KBA** *(NOVA v1.1)* | Selo persistente (cadastra senha) | Re-validação anual? Indefinido? | Acompanhamento longitudinal 12 meses + LAI Dataprev |
| **L_KBA_4 — Existem outros KBA** *(NOVA v1.1)* | Scope OAuth tem sufixo `_previdencia` | Há `_cadunico`, `_rfb`? | Catálogo de scopes gov.br + testes em outros portais Bronze |

**Total v1.1: 15 lacunas** (era 11 em v1.0). Prioridade máxima: L_KBA_2 (escopo do selo) — define se KBA é Rota 0 ampla ou apenas tática Φ₁.

---

## 5. Recomendação operacional

### 5.1 Nível-alvo padrão do MC

> **Conclusão preservada da v1.0:** o MC deve operar com **Prata como nível-alvo padrão**.
>
> **Adendo v1.1:** a **rota mais eficiente** para chegar a Prata, no perfil-alvo MC, **passa a ser o KBA Previdenciário** (quando o cliente tem contribuição registrada e há inteligência contributiva preparada via §5.5). Banco continua sendo Rota 1 quando o cliente é bancarizado com internet banking ativa.

### 5.2 Rotas prioritárias de elevação para o perfil MC (**revisado v1.1**)

| Prioridade | Rota | Quando aplicar | Estimativa de sucesso |
|---|---|---|---|
| **Rota 0 — KBA Previdenciário** *(NOVA, prioritária quando aplicável)* [EMPÍRICA 08/05] | Selo Previdenciário via questionário Dataprev | Cliente Bronze com **contribuição registrada no CNIS** + uma das 4 fontes de inteligência contributiva preparada (§5.5). Mais barata e mais rápida quando aplicável. | ~70-85% (estimado) condicionado a inteligência contributiva preparada. |
| **Rota 1 — Internet Banking** [E1 BLOCO 3.2, fontes 13, 14] | Selo Prata via OAuth banco credenciado | Cliente bancarizado **com senha eletrônica de internet ativa** (Caixa, BB, Bradesco, Itaú, Santander, Sicoob, Sicredi). Preferência operacional MC: Caixa. **Aplicável também a quem nunca contribuiu** (BPC puro). | ~70-80% nos clientes que cumprem o pré-requisito. |
| **Rota 2 — Câmera traseira assistida** [E1 BLOCO 3.8, fontes 10, 15] | Selo Ouro via biometria facial guiada por API Humana MC | Cliente com **biometria no TSE ou CNH recente** mas com limitação motora/visual que impede selfie. Operador-MC orienta familiar local a usar câmera traseira. | ~50-60% — depende muito da qualidade da biometria de origem. |
| **Rota 3 — Selo Balcão presencial INSS** [E1 BLOCO 3.4, fonte 1] | Selo Bronze qualificado / Prata via servidor INSS | Cliente **sem contribuição** (Rota 0 fechada) **e** sem internet banking (Rota 1 fechada) **e** sem biometria (Rota 2 fechada). Fallback final. | ~85% (quando o agendamento ocorre) — ciclo de tempo é longo. |

**Rota 4 (não prioritária):** CIN/QR-Code [BLOCO 3.9 E1] — depende de o cliente ter ido emitir a nova carteira. Vai entrar como rota crescente nos próximos 24 meses, mas hoje cobre <30% do público.

### 5.3 Custo operacional estimado por rota (**revisado v1.1**)

> ⚠ Estimativas — calibrar com dados de operação após primeiras 50 jornadas.

| Rota | Tempo médio API Humana | Pré-trabalho | Pós-trabalho | Taxa de retentativa |
|---|---|---|---|---|
| **0 — KBA Previdenciário** *(NOVA)* | **15-30 min** | 10-15 min de revisão de inteligência contributiva (CNIS físico, CTPS, memória ou 135) com cliente. | 1-2 min — confirmar selo aplicado. | **Desconhecida** (L_KBA_1). Conservadoramente, 20-30% se preparação contributiva é forte. |
| 1 — Internet Banking | 8-15 min | Confirmar banco e senha eletrônica ativa (3 min). | Verificar selo Prata persistido (1 min). | Baixa (10-15%) — banco rejeitando OAuth. |
| 2 — Câmera traseira assistida | 20-40 min | Treinar familiar local (10 min). Verificar luz, limpar lente. | Aguardar processamento + reativar 2FA (5 min). | Alta (40-50%). |
| 3 — Selo Balcão presencial INSS | 5 min API + 7-21 dias de calendário | Agendar via 135 (5 min). | Acompanhar comparecimento + selo aplicado. | Baixa quando o cliente comparece — alto no-show (~25-35%). |

**Mix esperado revisado (v1.1):**

Considerando o público-alvo MC (~55-65% Bronze, dos quais 40-55% têm contribuição):

| Rota | Mix v1.0 | Mix v1.1 | Justificativa da mudança |
|---|---|---|---|
| Rota 0 — KBA | 0% | **25%** | Captura a fração Bronze com contribuição + inteligência contributiva preparada. |
| Rota 1 — Banco | 60% | **45%** | Continua sendo a mais robusta e a única para BPC puro / bancarizados sem contribuição. Cede 15% para KBA. |
| Rota 2 — Câmera | 25% | **15%** | Cede 10% para KBA quando o cliente tem contribuição mas a biometria está degradada. |
| Rota 3 — Balcão | 15% | **15%** | Mantido — mesmos clientes (sem contribuição + sem banco + sem biometria + sem CIN). |

**Custo médio ponderado por elevação (revisado v1.1):**

`0,25 × 22 (KBA) + 0,45 × 12 (banco) + 0,15 × 30 (câmera) + 0,15 × 5 (balcão)` = **~15,4 minutos/elevação** (era 17 min em v1.0).

**Interpretação:** mesmo com KBA tendo tempo médio (22 min) maior que banco (12 min), o mix v1.1 reduz o custo médio em ~9% porque move volume de Rota 2 (30 min) para Rota 0 (22 min) e mantém Rota 3 estável.

**Inferência para escala (revisada v1.1):**
- Um operador a 6h/dia consegue **~23 elevações/dia** (era 21 em v1.0) em regime de cruzeiro.
- Ganho mais significativo, porém, é em **cobertura**: a Rota 0 destrava clientes que estavam vetados em Rota 1 (sem banco) e Rota 2 (sem biometria adequada) — clientes que iam direto para Rota 3 (balcão presencial 7-21 dias). A v1.1 estima que **~10% do funil** que iria para balcão volta para rota digital remota — ganho de **dias-semanas de tempo de jornada** por cliente.

### 5.4 Posição ética sobre operação KBA — Cenários A / A+ / B *(NOVA v1.1)*

Decisão arquitetural Alessandro 08/05 — **INVIOLÁVEL.** Define como a API Humana MC pode (e como NÃO pode) operar o fluxo KBA.

#### Cenário A — Preparação (APROVADO)

> **MC colhe inteligência contributiva (uma das 4 fontes) → monta a "cola legítima" → cidadão abre sessão gov.br no PRÓPRIO celular → Beto guia pelo WhatsApp:** *"Dona Maria, vai aparecer pergunta sobre o ano da última contribuição. Pela sua carteira, a resposta é 2008. Clica em 2008."* **Cidadão opera o aparelho, MC orienta.**

- **Por que é legítimo:** o conteúdo da "cola" é **dado próprio do titular** (CNIS é dele, CTPS é dele, memória é dele, extrato pelo 135 também é dele — direito de acesso LGPD Art. 18, I-II). O MC não introduz informação externa nem responde no lugar; o MC **organiza e devolve ao cidadão a própria história**.
- **Por que não viola Lei 14.063/2020 Art. 6º:** a sessão é do cidadão, no aparelho do cidadão, com identificação do cidadão. Não há transferência de identidade digital — há assistência técnica.
- **Sustentação ética:** equivale ao filho que abre o álbum de família junto com a mãe e diz *"olha, esse aniversário foi em 1989"* — não está burlando a memória, está reativando-a com prova material.

#### Cenário A+ — Operação assistida com sessão compartilhada (APROVADO com protocolo)

> **Cidadão em videochamada WhatsApp com Beto. Beto vê a tela do cidadão (compartilhamento). Cidadão clica onde Beto indica. Tudo gravado com consentimento. Assistência técnica, não substituição de identidade.**

- **Por que é necessário:** clientes com analfabetismo digital severo (E5 T2.06) ou tremor (T2.07) podem não conseguir interpretar/operar telas mesmo com a "cola" do Cenário A.
- **Protocolo obrigatório:**
  1. Consentimento explícito gravado no início da sessão: *"O senhor está autorizando que eu veja a tela do seu celular para te ajudar a clicar nos botões certos. Eu não vou pegar sua senha. Posso continuar?"*
  2. Cidadão sempre digita as próprias credenciais e clica nos próprios botões — Beto **nunca** opera o aparelho do cidadão remotamente.
  3. Sessão gravada do início ao fim, retenção 5 anos para auditoria/defesa.
  4. Auditoria amostral 100% das primeiras 50 sessões, depois 10% rotativo.

#### Cenário B — Operação delegada (VETADO por desenho — ADR-009a)

> **MC tem senha em custódia → Beto abre sessão no computador do MC → responde KBA pelo cidadão.**

- **Por que é vetado:** viola **três camadas simultaneamente**:
  1. **Lei 14.063/2020 Art. 6º** — vedação à transferência da identidade digital.
  2. **ADR-009a do MC** — custódia zero de credenciais (princípio fundante do produto).
  3. **Termo de Uso da Plataforma gov.br** — intransferibilidade da conta.
- **Por que importa diferenciar:** este é **exatamente o que despachantes informais fazem**. A diferença entre o MC e um despachante não é a tecnologia (são as mesmas ferramentas: WhatsApp, smartphone, conta gov.br). A diferença é **o vetor ético**: o despachante captura a identidade do cliente; o MC **recusa** capturar e devolve agência ao cliente.
- **Inversão Cósmica (Alessandro):** mesmas ferramentas, propósito oposto. O Cenário B **destruiria a tese** do MC — não apenas seria ilegal, seria **conceitualmente o mesmo produto que o MC se propõe a substituir**.

**Operacionalização do veto:** o MC nunca pede senha gov.br ao cliente; nunca digita por ele em aparelho do MC; nunca opera sessão do cliente em hardware que não seja o do próprio cliente (com a única exceção do A+, onde o cliente continua operando o próprio aparelho — Beto apenas vê a tela e orienta verbalmente).

### 5.5 Hook 0 — Triagem de nível gov.br *(NOVA v1.1)*

Decisão arquitetural Alessandro 08/05. **Insere-se na jornada MC ANTES do RouterEthics, ANTES de qualquer ação operacional.** A finalidade é determinar a **Rota de Elevação** (0/1/2/3) o mais cedo possível, evitando começar a operação errada e ter que voltar.

#### Fluxo decisório do Hook 0

```
PASSO 0 — Verificar nível gov.br conhecido pelo cliente
  Pergunta: "Você sabe qual o nível da sua conta gov.br?"
  Caminho A: Cliente sabe e está em Prata/Ouro → pular Hook 0, ir direto ao RouterEthics.
  Caminho B: Cliente não sabe ou está em Bronze (maioria) → continuar para PASSO 1.

PASSO 1 — Coletar inteligência contributiva (5 perguntas WhatsApp)
  P1: "Você já trabalhou de carteira assinada?"                        → Sim / Não
  P2: "Tem a carteira de trabalho antiga? Pode mandar foto?"           → Sim / Não
  P3: "Tem algum papel do INSS em casa? Extrato, carta?"               → Sim / Não
  P4: "Lembra mais ou menos em que ano foi seu último trabalho?"       → [ano] / Não lembro
  P5: "Já recebe algum benefício do INSS ou Bolsa Família?"            → BPC / Aposentadoria / BF / Nenhum

PASSO 2 — Classificar Rota de Elevação
  REGRA 1: Se P1 = Sim E (P2 = Sim OU P3 = Sim OU P4 = respondeu)
           → Rota 0 KBA (Bronze direto, inteligência contributiva confirmada)

  REGRA 2: Se P1 = Sim E P2/P3/P4 todos negativos
           → Rota 0 KBA, mas precisa de Fonte 4 (Beto liga 135) ANTES de iniciar
           → escalonar tempo: +20-40 min de pré-trabalho 135

  REGRA 3: Se P1 = Não E P5 = BPC puro / BF puro
           → Rota 0 KBA fechada (nunca contribuiu)
           → ir para Rota 1 (banco) se bancarizado, senão Rota 3 (balcão)

  REGRA 4: Se P2 = Sim → CTPS é backup probatório SEMPRE,
           independentemente da rota escolhida (utilidade transversal: prova
           administrativa Lei 9.784/1999, recurso CRPS, futura DER).

  REGRA 5: Se P5 = Aposentadoria → cliente provavelmente já passou por algum
           fluxo Prata no passado (DER foi feita) — investigar se a credencial
           só "esfriou" e basta recuperar (T1.14) antes de eleger Rota.
```

#### Por que Hook 0 vem ANTES do RouterEthics

O RouterEthics decide *qual problema atacar* (custódia de senha? procuração? CadÚnico?). O Hook 0 decide *qual rota técnica usar* assumindo que já existe um problema a atacar. Sem Hook 0, o MC pode começar a executar Rota 1 (banco) e descobrir 10 minutos depois que o cliente não tem internet banking — perda evitável. Hook 0 transforma a triagem em **árvore de decisão de 2 minutos** que dispara a rota certa de cara.

#### Custo do Hook 0

- 5 perguntas de WhatsApp = **2-5 minutos** de operador (texto assíncrono).
- Resposta do cliente pode ser síncrona ou assíncrona.
- Se cliente envia foto da CTPS/CNIS, OCR/leitura humana adiciona +5 min.
- **Compensação:** evita ~10-30 min de execução em rota errada, segundo perfis-alvo. ROI > 2x.

---

## 6. Changelog v1.0 → v1.1 *(NOVO)*

Todas as alterações entre v1.0 (gravada em 08/05/2026) e v1.1 (gravada também em 08/05/2026, mesmo dia, após descoberta empírica). **Fonte primária das correções: E5 (MC-GOVBR-CatalogoTravas-v1_0-2026-0508), Seção 8.**

| Seção v1.0 | Alteração v1.1 | Justificativa |
|---|---|---|
| Frontmatter | Adicionados campos `status: RASCUNHO — REVISÃO PÓS-KBA`, `supersede: E4 v1.0`, fonte estendida para incluir E5 e decisão Alessandro. | Marcar publicamente que é revisão (não original) e que substitui v1.0 para fins de leitura operacional. |
| §1.1 (Meu INSS) — cabeçalho | Adicionada **Nota KBA** explicando o gateway Selo Previdenciário. | E5 Seção 8: "Acrescentar linha sobre Selo Previdenciário em Meu INSS — fonte EMPÍRICA 08/05." |
| §1.1 (Meu INSS) — tabela | Adicionada coluna **"Rota alternativa via KBA?"** em todos os 11 serviços; adicionada 12ª linha "Selo Previdenciário via KBA". | E5 Seção 8: explicitar quando a rota KBA destrava cada serviço; adicionar o KBA como entrada própria. |
| §1.2 (CadÚnico) — cabeçalho | Adicionada **Nota KBA** explicando que selo Previdenciário não cobre Φ₀. | E5 §7 L4: lacuna sobre existência de KBA para CadÚnico/RFB; até confirmação, manter Φ₀ fora do escopo KBA. |
| §1.3 (e-CAC) — cabeçalho | Adicionada **Nota KBA** sobre dependência de L_KBA_2 (escopo do selo). | E5 §7 L2: definir publicamente que recomendação operacional MC depende dessa lacuna. |
| §1 (rodapé) | Total de serviços: 27 → 28. Confiança agregada recalculada incluindo 1 entrada EMPÍRICO 08/05. | Coerência interna do score com a nova entrada KBA. |
| §2.1 (Bronze) | Renomeado para "Bronze puro". Métricas atualizadas (27→28 denominador). | Distinção semântica do novo cenário 2.1b. |
| §2.1b (Bronze + KBA) | **Seção inteiramente nova.** Cenário com selo KBA aplicado, com cenários otimista (Prata pleno) e pessimista (interno Meu INSS). Decisão de produto provisória: operar pelo cenário pessimista até confirmação L_KBA_2. | E5 Seção 8: "Adicionar cenário 2.1b: Bronze + Selo Previdenciário KBA com estimativa revisada de cobertura, manter cenário 2.1 original para comparação." |
| §2.2 (Prata) | Métricas atualizadas (27→28 denominador). | Coerência. |
| §2.3 (Ouro) | Métricas atualizadas (27→28 denominador). | Coerência. |
| §3.1 (O nó da jornada MC) | **Reformulação substancial.** Gargalo redefinido como "nível de conta OU conhecimento contributivo" (era apenas "nível de conta"). Adicionadas as **4 fontes de inteligência contributiva** (CNIS físico, CTPS, memória, 135). Tabela E0→E5 mantida; redação atualizada para refletir a nova rota. Estimativa Bronze%-com-contribuição (40-55%) acrescentada. | E5 Seção 8: "Revisar gargalo: não é mais 'nível de conta' puro. É 'nível de conta OU conhecimento do próprio histórico'. Incorporar as 4 fontes alternativas como pré-condições para a rota KBA." |
| §3.2 (Nível mínimo viável) | Justificativa de Φ₁ atualizada para mencionar KBA como rota alcançável. Justificativa de Φ₀ explicitamente nega cobertura KBA (até L_KBA_4). Justificativa de Φ₄ atualizada. | Coerência com §1 e §5.2. |
| §3.3 (Serviços sem conta gov.br) | **Central 135 reforçada como Fonte 4 da inteligência contributiva**. Acrescentada observação operacional sobre o 135 como peça-chave da estratégia KBA. | E5 Seção 8: "Adicionar Fonte 4 (Central 135 para obter CNIS por telefone) como rota de fallback." |
| §4 (Lacunas da matriz) | **4 lacunas KBA novas** acrescentadas (L_KBA_1..4) — herdadas de E5 §7. | E5 Seção 8 (implícito): incorporar lacunas que dependem da v1.1. |
| §5.1 (Nível-alvo padrão) | **Adendo** sobre KBA como rota mais eficiente quando aplicável. Conclusão original (Prata como alvo) preservada. | E5 Seção 8: "Revisar mix de rotas: incorporar KBA como Rota 0." |
| §5.2 (Rotas prioritárias) | **Renumeração: 3 rotas → 4 rotas.** KBA inserida como **Rota 0** no topo. Rotas anteriores preservadas com seus pesos relativos atualizados. | E5 Seção 8: "Renumerar como Quatro rotas: KBA, banco, câmera traseira, balcão. Revisar pesos." |
| §5.3 (Custo operacional) | Tabela de tempos atualizada com Rota 0 (KBA, 22 min). **Mix esperado revisado**: 25% KBA / 45% banco / 15% câmera / 15% balcão. **Custo médio ponderado recalculado: 17 → 15,4 min/elevação**. Inferência de escala atualizada (21 → 23 elevações/operador-dia). Acrescentada observação de ganho de cobertura (~10% do funil sai de Rota 3 presencial). | E5 Seção 8: "Recalcular custo médio ponderado: 0,45×12 + 0,25×22 + 0,15×30 + 0,15×5 = ~15,4 min/elevação." |
| §5.4 (Posição ética KBA — A/A+/B) | **Seção inteiramente nova.** Cenário A (Preparação — APROVADO), Cenário A+ (Operação assistida — APROVADO com protocolo), Cenário B (Operação delegada — VETADO por ADR-009a). Descreve protocolo de Cenário A+ com 4 itens obrigatórios. Articula a **Inversão Cósmica** (mesmas ferramentas dos despachantes, propósito oposto) como tese central do produto. | E5 Seção 8: "Adicionar seção 5.4: Posição ética sobre operação KBA — Cenários A/A+/B com a decisão Alessandro transcrita." |
| §5.5 (Hook 0) | **Seção inteiramente nova.** Fluxo decisório de 5 perguntas WhatsApp (P1-P5) e 5 regras de classificação de rota (R1-R5). Justifica posição ANTES do RouterEthics. Custo do Hook 0 (~2-5 min) e ROI esperado (~2x). | E5 Seção 8: "Adicionar seção 5.5: Hook 0 — Triagem de nível gov.br com o fluxo decisório transcrito." |
| §6 (Changelog) | **Seção inteiramente nova.** Esta seção. | E5 Seção 8 (sugestão E5): "Nova Seção 6: Changelog v1.0 → v1.1." |
| Apêndice A (Sinais de atualização) | Acrescentada linha sobre **mudança no fluxo KBA** (cooldown, scope, perguntas) e **confirmação/desconfirmação de L_KBA_2**. | E5 Seção 8: "Acrescentar: 'Mudança no fluxo KBA Dataprev, confirmação ou desconfirmação de que selo KBA = Prata pleno em outros serviços gov.br.'" |

---

## Apêndice A — Sinais de que esta matriz precisa ser atualizada

- Publicação de qualquer **portaria sobre níveis gov.br** (norma fantasma F4 de E3) que altere requisitos.
- Publicação de portarias INSS sobre **biometria BPC** (norma F5 de E3) — pode mover prova de vida de Ouro para Prata ou criar novas exigências.
- Mudança no fluxo de **prova de vida digital** com banco — atualmente é o ponto mais frágil do Φ₄.
- Lançamento de novo serviço gov.br ou substituição de portal (e.g., novo Meu INSS).
- **Mudança no fluxo KBA Dataprev *(novo v1.1)*** — alteração no cooldown (L_KBA_1), no scope OAuth, no questionário ou na lista de perguntas.
- **Confirmação ou desconfirmação de L_KBA_2 *(novo v1.1)*** — se selo KBA equivale a Prata pleno gov.br ou apenas acesso interno Meu INSS. Esta confirmação pode promover (Rota 0 ampla) ou rebaixar (Rota 0 tática Φ₁) o KBA na hierarquia operacional.
- **Aparecimento de outros KBA *(novo v1.1)*** — se confirmados scopes `_cadunico`, `_rfb` ou outros, redesenhar §1.2 e §1.3.

---

E4.1 gravado: G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Gestão Software\Documentação\CONTA GOV.BR PRATA OURO\MC-GOVBR-Matriz-NivelServico-v1_1-2026-0508.md
