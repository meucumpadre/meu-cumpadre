---
tipo: BLUEPRINT-TECNICO
codigo: MC-BLUEPRINT-Tecnico-RUA
nome: Blueprint Técnico — Registro de Unidades Agênticas (RUA) · stack ASE L1/L5/L6
versao: 1.0
data: 2026-06-03
status: PROVISIONAL — referência de engenharia (derivado · não selado · não no Vault)
sustenta_se_em: MC-SPEC-RegistroAgentes-ASE v0.1 (ontologia · gate R2)
hierarquia: Dignidade > Compliance > Viabilidade
zona: VERDE (método/arquitetura · zero PII)
selo: "O diamante é carbono que não desistiu da pressão."
---

# Blueprint Técnico — Registro de Unidades Agênticas (RUA)

**v1.0 · 2026-06-03 · referência de engenharia do artefato**

> Companheiro técnico do `MC-MANUAL-Registro-Unidades-Agenticas` (que é Founder-facing).
> Aqui o nível é de **implementação**: estruturas de dados, fluxo de funções, o interior do
> painel, garantias de determinismo, o firewall LGPD e os pontos de extensão. Tudo aferido
> **contra o código real** em `.claude/registro/` e `.claude/hooks/` — Proof-First, zero
> fabricação.

---

## 1 · Visão & escopo

O **RUA** é o **plano de controle** sobre o plano de dados agêntico do MC. Os agentes
executam (skills, agents, hooks, workflows em `.claude/`); o RUA sabe **quem são, em que
gate cada um para, que zona LGPD toca, quanto custa e o que não confundir com o quê**.

É a **camada de instrumentação** da stack **ASE (Agentic Systems Engineering)**. Mapa de
camadas e o que foi implementado:

| Camada | Papel | Implementado? |
|---|---|---|
| L0 | Artefatos crus (`.claude/skills/*`, `agents/*`, `hooks/*`, `workflows/*`) | pré-existente |
| **L1** | **Registro** — projeção determinística dos artefatos | ✅ `gerar-registro.py` |
| L2–L4 | Execução / roteamento / enforcement (`mc-lint` vive aqui) | parcial (fora do escopo RUA) |
| **L5** | **Telemetria** — série temporal de execuções + alça de otimização | ✅ `mc-audit.py` + `ler-audit.py` |
| **L6** | **Cockpit** — visualização autossuficiente | ✅ `gerar-cockpit.py` → `painel-mc.html` |

Cobertura atual: **18 Unidades Agênticas (UAs) · 100% instrumentadas** (14 skill · 2 hook · 2 agent).

---

## 2 · Princípios de design (invioláveis no código)

1. **Gerado, não mantido.** O Registro **nunca** é editado à mão. A fonte da verdade são os
   artefatos (o bloco `rua:` no frontmatter de cada UA). O `.json`/`.md`/`.html` são
   *colheita*. Editar a saída à mão = drift = passivo (viola Proof-First).
2. **Determinístico.** Rodar o gerador 2× no mesmo commit → **saída byte-idêntica**. Sem
   `Date.now()`/`random`: o carimbo de origem é o **SHA do commit** (`git rev-parse --short HEAD`).
   *(Exceção legítima: a telemetria L5 é série temporal — carrega wall-clock por natureza; o
   determinismo lá é do **analisador** sobre um log fixo, não do log.)*
3. **Fail-closed.** UA sem um campo `★` obrigatório **não entra** no Registro canônico — vai
   para `incompletas`, visível como dívida, nunca silenciada.
4. **Zona Verde · zero PII.** O Registro só carrega metadado de governança. O cockpit (L6) é
   compartilhável ⇒ tratado como público ⇒ nenhum dado de caso entra.
5. **Repo-relativo.** Todo path resolve a partir do próprio script (`__file__`), nunca de
   `cwd` ou caminho absoluto — roda igual em sessão local e na nuvem.
6. **Para no gate humano.** Nenhum componente sela, injeta ou escreve no Vault. Devolve
   artefatos derivados na drop-zone e para.

---

## 3 · Arquitetura de dados

### 3.1 A ontologia — o bloco `rua:` (5 blocos · MC-SPEC §3)

Cada UA declara, no próprio frontmatter (ou num sidecar `.rua.yml` para hooks, que não têm
frontmatter), um bloco `rua:`. Campos `★` são obrigatórios (fail-closed):

| Bloco | Campos | `★` obrigatórios |
|---|---|---|
| **A · Identidade** | `id`, `nome`, `tipo`, `versao`, `status`, `data` | id, nome, tipo, versao, status |
| **B · Função** | `papel`, `gatilhos`, `entrega`, `metodo_fonte` | todos |
| **C · Posição MC-ACI** | `instancia_aci`, `camada_ase`, `compoe_com`, `nao_confundir_com` | instancia_aci, nao_confundir_com |
| **D · Governança** | `gate`, `zona`, `lgpd_nota`, `vedacoes_honradas`, `para_no_gate` | gate, zona, vedacoes_honradas, para_no_gate |
| **E · Operação** | `custo`, `regressao`, `emite_audit`, `depende_de` | custo |

`REQUIRED` (16 campos) é a régua fail-closed do gerador. `nao_confundir_com` pode ser lista
vazia (um "explicitamente nada" é válido); os demais `★` não.

### 3.2 O schema da linha de auditoria (conjunto FECHADO — o firewall em forma de dados)

Uma linha do `audit.jsonl` só pode conter estas 9 chaves. Nenhuma outra é jamais escrita:

```
ts · event · ua · tipo · gate · zona · instancia_aci · in_registro · sessao_hash
```

Esta lista **É** o firewall LGPD: nada do payload de invocação (args, prompt, anexos,
caminhos) tem porta de entrada. Detalhe em §4.3.

---

## 4 · Os componentes em profundidade

### 4.1 L1 · `gerar-registro.py` — o recenseador

**Entrada:** varredura ordenada (determinística) de `.claude/`:
- `skills/*/SKILL.md` → `read_rua()` extrai só o bloco `rua:` do frontmatter (parse robusto:
  fatia de `^rua:` até o fim e dá `yaml.safe_load` só nisso — descrições legadas com `:` em
  scalar plano quebrariam YAML estrito do frontmatter inteiro).
- `agents/*.md` → idem.
- `hooks/*.py` → procura sidecar `<nome>.rua.yml` (hook `.py` não tem frontmatter).
- `workflows/*.js` → lê `meta.name`; **dobra** o workflow na UA dona (`id == name` ou
  `name.startswith(id+"-")`). Workflow sem dona → dívida.

**Classificação:** `_add()` roda `missing_fields()`. Completa → `unidades` (+ `ids`).
Incompleta → `incompletas` com `campos_faltantes`. Sem bloco → `nao_instrumentadas`.

**Determinismo:** `commit_sha()` carimba `_meta.gerado_de_commit`; listas ordenadas por `id`;
`json.dump(..., sort_keys=False, ensure_ascii=False, indent=2)`.

**Saídas:** `registro-unidades-agenticas.json` (máquina) + `REGISTRO-Unidades-Agenticas.md`
(view humana com tabela de cobertura).

### 4.2 L6 · `gerar-cockpit.py` + `painel-mc.html` — o cockpit *(o painel que construímos)*

Esta é a peça que o Founder mais usa, então vai em detalhe.

**Modelo "dashboard autossuficiente" (molde `f2810ce`).** O gerador lê o `.json`, serializa
os dados e os **embute** dentro de um `<script>` de um único HTML. Resultado: **1 arquivo,
zero servidor, zero dependência externa, zero rede.** Abre em qualquer navegador ou celular,
cola no Claude, manda no zap.

**Endurecimento fail-closed do embed (defesa em profundidade):**
```python
DATA_JSON = json.dumps(REG, ensure_ascii=False).replace("<", "\\u003c")
```
Escapar `<` como `<` mantém JSON válido e garante que **nenhum dado futuro** (ex.: um
gatilho que algum dia contenha `</script>`) consiga quebrar o `<script>` embutido. É o mesmo
espírito do firewall: o dado não tem como escapar do contêiner.

**Pipeline:** `TEMPLATE.replace("__DATA__", DATA_JSON)` → grava `painel-mc.html`.
Determinístico (sem wall-clock; o `_meta.gerado_de_commit` vem do `.json`).

**Anatomia do `painel-mc.html` (lado cliente, JS puro):**

| Região | Como funciona |
|---|---|
| **Tema** | CSS vars on-brand MC: fundo `#120d08`, ouro `#d4af37`, zonas Verde/Amarela/Vermelha e gates R1/R2/R3 com cores próprias. |
| **Header + meta** | commit de origem · nº de UAs · % cobertura · "gerado, não mantido". |
| **Stats** | contadores derivados em runtime: total · R1/R2/R3 · 🟢/🟡/🔴 (`count(field,val)`). |
| **Busca** | `#q` filtra por `id + nome + papel + gatilhos` (lowercase, substring). |
| **Chips** | filtros multi-seleção gerados de `uniq("tipo"|"gate"|"zona"|"status")`. Conjuntos `FILTERS`; clique alterna. |
| **Cards** | um por UA. Badges de `tipo`, `gate` (mapa `RB`), `zona` (mapa `ZB`); UAs `SUPERSEDED` esmaecidas (`.card.sup`). |
| **POP** | expande no clique (`.card.open .pop`): Quando usar · Entrega · Para no gate · Custo · LGPD · Vedações honradas · **Não confundir com** · Método-fonte · Instância MC-ACI/camada ASE · Artefatos. |
| **Footer** | "Mostrando N/total" + selo D>C>V. |
| **Segurança** | `esc()` escapa `& < >` em todo campo renderizado (defesa XSS no cliente, além do escape do embed). |

**Disciplina de governança no cockpit (MC-SPEC §4.2):** o painel **destaca** UAs R2/R3 e
**nunca** oferece "selar" como botão. Selo é julgamento humano soberano; a ferramenta
rastreia, não decide.

### 4.3 L5 · `mc-audit.py` — o emissor (hook)

**Protocolo:** hook do Claude Code; recebe JSON do evento em `stdin`
(`PreToolUse`/`PostToolUse` sobre Skill/Task/Agent).

**O firewall, passo a passo:**
1. `_resolver_ua(payload)` lê **uma** chave whitelisted — `tool_input.skill` ou
   `tool_input.subagent_type` — e devolve só o `id`. **Todo o resto do `tool_input` é
   ignorado.** Não há caminho de código que copie o payload.
2. `_carregar_registro()` indexa o `.json` por `id` (une `unidades` + `incompletas`).
3. A linha é montada **só** com o conjunto fechado (§3.2); metadados (`tipo/gate/zona/
   instancia_aci`) vêm do **Registro**, não do payload.
4. `_hash_sessao()` = `sha256(session_id)[:8]` — conta sessões distintas **sem reter o id**.
5. Cinto de segurança final: `linha = {k: linha[k] for k in CHAVES_PERMITIDAS}` — descarta
   qualquer chave fora do conjunto fechado, por bug futuro que seja.
6. Apensa 1 linha em `audit/audit.jsonl`.

**Consequência verificada:** payload com `novo-cliente` + CPF/NB/CID nos args → log grava só
*"novo-cliente rodou em T · R1 · Vermelha"*. **Zero vazamento.** Mesmo UA Vermelha produz só
metadado de governança ⇒ o log é Zona Verde.

**Políticas:** **fail-safe** (qualquer erro → `exit 0`; telemetria nunca bloqueia o turno,
nunca derruba a sessão). **DEFAULT OFF** — não está fiado em `settings.json`; ligar a captura
ao vivo é o **ato R2** do Founder (#50.2: o agente não se autoinstala).

### 4.4 L5 · `ler-audit.py` — a alça de otimização

**Entrada:** `audit.jsonl` ao vivo, ou `--fixture` (golden sintético), ou `--in PATH`.
Linhas-sentinela (`event` começa com `_`) são descartadas antes da métrica (Proof-First: o
rótulo "sintético" vive no dado sem poluir a contagem).

**O que computa (a "alça"):**
- **Ranking** de invocações por UA (count desc, id asc).
- **⚰ Critério de morte** (MC-SPEC §6): UAs do Registro que **nunca** apareceram no log.
- **Carga de governança**: invocações por gate (R1/R2/R3) — quanto de supervisão humana o
  tráfego consome. (Classificação pela verdade *atual* do Registro, não pelo carimbo do log.)
- **Superfície LGPD**: invocações por zona (Verde/Amarela/Vermelha).
- **Dívida de cobertura em runtime**: `in_registro:false` (rodou sem bloco `rua:`).
- **Período coberto**: min/max `ts` **dos dados** (determinístico, não wall-clock).

**Determinismo:** mesmo commit + mesmo JSONL → relatório byte-idêntico (verificado por hash).

---

## 5 · Fluxo de dados (function-level)

```text
   EDIÇÃO HUMANA                 GERAÇÃO (L1)              CONSUMO (L6/L5)
   ────────────                  ────────────              ───────────────
   .claude/skills/*/SKILL.md ┐
   .claude/agents/*.md       │   gerar-registro.py
   .claude/hooks/*.rua.yml   ├─▶  read_rua / sidecar  ─▶  registro-...json ─┬─▶ gerar-cockpit.py
   .claude/workflows/*.js    ┘   missing_fields()          (verdade p/      │     replace <→<
        (bloco rua:)              fail-closed               máquina)         │     ─▶ painel-mc.html
                                  commit_sha()                               │        (cockpit · L6)
                                                                             │
                                                            ler-audit.py ◀───┘ (join p/ gate/zona,
                                                              ▲                 critério de morte)
   RUNTIME (quando ligado)        EMISSÃO (L5)               │
   ──────────────────────         ────────────              │
   Skill/Task/Agent invocado ─▶  mc-audit.py            audit.jsonl
     (PreToolUse stdin)           _resolver_ua()         (log ao vivo ·
                                  [só o id da UA]         gitignored)
                                  + join Registro     ─▶  +1 linha (conjunto
                                  conjunto FECHADO         fechado · zero PII)
```

---

## 6 · Determinismo & regressão

- **Geradores L1/L6:** prova = rodar 2× no mesmo commit e comparar SHA-256 da saída
  (byte-idêntico). O único delta legítimo entre commits é `_meta.gerado_de_commit`.
- **Analisador L5:** golden fixture `audit/audit-FIXTURE.jsonl` (40 linhas: 1 sentinela
  Proof-First + 39 invocações **sintéticas rotuladas** · 11 UAs rodando · 6 nunca) →
  `RESUMO-Telemetria-FIXTURE.md` é o golden de regressão. Mesmas entradas → saída idêntica.
- **Padrão de fixtures** herdado do ecossistema MC (golden master Hib001 do motor de
  espécimen): "unit tests for English".

---

## 7 · Governança embarcada

- **Gates** (`R1`/`R2`/`R3`): dado de primeira classe. Hoje: 14 R1 · 1 R2 (`mc-audit`) · 3 R3.
- **Zonas** (`Verde`/`Amarela`/`Vermelha`): 14 · 2 · 2.
- **Vedações honradas** por UA: `D>C>V`, `Firewall-OAB`, `Proof-First`, `LGPD`, `Zona-Verde`,
  `#50.2` — contrato ético explícito e auditável.
- **#50.2 Cabeça Única:** o RUA é cockpit do Founder, não terminal multiusuário; nenhum
  componente é autônomo.
- **Catraca R3:** a Fase 4 (telemetria) escala para R3 (Dra. Juliana) **apenas se** o conjunto
  fechado de chaves passar a tocar fluxo PII entre instâncias C4/C5 — o que o desenho proíbe.
  Por isso, hoje, **R2 basta** para ligar a captura.

---

## 8 · Pontos de extensão / roadmap

- **Ligar a telemetria (ato R2):** bloco `PreToolUse` matcher `Skill|Task` em
  `.claude/settings.json` chamando `mc-audit.py` (instrução exata em `audit/_LEIA-audit.md`).
- **Fase 4+ (R2/R3):** elevar o emissor para **spans OpenTelemetry GenAI**
  (`invoke_agent`/`invoke_workflow`) — padrão convergente de observabilidade agêntica.
- **Novas UAs:** nascem instrumentadas (bloco `rua:`); regenerar Registro → cockpit. A
  cobertura e o critério de morte se atualizam sozinhos.

---

## 9 · Inventário de arquivos do artefato

| Arquivo | Camada | Tipo |
|---|---|---|
| `.claude/registro/gerar-registro.py` | L1 | gerador |
| `.claude/registro/registro-unidades-agenticas.json` | L1 | **gerado** (máquina) |
| `.claude/registro/REGISTRO-Unidades-Agenticas.md` | L1 | **gerado** (view) |
| `.claude/registro/gerar-cockpit.py` | L6 | gerador |
| `.claude/registro/painel-mc.html` | L6 | **gerado** (cockpit) |
| `.claude/hooks/mc-audit.py` (+ `.rua.yml`) | L5 | emissor (hook) |
| `.claude/registro/ler-audit.py` | L5 | analisador |
| `.claude/registro/audit/audit-FIXTURE.jsonl` | L5 | fixture sintético (golden) |
| `.claude/registro/audit/RESUMO-Telemetria-FIXTURE.md` | L5 | **gerado** (golden) |
| `.claude/registro/audit/.gitignore` | L5 | ignora o log ao vivo (efêmero) |
| `.claude/registro/_LEIA-registro.md` · `audit/_LEIA-audit.md` | — | docs operacionais |
| `02-ARQUITETURA/specs/MC-SPEC-RegistroAgentes-ASE-v0_1-...md` | — | ontologia (gate R2) |
| `02-ARQUITETURA/manuais/MC-MANUAL-...pdf` | — | manual Founder-facing |

> `mc-lint.py` (Stop hook, L2-L4) é UA do Registro (carrega `mc-lint.rua.yml`) mas é
> peça pré-existente, irmã do RUA — referenciada, não parte deste artefato.

---

## 10 · Glossário técnico

| Termo | Definição |
|---|---|
| **UA** | Unidade Agêntica — skill, agent, hook ou workflow. |
| **Bloco `rua:`** | Frontmatter de governança que cada UA carrega; fonte da verdade do Registro. |
| **Fail-closed** | Campo `★` ausente ⇒ UA fora do Registro canônico, visível como dívida. |
| **Conjunto fechado** | As 9 chaves que uma linha de auditoria pode conter; o firewall LGPD em forma de dados. |
| **Sentinela** | Linha de log com `event` iniciando em `_` (ex.: rótulo de fixture); ignorada na métrica. |
| **Critério de morte** | UA que nunca rodou em 30d → candidata a rasgar (MC-SPEC §6). |
| **Determinístico** | Mesma entrada + mesmo commit → saída byte-idêntica. |
| **ASE / L0–L6** | Agentic Systems Engineering; camadas da stack. RUA cobre L1, L5, L6. |

---

**Hierarquia:** Dignidade > Compliance > Viabilidade · **Proof-First** · **Zona Verde** (zero PII)
· *gerado, não mantido* · **#50.2 Cabeça Única**
**Status:** v1.0 · derivado · NÃO selado · NÃO no Vault · aferido contra o código real
*"É eu, tu, a Anciã e a esteira. ∞"*
