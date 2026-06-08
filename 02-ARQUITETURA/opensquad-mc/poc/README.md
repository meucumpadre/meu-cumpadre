# MC-Squad PoC — orquestração multi-agente com governança MC

Prova de conceito **mínima e rodável** inspirada no [OpenSquad](https://github.com/renatoasse/opensquad)
(Renato Asse, MIT), adaptada às regras invioláveis do Meu Cumpadre.

O objetivo do PoC **não é** reimplementar o OpenSquad — é validar o **fluxo de controle**:
pipeline de agentes → checkpoints humanos → **gates de governança MC** embutidos como
*enforcement* (não orientação). Roda **offline** (stub determinístico, sem rede/chave de API).

## Requisitos
- Node.js ≥ 20 (testado em v22)

## Credenciais (providers reais)
Segredos vêm de `.env` (gitignored). **Nunca commite chave; nunca cole chave em chat/PR.**
```bash
cp .env.example .env     # preencha localmente
node src/cli.js keys     # diagnóstico (mostra presente/ausente, nunca o valor)
```
- **Gemini** (`GEMINI_API_KEY`, [AI Studio](https://aistudio.google.com/app/apikey)): provider cloud
  real. Rode com `--provider gemini-2.5-flash`. **Sem chave/rede → fallback gracioso ao stub.**
- **Claude** (`ANTHROPIC_API_KEY`, [Console](https://console.anthropic.com/settings/keys)): provider
  cloud real (Messages API, `claude-sonnet-4-6`). Rode com `--provider claude-sonnet`. Mesmo fallback.
- **NotebookLM** (`NOTEBOOKLM_MODE`): ⚠️ **não há API key de consumidor** em 2026. Modos:
  `stub` (default, offline) · `autocontent` (3rd-party, `AUTOCONTENT_API_KEY`) ·
  `enterprise` (Vertex, service account — `GCP_PROJECT` + `GOOGLE_APPLICATION_CREDENTIALS`,
  **não** api key) · `cli` (lib não-oficial, frágil). Restrito à **zona segura** (ADR-009a).

## Como rodar
```bash
cd 02-ARQUITETURA/opensquad-mc/poc

# 1) marketing (zona segura) — conclui
node src/cli.js run squads/marketing-manifesto.json --auto

# 2) sensível + cloud — BLOQUEADO pelo firewall LGPD (exit 3)
node src/cli.js run squads/triagem-caso-sensivel.json --auto

# 3) sensível + self-hosted — roda e dispara handoff Router-Ethics
node src/cli.js run squads/triagem-caso-sensivel.json --auto --provider stub-self-hosted

# auditar qualquer texto com o Revisor-Compliance (standalone)
node src/cli.js check examples/post-com-violacoes.md   # REPROVADO (exit 3)

# gerar dashboard a partir de um audit.jsonl existente
node src/cli.js dashboard out/marketing-manifesto.audit.jsonl

# listar squads
node src/cli.js list
```
> Todo `run` já gera o dashboard automaticamente em `out/<squad>.dashboard.html`.
Sem `--auto`, cada checkpoint pausa e pede aprovação humana real no terminal (`s/N`).

## Agente Revisor-Compliance (`src/compliance.js`)
Motor determinístico que varre as **Proibições Absolutas** do `CLAUDE.md`. Roda integrado
ao estágio `revisor` de um squad (auditando o conteúdo produzido) **ou** standalone via
`check <arquivo>`. Severidades:
- **CRÍTICO** → `REPROVADO` (bloqueia): posicionamento (legaltech/marketplace), firewall OAB
  (prazo de concessão, garantia de resultado), preços superados (R$1.500 standard / R$900),
  "Juliana Alencar".
- **ALTO** → `HANDOFF_HUMANO`: success fee, "servidor INSS ativo", DeepSeek, Autentique,
  Router-Ethics 9.0/10.0, parcelamento 3×.
- **AVISO**: número sem fonte (Proof-First → exige `[FONTE PENDENTE]` ou citação).

Cobre **23 regras** mapeadas às Proibições Absolutas do `CLAUDE.md` (posicionamento, OAB,
custódia/LGPD, inadimplência/CDC, preços ADR-007, valuation/CMD, pessoas, stack, Router-Ethics).
Suíte de testes com 1 caso positivo por regra + cobertura:
```bash
npm test     # node --test  → 26/26
```

## Gates de governança (em `src/governance.js`)
| Gate | Regra MC | Comportamento no PoC |
|---|---|---|
| **Zona LGPD** | Firewall ADR-009a | Squad `zona: sensivel` recusa provider `tier: cloud` |
| **Anti-PII** | Proteção LGPD | Detecta CPF/NB/CID em zona segura e bloqueia |
| **Router-Ethics 11.0** | Confidence/Complexity/Fraudscore | Handoff humano se qualquer score cruza threshold |
| **D > C > V** | Hierarquia inviolável | Flag de dignidade faz HALT e força handoff |
| **Proof-First** | Regra #4 | Stub emite `[FONTE PENDENTE]`, nunca métrica fabricada |

> ⚠️ Os scores Router-Ethics aqui são **heurística determinística de demonstração** — não o
> motor real de 140 nós. A costura de provider (`src/providers.js`) é stub offline; em produção
> troca-se o corpo de `generate()` por Gemini 2.5 Flash (cloud) / Llama 4 Scout (self-hosted) /
> Claude via MCP (ético).

## Skills num estágio do pipeline
Um estágio pode declarar `"skill": "<nome>"` (com `skillArgs`) e executar uma skill em vez
da geração LLM. Registro em `src/skills/index.js`. Exemplo pronto: a skill **NotebookLM**
numa etapa de pesquisa (`squads/pesquisa-notebooklm.json`), que sintetiza fontes públicas e
alimenta redator/revisor. A skill recebe a `zona` do squad e **recusa zona sensível** (ADR-009a).
```bash
node src/cli.js run squads/pesquisa-notebooklm.json --auto
```

## Fonte local (ponte Motor Externo → Lapidação Interna · Princípio #46)
Um estágio pode declarar `"sourceFile": "sources/arquivo.md"` para **ingerir um arquivo local**
em vez de gerar com LLM. Uso típico: exportar uma síntese do **NotebookLM** (que não tem API de
consumidor) para um arquivo e deixar o squad fazer a engenharia reversa. Exemplo pronto:
`squads/lab-claude-design.json` (ingere `sources/claude-design-notebooklm.md` → engenharia reversa
→ lapidação MC → blueprint do laboratório institucional).
```bash
node src/cli.js run squads/lab-claude-design.json --auto --provider gemini-2.5-flash --out lab
```

## Comparar saídas sem sobrescrever (`--out`)
Cada `run` grava em `out/<nome>`. Por padrão `<nome>` é o do squad; `--out <nome>` troca, para
rodar o mesmo squad com providers diferentes sem um sobrescrever o outro:
```bash
node src/cli.js run squads/marketing-manifesto.json --auto --provider gemini-2.5-flash --out gemini
node src/cli.js run squads/marketing-manifesto.json --auto --provider claude-sonnet     --out claude
```

## Escritório Virtual (dashboard)
`src/dashboard.js` gera um HTML **autossuficiente** (abre via `file://`, sem servidor) a partir
do audit JSONL: mesas dos agentes com status, pipeline com os scores Router-Ethics (barras),
chips dos gates (Zona LGPD / D>C>V / Compliance), trilha de auditoria e um **replay** animado
da execução. Fecha a tríade do OpenSquad: pipeline + checkpoints + escritório virtual.
> Snapshot pós-execução (honesto — não é stream ao vivo).

## Saídas
Geradas em `out/` (gitignored):
- `<squad>.result.md` — artefato final por estágio
- `<squad>.audit.jsonl` — trilha de auditoria (uma decisão por linha)
- `<squad>.dashboard.html` — escritório virtual

## Mapa de arquivos
```
poc/
├── src/
│   ├── cli.js           # entrada (run | list)
│   ├── orchestrator.js  # pipeline + checkpoints
│   ├── governance.js    # os 4 gates + scanner PII
│   └── providers.js     # abstração de LLM (stub offline + costura real)
├── squads/
│   ├── marketing-manifesto.json      # zona segura
│   └── triagem-caso-sensivel.json    # zona sensível (demo de gate)
└── out/                 # artefatos + audit (gerado)
```
