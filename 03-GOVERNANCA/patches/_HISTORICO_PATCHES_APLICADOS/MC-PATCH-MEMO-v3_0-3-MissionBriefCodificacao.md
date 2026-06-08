---
tipo: patch-memo
codigo: MC-PATCH-MEMO-v3_0-3
titulo: Codificação formal "Mission Brief" como artefato canônico MC
versao: 1.0
data: 2026-05-11
autor: Claude Opus 4.7 (cofounder intelectual)
aprovador: Alessandro de Souza Neves (Founder/CEO)
status: aplicado-decisão-founder-confirmada
afeta:
  - Vocabulário institucional MC (novo registro)
  - MC-SPEC-ClickUp-v3_0-MODULO-A-Arquitetura.md (§7 checklist)
  - MC-SPEC-ClickUp-v3_0-MODULO-D-POP-Beto-Operacao-v3_0_1.md (§10.2 contexto)
  - MB-001, MB-API-TEST-001, MB-004, MB-005 (artefatos já produzidos, retroativamente canônicos)
relacionado:
  - MC-PATCH-MEMO-v3_0-1-IdentidadeExecutor.md
  - MC-PATCH-MEMO-v3_0-2-DuploPapelMelo.md
---

# Patch Memo MC-SPEC v3.0-3 — Mission Brief como Artefato Canônico MC

## 1. DECISÃO FOUNDER

Em 11/05/2026, Alessandro de Souza Neves codificou oficialmente o termo **"Mission Brief"** como artefato canônico do ecossistema Meu Cumpadre — formalizando uma convenção que veio sendo usada pelo cofounder intelectual desde MB-001 sem aprovação prévia explícita.

A decisão resolve a tensão levantada pelo próprio cofounder intelectual quando questionado se o termo era vocabulário técnico Claude ou invenção local.

---

## 2. DEFINIÇÃO CANÔNICA

### 2.1 O que é um Mission Brief

**Mission Brief (MB)** = artefato canônico MC de handoff entre o cofounder intelectual (Claude.ai, web) e qualquer executor operacional (Claude Code via terminal Claude Desktop modo automático, Cowork futuro, ou outro). O MB carrega contexto suficiente para que um executor virgem do contexto MC possa executar uma missão específica de forma autônoma.

### 2.2 Características obrigatórias

Todo Mission Brief deve conter, na ordem:

| § | Seção | Função |
|---|---|---|
| Frontmatter YAML | metadata canônica | tipo, código, título, versão, data, emissor, executor, aprovador, duração, reversibilidade, gates, relacionados |
| §0 | Ativação de identidade | quem é o executor, hierarquia D>C>V, regras invioláveis específicas da missão |
| §1 | Contexto | por que esta missão existe, o que precede, estado atual |
| §2 | Tarefas a executar | numeradas, ordem estrita, parâmetros canônicos (IDs UUID, valores exatos) |
| §3 | Critério de sucesso + formato do reporte | como o executor sabe que terminou, como reporta de volta |
| §4 | Regras invioláveis | o que NÃO fazer (proibições específicas desta missão) |
| §5 | (Opcional) Se algo inesperado | tratamento de falhas |
| §6+ | (Opcional) Anexos | conteúdo a copiar integralmente, referências, tools usadas |

### 2.3 Convenção de nomenclatura

| Elemento | Padrão | Exemplo |
|---|---|---|
| Sigla | `MB-{NNN}` 3 dígitos com zero à esquerda | MB-001, MB-042, MB-127 |
| Filename | `MissionBrief-{NNN}-{TituloKebabOuCamel}.md` | `MissionBrief-001-Hib001-Desbloqueio.md` |
| Sequência | Workspace-wide, sem reset por categoria | MB-001 (case) → MB-002 (infra) → MB-003 (...) |
| Sub-tipo opcional | Pode adicionar tipo no meio | `MB-API-TEST-001`, `MB-AUDIT-001` (variantes que indicam família, sem quebrar sequência principal) |

### 2.4 Princípio da autocontenção

Um Mission Brief bem-feito deve funcionar **mesmo se o executor não conhece nada do MC**. Razões:

1. **Onboarding zero** — Cowork virgem ou Claude Code recém-instalado pode executar
2. **Auditoria temporal** — alguém lendo o MB em 2027 entende o contexto sem precisar do histórico do chat
3. **Portabilidade** — pode ser executado fora do contexto Claude.ai (humano lendo, outro Claude, agente externo)

Implicação prática: IDs UUID **não** são "veja no histórico", são **incluídos no MB**.

---

## 3. INVENTÁRIO DE MISSION BRIEFS PRODUZIDOS ATÉ 11/05/2026

Estes 4 Mission Briefs já existem e ficam **retroativamente canônicos** sob esta codificação:

| MB | Título | Status | Executor | Data |
|---|---|---|---|---|
| MB-001 | Hib001 Desbloqueio Operacional | ✅ Executado, reportado sucesso | Claude Code DELL | 10/05/2026 |
| MB-API-TEST-001 | Descoberta de endpoint API ClickUp para custom fields | ⏳ Pausado (token pendente) | Claude Code DELL | 11/05/2026 |
| MB-004 | Marketplace Setup v3.0.1 (rename Lohane + 3 cards advogadas) | 🚀 Pronto para execução | Claude Code DELL | 11/05/2026 |
| MB-005 | Auditoria Estrutural Read-Only | 🚀 Pronto para execução | Claude Code DELL | 11/05/2026 |

**Observação:** MB-002 e MB-003 estão **reservados** para missões dependentes do reporte de MB-API-TEST-001 (criação dos 12 custom fields + populamento de Hib001 e CAD001). MB-006 está reservado para decisões de arquivamento pós-reporte MB-005.

---

## 4. PRINCÍPIO DO VOCABULÁRIO INSTITUCIONAL (NOVO)

Como aprendizado derivado deste patch, fica codificado no DNA institucional do cofounder intelectual:

> **Princípio do Vocabulário Institucional:** Antes de cunhar termo novo no ecossistema MC (produto, ritual, métrica, papel, artefato, processo), Claude apresenta a opção como sugestão a calibrar — nunca como fato consumado. Toda nomenclatura nova passa por validação founder antes de virar canônica.

**Aplicação retroativa:** termos já cunhados sem essa validação prévia (Mission Brief, Patch Memo, Gates X-Y, Princípio do Inventário de Caminhos) ficam **validados retroativamente** ou são chamados para revisão founder.

**Lista de termos cunhados pelo cofounder intelectual a serem auditados:**
- ✅ "Mission Brief" — codificado neste patch (v3.0-3)
- 🟡 "Patch Memo" — convenção de versionamento, segue padrão semver, considera-se aceito por uso (≥3 instâncias)
- 🟡 "GATE-X-Y" (GATE-JULIANA-19MAI, GATE-SAGICAD, GATE-COMERCIAL, GATE-IGOR, GATE-MELO-CONTRATO) — convenção de marcador de pendência, aceita por uso
- 🟡 "Princípio do Inventário de Caminhos" — princípio meta sugerido, aguarda registro formal
- 🟡 "Princípio do Vocabulário Institucional" — este princípio em si, registrado aqui pela primeira vez

---

## 5. APLICAÇÃO PRÁTICA EM ARTEFATOS DA SPEC v3.0

### 5.1 Módulo A §7 — checklist executável de MBs

Permanece referenciando MB-001 até MB-007 (já mencionados). Sem mudança estrutural — só ganha referência canônica nesta patch memo.

### 5.2 Módulo D §10.2 — contexto de papel ativo

Sem impacto. Termo "Mission Brief" não aparece neste módulo.

### 5.3 Módulos B e C — futuras revisões

Quando módulos B (v3.0.1 pós-MB-002) e C (v3.0.1 pós-patch-A5) forem revisados, devem usar "Mission Brief" como termo canônico ao mencionar handoffs de execução.

---

## 6. POSICIONAMENTO INSTITUCIONAL DO TERMO

O termo "Mission Brief" entra no vocabulário MC ao lado de:

| Vocabulário MC canônico | Origem |
|---|---|
| Crisálida Z3 | Decisão founder |
| Φ₀, Φ₁, Φ₃, Φ₄, Ψ₁, Ψ₂, Ψ₃, Ψ₄ | Decisão founder (ADR-007) |
| Hook 0, Hook 1b | Decisão arquitetural (Router-Ethics) |
| Router-Ethics 11.0 (140 nós) | Decisão founder |
| CP-MC (CP-3/CP-5/CP-7) | Decisão founder |
| Inversão Cósmica | Decisão founder |
| Teste Zilda-STF | Decisão founder |
| Selo Diamante | Decisão founder |
| IVCAD-MC | Decisão arquitetural |
| **Mission Brief (MB-NNN)** | **Decisão founder 11/05/2026 (este patch)** |

---

## 7. EFEITO RETROATIVO

Todas as menções a "Mission Brief" e "MB-XXX" em artefatos produzidos antes de 11/05/2026 ficam **canonicamente válidas** sob esta codificação, sem necessidade de regerar artefatos. Patch memo serve de fonte canônica da definição.

---

## 8. CONTROLE DE VERSÃO

- **v3.0-3** — 2026-05-11 — Codificação formal "Mission Brief" como artefato canônico MC + Princípio do Vocabulário Institucional

---

## 9. PRÓXIMAS EVOLUÇÕES

| Item | Status |
|---|---|
| Template canônico de Mission Brief (esqueleto reutilizável) | 🔜 Produzir se houver demanda — atualmente cada MB é escrito do zero adaptando MB-001 como referência |
| Inclusão do termo no CLAUDE.md do vault | 🔜 Próxima revisão CLAUDE.md (Claude Code DELL executa) |
| Inclusão em onboarding Cowork DELL | 🔜 Quando produzir PRD Cowork Onboarding |
| Registro no Glossário MC (se existir) | 🔜 A confirmar se existe glossário canônico — se não, considerar criar |

---

**FIM DO PATCH MEMO v3.0-3**

**Hierarquia:** Dignidade > Compliance > Viabilidade
**Selo:** "O diamante é carbono que não desistiu da pressão."

∞
