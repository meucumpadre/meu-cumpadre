---
tipo: ADR
numero: 008
titulo: Decisões de Stack de Ferramentas MC — Consolidação abril/2026
status: aprovado
produzido-por: Claude (co-founder intelectual)
decidido-por: Alessandro Neves (CEO)
data-decisao: 2026-04-15
tags: [adr, stack, ferramentas, decisao-arquitetural, hubspot, zapier, n8n, make, clickup, bitwarden]
superseded-em-parte-por: MC-ADR-014 (10/05/2026 — ZapSign substitui Autentique)
---

# MC-ADR-008: Decisões de Stack de Ferramentas — Consolidação abril/2026

## Contexto

Entre 08/04/2026 e 15/04/2026, Alessandro conduziu uma revisão crítica do stack de ferramentas do Meu Cumpadre, acionando o perfil "consultor brutalmente honesto" do Claude para stress-test de todas as ferramentas contratadas, consideradas e sugeridas. Esta ADR consolida as decisões tomadas, as descartadas e a justificativa estratégica de cada uma.

## Ferramentas já contratadas (estado atual — 15/04/2026)

| # | Ferramenta | Plano | Observações |
|---|-----------|-------|-------------|
| 1 | ClickUp | Business Plus | Instância @empresa (MC) |
| 2 | ClickUp | Business Plus | Instância @BRAVY (workspace consultoria) |
| 3 | N8N | Self-hosted (via Coolify) | Rodando no servidor Hostinger |
| 4 | Lightforms | Essencial | Formulários online |
| 5 | Evolution API | — | Automação WhatsApp |
| 6 | Google Workspace | Business Standard | Email, Drive, Docs, Calendar |
| 7 | ~~Autentique~~ → **ZapSign** | — | Assinatura eletrônica avançada (MP 2.200-2/2001 + Lei 14.063/2020), WhatsApp nativo, ISO 27001, REST/JSON API. Documento final certificado A1 ICP-Brasil CertiSign. Substitui Autentique (ADR-014, 10/05/2026). |
| 8 | Asaas | — | Gateway PIX + cobrança |

## Decisão 1 — HubSpot CRM: **DESCARTADO**

**Contexto:** Claude inicialmente sugeriu HubSpot Free como CRM adicional, com base em análise genérica da jornada E0-E7. Alessandro questionou: "Qual a lógica de usar ClickUp x HubSpot?"

**Análise:**
- ClickUp já cobre gestão de casos com campos customizados
- MC tem escala de ~500 casos iniciais (rural) — HubSpot desnecessário
- Adicionar HubSpot = dados duplicados, treinamento do Beto em nova interface, integrações frágeis
- HubSpot faz sentido para funil B2B de vendas — MC não tem esse funil

**Decisão:** NÃO adicionar HubSpot. ClickUp cobre a necessidade de CRM operacional com plugin MCP (51 ferramentas conectadas ao Claude).

**Quando reconsiderar:** Se o ClickUp estourar de informação e precisar separar gestão de projeto de gestão de relacionamento (sinal: >1000 casos ativos e confusão operacional).

---

## Decisão 2 — Zapier: **DESCARTADO**

**Contexto:** Claude inicialmente sugeriu Zapier como ponte entre ferramentas. Alessandro questionou: "Zapier é relevante ou não?"

**Análise:**
- Zapier resolve o mesmo problema que N8N (conectar ferramentas que não se falam)
- MC já tem N8N self-hosted rodando
- Zapier cobra por tasks (100/mês no free, escala rápido)
- Zapier é cloud nos EUA → risco LGPD para dados de cidadãos vulneráveis
- N8N self-hosted = soberania de dados + execuções ilimitadas + custo zero

**Decisão:** N8N é o motor oficial de automação do MC. Zapier descartado.

**Implicação:** Todas as automações (ClickUp ↔ WhatsApp, Asaas webhooks, ZapSign callbacks, disparos agendados) passam pelo N8N.

---

## Decisão 3 — DocuSign: **DESCARTADO**

**Contexto:** Claude sugeriu DocuSign como alternativa enterprise. Decisão refinada em ADR-014 (10/05/2026): plataforma BR de assinatura eletrônica é ZapSign (e não mais Autentique).

**Análise:**
- ZapSign é brasileira → dados no Brasil + LGPD nativo + suporte português + ISO 27001
- Validade jurídica: MP 2.200-2/2001 art. 10 §2º + Lei 14.063/2020 nível avançado; documento final certificado A1 ICP-Brasil CertiSign
- DocuSign é enterprise multinacional com servidores fora do Brasil — incompatível com perfil de dados sensíveis MC
- ZapSign tem WhatsApp nativo (canal primário MC) e API REST/JSON (compatível NestJS)

**Decisão:** Manter ZapSign (ADR-014). DocuSign descartado por servidores fora do Brasil + plataforma BR substitui.

---

## Decisão 4 — Make (ex-Integromat): **DESCARTADO para produção**

**Contexto:** Contrato da Bravy mencionou "n8n ou Make + Make" como opção. Avaliação de qual adotar.

**Análise:**
- Make cobra por operações (escala rápido com volume WhatsApp)
- Make é cloud nos EUA → risco LGPD
- N8N Community Edition self-hosted é gratuito com execuções ilimitadas
- N8N tem nós nativos para WhatsApp (Evolution API), ClickUp, Google Workspace, Asaas

**Decisão:** N8N é o motor único. Make descartado para produção MC.

**Observação:** Se a Bravy configurar automações durante a implementação do ClickUp, elas devem ser feitas em N8N (não Make), para garantir continuidade quando o contrato deles terminar.

---

## Decisão 5 — Notion: **DESCARTADO**

**Contexto:** Claude sugeriu Notion como base de conhecimento.

**Análise:**
- Obsidian Vault MC já é a base de conhecimento do Founder
- Project Knowledge do Claude.ai já cobre contexto compartilhado
- Adicionar Notion = mais uma ferramenta, mais fragmentação

**Decisão:** Obsidian + Project Knowledge + Google Drive cobrem a necessidade. Notion descartado.

---

## Decisão 6 — Slack: **OPCIONAL**

**Contexto:** Claude sugeriu Slack para comunicação interna estruturada.

**Análise:**
- Equipe atual de 5 pessoas
- WhatsApp já funciona para comunicação interna
- Slack adicionaria outra interface para pouco ganho

**Decisão:** OPCIONAL. Não priorizado. Reavaliar se equipe crescer para 8+ pessoas ou se WhatsApp interno virar gargalo.

---

## Decisão 7 — Gerenciador de senhas: **BITWARDEN + GOOGLE SENHAS**

**Contexto:** Alessandro perguntou qual ferramenta usar para organizar credenciais MC.

**Análise:**
- Bitwarden: gratuito, open-source, criptografia zero-knowledge, self-hosted opcional
- Google Senhas: integrado no Chrome, básico
- Separação de contextos (pessoal vs. profissional) reduz risco

**Decisão:**
- **Bitwarden** (plano gratuito) para credenciais Meu Cumpadre
- **Google Senhas** para uso pessoal de Alessandro
- **Regra inviolável:** nenhuma senha, API key ou credencial circula por WhatsApp, chat, email ou documento. Tudo no Bitwarden.

**Padrão de organização Bitwarden:**
- Campo "URL": endpoint do serviço
- Campo "Usuário": login
- Campo "Senha": senha
- Campo "TOTP": autenticador (se houver 2FA)
- Campos personalizados ocultos para API keys:
  - `API_KEY`
  - `API_SECRET`
  - `ENDPOINT`
  - `CONNECTION_STRING`

**Futuramente:** upgrade para Organizations (US$1/user/mês) quando precisar compartilhar senhas com Igor/Beto/Juliana via pastas com permissões segregadas.

---

## Decisão 8 — IA multi-modelo: **GEMINI FLASH PRIMÁRIO + CLAUDE SONNET ÉTICO + LLAMA SCOUT SENSÍVEL**

**Contexto:** Análise de custo de IA trazida pelo Igor na reunião 04/04.

**Análise:**
- Gemini 2.5 Flash: US$0,15/1M input, US$0,60/1M output + Context Caching (90% desconto) + Batch API (50%)
- Claude Sonnet via MCP: mais caro, mas essencial para orquestração ética de casos Router-Ethics ≥39
- Llama 4 Scout self-hosted GCP: obrigatório para dados sensíveis (CPF, NB, CID, CNIS) por LGPD

**Decisão:**
- **70% dos fluxos** → Gemini 2.5 Flash (triage, classificação, respostas genéricas)
- **25% dos fluxos** → Llama 4 Scout self-hosted (dados sensíveis)
- **5% dos fluxos** → Claude Sonnet via MCP (decisões éticas complexas, XAI, casos Score ≥39)

**Custo estimado (1.000 interações/dia com Gemini + Caching + Batch):** R$5-15/mês.

---

## Stack consolidado MC (pós-ADR-008)

### Ferramentas mantidas
1. **ClickUp** (CRM operacional + gestão de equipe) — instância @empresa
2. **Google Workspace** (Docs, Drive, Gmail, Calendar)
3. **N8N** (motor único de automação, self-hosted)
4. **Evolution API** (WhatsApp automation)
5. **ZapSign** (assinatura eletrônica brasileira — ADR-014, substitui Autentique)
6. **Asaas** (PIX + cobrança)
7. **Bitwarden** (cofre de credenciais MC — a adotar)
8. **Obsidian Vault** (base de conhecimento Founder — já ativo)
9. **Claude.ai Max** (cérebro estratégico)
10. **Claude Code** (motor de execução local)

### Ferramentas em avaliação
- **Lightforms** (Essencial): formulários — avaliar se há uso real em produção; se zero, congelar
- **ClickUp instância @BRAVY**: workspace da consultoria — questionar necessidade

### Ferramentas descartadas definitivamente (abril/2026)
- HubSpot CRM
- Zapier
- DocuSign (servidores fora do BR; plataforma BR substitui)
- Make
- Notion
- **Autentique** (vedada via ADR-014, 10/05/2026 — substituída por ZapSign: WhatsApp nativo, REST/JSON, ISO 27001)

### Tabela de vedações ADR-014 (assinatura eletrônica)

| Vedado | Razão da vedação | Substituto MC |
|---|---|---|
| Autentique | Canal primário e-mail incompatível com público WhatsApp-only; API GraphQL; adoção inferior no mercado jurídico previdenciarista | ZapSign (ADR-014) |
| DocuSign | Servidores fora do Brasil + substituído por plataforma BR | ZapSign (ADR-014) |

### Ferramentas opcionais
- Slack (reavaliar se equipe crescer)

---

## Princípios que guiaram as decisões

1. **Menos é mais** — cada ferramenta adicional aumenta fricção operacional
2. **Soberania de dados** — preferência por self-hosted + brasileiro quando dados são sensíveis (LGPD)
3. **Custo × benefício concreto** — não adicionar ferramenta sem casos de uso imediatos
4. **Motor único por função** — N8N para automação, ClickUp para gestão, Claude para inteligência
5. **Regra anti-acumulação** — toda nova ferramenta precisa justificar substituição ou ampliação funcional

---

## Próximos passos

- [ ] Instalar Bitwarden e migrar credenciais MC
- [ ] Rotacionar senhas compartilhadas por WhatsApp (Redis, Coolify)
- [ ] Avaliar uso real do Lightforms — congelar se zero em 30 dias
- [ ] Questionar Bravy sobre necessidade da instância @BRAVY (guest access alternativa)
- [ ] Documentar N8N como padrão de automação no CLAUDE.md
- [ ] Subir MC-CLAUDE.md e MC-PLAYBOOK-Custodia-Operacional v2.0 ao Project Knowledge

---

**Documento produzido por:** Claude (co-founder intelectual)
**Decidido por:** Alessandro Neves (CEO)
**Confidencialidade:** PROPRIETÁRIO — Meu Cumpadre Ltda.
