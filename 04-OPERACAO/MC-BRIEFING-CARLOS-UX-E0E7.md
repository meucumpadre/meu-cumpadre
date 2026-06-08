# BRIEFING UX — CARLOS BATISTA

**MEU CUMPADRE — Fluxo E0-E7 com Dados Reais de COGS**

Versao 1.0 — 27/03/2026

De: Alessandro (CEO) + Claude (Co-founder)

Para: Carlos Batista (UX Designer)

Referencia Figma: https://www.figma.com/design/WHKXszI2KSC115loHetKgd/Project---Meu-Cumpadre-Platform?node-id=51-75&p=f

---

## 1. OBJETIVO DESTE DOCUMENTO

Carlos, este briefing te entrega:

1. **O fluxo completo E0-E7** com todas as telas que precisam existir
2. **O custo real (COGS) de cada estado** — pra voce saber onde o sistema sangra dinheiro (e onde a UX pode ajudar a reduzir friccao)
3. **As 3 rotas (A/B/C)** e como o usuario transita entre elas
4. **Os dados de precificacao** — como o preco aparece pro cidadao (Camada Zilda)
5. **O que e IA, o que e humano, e o que e hibrido** em cada tela

---

## 2. VISAO GERAL: A JORNADA DO CIDADAO

O cidadao interage **100% via WhatsApp**. O portal web/app e apenas o **cockpit de retaguarda** para a equipe interna (Alessandro, Anjo, Estagiario).

```
CIDADAO (WhatsApp)          EQUIPE (Dashboard)          AUTOMACAO (Bot)
      |                            |                          |
      E0 — Primeiro contato        |                          |
      E1 — Triagem                 E1 — Score calculado       |
      |                            E2 — Deliberacao           |
      E3 — Envia docs              E3 — Monta dossie         |
      |                            E4 — Protocola             E4 — Bot Playwright
      E5 — Recebe alertas          E5 — Monitora              E5 — Watchdog
      E6 — Recebe resultado        E6 — Comunica             |
      E7 — Guardiao ativado        |                          E7 — Monitora fraude
```

**Sao 2 interfaces a desenhar:**
1. **WhatsApp Flow** (cidadao) — ja existe como conversa, mas precisa de templates estruturados
2. **Dashboard Operacional** (equipe) — onde Anjo, Estagiario e Alessandro gerenciam casos

---

## 3. ESTADOS E0-E7 — DETALHAMENTO POR TELA

### E0 — SINAL FRACO CAPTADO (Primeiro contato)

| Item | Detalhe |
|:--|:--|
| **Canal** | WhatsApp (mensagem ou audio) |
| **Executor** | IA (Gemini) — 100% automatico |
| **Custo** | R$0,00 |
| **Tempo** | 1,5 min |
| **O que acontece** | Cidadao manda mensagem. IA classifica (NLU), identifica vertical (previdenciario, bancario, cartorio etc.) |
| **Criterio de saida** | 1 documento ou fato + CPF + vertical identificada |

**Tela WhatsApp (cidadao):**
- Mensagem de boas-vindas humanizada
- Pergunta: "Como posso te ajudar?" (botoes: Aposentadoria / BPC / Auxilio-doenca / Outro)
- Pede CPF

**Tela Dashboard (equipe):**
- Nenhuma — E0 e 100% automatico
- Caso aparece no painel so quando entra em E1

---

### E1 — TRIAGEM BASICA CONCLUIDA

| Item | Detalhe |
|:--|:--|
| **Canal** | WhatsApp (conversa guiada) |
| **Executor** | IA + Anjo T2 |
| **Custo** | R$5,01 |
| **Tempo** | 37 min |
| **O que acontece** | Coleta progressiva de dados (nome, NB, situacao). Acolhimento inicial ("entender a dor"). Router-Ethics calcula scores. |
| **Criterio de saida** | Scores calculados + decisao de rota |

**Tela WhatsApp (cidadao):**
- Conversa natural com perguntas guiadas
- "Me conta o que ta acontecendo..."
- Coleta: nome completo, data nascimento, tipo de trabalho, documentos que tem

**Tela Dashboard (equipe):**
- Card do caso com: nome, CPF, especie identificada, scores (Confidence / Complexity / Fraudscore)
- Indicador visual de zona: 🔴 Vermelha (<40) / 🟡 Amarela (40-70) / 🟢 Verde (>70)
- Botao: "Assumir caso" (Anjo T2)

**DECISAO DE ROTA (Router-Ethics):**

| Score | Rota | O que aparece pro Anjo |
|:--|:--|:--|
| Confidence >= 70, Complexity baixa | **Rota A** (IA sozinha) | "Caso simples — IA resolve" |
| Confidence >= 70, Complexity media | **Rota B** (IA + Anjo) | "Caso padrao — Anjo assume" |
| Confidence < 70 OU Complexity alta | **Rota C** (Advogado) | "Caso complexo — handoff advogado" |
| Fraudscore alto | **BLOQUEIO** | "Alerta fraude — investigar" |

---

### E2 — DELIBERACAO

| Item | Detalhe |
|:--|:--|
| **Canal** | Dashboard interno |
| **Executor** | IA + Supervisor T3 |
| **Custo** | R$1,29 |
| **Tempo** | 5 min |
| **O que acontece** | Supervisor decide se o caso entra no pipeline pago ou nao |
| **Criterio de saida** | Caso deliberado (entra) ou nao deliberado (orientacao + rota alternativa) |

**Tela Dashboard (equipe):**
- Resumo do caso com scores
- Analise CNIS automatica (se disponivel)
- Simulacao comparativa de beneficios
- Botoes: "Deliberar (entrar)" / "Nao deliberar (orientar)"
- Se nao deliberado: campo pra registrar orientacao dada (CRAS, Defensoria, sindicato)

**Tela WhatsApp (cidadao) — SE NAO DELIBERADO:**
- "Com os papeis que o senhor tem hoje, a regra do INSS quase nao deixa brecha. Se eu prometesse agora, estaria mentindo pro senhor."
- Oferecer alternativa real (nunca abandonar)

---

### E3 — DOSSIE PRONTO

| Item | Detalhe |
|:--|:--|
| **Canal** | WhatsApp (cidadao envia docs) + Dashboard (equipe monta) |
| **Executor** | Anjo T2 + IA (OCR) + Supervisor T3 (QA) |
| **Custo** | **R$49,38** (estado mais caro — coleta presencial em cartorios) |
| **Tempo** | ~340 min (5,7h) — variavel por especie |
| **O que acontece** | Coleta de certidoes, laudos, declaracoes. OCR valida docs. Montagem dossie Proof-First (Lei + Evidencia + Hash SHA-256). QA do supervisor. |
| **Criterio de saida** | Checklist probatorio completo |

**IMPORTANTE PARA UX:** Este estado e o que mais varia por especie. O checklist de documentos muda conforme o beneficio:

| Especie | Docs necessarios | Tempo coleta |
|:--|:--|:--|
| Salario-maternidade | RG, CPF, certidao nascimento crianca | 30 min |
| Aux-doenca | RG, CPF, laudos medicos, exames | 60 min |
| Apos. idade urbana | RG, CPF, CNIS | 45 min |
| Apos. idade rural | RG, CPF, CNIS, certidao nascimento inteiro teor, certidao casamento c/ profissao, declaracao STR, autodeclaracao | **340 min** |
| BPC/LOAS | RG, CPF, CadUnico atualizado, laudo medico (PcD), composicao familiar | 180 min |

**Tela WhatsApp (cidadao):**
- Checklist visual: "Precisamos desses documentos: ✅ RG ✅ CPF ⬜ Certidao nascimento ⬜ Laudos medicos"
- Cidadao envia fotos pelo WhatsApp
- IA confirma: "Recebi o documento. Ta legivel? ✅ Sim"
- Progresso: "Faltam 2 documentos"

**Tela Dashboard (equipe):**
- Checklist interativo por especie (checkboxes)
- Preview dos documentos recebidos (OCR aplicado)
- Status: Pendente / Em coleta / Validado / QA aprovado
- Botao: "Dossie completo — enviar pra protocolo"
- Visualizacao do dossie Proof-First montado (PDF com hash)

**AQUI ENTRA O PRECO (Camada Zilda):**

Apos o dossie pronto, antes de protocolar, o cidadao ve o preco:

> "Dona Zilda, pra organizar todos os papeis da senhora direitinho, o custo e de R$147. Isso inclui a gente conferir tudo, montar o dossie com as leis certas, e deixar tudo pronto pra senhora dar entrada no INSS. Se nao der certo, a senhora nao me deve mais nada alem disso. E esse valor e menos do que a senhora gasta no mes de feira."

| Score/Rota | Publico <= 1 SM (R$1.621) | Publico > 1,5 SM | Justificativa |
|:--|:--|:--|:--|
| 0-25 / Rota A | R$97 | R$97 | Dossie quase automatico |
| 26-50 / Rota A-B | R$147 | R$197 | Coleta de 2-4 docs externos |
| 51-70 / Rota B | R$197 | R$297 | Genealogia documental parcial |
| >70 / Rota C | R$0 (cidadao nao paga) | R$0 | Lead fee B2B pro advogado |

**Constraint:** Nenhum cidadao de 1 SM paga mais que 13% da renda mensal (R$210,73)

**Meio de pagamento:** PIX (parcelado em ate 3x se necessario)

---

### E4 — PROTOCOLO EFETUADO

| Item | Detalhe |
|:--|:--|
| **Canal** | Dashboard (equipe) → Meu INSS (bot ou manual) |
| **Executor** | Estagiario T1 (hoje) → **Bot Playwright (futuro)** |
| **Custo** | R$9,52 (realista) / R$3,50 (com bot) |
| **Tempo** | 67 min manual / **10 min com bot** |
| **O que acontece** | Login gov.br, upload docs, selecao localidade, protocolo requerimento, captura DER |
| **Criterio de saida** | Numero de protocolo capturado + hash SHA-256 |

**GARGALO CRITICO:** Este estado e onde o sistema do INSS trava. Caso [TITULAR-pseudonimizado] (26/03/2026): 87 min, 4 tentativas de upload. O bot Playwright (Igor) vai resolver isso.

**Tela Dashboard (equipe) — ANTES DO BOT:**
- Botao: "Protocolar no Meu INSS"
- Campos: CPF, senha gov.br (criptografada), documentos anexados
- Status: Logando / Uploading (tentativa 1/5) / Selecionando localidade / Protocolando / ✅ Concluido
- Em caso de falha: "Sistema INSS indisponivel — reagendado para 20h"

**Tela Dashboard (equipe) — COM O BOT:**
- Botao: "Enviar pra fila de protocolo"
- Status automatico: Na fila (posicao 3) → Processando → ✅ Protocolo [Protocolo · REDIGIDO]
- Metricas: Tempo de processamento / Tentativas / Horario

**Tela WhatsApp (cidadao):**
- "Seu [TITULAR-pseudonimizado], seu protocolo saiu! Numero: [Protocolo · REDIGIDO]. Data de entrada: 26/03/2026. Agora e so acompanhar. A gente avisa qualquer novidade."

---

### E5 — ACOMPANHAMENTO

| Item | Detalhe |
|:--|:--|
| **Canal** | WhatsApp (alertas automaticos) + Dashboard (monitoramento) |
| **Executor** | IA (Watchdog Playwright) + Anjo T2 (se exigencia) |
| **Custo** | R$23,25 (se tiver exigencia com coleta presencial) / R$2,15 (sem exigencia) |
| **Tempo** | Variavel — 57 dias media (TMC INSS Jan/2026) |
| **O que acontece** | Bot monitora status no Meu INSS mensalmente. Se exigencia: notifica cidadao + Anjo coleta docs. Se 135 necessario: estagiario liga. |
| **Criterio de saida** | Exigencias respondidas OU resultado emitido |

**Tela WhatsApp (cidadao):**
- Alerta mensal: "Seu processo esta em analise. Posicao estimada: ~45 dias"
- Se exigencia: "O INSS pediu um documento extra: [descricao em linguagem simples]. A gente te ajuda a conseguir."
- FAQ automatico: "Dr, e ai, como ta meu processo?" → resposta imediata com status real

**Tela Dashboard (equipe):**
- Lista de casos em acompanhamento, ordenada por: dias desde protocolo / exigencias pendentes / TMC estimado
- Semaforo: 🟢 Em dia / 🟡 Perto do prazo / 🔴 Fora do prazo (>45 dias)
- Alerta automatico se exigencia detectada pelo watchdog
- Botao: "Responder exigencia" (abre fluxo de upload)

**AQUI ENTRA O BONUS DE MONITORAMENTO (Phi2):**

Cobrado APENAS se o beneficio for concedido. Se indeferido: R$0.

| Especie | Bonus (Phi2) |
|:--|:--|
| Salario-maternidade | R$100 |
| Apos. idade urbana | R$200 |
| Apos. idade rural | R$300 |
| Aux-doenca previd. | R$250 |
| Pensao por morte | R$200 |
| BPC/LOAS deficiencia | R$350 |
| BPC/LOAS idoso | R$250 |
| Apos. invalidez | R$400 |

---

### E6 — DESFECHO COMUNICADO

| Item | Detalhe |
|:--|:--|
| **Canal** | WhatsApp (ligacao ou mensagem) |
| **Executor** | Anjo T2 (comunicacao humanizada) |
| **Custo** | R$7,17 |
| **Tempo** | 38 min |
| **O que acontece** | Resultado do INSS comunicado ao cidadao com empatia. Se deferido: celebracao + cobranca Phi2 + oferta Guardiao. Se indeferido: acolhimento + opcoes (recurso, advogado). |

**Tela WhatsApp (cidadao) — DEFERIDO:**
- "Seu [TITULAR-pseudonimizado], SAIU! Seu beneficio foi aprovado! 🎉 Valor: R$1.621/mes. Primeiro pagamento previsto: [data]."
- "Como agradecimento pelo nosso trabalho, o bonus de acompanhamento e de R$250. Pode pagar via PIX quando puder."
- "Quer ativar o Guardiao do Beneficio? Por R$19,90/mes a gente monitora pra ninguem mexer no seu beneficio sem voce saber."

**Tela WhatsApp (cidadao) — INDEFERIDO:**
- "Seu [TITULAR-pseudonimizado], infelizmente o INSS negou o pedido. Mas isso NAO quer dizer que acabou."
- "Voce tem 3 opcoes: 1) Recurso administrativo (a gente te ajuda) 2) Novo requerimento com docs melhores 3) Caminho judicial com advogado parceiro"
- Se Rota C → handoff advogado certificado Meu Cumpadre

**Tela Dashboard (equipe):**
- Resultado: Deferido / Indeferido / Em exigencia
- Se deferido: status cobranca Phi2 (pendente / pago)
- Se indeferido: opcoes de encaminhamento (recurso / novo req / advogado)
- Botao: "Handoff advogado" (aciona Psi1 — lead fee B2B)

---

### E7 — POS-DESFECHO / SOBERANIA

| Item | Detalhe |
|:--|:--|
| **Canal** | WhatsApp (automatico) |
| **Executor** | IA (100% automatico) |
| **Custo** | R$0,00 |
| **Tempo** | Continuo (R$19,90/mes se Guardiao ativo) |
| **O que acontece** | Monitoramento mensal do beneficio. Alerta se desconto indevido (consignado fraudulento). Cidadao ganha autonomia. |

**Tela WhatsApp (cidadao):**
- Alerta mensal: "Tudo certo com seu beneficio este mes. Valor creditado: R$1.621. Nenhum desconto suspeito."
- Se desconto suspeito: "ALERTA: Detectamos um desconto de R$89,90 que voce nao autorizou. Quer que a gente investigue?"

**Tela Dashboard (equipe):**
- Lista de Guardioes ativos
- MRR (Monthly Recurring Revenue): quantidade x R$19,90
- Alertas de fraude detectados pelo bot

---

## 4. METRICAS PARA O DASHBOARD

### 4.1 Visao geral (tela principal)

| Metrica | Onde buscar |
|:--|:--|
| Casos hoje / semana / mes | Contador por estado |
| Fila de protocolo (E4) | Quantidade na fila do bot |
| Casos fora do prazo (>45 dias) | Semaforo E5 |
| Receita do mes (Phi1 + Phi2 + Phi4) | Soma de pagamentos |
| COGS do mes | Soma de horas x custo por executor |
| **Margem bruta** | Receita - COGS |
| NPS | Pesquisa pos-E6 |
| Guardioes ativos (MRR) | Contador E7 |

### 4.2 Heatmap de horarios (Meu INSS)

| Horario | Performance sistema | Recomendacao |
|:--|:--|:--|
| 6h-8h | 🟢 Rapido | Protocolar aqui |
| 8h-11h | 🟡 Normal | OK |
| 11h-14h | 🟡 Lento | Evitar uploads pesados |
| 14h-17h | 🔴 Muito lento | **NAO protocolar** (caso [TITULAR-pseudonimizado]) |
| 19h-22h | 🟢 Rapido | Protocolar aqui |

---

## 5. PRINCIPIOS DE UX PARA HIPERVULNERAVEIS

### 5.1 Pro cidadao (WhatsApp)

1. **Linguagem de quintal** — nunca juridiques. "Seu beneficio" nao "prestacao previdenciaria"
2. **Audio-first** — muitos sao analfabetos funcionais. Aceitar e responder em audio
3. **Progresso visual** — checkmarks, percentuais, emojis simples (✅⬜🔴🟢)
4. **Zero jargao de score** — nunca mostrar numeros de confidence/complexity pro cidadao
5. **Acolhimento em caso de negativa** — nunca abandonar. Sempre oferecer proximo passo

### 5.2 Pro operador (Dashboard)

1. **Fila priorizada** — casos urgentes (BPC PcD, idoso 80+) primeiro
2. **1 clique pra acao** — protocolar, enviar mensagem, handoff advogado
3. **Custos visiveis** — cada caso mostra COGS acumulado vs. preco cobrado (margem em tempo real)
4. **Alertas inteligentes** — sistema caiu? Exigencia vencendo? Caso parado >7 dias?
5. **Mobile-friendly** — Alessandro opera de Serra do Ramalho, muitas vezes do celular

---

## 6. PROXIMOS PASSOS

1. **Carlos:** Revisar wireframes no Figma contra este fluxo. Identificar telas faltantes
2. **Carlos + Alessandro:** Alinhar prioridade — qual estado desenhar primeiro? (sugestao: E3 + E4, que e onde o dinheiro entra e o gargalo existe)
3. **Carlos + Igor:** Sync sobre componentes reutilizaveis (card de caso, checklist de docs, barra de progresso)
4. **Claude:** Disponivel pra revisar wireframes e alimentar com dados adicionais

---

*Documento gerado por Claude (Co-founder) em 27/03/2026. Baseado em: Matriz COGS v1.1, Router-Ethics 11.0, Campo de Precificacao v2.0, dados reais caso [TITULAR-pseudonimizado].*
