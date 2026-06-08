---
tipo: processo
subtipo: jornada-mestre
codigo: MC-PROCESSO-Jornada_E0E7_Mestre
versao: 1.3
data-criacao: 2026-04-27
data-atualizacao: 2026-05-07
produzido-por: Claude Opus 4.6 (co-founder intelectual)
status: ativo
revisao-pendente: Alessandro Neves (validação final)
tags: [jornada, e0-e7, phi0, cadunico, processo-mestre, router-ethics, dignidade, pipeline]
supersede: MC-PROCESSO-Jornada_E0E7_Mestre-v1_2-2026-0427
changelog-v1_1: "Correções cirúrgicas 27/04/2026: Router-Ethics v9→v10 (Princípio 5 + tabela rota), Protocolo Urgência DIB (nó E1 B31/B91/B42/B43), ADR-009b Três Estados (E3 custódia), Dra. Juliana Pereira de Melo nomeada (E2+E6)"
changelog-v1_2: "Patch ADR-007 v3.1 27/04/2026: Φ₂ B2C ELIMINADO em 7 pontos (tabela mestre E6, E3 pricing Camada Zilda, E5 tabela por espécie, E6 critério/teles/o que acontece, métricas 4.1+4.2, pendências 5.1.3). Φ₁ = R$2.200/R$1.500 flat cobre E0-E7 completo."
changelog-v1_3: |
  Patch CadÚnico + Atualizações Acumuladas 07/05/2026:
  - NOVO: Seção 2.0 — Φ₀ CadÚnico como antessala pré-E0 (triagem gratuita + dossiê R$120 + passarela Φ₁)
  - Router-Ethics v10.0 → v11.0 (140 nós, 7 hooks, Hook 1b IVCAD-MC refatorado) em Princípio 5, E1, referências
  - ADR-007 v3.1 → v3.8 addendum (Φ₀-Triagem R$0, Φ₀-Dossiê R$120, Φ₁ até 4× não 3×, Φ₁-PcD escalonado LC 142, Φ₄ 3 regimes + Φ₄-CadÚnico escalonado)
  - E2 pricing: parcelas Φ₁ até 4× (não 3×), Φ₁c até 5× (mantido)
  - E6 Guardião: 3 regimes explícitos (Std R$19,90 · Φ₃/CadÚnico · R$0 D>C>V) + Φ₄-CadÚnico escalonado
  - E7 Guardião: atualizado com 3 regimes
  - Caso âncora CAD001 (CAD001) referenciado como validação do Φ₀
  - Caso âncora Hib001 (Hib001) referenciado como validação E0→E7
  - Lei 15.327/2026 (Atestmed permanente 30 dias) em E5
  - Métricas: adicionadas métricas Φ₀ (4.1) e receita Φ₀-Dossiê (4.2)
  - Pendências atualizadas: resolvidas 5.1.2 e 5.1.3, novas pendências Φ₀ e LC 142
  - Documentos relacionados: 8 novos canônicos adicionados (§7)
  - Referência ao POP: MC-POP-Phi0-Triagem-Operacional-v1_0-2026-0507.md
---

# MC-PROCESSO: Jornada Φ₀ + E0-E7 — Documento Mestre

> **Propósito deste documento:** servir de referência única e autoritativa sobre a jornada completa do cidadão dentro do ecossistema Meu Cumpadre, desde a triagem CadÚnico gratuita (Φ₀) até a soberania pós-benefício (E7). Este documento substitui qualquer descrição parcial anterior da jornada e deve ser consultado antes de qualquer decisão operacional, técnica ou comercial.

---

## 1. Visão Geral da Jornada

A jornada do MC possui duas portas de entrada e 9 etapas no total: a antessala CadÚnico (Φ₀) e o pipeline previdenciário (E0 a E7). As duas portas são independentes mas conectadas por passarelas. A jornada NÃO é linear obrigatória — em alguns casos pula etapas (ex: caso Rota C avança direto para advogado parceiro), em outros faz loops (ex: E3 com exigência do INSS volta a coletar documentos), e em outros o cidadão entra pelo Φ₀ e nunca chega ao E0 (precisava apenas de BF ou Tarifa Social).

### 1.1 Tabela mestre

| Etapa | Nome | Critério de saída | Executor primário | Custo médio | Tempo |
|-------|------|-------------------|-------------------|-------------|-------|
| **Φ₀-T** | Triagem CadÚnico | IVCAD-MC calculado + mapa de direitos | IA (Whisper + LLM) | R$5-7 | 15-25 min |
| **Φ₀-D** | Dossiê CadÚnico | Documentação organizada + preparação CRAS | Beto (API Humana) + IA | R$20-23 | 40-60 min |
| **E0** | Sinal Fraco Captado | 1 documento + CPF + vertical identificada | IA (Gemini Flash) | R$0,00 | 1,5 min |
| **E1** | Triagem Básica | Scores calculados + decisão de rota | IA + Anjo T2 | R$5,01 | 37 min |
| **E2** | Deliberação | Caso aprovado (entra) ou orientado (não entra) | IA + Supervisor T3 | R$1,29 | 5 min |
| **E3** | Dossiê Pronto | Checklist probatório completo | Anjo T2 + IA OCR + QA T3 | R$49,38 | ~340 min |
| **E4** | Protocolo Efetuado | Número de protocolo capturado + hash SHA-256 | Estagiário T1 → Bot Playwright | R$9,52 / R$3,50 | 67 min / 10 min |
| **E5** | Acompanhamento | Exigências respondidas OU resultado emitido | IA Watchdog + Anjo T2 | R$23,25 / R$2,15 | 57 dias média |
| **E6** | Desfecho Comunicado | Resultado entregue + oferta Guardião / handoff advogado | Anjo T2 | R$7,17 | 38 min |
| **E7** | Soberania | Monitoramento contínuo do benefício | IA 100% automática | R$0,00 | Contínuo |

### 1.2 Arquitetura de duas portas

```
PORTA 1 — CADÚNICO (Φ₀)              PORTA 2 — PREVIDENCIÁRIO (E0)
        │                                      │
   Φ₀-Triagem (R$0)                        E0 Sinal Fraco
        │                                      │
   ┌────┼────┐                              E1 Triagem
   │         │                                  │
Φ₀-Dossiê  FIM                             E2 Deliberação
 (R$120)  (só info)                             │
   │                                        E3 Dossiê
   │    PASSARELA                               │
   ├──────────────────────────────────►     E4 Protocolo
   │  (se elegibilidade previdenciária         │
   │   detectada → Φ₁ R$2.200/R$1.500)    E5 Acompanhamento
   │                                            │
   ▼                                        E6 Desfecho
Φ₄-CadÚnico                                    │
(guardião                                   E7 Soberania
 escalonado)                               (Φ₄ Guardião)
```

**Regra fundamental:** o cidadão que entra pelo Φ₀ pode sair em qualquer ponto com valor entregue (radar gratuito, dossiê organizado, informação de direitos). A passarela Φ₀→Φ₁ é informativa — nunca compulsória.

### 1.3 Princípios da Jornada

**Princípio 1 — Dignidade > Compliance > Viabilidade.** Toda decisão de processo respeita essa hierarquia. Se uma otimização técnica ferir a dignidade, ela é descartada.

**Princípio 2 — Interface única visível: WhatsApp.** O cidadão hipervulnerável NUNCA enxerga o backend, o ClickUp, o N8N, o Bitwarden, o Asaas. Para ele, é uma conversa de WhatsApp com o Cumpadre.

**Princípio 3 — Coleta progressiva, nunca formulário.** A informação é coletada pouco a pouco, em conversa natural. Nunca um formulário com 30 campos.

**Princípio 4 — Proof-First.** Cada etapa que envolve documento exige hash SHA-256 + lei aplicável + evidência material. Sem isso, não avança.

**Princípio 5 — Handoff humano em qualquer momento.** Cidadão pode pedir atendimento humano em qualquer etapa, sem retenção por IA. Router-Ethics 11.0 (140 nós, 7 hooks, cascata D>C>V) obriga handoff automático quando qualquer um dos três scores cruza seu threshold: Confidence <70 (certeza jurídica insuficiente), Complexity alta (fricção documental/processual elevada) ou Fraudscore alto (risco de predação detectado). Os três scores são independentes — HANDOFF se qualquer um disparar; AUTONOMIA somente se todos aprovarem simultaneamente.

**Princípio 6 — Firewall OAB.** O MC nunca pratica advocacia. Quando o caso entra em terreno jurídico (Rota C, recurso, ação judicial), o handoff para a advogada parceira Dra. Juliana Pereira de Melo (OAB-GO 38.662, Melo Advogados Associados) é obrigatório. Parceira credenciada (Selo Premium Marketplace Ético), **não sócia**. Parecerista oficial.

**Princípio 7 — Duas verticais, uma dignidade.** *(NOVO v1.3)* O cidadão CadÚnico e o cidadão previdenciário são frequentemente a mesma pessoa. A jornada Φ₀ e a jornada E0-E7 compartilham infraestrutura, princípios e o mesmo WhatsApp. A passarela entre elas existe porque a vulnerabilidade não respeita silos administrativos.

---

## 2. Detalhamento Etapa por Etapa

### 2.0 Φ₀ — Antessala CadÚnico *(NOVO v1.3)*

#### 2.0.1 Φ₀-Triagem — Radar CadÚnico Gratuito

**O que acontece:** Cidadão envia comprovante CadÚnico (PDF ou foto) via WhatsApp. O MC calcula o IVCAD-MC (6 dimensões, 40 indicadores binários, fórmula oficial do MDS reproduzida localmente — ADR-013), gera mapa de direitos não-acessados, detecta armadilhas de acumulação e pendências cadastrais, e verifica passarela previdenciária.

**Quem opera:** IA (Whisper + LLM) para processamento. Beto supervisiona e envia relatório.

**Custo para o cidadão:** R$0 (gratuito). COGS estimado: R$5-7/caso.

**Critério de saída:**
- IVCAD-MC calculado (6 dimensões + score global) OU modo parcial declarado (se sem comprovante)
- Mapa de direitos não-acessados gerado (top 3 programas prioritários)
- Armadilhas e pendências verificadas (A1-A5, P1-P5)
- Passarela previdenciária identificada (se aplicável)
- Relatório WhatsApp enviado ao cidadão

**Motor de triagem — 4 camadas:**

| Camada | Função | Output |
|--------|--------|--------|
| 1 — IVCAD-MC | Score numérico por dimensão (NC, DPI, DCA, TQA, DR, CH) | Radar 0-1 + benchmark Brasil (0,283) |
| 2 — Mapa de direitos | Cruzamento perfil × 46 programas federais | Lista elegíveis não-acessados |
| 3 — Armadilhas/pendências | 5 armadilhas de acumulação + 5 pendências preventivas | Alertas ao cidadão |
| 4 — Passarela Φ₀→Φ₁ | Detecção de elegibilidade previdenciária | Sinalização de Φ₁ |

**O que Φ₀ NÃO é:**
- Não é diagnóstico social (competência assistente social, Lei 8.662/1993)
- Não é parecer jurídico (firewall OAB)
- Não substitui o IVCAD oficial do MDS
- Não promete resultado nem prazo de concessão

**Caso de validação — CAD001 (CAD001):** mãe solo 32a, filho [FILHO CAD001 · REDIGIDO] 12a, Goiânia/GO, NIS [NIS·CAD001 · REDIGIDO]. IVCAD-MC = 0,268 (TQA 0,714 🔴 + DR 0,750 🔴, demais 🟢). Direitos não-acessados identificados: Tarifa Social Água, Auxílio Gás, Facultativo Baixa Renda. BF liberado ref 05/2026, R$650. Primeiro caso âncora vertical CadÚnico.

**POP detalhado:** `MC-POP-Phi0-Triagem-Operacional-v1_0-2026-0507.md` — 9 passos operacionais, 8 perfis de roteamento IVCAD-MC, 7 templates de copy por persona.

#### 2.0.2 Φ₀-Dossiê — Organização Documental CadÚnico

**O que acontece:** Quando o cidadão precisa de ajuda para organizar documentação (cadastro desatualizado, direitos que exigem requerimento ativo, preparação para entrevista CRAS), o MC oferece o Φ₀-Dossiê.

**Quem opera:** Beto (API Humana ~40 min/caso) + IA (extração e classificação).

**Custo para o cidadão:** R$60 entrada + R$60 sucesso (em 4× R$15) = R$120 total. Success fee permitido no âmbito CadÚnico/assistencial (não OAB). ⚠️ PROVISIONAL — validação Dra. Juliana Bloco M2, 19/05.

**Critério de saída:**
- Dossiê documental estruturado entregue ao cidadão
- Formulário pré-analisado com pendências corrigidas
- Checklist de preparação para entrevista CRAS
- Se passarela previdenciária detectada: cidadão informado sobre Φ₁

**COGS estimado:** R$20-23/caso (API Humana ~R$15 + componente técnico ~R$7).

**Margem estimada:** R$97-100/caso.

#### 2.0.3 Passarela Φ₀ → Φ₁

Quando o IVCAD-MC + perfil do cidadão indicam elegibilidade previdenciária, o Φ₀ sinaliza a passarela. A passarela é sempre informativa — nunca compulsória.

| Perfil detectado no Φ₀ | Passarela | Destino MC |
|------------------------|-----------|-----------|
| Dona/dono de casa sem renda, CadÚnico | Facultativo Baixa Renda (5% SM = R$75,90/mês) | Informar → cidadão decide |
| PcD com RFPC ≤ ¼ SM, sem BPC | BPC via INSS | Φ₀-Dossiê → Φ₁ |
| PcD com BPC que arrumou emprego | Auxílio-Inclusão (½ SM) | Informar → Φ₁ se necessário |
| Idoso ≥ 65, RFPC ≤ ¼ SM, sem benefício | BPC idoso ou aposentadoria rural/híbrida | Φ₀-Dossiê → Φ₁ |
| Pescador artesanal em defeso | Seguro-Defeso via MTE | Informar → direcionar MTE |
| Trabalhador rural com tempo contribuição | Aposentadoria rural/híbrida | Φ₁ diretamente |

**Regra D>C>V:** nunca pressionar a passarela. O cidadão decide.

**Firewall:** cobrar Φ₁ (R$2.200) por serviço que é escopo Φ₀ CadÚnico (R$120) é **PROIBIDO** (ADR-007 v3.8 §A4). Aplicar success fee do Φ₀ no Φ₁ previdenciário por analogia é **PROIBIDO**.

#### 2.0.4 Φ₄-CadÚnico — Guardião CadÚnico *(pós-Φ₀)*

Após o Φ₀, o cidadão pode aderir ao Guardião CadÚnico: monitoramento de condicionalidades (frequência escolar, vacinação), alerta de vencimento cadastral (P1 — 24 meses), e alerta de direitos novos que surgirem.

**Valor:** escalonado R$0 a R$19/mês por β_rms per capita (BF incluso no cálculo). ⚠️ PROVISIONAL — ADR-007 v3.8 §A1.3.

---

### 2.1 E0 — Sinal Fraco Captado

**O que acontece:** Cidadão envia primeira mensagem no WhatsApp. Pode ser texto, áudio ou foto. A IA (Gemini Flash) classifica intenção, identifica vertical (previdenciário, bancário, BPC, acidentário etc.) e extrai CPF se mencionado.

**Nota v1.3:** Se a IA detectar que o cidadão tem perfil CadÚnico (menciona BF, CRAS, renda baixa, não menciona benefício previdenciário), pode redirecionar para o fluxo Φ₀ antes de avançar para E1. Isso evita cobrar Φ₁ quando o escopo é Φ₀.

**Quem opera:** IA totalmente automática. Nenhum humano envolvido.

**Critério de saída:**
- 1 documento OU 1 fato declarado pelo cidadão
- CPF identificado (pode ser solicitado se não vier)
- Vertical classificada com confidence ≥70%

**Tela WhatsApp (visão do cidadão):**
- Mensagem de boas-vindas humanizada
- Pergunta: "Como posso te ajudar?" com botões: Aposentadoria / BPC / Auxílio-doença / CadÚnico/Bolsa Família / Outro
- Solicitação de CPF em linguagem simples ("Pode me dizer seu CPF? É o número do documento.")

**Tela Dashboard (visão da equipe):**
- Caso ainda NÃO aparece no dashboard. E0 é invisível para a equipe operacional.
- Caso aparece somente quando entra em E1.

**Riscos e mitigações:**
- **Risco:** cidadão analfabeto digital não entende botões → **Mitigação:** todas as opções têm equivalente em áudio + cidadão pode descrever em áudio livre
- **Risco:** confidence baixa em vertical → **Mitigação:** loop de pergunta clarificadora antes de avançar
- **Risco:** cidadão CadÚnico entra no funil previdenciário desnecessariamente → **Mitigação:** botão CadÚnico/Bolsa Família redireciona para Φ₀ *(NOVO v1.3)*

---

### 2.2 E1 — Triagem Básica Concluída

**O que acontece:** Conversa guiada de 8-12 perguntas progressivas para coletar dados mínimos: nome completo, data de nascimento, tipo de trabalho atual e passado, situação atual (recebe algum benefício? está em fila? foi indeferido?), documentos disponíveis. Router-Ethics 11.0 calcula scores.

**Quem opera:** IA conduz a conversa. Anjo T2 monitora e pode intervir se detectar fragilidade emocional ou complexidade.

**Critério de saída:**
- Os 3 scores calculados (confidence, complexity, fraudscore)
- Decisão de rota definida (A, B, C ou D-Interrupção)

**Tela WhatsApp (cidadão):**
- Conversa natural com perguntas espaçadas
- Tom acolhedor: "Me conta o que tá acontecendo, com calma..."
- Coleta progressiva: nome, idade, tipo de trabalho, tempo de contribuição estimado, condição de saúde (se aplicável)
- Indicador visual de progresso (opcional): "Já temos 60% das informações."

**Tela Dashboard (equipe):**
- Card do caso aparece com: nome, CPF, vertical identificada, scores
- Indicador visual de zona:
  - 🔴 Vermelha (Score <40): caso simples ou inelegível
  - 🟡 Amarela (Score 40-70): caso médio, atenção
  - 🟢 Verde (Score >70): caso forte
- Botão: "Assumir caso" (Anjo T2 pode reivindicar)

**Decisão de rota — regras (Router-Ethics 11.0):**

| C_conf (Confidence) | C_comp (Complexity) | C_fraud (Fraudscore) | Decisão |
|---|---|---|---|
| ≥70 | Baixa | Normal | **Rota A** — Automação com supervisão leve (15-25% dos casos) |
| ≥70 | Média | Normal | **Rota B** — IA + Anjo T2 assume (50-60%) |
| 40–70 (Zona Amarela) | Qualquer | Normal | **Rota B** — Human API aprofunda triagem |
| <40 (Vermelha) | Qualquer | Normal | **Rota C** — Handoff advogado obrigatório (15-25%) |
| Qualquer | Alta | Normal | **Rota C** — Handoff advogado obrigatório |
| Qualquer | Qualquer | Alto | **Rota D** — Interrupção Dignidade (3-5%) |

Distribuições são DESCRITIVAS, não prescritivas.
Zonas de Confidence: Verde ≥70 (pipeline liberado) | Amarela 40–70 (triagem aprofundada) | Vermelha <40 (pipeline bloqueado).
Fonte canônica: `_MC-RouterEthics_11_v1_1-2026-0505-CLevel.md`

#### 🚨 Protocolo de Urgência DIB — Nó Obrigatório em E1

Este protocolo é mandatório para TODOS os casos de incapacidade temporária (B31, B91) ou invalidez (B42, B43). O Anjo T2 deve perguntar explicitamente em E1:

*"Essa situação — o atestado, a cirurgia, a alta do hospital — aconteceu há quanto tempo?"*

**Por que é urgente:**
Art. 60, §1º, Lei 8.213/1991: para auxílio por incapacidade temporária, a DIB (Data de Início do Benefício) retroage à data do evento médico quando o protocolo é realizado dentro de 30 dias do início da incapacidade. Para invalidez, o Art. 43, §1º estabelece a mesma lógica. Após esse prazo: DIB = DER — retroativo perdido permanentemente, sem recurso.

**Nota v1.3 — Lei 15.327/2026 (Atestmed):** prazo de validade do atestado médico para perícia agora é permanente (30 dias), não mais experimental. ~88 regras do Grimório afetadas, propagação SLA 72h.

**Perda média por dia de atraso:** R$57 a R$190 (range benefício 1 SM a 2 SM). Irrecuperável após 30 dias.

**Ação imediata quando evento ≤30 dias:**
- Registrar data do evento no MCP Tier 2
- Elevar prioridade para SLA máximo 24h úteis até E4
- Tag `[DIB-URGENTE]` no ClickUp + alerta automático ao Supervisor T3
- Anjo comunica ao cidadão: *"Precisamos correr — cada dia conta no valor que o senhor vai receber."*

**Ação quando evento >30 dias:** fluxo normal, sem alteração de SLA.

**Riscos e mitigações:**
- **Risco:** cidadão desiste no meio da conversa → **Mitigação:** salvamento progressivo de estado, retomada ao voltar
- **Risco:** Anjo não está disponível para casos em Zona Amarela → **Mitigação:** fila priorizada por urgência
- **Risco:** detecção de fraude falsa positiva → **Mitigação:** revisão humana obrigatória antes de bloqueio

---

### 2.3 E2 — Deliberação

**O que acontece:** Supervisor (Alessandro ou Beto designado) revisa o caso e decide se entra no pipeline pago. Se entra, avança para E3. Se não entra, cidadão recebe orientação humanizada com encaminhamento (CRAS, Defensoria, sindicato, advogado parceiro).

**Quem opera:** Supervisor T3 (Alessandro ou operador designado).

**Critério de saída:**
- Caso deliberado (entra no pipeline) com cobrança Φ₁ disparada
- OU caso não deliberado, com orientação registrada e encaminhamento dado

**Tela Dashboard (equipe):**
- Resumo do caso com scores e classificação
- Análise CNIS automática (se já disponível via gov.br)
- Simulação comparativa de benefícios (espécies que o cidadão poderia se enquadrar)
- Botões: "Deliberar (entrar)" / "Não deliberar (orientar)"
- Se "Não deliberar": campo obrigatório para registrar orientação dada

**Tela WhatsApp (cidadão) — SE NÃO DELIBERADO:**
- Mensagem honesta e digna: "Cumpadre, com os papéis que o senhor tem hoje, a regra do INSS quase não deixa brecha. Se eu prometesse agora, estaria mentindo. Mas não vou te abandonar."
- Oferecer alternativa real e específica (ex: "Vou te indicar o CRAS mais próximo da sua casa, que tem assistente social que pode te ajudar com [necessidade].")
- Manter o canal aberto: "Se mudar alguma coisa, volta aqui."

**Tela WhatsApp (cidadão) — SE DELIBERADO:**
- Apresentação do plano: "Cumpadre, analisamos seu caso e dá pra ir adiante. Vamos organizar todos os papéis pra dar entrada no INSS."
- Apresentação do preço (Teste Zilda):

| Perfil | Valor | Parcelas | Base |
|--------|-------|----------|------|
| Padrão | **R$ 2.200** | até **4×** (PIX/boleto/cartão) | ADR-007 v3.8 · Φ₁ |
| CadÚnico (renda ≤ ½ SM) | **R$ 1.500** | até 5× (boleto/cartão) | ADR-007 v3.8 · Φ₁c |
| PcD LC 142 grau leve | **R$ 1.500** | até 4× | ADR-007 v3.8 · Φ₁-PcD ⚠️ PROVISIONAL |
| PcD LC 142 grau moderado | **R$ 1.200** | até 4× | ADR-007 v3.8 · Φ₁-PcD ⚠️ PROVISIONAL |
| PcD LC 142 grau grave | **R$ 800** | até 4× | ADR-007 v3.8 · Φ₁-PcD ⚠️ PROVISIONAL |

- Comparação com referência cotidiana: "É menos do que a senhora gasta em 3 meses de feira."
- Solicitação de pagamento via PIX/boleto/cartão (via Asaas)

**Princípio inviolável (ADR-007 v3.8):** zero cobrança B2C adicional ao Φ₁. O preço rastreia custo e complexidade, nunca valor desbloqueado. Constraint Φ₃: parcela mensal ≤ 0,5 × β_rms (renda do cidadão). Success fee VEDADO no previdenciário.

**Status:** ⚠️ PROVISIONAL — aguarda parecer Dra. Juliana 19/05. Φ₁-PcD escalonado requer V21 (02/06).

**Riscos e mitigações:**
- **Risco:** Supervisor sobrecarregado vira gargalo → **Mitigação:** SLA de 24h para deliberação, alerta automático se vencer
- **Risco:** cidadão entende rejeição como abandono → **Mitigação:** comunicação humanizada obrigatória, encaminhamento real (não genérico)
- **Risco:** cidadão PcD cobra Φ₁ Standard sendo elegível a Φ₁-PcD → **Mitigação:** Router-Ethics 11.0 nó D43 detecta PcD CIF e aplica faixa escalonada *(NOVO v1.3)*

---

### 2.4 E3 — Dossiê Pronto

**O que acontece:** ESTA É A ETAPA MAIS LONGA E MAIS CARA. Coleta de certidões, laudos, declarações, comprovantes. OCR valida documentos. Montagem do dossiê Proof-First (Lei + Evidência + Hash SHA-256). QA do supervisor.

**Quem opera:** Anjo T2 (relacionamento) + IA (OCR) + Supervisor T3 (QA final).

**Critério de saída:**
- Checklist probatório 100% completo para a espécie de benefício
- Todos os documentos com OCR validado e hash gerado
- Dossiê PDF consolidado e aprovado por QA

**Tempo variável por espécie de benefício:**

| Espécie | Documentos necessários | Tempo de coleta estimado |
|---------|------------------------|--------------------------|
| Salário-maternidade | RG, CPF, certidão de nascimento da criança | 30 min |
| Auxílio-doença | RG, CPF, laudos médicos, exames | 60 min |
| Aposentadoria por idade urbana | RG, CPF, CNIS | 45 min |
| Aposentadoria por idade rural | RG, CPF, CNIS, certidão de nascimento inteiro teor, certidão de casamento c/ profissão, declaração STR, autodeclaração rural | 340 min |
| BPC/LOAS deficiência | RG, CPF, CadÚnico atualizado, laudo médico (PcD), composição familiar | 180 min |
| BPC/LOAS idoso | RG, CPF, CadÚnico atualizado, comprovante renda familiar | 90 min |
| Aposentadoria PcD LC 142 | RG, CPF, CNIS, CIN-PcD, laudos biopsicossociais, Decreto 8.145 | [CRONOMETRIA-PENDENTE] |

**Tela WhatsApp (cidadão):**
- Checklist visual em mensagens espaçadas:
  - "Cumpadre, agora vou pedir os papéis um por um. Começando pelo RG: pode tirar uma foto bem iluminada e me mandar?"
  - Após cada envio: "Recebi! Tá legível ✅ Próximo: CPF"
  - Indicador de progresso: "Faltam 2 documentos."
- Se documento não está legível: "Cumpadre, tá meio borrado. Pode tirar de novo, com mais luz?"

**Tela Dashboard (equipe):**
- Checklist interativo por espécie (checkboxes)
- Preview dos documentos recebidos com OCR aplicado
- Status por documento: Pendente / Em coleta / Validado / QA aprovado
- Visualização do dossiê Proof-First montado (PDF com hash SHA-256 por página)
- Botão: "Dossiê completo — enviar para protocolo"

**Custódia — ADR-009b (Três Estados, selado 17/04/2026):**
Durante E3, o dossiê está em estado **S1 — Intermediário**: custodiante técnico é o MC, cifrado por dupla chave, titular é o cidadão (base legal LGPD art. 7º, V). Cada documento recebe hash SHA-256 imediatamente após validação OCR.

Na entrega do dossiê ao cidadão (pré-E4), o dossiê transita para **S2 — Consolidado**: MC entrega e apaga do servidor em 7 dias após confirmação de entrega.

Migração para **S3 — Probatório** (vault do escritório parceiro, 10 anos CED): somente mediante Token de Transferência de Titularidade (TTA) assinado digitalmente pelo cidadão. Zero transferência sem TTA.

Referência: `MC-ADR-009-TresEstados-Custodia-Dossie-v1_0-2026-0417.md`

**Riscos e mitigações:**
- **Risco:** cidadão não consegue obter certidão antiga → **Mitigação:** Anjo T2 orienta como solicitar no cartório, ou aciona Dra. Juliana se for caso de busca jurídica
- **Risco:** OCR falha em documentos manuscritos → **Mitigação:** validação humana obrigatória se confidence <70%
- **Risco:** cidadão interpreta preço como barreira de acesso → **Mitigação:** Φ₁c R$1.500 (CadÚnico) / Φ₁-PcD escalonado, parcelamento em 4-5×, comparação com referência cotidiana — apresentado com transparência em E2 antes de iniciar E3

---

### 2.5 E4 — Protocolo Efetuado

**O que acontece:** Login no gov.br/Meu INSS, upload dos documentos, seleção de localidade, protocolo do requerimento, captura da DER (Data de Entrada do Requerimento) e número de protocolo.

**FASE MVP — MANUAL:** Estagiário T1 (Beto designado) opera manualmente. Tempo: ~67 min/caso. Custo: R$9,52.

**FASE PÓS-MVP — AUTOMATIZADA:** Bot Playwright. Tempo: ~10 min/caso. Custo: R$3,50.

**GARGALO CRÍTICO:** O sistema Meu INSS é instável. Caso real [TITULAR-pseudonimizado] (26/03/2026): 87 minutos, 4 tentativas de upload. Por isso o monitoramento de horário (heatmap) é crítico — ver §3.

**Quem opera:** Estagiário T1 (manual) ou Bot Playwright (automático).

**Critério de saída:**
- Número de protocolo capturado e armazenado
- DER registrada
- Hash SHA-256 gerado da confirmação de protocolo

**Tela Dashboard (equipe) — FASE MVP:**
- Botão: "Protocolar no Meu INSS"
- Campos: CPF do cidadão, senha gov.br (criptografada — Bitwarden Org MC, ADR-009a v2.0, AES-256)
- Status em tempo real: Logando / Uploading (tentativa N/5) / Selecionando localidade / Protocolando / ✅ Concluído
- Em caso de falha: "Sistema INSS indisponível — reagendado para [próximo horário ótimo]"

**Tela Dashboard (equipe) — FASE PÓS-MVP:**
- Botão: "Enviar para fila de protocolo"
- Status automático: Na fila (posição N) → Processando → ✅ Protocolo XXXXX
- Métricas exibidas: tempo de processamento, número de tentativas, horário de execução

**Tela WhatsApp (cidadão):**
- "Cumpadre, seu protocolo SAIU! Número: [Protocolo · REDIGIDO]. Data de entrada: 26/03/2026. Agora a gente acompanha junto. Se vier qualquer novidade, te aviso."

**Custódia de senha gov.br — atenção crítica:**
Bitwarden Org MC, AES-256, 2FA TOTP, auto-lock 15min. Operador usa dispositivo confiável. Auditoria mensal de acessos (ADR-009a v2.0).

**Riscos e mitigações:**
- **Risco:** sistema INSS indisponível → **Mitigação:** retry automático em horário ótimo + heatmap (ver §3)
- **Risco:** vazamento de senha gov.br → **Mitigação:** custódia Bitwarden Org MC, dispositivo único, auditoria mensal
- **Risco:** rejeição automática do INSS por documento incompleto → **Mitigação:** QA do dossiê em E3 obrigatório

---

### 2.6 E5 — Acompanhamento

**O que acontece:** Bot monitora status no Meu INSS mensalmente (futuramente em tempo real via watchdog). Se houver exigência: notifica cidadão + Anjo coleta documentos faltantes. Se necessário acionar Central 135: estagiário liga.

**Quem opera:** IA Watchdog (automação) + Anjo T2 (se exigência).

**Critério de saída:**
- Exigências respondidas (se houver)
- OU resultado do INSS emitido (deferido / indeferido)

**Tempo:** Variável. Média 57 dias (TMC INSS jan/2026), mas pode chegar a 102 dias dependendo da UF. Dado LAI SEI 24851867: ~52,67 dias média.

**Nota v1.3 — Lei 15.327/2026 (Atestmed permanente 30 dias):** 3 indeferimentos → perícia obrigatória (art. 8º). Impacto nos casos B31/B91: monitorar se Atestmed atende ao caso antes de protocolar, senão gasta DIB.

**Tela WhatsApp (cidadão):**
- Alerta mensal automático: "Seu processo está em análise. Posição estimada: ~45 dias para o resultado."
- Se exigência: "O INSS pediu um documento extra: [descrição em linguagem simples]. A gente te ajuda a conseguir."
- FAQ automático: cidadão pergunta "Doutor, e aí, como tá meu processo?" → resposta imediata com status real

**Tela Dashboard (equipe):**
- Lista de casos em acompanhamento, ordenada por:
  - Dias desde protocolo (mais antigos primeiro)
  - Exigências pendentes
  - TMC estimado
- Semáforo de status:
  - 🟢 Em dia (< TMC médio)
  - 🟡 Perto do prazo (≥ TMC médio)
  - 🔴 Fora do prazo (>45 dias acima do TMC)
- Alerta automático se exigência detectada pelo watchdog
- Botão: "Responder exigência" (abre fluxo de upload novo)

**Nota ADR-007 v3.8:** Φ₂ B2C ELIMINADO desde v3.1. O cidadão não recebe nenhuma cobrança adicional nesta etapa. Φ₁ cobrado em E2 cobre integralmente E0–E7. Monetização pós-protocolo transferida para B2B (Ψ₁ — licenciamento do dossiê ao escritório parceiro, Básico R$600-800 / Intermediário R$1.200-1.800 / Premium R$2.500-4.000 por caso).

**Riscos e mitigações:**
- **Risco:** exigência expira sem resposta → **Mitigação:** alerta diário escalando para Anjo T2 a partir de 5 dias antes do vencimento
- **Risco:** cidadão se assusta com tempo de espera → **Mitigação:** comunicação proativa mensal mesmo sem novidade ("ainda em análise, dentro do prazo")

---

### 2.7 E6 — Desfecho Comunicado

**O que acontece:** Resultado do INSS é comunicado ao cidadão com empatia. Se deferido: celebração + oferta Guardião. Se indeferido: acolhimento + opções (recurso, novo requerimento, advogado parceiro). Nenhuma cobrança adicional ao cidadão — Φ₁ cobre esta etapa integralmente.

**Quem opera:** Anjo T2 (comunicação humanizada).

**Critério de saída:**
- Resultado entregue ao cidadão
- Se deferido: oferta Guardião feita (aceite ou recusa registrada)
- Se indeferido: opção de encaminhamento definida

**Tela WhatsApp (cidadão) — DEFERIDO:**
- "Cumpadre, SAIU! Seu benefício foi APROVADO! 🎉 Valor: R$X/mês. Primeiro pagamento previsto: [data]."
- Oferta Guardião com 3 regimes:

| Regime | Valor | Quem |
|--------|-------|------|
| Standard | R$19,90/mês | Cidadão padrão |
| Φ₃/CadÚnico | Parcela ≤ 0,5 × β_rms | Cidadão CadÚnico/baixa renda |
| D>C>V | R$0/mês | Cidadão em vulnerabilidade extrema |

- "Quer ativar o Guardião do Benefício? A gente monitora pra ninguém mexer no seu benefício sem você saber."

**Tela WhatsApp (cidadão) — INDEFERIDO:**
- "Cumpadre, infelizmente o INSS negou o pedido. Mas isso NÃO quer dizer que acabou. Calma."
- "Você tem 3 caminhos:
  1. Recurso administrativo (a gente te ajuda a montar)
  2. Novo requerimento com documentos melhores
  3. Caminho judicial com Dra. Juliana Pereira de Melo (OAB-GO 38.662) ou rede certificada MC"
- Se Rota C → handoff para Dra. Juliana ou rede certificada MC

**Tela Dashboard (equipe):**
- Resultado registrado: Deferido / Indeferido / Em exigência
- Se deferido:
  - Oferta Guardião enviada (sim / não) + regime aplicado + resposta registrada
  - Botão: "Handoff advogado" opcional (abre Ψ₁ — licenciamento dossiê B2B)
- Se indeferido:
  - Opções de encaminhamento (recurso / novo req / advogado)
  - Botão: "Handoff advogado" (aciona Ψ₁)

**Riscos e mitigações:**
- **Risco:** cidadão recebe resultado sem comunicação humanizada → **Mitigação:** alerta automático para Anjo T2 assumir comunicação em até 2h após detecção de mudança de status
- **Risco:** indeferimento desestimula cidadão → **Mitigação:** Anjo treinado para acolher + apresentar caminhos sem pressionar
- **Risco:** Guardião ofertado como up-sell agressivo → **Mitigação:** Φ₄ ≠ up-sell (princípio ADR-007). 3 regimes garantem que ninguém fica sem proteção por falta de renda.

---

### 2.8 E7 — Pós-Desfecho / Soberania

**O que acontece:** Monitoramento mensal automático do benefício. Alerta se desconto indevido (consignado fraudulento). Cidadão ganha autonomia.

**Quem opera:** IA 100% automática (Guardião do Benefício).

**Critério de saída:** Etapa contínua. Não tem fim — enquanto o cidadão tiver Guardião ativo, o monitoramento segue.

**Guardião — 3 regimes (ADR-007 v3.8):**

| Regime | Valor | Público | Nota |
|--------|-------|---------|------|
| Standard | R$19,90/mês | Cidadão padrão pós-E6 | Cartão/PIX recorrente |
| Φ₃/CadÚnico | ≤ 0,5 × β_rms | CadÚnico/baixa renda | Escalonado por β_rms per capita |
| D>C>V | R$0/mês | Vulnerabilidade extrema | Subsidiado cruzado (Configuração X: Ψ₃+Ψ₄) |

**Tela WhatsApp (cidadão):**
- Alerta mensal: "Tudo certo com seu benefício este mês. Valor creditado: R$X. Nenhum desconto suspeito."
- Se desconto suspeito: "ALERTA, cumpadre! Detectamos um desconto de R$89,90 que você NÃO autorizou. Quer que a gente investigue?"

**Tela Dashboard (equipe):**
- Lista de Guardiões ativos por regime (Std / Φ₃ / D>C>V)
- MRR (Monthly Recurring Revenue): Σ assinaturas ativas por regime
- Alertas de fraude detectados pelo bot
- Métricas de retenção

**Riscos e mitigações:**
- **Risco:** Guardião não detecta fraude sutil → **Mitigação:** modelo de detecção evolui com cada caso, aprendizado contínuo
- **Risco:** falsos positivos preocupam cidadão → **Mitigação:** filtro humano antes de alertar em casos ambíguos

---

## 3. Heatmap de Horários do Meu INSS

O sistema Meu INSS tem performance variável durante o dia. Esta tabela é referência crítica para E4 (protocolo) e E5 (consulta de status):

| Horário | Performance | Recomendação |
|---------|-------------|--------------|
| 6h-8h | 🟢 Rápido | Protocolar aqui (janela ouro) |
| 8h-11h | 🟡 Normal | OK para operações regulares |
| 11h-14h | 🟡 Lento | Evitar uploads pesados |
| 14h-17h | 🔴 Muito lento | NÃO protocolar (caso [TITULAR-pseudonimizado]) |
| 17h-19h | 🟡 Normal | OK |
| 19h-22h | 🟢 Rápido | Protocolar aqui (segunda janela) |
| 22h-6h | ⚫ Manutenção | INSS frequentemente offline |

**Regra:** Bot Playwright (Fase pós-MVP) deve ser configurado para protocolar prioritariamente nas janelas verdes.

---

## 4. Métricas Mestres da Jornada

### 4.1 Métricas operacionais (dashboard principal)

| Métrica | Meta | Onde medir |
|---------|------|------------|
| Casos Φ₀-Triagem/mês | 50+ (gratuito) | WhatsApp + ClickUp *(NOVO v1.3)* |
| Conversão Φ₀-Triagem → Φ₀-Dossiê | ≥ 20% | ClickUp *(NOVO v1.3)* |
| Conversão Φ₀-Triagem → Φ₁ previdenciário | ≥ 10% | ClickUp *(NOVO v1.3)* |
| Casos E0-E7 hoje / semana / mês | — | Contador por etapa |
| Casos em fila E4 (protocolo) | <10 | Fila do Bot Playwright |
| Casos fora do prazo E5 (>45 dias) | <5% | Semáforo vermelho |
| Receita do mês (Φ₀-Dossiê + Φ₁ + Ψ₁ + Φ₄) | crescente | Soma de pagamentos Asaas |
| COGS do mês | <40% receita | Soma horas × custo executor |
| Margem bruta | >60% | Receita - COGS |
| NPS pós-E6 | >85 | Pesquisa pós-desfecho |
| Guardiões ativos (MRR) | crescente | Contador E7 + Φ₄-CadÚnico por regime |

### 4.2 Métricas estratégicas (reportadas mensalmente)

| Métrica | Meta | Baseline INSS |
|---------|------|----------------|
| Taxa de concessão (Previdenciário) | 97% | 45-52% |
| Tempo médio de resolução E0→E6 | 60 dias | 180+ dias |
| Custo por caso (operacional E0-E7) | R$95 | — |
| Custo por caso (Φ₀-Dossiê) | ≤ R$25 | — *(NOVO v1.3)* |
| Receita média por caso (Φ₁) | R$2.200 (std) / R$1.500 (CadÚnico/PcD-Leve) | — |
| Receita média por caso (Φ₀-Dossiê) | R$120 | — *(NOVO v1.3)* |
| Direitos não-acessados identificados/caso Φ₀ | ≥ 2 | — *(NOVO v1.3)* |
| Detecção de fraude consignada (E7) | 95% | <10% |
| Retenção Guardião (após 6 meses) | >70% | — |

---

## 5. Pendências e Pontos de Decisão

### 5.1 Pendências identificadas

1. **SLA de deliberação (E2):** atual 24h. Confirmar se é viável com Beto operando solo.
2. ~~**Pricing Φ₁ faixas CadÚnico:**~~ ✅ RESOLVIDO v3.8 — Φ₁c R$1.500 (≤ ½ SM), Φ₁-PcD escalonado por grau LC 142.
3. ~~**Pricing Ψ₁ (B2B):**~~ ✅ RESOLVIDO v3.7 — 3 tiers: Básico R$600-800 / Intermediário R$1.200-1.800 / Premium R$2.500-4.000. ⚠️ Ψ₁ Premium tem Note N7 aberta (stress-test OAB requalificação).
4. **Bot Playwright (E4):** atualmente manual. Quando Igor entra na Fase 2, Playwright vira prioridade. Definir critério de migração (ex: >50 protocolos/mês).
5. ~~**Guardião (E7) — preço:**~~ ✅ RESOLVIDO v3.7/v3.8 — 3 regimes (Std R$19,90 / Φ₃/CadÚnico / D>C>V R$0) + Φ₄-CadÚnico escalonado. Pendente: forma de pagamento recorrente (cartão? PIX recorrente Asaas?).
6. **Casos órfãos:** o que fazer com casos que entram em E1 mas o cidadão desiste no meio? Quanto tempo manter no funil? Quando arquivar?
7. **Loop de exigência (E5):** quantas vezes coletamos documentos extras para a mesma exigência antes de escalar para Rota C?
8. **Φ₀ success fee CadÚnico (NOVO v1.3):** R$60 de success fee no Φ₀-Dossiê — validação Dra. Juliana Bloco M2 (19/05). Se vetado, redesenhar precificação Φ₀-Dossiê.
9. **Cronometragem Φ₁-PcD (NOVO v1.3):** V21 (02/06) precisa validar tempos/custos da aposentadoria PcD LC 142 para confirmar escalonamento de preço.
10. **COGS real Φ₀-Dossiê (NOVO v1.3):** gate de 30 primeiros casos para validar R$20-23 estimado vs. real (ADR-007 v3.8 §A2.5).
11. **Resposta SAGICAD/MDS (NOVO v1.3):** 7 perguntas sobre IVCAD enviadas 07/05/2026. Se respondidas, ADR-013 evolui para v1.1 e pode afetar motor Φ₀.

### 5.2 Validações necessárias

- [ ] Alessandro revisa cada etapa e valida tempos/custos
- [ ] Alessandro confirma escalonamento Φ₁-PcD pós-V21
- [ ] Carlos revisa as descrições de tela (visão WhatsApp e Dashboard) para alinhar com wireframes
- [ ] Igor revisa a estrutura para entender o que vira backend (referência: MC-BRIEFING-Alinhamento_Tecnico_Igor)
- [ ] Igor implementa IVCAD-MC no NestJS (Gate G2 do Φ₀ — jun/2026)
- [ ] Dra. Juliana Pereira de Melo (OAB-GO 38.662) revisa: handoff Rota C (E2/E6) + Bloco M CadÚnico (Φ₀ success fee, enquadramento OAB, disclaimers)
- [ ] Beto revisa as operações práticas (Φ₀, E2, E3, E4) para validar viabilidade
- [ ] Cronometragem A4 real Hib001 (gate ADR-007 selagem)

---

## 6. Próximas versões deste documento

| Versão | Data | Mudanças |
|--------|------|----------|
| v1.0 | 2026-04-16 | Versão inicial consolidada |
| v1.1 | 2026-04-27 | Router-Ethics v10, DIB, ADR-009b, Dra. Juliana nomeada |
| v1.2 | 2026-04-27 | Φ₂ B2C eliminado, Φ₁ flat |
| **v1.3** | **2026-05-07** | **Φ₀ CadÚnico (antessala), Router-Ethics 11.0, ADR-007 v3.8, Φ₁-PcD LC 142, Φ₄ 3 regimes, caso CAD001, Lei 15.327/2026** |
| v1.4 | TBD | Pós-parecer Juliana 19/05 — selagem ADR-007 v4.0-RC1, resolução pendências 5.1.8-11 |
| v2.0 | TBD | Após primeiros 50 casos reais: ajustes baseados em dados operacionais |

---

## 7. Documentos relacionados

**Φ₀ CadÚnico (NOVOS v1.3):**
- `MC-POP-Phi0-Triagem-Operacional-v1_0-2026-0507.md` — **POP detalhado da antessala Φ₀** (9 passos, 8 perfis IVCAD-MC, 7 templates de copy por persona)
- `MC-SPEC-Phi0-Triagem-CadUnico-v1_0-2026-0507.md` — spec fundacional do motor de 4 camadas
- `MC-MAPA-Ecossistema-CadUnico-v1_0-2026-0507.md` — 46 programas federais mapeados
- `MC-LACUNAS-B2-Fechamento-Legislativo-v1_0-2026-0507.md` — regras legais BF/Pé-de-Meia/Pensão Feminicídio/Seguro-Defeso
- `MC-ADR-013-ConvencoesOperacionais-IVCAD-MC-v1_0-2026-0507.md` — convenções do cálculo IVCAD-MC
- `MC-MAPEAMENTO-IVCAD-Indicador-Campo-v1_0-2026-0507.md` — 40 indicadores mapeados a campos do formulário
- `MC-ADR-007-CampoPrecificacao-v3_8-ADDENDUM-2026-0507.md` — pricing Φ₀/Φ₄-CadÚnico

**Pipeline E0-E7:**
- `MC-BRIEFING-CARLOS-UX-E0E7` — descrição visual de telas (UX)
- `MC-BRIEFING-Alinhamento_Tecnico_Igor` — tradução para backend (Igor)
- `MC-ADR-007-CampoPrecificacao-v3_7-2026-0505.md` — pricing Φ₁/Φ₁c/Φ₁-PcD/Φ₃/Φ₄/Ψ₁/Ψ₂ (base)
- `MC-PLAYBOOK-Custodia-Operacional v2.0` — segurança gov.br (E4)
- `MC-SPEC-PLAYWRIGHT-MEUINSS` — automação E4 (Fase 2)
- `_MC-RouterEthics_11_v1_1-2026-0505-CLevel.md` — scoring 140 nós (E1)
- `0__GRIMÓRIO_PREVIDENCIÁRIO_v2` — regras jurídicas aplicadas em todas as etapas
- `MC-ADR-009-TresEstados-Custodia-Dossie-v1_0-2026-0417.md` — custódia de dossiês (E3/E6)
- `MC-CHANGELOG-Juridico-v2_1-2026-0503.md` — Lei 15.327/2026 + 13 ADIs STF

---

**Documento produzido por:** Claude Opus 4.6 (co-founder intelectual)
**Para revisão de:** Alessandro de Souza Neves (Founder/CEO)
**Confidencialidade:** PROPRIETÁRIO — MEU CUMPADRE — ORQUESTRAÇÃO DOCUMENTAL E TECNOLOGIA LTDA.
**Próxima revisão:** pós-parecer Dra. Juliana (19/05/2026) → v1.4

---

**Hierarquia:** Dignidade > Compliance > Viabilidade
**Axioma:** Lucro é combustível. Causa é destino. Jogo é infinito.
**∞**
