---
título: MC-GOVBR-E8-ParteB-Rotas-MapaBiometrico
versão: v1_0
data: 2026-05-08
status: RASCUNHO
autor: Claude Code × Alessandro Neves
parte: B de 3 (Rotas + Mapa Biométrico)
---

# MC-GOVBR — E8 Parte B — Catálogo de Rotas e Mapa Biométrico

> Documento operacional do Beto. Foco em profundidade tela-a-tela e script-pronto. Suplementa a Árvore de Decisão (E8 Parte A) e o Catálogo de Travas (E5).
>
> Convenções de status:
> - **CONFIRMADO** — observado em fonte oficial gov.br ou em teste empírico documentado.
> - **PARCIALMENTE CONFIRMADO** — parte do fluxo observado, parte inferida.
> - **NÃO CONFIRMADO** — inferência a confirmar empiricamente ou por LAI.

---

## 1. Mapa biométrico operacional

> Cada linha responde à pergunta operacional do Beto: *"O que esse cliente tem disponível?"*. A coluna **Pergunta WhatsApp** é o que o Beto digita no zap; a coluna **Como verificar** é o critério interno de classificação.

| # | Base | O que desbloqueia | Como verificar se o cliente tem | Pergunta WhatsApp Beto | Tempo de ativação | Cobertura estimada público MC |
|---|---|---|---|---|---|---|
| **B1** | **TSE — biometria eleitoral** | Selo Ouro via app gov.br (selfie liveness baseada na biometria coletada na urna) | Cliente votou em uma urna que pediu polegar + foto. Coleta sistemática desde 2008, intensificada 2018-2024. Cobertura nacional ~75% do eleitorado. | *"O senhor / a senhora já votou em uma máquina que tirou foto e pediu o dedo? Foi quando, mais ou menos?"* | 5 min via selfie liveness | **~50-60%** — alto entre 30-70 anos urbano; baixo entre 75+ anos (não revalidaram); baixo no NE rural (cobertura TSE histórica menor). |
| **B2** | **DENATRAN/SENATRAN — CNH** | Selo Ouro via app gov.br | Cliente tem CNH com foto digital no sistema. Foto é digitalizada desde ~2010-2015 a depender do estado. CNH antiga em papel pode não ter foto digital utilizável. | *"O senhor / a senhora tem CNH? Tirou ou renovou ela nos últimos 10 anos? A foto da CNH é uma foto colorida tirada no Detran?"* | 5 min via selfie liveness | **~30-40%** — alto entre urbano <65 anos; baixo entre BPC (sem CNH é correlato com sem trabalho registrado); baixo idoso rural (não dirige). |
| **B3** | **CIN — Carteira de Identidade Nacional** | Selo Ouro via QR-Code | Cliente já trocou o RG antigo pela CIN nova (com QR-Code, CPF como número único). Emissão começou 2022, ramp-up gradual estado-por-estado. | *"O senhor / a senhora trocou o RG nos últimos 2-3 anos? A nova carteira tem aquele código quadrado (QR-Code) atrás?"* | 5 min via QR-Code | **<10% hoje** — em ramp-up; alvo nacional de ~80% até 2032. Hoje praticamente irrelevante operacionalmente, mas vai crescer rápido. |
| **B4** | **Caixa Econômica Federal** | Selo Prata via OAuth — **principal canal MC** | Conta ativa + Caixa Tem ou app Caixa instalado, logado, e com **senha eletrônica** criada (não a senha do cartão de débito — é uma senha digital separada). | *"A senhora usa o Caixa Tem? Aquele que cai o Bolsa Família / BPC? Tem a senha de 6 números do app?"* | 5-10 min via OAuth | **~50-60%** — Caixa é o banco com maior penetração entre BPC, BF, Pé-de-Meia. **Sempre testar Caixa primeiro** entre os bancos. |
| **B5** | **Banco do Brasil (BB)** | Selo Prata via OAuth | Conta ativa + app BB instalado e logado + senha eletrônica de 6 dígitos. BB tem boa penetração entre servidor público e aposentado urbano. | *"O senhor tem conta no Banco do Brasil? Usa o app deles no celular? Tem aquela senha de 6 números?"* | 5-10 min via OAuth | **~25-30%** — alto entre aposentado urbano e funcionalismo público. |
| **B6** | **Bradesco** | Selo Prata via OAuth | Conta ativa + app Bradesco instalado e logado + biometria do app cadastrada (Bradesco usa a biometria do próprio app — selfie ou impressão digital — para autorizar o OAuth). | *"O senhor tem conta no Bradesco? Usa o aplicativo deles? Quando entra no app, ele pede sua cara ou seu dedão?"* | 5-10 min via OAuth | **~10-15%** — distribuição equilibrada urbano. |
| **B7** | **Itaú** | Selo Prata via OAuth | Conta ativa + app Itaú/iToken instalado + senha eletrônica + token (físico ou via app). | *"O senhor tem conta no Itaú? Usa o app deles? Quando faz uma transferência, ele pede um número de 6 dígitos que muda toda hora?"* | 5-10 min via OAuth | **~10-15%** — concentrado em capitais e classes B/C urbanas. |
| **B8** | **Santander** | Selo Prata via OAuth | Conta ativa + app Santander instalado + token (físico ou app). | *"O senhor tem conta no Santander? Usa o app?"* | 5-10 min via OAuth | **~5-10%** — capitais e SP/SE. |
| **B9** | **Sicoob** | Selo Prata via OAuth — **mas heterogêneo** | Cooperado com conta ativa + Sicoobnet instalado + senha eletrônica. **⚠ Cada cooperativa regional pode ter implementação OAuth diferente** (lacuna E5 L5). Algumas cooperativas ainda não habilitaram o conector. | *"O senhor é cooperado do Sicoob? Sabe se sua cooperativa tem o aplicativo no celular? Usa ele?"* | 5-15 min (variável) | **~5-10%**, alto em interior MG, PR, RS, SC. **Sempre testar antes de prometer.** |
| **B10** | **Sicredi** | Selo Prata via OAuth — mesma heterogeneidade Sicoob | Cooperado + app Sicredi + senha eletrônica. Mesmo cuidado de B9. | *"O senhor é cooperado do Sicredi? Tem o aplicativo deles?"* | 5-15 min (variável) | **~5-10%**, alto em RS, PR, SC, parte de MG. |
| **B11** | **Banrisul** | Selo Prata via OAuth | Conta ativa + app Banrisul (Banriestilo) instalado + senha eletrônica. | *"O senhor tem conta no Banrisul? Usa o aplicativo?"* | 5-10 min via OAuth | **<5%**, exclusivamente alto em RS (banco regional). |
| **B12** | **BNB — Banco do Nordeste** | Selo Prata via OAuth | Conta ativa + app BNB instalado + senha eletrônica. Importante para cliente nordestino, especialmente rural / pequeno produtor / microempreendedor com PRONAF. | *"O senhor tem conta no Banco do Nordeste? Usa o aplicativo deles? Recebe algum financiamento, tipo PRONAF, por lá?"* | 5-10 min via OAuth | **<5%**, alto em NE rural (PE, CE, BA, MA — PRONAF). |
| **B13** | **Selo Previdenciário KBA — Dataprev** | Selo Prata (NÃO CONFIRMADO se vale fora do Meu INSS — lacuna E5 L_KBA_2) via questionário Dataprev | Cliente Bronze que **tem alguma contribuição previdenciária registrada** + sabe (ou MC preparou via Hook 0) dados básicos do histórico contributivo. | Já capturado no Hook 0 (P1-P5). Critério: P1=Sim **E** (P2=Sim **OU** P3=Sim **OU** P4=respondeu) → KBA elegível. | 15-30 min com inteligência preparada | **~30-40%** público MC — equivale a fração Bronze que tem CNIS não-vazio. Maior do que parece à primeira vista (ex-doméstica registrada, MEI desativado, jovem com 1-2 vínculos curtos). |
| **B14** | **Balcão INSS presencial** | Selo Bronze qualificado / Prata via servidor INSS no atendimento; também aplica selo Prata na ocasião do protocolo de DER de aposentadoria rural (E1 [1, 17]). | Cliente consegue ir até uma agência INSS (a pé, transporte público, carona, ônibus rural). Cobertura: 1.500+ agências em todo Brasil, mas distribuição irregular — alguns municípios distam >100km da agência mais próxima. | *"O senhor consegue ir numa agência do INSS? Qual é a cidade mais próxima da casa do senhor que tem INSS?"* | 5 min API + **7-21 dias** calendário (agendamento + comparecimento + processamento) | **100% (último recurso)** — sempre disponível, mas com custo de calendário e no-show estimado em 25-35%. |
| **B15** | **Balcão gov.br presencial** | Selo Prata em postos gov.br específicos (alguns shoppings, prefeituras, Detrans-shopping) | Cliente está em município com posto gov.br físico — cobertura limitada, concentrada em capitais e regiões metropolitanas. | *"O senhor já viu algum balcão do gov.br no shopping ou em algum lugar público? Sabe se tem um perto da casa do senhor?"* | 1 visita (~30-60 min no posto) | **~20%** — cobertura geográfica desigual. Quando disponível, mais rápida que INSS. |

### Cobertura combinada estimada

> Estimativa qualitativa do **% do público-alvo MC que tem pelo menos UMA das bases B1-B15 disponível** para elevação remota (antes de cair em B14 balcão presencial).

**Hipóteses subjacentes (a calibrar com primeiras 50 jornadas):**

- Sobreposições altas: cliente que tem TSE biometria geralmente também tem CNH (B1∩B2 alto entre <65 anos urbano). Cliente Caixa Tem geralmente tem TSE (B4∩B1 alto). Cliente com contribuição (B13) geralmente tem algum banco (B13∩B4-B12 alto entre 50-70 anos).
- Sobreposições baixas: BPC puro raramente tem CNH (B-BPC∩B2 baixo). Idoso rural raramente tem TSE biometria recente (B-rural-75+∩B1 baixo).

**Estimativa por persona (continuando linha do E4.1 §3.1):**

| Persona | Tem ≥1 base remota? | Bases mais prováveis |
|---|---|---|
| Idoso urbano bancarizado, contribuiu | ~95% | B4 ou B5/B6/B7 (banco) + B13 (KBA) + frequentemente B1/B2 |
| Idoso urbano bancarizado, nunca contribuiu | ~85% | B4 (Caixa) + B1 (TSE se votou recente) |
| Idoso rural sertanejo, contribuiu (rural especial / ex-CLT rural) | ~50-60% | B13 (KBA — esta é a janela que se abre na v1.1); banco apenas se BNB ou Caixa via Caixa Tem |
| Idoso rural sertanejo, sem contribuição | ~35-45% | B4 (Caixa Tem se recebe BPC); senão **só B14** balcão presencial |
| PcD intelectual severo (curatela formal) | ~70% via curador (Cadastro de Representante Legal — bases do curador) — apenas ~10% diretamente |
| PcD motora com histórico contributivo | ~85% | B13 (KBA é ideal — não exige selfie) + qualquer banco do cliente |
| Mãe solo BPC/BF puro | ~80% | B4 (Caixa Tem é o canal padrão de BPC/BF) |
| Quilombola/indígena isolado | ~30-40% | majoritariamente B14 + parte via banco regional |

**Inferência agregada para o funil MC:**

> ~**80-85%** do público-alvo MC tem pelo menos uma base remota disponível (B1-B13, B15). Os **15-20% restantes** são clientes em situação de exclusão digital absoluta — público de B14 balcão presencial obrigatório, e potencialmente de Anjo Local quando não há condições de comparecimento.

**Implicação operacional:** o orçamento de Anjos Locais e mutirões presenciais deve ser dimensionado para **~15-20% do volume MC**, e não para um nicho marginal. Esse é o "andar de baixo" da pirâmide MC — mas em volume absoluto (com escala) é grande o suficiente para exigir infraestrutura própria.

---

## 2. Catálogo de rotas — detalhamento operacional completo

### ROTA 0 — Selo Previdenciário KBA (Dataprev)

> **Esta é a rota mais importante do catálogo.** Descoberta empírica em **08/05/2026**. Não está documentada nas 52 fontes de E1.
>
> **Status:** **PARCIALMENTE CONFIRMADA.** Telas 1-3 observadas empiricamente; Telas subsequentes (Habilitar Cadastro + Cadastrar Senha) inferidas a partir do stepper. Escopo do selo gerado é lacuna E5 L_KBA_2.

#### Pré-requisitos (obrigatórios)

1. Conta gov.br em qualquer nível (mesmo Bronze sem qualquer validação anterior).
2. CPF com **pelo menos uma contribuição previdenciária registrada** na Dataprev (vínculo CLT, contribuição autônoma como contribuinte individual, recolhimento como MEI, contribuição como segurado especial via GPS, contribuição como doméstica registrada, etc.). Quem nunca contribuiu **NÃO** entra nesta rota — opção "NUNCA CONTRIBUÍ" do questionário fecha o fluxo (E5 T2.15).
3. Acesso a **meu.inss.gov.br** (computador desktop ou smartphone com navegador moderno; o site responde também no app Meu INSS).
4. **Dado mínimo:** saber em que ano foi a última contribuição. Pode ser obtido via:
   - **Fonte 1** — CNIS físico em casa.
   - **Fonte 2** — CTPS azul antiga (carimbo da última empresa).
   - **Fonte 3** — Memória do cliente (Hook 0 P4 com tolerância +/- 1 ano).
   - **Fonte 4** — Ligação Beto ao 135 com CPF + dados pessoais do cidadão e autorização gravada.
5. Não estar em janela de cooldown por tentativa anterior errada (lacuna E5 L_KBA_1 — comportamento desconhecido).

#### Passo a passo — tela a tela

##### TELA 1 — Gateway "Selo Previdenciário"

- **URL observada:** `meu.inss.gov.br/#/selo-previdencia`
- **Quando aparece:** automaticamente, quando cliente Bronze acessa o Meu INSS e tenta entrar em serviço bloqueado pelo seu nível, **OU** ao tentar fazer login com biometria que falhou (recuperação de senha).
- **Texto observado:** *"Precisamos confirmar algumas informações para que você possa acessar o Meu INSS."*
- **Botões:** **Sair do Meu INSS** / **Continuar**.
- **Ação esperada:** clicar em **Continuar**.
- **Script Beto:** *"[Nome], esse aviso aqui é o INSS te oferecendo um caminho mais rápido. Clica em 'Continuar', tá bom?"*

##### TELA 2 — Autorização OAuth KBA

- **URL observada:** `sso.acesso.gov.br/authorize?response_type=code&client_id=code.cidadao.dataprev.gov.br&scope=openid+profile+govbr_adquirir_confiabilidade_kba_previdencia&redirect_uri=https://cidadao.datapre...`
- **Título observado:** *"Autorização para compartilhamento de Dados Pessoais"*.
- **Serviço solicitante:** KBA (operado por Dataprev, identificado pelo `client_id=code.cidadao.dataprev.gov.br`).
- **Dados que o serviço pede acesso:**
  - Identidade gov.br
  - Nome e foto
  - "Adquirir confiabilidade através de questionário on-line da Previdência" (texto literal observado)
- **Scope OAuth:** `govbr_adquirir_confiabilidade_kba_previdencia` (sufixo `_previdencia` sugere que existem variantes para outros serviços — lacuna E5 L_KBA_4).
- **Botões:** **Negar** / **Autorizar**.
- **Ação esperada:** clicar em **Autorizar**.
- **Script Beto:** *"[Nome], aqui o sistema tá pedindo permissão pra te fazer as perguntas. É como se fosse a porta da entrevista. Clica em 'Autorizar'."*

##### TELA 3 — Questionário Dataprev (Validar Dados)

- **URL observada:** `cidadao.dataprev.gov.br/cadastroDni/pages/segurado/questionarioKBA.xhtml`
- **Stepper de progresso observado:** **Dados Pessoais ✓** → **Validar Dados (atual)** → Habilitar Cadastro → Cadastrar Senha.
- **Pergunta exemplo observada:** *"Qual o ano da sua última contribuição para a Previdência Social?"*
- **Opções observadas (5):** 2008, 2024, 2003, 2012, **NUNCA CONTRIBUÍ PARA A PREVIDÊNCIA SOCIAL**.
- **Quantidade total de perguntas:** **NÃO CONFIRMADO** (estimativa: 3-5 perguntas, comum em sistemas KBA bancários — confirmar empiricamente).
- **Outras perguntas prováveis (NÃO CONFIRMADAS — inferidas):**
  - Qual foi a última empresa em que trabalhou?
  - Em que ano começou em [empresa X]?
  - Qual foi o valor aproximado do último salário registrado?
  - Quantos vínculos empregatícios tem registrados?
- **Ação esperada:** cliente lê e responde com base nos dados próprios (CTPS / CNIS / 135 / memória).
- **Script Beto (Cenário A — preparação remota):** *"[Nome], pensa com calma — é sobre a sua história. Lembra que sua carteira mostra [tal ano]? Confere o que tá aparecendo aí na tela. **Não posso te dizer qual clicar — a resposta é sua, eu só te lembro da sua própria história.**"*
- **Em caso de erro:** sistema indica erro na própria tela; comportamento exato em caso de N erros sucessivos é desconhecido (L_KBA_1).

##### TELA 4 — Habilitar Cadastro

- **Status:** **NÃO OBSERVADA** empiricamente — inferida do stepper.
- **Inferência:** após acertar as perguntas, sistema mostra confirmação de identidade e oferece "Habilitar Cadastro" — provavelmente um botão de confirmação simples.
- **Ação esperada (inferida):** clicar em "Habilitar Cadastro" / "Próximo".
- **Investigação pendente:** se há campos a preencher aqui (e-mail novo, telefone), ou só confirmação.

##### TELA 5 — Cadastrar Senha

- **Status:** **NÃO OBSERVADA** empiricamente — inferida do stepper.
- **Inferência:** cliente cria nova senha gov.br. Esta tela substitui ou complementa a senha existente (importante: clientes Bronze podem nem ter senha gov.br útil — ou esqueceram, T1.14).
- **Ação esperada (inferida):** definir nova senha (cumprindo regras de força de senha gov.br padrão: 8+ caracteres, maiúscula, minúscula, número).
- **Pós-cadastro:** conta promovida — escopo do selo é lacuna L_KBA_2.

#### Script Cenário A — Preparação remota (APROVADO)

**Quando usar:** cliente tem alguma habilidade digital + alguém ao lado para apoiar fisicamente (ou cliente sozinho consegue operar). Beto apenas orienta por WhatsApp **sem ver a tela**.

```
[antes da sessão]
Beto: "Dona [nome], vou te ajudar a subir sua conta gov.br pra senhora poder
acessar tudo do INSS. Antes da gente abrir o aplicativo, vamos repassar
juntos a sua história de trabalho — pra senhora não perder tempo travando
nas perguntas.

[Beto lê em áudio o resumo da CTPS/CNIS/135 organizado]

Beto: "Confirma comigo: foi assim mesmo que aconteceu? Tá certo?"
Cliente: "Sim"
Beto: "Ótimo. Agora vamos abrir o Meu INSS. A senhora tá com o celular na mão?
Abre o aplicativo do Meu INSS. Quando abrir, vai aparecer uma tela perguntando
se a senhora quer continuar — clica em 'Continuar'."

[após Tela 1]
Beto: "Apareceu uma tela pedindo autorização? Tem dois botões, 'Negar' e
'Autorizar'?"
Cliente: "Sim"
Beto: "Clica em 'Autorizar'."

[após Tela 2]
Beto: "Agora começam as perguntas. Lê com calma, demora o que precisar.
A resposta tá na sua história — eu não posso te dizer qual clicar, mas
posso te lembrar do que tá na sua carteira/extrato."

[durante questionário, se cliente travar]
Beto: "[Nome], lembra que a gente conversou que sua última empresa foi
[X] e o último ano foi [ano]? Olha o que aparece na tela e clica no que
faz sentido pra senhora."

[após cadastro de senha]
Beto: "Pronto, [Nome]! A senhora cadastrou a senha nova. Agora sua conta
gov.br tá em outro nível e a senhora consegue ver tudo no Meu INSS.
Tenta entrar em qualquer serviço pra confirmar."
```

#### Script Cenário A+ — Videochamada assistida (APROVADO com protocolo)

**Quando usar:** cliente com analfabetismo digital severo, tremor (Parkinson), PcD que dificulta operação independente. Beto vê a tela do cliente via compartilhamento de vídeo no WhatsApp.

**Protocolo obrigatório:**

```
[início da chamada — gravação ativada]
Beto: "Dona [nome], antes da gente começar, eu preciso que a senhora me
autorize uma coisa. Tô gravando aqui o que a gente vai conversar — a senhora
me autoriza a ver a tela do seu celular pelo vídeo, pra eu te indicar onde
clicar?"
Cliente: "Autorizo"
Beto: "E a senhora confirma que entendeu que é a senhora que vai apertar
os botões — eu não toco no celular da senhora?"
Cliente: "Sim"
Beto: "Ótimo, obrigado. [encerra gravação de consentimento e mantém gravação
da sessão] Vamos começar?"

[durante a sessão]
Beto: "[vendo Tela 1] Agora a senhora vê uma tela com um botão azul escrito
'Continuar' embaixo? Clica nele."

Beto: "[vendo Tela 2] Apareceu uma tela com letras grandes 'Autorização'?
No final tem um botão azul 'Autorizar' — clica nele."

Beto: "[vendo Tela 3 — questionário] Lê comigo a pergunta. [pausa] Pensa
com calma. A senhora lembra do trabalho na [empresa X]? Foi em [ano X]?
Olha as opções na tela — qual delas faz sentido pra senhora?"

[Beto NUNCA diz "clica na opção 2008". Diz apenas "lembra do que tá na sua
carteira" e devolve a decisão ao cliente.]
```

**Auditoria:** 100% das primeiras 50 sessões A+ revisadas pelo Alessandro; depois 10% rotativo aleatório.

#### Travas prováveis — IDs E5 + solução

| Trava E5 | Sintoma | Solução |
|---|---|---|
| **T1.10** (timeout Dataprev) | Tela em branco, erro 500, *"sistema indisponível"*. | Reagendar para **fora do horário de pico** (evitar 11h-14h dia útil; preferir 22h-7h ou fim de semana cedo). |
| **T1.16** (cliente não sabe responder) | Cliente trava 30+ segundos na pergunta sem se manifestar. | **Pausar imediatamente.** Voltar ao Hook 0 e reforçar inteligência via Fonte 2 (CTPS) ou Fonte 4 (135). Reagendar com cola legítima mais robusta. **Não dar gabarito.** |
| **T1.17** (timeout durante questionário) | Sessão expira, mensagem de erro Dataprev. | Recarregar e tentar novamente (na mesma sessão se possível). Documentar para investigação. |
| **T1.18** (cliente errou e foi bloqueado) | Mensagem de bloqueio ou similar (comportamento exato L_KBA_1). | Capturar screenshot. **Aguardar 24-48h conservadoramente** antes de nova tentativa. Enquanto aguarda, acionar **Rota 1** (banco) se aplicável. |
| **T2.04** (internet instável) | App fica girando, conexão cai mid-fluxo. | Reagendar para janela de baixa carga (manhã cedo, noite). Se cliente está em zona rural com 3G fraco, deslocar para ponto com Wi-Fi conhecido (CRAS, biblioteca, casa de parente). |
| **T2.06** (analfabeto digital) | Cliente toca em lugar errado, fecha telas, perde contexto. | Migrar de Cenário A para **Cenário A+** (videochamada). |
| **T2.15** (nunca contribuiu) | Cliente seleciona "NUNCA CONTRIBUÍ" e fluxo termina sem selo. | **Esta rota não funciona para ele.** Ir para **Rota 1** (banco — funciona para BPC puro / nunca-contribuiu se há bancarização Caixa Tem) ou **Rota 3** (balcão). |

#### Posição ética — Cenário B VETADO (transcrição literal de E4.1 §5.4)

> **Cenário B — Operação delegada (VETADO POR DESENHO):**
>
> *MC tem senha em custódia → Beto abre sessão no computador do MC → responde KBA pelo cidadão.*
>
> **Vetado.** Viola simultaneamente:
>
> 1. **Lei 14.063/2020 Art. 6º** — vedação à transferência da identidade digital.
> 2. **ADR-009a do MC** — custódia zero de credenciais (princípio fundante do produto).
> 3. **Termo de Uso da Plataforma gov.br** — intransferibilidade da conta.
>
> **Por que importa diferenciar:** este é exatamente o que **despachantes informais fazem**. A diferença entre o MC e um despachante não é a tecnologia (são as mesmas ferramentas: WhatsApp, smartphone, conta gov.br). A diferença é o **vetor ético**: o despachante captura a identidade do cliente; o MC **recusa** capturar e devolve agência ao cliente.
>
> **Inversão Cósmica:** mesmas ferramentas, propósito oposto. O Cenário B destruiria a tese do MC — não apenas seria ilegal, seria **conceitualmente o mesmo produto que o MC se propõe a substituir**.

**Operacionalização do veto:**
- Beto **nunca** pede a senha gov.br do cliente.
- Se cliente envia senha por WhatsApp espontaneamente, Beto responde *"prefiro não receber sua senha — ela é só sua, eu te guio para você usar"* e apaga a mensagem.
- Beto **nunca** abre sessão gov.br do cliente em hardware MC.
- Beto **nunca** digita resposta de KBA no aparelho do cliente em A+; ele apenas indica e o cliente clica.

#### Status da rota

**PARCIALMENTE CONFIRMADA.** O fluxo até a Tela 3 foi observado empiricamente em 08/05/2026. Pendências de confirmação:
- L_KBA_1: cooldown / bloqueio em caso de erro repetido.
- L_KBA_2: escopo do selo gerado (Prata pleno gov.br ou apenas acesso interno Meu INSS).
- L_KBA_3: persistência / expiração do selo ao longo do tempo.
- L_KBA_4: existência de outros KBA com scopes `_cadunico`, `_rfb`, etc.

#### Tempo estimado

**5-15 min** após Hook 0 e inteligência contributiva preparada — para clientes que sabem responder com tranquilidade.
**15-30 min** total incluindo pré-trabalho de revisão de inteligência contributiva.
**30-60 min** quando precisa Fonte 4 (Beto liga 135 antes).

---

### ROTA 1 — Internet Banking (banco credenciado)

#### Pré-requisitos (gerais)

1. Conta bancária ativa em banco credenciado pelo gov.br (lista B4-B12 do mapa biométrico).
2. **Acesso digital ativo:** app do banco instalado no smartphone do cliente E logado E funcionando (não basta ter conta no banco — precisa usar o app).
3. **Senha eletrônica criada:** essa é a senha digital, geralmente diferente da senha do cartão de débito do caixa físico. Cliente que só usa cartão no caixa eletrônico pode não ter senha eletrônica.
4. (Bradesco específico): biometria do app Bradesco cadastrada (selfie ou impressão digital).
5. (Itaú/Santander específicos): token físico ou app token configurado.

#### Passo a passo geral

1. Cliente **abre o app gov.br** no celular dele.
2. **Aumentar nível da conta** → escolher **Internet Banking**.
3. Lista de bancos credenciados aparece — cliente escolhe o banco dele.
4. Sistema abre **automaticamente o app do banco** via deep link (cliente precisa ter o app instalado e logado para isso funcionar).
5. App do banco mostra **tela de consentimento** *"Compartilhar dados com gov.br"* — cliente clica **Autorizar**.
6. Sistema retorna ao app gov.br → **tela de confirmação "Selo Prata aplicado"**.
7. Beto pede ao cliente para conferir o nível na própria tela inicial do gov.br.
- **Tempo total:** 8-20 min (variável por banco).

#### Script de comunicação — versão Caixa (B4)

> **Por que destacar Caixa:** maior penetração entre BPC, BF, Pé-de-Meia. Sempre testar Caixa primeiro entre os bancos (campeã do mix MC).

```
Beto: "Dona [nome], a senhora usa o Caixa Tem? Aquele que cai o BPC/Bolsa
Família?"
Cliente: "Uso sim"
Beto: "Perfeito, esse é o caminho mais rápido pra senhora. Vamos abrir o
Caixa Tem agora? A senhora tá com o celular na mão?"
Cliente: "Tô"
Beto: "Abre o Caixa Tem. Quando entrar, eu vou te indicando. Procura por uma
opção que tem 'gov.br' ou 'Mais Serviços' ou 'Aumentar nível gov.br'.
Geralmente fica no menu — três risquinhos no canto, ou uma engrenagem.
Achou?"

[se cliente acha]
Beto: "Clica nele. Vai aparecer uma tela perguntando se a senhora autoriza
compartilhar seus dados com o gov.br. Clica em 'Autorizar'.
Pronto. Agora abre o aplicativo do gov.br e me mostra o que aparece
no seu nome."

[se cliente não acha]
Beto: "Sem problema, [Nome]. Tem outro caminho — abre o aplicativo do gov.br
diretamente, vai em 'Aumentar Nível da Conta', escolhe 'Internet Banking'
e escolhe 'Caixa'. Aí ele vai abrir o Caixa Tem automaticamente."
```

#### Script de comunicação — versão Banco do Brasil (B5)

```
Beto: "Seu [nome], o senhor tem conta no Banco do Brasil? Usa o aplicativo
do BB no celular?"
Cliente: "Tenho sim"
Beto: "Tem aquela senha de 6 números pra entrar no app?"
Cliente: "Tenho"
Beto: "Beleza, vamos por aí. Abre o aplicativo do gov.br no celular do
senhor. Procura por 'Aumentar Nível da Conta'. Achou? Clica nele.
Vai aparecer uma lista de jeitos de aumentar — escolhe 'Internet Banking'
e depois 'Banco do Brasil'.
O sistema vai abrir automaticamente o app do BB. O senhor entra com sua
senha de 6 números normal. Quando entrar, o BB vai mostrar uma tela
perguntando se autoriza compartilhar dados com o gov.br — clica em
'Autorizar'.
Pronto. Volta pro app do gov.br e me diz o que apareceu no seu nome agora."
```

#### Script de comunicação — versão Bradesco (B6)

```
Beto: "Seu [nome], o senhor tem conta no Bradesco? Usa o aplicativo do
Bradesco?"
Cliente: "Sim"
Beto: "Quando entra no app do Bradesco, ele pede sua cara (foto) ou seu
dedão (digital)?"
Cliente: "Pede o dedão"
Beto: "Ótimo, então o senhor tem biometria cadastrada — perfeito pro que a
gente precisa. Abre o app do gov.br no celular. Vai em 'Aumentar Nível
da Conta' e escolhe 'Internet Banking' → 'Bradesco'.
Quando o sistema abrir o Bradesco, o senhor entra normalmente, autoriza
o compartilhamento, e pronto. Volta pro gov.br e me confirma."
```

> Para outros bancos (B7-B12), o script segue o mesmo padrão com adaptação à pergunta verificadora específica do banco (token Itaú, token Santander, qual cooperativa Sicoob/Sicredi, etc.).

#### Travas prováveis e solução (Rota 1)

| Trava E5 | Sintoma | Solução |
|---|---|---|
| Banco rejeita OAuth (não há ID E5 específico — mapeado em §3.3 do E4.1) | Após autorizar no banco, sistema gov.br não confirma Prata. | Verificar versão do app banco (atualizar na Play Store / App Store). Se persistir, **trocar de banco** (cliente pode ter mais de uma conta) ou migrar para Rota 0/3. |
| **T1.07** (app antigo) | App banco trava ao abrir, ou não abre. | Atualizar via loja de apps. |
| **T1.09** (cache) | App banco mostra erro genérico. | Limpar cache + dados do app banco + re-logar. |
| Cliente não sabe a senha eletrônica | App pede senha que cliente esqueceu / nunca criou. | Recuperar senha eletrônica (geralmente exige presencial banco) **ou** migrar para Rota 0 se há contribuição. |
| **T1.10** (timeout gov.br) | Após autorizar, gov.br demora >2 min. | Aguardar 5 min; se persistir, repetir o fluxo. |
| **B9/B10** (Sicoob/Sicredi cooperativa não suporta) | App da cooperativa não tem opção gov.br ou rejeita o OAuth. | Migrar para Rota 0 (KBA) ou Rota 3 (balcão). Documentar a cooperativa específica. |

#### Tempo estimado

**8-20 minutos**, com a maior parte sendo deep link banco → autorização → retorno gov.br. Caixa via Caixa Tem é a mais rápida (5-10 min).

---

### ROTA 2 — Reconhecimento facial assistido (câmera traseira)

#### Pré-requisitos (todos obrigatórios)

1. Smartphone com **câmera traseira funcional** (mesmo aparelho simples de R$300-500 geralmente tem câmera traseira melhor que frontal).
2. **Biometria coletada em base utilizável:**
   - **B1 (TSE)** — cliente votou em urna com biometria desde ~2010.
   - **OU B2 (DENATRAN/SENATRAN)** — cliente tem CNH com foto digital recente (<10 anos é seguro; >10 anos arriscado por divergência de fisionomia).
3. **Iluminação adequada** — luz do dia indireta, ambiente bem iluminado, **sem contraluz**.
4. **Familiar local** ou **Anjo Local** disponível para segurar o aparelho com a câmera traseira apontada para o cliente. **Rota 2 não roda só com Beto remoto** — exige presença física de outra pessoa ao lado do cliente.

#### Passo a passo

1. Beto faz **videochamada de pré-coaching** com cliente + familiar (5-10 min): explica o movimento do liveness ("vire devagar a cabeça para a direita; volte ao centro; suba o queixo levemente"), faz simulação fora do app.
2. **Limpar a lente** da câmera traseira (pano macio).
3. **Verificar luz** — janela atrás do cliente é ruim (contraluz); janela do lado do cliente é boa.
4. Cliente **abre o app gov.br** → **Aumentar Nível da Conta** → **Reconhecimento Facial**.
5. Quando o app pedir selfie, **inverter a câmera para traseira** — alguns aparelhos têm botão "trocar câmera" na própria tela do liveness; em outros, é necessário segurar o aparelho ao contrário.
6. Familiar segura o aparelho **com a tela virada para si** (vê o que está acontecendo) e a **câmera grande virada para o rosto do cliente**.
7. Familiar **fala alto** o que o app está pedindo (*"vire a cabeça devagar pra direita agora"*) — cliente executa.
8. Aguardar processamento (~30s a 2 min).
9. Se sucesso → Selo Ouro aplicado. Se falha → **parar** após 2-3 tentativas (T1.02 risco).

#### Script de comunicação — orientar o familiar local

```
Beto: "[Nome do familiar], a câmera da frente do celular do [cliente] tá
fraca demais — não dá pra fazer a foto que o INSS precisa. Mas a câmera
de trás (a maior, a que tira foto comum) é boa. O caminho é a gente usar
ela.

O senhor / a senhora vai ficar de FRENTE pro [cliente]. Vai segurar o
celular dele com a tela virada pra senhora — a senhora é que vai ver o
que tá acontecendo. A câmera grande do celular vai ficar virada pro rosto
do [cliente].

Quando o aplicativo pedir uma coisa pro [cliente] — tipo 'vire a cabeça
devagar pra direita' — a senhora fala alto pro [cliente] o que ele tem
que fazer. Ele faz, e a senhora segura o celular firme.

Vamos treinar uma vez antes? Eu vou fingir que sou o aplicativo. Pega o
celular do [cliente]. Pronto?

[treino]
Beto: 'Vire a cabeça devagar pra direita.'
[familiar fala pro cliente, cliente faz]
Beto: 'Volte ao centro.'
[treino]

Ótimo. Agora vamos abrir o app do gov.br no celular do [cliente]."
```

#### Travas prováveis e solução (Rota 2)

| Trava E5 | Sintoma | Solução |
|---|---|---|
| **T1.01** (não reconhece rosto) | "Não foi possível reconhecer." | Trocar luz, retirar óculos, refazer **no máximo 2-3 vezes**. |
| **T1.02 — BLOQUEIO 24H** | "Você atingiu o limite. Tente em 24 horas." | **NÃO TENTAR DE NOVO** na janela de 24h. Acionar **Rota 0 (KBA) ou Rota 1 (banco) imediatamente** enquanto aguarda. Voltar para Rota 2 só após 24h E com pré-coaching adicional. |
| **T1.04** (movimento errado) | Liveness não passa porque cliente vira muito rápido / muito devagar / cabeça não, só os olhos. | Pré-coaching obrigatório com simulação fora do app antes de iniciar. |
| **T1.05** (luz ruim) | "Imagem com baixa qualidade". | Mudar de ambiente; janela ao lado do cliente; lâmpada frontal difusa. |
| **T1.06** (fisionomia muito alterada) | Liveness passa mas matching falha. | **Rota 2 não vai resolver.** Migrar para **Rota 0 (KBA)** se há contribuição, ou **Rota 3 (balcão)**. |
| **T2.07** (tremor) | Aparelho mexe durante liveness. | Apoiar aparelho em superfície fixa OU exigir familiar segurando firme. |
| **T2.08** (PcD visual) | Cliente não consegue alinhar o rosto. | **Rota 2 descartada.** Ir para Rota 0 (KBA não exige selfie) ou Rota 1. |

#### Bloqueio 24h — protocolo específico

1. **Pare imediatamente** ao detectar a tela "tente novamente em 24 horas".
2. **Capture screenshot** para o caso MC.
3. **Não tente:** trocar de aparelho, reiniciar, criar nova conta — todas essas alternativas pioram o problema (podem virar T1.15 risco fraude).
4. **Acione rota alternativa imediata** (Rota 0 se há contribuição; Rota 1 se há banco; Rota 3 se nada).
5. **Se cliente realmente precisa de Ouro** (não Prata): após 24h, fazer pré-coaching mais robusto e tentar Rota 2 novamente — agora com expectativa muito mais cuidadosa de movimentos.

#### Tempo estimado

**15-40 minutos** (incluindo setup, pré-coaching do familiar, e até 2-3 tentativas no app).

---

### ROTA 3 — Presencial (balcão INSS, agência bancária ou posto CIN)

#### Quando acionar

- **Apenas quando Rotas 0, 1 e 2 falharem ou forem inviáveis para o perfil.**
- Cliente sem contribuição (R0 fechada) **E** sem internet banking ativa (R1 fechada) **E** sem biometria utilizável (R2 fechada).
- **OU** cliente em R0/R1/R2 falhou repetidamente (>2 tentativas distintas).
- **OU** cliente prefere presencial por escolha pessoal (idoso desconfiado de digital — direito do cliente).
- **OU** trabalhador rural com aposentadoria rural (precisa balcão para juntar declaração sindical, contratos de arrendamento, etc.).

#### Checklist do que o cliente precisa levar (variável por destino)

##### Para Balcão INSS

**Obrigatórios:**
- [ ] RG **OU** CNH **OU** CIN (qualquer documento de identidade com foto válido).
- [ ] CPF (pode estar no próprio RG/CNH).
- [ ] Comprovante de residência atual (≤3 meses — conta de luz, água, telefone).

**Úteis (a depender do objetivo):**
- [ ] CTPS azul antigas (se vai protocolar DER ou contestar vínculos).
- [ ] Decisão judicial (se há curatela, tutela, TDA).
- [ ] Declaração sindical (se aposentadoria rural).
- [ ] Contratos de arrendamento, notas de venda de produção (se aposentadoria rural).
- [ ] Laudos médicos (se BPC PcD ou auxílio-doença).
- [ ] Procurações (se vai operar pelo outorgante).
- [ ] Cartão do benefício (se já recebe algum).

##### Para Agência Bancária (Selo Prata via TAA)

**Obrigatórios:**
- [ ] RG/CNH/CIN.
- [ ] CPF.
- [ ] Cartão da conta + senha eletrônica (se já existe — geralmente o gerente recadastra na hora).

**Úteis:**
- [ ] Smartphone com app gov.br instalado (algumas TAAs fazem o pareamento gov.br no terminal).

##### Para Posto Identificação Civil (emitir CIN)

**Obrigatórios:**
- [ ] **Certidão de nascimento original OU certidão de casamento original** (sem isso não emite).
- [ ] RG antigo (mesmo que vencido).
- [ ] CPF.
- [ ] Comprovante de residência.

**Úteis:**
- [ ] Foto 3x4 recente (alguns postos pedem; outros tiram no balcão).

##### Para CRAS (CadÚnico)

**Obrigatórios:**
- [ ] RG/CPF de **TODOS** os membros do grupo familiar.
- [ ] Comprovantes de renda (recibo de salário, declaração de empregador, recibo de BPC/BF).
- [ ] Comprovante de residência.

**Úteis:**
- [ ] Laudos de PcD (se há membro com deficiência).
- [ ] Certidões de nascimento das crianças.

#### Como agendar

| Destino | Canal de agendamento | Tempo até atendimento |
|---|---|---|
| **INSS** | Ligação no **135** (cliente em standby ou Beto liga com autorização gravada). Alternativamente, app Meu INSS — Bronze permite agendamento (não permite DER). Se Bronze + KBA destravado, app Meu INSS ainda mais ágil. | 7-21 dias (pico 30+ dias em capitais). |
| **Banco** | Geralmente **sem agendamento** — cliente vai direto à agência em horário comercial. Para bancos digitais: agendamento via app. | 1 dia (mesma semana). |
| **Posto CIN** | Site do **Detran/SSP do estado** (cada estado tem fluxo diferente — alguns têm app, outros telefone, outros agendamento online). | Variável por estado: 1-30 dias. |
| **CRAS** | Ligação direta para a unidade local (lista pública na prefeitura). Algumas cidades têm agendamento online. | Variável: visita inicial pode ser no mesmo dia em cidade pequena, até 3 meses em capital. |

#### Script de comunicação — preparar o cliente para a visita

```
Beto: "[Nome], pelo seu caso, o caminho mais seguro é a gente marcar uma
visita no [INSS / banco / CRAS / posto CIN] perto da sua casa. Aí o
pessoal de lá já resolve o que precisa ser resolvido.

Vou marcar pro senhor — qual dia da semana é melhor pro senhor ir?
Tem que ser em horário comercial. Tem como o senhor ir de manhã ou
de tarde?

[após escolher data]
Beto: "Marquei pro senhor dia [X] às [Y] horas. Vou te mandar um lembrete
no zap um dia antes.

Antes da senhora ir, vou listar os documentos que precisa levar.
Anota aí ou guarda essa mensagem:
- [lista de documentos]

[para INSS]
"Quando o senhor chegar lá, fala assim pro servidor: 'Bom dia, vim para
[protocolar requerimento de aposentadoria por idade rural / cadastrar
representante legal / fazer prova de vida / pedir o selo Balcão Prata na
minha conta gov.br]'. Se eles perguntarem alguma coisa que o senhor não
souber responder, fala que é pra ligar comigo no [telefone Beto].

[para banco]
"Quando chegar no banco, fala pro gerente: 'Boa tarde, gostaria de ativar
minha senha eletrônica do internet banking — preciso usar pra um serviço
do gov.br'. O gerente entende, é serviço comum.

Quando voltar do atendimento, me manda mensagem aqui no zap me contando
o que aconteceu. Aí a gente continua daqui."
```

#### Protocolo Anjo Local (resumo — versão completa em E8 Parte A §6)

##### Critérios para ativar

Ativar Anjo Local quando **todas** abaixo forem verdadeiras:
1. Cliente em rota presencial necessária (R3 ou variantes presenciais).
2. Cliente sem condições de comparecimento sozinho (acamado, PcD severo, sem transporte, distância >30km do destino, ILPI sem visitação familiar regular).
3. Sem familiar disponível **OU** familiar disponível não tem capacidade técnica (analfabeto, analfabeto digital severo).
4. Beto rodou todas as alternativas remotas e nenhuma funcionou.

##### O que o Anjo faz na visita

1. Se apresenta com identificação MC + Termo de Consentimento LGPD pré-assinado pelo cliente.
2. **Acompanha** o cliente ao destino presencial (transporte) **OU** opera o aparelho do cliente na presença do cliente (sob orientação Beto remota síncrona via WhatsApp).
3. Coleta documentação física (fotos para Beto remoto).
4. **Nunca** substitui a identidade do cliente (mesmas regras Cenário A+).
5. Submete relatório pós-visita ao Beto.

##### Relatório pós-visita (campos obrigatórios)

```
ID do caso MC: [parcial]
Data/hora chegada: [X]
Data/hora saída: [Y]
Endereço visitado: [Z]
Anjo responsável: [nome]

Objetivo da visita: [briefing]
Resultado: Sucesso / Sucesso parcial / Falha

O que foi executado:
- [...]

Travas encontradas em campo:
- [IDs E5 quando aplicável]

Documentos coletados (fotos):
- [...]

Próximo passo combinado com o cliente:
- [...]

Observações livres:
- [...]

Consentimento LGPD: [áudio anexo]
```

#### Tempo estimado

- **5 min de preparo API Humana** (Beto agenda, manda lista de documentos).
- **+ 7 a 21 dias de calendário** até o atendimento presencial efetivo (variável por destino e região).
- **+ 5-10 min** após o cliente voltar do atendimento (Beto retoma jornada digital).
- Quando há Anjo Local: **3-6h Anjo + 1-2h Beto + R$150-400** custo MC por visita (E8 Parte A §6).

---

E8-ParteB gravado: G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Gestão Software\Documentação\CONTA GOV.BR PRATA OURO\MC-GOVBR-E8-ParteB-Rotas-MapaBiometrico-v1_0-2026-0508.md
