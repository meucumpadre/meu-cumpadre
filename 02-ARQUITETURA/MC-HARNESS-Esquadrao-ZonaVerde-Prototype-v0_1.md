---
firewall: ZONA VERDE 100% — internal product dev, harness engineering, non-sensitive market intel, Anthropic ecosystem only. No B2C, no sensitive data.
tipo: prototipo-harness
nome: Esquadrão de Agentes IA - Harness para Desenvolvimento de Produto (Zona Verde)
versao: v0_1
data: 2026-06-02
base: MC-ENGENHARIA-EsquadraoAgentesIA-Harness-Plano-v0_1 + MC-ESTUDO-EsquadraoAgentesIA-AntiteseHonesta (antítese honesta: squad aninha sob ACI)
---

# Protótipo de Harness — Esquadrão de Agentes IA (Zona Verde MC)

**Propósito:** Este é o harness inicial para o Esquadrão de Agentes IA dedicado ao desenvolvimento de produto interno com IA (Claude Design, Claude Code, integrações, market intel não-sensível, manifestos, singularidade do dev velocity).

**Princípio (da antítese honesta):** O squad **não substitui** a ACI/governança. Ele é uma ferramenta poderosa **dentro** da Zona Verde, com gates explícitos.

## 1. Estrutura do Squad (Lead + Specialists)

- **Lead Agent (Product Orchestrator):** 
  - Quebra tarefas de "desenvolvimento de produto" (specs, design, code, research, verification).
  - Usa Claude (Opus/Sonnet) via Claude Code ou Managed Agents.
  - Contexto: CLAUDE.md do projeto + context pack firewalled (Anthropic harness + Allie patterns + MC manifestos internos).

- **Specialist Sub-Agents (compostos via skills):**
  - **Design Specialist:** Claude Design para wireframes, user flows, product interfaces do harness e do squad.
  - **Code Specialist:** Claude Code para implementação de harness code, MCP servers, skills, integrações.
  - **Research Specialist:** Market intel não-sensível (Anthropic engineering blogs, harness patterns, ecosystem updates) — usando MC-RAG Zona Verde + Compasso.
  - **Verification Specialist (Antítese Honesta):** Self-QA, adversarial review contra gates (D>C>V internal, Proof-First, aderência a manifestos), landing score (adaptado do validator).
  - **Harness Ops:** Gerencia context compaction, subagent delegation, proactive workflows (Allie-style: rodam enquanto "dormimos" — atualizam market radar, melhoram harness).

- **Shared Systems (o Harness em si):**
  - **MCP Layer:** Para ferramentas internas não-sensíveis (Drive para docs de market intel, Git para código de produto, etc.).
  - **Skills Compostas:** Como .claude/skills, mas para domínios de produto (ex: "claude-design-product-spec", "harness-mcp-integration").
  - **Context Pipeline:** Packs gerados por mc_emit_context_pack (ver protótipo anexo) + cadernos NotebookLM firewalled.
  - **Verification Harness:** mc_vtvl_landing_validator adaptado para "pouso de entregas de produto" (score de qualidade vs manifestos + gates).
  - **CLAUDE.md do Squad:** Contexto persistente do harness, princípios, exemplos de tarefas bem sucedidas.

## 2. Exemplo de CLAUDE.md para o Squad (Zona Verde)

```
# MC Product Dev Squad — Harness (Zona Verde Only)

## Regras Invioláveis (Firewalled)
- **Zona Verde exclusiva:** Tudo aqui é internal product dev, harness engineering, market intel não-sensível, Anthropic ecosystem, manifestos MC.
- **Zero B2C / dados sensíveis:** Nunca mencionar, processar ou gerar artefatos com jornada clientes, PII, gov.br credentials, hipervulneráveis específicos.
- **Aninha sob ACI:** O squad serve o harness de produto. Governança (D>C>V internal, Proof-First, manifestos) sempre prevalece.
- **Harness primeiro:** Toda tarefa passa pelo harness (context pack + verification antes de "dispersal").
- **Singularidade:** O objetivo é auto-aceleração do dev de produto MC (menor tempo spec-to-shipped, maior complexidade, menor custo marginal).

## Contexto do Ecossistema (sempre injetar)
- Anthropic Managed Agents + Claude Code como harness de referência.
- Allie Miller: 36 proactive workflows + ~100 agents (inspiração para workflows proativos, com honestidade "ela DISSE").
- MC manifestos e ACI (o squad aninha, não substitui).
- VTVL aplicado: cada entrega de produto é um "pouso" — o booster (lições, melhorias no harness) volta.

## Extensibilidade
- MCP para internal non-sensitive tools.
- Skills compostas para domínios de produto.
- Sub-agents com isolamento.

## Verification
- Sempre rodar "landing validator" adaptado antes de considerar uma entrega "pousada".
- Reportar gaps de contexto para o Research Specialist / MC-RAG.

## Exemplos de Tarefas
- "Design the Squad Dashboard using Claude Design principles..."
- "Implement MCP server for internal Drive market intel..."
- "Research latest Anthropic harness patterns and update the squad context pack..."
```

## 3. Próximo Passo de Build (sugerido)

1. Usar **Claude Design** para gerar o visual/product spec do "Squad Dashboard" (Lead view, specialists status, landing scores, proactive workflows monitor).
2. Usar **Claude Code** para prototipar o Lead Agent orchestration (loop simples com delegation para specialists).
3. Injetar o context pack gerado (Esquadrao-Harness-Context-Pack-v0_1.md) no caderno NotebookLM Zona Verde + no CLAUDE.md acima.
4. Rodar primeiro "pouso" de uma tarefa real de engenharia de harness usando o protótipo.

Este protótipo é o "skeleton" do harness. Evolui com as fases do plano.

---

**Entregue como protótipo inicial de harness.** Pronto para ser usado como base para Claude Design/Code sessions no track firewalled.

Grok Build — firewallado, harness engineering. 
```

Sync this prototype.