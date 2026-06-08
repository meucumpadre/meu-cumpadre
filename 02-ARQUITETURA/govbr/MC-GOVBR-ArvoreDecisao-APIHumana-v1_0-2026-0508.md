---
título: MC-GOVBR-ArvoreDecisao-APIHumana
versão: v1_0
data: 2026-05-08
status: RASCUNHO
autor: Claude Code × Alessandro Neves
fonte: E1 + E4.1 + E5
público-alvo: Beto (operador API Humana T1/T2) + Alessandro (supervisão)
---

# MC-GOVBR — Árvore de Decisão Sniper — API Humana Backend

---

## 0. Como usar este documento

1. **Este documento é um mapa de rotas.** Cada cliente que chega no MC cai em **um cenário** da Seção 2 (são 18 cenários — C01 a C18).
2. **Comece sempre pelo Hook 0** (Seção 1) — 5 perguntas de WhatsApp que classificam o cliente em 2-5 minutos.
3. **Cada cenário tem rota principal + tempo + script pronto + fallback.** Se a rota principal falhar, siga o fallback. Se o fallback falhar, **escalone para Alessandro**.
4. **Ética acima de velocidade.** Você nunca opera a conta gov.br DO cliente — você guia o cliente a operar a própria conta. Tese MC: **mesmas ferramentas dos despachantes, propósito oposto** (Inversão Cósmica).
5. **Na dúvida, regra de ouro:** *"Se a Dona Zilda soubesse exatamente o que estou fazendo, ela ficaria tranquila?"* Se sim, prossiga. Se não, pare e chame o Alessandro.

---

## 1. Hook 0 — Triagem de nível gov.br (pré-requisito obrigatório)

Antes de qualquer rota técnica, rode o Hook 0. **Tempo total: 2-5 minutos** se o cliente responde rápido. Se ele tiver que ir buscar a CTPS no armário, pode levar 15-30 min — vale a pena.

### As 5 perguntas (versão WhatsApp Dona Zilda — copiar e colar)

> **Importante:** começa SEMPRE com o nome do cliente. Tom de neto/sobrinho que respeita o tempo do cliente. Zero jargão. Espere a resposta de uma antes de mandar a próxima — não dispare as 5 de uma vez.

#### P1 — Vínculo contributivo

> *"Dona [nome] / Seu [nome], aqui é o [Beto] do Meu Cumpadre. Vou te fazer umas perguntinhas rápidas pra eu entender o melhor caminho pro nosso atendimento, tá bom? A primeira: a senhora/o senhor já trabalhou registrado alguma vez na vida? De carteira assinada, mesmo que tenha sido faz tempo?"*

**Respostas esperadas:**
- *"Sim, trabalhei sim"* / *"Trabalhei muitos anos"* / *"Faz tempo, lá nos anos 90"* → P1 = **Sim**
- *"Não, nunca tive registro"* / *"Só trabalhei na roça"* / *"Sempre fui doméstica sem assinar"* → P1 = **Não**
- *"Acho que sim mas não lembro direito"* → P1 = **Sim** (entra na trilha KBA com Fonte 4 obrigatória — Beto liga 135).

#### P2 — CTPS física

> *"E aquela carteirinha de trabalho azul, das antigas — a senhora/o senhor ainda tem ela em casa? Se tiver, pede um favor: tira foto das páginas que tem carimbo de empresa e me manda aqui no zap, pode ser?"*

**Respostas esperadas:**
- Cliente manda fotos → P2 = **Sim** (anexar fotos no caso MC; ler carimbos: empresa, admissão, saída).
- *"Tenho mas tá guardada num lugar que não acho"* → P2 = **Sim** (pendente — agendar momento para o cliente buscar; vale a busca).
- *"Não tenho"* / *"Perdi numa mudança"* / *"Era da minha mãe e ela morreu"* → P2 = **Não**.

#### P3 — CNIS / papel do INSS

> *"E papel do INSS, a senhora/o senhor tem em casa? Aquele extrato com a história das contribuições, ou alguma carta que o INSS já mandou? Se tiver qualquer papelzinho, manda foto também."*

**Respostas esperadas:**
- Cliente manda foto de extrato CNIS → P3 = **Sim** (jackpot — é a melhor fonte).
- Cliente manda foto de carta do INSS, comprovante de benefício, decisão de aposentadoria → P3 = **Sim** (utilizável, especialmente para confirmar valores e datas).
- *"Não tenho nada"* → P3 = **Não**.

#### P4 — Memória do último vínculo

> *"A senhora/o senhor lembra mais ou menos quando foi que parou de trabalhar registrado? Não precisa ser certinho, ano mais ou menos serve. E lembra qual era a empresa?"*

**Respostas esperadas:**
- *"Foi em 2008, na Indústria X"* → P4 = **respondeu** (anotar ano + empresa).
- *"Faz uns 10 anos, mais ou menos"* → P4 = **respondeu** (calcular ano aproximado).
- *"Não lembro de jeito nenhum"* → P4 = **Não lembro** (precisa Fonte 4 — 135).

#### P5 — Benefício atual

> *"E hoje, a senhora/o senhor recebe alguma coisa? Aposentadoria, BPC do LOAS, Bolsa Família, alguma pensão?"*

**Respostas esperadas:**
- *"Recebo BPC"* / *"Bolsa Família"* / *"Nada"* → P5 = **BPC** / **BF** / **Nenhum**.
- *"Recebo aposentadoria"* / *"Pensão do meu marido"* → P5 = **Aposentadoria** / **Pensão** (cliente já passou por algum fluxo Prata no passado — investigar T1.14 antes de eleger rota nova).

### As 5 regras de classificação (R1-R5)

> Aplicar **na ordem**. A primeira regra que casar manda — não testar as próximas.

| Regra | Condição | Saída | Ir para |
|---|---|---|---|
| **R1** | P1 = Sim **E** (P2 = Sim **OU** P3 = Sim **OU** P4 = respondeu) | **Rota 0 — KBA com inteligência contributiva preparada** | Cenários C01–C04 |
| **R2** | P1 = Sim **E** P2/P3/P4 todos negativos | **Rota 0 — KBA com Fonte 4 (Beto liga 135)** — pré-trabalho de 20-40 min antes de iniciar KBA | Cenário C02 (variante) |
| **R3** | P1 = Não **E** P5 = BPC puro / BF puro / Nenhum | **Rota 0 KBA fechada** (cliente nunca contribuiu) → ir para Rota 1 (banco) se bancarizado, senão Rota 3 (balcão) | Cenários C06, C07 |
| **R4** | P2 = Sim (qualquer cenário) | **CTPS é backup probatório transversal** — guardar fotos no caso MC mesmo se a rota for outra. Vale para Lei 9.784/1999, recurso CRPS, futura DER. | Anotação no caso |
| **R5** | P5 = Aposentadoria | Cliente provavelmente já teve Prata no passado. Antes de eleger rota nova, **investigar T1.14** (senha esquecida + sem biometria) — pode bastar recuperar credencial. | Cenário C14 |

---

## 2. Cenários de decisão

### CENÁRIO C01: Idoso urbano bancarizado, tem CTPS em casa, conta Bronze

**Perfil:** Aposentado urbano (60-75 anos), conta na Caixa/BB, CTPS azul guardada na gaveta, conta gov.br Bronze (criada para algum serviço pontual).
**Hook 0 result:** P1=Sim, P2=Sim, P3=Não/Sim, P4=respondeu, P5=Aposentadoria/Nenhum → R1
**Nível atual:** Bronze
**Jornada MC:** Φ₁ ou Φ₄

**Rota principal:** Rota 0 — KBA Previdenciário com CTPS como cola legítima
- Passo 1: Cliente envia foto da CTPS pelas páginas com carimbo. Beto recebe e organiza linha do tempo (empresa A: 1985-1992, empresa B: 1992-2010, etc.).
- Passo 2: Beto manda áudio de 3 min revisando com o cliente: *"Olha aqui, sua CTPS mostra que o último carimbo é de 2010 na Indústria X. Confirma comigo isso?"*
- Passo 3: Beto orienta abertura do app Meu INSS no aparelho do cliente. Tela 1 (gateway) → Continuar. Tela 2 (OAuth) → Autorizar. Tela 3 (questionário) → cliente lê pergunta e responde com base na CTPS própria.
- Passo 4: Cliente cadastra senha nova, conta vira Prata.
- Tempo estimado: 25-35 min total (15 min preparação + 10-15 min KBA).
- Executor: Beto remoto + cidadão síncrono (videochamada opcional).

**Script WhatsApp (copiar e colar):**
> *"Dona [nome], achei sua carteirinha aqui — vamos juntos. O INSS vai fazer umas perguntas pra senhora sobre seus trabalhos antigos. As respostas tão tudo na sua carteira que a senhora me mandou. Vamos abrir o aplicativo do Meu INSS no seu celular agora? Eu vou te guiando passo a passo, mas a senhora é que vai mexer no celular, tá bom?"*

**Travas prováveis:** T1.10 (timeout Dataprev em horário de pico), T2.06 (analfabetismo digital), T1.16 (cliente trava na pergunta).
**Se travar:** se T1.10 → reagendar para depois das 22h ou fim de semana. Se T2.06 → migrar para Cenário A+ (videochamada com tela compartilhada). Se T1.16 → revisar CTPS de novo na pergunta específica, sem dar gabarito.

**Fallback:** Rota 1 — Internet Banking
- Passo 1: Confirmar conta ativa em banco credenciado + senha eletrônica funcionando.
- Passo 2: Guiar cliente no app do banco até "Mais serviços → gov.br" (varia por banco).
- Passo 3: Autorizar consentimento OAuth → conta sobe para Prata em 2-5 min.
- Tempo estimado: 12-18 min.

**Se fallback também falhar:** Escalonar para Alessandro com nota: *"C01-fallback. Cliente bancarizado mas OAuth do banco rejeitando. Tentei [banco]. Verificar se senha eletrônica está mesmo ativa."*

---

### CENÁRIO C02: Idoso urbano bancarizado, sem CTPS, lembra do último emprego, conta Bronze

**Perfil:** Mesma faixa do C01, mas perdeu a CTPS (mudança, tempo, esquecimento). Lembra que trabalhou na Empresa Y faz "uns 15 anos".
**Hook 0 result:** P1=Sim, P2=Não, P3=Não, P4=respondeu (impreciso), P5=Aposentadoria/Nenhum → R1 (com Fonte 4 reforço)
**Nível atual:** Bronze
**Jornada MC:** Φ₁ ou Φ₄

**Rota principal:** Rota 0 — KBA Previdenciário com Fonte 4 (135) como cola legítima
- Passo 1: Beto liga no 135 (com cliente em standby ou autorização verbal gravada): solicita extrato CNIS por telefone informando CPF + dados pessoais do cidadão.
- Passo 2: Atendente do 135 dita ou envia por e-mail (se houver) o resumo CNIS. Beto anota datas, empresas, valores aproximados.
- Passo 3: Beto manda áudio para o cliente: *"Conversei com o INSS, a senhora trabalhou em três lugares: Empresa A de 1980 a 1985, Empresa B de 1985 a 1998, Empresa C de 1998 a 2010. Confirma se faz sentido pra senhora?"*
- Passo 4: Mesmas Telas 1/2/3 do KBA (igual C01).
- Tempo estimado: 40-60 min total (20-30 min de 135 + 10-15 min KBA + buffer).
- Executor: Beto remoto + cidadão síncrono.

**Script WhatsApp (copiar e colar):**
> *"Dona [nome], como a senhora não tem mais a carteirinha, vou ligar no 135 do INSS e pedir um resumo da história da senhora. Demora um pouco, uns 20-30 minutos. A senhora me autoriza? Vou gravar um áudio aqui da senhora autorizando, tá bom? Aí depois eu te conto tudo o que descobri e a gente faz o cadastro junto."*

**Travas prováveis:** T2.16 (cliente confunde datas mesmo com 135), T1.10 (Dataprev cai), T1.16 (cliente erra mesmo com cola).
**Se travar:** insistir no 135 com mais sessões (CNIS é direito do titular, pode pedir várias vezes). Se cliente não consegue assimilar mesmo após várias tentativas → migrar para fallback.

**Fallback:** Rota 1 — Internet Banking (idêntico C01).

**Se fallback também falhar:** Rota 3 — Balcão INSS presencial (agendar via 135). Escalonar para Alessandro com nota: *"C02-balcão. Cliente sem documento próprio + sem banco utilizável. Agendado INSS [data]."*

---

### CENÁRIO C03: Trabalhador rural com CTPS antiga, conta Bronze, sem internet banking

**Perfil:** Ex-CLT rural ou peão de fazenda (50-70 anos), interior, smartphone básico, **não usa app de banco**. CTPS azul antiga com 2-4 carimbos.
**Hook 0 result:** P1=Sim, P2=Sim, P3=Não, P4=respondeu, P5=Nenhum → R1
**Nível atual:** Bronze
**Jornada MC:** Φ₁ (frequentemente: requerimento de aposentadoria por idade rural ou híbrida)

**Rota principal:** Rota 0 — KBA Previdenciário com CTPS como cola legítima
- Passo 1: Foto da CTPS pelo WhatsApp. Beto identifica vínculos rurais (geralmente 1-3 patrões).
- Passo 2: Reconstituição da linha do tempo + revisão com cliente em áudio (cliente rural valoriza muito o áudio).
- Passo 3: Confirmar sinal de internet do cliente. Se 3G fraco (T2.04), agendar KBA para horário de baixa carga (manhã cedo, antes da escola, fim de semana cedo).
- Passo 4: Telas 1/2/3 do KBA com Beto em videochamada se possível.
- Tempo estimado: 30-50 min.
- Executor: Beto remoto + cidadão síncrono.

**Script WhatsApp (copiar e colar):**
> *"Seu [nome], pelas páginas da carteira que o senhor mandou, dá pra ver direitinho seus tempos. O INSS vai fazer umas perguntas pro senhor sobre esses tempos antigos. Vou te explicar cada uma antes da gente apertar. Pode ser hoje à tardezinha, quando a luz aqui tá boa e a internet costuma pegar melhor?"*

**Travas prováveis:** T2.04 (internet rural instável), T1.10 (Dataprev), T2.07 (mão tremida), T1.05 (luz ruim para ler tela).
**Se travar:** se T2.04 → reagendar; se mão tremida → apoiar aparelho em superfície fixa. Se cliente não consegue de jeito nenhum → ativar Anjo Local (Seção 6) ou Rota 3.

**Fallback:** Rota 3 — Balcão INSS presencial
- Passo 1: Agendar via 135 ou pelo Meu INSS (se Bronze permitir agendamento — sim, agendamento é Bronze).
- Passo 2: Cliente leva CTPS original + RG + comprovante de residência. Servidor INSS no balcão pode aplicar selo Prata na hora.
- Passo 3: Após selo aplicado, Beto continua jornada Φ₁ remotamente.
- Tempo estimado: 5 min API + 7-21 dias de calendário.

**Se fallback também falhar:** Escalonar para Alessandro com nota: *"C03-balcão recusado/não-comparecimento. Cliente rural [município]. Avaliar Anjo Local."*

---

### CENÁRIO C04: Idoso com CNIS impresso em casa (já foi ao INSS antes), conta Bronze

**Perfil:** 60+ anos, urbano ou rural, foi a uma agência INSS no passado e tem extrato CNIS impresso (geralmente datado, 1-5 anos atrás). Conta Bronze.
**Hook 0 result:** P1=Sim, P2=Sim/Não, P3=Sim, P4=respondeu, P5=qualquer → R1
**Nível atual:** Bronze
**Jornada MC:** Φ₁ ou Φ₄

**Rota principal:** Rota 0 — KBA Previdenciário com CNIS físico como cola legítima (caso ouro)
- Passo 1: Foto do extrato CNIS por WhatsApp. Beto lê e organiza.
- Passo 2: Verificar data do extrato — se >2 anos, há risco de dados desatualizados (vínculos novos não constam). Se >5 anos, **melhor reforçar com 135** para confirmar não há vínculo recente que mudaria as respostas.
- Passo 3: Áudio de revisão com o cliente: *"Olha aqui, esse extrato seu mostra que sua última contribuição foi em 2012, na Empresa X."*
- Passo 4: Telas 1/2/3 do KBA.
- Tempo estimado: 20-30 min (mais rápido que C01 — CNIS já vem organizado).
- Executor: Beto remoto.

**Script WhatsApp (copiar e colar):**
> *"Seu [nome], esse papel que o senhor tem é o melhor documento que existe — é a história previdenciária do senhor inteirinha. Já tô olhando aqui. Vamos abrir o Meu INSS no seu celular?"*

**Travas prováveis:** T1.10 (timeout Dataprev), T1.16 (cliente erra mesmo com CNIS na mão, especialmente se CNIS está desatualizado).
**Se travar:** complementar com 135 se CNIS for >2 anos.

**Fallback:** Rota 1 — Internet Banking se cliente bancarizado, senão Rota 3.

**Se fallback também falhar:** Escalonar para Alessandro: *"C04 com CNIS físico desatualizado e Rota 1/3 fechadas. Investigar."*

---

### CENÁRIO C05: PcD motora com histórico contributivo, conta Bronze, não consegue selfie

**Perfil:** Pessoa com Parkinson avançado, AVC, ELA ou tetraplegia parcial. Trabalhou registrada antes da deficiência. Familiar próximo (filho, cuidador). Conta Bronze.
**Hook 0 result:** P1=Sim, P2=Sim/Não, P3=qualquer, P4=respondeu, P5=qualquer → R1 + flag PcD
**Nível atual:** Bronze
**Jornada MC:** Φ₁ ou Φ₄

**Rota principal:** Rota 0 — KBA Previdenciário (vantagem: KBA NÃO exige selfie — perfeita para esse perfil)
- Passo 1: Coletar inteligência contributiva (CTPS / CNIS / 135).
- Passo 2: Configurar Cenário A+ — videochamada com tela compartilhada. Cliente em casa, familiar ao lado para apoio físico (segurar aparelho, virar tela).
- Passo 3: Cliente lê e responde verbalmente; familiar aperta o botão correspondente à resposta dada **pelo cliente** (jamais pelo familiar).
- Passo 4: Cadastro de senha — cliente dita; familiar digita **com o cliente confirmando cada caractere**.
- Tempo estimado: 40-60 min.
- Executor: Beto remoto + cliente + familiar local síncrono.

**Script WhatsApp (copiar e colar):**
> *"Seu [nome], a boa notícia é que esse caminho NÃO precisa de foto nem selfie. É só uma conversa do INSS perguntando sobre os trabalhos antigos do senhor. Vou ligar uma chamada de vídeo com o senhor e seu [filho/cuidador]. O senhor vai me dizendo as respostas, e o seu [filho] aperta no celular do senhor. Eu aqui só observo e oriento. Pode ser?"*

**Travas prováveis:** T2.07 (tremor — mas KBA contorna), T2.09 (motora — exige familiar, contorna), T3.01 (familiar querendo fazer "pelo" cliente).
**Se travar:** **NÃO** permitir que o familiar responda no lugar do cliente — isso é Cenário B (vetado). Se cliente não tem discernimento para responder → reorientar para Cenário C17 (curatela / TDA).

**Fallback:** Rota 2 — Câmera traseira assistida (se há discernimento mas não há motora — paradoxalmente, KBA é melhor que esta para PcD motora).

**Se fallback também falhar:** Cadastro de Representante Legal INSS (Cenário C17). Escalonar Alessandro: *"C05 — PcD motora sem capacidade de operar nem com familiar. Migrar C17."*

---

### CENÁRIO C06: Mãe solo BPC/BF puro, nunca contribuiu, conta Bronze

**Perfil:** Mulher 25-45 anos, mãe solo, recebe BPC do filho PcD ou Bolsa Família, nunca trabalhou registrada. Frequentemente bancarizada na Caixa Tem. Conta Bronze.
**Hook 0 result:** P1=Não, P2=Não, P3=Não, P4=Não, P5=BPC/BF → R3
**Nível atual:** Bronze
**Jornada MC:** Φ₀ majoritariamente; Φ₁ se filho PcD precisa benefício novo

**Rota principal:** Rota 1 — Caixa Tem / Internet Banking Caixa
- Passo 1: Confirmar que cliente usa Caixa Tem ativamente (acessa para pegar BPC/BF).
- Passo 2: Pelo app Caixa Tem ou pelo internet banking Caixa, ir em "Mais serviços → gov.br" e autorizar OAuth.
- Passo 3: Conta sobe para Prata em ~5 min.
- Tempo estimado: 10-15 min.
- Executor: Beto remoto + cidadão síncrono.

**Script WhatsApp (copiar e colar):**
> *"Dona [nome], a senhora usa o app da Caixa, né? Aquele que cai o BPC/Bolsa Família? Ele resolve a senha do gov.br rapidinho. Vamos abrir o app da Caixa juntos? Vou te mostrando onde clicar."*

**Travas prováveis:** T1.04 (liveness no Caixa Tem), T1.07 (app Caixa Tem desatualizado), T1.13 (e-mail antigo na conta gov.br).
**Se travar:** atualizar app Caixa Tem; verificar e-mail cadastrado.

**Fallback:** Rota 3 — Presencial CRAS (para Φ₀) ou agência Caixa (para Prata via TAA).

**Se fallback também falhar:** Escalonar Alessandro: *"C06 — mãe solo sem KBA possível e Caixa rejeitando. Investigar."*

---

### CENÁRIO C07: Idoso rural que só trabalhou na roça sem registro, conta Bronze

**Perfil:** 60+ anos, sertão / interior, trabalhou a vida inteira como segurado especial (rural sem CLT) ou totalmente informal. **Pode ter direito a aposentadoria rural por idade**, mas KBA não funciona porque CNIS está vazio.
**Hook 0 result:** P1=Não, P2=Não, P3=Não, P4=Não, P5=Nenhum/Aposentadoria → R3
**Nível atual:** Bronze
**Jornada MC:** Φ₁ (aposentadoria rural)

**Rota principal:** Rota 3 — Balcão INSS presencial com produção rural
- Passo 1: Reunir documentação de atividade rural (contratos de arrendamento, declaração sindical, notas de venda de produção, declaração de vizinhos).
- Passo 2: Agendar atendimento INSS via 135 (Bronze permite).
- Passo 3: Cliente comparece ao INSS com toda documentação. Servidor protocola DER de aposentadoria rural e geralmente aplica selo Balcão Prata na ocasião.
- Passo 4: Após selo, Beto retoma Φ₁ remotamente.
- Tempo estimado: 5 min API + 14-30 dias de calendário (preparação documental + agendamento + comparecimento + análise).
- Executor: Beto remoto + cidadão presencial INSS.

**Script WhatsApp (copiar e colar):**
> *"Seu [nome], como o senhor sempre trabalhou na roça por conta, o caminho do senhor é diferente. A gente vai juntar os papéis que provam a vida do senhor no campo — declaração do sindicato rural, recibo de venda, qualquer coisa — e marcar uma ida no INSS. Lá o senhor protocola direto. Vou te mandar a lista de documentos no zap, tá bom?"*

**Travas prováveis:** T2.03 (sem internet — agenda 135 fica fora de cobertura), T2.13/T2.14 (documentação rural escassa), no-show.
**Se travar:** agendar via 135 vocalizado pelo Beto (cliente em standby); se documentação fraca → encaminhar Defensoria Pública.

**Fallback:** Rota 1 — Caixa (se cliente recebe algum benefício) — pode subir o cliente a Prata e depois ir presencial INSS apenas para o requerimento (sem precisar do selo balcão).

**Se fallback também falhar:** Escalonar Alessandro + Defensoria Pública: *"C07 — rural sem documentação, sem banco. Defensoria para ação judicial."*

---

### CENÁRIO C08: PcD intelectual com BPC, nunca contribuiu, conta Bronze, curador existe

**Perfil:** Beneficiário PcD intelectual severo (Down severo, autismo nível 3, deficiência intelectual moderada-severa). BPC LOAS ativo. Curador judicial nomeado (pai, mãe, irmã). Curatela averbada em cartório.
**Hook 0 result:** P1=Não (em nome do beneficiário), P2=Não, P3=Sim (concessão BPC), P4=Não, P5=BPC → R3 + flag curatela
**Nível atual:** Bronze (do beneficiário)
**Jornada MC:** Φ₄ majoritariamente (manutenção do BPC, prova de vida, atualizações)

**Rota principal:** **Rota Estrutural — Cadastro de Representante Legal INSS** (não é elevação, é substituição da identidade operacional)
- Passo 1: Curador precisa ter conta gov.br **própria** em Prata. Se não tiver, primeiro elevar a conta do curador (Cenário C01-C04 conforme perfil dele).
- Passo 2: No Meu INSS (do curador), serviço "Cadastrar Representante Legal" — anexar decisão judicial de curatela + RG/CPF do beneficiário + comprovante de residência.
- Passo 3: Aguardar análise INSS (1-3 semanas tipicamente).
- Passo 4: Após aprovação, curador opera todos os Φ₄ pelo CPF do beneficiário, dentro da própria sessão Prata.
- Tempo estimado: 15 min API + 1-3 semanas de análise INSS.
- Executor: Beto remoto + curador síncrono.

**Script WhatsApp (copiar e colar):**
> *"Dona [nome do curador], como a senhora é a curadora oficial do [beneficiário], o caminho da senhora é diferente — não é elevar a conta dele, é cadastrar a senhora como representante dele no INSS. Aí a senhora resolve tudo dele entrando com a sua conta, e fica tudo legal e gravado no sistema. Primeiro vou conferir se a SUA conta gov.br tá em Prata. A senhora já fez algum cadastro no gov.br?"*

**Travas prováveis:** T3.02 (curatela existe mas não cadastrada — exatamente este caso), T3.07 (curador em Bronze precisa subir primeiro).
**Se travar:** se análise INSS recusar (documentação faltando), refazer com lista completa fornecida pelo INSS.

**Fallback:** Defensoria Pública para apoio jurídico no cadastro / TDA como alternativa menos invasiva (Cenário C17 invertido).

**Se fallback também falhar:** Escalonar Alessandro + Defensoria: *"C08 — curatela com cadastro recusado. Verificar documento."*

---

### CENÁRIO C09: Quilombola/indígena com documentação incompleta

**Perfil:** Cliente em comunidade tradicional (quilombola, indígena, ribeirinho). Documentação não-padrão: pode ter RANI (Registro Administrativo de Nascimento de Indígena) em vez de RG, comprovante de residência informal, distância grande de qualquer balcão.
**Hook 0 result:** muito variável, geralmente parcial → tratar caso a caso
**Nível atual:** Bronze (na maioria — se conta existe)
**Jornada MC:** Φ₀ + Φ₁

**Rota principal:** Rota 3 — Mutirão presencial articulado com FUNAI / Fundação Palmares / Defensoria
- Passo 1: Mapeamento da comunidade — qual cidade-polo mais próxima, qual servidor INSS mais sensibilizado, quem é a liderança comunitária.
- Passo 2: Articular mutirão (MC + Defensoria + comunidade) — geralmente 1-2 vezes ao ano.
- Passo 3: Durante o mutirão, processar todos os casos da comunidade simultaneamente.
- Tempo estimado: 1-3 meses de planejamento + 1-2 dias de mutirão.
- Executor: Beto + Anjo Local + Defensoria Pública.

**Script WhatsApp (copiar e colar):**
> *"Seu [nome] / [liderança], o caminho da comunidade é diferente do caminho da cidade. A gente trabalha com a Defensoria Pública pra organizar uma visita junto, atender várias famílias de uma vez. Vou marcar uma reunião com o pessoal da Defensoria pra ver quando dá pra ir até a comunidade. Tem algum dia da semana que é melhor pra vocês?"*

**Travas prováveis:** T2.13/T2.14 (documentação), T2.03 (sem internet), distância.
**Se travar:** persistir na articulação institucional.

**Fallback:** Defensoria Pública individual + acionamento MPF se direitos sendo violados.

**Se fallback também falhar:** Escalonar Alessandro: *"C09 — comunidade [nome] sem articulação possível. Avaliar parceria MPF."*

---

### CENÁRIO C10: Beneficiário ativo que precisa fazer prova de vida digital

**Perfil:** Aposentado/pensionista 60+ anos, conta Prata existente, precisa fazer prova de vida anual (Φ₄). KBA não resolve (KBA destrava acesso, não substitui prova de vida).
**Hook 0 result:** já em Prata → pular Hook 0 ou rodar como triagem secundária
**Nível atual:** Prata
**Jornada MC:** Φ₄ (prova de vida)

**Rota principal:** Rota Banco — prova de vida via TAA / agência
- Passo 1: Identificar banco onde cliente recebe o benefício.
- Passo 2: Cliente vai à agência ou ao TAA do banco e faz biometria (5-10 min). Banco transmite para o INSS automaticamente.
- Passo 3: Beto verifica via Meu INSS (com cliente) que a prova de vida foi registrada (~24-48h).
- Tempo estimado: 5 min API + 1 visita ao banco.
- Executor: Beto remoto + cidadão presencial banco.

**Script WhatsApp (copiar e colar):**
> *"Dona [nome], chegou a hora da prova de vida do INSS. O jeito mais fácil pra senhora é ir no banco onde recebe a aposentadoria e usar o caixa eletrônico ou falar com o gerente. Eles fazem a foto e mandam pro INSS automaticamente. Dura uns 5 minutos. Que dia a senhora vai no banco essa semana?"*

**Travas prováveis:** cliente acamado / sem condições de ir ao banco, sistema do banco fora do ar.
**Se travar:** se acamado → cadastrar Representante Legal (C08) ou requisitar prova de vida domiciliar (existe esse serviço para acamados — Lei 8.213).

**Fallback:** Prova de vida via app Meu INSS (exige Ouro). Subir para Ouro via CIN ou biometria TSE/SENATRAN se houver.

**Se fallback também falhar:** Prova de vida domiciliar via 135 / Defensoria. Escalonar: *"C10 — prova de vida domiciliar para acamado."*

---

### CENÁRIO C11: Cliente Prata que precisa assinar documento qualificado

**Perfil:** Cliente Prata que precisa de **assinatura qualificada** (equiparada a firma reconhecida) em peça processual ou documento crítico. Assinatura avançada (Prata) não basta.
**Hook 0 result:** já em Prata
**Nível atual:** Prata
**Jornada MC:** Φ₁ (peça crítica)

**Rota principal:** Rota Ouro — elevação pontual via biometria TSE/SENATRAN ou CIN
- Passo 1: Confirmar se cliente tem biometria coletada em TSE (cidadania) ou SENATRAN (CNH com foto recente, <10 anos).
- Passo 2: Se sim → app gov.br → "Aumentar nível" → biometria facial (selfie liveness). Conta sobe para Ouro em 5 min.
- Passo 3: Assinar documento qualificado em gov.br/assinador.
- Tempo estimado: 15-25 min.
- Executor: Beto remoto + cidadão síncrono.

**Script WhatsApp (copiar e colar):**
> *"[Nome], pra essa assinatura específica do documento, o INSS exige nível Ouro, que é um pouco acima do que você tem agora. É rápido — você tem CNH ou já votou com biometria? Se sim, dá pra subir em 5 minutos no app gov.br."*

**Travas prováveis:** T1.01-T1.06 (família de travas faciais), T1.02 (bloqueio 24h se erra muito).
**Se travar:** câmera traseira assistida (Rota 2).

**Fallback:** CIN se cliente já tem; emitir CIN se não tem (mais lento).

**Se fallback também falhar:** Documento físico em cartório com firma reconhecida (rota analógica). Escalonar: *"C11 — Ouro inviável. Migrar para cartório."*

---

### CENÁRIO C12: Cliente tentou reconhecimento facial e está bloqueado 24h

**Perfil:** Cliente tentou ativar selo facial (Bronze→Ouro direto ou recuperação de senha) e errou >3 vezes. Sistema bloqueou por 24h. Cliente entra em pânico.
**Hook 0 result:** rodar normalmente para definir rota alternativa imediata
**Nível atual:** Bronze (geralmente — se já fosse Prata, não estaria tentando facial)
**Jornada MC:** qualquer

**Rota principal:** **Acalmar + Rota alternativa imediata (KBA ou Banco) durante a janela de 24h**
- Passo 1: Confirmar bloqueio (cliente envia screenshot da tela de erro).
- Passo 2: Explicar que o bloqueio é só do reconhecimento facial — outras rotas continuam abertas.
- Passo 3: Rodar Hook 0 e ir para Rota 0 (KBA) ou Rota 1 (banco) imediatamente, conforme perfil.
- Tempo estimado: 5 min explicação + tempo da rota escolhida.
- Executor: Beto remoto.

**Script WhatsApp (copiar e colar):**
> *"[Nome], calma — esse bloqueio de 24 horas só vale pra essa tentativa de foto. A gente tem outros caminhos. Me responde rapidinho: o senhor já trabalhou registrado? Tem CTPS? Tem conta em algum banco? Pelas suas respostas, escolho o caminho certo e a gente resolve hoje, sem esperar as 24 horas."*

**Travas prováveis:** T1.02 (este é o ponto), T1.14 se for tentativa de recuperação de senha.
**Se travar:** se as outras rotas também não funcionarem, esperar as 24h e reagendar Rota 2 (câmera traseira) com pré-coaching.

**Fallback:** Aguardar 24h e tentar Rota 2.

**Se fallback também falhar:** Rota 3 — balcão INSS. Escalonar: *"C12 — todas as rotas remotas falharam. Indo balcão."*

---

### CENÁRIO C13: Cliente tentou KBA e errou as respostas

**Perfil:** Cliente iniciou Cenário C01-C04 mas errou no questionário Dataprev. **Comportamento de bloqueio do KBA é desconhecido (lacuna L_KBA_1)** — agir conservadoramente.
**Hook 0 result:** já rodado, cliente estava em rota KBA
**Nível atual:** Bronze (KBA falhou)
**Jornada MC:** qualquer

**Rota principal:** Pausar KBA + reforçar inteligência contributiva + tentar de novo após cooldown
- Passo 1: Capturar screenshot da tela de erro/bloqueio para documentar e investigar.
- Passo 2: Reforçar Fonte 4 — ligar 135 e pedir CNIS detalhado (não basta o sumário). Pedir datas exatas.
- Passo 3: Aguardar 24-48h antes de nova tentativa (conservador, na falta de doc oficial).
- Passo 4: Nova sessão KBA com Beto em videochamada (Cenário A+) e cliente respondendo com tempo.
- Tempo estimado: 30 min API + 24-48h de cooldown + nova sessão.
- Executor: Beto remoto.

**Script WhatsApp (copiar e colar):**
> *"[Nome], essas perguntas do INSS pegam mesmo. Vamos com calma — vou ligar no 135 de novo e pedir os anos certinhos da sua história. Aí a gente espera um diazinho pro sistema liberar nova tentativa, e na próxima a gente vai com tudo organizado. Pode ser?"*

**Travas prováveis:** T1.16 (este é o ponto), T1.18 (bloqueio total — risco).
**Se travar:** se cliente erra novamente após reforço → migrar para Rota 1 ou Rota 3.

**Fallback:** Rota 1 — Internet Banking se bancarizado.

**Se fallback também falhar:** Rota 3 — balcão INSS. Escalonar: *"C13 — KBA falhou 2x mesmo com 135. Cliente migrado para [Rota X]."* Também documentar para investigação L_KBA_1.

---

### CENÁRIO C14: Cliente com senha esquecida e sem biometria para recuperar

**Perfil:** Cliente já teve conta Prata no passado (recebe aposentadoria/pensão), mas esqueceu a senha. Tentou recuperar e o sistema pede biometria facial — que não funciona.
**Hook 0 result:** P5=Aposentadoria/Pensão → R5 (investigar este cenário)
**Nível atual:** "Prata adormecida" — credencial existente sem acesso
**Jornada MC:** Φ₄ majoritariamente

**Rota principal:** Rota 0 — KBA Previdenciário (que termina em "Cadastrar Senha")
- Passo 1: Confirmar que cliente já recebe benefício (P5 = Aposentadoria/Pensão) — então tem CNIS rico.
- Passo 2: Entrar pelo Meu INSS (que oferece Selo Previdenciário também para recuperação de acesso).
- Passo 3: Fluxo padrão KBA com cola legítima (foto da carta de concessão, valor da aposentadoria, etc.).
- Passo 4: Telas 1/2/3 + Cadastrar Senha **NOVA** (que substitui a esquecida).
- Tempo estimado: 25-35 min.
- Executor: Beto remoto + cliente.

**Script WhatsApp (copiar e colar):**
> *"[Nome], a senha esquecida tem solução boa. O próprio INSS deixa a gente cadastrar uma senha nova, mas pede umas perguntas pra confirmar que é o senhor mesmo. As perguntas são sobre a sua aposentadoria. Tem aí a carta de concessão, ou um extrato do banco mostrando o valor que recebe?"*

**Travas prováveis:** T1.16, T1.10.
**Se travar:** ver C13.

**Fallback:** Rota 1 — Internet Banking (Caixa especialmente — quem recebe aposentadoria pela Caixa pode subir por OAuth).

**Se fallback também falhar:** Rota 3 — balcão INSS para resetar credencial. Escalonar: *"C14 — credencial Prata adormecida não recuperável remotamente."*

---

### CENÁRIO C15: Conta gov.br criada por golpista no CPF do cliente

**Perfil:** Cliente nunca criou conta gov.br, mas ao tentar criar agora, sistema diz "CPF já cadastrado". Geralmente descoberto após cliente notar saque indevido de benefício ou cadastro indevido em algum serviço.
**Hook 0 result:** dispensável — tratar diretamente como caso jurídico
**Nível atual:** N/A — conta clonada, cliente não tem acesso
**Jornada MC:** **fora do escopo digital** — caso de polícia + jurídico

**Rota principal:** Rota Jurídica — encaminhamento articulado
- Passo 1: Não tentar resolver pelo gov.br. Documentar tudo que cliente tem (tentativa de criar conta, screenshot de "CPF já cadastrado", possíveis saques indevidos).
- Passo 2: Orientar BO em delegacia local + denúncia 0800 SERPRO (Central gov.br).
- Passo 3: Encaminhar Defensoria Pública para retomada civil + Polícia Federal (crime contra identidade digital nacional).
- Passo 4: MC acompanha cliente durante todo o processo, mas não opera tecnicamente.
- Tempo estimado: 30-60 min API inicial + semanas-meses de processo.
- Executor: Beto remoto (orientação) + cliente presencial (delegacia/Defensoria).

**Script WhatsApp (copiar e colar):**
> *"[Nome], isso aqui virou caso de polícia. Alguém usou seu nome pra criar uma conta no gov.br sem você saber — isso é crime. Você não vai resolver isso pelo aplicativo, e eu também não posso entrar nessa conta porque ela tá em nome de outra pessoa. O caminho é abrir um Boletim de Ocorrência, denunciar pro INSS pelo 0800 e ir na Defensoria Pública. A gente acompanha você nisso tudo — você não tá sozinho, viu?"*

**Travas prováveis:** todas as travas da família T1.15, T3.08, T3.09.
**Se travar:** persistir no caminho jurídico. Não há atalho técnico.

**Fallback:** N/A — caminho é único.

**Se fallback também falhar:** Escalonar Alessandro imediatamente para acompanhamento estratégico: *"C15 — fraude de identidade no CPF [parcial]. Cliente em Defensoria/PF. Acompanhamento."*

---

### CENÁRIO C16: Filho quer ajudar pai idoso acamado — sem procuração

**Perfil:** Filho ativo (40-55 anos) cuidando do pai/mãe acamado (75+ anos). Quer "resolver tudo" pelo idoso. Idoso lúcido mas sem condições físicas. **Sem procuração formal.** Tentação: "me passa a senha que eu resolvo".
**Hook 0 result:** rodar para o idoso (titular dos benefícios) com filho intermediando
**Nível atual:** Bronze (idoso) ou Prata adormecida (idoso recebe aposentadoria)
**Jornada MC:** Φ₄ majoritariamente

**Rota principal:** **Recusar custódia + Procuração SPE eletrônica**
- Passo 1: Recusar guardar senha do idoso. Explicar para o filho que é veto legal (Lei 14.063/2020 + LGPD + ADR-009a).
- Passo 2: Verificar nível da conta do filho — se Bronze, **subir o filho primeiro** (sub-jornada — Cenário C01-C04 conforme perfil dele).
- Passo 3: Verificar nível da conta do idoso — se Bronze, subir via KBA (idoso lúcido pode responder em videochamada A+ com filho operando o aparelho dele).
- Passo 4: Com ambos em Prata, idoso emite procuração SPE para o filho (gov.br → SPE → 5 anos de validade).
- Passo 5: Filho passa a operar pelo próprio CPF, com procuração ativa. Tudo legal e rastreável.
- Tempo estimado: 1-3 sessões de 30-60 min cada (depende de quantos níveis precisam ser elevados).
- Executor: Beto remoto + filho síncrono + idoso síncrono.

**Script WhatsApp (copiar e colar):**
> *"[Nome do filho], entendi que você quer resolver pra seu pai. Eu ajudo, mas tem um caminho certo que protege os dois — eu nunca vou pegar a senha do seu pai, isso é proibido por lei. O caminho legal é seu pai te dar uma procuração eletrônica no gov.br. Aí você resolve tudo dele com a SUA conta, e fica tudo gravado no sistema. Vou te explicar o passo a passo. Primeiro: a sua conta gov.br tá em qual nível?"*

**Travas prováveis:** T3.01 (familiar insistindo na custódia), T3.06/T3.07 (níveis errados nas pontas).
**Se travar:** se filho se recusar a fazer SPE e exigir custódia → educação firme + escalonar Alessandro se persistir. Cliente pode não fechar com MC — preferível perder cliente do que violar ADR-009a.

**Fallback:** Cadastro de Representante Legal INSS (rota mais lenta, exige documentação física, mas funciona).

**Se fallback também falhar:** Escalonar Alessandro: *"C16 — família resistente à SPE. Educar ou liberar."*

---

### CENÁRIO C17: Curador judicial de PcD intelectual — curatela existe mas não cadastrada no INSS

**Perfil:** Família tem decisão judicial de curatela (filho/irmão/pai cuidando de PcD intelectual severo), mas nunca foi ao INSS averbar. Curado tem BPC ou aposentadoria por invalidez.
**Hook 0 result:** rodar para o curador
**Nível atual:** Bronze (curado) — irrelevante operacionalmente; Bronze/Prata (curador)
**Jornada MC:** Φ₄ majoritariamente

**Rota principal:** **Cadastro de Representante Legal INSS (curador)**
- Passo 1: Verificar conta do curador — se Bronze, subir (Cenário C01-C04 do perfil dele).
- Passo 2: Coletar documentação: decisão judicial de curatela com trânsito em julgado, certidão atualizada, RG/CPF do curado, comprovante de residência.
- Passo 3: Curador acessa Meu INSS pelo CPF dele e usa o serviço "Cadastrar Representante Legal".
- Passo 4: Anexar documentos digitalizados em PDF.
- Passo 5: Aguardar análise INSS (1-3 semanas).
- Tempo estimado: 30-45 min API + 1-3 semanas de análise.
- Executor: Beto remoto + curador síncrono.

**Script WhatsApp (copiar e colar):**
> *"[Nome do curador], como o juiz já deu a decisão de curatela pra senhora, falta só avisar o INSS. Isso é feito pela conta da senhora no Meu INSS. Vou listar os documentos que precisa: decisão judicial com carimbo, certidão atualizada, RG/CPF do [curado] e comprovante de endereço da senhora. A senhora consegue digitalizar tudo? Dá pra fotografar com o celular também. Quando tiver, a gente entra no aplicativo juntos."*

**Travas prováveis:** T3.02 (este é o ponto), análise INSS recusando por documentação incompleta.
**Se travar:** se INSS recusa → refazer com lista exata fornecida no recibo de recusa.

**Fallback:** Defensoria Pública para apoio jurídico no cadastro / TDA como alternativa (Lei 13.146/2015 Arts. 84-87 — menos invasiva que curatela mas menos reconhecida pelo INSS).

**Se fallback também falhar:** Escalonar Alessandro: *"C17 — cadastro recusado 2x. Articular Defensoria."*

---

### CENÁRIO C18: Mãe de menor de 16 anos no CadÚnico

**Perfil:** Mãe com filho menor de 16 anos PcD. Precisa do CadÚnico atualizado para o filho receber BPC LOAS infantil (LC 142/2013). CPF da criança herda registro do responsável.
**Hook 0 result:** rodar para a mãe
**Nível atual:** Bronze ou Prata (mãe)
**Jornada MC:** Φ₀ + Φ₁ (BPC infantil)

**Rota principal:** Φ₀ presencial CRAS + Φ₁ Meu INSS (após CRAS)
- Passo 1: Pré-cadastro CadÚnico online em gov.br/cadunico (Bronze basta).
- Passo 2: Agendamento no CRAS local + comparecimento da mãe com criança + documentos (RG/CPF de todos, comprovantes de renda, comprovante de residência, laudo médico do filho).
- Passo 3: Após CRAS confirmar inscrição, mãe abre DER de BPC LOAS no Meu INSS (exige Prata da mãe — pode ser KBA se ela tem contribuição, banco, etc.).
- Passo 4: Aguardar perícia médica do INSS para o filho (3-6 meses tipicamente).
- Tempo estimado: 30-45 min API + semanas-meses de calendário.
- Executor: Beto remoto + mãe presencial CRAS + INSS.

**Script WhatsApp (copiar e colar):**
> *"Dona [nome], pro [filho] receber o BPC, primeiro tem que estar tudo certo no CadÚnico, e o CadÚnico só fica oficial depois que a senhora vai no CRAS pessoalmente. Vou te ajudar a fazer o pré-cadastro no celular, marcar o CRAS perto da sua casa, e depois a gente abre o pedido no INSS. Vai dar uns meses até sair, mas fica tudo registrado em ordem. Pode ser?"*

**Travas prováveis:** T3.11 (este é o ponto), agendamento CRAS demorado.
**Se travar:** se CRAS está com fila >3 meses, articular Defensoria para demanda judicial.

**Fallback:** Defensoria Pública para BPC judicial se via administrativa demora demais.

**Se fallback também falhar:** Escalonar Alessandro: *"C18 — CRAS bloqueado / BPC negado. Defensoria."*

---

## 3. Mapa biométrico operacional

| Base | O que desbloqueia | Como verificar se o cliente tem | Tempo de ativação | Cobertura estimada público MC |
|---|---|---|---|---|
| **TSE — biometria eleitoral** | Selo Ouro via app gov.br (selfie liveness) | *"O senhor já votou com aquela máquina que tira foto e pede o dedo? Foi quando, mais ou menos?"* — confirmar coleta posterior a ~2010 | 5 min se biometria funciona | ~50-60% da população adulta brasileira (alto entre <60 anos, baixo entre 75+) |
| **DENATRAN/SENATRAN — CNH** | Selo Ouro via app gov.br | *"O senhor tem CNH? A foto é recente — dos últimos 10 anos?"* | 5 min | ~30-40% público MC (baixo entre BPC, idoso rural; alto entre urbano <65 anos) |
| **CIN — Carteira de Identidade Nacional** | Selo Ouro via QR-Code | *"O senhor já trocou o RG pela carteira nova com QR-Code?"* | 5 min após emissão | <10% hoje (em ramp-up — alvo 80% até 2032) |
| **Banco do Brasil (BB)** | Selo Prata via OAuth | *"O senhor tem conta no Banco do Brasil? Usa o app no celular? Tem aquela senha de 6 números?"* | 5 min | ~25-30% público MC |
| **Caixa Econômica Federal** | Selo Prata via OAuth — **principal canal MC** (alta penetração entre BPC/BF) | *"A senhora usa o Caixa Tem? Aquele que cai o Bolsa Família/BPC?"* | 5 min | ~50-60% público MC (mais alto que outros bancos) |
| **Bradesco** | Selo Prata via OAuth | *"O senhor tem conta no Bradesco? Usa o aplicativo deles?"* | 5 min | ~10-15% público MC |
| **Itaú** | Selo Prata via OAuth | *"O senhor tem conta no Itaú? Tem o app do banco?"* | 5 min | ~10-15% público MC |
| **Santander** | Selo Prata via OAuth | *"O senhor tem conta no Santander? Usa o app?"* | 5 min | ~5-10% público MC |
| **Sicoob** | Selo Prata via OAuth — **mas heterogêneo** (cooperativas regionais com implementações divergentes — ver lacuna E5 L5) | *"O senhor é cooperado do Sicoob? Sabe se tem o app no celular?"* | 5-15 min (variável) | ~5-10% público MC, alto em interior MG/PR/RS |
| **Sicredi** | Selo Prata via OAuth — mesma heterogeneidade Sicoob | *"O senhor é do Sicredi? Tem o app?"* | 5-15 min (variável) | ~5-10% público MC, alto em interior RS/PR/MG |
| **Banrisul** | Selo Prata via OAuth | *"O senhor tem conta no Banrisul?"* | 5 min | <5% público MC, alto exclusivamente em RS |
| **BNB — Banco do Nordeste** | Selo Prata via OAuth | *"O senhor tem conta no BNB?"* | 5 min | <5% público MC, alto em NE rural |
| **Outros bancos credenciados** | Selo Prata via OAuth | Consultar lista atualizada FEBRABAN [E1 29] | 5-15 min | Cauda longa |
| **Selo Previdenciário KBA — Dataprev** | Selo Prata (NÃO CONFIRMADO se vale fora do Meu INSS — ver lacuna L_KBA_2) | *"O senhor já trabalhou registrado alguma vez? Tem CTPS, papel do INSS, ou lembra do trabalho?"* (Hook 0 P1-P4) | 15-30 min com inteligência preparada | ~30-40% público MC (= Bronze com contribuição registrada) |
| **Balcão INSS presencial** | Selo Bronze qualificado / Prata via servidor INSS | *"O senhor consegue ir numa agência do INSS? Qual a mais perto da sua casa?"* | 5 min API + 7-21 dias calendário | 100% (último recurso) |
| **Balcão gov.br presencial** | Selo Prata em postos gov.br (em alguns shoppings, prefeituras, Detrans) | *"O senhor já viu alguma vez um balcão do gov.br no shopping ou em prefeitura?"* | 1 visita | ~20% (cobertura geográfica limitada) |

**Notas operacionais Beto:**
- **Pergunta-chave do banco:** *"Usa o aplicativo no celular?"* — não basta ter conta. Cliente que tem conta apenas pra receber benefício e nunca abriu o app não tem senha eletrônica ativa, e o OAuth gov.br precisa da sessão app.
- **Caixa é o campeão MC** — sempre testar Caixa primeiro entre os bancos, especialmente para BPC/BF.
- **Sicoob/Sicredi** — cuidado: cada cooperativa regional implementa OAuth diferente. Documentar por cooperativa as primeiras 5-10 jornadas.
- **CIN** — ainda raríssimo, mas quando aparece é o caminho mais rápido para Ouro. Perguntar se cliente trocou recentemente o RG.

---

## 4. Catálogo de rotas consolidado

### Rota 0 — Selo Previdenciário KBA

**Pré-requisitos (todos obrigatórios):**
1. CPF ativo.
2. **Contribuição previdenciária registrada em algum momento** (CLT, MEI, contribuinte individual, doméstica registrada). Cliente que **NUNCA** contribuiu (BPC puro, informal vitalício) **NÃO** consegue — fluxo termina na opção "NUNCA CONTRIBUÍ" do questionário.
3. Conhecimento (próprio ou via cola legítima MC) de dados básicos do histórico contributivo: ano da última contribuição, empregador(es), valores aproximados.
4. Smartphone ou PC com internet estável.
5. Não estar bloqueado por tentativa anterior errada (lacuna L_KBA_1 — cooldown desconhecido).

**Passo a passo detalhado (baseado nas 3 telas empíricas de 08/05/2026):**

**TELA 1 — Gateway do Selo Previdenciário** (`meu.inss.gov.br/#/selo-previdencia`)
- Aparece automaticamente quando cliente Bronze tenta acessar serviço bloqueado no Meu INSS.
- Texto: *"Precisamos confirmar algumas informações para que você possa acessar o Meu INSS."*
- Botões: **Sair do Meu INSS** / **Continuar**.
- Ação Beto: orientar cliente a clicar **Continuar**. Explicar: *"Esse aqui é o INSS te oferecendo um caminho mais rápido."*

**TELA 2 — Autorização OAuth KBA** (`sso.acesso.gov.br/authorize?...&scope=govbr_adquirir_confiabilidade_kba_previdencia`)
- Título: *"Autorização para compartilhamento de Dados Pessoais"*.
- Serviço: KBA (Dataprev).
- Dados solicitados: Identidade gov.br, Nome e foto, "Adquirir confiabilidade através de questionário on-line da Previdência".
- Botões: **Negar** / **Autorizar**.
- Ação Beto: orientar **Autorizar**. Explicar: *"Aqui o sistema tá pedindo permissão pra te fazer as perguntas. É como se fosse a porta da entrevista."*

**TELA 3 — Questionário KBA Dataprev** (`cidadao.dataprev.gov.br/cadastroDni/pages/segurado/questionarioKBA.xhtml`)
- Stepper: Dados Pessoais ✓ → **Validar Dados (atual)** → Habilitar Cadastro → Cadastrar Senha.
- Pergunta exemplo: *"Qual o ano da sua última contribuição para a Previdência Social?"* — opções (2008, 2024, 2003, 2012, NUNCA CONTRIBUÍ).
- Outras perguntas prováveis (a confirmar empiricamente): última empresa, valor aproximado de salário, ano de admissão de algum vínculo.
- Quantidade exata de perguntas: **a confirmar** (estimativa: 3-5).
- Ação Beto: **NÃO ler a pergunta para sugerir resposta**. Cliente lê e responde sozinho. Beto pode reforçar: *"Pensa com calma, é sobre sua história."* Se cliente travar 30+ segundos, Beto pode dizer: *"Lembra que sua carteira/CNIS mostra [tal ano]? Confere o que aparece aí na pergunta."* — devolvendo ao cliente o próprio dado, sem dar gabarito.
- Após acerto das perguntas: **Habilitar Cadastro** → **Cadastrar Senha** (cliente cria nova senha gov.br) → fim. Conta sobe para Prata (escopo a confirmar — L_KBA_2).

**Script de comunicação Beto — Cenário A (Preparação)**
> *"[Nome], antes da gente abrir o Meu INSS, vamos repassar juntos a sua história de trabalho — pra senhora não perder tempo travando nas perguntas. [Beto lê CNIS/CTPS organizado]. Confere comigo: foi assim mesmo? [...] Tudo certo, agora abre o Meu INSS. Vai aparecer um botão 'Continuar' — clica. Aí vai pedir 'Autorizar' — clica também. Aí vão começar as perguntas. Lê com calma e responde sozinha — eu tô aqui se travar."*

**Script de comunicação Beto — Cenário A+ (Videochamada assistida)**
> *"[Nome], pra ficar mais fácil, vamos fazer uma videochamada. A senhora me deixa ver a tela do seu celular pra eu ir te indicando onde clicar? Antes preciso que a senhora me autorize: estou gravando [grava áudio da autorização]. 'Senhora autoriza que eu veja a tela do seu celular para te ajudar?' [...] Obrigado. Lembra: a senhora é quem aperta os botões; eu só falo onde clicar. E nas perguntas do INSS, a senhora lê e responde — não posso te dar a resposta, só te lembrar do que tá na sua carteira."*

**Travas prováveis e solução:**
| Trava | Solução |
|---|---|
| T1.10 (timeout Dataprev) | Reagendar para depois das 22h, fim de semana, ou manhã cedo (<7h). |
| T1.16 (cliente trava na pergunta) | Reforçar inteligência contributiva via 135. Reagendar com mais preparação. **NÃO dar gabarito**. |
| T1.17 (Dataprev cai durante questionário) | Aguardar e recomeçar. Documentar tela de erro. |
| T1.18 (cliente errou e foi bloqueado) | Aguardar 24-48h conservadoramente. Mudar para Rota 1 ou 3 se persistir. |
| T2.04 (internet instável) | Reagendar para janela de baixa carga. |
| T2.06 (analfabeto digital) | Migrar para Cenário A+ (videochamada). |

**O que fazer se o cliente erra as respostas:**
1. Capturar screenshot da tela de erro/bloqueio.
2. Não tentar de novo imediatamente (risco T1.18).
3. Reforçar Fonte 4 (135 com mais detalhe).
4. Aguardar 24-48h.
5. Se após 2 falhas ainda não passar → migrar para Rota 1 (banco) ou Rota 3 (balcão).
6. Documentar para investigação L_KBA_1 (cooldown).

**Posição ética — Cenário B (VETADO):**
> **MC tem senha em custódia → Beto abre sessão no computador MC → responde KBA pelo cidadão.**
>
> **Vetado por desenho.** Viola Lei 14.063/2020 Art. 6º (intransferibilidade), ADR-009a (custódia zero) e Termo de Uso gov.br. **É exatamente o que despachantes informais fazem.** O MC não faz isso. Inversão Cósmica: mesmas ferramentas, propósito oposto. Se o MC operasse Cenário B, deixaria de ser MC.

---

### Rota 1 — Internet Banking

**Pré-requisitos (por banco):**
| Banco | Pré-requisito específico |
|---|---|
| **Caixa** | Conta ativa + Caixa Tem instalado E LOGADO no celular do cliente (não basta ter o app — precisa estar logado e com senha eletrônica ativa). |
| **BB** | Conta ativa + app BB instalado e logado + senha de 6 dígitos. |
| **Bradesco** | Conta ativa + app Bradesco instalado e logado + biometria do app cadastrada (Bradesco usa biometria do próprio app para autorizar OAuth). |
| **Itaú** | Conta ativa + app Itaú/iToken instalado e logado + senha eletrônica. |
| **Santander** | Conta ativa + app Santander instalado e logado + token (físico ou app). |
| **Sicoob/Sicredi** | Cooperativa regional varia — confirmar se a cooperativa específica do cliente já implementou o conector gov.br. |
| **Outros** | Consultar lista atualizada FEBRABAN. |

**Passo a passo:**
- Passo 1: Confirmar pré-requisito do banco (cliente confirma que abre o app e entra normal).
- Passo 2: No app gov.br do cliente → "Aumentar nível da conta" → escolher **Internet Banking** → escolher banco.
- Passo 3: Sistema abre o app do banco (deep link) → cliente loga normalmente no banco → app do banco mostra tela de consentimento "Compartilhar dados com gov.br" → cliente clica **Autorizar**.
- Passo 4: Volta automaticamente para o app gov.br → tela "Selo Prata aplicado".
- Passo 5: Beto confirma com o cliente que aparece "Prata" no perfil.
- Tempo total: 8-15 min.

**Script de comunicação Beto:**
> *"[Nome], vamos pelo banco. É bem rápido — 5 minutos. A senhora abre o aplicativo do gov.br no celular, eu vou falando onde clicar. Vai pedir pra escolher o banco — escolhe o [Caixa/BB/etc.]. Aí vai abrir o aplicativo do banco — a senhora entra com sua senha de sempre, autoriza, e pronto. Vamos?"*

**Travas e soluções:**
| Trava | Solução |
|---|---|
| Banco rejeita OAuth | Verificar versão atualizada do app banco. Se versão atualizada e ainda rejeita → trocar de banco se cliente tem outro, ou Rota 0/2/3. |
| Cliente esqueceu senha do banco | Recuperar senha eletrônica antes (geralmente: agência presencial). |
| Cliente nunca usou o app | Pedir gerente do banco para ativar internet banking presencial — cliente terá senha em poucos minutos. |
| Sicoob/Sicredi cooperativa não suporta | Consultar lista atualizada; migrar Rota 0 ou 3. |

---

### Rota 2 — Reconhecimento facial assistido (câmera traseira)

**Pré-requisitos:**
1. Biometria coletada em TSE (votou com biometria) ou SENATRAN (CNH com foto recente, <10 anos).
2. Aparelho com câmera traseira funcional (mesmo aparelho simples geralmente tem traseira melhor que frontal).
3. **Familiar local** disponível para operar o aparelho de frente para o cliente — Rota 2 não roda só com Beto remoto.
4. Boa iluminação (idealmente luz do dia, indireta).

**Passo a passo:**
- Passo 1: Treinar familiar em videochamada por 5-10 min — explicar o movimento do liveness ("vire a cabeça devagar para a direita", etc.).
- Passo 2: Limpar lente da câmera traseira. Verificar luz.
- Passo 3: No app gov.br → "Aumentar nível" → "Reconhecimento facial" → quando solicitar selfie, **inverter a câmera para traseira** (varia por modelo: alguns têm botão "trocar câmera" na própria tela do liveness).
- Passo 4: Familiar segura o aparelho com câmera traseira apontada para o rosto do cliente; cliente faz o liveness.
- Passo 5: Aguardar processamento (~30s-2min).
- Tempo total: 20-40 min (incluindo treino do familiar).

**Script de comunicação Beto:**
> *"[Nome do familiar], a câmera da frente do celular do [cliente] tá fraca demais. Vou ensinar você a usar a câmera de trás (a melhor) pra fazer a foto. Você fica de frente pro [cliente], segurando o celular firme com a tela virada pra você e a câmera grande virada pra ele. Quando o aplicativo pedir 'vire a cabeça devagar', você fala alto pro [cliente] virar. A gente vai testar uma vez antes de valer."*

**Travas e soluções (especialmente bloqueio 24h):**
| Trava | Solução |
|---|---|
| T1.01 (não reconhece rosto) | Trocar luz, retirar óculos. Limite 3 tentativas — depois para. |
| **T1.02 (bloqueio 24h)** | **Não tentar de novo na janela de 24h.** Migrar para Rota 0 ou 1 imediatamente. Voltar para Rota 2 após 24h **com pré-coaching reforçado**. |
| T1.06 (fisionomia muito alterada) | Rota 2 não vai resolver. Migrar Rota 0 (KBA) ou Rota 3. |
| T1.04 (movimento errado) | Pré-coaching obrigatório com simulação fora do app. |

---

### Rota 3 — Presencial (balcão INSS / agência bancária / posto CIN)

**Quando acionar (último recurso):**
- Cliente sem contribuição (Rota 0 fechada) **E** sem internet banking (Rota 1 fechada) **E** sem biometria utilizável (Rota 2 fechada).
- **OU** cliente em Rota 0/1/2 falhou repetidamente.
- **OU** cliente prefere presencial (idoso desconfiado de digital — direito do cliente).
- **OU** trabalhador rural com aposentadoria rural (precisa balcão para juntar documentação produção rural).

**Checklist do que o cliente precisa levar (variável por destino):**

| Destino | Documentos obrigatórios | Documentos úteis |
|---|---|---|
| **Balcão INSS** | RG, CPF, comprovante de residência | CTPS antigas, decisões judiciais, declaração sindical (rural), laudos médicos (BPC PcD), procurações |
| **Agência bancária (selo Prata via TAA)** | RG, CPF, cartão da conta, senha eletrônica | Smartphone com app gov.br instalado |
| **Posto Identificação Civil (CIN)** | Certidão de nascimento OU casamento, RG antigo, CPF, comprovante de residência | Foto 3x4 (alguns postos pedem) |
| **CRAS (CadÚnico)** | RG/CPF de TODOS os membros da família, comprovantes de renda, comprovante de residência | Laudos de PcD, certidões |

**Como agendar:**
- **INSS:** ligar 135 (cliente em standby; se cliente Bronze já permite agendamento pelo Meu INSS, fazer pelo app é mais rápido).
- **Banco:** ir direto à agência (geralmente sem agendamento) ou via app do banco.
- **Posto CIN:** site do Detran/SSP do estado (varia muito por estado — alguns têm app, outros telefone).
- **CRAS:** agendamento direto na unidade local — visita inicial geralmente ocorre.

**Script de comunicação Beto:**
> *"[Nome], pelo seu caso, o caminho mais seguro é a gente marcar uma visita no [INSS/banco/CRAS] perto da sua casa. Aí o pessoal de lá já resolve o que precisa ser resolvido. Vou marcar pra senhora — qual dia da semana é melhor? Vou te mandar a lista de documentos que precisa levar. Quando voltar do atendimento, me avisa que eu continuo daqui."*

**Protocolo Anjo Local (quando acionar, o que o anjo faz):**
- **Quando acionar:** cliente sem condições de comparecimento sozinho (acamado, PcD severo, sem familiar disponível, sem transporte) E sem outra rota viável.
- **O que o anjo faz:**
  1. Visita o cliente em casa.
  2. Documenta condições (foto da casa, foto do cliente com cliente autorizando, áudio de consentimento).
  3. Acompanha o cliente ao destino presencial OU executa procedimento local autorizado (operar aparelho do cliente sob orientação Beto).
  4. **Nunca** substitui a identidade do cliente (mesmas regras Cenário A+).
  5. Submete relatório pós-visita ao MC.

---

## 5. FAQ operacional — 30 perguntas

### Sobre KBA

**1. "O cliente tem conta Bronze e nunca ouviu falar de nível. O que eu faço primeiro?"**
- Resposta direta: rodar Hook 0 (Seção 1) — 5 perguntas em 2-5 min. Não tentar adivinhar a rota antes.
- Cenários: aplicável a quase todos (C01-C18 começam pelo Hook 0).
- Rota recomendada: definida pelas regras R1-R5 do Hook 0.
- Trava E5: nenhuma específica — Hook 0 é prevenção contra trabalhar em rota errada.

**2. "O cliente está no questionário KBA e não sabe a resposta. Posso dizer pra ele?"**
- Resposta direta: **NÃO**. Você pode reforçar o que está na CTPS/CNIS dele ("lembra que sua carteira mostra 2008?"), mas nunca ler a opção da tela e dizer "clica nessa". A linha é: você devolve o dado próprio dele; você não dá gabarito da prova.
- Cenários: C01-C04, C13.
- Rota recomendada: Rota 0 (KBA Cenário A ou A+).
- Trava E5: T3.12 (risco ético — protocolo dedicado).

**3. "O cliente errou o KBA. Bloqueou? Pode tentar de novo?"**
- Resposta direta: **comportamento de bloqueio do KBA é desconhecido (lacuna L_KBA_1)**. Conservadoramente, aguardar 24-48h antes de tentar de novo. Reforçar inteligência contributiva via 135 nesse intervalo. Se errar 2x → migrar para Rota 1 ou 3.
- Cenários: C13.
- Rota recomendada: aguardar + reforço; depois Rota 0 de novo ou migração.
- Trava E5: T1.18.

**4. "O KBA deu certo. Isso vale como Prata pra tudo ou só pro Meu INSS?"**
- Resposta direta: **não confirmado (lacuna L_KBA_2)**. Hipótese conservadora: vale só dentro do Meu INSS. Se cliente precisa de Φ₀ digital ou e-CAC depois, testar empiricamente. Se travar fora do INSS, migrar para Rota 1 ou repetir elevação por outra via para garantir Prata pleno.
- Cenários: todos pós-KBA.
- Rota recomendada: testar; se cobertura insuficiente, complementar com Rota 1.
- Trava E5: lacuna L_KBA_2 do E5 §7.

**5. "O cliente nunca contribuiu pro INSS. O KBA funciona?"**
- Resposta direta: **NÃO**. O questionário tem a opção explícita "NUNCA CONTRIBUÍ" — fluxo termina sem selo. Migrar imediatamente para Rota 1 (banco — funciona para BPC puro) ou Rota 3 (balcão).
- Cenários: C06, C07, C08.
- Rota recomendada: Rota 1 (Caixa principalmente) ou Rota 3.
- Trava E5: T2.15.

### Sobre biometria e reconhecimento facial

**6. "O reconhecimento facial não funciona de jeito nenhum. Já tentou 5 vezes."**
- Resposta direta: parar imediatamente. Pode estar prestes a bloquear 24h. Migrar para Rota 0 (se há contribuição) ou Rota 1 (se bancarizado). Tentar facial de novo só após 24h **e** com Cenário A+ (videochamada com pré-coaching).
- Cenários: C12.
- Rota recomendada: Rota 0 ou Rota 1.
- Trava E5: T1.01, T1.02 iminente.

**7. "O cliente está bloqueado 24 horas. O que fazer?"**
- Resposta direta: o bloqueio é só do reconhecimento facial. Outras rotas continuam abertas. Rodar Hook 0 e ir para Rota 0 (KBA) ou Rota 1 (banco) imediatamente — não é necessário esperar.
- Cenários: C12.
- Rota recomendada: Rota 0 ou Rota 1.
- Trava E5: T1.02.

**8. "O celular do cliente é muito velho e o app gov.br não instala."**
- Resposta direta: Android <8 ou iOS <13 não suporta. Pedir aparelho de familiar emprestado para a sessão; ou ir presencial (Rota 3). KBA pode ser feito em PC/computador também — verificar se cliente tem acesso a computador (lan house, biblioteca pública).
- Cenários: variante de C03 ou C07.
- Rota recomendada: aparelho emprestado + Rota 0/1, ou Rota 3.
- Trava E5: T1.08.

**9. "O cliente é PcD visual e não consegue alinhar o rosto na câmera."**
- Resposta direta: Rota 2 está descartada. Tentar Rota 0 (KBA não exige selfie — perfeito para PcD visual) com TalkBack/VoiceOver ativado e Cenário A+. Se não há contribuição → Rota 1 (banco com TalkBack) ou Rota 3.
- Cenários: variante de C05.
- Rota recomendada: Rota 0 com Cenário A+.
- Trava E5: T2.08.

**10. "O cliente tem Parkinson e a foto sai tremida."**
- Resposta direta: **Rota 0 KBA é a melhor opção** — KBA não exige selfie, contorna o tremor inteiramente. Se há contribuição → KBA. Se não → Rota 1 com aparelho apoiado em superfície fixa, ou Rota 2 com familiar segurando aparelho.
- Cenários: C05.
- Rota recomendada: Rota 0.
- Trava E5: T2.07.

### Sobre bancos

**11. "O cliente tem conta na Caixa mas nunca usou o app. Dá pra fazer por lá?"**
- Resposta direta: precisa primeiro ativar o internet banking. Mais rápido: cliente vai à agência da Caixa e o gerente ativa o Caixa Tem na hora (5-10 min). Depois Beto retoma Rota 1 remotamente.
- Cenários: variante de C06.
- Rota recomendada: Rota 1 com pré-passo presencial Caixa.
- Trava E5: nenhuma específica.

**12. "O cliente é do Sicoob/Sicredi. Funciona igual aos grandes?"**
- Resposta direta: **depende da cooperativa regional**. Cada cooperativa Sicoob/Sicredi tem implementação OAuth potencialmente diferente — algumas funcionam perfeitamente, outras não. **Testar primeiro** com 5 min do banco; se rejeitar, migrar para Rota 0/3. Documentar a cooperativa específica.
- Cenários: variante de C03.
- Rota recomendada: testar Rota 1 + fallback Rota 0 ou 3.
- Trava E5: lacuna L5 do E5 §7.

**13. "O cliente não sabe a senha do internet banking. Melhor ir na agência?"**
- Resposta direta: sim. Recuperação de senha bancária geralmente exige presencial — ou pelo menos atendimento humano do banco (telefone). Enquanto isso, **se há contribuição, ir por Rota 0 (KBA) que não depende do banco**.
- Cenários: variante de C01-C04.
- Rota recomendada: Rota 0 se aplicável; senão presencial banco.
- Trava E5: nenhuma específica.

### Sobre representação e custódia

**14. "O filho do cliente quer fazer tudo pelo pai. Pode?"**
- Resposta direta: **pode, com procuração eletrônica SPE**. Pai e filho ambos precisam Prata. Filho não pode acessar a conta do pai (intransferibilidade Lei 14.063). Caminho legal: SPE (gov.br → Sistema Procurações Eletrônicas → outorga 5 anos).
- Cenários: C16.
- Rota recomendada: subir ambos a Prata + SPE.
- Trava E5: T3.01, T3.06, T3.07.

**15. "Tenho a senha gov.br do cliente guardada. Posso usar pra resolver rápido?"**
- Resposta direta: **NUNCA. Vetado por desenho do MC (ADR-009a)**. Apaga a senha agora e nunca mais guarda. Isso é Cenário B — exatamente o que despachantes informais fazem. MC = não MC se faz isso. Se tem dúvida, leia §7 deste documento.
- Cenários: aplicável a todos.
- Rota recomendada: recusar e oferecer SPE (C16) ou Cadastro de Representante Legal (C17).
- Trava E5: T3.05 (crítica — zero tolerância).

**16. "O cliente tem curador judicial mas o INSS não reconhece. O que fazer?"**
- Resposta direta: cadastrar o curador como representante legal no Meu INSS. Curador precisa Prata. Anexar decisão judicial + RG/CPF do curado. Análise INSS ~1-3 semanas. Se análise recusa, refazer com lista exata.
- Cenários: C17.
- Rota recomendada: Cadastro de Representante Legal INSS.
- Trava E5: T3.02.

**17. "O cliente é menor de 16 e precisa do CadÚnico."**
- Resposta direta: CPF do menor herda registro do responsável (mãe geralmente). Mãe inscreve o grupo familiar no CadÚnico via CRAS presencial. Se BPC LOAS infantil, depois abrir DER no Meu INSS pela conta da mãe (Prata).
- Cenários: C18.
- Rota recomendada: Φ₀ presencial CRAS + Φ₁ Meu INSS.
- Trava E5: T3.11.

### Sobre CadÚnico e Φ₀

**18. "A cliente é mãe solo, nunca trabalhou registrada, precisa do Bolsa Família. KBA funciona?"**
- Resposta direta: **NÃO** — KBA exige contribuição. Caminho: pré-cadastro online (Bronze basta) + CRAS presencial. Se ela usa Caixa Tem, eleva para Prata via Rota 1 e ganha o app Meu CadÚnico para acompanhar.
- Cenários: C06.
- Rota recomendada: CRAS + Rota 1 (Caixa).
- Trava E5: T2.15.

**19. "O CadÚnico precisa de Prata? Ou Bronze basta?"**
- Resposta direta: **Bronze basta** para o pré-cadastro online + atualização presencial CRAS (que é sempre presencial). **Prata** desbloqueia o app Meu CadÚnico para acompanhamento contínuo (Φ₄). Para Φ₀ entrada, Bronze é suficiente.
- Cenários: C06, C18.
- Rota recomendada: Bronze para entrar + Prata se quer acompanhar.
- Trava E5: nenhuma específica.

**20. "A cliente precisa atualizar o CadÚnico urgente. Caminho mais rápido?"**
- Resposta direta: agendamento direto no CRAS local. Atualização efetiva é **sempre presencial** com entrevistador SUAS. Pré-cadastro online ajuda a chegar ao CRAS com dados já organizados.
- Cenários: C18.
- Rota recomendada: CRAS direto.
- Trava E5: nenhuma específica.

### Sobre CNIS e documentos

**21. "O cliente tem um papel velho do INSS em casa. Serve pra alguma coisa?"**
- Resposta direta: **serve muito**. Foto pelo WhatsApp imediatamente. Se for extrato CNIS, é a melhor cola legítima para Rota 0. Se for carta de concessão, ajuda em prova de vida e em recurso CRPS. Se for decisão de aposentadoria, ajuda em revisões.
- Cenários: C04 principalmente.
- Rota recomendada: Rota 0 com CNIS físico como cola.
- Trava E5: nenhuma específica — é destravador.

**22. "A CTPS do cliente é daquelas antigas azuis. Posso usar?"**
- Resposta direta: **sim, é ouro**. Foto das páginas com carimbos. Cada carimbo dá empresa, data de admissão e data de saída. Use para reconstruir linha do tempo e como cola legítima Rota 0. Também serve como prova administrativa Lei 9.784/1999 em recursos CRPS.
- Cenários: C01, C03.
- Rota recomendada: Rota 0 com CTPS como cola.
- Trava E5: nenhuma específica — é destravador.

**23. "O cliente nunca foi ao INSS na vida. Como consigo o CNIS dele?"**
- Resposta direta: **Fonte 4 — ligar 135**. Beto liga (com cliente em standby + autorização gravada), informa CPF + dados pessoais do cidadão, pede extrato CNIS por telefone. Atendente lê ou envia por e-mail. Demora 20-30 min mas funciona.
- Cenários: C02 principalmente.
- Rota recomendada: 135 + Rota 0.
- Trava E5: nenhuma específica.

### Sobre prova de vida e Φ₄

**24. "O beneficiário precisa fazer prova de vida. Tem que ser Ouro?"**
- Resposta direta: pelo app Meu INSS, sim, exige Ouro (selfie liveness). **Mas há alternativa: prova de vida via banco pagador (TAA ou agência) — não exige Ouro nem app**. Mais simples para idoso.
- Cenários: C10.
- Rota recomendada: prova de vida no banco pagador.
- Trava E5: nenhuma específica.

**25. "Dá pra fazer prova de vida no banco ao invés do app?"**
- Resposta direta: **sim, é geralmente o caminho mais fácil**. Cliente vai à agência ou TAA do banco pagador, faz biometria (5-10 min). Banco transmite para INSS automaticamente em 24-48h.
- Cenários: C10.
- Rota recomendada: banco pagador.
- Trava E5: nenhuma específica.

### Sobre problemas graves

**26. "Acho que o CPF do cliente foi usado por golpista no gov.br."**
- Resposta direta: **não tente resolver pelo gov.br**. É crime. BO + 0800 SERPRO + Defensoria + PF (crime federal contra identidade digital). MC acompanha mas não opera tecnicamente. Escalonar Alessandro imediatamente.
- Cenários: C15.
- Rota recomendada: Rota Jurídica.
- Trava E5: T1.15, T3.08, T3.09.

**27. "O cliente perdeu o celular e não consegue mais entrar na conta."**
- Resposta direta: depende. Se cliente lembra a senha → entra de qualquer dispositivo (PC, celular emprestado). Se não lembra → cai em T1.14 (recuperação sem biometria) → KBA Previdenciário ou banco. Se 2FA estava só por SMS → recadastrar telefone (depende do canal de recuperação disponível).
- Cenários: variante C14.
- Rota recomendada: Rota 0 ou Rota 1.
- Trava E5: T1.14.

**28. "O cliente não tem documento nenhum. Nem RG."**
- Resposta direta: o caminho é emitir RG/CIN antes de qualquer rota gov.br. Direcionar para Posto Identificação Civil estadual com certidão de nascimento (que se também não tiver, segunda via na cartório de origem). Pode ser caso de Defensoria Pública para articulação.
- Cenários: variante C09.
- Rota recomendada: emitir documento + depois Rota 0/1/3.
- Trava E5: T2.13.

**29. "O cliente está acamado e não sai de casa."**
- Resposta direta: se tem contribuição **e familiar local** → Rota 0 KBA com Cenário A+ (familiar segura aparelho, cliente responde verbalmente). Se não tem familiar → Anjo Local (Seção 6) ou requisitar prova de vida domiciliar (existe esse direito — Lei 8.213). Se PcD severo → Cadastro de Representante Legal (C17).
- Cenários: C05 ou C17.
- Rota recomendada: Rota 0 A+ ou C17.
- Trava E5: T2.11.

**30. "Nenhuma rota funcionou. O que eu faço?"**
- Resposta direta: documentar tudo que tentou (Rota 0/1/2/3 com motivo de cada falha) e escalonar Alessandro com mensagem: *"Cliente [parcial], todas rotas falharam. Tentado: [lista]. Próximo passo: avaliação."* Não inventar 5ª rota. Não tentar Cenário B nunca.
- Cenários: aplicável.
- Rota recomendada: escalonar.
- Trava E5: caso atípico — investigação.

---

## 6. Protocolo do Anjo Agente Local

### Critérios para ativação (quando escalonar de Beto para Anjo)

Ativar Anjo Local quando **todas** as condições abaixo forem verdadeiras:
1. Cliente em rota presencial necessária (Rota 3 ou variantes presenciais de Rota 0/1/2).
2. Cliente sem condições de comparecimento sozinho (acamado, PcD severo, sem transporte, distância >30 km do destino).
3. Sem familiar disponível ou familiar disponível não tem capacidade técnica (analfabeto, analfabeto digital severo).
4. Beto rodou todas as alternativas remotas e nenhuma funcionou.

### Checklist pré-visita (Anjo recebe do Beto)

**Documentos:**
- [ ] Resumo do caso (3-5 linhas: perfil cliente + jornada MC + travas tentadas + objetivo da visita).
- [ ] Cópia digitalizada dos documentos do cliente que o Beto já tem (RG, CPF, CTPS, CNIS).
- [ ] Termo de Consentimento LGPD assinado pelo cliente (ou autorização em áudio).
- [ ] Endereço completo + ponto de referência + telefone do cliente.

**Equipamento:**
- [ ] Smartphone com 4G + carregador.
- [ ] Bateria externa.
- [ ] Caderno + caneta para anotações.
- [ ] Câmera (do próprio celular) para foto-documentação.

**Briefing operacional:**
- [ ] Roteiro de execução do dia (qual rota será executada, qual o objetivo).
- [ ] Lista de 3-5 perguntas que o Beto precisa que sejam respondidas/coletadas.
- [ ] Contato direto Beto via WhatsApp para tirar dúvidas em tempo real.

### Script de comunicação presencial com o cidadão

> *"Bom dia, Dona [nome] / Seu [nome]. Sou [Anjo], do Meu Cumpadre. O Beto, que tava conversando com a senhora pelo WhatsApp, me mandou aqui pra ajudar a senhora a resolver no celular o que ele não consegue fazer de longe. Tenho aqui um papel que a senhora autorizou a minha visita — quer que eu leia pra senhora? [...] Vamos abrir o celular da senhora? Eu vou te indicando, mas a senhora é quem aperta os botões — eu não toco no aparelho da senhora sem a senhora deixar."*

### Protocolo LGPD presencial — o que o Anjo PODE e NÃO PODE fazer

**PODE:**
- Ler em voz alta o que aparece na tela do cliente.
- Indicar onde clicar.
- Operar a câmera traseira para liveness (Rota 2) com cliente na frente, autorizando.
- Fotografar (com autorização) a CTPS, CNIS, RG do cliente para enviar ao Beto.
- Em casos extremos (PcD motora severa), operar fisicamente o aparelho do cliente **com cliente verbalmente confirmando cada ação e autorizando previamente em áudio gravado**.

**NÃO PODE:**
- Receber custódia da senha gov.br do cliente (mesma proibição do Beto remoto — ADR-009a).
- Operar o aparelho do cliente sem autorização explícita gravada para cada ação.
- Sair com o aparelho do cliente — todo trabalho é feito na presença e na casa do cliente.
- Responder o KBA pelo cliente (Cenário B vetado).
- Comprometer-se com prazos de concessão de benefício.
- Cobrar do cliente além do contrato MC.

### Relatório pós-visita (campos obrigatórios)

```
ID do caso MC: [parcial]
Data/hora chegada: [X]
Data/hora saída: [Y]
Endereço visitado: [Z]
Anjo responsável: [nome]

Objetivo da visita: [qual era o briefing]
Resultado: [Sucesso / Sucesso parcial / Falha]

O que foi executado:
- [passo 1]
- [passo 2]

Travas encontradas em campo:
- [lista — referenciar IDs E5 quando aplicável]

Documentos coletados (fotos):
- [lista]

Próximo passo (combinado com cliente):
- [...]

Observações livres do Anjo:
- [percepções qualitativas]

Consentimento LGPD: [sim/não — anexar gravação]
```

### Custo estimado por visita

> ⚠ Estimativa — calibrar com primeiras 10 visitas reais.

| Item | Valor estimado |
|---|---|
| Tempo Anjo (deslocamento + visita + relatório) | 3-6h |
| Deslocamento (combustível ou transporte) | R$30-150 (variável por distância) |
| Tempo Beto (pré-briefing + suporte síncrono + leitura relatório) | 1-2h |
| **Custo MC por visita estimado** | R$150-400 (depende de remuneração Anjo + deslocamento) |

**Implicação:** ativação de Anjo Local é **ordem de magnitude mais cara** que rota remota (~10x). Por isso é último recurso — e por isso o mapa de Anjos por município é ativo estratégico que deve ser construído proativamente.

---

## 7. Posição ética consolidada (INVIOLÁVEL)

> Esta seção é a tese MC. Leia antes de iniciar qualquer atendimento. Reler periodicamente.

### Os três cenários de operação KBA — decisão Alessandro 08/05/2026

#### Cenário A — Preparação (APROVADO)

> **MC colhe inteligência contributiva (uma das 4 fontes — CTPS, CNIS, memória, 135) → monta a "cola legítima" → cidadão abre sessão gov.br no PRÓPRIO celular → Beto guia pelo WhatsApp:** *"Dona Maria, vai aparecer pergunta sobre o ano. Pela sua carteira, a resposta é 2008. Clica em 2008."* **Cidadão opera o aparelho, MC orienta.**

- **Por que é legítimo:** o conteúdo da "cola" é **dado próprio do titular** (CNIS é dele, CTPS é dele, memória é dele, extrato pelo 135 também é dele — direito de acesso LGPD Art. 18, I-II). O MC organiza e devolve ao cidadão a própria história.
- **Não viola Lei 14.063/2020 Art. 6º:** a sessão é do cidadão, no aparelho do cidadão, com identificação do cidadão.

#### Cenário A+ — Operação assistida com sessão compartilhada (APROVADO com protocolo)

> **Cidadão em videochamada WhatsApp com Beto. Beto vê a tela do cidadão (compartilhamento). Cidadão clica onde Beto indica. Tudo gravado com consentimento.**

**Protocolo obrigatório:**
1. Consentimento explícito gravado no início.
2. Cidadão sempre digita as próprias credenciais e clica nos próprios botões — Beto **nunca** opera o aparelho do cidadão remotamente.
3. Sessão gravada do início ao fim, retenção 5 anos.
4. Auditoria amostral 100% das primeiras 50 sessões, depois 10% rotativo.

#### Cenário B — Operação delegada (VETADO POR DESENHO)

> **MC tem senha em custódia → Beto abre sessão no computador do MC → responde KBA pelo cidadão.**

**Vetado.** Viola simultaneamente:
1. **Lei 14.063/2020 Art. 6º** — vedação à transferência da identidade digital.
2. **ADR-009a do MC** — custódia zero de credenciais (princípio fundante do produto).
3. **Termo de Uso da Plataforma gov.br** — intransferibilidade da conta.

**Por que importa diferenciar:** este é exatamente o que despachantes informais fazem. A diferença entre o MC e um despachante não é a tecnologia (são as mesmas ferramentas: WhatsApp, smartphone, conta gov.br). A diferença é o **vetor ético**: o despachante captura a identidade do cliente; o MC **recusa** capturar e devolve agência ao cliente.

**Inversão Cósmica:** mesmas ferramentas, propósito oposto. O Cenário B destruiria a tese do MC — não apenas seria ilegal, seria **conceitualmente o mesmo produto que o MC se propõe a substituir**.

### Regra de ouro

> *"Se a Dona Zilda soubesse exatamente o que estou fazendo agora, ela ficaria tranquila? Se sim, prossiga. Se não, pare e pergunte ao Alessandro."*

A regra de ouro é a heurística rápida quando o caminho não está claro. Se você sente desconforto em descrever para a cliente o que está fazendo (em palavras simples, sem jargão), provavelmente está em zona cinza ou já cruzou a linha. Pare.

### As 5 coisas que o operador NUNCA faz

1. **Nunca entra na conta gov.br do cliente.** Mesmo que ele peça. Mesmo que pareça mais rápido. Mesmo que seja "só pra ver". A sessão é dele, no aparelho dele.
2. **Nunca responde questionário pelo cliente.** Você pode devolver o dado próprio dele (CNIS, CTPS); você não pode dar gabarito. Se ele não consegue responder, você não responde por ele — você reagenda ou migra de rota.
3. **Nunca guarda senha fora do Bitwarden MC.** Bitwarden MC é cofre de credenciais **do MC** (acessos a 135, ferramentas internas, etc.) — **nunca** guarda credencial gov.br de cliente lá. Cliente nem mesmo deve te enviar a senha gov.br dele — se ele mandar, você responde *"prefiro não receber sua senha — ela é só sua, eu te guio para você usar"* e apaga a mensagem.
4. **Nunca promete prazo de concessão do INSS.** O INSS tem prazos legais, mas a prática varia muito. Você pode dizer *"o INSS costuma analisar em X-Y semanas, mas pode demorar mais"*. Você não diz *"em 30 dias está aprovado"*.
5. **Nunca cobra além do Φ₁/Φ₀ contratado.** Se o cliente pedir favor extra ("ajuda meu vizinho também"), avise que é outro contrato. Se pedir trabalho fora de escopo (declaração de IR, registro de marca, etc.), avise que MC não atende — encaminhe para profissional adequado.

---

## 8. Métricas de acompanhamento

Métricas que o MC deve rastrear a partir do primeiro caso. **Meta inicial: medir até N≥50.** Sem meta numérica até ter base estatística.

| Métrica | Definição | Fonte | Meta inicial |
|---|---|---|---|
| **TENV-MC** (Taxa de Elevação de Nível) | % clientes que precisaram elevar conta gov.br durante a jornada MC | Caso MC | medir |
| **Mix de rotas real** | Distribuição % de elevações por Rota 0/1/2/3 | Log de jornadas | medir vs. estimativa E4.1 (25/45/15/15) |
| **Tempo médio Rota 0** | Média de tempo API Humana por elevação KBA | Cronometragem por caso | medir vs. estimativa E4.1 (22 min) |
| **Tempo médio Rota 1** | Média de tempo API Humana por elevação banco | Cronometragem | medir vs. estimativa E4.1 (12 min) |
| **Tempo médio Rota 2** | Média de tempo API Humana por elevação câmera traseira | Cronometragem | medir vs. estimativa E4.1 (30 min) |
| **Tempo médio Rota 3** | Média de tempo API Humana + dias calendário por elevação balcão | Cronometragem + calendário | medir vs. estimativa E4.1 (5 min API + 7-21 dias) |
| **Taxa de sucesso Rota 0** | % tentativas KBA que terminam em selo aplicado | Log de jornadas | medir vs. estimativa (70-85%) |
| **Taxa de sucesso Rota 1** | % tentativas banco que terminam em selo aplicado | Log de jornadas | medir vs. estimativa (70-80%) |
| **Taxa de sucesso Rota 2** | % tentativas câmera traseira que terminam em selo aplicado | Log de jornadas | medir vs. estimativa (50-60%) |
| **Taxa de sucesso Rota 3** | % agendamentos balcão com selo aplicado | Log de jornadas | medir vs. estimativa (~85% quando comparece — alto no-show) |
| **Taxa de no-show Rota 3** | % agendamentos balcão sem comparecimento do cliente | Log de jornadas | medir vs. estimativa (25-35%) |
| **Taxa de escalamento para Alessandro** | % casos que chegaram a "fallback do fallback falhou" | Log de jornadas | medir |
| **Taxa de ativação de Anjo Local** | % jornadas que precisaram de Anjo presencial | Log de jornadas | medir |
| **Taxa de incidência de Cenário B (oferecimento)** | % clientes/familiares que **ofereceram** ou pediram custódia de senha (T3.01) | Log de jornadas | medir (e treinar resposta) |
| **NPS do cidadão pós-elevação** | NPS coletado 7-14 dias após selo aplicado | Pesquisa WhatsApp | medir |
| **Custo médio ponderado por elevação** | Soma (Rota_i × tempo_i × custo-hora-operador) / total elevações | Cálculo | medir vs. estimativa E4.1 (~15,4 min) |
| **Cobertura geográfica de Anjos** | Nº municípios cobertos / nº municípios atendidos pelo MC | Mapa de anjos | medir |

**Cadência sugerida de revisão:**
- **Diária (pelo Beto):** logs do dia.
- **Semanal (pelo Alessandro):** dashboard agregado, identificação de outliers.
- **Mensal:** revisão de estimativas E4.1 vs. real, ajustes de protocolo.
- **Após 50 jornadas:** primeira revisão substancial das metas (saem de "medir" para valores numéricos).
- **Após 200 jornadas:** segunda revisão; potencial v2.0 deste documento.

---

E8 gravado: G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Gestão Software\Documentação\CONTA GOV.BR PRATA OURO\MC-GOVBR-ArvoreDecisao-APIHumana-v1_0-2026-0508.md
