---
tipo: REGISTRO
codigo: MB-021-DECISOES-ORFAOS-PRESERVADOS
data: 2026-05-12
autor: Claude Opus 4.7 (cofounder) + Alessandro de Souza Neves (founder)
---

# MB-021 - Decisoes sobre Orfaos Preservados em Documentacao

> Dos 72 orfaos identificados em MB-020, **38 unicos foram copiados** para o Vault canonico via MB-021 (40 entradas na tabela; 2 SKIPs por duplicacao cross-folder dos Contratos Psi1). Os **34 restantes permanecem em Documentacao** por decisao arquitetural cofounder validada pelo founder.

## Principios aplicados

- **Principio #4** - Errata absorve, nao inventa
- **Principio #20** - Workflow de Sincronizacao Permanente
- **Cerebro 1** (Documentacao) = laboratorio vivo, historico de pesquisa, rascunhos
- **Cerebro 2** (Vault) = memoria canonica institucional
- **Copy-Item (nao Move-Item)** - preserva originais em Documentacao como fonte de verdade

## Categorias preservadas em Documentacao

### A - 8 versoes antigas do ADR-007 (rascunhos de evolucao ate v3.8)

| Arquivo | Razao |
|---|---|
| v2.0-2026-0318 | Rascunho inicial |
| v3.0-2026-0426 | Iteracao |
| v3.2-2026-0427 (em 2 pastas) | Iteracao |
| v3.3-2026-0502 | Iteracao |
| v3.4-2026-0505 | Iteracao |
| v3.5-2026-0505 | Iteracao |
| v3.6-2026-0505 | Iteracao |
| v3.7-2026-0505 | Pre-v3.8 selada |

**Justificativa:** todas sao versoes pre-selagem da ADR-007 v3.8 (canonica no Vault). Pasta original em Documentacao eh o lugar correto para historico de pesquisa.

### B - 2 MC-ADR-011 com tema diferente do canonico

| Arquivo | Tema | Decisao |
|---|---|---|
| MC-ADR-011-Compliance-OAB-Crisalida-v1_0-2026-0417 | Compliance OAB Crisalida | **CONFLITO DE NUMERACAO** - ADR-011 canonico atual eh Arquitetura 3 Cerebros. Este eh rascunho historico de outro tema. Aguarda decisao founder: renomear como MC-DRAFT ou renumerar para ADR-016+ |
| MC-ADR-011-Dossie-Subset-Crisalida-v1_0-2026-0419 | Dossie Subset Crisalida | Idem - conflito de numeracao, rascunho historico |

**Proximo passo:** founder decide caso a caso pos-19/05 (parecer Juliana pode iluminar se vale canonizar).

### C - 1 MC-ADR-009 orfao a comparar hash com canonico

Arquivo: `MC-ADR-009-TresEstados-Custodia-Dossie-v1_0-2026-0417.md` (30.510 bytes)

**Proximo passo:** **MB-022** dedicado fara hash-check com canonico em `03-GOVERNANCA/adrs/` (que tem ADR-009a e ADR-009b separados).

### D - 5 MC-EXTRACT (recortes de outros docs, nao canonicos)

Todos em `_ARQUIVO/`. Sao extratos/recortes para analise pontual, nao documentos canonicos proprios.

### E - 5 MC-GOVBR PROMPTs (instrumentos operacionais Claude Code)

| Arquivo | Razao |
|---|---|
| MC-GOVBR-PROMPT-E5-CatalogoTravas-ClaudeCode.md | Prompt operacional |
| MC-GOVBR-PROMPT-E4_1-RevisaoMatriz-ClaudeCode.md | Prompt operacional |
| MC-GOVBR-PROMPT-E8-ArvoreDecisao-ClaudeCode.md | Prompt operacional |
| MC-GOVBR-PROMPT-E12-Anamnese-ClaudeCode.md | Prompt operacional |
| MC-GOVBR-PROMPT-ERRATA-001-ClaudeCode.md | Prompt operacional |

**Justificativa:** PROMPTs sao instrumentos operacionais que vivem no contexto de execucao (Documentacao/CONTA GOV.BR PRATA OURO/), nao documentacao canonica institucional.

### F - 2 MC-INDICADORES v1.0 e v1.1 (versoes antigas, v1.2 e canonica)

Versoes anteriores da MC-INDICADORES-ImpactoSocial. Apenas v1.2 migrada (canonica corrente).

### G - 3 MC-MEMO (comunicacoes pontuais)

Memos sao instrumentos de comunicacao interna pontual, nao documentacao canonica.

### H - 2 MC-PARECER (versoes antes da v3.4 final)

Pareceres consolidados v3.3 e v3.4 do processo de iteracao ADR-007.

### I - 3 MC-PROCESSO views v1.0 (Telas_Endpoints, Telas_UX, Pricing_Rotas)

Apenas a versao Mestre v1.3 migrada. As 3 views v1.0 ficam como historico de design (referencias de arquitetura, nao documentacao canonica).

### J - 3 Contratos Psi1 duplicados cross-folder

Achado durante migracao: `MC-CONTRATO-Psi1-MINUTA-v1_3` e `v1_1` existem em DUAS pastas:
- `_ARQUIVO/micros-pendentes/entregaveis-feitos/`
- `Equitty de Arquitetura de Receita/RECEITA - B2B Advogados/`

A 1a copia foi migrada com sucesso para Vault, a 2a teve SKIP (destino ja existia). Ambas as fontes em Documentacao preservadas como rastreabilidade da duplicacao historica.

---

## Reconciliacao numerica

| Categoria | Quantidade |
|---|---|
| Versoes antigas ADR-007 | 8 |
| Conflito numeracao ADR-011 | 2 |
| ADR-009 a hash-checkar | 1 |
| MC-EXTRACT | 5 |
| MC-GOVBR PROMPTs | 5 |
| MC-INDICADORES antigos | 2 |
| MC-MEMO | 3 |
| MC-PARECER historicos | 2 |
| MC-PROCESSO views v1.0 | 3 |
| Contratos Psi1 duplicados cross-folder | 2 (segunda copia) |
| **TOTAL PRESERVADO** | **33** |

Migrados: 38 unicos (= 40 entries - 2 SKIPs duplicatas)
Preservados: 33
**Total: 71** (1 a menos que os 72 orfaos do MB-020 - reconciliar pos-execucao se necessario)

---

## Pendencias derivadas

- **MB-022** - Hash-check do ADR-009 orfao vs canonico
- **MB-023** - Decisao founder sobre os 2 ADR-011 com tema conflitante
- **MB-024** - Consolidar `04-OPERACAO` vs `06-OPERACOES`
- **MB-025** - Deprecar `03-GOVERNANCA/INDEX-PATCHES.md` antigo
- **MB-019b** - Aplicar PATCH ADR-012 v1.0 -> v1.1
- **MB-021b** - Persistencia da Pauta Juliana v2.1 no Vault

---

**Hierarquia:** Dignidade > Compliance > Viabilidade
**Selo:** "O diamante e carbono que nao desistiu da pressao."

infinito
