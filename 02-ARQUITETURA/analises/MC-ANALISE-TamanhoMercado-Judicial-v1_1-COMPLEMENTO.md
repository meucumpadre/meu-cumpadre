# MC-ANALISE-TamanhoMercado-Judicial v1.1 — COMPLEMENTO

> **Objetivo:** Fechar gaps da v1.0 com 4 blocos de dados CSV do CJF que não haviam sido processados.
> **Fonte:** `DADOS CJF/` (≈22 GB de CSVs públicos) — análise streaming em pandas, executada em 657s.
> **Janela temporal observada:** 2020 → 2026 (dados CJF de litigância).

**Convenções:**
- “Volume total” = casos NOVOS no período + estoque PENDENTE LÍQUIDO (definição CNJ Justiça em Números).
- “Acordo” = sentença com `SentHomologAcordo > 0` (homologação de acordo).
- “INSS” = filtro por `RAIZ CNPJ = 29.979.036` ou tag `INSS-PASSIVO`/`INSS-ATIVO` na chave CJF.
- “Previdenciário” = `id_assunto` na faixa CNJ TPU 6088–6184 (Direito Previdenciário > Benefícios em Espécie).

---

## BLOCO 1 — Grandes Litigantes por Órgão (CRÍTICO)

**Arquivo:** `GL_grandes_litigantes_por_orgao.csv` — 3,52 GB · 14.670.172 linhas · 1.088.020 pares (NOME × CNPJ raiz) únicos.
**Granularidade:** 1 linha = 1 órgão julgador × 1 grande litigante (CNPJ raiz). Tribunais cobertos: federais, estaduais, trabalhistas, eleitorais, militares.

### 1.1 Posição do INSS no ranking

| Métrica | Valor |
|---|---:|
| **Posição no ranking nacional** | **#1** (de 1.088.020 litigantes únicos) |
| Nome | INSTITUTO NACIONAL DO SEGURO SOCIAL |
| CNPJ raiz | 29979036 |
| Casos NOVOS no período | 5.258.934 |
| Pendente bruto | 5.570.432 |
| **Pendente líquido** | **4.851.171** |
| **Volume total (Novos + Pend.Líq.)** | **10.110.105** |
| Órgãos julgadores em que figura | 19.989 |
| **Share do INSS sobre volume total nacional** | **9.99%** |

> O INSS é, **com folga, o maior litigante do país no Poder Judiciário**: seu volume total (10.110.105) é **4× maior** que o do segundo colocado (Ministério da Fazenda). Sozinho, responde por aproximadamente **10.0%** do total nacional de processos com grandes litigantes (medido pela base CJF/CNJ de Grandes Litigantes).

### 1.2 Top 10 maiores litigantes do Brasil

| # | Litigante | CNPJ raiz | Novos | Pend. Líquido | Volume Total | Órgãos |
|---:|---|---|---:|---:|---:|---:|
| 1 | INSTITUTO NACIONAL DO SEGURO SOCIAL | `29979036` | 5.258.934 | 4.851.171 | **10.110.105** | 19.989 |
| 2 | MINISTERIO DA FAZENDA | `00394460` | 672.772 | 1.585.679 | **2.258.451** | 15.871 |
| 3 | BANCO BRADESCO S.A. | `60746948` | 962.620 | 1.164.423 | **2.127.043** | 27.329 |
| 4 | CAIXA ECONOMICA FEDERAL | `00360305` | 539.336 | 947.130 | **1.486.466** | 19.841 |
| 5 | BANCO DO BRASIL SA | `00000000` | 519.107 | 917.647 | **1.436.754** | 28.477 |
| 6 | SAO PAULO TRIBUNAL DE JUSTICA | `51174001` | 557.639 | 747.317 | **1.304.956** | 5.408 |
| 7 | ESTADO DE SAO PAULO | `46379400` | 502.871 | 714.012 | **1.216.883** | 5.877 |
| 8 | BANCO PAN S.A. | `59285411` | 394.397 | 425.653 | **820.050** | 19.769 |
| 9 | MUNICIPIO DE SAO PAULO | `46395000` | 180.444 | 564.668 | **745.112** | 2.155 |
| 10 | BANCO SANTANDER (BRASIL) S.A. | `90400888` | 308.772 | 424.669 | **733.441** | 23.886 |

**Concentração:** Top 10 litigantes somam **22.239.261** (22.0% do total nacional de 101.198.570). O INSS sozinho representa **45.5% do top 10**.

### 1.3 Top 11–25 (contexto)

| # | Litigante | Novos | Pend. Líq | Volume |
|---:|---|---:|---:|---:|
| 11 | BANCO BMG S.A | 349.122 | 382.711 | 731.833 |
| 12 | ADVOCACIA GERAL DA UNIAO | 248.941 | 364.881 | 613.822 |
| 13 | AYMORE CREDITO, FINANCIAMENTO E INVESTIMENTO S.A. | 289.785 | 322.691 | 612.476 |
| 14 | RIO GRANDE DO SUL PROCURADORIA GERAL DE JUSTICA | 193.600 | 391.743 | 585.343 |
| 15 | ITAU UNIBANCO S.A. | 216.908 | 295.902 | 512.810 |
| 16 | ESTADO DA BAHIA | 161.534 | 349.143 | 510.677 |
| 17 | MINISTERIO PUBLICO DO ESTADO DO PARANA | 174.563 | 329.244 | 503.807 |
| 18 | PROCURADORIA GERAL DE JUSTICA DE MINAS GERAIS | 122.112 | 379.126 | 501.238 |
| 19 | ESTADO DO RIO GRANDE DO SUL | 151.833 | 337.143 | 488.976 |
| 20 | PRESIDENCIA DA REPUBLICA | 160.660 | 303.252 | 463.912 |
| 21 | ESTADO DO RIO DE JANEIRO | 145.800 | 301.428 | 447.228 |
| 22 | JUSTICA ESTADUAL | 232.346 | 195.545 | 427.891 |
| 23 | ESTADO DE MINAS GERAIS | 146.924 | 279.921 | 426.845 |
| 24 | BANCO AGIBANK S.A | 207.235 | 184.199 | 391.434 |
| 25 | MINISTERIO PUBLICO DO ESTADO DO RIO DE JANEIRO | 106.923 | 257.682 | 364.605 |

---

## BLOCO 2 — Dejudicialização (TBL_tbl_fato_dejudicializa) (CRÍTICO)

**Arquivo:** `TBL_tbl_fato_dejudicializa.csv` — 1,24 GB · 4.917.877 linhas · 95 colunas.
**Achado-chave:** **100% das linhas estão tageadas com `INSS-PASSIVO` ou `INSS-ATIVO`** — esta é uma base CJF de tracking específica da litigância do INSS (não da dejudicialização geral). Granularidade: órgão julgador × procedimento × ano-mês × polo do INSS.

### 2.1 Indicadores agregados (todos os anos, todos os tribunais)

| Indicador | Valor | Significado |
|---|---:|---|
| Casos NOVOS (ind1) | 22.304.598 | Distribuídos no período (2020-2026) |
| Casos JULGADOS (CPJulg) | 79.265.196 | Total de julgamentos |
| Sentenças primárias (SentPri) | 17.799.112 | 1ª sentença de mérito |
| **Acordos homologados (SentHomologAcordo)** | **2.894.775** | Sentença que homologa acordo entre as partes |
| Baixa/Arquivamento (TBaixArq) | 13.484.349 | Processos arquivados |
| **Taxa de Conciliação INSS** | **3.65%** | Acordos ÷ Julgados |
| **Taxa de Conciliação INSS sobre Novos** | **12.98%** | Acordos ÷ Casos Novos |

### 2.2 Evolução anual da litigância INSS (2020–2026)

| Ano | Novos | Julgados | Acordos | % Conciliação | Sent. Primárias |
|---|---:|---:|---:|---:|---:|
| 2020 | 2.403.659 | 4.952.091 | 173.223 | 3.50% | 1.998.159 |
| 2021 | 2.886.782 | 6.234.904 | 305.363 | 4.90% | 2.347.991 |
| 2022 | 3.215.453 | 7.748.139 | 411.575 | 5.31% | 2.591.548 |
| 2023 | 3.803.686 | 9.863.795 | 542.638 | 5.50% | 2.985.268 |
| 2024 | 4.219.930 | 15.042.453 | 645.848 | 4.29% | 3.403.864 |
| 2025 | 5.066.677 | 27.829.097 | 720.052 | 2.59% | 3.867.871 |
| 2026 | 708.411 | 7.594.717 | 96.076 | 1.27% | 604.411 |

> **Observação:** 2026 é parcial (dados até a janela do CJF). A taxa de conciliação tem subido de ~3,5% (2020) para ~2,6% (2025) — o INSS tem **homologado mais acordos em valor absoluto**, mas o crescimento de Novos e Julgados é maior, o que mantém a taxa relativamente estável e baixa.

### 2.3 Litigância INSS por procedimento

| Procedimento | Novos | Julgados | Acordos | % Concil |
|---|---:|---:|---:|---:|
| Conhecimento não criminal | 17.538.540 | 48.576.645 | 2.582.551 | 5.32% |
| Execução judicial | 4.745.976 | 27.770.623 | 311.921 | 1.12% |
| Execução fiscal | 5.629 | 2.856.369 | 33 | 0.00% |
| Execução extrajudicial não fiscal | 3.695 | 36.343 | 208 | 0.57% |
| Conhecimento criminal | 10.714 | 23.362 | 61 | 0.26% |
| Execução penal não privativa de liberdade | 44 | 1.648 | 1 | 0.06% |
| Execução penal privativa de liberdade | 0 | 206 | 0 | 0.00% |

### 2.4 Litigância INSS por TRIBUNAL — Top 15 (Justiça Federal em destaque)

**Justiça Federal (TRFs + cúpula):**

| Tribunal | Linhas | Novos INSS | Julgados | Acordos | % Concil. INSS |
|---|---:|---:|---:|---:|---:|
| TRF1 | 195.878 | 6.151.031 | 20.404.229 | 1.330.420 | 6.52% |
| TRF2 | 173.308 | 1.580.874 | 4.698.360 | 101.075 | 2.15% |
| TRF3 | 317.164 | 2.738.591 | 11.686.997 | 177.646 | 1.52% |
| TRF4 | 435.268 | 4.247.499 | 13.435.224 | 394.611 | 2.94% |
| TRF5 | 148.518 | 3.812.598 | 5.217.260 | 489.964 | 9.39% |
| TRF6 | 175.158 | 903.668 | 5.820.427 | 166.730 | 2.86% |
| STJ | 19.166 | 112.233 | 97.133 | 18 | 0.02% |
| CJF | 2.146 | 77.105 | 62.761 | 1 | 0.00% |

**Top 10 tribunais ESTADUAIS (TJ) por volume INSS:**

| Tribunal | Novos INSS | Julgados | Acordos | % Concil. |
|---|---:|---:|---:|---:|
| TJSP | 660.298 | 5.041.494 | 24.630 | 0.49% |
| TJMG | 263.023 | 1.459.841 | 58.360 | 4.00% |
| TJGO | 262.675 | 1.078.058 | 20.240 | 1.88% |
| TJSC | 157.950 | 373.461 | 17.748 | 4.75% |
| TJRS | 154.214 | 1.468.475 | 10.015 | 0.68% |
| TJPR | 142.423 | 617.663 | 12.049 | 1.95% |
| TJMT | 131.600 | 416.674 | 11.256 | 2.70% |
| TJRO | 129.112 | 201.532 | 13.250 | 6.57% |
| TJMS | 115.025 | 553.444 | 6.820 | 1.23% |
| TJBA | 109.249 | 1.675.607 | 11.308 | 0.67% |

> **Por que TJ aparece com INSS?** O INSS é parte em ações estaduais quando o município/estado é executor de benefício social vinculado, em alvarás judiciais de saque, e em execuções fiscais delegadas — mas o volume é majoritariamente concentrado nos TRFs (Justiça Federal).

---

## BLOCO 4 — Tabelas Fato de Assuntos & Classes

### 4.1 Diagnóstico: dicionário ou tabela fato?

Ambas são **tabelas FATO** (não dicionários). Cada linha tem um identificador (`id_assunto` ou `id_classe`), órgão julgador, ano, e ~50 colunas de indicadores CNJ Justiça em Números (ind1, ind3, SentHomologAcordo, etc.). Os IDs apontam para a TPU/TPC (Tabelas Processuais Unificadas) do CNJ.

| Tabela | Linhas | Cobertura | Granularidade |
|---|---:|---|---|
| `TBL_tbl_fato_assuntos_dejudicializa` | 4.630.623 | Todos INSS-tagged (4.630.623) | órgão × procedimento × **assunto** × ano |
| `TBL_tbl_fato_classes_dejudicializa` | 524.839 | INSS-tagged: 524.836 (321 classes distintas) | órgão × procedimento × **classe** × ano |

### 4.2 Volume previdenciário (faixa CNJ TPU 6088–6184)

| Métrica | Valor |
|---|---:|
| Linhas previdenciárias na base | 1.957.180 (42.3% das linhas INSS) |
| **Casos NOVOS previdenciários (todos os tribunais, 2020-2026)** | **20.458.080** |
| **Acordos homologados em previdenciário INSS** | **2.705.530** |
| Taxa de conciliação previdenciária | 13.22% |

### 4.3 Top 15 assuntos previdenciários por volume de NOVOS

| Código | Assunto | Novos | Acordos | % Concil. | Sent. Primárias |
|---:|---|---:|---:|---:|---:|
| 6101 | Aposentadoria por Invalidez Acidentária | 4.115.208 | 711.046 | 17.28% | 3.654.626 |
| 6095 | Concessão de Benefício / Restabelecimento (genérico) | 2.664.728 | 447.984 | 16.81% | 2.455.649 |
| 6098 | Aposentadoria por Tempo de Contribuição (Art. 201 §7º I CF) | 1.810.620 | 483.367 | 26.70% | 1.477.165 |
| 6118 | Revisão de Cálculo / Atualização Monetária / RMI | 1.801.239 | 19.021 | 1.06% | 1.417.797 |
| 6177 | (código TPU 6177) | 1.112.832 | 86.780 | 7.80% | 966.519 |
| 6103 | Pensão por Morte (Lei 8.213/91) | 1.106.678 | 416.832 | 37.67% | 824.935 |
| 6104 | Auxílio-Acidente (Art. 86) | 867.426 | 123.907 | 14.28% | 740.980 |
| 6107 | Aposentadoria por Tempo de Contribuição (genérico) | 829.560 | 63.892 | 7.70% | 624.695 |
| 6182 | (código TPU 6182) | 730.313 | 4.351 | 0.60% | 567.253 |
| 6100 | Auxílio-Doença Previdenciário | 646.566 | 12.746 | 1.97% | 578.251 |
| 6178 | (código TPU 6178) | 622.487 | 108.031 | 17.35% | 536.194 |
| 6109 | Aposentadoria por Idade (Trabalhador Rural) | 441.065 | 39.287 | 8.91% | 305.316 |
| 6097 | Aposentadoria por Invalidez | 405.553 | 12.221 | 3.01% | 333.210 |
| 6108 | Auxílio-Doença / Restabelecimento | 354.917 | 30.257 | 8.53% | 242.299 |
| 6176 | (código TPU 6176) | 320.670 | 21.127 | 6.59% | 270.270 |

> **Leitura para o pitch:** O código **6101 (Aposentadoria por Invalidez Acidentária)** é o maior driver de volume — sozinho, mais de 4 milhões de casos novos. **6098 (Aposentadoria por Tempo de Contribuição)** e **6095 (Concessão/Restabelecimento genérico)** completam o trio dos assuntos mais judicializados. **BPC/LOAS (6119)** aparece com volume relativamente menor (22k novos), mas é o principal vetor de hipervulneráveis.

### 4.4 Top 15 classes processuais (com mais NOVOS) — `id_classe`

| id_classe | Classe (TPC CNJ aproximada) | Linhas | Novos | Acordos | % Concil. |
|---:|---|---:|---:|---:|---:|
| 436 | Procedimento Comum Cível (JEF) / Execução Fiscal | 37.714 | 10.955.553 | 2.314.793 | 21.13% |
| 12078 | Procedimento do Juizado Especial Cível Federal (JEF) | 49.947 | 3.978.064 | 278.269 | 7.00% |
| 7 | Procedimento Comum Cível | 99.418 | 2.313.235 | 226.724 | 9.80% |
| 460 | Cumprimento de Sentença contra a Fazenda Pública | 17.277 | 2.126.784 | 1.308 | 0.06% |
| 198 | Mandado de Segurança Cível | 22.169 | 864.045 | 3.403 | 0.39% |
| 156 | (consultar TPC CNJ) | 67.600 | 585.237 | 25.371 | 4.34% |
| 120 | (consultar TPC CNJ) | 14.085 | 389.860 | 231 | 0.06% |
| 202 | (consultar TPC CNJ) | 14.565 | 202.724 | 63 | 0.03% |
| 199 | (consultar TPC CNJ) | 6.256 | 117.110 | 100 | 0.09% |
| 1728 | (consultar TPC CNJ) | 9.905 | 90.510 | 1.394 | 1.54% |
| 457 | Recurso Inominado | 3.073 | 84.453 | 1 | 0.00% |
| 11881 | (consultar TPC CNJ) | 581 | 63.516 | 3 | 0.00% |
| 1032 | (consultar TPC CNJ) | 939 | 49.998 | 15 | 0.03% |
| 15215 | (consultar TPC CNJ) | 3.029 | 20.075 | 4.903 | 24.42% |
| 157 | (consultar TPC CNJ) | 14.493 | 15.650 | 85 | 0.54% |

> **Observação:** A classe **436** (que tem o maior volume — ~11M novos com 2,3M acordos) é o code da TPC CNJ associada a Procedimento Comum no JEF — confirme com a TPC oficial. As classes 12078, 12077, 12087 são da família de procedimentos JEF/NCPC.

---

## BLOCO 3 — METAS por TRF

**Arquivos:** `METAS_TRF1.csv` … `METAS_TRF6.csv` — 16,2 GB no total · ~34 milhões de linhas processuais.
**Granularidade:** 1 linha = 1 processo × evento (recurso/grau). 150 colunas. Ramo: 100% Justiça Federal (TRFs).
**Indicadores-chave processados:** `pendente_meta`, `dt_julgamento`, `dt_julgamento_homologatorio` (acordo homologado), `data_total_primeira_baixa`, `procedimento`, `sigla_grau`.

### 3.1 Volume processado por TRF

| TRF | Linhas (proc×evento) | G1 | G2 | TR | Crim. | Não-crim. |
|---|---:|---:|---:|---:|---:|---:|
| TRF1 | 10.089.825 | 1.722.924 | 1.258.037 | 1.125.062 | 153.519 | 9.933.449 |
| TRF2 | 3.033.715 | 589.135 | 463.163 | 395.521 | 42.056 | 2.988.075 |
| TRF3 | 6.236.058 | 1.615.260 | 1.339.593 | 827.506 | 146.614 | 6.085.046 |
| TRF4 | 7.106.449 | 1.337.371 | 1.300.605 | 1.067.218 | 195.394 | 6.910.311 |
| TRF5 | 4.751.006 | 586.085 | 368.696 | 776.466 | 41.665 | 4.706.023 |
| TRF6 | 3.127.209 | 886.262 | 355.204 | 350.658 | 43.144 | 2.717.425 |

### 3.2 Produtividade & congestionamento por TRF

| TRF | Pendente Meta | Julgados | Acordos Homolog. | 1ª Baixa | % Pend.Meta | % Acordo / Julgado |
|---|---:|---:|---:|---:|---:|---:|
| TRF1 | 1.825.488 | 7.601.926 | 1.446.576 | 7.429.082 | 18.1% | 19.03% |
| TRF2 | 327.991 | 2.663.744 | 156.554 | 2.618.291 | 10.8% | 5.88% |
| TRF3 | 845.516 | 5.041.765 | 159.115 | 5.222.222 | 13.6% | 3.16% |
| TRF4 | 669.479 | 6.238.113 | 503.366 | 6.293.465 | 9.4% | 8.07% |
| TRF5 | 718.100 | 4.027.996 | 398.558 | 3.761.801 | 15.1% | 9.89% |
| TRF6 | 619.202 | 2.523.496 | 626.052 | 2.209.047 | 19.8% | 24.81% |

> **TRF mais congestionado** (maior % de processos pendentes em meta): **TRF6** (19.8%).
> **TRF com maior % de acordos homologados sobre julgados**: **TRF6** (24.81%).

### 3.3 Volume PREVIDENCIÁRIO por TRF

> **Achado-chave:** A coluna `id_assunto` nos METAS vem como string `{6101}` ou `{6101,6095}` (multi-assunto separados por vírgula em chave-conjunto). Após parsing por regex e teste de pertinência à faixa CNJ TPU 6088–6184:

| TRF | Prev. Total | Prev. Pendente em Meta | Prev. com Acordo Homol. | % Prev / Total | Acordos Prev / Acordos Total |
|---|---:|---:|---:|---:|---:|
| TRF1 | 4.476.406 | 653.225 | 1.088.300 | 44.4% | 75.2% |
| TRF2 | 1.043.675 | 83.690 | 76.142 | 34.4% | 48.6% |
| TRF3 | 2.689.032 | 402.383 | 79.590 | 43.1% | 50.0% |
| TRF4 | 2.792.386 | 249.460 | 213.431 | 39.3% | 42.4% |
| TRF5 | 2.108.225 | 262.662 | 279.962 | 44.4% | 70.2% |
| TRF6 | 1.141.970 | 211.324 | 139.560 | 36.5% | 22.3% |
| **TOTAL** | **14.251.694** | **1.862.744** | **1.876.985** | **41.5%** | **57.0%** |

> **Síntese previdenciária na Justiça Federal:** **14.251.694** linhas processuais (proc × evento) marcadas como previdenciárias — **41.5%** do total de linhas dos TRFs. Dessas, **1.876.985** terminaram em acordo homologado (57.0% do total de acordos federais). **TRF1 lidera disparado** com 4,5M linhas previdenciárias e 1,1M acordos prev.

---

## GAPS FECHADOS — ATUALIZAÇÃO DO PITCH

Cinco números novos que **não estavam na v1.0** e que devem entrar na próxima versão do deck/PI:

### G1 — INSS é o #1 absoluto entre litigantes do Brasil
- **10.110.105** processos no Judiciário (Novos + Pendente Líquido).
- **10.0%** de todos os processos com grandes litigantes do país (base CJF/CNJ).
- **4× maior** que o segundo (Min. da Fazenda).
- Presente em **19.989 órgãos julgadores** simultaneamente.

### G2 — A judicialização do INSS está crescendo
- Casos novos INSS: **2.403.659** em 2020 → **5.066.677** em 2025 (**+111%**).
- Julgados anuais: **4.952.091** → **27.829.097** (**+462%**).
- Acordos homologados: **173.223** → **720.052** (**+316%**).
- Apesar do volume absoluto crescer, a TAXA de conciliação caiu de 3.50% para 2.59% — o sistema conciliou menos proporcionalmente nos últimos anos.

### G3 — Existe espaço enorme para dejudicialização do INSS
- Taxa de conciliação INSS: **apenas 3.65%** dos casos julgados são via acordo.
- Em 22.304.598 casos novos, só 2.894.775 viraram acordos. Os outros viram litigation pesada.
- Taxa de conciliação previdenciária mais granular: **13.22%** (Bloco 4).

### G4 — A previdência social é ~42% das linhas INSS rastreadas pelo CJF
- Linhas previdenciárias (TPU 6088–6184) no fato-assuntos: **1.957.180** de 4.630.623 (36.5%).
- Volume agregado de NOVOS previdenciários: **20.458.080** processos.
- Maior driver: assunto **6101** (Aposentadoria por Invalidez Acidentária) com **4.115.208** novos.

### G5 — Previdenciário responde por 41% das linhas dos TRFs e 57% dos acordos federais
- **TRF1** processa 10.089.825 linhas (o maior tribunal); 4.476.406 são previdenciárias (44.4%).
- **TRF1 acordos previdenciários:** 1.088.300 de 1.446.576 acordos totais (75.2% dos acordos do TRF1 são previdenciários).
- **No agregado dos 6 TRFs:** 14.251.694 linhas previdenciárias; 1.876.985 acordos prev (57.0% dos acordos federais).
- TRFs com maior taxa de acordo/julgado: ver tabela 3.2 (campeão: **TRF6** com 24.81%).

---

## ANEXOS — METADADOS DE EXECUÇÃO

- **Início:** 2026-05-01 14:00:11 | **Fim:** 2026-05-01 14:11:08 | **Duração:** 657s
- **Volume processado:** ~22 GB de CSV em streaming (chunked pandas, 200k–300k linhas por chunk).
- **Linhas totais processadas:** GL_orgao=14.670.172 · dejud=4.917.877 · assuntos=4.630.623 · classes=524.839 · METAS=34.344.262

**Gaps remanescentes para v1.2:**
- Mapear `id_classe` × TPC CNJ oficial para nomear todas as classes processuais (Bloco 4.4 — só nomeei as mais conhecidas).
- Quebra estadual (TJ-x-TJ) com filtro previdenciário — viável combinando `tbl_fato_assuntos` + `tbl_fato_dejudicializa`.
- Análise temporal de `dt_recebimento` × `dt_julgamento` para tempo médio de tramitação previdenciária por TRF.
- Cruzar valor monetário (RPV/precatórios) — não está nestes CSVs CJF, precisa puxar de `dadosabertos.cnj.jus.br` ou `dataprev`.

---
*Gerado automaticamente a partir de `analysis_results.json` em `.claude/projects/C--Users-Luiz/`. Replicável: rode `python analyze.py` na pasta DADOS CJF/.*
