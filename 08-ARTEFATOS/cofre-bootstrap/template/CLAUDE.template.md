# CLAUDE.md — {{NOME_DO_COFRE}}

> {{LEMA / FRASE-NORTE DO COFRE}}
> Hierarquia inviolável: **{{H1}} > {{H2}} > {{H3}}**

---

## Identidade

**{{NOME}} NÃO É:** {{o que o cofre não é — evita confusão de instância}}

**{{NOME}} É:** {{definição positiva de uma frase}}

| Campo | Valor |
|---|---|
| Razão Social | {{...}} |
| Fase | {{...}} |
| Missão | {{...}} |

---

## Regras Invioláveis (enforcement via Hooks)

> Estas viram regex em `.claude/hooks/lint-rules.json` (block-mode). Toda regra
> aqui deve ter um padrão correspondente lá, senão é só conselho.

1. **{{REGRA 1}}**
2. **{{REGRA 2}}**
3. **{{REGRA 3}}**

---

## Proibições Absolutas

> Cada item → uma entrada em `lint-rules.json` (pattern + label + fix).

- ❌ {{proibição 1 — termo superado/vedado}}
- ❌ {{proibição 2}}

---

## Stack & Convenções

- **Versionamento:** git · `main` → `develop` → `feature/*` · Conventional Commits.
- **Documentação:** `{{PREFIXO}}-[TIPO]-[Descriptor]-v[X.X]-[YYYY-MMDD].md`.
- **NotebookLM:** prefixo de caderno **`{{PREFIXO}}-`** (ex.: `{{PREFIXO}}- Intel: …`).
  Intel pública = Zona Verde. PII → de-identificar antes (firewall · NUNCA no NotebookLM-US).

---

## Inteligência (NotebookLM + ER-MC)

Skill `strategic-intelligence` (em `.claude/skills/`) executa o **Método
Engenharia Reversa** (`METODO-EngenhariaReversa.md`): research → NotebookLM →
Brief Proof-First, parando no gate humano. Grid de cadernos via `notebooklm-grid.py`.

---

## Gate (ADR-011 adaptado)

Mesa de trabalho = escrita livre. Memória canônica = só com "aprovado para vault".
Refactor deste manual = rito fundacional (decisão do dono do cofre).

---

*CLAUDE.md de {{NOME_DO_COFRE}} | v0.1 | {{DATA}} | gerado do cofre-bootstrap.
Preencha os {{placeholders}} e as regras de lint antes de operar em block-mode.*
