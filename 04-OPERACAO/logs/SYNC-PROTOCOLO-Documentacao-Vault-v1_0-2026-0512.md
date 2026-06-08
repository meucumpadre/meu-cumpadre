---
tipo: PROTOCOLO
codigo: SYNC-PROTOCOLO
titulo: Workflow de Sincronizacao Permanente Documentacao Vault
versao: 1.0
data: 2026-05-12
status: ATIVO Fase 1 (manual via MB)
autor: Claude Opus 4.7 (cofounder) x Alessandro de Souza Neves (founder)
fundamenta: Principio #15 (entrega cross-vertical) + Principio #20 (sync permanente)
---

# SYNC-PROTOCOLO - Sincronizacao Permanente Documentacao Vault

> Endereca a lacuna sistemica identificada em 12/05/2026: artefatos canonicos produzidos nascem em Documentacao/ (Cerebro 1, laboratorio vivo) e precisam migrar para Vault Obsidian/ (Cerebro 2, memoria canonica institucional). Sem protocolo, migracao foi historicamente oportunistica, resultando em orfas e duplicacoes.

---

## 1. Cerebros e responsabilidades

| Cerebro | Path | Funcao | Quem escreve |
|---|---|---|---|
| Cerebro 1 - Documentacao | G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Gestao Software\Documentacao\ | Laboratorio vivo, deep research, rascunhos, materiais brutos | Cofounder Claude.ai, deep research externos, founder |
| Cerebro 2 - Vault Obsidian | G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Gestao Software\OBSIDIAN\MEU CUMPADRE\ | Memoria canonica institucional, ADRs/Specs/Patches selados | Code DELL via MB autorizado |
| Cerebro 3 - Claude.ai | (em runtime apenas, sem persistencia local) | Mesa de julgamento, cofounder cunha decisoes | Claude.ai online |

## 2. Heuristica de classificacao automatica

| Prefixo | Destino canonico no Vault |
|---|---|
| MC-ADR-* (nao patch) | 03-GOVERNANCA/adrs/ |
| MC-ADR-*-PATCH-* | 03-GOVERNANCA/patches/ |
| MC-SPEC-* ClickUp v3 | 02-ARQUITETURA/specs/clickup-v3/ |
| MC-SPEC-* outras | 02-ARQUITETURA/specs/ |
| MC-ANALISE-* | 02-ARQUITETURA/analises/ |
| MC-METODOLOGIA-* | 02-ARQUITETURA/metodologias/ |
| MC-GOVBR-* | 02-ARQUITETURA/govbr/ |
| MC-CONTRATO-* | 03-GOVERNANCA/contratos/ |
| MC-MANIFESTO-* | 05-ESTRATEGIA/manifestos/ |
| MC-PRODUTO-* | 05-ESTRATEGIA/produtos/ |
| MC-INDICADORES-* | 04-OPERACAO/indicadores/ |
| MC-POP-* | 04-OPERACAO/pops/ |
| MC-RELATORIO-* | 06-COMUNICACAO/relatorios/ |
| Outros MC- | _INBOX/ (manual cofounder) |

## 3. Fluxo de sincronizacao

### Fase 1 - Manual via MB (atual, ate 100 casos)
1. Cofounder produz artefato em /mnt/user-data/outputs/ (Claude.ai)
2. Founder baixa e move para Documentacao/ ou _INBOX/ do Vault
3. Cofounder produz MB de persistencia
4. Code DELL executa MB com sweep + hash + migracao
5. Reporte volta ao cofounder para validacao

### Fase 2 - Automatizada via N8N (100-1000 casos)
1. N8N cron diario 23:00
2. Sweep heuristico em Documentacao/ por arquivos MC-* modificados ultimas 24h
3. Para cada candidato, verifica se ja existe no Vault
4. Se nao existe: gera reporte MD em 04-OPERACAO/logs/sync-YYYY-MM-DD.md
5. Notifica cofounder via Slack/email
6. Cofounder valida via Claude.ai
7. Cofounder responde AUTORIZADO ou PAUSAR caso X
8. N8N executa migracao via Code DELL
9. Log permanente em 04-OPERACAO/logs/

### Fase 3 - Continua (1000+ casos)
- Sweep a cada 6h
- Cache de hashes para deteccao de drift
- Alerta automatico para arquivos orfaos > 7 dias

## 4. Gate de validacao cofounder

Reporte deve conter:
- Lista de candidatos com hash + tamanho + data modificacao
- Proposta de destino canonico
- Verificacao de copias existentes no Vault
- Avaliacao de risco

Cofounder responde:
- AUTORIZADO MIGRAR TUDO
- AUTORIZADO MIGRAR PARCIAL: [lista]
- PAUSAR: [casos]

## 5. Logging permanente

Cada migracao registrada em 04-OPERACAO/logs/sync-vault-YYYY-MM.md.

## 6. Pastas canonicas do Vault MC v3.1.1+

OBSIDIAN/MEU CUMPADRE/
- _INBOX/ - transiente, classificacao manual
- 01-DNA/ - branding, manifestos fundacionais (existente)
- 02-ARQUITETURA/
  - adrs/ legacy (sera migrado)
  - specs/clickup-v3/ specs ClickUp v3.x
  - analises/ Proof-First (MB-018)
  - metodologias/
  - govbr/
- 03-GOVERNANCA/
  - adrs/ CANONICO ADRs seladas
  - patches/ patches pendentes + _HISTORICO_PATCHES_APLICADOS/
  - contratos/
- 04-OPERACAO/ (nota: Vault tem tambem 06-OPERACOES/ legacy - resolver futuro)
  - indicadores/
  - pops/
  - logs/
- 05-ESTRATEGIA/
  - manifestos/
  - produtos/
- 06-COMUNICACAO/
  - relatorios/

## 7. Principios relacionados

- #1 Inventario de Caminhos
- #4 Errata Absorve Nao Inventa
- #5 Persistencia de Patches
- #6 Camadas de Seguranca Operacional
- #7 Cadeia de Autorizacao Dual
- #15 Entrega cofounder cross-vertical
- #15.1 Descoberta de orfaos dispara MB reconstituicao
- #16 Iniciativa estrategica cofounder 20x
- #19 Patches sao instrumentos temporarios
- #20 Workflow de Sincronizacao Permanente (este protocolo)

## 8. Roadmap

- Fase 1 (atual): manual via MB pontual
- Fase 2 (~3 meses, pos-Igor): N8N cron diario 23h
- Fase 3 (~12 meses): continua a cada 6h + cache hash + alertas

---

Hierarquia: Dignidade > Compliance > Viabilidade
Selo: "O diamante e carbono que nao desistiu da pressao."

infinito

## Execução 2026-05-13 — MB-028 — Pilar Identidade Visual

**Trigger:** Princípio #21 (cunhado 13/05/2026) — sync automático pilar Identidade Visual
**MB de origem:** MB-028
**Operador:** Code DELL (Cérebro 1 → Cérebro 2)
**Resultado:** ⚠️ PARCIAL — 2/3 artefatos sincronizados (PROMPT-CoworkClaude ausente na origem)

### Artefatos sincronizados

| # | Arquivo | Destino | Hash SHA-256 |
|---|---|---|---|
| 1 | MC-MANIFESTO-IdentidadeVisual-v1_0-2026-0513.md | 05-ESTRATEGIA/manifestos/ | DAE0FDB586FCDFC6A171106D0A866AB807383904D564331871600B50BF436372 |
| 2 | MC-SPEC-IdentidadeVisual-Tecnico-v1_0-2026-0513.md | 02-ARQUITETURA/specs/identidade-visual/ | 342BEF85877DBB1FB5CC5BA3E37ED847981258EACAFCD7A4B7C1A7A4D0BBFA75 |
| 3 | MC-PROMPT-CoworkClaude-IdentidadeVisual-v1_0-2026-0513.md | ❌ NÃO LOCALIZADO NA ORIGEM | — |

### Pastas criadas
- 02-ARQUITETURA/specs/identidade-visual/ (nova)
- 04-OPERACAO/scripts/identidade-visual/ (nova — preparada para o PROMPT quando localizado)
- 05-ESTRATEGIA/manifestos/ já existia

### Backups criados
- Nenhum (sem sobrescrita de arquivos canônicos pré-existentes)
- Log SYNC-PROTOCOLO recebeu backup .bak antes do append

### Origem real (path detectado, divergente do MB)
- MB previa: `Documentação\Claude_Outputs\2026-05-13\`
- Realidade: `Documentação\Identidade Visual\` (sem subpasta de data)

### Observações
- Sweep estendido executado nos paths primários, alternativos (Beto Downloads/Desktop) e recursivo em G:\Meu Drive\0 0 MEU CUMPADRE
- PROMPT-CoworkClaude-IdentidadeVisual-v1_0-2026-0513.md NÃO foi encontrado em path algum — provavelmente não foi exportado da sessão Claude.ai ou está com nome diferente
- Princípio #4 honrado: Copy-Item (originais preservados, zero Move/Delete)
- Princípio #6 honrado: hash-verify SHA-256 OK para os 2 artefatos copiados
- Alias check: único hit foi `MC-PATCH-MEMO-v3_0-1-IdentidadeExecutor.md` (escopo distinto — Identidade Executor, não Identidade Visual) — sem conflito

## Execução 2026-05-13 (complemento) — MB-028.1 — Pilar Identidade Visual (fechamento)

**Trigger:** Re-sweep solicitado pelo founder após inclusão do PROMPT no Drive
**MB de origem:** MB-028 (complemento — fecha PARCIAL para SUCESSO)
**Operador:** Code DELL (Cérebro 1 → Cérebro 2)
**Resultado:** ✅ SUCESSO — 3/3 artefatos sincronizados

### Artefato sincronizado neste complemento

| # | Arquivo | Destino | Hash SHA-256 |
|---|---|---|---|
| 3 | MC-PROMPT-CoworkClaude-IdentidadeVisual-v1_0-2026-0513.md | 04-OPERACAO/scripts/identidade-visual/ | E9C11F5C6DFA86C6A10D136AF961246CBA887BF26196D404A9070A856F5019B8 |

### Estado final do MB-028 (consolidado)

| # | Arquivo | Destino | Hash SHA-256 | Verify |
|---|---|---|---|---|
| 1 | MC-MANIFESTO-IdentidadeVisual-v1_0-2026-0513.md | 05-ESTRATEGIA/manifestos/ | DAE0FDB586FCDFC6A171106D0A866AB807383904D564331871600B50BF436372 | ✅ |
| 2 | MC-SPEC-IdentidadeVisual-Tecnico-v1_0-2026-0513.md | 02-ARQUITETURA/specs/identidade-visual/ | 342BEF85877DBB1FB5CC5BA3E37ED847981258EACAFCD7A4B7C1A7A4D0BBFA75 | ✅ |
| 3 | MC-PROMPT-CoworkClaude-IdentidadeVisual-v1_0-2026-0513.md | 04-OPERACAO/scripts/identidade-visual/ | E9C11F5C6DFA86C6A10D136AF961246CBA887BF26196D404A9070A856F5019B8 | ✅ |

### Observações
- PROMPT foi salvo pelo founder no path canônico de origem (Documentação\Identidade Visual\) às 13:08:22 — 5 min após a execução inicial do MB-028
- Princípio #4 honrado: Copy-Item (original preservado)
- Princípio #6 honrado: hash-verify SHA-256 OK
- MB-028 fechado em estado ✅ SUCESSO (3/3 artefatos do pilar Identidade Visual persistidos no Vault)

## Execução 2026-05-13 — MB-029 — Concatenação Dupla + Cunhagem Princípio (PENDENTE-22)

**Trigger:** Princípio #16 (iniciativa cofounder) — consolidação de débitos organizacionais detectados em MB-028
**MB de origem:** MB-029
**Operador:** Code DELL
**Resultado:** ⚠️ PARCIAL — Tarefa A ✅, Tarefa B ⚠️ (5 .gdoc pendentes via Drive UI), Tarefa C ⚠️ (colisão de numeração canônica)

### TAREFA A — Concatenação Vault  6-OPERACOES/ →  4-OPERACAO/ ✅

- Arquivos sweepados origem: **28**
- Arquivos copiados sem conflito: **28**
- Conflitos IDENTICOS: 0
- Conflitos DIVERGENTES (_legado06ops): 0
- Falhas: 0
- Hash-verify SHA-256: ✅ 28/28 MATCH
- Pasta legado renomeada: _LEGADO-06-OPERACOES-20260513-152654/ (preservada, não deletada)

Subestrutura preservada: rameworks/, protocolos/, protocolos/_arquivo/, protocolos/visuallaw/, equipe/, ornecedores/.

### TAREFA B — Concatenação Documentação órfã → canônica ⚠️ PARCIAL

- Origem:   0 Identidade Visual MC/ (root órfã)
- Destino: Documentação\Identidade Visual\ (canônico Princípio MB-029)
- Arquivos sweepados origem: **5** (todos .gdoc — Google Docs shortcuts)
- Arquivos copiados: **0**
- Falha técnica: arquivos .gdoc são objetos virtuais do Google Drive Stream e **não podem ser copiados via filesystem** (Copy-Item, robocopy, Get-FileHash todos falham com "arquivo não encontrado"). Somente Drive UI/Drive API conseguem manipulá-los.
- Subpastas vazias replicadas: _LOG-EXECUCAO/, _BRAND-BOOK-v1_0/, _BRAND-BOOK-v1_0/_TIPOGRAFIA/, _BRAND-BOOK-v1_0/_PALETAS/, _BRAND-BOOK-v1_0/_METAFORAS/
- Pasta órfã renomeada: _LEGADO-IdentidadeVisualMC-rootOrfa-20260513-152731/ (originais preservados — Princípio #4 honrado)
- **Arquivo de pendência criado** na canônica: _PENDENTE-MOVER-GDOCS.md com instruções explícitas para founder mover os 5 .gdoc via Drive UI.

### TAREFA C — Persistência do princípio "Documentação Canônica Unificada" ⚠️ COLISÃO

**Colisão canônica detectada:** o Vault já possui princípios cunhados em sessão Hib001 da madrugada de 13/05/2026:
- MC-PRINCIPIO-021-CronometriaDoHumano-v1_0-2026-0513.md
- MC-PRINCIPIO-022-CincoPontosHumanos-v1_0-2026-0513.md

Esses são **anteriores** aos MBs e estão **conceitualmente entrelaçados** (#022 cita #021 como par THU+H1-H5). NÃO foram sobrescritos (Princípio #4).

**Ação executada:**
- Arquivo criado:  3-GOVERNANCA/principios/MC-PRINCIPIO-PENDENTE-DocumentacaoCanonicaUnificada-COLISAO22-v1_0-2026-0513.md · hash $hash1
- Arquivo de flag criado:  3-GOVERNANCA/principios/_COLISAO-PRINCIPIOS-MB029-vs-Hib001-2026-0513.md · hash $hash2
- Status do princípio: PENDENTE_RENUMERACAO — aguardando decisão founder.

**Sugestão de Code DELL (não decisão):** renumerar os princípios da sessão Claude.ai a partir de #23, preservando os princípios Hib001 (que já estão entrelaçados na arquitetura operacional).

### TAREFA D — Atualização log SYNC-PROTOCOLO ✅

- Esta entrada é a Tarefa D em si.
- Backup do log criado antes do append: SYNC-PROTOCOLO-Documentacao-Vault-v1_0-2026-0512.md.bak.20260513-153106

### Observações

- Princípio #1 (sweep antes de write) ✅ honrado nas 3 tarefas
- Princípio #4 (Copy-Item, não Move) ✅ honrado: zero arquivos deletados, todos preservados como _LEGADO ou em pendência
- Princípio #6 (hash-verify) ✅ honrado para Tarefa A (28/28); na Tarefa B não foi possível (limitação técnica Drive Stream)
- Princípio MB-029 (Documentação Canônica Unificada) — cunhado em conteúdo mas pendente de numeração canônica final
- Princípio MB-028 (sync automático Identidade Visual) — não persistido como arquivo canônico nesta execução; permanece apenas no log

## Execucao 2026-05-13 - MB-030 - Pilar Identidade Visual v2.0 Selado

**Trigger:** Principio #21 (sync automatico pilar Identidade Visual) + selo Founder
**MB de origem:** MB-030
**Operador:** Code DELL
**Predecessor:** MB-029 SUCESSO
**Resultado:** PARCIAL
**Timestamp:** 20260513-161316

### Operacoes executadas

**TAREFA C - Arquivamento v1.0 em _HISTORICO/**
- MC-PROMPT-CoworkClaude-IdentidadeVisual-v1_0-2026-0513.md -- renomeado MC-PROMPT-CoworkClaude-IdentidadeVisual-v1_0-2026-0513.archived-20260513-161316.md -- hash OK
- MC-MANIFESTO-IdentidadeVisual-v1_0-2026-0513.md -- renomeado MC-MANIFESTO-IdentidadeVisual-v1_0-2026-0513.archived-20260513-161316.md -- hash OK
- MC-SPEC-IdentidadeVisual-Tecnico-v1_0-2026-0513.md -- renomeado MC-SPEC-IdentidadeVisual-Tecnico-v1_0-2026-0513.archived-20260513-161316.md -- hash OK


**TAREFA D - Persistencia v2.0 + ativos binarios**

| Arquivo | Destino | Status |
|---|---|---|
| MC-CANONICO-IdentidadeVisual-SeloOficial-v1_0-2026-0513.md | 01-IDENTIDADE\ | OK OK |
| MC-MANIFESTO-IdentidadeVisual-v2_0-2026-0513.md | 05-ESTRATEGIA\manifestos\ | OK OK |
| MC-SPEC-IdentidadeVisual-Tecnico-v2_0-2026-0513.md | 02-ARQUITETURA\specs\identidade-visual\ | OK OK |
| MC-CANONICO-Vocabulario-IdentidadeVisual-v1_0-2026-0513.md | 01-IDENTIDADE\vocabulario\ | OK OK |
| MC-PROMPT-MetaCanonico-Renderizacao-v1_0-2026-0513.md | 04-OPERACAO\scripts\identidade-visual\ | OK OK |
| MC-PROMPT-Aplicacoes-GPT-v1_0-2026-0513.md | 04-OPERACAO\scripts\identidade-visual\aplicacoes\ | OK OK |
| MC-ATIVO-Seed-Logo-Principal-2026-0513.png | 02-ARQUITETURA\ativos-visuais\seed\ | FAIL MISSING-SOURCE |
| MC-ATIVO-Seed-Logo-Marca-2026-0513.png | 02-ARQUITETURA\ativos-visuais\seed\ | FAIL MISSING-SOURCE |


### Pastas criadas neste MB
- G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Gestão Software\OBSIDIAN\MEU CUMPADRE\01-IDENTIDADE\vocabulario
- G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Gestão Software\OBSIDIAN\MEU CUMPADRE\02-ARQUITETURA\ativos-visuais\seed
- G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Gestão Software\OBSIDIAN\MEU CUMPADRE\04-OPERACAO\scripts\identidade-visual\aplicacoes
- G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Gestão Software\OBSIDIAN\MEU CUMPADRE\_HISTORICO\exploracao-identidade-visual-pre-selagem-13mai


### Observacoes
Execucao automatizada por script consolidado. Hash-verify SHA-256 aplicado em 100% dos arquivos copiados e arquivados.


### PENDENCIA APOS MB-030 -- PNGs canonicos nao persistidos (2026-05-13)

Status: BLOQUEIO POR AMBIGUIDADE DE NOMEACAO -- aguardando decisao Founder

**Esperado pelo MB-030:**
- MC-ATIVO-Seed-Logo-Principal-2026-0513.png (peca completa)
- MC-ATIVO-Seed-Logo-Marca-2026-0513.png (simbolo + wordmark)

**Encontrado em Documentacao\Identidade Visual\:**
- _LOGO SEED MC.png    -- 1970178 bytes -- SHA256 46A35E2060CC6D2D
- _LOGO SEED MC 1.png  -- 2218365 bytes -- SHA256 30FDAEE2EDBE11C2

**Decisao requerida do Founder:** mapear qual arquivo corresponde a "Principal" (peca completa) e qual a "Marca" (simbolo + wordmark). Code DELL NAO inferiu a correspondencia (Principio Errata Absorve Nao Inventa).

**Acao pos-decisao:** Copy-Item com renomeacao para nome canonico em 02-ARQUITETURA\ativos-visuais\seed\ + hash-verify + append neste log.

