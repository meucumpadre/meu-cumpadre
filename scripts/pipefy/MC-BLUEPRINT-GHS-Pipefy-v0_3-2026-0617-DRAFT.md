# MC-BLUEPRINT-GHS-Pipefy v0.3 — OpenSquad Dashboard

> **Status:** 🟡 DRAFT — aguarda gate **R2** (`/mc-pre-selagem`) antes de virar canônico no Vault.
> **Zona:** 🟢 Verde — artefato de engenharia, **zero PII de cidadão**. Nunca um CPF/NB/CID toca este pipe.
> **Data:** 2026-06-17 · **Supersede:** as duas v0.2 divergentes (local-Claude 42 campos · Grok 26 campos)
> **Pipe:** MEU CUMPADRE (`306835133`) · **Hierarquia:** D > C > V

---

## 0. Por que confiar neste design — a convergência

Duas inteligências independentes redesenharam o mesmo pipe sem se falar: a **v0.2 do Grok** (minimalista, rastreabilidade) e a **auditoria Claude** (régua de proveniência). Convergiram em 7 pontos estruturais (Decisão em DIAGNÓSTICO · GATE só review · hash em BLUEPRINT · dois hashes separados · Link ADR obrigatório · CMD opcional · Faixa removida). Quando dois caminhos pousam na mesma forma, a forma é **carga**. O v0.3 = base do Grok (já aprovada na auditoria) + as pedras que **nenhum** dos dois cobriu.

---

## 1. Princípios estruturais (leis — emendar só via R2)

- **L1 — Espelho, nunca fonte da verdade.** GitHub + Vault são a verdade; o Pipefy é projeção **read-only** delas. O `mover_card.py` escreve no Pipefy *a partir de* eventos git/vault — nunca o contrário. Ninguém edita um card para mudar a realidade (mesma lei de "Alessandro nunca edita o Vault direto").
- **L2 — Estados de morte são de primeira classe.** A máquina tem caminho de fracasso, não só o feliz. Cards mortos não apodrecem na fase errada.
- **L3 — Router-Ethics governa as próprias transições.** A máquina come a própria ração: antes de auto-mover, o motor consulta Confidence/Complexity/Fraudscore/Decisão do card. Vermelha/alto/handoff → **não avança sozinha**; congela para autorização humana.
- **L4 — Livro-razão de accountability.** Todo ato carrega *quem* o fez (`Disparado por`, enum fechado). É a prova do Firewall OAB (a máquina nunca cruzou para atividade-fim) e a primitiva LGPD — testada barato aqui na Zona Verde.
- **L5 — Fronteira Zona Verde / dois pipes.** Este pipe é engenharia, **para sempre**. Rastreio de *casos de cidadão* (Zona Vermelha, PII, self-hosted) é **sistema fisicamente separado** — jamais o mesmo Pipefy.
- **L6 — O `PRE` é a constituição da máquina.** O dicionário de pré-condições de transição = tolerâncias GHS viradas código. Alterá-lo é emenda constitucional → **R2**.

---

## 2. Máquina de estados (com estados de morte)

```
Espinha feliz:
  INGESTÃO → DIAGNÓSTICO → BLUEPRINT → EXECUÇÃO → GATE → SELAGEM → DIAMANTE

Estados não-felizes (NOVOS — adicionar ao pipe):
  BLOQUEADO    (não-terminal) ← espera decisão humana (L3: Vermelha/alto/handoff)
                                 → retoma para a fase de origem, ou morre
  DESCARTADO   (terminal)     ← diagnóstico "não fazer" · ADR rejeitado no gate ·
                                 PR fechado sem merge (encerramento prematuro)
                                 carrega: Motivo do descarte
```

**Arestas não-lineares:**
- `* → BLOQUEADO`: qualquer transição que o Router-Ethics barre (L3).
- `DIAGNÓSTICO/GATE → DESCARTADO`: morte planejada (não-fazer / rejeição).
- `EXECUÇÃO → DESCARTADO`: encerramento prematuro (PR `closed`, `merged=false`).

---

## 3. Modelo de 3 camadas + mapa de campos v0.3

**Regra:** fato consumido por fase *abaixo* da que o produz → **Camada 1**. Só interessa à própria fase → **Camada 2**. O gate real → **Camada 3** (motor).

### Camada 1 — Identidade do card (Start Form, nível do card, visível em todas as fases)
`required` nativo = **False** (preenchido progressivamente por agentes); o obrigatório real é o motor (Camada 3).

| Campo | Tipo | Produtor | Enum / nota |
|---|---|---|---|
| Tipo | select | INGESTÃO | feature/fix/ADR/refactor/outro |
| **Disparado por** | select | INGESTÃO | **`claude-os` / `github-webhook` / `igor-humano` / `alessandro-override`** (L4) |
| Link GitHub Issue | short_text | INGESTÃO | — |
| Confidence | number | DIAGNÓSTICO | 0–100 |
| Complexity | number | DIAGNÓSTICO | 1–10 |
| **Fraudscore** | select | DIAGNÓSTICO | normal/alto · **Δ restaurado (Router-Ethics tem 3 scores)** |
| Decisão | select | DIAGNÓSTICO | autonomia/handoff |
| Link ADR/Spec (Vault) | short_text | BLUEPRINT | — |
| **Hash do artefato (Vault, SHA-256)** | short_text | BLUEPRINT | **renomeado — ≠ merge SHA (anti-homônimo Proof-First)** |
| Link do PR | short_text | EXECUÇÃO | — |
| Merge commit SHA | short_text | SELAGEM | o SHA do git, distinto do hash do artefato |

### Camada 2 — Trabalho da fase (campos de fase, ficam na fase)

| Fase | Campos |
|---|---|
| INGESTÃO | Resumo inicial *(ver Δ8 — semente)* |
| DIAGNÓSTICO | Justificativa da decisão |
| BLUEPRINT | **Critério de Concluído (Lei+Evidência+Hash)** `[req]` *(Δ restaurado — Proof-First DoD)* · Data de Selagem · Status do Blueprint (selado/em_revisao/rejeitado) |
| EXECUÇÃO | Branch · Autor do PR · Status da Execução |
| GATE | Resultado do Review (aprovado/alteracoes/rejeitado) `[req]` · Aprovadores · Comentários do Gate |
| SELAGEM | Data do Merge · **Tipo de encerramento (Planejado/Prematuro)** *(Δ)* |
| DIAMANTE | CMD Desbloqueado *(opc)* · Nota de Retrospectiva · **Lições para o Swarm → loop auto-evolutivo** |

### Camada 3 — Enforcement (`mover_card.py`, §4)

---

## 4. `mover_card.py` — o motor (especificação)

```python
# L6: o PRE é a constituição da máquina. Emendar = R2.
PRE = {
  ("INGESTÃO","DIAGNÓSTICO"): ["Tipo","Disparado por","Resumo inicial"],
  ("DIAGNÓSTICO","BLUEPRINT"): ["Confidence","Complexity","Fraudscore","Decisão"],
  ("BLUEPRINT","EXECUÇÃO"):    ["Link ADR/Spec","Hash do artefato",
                                "Critério de Concluído","Data de Selagem"],
  ("EXECUÇÃO","GATE"):         ["Link do PR","Branch","Autor do PR"],
  ("GATE","SELAGEM"):          ["Resultado do Review"],   # = aprovado
  ("SELAGEM","DIAMANTE"):      ["Merge commit SHA","Data do Merge","Tipo de encerramento"],
}

def mover(card_id, destino, ator):           # ator = valor de "Disparado por" (L4)
    card   = ler_card(card_id)               # card.fields = TODOS os fatos (carry-forward)
    origem = card.fase_atual

    # L3 — Router-Ethics governa a própria transição:
    if card.fraudscore == "alto" or card.confidence < 40 or card.decisao == "handoff":
        if ator not in ("igor-humano","alessandro-override"):
            return mover_para(card_id, "BLOQUEADO", motivo="aguarda autorização humana")

    faltam = [f for f in PRE[(origem,destino)] if not card.tem(f)]
    if faltam:
        abortar(f"{origem}→{destino} bloqueada. Faltam: {faltam} (produtor: {dono(origem)})")

    move_card_to_phase(card_id, destino)
    registrar_campo(card_id, "entered_phase_at", agora())   # substrato do watchdog futuro
    registrar_log(card_id, ator, origem, destino)           # L4 — livro-razão
```

`required` nativo do Pipefy = liga-se só nos campos que o **dono da fase** produz deterministicamente — rede de segurança para card tocado por humano. O motor é o gate primário.

---

## 5. `reconciliar.py` — a prova de que é espelho (L1)

```
Reconstrói o board inteiro a partir da verdade (GitHub + Vault):
  - varre PRs/commits/ADRs → deduz a fase de cada card e os fatos Camada-1
  - cria/atualiza cards para bater com a verdade
  - reporta divergências (card que existe no Pipefy sem lastro na verdade = órfão)
Se não for possível reconstruir → algum dado só vive no Pipefy → ele virou
fonte da verdade secreta → violação de L1. A rebuildabilidade É o teste de L1.
```

---

## 6. Verificar no schema vivo antes de codar (lição da thread)

Já nos queimamos chutando o schema (`me.pipes`). Confirmar via introspection / `inspecionar_pipe.py` antes de confiar: `createPhaseField` · provável `updateFieldsValues` (escrever fato) · provável `moveCardToPhase` (transitar) · como criar campo de **Start Form** (Camada 1) vs campo de fase.

---

## 7. BANCADA (diferido com intenção)

- **Watchdog temporal** — cards envelhecendo numa fase. Diferido (prematuro a N=150). **Mas** o `entered_phase_at` já é gravado pelo motor (§4) → o histórico existe quando o watchdog nascer.
- **PRE como ADR versionado formal** — quando a máquina crescer além do piloto.

---

## 8. Decisão aberta (Δ8 — semente de INGESTÃO)

O Grok deixou `Resumo inicial` opcional → card pode nascer cego. Recomendação: **semente mínima obrigatória** = `Tipo` + `Disparado por` + `Resumo inicial` (a Definição de Pronto da máquina). Exige upgrade do `criar_card.py` em lockstep. **→ aval do Founder.**

---

## 9. Ritual de selagem

1. Consertar Stop hook (`python`→`py`) — senão o `mc-lint` mente
2. **Este doc** (passo 2 — feito, DRAFT)
3. `/mc-pre-selagem` (sister-ancia + mc-lint + rito) — **R2**
4. `--apply` campos · `+ fases BLOQUEADO/DESCARTADO` · construir `mover_card.py` + `reconciliar.py`
5. Founder sela

---
*MC-BLUEPRINT-GHS-Pipefy v0.3-DRAFT · 2026-06-17 · Zona Verde · D > C > V · aguarda R2*
