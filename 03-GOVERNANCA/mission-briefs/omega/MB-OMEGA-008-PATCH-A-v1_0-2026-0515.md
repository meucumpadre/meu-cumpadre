---
tipo: MISSION-BRIEF-PATCH
codigo: MB-OMEGA-008-PATCH-A
descritor: Eliminacao-Impostora-Reaponta-Registry
versao: 1.0
data: 2026-05-15
autor: Claude Opus 4.7 (cofounder Ω) × Founder (Alessandro)
modo: ESCRITA AUTORIZADA — exclusão controlada + edição registry Obsidian
maquina-alvo: Beto (DELL — Claude Code CLI)
ambiente: Windows PowerShell
duracao-estimada: 5 minutos
status: PRONTO PARA COLAR
dependencias: MB-005 v1.1 + MB-007-DIAG executadas
proximo: Founder reabre Obsidian + validação visual final
persistencia-dual: 04-OPERACAO\workflows\omega (Ω) + 03-GOVERNANCA\mission-briefs\omega (MC)
classificacao: OPERACIONAL — uso institucional
---

# MB-OMEGA-008-PATCH-A — ELIMINAÇÃO CIRÚRGICA DA IMPOSTORA + REAPONTA REGISTRY

## Contexto

MB-007-DIAG confirmou:
1. Impostora física `MEU-OMEGA\MEU-OMEGA\` (subpasta aninhada com `Bem-vindo.md` 195B + `.obsidian\` órfã)
2. Registry corrompido: `obsidian.json` entry `d6a8c1b9fd9a1d92` apontando para impostora com `open:true`

Esta PATCH corrige ambas em sequência atômica com backup auditável.

## Pré-requisitos

- MB-005 v1.1 ✅
- MB-007-DIAG ✅
- Obsidian COMPLETAMENTE FECHADO (validado em Fase 0 — aborta se rodando)
- Drive Desktop ativo

## Tarefa — 4 fases atômicas

**Fase 0:** Validação pré-execução (Obsidian fechado, canônico OK, 4 JSONs presentes).
**Fase 1:** Backup `.zip` da impostora em `07 ARQUIVO\versoes-antigas\`.
**Fase 2:** Remove-Item local + validação via `Get-Item` try/catch.
**Fase 3:** Edit registry — substitui path da entry impostora pelo canônico. Backup do registry em `%TEMP%` antes do edit. Validação JSON pós-save.
**Fase 4:** Listing canônico + dump registry final.

## Critério de aceite

- Backup `.zip` da impostora preservado
- Impostora removida do filesystem local
- Registry aponta entry afetada para canônico
- Founder reabre Obsidian e vê 12 pastas + `_CANONICAL.md`

## Contingências

| Falha | Ação |
|---|---|
| Obsidian rodando | Abort gracioso (Fase 0) |
| Remove-Item access denied | Aguardar 30s, reexecutar |
| Impostora re-materializa cloud-side | Founder deleta via drive.google.com (lição MB-004-PATCH) |
| Entry não encontrada no registry | Reportar e ajuste manual |
| JSON corrompido pós-save | Backup automático restaurado |
| Obsidian abre na impostora de novo | Cloud-side delete obrigatório |

## Observação cloud-side

Pela lição da MB-004-PATCH, Founder deve verificar `drive.google.com` se a impostora aparece em `_OBSIDIAN\MEU-OMEGA\MEU-OMEGA\` após o delete local — se sim, deletar cloud-side.

## Persistência dual

- Vault Ω: `04-OPERACAO\workflows\omega\MB-OMEGA-008-PATCH-A-v1_0-2026-0515.md`
- Vault MC: `03-GOVERNANCA\mission-briefs\omega\MB-OMEGA-008-PATCH-A-v1_0-2026-0515.md`

## Próximo

→ Founder reabre Obsidian no canônico
→ Cofounder Ω consolida ADRs/POPs do ciclo

---

**∞**
