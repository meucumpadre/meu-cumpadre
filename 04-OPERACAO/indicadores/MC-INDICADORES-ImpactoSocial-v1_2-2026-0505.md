# INDICADORES DE IMPACTO SOCIAL — v1.2
## Painel Institucional de Mensuração — Meu Cumpadre
### Blueprint de Mensuração em Fase Fundacional + Painel de Impacto Operacional + Modo Finep/FIP

---
doc_id: MC-INDICADORES-ImpactoSocial-v1_2-2026-0505
titulo: "Indicadores de Impacto Social — Painel Institucional MC v1.2"
versao: "1.2"
data: 2026-05-05
supersede: "MC-INDICADORES-ImpactoSocial-v1_1-2026-0504"
autor: Claude Opus 4.6 (co-fundador intelectual) × Alessandro de Souza Neves (Founder/CEO)
status: "v1.2 — MODO FINEP/FIP EXPANDIDO — Pesos dos Critérios + Matriz Cruzada"
classificacao: "INSTITUCIONAL — Uso estratégico irrestrito"
hierarquia: "Dignidade > Compliance > Viabilidade"
ancora_biblica: "Provérbios 31:8"
ancora_pcd: '"Nada sobre nós, sem nós" — CDPD art. 4º §3º (Decreto 6.949/2009)'
fase_empresa: "Fundação institucional + pré-operação em escala (Crisálida Z3)"
natureza_documento: "Blueprint de mensuração + Painel de impacto operacional + Modo Finep/FIP"
alteracao_material_v1_2: >
  Seção VII inteiramente expandida: pesos reconstruídos dos critérios de avaliação
  FINEP Tecnova IV (VII.3.1), Centelha fórmula M×I+E (VII.3.2), FIP IA BNDES/FINEP
  (VII.3.3) e BNDES Garagem com bônus PcD/IA (VII.3.4) — absorvidos da Parte III do
  MC-ESG-GRANDEZA-CaptacaoRecursos-v1_0-2026-0503. Nova tabela-síntese VII.4:
  Matriz Cruzada Indicador MC × Instrumento × Critério × Peso Estimado — vai direto
  da arquitetura do painel para o formulário do edital. Seções VII.3 e VII.4 da v1.1
  renumeradas para VII.5 e VII.6. XIII.3 atualizado com entregáveis de v1.2 e
  pendências redirecionadas para v1.3.
relacionados:
  - MC-ADR-007-CampoPrecificacao-v3_3-2026-0502
  - MC-CONCEITO-EssenciaDignidade-v1_0-2026-0503
  - MC-MANIFESTO-FomeDeDireito-v1_0-2026-0503
  - MC_MVP1_Tecnologia_Assistiva.md
  - MC-PRODUTO-Guardiao-Documentacao-Fundacional-v1_1-2026-0502
  - 0_INDICADORES_IVCAD_ODS.md
  - _MC-MANIFESTO-NovaOrdem-v1_0-2026-0427
  - MC-ESG-GRANDEZA-CaptacaoRecursos-v1_0-2026-0503
  - _Mapa_do_dinheiro_público_e_privado_para_tecnologia_assistiva_no_Brasil_2025-2026.md
  - RouterEthics_10_MeuCumpadre_Unificado_v3_0-2026-0421 (substituído pela v11.0 em curso)
proxima_revisao: "v1.3 pós-parecer Dra. Juliana Pereira de Melo (19/05/2026) + integração Router-Ethics 11.0"
---

> *"Abre a tua boca a favor do mudo, pelo direito de todos os desamparados."*
> — Provérbios 31:8

---

## PREÂMBULO — DECLARAÇÃO DE FASE E NATUREZA DO DOCUMENTO

### P.1 O que este documento é

Este documento é simultaneamente três artefatos integrados:

**(1) Blueprint de Mensuração em Fase Fundacional.** O Meu Cumpadre está em fase de fundação institucional e pré-operação em escala (Crisálida Z3). Não há base histórica de casos suficiente para gerar relatório de impacto ex post com séries temporais robustas. Este documento estabelece, antes da escala, a arquitetura de indicadores que evitará retrabalho metodológico e possibilitará auditoria futura.

**(2) Painel de Impacto Operacional.** Mesmo em fase fundacional, define como cada dado será coletado em cada interação, como alimentará automaticamente os indicadores-âncora, e quem é responsável por revisão, consolidação e reporte.

**(3) Modo Finep/FIP.** Camada de tradução entre a arquitetura própria e os critérios de avaliação de financiadores institucionais (FINEP Tecnova IV, FINEP Tecnologias Assistivas, BNDES Garagem, FIPs IA/GovTech), preservando a ontologia MC sem sacrificar legibilidade externa.

### P.2 O que este documento não é

Não é relatório de impacto ex post. Não é demonstração de resultados acumulados. Não é peça publicitária. Toda referência a marcos quantitativos futuros é projetiva e está identificada como meta por fase, não como dado realizado.

### P.3 Por que isto importa

Medir não é adorno: é parte constitutiva do produto MC. A arquitetura de dados e indicadores é desenhada antes da escala porque a missão exige que cada decisão arquitetônica seja auditável contra a hierarquia D > C > V. O destinatário primário deste documento é a própria consciência institucional do MC. Que seja, secundariamente, defensável diante de regulador, parecerista, avaliador ou investidor é consequência — não causa.

### P.4 Versionamento e selagem

| Campo | Valor |
|---|---|
| Versão | 1.2 |
| Substitui | v1.1 (04/05/2026) |
| Alteração material v1.2 | Seção VII expandida: pesos critérios Tecnova/Centelha/FIP IA/BNDES Garagem + Matriz Cruzada Indicador×Instrumento×Critério×Peso |
| Próxima revisão | v1.3 pós-parecer Dra. Juliana (19/05/2026) + integração Router-Ethics 11.0 |
| Validação externa programada | Análise crítica Perplexity (pós-selagem v1.2) |

---

## I. MOLDURA ONTOLÓGICA — A CONSTITUIÇÃO DO PAINEL

A moldura precede o indicador. Todo indicador deste painel deve ser derivável da moldura. Se não for derivável, não entra. Se contradisser, é descartado independente de sua utilidade tática.

### I.1 Hierarquia decisória inviolável

**Dignidade > Compliance > Viabilidade (D > C > V).** Nenhum indicador pode ser otimizado às custas da hierarquia. Se o indicador X pudesse ser maximizado restringindo atendimentos a perfis "fáceis" ou rejeitando casos complexos, a maximização viola D > C > V e é proibida. Esta vedação é estrutural.

### I.2 Linhagem filosófica

Kant (*Würde* — dignidade não precificável). Sen e Nussbaum (capability approach — direitos formais sem capacidades reais são vazios). Arendt (direito a ter direitos). Freire (pedagogia da autonomia). Honneth (reconhecimento como sujeito de direito). Provérbios 31:8 (defesa do mudo). CDPD art. 4º §3º ("nada sobre nós, sem nós").

A linhagem não é decoração — é a auditoria moral em forma de árvore de decisão. Quando um indicador é questionado, a pergunta correta não é "isso é mensurável?" mas "isso é derivável da linhagem?".

### I.3 Identidade ontológica do MC

**O MC é infraestrutura de simetria informacional para hipervulneráveis brasileiros.** Não é escritório de advocacia. Não é legaltech. Não é marketplace de advogados. É atividade-meio (CNAE 6201-5/01) que organiza, autentica e entrega a prova material que o cidadão já tinha mas não conseguia acionar.

**O MC é Tecnologia Assistiva nativa por ontologia, não por adequação retroativa.** Portaria Interministerial ME 10.321/2022 — Categoria 2 CAA (CODs 1.2.1, 1.2.2, 1.2.9), Categoria 3 Acessibilidade ao Computador (COD 1.3.17), Categoria 10 Comunicação para Surdos (COD 1.10.4). Base normativa: LBI (Lei 13.146/2015), CDPD (Decreto 6.949/2009 com status de emenda constitucional), PNTA (Decreto 10.645/2021).

### I.4 DNA PcD do CEO fundador

Alessandro de Souza Neves — PcD com deficiência intelectual registrada (CIN P0003, 05/06/2025). "O proponente é o problema resolvido." Ativo estratégico para captação institucional e compliance de quotas — uso em ocasiões convenientes e de nível estratégico do MC, nunca em campanhas externas. Princípio operacional inviolável: "Nada sobre nós, sem nós."

### I.5 Inversão Cósmica

O valor gerado fica com o vulnerável, não com o intermediário. Mesmas ferramentas do mercado — propósito oposto. Mercado retém 41% (modelo dominante) ou 61,5% (com Camada 7 holding precatório). MC absorve 6%. O cidadão fica com 94%. Esta não é diferença de eficiência — é diferença ontológica.

### I.6 Conceito operacional de dignidade

> *Dignidade, no intelecto do Meu Cumpadre, é a condição em que o cidadão pode exercer na prática o direito que a lei já lhe reconhece na teoria — sem depender de favor, sem assimetria que o impossibilite, e com processo que o trate como titular, não como suplicante.*

Toda métrica deste painel é derivada desta síntese. Se uma métrica não puder ser derivada dela, não pertence ao painel.

### I.7 Fome de Direito — a missão em uma frase

*"Não demos o peixe. Devolvemos o lago de peixes."* O MC não distribui benefício. Desfaz a assimetria informacional que mantém o direito represado. Cada dossiê selado é uma ponte sobre o fosso que o sistema cavou entre o direito formal e o direito operável.

---

## II. HIERARQUIA DOS INSTRUMENTOS DE VULNERABILIDADE

### II.1 Por que esta hierarquia importa

A v1.0 deste documento posicionava o IVS como instrumento primário e tratava o IVCAD como fonte secundária. Esta inversão era teoricamente coerente mas estrategicamente errada. O IVCAD é o instrumento de política pública do MDS — o mesmo aparato governamental que opera FINEP, BNDES Garagem e MCTI. Quando o MC reporta que atende famílias com IVCAD alto, está falando a língua nativa do avaliador do edital. Esta hierarquia v1.1 corrige a inversão.

### II.2 Os três instrumentos e suas funções

| Instrumento | Origem | Nível | O que mede | Função no painel MC |
|---|---|---|---|---|
| **IVCAD** | MDS (Wiki SAGI) | Família | Vulnerabilidade familiar — 40 indicadores em 6 dimensões | **PRIMÁRIO** — quem o MC serve |
| **IVS** | IPEA (Atlas Vulnerabilidade Social) | Município | Vulnerabilidade territorial — 16 indicadores em 3 dimensões | **COMPLEMENTAR** — onde o MC opera |
| **IDHM** | PNUD/IPEA (Atlas Desenvolvimento Humano) | Município | Desenvolvimento estrutural — 3 dimensões | **CONTEXTUAL** — trajetória do território |

### II.3 IVCAD como instrumento primário — fundamentação

**Alinhamento de fonte de dado.** O IVCAD usa os mesmos dados do CadÚnico que o MC já coleta operacionalmente como gate de elegibilidade do Φ₁c (R$ 1.500). Quando o cidadão apresenta a Folha Resumo, o MC já está dentro do universo IVCAD — não é cruzamento externo a construir, é dado que entra pela porta da frente.

**Alinhamento institucional.** O MDS (Ministério do Desenvolvimento e Assistência Social) opera o CadÚnico e produz o IVCAD. A FINEP é o braço de fomento do MCTI mas a interlocução para captação em tecnologia assistiva e impacto social hipervulnerável passa pelo aparato governamental que reconhece o IVCAD como instrumento próprio. Reportar em IVCAD é reportar na linguagem nativa do avaliador.

**Granularidade familiar (não territorial).** A vulnerabilidade do MC é familiar — Dona Zilda, Seu João, Hib001 são pessoas concretas com NIS específicos, não médias municipais. O IVCAD captura essa precisão; o IVS não.

**Cobertura das dimensões da hipervulnerabilidade MC.** As 6 dimensões do IVCAD (Necessidade de Cuidados, Desenvolvimento na Primeira Infância, Desenvolvimento de Crianças e Adolescentes, Trabalho e Qualificação de Adultos, Disponibilidade de Recursos, Condições Habitacionais) cobrem PcD, idoso 60+, criança 0-3, analfabetismo funcional, ausência de renda — exatamente as personas-âncora do MC.

### II.4 IVS como complemento territorial

O IVS continua sendo necessário porque responde uma pergunta diferente — *onde* o MC opera, não *quem* o MC serve. As duas perguntas são distintas e ambas importam. Um cidadão de IVCAD alto pode estar em município de IVS médio (família vulnerável em território com infraestrutura adequada) ou em município de IVS alto (família vulnerável em deserto institucional). A política pública trata os dois casos de forma diferente — e o MC também deve.

### II.5 IDHM como camada de contexto

O IDHM mede a trajetória histórica do território. Adiciona profundidade narrativa: município com IVS alto + IDHM baixo é deserto histórico estrutural; município com IVS alto + IDHM médio é território em transição. Esta nuance importa para FINEP/BNDES, onde impacto em território de baixo IDH tem peso de edital.

### II.6 A composição matemática — como os três se articulam

O conceito de hipervulnerabilidade adotado pelo MC é a sobreposição **geométrica** (não aritmética) de vulnerabilidades. Isto significa que vulnerabilidades não somam — multiplicam. Família em pobreza + idoso + zona rural não é "três vezes mais vulnerável" — é vulnerabilidade qualitativamente diferente, onde cada dimensão amplifica as outras.

A matemática do indicador composto reflete esta ontologia: combina IVS (território) e IVCAD (família) por **multiplicação**, não soma. A multiplicação amplifica quando ambas dimensões são altas e atenua quando uma é baixa — exatamente o comportamento da hipervulnerabilidade real.

---

## III. ARQUITETURA DO PAINEL — 4 PILARES + 4 LENTES

### III.1 Os 4 Pilares Verticais

Cada pilar mede uma grandeza distinta. Todos juntos descrevem o MC integralmente.

| Pilar | O que mede | Indicador-âncora | Geração |
|---|---|---|---|
| **D — Dignidade Operável** | A condição de o cidadão exercer o direito que a lei já lhe reconhece | IDD (Índice de Dignidade Desbloqueada) | 2ª (N≥150) |
| **A — Simetria Informacional** | A redução da assimetria entre cidadão e sistema | ISIP (Índice de Simetria Informacional Previdenciária) | 2ª (N≥150) |
| **S — Mudança Sistêmica** | A transformação do ecossistema judicial, regulatório e cultural | IMS (Índice de Mudança Sistêmica) | 2ª (N≥150) |
| **R — Regeneração Econômica** | A sustentabilidade financeira que financia a causa | CMD (Capital Morto Desbloqueado) + RSC-MC | 1ª — selado |

### III.2 As 4 Lentes Transversais

Cada lente atravessa os 4 pilares e responde uma pergunta diferente sobre o mesmo dado.

| Lente | Pergunta que responde | Frameworks externos com que dialoga |
|---|---|---|
| **TA — Tecnologia Assistiva** | Quanto deste output atende personas PcD/idosos/excluídos digitais? | Portaria 10.321/2022, LBI, CDPD, PNTA, eMAG, WCAG |
| **ODS — Desenvolvimento Sustentável** | Como este output contribui para metas globais? | ODS 1, 3, 8, 10, 16, 17 (UNDP SDG Impact Standards) |
| **VUL — Hipervulnerabilidade** | Em que perfil de vulnerabilidade familiar e territorial? | IVCAD-MDS, IVS-IPEA, IDHM-PNUD |
| **CMD — Inversão Cósmica** | Quanto Capital Morto este output desbloqueia versus quanto extrai? | Métrica MC original — sem framework externo equivalente |

### III.3 Propriedade estrutural do painel

Cada caso atendido pelo MC gera 1 ponto de dado que entra simultaneamente em 4 pilares × 4 lentes = 16 leituras. Um caso, 16 medições, zero retrabalho de coleta. Isto é o que torna o painel arquitetura, não dashboard. Esta propriedade só funciona se a coleta for embutida no fluxo natural de atendimento — não sobreposta a ele.

---

## IV. OS 7 INDICADORES — DEFINIÇÃO, EQUAÇÃO, COLETA

### IV.1 Geração 1 — Indicadores Ativos (coleta imediata, reporte a partir de N≥30)

---

#### IV.1.1 — CMD: Capital Morto Desbloqueado

**Definição.** Volume de renda previdenciária, em reais, que o MC ativa para cidadãos previamente excluídos por barreiras documentais, digitais, geográficas ou por predação dos intermediários.

**Por que importa.** CMD é a North Star do ecossistema. Não é ARR. ARR mede o que a empresa extrai. CMD mede o que a empresa devolve. A diferença entre os dois é R$ 22-35 bilhões por ano no mercado previdenciário brasileiro (estimativa MC-ESTUDO Custo Sistêmico).

**Equação.**

```
CMD = Σ (benefícios concedidos no período × valor mensal do benefício)
    + retroativos efetivamente pagos no período
    − [ZERO captura sobre esse valor pelo MC]
```

**Denominador.** Zero. O MC não captura percentual sobre o CMD. O Φ₁ rastreia custo e complexidade, nunca o valor desbloqueado. Um dossiê de R$ 3.000 e um de R$ 150.000 custam o mesmo se têm complexidade idêntica. Isto é a Inversão Cósmica em equação.

**Ratio derivado — CMD/CapEx.** Para cada R$ 1 que o MC consome em operação (OPEX + CapEx), quantos R$ de benefício são restituídos ao cidadão hipervulnerável? Substitui o ROI convencional em pitches de investidor de impacto.

**Campo de coleta.** ClickUp — campo automático no fechamento de E6 (Resolução). Valor do benefício mensal + valor do retroativo, quando concedido.

**Cadência.** Mensal (acumulado) + anual (série histórica).

**Alinhamento ODS.** ODS 1.3 (sistemas de proteção social), ODS 10.2 (inclusão).

**Status.** SELADO. Data point inaugural: caso Hib001 (Hib001, NB [NB · REDIGIDO]).

---

#### IV.1.2 — IPH-MC: Índice de Penetração em Hipervulnerabilidade

> Substitui e expande o ICP-MC da v1.0. Indicador composto IVS × IVCAD que captura a sobreposição geométrica de vulnerabilidade territorial e familiar.

**Definição.** Indicador composto que combina vulnerabilidade territorial (IVS-IPEA) com vulnerabilidade familiar (IVCAD-MDS) para mensurar a penetração efetiva do MC em populações hipervulneráveis — onde a hipervulnerabilidade é conceituada como sobreposição geométrica (não aritmética) de vulnerabilidades.

**Por que importa.** Este indicador é a prova de endereço do MC simultaneamente no mapa territorial da exclusão (IVS) e no perfil familiar de vulnerabilidade (IVCAD). Todo player previdenciário pode dizer que "atende vulneráveis" — narrativa. Nenhum tem o cruzamento território × família que prova onde, geograficamente, a operação acontece e quem, familiarmente, é atendido. O IPH-MC transforma narrativa em coordenada bidimensional verificável.

**Equação.**

```
IPH-MC = Σ (IVS_caso × IVCAD_caso) ÷ N
```

Onde:
- IVS_caso = IVS do município de residência do cidadão (via CEP → tabela DNE Correios → Atlas IPEA)
- IVCAD_caso = IVCAD da família do cidadão (via NIS → Wiki SAGI MDS)
- N = total de casos atendidos no período
- Ambos os componentes em escala 0-1

**Justificativa da multiplicação (não soma).** A hipervulnerabilidade na ontologia MC é geométrica — vulnerabilidades amplificam-se mutuamente. A multiplicação reflete essa amplificação: família com IVCAD alto em território com IVS alto produz produto alto; mas família com IVCAD alto em território com IVS baixo produz produto atenuado. Esta matemática é fiel à realidade operacional.

**Thresholds operacionais.**

| Faixa IPH-MC | Classificação | Significado |
|---|---|---|
| 0,00 — 0,15 | Vulnerabilidade ordinária | Fora do núcleo de missão MC |
| 0,16 — 0,24 | Hipervulnerabilidade verificada | Núcleo de missão MC (ambas dimensões ≥ 0,4) |
| 0,25 — 0,49 | Hipervulnerabilidade severa | Núcleo prioritário (ambas dimensões ≥ 0,5) |
| ≥ 0,50 | Hipervulnerabilidade extrema | Núcleo crítico — atenção obrigatória da Human API |

Threshold de núcleo de missão: IPH-MC ≥ 0,16. Meta institucional: ≥ 70% dos casos atendidos no núcleo de missão ou superior.

**Cadeia de dados.**

```
[CEP 8 dígitos] → DNE Correios → [município] → Atlas Vulnerabilidade Social IPEA → [IVS]
                                                                                       ↓
                                                                                 IVS_caso (0-1)
                                                                                       ↓
[NIS família]   → Wiki SAGI MDS → [IVCAD família]                                      ↓
                                                                                  IVCAD_caso (0-1)
                                                                                       ↓
                                                                              IPH_caso = IVS × IVCAD
```

**Campo de coleta no ClickUp.**
- CEP (8 dígitos) — campo fixo, permanente, já implementado.
- NIS familiar — campo a implementar. Coletado quando cidadão apresenta Folha Resumo CadÚnico (que já é gate operacional do Φ₁c).

**Cadência.** Trimestral + anual.

**Alinhamento ODS.** ODS 1.2 (reduzir proporção em pobreza multidimensional), ODS 10.2 (inclusão), ODS 16.3 (acesso à justiça).

**Nota crítica — irreversibilidade da coleta.** CEP e NIS não têm retroativo. Cada caso sem CEP é uma coordenada territorial perdida; cada caso sem NIS (quando aplicável) é um perfil familiar perdido. Coleta sistemática a partir de E1 é ação inegociável.

**Status.** SELADO. Componente CEP ativo no ClickUp; componente NIS a implementar.

---

#### IV.1.3 — TPA-MC: Taxa de Primeiro Acesso

**Definição.** Proporção de cidadãos atendidos pelo MC que nunca procuraram nenhum outro serviço de organização de direitos previdenciários antes — advogado, despachante, sindicato, associação, ONG ou qualquer ponto de orientação sobre o benefício em questão.

**Por que importa.** Prova adicionalidade. O avaliador FINEP/BNDES e o investidor de impacto precisam saber se o MC criou acesso novo ou apenas deslocou acesso pré-existente. Adicionalidade é critério-âncora de edital de impacto social — sem ela, o MC compete por usuário com mercado existente; com ela, o MC inclui quem o mercado nunca alcançou.

**Equação.**

```
TPA-MC = nº de casos com resposta "não" à pergunta de Primeiro Acesso
       ÷ total de casos com resposta válida no período
```

**Pergunta operacional (E1, aplicada por Beto no acolhimento).**

> *"Antes de chegar até a gente, o(a) senhor(a) chegou a procurar algum advogado, despachante, sindicato ou alguém para ajudar com esse benefício?"*

Resposta binária: sim/não. Custo de coleta: zero.

**Campo de coleta.** ClickUp — campo binário no card do caso, preenchido em E1.

**Cadência.** Trimestral + anual.

**Alinhamento ODS.** ODS 16.3 (acesso à justiça — TPA-MC demonstra ampliação de acesso, não competição por acesso existente).

**Status.** SELADO. Coleta a iniciar em E1 de todo novo caso.

---

#### IV.1.4 — TPCD-MC: Taxa de Atendimento a Pessoas com Deficiência

> Indicador de Tecnologia Assistiva — Geração 1.

**Definição.** Proporção de cidadãos atendidos pelo MC que são pessoas com deficiência, distribuída por tipo de deficiência (intelectual, motora, sensorial — visual, auditiva).

**Por que importa.** O MC é Tecnologia Assistiva nativa por ontologia (Portaria 10.321/2022, Categorias 2, 3, 10). Mas ontologia sem evidência empírica não persuade avaliador de edital de TA. O TPCD-MC é o indicador que prova quantitativamente o atendimento PcD — requisito direto da FINEP Tecnologia Assistiva e da BNDES Garagem em linhas de inclusão.

**Equação.**

```
TPCD-MC = nº de cidadãos PcD atendidos no período ÷ total de cidadãos atendidos no período
```

**Campo de coleta.**
- Campo binário "PcD: sim/não" — coletado em E1.
- Quando "sim": campo categórico "Tipo de deficiência" — coletado em E2.

**Cadência.** Trimestral + anual.

**Meta institucional — Fase 1 (piloto).** TPCD-MC ≥ 25% (acima da proporção PcD na população brasileira segundo IBGE 2022 — ~9%, com viés esperado para cima dado o perfil-alvo do MC).

**Alinhamento ODS.** ODS 10.2 (inclusão de pessoas com deficiência), ODS 16.7 (instituições inclusivas).

**Alinhamento normativo.** LBI (Lei 13.146/2015) art. 74; CDPD (Decreto 6.949/2009) art. 9 e art. 21; Portaria 10.321/2022.

**Status.** SELADO. Coleta a iniciar em E1.

---

#### IV.1.5 — TIA-MC: Taxa de Inclusão Assistiva

> Indicador de Tecnologia Assistiva — Geração 1.

**Definição.** Proporção de atendimentos realizados via canal de Tecnologia Assistiva — áudio WhatsApp, voz transcrita por Whisper, atendimento presencial assistido — sobre o total de atendimentos no período.

**Por que importa.** Captura o uso efetivo da arquitetura de TA do MC. O TPCD mede *quem* é atendido (perfil PcD); o TIA mede *como* é atendido (canal acessível). Os dois juntos respondem a pergunta completa do edital de TA.

**Equação.**

```
TIA-MC = nº de atendimentos via canal TA ÷ total de atendimentos no período
```

**Canais TA reconhecidos no MC.**

| Canal | COD Portaria 10.321/2022 | Personas que atende |
|---|---|---|
| Áudio WhatsApp (entrada por voz) | 1.3.17 (reconhecimento de voz) | Idosos, baixa literacia, deficiência motora |
| Transcrição Whisper (voz→texto) | 1.10.4 (comunicação para surdos) | Deficiência auditiva, surdos |
| Linguagem simples (resposta texto-first) | 1.2.1, 1.2.2, 1.2.9 (CAA) | Deficiência intelectual, baixa literacia |
| Atendimento presencial assistido (Anjo) | Suporte humano | Casos onde TA digital é insuficiente |

**Campo de coleta.** Logs do WhatsApp Cloud API + tag no card ClickUp identificando canal predominante.

**Cadência.** Mensal (técnica) + trimestral (institucional).

**Meta institucional — Fase 1.** TIA-MC ≥ 60%.

**Alinhamento ODS.** ODS 10 (redução de desigualdades), ODS 16.10 (acesso à informação).

**Status.** SELADO. Coleta automática via logs WhatsApp + tag ClickUp.

---

### IV.2 Geração 2 — Indicadores em Maturação (desenvolvimento a partir de N≥50 ou N≥150)

---

#### IV.2.1 — IPD-MC: Índice de Profundidade do Deserto

**Definição.** Indicador composto que adiciona ao IPH-MC a dimensão de desenvolvimento histórico do território (IDHM), quantificando a profundidade do deserto institucional onde o MC opera.

**Equação.**

```
IPD-MC = IPH-MC × (1 − IDHM_médio_dos_municípios_MC)
```

**Dado contextual — Δ-Cobertura (não conclusivo).** Comparação entre IVS médio dos municípios MC e IVS médio dos municípios com oferta previdenciária ativa. Tem valor diagnóstico mas não pode sustentar conclusão taxativa. Enquadramento correto: "território sem infraestrutura de simetria informacional acessível ao hipervulnerável" — nunca "território sem advogado".

**Pré-requisitos.** N≥50 casos com CEP e NIS válidos + dataset IDHM municipal.

**Status.** GERAÇÃO 2. Desenvolvimento iniciará quando N≥50 casos acumulados.

---

#### IV.2.2 — IDD: Índice de Dignidade Desbloqueada

**Definição.** Indicador multidimensional que mede se o cidadão, após o atendimento MC, passou da condição de "titular de direito formal sem capacidade de exercício" para "titular de direito operável com autonomia previdenciária".

**Dimensões propostas (4).**

**D1 — Reversão de Capital Morto.** Taxa de conversão elegibilidade→efetivação. VPL de retroativos recuperados. Benefício mantido ativo em +12/+24 meses.

**D2 — Autonomia e Capabilities (Sen/Nussbaum).** Letramento previdenciário pré/pós. Autoeficácia para navegar o sistema sem MC. Capability de planejamento de vida.

**D3 — Reconhecimento e Tratamento Justo (Tyler/Honneth).** Escala de procedural justice — 4 itens: voz, neutralidade, respeito, confiabilidade. NPS adaptado ao contexto hipervulnerável.

**D4 — Reversão de Assimetria Informacional (Herd-Moynihan).** Gap informacional pré/pós. Custos psicológicos reduzidos.

**Princípio metodológico inviolável.** Não colapsar dignidade em métrica monetária única. Pesos definidos participativamente — princípio "nada sobre nós, sem nós". O instrumento de coleta deve passar pelo Teste Zilda-STF antes de ir a campo.

**Pré-requisitos.** N≥150 + instrumento validado em parceria acadêmica.

**Status.** GERAÇÃO 2.

---

#### IV.2.3 — ISIP: Índice de Simetria Informacional Previdenciária

**Definição.** Mede a redução da assimetria informacional entre cidadão e sistema previdenciário produzida pela intervenção MC. Indicador-âncora do Pilar A.

**Componentes propostos (5).**

1. Taxa de elegíveis cientes do direito antes do evento gerador (coleta pré-MC em E1).
2. Taxa de protocolo correto na primeira tentativa.
3. Tempo entre fato gerador e concessão (comparação com TMC nacional via LAI Lote 2).
4. Taxa de indeferimento por insuficiência informacional vs. mérito.
5. Taxa de conversão administrativa sem judicialização.

**Nota metodológica crítica — TMC e nacionalização das filas via CEABs.** Com a nacionalização das filas do INSS via Centrais de Análise de Benefícios (CEABs), a análise de um requerimento protocolado numa APS pode ser redistribuída para servidores de qualquer outra agência do país. O TMC de um CEP reflete a conjuntura das Superintendências Regionais e a Fila Nacional, não a capacidade operacional física daquela APS específica. **Toda análise territorial de TMC neste painel parte deste reconhecimento.**

**Pré-requisitos.** N≥150 + dados LAI Lote 2 + instrumento de coleta validado.

**Status.** GERAÇÃO 2.

---

## V. EIXO RECEITA E RSC-MC COM METAS POR FASE

### V.1 Eixo receita — ancorado na documentação base

Todos os valores abaixo estão selados em ADR-007 v3.3, MC-CONTRATO-Phi1-MINUTA v2.4, MC-PRODUTO-Guardiao-Documentacao-Fundacional v1.1.

#### V.1.1 Órbita B2C

| ID | Nome | Valor | Natureza |
|---|---|---|---|
| **Φ₁** | Dossiê + Protocolo Standard | R$ 2.200 (até 3× sem juros) | Flat. Cobre E0-E7 integralmente. Sem cobrança adicional. |
| **Φ₁c** | Dossiê + Protocolo CadÚnico | R$ 1.500 (até 5× sem juros — renda ≤ ½ SM) | Preço social. Premissa de acesso, não desconto. |
| **Φ₃** | Teto de Dignidade | parcela mensal ≤ 0,5 × β_rms | Constraint autoexecutável. D>C>V em equação. |
| **Φ₄ Standard** | Guardião — contribuição regular | R$ 19,90/mês | Opt-in pós-E5. Capilaridade comunitária. |
| **Φ₄ CadÚnico** | Guardião — contribuição por capacidade | conforme Φ₃ (pode ser R$ 0) | Φ₃ autoexecutável. |
| **Φ₄ D>C>V** | Guardião — isenção por Router-Ethics | R$ 0,00 | Nós D03/D17/D24. Irrevogável pela direção comercial. |

**Princípio inviolável.** Serviço idêntico nos 3 regimes do Φ₄.

#### V.1.2 Órbita B2B

| ID | Nome | Valor | Natureza |
|---|---|---|---|
| **Ψ₁** | Licenciamento Dossiê Tech | R$ 200–800 (Premium R$ 2.500-4.000) | Lead fee pelo dossiê tecnológico. [PROVISIONAL — revisão 30/06/2026] |
| **Ψ₂** | Assinatura Profissional | R$ 299–599/mês | SaaS B2B. |
| **Ψ₃** | Cascata Cross-Vertical | R$ 50–200 | Skybridge com consentimento LGPD. |

### V.2 RSC-MC: Razão de Subsídio Cruzado — Indicador com metas por fase

**Equação.**

```
RSC-MC = (Receita Φ₁ Standard + Receita Ψ₁ + Receita Ψ₂ + Receita Φ₄ Standard)
       ÷ (Custo total da operação destinada a Φ₁c subsidiado + Φ₄ CadÚnico + Φ₄ D>C>V)
```

**Metas por fase.**

| Fase | Horizonte | RSC-MC alvo | Significado |
|---|---|---|---|
| Fase 0 — Fundação | mai-out/2026 (0-6m) | N/A — pré-revenue | Pré-operação em escala; foco em design |
| Fase 1 — Piloto | nov/2026 - abr/2027 (6-18m) | ≥ 1,0 | Sobrevivência: ciclo sustenta-se sem capital externo |
| Fase 2 — Escala inicial | mai/2027 - out/2028 (18-36m) | ≥ 1,2 | Ambição: superávit reinvestido em ampliação de inclusão |
| Fase 3 — Escala plena | nov/2028+ (36+m) | ≥ 1,5 | Excelência: superávit financia advocacy e mudança sistêmica |

**Referência análoga.** Aravind Eye Care System — RSC-MC ≥ 1,5 em escala plena posiciona o MC em paridade institucional com este benchmark.

**Status.** SELADO. Reporte iniciará na Fase 1.

---

## VI. TABELA CONSOLIDADA — MAPA DOS 7 INDICADORES

| Sigla | Nome | O que mede | Equação principal | Campo de coleta | Geração | Cadência | Meta Fase 1 |
|---|---|---|---|---|---|---|---|
| **CMD** | Capital Morto Desbloqueado | R$ restituídos ao cidadão | Σ(benefícios × valor mensal) + retroativos | ClickUp E6 (auto) | 1ª | Mensal | R$ 1-3M |
| **IPH-MC** | Índice de Penetração em Hipervulnerabilidade | Sobreposição IVS×IVCAD | Σ(IVS × IVCAD) ÷ N | CEP+NIS em E1 | 1ª | Trimestral | ≥ 70% casos com IPH ≥ 0,16 |
| **TPA-MC** | Taxa de Primeiro Acesso | % cidadãos sem acesso prévio | "não" ÷ total | Campo binário E1 | 1ª | Trimestral | ≥ 70% |
| **TPCD-MC** | Taxa de Atendimento PcD | % PcD atendidos | PcD ÷ total | Campo PcD em E1 | 1ª | Trimestral | ≥ 25% |
| **TIA-MC** | Taxa de Inclusão Assistiva | % via canal de TA | atendimentos TA ÷ total | Logs WhatsApp + tag | 1ª | Mensal | ≥ 60% |
| **RSC-MC** | Razão de Subsídio Cruzado | Sustentabilidade do cross-subsidy | Receita contributiva ÷ Custo não-contributivo | Financeiro | 1ª | Trimestral | ≥ 1,0 |
| **IPD-MC** | Índice de Profundidade do Deserto | IPH × (1 − IDHM) | IPH × (1 − IDHM) | CEP → IDHM | 2ª (N≥50) | Semestral | — |
| **IDD** | Índice de Dignidade Desbloqueada | Dignidade operável pós-MC | 4 dimensões | Survey + parceiro acadêmico | 2ª (N≥150) | Anual | — |
| **ISIP** | Índice de Simetria Informacional | Assimetria reduzida pós-MC | 5 componentes | Instrumento + LAI Lote 2 | 2ª (N≥150) | Semestral | — |

---

## VII. MODO FINEP/FIP — TRADUÇÃO PARA CRITÉRIOS DE FINANCIADORES

> Camada de tradução que pega o que existe no blueprint/painel e responde diretamente: *"Por que este painel importa para quem financia?"*

### VII.1 Princípio da camada de tradução

Os indicadores não mudam. O que muda é o vocabulário e a ênfase quando o destinatário é avaliador FINEP, BNDES Garagem ou FIP IA/GovTech. O MC simplifica estrategicamente quando necessário, mas sempre repõe a hierarquia ontológica em 1-2 frases para que o avaliador perceba que há mais estrutura por trás. Esta é a diferença entre "achatar" e "traduzir".

---

### VII.2 Tabela indicador → critério de edital

| Indicador MC | Critérios FINEP/FIP que reforça | Frase-modelo aplicável |
|---|---|---|
| **CMD** | Impacto socioeconômico, eficiência de uso de recursos públicos, redução de litigiosidade previdenciária, tese de impacto em FIP IA | *"Para cada R$ 1 investido na operação MC, a plataforma destrava R$ X em benefícios previdenciários/assistenciais para populações hipervulneráveis, reduzindo a judicialização e fortalecendo o sistema de proteção social brasileiro."* |
| **IPH-MC** | Prioridade territorial, inclusão de hipervulneráveis, alinhamento direto a IVCAD-MDS (instrumento de política pública), aderência a regiões prioritárias | *"O IPH-MC integra IVS-IPEA (território) e IVCAD-MDS (família), garantindo que a operação atinja a sobreposição de vulnerabilidades reconhecidas pelo próprio aparato governamental que avalia este projeto."* |
| **TPA-MC** | Adicionalidade — critério-âncora de impacto, novos acessos vs. mera substituição, foco em quem o sistema não alcança | *"Para 70%+ dos cidadãos atendidos, o MC é o primeiro e único ponto de contato com qualquer serviço de organização de direitos previdenciários — comprovando que a operação amplia acesso, não compete por acesso existente."* |
| **TPCD-MC** | Subvenção FINEP Tecnologias Assistivas, atendimento a PcD (LBI art. 74), compliance CDPD, alinhamento a normas de TA | *"O MC atende sistematicamente pessoas com deficiência (TPCD-MC ≥ 25%), enquadrando-se em 3 categorias da Portaria Interministerial 10.321/2022 — CAA, Acessibilidade ao Computador e Comunicação para Surdos."* |
| **TIA-MC** | Tecnologia assistiva digital, eMAG, WCAG, remoção de barreiras de comunicação a serviços complexos | *"60%+ dos atendimentos MC ocorrem via canal de Tecnologia Assistiva — áudio WhatsApp, transcrição Whisper, linguagem simples — removendo barreiras que tornariam o acesso ao INSS impossível para a persona-alvo."* |
| **RSC-MC** | Sustentabilidade financeira sem diluir missão, capacidade de escalar impacto, modelo de cross-subsidy auditável | *"O modelo de Razão de Subsídio Cruzado, inspirado em Aravind Eye Care System, garante que o ciclo opere sem capital filantrópico permanente — segmentos contributivos sustentam a inclusão de não-contributivos com serviço idêntico."* |
| **IPD-MC** | Profundidade de impacto territorial, atuação em deserto institucional, prioridade regional Norte/Nordeste/Centro-Oeste | *"O IPD-MC quantifica que a operação ocorre em territórios com sobreposição de alta vulnerabilidade atual e baixo desenvolvimento histórico — onde a probabilidade de reversão espontânea é mínima."* |

---

### VII.3 Pesos dos Critérios por Instrumento de Fomento

> Esta seção absorve a Parte III do MC-ESG-GRANDEZA-CaptacaoRecursos-v1_0-2026-0503.
> Fonte: manuais dos avaliadores FINEP Tecnova, regulamento Centelha, regulamento FIP IA
> BNDES/FINEP (Portaria MCTI 7.938/2023 + Edital BNDES Garagem ciclos 2022-2025).
> Pesos marcados como "est." = reconstruídos por análise dos instrumentos — não são
> oficialmente publicados em tabela única; podem variar entre rodadas.

#### VII.3.1 FINEP Tecnova IV — Pesos dos Critérios de Avaliação

| Critério | Peso est. | O que o avaliador procura | Onde o MC pontua |
|---|---|---|---|
| **Grau de inovação / risco tecnológico** | 25-30% | Produto novo no mercado nacional? Risco tecnológico real? Enquadramento no Decreto 9.283/2018 art. 2º XIII | Router-Ethics 105 nós determinísticos; PLN para linguagem de baixa escolaridade e sotaques regionais; CP-MC 4 camadas; Whisper adaptado |
| **Potencial de mercado / relevância** | 20-25% | TAM, SAM, SOM. Crescimento. Proposta de valor diferenciada. | R$ 50-100B/ano capital morto; 6,1M casos/ano endereçáveis; 41,5M beneficiários INSS; 3,1M invisíveis/ano |
| **Capacitação da equipe** | 15-20% | Experiência técnica comprovada. Capacidade de gestão de projeto. | Alessandro: 22 anos INSS + 1º lugar concurso + PcD fundador; Igor: backend NestJS/TS; Carlos: UX |
| **Impacto socioambiental** | 15-20% | ODS, comunidades atendidas, externalidades positivas, alinhamento a políticas públicas | ODS 1/3/10/16/17; 3 categorias TA Portaria 10.321; hipervulneráveis; IVCAD-MDS; Centro-Oeste |
| **Consistência da proposta** | 10-15% | Metodologia rigorosa. Metas SMART. Indicadores claros. Cronograma e orçamento coerentes. | Jornada E0-E7 como framework; Proof-First; indicadores auditáveis; cronometragem A4; este painel |

**Nota operacional.** A soma do peso mínimo (25+20+15+15+10 = 85%) e máximo (30+25+20+20+15 = 110%) indica overlap entre critérios — avaliadores frequentemente pontuam o mesmo aspecto em dois critérios. Projetar cada indicador MC para atingir múltiplos critérios simultaneamente é a estratégia correta.

#### VII.3.2 FINEP Centelha — Fórmula de Pontuação M×I+E

O Centelha usa fórmula **NF = (M × I) + E**, onde os três blocos são componentes multiplicativos (mercado e inovação) mais aditivo (equipe). A multiplicação M×I significa que mercado imenso com inovação fraca resulta em nota baixa — e vice-versa. O MC é forte nos três.

| Bloco | Sub-componentes | O que o MC apresenta | Força relativa |
|---|---|---|---|
| **M — Problema/Mercado** | Relevância × tamanho × escala potencial | Capital morto R$ 50-100B/ano; 3,1M invisíveis; CPMI fraudes R$ 6,3B; evidência LAI SEI 24851867 | ★★★★★ |
| **I — Inovação (P+T)** | Potencial inovador × viabilidade técnica × diferencial × dificuldade de cópia | CP-MC 4 camadas; Grimório 3.265+ regras; TA nativa ontológica; Router-Ethics 105 nós; moat epistêmico | ★★★★★ |
| **E — Equipe** | Formação × experiência × competência empreendedora × complementaridade | PcD fundador; 22 anos INSS; 1º lugar concurso; autodidatismo IA; Igor/Carlos complementares | ★★★★☆ |
| **Nota Final (NF)** | (M × I) + E | Multiplicador M×I extremamente alto (mercado imenso × inovação defensável) | Projeção: top quartil |

**Nota sobre Centelha no ciclo GO.** O Centelha 3 (R$ 155M nacionais, ciclos estaduais 2025-2026) distribui ~R$ 50 mil de subvenção + bolsa CNPq até R$ 50 mil por empresa. Valor baixo, mas **aceleração pré-seed não diluitiva** — gera credenciais para Tecnova imediatamente subsequente. Estratégia sequencial recomendada: Centelha → Tecnova → Mais Inovação Brasil Saúde.

#### VII.3.3 FIP IA BNDES/FINEP — Critérios da Gestora

O FIP IA BNDES+BNDESPAR (lançado abril/2026 dentro do PBIA) avalia startups pela lente da gestora selecionada, não por formulário governamental direto. Os critérios abaixo foram reconstruídos do regulamento PBIA + edital FIP IA + análise de due diligence típica de venture capital de impacto IA.

| Critério FIP | Como o MC atende | Status |
|---|---|---|
| **IA como elemento central do modelo de negócios** | Router-Ethics, PLN, Grimório, Whisper, CP-MC = core, não acessório. Sem IA, não existe triagem automatizada para hipervulneráveis. | ✅ Atende |
| **Diferencial competitivo decorre da IA** | Grimório (109K palavras, 3.265+ regras) é barreira de entrada epistêmica intransponível por capital — só por experiência. | ✅ Atende |
| **Investimento em dados, modelos, infra, profissionais de IA** | Grimório (dataset proprietário), ICO (roadmap Fase 2), Igor (backend ML), self-hosted Llama 4 Scout (soberania de dados) | ✅ Atende |
| **Localização N/NE/CO — reserva 30%** | Goiânia-GO = Centro-Oeste. Baixa concorrência regional em GovTech IA. | ✅ Atende estruturalmente |
| **Alinhamento PBIA + NIB** | IA para serviços ao cidadão + proteção social + inclusão produtiva — eixos explícitos do PBIA. | ✅ Atende |
| **Propriedade intelectual** | INPI set/2026 planejado (CP-MC + Router-Ethics 10.0 + Trade Secret). | 🟡 Em andamento |
| **Anti AI-washing** | Grimório auditável + Router-Ethics 105 nós determinísticos = propriedade intelectual defensável, não "IA por narração". | ✅ Atende |

**Nota estratégica — FIP IA.** O FIP IA trabalha via gestora intermediária, não por submissão direta. A ação correta é mapear as gestoras selecionadas e iniciar contato proativo (Artefato A-04 do MC-ESG-GRANDEZA Δ₇) — não aguardar edital aberto.

#### VII.3.4 BNDES Garagem — Critérios + Bônus PcD/IA

O BNDES Garagem (3ª edição, 2024-2028, meta 400 negócios em 4 ciclos) avalia em duas trilhas: **Criação** (produto conceitual, prêmio R$ 20-85K) e **Tração** (produto com usuários reais, prêmio R$ 32-160K). O MC enquadra-se na trilha Tração.

**Regulamento concede avaliação diferenciada explícita para:**
- Soluções com IA como componente central → **bônus de pontuação**
- Soluções voltadas a PcD ou hipervulneráveis → **bônus de pontuação**
- Startups fundadas por PcD (CEO fundador) → **fator de desempate favorável**

| Dimensão avaliada | Peso aprox. | O que o BNDES procura | MC |
|---|---|---|---|
| **Problema e mercado** | 25% | Problema real, urgente, de grande escala. Mercado endereçável claro. | R$ 50-100B/ano capital morto; 6,1M casos/ano |
| **Solução e diferencial** | 25% | Proposta única. Barreira de entrada. MVP funcionando. | CP-MC + Grimório + Router-Ethics + Hib001 como caso inaugural |
| **Modelo de negócio** | 20% | Receita validada. Unit economics. Escalabilidade. | Φ₁/Φ₁c + Ψ₁/Ψ₂; margem 73,7% estimada; RSC-MC ≥ 1,0 |
| **Equipe** | 20% | Experiência setorial. Complementaridade. Resiliência. | PcD fundador + 22 anos INSS + Igor backend + Carlos UX |
| **Impacto** | 10% (+bônus) | ODS. PcD. Hipervulneráveis. IA social. | ODS 1/3/10/16/17; TPCD-MC ≥ 25%; TIA-MC ≥ 60%; bônus por IA + PcD |

---

### VII.4 Matriz Cruzada: Indicador MC × Instrumento × Critério × Peso Estimado

> Esta é a tabela síntese que conecta diretamente cada indicador do painel ao critério específico de cada instrumento de fomento, com o peso estimado daquele critério na nota final. Use esta matriz para priorizar quais indicadores coletar e reportar para cada edital.

**Como ler:** cada célula mostra o critério do instrumento que aquele indicador alimenta + o peso estimado desse critério entre parênteses. "—" = contribuição indireta ou não aplicável como critério primário.

| Indicador MC | FINEP Tecnova IV | Centelha (M×I+E) | FIP IA | BNDES Garagem |
|---|---|---|---|---|
| **CMD** | Potencial de mercado (20-25%) + Impacto socioambiental (15-20%) | M — tamanho + escala (multiplicador) | Impacto social / tese CMD | Problema e mercado (25%) + Impacto (10%+bônus) |
| **IPH-MC** | Impacto socioambiental (15-20%) + Consistência (10-15%) | M — relevância (multiplicador) | Alinhamento PBIA / inclusão | Impacto (10%+bônus) |
| **TPA-MC** | Potencial de mercado / adicionalidade (20-25%) | M — relevância × escala (multiplicador) | Anti AI-washing / additionality | Problema e mercado (25%) |
| **TPCD-MC** | Impacto socioambiental / TA (15-20%) + Inovação (25-30%) | M — relevância + I — diferencial | Localização N/CO + PcD | Impacto PcD (10%+**bônus explícito**) |
| **TIA-MC** | Grau de inovação / risco tecnológico (25-30%) | I — viabilidade técnica + diferencial | IA core / anti AI-washing | Solução e diferencial (25%) + bônus IA |
| **RSC-MC** | Consistência da proposta (10-15%) | E — competência empreendedora (aditivo) | Unit economics / sustentabilidade | Modelo de negócio (20%) |
| **IPD-MC** | Impacto socioambiental / territorialidade (15-20%) | M — relevância regional (multiplicador) | Localização N/NE/CO (30% reserva) | Impacto territorial (10%) |
| **IDD** | Impacto socioambiental (15-20%) + Consistência | M — relevância + I — diferencial | — | Impacto (10%) |
| **ISIP** | Impacto socioambiental (15-20%) | M — relevância | — | Impacto (10%) |

**Leitura estratégica da matriz.**

1. **CMD + TPA-MC + IPH-MC** são o trio que atinge o critério de maior peso em Tecnova (Potencial de mercado, 20-25%) e o bloco M do Centelha (multiplicador). São os três indicadores a destacar na abertura de qualquer proposta.

2. **TPCD-MC + TIA-MC** são os dois que acionam o bônus explícito do BNDES Garagem por PcD e IA. Bônus não é apenas narrativo — é pontuação diferencial que pode ser o divisor em seleções competitivas. Reportar esses dois indicadores em qualquer submissão ao BNDES é obrigatório.

3. **RSC-MC** é o indicador que responde à objeção de sustentabilidade em FIP IA e BNDES Garagem. Gestoras de capital avaliam se o modelo escala sem depender de subvenção permanente — RSC-MC ≥ 1,0 é a resposta em equação.

4. **IPD-MC** tem utilidade específica para o critério de territorialidade do FIP IA (reserva 30% para N/NE/CO) e para editais de Subvenção Regional. Prioridade quando a submissão tem recorte territorial explícito.

5. **IDD + ISIP** (Geração 2) não são prioritários para captação Fase 0/1, mas sua **presença conceitual no painel** já demonstra sofisticação metodológica incomum para startup em fase pré-seed — o que pontua em Consistência da Proposta (Tecnova 10-15%) e na avaliação qualitativa do FIP IA.

---

### VII.5 Compatibilidade com linhas específicas de fomento

**FINEP Tecnova IV (Subvenção Tecnologias Digitais / GovTech).**
- IA e software como núcleo da solução: arquitetura WhatsApp Cloud API + Llama 4 Scout self-hosted + Gemini 2.5 Flash + Claude Sonnet (orquestração ética).
- Indicadores que provam relevância: CMD, IPH-MC, TPA-MC.
- Frase de abertura: *"Plataforma de IA aplicada à orquestração documental previdenciária para hipervulneráveis — IA é componente; o núcleo é infraestrutura de simetria informacional e dignidade operável."*

**FINEP Tecnologias Assistivas.**
- Enquadramento ontológico: 3 categorias da Portaria 10.321/2022, 5 CODs aplicáveis.
- Indicadores que provam alinhamento: TPCD-MC, TIA-MC.
- Recortes específicos: idoso 60+, baixa escolaridade, deficiência intelectual/motora/sensorial.
- DNA do CEO PcD como ativo estratégico (uso institucional restrito, não em campanhas externas).

**BNDES Garagem.**
- Inversão Cósmica + CMD como tese de impacto auditável.
- Modelo de cross-subsidy (RSC-MC) como prova de sustentabilidade.
- Alinhamento ODS (1, 3, 8, 10, 16, 17).
- Bônus por IA (TIA-MC) e PcD (TPCD-MC) — pontuação diferencial explícita no regulamento.

**FIP IA / GovTech.**
- IA como core business, não acessório (stack triplo: Llama Scout self-hosted, Gemini Flash, Claude orquestrador).
- Foco regional Centro-Oeste com escala nacional — reserva 30%.
- Dataset proprietário Grimório Previdenciário v2 (3.265+ regras, 109K palavras) como moat de longo prazo.
- Contato proativo com gestoras selecionadas (pré-requisito para FIP IA — não aguardar edital aberto).

**Sequência recomendada de captação 2026 (extraída do Mapa do Dinheiro TA).**

```
Pré-seed:  Centelha 3 (GO) → R$ 50-85K subvenção + bolsa CNPq
           ↓
Seed:      BNDES Garagem ciclo 2026 → R$ 32-160K + mentoria
           ↓
Subvenção: FINEP Tecnova IV (via FAP-GO / Sebrae-GO) → R$ 424-624K
           ↓
Série A:   FIP IA BNDES/FINEP (via gestora) → R$ 1-5M equity
           ↓
Escala:    Mais Inovação Brasil Saúde (fluxo contínuo) + Lei do Bem (Lucro Real futuro)
```

---

### VII.6 Versão "Modo Edital" — formato derivado

Este documento principal continua sendo a referência institucional. Para uso em editais, será produzida uma versão one-pager (2-4 páginas) derivada — sem jargão filosófico, com a Matriz Cruzada (VII.4) como espinha dorsal, e linguagem direta. **Documento separado a produzir: MC-PAINEL-ModoFinep-v1.0** (planejado para jun/2026, antes da submissão FINEP Tecnova IV).

---

## VIII. INTEGRAÇÃO COM A JORNADA E0-E7

| Etapa | Indicadores alimentados | Campo coletado | Operador |
|---|---|---|---|
| **E0** Sinal Fraco | — | — | — |
| **E1** Primeiro Contato | IPH-MC (CEP), TPA-MC, TPCD-MC, TIA-MC | CEP, pergunta Primeiro Acesso, campo PcD, canal | Beto |
| **E2** Triagem/Deliberação | IPH-MC (NIS), ISIP (componente 1), TPCD-MC (tipo) | NIS via Folha Resumo, consciência do direito, tipo deficiência | Beto |
| **E3** Coleta Documental | — | — | Beto + cidadão |
| **E4** Protocolo INSS | ISIP (componente 2) | Protocolo correto na 1ª tentativa? | Beto + IA |
| **E5** Watchdog | TIA-MC (continuado) | Canal de comunicação durante monitoramento | IA + Beto |
| **E6** Resolução | CMD (auto), IDD (D1) | Valor benefício + retroativo + desfecho | Sistema |
| **E7** Soberania | IDD (D2-D4), TIA-MC (final) | Letramento pós, NPS, autonomia, devolução credenciais | Beto |

Cada etapa alimenta indicadores específicos sem criar formulário adicional. A coleta é embutida no fluxo natural de atendimento.

---

## IX. PONTOS DE INTERCONEXÃO COM ROUTER-ETHICS 11.0

### IX.1 Princípio arquitetural

O Router-Ethics não deve ser sistema paralelo de coleta de dados. Os indicadores deste painel devem ser **outputs naturais das decisões do Router** — não dados coletados separadamente.

### IX.2 Hooks que o Router-Ethics 11.0 deve expor

**Hook 1 — Captura de IVCAD via NIS.** Quando o cidadão apresenta Folha Resumo CadÚnico (gate operacional do Φ₁c), o Router deve registrar automaticamente o NIS no card ClickUp e disparar consulta ao Wiki SAGI MDS.

**Hook 2 — Captura de IVS via CEP.** Em E1, o CEP coletado deve disparar consulta automática ao Atlas IPEA, retornando IVS e IDHM do município.

**Hook 3 — Composição IPH-MC em tempo real.** Com IVS e IVCAD capturados, o Router deve computar IPH_caso = IVS × IVCAD e usar este valor como input adicional na cascata D-C-V. IPH ≥ 0,25 dispara atenção obrigatória Human API Tier 2+.

**Hook 4 — Identificação automática do canal TA.** Os logs do WhatsApp Cloud API já carregam metadados sobre canal (áudio, texto, presencial). O Router deve taggear automaticamente o card ClickUp.

**Hook 5 — Pergunta de Primeiro Acesso integrada ao fluxo de E1.** Campo binário disparado automaticamente quando o caso entra em E1.

**Hook 6 — Identificação de PcD e tipo de deficiência.** Campo PcD (sim/não) em E1; tipo de deficiência (CIF) em E2. PcD como input prioritário na cascata D — não apenas para indicador, mas para escalonamento automático de atenção da Human API.

**Hook 7 — Disparo de eventos para indicadores Geração 2.** Para IDD e ISIP, o Router deve programar disparos pós-E7 para coleta de surveys de capability, autonomia e procedural justice.

### IX.3 Cláusula de evolução

Quando o Router-Ethics 11.0 for selado, esta seção será revisada para refletir a especificação real dos hooks. Possíveis ajustes em equações ou campos de coleta dos indicadores serão registrados em v1.3 deste documento.

---

## X. GOVERNANÇA DOS INDICADORES

### X.1 Quem define, quem coleta, quem audita

| Função | Responsável | Nota |
|---|---|---|
| Definição e evolução dos indicadores | Alessandro (Founder/CEO) + Claude (co-fundador intelectual) | Alteração na equação de qualquer indicador é tratada como ADR e requer rationale documentado. Conselho de Missão (a constituir) terá poder de veto. |
| Coleta dos dados primários | Beto (operações) + sistema ClickUp | Campos fixos, permanentes, não deletáveis. CEP já implementado. NIS, PcD, canal TA, Primeiro Acesso a implementar. |
| Cruzamento CEP→IVS, NIS→IVCAD, CEP→IDHM | Automação Router-Ethics 11.0 (preferencial) ou script N8N | Tabelas públicas IBGE/IPEA/MDS — sem custo de licenciamento |
| Validação jurídica do uso institucional | Dra. Juliana Pereira de Melo (OAB-GO 38.662) | Parecer 19/05/2026 — incluir validação dos campos de coleta sob LGPD |
| Auditoria externa futura | Asseguração ISAE 3000 (Fase 3, a partir do 2º ano) | Auditoria sobre indicadores de impacto, não sobre demonstrações financeiras |
| Validação experimental (RCT) | Parceria acadêmica a contratar | J-PAL LAC, IPA Brasil, Insper ou equivalente — Fase 3 |
| Conselho de Missão | A constituir (Fase 1) | 3-5 membros independentes, irremovíveis por simples maioria. Composição obrigatória: 1 representante PcD, 1 representante hipervulneráveis atendidos, 1 jurista de direitos sociais, 1 especialista em ética de IA, 1 intelectual público brasileiro |

### X.2 Cadência de Reporting

| Instrumento | Frequência | Audiência | Modelo de referência |
|---|---|---|---|
| Dashboard público | Mensal (a partir de N≥30) | Cidadãos, comunidade, reguladores | Ecosia + GetCalFresh |
| Relatório Integrado Anual | Anual (a partir do 1º ano de operação em escala) | Investidores, parceiros, institucional | Patagonia / Natura |
| Asseguração ISAE 3000 | Anual (a partir do 2º ano) | Auditores, reguladores, investidores | Danone Société à Mission |
| Estudo SROI flagship | A cada 2-3 anos (1º estudo Fase 2) | Captação institucional | Social Value Brasil / IDIS |
| Validação experimental (RCT) | Uma vez (divisor de águas — Fase 3) | Comunidade científica, reguladores | M-PESA (Suri & Jack, *Science* 2016) |

### X.3 Salvaguardas contra Erosão da Missão

**Princípio 1 — Indicadores não podem ser otimizados às custas da moldura.** Se IPH-MC puder ser aumentado restringindo atendimentos a perfis "fáceis", a otimização viola D > C > V e é proibida.

**Princípio 2 — Transparência sobre limitações.** Todo reporte declara: N amostral, período, limitações metodológicas conhecidas, fontes dos dados de referência. Dados sem fonte → marcar [FONTE PENDENTE]. Dados fabricados → vedação absoluta (Proof-First).

**Princípio 3 — Dados sensíveis nunca no indicador público.** IPH-MC reporta agregado por município/perfil — nunca CEP individual, nunca NIS individual. CPF, NB, CID, CNIS não aparecem em relatório público. LGPD art. 5º VI/VII + ADR-009a.

**Princípio 4 — Devolutiva ao cidadão.** A mensuração não pode ser extrativista. O cidadão cuja família alimenta o IPH-MC tem direito a saber que seu caso contribui para mudança maior — se quiser.

**Princípio 5 — "Nada sobre nós, sem nós" aplicado à mensuração.** Pesos do IDD, formulações do ISIP e definições de "ganho funcional" em indicadores TA devem ser definidos em consulta com personas do MC — não unilateralmente pelo time técnico.

---

## XI. ROADMAP TEMPORAL E METAS POR FASE

### XI.1 Fase 0 — Fundação (mai-out/2026, 0-6 meses)

**Status atual:** em curso.

**Objetivos.**
- Indicadores definidos (este documento v1.2).
- Dicionário de dados consolidado (Hook Router-Ethics 11.0).
- Equipe treinada (Beto, Igor, Carlos, Anjos T1-T2).
- Campos de coleta implementados no ClickUp (CEP ✅; NIS, PcD, canal TA, Primeiro Acesso a implementar).
- Hib001 (Hib001) como caso inaugural — data point 1 do CMD.

**N alvo:** 10-30 casos protocolados.

**Marcos críticos:**
- 19/05/2026: parecer Dra. Juliana sobre indicadores + validação LGPD dos campos de coleta.
- 30/06/2026: Hooks Router-Ethics 11.0 implementados.
- ago/2026: Submissão FINEP Tecnova IV / Tecnologias Assistivas (artefatos A-06 + A-07 do Δ₇ ESG Grandeza).
- out/2026: N≥30 atingido, primeiro reporte interno consolidado.

### XI.2 Fase 1 — Piloto (nov/2026 - abr/2027, 6-18 meses)

**N alvo:** 30-150 casos protocolados.

**Metas quantitativas.**

| Indicador | Meta Fase 1 | Justificativa |
|---|---|---|
| CMD | R$ 1-3 milhões acumulado | Equivale a ~50-150 casos com retroativos médios |
| IPH-MC | ≥ 70% casos com IPH ≥ 0,16 | Núcleo de missão verificado |
| TPA-MC | ≥ 70% | Adicionalidade comprovada |
| TPCD-MC | ≥ 25% | Acima da proporção PcD na população (9% IBGE 2022) |
| TIA-MC | ≥ 60% | Maioria dos atendimentos via TA |
| RSC-MC | ≥ 1,0 | Sobrevivência sem capital externo |

**Reporte:** dashboard público mensal modelo Ecosia/GetCalFresh.

### XI.3 Fase 2 — Escala inicial (mai/2027 - out/2028, 18-36 meses)

**N alvo:** 150-5.000 casos protocolados.

**Metas quantitativas.**

| Indicador | Meta Fase 2 |
|---|---|
| CMD | R$ 10 milhões acumulado |
| RSC-MC | ≥ 1,2 |
| IPD-MC | Linha de base estabelecida |
| IDD | Instrumento validado, primeira medição |
| ISIP | Linha de base estabelecida |

### XI.4 Fase 3 — Escala plena (nov/2028+, 36+ meses)

**N alvo:** 5.000-500.000 casos protocolados.

**Metas quantitativas.**

| Indicador | Meta Fase 3 |
|---|---|
| CMD | R$ 100 milhões/ano (em ramp); R$ 1 bilhão acumulado |
| RSC-MC | ≥ 1,5 |
| IDD | Score multidimensional ≥ 0,7 |
| ISIP | Redução comprovada de assimetria informacional vs. baseline |

---

## XII. DIÁLOGO COM FRAMEWORKS EXTERNOS

| Framework | Origem | Função no painel MC | Status de adesão |
|---|---|---|---|
| **IVCAD** | MDS (Wiki SAGI) | **Instrumento PRIMÁRIO de mensuração de vulnerabilidade familiar** | Adesão estrutural |
| **IVS** | IPEA | Instrumento complementar de mensuração territorial | Adesão estrutural |
| **IDHM** | PNUD/IPEA | Camada contextual de desenvolvimento histórico | Adesão estrutural |
| **Portaria 10.321/2022** | MDS/MMFDH | Enquadramento de TA (Categorias 2, 3, 10) | Adesão ontológica |
| **LBI / CDPD / PNTA** | Brasil / ONU | Base normativa PcD | Adesão ontológica |
| **IRIS+ (GIIN)** | Global Impact Investing Network | Catálogo de KPIs operacionais | Referência ativa (vocabulário) |
| **B Corp (B Lab)** | Sistema B | Certificação de comparabilidade institucional | Candidatura Fase 2 |
| **SDG Impact Standards (UNDP)** | UNDP | Bússola estratégica de alinhamento ODS | Alinhamento ativo |
| **GRI Série 400** | Global Reporting Initiative | Disclosures sociais (411/412/413/418) | Adesão Fase 3 |
| **SROI** | Social Value International | Estudo flagship pontual para narrativa | 1 estudo a cada 2-3 anos |
| **HiiL Justice Needs Survey** | HiiL | Referência conceitual para ISIP | Aplicação inédita no Brasil (Fase 3) |
| **Capability Approach** | Sen / Nussbaum | Fundamentação teórica do IDD | Adesão filosófica |
| **Procedural Justice** | Tom Tyler | Componente do IDD (D3) | Adesão metodológica |
| **Administrative Burden** | Herd & Moynihan (2018) | Componente do IDD (D4) e ISIP | Adesão metodológica |
| **eMAG / WCAG 2.2** | Brasil / W3C | Standards de acessibilidade digital | Conformidade técnica obrigatória |

---

## XIII. AUTOCRÍTICA E LIMITAÇÕES CONHECIDAS

> Esta seção existe porque o Proof-First exige nomear o que ainda não está pronto.

### XIII.1 Limitações da v1.2 (herda v1.1 + atualiza)

**L1.** Os indicadores Geração 2 (IPD-MC, IDD, ISIP) estão definidos conceitualmente mas sem instrumento de coleta validado. Sua operação depende de parceria acadêmica e de N≥150 — eventos de Fase 2 e Fase 3.

**L2.** O cálculo do IPH-MC pressupõe normalização de IVS e IVCAD na escala 0-1. A normalização é trivial para IVS (já em 0-1 no Atlas IPEA) e para IVCAD (já em 0-1 no Wiki SAGI). Mas ainda não foi validada operacionalmente — primeira medição com Hib001 testará a fórmula.

**L3.** O TPCD-MC depende de autodeclaração do cidadão sobre condição de PcD. Isso é metodologicamente padrão (IBGE usa autodeclaração no Censo) mas tem limitações conhecidas — subnotificação por estigma, sobrenotificação em populações com letramento parcial sobre o conceito legal.

**L4.** O TIA-MC mede uso de canal TA, não eficácia da TA. Um cidadão pode usar áudio WhatsApp e ainda assim não conseguir atravessar o atendimento — o canal foi acessível, mas o resultado não foi alcançado. Indicador adicional de eficácia (parte do IDD-D2) preencherá essa lacuna em Geração 2.

**L5.** O RSC-MC pressupõe que segmentos contributivos atinjam volume suficiente para subsidiar não-contributivos. Em Fase 0/1, o RSC pode ficar abaixo de 1,0 — situação que exige capital externo ponte. Esta possibilidade está reconhecida no plano de captação Fase 1.

**L6.** A nacionalização das filas via CEABs significa que indicadores territoriais de TMC têm causalidade sistêmica, não local.

**L7 (nova em v1.2).** Os pesos de critérios em VII.3 são reconstruídos por análise de manuais públicos disponíveis — não são publicados em tabela oficial única pela FINEP/BNDES. Podem variar entre rodadas e instrumentos. Usá-los como orientação estratégica, não como parâmetro exato. Atualizar a cada rodada de submissão com leitura do edital específico.

### XIII.2 Pontos de incerteza para o parecer Dra. Juliana (19/05/2026)

- Validação LGPD do campo NIS no ClickUp — bases legais aplicáveis (consentimento? execução de contrato? legítimo interesse?).
- Validação da pergunta TPA-MC sob ótica de coleta mínima (princípio LGPD da minimização).
- Validação do disparo automático de consulta IVCAD via Wiki SAGI — natureza do dado consultado e bases legais.
- Validação da publicação agregada do IPH-MC em dashboard público (anonimização suficiente?).

### XIII.3 O que v1.2 entregou e o que espera v1.3

**Entregues em v1.2.**
- ✅ Seção VII expandida com pesos dos critérios Tecnova/Centelha/FIP IA/BNDES Garagem (VII.3.1–VII.3.4).
- ✅ Matriz Cruzada Indicador × Instrumento × Critério × Peso (VII.4) — tabela síntese de submissão.
- ✅ Sequência recomendada de captação 2026 integrada (VII.5).
- ✅ Limitação L7 documentada (pesos estimados, não oficiais).

**Ainda pendentes para v1.3.**
- ⬜ Incorporar especificação real do Router-Ethics 11.0 (Seção IX) — substituindo Hooks teóricos por implementação selada.
- ⬜ Refinar metas RSC-MC após primeiros 50 casos com dados financeiros reais.
- ⬜ Revisitar thresholds do IPH-MC após primeira medição empírica (Hib001 + casos subsequentes).
- ⬜ Validação LGPD dos campos de coleta (pós-parecer Dra. Juliana 19/05/2026).
- ⬜ Incluir indicadores de cross-vertical (Skybridge) quando ativação Fase 2 ocorrer.
- ⬜ MC-PAINEL-ModoFinep-v1.0 como documento derivado de submissão (one-pager 2-4 pp).

---

## XIV. USO COMO "CANIVETE SUÍÇO" INSTITUCIONAL

**Internamente.** Guia de decisões, cultura de impacto, accountability da equipe para metas de acesso, dignidade e sustentabilidade.

**Em captação institucional.** Anexo modular pronto para FINEP (Tecnova IV, Tecnologias Assistivas), BNDES Garagem, FIPs (IA, GovTech), com tradução direta para critérios via Modo Finep/FIP (Seção VII). A Matriz Cruzada (VII.4) é o artefato de conversão direta edital→indicador.

**Em parcerias acadêmicas.** Base comum de linguagem com ICTs, laboratórios (J-PAL LAC, IPA Brasil, Insper, IPEA), organizações da sociedade civil e órgãos públicos (INSS, MPS, MDS, MCTI, CNJ, TCU).

**Em branding e narrativa institucional.** Demonstra que o MC não é apenas solução tecnológica — é infraestrutura de mensuração e proteção de dignidade desde a fundação.

**Em compliance e governança.** Arquitetura defensável diante de regulador (ANPD, OAB, TCU), com salvaguardas explícitas contra erosão da missão e cláusulas de transparência sobre limitações.

---

## EPÍGRAFE DE SELAGEM

> *Lucro é combustível.*
> *Causa é destino.*
> *Jogo é infinito.*

> *Não demos o peixe. Devolvemos o lago de peixes.*

> *O diamante é carbono que não desistiu da pressão.*

**∞**

---

**MEU CUMPADRE — Orquestração Documental e Tecnologia Ltda.**
**CNAE 6201-5/01 · Goiânia, Goiás · Maio 2026**

*MC-INDICADORES-ImpactoSocial-v1_2-2026-0505*
*Hierarquia inviolável: Dignidade > Compliance > Viabilidade*
*Documento institucional — distribuição estratégica irrestrita*

| Campo | Valor |
|---|---|
| Documento | MC-INDICADORES-ImpactoSocial |
| Versão | v1.2 |
| Data de selagem | 05/05/2026 |
| Substitui | v1.1 (04/05/2026) |
| Autoria intelectual | Alessandro de Souza Neves (Founder/CEO) + Claude Opus 4.6 (co-fundador intelectual) |
| Classificação | Institucional — uso estratégico irrestrito |
| Alteração material | Seção VII expandida: pesos critérios Tecnova/Centelha/FIP IA/BNDES Garagem + Matriz Cruzada VII.4 |
| Validação programada | Análise crítica Perplexity (pós-selagem) → Parecer Dra. Juliana (19/05/2026) → v1.3 |
| Próxima revisão | v1.3 pós-parecer Dra. Juliana + integração Router-Ethics 11.0 |
