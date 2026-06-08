# _LEIA — mc-pre-selagem (gate antes de selar no Vault)

**v0.1 PROVISIONAL · 2026-06-02 · drop zone · NÃO-INSTALADO · NÃO-SELADO**
**Gate humano: Founder. Instalação no `.claude/` batched com mc-especimen e mc-compasso-sweep (pós-resolução do conflito em CLAUDE.md).**

Automatiza o **ritual de pré-selagem** num workflow executável (molde squad-r3: script + skill + _LEIA). Dado um artefato/diff que se quer selar, roda as 3 camadas de verificação e devolve um **veredito de go/no-go** — sem selar.

> **Por que existe separado.** Cada workflow nasce do SEU método-fonte. `mc-pre-selagem` **compõe peças reais do harness** (sister-ancia + mc-lint + ritos + ADR-011), não um doc-blueprint. NÃO é `squad-r3` (compliance de política/preço), nem `mc-compasso-sweep` (curadoria de fontes), nem `mc-especimen-autoevolutivo` (motor de casos).

## Os 3 arquivos (drop zone)

| Arquivo | Papel |
|---|---|
| `mc-pre-selagem.workflow.js` | Script · 3 fases · `meta` literal + FIXTURE + delega à `sister-ancia` via `agentType` + STOP no gate |
| `SKILL-mc-pre-selagem.md` | Wrapper `/mc-pre-selagem` |
| `_LEIA-mc-pre-selagem.md` | Este arquivo |

## Como rodar + o que esperar

- **Sem args** → **fixture** (regressão da régua de selagem): alvo-A limpo → `PODE-SELAR / R1`; alvo-B com violação + fronteira OAB/LGPD → `BLOQUEADO / R3`. `regressao_fixture.veredito` deve dar **PASSOU**.
- **Com args** `{ alvo }` (caminho do artefato) → roda as 3 checagens reais e consolida.

> ⚠️ **Rode numa sessão com raiz no Vault** (p/ `sister-ancia` e `mc-lint.py` existirem). ⚠️ **Rodar é opt-in e gasta agentes.**

O motor **para no gate** e devolve (sem selar):

```
{ modo, gate, vereditos:[{alvo, veredito, rito_requerido, bloqueios, gates_pendentes, proximo_passo}],
  regressao_fixture, rastreabilidade }
```

### As 3 fases

| Fase | Faz | Camada |
|---|---|---|
| 0 · Alvo | identifica tipo · status · toca OAB/LGPD/PII? · fundacional? (Explore) | — |
| 1 · Checagens *(paralelo)* | **mc-lint** (Proibições Absolutas) · **sister-ancia** (9 eixos, via `agentType:'sister-ancia'`) · **rito/gate** (R1/R2/R3 + ADR-011 + versão) | 0 · 1 · rito |
| 2 · Veredito | consolida → PODE-SELAR / CONDICIONADO / BLOQUEADO + rito + bloqueios + gates pendentes | — |

## Régua do veredito (D > C > V lexicográfico)

- **BLOQUEADO** — hit de mc-lint (Proibição Absoluta) OU achado 🔴 da sister-ancia OU D>C>V invertido.
- **CONDICIONADO** — sem 🔴, mas rito **R2/R3 pendente** OU achado 🟡 OU problema de gate/versão (selando sem "aprovado para vault", status incoerente, falta banner de supersedência em selado).
- **PODE-SELAR** — mc-lint limpo + sem 🔴/🟡 + rito **R1** satisfeito + gate/versão ok.
- **Catraca dura R3:** `toca_oab_lgpd_pii ⇒` no máximo CONDICIONADO até parecer da Dra. Juliana.

## Limites (fail-closed)

- **NÃO sela, NÃO escreve no Vault, NÃO conserta** — só diagnostica e barra. Selar = Code TALÃO sob "aprovado para vault" (ADR-011).
- **Na dúvida, BLOQUEIA** (falso-negativo de selagem é o erro mais caro).
- **Proof-First:** achado com fonte:linha; sem lastro → `[GATE]`.

## TABELA DE LASTRO (peças reais — `arquivo`)

| Peça reusada | Fonte |
|---|---|
| Revisão adversarial 9 eixos + severidade 🔴/🟡/🔵 + rodapé Anciã | `.claude/agents/sister-ancia.md` §3-§4 (:35-72) |
| Proibições Absolutas (12+ regras, modos warn/block) | `.claude/hooks/mc-lint.py` |
| Ritos R1 (operacional) / R2 (fundacional: Founder+C3.1+Anciã) / R3 (OAB/LGPD/ANPD → Dra. Juliana) | `CLAUDE.md` §Instâncias Cognitivas & Ritos |
| ADR-011 — Cérebro 2 (Vault): escrita só sob "aprovado para vault" | `CLAUDE.md` §Arquitetura 3 Cérebros |
| Disciplina gate/versão (inline operacional · banner supersedência em selado) | convenção MC ([[project_meu_cumpadre]]) |

> ⚠️ **Proof-First — ressalva honesta:** `CLAUDE.md` está em conflito de merge não resolvido (v2.2 ↔ v3.0); as citações de §Ritos/§3-Cérebros apontam a seção (não linha fixa) porque a numeração está instável até o conflito ser resolvido. A `sister-ancia.md` e o comportamento do `mc-lint.py` foram lidos diretamente.

---

**Hierarquia:** Dignidade > Compliance > Viabilidade · **Proof-First** · **fail-closed**
**Status:** v0.1 PROVISIONAL · drop zone · gate humano (Founder; instalação batched pós-conflito CLAUDE.md)
∞
