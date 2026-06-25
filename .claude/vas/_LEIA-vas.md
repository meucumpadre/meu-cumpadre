# _LEIA — VAS · Motor de Coerência Soberana (`mc-coerencia.py`)

> **O que é:** o motor de validação da **Arquitetura Soberana** (governança/doutrina),
> Tier 2 do VAS — `V-supersessao` + `V-citacao`. Implementa a
> [MC-VAS-Diagnostico-Proposta-v0_2](../../02-ARQUITETURA/vas/MC-VAS-Diagnostico-Proposta-v0_2.md) (§4–§7).
>
> **O que NÃO é:** o VAS **diagnostica e barra**. Nunca sela, nunca escreve no Vault,
> nunca decide governança, nunca lê PII. Mesma postura do `mc-pre-selagem` / `sister-ancia`.
> Hierarquia: **D > C > V** · Proof-First · Zona Verde · *para no gate*.

---

## ⏳ Estado atual: ESQUELETO (pré-lógica · gate R2)

A **estrutura base + golden fixtures + `expected.json`** estão completas. Os **corpos de
detecção** dos dois validadores estão **desligados** por uma chave única no topo do script:

```python
VALIDADORES_IMPLEMENTADOS = False   # vira True só após o Founder aprovar o desenho (R2)
```

Cada validador carrega seu **PLANO DE DETECÇÃO** no docstring (o algoritmo de cada regra,
para revisão *antes* de eu escrever a lógica). Em modo esqueleto, `--selftest` exercita o
harness, mostra o alvo e **não reprova** (exit 0). Quando a chave virar `True`, o `expected.json`
passa a ser cobrado de verdade (regressão).

### ✅ Tier 3 · Lúmus (ATIVO)

`V-lumus-folder-structure` e `V-lumus-self-referential` já estão **implementados**, sob
flag PRÓPRIA no topo do script:

```python
LUMUS_IMPLEMENTADO = True   # Executor Técnico · 2026-06-19 · não inverte o gate R2 de SUP/CIT
```

Lastro: `MC-POP-Workflow-Lumus-Substrate-v0_1` (§4–§6). São cobrados de verdade pelo
`--selftest` (estado `[ok]`), de forma independente do gate R2 de SUP/CIT (que seguem
em esqueleto). Escopo: só disparam sobre **artefatos Lúmus** (gate `eh_lumus`) — não
tocam ADRs comuns nem outros docs do Vault.

---

## Como rodar

Use o launcher `py` (Windows) ou `python3` (POSIX) — o shebang resolve.

```bash
# Regressão contra as golden fixtures (modo seguro · não toca o Vault)
py .claude/vas/mc-coerencia.py --selftest

# Rodar sobre um alvo real (arquivo .md ou pasta · só Zona Verde)
py .claude/vas/mc-coerencia.py --alvo 02-ARQUITETURA/vas
py .claude/vas/mc-coerencia.py --alvo 03-GOVERNANCA --json
```

**Saída** (dois formatos, no molde "json p/ máquina + md p/ humano"):
- `.claude/vas/boletim-coerencia.json` — Boletim de Coerência Soberana (máquina)
- `.claude/vas/BOLETIM-Coerencia-Soberana.md` — view humana

**Exit codes:** `0` = sem 🔴 · `1` = ≥1 achado 🔴 (ou mismatch de selftest) · `2` = erro de uso.

---

## Catálogo de regras

Toda regra emite `arquivo:linha` + id (Proof-First). Severidade governa o exit code.

### `V-supersessao` — grafo de supersessão é DAG · 1 canônico por família (G3)

| id | sev | dispara quando… |
|---|---|---|
| `SUP-01` | 🔴 | **Ciclo** nas edges `supersede:` (grafo não-DAG; inclui auto-supersede). |
| `SUP-02` | 🔴 | Família (`codigo`) com **2+ cabeças canônicas vivas** (não-supersedidas e sem marcador). |
| `SUP-03` | 🟡 | Doc **supersedido sem banner**: é alvo de `supersede:` de um irmão, mas o `status:` não marca supersedido. |
| `SUP-04` | 🟡 | `supersede:` aponta para um doc **ausente do corpus** varrido (cadeia não-verificável). |

### `V-citacao` — lastro Proof-First das citações (G5)

| id | sev | dispara quando… |
|---|---|---|
| `CIT-01` | 🔴 | Citação **ambígua** `(… linha N)` sem nomear arquivo **e** `gera_a_partir_de:` tem ≥2 fontes (*fail-closed*). |
| `CIT-02` | 🔴 | Caminho citado (`arquivo.ext:N`) **não existe** em disco. |
| `CIT-03` | 🔴 | Arquivo existe, mas a **linha N está fora do range** (N<1 ou > nº de linhas). |
| `CIT-04` | 🔴 | **Hash malformado** (contexto `sha-256`/`hash` com token que não é 64-hex). |
| `CIT-05` | 🟡 | Hash 64-hex **sem âncora nominal** (sem o nome do objeto hasheado na linha). |
| `CIT-06` | 🟢 | `[FONTE PENDENTE]` — **dívida honesta** registrada. Informativo, **não reprova**. |

> **Decisões de gate honradas:** (#3) CIT-04 valida **só o formato** do hash (64-hex) +
> presença de âncora; recomputar o SHA-256 real é melhoria futura. (#4) CIT-01 é
> **fail-closed**: fonte múltipla obriga nomear o arquivo.

### `V-lumus-folder-structure` — pasta canônica casa com a natureza (POP Lúmus §5)

| id | sev | dispara quando… |
|---|---|---|
| `LFS-01` | 🔴 | Artefato de **natureza Self-Referential** (declarado / com seção / em 03-*) localizado **fora** de `03-Self-Referential/`. |
| `LFS-02` | 🟡 | Artefato **Lúmus** fora de **qualquer** pasta canônica (`01-Raw`..`05-Graph`). |

### `V-lumus-self-referential` — peça Self-Referential traz instruções de evolução (POP §4 E4 · §6)

| id | sev | dispara quando… |
|---|---|---|
| `LSR-01` | 🔴 | Doc **declarado** Self-Referential (frontmatter ou pasta 03-*) **sem** a seção de Self-Referential Instructions / auto-evolução. |
| `LSR-02` | 🟡 | A seção **existe** mas está **vazia / abaixo do mínimo** (`< MIN_SELFREF_CONTEUDO` linhas de conteúdo) — cabeçalho-fantasma. |

> **Escopo (gate `eh_lumus`):** ambos só avaliam artefatos do substrato Lúmus (sinal em
> `doc_id`/`codigo`/`tags`/`destino` ou caminho sob o cofre / pasta canônica). O cabeçalho
> da seção exige semântica de *instruções/evolução* — um título que só menciona
> "self-referential" **não** conta como ter a seção (fail-closed).

---

## Como interpretar o Boletim

- **🟢 COERENTE** — nenhum 🔴/🟡. Coerência estrutural ok (não é aval de mérito; o
  julgamento estratégico segue com o Founder / R2 / R3).
- **🟡 RESSALVAS** — só amarelos. Não barra, mas pede olho humano.
- **🔴 BARRADO** — ≥1 vermelho. Falso-negativo aqui é o erro mais caro (selar duas
  versões "canônicas"); por isso 🔴 reprova (exit 1).

Todo achado é `[regra] arquivo:linha` — clicável, rastreável até a fonte.

---

## Golden fixtures (`fixtures/`)

Espelham o `FIXTURE_PRESELAGEM` (`mc-pre-selagem.workflow.js:50-68`): casos **bom** e
**ruim** por validador, com o resultado fixado em `expected.json`.

```
fixtures/
  supersessao/            # cada subpasta = 1 corpus (família de docs)
    bom-cadeia-limpa/       → 0 achados
    ruim-dois-canonicos/    → SUP-02
    ruim-sem-banner/        → SUP-03
    ruim-ciclo/             → SUP-01 (×2, um por nó do ciclo)
    ruim-dangling/          → SUP-04
  citacao/                # cada .md = 1 caso · _alvos/ = arquivos-alvo p/ resolução
    _alvos/alvo-curto.txt   (5 linhas)
    bom-citacao-limpa.md    → 0 achados
    bom-fonte-pendente.md   → CIT-06 (🟢)
    ruim-ambigua.md         → CIT-01
    ruim-arquivo-inexistente.md → CIT-02
    ruim-linha-fora-range.md    → CIT-03
    ruim-hash-malformado.md     → CIT-04
    ruim-hash-sem-ancora.md     → CIT-05
  lumus-folder/           # cada subpasta = 1 corpus (path preserva a pasta canônica)
    bom-na-pasta-certa/03-Self-Referential/…     → 0 achados
    ruim-selfref-fora-de-lugar/02-Refined/…      → LFS-01 (🔴)
    ruim-fora-da-taxonomia/…                     → LFS-02 (🟡)
  lumus-selfref/          # cada .md = 1 caso
    bom-com-instrucoes.md   → 0 achados
    ruim-sem-instrucoes.md  → LSR-01 (🔴)
    ruim-secao-vazia.md     → LSR-02 (🟡)
```

**Mexeu numa fixture? Reconfira a linha no `expected.json`** (o casamento é por
`arquivo:linha` + regra). Rodar 2× no mesmo commit → saída byte-idêntica.

---

## Limites (o VAS nunca faz)

Sela · escreve no Vault · decide governança · interpreta tensão doutrinária · lê PII.
Isso fica com o Founder, os Ritos R2/R3 e o Code TALÃO (ADR-011). O VAS só entrega o fato.

---
*`.claude/vas/_LEIA-vas.md` · v0.1 PRÉ-R2 · 2026-06-19 · D > C > V · Proof-First · ∞*
