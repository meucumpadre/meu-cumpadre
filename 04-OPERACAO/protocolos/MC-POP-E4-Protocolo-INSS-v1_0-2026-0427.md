---
tipo: pop
subtipo: protocolo-operacional-padrao
codigo: MC-POP-E4-Protocolo-INSS
versao: 1.0
data-criacao: 2026-04-27
produzido-por: Claude Opus 4.7 (co-fundador intelectual) × Alessandro de Souza Neves (Founder/CEO)
status: SELADO
revisao-pendente: cronometragem A4 em Hib001 → calibração v1.1 · automação Playwright em Z2+
tags: [pop, e4, protocolo-inss, der, sprint-48h, transicao-s1-s2, alessandro-executa-z3, playwright-z2]
caminho-vault: 06-OPERACOES/protocolos/MC-POP-E4-Protocolo-INSS-v1_0-2026-0427.md
relaciona-com:
  - MC-PROCESSO-Jornada_E0E7_Mestre-v1.1-2026-0427
  - MC-POP-Bitwarden-Custodia-v1.0-2026-0427
  - MC-POP-E3-Coleta-Documental-v1.0-2026-0427
  - MC-ADR-009b-TresEstados-Custodia-Dossie-v1.0-2026-0417 (transição S1→S2)
  - MC-CONTRATO-Phi1-MINUTA-v2.3-2026-0427 (3ª parcela neste marco)
classificacao: TRADE SECRET (LPI arts. 195 XI/XII)
---

# MC-POP-E4 — Protocolo no INSS

> **Posição na Jornada:** E3b (QA Dossiê) → **E4 (Protocolo INSS)** → E5 (Watchdog)
> **Custo médio mapeado:** R$ 9,52 (manual Z3) · R$ 3,50 (bot Playwright Z2+)
> **Tempo médio:** 67 min (manual Z3) · 10 min (bot Z2+)
> **Marco crítico:** **Sprint 48h fecha aqui (E0→E4 com docs completos)** · DER capturada · transição S1→S2 do dossiê · 3ª parcela do Φ₁ · transição para E5

---

## 1. Cabeçalho

| Campo | Valor |
|---|---|
| **Objetivo (1 frase)** | Submeter o dossiê Proof-First validado ao INSS via Meu INSS, capturar a DER (Data de Entrada do Requerimento) e o número de protocolo, registrar hash do que foi submetido para audit trail, transicionar custódia do dossiê de S1 para S2, cobrar a 3ª parcela do Φ₁ e disparar E5 (Watchdog). |
| **Gatilho** | Task ClickUp em status `E4-Protocolo` produzida pelo POP-E3b (QA Dossiê) com (a) dossiê v1 montado e validado, (b) hash SHA-256 calculado, (c) Confidence ≥ 70 (zona Verde) ou justificativa explícita, (d) 2ª parcela paga, (e) `99_compartilhado-juliana/` com revisão prévia da Dra. Juliana se for Rota C. |
| **Operador primário Z3** | Alessandro (T3) — em Z3 todo protocolo é manual humano para garantir qualidade |
| **Operador primário Z2+** | Bot Playwright — humano supervisiona, valida DER capturada, intervém se exigência de captcha humano |
| **Suporte** | Beto — comunicação com cidadão durante e após o protocolo |
| **Tempo estimado Z3** | 67 minutos efetivos (login + montagem requerimento + anexos + submissão + captura DER) |
| **Tempo estimado Z2+** | 10 minutos efetivos (bot executa, humano valida) |
| **SLA padrão** | 48h úteis após E3b concluído (Sprint 48h cumprido se docs completos desde E0) |
| **SLA `[DIB-URGENTE]`** | 24h úteis após E3b concluído (Protocolo Urgência DIB do POP-E1 §5) |
| **Custo estimado** | R$ 9,52 manual / R$ 3,50 bot |
| **Status A4** | Estimativa de engenharia — calibrar com Hib001 |

---

## 2. Princípios invioláveis aplicáveis a este POP

1. **Sprint 48h é PÓS-E3b, NÃO da entrada do cliente.** Os 48h são SLA interno MC para protocolar **assim que dossiê está pronto**. NUNCA prometer 48h da entrada como concessão.
2. **Pré-validação obrigatória.** NÃO protocolar com docs faltando · NÃO protocolar com hash inconsistente · NÃO protocolar com 2ª parcela em aberto · NÃO protocolar antes da Seção 3 do manifesto preenchida por Alessandro.
3. **DER capturada imediatamente.** O protocolo só está concluído quando DER está em mãos · sem DER, status no ClickUp permanece `E4-Em-Protocolo`.
4. **Hash do submetido = hash do dossiê v1 + hash de cada anexo individual.** Audit trail vincula o que foi submetido com o que está custodiado em S2.
5. **Bitwarden PROTOCOLO B obrigatório.** Acesso ao gov.br do cidadão segue protocolo de custódia · `historico-acessos` populado · logout ao fim.
6. **Transição S1 → S2 é evento atômico.** Quando dossiê é submetido + DER capturada → dossiê passa de S1 (intermediário, MC custodia artefatos isolados) para S2 (consolidado, cidadão é titular, MC custodia até D+7 da entrega).
7. **Cidadão é informado em tempo real.** Comunicação ao cidadão durante e após o protocolo é **obrigatória** · transparência é diferencial competitivo.
8. **Espécie de benefício correta.** Erro de espécie (B41 vs B41 rural vs B91 vs B92) gera retrabalho gigante · validar duplamente antes de submeter.

---

## 3. Inputs obrigatórios (PRÉ-VALIDAÇÃO)

> ⚠️ Este bloco é **INVIOLÁVEL**. Se qualquer item estiver ausente → NÃO PROTOCOLAR · voltar para E3 ou E3b.

- [ ] Task ClickUp em status `E4-Protocolo`
- [ ] Dossiê v1 montado em `03_dossie/dossie-v1.pdf` (PDF assinado ICP-Brasil com carimbo RFC 3161)
- [ ] Hash SHA-256 do dossiê em `03_dossie/dossie-v1-hash.txt`
- [ ] Manifesto JSON em `03_dossie/dossie-v1-manifest.json` (inventário com hashes individuais)
- [ ] Confidence ≥ 70 (Verde) registrado no manifesto · OU justificativa explícita por Alessandro para protocolar com Amarela
- [ ] **2ª parcela do Φ₁ paga** (campo `parcelas-pagas ≥ 2/3` no ClickUp)
- [ ] Seção 3 do manifesto (Tese) preenchida por Alessandro
- [ ] Bitwarden item `gov-br-[Pseudônimo]` válido com senha atualizada
- [ ] Espécie de benefício INSS confirmada (não "vertical" — espécie técnica: B41, B41 rural, B31, B91, B46, B87, B21 etc.)
- [ ] Para Rota C: dossiê revisado pela Dra. Juliana (registro em `99_compartilhado-juliana/`)
- [ ] Para B31/B91/B42/B43 com flag `[DIB-URGENTE]`: data do evento médico documentada (atestado, alta) — DIB será DIB-incapacidade, não DER

---

## 4. Passos numerados — Z3 (manual humano)

### 4.1 Bloco A — Pré-validação final (10 min)

| # | Ação | Tempo |
|---|---|---|
| 1 | Alessandro abre task ClickUp `E4-Protocolo > [Pseudônimo]` + pasta Drive + manifesto | 1min |
| 2 | Confere checklist de §3 (todos os 11 itens) | 5min |
| 3 | Se algum item ausente → **STOP** · voltar para E3/E3b · registrar motivo | (variável) |
| 4 | Confirma espécie de benefício correta cruzando com Tese (Seção 3 do manifesto) | 2min |
| 5 | Avisa Beto via WhatsApp: *"Vou protocolar [Pseudônimo] agora. Deixa o cidadão avisado."* | 1min |
| 6 | Beto envia ao cidadão **Mensagem Pré-Protocolo** (§7.1) | 1min |

### 4.2 Bloco B — Login no gov.br (5 min — PROTOCOLO B Bitwarden)

| # | Ação | Tempo |
|---|---|---|
| 7 | Alessandro abre Bitwarden Desktop · localiza item `gov-br-[Pseudônimo]` | 1min |
| 8 | Acessa **Meu INSS** (https://meu.inss.gov.br) | 30s |
| 9 | Cola CPF · cola senha do Bitwarden (campo direto, nunca colar em texto antes) | 1min |
| 10 | Se 2FA: contatar cidadão via WhatsApp para receber código em tempo real (Beto faz a ponte) | 2min |
| 11 | Login confirmado · gravar hora exata em variável (será parte do hash de protocolo) | 30s |

### 4.3 Bloco C — Iniciar requerimento (15 min)

| # | Ação | Tempo |
|---|---|---|
| 12 | Em Meu INSS, clicar **"Novo Pedido"** ou **"Agendamentos / Solicitações"** | 1min |
| 13 | Buscar pela espécie correta (lista de espécies — usar nome técnico: ex. "Aposentadoria por Idade Híbrida (Tema 1007 STJ)" ou "Aposentadoria por Tempo de Contribuição") | 2min |
| 14 | Confirmar dados pessoais carregados pelo CNIS (nome, CPF, endereço, contato) | 2min |
| 15 | Atualizar contato (telefone/e-mail) — **e-mail aqui PODE ser do MC** (`requerimentoinss1@meucumpadre.com.br`) para receber comunicações INSS · **NÃO alterar e-mail do gov.br do cidadão** (fica intocado) | 3min |
| 16 | Preencher campos específicos da espécie (data de início, períodos, declarações) conforme Tese | 5min |
| 17 | Para `[DIB-URGENTE]`: marcar **DIB = data do evento médico** (não DER) — Art. 60 §1º Lei 8.213/91 | 2min |

### 4.4 Bloco D — Anexar peças (15 min)

| # | Ação | Tempo |
|---|---|---|
| 18 | No campo "Anexar documentos", subir o **dossiê v1.pdf principal** (Padrão A: `MC-[Pseudônimo]-Dossie-v1-YYYYMMDD.pdf`) | 3min |
| 19 | Anexar peças individuais conforme Meu INSS exigir (alguns campos pedem anexos separados além do dossiê consolidado) | 8min |
| 20 | Para casos com aditivos (raros em E4 inicial — mais comum em E5): anexar `dossie-v1-aditivo-A.pdf` se aplicável | 2min |
| 21 | Conferir lista final de anexos antes de submeter | 2min |

### 4.5 Bloco E — Submissão e captura DER (10 min)

| # | Ação | Tempo |
|---|---|---|
| 22 | Revisar dados na tela de "Confirmação" | 2min |
| 23 | **CLICAR EM "Protocolar Pedido"** | 30s |
| 24 | Aguardar tela de sucesso · capturar **número de protocolo (DER)** | 1min |
| 25 | **Print da tela** com DER + timestamp · salvar em `04_inss/04a_protocolo/protocolo-DER-YYYYMMDD.pdf` | 2min |
| 26 | Baixar **comprovante oficial** que o Meu INSS gera (PDF) · salvar em `04_inss/04a_protocolo/comprovante-protocolo-YYYYMMDD.pdf` | 2min |
| 27 | Calcular hash SHA-256 do comprovante · registrar em `04_inss/04a_protocolo/hashes.txt` | 1min |
| 28 | Logout do gov.br | 30s |
| 29 | Atualizar `historico-acessos` no Bitwarden: `YYYY-MM-DD HH:MM \| Alessandro \| E4-protocolo-DER-[NUMERO]` | 1min |

### 4.6 Bloco F — Atualização do manifesto e transição S1→S2 (5 min)

| # | Ação | Tempo |
|---|---|---|
| 30 | Atualizar manifesto Seção 5 — adicionar entrada: `YYYY-MM-DD — E3b → E4: Dossiê v1 protocolado · DER [NUMERO] · Hash dossiê [HASH] · Senha gov.br retornada ao Bitwarden` | 2min |
| 31 | Atualizar campos YAML do manifesto: `etapa-atual = E5` · `estado-custodia = S2` · `der = [NUMERO]` · `data-protocolo = YYYY-MM-DD` | 2min |
| 32 | **Transição S1 → S2 documentada:** Seção 9 do manifesto registra `S2 ATIVO desde YYYY-MM-DD · TTL apagamento S1: D+7 da entrega final do dossiê ao cidadão (em E6/E7)` | 1min |

### 4.7 Bloco G — Cobrança 3ª parcela e comunicação (10 min)

| # | Ação | Responsável | Tempo |
|---|---|---|---|
| 33 | Beto recebe sinal de Alessandro: *"Protocolado, DER [NUMERO]. Pode comunicar."* | Beto | 30s |
| 34 | Beto envia ao cidadão **Mensagem Pós-Protocolo** (§7.2) com o número de protocolo | Beto | 3min |
| 35 | Beto envia chave PIX para a **3ª parcela** (R$ 733,33 Standard ou conforme Φ₁c) | Beto | 1min |
| 36 | Beto confirma recebimento da 3ª parcela no extrato MC | Beto | (variável) |
| 37 | Beto atualiza ClickUp: `parcelas-pagas = 3/3` (ou conforme modalidade) | Beto | 1min |
| 38 | Beto envia ao cidadão **Mensagem de Início do Watchdog (E5)** (§7.3) | Beto | 2min |
| 39 | Mover task ClickUp para `E5-Acompanhamento` | Beto | 30s |

---

## 5. Variante Z2+ — Bot Playwright (futuro)

> ⚠️ Esta variante **NÃO está ativa em Z3**. Documentação preparatória.

### 5.1 Diferenças vs. Z3

- Bot executa Blocos B, C, D, E (login + requerimento + anexos + submissão) automaticamente
- Humano (Alessandro ou Beto sênior) supervisiona em monitor secundário
- Bot pausa automaticamente em:
  - Captcha humano (CRECAPTCHA) → humano resolve
  - 2FA → humano contata cidadão
  - Erro inesperado → humano avalia
- Bot captura DER + comprovante automaticamente → upload Drive + hash automatizado
- Tempo total: ~10 min (vs. 67 min manual)

### 5.2 Pré-condições para ativação Z2+

- [ ] Backend Igor com integração Playwright + Cloud Storage
- [ ] Audit log Tier 4 ativo (BigQuery)
- [ ] Validação humana obrigatória sobre DER capturada antes de transição S1→S2
- [ ] Parecer Dra. Juliana sobre uso de RPA em sistemas governamentais
- [ ] Validação de Conformidade INSS-Digital (sem violação de ToS do Meu INSS)

---

## 6. Outputs do POP-E4

Quando este POP termina (transição E4 → E5):

- [ ] DER (número de protocolo) capturada e salva em `04_inss/04a_protocolo/`
- [ ] Comprovante de protocolo (PDF oficial INSS) salvo em `04_inss/04a_protocolo/`
- [ ] Hash SHA-256 do comprovante registrado
- [ ] Manifesto atualizado: `etapa-atual = E5`, `estado-custodia = S2`, `der = [NUMERO]`, `data-protocolo = YYYY-MM-DD`
- [ ] Bitwarden: `historico-acessos` atualizado · senha permanece custodiada (necessária para E5 Watchdog)
- [ ] Cidadão notificado com número de protocolo (Mensagem Pós-Protocolo)
- [ ] **3ª parcela do Φ₁ recebida** (`parcelas-pagas = 3/3` Standard ou ≥3/5 CadÚnico)
- [ ] Mensagem de início do Watchdog enviada ao cidadão
- [ ] Task ClickUp em `E5-Acompanhamento`
- [ ] Sprint 48h interno cumprido (se docs completos desde E0) — registrar tempo total E0→E4 para métrica

---

## 7. Anexos — Scripts de mensagem

### 7.1 Mensagem Pré-Protocolo (Beto envia antes de Alessandro submeter)

> *"Cumpadre 🌿, deixei tudo arrumado e o seu caso vai pro INSS hoje. Tudo conforme combinamos. Em algumas horas eu volto aqui com o número de protocolo (a famosa DER) e o comprovante oficial. Vai dar tudo certo na nossa parte — o que vier depois é com o INSS, mas a gente acompanha o caminho inteirinho. Tô aqui."*

### 7.2 Mensagem Pós-Protocolo (com DER capturada)

> *"Cumpadre, **PROTOCOLADO!** ✅*
>
> *Número de protocolo (DER): **[NUMERO]***
> *Data: **[DATA HORA]***
>
> *Vou te mandar o comprovante em PDF aqui pelo WhatsApp e também já tá guardado no nosso cofre digital.*
>
> *Agora começa a fase de espera. O INSS vai analisar — em média leva uns 50 dias, mas pode ser mais ou menos dependendo da espécie. Pode aparecer alguma exigência (papel a mais que eles peçam) — se aparecer, eu te aviso na hora e a gente resolve junto.*
>
> *Eu vou ficar de olho TODA semana no Meu INSS do senhor / da senhora. Qualquer movimento, eu apareço aqui te contando. Pode confiar."*

### 7.3 Mensagem de Início do Watchdog (E5)

> *"Cumpadre, agora é a fase de monitoramento. Aqui é meu trabalho: ficar de olho no INSS e te manter informado.*
>
> *O que pode acontecer:*
>
> *✅ **Concessão direta**: o INSS aprova e o benefício começa.*
> *📝 **Exigência**: o INSS pede algum papel a mais. Se acontecer, eu te aviso, e a gente prepara um aditivo do dossiê pra responder. SEM CUSTO ADICIONAL — já tá tudo coberto no Φ₁.*
> *❌ **Indeferimento**: se acontecer, a gente conversa sobre próximos passos (recurso administrativo, ação judicial via parceira advogada — se o senhor / a senhora quiser).*
>
> *Toda sexta-feira eu mando um update aqui, mesmo que não tenha novidade. Assim o senhor / a senhora não fica no escuro.*
>
> *E lembrando: a gente cobre tudo até o fim, sem cobrar a mais."*

### 7.4 Mensagem se exigência humana surge no protocolo (captcha falhar, sistema fora do ar)

> *"Cumpadre, tô tentando protocolar agora e o sistema do INSS tá com uma instabilidade. Vou tentar de novo em [tempo estimado]. Te aviso assim que conseguir. Sem preocupação — não tem prazo perdido aqui, isso é normal do sistema."*

---

## 8. Métricas a registrar

- Tempo total efetivo do POP-E4 (cronômetro)
- Tempo wall-clock entre `E3b concluído` e `DER capturada` (sinaliza cumprimento do Sprint 48h)
- Espécie de benefício protocolada
- DER (número de protocolo) — para audit trail
- Hash SHA-256 do dossiê submetido
- Quantidade de tentativas até protocolar com sucesso (instabilidade INSS é comum)
- Houve flag `[DIB-URGENTE]`? Se sim, SLA 24h cumprido?
- Tempo entre `protocolo` e `recebimento da 3ª parcela`
- Houve necessidade de aditivo no momento do protocolo (raríssimo)?

---

## 9. Riscos e mitigações

| Risco | Probabilidade | Mitigação |
|---|---|---|
| Sistema INSS instável / fora do ar | ALTA (BEPS reporta DataPrev downtime) | §7.4 mensagem ao cidadão · tentar a cada 1h por até 4h · escalar para dia seguinte se persistir |
| Espécie de benefício escolhida errada | MÉDIA | Pré-validação dupla (Bloco A) · após protocolo, mudança de espécie é retrabalho gigante |
| Captcha humano não resolve | MÉDIA | Operador atento na supervisão · resolver manualmente · se persistir, escalar |
| 2FA do gov.br do cidadão fora de mão | MÉDIA | Coordenação prévia: cidadão deve estar disponível para receber código por SMS no momento combinado |
| DER não captura (tela engana) | BAIXA | Conferir 2× antes de logout · se não tiver DER, **NÃO transicionar para E5** |
| 3ª parcela não paga após protocolo | MÉDIA | Cidadão sempre paga após ver protocolo (psicologicamente) · §7.3 mensagem positiva |
| `[DIB-URGENTE]` mas sistema fora do ar (B31/B91 dentro de 30 dias) | MÉDIA | Documentar tentativas · usar Central 135 como rota alternativa · atestados protocolados via gov.br pode preservar DIB se sistema falhou |
| Anexo do dossiê excede limite de upload | BAIXA-MÉDIA | Pré-validar tamanho em E3b · dividir em múltiplos PDFs se necessário (cada um com hash próprio) |

---

## 10. Versionamento

| Versão | Data | Mudança |
|---|---|---|
| **1.0** | **2026-04-27** | **Versão inicial. Conformidade Jornada E0-E7 v1.1, ADR-009b (transição S1→S2 documentada), POP-Bitwarden (PROTOCOLO B), Contrato Φ₁ v2.3 (3ª parcela neste marco). Variante Z3 manual + variante Z2+ Playwright. Pré-validação de 11 itens inviolável. Sprint 48h é PÓS-E3b. DIB Urgency mantém SLA 24h. Captura de DER imediata.** |

### Roadmap

- **v1.1:** após cronometragem A4 com Hib001 — calibrar tempos
- **v1.2:** ativação variante Z2+ Playwright (dependência Igor) · audit log Tier 4 · parecer Dra. Juliana sobre RPA
- **v2.0:** integração com APIs INSS oficiais (se disponíveis no horizonte LAI Lote 2/3)

---

**FIM DO POP-E4**
**MC-POP-E4-Protocolo-INSS v1.0 — 27/04/2026**
**Hierarquia: Dignidade > Compliance > Viabilidade**
**Sprint 48h é PÓS-E3b — NUNCA prazo de concessão**
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
[[MC-POP-E5-Watchdog-Exigencias-v1_0-2026-0427]]
[[MC-POP-E6-Resolucao-v1_0-2026-0427]]
[[MC-POP-Handoff-Juridico-v1_0-2026-0427]]
[[MC-POP-Encerramento-Caso-v1_0-2026-0427]]

∞
