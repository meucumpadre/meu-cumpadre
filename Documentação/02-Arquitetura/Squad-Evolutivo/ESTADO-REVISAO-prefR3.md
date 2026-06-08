# ESTADO — Revisão pré-R3 · Squad Evolutivo

**Snapshot oficial de revisão · 2026-06-04 · Cérebro 1 (mesa de trabalho) · PROVISIONAL · NÃO-SELADO**
**Propósito:** consolidar o estado do Squad Evolutivo antes de decidir sobre o **Lote 4 (handoff R3)**. Gerado a pedido do Founder.

> Snapshot do estado em `commit 78ee196`. Não substitui as fontes da verdade (workflow, `SINTESE_SCHEMA.md`, `CONTRATO-memory.md`, specs dos agentes) — é um mapa de revisão.
>
> **⚠️ Atualizado pós-snapshot (lote de Prontidão `be11310` + gate de instalação):**
> - Os blocos `rua` dos 4 agentes foram **COMPLETADOS** (21 campos, passam no gerador, sem colisão de id). A §1/§3/§4 abaixo que os descreve como "sem rua"/"incompletos" é do snapshot e está **superada**.
> - `_LEIA` sincronizado p/ **v1.1** · skill + README reconciliados.
> - **Pré-selagem rodada (mc-lint + sister-ancia + rito) → VEREDITO `CONDICIONADO` · rito R2.** Sem 🔴. **Resolvidos:** SoR→**MoR** (colisão removida) · path-references **repo-relativas** · `_LEIA` v1.1. **Pendente antes de copiar p/ `.claude/`: só o R2** (cunhagem fundacional · Founder sela). Detalhe em `INSTALAR-SQUAD-EVOLUTIVO.md`.

---

## 1 · Status dos arquivos principais

| Arquivo | Versão | Linhas | Estado |
|---|---|---|---|
| `workflows/sintetizador-evolutivo.workflow.js` | **v0.4** | 327 | ✅ Executável · Lotes 1-3 · fixture PASSOU (loop + divergência) · sintaxe validada · **NÃO-INSTALADO** |
| `workflows/_LEIA-…md` | **v0.4** | 101 | ✅ Sincronizado com o workflow |
| `specs/SINTESE_SCHEMA.md` | **v1.1** | 85 | ✅ Shape validado (pontos 2/4) · espelha o workflow |
| `memory/CONTRATO-memory.md` | **v0.3** | 60 | ✅ Validado pelo Founder |
| `agents/guardiao-grimorio.md` | canônico | 35 | ✅ Curador + catraca leve + escala R3 · `rua` light |
| `agents/arquiteto-invisivel.md` | canônico | 21 | ✅ Guardião do SDD + restrição de escrita · **sem bloco `rua`** |
| `agents/disrupter-escala-zilda.md` | canônico | — | ✅ Lente + Flywheel/**MoR** + Zilda · `rua` completo · pin de-identificado fechado |
| `agents/sintetizador-auxiliar.md` | canônico | 30 | ✅ Auxiliar + restrição de escrita · `rua` light |
| `README-SQUAD-EVOLUTIVO.md` | v0.1 | 96 | ⚠️ Parcialmente stale (premissa "inferida" + loop antigo) |
| `skills/sintetizador-evolutivo.md` | v0.1 | 92 | ⚠️ Stale — ainda descreve "6 fases"/arquitetura antiga |
| `memory/{attempts,notes,skills}/.gitkeep` | — | 4×3 | ✅ Pastas versionadas (vazias) |

## 2 · O que cada lote entregou

| Lote | Entrega |
|---|---|
| **Fundação** | Scaffold · 4 agentes canônicos (Founder) · Contrato Memory v0.3 · guardião rebalanceado (Curador) · fecho de escopo de escrita |
| **Lote 1** | Fase 0 **real** (leitura read-only da `memory/` via Explore) · `data` via `args.data` · redação §6 (motor invoca o Curador, não grava) · migração p/ idioma executável (`phase/agent/return`) |
| **Lote 2** | Teste F básico (minuta/veto) · registro de attempt (§3) · promoção note→skill (§4) |
| **Lote 3** | Fases 1-3 com **delegação real** (arquiteto→disrupter→guardião-catraca→auxiliar → `sintese`) · `SINTESE_SCHEMA` · **Decisão 4** (fonte+prova obrigatórios; lacunas bloqueiam validado) |
| **Pós-Lote 3** | Pontos 2 (Sintetizador decide a dignidade, pode divergir) e 4 (Curador destila fonte/prova) · `SINTESE_SCHEMA` v1.1 · **regressão de divergência permanente** |

## 3 · Pendente / TODO

- ☐ **Lote 4 — handoff R3 real** (hoje só o flag `toca_compliance_pesado`; falta o roteamento p/ a Dra. Juliana).
- ☐ **Fases 1-3 / Curador só rodam pós-instalação** (`args.instalado=true` + agentes em `.claude/agents/`). Hoje: fixture + `args.sintese` exercitam.
- ☐ **`skill` wrapper** — sync p/ v0.4 *(em execução no lote de Prontidão)*.
- ☐ **README** — reconciliação ampla (premissa "inferida" + loop antigo) *(em execução no lote de Prontidão)*.
- ☐ **Blocos `rua`** dos 4 agentes — incompletos p/ o gerador do Registro *(em execução no lote de Prontidão)*.
- ☐ **Selagem** — nada selado; tudo em Cérebro 1 (drop zone).

## 4 · Pontos de atenção antes do R3

1. 🟠 **Decisão estratégica: instalar antes ou depois do R3?** O R3 (Lote 4) é compliance, mas o squad é **NÃO-INSTALADO** — o handoff R3 ficaria simulado/gated até a instalação (`.claude/` + RUA + pré-selagem + sister-ancia).
2. 🟠 **`rua` blocks** — na instalação, os 4 agentes cairiam como "incompletas/não-instrumentadas" (fail-closed, fora do registro canônico). Enriquecer **antes** de instalar.
3. 🟡 **Docs stale (skill + README)** — não bloqueiam o R3, mas são contradição interna viva.
4. ☑ **Flywheel/MoR do disrupter** — RESOLVIDO: renomeado SoR→**MoR** (remove o homônimo com o `MC-SOR` canônico/PII) + pin de-identificado no corpo.
5. 🟢 **Sólido:** Contrato v0.3 · `SINTESE_SCHEMA` v1.1 · pipeline completo (Fase 0→Fases 1-3→Teste F→Curador §3/§4) · Decisão 4 · regressões passando · §6/§7 honrados · escopos de escrita fechados · sintaxe validada.

## Leitura de síntese

O **núcleo lógico está maduro e testado**. O que separa do "pronto pra valer" não é o R3 em si — é a **prontidão de instalação** (rua blocks + sync de docs + gate `.claude/`). Sequência sugerida: **lote de Prontidão** (sync skill + README + enriquecer `rua`) → decidir **R3 + instalação** juntos.

---
**Hierarquia:** Dignidade > Compliance > Viabilidade · **Proof-First** · Zona Verde
**Status:** snapshot de revisão · `commit 78ee196` · PROVISIONAL · gate humano (Founder) · ∞
