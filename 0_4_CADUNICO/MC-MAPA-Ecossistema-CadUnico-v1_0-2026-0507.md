---
título: MC-MAPA-Ecossistema-CadUnico-v1_0-2026-0507
sprint: B2 — Mapa do ecossistema CadÚnico
modo: Extração e síntese (read-only)
status: COMPLETO
fontes_lidas: 11 (1 PDF-mestre + 4 BPC + 3 normativos + 3 manuais)
programas_mapeados: 46
data_execução: 2026-05-07T18:02:12Z
duração: 01h07min
---

## 1. SUMÁRIO

Foram mapeados **46 programas federais** que utilizam o Cadastro Único como porta de entrada ou critério de elegibilidade, conforme lista oficial publicada pela SAGICAD/MDS em fevereiro de 2026 [Fonte: `_ ouro lista_de_programas_federais_usuarios_do_cadastro_fevereiro 2026.pdf`]. Os programas se distribuem em 8 tipos funcionais: transferência de renda (4), previdência/assistência (5, incluindo BPC, Auxílio-Inclusão, Facultativo Baixa Renda, Pensão especial órfãos feminicídio, Seguro-Defeso), tarifas sociais e isenções (8), habitação (3), educação (8), saúde (2), trabalho/qualificação (5), e benefícios setoriais diversos (11). Cinco programas têm **interface direta com a vertical previdenciária** do MC: BPC (operacionalizado pelo INSS, exige avaliação biopsicossocial análoga à do art. 20 §6º LOAS); Auxílio-Inclusão (50% do BPC, pago pelo INSS para PcD que ingressam no mercado de trabalho enquadrados como segurados RGPS/RPPS); Facultativo de Baixa Renda (categoria RGPS com alíquota reduzida de 5% do SM, exclusiva para famílias inscritas no CadÚnico); Pensão especial aos filhos órfãos por feminicídio (1 SM mensal pago pelo INSS); e Seguro-Defeso (pescador artesanal, MTE). Adicionalmente, a Portaria Interministerial MPS/MDS nº 30/2023 e a IN SAGICAD nº 1/2023 estabelecem a **interoperabilidade CNIS×CadÚnico** que povoa automaticamente dados de renda formal e benefícios previdenciários no Bloco 8 do formulário CadÚnico — cruzamento crítico que afeta a apuração de elegibilidade e o IVCAD-MC. O salário-mínimo de referência publicado é R$ 1.518 [Fonte: `BOLSA FAMÍLIA.pdf` e `CartilhaNoesBsicasdoCadastronico.pdf`], com limite de pobreza BF em R$ 218/pessoa/mês.

## 2. TABELA-MESTRE DE PROGRAMAS E BENEFÍCIOS

| # | programa | órgão_responsável | tipo | público_alvo | critério_cadúnico | valor_ou_benefício | condicionalidades | interface_previdenciária | fonte |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Acredita no Primeiro Passo | MDS | trabalho | Famílias em vulnerabilidade socioeconômica inscritas no CadÚnico | Inscrição no CadÚnico | Inclusão produtiva, qualificação, geração de renda | NÃO LOCALIZADO NA FONTE | NÃO | PDF ouro p.1 |
| 2 | AEPETI (Ação Estratégica do PETI) | MDS | trabalho/proteção | Crianças/adolescentes em trabalho infantil e suas famílias | Identificação no CadÚnico de situação de trabalho infantil | Articulação intersetorial; trabalho social com famílias e oferta de serviços socioeducativos | Identificação obrigatória de situações de trabalho infantil no CadÚnico (LOAS Art. 24-C §2º) | NÃO | PDF ouro p.1; LOAS Art. 24-C |
| 3 | Alimentação Escolar – PNAE | FNDE/MEC | educação/alimentação | Alunos da rede pública e entidades qualificadas | Atende rede pública independentemente do CadÚnico, mas atende escolas comunitárias e filantrópicas com perfil baixa renda | Refeições escolares; educação alimentar e nutricional | Frequência escolar (vínculo MEC) | NÃO | PDF ouro p.1 |
| 4 | Auxílio-Inclusão | MDS / INSS | previdência_assistência | PcD beneficiária do BPC que ingressar no mercado formal de trabalho | Inscrição atualizada no CadÚnico (LOAS Art. 26-A II) | 50% do BPC = ½ SM | Manter critérios do BPC (incluindo RFPC); enquadramento como segurado RGPS/RPPS; remuneração ≤ 2 SM | **SIM** — pago pelo INSS; suspende o BPC; exige enquadramento como segurado obrigatório do RGPS/RPPS | PDF ouro p.1; LOAS Art. 26-A a 26-H; AUXÍLIO ÍNCLUSÃO.pdf |
| 5 | Bolsa Família | MDS | transferência_renda | Famílias com renda mensal por pessoa ≤ R$ 218 | Inscrição no CadÚnico atualizada | Valor variável conforme tamanho/composição familiar (mínimo R$ 600/família; adicionais por criança/gestante) | Frequência escolar (educação); pré-natal e vacinação (saúde) | INDIRETA — DR3/DR4 do IVCAD usam linhas de pobreza COM e SEM PBF | PDF ouro p.1; BOLSA FAMÍLIA.pdf; cartilha p.10 |
| 6 | Bolsa Verde | MMA | transferência_renda/ambiental | Famílias em territórios tradicionais (Resex, Flona, PAE/PDS) inscritas no CadÚnico | Família em território tradicional + CadÚnico | R$ 600,00 a cada três meses (≈ R$ 200/mês) + assistência técnica | Compromisso com conservação ambiental, uso sustentável de recursos | NÃO | PDF ouro p.1 |
| 7 | Bolsas CEBAS-Educação | MEC | educação | Estudantes de baixa renda em entidades certificadas como CEBAS-Educação | Renda baixa (NÃO LOCALIZADO o limiar exato no PDF mestre) | Bolsas integrais ou parciais em entidades sem fins lucrativos | NÃO LOCALIZADO NA FONTE | NÃO | PDF ouro p.1 |
| 8 | BPC – Benefício de Prestação Continuada | MDS / INSS | previdência_assistência | Pessoa idosa (≥65 anos) ou PcD de qualquer idade | Inscrição atualizada no CadÚnico há ≤24 meses, CPF de todos os membros, biometria CIN/TSE/CNH (LOAS Art. 20 §12, §12-A) | 1 salário-mínimo mensal | Manter RFPC ≤ ¼ SM (até ½ SM com critérios ampliados Art. 20-B); revisão biopsicossocial a cada 2 anos; PcD não pode trabalhar (sob pena de suspensão Art. 21-A) | **SIM** — operacionalizado pelo INSS; avaliação biopsicossocial por médicos peritos e assistentes sociais (LOAS Art. 20 §6º); regras de não-acumulação com benefícios da seguridade social (Art. 20 §4º); suspensão por 24 meses sem atualização CadÚnico (Art. 21-B) | PDF ouro p.1; LOAS Art. 20–21-B; BPC.pdf; IO_Conjunta_SNAS-SECAD_BPC_CadastroUnico.pdf |
| 9 | BPC na Escola | MDS | educação/proteção | Crianças e adolescentes até 18 anos com deficiência beneficiários do BPC | Inscrição CadÚnico (decorre da elegibilidade BPC) | Acesso e permanência escolar; ações intersetoriais | Frequência escolar de PcD beneficiária do BPC | INDIRETA — vinculado ao público BPC (vertente previdenciária via INSS) | PDF ouro p.1 |
| 10 | Carteira do Idoso | MDS | tarifa_social/transporte | Pessoa idosa de famílias com RFPC até 2 SM (R$ 3.036,00) | Inscrição CadÚnico + RFPC ≤ 2 SM | Passagens gratuitas ou ≥50% desconto em transporte interestadual rodoviário/ferroviário/aquaviário | NÃO LOCALIZADO NA FONTE | NÃO | PDF ouro p.2; cartilha p.11 |
| 11 | Cestas de Alimentos | MDS | alimentação | Famílias em insegurança alimentar em municípios com emergência/calamidade (incluindo GPTE) | Inscrição CadÚnico (caráter emergencial e complementar) | Cestas de alimentos gratuitas | Caráter emergencial e complementar | NÃO | PDF ouro p.2 |
| 12 | Cisternas | MDS | habitação/água | Famílias de baixa renda na zona rural atingidas por seca | Inscrição CadÚnico | Acesso a água para consumo humano e produção | NÃO LOCALIZADO NA FONTE | NÃO | PDF ouro p.2 |
| 13 | CNH Social | Ministério dos Transportes | trabalho/gratuidade | Candidatos de baixa renda à habilitação | Inscrição CadÚnico (NÃO LOCALIZADO o limiar exato no PDF mestre) | Gratuidade das taxas e despesas de formação de condutor | NÃO LOCALIZADO NA FONTE | NÃO | PDF ouro p.2 |
| 14 | Créditos Instalação | INCRA | trabalho/agrário | Famílias assentadas da Reforma Agrária | Assentamento + CadÚnico (NÃO LOCALIZADO regra explícita) | Créditos para instalação e estruturação produtiva | NÃO LOCALIZADO NA FONTE | NÃO | PDF ouro p.2 |
| 15 | Digitaliza Brasil | ANATEL | gratuidade/inclusão_digital | Famílias de baixa renda inscritas no CadÚnico | Inscrição CadÚnico | Kit gratuito de conversão para TV digital | NÃO LOCALIZADO NA FONTE | NÃO | PDF ouro p.2 |
| 16 | Dignidade Menstrual | MS | saúde | Meninas, mulheres e pessoas que menstruam em situação de vulnerabilidade | Inscrição CadÚnico (NÃO LOCALIZADO regra exata no PDF mestre) | Distribuição gratuita de absorventes higiênicos | NÃO LOCALIZADO NA FONTE | NÃO | PDF ouro p.3 |
| 17 | Facultativo de Baixa Renda | INSS | previdência_assistência | Donas/donos de casa que se dedicam exclusivamente ao trabalho doméstico em sua residência, em famílias de baixa renda | Família de baixa renda (RFPC ≤ ½ SM) inscrita no CadÚnico | Contribuição reduzida ao RGPS de **5% do salário-mínimo**, com acesso aos benefícios da Previdência Social | Não exercer atividade remunerada; manutenção da inscrição no CadÚnico atualizada | **SIM** — categoria de segurado facultativo do RGPS com alíquota especial; validação operacional do CadÚnico para liberação das contribuições reduzidas (IN SAGICAD nº 1/2023, Art. 3º) | PDF ouro p.3; IN SAGICAD nº 1/2023 |
| 18 | Farmácia Popular | MS | saúde | Beneficiários do BF têm acesso gratuito; demais usuários SUS | Beneficiário do Bolsa Família (gratuidade total) | Medicamentos da APS gratuitos para BF | Vínculo com BF (e portanto com condicionalidades BF) | NÃO | PDF ouro p.3 |
| 19 | FIES Social | MEC | educação | Estudantes com renda familiar por pessoa ≤ ½ SM inscritos no CadÚnico | Inscrição CadÚnico + RFPC ≤ ½ SM | Reserva de 50% das vagas + financiamento de até 100% dos encargos educacionais do Fies | Permanência no curso (regras Fies) | NÃO | PDF ouro p.3 |
| 20 | Fomento Rural | MDS | trabalho/agrário | Famílias rurais em vulnerabilidade | Inscrição CadÚnico (NÃO LOCALIZADO regra exata no PDF mestre) | Recursos não reembolsáveis para estruturação de atividades produtivas | NÃO LOCALIZADO NA FONTE | NÃO | PDF ouro p.3 |
| 21 | Gás do Povo | MDS | gratuidade/energia | Famílias em situação de vulnerabilidade | Inscrição CadÚnico (NÃO LOCALIZADO regra exata no PDF mestre) | Gratuidade do botijão de gás de cozinha | NÃO LOCALIZADO NA FONTE | NÃO | PDF ouro p.3 |
| 22 | ID Jovem | SG/PR | gratuidade/cultura/transporte | Jovens 15–29 anos de famílias com RFPC até 2 SM (R$ 3.036,00) | Inscrição CadÚnico + RFPC ≤ 2 SM | Meia-entrada cultural/esportiva + reserva/desconto em transporte coletivo interestadual | NÃO LOCALIZADO NA FONTE | NÃO | PDF ouro p.3; cartilha p.11 |
| 23 | Internet Brasil | MCom | inclusão_digital/educação | Alunos da educação básica pública em famílias do CadÚnico | Aluno + família CadÚnico | Chip + pacote de dados | Matrícula na educação básica pública | NÃO | PDF ouro p.4 |
| 24 | Isenção de concursos públicos | MGI | isenção | Famílias de baixa renda (RFPC ≤ ½ SM ou renda familiar total ≤ 3 SM) inscritas no CadÚnico | Inscrição CadÚnico + critério de renda | Isenção de taxa de inscrição em concursos públicos federais | NÃO LOCALIZADO NA FONTE | NÃO | PDF ouro p.4; cartilha p.11 |
| 25 | Isenção de Pagamento de Taxas sobre Imóvel da União | MGI | isenção | Pessoas físicas inscritas no CadÚnico com renda familiar mensal ≤ 5 SM, responsáveis por apenas um imóvel da União administrado pela SPU e caracterizado como residencial | Inscrição CadÚnico + renda familiar ≤ 5 SM + único imóvel residencial da União | Isenção de foros, taxas de ocupação e laudêmios | Cumprimento das condições de uso do imóvel da União | NÃO | PDF ouro p.4 |
| 26 | Isenção do Enem | INEP | isenção/educação | Estudantes de famílias com RFPC ≤ ½ SM ou renda total ≤ 3 SM | Inscrição CadÚnico + critério de renda | Isenção de taxa de inscrição no ENEM | NÃO LOCALIZADO NA FONTE | NÃO | PDF ouro p.4; cartilha p.11 |
| 27 | Luz do Povo | MME | tarifa_social/energia | Famílias com renda mensal por pessoa entre ½ e 1 SM | Inscrição CadÚnico + ½ SM ≤ RFPC ≤ 1 SM | Isenção das quotas anuais da CDE para consumo até 120 kWh/mês | Consumo mensal ≤ 120 kWh; única unidade consumidora residencial | NÃO | PDF ouro p.5 |
| 28 | Luz para Todos | MME | habitação/energia | Comunidades vulneráveis sem acesso à energia, especialmente meio rural e Amazônia Legal | Inscrição CadÚnico (NÃO LOCALIZADO regra exata no PDF mestre) | Universalização do acesso à energia elétrica | NÃO LOCALIZADO NA FONTE | NÃO | PDF ouro p.5 |
| 29 | Minha Casa Minha Vida | MCID | habitação | Famílias de baixa renda (Faixa 1: renda mensal ≤ R$ 3.036,00 = 2 SM) | Inscrição CadÚnico + faixa de renda | Subsídios e financiamento para aquisição/produção/reforma de unidades habitacionais; regularização fundiária | Cumprimento de regras do contrato | NÃO | PDF ouro p.5; cartilha p.11 |
| 30 | PAA – Programa de Aquisição de Alimentos | MDS | alimentação/agrário | Agricultura familiar (fornecedores) e pessoas em insegurança alimentar (beneficiários) | DAP/CAF (fornecedores) + CadÚnico (beneficiários) | Compra pública de produtos da agricultura familiar e distribuição às pessoas em insegurança alimentar | NÃO LOCALIZADO NA FONTE | NÃO | PDF ouro p.5 |
| 31 | Passe Livre | ANTT | tarifa_social/transporte | PcD de baixa renda | Inscrição CadÚnico + comprovação PcD + baixa renda (NÃO LOCALIZADO o limiar exato no PDF mestre) | Passagens gratuitas em transporte interestadual rodoviário/ferroviário/aquaviário | NÃO LOCALIZADO NA FONTE | INDIRETA — perfil PcD de baixa renda se sobrepõe ao público BPC | PDF ouro p.6 |
| 32 | Pé-de-Meia | MEC | educação | Estudantes de baixa renda no ensino médio público | Matrícula no EM público + CadÚnico (NÃO LOCALIZADO regra exata no PDF mestre) | Incentivo financeiro-educacional na modalidade poupança | Matrícula e frequência escolar; aprovação | NÃO | PDF ouro p.6 |
| 33 | Pensão especial aos filhos órfãos em razão do crime de feminicídio | INSS | previdência_assistência | Filhos e dependentes menores de 18 anos órfãos por feminicídio | Atualização CadÚnico no CRAS | 1 salário-mínimo mensal | Manutenção da menoridade ou incapacidade civil | **SIM** — operacionalizado pelo INSS; CRAS auxilia atualização do CadÚnico | PDF ouro p.6 |
| 34 | PNAES – Assistência Estudantil | MEC | educação | Estudantes de baixa renda em IFES presenciais | Inscrição CadÚnico (perfil baixa renda) | Apoio à moradia, alimentação, transporte, saúde, inclusão digital, cultura, esporte, creche, apoio pedagógico | Permanência regular no curso de graduação | NÃO | PDF ouro p.6 |
| 35 | PNCF – Terra Brasil | MDA | trabalho/agrário | Trabalhadores rurais sem-terra ou com pouca terra | Inscrição CadÚnico (decorrente do perfil de baixa renda rural) | Financiamento para compra de imóvel rural + investimento em infraestrutura + ATER | NÃO LOCALIZADO NA FONTE | NÃO | PDF ouro p.7 |
| 36 | Primeira Infância no SUAS (Programa Criança Feliz) | MDS | proteção | Gestantes e famílias com crianças na primeira infância em vulnerabilidade | Inscrição CadÚnico | Visitas domiciliares planejadas + ações de proteção social no território | Aceite das visitas domiciliares; trabalho com equipes do SUAS | NÃO | PDF ouro p.7 |
| 37 | Projeto Dom Hélder Câmara | MDA | trabalho/agrário | População rural do Semiárido brasileiro | NÃO LOCALIZADO regra explícita no PDF mestre | Articulação de políticas de desenvolvimento rural sustentável; ATER | NÃO LOCALIZADO NA FONTE | NÃO | PDF ouro p.7 |
| 38 | Pró-Moradia | MCID | habitação | População de baixa renda (urbana) | NÃO LOCALIZADO regra exata no PDF mestre (financiamento via entes públicos) | Financiamento de Estados/Municípios/DF para urbanização, produção/aquisição habitacional, regularização fundiária | NÃO LOCALIZADO NA FONTE | NÃO | PDF ouro p.7 |
| 39 | Reforma Agrária | INCRA | trabalho/agrário | Famílias em distribuição de terras | NÃO LOCALIZADO regra exata no PDF mestre | Distribuição de terras; assentamentos | NÃO LOCALIZADO NA FONTE | NÃO | PDF ouro p.8 |
| 40 | Reserva de vagas do SISU | MEC | educação | População de baixa renda em IFES | Lei de Cotas + CadÚnico (NÃO LOCALIZADO regra exata no PDF mestre) | Reserva de vagas em IFES | Aprovação no SISU | NÃO | PDF ouro p.8 |
| 41 | Seguro-Defeso | MTE / MPA | previdência_assistência/trabalho | Pescadores artesanais profissionais | RGP (Registro Geral da Atividade Pesqueira) + CadÚnico | Compensação financeira (1 SM) durante o período de defeso | Comprovação de atividade pesqueira artesanal e do período de defeso | **SIM** — benefício previdenciário operacionalizado pelo INSS (lei 10.779/2003) | PDF ouro p.8 |
| 42 | Serviços socioassistenciais | MDS | proteção | Famílias em vulnerabilidade social (PAIF, PAEFI, Convivência e Fortalecimento de Vínculos) | Inscrição CadÚnico | Atendimento em CRAS/CREAS; acompanhamento familiar | Frequência aos serviços; vinculação ao SUAS | NÃO | PDF ouro p.8; LOAS Art. 24-A, 24-B |
| 43 | Siga Antenado | ANATEL | gratuidade/inclusão_digital | Famílias de baixa renda inscritas no CadÚnico | Inscrição CadÚnico | Kit gratuito de conversão para TV digital | NÃO LOCALIZADO NA FONTE | NÃO | PDF ouro p.8 |
| 44 | Tarifa Social de Água e Esgoto | Entidades reguladoras de saneamento infranacionais | tarifa_social | Famílias inscritas no CadÚnico com RFPC ≤ ½ SM, ou famílias com PcD ou pessoa idosa ≥65 anos beneficiária do BPC | Inscrição CadÚnico + RFPC ≤ ½ SM **OU** integrante PcD ou idoso 65+ beneficiário BPC | Desconto na conta de água e esgoto | Manutenção da elegibilidade; cadastro atualizado | INDIRETA — passarela explícita "beneficiário BPC" garante elegibilidade | PDF ouro p.8 |
| 45 | Tarifa Social de Energia Elétrica (TSEE) | ANEEL | tarifa_social | Famílias inscritas no CadÚnico com RFPC ≤ ½ SM, OU famílias com PcD/doença que requeira aparelho elétrico (renda mensal ≤ 3 SM), OU idosos 65+/PcD beneficiários do BPC | Inscrição CadÚnico atualizada nos últimos 2 anos + critério de renda OU vínculo BPC | **Nova regra (MPV 1.300/2025)**: 100% de desconto até 80 kWh/mês; sem desconto acima de 80 kWh. Concessão automática desde janeiro/2022 | Cadastro atualizado nos últimos 2 anos; única unidade consumidora residencial; endereço CadÚnico/BPC dentro da área da distribuidora | INDIRETA — passarela explícita "beneficiário BPC" garante elegibilidade | PDF ouro p.9; Tarifa Social — ANEEL.pdf; cartilha p.10 |
| 46 | Telefone Popular | ANATEL | tarifa_social/comunicação | Famílias de baixa renda usuárias de telefonia fixa | Inscrição CadÚnico | Tarifa reduzida para serviço de telefonia fixa | NÃO LOCALIZADO NA FONTE | NÃO | PDF ouro p.9 |

**Convenções da tabela:**
- "RFPC" = Renda Familiar Per Capita
- "SM" = Salário-Mínimo (referência publicada R$ 1.518; ½ SM = R$ 759; ¼ SM = R$ 379,50; 2 SM = R$ 3.036; 3 SM = R$ 4.554) [Fonte: cartilha p.10–11]
- "GPTE" = Grupos Populacionais Tradicionais e Específicos
- "NÃO LOCALIZADO NA FONTE" = informação não documentada nos arquivos lidos no Sprint B2 (consultar PDF do programa específico ou normativo do órgão titular)

## 3. DETALHAMENTO POR PROGRAMA (fichas individuais)

Fichas detalhadas para os programas com **interface previdenciária** ou com **valor monetário ≥ R$ 100/mês**.

### 3.1 Bolsa Família (BF)

- **Órgão responsável:** Ministério do Desenvolvimento e Assistência Social, Família e Combate à Fome (MDS) [Fonte: PDF ouro p.1]
- **Base legal:** Programa relançado em 2023 (Lei nº 14.601/2023 reestruturou a transferência); Decreto regulamentar publicado em 2023 [Fonte: NÃO LOCALIZADO o decreto/portaria específico nos arquivos lidos do Sprint B2]
- **Público-alvo:** Famílias em situação de pobreza com renda mensal por pessoa até R$ 218 [Fonte: BOLSA FAMÍLIA.pdf p.2]
- **Critério de elegibilidade CadÚnico:** "Em primeiro lugar, é preciso estar inscrito no Cadastro Único, com os dados corretos e atualizados. Esse cadastramento é feito em postos de atendimento da assistência social dos municípios, como os CRAS." [Fonte: BOLSA FAMÍLIA.pdf p.2]. Linha de pobreza: R$ 218/pessoa/mês.
- **Valor/benefício:** "modelo de benefício que considera o tamanho e as características familiares, aquelas com três ou mais pessoas passarão a receber mais do que uma pessoa que vive sozinha." [Fonte: BOLSA FAMÍLIA.pdf p.1]. Detalhamento do valor por composição familiar — NÃO LOCALIZADO NA FONTE (consultar Lei 14.601/2023 e regulamentação MDS).
- **Condicionalidades:** Saúde (pré-natal, vacinação) e educação (frequência escolar). [Fonte: cartilha p.10]
- **Interface com previdenciário:** **INDIRETA** — o BF é considerado no cálculo da renda familiar para fins de BPC (compõe a renda da família para BPC, mas o BPC pode ser acumulado com BF se a RFPC permanecer ≤ ¼ SM) [Fonte: BPC.pdf q.11]. No IVCAD, dois indicadores específicos (DR3 e DR4) calculam a pobreza COM e SEM o PBF.
- **Dimensões IVCAD-MC relacionadas:** **DR** (DR1 sem renda/benefícios; DR2 pobreza com benefícios; DR3 pobreza sem PBF; DR4 pobreza sem PBF e BPC) — endereçamento direto. **DCA** (condicionalidades educacionais), **DPI** (condicionalidades de pré-escola/saúde infantil), **NC** (composição familiar com crianças/idosos influencia valor adicional).
- **Fricções comuns do cidadão:** "mesmo inscrita no Cadastro Único, a família não entra imediatamente para o Bolsa Família. Todos os meses, o programa identifica, de forma automatizada, as famílias que serão incluídas" [Fonte: BOLSA FAMÍLIA.pdf p.2]. Atraso entre cadastramento e seleção; cadastro desatualizado bloqueia entrada.
- **Fonte:** BOLSA FAMÍLIA.pdf, cartilha noções básicas, PDF ouro p.1.

### 3.2 BPC – Benefício de Prestação Continuada

- **Órgão responsável:** Gestão pelo MDS via Secretaria Nacional de Benefícios Assistenciais (SNBA); operacionalização pelo INSS. [Fonte: BPC.pdf q.9]
- **Base legal:** "regulamentado pela Lei Orgânica da Assistência Social – LOAS (Lei nº 8.742, de 7 de dezembro de 1993) e pelo Decreto nº 6.214, de 26 de setembro de 2007" [Fonte: IO_Conjunta_SNAS-SECAD_BPC_CadastroUnico.pdf §1]. CadÚnico tornado obrigatório pelo Decreto nº 8.805/2016. LOAS Art. 20–21-B.
- **Público-alvo:** "pessoa idosa com idade igual ou superior a 65 anos e à pessoa com deficiência de qualquer idade que comprove, em ambos os casos, ser de família de baixa renda." [Fonte: BPC.pdf q.1]
- **Critério de elegibilidade CadÚnico:** Cinco requisitos cumulativos [Fonte: BPC.pdf q.2]:
  1. RFPC ≤ ¼ SM (pode ir até ½ SM com critérios ampliados do Art. 20-B LOAS — grau de deficiência, dependência, gastos médicos)
  2. Idade ≥ 65 anos OU deficiência verificada por avaliação biopsicossocial
  3. Inscrição atualizada do grupo familiar no CadÚnico, com CPF de todos os membros
  4. Registro biométrico na CIN ou, transitoriamente, no Título de Eleitor ou na CNH (LOAS Art. 20 §12-A)
  5. Residir no Brasil
- **Valor/benefício:** 1 salário-mínimo mensal. **Não paga 13º; não deixa pensão por morte.** [Fonte: BPC.pdf q.1]
- **Condicionalidades:** Cadastro no CadÚnico atualizado a cada 2 anos no máximo; biometria; revisão biopsicossocial periódica para PcD; PcD não pode trabalhar (Art. 21-A LOAS — sob pena de suspensão, exceto via Auxílio-Inclusão). [Fonte: BPC.pdf q.16; LOAS Art. 21-A, 21-B]
- **Interface com previdenciário:**
  - Operacionalizado pelo INSS via canais 135 / Meu INSS / APS
  - Avaliação biopsicossocial realizada por **médicos peritos e assistentes sociais do INSS** (LOAS Art. 20 §6º) — análoga em natureza à avaliação para benefícios previdenciários por incapacidade
  - **Não acumulável** com outros benefícios da seguridade social (aposentadoria, pensão previdenciária, seguro-desemprego), salvo assistência médica, pensão especial indenizatória e transferências de renda (LOAS Art. 20 §4º)
  - Bloqueio/suspensão automática se cadastro CadÚnico desatualizado >24 meses (LOAS Art. 21-B): 45 dias para municípios pequenos; 90 dias para médios/grandes/metrópoles >50k habitantes
  - Após dar entrada no INSS, **consulta automática ao CadÚnico via Portal CNIS** [Fonte: IO_Conjunta_SNAS-SECAD §5]
- **Dimensões IVCAD-MC relacionadas:** **NC** (NC4 PcD, NC5 idosos 60+), **DR** (DR1, DR2, DR4 pobreza considerando ou não BPC). Endereçamento direto.
- **Fricções comuns do cidadão:**
  - Cadastro desatualizado bloqueia/suspende benefício (Art. 21-B LOAS)
  - Avaliação biopsicossocial ainda concentrada em períodos de espera longos no INSS (NÃO LOCALIZADO o tempo médio nos arquivos lidos)
  - Famílias precisam preencher Formulário de Impossibilidade quando há dados atípicos (sem sobrenome, data zerada) ou pessoas sem RL constituído [Fonte: IO_Conjunta_SNAS-SECAD §4]
  - Mãe/pai como representante legal no INSS ≠ Representante Legal no CadÚnico — confusão recorrente [Fonte: IO_Conjunta_SNAS-SECAD §2.1]
  - PcD que entra no mercado de trabalho perde BPC, salvo ingresso simultâneo no Auxílio-Inclusão (Art. 21-A, 26-A LOAS)
- **Direitos correlatos automáticos do beneficiário BPC:** "Os beneficiários do BPC também têm direito à Tarifa Social de Energia Elétrica e à Tarifa Social de Água e Esgoto... Além disso, os beneficiários do BPC são públicos prioritários em diversas políticas públicas, como os serviços prestados pela Assistência Social nos CRAS, CREAS e centros-dia." [Fonte: BPC.pdf q.10]
- **Fonte:** BPC.pdf, IO_Conjunta_SNAS-SECAD_BPC_CadastroUnico.pdf, L8742compilado.pdf (LOAS), PDF ouro.

### 3.3 Auxílio-Inclusão

- **Órgão responsável:** Gestão MDS / SNBA; operacionalização INSS. [Fonte: AUXÍLIO ÍNCLUSÃO.pdf q.12]
- **Base legal:** Lei nº 13.146/2015 (Estatuto da Pessoa com Deficiência); regulamentado pela Lei nº 14.176/2021; concessão automática pela Lei nº 14.441/2022. LOAS Art. 26-A a 26-H. [Fonte: AUXÍLIO ÍNCLUSÃO.pdf q.11]
- **Público-alvo:** PcD moderada ou grave que recebe ou recebeu o BPC nos últimos 5 anos e passa a exercer atividade remunerada com renda ≤ 2 SM (LOAS Art. 26-A I). [Fonte: AUXÍLIO ÍNCLUSÃO.pdf q.2]
- **Critério de elegibilidade CadÚnico:** "Ter o cadastro atualizado no Cadastro Único" (LOAS Art. 26-A II). [Fonte: AUXÍLIO ÍNCLUSÃO.pdf q.2]
- **Valor/benefício:** 50% do BPC = ½ SM mensal (Art. 26-B LOAS). Não desconta contribuição; não gera 13º. [Fonte: AUXÍLIO ÍNCLUSÃO.pdf q.1, q.11]
- **Condicionalidades:**
  - Enquadramento como segurado obrigatório do RGPS ou filiado a RPPS (Art. 26-A I-b)
  - Remuneração ≤ 2 SM
  - Manutenção dos critérios de RFPC do BPC (Art. 26-A IV)
  - Inscrição regular no CPF
- **Interface com previdenciário:**
  - Pago pelo INSS (Art. 26-F LOAS)
  - Suspende o BPC durante o exercício da atividade remunerada (Art. 26-B §1º LOAS) — "Ao requerer o auxílio-inclusão, o beneficiário autorizará a suspensão do benefício de prestação continuada"
  - **Não acumulável** com BPC, aposentadorias, pensões, benefícios por incapacidade ou seguro-desemprego (Art. 26-C LOAS)
  - Concessão pode ser **automática** pelo INSS quando identifica acumulação BPC + atividade remunerada (Art. 26-B §2º). [Fonte: AUXÍLIO ÍNCLUSÃO.pdf q.4]
  - Restabelecimento do BPC dispensa nova avaliação biopsicossocial nos primeiros 2 anos (LOAS Art. 21-A §1º). [Fonte: AUXÍLIO ÍNCLUSÃO.pdf — nota final]
- **Dimensões IVCAD-MC relacionadas:** **NC** (NC4 PcD), **TQA** (TQA4 a TQA7 — adulto ocupado, formal, com renda >1 SM), **DR**.
- **Fricções comuns do cidadão:**
  - Frequente desconhecimento do direito ao Auxílio-Inclusão por parte do beneficiário BPC que conseguiu emprego (NÃO LOCALIZADO dado quantitativo nas fontes lidas)
  - Beneficiário sente que "perdeu o BPC" sem entender que pode requerer Auxílio-Inclusão
- **Fonte:** AUXÍLIO ÍNCLUSÃO.pdf, L8742compilado.pdf, PDF ouro.

### 3.4 Facultativo de Baixa Renda (INSS)

- **Órgão responsável:** Instituto Nacional do Seguro Social (INSS). [Fonte: PDF ouro p.3]
- **Base legal:** Lei 8.213/1991 (Lei de Benefícios da Previdência); Lei Complementar 142/2013; Lei nº 12.470/2011 (incluiu a alíquota de 5% para o segurado facultativo sem renda própria). NÃO LOCALIZADO o decreto/IN específica nos arquivos lidos do Sprint B2.
- **Público-alvo:** "segurados facultativos sem renda própria que se dedicam exclusivamente ao trabalho doméstico em sua residência (donas e donos de casa) e que são de famílias de baixa renda." [Fonte: PDF ouro p.3]
- **Critério de elegibilidade CadÚnico:** Família de baixa renda inscrita no CadÚnico (RFPC ≤ ½ SM por enquadramento como família de baixa renda — Decreto 11.016/2022 Art. 5º II).
- **Valor/benefício:** Contribuição reduzida ao RGPS de **5% do salário-mínimo** (R$ 75,90 sobre SM de R$ 1.518), com acesso aos benefícios da Previdência Social (aposentadoria por idade, salário-maternidade, auxílio-doença, pensão por morte, etc.) — exceto aposentadoria por tempo de contribuição. [Fonte: PDF ouro p.3]
- **Condicionalidades:**
  - Não exercer atividade remunerada
  - Dedicação exclusiva ao trabalho doméstico em sua residência
  - Manutenção da inscrição CadÚnico atualizada
- **Interface com previdenciário:**
  - **Categoria de segurado facultativo do RGPS** (vínculo direto INSS)
  - Validação operacional via CadÚnico — IN SAGICAD nº 1/2023 Art. 3º estabelece exceção explícita: as extrações da base do CadÚnico para programas usuários "não conterão os dados de renda individual preenchidos no Bloco 8, sendo estes substituídos por indicativo de faixa de renda individual", **com exceção do Programa Bolsa Família e da operação da validação das contribuições do Segurado Facultativo de Baixa Renda** [Fonte: IN1_SAGICAD_MDS p.2 Art. 3º]
  - O CadÚnico é, portanto, fonte de verdade que libera a alíquota especial — sem CadÚnico válido, o segurado paga a alíquota integral (20% ou 11%)
- **Dimensões IVCAD-MC relacionadas:** **TQA** (TQA4 nenhum adulto ocupado, TQA5 nenhum adulto formal — programa endereça a transição da informalidade para a contribuição previdenciária), **NC** (público feminino predominante adulto sem renda).
- **Fricções comuns do cidadão:**
  - Confusão entre as categorias de segurado (empregado, contribuinte individual, facultativo)
  - Necessidade de o cônjuge ter trabalho formal (regra clássica do facultativo de baixa renda) — NÃO LOCALIZADO essa regra explicitada nos arquivos lidos do Sprint B2
- **Fonte:** PDF ouro p.3; IN SAGICAD nº 1/2023.

### 3.5 Pensão especial aos filhos órfãos em razão do crime de feminicídio

- **Órgão responsável:** INSS. [Fonte: PDF ouro p.6]
- **Base legal:** NÃO LOCALIZADO no PDF ouro. Lei 14.717/2023 (instituiu a pensão especial) — NÃO LOCALIZADO o texto da lei nos arquivos lidos do Sprint B2.
- **Público-alvo:** "filhos e dependentes menores de 18 anos, que se tornaram órfãos em decorrência do feminicídio, tipificado no Código Penal." [Fonte: PDF ouro p.6]
- **Critério de elegibilidade CadÚnico:** Atualização cadastral via CRAS — "As famílias podem tirar dúvidas e receber apoio no processo nas unidades do INSS ou nos Centros de Referência de Assistência Social (CRAS), que também auxiliam na atualização do CadÚnico." [Fonte: PDF ouro p.6]
- **Valor/benefício:** 1 salário-mínimo mensal. [Fonte: PDF ouro p.6]
- **Condicionalidades:** Manutenção da menoridade ou incapacidade civil; provavelmente revisão periódica análoga ao BPC — NÃO LOCALIZADO regra específica nas fontes lidas.
- **Interface com previdenciário:**
  - **Operacionalizado pelo INSS** (canal de atendimento)
  - CRAS atua como porta de entrada e auxílio à atualização CadÚnico
- **Dimensões IVCAD-MC relacionadas:** **NC** (NC1 a NC3 crianças, NC6/NC7 desbalanço composição familiar/feminina), **DR** (transferência de renda).
- **Fricções comuns:** NÃO LOCALIZADO documentação específica.
- **Fonte:** PDF ouro p.6.

### 3.6 Seguro-Defeso (Pescador Artesanal)

- **Órgão responsável:** Ministério do Trabalho e Emprego (MTE) e Ministério da Pesca e Aquicultura (MPA); operacionalização INSS. [Fonte: PDF ouro p.8]
- **Base legal:** NÃO LOCALIZADO no PDF ouro. Lei 10.779/2003 — NÃO LOCALIZADO o texto da lei nos arquivos lidos do Sprint B2.
- **Público-alvo:** "pescadores artesanais profissionais durante os meses nos quais estão impedidos de exercer a profissão." [Fonte: PDF ouro p.8]
- **Critério de elegibilidade CadÚnico:** NÃO LOCALIZADO regra explícita no PDF mestre. Programa figura na lista oficial de usuários do CadÚnico.
- **Valor/benefício:** 1 SM mensal durante o período de defeso. [Fonte: NÃO LOCALIZADO o valor no PDF mestre — inferência da Lei 10.779/2003]
- **Condicionalidades:** Comprovação de atividade pesqueira artesanal; respeito ao período de defeso fixado pelo IBAMA.
- **Interface com previdenciário:**
  - "Não serão incorporadas no CadÚnico rendas advindas de seguro-desemprego ou seguro defeso" [Fonte: IN SAGICAD nº 1/2023 Art. 2º III] — regra de tratamento operacional na interoperabilidade CNIS×CadÚnico
  - Pago pelo INSS via mesmo canal de atendimento
- **Dimensões IVCAD-MC relacionadas:** **TQA** (renda do trabalho), **DR** (proteção em período de desemprego sazonal).
- **Fonte:** PDF ouro p.8; IN SAGICAD nº 1/2023.

### 3.7 Bolsa Verde

- **Órgão responsável:** Ministério do Meio Ambiente e Mudança do Clima (MMA). [Fonte: PDF ouro p.1]
- **Base legal:** NÃO LOCALIZADO nas fontes do Sprint B2 (Lei 12.512/2011 e regulamentação).
- **Público-alvo:** Famílias em territórios tradicionais (Resex, Flona, PAE/PDS) inscritas no CadÚnico. [Fonte: PDF ouro p.1]
- **Critério de elegibilidade CadÚnico:** Família em território tradicional + CadÚnico.
- **Valor/benefício:** "R$ 600,00 a cada três meses" (≈ R$ 200/mês). Adicional: assistência técnica e ações de conservação. [Fonte: PDF ouro p.1]
- **Condicionalidades:** Compromisso com conservação ambiental, uso sustentável de recursos naturais, proteção do território.
- **Interface com previdenciário:** NÃO.
- **Dimensões IVCAD-MC relacionadas:** **TQA** (renda do trabalho rural sustentável), **DR** (transferência), **CH** (territorialidade rural).
- **Fonte:** PDF ouro p.1.

### 3.8 Tarifa Social de Energia Elétrica (TSEE)

- **Órgão responsável:** ANEEL (regulação); distribuidoras (operação). [Fonte: PDF ouro p.9]
- **Base legal:** Lei nº 12.212/2010, Lei nº 10.438/2002, Portaria Interministerial MME/MS nº 630/2011, Resolução Normativa ANEEL nº 1.000/2021 (arts. 176 a 179 e 200), **MPV nº 1.300/2025** (alterou regra de desconto a partir de 5/7/2025). [Fonte: Tarifa Social — ANEEL.pdf]
- **Público-alvo:** Três entradas alternativas [Fonte: Tarifa Social — ANEEL.pdf]:
  1. Família CadÚnico com RFPC ≤ ½ SM
  2. Família CadÚnico com renda ≤ 3 SM com integrante em tratamento médico contínuo dependente de aparelhos elétricos
  3. Idoso 65+ ou PcD beneficiário do BPC (LOAS Arts. 20 e 21)
- **Critério de elegibilidade CadÚnico:** Inscrição CadÚnico atualizada nos últimos 2 anos; única unidade consumidora residencial; endereço CadÚnico/BPC localizado na área da distribuidora.
- **Valor/benefício:** **Nova regra (a partir de 05/07/2025):** 100% de desconto para consumo até 80 kWh/mês; sem desconto acima de 80 kWh. **Regra anterior (até 04/07/2025):** progressiva — 65% até 30 kWh, 40% de 31 a 100 kWh, 10% de 100 a 220 kWh; quilombolas/indígenas tinham 100% até 50 kWh. Famílias TSEE não pagam encargo CDE nem custeio Proinfa. [Fonte: Tarifa Social — ANEEL.pdf]
- **Condicionalidades:** Cadastro atualizado nos últimos 2 anos (verificado na concessão). Concessão automática desde janeiro/2022 (Lei nº 14.203/2021).
- **Interface com previdenciário:** **INDIRETA** — passarela explícita "beneficiário BPC" garante elegibilidade independentemente de renda CadÚnico.
- **Dimensões IVCAD-MC relacionadas:** **CH** (CH13/CH14 acesso à eletricidade), **DR** (alívio de despesa fixa).
- **Fricções comuns:** Cadastro desatualizado >2 anos suspende a TSEE; mudança de endereço sem atualização CadÚnico/INSS pode interromper o benefício.
- **Fonte:** Tarifa Social — ANEEL.pdf; PDF ouro p.9.

### 3.9 Tarifa Social de Água e Esgoto

- **Órgão responsável:** Entidades reguladoras de saneamento infranacionais (estaduais, municipais). [Fonte: PDF ouro p.8]
- **Base legal:** NÃO LOCALIZADO regulamentação específica nas fontes do Sprint B2 (Lei 14.026/2020 — Marco do Saneamento — instituiu a tarifa social como obrigatória).
- **Público-alvo:** Mesma lógica de TSEE — três entradas: RFPC ≤ ½ SM no CadÚnico, OU integrante PcD, OU idoso 65+ beneficiário do BPC. [Fonte: PDF ouro p.8]
- **Valor/benefício:** Desconto na conta de água e esgoto (NÃO LOCALIZADO o percentual exato no PDF mestre — varia por prestador estadual/municipal).
- **Interface com previdenciário:** **INDIRETA** — passarela explícita "beneficiário BPC" garante elegibilidade.
- **Dimensões IVCAD-MC relacionadas:** **CH** (CH7–CH10 água/esgoto), **DR**.
- **Fonte:** PDF ouro p.8.

### 3.10 Minha Casa Minha Vida (Faixa 1)

- **Órgão responsável:** Ministério das Cidades (MCID). [Fonte: PDF ouro p.5]
- **Base legal:** NÃO LOCALIZADO nas fontes do Sprint B2 (Lei 14.620/2023 reestruturou o programa).
- **Público-alvo:** Faixa 1 — famílias com renda mensal até R$ 3.036 (2 SM). [Fonte: cartilha p.11]
- **Valor/benefício:** Subsídios e financiamento para aquisição/produção/reforma habitacional; regularização fundiária; produção/reforma habitação rural. [Fonte: PDF ouro p.5]
- **Dimensões IVCAD-MC relacionadas:** **CH** (CH1 domicílio improvisado, CH3/CH4 aluguel, CH5/CH6 paredes/piso).
- **Fonte:** PDF ouro p.5; cartilha p.11.

### 3.11 Pé-de-Meia

- **Órgão responsável:** MEC. [Fonte: PDF ouro p.6]
- **Base legal:** NÃO LOCALIZADO nas fontes do Sprint B2 (Lei 14.818/2024).
- **Público-alvo:** Estudantes do ensino médio público, baixa renda. [Fonte: PDF ouro p.6]
- **Valor/benefício:** Incentivo financeiro-educacional na modalidade poupança (NÃO LOCALIZADO o valor exato nas fontes lidas — Lei 14.818/2024 institui R$ 200/mês de incentivo de matrícula + R$ 1.000 de incentivo de conclusão por ano + adicional Enem; NÃO LOCALIZADO confirmação no PDF mestre).
- **Dimensões IVCAD-MC relacionadas:** **DCA** (DCA2 evasão 15-17, DCA3 evasão 7-17, DCA5 atraso escolar), **TQA** (preparação para o trabalho).
- **Fonte:** PDF ouro p.6.

### 3.12 Carteira do Idoso

- **Órgão responsável:** MDS. [Fonte: PDF ouro p.2]
- **Base legal:** Estatuto do Idoso (Lei 10.741/2003) art. 40 — NÃO LOCALIZADO o texto na fonte.
- **Público-alvo:** Pessoa idosa em famílias com RFPC ≤ 2 SM (R$ 3.036) — para uso somente quando não comprovada por outras vias a baixa renda. [Fonte: cartilha p.11]
- **Valor/benefício:** Passagens gratuitas ou ≥50% desconto em transporte interestadual rodoviário, ferroviário e aquaviário. [Fonte: PDF ouro p.2]
- **Dimensões IVCAD-MC relacionadas:** **NC** (NC5 idosos 60+), **DR**.
- **Fonte:** PDF ouro p.2; cartilha p.11.

## 4. MAPA DE INTERFACE CADÚNICO × PREVIDENCIÁRIO

Esta seção é o coração do produto Φ₀-Triagem do MC: documenta as passarelas concretas entre as duas verticais.

### 4.1 BPC – Benefício de Prestação Continuada

**Natureza híbrida:** O BPC é um **benefício assistencial não-contributivo** (LOAS) operacionalizado pelo INSS (autarquia previdenciária) — apresenta-se ao cidadão pela mesma porta do mundo previdenciário, mas o regime jurídico é de Assistência Social.

**Pontos de contato com o previdenciário:**

1. **Avaliação biopsicossocial** (LOAS Art. 20 §6º): "composta por avaliação médica e avaliação social realizadas por médicos peritos e por assistentes sociais do Instituto Nacional de Seguro Social - INSS" — instrumento similar (mas não idêntico) ao usado para benefícios previdenciários por incapacidade. A LC 142/2013 trata de aposentadoria da PcD, com critério distinto (graus leve/moderado/grave) — interface conceitual relevante mas regimes separados.

2. **Regras de não-acumulação** (LOAS Art. 20 §4º): "O benefício de que trata este artigo não pode ser acumulado pelo beneficiário com qualquer outro no âmbito da seguridade social ou de outro regime, salvo os da assistência médica e da pensão especial de natureza indenizatória, bem como as transferências de renda".

3. **Renda da família para BPC** (LOAS Art. 20 §3º-A, §14): aposentadoria ou benefício previdenciário ≤ 1 SM pago a idoso 65+ ou PcD na mesma família **não é computada** no cálculo da RFPC para concessão de BPC a outro idoso/PcD. Isso é um vínculo direto entre o regime previdenciário (que paga o benefício ao primeiro membro) e o regime assistencial (que concede BPC ao segundo).

4. **CadÚnico como porta operacional do BPC** (Decreto 8.805/2016 + LOAS Art. 20 §12 + IO Conjunta SNAS-SECAD nº 1/2022): inscrição obrigatória; revisão a cada 2 anos; biometria CIN/TSE/CNH (Art. 20 §12-A); sem CadÚnico, o INSS não consegue analisar o requerimento — "Após dar entrada no pedido do benefício, o INSS consulta automaticamente os dados do Cadastro Único por meio do **Portal CNIS** para fins de análise do requerimento" [Fonte: IO_Conjunta_SNAS-SECAD §5].

5. **Ciclo bloqueio/suspensão** (LOAS Art. 21-B com redação da Lei 15.077/2024): cadastro desatualizado >24 meses → notificação → bloqueio em 30 dias → 45 dias para regularizar (município pequeno) ou 90 dias (médio/grande/metrópole >50k habitantes) → suspensão. Reativação via INSS "em até 48 horas" após cadastro [Fonte: IO_Conjunta_SNAS-SECAD §3.3].

### 4.2 Auxílio-Inclusão

**Vínculo direto:** O Auxílio-Inclusão é o **único benefício pago pelo INSS condicionado simultaneamente ao CadÚnico atualizado, ao histórico BPC e ao enquadramento como segurado obrigatório do RGPS/RPPS**.

- Quando a PcD beneficiária do BPC ingressa no mercado formal de trabalho:
  - O BPC é **suspenso** (não cessado — pode ser reativado em até 5 anos sem nova avaliação biopsicossocial)
  - É devido o Auxílio-Inclusão = ½ SM (50% do BPC)
  - A pessoa passa a ser segurado obrigatório do RGPS pelo vínculo formal de trabalho
- Concessão pode ser **automática** quando o INSS detecta acumulação BPC + atividade remunerada (Lei 14.441/2022 — Art. 26-B §2º LOAS).
- Período máximo de PcD aprendiz acumulando BPC + remuneração: 2 anos (Art. 21-A §2º LOAS).

### 4.3 Facultativo de Baixa Renda (RGPS)

**Vínculo direto e estrutural:** Categoria de segurado facultativo do RGPS criada pela Lei 12.470/2011 com alíquota reduzida de **5% do SM**, exclusivamente para "donas e donos de casa" sem renda própria de famílias de baixa renda **inscritas no CadÚnico**.

- O CadÚnico é **fonte de verdade que libera a alíquota especial** — o operador do INSS valida a contribuição reduzida contra a base do CadÚnico.
- A IN SAGICAD nº 1/2023 Art. 3º confirma esse cruzamento: as extrações da base CadÚnico para programas usuários "não conterão os dados de renda individual preenchidos no Bloco 8" (anonimizados em faixas), **com exceção do Programa Bolsa Família e da operação da validação das contribuições do Segurado Facultativo de Baixa Renda** — único caso, junto com BF, em que o CadÚnico libera dados de renda por pessoa para outro programa.
- Sem CadÚnico válido, o segurado paga 11% (carnê) ou 20% (Plano Normal). A migração de plano dentro do INSS é onerosa.

### 4.4 Pensão especial aos filhos órfãos por feminicídio

- Operacionalizada pelo INSS; o CRAS atua na atualização do CadÚnico [Fonte: PDF ouro p.6]. Lei 14.717/2023 — texto da lei NÃO LOCALIZADO nas fontes lidas do Sprint B2.
- Não acumulável com benefícios previdenciários na mesma cabeça? — NÃO LOCALIZADO regra de acumulação nas fontes lidas.

### 4.5 Seguro-Defeso

- Benefício previdenciário sazonal pago ao pescador artesanal pelo INSS (Lei 10.779/2003).
- A IN SAGICAD nº 1/2023 Art. 2º III determina que rendas de seguro-desemprego e **seguro-defeso NÃO sejam incorporadas ao CadÚnico** via interoperabilidade CNIS×CadÚnico — exclusão explícita para evitar penalização da família por uma renda sazonal e protetiva.

### 4.6 Aposentadoria Rural / Segurado Especial

- **NÃO LOCALIZADO nas fontes lidas do Sprint B2** referência operacional explícita do CadÚnico como instrumento de comprovação de atividade rural para fins previdenciários.
- Hipótese de fluxo (não confirmado): o Bloco 8 do CadÚnico inclui campo 8.03 "Esse trabalho principal foi na agricultura, criação de animais, pesca ou coleta (extração vegetal)?" [Fonte: IN SAGICAD nº 1/2023, Art. 2º Anexo I-A] — pode servir como evidência indireta de atividade rural, mas a comprovação previdenciária do segurado especial segue a Lei 8.213/1991 (Art. 11 VII e Art. 39) com instrumentos específicos (autodeclaração + corroboração documental) — relacionamento institucional não foi documentado nas fontes do Sprint B2.

### 4.7 Interoperabilidade estrutural CNIS×CadÚnico (Portaria Interministerial MPS/MDS nº 30/2023 + IN SAGICAD nº 1/2023)

**Esta é a passarela mais profunda entre as duas verticais e merece destaque próprio.**

- **Autorização legal:** Portaria Interministerial MPS/MDS nº 30/2023 autoriza a interoperabilidade de dados do CNIS e do CadÚnico, dispensa de Acordo de Cooperação Técnica, com fundamento na EC 103/2019, na LOAS Art. 6º-F §§3º e 4º, no Decreto 11.016/2022 e no Decreto 10.046/2019.
- **Mecânica operacional (IN SAGICAD nº 1/2023):**
  - Povoamento automático do **Bloco 8 — Trabalho e Remuneração** do formulário CadÚnico com dados de renda formal e benefícios previdenciários/assistenciais identificados no CNIS.
  - Substituição da renda CadÚnico pela do CNIS **somente quando a renda do CNIS for maior** que a registrada no CadÚnico (Art. 2º).
  - Campo 8.09 quesito 2 ("Aposentadoria, aposentadoria rural, pensão ou BPC/LOAS") é preenchido com o valor do benefício correspondente identificado no CNIS.
  - **Não povoamento** de seguro-desemprego e seguro-defeso (proteção de renda sazonal).
  - Povoamento **não altera a data de atualização cadastral** da família (preserva o relógio dos 24 meses).
  - RUF pode contestar via documentação (Art. 4º).
- **Implicação para o IVCAD-MC:**
  - Indicadores TQA5 (adulto formal), TQA6/TQA7 (renda >1 e >2 SM), DR1–DR4 (pobreza/extrema pobreza) podem ter o valor binário 0/1 alterado entre uma extração e outra **sem que a família tenha feito uma nova entrevista** — apenas pelo povoamento CNIS.
  - Famílias podem ter o BF/BPC/Tarifa Social bloqueados por renda CNIS atualizada acima do limite, mesmo sem alteração da renda real (ex.: vínculo formal de curtíssima duração que aparece como remuneração mensal cheia).

## 5. PROGRAMAS ESTADUAIS E MUNICIPAIS

NÃO LOCALIZADO nas fontes lidas do Sprint B2 listagem de programas estaduais ou municipais que utilizam o CadÚnico. As fontes consultadas se restringem aos programas federais. A Portaria MC nº 810/2022 prevê **utilização do CadÚnico por Estados, DF e Municípios** mediante adesão e termo de uso (Art. 1º e Cap. I), mas a relação de programas subnacionais não está consolidada no documento.

Pista: a Portaria MC nº 773/2022 trata da adesão dos entes federados ao CadÚnico (citada como referência cruzada na Portaria 810 e na IN SAGICAD nº 1/2023) — não foi lida no Sprint B2.

## 6. MAPA RESUMO: PROGRAMA × DIMENSÃO IVCAD-MC

Tabela cruzada — coração do produto Φ₀-Triagem do MC. Marcação ✓ indica atuação direta da política na dimensão; (✓) indica atuação indireta/parcial.

| # | Programa | NC | DPI | DCA | TQA | DR | CH |
|---|---|----|----|-----|-----|----|-----|
| 1 | Acredita no Primeiro Passo |  |  |  | ✓ | (✓) |  |
| 2 | AEPETI |  |  | ✓ |  |  |  |
| 3 | Alimentação Escolar – PNAE |  | (✓) | ✓ |  |  |  |
| 4 | Auxílio-Inclusão | ✓ |  |  | ✓ | ✓ |  |
| 5 | Bolsa Família | (✓) | ✓ | ✓ |  | ✓ |  |
| 6 | Bolsa Verde |  |  |  | ✓ | ✓ | (✓) |
| 7 | Bolsas CEBAS-Educação |  |  | ✓ |  |  |  |
| 8 | BPC | ✓ |  |  |  | ✓ |  |
| 9 | BPC na Escola | ✓ |  | ✓ |  |  |  |
| 10 | Carteira do Idoso | ✓ |  |  |  | (✓) |  |
| 11 | Cestas de Alimentos |  |  |  |  | ✓ |  |
| 12 | Cisternas |  |  |  |  |  | ✓ |
| 13 | CNH Social |  |  |  | ✓ |  |  |
| 14 | Créditos Instalação |  |  |  | ✓ | (✓) |  |
| 15 | Digitaliza Brasil |  |  |  |  |  | (✓) |
| 16 | Dignidade Menstrual | (✓) |  |  |  | (✓) |  |
| 17 | Facultativo de Baixa Renda | (✓) |  |  | ✓ | (✓) |  |
| 18 | Farmácia Popular |  |  |  |  | ✓ |  |
| 19 | FIES Social |  |  | ✓ | ✓ |  |  |
| 20 | Fomento Rural |  |  |  | ✓ | ✓ |  |
| 21 | Gás do Povo |  |  |  |  | ✓ |  |
| 22 | ID Jovem |  |  | ✓ |  | (✓) |  |
| 23 | Internet Brasil |  |  | ✓ |  |  | (✓) |
| 24 | Isenção de concursos públicos |  |  |  | ✓ |  |  |
| 25 | Isenção Taxas Imóvel da União |  |  |  |  | (✓) | ✓ |
| 26 | Isenção do Enem |  |  | ✓ |  |  |  |
| 27 | Luz do Povo |  |  |  |  | ✓ | ✓ |
| 28 | Luz para Todos |  |  |  |  |  | ✓ |
| 29 | Minha Casa Minha Vida |  |  |  |  |  | ✓ |
| 30 | PAA |  |  |  | ✓ | ✓ |  |
| 31 | Passe Livre | ✓ |  |  |  | (✓) |  |
| 32 | Pé-de-Meia |  |  | ✓ | (✓) |  |  |
| 33 | Pensão órfãos feminicídio | ✓ |  | ✓ |  | ✓ |  |
| 34 | PNAES – Assistência Estudantil |  |  | ✓ | (✓) |  |  |
| 35 | PNCF – Terra Brasil |  |  |  | ✓ |  | (✓) |
| 36 | Primeira Infância no SUAS |  | ✓ |  |  |  |  |
| 37 | Projeto Dom Hélder Câmara |  |  |  | ✓ | (✓) |  |
| 38 | Pró-Moradia |  |  |  |  |  | ✓ |
| 39 | Reforma Agrária |  |  |  | ✓ | (✓) | (✓) |
| 40 | Reserva de vagas do SISU |  |  | ✓ | (✓) |  |  |
| 41 | Seguro-Defeso |  |  |  | ✓ | ✓ |  |
| 42 | Serviços socioassistenciais | ✓ | ✓ | ✓ |  |  |  |
| 43 | Siga Antenado |  |  |  |  |  | (✓) |
| 44 | Tarifa Social de Água e Esgoto |  |  |  |  | ✓ | ✓ |
| 45 | Tarifa Social de Energia Elétrica (TSEE) |  |  |  |  | ✓ | ✓ |
| 46 | Telefone Popular |  |  |  |  | ✓ | (✓) |

**Sumário por dimensão (programas com atuação ✓ direta — exclui os indiretos):**

- **NC (Necessidade de Cuidados):** 8 programas (Auxílio-Inclusão, BPC, BPC na Escola, Carteira do Idoso, Passe Livre, Pensão órfãos feminicídio, Serviços socioassistenciais — PAIF, e indiretos como Dignidade Menstrual)
- **DPI (Desenvolvimento Primeira Infância):** 2 programas direto (Bolsa Família, Primeira Infância no SUAS, Serviços socioassistenciais) — **dimensão menos coberta no ecossistema federal direto**
- **DCA (Desenvolvimento Crianças e Adolescentes):** 11 programas (PNAE, AEPETI, Bolsa Família, BPC na Escola, Bolsas CEBAS, FIES Social, ID Jovem, Internet Brasil, Isenção do Enem, Pé-de-Meia, Pensão órfãos feminicídio, PNAES, Reserva SISU, Serviços socioassistenciais)
- **TQA (Trabalho e Qualificação de Adultos):** 12 programas (Acredita Primeiro Passo, Auxílio-Inclusão, Bolsa Verde, CNH Social, Créditos Instalação, Facultativo Baixa Renda, FIES Social, Fomento Rural, Isenção Concursos, PAA, PNCF Terra Brasil, Projeto Dom Hélder Câmara, Reforma Agrária, Seguro-Defeso)
- **DR (Disponibilidade de Recursos):** 13 programas — **maior cobertura** (Auxílio-Inclusão, Bolsa Família, Bolsa Verde, BPC, Cestas de Alimentos, Farmácia Popular, Fomento Rural, Gás do Povo, Luz do Povo, PAA, Pensão órfãos feminicídio, Seguro-Defeso, Tarifa Social Água, Tarifa Social Energia, Telefone Popular)
- **CH (Condições Habitacionais):** 9 programas (Cisternas, Isenção Taxas Imóvel União, Luz do Povo, Luz para Todos, MCMV, Pró-Moradia, Tarifa Social Água, Tarifa Social Energia)

**Insight estratégico para o produto Φ₀-Triagem do MC:**
- A **DPI (Primeira Infância)** é a dimensão mais subatendida pela rede federal de programas com porta CadÚnico — apenas o Programa Criança Feliz / Primeira Infância no SUAS é dedicado, e BF/PNAE atuam tangencialmente via condicionalidades. Família com alta vulnerabilidade DPI tem poucos "direitos não-acessados" listáveis pelo MC.
- **DR e TQA** são as dimensões com maior densidade de programas — nessas dimensões, o produto Φ₀ tem maior ganância marginal: muito programa, alta probabilidade de o cidadão estar deixando direitos na mesa.
- **NC** concentra a passarela com a vertical previdenciária do MC (BPC, Auxílio-Inclusão, Carteira do Idoso, Pensão órfãos feminicídio).

## 7. LACUNAS E OBSERVAÇÕES

1. **Valores monetários do Bolsa Família por composição familiar:** o PDF mestre informa apenas o teto de RFPC (R$ 218); a estrutura de adicionais (criança, gestante, primeira infância, etc.) e o piso por família (R$ 600 — referência da MPV de relançamento, NÃO LOCALIZADO no PDF mestre) precisam ser consultados na Lei 14.601/2023 e regulamentação MDS. **Crítico para o produto Φ₀.**
2. **Pé-de-Meia — valores e regras:** Lei 14.818/2024 define poupança escolar; valores por marco (matrícula, frequência, conclusão, Enem) NÃO LOCALIZADOS no PDF mestre.
3. **CNH Social — regras de elegibilidade:** PDF mestre não detalha o limiar de renda nem o procedimento operacional (a CNH Social tem operação descentralizada por DETRAN estadual, com filas e regras heterogêneas — provável fonte de fricção alta para o cidadão).
4. **Carteira do Idoso — quando o idoso já tem comprovação de baixa renda por outra via**, a Carteira é **dispensável** (Lei 10.741/2003 art. 40 §1º) — esse detalhe operacional NÃO LOCALIZADO no PDF mestre.
5. **Pensão especial órfãos feminicídio:** Lei 14.717/2023 NÃO LOCALIZADA nas fontes lidas. Regras de acumulação com pensão por morte (regime previdenciário) precisam ser confirmadas.
6. **Seguro-Defeso:** Lei 10.779/2003 NÃO LOCALIZADA nas fontes lidas. Período de defeso por espécie e UF — regulado pelo IBAMA, fora do escopo do CadÚnico.
7. **Aposentadoria Rural / Segurado Especial:** **lacuna documental significativa** — o CadÚnico potencialmente serve como evidência indireta (Bloco 8 campo 8.03), mas a documentação federativa (INSS) sobre o uso do CadÚnico para aposentadoria rural NÃO LOCALIZADA nas fontes lidas. **Lacuna importante para o produto Φ₀ se a vertical previdenciária do MC pretender atender ruralistas.**
8. **Programas estaduais e municipais** que usam CadÚnico (alimentação complementar estadual, programas habitacionais municipais, gratuidade em transporte municipal) — não consolidados em fonte federal. Provável demanda heterogênea por UF. Sprint subsequente do MC pode ter Sprint específico para cobrir capitais relevantes.
9. **Decreto regulamentar do BF (2023+) e Lei 14.601/2023** não foram lidos no Sprint B2. Confirmar valores e condicionalidades exatas via leitura desse texto.
10. **Bolsa Verde** — o PDF mestre cita "R$ 600 a cada três meses" como benefício atual (≈ R$ 200/mês), sem texto legal confirmado. Lei 12.512/2011 (versão antiga) foi revogada e o programa foi relançado; regulamentação atual NÃO LOCALIZADA nas fontes lidas.
11. **Telefone Popular** — programa figura no PDF mestre mas a referência apresentada é uma cartilha de 2008-era ("webarquivos/publicacao/bolsa_familia/Cartilhas/Cartilha_TelefonePopular.pdf"). Verificar se ainda está operacional — possível programa "zumbi" desabastecido na prática. **Sinal de alerta para o produto Φ₀**: não recomendar programa que pode estar inativo.
12. **Concessões automáticas vs. requerimento ativo:** TSEE e Auxílio-Inclusão têm concessão automática (com gatilho de detecção pela base do governo), enquanto Carteira do Idoso e ID Jovem requerem requerimento ativo. Essa fronteira é diretamente relevante para a triagem do MC: programa automático = "verifique se você está recebendo"; programa ativo = "você precisa requerer". O PDF mestre não diferencia esse status, NÃO LOCALIZADO mapa consolidado.
13. **Lista publicada em fevereiro/2026 vs. lista de abril/2025** (BIBLIOTECA): a versão antiga (`lista_de_programas_federais_usuarios_do_cadastro_abril_2025.pdf`) está disponível na pasta BIBLIOTECA — comparação programa-a-programa entre as duas versões NÃO REALIZADA neste Sprint, mas é ação útil para detectar programas que entraram (ex.: Gás do Povo, Luz do Povo são programas recentes — 2024/2025) ou saíram da lista oficial.
14. **Indicador IVCAD CH3** (família despende >30% da renda com aluguel) e os programas habitacionais — o cidadão com vulnerabilidade alta em CH3/CH4 deveria, pelo desenho federal, ser priorizado em MCMV, Pró-Moradia ou benefício eventual de aluguel social municipal — mas o critério de priorização interna desses programas NÃO LOCALIZADO nas fontes do Sprint B2.

## 8. CHECKPOINT FINAL

STATUS: COMPLETO | PROGRAMAS_MAPEADOS: 46 | FICHAS_DETALHADAS: 12 | FONTES_LIDAS: 11 | DURAÇÃO: 01h07min | TIMESTAMP_FIM: 2026-05-07T18:08:00Z
