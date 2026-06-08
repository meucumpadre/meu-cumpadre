# MC-SPEC-Cowork-v1_0-2026-0428
> Spec de configuração do Claude Cowork no Mac Mini M4
> Status: AGUARDANDO HARDWARE
> Pré-requisitos: Frentes 1-5 concluídas ✅

---

## Contexto

Claude Cowork substitui Claude.ai como cérebro estratégico do Alessandro
quando o Mac Mini M4 chegar. Acessa o vault Obsidian completo (igual ao
Claude Code). Usuário único: Alessandro (Founder/CEO).

Diferença fundamental:
- Claude.ai (atual) = sem acesso a arquivos locais
- Claude Cowork (futuro) = vault completo + skills + contexto persistente

---

## Hardware alvo

| Item | Spec |
|---|---|
| Máquina | Mac Mini M4 |
| SO | macOS (versão a confirmar) |
| Vault path (Mac) | ~/Library/CloudStorage/GoogleDrive/... ou Mount point a confirmar |
| HP ENVY | Continua como máquina de custódia Gov.br — não substituído |

---

## Vault — Configuração de Acesso

**Acesso:** Completo (read + write), igual ao Claude Code no HP ENVY.

**Exceções via .claudeignore (já configurado):**
- `_PESSOAL/` — invisível
- `.obsidian/` — invisível
- `.clickup-sync/` — invisível
- `*.pdf`, `*.png`, `*.jpg` — não indexados

**Vault path no Mac:** a confirmar após montar Google Drive no macOS.
Atualizar CLAUDE.md do vault com o path Mac quando disponível.

---

## CLAUDE.md do Cowork

O Cowork usa o MESMO `CLAUDE.md` da raiz do vault (v2.0, já atualizado).
**Não criar CLAUDE.md separado para o Cowork.**

Razão: vault é fonte única da verdade. Cowork herda automaticamente
qualquer atualização feita no CLAUDE.md via Claude Code no HP ENVY.

---

## Skills — Herança completa

O Cowork herda todas as skills em `.claude/skills/`:

| Skill | Uso esperado no Cowork |
|---|---|
| `meu-cumpadre-orquestrador-mestre/` | Principal — decisões estratégicas |
| `orquestracao/` | Coordenação de fluxos |
| `novo-cliente/` | Triagem E0-E1 |
| `status-caso/` | Briefing rápido de caso |
| `checklist-docs/` | Verificação documental E3 |
| `handoff-juridico/` | Handoff para Dra. Juliana |
| `diario/` | Registro de decisões |
| `watchdog/` | Monitoramento E5 |
| `auditoria-coletanea/` | Auditoria de artefatos |

**Nenhuma skill nova para criar** — vault já está preparado.

---

## Diferenças operacionais vs Claude.ai

| Dimensão | Claude.ai (atual) | Claude Cowork (futuro) |
|---|---|---|
| Acesso a arquivos | Project Knowledge apenas | Vault completo em tempo real |
| Contexto entre sessões | Memory (parcial) | CLAUDE.md + vault sempre frescos |
| Execução de código | Não | Sim (bash, PowerShell via Mac) |
| Atualização de docs | Copia/cola manual | Edita direto no vault |
| Skills | Via Project Knowledge | `.claude/skills/` nativo |
| Latência | API remota | Local — mais rápido |

---

## O que MIGRA do Claude.ai para o Cowork

| O que | Como migrar |
|---|---|
| Decisões estratégicas (ADRs) | Já no vault — Cowork acessa direto |
| Project Knowledge | Já no vault — sem ação adicional |
| Skills | Já em `.claude/skills/` — sem ação |
| Histórico de conversas | Não migra — recomeça com CLAUDE.md v2.0 |
| Memory do Claude.ai | Consultar antes de migrar — extrair o que for relevante para o vault |

---

## O que NÃO migra

- Claude.ai continua ativo para sessões em mobile (iOS/Android)
- Claude.ai continua para sessões de pesquisa com web search ativo
- HP ENVY continua como máquina de custódia Gov.br (Bitwarden)

---

## Checklist de instalação (executar quando Mac Mini chegar)

### Passo 1 — Instalar Claude Cowork
- [ ] Baixar Claude Cowork no Mac Mini M4
- [ ] Autenticar com conta Max plan (mesma do HP ENVY)

### Passo 2 — Montar vault
- [ ] Instalar Google Drive for Desktop no Mac
- [ ] Sincronizar `0 0 MEU CUMPADRE` completo
- [ ] Confirmar path real do vault no macOS
- [ ] Atualizar linha de path no CLAUDE.md (seção Fontes Canônicas)

### Passo 3 — Verificar herança de skills
- [ ] Abrir Cowork apontando para raiz do vault
- [ ] Confirmar que `.claude/skills/` é reconhecido
- [ ] Testar skill `meu-cumpadre-orquestrador-mestre` com prompt simples

### Passo 4 — Teste de sanidade
- [ ] Pedir ao Cowork: "Qual é a precificação atual do MC?"
- [ ] Resposta esperada: Φ₁ R$2.200 / Φ₁c R$1.500 (PROVISIONAL)
- [ ] Se errar → CLAUDE.md não está sendo lido → verificar path

### Passo 5 — Validar com Alessandro
- [ ] 1 sessão estratégica completa no Cowork
- [ ] Comparar qualidade vs Claude.ai
- [ ] Selar migração ou ajustar

---

## Riscos

| Risco | Mitigação |
|---|---|
| Path do vault diferente no macOS | Confirmar mount point antes de qualquer uso |
| Google Drive não sincronizar arquivos grandes | Verificar configuração "disponível offline" |
| Skills não reconhecidas no Cowork Mac | Testar imediatamente no Passo 3 |
| Daemon ClickUp↔Obsidian inativo no Mac | Rodar `start-sync.bat` equivalente no macOS |
| Claude.ai e Cowork com CLAUDE.md desincronizados | Vault é fonte única — nunca editar CLAUDE.md direto no Cowork |

---

## Dependências pendentes

- [ ] Mac Mini M4 (hardware) — data de chegada: a confirmar
- [ ] Extrair Memory relevante do Claude.ai antes de migrar
- [ ] Confirmar path vault no macOS após instalação Drive

---

*MC-SPEC-Cowork v1.0 | 2026-04-28*
*Autor: Alessandro × Claude Opus 4.7*
*Status: AGUARDANDO HARDWARE*
*Próxima ação: executar checklist quando Mac Mini M4 chegar*
