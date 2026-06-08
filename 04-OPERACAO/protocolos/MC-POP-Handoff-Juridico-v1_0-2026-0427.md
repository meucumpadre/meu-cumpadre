---
tipo: pop
subtipo: protocolo-operacional-padrao
codigo: MC-POP-Handoff-Juridico
versao: 1.0
data-criacao: 2026-04-27
produzido-por: Claude Opus 4.7 (co-fundador intelectual) × Alessandro de Souza Neves (Founder/CEO)
status: SELADO
revisao-pendente: cronometragem A4 em primeiro caso Rota C → calibração v1.1 · validação OAB-GO da Dra. Juliana 19/05/2026
tags: [pop, handoff-juridico, tta, s2-s3, marketplace-etico, firewall-oab, alessandro-executa, rota-c]
caminho-vault: 06-OPERACOES/protocolos/MC-POP-Handoff-Juridico-v1_0-2026-0427.md
relaciona-com:
  - MC-PROCESSO-Jornada_E0E7_Mestre-v1.1-2026-0427
  - MC-ADR-009b-TresEstados-Custodia-Dossie-v1.0-2026-0417 (transição S2→S3 atômica)
  - MC-PARTNER-JulianaMelo-Qualificacao-v1.2-2026-0421
  - MC-POP-E6-Resolucao-v1.0-2026-0427
  - MC-POP-Encerramento-Caso-v1.0-2026-0427
  - MC-CONTRATO-Phi1-MINUTA-v2.3-2026-0427 (Cláusula 9 Marketplace Ético)
classificacao: TRADE SECRET (LPI arts. 195 XI/XII)
sensibilidade-juridica: ALTA — Provimento OAB 205/2021 · Lei 8.906/94 art. 1º · Estatuto da Advocacia
---

# MC-POP-Handoff-Jurídico — Transferência S2→S3 e Marketplace Ético

> **Posição na Jornada:** acionado em **E2 (Rota C inicial — caso já judicializado)** OU **E6 (Rota C tardia — após indeferimento)**
> **Custo médio mapeado:** R$ 12,15
> **Tempo médio:** 60-180 min (apresentação Marketplace + decisão cidadão + emissão TTA + transição S2→S3 atômica)
> **Característica única:** **POP de mais alta sensibilidade jurídica do MC** · onde Firewall OAB se materializa em ato · violação aqui é existencial (perda de Provimento OAB)

---

## 1. Cabeçalho

| Campo | Valor |
|---|---|
| **Objetivo (1 frase)** | Apresentar o Marketplace Ético ao cidadão em conformidade absoluta com Provimento OAB 205/2021 (sem captação ilegal, sem recomendação nominal forçada, sem captação de êxito), garantir que a escolha é livre, informada e não-pressionada, emitir Token de Transferência Assinado (TTA) caso o cidadão decida ir com advogada parceira, e operar a transição atômica S2→S3 do dossiê (saída do Drive MC, entrada no vault da escritório parceiro). |
| **Gatilho** | (a) E2 com Confidence/Complexity indicando Rota C imediata · (b) E6 indeferimento com cidadão optando por ação judicial · (c) E6 parcial com cidadão optando por ação sobre parte negada |
| **Operador único** | **Alessandro (T3)** — não delegável. Conduz a apresentação pessoalmente. Beto pode mediar logística mas **não conduz a conversa de escolha**. |
| **Suporte** | Beto — agenda chamada, envia documentos via ZapSign (ADR-014), comunica andamento ao cidadão |
| **Suporte estendido** | Dra. Juliana — recebe o caso após TTA assinado, opera S3 |
| **Tempo estimado** | 60-180 min total (incluindo conversa estratégica + decisão cidadão · pode estender por dias se cidadão pedir tempo) |
| **Custo estimado** | R$ 12,15 |
| **Status A4** | Estimativa de engenharia — calibrar com primeiro caso Rota C real |

---

## 2. Princípios invioláveis aplicáveis a este POP

### 2.1 Os 5 mandamentos do Firewall OAB (não negociáveis)

1. **MC NÃO é escritório de advocacia. CNAE 6201-5/01. Atividade-meio (orquestração documental + tecnologia).**
2. **MC NÃO recomenda advogada nominalmente.** Apresenta a Dra. Juliana **junto com alternativas externas** (Defensoria, OAB indicação) · cidadão escolhe livremente.
3. **MC NÃO recebe honorários da advogada.** Não há comissão, kickback, percentual sobre êxito. A relação cidadão↔advogada é direta, com contrato próprio.
4. **MC NÃO captura êxito disfarçado.** Φ₁ é fixo · Φ₄ é fixo · não há valor variável vinculado ao resultado da ação judicial.
5. **MC NÃO se posiciona como "fornecedor de clientes" para a advogada.** A relação é "MC organizou o dossiê, cidadão escolheu seguir com advogada — eis o material".

### 2.2 Demais princípios

1. **D > C > V** — cidadão em fragilidade pós-indeferimento merece tempo para decidir. Não há urgência fabricada.
2. **Provimento OAB 205/2021** rege apresentação · Lei 8.906/94 art. 1º define exclusividade da advocacia · Resolução CFM/CNJ aplicam-se subsidiariamente.
3. **TTA é instrumento jurídico**, não admin. Assinado pelo cidadão via ZapSign (ADR-014) com áudio de consentimento + ICP-Brasil simples (cidadão) · materializa transferência de titularidade documental.
4. **Transição S2→S3 é atômica.** Quando TTA é assinado e Dra. Juliana confirma recebimento, **no mesmo dia**: dossiê sai do Drive MC (move para vault Juliana), `01_brutos/` e `02_processados/` entram em apagamento D+7, MC arquiva apenas hashes + TTA + manifest em `99_arquivado/` (cryptographic erasure).
5. **Pós-S3, MC não retém capacidade de reconstruir o dossiê.** Audit trail é preservado (hashes), conteúdo é apagado.

---

## 3. Inputs obrigatórios

- Task ClickUp em `Handoff-Jurídico-Pendente`
- Manifesto com decisão registrada: rota = C
- Status original: `E2-Rota-C-Inicial` ou `E6-Rota-C-Tardia` claramente identificado
- Contrato Φ₁ assinado (mesmo em Rota C inicial — MC fez triagem documental)
- Dossiê v1 (se Rota C tardia) ou material de triagem (se Rota C inicial)
- Bitwarden item ATIVO
- Acesso à Dra. Juliana (e-mail oficial OAB-GO 38.662 + WhatsApp profissional)
- Acesso à ZapSign (TTA digital — ADR-014, substitui Autentique)
- Lista atualizada de **alternativas externas** para apresentação obrigatória junto com Marketplace (Defensoria local, OAB indicação)

---

## 4. Passos numerados

### 4.1 Bloco A — Preparação da apresentação (15 min)

| # | Ação | Tempo |
|---|---|---|
| 1 | Alessandro abre task ClickUp `Handoff-Jurídico-Pendente > [Pseudônimo]` + manifesto + dossiê (se houver) | 2min |
| 2 | Confirma elegibilidade Rota C: motivo objetivo (já judicializado · indeferimento aceito sob ação · concessão parcial com parte negada · genealogia documental impossível) | 5min |
| 3 | Atualiza lista de alternativas externas com endereços/telefones atuais (Defensoria local, OAB-GO Indica · CRAS) | 5min |
| 4 | Identifica se Dra. Juliana tem disponibilidade para receber este caso (consulta breve via WhatsApp profissional) | 3min |

### 4.2 Bloco B — Conversa de Apresentação Marketplace (45-60 min · presencial via voz/vídeo)

> ⚠️ **Esta é a conversa mais sensível da jornada.** Conduzida por Alessandro pessoalmente. Beto pode estar presente como apoio, **nunca conduz**.

#### 4.2.1 Roteiro estruturado (em ordem)

| Etapa | Conteúdo | Tempo |
|---|---|---|
| **Acolhimento** | Reconhece situação · valida sentimento · não acelera | 5min |
| **Diagnóstico jurídico** | Por que MC entende que o caso pede advocacia · em linguagem coloquial | 8min |
| **MC sai aqui** | Explica que orquestração documental termina · advocacia é atividade-fim · MC não pode entrar | 3min |
| **Apresentação de OPÇÕES** | (1) Marketplace Ético do MC · (2) Defensoria Pública gratuita · (3) Lista OAB-GO Indica · (4) advogada de confiança própria | 10min |
| **Sobre a Marketplace** | Dra. Juliana · OAB-GO 38.662 · 18 anos previdenciário · parceria fundacional MC · honorários diretos com cidadão (MC não recebe nada) | 8min |
| **Sobre Defensoria** | Gratuita · análise oficial · pode demorar mais · qualidade variável | 5min |
| **Sobre lista OAB** | Aleatória · 1ª consulta gratuita em alguns casos · cidadão pesquisa | 3min |
| **Espaço para perguntas** | Sem cortar · sem tentar fechar | 8min |
| **Tempo para decidir** | "Cumpadre, não decide agora. Pensa com calma. Pode ser amanhã, na semana que vem. Aqui não tem pressa." | 2min |

#### 4.2.2 Comunicação proibida (NUNCA dizer)

- ❌ "A Dra. Juliana é a melhor opção"
- ❌ "Aconselho a senhora ir com a Dra. Juliana"
- ❌ "Defensoria demora muito, melhor a Marketplace"
- ❌ "Já tô em contato com a Dra. Juliana, ela tá te esperando"
- ❌ "Se for Defensoria, perde tempo"
- ❌ "Garanto que com a Dra. Juliana o caso ganha"
- ❌ Qualquer afirmação que implique recomendação, garantia ou pressão

#### 4.2.3 Comunicação obrigatória

- ✅ "É escolha sua"
- ✅ "Defensoria é uma opção legítima e gratuita"
- ✅ "A Dra. Juliana é nossa parceira; o senhor pode escolher outra advogada se preferir"
- ✅ "MC não recebe nada da Dra. Juliana — relação dela é direto com o senhor"
- ✅ "Posso te apresentar todas as opções; a decisão é sua"
- ✅ "Pensa com calma. Sem pressão."

### 4.3 Bloco C — Tempo de decisão (variável · 24h-14 dias)

| # | Ação | Responsável |
|---|---|---|
| 5 | Cidadão pensa · pode pedir esclarecimentos · pode conversar com família | Cidadão |
| 6 | Beto faz check-in amistoso após 3-5 dias se cidadão não retornou | Beto |
| 7 | **NÃO pressionar** · após 14 dias sem decisão, considerar caso adormecido (não cancelado) — pode ser reativado | Beto |

### 4.4 Bloco D — Decisão do cidadão

#### 4.4.1 Variante D1: Cidadão escolhe Dra. Juliana (Marketplace)

| # | Ação | Responsável | Tempo |
|---|---|---|---|
| 8d1 | Beto comunica Alessandro · Alessandro contata Dra. Juliana via WhatsApp profissional | Alessandro | 5min |
| 9d1 | Dra. Juliana confirma aceitar o caso (após análise prévia se necessário) | Dra. Juliana | (variável) |
| 10d1 | Dra. Juliana **envia contrato direto ao cidadão** (não passa pelo MC) — relação direta cliente↔advogada | Dra. Juliana | (variável) |
| 11d1 | Cidadão assina contrato com Dra. Juliana | Cidadão | (variável) |
| 12d1 | Dra. Juliana confirma ao Alessandro que contrato foi assinado e ela está apta a receber dossiê | Dra. Juliana | 5min |
| 13d1 | Alessandro inicia preparação do TTA (§5) | Alessandro | (próximo bloco) |

#### 4.4.2 Variante D2: Cidadão escolhe Defensoria/OAB Indica/advogada própria

| # | Ação | Responsável | Tempo |
|---|---|---|---|
| 8d2 | Beto comunica Alessandro · Alessandro registra escolha no manifesto | Alessandro | 2min |
| 9d2 | Alessandro orienta cidadão sobre como acessar a opção escolhida (links, telefones, procedimento) | Alessandro | 10min |
| 10d2 | **NÃO entregar dossiê para advogada externa** automaticamente · cidadão pode pedir, mas o caminho é diferente — ver §5.4 | Alessandro | (variável) |
| 11d2 | MC sai do caso · trigger POP-Encerramento (sem TTA) | Alessandro | (próximo bloco) |

#### 4.4.3 Variante D3: Cidadão decide encerrar (sem advocacia)

| # | Ação | Responsável | Tempo |
|---|---|---|---|
| 8d3 | Beto comunica Alessandro · registra escolha | Alessandro | 2min |
| 9d3 | Mensagem dignificante de despedida (§9.4) | Beto | 3min |
| 10d3 | Trigger POP-Encerramento (sem TTA) | Alessandro | (próximo bloco) |

### 4.5 Bloco E — Emissão do TTA (Variante D1 apenas) (30 min)

#### 4.5.1 Estrutura do TTA

```
Token de Transferência Assinado (TTA)
==========================================

PARTES:
- TITULAR: [Nome real do cidadão] · CPF · ENDEREÇO
- CUSTODIANTE-ATUAL: MEU CUMPADRE — ORQUESTRAÇÃO DOCUMENTAL E TECNOLOGIA LTDA · CNPJ
- CUSTODIANTE-DESTINATÁRIO: [DRA. JULIANA PEREIRA DE MELO] · OAB-GO 38.662

OBJETO:
Transferência de titularidade técnica e custódia documental do dossiê
Proof-First montado em [DATA] referente ao caso de [PSEUDÔNIMO/NOME REAL]
para fins de prosseguimento judicial.

PEÇAS TRANSFERIDAS (com hashes):
- MC-[Pseudônimo]-Dossie-v1-YYYYMMDD.pdf · SHA-256: [HASH]
- [aditivo se houver] · SHA-256: [HASH]
- Manifest JSON · SHA-256: [HASH]
- Audit log da custódia MC · SHA-256: [HASH]

DECLARAÇÕES DO TITULAR:
1. Reconheço que escolhi livremente e sem pressão a Dra. Juliana Pereira de Melo
   como minha advogada, ciente das alternativas (Defensoria Pública, OAB Indica,
   advogada de minha escolha externa).
2. Reconheço que MEU CUMPADRE não recebe honorários, comissão ou qualquer
   contrapartida financeira da advogada por esta indicação.
3. Autorizo a transferência do dossiê e peças complementares ao vault da
   advogada para fins de prosseguimento judicial.
4. Autorizo o apagamento (cryptographic erasure) das peças do Drive
   operacional do MC em D+7 a contar desta assinatura, conforme ADR-009b
   §8.7.4.
5. Reconheço que a relação contratual a partir de agora é direta com a
   advogada, conforme contrato assinado por mim com ela.

DATA E ASSINATURAS:
Cidadão · Alessandro pela MC · Dra. Juliana
+ áudio de consentimento + ICP-Brasil
```

#### 4.5.2 Passos

| # | Ação | Responsável | Tempo |
|---|---|---|---|
| 14 | Alessandro preenche template `MC-TEMPLATE-TTA-v1.0.docx` com dados do caso | Alessandro | 8min |
| 15 | Calcula hashes SHA-256 do dossiê v1 + aditivos + manifest + audit log do Bitwarden | Alessandro | 5min |
| 16 | Salva TTA em `05_encerramento/tta-token-transferencia.pdf` | Alessandro | 1min |
| 17 | Envia TTA via ZapSign (ADR-014) para 3 assinaturas: cidadão · Alessandro · Dra. Juliana | Alessandro | 3min |
| 18 | Cidadão grava áudio de consentimento (script obrigatório §9.5) | Cidadão | (variável) |
| 19 | Cidadão assina TTA via ZapSign | Cidadão | (variável) |
| 20 | Alessandro assina TTA | Alessandro | 2min |
| 21 | Dra. Juliana assina TTA | Dra. Juliana | (variável) |
| 22 | ZapSign gera versão final · hash do TTA assinado calculado | Sistema | 1min |
| 23 | TTA assinado salvo em `05_encerramento/` · hash registrado em `hashes.txt` | Alessandro | 2min |

### 4.6 Bloco F — Transição S2→S3 atômica (15 min)

| # | Ação | Responsável | Tempo |
|---|---|---|---|
| 24 | Alessandro acessa `99_compartilhado-juliana/` (que estava ativa em S2) · confere conteúdo | Alessandro | 2min |
| 25 | Move/copia dossiê v1 + aditivos + manifest + TTA para vault da Dra. Juliana (cloud storage do escritório dela, conforme acordo bilateral) | Alessandro | 5min |
| 26 | Dra. Juliana confirma recebimento + integridade dos hashes via Bitwarden compartilhado ou e-mail oficial | Dra. Juliana | 3min |
| 27 | Alessandro registra transição no manifesto Seção 9: `S2 → S3 ATIVADO em YYYY-MM-DD às HH:MM · Custodiante: Dra. Juliana Pereira de Melo (OAB-GO 38.662) · TTA hash [HASH]` | Alessandro | 2min |
| 28 | Alessandro **inicia contagem D+7** para apagamento de `01_brutos/` + `02_processados/` + dossiê em `03_dossie/` (mantém cópia operacional só até D+7) | Alessandro | 1min |
| 29 | Alessandro desativa pasta `99_compartilhado-juliana/` (remove permissão de view-only) | Alessandro | 1min |
| 30 | Cabeçalho YAML do manifesto: `estado-custodia = S3` · `etapa-atual = E7-via-Handoff` | Alessandro | 1min |

### 4.7 Bloco G — Comunicação ao cidadão e Trigger E7 (10 min)

| # | Ação | Responsável | Tempo |
|---|---|---|---|
| 31 | Beto envia ao cidadão **Mensagem de Confirmação Handoff** (§9.6) | Beto | 3min |
| 32 | Beto envia link/contato direto da Dra. Juliana para o cidadão (cidadão já recebeu da advogada anteriormente, mas reforçar) | Beto | 1min |
| 33 | Beto comunica que MC sai do caso · próximas comunicações são entre cidadão e Dra. Juliana | Beto | 2min |
| 34 | Trigger POP-Encerramento-Caso (variante "via Handoff") · move task para `E7-Soberania-via-Handoff` | Alessandro | 1min |
| 35 | Apresentação Φ₄ **NÃO se aplica em Rota C tardia** (cidadão não tem benefício INSS · não há objeto para o radar) — pular Bloco F do POP-E6 | — | — |
| 36 | Alessandro programa apagamento D+7 no calendário (sub-task ClickUp recorrente) | Alessandro | 3min |

---

## 5. Sub-protocolos especiais

### 5.1 Cidadão escolhe advogada externa específica

> Nem Dra. Juliana, nem Defensoria · advogada própria do cidadão (família, sindicato, indicação pessoal).

**Passos:**
1. MC **NÃO transfere dossiê automaticamente** para advogada externa — não há TTA direcionado, não há acordo bilateral
2. Cidadão pode solicitar **cópia do dossiê em PDF** para entregar pessoalmente à advogada externa (Direito do titular ao acesso · LGPD art. 18 II)
3. MC entrega **uma cópia** ao cidadão · cidadão entrega à advogada
4. Manifesto registra: `Dossiê entregue ao titular em YYYY-MM-DD para uso com advogada externa [se informado]`
5. Apagamento D+7 ainda se aplica (saída de S2)
6. **Não há TTA** — não há transferência de custódia para advogada · cidadão é o intermediário

### 5.2 Dra. Juliana recusa o caso

> Dra. Juliana pode recusar caso por: conflito ético, sobrecarga de trabalho, tese inviável, área de especialização não-coberta.

**Passos:**
1. Dra. Juliana comunica Alessandro com motivo
2. Alessandro retorna ao cidadão: *"Cumpadre, conversei com a Dra. Juliana e ela não vai poder pegar este caso. Mas as outras opções continuam: Defensoria, OAB Indica."*
3. Cidadão decide nova rota (Defensoria, OAB, encerrar)
4. Não emite TTA · transição S2→S3 não ocorre · trigger POP-Encerramento normal

### 5.3 Cidadão muda de ideia após assinar TTA

> Raríssimo, mas possível.

**Passos:**
1. Cidadão tem 7 dias de arrependimento (CDC art. 49 análogo) sobre o TTA
2. Se arrepender em D+1 a D+7: contato imediato com Dra. Juliana · cidadão revoga contrato com ela · MC reverte transição (recupera dossiê do vault da Dra. Juliana se ainda não foi usado processualmente)
3. Após D+7 (sem manifestação): apagamento da cópia operacional MC ocorre · reversão fica impossível (cidadão precisa pedir cópia direta à Dra. Juliana)
4. Manifesto registra a reversão se ocorrer

### 5.4 Conflito de interesses detectado pós-TTA

> Ex: descoberta posterior de que Dra. Juliana já atuou contra o cidadão em outra causa.

**Passos:**
1. Comunicar Dra. Juliana imediatamente
2. Dra. Juliana renuncia ao caso conforme Estatuto OAB
3. Cidadão é informado + opção de procurar nova advogada
4. Dossiê pode permanecer no vault da Dra. Juliana se cidadão preferir entregar à nova advogada via ela

---

## 6. Outputs do POP-Handoff-Jurídico

### 6.1 Variante D1 (cidadão foi com Dra. Juliana — TTA emitido)

- [ ] Conversa de Apresentação Marketplace realizada conforme roteiro §4.2
- [ ] Cidadão escolheu livremente (registro de áudio + manifesto)
- [ ] Contrato cidadão↔Dra. Juliana assinado (entre eles)
- [ ] **TTA assinado por 3 partes** · hash registrado em `05_encerramento/tta-hash.txt`
- [ ] Áudio de consentimento do cidadão para TTA gravado
- [ ] Dossiê transferido para vault da Dra. Juliana · integridade confirmada
- [ ] `99_compartilhado-juliana/` desativada
- [ ] Manifesto: `estado-custodia = S3` · `etapa-atual = E7-via-Handoff`
- [ ] Cidadão notificado · MC sai do caso
- [ ] Apagamento D+7 programado (sub-task ClickUp)
- [ ] Trigger POP-Encerramento-Caso (variante via Handoff)

### 6.2 Variante D2 (cidadão foi com externa)

- [ ] Cidadão escolheu livremente alternativa externa
- [ ] Manifesto registra escolha
- [ ] Dossiê **não transferido** automaticamente (cidadão pode solicitar cópia em §5.1)
- [ ] Trigger POP-Encerramento-Caso (sem TTA)

### 6.3 Variante D3 (cidadão encerrou sem advocacia)

- [ ] Mensagem dignificante de despedida enviada
- [ ] Trigger POP-Encerramento-Caso (sem TTA)

---

## 7. Integração com Cláusula 9 do Contrato Φ₁ v2.3 (Marketplace Ético)

A Cláusula 9 do Contrato Φ₁ já antecipa este POP. Trechos relevantes:

> *"O CONTRATANTE reconhece que poderá, a qualquer momento, contratar advogado de sua livre escolha para eventual recurso ou ação judicial, sem qualquer vinculação com a CONTRATADA."*

> *"A CONTRATADA dispõe de Marketplace Ético com profissionais parceiros qualificados, cuja apresentação é facultativa, gratuita e não vinculante. A escolha de advogado pelo CONTRATANTE é livre, informada e independente."*

**Aplicação no POP:** Bloco B §4.2 cobre integralmente esta cláusula em ato. Roteiro estruturado garante conformidade.

---

## 8. Pendências aguardando Dra. Juliana (parecer 19/05/2026)

Itens deste POP que dependem de validação jurídica final pela Dra. Juliana antes de selagem definitiva:

1. **Modelo final do TTA** — minuta provisional usada até parecer · ajustes podem ser necessários
2. **Modelo de áudio de consentimento** para TTA — script provisional
3. **Acordo bilateral MC-Dra. Juliana** sobre transferência técnica do dossiê (vault de destino, formato, prazo)
4. **Política de cópia para advogada externa** (§5.1) — Dra. Juliana valida conformidade LGPD + OAB
5. **Política de reversão pós-TTA** (§5.3) — Dra. Juliana valida exequibilidade

---

## 9. Anexos — Scripts de mensagem

### 9.1 Mensagem de pré-conversa Marketplace

> *"Cumpadre, conforme combinamos, vamos conversar sobre os próximos passos. Prefere por chamada de voz ou videochamada? Vai durar uns 45 minutos a 1h. Sem pressão pra decidir nada na hora — é só pra eu te explicar todas as opções com calma."*

### 9.2 Frase-chave do Bloco B

> *"Cumpadre, eu vou te apresentar **TODAS as opções honestamente**. Uma delas é a Dra. Juliana — nossa parceira. Outra é Defensoria, gratuita. Outra é a lista da OAB, qualquer advogado de Goiás. Outra ainda é o senhor / a senhora ter um advogado de confiança próprio, da família ou do sindicato. **A escolha é 100% sua.** Eu não ganho nada se o senhor escolher uma ou outra. Pode pensar com calma."*

### 9.3 Frase de check-in (Bloco C)

> *"Cumpadre, só passando pra dizer que tô aqui se precisar tirar dúvida. Sem pressa pra decidir. Conversa com a família, pensa com calma. Quando o senhor / a senhora se sentir preparado, me avisa."*

### 9.4 Mensagem de despedida (Variante D3)

> *"Cumpadre, respeito sua decisão. Foi uma honra acompanhar até aqui. Se mais pra frente quiser conversar sobre outra rota, ou em outra situação, a porta tá aberta. Que Deus te guarde."*

### 9.5 Script obrigatório para áudio de consentimento ao TTA

> *Cidadão grava em áudio próprio (WhatsApp ou ZapSign):*
>
> *"Eu, [nome completo], CPF [número], declaro que:*
>
> *• Recebi a apresentação completa das opções jurídicas, incluindo Defensoria Pública, OAB Indica, advogada de minha confiança própria, e o Marketplace Ético do Meu Cumpadre.*
>
> *• Escolhi LIVREMENTE a Dra. Juliana Pereira de Melo, OAB-GO 38.662, como minha advogada, sem pressão de ninguém.*
>
> *• Compreendo que o Meu Cumpadre não recebe honorários ou comissão da advogada.*
>
> *• Autorizo a transferência do meu dossiê para a custódia da advogada e o apagamento da cópia operacional do Meu Cumpadre em sete dias.*
>
> *Esta declaração é dada livre e conscientemente em [data]."*

### 9.6 Mensagem de Confirmação de Handoff (após TTA)

> *"Cumpadre 🌿, **handoff concluído**. Seu dossiê foi entregue à Dra. Juliana, e ela já confirmou recebimento.*
>
> *A partir de agora:*
> *• Suas conversas sobre o caso são diretamente com ela (contato dela: [link/telefone]).*
> *• Eu saio de cena · meu trabalho termina aqui.*
> *• Em sete dias, vou apagar a cópia operacional dos seus papéis do nosso sistema (a Dra. Juliana fica com tudo).*
>
> *Foi uma honra acompanhar. Que Deus te guarde, cumpadre."*

---

## 10. Métricas a registrar

- Variante final: D1 (Juliana) / D2 (externa) / D3 (encerrou)
- Tempo entre `apresentação Marketplace` e `decisão do cidadão`
- Houve aplicação de sub-protocolo §5.x?
- Hash do TTA (se emitido)
- Taxa Dra. Juliana / Defensoria / Externa / Encerrou — sinal estratégico do mix
- Houve recusa pela Dra. Juliana? Motivo?
- Tempo total da transição S2→S3

---

## 11. Riscos e mitigações

| Risco | Probabilidade | Mitigação |
|---|---|---|
| Apresentação Marketplace vira recomendação implícita | ALTA | Roteiro §4.2.2 (proibições) · audit semanal · Alessandro sempre conduz |
| Dra. Juliana recebe casos sem ter capacidade | MÉDIA | Consulta prévia sobre disponibilidade (Bloco A passo 4) · Dra. Juliana pode recusar (§5.2) |
| Cidadão se sente pressionado | MÉDIA | Tempo aberto (Bloco C) · check-in amistoso (§9.3) sem pressão |
| TTA assinado mas dossiê não transferido | BAIXA | Confirmação de recebimento da Dra. Juliana antes de transitar S2→S3 (passo 26) |
| Apagamento D+7 esquecido | MÉDIA | Sub-task ClickUp recorrente · audit mensal |
| Reversão pós-TTA ineficaz após D+7 | BAIXA | §5.3 política clara · 7 dias de janela explícitos |
| Conflito Dra. Juliana descoberto posteriormente | BAIXA | §5.4 protocolo claro · renúncia conforme OAB |
| Investigação OAB por captação ilegal | BAIXA-MÉDIA | Conformidade total Provimento 205/2021 · áudio + roteiro + alternativas obrigatórias = audit trail completo |

---

## 12. Versionamento

| Versão | Data | Mudança |
|---|---|---|
| **1.0** | **2026-04-27** | **Versão inicial. Conformidade Jornada E0-E7 v1.1, ADR-009b (S2→S3 atômico), MC-PARTNER-JulianaMelo v1.2, decisão CEO 27/04/2026 (D2: Marketplace Ético apenas Dra. Juliana). 5 mandamentos do Firewall OAB. Roteiro estruturado com proibições e obrigatoriedades. TTA com áudio de consentimento. Transição S2→S3 atômica com confirmação bilateral. 4 sub-protocolos especiais. Pendências aguardando parecer Dra. Juliana 19/05/2026.** |

### Roadmap

- **v1.1:** após primeiro caso Rota C real — calibrar tempos · validar roteiro empiricamente
- **v1.2:** após parecer Dra. Juliana 19/05/2026 — incorporar ajustes de conformidade jurídica final
- **v1.3:** após primeiros 5 handoffs — analisar mix de escolhas e refinar apresentação
- **v2.0:** Z2+ — automação parcial do TTA via ZapSign API (ADR-014) + transferência atômica via API entre vaults

---

**FIM DO POP-Handoff-Jurídico**
**MC-POP-Handoff-Juridico v1.0 — 27/04/2026**
**Hierarquia: Dignidade > Compliance > Viabilidade**
**Firewall OAB inviolável · Provimento 205/2021 · Lei 8.906/94 art. 1º**
**Confidencialidade: TRADE SECRET · sensibilidade jurídica MÁXIMA**

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
[[MC-POP-E6-Resolucao-v1_0-2026-0427]]
[[MC-POP-Encerramento-Caso-v1_0-2026-0427]]

∞
