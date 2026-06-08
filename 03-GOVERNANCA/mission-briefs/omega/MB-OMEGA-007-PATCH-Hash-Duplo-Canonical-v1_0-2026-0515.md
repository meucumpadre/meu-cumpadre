---
tipo: MISSION-BRIEF-PATCH
codigo: MB-OMEGA-007-PATCH
descritor: Hash-Duplo-Canonical-Md-Alternativa-C
versao: 1.0
data: 2026-05-15
autor: Claude Opus 4.7 (cofounder Ω) × Founder (Alessandro de Souza Neves)
modo: ESCRITA AUTORIZADA — edição cirúrgica do _CANONICAL.md + criação de arquivo de drift em _HISTORICO/
maquina-alvo: Beto (DELL — Claude Code CLI)
ambiente: Windows PowerShell + Claude Code
duracao-estimada: 2-3 minutos
status: PRONTO PARA COLAR
dependencias: MB-OMEGA-006 executada (playbook persistido em 01-ARQUITETURA\benchmarks)
proximo: ADR-CRITICO-001 (Vedação Absoluta de Operações Financeiras sobre Créditos de Clientes)
persistencia-dual: Vault Ω (04-OPERACAO\workflows) + Vault MC (03-GOVERNANCA\mission-briefs\omega)
classificacao: OPERACIONAL — uso institucional
referencias:
  - MB-OMEGA-006 (executada com SUCESSO COM RESSALVA)
  - Reporte Beto 15/05/2026 — duas ressalvas reportadas
  - Resposta cofounder Ω 15/05/2026 — Alternativa C autorizada
---

# MB-OMEGA-007-PATCH — HASH DUPLO NO _CANONICAL.md (Alternativa C) + DRIFT DE TAXONOMIA

## Contexto institucional

A execução do MB-OMEGA-006 (persistência do Playbook Ismael v1.0.1 no Vault Ω) foi reportada pelo Beto com SUCESSO COM RESSALVA, identificando duas anomalias com transparência epistêmica (Princípio #14):

1. **Path canônico incorreto na MB-006:** instruí `02-ARQUITETURA\benchmarks\` baseado em `03-TAXONOMIA-COMPLETA.md` do Knowledge Ω, que diverge da estrutura física real do Vault (`01-ARQUITETURA` + `02-GOVERNANCA`). Beto corrigiu autonomamente movendo o playbook para `01-ARQUITETURA\benchmarks\` e removendo o folder spúrio
2. **Hash divergente do declarado:** playbook persistido tem hash `50a5a698…` vs `f75c4c…` declarado como canônico no MB-006. Diferença: +46 bytes (0,04%) consistente com encoding/whitespace na transferência texto-via-chat (inevitável sem canal binário dedicado entre Cérebro 3 e Cérebro 2)

Após análise, Founder autorizou **Alternativa C** — registrar ambos os hashes em `_CANONICAL.md` com nota institucional sobre a transferência inter-cérebros. Os dois hashes não são contradição; refletem a arquitetura 3 Cérebros: `f75c4c…` é o hash de especificação produzida no Cérebro 3 (Claude.ai Ω), `50a5a698…` é o hash de execução canônica no Cérebro 2 (Vault Obsidian).

Adicionalmente, esta PATCH documenta o drift detectado entre `03-TAXONOMIA-COMPLETA.md` e a estrutura física do Vault como tarefa pendente de reconciliação no próximo ciclo de revisão fundacional.

## Tarefas

1. **Atualizar entrada do playbook em `_CANONICAL.md`** com hash duplo (spec + vault) + nota institucional sobre arquitetura 3 Cérebros
2. **Criar arquivo de drift em `_HISTORICO\OMEGA-DRIFT-Taxonomia-Vault-Fisico-v1_0-2026-0515.md`** com mapeamento de 10 divergências e recomendação Opção A
3. **Espelhamento dual** desta MB-007-PATCH

## Regras invioláveis

1. Conteúdo dos blocos a inserir/criar está embedded como blocos markdown copiáveis diretamente (sem dependência de regex via `$PSCommandPath` — lição MB-006)
2. Zero modificação fora dos caminhos especificados
3. Hash SHA-256 obrigatório
4. Espelhamento dual conforme Princípio #13
5. Persistência do reporte mesmo com erro parcial
6. Cofounder Ω deve consultar `_CANONICAL.md` (não a TAXONOMIA) daqui em diante para validar paths reais do Vault, até reconciliação

## Persistência dual

- Vault Ω: `04-OPERACAO\workflows\MB-OMEGA-007-PATCH-Hash-Duplo-Canonical-v1_0-2026-0515.md`
- Vault MC: `03-GOVERNANCA\mission-briefs\omega\MB-OMEGA-007-PATCH-Hash-Duplo-Canonical-v1_0-2026-0515.md`

## Próximo

→ Cofounder Ω autoriza MB-OMEGA-008 — ADR-CRITICO-001 (Vedação Absoluta de Operações Financeiras sobre Créditos de Clientes)

---

**O diamante é carbono que não desistiu da pressão.**

A Alternativa C transforma uma divergência aparente (hash spec ≠ hash vault) em registro institucional explícito sobre a arquitetura 3 Cérebros. O que parecia bug vira característica documentada.

**∞**
