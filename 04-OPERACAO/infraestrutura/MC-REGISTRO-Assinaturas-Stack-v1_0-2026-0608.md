---
artefato: MC-REGISTRO-Assinaturas-Stack
versao: v1.0
data: 2026-06-08
governado_por: MC-CONVENCAO-RegistroDeAssinaturas (v1.0 · 03-GOVERNANCA/convencoes/) — SELADA · gate leve · Founder ✓ 2026-06-08
formato: LLM-legível (frontmatter + tabela) · fonte de verdade de assinaturas/planos
regra: sem credenciais aqui (→ Bitwarden Org MC · ADR-009a) · sem PII de cliente
custos: valores marcados [A PREENCHER] quando não confirmados (Proof-First — não fabricar)
---

# Registro de Assinaturas — Stack MC

> Ledger vivo de tudo que o MC contrata de recorrente. Atualizar **antes/no ato** de cada contratação ou cancelamento (Convenção — Registro de Assinaturas).

## ATIVAS

### GitHub  ⭐ (decisão de hoje — gravada com lastro)
| Campo | Valor |
|---|---|
| Provedor | GitHub |
| Conta/owner | **org `meucumpadre`** (migrado da conta pessoal `asnccb` em 2026-06-08) |
| Plano atual | **Free (organização)** · **US$ 0** |
| Escopo | repo `meu-cumpadre` (vault de-identificado + código). **PII NÃO vive aqui** (ADR-009/011 · stack soberana) |
| Motivo Free agora | tudo que automação precisa (API, webhooks, colaboradores ilimitados, repos privados) já vem no Free |
| **Gatilho de upgrade → Team (US$4/usuário/mês)** | quando **n8n/Pipefy/agentes tiverem ESCRITA na `main`** OU exigir **branch protection imposta / required reviewers / CODEOWNERS / >2.000 min CI**. Upgrade Free→Team = 1 clique, **mesmo URL, zero re-religação** |
| Rejeitado | **Enterprise (US$21/usuário)** — SSO/EMU/SCIM = overkill Crisálida (fere Viabilidade sem servir D/C) |
| Decisão | Founder (TALÃO) · 2026-06-08 · análise Code TALÃO (Falcão) |
| ⚠️ **Exposição interina (Proof-First)** | `main` é **privada no Free org = SEM proteção de plataforma**. Única trava hoje = `.claude/settings.json`, que é **client-side**: bloqueia o Code, mas **NÃO** prende n8n/Pipefy/agente server-side nem token vazado. Risco real até subir pra **Team**. |
| Nuance custo (C3.1) | a migração pra **org** tirou da mesa o **Pro flat US$4** (que dá proteção em repo privado individual). No org, 1º tier com proteção = **Team US$4/usuário/mês** (+ branches protegidas, CODEOWNERS, required reviewers, 3.000 min CI). |

### Demais assinaturas conhecidas da stack (CLAUDE.md) — preencher custo/ciclo
| Serviço | Plano/escopo | Custo | Status | Obs |
|---|---|---|---|---|
| **Anthropic / Claude** | Code + MCP (ético) + conector GitHub | [A PREENCHER] | ativo | esta instância |
| **ZapSign** | assinatura eletrônica A1 ICP-Brasil | [A PREENCHER] | ativo | ADR-014 (plataforma vigente) |
| **Hostinger** | hospedagem | [A PREENCHER] | ativo | infra |
| **GCP (Brasil)** | Firestore · BigQuery · Cloud KMS · Vision OCR · **motor self-host → ver ADR-012** (GAIA-4B/Gemma 3; supersede "Llama 4 Scout" do ADR-008) | [A PREENCHER] | ativo | stack soberana p/ PII |
| **WhatsApp Cloud API** | canal de atendimento | [A PREENCHER] | ativo | — |
| **N8N 1.88** | self-hosted (orquestração) | [A PREENCHER] | ativo | self-host |
| **Bitwarden Org MC** | custódia de senhas (AES-256, 2FA) | [A PREENCHER] | ativo | ADR-009a — credenciais |
| **ClickUp** | atendimento/ops | [A PREENCHER] | ativo | senha gov.br NUNCA aqui |
| **Gemini 2.5 Flash** | LLM triagem não-sensível (~70%) | [A PREENCHER] | ativo | cross-referenciar (fabrica dados) |
| **Pipefy** | gestão híbrida de software (Fase 2) | [A PREENCHER] | a contratar | escrita no repo → reavaliar Team |

## DESCARTADAS (registro de não-uso)
→ **Fonte única: ADR-008** (ferramentas descartadas · selado 15/04) + **ADR-014** (plataforma de assinatura eletrônica vigente). Este Registro **aponta**, não repete — a lista vive nos ADRs (fonte única · R2 contra ela mesma).

---
*Atualizar este ledger a cada nova assinatura/cancelamento (Convenção — Registro de Assinaturas). Custos [A PREENCHER] são lacunas honestas — preencher quando confirmado, não chutar.*
