https://claude.ai/chat/e9c302fb-c09f-40f5-b4d4-adddc93664cd

Leia os arquivos:
1. G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Gestão Software\Documentação\CONTA GOV.BR PRATA OURO\MC-GOVBR-ArvoreDecisao-APIHumana-v1_1-2026-0509.md
2. G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Gestão Software\Documentação\CONTA GOV.BR PRATA OURO\MC-GOVBR-CatalogoTravas-v1_1-2026-0509.md
3. G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Gestão Software\Documentação\CONTA GOV.BR PRATA OURO\MC-GOVBR-ERRATA-001-KBA-Bronze-Reposicionamento-v1_0-2026-0509.md

ATENÇÃO: use as versões pós-ERRATA-001. A hierarquia de rotas é: 1º Biometria facial, 2º Banco, 3º Presencial, KBA diagnóstico só como último recurso. NUNCA posicionar KBA como primeira opção.

Crie o arquivo:
G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Gestão Software\Documentação\CONTA GOV.BR PRATA OURO\MC-GOVBR-Anamnese-Triagem-GovBr-v1_0-2026-0509.md

---
título: MC-GOVBR-Anamnese-Triagem-GovBr
versão: v1_0
data: 2026-05-09
status: RASCUNHO
autor: Claude Code × Alessandro Neves
fonte: E8 v1.1 + E5 v1.1 + ERRATA-001
público-alvo: Beto (operador manual) + Igor (automação N8N/WhatsApp)
incorpora: ERRATA-001 correções 14-15 (R1-R3 revisadas, MSG-11 ajustada)
---

# MC-GOVBR — Anamnese de Triagem gov.br (Hook 0)

## 1. Objetivo

Este documento especifica o formulário de triagem que roda no WhatsApp ANTES da API Humana entrar no caso. Quando o Beto recebe o caso, ele já tem um preview com: nível estimado da conta gov.br, cenário provável (C01 a C18 do E8 v1.1), rota recomendada e dados contributivos coletados.

Na fase Crisálida Z3, o Hook 0 é operado manualmente pelo Beto. Este documento serve também como spec para o Igor automatizar via N8N + WhatsApp Cloud API quando a capacidade exigir.

Regra fundamental (ERRATA-001): a rota recomendada no preview é SEMPRE biometria facial como padrão. KBA diagnóstico nunca aparece no preview inicial. Só o Beto aciona KBA manualmente quando todas as rotas de elevação falharam.

## 2. Fluxo conversacional

Especifique o fluxo completo de mensagens WhatsApp em formato de árvore. Para cada mensagem use este formato:

MSG-[NN]: [texto exato da mensagem]
  Tipo de resposta: botão / texto livre / foto / áudio
  SE resposta = X → ir para MSG-[NN]
  SE resposta = Y → ir para MSG-[NN]
  SE timeout 24h → MSG de lembrete

Tom de todas as mensagens: coloquial, respeitoso, linguagem Dona Zilda. Use "a senhora" ou "o senhor". Adapte nome como [nome]. Zero jargão. Nunca mandar mais de uma pergunta por mensagem. Esperar resposta antes de prosseguir.

### BLOCO 1 — Abertura e consentimento (MSG-01 a MSG-03)

MSG-01: Boas-vindas e apresentação do MC. Identificar quem está falando. Perguntar o nome do cliente.
  Tipo: texto livre (nome)

MSG-02: Consentimento LGPD simplificado. Explicar em 2 linhas que o MC vai coletar alguns dados para ajudar no atendimento, que os dados são protegidos e que o cliente pode pedir para apagar a qualquer momento. Pedir autorização para continuar.
  Tipo: botão (Autorizo / Não autorizo)
  SE Não autorizo → MSG de encerramento respeitoso. Não prosseguir.

MSG-03: Perguntar se o cliente já tem conta gov.br.
  Tipo: botão (Tenho / Não tenho / Não sei o que é)
  SE Tenho → MSG-04
  SE Não tenho ou Não sei → MSG-03b: explicar em 1 linha o que é conta gov.br e orientar a criar (link ou passo rápido). Depois ir para MSG-04.

### BLOCO 2 — Coleta de inteligência contributiva (MSG-04 a MSG-10)

Estas são as 5 perguntas P1 a P5 do Hook 0 do E8 v1.1 §1, traduzidas em mensagens WhatsApp sequenciais. Copiar o tom exato do E8 (as versões "Dona [nome]").

MSG-04 (P1 — Trabalho registrado):
Perguntar se já trabalhou de carteira assinada alguma vez na vida. Incluir "mesmo que faz tempo".
  Tipo: botão (Sim / Não / Não lembro)
  SE Sim → MSG-05
  SE Não → MSG-08 (pula P2, P3, P4 — vai direto para P5)
  SE Não lembro → tratar como Sim (seguir para MSG-05, com flag "memória fraca")

MSG-05 (P2 — CTPS física):
Perguntar se tem a carteirinha azul de trabalho em casa. Se tiver, pedir foto das páginas com carimbo.
  Tipo: botão (Tenho aqui / Vou procurar / Não tenho)
  SE Tenho aqui → pedir foto (MSG-05b: "Manda foto das páginas com carimbo pra mim aqui no zap"). Aguardar foto. Depois ir para MSG-06.
  SE Vou procurar → anotar flag "CTPS pendente". Ir para MSG-06. Agendar lembrete 24h.
  SE Não tenho → ir para MSG-06.

MSG-06 (P3 — Papel INSS):
Perguntar se tem algum papel do INSS em casa, extrato, carta, qualquer coisa. Se tiver, pedir foto.
  Tipo: botão (Tenho / Não tenho)
  SE Tenho → pedir foto (MSG-06b). Aguardar. Depois ir para MSG-07.
  SE Não tenho → ir para MSG-07.

MSG-07 (P4 — Memória último emprego):
Perguntar em que ano mais ou menos parou de trabalhar registrado e qual era a empresa. Não precisa ser certinho.
  Tipo: texto livre
  Anotar ano e empresa. Ir para MSG-08.

MSG-08 (P5 — Benefício ativo):
Perguntar se recebe algum benefício hoje: aposentadoria, BPC do LOAS, Bolsa Família, pensão.
  Tipo: botão (Aposentadoria / BPC-LOAS / Bolsa Família / Pensão / Nenhum / Outro)
  Ir para MSG-09 (verificação biometria).

### BLOCO 3 — Verificação de capacidade biométrica (MSG-09 a MSG-10)

Este bloco é NOVO em relação ao prompt original. Adicionado por força da ERRATA-001: como biometria facial é a Rota 1, precisamos saber se o cidadão tem condição de tentar.

MSG-09 (Celular com câmera):
Perguntar se o celular do cliente tira foto pela frente (câmera de selfie).
  Tipo: botão (Sim / Não / Não sei)
  SE Sim → MSG-10
  SE Não → anotar flag "sem câmera frontal, testar câmera traseira assistida". Ir para MSG-10.
  SE Não sei → anotar flag "verificar na chamada". Ir para MSG-10.

MSG-10 (Banco):
Perguntar se tem conta em banco e se usa o aplicativo do banco no celular.
  Tipo: botão (Sim, uso o app / Tenho conta mas não uso app / Não tenho conta em banco)
  Anotar resposta. Ir para MSG-11.

### BLOCO 4 — Classificação e handoff (MSG-11 a MSG-13)

MSG-11 (classificação automática — NÃO enviada ao cliente):
Aplicar as regras R1 a R5 revisadas (ERRATA-001 §2.3) sobre as respostas P1-P5 + MSG-09 + MSG-10. Gerar o preview para o Beto.

MSG-12 (agradecimento ao cliente):
Agradecer. Informar que o Beto vai entrar em contato em até [X] horas com o plano de ação. Mensagem curta e calorosa.

MSG-13 (handoff interno — NÃO enviada ao cliente):
Enviar preview completo para o Beto via ClickUp ou WhatsApp grupo interno.

## 3. Preview do Beto (formato obrigatório)

O preview que o Beto recebe no MSG-11/MSG-13. Formato fixo:

```
PREVIEW TRIAGEM GOV.BR — [nome do cliente]
Data: [data/hora]
WhatsApp: [número]

NÍVEL ESTIMADO: Bronze / Prata / Ouro / Desconhecido

HOOK 0:
P1 (trabalho registrado): [Sim/Não/Não lembro]
P2 (CTPS): [Tenho/Vou procurar/Não tenho]
P3 (papel INSS): [Tenho/Não tenho]
P4 (último emprego): [ano — empresa] ou [não lembra]
P5 (benefício): [resposta]
Câmera frontal: [Sim/Não/Não sei]
App banco: [Sim/Tenho mas não uso/Não tenho]

CENÁRIO E8: C[XX] — [nome]
ROTA RECOMENDADA: Rota [N] — [nome]
FALLBACK: Rota [N] — [nome]

FOTOS RECEBIDAS:
- CTPS: [sim — X páginas / não]
- CNIS: [sim / não]

FLAGS:
- [lista de flags detectadas — ex: "KBA fechado", "sem câmera frontal", "CTPS pendente"]

TRAVAS PROVÁVEIS: [IDs do E5 — ex: T2.05, T1.03]
```

## 4. Regras de negócio

### 4.1 Regras de classificação (ERRATA-001 §2.3 — DEFINITIVAS)

Pseudocódigo para Igor:

```
# Prioridade: avaliar na ordem. Primeira regra que casa manda.

SE P1 = Sim E (P2 = Sim OU P3 = Sim OU P4 preenchido):
    cenario = "Bloco_A"
    rota = 1  # Biometria facial
    rota_fallback = 2  # Banco
    kba_reserva = True  # Acionável pelo Beto se tudo falhar
    CTPS_disponivel = (P2 == Sim)

SE P1 = Sim E P2 = Não E P3 = Não E P4 = vazio:
    cenario = "Bloco_A_sem_docs"
    rota = 1  # Biometria facial
    rota_fallback = 2  # Banco
    flag = "considerar 135 para obter dados contributivos"
    kba_reserva = True

SE P1 = Não E P5 in (BPC, BF, Nenhum):
    cenario = "Bloco_B"
    rota = 1  # Biometria facial (se tiver base biométrica)
    rota_fallback = 2  # Banco (se bancarizado)
    rota_ultimo = 3  # Presencial
    kba_reserva = False  # KBA impossível, nunca contribuiu
    flag = "KBA fechado — cidadão sem histórico contributivo"

SE P2 = Sim (qualquer cenário):
    flag_adicional = "CTPS disponível — backup probatório para dossiê Φ₁"

SE P5 = Aposentadoria OU P5 = Pensão:
    flag_adicional = "investigar senha esquecida (T1.14) antes de nova rota"

# Refinamento com MSG-09 e MSG-10:
SE camera_frontal = Não:
    SE cenario in (Bloco_A, Bloco_A_sem_docs, Bloco_B):
        nota = "biometria facial via câmera traseira assistida"

SE app_banco = Sim:
    rota_fallback = 2  # Banco confirmado como fallback viável

SE app_banco = "Tenho mas não uso":
    nota = "Beto precisa verificar se internet banking está ativo"

SE app_banco = "Não tenho conta":
    rota_fallback = 3  # Pula banco, vai para presencial
```

### 4.2 Tabela de combinações realistas

Crie tabela com pelo menos 20 combinações de P1 a P5 + câmera + banco, mapeando para cenário E8, rota e flags. Foque nas combinações que o público MC vai gerar de fato (idoso rural, PcD, mãe solo BPC). Não precisa cobrir todas as combinações teóricas.

| P1 | P2 | P3 | P4 | P5 | Câmera | Banco | Cenário E8 | Rota | Fallback | Flags |
|---|---|---|---|---|---|---|---|---|---|---|

### 4.3 Regras de timeout e lembrete
- Sem resposta em 4 horas: lembrete gentil ("Dona [nome], tudo bem? Quando puder, a gente continua daqui")
- Sem resposta em 24 horas: segundo lembrete
- Sem resposta em 72 horas: marcar "triagem incompleta", notificar Beto
- P2 = "Vou procurar": lembrete específico em 24h ("Dona [nome], conseguiu achar a carteirinha?")
- Cooldown KBA ativo: se cliente reportar bloqueio KBA, anotar timestamp no campo govbr_kba_cooldown e agendar lembrete para o momento exato de desbloqueio

### 4.4 Regras de privacidade
- Fotos de CTPS e CNIS: armazenar no card ClickUp do caso MC, apagar do WhatsApp após 48h
- Nenhum CPF ou NIS trafega no fluxo automatizado — só no handoff para o Beto
- Consentimento LGPD coletado na MSG-02 como pré-condição obrigatória
- Se cliente recusar consentimento: encerrar com respeito, não prosseguir

## 5. Detecção de travas no fluxo

Para cada trava do E5 v1.1 detectável durante a anamnese:

| ID trava | Em qual MSG se manifesta | Sinal de detecção | Flag gerada no preview |
|---|---|---|---|

Travas detectáveis (mínimo):
- T2.15 (nunca contribuiu): P1=Não + P5=BPC/BF/Nenhum → flag "KBA fechado"
- T2.16 (analfabeto previdenciário): P1=Sim mas P2/P3/P4 todos negativos → flag "sem docs contributivos, considerar 135"
- T2.05 (analfabeto absoluto): cliente manda apenas áudios e nunca texto → flag "possível analfabetismo, Beto usar áudio"
- T2.01 (sem smartphone): fluxo WhatsApp não chega → flag "sem smartphone, via familiar ou 135"
- T3.01 (familiar operando): padrão de resposta sugere terceiro → flag "possível familiar, verificar na chamada"
- T1.14 (senha esquecida): P5=Aposentadoria e cliente menciona que não consegue entrar → flag "senha esquecida, verificar antes de nova rota"
- T2.02 (sem câmera frontal): MSG-09=Não → flag "câmera traseira assistida"
- T1.01 (reconhecimento facial falha): se cliente reportar tentativa anterior fracassada → flag "facial já tentado, verificar bloqueio 24h"

## 6. Especificação técnica para Igor (N8N)

### 6.1 Trigger
WhatsApp Cloud API webhook: nova mensagem no número MC de contato novo ou com tag "triagem_pendente".

### 6.2 Sequência de nós N8N
Descreva a sequência sugerida:
- Webhook de entrada
- Identificação do cliente (número WhatsApp como chave primária, nome coletado em MSG-01)
- Envio sequencial MSG-01 a MSG-10 com espera por resposta entre cada
- Parsing das respostas (botões são strings fixas, texto livre precisa de NLP básico ou fallback manual)
- Fotos: receber via WhatsApp media API, upload para ClickUp attachment
- Aplicação das regras §4.1
- Geração do preview §3
- Criação ou atualização do card ClickUp com campos §6.3
- Notificação ao Beto (WhatsApp grupo interno ou ClickUp notification)
- Log de auditoria (timestamp de cada MSG + resposta)

### 6.3 Campos ClickUp
Campos customizados necessários no card do caso MC:
- govbr_nivel_estimado (dropdown: Bronze / Prata / Ouro / Desconhecido)
- govbr_cenario_e8 (texto curto: C01 a C18)
- govbr_rota_recomendada (dropdown: Rota 1 Biometria / Rota 2 Banco / Rota 3 Presencial)
- govbr_rota_fallback (dropdown: idem)
- govbr_p1_trabalho (dropdown: Sim / Não / Não lembro)
- govbr_p2_ctps (dropdown: Tenho / Vou procurar / Não tenho)
- govbr_p3_cnis (dropdown: Tenho / Não tenho)
- govbr_p4_ultimo_emprego (texto curto: ano e empresa)
- govbr_p5_beneficio (dropdown: Aposentadoria / BPC / BF / Pensão / Nenhum / Outro)
- govbr_camera_frontal (dropdown: Sim / Não / Não sei)
- govbr_app_banco (dropdown: Sim uso / Tenho não uso / Não tenho)
- govbr_ctps_foto (checkbox)
- govbr_cnis_foto (checkbox)
- govbr_flags (texto longo: lista de flags)
- govbr_kba_cooldown (datetime: se aplicável)
- govbr_triagem_status (dropdown: Completa / Incompleta / Recusou consentimento)
- govbr_triagem_data (datetime)

### 6.4 Evidência empírica incorporada
- Cooldown KBA = 24 horas exatas com timestamp (tela capturada 09/05/2026)
- Selo KBA = Bronze validado, NÃO Prata (confirmado via catálogo oficial gov.br)
- Caso JAN001: biometria facial funcionou na 2ª tentativa após assistir vídeo de orientação

## 7. Versão manual (Beto sem automação)

Enquanto o N8N não estiver configurado, o Beto executa o Hook 0 manualmente seguindo o script do E8 v1.1 §1. As mensagens deste documento servem como roteiro.

Checklist do Beto pós-triagem manual:
1. Preencher campos ClickUp §6.3 manualmente
2. Anexar fotos de CTPS/CNIS no card ClickUp
3. Anotar cenário E8 e rota recomendada
4. Se detectou trava: anotar ID do E5 e flag no campo govbr_flags
5. Se cliente reportou bloqueio KBA: anotar timestamp no govbr_kba_cooldown
6. Mudar govbr_triagem_status para "Completa"
7. Iniciar rota recomendada (sempre biometria facial primeiro)

Salve o arquivo e confirme com: "E12 gravado: [path completo]"
