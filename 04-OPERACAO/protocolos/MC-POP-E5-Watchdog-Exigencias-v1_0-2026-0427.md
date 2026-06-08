---
tipo: pop
subtipo: protocolo-operacional-padrao
codigo: MC-POP-E5-Watchdog-Exigencias
versao: 1.0
data-criacao: 2026-04-27
produzido-por: Claude Opus 4.7 (co-fundador intelectual) × Alessandro de Souza Neves (Founder/CEO)
status: SELADO
revisao-pendente: cronometragem A4 em Hib001 → calibração v1.1 · automação Watchdog em Z2+
tags: [pop, e5, watchdog, exigencias, monitoramento, aditivos, transparencia-semanal, beto-executa]
caminho-vault: 06-OPERACOES/protocolos/MC-POP-E5-Watchdog-Exigencias-v1_0-2026-0427.md
relaciona-com:
  - MC-PROCESSO-Jornada_E0E7_Mestre-v1.1-2026-0427
  - MC-POP-Bitwarden-Custodia-v1.0-2026-0427
  - MC-POP-E4-Protocolo-INSS-v1.0-2026-0427
  - MC-POP-E3-Coleta-Documental-v1.0-2026-0427 (mini-coleta para responder exigência)
  - MC-SPEC-Drive-Estrutura-v1.0-2026-0427 (aditivos versionados)
classificacao: TRADE SECRET (LPI arts. 195 XI/XII)
---

# MC-POP-E5 — Watchdog e Resposta a Exigências

> **Posição na Jornada:** E4 (Protocolo INSS) → **E5 (Watchdog)** → E6 (Resolução)
> **Custo médio mapeado:** R$ 23,25 (caso com exigência) · R$ 2,15 (caso sem exigência)
> **Tempo wall-clock médio:** **52,67 dias** (BEPS Jan/2026 — média geral) · variável por espécie (B80 30d até B87 154,56d)
> **Tempo cumulativo de operador:** ~2-8h dependendo de exigências
> **Estado de custódia:** **S2 ATIVO** durante toda a etapa
> **Característica única:** **etapa mais longa em wall-clock time da jornada** · onde casos morrem por silêncio se não houver comunicação ativa

---

## 1. Cabeçalho

| Campo | Valor |
|---|---|
| **Objetivo (1 frase)** | Monitorar ativamente o status do requerimento no Meu INSS após o protocolo, detectar exigências e respondê-las dentro do prazo legal, comunicar proativamente o cidadão (mesmo na ausência de novidades — diferencial competitivo), gerar aditivos versionados quando necessário, e detectar a decisão final (concessão, indeferimento, alternativa) para acionar E6. |
| **Gatilho** | Task ClickUp em status `E5-Acompanhamento` produzida pelo POP-E4 (com DER capturada, comprovante salvo, 3ª parcela paga, S2 ativo). |
| **Operador primário** | Beto (Anjo T2) — checagens semanais + comunicação proativa |
| **Suporte IA Z2+** | Watchdog automatizado (LangGraph + Playwright + N8N) — varredura diária do Meu INSS |
| **Supervisor para exigências** | Alessandro (T3) — analisa exigência, decide estratégia de resposta |
| **Suporte estendido (Rota C)** | Dra. Juliana via `99_compartilhado-juliana/` — revisa aditivo se necessário |
| **Tempo cumulativo do operador** | ~2h (caso sem exigência) a ~8h (caso com 2 exigências) |
| **Tempo wall-clock médio** | 52,67 dias geral (BEPS Jan/2026) · ver Tabela §3 por espécie |
| **Custo estimado** | R$ 2,15 caso simples · R$ 23,25 caso com exigência |
| **Status A4** | Estimativa de engenharia — calibrar com Hib001 |

---

## 2. Princípios invioláveis aplicáveis a este POP

### 2.1 Princípio fundacional: TRANSPARÊNCIA SEMANAL OBRIGATÓRIA

**Comunicação proativa toda sexta-feira, MESMO sem novidade.**

> *"O cidadão hipervulnerável que protocolou e ficou sem notícia por 30 dias acha que foi enganado. A comunicação semanal é o único antídoto contra o medo da invisibilidade."*

**Regra:** Beto envia mensagem ao cidadão **TODA SEXTA-FEIRA** com status atualizado, mesmo que o status seja "sem movimento".

### 2.2 Demais princípios

1. **D > C > V** — Watchdog detectou movimentação processual durante inadimplência (raro)? Comunicação ao cidadão é **obrigatória** (CDC art. 6º III) e **apartada da cobrança**.
2. **Correção 48h** — não prometer prazo de resposta INSS · transparência sobre médias estatísticas (§3) · comunicação clara sobre o que está fora do controle do MC.
3. **Proof-First** — toda exigência detectada gera arquivo no Drive (`04_inss/04b_exigencias/`) com hash · resposta gera aditivo versionado (`dossie-v1-aditivo-A.pdf`) com novo hash.
4. **Bitwarden PROTOCOLO B** — toda checagem do Meu INSS exige login via Bitwarden · `historico-acessos` populado.
5. **Custódia S2 mantida** — dossiê v1 + aditivos vivem em S2 durante toda E5 · descarte só em D+7 da entrega final em E6/E7.
6. **Exigência tem prazo legal** — geralmente **30 dias** para responder · após esse prazo o requerimento pode ser indeferido por descumprimento (Art. 33 DR-INSS) · NUNCA perder esse prazo.
7. **Aditivos versionados** (Q4 do MC-SPEC-Drive) — `dossie-v1-aditivo-A.pdf` para 1ª exigência, `-B.pdf` para 2ª, e assim por diante · `dossie-v2.pdf` só em refazimento integral raríssimo.

---

## 3. Tabela TMC por espécie (referência crítica para comunicação)

> Fonte: BEPS Jan/2026 — INSS · usar como ground truth na comunicação ao cidadão · NUNCA prometer prazo, mas **explicar a média estatística** quando o cidadão pergunta.

| Espécie | TMC médio (dias) | Observação |
|---|---|---|
| **B80 — Salário-Maternidade** | 30,00 | Mais rápido (sem perícia) |
| **B41 — Aposentadoria por Idade** | 45,59 | Padrão urbano · híbrido pode levar mais |
| **B31 — Auxílio-Doença** | 48,70 | ATESTMED pode acelerar para 7-15 dias |
| **B46 — Aposentadoria Especial** | 58,30 | PPP/LTCAT exigem análise técnica |
| **B42 — Aposentadoria por Invalidez** | 67,26 | Perícia médica obrigatória |
| **B87 — BPC PcD** | **154,56** | Avaliação biopsicossocial · mais demorada |
| **Média geral** | **52,67** | Referência conservadora a usar com cidadão |

**Bancário pós-DDB→DIP:** ~24 dias adicionais (entre concessão pelo INSS e primeiro pagamento na conta).

---

## 4. Inputs obrigatórios

- Task ClickUp em status `E5-Acompanhamento`
- DER do protocolo registrada no manifesto
- Comprovante de protocolo salvo em `04_inss/04a_protocolo/`
- Bitwarden item `gov-br-[Pseudônimo]` ativo
- Manifesto em S2 ATIVO
- Calendário de check-ins semanais configurado (sexta-feira)

---

## 5. Passos numerados — Operação contínua

### 5.1 Bloco A — Setup do Watchdog (10 min · uma vez)

| # | Ação | Tempo |
|---|---|---|
| 1 | Beto abre task ClickUp `E5-Acompanhamento > [Pseudônimo]` · cria 4 sub-tasks recorrentes: "Check Meu INSS — Semana 1", "Semana 2", "Semana 3", "Semana 4" | 3min |
| 2 | Configura cadência: **checagem do Meu INSS toda terça-feira** + **comunicação ao cidadão toda sexta-feira** | 2min |
| 3 | Atualiza manifesto: data início E5, TMC esperado conforme espécie (§3), data esperada de decisão = DER + TMC médio | 3min |
| 4 | Envia ao cidadão a primeira **Mensagem de Sexta** (§8.1) confirmando o início do Watchdog | 2min |

### 5.2 Bloco B — Checagem semanal do Meu INSS (15 min · semanal · toda terça)

| # | Ação | Tempo |
|---|---|---|
| 5 | Beto abre Bitwarden · executa **PROTOCOLO B do POP-Bitwarden** | 5min |
| 6 | Acessa Meu INSS · vai em **"Consultar Pedidos"** ou **"Andamentos"** | 2min |
| 7 | Localiza pedido pela DER · abre detalhes | 1min |
| 8 | Tira **print da tela** com timeline atualizada | 1min |
| 9 | Salva em `04_inss/04c_andamentos/andamento-YYYYMMDD.pdf` (Padrão B) | 1min |
| 10 | Calcula hash · registra em `hashes.txt` | 1min |
| 11 | Atualiza manifesto Seção 5: `YYYY-MM-DD — Watchdog: [status atual / sem movimento]` | 2min |
| 12 | Logout · atualiza `historico-acessos` no Bitwarden | 1min |
| 13 | Se mudança detectada → ramificar: §5.3 (exigência), §5.4 (decisão final), §5.5 (outro) | 1min |

### 5.3 Bloco C — Tratamento de exigência (90-180 min · quando detectada)

#### 5.3.1 Detecção e análise (20 min)

| # | Ação | Responsável | Tempo |
|---|---|---|---|
| 14 | Beto detecta exigência na checagem (§5.2) — visível como "Pendência de Cumprimento" no Meu INSS | Beto | 2min |
| 15 | Beto baixa **carta de exigência** do Meu INSS (PDF oficial) | Beto | 2min |
| 16 | Salva em `04_inss/04b_exigencias/exigencia-A-YYYYMMDD.pdf` | Beto | 1min |
| 17 | Calcula hash · registra | Beto | 1min |
| 18 | Beto **identifica prazo legal** indicado na carta (geralmente 30 dias do recebimento) | Beto | 2min |
| 19 | Beto **escala IMEDIATAMENTE** Alessandro: *"Cumpadre, exigência em [Pseudônimo]. Prazo até DD/MM. Já te marquei."* | Beto | 1min |
| 20 | Alessandro lê a carta · identifica natureza da exigência (documental, perícia, esclarecimento) | Alessandro | 5min |
| 21 | Alessandro decide estratégia de resposta · registra na Seção 6 do manifesto | Alessandro | 6min |

#### 5.3.2 Comunicação ao cidadão (10 min)

| # | Ação | Responsável | Tempo |
|---|---|---|---|
| 22 | Beto envia ao cidadão **Mensagem de Exigência** (§8.4) explicando em linguagem coloquial o que o INSS pediu e o que será feito | Beto | 5min |
| 23 | Garante ao cidadão: **SEM CUSTO ADICIONAL** (Cláusula 2.4 do Contrato Φ₁ — cobertura integral E0-E7) | Beto | 1min |
| 24 | Pede docs ao cidadão se a exigência for documental (pode ser que precise de papel novo) — usa POP-E3 §5.2 (solicitação progressiva) | Beto | 4min |

#### 5.3.3 Geração de aditivo (60-120 min dependendo de complexidade)

| # | Ação | Responsável | Tempo |
|---|---|---|---|
| 25 | Beto coleta docs adicionais (mini-E3) se aplicável | Beto | (variável) |
| 26 | Alessandro monta resposta técnica em PDF estruturado | Alessandro | 30-60min |
| 27 | Salva em `03_dossie/dossie-v1-aditivo-A.pdf` (versionamento estrito · A primeira exigência, B segunda, etc.) | Alessandro | 2min |
| 28 | Calcula hash do aditivo · registra em `hashes.txt` da pasta dossiê | Alessandro | 1min |
| 29 | Atualiza manifest JSON do dossiê com aditivo: `{"aditivo-A": {"hash": "...", "data": "...", "motivo": "exigencia-X"}}` | Alessandro | 2min |
| 30 | Para Rota C: copia aditivo em `99_compartilhado-juliana/` para revisão prévia da Dra. Juliana | Alessandro | 1min |
| 31 | Aguarda revisão Dra. Juliana se Rota C (24-72h conforme acordo) | — | (variável) |

#### 5.3.4 Submissão da resposta (30 min)

| # | Ação | Responsável | Tempo |
|---|---|---|---|
| 32 | Alessandro acessa Meu INSS via Bitwarden PROTOCOLO B | Alessandro | 5min |
| 33 | Localiza pedido · clica em **"Cumprir Exigência"** | Alessandro | 2min |
| 34 | Anexa o `dossie-v1-aditivo-A.pdf` + docs novos se houver | Alessandro | 10min |
| 35 | Submete resposta · captura **comprovante de cumprimento** | Alessandro | 3min |
| 36 | Salva comprovante em `04_inss/04b_exigencias/cumprimento-exigencia-A-YYYYMMDD.pdf` | Alessandro | 2min |
| 37 | Calcula hash · registra · logout · atualiza `historico-acessos` | Alessandro | 3min |
| 38 | Atualiza manifesto Seção 5: `YYYY-MM-DD — Exigência A respondida · Aditivo A submetido · Hash [HASH]` | Alessandro | 2min |
| 39 | Beto comunica ao cidadão: *"Cumpadre, respondemos a exigência. Agora aguardamos análise."* (§8.5) | Beto | 3min |

### 5.4 Bloco D — Detecção de decisão final (15 min · evento único)

| # | Ação | Responsável | Tempo |
|---|---|---|---|
| 40 | Beto detecta na checagem semanal: status mudou para **"Concedido"** OU **"Indeferido"** OU **"Concessão Parcial"** | Beto | 2min |
| 41 | Baixa **carta de decisão** (PDF oficial) | Beto | 2min |
| 42 | Salva em `04_inss/04d_decisao/decisao-YYYYMMDD.pdf` | Beto | 1min |
| 43 | Calcula hash · registra | Beto | 1min |
| 44 | **Escala Alessandro** imediatamente | Beto | 1min |
| 45 | Alessandro analisa decisão · identifica:<br>- **Concessão**: valor, DDB, DIP, retroativo<br>- **Indeferimento**: motivo, base legal citada<br>- **Concessão parcial**: o que foi e o que não foi concedido | Alessandro | 5min |
| 46 | Atualiza manifesto Seção 5 e cabeçalho YAML: `etapa-atual = E6 · status-decisao = [CONCEDIDO/INDEFERIDO/PARCIAL]` | Alessandro | 3min |
| 47 | Move task ClickUp para `E6-Resolução` | Alessandro | 30s |
| 48 | Notifica Beto: *"Decisão saiu para [Pseudônimo]: [resultado]. Acione E6."* | Alessandro | 30s |

### 5.5 Bloco E — Comunicação proativa semanal (5 min · toda sexta-feira)

> **OBRIGATÓRIA mesmo sem novidade.** Princípio fundacional §2.1.

| Status na semana | Mensagem (escolher template) |
|---|---|
| Sem movimento | §8.1 Mensagem de Sexta padrão |
| Movimento positivo (avançou de fase no INSS) | §8.2 Mensagem de Avanço |
| Exigência detectada na semana | §8.4 Mensagem de Exigência (em vez da §8.1) |
| Resposta a exigência submetida na semana | §8.5 Mensagem de Resposta Submetida |
| Decisão final saiu | §8.3 Mensagem de Decisão (transição direta para E6) |

### 5.6 Bloco F — Casos especiais

#### 5.6.1 Silêncio prolongado (>100 dias sem movimento)

> Sinaliza problema processual no INSS · é hora de ação ativa.

**Passos:**
1. Verificar se TMC esperado da espécie já foi excedido (§3)
2. Se sim, escalar a Alessandro
3. Considerar:
   - **Reclamação no Ouvidoria do INSS** (Central 135 ou meu.inss.gov.br/ouvidoria)
   - **Tutela específica via Defensoria Pública** se a omissão for abusiva
   - **Mandado de Segurança via Marketplace Ético** (Rota C tardia) em casos de mora administrativa flagrante (>180d)
4. Comunicar cidadão com transparência sobre os passos sendo dados

#### 5.6.2 Exigência impossível de cumprir

> Ex: INSS pede documento que não existe (perícia em pessoa que faleceu, registro de empresa que fechou em 1985 sem sucessores).

**Passos:**
1. Documentar a impossibilidade (declaração formal, certidões negativas)
2. Submeter resposta argumentando impossibilidade + prova de tentativa
3. Se INSS insistir e indeferir → Rota C (recurso administrativo CRPS ou ação judicial)

#### 5.6.3 Movimento processual durante inadimplência (3ª parcela em aberto, raro)

> Por contrato (Cláusula 2.4) e ADR-009a v2.0, movimentação processual é comunicada ao cidadão **independente do status de cobrança** (CDC art. 6º III).

**Passos:**
1. Beto envia comunicação **única e específica** sobre o andamento, **separada** de qualquer cobrança
2. Tom: informativo e neutro
3. NÃO usar a comunicação como gatilho de cobrança no mesmo texto
4. Custódia S2 e Bitwarden permanecem ATIVOS até D+60 (POP-Bitwarden PROTOCOLO E)

---

## 6. Outputs do POP-E5

Quando este POP termina (transição E5 → E6 — decisão final detectada):

- [ ] Decisão final do INSS capturada (PDF oficial) em `04_inss/04d_decisao/`
- [ ] Hash calculado · registrado
- [ ] Manifesto: `etapa-atual = E6` · `status-decisao = [CONCEDIDO/INDEFERIDO/PARCIAL]` · timeline completa em Seção 5
- [ ] Andamentos semanais arquivados em `04_inss/04c_andamentos/`
- [ ] Exigências (se houver) e respostas (aditivos versionados) arquivados em `04_inss/04b_exigencias/` e `03_dossie/`
- [ ] Cidadão notificado da decisão (Mensagem §8.3)
- [ ] Bitwarden: `historico-acessos` populado com todas as checagens semanais
- [ ] S2 ATIVO mantido (descarte ainda não — só em D+7 da entrega final em E6/E7)
- [ ] Task ClickUp em `E6-Resolução`

---

## 7. Métricas a registrar

- Quantidade de checagens semanais executadas
- Tempo wall-clock real entre `protocolo` e `decisão final` (comparar com TMC esperado §3)
- Houve exigência? Quantas?
- Tempo entre `detecção da exigência` e `submissão da resposta`
- Quantos aditivos foram gerados?
- Quantas comunicações de sexta foram enviadas? (deveria ser 1 por semana)
- Status final: CONCEDIDO / INDEFERIDO / PARCIAL
- Caso houve indeferimento: motivo INSS · houve recurso (Rota C)?

---

## 8. Anexos — Scripts de mensagem

### 8.1 Mensagem de Sexta padrão (sem novidade)

> *"Cumpadre 🌿, passando aqui só pra dizer que olhei seu caso ontem e segue tudo em análise no INSS. **Sem novidade nesta semana** — isso é normal pra esta fase, principalmente nos primeiros [tempo conforme TMC]. A média pra [espécie] é de uns [N dias] desde o protocolo.*
>
> *Tô de olho. Qualquer movimento aparece aqui. Bom fim de semana 🙏"*

### 8.2 Mensagem de Avanço (movimento positivo)

> *"Cumpadre 🌱, **boa notícia**: seu caso avançou de fase no INSS. Agora tá em [nova fase]. Isso significa que [explicação coloquial]. Tô de olho — qualquer outra novidade volto aqui."*

### 8.3 Mensagem de Decisão (concessão)

> *"Cumpadre 🎉🙏 **DEFERIDO!** Saiu hoje a decisão do INSS — seu benefício foi concedido!*
>
> *Detalhes:*
>
> *• Tipo: [espécie]*
> *• Valor mensal: R$ [valor]*
> *• Início do pagamento (DIP): [data]*
> *• Retroativo: R$ [valor] [se aplicável]*
>
> *O bancário leva uns 24 dias até cair na conta — é o tempo do INSS mandar pro banco. Mas TÁ DEFERIDO. Vou te mandar a carta oficial em PDF agora.*
>
> *Combinamos uma conversa pra próximos passos? Tem coisas importantes sobre o que fazer com o benefício, troca de senha do gov.br, e como proteger o senhor / a senhora de golpes."*

### 8.4 Mensagem de Exigência (INSS pediu papel a mais)

> *"Cumpadre, novidade do INSS: eles pediram **um papel a mais** pra completar a análise. Tá tudo bem — isso acontece em muitos casos, e a gente tem [N dias] pra responder. Já vou começar a preparar a resposta.*
>
> *O que eles pediram: [explicação coloquial do que é, sem jargão jurídico].*
>
> *[Se exigência documental:]*
> *Pra responder, vou precisar do senhor / da senhora me mandar [doc específico]. Pode tirar foto e mandar quando puder.*
>
> *[Se exigência interna do MC:]*
> *A resposta é técnica e fica por minha conta. Te mantenho informado.*
>
> *⚠️ IMPORTANTE: isso **NÃO custa nada a mais**. Já tá tudo coberto no que combinamos lá no contrato."*

### 8.5 Mensagem de Resposta Submetida

> *"Cumpadre, **respondi a exigência** ✅ — entreguei tudo que o INSS pediu hoje, [DD/MM]. Agora a gente espera eles voltarem a analisar. Pode levar uns 15-45 dias até a próxima movimentação. Tô de olho."*

### 8.6 Mensagem de Decisão (indeferimento)

> *"Cumpadre, peguei a decisão do INSS hoje. **Foi indeferido** — eles não aprovaram dessa vez.*
>
> *Motivo que eles colocaram: [tradução coloquial do motivo legal].*
>
> *Mas isso **não é o fim** — tem caminhos:*
>
> *1. **Recurso administrativo (CRPS)** — a gente reconsidera o caso e pede revisão dentro do INSS mesmo. Eu posso preparar.*
> *2. **Ação judicial** — se for o caso, posso te apresentar nossa parceira advogada (Dra. Juliana). É escolha sua.*
>
> *Vamos conversar agora ou prefere amanhã? Sem pressa, mas o prazo pra recurso é de 30 dias da carta."*

### 8.7 Mensagem de Concessão Parcial

> *"Cumpadre, saiu a decisão. **Foi concedido em parte**: o INSS aprovou [X] mas não [Y].*
>
> *O que foi concedido:*
> *[detalhes da parte boa]*
>
> *O que faltou:*
> *[parte negada]*
>
> *Próximos passos:*
> *Podemos pedir revisão sobre a parte que não foi concedida. A parte concedida já tá garantida — não perde mexendo na outra.*
>
> *Vamos conversar essa semana?"*

---

## 9. Riscos e mitigações

| Risco | Probabilidade | Mitigação |
|---|---|---|
| Beto esquece a checagem semanal | MÉDIA | Sub-tasks recorrentes no ClickUp · alarme calendário · audit mensal de Time Spent |
| Beto esquece a Mensagem de Sexta | ALTA | Mesma mitigação acima · automação no Z2+ via N8N |
| Exigência detectada com atraso (perto do prazo) | MÉDIA | Checagem semanal vs. quinzenal mata o risco · Z2+ checagem diária |
| Exigência respondida com aditivo de baixa qualidade | MÉDIA | Alessandro sempre supervisiona · Rota C: Dra. Juliana revisa |
| Cidadão fica ansioso e culpa o MC pela demora | ALTA | §2.1 transparência semanal · §8 mensagens calibradas com expectativa real |
| Cidadão pede para "acelerar" o INSS | ALTA | Mensagem clara: o MC não controla isso · oferecer Defensoria/Mandado de Segurança como rota se mora flagrante |
| Bitwarden 2FA do cidadão muda durante E5 | BAIXA | Coordenar com cidadão antes de cada checagem que exige 2FA |
| Decisão final passa despercebida | BAIXA | Checagem semanal sempre confere status · Z2+ alerta automático |
| Inadimplência da 3ª parcela durante E5 (raro mas possível se 3ª parcela foi parcelada em CadÚnico Φ₁c) | MÉDIA | Protocolo D+5/D+20/D+60 (POP-Bitwarden PROTOCOLO E) · comunicação processual sempre ativa (§5.6.3) |

---

## 10. Versionamento

| Versão | Data | Mudança |
|---|---|---|
| **1.0** | **2026-04-27** | **Versão inicial. Conformidade Jornada E0-E7 v1.1, ADR-009b (S2 ativo), POP-Bitwarden (PROTOCOLO B + E), MC-SPEC-Drive-Estrutura v1.0 (aditivos versionados). TRANSPARÊNCIA SEMANAL como princípio fundacional. Tabela TMC BEPS Jan/2026 como referência ground truth. 6 sub-protocolos especiais. Cobertura E0-E7 sem cobrança adicional reafirmada (Cláusula 2.4 Contrato Φ₁ v2.3).** |

### Roadmap

- **v1.1:** após cronometragem A4 com Hib001 — calibrar tempos · validar TMC empírico vs. BEPS
- **v1.2:** automação Watchdog Z2+ (N8N + Playwright + LangGraph) — checagem diária + alertas automáticos
- **v1.3:** integração com APIs do INSS se disponíveis (LAI Lote 2/3)
- **v2.0:** Z2+ — Watchdog 24/7 + dashboards de status + alertas push para cidadão

---

**FIM DO POP-E5**
**MC-POP-E5-Watchdog-Exigencias v1.0 — 27/04/2026**
**Hierarquia: Dignidade > Compliance > Viabilidade**
**Princípio fundacional: TRANSPARÊNCIA SEMANAL OBRIGATÓRIA**
**Cobertura E0-E7 sem cobrança adicional · Cláusula 2.4 Φ₁**
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
[[MC-POP-E6-Resolucao-v1_0-2026-0427]]
[[MC-POP-Handoff-Juridico-v1_0-2026-0427]]
[[MC-POP-Encerramento-Caso-v1_0-2026-0427]]

∞
