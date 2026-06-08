---
type: mapa
data: 2026-04-29
source: claude-code
versao: v1.2
anterior: MC-MAPA-Vault-v1_1-2026-0428.md
---

# MC-MAPA-Vault — Estrutura do Vault Obsidian

**Caminho:** `G:\Meu Drive\0 0 MEU CUMPADRE\0 0 COMUNIDADE\OBSIDIAN _ MC\MEU CUMPADRE`
**Data do mapeamento:** 2026-04-29
**Ferramenta:** Claude Code (scan)
**Versão anterior:** v1.1 (2026-04-28 05:32)

---

## Resumo

| Métrica | v1.0 (17/04) | v1.1 (28/04) | v1.2 (29/04) | Δ v1.1→v1.2 |
|---|---:|---:|---:|---:|
| Total de arquivos `.md` | 450 | 485 | **529** | +44 |
| Pastas de nível 1 | 16 | 17 | 17 | 0 |
| `.md` na raiz | 4 | 6 | 7 | +1 |
| Skills em `.claude/skills/` | 7 | 9 | 9 | 0 |
| `.md` em `ClickUp/` (sync) | — | 385 | 423 | +38¹ |
| `.md` em pastas canônicas | — | 71 | 76 | +5 |

¹ +38 ClickUp = resíduo do ciclo de sync pós-snapshot v1.1, **não dado novo**. Crescimento ClickUp real no período = 0.

---

## Alterações v1.1 → v1.2 (29/04/2026)

### Novos documentos pós-v1.1 (5 arquivos, todos 28/04 após o snapshot v1.1)

| Pasta | Arquivo | Criado |
|---|---|---|
| `05-ESTRATEGIA/` | `MC-SPEC-Cowork-v1_0-2026-0428.md` | 28/04 10:59 |
| `05-ESTRATEGIA/` | `MC-ESTUDO-Posicionamento-B2B-Psi-v1_0-2026-0428.md` | 28/04 12:25 |
| `05-ESTRATEGIA/` | `MC-PRODUTO-Guardiao-Documentacao-Fundacional-v1_0-2026-0428.md` | 28/04 17:16 |
| `03-GOVERNANCA/contratos/` | `MC-CONTRATO-Psi1-MINUTA-v1_0-2026-0428.md` | 28/04 21:34 |
| `03-GOVERNANCA/` | `MC-MANIFESTO-Guardiao-v1_0-2026-0428.md` | 28/04 22:30 |

### Sync ClickUp↔Obsidian
- Última sync registrada: **2026-04-28 06:18** (ciclo do mesmo dia, ~46min após snapshot v1.1 das 05:32)
- Daemon **não executou em 29/04** — confirmar status do Task Scheduler `MC-ClickUp-Obsidian-Sync`
- Diferença 385 → 423 (+38) **NÃO é dado novo do ClickUp** — é resíduo do ciclo de sync que completou após o snapshot v1.1; nenhuma task nova entrou. **Crescimento real do período: 0.**

### Coletanea (POPs Frente 2.5)
- `08-ARTEFATOS/Coletanea/aprovados/` — **vazia** (só `desktop.ini`)
- `08-ARTEFATOS/Coletanea/pendentes/` — **vazia** (só `desktop.ini`)
- `08-ARTEFATOS/Coletanea/reprovados/` — vazia
- `08-ARTEFATOS/Coletanea/auditoria.md` — presente
- **Status:** POPs Frente 2.5 ainda não incorporados ao vault — gatilho da v1.1 ainda em aberto

---

## Árvore de Pastas (2 níveis)

```
MEU CUMPADRE/
├── .obsidian/            (config)
├── .clickup-sync/        (config sync daemon)
├── .claude/              (skills + config Claude Code)
├── _PESSOAL/             (3 .md — invisível ao Claude Code)
├── ClickUp/              (423 .md — sync daemon, +38 desde v1.1)
│   ├── Administrativo/
│   ├── Comercial/
│   ├── Financeiro/
│   ├── Gestão/
│   ├── Gestão Operacional/
│   ├── Jurídico/
│   ├── Pessoas/
│   ├── Projetos/
│   └── 🏛️ CASOS B2C/
├── CLAUDE CODE/          (6 .md)
├── 01-DNA/               (3 .md)
│   ├── manifesto/
│   ├── identidade/
│   └── jogo-infinito/
├── 02-ARQUITETURA/       (22 .md)
│   ├── grimorio/
│   ├── router-ethics/
│   ├── mcp/
│   ├── stack-llm/
│   ├── verticais/
│   ├── infra/
│   └── adrs/
├── 03-GOVERNANCA/        (9 .md, +2)
│   ├── adrs/
│   ├── compliance/
│   ├── contratos/        ← +Psi1 MINUTA v1.0
│   ├── lgpd/
│   ├── partners/
│   ├── README.md
│   ├── Roadmap_Governanca_v1_5.md
│   ├── _MC-PARECER-CONSOLIDADO-v3_4-2026-0427.md
│   ├── MC-CONTRATO-Phi1-MINUTA-v2_3-2026-0427.md
│   └── MC-MANIFESTO-Guardiao-v1_0-2026-0428.md   ← NOVO
├── 04-DADOS/             (6 .md)
│   ├── beps/
│   ├── govbr/
│   ├── tcu/
│   ├── cpmi/
│   └── lai/
├── 05-ESTRATEGIA/        (11 .md, +3)
│   ├── growth/
│   ├── valuation/
│   ├── nichos/
│   ├── premium-acidentario/
│   ├── pricing/
│   ├── README.md
│   ├── Tese_Expansao_13K_v1.md
│   ├── MC-ARMADURA-v3_0-ESQUELETO.md
│   ├── MC-ESTUDO-Arquitetura-Custo-Sistemico-v1_0-2026-0427.md
│   ├── 20260424_RADAR_COMP_ismael-correa-arquitetura-receita-honorarios_v3.1.md
│   ├── _MC-MANIFESTO-NovaOrdem-v1.0-2026-0427 ... .md
│   ├── MC-SPEC-Cowork-v1_0-2026-0428.md                              ← NOVO
│   ├── MC-ESTUDO-Posicionamento-B2B-Psi-v1_0-2026-0428.md            ← NOVO
│   └── MC-PRODUTO-Guardiao-Documentacao-Fundacional-v1_0-2026-0428.md ← NOVO
├── 06-OPERACOES/         (20 .md)
│   ├── frameworks/
│   ├── playbooks/
│   ├── protocolos/
│   ├── equipe/
│   └── fornecedores/
├── 07-PESQUISAS/         (2 .md)
│   ├── perplexity/
│   ├── gemini/
│   ├── manus/
│   └── CLAUDE/
├── 08-ARTEFATOS/         (3 .md)
│   ├── html/
│   ├── jsx/
│   ├── diagramas/
│   └── Coletanea/        ← aprovados/pendentes ainda VAZIOS
├── RIO/                  (0 .md — vazio)
├── Calendar/             (1 .md)
└── Templates/            (4 .md)
```

---

## .claude/skills/ — 9 skills ativas (sem mudança vs v1.1)

1. `orquestracao/`
2. `novo-cliente/`
3. `status-caso/`
4. `checklist-docs/`
5. `handoff-juridico/`
6. `diario/`
7. `watchdog/`
8. `auditoria-coletanea/`
9. `meu-cumpadre-orquestrador-mestre/` (924 linhas)

> Nota: existe arquivo solto `auditoria-coletanea.md` em `.claude/skills/` (além do diretório homônimo). Avaliar se é resíduo a remover.

---

## Arquivos na raiz (7)

1. `INDEX.md`
2. `📋 Painel Estratégico.md`
3. `MC-GUIA-COLOCACAO.md`
4. `CLAUDE.md` (v2.0)
5. `CLAUDE-v1_0-backup-2026-0427.md`
6. `MC-MAPA-Vault-v1_0-2026-0417.md`
7. `MC-MAPA-Vault-v1_1-2026-0428.md`

---

## Sinais de atenção

- **Sync daemon parado em 29/04** — última escrita 28/04 06:18; checar Task Scheduler antes do próximo bloco de trabalho que dependa de ClickUp.
- **Frente Guardião ganhou massa em 28/04** — 3 docs novos (Manifesto, Produto Φ-fundacional, Contrato Ψ₁). A esteira Φ₄ (Guardião pós-concessão) e Ψ₁ (licenciamento dossiê B2B) estão sendo escritas em paralelo. Verificar coerência com ADR-007 v3.0 antes de selar.
- **Coletanea continua sem POPs** — gatilho da v1.1 (incorporação POPs Frente 2.5) ainda não cumprido.
- **Skill stray** — `.claude/skills/auditoria-coletanea.md` solto ao lado do diretório `auditoria-coletanea/`.

---

## Próxima revisão

Disparar v1.3 quando ocorrer **qualquer** dos eventos abaixo:
- POPs Frente 2.5 entrarem em `08-ARTEFATOS/Coletanea/aprovados/`
- ADR-007 v3.0 reformulação concluída (6 Tier-1, meta 2026-05-30)
- Sync daemon retomar **e** crescimento real de tasks (não resíduo de ciclo) acima de 450 .md
- Criação de nova pasta de nível 1

---

*MC-MAPA-Vault v1.2 | 2026-04-29 | Meu Cumpadre*
*Autor: Claude Code (scan automático) × Alessandro de Souza Neves*
*Substitui: MC-MAPA-Vault-v1_1-2026-0428.md*
