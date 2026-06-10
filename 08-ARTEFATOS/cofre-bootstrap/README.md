# Cofre Bootstrap — harness Claude Code + NotebookLM para novos cofres

Replica o setup do Meu Cumpadre em **outros cofres Obsidian** (ex.: `mcholding-cofre`,
`MEU-OMEGA`), **generalizado** — sem carregar a identidade/proibições do MC.

> Princípio: **motor compartilhado, identidade por-cofre.** O lint é o mesmo
> engine; as proibições de cada cofre vivem no seu próprio `lint-rules.json`.

## O que o kit instala

```
<cofre>/
├── .claude/
│   ├── settings.json                 # hooks wired (SessionStart + Stop/lint)
│   ├── hooks/
│   │   ├── cofre-lint.py             # MOTOR genérico (sem identidade MC)
│   │   ├── lint-rules.json           # proibições DESTE cofre (você preenche)
│   │   └── session-start.sh          # setup Docling (só no Code web)
│   ├── skills/                       # 16 skills de doutrina (ver SKILLS-MANIFEST.md)
│   └── agents/                       # sister-ancia + mc-grok-context-engineer
├── CLAUDE.md                         # identidade do cofre (do template, c/ placeholders)
├── notebooklm-grid.py                # grid de cadernos (PII-safe)  [se incluído]
└── METODO-EngenhariaReversa.md       # método ER-MC                  [se incluído]
```

## Instalação (no seu Windows, PowerShell)

```powershell
# a partir da pasta cofre-bootstrap (deste kit)
.\install-cofre.ps1 -Target "C:\Users\Beto\Documents\GitHub\mcholding-cofre" -Prefix "MCH" -InitGit
.\install-cofre.ps1 -Target "G:\Meu Drive\0.2_MEU_OMEGA\_OBSIDIAN\MEU-OMEGA" -Prefix "OMEGA" -InitGit
```

O instalador é **idempotente**: não sobrescreve `CLAUDE.md` nem `lint-rules.json` já existentes.

## Depois de instalar (3 passos por cofre)

1. **Identidade** — preencha `CLAUDE.md` (o que o cofre é/não é, regras invioláveis).
2. **Lint** — preencha `.claude/hooks/lint-rules.json` com as proibições reais.
   Enquanto vazio, o engine fica **inerte** (não bloqueia nada — seguro).
3. **NotebookLM** — já está conectado (a auth `~/.notebooklm` é global da máquina).
   Use o **prefixo do cofre** nos cadernos (`MCH-`, `OMEGA-`) e rode o grid/ER-MC.

## Firewall (vale pra todo cofre)

- **PII nunca** no NotebookLM (Google US) nem em repo/commit. De-identifique antes.
- Cofres com casos reais → mesma política de de-identificação 🔴 do MC.

## Skills de doutrina (bundled — adaptação necessária)

O kit inclui as **16 skills de doutrina do MC** (+ 2 agentes) em
`template/.claude/skills/` e `.../agents/` — instaladas junto com o harness.
**Elas carregam identidade MC.** Consulte `SKILLS-MANIFEST.md`: classifica cada
uma em 🟢 (transferível como padrão, ajuste leve) vs 🔴 (MC-específica — reescrever
ou remover por cofre, ex.: `squad-r3`/OAB, `novo-cliente`, `watchdog`, `status-caso`).

> A `meu-cumpadre-orquestrador-mestre` (SUPERSEDED) **não** foi incluída — não se
> replica artefato aposentado a cofre novo.

⚠️ **Antes do block-mode:** revise as 🔴 do manifesto. Senão o cofre opera com
doutrina alheia. As 🟢 (mc-prompt, squad-r2, mc-pre-selagem, mc-dossie-proof-first,
mc-strategic-intelligence, mc-compasso, mc-especimen…) servem quase direto.
