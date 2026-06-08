---
tipo: MISSION-BRIEF
codigo: MB-043
titulo: Housekeeping Vault pós-MB-042 — Arquivamento SPEC v0.1 + Cascata ERRATA Vocabulário + Reorganização Semântica + Reconciliação POPs + INDEXes
versao: 1.0
data: 2026-05-14
autor: Claude Opus 4.7 Cérebro 3.1 (cofounder C1) × Alessandro de Souza Neves (Founder/CEO)
executor: Claude Code Opus 4.7 (DELL Beto, Cérebro 2 — terminal HP ENVY)
destinatario_persistencia: Vault Obsidian Cérebro 2
duracao_estimada: 60-90 minutos
janela_execucao: A (pré-19/05, paralelo à operação Sister Claude.ai 3.2)
gate_validacao_founder: ANTES de cada Tarefa (T1→T8) + reporte estruturado pós-cada
referencia_documental:
  - MC-MB042-RELATORIO-SweepDossie-CerebrO1xCerebrO2-v1_0-2026-0514 (Drive 14Zd6Fi1ZwZRh76a2M1oslvf_uFp5muBn)
  - MC-CARTA-SUPERSEDED-SPEC-VisualLaw-PaletaJuridica-v0_1-2026-0514 (Drive 19sXI80JiYO9NS5i5jWsrW9T11fi_X5hu)
  - MC-CANONICO-Vocabulario-IdentidadeVisual-ERRATA-v1_0-2026-0514 (Drive 1JJxTMsKStWoZjcn8MBR2Rx4WZckqN4YH)
  - MC-PROMPTS-VisualLaw-B1-B4-Dossie-v0_2-PROVISIONAL-2026-0514 (Drive 1JYnXIJUxcAISkdUDDBhzBVCB_INMr5hE)
  - MC-MB040-SisterClaudeAi32-OperacaoClaudeDesign-v2_0-2026-0514 (Drive 1ZmhDZb1gcNdka1oxAswHBJIFHUDYBH2d)
hierarquia: Dignidade > Compliance > Viabilidade
ancora_principio: "O diamante é carbono que não desistiu da pressão."
---

# MB-043 — HOUSEKEEPING VAULT pós-MB-042

> **Por que este MB existe:** o MB-042 (sweep crítico Cérebro 1 × Cérebro 2, 14/05/2026 ~22h BRT) revelou 4 lacunas críticas + 4 desencontros estruturais no Vault. Cofounder C1 + Founder Alessandro decidiram em 14/05 ~23h BRT executar Caminho de Mínimo Desvio (Passo A integral já concluído em A.2-NOVO + A.3 + A.4). Este MB executa o Passo B: aplicação cirúrgica dessas decisões no Vault Obsidian + reconciliação técnica + criação de INDEXes faltantes + atualização CLAUDE.md raiz.

---

## 0 · IDENTIDADE DE ATIVAÇÃO

Você é o **executor operacional canônico do MC** (Cérebro 2 — Vault Obsidian) rodando na DELL do Beto via terminal HP ENVY. Opera sob:

- **Princípio #6** — Camadas de Segurança Operacional: hash SHA-256 + backup `.bak` + gate de pausa
- **Princípio #7** — Cadeia de Autorização Dual: cofounder Claude.ai produz conteúdo → founder valida → você persiste com hash-verify
- **Princípio #4** — Errata absorve, não inventa: jamais deletar; arquivar em `99-ARQUIVO-Legado/`
- **Princípio #29** — 99-ARQUIVO-Legado (quarentena institucional)
- **Princípio #1** — Inventário de Caminhos: `git status` + listagem da pasta-alvo antes de qualquer operação destrutiva

**Regras invioláveis desta sessão:**
1. Antes de qualquer operação destrutiva: listagem da pasta-alvo + hash SHA-256 dos arquivos a serem movidos
2. Toda operação de cópia/move: **Copy-Item + Test-Path destino + hash-verify destino == hash origem + Remove-Item origem** (atomicidade simulada)
3. Toda criação de arquivo: backup `.bak` da pasta-alvo se houver risco de conflito de nome
4. Pausa obrigatória ao final de cada Tarefa (T1...T8) com reporte estruturado
5. Se encontrar ambiguidade: PAUSAR e perguntar — não assumir
6. Vault path raiz: `G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Gestão Software\OBSIDIAN\MEU CUMPADRE\`
7. Documentação path raiz: `G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Gestão Software\Documentação\`

---

## 1 · CONTEXTO INSTITUCIONAL

### 1.1 Estado pré-MB-043 (consolidado MB-042)

**Cunhagens cofounder C1 hoje 14/05:**

| Artefato | Drive Doc | Vault Cérebro 2 | Status |
|---|---|---|---|
| SPEC Visual Law v0.1 PROVISIONAL | `1Hyrd-H13QQK0nedjYJ0WgK6AiZKaz93W` | `1KTEmx5I01HClccsijyvP8tOr8wzP1tXP` | ⚠️ **SUPERSEDED** (decisão founder 14/05 ~23h, pós-MB-042) — duplicação não-detectada de POPs §D.2 + §D.3 + SPEC Técnico v2.0 |
| Carta SUPERSEDED da SPEC v0.1 | `19sXI80JiYO9NS5i5jWsrW9T11fi_X5hu` | `1YJPN6M_bt6FGkMp8Vr-bJR8I8qZal2r1` | ✅ Persistida — documento institucional explicando arquivamento |
| ERRATA Vocabulário v1.0 | `1JJxTMsKStWoZjcn8MBR2Rx4WZckqN4YH` | `13X3yUAbskQ-bT9hlcFxlaaNNfCT1MtBu` | ⚠️ **CASCATA PENDENTE** (aplicar em v1.0 Vocabulário + SPEC Técnico v2.0 + Manifesto v2.0 + Selo Oficial v1.0) |
| Prompts B1-B4 v0.2 PROVISIONAL | `1JYnXIJUxcAISkdUDDBhzBVCB_INMr5hE` | `1df_aav7ZAlMGt6mz5slLxNib8_ndrGd3` | ⚠️ Reorganização semântica (sair de `01-IDENTIDADE/` → `04-OPERACAO/prompts/visuallaw/`) |
| MB-040 v2.0 reescrita | `1ZmhDZb1gcNdka1oxAswHBJIFHUDYBH2d` | `1i55ALDR4ZK1QJ5HPTnVJy-Jo6-_NKJas` | ⚠️ Reorganização semântica (sair de `01-IDENTIDADE/` → `04-OPERACAO/missions/sister-claude/`) |

**Achados estruturais MB-042 a resolver:**

- ⚠️ **Dessincronização POPs:** PARTE 1 v1.2 e PARTE 3 v1.3 — delta ~564 bytes/cada entre Vault×Doc (provavelmente banner ERRATA Lorrane aplicado 12/05 em Doc mas não propagado para Vault)
- ⚠️ **Duplicação interna Vault:** SPEC Técnico v2.0 em 2 paths · POPs Visual Law em 2 pastas (`04-OPERACAO/pops/` vs `04-OPERACAO/protocolos/visuallaw/`)
- ⚠️ **INDEXes faltantes:** INDEX-SPECS · INDEX-MANIFESTOS · INDEX-VOCABULARIO · INDEX-SELOS · INDEX-PROMPTS · INDEX-MISSIONS (no Vault só existem INDEX-ADRS · INDEX-PAUTAS · INDEX-PATCHES · INDEX-PRINCIPIOS)

### 1.2 Sister Claude.ai 3.2 em operação paralela

Founder está colando MB-040 v2.0 numa guia paralela Claude.ai (Sister Cérebro 3.2). Sister vai iterar prompts B1-B4 v0.2 com `claude.ai/design`. Este MB-043 NÃO bloqueia Sister — pode rodar em paralelo. Coordenação:

- Sister Claude.ai 3.2 **NÃO opera no Vault** (sem MCP Drive)
- Code DELL (você) **NÃO interage com Claude.ai/design**
- Comunicação cross-instância via Drive (sincronização manual founder)

---

## 2 · TAREFAS NUMERADAS (T1 → T8)

> **Gate de pausa obrigatório entre cada Tarefa.** Reportar e aguardar autorização founder.

### T1 — Criar pastas estruturais novas + sweep diagnóstico (5 min)

**Operação:**
1. Sweep diagnóstico (read-only): listar conteúdo atual de:
   - `01-IDENTIDADE/` (deve ter SPEC v0.1 SUPERSEDED + Carta + ERRATA Vocabulário + prompts B1-B4 + MB-040 + Vocabulário v1.0 + SPEC Reprodutibilidade v1.0 + Selo Oficial v1.0 + ERRATA Selo Oficial v1.0)
   - `01-IDENTIDADE/vocabulario/` (deve ter Vocabulário v1.0)
   - `02-ARQUITETURA/` (verificar duplicação SPEC Técnico v2.0)
   - `02-ARQUITETURA/specs/identidade-visual/` (deve ter SPEC Técnico v2.0 + SPEC Reprodutibilidade)
   - `04-OPERACAO/pops/` (versões antigas POPs Visual Law v1.0/v1.2)
   - `04-OPERACAO/protocolos/visuallaw/` (canônicas v1.2/v1.3)
   - `05-ESTRATEGIA/manifestos/` (Manifesto Identidade Visual v2.0)
   - `99-ARQUIVO-Legado/` (verificar se já existe; se sim, listar subpastas)

2. Criar pastas estruturais novas (se não existirem):
   - `99-ARQUIVO-Legado/specs-superseded/` (destino SPEC v0.1 + Carta)
   - `99-ARQUIVO-Legado/canonicos-pre-errata/` (destino Vocabulário v1.0 · SPEC Técnico v2.0 · Manifesto v2.0 · Selo Oficial v1.0 pós-cascata)
   - `99-ARQUIVO-Legado/erratas-aplicadas/` (destino ERRATA Vocabulário v1.0 pós-cascata)
   - `99-ARQUIVO-Legado/duplicacoes/` (destino SPEC Técnico v2.0 cópia duplicada)
   - `99-ARQUIVO-Legado/pops-antigos/` (destino POPs v1.0/v1.2 antigos)
   - `04-OPERACAO/prompts/visuallaw/` (destino prompts B1-B4 v0.2)
   - `04-OPERACAO/missions/sister-claude/` (destino MB-040 v2.0)

**Reporte T1:**
```
REPORTE T1 — MB-043
Data/hora: [ISO]
Sweep diagnóstico:
  - 01-IDENTIDADE/: [N arquivos, lista]
  - 01-IDENTIDADE/vocabulario/: [N arquivos]
  - 02-ARQUITETURA/: [SPEC Técnico v2.0 duplicado? sim/não]
  - 04-OPERACAO/pops/: [N versões antigas]
  - 04-OPERACAO/protocolos/visuallaw/: [N canônicas]
  - 99-ARQUIVO-Legado/: [subpastas existentes]
Pastas criadas:
  - [lista com paths absolutos]
Ambiguidades: [nenhuma | descrição]
PAUSA T2: ⏸️
```

---

### T2 — Arquivar SPEC Visual Law v0.1 + Carta SUPERSEDED em `99-ARQUIVO-Legado/specs-superseded/` (8 min)

**Contexto:** SPEC v0.1 está SUPERSEDED por decisão founder + cofounder C1 pós-MB-042. Carta SUPERSEDED já existe persistida (Drive Doc + Vault). Ambos artefatos vão para quarentena institucional. Versões originais preservadas (Princípio #4 + #29).

**Operação:**

1. Calcular hash SHA-256 atual de:
   - `01-IDENTIDADE/MC-SPEC-IdentidadeVisual-VisualLaw-PaletaJuridica-v0_1-PROVISIONAL-2026-0514.md`
   - `01-IDENTIDADE/MC-CARTA-SUPERSEDED-SPEC-VisualLaw-PaletaJuridica-v0_1-2026-0514.md`

2. **Atualizar frontmatter da SPEC v0.1** via `str_replace` adicionando bloco SUPERSEDED no topo (preservando conteúdo abaixo):

```yaml
> ⚠️ **SUPERSEDED — 2026-05-14 ~23h BRT**
> Status: ARQUIVADA em `99-ARQUIVO-Legado/specs-superseded/`
> Motivo: duplicação não-detectada de canônicos preexistentes (POPs Visual Law PARTE 2 §D.2 + §D.3 + SPEC Técnico v2.0)
> Substituída institucionalmente por: documentos canônicos preexistentes
> Carta SUPERSEDED: [[MC-CARTA-SUPERSEDED-SPEC-VisualLaw-PaletaJuridica-v0_1-2026-0514]]
> Decisão: founder Alessandro + cofounder C1 pós-MB-042
> Princípios aplicados: #4 #26 #29
```

3. Atualizar frontmatter do campo `status:` de `PROVISIONAL` para `SUPERSEDED`.

4. Move SPEC v0.1 + Carta SUPERSEDED para `99-ARQUIVO-Legado/specs-superseded/` (Copy-Item + hash-verify destino + Remove-Item origem):
   - Destino SPEC: `99-ARQUIVO-Legado/specs-superseded/MC-SPEC-IdentidadeVisual-VisualLaw-PaletaJuridica-v0_1-PROVISIONAL-2026-0514.md`
   - Destino Carta: `99-ARQUIVO-Legado/specs-superseded/MC-CARTA-SUPERSEDED-SPEC-VisualLaw-PaletaJuridica-v0_1-2026-0514.md`

5. **NÃO tocar** nas cópias Drive Documentação (gestão founder pós-MB-043).

**Reporte T2:**
```
REPORTE T2 — MB-043
SPEC v0.1 SUPERSEDED:
  - Hash origem: [SHA-256]
  - Frontmatter atualizado: ✅/❌
  - Path destino: 99-ARQUIVO-Legado/specs-superseded/...
  - Hash destino: [SHA-256] (deve incluir frontmatter atualizado)
Carta SUPERSEDED:
  - Path destino: 99-ARQUIVO-Legado/specs-superseded/...
  - Hash origem == hash destino: ✅
PAUSA T3: ⏸️
```

---

### T3 — Cascata ERRATA Vocabulário v1.0 — produzir Vocabulário Canônico v1.1 + auditar SPEC Técnico v2.0 + Manifesto v2.0 + Selo Oficial v1.0 (20 min)

**Contexto:** ERRATA v1.0 cunhada pelo founder Alessandro em 14/05/2026 ~14h BRT por análise Firewall OAB. Remove tagline:
- `DOIS PONTOS. UM ESPAÇO SEGURO.` (redundância visual com desenho)
- `TODOS OS DIREITOS. UM SÓ LUGAR.` (risco OAB — generaliza Direito)

Cascata necessária em 4 documentos canônicos que ainda mencionam a tagline removida.

#### T3.1 — Produzir Vocabulário Canônico v1.1

1. Ler conteúdo integral de `01-IDENTIDADE/vocabulario/MC-CANONICO-Vocabulario-IdentidadeVisual-v1_0-2026-0513.md`
2. Identificar §2 tagline (deve conter `DOIS PONTOS. UM ESPAÇO SEGURO. / TODOS OS DIREITOS. UM SÓ LUGAR.`)
3. Criar nova versão `MC-CANONICO-Vocabulario-IdentidadeVisual-v1_1-2026-0514.md` com:
   - Frontmatter atualizado: `versao: 1.1` · `data: 2026-05-14` · adicionar `substitui: MC-CANONICO-Vocabulario-IdentidadeVisual-v1_0-2026-0513.md` · `absorve_errata: MC-CANONICO-Vocabulario-IdentidadeVisual-ERRATA-v1_0-2026-0514.md`
   - **§2 tagline REMOVIDA inteiramente** (deletar a seção)
   - Adicionar callout em §2 (no lugar da seção removida): *"§2 — Tagline removida via ERRATA v1.0 aplicada em 14/05/2026 ~14h BRT por análise Firewall OAB (Estatuto OAB Lei 8.906/1994 + Provimento CFOAB 205/2021). Razão dupla: (a) `DOIS PONTOS. UM ESPAÇO SEGURO.` é redundante com o desenho da marca; (b) `TODOS OS DIREITOS. UM SÓ LUGAR.` configura risco de generalização de Direito. Decisão founder + formalização cofounder C1. Referência: [[MC-CANONICO-Vocabulario-IdentidadeVisual-ERRATA-v1_0-2026-0514]]."*
   - Demais seções preservadas (§1 frase-âncora · §3 pilares · §4 razão social · §5+ demais)
4. Persistir em `01-IDENTIDADE/vocabulario/MC-CANONICO-Vocabulario-IdentidadeVisual-v1_1-2026-0514.md`
5. Hash-verify pós-criação

#### T3.2 — Mover Vocabulário v1.0 para `99-ARQUIVO-Legado/canonicos-pre-errata/` + atualizar frontmatter com SUPERSEDED callout

#### T3.3 — Auditar SPEC Técnico v2.0 + Manifesto v2.0 + Selo Oficial v1.0

Ler conteúdo de cada e identificar menções à tagline removida:

- **SPEC Técnico v2.0** (`02-ARQUITETURA/specs/identidade-visual/MC-SPEC-IdentidadeVisual-Tecnico-v2_0-2026-0513.md`):
  - **CONFIRMADO menção:** §3 Camada 4 elemento 8 "Tagline final — DOIS PONTOS. UM ESPAÇO SEGURO. / TODOS OS DIREITOS. UM SÓ LUGAR. — caixa alta, tracking médio, cinza-bronze, duas linhas"
  - **CONFIRMADO menção:** §5.3 vocabulário institucional canônico, tabela linha 2: "Dois pontos. Um espaço seguro. Todos os direitos. Um só lugar." — Tagline final
  
- **Manifesto v2.0** (`05-ESTRATEGIA/manifestos/MC-MANIFESTO-IdentidadeVisual-v2_0-2026-0513.md`): ler integral e listar menções (não conhecido a priori)

- **Selo Oficial v1.0** (`01-IDENTIDADE/MC-CANONICO-IdentidadeVisual-SeloOficial-v1_0-2026-0513.md`): ler integral + também ler a ERRATA Selo Oficial v1.0 existente (`MC-CANONICO-IdentidadeVisual-SeloOficial-ERRATA-v1_0-2026-0514.md`) para entender qual ERRATA já está aplicada — listar menções à tagline

#### T3.4 — Reportar ao founder antes de aplicar cascata

**NÃO produzir v2.1 dos canônicos auditados ainda.** Apenas reportar:

```
REPORTE T3 — MB-043
T3.1 Vocabulário v1.1 produzido:
  - Path: 01-IDENTIDADE/vocabulario/MC-CANONICO-Vocabulario-IdentidadeVisual-v1_1-2026-0514.md
  - Hash: [SHA-256]
  - §2 tagline removida: ✅
T3.2 Vocabulário v1.0 arquivado:
  - Path: 99-ARQUIVO-Legado/canonicos-pre-errata/MC-CANONICO-Vocabulario-IdentidadeVisual-v1_0-2026-0513.md
  - Frontmatter SUPERSEDED callout adicionado: ✅
T3.3 Auditoria menções tagline:
  - SPEC Técnico v2.0: [§3 Camada 4 elem.8 ✅ + §5.3 tabela linha 2 ✅ — confirmadas]
  - Manifesto v2.0: [encontradas N menções nas §X, Y, Z — listar literalmente]
  - Selo Oficial v1.0: [N menções nas §X, Y]
  - ERRATA Selo Oficial v1.0 existente: [resumo executivo do que já foi corrigido]
Recomendação cofounder: aplicar cascata em SPEC Técnico v2.1 + Manifesto v2.1 + Selo Oficial v1.1 SE founder validar paths e seções a alterar.
PAUSA T4: ⏸️ — aguardar autorização founder para aplicar cascata efetiva nos 3 canônicos restantes
```

---

### T4 — Aplicar cascata ERRATA em SPEC Técnico v2.0 → v2.1 + Manifesto v2.0 → v2.1 (se aplicável) + Selo Oficial v1.0 → v1.1 (se aplicável) (15 min)

**SÓ EXECUTAR SE FOUNDER AUTORIZAR PÓS-T3.**

**Operação por documento:**

1. Criar nova versão (v2.1 ou v1.1) absorvendo ERRATA:
   - Para **SPEC Técnico v2.1**:
     - Em §3 Camada 4: **remover elemento 8 "Tagline final"** (composição passa a ter 7 elementos, não 8)
     - Em §5.3: **remover linha 2 da tabela vocabulário** ("Dois pontos. Um espaço seguro. Todos os direitos. Um só lugar." — Tagline final)
     - Adicionar callout no início de cada §alterada apontando para ERRATA
     - Frontmatter: `versao: 2.1` · `substitui: MC-SPEC-IdentidadeVisual-Tecnico-v2_0-2026-0513.md` · `absorve_errata: MC-CANONICO-Vocabulario-IdentidadeVisual-ERRATA-v1_0-2026-0514.md`
   - Para **Manifesto v2.1**: aplicar correções nas §menções identificadas em T3.3 (manter conteúdo institucional inalterado, apenas remover tagline literal)
   - Para **Selo Oficial v1.1**: aplicar correções nas §menções identificadas em T3.3

2. Persistir cada novo arquivo no mesmo path original (a versão antiga ainda está lá)

3. Mover cada versão antiga para `99-ARQUIVO-Legado/canonicos-pre-errata/` com frontmatter SUPERSEDED callout

4. Hash-verify de cada novo arquivo

5. Mover ERRATA Vocabulário v1.0 (após cascata aplicada) para `99-ARQUIVO-Legado/erratas-aplicadas/MC-CANONICO-Vocabulario-IdentidadeVisual-ERRATA-v1_0-2026-0514.md` com frontmatter callout "STATUS: APLICADA — cascata executada em MB-043 T4"

**Reporte T4:**
```
REPORTE T4 — MB-043
SPEC Técnico v2.1:
  - Path: 02-ARQUITETURA/specs/identidade-visual/MC-SPEC-IdentidadeVisual-Tecnico-v2_1-2026-0514.md
  - Hash: [SHA-256]
  - §3 Camada 4 elem.8 removido: ✅
  - §5.3 tabela linha 2 removida: ✅
Manifesto v2.1: [se aplicável]
  - Path: 05-ESTRATEGIA/manifestos/MC-MANIFESTO-IdentidadeVisual-v2_1-2026-0514.md
  - Menções tagline removidas: [N localizações]
Selo Oficial v1.1: [se aplicável]
  - Path: 01-IDENTIDADE/MC-CANONICO-IdentidadeVisual-SeloOficial-v1_1-2026-0514.md
  - Menções tagline removidas: [N localizações]
Arquivamentos em 99-ARQUIVO-Legado/canonicos-pre-errata/:
  - SPEC Técnico v2.0 ✅
  - Manifesto v2.0 ✅ (se aplicável)
  - Selo Oficial v1.0 ✅ (se aplicável)
ERRATA Vocabulário v1.0 → 99-ARQUIVO-Legado/erratas-aplicadas/ ✅
PAUSA T5: ⏸️
```

---

### T5 — Reorganização semântica dos artefatos cofounder C1 (5 min)

**Contexto:** prompts B1-B4 v0.2 + MB-040 v2.0 foram inicialmente persistidos em `01-IDENTIDADE/` por urgência. Pasta semanticamente correta:
- Prompts → `04-OPERACAO/prompts/visuallaw/`
- MB-040 v2.0 → `04-OPERACAO/missions/sister-claude/`

**Operação:**

1. Move `01-IDENTIDADE/MC-PROMPTS-VisualLaw-B1-B4-Dossie-v0_2-PROVISIONAL-2026-0514.md` → `04-OPERACAO/prompts/visuallaw/MC-PROMPTS-VisualLaw-B1-B4-Dossie-v0_2-PROVISIONAL-2026-0514.md` (Copy-Item + hash-verify + Remove-Item)

2. Move `01-IDENTIDADE/MC-MB040-SisterClaudeAi32-OperacaoClaudeDesign-v2_0-2026-0514.md` → `04-OPERACAO/missions/sister-claude/MC-MB040-SisterClaudeAi32-OperacaoClaudeDesign-v2_0-2026-0514.md`

3. **NÃO move** ERRATA Vocabulário v1.0 (já tratada em T4)

**Reporte T5:**
```
REPORTE T5 — MB-043
Prompts B1-B4 v0.2:
  - Path origem: 01-IDENTIDADE/...
  - Path destino: 04-OPERACAO/prompts/visuallaw/...
  - Hash preservado: ✅
MB-040 v2.0:
  - Path origem: 01-IDENTIDADE/...
  - Path destino: 04-OPERACAO/missions/sister-claude/...
  - Hash preservado: ✅
PAUSA T6: ⏸️
```

---

### T6 — Reconciliação dessincronização POPs Visual Law PARTE 1 + PARTE 3 (10 min)

**Contexto MB-042 §1.1:**
- **PARTE 1 v1.2:** Vault tem 53.135b hash `26BDD209`, Doc tem 53.699b hash `3FFE7DA4` (delta +564b em Doc)
- **PARTE 3 v1.3:** Vault tem 107.723b hash `E9AA3D1D`, Doc tem 108.287b hash `BF4317B0` (delta +564b em Doc)
- **PARTE 2 v1.3:** sincronizada (ambas 56.326b)

**Hipótese de causa (MB-042):** Doc tem banner `> ⚠️ SUPERSEDIDO PARCIALMENTE — ERRATA 12/05/2026 Lohane → Lorrane` aplicado em 12/05 que não foi propagado para Vault. Banner tem ~564 bytes (5-6 linhas markdown). Confirma com hipótese de tamanho.

**Decisão arquitetural cofounder C1:** Doc é versão autoritativa (banner ERRATA Lorrane é canônico institucional aplicado por founder em 12/05). Sincronizar Vault ← Doc preservando frontmatter Vault.

**Operação:**

1. Calcular hashes atuais SHA-256:
   - Vault `04-OPERACAO/protocolos/visuallaw/MC-POP-VisualLaw-DossieSelado-PARTE1-v1_2-2026-0502.md`
   - Vault `04-OPERACAO/protocolos/visuallaw/MC-POP-VisualLaw-DossieSelado-PARTE3-v1_3-2026-0502.md`
   - Doc `Documentação/0 FIDUCIÁRIO DIGITAL DE DOSSIÊS PREVIDENCIÁRIOS PARA HIPERVULNERÁVEIS ADR-009/DOSSIÊ obra de arte/KIT/MC-POP-VisualLaw-DossieSelado-PARTE1-v1_2-2026-0502.md` (ou path equivalente — pode haver múltiplas cópias Doc)
   - Idem PARTE 3

2. Verificar empiricamente conteúdo Doc PARTE 1: confirmar presença do banner SUPERSEDIDO PARCIALMENTE no topo

3. Backup `.bak` da versão Vault antes de qualquer modificação:
   - `MC-POP-VisualLaw-DossieSelado-PARTE1-v1_2-2026-0502.md.bak-pre-MB043-2026-0514`
   - `MC-POP-VisualLaw-DossieSelado-PARTE3-v1_3-2026-0502.md.bak-pre-MB043-2026-0514`

4. Aplicar banner ERRATA Lorrane no topo das versões Vault (acima do frontmatter, copiando exatamente do Doc):

```markdown
> ⚠️ **SUPERSEDIDO PARCIALMENTE — ERRATA 12/05/2026**
> Menções a "Lohane" neste documento devem ser lidas como "Jéssica Lorrane Plan001 (OAB-GO 60.378)" — mesma pessoa, grafia canônica.
> Ref: `MC-PATCH-MEMO-v3_0-4-ErrataLorrane-v2_0-DEFINITIVA.md` (vault: `03-GOVERNANCA/patches/`).
> Selo original do documento preservado abaixo. Hash `sha256_corpo` permanece válido (banner está acima do frontmatter).

---
```

E adicionar campos no frontmatter Vault:

```yaml
supersedido_parcialmente: true
patch_supersedente: MC-PATCH-MEMO-v3_0-4-ErrataLorrane-v2_0-DEFINITIVA.md
data_supersedencia: 2026-05-12
```

5. Hash-verify pós-modificação. Esperado: ambas Vault PARTE 1 e PARTE 3 agora com tamanho ≈ Doc (~53.699b e ~108.287b respectivamente). Hashes podem variar ligeiramente do Doc por diferenças de line endings — aceitável se delta ≤ 50 bytes.

**Reporte T6:**
```
REPORTE T6 — MB-043
PARTE 1 v1.2:
  - Hash Vault pré-modificação: [SHA-256] / tamanho: [bytes]
  - Hash Doc autoritativo: [SHA-256] / tamanho: [bytes]
  - Backup .bak criado: ✅
  - Banner ERRATA Lorrane aplicado: ✅
  - Hash Vault pós-modificação: [SHA-256] / tamanho: [bytes]
  - Delta vs Doc: [N bytes — aceitável se ≤ 50]
PARTE 3 v1.3: [mesmo padrão]
Anomalias detectadas: [nenhuma | descrição]
PAUSA T7: ⏸️
```

---

### T7 — Consolidar duplicação interna Vault (SPEC Técnico v2.0 em 2 paths · POPs em 2 pastas) (8 min)

**Contexto MB-042 §1.2:**

- **SPEC Técnico v2.0** duplicado em:
  - `02-ARQUITETURA/MC-SPEC-IdentidadeVisual-Tecnico-v2_0-2026-0513.md` ❌ duplicada (path incorreto)
  - `02-ARQUITETURA/specs/identidade-visual/MC-SPEC-IdentidadeVisual-Tecnico-v2_0-2026-0513.md` ✅ canônica (path correto)

⚠️ **Nota MB-043:** se T4 aplicou cascata ERRATA, o canônico agora é v2.1 (não v2.0). T7 trata APENAS da duplicação física de versões anteriores (v2.0 SUPERSEDED + v2.1 nova canônica). Manter v2.1 apenas em `02-ARQUITETURA/specs/identidade-visual/`.

- **POPs Visual Law** em 2 pastas:
  - `04-OPERACAO/pops/` (versões v1.0 + v1.2 antigas — vão para legado)
  - `04-OPERACAO/protocolos/visuallaw/` ✅ canônicas correntes (v1.2/v1.3)

**Operação:**

1. **SPEC Técnico:**
   - Move `02-ARQUITETURA/MC-SPEC-IdentidadeVisual-Tecnico-v2_0-2026-0513.md` (cópia duplicada path incorreto) → `99-ARQUIVO-Legado/duplicacoes/MC-SPEC-IdentidadeVisual-Tecnico-v2_0-2026-0513-DUPLICATA-2026-0514.md` com frontmatter callout "STATUS: DUPLICATA arquivada — canônica em `02-ARQUITETURA/specs/identidade-visual/`"
   - **NÃO mover** o canônico em `specs/identidade-visual/` — esse é o autoritativo

2. **POPs antigos:**
   - Listar conteúdo de `04-OPERACAO/pops/` (deve ter PARTE 1 v1.0 + v1.2 · PARTE 2 v1.0 + v1.2 · PARTE 3 v1.0 + v1.2)
   - Move cada arquivo para `99-ARQUIVO-Legado/pops-antigos/` preservando estrutura de pasta + adicionar frontmatter callout SUPERSEDED em cada

3. Verificar que `04-OPERACAO/pops/` está vazia → manter pasta vazia (referência semântica) OU criar README.md na pasta indicando "Pasta vazia. POPs canônicos correntes em `04-OPERACAO/protocolos/visuallaw/`. POPs antigos em `99-ARQUIVO-Legado/pops-antigos/`."

**Reporte T7:**
```
REPORTE T7 — MB-043
SPEC Técnico v2.0 duplicata:
  - Path origem: 02-ARQUITETURA/...
  - Path destino: 99-ARQUIVO-Legado/duplicacoes/...
  - Hash preservado: ✅
POPs antigos arquivados:
  - PARTE 1 v1.0: ✅ → 99-ARQUIVO-Legado/pops-antigos/
  - PARTE 1 v1.2: ✅ → 99-ARQUIVO-Legado/pops-antigos/
  - PARTE 2 v1.0: ✅
  - PARTE 2 v1.2: ✅
  - PARTE 3 v1.0: ✅
  - PARTE 3 v1.2: ✅
04-OPERACAO/pops/ pós-limpeza: [vazia | README.md criado]
PAUSA T8: ⏸️
```

---

### T8 — Criar INDEXes faltantes + atualizar CLAUDE.md raiz Vault + log consolidado (12 min)

**Contexto MB-042 §5 Nível 2:** existem apenas `INDEX-ADRS.md`, `INDEX-PAUTAS.md`, `INDEX-PATCHES.md`, `INDEX-PRINCIPIOS.md` no Vault. Faltam 6 INDEXes críticos.

**Operação:**

1. **Criar `02-ARQUITETURA/specs/INDEX-SPECS.md`** com entradas:
```markdown
# INDEX-SPECS — Vault MC

| Código | Versão | Path canônico | Status | Substitui |
|---|---|---|---|---|
| MC-SPEC-IdentidadeVisual-Tecnico | v2.1 (ou v2.0 se T4 não rodou) | 02-ARQUITETURA/specs/identidade-visual/MC-SPEC-IdentidadeVisual-Tecnico-v2_1-2026-0514.md | ✅ SELADO | v1.0, v2.0 |
| MC-SPEC-IdentidadeVisual-Reprodutibilidade | v1.0 | 01-IDENTIDADE/MC-SPEC-IdentidadeVisual-Reprodutibilidade-v1_0-2026-0514.md | ✅ Vigente | — |
| MC-SPEC-IdentidadeVisual-VisualLaw-PaletaJuridica | v0.1 | 99-ARQUIVO-Legado/specs-superseded/... | ❌ SUPERSEDED (MB-043) | — |
```

2. **Criar `05-ESTRATEGIA/manifestos/INDEX-MANIFESTOS.md`** com entradas para Manifesto Identidade Visual v2.1 (ou v2.0) + futuros manifestos.

3. **Criar `01-IDENTIDADE/vocabulario/INDEX-VOCABULARIO.md`** com:
| Código | Versão | Path | Status |
|---|---|---|---|
| MC-CANONICO-Vocabulario-IdentidadeVisual | v1.1 | 01-IDENTIDADE/vocabulario/MC-CANONICO-Vocabulario-IdentidadeVisual-v1_1-2026-0514.md | ✅ Vigente |
| MC-CANONICO-Vocabulario-IdentidadeVisual | v1.0 | 99-ARQUIVO-Legado/canonicos-pre-errata/... | ❌ SUPERSEDED |
| MC-CANONICO-Vocabulario-IdentidadeVisual-ERRATA | v1.0 | 99-ARQUIVO-Legado/erratas-aplicadas/... | ✅ APLICADA |

4. **Criar `01-IDENTIDADE/INDEX-SELOS.md`** com Selo Oficial v1.1 (ou v1.0) + ERRATA Selo Oficial v1.0.

5. **Criar `04-OPERACAO/prompts/INDEX-PROMPTS.md`** com prompts B1-B4 v0.2 + futuros.

6. **Criar `04-OPERACAO/missions/INDEX-MISSIONS.md`** com:
| Código | Status | Path | Data |
|---|---|---|---|
| MB-029 | ✅ Concluído (14/05) | logs antigos | Anti-Injection ADR-016 |
| MB-038 | ✅ Concluído (14/05) | logs | Sprint 2 RIPDs |
| MB-039 | ✅ Concluído (14/05) | logs | Pacote 30 docs Juliana |
| MB-040 v2.0 | 🟡 Em execução (14/05) | 04-OPERACAO/missions/sister-claude/... | Sister Claude.ai 3.2 |
| MB-042 | ✅ Concluído (14/05) | 04-OPERACAO/logs/... | Sweep crítico |
| MB-043 | 🟡 Em execução (14/05) | este arquivo + log T8 | Housekeeping |

7. **Atualizar `CLAUDE.md` raiz Vault** via `str_replace`:
   - Bumpar metadata: `*MC-CLAUDE.md v[bump] | 2026-05-14 | pós-MB-043 Housekeeping*`
   - Adicionar/atualizar entradas em "Fontes Canônicas":
     - Vocabulário v1.1 (substitui v1.0)
     - SPEC Técnico v2.1 (se T4 rodou) ou manter v2.0
     - Manifesto v2.1 (se T4 rodou)
     - Selo Oficial v1.1 (se T4 rodou)
     - SPEC Visual Law v0.1 → marcar como ARQUIVADA
   - Adicionar em "Documentos relacionados":
     - Vocabulário v1.1
     - Prompts B1-B4 v0.2
     - MB-040 v2.0
     - MB-042 Relatório
     - MB-043 (este)
     - Carta SUPERSEDED SPEC v0.1

8. **Produzir log consolidado** em `04-OPERACAO/logs/MC-LOG-MB043-Housekeeping-Vault-2026-0514.md` com:
   - Sumário T1-T8 (status + hashes)
   - Listagem completa de movimentações arquivadas
   - Decisões cofounder C1 + founder
   - Princípios aplicados (#1, #4, #6, #7, #15, #26, #29)
   - Próximos passos (revisão pós-Juliana 19/05)

**Reporte T8 (FINAL):**
```
REPORTE T8 — MB-043
INDEXes criados:
  - INDEX-SPECS: ✅
  - INDEX-MANIFESTOS: ✅
  - INDEX-VOCABULARIO: ✅
  - INDEX-SELOS: ✅
  - INDEX-PROMPTS: ✅
  - INDEX-MISSIONS: ✅
CLAUDE.md atualizado: ✅
  - Backup .bak criado: ✅
  - Hash pré-modificação: [SHA-256]
  - Hash pós-modificação: [SHA-256]
Log consolidado MB-043: 04-OPERACAO/logs/MC-LOG-MB043-Housekeeping-Vault-2026-0514.md
  - Hash: [SHA-256]
FIM MB-043 — aguardar fechamento founder.
```

---

## 3 · CRITÉRIO DE SUCESSO (8 entregáveis)

✅ T1 — Pastas estruturais novas criadas + sweep diagnóstico
✅ T2 — SPEC Visual Law v0.1 + Carta SUPERSEDED arquivadas em `99-ARQUIVO-Legado/specs-superseded/`
✅ T3 — Vocabulário Canônico v1.1 produzido + v1.0 arquivada + auditoria reportada
✅ T4 — Cascata ERRATA aplicada em SPEC Técnico v2.1 + Manifesto v2.1 + Selo Oficial v1.1 (conforme autorização founder pós-T3)
✅ T5 — Prompts B1-B4 v0.2 + MB-040 v2.0 reorganizados em pastas semânticas
✅ T6 — POPs PARTE 1 + PARTE 3 reconciliados Vault ← Doc (banner ERRATA Lorrane aplicado)
✅ T7 — Duplicação SPEC Técnico v2.0 + POPs antigos arquivados
✅ T8 — 6 INDEXes criados + CLAUDE.md atualizado + log consolidado

Cada entregável com hash SHA-256 verificado + cópia espelho preservada em Documentação/ quando aplicável.

---

## 4 · FORMATO DE REPORTE (após cada Tarefa)

```
REPORTE T[N] — MB-043
Data/hora: [ISO 8601]
Operação: [resumo executado]
Arquivos criados/modificados/movidos:
  - [path 1] · SHA-256: [hash] · operação: [criação | move | str_replace]
  - [path 2] · SHA-256: [hash]
Validação:
  - hashes verificados: ✅/❌
  - Documentação/ NÃO alterada: ✅ (este MB toca APENAS o Vault)
  - Backups .bak criados onde aplicável: ✅/❌
Anomalias detectadas: [nenhuma | descrição]
Pausa para autorização T[N+1]: ⏸️
```

---

## 5 · RESTRIÇÕES INVIOLÁVEIS DESTE MB

❌ **NÃO tocar** em arquivos do `Documentação/` (Cérebro 1) — este MB opera APENAS no Vault `OBSIDIAN/MEU CUMPADRE/` (Cérebro 2)
❌ **NÃO deletar** nenhum arquivo — Princípio #4 + #29 (Errata absorve + 99-ARQUIVO-Legado)
❌ **NÃO criar** nada em `03-GOVERNANCA/` (escopo limitado a 01-IDENTIDADE, 02-ARQUITETURA, 04-OPERACAO, 05-ESTRATEGIA, 99-ARQUIVO-Legado)
❌ **NÃO modificar** ADRs já seladas (007-016)
❌ **NÃO modificar** POPs Visual Law canônicos correntes em conteúdo — APENAS adicionar banner ERRATA Lorrane no topo (T6)
❌ **NÃO usar** Move-Item — usar sempre Copy-Item + hash-verify + Remove-Item (atomicidade)
❌ **NÃO declarar** tarefa completa sem reporte estruturado + hash-verify
❌ **NÃO pular** gate de pausa entre tarefas
❌ **NÃO interagir** com `claude.ai/design` ou Sister Claude.ai 3.2 (operação paralela isolada)
❌ **NÃO assumir** ambiguidade — pausar e perguntar founder

✅ Pode (e deve): pausar e perguntar em qualquer ambiguidade
✅ Pode (e deve): propor melhorias ao final de cada reporte T
✅ Deve: validar empíricamente o conteúdo do Doc autoritativo antes de propagar para Vault (T6)
✅ Deve: produzir log consolidado final em T8

---

## 6 · ÂNCORA

> **Provérbios 31:8** — "Abre a tua boca a favor do mudo."

O ecossistema MC opera com diamante institucional quando cada decisão é auditável, cada artefato é rastreável, cada erro é reconhecido e arquivado em vez de apagado. Este MB transforma o reconhecimento honesto do erro cofounder C1 em 13/05 (SPEC v0.1 cunhada sem sweep prévio) em **infraestrutura institucional limpa**: SUPERSEDED reconhecido, cascata ERRATA aplicada, INDEXes criados, Vault auditável.

**Lucro é combustível. Causa é destino. Jogo é infinito.**

**Hierarquia:** Dignidade > Compliance > Viabilidade
**Selo:** "O diamante é carbono que não desistiu da pressão."
**Confidência founder:** "É eu e tu."

∞

---

**FIM DO MB-043**
**Autor:** Claude Opus 4.7 Cérebro 3.1 (cofounder C1) × Alessandro de Souza Neves (Founder/CEO)
**Destinatário:** Claude Code Opus 4.7 (DELL Beto, Cérebro 2)
**Data:** 14 de maio de 2026 ~23h30 BRT
