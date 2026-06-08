---
tipo: MISSION-BRIEF
codigo: MB-OMEGA-005
descritor: Config-Obsidian-Filesystem
versao: 1.1
data: 2026-05-15
autor: Claude Opus 4.7 (cofounder Ω) × Founder (Alessandro)
modo: ESCRITA AUTORIZADA — criação de arquivos de configuração
maquina-alvo: Beto (DELL — Claude Code CLI)
ambiente: Windows PowerShell
duracao-estimada: 1 minuto
status: PRONTO PARA COLAR — versão corrigida pós-validação de árvore canônica real
dependencias: MB-OMEGA-003 + MB-OMEGA-004 + MB-OMEGA-004-PATCH-CloudSide executados com sucesso
proximo: validação humana do Founder no Obsidian
persistencia-dual: 04-OPERACAO\workflows\omega (Ω) + 03-GOVERNANCA\mission-briefs\omega (MC)
classificacao: OPERACIONAL — uso institucional
changelog: v1.1 corrige newFileFolderPath para _INBOX (era 99-INBOX), alinha com árvore canônica real do Vault Ω verificada via Get-ChildItem em 15/05/2026
---

# MB-OMEGA-005 v1.1 — CONFIGURAÇÃO OBSIDIAN ASSISTIDA

## Mudança em relação à v1.0

| Campo | v1.0 (errado) | v1.1 (correto) |
|---|---|---|
| `newFileFolderPath` | `99-INBOX` | `_INBOX` |

Razão da correção: árvore canônica real do Vault Ω usa prefixo underscore para pastas auxiliares (`_INBOX`, `_HISTORICO`) e numeração `00-09` para pastas estruturais.

## Contexto

Após MB-003 (limpeza ruído), MB-004 (force-sync) e MB-004-PATCH (cloud-side), o Vault Ω está em estado canônico puro com 12 pastas + `_CANONICAL.md`. Falta a configuração inicial do Obsidian.

## Objetivo único

Criar 4 arquivos de configuração na pasta `.obsidian\` do Vault Ω alinhados à árvore canônica:

| Arquivo | Função |
|---|---|
| `app.json` | Preferências gerais (newFileFolderPath=_INBOX) |
| `core-plugins.json` | 16 plugins core habilitados |
| `community-plugins.json` | Placeholder vazio |
| `workspace.json` | Layout inicial com Files panel aberto |

## Decisões de design embutidas

| Decisão | Valor | Razão |
|---|---|---|
| `newFileFolderPath` | `_INBOX` | Alinha com árvore canônica real Ω |
| `attachmentFolderPath` | `_attachments` | Isolamento textual/binário |
| `useMarkdownLinks` | `false` | Wikilinks `[[nome]]` mais legíveis |
| `newLinkFormat` | `relative` | Vault portátil entre máquinas |
| `spellcheck` | `false` | Português jurídico confunde corretor |
| Plugins core | 16 | Graph + Backlinks + Templates + Outline essenciais |

## Plugins community (instalação manual posterior)

| Plugin | Função | Prioridade |
|---|---|---|
| Dataview | Queries SQL-like sobre frontmatter | 🔴 Alta |
| Templater | Templates com lógica dinâmica | 🔴 Alta |
| Tasks | Gestão tarefas no vault | 🟡 Média |
| Excalidraw | Diagramas de arquitetura | 🟡 Média |

## Critério de aceite

- 4 arquivos criados em `MEU-OMEGA\.obsidian\`
- Cada arquivo é JSON válido
- Founder vê painel Files com 12 pastas + `_CANONICAL.md`
- Nova nota (`Ctrl+N`) cai em `_INBOX/`

## Persistência dual

- Vault Ω: `04-OPERACAO\workflows\omega\MB-OMEGA-005-Config-Obsidian-Filesystem-v1_1-2026-0515.md`
- Vault MC: `03-GOVERNANCA\mission-briefs\omega\MB-OMEGA-005-Config-Obsidian-Filesystem-v1_1-2026-0515.md`

Nota: v1.1 introduz subpasta `\omega\` no caminho Ω. MBs anteriores (001-004) ficaram em `04-OPERACAO\workflows\` sem essa subdivisão. Migração para `\omega\` é mudança de padrão canônico desta MB; MBs anteriores permanecem onde foram colocadas.

## Próximo

→ Founder valida visualmente no Obsidian e instala 4 plugins community manualmente
→ Cofounder Ω consolida ADRs e POPs do ciclo (ADR-002, ADR-003, POP-001, POP-002)

---

**∞**
