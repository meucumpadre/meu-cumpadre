---
tipo: pop
subtipo: protocolo-operacional-padrao
codigo: MC-POP-E1-PrimeiroContato
versao: 1.0
data-criacao: 2026-04-27
produzido-por: Claude Opus 4.7 (co-fundador intelectual) × Alessandro de Souza Neves (Founder/CEO)
status: SELADO
revisao-pendente: cronometragem A4 em Hib001 → calibração v1.1
tags: [pop, e1, primeiro-contato, whatsapp, dib-urgency, lgpd, router-ethics, beto-executa]
caminho-vault: 06-OPERACOES/protocolos/MC-POP-E1-PrimeiroContato-v1_0-2026-0427.md
relaciona-com:
  - MC-PROCESSO-Jornada_E0E7_Mestre-v1.1-2026-0427
  - MC-SPEC-Drive-Estrutura-v1.0-2026-0427
  - MC-ADR-009a-Custodia_Credenciais_GovBr-v2.0-2026-0425
  - RouterEthics_10_MeuCumpadre_Unificado_v3.0-2026-0421
classificacao: TRADE SECRET (LPI arts. 195 XI/XII)
---

# MC-POP-E1 — Primeiro Contato no WhatsApp

> **Posição na Jornada:** E0 (Sinal Fraco) → **E1 (Primeiro Contato)** → E2 (Triagem/Deliberação)
> **Custo médio mapeado:** R$ 5,01 · **Tempo médio:** 37 minutos · **SLA:** 4h úteis para resposta inicial · 24h úteis em caso `[DIB-URGENTE]`

---

## 1. Cabeçalho

| Campo | Valor |
|---|---|
| **Objetivo (1 frase)** | Acolher humanamente o cidadão que chegou ao MC via WhatsApp, capturar dados mínimos para classificação, **aplicar Protocolo Urgência DIB obrigatório**, e produzir um pacote de E1 suficiente para o Supervisor T3 deliberar em E2. |
| **Gatilho** | Mensagem entrante no WhatsApp Cloud API após triagem inicial pelo Gemini 2.5 Flash em E0 (sinal fraco) e classificação como "caso candidato" (não panfleto, não troll, não fora de escopo). |
| **Operador primário** | Beto (T1+T2 híbrido) |
| **Supervisor** | Alessandro (T3) — escalação por exceção |
| **Tempo estimado** | 37 minutos (estimativa pré-A4) |
| **Custo estimado** | R$ 5,01 (Gemini Flash + tempo Beto) |
| **Status A4** | Estimativa de engenharia — calibrar com Hib001 |

---

## 2. Princípios invioláveis aplicáveis a este POP

1. **D > C > V** — se o cidadão estiver em sofrimento agudo (mensagens com sinais de crise emocional, mencionando suicídio, abandono), pausar fluxo operacional e oferecer suporte humano antes de qualquer pergunta técnica.
2. **Firewall OAB** — nunca prometer resultado jurídico, nunca prometer concessão, nunca recomendar advogado em E1.
3. **Correção 48h** — se mencionar prazos, **apenas o sprint interno triagem→protocolo (E0→E4) com docs completos**. Nunca prazo de concessão INSS.
4. **Proof-First** — não inventar dados. Se cidadão pergunta algo que Beto não sabe, encaminhar a Alessandro ou usar Grimório como referência.
5. **LGPD** — coleta progressiva, consentimento explícito antes de pedir CPF/NB/dados sensíveis.
6. **Pseudônimo gerado em E1** — toda task ClickUp e pasta Drive futura usa o pseudônimo, **nunca o nome real**.

---

## 3. Inputs obrigatórios

- Mensagem entrante no WhatsApp já triada por Gemini Flash em E0
- Acesso de Beto ao ClickUp Space `🏛️ CASOS B2C` → List `E1-Triagem`
- Acesso de Beto ao Folder `🔐 Registro de Identidade B2C` para registrar pseudônimo↔nome real (apenas Alessandro vê — Beto **só registra**)
- Bitwarden Org MC com sessão ativa (caso necessário consultar credenciais MC, **nunca** do cidadão)
- Última versão do `MC-MAPA-Pseudonimos.csv` para evitar colisão de pseudônimos

---

## 4. Passos numerados

### 4.1 Bloco A — Acolhimento humano (5 min)

| # | Ação | Tempo |
|---|---|---|
| 1 | Ler a mensagem entrante e a classificação preliminar do Gemini Flash | 30s |
| 2 | Responder em até 4h úteis (24h em horários de descanso) com mensagem de acolhimento (ver §10.1) | 1min |
| 3 | Aguardar resposta do cidadão | (variável) |
| 4 | Se cidadão demonstrar sinais de crise emocional → pausar este POP, escalar a Alessandro imediatamente, oferecer **passarela Saúde Mental** (CVV 188) sem fazer mais perguntas | (variável) |
| 5 | Se cidadão responder de forma operacional, prosseguir para Bloco B | 30s |

### 4.2 Bloco B — Captura mínima (10 min)

| # | Ação | Tempo |
|---|---|---|
| 6 | Perguntar **nome completo** (sem CPF ainda) | 1min |
| 7 | Perguntar **idade aproximada** (faixa, não data de nascimento) | 1min |
| 8 | Perguntar **município/UF** | 1min |
| 9 | Perguntar **vertical aproximada** com linguagem coloquial: *"O senhor tá tentando o quê — aposentadoria, encostado por doença, BPC, pensão, alguma outra coisa?"* | 2min |
| 10 | **Se vertical = encostado/auxílio-doença/aposentadoria invalidez/acidente → APLICAR PROTOCOLO DIB URGENCY (§5) ANTES de qualquer outra coisa** | 5min |
| 11 | Perguntar se já teve algum pedido no INSS antes (sim/não — se sim, foi negado?) | 1min |

### 4.3 Bloco C — Pseudonimização e LGPD (8 min)

| # | Ação | Tempo |
|---|---|---|
| 12 | Gerar pseudônimo conforme regra §6 | 1min |
| 13 | Verificar no `MC-MAPA-Pseudonimos.csv` se pseudônimo é único (se colidir, incrementar) | 1min |
| 14 | Registrar mapeamento `pseudônimo ↔ nome real` no Folder ClickUp `🔐 Registro de Identidade B2C` (campo restrito a Alessandro) | 2min |
| 15 | Enviar **mensagem de consentimento LGPD básica** (ver §10.2) e aguardar `SIM, AUTORIZO` | 3min |
| 16 | Se cidadão não autorizar → encerrar com mensagem respeitosa e arquivar task como "LGPD não consentida" | 1min |

### 4.4 Bloco D — Documento mínimo (10 min)

| # | Ação | Tempo |
|---|---|---|
| 17 | Pedir **um documento de identidade** (RG ou CNH, frente e verso) — ainda **não pedir CPF separado** | 1min |
| 18 | Receber, conferir legibilidade, **não armazenar no WhatsApp** — encaminhar para upload temporário em pasta criptografada (em E3 vai para `01_brutos/01a_identidade/`) | 5min |
| 19 | Confirmar dados básicos do documento batem com o que o cidadão informou (nome, idade) | 2min |
| 20 | Se discrepância grave → flag `[IDENTIDADE-DIVERGENTE]` no manifesto e escalar para Alessandro (possível fraude ou erro de cadastro) | 2min |

### 4.5 Bloco E — Score Confidence preliminar e decisão de rota (4 min)

| # | Ação | Tempo |
|---|---|---|
| 21 | Computar **Confidence Score preliminar** com base nos dados capturados (rubrica em §7) | 2min |
| 22 | Computar **Fraudscore preliminar** com checagens básicas (§7.4) | 1min |
| 23 | Decidir rota: **AVANÇA E2** (Confidence ≥40 + Fraudscore baixo) OU **ORIENTA SEM ENTRAR** (Confidence <40 OU caso fora de escopo MC) | 1min |

### 4.6 Bloco F — Empacotamento para E2 (5 min — só se avançou)

| # | Ação | Tempo |
|---|---|---|
| 24 | Criar task no ClickUp List `E2-Deliberação` com o pseudônimo no nome | 1min |
| 25 | Preencher Custom Fields: vertical hipotética, idade, UF, score Confidence preliminar, Fraudscore, flags (`[DIB-URGENTE]` se aplicável) | 2min |
| 26 | Anexar documento de identidade na task (com TTL de 30 dias até virar S1 oficial em E2) | 1min |
| 27 | Adicionar comentário-resumo: 3-5 linhas com a história do cidadão para Alessandro deliberar | 1min |
| 28 | Notificar Alessandro via WhatsApp: *"Cumpadre, tem um [Pseudônimo] no E2 esperando deliberação. [Flag se houver]."* | 30s |

---

## 5. Protocolo Urgência DIB (OBRIGATÓRIO em E1 para B31, B91, B42, B43)

> **Fundamento legal:** Art. 60 §1º Lei 8.213/91 (auxílio-doença) · Art. 43 §1º (invalidez)
> **Janela:** 30 dias do evento médico
> **Se passar:** DIB = DER, retroativo perdido permanentemente. Perda de R$ 57 a R$ 190 por dia de atraso (range 1 SM a 2 SM).

### 5.1 Quando aplicar

Se a vertical hipotética envolve qualquer destes:
- Auxílio-Doença / Auxílio por Incapacidade Temporária (B31)
- Aposentadoria por Invalidez / Aposentadoria por Incapacidade Permanente (B32)
- Acidentário (B91 / B92 / B94)
- Invalidez Acidentária (B43)

### 5.2 Pergunta obrigatória do Beto

> *"Cumpadre, preciso saber uma coisa importante. Esse problema — o atestado, a cirurgia, a alta do hospital, o acidente — aconteceu há quanto tempo? Pode ser uma data aproximada."*

### 5.3 Decisão por janela

| Tempo desde o evento médico | DIB resultante | Retroativo | Ação |
|---|---|---|---|
| ≤ 30 dias | Retroage à data do evento | **PRESERVADO** | Flag `[DIB-URGENTE]` · SLA 24h úteis para E4 · escalar para Alessandro IMEDIATAMENTE |
| 31–60 dias | DIB = DER | **PERDIDO** | Fluxo normal · sem flag de urgência |
| > 60 dias | DIB = DER | **PERDIDO** | Fluxo normal |

### 5.4 Comunicação ao cidadão (script obrigatório se ≤30 dias)

> *"Cumpadre, a gente tá ainda dentro de uma janela importante. Quanto antes a gente protocolar, mais o senhor recebe. Cada dia que passa pode custar entre R$ 57 e R$ 190 do seu retroativo. Vou tratar seu caso como urgente — passar pra cá os documentos o mais rápido possível, tá?"*

### 5.5 Tag operacional

- ClickUp: campo `urgencia_dib` = `SIM` + label vermelha
- Manifesto futuro (criado em E2): flag `[DIB-URGENTE: SIM]`
- Notificação WhatsApp imediata para Alessandro (Supervisor T3) com prefixo `🚨 DIB-URGENTE:`

---

## 6. Geração de pseudônimo

### 6.1 Regra

Pseudônimo segue padrão `[Vertical-3-letras][Sequencial-3-dígitos]` ou `Gen[Sequencial-3-dígitos]` se vertical ainda incerta.

### 6.2 Códigos de vertical (3 letras)

| Código | Vertical |
|---|---|
| `Idu` | Aposentadoria por Idade Urbana (B41) |
| `Idr` | Aposentadoria por Idade Rural (B41 rural) |
| `Hib` | Aposentadoria Híbrida (B41 Tema 1007 STJ) |
| `Tcu` | Tempo de Contribuição / Pedágio |
| `Esp` | Aposentadoria Especial (B46) |
| `Aux` | Auxílio-Doença / Incapacidade (B31) |
| `Inv` | Invalidez (B32) |
| `Acd` | Acidentário (B91/B92/B94/B43) |
| `Bpi` | BPC Idoso |
| `Bpd` | BPC PcD |
| `Pen` | Pensão por Morte (B21) |
| `Mat` | Salário-Maternidade (B80) |
| `Gen` | Vertical genérica / incerta |
| `Pla` | Planejamento previdenciário (Plan001 reservado) |

### 6.3 Sequencial

Sequencial de 3 dígitos zero-padded (`001`, `002`, ..., `999`), incrementando independentemente por código de vertical.

### 6.4 Exemplos

- Hib001 → primeiro caso de Aposentadoria Híbrida (Hib001)
- Aux014 → décimo quarto Auxílio-Doença
- Gen029 → vigésimo nono caso ainda sem vertical confirmada
- Plan001 → reservado para Plan001 (mãe Dra. Jéssica)

### 6.5 Reclassificação

Se em E2 a vertical for confirmada como diferente da inicial, **manter pseudônimo original** (não renomear). Exemplo: caso entrou como `Gen030` em E1, em E2 vira aposentadoria especial → permanece `Gen030`, mas ganha label `vertical=Especial` no ClickUp.

---

## 7. Cálculo do Confidence Score preliminar (Router-Ethics 11.0)

> ⚠️ **Em E1 o Beto faz score MANUAL com rubrica simplificada.** O score determinístico de 105 nós só roda em E2 com Alessandro. O score preliminar serve apenas para decidir AVANÇA / ORIENTA SEM ENTRAR.

### 7.1 Rubrica simplificada (0–100)

| Critério | Pontos |
|---|---|
| Cidadão tem documento de identidade legível | +25 |
| Vertical hipotética está clara após Bloco B | +15 |
| Idade compatível com vertical (ex: ≥65 para BPC Idoso, ≥62F/65M para B41) | +15 |
| Cidadão menciona já ter CNIS / extrato / docs separados | +20 |
| Cidadão coopera com ritmo do diálogo (não só monossílabos) | +10 |
| Já houve pedido anterior negado (NB anterior conhecido) | +10 |
| Idioma claro, sem barreira de comunicação intransponível | +5 |

### 7.2 Zonas de decisão (Router-Ethics 11.0)

| Zona | Score | Decisão em E1 |
|---|---|---|
| **Verde** | ≥ 70 | AVANÇA E2 normalmente |
| **Amarela** | 40–69 | AVANÇA E2 com flag `[HUMAN-API-OBRIGATORIA]` — Alessandro decide rota humana intensiva |
| **Vermelha** | < 40 | NÃO AVANÇA — orientar sem entrar (§9) |

### 7.3 Caso especial: hipervulnerabilidade extrema

Se Beto identificar sinais de **hipervulnerabilidade extrema** (analfabetismo absoluto, mudez digital, cidadão sem nenhum documento, idade muito avançada com confusão mental aparente), **forçar zona Amarela mínima** independente do score técnico — Alessandro sempre delibera pessoalmente.

### 7.4 Fraudscore preliminar (rubrica)

| Sinal | Fraudscore |
|---|---|
| Documentos com edição digital aparente (cores estranhas, fontes diferentes) | +30 |
| Cidadão se recusa a videochamar para confirmação de identidade | +20 |
| Discrepância grave entre dados informados e documento | +25 |
| História com inconsistências cronológicas grandes | +15 |
| Pressa anormal incompatível com hipervulnerabilidade típica | +10 |

| Zona | Score | Decisão |
|---|---|---|
| **Baixo** | ≤ 30 | OK |
| **Médio** | 31–60 | Avança com flag `[FRAUDSCORE-MEDIO]` — Alessandro confere |
| **Alto** | > 60 | NÃO AVANÇA — escalar imediatamente para Alessandro · possível tentativa de fraude |

---

## 8. Outputs do POP-E1

Quando este POP termina com sucesso (rota AVANÇA E2):

- [ ] Task ClickUp criada em `E2-Deliberação` com pseudônimo
- [ ] Custom Fields preenchidos (vertical hipotética, idade, UF, score Confidence, Fraudscore, flags)
- [ ] Documento de identidade anexado à task (TTL 30 dias)
- [ ] Mapeamento pseudônimo↔nome real registrado em `🔐 Registro de Identidade B2C`
- [ ] Consentimento LGPD básico capturado (texto + horário no chat WhatsApp)
- [ ] Comentário-resumo na task para Alessandro (3-5 linhas)
- [ ] Alessandro notificado via WhatsApp
- [ ] (Se aplicável) Flag `[DIB-URGENTE]` ativada com SLA 24h úteis

Quando rota = ORIENTA SEM ENTRAR:

- [ ] Mensagem de orientação enviada (§9)
- [ ] Task arquivada com status `Orientado-Nao-Entrou` e motivo registrado
- [ ] Nenhuma pasta Drive criada
- [ ] Mapeamento pseudônimo↔nome real **não** registrado (não vira cliente)

---

## 9. Mensagem de orientação para casos que não entram

> *"Cumpadre, agradeço o senhor ter chegado até a gente. Pelo que conversamos, no momento o caso do senhor não é o tipo que a gente acompanha — mas isso não quer dizer que o senhor não tenha direito. Algumas opções pro senhor:*
>
> *1. Defensoria Pública: [link da DPU/DPE local] — atendimento gratuito.*
> *2. CRAS / CREAS do município: pra orientação social.*
> *3. Sindicato dos Trabalhadores Rurais (se for o caso): [link FETAEG ou similar].*
> *4. Se quiser tentar pelo Meu INSS direto: [link tutorial].*
>
> *A gente fica à disposição se mudar a situação. Que Deus te guarde."*

**Importante:** mesmo nos casos que não entram, manter dignidade. Não ghostar, não tratar como "caso descartado". Esse cidadão pode voltar com outro caso, ou indicar família/comunidade.

---

## 10. Anexos — Scripts de mensagem padrão

### 10.1 Mensagem de acolhimento inicial

> *"Oi, [nome se já souber pelo perfil] / cumpadre 🙏 — aqui é o Beto, do Meu Cumpadre. A gente recebeu seu contato. Antes de qualquer coisa, pode ficar tranquilo: aqui a gente conversa devagar, no ritmo que o senhor / a senhora puder.*
>
> *Pra eu entender direito o que tá acontecendo, posso te fazer umas perguntas? Não precisa responder tudo de uma vez."*

### 10.2 Mensagem de consentimento LGPD básica

> *"Cumpadre, antes de continuar, preciso te avisar de uma coisa por causa de uma lei chamada LGPD:*
>
> *• Pra te ajudar, a gente vai precisar guardar alguns documentos seus (RG, CPF, papéis do INSS).*
> *• A gente guarda tudo em cofre digital seguro, com criptografia.*
> *• A senha do seu gov.br **fica com o senhor / a senhora** — em cofre próprio (Bitwarden), e a gente devolve assim que terminar de protocolar.*
> *• O senhor / a senhora pode pedir pra apagar tudo a qualquer momento.*
> *• A gente nunca compartilha seus dados com ninguém sem o senhor saber.*
>
> *Se concordar, me responde: SIM, AUTORIZO. Se tiver dúvida, pode perguntar à vontade."*

### 10.3 Resposta padrão a "quanto tempo demora?"

> *"Olha, cumpadre — a parte que depende da gente leva uns 2 dias úteis depois que tiver todos os papéis em mãos. Mas depois que protocola no INSS, aí é com eles, e isso varia muito — em média 50 dias, mas pode ser mais ou menos. A gente acompanha o caso do começo ao fim e te avisa de cada novidade. O que eu não posso fazer é prometer prazo do INSS, porque isso ninguém controla, nem advogado nenhum."*

### 10.4 Resposta padrão a "vocês são advogado?"

> *"Não, cumpadre — a gente não é escritório de advocacia. A gente é uma empresa de tecnologia que organiza os papéis e protocola no INSS. Se em algum momento o caso precisar de advogado pra ir na justiça, a gente tem parceira certificada — mas só se o senhor / a senhora escolher. A escolha é sempre sua."*

---

## 11. Exceções e escalações

| Situação | Quem decide | Como agir |
|---|---|---|
| Sinais de crise emocional / suicídio | Alessandro | Pausar POP, oferecer CVV 188, notificar Alessandro imediatamente |
| Cidadão menor de idade | Alessandro | Recusar atendimento direto — pedir contato de responsável legal |
| Cidadão sem qualquer documento | Alessandro | Avaliar passarela Cartório (genealogia documental) |
| Cidadão fora do Brasil | Alessandro | Caso atípico — provavelmente fora de escopo MC |
| Suspeita de fraude (Fraudscore > 60) | Alessandro | Não avançar, escalar imediatamente |
| Cidadão pede recomendação de advogado | Beto + script padrão | Aplicar §10.4. NUNCA recomendar nominalmente. |
| Cidadão menciona já estar com advogado | Alessandro | Avaliar conflito ético — pode ser caso de não atender |
| Pseudônimo do mesmo cidadão já existe | Alessandro | Decidir se é continuidade ou caso novo |

---

## 12. Métricas a registrar (Time Spent + Custom Fields)

- Tempo total do POP-E1 (cronômetro start no passo 1, stop no passo 28 ou 9)
- Tempo de resposta inicial (passo 2)
- Vertical hipotética inicial (E1) vs. vertical confirmada em E2 — divergência indica oportunidade de calibração
- Score Confidence preliminar de Beto vs. score determinístico de Alessandro em E2 — divergência grande = ponto de treinamento
- Quantidade de mensagens trocadas até consentimento LGPD
- Flag `[DIB-URGENTE]` ativada? (SIM/NÃO)

---

## 13. Versionamento

| Versão | Data | Mudança |
|---|---|---|
| **1.0** | **2026-04-27** | **Versão inicial. Conformidade com Jornada E0-E7 v1.1, Router-Ethics 11.0, ADR-009a v2.0, MC-SPEC-Drive-Estrutura v1.0. Protocolo DIB Urgency obrigatório. Pseudônimo gerado em E1.** |

### Roadmap

- **v1.1:** após cronometragem A4 com Hib001 — calibrar tempos e rubrica de score preliminar
- **v1.2:** após selagem ADR-007 v3.1-FINAL (parecer Dra. Juliana 19/05) — incorporar implicações contratuais (Φ₁ não cobrado em E1)
- **v2.0:** automação parcial via N8N + Gemini Flash em E1 (Z2+, dependência Igor)

---

**FIM DO POP-E1**
**MC-POP-E1-PrimeiroContato v1.0 — 27/04/2026**
**Hierarquia: Dignidade > Compliance > Viabilidade**
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
[[MC-POP-E2-Triagem-Deliberacao-v1_0-2026-0427]]
[[MC-POP-E3-Coleta-Documental-v1_0-2026-0427]]
[[MC-POP-E3b-QA-Dossie-v1_0-2026-0427]]
[[MC-POP-E4-Protocolo-INSS-v1_0-2026-0427]]
[[MC-POP-E5-Watchdog-Exigencias-v1_0-2026-0427]]
[[MC-POP-E6-Resolucao-v1_0-2026-0427]]
[[MC-POP-Handoff-Juridico-v1_0-2026-0427]]
[[MC-POP-Encerramento-Caso-v1_0-2026-0427]]

∞
