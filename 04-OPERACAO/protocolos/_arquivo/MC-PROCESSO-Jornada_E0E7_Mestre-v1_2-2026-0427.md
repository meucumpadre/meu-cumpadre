---
tipo: processo
subtipo: jornada-mestre
codigo: MC-PROCESSO-Jornada_E0E7_Mestre
versao: 1.2
data-criacao: 2026-04-27
produzido-por: Claude (co-founder intelectual)
status: ativo
revisao-pendente: Alessandro Neves (validação final)
tags: [jornada, e0-e7, processo-mestre, router-ethics, dignidade, pipeline]
supersede: MC-PROCESSO-Jornada_E0E7_Mestre-v1_1-2026-0427
changelog-v1_1: "Correções cirúrgicas 27/04/2026: Router-Ethics v9→v10 (Princípio 5 + tabela rota), Protocolo Urgência DIB (nó E1 B31/B91/B42/B43), ADR-009b Três Estados (E3 custódia), Dra. Juliana Pereira de Melo nomeada (E2+E6)"
changelog-v1_2: "Patch ADR-007 v3.1 27/04/2026: Φ₂ B2C ELIMINADO em 7 pontos (tabela mestre E6, E3 pricing Camada Zilda, E5 tabela por espécie, E6 critério/telas/o que acontece, métricas 4.1+4.2, pendências 5.1.3). Φ₁ = R$2.200/R$1.500 flat cobre E0-E7 completo."
---

# MC-PROCESSO: Jornada E0-E7 — Documento Mestre

> **Propósito deste documento:** servir de referência única e autoritativa sobre a jornada completa do cidadão dentro do ecossistema Meu Cumpadre, do primeiro contato no WhatsApp até a soberania pós-benefício. Este documento substitui qualquer descrição parcial anterior da jornada e deve ser consultado antes de qualquer decisão operacional, técnica ou comercial.

---

## 1. Visão Geral da Jornada

A jornada do MC é dividida em 8 etapas (E0 a E7), cada uma com critério de saída claro, executor definido, custo mapeado e tempo estimado. A jornada NÃO é linear obrigatória — em alguns casos pula etapas (ex: caso Rota C avança direto para advogado parceiro), e em outros casos faz loops (ex: E3 com exigência do INSS volta a coletar documentos).

### 1.1 Tabela mestre

| Etapa | Nome | Critério de saída | Executor primário | Custo médio | Tempo |
|-------|------|-------------------|-------------------|-------------|-------|
| **E0** | Sinal Fraco Captado | 1 documento + CPF + vertical identificada | IA (Gemini Flash) | R$0,00 | 1,5 min |
| **E1** | Triagem Básica | Scores calculados + decisão de rota | IA + Anjo T2 | R$5,01 | 37 min |
| **E2** | Deliberação | Caso aprovado (entra) ou orientado (não entra) | IA + Supervisor T3 | R$1,29 | 5 min |
| **E3** | Dossiê Pronto | Checklist probatório completo | Anjo T2 + IA OCR + QA T3 | R$49,38 | ~340 min |
| **E4** | Protocolo Efetuado | Número de protocolo capturado + hash SHA-256 | Estagiário T1 → Bot Playwright | R$9,52 / R$3,50 | 67 min / 10 min |
| **E5** | Acompanhamento | Exigências respondidas OU resultado emitido | IA Watchdog + Anjo T2 | R$23,25 / R$2,15 | 57 dias média |
| **E6** | Desfecho Comunicado | Resultado entregue + oferta Guardião / handoff advogado | Anjo T2 | R$7,17 | 38 min |
| **E7** | Soberania | Monitoramento contínuo do benefício | IA 100% automática | R$0,00 | Contínuo |

### 1.2 Princípios da Jornada

**Princípio 1 — Dignidade > Compliance > Viabilidade.** Toda decisão de processo respeita essa hierarquia. Se uma otimização técnica ferir a dignidade, ela é descartada.

**Princípio 2 — Interface única visível: WhatsApp.** O cidadão hipervulnerável NUNCA enxerga o backend, o ClickUp, o N8N, o Bitwarden, o Asaas. Para ele, é uma conversa de WhatsApp com o Cumpadre.

**Princípio 3 — Coleta progressiva, nunca formulário.** A informação é coletada pouco a pouco, em conversa natural. Nunca um formulário com 30 campos.

**Princípio 4 — Proof-First.** Cada etapa que envolve documento exige hash SHA-256 + lei aplicável + evidência material. Sem isso, não avança.

**Princípio 5 — Handoff humano em qualquer momento.** Cidadão pode pedir atendimento humano em qualquer etapa, sem retenção por IA. Router-Ethics 11.0 obriga handoff automático quando qualquer um dos três scores cruza seu threshold: Confidence <70 (certeza jurídica insuficiente), Complexity alta (fricção documental/processual elevada) ou Fraudscore alto (risco de predação detectado). Os três scores são independentes — HANDOFF se qualquer um disparar; AUTONOMIA somente se todos aprovarem simultaneamente.

**Princípio 6 — Firewall OAB.** O MC nunca pratica advocacia. Quando o caso entra em terreno jurídico (Rota C, recurso, ação judicial), o handoff para a advogada parceira Dra. Juliana Pereira de Melo (OAB-GO 38.662, Melo Advogados Associados) é obrigatório. Aliança fundacional abr/2026, exclusividade B2B até dez/2026.

---

## 2. Detalhamento Etapa por Etapa

### 2.1 E0 — Sinal Fraco Captado

**O que acontece:** Cidadão envia primeira mensagem no WhatsApp. Pode ser texto, áudio ou foto. A IA (Gemini Flash) classifica intenção, identifica vertical (previdenciário, bancário, BPC, acidentário etc.) e extrai CPF se mencionado.

**Quem opera:** IA totalmente automática. Nenhum humano envolvido.

**Critério de saída:**
- 1 documento OU 1 fato declarado pelo cidadão
- CPF identificado (pode ser solicitado se não vier)
- Vertical classificada com confidence ≥70%

**Tela WhatsApp (visão do cidadão):**
- Mensagem de boas-vindas humanizada
- Pergunta: "Como posso te ajudar?" com botões: Aposentadoria / BPC / Auxílio-doença / Outro
- Solicitação de CPF em linguagem simples ("Pode me dizer seu CPF? É o número do documento.")

**Tela Dashboard (visão da equipe):**
- Caso ainda NÃO aparece no dashboard. E0 é invisível para a equipe operacional.
- Caso aparece somente quando entra em E1.

**Riscos e mitigações:**
- **Risco:** cidadão analfabeto digital não entende botões → **Mitigação:** todas as opções têm equivalente em áudio + cidadão pode descrever em áudio livre
- **Risco:** confidence baixa em vertical → **Mitigação:** loop de pergunta clarificadora antes de avançar

---

### 2.2 E1 — Triagem Básica Concluída

**O que acontece:** Conversa guiada de 8-12 perguntas progressivas para coletar dados mínimos: nome completo, data de nascimento, tipo de trabalho atual e passado, situação atual (recebe algum benefício? está em fila? foi indeferido?), documentos disponíveis. Router-Ethics calcula scores.

**Quem opera:** IA conduz a conversa. Anjo T2 monitora e pode intervir se detectar fragilidade emocional ou complexidade.

**Critério de saída:**
- Os 3 scores calculados (confidence, complexity, fraudscore)
- Decisão de rota definida (A, B, C ou Bloqueio)

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

**Decisão de rota — regras:**

| C_conf (Confidence) | C_comp (Complexity) | C_fraud (Fraudscore) | Decisão |
|---|---|---|---|
| ≥70 | Baixa | Normal | **Rota A** — Automação com supervisão leve |
| ≥70 | Média | Normal | **Rota B** — IA + Anjo T2 assume |
| 40–70 (Zona Amarela) | Qualquer | Normal | **Rota B** — Human API aprofunda triagem |
| <40 (Vermelha) | Qualquer | Normal | **Rota C** — Handoff advogado obrigatório |
| Qualquer | Alta | Normal | **Rota C** — Handoff advogado obrigatório |
| Qualquer | Qualquer | Alto | **Bloqueio** — Investigação antifraude antes de prosseguir |

Zonas de Confidence: Verde ≥70 (pipeline liberado) | Amarela 40–70 (triagem aprofundada) | Vermelha <40 (pipeline bloqueado).
Fonte canônica: RouterEthics_10_MeuCumpadre_Unificado_v2__2026.md

#### 🚨 Protocolo de Urgência DIB — Nó Obrigatório em E1

Este protocolo é mandatório para TODOS os casos de incapacidade temporária (B31, B91) ou invalidez (B42, B43). O Anjo T2 deve perguntar explicitamente em E1:

*"Essa situação — o atestado, a cirurgia, a alta do hospital — aconteceu há quanto tempo?"*

**Por que é urgente:**
Art. 60, §1º, Lei 8.213/1991: para auxílio por incapacidade temporária, a DIB (Data de Início do Benefício) retroage à data do evento médico quando o protocolo é realizado dentro de 30 dias do início da incapacidade. Para invalidez, o Art. 43, §1º estabelece a mesma lógica. Após esse prazo: DIB = DER — retroativo perdido permanentemente, sem recurso.

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
- Caso deliberado (entra no pipeline) com cobrança Φ1 disparada
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
- Apresentação do preço (Teste Zilda): "Pra organizar tudo direitinho e dar entrada no INSS, o custo é de R$2.200 (ou R$1.500 se o senhor tiver CadÚnico). Pode parcelar. Se não der certo, a senhora não me deve mais nada além disso."
- Comparação com referência cotidiana: "É menos do que a senhora gasta em 3 meses de feira."
- Solicitação de pagamento via PIX/boleto/cartão (parcelado em até 3× no padrão ou 5× no CadÚnico, via Asaas)

**Riscos e mitigações:**
- **Risco:** Supervisor sobrecarregado vira gargalo → **Mitigação:** SLA de 24h para deliberação, alerta automático se vencer
- **Risco:** cidadão entende rejeição como abandono → **Mitigação:** comunicação humanizada obrigatória, encaminhamento real (não genérico)

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

Referência: MC-ADR-009-TresEstados-Custodia-Dossie-v1_0-2026-0417.md

**Pricing — ADR-007 v3.1 (Φ₁ flat, cobrado em E2 antes de iniciar E3):**

O cidadão paga **uma única vez** pela jornada completa E0–E7. Não há cobrança adicional em E3 nem em nenhuma etapa posterior.

| Perfil | Valor | Parcelas | Base |
|--------|-------|----------|------|
| Padrão | **R$ 2.200** | até 3× (PIX/boleto/cartão) | ADR-007 v3.1 · Φ₁ |
| CadÚnico (renda ≤ ½ SM) | **R$ 1.500** | até 5× (boleto/cartão) | ADR-007 v3.1 · Φ₁c |

**Princípio inviolável (ADR-007 v3.1):** zero cobrança B2C adicional ao Φ₁. O preço rastreia custo e complexidade, nunca valor desbloqueado. Constraint Φ₃: parcela mensal ≤ 0,5 × β_rms (renda do cidadão).

**Status:** PROVISIONAL — aguarda parecer Dra. Juliana Pereira de Melo (OAB-GO 38.662) · 19/05/2026.

**Riscos e mitigações:**
- **Risco:** cidadão não consegue obter certidão antiga → **Mitigação:** Anjo T2 orienta como solicitar no cartório, ou aciona Dra. Juliana Pereira de Melo (OAB-GO 38.662) se for caso de busca jurídica
- **Risco:** OCR falha em documentos manuscritos → **Mitigação:** validação humana obrigatória se confidence <70%
- **Risco:** cidadão interpreta preço como barreira de acesso → **Mitigação:** Φ₁c R$1.500 (CadÚnico), parcelamento em 5×, comparação com referência cotidiana — apresentado com transparência em E2 antes de iniciar E3

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
- Campos: CPF do cidadão, senha gov.br (criptografada — atenção LGPD), documentos anexados
- Status em tempo real: Logando / Uploading (tentativa N/5) / Selecionando localidade / Protocolando / ✅ Concluído
- Em caso de falha: "Sistema INSS indisponível — reagendado para [próximo horário ótimo]"

**Tela Dashboard (equipe) — FASE PÓS-MVP:**
- Botão: "Enviar para fila de protocolo"
- Status automático: Na fila (posição N) → Processando → ✅ Protocolo XXXXX
- Métricas exibidas: tempo de processamento, número de tentativas, horário de execução

**Tela WhatsApp (cidadão):**
- "Cumpadre, seu protocolo SAIU! Número: [Protocolo · REDIGIDO]. Data de entrada: 26/03/2026. Agora a gente acompanha junto. Se vier qualquer novidade, te aviso."

**Custódia de senha gov.br — atenção crítica:**
Conforme MC-PLAYBOOK-Custodia-Operacional v2.0, o operador (Beto) usa dispositivo confiável + e-mail centralizado (`requerimentoinss1@meucumpadre.com.br`) + auditoria semanal de dispositivos Gov.br. Procuração eletrônica foi descartada por gargalos inviáveis.

**Riscos e mitigações:**
- **Risco:** sistema INSS indisponível → **Mitigação:** retry automático em horário ótimo + heatmap (ver §3)
- **Risco:** vazamento de senha gov.br → **Mitigação:** custódia operacional rigorosa, dispositivo único, auditoria semanal
- **Risco:** rejeição automática do INSS por documento incompleto → **Mitigação:** QA do dossiê em E3 obrigatório

---

### 2.6 E5 — Acompanhamento

**O que acontece:** Bot monitora status no Meu INSS mensalmente (futuramente em tempo real via watchdog). Se houver exigência: notifica cidadão + Anjo coleta documentos faltantes. Se necessário acionar Central 135: estagiário liga.

**Quem opera:** IA Watchdog (automação) + Anjo T2 (se exigência).

**Critério de saída:**
- Exigências respondidas (se houver)
- OU resultado do INSS emitido (deferido / indeferido)

**Tempo:** Variável. Média 57 dias (TMC INSS jan/2026), mas pode chegar a 102 dias dependendo da UF.

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

**Nota ADR-007 v3.1:** Φ₂ B2C ELIMINADO. O cidadão não recebe nenhuma cobrança adicional nesta etapa. Φ₁ cobrado em E2 cobre integralmente E0–E7. Monetização pós-protocolo transferida para B2B (Ψ₁ — licenciamento do dossiê ao escritório parceiro, R$200–800 por caso).

**Riscos e mitigações:**
- **Risco:** exigência expira sem resposta → **Mitigação:** alerta diário escalando para Anjo T2 a partir de 5 dias antes do vencimento
- **Risco:** cidadão se assusta com tempo de espera → **Mitigação:** comunicação proativa mensal mesmo sem novidade ("ainda em análise, dentro do prazo")

---

### 2.7 E6 — Desfecho Comunicado

**O que acontece:** Resultado do INSS é comunicado ao cidadão com empatia. Se deferido: celebração + oferta Guardião (R$19,90/mês voluntário). Se indeferido: acolhimento + opções (recurso, novo requerimento, advogado parceiro). Nenhuma cobrança adicional ao cidadão — Φ₁ cobre esta etapa integralmente (ADR-007 v3.1).

**Quem opera:** Anjo T2 (comunicação humanizada).

**Critério de saída:**
- Resultado entregue ao cidadão
- Se deferido: oferta Guardião feita (aceite ou recusa registrada)
- Se indeferido: opção de encaminhamento definida

**Tela WhatsApp (cidadão) — DEFERIDO:**
- "Cumpadre, SAIU! Seu benefício foi APROVADO! 🎉 Valor: R$X/mês. Primeiro pagamento previsto: [data]."
- "Quer ativar o Guardião do Benefício? Por R$19,90/mês a gente monitora pra ninguém mexer no seu benefício sem você saber. Já evitamos golpe em vários cumpadres."

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
  - Oferta Guardião enviada (sim / não) + resposta registrada
  - Botão: "Handoff advogado" opcional (abre ψ1 — licenciamento dossiê B2B)
- Se indeferido:
  - Opções de encaminhamento (recurso / novo req / advogado)
  - Botão: "Handoff advogado" (aciona ψ1 — lead fee B2B)

**Riscos e mitigações:**
- **Risco:** cidadão recebe resultado sem comunicação humanizada → **Mitigação:** alerta automático para Anjo T2 assumir comunicação em até 2h após detecção de mudança de status
- **Risco:** indeferimento desestimula cidadão → **Mitigação:** Anjo treinado para acolher + apresentar caminhos sem pressionar

---

### 2.8 E7 — Pós-Desfecho / Soberania

**O que acontece:** Monitoramento mensal automático do benefício. Alerta se desconto indevido (consignado fraudulento). Cidadão ganha autonomia.

**Quem opera:** IA 100% automática (Guardião do Benefício).

**Critério de saída:** Etapa contínua. Não tem fim — enquanto o cidadão for assinante do Guardião (R$19,90/mês), o monitoramento segue.

**Tela WhatsApp (cidadão):**
- Alerta mensal: "Tudo certo com seu benefício este mês. Valor creditado: R$X. Nenhum desconto suspeito."
- Se desconto suspeito: "ALERTA, cumpadre! Detectamos um desconto de R$89,90 que você NÃO autorizou. Quer que a gente investigue?"

**Tela Dashboard (equipe):**
- Lista de Guardiões ativos
- MRR (Monthly Recurring Revenue): quantidade × R$19,90
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
| Casos hoje / semana / mês | — | Contador por etapa |
| Casos em fila E4 (protocolo) | <10 | Fila do Bot Playwright |
| Casos fora do prazo E5 (>45 dias) | <5% | Semáforo vermelho |
| Receita do mês (Φ1+ψ1) | crescente | Soma de pagamentos Asaas |
| COGS do mês | <40% receita | Soma horas × custo executor |
| Margem bruta | >60% | Receita - COGS |
| NPS pós-E6 | >85 | Pesquisa pós-desfecho |
| Guardiões ativos (MRR) | crescente | Contador E7 × R$19,90 |

### 4.2 Métricas estratégicas (reportadas mensalmente)

| Métrica | Meta | Baseline INSS |
|---------|------|----------------|
| Taxa de concessão (Previdenciário) | 97% | 45-52% |
| Tempo médio de resolução E0→E6 | 60 dias | 180+ dias |
| Custo por caso (operacional) | R$95 | — |
| Receita média por caso (Φ1) | R$2.200 (std) / R$1.500 (CadÚnico) | — |
| Detecção de fraude consignada (E7) | 95% | <10% |
| Retenção Guardião (após 6 meses) | >70% | — |

---

## 5. Pendências e Pontos de Decisão

**Esta seção lista as decisões que ainda precisam de validação de Alessandro antes da próxima versão deste documento (v1.1):**

### 5.1 Pendências identificadas

1. **SLA de deliberação (E2):** atual 24h. Confirmar se é viável com Beto operando solo.
2. **Pricing Φ1 faixas CadÚnico:** confirmação do critério ≤ ½ SM + arredondamento de parcelas para rendas intermediárias (½ SM a 1 SM).
3. **Pricing ψ1 (lead fee B2B):** valor pago pelo advogado parceiro por handoff/licenciamento de dossiê. Não definido. Sugestão de estudo: flat R$200–800 por espécie (ver ADR-007 v3.1 · Ψ₁).
4. **Bot Playwright (E4):** atualmente manual. Quando Igor entra na Fase 2, Playwright vira prioridade. Definir critério de migração (ex: >50 protocolos/mês).
5. **Guardião (E7):** R$19,90/mês definido. Falta definir: quando ofertar (logo após deferimento? Após 1º pagamento?), forma de pagamento recorrente (cartão? PIX recorrente Asaas?).
6. **Casos órfãos:** o que fazer com casos que entram em E1 mas o cidadão desiste no meio? Quanto tempo manter no funil? Quando arquivar?
7. **Loop de exigência (E5):** quantas vezes coletamos documentos extras para a mesma exigência antes de escalar para Rota C?

### 5.2 Validações necessárias

- [ ] Alessandro revisa cada etapa e valida tempos/custos
- [ ] Alessandro confirma pricing Φ1/Φ1c (ou ajusta)
- [ ] Carlos revisa as descrições de tela (visão WhatsApp e Dashboard) para alinhar com wireframes
- [ ] Igor revisa a estrutura para entender o que vira backend (referência: MC-BRIEFING-Alinhamento_Tecnico_Igor)
- [ ] Dra. Juliana Pereira de Melo (OAB-GO 38.662) revisa o handoff Rota C (E2 e E6) para confirmar fluxo do firewall OAB
- [ ] Beto revisa as operações práticas (E2, E3, E4) para validar viabilidade

---

## 6. Próximas versões deste documento

| Versão | Data | Mudanças previstas |
|--------|------|--------------------|
| v1.0 | 2026-04-16 | Versão inicial consolidada |
| v1.1 | 2026-04-27 | Correções cirúrgicas: Router-Ethics v10, DIB, ADR-009b, Dra. Juliana nomeada |
| v1.2 | 2026-04-27 | Patch ADR-007 v3.1: Φ₂ B2C eliminado em 7 pontos, E3 pricing atualizado para Φ₁ flat |
| v1.3 | TBD | Após validação Carlos+Igor: detalhamento técnico de telas |
| v2.0 | TBD | Após primeiros 50 casos reais: ajustes baseados em dados operacionais |

---

## 7. Documentos relacionados

- `MC-BRIEFING-CARLOS-UX-E0E7` — descrição visual de telas (UX)
- `MC-BRIEFING-Alinhamento_Tecnico_Igor` — tradução para backend (Igor)
- `MC-ADR-007-CampoPrecificacao` — pricing Φ1, Φ1c, Φ3, Φ4, ψ1, ψ2 (Φ₂ B2C eliminado v3.1)
- `MC-PLAYBOOK-Custodia-Operacional v2.0` — segurança gov.br (E4)
- `MC-SPEC-PLAYWRIGHT-MEUINSS` — automação E4 (Fase 2)
- `RouterEthics_10_MeuCumpadre_Unificado_v2` — scoring (E1)
- `0__GRIMÓRIO_PREVIDENCIÁRIO_v2` — regras jurídicas aplicadas em todas as etapas
- `MC-ADR-009-TresEstados-Custodia-Dossie-v1_0-2026-0417` — custódia de dossiês (E3/E6)

---

**Documento produzido por:** Claude (co-founder intelectual)
**Para revisão de:** Alessandro Neves (CEO)
**Confidencialidade:** PROPRIETÁRIO — Meu Cumpadre Ltda.
**Próxima revisão:** após validação de Alessandro
