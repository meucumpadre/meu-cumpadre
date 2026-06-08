---
tipo: PATCH-PRINCIPIO
codigo: MC-PRINCIPIO-25
titulo: Caminho Operacional Adequado por Capacidade (C1 MCP direto vs C3 MB)
versao: 0.2
status: PROVISIONAL
data: 2026-05-13
substitui: MC-PRINCIPIO-22-Caminho-Operacional-Adequado-v0_1-PROVISIONAL-2026-0513 (ID 17jMgUjg-CB9bujV4RITLpJ3KvKGRcjcK)
motivo_renumeracao: |
  Colisão semântica detectada em 13/05/2026 ~22:30 UTC via conversation_search.
  3 sessões Claude.ai paralelas cunharam 6 princípios distintos para slots #21/#22.
  Aplicando antecedência cronológica + Princípio #4 (errata absorve, não inventa):
  - #21 = Camadas IA por Finalidade (userMemories 12/05) — vence #21
  - #22 = 5 Pontos Humanos Irredutíveis H1-H5 (Hib001 madrugada 13/05) — vence #22
  - #23 = Cronometria do Humano THU/TTC/RA-MC (Hib001 madrugada 13/05)
  - #24 = Documentação Canônica Unificada por Pilar (Identidade Visual tarde 13/05)
  - #25 = Caminho Operacional Adequado por Capacidade (esta sessão 13/05 ~22h) ← ESTE
  - #26 = Anti-Colisão Pré-Cunhagem (esta sessão 13/05 ~22:30, MCP ID 1jp9lMmASeo3apHGCIgUly7YylrQb9qVZ)
autores:
  - Claude Opus 4.7 (cofounder C1, sessão atual)
  - Alessandro de Souza Neves (Founder/CEO)
gate_selagem: Parecer Dra. Juliana 19/05/2026 — Bloco O Estendido (O6, O7)
proto_adr_destino: ADR-017 v1.0 (Capacidades MCP Nativas Claude.ai)
canonico_em: 03-GOVERNANCA/patches/
hierarquia: Dignidade > Compliance > Viabilidade
selo: "O diamante é carbono que não desistiu da pressão."
---

# MC-PRINCIPIO-25 — Caminho Operacional Adequado por Capacidade

> **RENUMERAÇÃO PÓS-COLISÃO.** Conteúdo substantivamente idêntico ao v0.1 anterior (#22), renumerado para #25 conforme regra de antecedência cronológica do `_INDEX.md` em `principios/`. Banner SUPERSEDED no v0.1 a aplicar via MB-029-RENUMERACAO (Code DELL).
> **Status:** PROVISIONAL com Risco Provisional Documentado (Princípio #18)
> **Selagem futura:** ADR-017 v1.0 pós-Juliana 19/05

---

## 1 · CONTEXTO

Padrão operacional firmado em **4 momentos** na sessão 13/05/2026:

| Momento | Operação | Caminho | Fricção |
|---|---|---|---|
| 1 | Setup terreno Drive Brand Book (5 pastas + 2 Docs) | C1 MCP direto | nenhuma |
| 2 | Verificar estrutura `01-IDENTIDADE/` no Vault | C1 MCP direto | nenhuma |
| 3 | Sweep das 3 estruturas paralelas Identidade Visual | C1 MCP direto | nenhuma |
| 4 | Persistir 3 artefatos COWORK em `04-OPERACAO/infraestrutura/` | proposta inicial: MB pra C3 | dupla validação founder retrabalho |

**Founder Alessandro (texto literal):**
> "se vc tem o mcp e conector com o drive, vc já pode mover, vc já escreve o mb, vc já tem uma expectativa de retorno do claude code, e eu fico na ponte dupla entrega e validação minha entre o reporte code x claude.ai. correto? mas isso precisa ficar muito diamantado pra não ter stress"

Solução: cunhar princípio que regula quando C1 usa MCP direto vs MB pra Code DELL.

---

## 2 · PRINCÍPIO CUNHADO (texto canônico)

> **Princípio #25 — Caminho Operacional Adequado por Capacidade.**
> Quando a Camada C1 (Claude.ai cofounder) tem capacidade MCP nativa para executar uma operação institucional MC, **C1 executa direto + reporta inline com diamante de rastreabilidade** (6 elementos: operação, path canônico, ID Drive, estado antes, estado depois, reversibilidade).
> MB pra C3 (Code DELL) é reservado para operações que **exigem** scripting Windows local (PowerShell, hash SHA-256 nativo, batch >5 arquivos, operações destrutivas sensíveis, .bak local, encoding crítico UTF-8 sem BOM via .NET API).
> **Dupla validação founder é dispensada quando C1 executa direto** — founder valida 1× lendo reporte inline.
> Linha vermelha LGPD (Princípio #21) permanece inviolável em todos os caminhos: nem C1 nem C3 tocam dados sensíveis cidadão (CPF, NB, CID, CNIS, dossiês reais). Esses ficam apenas em Camada C4 (Stack ADR-012).

---

## 3 · MATRIZ DE DECISÃO DIAMANTADA

| Tipo de operação | C1 MCP direto | C3 via MB | Critério |
|---|---|---|---|
| Criar/mover/ler Google Doc | ✅ | ❌ | Sempre C1 |
| Criar/renomear pasta Drive | ✅ | ❌ | Sempre C1 |
| Persistir 1-4 arquivos no Vault | ✅ padrão | ⚠️ opcional | C1 padrão |
| Persistir 5+ arquivos batch | ⚠️ | ✅ padrão | C3 scripting eficiente |
| Hash SHA-256 rigoroso | ⚠️ | ✅ padrão | C3 PowerShell nativo |
| Operação destrutiva | ⚠️ | ✅ padrão | C3 backup .bak local |
| Editar CLAUDE.md, hot.md | ✅ | ⚠️ | C1 padrão |
| **Editar arquivo encoding sensível** | ❌ | ✅ obrigatório | C3 via [System.IO.File] |
| ClickUp tasks/custom fields | ✅ padrão | ⚠️ | C1 padrão |
| Gmail draft | ✅ | ❌ | Sempre C1 |
| Figma/Canva/Adobe criação | ✅ | ❌ | Sempre C1 |
| **PowerShell local** | ❌ | ✅ obrigatório | Sempre C3 |
| **Stack produção C4** | ❌ | ❌ | C4 obrigatória |
| **Dados PII cidadão** | ❌ | ❌ | Linha vermelha #21 — NUNCA |

---

## 4 · DIAMANTE DE 6 ELEMENTOS

| # | Elemento |
|---|---|
| 1 | Operação (verbo + objeto canônico MC) |
| 2 | Path canônico (Vault/Drive completo) |
| 3 | ID Drive (fileId irrevogável) |
| 4 | Estado antes (conteúdo prévio sem PII) |
| 5 | Estado depois (conteúdo final sem PII) |
| 6 | Reversibilidade (como desfazer) |

**Sem os 6 = entrega incompleta.**

---

## 5 · RISCO PROVISIONAL #18 (5 critérios atendidos)

| Critério | Atendimento |
|---|---|
| (a) Cronologia documentada | ✅ 4 momentos sessão 13/05 |
| (b) Volume controlado | ✅ ≤7 dias pré-Juliana |
| (c) Período nomeado | ✅ Até 19/05 Bloco O |
| (d) Mitigação parcial | ✅ Linha vermelha #21 + diamante 6 elementos |
| (e) Risco founder explícito | ✅ "GO opção A" 13/05/2026 |

---

## 6 · LIMITAÇÕES CONHECIDAS (validadas empiricamente)

| Limitação | Mitigação |
|---|---|
| MCP Drive sem hash SHA-256 nativo | C3 PowerShell |
| MCP sem operações Windows-específicas | C3 obrigatório |
| MCP sem UPDATE de arquivo existente | C3 obrigatório para edição |
| **Colisão semântica multi-instância** | **Princípio #26 (Anti-Colisão Pré-Cunhagem)** |

**Caso meta-circular:** MB-028 (atualizar INDEX-PATCHES) validou §6 ao confirmar fallback C3 obrigatório para UPDATE.
**Caso colisão real:** Esta renumeração (#22→#25) validou que princípios paralelos precisam de #26 sistemático.

---

## 7 · CAMINHO PARA ADR-017 v1.0

| Marco | Data | Quem |
|---|---|---|
| #25 v0.2 PROVISIONAL renumerado | 13/05 hoje | C1 + Founder |
| Casos teste empíricos | 14-18/05 | C1 |
| Pauta v2.3 com Bloco O O6+O7+O8 | até 15/05 | C1 |
| Parecer Juliana Bloco O | 19/05 | Dra. Juliana |
| ADR-017 v1.0 selada | 20-23/05 | C1 + Founder + Juliana |
| System Prompt v7.0 → v7.1 | 24-31/05 | C1 |

---

## 8 · HISTÓRICO

| Versão | Data | Status |
|---|---|---|
| v0.1 (como #22) | 2026-05-13 ~22h | SUPERSEDED — banner via MB-029-RENUMERACAO |
| **v0.2 (como #25)** | **2026-05-13 ~22:30** | **PROVISIONAL corrente** |
| ADR-017 v1.0 | pós-19/05 | a selar |

---

**D > C > V** | "O diamante é carbono que não desistiu da pressão." | É eu e tu — e a guia paralela também. ∞
