---
título: MC-METODOLOGIA-IVCAD-Oficial-EngenhariaReversa-v1_0-2026-0507
sprint: B1 — Extração metodologia IVCAD oficial
modo: Extração crua (read-only)
status: COMPLETO
fontes_lidas: 3 de 3 (+ 2 imagens complementares na mesma pasta CADÚNICO)
data_execução: 2026-05-07T12:55:46
duração: 00h05min
---

## 1. SUMÁRIO DA EXTRAÇÃO

Foram lidos os 3 PDFs especificados na pasta-fonte: `_OBS-CADUN-IVCAD.pdf` (página principal IVCAD do Observatório do CadÚnico, com IVCAD-Brasil consolidado), `_OBS-CADUN-  filtro IVCAD.pdf` (lista os 40 indicadores agrupados por dimensão como filtros disponíveis no Observatório, com nomes truncados pelo painel), e `IVCAD PÁGINA WEB.pdf` (página oficial do MDS em gov.br/mds/.../ivcad, com a tabela completa dos 40 indicadores e descrição do propósito do índice). Adicionalmente, na mesma pasta `CADÚNICO\OBSERVATÓRIO\INDICADORES\` foram identificadas duas imagens explicitamente intituladas `IN084 FORMULA IVCAD.png` e `IN084 - PARÂMETROS e DIMENSÕES IVCAD.png` que contêm a fórmula matemática literal e a tabela canônica de indicadores — usadas como fonte complementar para preencher fórmula explícita e pesos. Recuperação metodológica: 6/6 dimensões com indicadores nomeados, 40/40 indicadores com descrição completa, fórmula matemática explícita confirmada, escala definida, escopo de aplicação textual. Lacunas principais: regras de pontuação detalhadas indicador a indicador (cada um é binário 0/1, mas a regra precisa de detecção da vulnerabilidade no CadÚnico não está documentada nas fontes lidas), método de cálculo dos QUARTIS, ponto-de-corte de classificação alta/média/baixa, e periodicidade exata de recálculo.

## 2. DEFINIÇÃO OFICIAL DO IVCAD

**Definição (Variante A — Página oficial MDS):**
> "O Índice de Vulnerabilidade das Famílias do Cadastro Único (IVCAD) possibilita identificar situações de vulnerabilidade social por meio das informações presentes no Cadastro Único."
> [Fonte: IVCAD PÁGINA WEB.pdf, p. 1]

> "O IVCAD sintetiza dimensões que sinalizam circunstâncias que podem representar uma vulnerabilidade para a família incluída no Cadastro Único."
> [Fonte: IVCAD PÁGINA WEB.pdf, p. 1]

**Definição (Variante B — Painel Observatório do CadÚnico):**
> "IVCAD - Índice de Vulnerabilidade das Famílias do Cadastro Único v1.0.5"
> "O IVCAD sintetiza 6 dimensões em que uma família pode estar em situação de vulnerabilidade social: Necessidade de Cuidados (NC); Desenvolvimento na Primeira Infância (DPI); Desenvolvimento de Crianças e Adolescentes (DCA); Trabalho e Qualificação de Adultos (TQA); Disponibilidade de Recursos (DR); Condições Habitacionais (CH)."
> [Fonte: _OBS-CADUN-IVCAD.pdf, p. 1]

As duas variantes são consistentes; a Variante B explicita o número de dimensões (6) e a versão do índice (v1.0.5).

## 3. ESCOPO DE APLICAÇÃO E CRITÉRIOS DE ELEGIBILIDADE

> "Atenção! O IVCAD é calculado considerando famílias beneficiárias do Programa Bolsa Família e, não sendo beneficiárias do Programa, com cadastro atualizado em até 2 anos e renda familiar per capita de até meio salário mínimo."
> [Fonte: _OBS-CADUN-IVCAD.pdf, p. 1]

**Universo Brasil-março/2026 (referência publicada):**
- Número de famílias para o cálculo do IVCAD: **26.495.935**
- Número de territórios com famílias incluídas: 5 Regiões, 27 UFs, 5.571 Municípios
- [Fonte: _OBS-CADUN-IVCAD.pdf, p. 1]

## 4. AS DIMENSÕES DO ÍNDICE

O IVCAD é composto por **6 dimensões** com **pesos iguais** (média aritmética simples — ver §6).

### Dimensão 1 — Necessidade de Cuidados (NC)
- Descrição literal: "Necessidade de Cuidados (NC)" — dimensão que sinaliza presença de membros que demandam cuidado (crianças, idosos, pessoas com deficiência) ou desbalanço da composição familiar para prover esse cuidado. [Fonte: _OBS-CADUN-IVCAD.pdf, p. 1; IVCAD PÁGINA WEB.pdf, p. 2]
- Peso da dimensão no índice composto: **1/6** (peso uniforme — ver fórmula §6) [Fonte: IN084 FORMULA IVCAD.png]
- Quantidade de indicadores: **7** (NC1 a NC7)
- Valor Brasil-março/2026: **0,354** [Fonte: _OBS-CADUN-IVCAD.pdf, p. 1]
- % famílias com vulnerabilidade NC acima da média: **57%** [Fonte: _OBS-CADUN-IVCAD.pdf, p. 1]
- Observações: Painel oferece corte por "QUARTIS NC" e "QUANTIDADE DE INDICADORES EM VULNERAB[ILIDADE]". [Fonte: _OBS-CADUN-  filtro IVCAD.pdf, p. 1]

### Dimensão 2 — Desenvolvimento na Primeira Infância (DPI)
- Descrição literal: "Desenvolvimento na Primeira Infância (DPI)" / "Desenvolvimento da Primeira Infância" (variação no painel). [Fonte: _OBS-CADUN-IVCAD.pdf, p. 1; IVCAD PÁGINA WEB.pdf, p. 2; _OBS-CADUN-  filtro IVCAD.pdf, p. 1]
- Peso da dimensão: **1/6** [Fonte: IN084 FORMULA IVCAD.png]
- Quantidade de indicadores: **3** (DPI1 a DPI3)
- Valor Brasil-março/2026: **0,078** [Fonte: _OBS-CADUN-IVCAD.pdf, p. 1]
- % famílias com vulnerabilidade DPI acima da média: **19%** [Fonte: _OBS-CADUN-IVCAD.pdf, p. 1]

### Dimensão 3 — Desenvolvimento de Crianças e Adolescentes (DCA)
- Descrição literal: "Desenvolvimento de Crianças e Adolescentes (DCA)" / "Desenvolvimento da Criança e Adolescente" (variação no painel). [Fonte: _OBS-CADUN-IVCAD.pdf, p. 1; IVCAD PÁGINA WEB.pdf, p. 2; _OBS-CADUN-  filtro IVCAD.pdf, p. 1]
- Peso da dimensão: **1/6** [Fonte: IN084 FORMULA IVCAD.png]
- Quantidade de indicadores: **5** (DCA1 a DCA5)
- Valor Brasil-março/2026: **0,049** [Fonte: _OBS-CADUN-IVCAD.pdf, p. 1]
- % famílias com vulnerabilidade DCA acima da média: **14%** [Fonte: _OBS-CADUN-IVCAD.pdf, p. 1]

### Dimensão 4 — Trabalho e Qualificação de Adultos (TQA)
- Descrição literal: "Trabalho e Qualificação de Adultos (TQA)". [Fonte: _OBS-CADUN-IVCAD.pdf, p. 1; IVCAD PÁGINA WEB.pdf, p. 2]
- Peso da dimensão: **1/6** [Fonte: IN084 FORMULA IVCAD.png]
- Quantidade de indicadores: **7** (TQA1 a TQA7)
- Valor Brasil-março/2026: **0,636** [Fonte: _OBS-CADUN-IVCAD.pdf, p. 1]
- % famílias com vulnerabilidade TQA acima da média: **45%** [Fonte: _OBS-CADUN-IVCAD.pdf, p. 1] (registro: PDF mostra texto cortado "TQ 45" — interpretado como TQA 45% por contexto da sequência NC/DPI/DCA/TQA; valor em rodapé [Fonte: _OBS-CADUN-IVCAD.pdf, p. 1])

### Dimensão 5 — Disponibilidade de Recursos (DR)
- Descrição literal: "Disponibilidade de Recursos (DR)". [Fonte: _OBS-CADUN-IVCAD.pdf, p. 1; IVCAD PÁGINA WEB.pdf, p. 2]
- Peso da dimensão: **1/6** [Fonte: IN084 FORMULA IVCAD.png]
- Quantidade de indicadores: **4** (DR1 a DR4)
- Valor Brasil-março/2026: **0,409** [Fonte: _OBS-CADUN-IVCAD.pdf, p. 1]
- % famílias com vulnerabilidade DR acima da média: **NÃO LOCALIZADO NA FONTE** (PDF 1 lista NC, DPI, DCA, TQA mas trunca antes de DR e CH).

### Dimensão 6 — Condições Habitacionais (CH)
- Descrição literal: "Condições Habitacionais (CH)". [Fonte: _OBS-CADUN-IVCAD.pdf, p. 1; IVCAD PÁGINA WEB.pdf, p. 2]
- Peso da dimensão: **1/6** [Fonte: IN084 FORMULA IVCAD.png]
- Quantidade de indicadores: **14** (CH1 a CH14)
- Valor Brasil-março/2026: **0,171** [Fonte: _OBS-CADUN-IVCAD.pdf, p. 1]
- % famílias com vulnerabilidade CH acima da média: **NÃO LOCALIZADO NA FONTE**.
- Observações: dos 14 indicadores, CH1-CH4 são marcados em painel como "FAMÍLIA COM:" e CH5-CH14 como "DOMICÍLIO:" — dois recortes de coleta dentro da mesma dimensão. [Fonte: _OBS-CADUN-  filtro IVCAD.pdf, p. 2]

**Total de indicadores: 7 + 3 + 5 + 7 + 4 + 14 = 40 ✓** (confere com o "40 indicadores compõem o IVCAD" declarado em [Fonte: _OBS-CADUN-IVCAD.pdf, p. 1] e [Fonte: IVCAD PÁGINA WEB.pdf, p. 1]).

## 5. INDICADORES INDIVIDUAIS

Tabela completa dos 40 indicadores. Nome literal conforme página oficial MDS (`IVCAD PÁGINA WEB.pdf`); regra de pontuação derivada do enunciado geral "Se a possível situação de vulnerabilidade estiver sendo vivenciada pela família, o indicador assume o valor 1, caso contrário, seu valor é 0" [Fonte: IVCAD PÁGINA WEB.pdf, p. 1]. Detalhe operacional (variáveis CadÚnico exatas, limiares numéricos quando aplicável) — NÃO LOCALIZADO NAS FONTES.

| # | nome_indicador | dimensão | descrição_curta (literal) | regra_de_pontuação | peso | fonte_arquivo | fonte_pagina |
|---|---|---|---|---|---|---|---|
| 1 | NC1 | NC | Presença de crianças de 0 a 3 anos | binário 1/0 (situação presente=1) | NÃO LOCALIZADO NA FONTE (presumido igualitário dentro da dimensão pela definição "média dos indicadores") | IVCAD PÁGINA WEB.pdf | 2 |
| 2 | NC2 | NC | Presença de crianças de 0 a 6 anos | binário 1/0 | NÃO LOCALIZADO NA FONTE | IVCAD PÁGINA WEB.pdf | 2 |
| 3 | NC3 | NC | Presença de crianças de 0 a 12 anos | binário 1/0 | NÃO LOCALIZADO NA FONTE | IVCAD PÁGINA WEB.pdf | 2 |
| 4 | NC4 | NC | Presença de pessoas com alguma deficiência | binário 1/0 | NÃO LOCALIZADO NA FONTE | IVCAD PÁGINA WEB.pdf | 2 |
| 5 | NC5 | NC | Presença de idosos de 60 anos ou mais | binário 1/0 | NÃO LOCALIZADO NA FONTE | IVCAD PÁGINA WEB.pdf | 2 |
| 6 | NC6 | NC | Metade ou menos dos membros está em idade adulta (18 a 59 anos) | binário 1/0 | NÃO LOCALIZADO NA FONTE | IVCAD PÁGINA WEB.pdf | 2 |
| 7 | NC7 | NC | Metade ou menos dos membros é do sexo feminino e está em idade adulta (18 a 59 anos) e que possuam membros com idade até 12 anos, ou com 60 anos ou mais ou que tenha pessoa com deficiência | binário 1/0 | NÃO LOCALIZADO NA FONTE | IVCAD PÁGINA WEB.pdf | 2 |
| 8 | DPI1 | DPI | Possui criança de 4 a 6 anos que não frequenta ou nunca frequentou creche/pré-escola/escola | binário 1/0 | NÃO LOCALIZADO NA FONTE | IVCAD PÁGINA WEB.pdf | 2 |
| 9 | DPI2 | DPI | Possui criança de 0 a 6 anos que não frequenta ou nunca frequentou creche/pré-escola/escola | binário 1/0 | NÃO LOCALIZADO NA FONTE | IVCAD PÁGINA WEB.pdf | 2 |
| 10 | DPI3 | DPI | Possui criança de 0 a 6 anos que não seja filho ou enteado do responsável familiar | binário 1/0 | NÃO LOCALIZADO NA FONTE | IVCAD PÁGINA WEB.pdf | 2 |
| 11 | DCA1 | DCA | Possui criança ou adolescente de 7 a 15 anos trabalhando | binário 1/0 | NÃO LOCALIZADO NA FONTE | IVCAD PÁGINA WEB.pdf | 2 |
| 12 | DCA2 | DCA | Possui adolescente de 15 a 17 anos fora da escola | binário 1/0 | NÃO LOCALIZADO NA FONTE | IVCAD PÁGINA WEB.pdf | 2 |
| 13 | DCA3 | DCA | Possui criança ou adolescente de 7 a 17 anos fora da escola | binário 1/0 | NÃO LOCALIZADO NA FONTE | IVCAD PÁGINA WEB.pdf | 2 |
| 14 | DCA4 | DCA | Possui criança ou adolescente de 10 a 17 anos analfabeto | binário 1/0 | NÃO LOCALIZADO NA FONTE | IVCAD PÁGINA WEB.pdf | 2 |
| 15 | DCA5 | DCA | Possui criança ou adolescente de 10 a 17 anos com mais de 2 anos de atraso escolar | binário 1/0 | NÃO LOCALIZADO NA FONTE | IVCAD PÁGINA WEB.pdf | 2 |
| 16 | TQA1 | TQA | Presença de adulto analfabeto ou analfabeto funcional | binário 1/0 | NÃO LOCALIZADO NA FONTE | IVCAD PÁGINA WEB.pdf | 2 |
| 17 | TQA2 | TQA | Presença de adulto sem ensino fundamental completo | binário 1/0 | NÃO LOCALIZADO NA FONTE | IVCAD PÁGINA WEB.pdf | 2 |
| 18 | TQA3 | TQA | Presença de adulto sem ensino médio completo | binário 1/0 | NÃO LOCALIZADO NA FONTE | IVCAD PÁGINA WEB.pdf | 2 |
| 19 | TQA4 | TQA | Nenhum adulto ocupado | binário 1/0 | NÃO LOCALIZADO NA FONTE | IVCAD PÁGINA WEB.pdf | 2 |
| 20 | TQA5 | TQA | Nenhum adulto ocupado no setor formal | binário 1/0 | NÃO LOCALIZADO NA FONTE | IVCAD PÁGINA WEB.pdf | 2 |
| 21 | TQA6 | TQA | Nenhum adulto ocupado com rendimento do trabalho superior a 1 salário mínimo | binário 1/0 | NÃO LOCALIZADO NA FONTE | IVCAD PÁGINA WEB.pdf | 2 |
| 22 | TQA7 | TQA | Nenhum adulto ocupado com rendimento do trabalho superior a 2 salários mínimos | binário 1/0 | NÃO LOCALIZADO NA FONTE | IVCAD PÁGINA WEB.pdf | 2 |
| 23 | DR1 | DR | Família sem renda ou benefícios socioassistenciais | binário 1/0 | NÃO LOCALIZADO NA FONTE | IVCAD PÁGINA WEB.pdf | 2 |
| 24 | DR2 | DR | Família em situação de pobreza mesmo considerando benefícios socioassistenciais | binário 1/0 | NÃO LOCALIZADO NA FONTE | IVCAD PÁGINA WEB.pdf | 2 |
| 25 | DR3 | DR | Família em situação de pobreza se não considerar benefício PBF | binário 1/0 | NÃO LOCALIZADO NA FONTE | IVCAD PÁGINA WEB.pdf | 2-3 |
| 26 | DR4 | DR | Família em situação de pobreza se não considerar benefícios socioassistenciais (PBF e BPC) | binário 1/0 | NÃO LOCALIZADO NA FONTE | IVCAD PÁGINA WEB.pdf | 3 |
| 27 | CH1 | CH | Domicílio particular improvisado ou situação de rua | binário 1/0 | NÃO LOCALIZADO NA FONTE | IVCAD PÁGINA WEB.pdf | 3 |
| 28 | CH2 | CH | Densidade de mais de 3 moradores por dormitório | binário 1/0 | NÃO LOCALIZADO NA FONTE | IVCAD PÁGINA WEB.pdf | 3 |
| 29 | CH3 | CH | Família despende mais de 30% de sua renda* com aluguel (*Renda pré-PBF) | binário 1/0 (limiar 30% renda pré-PBF) | NÃO LOCALIZADO NA FONTE | IVCAD PÁGINA WEB.pdf | 3 |
| 30 | CH4 | CH | Família possui despesa com aluguel | binário 1/0 | NÃO LOCALIZADO NA FONTE | IVCAD PÁGINA WEB.pdf | 3 |
| 31 | CH5 | CH | Domicílio sem parede nem piso com material de construção permanente | binário 1/0 | NÃO LOCALIZADO NA FONTE | IVCAD PÁGINA WEB.pdf | 3 |
| 32 | CH6 | CH | Domicílio sem parede ou piso com material permanente | binário 1/0 | NÃO LOCALIZADO NA FONTE | IVCAD PÁGINA WEB.pdf | 3 |
| 33 | CH7 | CH | Domicílio sem acesso adequado à água de rede geral de distribuição | binário 1/0 | NÃO LOCALIZADO NA FONTE | IVCAD PÁGINA WEB.pdf | 3 |
| 34 | CH8 | CH | Domicílio sem acesso adequado à água | binário 1/0 | NÃO LOCALIZADO NA FONTE | IVCAD PÁGINA WEB.pdf | 3 |
| 35 | CH9 | CH | Domicílio sem banheiro ou sanitário | binário 1/0 | NÃO LOCALIZADO NA FONTE | IVCAD PÁGINA WEB.pdf | 3 |
| 36 | CH10 | CH | Domicílio sem esgotamento sanitário adequado | binário 1/0 | NÃO LOCALIZADO NA FONTE | IVCAD PÁGINA WEB.pdf | 3 |
| 37 | CH11 | CH | Lixo não é coletado de forma direta | binário 1/0 | NÃO LOCALIZADO NA FONTE | IVCAD PÁGINA WEB.pdf | 3 |
| 38 | CH12 | CH | Lixo não é coletado de forma direta ou indireta | binário 1/0 | NÃO LOCALIZADO NA FONTE | IVCAD PÁGINA WEB.pdf | 3 |
| 39 | CH13 | CH | Domicílio não possui acesso à eletricidade com medidor | binário 1/0 | NÃO LOCALIZADO NA FONTE | IVCAD PÁGINA WEB.pdf | 3 |
| 40 | CH14 | CH | Domicílio não possui acesso à eletricidade | binário 1/0 | NÃO LOCALIZADO NA FONTE | IVCAD PÁGINA WEB.pdf | 3 |

**Observação sobre a coluna "peso"**: a documentação diz que "O índice de cada dimensão é construído a partir da média dos indicadores que compõem a dimensão" [Fonte: _OBS-CADUN-IVCAD.pdf, p. 1; IVCAD PÁGINA WEB.pdf, p. 1] — isso implica peso uniforme entre indicadores DENTRO da mesma dimensão, mas a fonte não declara explicitamente "peso = 1/n_indicadores" indicador a indicador, por isso a célula é marcada como NÃO LOCALIZADO NA FONTE.

## 6. FÓRMULA DO ÍNDICE COMPOSTO

**Fórmula matemática literal (extraída da imagem `IN084 FORMULA IVCAD.png`):**

$$\text{IVCAD} = \frac{NC + DPI + DCA + TQA + DR + CH}{6}$$

[Fonte: IN084 FORMULA IVCAD.png — imagem complementar na pasta `CADÚNICO\OBSERVATÓRIO\INDICADORES\`]

**Descrição qualitativa equivalente (textual nos PDFs principais):**
> "O índice de cada dimensão é construído a partir da média dos indicadores que compõem a dimensão. Já o IVCAD resulta da média dos seis índices das dimensões. O IVCAD varia entre 0 e 1: quanto maior a vulnerabilidade social mais próximo de 1 será seu resultado."
> [Fonte: _OBS-CADUN-IVCAD.pdf, p. 1]
> [Fonte: IVCAD PÁGINA WEB.pdf, p. 1]

> "Cada um dos 40 indicadores utilizados representa uma situação de vulnerabilidade. Se a possível situação de vulnerabilidade estiver sendo vivenciada pela família, o indicador assume o valor 1, caso contrário, seu valor é 0."
> [Fonte: IVCAD PÁGINA WEB.pdf, p. 1]

**Decomposição operacional (derivada literal das duas afirmações):**

- Cada indicador `i` ∈ {1..40} → valor binário ∈ {0, 1}
- Para cada dimensão `d` com `n_d` indicadores: `índice_d = (1/n_d) × Σ indicadores_d`
- IVCAD = (NC + DPI + DCA + TQA + DR + CH) / 6
- Pesos das dimensões no IVCAD composto: **β_NC = β_DPI = β_DCA = β_TQA = β_DR = β_CH = 1/6** (média aritmética simples — confirmado pela fórmula `IN084 FORMULA IVCAD.png`)

## 7. ESCALA E INTERPRETAÇÃO

> "O IVCAD varia entre 0 e 1: quanto maior a vulnerabilidade social mais próximo de 1 será seu resultado."
> [Fonte: _OBS-CADUN-IVCAD.pdf, p. 1]
> [Fonte: IVCAD PÁGINA WEB.pdf, p. 1]

**Apresentações disponíveis no painel:**
> "Uma das formas apresentadas do IVCAD é o formato de um único índice sintético, que qualifica a incidência de múltiplas vulnerabilidades sociais e facilita ordenamento de diferentes regiões geográficas e de famílias, em um ponto no tempo ou ao longo de um período. Também são apresentados os índices sintéticos para cada dimensão, assim como um painel dos indicadores que compõem cada dimensão."
> [Fonte: IVCAD PÁGINA WEB.pdf, p. 3]

> "Uma característica importante do IVCAD é que todos os índices apresentados são calculados para cada família e podem ser calculados para diferentes grupos populacionais, como famílias chefiadas por mulheres ou famílias com crianças na primeira infância."
> [Fonte: IVCAD PÁGINA WEB.pdf, p. 3]

**Cortes/agrupamentos disponíveis no Observatório (filtros):**
- "FAMÍLIA IVCAD" (valor do índice por família)
- "QUARTIS IVCAD"
- Por dimensão: "QUARTIS NC", "QUARTIS DPI", "QUARTIS DCA", "QUARTIS TQA", "QUARTIS DR", "QUARTIS CH"
- Por dimensão: "QUANTIDADE DE INDICADORES EM VULNERABILIDADE"
- [Fonte: _OBS-CADUN-  filtro IVCAD.pdf, pp. 1-2]

**Faixas de classificação (alta/média/baixa) ou pontos-de-corte numéricos:** NÃO LOCALIZADO NAS FONTES — os PDFs mencionam apenas "vulnerabilidades acima da média por dimensão" como recorte, sem definir limiares fixos.

## 8. FONTES DE DADOS DO IVCAD

> "O Índice de Vulnerabilidade das Famílias do Cadastro Único (IVCAD) possibilita identificar situações de vulnerabilidade social por meio das informações presentes no Cadastro Único."
> [Fonte: IVCAD PÁGINA WEB.pdf, p. 1]

**Base única explicitada:** Cadastro Único (CadÚnico). Nenhum dos 3 PDFs menciona uso complementar de CNIS, RAIS ou outras bases para o cálculo do IVCAD.

**Variáveis específicas do CadÚnico utilizadas por cada indicador:** NÃO LOCALIZADO NAS FONTES — os PDFs descrevem o conceito de cada indicador (ex.: "Presença de crianças de 0 a 3 anos") mas não citam quais campos do formulário CadÚnico (formulário principal/auxiliar/identificador) operacionalizam cada um.

## 9. PERIODICIDADE E ATUALIZAÇÃO

**Referência temporal explícita publicada:**
> "Referência: março de 2026"
> [Fonte: _OBS-CADUN-IVCAD.pdf, p. 1]
> [Fonte: _OBS-CADUN-  filtro IVCAD.pdf, p. 1]

**Sistema hospedeiro:** "Observatório do Cadastro Único v1.11.0" mantido pela "Secretaria de Avaliação, Gestão da Informação e Cadastro Único" (SAGICAD), Ministério do Desenvolvimento e Assistência Social, Família e Combate à Fome (MDS). [Fonte: _OBS-CADUN-IVCAD.pdf, p. 1]

**Periodicidade explícita do recálculo (mensal/trimestral/anual):** NÃO LOCALIZADO NAS FONTES.

## 10. CITAÇÕES DIRETAS RELEVANTES (banco de evidências)

1. "O IVCAD sintetiza 6 dimensões em que uma família pode estar em situação de vulnerabilidade social: Necessidade de Cuidados (NC); Desenvolvimento na Primeira Infância (DPI); Desenvolvimento de Crianças e Adolescentes (DCA); Trabalho e Qualificação de Adultos (TQA); Disponibilidade de Recursos (DR); Condições Habitacionais (CH)." [Fonte: _OBS-CADUN-IVCAD.pdf, p. 1]

2. "40 indicadores compõem o IVCAD. Cada um deles sinaliza uma circunstância que pode representar uma vulnerabilidade para a família. Se a situação de vulnerabilidade estiver presente, o indicador assume o valor 1, caso contrário, seu valor é 0." [Fonte: _OBS-CADUN-IVCAD.pdf, p. 1]

3. "O índice de cada dimensão é construído a partir da média dos indicadores que compõem a dimensão. Já o IVCAD resulta da média dos seis índices das dimensões. O IVCAD varia entre 0 e 1: quanto maior a vulnerabilidade social mais próximo de 1 será seu resultado." [Fonte: _OBS-CADUN-IVCAD.pdf, p. 1]

4. "Atenção! O IVCAD é calculado considerando famílias beneficiárias do Programa Bolsa Família e, não sendo beneficiárias do Programa, com cadastro atualizado em até 2 anos e renda familiar per capita de até meio salário mínimo." [Fonte: _OBS-CADUN-IVCAD.pdf, p. 1]

5. "Brasil — IVCAD: 0,283 — Número de famílias para o cálculo do IVCAD: 26.495.935 — Regiões: 5; UFs: 27; Municípios: 5.571." [Fonte: _OBS-CADUN-IVCAD.pdf, p. 1]

6. "Valor do Índice por Dimensão (Brasil-março/2026): NC 0,354; DPI 0,078; DCA 0,049; TQA 0,636; DR 0,409; CH 0,171." [Fonte: _OBS-CADUN-IVCAD.pdf, p. 1]

7. "% de famílias com vulnerabilidades acima da média por dimensão: NC 57%; DPI 19%; DCA 14%; TQA 45%." [Fonte: _OBS-CADUN-IVCAD.pdf, p. 1]

8. "O Índice de Vulnerabilidade das Famílias do Cadastro Único (IVCAD) possibilita identificar situações de vulnerabilidade social por meio das informações presentes no Cadastro Único." [Fonte: IVCAD PÁGINA WEB.pdf, p. 1]

9. "Por meio de 40 indicadores, são sintetizadas 6 dimensões de vulnerabilidade: Necessidade de Cuidados; Desenvolvimento na Primeira Infância; Desenvolvimento de Crianças e Adolescentes; Trabalho e Qualificação de Adultos; Disponibilidade de Recursos; e Condições Habitacionais." [Fonte: IVCAD PÁGINA WEB.pdf, p. 1]

10. "Cada um dos 40 indicadores utilizados representa uma situação de vulnerabilidade. Se a possível situação de vulnerabilidade estiver sendo vivenciada pela família, o indicador assume o valor 1, caso contrário, seu valor é 0." [Fonte: IVCAD PÁGINA WEB.pdf, p. 1]

11. "Possibilita identificar tanto quem são as famílias vulnerabilizadas, assim como quais são as situações de vulnerabilidade. Dessa forma, são três os objetivos principais: Ser um instrumento de gerenciamento e diagnóstico a respeito das experiências familiares em relação às vulnerabilidades sociais; Ser um instrumento para desenho e acompanhamento de políticas públicas que atuem nas 6 dimensões de vulnerabilidade, auxiliando a gestão local; Ser um instrumento para integração de políticas/intervenções transversais e complementares ao fortalecer o uso do Cadastro Único por outros órgãos e entidades federais, estaduais, distritais e municipais, principalmente nos processos de planejamento, de gestão e de implementação de programas sociais voltados à população de baixa [renda]." [Fonte: IVCAD PÁGINA WEB.pdf, p. 3]

12. "Quem pode usar o IVCAD? Governos das três esferas: federal, estadual e municipal; Organizações Não-Governamentais (OSCs); Grupos da sociedade civil e de controle social; Instituições do setor privado; Academia e pesquisadores." [Fonte: IVCAD PÁGINA WEB.pdf, pp. 3-4]

13. "Os resultados no IVCAD podem ser visualizados no Observatório do Cadastro Único, um painel interativo com dados do Cadastro Único." [Fonte: IVCAD PÁGINA WEB.pdf, p. 4]

14. "Em caso de dúvidas, solicitações de apoio ou interesse em conhecer mais sobre o IVCAD, entre em contato com nossa equipe pelo e-mail: ivcad.sagicad@mds.gov.br" [Fonte: IVCAD PÁGINA WEB.pdf, p. 4]

15. "IVCAD = (NC + DPI + DCA + TQA + DR + CH) / 6" — fórmula gráfica oficial. [Fonte: IN084 FORMULA IVCAD.png]

16. "NC7: Metade ou menos dos membros é do sexo feminino e está em idade adulta (18 a 59 anos) e que possuam membros com idade até 12 anos, ou com 60 anos ou mais ou que tenha pessoa com deficiência." [Fonte: IVCAD PÁGINA WEB.pdf, p. 2]

17. "CH3: Família despende mais de 30% de sua renda* com aluguel (*Renda pré-PBF)." [Fonte: IVCAD PÁGINA WEB.pdf, p. 3] — único limiar numérico explícito entre os 40 indicadores.

18. "DR3: Família em situação de pobreza se não considerar benefício PBF" / "DR4: Família em situação de pobreza se não considerar benefícios socioassistenciais (PBF e BPC)." [Fonte: IVCAD PÁGINA WEB.pdf, pp. 2-3] — pares de indicadores que distinguem com/sem benefícios sociais.

19. "Os filtros presentes na ferramenta do Observatório do Cadastro Único possibilitarão a análise para esses recortes da população." [Fonte: IVCAD PÁGINA WEB.pdf, p. 3]

20. Painel de filtros expõe, por dimensão: QUARTIS [dimensão], QUANTIDADE DE INDICADORES EM VULNERABILIDADE, e cada indicador individual como filtro binário. [Fonte: _OBS-CADUN-  filtro IVCAD.pdf, pp. 1-2]

## 11. LACUNAS IDENTIFICADAS

1. [ ] **Regras operacionais de pontuação por indicador**: cada um dos 40 indicadores é binário (0/1), mas a fonte não documenta qual variável/combinação do formulário CadÚnico é consultada e qual a regra exata de detecção da vulnerabilidade. Ex.: para NC1 "Presença de crianças de 0 a 3 anos" — qual campo do formulário (data de nascimento, idade declarada) e referência temporal (data do cadastramento, data de cálculo).
2. [ ] **Limiares numéricos explícitos**: apenas CH3 explicita um limiar (30% da renda pré-PBF). Os demais indicadores que envolvem comparações ("Metade ou menos", "mais de 3 moradores", "superior a 1 SM", "mais de 2 anos de atraso escolar") não têm a regra de cálculo formalizada.
3. [ ] **Pesos β individuais entre indicadores dentro da dimensão**: a documentação afirma "média dos indicadores", mas não publica explicitamente "peso = 1/n_indicadores" indicador a indicador.
4. [ ] **Algoritmo de cálculo dos QUARTIS**: o painel oferece corte por quartis IVCAD e por quartis de cada dimensão, mas a metodologia (qual base populacional, ponderação, recorte territorial) não é publicada.
5. [ ] **Faixas de classificação alta/média/baixa**: nenhum ponto-de-corte fixo é documentado; o painel usa apenas "acima/abaixo da média" e "quartis".
6. [ ] **Periodicidade de recálculo**: única referência temporal é "março de 2026"; não há declaração de cadência (mensal, bimestral, trimestral).
7. [ ] **Variáveis específicas do CadÚnico utilizadas**: não há mapa indicador → campo do Formulário Principal de Cadastramento.
8. [ ] **Tratamento de dados ausentes/inconsistentes**: o documento não descreve como o cálculo trata famílias com dados parciais ou registros desatualizados (apenas exclui pelo critério de elegibilidade da §3).
9. [ ] **% de vulnerabilidade acima da média para DR e CH**: PDF 1 trunca a lista após TQA 45%; valores para DR e CH não foram capturados.
10. [ ] **Validação metodológica externa / nota técnica**: não há referência a publicação técnica formal (IN, portaria, nota metodológica oficial) que detalhe a construção. As 3 fontes lidas são páginas-resumo do Observatório e da página institucional do MDS.
11. [ ] **Histórico de versões do índice**: PDF 1 declara "v1.0.5" mas não há changelog nem versão anterior documentada nas fontes lidas.

## 12. CHECKPOINT FINAL

STATUS: COMPLETO | FONTES_LIDAS: 3 (+2 imagens complementares) | DIMENSOES_RECUPERADAS: 6 | INDICADORES_RECUPERADOS: 40 | LACUNAS: 11 | DURAÇÃO: 00h05min | TIMESTAMP_FIM: 2026-05-07T13:00:24
