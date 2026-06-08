---
título: MC-GOVBR-Anamnese-Triagem-GovBr
versão: v1_0
data: 2026-05-09
status: RASCUNHO
autor: Claude Code × Alessandro Neves
fonte: E8 v1.1 + E5 v1.1 + ERRATA-001
público-alvo: Beto (operador manual) + Igor (automação N8N/WhatsApp)
incorpora: ERRATA-001 correções 14-15 (R1-R3 revisadas, MSG-11 ajustada)
supersede: —
---

# MC-GOVBR — Anamnese de Triagem gov.br (Hook 0)

## 1. Objetivo

Este documento especifica o **formulário de triagem** que roda no WhatsApp **antes** da API Humana entrar no caso. Quando o Beto recebe o caso, ele já tem um preview com: nível estimado da conta gov.br, cenário provável (C01 a C18 do E8 v1.1), rota recomendada e dados contributivos coletados.

Na fase Crisálida Z3, o Hook 0 é operado **manualmente pelo Beto**. Este documento serve também como **spec para o Igor automatizar via N8N + WhatsApp Cloud API** quando a capacidade exigir.

> **Regra fundamental (ERRATA-001):** a rota recomendada no preview é **sempre biometria facial como padrão**. **KBA diagnóstico nunca aparece no preview inicial.** Só o Beto aciona KBA manualmente quando todas as rotas de elevação falharam.

---

## 2. Fluxo conversacional

Tom de todas as mensagens: **coloquial, respeitoso, linguagem Dona Zilda**. Use "a senhora" ou "o senhor". Adapte nome como `[nome]`. Zero jargão. **Nunca mandar mais de uma pergunta por mensagem.** Esperar resposta antes de prosseguir.

### BLOCO 1 — Abertura e consentimento (MSG-01 a MSG-03)

**MSG-01** — *"Oi, aqui é o Beto do **Meu Cumpadre**. Tô aqui pra te ajudar com seus direitos no INSS, sem complicação. Pra começar, qual seu nome completo?"*
  Tipo: texto livre (nome)
  Aguardar resposta. Anotar `[nome]` para uso nas próximas mensagens.
  → MSG-02

**MSG-02** — *"Prazer, Dona [nome] / Seu [nome]. Antes de começar, só pra senhora/o senhor saber: a gente vai precisar de algumas informações pra montar seu atendimento direitinho. Tudo que a senhora/o senhor mandar fica protegido aqui com a gente, e se quiser apagar tudo depois é só pedir. Posso continuar?"*
  Tipo: botão (Autorizo / Não autorizo)
  SE **Autorizo** → MSG-03
  SE **Não autorizo** → MSG-encerramento: *"Sem problema nenhum, Dona [nome]. Quando quiser falar com a gente, é só me chamar aqui no zap. Um abraço."* → encerrar fluxo, marcar `govbr_triagem_status = "Recusou consentimento"`.

**MSG-03** — *"Dona [nome], a senhora já tem aquela conta gov.br no celular?"*
  Tipo: botão (Tenho / Não tenho / Não sei o que é)
  SE **Tenho** → MSG-04
  SE **Não tenho** ou **Não sei** → MSG-03b: *"Tranquilo. A conta gov.br é tipo um login da senhora pra todos os serviços do governo — INSS, INSS, tudo numa porta só. Depois a gente cria juntos, é rapidinho. Por enquanto, vou te fazer umas perguntinhas pra entender direitinho seu caso, tá bom?"* → MSG-04 (com flag `sem_conta_govbr`).

---

### BLOCO 2 — Coleta de inteligência contributiva (MSG-04 a MSG-08)

> Estas são as **5 perguntas P1 a P5 do Hook 0** do E8 v1.1 §1, traduzidas em mensagens WhatsApp sequenciais. Tom Dona Zilda preservado integralmente.

**MSG-04 (P1 — Trabalho registrado)** — *"Dona [nome], a senhora já trabalhou registrado alguma vez na vida? De carteira assinada — mesmo que faz tempo?"*
  Tipo: botão (Sim / Não / Não lembro)
  SE **Sim** → MSG-05
  SE **Não** → MSG-08 (pula P2/P3/P4 — vai direto para P5)
  SE **Não lembro** → tratar como **Sim** (segue para MSG-05 com flag `memoria_fraca`)

**MSG-05 (P2 — CTPS física)** — *"E aquela carteirinha azul de trabalho, das antigas — a senhora ainda tem ela em casa?"*
  Tipo: botão (Tenho aqui / Vou procurar / Não tenho)
  SE **Tenho aqui** → MSG-05b: *"Pede um favor pra senhora: tira foto das páginas que tem carimbo de empresa e me manda aqui no zap. Pode ser uma de cada vez. Vou esperar."* → aguardar foto(s) → MSG-06.
  SE **Vou procurar** → flag `CTPS_pendente`, agendar lembrete +24h. → MSG-06.
  SE **Não tenho** → MSG-06.

**MSG-06 (P3 — Papel INSS)** — *"E papel do INSS, a senhora tem em casa? Aquele extrato com a história das contribuições, ou alguma carta que o INSS já mandou?"*
  Tipo: botão (Tenho / Não tenho)
  SE **Tenho** → MSG-06b: *"Manda foto pra mim, por favor. Mesmo que esteja meio amassado, o que importa é dar pra ler."* → aguardar foto → MSG-07.
  SE **Não tenho** → MSG-07.

**MSG-07 (P4 — Memória do último vínculo)** — *"A senhora lembra mais ou menos quando foi que parou de trabalhar registrado? Não precisa ser certinho, ano mais ou menos serve. E lembra qual era a empresa?"*
  Tipo: texto livre
  Anotar ano e empresa em `govbr_p4_ultimo_emprego`. → MSG-08.

**MSG-08 (P5 — Benefício atual)** — *"E hoje, a senhora recebe alguma coisa? Aposentadoria, BPC do LOAS, Bolsa Família, alguma pensão?"*
  Tipo: botão (Aposentadoria / BPC-LOAS / Bolsa Família / Pensão / Nenhum / Outro)
  Anotar em `govbr_p5_beneficio`. → MSG-09.

---

### BLOCO 3 — Verificação de capacidade biométrica (MSG-09 a MSG-10) *(novo v1.0 — força ERRATA-001)*

> Como biometria facial é **Rota 1**, precisamos saber se o cidadão tem condição de tentar **antes** de gerar o preview do Beto.

**MSG-09 (Câmera frontal)** — *"Dona [nome], me diz uma coisa: o celular da senhora tira foto pela frente, sabe? Aquela câmera que vê seu rosto na tela quando a senhora abre."*
  Tipo: botão (Sim / Não / Não sei)
  SE **Sim** → MSG-10
  SE **Não** → flag `sem_camera_frontal_testar_traseira`. → MSG-10.
  SE **Não sei** → flag `verificar_camera_na_chamada`. → MSG-10.

**MSG-10 (App de banco)** — *"E a senhora tem conta em banco? Caixa, Banco do Brasil, Bradesco, qualquer um. Se tiver, usa o aplicativo do banco no celular?"*
  Tipo: botão (Sim, uso o app / Tenho conta mas não uso app / Não tenho conta em banco)
  Anotar em `govbr_app_banco`. → MSG-11.

---

### BLOCO 4 — Classificação e handoff (MSG-11 a MSG-13)

**MSG-11 (classificação automática — NÃO enviada ao cliente)**
Aplicar as regras **R1 a R5 revisadas (ERRATA-001 §2.3)** sobre as respostas P1-P5 + MSG-09 + MSG-10. Gerar o preview para o Beto (formato §3).

> **Pós-ERRATA-001:** o preview **sempre** sai com Rota 1 (biometria facial) como padrão e Rota 2 (banco) ou Rota 3 (presencial) como fallback. **KBA diagnóstico nunca é a rota recomendada inicial.**

**MSG-12 (agradecimento ao cliente)** — *"Pronto, Dona [nome]. Já tenho tudo que preciso. Vou montar seu plano e te chamo aqui de volta em [X] horas com o caminho mais rápido pro seu caso. Pode ficar tranquila — a gente cuida disso."*

**MSG-13 (handoff interno — NÃO enviada ao cliente)**
Enviar preview completo (§3) para o Beto via WhatsApp grupo interno **+ atualizar card ClickUp** com campos §6.3.

---

## 3. Preview do Beto (formato obrigatório)

```
═══════════════════════════════════════════════════════
PREVIEW TRIAGEM GOV.BR — [nome do cliente]
Data: [DD/MM/AAAA HH:MM]
WhatsApp: [+55 XX 9XXXX-XXXX]
═══════════════════════════════════════════════════════

NÍVEL ESTIMADO: Bronze / Prata / Ouro / Desconhecido

HOOK 0:
  P1 (trabalho registrado): [Sim / Não / Não lembro]
  P2 (CTPS física):         [Tenho / Vou procurar / Não tenho]
  P3 (papel INSS):          [Tenho / Não tenho]
  P4 (último emprego):      [ano — empresa] | [não lembra]
  P5 (benefício atual):     [Aposentadoria / BPC / BF / Pensão / Nenhum / Outro]
  Câmera frontal:           [Sim / Não / Não sei]
  App banco:                [Uso / Tenho mas não uso / Não tenho conta]

CENÁRIO E8:        C[XX] — [nome do cenário]
ROTA RECOMENDADA:  Rota [N] — [Biometria facial / Banco / Presencial]
FALLBACK:          Rota [N] — [Banco / Presencial]
ÚLTIMO RECURSO:    KBA diagnóstico (somente se Beto acionar)

FOTOS RECEBIDAS:
  - CTPS: [sim — N páginas / não / pendente]
  - CNIS / papel INSS: [sim / não]

FLAGS DETECTADAS:
  - [lista — ex: "memoria_fraca", "sem_camera_frontal_testar_traseira",
     "CTPS_pendente", "KBA fechado (nunca contribuiu)", "senha esquecida"]

TRAVAS PROVÁVEIS (E5 v1.1):
  - [IDs — ex: T1.01, T1.02, T2.04, T2.16]
═══════════════════════════════════════════════════════
```

---

## 4. Regras de negócio

### 4.1 Regras de classificação (ERRATA-001 §2.3 — DEFINITIVAS)

```python
# Prioridade: avaliar na ordem. Primeira regra que casa manda.

# R1 REVISADA — TEM inteligência contributiva
SE P1 == "Sim" E (P2 == "Tenho aqui" OU P3 == "Tenho" OU P4 != vazio):
    cenario       = "Bloco_A"            # C01-C04 (variantes por P3, banco, etc)
    rota          = 1                     # Biometria facial
    rota_fallback = 2                     # Banco
    kba_reserva   = True                  # Acionável pelo Beto se tudo falhar
    flag_dossie   = "CTPS/CNIS para dossiê Φ₁"

# R2 REVISADA — tem histórico mas sem documentos
SENÃO SE P1 == "Sim" E P2 == "Não tenho" E P3 == "Não tenho" E P4 == vazio:
    cenario       = "Bloco_A_sem_docs"   # C02 variante
    rota          = 1                     # Biometria facial
    rota_fallback = 2                     # Banco
    flag          = "considerar Central 135 para obter dados contributivos"
    kba_reserva   = True

# R3 REVISADA — nunca contribuiu
SENÃO SE P1 == "Não" E P5 in ("BPC-LOAS","Bolsa Família","Nenhum"):
    cenario       = "Bloco_B"            # C06, C07
    rota          = 1                     # Biometria facial (se TSE/DENATRAN)
    rota_fallback = 2                     # Banco (se bancarizado)
    rota_ultimo   = 3                     # Presencial
    kba_reserva   = False                 # KBA impossível — nunca contribuiu
    flag          = "KBA fechado — sem histórico contributivo"

# R4 INALTERADA — CTPS é backup probatório transversal
SE P2 == "Tenho aqui":
    flag_adicional = "CTPS disponível — backup Lei 9.784/1999, CRPS, futura DER"

# R5 INALTERADA — aposentadoria/pensão ativa
SE P5 in ("Aposentadoria","Pensão"):
    flag_adicional = "investigar T1.14 (senha esquecida) antes de nova rota"

# Refinamentos com MSG-09 e MSG-10
SE camera_frontal == "Não":
    nota = "biometria facial via câmera traseira assistida (familiar segura, cliente vira cabeça)"

SE app_banco == "Sim, uso o app":
    rota_fallback = 2                     # Banco confirmado como fallback viável

SE app_banco == "Tenho mas não uso":
    nota_adicional = "Beto verifica se internet banking está ativo na chamada"

SE app_banco == "Não tenho conta":
    rota_fallback = 3                     # Pula banco, vai direto para presencial
```

### 4.2 Tabela de combinações realistas (mínimo 20 — público MC)

| # | P1 | P2 | P3 | P4 | P5 | Câm | Banco | Cenário E8 | Rota | Fallback | Flags |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Sim | Tenho | Não | resp | Apos | Sim | Uso | **C01** Idoso urbano bancarizado c/ CTPS | 1 Biom | 2 Banco | `dossiê_Φ₁`, `T1.14_se_sem_acesso` |
| 2 | Sim | Não | Não | resp | Apos | Sim | Uso | **C02** Idoso urbano s/ CTPS | 1 Biom | 2 Banco | `considerar_135` |
| 3 | Sim | Tenho | Não | resp | Nenhum | Sim | Não tenho | **C03** Rural c/ CTPS s/ banco | 1 Biom (TSE) | 3 Pres | `T2.04_internet_rural` |
| 4 | Sim | Tenho | Sim | resp | Apos | Sim | Uso | **C04** Idoso c/ CNIS físico | 1 Biom | 2 Banco | `CNIS_para_dossiê_Φ₁` |
| 5 | Sim | Tenho | Não | resp | Nenhum | Não | Tenho não uso | **C05** PcD motora c/ histórico | 1 Biom traseira | 3 Pres | `flag_PcD`, `T2.07_tremor` |
| 6 | Não | — | — | — | BPC | Sim | Não tenho | **C06** BPC puro c/ TSE | 1 Biom | 3 Pres | `KBA_fechado`, `T2.15` |
| 7 | Não | — | — | — | BF | Sim | Tenho não uso | **C07** BF puro | 1 Biom | 2 Banco | `KBA_fechado`, `T2.15` |
| 8 | Não | — | — | — | Nenhum | Não sei | Não tenho | **C07** variante s/ smartphone próprio | 1 Biom traseira | 3 Pres | `KBA_fechado`, `T2.01_familiar` |
| 9 | Sim | Vou procurar | Não | resp | Apos | Sim | Uso | **C01** variante CTPS pendente | 1 Biom | 2 Banco | `CTPS_pendente`, lembrete +24h |
| 10 | Não lembro | Não | Não | vazio | Nenhum | Sim | Tenho não uso | **C02** variante memória fraca | 1 Biom | 2 Banco | `memoria_fraca`, `considerar_135` |
| 11 | Sim | Tenho | Não | resp | Pensão | Sim | Uso | **C04** viúva c/ pensão | 1 Biom | 2 Banco | `T1.14_senha_pensao_antiga` |
| 12 | Sim | Não | Não | vazio | Nenhum | Sim | Não tenho | **C02** mais grave (s/ docs s/ banco) | 1 Biom | 3 Pres | `considerar_135`, `T2.04` |
| 13 | Sim | Tenho | Sim | resp | BPC | Sim | Uso | **C04** variante BPC + histórico | 1 Biom | 2 Banco | `dual_BPC_aposent_idade`, `LC142` |
| 14 | Não | — | — | — | BPC | Não | Não tenho | **C09** BPC PcD severa | 1 Biom traseira | 3 Pres | `flag_PcD`, `representante_legal` |
| 15 | Sim | Tenho | Não | resp | Nenhum | Não sei | Não tenho | **C03** rural sem banco c/ celular fraco | 1 Biom (TSE) | 3 Pres | `T2.02_camera`, `T2.04_internet` |
| 16 | Sim | Não | Não | resp | Apos | Sim | Uso | **C02** aposentado já tem conta antiga | 1 Biom | 2 Banco | `T1.14_se_senha`, R5 |
| 17 | Não lembro | Vou procurar | Não | vazio | BF | Sim | Não tenho | **B/A híbrido** | 1 Biom | 3 Pres | `memoria_fraca`, `KBA_fechado_se_BF_puro`, `CTPS_pendente` |
| 18 | Sim | Tenho | Sim | resp | Apos | Não | Uso | **C04** PcD motora idoso c/ CNIS | 1 Biom traseira | 2 Banco | `flag_PcD`, `dossiê_completo` |
| 19 | Não | — | — | — | Nenhum | Sim | Uso | **C06** BPC puro bancarizado | 1 Biom | 2 Banco | `KBA_fechado`, raro perfil |
| 20 | Sim | Não | Não | resp | Pensão | Sim | Tenho não uso | **C02** viúva s/ docs | 1 Biom | 2 Banco | `T1.14`, `considerar_135`, R5 |
| 21 | Sim | Tenho aqui | Sim | resp | Apos | Sim | Uso | **C01+C04** caso ouro (todos docs) | 1 Biom | 2 Banco | `dossiê_Φ₁_premium` |
| 22 | Não | — | — | — | Outro | Não | Não tenho | indefinido — escalonar Beto | 1 Biom | 3 Pres | `escalation_required` |

### 4.3 Regras de timeout e lembrete

- **Sem resposta em 4h:** lembrete gentil — *"Dona [nome], tudo bem? Quando puder, a gente continua daqui."*
- **Sem resposta em 24h:** segundo lembrete — *"Dona [nome], passei aqui só pra ver se a senhora tá bem. Quando der, é só me chamar."*
- **Sem resposta em 72h:** marcar `govbr_triagem_status = "Incompleta"`, notificar Beto.
- **P2 = "Vou procurar":** lembrete específico em 24h — *"Dona [nome], conseguiu achar a carteirinha azul?"*
- **Cooldown KBA ativo:** se cliente reportar bloqueio KBA, anotar timestamp em `govbr_kba_cooldown` e agendar lembrete para 24h após (momento exato de desbloqueio confirmado por evidência empírica JAN001 08-09/05/2026).

### 4.4 Regras de privacidade (LGPD)

- **Fotos de CTPS / CNIS:** armazenar no card ClickUp do caso MC; **apagar do WhatsApp em 48h**.
- **CPF e NIS:** **não trafegam** no fluxo automatizado — só no handoff para o Beto (campo separado, não incluído nas mensagens automáticas).
- **Consentimento LGPD** coletado em MSG-02 como **pré-condição obrigatória**.
- **Recusa de consentimento:** encerrar com respeito (MSG-encerramento), **não prosseguir**, marcar `govbr_triagem_status = "Recusou consentimento"`.

---

## 5. Detecção de travas no fluxo

| ID trava (E5 v1.1) | Em qual MSG se manifesta | Sinal de detecção | Flag gerada no preview |
|---|---|---|---|
| **T2.15** (KBA — nunca contribuiu) | MSG-04 + MSG-08 | P1=Não E P5 in (BPC, BF, Nenhum) | `KBA_fechado_nunca_contribuiu` |
| **T2.16** (Analfabeto previdenciário) | MSG-04 a MSG-07 | P1=Sim mas P2/P3/P4 todos negativos/vazios | `sem_docs_contributivos_considerar_135` |
| **T2.05** (Analfabeto absoluto) | qualquer MSG | Cliente manda apenas áudios, nunca texto | `possivel_analfabetismo_Beto_usar_audio` |
| **T2.01** (Sem smartphone) | falha geral em iniciar | Mensagens não chegam ou chega via "filha do meu vizinho" | `sem_smartphone_via_familiar_ou_135` |
| **T3.01** (Familiar operando sem procuração) | qualquer MSG | Padrão de resposta sugere terceiro (linguagem mais jovem, números diferentes mencionados) | `possivel_familiar_verificar_chamada` |
| **T1.14** (Senha esquecida + sem biometria) | MSG-08 (P5) | P5=Aposentadoria/Pensão e cliente menciona não conseguir entrar | `T1.14_senha_esquecida_verificar_antes_nova_rota` |
| **T2.02** (Sem câmera frontal) | MSG-09 | MSG-09=Não | `camera_traseira_assistida_familiar` |
| **T1.01** (Reconhecimento facial falha) | qualquer momento — relato espontâneo | Cliente menciona tentativa anterior fracassada | `facial_ja_tentado_verificar_T1.02_24h` |
| **T1.02** (Bloqueio 24h após N tentativas) | qualquer momento — relato espontâneo | Cliente menciona "deu erro 3 vezes e travou" | `bloqueio_24h_redirecionar_imediato_para_banco` |
| **T2.03** (Sem internet rural) | falha em receber/responder | Cliente reporta "só pego sinal na rua" | `T2.04_internet_rural_janela_baixa_carga` |
| **T3.05** (Senha em custódia — VEDADO) | qualquer MSG | Familiar oferece "minha mãe me passou a senha dela" | `T3.05_VETADO_recusar_oferecer_SPE_T3.07` |
| **T3.06/T3.07** (Outorgado/outorgante Bronze) | contexto de procuração | Familiar pergunta como acessar conta do parente | `escalonamento_Beto_explicar_SPE_e_cadastro_representante` |

---

## 6. Especificação técnica para Igor (N8N)

### 6.1 Trigger
**WhatsApp Cloud API webhook:** nova mensagem no número MC, originada de contato novo OU contato com tag `triagem_pendente` no ClickUp.

### 6.2 Sequência de nós N8N

1. **Webhook de entrada** (recebe payload WhatsApp Cloud API).
2. **Identificação do cliente** — chave primária: número WhatsApp; nome coletado em MSG-01.
3. **Envio sequencial MSG-01 → MSG-10** com **espera por resposta** entre cada (nó "Wait for webhook" ou polling com timeout configurável).
4. **Parsing das respostas** — botões = strings fixas (match direto); texto livre (MSG-01, MSG-07) = NLP básico (regex de ano + extração de empresa) ou fallback manual com flag `parsing_manual_required`.
5. **Recepção de fotos** — receber via WhatsApp Media API → upload para ClickUp attachment do card. Atualizar checkboxes `govbr_ctps_foto` / `govbr_cnis_foto`.
6. **Aplicação das regras §4.1** — função pura sobre os campos coletados, retorna `(cenario, rota, fallback, flags[])`.
7. **Geração do preview §3** — template de string com os campos.
8. **Criação ou atualização do card ClickUp** com campos §6.3.
9. **Notificação ao Beto** — WhatsApp grupo interno OU ClickUp notification (mention).
10. **Log de auditoria** — timestamp de cada MSG enviada + resposta recebida (compliance LGPD trail).

### 6.3 Campos ClickUp (custom fields)

| Campo | Tipo | Valores |
|---|---|---|
| `govbr_nivel_estimado` | dropdown | Bronze / Prata / Ouro / Desconhecido |
| `govbr_cenario_e8` | texto curto | C01 a C18 |
| `govbr_rota_recomendada` | dropdown | Rota 1 Biometria / Rota 2 Banco / Rota 3 Presencial |
| `govbr_rota_fallback` | dropdown | (idem) |
| `govbr_p1_trabalho` | dropdown | Sim / Não / Não lembro |
| `govbr_p2_ctps` | dropdown | Tenho aqui / Vou procurar / Não tenho |
| `govbr_p3_cnis` | dropdown | Tenho / Não tenho |
| `govbr_p4_ultimo_emprego` | texto curto | "ano — empresa" |
| `govbr_p5_beneficio` | dropdown | Aposentadoria / BPC / BF / Pensão / Nenhum / Outro |
| `govbr_camera_frontal` | dropdown | Sim / Não / Não sei |
| `govbr_app_banco` | dropdown | Sim uso / Tenho não uso / Não tenho |
| `govbr_ctps_foto` | checkbox | — |
| `govbr_cnis_foto` | checkbox | — |
| `govbr_flags` | texto longo | lista de flags |
| `govbr_kba_cooldown` | datetime | timestamp do bloqueio (se aplicável) |
| `govbr_triagem_status` | dropdown | Completa / Incompleta / Recusou consentimento |
| `govbr_triagem_data` | datetime | — |

### 6.4 Evidência empírica incorporada

- **Cooldown KBA = 24 horas exatas** com timestamp (tela capturada 09/05/2026, usuária JAN001).
- **Selo KBA = Bronze validado**, NÃO Prata (catálogo oficial gov.br + FAQ confirmados em 09/05/2026).
- **Caso JAN001:** biometria facial funcionou na **2ª tentativa** após assistir vídeo de orientação — base do roadmap §4.1 da ERRATA-001 (vídeo MC institucional + simulador gamificado).

---

## 7. Versão manual (Beto sem automação)

Enquanto o N8N não estiver configurado, o Beto executa o Hook 0 manualmente seguindo o script do **E8 v1.1 §1**. As mensagens deste documento (§2 BLOCOS 1-4) servem como **roteiro literal** — Beto pode copiar e colar, ajustando apenas `[nome]`.

### Checklist do Beto pós-triagem manual

1. ☐ Preencher campos ClickUp §6.3 manualmente.
2. ☐ Anexar fotos de CTPS/CNIS no card ClickUp.
3. ☐ Anotar cenário E8 (C01-C18) e rota recomendada.
4. ☐ Se detectou trava (§5): anotar ID do E5 v1.1 e flag em `govbr_flags`.
5. ☐ Se cliente reportou bloqueio KBA: anotar timestamp em `govbr_kba_cooldown` e agendar lembrete +24h.
6. ☐ Mudar `govbr_triagem_status` para "Completa".
7. ☐ **Iniciar rota recomendada — sempre biometria facial primeiro** (mandar vídeo MC institucional via WhatsApp se já produzido; senão, áudio explicativo do Beto).
8. ☐ KBA diagnóstico só se Rotas 1, 2 e 3 falharam **e** as 4 fontes de inteligência contributiva (CTPS / CNIS físico / memória / Central 135) não estão disponíveis.

---

## 8. Encaixe no ecossistema MC

| Documento | Relação com a Anamnese |
|---|---|
| **E8 v1.1** (ArvoreDecisao-APIHumana) | Define os 18 cenários (C01-C18) que a Anamnese mapeia a partir das respostas. |
| **E5 v1.1** (CatalogoTravas) | Define os IDs de trava (T1.x / T2.x / T3.x) que a Anamnese detecta no §5. |
| **E4.2 v1.2** (Matriz-NivelServico) | Define o nível estimado (Bronze/Prata/Ouro) e o gargalo Prata. |
| **ERRATA-001 v1.0** | Reposiciona KBA como diagnóstico — fonte das R1-R3 revisadas e da hierarquia de rotas. |
| **PROMPT-E12-v2** (gerador) | Spec original que originou este documento (sandbox). |
| **Bloco N da Pauta-Juliana v2.0** | Os Cenários A/A+/B (perímetro jurídico da assistência) operam sobre a rota recomendada por esta Anamnese. |

---

## 9. Próximos passos (roadmap pós-v1.0)

1. **v1.1 quando:** vídeo MC institucional para biometria facial estiver produzido — atualizar MSG-12 com link.
2. **v1.1 quando:** simulador gamificado de biometria estiver disponível — adicionar MSG-09b com link de treino.
3. **v1.2 quando:** Igor implementar fluxo N8N — adicionar diagrama N8N no §6.
4. **v1.2 quando:** primeiro caso real for processado pelo fluxo automatizado — incorporar lições.
5. **v2.0 quando:** parecer Dra. Juliana selar Cenário A/A+ (Bloco N da Pauta v2.0) — incorporar cláusulas de consentimento ampliado e termo de assistência (ZapSign — ADR-014 — se aplicável).

---

```
D > C > V | DIGNIDADE > COMPLIANCE > VIABILIDADE | SEMPRE
"Abre a tua boca a favor do mudo." — Provérbios 31:8
Lucro é combustível. Causa é destino. Jogo é infinito.
```

**MC-GOVBR-Anamnese-Triagem-GovBr-v1_0-2026-0509.md**
Autor: Claude Code × Alessandro de Souza Neves
Fontes: E8 v1.1 + E5 v1.1 + ERRATA-001
**∞**
