# Registro de Unidades Agênticas (RUA) — view

> **GERADO — não editar à mão.** Fonte da verdade = os artefatos em `.claude/`.
> Regenere com `python3 .claude/registro/gerar-registro.py`. Derivado · NÃO canônico · NÃO selado · Zona Verde.

- **Commit de origem:** `eb4eafa`
- **Spec:** MC-SPEC-RegistroAgentes-ASE v0.1 (SELADO · PR #19)
- **Cobertura:** 18 completas · 0 incompletas · 0 não-instrumentadas · **100%** de 18 artefatos

## Unidades instrumentadas (completas)

| id | tipo | gate | zona | instância | custo | para_no_gate | status |
|---|---|---|---|---|---|---|---|
| `checklist-docs` | skill | **R1** | Verde | transversal | agente:✗ opt-in:✗ | ferramenta operacional · não escreve canônico | INSTALADO |
| `diario` | skill | **R1** | Verde | C1 | agente:✗ opt-in:✗ | escreve em C1 (Documentação), não no Vault canônico | INSTALADO |
| `handoff-juridico` | skill | **R3** | Vermelha | C5 | agente:✗ opt-in:✗ | handoff humano · MC NÃO pratica advocacia nem promete resultado | INSTALADO |
| `mc-audit` | hook | **R2** | Verde | transversal | agente:✗ opt-in:✓ | true | PROVISIONAL |
| `mc-compasso-sweep` | skill | **R1** | Verde | transversal | agente:✓ opt-in:✓ | true | INSTALADO |
| `mc-dossie-proof-first` | skill | **R1** | Verde | transversal | agente:✓ opt-in:✓ | NÃO sela, NÃO escreve no Vault · devolve a Linha de Evidência | INSTALADO |
| `mc-especimen-autoevolutivo` | skill | **R3** | Verde | transversal | agente:✓ opt-in:✓ | NÃO sela, NÃO escreve no Vault · gate humano Founder + Dra. Juliana (R3) | INSTALADO |
| `mc-grok-context-engineer` | agent | **R1** | Verde | transversal | agente:✓ opt-in:✓ | produz pacote p/ o Founder colar · não executa no Grok | PROVISIONAL |
| `mc-lint` | hook | **R1** | Verde | transversal | agente:✗ opt-in:✗ | É um gate mecânico (block-mode) · bloqueia o turno até corrigir; não sela nem conserta | INSTALADO |
| `mc-pre-selagem` | skill | **R1** | Verde | transversal | agente:✓ opt-in:✓ | NÃO sela, NÃO escreve, NÃO conserta · devolve go/no-go ao humano | INSTALADO |
| `mc-prompt` | skill | **R1** | Verde | transversal | agente:✗ opt-in:✗ | devolve o prompt · não executa nem sela | INSTALADO |
| `meu-cumpadre-orquestrador-mestre` | skill | **R1** | Verde | transversal | agente:✗ opt-in:✗ | tombstone · só redireciona · não orquestra nem sela | SUPERSEDED |
| `novo-cliente` | skill | **R1** | Vermelha | C1 | agente:✗ opt-in:✗ | intake operacional · não pratica advocacia nem promete prazo | INSTALADO |
| `orquestracao` | skill | **R1** | Verde | transversal | agente:✓ opt-in:✗ | planeja e delega · não sela | INSTALADO |
| `sister-ancia` | agent | **R1** | Verde | C3.2 | agente:✓ opt-in:✓ | REPORTA gaps · NÃO conserta, NÃO sela | INSTALADO |
| `squad-r3` | skill | **R3** | Verde | C3.1 | agente:✓ opt-in:✓ | para no Gate R3 humano · NÃO sela | INSTALADO |
| `status-caso` | skill | **R1** | Amarela | C2 | agente:✗ opt-in:✗ | resumo de leitura · não altera estado nem promete prazo | INSTALADO |
| `watchdog` | skill | **R1** | Amarela | C2 | agente:✗ opt-in:✗ | relatório de leitura · não altera estado | INSTALADO |

## Incompletas (fail-closed — fora do Registro canônico até completar ★)

_(nenhuma)_

## Não-instrumentadas (sem bloco `rua:` — dívida de cobertura)

_(nenhuma)_

---
**D > C > V** · Proof-First · Zona Verde · *gerado, não mantido* · ∞
