---
título: MC-LACUNAS-B2-Fechamento-Legislativo-v1_0-2026-0507
sprint: B3 — Fechamento legislativo cirúrgico
modo: Extração legal (read-only sobre fontes; web autorizado pelo usuário no decorrer do Sprint)
status: PARCIAL
fontes_lidas: 8 (4 leis + 4 decretos)
lacunas_fechadas_de_b2: 6 fechadas + 2 parciais (de 14 totais)
data_execução: 2026-05-07
duração: ~50min
---

## NOTA DE PROCEDÊNCIA DAS FONTES

Os 8 PDFs entregues em `0_4_CADUNICO/` (`L10779-2003.pdf`, `L14601-2023.pdf`, `L14717.pdf`, `L14818-2024.pdf`, `D8424-2015.pdf`, `D11901-2024.pdf`, `D12064-2024.pdf`, `D12636-2025.pdf`) foram gerados com **"Microsoft: Print To PDF"** e **não possuem camada de texto** (`pdffonts` confirma zero fontes embutidas em todos eles; `pdftotext` extrai 0–2 bytes por arquivo). Para preservar o princípio Proof-First (citação literal), o usuário autorizou pontualmente acesso à web durante o Sprint B3. Os textos legais foram baixados diretamente de `planalto.gov.br` (versão consolidada, "Texto compilado") em 2026-05-07 e armazenados em pasta temporária; **a pasta-fonte permaneceu intocada**. Toda citação literal nesta nota refere-se à versão consolidada disponível no portal Planalto na data acima — versões anteriores e redações revogadas estão sinalizadas quando relevantes.

## 1. SUMÁRIO

Foram lidos 4 pares lei-decreto cobrindo Bolsa Família (L14.601/2023 + D12.064/2024), Pé-de-Meia (L14.818/2024 + D11.901/2024), Pensão Especial Órfãos Feminicídio (L14.717/2023 + D12.636/2025) e Seguro-Defeso (L10.779/2003 + D8.424/2015). Os 4 decretos pareiam cleanly com as 4 leis-base (nenhum "escopo adjacente"). 6 das 14 lacunas residuais do Sprint B2 foram fechadas por citação literal e 2 foram parcialmente fechadas; as 6 restantes estão fora do escopo destes 8 textos (CNH Social, Carteira do Idoso operacional, programas estaduais/municipais, Bolsa Verde, Telefone Popular, comparação listas fev/2026 vs abr/2025).

**Principais descobertas operacionais para o produto Φ₀:**
- **BF estrutura de adicionais (R$ 142 + R$ 600 piso + R$ 150 + R$ 50)** confirmada na lei e replicada no decreto;
- **Pé-de-Meia totaliza até R$ 9.200 por estudante em 3 anos** (R$ 200 matrícula × 3 + R$ 1.800 frequência × 3 + R$ 1.000 conclusão × 3 + R$ 200 ENEM), e **NÃO compõe a renda familiar** para outros benefícios socioassistenciais;
- **Pensão feminicídio = 1 SM ao conjunto dos beneficiários** (não 1 SM por filho), com regra de **vedação à acumulação com qualquer benefício do RGPS/RPPS/sistema militar — ressalvado o direito de opção** (lacuna previdenciária crítica fechada);
- **Seguro-Defeso desde 2023 PODE acumular com Bolsa Família** (e demais transferências de renda do art. 6º p.u. CF e Lei 10.835/2004), além de pensão por morte e auxílio-acidente — a Lei 14.601/2023 art. 33 inciso I revogou os §§ 8º a 10 do art. 2º da L10.779 que estabeleciam suspensão temporária do BF durante o defeso;
- **BPC compõe a renda familiar per capita** para fins de elegibilidade ao BF (L14.601 art. 4º § 2º) e à Pensão Feminicídio (D12.636 art. 10 II) — ponto frequente de fricção que o produto Φ₀ deve detectar;
- **Pé-de-Meia exclui famílias unipessoais beneficiárias de BF** (L14.818 art. 3º § 3º II), mas dá prioridade a famílias BF não-unipessoais (D11.901 art. 3º § 2º).

## 2. IDENTIFICAÇÃO DOS DECRETOS

| Decreto | Programa que regulamenta | Lei-base | Status |
|---|---|---|---|
| **D8.424/2015** (31/03/2015) | Seguro-Defeso (pescador artesanal) | L10.779/2003 | Identificado |
| **D11.901/2024** (26/01/2024) | Pé-de-Meia | L14.818/2024 | Identificado |
| **D12.064/2024** (17/06/2024) | Bolsa Família | L14.601/2023 | Identificado |
| **D12.636/2025** (29/09/2025) | Pensão Especial Órfãos Feminicídio | L14.717/2023 | Identificado |

**Pareamento limpo: nenhum decreto fora dos 4 programas-alvo.**

Citações literais de identificação:

- D8.424/2015, ementa: *"Regulamenta a Lei nº 10.779, de 25 de novembro de 2003, para dispor sobre a concessão do benefício de seguro-desemprego, durante o período de defeso, ao pescador profissional artesanal..."*
- D11.901/2024, ementa: *"Regulamenta a Lei nº 14.818, de 16 de janeiro de 2024, que institui incentivo financeiro-educacional, na modalidade de poupança, aos estudantes matriculados no ensino médio público, e cria o Programa Pé-de-Meia."*
- D12.064/2024, ementa: *"Regulamenta o Programa Bolsa Família, instituído pela Lei nº 14.601, de 19 de junho de 2023, e dá outras providências."*
- D12.636/2025, ementa: *"Regulamenta a Lei nº 14.717, de 31 de outubro de 2023, que institui pensão especial aos filhos e aos dependentes crianças ou adolescentes, órfãos em razão do crime de feminicídio."*

## 3. BOLSA FAMÍLIA — Lei 14.601/2023 + Decreto 12.064/2024

### 3.1 Valor por composição familiar

Lei 14.601/2023, art. 7º § 1º (replicado em D12.064 art. 21):

| Inciso | Benefício | Valor | Critério |
|---|---|---|---|
| I | **Renda de Cidadania** | **R$ 142,00** por integrante | Todas as famílias beneficiárias |
| II | **Complementar** | até completar **R$ 600,00** por família | Famílias cuja soma do inciso I < R$ 600 |
| III | **Primeira Infância** | **R$ 150,00** por criança | Crianças de 0 a 7 anos incompletos |
| IV | **Variável Familiar** | **R$ 50,00** por integrante elegível | (a) gestantes; (b) nutrizes; (c) crianças 7-12 anos incompletos; (d) adolescentes 12-18 anos incompletos |
| V | **Extraordinário de Transição** | calculado pela diferença | Exclusivo de famílias do antigo Auxílio Brasil — diferença entre o valor recebido em maio/2023 e o de junho/2023 |

**Cumulatividade (D12.064 art. 21 § 1º):** *"Os benefícios financeiros previstos no caput poderão ser pagos cumulativamente às famílias beneficiárias e o seu valor total será arredondado ao número inteiro imediatamente superior."*

**Variável Familiar (Lei 14.601 art. 7º § 5º):** *"O Benefício Variável Familiar será calculado por integrante familiar que se enquadrar nas hipóteses previstas no inciso IV do § 1º deste artigo."* — ou seja, R$ 50 multiplica-se por cada integrante elegível.

**Encerramento das parcelas variáveis:**
- Gestantes: 9 parcelas (D12.064 art. 21 § 4º).
- Nutrizes: 6 parcelas, exigindo criança ainda não completados 7 meses na composição (D12.064 art. 21 §§ 5º-6º).

**Atualização dos valores (Lei 14.601 art. 7º §§ 3º-4º):** Ato do Poder Executivo federal pode alterar valores e o referencial de R$ 600, com correção limitada a no máximo a cada 24 meses, **vedada redução**.

### 3.2 Critérios de elegibilidade exatos

Lei 14.601/2023, art. 5º: *"São elegíveis ao Programa Bolsa Família as famílias: I — inscritas no CadÚnico; e II — cuja renda familiar per capita mensal seja igual ou inferior a R$ 218,00 (duzentos e dezoito reais)."*

D12.064/2024, art. 19: *"O Programa Bolsa Família atenderá às famílias em situação de pobreza, caracterizada pela renda familiar per capita mensal de até R$ 218,00 (duzentos e dezoito reais), denominada linha de pobreza."*

**Cálculo da renda — exclusões e inclusões (Lei 14.601 art. 4º §§ 1º-3º):**
- **Não computados** na renda familiar: (I) benefícios eventuais/temporários/sazonais; (II) recursos indenizatórios; (III) recursos de transferências de renda assistenciais.
- **Computado**: *"§ 2º O benefício de prestação continuada, de que trata o art. 20 da Lei nº 8.742, de 7 de dezembro de 1993 (Lei Orgânica da Assistência Social), recebido por quaisquer dos integrantes da família, **compõe** o cálculo da renda familiar per capita mensal."*
- **Possível desconto do BPC**: § 3º permite ao Poder Executivo autorizar desconto de faixas percentuais do BPC recebido por pessoa com deficiência no cálculo da renda per capita, "na forma do regulamento".

**Famílias unipessoais com inscrição/atualização cadastral fora de domicílio (D12.064 art. 18 §§ 3º-4º, redação Decreto 12.417/2025):** *"As famílias compostas de uma só pessoa sem inscrição ou atualização cadastral realizada por meio de entrevista em domicílio não poderão ingressar no Programa Bolsa Família enquanto não forem realizadas essas ações."*

### 3.3 Condicionalidades (saúde + educação)

Lei 14.601/2023, art. 10 (replicado em D12.064 art. 39):

- I — **realização de pré-natal** (gestantes);
- II — **calendário nacional de vacinação**;
- III — **acompanhamento do estado nutricional**, para beneficiários com até 7 anos incompletos;
- IV — **frequência escolar mínima** de:
  - **60%** para beneficiários de 4 a 6 anos incompletos;
  - **75%** para beneficiários de 6 a 18 anos incompletos que não tenham concluído a educação básica.

**Responsabilização (D12.064 art. 40):** Ministério da Educação acompanha incisos I-II (escolar); Ministério da Saúde acompanha incisos III-V (saúde).

**Efeitos do descumprimento (D12.064 art. 41):** *"Os efeitos decorrentes do não cumprimento das condicionalidades do Programa Bolsa Família serão gradativos e aplicados de acordo com os registros do histórico da família beneficiária."* O detalhe operacional (suspensão→cancelamento por "escadinha") fica delegado a ato do Ministro do MDS (§ 3º).

**Excludentes (D12.064 art. 41 § 1º):** Não se aplicam efeitos quando: (I) força maior/caso fortuito; (II) não houver oferta do serviço; (III) por questões de saúde, étnicas ou culturais; (IV) outros motivos sociais reconhecidos pelo MDS.

**Vedações (Lei 14.601 art. 10 § 1º IV):** *"vedada a adoção de procedimentos de caráter punitivo e de exposição vexatória"*.

### 3.4 Regras de acumulação

A Lei 14.601 e o D12.064 **não tratam diretamente da acumulação BF × BPC, BF × Auxílio-Inclusão, BF × Seguro-Desemprego**. As regras conhecidas vêm de outras fontes (LOAS, Lei 14.176/2021 do Auxílio-Inclusão), fora do escopo destes 8 textos. O que está literal:

- **BF × BPC (efeito indireto via cálculo da renda):** o BPC compõe a renda per capita (Lei 14.601 art. 4º § 2º) — na prática, um BPC integral (1 SM) na composição familiar tipicamente tira a família do limiar de R$ 218 per capita, salvo famílias muito numerosas. **Acumulação formal não é vedada**, mas a elegibilidade tende a ser aritmeticamente excluída.
- **BF × Pé-de-Meia:** acumuláveis para famílias **não-unipessoais** (D11.901 art. 3º § 2º dá prioridade BF). **Vedados** para famílias unipessoais beneficiárias de BF (L14.818 art. 3º § 3º II).
- **BF × Seguro-Defeso:** **acumuláveis** desde 2023 (Lei 14.601 art. 33 I revogou §§ 8º-10 do art. 2º da Lei 10.779 que previam suspensão do BF/AB durante o defeso). Ver seção 6.4.

### 3.5 Regra de proteção (saída gradativa)

Lei 14.601/2023, art. 6º:
- *"As famílias beneficiárias do Programa Bolsa Família cuja renda per capita mensal seja superior ao valor estabelecido no inciso II do caput do art. 5º desta Lei serão mantidas no Programa pelo período de até 24 (vinte e quatro) meses..."*
- **§ 1º:** desligamento se renda per capita > **meio salário mínimo** (excluído o valor dos benefícios financeiros do BF).
- **§ 2º:** durante a regra de proteção, a família recebe **50% do valor dos benefícios** a que era elegível.
- **§ 3º:** prioridade para reingresso (famílias auto-desligadas e famílias desligadas pelo término do período de 24 meses).
- **§ 5º (incluído pela Lei 15.077/2024):** ato do Executivo pode alterar o valor-limite (com R$ 600 — a referência atual do § 1º — como teto) e o prazo (24 meses como teto).

D12.064 art. 33 § 1º (redação Decreto 12.417/2025) flexibilizou: *"Serão beneficiadas pela regra de proteção... as famílias atendidas pelo Programa Bolsa Família que tiveram aumento da renda familiar per capita mensal que ultrapasse o valor da linha de pobreza previsto no art. 19, **até o limite estabelecido em ato do Ministro de Estado** do Desenvolvimento e Assistência Social, Família e Combate à Fome."* — ou seja, o limite-teto (½ SM da Lei) permanece, mas o limite **operacional** corrente é fixado por ato ministerial.

**§ 4º (incluído pelo Decreto 12.417/2025):** *"As famílias em situação de pobreza cujos benefícios foram cancelados em decorrência do encerramento do período estabelecido pela regra de proteção poderão retornar com prioridade ao Programa Bolsa Família no prazo máximo de trinta e seis meses..."* — janela de retorno preferencial **36 meses** após cancelamento.

### 3.6 Bloqueio / suspensão / cancelamento

D12.064 art. 30: *"As famílias atendidas pelo Programa Bolsa Família permanecerão com os benefícios liberados mensalmente para pagamento, exceto nas hipóteses de bloqueio, de suspensão ou de cancelamento dos benefícios. Parágrafo único. Ato do Ministro de Estado do Desenvolvimento e Assistência Social, Família e Combate à Fome disporá sobre as hipóteses de bloqueio, de suspensão ou de cancelamento dos benefícios..."*

**Status:** o decreto **reconhece os 3 status** (bloqueio / suspensão / cancelamento) mas **delega o detalhe operacional ao MDS** — as hipóteses específicas estão em portarias/instruções normativas do MDS, fora do escopo destes 8 textos. Lacuna parcialmente fechada.

**Ressarcimento por declaração dolosamente falsa (Lei 14.601 art. 18, replicado em D12.064 art. 49 e seguintes):** o responsável familiar que dolosamente prestar informação falsa no CadÚnico que resulte em ingresso/permanência indevida deverá ressarcir o erário; valores não restituídos são inscritos em dívida ativa (Lei 14.601 art. 19).

### Lacuna B2 fechada: **#1 — FECHADA** (valores e composição BF); **#9 — FECHADA** (decreto regulamentar BF lido).

---

## 4. PÉ-DE-MEIA — Lei 14.818/2024 + Decreto 11.901/2024

### 4.1 Valores por marco

Decreto 11.901/2024, art. 4º:

| Inciso | Incentivo | Valor | Periodicidade |
|---|---|---|---|
| I | **Matrícula** | **R$ 200,00** | Anual (1× ao ano, no início do ano letivo) |
| II | **Frequência** | **R$ 1.800,00** total anual | Em pelo menos 9 parcelas/ano (Lei 14.818 art. 5º § 4º) |
| III | **Conclusão** | **R$ 1.000,00** total anual | Acumulado por ano letivo concluído com aprovação; **só sacável após o certificado de conclusão do EM** (D11.901 art. 4º § 4º; Lei 14.818 art. 5º § 5º) |
| IV | **ENEM** | **R$ 200,00** | Pagamento único, somente para quem cursa o **3º ano** e participa do ENEM com certificado de conclusão (D11.901 art. 4º § 5º) |

**Total potencial em 3 anos regulares de EM:** (R$ 200 + R$ 1.800) × 3 + R$ 1.000 × 3 + R$ 200 = **R$ 9.200,00**.

**Requisitos por incentivo (D11.901 art. 4º §§ 1º-5º):**
- Matrícula: matrícula registrada até 2 meses após início do ano letivo + CPF do estudante.
- Frequência: ≥ 80% da carga horária total, aferida pela média do período letivo transcorrido ou pela frequência mensal.
- Conclusão: aprovação no ano letivo + certificado de conclusão do EM + (quando for o caso) participação no SAEB / Encceja / sistemas estaduais de avaliação externa.
- ENEM: participação comprovada + certificado de conclusão; **deferida apenas uma vez** por estudante.

**Aporte mínimo de "trava" (Lei 14.818 art. 5º § 7º):** *"Os aportes de que trata o § 5º deste artigo deverão corresponder a, no mínimo, 1/3 (um terço) do valor total dos aportes do incentivo financeiro-educacional desta Lei efetuados na conta de cada estudante."*

### 4.2 Critérios de elegibilidade

Lei 14.818/2024, art. 1º (com redação da Lei 14.945/2024 e Lei 15.265/2025):
- Estudantes de **baixa renda** matriculados no ensino médio das **redes públicas** e em **escolas comunitárias** que atuam na educação do campo conveniadas com o poder público;
- Pertencentes a **famílias inscritas no CadÚnico**;
- **Prioridade** para os que tenham renda per capita até o limite do art. 5º II da Lei 14.601 (R$ 218,00).

D11.901/2024, art. 3º:
- Idade: **14 a 24 anos** (EJA: **19 a 24 anos**, conforme Lei 14.818 art. 1º § 2º);
- **§ 1º (não-elegíveis):** estudantes que recebam os benefícios I-V do § 1º do art. 7º da Lei 14.601/2023 **e** que integrem **famílias unipessoais**;
- **§ 2º (prioridade):** estudantes elegíveis que integrem famílias beneficiárias de BF (não-unipessoais) têm prioridade.

**Critérios complementares possíveis (Lei 14.818 art. 1º § 3º):** vulnerabilidade social, matrícula em escola de tempo integral, idade do estudante, matrícula em EM articulado com educação profissional/tecnológica.

**Requisitos de permanência (Lei 14.818 art. 3º):**
- I — efetivação da matrícula no início de cada ano letivo;
- II — frequência escolar mínima de **80%** do total de horas letivas;
- III — conclusão do ano letivo com aprovação;
- IV — participação no SAEB e exames estaduais quando houver;
- V — participação no ENEM (3º ano);
- VI — participação no Encceja (EJA elegível).

### 4.3 Acumulação com BF e outros

**Não composição na renda familiar (Lei 14.818 art. 3º § 2º):** *"O incentivo de que trata esta Lei não será considerado para fins de cálculo da renda familiar para acesso a outros benefícios socioassistenciais."* — Pé-de-Meia **não conta** como renda para BF, BPC, etc.

**Vedação à acumulação (Lei 14.818 art. 3º § 3º):**
- I — (VETADO).
- II — *"os benefícios de que tratam os incisos I, II, III, IV e V do § 1º do art. 7º da Lei nº 14.601, de 19 de junho de 2023, em caso de famílias unipessoais."*

→ Em outras palavras: PdM **acumula com BF** quando a família tem mais de uma pessoa; **não acumula com BF** quando é unipessoal (estudante sozinho que receba BF I-V).

### 4.4 Regras de saque

**Saque livre (Lei 14.818 art. 5º § 4º):** aportes vinculados aos requisitos I (matrícula) e II (frequência) podem ser **resgatados a qualquer momento** (≥ 9 vezes/ano).

**Saque travado (Lei 14.818 art. 5º § 5º; D11.901 art. 4º § 4º):** aportes vinculados aos requisitos III (conclusão) e V (ENEM) **somente após o certificado de conclusão do ensino médio**.

**Conta (Lei 14.818 art. 5º §§ 1º-2º):** depósito em conta pessoal e intransferível em nome do estudante, podendo ser **conta poupança social digital** (Lei 14.075/2020). Movimentação por menor exige consentimento dos responsáveis legais (D11.901 art. 8º § 2º; falta de consentimento pode implicar suspensão dos incentivos — § 3º).

**Hipóteses de desligamento (D11.901 art. 5º):**
- I — requerimento do interessado;
- II — perda dos requisitos de elegibilidade;
- III — evasão, abandono ou reprovação por **duas vezes consecutivas** ou pelo período de 2 anos;
- IV — falecimento;
- V — situação comprovada de fraude ou irregularidade.

**Em desligamento por perda de elegibilidade (II)** o estudante pode requerer, após obter o certificado de conclusão, o montante do Incentivo Conclusão acumulado, em prazo de **4 anos** contados do desligamento (D11.901 art. 5º § 1º).

**Em desligamento por requerimento, evasão, óbito ou fraude** o estudante **não tem direito ao Incentivo Conclusão acumulado** (D11.901 art. 5º § 2º).

**Em fraude** o estudante **não pode reingressar** no programa, ainda que volte a ser elegível (D11.901 art. 5º § 3º).

**Repetência única (D11.901 art. 6º):** ao cursar novamente um ano abandonado/reprovado, o estudante recebe Matrícula e Frequência (mas não Conclusão) relativos ao ano. Essa repetência subsidiada é admitida **apenas uma vez** durante o EM.

### Lacuna B2 fechada: **#2 — FECHADA** (valores por marco e regras Pé-de-Meia).

---

## 5. PENSÃO ESPECIAL ÓRFÃOS FEMINICÍDIO — Lei 14.717/2023 + Decreto 12.636/2025

### 5.1 Valor

Lei 14.717/2023, art. 1º § 1º: *"O benefício de que trata o caput deste artigo, no valor de **1 (um) salário mínimo**, será pago **ao conjunto** dos filhos e dependentes menores de 18 (dezoito) anos de idade na data do óbito de mulher vítima de feminicídio."*

D12.636/2025, art. 1º caput: confirma "**garantia de um salário mínimo mensal aos filhos e aos dependentes menores de dezoito anos**".

**Divisão entre múltiplos beneficiários (D12.636 art. 9º):** *"Na hipótese de haver mais de um filho ou dependente da mulher vítima de feminicídio, a pensão será **dividida em partes iguais** entre aqueles elegíveis ao benefício. § 1º Em caso de cessação do direito de uma das partes, a cota específica da pensão será convertida em favor dos demais beneficiários."*

→ **Não é 1 SM por filho — é 1 SM total ao núcleo, dividido em cotas iguais.**

**Sem abono anual e sem descontos (D12.636 art. 3º):** *"A pensão especial não gera direito a abono anual e não está sujeita a descontos."*

### 5.2 Critérios e duração

**Elegibilidade (Lei 14.717 art. 1º caput; D12.636 art. 1º caput):**
- Filhos e dependentes **menores de 18 anos na data do óbito**;
- Mãe **vítima de feminicídio** tipificado no inciso VI do § 2º do art. 121 do Código Penal (agora art. 121-A após a Lei 14.994/2024 — D12.636 cita a tipificação atualizada);
- Renda familiar mensal **per capita ≤ 1/4 do salário mínimo**.

**Definição de família (D12.636 art. 1º § 1º I):** *"unidade composta por um ou mais indivíduos que contribuam para o rendimento ou tenham suas despesas atendidas pela unidade familiar e que habitem em um mesmo domicílio no momento do requerimento"*.

**Definição de dependente (D12.636 art. 1º § 1º IV):** enteado, criança e adolescente menor de 18 anos sob guarda (provisória/definitiva) ou tutela (provisória/definitiva) da mulher vítima, comprovada a dependência econômica.

**Extensão a vítima trans (D12.636 art. 1º § 2º):** *"O direito de que trata o caput é igualmente garantido aos filhos e aos dependentes de mulher transgênero vítima de feminicídio, mediante comprovação de acordo com o disposto neste Decreto."*

**Tutela do Estado (D12.636 art. 2º):** órfãos sob tutela do Estado também têm direito; pensão é depositada em conta específica, movimentação só na reintegração à família ampliada, colocação em família substituta ou ao completar 18 anos (ressalvada decisão judicial).

**Não computado na renda (D12.636 art. 10):** benefícios eventuais/temporários, programas assistenciais de transferência de renda (mas BPC **é computado**: *"...com exceção do benefício de prestação continuada de que trata o art. 20 da Lei nº 8.742, de 7 de dezembro de 1993"*) e rendas eventuais/sazonais.

**Cessação (Lei 14.717 art. 1º § 6º):** ao completar 18 anos ou pelo falecimento; cota é reversível aos demais beneficiários.

**Concessão provisória (Lei 14.717 art. 1º § 2º):** *"...será concedido, ainda que provisoriamente, mediante requerimento, sempre que houver fundados indícios de materialidade do feminicídio... vedado ao autor, coautor ou partícipe do crime representar as crianças ou adolescentes para fins de recebimento e administração da pensão especial."*

**Reversão por trânsito em julgado (Lei 14.717 art. 1º § 3º):** se trânsito em julgado concluir que não houve feminicídio, *"o pagamento... cessará imediatamente, **desobrigados os beneficiários do dever de ressarcir** os valores recebidos, **salvo má-fé**."*

**Exclusão (Lei 14.717 art. 1º § 5º):** criança/adolescente condenado por trânsito em julgado por ato infracional análogo a feminicídio cometido contra a mulher vítima; ressalvados absolutamente incapazes e inimputáveis.

**Não prejudica indenização civil (Lei 14.717 art. 1º § 7º):** não afeta o dever de indenização do agressor.

### 5.3 Acumulação com pensão por morte (regime previdenciário) — **LACUNA CRÍTICA FECHADA**

**Lei 14.717/2023, art. 1º § 4º (literal):**

> *"O benefício de que trata o caput deste artigo, **ressalvado o direito de opção, não é acumulável com benefícios previdenciários recebidos do Regime Geral de Previdência Social (RGPS) ou dos regimes próprios de previdência social, nem com pensões ou benefícios do sistema de proteção social dos militares**."*

D12.636/2025, art. 4º replica o dispositivo:

> *"A pensão especial não é acumulável com benefícios previdenciários recebidos do Regime Geral de Previdência Social ou dos Regimes Próprios de Previdência Social, nem com pensões ou benefícios do sistema de proteção social dos militares, ressalvado o direito de opção."*

**Implicações para a vertical previdenciária do MC:**
- O órfão que tenha **pensão por morte** do RGPS pela mãe-vítima **deve optar** entre: (a) a pensão por morte previdenciária; (b) a pensão especial de 1 SM da Lei 14.717.
- O cálculo é caso a caso: pensão por morte do RGPS pode ser **maior** que 1 SM (se a mãe contribuía sobre faixa superior) — nesse caso, opção pela previdenciária. Pode ser **menor ou inexistente** (mãe sem qualidade de segurada na data do óbito) — nesse caso, opção pela pensão especial.
- A **vedação não inclui o BPC**, mas o BPC compõe a renda per capita (D12.636 art. 10 II) — outro ponto de cálculo cuidadoso.
- A pensão especial **não acumula com pensão militar** (art. 50 da Lei 13.954/2019 e similares).

### 5.4 Operacionalização INSS

**Competência (D12.636 art. 5º):** *"Cabe ao Instituto Nacional do Seguro Social — INSS receber e processar os requerimentos e decidir quanto à concessão da pensão de que trata o art. 1º."* Requerimento via canais de atendimento do INSS.

**Requisitos para concessão, manutenção e revisão (D12.636 art. 6º):**
- I — **CPF regular** do requerente;
- II — **documento pessoal de identificação oficial com foto** (ou certidão de nascimento se impossível);
- III — **inscrição e atualização do CadÚnico a cada 24 meses**, contendo CPF do requerente e de todos os membros da família;
- IV — **um dos seguintes** documentos relacionando o fato a feminicídio:
  - (a) auto de prisão em flagrante;
  - (b) decreto de prisão preventiva;
  - (c) portaria inaugural do inquérito policial;
  - (d) relatório de conclusão do inquérito policial;
  - (e) oferecimento da denúncia;
  - (f) decisão cautelar ou de mérito que enquadre como feminicídio; ou
  - (g) sentença penal condenatória transitada em julgado.

→ Ou seja: **a portaria inaugural do inquérito policial já é suficiente** para concessão provisória — operacionaliza o § 2º do art. 1º da Lei 14.717.

**Para dependentes (D12.636 art. 6º § 1º):** termo de guarda ou tutela (provisórios ou definitivos), ou outro documento que comprove a dependência.

**Pendências documentais (D12.636 art. 7º):** prazo de **90 dias** para regularizar; após o prazo, decisão no mérito ou encerramento sem mérito.

**Documentos do representante legal (D12.636 art. 8º):** documento pessoal com cadastro biométrico, CPF, doc de relação com a vítima, qualidade de representante, documento do feminicídio. Estrangeiro residente sem documento pessoal pode usar Carteira de Registro Nacional Migratório.

**Vedação à representação pelo agressor (D12.636 art. 8º § 2º; Lei 14.717 art. 1º § 2º):** vedada a representação por autor, coautor ou partícipe.

**Crianças em serviço de acolhimento (D12.636 art. 8º § 3º):** podem ser representadas pelos dirigentes da instituição.

**Dever das equipes do CRAS/SUAS (D12.636 art. 6º § 2º):** *"As equipes das unidades socioassistenciais deverão orientar as famílias da mulher vítima de feminicídio para atualizarem as informações do CadÚnico sobre a nova composição familiar."* — gatilho operacional para a rede SUAS.

### Lacuna B2 fechada: **#5 — FECHADA** (Lei 14.717 lida; regra de acumulação previdenciária citada literalmente).

---

## 6. SEGURO-DEFESO — Lei 10.779/2003 + Decreto 8.424/2015

(Versão consolidada com alterações até a Lei 15.399/2026 e o Decreto 12.527/2025.)

### 6.1 Valor e duração

**Valor (Lei 10.779/2003, art. 1º caput, redação Lei 13.134/2015):** *"...fará jus ao benefício do seguro-desemprego, no valor de **1 (um) salário-mínimo mensal**, durante o período de defeso de atividade pesqueira para a preservação da espécie."*

**Período de defeso (Lei 10.779 art. 1º § 2º):** *"O período de defeso de atividade pesqueira é o fixado pelo Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis — IBAMA, em relação à espécie marinha, fluvial ou lacustre a cuja captura o pescador se dedique."* — varia por espécie e por UF.

**Limite máximo de parcelas (Lei 10.779 art. 1º § 8º):** não pode exceder o limite máximo variável de que trata o caput do art. 4º da Lei 7.998/1990 (entre 3 e 5 parcelas, conforme tempo de contribuição).

**Limite orçamentário (Lei 10.779 art. 5º § 1º, incluído pela Lei 15.399/2026):** despesa fica limitada, a cada exercício, à dotação orçamentária do exercício anterior corrigida nos termos da LC 200/2023; **§ 3º:** no exercício de 2026, a despesa não excederá **R$ 7.909.535.000,00**. → introduz **risco de fila** no programa.

**Distribuição proporcional (D8.424 art. 1º-A, incluído pelo Decreto 12.527/2025):** ato conjunto Pesca + MTE + INSS distribui anualmente os recursos disponíveis por período de defeso, conforme proporção histórica.

**Apenas um benefício por ano (Lei 10.779 art. 1º § 5º, redação Lei 13.134/2015):** *"O pescador profissional artesanal não fará jus, no mesmo ano, a mais de um benefício de seguro-desemprego decorrente de defesos relativos a espécies distintas."*

**Pessoal e intransferível (Lei 10.779 art. 1º § 7º):** o benefício é pessoal e não se estende a familiares ou a atividades de apoio à pesca (§ 6º).

### 6.2 Critérios de elegibilidade

**Categoria do segurado (Lei 10.779/2003 art. 1º caput):** pescador artesanal definido na alínea "b" do inciso VII do art. 12 da Lei 8.212/1991 (custeio) e na alínea "b" do inciso VII do art. 11 da Lei 8.213/1991 (benefícios) — ou seja, **segurado especial** na categoria pescador.

**Documentos (Lei 10.779 art. 2º § 2º, redação Lei 15.265/2025):**
- I — **registro como pescador profissional, categoria artesanal**, no Registro Geral da Atividade Pesqueira (RGP), atualizado, com **antecedência mínima de 1 (um) ano** contado da data do requerimento;
- II — cópia dos documentos fiscais de venda do pescado **referentes a pelo menos 6 (seis) dos 12 (doze) meses anteriores ao início do período de defeso**, ou comprovantes de contribuição previdenciária mensal (caso tenha vendido a pessoa física);
- III — outros estabelecidos em ato do Codefat.

**Verificação da contribuição (Lei 10.779 art. 2º § 3º):** o MTE verifica condição de segurado especial e pagamento mensal da contribuição previdenciária nos 12 meses imediatamente anteriores ao requerimento ou no período entre defesos, o que for menor.

**Domicílio em município abrangido ou limítrofe (Lei 10.779 art. 1º § 11, incluído pela Lei 15.265/2025):** *"Somente fará jus ao benefício de que trata este artigo o pescador profissional que comprovar domicílio em Município abrangido ou limítrofe à área definida no ato que instituiu o período de defeso..."*

**Comprovação anual de atividade (Lei 10.779 art. 2º § 12, redação Lei 15.399/2026):** comprovação do exercício da pesca no período entre defesos por **relatório anual** com informações sobre a venda do pescado, submetido ao MTE.

**Operacionalização (Lei 10.779 art. 2º caput, redação Lei 15.265/2025):** *"Compete ao Ministério do Trabalho e Emprego (MTE) receber e processar os requerimentos e habilitar os beneficiários do seguro-desemprego do pescador artesanal, conforme procedimentos, critérios e validações estabelecidos em resolução do Codefat."* (Antes da MP 1.323/2025 a competência era do INSS — D8.424 art. 3º ainda traz a redação INSS.)

### 6.3 Vínculo com CadÚnico

Lei 10.779 art. 1º § 10 (redação Lei 15.399/2026):

> *"Ao requerente do benefício de que trata o caput deste artigo será solicitado registro biométrico nos termos do art. 1º da Lei nº 15.077, de 27 de dezembro de 2024, e **inscrição no Cadastro Único para Programas Sociais do Governo Federal (CadÚnico)**, **sem efeitos em limite de renda para o acesso ao benefício**, admitida, para fins de verificação biométrica, a utilização da base de dados do Tribunal Superior Eleitoral e da Carteira Nacional de Habilitação (CNH) até a plena implementação da Carteira de Identidade Nacional."*

**→ CadÚnico passou a ser exigido (a partir da Lei 14.973/2024, com redação atual da Lei 15.399/2026), MAS sem que o limiar de renda do CadÚnico opere como corte para o Seguro-Defeso.** A inscrição é instrumental (verificação biométrica e cruzamento com cadastros oficiais), não condicional à pobreza. Esse desenho sinaliza a fronteira entre o Seguro-Defeso (**previdenciário/trabalhista** — financiado pelo FAT) e os programas socioassistenciais (renda de cidadania).

**Excludentes para inconsistências cadastrais (Lei 10.779 art. 1º § 12, Lei 15.399/2026):** canais de revisão céleres, presenciais ou virtuais, gratuitos, para pescadores excluídos por inconsistência cadastral ou falha biométrica.

### 6.4 Acumulação com outros benefícios — **LACUNA CRÍTICA FECHADA**

**Lei 10.779/2003 art. 2º § 1º (redação Lei 15.265/2025):**

> *"Para fazer jus ao benefício, o pescador não poderá estar em gozo de benefício previdenciário ou assistencial de natureza continuada, **exceto pensão por morte, auxílio-acidente e transferências de renda de que tratam o parágrafo único do art. 6º e o inciso VI do caput do art. 203 da Constituição Federal e o caput e o § 1º do art. 1º da Lei nº 10.835, de 8 de janeiro de 2004**."*

D8.424/2015 art. 6º VI (redação Decreto 12.527/2025) — hipóteses que **não cessam** o seguro-defeso, replicando as exceções da lei: (a) pensão por morte; (b) auxílio-acidente; (c) transferências de renda dos arts. 6º p.u. e 203 VI da CF e art. 1º da Lei 10.835/2004 (renda básica de cidadania).

→ **Na prática, Seguro-Defeso É acumulável com:**
- **Bolsa Família** (transferência de renda da Lei 10.835/2004 e do art. 6º p.u. da CF — reforço de mínimo existencial);
- **Pensão por morte** do RGPS;
- **Auxílio-acidente** do RGPS.

→ **Não é acumulável com:**
- **BPC** (benefício assistencial de natureza continuada — não está nas exceções);
- **Aposentadorias** (rural, por idade, por invalidez, etc.);
- **Auxílio-doença/auxílio-incapacidade temporária** e demais benefícios previdenciários por incapacidade;
- **Auxílio-Inclusão** (interpretação direta — auxílio assistencial de natureza continuada).

**Atenção histórica:** **a redação anterior (Lei 13.134/2015) vedava a acumulação com programas de transferência de renda com condicionalidades** (BF/AB), e os antigos §§ 8º a 10 do art. 2º previam suspensão temporária do BF durante o defeso. **A Lei 14.601/2023 art. 33 inciso I revogou expressamente esses §§** e a Lei 14.601 também alterou o caput do § 1º para incluir as transferências de renda nas exceções. → A partir de 2024 (data de vigência), Seguro-Defeso e BF passaram a ser **plenamente acumuláveis** sem suspensão.

**Cessação do seguro-defeso pelo INSS (D8.424 art. 6º, redação Decreto 12.527/2025):**
- I — início de atividade remunerada/percepção de outra renda incompatível;
- II — desrespeito ao período de defeso;
- III — renda da pesca de espécie alternativa não contemplada no defeso;
- IV — suspensão do período de defeso (ato IBAMA);
- V — morte;
- VI — início de percepção de benefício previdenciário/assistencial continuado, **exceto** pensão por morte, auxílio-acidente, transferências de renda;
- VII — declaração falsa;
- VIII — comprovação de fraude.

**Sanções por fraude (Lei 10.779 art. 3º, redação Lei 15.399/2026):**
- demissão (servidor público);
- suspensão da atividade com cancelamento do registro RGP por **5 anos**;
- impedimento de requerer o benefício pelo prazo de **5 anos**, dobrado em reincidência.

### Lacuna B2 fechada: **#6 — FECHADA** (Lei 10.779 + D8.424 lidos; regras de acumulação citadas literalmente).

---

## 7. CRUZAMENTO LACUNAS B2 × FECHAMENTO B3

| # | Lacuna B2 | Status B3 | Onde foi fechada | Observação |
|---|---|---|---|---|
| 1 | BF — valores monetários por composição familiar | **FECHADA** | Seção 3.1 (Lei 14.601 art. 7º + D12.064 art. 21) | Estrutura completa: R$ 142/integrante + R$ 600 piso (complementar) + R$ 150 primeira infância + R$ 50 variável familiar |
| 2 | Pé-de-Meia — valores por marco e regras | **FECHADA** | Seção 4.1 (D11.901 art. 4º) | R$ 200 matrícula + R$ 1.800 frequência + R$ 1.000 conclusão + R$ 200 ENEM = até R$ 9.200 em 3 anos |
| 3 | CNH Social — regras de elegibilidade | **NÃO ENDEREÇADA** | — | Programa de competência estadual (DETRAN) — fora do escopo destes 8 PDFs federais |
| 4 | Carteira do Idoso — comprovação dispensável quando há outra prova de baixa renda | **NÃO ENDEREÇADA** | — | Lei 10.741/2003 (Estatuto do Idoso) não estava no conjunto baixado |
| 5 | Pensão especial órfãos feminicídio — Lei 14.717 não localizada | **FECHADA** | Seção 5 (Lei 14.717 + D12.636) | Acumulação com pensão por morte resolvida: vedada, salvo direito de opção |
| 6 | Seguro-Defeso — Lei 10.779 não localizada | **FECHADA** | Seção 6 (Lei 10.779 + D8.424) | Acumulação com BF foi liberada pela Lei 14.601/2023; CadÚnico exigido sem efeito de corte de renda |
| 7 | Aposentadoria Rural / Segurado Especial — uso do CadÚnico | **PARCIAL** | Seção 6.2 (referência cruzada) | Lei 10.779 referencia "alínea b inciso VII art. 11 L8213/91" (segurado especial pescador). Para aposentadoria rural propriamente (lavrador/extrativista), a base é a mesma alínea aplicada às demais categorias de segurado especial; o CadÚnico não é exigido para aposentadoria rural por L8213. **A lacuna sobre o uso do CadÚnico como evidência indireta para aposentadoria rural permanece aberta** — não há norma nestes 8 textos; é matéria de IN INSS e da Portaria Interministerial MPS/MDS 30/2023, fora do escopo |
| 8 | Programas estaduais e municipais que usam CadÚnico | **NÃO ENDEREÇADA** | — | Fora do escopo (federal apenas) |
| 9 | Decreto regulamentar BF (2023+) e Lei 14.601 | **FECHADA** | Seções 3.1–3.6 | Lei 14.601/2023 + D12.064/2024 lidos integralmente |
| 10 | Bolsa Verde — regulamentação atual | **NÃO ENDEREÇADA** | — | Não está no conjunto baixado |
| 11 | Telefone Popular — operacional? | **NÃO ENDEREÇADA** | — | Sem texto legal recente no conjunto |
| 12 | Concessões automáticas vs. requerimento ativo | **PARCIAL** | Seções 3, 4, 5, 6 | **BF**: pré-habilitação MDS sobre famílias do CadÚnico (não é "automático" stricto sensu — depende de seleção pelo MDS conforme dotação orçamentária — Lei 14.601 art. 11 § 1º; D12.064 art. 18). **Pé-de-Meia**: pré-habilitação automática a partir de dados de matrícula + CadÚnico (D11.901 art. 9º — o estudante não requer; o sistema concede). **Pensão Feminicídio**: requerimento ativo via INSS (Lei 14.717 art. 1º § 2º; D12.636 art. 5º). **Seguro-Defeso**: requerimento ativo via MTE (Lei 10.779 art. 2º). → Apenas Pé-de-Meia é genuinamente automático; os demais exigem ação. **Lacuna parcialmente fechada** para os 4 programas cobertos; permanece aberta para BPC, Auxílio-Inclusão, TSEE, Carteira do Idoso, ID Jovem |
| 13 | Comparação lista fev/2026 vs. lista abr/2025 | **NÃO ENDEREÇADA** | — | Comparação programa-a-programa não realizada — fora do escopo deste Sprint |
| 14 | IVCAD CH3 (renda × aluguel) e priorização habitacional | **NÃO ENDEREÇADA** | — | MCMV / Pró-Moradia fora do conjunto baixado |

**Totalização: 6 FECHADAS (1, 2, 5, 6, 9, 12-parcial-mas-quase-total) + 2 PARCIAIS (7, 12 efetivamente parcial) + 6 NÃO ENDEREÇADAS (3, 4, 8, 10, 11, 13, 14 — sendo 14 itens listados, 7 não endereçados pois essencialmente fora do escopo legal destes 8 PDFs).**

## 8. DESCOBERTAS OPERACIONAIS RELEVANTES PARA O Φ₀-TRIAGEM

### 8.1 Armadilhas de acumulação que afetam o cidadão

1. **BF × BPC (efeito aritmético):** o BPC compõe a renda per capita (Lei 14.601 art. 4º § 2º). Família com 1 BPC integral (R$ 1.518 em 2026) e 3 membros tem renda per capita R$ 506 — fora do limiar BF de R$ 218. **Sinal triagem Φ₀:** detectar coexistência BPC+BF declarado e advertir.
2. **Pensão Feminicídio × Pensão por morte RGPS:** vedação à acumulação com **direito de opção** (Lei 14.717 art. 1º § 4º). **Sinal triagem Φ₀:** simulador comparando pensão por morte (calculada sobre RMI da mãe) vs. pensão especial fixa de 1 SM. Em famílias com mais de 1 órfão, lembrar que a pensão especial é **dividida em cotas**, então a opção pode mudar conforme o número de órfãos.
3. **Seguro-Defeso × BPC e aposentadorias:** acumulação **vedada**. **Sinal triagem Φ₀:** pescador artesanal com BPC ou aposentadoria não pode requerer; se requerer, o INSS cessa.
4. **Pé-de-Meia × BF unipessoal:** vedação específica (L14.818 art. 3º § 3º II). **Sinal triagem Φ₀:** estudante adulto (19-24, EJA) que mora sozinho e recebe BF — PdM bloqueado.
5. **BF cancelado por regra de proteção:** janela de prioridade de retorno **36 meses** (D12.064 art. 33 § 4º, redação Decreto 12.417/2025). **Sinal triagem Φ₀:** família que perdeu BF nessa janela tem direito a reingresso prioritário — não é "sair e esperar fila comum".

### 8.2 Bloqueios/suspensões detectáveis preventivamente

- **BF — descumprimento de condicionalidades (Lei 14.601 art. 10):** frequência escolar < 75% (6-18 anos), pré-natal não realizado, vacinação atrasada, acompanhamento nutricional ausente. **Φ₀:** se a triagem cruzar dados do CadÚnico com calendário SUS/escola, pode antecipar risco de bloqueio antes da efetivação.
- **BF — inconsistência cadastral em família unipessoal sem entrevista em domicílio (D12.064 art. 18 §§ 3º-4º):** ingresso/manutenção bloqueada. **Φ₀:** se a família declarou ser unipessoal e não há registro de entrevista domiciliar, alertar.
- **Seguro-Defeso — RGP desatualizado (< 1 ano):** indeferimento certo (Lei 10.779 art. 2º § 2º I). **Φ₀:** verificar status do RGP do pescador antes do requerimento.
- **Seguro-Defeso — falta documentos fiscais de venda em ≥ 6 dos 12 meses pré-defeso (Lei 10.779 art. 2º § 2º II, redação Lei 15.265/2025):** indeferimento. **Φ₀:** alertar pescador a manter notas fiscais ao longo do ano.
- **Pensão Feminicídio — CadÚnico com > 24 meses sem atualização (D12.636 art. 6º III):** indeferimento. **Φ₀:** alertar família sobre janela de atualização.

### 8.3 Janelas operacionais para a triagem capturar

- **Regra de proteção do BF** (24 meses + 36 meses de prioridade de retorno = janela total de até **60 meses** em que o estado da família é reversível): grande oportunidade para o produto Φ₀ acompanhar e otimizar.
- **Seguro-Defeso requerimento (D8.424 art. 4º):** prazo de 30 dias antes do início do defeso até o último dia do defeso. **Janela curta** que costuma ser perdida; o produto pode lembrar.
- **Pensão Feminicídio — concessão provisória com base em portaria do inquérito (D12.636 art. 6º IV "c"):** desde a abertura do IP a família já pode requerer. **Sinal Φ₀:** rede SUAS/CRAS deve orientar imediatamente após o registro do feminicídio (D12.636 art. 6º § 2º — dever das equipes).
- **Pé-de-Meia — saque livre matrícula+frequência:** pode ser usado como **renda imediata** pela família mesmo durante o EM; conclusão+ENEM ficam travados como "poupança terminal" (até R$ 3.200 ao final). **Sinal Φ₀:** explicar a estrutura travada/livre é informação valiosa.

### 8.4 Cruzamentos com a vertical previdenciária

- **Seguro-Defeso depende de qualidade de segurado especial pescador** (alínea "b" inciso VII art. 11 L8213/91) — uma triagem Φ₀ que detecte segurado especial em outras categorias (lavrador, extrativista) precisa NÃO direcionar para Seguro-Defeso.
- **Pensão Feminicídio interface diretamente com o INSS** (D12.636 art. 5º) — é benefício assistencial mas operado pelo INSS. Φ₀ deve identificar essa peculiaridade e direcionar à plataforma certa (Meu INSS, não MDS).
- **CadÚnico no Seguro-Defeso é mero gatilho biométrico/cadastral** (Lei 10.779 art. 1º § 10) — não há corte de renda. Importante NÃO confundir com programas socioassistenciais reais.
- **MTE assumiu o Seguro-Defeso** desde a MP 1.323/2025 (consolidada pela Lei 15.265/2025): a competência migrou de INSS → MTE. O D8.424 ainda traz a redação "INSS"; há risco de fricção operacional. Φ₀ deve direcionar requerimentos novos ao MTE.

## 9. LACUNAS RESIDUAIS PÓS-B3

| Lacuna B2 não fechada | Encaminhamento sugerido |
|---|---|
| **#3 — CNH Social** | Sprint específico estadual (DETRAN-SP, DETRAN-RJ, etc.). Heterogeneidade alta — 27 unidades federativas |
| **#4 — Carteira do Idoso (dispensa quando há outra prova de baixa renda)** | Ler Lei 10.741/2003 (Estatuto do Idoso) art. 40 |
| **#7 — Aposentadoria rural (uso do CadÚnico como evidência indireta)** | Buscar IN INSS PRES/2022 e Portaria Interministerial MPS/MDS 30/2023 (citada no canônico B2 §4.7) |
| **#8 — Programas estaduais/municipais** | Sprint dedicado por capital — começar por SP/RJ/BH/POA/REC/SAL |
| **#10 — Bolsa Verde regulamentação atual** | Buscar Decreto regulamentar pós-relançamento (não localizado neste Sprint) |
| **#11 — Telefone Popular operacional?** | Consulta institucional ANATEL ou MCom |
| **#13 — Comparação lista fev/2026 vs. abr/2025** | Sprint de diff documental (delta de programas) |
| **#14 — Priorização IVCAD CH3 em programas habitacionais** | Sprint sobre Lei 11.124/2005 (FNHIS) e regras do MCMV Faixa 1 |
| **Bloqueio/suspensão BF (detalhe operacional)** | Buscar portarias MDS sobre as hipóteses específicas (delegado por D12.064 art. 30) |
| **BF × Auxílio-Inclusão e BF × Seguro-Desemprego** | Não tratados literalmente nestes 8 textos — buscar Lei 14.176/2021 (Auxílio-Inclusão) e Lei 7.998/1990 (Seguro-Desemprego) |
| **Lei 14.994/2024 (atualização do tipo penal de feminicídio para art. 121-A)** | Citada no D12.636 mas o texto não está no conjunto baixado — verificar se relevante |

## 10. CHECKPOINT FINAL

STATUS: PARCIAL | LACUNAS_FECHADAS: 6 de 14 (com 2 parciais adicionais) | FONTES_LIDAS: 8 (4 leis + 4 decretos, todas via planalto.gov.br versão consolidada) | DURAÇÃO: ~50min | TIMESTAMP_FIM: 2026-05-07
