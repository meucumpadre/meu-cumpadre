---
título: MC-GOVBR-ArvoreDecisao-APIHumana
versão: v1_1
data: 2026-05-09
status: RASCUNHO — REVISÃO PÓS-ERRATA-001
autor: Claude Code × Alessandro Neves
fonte: E1 + E4.2 (Matriz v1.2) + E5 v1.1 + ERRATA-001 (09/05/2026)
público-alvo: Beto (operador API Humana T1/T2) + Alessandro (supervisão)
supersede: E8 v1.0
---

# MC-GOVBR — Árvore de Decisão Sniper — API Humana Backend (v1.1)

> Documento E8 v1.1 — revisão da v1.0 à luz da **ERRATA-001 (09/05/2026)** que reposiciona o KBA Previdenciário como ferramenta diagnóstica de Bronze validado, **não como rota de elevação para Prata**.
>
> **Mudanças v1.0 → v1.1:** §0, §1 (R1-R5), Cenários C01-C05, §4 (renumeração de rotas), §5 (P01 e P04 do FAQ), §8 (métricas) — todas corrigidas pela ERRATA-001. Demais cenários e seções permanecem intactos.

---

## 0. Como usar este documento *(corrigido v1.1)*

1. **Este documento é um mapa de rotas.** Cada cliente que chega no MC cai em **um cenário** da Seção 2 (são 18 cenários — C01 a C18).
2. **Comece sempre pelo Hook 0** (Seção 1) — 5 perguntas de WhatsApp que classificam o cliente em 2-5 minutos.
3. **Cada cenário tem rota principal + tempo + script pronto + fallback.** Se a rota principal falhar, siga o fallback. Se o fallback falhar, **escalone para Alessandro**.
4. **Ética acima de velocidade.** Você nunca opera a conta gov.br DO cliente — você guia o cliente a operar a própria conta. **A prioridade é sempre elevar o nível da conta via biometria facial. Todas as outras rotas são fallback. O KBA (KBA diagnóstico) só entra quando tudo falhou.** Tese MC: **mesmas ferramentas dos despachantes, propósito oposto** (Inversão Cósmica).
5. **Na dúvida, regra de ouro:** *"Se a Dona Zilda soubesse exatamente o que estou fazendo, ela ficaria tranquila?"* Se sim, prossiga. Se não, pare e chame o Alessandro.

<!-- Corrigido por ERRATA-001 v1.0 (09/05/2026) -->

---

## 1. Hook 0 — Triagem de nível gov.br *(R1-R5 revisadas v1.1)*

Antes de qualquer rota técnica, rode o Hook 0. **Tempo total: 2-5 min.**

### As 5 perguntas (versão WhatsApp Dona Zilda — INALTERADAS)

> **Importante:** começa SEMPRE com o nome do cliente. Tom de neto/sobrinho que respeita o tempo do cliente. Zero jargão. Espere a resposta de uma antes de mandar a próxima.

#### P1 — Vínculo contributivo
> *"Dona [nome] / Seu [nome], aqui é o [Beto] do Meu Cumpadre. Vou te fazer umas perguntinhas rápidas pra eu entender o melhor caminho pro nosso atendimento, tá bom? A primeira: a senhora/o senhor já trabalhou registrado alguma vez na vida? De carteira assinada, mesmo que tenha sido faz tempo?"*

#### P2 — CTPS física
> *"E aquela carteirinha de trabalho azul, das antigas — a senhora/o senhor ainda tem ela em casa? Se tiver, pede um favor: tira foto das páginas que tem carimbo de empresa e me manda aqui no zap, pode ser?"*

#### P3 — CNIS / papel do INSS
> *"E papel do INSS, a senhora/o senhor tem em casa? Aquele extrato com a história das contribuições, ou alguma carta que o INSS já mandou? Se tiver qualquer papelzinho, manda foto também."*

#### P4 — Memória do último vínculo
> *"A senhora/o senhor lembra mais ou menos quando foi que parou de trabalhar registrado? Não precisa ser certinho, ano mais ou menos serve. E lembra qual era a empresa?"*

#### P5 — Benefício atual
> *"E hoje, a senhora/o senhor recebe alguma coisa? Aposentadoria, BPC do LOAS, Bolsa Família, alguma pensão?"*

### As 5 regras de classificação — REVISADAS v1.1 (ERRATA-001)

> Aplicar **na ordem**. A primeira regra que casar manda — não testar as próximas.

| Regra | Condição | Saída | Ir para |
|---|---|---|---|
| **R1 REVISADA** | P1 = Sim **E** (P2 = Sim **OU** P3 = Sim **OU** P4 = respondeu) | **Rota 1 — Biometria facial com inteligência contributiva preparada para o dossiê Φ₁.** KBA diagnóstico guardado como reserva se tudo falhar. | Cenários C01–C04 |
| **R2 REVISADA** | P1 = Sim **E** P2/P3/P4 todos negativos | **Rota 1 — Biometria facial sem preparação documental.** Se falhar, Rota 2 (banco). KBA diagnóstico como último recurso para obter dados. | Cenário C02 (variante) |
| **R3 REVISADA** | P1 = Não **E** P5 = BPC puro / BF puro / Nenhum | **Rota 1 — Biometria facial se tiver biometria TSE/DENATRAN.** Senão Rota 2 (banco). Senão Rota 3 (presencial). KBA impossível para esse perfil. | Cenários C06, C07 |
| **R4 (INALTERADA)** | P2 = Sim (qualquer cenário) | **CTPS é backup probatório transversal** — guardar fotos no caso MC mesmo se a rota for outra. Vale para Lei 9.784/1999, recurso CRPS, futura DER. | Anotação no caso |
| **R5 (INALTERADA)** | P5 = Aposentadoria | Cliente provavelmente já teve Prata no passado. Antes de eleger rota nova, **investigar T1.14** (senha esquecida + sem biometria) — pode bastar recuperar credencial. | Cenário C14 |

<!-- Corrigido por ERRATA-001 v1.0 (09/05/2026) -->

---

## 2. Cenários de decisão

> **Atualização v1.1:** Cenários C01-C05 (Bloco A) tiveram rota principal alterada de "Rota 0 KBA" para **"Rota 1 — Biometria facial"**. A inteligência contributiva continua sendo coletada no Hook 0, mas agora alimenta o **dossiê Φ₁** do MC (não o KBA Dataprev). KBA diagnóstico é reserva.
>
> **Cenários C06-C18:** sem alteração.

### CENÁRIO C01: Idoso urbano bancarizado, tem CTPS em casa, conta Bronze *(corrigido v1.1)*

**Perfil:** Aposentado urbano (60-75 anos), conta na Caixa/BB, CTPS azul guardada, conta gov.br Bronze.
**Hook 0 result:** P1=Sim, P2=Sim, P3=Não/Sim, P4=respondeu, P5=Aposentadoria/Nenhum → R1 (revisada)
**Nível atual:** Bronze
**Jornada MC:** Φ₁ ou Φ₄

**Rota principal:** **Rota 1 — Biometria facial** (cidadão urbano bancarizado provavelmente tem biometria TSE coletada)
- Passo 1: Cliente envia foto da CTPS pelas páginas com carimbo. Beto recebe e organiza linha do tempo **para o dossiê Φ₁ do MC** (não para o KBA).
- Passo 2: Confirmar com o cliente se já votou em urna com biometria recente (TSE) ou se tem CNH.
- Passo 3: Beto envia o **vídeo MC institucional** sobre biometria facial pelo WhatsApp e pede ao cliente assistir antes da tentativa.
- Passo 4: Cliente abre app gov.br → Aumentar Nível → Reconhecimento Facial → executa o liveness sob orientação Beto.
- Tempo estimado: 15-25 min (incluindo vídeo + tentativa).
- Executor: Beto remoto + cidadão síncrono (videochamada opcional).

**Script WhatsApp (copiar e colar):**
> *"Dona [nome], pelas suas respostas, o caminho mais rápido pra senhora é fazer a foto no app gov.br. Vou te mandar um vídeo curtinho de 2 minutos que ensina como fazer (com luz boa, sem óculos, virando a cabeça devagar). Quando assistir, me avisa que a gente faz junto pelo zap. Sua carteirinha que a senhora me mandou eu já tô guardando aqui pro INSS, vai servir pra outras coisas depois."*

**Travas prováveis:** T1.01 (não reconhece rosto), T1.04 (movimento), T1.05 (luz).
**Se travar:** ajustar luz / câmera traseira; aguardar 24h se T1.02; migrar para fallback.

**Fallback:** Rota 2 — Internet Banking (Caixa preferencial).

**Se fallback também falhar:** Rota 3 — balcão INSS / agência bancária. **KBA diagnóstico** acionado em paralelo se MC precisa de metadados do CNIS para iniciar triagem enquanto aguarda presencial.

**Se fallback do fallback também falhar:** Escalonar Alessandro com nota: *"C01 — Rota 1/2 falharam. Cliente bancarizado. Marcar presencial e KBA diagnóstico para iniciar triagem Φ₁."*

<!-- Corrigido por ERRATA-001 v1.0 (09/05/2026) -->

---

### CENÁRIO C02: Idoso urbano bancarizado, sem CTPS, lembra do último emprego, conta Bronze *(corrigido v1.1)*

**Perfil:** Mesma faixa do C01, mas perdeu a CTPS. Lembra de "uns 15 anos" trabalhando na Empresa Y.
**Hook 0 result:** P1=Sim, P2=Não, P3=Não, P4=respondeu, P5=qualquer → R2 (revisada)
**Nível atual:** Bronze
**Jornada MC:** Φ₁ ou Φ₄

**Rota principal:** **Rota 1 — Biometria facial** (sem preparação documental, mas com vídeo MC)
- Passo 1: Beto manda vídeo MC e orientação direta sobre liveness.
- Passo 2: Cliente executa biometria.
- Tempo estimado: 12-20 min.

**Script WhatsApp:**
> *"Seu [nome], pelas respostas, vamos pelo caminho mais rápido — a foto no app gov.br. Não precisa de carteirinha pra isso. Vou te mandar um vídeo de 2 minutos ensinando. Depois a gente faz junto."*

**Travas prováveis:** T1.01, T1.04, T1.05.
**Se travar:** Rota 2 (banco se há banco) ou **KBA diagnóstico** se Beto precisa puxar dados para triagem Φ₁ enquanto resolve elevação.

**Fallback:** Rota 2 — Internet Banking.

**Se fallback também falhar:** Rota 3 — balcão. **KBA diagnóstico** em paralelo para triagem.

**Se fallback do fallback também falhar:** Escalonar Alessandro: *"C02 — sem documentos próprios + Rota 1/2 falharam. Indo presencial + KBA diag."*

<!-- Corrigido por ERRATA-001 v1.0 (09/05/2026) -->

---

### CENÁRIO C03: Trabalhador rural com CTPS antiga, conta Bronze, sem internet banking *(corrigido v1.1)*

**Perfil:** Ex-CLT rural ou peão de fazenda (50-70 anos), interior, smartphone básico, **não usa app de banco**. CTPS azul antiga com 2-4 carimbos.
**Hook 0 result:** P1=Sim, P2=Sim, P3=Não, P4=respondeu, P5=Nenhum → R1 (revisada)
**Nível atual:** Bronze
**Jornada MC:** Φ₁ (frequentemente: aposentadoria por idade rural)

**Rota principal:** **Rota 1 — Biometria facial** (se tiver biometria TSE — votou em urna com foto+digital)
- Passo 1: Confirmar biometria TSE (P: *"O senhor já votou em urna com foto e dedo? Foi quando, mais ou menos?"*). Se sim, segue Rota 1.
- Passo 2: Foto da CTPS para o dossiê Φ₁.
- Passo 3: Vídeo MC + execução biometria.
- Tempo estimado: 20-35 min.

**Script WhatsApp:**
> *"Seu [nome], pela sua carteira o senhor tem direito que merece. O caminho mais rápido é a foto no app gov.br. O senhor já votou nas máquinas que tiram foto e pedem o dedo? Se sim, dá pra fazer no celular do senhor mesmo. Vou te mandar um vídeo ensinando."*

**Travas prováveis:** T2.04 (internet rural instável), T1.01-T1.05, T1.06 (fisionomia alterada).
**Se travar:** se T2.04 → reagendar para janela de baixa carga. Se T1.06 → **Rota 3 (presencial direto)** porque o cliente não tem banco.

**Fallback:** Rota 3 — balcão INSS presencial (sem banco, é fallback direto). **KBA diagnóstico** para Beto puxar dados durante a espera.

**Se fallback também falhar:** Escalonar Alessandro: *"C03 — rural sem banco, Rota 1 falhou. Marcado balcão INSS [data]. Avaliar Anjo Local se distância >30 km."*

<!-- Corrigido por ERRATA-001 v1.0 (09/05/2026) -->

---

### CENÁRIO C04: Idoso com CNIS impresso em casa (já foi ao INSS antes), conta Bronze *(corrigido v1.1)*

**Perfil:** 60+ anos, urbano ou rural, foi a uma agência INSS no passado e tem extrato CNIS impresso. Conta Bronze.
**Hook 0 result:** P1=Sim, P2=Sim/Não, P3=Sim, P4=respondeu, P5=qualquer → R1 (revisada)
**Nível atual:** Bronze
**Jornada MC:** Φ₁ ou Φ₄

**Rota principal:** **Rota 1 — Biometria facial** (CNIS físico vai direto para o dossiê Φ₁ do MC; não precisa de KBA para ter dados — já tem o papel)
- Passo 1: Foto do CNIS pelo WhatsApp. Beto organiza linha do tempo no dossiê do cliente.
- Passo 2: Vídeo MC + biometria.
- Tempo estimado: 15-25 min.

**Script WhatsApp:**
> *"Seu [nome], esse papel do INSS que o senhor mandou é ouro — guardo aqui no seu cadastro nosso. Pra senhora poder usar todos os serviços do INSS, agora a senhora precisa fazer aquela foto de subir o nível da conta. Vou te mandar um vídeo de 2 minutos ensinando."*

**Travas prováveis:** T1.01-T1.05.
**Se travar:** Rota 2 (banco se bancarizado) ou Rota 3.

**Fallback:** Rota 2 — Internet Banking se bancarizado, senão Rota 3.

**Se fallback também falhar:** Escalonar Alessandro: *"C04 — CNIS físico OK, mas Rota 1/2 falharam. Indo presencial."*

<!-- Corrigido por ERRATA-001 v1.0 (09/05/2026) -->

---

### CENÁRIO C05: PcD motora com histórico contributivo, conta Bronze, não consegue selfie *(corrigido v1.1)*

**Perfil:** Pessoa com Parkinson avançado, AVC, ELA ou tetraplegia parcial. Trabalhou registrada antes da deficiência. Familiar próximo. Conta Bronze.
**Hook 0 result:** P1=Sim, P2=Sim/Não, P3=qualquer, P4=respondeu, P5=qualquer → R1 (revisada) + flag PcD
**Nível atual:** Bronze
**Jornada MC:** Φ₁ ou Φ₄

**Rota principal:** **Rota 1 — Biometria facial com câmera traseira assistida** (familiar segura aparelho, cliente vira a cabeça)
- Passo 1: Coletar inteligência contributiva (CTPS / CNIS / 135) para dossiê Φ₁.
- Passo 2: Pré-coaching do familiar via videochamada.
- Passo 3: Tentativa de biometria com câmera traseira.
- Tempo estimado: 30-50 min.

**Script WhatsApp:**
> *"Seu [nome] / [familiar], como o [cliente] tem essa dificuldade pra segurar o celular, o caminho é fazer a foto pela câmera de trás (a maior). [Familiar] vai segurar o aparelho de frente pro [cliente] e eu te explico como. Antes vou te mandar um vídeo de 2 minutos."*

**Travas prováveis:** T1.06 (fisionomia muito alterada por progressão da doença), T2.07 (tremor), T2.09 (motora severa).
**Se travar:** se T1.06/T2.09 severos → Cadastro de Representante Legal INSS (C17). **KBA diagnóstico** é particularmente útil aqui — não exige selfie nem operação física complexa, ponto positivo para esse perfil **como ferramenta diagnóstica do MC**.

**Fallback:** Rota 2 — Internet Banking se cliente é bancarizado e tem biometria do banco.

**Se fallback também falhar:** Cadastro de Representante Legal INSS (C17). Escalonar Alessandro: *"C05 — PcD severa sem rotas digitais. Migrar C17."*

<!-- Corrigido por ERRATA-001 v1.0 (09/05/2026) -->

---

### CENÁRIO C06: Mãe solo BPC/BF puro, nunca contribuiu, conta Bronze

**Perfil:** Mulher 25-45 anos, mãe solo, recebe BPC do filho PcD ou Bolsa Família, nunca trabalhou registrada. Frequentemente bancarizada na Caixa Tem. Conta Bronze.
**Hook 0 result:** P1=Não, P2=Não, P3=Não, P4=Não, P5=BPC/BF → R3 (revisada)
**Nível atual:** Bronze
**Jornada MC:** Φ₀ majoritariamente; Φ₁ se filho PcD precisa benefício novo

**Rota principal:** **Rota 1 — Biometria facial** se tiver biometria TSE (mãe solo geralmente <50 anos, alta probabilidade de TSE biometria recente). Se não → Rota 2 (Caixa Tem).
- Passo 1: Confirmar biometria TSE (votou na urna com foto/dedo nos últimos anos).
- Passo 2: Vídeo MC + tentativa.
- Tempo estimado: 12-20 min.

**Script WhatsApp:**
> *"Dona [nome], a senhora já votou nas máquinas que tiram foto e pedem o dedo, nas eleições mais recentes? Se sim, o caminho mais rápido é a foto no app gov.br — vou te mandar um vídeo curtinho. Se não tiver votado assim, a gente vai pelo Caixa Tem que cai o Bolsa Família/BPC, é igualmente rápido."*

**Travas prováveis:** T1.04 (liveness), T1.07 (app desatualizado).
**Se travar:** Rota 2 (Caixa Tem).

**Fallback:** Rota 2 — Caixa Tem / Internet Banking Caixa.

**Se fallback também falhar:** Rota 3 — Presencial CRAS (Φ₀) ou agência Caixa.

---

### CENÁRIO C07: Idoso rural que só trabalhou na roça sem registro, conta Bronze

**Perfil:** 60+ anos, sertão / interior, trabalhou a vida inteira como segurado especial ou totalmente informal. **KBA fechado por desenho** (CNIS vazio).
**Hook 0 result:** P1=Não, P2=Não, P3=Não, P4=Não, P5=Nenhum/Aposentadoria → R3 (revisada)
**Nível atual:** Bronze
**Jornada MC:** Φ₁ (aposentadoria rural)

**Rota principal:** **Rota 3 — Balcão INSS presencial com produção rural**
- Passo 1: Reunir documentação rural (declaração sindical, contratos de arrendamento, notas).
- Passo 2: Agendar via 135.
- Passo 3: Cliente comparece — servidor INSS protocola DER + frequentemente aplica selo Balcão Prata.
- Tempo: 5 min API + 14-30 dias calendário.

**Script:** preservado da v1.0.

**Fallback:** Rota 2 (Caixa se cliente recebe algum benefício).

---

### CENÁRIO C08: PcD intelectual com BPC, nunca contribuiu, conta Bronze, curador existe

**Preservado da v1.0.** Rota Estrutural — Cadastro de Representante Legal INSS via curador.

---

### CENÁRIO C09: Quilombola/indígena com documentação incompleta

**Preservado da v1.0.** Rota 3 — Mutirão presencial articulado com FUNAI / Fundação Palmares / Defensoria.

---

### CENÁRIO C10: Beneficiário ativo que precisa fazer prova de vida digital

**Preservado da v1.0.** Rota Banco — prova de vida via TAA / agência (não exige Ouro).

---

### CENÁRIO C11: Cliente Prata que precisa assinar documento qualificado

**Preservado da v1.0.** Rota Ouro — elevação pontual via biometria TSE/SENATRAN ou CIN.

---

### CENÁRIO C12: Cliente tentou reconhecimento facial e está bloqueado 24h

**Atualização v1.1:** durante a janela de 24h, em vez de migrar para "Rota 0 KBA", **migrar para Rota 2 (banco)** se cliente é bancarizado. **KBA diagnóstico** acionado apenas se Beto precisa puxar dados para triagem enquanto aguarda nova tentativa de biometria após 24h.

Demais elementos preservados.

<!-- Atualizado por ERRATA-001 v1.0 (09/05/2026) -->

---

### CENÁRIO C13: Cliente tentou KBA e errou as respostas

**Atualização v1.1:** este cenário muda de prevalência — **vira raro** porque o KBA agora é último recurso. Quando ocorre, mantém o protocolo de cooldown 24h (confirmado pela JAN001 09/05/2026). **Migração padrão pós-erro KBA:** voltar para Rota 1 (biometria facial) com vídeo MC, ou Rota 2 (banco), conforme perfil.

Demais elementos preservados.

<!-- Atualizado por ERRATA-001 v1.0 (09/05/2026) -->

---

### CENÁRIO C14: Cliente com senha esquecida e sem biometria para recuperar

**Atualização v1.1:** o KBA Previdenciário continua sendo opção legítima para **recuperação de senha** (o fluxo Dataprev termina em "Cadastrar Senha"). Mas **não eleva o nível** — após o KBA, cliente continua precisando de Rota 1 ou Rota 2 para chegar a Prata real, se a sessão original era Bronze. Se a sessão era Prata "adormecida" (cliente já tinha Prata e só esqueceu a senha), o KBA recupera a Prata existente.

Demais elementos preservados.

<!-- Atualizado por ERRATA-001 v1.0 (09/05/2026) -->

---

### CENÁRIO C15: Conta gov.br criada por golpista no CPF do cliente

**Preservado da v1.0.** Rota Jurídica — encaminhamento articulado.

---

### CENÁRIO C16: Filho quer ajudar pai idoso acamado — sem procuração

**Preservado da v1.0.** Recusar custódia + Procuração SPE eletrônica.

---

### CENÁRIO C17: Curador judicial de PcD intelectual — curatela existe mas não cadastrada no INSS

**Preservado da v1.0.** Cadastro de Representante Legal INSS via Meu INSS do curador.

---

### CENÁRIO C18: Mãe de menor de 16 anos no CadÚnico

**Preservado da v1.0.** Φ₀ presencial CRAS + Φ₁ Meu INSS.

---

## 3. Mapa biométrico operacional

> **Atualização v1.1:** preservado integralmente da v1.0 — apenas a posição relativa do KBA mudou (não destrava níveis acima de Bronze validado), mas o KBA continua útil como ferramenta diagnóstica e a tabela já registrava isso na coluna "O que desbloqueia". Reler a coluna do KBA pós-ERRATA-001 como *"Bronze validado (não Prata)"*.

(Tabela completa preservada da v1.0 — 16 bases.)

---

## 4. Catálogo de rotas consolidado *(renumerado e reordenado v1.1)*

> **Mudança estrutural v1.1:** as rotas são renumeradas e reordenadas pela ERRATA-001:
> - **Rota 1 = Biometria facial** (era "Rota 2" na v1.0)
> - **Rota 2 = Banco** (era "Rota 1" na v1.0)
> - **Rota 3 = Presencial** (mantido)
> - **Rota auxiliar = KBA diagnóstico** (era "Rota 0 KBA" como prioritária na v1.0; foi rebaixada e movida para o final)

### Rota 1 — Biometria facial *(promovida a principal v1.1)*

**Pré-requisitos:**
1. Smartphone com câmera frontal (ou câmera traseira + familiar/Anjo).
2. Biometria coletada em **TSE** OU **DENATRAN/SENATRAN** OU **CIN**.
3. Iluminação adequada.

**Passo a passo:**
- Passo 1: Beto envia **vídeo MC institucional** sobre biometria facial.
- Passo 2: Cliente assiste (idealmente sozinho ou com familiar).
- Passo 3: Cliente abre app gov.br → Aumentar Nível → Reconhecimento Facial.
- Passo 4: Liveness (virar cabeça devagar, sem óculos, com boa luz).
- Passo 5: Selo Prata (TSE/SENATRAN) ou Ouro (CIN) aplicado.
- Tempo total: **8-15 min** com vídeo pré-assistido; 20-40 min sem vídeo.

**Script Beto:**
> *"[Nome], o caminho mais rápido pra senhora é a foto no app gov.br. Vou te mandar um vídeo curtinho de 2 minutos que ensina certinho. Depois da senhora assistir, a gente faz junto pelo zap. Não precisa pressa."*

**Travas e soluções:**
- T1.01 → trocar luz, retirar óculos, refazer (máx 2-3x).
- T1.02 → **PARAR**, aguardar 24h, migrar Rota 2 imediatamente.
- T1.04 → simulação prévia do movimento.
- T1.05 → mudar ambiente; janela atrás é ruim.
- T1.06 → Rota 2 (banco) ou Rota 3.

### Rota 2 — Internet Banking *(rebaixada de prioritária a fallback v1.1)*

**Pré-requisitos:**
1. Conta ativa em banco credenciado.
2. App banco instalado, logado, senha eletrônica criada.

**Passo a passo:**
- Passo 1-7: idêntico v1.0 (cliente abre app gov.br → escolhe banco → autoriza OAuth → confirma).
- Tempo total: 8-20 min.

**Scripts por banco (Caixa, BB, Bradesco, Itaú, Santander, Sicoob/Sicredi):** preservados da v1.0 (E8 Parte B §2 também tem).

**Travas:**
- Banco rejeita OAuth → trocar de banco ou Rota 3.
- Cliente esqueceu senha eletrônica → presencial banco para recadastrar.
- Sicoob/Sicredi cooperativa heterogênea → testar primeiro.

### Rota 3 — Presencial (balcão INSS / agência bancária / posto CIN)

**Quando acionar:** Rota 1 e Rota 2 falharam ou são inviáveis.

**Checklist do cliente:** preservado da v1.0 (RG/CNH/CIN, CPF, comprovante residência + úteis variáveis por destino).

**Como agendar:** preservado da v1.0 (135 / app banco / Detran-SSP / CRAS direto).

**Tempo:** 5 min API + 7-21 dias calendário.

**Protocolo Anjo Local:** preservado da v1.0 — ativação quando cliente acamado/PcD severo/zona rural sem transporte/sem familiar.

### Rota auxiliar — KBA diagnóstico — Selo Bronze KBA *(reposicionada v1.1)*

> ⚠ **ATENÇÃO:** esta rota **NÃO eleva o nível da conta**. O cidadão permanece Bronze. Serve apenas para que o MC obtenha dados contributivos quando todas as rotas de elevação (1, 2, 3) falharam **e** o cidadão não tem CTPS, CNIS físico nem memória utilizável **e** o 135 não foi opção viável.

**Quando acionar:**
- ✅ Todas as rotas de elevação (1, 2, 3) falharam ou estão em espera prolongada.
- ✅ As 4 fontes alternativas de inteligência contributiva (CTPS / CNIS físico / memória / 135) **todas indisponíveis**.
- ✅ MC precisa de metadados básicos do CNIS para iniciar triagem Φ₁.

**Quando NÃO acionar:**
- ❌ Como primeiro passo da jornada (essa é a mudança mais importante v1.1).
- ❌ Quando cliente nunca contribuiu (T2.15 — opção "NUNCA CONTRIBUÍ" termina o fluxo).
- ❌ Quando cliente tem cooldown ativo de erro recente (T1.18 — 24h confirmado por JAN001 09/05).

**Pré-requisitos:** preservados da v1.0.

**Passo a passo (telas 1-5):** preservado da v1.0 (Gateway → OAuth → Questionário → Habilitar → Cadastrar Senha).

**Status pós-ERRATA-001:** **CONFIRMADO** que selo gerado é Bronze validado (não Prata). Cooldown de 24h após erro confirmado empiricamente.

**Tempo estimado:** 15-30 min com inteligência preparada.

**Posição ética — Cenário B VETADO:** preservado da v1.0 — vetação literal por ADR-009a.

<!-- Corrigido por ERRATA-001 v1.0 (09/05/2026) -->

---

## 5. FAQ operacional — 30 perguntas *(P01 e P04 corrigidas v1.1)*

### Sobre KBA

**P01 (REVISADA v1.1): O cliente tem conta Bronze. O que eu faço primeiro?**
- **Resposta direta:** **Guia ele para fazer biometria facial.** Manda o vídeo MC. Se não conseguir, tenta banco. Se não tiver banco, vai pro presencial. **Só se tudo falhar, aciona o KBA diagnóstico.**
- **Cenário:** aplicável a todos (Hook 0 + R1-R3 revisadas).
- **Rota:** Rota 1 (biometria) prioritária; Rota auxiliar KBA é último recurso.
- **Trava E5:** nenhuma — política operacional.

<!-- Corrigido por ERRATA-001 v1.0 (09/05/2026) -->

**P02: O cliente está no questionário KBA e não sabe a resposta. Posso dizer pra ele?**
- **Resposta:** **NÃO.** Você pode lembrar dele do que está na CTPS/CNIS dele. Você nunca lê a opção da tela e fala "clica nessa". A linha é: você devolve dado próprio dele; você não dá gabarito.
- **Cenário:** C13.
- **Rota:** Rota auxiliar (KBA Cenário A ou A+).
- **Trava E5:** T3.12.

**P03: O cliente errou o KBA. Bloqueou? Pode tentar de novo?**
- **Resposta:** **Cooldown de 24h confirmado** (JAN001 09/05/2026). Aguardar 24h. **Mas pós-ERRATA: enquanto espera, ir para Rota 1 (biometria) ou Rota 2 (banco) — não esperar o KBA reabrir.**
- **Cenário:** C13.
- **Rota:** migrar imediato Rota 1/2.
- **Trava E5:** T1.18.

**P04 (REVISADA v1.1): O KBA deu certo. Isso vale como Prata?**
- **Resposta direta:** **Não. O KBA dá Bronze validado. Não é Prata.** O cliente ainda precisa fazer biometria ou banco para ter Prata. Mas com o KBA feito, o MC já consegue puxar dados pra montar a triagem enquanto resolve o nível.
- **Cenário:** todos pós-KBA.
- **Rota:** continuar Rota 1 ou Rota 2 para chegar a Prata real.
- **Trava E5:** —

<!-- Corrigido por ERRATA-001 v1.0 (09/05/2026) -->

**P05: O cliente nunca contribuiu pro INSS. O KBA funciona?**
- **Resposta:** **NÃO.** Questionário tem opção "NUNCA CONTRIBUÍ" — fluxo termina sem selo. Migrar imediatamente para Rota 1 (biometria) ou Rota 2 (banco — Caixa funciona para BPC) ou Rota 3.
- **Cenário:** C06, C07, C08.
- **Rota:** Rota 1 / Rota 2 / Rota 3.
- **Trava E5:** T2.15.

### Demais blocos do FAQ (P06-P30)

> **Preservados da v1.0** — apenas P01 e P04 foram literalmente corrigidos pela ERRATA-001. As demais 28 perguntas mantêm redação e respostas. **Nota de releitura:** onde a v1.0 mencionava "Rota 0 KBA" como rota principal, ler como "Rota auxiliar — KBA diagnóstico" (último recurso).

(Texto integral das P06-P30 está preservado do E8 v1.0 — não reproduzido aqui para não duplicar volume. Consultar v1.0 para detalhes ou consolidar manualmente.)

#### Protocolo de escalonamento para Alessandro (preencher antes de mandar)

> Preservado da v1.0 — formulário de 8 campos.

---

## 6. Protocolo do Anjo Agente Local

> **Preservado integralmente da v1.0.** Critérios de ativação, briefing pré-visita, scripts, relatório pós-visita, custo R$150-400.

---

## 7. Posição ética consolidada (INVIOLÁVEL)

> **Preservado integralmente da v1.0.** Cenários A/A+/B + Regra de Ouro + 5 Coisas que o Operador Nunca Faz.

---

## 8. Métricas de acompanhamento *(corrigido v1.1)*

| Métrica | Definição | Fonte | Meta inicial |
|---|---|---|---|
| **TENV-MC** (Taxa de Elevação de Nível) | % clientes que precisaram elevar conta gov.br | Caso MC | medir |
| **MIX-ROTA** | Distribuição % por Rota 1/2/3/auxiliar | Log de jornadas | medir vs. estimativa E4.2 (55/27,5/12,5 + 5% KBA aux) |
| **Tempo médio Rota 1 (Biometria)** | Cronometragem | Log | medir vs. estimativa E4.2 (~11,5 min com vídeo) |
| **Tempo médio Rota 2 (Banco)** | Cronometragem | Log | medir vs. estimativa E4.2 (12 min) |
| **Tempo médio Rota 3 (Presencial)** | Cronometragem + calendário | Log | medir vs. estimativa E4.2 (5 min API + 7-21 dias) |
| **Tempo médio Rota auxiliar (KBA diag)** | Cronometragem (quando acionada) | Log | medir vs. estimativa E4.2 (15-30 min) |
| **Taxa de sucesso Rota 1** | % biometrias bem-sucedidas | Log | medir |
| **Taxa de sucesso biometria facial (1ª tentativa)** *(NOVA v1.1)* | % de tentativas Rota 1 que passam de primeira (sem precisar coaching adicional) | Log | medir — métrica sensível ao impacto do vídeo MC |
| **Taxa de sucesso biometria facial (2ª tentativa com orientação MC)** *(NOVA v1.1)* | % de tentativas Rota 1 que passam na 2ª após coaching Beto | Log | medir |
| **Taxa de sucesso Rota 2** | % bancos que aplicaram selo | Log | medir vs. estimativa (70-80%) |
| **Taxa de sucesso Rota 3** | % agendamentos com selo aplicado | Log | medir vs. estimativa (~85%) |
| **Taxa de no-show Rota 3** | % agendamentos sem comparecimento | Log | medir vs. estimativa (25-35%) |
| **Taxa de escalamento para Alessandro (TEA)** | % casos no formulário de escalonamento | Log | medir |
| **Taxa de ativação de Anjo Local (TAL)** | % jornadas com Anjo presencial | Log | medir |
| **Taxa de incidência de oferecimento Cenário B** | % clientes/familiares que **ofereceram** custódia de senha (T3.01) | Log | medir (e treinar resposta) |
| **TENV-KBADiag** *(renomeada v1.1, era TENV-KBA)* | Taxa de acionamento do KBA diagnóstico — % de casos que recorreram ao KBA como último recurso | Log | medir — **direção: quanto menor, melhor** (significa que as rotas de elevação estão funcionando) |
| **NPS do cidadão pós-elevação** | NPS coletado 7-14 dias após selo aplicado | Pesquisa WhatsApp | medir |
| **Custo médio ponderado por elevação** | Σ(rota_i × tempo_i × custo-hora) ÷ total elevações | Cálculo | medir vs. estimativa E4.2 (~11,5 min) |
| **Cobertura geográfica de Anjos** | Nº municípios cobertos / total | Mapa de anjos | medir |

<!-- Corrigido por ERRATA-001 v1.0 (09/05/2026) -->

**Cadência sugerida de revisão (preservada da v1.0):**
- **Diária** Beto / **Semanal** Alessandro / **Mensal** revisão de estimativas / **Após N=50** primeiras metas / **Após N=200** v2.0.

---

E8 v1.1 gravado: G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Gestão Software\Documentação\CONTA GOV.BR PRATA OURO\MC-GOVBR-ArvoreDecisao-APIHumana-v1_1-2026-0509.md
