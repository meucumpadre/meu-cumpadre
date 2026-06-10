# Skill: Auditoria R1-R7 — Coletânea de Dossiês

## Quando ativar
Quando o usuário pedir para auditar um dossiê da Coletânea, ou quando
houver arquivo novo em 08-ARTEFATOS/Coletanea/pendentes/.

## O que fazer
1. Ler o arquivo .md do dossiê na pasta pendentes/
2. Ler o auditoria.md para contexto dos dossiês anteriores (necessário para R7)
3. Aplicar as 7 regras abaixo
4. Emitir veredito estruturado
5. Se APROVADO: mover arquivo de pendentes/ para aprovados/
6. Se REPROVADO: mover para reprovados/
7. Em ambos os casos: adicionar entrada no auditoria.md

## As 7 Regras

### R1 — NOME
- Verificar se "Alessandro Neves" aparece no Bloco F (Scanner/Diagnóstico)
- REPROVAR se aparecer qualquer variação: "Alessandro do INSS", "o servidor
  Alessandro", "o técnico", "o gerente" etc.
- APROVAR se "Alessandro Neves" aparece corretamente

### R2 — HEADER BLOCO D
- Extrair o número do dossiê do nome do arquivo (ex: dossie-032.md → #32)
- Se #01 a #15: header DEVE ser "Bloqueios do Servidor — Marco Zero"
- Se #16 a #138: header DEVE ser "Bloqueios Emocionais Escaneados"
- REPROVAR se header incorreto para a faixa

### R3 — VOZ HÍBRIDA BLOCO F
- Verificar presença de TRÊS elementos no Bloco F:
  1. Análise em 3ª pessoa (tom técnico/pericial)
  2. "Diagnóstico de Alessandro Neves:" em negrito
  3. Voz Confessional em 1ª pessoa, itálico, entre aspas
- REPROVAR se qualquer dos 3 estiver ausente

### R4 — TÍTULO
- Primeira linha do arquivo DEVE ser apenas **#XX** em negrito
- REPROVAR se contiver "Dossiê", "Capítulo", "Parte" ou ornamentos

### R5 — TÍTULO DO ÍNDICE MESTRE
- Verificar se o título no Bloco A corresponde EXATAMENTE ao Índice Mestre abaixo.
- REPROVAR se título alterado/reescrito pelo Gemini.

PARTE I (#01-#15):
#01 — A Posse e a Chegada: O Asfalto Termina Onde o Brasil Começa
#02 — O Projeto Especial de Colonização (PEC): A Origem das Agrovilas
#03 — O Primeiro Dia no Balcão: O Peso do Carimbo Institucional
#04 — O Idioma do Sertão: Traduzindo a Lei para o Homem do Campo
#05 — A Fila da Madrugada: O Frio, a Poeira e a Espera
#06 — O Homem Sem Documento: Como Provar a Própria Existência
#07 — O Analfabetismo Estrutural e a Assinatura a Dedo
#08 — A Cultura do "Doutor": Quebrando a Barreira do Medo
#09 — As Distâncias da Serra: Quando a Agência É uma Miragem
#10 — A Mulher Invisível: O Trabalho Feminino Não Reconhecido
#11 — A Primeira Negativa: O Peso Psicológico do Indeferimento
#12 — O Mito do "Dinheiro do Governo": Ensinando Cidadania na Fila
#13 — As Crianças da Roça: Trabalho Precoce e Sobrevivência
#14 — O Transporte Escolar e os Caminhos de Terra (A Batalha Local)
#15 — O Canto do Sindicato: Os Primeiros Sinais do Monopólio

PARTE II (#16-#40):
#16 — O Lavrador Que Não Sabia a Própria Idade
#17 — Me Casei com 12 Anos: A Fuga, a Luta e o Casamento Precoce
#18 — O Acidente na Forrageira: Trabalhando Sem os Dedos
#19 — A Picada de Cobra e o Veneno: O Risco Constante no Campo
#20 — Pego Peixe com a Mão: Lendas Reais do Rio São Francisco
#21 — A Mulher, os Sete Gatos e o Marido na Cadeira de Rodas
#22 — Morreu na Hora: As Quedas Letais dos Tiradores de Coco
#23 — A Testemunha que Esqueceu o Próprio Endereço e o Nome do Lugar
#24 — A Vaidade na Roça: "Não Sou Segurada Porque Tenho Unha Feita?"
#25 — O Masoquismo Moral do Trabalhador: "Eu Já Vivi Demais"
#26 — O Segredo das Perguntas que Revelam a Verdade Oculta
#27 — A Amiga que Defendeu a História como a Própria Vida
#28 — O Idoso de 92 Anos que Esqueceu de Se Aposentar
#29 — "Ela Morreu Me Chamando": Como Provar um Amor de 50 Anos
#30 — O Falso Solteiro: A União Estável e a Vergonha "Do Papel"
#31 — A Justificação Administrativa: A Única Arma dos Desamparados
#32 — Falando Grego: O Juridiquês como Instrumento de Opressão
#33 — A Onça: A Lavradora de Pele Clara que Arrancava Toco
#34 — O Homem que Bebia Demais e a Promessa Feita na Audiência
#35 — A Morte na Fazenda e as Dores do Trabalho Clandestino
#36 — O Dinheiro na Bolsa: A Generosidade de Quem Tem Pouco
#37 — A Testemunha "Advogada": Defendendo com Unhas e Dentes
#38 — A Constituição sob a Proteção de Deus e o Trabalhador
#39 — A Queda Que Laxou o Osso: Os Acidentes Fora do Papel
#40 — A Felicidade Pura e Simples Apesar de Todas as Doenças

PARTE III (#41-#73):
#41 — O Início das Cobranças: A Chegada das Metas Frias
#42 — O Gatilho do Luto: 2007 e a Perda Irreparável
#43 — Transtorno Afetivo Bipolar (TAB): A Doença Desencadeada
#44 — O Assédio Moral Estrutural: A Chefia e a Cultura do Medo
#45 — O Episódio da Ouvidoria 50187: Exposição e Isolamento
#46 — Síndrome de Burnout: O Código Oculto QD85 Silenciado
#47 — A Omissão do Estado: Onde Estavam o LTCAT e o PCMSO?
#48 — A Máquina de Triturar Servidores: A GEX Barreiras
#49 — A Ausência de CAT: O Acidente de Trabalho Mascarado
#50 — A Busca de Fuga: Representações Comerciais e a Mania
#51 — A Hipervulnerabilidade do Servidor: A Doença Ignorada
#52 — A Concessão de Crédito Irresponsável: Bancos e o Surto
#53 — O Superendividamento Absoluto: 74% da Renda Comprometida
#54 — O Inquérito Policial: A Prisão em Flagrante e o Choque
#55 — O Bode Expiatório: Como a Instituição Fabrica Culpados
#56 — A Perícia Médica Oficial e a Redução da Autodeterminação
#57 — O Conflito de Laudos: A Cegueira Administrativa do PAD
#58 — A Defesa Negada: O Incidente de Sanidade Mental Ignorado
#59 — A Ruína Sistêmica: O Colapso Familiar e Financeiro
#60 — A Suspensão Severa e a Retirada do Acesso ao Sistema
#61 — A Luta na Justiça: A Ação de Desbloqueio das Contas
#62 — A Batalha pelo Acionamento do Seguro Prestamista
#63 — O Diagnóstico Definitivo de Incapacidade Total e Permanente
#64 — A Sobrevivência com o Mínimo Existencial
#65 — A Hipocrisia Local: Atravessadores Aproveitando a Ausência
#66 — O Surgimento e a Força dos Atravessadores Financeiros
#67 — A Máfia dos Consignados: Os Primeiros Alertas Silenciados
#68 — O "Corredor de Funil": O Acordo Sindicatos x Advogados
#69 — A Estrutura Corrompida nas Entidades Locais
#70 — Denúncias ao MPF e à CGU que Ficaram na Gaveta
#71 — O Assédio dos Políticos Locais Dentro da APS
#72 — O Preço Físico e Psicológico de Dizer "Não" à Corrupção
#73 — O Ponto de Virada: O Voto de Transformar a Dor em Plataforma

PARTE IV (#74-#83):
#74 — O Rastro da Balsa e o Arquivo Correnteza
#75 — A Parteira da Agrovila 1 e o Cordão da Vida no Mato
#76 — O Poço de Pedra e a Areia nos Rins
#77 — O Rio que Lava e a Morte que Bebe
#78 — A Estrada Sem Volta para o Leste: O Muro de Salvador
#79 — A Ponte de Ferro e a Carne de Esquecimento
#80 — A Cheia de 2003 e o Arquivo da Correnteza
#81 — O Jegue da Madrugada e o Relógio Cego do Estado
#82 — O Cocar de Poeira e a Identidade Retomada das Aldeias
#83 — O Sangue no Chão do Cerrado e o Laço do Coronel Quilombola

PARTE V (#84-#90):
#84 — O Pedágio da Cidadania e a Quebra do Monopólio Sindical
#85 — O Instrumento da Liberdade (A Justificação Administrativa)
#86 — O Fantasma no Holerite e a Sangria Silenciosa
#87 — O Funil de Luxo e a Algema de Papel (Os Honorários de 35%)
#88 — O Crédito de Papel Frio e a Agiotagem de Gravata
#89 — O Cerco dos "Donos do Poder" e a Agência Sitiada
#90 — A Caravana da Esperança e o Deserto de Promotores na Lapa

PARTE VI (#91-#98):
#91 — O Ar que Falta e a Carne que Treme (O Colapso no Calor)
#92 — O Empréstimo Fatal e o Coração no Balcão (A Morte Súbita)
#93 — A Senha Invisível e o Balcão Debaixo da Árvore
#94 — O Arquivo PDF na Sacola de Supermercado
#95 — O Celular de Tecla e o Abismo do "Meu INSS"
#96 — A Frieza da Tela e a Ordem Radical da GEX Barreiras
#97 — O Robô que Indefere e a Orientação no Sol
#98 — O Recorde dos 17 Minutos e a Dignidade a Jato

PARTE VII (#99-#118):
#99 — O Grito no Guichê 3 (A Humilhação Inaugural)
#100 — O Exílio na Sala de Perícia (A Morte em Vida)
#101 — A Fila do Arquivo Morto
#102 — A Senha Bloqueada e as Mãos Atadas
#103 — O Sorriso Proibido e o Café Negado
#104 — A Advogada VIP e o Servidor no Canto
#105 — O Despacho pela Fresta da Janela
#106 — O Tremor das Mãos e o Remédio na Gaveta
#107 — A Justificação Administrativa Rasgada
#108 — A Ameaça de Exoneração no Corredor
#109 — O Motim Silencioso da Agrovila 5
#110 — A "Doença" Usada como Arma
#111 — O Assédio dos Políticos Locais (A Invasão)
#112 — O Choro no Carro (A Falha da Blindagem)
#113 — O Escanteio na Central de Análise
#114 — A Burocracia contra a Compaixão
#115 — A Máfia Sorri na Calçada
#116 — O Abafamento das Denúncias (Ouvidoria)
#117 — O Espelho Quebrado (Quando o Cuidador Adoece)
#118 — A Despedida Compulsória

PARTE VIII (#119-#138):
#119 — As Portas Fechadas: O Silêncio da Pandemia e o Estado em Quarentena
#120 — Evelly Mendes: A Trégua Institucional e o Resgate do Bom Relacionamento
#121 — O Contraste do Medo: Os Servidores Isolados e o Guerreiro Solitário
#122 — O Hipomaníaco Visionário: O TAB Como Combustível para a Luta Política
#123 — O Portão da Casa Solitária: O Novo Balcão da Previdência Social
#124 — Caminhando Mascarado: A Coragem de Quem Não Tinha Mais o Que Perder
#125 — A Imunidade do Propósito: O Homem Que Atravessou a Praga Sem Ficar Doente
#126 — Os Órfãos da Covid-19: O Luto e as Pensões por Morte na Madrugada
#127 — O Salário-Maternidade Despachado Pela Fresta da Grade no Lockdown
#128 — A Doença Que Não Era o Vírus: O Auxílio-Doença da Roça Paralisada
#129 — O Abandono Digital: O Segurado Analfabeto Contra o Robô do INSS
#130 — O Nascimento do "Balcão Virtual": A Organização de Papéis via WhatsApp
#131 — A Planilha das 975 Almas: O Controle Manual de Vidas no Excel
#132 — O Guardião das Senhas: O Peso de Controlar o Destino de Quase Mil Famílias
#133 — A Exaustão do Método: Quando o Esforço Humano Bate no Limite da Máquina
#134 — A Voz do Lavrador: "Cumpadre, e Se o Seu Zap Falasse com o Governo?"
#135 — A Epifania Estrutural: A Conexão Entre a Dor, o WhatsApp e o "Meu INSS"
#136 — O Rascunho do Algoritmo: Notificações de Andamento e a Esperança por E-mail
#137 — A Carta de Concessão Digital: A Morte Definitiva dos Atravessadores
#138 — A Virada de Chave: O Fim do Servidor de Agência e a Gênese da Plataforma

### R6 — REGRA 1-EM-5 (Epifania MC)
- Dossiês AUTORIZADOS para Epifania MC (lista fixa):
  Parte I: #08, #11, #15
  Parte II: #20, #25, #30, #35
  Parte III: #50, #55, #64, #67, #70, #73
  Parte IV: #79, #83
  Parte V: #85
  Parte VI: #95, #97
  Parte VII: #105, #112, #117, #118
  Parte VIII: #130, #134, #135, #138

- SLOTS OPCIONAIS (dossiês com [SLOT R6 DISPONÍVEL]):
  #40 (encerramento Parte II)
  Para estes: avaliar se a Epifania MC no Bloco F é sutil e orgânica.
  Se MC sutil → APROVAR com nota "Slot R6 exercido"
  Se MC forçado/comercial → REPROVAR R6
  Se Bloco F não menciona MC → APROVAR normalmente

- Se dossiê NÃO está na lista fixa NEM nos slots opcionais:
  Bloco F NÃO deve mencionar "Meu Cumpadre", "plataforma", "tecnologia",
  "app", "WhatsApp como solução", "ferramenta digital" ou variações
- REPROVAR se MC mencionado fora da janela autorizada

### R7 — DIVERSIDADE BLOCO C
- Ler o tipo de testemunho entre parênteses no final do Bloco C
- Consultar auditoria.md para os 2 dossiês anteriores
- REPROVAR se mesmo tipo aparece 3 vezes consecutivas
- ALERTAR (sem reprovar) se aparece 2 vezes seguidas
- Tipos válidos: Testemunho Hostil, Testemunho em Grupo, Memória Tardia,
  Testemunho Indireto, Familiar que Acompanha, Silêncio como Resposta,
  Testemunho Sem Redenção, Testemunho de Reversão

## Formato do Veredito (imprimir EXATAMENTE assim)

═══════════════════════════════════════
AUDITORIA R1-R7 — Dossiê #XX
═══════════════════════════════════════
R1 (Nome):     ✅/❌ — [detalhe]
R2 (Header D): ✅/❌ — [detalhe]
R3 (Voz F):    ✅/❌ — [detalhe]
R4 (Título):   ✅/❌ — [detalhe]
R5 (Índice):   ✅/❌ — [detalhe]
R6 (MC):       ✅/❌ — [detalhe]
R7 (Diversid): ✅/⚠️/❌ — [detalhe]
═══════════════════════════════════════
VEREDITO: ✅ APROVADO / ❌ REPROVADO (Rx, Ry)
═══════════════════════════════════════
Nota de qualidade: [1 frase sobre o melhor momento do dossiê]
Próximo: #[XX+1] — [título do próximo no Índice Mestre]
⚠️ ALERTA R7 para próximo: [tipo usado agora]
🔔 R6: Próxima Epifania MC autorizada: #[próximo autorizado]
═══════════════════════════════════════

## Formato da entrada no auditoria.md

## Dossiê #XX — [Título Exato]
- Data: AAAA-MM-DD
- Veredito: APROVADO/REPROVADO
- R1: ✅/❌ | R2: ✅/❌ | R3: ✅/❌ | R4: ✅/❌ | R5: ✅/❌ | R6: ✅/❌ | R7: ✅/❌
- Tipo Bloco C: [tipo de testemunho]
- Epifania MC: Sim/Não
- Nota: [observação]