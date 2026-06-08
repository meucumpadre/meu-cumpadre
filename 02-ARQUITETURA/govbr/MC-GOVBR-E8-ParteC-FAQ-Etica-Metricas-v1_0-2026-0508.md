---
título: MC-GOVBR-E8-ParteC-FAQ-Etica-Metricas
versão: v1_0
data: 2026-05-08
status: RASCUNHO
autor: Claude Code × Alessandro Neves
parte: C de 3 (FAQ + Ética + Métricas)
---

# MC-GOVBR — E8 Parte C — FAQ, Posição Ética e Métricas

> Documento operacional que o Beto consulta no dia a dia para responder perguntas recorrentes (§1), revisar a posição ética semanalmente (§2), articular o Anjo Local quando necessário (§3) e medir o produto desde o primeiro caso (§4). Suplementa a Árvore de Decisão (Parte A) e o Catálogo de Rotas (Parte B).

---

## 1. FAQ operacional — 30 perguntas

> Perguntas como o Beto realmente faz, sem formalidade. Cada resposta: direta em ≤3 linhas + cenário Parte A + rota recomendada + trava E5 quando aplicável.

### Bloco KBA

**P01: O cliente tem conta Bronze e nunca ouviu falar de nível. O que eu faço primeiro?**
- **Resposta:** rodar Hook 0 (5 perguntas WhatsApp em 2-5 min). Não tente adivinhar a rota antes. As respostas P1-P5 caem em uma das 5 regras (R1-R5) e te dão a rota certa.
- **Cenário:** aplicável a quase todos (C01-C18 começam pelo Hook 0).
- **Rota:** definida pelo Hook 0.
- **Trava E5:** nenhuma — Hook 0 é prevenção contra rota errada.

**P02: O cliente está no questionário KBA e não sabe a resposta. Posso dizer pra ele?**
- **Resposta:** **NÃO.** Você pode lembrar dele do que está na CTPS/CNIS dele (*"lembra que sua carteira mostra 2008?"*). Você nunca lê a opção da tela e fala "clica nessa". A linha é: você devolve dado próprio dele; você não dá gabarito.
- **Cenário:** C01-C04, C13.
- **Rota:** Rota 0 (KBA Cenário A ou A+).
- **Trava E5:** T3.12 (risco ético — protocolo dedicado).

**P03: O cliente errou o KBA. Bloqueou? Pode tentar de novo?**
- **Resposta:** comportamento de bloqueio é desconhecido (lacuna L_KBA_1). Conservadoramente, aguardar 24-48h antes de nova tentativa. Reforçar inteligência via 135 nesse intervalo. Se errar 2x → Rota 1 ou 3.
- **Cenário:** C13.
- **Rota:** aguardar + reforço + nova tentativa Rota 0; depois migrar.
- **Trava E5:** T1.18.

**P04: O KBA deu certo. Isso vale como Prata pra tudo ou só pro Meu INSS?**
- **Resposta:** **não confirmado** (lacuna L_KBA_2). Hipótese conservadora: vale só dentro do Meu INSS. Se cliente precisa de Φ₀ digital ou e-CAC, testar empiricamente. Se travar fora do INSS, complementar com Rota 1.
- **Cenário:** todos pós-KBA.
- **Rota:** testar; complementar se necessário.
- **Trava E5:** lacuna L_KBA_2 do E5 §7.

**P05: O cliente nunca contribuiu pro INSS. O KBA funciona?**
- **Resposta:** **NÃO.** Questionário tem opção "NUNCA CONTRIBUÍ" — fluxo termina sem selo. Migrar imediatamente para Rota 1 (banco — funciona para BPC puro) ou Rota 3 (balcão).
- **Cenário:** C06, C07, C08.
- **Rota:** Rota 1 (Caixa) ou Rota 3.
- **Trava E5:** T2.15.

### Bloco Biometria e facial

**P06: O reconhecimento facial não funciona de jeito nenhum. Já tentou 5 vezes.**
- **Resposta:** **PARE imediatamente** — está prestes a bloquear 24h. Migrar para Rota 0 (se há contribuição) ou Rota 1 (se bancarizado). Tentar facial de novo só após 24h **e** com Cenário A+.
- **Cenário:** C12.
- **Rota:** Rota 0 ou Rota 1.
- **Trava E5:** T1.01, T1.02 iminente.

**P07: O cliente está bloqueado 24 horas. O que fazer?**
- **Resposta:** o bloqueio é só do reconhecimento facial — outras rotas continuam abertas. Rodar Hook 0 e ir para Rota 0 (KBA) ou Rota 1 (banco) imediatamente, sem esperar.
- **Cenário:** C12.
- **Rota:** Rota 0 ou Rota 1.
- **Trava E5:** T1.02.

**P08: O celular do cliente é muito velho e o app gov.br não instala.**
- **Resposta:** Android <8 ou iOS <13 não suporta. Pedir aparelho de familiar emprestado para a sessão; ou ir presencial (Rota 3). KBA também roda em PC (lan house, biblioteca pública).
- **Cenário:** variante C03 ou C07.
- **Rota:** aparelho emprestado + Rota 0/1, ou Rota 3.
- **Trava E5:** T1.08.

**P09: O cliente é PcD visual e não consegue alinhar o rosto na câmera.**
- **Resposta:** Rota 2 está descartada. Ir para **Rota 0 KBA** (não exige selfie — perfeito para PcD visual) com TalkBack/VoiceOver e Cenário A+. Se não há contribuição → Rota 1 ou Rota 3.
- **Cenário:** variante C05.
- **Rota:** Rota 0 com Cenário A+.
- **Trava E5:** T2.08.

**P10: O cliente tem Parkinson e a foto sai tremida.**
- **Resposta:** **Rota 0 KBA é a melhor opção** — KBA não exige selfie, contorna o tremor inteiramente. Se há contribuição → KBA. Se não → Rota 1 com aparelho apoiado fixo, ou Rota 2 com familiar segurando firme.
- **Cenário:** C05.
- **Rota:** Rota 0.
- **Trava E5:** T2.07.

### Bloco Bancos

**P11: O cliente tem conta na Caixa mas nunca usou o app. Dá pra fazer por lá?**
- **Resposta:** precisa primeiro ativar o internet banking. Mais rápido: cliente vai à agência da Caixa e o gerente ativa o Caixa Tem na hora (5-10 min). Depois Beto retoma Rota 1 remotamente.
- **Cenário:** variante C06.
- **Rota:** Rota 1 com pré-passo presencial Caixa.
- **Trava E5:** nenhuma específica.

**P12: O cliente é do Sicoob ou Sicredi. Funciona igual aos grandes?**
- **Resposta:** **depende da cooperativa regional**. Cada cooperativa tem implementação OAuth diferente — algumas funcionam, outras não. **Testar primeiro** 5 min; se rejeitar, migrar para Rota 0/3. Documentar a cooperativa.
- **Cenário:** variante C03.
- **Rota:** testar Rota 1 + fallback Rota 0/3.
- **Trava E5:** lacuna L5 do E5 §7.

**P13: O cliente não sabe a senha do internet banking. Melhor ir na agência?**
- **Resposta:** sim, recuperação geralmente exige presencial. Enquanto isso, **se há contribuição, ir por Rota 0 (KBA) que não depende do banco**.
- **Cenário:** variante C01-C04.
- **Rota:** Rota 0 se aplicável; senão presencial banco.
- **Trava E5:** nenhuma específica.

### Bloco Representação e custódia

**P14: O filho do cliente quer fazer tudo pelo pai. Pode?**
- **Resposta:** **pode, com procuração eletrônica SPE**. Pai e filho ambos precisam Prata. Filho nunca acessa a conta do pai (intransferibilidade Lei 14.063). Caminho legal: gov.br → SPE → outorga 5 anos.
- **Cenário:** C16.
- **Rota:** subir ambos a Prata + SPE.
- **Trava E5:** T3.01, T3.06, T3.07.

**P15: Tenho a senha gov.br do cliente guardada. Posso usar pra resolver rápido?**
- **Resposta:** **NUNCA. Vetado por desenho do MC (ADR-009a).** Apaga a senha agora e nunca mais guarda. Isso é Cenário B — exatamente o que despachantes informais fazem. Se persistir a tentação, leia §2 deste documento.
- **Cenário:** aplicável a todos.
- **Rota:** recusar e oferecer SPE (C16) ou Cadastro de Representante Legal (C17).
- **Trava E5:** T3.05 (crítica — zero tolerância).

**P16: O cliente tem curador judicial mas o INSS não reconhece. O que fazer?**
- **Resposta:** cadastrar o curador como representante legal no Meu INSS. Curador precisa Prata. Anexar decisão judicial + RG/CPF do curado. Análise INSS ~1-3 semanas. Se recusada, refazer com lista exata.
- **Cenário:** C17.
- **Rota:** Cadastro de Representante Legal INSS.
- **Trava E5:** T3.02.

**P17: O cliente é menor de 16 e precisa do CadÚnico.**
- **Resposta:** CPF do menor herda registro do responsável (mãe geralmente). Mãe inscreve grupo familiar no CadÚnico via CRAS presencial. Se BPC LOAS infantil, depois abrir DER no Meu INSS pela conta da mãe (Prata).
- **Cenário:** C18.
- **Rota:** Φ₀ presencial CRAS + Φ₁ Meu INSS.
- **Trava E5:** T3.11.

### Bloco CadÚnico e Φ₀

**P18: A cliente é mãe solo, nunca trabalhou registrada, precisa do Bolsa Família. KBA funciona?**
- **Resposta:** **NÃO** — KBA exige contribuição. Caminho: pré-cadastro online (Bronze basta) + CRAS presencial. Se ela usa Caixa Tem, eleva para Prata via Rota 1 e ganha o app Meu CadÚnico.
- **Cenário:** C06.
- **Rota:** CRAS + Rota 1 (Caixa).
- **Trava E5:** T2.15.

**P19: O CadÚnico precisa de Prata? Ou Bronze basta?**
- **Resposta:** **Bronze basta** para pré-cadastro online + atualização presencial CRAS. **Prata** desbloqueia o app Meu CadÚnico para acompanhamento contínuo. Para entrada Φ₀, Bronze é suficiente.
- **Cenário:** C06, C18.
- **Rota:** Bronze para entrar + Prata se quer acompanhar.
- **Trava E5:** nenhuma específica.

**P20: A cliente precisa atualizar o CadÚnico urgente. Caminho mais rápido?**
- **Resposta:** agendamento direto no CRAS local. Atualização efetiva é **sempre presencial** com entrevistador SUAS. Pré-cadastro online ajuda chegar ao CRAS com dados organizados.
- **Cenário:** C18.
- **Rota:** CRAS direto.
- **Trava E5:** nenhuma específica.

### Bloco CNIS e documentos

**P21: O cliente tem um papel velho do INSS em casa. Serve pra alguma coisa?**
- **Resposta:** **serve muito.** Foto pelo WhatsApp imediatamente. Extrato CNIS = melhor cola legítima Rota 0. Carta de concessão = ajuda em prova de vida e recurso CRPS. Decisão de aposentadoria = ajuda em revisões.
- **Cenário:** C04 principalmente.
- **Rota:** Rota 0 com CNIS físico.
- **Trava E5:** nenhuma — destravador.

**P22: A CTPS do cliente é daquelas antigas azuis. Posso usar?**
- **Resposta:** **sim, é ouro.** Foto das páginas com carimbos. Cada carimbo dá empresa, admissão, saída. Reconstroi linha do tempo + cola legítima Rota 0 + prova administrativa Lei 9.784/1999 em recurso CRPS.
- **Cenário:** C01, C03.
- **Rota:** Rota 0 com CTPS como cola.
- **Trava E5:** nenhuma — destravador.

**P23: O cliente nunca foi ao INSS na vida. Como consigo o CNIS dele?**
- **Resposta:** **Fonte 4 — ligar 135**. Beto liga (com cliente em standby + autorização gravada), informa CPF + dados pessoais e pede extrato CNIS por telefone. Atendente lê ou envia por e-mail. 20-30 min mas funciona.
- **Cenário:** C02 principalmente.
- **Rota:** 135 + Rota 0.
- **Trava E5:** nenhuma específica.

### Bloco Prova de vida e Φ₄

**P24: O beneficiário precisa fazer prova de vida. Tem que ser Ouro?**
- **Resposta:** pelo app Meu INSS, sim, exige Ouro (selfie liveness). **Mas há alternativa: prova de vida via banco pagador (TAA ou agência) — não exige Ouro nem app.** Mais simples para idoso.
- **Cenário:** C10.
- **Rota:** prova de vida no banco pagador.
- **Trava E5:** nenhuma específica.

**P25: Dá pra fazer prova de vida no banco ao invés do app?**
- **Resposta:** **sim, é geralmente o caminho mais fácil.** Cliente vai à agência ou TAA do banco pagador, faz biometria (5-10 min). Banco transmite para INSS automaticamente em 24-48h.
- **Cenário:** C10.
- **Rota:** banco pagador.
- **Trava E5:** nenhuma específica.

### Bloco Problemas graves

**P26: Acho que o CPF do cliente foi usado por golpista no gov.br.**
- **Resposta:** **não tente resolver pelo gov.br** — é crime. BO + 0800 SERPRO + Defensoria + PF (crime federal contra identidade digital). MC acompanha mas não opera tecnicamente. **Escalonar Alessandro imediatamente.**
- **Cenário:** C15.
- **Rota:** Rota Jurídica.
- **Trava E5:** T1.15, T3.08, T3.09.

**P27: O cliente perdeu o celular e não consegue mais entrar na conta.**
- **Resposta:** depende. Se lembra a senha → entra de qualquer dispositivo. Se não lembra → cai em T1.14 → KBA Previdenciário ou banco. Se 2FA estava só por SMS → recadastrar telefone (depende do canal de recuperação disponível).
- **Cenário:** variante C14.
- **Rota:** Rota 0 ou Rota 1.
- **Trava E5:** T1.14.

**P28: O cliente não tem documento nenhum. Nem RG.**
- **Resposta:** caminho é emitir RG/CIN antes de qualquer rota gov.br. Direcionar para Posto Identificação Civil estadual com certidão de nascimento (se também não tiver, segunda via no cartório de origem). Caso pode ser de Defensoria Pública.
- **Cenário:** variante C09.
- **Rota:** emitir documento + depois Rota 0/1/3.
- **Trava E5:** T2.13.

**P29: O cliente está acamado e não sai de casa.**
- **Resposta:** se tem contribuição **e familiar local** → Rota 0 KBA com Cenário A+ (familiar segura aparelho, cliente responde verbalmente). Se não tem familiar → Anjo Local (§3) ou requisitar prova de vida domiciliar (Lei 8.213). Se PcD severo → Cadastro de Representante Legal (C17).
- **Cenário:** C05 ou C17.
- **Rota:** Rota 0 A+ ou C17.
- **Trava E5:** T2.11.

**P30: Nenhuma rota funcionou. O que eu faço?**
- **Resposta:** documentar tudo que tentou + escalonar Alessandro com **Protocolo de Escalonamento** (abaixo). Não inventar 5ª rota. Não tentar Cenário B nunca.
- **Cenário:** caso atípico — investigação.
- **Rota:** escalonar.
- **Trava E5:** caso a caso.

#### Protocolo de escalonamento para Alessandro (preencher antes de mandar)

> Beto preenche este formulário e envia para o Alessandro **antes** de declarar o caso encerrado. Sem o formulário preenchido, o caso não está escalado — está abandonado.

```
=== PROTOCOLO DE ESCALONAMENTO MC — caso Beto → Alessandro ===

[1] Identificação do cliente
- Nome completo: ____________________________
- CPF: ____________________________
- Telefone WhatsApp: ____________________________
- Município / UF: ____________________________
- Idade aproximada: ____________________________

[2] Resultado do Hook 0
- P1 (já trabalhou registrado?): Sim / Não / Não sabe
- P2 (tem CTPS física?): Sim / Não / Sim mas não acha
- P3 (tem papel do INSS em casa?): Sim / Não
- P4 (lembra ano do último trabalho?): [ano] / Não lembro
- P5 (recebe algum benefício?): BPC / BF / Aposentadoria / Pensão / Nenhum
- Regra disparada: R1 / R2 / R3 / R4 / R5
- Cenário Parte A previsto: C__

[3] Rotas tentadas (em ordem cronológica)
- Rota 0 (KBA): ☐ não tentou ☐ tentou — resultado: ____________
- Rota 1 (banco): ☐ não tentou ☐ tentou — banco: __________ — resultado: ____________
- Rota 2 (câmera traseira): ☐ não tentou ☐ tentou — resultado: ____________
- Rota 3 (presencial): ☐ não tentou ☐ tentou — resultado: ____________

[4] Travas identificadas (IDs do E5)
- Trava 1: T___ — sintoma: ____________
- Trava 2 (se houver): T___ — sintoma: ____________
- Trava 3 (se houver): T___ — sintoma: ____________

[5] Recomendação Beto (rota seguinte sugerida)
- ____________________________________________________

[6] Bloqueador percebido (em 1 frase)
- ____________________________________________________

[7] Tempo total já investido no caso (h:min)
- ___________________

[8] Anexos enviados ao Alessandro (lista de arquivos / fotos / áudios)
- ____________________________________________________
```

> **Regra do escalonamento:** o Beto **nunca declara um caso encerrado sem fechar com o Alessandro**. Se o Alessandro está fora do horário, o caso fica em **status pendente** até a próxima janela de revisão — não desliga, não promete prazo.

---

## 2. Posição ética consolidada — leitura obrigatória antes de iniciar

> Este bloco é **INVIOLÁVEL.** Todo operador lê uma vez por semana, antes de iniciar a primeira jornada da semana.

### Os três cenários de operação KBA — decisão Alessandro 08/05/2026 (transcrição literal de E4.1 §5.4)

#### Cenário A — Preparação (APROVADO)

> **MC colhe inteligência contributiva (uma das 4 fontes) → monta a "cola" → cidadão abre sessão gov.br no PRÓPRIO celular → Beto guia pelo WhatsApp:** *"Dona Maria, vai aparecer pergunta sobre o ano. Pela sua carteira, a resposta é 2008. Clica em 2008."* **Cidadão opera, MC orienta.**

- **Por que é legítimo:** o conteúdo da "cola" é **dado próprio do titular** (CNIS é dele, CTPS é dele, memória é dele, extrato pelo 135 também é dele — direito de acesso LGPD Art. 18, I-II). O MC não introduz informação externa nem responde no lugar; o MC **organiza e devolve ao cidadão a própria história**.
- **Por que não viola Lei 14.063/2020 Art. 6º:** a sessão é do cidadão, no aparelho do cidadão, com identificação do cidadão. Não há transferência de identidade digital — há assistência técnica.
- **Sustentação ética:** equivale ao filho que abre o álbum de família junto com a mãe e diz *"olha, esse aniversário foi em 1989"* — não está burlando a memória, está reativando-a com prova material.

#### Cenário A+ — Operação assistida com sessão compartilhada (APROVADO com protocolo)

> **Cidadão em videochamada WhatsApp com Beto. Beto vê a tela do cidadão (compartilhamento). Cidadão clica onde Beto indica. Tudo gravado com consentimento. Assistência técnica, não substituição de identidade.**

- **Por que é necessário:** clientes com analfabetismo digital severo (E5 T2.06) ou tremor (T2.07) podem não conseguir interpretar/operar telas mesmo com a "cola" do Cenário A.
- **Protocolo obrigatório:**
  1. Consentimento explícito gravado no início da sessão: *"O senhor está autorizando que eu veja a tela do seu celular para te ajudar a clicar nos botões certos. Eu não vou pegar sua senha. Posso continuar?"*
  2. Cidadão sempre digita as próprias credenciais e clica nos próprios botões — Beto **nunca** opera o aparelho do cidadão remotamente.
  3. Sessão gravada do início ao fim, retenção 5 anos para auditoria/defesa.
  4. Auditoria amostral 100% das primeiras 50 sessões, depois 10% rotativo.

#### Cenário B — Operação delegada (VETADO por desenho — ADR-009a)

> **MC tem senha em custódia → Beto abre sessão no computador do MC → responde KBA pelo cidadão.**

- **Por que é vetado:** viola **três camadas simultaneamente**:
  1. **Lei 14.063/2020 Art. 6º** — vedação à transferência da identidade digital.
  2. **ADR-009a do MC** — custódia zero de credenciais (princípio fundante do produto).
  3. **Termo de Uso da Plataforma gov.br** — intransferibilidade da conta.
- **Por que importa diferenciar:** este é **exatamente o que despachantes informais fazem**. A diferença entre o MC e um despachante não é a tecnologia (são as mesmas ferramentas: WhatsApp, smartphone, conta gov.br). A diferença é **o vetor ético**: o despachante captura a identidade do cliente; o MC **recusa** capturar e devolve agência ao cliente.
- **Inversão Cósmica (Alessandro):** mesmas ferramentas, propósito oposto. O Cenário B **destruiria a tese** do MC — não apenas seria ilegal, seria **conceitualmente o mesmo produto que o MC se propõe a substituir**.

**Operacionalização do veto:** o MC nunca pede senha gov.br ao cliente; nunca digita por ele em aparelho do MC; nunca opera sessão do cliente em hardware que não seja o do próprio cliente (com a única exceção do A+, onde o cliente continua operando o próprio aparelho — Beto apenas vê a tela e orienta verbalmente).

---

### REGRA DE OURO

> **Na dúvida, pergunte: se a Dona Zilda soubesse exatamente o que estou fazendo, ela ficaria tranquila? Se sim, prossiga. Se não, pare e pergunte ao Alessandro.**

A regra de ouro é a heurística de bolso. Se você sente desconforto em descrever para a cliente, em palavras simples e sem jargão, exatamente o que está fazendo — provavelmente está em zona cinza ou já cruzou a linha. Pare.

---

### CINCO COISAS QUE O OPERADOR NUNCA FAZ

> Ler em voz alta. Imprimir e colar na parede. Reler toda segunda-feira.

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   1.  Nunca entro na conta gov.br do cliente.                   │
│       Ele entra. Eu guio.                                       │
│                                                                 │
│   2.  Nunca respondo o questionário pelo cliente.               │
│       Ele responde. Eu preparo.                                 │
│                                                                 │
│   3.  Nunca guardo senha fora do Bitwarden MC.                  │
│       Senha no WhatsApp, no papel ou no e-mail: NÃO.            │
│                                                                 │
│   4.  Nunca prometo prazo de concessão do INSS.                 │
│       O INSS decide. Não o MC.                                  │
│                                                                 │
│   5.  Nunca cobro além do que o contrato Φ₁ ou Φ₀ prevê.        │
│       Nenhum extra, nenhuma "taxa de sucesso" no previdenciário.│
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 3. Protocolo do Anjo Agente Local

### Critérios para ativação

Beto ativa o Anjo Local **quando todas** abaixo forem verdadeiras:

1. **Cliente acamado** sem familiar próximo capaz de operar o aparelho.
2. **Zona rural** sem transporte regular para agência INSS / banco / CRAS.
3. **PcD com múltipla deficiência** que impede qualquer interação digital remota — mesmo com Cenário A+ é inviável.
4. **Situação de urgência** com risco de perda de benefício por prazo (ex.: prova de vida com prazo de bloqueio iminente, DER em risco de prescrição, agendamento INSS já marcado e cliente sem condições de comparecimento sozinho).

> Se **menos de 2** dessas condições estão presentes, **não ativar Anjo** — buscar Rota 0/1/2 ou variante de Rota 3 sem Anjo. Anjo é **caro** (R$150-400 por visita) e deve ser último recurso.

### Checklist pré-visita (Anjo recebe do Beto antes de sair)

```
=== BRIEFING ANJO LOCAL — caso MC [ID] ===

[1] Dados do cliente
- Nome completo: ____________________________
- CPF: ____________________________
- Endereço completo + ponto de referência: ____________________________
- Telefone WhatsApp: ____________________________
- Telefone alternativo (familiar / vizinho): ____________________________

[2] Rota a executar
- ☐ Rota 0 (KBA assistida presencial)
- ☐ Rota 1 (banco — acompanhar à agência)
- ☐ Rota 2 (câmera traseira presencial)
- ☐ Rota 3 (acompanhar a balcão INSS / CRAS / posto CIN)

[3] Documentos que o cliente deve ter em mãos no momento da visita
- ____________________________
- ____________________________
- ____________________________

[4] Objetivo da visita (1 frase)
- ____________________________

[5] Contato Beto durante a visita
- WhatsApp Beto: ____________________________
- Janela de disponibilidade Beto: ____________________________
- Plano B se Beto não responder: ____________________________

[6] O que o Anjo PODE fazer (espelho da posição ética §2)
- Ler em voz alta o que aparece na tela.
- Indicar onde o cliente deve clicar.
- Operar a câmera traseira para liveness com cliente na frente, autorizando.
- Fotografar (com autorização) CTPS / CNIS / RG do cliente para enviar ao Beto.
- Em casos extremos (PcD motora severa), operar fisicamente o aparelho do cliente
  COM CLIENTE VERBALMENTE CONFIRMANDO CADA AÇÃO E AUTORIZANDO PREVIAMENTE EM ÁUDIO.

[7] O que o Anjo NUNCA faz
- Receber custódia da senha gov.br do cliente.
- Operar o aparelho do cliente sem autorização explícita gravada para cada ação.
- Sair com o aparelho do cliente.
- Responder o KBA pelo cliente (Cenário B vetado).
- Comprometer-se com prazos de concessão de benefício.
- Cobrar do cliente além do contrato MC.
```

### Script de comunicação presencial — como o Anjo se apresenta

> Tom: vizinho de confiança que veio ajudar, não autoridade nem técnico distante.

```
[chegada]
Anjo: "Bom dia, Dona [nome] / Seu [nome]. Sou [Anjo], do Meu Cumpadre.
O Beto, que tava conversando com a senhora pelo WhatsApp, me mandou aqui
pra ajudar a senhora a fazer no celular o que ele não consegue fazer
de longe.

Tô com um papel aqui que a senhora autorizou minha visita lá no zap —
quer que eu leia pra senhora pra confirmar?"

[ler termo de consentimento — 30 segundos máximo, linguagem simples]

Anjo: "Tudo certo então? Vamos começar?"

[durante a sessão]
Anjo: "Vou te indicando o que apertar, mas a senhora é quem aperta — eu
não toco no celular da senhora sem a senhora deixar.

Se em algum momento a senhora ficar com dúvida ou cansada, fala que a
gente para. Não tem pressa. Tá tudo bem se a gente precisar de mais
de uma visita.

Em qualquer momento, se a senhora quiser falar com o Beto direto, a gente
liga ele aqui no zap."

[em caso de KBA]
Anjo: "Lembra, Dona [nome] — as perguntas que vão aparecer são sobre
a SUA história. Eu não posso te dizer a resposta. Mas a senhora me deu
foto da carteira de trabalho — vou puxar aqui pra senhora consultar
quando travar."

[fim da visita]
Anjo: "Pronto, Dona [nome]. Hoje a gente conseguiu [X / parou em Y].
Vou mandar um relatório pro Beto agora, e ele vai te chamar no zap
amanhã com os próximos passos. Pode ser?"
```

### Relatório pós-visita (campos obrigatórios)

```
=== RELATÓRIO PÓS-VISITA ANJO LOCAL ===

[1] Identificação
- Data da visita: ____________________________
- Hora chegada: ____________________________
- Hora saída: ____________________________
- Tempo total presencial (h:min): ____________________________
- Anjo responsável: ____________________________

[2] Cliente
- Nome: ____________________________
- CPF (últimos 4 dígitos): ____________________________
- Endereço: ____________________________

[3] Rota executada
- ☐ Rota 0 (KBA presencial)
- ☐ Rota 1 (banco)
- ☐ Rota 2 (câmera traseira)
- ☐ Rota 3 (acompanhamento balcão)

[4] Resultado
- ☐ Sucesso completo (objetivo atingido)
- ☐ Sucesso parcial (algo foi feito mas não fechou)
- ☐ Falha (objetivo não atingido)

[5] Nível alcançado pelo cliente após a visita
- ☐ Mantido em Bronze (sem mudança)
- ☐ Bronze + Selo Previdenciário KBA (escopo a confirmar)
- ☐ Prata
- ☐ Ouro
- ☐ Não aplicável (visita não envolvia elevação)

[6] Próximos passos combinados com o cliente
- ____________________________
- ____________________________

[7] Tempo total da operação (incluindo deslocamento Anjo)
- Deslocamento ida (h:min): ____________________________
- Tempo na casa do cliente (h:min): ____________________________
- Deslocamento volta (h:min): ____________________________
- Total Anjo (h:min): ____________________________

[8] Ocorrências (qualquer fato relevante além do roteiro)
- ____________________________

[9] Travas E5 encontradas em campo
- ____________________________

[10] Documentos coletados (fotos enviadas ao Beto)
- ____________________________

[11] Consentimento LGPD do cliente
- ☐ Áudio gravado de autorização (anexar arquivo)
- ☐ Termo escrito assinado (anexar foto)
- ☐ Familiar como testemunha do consentimento (nome + CPF)

[12] Custo da visita
- Tempo Anjo (R$ por hora × h): R$ ____________________________
- Combustível / transporte: R$ ____________________________
- Outros: R$ ____________________________
- TOTAL: R$ ____________________________
- Centro de custo: ☐ Φ₀ ☐ Φ₁ ☐ Φ₄
```

### Custo estimado por visita

> Calibrar com primeiras 10 visitas reais.

| Item | Valor estimado |
|---|---|
| Tempo Anjo (deslocamento + visita + relatório) | **2-6h** mínimo |
| Combustível / transporte | R$30-150 (variável por distância) |
| Tempo Beto (briefing + suporte síncrono + leitura relatório) | 1-2h |
| **Custo MC por visita estimado** | **R$150-400** (depende de remuneração Anjo + deslocamento) |

**Registro contábil:** custo operacional da jornada Φ₁ ou Φ₀ a que o caso pertence — não é overhead. Cada visita Anjo é alocada ao caso específico e ao cliente que motivou a visita.

**Implicação operacional:** ativação de Anjo Local é **ordem de magnitude mais cara** que rota remota (~10x). Por isso é último recurso — e por isso o **mapa de Anjos por município** é ativo estratégico que deve ser construído proativamente, antes de virar gargalo.

---

## 4. Métricas de acompanhamento

> O MC rastreia estas métricas **a partir do primeiro caso**. Sem meta numérica até N≥50 — coletar evidência antes de fixar metas.

| Sigla | Nome completo | Fórmula simplificada | Frequência de medição | Meta inicial |
|---|---|---|---|---|
| **TENV-MC** | Taxa de Elevação de Nível por jornada | (clientes que precisaram elevar) ÷ (total de clientes admitidos) × 100 | Semanal (acumulada mensal e trimestral) | Medir sem meta. Definir meta após N=50 casos. |
| **MIX-ROTA** | Distribuição real de rotas usadas | (% Rota 0) + (% Rota 1) + (% Rota 2) + (% Rota 3) sobre total de elevações | Semanal | Medir sem meta. Definir meta após N=50 casos. |
| **TME-ROTA** | Tempo Médio de Elevação por rota | Σ(tempo de cada elevação Rota X) ÷ N elevações Rota X — comparar com estimativa E4.1 (Rota 0: 22 min, Rota 1: 12 min, Rota 2: 30 min, Rota 3: 5 min API + 7-21 dias calendário) | Semanal | Medir sem meta. Definir meta após N=50 casos. |
| **TSR** | Taxa de Sucesso por Rota | (elevações bem-sucedidas Rota X) ÷ (tentativas Rota X) × 100 — para cada rota separadamente | Semanal | Medir sem meta. Definir meta após N=50 casos. |
| **TEA** | Taxa de Escalamento para Alessandro | (casos escalados — formulário §1 P30 preenchido) ÷ (total de casos) × 100 | Semanal | Medir sem meta. Definir meta após N=50 casos. |
| **TAL** | Taxa de Ativação de Anjo Local | (casos com visita Anjo) ÷ (total de casos) × 100 | Mensal | Medir sem meta. Definir meta após N=50 casos. |
| **TENV-KBA** | Taxa de Sucesso da Rota 0 KBA | (KBAs bem-sucedidos) ÷ (KBAs tentados) × 100 — métrica destacada porque é a rota mais nova e menos confirmada | Semanal | Medir sem meta. Definir meta após N=50 casos. |

> **Nota especial sobre TENV-MC:** esta métrica será apresentada em **editais FINEP e BNDES** como **indicador de impacto TA mensurável** (Tecnologia Assistiva — eixo de fomento dos editais voltados a inclusão digital de hipervulneráveis). Manter registro auditável desde o primeiro caso, com data, CPF (últimos 4 dígitos), persona MC, rota usada e resultado. **Sem este registro, o MC não consegue pleitear esses fomentos.**

### Cadência sugerida de revisão

| Cadência | Quem | O que revisa |
|---|---|---|
| **Diária** | Beto | Logs do dia: casos abertos, casos fechados, escalonamentos pendentes. |
| **Semanal** | Alessandro | Dashboard agregado das 7 métricas; identificação de outliers; revisão de escalonamentos da semana. |
| **Mensal** | Alessandro | Revisão de estimativas E4.1 (mix de rotas, custos) vs. realidade observada. Ajuste de protocolos se gap >20%. |
| **Após N=50 jornadas** | Alessandro + Beto | Primeira definição de metas numéricas (saem de "Medir sem meta" para valores concretos). |
| **Após N=200 jornadas** | Alessandro + Beto | Segunda revisão substancial; potencial v2.0 desta árvore de decisão. |

---

E8-ParteC gravado: G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Gestão Software\Documentação\CONTA GOV.BR PRATA OURO\MC-GOVBR-E8-ParteC-FAQ-Etica-Metricas-v1_0-2026-0508.md
