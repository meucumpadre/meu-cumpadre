---
documento: MC-RELATORIO-Onda0-Diagnostico-PainelF3InstitutoMC
versão: 1.0
data: 2026-05-17
autor: Claude Code Opus 4.7 (executor C3.1 sweep diagnóstico)
gerado_via: MB-052 (Mission Brief Cofounder C3.1)
status: ENTREGUE — aguardando revisão Founder + Cofounder C3.1
classificação: Operacional MC — interno
escopo: Vault Obsidian (Cérebro 2) + Documentação Drive (Cérebro 1)
modo: READ-ONLY (zero modificações realizadas)
tags:
  - sweep-diagnostico
  - onda-0
  - painel-monitoramento
  - vertical-captacao-f3
  - instituto-mc-pre-transicao
  - estado-vault
referências:
  - MC-PLANO-OndasExecucao-PainelF3InstitutoMC-v2_0-2026-0517.md
  - MB-052
hierarquia: Dignidade > Compliance > Viabilidade
---

# MC-RELATORIO-Onda0 — Diagnóstico Completo Painel + F3 + Instituto MC

**Sweep executado em:** 2026-05-17 madrugada (Brasília)
**Arquivos `.md` analisados (Vault):** 827
**Pastas auditadas:** 30+ (Vault) · 60+ (Documentação)
**Modo:** READ-ONLY ABSOLUTO — zero modificações realizadas
**Origem:** MB-052 do Cofounder C3.1
**Executor:** Claude Code Opus 4.7 DELL (terminal Beto)

---

## Sumário Executivo

1. **Pastas-alvo do MB-052 NÃO existem no Vault.** As 5 pastas esperadas no root (`07-CAPTACAO-INSTITUCIONAL/`, `08-INDICADORES/`, `indicadores/` lowercase root, `layer-3-grupoA-captacao/`, `Captacao/`) **não foram encontradas** em sweep recursivo total. Vault tem `07-PESQUISAS/` e `08-ARTEFATOS/` (não captação/indicadores). O único `indicadores/` existe em `04-OPERACAO\indicadores\` (1 único arquivo). Conclusão: **a vertical captação + indicadores nunca foi materializada como estrutura canônica no Vault** — vive em outro lugar.
2. **A casa real do Painel + F3 + Indicadores está em `Documentação\_QUEM SOMOS POSICIONAMENTO DE MARCA\_Painel Institucional MC\`** (Cérebro 1). Contém 3 versões evolutivas de `MC-INDICADORES-ImpactoSocial` (v1.0/v1.1/v1.2), `MC-ESG-GRANDEZA-CaptacaoRecursos-v1_0`, blueprint Perplexity do painel, subpastas FINEP/Instituto Ethos/Tecnologia Assistiva. **Antes da Onda 1 isso precisa subir ao Vault** como `05-ESTRATEGIA/captacao-institucional/` (proposta) ou pasta equivalente canônica.
3. **Dos 4 artefatos da sessão cofounder 17/05, apenas 1 persistiu — e fora do Vault.** ADR-017 v1.0 PROVISIONAL está em `Documentação\Instituto Meu Cumpadre\`. MATRIZ v1.4, PLAY v1.2 e PLANO de Ondas v2.0 **AUSENTES em ambos os Cérebros**. Violação direta do Princípio #15 (entrega cofounder cross-vertical) — sessão produziu artefatos sem MB de persistência no mesmo turno.

**TOP RECOMENDAÇÃO DE SANEAMENTO:** Antes da Onda 1, executar 3 MBs sequenciais — (a) persistir ADR-017 v1.0 + MATRIZ v1.4 + PLAY v1.2 + PLANO v2.0 no Vault (`03-GOVERNANCA/adrs/`, `05-ESTRATEGIA/`), (b) criar pasta canônica `05-ESTRATEGIA/captacao-institucional/` e migrar via Copy-Item o conteúdo do `_Painel Institucional MC/`, (c) resolver colisão ADR-016 (no Vault é "AntiInjection" — mas ADR-017 referencia "Bicéfala" cunhada 09/05).

**ALERTA DE RISCO:** ADR-016 tem duas identidades conflitantes — `MC-ADR-016-ComplianceDocumental-AntiInjection-v1_0-2026-0514.md` no Vault (canônico) versus referência "ADR-016 PROVISIONAL Arquitetura Bicéfala Empresa + Instituto MC (cunhada 09/05/2026, não selada)" no corpo do ADR-017. Resolver antes da Onda 1 — proposta: renumerar Bicéfala como retroativa não-ativa ou trocar título canônico do AntiInjection.

---

## 1. Tree Estrutural Vault + Documentação

### 1.1 Vault Root (top-level — pastas canônicas + ruído)

```
G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Gestão Software\OBSIDIAN\MEU CUMPADRE\
├── 01-IDENTIDADE/          (15/05) ⭐ canônica
├── 01-DNA/                 (12/05) ⚠️ duplicação semântica com 01-IDENTIDADE
├── 02-ARQUITETURA/         (14/05) ⭐ canônica
├── 03-GOVERNANCA/          (15/05) ⭐ canônica
├── 04-DADOS/               (12/05) ⚠️ existe paralelamente a 04-OPERACAO
├── 04-OPERACAO/            (13/05) ⭐ canônica
├── 05-ESTRATEGIA/          (15/05) ⭐ canônica
├── 06-COMUNICACAO/         (12/05) ⭐ canônica
├── 06-Processos/           (12/05) ⚠️ vazia (sem .md ativos)
├── 07-PESQUISAS/           (12/05) ⚠️ existe — MB esperava 07-CAPTACAO-INSTITUCIONAL
├── 08-ARTEFATOS/           (12/05) ⚠️ existe — MB esperava 08-INDICADORES
├── 0_4_CADUNICO/           (07/05) ⚠️ candidato → 02-ARQUITETURA\verticais\cadunico\
├── JURIDICO/               (01/05) ⚠️ candidato → 02-ARQUITETURA\verticais\judicial\
├── CLAUDE CODE/            (11/05) operacional
├── Calendar/  Templates/   (operacionais)
├── Documentação/           (10/05) ⚠️ pasta vazia (artefato do legado vault-aninhado)
├── _PESSOAL/  RIO/         (10/05) operacionais
├── _INBOX/                 (13/05) ⭐ canônica (estava vazia antes deste relatório)
├── _HISTORICO/             (13/05) ⭐ canônica
├── _LEGADO-06-OPERACOES-20260513-152654/    ⚠️ legado preservado
├── _LEGADO-vault-aninhado-20260515-140137/  ⚠️ legado preservado
├── 📋 Painel Estratégico.md (06/04) ⚠️ ÓRFÃO ROOT (encoding mojibake) + .gdoc
├── MC-MAPA-Vault-v1_0/v1_1/v1_2 (3 versões)
├── CLAUDE.md + .bak × 4
├── hot.md + .bak × 2
├── INDEX.md
├── MC-INSTRUCOES-PROJETO-v6_0_2-2026-0509.md ⚠️ versão obsoleta (vigente: v8.0.1)
└── (arquivos de bootstrap: .env, .bat, .ps1, .git/, .obsidian/)
```

### 1.2 `03-GOVERNANCA/` (depth 3)

```
03-GOVERNANCA/
├── adrs/                   13 ADRs canônicos + INDEX + 1 STAGE
├── compliance/             (vazia .md)
├── contratos/              7 contratos + _arquivados/
├── lgpd/                   (vazia .md)
├── partners/               (vazia .md)
├── logs/                   (vazia .md)
├── patches/                12 patches PROVISIONAL + _HISTORICO_PATCHES_APLICADOS/ (5)
├── pautas/                 6 pautas Juliana (v2_1→v2_6) + 99-ARQUIVO-Legado/
├── principios/             34 .md (29 ATIVOS + 5 colaterais) + _INDEX
├── ripds/                  3 RIPDs v0.2 selados + 99-ARQUIVO-Legado/
└── mission-briefs/omega/   17 MB-OMEGA (-001 a -014)
```

### 1.3 `02-ARQUITETURA/` (depth 3)

```
02-ARQUITETURA/
├── adrs/                   ⚠️ DUPLICAÇÃO — só _ARQUIVO_DUPLICACOES_LP28/ ativo (5 ADRs antigos)
├── analises/               5 análises + INDEX
├── ativos-visuais/seed/    (sem .md — apenas pasta)
├── changelogs/             1 (jurídico v2.0)
├── govbr/                  5 canônicos (v1.0)
├── grimorio/               2 (v2 + v2 ASCII duplicata)
├── infra/                  1 (Hostinger)
├── inteligencia-setorial/  1 (RADAR Galileu Anti-Injection)
├── mcp/                    2 (MCP v2.0 + v3.0)
├── metodologias/           (vazia .md)
├── router-ethics/          v11.0 canônico + _arquivados/v10
├── specs/                  7 specs raiz + clickup-v3/ (3) + instagram-mc/ (1) + identidade-visual/ (3 + Legado)
└── verticais/              1 (Comprovação Atividade Rural)
```

### 1.4 `04-OPERACAO/` (depth 3)

```
04-OPERACAO/
├── cronometragem/          (vazia .md)
├── equipe/                 1 (Reunião Igor/Carlos)
├── fornecedores/           1 (Reunião Tiago/Bravy)
├── frameworks/             2
├── indicadores/            ★ 1 ÚNICO: MC-INDICADORES-ImpactoSocial-v1_2-2026-0505.md
├── infraestrutura/         10 (DELL + Cowork System Prompt v1.0→v1.4)
├── kits/                   2 (AntiDesespero + DossieConstituicao)
├── logs/                   31 (SYNC-PROTOCOLO + 20+ relatórios MB)
├── pops/                   6 (Visual Law 3-partes + Phi0 + Desbloqueio GovBR)
├── protocolos/             14 POPs E1→E6 + Jornada Mestre + visuallaw/
└── scripts/                3 raiz + identidade-visual/ (2 + aplicacoes/ + Legado)
```

### 1.5 `05-ESTRATEGIA/` (depth 3)

```
05-ESTRATEGIA/
├── conceitos/              1 (Essência Dignidade)
├── design-system/
│   └── foundation-v0_3/    MC-Foundation-DS-v0_3-PROVISIONAL-2026-0515.html (162KB) + .bak
│                           ⚠️ SEM .md descritor · ⚠️ SEM PDF Print neste path
├── growth/  nichos/  pricing/  valuation/  premium-acidentario/  (vazias .md)
├── manifestos/             4 (Fome de Direito × 2 + IdentidadeVisual v1.0 archived + v2.0)
├── politicas/              1 (Comunicação)
├── produtos/               1 (Jornada Ecossistema v2.0)
└── (root)                  MC-PLAY-CEIA-EMBRAPII-Casca-Nucleo-v1_0-2026-0509.md ★
                            ⚠️ versão DESATUALIZADA (Docs tem v1_1; sessão 17/05 cita v1_2 inexistente)
```

### 1.6 Documentação root (top-level — 70+ subpastas)

```
G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Gestão Software\Documentação\
├── _ARQUIVO/  _CONTABILIDADE/  _FINANCEIRO/  _INFRA-ECOSSISTEMA/  _DNA MC/
├── _Knowledge Base v5.0/  _QUEM SOMOS POSICIONAMENTO DE MARCA/  ★★★ casa do painel
├── _RECEITA - B2C - DOSSIÊ SELADO ADR 007/  0 ADR 007/  0 FIDUCIÁRIO DIGITAL ADR-009/
├── _RIPDs-Sprint2-PROVISIONAL-2026-0514/
├── 0 GRIMÓRIO PREVIDENCIÁRIO v2/  0 MIcrofases Jornada Cliente/
├── 01-DNA-Identidade/  02-Arquitetura/  03-Governanca/  04-Operacao/  05-Estrategia/  06-Comunicacao/
│   (duplicatas paralelas ao Vault — paths sincronizados via daemon)
├── 04_2026/  06-OPERACOES/  07-PESQUISAS/  08-ARTEFATOS/
├── Acidentario/  BPC/  CADÚNICO/  Captação/  Captacao/  CadUnico/  CONTA GOV.BR PRATA OURO/
├── ClickUP/  Clonar voz/  DEV _ UX - Igor e Carlos/  ENGENHARIA DE PROMPTS MC/
├── Equitty de Arquitetura de Receita/  Evidências/  Filial/  Fluxos de Automação/
├── Identidade Visual/  Instituto Meu Cumpadre/ ★★★ ADR-017 mora aqui
├── Internacional/  Jornada E0-E7/  LGPD ANDP SCC/  LLM/  LOVABLE/
├── MANUS AI/  Mapeamento de Processos/  Marketing/  Marketplace-Etico/  Maternidade/
├── MCP/  MC-PACOTE-Juliana-19Mai2026/  PcD-LC142/  PEDIDO DE INFORMAÇÃO/  Pensao-AuxilioReclusao/
├── Personas/  Previdenciario/  RouterEthics/  SERVIÇOS BENEFÍCIOS/
├── SKILL MASTER/  SKILLS 8/  TEMP/
└── (arquivos raiz: MC-MEMORIA-Alessandro-Carlos-Igor-Claude-v2_0-2026-0511.md, MC-MEMO-Sessao-12mai2026, etc.)
```

### 1.7 `Documentação\_QUEM SOMOS\_Painel Institucional MC` (casa real do painel)

```
_Painel Institucional MC/
├── _dicionario_dados_icpmc-Perplexity.md (11KB)
├── Arquitetura ESG, dignidade.md (26KB)
├── BLOQUINHO-Insights-Sessao-v1_0-2026-0504.md (17KB)
├── MC-ESG-GRANDEZA-CaptacaoRecursos-v1_0-2026-0503.md (26KB) ★ canônico captação
├── MC-INDICADORES-ImpactoSocial-v1_0-2026-0504.md (31KB)
├── MC-INDICADORES-ImpactoSocial-v1_1-2026-0504.md (62KB)
├── MC-INDICADORES-ImpactoSocial-v1_2-2026-0505.md (66KB) ★ duplicata do Vault
├── MC-PLAY-CEIA-EMBRAPII-Casca-Nucleo-v1_0-2026-0509.md (16KB) ★ duplicata Vault
├── PERPLEXITY _ painel-mc-blueprint.md (15KB) ★★ BLUEPRINT do painel
├── Perplexity _ matriz Arquitetura ESG _ FINEP captação de recursos.txt (28KB)
├── FINEP/  → 30+ arquivos (TECNOVA II/III, CENTELHA, Subvenção, Habilitação Regional,
│             FAQ TecnologiasDigitais, MC_MVP1_Tecnologia_Assistiva.md, MC_Qualificacao_FINEP_TA_v2.md)
│             └── 2026/  → 16 arquivos editais 2026 + BNDES 05_2026/ (FIP IA)
├── Instituto Ethos/  → 30+ PDFs (Indicadores Ethos ASG, Pacto Empresarial, Pesquisa DEI 2024-25,
│                       Marco de Referência Direitos Humanos, Instituto_Ethos_compilado.md 1.4MB)
└── Tecnologia Assisitva/  → 8 arquivos (Portaria 10321, Lei 142/2013, MC-RELATORIO-ArcaboucoLegal
                            v1_1, MC-METAPROMPT-NichoPcD_TA-v1_0, Mapa do dinheiro público e privado TA BR)
```

---

## 2. Inventário de Arquivos (resumo por área-chave)

> Tabelas completas (cada arquivo: path · size · hash12 · modified) foram capturadas durante o sweep. Inventário detalhado preservado nos buffers PowerShell. Aqui o sumário executivo por área.

### 2.1 `03-GOVERNANCA/adrs/` — 13 ADRs + INDEX

| # | ADR | Versão | Hash12 | Modified |
|---|---|---|---|---|
| 007 | CampoPrecificacao-v3_8-ADDENDUM | v3.8 | 4BF067A495AF | 2026-05-07 |
| 008 | DecisoesFerramenta_Stack | v1.0 | 9DB593145941 | 2026-05-10 |
| 009a | Custodia_Credenciais_GovBr | v2.0 | 70671E5E7C0E | 2026-04-25 |
| 009b | TresEstados-Custodia-Dossie | v1.0 | C34D9C36D3CD | 2026-05-12 |
| 010 | E3-Intelligence-Layer | v1.0 | 2971D04280F7 | 2026-05-10 |
| 011 | Arquitetura3Cerebros | v1.0 | 410A17345439 | 2026-05-12 |
| 012 | StackLLM-MultiModelo v1.0 | v1.0 | 7F9C9B81D9F6 | 2026-05-13 |
| 012 | StackLLM-MultiModelo v1.1 | v1.1 | 1928448621F3 | 2026-05-13 |
| 013 | ConvencoesOperacionais-IVCAD-MC | v1.0 | 4B2EA2BB0AD4 | 2026-05-07 |
| 014 | PlataformaAssinaturaEletronica | v1.0 | 28757655F154 | 2026-05-10 |
| 015 | FeaturesAvancadas-ClickUp | v1.0 | C81CA72C212E | 2026-05-12 |
| **016** | **ComplianceDocumental-AntiInjection** | **v1.0** | **ADACCAC0D14C** | **2026-05-14** |
| — | INDEX-ADRS.md | — | F389FEC9AA79 | 2026-05-14 |
| — | STAGE/v6_0_3-rascunho-proibicoes-Ementa069 | — | 0A210C34AC29 | 2026-05-12 |

**ADRs MB-052 esperados mas ausentes do Vault:**
- ADR-016 "Bicéfala Empresa+Instituto MC" → não existe como arquivo (referenciado apenas no corpo do ADR-017)
- ADR-017 → existe em `Documentação\Instituto Meu Cumpadre\` (35KB, 17/05/2026) — **não persistido no Vault**

### 2.2 `03-GOVERNANCA/patches/` — 12 patches PROVISIONAL + 5 históricos aplicados

Patches ATIVOS PROVISIONAL:
- `MC-PRINCIPIO-22-Caminho-Operacional-Adequado-v0_1` + `-25-v0_2` (renumeração pós-colisão)
- `MC-PRINCIPIO-26-AntiColisao-PreCunhagem-v0_1`
- `MC-PRINCIPIO-27-Camada-C5-Claude-Design-v0_1` + `-v0_2` + `-v0_3-MatrizVisual-CapacidadeRestrita`
- `MC-PRINCIPIO-28-Texto-Canonico-Precede-Imagem-v0_1`
- `MC-PRINCIPIO-29-99-ARQUIVO-Legado-v0_1`
- `MC-PRINCIPIO-30-LaboratorioCanonico-vs-FerramentaAplicacao-v0_1`
- `MC-ADR-019-LimitacaoMCP-Drive-v0_1-PROVISIONAL` ⚠️ (não está no índice ADR-INDEX)
- `MC-PATCH-MEMO-v3_0-5-POPVisualLaw-AntiInjection`

Histórico aplicado (`_HISTORICO_PATCHES_APLICADOS/`):
- 5 patches já aplicados a v3.0 (1·2·3·4·MEMO ADR-012 PATCH v1.0→v1.1)
- INDEX-PATCHES-DEPRECADO-2026-0513.md

### 2.3 `03-GOVERNANCA/principios/` — 34 arquivos

| # | Princípio | Status |
|---|---|---|
| 001 | InventarioDeCaminhos | ATIVO |
| 001b | TesteAntesDeAfirmarFuncional | ATIVO |
| 002 | VocabularioInstitucional | ATIVO |
| 003 | RESERVADO (sentinela) | RESERVADO |
| 004-020 | (núcleo) | ATIVO (17 princípios) |
| 015_1 | DescobertaDisparaReconstituicao | ATIVO (sub-princípio) |
| 021 | CronometriaDoHumano | ATIVO |
| 022 | CincoPontosHumanos | ATIVO |
| 024 | DocumentacaoCanonicaUnificada | ATIVO |
| 031 | AssetCanonicoVisualNuncaRecriado | ATIVO |
| 032 | SweepTotalPreCunhagem | ATIVO |
| 033 | SequenciaRecomendacaoEstadoVeredito | ATIVO |
| 034 | CaminhoExplorerPrecedeIDDrive | ATIVO |
| 035 | MBSempreGeraArquivoMD | ATIVO |
| 037 v1.0 | BriefDiamantadoSobrescreveDefaultsUI | (presente) |
| **037 v1.1** | **BriefDiamantadoSobrescreveDefaultsUI v1.1** | **ATIVO (cabeçalho v8.0.1)** |

Colaterais:
- `MC-PRINCIPIO-PENDENTE-DocumentacaoCanonicaUnificada-COLISAO22-v1_0` (resolução colisão)
- `_COLISAO-PRINCIPIOS-MB029-vs-Hib001-2026-0513.md` (audit trail)
- `_INDEX.md` (mapa mestre v1.0)

**Princípios AUSENTES (esperados pelo cabeçalho v8.0.1):** #023, #036, #038-#043 candidatos.

### 2.4 `03-GOVERNANCA/ripds/` — Trinca v0.2 selada

| RIPD | Status | Hash | Modified |
|---|---|---|---|
| Fase1-Dossie-Protocolo-Standard-v0_2-PROVISIONAL | SELADA 15/05 | A5F7EF6EE045 | 2026-05-15 |
| Fase4-Guardiao-PosJornada-v0_2-PROVISIONAL | SELADA 15/05 | 4D60F790F2E5 | 2026-05-15 |
| Hook1b-NIS-IVCAD-MC-v0_2-PROVISIONAL | SELADA 15/05 | 057BF33EC1F6 | 2026-05-15 |

Histórico arquivado: v0.1 PROVISIONAL (Fase1·Fase4·Hook1b) em `99-ARQUIVO-Legado/canonicos-pre-evolucao/` + 2 erratas-tamanho-incompleto em `99-ARQUIVO-Legado/erratas-tamanho-incompleto/`.

### 2.5 `03-GOVERNANCA/mission-briefs/omega/` — 17 MBs

Sequência MB-OMEGA-001 → MB-OMEGA-014 (com PATCH e duplicações 007/008). **Apenas MB-OMEGA do Projeto Ω.** Os MBs sequenciais do MC (-001 até -051) NÃO estão centralizados aqui — vivem dispersos em `04-OPERACAO/logs/` (reportes de execução) e em `01-IDENTIDADE/` (MB-040 e MB-043).

### 2.6 `04-OPERACAO/indicadores/` — 1 único arquivo

```
MC-INDICADORES-ImpactoSocial-v1_2-2026-0505.md  (66KB · hash 342C64716642)
```

**Duplicata canônica** existe em `Documentação\_QUEM SOMOS\_Painel Institucional MC\` (mesmo hash provável — não computado em Docs, mas mesmo tamanho 65868B).

### 2.7 `05-ESTRATEGIA/design-system/foundation-v0_3/`

```
MC-Foundation-DS-v0_3-PROVISIONAL-2026-0515.html       (161.706B · 15/05 22:04)
MC-Foundation-DS-v0_3-PROVISIONAL-2026-0515.html.bak   (161.710B · 15/05 22:04)
desktop.ini
```

**SEM .md descritor canônico.** **SEM PDF Print** (PDF Print 2.4MB referenciado nas Project Instructions vive em `Documentação\Identidade Visual\2 SISTEMA DE PROJETO DESIGN MC _ inicial\MC Design System — Foundation v0.3 PROVISIONAL · Print.pdf` — Cérebro 1).

---

## 3. Duplicações Detectadas

| # | Item | Path A | Path B | Recomendação |
|---|---|---|---|---|
| D1 | `MC-INDICADORES-ImpactoSocial-v1_2-2026-0505.md` (66KB) | `Vault\04-OPERACAO\indicadores\` | `Docs\_QUEM SOMOS\_Painel Institucional MC\` | **MANTER AMBOS** — Vault é canônico, Docs é laboratório vivo. Validar hash igual antes da Onda 1 |
| D2 | `MC-PLAY-CEIA-EMBRAPII-Casca-Nucleo-v1_0-2026-0509.md` (16KB) | `Vault\05-ESTRATEGIA\` | `Docs\_QUEM SOMOS\_Painel Institucional MC\` + `Docs\Captação\` (este é v1_1) | **INVESTIGAR MANUAL** — v1_0 duplo + v1_1 evolução em Docs + sessão 17/05 fala em v1_2 que não existe |
| D3 | ADRs LP28 | `Vault\02-ARQUITETURA\adrs\_ARQUIVO_DUPLICACOES_LP28\` (5 ADRs em formato COM-ADORNOS-OBSIDIAN) | `Vault\03-GOVERNANCA\adrs\` (versões canônicas) | **ARQUIVAR EM 99-LEGADO** — `_ARQUIVO_DUPLICACOES_LP28/` é resíduo de migração já encerrada |
| D4 | `Grimorio_Previdenciario_v2.md` | `Vault\02-ARQUITETURA\grimorio\Grimorio_Previdenciario_v2.md` (800.301B) | `Vault\02-ARQUITETURA\grimorio\0  GRIMÓRIO PREVIDENCIÁRIO v2.md` (800.753B) | **CONSOLIDAR** — diff = 452B; investigar se 1 com diacríticos é canônico e outro é cópia ASCII para LLM |
| D5 | `MC-PROCESSO-Jornada_E0E7_Mestre-v1_3` | `Vault\02-ARQUITETURA\specs\` v1_3 + `Vault\04-OPERACAO\protocolos\` v1_3_1 + `Vault\06-Processos\` v1_3 | três cópias variantes | **CONSOLIDAR** em `02-ARQUITETURA\specs\` ou `04-OPERACAO\protocolos\` apenas, arquivar duas |
| D6 | RIPD Fase1/Fase4/Hook1b v0.1 | `Vault\03-GOVERNANCA\ripds\99-ARQUIVO-Legado\canonicos-pre-evolucao\` | (já arquivado) | **MANTER COMO ESTÁ** — já segue protocolo correto |
| D7 | RIPD-Fase4-v0_2 + RIPD-Hook1b-v0_2 ERRATADO | `Vault\03-GOVERNANCA\ripds\99-ARQUIVO-Legado\erratas-tamanho-incompleto\` | (já arquivado) | **MANTER COMO ESTÁ** — protocolo errata aplicado corretamente |
| D8 | `MC-MANIFESTO-FomeDeDireito` | `Vault\05-ESTRATEGIA\manifestos\MC-MANIFESTO-FomeDeDireito-v1_0-2026-0503.md` (21.769B) + `MC-MANIFESTO-FomeDeDireitoNaodemosopeixeDemosolagodepeixes-v1_0-2026-0503.md` (21.868B) | dois manifestos quase idênticos | **CONSOLIDAR** — diff = 99B; um é provavelmente sucessor textual do outro |
| D9 | `MC-SPEC-Marketplace-CriteriosAdmissao` | `Vault\02-ARQUITETURA\specs\` v1_0 + v1_1 | v1_1 supera v1_0 | **ARQUIVAR EM 99-LEGADO** — v1_0 (25.589B) já foi superado por v1_1 (29.269B) sem banner de supersedência |
| D10 | `MC-PROMPT-MetaCanonico-Renderizacao` | `Vault\01-IDENTIDADE\MC-PROMPT-MetaCanonico-Renderizacao-v1_0-2026-0513.md` (15KB) + `Vault\04-OPERACAO\scripts\identidade-visual\MC-PROMPT-MetaCanonico-Renderizacao-v1_1-2026-0515.md` (30KB) | versões em paths diferentes | **CONSOLIDAR** em `04-OPERACAO\scripts\identidade-visual\` (path canônico Princípio #30 Ferramenta de Aplicação) e arquivar v1_0 |
| D11 | `Captação/` (cedilha, populada 30+ arquivos FINEP/EMBRAPII) vs `Captacao/` (sem cedilha, vazia só desktop.ini) | Documentação root | duplicação semântica acidental | **CONSOLIDAR** — apagar `Captacao/` vazia; `Captação/` é canônica |
| D12 | `01-DNA/` (Vault) vs `01-IDENTIDADE/` (Vault) | duplicação semântica | `01-DNA` tem MC-INSTRUCOES-Projeto-v4_0 e v6_0_2 (obsoletos) + manifestos | **INVESTIGAR MANUAL** — `01-DNA/` parece ser legado pré-evolução; candidato a `99-ARQUIVO-Legado/` |
| D13 | `04-DADOS/` (Vault) vs `04-OPERACAO/` (Vault) | duplicação numérica | `04-DADOS` tem govbr/, beps/, tcu/, cpmi/, lai/ (dados-fonte); `04-OPERACAO` é ops | **MANTER AMBOS** — semanticamente distintos. Mas renomear `04-DADOS` para `04A-DADOS` ou similar para evitar ambiguidade futura |
| D14 | `06-Processos/` (Vault root) com 1 arquivo `MC-PROCESSO-Jornada_E0E7_Mestre-v1_3-2026-0509.md` | duplicação com path canônico `04-OPERACAO\protocolos\` | possível órfão | **CONSOLIDAR** em `04-OPERACAO\protocolos\` e remover `06-Processos/` |
| D15 | `Documentação/` (subpasta dentro do Vault, vazia) | resíduo do `_LEGADO-vault-aninhado-20260515-140137` | pasta vazia | **INVESTIGAR MANUAL** — confirmar se é resíduo seguro de remover |
| D16 | `📋 Painel Estratégico.md` (06/04, encoding mojibake) + `.gdoc` no Vault root | órfão root + emoji + encoding quebrado | duplicação .md/.gdoc | **CONSOLIDAR** — arquivar em `99-ARQUIVO-Legado/` (conteúdo obsoleto de abril, mojibake) |

---

## 4. Mapa Painel e Indicadores

### 4.1 Arquivos canônicos identificados

| # | Arquivo | Path | Estado | Observação |
|---|---|---|---|---|
| P1 | `📋 Painel Estratégico.md` | Vault root | **OBSOLETO** | Última atualização 06/04/2026 · encoding mojibake · referências ADR-007 selo errado · candidato 99-ARQUIVO-Legado |
| P2 | `MC-INDICADORES-ImpactoSocial-v1_2-2026-0505.md` | `Vault\04-OPERACAO\indicadores\` | **ATIVO canônico** | 66KB · referência IPH-MC v1.2 · base sólida para Onda 1 |
| P3 | `MC-INDICADORES-ImpactoSocial-v1_2-2026-0505.md` | `Docs\_QUEM SOMOS\_Painel Institucional MC\` | DUPLICATA | mesma data + tamanho — possível mesmo hash |
| P4 | `MC-INDICADORES-ImpactoSocial-v1_1-2026-0504.md` | `Docs\_QUEM SOMOS\_Painel Institucional MC\` | **HISTÓRICO** | versão evolutiva — preservar mas não usar como canônico |
| P5 | `MC-INDICADORES-ImpactoSocial-v1_0-2026-0504.md` | `Docs\_QUEM SOMOS\_Painel Institucional MC\` | **HISTÓRICO** | versão inicial |
| P6 | `PERPLEXITY _ painel-mc-blueprint.md` | `Docs\_QUEM SOMOS\_Painel Institucional MC\` | **BLUEPRINT ATIVO** | 15KB · base direta para Camada 1 Painel Diário |
| P7 | `_dicionario_dados_icpmc-Perplexity.md` | `Docs\_QUEM SOMOS\_Painel Institucional MC\` | **APOIO** | dicionário de dados ICP-MC |
| P8 | `Arquitetura ESG, dignidade.md` | `Docs\_QUEM SOMOS\_Painel Institucional MC\` | **APOIO** | 26KB · arquitetura ESG conceitual |
| P9 | `BLOQUINHO-Insights-Sessao-v1_0-2026-0504.md` | `Docs\_QUEM SOMOS\_Painel Institucional MC\` | **APOIO** | 17KB · insights de sessão de cunhagem |
| P10 | `MC-MAPEAMENTO-IVCAD-Indicador-Campo-v1_0-2026-0507.md` | `Vault\0_4_CADUNICO\` | **ATIVO específico** | indicador IVCAD-MC |
| P11 | PDFs `INDICADORES_IVCAD_ODS` × 2 + `.gdoc` | `Vault\04-DADOS\` | **REFERÊNCIA** | indicadores oficiais MDS/IVCAD |
| P12 | 130+ PDFs INDICADORES Bolsa Família | `Docs\CADÚNICO\OBSERVATÓRIO\INDICADORES\` | **REFERÊNCIA externa** | base do CadÚnico, usados para IPH-MC cruzamento |
| P13 | `MC-MEMO-Sessao-12mai2026-v1_0-2026-0512.md` | `Vault\04-OPERACAO\logs\` | APOIO | inclui ajustes ao painel |

### 4.2 Conflitos detectados entre arquivos

- ✅ Nenhum conflito de definição entre versões — evolução v1.0 → v1.1 → v1.2 é linear (cresce em tamanho e detalhamento).
- ⚠️ Painel "06/04" (`📋 Painel Estratégico.md`) tem **conteúdo obsoleto** (referência "Holding Juliana DESCARTADA" — superada por ADR mais recente) e encoding mojibake ("ðŸ"¥").
- ⚠️ Nenhum arquivo canônico tipo `MC-PAINEL-*` existe — o nome `📋 Painel Estratégico.md` é único e violenta a convenção `MC-*`.

### 4.3 Indicadores canônicos (Geração 1 + 2) detectados nos arquivos

Geração 1 (operacionais): **CMD · TPA-MC · TMC · TPCD-MC · TIA-MC · RSC-MC · TENV-MC · RA-MC** — todos rastreáveis em `MC-INDICADORES-ImpactoSocial-v1_2`. Cabeçalho v8.0.1 confirma.

Geração 2 (pesquisa): **IPD-MC · IDD · ISIP · TPRP-MC** — só rascunho ou menção em `v1_2`.

IPH-MC v1.2 (composto IVS × IVCAD-MC): definição em `v1_2` + cruzamento com `MC-MAPEAMENTO-IVCAD-Indicador-Campo-v1_0` no path canônico CadÚnico.

---

## 5. Mapa Captação F3

### 5.1 Documentos por instrumento

| Instrumento | Arquivos canônicos | Estado | Path |
|---|---|---|---|
| **FINEP Tecnova III** | `Captação\FINEP\12_03_2024_Manual_Programa_FINEP_TECNOVA_III_01_02_24.pdf` + `Captação\FINEP\2026\` (16 arquivos editais 2026) | **MATERIAL PRONTO** | Docs · 30+ arquivos |
| **FINEP Subvenção** | `Captação\FINEP\02_06_2021_Manual_Subvencao_Economica_-_Parceiros_1.pdf` + 2 outros | RASCUNHO | Docs |
| **FINEP TA (Tecnologias Assistivas)** | `Captação\FINEP\MC_MVP1_Tecnologia_Assistiva.md` + `MC_Qualificacao_FINEP_TA_v2.md` (34KB) | **EM ELABORAÇÃO** | Docs |
| **FINEP MC-ESG-GRANDEZA-CaptacaoRecursos** | `Captação\FINEP\MC-ESG-GRANDEZA-CaptacaoRecursos-v1_0-2026-0503.md` (26KB) | **CANÔNICO v1.0** | Docs (duplicata `_QUEM SOMOS\_Painel\`) |
| **Centelha (MCTI/FINEP)** | `Captação\FINEP\16_08_2019_Manual_do_Avaliador_CENTELHA.pdf` + `.md` | REFERÊNCIA | Docs |
| **BNDES Garagem** | `Captação\FINEP\2026\BNDES 05_2026\09_04_2026_Edital_FIP_IA.pdf` + `.md` + Roteiro | **EDITAL CARREGADO** | Docs |
| **BNB SEAP** | `Captação\BNB SEAP documentação\` (15 arquivos PDF) | REFERÊNCIA | Docs |
| **EMBRAPII (via CEIA-UFG)** | `Vault\05-ESTRATEGIA\MC-PLAY-CEIA-EMBRAPII-Casca-Nucleo-v1_0-2026-0509.md` (16KB) + `Docs\Captação\MC-PLAY-CEIA-EMBRAPII-Casca-Nucleo-v1_1-2026-0509.md` (18KB) | **PROVISIONAL v1.1** (Docs mais novo · Vault desatualizado) · **v1.2 mencionado em sessão 17/05 inexistente** | Conflito de versão |
| **MATRIZ Vácuo Quântico (mapa F1-F5)** | `Docs\Captação\MC-MATRIZ-VacuoQuantico-v1_3-2026-0509.md` (37KB) | **v1.3 mais novo existente · v1.4 mencionado em sessão 17/05 inexistente** | Conflito de versão |
| **Vertical Captação Prompt** | `Docs\Captação\MC-PROMPT-VerticalCaptacao-v2_1-2026-0512.md` (42KB) + `v1_0-2026-0512.md` (19KB) | **v2.1 canônico** | Docs |
| **Epicentro IA (Hub Goiás+AKCIT+CEIA)** | `Docs\Captação\Edital_Epicentro_da_Inteligencia_LgmSJGl.md` + `.pdf` + `_MC-ESTUDO PERPLEXITY-Ementa069-EPICENTRO-v2_0.md` | **MATERIAL PRONTO** | Docs |
| **Ementa069 — relatório** | `Docs\Captação\MC-RELATORIO-Ementa069-Epicentro-v1_0-2026-0512.md` + `Vault\08-ARTEFATOS\relatorios\` (duplicata) + `Vault\07-PESQUISAS\estudos\MC-ESTUDO-Ementa069-Epicentro-v2_0-2026-0419.md` | **CANÔNICO v1.0** | Vault + Docs |
| **Lei do Bem** | **NÃO ENCONTRADO** arquivo dedicado | **GAP** | — |
| **FAPEG** | **NÃO ENCONTRADO** arquivo dedicado | **GAP** | — |
| **Colabora+** | **NÃO ENCONTRADO** arquivo dedicado | **GAP** | — |
| **Emendas parlamentares** | **NÃO ENCONTRADO** arquivo dedicado | **GAP** | — |
| **BID / GIZ / BM (multilateral)** | **NÃO ENCONTRADO** arquivo dedicado | **GAP** | — |
| **Filantropia institucional** | **NÃO ENCONTRADO** arquivo dedicado | **GAP** | — |
| **Dunas Capital** | `Docs\Captação\DUNAS CAPITAL - hotmart.pdf` (1.4MB) + `WORKSHOP - CAPTAÇÃO DE RECURSO 23.12.2025 - PEDRO DINIZ - DUNAS CAPITAL.MD` (96KB) | **REFERÊNCIA workshop** | Docs |
| **GAIA NEXUS — Fase Captação** | `Docs\Captação\1 Fase de Captação de Recursos e Busca de Financiamento Inicial para GAIA NEXUS.md` (15KB) | RASCUNHO | Docs |
| **Manual SBV FINEP 2026** | `Captação\FINEP\2026\06_02_2026_SBV_Regulamento compilado.md` (412KB compilado) + 5 anexos | **REFERÊNCIA compilada** | Docs |

### 5.2 Gaps identificados (instrumentos sem documento dedicado)

1. **Lei do Bem (Lei 11.196/2005 art. 17-26)** — referenciada no ADR-017 como destrava Casca PD&I, mas sem doc dedicado.
2. **FAPEG (Fundação de Amparo à Pesquisa Estado de Goiás)** — mencionado no Plano Ondas v2.0 sem material.
3. **Colabora+** — mencionado no MB-052 §3.3 sem material.
4. **Emendas parlamentares** — gap completo.
5. **Cooperação multilateral (BID, GIZ, Banco Mundial)** — gap completo.
6. **Filantropia institucional (Ford, Lemann, Itaú Social etc.)** — gap completo.

### 5.3 Conflitos/redundâncias

- ⚠️ **MATRIZ Vácuo Quântico** — v1.3 (Docs Captação 09/05) é a mais nova existente; cabeçalho da sessão 17/05 cita **v1.4 inexistente**.
- ⚠️ **PLAY CEIA-EMBRAPII** — Vault tem v1.0, Docs Captação tem v1.1 (mais novo), sessão 17/05 cita **v1.2 inexistente**.
- ⚠️ Material FINEP triplicado em 3 paths: `Docs\Captação\` (canônico) + `Docs\Captação\FINEP\2026\BNDES 05_2026\` + `Docs\_QUEM SOMOS\_Painel Institucional MC\FINEP\` — **mesma pasta FINEP completa replicada**.

---

## 6. Mapa Instituto MC + ADR-017

### 6.1 Arquivos canônicos identificados

| # | Arquivo | Path | Estado | Tamanho |
|---|---|---|---|---|
| I1 | `MC-ADR-017-ArquiteturaTripartite-Empresa-Instituto-ICT-v1_0-2026-0517.md` | `Docs\Instituto Meu Cumpadre\` | **CANÔNICO PROVISIONAL · NÃO PERSISTIDO NO VAULT** | 35.125B |
| I2 | `MC-PLAY-CEIA-EMBRAPII-Casca-Nucleo-v1_0-2026-0509.md` | `Vault\05-ESTRATEGIA\` | ATIVO v1.0 | 16KB |
| I3 | `MC-PLAY-CEIA-EMBRAPII-Casca-Nucleo-v1_1-2026-0509.md` | `Docs\Captação\` | EVOLUÇÃO v1.1 (mais nova) | 18KB |
| I4 | `MC-MATRIZ-VacuoQuantico-v1_3-2026-0509.md` | `Docs\Captação\` | ATIVO v1.3 (mais nova existente) | 37KB |
| I5 | `MC-METAPROMPT-Instituto-TransicaoDonizetti-v1_0-2026-0512` | **REFERENCIADO** em corpo ADR-017 § dependências — não localizado em sweep filename | **AUSENTE FILENAME** (pode existir com nome variante) | — |

### 6.2 Análise do ADR-017 v1.0 (lido primeiras 40 linhas)

- **Status:** ⚠️ PROVISIONAL · submetido a parecer Dra. Juliana 19/05/2026 (Bloco transversal governança institucional + Bloco G/H Casca/Núcleo)
- **Substitui parcialmente:** ADR-016 PROVISIONAL "Arquitetura Bicéfala Empresa + Instituto MC" (cunhada 09/05/2026, **não selada**)
- **3 descobertas estratégicas convergentes:**
  1. Casca/Núcleo (PLAY 09/05) — captação institucional não-reembolsável (F3) exige cotitularidade PI com ICT
  2. Donizetti D1 (decisão Founder 09-12/05) — Programa Donizetti Solidariedade (CNPJ 50.851.667/0001-76, ativo desde 09/06/2022) oferecido por Thielle Cathia
  3. Ecossistema CEIA-UFG/Lab.EITA/AKCIT/EMBRAPII

### 6.3 Termos buscados — presença

| Termo | Match | Path |
|---|---|---|
| `Donizetti` | **0 matches em nomes de arquivo** (mas referenciado no corpo do ADR-017) | — |
| `Instituto-MC` ou `InstitutoMC` | **0 matches em nomes** | — |
| `Tripartite` | 1 match | `Docs\Instituto Meu Cumpadre\MC-ADR-017-...` |
| `Casca-Nucleo` | 3 matches (1 Vault + 2 Docs) | já listados |
| `EMBRAPII` | 3 matches | já listados |
| `CEIA` | embutido nos arquivos `MC-PLAY-CEIA-EMBRAPII-*` | — |
| `OSCIP` | **0 matches em filenames** | (não encontrado) |
| `CEP / CONEP` | **0 matches em filenames** | (referenciado apenas no corpo ADR-017) |
| `Lei 10.973` | **0 matches em filenames** | — |
| `Acordo de Parceria` | **0 matches em filenames** | — |

### 6.4 Conflito ADR-016 (CRÍTICO)

- **Vault canônico:** `MC-ADR-016-ComplianceDocumental-AntiInjection-v1_0-2026-0514.md` (modificado 14/05 · hash ADACCAC0D14C · 82 linhas)
- **Referência no ADR-017:** "ADR-016 PROVISIONAL Arquitetura Bicéfala Empresa+Instituto MC (cunhada 09/05/2026, não selada)"
- **Diagnóstico:** Dois conceitos diferentes disputam o número 016. O Vault canônico é **AntiInjection**; o ADR-017 referencia **Bicéfala**. O arquivo "Bicéfala" **não existe** em filenames do Vault nem da Documentação.
- **Hipótese:** ADR-016 Bicéfala foi cunhado 09/05 mas nunca persistido como arquivo; cobriu apenas o conceito no PLAY-CEIA-EMBRAPII v1.0. Em 14/05 o número 016 foi reutilizado por **AntiInjection** sem registrar a colisão. ADR-017 agora "substitui parcialmente ADR-016 Bicéfala" referenciando um ADR fantasma.
- **Recomendação:** Resolver via Princípio #4 (Errata Absorve, Não Inventa) + #26 (Anti-Colisão Pré-Cunhagem):
  - Opção A: Renumerar canônico AntiInjection como ADR-016 v2.0 SUPERSEDED por motivo de colisão e cunhar ADR-018 AntiInjection
  - Opção B: Aceitar AntiInjection como ADR-016 oficial e cunhar ADR-017 sem referenciar "ADR-016 Bicéfala" — Bicéfala vira "conceito embutido no PLAY-CEIA-EMBRAPII v1.0", não ADR fantasma
  - **Recomendado: Opção B** (preserva canônico vigente, evita renumeração retroativa)

---

## 7. Status Artefatos Sessão 17/05/2026

| # | Arquivo esperado | Presente Vault? | Presente Docs? | Path | Recomendação |
|---|---|---|---|---|---|
| 1 | `MC-ADR-017-ArquiteturaTripartite-Empresa-Instituto-ICT-v1_0-2026-0517.md` | ❌ NÃO | ✅ SIM | `Docs\Instituto Meu Cumpadre\` (35.125B · 17/05 10:19) | **PERSISTIR no Vault** em `03-GOVERNANCA\adrs\` via MB pós-Onda 0 |
| 2 | `MC-MATRIZ-VacuoQuantico-v1_4-2026-0517.md` | ❌ NÃO | ❌ NÃO (só v1.3) | `Docs\Captação\MC-MATRIZ-VacuoQuantico-v1_3-2026-0509.md` | **PRODUZIR v1.4** + persistir Vault `05-ESTRATEGIA\` ou `07-PESQUISAS\` |
| 3 | `MC-PLAY-CEIA-EMBRAPII-Casca-Nucleo-v1_2-2026-0517.md` | ❌ NÃO | ❌ NÃO (Vault tem v1.0, Docs Captação tem v1.1) | três versões anteriores dispersas | **PRODUZIR v1.2** + persistir Vault como canônico único + arquivar v1.0/v1.1 |
| 4 | `MC-PLANO-OndasExecucao-PainelF3InstitutoMC-v2_0-2026-0517.md` | ❌ NÃO | ❌ NÃO | inexistente em ambos os Cérebros | **PRODUZIR + persistir** — sem ele a Onda 0/1 perde gatilho operacional |

**Conclusão:** Sessão cofounder C3.1 × Founder de 17/05 cunhou 4 artefatos canônicos PROVISIONAL **e apenas 1 persistiu (em local errado — Documentação, não Vault)**. Princípio #15 (Entrega cofounder cross-vertical) violado em 3/4. Recomendação: MB de persistência IMEDIATO antes da Onda 1.

---

## 8. Estado dos ADRs Canônicos

| ADR | Título canônico | Versão | Status | Path |
|---|---|---|---|---|
| 007 | CampoPrecificacao ADDENDUM | v3.8 | ⚠️ PROVISIONAL (selagem v4.0 pós-19/05) | `Vault\03-GOVERNANCA\adrs\` |
| 008 | DecisoesFerramenta Stack | v1.0 | ✅ SELADO | `Vault\03-GOVERNANCA\adrs\` |
| 009a | Custodia Credenciais GovBr | v2.0 | ✅ SELADO | `Vault\03-GOVERNANCA\adrs\` |
| 009b | Três Estados Custódia Dossiê | v1.0 | ✅ SELADO | `Vault\03-GOVERNANCA\adrs\` |
| 010 | E3 Intelligence Layer | v1.0 | ✅ SELADO | `Vault\03-GOVERNANCA\adrs\` |
| 011 | Arquitetura 3 Cérebros | v1.0 | ✅ SELADO (estendido por Pipeline Cofounder 15/05) | `Vault\03-GOVERNANCA\adrs\` |
| 012 | Stack LLM Multi-Modelo | v1.0 + v1.1 | ⚠️ PROVISIONAL (v1.1 com PATCH pendente aplicação) | `Vault\03-GOVERNANCA\adrs\` (ambas) |
| 013 | Convenções Operacionais IVCAD-MC | v1.0 | ⚠️ PROVISIONAL (selagem v1.1 pós-19/05 + SAGICAD) | `Vault\03-GOVERNANCA\adrs\` |
| 014 | Plataforma Assinatura Eletrônica (ZapSign) | v1.0 | ✅ SELADO | `Vault\03-GOVERNANCA\adrs\` |
| 015 | Features Avançadas ClickUp | v1.0 | ⚠️ PROVISIONAL (revisão pós-N=100) | `Vault\03-GOVERNANCA\adrs\` |
| **016** | **ComplianceDocumental AntiInjection** | **v1.0** | ✅ SELADO 14/05 (⚠️ **colisão com referência ADR-017**) | `Vault\03-GOVERNANCA\adrs\` |
| **016 (fantasma)** | **"Bicéfala Empresa+Instituto MC"** | (sem arquivo) | ⚠️ REFERÊNCIA-SOMBRA em ADR-017 corpo | inexistente |
| **017** | **Arquitetura Tripartite Empresa × Instituto × ICT** | **v1.0** | ⚠️ PROVISIONAL · **NÃO no Vault** | `Docs\Instituto Meu Cumpadre\` |
| 019 | Limitação MCP Drive | v0.1 PROVISIONAL | ⚠️ EM PATCHES (não promovido a ADR) | `Vault\03-GOVERNANCA\patches\` |

**INDEX-ADRS.md** existe (`Vault\03-GOVERNANCA\adrs\INDEX-ADRS.md` · 6.789B · 14/05) — precisa de atualização para refletir ADR-016 colisão + ADR-017 quando persistido.

---

## 9. Princípios e Patches

### 9.1 Princípios em `03-GOVERNANCA/principios/` (ATIVOS canônicos)

Total: **29 ATIVOS + #3 RESERVADO** confirmados pelo cabeçalho v8.0.1. Estado de arquivos físicos detectado:

**ATIVOS confirmados (arquivo `.md` presente):**
- #001 InventarioDeCaminhos
- #001b TesteAntesDeAfirmarFuncional
- #002 VocabularioInstitucional
- #003 RESERVADO (sentinela)
- #004 ErrataAbsorveNaoInventa
- #005 PersistenciaDePatches
- #006 CamadasDeSegurancaOperacional
- #007 CadeiaDeAutorizacaoDual
- #008 VerdeAmareloVermelhoLGPD
- #009 EsteiraPrimeiroHumanoValida
- #010 ArquiteturaHerdaSpecDocumenta
- #011 GovernancaForteMoraNoN8N
- #012 CustomFieldDropdownMaiorQueTaskCentral
- #013 ViewFiltradaMaiorQueTIML
- #014 WebhooksReativosPlusPolling
- #015 EntregaCofounderCrossVertical
- #015_1 DescobertaDisparaReconstituicao (sub-princípio)
- #016 IniciativaEstrategicaCofounder20x
- #017 GovBrInfraestruturaNacionalIdentidade
- #018 RiscoProvisionalDocumentado
- #019 PatchesSaoInstrumentosTemporarios
- #020 WorkflowSincronizacaoPermanente
- #021 CronometriaDoHumano
- #022 CincoPontosHumanos
- #024 DocumentacaoCanonicaUnificada
- #031 AssetCanonicoVisualNuncaRecriado
- #032 SweepTotalPreCunhagem
- #033 SequenciaRecomendacaoEstadoVeredito
- #034 CaminhoExplorerPrecedeIDDrive
- #035 MBSempreGeraArquivoMD
- #037 v1.0 BriefDiamantadoSobrescreveDefaultsUI
- #037 v1.1 BriefDiamantadoSobrescreveDefaultsUI **(promovido ATIVO 17/05 madrugada)**

**Princípios mencionados no cabeçalho v8.0.1 mas SEM arquivo físico:**
- #023 Cronometria do Humano THU/TTC/RA-MC (cabeçalho coloca como #023; arquivo existe como #021 → **conflito de numeração na renumeração canônica de 13/05 não totalmente refletido em arquivos**)
- #036 Persistência Drive Bit-a-Bit — **arquivo ausente** (mencionado no cabeçalho v8.0.1)
- #038-#043 candidatos pós-Juliana — esperado ausente

**Arquivos colaterais auditáveis:**
- `_INDEX.md` v1.0 (mapa mestre · 10.692B · 15/05 16:27)
- `_COLISAO-PRINCIPIOS-MB029-vs-Hib001-2026-0513.md` (audit trail de colisão)
- `MC-PRINCIPIO-PENDENTE-DocumentacaoCanonicaUnificada-COLISAO22-v1_0-2026-0513.md`

### 9.2 Patches PROVISIONAL em `03-GOVERNANCA/patches/`

12 patches ativos. Estado:

| Patch | Conceito | Slot final esperado | Gate de promoção |
|---|---|---|---|
| MC-PRINCIPIO-22-Caminho-Operacional-v0_1 | (legado, virou v0_2 #25) | — | superseded |
| MC-PRINCIPIO-25-Caminho-Operacional-v0_2 | C1 MCP direto vs C3 MB | #25 ATIVO pós-Juliana 19/05 | Bloco O |
| MC-PRINCIPIO-26-AntiColisao-PreCunhagem-v0_1 | Inventário obrigatório | #26 ATIVO pós-Juliana 19/05 | Bloco O |
| MC-PRINCIPIO-27-Camada-C5-Claude-Design-v0_1 / v0_2 / v0_3 | Matriz Visual Capacidade Restrita | #27 ATIVO pós-Juliana 19/05 (v0.3 é canônico) | Bloco O |
| MC-PRINCIPIO-28-Texto-Canonico-Precede-Imagem-v0_1 | João 1:1 | #28 ATIVO pós-Juliana 19/05 | Bloco O |
| MC-PRINCIPIO-29-99-ARQUIVO-Legado-v0_1 | Pasta canônica por pilar | #29 ATIVO pós-Juliana 19/05 | Bloco O |
| MC-PRINCIPIO-30-LaboratorioCanonico-vs-FerramentaAplicacao-v0_1 | claude.ai/design vs Canva | #30 ATIVO pós-Juliana 19/05 | Bloco O |
| MC-ADR-019-LimitacaoMCP-Drive-v0_1 | (ADR, não princípio) | promoção a ADR | Bloco O |
| MC-PATCH-MEMO-v3_0-5-POPVisualLaw-AntiInjection | patch operacional v3.0 | aplicação ao docto-mãe | imediato |

### 9.3 `_INDEX.md` em principios — confirmado existir (v1.0 · 15/05/2026)

Mapa mestre presente, atualização recomendada pós-Onda 0 para refletir:
- Princípio #36 (arquivo ausente — cunhar)
- Promoção #37 v1.1 ATIVO (16/05) por gate cruzado de 3 ferramentas
- Cunhagem #38-#43 pós-Juliana

---

## 10. Recomendações de Saneamento Pré-Onda 1

### 10.1 CONSOLIDAR antes de iniciar Onda 1

1. **Migrar `Docs\_QUEM SOMOS\_Painel Institucional MC\`** → criar `Vault\05-ESTRATEGIA\captacao-institucional\` (proposta de path canônico) e Copy-Item de todo conteúdo. Justificativa: laboratório vivo do painel + F3 + indicadores está fora do Cérebro 2.
2. **Persistir os 4 artefatos da sessão 17/05** com MBs sequenciais:
   - MB-A: `MC-ADR-017` → `Vault\03-GOVERNANCA\adrs\` (resolver colisão #016 antes — ver §6.4)
   - MB-B: produzir `MC-MATRIZ-VacuoQuantico-v1_4-2026-0517.md` + persistir
   - MB-C: produzir `MC-PLAY-CEIA-EMBRAPII-Casca-Nucleo-v1_2-2026-0517.md` + persistir + arquivar v1.0/v1.1
   - MB-D: produzir `MC-PLANO-OndasExecucao-PainelF3InstitutoMC-v2_0-2026-0517.md` + persistir
3. **Resolver colisão ADR-016** (AntiInjection no Vault vs Bicéfala em corpo do ADR-017) — recomendação Opção B (§6.4): aceitar AntiInjection como canônico, ajustar corpo ADR-017 para não referenciar "ADR-016 Bicéfala" como ADR mas como conceito embutido no PLAY v1.0.
4. **Cunhar Princípio #036 Persistência Drive Bit-a-Bit** — arquivo ausente em `principios/` apesar de mencionado no cabeçalho v8.0.1.
5. **Fundir `Grimorio_Previdenciario_v2.md` × 2** em `02-ARQUITETURA\grimorio\` (diff 452B — investigar qual é canônico).
6. **Consolidar `MC-PROCESSO-Jornada_E0E7_Mestre`** triplicado em `02-ARQUITETURA\specs\` ou `04-OPERACAO\protocolos\` apenas.
7. **Consolidar `MC-PROMPT-MetaCanonico-Renderizacao`** em `04-OPERACAO\scripts\identidade-visual\` (path canônico Princípio #30) — arquivar v1.0.
8. **Apagar `Docs\Captacao\` vazia** (só desktop.ini) — manter `Docs\Captação\` (cedilha) canônica.

### 10.2 ARQUIVAR em `99-ARQUIVO-Legado/` antes de iniciar Onda 1

1. **`📋 Painel Estratégico.md`** + `.gdoc` no Vault root → mover para `99-ARQUIVO-Legado\painel-pre-onda0-20260517\` (conteúdo obsoleto 06/04 com encoding mojibake).
2. **`MC-INSTRUCOES-PROJETO-v6_0_2-2026-0509.md`** no Vault root → `99-ARQUIVO-Legado\instrucoes-projeto-pre-v8_0_1\` (vigente v8.0.1).
3. **`MC-MAPA-Vault-v1_0/v1_1`** root → `99-ARQUIVO-Legado\` (v1.2 é canônico).
4. **`02-ARQUITETURA\adrs\_ARQUIVO_DUPLICACOES_LP28\`** (5 ADRs em formato COM-ADORNOS-OBSIDIAN) → `99-ARQUIVO-Legado\adrs-formatos-pre-LP28\`.
5. **`MC-SPEC-Marketplace-CriteriosAdmissao-v1_0-2026-0430.md`** (superado por v1.1) → `02-ARQUITETURA\specs\99-ARQUIVO-Legado\`.
6. **CLAUDE.md.bak × 4** + **hot.md.bak × 2** no Vault root → `99-ARQUIVO-Legado\claude-md-historico\`.
7. **`06-Processos/` Vault root** (1 arquivo duplicado de `04-OPERACAO\protocolos\`) → remover pasta após consolidação.

### 10.3 CRIAR DO ZERO (gaps confirmados)

1. **`Vault\05-ESTRATEGIA\captacao-institucional\` (ou alternativa estrutural)** — pasta canônica F3.
2. **`MC-PAINEL-CamadaDiaria-v1_0-2026-MMDD.md`** — primeiro entregável Onda 1 (Painel Camada 1 Diário).
3. **`MC-MATRIZ-VacuoQuantico-v1_4-2026-0517.md`** — incorpora tripartite + Saúde T1-T7.
4. **`MC-PLAY-CEIA-EMBRAPII-Casca-Nucleo-v1_2-2026-0517.md`** — atualizado tripartite.
5. **`MC-PLANO-OndasExecucao-PainelF3InstitutoMC-v2_0-2026-0517.md`** — gatilho operacional Ondas 1-6.
6. **Documentos dedicados aos gaps F3** (priorizar conforme decisão Founder):
   - `MC-CAPTACAO-LeiDoBem-v1_0-AAAA-MMDD.md`
   - `MC-CAPTACAO-FAPEG-v1_0-AAAA-MMDD.md`
   - `MC-CAPTACAO-ColaboraMais-v1_0-AAAA-MMDD.md`
   - `MC-CAPTACAO-EmendasParlamentares-v1_0-AAAA-MMDD.md`
   - `MC-CAPTACAO-Multilateral-BID-GIZ-BM-v1_0-AAAA-MMDD.md`
   - `MC-CAPTACAO-Filantropia-v1_0-AAAA-MMDD.md`
7. **`MC-PRINCIPIO-036-PersistenciaDriveBitABit-v1_0.md`** — arquivo de princípio ausente.

### 10.4 MANTER COMO ESTÁ (já está canônico)

1. `03-GOVERNANCA\adrs\` (estrutura) — apenas adicionar ADR-017 e atualizar INDEX.
2. `03-GOVERNANCA\ripds\` (Trinca v0.2 selada · 99-ARQUIVO-Legado/ corretamente populado).
3. `03-GOVERNANCA\pautas\` (estrutura · v2.6 canônica · v2.5 corretamente em Legado).
4. `03-GOVERNANCA\principios\` (estrutura · _INDEX.md presente · apenas faltam #036, #038-#043).
5. `04-OPERACAO\indicadores\` (1 arquivo canônico — pode receber novos sem reorganização).
6. `05-ESTRATEGIA\design-system\foundation-v0_3\` (estrutura · apenas adicionar `.md` descritor canônico).
7. `_HISTORICO\exploracao-identidade-visual-pre-selagem-13mai\` (preservação correta de exploração pré-selagem).
8. `_LEGADO-06-OPERACOES-20260513-152654\` e `_LEGADO-vault-aninhado-20260515-140137\` (legados preservados conforme Princípio #4).

### 10.5 Sequência operacional recomendada (T+1 a T+5)

| T+ | Ação | MB | Justificativa |
|---|---|---|---|
| T+1 | Resolver colisão ADR-016 (Opção B) | MB-053 | Destrava ADR-017 persistência |
| T+1 | Persistir ADR-017 v1.0 no Vault | MB-054 | Princípio #15 |
| T+2 | Cunhar Princípio #036 (arquivo ausente) | MB-055 | Coerência cabeçalho v8.0.1 |
| T+2 | Produzir MATRIZ v1.4 + PLAY v1.2 + PLANO v2.0 | MB-056 | Sessão 17/05 fica órfã sem isso |
| T+3 | Migrar `_Painel Institucional MC` → Vault | MB-057 | Casa real do painel sobe ao Cérebro 2 |
| T+3 | Apagar Captacao/ vazia + sanear root Vault | MB-058 | Limpeza pré-Onda 1 |
| T+4 | Iniciar Onda 1 — Painel Camada 1 Diário | (Plano Ondas v2.0) | Fundamento de painel sólido |
| T+5 | Indexação final de ADRs/Princípios atualizados | MB-059 | INDEX-ADRS + _INDEX.md princípios |

---

## Apêndice A — Métricas do Sweep

- **Pastas raiz auditadas (Vault):** 30+
- **Pastas raiz auditadas (Documentação):** 60+
- **Arquivos `.md` Vault:** 827
- **ADRs canônicos detectados:** 13 (mais 5 duplicações LP28 + 1 STAGE)
- **Princípios canônicos detectados:** 32 arquivos físicos (29 ATIVOS declarados + 1 RESERVADO + 2 versões #037)
- **Patches PROVISIONAL ativos:** 12
- **RIPDs selados:** 3 (Trinca v0.2)
- **MBs OMEGA:** 17 arquivos
- **Pautas Juliana:** 6 versões (v2.1→v2.6 + 1 arquivada)
- **Contratos:** 7 (Phi1 v2.4 canônico + Psi1 v1.4 + Social v1.0)
- **POPs:** 17 (E1-E6 + Visual Law 3 partes + Phi0 + Bitwarden + Handoff)
- **Logs operacionais (`04-OPERACAO\logs\`):** 31 arquivos

## Apêndice B — Erros e permissões

- ✅ Nenhum erro de permissão de leitura detectado em qualquer path auditado.
- ✅ Encoding mojibake confirmado em `📋 Painel Estratégico.md` (Vault root) e nos previews PowerShell ao ler conteúdo via `Get-Content` padrão — não afetou identificação de arquivos.
- ✅ Truncamento ocorreu em 2 outputs do PowerShell (preservados em `tool-results\be80fkh4y.txt` e `b6m08tw4b.txt` no diretório de cache do Claude Code; podem ser descartados após validação deste relatório).
- ✅ Zero modificações de arquivos ou pastas existentes durante o sweep (modo READ-ONLY ABSOLUTO honrado).
- ✅ Único arquivo criado: este relatório em `_INBOX\`.

## Apêndice C — Frase-âncora e selo

> "TECNOLOGIA INVISÍVEL. DIGNIDADE ACESSÍVEL."
> "O diamante é carbono que não desistiu da pressão."
> "É eu, tu e a Sister. ∞"

---

**Hierarquia:** Dignidade > Compliance > Viabilidade
**Selo:** Sweep diagnóstico Onda 0 — entregue
**Próxima ação:** Revisão Founder + Cofounder C3.1 + sequência MB-053 → MB-058 antes de iniciar Onda 1

∞

*MC-RELATORIO-Onda0-Diagnostico-PainelF3InstitutoMC v1.0 — 17 de maio de 2026*
*Executor: Claude Code Opus 4.7 DELL · Origem: MB-052 Cofounder C3.1*
