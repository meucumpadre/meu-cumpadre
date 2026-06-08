# MC-ARMADURA-v3_0 — Esqueleto de Pastas & Manifesto de Classificação

**Finalidade:** organizar o acervo do Drive (~3.200 arquivos) dentro da estrutura das 7 Peças de Armadura para o duelo Opus 4.7 adaptativo.
**Data:** 2026-04-19
**Destinatário primário:** Claude Code (executor da varredura)
**Destinatário secundário:** Alessandro (validador)

---

## Princípio fundador

**Regra de ouro da classificação:** cada arquivo entra em UMA pasta-principal (canônica). Se for referenciado por outra Peça, vai um *shortcut* do Google Drive (atalho nativo), nunca duplicata física. Duplicatas quebram rastro Proof-First.

**Estrutura hierárquica:** 3 níveis máximo. Mais que isso vira labirinto.

**Convenção de nome de pasta:** `NN_NOME_CURTO/` onde `NN` é número de ordem (estável), `NOME_CURTO` em UPPER_SNAKE_CASE.

**Artefato de saída obrigatório do Claude Code:**
- `MANIFESTO-ARMADURA-v1_0.csv` — uma linha por arquivo com: `file_id | title | current_parent_id | proposed_parent_path | confidence (0-1) | peca_armadura (0-7) | tags | rationale`
- `RELATORIO-GAPS-v1_0.md` — o que falta para blindagem completa, com prioridade (P0/P1/P2)
- `DUPLICATAS-DETECTADAS.csv` — arquivos idênticos ou quasi-idênticos (hash ou similaridade >0.95)

**Claude Code NUNCA move arquivo sem aprovação do Founder.** O output é plano; a execução é manual ou script separado com `--confirm`.

---

## Estrutura de pastas raiz — 9 pastas principais

```
00_INDEX_ARMADURA/                       [NOVO — dashboard de navegação]
01_COGS_TEMPO_HOMEM/                     [PEÇA 1 — escudo central]
02_PLANILHAS_FINANCEIRAS_CANONICAS/      [PEÇA 2 — correção R$36,79/h]
03_ADR_DECISOES_ARQUITETURAIS/           [PEÇA 3 — ADRs 001-008+]
04_DEFESA_ANTROPOLOGICA/                 [PEÇA 4 — humanização, Zilda-Layer]
05_ANCORA_R12k_JORNADA_CONVENCIONAL/     [PEÇA 5 — 15 fontes primárias]
06_GEOMETRIA_NUBANK_LTV/                 [PEÇA 6 — modelo financeiro família]
07_EXERCITO_ESPECIALISTAS/               [PEÇA 7 — pareceres 5 especialistas]
08_JURIDICO_FIREWALL_OAB/                [Transversal — blindagem]
09_ARQUIVO_LEGADO/                       [Fora do escopo v3.0, preservado]
```

---

## 01_COGS_TEMPO_HOMEM/ (Peça 1 — Escudo Central)

**Missão da pasta:** provar empiricamente o custo-hora R$ 36,79/h × 15h-tela = R$ 529/caso, com decomposição por microtarefa M01-M21 e por espécie de benefício.

```
01_COGS_TEMPO_HOMEM/
├── 01A_MATRIZ_TEMPO_TELA_PRIMARIA/
│   ├── MC-MATRIZ-TEMPO-TELA-PILOTO-v1_0-2026-0326.xlsx
│   ├── MC-MATRIZ-TEMPO-TELA-PILOTO-v1_0-2026-0326.csv
│   └── LOGS_CRONOMETRAGEM_OPERADORES/
│       └── [JSONs ou CSVs com medições reais operador×caso×microtarefa]
│
├── 01B_MICROTAREFAS_M01_M21/
│   ├── M01_TRIAGEM_INICIAL.md
│   ├── M02_COLETA_DOCUMENTOS.md
│   ├── M03_LOGIN_GOV_BR.md                     [com taxa de retry!]
│   ├── M04_CONSULTA_CNIS.md                    [alvo automação]
│   ├── M05_VALIDACAO_VINCULOS.md
│   ├── M06_CALCULO_TEMPO_CONTRIBUICAO.md       [alvo automação]
│   ├── ...
│   └── M21_HANDOFF_FINAL.md
│
├── 01C_POR_ESPECIE_BENEFICIO/
│   ├── B11_APOSENT_IDADE_RURAL/
│   │   ├── tempo_tela_medio.md
│   │   ├── variabilidade_std.md
│   │   └── casos_anonimos_amostra.csv
│   ├── B87_BPC_IDOSO/
│   ├── B88_BPC_PCD/
│   ├── B32_APOSENT_INVALIDEZ/
│   ├── B41_APOSENT_IDADE_URBANA/
│   ├── B42_APOSENT_TEMPO_CONTRIBUICAO/
│   └── B21_PENSAO_POR_MORTE/
│
├── 01D_RETRY_GOV_BR_MEU_INSS/
│   ├── logs_queda_gov_br_2026.csv
│   ├── taxa_retry_por_microtarefa.md
│   └── incidentes_criticos_documentados/
│
├── 01E_CUSTO_HORA_OPERADOR_CLT/
│   ├── MC-CALCULO-CUSTO-HORA-R36-79-v1_0.md    [a criar: decomposição completa]
│   ├── tabela_encargos_CLT_vigentes_2026.md
│   ├── referencias_salario_base_mercado_GO.md
│   └── fator_eficiencia_080_justificativa.md
│
└── 01F_CURVA_APRENDIZADO/
    ├── curva_operador_novo_25h_a_pleno_10h.md
    ├── dados_empiricos_por_operador.csv
    └── projecao_financeira_impacto_margem.md
```

**Regras de classificação (Claude Code):**
- Qualquer arquivo com `TEMPO-TELA`, `TT`, `MATRIZ-TEMPO`, `M01..M21` no nome → `01A` ou `01B`
- Qualquer arquivo com `CUSTO-HORA`, `R$8,52`, `R$36,79`, `COGS-HUMANO`, `encargos CLT`, `1,85x` no conteúdo → `01E`
- Qualquer arquivo com `B11`, `B87`, `B88`, `B41`, `BPC`, `RURAL`, `APOSENT` combinado com dado operacional (não doutrinário) → `01C`
- Qualquer arquivo com `gov.br`, `Meu INSS`, `retry`, `captcha`, `timeout` relacionado a operação → `01D`
- Qualquer arquivo com `aprendizado`, `onboarding operador`, `learning curve`, `treinamento operador` → `01F`

**Conflito frequente:** arquivos de treinamento de operador que também têm microtarefas. Regra de desempate: classifica na 01F se a ênfase for *curva*; classifica na 01B se a ênfase for *descrição da tarefa*.

---

## 02_PLANILHAS_FINANCEIRAS_CANONICAS/ (Peça 2 — Correção R$36,79/h)

**Missão:** uma única planilha canônica por escopo, com histórico versionado. Fim do R$ 8,52/h em todas as planilhas.

```
02_PLANILHAS_FINANCEIRAS_CANONICAS/
├── 02A_CANONICAS_VIGENTES/
│   ├── MC-COGS-MASTER-v2_0.xlsx                [a produzir: R$36,79/h aplicado]
│   ├── MC-UNIT-ECONOMICS-PILOTO-N150-v1_0.xlsx [a produzir]
│   ├── MC-UNIT-ECONOMICS-PILOTO-N500-v1_0.xlsx [a produzir]
│   └── MC-CENARIOS-F5-RECALCULADOS-v1_0.xlsx  [a produzir: 5 cenários F5 corrigidos]
│
├── 02B_MATRIZES_OPERACIONAIS/
│   ├── MC-MATRIZ-CONTINGENCIAMENTO-COGS-v1_1.xlsx  [CORRIGIDA]
│   └── MC-RECONCILIACAO-MASTER-COGS-v?.xlsx       [L2 pendente F5]
│
├── 02C_HISTORICO_DEPRECATED/
│   └── [todas as versões com R$8,52/h — marcadas DEPRECATED, preservadas para rastro]
│
└── 02D_CALCULOS_AUXILIARES/
    ├── folha_pagamento_operador_tipico.xlsx
    └── projecoes_receita_LTV_familiar.xlsx      [espelha Peça 6]
```

**Regras:**
- Toda planilha `.xlsx` ou `.csv` com números financeiros vai aqui
- Versões antigas com R$ 8,52/h vão para `02C` com sufixo `-DEPRECATED`
- Nomenclatura obrigatória: `MC-<ESCOPO>-<VERSAO>.xlsx`

---

## 03_ADR_DECISOES_ARQUITETURAIS/

**Missão:** toda ADR numerada, imutável após selamento, com apêndices versionados.

```
03_ADR_DECISOES_ARQUITETURAIS/
├── ADR-001_a_ADR-006/                          [históricos, selados]
├── ADR-007_CAMPO_PRECIFICACAO/
│   ├── v1_0/  [deprecated]
│   ├── v2_0-2026-0318_SELADA/
│   ├── v3_0_EM_PRODUCAO/                       [a produzir]
│   ├── ADVERSARIAL1_F1_a_F4/
│   ├── ADVERSARIAL2_v2_0_B2C_COGS/             [PDF recém-recebido]
│   ├── F5_TESE_FINAL_v1_0/
│   └── apendices/
│       ├── ApendiceA_Dossie_TempoHomem.md      [link simbólico para 01A/01C]
│       ├── ApendiceB_Scripts_Zilda_Layer.md    [link simbólico para 04B]
│       ├── ApendiceC_Clausulas_Psi1_Psi2.md    [link simbólico para 08C]
│       └── ApendiceD_Modelo_LTV_Familiar.md    [link simbólico para 06]
│
├── ADR-008_B2C_vs_B2B_ESTRATEGIA/              [a produzir — Peça 3]
│   └── ADR-008-Sequenciamento-v1_0.md
│
├── ADR-009_ZILDA_LAYER_PROTOCOLO/              [eventual]
└── ADR-010_FUNDO_ZILDA_ARQUITETURA/            [eventual]
```

**Regras:**
- ADR selada NUNCA é editada in-place — vira `v?_SELADA/` e cria-se `v?_EM_PRODUCAO/` para o próximo ciclo
- Apêndices usam atalhos Google Drive, não duplicatas
- Arquivo com nome contendo `ADR-XXX` → vai direto para a subpasta correspondente

---

## 04_DEFESA_ANTROPOLOGICA/ (Peça 4)

**Missão:** provar que MC não é startup AI-all-in, mas operação AI-under-Human com trabalho emocional especializado.

```
04_DEFESA_ANTROPOLOGICA/
├── 04A_PROTOCOLO_ZILDA_LAYER/
│   ├── scripts_audio_consentimento_verbal.md
│   ├── vocabulario_permitido_proibido.md
│   ├── pausa_tecnica_48h_protocolo.md
│   └── script_agencia_cliente_nao_favor.md
│
├── 04B_PROTOCOLO_OPERADOR_API_HUMANO/
│   ├── rotacao_4h_x_4h.md
│   ├── supervisao_pareada.md
│   ├── debrief_diario_obrigatorio.md
│   ├── escala_salarial_progressiva.md
│   └── ciclo_ferias_encurtado.md
│
├── 04C_SAUDE_MENTAL_TIME/
│   ├── KPI_bem_estar_operador.md
│   ├── benchmark_call_centers_humanizados.md  [CVC, Magalu, Nubank atendimento]
│   └── benchmark_terceiro_setor.md
│
├── 04D_PERSONAS_AI_MC/
│   ├── Ana_persona_whatsapp.md
│   ├── Carlos_persona_whatsapp.md
│   └── Tereza_persona_whatsapp.md
│
├── 04E_TAGLINE_AI_UNDER_HUMAN/
│   ├── proporcao_5min_IA_vs_14h_HUMANO.md
│   ├── narrativa_institucional_diferenciacao.md
│   └── comparativo_vs_legaltechs_brasileiras.md
│
└── 04F_MANIFESTO_DIGNIDADE/
    └── [documentos fundadores: Tikún Olam, D>C>V, Embaixador dos Vulneráveis]
```

**Regras:**
- Qualquer arquivo com `humaniz`, `empat`, `dignidad`, `vulnerá`, `Tikún`, `Zilda` no conteúdo → 04
- Desempate: se for *princípio abstrato* → 04F; se for *protocolo operacional* → 04A-04C

---

## 05_ANCORA_R12k_JORNADA_CONVENCIONAL/ (Peça 5)

**Missão:** substituir a estimativa "R$12k" por dossiê de 15 fontes primárias auditáveis.

```
05_ANCORA_R12k_JORNADA_CONVENCIONAL/
├── 05A_TRANSPORTE_SEMIARIDO/
│   ├── rota_Quixada_Fortaleza/
│   │   ├── passagens_rodoviarias_print.pdf
│   │   ├── custo_diarias_pernoite.md
│   │   └── hash_fontes.txt
│   ├── rota_Irece_Salvador/
│   ├── rota_Juazeiro_Petrolina/
│   └── consolidado_custo_transporte.md
│
├── 05B_DESPACHANTE_INFORMAL/
│   ├── cotacoes_OLX_marketplace_10_amostras/
│   ├── cotacoes_facebook_marketplace/
│   ├── entrevistas_sindicatos_rurais.md
│   └── consolidado_custo_despachante.md
│
├── 05C_ADVOGADO_INTERIOR/
│   ├── cotacoes_5_cidades_polo.md
│   ├── tabela_OAB_GO_BA_CE_PE_MG_2026.pdf
│   ├── success_fee_pratica_30_percent.md
│   └── consolidado_custo_advogado.md
│
├── 05D_ATRASO_BEPS_DATAPREV/
│   ├── beps012026_final.xls                    [JA TEM — raiz do Drive atual]
│   ├── beps012026.pdf                          [JA TEM]
│   ├── acordaos_TCU_indeferimentos_indevidos.pdf
│   └── calculo_beneficio_atrasado_medio.md
│
├── 05E_DIAS_PERDIDOS/
│   ├── referencia_salario_minimo_rural_2026.md
│   ├── calculo_dias_deslocamento_medio.md
│   └── consolidado_custo_oportunidade.md
│
├── 05F_TAXAS_CARTORARIAS/
│   └── tabela_cartorial_GO_BA_CE.pdf
│
└── 05Z_CONSOLIDADO_R12k/
    ├── MC-DOSSIE-ANCORA-R12k-v1_0.md           [a produzir]
    └── MC-TABELA-15-FONTES-PRIMARIAS-v1_0.csv  [a produzir]
```

**Regras:**
- Qualquer arquivo com `BEPS`, `DataPrev`, `TCU`, `indeferimento`, `atraso` → 05D
- Arquivos sobre `transporte`, `ônibus`, `rodoviária`, `passagem` → 05A
- Arquivos sobre `OAB`, `honorários`, `tabela advogado` → 05C
- Desempate: se for *fonte primária* (documento original) → pasta correspondente; se for *análise derivada* → `05Z`

---

## 06_GEOMETRIA_NUBANK_LTV/ (Peça 6)

**Missão:** matematizar o LTV família 10 anos (R$ 5.500–8.000) para blindar margem Φ₁ contra ataque "por que não cobra mais?".

```
06_GEOMETRIA_NUBANK_LTV/
├── 06A_MODELO_LTV_FAMILIAR/
│   ├── MC-LTV-FAMILIAR-10ANOS-v1_0.xlsx        [a produzir]
│   ├── premissas_churn_projetadas.md
│   └── sensibilidade_churn_3_5_7_10_pct.md
│
├── 06B_PHI4_GUARDIAO_RECORRENTE/
│   ├── MVP_guardiao_especificacao.md
│   ├── benchmark_assinaturas_vulneraveis_brasil.md
│   └── projecao_ARR_10anos.md
│
├── 06C_CASCATA_FAMILIAR/
│   ├── premissa_1.4_casos_adicionais_por_familia.md
│   ├── evidencia_cruzamento_CNIS_familiar.md
│   └── modelagem_cronologica_conjuge_filho_neto.md
│
├── 06D_FINTECH_LAYER_CONTA_MC/
│   ├── conceito_anti_consignado_anti_golpe.md
│   ├── benchmark_Nubank_conta_aposentado.md
│   ├── arquitetura_ntech_conceitual.md
│   └── projecao_revenue_layer_10anos.md
│
└── 06Z_CONSOLIDADO_TESE_NUBANK/
    ├── narrativa_3_camadas_produto_UX_trust.md
    ├── comparacao_Nubank_MC_precisao.md
    └── tese_Phi1_como_CAC_embutido.md
```

**Regras:**
- `Nubank`, `LTV`, `cascata`, `guardião`, `Phi4`, `fintech`, `ARR`, `churn` → 06
- Se menciona assinatura recorrente → 06B
- Se menciona família/cônjuge/BPC/pensão combinado → 06C

---

## 07_EXERCITO_ESPECIALISTAS/ (Peça 7)

**Missão:** pareceres escritos dos 5 especialistas. Blindagem multidisciplinar.

```
07_EXERCITO_ESPECIALISTAS/
├── 07A_JURIDICO_DRA_JULIANA_MELO/
│   ├── perfil_credenciais_OAB_GO_38662.md
│   ├── parecer_5_questoes_F5_Apendice.md       [a encomendar]
│   ├── contrato_Psi1_marketplace_R400_600.md   [a firmar]
│   └── correspondencia/
│
├── 07B_ATUARIO_ECONOMISTA_SAUDE/
│   ├── briefing_validacao_LTV_familiar.md
│   ├── candidatos_perfil_ex_ANS_ex_DataPrev.md
│   └── parecer_recebido/
│
├── 07C_PSICOLOGO_ORG_TRABALHO_EMOCIONAL/
│   ├── briefing_protocolo_antiburnout.md
│   ├── candidatos_perfil_terceiro_setor.md
│   └── parecer_recebido/
│
├── 07D_LGPD_MCP_OAB/
│   ├── briefing_WhatsApp_first_e_Llama_selfhost.md
│   ├── candidatos_DPO_legaltech.md
│   └── parecer_recebido/                       [F5 §9 pediu explicitamente]
│
├── 07E_PRICING_B2C_VULNERAVEIS/
│   ├── briefing_R1500_flat_3x_PIX.md
│   ├── candidatos_ex_Magalu_Via_neobank.md
│   └── parecer_recebido/
│
└── 07Z_DOSSIE_CONSOLIDADO_5_PARECERES/
    └── [a produzir quando os 5 chegarem]
```

**Regras:**
- Qualquer arquivo com CPF/OAB/credencial de advogado, perito, consultor → 07
- Se é parecer de Dra. Juliana especificamente → 07A
- Se é briefing/encomenda vs parecer-recebido → subpasta respectiva

---

## 08_JURIDICO_FIREWALL_OAB/

**Missão:** blindagem transversal — CNAE, firewall PF/PJ, REsp 2.079.440, Ementa 069/2024, ACPs OAB, regeneração Ψ₁.

```
08_JURIDICO_FIREWALL_OAB/
├── 08A_CNAE_6201_5_01_ATIVIDADE_MEIO/
├── 08B_FIREWALL_PF_PJ/
├── 08C_CLAUSULAS_CONTRATUAIS/
│   ├── clausula_regeneracao_Psi1.md
│   ├── clausula_escopo_Psi2_ferramental_puro.md
│   └── clausula_Phi3_teto_absoluto.md
│
├── 08D_JURISPRUDENCIA_CRITICA/
│   ├── REsp_2_079_440/
│   ├── Ementa_069_2024_CFOAB/
│   ├── ACPs_OAB_SP_42_casos/                   [L6 pendente F5]
│   └── BEPS_01_2026/                            [cruza com 05D]
│
└── 08E_PARECERES_OAB_RECEBIDOS/
```

**Regras:**
- Qualquer arquivo com `OAB`, `CFOAB`, `ACP`, `REsp`, `Ementa`, `CNAE`, `atividade-meio`, `firewall`, `Ψ1 regeneração` → 08
- Desempate: se é jurisprudência → 08D; se é cláusula → 08C

---

## 09_ARQUIVO_LEGADO/

**Missão:** preservar rastro do que não faz parte do v3.0 mas não pode ser perdido. Não-escopo explícito.

```
09_ARQUIVO_LEGADO/
├── 09A_GRIMORIO_PREVIDENCIARIO_2026/       [preserva mas fora do core]
├── 09B_BIOGRAFIA_STORYTELLING/              [Arquiteto do Invisível etc.]
├── 09C_IDENTIDADE_VISUAL_MARCA/
├── 09D_EBOOK_100K/
├── 09E_HUMAN_DESIGN_ALESSANDRO/
├── 09F_CASOS_OPERACIONAIS_HISTORICOS/       [PED002, Hib001 etc. — anonimizados]
└── 09Z_QUARENTENA_NAO_CLASSIFICADO/         [Claude Code joga aqui confidence <0.7]
```

---

## 00_INDEX_ARMADURA/ (Dashboard de Navegação)

```
00_INDEX_ARMADURA/
├── INDEX_ARMADURA_v3_0.md                  [a produzir — sumário navegável]
├── MAPA_7_PECAS_VISUAL.md                  [a produzir — mermaid/svg]
├── CHECKLIST_PRE_DUELO_OPUS_4_7.md         [a produzir — critérios de prontidão]
└── RASTRO_AUDITORIA/
    ├── MANIFESTO-ARMADURA-v1_0.csv         [output Claude Code]
    ├── RELATORIO-GAPS-v1_0.md              [output Claude Code]
    └── DUPLICATAS-DETECTADAS.csv           [output Claude Code]
```

---

## Instruções executáveis para Claude Code

### Ambiente mínimo

```bash
# Pré-requisitos
sudo apt install rclone
rclone config  # configurar remote "mcdrive" apontando para Drive do Alessandro
# OU
pip install google-api-python-client google-auth-oauthlib
# + service account com acesso ao folder raiz 1YSSQPvjoZogqcwyHHux64oB2VmerXGsD
```

### Pipeline de execução (3 etapas)

**Etapa 1 — INVENTÁRIO (não-destrutivo, só leitura):**
```bash
rclone lsjson mcdrive:meucumpadre --recursive > inventario_raw.json
# gera ~3200 linhas JSON com id, path, size, mime, modtime
```

**Etapa 2 — CLASSIFICAÇÃO (LLM no loop, produz plano):**
```python
# Para cada arquivo em inventario_raw.json:
#   1. Extrair primeiros 2000 tokens de conteúdo (se texto/doc)
#   2. Aplicar regras deste manifesto (regex + LLM para ambíguos)
#   3. Atribuir: peca (0-9), subpasta, confidence
#   4. Se confidence < 0.7 → marcar para quarentena 09Z
# Output: MANIFESTO-ARMADURA-v1_0.csv
```

**Etapa 3 — EXECUÇÃO (só com `--confirm`):**
```bash
python aplicar_plano.py --manifesto MANIFESTO-ARMADURA-v1_0.csv --confirm
# usa rclone moveto em lote, com logging git-versionado
```

### Custo estimado

- 3.200 arquivos × ~5k tokens médios para classificação = **~16M tokens input**
- Com Haiku 4.5 ou Sonnet 4.6 (econômico) = **~US$ 10–30**
- Com Opus 4.7 = **~US$ 200–400** — não vale a pena para classificação; reserva Opus para os 10% ambíguos

**Recomendação de modelo por etapa:**
- Classificação bulk: Haiku 4.5
- Ambíguos (confidence < 0.8): Sonnet 4.6
- Gap analysis final: Opus 4.7 (aqui ou em chat dedicado)

---

## Após a varredura — checklist de validação do Alessandro

Quando Claude Code entregar o manifesto:

1. [ ] Conferir amostra de 30 arquivos aleatórios — pasta proposta está correta?
2. [ ] Conferir os 20 arquivos com menor confidence — concordo com quarentena?
3. [ ] Conferir duplicatas detectadas — qual é canônica?
4. [ ] Aprovar execução ou solicitar refinamento de regras
5. [ ] Após execução: conferir que Drive permanece navegável (não perdeu ninguém)

---

## Critério de prontidão (arquivo `CHECKLIST_PRE_DUELO_OPUS_4_7.md`)

**O esqueleto está pronto para o duelo quando:**

- [ ] Peça 1 (Tempo-Homem): matriz com 7 espécies preenchidas, custo-hora R$36,79 documentado, curva aprendizado empírica
- [ ] Peça 2 (Planilhas): todas versões vigentes com R$36,79/h, nenhuma R$8,52/h fora de `/DEPRECATED`
- [ ] Peça 3 (ADRs): ADR-007 v3.0 draft + ADR-008 B2C-vs-B2B publicada
- [ ] Peça 4 (Antropológica): Zilda-Layer documentado, protocolo anti-burnout escrito
- [ ] Peça 5 (Âncora R$12k): mínimo 10 das 15 fontes primárias capturadas
- [ ] Peça 6 (Nubank LTV): modelo xlsx com sensibilidade churn
- [ ] Peça 7 (Especialistas): mínimo 3 dos 5 pareceres recebidos (obrigatórios: Jurídico, LGPD, Pricing B2C)

**Gap-tolerance:** aceitável entrar em duelo com 6 de 7 peças robustas + 1 peça em rótulo "WIP provisional" **desde que** a peça WIP seja declarada no próprio v3.0.

---

**FIM — Esqueleto v3.0 pronto para Claude Code.**
