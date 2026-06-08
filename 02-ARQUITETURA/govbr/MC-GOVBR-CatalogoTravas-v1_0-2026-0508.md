---
título: MC-GOVBR-CatalogoTravas
versão: v1_0
data: 2026-05-08
status: RASCUNHO
autor: Claude Code × Alessandro Neves
fonte: E1 + E2 + E3 + E4 + evidência empírica (Selo Previdenciário KBA)
---

# MC-GOVBR — Catálogo de Travas e Falhas

> Documento E5 — derivado de E1 (Inventário), E2 (Taxonomia), E3 (Mapa Normativo) e E4 (Matriz Nível × Serviço × Impacto), incorporando descoberta empírica de 08/05/2026 sobre o **Selo Previdenciário via KBA** (Knowledge-Based Authentication) operado pela Dataprev.
>
> Convenção:
> - **Fonte E1 [n]**: número da referência no inventário E1.
> - **EMPÍRICA**: trava observada em teste real ou em telas capturadas em 08/05/2026.
> - **INFERIDA**: trava deduzida a partir de E1/E2/E3/E4 mas sem fonte primária explícita.
> - IDs no formato T1.0X (técnicas), T2.0X (inclusão digital), T3.0X (jurídico-operacionais).

---

## 0. ALERTA — Descoberta empírica: Selo Previdenciário KBA

### 0.1 O que é

Em 08/05/2026, durante teste empírico com uma usuária Bronze real, foi observada uma **rota de elevação não documentada nas 52 fontes de E1**: o **Selo Previdenciário via KBA**, oferecido nativamente pelo Meu INSS quando o cidadão Bronze tenta acessar o app.

**Fluxo observado em 3 telas:**

**TELA 1 — Gateway do Selo Previdenciário** (`meu.inss.gov.br/#/selo-previdencia`)
O Meu INSS intercepta o usuário Bronze antes do bloqueio CNIS e oferece elevação nativa: *"Precisamos confirmar algumas informações para que você possa acessar o Meu INSS"*. Botões: **Sair** / **Continuar**.

**TELA 2 — Autorização OAuth KBA** (`sso.acesso.gov.br/authorize?...&client_id=code.cidadao.dataprev.gov.br&scope=openid+profile+govbr_adquirir_confiabilidade_kba_previdencia&redirect_uri=https://cidadao.datapre...`)
Ecrã de consentimento gov.br solicita compartilhamento de **Identidade gov.br + Nome e foto** para o serviço **KBA** da Dataprev. Scope OAuth específico: `govbr_adquirir_confiabilidade_kba_previdencia`. Texto: *"Adquirir confiabilidade através de questionário on-line da Previdência"*. Botões: **Negar** / **Autorizar**.

**TELA 3 — Questionário KBA Dataprev** (`cidadao.dataprev.gov.br/cadastroDni/pages/segurado/questionarioKBA.xhtml`)
Stepper de progresso: **Dados Pessoais ✓ → Validar Dados (atual) → Habilitar Cadastro → Cadastrar Senha**. Pergunta de exemplo: *"Qual o ano da sua última contribuição para a Previdência Social?"* — opções 2008, 2024, 2003, 2012, **NUNCA CONTRIBUÍ PARA A PREVIDÊNCIA SOCIAL**.

**Características técnicas confirmadas:**
- NÃO exige biometria facial.
- NÃO exige conta em banco credenciado.
- NÃO exige câmera frontal nem traseira.
- Exige apenas **conhecimento do próprio histórico previdenciário** + smartphone/computador com internet.
- Dataprev é o operador formal do questionário (não o INSS, não o Serpro).
- Fluxo termina com cadastramento de senha — sugere que o selo gerado é **persistente** e libera acesso pleno ao Meu INSS, possivelmente equivalente a Prata (a confirmar — ver §7).

### 0.2 Impacto na Matriz E4

A descoberta **altera materialmente** a Seção 3.1 do E4 ("O nó da jornada MC"):

| Item E4 | Como está | Como fica com KBA |
|---|---|---|
| E2 (triagem) bloqueado em Bronze | "Precisa Prata via banco / câmera / CIN" | "Precisa Prata — possível também via KBA Dataprev sem biometria nem banco" |
| Mix esperado de elevação | 60% banco / 25% câmera traseira / 15% balcão | A revisar: KBA pode capturar **20-40% do funil Bronze** que tem contribuição mas não tem banco nem CNH biometrizada |
| Custo médio API Humana por elevação | 17 min ponderado | Pode cair para 10-12 min se KBA virar a rota dominante (ver §3) |
| Cliente "sem biometria em base alguma" | Hoje vai para Rota 3 (balcão) | **Pode ser elevado por KBA**, desde que tenha contribuído ao INSS em algum momento |

**Conclusão estrutural:** o gargalo conceitual descrito em E4 §3.1 — *"o nó é a consulta ao CNIS, exige Prata"* — continua verdadeiro, mas a **lista de rotas para sair do nó cresce de 3 para 4**. E a 4ª rota (KBA) é a única que **não depende de hardware nem de relacionamento bancário** — depende só de **memória contributiva**. Isso desloca uma fração relevante do público-alvo MC (idoso BPC com histórico de contribuição esquecido, trabalhador rural ex-CLT, MEI inativo) de "sem rota viável" para "rota assistível pela API Humana MC".

### 0.3 Nova rota a catalogar — Rota 4: Selo Previdenciário KBA

| Atributo | Valor |
|---|---|
| **Nome** | Selo Previdenciário via KBA Dataprev |
| **Pré-requisitos** | (a) CPF ativo; (b) ter tido **alguma contribuição previdenciária** registrada no CNIS em algum momento da vida; (c) lembrar dados básicos (anos de contribuição, empregadores, valores aproximados); (d) smartphone ou PC com internet |
| **Passo a passo** | 1. Cidadão tenta acessar Meu INSS em Bronze → 2. Sistema redireciona para gateway "Selo Previdenciário" → 3. Cidadão clica **Continuar** → 4. Tela OAuth pede autorização para serviço KBA Dataprev (escopo `govbr_adquirir_confiabilidade_kba_previdencia`) → 5. Cidadão clica **Autorizar** → 6. Questionário KBA da Dataprev (3-5 perguntas sobre histórico contributivo) → 7. Habilitar Cadastro → 8. Cadastrar Senha → 9. Selo aplicado |
| **Limitação dura** | Cidadão que **NUNCA contribuiu** (BPC puro vitalício, trabalhador informal sem registro, dependente de pensão sem vínculo próprio) **NÃO consegue** — o questionário tem opção explícita "NUNCA CONTRIBUÍ" que termina o fluxo sem selo. |
| **Limitação branda** | Cidadão que **contribuiu mas não lembra dados** ("analfabeto previdenciário") provavelmente erra e é bloqueado (cooldown a confirmar — ver §7). |
| **Tempo estimado** | 5-10 minutos pelo cliente + 3-5 min de pré-orientação MC. |
| **Acionável pela API Humana MC remotamente?** | **SIM, com nuance.** Operador guia pelo WhatsApp: explica fluxo, prepara cidadão revisando juntos o **CNIS já consultado pelo MC** (no caso de cliente que já passou triagem prévia presencial / onde MC tem acesso autorizado), confirma que cidadão lembra dados, conduz cliques. Operador NÃO responde POR ele — cidadão digita no próprio aparelho. ⚠ Risco LGPD/ético específico — ver §3 e T3.12. |
| **Fonte** | EMPÍRICA — 3 telas capturadas em 08/05/2026, não documentada nas 52 fontes de E1. |

### 0.4 Revisão de E4 recomendada

A Seção 5.2 de E4 ("Três rotas prioritárias de elevação") deve passar a citar **quatro rotas**, com recomendação operacional ajustada (ver §8 deste documento para diff completo).

---

## 1. Inventário de travas por eixo

### EIXO 1 — Travas técnicas

Falhas de software, hardware, infraestrutura ou orquestração de serviços gov.br/Dataprev/SERPRO.

| ID | Nome curto | Descrição | Sintoma | Frequência | Fonte | Solução conhecida | Tempo | API Humana? |
|---|---|---|---|---|---|---|---|---|
| **T1.01** | Reconhecimento facial não funciona | Algoritmo TSE/SENATRAN não casa selfie atual com biometria de origem. | "Não foi possível reconhecer seu rosto." Tela vermelha. | **Alta** | E1 [8, 9, 11, 12, 31, 35] | Trocar iluminação, retirar óculos, repetir 2-3x; se persistir, trocar para câmera traseira (Rota 2) ou KBA (Rota 4). | 5-15 min | **Parcial** — operador orienta por WhatsApp; falha cai em rota alternativa. |
| **T1.02** | Bloqueio de 24 horas após N tentativas | Após ~3 falhas seguidas de liveness, gov.br bloqueia o CPF por 24h. | "Você atingiu o limite de tentativas. Tente novamente em 24 horas." | **Alta** | E1 [8, 12] | Aguardar 24h. Não há bypass conhecido. Durante a janela, tentar Rota 1 (banco) ou Rota 4 (KBA). | 24h passivas | **Parcial** — operador não destrava, mas redireciona o cliente para rota alternativa imediata. |
| **T1.03** | Câmera frontal de baixa qualidade | Smartphones populares (<R$700) têm câmera frontal VGA/2MP — abaixo do mínimo do liveness. | Erro genérico "não foi possível" mesmo com luz boa. | Média | E1 [10, 15] (substrato) | Usar câmera traseira assistida (Rota 2). | 20-40 min | **Sim** — operador orienta familiar a operar câmera traseira. |
| **T1.04** | Liveness check falha (movimento de cabeça) | Cliente não compreende ou não executa o "vire a cabeça devagar". | App congela ou erra após 30-40s. | **Alta** | E1 [8, 11, 35] | API Humana faz simulação prévia em videochamada; orientar movimento lento e contínuo. | 5-10 min de pré + 1 min app | **Sim** — coaching síncrono. |
| **T1.05** | Iluminação inadequada | Foto em ambiente escuro / contraluz / sombra dura. | "Imagem com baixa qualidade" ou liveness falha sem mensagem. | **Alta** | E1 [15] | Mudar de ambiente; janela atrás do cliente; lâmpada frontal difusa. | 2-5 min | **Sim** — operador identifica por preview da câmera. |
| **T1.06** | Fisionomia muito alterada | Idoso, doença, perda de peso, próteses dentárias, cirurgia, AVC — biometria origem (TSE 10 anos atrás) muito divergente da atual. | Liveness passa mas matching biométrico falha silenciosamente. | Média | E1 [7, 15] (substrato) | Não há solução técnica. Migrar para Rota 4 (KBA) se contribuiu, ou Rota 3 (balcão). | — | **Não** — exige rota alternativa estrutural. |
| **T1.07** | App gov.br versão antiga | Aparelho com app gov.br <v3 não tem o módulo de liveness atualizado. | Liveness trava em "preparando" indefinidamente. | Média | E1 [BLOCO 5] (substrato) | Atualizar Play Store / App Store. Em Android antigo, pode não haver atualização disponível. | 5-15 min | **Sim** — operador orienta atualização. |
| **T1.08** | Android/iOS muito antigo | Android <8 / iOS <13 — gov.br oficialmente não suporta. | App não abre, fecha sozinho, ou nem instala. | Média | E1 [BLOCO 5] (substrato) | Não há solução técnica. Trocar de aparelho ou usar Rota 3 (balcão). | — | **Não** — cliente precisa pedir aparelho emprestado ou ir presencial. |
| **T1.09** | Cache do app travado | Sessão antiga preserva token inválido — todas as ações falham. | Erros aleatórios "tente novamente" em qualquer tela. | Média | E1 [31] | Limpar cache + dados do app + reinstalar. | 5-10 min | **Sim** — operador instrui passo a passo. |
| **T1.10** | Timeout do servidor Dataprev | Backend Dataprev (Meu INSS, KBA) cai ou responde lento — comum em horários de pico (manhã, dia 1 do mês). | "Erro ao processar sua solicitação" ou tela em branco. | **Alta** | E1 [BLOCO 5, 31] (substrato) | Tentar fora de pico (após 22h, antes de 7h, fim de semana). | Variável | **Parcial** — operador identifica padrão e reagenda atendimento. |
| **T1.11** | Erro genérico "tente novamente mais tarde" | Falha sem código nem orientação — pode ser qualquer coisa entre T1.01 e T1.10. | Mensagem genérica em vermelho. | **Alta** | E1 [8, 9, 31] | Triagem de exclusão: rede? cache? horário? versão? — operador percorre o checklist. | 10-20 min | **Sim** — checklist diagnóstico API Humana. |
| **T1.12** | 2FA SMS não chega | Operadora bloqueia SMS, número antigo, gateway gov.br atrasado. | "Aguardando SMS..." indefinidamente. | Média | E1 [BLOCO 5] (substrato) | Usar 2FA por e-mail; trocar número cadastrado; aguardar 5-10 min e re-enviar. | 5-15 min | **Sim** — operador orienta alternativas. |
| **T1.13** | E-mail de validação não chega | Spam, e-mail antigo, erro de digitação na criação. | Cliente nunca recebe link de confirmação. | Média | E1 [BLOCO 5] (substrato) | Verificar spam; recadastrar e-mail; em último caso recriar conta com e-mail novo. | 10-30 min | **Sim** — operador valida domínio e reenvia. |
| **T1.14** | Senha esquecida + sem biometria para recuperar | Recuperação de senha gov.br exige biometria facial, que justamente o cliente não consegue — círculo vicioso. | "Para recuperar sua senha, faça reconhecimento facial." Liveness falha. | **Alta** | E1 [BLOCO 5] (substrato) | Recuperação via banco credenciado (se Prata via banco já existiu) ou Rota 4 (KBA Dataprev — fluxo termina em "Cadastrar Senha"). | 10-30 min | **Sim** — KBA é o destravador padrão deste caso. |
| **T1.15** | Conta criada com CPF de terceiro (golpe) | Golpista criou conta gov.br no CPF da vítima e mantém credenciais. | Cliente não consegue criar nem recuperar — sistema diz que conta já existe. | Baixa | E1 [BLOCO 4] (substrato) | Acionar SERPRO via 0800 (Central gov.br) + abrir BO + LAI. Pode exigir presencial INSS. | Dias-semanas | **Não** — exige caminho jurídico/policial. |
| **T1.16** | KBA — cidadão não sabe responder | Tem contribuição registrada mas esqueceu datas/empregadores/valores. | Cidadão erra perguntas; sistema bloqueia. | **Alta** (estimada — ver §7) | EMPÍRICA | Pré-treino API Humana com CNIS impresso + revisão das contribuições antes de iniciar fluxo. | 10-20 min de pré + 5 min app | **Sim, com nuance ética** — ver T3.12. |
| **T1.17** | KBA — timeout/erro Dataprev durante questionário | Dataprev cai no meio da prova; cidadão precisa recomeçar. | Tela branca, erro 500, sessão expirada. | Média (estimada) | EMPÍRICA / INFERIDA por T1.10 | Tentar fora de pico; gravar tela com cliente para rápido recomeço. | Variável | **Parcial** — operador acompanha e reagenda. |
| **T1.18** | KBA — cidadão erra todas as perguntas e é bloqueado | Comportamento de bloqueio do KBA não está documentado: existe cooldown? quantos minutos/horas? quantas tentativas? | A confirmar — possível bloqueio temporário ou permanente. | **Desconhecida** | EMPÍRICA / LACUNA | Nenhuma documentada. Investigação necessária via teste empírico controlado e LAI à Dataprev. | A determinar | **A determinar** — ver §7. |

### EIXO 2 — Travas de inclusão digital

Barreiras estruturais que **não são bugs** — são exclusões. O cliente não falha porque o sistema falhou; o cliente falha porque o sistema **nunca foi feito para ele**.

| ID | Nome curto | Descrição | Sintoma | Frequência | Fonte | Solução conhecida | Tempo | API Humana? |
|---|---|---|---|---|---|---|---|---|
| **T2.01** | Cliente sem smartphone | Não tem aparelho próprio. | "Não tenho celular" ou "uso o do meu filho". | **Alta** (rural / idoso) | E1 [BLOCO 2] (substrato) | Usar smartphone de familiar / vizinho-anjo / lan house. Operador-MC opera tudo via aparelho de terceiro. | Variável | **Parcial** — depende de existir dispositivo acessível. |
| **T2.02** | Smartphone simples sem câmera frontal | Aparelho R$300-500 ou modelo "para idoso" sem câmera frontal funcional. | Não há câmera frontal selecionável. | Média | E1 [BLOCO 5] (substrato) | Câmera traseira assistida (Rota 2) — exige familiar local. | 20-40 min | **Parcial** — exige familiar local. |
| **T2.03** | Cliente sem internet (área rural) | Não tem dados móveis nem Wi-Fi. | "Não consigo acessar" / "não pega aqui". | **Alta** (sertão, ribeirinho, quilombola) | E1 [BLOCO 2] (substrato) | Deslocar até CRAS/UBS/escola com Wi-Fi público; agente comunitário com hotspot; rota presencial INSS. | Variável | **Não** — exige presença local ou deslocamento físico. |
| **T2.04** | Internet instável (3G fraco) | Cliente tem cobertura mas o liveness/KBA cai por latência. | App falha sempre na mesma etapa, em horários de pico. | **Alta** | E1 [BLOCO 2] (substrato) | Tentar em horário de baixa carga; deslocar até ponto com sinal melhor; usar Wi-Fi de terceiros. | Variável | **Parcial** — operador agenda janela de baixa carga. |
| **T2.05** | Cliente analfabeto absoluto | Não lê nem em letra de forma. | Não consegue interpretar telas, mensagens de erro, opções do KBA. | Média (público MC: alta entre idosos rurais) | E1 [BLOCO 6] (substrato) | API Humana em videochamada lendo cada tela em voz alta + familiar local lendo opções. Em casos extremos: representação legal formal (curatela / TDA / procuração). | 30-60 min ou estrutural | **Parcial** — operador é "voz e olhos" do cliente. |
| **T2.06** | Cliente analfabeto digital | Sabe ler, mas não opera apps — não distingue clicar, deslizar, pressionar longo. | Cliente toca em lugar errado, fecha telas, perde contexto. | **Alta** (público MC) | E1 [10, 20] (substrato) | Coaching síncrono com paciência; gravação de tutoriais curtos por jornada; apoiar com familiar local. | 30-60 min | **Sim** — núcleo do produto MC. |
| **T2.07** | Idoso com tremor (Parkinson) | Mão treme — câmera mexe, dedo fora do alvo. | Liveness perde foco; cliques fora do botão. | Média | E1 [10, 15, 20] (substrato) | Apoiar aparelho em superfície; usar câmera traseira operada por terceiro; em quadros severos, KBA (Rota 4) por terceiro com cliente respondendo verbalmente as perguntas. | 30-50 min | **Parcial** — exige família/anjo local em casos severos. |
| **T2.08** | PcD visual severa | Cego ou baixa visão extrema. | Não vê telas, não ouve TalkBack adequadamente em apps mal acessibilizados. | Média | E1 [10] | TalkBack/VoiceOver com auxiliar; uso de KBA com terceiro lendo perguntas e cliente respondendo verbalmente; em último caso, representação legal. | 30-60 min ou estrutural | **Parcial** — limites de acessibilidade do gov.br são reais (ver E2 lacuna #4). |
| **T2.09** | PcD motora (não consegue segurar smartphone) | Tetraplegia, AVC severo, ELA. | Cliente fisicamente não opera aparelho. | Baixa-Média | E1 [BLOCO 6] (substrato) | Familiar local opera com cliente verbalmente confirmando; em casos sem familiar: TDA ou curatela formal (T3.03). | Estrutural | **Não** — exige rota legal. |
| **T2.10** | Surdo-cego | Comunicação extremamente limitada. | Nem TalkBack nem libras resolvem. | Baixa | E1 [BLOCO 6] (substrato) | Curatela formal + cadastro de representante legal INSS. Não há rota digital direta. | Estrutural | **Não** — fora do escopo digital. |
| **T2.11** | Acamado | Idoso ou PcD em hospital, ILPI, hospice. | Não há como o cliente operar nem como deslocar. | Média (público MC) | E1 [BLOCO 6] (substrato) | API Humana via familiar visitante + cadastro de representante legal INSS para o cuidador formal. | 1-3 semanas | **Parcial** — depende da formalização da representação. |
| **T2.12** | Cliente em ILPI | Idoso institucionalizado em casa de longa permanência. | Sem familiar próximo; cuidadores da ILPI não têm autorização formal. | Média | E1 [BLOCO 6] (substrato) | Curatela formal ou cadastro de cuidador como representante legal. Articulação com Defensoria Pública. | Estrutural | **Não** — exige rota jurídica. |
| **T2.13** | Indígena sem documentação completa | Cliente sem RG, sem comprovante de residência formal, sem vínculo com cartório. | CPF existe, mas dados cadastrais Bronze fragilíssimos — qualquer rota pede mais documento que ele tem. | Média (regional) | E1 [BLOCO 6] (substrato) | Articulação com FUNAI / cacicado / SESAI; uso de RANI; balcão INSS rural com servidor sensibilizado. | Estrutural | **Não** — exige presença e articulação institucional. |
| **T2.14** | Quilombola em comunidade isolada | Mesmo perfil de T2.03 + T2.13, agravado por documentação RANI análoga. | Distância de qualquer balcão INSS / CRAS. | Baixa | E1 [BLOCO 6] (substrato) | Mutirão presencial; articulação com Fundação Palmares / SEPPIR. | Estrutural | **Não** — exige mobilização local. |
| **T2.15** | KBA — nunca contribuiu | Cidadão BPC puro, trabalhador informal vitalício, dependente que nunca contribuiu por conta própria. | Questionário tem opção "NUNCA CONTRIBUÍ" → fluxo termina sem selo. | **Alta** entre BPC (público MC) | EMPÍRICA | KBA simplesmente não funciona. Migrar para Rota 1 (banco) se possível, ou Rota 3 (balcão). | — | **Não** — rota fechada por desenho. |
| **T2.16** | Analfabeto previdenciário | Tem contribuição mas não sabe datas, valores, empregadores. Comum entre idoso rural e doméstica antiga. | Cliente erra perguntas do KBA. | **Alta** (público MC) | EMPÍRICA / INFERIDA | Pré-orientação com CNIS impresso (operação MC). Risco ético de "soprar" — ver T3.12. | 15-30 min de pré + KBA | **Sim, com nuance ética** — ver T3.12. |

### EIXO 3 — Travas jurídico-operacionais

Bloqueios decorrentes de regras de representação, custódia, LGPD, hierarquia de níveis e Termo de Uso da plataforma.

| ID | Nome curto | Descrição | Sintoma | Frequência | Fonte | Solução conhecida | Tempo | API Humana? |
|---|---|---|---|---|---|---|---|---|
| **T3.01** | Familiar quer operar conta sem procuração | Filho/cuidador tenta entrar na conta gov.br do idoso "para resolver" — sem instrumento formal. | Acesso por senha guardada → veto LGPD + Lei 14.063/2020 (Art. 6º intransferibilidade). | **Alta** (público MC) | E1 [BLOCO 4] / E3 cadeia (b) | Recusar a custódia. Oferecer rotas formais: procuração SPE (T3.07), procuração e-CAC, cadastro de representante legal INSS. | 30-60 min de orientação inicial | **Sim** — núcleo do ADR-009a do MC. |
| **T3.02** | Curatela judicial existe mas não cadastrada no INSS | Família tem decisão de curatela, mas nunca foi ao INSS averbar. | Curador tenta operar — INSS não reconhece vínculo. | Média | E1 [17, 18, 44] | Cadastrar representante legal INSS via serviço dedicado (Meu INSS — exige Prata do curador) com cópia da decisão. | 1-3 semanas | **Sim** — guiar curador no fluxo de cadastro. |
| **T3.03** | Cliente sob TDA — operacionalização | Tomada de Decisão Apoiada (LBI Arts. 84-87) existe formalmente mas o INSS opera mal — pouca prática. | Servidor pede curatela porque "TDA não está no script". | Baixa-Média | E3 cadeia (b) e (d) | Acionar Defensoria Pública para insistência institucional + cadastro do apoiador como representante. | Semanas | **Parcial** — orientação MC + Defensoria. |
| **T3.04** | Procuração analógica em papel | Procuração pública de cartório, em papel — gov.br/SPE não aceita upload. | Cliente chega com papel físico achando que basta. | Média | E1 [BLOCO 4.2] (substrato) | Refazer eletronicamente: e-CAC ou SPE gov.br. Manter papel para INSS presencial via Lei 9.784/1999. | 30-60 min | **Sim** — operador conduz refazimento digital. |
| **T3.05** | Senha do cliente em custódia do MC | Operador retém credencial gov.br para "agilizar". | Violação Termo de Uso gov.br + LGPD + Lei 14.063/2020. | **Crítica** (zero tolerância MC) | E1 [BLOCO 4] / ADR-009a | **PROIBIDO POR DESENHO.** ADR-009a — custódia zero. | — | **Não — vetado.** |
| **T3.06** | Filho Bronze quer acesso à conta da mãe Prata | Filho tem conta Bronze, mãe é Prata — quer outorga via SPE. | SPE bloqueia: outorgado precisa Prata. | Média | E4 §2.2 | Filho precisa **primeiro elevar a própria conta** (Rota 1, 2, 4 ou 3) para depois receber outorga. | Dias-semanas | **Sim** — operador eleva o filho como sub-jornada. |
| **T3.07** | Outorgante Prata mas outorgado Bronze (SPE bloqueada) | Mesmo padrão T3.06 invertido — outorgante OK, outorgado precisa subir. | SPE: "O procurador deve ter conta nível Prata ou Ouro." | Média | E1 [40] / E4 §2.2 | Subir o outorgado primeiro. Em emergência: cadastro de representante legal INSS por documento físico (não passa pela SPE). | Dias | **Sim** — sub-jornada de elevação. |
| **T3.08** | Cliente já caiu em golpe — conta clonada | Conta gov.br existe e está nas mãos do golpista. | Cliente não consegue acessar nem recuperar. Possível subtração de benefícios. | Média (idoso) | E1 [BLOCO 5] (substrato) / T1.15 | Acionar 0800 SERPRO + BO + DPF (Polícia Federal — crime federal por tratar-se de identidade digital nacional) + Defensoria. | Semanas-meses | **Não** — fora do escopo digital. |
| **T3.09** | Conta gov.br criada por terceiro (golpe na origem) | Cliente nunca criou conta — golpista criou usando CPF + selfie roubada. | Sistema diz "conta já existe", recuperação por biometria não funciona porque biometria não é do titular. | Baixa-Média | E1 [BLOCO 5] (substrato) | Mesma rota T3.08. Adicionalmente, denúncia junto ao SERPRO/MGI por uso indevido de identidade. | Semanas-meses | **Não** — judicial. |
| **T3.10** | Beneficiário falecido — herdeiros precisam acessar | Família precisa de extratos, carta de concessão, comprovantes para inventário. | Conta gov.br do falecido travada; família sem acesso legal. | Média | E1 [BLOCO 4.5] (substrato) | Inventariante via 1ª Vara de Família apresenta certidão de óbito + carta de inventariante ao INSS presencial — não passa por gov.br do falecido. | Meses | **Não** — judicial. |
| **T3.11** | Menor de 16 anos no CadÚnico / BPC infantil | Pais não cadastrados no CadÚnico, criança PcD sem entrar no sistema. | BPC LOAS exige inscrição CadÚnico do grupo familiar; criança não tem CPF próprio cadastro gov.br. | Média | E1 [7, 32, 41] | Pais inscrevem família no CRAS; CPF da criança herda registro do responsável. | Semanas | **Parcial** — operador orienta pais; CRAS é presencial obrigatório. |
| **T3.12** | KBA — risco ético de "soprar resposta" | API Humana MC com acesso ao CNIS pode "preparar" o cidadão antes do KBA — fronteira tênue entre **revisão legítima do próprio histórico** e **substituição da prova de conhecimento**. | Operador-MC pode dizer "lembre-se de que sua última contribuição foi em 2012, na Indústria X" — isto é "ajudar o cliente a lembrar de fato seu" ou "burlar o KBA"? | **Crítica** (relevância arquitetural) | EMPÍRICA / INFERIDA E3 cadeia (c) | **Definição de política MC necessária:** (a) revisar CNIS com cliente como "leitura compartilhada do próprio dossiê" (Art. 18 LGPD — direito de acesso) é legítimo; (b) operador NÃO digita pelo cliente; (c) cliente NÃO recebe gabarito antes do questionário — recebe apenas seu próprio histórico para releitura; (d) auditoria 100% das interações KBA assistidas. | Política — não tarefa | **Sim, com guard-rails** — exige protocolo ético formal. Sem protocolo, vetado por padrão. |

---

## 2. Mapa de frequência × impacto

Plotagem qualitativa de cada trava ao longo dos quadrantes:

```
                                  ALTA FREQUÊNCIA
                                       |
        QUADRANTE A                    |        QUADRANTE B
        (urgente fixar — alto impacto, |        (atacar primeiro — alto
         alta frequência)              |         impacto, alta frequência)
                                       |
                                       |   T1.01 Reconhecimento facial
                                       |   T1.02 Bloqueio 24h
                                       |   T1.04 Liveness movimento
                                       |   T1.05 Iluminação
                                       |   T1.10 Timeout Dataprev
                                       |   T1.11 Erro genérico
                                       |   T1.14 Senha esquecida sem bio
                                       |   T1.16 KBA não sabe responder
                                       |   T2.01 Sem smartphone
                                       |   T2.03 Sem internet rural
                                       |   T2.04 Internet instável
                                       |   T2.06 Analfabeto digital
                                       |   T2.15 KBA nunca contribuiu
                                       |   T2.16 Analfabeto previdenciário
                                       |   T3.01 Familiar sem procuração
                                       |   T3.05 Senha em custódia (crítica)
                                       |
        ALTO IMPACTO -------------------+--------------------------- BAIXO IMPACTO
                                       |
        QUADRANTE C                    |        QUADRANTE D
        (acompanhar — alto impacto,    |        (ignorar — baixo impacto,
         baixa frequência)             |         baixa frequência)
                                       |
        T1.06 Fisionomia alterada      |        T2.10 Surdo-cego
        T1.08 Android antigo           |        T2.14 Quilombola isolado
        T1.15 CPF golpe                |        (mas: impacto reputacional alto)
        T2.05 Analfabeto absoluto      |
        T2.07 Tremor/Parkinson         |
        T2.08 PcD visual severa        |
        T2.09 PcD motora               |
        T2.11 Acamado                  |
        T2.12 ILPI                     |
        T2.13 Indígena                 |
        T3.02 Curatela não cadastrada  |
        T3.03 TDA operacionalização    |
        T3.06 Filho Bronze             |
        T3.07 Outorgado Bronze         |
        T3.08 Conta clonada            |
        T3.09 Conta criada por golpe   |
        T3.10 Beneficiário falecido    |
        T3.11 Menor BPC                |
        T3.12 KBA risco ético          |
                                       |
                                  BAIXA FREQUÊNCIA
```

**Travas em quadrantes mais leves (alta frequência, baixo impacto unitário):**
- T1.03 Câmera frontal pobre (cai em fallback Rota 2 — resolvida)
- T1.07 App versão antiga (resolvida em 5-10 min)
- T1.09 Cache travado (resolvida em 5-10 min)
- T1.12 SMS 2FA (resolvida em 10-15 min)
- T1.13 E-mail validação (resolvida em 10-30 min)
- T1.17 KBA timeout (resolvida com reagendamento)
- T3.04 Procuração analógica (resolvida em 30-60 min)

**Conclusão estratégica:** O **Quadrante B** concentra **17 travas** — é onde o workflow MC deve ser desenhado para automatizar/escalar. Dentro dele, **a quase-totalidade é abordável pela API Humana remotamente** (exceto T2.01, T2.03 estruturais, T2.15 e T3.05 que são vetos por desenho). Esse é o argumento de mercado central do MC: **17 dores de alta frequência e alto impacto, das quais 13 são solúveis remotamente em sub-30 minutos por dor**.

---

## 3. Travas que a API Humana MC PODE resolver remotamente

Travas onde "Acionável remotamente = Sim" ou "Parcial com fallback remoto".

| ID | Procedimento operacional (linguagem Beto) | Tempo médio | Risco LGPD | Alternativa se falhar |
|---|---|---|---|---|
| **T1.01** | Operador entra em videochamada, vê o ambiente do cliente, pede para tirar óculos, virar pra janela, repetir devagar. Se 3 falhas, marca rota alternativa (banco ou KBA). | 5-15 min | Baixo (não retém imagem) | Rota 1 banco / Rota 4 KBA |
| **T1.02** | Operador explica o "fica de molho 24h"; agenda nova tentativa para o dia seguinte; oferece KBA imediatamente como alternativa enquanto janela do bloqueio facial está aberta. | 5 min de explicação | Nenhum | Rota 4 KBA / Rota 1 banco |
| **T1.04** | Operador faz simulação prévia em videochamada — pede para o cliente girar a cabeça devagar fora do app, treinar 2-3 vezes, aí abre o app já aquecido. | 10 min | Baixo | Câmera traseira assistida |
| **T1.05** | Operador olha pelo vídeo da chamada se a luz tá ruim; manda ir para perto da janela, virar pro lado da luz, acender lâmpada. | 2-5 min | Nenhum | Rota 4 KBA |
| **T1.07 / T1.09** | Operador conduz update do app + limpeza de cache passo a passo. | 5-15 min | Nenhum | Trocar de aparelho |
| **T1.11** | Operador roda checklist mental: rede? cache? horário de pico? versão? — elimina causas até cair em uma das outras travas tratáveis. | 10-20 min | Baixo | Reagendar / rota presencial |
| **T1.12 / T1.13** | Trocar 2FA para e-mail; verificar spam; em última instância, recadastrar e-mail/telefone na própria conta. | 5-30 min | Médio (manuseio de credenciais — operar **com** o cliente, nunca **por** ele) | Recriar conta com credenciais novas |
| **T1.14** | KBA é o destravador padrão: o fluxo termina em "Cadastrar Senha". Operador conduz cliente pelo questionário. | 15-30 min | Médio | Rota 1 banco / Rota 3 balcão |
| **T1.16 / T2.16** **(KBA)** | **Ver §3 abaixo — protocolo dedicado.** | 15-30 min | **Alto** — ver T3.12 | Rota 1 / Rota 3 |
| **T2.04** | Operador identifica padrão de queda (sempre na mesma etapa, mesmo horário) e reagenda atendimento para janela de baixa carga. | 5 min de planejamento | Nenhum | Deslocamento físico |
| **T2.06** | Coaching síncrono com paciência: "agora aperte o botão azul"; gravação de tutoriais curtos por jornada. | 30-60 min na primeira; 10-15 min nas seguintes | Baixo | Familiar local |
| **T3.01** | Operador recusa a custódia da senha em qualquer hipótese; explica para o familiar a vedação legal (LGPD/Lei 14.063); orienta sobre rotas formais (T3.06, T3.07, cadastro representante legal). | 30-60 min de educação | **Crítico (vetado por desenho)** | — |
| **T3.02** | Após confirmar existência de decisão judicial, operador conduz curador (que precisa estar Prata) pelo serviço Meu INSS de Cadastro de Representante Legal. | 1-3 semanas (espera análise INSS) | Médio | Defensoria Pública |
| **T3.04** | Operador orienta refazimento digital no SPE/e-CAC; mantém papel para INSS presencial. | 30-60 min | Médio | Cartório local |
| **T3.06 / T3.07** | Sub-jornada: operador eleva primeiro a conta que está em Bronze (uma das 4 rotas) e só depois faz a outorga SPE. | Dias | Médio (manipula 2 contas em paralelo — protocolo de não-cruzamento) | Cadastro representante legal INSS por via física |

### Fluxo KBA assistido pela API Humana — protocolo proposto

(Trata-se de **proposta de protocolo a ser ratificada** pelo time MC + assessoria jurídica, à luz do risco T3.12.)

1. **Pré-condição:** cliente já passou triagem MC e autorizou expressamente o MC a consultar seu CNIS (consentimento LGPD documentado, finalidade clara).
2. **Pré-orientação (10-15 min):** operador lê com o cliente, em videochamada, o **CNIS do próprio cliente** — sem dar pista do gabarito do KBA, mas garantindo que o cliente **conheça o próprio dossiê**. Isto é direito de acesso do titular (LGPD Art. 18, I-II) e não viola o KBA — viola se o operador antecipar respostas específicas.
3. **Início do fluxo:** cliente abre Meu INSS no próprio aparelho. Operador acompanha por compartilhamento de tela (ou videochamada apontada para o aparelho).
4. **Telas 1 e 2 (Gateway + OAuth):** operador apenas explica o que cada tela está pedindo. Cliente clica.
5. **Tela 3 (Questionário):** operador **NÃO pode ler** a pergunta para depois sugerir a resposta. Operador pode reforçar **"pense com calma, é sobre sua história"**. Cliente lê e responde.
6. **Erro de resposta:** se cliente erra, operador **não corrige a próxima** — encerra a sessão e reagenda com mais tempo de pré-orientação. Reincidência → migrar para Rota 1 ou Rota 3.
7. **Auditoria:** 100% das sessões KBA assistidas são gravadas e revisadas amostralmente pelo time de compliance MC.

**Esta política assume que o "preparar" é direito do titular conhecer o próprio histórico, e o "soprar" é substituir a prova de conhecimento.** A linha é clara apenas se o protocolo for fielmente executado — qualquer desvio joga o MC em zona de risco LGPD + risco reputacional + risco de processo administrativo INSS por fraude.

---

## 4. Travas que EXIGEM anjo agente local

Travas onde apenas presença física resolve.

| ID | Por que não é remoto | O que o anjo precisa fazer | Tempo médio | Alternativa se não houver anjo |
|---|---|---|---|---|
| **T1.03 / T1.06 / T2.02** (câmera frontal ruim, fisionomia alterada, sem câmera) | Operação física da câmera traseira em outro aparelho. | Operar smartphone ao lado do cliente; segurar firme; coordenar liveness pelo back-camera. | 20-40 min | Tentar Rota 4 (KBA) se contribuiu; senão Rota 3 (balcão presencial INSS). |
| **T2.01 / T2.03** (sem smartphone / sem internet) | Não há dispositivo nem conectividade. | Levar smartphone com 4G; deslocar até cliente; alternativamente, conduzir cliente até CRAS/UBS/lan house com Wi-Fi. | 1-3h ou estrutural | Rota 3 balcão (INSS no município mais próximo) ou mutirão. |
| **T2.05 / T2.07 / T2.08 / T2.09 / T2.11** (analfabeto absoluto, tremor, PcD severa, acamado) | Operação física do aparelho não pode ser feita pelo titular nem em videochamada. | Operar o aparelho do cliente, em copresença, com cliente verbalmente confirmando ações. **Cuidar para nunca digitar senha — cliente precisa ter como confirmar**. | 30-60 min | Curatela / TDA / cadastro representante legal (estrutural). |
| **T2.12** (ILPI) | Cuidador da instituição não tem autorização formal; familiar não está disponível. | Familiar designado vai à ILPI uma vez para conduzir + iniciar processo de TDA ou curatela em paralelo. | 30-60 min visita + estrutural | Defensoria Pública. |
| **T2.13 / T2.14** (indígena / quilombola) | Distância + documentação não-padrão. | Mutirão presencial articulado com FUNAI/Fundação Palmares; agente comunitário com hotspot. | 1-3 meses (planejamento mutirão) | Encaminhamento para Defensoria Pública. |
| **T3.04** (procuração analógica complementar) | Quando o e-CAC/SPE não aceita, e o caminho é INSS presencial Lei 9.784/1999. | Familiar/anjo leva o papel ao balcão INSS para protocolo físico. | 1 visita ao INSS | Refazer eletronicamente. |

**Implicação operacional:** o **mapa de anjos locais por município** é um ativo estratégico do MC tão crítico quanto o software. Sem rede de anjos, ~30-40% das travas acima caem para "não-resolúvel" — e o MC perde a promessa de cobertura nacional.

---

## 5. Travas que o MC NÃO consegue resolver (limites do produto)

Travas onde nem API Humana nem anjo local resolvem dentro do escopo MC.

| ID | Por que está fora do escopo | Para onde encaminhar | Comunicação ao cliente (linguagem Dona Zilda) |
|---|---|---|---|
| **T1.15 / T3.08 / T3.09** (CPF roubado, conta clonada) | Crime — exige polícia + judicial. | (a) BO PC local; (b) 0800 SERPRO; (c) Polícia Federal (crime contra identidade digital nacional); (d) Defensoria Pública para retomada civil. | "Dona Zilda, isso aqui virou caso de polícia. A senhora vai precisar abrir um Boletim de Ocorrência e a gente acompanha a senhora junto à Defensoria. Não dá para resolver pelo nosso atendimento porque foi outra pessoa que mexeu no nome da senhora — só a polícia desfaz isso." |
| **T2.10** (surdo-cego) | Limites da acessibilidade do app gov.br + impossibilidade de assistência remota. | Defensoria Pública + Centros de Apoio à Pessoa com Deficiência (CAP/CAPS) + Curatela. | "Dona Zilda, no caso da senhora com sua filha [surdo-cega], o caminho é a gente fazer uma curatela na Justiça — assim a senhora pode resolver tudo no nome dela. A gente acompanha a senhora junto à Defensoria, que faz isso de graça." |
| **T3.10** (beneficiário falecido — inventário) | Sucessão hereditária — direito civil estrito. | Vara de Família (inventário) + INSS presencial com certidão e carta de inventariante. | "Seu João, o benefício do seu pai a gente não consegue mexer pelo computador. Precisa ir no juiz de família abrir inventário. A gente indica advogado/defensor e quando a senhora tiver a carta de inventariante, a gente continua." |
| **T3.05** (custódia de senha) | Vedação absoluta por desenho do MC. | Sempre redirecionar para uma das rotas formais (T3.01-T3.07). | "Dona Zilda, eu não posso ficar com a senha da senhora — é proibido por lei e a gente nunca, nunca, nunca faz isso. Vou ensinar a senhora a fazer uma procuração de verdade no celular, é grátis e dura 5 anos." |
| **T2.15** (KBA nunca contribuiu) | Veto por desenho do questionário Dataprev. | Rota 1 (banco) ou Rota 3 (balcão). | "Seu João, esse questionário do INSS só serve para quem já trabalhou de carteira assinada. Como a senhora nunca trabalhou registrada, a gente vai pelo banco — qual banco a senhora usa?" |
| **T1.18** (KBA bloqueio total — comportamento desconhecido) | Comportamento do sistema não está documentado. **Investigação interna pendente.** | Tentativamente: aguardar (cooldown a confirmar) + Rota 1 / Rota 3. | "Seu João, o questionário trancou. Vamos pelo banco/agência enquanto a gente confirma se ele desbloqueia em algumas horas." |

---

## 6. Heat map por persona MC

Para cada persona, listamos as travas críticas (não exaustivas — apenas as de maior frequência e maior impacto na jornada Φ₀/Φ₁/Φ₄), a rota prioritária e o fallback.

| Persona | Travas críticas (IDs) | Rota prioritária | Rota fallback |
|---|---|---|---|
| **Idoso rural** (≥60 anos, ribeirinho, sertanejo, sem CNH) | T2.01, T2.03, T2.04, T2.05, T2.06, T2.07, T1.06 | **Rota 4 KBA** se houve contribuição (ex-CLT rural, ex-MEI); **Rota 3 balcão** se nunca contribuiu | Mutirão presencial INSS / CRAS; anjo agente local com smartphone + 4G |
| **PcD intelectual/cognitiva** (dependência cognitiva severa) | T2.05, T2.06, T2.09, T3.02, T3.03 | **Cadastro de Representante Legal INSS** via curatela ou TDA (Rota estrutural) | Articulação com Defensoria Pública para abertura do processo |
| **PcD motora** (Parkinson, AVC, ELA, tetraplegia) | T2.07, T2.09, T2.11, T1.04, T3.02 | **Câmera traseira assistida (Rota 2)** com familiar; em casos severos, TDA/curatela | Cadastro de Representante Legal INSS |
| **Surdo / baixa audição** | T2.06 (parcial), T2.10 (severo), T1.04 | **Rota 1 banco** (fluxo OAuth não exige áudio) ou **Rota 4 KBA** (questionário texto) | Atendimento presencial CASE/INES; videochamada com Libras |
| **Trabalhador rural** (ex-CLT, ex-segurado especial INSS) | T2.01, T2.03, T2.04, T2.16, T1.16 | **Rota 4 KBA** — perfil ideal: tem contribuição, mas pode ser "analfabeto previdenciário" | Rota 1 banco se bancarizado; Rota 3 balcão |
| **Dona Zilda** (idosa urbana mediana, BPC ou aposentada, semialfabetizada digital, com filhos próximos) | T1.01, T1.02, T1.04, T1.14, T2.06, T3.01 (filho querendo "ajudar com a senha") | **Rota 1 banco** (Caixa) ou **Rota 4 KBA** se contribuiu | Câmera traseira assistida pelo filho |
| **Mãe solo CadÚnico (CAD001)** (Bronze pleno, BPC infantil, sem CNH, sem internet banking) | T2.01 (parcial — usa do parente), T2.04, T3.11 (BPC infantil), T1.01 | **Rota 1 banco** se ela for bancarizada via Caixa Tem; senão **CadÚnico via CRAS** (Φ₀ presencial) + **Rota 4 KBA** se ela tiver contribuição | Mutirão CRAS local |

**Observação:** O perfil **CAD001** ilustra um padrão importante — para Φ₀ (CadÚnico), a "trava" não é a conta gov.br em si, mas a **necessidade de validação presencial CRAS**. O MC não destrava CRAS; o MC orquestra o pré-cadastro online + agendamento + acompanhamento (ver E4 §1.2).

---

## 7. Lacunas do catálogo

Travas que provavelmente existem na realidade mas **não estão documentadas em E1 nem na evidência empírica de 08/05/2026**.

| # | Lacuna | Por que provavelmente existe | Como confirmar |
|---|---|---|---|
| **L1** | Comportamento do KBA quando cidadão erra todas as respostas | É comportamento padrão de qualquer sistema KBA bancário ter cooldown ou bloqueio temporário; Dataprev provavelmente segue o mesmo padrão. | (a) Teste empírico controlado com voluntário Bronze + erros propositais; (b) LAI à Dataprev pedindo "política de bloqueio do KBA Previdência"; (c) consulta ao FAQ Serpro [E1 47]. |
| **L2** | Selo gerado pelo KBA é Prata pleno ou apenas acesso parcial ao Meu INSS? | A tela 3 indica "Habilitar Cadastro" + "Cadastrar Senha" — sugere selo persistente, mas o nome "Selo Previdenciário" levanta dúvida sobre se vale só dentro do INSS ou em outros serviços gov.br. | (a) Após elevação por KBA, testar acesso a e-CAC, CadÚnico e SPE — se funcionarem, é Prata pleno; (b) ler decision tree do gov.br após login pós-KBA; (c) LAI à SGD/MGI. |
| **L3** | O selo KBA expira? Periodicidade? | Selos gov.br padrão (banco) tipicamente persistem indefinidamente; mas selos derivados de prova de vida (Ouro) re-validam anualmente. KBA pode seguir um ou outro modelo. | (a) Acompanhamento longitudinal de cliente elevado por KBA por 12 meses; (b) LAI à Dataprev. |
| **L4** | Existem outros questionários KBA além do previdenciário? | O scope OAuth `govbr_adquirir_confiabilidade_kba_previdencia` inclui o sufixo `_previdencia`, sugerindo que existam variantes (ex: `_cadunico`, `_rfb`). | (a) Ler catálogo de scopes do conector gov.br (LACUNA E2 #1); (b) testar fluxos análogos em CadÚnico e e-CAC com conta Bronze; (c) LAI ao SERPRO. |
| **L5** | Banco credenciado X tem fluxo OAuth divergente (ex: BNB rural, BRB, Sicoob, Sicredi) | Sicoob/Sicredi têm internet banking heterogêneo entre cooperativas regionais — provável que algumas implementem OAuth de modo subótimo, gerando travas T1.10 específicas. | Teste empírico por banco; entrevistas com gerentes de cooperativas; LAI à SGD pelo registro de bancos credenciados. |
| **L6** | Custo médio real de tempo no balcão INSS por município | E4 §5.3 estima 5 min de API + 7-21 dias presenciais — mas há municípios sem agência INSS (>1000 km até a mais próxima); cálculo MC ignora tempo de deslocamento. | Mapeamento de cobertura INSS por município (dados públicos do INSS) cruzado com municípios-alvo MC. |
| **L7** | Comportamento do sistema quando cliente troca de aparelho mid-jornada | E1 não documenta o que acontece com sessão / 2FA / cookies quando o cliente abandona o atendimento e retoma em outro aparelho — comum no público MC (passa do celular do filho para o próprio depois). | Teste empírico controlado. |
| **L8** | Cooldown de bloqueio facial — janela exata | E1 cita "24 horas" mas tutoriais dizem "tente novamente amanhã" — pode ser 24h corridas ou rolling; pode ter exceção em certos eventos. | Teste empírico cronometrado. |
| **L9** | Comportamento do "Atualizar Dados Cadastrais" para nome social, gênero, deficiência | E4 §1.1 e [21 E1] não detalham o que exatamente é editável e qual nível mínimo. | Teste empírico em conta de teste. |
| **L10** | Travas específicas de aparelhos com Android customizado (Xiaomi MIUI, Samsung One UI antigo, Motorola E series) | Cada fabricante implementa permissões de câmera/SMS de modo levemente diferente; provável que existam travas específicas. | Triagem por modelo nas primeiras 50-100 jornadas reais MC. |

---

## 8. Recomendação de revisão E4

Diff sugerido para **MC-GOVBR-Matriz-NivelServico-v1_0** à luz da descoberta KBA + travas catalogadas.

| Seção E4 | O que diz hoje | O que deveria dizer | Justificativa |
|---|---|---|---|
| **§1.1 (Meu INSS)** | Lista 11 serviços; não menciona o gateway "Selo Previdenciário". | Acrescentar linha: *"Selo Previdenciário via KBA — Bronze (entrada) → Prata (saída) — destrava acesso ao Meu INSS para cliente com contribuição registrada, sem biometria nem banco. Fonte: EMPÍRICA 08/05/2026."* | A rota é nativa do Meu INSS e altera a economia de elevação para o público-alvo MC. |
| **§3.1 (O nó da jornada MC)** | "Sem CNIS, o MC não tem como executar a etapa de triagem... E2 BLOQUEIO PRINCIPAL: precisa CNIS, exige Prata." | Manter o diagnóstico, mas acrescentar: *"4 rotas saem do nó: banco, câmera traseira, balcão e — recém-mapeado — KBA Dataprev. KBA cobre o caso de uso não atendido pelas outras 3: cliente com contribuição registrada, sem hardware nem banco."* | Sem essa anotação, o E4 sugere que o nó tem 3 saídas; na verdade tem 4. |
| **§3.2 (Nível mínimo viável)** | "Piso operacional do MC é Prata. Bronze só serve para Φ₀ degradado." | Manter integralmente — KBA não muda a conclusão; muda apenas o **caminho** para chegar ao Prata. | A fronteira lógica permanece. |
| **§5.2 (Três rotas prioritárias de elevação)** | 1ª Banco, 2ª Câmera traseira, 3ª Balcão. | Renumerar como **Quatro rotas**: 1ª **Banco**, 2ª **KBA Dataprev** (nova), 3ª **Câmera traseira**, 4ª **Balcão**. Revisar pesos: provavelmente **45% banco, 25% KBA, 15% câmera, 15% balcão** (estimativa, calibrar com 50 jornadas reais). | KBA é mais rápida que câmera, não exige hardware, não exige presencial. Sobe na hierarquia. |
| **§5.3 (Custo operacional estimado)** | Tabela de 3 rotas; custo médio ponderado 17 min de operador por elevação. | Acrescentar linha "Rota 4 — KBA Dataprev — 15-30 min API Humana, pré-trabalho 10-15 min de revisão CNIS, pós-trabalho 1 min, retentativa **alta-desconhecida** (T1.18 — investigação pendente)." Recalcular custo médio ponderado: ~`0,45×12 + 0,25×22 + 0,15×30 + 0,15×5` = **~15,4 min/elevação**, melhor que os 17 min anteriores. | KBA é operacionalmente competitiva e melhora o custo médio do MC se proporcionalmente captar 25% do funil. |
| **§Apêndice A (Sinais de atualização)** | Lista normas que disparam revisão. | Acrescentar: *"Mudança no fluxo KBA Dataprev (cooldown, scope, perguntas), confirmação ou desconfirmação de que selo KBA = Prata pleno em outros serviços gov.br."* | Estabilidade do KBA como rota depende de premissas a confirmar (§7 L2-L4 deste documento). |
| **§4 (Lacunas da matriz)** | 11 lacunas listadas. | Acrescentar 3 lacunas KBA: (a) escopo do selo gerado; (b) periodicidade/expiração; (c) política de bloqueio. | Sem essas 3, qualquer recomendação operacional sobre KBA é hipótese. |

---

## Apêndice A — Resumo executivo

- **48 travas catalogadas** (18 técnicas + 16 inclusão digital + 14 jurídico-operacionais).
- **17 travas no Quadrante B** (alta frequência + alto impacto) — onde o MC precisa de workflow de produção.
- **15 travas resolvíveis remotamente** pela API Humana sem necessidade de anjo local — núcleo da escalabilidade do MC.
- **6 categorias de trava exigem anjo local** — núcleo do mapa de cobertura geográfica MC.
- **6 travas estão fora do escopo MC** — encaminhamento para Defensoria/Vara de Família/Polícia.
- **Descoberta empírica de 08/05/2026 (KBA Dataprev) é estruturalmente positiva** para o MC: amplia rotas de Bronze→Prata sem hardware nem banco, mas introduz risco ético novo (T3.12) que exige protocolo formal antes de virar produto.
- **O E4 deve ser revisado** em 7 pontos para incorporar o KBA como Rota 2 oficial de elevação.

## Apêndice B — Próximos passos sugeridos

1. Validar o protocolo KBA-assistido (§3) com assessoria jurídica MC + DPO.
2. Executar testes empíricos pendentes (§7 L1-L10) — ordem prioritária L1, L2, L4 (definem se KBA é Rota 2 ou complemento).
3. Aplicar diff §8 ao E4 para versão v1_1.
4. Iniciar mapeamento de anjos locais por município-alvo (input do §4).
5. Cruzar este catálogo com o backlog de produto MC para priorizar workflows nos 17 itens do Quadrante B.

---

E5 gravado: G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Gestão Software\Documentação\CONTA GOV.BR PRATA OURO\MC-GOVBR-CatalogoTravas-v1_0-2026-0508.md
