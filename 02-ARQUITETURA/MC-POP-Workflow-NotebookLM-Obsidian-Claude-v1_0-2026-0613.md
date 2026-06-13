---
codigo: MC-POP-Workflow-NotebookLM-Obsidian-Claude
versao: v1.0
data: 2026-06-13
autor: Code TALÃO (sessão web · branch claude/quirky-euler-eZHHG)
estado: CANÔNICO — mesa de trabalho; destino main (modelo institucional MC)
rito: R1 (POP operacional). Refactor = R2.
proposito: POP único do workflow de inteligência NotebookLM × Obsidian × Claude
           Code (+ PowerShell/CLI) — o sistema que construímos, replicável em
           qualquer cofre. Baseline do vídeo (YouTube) = inspiração; superamos.
tags: [pop, workflow, notebooklm, obsidian, claude-code, powershell, mcp, replicacao]
replicacao: copiar p/ 08-ARTEFATOS/cofre-bootstrap (guia de workflow dos cofres)
---

# MC-POP — Workflow NotebookLM × Obsidian × Claude Code

> Como transformamos vídeo/PDF/podcast em **inteligência lastreada e versionada**
> dentro do cofre. Não é "salvar um resumo bonito" — é um **pipeline Proof-First
> com governança, firewall e replicação**. D > C > V · Teste Zilda-STF.

---

## 0. TL;DR (uma respiração)

Fonte bruta (YouTube/PDF) → **NotebookLM** destila → **Claude Code** (via CLI/
PowerShell) faz **engenharia reversa Proof-First (ER-MC)** → escreve na **mesa de
trabalho do Obsidian** → **gate/selagem (git)** → vira **canônico**. Tudo isso com
NotebookLM **embarcado na UI do Obsidian**, MCP no **Claude Code web**, e um **kit**
que replica o sistema inteiro em outro cofre.

---

## 1. Onde NÓS fomos além do baseline (o coração deste POP)

O vídeo de referência para em "Claude escreve um `.md` formatadinho no Obsidian".
Nós fomos muito além — esta tabela é o que distingue o nosso sistema:

| Camada | Baseline (vídeo) | **Nosso sistema (além)** |
|---|---|---|
| Ingestão | YouTube → NotebookLM (extensão) | + PDF/texto/podcast · **grid de cadernos versionado** (`notebooklm-grid.py`) |
| Ponte NBLM→Claude | skill da comunidade (só desktop) | **`notebooklm-py` CLI + auth global** · orquestrável por **PowerShell** (scriptável, `> JSON`) |
| Onde o Claude roda | só Desktop | **Desktop** (local, toca NotebookLM) **+ Web** (nuvem, **MCP**, git/vault) — 2 runtimes, fronteira clara |
| NotebookLM na tela | app separado, à parte | **embarcado numa aba do Obsidian** — a inteligência não sai do cofre |
| Qualidade da saída | `.md` "visual/formatadinho" | **Brief Proof-First (ER-MC)**: fonte+data+hash · contraprova · `[FONTE PENDENTE]` — lastreado, não só bonito |
| Versionamento | salva arquivo no vault | **git**: branch (mesa) → merge (selagem) → main (canônico) + **obsidian-git** auto-backup |
| Governança | nenhuma | **harness**: hooks (lint block-mode) · gate ADR-011 · ritos R1/R2/R3 · sister-ancia |
| Privacidade | não tratada | **Firewall LGPD**: PII **nunca** no NotebookLM-US · de-identificação 🔴 obrigatória |
| Replicação | "baixe meu .zip" | **kit `cofre-bootstrap`** instalável + manifesto de adaptação por cofre |

> Resumo: o baseline cria **uma nota**. Nós criamos um **órgão de inteligência**
> com método, prova, fronteira de runtime, firewall e linha de montagem replicável.

---

## 2. Arquitetura — os dois runtimes (regra de ouro)

| Runtime | Roda | Toca NotebookLM? | Toca git/Vault? |
|---|---|---|---|
| **Desktop (local)** | NotebookLM CLI, Obsidian, Drive, ferramentas locais | ✅ SIM (auth local) | parcial (clone local) |
| **Web (nuvem)** | Git/Vault, push, **MCP** (github etc.) | ❌ NÃO (MCP local não atravessa) | ✅ SIM (autoridade) |

**Por quê:** o MCP do NotebookLM vive na máquina local; a sessão web é um container
efêmero na nuvem que não enxerga o `~/.notebooklm`. Então: **destilar = Desktop**;
**versionar/selar = Web**. Fonte: `MC-INFRA-RuntimesClaudeCode-DesktopVsWeb`.

---

## 3. Pré-requisitos (instalar UMA vez por máquina)

1. **NotebookLM CLI** — `notebooklm-py` (`pipx install notebooklm-py` ou equivalente).
   Primeira execução abre o navegador → **conectar a conta Google** do NotebookLM.
   A auth fica global em `~/.notebooklm` (vale p/ todos os cofres da máquina).
2. **Obsidian** + plugins:
   - **obsidian-git** (backup automático / commit-push do cofre) — visível na status bar.
   - **plugin de web viewer** (ex.: Web Viewer / Surfing) p/ **embarcar o NotebookLM numa aba**.
3. **Claude Code** — Desktop (toca NotebookLM) e Web (git/vault, MCP github).
4. **MCP no Claude Code web** — configurado no ambiente remoto (ex.: github).

---

## 4. O fluxo ponta a ponta (E1→E6)

**E1 · Captar** — jogue a fonte (YouTube/PDF/podcast) no **NotebookLM** e crie/escolha
o caderno. Use o **prefixo do cofre** no título (`MC-`, `MCH-`, `OMEGA-`).

**E2 · Destilar (Desktop · PowerShell)** — aponte o CLI pro caderno e extraia em JSON:
```powershell
notebooklm list                       # vê os cadernos
notebooklm use <id-do-caderno>        # fixa o caderno-alvo
notebooklm ask "<pergunta de extração>" > saida.json
```

**E3 · Engenharia reversa (ER-MC)** — entregue o JSON ao Claude e rode o método
`MC-METODO-EngenhariaReversaMC-NotebookLM` (skill `mc-strategic-intelligence`):
research → destilação → **Brief Proof-First** (fonte+data+URL/hash, contraprova,
lacunas marcadas). Não é resumo — é inteligência lastreada.

**E4 · Escrever na mesa de trabalho (Cérebro 1)** — Claude grava o Brief no vault
do Obsidian (`Research/` · `Intelligence/` · `Flywheel-Inputs/`). **Escrita livre.**

**E5 · Gate / Selagem (git)** — branch (mesa) → revisão (rito R1/R2/R3 + lint +
sister-ancia, via `mc-pre-selagem`) → **merge no main** = "aprovado para vault" =
**canônico** (Cérebro 2). Ver `MC-PLAYBOOK-HarnessOperacional`.

**E6 · Replicar** — nos outros cofres, instale o **kit** (`cofre-bootstrap`) e adapte
pelo `SKILLS-MANIFEST.md`. O workflow inteiro sobe num comando.

---

## 5. Firewall (inegociável em todo cofre)

- **PII nunca** sobe ao NotebookLM (Google-US): CPF/NB/CID/CNIS/senha. De-identifique
  **antes** (zona 🔴). O caderno é **Zona Verde** — inteligência pública/método.
- Cadernos com caso real → mesma política de de-identificação do MC (grid 🔴).

---

## 6. Replicação nos 2 cofres (checklist)

- [ ] Auth NotebookLM global já existe na máquina (vale p/ todos) — ok.
- [ ] Rodar `install-cofre.ps1` no cofre (instala harness + skills + este POP).
- [ ] Definir prefixo de caderno (`MCH-`, `OMEGA-`).
- [ ] Instalar plugins Obsidian (obsidian-git + web viewer p/ NotebookLM na UI).
- [ ] Preencher `CLAUDE.md` + `lint-rules.json` do cofre.
- [ ] Rodar E1→E5 num caderno-piloto pra validar a ponta a ponta.

---

## 7. Mapa de artefatos desta linhagem

Runtimes `MC-INFRA-RuntimesClaudeCode-DesktopVsWeb` · Grid `MC-INFRA-NotebookLM-Grid`
+ `notebooklm-grid.py` · Método `MC-METODO-EngenhariaReversaMC-NotebookLM` · Playbook
`MC-PLAYBOOK-HarnessOperacional` · Kit `08-ARTEFATOS/cofre-bootstrap/`.

---

*MC-POP-Workflow-NotebookLM-Obsidian-Claude v1.0 · 2026-06-13 · D > C > V ·
Proof-First · Firewall LGPD. Baseline do vídeo = inspiração; o sistema é nosso.*
