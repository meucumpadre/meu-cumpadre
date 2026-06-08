---
programa: MC-VTVL Propulsive Landing
versao: v0_1
data: 2026-06
status: em execução (Fase 0 hover tests)
owner: Grok Build (contexto + aplicação) + Founder (leme) + time
referencia: MC-VTVL-Propulsive-Landing-Programa-v0_1-2026-06.md + ACI v2.1 + orquestrador-mestre v3.1
errata_2026_06_03: "orquestrador-mestre v3.1 APOSENTADO (tombstone). Onde este TODO diz 'injetar contexto no orquestrador-mestre', leia: injetar no SISTEMA DISTRIBUÍDO (CLAUDE.md + MC-ARQUITETURA-Cognitiva-Integrada-v2.1 + Router-Ethics 11.0 + skills/RUA). Lastro: MC-PROPOSTA-Aposentadoria-OrquestradorMestre-v0_1"
---

# MC-VTVL Todo / Plano de Execução (seguindo protocolo orquestracao)

**Propósito:** Executar o programa que faz o "foguete voltar de ré" (sistema MC-ACI pousando casos com precisão propulsiva, reusabilidade e escala) para manifestar o vácuo quântico de benefícios infinitos aos hipervulneráveis.

**Princípios (nunca violar):**
- Planeje primeiro → valide com Founder → execute passo a passo → verifique (antes/depois, frontmatter, sem PII leak, "Founder aprovaria? Zilda-STF?").
- Registre lições em licoes-aprendidas.md.
- Cada mudança mínima impacto, sem gambiarras.
- Tudo Proof-First, D>C>V, Inversão Cósmica.

## Fase 0 — Hover / Grasshopper (Jun/2026) — Status: INICIADA

- [x] Visão e programa documentado (MC-VTVL-...-v0_1) + synced archive + vault.
- [x] Recon básico do estado atual da nave (Jornada, orquestrador, ACI, skills, automações, MC-RAG).
- [x] Primeiro build concreto: mc_vtvl_landing_validator.py (sensor de pouso) + synced.
- [ ] Testar o validator com dados de caso âncora (Hib001 ou CLR001 — usar logs existentes sem PII raw).
- [ ] Gerar primeiro "pouso report" real usando o validator + salvar em 04-OPERACAO/especimes-diamantados/ ou TEMP/.
- [ ] Injetar o VTVL doc como contexto obrigatório no orquestrador-mestre (atualizar SKILL.md ou via pack).
- [ ] Definir métricas de "pouso bom" (ex: overall >85, 0 violação D, autonomia >70%, tempo E0-E4 <48h interno).
- [ ] 5 casos cronometrados com telemetria completa (A4 pendente no orquestrador).
- [ ] Primeiro context pack MC-RAG específico para "cenários de pouso difícil" (rural + DIB + multi vertical) usando mc_emit_context_pack + método Compasso.
- [ ] Validar integração MC-RAG atual com orquestrador (quais partes do Grimório/Router já estão injetadas? gaps?).
- [ ] Spec inicial C4 Cowork (colaborar com Founder/Igor) incluindo requirements de "landing control" via MC-RAG.

**Gate Fase 0:** Pelo menos 1 caso com relatório de pouso "PROPULSIVO" ou "CONTROLADO COM RESSALVAS" + lições gravadas + 1 melhoria de contexto aplicada.

## Fase 1 — First Propulsive Landing (Jul-Set/2026)

- [ ] C4 mínimo operacional (primeiros agentes compostos executando partes da jornada).
- [ ] Landing validator integrado em workflows reais (após E4/E7 ou após orquestração).
- [ ] Loop fechado: pouso report → atualização automática/semi de context (Grimório, Router, VTVL lessons) → novo pack para próximo caso.
- [ ] 10+ casos com telemetria + scores de pouso trending up.
- [ ] Primeiro "reflight": caso subsequente usando lições explícitas do anterior, com melhoria mensurável.
- [ ] Métricas baseline publicadas (COGS, tempo, autonomia, CMD por caso).

## Fase 2 — Rapid Reuse

- [ ] Cadência 5x+ Fase 0.
- [ ] C4 produzindo com supervisão leve (handoff só em circuit breaker Fênix).
- [ ] "Fleet" de context packs por perfil de caso (rural, B31 urgente, acidentário, multi-CPF, etc.).
- [ ] Black box completa de voos (o que o booster "viu" durante a descida) para aprendizado.

## Ações Transversais (sempre)

- [ ] Toda sessão Grok Build começa com injeção deste todo + VTVL doc + orquestrador-mestre + ACI.
- [ ] Commits Git com mensagens que contam a história do feito (ex: "feat(vtvl): primeiro landing validator report para Hib001 — score 87, 1 ressalva de contexto rural injetado").
- [ ] Atualizar licoes-aprendidas.md após cada hover/landing test.
- [ ] Manter o Compasso em toda caça de contexto para o programa (nada entra sem REG/ESC/JOG + BR/hipervulneráveis).

**Riscos atuais (adversarial):**
- C4 ainda não existe → pousos dependem de "piloto manual" (Founder/Beto/Claude).
- Context injection para orquestrador ainda não sistemático → "cegueira" em casos complexos.
- Falta de telemetria real de pousos → não sabemos o quão bom/ruim está o "booster recovery".

**Próxima micro-ação imediata (após Founder OK):**
Iniciar o piloto de integração NotebookLM + Claude Code + Obsidian (plano completo em `plano-integracao/MC-PLANO-Integracao-NotebookLM-ClaudeCode-Obsidian-Piloto-ClaudeDesign-v1_0-2026-06.md` + LEIA-ME). Este é o "teste piloto" para aplicar Claude Design no desenvolvimento interno do harness/esquadrão, usando o limite de 300 fontes ao máximo e o loop multi-instância. Execute Fase 0 primeiro.

---

**Atualizações deste todo:** Marcar como feito, adicionar itens, registrar lições aqui ou em licoes-aprendidas.

Founder: valide o plano. Corte, adicione, priorize.

Grok Build: executando. Motores de pouso acesos.