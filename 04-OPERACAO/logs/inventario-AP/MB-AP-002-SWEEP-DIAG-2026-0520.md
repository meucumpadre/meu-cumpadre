---
titulo: MB-AP-002 · Sweep Diagnóstico Vault MC + Documentação
versao: v1.0
data: 2026-05-20
status: SELADO
executor: Claude Code DELL
mb_origem: MB-AP-002 (Cofounder C3.1 → Code DELL)
modo: read-only (Vault MC original intocado)
categoria_canonica: 04-OPERACAO/logs/inventario-AP
hash_sha256: a-ser-computado-em-T4
---

# MB-AP-002 · Sweep Diagnóstico Vault MC + Documentação

**20 de maio de 2026 · Tarefa 1 de 8 · Code DELL executor**

---

## 1 · Sumário Executivo

| Métrica | Valor |
|---|---|
| Fontes varridas | 2 (Vault MC + Documentação) |
| Arquivos `.md` no Vault MC (escaneáveis, pós-skip) | **356** |
| Arquivos `.md` em Documentação (escaneáveis) | **738** + 6 root |
| **Total escaneável** | **~1.100** |
| Pastas top-level Vault (skip aplicado) | 16 ativas / 12 puladas |
| Anomalias críticas detectadas | 19 |
| Duplicações suspeitas | 11 |
| Conflitos de versão coexistindo | 8 |
| Pastas órfãs (sem categoria clara) | 5 |
| Pastas vazias | 1 (`RIO/`) |

**Veredito do sweep:** Vault MC tem **arquitetura sólida** mas **dívida de housekeeping ativa** — `.bak` files no root, duplicação ADR canônico (02 vs 03), múltiplas versões coexistindo, INDEX.md desatualizado para versão pré-15/05 (não reflete renomeação `06-OPERACOES → 04-OPERACAO`, não cita `01-IDENTIDADE`, `06-COMUNICACAO`, `04-OPERACAO`). Nenhum desses bloqueia o garimpo AP — apenas exige cuidado na seleção da versão canônica.

---

## 2 · Contagem Real por Pasta Principal

### 2.1 Vault MC (`G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Gestão Software\OBSIDIAN\MEU CUMPADRE\`)

| Pasta | `.md` count | Observação |
|---|---:|---|
| `03-GOVERNANCA` | 120 | ADRs (14) + Princípios (35) + Patches (23) + Mission-briefs (17) + RIPDs (8) + Contratos (7) + Pautas (7) |
| `04-OPERACAO` | 87 | Logs (33) + Protocolos (17) + Infraestrutura (10) + POPs (6) + Scripts (6) + Frameworks (2) + Kits (2) + Especimes-diamantados (1) + outros |
| `02-ARQUITETURA` | 54 | Specs (14) + Analises (6) + ADRs (5) + Gov.br (5) + Grimório (2) + Router-Ethics (2) + MCP (2) + outros |
| `05-ESTRATEGIA` | 22 | Manifestos (4) + raiz (11) + Produtos/Conceitos/Políticas/Mapas/Doutrina/Pricing/Growth |
| `04-DADOS` | 17 | Gov.br (10) + BEPS + CPMI + IA-INSS + LAI |
| `01-DNA` | 16 | Manifesto (5) + GRID Cognitivo (3) + raiz (7) + Identidade (1) |
| `01-IDENTIDADE` | 12 | Identidade visual/Selo/Vocabulário/Visual Law paleta + ARQUIVO-Legado (2) |
| `0_4_CADUNICO` | 7 | Material CadÚnico — relevância AP **zero** (target oposto) |
| `CLAUDE CODE` | 6 | Briefings históricos de onboarding Claude Code |
| `08-ARTEFATOS` | 4 | Hashes POPs + Coletânea + Relatório Ementa 069 |
| `07-PESQUISAS` | 3 | Garimpagem 17 docs + Ementa 069 + README |
| `JURIDICO` | 3 | Palco Judicial (Relatório/FONAJEF/Pasta-Análise INSS) |
| `06-COMUNICACAO` | 2 | Relatórios CRPS + PcD-TA |
| `Documentação` (dentro do Vault) | 2 | Sub-pasta interna ao Vault (não confundir com Cérebro 1 externo) |
| `06-Processos` | 1 | MC-PROCESSO-Jornada v1_3 (versão velha de Jornada E0E7) |
| `RIO` | 0 | **Pasta vazia** — anomalia |
| `Templates` | 4 | Templates de Manifesto/Orientação/Contrato Phi4/TTA |
| **TOTAL ATIVO** | **356** | |

### 2.2 Documentação (Cérebro 1, `G:\...\Gestão Software\Documentação\`)

Top 10 pastas por volume (de 738 .md varríveis):

| Pasta | `.md` | Sinal de valor AP |
|---|---:|---|
| `_RECEITA - B2C - DOSSIÊ SELADO _ ADR 007 Precificação` | 146 | Pricing materials — relevante para conversão Pv |
| `0 FIDUCIÁRIO DIGITAL DE DOSSIÊS PREVIDENCIÁRIOS HIPERV.` | 82 | ADR-009 source — sigilo dossiê útil AP |
| `TEMP` | 62 | Ruído transiente — **SKIP** |
| `_ARQUIVO` | 61 | Arquivo morto — **SKIP** |
| `_QUEM SOMOS / POSICIONAMENTO DE MARCA` | 41 | Brand MC — não aplicável AP |
| `_DNA MC` | 35 | DNA MC selado — não aplicável AP |
| `Identidade Visual` | 35 | Design system — parcialmente aplicável AP |
| `_Knowledge Base v5.0 (20/04/2026)` | 28 | KB MC operacional |
| `MC-PACOTE-Juliana-19Mai2026` | 27 | Parecer Dra. Juliana — input contratos |
| `SKILLS _ 8` | 19 | Skills MC versionadas |

### 2.3 Pastas puladas (modo read-only ainda mais estrito)

`_INBOX`, `_LEGADO-06-OPERACOES-20260513-152654`, `_LEGADO-vault-aninhado-20260515-140137`, `_HISTORICO`, `_PESSOAL`, `.obsidian`, `.git`, `.claude`, `ClickUp` (sincronizada por daemon), `Calendar`, `assets`, `TEMP`, `_ARQUIVO`.

Justificativa por pasta:
- `_INBOX`, `_HISTORICO`, `TEMP`, `_ARQUIVO`, `_LEGADO-*` — transientes/arquivados (Princípio MC #29)
- `_PESSOAL` — privacidade founder; conteúdo não-trabalho
- `ClickUp` — sincronizada por daemon a cada 5min (memória `project_meu_cumpadre`); edições locais sobrescritas
- `.obsidian`, `.git`, `.claude` — configs de ferramentas
- `Calendar` — eventos, sem material técnico
- `assets` — binários (imagens/PDFs)

---

## 3 · Anomalias Detectadas (19 itens)

### 3.1 Arquivos `.bak` no root do Vault (housekeeping debt)

```
CLAUDE.md.bak-20260513-155436
CLAUDE.md.20260513-214731.bak
hot.md.20260513-214731.bak
CLAUDE.md.20260514-014814.bak
hot.md.20260514-014814.bak
CLAUDE.md.20260514-192642.bak
05-ESTRATEGIA\mapas\MC-MAPA-Convergencia*.md.bak
```

**Impacto AP:** zero (não interfere no garimpo). **Sugestão:** mover para `_HISTORICO/` ou `_LEGADO-*` em housekeeping futuro.

### 3.2 Duplicação Grimório Previdenciário v2

```
02-ARQUITETURA\grimorio\Grimorio_Previdenciario_v2.md       (781,5 KB)
02-ARQUITETURA\grimorio\0  GRIMÓRIO PREVIDENCIÁRIO v2.md     (782 KB)
```

Mesma pasta, mesma versão, tamanho quase idêntico. **[CONFIRMAR FOUNDER]:** qual é o canônico operacional. Para fins do garimpo, vou tratar como **um único ativo lógico** (Grimório v2), referenciando o `0  GRIMÓRIO PREVIDENCIÁRIO v2.md` (mais recente por convenção de prefixo `0 `).

### 3.3 Duplicação ADR canônico (02 vs 03)

ADRs **007, 008, 009a, 010, 013** existem em **dois caminhos canônicos simultaneamente**:

```
02-ARQUITETURA\adrs\MC-ADR-007-CampoPrecificacao-v3_8-ADDENDUM-2026-0507-COM-ADORNOS-OBSIDIAN.md
03-GOVERNANCA\adrs\MC-ADR-007-CampoPrecificacao-v3_8-ADDENDUM-2026-0507.md
```

(versão "COM-ADORNOS-OBSIDIAN" em 02 vs versão "limpa" em 03). Princípio MC #24 (Documentação Canônica Unificada) supostamente resolveria isso — possivelmente trabalho em curso. **[CONFIRMAR FOUNDER]:** qual versão é a canônica operacional. Para o garimpo, vou priorizar a versão **`03-GOVERNANCA/adrs/`** (governança), conforme convenção padrão.

ADR-009b está **apenas em 03-GOVERNANCA/adrs** (não em 02). ADRs 011, 012, 014, 015, 016 estão **apenas em 03**.

### 3.4 ADR-012 duas versões coexistindo

```
03-GOVERNANCA\adrs\MC-ADR-012-StackLLM-MultiModelo-v1_0-2026-0512.md
03-GOVERNANCA\adrs\MC-ADR-012-StackLLM-MultiModelo-v1_1-2026-0513.md
```

v1.1 supersedes v1.0 — v1.0 deveria estar em `_arquivados/` ou ter banner de supersedência.

### 3.5 SPEC IdentidadeVisual versionamento ativo

```
02-ARQUITETURA\specs\MC-SPEC-IdentidadeVisual-Tecnico-v1_0-2026-0513.archived-20260513-161316.md
02-ARQUITETURA\specs\MC-SPEC-IdentidadeVisual-Tecnico-v2_0-2026-0513.md
02-ARQUITETURA\specs\MC-SPEC-IdentidadeVisual-Tecnico-v2_1-2026-0515.md
```

v1.0 arquivado in-place (com sufixo `.archived-*`) — v2.1 é o canônico atual.

### 3.6 Router-Ethics v10 NÃO arquivado

Memória `project_meu_cumpadre` indica que v10 deveria estar em `_arquivados/`:

```
02-ARQUITETURA\router-ethics\_MC-RouterEthics_11_v1_1-2026-0505-CLevel.md   (332KB · canônico v11.0)
02-ARQUITETURA\router-ethics\RouterEthics_10_MeuCumpadre_Unificado_v3_0-2026-0421.md  (40KB · v10)
```

v10 está **na mesma pasta** que v11 — desatualizado em relação à memória que afirma "arquivado em `_arquivados/`". **Impacto AP:** zero (vou usar v11 canônico).

### 3.7 RIPDs com versões ERRATADAS

```
MC-RIPD-Fase4-Guardiao-PosJornada-v0_2-PROVISIONAL-2026-0515.ERRATADO-tamanho-incompleto-2026-0515.md
MC-RIPD-Hook1b-NIS-IVCAD-MC-v0_2-PROVISIONAL-2026-0515.ERRATADO-tamanho-incompleto-2026-0515.md
```

Sufixo `ERRATADO-tamanho-incompleto` indica erro de sync detectado. Existem versões "boas" `v0_2` sem o sufixo — vou usar essas no garimpo.

### 3.8 POP Visual Law duplicado entre pops/ e protocolos/

`MC-POP-VisualLaw-DossieSelado-PARTE{1,2,3}` aparece em ambas:
- `04-OPERACAO/pops/` (versões v1_0 e v1_2)
- `04-OPERACAO/protocolos/` (versões v1_2 e v1_3)

Versão mais recente (v1_3) está só em `protocolos/`. Vou tratar `protocolos/MC-POP-VisualLaw-DossieSelado-PARTE*-v1_3-2026-0502.md` como canônico para o garimpo.

### 3.9 SUPLEMENTO Cowork versionamento ativo

```
MC-COWORK-SYSTEM-PROMPT-SUPLEMENTO-v1_1, v1_2, v1_3, v1_4-2026-0513
```

4 versões na mesma pasta. v1_4 deve ser o canônico — outras possivelmente para arquivamento.

### 3.10 Princípio #037 duas versões coexistindo

```
MC-PRINCIPIO-037-BriefDiamantadoSobrescreveDefaultsUI-v1_0-2026-0515.md
MC-PRINCIPIO-037-BriefDiamantadoSobrescreveDefaultsUI-v1_1-2026-0515.md
```

Memória aponta v1.1 ATIVO desde 16/05.

### 3.11 Princípios — saltos numéricos / colisões

- Numeração ativa: 001-022, 024, 031-035, 037 (v1.0 e v1.1)
- **#023, #025-#030, #036** ausentes da pasta `principios/`
- Em `patches/`: PROVISIONAL #022, #025-#030, #044-#047 (futuros princípios)
- Arquivos `_COLISAO-PRINCIPIOS-MB029-vs-Hib001-2026-0513.md` e `MC-PRINCIPIO-PENDENTE-DocumentacaoCanonicaUnificada-COLISAO22-v1_0-2026-0513.md` registram colisões resolvidas

### 3.12 INDEX patches deprecado in-place

```
03-GOVERNANCA\patches\INDEX-PATCHES-DEPRECADO-2026-0513.md
03-GOVERNANCA\patches\INDEX-PATCHES.md
```

Versão deprecada não foi movida — sufixo no nome indica status.

### 3.13 MB-024b duplicado por minuto

```
MB-024b-Banner-Historico-ADR009-20260513-005014.md
MB-024b-Banner-Historico-ADR009-20260513-005046.md
```

Dois arquivos com 32 segundos de diferença — provável duplicação acidental.

### 3.14 MC-PROCESSO-Jornada_E0E7 versionamento triplo

```
06-Processos\MC-PROCESSO-Jornada_E0E7_Mestre-v1_3-2026-0509.md          (v1.3)
04-OPERACAO\protocolos\MC-PROCESSO-Jornada_E0E7_Mestre-v1_2-2026-0427.md (v1.2)
04-OPERACAO\protocolos\MC-PROCESSO-Jornada_E0E7_Mestre-v1_3_1-2026-0509.md (v1.3.1)
02-ARQUITETURA\specs\MC-PROCESSO-Jornada_E0E7_Mestre-v1_3-2026-0507.md   (v1.3 mais antiga)
```

4 instâncias em 3 pastas diferentes. v1.3.1 (09/05) é o mais recente em `04-OPERACAO/protocolos/`.

### 3.15 MC-INSTRUCOES-PROJETO no root do Vault

```
MC-INSTRUCOES-PROJETO-v6_0_2-2026-0509.md  (no root)
01-DNA\MC-INSTRUCOES-Projeto-v4_0-2026-0427.md
01-DNA\MC-INSTRUCOES-PROJETO-v6_0_2-2026-0509.md  (duplicado)
```

Memória `project_meu_cumpadre` indica **v8.0.1 SELADO em 17/05** como vigente — mas v8.0.1 **não foi detectada no Vault**. Possíveis cenários: (a) v8.0.1 ainda só no Projeto Claude.ai não foi colada no Vault; (b) v8.0.1 está em outra pasta. Para AP, isso é irrelevante mas **flag para o founder**.

### 3.16 INDEX.md do Vault desatualizado

`INDEX.md` (raiz, modificado 11/05) referencia:
- "Pasta `06-OPERACOES`" — **renomeada para `04-OPERACAO` em 13/05** (existe `_LEGADO-06-OPERACOES-*` como evidência)
- "Knowledge Base v4" — KB v5.0 existe em `Documentação` (Cérebro 1)
- **NÃO menciona:** `01-IDENTIDADE`, `04-OPERACAO`, `06-COMUNICACAO`, `JURIDICO`, `0_4_CADUNICO`, `RIO`

### 3.17 Pasta `Documentação` dentro do Vault (redundância)

Existe `[Vault]/Documentação/` com 2 .md — provável vestígio de migração entre Cérebros. Ambos arquivos são técnicos (`MC-MEMO-MAPA-DRIVE-IDS-v1_2-2026-0509.md` provável).

### 3.18 Pasta `RIO/` vazia

0 arquivos `.md`. **[CONFIRMAR FOUNDER]:** propósito? Vertical futura? Reservar / remover.

### 3.19 04-DADOS/govbr paralelo a 02-ARQUITETURA/govbr

Dois acervos gov.br independentes:
- `02-ARQUITETURA\govbr\` (5 arquivos) — Matriz NS, Catálogo Travas, Árvore Decisão API, E8-FAQ
- `04-DADOS\govbr\` (10 arquivos) — versões mais novas dessas matrizes + Anamnese + Mapa Normativo + Taxonomia + Inventário

`04-DADOS/govbr/` parece ser o canônico operacional (versões mais recentes). 02-ARQUITETURA/govbr aparenta ser o "primeiro draft".

---

## 4 · Pastas Detectadas vs `INDEX.md` v1.0

| Pasta detectada (real) | `INDEX.md` lista? | Status |
|---|---|---|
| `01-DNA` | ✅ | Sincronizado |
| `01-IDENTIDADE` | ❌ | **Lacuna INDEX** — pasta criada pós-INDEX |
| `02-ARQUITETURA` | ✅ | Sincronizado |
| `03-GOVERNANCA` | ✅ | Sincronizado |
| `04-DADOS` | ✅ | Sincronizado |
| `04-OPERACAO` | ❌ | **INDEX cita `06-OPERACOES` (renomeado em 13/05)** |
| `05-ESTRATEGIA` | ✅ | Sincronizado |
| `06-COMUNICACAO` | ❌ | **Lacuna INDEX** |
| `06-Processos` | ❌ | **Lacuna INDEX** (1 arquivo legado) |
| `07-PESQUISAS` | ✅ | Sincronizado |
| `08-ARTEFATOS` | ✅ | Sincronizado |
| `_PESSOAL` | ✅ | Sincronizado (privado) |
| `CLAUDE CODE` | ✅ | Sincronizado |
| `ClickUp` | ✅ | Sincronizado |
| `Calendar` | ❌ | Lacuna INDEX |
| `JURIDICO` | ❌ | Lacuna INDEX (palco judicial) |
| `Templates` | ❌ | Lacuna INDEX |
| `0_4_CADUNICO` | ❌ | Lacuna INDEX |
| `RIO` | ❌ | Lacuna INDEX (vazia) |
| `_HISTORICO`, `_LEGADO-*` | ❌ | Lacuna INDEX (arquivamento) |

---

## 5 · Arquivos Órfãos / Sem Categoria Clara

| Arquivo | Pasta | Por que órfão |
|---|---|---|
| `📋 Painel Estratégico.md` | root | Sem versionamento, sem prefixo MC- |
| `Stack de Integração IA + Obsidian + Drive.JPG` | root | Binário no root (não .md mas relevante) |
| `MC-VAULT-SETUP.bat`, `MC-VAULT-IMPLANTA.ps1`, `auditar.bat` | root | Scripts no root (sem pasta `04-OPERACAO/scripts/`) |
| `hot.md` | root | "hot" não padronizado; provável scratch |
| `06-Processos\MC-PROCESSO-Jornada-v1_3` | 06-Processos | Pasta órfã pré-renomeação |
| `Documentação\` (interna ao Vault) | root | Resíduo de migração |
| `assets\` | root | Pasta de binários sem subestrutura |

---

## 6 · Hipóteses de Localização de Ouros AP

Após o sweep, **mapeamento preliminar** das hipóteses do MB §2.2 contra a realidade:

### Categoria Grimório
- ✅ Grimório Previdenciário v2 — `02-ARQUITETURA/grimorio/0  GRIMÓRIO PREVIDENCIÁRIO v2.md` (782KB)
- ❓ Teses específicas (Vida Toda, IRSM 39%, LC 142/2013, Acidentário B91/B92/B94, etc.) — **embarcadas no Grimório monolítico**, vou avaliar por capítulo
- ✅ `02-ARQUITETURA/changelogs/MC-CHANGELOG-Juridico-v2_0-2026-0503.md`
- ❓ Anjos — não detectado arquivo dedicado, possivelmente capítulo do Grimório

### Categoria Router-Ethics
- ✅ Canônico v11.0 (332KB) — `02-ARQUITETURA/router-ethics/_MC-RouterEthics_11_v1_1-2026-0505-CLevel.md`
- ✅ Princípios cofounder (35+ na pasta `principios/`)
- ✅ Patches PROVISIONAL (23 em `patches/`)

### Categoria POPs & Templates
- ✅ POP Visual Law v1_3 — `04-OPERACAO/protocolos/MC-POP-VisualLaw-DossieSelado-PARTE{1,2,3}-v1_3-2026-0502.md`
- ✅ POPs E1-E6 — `04-OPERACAO/protocolos/MC-POP-E{1-6}-*.md`
- ✅ POP Phi0 Triagem — `04-OPERACAO/protocolos/MC-POP-Phi0-Triagem-Operacional-v1_0-2026-0507.md`
- ✅ POP Desbloqueio GovBR — `04-OPERACAO/pops/MC-POP-Desbloqueio-GovBR-v1_0-2026-0429.md`
- ✅ Kit Anti-Desespero, Kit Dossiê Constituição — `04-OPERACAO/kits/`
- ✅ POP Bitwarden, POP Encerramento, POP Handoff Jurídico — `04-OPERACAO/protocolos/`
- ✅ RIPDs — `03-GOVERNANCA/ripds/` (Fase1 Standard + Fase4 Guardião + Hook1b NIS-IVCAD)
- ✅ Templates — 4 em `/Templates/` (Manifesto/GovBr/Phi4/TTA)
- ✅ Contratos Phi1/Psi1 — `03-GOVERNANCA/contratos/`

### Categoria ADRs & Specs
- ✅ ADR-007 v3.8 (pricing) — em ambos 02 e 03
- ✅ ADR-008 (stack ferramentas)
- ✅ ADR-009a (custódia credenciais gov.br) — v2.0 25/04
- ✅ ADR-009b (3 estados dossiê) — só em 03 — 17/04
- ✅ ADR-010 (E3 Intelligence Layer)
- ✅ ADR-011 (Arquitetura 3 Cérebros)
- ✅ ADR-012 (Stack LLM multi-modelo) v1.1
- ✅ ADR-013 (Convenções Operacionais IVCAD)
- ✅ ADR-014 (ZapSign)
- ✅ ADR-015 (Features Avançadas ClickUp)
- ✅ ADR-016 (Compliance Documental Anti-Injection)
- ✅ ADR-019 PROVISIONAL (Limitação MCP Drive)
- ✅ MC-SPEC-ClickUp v3.1.1 — `02-ARQUITETURA/specs/`
- ✅ MC-SPEC-ADR009b-TTA-Igor v1_0 — backend Igor
- ✅ MC-SPEC-Marketplace (Critérios + Selo Premium)
- ✅ MC-SPEC-Playwright-MeuINSS — automação INSS
- ✅ MC-SPEC-Spec-Driven-Workflow
- ✅ MC-PROCESSO-Jornada E0E7 v1.3.1 — canônico em `04-OPERACAO/protocolos/`

### Categoria Stack & Infraestrutura
- ✅ MC-INFRA Servidor Hostinger — `02-ARQUITETURA/infra/`
- ✅ Arquitetura MCP v3.0 — `02-ARQUITETURA/mcp/`
- ✅ MC-REGISTRO Infraestrutura DELL CEO + Hardware
- ✅ MC-GUIA Configuração Cowork DELL
- ✅ MC-COWORK SYSTEM PROMPT + 4 SUPLEMENTOS
- ✅ MC-ANALISE-GAIA Arquitetura LLM
- ✅ Material gov.br canônico — `04-DADOS/govbr/` (10 arquivos)
- ✅ Material BEPS — `04-DADOS/`
- ✅ Hyperplanilha v1.1 changelog

---

## 7 · Estimativa de Esforço Restante (T2-T4)

Com 356 arquivos no Vault MC após skips, sweep terminado, e categorias mapeadas:

| Tarefa | Arquivos a varrer | Tempo estimado |
|---|---:|---|
| T2.1 Grimório | 10-15 (foco no Grimório monolítico + changelog) | 25 min |
| T2.2 Router-Ethics | 60+ (Router 332KB + 35 princípios + 23 patches) | 35 min |
| T2.3 POPs & Templates | 35-40 (POPs/Protocolos/Kits/Templates/Contratos/RIPDs) | 30 min |
| T2.4 ADRs & Specs | 30-35 (ADRs + Specs + Processo Jornada) | 30 min |
| T2.5 Stack & Infra | 25-30 (Infra/MCP/COWORK/GAIA/govbr/BEPS) | 25 min |
| T3 Índice MasterMap | consolidação | 20 min |
| T4 Hash-verify + Reporte | 7 arquivos | 10 min |
| **Total estimado restante** | | **~3h** |

---

## 8 · Decisões de Garimpo Sniper (declaradas aqui)

1. **Quando ADR existe em 02 E 03:** usar versão de `03-GOVERNANCA/adrs/` (sem `COM-ADORNOS-OBSIDIAN`) como canônica.
2. **Quando duas versões coexistem (v1.0 + v1.1):** usar a maior, salvo override por sufixo `ERRATADO`/`archived`.
3. **Quando arquivo tem sufixo `ERRATADO-tamanho-incompleto`:** **descartar** e usar versão sem sufixo.
4. **Quando arquivo tem sufixo `.archived-*`:** **descartar** (foi arquivado in-place).
5. **Para o Grimório Previdenciário v2:** tratar como ativo lógico único; capítulos relevantes para AP serão extraídos no T2.1 sem desmembrar o monolítico.
6. **Pasta `04-DADOS/govbr/` é canônica;** `02-ARQUITETURA/govbr/` é histórico.
7. **MC-PROCESSO-Jornada E0E7:** versão canônica = `04-OPERACAO/protocolos/MC-PROCESSO-Jornada_E0E7_Mestre-v1_3_1-2026-0509.md`.
8. **Princípios cofounder:** usar versão `principios/` (ATIVOS); patches/ vai para T2.2 separadamente.
9. **Não vou tentar resolver as anomalias §3** — apenas documentar. Resolução é tarefa de housekeeping pós-AP.

---

## 9 · Riscos & Mitigações

| Risco | Probabilidade | Mitigação |
|---|---|---|
| Selecionar versão errada quando há duplicata | Média | Decisões §8 declaradas; flagar `[CONFIRMAR FOUNDER]` quando duvidoso |
| Perder ouro AP "escondido" na pasta `Documentação` (738 .md) | Alta | Sweep T2 só amostra Documentação para validar gaps; foco principal é Vault MC |
| Gerar inventário superdimensionado por gula de inclusão | Média | 4 filtros positivos rigorosos + carimbo de conversão |
| Vocabulário cumpadre escapar para output AP | Baixa | Output preserva linguagem cumpadre no back-end; conversão é responsabilidade da Tarefa de implementação AP |
| INDEX.md desatualizado induzir omissão | Média | Sweep apurou pastas reais (§4) — uso a realidade, não o INDEX |

---

## 10 · Pendências [CONFIRMAR FOUNDER]

1. Duplicação Grimório v2 (`Grimorio_Previdenciario_v2.md` vs `0  GRIMÓRIO PREVIDENCIÁRIO v2.md`) — qual é canônico?
2. Duplicação ADR canônico 02 vs 03 — qual pasta é definitiva?
3. Pasta `RIO/` vazia — propósito?
4. MC-INSTRUCOES-PROJETO v8.0.1 (17/05) não detectada no Vault — está em outra fonte? Vou trabalhar com v6.0.2 (mais recente detectada).
5. Pasta `Documentação` (Cérebro 1, externa) tem 738 .md — devo aprofundar nela em T2 ou manter foco no Vault?

---

**MB-AP-002 · SWEEP DIAGNÓSTICO v1.0 · SELADO 20/05/2026**
Executor: Claude Code DELL · Tarefa 1 de 8 concluída
∞
