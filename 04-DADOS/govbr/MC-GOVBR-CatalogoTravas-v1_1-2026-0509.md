---
título: MC-GOVBR-CatalogoTravas
versão: v1_1
data: 2026-05-09
status: RASCUNHO — REVISÃO PÓS-ERRATA-001
autor: Claude Code × Alessandro Neves
fonte: E1 + E2 + E3 + E4 + evidência empírica (Selo Previdenciário KBA) + ERRATA-001 (09/05/2026)
supersede: E5 v1.0
---

# MC-GOVBR — Catálogo de Travas e Falhas (v1.1 — pós-ERRATA-001)

> Documento E5 v1.1 — revisão da v1.0 à luz da **ERRATA-001 (09/05/2026)** que reposiciona o KBA Previdenciário como ferramenta diagnóstica de Bronze validado, **não como rota de elevação para Prata**.
>
> **Mudanças v1.0 → v1.1:** apenas seções §0.2 e §2 são afetadas pela errata. Demais seções permanecem intactas.
>
> Convenção:
> - **Fonte E1 [n]**: número da referência no inventário E1.
> - **EMPÍRICA**: trava observada em teste real ou em telas capturadas em 08-09/05/2026.
> - **INFERIDA**: trava deduzida a partir de E1/E2/E3/E4 mas sem fonte primária explícita.
> - IDs no formato T1.0X (técnicas), T2.0X (inclusão digital), T3.0X (jurídico-operacionais).

---

## 0. ALERTA — Descoberta empírica: Selo Previdenciário KBA

### 0.1 O que é

Em 08/05/2026, durante teste empírico com uma usuária Bronze real, foi observada uma **rota não documentada nas 52 fontes de E1**: o **Selo Previdenciário via KBA**, oferecido nativamente pelo Meu INSS quando o cidadão Bronze tenta acessar o app.

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

### 0.2 Impacto na Matriz E4

> ⚠ **ATUALIZAÇÃO 09/05/2026 (ERRATA-001):** O Selo Previdenciário KBA concede **apenas nível Bronze** (oficialmente: "Selo Cadastro Básico com Validação de Dados Previdenciários"). A análise de impacto do §0.2 original **superestimou** o alcance do KBA. O gargalo Prata permanece. Fontes oficiais: `acesso.gov.br/roteiro-tecnico/catalogoconfiabilidades.html` e FAQ `acesso.gov.br/faq/_perguntasdafaq/comoadquirirselocadastrobasicovalidacaodadosprevidenciarios.html`. Confirmação empírica: usuária JAN001 08-09/05/2026 — cooldown de 24h confirmado, nível permaneceu Bronze após tentativa.

**Análise corrigida:** o KBA **não altera** a Seção 3.1 do E4 ("O nó da jornada MC") como originalmente proposto. O gargalo conceitual descrito em E4 §3.1 — *"o nó é a consulta ao CNIS, exige Prata"* — **continua integralmente verdadeiro**. A descoberta empírica do KBA não cria 4ª rota de elevação; cria apenas uma **ferramenta diagnóstica auxiliar** que permite ao MC acessar dados básicos do CNIS (para fins de triagem Φ₁) **sem destravar protocolo digital**.

| Item E4 | Como está | Como fica com KBA pós-ERRATA-001 |
|---|---|---|
| E2 (triagem) bloqueado em Bronze | "Precisa Prata via banco / câmera / CIN" | **Mesmo diagnóstico mantido.** KBA não destrava E2 para protocolo. KBA só destrava acesso a metadados básicos do CNIS. |
| Mix esperado de elevação | 60% banco / 25% câmera traseira / 15% balcão | **Hierarquia revisada (ERRATA-001 §2.2):** Biometria facial 50-60% / Banco 25-30% / Presencial 10-15%. KBA fora do mix de elevação. |
| Custo médio API Humana por elevação | 17 min ponderado | A recalcular pós-ERRATA — não há mais "Rota 0 KBA"; mix é só Biometria/Banco/Presencial. |
| Cliente "sem biometria em base alguma" | Hoje vai para Rota 3 (balcão) | **Continua indo para Rota 3.** KBA não destrava esse perfil — KBA só dá Bronze validado. |

**Conclusão estrutural pós-ERRATA-001:** o gargalo conceitual descrito em E4 §3.1 permanece intacto. O KBA é útil ao MC apenas como **acesso diagnóstico** a dados próprios do cidadão — algo que também pode ser obtido por **CTPS física, CNIS físico, memória ou Central 135** sem precisar passar pelo questionário Dataprev. Ou seja: KBA é redundante com as 4 fontes de inteligência contributiva (E4.1 §3.1) **e introduz risco de cooldown** (T1.18). É **rota auxiliar de último recurso**, não rota principal.

<!-- Corrigido por ERRATA-001 v1.0 (09/05/2026) -->

### 0.3 Nova rota a catalogar — Rota auxiliar: KBA diagnóstico

> ⚠ **Reposicionada por ERRATA-001:** o que era "Rota 4: Selo Previdenciário KBA" passa a ser **"Rota auxiliar: KBA diagnóstico"** — não é rota de elevação. O conteúdo deste bloco é mantido como referência, mas a finalidade da rota é exclusivamente diagnóstica.

| Atributo | Valor |
|---|---|
| **Nome** | KBA diagnóstico — Selo Bronze validado via Dataprev |
| **Pré-requisitos** | (a) CPF ativo; (b) ter tido **alguma contribuição previdenciária** registrada no CNIS; (c) lembrar dados básicos; (d) smartphone ou PC com internet |
| **Passo a passo** | 1. Cidadão tenta acessar Meu INSS em Bronze → 2. Sistema redireciona para gateway "Selo Previdenciário" → 3. Continuar → 4. Autorizar OAuth → 5. Responder questionário KBA → 6. Habilitar Cadastro → 7. Cadastrar Senha → 8. Selo **Bronze validado** aplicado (não Prata) |
| **Limitação dura** | Cidadão que **NUNCA contribuiu** não consegue (opção "NUNCA CONTRIBUÍ" termina o fluxo). |
| **Limitação branda** | "Analfabeto previdenciário" provavelmente erra e cai em cooldown de 24h. |
| **Tempo estimado** | 5-10 min cliente + 3-5 min orientação MC. |
| **Acionável pela API Humana MC remotamente?** | **SIM, com nuance ética** (T3.12). Operador guia, não responde. |
| **Finalidade pós-ERRATA-001** | **Apenas diagnóstica** — permite ao MC obter metadados do CNIS para triagem Φ₁ quando todas as rotas de elevação (Biometria/Banco/Presencial) falharam **e** as 4 fontes alternativas de inteligência contributiva (CTPS / CNIS físico / memória / 135) não estão disponíveis. |
| **Fonte** | EMPÍRICA — 3 telas capturadas em 08/05/2026; classificação oficial confirmada em 09/05/2026. |

<!-- Corrigido por ERRATA-001 v1.0 (09/05/2026) -->

### 0.4 Revisão de E4 recomendada

> ⚠ **Atualizado por ERRATA-001:** as recomendações originais para E4 devem ser lidas à luz desta errata. O diff completo da revisão E4 → E4.2 está documentado na ERRATA-001 §3.1 e materializado em **MC-GOVBR-Matriz-NivelServico-v1_2-2026-0509**.

<!-- Corrigido por ERRATA-001 v1.0 (09/05/2026) -->

---

## 1. Inventário de travas por eixo

### EIXO 1 — Travas técnicas

Falhas de software, hardware, infraestrutura ou orquestração de serviços gov.br/Dataprev/SERPRO.

| ID | Nome curto | Descrição | Sintoma | Frequência | Fonte | Solução conhecida | Tempo | API Humana? |
|---|---|---|---|---|---|---|---|---|
| **T1.01** | Reconhecimento facial não funciona | Algoritmo TSE/SENATRAN não casa selfie atual com biometria de origem. | "Não foi possível reconhecer seu rosto." Tela vermelha. | **Alta** | E1 [8, 9, 11, 12, 31, 35] | Trocar iluminação, retirar óculos, repetir 2-3x; câmera traseira; conteúdo MC (vídeo institucional + simulador) ajuda muito. | 5-15 min | **Parcial** — operador orienta por WhatsApp; falha cai em rota alternativa. |
| **T1.02** | Bloqueio de 24 horas após N tentativas | Após ~3 falhas seguidas de liveness, gov.br bloqueia o CPF por 24h. | "Você atingiu o limite de tentativas. Tente novamente em 24 horas." | **Alta** | E1 [8, 12] | Aguardar 24h. Durante a janela, **migrar para Rota 2 (banco) — não para KBA, que dá só Bronze**. | 24h passivas | **Parcial** — operador redireciona para rota alternativa imediata. |
| **T1.03** | Câmera frontal de baixa qualidade | Smartphones populares (<R$700) têm câmera frontal abaixo do mínimo do liveness. | Erro genérico "não foi possível" mesmo com luz boa. | Média | E1 [10, 15] (substrato) | Usar câmera traseira assistida (Rota 1 com adaptação). | 20-40 min | **Sim** — operador orienta familiar a operar câmera traseira. |
| **T1.04** | Liveness check falha (movimento de cabeça) | Cliente não compreende ou não executa o "vire a cabeça devagar". | App congela ou erra após 30-40s. | **Alta** | E1 [8, 11, 35] | API Humana faz simulação prévia em videochamada; orientar movimento lento e contínuo; vídeo MC institucional. | 5-10 min de pré + 1 min app | **Sim** — coaching síncrono. |
| **T1.05** | Iluminação inadequada | Foto em ambiente escuro / contraluz / sombra dura. | "Imagem com baixa qualidade" ou liveness falha sem mensagem. | **Alta** | E1 [15] | Mudar de ambiente; janela atrás do cliente; lâmpada frontal difusa. | 2-5 min | **Sim** — operador identifica por preview da câmera. |
| **T1.06** | Fisionomia muito alterada | Idoso, doença, perda de peso, próteses, cirurgia, AVC — biometria origem (TSE 10 anos atrás) muito divergente da atual. | Liveness passa mas matching biométrico falha silenciosamente. | Média | E1 [7, 15] (substrato) | Não há solução técnica para a face. **Migrar para Rota 2 (banco) ou Rota 3 (balcão)**. KBA pode servir como diagnóstico. | — | **Não** — exige rota alternativa estrutural. |
| **T1.07** | App gov.br versão antiga | Aparelho com app gov.br <v3 não tem o módulo de liveness atualizado. | Liveness trava em "preparando" indefinidamente. | Média | E1 [BLOCO 5] (substrato) | Atualizar Play Store / App Store. | 5-15 min | **Sim** — operador orienta atualização. |
| **T1.08** | Android/iOS muito antigo | Android <8 / iOS <13 — gov.br oficialmente não suporta. | App não abre, fecha sozinho, ou nem instala. | Média | E1 [BLOCO 5] (substrato) | Trocar de aparelho ou Rota 3 (balcão). | — | **Não** — exige troca ou presencial. |
| **T1.09** | Cache do app travado | Sessão antiga preserva token inválido. | Erros aleatórios "tente novamente" em qualquer tela. | Média | E1 [31] | Limpar cache + dados + reinstalar. | 5-10 min | **Sim** — operador instrui passo a passo. |
| **T1.10** | Timeout do servidor Dataprev | Backend Dataprev cai ou responde lento — comum em horários de pico. | "Erro ao processar sua solicitação" ou tela em branco. | **Alta** | E1 [BLOCO 5, 31] (substrato) | Tentar fora de pico (após 22h, antes de 7h, fim de semana). | Variável | **Parcial** — operador identifica padrão e reagenda. |
| **T1.11** | Erro genérico "tente novamente mais tarde" | Falha sem código nem orientação. | Mensagem genérica em vermelho. | **Alta** | E1 [8, 9, 31] | Triagem de exclusão: rede? cache? horário? versão? | 10-20 min | **Sim** — checklist diagnóstico API Humana. |
| **T1.12** | 2FA SMS não chega | Operadora bloqueia SMS, número antigo, gateway gov.br atrasado. | "Aguardando SMS..." indefinidamente. | Média | E1 [BLOCO 5] (substrato) | Usar 2FA por e-mail; trocar número cadastrado. | 5-15 min | **Sim** — operador orienta alternativas. |
| **T1.13** | E-mail de validação não chega | Spam, e-mail antigo, erro de digitação. | Cliente nunca recebe link de confirmação. | Média | E1 [BLOCO 5] (substrato) | Verificar spam; recadastrar e-mail. | 10-30 min | **Sim** — operador valida domínio e reenvia. |
| **T1.14** | Senha esquecida + sem biometria para recuperar | Recuperação de senha gov.br exige biometria facial, que justamente o cliente não consegue. | "Para recuperar sua senha, faça reconhecimento facial." Liveness falha. | **Alta** | E1 [BLOCO 5] (substrato) | Recuperação via banco credenciado **ou** KBA diagnóstico (só recuperação de senha — não eleva nível). | 10-30 min | **Sim** — KBA diagnóstico ou banco. |
| **T1.15** | Conta criada com CPF de terceiro (golpe) | Golpista criou conta gov.br no CPF da vítima. | Cliente não consegue criar nem recuperar. | Baixa | E1 [BLOCO 4] (substrato) | 0800 SERPRO + BO + LAI + Defensoria. | Dias-semanas | **Não** — exige caminho jurídico/policial. |
| **T1.16** | KBA — cidadão não sabe responder | Tem contribuição mas esqueceu detalhes. | Erra perguntas; sistema bloqueia. | **Média** (pós-ERRATA: KBA não é primeira escolha) | EMPÍRICA | Pré-treino com CNIS + CTPS antes de iniciar KBA. **Mas pós-ERRATA: se cliente está nessa situação, é melhor ir direto para Rota 1 (biometria) ou Rota 2 (banco)**. | 10-20 min de pré + 5 min app | **Sim, com nuance ética** (T3.12). |
| **T1.17** | KBA — timeout/erro Dataprev durante questionário | Dataprev cai mid-questionário. | Tela branca, erro 500, sessão expirada. | Média | EMPÍRICA / INFERIDA | Tentar fora de pico. | Variável | **Parcial.** |
| **T1.18** | KBA — cidadão erra todas as perguntas e é bloqueado | **Cooldown de 24h confirmado** (JAN001 08-09/05/2026). | Bloqueio temporário do CPF no fluxo KBA por 24h. | Média | EMPÍRICA confirmada | Aguardar 24h. **Migrar imediatamente para rota de elevação real** (Biometria/Banco/Presencial). | 24h | **Não** — recurso é aguardar e redirecionar. |

<!-- T1.16 e T1.18 reclassificados (frequência reduzida, urgência menor) por ERRATA-001 v1.0 (09/05/2026) -->

### EIXO 2 — Travas de inclusão digital

Barreiras estruturais que **não são bugs** — são exclusões.

| ID | Nome curto | Descrição | Sintoma | Frequência | Fonte | Solução conhecida | Tempo | API Humana? |
|---|---|---|---|---|---|---|---|---|
| **T2.01** | Cliente sem smartphone | Não tem aparelho próprio. | "Não tenho celular" ou "uso o do meu filho". | **Alta** (rural / idoso) | E1 [BLOCO 2] (substrato) | Smartphone de familiar / vizinho-anjo / lan house. | Variável | **Parcial** — depende de existir dispositivo acessível. |
| **T2.02** | Smartphone simples sem câmera frontal | Aparelho R$300-500 ou modelo "para idoso". | Não há câmera frontal selecionável. | Média | E1 [BLOCO 5] (substrato) | Câmera traseira assistida. | 20-40 min | **Parcial.** |
| **T2.03** | Cliente sem internet (área rural) | Não tem dados móveis nem Wi-Fi. | "Não consigo acessar". | **Alta** (sertão, ribeirinho, quilombola) | E1 [BLOCO 2] (substrato) | CRAS/UBS/escola com Wi-Fi público; agente comunitário com hotspot; rota presencial. | Variável | **Não** — exige presença local ou deslocamento. |
| **T2.04** | Internet instável (3G fraco) | Cliente tem cobertura mas o liveness/KBA cai por latência. | App falha sempre na mesma etapa, em horários de pico. | **Alta** | E1 [BLOCO 2] (substrato) | Janela de baixa carga; deslocar para ponto melhor. | Variável | **Parcial.** |
| **T2.05** | Cliente analfabeto absoluto | Não lê nem em letra de forma. | Não consegue interpretar telas. | Média (público MC: alta entre idosos rurais) | E1 [BLOCO 6] (substrato) | API Humana lendo cada tela em voz alta + familiar local; em casos extremos: representação legal. | 30-60 min | **Parcial.** |
| **T2.06** | Cliente analfabeto digital | Sabe ler, mas não opera apps. | Cliente toca em lugar errado, fecha telas. | **Alta** (público MC) | E1 [10, 20] (substrato) | Coaching síncrono; vídeo MC institucional reduz drasticamente; tutoriais por jornada. | 30-60 min | **Sim** — núcleo do produto MC. |
| **T2.07** | Idoso com tremor (Parkinson) | Mão treme — câmera mexe, dedo fora do alvo. | Liveness perde foco. | Média | E1 [10, 15, 20] (substrato) | Apoiar aparelho em superfície; câmera traseira por terceiro. | 30-50 min | **Parcial.** |
| **T2.08** | PcD visual severa | Cego ou baixa visão extrema. | Não vê telas. | Média | E1 [10] | TalkBack/VoiceOver com auxiliar. **Pós-ERRATA: KBA não é solução** (também exige leitura). | 30-60 min | **Parcial.** |
| **T2.09** | PcD motora (não consegue segurar smartphone) | Tetraplegia, AVC severo, ELA. | Cliente fisicamente não opera aparelho. | Baixa-Média | E1 [BLOCO 6] (substrato) | Familiar local; em casos sem familiar: TDA ou curatela formal. | Estrutural | **Não.** |
| **T2.10** | Surdo-cego | Comunicação extremamente limitada. | Nem TalkBack nem libras resolvem. | Baixa | E1 [BLOCO 6] (substrato) | Curatela formal + cadastro de representante legal INSS. | Estrutural | **Não.** |
| **T2.11** | Acamado | Idoso ou PcD em hospital, ILPI. | Não há como o cliente operar nem como deslocar. | Média | E1 [BLOCO 6] (substrato) | API Humana via familiar visitante + cadastro de representante legal. | 1-3 semanas | **Parcial.** |
| **T2.12** | Cliente em ILPI | Idoso institucionalizado. | Sem familiar próximo. | Média | E1 [BLOCO 6] (substrato) | Curatela formal ou cadastro de cuidador como representante legal. | Estrutural | **Não.** |
| **T2.13** | Indígena sem documentação completa | Cliente sem RG, sem comprovante. | Cadastro Bronze fragilíssimo. | Média (regional) | E1 [BLOCO 6] (substrato) | FUNAI / cacicado / SESAI; uso de RANI; balcão INSS rural. | Estrutural | **Não.** |
| **T2.14** | Quilombola em comunidade isolada | Mesmo perfil de T2.03 + T2.13 + distância. | Distância de qualquer balcão. | Baixa | E1 [BLOCO 6] (substrato) | Mutirão presencial; Fundação Palmares / SEPPIR. | Estrutural | **Não.** |
| **T2.15** | KBA — nunca contribuiu | Cidadão BPC puro, informal vitalício. | Opção "NUNCA CONTRIBUÍ" termina o fluxo sem selo. | **Alta** entre BPC | EMPÍRICA | KBA não funciona. Migrar para Rota 1 (biometria) / Rota 2 (banco) / Rota 3 (balcão). | — | **Não.** |
| **T2.16** | Analfabeto previdenciário | Tem contribuição mas não sabe datas. | Erra perguntas do KBA. | **Alta** (público MC) | EMPÍRICA / INFERIDA | Pré-orientação com CNIS impresso. **Pós-ERRATA: KBA não é primeira escolha — biometria facial assistida é prioritária**. | 15-30 min de pré | **Sim, com nuance.** |

### EIXO 3 — Travas jurídico-operacionais

| ID | Nome curto | Descrição | Sintoma | Frequência | Fonte | Solução conhecida | Tempo | API Humana? |
|---|---|---|---|---|---|---|---|---|
| **T3.01** | Familiar quer operar conta sem procuração | Filho/cuidador tenta entrar na conta gov.br do idoso sem instrumento formal. | Acesso por senha guardada → veto LGPD + Lei 14.063/2020. | **Alta** (público MC) | E1 [BLOCO 4] / E3 cadeia (b) | Recusar custódia. Oferecer SPE (T3.07), procuração e-CAC, cadastro de representante legal. | 30-60 min | **Sim** — núcleo do ADR-009a. |
| **T3.02** | Curatela judicial existe mas não cadastrada no INSS | Família tem decisão de curatela mas nunca foi ao INSS averbar. | INSS não reconhece vínculo. | Média | E1 [17, 18, 44] | Cadastro de Representante Legal INSS (curador precisa Prata). | 1-3 semanas | **Sim.** |
| **T3.03** | Cliente sob TDA — operacionalização | TDA existe mas INSS opera mal. | Servidor pede curatela porque "TDA não está no script". | Baixa-Média | E3 cadeia (b) e (d) | Defensoria Pública para insistência institucional + cadastro do apoiador. | Semanas | **Parcial.** |
| **T3.04** | Procuração analógica em papel | Procuração em papel — gov.br/SPE não aceita upload. | Cliente chega com papel físico achando que basta. | Média | E1 [BLOCO 4.2] (substrato) | Refazer eletronicamente: e-CAC ou SPE gov.br. | 30-60 min | **Sim.** |
| **T3.05** | Senha do cliente em custódia do MC | Operador retém credencial gov.br. | Violação Termo de Uso + LGPD + Lei 14.063/2020. | **Crítica** (zero tolerância MC) | E1 [BLOCO 4] / ADR-009a | **PROIBIDO POR DESENHO.** | — | **Não — vetado.** |
| **T3.06** | Filho Bronze quer acesso à conta da mãe Prata | SPE bloqueia: outorgado precisa Prata. | "O procurador deve ter conta nível Prata ou Ouro." | Média | E4 §2.2 | Filho precisa elevar a própria conta primeiro. | Dias-semanas | **Sim.** |
| **T3.07** | Outorgante Prata mas outorgado Bronze | Mesmo padrão T3.06 invertido. | "O procurador deve ter conta nível Prata ou Ouro." | Média | E1 [40] / E4 §2.2 | Subir o outorgado primeiro. Em emergência: cadastro de representante legal por documento físico. | Dias | **Sim.** |
| **T3.08** | Cliente já caiu em golpe — conta clonada | Conta gov.br nas mãos do golpista. | Cliente não consegue acessar nem recuperar. | Média (idoso) | E1 [BLOCO 5] (substrato) / T1.15 | 0800 SERPRO + BO + DPF + Defensoria. | Semanas-meses | **Não.** |
| **T3.09** | Conta gov.br criada por terceiro (golpe na origem) | Cliente nunca criou conta. | Sistema diz "conta já existe", recuperação por biometria não funciona. | Baixa-Média | E1 [BLOCO 5] (substrato) | Mesma rota T3.08 + denúncia SERPRO/MGI. | Semanas-meses | **Não.** |
| **T3.10** | Beneficiário falecido — herdeiros precisam acessar | Família sem acesso legal. | Conta travada. | Média | E1 [BLOCO 4.5] (substrato) | Vara de Família + INSS presencial com carta de inventariante. | Meses | **Não.** |
| **T3.11** | Menor de 16 anos no CadÚnico / BPC infantil | Pais não cadastrados, criança sem CPF próprio. | BPC LOAS exige CadÚnico do grupo familiar. | Média | E1 [7, 32, 41] | Pais inscrevem família no CRAS. | Semanas | **Parcial.** |
| **T3.12** | KBA — risco ético de "soprar resposta" | Operador-MC com acesso ao CNIS pode "preparar" o cidadão antes do KBA. | Fronteira tênue entre revisão legítima e substituição da prova. | **Crítica** (relevância arquitetural) | EMPÍRICA / INFERIDA | Protocolo Cenário A: revisão CNIS = direito do titular; Cenário B = vetado. | Política | **Sim, com guard-rails.** |

---

## 2. Mapa de frequência × impacto

> ⚠ **Atualizado por ERRATA-001 (09/05/2026):** T1.16 e T1.18 movidas do Quadrante B (atacar primeiro) para o Quadrante C (acompanhar). Razão: como KBA agora é último recurso, essas travas são menos frequentes e menos urgentes no fluxo padrão.

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
        T1.16 KBA não sabe responder ⓘ |
        T1.18 KBA bloqueio 24h ⓘ       |
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

ⓘ = movido do Quadrante B para C pela ERRATA-001 v1.0 (09/05/2026)
```

**Quadrante B (alta frequência + alto impacto) — pós-ERRATA-001:** **15 travas** (era 17 na v1.0; T1.16 e T1.18 saíram). A conclusão estratégica permanece: o MC deve concentrar workflow de produção neste quadrante, sendo que **13 das 15 são abordáveis pela API Humana remotamente**.

<!-- Corrigido por ERRATA-001 v1.0 (09/05/2026) -->

**Travas em quadrantes mais leves (alta frequência, baixo impacto unitário) — preservadas da v1.0:**
- T1.03 Câmera frontal pobre, T1.07 App versão antiga, T1.09 Cache travado, T1.12 SMS 2FA, T1.13 E-mail validação, T1.17 KBA timeout, T3.04 Procuração analógica.

---

## 3-8. Demais seções

> As seções §3 (Travas que API Humana resolve remotamente), §4 (Travas que exigem anjo local), §5 (Travas fora do escopo MC), §6 (Heat map por persona), §7 (Lacunas do catálogo) e §8 (Recomendação de revisão E4) **permanecem inalteradas pela ERRATA-001** — a errata afetou apenas o reposicionamento estratégico do KBA (§0 e §2 acima).
>
> **Nota de leitura:** ao reler §3-§8 da v1.0 com a v1.1 em mãos, considere que toda menção ao "KBA como rota de elevação" deve ser lida como "KBA diagnóstico" — não há outras correções literais a aplicar nessas seções, mas a interpretação estratégica delas se desloca conforme ERRATA-001 §2.
>
> **Lacuna L_KBA_2 (escopo do selo)** do §7 da v1.0 está agora **resolvida desfavoravelmente** — o selo é Bronze validado, não Prata. A lacuna pode ser fechada como "respondida (negativamente para a hipótese otimista)".

---

E5 v1.1 gravado: G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Gestão Software\Documentação\CONTA GOV.BR PRATA OURO\MC-GOVBR-CatalogoTravas-v1_1-2026-0509.md
