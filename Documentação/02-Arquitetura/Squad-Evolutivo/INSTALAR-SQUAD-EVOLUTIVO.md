# INSTALAR — Squad Evolutivo (guia de instalação em `.claude/`)

**v0.1 · 2026-06-04 · Cérebro 1 · GATED — NÃO executar antes de fechar o §0**
**Pré-selagem rodada → VEREDITO `CONDICIONADO` · rito R2.** Instalar = ato do Founder.

> Este guia leva o squad de **Cérebro 1** (drop zone, `Documentação/.../Squad-Evolutivo/`) para o **harness** (`.claude/agents/`, `.claude/skills/`, `.claude/workflows/`) + o **Registro de Unidades Agênticas (RUA)**. Instalar **cristaliza o texto como está** — por isso o §0 vem antes.

---

## §0 · GATE (resolver ANTES de copiar)

A pré-selagem (mc-lint ✅ + sister-ancia + rito) deu **CONDICIONADO**. Antes de qualquer cópia:

- ☑ ~~🟡 Colisão "SoR"~~ — **RESOLVIDO (opção a, Founder).** O termo foi renomeado p/ **Method-of-Record (MoR)** no disrupter (frontmatter + corpo linhas 51/59 + `rua`) e no README — remove o homônimo com o `MC-SOR-MemoriaSystemOfRecord-v0_1` canônico (System of Record *do cidadão*, PII/CNIS, sob saneamento R3). O pin "de-identificado · nunca PII · NÃO é o SoR do cidadão" agora está **no corpo**, não só na frontmatter.
- ☐ **R2 — cunhagem fundacional** *(único item aberto do gate).* Criar 4 agentes + workflow + skill é fundacional → rito **R2** (Founder + C3.1 + Sister Anciã; a Anciã já se manifestou na pré-selagem). Founder sela.
- ☑ ~~🟡 `_LEIA` dessincronizado (v1.0→v1.1)~~ — **resolvido**.
- ☑ ~~🔵 ESTADO descrevia `rua` incompletos~~ — **corrigido** (rua completos, `be11310`).

## §1 · Layout de path-references — ✅ RESOLVIDO (opção A)

Implementada a **opção (A)**: `memory/`, `specs/SINTESE_SCHEMA.md` e `CONTRATO-memory.md` **ficam em Cérebro 1**; os agentes/workflow/skill já tiveram os refs reescritos de `../` para **repo-relativo** (`Documentação/02-Arquitetura/Squad-Evolutivo/...`) — que resolvem da raiz do repo, **em Cérebro 1 E depois de copiados p/ `.claude/`**.

> Verificado: **zero `../` quebrado** nos arquivos do squad · `MEMORY_DIR` repo-relativo · sintaxe + fixture OK. `memory/` (store de runtime) permanece versionado no Cérebro 1, **fora de `.claude/`**.

---

## §2 · Cópia (origem → destino) — APÓS §0/§1

| Origem (Cérebro 1) | Destino (harness) |
|---|---|
| `agents/arquiteto-invisivel.md` | `.claude/agents/arquiteto-invisivel.md` |
| `agents/guardiao-grimorio.md` | `.claude/agents/guardiao-grimorio.md` |
| `agents/disrupter-escala-zilda.md` | `.claude/agents/disrupter-escala-zilda.md` |
| `agents/sintetizador-auxiliar.md` | `.claude/agents/sintetizador-auxiliar.md` |
| `skills/sintetizador-evolutivo.md` | `.claude/skills/sintetizador-evolutivo/SKILL.md` |
| `workflows/sintetizador-evolutivo.workflow.js` | `.claude/workflows/sintetizador-evolutivo.workflow.js` |
| `workflows/_LEIA-sintetizador-evolutivo.md` | `.claude/workflows/_LEIA-sintetizador-evolutivo.md` |

```bash
# rodar da raiz do repo, APÓS o §0/§1
S="Documentação/02-Arquitetura/Squad-Evolutivo"
cp "$S"/agents/*.md .claude/agents/
mkdir -p .claude/skills/sintetizador-evolutivo
cp "$S"/skills/sintetizador-evolutivo.md .claude/skills/sintetizador-evolutivo/SKILL.md
cp "$S"/workflows/sintetizador-evolutivo.workflow.js .claude/workflows/
cp "$S"/workflows/_LEIA-sintetizador-evolutivo.md .claude/workflows/
# refs já são repo-relativas (§1 ✅ resolvido) — cópia direta, sem reescrever paths
```

## §3 · Regenerar o Registro de Unidades Agênticas (RUA)

```bash
python3 .claude/registro/gerar-registro.py
```
> O RUA é **gerado, não editado à mão**. Os 5 blocos `rua` já passam COMPLETOS (verificado na pré-selagem) — devem aparecer como instrumentados, sem colisão de id.

## §4 · Verificação pós-instalação

- ☐ `.claude/agents/` lista os 4 agentes; `.claude/skills/sintetizador-evolutivo/SKILL.md` existe; workflow + _LEIA em `.claude/workflows/`.
- ☐ RUA mostra os 5 (4 agentes + skill) como instrumentados (não "incompletas").
- ☐ `python3 .claude/hooks/mc-lint.py --all` sem novos hits.
- ☐ As refs de caminho (§1) resolvem (nenhum `../memory` quebrado).

## §5 · Teste (rodada real)

```
/sintetizador-evolutivo  { tema: "...", data: "2026-06-XX", instalado: true }
```
Esperado: Fase 0 lê a `memory/` real (Explore) → Fases 1-3 delegam aos agentes instalados → Teste F → o Curador grava o attempt (§3). Sem `instalado`, roda o fixture.

## §6 · Rollback

`git revert` dos commits de cópia + remover os arquivos de `.claude/{agents,skills,workflows}/` + regenerar o RUA. Como nada foi selado no Vault, o rollback é limpo.

## §7 · Selagem

Pós-instalação e teste verde, o Founder decide a **selagem** (ADR-011 · "aprovado para vault" se algo migrar p/ Cérebro 2). A catraca R3 (Dra. Juliana) entra se o Lote 4 (handoff R3) tocar a fronteira regulatória. *(O item SoR do §0 já foi fechado pela renomeação → MoR.)*

---

**Hierarquia:** Dignidade > Compliance > Viabilidade · **Proof-First**
**Status:** v0.1 · GATED (CONDICIONADO · resolver §0/§1) · gate humano (Founder) · ∞
