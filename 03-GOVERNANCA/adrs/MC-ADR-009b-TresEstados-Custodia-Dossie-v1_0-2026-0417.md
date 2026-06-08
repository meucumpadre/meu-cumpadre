---
doc_id: MC-ADR-009
titulo: Três Estados de Custódia do Dossiê Vivo
versao: 1.1 (saneado · incorpora a Opção C da Dra. · 2026-06-06)
data: 2026-04-17 (saneamento 2026-06-06)
autor: Alessandro de Souza Neves (Founder/CEO) + Claude (Co-fundador Intelectual)
status: "PROPOSTO · SANEADO (Opção C) — ✅ RATIFICADO/SELADO pela Dra. Juliana (despacho saneamento **v1.3**, 06/06/2026 · supera a minuta v1.2): exclusividade Dra. Juliana até dez/2026 + marketplace reabre dez/2026; anti-captação ancora na livre escolha; consentimento linha 316 reescrito (§5). ⚠️ PENDÊNCIAS DE EXECUÇÃO (condições seladas por ela): re-coleta do consentimento da linha 316 + RIPD antes de nova custódia · minimização de PII (§6) · §2 manda remover de TODO artefato vivo o nome da parceira de ciclo encerrado E o da não-vigente (Opção C) · limpeza do HISTÓRICO git (Founder). PII de nomes de cliente minimizada no working tree (PRs #47/#48); RIPD produzido (PR #44)."
classificacao: CONFIDENCIAL — TRADE SECRET (LPI arts. 195 XI/XII)
hash_ref: A gerar no snapshot final (SHA-256 + RFC 3161 ICP-Brasil)
relacionados: ADR-007 v2.0 (Pricing), ADR-008 (Stack), ADR-011 (Compliance OAB), MC-PLAYBOOK-Custodia-Operacional-v2.0
---

# ADR-009 — Três Estados de Custódia do Dossiê Vivo

## 0. Sumário Executivo (BLUF)

O Meu Cumpadre (MC) **não é broker de comunicação mediada**. É **fiduciário digital de dossiês previdenciários** para cidadãos hipervulneráveis. Esta distinção é fundacional e define toda a arquitetura de dados, compliance e modelo de receita.

Este ADR estabelece que todo artefato probatório ingressante no ecossistema MC transita por **três estados de custódia sequenciais**, com regimes jurídicos distintos, TTLs operacionais distintos e titularidade distinta:

| Estado | Titular | Custodiante técnico | TTL | Base legal |
|---|---|---|---|---|
| **S1 — Intermediário** | Cidadão | MC (cifrado dupla chave) | 30-60 dias | LGPD art. 7º V + consentimento específico |
| **S2 — Consolidado** | Cidadão | MC entrega; apaga em 7 dias | Até confirmação de entrega + 7 dias | LGPD art. 18 + dossiê assinado ICP-Brasil |
| **S3 — Probatório** | Escritório parceiro (controlador) | Vault do escritório | Conforme CED/prescrição (10 anos) | LGPD art. 7º V + Art. 7º II EAOAB |

O cidadão é **titular originário** do dossiê durante S1 e S2. O escritório só se torna controlador em S3, mediante token de transferência assinado pelo próprio cidadão (equivalente funcional de procuração digital). Essa arquitetura resolve simultaneamente quatro tensões: (i) zero-retention × proof-first; (ii) firewall OAB atividade-meio × atividade-fim; (iii) captação indevida (Provimento 205/2021); e (iv) soberania digital do hipervulnerável (Inversão Cósmica).

**Decisão:** adotar a arquitetura de Três Estados como princípio fundacional não-negociável, anterior a qualquer escolha de vendor CPaaS ou BSP WABA.

---

## 1. Contexto

### 1.1 O problema que este ADR resolve

Conversa estratégica de 17/04/2026 entre Alessandro e Claude identificou tensão arquitetural não resolvida no SSoT existente:

- O **Grimório Previdenciário v2.0** define Proof-First como "prova material antes de qualquer orientação", montado incrementalmente ao longo de dias ou semanas (seção 6.2).
- O **relatório Perplexity (17/04)** propõe zero-retention sobre conteúdo para proteger sigilo OAB.
- O **Art. 7º II do Estatuto da OAB (Lei 8.906/94, redação Lei 14.365/2022)** torna inviolável a correspondência telemática advogado-cliente.
- A **LGPD (Lei 13.709/2018)** exige minimização de dados e base legal específica para cada tratamento.

A combinação destas quatro exigências cria o seguinte dilema aparente:

> *"Se o MC não guarda conteúdo, como forma o dossiê Proof-First que precisa ser montado progressivamente?*
> *Se o MC guarda conteúdo, viola zero-retention e entra em zona de risco OAB.*
> *Se o escritório guarda desde o primeiro áudio, recebe conteúdo antes de caso aberto = captação indevida.*
> *Se ninguém guarda, não existe dossiê Proof-First."*

Arquitetura binária (zero-retention vs retenção integral) falha por ignorar que o dossiê tem **ciclo de vida**, com estados ontologicamente distintos. Este ADR propõe arquitetura ternária que honra simultaneamente todas as exigências.

### 1.2 Princípios invioláveis preservados

Esta arquitetura respeita e reforça:

1. **Hierarquia D > C > V** — dignidade do cidadão é critério primeiro; cidadão é titular originário do dossiê em dois dos três estados.
2. **Firewall OAB atividade-meio × atividade-fim** — MC atua como fiduciário técnico; advogado atua como controlador jurídico apenas em S3.
3. **Proof-First (Lei + Evidência + Hash)** — cada transição de estado gera hash SHA-256 + timestamp RFC 3161 ICP-Brasil.
4. **Inversão Cósmica** — valor (titularidade do dossiê) fica com o cidadão vulnerável, não com intermediário.
5. **Teste Zilda-STF** — arquitetura é invisível para Dona Zilda (UX transparente) e completa para STF/TCU/ANPD/OAB (documentação auditável).

---

## 2. Definições Operacionais

### 2.1 Dossiê Vivo

Conjunto estruturado de artefatos probatórios (áudios, imagens, textos, documentos digitalizados, autodeclarações, dados estruturados extraídos via OCR, referências legais, genealogia documental) que, organizados cronologicamente e validados contra o Rule Engine do Grimório Previdenciário, constituem prova material (Lei + Evidência + Hash) do direito previdenciário do cidadão.

"Vivo" porque é montado incrementalmente ao longo de dias ou semanas, evoluindo estado por estado, e porque cada artefato tem ciclo de vida próprio (ingressa, valida, integra, consolida, transfere ou descarta).

### 2.2 Custodiante Técnico

Entidade que detém controle físico/criptográfico sobre o artefato em determinado estado. Custodiante técnico **não é sinônimo de titular**.

### 2.3 Titular Originário

Pessoa natural (cidadão hipervulnerável) em nome de quem o dossiê é montado. Detém direitos LGPD plenos (arts. 18-22) durante S1 e S2. Em S3, mantém direitos como titular de dados pessoais, mas a controladoria da relação jurídica migra para o escritório parceiro.

### 2.4 Fiduciário Digital

Figura arquitetural proposta pelo MC: entidade que custodia tecnicamente dados probatórios em nome do titular originário, com dever de minimização, transparência e integridade, sem adquirir direito econômico sobre o conteúdo. Fundamento jurídico: combinação dos arts. 7º V, 18, 39 e 48 da LGPD + analogia ao art. 64 do CTN (fiducia) + princípio da proteção do hipervulnerável (CDC art. 39 IV + doutrina Cláudia Lima Marques / Bruno Miragem).

---

## 3. Os Três Estados de Custódia

### 3.1 S1 — Estado Intermediário

**Definição.** Artefato probatório isolado, ingressante no ecossistema MC, ainda não integrado a dossiê formado. Exemplo: áudio da Dona Zilda descrevendo tempo rural em terça-feira; foto do bloco de produtor enviada em quinta; certidão de casamento do marido enviada dois meses depois.

**Titular.** Cidadão (titular originário).

**Custodiante técnico.** MC, em cofre criptografado (Google Cloud KMS AES-256), com **dupla chave**: (a) chave do MC para operações de processamento (OCR, classificação, validação); (b) chave derivada do cidadão (gerada a partir de identificador estável: CPF + telefone + data nascimento hasheados) para que revogação seja possível.

**TTL operacional.** 30 dias por padrão, extensível a 60 dias mediante consentimento específico renovado via WhatsApp ("Cumpadre, sua documentação ainda está sendo organizada. Posso guardar mais um mês?"). Após TTL, artefato é descartado ou promovido a S2 (consolidação em dossiê).

**Base legal LGPD.** Execução de contrato (art. 7º V) + consentimento específico (art. 7º I) + proteção da vida (art. 7º IV) quando aplicável. **NÃO** legítimo interesse — esta figura é inadequada para hipervulneráveis (Enunciado 38/ANPD em consulta).

**Base legal OAB.** Não incide Art. 7º II EAOAB em S1 porque não existe ainda relação advogado-cliente. Artefato é material próprio do cidadão entregue ao fiduciário.

**Operações permitidas ao MC em S1:**
- OCR via Google Vision (com redação automática de CID, CPF alheio, dados sensíveis de terceiros)
- Classificação automática via Rule Engine (tipo de documento, período coberto, força probatória estimada)
- Validação contra Grimório Previdenciário v2.0
- Geração de hash SHA-256 + timestamp inicial (não-ICP-Brasil em S1; ICP-Brasil apenas em S2)
- Notificação ao cidadão ("Cumpadre, recebi sua certidão. Deu certo!")

**Operações PROIBIDAS ao MC em S1:**
- Compartilhamento com qualquer parceiro jurídico (inclusive Dra. Juliana Melo)
- Indexação em BigQuery ou qualquer dataset analítico (exceto metadados anonimizados — ver ADR MCP-Classificação)
- Treinamento de modelos de IA sobre conteúdo
- Persistência em backup off-line de longo prazo
- Acesso humano fora do registro de auditoria (TIER 4 do MCP)

### 3.2 S2 — Estado Consolidado

**Definição.** Dossiê Proof-First formado: conjunto coeso de artefatos S1 integrados, com fundamentação legal aplicada, hash encadeado de cada peça, linha do tempo probatória completa, e assinatura ICP-Brasil do MC (carimbo de tempo RFC 3161 + assinatura digital qualificada nos termos da Lei 14.063/2020 e MP 2.200-2/2001).

**Titular.** Cidadão (titular originário). **Esta é a inovação central deste ADR.**

**Custodiante técnico.** MC gera o dossiê consolidado, entrega ao cidadão (PDF/A com todos os hashes + certificado ICP-Brasil incorporado), e **descarta sua própria cópia do conteúdo em até 7 dias após confirmação de entrega**. MC preserva apenas: (a) metadados operacionais (TIER 4 MCP — quem falou com quem, quando, duração); (b) hash do dossiê consolidado (para verificação futura de integridade); (c) ticket de consolidação (evidência de que o dossiê existiu e foi entregue); (d) eventual cópia cifrada opaca ("sealed envelope") acessível apenas mediante nova autorização do cidadão.

**TTL operacional.** Cópia S2 no MC: 7 dias após entrega confirmada, depois descarte. Cópia S2 com o cidadão: perpétua (é dele).

**Base legal LGPD.** Cumprimento de obrigação regulatória de prestação de contas ao titular (art. 18 V e VIII) + minimização (art. 6º III) + execução de contrato na fase de encerramento (art. 7º V).

**Base legal OAB.** Ainda não incide Art. 7º II porque o dossiê ainda não foi transferido para escritório. O **dossiê é propriedade do cidadão**, que pode: (i) protocolar diretamente no Meu INSS; (ii) levá-lo a advogado(a) de **sua livre escolha**; (iii) guardá-lo para uso futuro; ou (iv), se quiser, pedir que o MC apresente a **parceira exclusiva** (até dez/2026), **sem obrigação**. *(saneado · Opção C)*

**Ponto crítico — soberania da escolha (Opção C · saneado):** a transição de S2 para S3 **só ocorre por decisão soberana do cidadão**. Durante a **exclusividade vigente (até dez/2026)**, o MC apresenta **sua parceira exclusiva — Dra. Juliana Pereira de Melo (OAB-GO 38.662) — apenas a pedido do cidadão**, sem direcionamento e sem comissão; o cidadão preserva a **livre escolha de qualquer advogado** do Brasil. A **reabertura do marketplace de N parceiras** ocorre em **dez/2026**. A exclusividade é arranjo comercial B2B entre o MC e a advogada, **não restrição imposta ao cidadão**.

**Hand-off com transparência — script padrão (saneado · sem nomes de ciclo encerrado):**

> *[MC para cidadão, em áudio + texto]:*
> *"Dona [NOME], seu caso é complexo e pede advogado especialista.*
> *Aqui o(a) senhor(a) pode levar seu dossiê, já organizado, ao **advogado de sua livre escolha**.*
> *Se quiser, posso apresentar nossa parceira, a **Dra. Juliana Melo (OAB-GO 38.662)** — sem nenhuma obrigação sua.*
> *O(a) senhor(a) fica dono(a) da escolha. Quer que eu explique como funciona?"*

### 3.3 S3 — Estado Probatório

**Definição.** Dossiê consolidado transferido ao escritório parceiro escolhido pelo cidadão, após autorização formal via **Token de Transferência Assinado** (TTA).

**Titular.** Cidadão permanece como titular dos dados pessoais (direitos LGPD plenos preservados). Escritório parceiro se torna **controlador** da relação jurídica processual e custodiante formal do dossiê para fins contenciosos.

**Custodiante técnico.** Vault do escritório parceiro (responsabilidade técnica-jurídica do escritório). MC **não retém** cópia do conteúdo em S3 — apenas metadados de hand-off (evidência de que a transferência ocorreu, quando, para qual escritório, com autorização do cidadão).

**TTL operacional.** Conforme CED/OAB (tipicamente 10 anos) e prescrição previdenciária (5 anos + trânsito em julgado). Responsabilidade do escritório.

**Base legal LGPD.** Execução de contrato de prestação de serviços advocatícios (art. 7º V) + legítimo interesse do advogado para guarda de documentação do caso (art. 7º IX combinado com art. 20 EAOAB).

**Base legal OAB.** Art. 7º II EAOAB incide plenamente em S3 (inviolabilidade da correspondência telemática advogado-cliente). Precedente STF (Min. Dias Toffoli, fev/2024) + Art. 7º § 6º a 6º-I EAOAB protegem sigilo.

**Token de Transferência Assinado (TTA) — especificação:**
- Gerado pelo MC **no momento em que o cidadão escolhe levar o dossiê a um(a) advogado(a)** *(saneado · Opção C)*
- Assinado pelo cidadão via ZapSign (ADR-014, LGPD-nativa, WhatsApp nativo, ISO 27001 — substitui Autentique) com equivalência funcional a procuração digital
- Contém: CPF do cidadão, OAB do advogado escolhido, hash do dossiê consolidado, timestamp RFC 3161 ICP-Brasil, declaração expressa de ciência e consentimento
- Registrado imutavelmente no TIER 4 do MCP
- Serve como evidência em eventual auditoria OAB, ANPD, TCU, STF

**Operações do MC em S3:**
- Monitoramento de status processual (via polling público Meu INSS) — **não acessa conteúdo da relação advogado-cliente**
- Notificações operacionais ao cidadão sobre marcos do caso (com consentimento específico renovado)
- Guarda de metadados de hand-off para auditoria
- Nada além disso

---

## 4. Fluxo Operacional — Jornada da Dona Zilda

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  DIA 1         ZILDA ENVIA ÁUDIO                                    │
│  ──────        ──────────────────                                   │
│                "Oi cumpadre, eu trabalhei na roça desde menina..."  │
│                   │                                                 │
│                   ▼                                                 │
│                [S1 — INTERMEDIÁRIO]                                 │
│                MC cifra (dupla chave) + OCR/NLU + classifica        │
│                + valida contra Grimório                             │
│                + notifica: "Recebi, Dona Zilda!"                    │
│                TTL: 30 dias                                         │
│                                                                     │
│  DIA 5         ZILDA ENVIA FOTO BLOCO DE PRODUTOR                   │
│  ──────        ─────────────────────────────────                    │
│                [S1] — mesmo fluxo, acumula                          │
│                                                                     │
│  DIA 15        BETO (ANJO) VISITA CASA DA ZILDA                     │
│  ───────       ────────────────────────────────                     │
│                Coleta certidão casamento marido (profissão:         │
│                lavrador), carteirinha sindicato, ITR 1998           │
│                [S1] — acumula via Anjo, mesmo fluxo                 │
│                                                                     │
│  DIA 30        DOSSIÊ COMPLETO                                      │
│  ───────       ───────────────                                      │
│                Rule Engine confirma: cobertura probatória           │
│                atende Lei 8.213/91 art. 48 + Tema 1007/STJ          │
│                   │                                                 │
│                   ▼                                                 │
│                [S2 — CONSOLIDADO]                                   │
│                MC gera PDF/A com:                                   │
│                - Linha do tempo probatória                          │
│                - Fundamentação legal inline                         │
│                - Hash SHA-256 de cada peça                          │
│                - Assinatura ICP-Brasil do MC                        │
│                - Timestamp RFC 3161                                 │
│                ENTREGA ao cidadão via WhatsApp + e-mail             │
│                TTL no MC: 7 dias após entrega                       │
│                                                                     │
│  DIA 31        ROUTER-ETHICS AVALIA                                 │
│  ───────       ────────────────────                                 │
│                Score complexidade = 85 (> 70 → handoff mandatório)  │
│                   │                                                 │
│                   ▼                                                 │
│                ESCOLHA SOBERANA DO CIDADÃO (Opção C · saneado)      │
│                Dra. Juliana Melo (parceira exclusiva até dez/2026)  │
│                · livre escolha de qualquer advogado ·               │
│                marketplace de N parceiras reabre dez/2026           │
│                Script: "Dona Zilda, a senhora escolhe livre..."     │
│                                                                     │
│  DIA 32        ZILDA ESCOLHE DRA. JULIANA MELO                      │
│  ───────       ────────────────────────────────                     │
│                MC gera Token de Transferência Assinado (TTA)        │
│                Zilda assina via ZapSign (ADR-014)                   │
│                   │                                                 │
│                   ▼                                                 │
│                [S3 — PROBATÓRIO]                                    │
│                Dossiê transferido p/ vault da advogada escolhida    │
│                Broker WABA masking bidirecional ativado             │
│                MC mantém APENAS metadados de hand-off               │
│                Art. 7º II EAOAB blinda sigilo dali em diante        │
│                                                                     │
│  DIA 39        MC APAGA CÓPIA DE S2                                 │
│  ───────       ─────────────────────                                │
│                7 dias após confirmação de entrega                   │
│                Preserva só: hash + ticket + TTA + metadados TIER 4  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 5. Base Legal Detalhada

### 5.1 Fundamentos LGPD

| Artigo | Aplicação no ADR-009 |
|---|---|
| Art. 6º I (finalidade) | Cada estado tem finalidade específica declarada (triagem, consolidação, transferência) |
| Art. 6º II (adequação) | Tratamento compatível com finalidade informada ao titular |
| Art. 6º III (necessidade) | Minimização em cada estado: S1 cifrado, S2 descartado em 7d, S3 não persistido no MC |
| Art. 7º I (consentimento) | Consentimento específico para cada transição de estado |
| Art. 7º V (contrato) | Execução de contrato MC ↔ Cidadão (ToS WhatsApp-nativo) e MC ↔ Escritório (contrato B2B) |
| Art. 7º IV (proteção da vida) | Invocável em casos de hipervulnerabilidade extrema (BPC por invalidez grave) |
| Art. 18 (direitos do titular) | Cidadão exerce plenamente todos os direitos em S1 e S2 |
| Art. 39 (dever do operador) | MC opera sob instrução do titular (em S1/S2) ou do controlador escritório (em S3) |
| Art. 46 (segurança) | Cifração dupla chave + ICP-Brasil + audit trail encadeado |
| Art. 48 (comunicação de incidente) | Procedimento incorporado ao MC-PLAYBOOK-Custodia-Operacional-v2.0 |

### 5.2 Fundamentos OAB

| Dispositivo | Aplicação |
|---|---|
| Lei 8.906/94 art. 1º | MC é atividade-meio; advogadas são atividade-fim. Separação estrita por estado (S1/S2 = MC; S3 = advogada) |
| Art. 7º II EAOAB (redação Lei 14.365/2022) | Sigilo telemático advogado-cliente incide plenamente em S3 |
| Provimento 205/2021 CFOAB | **Afasta captação indevida** porque (Opção C): o dossiê é do cidadão e portável a qualquer advogado de sua livre escolha · MC sem comissão/percentual/bônus por indicação · MC não direciona (parceira só a pedido) · a exclusividade vigente é arranjo B2B, não restrição ao cidadão |
| Art. 34 XIV EAOAB | Vedação de angariação de causas respeitada: cidadão escolhe livremente |
| Art. 16 EAOAB | MC não é sociedade de advogados nem se passa por uma — preserva estrutura |
| STF Dias Toffoli fev/2024 | Inviolabilidade advogado-cliente reforçada — S3 blindado |
| EAOAB §§ 6º a 6º-I | Quebra de sigilo exige mandado judicial pormenorizado com representante OAB — aplicável só em S3 |

### 5.3 Precedentes relevantes

- **U.S. v. Heppner (SDNY 2025, juiz Rakoff):** arquitetura zero-retention + SOC 2 Type 2 qualifica ferramenta para proteção de privilégio advogado-cliente. MC busca equivalente no Brasil.
- **STF HC 91.610, Inq 2.424:** inviolabilidade do escritório é estrita, exige mandado pormenorizado. Reforça blindagem S3.
- **STJ AgInt REsp instrumento particular:** prints sem observância do art. 384 CPC inadmitidos. MC gera cadeia de custódia ICP-Brasil desde S2 = admissibilidade robusta.
- **TRT-MG** validou WhatsApp com ata notarial como prova lícita. Cadeia de custódia MC supera ata notarial (custo ~90% menor + hash criptográfico).
- **Lei 9.279/1996 arts. 195 XI/XII:** o método dos Três Estados + Router-Ethics + Protocolo Alessandro = trade secret defensável. STJ AREsp 2.631.225/RJ (3ª Turma, nov/2025) consolida proteção civil.

---

## 6. Operações Técnicas por Estado

### 6.1 Assinatura ICP-Brasil

MC obtém certificado digital **e-CNPJ A3** (Meu Cumpadre — Orquestração Documental e Tecnologia Ltda., CNPJ 6201-5/01) para assinar dossiês S2. Fornecedores candidatos: Certisign, Soluti, BRy, Serpro. Custo estimado: R$ 300-700/ano. Uso: assinar cada dossiê consolidado com timestamp RFC 3161 referenciado à hora legal brasileira (Observatório Nacional).

### 6.2 Cifração Dupla Chave (S1)

Implementação: **envelope encryption** com Google Cloud KMS. Chave-mestra MC (KEK) protege chave-dados (DEK) que protege artefato. Derivação da chave do cidadão: PBKDF2 sobre (CPF + telefone + data_nascimento + salt por cidadão), armazenado no TIER 1 MCP. Revogação: cidadão pede "apaga tudo meu" → MC destrói DEK → artefatos tornam-se inacessíveis criptograficamente (direito ao esquecimento funcional).

### 6.3 Token de Transferência Assinado (TTA)

Estrutura JSON assinada:
```json
{
  "tta_version": "1.0",
  "tta_id": "TTA-2026-0417-XXXXXX",
  "cidadao_cpf_hash": "sha256:...",
  "cidadao_nome_consentido": "[NOME DO TITULAR]",
  "advogado_escolhido": {
    "nome": "Juliana Pereira de Melo",
    "oab": "OAB-GO 38.662",
    "cnpj_escritorio": "XX.XXX.XXX/0001-XX"
  },
  "dossie_hash": "sha256:...",
  "dossie_versao": "1.0",
  "timestamp_escolha": "2026-04-XX-TZZ-0300",
  "timestamp_rfc3161": "...",
  "declaracao_consentimento": "Eu autorizo o Meu Cumpadre a transferir o meu dossiê para a Dra. Juliana Pereira de Melo, de minha livre escolha. Entendo que: o dossiê é meu e posso levá-lo a qualquer advogado(a) que eu quiser; o Meu Cumpadre não é advogado, não decide o meu benefício e não recebe comissão por indicar; e posso cancelar esta autorização a qualquer momento, de graça, e pedir para apagar os meus dados. (Redação saneada · Opção C · texto integral lapidado no §5.)",
  "audio_consentimento_hash": "sha256:...",
  "assinatura_zapsign_id": "..." // ZapSign (ADR-014 · Autentique vedada)
}
```

TTA é **inversível**: cidadão pode revogar e transferir para outra advogada mediante novo TTA.

#### Consentimento reescrito (linha 316) — texto integral lapidado pela Dra. (§5 · Teste Zilda-STF reforçado)
> ⚠️ **Pré-condição BLOQUEANTE** (despacho saneamento §5): enquanto o consentimento não for reescrito **E re-colhido**, trava-se qualquer nova custódia/hand-off. O consentimento antigo (que citava "três opções" inexistentes) é viciado (LGPD art. 8º §3º) e nulo por informação defeituosa (art. 9º §1º).
>
> *"Eu autorizo o Meu Cumpadre a organizar meus documentos. Com minha autorização e só enquanto durar o serviço, o Meu Cumpadre pode custodiar com segurança meu acesso ao gov.br. Isso é só para dar entrada ou atualizar meu pedido no CRAS. Eu entendo que: (a) **O dossiê é meu.** Posso levar ele para qualquer advogado(a) de minha livre escolha. (b) **O Meu Cumpadre não é advogado.** Não decide meu benefício. Não recebe comissão por indicar alguém. (c) **Se eu pedir**, o Meu Cumpadre pode me apresentar a parceira Dra. Juliana Melo (OAB-GO 38.662). Eu não sou obrigado a aceitar. (d) Posso cancelar esta autorização a qualquer momento, de graça, e pedir para apagar meus dados. Esta autorização vale só para o que está escrito aqui."*
>
> **Validade temporal do item (c):** a indicação nominal da parceira é compatível com a exclusividade vigente (até 31/12/2026). Reaberto o marketplace (jan/2027), o item (c) volta a ser **genérico** ("advogada(s) parceira(s)") ou rotativo, sob pena de direcionamento (EAOAB art. 34 IV; Prov. CFOAB 205/2021).
> **Re-coleta:** todo titular cujo consentimento foi obtido sob a premissa de "três opções" deve manifestar **novo consentimento** sob esta redação antes da continuidade da custódia.

### 6.4 Apagamento Seguro em S2

Após 7 dias da entrega confirmada do dossiê S2 ao cidadão, MC executa:
1. Cryptographic erasure: destruição da DEK do dossiê no Cloud KMS
2. Overwrite dos blocos de storage (Google Cloud Storage com retention policy = 0)
3. Remoção de índices BigQuery (se houver metadados indexados)
4. Log imutável no TIER 4: "DOSSIÊ_APAGADO | hash:... | timestamp:... | motivo:S2_TTL_EXPIRADO"
5. Preservação do sealed envelope opaco (hash + ticket) por 10 anos para auditoria

---

## 7. Consequências

### 7.1 Positivas

1. **Moat defensável.** Fiduciário Digital de Dossiês é categoria nova; não há competidor direto. Registrável como software (INPI) + trade secret (LPI) + identidade de marca (Classe 42 — orquestração documental).
2. **BSUID-proof.** Quando Meta comoditizar masking em jun/2026, MC não depende disso para valor — valor está na custódia ternária + Router-Ethics, não no transporte.
3. **OAB-compliant desde design.** Firewall atividade-meio × fim materializado em três estados separados, não em rodapé de ToS.
4. **Zilda-STF aprovado.** UX invisível (3 estados são transparentes à cidadã); auditoria exibe documentação completa.
5. **Captação indevida afastada (Opção C).** Âncora: o dossiê é do cidadão e portável à livre escolha + MC sem comissão + MC sem direcionamento (parceira só a pedido) + exclusividade é arranjo B2B, não restrição ao cidadão = arquitetura anti-captação em código.
6. **Soberania digital do hipervulnerável.** Cidadão é titular do dossiê em 2 dos 3 estados — inversão cósmica em código.
7. **Portabilidade.** Cidadão pode levar seu dossiê S2 para qualquer advogado do Brasil, não só ecossistema MC. Reduz lock-in percebido (que é ético) e aumenta lock-in efetivo (que é técnico — dossiê é tão bom que o cidadão fica).

### 7.2 Negativas / Riscos

1. **Complexidade operacional.** Três estados com TTLs distintos exigem pipeline robusto. Mitigação: Igor implementa em NestJS com máquina de estados explícita; testes automatizados cobrem transições.
2. **Custo de certificação ICP-Brasil.** R$ 300-700/ano + infraestrutura HSM. Mitigação: custo baixo relativo a valor entregue; receita do MC cobre em 1º mês.
3. **Risco ANPD interpretar "operador fiduciário" como figura atípica.** Figura não é expressamente prevista na LGPD. Mitigação: (a) contratos bilaterais explicitando papéis; (b) consulta de tomada de subsídios à ANPD em 2027 quando a janela for adequada; (c) parecer técnico de especialista LGPD (Opice Blum, Baptista Luz ou Patrícia Peck) em 2027.
4. **Risco operacional de 7 dias entre S2 entregue e apagado.** Janela onde ataque cibernético poderia extrair dossiês consolidados antes do apagamento. Mitigação: cifração em repouso + audit trail + monitoramento + opcionalmente reduzir para 3 dias.
5. **Risco de cidadão perder dossiê S2.** Idoso pode extraviar PDF entregue. Mitigação: cópia opaca cifrada (sealed envelope) fica 10 anos no MC, acessível mediante re-autenticação do cidadão. Não viola descarte porque é conteúdo cifrado que só o cidadão abre.

### 7.3 Neutras

1. **Requer alinhamento contratual com a advogada parceira.** O contrato B2B (Dra. Juliana Melo · exclusividade até dez/2026; demais parceiras na reabertura do marketplace em dez/2026) precisa reconhecer a arquitetura Três Estados e aceitar o TTA como instrumento formal.
2. **Requer treinamento dos Anjos.** Beto e futuros Anjos precisam entender os três estados para comunicar à cidadã. Micro-curso de 30 minutos resolve.

---

## 8. Decisão

**Adotar a arquitetura de Três Estados de Custódia do Dossiê Vivo como princípio fundacional não-negociável do ecossistema Meu Cumpadre.**

Essa decisão:
- **Precede** qualquer escolha de vendor CPaaS ou BSP WABA
- **Orienta** o redesenho do backend NestJS que Igor executará
- **Redefine** o MC como "Fiduciário Digital de Dossiês Previdenciários", não como "Broker de Comunicação Mediada"
- **Deve ser reconhecida** em todo artefato contratual futuro (B2B com escritórios, B2B2C com cidadãos, B2G eventual, B2B com empresas)
- **Alimenta** o ADR-011 (Estratégia de Compliance OAB Fase Crisálida) e a arquitetura MCP Cross-Vertical (documento companion)

### 8.1 Próximos passos imediatos (72h)

1. Alessandro valida este ADR-009
2. Claude rascunha versão técnica para Igor (spec de máquina de estados + schema PostgreSQL/MySQL)
3. Claude rascunha versão contratual para anexar ao contrato MC × advogada parceira (Dra. Juliana Melo · exclusividade vigente)
4. Alessandro apresenta ADR-009 em reunião com Dra. Juliana Melo para sanity check jurídico interno

### 8.2 Próximos passos 30 dias

1. Igor implementa máquina de estados S1 → S2 → S3 em NestJS
2. MC obtém certificado e-CNPJ A3 + integração com timestamping RFC 3161
3. Piloto com 3-5 casos reais (incluindo caso Hib001 se couber cronograma)
4. Consulta informal à advogada parceira (Dra. Juliana Melo) sobre ADR-009 (sanity check OAB interno)

### 8.3 Próximos passos até Jan/2027

1. Validação completa com Dra. Juliana Melo (Fase Crisálida → Fase Piloto)
2. Padronização e uniformização de procedimentos
3. Reabertura do Marketplace Ético (dez/2026) com parceiras credenciadas, preservada a livre escolha do cidadão
4. Armadura de blindagem produto + compliance (ver ADR-011)
5. Consulta formal ANPD em tomada de subsídios quando oportuno

---

## 9. Registro de Confidencialidade e IP

Este documento constitui **TRADE SECRET** do Meu Cumpadre — Orquestração Documental e Tecnologia Ltda., protegido pela Lei 9.279/1996 arts. 195 XI e XII.

Acesso restrito a:
- Alessandro de Souza Neves (Founder/CEO)
- Dra. Juliana Melo (parceira contratual B2B)
- Igor (desenvolvedor backend) — sob NDA
- Carlos (UX/Tech) — sob NDA
- Claude (co-fundador intelectual) — agente de IA sob arquitetura Zero Data Retention (Anthropic Business Zero)
- Auditoria externa (LGPD/OAB) — quando ativada, sob NDA

**Hash de versão:** a gerar no snapshot final via RFC 3161 ICP-Brasil + registro em cartório eletrônico + cópia no Obsidian Vault MC.

**Registro BN:** agendado para registro autoral deste ADR e dos documentos companion no segundo semestre de 2026 como parte da Armadura Jan/2027.

---

**FIM DO ADR-009 v1.0**

**Próxima revisão programada:** pós-piloto com Dra. Juliana Melo (jun/2026).
---

## Documentos relacionados
- [[_MC-MANIFESTO-NovaOrdem-v1.0-2026-0427 Identidade Posicionamento e Valuation MC]]
- [[MC-INSTRUCOES-PROJETO-v6_0_2-2026-0509]]
- [[MC-PROCESSO-Jornada_E0E7_Mestre-v1_3_1-2026-0509]]
- [[_MC-RouterEthics_11_v1_1-2026-0505-CLevel]]
- [[MC-ADR-007-CampoPrecificacao-v3_8-ADDENDUM-2026-0507]]
- [[MC-ADR-009a-Custodia_Credenciais_GovBr-v2_0-2026-0425]]
- [[MC-ADR-009b-TresEstados-Custodia-Dossie-v1_0-2026-0417]]
- [[MC-ADR-010-E3-Intelligence-Layer-v1_0-2026-0428]]
- [[MC-ADR-011-Arquitetura3Cerebros-v1_0-2026-0509]]
- [[MC-ADR-013-ConvencoesOperacionais-IVCAD-MC-v1_0-2026-0507]]
- [[MC-PARECER-CONSOLIDADO-v3_4-2026-0427]]
- [[MC-PAUTA-Juliana-19Mai-v2_0-2026-0509]]
- [[MC-GOVBR-ArvoreDecisao-APIHumana-v1_1-2026-0509]]
- [[MC-ESTUDO-Arquitetura-Custo-Sistemico-v1_0-2026-0427]]