---
tipo: infraestrutura
subtipo: documentacao-acessos
produzido-por: Claude (co-founder intelectual)
data-criacao: 2026-04-15
sensibilidade: CONFIDENCIAL (credenciais não incluídas neste arquivo — ver Bitwarden)
tags: [infraestrutura, servidor, hostinger, vps, coolify, n8n, redis, evolution-api, acessos]
---

# MC-INFRA: Servidor Hostinger e Acessos — Estado 15/04/2026

## ⚠️ Aviso de Segurança

**Este arquivo documenta a TOPOLOGIA da infraestrutura, não credenciais.**

Credenciais (senhas, API keys, tokens, chaves SSH) devem ficar EXCLUSIVAMENTE no Bitwarden do Alessandro. Nenhuma senha deve ser commitada neste arquivo, versionada em repositório ou compartilhada por WhatsApp.

Se alguma senha foi compartilhada por chat/WhatsApp até hoje (15/04/2026), ela precisa ser **rotacionada** como parte da higiene de segurança pós-documentação.

---

## 1. Identificação do servidor

| Item | Valor |
|------|-------|
| Provedor | Hostinger |
| IP público | `31.97.167.252` |
| Proprietário (conta Hostinger) | Alessandro de Souza Neves |
| Email administrativo | `asnccb@gmail.com` |
| Painel do provedor | `hpanel.hostinger.com` |
| Status da conta | Ativa e em nome do CEO (confirmado 15/04/2026) |

**Observação:** o domínio atualmente apontando para este servidor é `aposentadorianamao.com.br` (domínio legado). Migração para `meucumpadre.com.br` está pendente.

---

## 2. Serviços rodando no servidor

O servidor opera com **Coolify** como orquestrador de containers Docker. Os seguintes projetos estão ativos (verificado 15/04/2026 via screenshot do painel Coolify):

### 2.1 Coolify (orquestrador)
- **URL painel:** `http://31.97.167.252:8000`
- **Versão:** v4.0.0-beta.462
- **Equipe:** "Equipe Raiz"
- **Email do admin no Coolify:** `asnccd@gmail.com` (atenção — gmail com "d", não "b")
- **Notificações:** 9+ pendentes no painel
- **Status:** Operacional

### 2.2 Projeto "evolução" (Evolution API)
- **Finalidade:** Integração com WhatsApp
- **Endpoint oficial:** [a documentar após Iuri normalizar]
- **Uso atual:** Via `api.zappfy.io` (intermediário Zappfy)
- **Status:** Ativo — usado pelo workflow N8N da Bravy

### 2.3 Projeto "n8n"
- **URL atual:** `https://n8n.aposentadorianamao.com.br/`
- **Workflow ativo:** "Agente MEU CUMPADRE" (bot SDR — ver MC-ANALISE-Workflow_N8N_Bravy-v1_0-2026-0415)
- **Login admin:** gerenciado pela Bravy (senha a resetar via Coolify quando necessário)
- **Migração pendente:** domínio para `n8n.meucumpadre.com.br`
- **Status:** Operacional

### 2.4 Projeto "redis"
- **Endpoint:** `redis://default:[SENHA]@31.97.167.252:6379/0`
- **Uso:** Memória de conversa do bot WhatsApp (push/pop por `remoteJid`)
- **Autenticação:** via senha no connection string (ROTACIONAR — foi compartilhada por chat)
- **Status:** Operacional

---

## 3. Fluxo de dados entre serviços

```
WhatsApp (cidadão)
    │
    ▼
Zappfy (api.zappfy.io) ──── usa WhatsApp Cloud API
    │
    ▼
Evolution API (container Coolify)
    │
    ▼
N8N Webhook (container Coolify)
    │
    ├──▶ Redis (buffer mensagens 15s)
    ├──▶ Supabase (CRM leads — externo)
    └──▶ OpenAI (Whisper + GPT-4o Assistant)
         │
         ▼
    Response → Evolution API → WhatsApp (cidadão)
```

---

## 4. Acessos documentados (estado 15/04/2026)

### 4.1 Alessandro tem

| Acesso | Via | Status |
|--------|-----|--------|
| Painel Hostinger (hpanel) | Email `asnccb@gmail.com` + senha | ✓ Ativo |
| Painel Coolify | Email `asnccd@gmail.com` + senha | ✓ Ativo (recuperado 15/04 via Tiago/Claude Code) |
| SSH direto ao servidor | Chave privada / senha root | ✗ PENDENTE — solicitar à Bravy |
| N8N admin | Login/senha admin | ⚠️ Esquecido — recuperação falha (SMTP não configurado). Reset via Coolify pendente |
| Redis | Connection string | ✓ Tem (ROTACIONAR — foi compartilhada por chat) |
| Zappfy API | API key | ⚠️ Hardcoded no workflow N8N — documentar e migrar para Bitwarden |

### 4.2 Bravy/Iuri tem

| Acesso | Presumido |
|--------|-----------|
| SSH servidor | Sim — configuraram tudo |
| Coolify admin | Sim — mas Alessandro agora também tem |
| N8N admin | Sim — conhecem senha original |
| Domínio `aposentadorianamao.com.br` | Sim — gerenciam DNS |

**Observação crítica:** enquanto Bravy mantém acesso SSH e não transferiu formalmente, a infraestrutura não é 100% soberana na mão de Alessandro.

---

## 5. Plano de ação — Soberania operacional

### 5.1 Solicitações formais à Bravy (próximo contato com Tiago/Iuri)

1. **Acesso SSH** (chave privada ou root password) para Alessandro
2. **Senha admin original do N8N** (para Alessandro documentar no Bitwarden)
3. **Transferência de DNS** do domínio `aposentadorianamao.com.br` OU migração para novo domínio `meucumpadre.com.br`
4. **Documentação técnica** de tudo que foi configurado (Docker Compose files, variáveis de ambiente, etc.)

### 5.2 Higiene de segurança (pós-recepção de acessos)

1. **Criar novo usuário SSH** pessoal para Alessandro (não usar root)
2. **Adicionar chave pública** de Alessandro ao servidor
3. **Rotacionar todas as senhas** compartilhadas por WhatsApp/chat:
   - Redis (urgente)
   - Coolify admin
   - N8N admin
   - Zappfy API (se possível)
4. **Mover credenciais** para Bitwarden com organização adequada
5. **Configurar SMTP** no N8N e Coolify para recuperação de senha futura
6. **Ativar 2FA** onde disponível (Hostinger, Coolify, N8N)
7. **Fazer backup** do servidor (snapshot Hostinger + backup Docker volumes)

### 5.3 Documentação operacional (a manter atualizada)

Para cada serviço no servidor, documentar no Bitwarden:
- URL de acesso
- Login admin
- Senha
- TOTP (se houver)
- API keys (como campos ocultos)
- Quem tem acesso (Alessandro / Igor / Beto / Bravy)
- Data de última rotação de senha
- Backup: onde está / última data / como restaurar

---

## 6. Custos recorrentes conhecidos

| Item | Custo mensal | Pagamento |
|------|--------------|-----------|
| VPS Hostinger | [verificar plano] | Cartão Alessandro |
| Domínio `aposentadorianamao.com.br` | [verificar] | Bravy? Alessandro? |
| Domínio `meucumpadre.com.br` | [verificar] | Alessandro |
| Zappfy (Evolution API intermediário) | [verificar plano] | [quem?] |
| OpenAI API (Whisper + GPT-4o) | variável | [quem? Bravy?] |
| Supabase (CRM leads do bot) | [verificar plano] | [quem?] |

**Ação:** Alessandro deve auditar todos os custos recorrentes e garantir que estejam todos em sua conta/cartão. Nenhum serviço crítico do MC pode estar sendo pago por terceiros (risco de interrupção).

---

## 7. Infraestrutura ideal (estado alvo)

```
Servidor Hostinger 31.97.167.252
├── Proprietário: Alessandro Neves (CNPJ Meu Cumpadre Ltda)
├── SSH: chave pública Alessandro + Igor (quando Fase 2)
├── Coolify: admin Alessandro + operator Iuri/Igor
├── Domínios:
│   ├── meucumpadre.com.br (principal)
│   │   ├── app.meucumpadre.com.br → frontend Igor (Fase 2)
│   │   ├── api.meucumpadre.com.br → backend NestJS (Fase 2)
│   │   ├── n8n.meucumpadre.com.br → N8N
│   │   └── status.meucumpadre.com.br → monitoramento
│   └── [deprecar] aposentadorianamao.com.br
├── Serviços rodando:
│   ├── N8N (automação)
│   ├── Evolution API (WhatsApp)
│   ├── Redis (cache + filas)
│   ├── MySQL (Fase 2 — backend Igor)
│   ├── PostgreSQL (se necessário — avaliar)
│   └── Backend NestJS (Fase 2 — Igor)
└── Backups:
    ├── Snapshot diário Hostinger
    └── Backup volumes Docker semanal (S3 ou GCP)
```

---

## 8. Riscos mapeados

| Risco | Probabilidade | Impacto | Mitigação |
|-------|---------------|---------|-----------|
| Bravy não transferir SSH | Média | Alto | Solicitação formal + escalação contratual se necessário |
| Senha Redis vazada (foi por chat) | Alta | Alto | Rotacionar URGENTE |
| Bravy não renovar pagamento de serviços críticos | Média | Alto | Auditar e migrar tudo para cartão Alessandro |
| Domínio `aposentadorianamao` ser desativado pela Bravy | Média | Médio | Migrar para `meucumpadre.com.br` |
| Servidor cair sem backup | Baixa | Crítico | Configurar backup automatizado |
| 2FA não ativado em serviços críticos | Alta | Alto | Ativar onde disponível |

---

## 9. Próximos passos imediatos

- [ ] Instalar Bitwarden (plano gratuito)
- [ ] Criar item "MC — Servidor VPS Hostinger" com credenciais Hostinger
- [ ] Criar item "MC — Coolify Admin" com credenciais painel Coolify
- [ ] Criar item "MC — Redis Produção" com connection string (após rotacionar)
- [ ] Criar item "MC — N8N Admin" após reset de senha
- [ ] Criar item "MC — Zappfy API" com chave da API
- [ ] Solicitar SSH à Bravy (mensagem pronta em MC-ANALISE-Reuniao_Tiago_Bravy)
- [ ] Rotacionar senha Redis (urgente — foi compartilhada em chat)
- [ ] Configurar SMTP no Coolify para permitir recuperação de senha futura

---

**Documento produzido por:** Claude (co-founder intelectual)
**Validado por:** [pendente Alessandro]
**Confidencialidade:** CONFIDENCIAL — PROPRIETÁRIO Meu Cumpadre Ltda.
