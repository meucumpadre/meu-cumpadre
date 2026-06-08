# MB-DIAGNOSTICO-001 · RELATÓRIO DE SWEEP READ-ONLY · 2026-05-13

**Executor:** Claude Code (DELL Beto)
**Modo:** DIAGNÓSTICO APENAS · zero mutações
**Início:** 2026-05-13 ~16:10
**Fim:** 2026-05-13 ~16:15
**Status final:** ✅ SUCESSO

---

## T1 · Pasta `_LEGADO-06-OPERACOES-20260513-152654`

**Existe:** SIM
**Total de arquivos:** 37 (28 `.md` + 9 `desktop.ini`)
**Total de pastas (subpastas):** 8
**Tamanho:** 738.9 KB
**CreationTime da pasta-raiz:** 27/03/2026 12:20:47 (herdado do rename do `06-OPERACOES` original — Windows preserva CreationTime em rename)
**LastWriteTime da pasta-raiz:** 13/05/2026 15:26:54 (exatamente o timestamp embutido no nome `-20260513-152654`)

### Estrutura de subpastas (8)
```
_LEGADO-06-OPERACOES-20260513-152654/
├── frameworks/
├── playbooks/             (vazia · só desktop.ini)
├── protocolos/
│   ├── _arquivo/
│   └── visuallaw/
├── equipe/
├── fornecedores/
└── jornada-e0-e07/        (vazia · só desktop.ini)
```

### Lista completa dos 28 .md (excluindo desktop.ini)

**Raiz da pasta legado (7 arquivos):**
- `README.md`
- `MC-BRIEFING-CARLOS-UX-E0E7.md`
- `licoes-aprendidas.md`
- `MC-BRIEFING-Alinhamento_Tecnico_Igor.md`
- `MC-GOVBR-ArvoreDecisao-APIHumana-v1_1-2026-0509.md`
- `MC-GOVBR-ERRATA-001-KBA-Bronze-Reposicionamento-v1_0-2026-0509.md`
- `MC-GOVBR-Anamnese-Triagem-GovBr-v1_0-2026-0509.md`

**`frameworks/` (2):**
- `MC-KB-Framework_Performance_Mentalidade_CEO-v1_0-2026-0323.md`
- `Frameworks_Estrategicos_Checkin_v1.md`

**`protocolos/` (10):**
- `README.md`
- `MC-POP-Encerramento-Caso-v1_0-2026-0427.md`
- `MC-POP-E6-Resolucao-v1_0-2026-0427.md`
- `MC-POP-E5-Watchdog-Exigencias-v1_0-2026-0427.md`
- `MC-POP-E4-Protocolo-INSS-v1_0-2026-0427.md`
- `MC-POP-E3b-QA-Dossie-v1_0-2026-0427.md`
- `MC-POP-E3-Coleta-Documental-v1_0-2026-0427.md`
- `MC-POP-E2-Triagem-Deliberacao-v1_0-2026-0427.md`
- `MC-POP-E1-PrimeiroContato-v1_0-2026-0427.md`
- `MC-POP-Bitwarden-Custodia-v1_0-2026-0427.md`
- `MC-POP-Handoff-Juridico-v1_0-2026-0427.md`
- `MC-PROCESSO-Jornada_E0E7_Mestre-v1_3_1-2026-0509.md`
- `MC-POP-Phi0-Triagem-Operacional-v1_0-2026-0507.md`

**`protocolos/_arquivo/` (1):**
- `MC-PROCESSO-Jornada_E0E7_Mestre-v1_2-2026-0427.md`

**`protocolos/visuallaw/` (3):**
- `MC-POP-VisualLaw-DossieSelado-PARTE1-v1_2-2026-0502.md`
- `MC-POP-VisualLaw-DossieSelado-PARTE2-v1_3-2026-0502.md`
- `MC-POP-VisualLaw-DossieSelado-PARTE3-v1_3-2026-0502.md`

**`equipe/` (1):**
- `MC-ANALISE-Reuniao_Igor_Carlos-v1_0-2026-0408.md`

**`fornecedores/` (1):**
- `MC-ANALISE-Reuniao_Tiago_Bravy-v1_0-2026-0415.md`

### Contagem por extensão
| Extensão | Count |
|---|---|
| `.md` | 28 |
| `.ini` | 9 (`desktop.ini` em cada subpasta — artefato Google Drive Desktop) |

---

## T2 · Inferência de origem da pasta legado

### Evidências verificadas

| Teste | Resultado |
|---|---|
| `06-OPERACOES` original ainda existe? | ❌ NÃO (`Test-Path` retorna False) |
| `04-OPERACAO` existe e tem conteúdo? | ✅ SIM · com subpastas `frameworks/`, `protocolos/`, `equipe/`, `fornecedores/` criadas em 13/05 15:26:53-54 (mesmo timestamp do rename) |
| Conteúdo de `_LEGADO-...` está espelhado em `04-OPERACAO/`? | ✅ SIM · arquivos no topo de `04-OPERACAO/` (README.md, MC-BRIEFING-CARLOS-UX-E0E7.md, licoes-aprendidas.md, MC-BRIEFING-Alinhamento_Tecnico_Igor.md, 3 docs MC-GOVBR) são **os mesmos nomes** do topo de `_LEGADO-...` · subpastas `frameworks/protocolos/equipe/fornecedores/visuallaw/_arquivo/` também replicadas em `04-OPERACAO/` com criação simultânea em 13/05 15:26:53-54 |

### Hipótese mais consistente: **A híbrido B**

**Operação real provavelmente executada pela guia paralela em 13/05 15:26:54:**
1. `Copy-Item` recursivo de `06-OPERACOES/` → `04-OPERACAO/` (consolidação de operações sob numeração canônica unificada)
2. Rename de `06-OPERACOES/` → `_LEGADO-06-OPERACOES-20260513-152654/` (preservação histórica via `_LEGADO-` prefix, conforme princípio recém-cunhado pela guia paralela — ver T3 abaixo)

Hipótese A pura (só rename) é insuficiente porque o conteúdo aparece em ambas as pastas. Hipótese B pura (só backup) é insuficiente porque a pasta original sumiu da hierarquia. A operação foi consolidação + preservação histórica — alinhada com o princípio MC #4 (Errata Absorve, Não Inventa) e com o princípio "Documentação Canônica Unificada por Pilar" que a guia paralela estava propondo (ver T3).

### Justificativa

- Princípio MC #4 está sendo respeitado (não houve `Move-Item` puro · há Copy + rename, preservando original sob alias `_LEGADO-`)
- Timestamps perfeitamente alinhados às 15:26:53-54 indicam operação batch única
- O `_LEGADO-` prefix é convenção sugerida pelo próprio arquivo PENDENTE COLISAO22 (T3): *"pastas órfãs renomeadas como `_LEGADO-{nome}-{timestamp}` para preservação histórica sem permanência operacional."*

---

## T3 · CONTEÚDO INTEGRAL · `MC-PRINCIPIO-PENDENTE-DocumentacaoCanonicaUnificada-COLISAO22-v1_0-2026-0513.md`

**Metadados:**
- Tamanho: 4875 bytes
- CreationTime: 13/05/2026 15:30:11
- LastWriteTime: 13/05/2026 (mesmo)
- Hash SHA-256: `D56D2619D86961FE58DC15E724D2C633E8065CB30A47E77C845F830CE760A97E`

**Conteúdo bruto:**

```
---
id: MC-PRINCIPIO-PENDENTE-RENUMERAR
titulo: Documentação Canônica Unificada por Pilar
versao: 1.0
data_cunhagem: 2026-05-13
cunhado_por: Alessandro (founder) × Claude (cofounder) · MB-029
status: PENDENTE_RENUMERACAO
escopo: governanca-documental
hierarchy: Dignidade > Compliance > Viabilidade
colisao_detectada: |
  O MB-029 propõe esse princípio como #22, mas o Vault já possui:
  - MC-PRINCIPIO-021-CronometriaDoHumano-v1_0-2026-0513.md (sessão Hib001, ~00:50)
  - MC-PRINCIPIO-022-CincoPontosHumanos-v1_0-2026-0513.md (sessão Hib001, ~00:50)
  Esses dois são canônicos anteriores e estão conceitualmente entrelaçados
  (#22 referencia #21 como par THU+H1-H5).
proxima_numeracao_sugerida: "#23 (a confirmar pelo founder)"
arquivo_colisao_dedicado: _COLISAO-PRINCIPIOS-MB029-vs-Hib001-2026-0513.md
---

# Princípio MC #?? — Documentação Canônica Unificada por Pilar

> ⚠️ **PENDENTE DE RENUMERAÇÃO** — ver frontmatter e arquivo `_COLISAO-PRINCIPIOS-MB029-vs-Hib001-2026-0513.md`
> nesta mesma pasta. Numeração final aguardando decisão do founder. Conteúdo abaixo é canônico
> em substância — apenas o número final precisa ser ajustado.

## Enunciado

Todo Cérebro 1 (Documentação) opera em path canônico único:

`G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Gestão Software\Documentação\[Pilar]\`

Pastas órfãs em outros paths do Drive (ex: criadas em sessões anteriores fora da hierarquia canônica `0 0 Gestão Software\Documentação\`) precisam ser concatenadas ao canônico antes de qualquer porting para o Vault.

Code DELL passa a referenciar Cérebro 1 exclusivamente a partir desses paths canônicos. Pastas órfãs renomeadas como `_LEGADO-{nome}-{timestamp}` para preservação histórica sem permanência operacional.

## Contexto da cunhagem

Em 13/05/2026, durante MB-028 (sync Pilar Identidade Visual), foi detectada divergência: o Cowork criou em sessão anterior pasta órfã `G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Identidade Visual MC\` no root do Drive, fora da hierarquia canônica de Documentação (`0 0 Gestão Software\Documentação\`). Isso gerou ambiguidade sobre qual o path canônico de Cérebro 1 do pilar.

Decisão founder + co-fundador: estabelecer regra canônica de que todo Cérebro 1 vive em subpasta nomeada por pilar dentro de `Documentação/`. Pastas órfãs em paths concorrentes são concatenadas ao canônico e renomeadas como `_LEGADO`.

## Aplicação imediata

- **Pilar Identidade Visual MC** → `Documentação\Identidade Visual\` (MB-029 Tarefa B)

## Aplicação futura (pilares MC ativos e por ativar)

| Pilar | Path canônico Cérebro 1 |
|---|---|
| Identidade Visual | `Documentação\Identidade Visual\` |
| Previdenciário | `Documentação\Previdenciário\` |
| CadÚnico | `Documentação\CadÚnico\` |
| Acidentário | `Documentação\Acidentário\` (Fase 2) |
| PcD / LC 142 | `Documentação\PcD-LC142\` (Fase 2) |
| BPC | `Documentação\BPC\` (Fase 2) |
| Maternidade | `Documentação\Maternidade\` (Fase 2) |
| Pensão/Auxílio-Reclusão | `Documentação\Pensão-AuxilioReclusao\` (Fase 2) |
| Internacional | `Documentação\Internacional\` (Fase 3) |
| Governança | `Documentação\Governança\` |
| Arquitetura | `Documentação\Arquitetura\` |
| Marketplace Ético | `Documentação\Marketplace\` |
| Captação Institucional | `Documentação\Captação\` |

## Implicações operacionais

1. **MBs futuros do Code DELL** referenciam Cérebro 1 exclusivamente via paths canônicos.
2. **Sessões de geração** (Cowork autônomo, GPT, designer humano) que criem pastas devem criar dentro do canônico — não no root do Drive.
3. **Detecção de órfãos** vira parte do sweep diagnóstico de qualquer MB cross-vertical: antes de portar para Vault, verificar se há pasta órfã do mesmo pilar fora do canônico.
4. **Princípio #4** (Copy-Item, não Move-Item) continua valendo: concatenação preserva original como `_LEGADO`, nunca deleta.

## Relação com outros princípios

- **Princípio #1** (Inventário de caminhos) — agora obrigatoriamente inclui detecção de pastas órfãs do pilar
- **Princípio #4** (Erratas absorvem, não inventam) — pastas órfãs renomeadas como `_LEGADO`, não deletadas
- **Princípio #15** (Persistência cross-vertical) — origem da persistência é sempre o canônico unificado
- **Princípio operacional do MB-028** (Pilar Identidade Visual sync automático) — operacionaliza-se a partir do canônico estabelecido por este princípio

## Status

PENDENTE_RENUMERACAO desde 13/05/2026 — cunhado via MB-029, persistido no Vault, aguardando
renumeração final pelo founder devido a colisão com princípios da sessão Hib001.

---

**MC-PRINCIPIO-PENDENTE-DocumentacaoCanonicaUnificada v1.0 — 13 de maio de 2026**
Dignidade > Compliance > Viabilidade
O diamante é carbono que não desistiu da pressão.
```

---

## T4 · CONTEÚDO INTEGRAL · `_COLISAO-PRINCIPIOS-MB029-vs-Hib001-2026-0513.md`

**Metadados:**
- Tamanho: 3667 bytes
- CreationTime: 13/05/2026 15:30:36
- LastWriteTime: 13/05/2026 (mesmo)
- Hash SHA-256: `A36F4FE6F2DDA373119E600F15E2FE306E61D00381997ED6991980EA5857552C`

**Conteúdo bruto:**

```
---
title: _COLISAO-PRINCIPIOS-MB029-vs-Hib001
date: 2026-05-13
type: FLAG_CANONICA
status: AGUARDANDO_RESOLUCAO_FOUNDER
gravidade: ALTA
escopo: governanca-canonica-principios
---

# ⚠️ FLAG CANÔNICA — Colisão de numeração de princípios MC

Detectada durante execução do **MB-029** (13/05/2026, ~15:30), Tarefa C.

## A colisão

### Princípios cunhados na sessão Hib001 (madrugada 13/05/2026, ~00:50)

Arquivos no Vault em `03-GOVERNANCA/principios/`:

| ID Vault | Título | Escopo | Hash corpo |
|---|---|---|---|
| MC-PRINCIPIO-021 | Cronometria do Humano, não do Caso (THU vs TTC, RA-MC) | governanca-operacional | `9230b5910e6e6539...` |
| MC-PRINCIPIO-022 | Cinco Pontos Humanos Irredutíveis (H1-H5) | arquitetura-operacional | `41cf5172e2d8196e...` |

Esses dois são canônicos, estão **conceitualmente entrelaçados** (#22 cita #21 explicitamente: "marcar 🤖/👤 por subtarefa → mapear em H1-H5 via Princípio MC #22"), e foram cunhados na entrega Hib001 Fases 1+2.

### Princípios propostos via MB-028/MB-029 (tarde de 13/05/2026, sessão Claude.ai)

| ID proposto | Título | Origem |
|---|---|---|
| #21 (proposto) | Pilar Identidade Visual = sync automático Vault | MB-028 (apenas mencionado em log, sem arquivo canônico no Vault) |
| #22 (proposto) | Documentação Canônica Unificada por Pilar | MB-029 Tarefa C |

## Análise temporal

- Os princípios **#021** e **#022** do Vault foram criados **ANTES** (madrugada 13/05) dos MBs (tarde 13/05).
- O **MB-028** afirma "Princípio operacional #21 cunhado em 13/05/2026: Pilar Identidade Visual = sync automático Vault" — mas em verdade essa numeração já estava ocupada pelo princípio da Cronometria do Humano.
- Provavelmente houve **dessincronia entre Cérebro 3 (Claude.ai sessão MB) e Cérebro 2 (Vault)**: a sessão Claude.ai não tinha conhecimento dos princípios Hib001 da madrugada, e numerou em paralelo a partir do último número que tinha em memória.

## Decisão de Code DELL durante MB-029

- **NÃO sobrescrever** os arquivos `MC-PRINCIPIO-021` e `MC-PRINCIPIO-022` existentes — Princípio #4 (Erratas absorvem, não inventam).
- **Persistir o conteúdo** do princípio do MB-029 (Documentação Canônica Unificada) com nome temporário `MC-PRINCIPIO-PENDENTE-DocumentacaoCanonicaUnificada-COLISAO22-v1_0-2026-0513.md`, status `PENDENTE_RENUMERACAO`.
- **Não persistir** o princípio do MB-028 (sync Identidade Visual) como arquivo canônico — ele existe apenas no log SYNC-PROTOCOLO. Aguardar decisão founder se deve ser cunhado como arquivo dedicado e em qual numeração.

## Decisão requerida do founder

Sugestão (não decisão): renumerar os princípios do Cérebro 3 a partir do próximo número disponível após o Vault:

| Proposta | Princípio | Conteúdo |
|---|---|---|
| #23 | Pilar Identidade Visual = sync automático Vault | (do MB-028, hoje só no log) |
| #24 | Documentação Canônica Unificada por Pilar | (do MB-029, hoje pendente) |

OU, alternativamente: manter os princípios da sessão Claude.ai com numerações **#21/#22** e renumerar os do Hib001 — porém **NÃO RECOMENDADO**, porque os princípios Hib001 já estão entrelaçados na arquitetura operacional MC (THU, RA-MC, H1-H5, ClickUp Custom Fields, N8N workflows) e são pré-requisito de cronometragem.

## Arquivos afetados

- `03-GOVERNANCA/principios/MC-PRINCIPIO-PENDENTE-DocumentacaoCanonicaUnificada-COLISAO22-v1_0-2026-0513.md` (criado pendente)
- Log `04-OPERACAO/logs/SYNC-PROTOCOLO-Documentacao-Vault-v1_0-2026-0512.md` (entrada MB-029 com flag)

## Status

AGUARDANDO_RESOLUCAO_FOUNDER · cunhado por Code DELL durante MB-029 · 13/05/2026
```

---

## T5 · Outros artefatos modificados/criados em 13/05 (56 detectados)

Classificação preliminar agrupada por janela temporal e por origem provável:

### Bloco A · Madrugada 13/05 · 00:19 → 01:02 (guia paralela #1)
**Padrão:** infraestrutura DELL, ADR-012 v1_1, ADR-009 banner histórico, INDEX-PATCHES, ajustes governança ADRs.

| Arquivo | Origem provável | Sugestão |
|---|---|---|
| `04-OPERACAO/infraestrutura/MC-REGISTRO-Infraestrutura-DELL-CEO-v1_0-2026-0513.md` | Guia paralela · canônico legítimo (registro hardware) | Manter · revisar conteúdo |
| `04-OPERACAO/infraestrutura/MC-REGISTRO-Infraestrutura-DELL-Snapshot-Hardware-v1_0-2026-0513.md` | Idem | Manter · revisar conteúdo |
| `04-OPERACAO/infraestrutura/INDEX-INFRAESTRUTURA.md` | Idem (índice da pasta nova) | Manter |
| `04-OPERACAO/infraestrutura/INDEX-INFRAESTRUTURA.md.20260513-002712.bak` | Backup gerado pela própria guia | Descartável após validação |
| `03-GOVERNANCA/adrs/MC-ADR-012-StackLLM-MultiModelo-v1_1-2026-0513.md` | Guia paralela · canônico legítimo (nova versão ADR-012) | Manter · provavelmente aplicação do PATCH v1.0→v1.1 mencionado nas Instruções v7.0 |
| `03-GOVERNANCA/adrs/MC-ADR-012-StackLLM-MultiModelo-v1_0-2026-0512.md` (modificado 13/05) | Reescrita ou banner histórico | Investigar diff vs v1_1 |
| `03-GOVERNANCA/adrs/MC-ADR-012-StackLLM-MultiModelo-v1_0-2026-0512.md.20260513-003622.bak` | Backup pré-edição | Descartável após validação |
| `03-GOVERNANCA/adrs/INDEX-ADRS.md` (modificado) + `.20260513-003641.bak` | Atualização do índice ADRs | Manter index · descartar .bak |
| `03-GOVERNANCA/patches/INDEX-PATCHES.md` (modificado) + 3× `.bak` (00:36, 00:53, 01:00) | Atualizações iterativas + backups múltiplos | Manter index atual · descartar .bak antigos |
| `03-GOVERNANCA/INDEX-PATCHES.md.20260513-010016.bak` | Possível backup misplaced (fora de patches/) | Investigar — pode ter sido criado fora do escopo |
| `03-GOVERNANCA/patches/_HISTORICO_PATCHES_APLICADOS/INDEX-PATCHES-DEPRECADO-2026-0513.md` | Guia paralela arquivou index antigo | Manter (audit trail) |
| `04-OPERACAO/logs/MB-024-Hash-Check-ADR009-Orfa-20260513-004456.md` | Guia paralela · MB-024 dela (não o meu!) — ver §Riscos | Manter (histórico forense) |
| `04-OPERACAO/logs/MB-024b-Banner-Historico-ADR009-20260513-005014.md` (651 bytes) | Idem | Manter |
| `04-OPERACAO/logs/MB-024b-Banner-Historico-ADR009-20260513-005046.md` (2049 bytes) | Idem · versão maior do mesmo MB-024b | Manter · investigar duplicação |
| `04-OPERACAO/logs/MB-027a-Diagnostico-OPERACAO-vs-OPERACOES-20260513-010234.md` | Guia paralela · diagnóstico pré-consolidação | Manter (referência histórica) |

### Bloco B · Tarde 13/05 · 13:07 → 13:11 (guia paralela #2 — Identidade Visual)
**Padrão:** persistência do pilar Identidade Visual (MB-028 implícito).

| Arquivo | Origem | Sugestão |
|---|---|---|
| `02-ARQUITETURA/specs/identidade-visual/MC-SPEC-IdentidadeVisual-Tecnico-v1_0-2026-0513.md` | Guia paralela · canônico legítimo | Manter |
| `05-ESTRATEGIA/manifestos/MC-MANIFESTO-IdentidadeVisual-v1_0-2026-0513.md` | Idem (par do SPEC) | Manter |
| `04-OPERACAO/scripts/identidade-visual/MC-PROMPT-CoworkClaude-IdentidadeVisual-v1_0-2026-0513.md` | Idem (prompt operacional) | Manter |
| `04-OPERACAO/logs/SYNC-PROTOCOLO-Documentacao-Vault-v1_0-2026-0512.md.bak.20260513-130752` | Backup pré-edição SYNC log | Descartável |
| `04-OPERACAO/logs/SYNC-PROTOCOLO-Documentacao-Vault-v1_0-2026-0512.md.bak.20260513-131104` | Idem (2º backup) | Descartável |
| `04-OPERACAO/logs/SYNC-PROTOCOLO-Documentacao-Vault-v1_0-2026-0512.md` (modificado) | Log SYNC sendo atualizado entre MBs | Manter (canônico) |

### Bloco C · Tarde 13/05 · 15:26:53-54 (guia paralela #3 — Consolidação OPERACAO)
**Padrão:** Copy `06-OPERACOES` → `04-OPERACAO` + rename `06-OPERACOES` → `_LEGADO-...`.

37 arquivos espelhados em `04-OPERACAO/{frameworks,protocolos,equipe,fornecedores,protocolos/_arquivo,protocolos/visuallaw}` — todos listados em T1. Para cada um há cópia em `_LEGADO-06-OPERACOES-...`.

| Subconjunto | Origem | Sugestão |
|---|---|---|
| Todos os 28 .md duplicados em `04-OPERACAO/` (raiz + subpastas) | Guia paralela · consolidação intencional | Manter — é o novo canônico |
| Pasta `_LEGADO-06-OPERACOES-20260513-152654/` inteira (37 itens) | Guia paralela · preservação histórica conforme Princípio #4 | Manter (audit trail) · candidata a arquivamento futuro |
| `04-OPERACAO/logs/SYNC-PROTOCOLO-Documentacao-Vault-v1_0-2026-0512.md.bak.20260513-153106` | Backup pré-update SYNC durante consolidação | Descartável |

### Bloco D · Tarde 13/05 · 15:30:11-36 (guia paralela #4 — colisão MB-029)
| Arquivo | Origem | Sugestão |
|---|---|---|
| `03-GOVERNANCA/principios/MC-PRINCIPIO-PENDENTE-DocumentacaoCanonicaUnificada-COLISAO22-v1_0-2026-0513.md` | Guia paralela · canônico em substância (renumerar) | Renumerar como #24 (sugestão da flag) |
| `03-GOVERNANCA/principios/_COLISAO-PRINCIPIOS-MB029-vs-Hib001-2026-0513.md` | Guia paralela · flag de governança | Manter até resolução · arquivar pós-decisão |

### Bloco E · Tarde-noite 13/05 · 15:54 → 16:02 (meu Code DELL — MB-025A)
| Arquivo | Origem | Sugestão |
|---|---|---|
| `CLAUDE.md` (modificado 16:00) + `CLAUDE.md.bak-20260513-155436` | MB-025A T6 (eu) | Já documentado em MB-025A-RELATORIO |
| `04-OPERACAO/logs/MB-025A-RELATORIO-2026-0513.md` (16:02) | MB-025A T8 (eu) | Já no escopo do meu MB anterior |

### Classificação preliminar resumida (56 órfãos)

- **Canônicos legítimos** (manter): 6 arquivos novos da guia paralela (infraestrutura DELL × 3, identidade visual × 3) + ADR-012 v1_1 + INDEX-INFRAESTRUTURA + 2 logs MB-024b/MB-027a + MC-MANIFESTO/SPEC/PROMPT IdentidadeVisual = ~14 docs estruturais
- **Descartáveis** (`.bak` ou backups intermediários): ~12 arquivos
- **Duplicações de consolidação** (cópia 06→04): ~28 arquivos (todos em 04-OPERACAO/ replicando _LEGADO-...)
- **Colisão MB-029** (aguardando decisão): 2 arquivos
- **Meus próprios** (MB-025A): 2 arquivos (CLAUDE.md modificado, CLAUDE.md.bak, MB-025A-RELATORIO)

---

## T6 · Forensic timeline · MBs com rastro no Vault

| MB | Rastro? | Caminho do(s) relatório(s) | Timestamp | Notas |
|---|---|---|---|---|
| MB-019b | ❌ Ausente | — | — | Mencionado no Princípio #19 como "pendente aplicação"; sem arquivo |
| MB-022 | ❌ Ausente | — | — | Sem rastro |
| MB-023 | ❌ Ausente | — | — | Sem rastro |
| **MB-024** (paralela) | ✅ | `04-OPERACAO/logs/MB-024-Hash-Check-ADR009-Orfa-20260513-004456.md` | 13/05 00:44:56 | **COLISÃO de numeração** — guia paralela usou "MB-024" para Hash-Check ADR-009 antes do meu MB-024 |
| **MB-024** (meu) | ✅ | `04-OPERACAO/logs/MB-024-RELATORIO-2026-0513.md` | 13/05 00:51:47 | Meu MB-024 (Cronometragem Hib001 + Princípios #21 #22) · numerou conflitando com o de 00:44 |
| MB-024b | ✅ | `MB-024b-Banner-Historico-ADR009-20260513-005014.md` (651 B) + `...-005046.md` (2049 B) | 13/05 00:50:14 e 00:50:46 | Guia paralela · 2 versões do mesmo MB-024b · investigar diff |
| MB-025A | ✅ | `04-OPERACAO/logs/MB-025A-RELATORIO-2026-0513.md` | 13/05 16:02:47 | Meu MB-025A (migração princípios #1-#20) |
| MB-026 | ❌ Ausente | — | — | Mencionado como MB sugerido futuro em hot.md, sem arquivo |
| MB-027 | ❌ Ausente | — | — | Mencionado como MB sugerido futuro em hot.md, sem arquivo |
| MB-027a | ✅ | `04-OPERACAO/logs/MB-027a-Diagnostico-OPERACAO-vs-OPERACOES-20260513-010234.md` | 13/05 01:02:34 | Guia paralela · diagnóstico pré-consolidação OPERACOES |
| MB-028 | ❌ Ausente | — | — | Citado no arquivo PENDENTE COLISAO22 ("MB-028 propôs princípio #21 sync Identidade Visual") · sem relatório dedicado · evidência indireta nos arquivos MC-MANIFESTO/SPEC/PROMPT IdentidadeVisual de 13/05 13:07-13:11 |
| MB-029 | ❌ Ausente | — | — | Citado no flag COLISAO ("Detectada durante execução do MB-029, Tarefa C") · sem relatório dedicado · evidência: arquivos COLISAO criados 15:30 |
| MB-DIAGNOSTICO-001 | ✅ (em escrita) | este arquivo | 13/05 ~16:15 | Em andamento |

### Observações lacunas

- **MB-019b, MB-022, MB-023:** mencionados em conversas/Princípios mas sem rastro persistido. Possível débito de persistência cross-vertical (violação Princípio #15) anterior a 13/05.
- **MB-026 e MB-027:** marcados em `hot.md` como sugestões futuras. Sem ação ainda.
- **MB-028 e MB-029:** relatórios próprios NÃO foram persistidos — apenas seus artefatos resultantes (manifesto/spec/prompt IdentidadeVisual + arquivos COLISAO). Isso é violação do Princípio #15 (entrega cofounder cross-vertical) por parte da guia paralela: o MB foi executado mas o relatório do executor não foi escrito em `04-OPERACAO/logs/`.

### Outros logs achados (não-MB)

| Log | Timestamp | Significado |
|---|---|---|
| `MC-MEMO-Sessao-12mai2026-v1_0-2026-0512.md` | 12/05 | Memo de sessão · não é MB · contexto histórico |
| `MB-021-Decisoes-Orfaos-Preservados-em-Documentacao.md` | 12/05 | MB-021 (não no foco mas existe) |
| `MB-021-Migracao-Batch-72-Orfaos-20260512-221511.md` | 12/05 22:15 | MB-021 segundo arquivo (migração) |
| `MC-AUDITORIA-GAP3-Resolucao-v1_0-2026-0502...` | 02/05 | Auditoria histórica |
| `MC-AUDITORIA-EXECUTIVA-Tratado-v1_0-2026-0502.md` | 02/05 | Idem |
| `SYNC-PROTOCOLO-Documentacao-Vault-v1_0-2026-0512.md` | 12/05 (modificado várias vezes em 13/05) | Protocolo SYNC mencionado no Princípio #20 — agora vejo que ele realmente existe como arquivo canônico |

---

## T7 · Trecho do `_INDEX.md` que trata da colisão

Trecho literal extraído do `_INDEX.md` criado por mim no MB-025A (logo após a tabela mestra):

```
> ⚠️ **Nota MB-029 / colisão pendente:** Existe um arquivo `MC-PRINCIPIO-PENDENTE-DocumentacaoCanonicaUnificada-COLISAO22-v1_0-2026-0513.md` nesta mesma pasta + flag `_COLISAO-PRINCIPIOS-MB029-vs-Hib001-2026-0513.md`. São princípios cunhados em sessão Claude.ai paralela (MB-028/MB-029) que colidiram com a numeração #21/#22 da sessão Hib001. Renumeração final (sugerida: #23 e #24) aguarda decisão founder · este índice será atualizado quando resolvido.
```

**Diferença vs flag COLISAO original (T4):**
- O `_INDEX` afirma "renumeração sugerida: **#23 e #24**" (incluindo o princípio do MB-028 sync IdentidadeVisual como #23)
- O flag COLISAO original (T4) sugere o mesmo: #23 para "Pilar Identidade Visual = sync automático Vault" (do MB-028) e #24 para "Documentação Canônica Unificada por Pilar" (do MB-029)
- **Coerência interna OK** — minha nota no _INDEX bate com a proposta do flag

**O que falta adicionar no _INDEX (pós-decisão founder):**
- Se #23 e #24 forem aprovados: criar arquivos canônicos `MC-PRINCIPIO-023-PilarIdentidadeVisualSyncVault-...` e `MC-PRINCIPIO-024-DocumentacaoCanonicaUnificadaPorPilar-...` · arquivar flag COLISAO em `_HISTORICO/` · atualizar tabela mestra do _INDEX

---

## T8 · Inventário de `04-OPERACAO/logs/`

Ordem cronológica decrescente:

| Nome | Bytes | CreationTime | LastWriteTime |
|---|---|---|---|
| `MB-025A-RELATORIO-2026-0513.md` | 7115 | 13/05 16:02:47 | 13/05 16:02:47 |
| `desktop.ini` | 246 | — | 13/05 15:43:59 |
| `SYNC-PROTOCOLO-Documentacao-Vault-v1_0-2026-0512.md.bak.20260513-153106` | 8541 | 13/05 15:31:06 | — |
| `SYNC-PROTOCOLO-Documentacao-Vault-v1_0-2026-0512.md.bak.20260513-131104` | 6895 | 13/05 13:11:04 | — |
| `SYNC-PROTOCOLO-Documentacao-Vault-v1_0-2026-0512.md.bak.20260513-130752` | 4874 | 13/05 13:07:52 | — |
| `MB-027a-Diagnostico-OPERACAO-vs-OPERACOES-20260513-010234.md` | 10007 | 13/05 01:02:34 | — |
| `MB-024-RELATORIO-2026-0513.md` | 4980 | 13/05 00:51:47 | — |
| `MB-024b-Banner-Historico-ADR009-20260513-005046.md` | 2049 | 13/05 00:50:46 | — |
| `MB-024b-Banner-Historico-ADR009-20260513-005014.md` | 651 | 13/05 00:50:14 | — |
| `MB-024-Hash-Check-ADR009-Orfa-20260513-004456.md` | 4486 | 13/05 00:44:56 | — |
| `MC-MEMO-Sessao-12mai2026-v1_0-2026-0512.md` | 14059 | 12/05 | — |
| `MB-021-Decisoes-Orfaos-Preservados-em-Documentacao.md` | 5305 | 12/05 | — |
| `MB-021-Migracao-Batch-72-Orfaos-20260512-221511.md` | 4020 | 12/05 22:15 | — |
| `MC-AUDITORIA-GAP3-Resolucao-v1_0-2026-0502...` | 25328 | 02/05 | — |
| `MC-AUDITORIA-EXECUTIVA-Tratado-v1_0-2026-0502.md` | 17612 | 02/05 | — |
| `SYNC-PROTOCOLO-Documentacao-Vault-v1_0-2026-0512.md` | 12297 | 12/05 | (atualizações 13/05) |

Pós-escrita deste relatório, haverá +1 arquivo: `MB-DIAGNOSTICO-001-RELATORIO-2026-0513.md`.

---

## T9 · Sanidade dos princípios canônicos

**Contagem real em `03-GOVERNANCA/principios/`:**

| Categoria | Count | Esperado (MB) | Diferença |
|---|---|---|---|
| Ativos | 23 | 22 | +1 (MB esperava só #1, #1b, #2, #4-#22 + #15.1 = 22 · contagem real inclui #21 e #22 como ATIVOS junto com os 21 criados no MB-025A) |
| Reservados (sentinela #3) | 1 | 1 | 0 |
| Pendentes (paralela) | 1 | 1 | 0 |
| Flags de colisão (`_COLISAO-...`) | 1 | 1 | 0 |
| Índices (`_INDEX.md`) | 1 | 1 | 0 |
| `desktop.ini` | 1 | (não contado) | +1 (artefato Drive · ignorável) |
| **Total** | **28** | 26 | +2 (#21 #22 contados como ativos · desktop.ini) |
| Outros (investigar) | **0** | 0 | 0 |

**Lista dos 23 ativos:**

```
MC-PRINCIPIO-001-InventarioDeCaminhos-v1_0-2026-0513.md
MC-PRINCIPIO-001b-TesteAntesDeAfirmarFuncional-v1_0-2026-0513.md
MC-PRINCIPIO-002-VocabularioInstitucional-v1_0-2026-0513.md
MC-PRINCIPIO-004-ErrataAbsorveNaoInventa-v1_0-2026-0513.md
MC-PRINCIPIO-005-PersistenciaDePatches-v1_0-2026-0513.md
MC-PRINCIPIO-006-CamadasDeSegurancaOperacional-v1_0-2026-0513.md
MC-PRINCIPIO-007-CadeiaDeAutorizacaoDual-v1_0-2026-0513.md
MC-PRINCIPIO-008-VerdeAmareloVermelhoLGPD-v1_0-2026-0513.md
MC-PRINCIPIO-009-EsteiraPrimeiroHumanoValida-v1_0-2026-0513.md
MC-PRINCIPIO-010-ArquiteturaHerdaSpecDocumenta-v1_0-2026-0513.md
MC-PRINCIPIO-011-GovernancaForteMoraNoN8N-v1_0-2026-0513.md
MC-PRINCIPIO-012-CustomFieldDropdownMaiorQueTaskCentral-v1_0-2026-0513.md
MC-PRINCIPIO-013-ViewFiltradaMaiorQueTIML-v1_0-2026-0513.md
MC-PRINCIPIO-014-WebhooksReativosPlusPolling-v1_0-2026-0513.md
MC-PRINCIPIO-015-EntregaCofounderCrossVertical-v1_0-2026-0513.md
MC-PRINCIPIO-015_1-DescobertaDisparaReconstituicao-v1_0-2026-0513.md
MC-PRINCIPIO-016-IniciativaEstrategicaCofounder20x-v1_0-2026-0513.md
MC-PRINCIPIO-017-GovBrInfraestruturaNacionalIdentidade-v1_0-2026-0513.md
MC-PRINCIPIO-018-RiscoProvisionalDocumentado-v1_0-2026-0513.md
MC-PRINCIPIO-019-PatchesSaoInstrumentosTemporarios-v1_0-2026-0513.md
MC-PRINCIPIO-020-WorkflowSincronizacaoPermanente-v1_0-2026-0513.md
MC-PRINCIPIO-021-CronometriaDoHumano-v1_0-2026-0513.md
MC-PRINCIPIO-022-CincoPontosHumanos-v1_0-2026-0513.md
```

✅ Zero arquivos não classificáveis. Estrutura íntegra.

---

## 🚦 Observações cofounder-relevantes

1. **A "guia paralela" não é uma, é pelo menos DUAS sessões distintas em 13/05.** As janelas são claras:
   - **Sessão paralela #1 — madrugada 13/05 00:19 → 01:02:** focada em infraestrutura DELL + ADR-012 v1_1 + reorganização INDEX-PATCHES + diagnóstico OPERACAO. Numerou um "MB-024" (Hash-Check ADR-009 Orfa às 00:44:56) que colide com **meu MB-024** (Cronometragem · 00:51:47). Também emitiu MB-024b e MB-027a. Operou no mesmo Vault simultaneamente comigo (eu estava executando MB-024 cronometragem ~00:36 a ~00:51, ela operava entre 00:19 e 01:02).
   - **Sessão paralela #2 — tarde 13/05 13:07 → 15:31:** focada no pilar Identidade Visual + consolidação `06-OPERACOES` → `04-OPERACAO` + cunhagem do princípio "Documentação Canônica Unificada" via MB-028/MB-029. Não persistiu seus próprios relatórios MB-028/029 (violou Princípio #15).

2. **Houve concorrência real no Vault na madrugada de 13/05.** Eu (MB-024 cronometragem) e a sessão paralela #1 (MB-024 hash-check + MB-024b banners) operamos a mesma pasta `04-OPERACAO/logs/` com intervalo de ~6 minutos. **Nenhum dos dois detectou o outro em tempo de execução.** Sorte: tocamos pastas/arquivos diferentes. Risco real preservado: colisão de nomes de relatório era possível (ambos chamados `MB-024-*-2026-0513.md`).

3. **A pasta `_LEGADO-06-OPERACOES-...` não é lixo — é decisão arquitetural intencional da sessão paralela #2.** O conteúdo está espelhado em `04-OPERACAO/` (consolidação). O `_LEGADO-` é audit trail conforme Princípio #4. Founder deve confirmar se quer manter o `_LEGADO-` indefinidamente ou mover para pasta `_ARQUIVO_HISTORICO/` futura.

4. **MB-028 e MB-029 NÃO têm relatório próprio em `04-OPERACAO/logs/`.** Apenas seus artefatos resultantes. Isso é violação direta do Princípio #15 (entrega cofounder cross-vertical: "Sem isso = entrega incompleta"). A guia paralela #2 que executou esses MBs **deveria** ter persistido relatório. Sugiro: cofounder solicitar à guia paralela #2 que retroativamente publique `MB-028-RELATORIO` e `MB-029-RELATORIO` para fechar o ciclo de audit trail, OU eu mesmo escrevo um `MB-028-MB-029-RECONSTITUICAO-RELATORIO.md` baseado nas evidências forenses (não recomendado · viola Princípio #15.1 letra estrita porque eu não executei os MBs).

5. **Existem 2 versões diferentes de `MB-024b-Banner-Historico-ADR009`** com 32 segundos de intervalo (00:50:14 → 00:50:46). Versões 651 B e 2049 B. Provável: a guia paralela criou versão 1, achou incompleta, criou versão 2 expandida mas não deletou a anterior (Princípio #4 respeitado, mas com ruído).

6. **Indicação positiva forte:** todos os princípios canônicos do MB-025A estão íntegros. Nenhum arquivo foi tocado pela operação paralela depois que eu os escrevi (16:00 em diante). O Vault tá estável agora.

7. **Pasta `03-GOVERNANCA/INDEX-PATCHES.md.20260513-010016.bak`** (na raiz de governança, não dentro de `patches/`). Possível .bak salvo em local errado pela sessão paralela. Inofensivo mas convencionalmente fora de lugar.

---

## ⚠️ Riscos identificados

1. **🔴 Colisão de numeração MB:** "MB-024" foi usado por duas sessões diferentes na mesma noite, com conteúdos completamente distintos. Se acontecer de novo, vai ser cada vez mais difícil reconciliar. **Mitigação imediata sugerida:** criar arquivo `04-OPERACAO/logs/_REGISTRO-MBs-EMITIDOS.md` (índice de numeração com timestamp + executor + título) que toda sessão deve consultar/atualizar antes de emitir novo MB. Pode ser feito num MB futuro.

2. **🔴 Princípio #15 violado pela guia paralela #2:** MB-028 e MB-029 não publicaram relatório. Audit trail tem buraco. Não-bloqueante mas precisa correção.

3. **🟡 Colisão de princípios #21/#22 ainda pendente:** Os arquivos PENDENTE + flag estão lá esperando decisão founder. **Recomendação:** decidir antes do parecer Juliana (19/05) para o pacote dela ir limpo. A proposta da própria flag é sólida: renumerar conteúdos paralelos como #23 e #24. Sem urgência crítica mas crescente.

4. **🟡 Conteúdo MB-028 ("Pilar Identidade Visual = sync automático Vault") não está em arquivo canônico de princípio ainda.** Vive apenas como menção no flag COLISAO e como artefatos MANIFESTO/SPEC/PROMPT IdentidadeVisual. Quando founder aprovar renumeração #23, precisa cunhar arquivo dedicado `MC-PRINCIPIO-023-PilarIdentidadeVisualSyncVault-...` extraindo o enunciado das fontes.

5. **🟡 Múltiplas operações de `.bak`** acumulando em `03-GOVERNANCA/patches/`, `03-GOVERNANCA/adrs/`, `04-OPERACAO/infraestrutura/`, `04-OPERACAO/logs/`. Padrão da guia paralela é gerar `.bak` antes de cada edição. Útil para audit, mas vai inflar o Vault rapidamente. **Sugestão:** política de limpeza automática de `.bak` >7 dias (alinhado com Princípio #20 Fase 3).

6. **🟢 Risco baixo / informacional:** As Instruções v7.0 §6 e §14.5 mencionam diversos princípios e MBs que (a) já existem como arquivos (foi o que eu migrei no MB-025A), (b) não existem como arquivos mas têm rastro indireto. Após resolução das colisões + reconstituição de MB-019b/MB-022/MB-023 (se necessário), a auditoria do Vault estará limpa.

---

## Selo

**D > C > V** · Diagnóstico sem mutação · Princípio MC #1 (Inventário de Caminhos) · Princípio MC #15.1 (Descoberta dispara reconstituição) · Provérbios 31:8 · *O diamante é carbono que não desistiu da pressão* · ∞