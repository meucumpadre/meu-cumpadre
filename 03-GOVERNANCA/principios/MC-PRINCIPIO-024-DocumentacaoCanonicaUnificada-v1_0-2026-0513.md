---
id: MC-PRINCIPIO-024-DocumentacaoCanonicaUnificada
titulo: Documentação Canônica Unificada por Pilar
versao: 1.0
data_cunhagem: 2026-05-13
cunhado_por: Alessandro (founder) × Claude (cofounder) · MB-029
status: CANONICO_RESOLVIDO_RENUMERACAO_24
escopo: governanca-documental
hierarchy: Dignidade > Compliance > Viabilidade
colisao_detectada: |
  O MB-029 propõe esse princípio como #22, mas o Vault já possui:
  - MC-PRINCIPIO-021-CronometriaDoHumano-v1_0-2026-0513.md (sessão Hib001, ~00:50)
  - MC-PRINCIPIO-022-CincoPontosHumanos-v1_0-2026-0513.md (sessão Hib001, ~00:50)
  Esses dois são canônicos anteriores e estão conceitualmente entrelaçados
  (#22 referencia #21 como par THU+H1-H5).
numeracao_final: "#24 (resolvida pela sessão cofounder 13/05/2026 22:30 UTC)"
arquivo_colisao_dedicado: _COLISAO-PRINCIPIOS-MB029-vs-Hib001-2026-0513.md
---

# Princípio MC #?? — Documentação Canônica Unificada por Pilar

> ⚠️ **PENDENTE DE RENUMERAÇÃO** — ver frontmatter e arquivo `_COLISAO-PRINCIPIOS-MB029-vs-Hib001-2026-0513.md`
> nesta mesma pasta. Numeração final aguardando decisão do founder. Conteúdo abaixo é canônico
> em substância — apenas o número final precisa ser ajustado.

## Enunciado

Todo Cérebro 1 (Documentação) opera em path canônico único:

`G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Gestão Software\Documentação\[Pilar]\`

Pastas órfãs em outros paths do Drive (ex: criadas em sessões anteriores fora da hierarquia canônica `0 0 Gestão Software\Documentação\`) precisam ser concatenadas ao canônico antes de qualquer porting para o Vault.

Code DELL passa a referenciar Cérebro 1 exclusivamente a partir desses paths canônicos. Pastas órfãs renomeadas como `_LEGADO-{nome}-{timestamp}` para preservação histórica sem permanência operacional.

## Contexto da cunhagem

Em 13/05/2026, durante MB-028 (sync Pilar Identidade Visual), foi detectada divergência: o Cowork criou em sessão anterior pasta órfã `G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Identidade Visual MC\` no root do Drive, fora da hierarquia canônica de Documentação (`0 0 Gestão Software\Documentação\`). Isso gerou ambiguidade sobre qual o path canônico de Cérebro 1 do pilar.

Decisão founder + co-fundador: estabelecer regra canônica de que todo Cérebro 1 vive em subpasta nomeada por pilar dentro de `Documentação/`. Pastas órfãs em paths concorrentes são concatenadas ao canônico e renomeadas como `_LEGADO`.

## Aplicação imediata

- **Pilar Identidade Visual MC** → `Documentação\Identidade Visual\` (MB-029 Tarefa B)

## Aplicação futura (pilares MC ativos e por ativar)

| Pilar | Path canônico Cérebro 1 |
|---|---|
| Identidade Visual | `Documentação\Identidade Visual\` |
| Previdenciário | `Documentação\Previdenciário\` |
| CadÚnico | `Documentação\CadÚnico\` |
| Acidentário | `Documentação\Acidentário\` (Fase 2) |
| PcD / LC 142 | `Documentação\PcD-LC142\` (Fase 2) |
| BPC | `Documentação\BPC\` (Fase 2) |
| Maternidade | `Documentação\Maternidade\` (Fase 2) |
| Pensão/Auxílio-Reclusão | `Documentação\Pensão-AuxilioReclusao\` (Fase 2) |
| Internacional | `Documentação\Internacional\` (Fase 3) |
| Governança | `Documentação\Governança\` |
| Arquitetura | `Documentação\Arquitetura\` |
| Marketplace Ético | `Documentação\Marketplace\` |
| Captação Institucional | `Documentação\Captação\` |

## Implicações operacionais

1. **MBs futuros do Code DELL** referenciam Cérebro 1 exclusivamente via paths canônicos.
2. **Sessões de geração** (Cowork autônomo, GPT, designer humano) que criem pastas devem criar dentro do canônico — não no root do Drive.
3. **Detecção de órfãos** vira parte do sweep diagnóstico de qualquer MB cross-vertical: antes de portar para Vault, verificar se há pasta órfã do mesmo pilar fora do canônico.
4. **Princípio #4** (Copy-Item, não Move-Item) continua valendo: concatenação preserva original como `_LEGADO`, nunca deleta.

## Relação com outros princípios

- **Princípio #1** (Inventário de caminhos) — agora obrigatoriamente inclui detecção de pastas órfãs do pilar
- **Princípio #4** (Erratas absorvem, não inventam) — pastas órfãs renomeadas como `_LEGADO`, não deletadas
- **Princípio #15** (Persistência cross-vertical) — origem da persistência é sempre o canônico unificado
- **Princípio operacional do MB-028** (Pilar Identidade Visual sync automático) — operacionaliza-se a partir do canônico estabelecido por este princípio

## Status

PENDENTE_RENUMERACAO desde 13/05/2026 — cunhado via MB-029, persistido no Vault, aguardando
renumeração final pelo founder devido a colisão com princípios da sessão Hib001.

---

**MC-PRINCIPIO-PENDENTE-DocumentacaoCanonicaUnificada v1.0 — 13 de maio de 2026**
Dignidade > Compliance > Viabilidade
O diamante é carbono que não desistiu da pressão.
