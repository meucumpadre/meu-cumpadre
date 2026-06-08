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
