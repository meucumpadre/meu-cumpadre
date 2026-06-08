---
tipo: pop
subtipo: protocolo-operacional-padrao
codigo: MC-POP-E2-Triagem-Deliberacao
versao: 1.0
data-criacao: 2026-04-27
produzido-por: Claude Opus 4.7 (co-fundador intelectual) × Alessandro de Souza Neves (Founder/CEO)
status: SELADO
revisao-pendente: cronometragem A4 em Hib001 → calibração v1.1 · selagem ADR-007 v3.1-FINAL após 19/05/2026
tags: [pop, e2, triagem, deliberacao, router-ethics-11, contrato-phi1, alessandro-executa, decisao-rota]
caminho-vault: 06-OPERACOES/protocolos/MC-POP-E2-Triagem-Deliberacao-v1_0-2026-0427.md
relaciona-com:
  - MC-PROCESSO-Jornada_E0E7_Mestre-v1.1-2026-0427
  - _MC-RouterEthics_11_v1_1-2026-0505-CLevel (supersede RouterEthics_10_MeuCumpadre_Unificado_v3_0-2026-0421)
  - MC-CONTRATO-Phi1-MINUTA-v2.3-2026-0427
  - MC-ADR-007-CampoPrecificacao-v3.2-2026-0427 (PROVISIONAL)
  - MC-POP-E1-PrimeiroContato-v1.0-2026-0427
  - MC-SPEC-Drive-Estrutura-v1.0-2026-0427
  - MC-POP-Bitwarden-Custodia-v1.0-2026-0427
classificacao: TRADE SECRET (LPI arts. 195 XI/XII)
---

# MC-POP-E2 — Triagem e Deliberação

> **Posição na Jornada:** E1 (Primeiro Contato) → **E2 (Triagem/Deliberação)** → E3 (Coleta Documental)
> **Custo médio mapeado:** R$ 1,29 · **Tempo médio:** 5 minutos (deliberação concentrada) + ~30 minutos de comunicação com cidadão (assinatura + 1ª parcela)
> **Critério de saída:** caso APROVADO (entra E3) ou ORIENTADO (não entra)

---

## 1. Cabeçalho

| Campo | Valor |
|---|---|
| **Objetivo (1 frase)** | Aplicar Router-Ethics 11.0 (140 nós + 7 hooks + Hook 0 gov.br, scores Confidence/Complexity/Fraudscore) ao caso vindo de E1, decidir rota (autônoma A / humana intensiva B / handoff jurídico C / não-entrar), confirmar vertical, formalizar Contrato Φ₁ com cobrança da 1ª parcela, e disparar criação da pasta Drive (POP-DRIVE-001) para abrir E3. |
| **Gatilho** | Task ClickUp em status `E2-Deliberação` produzida pelo POP-E1 (com pseudônimo, scores preliminares, documento de identidade anexado, comentário-resumo do Beto). |
| **Operador primário** | Alessandro (Supervisor T3) — em Z3 deliberação é integralmente humana. Em Z2+ Router-Ethics pode pré-classificar zona Verde com revisão humana abreviada. |
| **Suporte operacional** | Beto (Anjo T2) — executa formalização do contrato e POP-DRIVE-001 após decisão. |
| **Tempo estimado deliberação** | 5 min (decisão técnica de Alessandro) |
| **Tempo total E2** | ~30-40 min (incluindo comunicação ao cidadão, envio do contrato via ZapSign — ADR-014, recebimento da 1ª parcela, checagem CadÚnico se aplicável) |
| **Custo estimado** | R$ 1,29 (alocação de tempo · sem custo de IA significativo nesta etapa em Z3) |
| **Status A4** | Estimativa de engenharia — calibrar com Hib001 |

---

## 2. Princípios invioláveis aplicáveis a este POP

1. **D > C > V — cascata absoluta.** Avaliar Bloco D (Dignidade) primeiro. Se algum nó D01–D35 disparar → caso **NÃO avança para C ou V**. Encaminhar para rede de proteção (CRAS, Defensoria, CVV, pastoral) com dignidade.
2. **Firewall OAB.** Em Rota C, MC apresenta opções de advogadas parceiras (Marketplace Ético) — **nunca recomenda nominalmente**. Cidadão escolhe. Provimento OAB 205/2021.
3. **Transparência algorítmica obrigatória.** Score Confidence **NUNCA é exposto como número** ao cidadão. Tradução: "vermelho/amarelo/verde" em linguagem coloquial conforme §6.3.
4. **Φ₁ é independente de resultado.** Cláusula 2.3 do Contrato. Vedação absoluta de success fee.
5. **CadÚnico é premissa de acesso ao preço social.** Não é desconto sobre o Standard. Verificação documental obrigatória (NIS válido + Folha Resumo até 24 meses + renda per capita ≤ ½ SM).
6. **Arrependimento 7 dias.** CDC art. 49 § único. Comunicação obrigatória ao cidadão na assinatura.
7. **Cobertura integral E0–E7 pelo Φ₁.** Cláusula 2.4. Sem cobrança adicional.
8. **Pseudônimo gerado em E1 é imutável.** E2 confirma vertical, mas não renomeia pseudônimo (Gen030 que vira aposentadoria especial **continua Gen030**).

---

## 3. Inputs obrigatórios

- Task ClickUp em `E2-Deliberação` com pseudônimo, vertical hipotética, scores preliminares de E1, documento de identidade do cidadão, comentário-resumo do Beto
- Acesso de Alessandro ao **Grimório Previdenciário v2** (referência para Confidence determinístico) e ao **Router-Ethics 11.0 Spec Unificado v3.0**
- Acesso ao **Marketplace Ético** no ClickUp (lista de advogadas parceiras ativas — atualmente: Dra. Juliana Pereira de Melo / OAB-GO 38.662 em exclusividade B2B até dez/2026)
- Acesso à ZapSign (envio digital do Contrato Φ₁ — ADR-014, substitui Autentique)
- Conta PIX MC operacional (recebimento da 1ª parcela)
- Acesso ao **CadÚnico Consulta Pública** (validação NIS, se Φ₁c aplicável)
- Última versão do `MC-CONTRATO-Phi1-MINUTA-v2.3.md` (PROVISIONAL até 19/05/2026)

---

## 4. Passos numerados

### 4.1 Bloco A — Recepção da deliberação (1 min)

| # | Ação | Tempo |
|---|---|---|
| 1 | Alessandro recebe notificação WhatsApp do Beto: *"Tem um [Pseudônimo] no E2."* | 10s |
| 2 | Abre task ClickUp `E2-Deliberação > [Pseudônimo]` | 30s |
| 3 | Lê comentário-resumo do Beto + scores preliminares + documento de identidade anexado | 30s |

### 4.2 Bloco B — Aplicação do Router-Ethics 11.0 (3 min)

> ⚠️ **Cascata D → C → V é absoluta.** Não pular blocos. Não inverter ordem.

#### 4.2.1 Bloco D — Dignidade (D01–D35)

Verificar se algum nó D foi gatilhado em E1 (sinalizado nos comentários do Beto):

| Nó | Sinal | Ação se positivo |
|---|---|---|
| **D01–D04** | Choro, sofrimento agudo, isolamento extremo | **STOP** — encaminhar a rede de proteção (CVV 188, CRAS) · não avançar |
| **D02** | Fome crônica relatada | Passarela Assistencial (CadÚnico/PBF) **antes** de qualquer ação previdenciária |
| **D03** | Risco de suicídio direto ou indireto | **STOP** — CVV 188 imediato · escalar a Alessandro pessoalmente para chamada por voz com cidadão |
| **D19** | Vergonha incapacitante (cidadão se desculpa demais, esconde dados) | Anjo T2 intensivo · ritmo lento, sem pressão |
| **D24** | Confusão persistente, inconsistência cognitiva | Avaliar capacidade civil · pedir presença de filho/cuidador para próximas conversas |
| **D31** | Indícios de violência doméstica | Encaminhamento Defensoria + Centro de Referência da Mulher · **não tratar como caso previdenciário standalone** |
| **D33** | Fadiga do Anjo (Beto exausto) | Pausar atendimento, redistribuir |
| **D34** | Fadiga do usuário | Reduzir frequência de mensagens, aumentar intervalo |

**Se NENHUM D disparou → seguir para Bloco C.**
**Se ALGUM D disparou → registrar no manifesto, executar encaminhamento, NÃO entrar em pipeline pago.**

#### 4.2.2 Bloco C — Compliance (C36–C70)

| Nó | Sinal | Ação |
|---|---|---|
| **C36** | Cidadão já tem advogado em ação ativa | **STOP** — conflito ético, não atender |
| **C37** | Caso já está judicializado | Avaliar passarela direta para Marketplace Ético (Rota C imediata) |
| **C38** | Cidadão pede diagnóstico médico | Bloqueio absoluto · passarela Telemedicina/Saúde |
| **C41** | Indícios de fraude documental | Fraudscore alto · escalar imediatamente · não atender |
| **C42** | Cidadão associado a esquema CPMI / fraude consignada | Bloqueio · denúncia se aplicável (consultar Dra. Juliana) |
| **C43** | Padrão de pedágio detectado | **AMPUTAÇÃO IMEDIATA** do operador da cadeia · log obrigatório |
| **C48–C50** | Coleta de dado LGPD sem base legal | Reanalizar consentimento de E1 antes de avançar |
| **C51** | Hash criptográfico ausente em peça | Não-conformidade técnica · bloquear avanço |

**Se algum C disparou e for de bloqueio absoluto → registrar e encerrar.**
**Se C36/C37 → considerar Rota C direta.**

#### 4.2.3 Bloco V — Viabilidade (V71–V105)

Computar **Confidence determinístico** com base no Grimório Previdenciário v2 (não a rubrica simplificada de Beto em E1):

| Score | O que avaliar |
|---|---|
| **Confidence (C_conf)** | Probabilidade técnica de deferimento com a base probatória **disponível ou alcançável**. Inputs: enquadramento legal pelo Grimório · CNIS hipotético · vertical confirmada · cenário documental (Cap. 5.4 do Grimório para rural; equivalentes para outras espécies) |
| **Complexity (C_comp)** | Nº de normas aplicáveis · exceções jurisprudenciais · órgãos envolvidos · risco OAB/CFM · necessidade de perícia |
| **Fraudscore (C_fraud)** | Mantém o computado por Beto em E1 ou recalibra se houver sinais novos |

**Nó V71** (protocolo automático): exige Confidence ≥ 85% — só relevante para Z2+ com RPA. Em Z3 todo protocolo é manual humano (POP-E4) → V71 é informativo.
**Nó V74** (completude probatória): se completude estiver crítica, pode forçar Rota B mesmo com Confidence técnico alto.
**Nós V91*, V96*, V100*, V101*, V105*** (entropia rural/emocional): atenção especial em casos rurais com perfil Zilda — falso-negativo sistêmico é o risco principal.

### 4.3 Bloco C-decisão — Rota e modalidade (1 min)

#### 4.3.1 Tabela de decisão

| Confidence | Complexity | Fraudscore | Rota | Significado |
|---|---|---|---|---|
| ≥ 70 (Verde) | Baixa-Média | Baixo (≤30) | **Rota A** | Pipeline autônomo MC E3→E7 · fluxo padrão |
| ≥ 70 (Verde) | Alta | Baixo | **Rota B** | Pipeline MC com Human API intensiva (Alessandro acompanha pessoalmente) |
| 40-69 (Amarela) | qualquer | Baixo | **Rota B** | Triagem aprofundada · busca ativa de provas para reclassificar para Verde |
| < 40 (Vermelha) | qualquer | Baixo | **NÃO-ENTRA** | Orientação dignificante + encaminhamento (§6.3) |
| qualquer | Alta + judicialização provável | Baixo | **Rota C** | Apresentar Marketplace Ético — cidadão escolhe |
| qualquer | qualquer | Médio (31-60) | **Rota B com supervisão de Fraudscore** | Alessandro confere docs pessoalmente |
| qualquer | qualquer | Alto (>60) | **STOP** | Bloqueio · escalar · possível tentativa de fraude |
| Já em ação judicial (C37) | — | — | **Rota C imediata** | Marketplace Ético direto, sem passar por E3-E4 do MC |

#### 4.3.2 Modalidade Φ₁ Standard vs. Φ₁c CadÚnico

| Critério | Φ₁ Standard (R$ 2.200) | Φ₁c CadÚnico (R$ 1.500) |
|---|---|---|
| **Elegibilidade** | Padrão | NIS válido + Folha Resumo CadÚnico vigente (≤24 meses) + renda per capita ≤ ½ SM (R$ 757,50 em 2026) |
| **Validação documental** | Não exigida | Beto solicita Folha Resumo CadÚnico ao cidadão antes da assinatura |
| **Parcelamento** | Até 3× sem juros (PIX/boleto/cartão) | Até 5× sem juros (boleto/cartão) |
| **Marcos de cobrança** | 1ª: assinatura (E2) · 2ª: entrega do dossiê (E3) · 3ª: protocolo INSS (E4) | Mesmo esquema de marcos (1ª/2ª/3ª/4ª/5ª pode estender até E5) |

**Decisão:** se Beto identificou em E1 sinais de hipervulnerabilidade econômica → solicitar Folha Resumo CadÚnico antes da assinatura. Sem Folha → Φ₁ Standard.

### 4.4 Bloco D — Comunicação ao cidadão e formalização (~25 min)

> ⚠️ Este bloco é executado pelo Beto após decisão de Alessandro. Beto recebe instrução clara da rota + modalidade.

| # | Ação | Responsável | Tempo |
|---|---|---|---|
| 4 | Alessandro registra decisão na task ClickUp: rota, modalidade, justificativa breve | Alessandro | 1min |
| 5 | Alessandro notifica Beto via WhatsApp: *"[Pseudônimo] Rota [A/B/C] · [Standard/CadÚnico]. Pode prosseguir."* | Alessandro | 30s |
| 6 | Beto envia ao cidadão pelo WhatsApp a **Mensagem de Aprovação** (§6.1) traduzindo a Rota em linguagem coloquial | Beto | 3min |
| 7 | Se Φ₁c (CadÚnico): Beto solicita Folha Resumo CadÚnico antes do contrato. Se docs não confirmarem elegibilidade → Φ₁ Standard | Beto | 5min |
| 8 | Beto envia o **Contrato Φ₁ v2.3** via ZapSign (ADR-014) (preenchido com pseudônimo, valor, parcelas) | Beto | 3min |
| 9 | Beto envia o **Anexo III** (script de Áudio de Consentimento LGPD) e pede gravação | Beto | 2min |
| 10 | Beto recebe contrato assinado + áudio LGPD via ZapSign/WhatsApp | Beto | (variável) |
| 11 | Beto registra hash do contrato assinado + audio no manifesto futuro | Beto | 1min |
| 12 | Beto envia chave PIX para a **1ª parcela** (R$ 733,33 Standard ou conforme Φ₁c) | Beto | 1min |
| 13 | Beto confirma recebimento da 1ª parcela no extrato MC | Beto | 1min |
| 14 | Beto registra recebimento na task ClickUp: campo `parcelas-pagas = 1/3` (ou conforme modalidade) | Beto | 1min |

### 4.5 Bloco E — Acionamento POP-DRIVE-001 (10 min)

| # | Ação | Responsável |
|---|---|---|
| 15 | Beto executa **POP-DRIVE-001** integralmente (criação da pasta Drive + manifesto + módulos por vertical) | Beto |
| 16 | Beto preenche o cabeçalho YAML do `00_manifesto.md` com todos os dados decididos em E2 | Beto |
| 17 | Beto **NÃO preenche Seção 3 (Tese)** — Alessandro fará em até 24h | Beto |
| 18 | Task ClickUp avança para `E3-Coleta` | Beto |
| 19 | Alessandro adiciona Seção 3 do manifesto (tese principal + subsidiária + riscos) em até 24h | Alessandro |

### 4.6 Bloco F — Casos Rota C (apresentação Marketplace Ético — variante)

> Este bloco substitui Bloco D quando a Rota é C.

| # | Ação | Responsável |
|---|---|---|
| 4c | Alessandro identifica Rota C e justifica no ClickUp | Alessandro |
| 5c | Beto envia ao cidadão **Mensagem Marketplace Ético** (§6.4) — apresenta opções de advogadas parceiras ATIVAS (atualmente: Dra. Juliana Pereira de Melo) **sem recomendação nominal** | Beto |
| 6c | Cidadão escolhe **livremente** — ou aceita advogada do MC ou pede recomendação independente (Defensoria Pública, OAB indicação, etc.) | Cidadão |
| 7c | Se cidadão escolhe advogada do Marketplace Ético: MC ainda formaliza Contrato Φ₁ (porque vai dar suporte em S2 com dossiê documental até o TTA — POP-Handoff) | Beto |
| 8c | Se cidadão escolhe advogado externo ao Marketplace: MC orienta dignificantemente e arquiva — NÃO entra na cadeia | Beto |
| 9c | Em caso de aceite com Marketplace: prosseguir com Bloco D (assinatura + 1ª parcela + criação pasta Drive) |  |

---

## 5. Outputs do POP-E2

### 5.1 Caso APROVADO (Rotas A/B/C aceita)

- [ ] Task ClickUp em status `E3-Coleta`
- [ ] Pasta Drive criada (POP-DRIVE-001 executado)
- [ ] `00_manifesto.md` na raiz com cabeçalho YAML completo + checklist de docs
- [ ] Seção 3 do manifesto (Tese) preenchida por Alessandro em até 24h
- [ ] Contrato Φ₁ v2.3 assinado via ZapSign — ADR-014 (hash registrado)
- [ ] Áudio de Consentimento LGPD recebido (Anexo III)
- [ ] 1ª parcela recebida via PIX (R$ 733,33 Standard ou conforme Φ₁c)
- [ ] `parcelas-pagas = 1/3` (ou 1/5) no ClickUp
- [ ] Decisão de rota + modalidade + scores Router-Ethics 11.0 registrados em comentário no ClickUp
- [ ] Estado de custódia = S1
- [ ] (Se Rota C) Cidadão informou escolha da advogada · `99_compartilhado-juliana/` será ativada em E3-E5 conforme necessidade

### 5.2 Caso ORIENTADO (Confidence vermelho ou outros bloqueios)

- [ ] Task ClickUp em status `Orientado-Nao-Entrou` com motivo registrado
- [ ] **Nenhuma pasta Drive criada**
- [ ] **Nenhum contrato assinado**
- [ ] **Nenhuma cobrança realizada**
- [ ] Mensagem de orientação dignificante enviada ao cidadão (§6.3)
- [ ] Mapeamento pseudônimo↔nome real **mantido** apenas no Folder ClickUp `🔐 Registro de Identidade B2C` por 30 dias para audit trail · depois apagado conforme política LGPD

### 5.3 Caso BLOQUEADO (Fraudscore alto, D-positivo crítico)

- [ ] Task ClickUp em status `Bloqueado` com motivo
- [ ] Escalação a Alessandro registrada
- [ ] Se D-positivo (suicídio, violência, crise) → encaminhamento documentado
- [ ] Se C-positivo (fraude) → audit log com hash · consulta a Dra. Juliana se aplicável

---

## 6. Anexos — Scripts de mensagem

### 6.1 Mensagem de Aprovação (Rota A — Verde)

> *"Cumpadre, boa notícia 🌱 — analisei seu caso direitinho. A gente tem base boa pra trabalhar. Não é 100% garantido (porque a decisão final é do INSS, e isso ninguém promete), mas a gente vai com toda força.*
>
> *Próximos passos:*
>
> *1️⃣ Vou te mandar o contrato pra assinar digitalmente — no celular mesmo, pelo ZapSign (chega direto no seu WhatsApp). É rápido.*
> *2️⃣ Vou te mandar um áudio pra senhor / a senhora gravar uma resposta confirmando que autoriza a gente cuidar dos seus papéis (é a lei LGPD, cumpadre — proteção sua).*
> *3️⃣ Depois disso, a 1ª parcela de R$ 733,33 [ou valor Φ₁c] via PIX.*
> *4️⃣ E aí a gente começa a juntar os papéis.*
>
> *Tá combinado?"*

### 6.2 Mensagem de Aprovação (Rota B — Amarela ou Verde com complexidade)

> *"Cumpadre, analisei seu caso. A gente tem chance boa, mas seu caso pede um pouco mais de cuidado — vou acompanhar pessoalmente. Vai ser tranquilo, só leva um pouquinho mais de tempo na fase de juntar os papéis.*
>
> *[continua com mesmos próximos passos da §6.1]"*

### 6.3 Mensagem de Orientação (Confidence vermelho — não-entrou)

> *"Cumpadre, agradeço o senhor / a senhora ter chegado até a gente. Olhei o caso com cuidado. Hoje, com os papéis e a situação que o senhor tem, a regra do INSS deixa pouca brecha pra gente entrar com pedido seguro. Eu não vou prometer o que não posso entregar — isso seria mentira.*
>
> *Mas isso não quer dizer que o senhor / a senhora não tem direito. Algumas opções:*
>
> *1. **Defensoria Pública**: [link DPU/DPE local] — análise gratuita por advogado público.*
> *2. **CRAS**: pra ver outros benefícios sociais que possam caber.*
> *3. **Sindicato dos Trabalhadores Rurais**: [link local] (se for o caso).*
> *4. **Cartório**: pra reunir certidões e melhorar a base de provas — aí depois a gente conversa de novo.*
>
> *Se o senhor / a senhora reunir mais documentos, fica à vontade pra voltar. A gente fica de portas abertas.*
>
> *Que Deus te guarde."*

### 6.4 Mensagem Marketplace Ético (Rota C)

> *"Cumpadre, analisei seu caso. Pelo que vi, [motivo: caso já tá no judiciário / complexidade alta / outro motivo factual], esse caso pede um(a) advogado(a). A gente do Meu Cumpadre não é escritório de advocacia — a gente organiza os papéis e dá suporte técnico.*
>
> *O que eu posso fazer pelo senhor / pela senhora:*
>
> *• A gente tem parceria com advogada certificada — Dra. Juliana Pereira de Melo (OAB-GO 38.662). Se o senhor / a senhora quiser, posso apresentar.*
> *• Se preferir advogado de própria escolha, fique à vontade — a Defensoria Pública é gratuita; a OAB do estado tem lista oficial.*
> *• A escolha é 100% sua. Não tem pressão da minha parte.*
>
> *Me diz como prefere prosseguir, cumpadre."*

> ⚠️ **Inviolável Provimento OAB 205/2021:** MC apresenta opção, **nunca recomenda**, **nunca insiste**, **nunca envia link único**. Cidadão precisa ter alternativas claras.

---

## 7. Métricas a registrar

- Tempo total da deliberação (Bloco B + Bloco C-decisão) — Alessandro
- Tempo total da formalização (Bloco D) — Beto
- Confidence determinístico calculado por Alessandro (E2) vs. Confidence preliminar de Beto (E1) — calibração
- Vertical confirmada em E2 vs. vertical hipotética de E1 — divergência indica oportunidade de treinamento
- Modalidade contratada: Standard ou CadÚnico
- Rota decidida: A / B / C / NÃO-ENTRA / BLOQUEADO
- Tempo entre `decisao registrada` e `1ª parcela recebida` — sinal de fricção
- Quantidade de casos em zona Verde / Amarela / Vermelha / Bloqueado por mês

---

## 8. Riscos e mitigações

| Risco | Probabilidade Z3 | Mitigação |
|---|---|---|
| Alessandro não consegue deliberar em <24h por gargalo de tempo | ALTA | Limite de 5 casos/dia em E2 · acima disso priorizar `[DIB-URGENTE]` · Z2 distribui para Anjos T2 sêniores treinados |
| Beto envia contrato com pseudônimo errado ou valor errado | MÉDIA | Template ZapSign pré-preenchido · Alessandro confere antes de Beto enviar |
| Cidadão não retorna após assinatura (não paga 1ª parcela) | ALTA | Notificação D+3 amistosa · D+7 segunda tentativa · D+14 arquivamento sem cobrança · NÃO entrar em E3 sem 1ª parcela paga |
| CadÚnico (Φ₁c) sem documentação válida | MÉDIA | Beto **deve** receber Folha Resumo antes de enviar contrato · sem Folha → Standard |
| Confidence vermelho mas cidadão insiste em entrar | MÉDIA | Manter posição · Φ₁ não pode ser cobrado de quem o sistema bloqueou tecnicamente |
| Rota C cidadão recusa advogada do Marketplace | BAIXA | Aceitar · orientar para Defensoria/OAB/escolha própria · arquivar com dignidade |

---

## 9. Versionamento

| Versão | Data | Mudança |
|---|---|---|
| **1.0** | **2026-04-27** | **Versão inicial. Conformidade com Router-Ethics 11.0 v3.0, Contrato Φ₁ v2.3, ADR-007 v3.x PROVISIONAL, Jornada E0-E7 v1.1. Cascata D→C→V absoluta. 3 scores independentes. Decisão de rota A/B/C/NÃO-ENTRA/BLOQUEADO. Φ₁ Standard vs. Φ₁c CadÚnico. Marketplace Ético sem recomendação nominal.** |

### Roadmap

- **v1.1:** após cronometragem A4 com Hib001 — calibrar tempos
- **v1.2:** após selagem ADR-007 v3.1-FINAL (parecer Dra. Juliana 19/05/2026) — incorporar implicações contratuais finais
- **v2.0:** Z2+ — pré-classificação automática Router-Ethics 11.0 com revisão humana abreviada para zona Verde

---

**FIM DO POP-E2**
**MC-POP-E2-Triagem-Deliberacao v1.0 — 27/04/2026**
**Hierarquia: Dignidade > Compliance > Viabilidade · Cascata absoluta**
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
[[MC-POP-E3-Coleta-Documental-v1_0-2026-0427]]
[[MC-POP-E3b-QA-Dossie-v1_0-2026-0427]]
[[MC-POP-E4-Protocolo-INSS-v1_0-2026-0427]]
[[MC-POP-E5-Watchdog-Exigencias-v1_0-2026-0427]]
[[MC-POP-E6-Resolucao-v1_0-2026-0427]]
[[MC-POP-Handoff-Juridico-v1_0-2026-0427]]
[[MC-POP-Encerramento-Caso-v1_0-2026-0427]]

∞
