---
tipo: analise
contexto: reuniao-equipe
participantes: [Alessandro, Igor, Carlos]
data-reuniao: 2026-04-04
duracao: 107min
canal: Google Meet
produzido-por: Claude (co-founder intelectual)
status: registro-historico
tags: [equipe, desenvolvimento, ux, alinhamento, gargalo-tecnico]
---

# MC-ANALISE: Reunião Alessandro + Igor + Carlos — 04/04/2026

**Data:** Sábado, 04/04/2026 · 17:57 · 107 minutos
**Canal:** Google Meet
**Participantes:** Alessandro Neves (CEO), Igor (Dev backend), Carlos Batista (UX)
**Contexto:** Primeira reunião conjunta após produção do documento estratégico MC. Alessandro enviou para Igor um documento com identidade do MC, regras invioláveis, stack técnico (NestJS+TS+MySQL, Router-Ethics, Claude Sonnet via MCP, WhatsApp Cloud API, N8N, LangGraph, GCP OCR, MCP orquestração).

---

## 1. O que aconteceu

A reunião foi convocada inicialmente para aprovação das telas do Carlos, mas derivou para um confronto técnico-estratégico após Igor receber o documento estratégico e reagir que o escopo era "desproporcional" e "inviável" em 1-2 desenvolvedores.

### 1.1 Cronologia dos eventos

**Min 0-15:** Abertura. Carlos chega cansado (cachorra internada). Igor levanta que o documento enviado muda totalmente o fluxo já definido no fluxograma de setembro/2025.

**Min 15-30:** Alessandro compartilha tela com o documento. Igor identifica que as tecnologias sugeridas (Claude Sonnet via MCP, MCP orquestração, múltiplas IAs) quadruplicam a complexidade do projeto original.

**Min 30-50:** Igor argumenta que seria necessário equipe de 4-5 devs + 1 gerente + 1 designer + 1 ano para entregar o escopo. Defende que IA não pode ser consultora técnica para especificar backend porque "enviesa" e "idealiza no mundo perfeito".

**Min 50-70:** Carlos intervém como mediador. Diagnóstico dele: "Você não precisa vir como desenvolvedor. Precisa vir como dono — passe sua dor, não a solução técnica." Propõe metodologia: voltar ao fluxograma original, identificar gaps, formalizar documento escrito, validar com todos antes de qualquer código.

**Min 70-85:** Igor traz cálculo de custos da OpenAI via ChatGPT. Números que ele apresentou:
- Mensagem otimizada: R$0,003 / mensagem
- Mensagem mal otimizada: R$0,05-0,30 / mensagem
- Por usuário/mês (10 intenções × 6 mensagens, áudio incluso): R$1,60 otimizado, R$2,50+ sem controle
- 1000 usuários/mês: R$1.200-2.500 sem controle

**Min 85-100:** Alessandro traz o caso da mãe (aposentadoria indeferida sem análise de mérito) como contexto da complexidade real do INSS. Reforça a missão: "Não somos uma operação mecânica — é processo artesanal, obra de arte pra o servidor do INSS entender que aquela pessoa tem direito."

**Min 100-107:** Acordo operacional fechado por Carlos:
1. Alessandro + Igor revisam fluxograma existente
2. Identificam gaps
3. Carlos formaliza documento escrito com requisitos
4. Validação com todos
5. "Ninguém desenvolve nada enquanto isso não estiver documentado"

---

## 2. Diagnóstico estratégico

### 2.1 Três verdades simultâneas

**Verdade 1 — Igor e Carlos têm razão no método.**
O documento enviado por Alessandro era arquitetura-alvo do MC (visão de 2-3 anos), não especificação de MVP. Igor leu como escopo de desenvolvimento que ele teria que entregar. A reação de "desproporcional" é legítima dentro da perspectiva dele. Culpa do desalinhamento: comunicação estratégica (Alessandro+Claude), não execução técnica (Igor).

**Verdade 2 — Igor subestima o ecossistema MC.**
Igor não sabia que Alessandro já tinha:
- Grimório Previdenciário v2.0 (~109K palavras)
- Router-Ethics 11.0 (140 nós + 7 hooks)
- BEPS verificado
- 7 PRDs resolvidos
- Caso Hib001 montado pelo Claude Code
- 22 anos de experiência INSS
Ele achou que era tudo teoria e que o MC ainda não existia. Isso cria descrédito no projeto e reforça a postura defensiva.

**Verdade 3 — Os caminhos alternativos são reais.**
O MC já roda como serviço artesanal sem software proprietário. Caso Hib001 (protocolo agendado 08/04), caso da mãe de Alessandro, piloto Serra do Ramalho — tudo validado com: WhatsApp manual + Google Docs + ClickUp + Claude Code + Beto. Feio? Sim. Escala? Não. Mas VALIDA o modelo e gera receita.

### 2.2 Custos de IA — verificação

Os números do Igor estão corretos no cenário OTIMIZADO, mas ele usou GPT-4o como referência. Com **Gemini 2.5 Flash** (US$0,15/1M input + US$0,60/1M output) + Context Caching (90% desconto) + Batch API (50% desconto), os números reais são ainda melhores:
- Mensagem de triagem típica: ~R$0,001 (3x menor que estimado)
- Áudio 1 min: ~R$0,005-0,01 (10x menor)
- 1000 interações/dia: R$5-15/mês

Conclusão: preocupação com custo é legítima, mas viabilidade é maior que Igor estima.

---

## 3. Acordos operacionais fechados

1. **Spec-Driven Development adotado** como metodologia (Research → PRD → Spec → Implement)
2. **Fluxograma existente** (setembro/2025) é ponto de partida, não descartado
3. **Carlos formaliza** documento escrito de requisitos após revisão conjunta Alessandro+Igor
4. **Zero código novo** até documento validado por todos
5. **Claude atua como camada de tradução** estratégica entre Alessandro e Igor (decisões backend exclusivas de Igor)

---

## 4. Dois trilhos paralelos definidos

### Trilho A — Operacional (imediato)
Continuar operando casos reais artesanalmente com stack atual:
- Caso Hib001 (protocolo 08/04 às 13h)
- Caso mãe Alessandro
- Piloto Serra do Ramalho
- WhatsApp manual + Google Docs + ClickUp + Claude Code + Beto

**Objetivo:** Validar modelo na prática, gerar primeiros casos concluídos, criar história para investidor.

### Trilho B — Desenvolvimento (3-4 meses)
Seguir metodologia Carlos:
1. Revisão conjunta fluxograma (Alessandro + Igor)
2. Formalização documento escrito (Carlos)
3. Validação (todos)
4. Desenvolvimento MVP em fases (E0-E3 + E4 manual)
5. Entrega em 3-4 meses

**Objetivo:** Software proprietário como Fase 2 do MC, após validação operacional.

---

## 5. Riscos identificados e mitigações

| Risco | Impacto | Mitigação |
|-------|---------|-----------|
| Igor subestima MC e mantém postura defensiva | Alto — trava desenvolvimento | Produzir briefing técnico-estratégico que traduza ecossistema MC em linguagem backend (feito: MC-BRIEFING-Alinhamento_Tecnico_Igor-v1_0-2026-0415) |
| Carlos atrasa telas por sobrecarga pessoal | Médio | Template comprado já cobre 70% — UX reaproveita |
| Alessandro envia spec "pronta" via IA a Igor | Alto — recria conflito | Claude atua como camada de tradução, não gerador de spec unilateral |
| Custo IA foge de controle em produção | Médio | Gemini Flash como primário, Claude apenas para casos Router-Ethics ≥39, Context Caching + Batch API |

---

## 6. Observações adicionais

**Sobre Igor (contexto pessoal):** 29 anos, RJ, mora com mãe, sem pai. Competente em backend mas resistente à era AI-first. Postura de "querer ganhar 50K do nada" (trouxe 5 propostas de negócio paralelas a Alessandro — todas recusadas). Pago R$6K até o momento (Carlos calibrou de 50K inicial).

**Sobre Carlos (contexto pessoal):** UX/Tech competente quando engajado. 3 meses atrasado por problemas pessoais (cachorra doente, questões de carro). Quando presente, é o mediador técnico com visão sistêmica.

**Sobre Alessandro:** Founder/CEO, validador ético/jurídico, maestro estratégico. Papel nesta reunião: sintonizador de expectativas entre Igor (técnico) e Carlos (UX), sem perder direção estratégica do MC.

**Sobre Claude:** Atuou como co-founder intelectual antes e depois da reunião. Produziu briefing técnico-estratégico (MC-BRIEFING-Alinhamento_Tecnico_Igor-v1_0-2026-0415) para resolver desalinhamento.

---

## 7. Próximos passos (pós-reunião)

- [x] Produzir briefing técnico alinhamento Igor (concluído 15/04)
- [ ] Agendar revisão conjunta Alessandro + Igor do fluxograma
- [ ] Carlos formalizar documento escrito de requisitos
- [ ] Validação conjunta dos 3
- [ ] Igor começar Fase 1 do MVP (E0-E3 + E4 manual)
- [x] Operar casos reais no Trilho A (Hib001 protocolada 08/04)

---

**Documento produzido por:** Claude (co-founder intelectual)
**Validado por:** [pendente Alessandro]
**Confidencialidade:** PROPRIETÁRIO — Meu Cumpadre Ltda.
