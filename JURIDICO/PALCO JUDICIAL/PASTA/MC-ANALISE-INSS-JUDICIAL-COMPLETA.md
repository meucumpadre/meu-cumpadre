# Análise INSS Judicial — DataJud/CNJ — 6 TRFs

Fonte: Painel INSS DataJud/CNJ — extração via Observatório CNJ.  
Processamento em chunks de 100.000 linhas (sem carregar arquivos completos em memória).  
Análise gerada em 2026-05-01.

---

## TRF1

### A. Volume

| Métrica | Valor |
|---|---:|
| Total de processos | 1.406.727 |
| Pendente = TRUE | 1.406.638 |
| Pendente = FALSE | 89 |
| % Pendente | 99.99% |

### B. Tema

| Tema | Processos |
|---|---:|
| incapacidade | 408.351 |
| assistenciais | 266.994 |
| outros | 188.730 |
| salario_maternidade | 175.787 |
| idade | 161.403 |
| pensao_morte | 90.643 |
| programada | 47.368 |
| revisionais | 46.543 |
| especial | 20.908 |

### C. Grau

| Grau | Processos |
|---|---:|
| JE | 1.041.637 |
| TR | 206.390 |
| G1 | 122.523 |
| G2 | 36.137 |
| TRU | 40 |

### D. Geografia (Top 10 UFs)

| UF | Processos |
|---|---:|
| BA | 378.716 |
| MA | 241.217 |
| PA | 165.787 |
| PI | 157.014 |
| DF | 115.178 |
| GO | 103.193 |
| AM | 69.674 |
| MT | 57.898 |
| AC | 38.752 |
| TO | 33.489 |

### E. Temporalidade

| Métrica | Valor |
|---|---:|
| Média dias antiguidade (Pendente=TRUE) | 480.4 dias |
| Processos > 3 anos (1095 dias, Pendente=TRUE) | 136.077 |

Por ano de ajuizamento:

| Ano | Processos |
|---|---:|
| 1972 | 1 |
| 1974 | 1 |
| 1975 | 1 |
| 1977 | 2 |
| 1978 | 4 |
| 1979 | 6 |
| 1980 | 5 |
| 1981 | 7 |
| 1982 | 17 |
| 1983 | 61 |
| 1984 | 6 |
| 1985 | 44 |
| 1986 | 17 |
| 1987 | 4 |
| 1988 | 9 |
| 1989 | 16 |
| 1990 | 31 |
| 1991 | 66 |
| 1992 | 124 |
| 1993 | 121 |
| 1994 | 215 |
| 1995 | 257 |
| 1996 | 289 |
| 1997 | 282 |
| 1998 | 332 |
| 1999 | 201 |
| 2000 | 183 |
| 2001 | 230 |
| 2002 | 370 |
| 2003 | 343 |
| 2004 | 256 |
| 2005 | 379 |
| 2006 | 509 |
| 2007 | 691 |
| 2008 | 375 |
| 2009 | 368 |
| 2010 | 381 |
| 2011 | 613 |
| 2012 | 629 |
| 2013 | 1.011 |
| 2014 | 1.642 |
| 2015 | 1.465 |
| 2016 | 2.316 |
| 2017 | 5.679 |
| 2018 | 14.063 |
| 2019 | 13.766 |
| 2020 | 17.474 |
| 2021 | 27.941 |
| 2022 | 41.397 |
| 2023 | 81.410 |
| 2024 | 201.178 |
| 2025 | 792.734 |
| 2026 | 197.204 |

### F. Polo INSS

| Polo INSS | Processos |
|---|---:|
| INSS-PASSIVO | 1.334.108 |
| INSS-ATIVO | 60.199 |
| Sigiloso | 12.420 |

### G. Mercado MC (endereçável)

Filtro: Tema ∈ {idade, incapacidade, assistenciais, especial, pensao_morte} **E** Pendente = TRUE.

| Funil | Processos |
|---|---:|
| Mercado endereçável MC (total) | 948.278 |
| Recorte JEF (Grau = JE) | 740.678 |
| Recorte territorial TRF1 (UFs do TRF1, dentro do JEF) | 740.678 |

---

## TRF2

### A. Volume

| Métrica | Valor |
|---|---:|
| Total de processos | 281.942 |
| Pendente = TRUE | 281.900 |
| Pendente = FALSE | 42 |
| % Pendente | 99.99% |

### B. Tema

| Tema | Processos |
|---|---:|
| incapacidade | 78.691 |
| assistenciais | 47.287 |
| outros | 35.807 |
| revisionais | 35.264 |
| programada | 33.427 |
| pensao_morte | 19.360 |
| idade | 18.597 |
| especial | 10.551 |
| salario_maternidade | 2.958 |

### C. Grau

| Grau | Processos |
|---|---:|
| JE | 194.375 |
| G1 | 44.706 |
| TR | 27.167 |
| G2 | 15.673 |
| TRU | 21 |

### D. Geografia (Top 10 UFs)

| UF | Processos |
|---|---:|
| RJ | 221.625 |
| ES | 60.317 |

### E. Temporalidade

| Métrica | Valor |
|---|---:|
| Média dias antiguidade (Pendente=TRUE) | 484.3 dias |
| Processos > 3 anos (1095 dias, Pendente=TRUE) | 33.349 |

Por ano de ajuizamento:

| Ano | Processos |
|---|---:|
| 1963 | 1 |
| 1975 | 1 |
| 1978 | 2 |
| 1979 | 2 |
| 1980 | 1 |
| 1981 | 7 |
| 1982 | 9 |
| 1983 | 5 |
| 1984 | 6 |
| 1985 | 6 |
| 1986 | 5 |
| 1987 | 8 |
| 1988 | 9 |
| 1989 | 15 |
| 1990 | 17 |
| 1991 | 33 |
| 1992 | 8 |
| 1993 | 38 |
| 1994 | 44 |
| 1995 | 79 |
| 1996 | 120 |
| 1997 | 64 |
| 1998 | 95 |
| 1999 | 103 |
| 2000 | 33 |
| 2001 | 45 |
| 2002 | 55 |
| 2003 | 60 |
| 2004 | 57 |
| 2005 | 133 |
| 2006 | 43 |
| 2007 | 74 |
| 2008 | 98 |
| 2009 | 63 |
| 2010 | 61 |
| 2011 | 93 |
| 2012 | 174 |
| 2013 | 100 |
| 2014 | 106 |
| 2015 | 139 |
| 2016 | 172 |
| 2017 | 353 |
| 2018 | 1.070 |
| 2019 | 2.838 |
| 2020 | 5.362 |
| 2021 | 7.911 |
| 2022 | 10.788 |
| 2023 | 23.452 |
| 2024 | 32.058 |
| 2025 | 152.311 |
| 2026 | 43.615 |

### F. Polo INSS

| Polo INSS | Processos |
|---|---:|
| INSS-PASSIVO | 252.460 |
| INSS-ATIVO | 22.314 |
| Sigiloso | 7.168 |

### G. Mercado MC (endereçável)

Filtro: Tema ∈ {idade, incapacidade, assistenciais, especial, pensao_morte} **E** Pendente = TRUE.

| Funil | Processos |
|---|---:|
| Mercado endereçável MC (total) | 174.464 |
| Recorte JEF (Grau = JE) | 136.461 |
| Recorte territorial TRF1 (UFs do TRF1, dentro do JEF) | 0 |

---

## TRF3

### A. Volume

| Métrica | Valor |
|---|---:|
| Total de processos | 910.644 |
| Pendente = TRUE | 908.120 |
| Pendente = FALSE | 2.524 |
| % Pendente | 99.72% |

### B. Tema

| Tema | Processos |
|---|---:|
| incapacidade | 222.316 |
| programada | 214.921 |
| revisionais | 138.457 |
| assistenciais | 89.738 |
| outros | 80.881 |
| idade | 62.459 |
| especial | 52.184 |
| pensao_morte | 42.413 |
| salario_maternidade | 7.275 |

### C. Grau

| Grau | Processos |
|---|---:|
| JE | 476.590 |
| G1 | 233.158 |
| G2 | 105.045 |
| TR | 95.230 |
| TRU | 621 |

### D. Geografia (Top 10 UFs)

| UF | Processos |
|---|---:|
| SP | 858.749 |
| MS | 51.895 |

### E. Temporalidade

| Métrica | Valor |
|---|---:|
| Média dias antiguidade (Pendente=TRUE) | 1.055.7 dias |
| Processos > 3 anos (1095 dias, Pendente=TRUE) | 241.314 |

Por ano de ajuizamento:

| Ano | Processos |
|---|---:|
| 1920 | 1 |
| 1956 | 1 |
| 1959 | 1 |
| 1961 | 1 |
| 1962 | 2 |
| 1963 | 2 |
| 1964 | 1 |
| 1967 | 1 |
| 1968 | 8 |
| 1969 | 87 |
| 1970 | 76 |
| 1971 | 242 |
| 1972 | 70 |
| 1973 | 96 |
| 1974 | 47 |
| 1975 | 270 |
| 1976 | 153 |
| 1977 | 118 |
| 1978 | 59 |
| 1979 | 51 |
| 1980 | 351 |
| 1981 | 222 |
| 1982 | 687 |
| 1983 | 968 |
| 1984 | 618 |
| 1985 | 515 |
| 1986 | 351 |
| 1987 | 606 |
| 1988 | 1.030 |
| 1989 | 539 |
| 1990 | 288 |
| 1991 | 375 |
| 1992 | 507 |
| 1993 | 529 |
| 1994 | 658 |
| 1995 | 755 |
| 1996 | 835 |
| 1997 | 1.393 |
| 1998 | 871 |
| 1999 | 1.172 |
| 2000 | 652 |
| 2001 | 778 |
| 2002 | 860 |
| 2003 | 1.093 |
| 2004 | 701 |
| 2005 | 636 |
| 2006 | 539 |
| 2007 | 515 |
| 2008 | 504 |
| 2009 | 700 |
| 2010 | 940 |
| 2011 | 1.498 |
| 2012 | 1.904 |
| 2013 | 2.447 |
| 2014 | 2.397 |
| 2015 | 3.725 |
| 2016 | 4.262 |
| 2017 | 6.657 |
| 2018 | 13.367 |
| 2019 | 20.101 |
| 2020 | 37.303 |
| 2021 | 45.756 |
| 2022 | 68.939 |
| 2023 | 133.701 |
| 2024 | 137.055 |
| 2025 | 339.448 |
| 2026 | 69.609 |

### F. Polo INSS

| Polo INSS | Processos |
|---|---:|
| INSS-PASSIVO | 784.998 |
| INSS-ATIVO | 115.638 |
| Sigiloso | 10.008 |

### G. Mercado MC (endereçável)

Filtro: Tema ∈ {idade, incapacidade, assistenciais, especial, pensao_morte} **E** Pendente = TRUE.

| Funil | Processos |
|---|---:|
| Mercado endereçável MC (total) | 468.519 |
| Recorte JEF (Grau = JE) | 301.162 |
| Recorte territorial TRF1 (UFs do TRF1, dentro do JEF) | 0 |

---

## TRF4

### A. Volume

| Métrica | Valor |
|---|---:|
| Total de processos | 699.942 |
| Pendente = TRUE | 699.414 |
| Pendente = FALSE | 528 |
| % Pendente | 99.92% |

### B. Tema

| Tema | Processos |
|---|---:|
| programada | 192.199 |
| incapacidade | 171.674 |
| revisionais | 82.524 |
| assistenciais | 71.722 |
| outros | 66.386 |
| especial | 50.153 |
| idade | 39.243 |
| pensao_morte | 23.612 |
| salario_maternidade | 2.429 |

### C. Grau

| Grau | Processos |
|---|---:|
| JE | 344.987 |
| G1 | 157.522 |
| G2 | 103.490 |
| TR | 93.469 |
| TRU | 474 |

### D. Geografia (Top 10 UFs)

| UF | Processos |
|---|---:|
| RS | 288.663 |
| PR | 221.779 |
| SC | 189.500 |

### E. Temporalidade

| Métrica | Valor |
|---|---:|
| Média dias antiguidade (Pendente=TRUE) | 517.5 dias |
| Processos > 3 anos (1095 dias, Pendente=TRUE) | 88.988 |

Por ano de ajuizamento:

| Ano | Processos |
|---|---:|
| 1977 | 1 |
| 1983 | 1 |
| 1985 | 1 |
| 1987 | 1 |
| 1988 | 1 |
| 1990 | 1 |
| 1992 | 2 |
| 1993 | 4 |
| 1994 | 13 |
| 1995 | 36 |
| 1996 | 30 |
| 1997 | 44 |
| 1998 | 49 |
| 1999 | 76 |
| 2000 | 14 |
| 2001 | 15 |
| 2002 | 32 |
| 2003 | 72 |
| 2004 | 66 |
| 2005 | 70 |
| 2006 | 85 |
| 2007 | 118 |
| 2008 | 87 |
| 2009 | 147 |
| 2010 | 267 |
| 2011 | 545 |
| 2012 | 503 |
| 2013 | 670 |
| 2014 | 800 |
| 2015 | 1.041 |
| 2016 | 1.595 |
| 2017 | 2.924 |
| 2018 | 4.367 |
| 2019 | 8.128 |
| 2020 | 16.699 |
| 2021 | 19.911 |
| 2022 | 26.791 |
| 2023 | 61.202 |
| 2024 | 98.623 |
| 2025 | 339.794 |
| 2026 | 115.116 |

### F. Polo INSS

| Polo INSS | Processos |
|---|---:|
| INSS-PASSIVO | 554.209 |
| INSS-ATIVO | 103.251 |
| Sigiloso | 42.482 |

### G. Mercado MC (endereçável)

Filtro: Tema ∈ {idade, incapacidade, assistenciais, especial, pensao_morte} **E** Pendente = TRUE.

| Funil | Processos |
|---|---:|
| Mercado endereçável MC (total) | 356.043 |
| Recorte JEF (Grau = JE) | 212.547 |
| Recorte territorial TRF1 (UFs do TRF1, dentro do JEF) | 0 |

---

## TRF5

### A. Volume

| Métrica | Valor |
|---|---:|
| Total de processos | 656.869 |
| Pendente = TRUE | 656.866 |
| Pendente = FALSE | 3 |
| % Pendente | 100.00% |

### B. Tema

| Tema | Processos |
|---|---:|
| incapacidade | 200.466 |
| assistenciais | 195.907 |
| outros | 95.333 |
| idade | 48.651 |
| pensao_morte | 28.588 |
| salario_maternidade | 27.979 |
| revisionais | 26.901 |
| programada | 25.563 |
| especial | 7.481 |

### C. Grau

| Grau | Processos |
|---|---:|
| JE | 504.895 |
| TR | 92.810 |
| G1 | 45.506 |
| G2 | 11.449 |
| TRU | 2.209 |

### D. Geografia (Top 10 UFs)

| UF | Processos |
|---|---:|
| CE | 182.309 |
| PE | 153.413 |
| PB | 102.351 |
| AL | 88.170 |
| SE | 71.295 |
| RN | 59.330 |

### E. Temporalidade

| Métrica | Valor |
|---|---:|
| Média dias antiguidade (Pendente=TRUE) | 235.0 dias |
| Processos > 3 anos (1095 dias, Pendente=TRUE) | 16.407 |

Por ano de ajuizamento:

| Ano | Processos |
|---|---:|
| 1989 | 2 |
| 1990 | 2 |
| 1991 | 3 |
| 1992 | 2 |
| 1993 | 9 |
| 1994 | 3 |
| 1995 | 6 |
| 1996 | 9 |
| 1997 | 13 |
| 1998 | 8 |
| 1999 | 19 |
| 2000 | 10 |
| 2001 | 10 |
| 2002 | 5 |
| 2003 | 19 |
| 2004 | 37 |
| 2005 | 52 |
| 2006 | 39 |
| 2007 | 35 |
| 2008 | 32 |
| 2009 | 30 |
| 2010 | 30 |
| 2011 | 56 |
| 2012 | 58 |
| 2013 | 57 |
| 2014 | 71 |
| 2015 | 103 |
| 2016 | 191 |
| 2017 | 202 |
| 2018 | 433 |
| 2019 | 1.031 |
| 2020 | 2.761 |
| 2021 | 2.917 |
| 2022 | 6.129 |
| 2023 | 18.185 |
| 2024 | 47.582 |
| 2025 | 437.633 |
| 2026 | 139.085 |

### F. Polo INSS

| Polo INSS | Processos |
|---|---:|
| INSS-PASSIVO | 640.269 |
| INSS-ATIVO | 11.585 |
| Sigiloso | 5.015 |

### G. Mercado MC (endereçável)

Filtro: Tema ∈ {idade, incapacidade, assistenciais, especial, pensao_morte} **E** Pendente = TRUE.

| Funil | Processos |
|---|---:|
| Mercado endereçável MC (total) | 481.091 |
| Recorte JEF (Grau = JE) | 399.234 |
| Recorte territorial TRF1 (UFs do TRF1, dentro do JEF) | 0 |

---

## TRF6

### A. Volume

| Métrica | Valor |
|---|---:|
| Total de processos | 430.243 |
| Pendente = TRUE | 429.997 |
| Pendente = FALSE | 246 |
| % Pendente | 99.94% |

### B. Tema

| Tema | Processos |
|---|---:|
| incapacidade | 121.879 |
| programada | 66.387 |
| assistenciais | 53.183 |
| idade | 52.781 |
| outros | 37.398 |
| revisionais | 36.209 |
| pensao_morte | 28.110 |
| especial | 26.447 |
| salario_maternidade | 7.849 |

### C. Grau

| Grau | Processos |
|---|---:|
| JE | 209.910 |
| G2 | 87.464 |
| TR | 68.231 |
| G1 | 64.474 |
| TRU | 164 |

### D. Geografia (Top 10 UFs)

| UF | Processos |
|---|---:|
| MG | 430.169 |

### E. Temporalidade

| Métrica | Valor |
|---|---:|
| Média dias antiguidade (Pendente=TRUE) | 897.4 dias |
| Processos > 3 anos (1095 dias, Pendente=TRUE) | 108.794 |

Por ano de ajuizamento:

| Ano | Processos |
|---|---:|
| 1980 | 1 |
| 1987 | 1 |
| 1988 | 1 |
| 1989 | 46 |
| 1990 | 15 |
| 1991 | 55 |
| 1992 | 81 |
| 1993 | 33 |
| 1994 | 57 |
| 1995 | 89 |
| 1996 | 38 |
| 1997 | 66 |
| 1998 | 94 |
| 1999 | 112 |
| 2000 | 115 |
| 2001 | 169 |
| 2002 | 208 |
| 2003 | 413 |
| 2004 | 377 |
| 2005 | 515 |
| 2006 | 688 |
| 2007 | 683 |
| 2008 | 665 |
| 2009 | 914 |
| 2010 | 1.345 |
| 2011 | 1.682 |
| 2012 | 1.621 |
| 2013 | 1.784 |
| 2014 | 2.442 |
| 2015 | 2.411 |
| 2016 | 3.211 |
| 2017 | 4.242 |
| 2018 | 6.013 |
| 2019 | 11.085 |
| 2020 | 15.800 |
| 2021 | 21.225 |
| 2022 | 26.473 |
| 2023 | 39.707 |
| 2024 | 67.769 |
| 2025 | 176.759 |
| 2026 | 41.238 |

### F. Polo INSS

| Polo INSS | Processos |
|---|---:|
| INSS-PASSIVO | 341.205 |
| INSS-ATIVO | 79.292 |
| Sigiloso | 9.746 |

### G. Mercado MC (endereçável)

Filtro: Tema ∈ {idade, incapacidade, assistenciais, especial, pensao_morte} **E** Pendente = TRUE.

| Funil | Processos |
|---|---:|
| Mercado endereçável MC (total) | 282.239 |
| Recorte JEF (Grau = JE) | 153.575 |
| Recorte territorial TRF1 (UFs do TRF1, dentro do JEF) | 153.575 |

---

## CONSOLIDADO — Todos os TRFs

### A. Volume — Consolidado

| TRF | Total | Pendente=TRUE | Pendente=FALSE |
|---|---:|---:|---:|
| TRF1 | 1.406.727 | 1.406.638 | 89 |
| TRF2 | 281.942 | 281.900 | 42 |
| TRF3 | 910.644 | 908.120 | 2.524 |
| TRF4 | 699.942 | 699.414 | 528 |
| TRF5 | 656.869 | 656.866 | 3 |
| TRF6 | 430.243 | 429.997 | 246 |
| **TOTAL** | **4.386.367** | **4.382.935** | **3.432** |

### B. Tema — Consolidado

| Tema | Processos | % |
|---|---:|---:|
| incapacidade | 1.203.377 | 27.43% |
| assistenciais | 724.831 | 16.52% |
| programada | 579.865 | 13.22% |
| outros | 504.535 | 11.50% |
| idade | 383.134 | 8.73% |
| revisionais | 365.898 | 8.34% |
| pensao_morte | 232.726 | 5.31% |
| salario_maternidade | 224.277 | 5.11% |
| especial | 167.724 | 3.82% |
| **TOTAL** | **4.386.367** | 100,00% |

### C. Grau — Consolidado

| Grau | Processos |
|---|---:|
| JE | 2.772.394 |
| G1 | 667.889 |
| TR | 583.297 |
| G2 | 359.258 |
| TRU | 3.529 |

### D. Geografia — Top 15 UFs (Consolidado)

| UF | Processos |
|---|---:|
| SP | 858.749 |
| MG | 430.185 |
| BA | 378.716 |
| RS | 288.663 |
| MA | 241.217 |
| PR | 221.779 |
| RJ | 221.625 |
| SC | 189.500 |
| CE | 182.309 |
| PA | 165.787 |
| PI | 157.014 |
| PE | 153.413 |
| DF | 115.178 |
| GO | 103.193 |
| PB | 102.351 |

### E. Temporalidade — Consolidado

| Métrica | Valor |
|---|---:|
| Média dias antiguidade (Pendente=TRUE, todos TRFs) | 610,8 dias |
| Processos > 3 anos pendentes | 624.929 |

Por ano de ajuizamento (consolidado):

| Ano | Processos |
|---|---:|
| 1920 | 1 |
| 1956 | 1 |
| 1959 | 1 |
| 1961 | 1 |
| 1962 | 2 |
| 1963 | 3 |
| 1964 | 1 |
| 1967 | 1 |
| 1968 | 8 |
| 1969 | 87 |
| 1970 | 76 |
| 1971 | 242 |
| 1972 | 71 |
| 1973 | 96 |
| 1974 | 48 |
| 1975 | 272 |
| 1976 | 153 |
| 1977 | 121 |
| 1978 | 65 |
| 1979 | 59 |
| 1980 | 358 |
| 1981 | 236 |
| 1982 | 713 |
| 1983 | 1.035 |
| 1984 | 630 |
| 1985 | 566 |
| 1986 | 373 |
| 1987 | 620 |
| 1988 | 1.050 |
| 1989 | 618 |
| 1990 | 354 |
| 1991 | 532 |
| 1992 | 724 |
| 1993 | 734 |
| 1994 | 990 |
| 1995 | 1.222 |
| 1996 | 1.321 |
| 1997 | 1.862 |
| 1998 | 1.449 |
| 1999 | 1.683 |
| 2000 | 1.007 |
| 2001 | 1.247 |
| 2002 | 1.530 |
| 2003 | 2.000 |
| 2004 | 1.494 |
| 2005 | 1.785 |
| 2006 | 1.903 |
| 2007 | 2.116 |
| 2008 | 1.761 |
| 2009 | 2.222 |
| 2010 | 3.024 |
| 2011 | 4.487 |
| 2012 | 4.889 |
| 2013 | 6.069 |
| 2014 | 7.458 |
| 2015 | 8.884 |
| 2016 | 11.747 |
| 2017 | 20.057 |
| 2018 | 39.313 |
| 2019 | 56.949 |
| 2020 | 95.399 |
| 2021 | 125.661 |
| 2022 | 180.517 |
| 2023 | 357.657 |
| 2024 | 584.265 |
| 2025 | 2.238.679 |
| 2026 | 605.867 |

### F. Polo INSS — Consolidado

| Polo INSS | Processos |
|---|---:|
| INSS-PASSIVO | 3.907.249 |
| INSS-ATIVO | 392.279 |
| Sigiloso | 86.839 |

### G. Mercado MC — Consolidado

| TRF | Mercado MC (Tema MC ∩ Pendente) | JEF (Grau=JE) | TRF1 (UFs TRF1 ∩ JEF) |
|---|---:|---:|---:|
| TRF1 | 948.278 | 740.678 | 740.678 |
| TRF2 | 174.464 | 136.461 | 0 |
| TRF3 | 468.519 | 301.162 | 0 |
| TRF4 | 356.043 | 212.547 | 0 |
| TRF5 | 481.091 | 399.234 | 0 |
| TRF6 | 282.239 | 153.575 | 153.575 |
| **TOTAL** | **2.710.634** | **1.943.657** | **894.253** |

---

## NÚMEROS PARA O PITCH

Totais consolidados dos 6 TRFs (DataJud/CNJ — Painel INSS).

### Volume Total (A)

| Métrica | Valor |
|---|---:|
| Processos INSS no Judiciário Federal (todos TRFs) | **4.386.367** |
| Processos PENDENTES (estoque ativo) | **4.382.935** |
| % do estoque pendente | **99.92%** |

### Distribuição por Tema (B)

| Tema | Processos | % |
|---|---:|---:|
| incapacidade | 1.203.377 | 27.43% |
| assistenciais | 724.831 | 16.52% |
| programada | 579.865 | 13.22% |
| outros | 504.535 | 11.50% |
| idade | 383.134 | 8.73% |
| revisionais | 365.898 | 8.34% |
| pensao_morte | 232.726 | 5.31% |
| salario_maternidade | 224.277 | 5.11% |
| especial | 167.724 | 3.82% |

### Mercado Endereçável MC (G)

Funil: temas previdenciários core (idade, incapacidade, assistenciais, especial, pensão por morte) ∩ pendente.

| Camada | Processos |
|---|---:|
| **Mercado MC total (Brasil — 6 TRFs)** | **2.710.634** |
| **Recorte JEF (Juizados Especiais Federais)** | **1.943.657** |
| **Recorte TRF1 dentro do JEF (14 UFs)** | **894.253** |

- JEF representa **71.7%** do mercado MC.
- TRF1 representa **46.0%** do mercado JEF.
- Mercado MC representa **61.8%** do estoque INSS pendente total.
