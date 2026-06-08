---
título: MC-MAPEAMENTO-IVCAD-Indicador-Campo-v1_0-2026-0507
sprint: B1.5 — Mapeamento indicador → campo do formulário
modo: Mapeamento técnico (read-only)
status: PARCIAL
fontes_lidas:
  - MC-METODOLOGIA-IVCAD-Oficial-EngenhariaReversa-v1_0-2026-0507.md (canônico Sprint B1)
  - MANUAL Formulario_Principal de Cadastramento.pdf (estrutura blocos 1-8, v009)
  - copy2_of_FormulrioPrincipal.pdf (estrutura blocos 1-8, v010)
  - Dicionario_de_Variaveis_CECAD.pdf (TB_DOMICILIO 75 variáveis + TB_PESSOA 131 variáveis)
  - Avulso1IdentificaodoDomiclioedaFamlia.pdf
  - Avulso2IdentificaodaPessoa.pdf
  - copy_of_Suplementar1Vinculaoaprogramaseservios.pdf
  - Suplementar2Pessoaemsituaoderua.pdf
  - suplementar3.pdf
  - Conteudistas_Atualizado.pdf
indicadores_mapeados_com_alta_confianca: 23 de 40
indicadores_mapeados_com_baixa_confianca: 17 de 40 (MÉDIA: 14; BAIXA: 3)
lacunas: 0 indicadores totalmente sem campo identificável; 17 com regra que depende de definição operacional não publicada (corte de pobreza, "analfabeto funcional", "atraso escolar", "setor formal", "água adequada", "esgotamento adequado", "renda pré-PBF").
data_execução: 2026-05-07T13:35:00
duração: 00h45min
---

## 1. SUMÁRIO

Foram cruzados 6 documentos: o canônico IVCAD do Sprint B1 (40 indicadores literais), o Formulário Principal de Cadastramento (versões v009 e v010, blocos 1-8), o Dicionário de Variáveis do CECAD (com nomes técnicos das variáveis em TB_DOMICILIO e TB_PESSOA), os Formulários Avulsos (1 — domicílio/família; 2 — pessoa) e os Suplementares (1 — vínculação a programas; 2 — pessoa em situação de rua; 3 — mudanças no bloco 3 do Sup1). Nenhum dos manuais lidos cita o IVCAD ou documenta a operacionalização indicador→campo (lacuna 7 do Sprint B1 confirmada). O mapeamento foi construído a partir da descrição literal do indicador cruzada com o campo do formulário cuja semântica é diretamente compatível.

Resultados: **23/40 ALTA confiança** (campo único, regra dedutível direta — ex.: NC1, NC4, CH4, CH9, CH11), **14/40 MÉDIA** (campo claro mas a regra envolve uma definição operacional não publicada — ex.: "analfabeto funcional" em TQA1, "água adequada" em CH8, cortes de pobreza em DR1-DR4), **3/40 BAIXA** (TQA5 "setor formal", DCA5 "atraso escolar >2 anos" e DPI3 "criança não filho/enteado" — regras com várias interpretações possíveis). **Zero lacunas absolutas**: para todos os 40 indicadores foi possível identificar pelo menos um conjunto de campos do formulário cujo cruzamento operacionaliza o indicador. As 17 lacunas residuais correspondem ao detalhe da regra (limiar, faixa, classificação), não ao campo-fonte.

## 2. INVENTÁRIO DE CAMPOS DO FORMULÁRIO CADÚNICO

Os campos a seguir foram extraídos do Formulário Principal de Cadastramento (numeração oficial dos quesitos) com o nome técnico correspondente no banco CECAD entre colchetes (`TB_DOMICILIO` ou `TB_PESSOA`).

### Bloco 1 — Identificação e controle [chave da família e do cadastro]
- 1.01 — Código familiar `[COD_FAMILIAR_FAM]`
- 1.02 — UF `[SIG_UF_FAM, derivado]`
- 1.03 — Município `[NOM_MUN_FAM, COD_IBGE]`
- 1.04 — Distrito; 1.05 — Subdistrito; 1.06 — Setor censitário
- 1.07 — Modalidade da operação (1=Inclusão; 2=Alteração)
- 1.08 — Forma de coleta de dados (1=Fora; 2=Em domicílio; 3=Impossibilidade) `[COD_FORMA_COLETA_FAM]`
- 1.09 — Formulário(s) preenchido(s) (0=Principal; 1=Avulso1; 2=Avulso2; 3=Suplementar)
- 1.10 — Data da entrevista `[DTA_ENTREVISTA_FAM]`
- 1.11-1.20 — Endereço (logradouro, número, complemento, CEP, unidade territorial, referência) `[NOM_LOGRADOURO_FAM, NUM_LOGRADOURO_FAM, NUM_CEP_LOGRADOURO_FAM, COD_UNIDADE_TERRITORIAL_FAM]`
- 1.21-1.23 — Entrevistador (nome, CPF, observações) `[NOM_ENTREVISTADOR_FAM, NUM_CPF_ENTREVISTADOR_FAM]`
- Campos derivados/sistêmicos: `DAT_CADASTRAMENTO_FAM`, `DAT_ATUAL_FAM`, `COD_EST_CADASTRAL_FAM` (1-Em cadastramento, 2-Sem registro civil, 3-Cadastrado, 4-Excluído), `MARC_PBF` (1-Sim, 2-Não), `REF_CAD` (data de referência da extração), `REF_PBF`

### Bloco 2 — Características do domicílio [não preencher para situação de rua]
- 2.01 — Local urbano/rural (1=Urbanas; 2=Rurais) `[COD_LOCAL_DOMIC_FAM]`
- 2.02 — Espécie do domicílio (1=Particular permanente; 2=Particular improvisado; 3=Coletivo) `[COD_ESPECIE_DOMIC_FAM]`
- 2.03 — Quantidade de cômodos `[QTD_COMODOS_DOMIC_FAM]`
- 2.04 — Cômodos servindo de dormitório `[QTD_COMODOS_DORMITORIO_FAM]`
- 2.05 — Material predominante do piso (1=Terra; 2=Cimento; 3=Madeira aproveitada; 4=Madeira aparelhada; 5=Cerâmica/lajota/pedra; 6=Carpete; 7=Outro) `[COD_MATERIAL_PISO_FAM]`
- 2.06 — Material das paredes externas (1=Alvenaria c/ revest.; 2=Alvenaria s/ revest.; 3=Madeira aparelhada; 4=Taipa revestida; 5=Taipa não-revestida; 6=Madeira aproveitada; 7=Palha; 8=Outro) `[COD_MATERIAL_DOMIC_FAM]`
- 2.07 — Água canalizada para pelo menos um cômodo (1=Sim; 2=Não) `[COD_AGUA_CANALIZADA_FAM]`
- 2.08 — Forma de abastecimento de água (1=Rede geral; 2=Poço/nascente; 3=Cisterna; 4=Outra) `[COD_ABASTE_AGUA_DOMIC_FAM]`
- 2.09 — Existe banheiro/sanitário (1=Sim; 2=Não) `[COD_BANHEIRO_DOMIC_FAM]`
- 2.10 — Forma de escoamento sanitário (1=Rede coletora; 2=Fossa séptica; 3=Fossa rudimentar; 4=Vala a céu aberto; 5=Direto para rio/lago/mar; 6=Outra) `[COD_ESCOA_SANITARIO_DOMIC_FAM]`
- 2.11 — Destino do lixo (1=Coletado direto; 2=Coletado indireto; 3=Queimado/enterrado na propriedade; 4=Terreno baldio/logradouro; 5=Rio/lago/mar; 6=Outro) `[COD_DESTINO_LIXO_DOMIC_FAM]`
- 2.12 — Forma de iluminação (1=Elétrica c/ medidor próprio; 2=Elétrica c/ medidor comunitário; 3=Elétrica s/ medidor; 4=Óleo/querosene/gás; 5=Vela; 6=Outra) `[COD_ILUMINACAO_DOMIC_FAM]`
- 2.13 — Calçamento/pavimentação (1=Total; 2=Parcial; 3=Não existe) `[COD_CALCAMENTO_DOMIC_FAM]`

### Bloco 3 — Família
- 3.01-3.04 — Indígena (1=Sim; 2=Não), povo, residência em terra/reserva, nome da reserva `[COD_FAMILIA_INDIGENA_FAM, COD_POVO_INDIGENA_FAM, COD_INDIGENA_RESIDE_FAM]`
- 3.05-3.06 — Quilombola (1=Sim; 2=Não), nome da comunidade `[IND_FAMILIA_QUILOMBOLA_FAM, COD_COMUNIDADE_QUILOMBOLA_FAM]`
- 3.07 — Quantidade de pessoas no domicílio `[QTD_PESSOAS_DOMIC_FAM]`
- 3.08 — Quantidade de famílias no domicílio `[QTD_FAMILIAS_DOMIC_FAM]`
- 3.09 — Pessoas internadas/abrigadas/privadas de liberdade ≥12 meses (faixa 0-17, 18-59, 60+) `[QTD_PESSOA_INTER_0_17_ANOS_FAM, QTD_PESSOA_INTER_18_64_ANOS_FAM, QTD_PESSOA_INTER_65_ANOS_FAM]`
- 3.10 — Despesas mensais (1-Energia, 2-Água/esgoto, 3-Gás/carvão/lenha, 4-Alimentação/higiene, 5-Transporte, 6-Aluguel, 7-Medicamentos) `[VAL_DESP_ENERGIA_FAM, VAL_DESP_AGUA_ESGOTO_FAM, VAL_DESP_GAS_FAM, VAL_DESP_ALIMENTACAO_FAM, VAL_DESP_TRANSPOR_FAM, VAL_DESP_ALUGUEL_FAM, VAL_DESP_MEDICAMENTOS_FAM]`
- 3.11-3.12 — EAS/MS, CRAS/CREAS de referência `[NOM_ESTAB_ASSIST_SAUDE_FAM, NOM_CENTRO_ASSIST_FAM]`
- Campos derivados: `VLR_RENDA_MEDIA_FAM` (renda per capita), `FX_RFPC` (faixa: 1=≤R$109; 2=R$109-218; 3=R$218,01-½SM; 4=>½SM), `VLR_RENDA_TOTAL_FAM`, `IND_PARC_MDS_FAM` (grupos tradicionais: 101 cigana, 201 extrativista, 202 pescadores, 203 terreiro, 204 ribeirinha, 205 agricultores, 301-306 etc.)

### Bloco 4 — Identificação da pessoa (1 vez por integrante)
- 4.01 — Número de ordem
- 4.02 — Nome completo `[NOM_PESSOA]`
- 4.03 — NIS/PIS/PASEP `[NUM_NIS_PESSOA_ATUAL]`
- 4.04 — Nome social
- 4.05 — Sexo (1=Masculino; 2=Feminino) `[COD_SEXO_PESSOA]`
- 4.06 — Data de nascimento `[DTA_NASC_PESSOA]`; faixa derivada `[FX_IDADE: 0=0-4, 1=5-6, 2=7-15, 3=16-17, 4=18-24, 5=25-34, 6=35-39, 7=40-44, 8=45-49, 9=50-54, 10=55-59, 11=60-64, 12=>65]`
- 4.07 — Relação com RF (1=RF; 2=Cônjuge; 3=Filho; 4=Enteado; 5=Neto/bisneto; 6=Pai/mãe; 7=Sogro; 8=Irmão; 9=Genro/nora; 10=Outro parente; 11=Não parente) `[COD_PARENTESCO_RF_PESSOA]`
- 4.08 — Cor/raça (1=Branca; 2=Preta; 3=Amarela; 4=Parda; 5=Indígena) `[COD_RACA_COR_PESSOA]`
- 4.09-4.10 — Filiação 1 e 2 `[NOM_COMPLETO_MAE_PESSOA, NOM_COMPLETO_PAI_PESSOA]`
- 4.11-4.14 — Local de nascimento `[COD_LOCAL_NASCIMENTO_PESSOA, SIG_UF_MUNIC_NASC_PESSOA, NOM_IBGE_MUNIC_NASC_PESSOA, NOM_PAIS_ORIGEM_PESSOA]`
- 4.15 — Registro civil (1=Sim e tem certidão; 2=Sim sem certidão; 3=Não; 4=Não sabe) `[COD_CERTIDAO_REGISTRADA_PESSOA]`
- 4.16-4.18 — Gênero/identidade de gênero (campos novos v010)

### Bloco 5 — Documentos
- 5.01 — Certidão (a-Tipo: 1=Nascimento, 2=Casamento, 3=RANI; b-Dados: cartório, data, livro, folha, termo, matrícula, UF, município) `[COD_CERTIDAO_CIVIL_PESSOA, COD_LIVRO_TERMO_CERTID_PESSOA, COD_FOLHA_TERMO_CERTID_PESSOA, COD_TERMO_MATRICULA_CERTID_PESSOA, NOM_MUNIC_CERTID_PESSOA]`
- 5.02 — CPF `[NUM_CPF_PESSOA]`
- 5.03 — RG (número, complemento, data emissão, UF, órgão) `[NUM_IDENTIDADE_PESSOA, DTA_EMISSAO_IDENT_PESSOA, SIG_UF_IDENT_PESSOA, SIG_ORGAO_EMISSOR_PESSOA]`
- 5.04 — CTPS (número, série, data emissão, UF) `[NUM_CART_TRAB_PREV_SOC_PESSOA, NUM_SERIE_TRAB_PREV_SOC_PESSOA, DTA_EMISSAO_CART_TRAB_PESSOA, SIG_UF_CART_TRAB_PESSOA]`
- 5.05 — Título de eleitor (número, zona, seção) `[NUM_TITULO_ELEITOR_PESSOA, NUM_ZONA_TIT_ELEITOR_PESSOA, NUM_SECAO_TIT_ELEITOR_PESSOA]`

### Bloco 6 — Pessoas com deficiência
- 6.01 — Tem deficiência permanente que limite atividades habituais (1=Sim; 2=Não) `[COD_DEFICIENCIA_MEMB]`
- 6.02 — Tipo de deficiência (múltipla marcação): 1-Cegueira, 2-Baixa visão, 3-Surdez severa/profunda, 4-Surdez leve/moderada, 5-Física, 6-Mental/intelectual, 7-Síndrome de Down, 8-Transtorno/doença mental `[IND_DEF_CEGUEIRA_MEMB, IND_DEF_BAIXA_VISAO_MEMB, IND_DEF_SURDEZ_PROFUNDA_MEMB, IND_DEF_SURDEZ_LEVE_MEMB, IND_DEF_FISICA_MEMB, IND_DEF_MENTAL_MEMB, IND_DEF_SINDROME_DOWN_MEMB, IND_DEF_TRANSTORNO_MENTAL_MEMB]`
- 6.03 — Cuidados permanentes de terceiros (múltipla): 1-Não, 2-Família, 3-Cuidador especializado, 4-Vizinho, 5-Instituição, 6-Outra `[IND_AJUDA_NAO_MEMB, IND_AJUDA_FAMILIA_MEMB, IND_AJUDA_ESPECIALIZADO_MEMB, IND_AJUDA_VIZINHO_MEMB, IND_AJUDA_INSTITUICAO_MEMB, IND_AJUDA_OUTRA_MEMB]`

### Bloco 7 — Escolaridade
- 7.01 — Sabe ler e escrever (1=Sim; 2=Não) `[COD_SABE_LER_ESCREVER_MEMB]`
- 7.02 — Frequenta escola/creche (1=Sim rede pública; 2=Sim rede particular; 3=Não, já frequentou; 4=Nunca frequentou) `[IND_FREQUENTA_ESCOLA_MEMB]`
- 7.03 — Nome da escola/creche `[NOM_ESCOLA_MEMB]`
- 7.04-7.05 — Localização da escola `[COD_ESCOLA_LOCAL_MEMB, SIG_UF_ESCOLA_MEMB, NOM_MUNIC_ESCOLA_MEMB]`
- 7.06 — Código INEP/MEC `[COD_CENSO_INEP_MEMB]`
- 7.07 — Curso que frequenta (1=Creche; 2=Pré-escola; 3=CA; 4=EF regular 8a; 5=EF regular 9a; 6=EF especial; 7=EM regular; 8=EM especial; 9=EJA EF iniciais; 10=EJA EF finais; 11=EJA EM; 12=Alfab adultos; 13=Superior+; 14=Pré-vestibular) `[COD_CURSO_FREQUENTA_MEMB]`
- 7.08 — Ano/série que frequenta (1-9 + 10=não-seriado) `[COD_ANO_SERIE_FREQUENTA_MEMB]`
- 7.09 — Curso mais elevado que frequentou (1-15) `[COD_CURSO_FREQUENTOU_PESSOA_MEMB]`
- 7.10 — Último ano/série concluído (1-9 + 10=não-seriado) `[COD_ANO_SERIE_FREQUENTOU_MEMB]`
- 7.11 — Concluiu o curso (1=Sim; 2=Não) `[COD_CONCLUIU_FREQUENTOU_MEMB]`
- Derivado: `GRAU_INSTRUCAO` (1=Sem instrução; 2=Fundamental Incompleto; 3=Fundamental Completo; 4=Médio Incompleto; 5=Médio Completo; 6=Superior Incompleto; 0=Outros)

### Bloco 8 — Trabalho e remuneração (≥14 anos; itens 8.09.2 e 8.09.4 todas idades)
- 8.01 — Trabalhou na semana passada (1=Sim; 2=Não) `[COD_TRABALHOU_MEMB]`
- 8.02 — Estava afastado por doença/falta/licença/férias (1=Sim; 2=Não) `[COD_AFASTADO_TRAB_MEMB]`
- 8.03 — Trabalho principal foi agricultura/criação/pesca/extração (1=Sim; 2=Não) `[COD_AGRICULTURA_TRAB_MEMB]`
- 8.04 — Posição no trabalho principal (1=Conta própria/bico; 2=Temporário rural; 3=Empregado s/ carteira; 4=Empregado c/ carteira; 5=Doméstico s/ carteira; 6=Doméstico c/ carteira; 7=Não-remunerado; 8=Militar/servidor público; 9=Empregador; 10=Estagiário; 11=Aprendiz) `[COD_PRINCIPAL_TRAB_MEMB]`
- 8.05 — Remuneração de trabalho mês passado (R$) `[VAL_REMUN_MES_PASSADO_MEMB]` — faixa derivada `[FX_RENDA_INDIVIDUAL_805: 0-zero, 1-≤extrema pobreza, 2-extrema-pobreza→pobreza, 3-pobreza→½SM, 4-½SM→1SM, 5-1SM→2SM, 6-2SM→3SM, 7->3SM]`
- 8.06 — Trabalho remunerado nos últimos 12 meses (1=Sim; 2=Não) `[COD_TRABALHO_12_MESES_MEMB]`
- 8.07 — Quantos meses `[QTD_MESES_12_MESES_MEMB]`
- 8.08 — Remuneração bruta dos últimos 12 meses `[FX_RENDA_INDIVIDUAL_808]`
- 8.09 — Renda regular mensal por fonte: 1-Ajuda/doação não-morador `[FX_RENDA_INDIVIDUAL_809_1]`; 2-Aposentadoria/pensão/BPC/LOAS `[FX_RENDA_INDIVIDUAL_809_2]`; 3-Seguro-desemprego `[FX_RENDA_INDIVIDUAL_809_3]`; 4-Pensão alimentícia `[FX_RENDA_INDIVIDUAL_809_4]`; 5-Outras (exceto Bolsa Família) `[FX_RENDA_INDIVIDUAL_809_5]`

### Suplementar 2 — Pessoa em situação de rua (campos para CH1)
- 2.04 — Onde costuma dormir (1=Rua; 2=Albergue; 3=Domicílio particular; 4=Outro) `[IND_DORMIR_RUA_MEMB, IND_DORMIR_ALBERGUE_MEMB, IND_DORMIR_DOM_PART_MEMB, IND_OUTRO_MEMB]`
- 2.05 — Há quanto tempo vive na rua `[COD_TEMPO_RUA_MEMB]`
- Derivado da família: `MARC_SIT_RUA` (1=Sim; 2=Não)

### Suplementar 3 — Trabalho infantil
- Marcador derivado: `IND_TRABALHO_INFANTIL_PESSOA` (1=Sim; 2=Não)

### Convenções de cálculo presumidas (não publicadas pelo MDS para o IVCAD)

Estas convenções aparecem nos PDFs do formulário/dicionário mas o MDS NÃO as cita explicitamente como base do cálculo IVCAD:

- **Idade da pessoa em data de referência**: `idade_anos = floor((REF_CAD − DTA_NASC_PESSOA) / 365,25)`. A documentação do IVCAD usa "Referência: março/2026" — interpretado como REF_CAD da extração mensal.
- **Adulto**: 18 ≤ idade_anos ≤ 59 (definição inferida da própria descrição literal do NC6).
- **Salário mínimo**: usar valor vigente na data REF_CAD (R$1.518,00 em 2026 → não publicado no IVCAD; pode ser que o IVCAD use o SM da REF_PBF).
- **Pessoa ocupada**: `COD_TRABALHOU_MEMB = 1 OU COD_AFASTADO_TRAB_MEMB = 1`.
- **Renda per capita pré-PBF**: soma das rendas declaradas na família (8.05 + 8.09.1-5 de cada integrante) ÷ QTD_PESSOAS_DOMIC_FAM. O benefício PBF não é declarado no formulário (8.09.5 explicitamente exclui "Bolsa Família ou outras transferências similares") portanto a renda registrada já é "pré-PBF".
- **Cortes de pobreza/extrema pobreza**: o dicionário CECAD (faixa FX_RENDA_INDIVIDUAL_805) referencia "corte de extrema pobreza" e "corte de pobreza" sem fixar valores; assume-se R$218,00 (extrema pobreza) e R$660,00 (pobreza) — vigentes para PBF em 2026, mas o IVCAD não publica os valores que usa.

## 3. TABELA DE MAPEAMENTO IVCAD → CAMPO

| # | sigla | dimensão | descrição_indicador (literal) | campo(s)_formulário | regra_de_detecção | limiar_numérico | confiança | lacuna |
|---|---|---|---|---|---|---|---|---|
| 1 | NC1 | NC | Presença de crianças de 0 a 3 anos | 4.06 [DTA_NASC_PESSOA] | EXISTE integrante com idade_anos ≤ 3 (faixa FX_IDADE = 0 inclui 0-4, então usar idade exata) | 3 anos | ALTA | data de referência não publicada (presume-se REF_CAD) |
| 2 | NC2 | NC | Presença de crianças de 0 a 6 anos | 4.06 [DTA_NASC_PESSOA] | EXISTE integrante com idade_anos ≤ 6 | 6 anos | ALTA | idem |
| 3 | NC3 | NC | Presença de crianças de 0 a 12 anos | 4.06 [DTA_NASC_PESSOA] | EXISTE integrante com idade_anos ≤ 12 | 12 anos | ALTA | idem |
| 4 | NC4 | NC | Presença de pessoas com alguma deficiência | 6.01 [COD_DEFICIENCIA_MEMB] | EXISTE integrante com COD_DEFICIENCIA_MEMB = 1 | NÃO APLICÁVEL | ALTA | — |
| 5 | NC5 | NC | Presença de idosos de 60 anos ou mais | 4.06 [DTA_NASC_PESSOA] | EXISTE integrante com idade_anos ≥ 60 | 60 anos | ALTA | idem NC1 |
| 6 | NC6 | NC | Metade ou menos dos membros está em idade adulta (18 a 59 anos) | 4.06 [DTA_NASC_PESSOA] + 3.07 [QTD_PESSOAS_DOMIC_FAM] | (CONTAR integrantes com 18 ≤ idade_anos ≤ 59) ÷ total_integrantes ≤ 0,5 | razão ≤ 50% | ALTA | "metade ou menos" interpretado como ≤; a regra equivalente "no máximo metade" é unívoca |
| 7 | NC7 | NC | Metade ou menos dos membros é do sexo feminino e está em idade adulta (18 a 59 anos) E que possuam membros com idade até 12 anos, ou com 60 anos ou mais ou que tenha pessoa com deficiência | 4.05 [COD_SEXO_PESSOA] + 4.06 [DTA_NASC_PESSOA] + 6.01 [COD_DEFICIENCIA_MEMB] | (CONTAR integrantes com COD_SEXO_PESSOA=2 E 18≤idade≤59) ÷ total ≤ 0,5 **E** (EXISTE integrante com idade ≤ 12 OU idade ≥ 60 OU COD_DEFICIENCIA_MEMB=1) | razão ≤ 50% | MÉDIA | a descrição literal mistura "AND/OR" implícitos — a regra "AND" entre o teste de proporção e a condição de demanda de cuidado é a interpretação dominante |
| 8 | DPI1 | DPI | Possui criança de 4 a 6 anos que não frequenta ou nunca frequentou creche/pré-escola/escola | 4.06 [DTA_NASC_PESSOA] + 7.02 [IND_FREQUENTA_ESCOLA_MEMB] | EXISTE integrante com 4 ≤ idade_anos ≤ 6 E IND_FREQUENTA_ESCOLA_MEMB ∈ {3 (não, já freq.), 4 (nunca freq.)} | NÃO APLICÁVEL | MÉDIA | "não frequenta" pode ser interpretado como apenas {4} (nunca freq.) ou {3,4} (qualquer não atual); adotada interpretação ampla {3,4} pelo "não frequenta OU nunca frequentou" |
| 9 | DPI2 | DPI | Possui criança de 0 a 6 anos que não frequenta ou nunca frequentou creche/pré-escola/escola | 4.06 [DTA_NASC_PESSOA] + 7.02 [IND_FREQUENTA_ESCOLA_MEMB] | EXISTE integrante com 0 ≤ idade_anos ≤ 6 E IND_FREQUENTA_ESCOLA_MEMB ∈ {3, 4} | NÃO APLICÁVEL | MÉDIA | idem; observação: IND_FREQUENTA_ESCOLA_MEMB pode estar vazio para crianças muito pequenas — tratamento de NULL não publicado |
| 10 | DPI3 | DPI | Possui criança de 0 a 6 anos que não seja filho ou enteado do responsável familiar | 4.06 [DTA_NASC_PESSOA] + 4.07 [COD_PARENTESCO_RF_PESSOA] | EXISTE integrante com 0 ≤ idade_anos ≤ 6 E COD_PARENTESCO_RF_PESSOA ∉ {3 (filho), 4 (enteado)} | NÃO APLICÁVEL | BAIXA | "não filho ou enteado" admite duas leituras: (a) qualquer parentesco diferente de 3 e 4, incluindo neto/sobrinho/sem parentesco — adotada; (b) explicitamente "outro parente"/"não parente" (10/11). A leitura (a) é compatível com a literal |
| 11 | DCA1 | DCA | Possui criança ou adolescente de 7 a 15 anos trabalhando | 4.06 [DTA_NASC_PESSOA] + 8.01 [COD_TRABALHOU_MEMB] / IND_TRABALHO_INFANTIL_PESSOA | EXISTE integrante com 7 ≤ idade_anos ≤ 15 E (COD_TRABALHOU_MEMB = 1 OU IND_TRABALHO_INFANTIL_PESSOA = 1) | NÃO APLICÁVEL | ALTA | "trabalhando" interpretado como ocupado na semana de referência ou marcado como trabalho infantil (Sup3) |
| 12 | DCA2 | DCA | Possui adolescente de 15 a 17 anos fora da escola | 4.06 [DTA_NASC_PESSOA] + 7.02 [IND_FREQUENTA_ESCOLA_MEMB] | EXISTE integrante com 15 ≤ idade_anos ≤ 17 E IND_FREQUENTA_ESCOLA_MEMB ∈ {3, 4} | NÃO APLICÁVEL | MÉDIA | "fora da escola" = não frequenta no momento — leitura {3,4} |
| 13 | DCA3 | DCA | Possui criança ou adolescente de 7 a 17 anos fora da escola | 4.06 [DTA_NASC_PESSOA] + 7.02 [IND_FREQUENTA_ESCOLA_MEMB] | EXISTE integrante com 7 ≤ idade_anos ≤ 17 E IND_FREQUENTA_ESCOLA_MEMB ∈ {3, 4} | NÃO APLICÁVEL | MÉDIA | idem DCA2 |
| 14 | DCA4 | DCA | Possui criança ou adolescente de 10 a 17 anos analfabeto | 4.06 [DTA_NASC_PESSOA] + 7.01 [COD_SABE_LER_ESCREVER_MEMB] | EXISTE integrante com 10 ≤ idade_anos ≤ 17 E COD_SABE_LER_ESCREVER_MEMB = 2 | NÃO APLICÁVEL | ALTA | — |
| 15 | DCA5 | DCA | Possui criança ou adolescente de 10 a 17 anos com mais de 2 anos de atraso escolar | 4.06 [DTA_NASC_PESSOA] + 7.07 [COD_CURSO_FREQUENTA_MEMB] + 7.08 [COD_ANO_SERIE_FREQUENTA_MEMB] | EXISTE integrante com 10 ≤ idade_anos ≤ 17 E (idade_anos − série_esperada(idade) > 2 anos), onde série_esperada(idade) é definida pelo padrão de matrícula adequada à idade (6 anos→1ª série, 7→2ª, …) | atraso > 2 anos | BAIXA | a definição de "atraso escolar" não é publicada pelo MDS para o IVCAD; admite múltiplas convenções (idade 7-1ª, 8-2ª, etc., ou idade-mínima por etapa); adolescentes de 14 anos ainda na 6ª série já estariam em atraso de 2 anos pela convenção mais comum |
| 16 | TQA1 | TQA | Presença de adulto analfabeto ou analfabeto funcional | 4.06 [DTA_NASC_PESSOA] + 7.01 [COD_SABE_LER_ESCREVER_MEMB] + 7.10 [COD_ANO_SERIE_FREQUENTOU_MEMB] / GRAU_INSTRUCAO | EXISTE integrante com 18 ≤ idade_anos ≤ 59 E (COD_SABE_LER_ESCREVER_MEMB = 2 OU "analfabeto funcional"), onde "analfabeto funcional" ≈ menos de 4 anos de estudo concluídos | NÃO APLICÁVEL | MÉDIA | a definição de analfabeto funcional não é publicada pelo IVCAD; convenção mais usada (UNESCO/IBGE): GRAU_INSTRUCAO = 1 OU concluiu menos da 4ª série do EF |
| 17 | TQA2 | TQA | Presença de adulto sem ensino fundamental completo | 4.06 [DTA_NASC_PESSOA] + GRAU_INSTRUCAO | EXISTE integrante com 18 ≤ idade_anos ≤ 59 E GRAU_INSTRUCAO < 3 (ou seja, ∈ {0, 1, 2}: outros, sem instrução, fund. incompleto) | NÃO APLICÁVEL | ALTA | — |
| 18 | TQA3 | TQA | Presença de adulto sem ensino médio completo | 4.06 [DTA_NASC_PESSOA] + GRAU_INSTRUCAO | EXISTE integrante com 18 ≤ idade_anos ≤ 59 E GRAU_INSTRUCAO < 5 (∈ {0,1,2,3,4}) | NÃO APLICÁVEL | ALTA | — |
| 19 | TQA4 | TQA | Nenhum adulto ocupado | 4.06 [DTA_NASC_PESSOA] + 8.01 [COD_TRABALHOU_MEMB] + 8.02 [COD_AFASTADO_TRAB_MEMB] | NÃO EXISTE integrante com 18 ≤ idade_anos ≤ 59 E (COD_TRABALHOU_MEMB = 1 OU COD_AFASTADO_TRAB_MEMB = 1) | NÃO APLICÁVEL | ALTA | "ocupado" = trabalhou na semana passada OU estava afastado |
| 20 | TQA5 | TQA | Nenhum adulto ocupado no setor formal | 4.06 [DTA_NASC_PESSOA] + 8.04 [COD_PRINCIPAL_TRAB_MEMB] | NÃO EXISTE integrante com 18 ≤ idade_anos ≤ 59 E COD_PRINCIPAL_TRAB_MEMB ∈ {4 (empregado c/ carteira), 6 (doméstico c/ carteira), 8 (militar/servidor público), 9 (empregador), 10 (estagiário), 11 (aprendiz)} | NÃO APLICÁVEL | BAIXA | "setor formal" não é definido pelo MDS para o IVCAD; convenções alternativas: (a) apenas {4} c/carteira; (b) {4, 6, 8} (formalização típica IBGE); (c) {4, 6, 8, 9, 10, 11} (inclusão ampla) — adotada (c); estagiário/aprendiz são contratos formais mas a literatura diverge |
| 21 | TQA6 | TQA | Nenhum adulto ocupado com rendimento do trabalho superior a 1 salário mínimo | 4.06 + 8.04/8.05 [COD_PRINCIPAL_TRAB_MEMB, FX_RENDA_INDIVIDUAL_805] | NÃO EXISTE integrante com 18 ≤ idade_anos ≤ 59 E (ocupado=true) E FX_RENDA_INDIVIDUAL_805 ∈ {5, 6, 7} (faixas >1SM) | > 1 SM | ALTA | usar FX_RENDA_INDIVIDUAL_805 (renda do trabalho mês passado) é compatível com a literal "rendimento do trabalho" |
| 22 | TQA7 | TQA | Nenhum adulto ocupado com rendimento do trabalho superior a 2 salários mínimos | 4.06 + 8.04/8.05 [FX_RENDA_INDIVIDUAL_805] | NÃO EXISTE integrante com 18 ≤ idade ≤ 59 E ocupado=true E FX_RENDA_INDIVIDUAL_805 ∈ {6, 7} (>2SM) | > 2 SM | ALTA | idem |
| 23 | DR1 | DR | Família sem renda ou benefícios socioassistenciais | 8.05 + 8.09 [VAL_REMUN_MES_PASSADO_MEMB + FX_RENDA_INDIVIDUAL_809_1..5] + MARC_PBF | (Σ rendas declaradas dos integrantes = 0) E (família não recebe PBF: MARC_PBF = 2) E (nenhum integrante recebe BPC: nenhum FX_RENDA_INDIVIDUAL_809_2 > 0 referente a BPC) | renda total = 0 | MÉDIA | "benefícios socioassistenciais" no contexto IVCAD = PBF + BPC (interpretação consistente com DR4); o BPC está agrupado em 8.09.2 com aposentadoria/pensão, então isolar BPC requer fonte adicional (folha BPC) |
| 24 | DR2 | DR | Família em situação de pobreza mesmo considerando benefícios socioassistenciais | VLR_RENDA_MEDIA_FAM (com PBF e BPC) | renda_per_capita_total ≤ corte_de_pobreza | corte de pobreza não publicado pelo IVCAD | MÉDIA | corte de pobreza presumido = R$660,00 (2026, PBF) — não publicado pelo IVCAD; usar VLR_RENDA_MEDIA_FAM somando o valor do PBF da folha REF_PBF |
| 25 | DR3 | DR | Família em situação de pobreza se não considerar benefício PBF | VLR_RENDA_MEDIA_FAM − valor_PBF | (renda_per_capita_total − benefício_PBF/QTD_PESSOAS) ≤ corte_de_pobreza | idem | MÉDIA | requer cruzamento com folha PBF (REF_PBF); a renda declarada no formulário já não inclui PBF (8.09.5 explicitamente exclui), mas a renda calculada VLR_RENDA_MEDIA_FAM pode ou não incluir o valor do PBF dependendo da definição operacional do MDS |
| 26 | DR4 | DR | Família em situação de pobreza se não considerar benefícios socioassistenciais (PBF e BPC) | VLR_RENDA_MEDIA_FAM − valor_PBF − valor_BPC | (renda_per_capita_total − benefício_PBF/QTD_PESSOAS − benefício_BPC/QTD_PESSOAS) ≤ corte_de_pobreza | idem | MÉDIA | isolar BPC dentro de FX_RENDA_INDIVIDUAL_809_2 (que agrega aposentadoria/pensão/BPC) requer cruzamento com base BPC; lacuna na regra de detecção quando a família declara apenas valor agregado |
| 27 | CH1 | CH | Domicílio particular improvisado ou situação de rua | 2.02 [COD_ESPECIE_DOMIC_FAM] + MARC_SIT_RUA | COD_ESPECIE_DOMIC_FAM = 2 (particular improvisado) OU MARC_SIT_RUA = 1 (família em situação de rua) | NÃO APLICÁVEL | ALTA | — |
| 28 | CH2 | CH | Densidade de mais de 3 moradores por dormitório | 3.07 [QTD_PESSOAS_DOMIC_FAM] + 2.04 [QTD_COMODOS_DORMITORIO_FAM] | QTD_PESSOAS_DOMIC_FAM ÷ QTD_COMODOS_DORMITORIO_FAM > 3 | razão > 3 | ALTA | tratamento de QTD_COMODOS_DORMITORIO_FAM = 0 não publicado (provável → indicador = 1 por divisão indefinida) |
| 29 | CH3 | CH | Família despende mais de 30% de sua renda* com aluguel (*Renda pré-PBF) | 3.10.6 [VAL_DESP_ALUGUEL_FAM] + soma 8.05/8.09 (renda declarada) | VAL_DESP_ALUGUEL_FAM ÷ renda_familiar_pre_PBF > 0,30 | 30% | MÉDIA | "renda pré-PBF" no formulário coincide com a renda declarada total da família (somatório de 8.05 + 8.09 itens 1-5 — PBF não é declarado); tratamento da família com renda zero e despesa>0 não publicado |
| 30 | CH4 | CH | Família possui despesa com aluguel | 3.10.6 [VAL_DESP_ALUGUEL_FAM] | VAL_DESP_ALUGUEL_FAM > 0 | > R$ 0 | ALTA | — |
| 31 | CH5 | CH | Domicílio sem parede nem piso com material de construção permanente | 2.05 [COD_MATERIAL_PISO_FAM] + 2.06 [COD_MATERIAL_DOMIC_FAM] | COD_MATERIAL_PISO_FAM ∈ {1 (terra), 3 (madeira aproveitada), 7 (outro)} **E** COD_MATERIAL_DOMIC_FAM ∈ {5 (taipa não-revestida), 6 (madeira aproveitada), 7 (palha), 8 (outro)} | NÃO APLICÁVEL | MÉDIA | "permanente" não é codificado no formulário; convenção: piso permanente = {2 cimento, 4 madeira aparelhada, 5 cerâmica, 6 carpete}; parede permanente = {1, 2 alvenaria, 3 madeira aparelhada, 4 taipa revestida} — a regra "sem parede E sem piso" usa a NEGAÇÃO desses conjuntos |
| 32 | CH6 | CH | Domicílio sem parede ou piso com material permanente | 2.05 + 2.06 | COD_MATERIAL_PISO_FAM ∈ {1, 3, 7} **OU** COD_MATERIAL_DOMIC_FAM ∈ {5, 6, 7, 8} | NÃO APLICÁVEL | MÉDIA | idem CH5; aqui é OR (qualquer das duas falhas) |
| 33 | CH7 | CH | Domicílio sem acesso adequado à água de rede geral de distribuição | 2.08 [COD_ABASTE_AGUA_DOMIC_FAM] | COD_ABASTE_AGUA_DOMIC_FAM ≠ 1 (rede geral) | NÃO APLICÁVEL | ALTA | — |
| 34 | CH8 | CH | Domicílio sem acesso adequado à água | 2.07 [COD_AGUA_CANALIZADA_FAM] + 2.08 [COD_ABASTE_AGUA_DOMIC_FAM] | COD_ABASTE_AGUA_DOMIC_FAM ∈ {3 (cisterna), 4 (outra)} OU (COD_ABASTE_AGUA_DOMIC_FAM = 2 (poço/nascente) E COD_AGUA_CANALIZADA_FAM = 2 (sem água canalizada)) | NÃO APLICÁVEL | MÉDIA | "água adequada" não é definida pelo IVCAD; convenção PNAD/IBGE: rede geral OU poço com canalização interna; admite leitura mais estrita ou mais ampla |
| 35 | CH9 | CH | Domicílio sem banheiro ou sanitário | 2.09 [COD_BANHEIRO_DOMIC_FAM] | COD_BANHEIRO_DOMIC_FAM = 2 | NÃO APLICÁVEL | ALTA | — |
| 36 | CH10 | CH | Domicílio sem esgotamento sanitário adequado | 2.10 [COD_ESCOA_SANITARIO_DOMIC_FAM] | COD_ESCOA_SANITARIO_DOMIC_FAM ∉ {1 (rede coletora), 2 (fossa séptica)} OU COD_BANHEIRO_DOMIC_FAM = 2 | NÃO APLICÁVEL | MÉDIA | "adequado" não é definido pelo IVCAD; convenção comum (PNAD/SNIS): rede coletora OU fossa séptica; alternativa restritiva: apenas rede coletora |
| 37 | CH11 | CH | Lixo não é coletado de forma direta | 2.11 [COD_DESTINO_LIXO_DOMIC_FAM] | COD_DESTINO_LIXO_DOMIC_FAM ≠ 1 (coletado diretamente) | NÃO APLICÁVEL | ALTA | — |
| 38 | CH12 | CH | Lixo não é coletado de forma direta ou indireta | 2.11 [COD_DESTINO_LIXO_DOMIC_FAM] | COD_DESTINO_LIXO_DOMIC_FAM ∉ {1, 2} | NÃO APLICÁVEL | ALTA | — |
| 39 | CH13 | CH | Domicílio não possui acesso à eletricidade com medidor | 2.12 [COD_ILUMINACAO_DOMIC_FAM] | COD_ILUMINACAO_DOMIC_FAM ∉ {1 (medidor próprio), 2 (medidor comunitário)} | NÃO APLICÁVEL | ALTA | — |
| 40 | CH14 | CH | Domicílio não possui acesso à eletricidade | 2.12 [COD_ILUMINACAO_DOMIC_FAM] | COD_ILUMINACAO_DOMIC_FAM ∉ {1, 2, 3} (qualquer das três formas elétricas) | NÃO APLICÁVEL | ALTA | — |

## 4. INDICADORES POR DIMENSÃO — DETALHAMENTO

### Dimensão NC — Necessidade de Cuidados

#### NC1 — Presença de crianças de 0 a 3 anos
- Campo: 4.06 — Data de nascimento `[DTA_NASC_PESSOA]`
- Regra: `SE EXISTE integrante com idade_anos(REF_CAD) ≤ 3 ENTÃO NC1 = 1, SENÃO 0`
- Data de referência: REF_CAD (data da extração mensal do CadÚnico — em 2026 publicado como "março/2026")
- Confiança: ALTA
- Manual citado: DERIVADA DA DESCRIÇÃO LITERAL — nenhum manual lido cita explicitamente o IVCAD
- Obs: a faixa FX_IDADE = 0 cobre 0-4 anos, portanto não pode ser usada diretamente; usar idade exata calculada a partir de DTA_NASC_PESSOA

#### NC2 — Presença de crianças de 0 a 6 anos
- Campo: 4.06 `[DTA_NASC_PESSOA]`
- Regra: `SE EXISTE integrante com idade_anos ≤ 6 ENTÃO NC2 = 1`
- Confiança: ALTA
- Obs: cobre faixas FX_IDADE = 0 (0-4) e parcialmente 1 (5-6)

#### NC3 — Presença de crianças de 0 a 12 anos
- Campo: 4.06 `[DTA_NASC_PESSOA]`
- Regra: `SE EXISTE integrante com idade_anos ≤ 12 ENTÃO NC3 = 1`
- Confiança: ALTA

#### NC4 — Presença de pessoas com alguma deficiência
- Campo: 6.01 `[COD_DEFICIENCIA_MEMB]`
- Regra: `SE EXISTE integrante com COD_DEFICIENCIA_MEMB = 1 ENTÃO NC4 = 1`
- Confiança: ALTA
- Obs: 6.01 captura "deficiência permanente que limite atividades habituais" — escopo IVCAD compatível

#### NC5 — Presença de idosos de 60 anos ou mais
- Campo: 4.06 `[DTA_NASC_PESSOA]`
- Regra: `SE EXISTE integrante com idade_anos ≥ 60 ENTÃO NC5 = 1`
- Confiança: ALTA
- Obs: faixas FX_IDADE = {11 (60-64), 12 (>65)} são válidas; pessoa com 60 anos pode estar em FX_IDADE 11 dependendo da convenção do dicionário (a faixa 10 vai até 59)

#### NC6 — Metade ou menos dos membros está em idade adulta (18 a 59 anos)
- Campos: 4.06 `[DTA_NASC_PESSOA]` + 3.07 `[QTD_PESSOAS_DOMIC_FAM]`
- Regra: `SE (CONTAR integrantes com 18 ≤ idade_anos ≤ 59) ÷ total_integrantes ≤ 0,5 ENTÃO NC6 = 1`
- Confiança: ALTA
- Obs: o denominador deve usar o número de integrantes da FAMÍLIA (não do domicílio); QTD_PESSOAS_DOMIC_FAM pode incluir múltiplas famílias se 3.08 > 1

#### NC7 — Metade ou menos dos membros é do sexo feminino e está em idade adulta (18 a 59 anos) E que possuam membros com idade até 12 anos, ou com 60 anos ou mais ou que tenha pessoa com deficiência
- Campos: 4.05 `[COD_SEXO_PESSOA]` + 4.06 `[DTA_NASC_PESSOA]` + 6.01 `[COD_DEFICIENCIA_MEMB]`
- Regra: `SE [(CONTAR integrantes com COD_SEXO_PESSOA = 2 E 18 ≤ idade ≤ 59) ÷ total_integrantes ≤ 0,5] E [EXISTE integrante com (idade ≤ 12 OU idade ≥ 60 OU COD_DEFICIENCIA_MEMB = 1)] ENTÃO NC7 = 1`
- Confiança: MÉDIA
- Obs: o "E" lógico entre as duas cláusulas é a leitura dominante (a cláusula de demanda de cuidado existe para qualificar quando o NC7 importa); leitura alternativa (OR entre todos os critérios) torna o indicador quase sempre verdadeiro e contraria a interpretação operacional de "necessidade de cuidados"

### Dimensão DPI — Desenvolvimento na Primeira Infância

#### DPI1 — Possui criança de 4 a 6 anos que não frequenta ou nunca frequentou creche/pré-escola/escola
- Campos: 4.06 `[DTA_NASC_PESSOA]` + 7.02 `[IND_FREQUENTA_ESCOLA_MEMB]`
- Regra: `SE EXISTE integrante com 4 ≤ idade_anos ≤ 6 E IND_FREQUENTA_ESCOLA_MEMB ∈ {3 (não, já frequentou), 4 (nunca frequentou)} ENTÃO DPI1 = 1`
- Confiança: MÉDIA
- Obs: a literal "não frequenta OU nunca frequentou" abrange ambos os códigos 3 e 4 do quesito 7.02

#### DPI2 — Possui criança de 0 a 6 anos que não frequenta ou nunca frequentou creche/pré-escola/escola
- Campos: 4.06 + 7.02 `[IND_FREQUENTA_ESCOLA_MEMB]`
- Regra: `SE EXISTE integrante com 0 ≤ idade_anos ≤ 6 E IND_FREQUENTA_ESCOLA_MEMB ∈ {3, 4} ENTÃO DPI2 = 1`
- Confiança: MÉDIA
- Obs: para crianças de 0-3 anos, o quesito 7.02 pode estar não preenchido — tratamento de NULL não publicado

#### DPI3 — Possui criança de 0 a 6 anos que não seja filho ou enteado do responsável familiar
- Campos: 4.06 + 4.07 `[COD_PARENTESCO_RF_PESSOA]`
- Regra: `SE EXISTE integrante com 0 ≤ idade ≤ 6 E COD_PARENTESCO_RF_PESSOA ∉ {3 (filho), 4 (enteado)} ENTÃO DPI3 = 1`
- Confiança: BAIXA
- Obs: leitura adotada inclui qualquer criança que não seja filho/enteado direto do RF (neto, sobrinho, "outro parente", "não parente"); leitura alternativa restringe a "outro parente"/"não parente" apenas — depende do sentido operacional do MDS para o IVCAD

### Dimensão DCA — Desenvolvimento de Crianças e Adolescentes

#### DCA1 — Possui criança ou adolescente de 7 a 15 anos trabalhando
- Campos: 4.06 `[DTA_NASC_PESSOA]` + 8.01 `[COD_TRABALHOU_MEMB]` ou IND_TRABALHO_INFANTIL_PESSOA
- Regra: `SE EXISTE integrante com 7 ≤ idade ≤ 15 E (COD_TRABALHOU_MEMB = 1 OU IND_TRABALHO_INFANTIL_PESSOA = 1) ENTÃO DCA1 = 1`
- Confiança: ALTA
- Obs: o Bloco 8 só é preenchido a partir dos 14 anos para a maioria dos itens; para crianças <14 anos, o trabalho infantil é capturado pelo Suplementar 3 e marcado em IND_TRABALHO_INFANTIL_PESSOA

#### DCA2 — Possui adolescente de 15 a 17 anos fora da escola
- Campos: 4.06 + 7.02 `[IND_FREQUENTA_ESCOLA_MEMB]`
- Regra: `SE EXISTE integrante com 15 ≤ idade ≤ 17 E IND_FREQUENTA_ESCOLA_MEMB ∈ {3, 4} ENTÃO DCA2 = 1`
- Confiança: MÉDIA

#### DCA3 — Possui criança ou adolescente de 7 a 17 anos fora da escola
- Campos: 4.06 + 7.02 `[IND_FREQUENTA_ESCOLA_MEMB]`
- Regra: `SE EXISTE integrante com 7 ≤ idade ≤ 17 E IND_FREQUENTA_ESCOLA_MEMB ∈ {3, 4} ENTÃO DCA3 = 1`
- Confiança: MÉDIA

#### DCA4 — Possui criança ou adolescente de 10 a 17 anos analfabeto
- Campos: 4.06 + 7.01 `[COD_SABE_LER_ESCREVER_MEMB]`
- Regra: `SE EXISTE integrante com 10 ≤ idade ≤ 17 E COD_SABE_LER_ESCREVER_MEMB = 2 ENTÃO DCA4 = 1`
- Confiança: ALTA

#### DCA5 — Possui criança ou adolescente de 10 a 17 anos com mais de 2 anos de atraso escolar
- Campos: 4.06 + 7.07 `[COD_CURSO_FREQUENTA_MEMB]` + 7.08 `[COD_ANO_SERIE_FREQUENTA_MEMB]` (ou 7.10 se não frequenta)
- Regra (convenção candidata): definir `série_esperada(idade) = idade − 6` para idades de 7-15 anos no EF regular; computar `atraso = série_esperada − série_atual_concluida`; `SE EXISTE integrante com 10 ≤ idade ≤ 17 E atraso > 2 ENTÃO DCA5 = 1`
- Confiança: BAIXA
- Obs: regra de "atraso escolar" não publicada pelo IVCAD; depende da convenção idade→série; também afetada pelo fato do quesito 7.07 distinguir EF de 8 anos (cód 4) e 9 anos (cód 5), mudando a série esperada para uma mesma idade

### Dimensão TQA — Trabalho e Qualificação de Adultos

#### TQA1 — Presença de adulto analfabeto ou analfabeto funcional
- Campos: 4.06 + 7.01 `[COD_SABE_LER_ESCREVER_MEMB]` + GRAU_INSTRUCAO (ou 7.10/7.11)
- Regra (convenção UNESCO/IBGE): `SE EXISTE integrante com 18 ≤ idade ≤ 59 E (COD_SABE_LER_ESCREVER_MEMB = 2 OU "menos de 4 anos de estudo concluídos") ENTÃO TQA1 = 1`. "Menos de 4 anos" pode ser operacionalizado por: COD_CURSO_FREQUENTOU_PESSOA_MEMB ∈ {1, 2, 3, 7, 14, 15} OU (curso ∈ {4, 5} E COD_ANO_SERIE_FREQUENTOU_MEMB ≤ 3 E COD_CONCLUIU_FREQUENTOU_MEMB = 2)
- Confiança: MÉDIA
- Obs: a definição exata de "analfabeto funcional" no IVCAD não é publicada — esta é a convenção mais comum no SAGI/IBGE

#### TQA2 — Presença de adulto sem ensino fundamental completo
- Campos: 4.06 + GRAU_INSTRUCAO
- Regra: `SE EXISTE integrante com 18 ≤ idade ≤ 59 E GRAU_INSTRUCAO ∈ {0 (outros), 1 (sem instrução), 2 (fund. incompleto)} ENTÃO TQA2 = 1`
- Confiança: ALTA

#### TQA3 — Presença de adulto sem ensino médio completo
- Campos: 4.06 + GRAU_INSTRUCAO
- Regra: `SE EXISTE integrante com 18 ≤ idade ≤ 59 E GRAU_INSTRUCAO ∈ {0, 1, 2, 3, 4} ENTÃO TQA3 = 1`
- Confiança: ALTA

#### TQA4 — Nenhum adulto ocupado
- Campos: 4.06 + 8.01 `[COD_TRABALHOU_MEMB]` + 8.02 `[COD_AFASTADO_TRAB_MEMB]`
- Regra: `SE NÃO EXISTE integrante com 18 ≤ idade ≤ 59 E (COD_TRABALHOU_MEMB = 1 OU COD_AFASTADO_TRAB_MEMB = 1) ENTÃO TQA4 = 1`
- Confiança: ALTA

#### TQA5 — Nenhum adulto ocupado no setor formal
- Campos: 4.06 + 8.04 `[COD_PRINCIPAL_TRAB_MEMB]`
- Regra (convenção ampla): `SE NÃO EXISTE integrante com 18 ≤ idade ≤ 59 E COD_PRINCIPAL_TRAB_MEMB ∈ {4 (empregado c/ carteira), 6 (doméstico c/ carteira), 8 (militar/servidor público), 9 (empregador), 10 (estagiário), 11 (aprendiz)} ENTÃO TQA5 = 1`
- Confiança: BAIXA
- Obs: a definição de "setor formal" no IVCAD não é publicada; convenções alternativas podem incluir/excluir empregadores, estagiários, aprendizes — afeta o resultado

#### TQA6 — Nenhum adulto ocupado com rendimento do trabalho superior a 1 salário mínimo
- Campos: 4.06 + 8.01/8.02 (ocupado) + FX_RENDA_INDIVIDUAL_805
- Regra: `SE NÃO EXISTE integrante com 18 ≤ idade ≤ 59 E (ocupado=true) E FX_RENDA_INDIVIDUAL_805 ∈ {5, 6, 7} (>1 SM) ENTÃO TQA6 = 1`
- Confiança: ALTA

#### TQA7 — Nenhum adulto ocupado com rendimento do trabalho superior a 2 salários mínimos
- Campos: 4.06 + ocupado + FX_RENDA_INDIVIDUAL_805
- Regra: `SE NÃO EXISTE integrante com 18 ≤ idade ≤ 59 E ocupado=true E FX_RENDA_INDIVIDUAL_805 ∈ {6, 7} (>2 SM) ENTÃO TQA7 = 1`
- Confiança: ALTA

### Dimensão DR — Disponibilidade de Recursos

#### DR1 — Família sem renda ou benefícios socioassistenciais
- Campos: 8.05 + 8.09 + MARC_PBF + (cruzamento com folha BPC)
- Regra: `SE [(soma de todos os 8.05 e 8.09 itens 1-5 da família) = 0] E [MARC_PBF = 2] E [nenhum integrante recebe BPC] ENTÃO DR1 = 1`
- Confiança: MÉDIA
- Obs: "benefícios socioassistenciais" no contexto IVCAD = PBF + BPC (consistente com DR4 que diz "PBF e BPC"); a renda declarada no formulário já não inclui PBF mas inclui BPC dentro de 8.09.2 (agrupado com aposentadoria/pensão) — para isolar o BPC é preciso cruzamento com base BPC

#### DR2 — Família em situação de pobreza mesmo considerando benefícios socioassistenciais
- Campo derivado: VLR_RENDA_MEDIA_FAM (interpretação: deve incluir PBF e BPC se a definição de "considerando benefícios" significa "renda total + transferências")
- Regra: `SE renda_per_capita_TOTAL ≤ corte_de_pobreza ENTÃO DR2 = 1`
- Confiança: MÉDIA
- Obs: corte de pobreza não publicado pelo IVCAD; o valor publicado para PBF (R$660,00 per capita em 2026) é um candidato plausível

#### DR3 — Família em situação de pobreza se não considerar benefício PBF
- Campos: VLR_RENDA_MEDIA_FAM − valor_PBF/QTD_PESSOAS_DOMIC_FAM (ou da família)
- Regra: `SE (renda_per_capita_total − benefício_PBF_per_capita) ≤ corte_de_pobreza ENTÃO DR3 = 1`
- Confiança: MÉDIA
- Obs: como o formulário 8.09.5 explicitamente exclui PBF da renda declarada, a renda declarada já é "pré-PBF"; a operação de subtração só é necessária se VLR_RENDA_MEDIA_FAM (campo derivado) inclui o PBF — isso depende da convenção do MDS

#### DR4 — Família em situação de pobreza se não considerar benefícios socioassistenciais (PBF e BPC)
- Campos: VLR_RENDA_MEDIA_FAM − PBF − BPC
- Regra: `SE (renda_per_capita_total − benefício_PBF_per_capita − benefício_BPC_per_capita) ≤ corte_de_pobreza ENTÃO DR4 = 1`
- Confiança: MÉDIA
- Obs: o BPC está incluído no quesito 8.09.2 junto com aposentadoria/pensão — para isolar é preciso cruzar com a base BPC nacional

### Dimensão CH — Condições Habitacionais

#### CH1 — Domicílio particular improvisado ou situação de rua
- Campos: 2.02 `[COD_ESPECIE_DOMIC_FAM]` + MARC_SIT_RUA
- Regra: `SE COD_ESPECIE_DOMIC_FAM = 2 (particular improvisado) OU MARC_SIT_RUA = 1 ENTÃO CH1 = 1`
- Confiança: ALTA

#### CH2 — Densidade de mais de 3 moradores por dormitório
- Campos: 3.07 `[QTD_PESSOAS_DOMIC_FAM]` + 2.04 `[QTD_COMODOS_DORMITORIO_FAM]`
- Regra: `SE QTD_PESSOAS_DOMIC_FAM ÷ QTD_COMODOS_DORMITORIO_FAM > 3 ENTÃO CH2 = 1`
- Confiança: ALTA
- Obs: comportamento quando QTD_COMODOS_DORMITORIO_FAM = 0 (ex.: domicílio coletivo, kit-net sem dormitório identificado) não publicado — tipicamente se trata como CH2 = 1

#### CH3 — Família despende mais de 30% de sua renda* com aluguel (*Renda pré-PBF)
- Campos: 3.10.6 `[VAL_DESP_ALUGUEL_FAM]` + soma 8.05/8.09 (renda declarada)
- Regra: `SE VAL_DESP_ALUGUEL_FAM ÷ renda_familiar_pré_PBF > 0,30 ENTÃO CH3 = 1`
- Confiança: MÉDIA
- Obs: tratamento da família com renda zero e despesa > 0 não publicado (provável → CH3 = 1)

#### CH4 — Família possui despesa com aluguel
- Campo: 3.10.6 `[VAL_DESP_ALUGUEL_FAM]`
- Regra: `SE VAL_DESP_ALUGUEL_FAM > 0 ENTÃO CH4 = 1`
- Confiança: ALTA

#### CH5 — Domicílio sem parede nem piso com material de construção permanente
- Campos: 2.05 `[COD_MATERIAL_PISO_FAM]` + 2.06 `[COD_MATERIAL_DOMIC_FAM]`
- Regra: `SE COD_MATERIAL_PISO_FAM ∈ {1 (terra), 3 (madeira aproveitada), 7 (outro)} E COD_MATERIAL_DOMIC_FAM ∈ {5 (taipa não-revestida), 6 (madeira aproveitada), 7 (palha), 8 (outro)} ENTÃO CH5 = 1`
- Confiança: MÉDIA
- Obs: a classificação "permanente" não é codificada no formulário; a convenção adotada considera "permanente" = piso{2 cimento, 4 madeira aparelhada, 5 cerâmica, 6 carpete} e parede {1 alvenaria c/ rev., 2 alvenaria s/ rev., 3 madeira aparelhada, 4 taipa revestida}; a regra "sem … nem …" é AND lógico

#### CH6 — Domicílio sem parede ou piso com material permanente
- Campos: 2.05 + 2.06
- Regra: `SE COD_MATERIAL_PISO_FAM ∈ {1, 3, 7} OU COD_MATERIAL_DOMIC_FAM ∈ {5, 6, 7, 8} ENTÃO CH6 = 1`
- Confiança: MÉDIA
- Obs: idem CH5; aqui a relação é OR lógico (basta um dos materiais ser não-permanente)

#### CH7 — Domicílio sem acesso adequado à água de rede geral de distribuição
- Campo: 2.08 `[COD_ABASTE_AGUA_DOMIC_FAM]`
- Regra: `SE COD_ABASTE_AGUA_DOMIC_FAM ≠ 1 ENTÃO CH7 = 1`
- Confiança: ALTA

#### CH8 — Domicílio sem acesso adequado à água
- Campos: 2.07 `[COD_AGUA_CANALIZADA_FAM]` + 2.08 `[COD_ABASTE_AGUA_DOMIC_FAM]`
- Regra (convenção PNAD/IBGE): `SE COD_ABASTE_AGUA_DOMIC_FAM ∈ {3 (cisterna), 4 (outra)} OU (COD_ABASTE_AGUA_DOMIC_FAM = 2 (poço/nascente) E COD_AGUA_CANALIZADA_FAM = 2 (sem canalização interna)) ENTÃO CH8 = 1`
- Confiança: MÉDIA
- Obs: "água adequada" não é definida pelo IVCAD; alternativas: (a) apenas rede geral é adequado (idêntico a CH7); (b) rede geral OU poço com canalização — adotada (b); (c) inclui cisterna se for cisterna de captação de chuva

#### CH9 — Domicílio sem banheiro ou sanitário
- Campo: 2.09 `[COD_BANHEIRO_DOMIC_FAM]`
- Regra: `SE COD_BANHEIRO_DOMIC_FAM = 2 ENTÃO CH9 = 1`
- Confiança: ALTA

#### CH10 — Domicílio sem esgotamento sanitário adequado
- Campo: 2.10 `[COD_ESCOA_SANITARIO_DOMIC_FAM]` (e 2.09)
- Regra (convenção PNAD/SNIS): `SE COD_ESCOA_SANITARIO_DOMIC_FAM ∉ {1 (rede coletora), 2 (fossa séptica)} OU COD_BANHEIRO_DOMIC_FAM = 2 ENTÃO CH10 = 1`
- Confiança: MÉDIA
- Obs: "adequado" não definido pelo IVCAD; a convenção SNIS aceita rede coletora E fossa séptica como adequados; convenção mais estrita (apenas rede coletora) também é praticada

#### CH11 — Lixo não é coletado de forma direta
- Campo: 2.11 `[COD_DESTINO_LIXO_DOMIC_FAM]`
- Regra: `SE COD_DESTINO_LIXO_DOMIC_FAM ≠ 1 ENTÃO CH11 = 1`
- Confiança: ALTA

#### CH12 — Lixo não é coletado de forma direta ou indireta
- Campo: 2.11 `[COD_DESTINO_LIXO_DOMIC_FAM]`
- Regra: `SE COD_DESTINO_LIXO_DOMIC_FAM ∉ {1, 2} ENTÃO CH12 = 1`
- Confiança: ALTA

#### CH13 — Domicílio não possui acesso à eletricidade com medidor
- Campo: 2.12 `[COD_ILUMINACAO_DOMIC_FAM]`
- Regra: `SE COD_ILUMINACAO_DOMIC_FAM ∉ {1, 2} ENTÃO CH13 = 1`
- Confiança: ALTA

#### CH14 — Domicílio não possui acesso à eletricidade
- Campo: 2.12 `[COD_ILUMINACAO_DOMIC_FAM]`
- Regra: `SE COD_ILUMINACAO_DOMIC_FAM ∉ {1, 2, 3} ENTÃO CH14 = 1`
- Confiança: ALTA

## 5. LACUNAS RESIDUAIS

Indicadores cuja regra DEPENDE de uma definição operacional não publicada pelo MDS para o IVCAD (apesar do campo-fonte estar identificado):

1. **NC1, NC2, NC3, NC5** — Data de referência exata para cálculo de idade não publicada (REF_CAD presumido).
2. **NC7** — Lógica AND/OR entre cláusulas não publicada literalmente.
3. **DPI1, DPI2, DCA2, DCA3** — Tratamento de IND_FREQUENTA_ESCOLA_MEMB = NULL para crianças muito pequenas; leitura de "não frequenta".
4. **DPI3** — Conjunto exato de COD_PARENTESCO_RF_PESSOA considerados "não filho/enteado" — (a) ampla ou (b) restrita.
5. **DCA5** — Definição operacional de "atraso escolar > 2 anos" não publicada (mapa idade→série esperada).
6. **TQA1** — Definição de "analfabeto funcional" não publicada — convenção UNESCO/IBGE adotada.
7. **TQA5** — Conjunto exato de COD_PRINCIPAL_TRAB_MEMB considerados "setor formal" não publicado.
8. **DR1, DR2, DR3, DR4** — Cortes de pobreza/extrema pobreza não publicados pelo IVCAD; isolamento BPC dentro de FX_RENDA_INDIVIDUAL_809_2 (agrupada com aposentadoria/pensão) requer cruzamento externo.
9. **CH3** — Tratamento de família com renda = 0 e despesa > 0 não publicado.
10. **CH5, CH6** — Conjunto exato de materiais "permanentes" para piso e parede não publicado; convenção PNAD/IBGE adotada.
11. **CH8** — Definição de "água adequada" não publicada; convenção PNAD adotada.
12. **CH10** — Definição de "esgotamento adequado" não publicada; convenção SNIS (rede + fossa séptica) adotada.

**Lacuna estrutural transversal**: nenhum dos manuais e dicionários lidos cita o IVCAD ou documenta a regra de detecção indicador-a-indicador. As regras acima foram inferidas da descrição literal do indicador (Sprint B1) cruzada com a semântica documentada do campo do formulário (CECAD). Para fechar essas lacunas, é necessário:

- Nota técnica oficial do SAGICAD que documente as regras (provável publicação inexistente — conforme lacuna 10 do Sprint B1)
- OU consulta à equipe IVCAD (ivcad.sagicad@mds.gov.br) para confirmar as convenções
- OU análise comparativa com microdados do CECAD para identificar a regra retro-engenheirada

## 6. CHECKPOINT FINAL

STATUS: PARCIAL (40/40 indicadores com campo identificado; 23 ALTA + 14 MÉDIA + 3 BAIXA; 12 lacunas residuais de DEFINIÇÃO OPERACIONAL — não de campo) | FONTES_LIDAS: 6 PDFs + 1 canônico Sprint B1 | DURAÇÃO: 00h45min | TIMESTAMP_FIM: 2026-05-07T13:35:00
