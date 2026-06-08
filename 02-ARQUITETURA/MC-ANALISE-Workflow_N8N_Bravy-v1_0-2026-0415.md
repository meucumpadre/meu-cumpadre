---
tipo: analise-tecnica
contexto: workflow-n8n
produzido-por: Claude (co-founder intelectual)
data-analise: 2026-04-15
fornecedor-origem: Bravy (ASV Digital Ltda)
data-entrega-original: novembro/2025
arquivo-origem: N8N___Agente_MEU_CUMPADRE.json
status: esqueleto-aproveitavel-cerebro-descartado
tags: [n8n, workflow, bot, bravy, whatsapp, openai, analise-tecnica]
---

# MC-ANALISE: Workflow N8N "Agente MEU CUMPADRE" entregue pela Bravy

**Data de análise:** 15/04/2026
**Origem:** Arquivo JSON entregue pela Bravy (novembro/2025)
**Classificação:** Bot SDR genérico adaptado com marca "Meu Cumpadre"
**Veredito:** Infraestrutura aproveitável. Lógica de negócio incompatível com o produto MC real.

---

## 1. O que é esse workflow

Um **bot SDR (Sales Development Representative)** genérico que recebe mensagens WhatsApp, processa com IA (OpenAI) e responde — focado em **agendamento de reuniões**. NÃO é o produto Meu Cumpadre.

A Bravy aplicou a metodologia padrão deles (bot de vendas para agendamento) ao negócio do MC, que é orquestração documental previdenciária — domínios completamente distintos.

---

## 2. Stack técnico do workflow

### 2.1 Integrações ativas

| Serviço | Finalidade | Status |
|---------|------------|--------|
| **Evolution API via Zappfy** | Conexão WhatsApp (`api.zappfy.io`) | Ativo — Instance ID e API key hardcoded no nó "Dados" |
| **Supabase** | Tabela `leads` como mini-CRM (número, timeout de atendimento humano) | Ativo |
| **Redis** | Memória de conversa por número (push/pop por `remoteJid`) | Ativo |
| **OpenAI Whisper** | Transcrição de áudio | Ativo |
| **OpenAI GPT-4o-mini** | Análise de imagem | Ativo |
| **OpenAI GPT-4o Assistant** | "MEU CUMPADRE" — SDR principal (ID: `asst_OlQEeM11HBMP8lMz00vZA1LE`) | Ativo |
| **ElevenLabs** | TTS para respostas em áudio | PLACEHOLDER — não configurado |
| **Google Calendar** | Agendamento/reagendamento/cancelamento via sub-workflow `pEmfDrdbeB16KG0V` | Ativo |

### 2.2 Fluxo operacional

```
WhatsApp message → Webhook N8N → Identificação tipo (texto/áudio/imagem)
                                         │
                                         ├── Áudio → Whisper → texto
                                         ├── Imagem → GPT-4o-mini → descrição
                                         └── Texto → direto
                                         │
                                         ▼
                                  Redis (buffer 15s)
                                         │
                                         ▼
                            OpenAI Assistant (SDR.IA)
                                         │
                                         ▼
                            6 Tools disponíveis:
                            - verificar_disponibilidade
                            - agendar_reuniao
                            - reagendar_reuniao
                            - cancelar_reuniao
                            - buscar_agendamentos
                            - [1 tool adicional]
                                         │
                                         ▼
                            Resposta → Delay humanizado → Evolution API → WhatsApp
```

---

## 3. Cinco problemas críticos identificados

### 3.1 O "cérebro" é OpenAI Assistant, não Claude

Todo comportamento, tom de voz, regras éticas, lógica de triagem estão dentro do Assistant `asst_OlQEeM11HBMP8lMz00vZA1LE` na plataforma OpenAI. **Não sabemos o que tem no prompt desse assistant.** É uma caixa-preta externa.

**Problema:** impossível auditar. Impossível aplicar Router-Ethics. Impossível garantir conformidade com Firewall OAB. Impossível verificar se há vazamento de informação sigilosa.

**Solução:** substituir inteiramente por Claude API + Grimório Previdenciário + Router-Ethics 11.0.

### 3.2 ElevenLabs não está configurado

Campos de API key e Voice ID estão com texto placeholder:
- `API key: SUA CHAVE API KEY`
- `Voice ID: ID-DA-VOZ`

**Problema:** o bot responde só em texto. Áudio NÃO funciona. Dona Zilda (68 anos, analfabeta digital) precisa de áudio.

**Solução:** configurar ElevenLabs ou trocar por alternativa (Google TTS, Azure Speech).

### 3.3 API key Zappfy hardcoded no JSON

A chave `E38229A6-9C50-41C5-980E-3316EF26FB05` está direto no JSON do workflow, não em variável de ambiente.

**Problema:** risco de segurança. Se alguém exportar o workflow, a chave vaza.

**Solução:** migrar para variáveis de ambiente no Coolify ou credenciais N8N.

### 3.4 É SDR de agendamento, não orquestração documental

As 6 tools do agente são todas sobre agendar/reagendar/cancelar reunião + verificar disponibilidade. **Zero funcionalidade previdenciária. Zero triagem de benefício. Zero Router-Ethics.**

**Problema:** o MC não é negócio de agendamento. A premissa do bot está errada.

**Solução:** reescrever inteiramente as tools para: `triar_caso`, `coletar_documentos`, `verificar_checklist`, `calcular_router_ethics`, `montar_dossie`, `escalar_humano`, `notificar_status_inss`.

### 3.5 Timeout de "atendimento humano" é primitivo

O sistema de pausa (15 min via Supabase) é workaround básico — se um humano assume o chat, o bot para por 15 minutos e volta automaticamente.

**Problema:** sem handoff estruturado. Se um Anjo Comunitário (Tier 2 Human API) está em diálogo sensível com um cidadão e o bot volta sozinho, pode gerar quebra de confiança.

**Solução:** estado explícito de handoff no banco + rotina de devolução controlada (humano confirma ou continua).

---

## 4. O que aproveitar vs. o que descartar

### 4.1 APROVEITAR (infraestrutura)

- Webhook WhatsApp (entrada de mensagens)
- Conexão Zappfy/Evolution API
- Pipeline multimodal (texto/áudio/imagem)
- Redis como memória de conversa
- Supabase como CRM de leads (adaptar)
- Delay simulado de digitação (toque humanizador)
- Anti-loop e limitador de duplicata
- Estrutura geral de nós N8N

### 4.2 DESCARTAR (lógica de negócio)

- Assistant OpenAI `MEU CUMPADRE` inteiro
- Todas as 6 tools de agendamento
- Sistema de timeout primitivo
- ElevenLabs placeholder (trocar ou configurar)
- Integração Google Calendar (desnecessária para MVP)
- Todo o prompt SDR genérico

---

## 5. Plano de migração (Fase 2 — quando Igor assumir)

### 5.1 Pré-requisitos
- Igor onboarding concluído
- Acesso SSH servidor (solicitar à Bravy)
- Migração domínio N8N para `meucumpadre.com.br`
- Credenciais Claude API configuradas
- Grimório Previdenciário carregado como contexto
- Router-Ethics 11.0 implementado como serviço (NestJS)

### 5.2 Substituições

| Atual (Bravy) | Novo (MC) |
|---------------|-----------|
| OpenAI Assistant (SDR) | Claude Sonnet via API + system prompt MC |
| OpenAI Whisper | Whisper ou Google Speech (avaliar) |
| OpenAI GPT-4o-mini (imagem) | Gemini 2.5 Flash (análise imagem) |
| ElevenLabs placeholder | Configurar ou substituir |
| 6 tools agendamento | 7 tools previdenciárias (listadas acima) |
| Timeout 15min | Handoff estruturado Tier 1-4 |
| Zappfy API key hardcoded | Variáveis ambiente + credenciais N8N |

### 5.3 Novos nós a adicionar

- Validação CPF (via gov.br ou API consulta)
- OCR de documentos (Google Vision)
- Classificador de espécie de benefício (Gemini Flash)
- Calculador Router-Ethics (score R+P+A)
- Roteador de rota A/B/C
- Logger auditável (hash SHA-256 + blockchain-ready)

---

## 6. Estimativa de esforço

| Etapa | Esforço (dev horas) |
|-------|---------------------|
| Remover cérebro OpenAI + tools antigas | 8h |
| Integrar Claude API + system prompt MC | 16h |
| Reescrever 7 tools previdenciárias | 40h |
| Substituir timeout por handoff estruturado | 24h |
| Configurar Whisper + Gemini + TTS | 16h |
| Configurar variáveis de ambiente + secrets | 8h |
| Testes end-to-end | 24h |
| **TOTAL** | **136h (~3-4 semanas Igor full-time)** |

---

## 7. Riscos e considerações

**Risco de quebrar produção:** Atualmente o bot Bravy NÃO está em produção com clientes MC (a operação real é artesanal via WhatsApp manual + Beto). Portanto, reescrever é seguro.

**Risco de vendor lock-in com Bravy:** Eles podem querer manter a integração deles. Mitigação — workflow N8N fica no servidor do MC (que é do Alessandro), portanto controle é nosso.

**Risco regulatório:** Assistant OpenAI processando dados sensíveis (mensagens do cidadão) é risco LGPD. Claude API também é cloud, mas tem data processing agreement (DPA). Dados críticos (CPF, NB, CID) devem ir para Llama 4 Scout self-hosted.

---

## 8. Decisão

**Preservar** o JSON atual como referência histórica.
**Aguardar** Fase 2 com Igor para reescrever.
**Não usar em produção** no formato atual.

---

**Documento produzido por:** Claude (co-founder intelectual)
**Validado por:** [pendente Alessandro]
**Confidencialidade:** PROPRIETÁRIO — Meu Cumpadre Ltda.
