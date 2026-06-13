---
codigo: MC-INFRA-NotebookLM-Grid
versao: v0.1
data: 2026-06-08
autor: Code TALÃO (sessão web · branch claude/quirky-euler-eZHHG)
estado: MESA DE TRABALHO (Cérebro 1 · ADR-011) — NÃO selado no Vault
rito: R1 para a versão DE-IDENTIFICADA (este arquivo). Índice NOMINAL (com nomes
      de beneficiário) = R3 + stack soberana, NUNCA neste repo.
fonte: saída de `notebooklm list` na máquina local autenticada (2026-06-08)
firewall_lgpd: zona vermelha (CASE-/CLIENTE-/PESSOAL-) de-identificada por padrão
tags: [infra, notebooklm, grid, indice, engenharia-reversa, firewall-lgpd]
---

# Grid NotebookLM — Índice Mestre dos Cadernos (de-identificado)

> Mapa de território da biblioteca NotebookLM do ecossistema (~185 cadernos,
> snapshot 2026-06-08). Base para a **tabulação de engenharia reversa**: saber o
> que existe, em que zona de firewall vive, e qual é alvo prioritário de
> destilação. **Contagens exatas:** rodar `notebooklm-grid.py` (§6) — este v0.1
> é curadoria manual da zona verde + política das zonas.

---

## 1. Política de zonas (LER PRIMEIRO — D > C > V)

| Zona | Prefixos | Tratamento no repo (GitHub = não-soberano) |
|---|---|---|
| 🟢 **Verde** | `MC-` (não-PII) · `TECH-` · `CLAUDE`/`CODE` · `ARQUIVO-` (tema público) · estudos `cad*` | Enumerável. Alvo de engenharia reversa. |
| 🔴 **Soberana/PII** | `CASE-` · `CLIENTE` · `PESSOAL-` · `CAD*`/INSS com nome próprio | **De-identificada.** Só contagem+categoria aqui. Índice nominal **nunca** sai da stack soberana. |

**Regra dura:** nenhum nome de beneficiário, CPF, NB, CID, CNIS entra neste
arquivo nem em qualquer artefato versionado/pushado. Violação = quebra de LGPD +
Firewall OAB. A síntese por-caderno (§5) sobre cadernos 🔴 **não** é commitada.

---

## 2. 🎯 Cluster prioritário — IA / Claude / Code / Harness / Método (Zona Verde)

O ouro para "otimização do Claude + combinação com ferramentas". Alvos diretos
de engenharia reversa (IDs curtos; completo via `notebooklm list`):

| ID (curto) | Caderno | Foco |
|---|---|---|
| `503b72ad` | **Maestros da IA** ⭐ | Otimização Claude (alvo original) |
| `bdbe6c87` | **CLAUDE DESIGN - missão MC** | Claude Design aplicado ao MC |
| `0d70d04a` | CLAUDE DESIGN (shared) | Claude Design (base) |
| `ef9cabdd` | Harness & Agent Design Patterns 2026 | Harness / agentes |
| `83521bcf` | CODE Harness Engineering (Engenharia de Rédeas) | Harness |
| `405d01ea` | CLAUDE AGENTES Dynamic Workflows - Agentic Orchestration | Orquestração agêntica |
| `4c871cba` | Claude Code Dynamic Workflow | Workflows Code |
| `59026848` | Claude Code - OpenSpec / SDD Spec Driven Development | Spec-driven |
| `129289b3` | CLAUDE _ Cadeia Estruturação Pensamento · LLM RAG AI Agent MCP | Raciocínio/RAG/MCP |
| `fc66cec7` | CLAUDE _ Script Google _ Integração Claude API e GASADK | Claude API |
| `e9817ef7` | TECH- Arquiteturas de IA: Rules, Skills, MCPs e Subagents | Rules/Skills/MCP/subagentes |
| `135d8a5b` | TECH- Skill Creator: Arquitetura de Agentes (Anthropic Cloud) | Skills |
| `5a0a8206` | TECH- Skills IA | Skills |
| `fbe59944` | MC- MCP Model Context Protocol _ MC | MCP |
| `1543810c` | TECH- CLAUDE CODE | Claude Code |
| `2543f5a4` | CLAUDE CODE Mythos | Claude Code |
| `8776d30b` | ARQUIVO- Claude Code | Claude Code (legado) |
| `e0652370` | Anthropic CLAUDE | Anthropic |
| `5efe4f54` | CLAUDE COWORK Felix Rieseberg Anthropic | Cowork |
| `00fb8c3f` | CLAUDE ARTEFACTS | Artifacts |
| `cc382b5f` | MC-ClaudeDesign-ASSUNTO | Claude Design método |
| `ada55783` | MC-ClaudeDesign-METODO | Claude Design método |
| `580d76f8` | TECH- Engenharia de Prompt Mestra no NotebookLM | Prompt |
| `0387bd2c` | TECH- Extensões NotebookLM | NotebookLM |
| `3755147b` | TECH- NotebookLM | NotebookLM |
| `7c2dc75c` | TECH- CAIXA DE FERRAMENTAS IA | Toolbox |
| `1cc920a3` | TECH- Manus AI | Agentes |
| `25fc3e19` | TECH- Antigravity + Stitch + Labs + Vertical AI | Vertical AI |
| `c77a7854` | TECH- IA VERTICAL Y Combinator full stack vertical ai | Vertical AI |
| `b71bf4ef` | MC- Meu Cumpadre - Vertical AI Agents | Vertical AI |
| `9c156052` | TECH- Intelligent Digital Ecosystems | Ecossistema |
| `6abe4365` | TECH- Pesquisa de Mercado com IA | Pesquisa IA |
| `654f9958` | Gestão Híbrida de Software: O Leme e Squads Agênticos | GHS/squads |
| `38cb39cf` | TECH- GHS Gestão Híbrida de Software | GHS |
| `0b18b5a9` | CODE _ AI Engineer | Eng. IA |
| `1ec5ea9f` | CODE Waldemar Neto - Dev Lab | Dev |
| `fab166e0` | CODE - Y COMBINATOR | Startups |
| `79de327d` | Automação Inteligente e Desenvolvimento Baseado em Especificações | SDD/automação |
| `eeed155e` | Oportunidades Mercado IA | Mercado IA |

> **~39 cadernos** neste cluster — é a coluna de partida da engenharia reversa.

---

## 3. Outras zonas verdes (buckets — contagem exata via §6)

- **MC- núcleo (estratégia/produto/INSS-público):** Router-Ethics, Teoria dos
  Jogos, Valuation, Captação, ADR-007 Precificação, BEPS/TCU, Tramitação
  Inteligente, Simbiose Fractal, Manifesto, Geometria Sagrada, etc.
- **TECH- stack/ferramentas:** ClickUp (várias), BPM/GHS, Gestão de Projetos+IA,
  Manus, Antigravity, etc.
- **Previdenciário público / mercado:** INSS frição, Perícia Médica, CPMI-INSS,
  Atividade Rural, Justiça 4.0 CNJ, Gov.br níveis, Honorários OAB/ACT.
- **Estudos DPE-BA (`cad1-8`, `Caderno_*`):** material de concurso (shared).
- **ARQUIVO- (tema público):** candidatos a limpeza/descarte.

---

## 4. 🔴 Zona soberana / PII (DE-IDENTIFICADA — não enumerada)

> Política §1. Aqui **só agregado**. O índice nominal vive na stack soberana.

- **`CASE-` / `CLIENTE`** — casos reais de beneficiário (PPP, aposentadoria, CAT,
  rural, bancário, etc.). **Nomes não reproduzidos.** Cada um carrega PII →
  tratamento exclusivo stack soberana, ciclo de vida do dossiê (ADR-009b).
- **`PESSOAL-`** — dados pessoais/familiares (constelação, saúde, relacionamento,
  espiritualidade, estudos do Matheus, etc.). Fora do escopo MC-negócio.
- **Contagem exata** dessas categorias: rodar `notebooklm-grid.py` **localmente**
  e manter a saída nominal **fora** do repo (só o agregado pode subir).

---

## 5. Método de síntese por-caderno (o "prompt síntese")

Para preencher a coluna "síntese" de cada caderno **verde**, rode na máquina
local (firewall: **nunca** sobre cadernos 🔴 com destino ao repo):

```bash
notebooklm use <id>
notebooklm summary                       # insight AI-gerado do caderno
# OU, mais controlado:
notebooklm ask "Em 5 bullets: (1) tese central do caderno, (2) 3 técnicas/insights \
acionáveis, (3) o que conecta ao Meu Cumpadre (método/harness/produto), (4) fontes \
de maior peso, (5) lacunas. Cite a fonte." --json --save-as-note --note-title "SÍNTESE-GRID"
notebooklm note get <note_id> > sintese-<id>.md   # exporta p/ colar na sessão web
```

> Saída `--json` = citações estruturadas (Proof-First). Colar as sínteses verdes
> na sessão web → viram a coluna do grid + insumo do Flywheel/MoR.

---

## 6. Regeneração reproduzível (PII-safe)

Script `notebooklm-grid.py` (mesmo diretório): lê `notebooklm list --json`,
classifica por prefixo, **redige a zona 🔴**, emite grid + contagens exatas.

```bash
notebooklm list --json > notebooks.json        # na máquina local logada
python notebooklm-grid.py notebooks.json > grid-deidentificado.md
```

Se `list` não suportar `--json`, me avise a saída de `notebooklm list --help` que
eu ajusto o parser.

---

## 7. Próximo: Método Engenharia Reversa MC

Com o território mapeado, a próxima sessão arquiteta o **Método ER-MC**: como
varrer o cluster §2, destilar com Proof-First, scorar (Router-Ethics), conectar
às 9 verticais Skybridge e devolver entregáveis — sem nunca cruzar o firewall 🔴.

---

*MC-INFRA-NotebookLM-Grid v0.1 · 2026-06-08 · mesa de trabalho · de-identificado ·
D > C > V · Proof-First. Contagens exatas pendentes de `notebooklm-grid.py`.*
