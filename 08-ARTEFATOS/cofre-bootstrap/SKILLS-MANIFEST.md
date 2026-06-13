# Manifesto de Skills do Kit — adaptação por cofre

As skills de doutrina do MC foram **copiadas** pro kit (`template/.claude/skills/`)
e instalam junto com o harness. **Mas elas carregam identidade MC.** Esta tabela
diz o que é reutilizável quase direto vs. o que precisa ser **reescrito** por cofre.

> Regra: 🟢 ajuste leve · 🔴 reescrever (referencia produto/jurídico/jornada MC).
> Antes de operar em `block-mode`, revise as 🔴 — senão o cofre herda doutrina alheia.

## 🟢 Transferível como padrão (método/governança)

| Skill | O que é | Ajuste típico |
|---|---|---|
| `mc-prompt` | Forja de metaprompts | Trocar DNA MC (D>C>V, Zilda-STF) pelo do cofre |
| `squad-r2` | Rito R2 (cunhagem fundacional) | Trocar trio (C3.1/Anciã) pelos papéis do cofre |
| `mc-pre-selagem` | Gate pré-selagem | Apontar p/ `cofre-lint` + ritos do cofre |
| `mc-dossie-proof-first` | Dossiê Proof-First (lado A + contraprova + hash) | Quase direto |
| `mc-strategic-intelligence` | Research → NotebookLM → Brief | Trocar verticais Skybridge / Router-Ethics |
| `mc-compasso-sweep` | Curadoria de fontes (régua <5%) | Quase direto |
| `mc-especimen-autoevolutivo` | Motor espécimen #45/#46/#47 | Trocar golden fixture (Hib001 é MC) |
| `orquestracao` | Modo de planejamento | Quase direto |
| `diario` | Diário de sessão | Quase direto |
| `auditoria-coletanea` | Auditoria de coletânea | Quase direto |
| `checklist-docs` | Checklist documental | Quase direto |

## 🔴 MC-específico (reescrever por cofre)

| Skill | Por que é MC | Ação |
|---|---|---|
| `squad-r3` | Parecer OAB/compliance — Dra. Juliana, Firewall OAB, Φ₀ | Reescrever p/ o domínio de compliance do cofre (ou remover) |
| `novo-cliente` | Onboarding de cidadão previdenciário | Reescrever p/ o cliente/fluxo do cofre (ou remover) |
| `status-caso` | Jornada E0-E7 do MC | Reescrever p/ a jornada do cofre (ou remover) |
| `watchdog` | Monitoramento E5 / INSS | Reescrever (ou remover) |
| `handoff-juridico` | Handoff p/ advogada parceira | Reescrever p/ o handoff do cofre (ou remover) |

## Agentes (`template/.claude/agents/`)

| Agente | Classe | Ação |
|---|---|---|
| `sister-ancia` | 🟢 padrão (revisor adversarial) | Ajustar a doutrina que ela referencia |
| `mc-grok-context-engineer` | 🔴 MC (projeto MC / Grok Build) | Reescrever ou remover |

## Removida (não replicada)

| Skill | Motivo |
|---|---|
| `meu-cumpadre-orquestrador-mestre` | ⚠️ SUPERSEDED (2026-06-03) — não se propaga artefato aposentado a cofre novo. |
