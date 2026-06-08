# MC-ADR-013 — Convenções Operacionais IVCAD-MC v1.0

**Status:** ⚠️ PROVISIONAL — aguarda resposta SAGICAD/MDS + parecer Dra. Juliana 19/05/2026
**Data:** 07/05/2026
**Autor:** Claude Opus 4.6 (co-fundador intelectual) × Alessandro de Souza Neves (Founder/CEO)
**Substitui:** N/A (novo)
**Próxima revisão:** pós-resposta ivcad.sagicad@mds.gov.br ou 19/05/2026 (o que ocorrer primeiro)
**Hierarquia:** Dignidade > Compliance > Viabilidade
**Dependências:** MC-METODOLOGIA-IVCAD-Oficial-v1_0 (Sprint B1) · MC-MAPEAMENTO-IVCAD-Indicador-Campo-v1_0 (Sprint B1.5) · ADR-007 v3.7

---

## 1. Contexto

O IVCAD (Índice de Vulnerabilidade das Famílias do Cadastro Único) é calculado pelo MDS para 26,5 milhões de famílias, utilizando 40 indicadores binários agrupados em 6 dimensões com pesos uniformes. A fórmula é pública: `IVCAD = (NC + DPI + DCA + TQA + DR + CH) / 6`. Os 40 indicadores estão nomeados e descritos na página oficial do MDS.

**O problema:** o MDS não publica as regras operacionais indicador a indicador — qual variável do formulário CadÚnico é consultada, qual o critério exato de detecção, quais os limiares numéricos. Não existe nota técnica oficial conhecida que documente isso (lacuna 10 do Sprint B1, confirmada empiricamente no Sprint B1.5).

**A decisão:** o MC adota o IVCAD-MC — implementação fiel à metodologia oficial do MDS, calculada localmente sobre dado consentido pelo cidadão (formulário CadÚnico extraído via gov.br/Meu CadÚnico), com regras operacionais declaradas transparentemente neste ADR. Onde a definição oficial não é publicada, o MC adota convenção fundamentada em fontes reconhecidas (IBGE/PNAD, UNESCO, SNIS) e declara explicitamente a adoção.

**Base normativa do acesso ao dado:** o cidadão extrai seu próprio formulário CadÚnico via gov.br (Lei 13.460/2017 art. 6º; LGPD art. 18). O MC processa esse dado com consentimento explícito (LGPD art. 7º I). Não há acesso a base CECAD/SAGICAD restrita a gestores.

## 2. Decisão — Fórmula IVCAD-MC

**IVCAD-MC reproduz fielmente a fórmula oficial do MDS:**

```
IVCAD-MC = (NC + DPI + DCA + TQA + DR + CH) / 6

Onde cada dimensão d:
  índice_d = (1/n_d) × Σ indicadores_d
  n_d = número de indicadores da dimensão
  Cada indicador ∈ {0, 1}
```

| Dimensão | Sigla | Indicadores | Peso no IVCAD-MC |
|----------|-------|-------------|------------------|
| Necessidade de Cuidados | NC | 7 (NC1-NC7) | 1/6 |
| Desenvolvimento Primeira Infância | DPI | 3 (DPI1-DPI3) | 1/6 |
| Desenvolvimento Crianças/Adolescentes | DCA | 5 (DCA1-DCA5) | 1/6 |
| Trabalho e Qualificação Adultos | TQA | 7 (TQA1-TQA7) | 1/6 |
| Disponibilidade de Recursos | DR | 4 (DR1-DR4) | 1/6 |
| Condições Habitacionais | CH | 14 (CH1-CH14) | 1/6 |

**Escala:** 0 a 1. Quanto mais próximo de 1, maior a vulnerabilidade.

**Diferença em relação ao IVCAD oficial:** zero na fórmula. A única diferença é a transparência das regras operacionais e a origem do dado (formulário consentido pelo cidadão vs. base CECAD restrita a gestores).

## 3. Convenções Operacionais MC (5 decisões declaradas)

### CO-01 — Data de referência para cálculo de idade

**Convenção MC:** usar `DAT_ATUAL_FAM` (data da última atualização do cadastro) como data de referência para cálculo de idade em todos os indicadores que dependem de faixa etária (NC1-NC3, NC5-NC7, DPI1-DPI3, DCA1-DCA5, TQA1-TQA7).

**Fundamentação:** o IVCAD oficial usa "Referência: março/2026" [Fonte: _OBS-CADUN-IVCAD.pdf], que corresponde à `REF_CAD` da extração mensal. Como o MC calcula no momento da triagem (não em lote mensal), `DAT_ATUAL_FAM` é o equivalente operacional mais fiel.

**Status:** PROVISIONAL — consulta à SAGICAD (pergunta 1 do e-mail) pode alterar.

### CO-02 — Definição de "adulto"

**Convenção MC:** 18 ≤ idade_anos ≤ 59.

**Fundamentação:** definição literal da própria descrição do indicador NC6 [Fonte: IVCAD PÁGINA WEB.pdf, p. 2].

**Status:** ALTA CONFIANÇA — derivada diretamente da fonte oficial.

### CO-03 — Definição de "pessoa ocupada"

**Convenção MC:** `COD_TRABALHOU_MEMB = 1 (trabalhou na semana passada) OU COD_AFASTADO_TRAB_MEMB = 1 (afastado de trabalho)`.

**Fundamentação:** definição padrão PNAD/IBGE de "pessoa ocupada", compatível com a semântica dos quesitos 8.01 e 8.02 do Formulário Principal.

**Status:** ALTA CONFIANÇA.

### CO-04 — Salário mínimo vigente

**Convenção MC:** usar o valor do SM vigente na data da triagem MC. Em 2026: R$ 1.518,00.

**Fundamentação:** o IVCAD oficial não publica qual SM usa. O SM vigente é a convenção mais defensável juridicamente.

**Status:** PROVISIONAL — consulta SAGICAD pode revelar se usam SM da REF_PBF (diferente).

### CO-05 — Renda per capita pré-PBF

**Convenção MC:** somar todas as rendas declaradas no formulário (quesitos 8.05 + 8.09 itens 1-5 de cada integrante) ÷ QTD_PESSOAS_DOMIC_FAM. O benefício PBF NÃO está incluído na renda declarada (quesito 8.09.5 explicitamente exclui "Bolsa Família ou outras transferências similares").

**Fundamentação:** [Fonte: Dicionário CECAD — campo VLR_RENDA_MEDIA_FAM] + [Fonte: Manual Formulário Principal v010, quesito 8.09.5].

**Status:** ALTA CONFIANÇA.

## 4. Lacunas Residuais — Critério MC Interim (12 lacunas)

Cada lacuna abaixo corresponde a uma definição operacional não publicada pelo MDS. O MC adota um critério interim fundamentado em fonte reconhecida. Se a resposta da SAGICAD vier diferente, o MC atualiza o critério e recalcula os IVCAD-MC afetados.

### L-01 — Definição de "analfabeto funcional" (TQA1)

**Critério MC interim:** `GRAU_INSTRUCAO ∈ {1 (sem instrução)} OU (COD_ANO_SERIE_FREQUENTOU_MEMB < 4 para curso 4 ou 5 — EF regular)`.
**Fonte da convenção:** UNESCO/IBGE — "pessoa com menos de 4 anos de estudo concluídos".
**Indicadores afetados:** TQA1.

### L-02 — Definição de "setor formal" (TQA5)

**Critério MC interim:** `COD_PRINCIPAL_TRAB_MEMB ∈ {4 (empregado c/ carteira), 6 (doméstico c/ carteira), 8 (militar/servidor público)}`. Exclui empregador (9), estagiário (10) e aprendiz (11) da definição de "formal" — interpretação conservadora que maximiza detecção de vulnerabilidade.
**Fonte da convenção:** PNAD Contínua — classificação de "empregado formal" do IBGE.
**Indicadores afetados:** TQA5.

### L-03 — Definição de "atraso escolar > 2 anos" (DCA5)

**Critério MC interim:** `idade_anos − (série_frequentada + 5) > 2`, onde série_frequentada = COD_ANO_SERIE_FREQUENTA_MEMB (1-9) e 5 é a idade mínima de ingresso no 1º ano.
**Fonte da convenção:** convenção MEC/INEP (matrícula adequada à idade: 6 anos → 1º ano).
**Indicadores afetados:** DCA5.

### L-04 — Tratamento de IND_FREQUENTA_ESCOLA_MEMB = NULL (crianças pequenas)

**Critério MC interim:** campo NULL para crianças de 0-3 anos → tratar como "não frequenta" (DPI2 = 1 se aplicável). Campo NULL para crianças de 4+ anos → tratar como "não frequenta" (DPI1, DCA2, DCA3 = 1 se aplicável).
**Fundamentação:** ausência de registro escolar é, por si, um indicador de não-frequência.
**Indicadores afetados:** DPI1, DPI2, DCA2, DCA3.

### L-05 — Conjunto de COD_PARENTESCO para "não filho/enteado" (DPI3)

**Critério MC interim:** `COD_PARENTESCO_RF_PESSOA ∉ {3 (filho), 4 (enteado)}` — qualquer outro parentesco (neto, sobrinho, sem parentesco, etc.) para criança de 0-6 anos marca DPI3 = 1.
**Fundamentação:** leitura literal da descrição do indicador.
**Indicadores afetados:** DPI3.

### L-06 — Cortes de pobreza e extrema pobreza (DR1-DR4)

**Critério MC interim:**
- Extrema pobreza: renda per capita ≤ R$ 218,00
- Pobreza: renda per capita ≤ R$ 660,00
**Fonte da convenção:** cortes vigentes do Programa Bolsa Família 2026.
**Indicadores afetados:** DR1, DR2, DR3, DR4.
**Risco:** o IVCAD pode usar cortes diferentes (ex.: ½ SM para pobreza = R$ 759 em 2026). Diferença de até 0,25 por indicador DR em casos limítrofes.

### L-07 — Isolamento do BPC na renda declarada (DR1, DR4)

**Critério MC interim:** o BPC está agrupado com aposentadoria/pensão no quesito 8.09.2 do formulário (`FX_RENDA_INDIVIDUAL_809_2`). Para isolar o BPC seria necessário cruzamento com base BPC nacional, indisponível ao MC. **Critério MC:** considerar toda a renda de 8.09.2 como "benefício socioassistencial" para fins de DR4 — isso superestima a vulnerabilidade (conservador, alinhado a D > C > V).
**Indicadores afetados:** DR1, DR4.

### L-08 — Família com renda zero e aluguel positivo (CH3)

**Critério MC interim:** CH3 = 1 (família gasta mais de 30% de zero = infinito > 30%).
**Fundamentação:** princípio de máxima proteção — família sem renda pagando aluguel está em situação de vulnerabilidade habitacional máxima.
**Indicadores afetados:** CH3.

### L-09 — Família com zero dormitórios (CH2)

**Critério MC interim:** CH2 = 1 (qualquer número de moradores ÷ 0 dormitórios = overflow → vulnerável).
**Fundamentação:** domicílio sem dormitório identificado (kit-net, coletivo) é situação de vulnerabilidade por si.
**Indicadores afetados:** CH2.

### L-10 — Materiais "permanentes" para piso e paredes (CH5, CH6)

**Critério MC interim:**
- Piso permanente: códigos {2 (cimento), 4 (madeira aparelhada), 5 (cerâmica/lajota/pedra), 6 (carpete)}
- Parede permanente: códigos {1 (alvenaria c/ revestimento), 2 (alvenaria s/ revestimento), 3 (madeira aparelhada), 4 (taipa revestida)}
- Não permanente: todos os demais
**Fonte da convenção:** classificação PNAD/IBGE.
**Indicadores afetados:** CH5, CH6.

### L-11 — Definição de "água adequada" (CH8)

**Critério MC interim:** água adequada = rede geral (código 1) OU poço/nascente (código 2) COM canalização interna (COD_AGUA_CANALIZADA_FAM = 1). Cisterna (código 3) e "outra" (código 4) sem canalização = inadequada.
**Fonte da convenção:** PNAD/IBGE.
**Indicadores afetados:** CH8.

### L-12 — Definição de "esgotamento adequado" (CH10)

**Critério MC interim:** esgotamento adequado = rede coletora (código 1) OU fossa séptica (código 2). Fossa rudimentar, vala, rio, outra = inadequado.
**Fonte da convenção:** SNIS (Sistema Nacional de Informações sobre Saneamento).
**Indicadores afetados:** CH10.

## 5. Gate de revisão

Este ADR será revisado quando ocorrer **qualquer** dos seguintes eventos:

1. Resposta do SAGICAD ao e-mail de consulta técnica (enviado em 07/05/2026)
2. Parecer da Dra. Juliana Pereira de Melo (19/05/2026)
3. Publicação de nota técnica oficial do MDS sobre operacionalização do IVCAD
4. Primeiro cálculo em escala (N ≥ 30 casos) revelando discrepância > 0,05 entre IVCAD-MC e IVCAD oficial agregado

**Pós-revisão:** este ADR evolui para v1.1 (ajuste parcial) ou v2.0 (revisão ampla).

## 6. Consequências

**Se adotarmos:**
- MC pode calcular IVCAD-MC imediatamente para qualquer família com formulário CadÚnico consentido
- Igor pode implementar as regras no NestJS com os nomes técnicos das variáveis CECAD (Sprint B1.5)
- Material auditável para FINEP/BNDES (transparência > opacidade)
- 12 lacunas declaradas como decisões fundadas, não como bugs
- Hook 1b da RouterEthics 11.0 pode ser refatorado

**Se não adotarmos:**
- IVCAD-MC fica indefinidamente em teoria
- Hook 1b permanece ferido (presume acesso inacessível)
- IPH-MC não é calculável
- Caso CAD001 (CAD001) não tem indicador verificável

## 7. Validação empírica — Caso CAD001 (CAD001)

IVCAD-MC calculado em 07/05/2026 utilizando as convenções deste ADR:

| Dimensão | Valor | Benchmark Brasil mar/2026 |
|----------|------:|---------------------------:|
| NC | 0,143 | 0,354 |
| DPI | 0,000 | 0,078 |
| DCA | 0,000 | 0,049 |
| TQA | 0,714 | 0,636 |
| DR | 0,750 | 0,409 |
| CH | 0,000 | 0,171 |
| **IVCAD-MC** | **0,268** | **0,283** |

Resultado consistente com o perfil da família: vulnerabilidade concentrada em TQA (qualificação/emprego) e DR (renda), com habitação e cuidado saudáveis.

---

**MC-ADR-013-ConvencoesOperacionais-IVCAD-MC-v1_0-2026-0507.md**
**∞**
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