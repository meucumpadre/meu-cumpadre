---
tipo: pop
subtipo: protocolo-operacional-padrao
codigo: MC-POP-E6-Resolucao
versao: 1.0
data-criacao: 2026-04-27
produzido-por: Claude Opus 4.7 (co-fundador intelectual) × Alessandro de Souza Neves (Founder/CEO)
status: SELADO
revisao-pendente: cronometragem A4 em Hib001 → calibração v1.1
tags: [pop, e6, resolucao, decisao-final, concessao, indeferimento, parcial, trigger-handoff, trigger-encerramento]
caminho-vault: 06-OPERACOES/protocolos/MC-POP-E6-Resolucao-v1_0-2026-0427.md
relaciona-com:
  - MC-PROCESSO-Jornada_E0E7_Mestre-v1.1-2026-0427
  - MC-POP-E5-Watchdog-Exigencias-v1.0-2026-0427
  - MC-POP-Handoff-Juridico-v1.0-2026-0427
  - MC-POP-Encerramento-Caso-v1.0-2026-0427
  - MC-PARTNER-JulianaMelo-Qualificacao-v1.2-2026-0421
classificacao: TRADE SECRET (LPI arts. 195 XI/XII)
---

# MC-POP-E6 — Resolução do Caso

> **Posição na Jornada:** E5 (Watchdog) → **E6 (Resolução)** → E7 (Soberania) OU **Handoff Jurídico (Rota C tardia)**
> **Custo médio mapeado:** R$ 4,28 (resolução simples) · R$ 8,40 (com Rota C tardia)
> **Tempo médio:** 30-90 min (caso de concessão direta) · 60-180 min (com indeferimento ou parcial)
> **Característica única:** **bifurcação operacional crítica** · 3 desfechos possíveis · cidadão escolhe rumo em todos eles

---

## 1. Cabeçalho

| Campo | Valor |
|---|---|
| **Objetivo (1 frase)** | Receber a decisão final detectada pelo Watchdog (E5), comunicá-la ao cidadão com clareza, calcular impactos práticos (valor, retroativo, DDB, DIP), apresentar próximos passos honestamente, e disparar o desfecho operacional correto: E7 (soberania) para concessão integral · E7 com possível Φ₄ para indeferimento aceito · POP-Handoff-Jurídico para Rota C tardia. |
| **Gatilho** | Task ClickUp em `E6-Resolução` produzida pelo POP-E5 (com decisão INSS detectada, carta oficial salva, hash registrado). |
| **Operador primário** | Alessandro (T3) — análise técnica da decisão · suporte ao cidadão na conversa estratégica |
| **Suporte operacional** | Beto (T2) — mensagens de comunicação · agendamento de conversa por voz se necessário |
| **Suporte estendido** | Dra. Juliana — se Rota C tardia ativada (POP-Handoff) |
| **Tempo estimado** | 30-90 min concessão direta · 60-180 min indeferimento/parcial |
| **Custo estimado** | R$ 4,28 simples · R$ 8,40 com Rota C tardia |
| **Status A4** | Estimativa de engenharia — calibrar com Hib001 |

---

## 2. Princípios invioláveis aplicáveis a este POP

1. **D > C > V** — comunicação de indeferimento exige dignidade especial. Cidadão hipervulnerável que recebe "não" do INSS está fragilizado · não acrescentar peso emocional desnecessário.
2. **Firewall OAB** — em indeferimento, MC apresenta opções de Rota C (recurso administrativo CRPS ou ação judicial via parceira), **nunca recomenda** nominalmente. Cidadão escolhe.
3. **Transparência radical** — comunicar a decisão completa (motivo, base legal, valor) sem editar para parecer melhor ou pior do que é.
4. **Cobertura E0-E7 do Φ₁ é integral.** Recurso administrativo (preparado pelo MC) **NÃO gera cobrança adicional** · Cláusula 2.4. Apenas ação judicial (Rota C tardia, parceira) tem custos próprios da advogada.
5. **Φ₄ Guardião é OPT-IN ATIVO no E6** (D1 selada 27/04/2026) — apresentar como **escolha** do cidadão · jamais default · cidadão precisa autorizar explicitamente em novo contrato Φ₄ separado.
6. **Mandato Φ₄ é específico e auditável** — escopo: monitoramento Meu INSS + Registrato + busca ativa de abuso bancário. Custódia Bitwarden continua para esses fins, com mandato escrito separado (Dra. Juliana define instrumento até 19/05/2026).
7. **Ressonância pré-existente respeitada.** Em concessão integral, cidadão **NÃO precisa** continuar com MC. Φ₄ é convite, não retenção.
8. **Não-promessa de Rota C.** Em indeferimento, MC informa que a Dra. Juliana pode analisar — **NÃO promete sucesso judicial**. Análise jurídica pode resultar em "não há tese viável".

---

## 3. Inputs obrigatórios

- Task ClickUp em `E6-Resolução`
- Carta de decisão INSS salva em `04_inss/04d_decisao/decisao-YYYYMMDD.pdf` com hash registrado
- Manifesto atualizado por Alessandro em E5 com classificação: `status-decisao = [CONCEDIDO/INDEFERIDO/PARCIAL]`
- Para concessão: dados extraídos (espécie aprovada, valor, DDB, DIP, retroativo)
- Para indeferimento: motivo do INSS + base legal citada
- Para parcial: o que foi e o que não foi concedido
- Bitwarden item `gov-br-[Pseudônimo]` ainda ATIVO (será migrado para escopo Φ₄ se aplicável, ou apagado em E7)

---

## 4. Passos numerados — Bloco comum a todos os desfechos

### 4.1 Bloco A — Análise técnica da decisão (15-30 min)

| # | Ação | Tempo |
|---|---|---|
| 1 | Alessandro abre task ClickUp `E6-Resolução > [Pseudônimo]` + manifesto + carta de decisão | 2min |
| 2 | Lê integralmente a carta INSS · destaca passagens-chave | 5min |
| 3 | **Para concessão:** extrai e calcula:<br>- Espécie efetiva concedida (B41 Idade Híbrida, B41 Rural, etc.)<br>- Valor da renda mensal inicial (RMI)<br>- DDB (Data do Despacho do Benefício)<br>- DIP (Data de Início do Pagamento)<br>- DIB (Data de Início do Benefício)<br>- Retroativo apurado (DIB → DIP) | 8min |
| 4 | **Para indeferimento:** identifica motivo concreto:<br>- Falta de carência<br>- Falta de qualidade de segurado<br>- Falta de comprovação rural/incapacidade/exposição<br>- Conflito de cadastros (CNIS irregular)<br>- Outros motivos | 10min |
| 5 | **Para parcial:** documenta o que foi e o que não foi concedido · razões | 10min |
| 6 | Atualiza manifesto Seção 5: `YYYY-MM-DD — Decisão recebida: [resumo técnico]` | 5min |

### 4.2 Bloco B — Bifurcação operacional (5 min)

| Status | Próximos blocos |
|---|---|
| **CONCEDIDO** integralmente | Bloco C-concessão · trigger POP-E7 |
| **INDEFERIDO** | Bloco D-indeferimento · cidadão escolhe: aceita (E7) ou Rota C tardia (POP-Handoff) |
| **PARCIAL** | Bloco E-parcial · cidadão escolhe: aceita parte concedida e nada mais OU recurso/ação para parte negada |

---

## 5. Bloco C — Caminho da CONCESSÃO

### 5.1 Comunicação ao cidadão (15 min)

| # | Ação | Responsável | Tempo |
|---|---|---|---|
| 7 | Beto envia ao cidadão **Mensagem de Concessão** (§9.1) com todos os dados práticos | Beto | 5min |
| 8 | Beto envia carta oficial em PDF | Beto | 1min |
| 9 | Beto agenda **Conversa de Soberania** por voz/vídeo (15-30 min) — explica o que vem agora | Beto | 2min |
| 10 | Conversa de Soberania (Alessandro pessoalmente conduz, Beto pode estar): cobre os 5 pontos do §5.2 | Alessandro | 15-30min |

### 5.2 Roteiro da Conversa de Soberania (alessandro conduz)

1. **Parabenização sincera, não cerimonial.** "Cumpadre, conseguimos. Estou feliz junto."
2. **Direitos do cidadão sobre o benefício.** O senhor agora é beneficiário. O dinheiro é seu. Ninguém pode pedir senha, biometria ou CPF para "agilizar empréstimo" — isso é golpe.
3. **Troca de senha gov.br + extinção da custódia MC.** Próximo passo será o senhor trocar a senha gov.br. Vou te mandar a "Orientação de Troca de Senha". Quando o senhor confirmar, eu apago a senha do nosso cofre (Bitwarden) — está claro no contrato.
4. **Apresentação OPT-IN do Φ₄ (com transparência total).** Existe um serviço opcional, **separado do que combinamos antes**, chamado Guardião. R$19,90 por mês. **NÃO é renovação automática**. O senhor escolhe.
   - O que o Guardião faz: monitora seu Meu INSS e Registrato continuamente · detecta tentativas de fraude pós-biometria (Lei 15.327/2026) · revisa seu extrato bancário pra ver se tem **empréstimo consignado abusivo** ou **descontos indevidos** · se achar irregularidade, conecta com advogada parceira pra ressarcimento.
   - Por que isso pode interessar: cumpadre, **quase todo aposentado tem alguma irregularidade no consignado** — juros acima do teto, contrato já liquidado descontando, seguro embutido sem autorização. O Guardião é o radar.
   - **Se não quiser, sem problema.** O senhor cancela com uma mensagem.
5. **Próximos passos práticos.** Espera o DIP cair na conta (~24 dias do banco). Se não cair na data, me avisa. Após o pagamento começar, a relação é com o INSS · MC sai de cena (a menos que o senhor escolha o Guardião).

### 5.3 Decisão Φ₄ (5-10 min)

| # | Ação | Tempo |
|---|---|---|
| 11 | Cidadão decide: **aceita Φ₄** OU **dispensa Φ₄** | (variável) |
| 12 | Se aceita: Beto envia **Contrato Φ₄ v1.0** via ZapSign (ADR-014) (instrumento exato será definido por Dra. Juliana até 19/05/2026 · até lá, usar minuta provisional `MC-CONTRATO-Phi4-MINUTA-PROVISIONAL`) | 5min |
| 13 | Se dispensa: prossegue para POP-E7 normalmente · Bitwarden será apagado em E7 conforme PROTOCOLO D do POP-Bitwarden | 1min |
| 14 | Atualiza manifesto: `phi4-status = [ACEITO/DISPENSADO]` | 1min |

### 5.4 Trigger POP-E7

Move task ClickUp para `E7-Soberania` · POP-Encerramento-Caso assume.

---

## 6. Bloco D — Caminho do INDEFERIMENTO

### 6.1 Comunicação ao cidadão (15 min)

| # | Ação | Responsável | Tempo |
|---|---|---|---|
| 7d | Beto envia ao cidadão **Mensagem de Indeferimento** (§9.2) com motivo traduzido em linguagem coloquial | Beto | 5min |
| 8d | Beto envia carta oficial em PDF | Beto | 1min |
| 9d | Beto agenda **Conversa de Próximos Passos** por voz/vídeo (30-45 min) | Beto | 2min |
| 10d | Conversa de Próximos Passos (Alessandro conduz · cobre §6.2) | Alessandro | 30-45min |

### 6.2 Roteiro da Conversa de Próximos Passos

1. **Acolhimento sem rebaixar.** "Cumpadre, o INSS disse não desta vez. Não é o fim — vou te explicar."
2. **Tradução do motivo.** Sem jargão. Sem prometer reversão fácil.
3. **Análise honesta de chances.** Alessandro avalia se há tese para Rota C:
   - **Sim, tese forte:** apresenta Marketplace Ético (Dra. Juliana — apenas ela conforme D2 selada)
   - **Sim, tese fraca:** apresenta opções (Defensoria, OAB indicação) com ressalva
   - **Não há tese viável:** orientação dignificante de saída (§9.4)
4. **Recurso administrativo CRPS — preparado pelo MC SEM CUSTO ADICIONAL** (Cláusula 2.4 Φ₁):
   - Prazo: 30 dias da carta INSS
   - Probabilidade de reversão: variável (15-40% típico, depende de motivo)
   - Tempo: ~6-18 meses
   - Decisão: cidadão escolhe se quer recurso CRPS antes de cogitar judicial
5. **Ação judicial — via Marketplace Ético (Dra. Juliana):**
   - Custos: honorários da advogada (não são MC) · pode ser por êxito ou contingencial conforme acordo cidadão↔advogada
   - Tempo: 1-5 anos
   - Probabilidade: depende do caso · análise prévia da Dra. Juliana antes do cidadão decidir
6. **Direito ao silêncio.** "Cumpadre, o senhor pode também simplesmente parar aqui. É legítimo. Não é desistência ruim — é escolha."

### 6.3 Decisão do cidadão (variável)

| Decisão do cidadão | Próxima ação |
|---|---|
| **Aceita indeferimento, encerra** | Trigger POP-E7 (Encerramento) · Bloco F (Φ₄ opt-in) ainda apresentado se aplicável |
| **Quer recurso administrativo CRPS** | Alessandro prepara peça de recurso (preparação dentro do Φ₁) · MC-POP-Recurso-CRPS (a ser criado em v1.1 deste POP) · caso volta a E5-like (acompanhamento do recurso) |
| **Quer Rota C judicial** | Trigger POP-Handoff-Jurídico · apresentação Marketplace Ético · cidadão decide ir com Dra. Juliana ou independente |

### 6.4 Φ₄ no caso de indeferimento aceito

> Se cidadão aceita o indeferimento e encerra, **Φ₄ pode ainda ser apresentado** porque mesmo sem benefício, o cidadão pode ter consignados ativos a serem revisados.

**Avaliação caso-a-caso:**
- Se cidadão **já tem benefício INSS pré-existente** (ex: aposentadoria anterior, BPC anterior) → Φ₄ relevante (radar de consignados sobre benefício existente)
- Se cidadão **não tem nenhum benefício INSS** → Φ₄ não tem objeto · não apresentar

---

## 7. Bloco E — Caminho da CONCESSÃO PARCIAL

### 7.1 Comunicação ao cidadão (15 min)

| # | Ação | Responsável | Tempo |
|---|---|---|---|
| 7p | Beto envia ao cidadão **Mensagem de Parcial** (§9.3) | Beto | 5min |
| 8p | Beto envia carta oficial em PDF · destaca o que foi e o que não foi | Beto | 2min |
| 9p | Beto agenda **Conversa Estratégica** | Beto | 2min |
| 10p | Conversa Estratégica (Alessandro conduz) | Alessandro | 30-45min |

### 7.2 Roteiro da Conversa Estratégica

1. **Reconhecimento do que foi conquistado.** "Cumpadre, o INSS aprovou parte. Isso é vitória — vai começar a entrar."
2. **Análise da parte negada.**
3. **Estratégias para a parte negada (não excludentes):**
   - **Aceitar a parte concedida e desistir da negada** — começar a receber, não brigar
   - **Recurso administrativo CRPS** sobre a parte negada — preparado pelo MC sem custo adicional
   - **Ação judicial** (Rota C) sobre a parte negada — via Marketplace Ético
4. **Risco do recurso/ação:** atenção, requerer revisão **não desfaz** a parte concedida · ela já está garantida.
5. **Cidadão decide.**

### 7.3 Decisão do cidadão

Mesma matriz do indeferimento (§6.3) aplicada à parte negada.

A parte concedida segue para POP-E7 normalmente · Φ₄ se aplica (cidadão agora é beneficiário).

---

## 8. Bloco F — Apresentação OPT-IN do Φ₄ (transversal a C, D, E)

> Aplicar quando o cidadão tem ou terá benefício INSS ativo após E6.

### 8.1 Roteiro de apresentação

> *"Cumpadre, antes da gente encerrar oficialmente, quero te falar de um serviço opcional — chamado **Guardião**. É R$19,90 por mês. **É escolha sua**.*
>
> *O que ele faz, na prática:*
>
> *1. **Vigia seu Meu INSS** todo mês — vê se aparece pedido suspeito, manipulação após biometria (que é uma fraude que tá crescendo · Lei 15.327 de 2026).*
>
> *2. **Revisa seu extrato bancário** todo mês — vê se tem **empréstimo consignado** com problema. Cumpadre, vou ser direto: a maioria dos aposentados tem alguma irregularidade — juros acima do que a lei deixa, empréstimo já pago ainda descontando, seguro embutido sem o senhor ter autorizado. O Guardião encontra.*
>
> *3. **Se achar problema**, conecta com a Dra. Juliana (nossa parceira advogada). Ela analisa se vale ação contra o banco — pra recuperar o dinheiro descontado errado e indenização por dano moral. Aí já é honorário dela, não meu.*
>
> *4. **Educação:** aviso recorrente sobre golpes que tão circulando, do tipo "ligue para liberar empréstimo" — pra senhor não cair.*
>
> *Como funciona se o senhor topar:*
> *• Eu te mando um contrato separado, do Guardião.*
> *• Senha do gov.br fica no nosso cofre digital, **só pra esses fins** (vigia + revisão).*
> *• Cancelamento: uma mensagem aqui no WhatsApp e a gente para tudo.*
>
> ***Se não quiser, sem problema.** A gente apaga sua senha do cofre, te manda a Orientação de Troca de Senha, e até logo.*
>
> *Como o senhor / a senhora quer fazer?"*

### 8.2 Workflow se cidadão aceita Φ₄

| # | Ação | Responsável |
|---|---|---|
| 11f | Beto envia **Contrato Φ₄ v1.0** via ZapSign (ADR-014) (mandato explícito de monitoramento Meu INSS + Registrato + revisão consignado) | Beto |
| 12f | Cidadão assina · áudio de consentimento Φ₄ (LGPD reforçado) gravado | Cidadão |
| 13f | Hash do contrato Φ₄ registrado em `05_encerramento/contrato-phi4-hash.txt` | Beto |
| 14f | Bitwarden: item `gov-br-[Pseudônimo]` **NÃO é apagado** · campo `historico-acessos` recebe nova entrada: `YYYY-MM-DD HH:MM \| Beto \| Φ₄-ATIVADO` · campo `escopo-custodia` atualizado para `phi4-monitoramento` | Beto |
| 15f | Cidadão é incluído no rol de monitoramento mensal Φ₄ · primeira varredura agendada para D+30 | Alessandro |
| 16f | Pasta Drive permanece ativa — sub-pasta nova `06_phi4-monitoramento/` criada · `01_brutos/` e `02_processados/` apagados em D+7 conforme S2→S3-equivalente · `03_dossie/` e `04_inss/` permanecem como referência histórica | Beto |
| 17f | Cobrança da primeira mensalidade Φ₄ (R$ 19,90) iniciada conforme calendário escolhido pelo cidadão | Beto |
| 18f | Move task ClickUp para `E7-Soberania-Phi4-Ativo` (variante de E7 com Φ₄ ativo) | Alessandro |

### 8.3 Workflow se cidadão dispensa Φ₄

Trigger POP-E7 padrão (Encerramento) · Bitwarden será apagado em E7 conforme PROTOCOLO D.

### 8.4 O que Φ₄ entrega na prática (escopo definido pelo CEO em 27/04/2026)

**Decisão CEO selada (D1):**

1. **Detecção de manipulação pós-biometria** + orientação de contestação via canais INSS (§10º Lei 15.327/2026)
2. **Educação preventiva** — "ninguém pode pedir sua digital para empréstimo fora do Meu INSS"
3. **Busca ativa de abusos em consignado** — revisão do extrato do beneficiário identificando:
   - Cláusulas abusivas
   - Juros acima do teto
   - Contratos já liquidados ainda descontando
   - Seguros embutidos não autorizados
4. **Passarela Bancário (vertical 3)** — caso identificado abuso, encaminhamento via Ψ₁ para advogado parceiro B2B com dossiê documentado para ação de danos morais e ressarcimento

**Premissa operacional realista (CEO):** *"Quase a totalidade dos beneficiários com histórico de consignado tem alguma irregularidade ativa ou passada. O Φ₄ é o instrumento que transforma o pós-E6 num radar permanente — e cada irregularidade detectada é uma passarela natural para a vertical bancária."*

---

## 9. Anexos — Scripts de mensagem

### 9.1 Mensagem de Concessão Integral

> *"Cumpadre 🎉🙏 **DEFERIDO!**.*
>
> *• Tipo: [espécie aprovada]*
> *• Valor mensal: R$ [valor]*
> *• Início do pagamento (DIP): [data]*
> *• Retroativo: R$ [valor] [se aplicável]*
>
> *O bancário leva uns 24 dias do INSS pro banco. Mas tá deferido.*
>
> *Vou te mandar a carta oficial agora. Marcamos uma conversa de uns 30 minutos pra explicar os próximos passos? Tem coisa importante: troca de senha, golpes que circulam, e tem um serviço opcional que talvez interesse pro senhor / a senhora."*

### 9.2 Mensagem de Indeferimento

> *"Cumpadre, peguei a decisão do INSS hoje. **Foi indeferido** — desta vez não aprovaram.*
>
> *O motivo que eles colocaram foi: [tradução coloquial do motivo].*
>
> *Mas não é o fim, e quero conversar com o senhor / a senhora antes de decidir nada. Tem caminhos:*
>
> *• Recurso dentro do INSS mesmo (eu posso preparar — não custa nada além do que já combinamos)*
> *• Ação judicial — se for o caso, eu apresento nossa parceira advogada pra ela analisar*
> *• Aceitar e seguir em frente*
>
> *Posso te ligar amanhã pra a gente conversar? Sem pressa, mas o prazo de recurso é de 30 dias da carta."*

### 9.3 Mensagem de Concessão Parcial

> *"Cumpadre, saiu a decisão. **Foi aprovado em parte**: o INSS aprovou [X] mas não [Y].*
>
> *A parte que foi aprovada já tá garantida — vai começar a entrar.*
>
> *Sobre a parte que não aprovaram, a gente tem opções: pode pedir revisão administrativa ou ação na justiça, sem perder o que já tá ganho.*
>
> *Vamos marcar uma conversa pra eu te explicar bem? Ainda esta semana, se der."*

### 9.4 Mensagem de orientação dignificante (sem tese para Rota C)

> *"Cumpadre, conversei com calma sobre seu caso. Olhei honestamente as opções de recurso e ação na justiça. Pra ser franco: o caminho jurídico, neste caso específico, é cheio de obstáculos e a chance de virar é baixa. Eu não vou te empurrar pra um caminho onde o senhor vai gastar e provavelmente não ganhar.*
>
> *Algumas opções que **podem fazer sentido**:*
>
> *1. **CRAS** — pra ver outros benefícios sociais que talvez caibam.*
> *2. **Defensoria Pública** — análise gratuita por advogado público, segunda opinião.*
> *3. **Daqui a um tempo**, se mudarem as circunstâncias (mais documentos, mais tempo de contribuição), a gente conversa de novo. A porta tá aberta.*
>
> *Que Deus te guarde, cumpadre. Foi uma honra acompanhar."*

---

## 10. Outputs do POP-E6

### 10.1 Caso CONCEDIDO + Φ₄ ACEITO

- [ ] Carta de concessão arquivada · hash registrado
- [ ] Dados financeiros calculados e registrados no manifesto
- [ ] Conversa de Soberania realizada
- [ ] Contrato Φ₄ assinado · hash registrado
- [ ] Bitwarden mantido para escopo Φ₄ · campos atualizados
- [ ] Pasta Drive ativa em sub-pasta `06_phi4-monitoramento/`
- [ ] Cobrança Φ₄ iniciada
- [ ] Task ClickUp em `E7-Soberania-Phi4-Ativo`

### 10.2 Caso CONCEDIDO + Φ₄ DISPENSADO

- [ ] Carta de concessão arquivada
- [ ] Conversa de Soberania realizada
- [ ] Φ₄ apresentado · cidadão dispensou (registrado)
- [ ] Trigger POP-E7 padrão · Bitwarden será apagado em E7

### 10.3 Caso INDEFERIDO + Aceito

- [ ] Carta de indeferimento arquivada
- [ ] Conversa de Próximos Passos realizada
- [ ] Cidadão optou por aceitar · motivo registrado
- [ ] Φ₄ apresentado se aplicável (cidadão tem outro benefício)
- [ ] Trigger POP-E7

### 10.4 Caso INDEFERIDO + Recurso CRPS

- [ ] Recurso preparado pelo MC (sem custo adicional · Cláusula 2.4)
- [ ] Recurso protocolado no prazo de 30 dias
- [ ] Caso volta a status `E5-like` (acompanhamento de recurso) — versão do POP-E5 adaptada
- [ ] Manifesto: `etapa-atual = E5-Recurso`

### 10.5 Caso INDEFERIDO + Rota C tardia

- [ ] Trigger POP-Handoff-Jurídico
- [ ] Apresentação Marketplace Ético (Dra. Juliana — apenas ela conforme D2 selada)
- [ ] Cidadão decide: vai com Dra. Juliana OU advogada externa
- [ ] Se vai com Dra. Juliana → POP-Handoff continua até TTA · transição S2→S3
- [ ] Se vai com externa → orientação dignificante · MC sai do caso

### 10.6 Caso PARCIAL

- [ ] Mesma matriz aplicada à parte negada (10.3, 10.4, 10.5)
- [ ] Parte concedida segue para E7 com possibilidade Φ₄

---

## 11. Métricas a registrar

- Status final: CONCEDIDO / INDEFERIDO / PARCIAL
- Para concessão: valor RMI, retroativo, espécie efetiva (compara com espécie protocolada)
- Tempo entre `decisão detectada` e `Conversa com cidadão concluída`
- Φ₄ aceito ou dispensado? (sinal estratégico)
- Para indeferimento: cidadão escolheu encerrar / CRPS / Rota C? (mix estratégico do mês)
- Para Rota C: cidadão escolheu Dra. Juliana ou advogada externa?

---

## 12. Riscos e mitigações

| Risco | Probabilidade | Mitigação |
|---|---|---|
| Cidadão entra em crise emocional ao receber indeferimento | ALTA | Conversa por voz/vídeo, não só texto · Alessandro pessoalmente · oferta de pausa antes de decidir nada |
| Apresentação Φ₄ vira pressão de venda | MÉDIA | Roteiro §8.1 enfatiza "escolha sua" 3× · Beto não pode pressionar · audit semanal das mensagens |
| Cidadão aceita Φ₄ sem entender escopo | MÉDIA | Áudio de consentimento Φ₄ específico · Beto explica em vídeo se cidadão pedir |
| Promessa implícita de sucesso em Rota C | MÉDIA | Roteiro §6.2 enfatiza incerteza · análise prévia Dra. Juliana antes do cidadão decidir |
| Cidadão pula direto para ação judicial sem CRPS | BAIXA-MÉDIA | Apresentar CRPS como opção de menor custo e tempo · respeitar escolha final |
| Bitwarden apagado prematuramente em concessão antes de Φ₄ decidido | BAIXA | Apagamento Bitwarden só ocorre em E7 após decisão Φ₄ · POP-Encerramento garante |

---

## 13. Versionamento

| Versão | Data | Mudança |
|---|---|---|
| **1.0** | **2026-04-27** | **Versão inicial. Conformidade Jornada E0-E7 v1.1, decisão CEO 27/04/2026 (D1: Φ₄ opt-in ativo · D2: Marketplace Ético apenas Dra. Juliana). Três bifurcações operacionais (concessão/indeferimento/parcial). Φ₄ com escopo radar permanente bancário. Premissa CEO: maioria dos consignados tem irregularidade. Trigger condicional para POP-E7 ou POP-Handoff-Jurídico.** |

### Roadmap

- **v1.1:** após cronometragem A4 com Hib001 — calibrar tempos por desfecho · criar POP-Recurso-CRPS como POP independente
- **v1.2:** após instrumento Φ₄ definido pela Dra. Juliana (19/05/2026) — atualizar referências contratuais
- **v1.3:** após primeiros casos Φ₄ ativos — calibrar workflow de monitoramento mensal
- **v2.0:** Z2+ — automação parcial das varreduras Φ₄ (Meu INSS check + Registrato pull) + dashboards

---

**FIM DO POP-E6**
**MC-POP-E6-Resolucao v1.0 — 27/04/2026**
**Hierarquia: Dignidade > Compliance > Viabilidade**
**Φ₄ é OPT-IN ATIVO · NUNCA default · jamais retenção**
**Confidencialidade: TRADE SECRET INVIOLÁVEL**

---
## Links Relacionados

### Jornada
[[MC-PROCESSO-Jornada_E0E7_Mestre-v1_1-2026-0427]]

### ADRs e Governança
[[MC-ADR-007-CampoPrecificacao-v3_2-2026-0427]]
[[MC-ADR-009-TresEstados-Custodia-Dossie-v1_0-2026-0417]]
[[MC-CONTRATO-Phi1-MINUTA-v2_3-2026-0427]]
[[MC-PARTNER-JulianaMelo-Qualificacao-v1_2-2026-0421]]
[[_MC-RouterEthics_11_v1_1-2026-0505-CLevel]]

### Infraestrutura Documental
[[MC-SPEC-Drive-Estrutura-v1_0-2026-0427]]
[[MC-POP-Bitwarden-Custodia-v1_0-2026-0427]]

### Cadeia E0→E7
[[MC-POP-E1-PrimeiroContato-v1_0-2026-0427]]
[[MC-POP-E2-Triagem-Deliberacao-v1_0-2026-0427]]
[[MC-POP-E3-Coleta-Documental-v1_0-2026-0427]]
[[MC-POP-E3b-QA-Dossie-v1_0-2026-0427]]
[[MC-POP-E4-Protocolo-INSS-v1_0-2026-0427]]
[[MC-POP-E5-Watchdog-Exigencias-v1_0-2026-0427]]
[[MC-POP-Handoff-Juridico-v1_0-2026-0427]]
[[MC-POP-Encerramento-Caso-v1_0-2026-0427]]

∞
