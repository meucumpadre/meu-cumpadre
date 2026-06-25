---
doc_id: MC-PLANO-Remediacao-PII-ClickUp-Git-v0_2-PROVISIONAL-2026-0624
titulo: "Plano de Remediação — PII de cidadão versionada em git (árvore ClickUp/)"
versao: "0.2"
status: "⚠️ PROVISIONAL · LARGAMENTE EXECUTADO (remoto). Pendente: merge PR #8 + deleção kit-r3; e gates R3 (Dra. Juliana — rotação senha / ANPD) + GitHub Support (purga de objetos)."
data: 24/06/2026
data_execucao: 24-25/06/2026
classificacao: CONFIDENCIAL — SEGURANÇA / LGPD (este documento NÃO contém valores de PII)
hierarquia: Dignidade > Compliance > Viabilidade
tags: [incidente, lgpd, pii, git, clickup, ADR-009a, ADR-020, R3]
autor: Code TALÃO (Arquiteto+Executor) × Alessandro de Souza Neves (Founder/CEO)
supersede: v0.1 (2026-0624) — abordagem mudada após forense corrigida (ver §1-bis)
---

# Plano de Remediação — PII de cidadão versionada em git (árvore `ClickUp/`)

> Este documento descreve o incidente e a execução. **Não reproduz nenhum dado pessoal** (sem nomes, CPF, senha). Contadores obtidos com `grep -c` (só números).

## 1. Incidente (achado em 2026-06-24, auditoria de divergência de canal)

- A árvore `ClickUp/` (espelho do workspace) estava **rastreada em git** e carrega PII de cidadão **nos próprios nomes de arquivo**: dump de **~423 paths sob `ClickUp/`**, com padrão CPF e **ao menos 1 senha gov.br em nome de arquivo**. Vetores secundários na história: `Obsidian_Master.txt` (senha em conteúdo) e dir do caso-âncora CLR001 (PII real).

## 1-bis. Forense corrigida (v0.2 — supersede o diagnóstico da v0.1)

A v0.1 assumia (a) PII só em `ClickUp/`, (b) 2 branches afetadas, (c) remediação por **reescrita de história** (`filter-repo` + force-push). A auditoria aprofundada corrigiu:

- **Históricos NÃO-relacionados.** `origin/main` e a linhagem `eloquent-fermat` têm **raízes órfãs distintas** (`git merge-base` vazio). `origin/main` (raiz `eabc44d`, *"snapshot limpo pós-de-id Frente 4"*, 08/06) é um **cânone limpo por construção** — 0 `ClickUp/`, 0 senha, em tip **e** história. Tem o ADR-007 **A3** (success fee VEDADO, selado R3) + suíte `compliance-lgpd/`.
- **3 branches contaminadas (não 2):** `claude/eloquent-fermat-mMuQq`, `fix/mc-lint-crossos` e **`claude/kit-r3-reconciliacao-dra`** (esta em *scrub-forward*: tip limpo, história suja — só descoberta varrendo `git log` de TODAS as refs). Locais: `funny-lovelace-H1cFU`, `main-local-obsidian`.
- **Consequência:** não é preciso reescrever história. A correta é **aposentar (deletar) a linhagem legada contaminada** e ficar com a `main` limpa — resgatando antes, PII-free, o valor que só existia no legado.
- ⚠️ Mergear/copiar legado→main **regrediria** o A3 e apagaria a compliance-LGPD (proibido · D>C>V/R3). Reconciliação dos 200 arquivos divergentes = tarefa R2/R3 separada.

## 2. Normas violadas

- **ADR-009a** — senha gov.br nunca em git/ClickUp; Bitwarden Org MC é a custódia.
- **ADR-020 §7.7 / §11** — PII Vermelha NUNCA em git.
- **CLAUDE.md · Proibição Absoluta** — "Senha gov.br no ClickUp (viola ADR-009a)".
- **LGPD** (Lei 13.709/2018) — tratamento/exposição de dado pessoal e sensível.

## 3. Execução (abordagem v0.2 · ordenada)

- [x] **Passo 0 — Estancar (`.gitignore ClickUp/`).** Feito (v0.1). Impede novos commits da árvore.
- [x] **Passo 1 — Inventário exato (read-only).** Mapeadas todas as refs locais+`origin/*`; confirmadas 3 contaminadas no remoto + 2 locais; `origin/main` limpa (tip+história).
- [x] **Passo A — Arquivo-frio (rede de segurança).** `git bundle` preserva 100% offline:
  - `mc-archive-incidente-pii-20260624/mc-legacy-contaminated.bundle` (eloquent-fermat + fix/mc-lint-crossos + funny-lovelace + main-local-obsidian)
  - `mc-archive-incidente-pii-20260624/kit-r3-reconciliacao-dra.bundle`
  - `…/wip-naocommitado/` (GABINETE-LUMUS + skill + _sessoes + settings.local)
- [x] **Passo B — Resgate de valor PII-free → main (PR #7, MERGED `8efc496`).** 40 arquivos (validadores VAS/Lúmus, fixtures, scripts/pipefy, skill mc-lumus-refine), 100% adições, 0 ClickUp, 0 senha. Excluídos: `ClickUp/`, `…bak.preMB-CLAUDIA-001` (PII), `…Proposta-v0_2` (supersedido).
- [~] **Passo C — Resgate dos pareceres R3 SELADOS → main (PR #8, aberto).** 16 arquivos únicos da kit-r3 (6 .docx RATIFICADO-SELADO da Dra. + lastros), verificados PII-free. **Aguardando merge do Founder.**
- [x] **Passo D — Deleção das contaminadas no remoto.** `origin/claude/eloquent-fermat-mMuQq` ✅ · `origin/fix/mc-lint-crossos` ✅ (deletadas). **Pendente:** `origin/claude/kit-r3-reconciliacao-dra` (deletar **após** merge do #8).
- [x] **Passo E — Limpeza local (parcial).** Deletadas branches descartáveis (eloquent-fermat, fix/mc-lint-crossos, funny-lovelace, purge-pii-opcao1, resgate, errata-adr007, lgpd-gitignore) + worktree; working tree movido p/ `main` (**ClickUp/ removido do disco**). **Mantida** `main-local-obsidian` (145 commits únicos + uso ativo — decisão adiada).
- [ ] **Passo 2 — Rotacionar credencial exposta (R3 · Dra. Juliana + titular).** A senha gov.br é **do cidadão** (MC não a detém de direito) → credencial comprometida; orientar troca pelo titular (ADR-009a). **Única neutralização real** (objetos ficam alcançáveis por SHA até GC do GitHub). Forma de contato = R3.
- [ ] **Passo 5 — Avaliação ANPD (R3 · Dra. Juliana).** Dever de comunicação à ANPD/titular (art. 48 LGPD): repo privado (exposição contida) mas houve senha+CPF. Decisão jurídica = Dra. Juliana.
- [ ] **Passo F — GitHub Support (purga).** Após deletar kit-r3: pedir ao GitHub Support a purga de objetos inalcançáveis e caches/PR views, para encurtar a janela de alcançável-por-SHA.
- [ ] **Passo 6 — Verificação de fechamento.** Re-rodar a varredura de história em TODAS as refs → esperado **0**. Registrar fechamento (tag de incidente) + selo Founder.

## 4. Gate

| Passo | Quem autoriza | Estado |
|---|---|---|
| 0,1,A,B,E (reversível/read-only) | Code | ✅ feito |
| C (PR #8), D-kit-r3 (irreversível) | **Founder** (merge + ok deleção) | ⏳ |
| 2, 5 (LGPD/ANPD/titular) | **R3 — Dra. Juliana** | ⏳ |
| F (GitHub Support), 6 (fecho) | Founder | ⏳ |

---
*Dignidade > Compliance > Viabilidade. v0.2 — atualização in loco pós-execução. Code não executa Passos 2/5 (R3) sem o gate da Dra. Juliana.*
