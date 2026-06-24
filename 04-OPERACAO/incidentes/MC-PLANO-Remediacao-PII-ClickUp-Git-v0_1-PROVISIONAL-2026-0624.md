---
doc_id: MC-PLANO-Remediacao-PII-ClickUp-Git-v0_1-PROVISIONAL-2026-0624
titulo: "Plano de Remediação — PII de cidadão versionada em git (árvore ClickUp/)"
versao: "0.1"
status: "⚠️ PROVISIONAL · PLANO · NÃO-EXECUTADO. Passos irreversíveis exigem gate Founder; Passos 2 e 5 exigem R3 (Dra. Juliana — LGPD/ANPD)."
data: 24/06/2026
classificacao: CONFIDENCIAL — SEGURANÇA / LGPD (este documento NÃO contém valores de PII)
hierarquia: Dignidade > Compliance > Viabilidade
tags: [incidente, lgpd, pii, git, clickup, ADR-009a, ADR-020, R3]
autor: Code TALÃO (Arquiteto+Executor) × Alessandro de Souza Neves (Founder/CEO)
---

# Plano de Remediação — PII de cidadão versionada em git (árvore `ClickUp/`)

> Este documento descreve o incidente e o plano. **Não reproduz nenhum dado pessoal** (sem nomes, CPF, senha). Os contadores abaixo foram obtidos com `grep -c` (só números).

## 1. Incidente (achado em 2026-06-24, auditoria de divergência de canal)

- A árvore `ClickUp/` (espelho do workspace) está **rastreada em git** e carrega PII de cidadão **nos próprios nomes de arquivo**: **44 arquivos rastreados, 26 com padrão PII** (CPF formatado/numérico) e **ao menos 1 senha gov.br em nome de arquivo**.
- **Distribuição por ref:**
  - `origin/main` (canônico): **0** arquivos `ClickUp/` — limpo ✅
  - `claude/eloquent-fermat-mMuQq` (branch CLI) — **e já PUSHADA no remote** `meucumpadre`: 44 / 26 PII ❌ (exposição viva)
  - `main-local-obsidian` (local): 44 / 26 PII ❌
- `ClickUp/` **não constava do `.gitignore`** (corrigido neste mesmo pacote — estanca novos, **não** remove os já rastreados).

## 2. Normas violadas

- **ADR-009a** — senha gov.br nunca em git/ClickUp; Bitwarden Org MC é a custódia.
- **ADR-020 §7.7 / §11** — PII Vermelha NUNCA em git.
- **CLAUDE.md · Proibição Absoluta** — "Senha gov.br no ClickUp (viola ADR-009a)".
- **LGPD** (Lei 13.709/2018) — tratamento/exposição de dado pessoal e sensível.

## 3. Plano (ordenado · marcar [x] ao executar)

- [x] **Passo 0 — Estancar (reversível, FEITO neste pacote).** `ClickUp/` adicionado ao `.gitignore` → impede novos commits da árvore. **Não** remove o que já está rastreado.

- [ ] **Passo 1 — Inventário exato (read-only).** Listar TODAS as refs (locais + `origin/*`) que contêm `ClickUp/` com PII, sem imprimir nomes:
  ```bash
  for r in $(git for-each-ref --format='%(refname)'); do \
    n=$(git ls-tree -r --name-only "$r" 2>/dev/null | grep "^ClickUp/" | \
        grep -ciE "[0-9]{11}|senha|[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"); \
    [ "$n" -gt 0 ] && echo "$r = $n"; done
  ```

- [ ] **Passo 2 — Rotacionar credencial exposta (R3 · Dra. Juliana + titular).** A senha gov.br exposta é **do cidadão** (o MC não a detém de direito) → tratar como **credencial comprometida**: orientar a troca pelo titular conforme ADR-009a. Decisão sobre a forma de contato = R3.

- [ ] **Passo 3 — Purgar o histórico (IRREVERSÍVEL · gate Founder).** Em clone espelho, remover `ClickUp/` de TODO o histórico, em todas as refs:
  ```bash
  git clone --mirror <remote> mc-mirror && cd mc-mirror
  git filter-repo --path ClickUp/ --invert-paths   # remove a pasta de toda a história
  git push --force --all && git push --force --tags
  ```
  Invalida todos os clones locais existentes (precisam re-clonar). **Só com autorização explícita do Founder.**

- [ ] **Passo 4 — Branches afetadas (gate Founder).** Pós-purga: recriar/forçar `origin/claude/eloquent-fermat-mMuQq`; **arquivar `main-local-obsidian`** (histórico contaminado — nunca merge/cherry-pick).

- [ ] **Passo 5 — Avaliação ANPD (R3 · Dra. Juliana).** Avaliar dever de comunicação à ANPD e ao(s) titular(es) (art. 48 LGPD): repo é privado (exposição contida), mas há **senha + CPF de titular**. Decisão jurídica = Dra. Juliana.

- [ ] **Passo 6 — Verificação de fechamento.** Re-rodar o inventário do Passo 1 → esperado **0 em todas as refs**. Registrar fechamento (tag de incidente).

## 4. Gate

| Passo | Quem autoriza |
|---|---|
| 0 (estanca) | ✅ feito (reversível) |
| 1, 6 (read-only) | Code, sem gate |
| 3, 4 (irreversível) | **Founder** (explícito) |
| 2, 5 (LGPD/ANPD/titular) | **R3 — Dra. Juliana** |

---
*Dignidade > Compliance > Viabilidade. PLANO — não executado. Code não executa Passos 2-5 sem o gate correspondente.*
