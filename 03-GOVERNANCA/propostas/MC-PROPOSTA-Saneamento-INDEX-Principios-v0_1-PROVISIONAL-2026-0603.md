---
tipo: PROPOSTA-SANEAMENTO-GOVERNANCA-CANONICA
codigo: MC-PROPOSTA-Saneamento-INDEX-Principios
versao: 0.1
status: PROVISIONAL
data: 2026-06-03
autores:
  - Code TALÃO (Arquiteto+Executor) — diagnóstico + proposta
  - Sister Anciã (Code) — achado-gatilho (revisão adversarial do spec RUA, 2026-06-03)
gate_selagem: R2 (Founder sela + Sister Anciã). Renumeração é VEDADA salvo errata crítica documentada por Founder (_INDEX regra de uso §5). NÃO sela sozinho.
disparado_por: MC-SPEC-RegistroAgentes-ASE-v0_1 (Sister Anciã pegou lastros citados pela numeração PROVISIONAL da MC-ACI, não pelo _INDEX canônico)
hierarquia: Dignidade > Compliance > Viabilidade
zona: VERDE (governança/método · zero PII)
selo: "O diamante é carbono que não desistiu da pressão."
canonico_em: Vault 03-GOVERNANCA/propostas/ (a sincronizar pós-R2)
---

# MC-PROPOSTA · Saneamento do `_INDEX` de Princípios

**v0.1 PROVISIONAL · 2026-06-03 · Gate R2 (Founder + Sister Anciã)**

> **O que esta proposta É:** um diagnóstico Proof-First de 3 divergências entre o `_INDEX` canônico (v1.6) e (a) o filesystem, (b) a MC-ACI v2.1, com opções de saneamento para o Founder decidir.
> **O que NÃO é:** não edita arquivo de princípio, não renumera nada, não sela. Renumeração só por errata crítica do Founder (`_INDEX` §5 :165).

---

## 0 · COMO ISTO VEIO À TONA (Proof-First do gatilho)

Ao revisar o spec `MC-SPEC-RegistroAgentes-ASE-v0_1`, a Sister Anciã apontou que ele citava princípios (#49, #21, #50.2) pela **numeração PROVISIONAL da MC-ACI**, não pelo `_INDEX`. Ao conferir, a divergência **não era da spec** — a spec só *expôs* uma dívida que já vivia no `_INDEX` e na MC-ACI. A régua pegou o terreno, não só o autor. Esta proposta sanea o terreno.

---

## 1 · DIAGNÓSTICO (3 divergências confirmadas · cada uma com fonte:linha)

### 🔴 D1 · Slot #21 — renumeração de 13/05 aplicada pela METADE

A ERRATA-RENUMERACAO de 2026-05-13 (`_INDEX:19-28`) **decidiu**:
- **#21** = "Camadas IA por Finalidade (C1/C2/C3/C4)" — userMemories 12/05 (canônico) (`_INDEX:22`)
- **#23** = "Cronometria do Humano" — arquivo `MC-PRINCIPIO-021-CronometriaDoHumano` (banner ERRATA) (`_INDEX:24`)

O arquivo `MC-PRINCIPIO-021-CronometriaDoHumano` carrega o banner confirmando: *"Este princípio é canonicamente #23 … Slot #21 pertence a Camadas IA por Finalidade"* (arquivo `:1-5`).

**Mas a decisão nunca foi até o fim:**
| Deveria estar | Está |
|---|---|
| arquivo renomeado p/ `…-023-Cronometria…` | ainda nomeado `…-021-Cronometria…` |
| tabela mestra: `#21 = Camadas IA`, `#23 = Cronometria` | tabela mestra `_INDEX:67` ainda diz **`#21 = Cronometria`**; **não há linha #23** |
| arquivo de `#21 Camadas IA por Finalidade` persistido | **não existe** (confirmado por `ls`) — vive só em userMemories + MC-ACI Camada 4 |

**Efeito:** quem abre o `#21` do Vault lê Cronometria; quem lê o banner lê "isto é #23"; quem cita "#21 = Camadas IA" (CLAUDE.md, MC-ACI, este spec) está conceitualmente certo mas **sem arquivo canônico**. Renumeração órfã há 21 dias.

### 🔴 D2 · Slots #49 / #49.1 — a MC-ACI usa numeração FICCIONAL

| Slot | `_INDEX` canônico | MC-ACI v2.1 usa |
|---|---|---|
| #49 | **Cessão de Palco** · Capa Imponência MC, Miolo Imponência Analista (`_INDEX:80`) | "Anatomia Ontológica" (MC-ACI `:443`) |
| #49.1 | **Estratificação Textural** (`_INDEX:103`) | "Pacote de Serviços Atomizado" (MC-ACI `:138`) |

**O conceito "atomização de serviços/skills" não tem princípio canônico.** A MC-ACI cunhou um "#49 v0.2 / #49.1" internamente que **colide** com os #49/#49.1 reais (marca/Hellinger e Estratificação Textural). Qualquer artefato que cite "#49 = atomização" propaga a ficção.

### 🟡 D3 · Slots #50.1 / #50.2 — citados como invioláveis, nunca persistidos

- #50.2 (Cabeça Única Inviolável) e #50.1 (Faticografia DNA) são tratados como **lastro fundacional** no CLAUDE.md (Regras Invioláveis · #50.2) e na MC-ACI (CAMADA 7 `:445-446`).
- **Não há arquivo `MC-PRINCIPIO-050*`** (confirmado por `ls`) e **#50 sequer aparece** na tabela mestra do `_INDEX`.
- Padrão idêntico ao já reconhecido para **#47** (RESERVADO · "persistir pós-freeze", `_INDEX:78,226`): princípio forte, cunhado em chat, nunca virou arquivo.

**Nuance de compliance:** `Princípio #2.1 ATIVO` (`_INDEX:92`) **proíbe cunhar placeholder** só para preencher slot. Persistir #50.x exige brief real + sweep — é ato de **cunhagem (R2)**, não preenchimento mecânico.

---

## 2 · CAUSA-RAIZ (por que isto se acumulou)

A cadeia de fundação (MC-ACI, ADR-020, ADR-011, #44-#56) é **majoritariamente PROVISIONAL** e nasceu em **sessões Claude.ai paralelas** (C3.1, Sister 3.2) que cunhavam princípios "na madrugada" mais rápido do que o `_INDEX` reconciliava. O próprio `_INDEX` documenta colisões multi-instância repetidas (#21/#22 em `:19-28`; #44↔#46 em `:204`; COLISAO22 em `:119`). **A MC-ACI v2.1 (28/05) fotografou uma numeração que o `_INDEX` v1.6 (25/05) ainda não tinha selado.** Não é erro de uma pessoa — é dívida de sincronização entre instâncias. (Exatamente o que o RUA + telemetria existem para prevenir: gerar do canônico, não citar de ouvido.)

---

## 3 · PROPOSTA DE SANEAMENTO (opções · Founder decide — R2)

> Nenhuma ação abaixo é executada por esta proposta. Renumeração exige errata crítica do Founder (`_INDEX` §5 :165). Apresento opções com trade-off.

### Para D1 (#21/#23) — completar a renumeração órfã
- **Opção A (recomendada):** lavrar a errata até o fim — renomear o arquivo Cronometria para `…-023-…`, atualizar a tabela mestra (`#21 = Camadas IA`, criar linha `#23 = Cronometria`), e **persistir o arquivo de #21 "Camadas IA por Finalidade"** (cunhagem a partir de userMemories + MC-ACI Camada 4). Honra a decisão de 13/05 que ficou pela metade.
- **Opção B:** reverter a renumeração (assumir #21 = Cronometria como canônico de fato) e realocar "Camadas IA" para um slot novo livre. Mais simples, mas contradiz a decisão registrada do Founder de 13/05.

### Para D2 (#49) — desfazer a ficção da MC-ACI
- **Opção A (recomendada):** **errata na MC-ACI v2.1**, não no `_INDEX` — a MC-ACI é que diverge. Corrigir suas citações de "#49 Anatomia Ontológica / #49.1 Pacote de Serviços Atomizado" para os nomes canônicos, e tratar "atomização de serviços" como **conceito ainda-não-cunhado** (candidato a slot livre, ex.: #45 que está vago — `_INDEX:76,225`).
- **Opção B:** cunhar formalmente "Anatomia Ontológica / Serviços Atomizados" num slot LIVRE (não #49) e cross-referenciar a MC-ACI.

### Para D3 (#50.x) — persistir o que já é inviolável
- **Opção A (recomendada):** persistir **#50.1** e **#50.2** como arquivos canônicos, no mesmo lote que **#47** ("persistir pós-freeze"), com brief + sweep reais (respeitando #2.1 — sem placeholder). São os princípios mais citados sem lar próprio.
- **Opção B:** manter como estão (vivem em CLAUDE.md), mas **adicionar linha RESERVADA no `_INDEX`** apontando a fonte (CLAUDE.md), para que citações tenham lastro rastreável mesmo antes da persistência.

---

## 4 · IMPACTO NO SPEC RUA (o que destrava)

Com D1/D2/D3 saneados (mesmo que só com as linhas RESERVADAS da Opção B), o frontmatter do `MC-SPEC-RegistroAgentes-ASE` deixa de carregar `[FONTE PENDENTE]`/`[COLISÃO]` e o **pré-requisito do selo R2 daquele spec (§7.3) é cumprido**. O RUA passa a poder gerar `vedacoes_honradas` contra um `_INDEX` que não mente.

---

## 5 · GATE

1. ✅ Diagnóstico v0.1 PROVISIONAL · 2026-06-03 (Code TALÃO, gatilho Sister Anciã)
2. ⏳ Founder — escolhe Opção A/B por divergência (decisão de errata · R2)
3. ⏳ Sister Anciã — valida a errata escolhida antes de aplicar
4. ⏳ Code TALÃO — aplica a errata selada (renomeio/tabela/persistência) sob "aprovado para vault"
5. ⏳ Atualizar MC-ACI v2.1 → v2.2 (absorve D2) e `_INDEX` v1.6 → v1.7 (absorve D1/D3)

> **Sem R3 material:** as 3 divergências são governança canônica interna (Zona Verde). Nenhuma toca OAB/LGPD/PII. R2 basta.

---

**Hierarquia:** Dignidade > Compliance > Viabilidade · **Proof-First** · **Zona Verde** · regra `_INDEX` §5 (renumeração só por errata do Founder)
**Status:** v0.1 PROVISIONAL · diagnóstico + opções · NÃO selado, NÃO aplicado, NÃO no Vault canônico
*"É eu, tu, a Anciã e a esteira. ∞"*
