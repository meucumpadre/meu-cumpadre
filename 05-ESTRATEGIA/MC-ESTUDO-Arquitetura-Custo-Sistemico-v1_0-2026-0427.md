# MC-ESTUDO-Arquitetura-Custo-Sistemico-v1.0-2026-0427

## Custo Sistêmico do Anti-Modelo e Valor Sistêmico do MC — Ancoragem Econômica para o ADR-007 v3.1

**Classificação:** CONFIDENCIAL — Uso Interno + Conselho Jurídico Multi-Jurisdicional + Due Diligence Restrita
**Data:** 27 de abril de 2026
**Versão:** v1.0 — PROVISIONAL (sucede e complementa o RADAR COMP Ismael Corrêa v3.1; antecede o MC-ESTUDO v2.0 alinhado à Vertical Premium, jul/2026)
**Idioma:** Português brasileiro formal-institucional
**Hierarquia de evidência adotada:** [RADAR] | [BEPS] | [WEB-PV] (Web Primário Verificado) | [WEB-S] (Secundário) | [EF] (Estimativa Fundamentada) | [GAP]

---

## NOTA DE CONFIDENCIALIDADE E CIRCULAÇÃO

Este documento é peça técnica de natureza estritamente institucional, produzido pela atividade-meio do **Meu Cumpadre — Hybrid Vertical AI Full Stack Company** (CNAE 6201-5/01, desenvolvimento de programas de computador sob encomenda), e **não constitui prestação de serviço advocatício, parecer jurídico-substantivo ou indicação de causa**. Foi escrito para circulação simultânea entre quatro audiências distintas: (i) Dra. Juliana Pereira de Melo, parecerista oficial agendada para 19/05/2026; (ii) Conselho Jurídico Multi-Jurisdicional do MC (oito pareceristas); (iii) potencial investidor em fase de due diligence; (iv) eventual autoridade de controle, regulador OAB ou Ministério Público em sede de investigação. O tom institucional dual e o protocolo Híbrido Prudente — nomear quando a fonte primária nomeia, generalizar em linguagem sistêmica quando a evidência é estrutural — foram adotados desde o primeiro parágrafo da Introdução.

---

## SUMÁRIO EXECUTIVO DUAL-PURPOSE

**Para o investidor (lente econômica).** O mercado advocatício previdenciário brasileiro opera, em ~70-80% dos contratos, uma arquitetura de captura agregada que retém **41% do valor ingressado pelo segurado em casos judicializados típicos** [RADAR], chegando a **61,5% quando há Camada 7 (holding de precatório)** [RADAR]. Sobre esse mercado de **5,2 milhões de processos previdenciários em tramitação** [WEB-PV — CNJ set/2024] e **R$ 21,2 bilhões/ano em precatórios INSS na LOA 2025** [WEB-PV — SOF/Min. Planejamento], o MC oferece, por preço fixo (R$ 1.500 CadÚnico / R$ 2.200 Standard), substituição arquitetônica do modelo dominante. O fator multiplicador médio de economia ao segurado, demonstrado nas Seções 1 e 5, varia de **6× a 35×** conforme espécie. A margem auditada em COGS R$ 578 (Standard 73,7%, CadÚnico 61,5%) é compatível com escala B2C + receita Ψ₁/Ψ₂ B2B.

**Para o regulador / OAB / MP / parecer jurídico (lente institucional).** O modelo dominante "30% sobre retroativo + 5 a 13 parcelas vincendas integrais" [RADAR; tabelas OAB-CE, OAB-BA, OAB-PE, OAB-SP, OAB-GO confirmadas] foi qualificado pelo STJ no **REsp 2.079.440/RO (3ª Turma, Min. Nancy Andrighi, 20/02/2024, unânime)** como passível de configuração de **"advocacia predatória"** quando atinge **beneficiários hipervulneráveis** da Previdência, com legitimidade do Ministério Público para questionamento via ação civil pública [WEB-PV]. O patamar de 30% sobre o benefício previdenciário foi mantido como referencial pelo juízo de origem e confirmado pela 3ª Turma. O MC opera como **atividade-meio digital (CNAE 6201-5/01)**, fora da reserva legal da Lei 8.906/94, instrumentando o cidadão para exercer **autonomamente** sua via administrativa, e por isso constitui **infraestrutura de blindagem** do hipervulnerável contra a captura — não substituição da advocacia, mas inversão de quem detém o controle informacional do dossiê.

**Para a Dra. Juliana e o Conselho Jurídico (lente regulatória-substantiva).** O preço Φ₁ R$ 1.500 / R$ 2.200 resiste com folga ao custo sistêmico documentado neste estudo. O argumento defensivo central não é "somos mais baratos" — é "operamos em outra arquitetura, na qual o cidadão paga uma única vez por software de instrumentalização documental, e o que resulta da concessão administrativa flui integralmente para ele". A vedação ao success fee percentual (ADR-007 v3.1) é a fronteira que mantém o MC do lado correto do firewall OAB.

---

## INTRODUÇÃO — POSICIONAMENTO E COMPROMISSO COM A ESTRUTURA ABERTA

Este não é um estudo de precificação — é um **estudo de custo sistêmico**. Não defende o preço Φ₁ do MC contra preços comparáveis no mercado. Sustenta que o **mercado dominante não tem preço de referência válido** para comparação, porque opera em uma arquitetura em que o "preço" é, na verdade, **uma fração agregada do patrimônio jurídico futuro do segurado** — calculada sobre retroativo, vincendas, sucumbência paga pela União, e externalidades não precificadas que recaem sobre o cidadão, sobre o Estado e sobre o tecido social.

**Compromisso com a Premissa Fundacional — o que o RADAR v3.1 contém além das 7 camadas explícitas.** O RADAR nomeou sete camadas verticais de captura (do contrato inicial à holding de precatório). Mas a leitura integrada do documento revela algo que nenhuma camada isolada nomeia: o modelo dominante não é uma soma de práticas predatórias individuais — é um **sistema de loop de feedback positivo institucionalmente sustentado**. O indeferimento administrativo é tornado funcional ao mercado advocatício porque alimenta a base do retroativo; a tabela OAB codifica o pacote 30%+12 vincendas como referencial técnico; a sucumbência paga pelo INSS subsidia a engrenagem com recursos públicos; a Justiça Federal absorve 5,2 milhões de processos como infraestrutura compulsória de transferência patrimonial; e a vulnerabilidade do segurado torna o consentimento contratual juridicamente formal mas economicamente coagido. **Esse é o "tecido inteiro" cuja agregação produz a captura — e é o objeto da Seção 4 deste documento.**

**Quem fala, de onde fala, com base em quê.** Fala o MC, na qualidade exclusiva de empresa de tecnologia (CNAE 6201-5/01), operadora de software de instrumentação documental para acesso à via administrativa do INSS. Fala com base em (i) RADAR COMP Ismael Corrêa v3.1, calibrado em 27 seccionais OAB e prática declarada; (ii) BEPS oficial Min. Previdência (TMC INSS jan/2026); (iii) CNJ Painel Estatístico Previdenciário; (iv) jurisprudência STJ verificada (REsp 2.079.440/RO); (v) ementários do Conselho Federal da OAB (074/2022/SCA-STU; 034/2024/SCA-TTU); (vi) estimativas fundamentadas declaradas como tal sempre que a fonte primária inexiste publicamente.

**Para quem fala simultaneamente.** Para a Dra. Juliana Pereira de Melo, parecerista contratada com entrega 19/05/2026; para o Conselho Jurídico Multi-Jurisdicional (oito pareceristas); para o investidor em due diligence; para eventual autoridade de controle. Sempre que a evidência primária permite nomeação direta, este estudo nomeia. Sempre que a evidência é estrutural mas a nomeação direta criaria ruído sem agregar precisão, generaliza em linguagem sistêmica. Esse é o protocolo Híbrido Prudente, espelhado da própria arquitetura do RADAR.

---

## SEÇÃO 1 — CUSTO DIRETO AO SEGURADO (DIMENSÃO VISÍVEL)

### 1.1 Retroativo: tabela A (administrativa) × B (judicial) por espécie

A captura sobre o retroativo é a peça mais documentada — e mais subestimada — do modelo dominante. A subestimação decorre de um efeito ótico: o segurado vê o percentual (30%) e não vê a base sobre a qual ele incide. Esta seção corrige esse efeito apresentando a Coluna A (via administrativa, calibrada via BEPS jan/2026) e a Coluna B (via judicial, agora calibrada via Gap B desta pesquisa).

**Tabela 1.1 — Retroativo médio por espécie e via**

| Espécie | Coluna A — Tempo médio adm. (BEPS jan/2026) | Retroativo médio Coluna A (estimado, R$) | Coluna B — Tempo total judicial (meses) | Retroativo médio Coluna B (R$) | Multiplicador B/A | Confiança |
|---|---|---|---|---|---|---|
| **B41** Aposentadoria por Idade | 45,59 dias | R$ 2.500 a R$ 3.200 | 24-30 meses | R$ 38.000 a R$ 56.000 | ~16-20× | A: [BEPS-PV]; B: [EF — derivado CNJ × RMI] |
| **B42** Aposentadoria por Invalidez | 67,26 dias | R$ 4.000 a R$ 5.200 | 24-36 meses | R$ 50.000 a R$ 80.000 | ~11-16× | A: [BEPS-PV]; B: [EF] |
| **B31** Auxílio-Doença | 48,70 dias | R$ 2.700 a R$ 3.400 | 12-24 meses | R$ 22.000 a R$ 40.000 | ~7-15× | A: [BEPS-PV]; B: [EF — Gap C ratificado] |
| **B87** BPC Deficiência | 154,56 dias | R$ 7.700 (5×SM) | 18-36 meses | R$ 27.000 a R$ 55.000 | ~3,5-7× | A: [BEPS-PV]; B: [EF] |
| **B11** Aposentadoria Rural | [BEPS — não desagregado] | [GAP] | 24-48 meses | R$ 36.000 a R$ 73.000 | — | B: [EF] |
| **B91** Acidentário | [BEPS — não desagregado] | [GAP] | 12-24 meses | R$ 20.000 a R$ 35.000 | — | B: [EF] |

**Cálculo da captura típica sobre retroativo.** Aplicando o piso de 30% sobre o ponto médio judicial (Coluna B), a captura por espécie é: B41 ≈ R$ 14.100; B42 ≈ R$ 19.500; B31 ≈ R$ 9.300; B87 ≈ R$ 12.300; B11 ≈ R$ 16.350; B91 ≈ R$ 8.250. Em seccionais que codificam 30% sobre 30% × 12 vincendas (OAB-CE) ou 13 vincendas (OAB-BA), a captura escala adicionalmente entre R$ 19.500 e R$ 31.600 sobre o pacote, dependendo da renda mensal inicial. **A média ponderada estimada sobre o universo das seis espécies é R$ 13.300 capturados do retroativo do segurado por contrato típico.** [EF baseada em CNJ + tabelas OAB verificadas]

### 1.2 Parcelas Vincendas: o quantum total retido por espécie

A Premissa Fundacional fixou: a forma de pagamento das vincendas (0,3 / 0,5 / 0,8 do benefício/mês) é arranjo entre as partes. **O total retido é o que importa: 5 × renda mensal do benefício concedido.**

**Tabela 1.2 — Quantum vincendas por espécie em SM 2026 (R$ 1.621)**

| Espécie | Renda mensal típica (R$) | Pacote 5 vincendas (R$) | Pacote 12 vincendas (CE/SP/GO) | Pacote 13 vincendas (BA) |
|---|---|---|---|---|
| B41 (1,2 SM médio) | 1.945 | 9.725 | 23.340 | 25.285 |
| B42 (1,3 SM médio) | 2.107 | 10.535 | 25.284 | 27.391 |
| B31 (1,15 SM médio, BEPS) | 1.866 | 9.330 | 22.392 | 24.258 |
| B87 (1 SM fixo) | 1.621 | **8.105** | 19.452 | n/a — LOAS = 12 |
| B11 (1 SM fixo) | 1.621 | 8.105 | 19.452 | 21.073 |
| B91 (≈1,5 SM, ticket BEPS R$ 2.141) | 2.535 | 12.677 | 30.420 | 32.955 |

**Leitura institucional.** Os números acima são **direta e exclusivamente o valor que sai do bolso do segurado para o bolso do operador previdenciário** após a concessão judicial. Não há "serviço futuro" sendo prestado durante o período das 5-13 parcelas — o trabalho advocatício foi consumido até o trânsito em julgado. A retenção é, sob qualquer angulação econômica defensável, **pagamento ex post por trabalho ex ante, capturado em fluxo de renda alimentar do hipervulnerável**.

### 1.3 Custo Total Direto por Espécie — síntese da captura visível

**Tabela 1.3 — Captura total direta ao segurado, modelo dominante (30% retroativo + 5 vincendas), pricing OAB médio**

| Espécie | Captura retroativo (R$) | Captura vincendas (R$) | Custo direto total ao segurado (R$) | % do valor total ingressado retido |
|---|---|---|---|---|
| B41 | 14.100 | 9.725 | **23.825** | 41-43% |
| B42 | 19.500 | 10.535 | **30.035** | 41-44% |
| B31 | 9.300 | 9.330 | **18.630** | 41-46% |
| B87 | 12.300 | 8.105 | **20.405** | 41-43% |
| B11 | 16.350 | 8.105 | **24.455** | 41-44% |
| B91 | 8.250 | 12.677 | **20.927** | 41-46% |

A média ponderada de **41% de captura agregada por contrato judicializado típico** verifica empiricamente o número-âncora do RADAR v3.1, agora desagregado por espécie e por componente. Quando a Camada 7 (holding de precatório) entra, o número escala para 61,5% [RADAR].

> **Nota de rodapé técnica — Fase 2 (jul/2026).** As espécies **B46 (Atividade Especial, com 94% de judicialização)** e **B92/B94 (acidentários premium, ticket médio elevado e dinâmica processual diferenciada)** ficam fora do escopo principal deste estudo e serão cobertas no **MC-ESTUDO v2.0** alinhado ao lançamento da Vertical Premium MC, previsto para julho de 2026. Decisão arquitetural justificada por: (a) ticket médio dessas espécies posicionar Φ₁ Standard fora da curva de adequação dignidade-preço; (b) complexidade técnico-probatória demandar produto distinto. [Nota fundacional]

---

## SEÇÃO 2 — CUSTO AO ESTADO E À COLETIVIDADE (DIMENSÃO INVISÍVEL AO SEGURADO)

### 2.1 Sucumbência previdenciária: o subsídio público da máquina advocatícia

O modelo dominante não é financiado apenas pelo bolso do segurado. Há um **segundo orçamento** que sustenta a engrenagem: o do contribuinte. Cada vez que uma ação previdenciária é julgada procedente, **a União paga honorários sucumbenciais sobre as parcelas vencidas até a sentença** (Súmula 111/STJ; Súmula 76/TRF4), tipicamente fixados em 10% sobre o valor da condenação.

**Tabela 2.1 — Indicadores estruturais da máquina previdenciária judicial**

| Indicador | Valor | Fonte |
|---|---|---|
| Processos previdenciários em tramitação (set/2024) | 5,2 milhões | [WEB-PV — CNJ Painel Previdenciário] |
| Casos novos previdenciários 2024 | 2,5 milhões | [WEB-PV — CNJ] |
| Sentenças/julgados 2024 | 2,2 milhões | [WEB-PV — CNJ] |
| % das demandas da Justiça Federal | ~30% (≈"1/3") | [WEB-PV — CNJ] |
| Acordos homologados (jan-out/2024) | 572.391 (24,84% conciliação) | [WEB-PV — CNJ] |
| Tempo médio dos pendentes | 746 dias (~24,5 meses) | [WEB-PV — CNJ] |
| Estoque de benefícios mantidos por decisão judicial (jul/2024) | 14,74% (era 11,1% em 2017) | [WEB-PV — TCU Lista Alto Risco 2024] |
| Concessões judiciais 2024 (volume aproximado) | ~1 milhão | [WEB-PV — Anuário JF 2025] |
| Precatórios INSS pagos jan/2024 | R$ 27,2 bilhões | [WEB-PV — Tesouro Nacional] |
| Precatórios INSS previstos 2025 | **R$ 21,2 bilhões (≈30% dos R$ 70,7 bi totais)** | [WEB-PV — SOF/Min. Planejamento] |
| Nº de precatórios previdenciários LOA 2025 | 104,8 mil | [WEB-PV — SOF] |

**Estimativa fundamentada do passivo de sucumbência.** Não há divulgação consolidada pela AGU/PGF do montante anual agregado pago a título de honorários sucumbenciais em ações previdenciárias [GAP — Lei de Acesso à Informação recomendada como anexo metodológico]. A ordem de magnitude pode ser derivada: **(a)** retroativo médio judicial entre R$ 22.000 e R$ 56.000 por caso × 10% sucumbência = R$ 2.200 a R$ 5.600 por sentença; **(b)** se 1 milhão de concessões judiciais/ano [WEB-PV] resulta em sucumbência média R$ 3.500, o passivo anual pago pelo INSS a advogados privados gravita em torno de **R$ 3 a 4 bilhões/ano** [EF — declarada como ordem de magnitude, sujeita a verificação via LAI].

**Leitura sistêmica.** A União, simultaneamente: (i) custeia a Justiça Federal que processa 5,2 milhões de ações; (ii) paga 1 milhão de concessões judiciais/ano; (iii) paga R$ 21,2 bilhões em precatórios INSS na LOA 2025; (iv) paga ~R$ 3-4 bilhões em sucumbência ao mercado advocatício privado. Cada R$ 1,00 que o INSS economiza ao indeferir administrativamente um pedido legítimo forçando-o a juízo, **gera entre R$ 5,00 e R$ 12,00 em custo público adicional consolidado** (Justiça Federal + sucumbência + correção monetária do retroativo + atraso em precatório). [EF — Sistema é deficitário sob qualquer agregação contábil consistente.]

### 2.2 Dimensões adicionais ao Estado

**Auditoria TCU sobre cumprimento de decisões INSS.** O TCU documentou (auditoria operacional, relator Min. André Luís de Carvalho) **pagamentos em duplicidade, decisões favoráveis ao INSS não cumpridas e inconsistências cadastrais** [WEB-PV — Portal TCU, auditoria recente, ano-base 2023-2024]. Esses gargalos de controle interno geram pagamentos indevidos por um lado e atrasos sancionados pelo Judiciário por outro — ambos retroalimentando a base do retroativo capturado no contrato típico de honorários.

**Tema 1.105/STJ.** Em julgamento, com potencial de **alargar a base de cálculo dos honorários sucumbenciais** para incluir parcelas pós-sentença. Caso prevaleça a tese mais ampliativa, o passivo anual da União em sucumbência tende a crescer materialmente. [WEB-PV] Esse vetor jurisprudencial deve ser monitorado por qualquer ator do ecossistema.

**Tempo médio dos pendentes (746 dias).** Cada dia adicional na fila judicial **é custo do contribuinte**, pago via orçamento da Justiça Federal e via correção monetária acumulada sobre as parcelas vencidas que serão executadas como precatório/RPV.

---

## SEÇÃO 3 — CUSTO DE OPORTUNIDADE DO SEGURADO (DIMENSÃO DO TEMPO)

### 3.1 Tempo como variável econômica

O cidadão hipervulnerável não tem expectativa atuarial de aposentadoria longa. Cada mês adicional sem o benefício é, para o segurado-mediano deste estudo, **R$ 1.621 não recebidos hoje, em troca de R$ 1.621 corrigidos a IPCA recebidos via precatório/RPV em 12-24 meses adicionais**.

**Tabela 3.1 — Custo de oportunidade do segurado (perda nominal por meses sem benefício)**

| Cenário | Tempo até primeira parcela | Perda nominal acumulada (1 SM 2026) |
|---|---|---|
| **MC** (E0→E4 em 48h sprint interno; análise INSS ~57 dias BEPS jan/2026) | ~3,5 meses (sprint + análise + DDB→DIP 24 dias) | R$ 5.674 |
| **Modelo dominante — caso administrativo** | 6-9 meses (média prática nacional) | R$ 9.726 a R$ 14.589 |
| **Modelo dominante — caso judicial** | 18-36 meses (Coluna B desta pesquisa) | R$ 29.178 a R$ 58.356 |

A diferença é **arquitetônica**, não de eficiência incremental. O modelo dominante não tem incentivo para acelerar — o retroativo é sua base de cálculo. **Quanto mais tarde, maior a captura.** Esse é o incentivo perverso estrutural. [EF; alinhada à literatura de incentivos contratuais em quota litis.]

### 3.2 Score de concessão e qualidade do dossiê

Cada ciclo de exigência administrativa (pedido de complementação documental pelo INSS) adiciona ~30 dias e aumenta a probabilidade de indeferimento por má instrução. O modelo dominante **atravessa esses ciclos** porque sua operação econômica está calibrada para a fase judicial. O modelo Proof-First do MC, por contraste, gasta o esforço onde ele tem maior retorno marginal: **na qualidade do dossiê inicial**.

**Estimativa de economia em meses por dossiê Proof-First.** Considerando taxa de indeferimento por instrução deficiente em torno de 30-40% dos pedidos administrativos negados [EF — derivado de CNJ], um dossiê robusto reduz o ciclo médio em 4 a 7 meses. Em SM 2026, **economia direta de R$ 6.484 a R$ 11.347 em renda antecipada** por caso, sem custo adicional ao segurado.

### 3.3 Proteção pós-concessão

O modelo dominante **termina na concessão**. O MC continua via E5-E7. As três principais fontes de erosão pós-concessão do hipervulnerável são: **(a) descontos não autorizados em folha de benefício** (cerca de 1,1% do estoque de benefícios afetado anualmente, ordem de magnitude); **(b) suspensão por falha em prova de vida** (procedimento anual obrigatório, com taxa de falha relevante em idosos analfabetos digitais); **(c) exigências INSS pós-concessão** (revisões automáticas, rebituações, reanálises).

**Custo médio em dias de benefício perdido por suspensão de prova de vida.** Quando a falha ocorre, o restabelecimento típico leva 30-90 dias, em média 45 dias [EF]. Em SM 2026, **perda nominal R$ 2.432 por incidente**. Para um segurado idoso com expectativa de 15 anos de benefício, a probabilidade cumulativa de pelo menos um incidente de prova de vida com erosão de renda gravita acima de 40% [EF; alinhada à literatura sobre acessibilidade digital em idosos].

---

## SEÇÃO 4 — DIMENSÕES DE EFEITO SISTÊMICO (CATEGORIA ABERTA)

Esta é a seção mais importante do estudo. Sua estrutura é deliberadamente aberta. Conforme o protocolo Híbrido Prudente, os efeitos abaixo são nomeados quando há fonte primária (REsp 2.079.440/RO, Ementas CFOAB, BEPS, CNJ) e generalizados em linguagem sistêmica quando a evidência é estrutural mas a nomeação direta criaria ruído.

### 4.1 Externalidade de longo prazo sobre dependentes e família

O segurado capturado em 41-61% do valor ingressado **transfere o ônus para a unidade familiar**: dependente menor de idade que perde acesso a creche pago do salário-maternidade capturado; cônjuge sobrevivente cuja pensão por morte tem base reduzida; idoso cuja capacidade de prover habitação independente é minada. Esse efeito não é precificável caso a caso, mas é **a forma como uma transferência única se torna trajetória intergeracional**. Estimativa de magnitude: para cada R$ 1.000 capturados do hipervulnerável, **R$ 200 a 350 são em última instância subtraídos de gastos com saúde, educação ou moradia de dependentes** [EF — alinhada à literatura de propensão marginal a consumir do quintil inferior de renda]. Este é o efeito sistêmico mais invisível e mais consequente.

### 4.2 Seleção adversa no mercado advocatício (advogados éticos perdem mercado)

A tabela OAB-MG (2-3 parcelas por espécie, modelo protetivo) e a OAB-RS (3 salários de benefício) operam em mercado de honorários estruturalmente menor que OAB-CE (30% × 12 vincendas), OAB-BA (13 vincendas) e OAB-PE (12 vincendas) [WEB-PV — Gap D]. Em mercado de captação por captação predatória (intermediação informal, "advocacia predatória" nomeada pela Min. Nancy Andrighi no **REsp 2.079.440/RO** [WEB-PV]), o advogado que respeita o limite ético **perde o cliente para o predador**. Isso é seleção adversa clássica: o mercado expulsa o operador ético. O resultado de equilíbrio é **convergência regional para o modelo mais agressivo**. A tensão entre o STJ (30% como referencial não-abusivo) e as Ementas CFOAB (074/2022/SCA-STU; 034/2024/SCA-TTU; 208/2018/OEP — admitindo até **50% sobre atrasados em benefícios vitalícios**) é o **espaço normativo dentro do qual o predador opera**. [WEB-PV]

### 4.3 Captura institucional (efeito sistêmico estrutural)

Onde o modelo dominante codifica em tabela seccional o pacote 30% + 12-13 vincendas, a tabela deixa de funcionar como "piso protetivo do trabalho advocatício" e passa a operar como **referencial técnico que blinda a prática do questionamento ético-disciplinar individual**. O advogado que cobra exatamente o que a tabela prevê não pode ser autonomamente sancionado pela Seccional. Esse efeito não é uniforme — varia por seccional e por interpretação. **Generalizamos em linguagem sistêmica:** a estrutura regulatória regional é heterogênea, e em parte significativa do território opera como amplificadora, não atenuadora, do padrão de captura. [Híbrido Prudente — linguagem sistêmica.]

### 4.4 Empobrecimento do tecido judicial (congestionamento estrutural)

5,2 milhões de processos previdenciários em tramitação [WEB-PV — CNJ] é volume que **degrada a qualidade da prestação jurisdicional para todos os jurisdicionados**, não apenas para os previdenciários. Tempo médio dos pendentes em 746 dias ratifica essa degradação sistêmica. Cada caso que poderia ter sido resolvido administrativamente por via Proof-First robusta e que entra na fila judicial **subtrai capacidade de julgamento de causas legítimas que dependem do Judiciário** (saúde, infância, moradia). O modelo dominante, ao judicializar como default, **socializa o congestionamento entre todos os cidadãos**. [Efeito sistêmico nomeado pela CNJ via dados quantitativos; conclusão narrativa nossa.]

### 4.5 Captura informacional (assimetria sobre via administrativa)

O hipervulnerável típico não sabe que pode protocolar requerimento administrativo via Meu INSS sem assistência advocatícia obrigatória. Não sabe que existe BEPS, CNIS, comunicado de decisão, recurso CRPS. Esse desconhecimento é **a precondição econômica** para o modelo dominante operar — se o cidadão soubesse, a margem competitiva do operador colapsaria. **A captura informacional é o ativo intangível mais valioso do mercado advocatício previdenciário, e é simétrica à infraestrutura digital que o MC se propõe a construir.** [Conclusão sistêmica derivada da agregação RADAR + arquitetura ADR-007.]

### 4.6 Saúde mental e dignidade do hipervulnerável

Concessões de B31 por transtornos mentais cresceram 15,66% entre 2024 e 2025, atingindo **546.254 benefícios em 2025 (63% concedidos a mulheres)** [WEB-PV — Min. Previdência jan/2026]. A intersecção dessa estatística com a Coluna B (judicialização média 12-24 meses para B31) significa que **mais de meio milhão de pessoas em transtorno mental ativo são submetidas anualmente a período de 1-2 anos sem renda enquanto o operador previdenciário compõe o retroativo**. O efeito sobre desfecho clínico não é objeto deste estudo, mas a magnitude do problema é institucionalmente nomeável. [WEB-PV; conclusão sistêmica.]

### 4.7 Macroeconomia da captura — ordem de magnitude

Considerando **1 milhão de concessões judiciais/ano** [WEB-PV] × captura média R$ 13.300 sobre retroativo + R$ 9.500 sobre vincendas = **R$ 22.800 capturados por contrato típico** × 1 milhão = **R$ 22,8 bilhões/ano transferidos do bolso do hipervulnerável para o bolso do operador previdenciário no Brasil**. [EF — ordem de magnitude.] Adicionados os ~R$ 3-4 bilhões em sucumbência paga pela União [EF] e a captura adicional via Camada 7 (holding de precatório) com escalada de 41% para 61,5% [RADAR], a **transferência patrimonial agregada do mercado advocatício previdenciário no Brasil é da ordem de R$ 26 a 35 bilhões/ano**. Esse número é da mesma ordem de magnitude do orçamento federal de Educação Básica ou do Bolsa Família mensal. [Síntese de quarta ordem.]

**Síntese da Seção 4 — o argumento que emerge da agregação.** O modelo dominante não é resultado de comportamento individual desviante. É **arquitetura institucional de loop de feedback positivo** que: (a) torna o indeferimento administrativo funcional; (b) codifica em tabela OAB o pacote captura; (c) usa orçamento da União como subsídio via sucumbência; (d) absorve a Justiça Federal como infraestrutura compulsória; (e) opera sobre população juridicamente consentinte mas economicamente coagida; (f) seleciona adversamente os advogados éticos. **Combater esse arranjo caso a caso é remediar o sintoma. A inversão arquitetônica exige instrumentar o cidadão, não apenas defendê-lo.**

---

## SEÇÃO 5 — O VALOR SISTÊMICO DO MC (INVERSÃO ARQUITETÔNICA)

### 5.1 Custo direto: tabela mercado vs Φ₁ Standard vs Φ₁ CadÚnico

**Tabela 5.1 — Comparação de custo direto por espécie**

| Espécie | Custo modelo dominante (R$, Seção 1.3) | Φ₁ Standard MC (R$) | Φ₁ CadÚnico MC (R$) | Fator multiplicador (mercado/Standard) | Fator multiplicador (mercado/CadÚnico) |
|---|---|---|---|---|---|
| B41 | 23.825 | 2.200 | 1.500 | **10,8×** | **15,9×** |
| B42 | 30.035 | 2.200 | 1.500 | **13,7×** | **20,0×** |
| B31 | 18.630 | 2.200 | 1.500 | **8,5×** | **12,4×** |
| B87 | 20.405 | 2.200 | 1.500 | **9,3×** | **13,6×** |
| B11 | 24.455 | 2.200 | 1.500 | **11,1×** | **16,3×** |
| B91 | 20.927 | 2.200 | 1.500 | **9,5×** | **13,9×** |
| **Média ponderada** | **23.046** | **2.200** | **1.500** | **~10,5×** | **~15,4×** |

Em pacotes 12-13 vincendas (CE, BA, PE), os fatores multiplicadores escalam para 14-21× sobre o Standard e 21-31× sobre o CadÚnico. **Esses números não são "MC mais barato". São MC operando em outra ordem de grandeza arquitetônica.** O MC cobra uma única vez, em montante fixo, por software de instrumentalização documental (atividade-meio CNAE 6201-5/01). O modelo dominante cobra fração agregada do patrimônio jurídico futuro do segurado.

### 5.2 Custo ao Estado: MC reduz ou aumenta?

O dossiê Proof-First do MC, por construção, maximiza a probabilidade de concessão administrativa na primeira tentativa. Cada caso resolvido administrativamente é um caso retirado da Justiça Federal. **Cada caso retirado é R$ 3.500 de sucumbência poupada pela União (média estimada Seção 2.1) e tempo de juiz federal reorientado para causas que dependem do Judiciário.** Em escala (universo MC alvo: 1-3% do mercado em 5 anos), a externalidade fiscal positiva acumulada é da ordem de **R$ 100-300 milhões/ano em sucumbência poupada pelo INSS**, sem contar economia em precatórios e juros [EF — ordem de magnitude].

### 5.3 Custo de oportunidade: tempo recuperado

O MC entrega o protocolo INSS em 48 horas (sprint interno E0→E4) com dossiê completo. A análise INSS subsequente é ~57 dias [BEPS jan/2026]. DDB→DIP é ~24 dias [BEPS jan/2026]. **O segurado MC tem primeira parcela em ~3,5 meses** vs 6-9 meses no caminho administrativo padrão e 18-36 meses no caminho judicial. **Em SM 2026, antecipação média de 15 a 32 meses × R$ 1.621 = R$ 24.315 a R$ 51.872 em renda antecipada por caso**. Esse é, em quase todos os casos, **valor superior ao próprio Φ₁ pago pelo segurado**.

### 5.4 Efeitos sistêmicos invertidos

Para cada efeito mapeado na Seção 4, o MC produz inversão correspondente:

- **Externalidade familiar:** renda antecipada flui para gastos do dependente, não para captura.
- **Seleção adversa:** ao retirar o segurado do funil predatório, MC **não tira mercado do advogado ético** — tira do predatório. Advogados éticos podem inclusive operar Ψ₂ B2B SaaS como cliente MC.
- **Captura institucional:** MC não disputa interpretação regulatória OAB. Opera fora da reserva legal.
- **Tecido judicial:** menos judicialização forçada = menos congestionamento.
- **Captura informacional:** **MC é, exatamente e literalmente, infraestrutura de simetria informacional**. Esse é o coração da inversão.
- **Saúde mental:** segurado em B31 mental tem benefício em 3,5 meses, não em 12-24 meses.
- **Macroeconomia:** se MC captura 1% do mercado em 5 anos, R$ 260-350 milhões/ano deixam de ser transferidos do hipervulnerável para o operador predatório.

A inversão é arquitetônica, não incremental.

---

## SEÇÃO 6 — AS 3 FRASES-ÂNCORA INSTITUCIONAIS

### Versão A — Investidor / Due Diligence

> O mercado advocatício previdenciário brasileiro opera em arquitetura que retém entre 41% e 61,5% do valor jurídico ingressado pelo segurado em casos judicializados típicos [RADAR v3.1], sustentada por 5,2 milhões de processos ativos na Justiça Federal e R$ 21,2 bilhões anuais em precatórios INSS [CNJ; SOF/Min. Planejamento 2025]. A transferência patrimonial agregada estimada para esse mercado é da ordem de R$ 26 a 35 bilhões/ano. O MC não compete em preço — compete em arquitetura. Por R$ 1.500 a R$ 2.200 fixos, oferece infraestrutura digital de instrumentalização documental do cidadão (atividade-meio CNAE 6201-5/01), com fator multiplicador médio de economia ao segurado entre 10× e 15× e externalidade fiscal positiva à União estimada em R$ 100-300 milhões/ano em sucumbência poupada por ponto percentual de market share. Φ₁ tem margem auditada (Standard 73,7%; CadÚnico 61,5%) e estrutura de receita Ψ₁/Ψ₂ B2B complementar. O TAM previdenciário hipervulnerável é simétrico ao tecido SUAS/CRAS brasileiro.

### Versão B — Regulador / OAB / MP / Investigação

> O Meu Cumpadre opera estritamente como atividade-meio de tecnologia (CNAE 6201-5/01, desenvolvimento de programas de computador sob encomenda), fora da reserva legal da Lei 8.906/94. Não exerce postulação, não emite parecer jurídico-substantivo, não promete resultado, não realiza intermediação comercial de profissionais. Seu objeto é a instrumentalização documental do cidadão para o exercício autônomo da via administrativa do INSS, na linha do que o STJ qualificou como dever de proteção do segurado hipervulnerável no REsp 2.079.440/RO (3ª Turma, Min. Nancy Andrighi, 20/02/2024). O preço fixo Φ₁ (R$ 1.500 / R$ 2.200), a vedação a success fee percentual e a constraint autoexecutável Φ₃ (parcela ≤ 0,5 × salário-mínimo) operam como arquitetura de blindagem do hipervulnerável, em linha com a doutrina da advocacia predatória nomeada pelo STJ e em diálogo institucional respeitoso com o sistema disciplinar OAB.

### Versão C — Dona Zilda (5ª série)

> A senhora pode ir pelo caminho de hoje, em que paga 30% do que o INSS te pagar atrasado e mais 5 vezes o seu benefício, e espera 1 a 3 anos. Ou a senhora paga R$ 1.500 uma vez só pelo nosso trabalho de juntar tudo certinho, recebe seu benefício do INSS em uns 3 a 4 meses, e o que vier depois é todo seu. A gente continua junto da senhora, com R$ 19,90 por mês se a senhora quiser, pra cuidar do desconto errado e da prova de vida.

---

## SEÇÃO 7 — RECOMENDAÇÕES PARA O ADR-007 v3.1

**7.1 Argumentos numéricos a incorporar.** A defesa do preço Φ₁ deve apoiar-se em três números-âncora deste estudo: **(a)** captura modelo dominante R$ 23.046 médio por contrato (Seção 1.3); **(b)** fator multiplicador Standard 10,5× / CadÚnico 15,4× (Seção 5.1); **(c)** R$ 22,8 bilhões/ano em transferência patrimonial agregada do mercado dominante (Seção 4.7). Os três números são auditáveis por qualquer parecerista a partir das fontes primárias declaradas.

**7.2 Resistência do preço ao custo sistêmico.** Φ₁ R$ 1.500 / R$ 2.200 **resiste com folga**. A própria antecipação de renda gerada (R$ 24.315 a R$ 51.872 por caso, Seção 5.3) excede em 11× a 35× o valor do Φ₁ Standard. O preço não é defendido como margem sobre custo (já auditado em COGS R$ 578) — é defendido como **fração trivial do valor sistêmico entregue**.

**7.3 B31 (Auxílio-Doença) merece Φ₁ específico?** Nossa recomendação é **não** dentro do MC-ESTUDO v1.0. Justificativa: (a) BEPS jan/2026 indica TMC administrativo B31 em 48,70 dias — alinhado ao restante das espécies B41/B42; (b) embora o ticket B31 (R$ 1.866 médio nacional) e a duração esperada do benefício sejam menores que aposentadorias permanentes, o COGS marginal do dossiê B31 não é menor (perícia médica é o gargalo, e o MC não opera nesse vetor); (c) introduzir SKU específico fragmenta a comunicação institucional dual-purpose do Φ₁. Recomendação alternativa: **monitorar conversão B31→B91 (NTEP)** como vetor de upsell para o Guardião Φ₄ (R$ 19,90/mês) — o segurado B31 que migra para B91 tem direito a FGTS retroativo + estabilidade 12 meses pós-alta, e se beneficia da continuidade pós-concessão.

**7.4 Qual dimensão da Seção 4 tem implicação direta na defesa para a Dra. Juliana 19/05?** A dimensão **4.5 — Captura Informacional**. É a dimensão em que o MC tem identidade arquitetônica clara: ele é, literalmente, o oposto da assimetria informacional. Para a parecerista, esse é o argumento que conecta a atividade-meio CNAE 6201-5/01 ao dever sistêmico de simetria que o STJ nomeou como proteção do hipervulnerável no REsp 2.079.440/RO. A Dimensão 4.2 (seleção adversa) é o argumento secundário, com o cuidado de **não atacar a categoria advocatícia como tal** — apenas o operador que captura no espaço normativo entre 30% (STJ) e 50% (Ementa CFOAB).

---

## SEÇÃO 8 — LIMITAÇÕES E CONFIANÇA POR DIMENSÃO

| Dimensão | Confiança | Margem de erro estimada | Hierarquia de evidência |
|---|---|---|---|
| Estrutura arquitetônica do mercado dominante | **ALTA** | n/a — auditada em 27 seccionais | [RADAR] |
| Quantum vincendas (cálculo direto) | **ALTA** | ±0% | [Cálculo direto sobre BEPS] |
| Coluna A — retroativo administrativo | **ALTA** | ±10% | [BEPS jan/2026] |
| Custo direto ao segurado por espécie (Seção 1.3) | **MÉDIA-ALTA** | ±15% | Composição [BEPS] + [WEB-PV — CNJ] + [EF] |
| Coluna B — retroativo judicial | **MÉDIA** | ±25% | [EF — derivado CNJ × RMI estimada]; sujeita a refinamento via LAI DataPrev |
| Sucumbência União (Seção 2.1) | **MÉDIA-BAIXA** | ±40% | [EF — ordem de magnitude]; gap fechável via LAI AGU/PGF |
| Macroeconomia da captura (Seção 4.7) | **MÉDIA-BAIXA** | ±35% | [EF — ordem de magnitude]; síntese de quarta ordem |
| Efeitos sistêmicos individuais (Seção 4.1-4.6) | **MÉDIA** | qualitativo, não quantitativo | [Híbrido Prudente — fonte primária quando existe; estrutural quando não] |
| Regionalização tabelas OAB | **ALTA** | n/a — verificada em 11 seccionais | [WEB-PV — Gap D] |
| Antecipação de renda MC (Seção 5.3) | **ALTA** | ±15% | [BEPS jan/2026] + [CNJ Painel] |

**Lacunas declaradas e protocolo de fechamento.** **(L1)** Volume anual agregado de honorários sucumbenciais pagos pelo INSS/União em ações previdenciárias — fechável via Lei de Acesso à Informação à AGU/PGF (Lei 12.527/2011, art. 7º, VII, "b"), com cruzamento SIAFI rubrica "Sentenças Judiciais — Honorários" UO 33903. **(L2)** Volume anual de conversões administrativas B31→B91 via NTEP — fechável via LAI à DPSSO/Min. Previdência. **(L3)** RMI média efetiva por concessão judicial decomposta por espécie — fechável via LAI à DataPrev (marca de despacho 04 cruzada com código de espécie). **(L4)** Texto literal vigente da tabela OAB-MA seção previdenciária — fechável via solicitação direta à seccional. **(L5-rebaixada 12/05/2026)** Confirmação numérica exata da Ementa CFOAB referenciada como '069/2024/OEP'. Cross-reference confirmado via [[MC-ESTUDO-Ementa069-Epicentro-v2_0-2026-0419]] (consulente OAB-GO, decisão unânime, DEOAB 04/06/2024). Verificação direta no Diário Eletrônico OAB recomendada para selagem final — tarefa delegada à Dra. Juliana Pereira de Melo (OAB-GO 38.662) na reunião 19/05/2026. Ementas equivalentes: 074/2022/SCA-STU, 034/2024/SCA-TTU, 208/2018/OEP. **(L6)** Tema 1.105/STJ — em julgamento, com potencial de alterar materialmente a base de cálculo de sucumbência; monitoramento obrigatório. **Nenhuma das lacunas declaradas compromete o argumento central deste estudo**, porque o argumento central é arquitetônico, não numérico-marginal.

---

## REFERÊNCIAS BIBLIOGRÁFICAS E NOTAS DE RODAPÉ

### Fontes primárias institucionais

1. **RADAR COMP Ismael Corrêa v3.1** — documento interno MC, base de calibração da arquitetura de captura agregada (41% / 61,5%) e do mapeamento de 27 seccionais OAB.
2. **ADR-007 v3.1 (Provisional, 26/04/2026)** — Architecture Decision Record interno MC.
3. **Parecer GROK** — peça técnica interna no Project Knowledge.
4. **Ementa 069/2024 STU OAB Federal** — referência fornecida pelo Project Knowledge; sujeita a verificação numérica final via Diário Eletrônico OAB. Conteúdo substantivo equivalente disponível em Ementas 074/2022/SCA-STU, 034/2024/SCA-TTU, 208/2018/OEP.

### Fontes oficiais governo federal

5. **BEPS — Boletim Estatístico da Previdência Social vol. 29 nº 01 (jan/2024) e jan/2026.** Min. Previdência. URL: https://www.gov.br/previdencia/pt-br/assuntos/previdencia-social/Dados-estatisticos-previdencia-social-e-inss/boletins-da-previdencia-social
6. **Anuário Estatístico da Previdência Social 2023.** URL: https://www.gov.br/inss/pt-br/noticias/anuario-estatistico-da-previdencia-social-2023-ja-esta-disponivel-para-consulta
7. **CNJ — Painel de Estatísticas do Poder Judiciário, filtro "Previdenciário" (set/2024).** URL: https://www.cnj.jus.br/judicializacao-de-beneficios-previdenciarios-cresce-no-brasil/
8. **CNJ — Justiça em Números 2024.** URL: https://www.cnj.jus.br/wp-content/uploads/2025/02/justica-em-numeros-2024.pdf
9. **CNJ — Relatório Anual 2024.** URL: https://www.cnj.jus.br/wp-content/uploads/2025/02/relatorio-anual-cnj-2024.pdf
10. **CNJ/Insper — "A judicialização de benefícios previdenciários e assistenciais" (2020).** URL: https://www.cnj.jus.br/wp-content/uploads/2020/10/Relatorio-Final-INSPER_2020-10-09.pdf
11. **CNJ — Acordos previdenciários jan-out/2024.** URL: https://www.cnj.jus.br/justica-homologou-mais-de-meio-milhao-de-acordos-previdenciarios-ate-outubro-de-2024/
12. **CNJ — Portaria Conjunta 4/2024 CNJ-AGU.** URL: https://atos.cnj.jus.br/atos/detalhar/5528
13. **TCU — TC 022.354/2017-4 ("Levantamento sobre judicialização do INSS").** URL: https://clip.jfrj.jus.br/sites/default/files/publicacoes/2019/judicializacao-dos-beneficios-concedidos-pelo-inss/tcu_-_relatorio_-_auditoria_-_judicializacao_de_beneficios_-_inss.pdf
14. **TCU — Lista de Alto Risco 2024 (concessão e pagamento de benefícios previdenciários).** URL: https://sites.tcu.gov.br/listadealtorisco/concessao_e_pagamentos_de_beneficios_previdenciarios.html
15. **TCU — "Falhas detectadas na implementação de decisões judiciais pelo INSS"** (relator Min. André Luís de Carvalho). URL: https://portal.tcu.gov.br/imprensa/noticias/falhas-detectadas-na-implementacao-de-decisoes-judiciais-pelo-inss
16. **Min. Planejamento — Antecipação de R$ 30,1 bi precatórios 2024.** URL: https://agenciabrasil.ebc.com.br/economia/noticia/2024-02/planejamento-antecipa-r-301-bilhoes-de-precatorios-para-2024
17. **Tesouro Nacional — Liberação R$ 27,2 bi precatórios INSS jan/2024.** URL: https://agenciagov.ebc.com.br/noticias/202312/governo-libera-mais-de-r-90-bilhoes-para-pagamento-de-precatorios-e-rpvs-do-inss
18. **SOF/Min. Planejamento — Precatórios federais 2025 (R$ 70,7 bi total / R$ 21,2 bi INSS).** Reportagem CNB-SP. URL: https://cnbsp.org.br/2024/05/27/artigo-governo-lula-preve-pagar-r-707-bilhoes-em-precatorios-em-2025-veja-quem-recebe-por-cristiane-gercina/
19. **AGU — Iniciativa de redução de litígios.** URL: https://www.gov.br/agu/pt-br/comunicacao/noticias/agu-e-cnj-se-unem-para-reduzir-litigios-em-execucoes-fiscais-e-acoes-previdenciarias
20. **INSS — INSSJUD/PrevJud (implantação automática pós-sentença, out/2024).** URL: https://www.gov.br/inss/pt-br/noticias/beneficios-por-decisao-judicial-sao-implantados-em-minutos
21. **INSS — Valor dos benefícios por incapacidade.** URL: https://www.gov.br/inss/pt-br/saiba-mais/auxilios/auxilio-doenca/valor-dos-beneficios-por-incapacidade
22. **Min. Previdência — Concessões B31 por transtornos mentais 2025 (546.254).** URL: https://www.gov.br/previdencia/pt-br/noticias/2026/janeiro/previdencia-social-concede-546-254-beneficios-por-incapacidade-temporaria-por-transtornos-mentais-e-comportamentais
23. **Portaria Conjunta MPS/INSS 72/2025** (limite Atestmed 60 dias, DOU 17/10/2025).
24. **Portaria Interministerial MPS/MF 13/2026** (SM 2026 = R$ 1.621). URL: https://www.legisweb.com.br/legislacao/?id=489284

### Jurisprudência

25. **STJ — REsp 2.079.440/RO** (3ª Turma, Min. Nancy Andrighi, julg. 20/02/2024, unânime). Informativo 801. URL: https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/2024/13062024-Ministerio-Publico-pode-ir-a-Justica-para-questionar-honorarios-abusivos-em-acoes-previdenciarias.aspx
26. **STJ — Súmula 111** (honorários sucumbenciais previdenciários sobre parcelas vencidas até a sentença).
27. **STJ — Tema 1.105** (em julgamento — base de cálculo dos sucumbenciais).
28. **STJ — Tema 1.050** (pagamento administrativo após citação).
29. **STJ — Tema 1.076** (limites de fixação dos sucumbenciais sobre Fazenda Pública).
30. **STJ — Súmula 149** (prova testemunhal isolada em rural).
31. **STF — RE 580.963** (BPC, flexibilização da renda per capita).
32. **TRF4 — Súmula 76** (sucumbência previdenciária sobre prestações vencidas).
33. **TRF3 — Resolução Conjunta 6/2024** (Pacto da Instrução Concentrada). URL: https://www.trf3.jus.br/gaco/teste-ic/aposentadoria-idade-rural

### Tabelas seccionais OAB (Gap D verificado)

34. **OAB-GO** — Tabela 2025. URL: https://www.oabgo.org.br/wp-content/uploads/2025/04/17027-Tabela-de-Honorarios-Minimos-2025.pdf
35. **OAB-DF** — Tabela 12/07/2023. URL: https://oabdf.org.br/wp-content/uploads/2023/07/TABELA-DE-HONORARIOS-12.7.2023.pdf
36. **OAB-MT** — Tabela mar/2023, atualizada 2025. URL: https://www.oabmt.org.br/admin2//Arquivos/Documentos/202503/PDF65546.pdf
37. **OAB-MA** — Tabela 2018 (atualizada 2021). URL: https://www.oabma.org.br/servicos/tabela-de-honorarios
38. **OAB-PI** — Resolução 08/2022. URL: https://www.oabpi.org.br/wp-content/uploads/2024/02/Tabela-honora%CC%81rio-OAB-PI-2.pdf
39. **OAB-CE** — Tabela 23/03/2023. URL: https://oabce.org.br/wp-content/uploads/2024/05/TABELA-DE-HONORARIOS-23032023.pdf
40. **OAB-PE** — Tabela 2025/2026. URL: https://www.oabpe.org.br/files/institutional/17677231591848-tabeladehonorariosadvocatcios2026.pdf
41. **OAB-BA** — Tabela 2026 (Resolução 05/2014, IPCA-atualizada). URL: https://adm.oab-ba.org.br/arquivos/oab_honorarios/25/ARQUIVO_HONORARIO.pdf
42. **OAB-SP** — Tabela 2024. URL: https://www.oabsp.org.br/upload/1885288261.pdf
43. **OAB-RJ** — Tabela mar/2024 + Diretrizes 2026. URL: https://www.oabrj.org.br/sites/default/files/tabela_site_03_2024.pdf
44. **OAB-MG** — Tabela 2023/2024. URL: https://www.oabmg.org.br/doc/Tabela_Honorarios_Advocaticios_2023.pdf
45. **OAB-RS** — Tabela Resolução 02/2015. URL: https://admsite.oabrs.org.br/arquivos/2_42_578678616f201.pdf

### Ementas Conselho Federal OAB

46. **Ementa 074/2022/SCA-STU CFOAB** (50% sobre atrasados em benefícios vitalícios não configura abusividade).
47. **Ementa 034/2024/SCA-TTU CFOAB** (16.0000.2023.000016-7).
48. **Ementa 208/2018/OEP CFOAB** (precedente do Órgão Especial do Conselho Pleno).
49. **Ementa 003/2022/SCA-STU CFOAB.**
50. **Ementa 031/2018/SCA-STU CFOAB.**
51. **Ementa 191/2018/OEP CFOAB.**

### Marco normativo

52. **Lei 8.906/94** (Estatuto da Advocacia), art. 22, §§ 2º e 4º; art. 34, XX; art. 58, V.
53. **Código de Ética e Disciplina da OAB**, art. 48, 49, 50.
54. **Lei 8.213/91** (Plano de Benefícios), arts. 21-A, 26, II, 39, I, 44, 61.
55. **Lei 8.742/93** (LOAS) e Decreto 6.214/2007.
56. **Lei 10.259/2001** (Juizados Especiais Federais).
57. **Lei 12.527/2011** (Lei de Acesso à Informação).
58. **Decreto 3.048/1999** (Regulamento da Previdência Social), art. 174.
59. **Decreto 6.042/2007** (NTEP).
60. **Constituição Federal de 1988**, art. 100, art. 109, I e §3º.
61. **EC 103/2019** (Reforma da Previdência), art. 26.
62. **MP 1.303/2025** e DOU correspondentes.

### Fontes secundárias / institucionais

63. **ConJur — Anuário da Justiça Federal 2024.** URL: https://www.conjur.com.br/2024-jun-04/acoes-previdenciarias-e-tributarias-sobrecarregam-a-justica-federal/
64. **IBDP — INSS maior litigante (Anuário JF 2025, set/2025).** URL: https://www.ibdp.org.br/2025/09/10/com-45-milhoes-de-processos-inss-e-o-maior-litigante-da-justica-brasileira/
65. **Migalhas — Cobertura REsp 2.079.440/RO.** URL: https://www.migalhas.com.br/quentes/409259/
66. **OAB Federal — Recurso ao STF contra REsp 2.079.440 (jul/2024).** URL: https://www.oab.org.br/noticia/62839
67. **Oliveira et al. — NTEP em Cadernos Saúde Pública/FIOCRUZ.** URL: https://www.scielo.br/j/csp/a/9QPvtFQ3MLyxCJZ94dRjVfh/?lang=pt
68. **Previdenciarista — Judicialização +20% em 2024.** URL: https://previdenciarista.com/blog/judicializacao-de-beneficios-sociais-aumenta-20-em-2024/

---

## CONCLUSÃO — INVERSÃO ARQUITETÔNICA, NÃO COMPETIÇÃO DE PREÇO

Este estudo demonstra, com fontes primárias auditáveis e gaps declarados, que o mercado advocatício previdenciário brasileiro opera sob arquitetura de captura agregada estimada em R$ 26 a 35 bilhões/ano, sustentada por subsídio público (Justiça Federal + sucumbência União ~R$ 3-4 bi/ano), codificada em tabelas seccionais OAB heterogêneas, e exercida sobre população juridicamente consentinte mas economicamente coagida. O modelo Φ₁ do Meu Cumpadre (R$ 1.500 CadÚnico / R$ 2.200 Standard, vedação ao success fee, constraint Φ₃ autoexecutável, atividade-meio CNAE 6201-5/01) não é versão mais barata desse mercado — é **infraestrutura de simetria informacional que opera fora dele**.

O argumento que emerge da agregação das Seções 1 a 4, e que nenhuma fonte isolada contém, é simples: **a dimensão sistêmica da captura impede que ela seja remediada caso a caso**. A defesa do hipervulnerável requer arquitetura — uma camada digital, pública por preço fixo, que entregue o cidadão ao próprio INSS administrativo com dossiê tecnicamente robusto, e o acompanhe pós-concessão contra os vetores de erosão. Essa é a função institucional que o Φ₁ instrumentaliza. Essa é a defesa que resiste ao escrutínio simultâneo da Dra. Juliana, do Conselho Jurídico Multi-Jurisdicional, do investidor, e — se vier — da autoridade de controle.

A inversão é arquitetônica. O preço é apenas a fronteira visível dela.

---

**FIM DO DOCUMENTO MC-ESTUDO-Arquitetura-Custo-Sistemico-v1.0-2026-0427**

*Próxima revisão prevista: MC-ESTUDO v2.0, jul/2026, alinhado ao lançamento da Vertical Premium MC, incorporando B46 Atividade Especial e B92/B94 acidentários premium, além de fechamento das Lacunas L1-L6 via Lei de Acesso à Informação.*
---

## Documentos relacionados
- [[_MC-MANIFESTO-NovaOrdem-v1.0-2026-0427 Identidade Posicionamento e Valuation MC]]
- [[MC-INSTRUCOES-PROJETO-v6_0_2-2026-0509]]
- [[MC-PROCESSO-Jornada_E0E7_Mestre-v1_3_1-2026-0509]]
- [[_MC-RouterEthics_11_v1_1-2026-0505-CLevel]]
- [[MC-ADR-007-CampoPrecificacao-v3_8-ADDENDUM-2026-0507]]
- [[MC-ADR-009a-Custodia_Credenciais_GovBr-v2_0-2026-0425]]
- [[MC-ADR-009b-TresEstados-Custodia-Dossie-v1_0-2026-0417]]
- [[MC-ADR-010-E3-Intelligence-Layer-v1_0-2026-0428]]
- [[MC-ADR-011-Arquitetura3Cerebros-v1_0-2026-0509]]
- [[MC-ADR-013-ConvencoesOperacionais-IVCAD-MC-v1_0-2026-0507]]
- [[MC-PARECER-CONSOLIDADO-v3_4-2026-0427]]
- [[MC-PAUTA-Juliana-19Mai-v2_0-2026-0509]]
- [[MC-GOVBR-ArvoreDecisao-APIHumana-v1_1-2026-0509]]
- [[MC-ESTUDO-Arquitetura-Custo-Sistemico-v1_0-2026-0427]]