---
título: MC-GOVBR-MapaNormativo-Hierarquico
versão: v1_0
data: 2026-05-08
status: RASCUNHO
autor: Claude Code × Alessandro Neves
fonte: E1 (Inventário) + E2 (Taxonomia)
---

# MC-GOVBR — Mapa Normativo Hierárquico

> Documento E3 — derivado de **E1 (MC-GOVBR-Inventario-Fontes)** e **E2 (MC-GOVBR-Taxonomia-Unificada)**.
> Convenção: cada referência a E1 vem como `[n E1]`. Origem da fonte é classificada como:
> - **DIRETA**: texto integral / página oficial da norma está em E1.
> - **INFERIDA**: a norma é citada por uma fonte secundária de E1 (notícia, blog, FAQ, vídeo) sem que o texto integral esteja no inventário.
> - **NÃO CITADA**: não aparece em E1 nem E2, mas integra o substrato jurídico necessário para a análise do MC.

---

## 1. Pirâmide normativa

### 1.1 Constituição Federal

| Dispositivo | Ementa (1 linha) | O que regula sobre gov.br / identidade / representação | Status | Fonte E1 | Origem |
|---|---|---|---|---|---|
| **CF Art. 5º, II** | Princípio da legalidade. | Veda exigência de ato sem previsão legal — limita imposição de barreiras digitais não-normatizadas. | VIGENTE | — | NÃO CITADA |
| **CF Art. 5º, X** | Inviolabilidade da intimidade e dado pessoal. | Substrato constitucional da LGPD; base do impedimento à custódia de senha alheia. | VIGENTE | — (substrato de [BLOCO 4 E1]) | NÃO CITADA |
| **CF Art. 5º, XXXIII** | Direito de receber informações dos órgãos públicos. | Fundamenta acesso a dados do beneficiário pelo representante legal. | VIGENTE | — | NÃO CITADA |
| **CF Art. 5º, XXXIV, "a"** | Direito de petição independente de pagamento. | Fundamenta a jornada Φ₁ (protocolar INSS / e-CAC) — petição é direito, não privilégio do nível Ouro. | VIGENTE | — | NÃO CITADA |
| **CF Art. 37, caput** | Princípios da administração pública (eficiência, publicidade). | Base para o dever de Governo Digital acessível e para revisão de barreiras digitais excludentes. | VIGENTE | — | NÃO CITADA |
| **CF Art. 230** | Família, sociedade e Estado têm dever de amparar idosos. | Dá lastro constitucional à atuação assistida do MC perante o idoso hipervulnerável. | VIGENTE | — | NÃO CITADA |

### 1.2 Leis Federais

| Norma | Ementa | O que regula sobre o tema | Status | Fonte E1 | Origem |
|---|---|---|---|---|---|
| **Lei 13.709/2018 (LGPD)** | Lei Geral de Proteção de Dados Pessoais. | Define base legal para tratamento de dados; impede custódia clandestina de credenciais; obriga DPIA quando há vulnerável. | VIGENTE | [BLOCO 4 E1] cita LGPD genérica | INFERIDA |
| **Lei 14.063/2020** | Uso de assinaturas eletrônicas em interações com entes públicos. | **Hierarquiza** assinaturas em Simples / Avançada / Qualificada — espelho de Bronze / Prata / Ouro. **Veda transferência da identidade digital** (Art. 6º), núcleo do ADR-009a. | VIGENTE | [P:4 E1] cita "Lei 14.063/2020 veda" | INFERIDA |
| **Lei 14.129/2021** | Marco do Governo Digital. | Princípios do Governo Digital, interoperabilidade, Conta gov.br como identidade digital única. | VIGENTE | — (referenciada por [6 E1] gov.br/engd) | INFERIDA |
| **Lei 13.460/2017** | Código de Defesa do Usuário do Serviço Público. | Direito a serviço público adequado, acessível, com tempo razoável — fundamenta reclamação de barreira digital excludente. | VIGENTE | — | NÃO CITADA |
| **Lei 9.784/1999** | Processo Administrativo Federal. | Define quem pode atuar como representante; legitimidade de procuração no procedimento administrativo (Φ₁ INSS). | VIGENTE | — | NÃO CITADA |
| **Lei 13.146/2015** (LBI) | Estatuto da Pessoa com Deficiência. | Acessibilidade obrigatória; tomada de decisão apoiada (Art. 84-87); impacta API Humana e Categoria D. | VIGENTE | — (substrato de [10, 15, 20 E1]) | NÃO CITADA |
| **Lei 10.741/2003** | Estatuto da Pessoa Idosa. | Atendimento prioritário; proteção à autonomia; lastro para Categoria D. | VIGENTE | — | NÃO CITADA |
| **Lei 8.213/1991** | Plano de Benefícios da Previdência Social. | Base de toda a jornada Φ₁ (BPC, aposentadoria, pensão). | VIGENTE | — (substrato de [7, 17, 18, 35, 44 E1]) | NÃO CITADA |
| **Lei Complementar 142/2013** | BPC para PcD. | Critérios do BPC — público-alvo central do MC. | VIGENTE | — (substrato de [7, 10 E1]) | NÃO CITADA |
| **Código Civil — Arts. 1.767-1.783-A** | Curatela e Tomada de Decisão Apoiada. | Instrumento jurídico da representação no caso de incapacidade civil (BLOCO 4.4 E1). | VIGENTE | — (substrato de [BLOCO 4.4 E1]) | NÃO CITADA |

### 1.3 Decretos Federais

| Norma | Ementa | O que regula | Status | Fonte E1 | Origem |
|---|---|---|---|---|---|
| **Decreto 10.543/2020** | Define níveis de garantia das assinaturas eletrônicas no âmbito da administração pública federal. | Cria os 3 graus de confiança (simples/avançada/qualificada) que mapeiam para Bronze/Prata/Ouro. **Norma central** da pirâmide. | VIGENTE | — (tema central de E1, não citado nominalmente) | NÃO CITADA |
| **Decreto 10.332/2020** | Estratégia de Governo Digital (EGD) 2020-2022. | Direcionadores estratégicos da unificação de identidade. | VIGENTE | [6 E1] (engd, sucessor) | INFERIDA |
| **Decreto 11.260/2022** | Política Nacional de Governo Digital. | Atualiza diretrizes pós-EGD. | VIGENTE | — | NÃO CITADA |
| **Decreto 8.539/2015** | Uso de meio eletrônico para processo administrativo na adm. federal. | Base para requerimentos digitais; prova documental eletrônica. | VIGENTE | — | NÃO CITADA |
| **Decreto 10.048/2000** | Atendimento prioritário a PcD, idosos, gestantes. | Lastro presencial nas rotas via balcão INSS / agências bancárias. | VIGENTE | — (substrato de [BLOCO 3.4 E1]) | NÃO CITADA |
| **Decreto 6.949/2009** | Promulga a Convenção da ONU sobre Direitos das Pessoas com Deficiência. | Status supralegal; obriga acessibilidade. | VIGENTE | — | NÃO CITADA |

### 1.4 Portarias SGD/MGI

| Norma | Ementa | O que regula | Status | Fonte E1 | Origem |
|---|---|---|---|---|---|
| **Portaria SGD/MGI nº 5.950, de 26/10/2023** | Modelo de Contratação de Software e Serviços em Nuvem. | ⚠ **NÃO regula níveis gov.br** — apesar de ser citada em E1 [BLOCO 1] como fundamento dos níveis. **Misattribuição em E1**. Regula apenas contratação de TI por órgãos públicos. | VIGENTE | [19, 20 E1] | DIRETA |
| **Portaria SGD/MGI nº 750, de 20/03/2023** | Modelo de contratação de serviços de desenvolvimento de software. | ⚠ Idem — não regula identidade digital. | VIGENTE | [43 E1] | DIRETA |
| **Portaria SGD/MGI sobre níveis Bronze/Prata/Ouro** | Provavelmente Portaria SGD/SEDGG nº 2.154/2021 ou Portaria SGD/MGI nº 32/2024 — fixação dos selos de confiabilidade. | Operacionaliza juridicamente os 3 níveis no app gov.br. **Norma viva da pirâmide**, não localizada em E1. | NÃO CONFIRMADA | — | NÃO CITADA |
| **Portaria CD/INSS — biometria BPC 2024/2025** | Conjunto de portarias INSS exigindo prova biométrica para BPC/LOAS. | Cria a obrigação que sustenta a "barreira da câmera" descrita no BLOCO 6 do E1. | NÃO CONFIRMADA | [BLOCO 6 E1, P:11 E1] (citada genericamente) | INFERIDA |

### 1.5 Instruções Normativas e atos do INSS / Receita Federal

| Norma | Ementa | O que regula | Status | Fonte E1 | Origem |
|---|---|---|---|---|---|
| **IN INSS/PRES nº 128/2022** | Manual de Procedimentos de Reconhecimento e Manutenção de Direitos. | Disciplina cadastramento de representante legal, documentação aceita, fluxos administrativos. | VIGENTE (com alterações) | — (referenciada em [17, 18, 44 E1]) | INFERIDA |
| **IN RFB sobre Procuração Digital e-CAC** | Procedimentos da procuração eletrônica RFB. | Operacionaliza a procuração no e-CAC (BLOCO 4.2 E1). | VIGENTE | [38 E1] cita o serviço, não a IN | INFERIDA |
| **Portaria/Resolução ICP-Brasil (ITI)** | Conjunto de Resoluções AC-Raiz que disciplinam certificados A1, A3, e na nuvem. | Suporte normativo da Rota 6 (E-CPF). | VIGENTE | [42 E1] (questões de concurso) | INFERIDA |

### 1.6 Resoluções e atos administrativos

| Norma | Ementa | O que regula | Status | Fonte E1 | Origem |
|---|---|---|---|---|---|
| **Resoluções do Comitê de Governança Digital** | Diretrizes intra-MGI. | Normalmente não publicizadas — dificulta auditoria externa. | VIGENTE | — | NÃO CITADA |
| **Termo de Uso da Plataforma gov.br** | Adesão clickwrap obrigatória ao usar app. | Define obrigações do usuário (intransferibilidade, veracidade). | VIGENTE | [37 E1] (termo CONAMA, análogo) | INFERIDA |

---

## 2. Matriz norma × impacto MC

Valores: **DIRETO** | **INDIRETO** | **NENHUM**.

| Norma | Φ₁ Protocolar INSS | Φ₀ CadÚnico | Custódia de senha (ADR-009a) | Representação por terceiros | API Humana MC |
|---|---|---|---|---|---|
| CF Art. 5º, XXXIV (petição) | **DIRETO** | INDIRETO | NENHUM | INDIRETO | NENHUM |
| CF Art. 5º, X (privacidade) | INDIRETO | INDIRETO | **DIRETO** | INDIRETO | INDIRETO |
| CF Art. 37 (eficiência) | INDIRETO | INDIRETO | NENHUM | INDIRETO | INDIRETO |
| CF Art. 230 (amparo idoso) | INDIRETO | INDIRETO | NENHUM | **DIRETO** | **DIRETO** |
| Lei 13.709/2018 (LGPD) | INDIRETO | INDIRETO | **DIRETO** | **DIRETO** | **DIRETO** |
| Lei 14.063/2020 (assinaturas) | **DIRETO** | INDIRETO | **DIRETO** | INDIRETO | **DIRETO** |
| Lei 14.129/2021 (Marco GD) | INDIRETO | INDIRETO | INDIRETO | INDIRETO | INDIRETO |
| Lei 13.460/2017 (usuário SP) | **DIRETO** | **DIRETO** | NENHUM | NENHUM | INDIRETO |
| Lei 9.784/1999 (processo adm.) | **DIRETO** | INDIRETO | NENHUM | **DIRETO** | NENHUM |
| Lei 13.146/2015 (LBI) | INDIRETO | INDIRETO | NENHUM | **DIRETO** (TDA) | **DIRETO** |
| Lei 10.741/2003 (Idoso) | INDIRETO | INDIRETO | NENHUM | **DIRETO** | **DIRETO** |
| Lei 8.213/1991 (Previdência) | **DIRETO** | NENHUM | NENHUM | INDIRETO | INDIRETO |
| LC 142/2013 (BPC) | **DIRETO** | **DIRETO** | NENHUM | INDIRETO | INDIRETO |
| CC Arts. 1.767-1.783-A (curatela / TDA) | **DIRETO** | INDIRETO | NENHUM | **DIRETO** | INDIRETO |
| Decreto 10.543/2020 (graus confiança) | **DIRETO** | **DIRETO** | INDIRETO | **DIRETO** | **DIRETO** |
| Decreto 10.332/2020 (EGD) | INDIRETO | INDIRETO | INDIRETO | INDIRETO | INDIRETO |
| Decreto 11.260/2022 (Política GD) | INDIRETO | INDIRETO | INDIRETO | INDIRETO | INDIRETO |
| Decreto 8.539/2015 (proc. eletrônico) | **DIRETO** | INDIRETO | NENHUM | INDIRETO | NENHUM |
| Decreto 10.048/2000 (prioritário) | INDIRETO | INDIRETO | NENHUM | INDIRETO | **DIRETO** |
| Decreto 6.949/2009 (Conv. PcD) | INDIRETO | INDIRETO | NENHUM | INDIRETO | **DIRETO** |
| Portaria SGD/MGI 5.950/2023 (nuvem) | NENHUM | NENHUM | NENHUM | NENHUM | NENHUM |
| Portaria SGD/MGI 750/2023 (dev) | NENHUM | NENHUM | NENHUM | NENHUM | NENHUM |
| Portaria SGD sobre níveis (não confirmada) | **DIRETO** | **DIRETO** | INDIRETO | **DIRETO** | **DIRETO** |
| Portarias INSS biometria BPC 2024/2025 | **DIRETO** | NENHUM | NENHUM | **DIRETO** | **DIRETO** |
| IN INSS/PRES nº 128/2022 | **DIRETO** | NENHUM | NENHUM | **DIRETO** | **DIRETO** |
| IN RFB Procuração e-CAC | **DIRETO** (e-CAC) | NENHUM | NENHUM | **DIRETO** | INDIRETO |
| Resoluções ICP-Brasil | INDIRETO | NENHUM | INDIRETO | INDIRETO | INDIRETO |
| Termo de Uso gov.br | INDIRETO | INDIRETO | **DIRETO** | **DIRETO** | INDIRETO |

**Leitura da matriz:**

- **ADR-009a (custódia de senha)** depende essencialmente de 4 normas: LGPD + Lei 14.063/2020 + CF Art. 5º X + Termo de Uso gov.br. As 4 são impacto DIRETO e convergem na vedação de retenção de credenciais.
- **Φ₁ (protocolar INSS)** se sustenta sobre uma cadeia administrativa: CF XXXIV + Lei 9.784/1999 + Lei 8.213/1991 + IN INSS 128/2022 + Decreto 10.543/2020.
- **Φ₀ (CadÚnico)** tem espinha mais curta: Lei 13.460/2017 + LC 142/2013 + Decreto 10.543/2020 (gateway de nível para acesso aos serviços CadÚnico digitais).
- **API Humana MC** é o que mais converge com o eixo de acessibilidade (LBI, Estatuto do Idoso, Decreto PcD ONU, Decreto 10.048).
- ⚠ As duas portarias SGD/MGI **efetivamente em E1** não impactam nenhum dos 5 eixos do MC — confirmam que E1 mapeou normas correlatas, não as fundantes.

---

## 3. Normas fantasma (citadas mas não localizadas)

Normas mencionadas em E1 ou E2 cuja **fonte primária (texto integral) não está no inventário**.

| # | Norma | Onde foi citada | Por que é relevante para o MC | Ação |
|---|---|---|---|---|
| F1 | **Lei 14.063/2020** (assinaturas eletrônicas) | E1 [P:4 do FAQ] cita "Lei 14.063/2020 veda" | Fundamento direto do ADR-009a (custódia zero) e do mapeamento Bronze/Prata/Ouro ↔ assinatura simples/avançada/qualificada. | **BUSCAR** texto integral em planalto.gov.br |
| F2 | **Lei 13.709/2018 (LGPD)** | E1 [BLOCO 4] cita LGPD em referência genérica | Pilar de toda a arquitetura de privacidade do MC. Necessária para definir base legal de tratamento (consentimento + tutela de hipervulnerável). | **BUSCAR** texto integral + Resolução ANPD nº 2/2022 |
| F3 | **Decreto 10.543/2020** (graus de confiança) | Tema central de E1 [BLOCO 1], **não citado nominalmente** | Norma de hierarquia média que materializa juridicamente os níveis. Sem ela o Router-Ethics Hook gov.br fica sem âncora. | **BUSCAR** texto integral |
| F4 | **Portaria SGD que regula selos Bronze/Prata/Ouro** (provavelmente nº 2.154/2021 ou nº 32/2024) | E1 [BLOCO 1] atribui essa função à Portaria 5.950/2023, **mas é misattribuição** | Sem identificar a portaria correta, o MC opera no escuro sobre o ato infralegal vivo. | **LAI** ao MGI/SGD pedindo a "portaria atualmente vigente que disciplina selos de confiabilidade da Conta gov.br" |
| F5 | **Portarias INSS sobre prova biométrica BPC 2024–2025** | E1 [BLOCO 6, P:11] cita "Portarias e Resoluções expedidas sob o MGI e Ministério da Previdência Social no calendário 2024/2025" | Define o gatilho que torna a barreira da câmera obrigatória. Crítica para Φ₁ e para representação. | **LAI** ao INSS + busca em in.gov.br por "biometria BPC" filtrado 2024–2025 |
| F6 | **IN INSS/PRES nº 128/2022** | E2 lacuna #5 cita; E1 [17, 18, 44] referenciam o serviço | Manual operacional dos cadastramentos de representante legal — mãe normativa da Φ₁ via terceiro. | **BUSCAR** no portal INSS Legislação |
| F7 | **Lei 14.129/2021** (Marco do Governo Digital) | Implícita em E1 [6] (engd) | Define a Conta gov.br como identidade digital única e governa interoperabilidade entre órgãos. | **BUSCAR** texto integral |
| F8 | **Lei 13.146/2015** (Estatuto da Pessoa com Deficiência / LBI) | Implícita em E1 [10, 15, 20] | Tomada de Decisão Apoiada (Art. 84-87) é instrumento alternativo à curatela — base jurídica da API Humana MC. | **BUSCAR** texto integral, com foco nos arts. 84-87 |
| F9 | **Lei 10.741/2003** (Estatuto da Pessoa Idosa) | Implícita em E1 categoria D | Atendimento prioritário, proteção à autonomia — público-alvo do MC. | **BUSCAR** texto integral |
| F10 | **Código Civil — Arts. 1.767 a 1.783-A** (curatela e TDA) | Implícita em E1 [BLOCO 4.4] | Dispõe sobre curatela e Tomada de Decisão Apoiada — base do fluxo de representação para PcD intelectual. | **BUSCAR** texto integral do CC |
| F11 | **Lei 13.460/2017** (Defesa do Usuário do Serviço Público) | Não citada em E1, mas substrato | Direito a serviço público adequado → fundamenta crítica formal a barreiras digitais excludentes. | **BUSCAR** texto integral |
| F12 | **Lei 9.784/1999** (Processo Administrativo Federal) | Não citada em E1 | Disciplina representação no processo administrativo (Arts. 9-12). | **BUSCAR** texto integral |
| F13 | **Resoluções ICP-Brasil / ITI** | E1 [42] indireta | Suporte normativo da Rota 6 (certificado digital). | **INFERIR** a partir de [42] e do site do ITI |
| F14 | **Termo de Uso da Plataforma gov.br** | Não citado em E1 (apenas Termo análogo do CONAMA [37]) | Fonte primária das obrigações contratuais do usuário (intransferibilidade, veracidade) — relevante para ADR-009a. | **BUSCAR** em acesso.gov.br/termo-de-uso |
| F15 | **LC 142/2013** (BPC para PcD) | Implícita em E1 [7] | Critérios elegibilidade BPC — público-foco MC. | **BUSCAR** texto integral |
| F16 | **Decreto 10.048/2000** (atendimento prioritário) | Implícita em E1 [BLOCO 3.4] | Direito ao atendimento presencial prioritário — relevante quando a rota é o balcão INSS. | **BUSCAR** texto integral |
| F17 | **Decreto 6.949/2009** (Convenção ONU PcD, status supralegal) | Não citada em E1 | Hierarquia supralegal — argumento para ações civis públicas contra exclusão digital. | **BUSCAR** texto integral |

**Total de normas fantasma:** 17 — sendo 11 com ação **BUSCAR** (texto público disponível), 2 com ação **LAI** (texto não público ou disperso), 1 com ação **INFERIR**.

---

## 4. Cadeia de dependência para o MC

Cada cadeia mostra: norma fundante → norma intermediária → ato infralegal → operação concreta do MC.

### a) Cadeia de níveis de conta (Bronze / Prata / Ouro)

```
CF Art. 37 (eficiência admin.) + CF Art. 5º, XXXIV (petição)
└── Lei 14.129/2021 — Marco do Governo Digital [F7]
    └── Lei 14.063/2020 — Assinaturas Eletrônicas (3 níveis) [F1]
        └── Decreto 10.543/2020 — Graus de Confiança [F3]
            └── Portaria SGD/MGI sobre selos Bronze/Prata/Ouro [F4 — não confirmada]
                └── Termo de Uso gov.br [F14]
                    └── MC: Router-Ethics Hook gov.br (triagem por nível antes de cada ação)
                        └── MC: Φ₁ (protocolar INSS) condicionada a Prata mínimo
                        └── MC: Φ₀ (CadÚnico) condicionada a Bronze qualificado
```

### b) Cadeia de representação legal

```
CF Art. 5º, XXXIV (petição) + CF Art. 230 (amparo idoso)
├── Código Civil — Arts. 1.767 a 1.783-A (curatela e TDA) [F10]
│   └── Lei 13.146/2015 — LBI Arts. 84-87 (TDA) [F8]
│       └── Decisão judicial de curatela / termo de TDA
│           └── IN INSS/PRES nº 128/2022 — cadastramento de representante legal [F6]
│               └── E1 [17, 18, 44] — serviço operacional INSS
│                   └── MC: Φ₁ via representante cadastrado (sem custódia de senha)
│
├── Lei 9.784/1999 — Processo Administrativo Federal (Arts. 9-12) [F12]
│   └── Procuração comum (instrumento particular ou público)
│       └── IN RFB — Procuração Digital e-CAC [F-IN-RFB]
│           └── E1 [38] — serviço operacional RFB
│               └── MC: jornada fiscal (e-CAC) via outorga digital
│
└── Lei 14.063/2020 — Identidade Digital (Art. 6º intransferibilidade)
    └── ADR-009a — custódia zero (MC nunca retém senha)
        └── MC: API Humana opera SEMPRE com sessão do cliente
            ou com representação formal — nunca com substituição clandestina
```

### c) Cadeia de proteção de dados (LGPD)

```
CF Art. 5º, X (intimidade e dado pessoal)
└── Lei 13.709/2018 — LGPD [F2]
    ├── Art. 7º — bases legais de tratamento
    │   └── MC: tutela do hipervulnerável (Art. 7º, IV — proteção de incapaz)
    │       e/ou consentimento qualificado (Art. 7º, I + Art. 8º)
    ├── Art. 9º — transparência
    │   └── MC: aviso de privacidade leigo + canal humano de revisão
    └── Art. 38 — DPIA quando há risco a vulneráveis
        └── MC: relatório de impacto obrigatório por jornada
            └── ADR-009a (custódia zero) reduz a superfície de risco
                └── Lei 14.063/2020 — Art. 6º (intransferibilidade) [F1]
                    └── Termo de Uso gov.br [F14]
                        └── MC: contrato de prestação proíbe expressamente
                            entrega de senha gov.br ao operador humano
```

### d) Cadeia de acessibilidade (PcD / Idoso / TA)

```
CF Art. 5º, caput (igualdade) + CF Art. 230 (amparo idoso)
├── Decreto 6.949/2009 — Convenção ONU sobre Direitos das PcD (status supralegal) [F17]
│   └── Lei 13.146/2015 — LBI [F8]
│       ├── Arts. 3º-5º — acessibilidade obrigatória em produtos digitais
│       │   └── MC: API Humana com 3 camadas de assistência
│       │       (auto-serviço guiado / assistência síncrona / via representante)
│       └── Arts. 84-87 — Tomada de Decisão Apoiada
│           └── alternativa menos invasiva à curatela
│               └── MC: oferece TDA como caminho preferencial quando há discernimento parcial
│
├── Lei 10.741/2003 — Estatuto da Pessoa Idosa [F9]
│   └── Decreto 10.048/2000 — atendimento prioritário [F16]
│       └── MC: priorização explícita (≥ 60 anos / mobilidade reduzida) na fila humana
│
└── E1 [10, 15, 20] — recursos nativos gov.br (câmera traseira, áudio)
    └── MC: orquestração desses recursos pela API Humana
        (operador como "olhos e mãos" do cliente, sem substituí-lo na sessão)
```

---

## Apêndice A — Lacunas normativas críticas (síntese)

Três pontos que requerem ação imediata antes do próximo entregável:

1. **Confirmar a portaria viva de selos gov.br** (F4) — sem isso, a cadeia (a) tem um elo quebrado.
2. **Mapear as portarias INSS BPC 2024–2025** (F5) — sem isso, não dá para prever quando a rota presencial vira obrigatória vs. eletiva.
3. **Trazer texto integral da LBI (F8) e do CC sobre TDA (F10)** — pilar da cadeia (b) e (d) e diferencial competitivo do MC frente a despachantes que operam apenas curatela.

---

E3 gravado: G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Gestão Software\Documentação\CONTA GOV.BR PRATA OURO\MC-GOVBR-MapaNormativo-v1_0-2026-0508.md
