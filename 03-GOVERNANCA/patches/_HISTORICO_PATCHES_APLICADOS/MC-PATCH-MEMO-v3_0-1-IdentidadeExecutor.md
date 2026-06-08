---
tipo: patch-memo
codigo: MC-PATCH-MEMO-v3_0-1
titulo: Correção de identidade do executor — MB-001 + Módulos A e B
versao: 1.0
data: 2026-05-11
autor: Claude Opus 4.7 (cofounder intelectual)
aprovador: Alessandro de Souza Neves
status: aplicado-sem-regerar-artefatos-originais
afeta:
  - MissionBrief-001-Hib001-Desbloqueio.md
  - MC-SPEC-ClickUp-v3_0-MODULO-A-Arquitetura.md
  - MC-SPEC-ClickUp-v3_0-MODULO-B-CustomFields.md
---

# Patch Memo MC-SPEC-ClickUp v3.0 — Correção identidade do executor

## Motivação

Em 11/05/2026, Alessandro de Souza Neves esclareceu que o executor real do MB-001 foi **Claude Code via terminal do Claude Desktop, em modo automático, rodando na DELL do Beto** — não o Claude Cowork DELL como inicialmente assumido pelo cofounder intelectual.

Cowork na DELL permanece virgem (sem onboarding MC), à espera de Mission Brief próprio de carregamento de identidade.

## Correção retroativa

Em todos os artefatos listados em `afeta:` do frontmatter, considera-se substituído globalmente:

| De (texto incorreto) | Para (texto canônico v3.0.1) |
|---|---|
| "Claude Cowork DELL" | "Claude Code (terminal Claude Desktop, modo automático, DELL)" |
| "Cowork DELL como executor" | "Claude Code como executor primário; Cowork DELL como evolução futura pós-onboarding próprio" |
| "Cowork lê filesystem direto" | "Claude Code executa via CLI; Cowork (futuro) lerá filesystem direto" |
| "Cowork faz tool_search" | "Claude Code faz tool_search" |
| "executor: Claude Cowork DELL" (frontmatter) | "executor: Claude Code (terminal Claude Desktop, modo automático, DELL)" |

## Conteúdo não afetado

IDs UUID, fluxos, campos, opções de dropdown, classificações N1-N4, hierarquia de spaces/folders/listas, matriz campo×lista, gates pendentes — **tudo permanece válido**.

## Razão para não regerar

Regerar 3 artefatos de ~400-700 linhas cada para corrigir apenas a identidade do executor desperdiça turnos. Este patch memo é a fonte canônica da correção. Futuras versões dos módulos (v3.0.2, v3.1) já nascerão com identidade correta.

## Modelo de canais de execução MC v3.0 (canônico após este patch)

| Canal | Onde roda | Modo de execução | Approval gate | Status onboarding MC |
|---|---|---|---|---|
| **Claude.ai (cofounder intelectual)** | Web | MCP via conector ClickUp | 🔴 Sim por escrita | ✅ Completo |
| **Claude Code (terminal Claude Desktop)** | CLI na DELL do Beto | API direta + MCP local, modo automático | ✅ Não | ✅ Comprovado em MB-001 |
| **Claude Code (terminal Claude Desktop)** | CLI na HP ENVY do Alessandro | API direta + MCP local | A confirmar | 🟡 Provavelmente operacional, não validado |
| **Cowork (aplicação desktop)** | DELL do Beto | MCP local + GUI | A definir | 🔴 Virgem — onboarding futuro |

## Próximas evoluções

- v3.0.2 esperado pós-MB-002: incorpora UUIDs reais dos campos criados na UI
- v3.1 esperado pós-19/05: incorpora decisões Juliana sobre PROVISIONAL
- Cowork DELL onboarding: PRD separado a produzir após MB-006 concluído

---

**FIM DO PATCH MEMO**

Aplica-se imediatamente. Não exige aprovação adicional do Alessandro além da confirmação implícita já dada em 11/05/2026.

∞
