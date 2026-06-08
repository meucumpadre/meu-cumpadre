---
titulo: AP-INVENTARIO-StackInfra v1.0
versao: v1.0
data: 2026-05-20
status: SELADO
executor: Claude Code DELL
mb_origem: MB-AP-002
categoria: Stack tecnológica · Infraestrutura · MCPs · Camadas IA · Gov.br
modo: Sniper · 4 filtros positivos · carimbo de conversão
hash_sha256: a-ser-computado-em-T4
---

# AP-INVENTARIO-StackInfra v1.0

**20 de maio de 2026 · MB-AP-002 · Tarefa 2.5 de 8 · Code DELL executor**

**Categoria:** Stack tecnológica (LLM/Cloud/Apps) · Infraestrutura (servidores/máquinas) · MCPs (8+) · Camadas IA (C1-C4) · Gov.br (matriz + travas + anamnese)

---

## 1 · Sumário Executivo

| Métrica | Valor |
|---|---|
| Arquivos varridos | ~30 (infraestrutura/, mcp/, 04-DADOS/govbr/, N8N references) |
| Ativos lógicos extraídos | 18 |
| **Total classificados como ouro AP** | **15** |
| 🟢 Conversão Zero | 11 |
| 🟡 Conversão Leve | 3 |
| 🟠 Conversão Média | 1 |
| 🔴 Conversão Profunda | 0 |

**Top 3 ouros desta categoria:**

1. **Hostinger Server 31.97.167.252 + Coolify + N8N** — pode hospedar workflows AP em namespace separado, custo marginal mínimo. Carimbo 🟢
2. **Stack LLM completa (GAIA + Sabiá + Bedrock + Groq + LiteLLM + Albertina)** — herdada integralmente, apenas prompts AP-específicos novos. Carimbo 🟢
3. **Matriz 4 Camadas IA C1/C2/C3/C4 + firewall LGPD** — disciplina inviolável, vale ainda mais em AP. Carimbo 🟢

---

## 2 · Catálogo Detalhado

### Ativo S1 — Servidor Hostinger 31.97.167.252 + Coolify

| Campo | Valor |
|---|---|
| **Localização canônica MC** | `02-ARQUITETURA/infra/MC-INFRA-Servidor_Hostinger_Acessos-v1_0-2026-0415.md` |
| **Filtros atendidos** | F2 + F3 + F4 |
| **Carimbo de conversão** | 🟢 ZERO |
| **Valor estratégico AP** | VPS Hostinger com Coolify orquestrando containers: N8N (workflows), PostgreSQL, Whisper (transcrição áudio), serviços auxiliares. **Mesma máquina pode hospedar workflows AP em diretório separado** (`/srv/ap/...`) sem custo adicional. Capacidade ociosa atual permite escalonar AP até ~50 casos/mês paralelos sem upgrade. |
| **Aplicação AP sugerida** | Criar namespace AP no Coolify (project `ap-workflows`). Workflows N8N com prefixo `AP-*`. Custódia de credenciais AP em Bitwarden separado por etiqueta. |
| **Esforço estimado conversão** | 0,5h (criar namespace) |
| **Dependências** | Acesso SSH Hostinger (Bitwarden Org) |

**Síntese:** Conversão zero. Aproveitamento direto de capacidade ociosa.

---

### Ativo S2 — Bitwarden Org MC (cofre único)

| Campo | Valor |
|---|---|
| **Localização canônica MC** | ADR-009a v2.0 + POP Bitwarden Custódia (T2.3 P13) |
| **Filtros atendidos** | F2 + F3 + F4 |
| **Carimbo de conversão** | 🟢 ZERO |
| **Valor estratégico AP** | Cofre único de toda credencial AP. Coleção separada `AP/` para isolamento lógico. Mesma política de retenção VEDADA (CDC + CP + LGPD). |
| **Aplicação AP sugerida** | Criar coleção `AP/` + sub-coleções por cliente: `AP/{cliente-hash}/` com gov.br + outros acessos. |
| **Esforço estimado conversão** | 0,5h |

**Síntese:** Conversão zero.

---

### Ativo S3 — ClickUp Workspace (Space AP)

| Campo | Valor |
|---|---|
| **Localização canônica MC** | ADR-015 + MC-SPEC-ClickUp v3.1.1 (T2.4 A8/A12) |
| **Filtros atendidos** | F2 + F3 + F4 |
| **Carimbo de conversão** | 🟡 LEVE |
| **Valor estratégico AP** | ClickUp Workspace MC com Spaces hierárquicos. Para AP, criar Space dedicado `Alessandro Premium` com Lists, Custom Fields adaptados (Pv components), Automations, Views. Custo: Plano Business AP membership já cobre. |
| **Aplicação AP sugerida** | Space novo `Alessandro Premium` com 3-5 Lists iniciais (Casos Ativos, Casos em Triagem, Casos Encerrados, Backoffice). Custom Fields per A12. |
| **Esforço estimado conversão** | 1-2h (setup inicial) |
| **Dependências** | A8 (ADR-015), A12 (CustomFields spec) |

**Síntese:** Carimbo leve.

---

### Ativo S4 — Stack LLM Multi-Modelo (GAIA + Sabiá + Bedrock + Groq + LiteLLM + Albertina)

| Campo | Valor |
|---|---|
| **Localização canônica MC** | ADR-012 v1.1 (T2.4 A6) + `02-ARQUITETURA/analises/MC-ANALISE-GAIA-Arquitetura-LLM-v1_0-2026-0506.md` |
| **Filtros atendidos** | F2 + F3 + F4 |
| **Carimbo de conversão** | 🟢 ZERO |
| **Valor estratégico AP** | **GAIA-4B** (especializado previdenciário PT-BR — fine-tuning sobre Llama 3.1 8B treinado em Grimório + casos MC) + **Sabiá-4 Maritaca** (raciocínio PT-BR) + **Claude Bedrock sa-east-1** (Opus 4.7 não-transferência LGPD) + **Llama 3.3 70B Groq** (latência ultra-baixa para resposta inicial) + **LiteLLM** (orquestração) + **Albertina PT-BR** (embeddings semânticos). Stack neutra à persona. |
| **Aplicação AP sugerida** | Adotar idêntica. Custos: zero adicional (cliente AP é mais um caso para o gateway). Prompts AP-específicos: novo conjunto de system prompts adaptados (~10-15h trabalho separado). |
| **Esforço estimado conversão** | 0h (stack); ~12h (prompts) |

**Síntese:** Conversão zero. Stack LLM herdada 100%.

---

### Ativo S5 — Arquitetura MCP v3.0 (Model Context Protocol)

| Campo | Valor |
|---|---|
| **Localização canônica MC** | `02-ARQUITETURA/mcp/0__Arquitetura_MCP_MeuCumpadre_v3_0.md` |
| **Filtros atendidos** | F2 + F3 + F4 |
| **Carimbo de conversão** | 🟢 ZERO |
| **Valor estratégico AP** | Especificação do MCP como sistema nervoso do ecossistema. Primitivas: Resources, Tools, Prompts, Sampling, Roots, Elicitation. Servers MC: WhatsApp Cloud API, PostgreSQL, Playwright, Google Vision OCR. **Toda a infraestrutura MCP vale para AP** — basta acrescentar namespace AP nos Resources persistentes (cada cliente AP tem URI dedicada `mcp://ap/cliente/{hash}/{tier}`). |
| **Aplicação AP sugerida** | Reusar MCP infra. Acrescentar AP-specific resources (e.g., MCP server para `Cofounder Adobe MCP`, `Cofounder Figma MCP`, `Cofounder Canva MCP` para identidade visual AP separada — todos já listados em A17). |
| **Esforço estimado conversão** | 0h |

**Síntese:** Conversão zero. MCP é arquitetura neutra à persona.

---

### Ativo S6 — MCPs Cofounder (Drive, ClickUp, Bitwarden, Gmail, Calendar, Supabase, Figma, Canva, Adobe)

| Campo | Valor |
|---|---|
| **Localização canônica MC** | implícito + `04-OPERACAO/infraestrutura/MC-REGISTRO-Infraestrutura-DELL-CEO-v1_0-2026-0513.md` §3 matriz |
| **Filtros atendidos** | F2 + F3 + F4 |
| **Carimbo de conversão** | 🟢 ZERO |
| **Valor estratégico AP** | 9+ MCPs cofounder já instalados no DELL (este próprio ambiente runtime). Cada um expõe ferramentas que o Code Alessandro pode usar para trabalhar em casos AP: leitura Drive, leitura/escrita ClickUp, leitura/escrita Bitwarden, envio Gmail, manipulação Calendar, queries Supabase, manipulação Figma/Canva/Adobe para identidade visual. |
| **Aplicação AP sugerida** | Já operacional. Apenas usar com discrição: lembrar que ClickUp MCP escreve direto no Workspace MC (Princípio #20 — sincronização ClickUp daemon); Drive MCP lê livremente — disciplina LGPD vale. |
| **Esforço estimado conversão** | 0h |

**Síntese:** Conversão zero. Toolset cofounder herdado integralmente.

---

### Ativo S7 — N8N Workflows (orquestração)

| Campo | Valor |
|---|---|
| **Localização canônica MC** | Implícito + Princípio #11 (Governança forte mora no N8N) + ADR-008 |
| **Filtros atendidos** | F2 + F3 + F4 |
| **Carimbo de conversão** | 🟢 ZERO |
| **Valor estratégico AP** | N8N hosteado em Coolify/Hostinger. Workflows MC existentes (notificações ClickUp, watchdog INSS, processamento OCR, ingestão WhatsApp, etc.). **Workflows AP serão prefixados `AP-*`** e podem reutilizar nós de extração/processamento já validados. |
| **Aplicação AP sugerida** | Criar workflows AP no mesmo N8N: `AP-Watchdog-Exigencias`, `AP-Notificacao-Cliente`, `AP-Hash-Verify-Dossie`, `AP-Onboarding`. Reutilizar nodes existentes via templates. |
| **Esforço estimado conversão** | 0h (infra); ~15-20h (cunhagem workflows AP-específicos, ao longo de sprints) |

**Síntese:** Conversão zero (infra) + esforço de cunhagem (workflows novos é trabalho de produto).

---

### Ativo S8 — Whisper (transcrição áudio)

| Campo | Valor |
|---|---|
| **Localização canônica MC** | Implícito + referência em POP Phi0 Triagem (Whisper transcreve áudio) |
| **Filtros atendidos** | F2 + F3 + F4 |
| **Carimbo de conversão** | 🟢 ZERO |
| **Valor estratégico AP** | Whisper local (em Coolify/Hostinger) para transcrever áudios. Em AP: gravações de reuniões com clientes (mediante consentimento expresso) podem ser transcritas para o dossiê. Audio do cliente premium é mais raro mas tem alto valor analítico. |
| **Aplicação AP sugerida** | Adotar idêntico. Adicionar TTA específico para gravação de audio do cliente (LGPD reforçada). |
| **Esforço estimado conversão** | 0h |

**Síntese:** Conversão zero.

---

### Ativo S9 — gov.br Matriz Nível de Serviço v1.2 (canônico)

| Campo | Valor |
|---|---|
| **Localização canônica MC** | `04-DADOS/govbr/MC-GOVBR-Matriz-NivelServico-v1_2-2026-0509.md` (canônico, supersede v1.0 em 02-ARQUITETURA) |
| **Filtros atendidos** | F2 + F3 + F4 |
| **Carimbo de conversão** | 🟢 ZERO |
| **Valor estratégico AP** | Mapeamento de nível gov.br (Bronze/Prata/Ouro) por tipo de serviço INSS. Universal — INSS exige mesmo nível para cliente vulnerável ou premium. |
| **Aplicação AP sugerida** | Adotar idêntico. |
| **Esforço estimado conversão** | 0h |

**Síntese:** Conversão zero.

---

### Ativo S10 — gov.br Catálogo de Travas v1.1

| Campo | Valor |
|---|---|
| **Localização canônica MC** | `04-DADOS/govbr/MC-GOVBR-CatalogoTravas-v1_1-2026-0509.md` |
| **Filtros atendidos** | F2 + F3 + F4 |
| **Carimbo de conversão** | 🟢 ZERO |
| **Valor estratégico AP** | Catálogo de 6+ tipos de trava + scripts de desbloqueio. Universal. |
| **Aplicação AP sugerida** | Adotar idêntico (já catalogado em T2.3 P4 como POP). |
| **Esforço estimado conversão** | 0h |

**Síntese:** Conversão zero (cross-reference T2.3 P4).

---

### Ativo S11 — gov.br Anamnese Triagem v1.0

| Campo | Valor |
|---|---|
| **Localização canônica MC** | `04-DADOS/govbr/MC-GOVBR-Anamnese-Triagem-GovBr-v1_0-2026-0509.md` |
| **Filtros atendidos** | F2 + F3 |
| **Carimbo de conversão** | 🟡 LEVE |
| **Valor estratégico AP** | Anamnese de triagem do estado gov.br do cliente. Para AP: cliente alta-renda normalmente já tem gov.br Ouro, mas pode ter travas técnicas (mudança de aparelho, biometria inconsistente). Anamnese ajuda a diagnosticar antes de tentar desbloqueio. |
| **Aplicação AP sugerida** | Adotar como `AP-GOVBR-Anamnese-Triagem-v1_0` com sondagem inicial AP-específica (ex.: "Já fez prova de vida via banco/biometria? Recebeu algum bloqueio recente por suspeita?"). |
| **Esforço estimado conversão** | 1h |

**Síntese:** Carimbo leve.

---

### Ativo S12 — gov.br PROMPT E12 Anamnese ClaudeCode v2

| Campo | Valor |
|---|---|
| **Localização canônica MC** | `04-DADOS/govbr/MC-GOVBR-PROMPT-E12-Anamnese-v2-ClaudeCode.md` |
| **Filtros atendidos** | F2 + F3 + F4 |
| **Carimbo de conversão** | 🟡 LEVE |
| **Valor estratégico AP** | Prompt operacional para Claude Code conduzir anamnese gov.br via Cofounder. **Reaproveitamento direto** — apenas substituir vocabulário "Dona Zilda" → "Estimado(a) mandante". |
| **Aplicação AP sugerida** | Adotar como `AP-GOVBR-PROMPT-Anamnese-Mandato-v1_0`. |
| **Esforço estimado conversão** | 1h (vocabulário) |

**Síntese:** Carimbo leve.

---

### Ativo S13 — gov.br Árvore Decisão API Humana v1.1

| Campo | Valor |
|---|---|
| **Localização canônica MC** | `04-DADOS/govbr/MC-GOVBR-ArvoreDecisao-APIHumana-v1_1-2026-0509.md` |
| **Filtros atendidos** | F2 + F3 + F4 |
| **Carimbo de conversão** | 🟠 MÉDIA |
| **Valor estratégico AP** | Árvore de decisão MC para quando ativar Human API (Anjos/Estagiários). Em AP, **Human API não existe nesse molde** — Code Alessandro é sempre o operador direto (não há Tier 1/2 estagiários). Mas a lógica de "quando o problema gov.br exige presença física vs quando pode resolver remoto" sobrevive. Reescrever para sub-contratação eventual. |
| **Aplicação AP sugerida** | `AP-GOVBR-ArvoreDecisao-SubContratacao-v1_0` — decide quando AP contrata serviço pontual presencial (perícia, comparecimento agência, autenticação cartório). |
| **Esforço estimado conversão** | 3-4h |

**Síntese:** Carimbo médio. Conceito vale, semântica muda.

---

### Ativo S14 — Matriz 4 Camadas IA C1/C2/C3/C4 + Firewall LGPD

| Campo | Valor |
|---|---|
| **Localização canônica MC** | `04-OPERACAO/infraestrutura/MC-REGISTRO-Infraestrutura-DELL-CEO-v1_0-2026-0513.md` §3 (linhas 71-150 aprox) + Princípio #21 |
| **Filtros atendidos** | F2 + F3 + F4 |
| **Carimbo de conversão** | 🟢 ZERO |
| **Valor estratégico AP** | **Matriz operacional inviolável MC**: C1 (Claude.ai projeto - estratégico/anônimos) + C2 (Cowork DELL - produção textual) + C3 (Claude Code DELL - execução operacional) + C4 (Stack Produção LLM - dados cidadão via Bedrock). **Linha vermelha LGPD: dados sensíveis JAMAIS em C1/C2/C3.** Disciplina universal — vale igual em AP. Aliás, em AP é ainda mais crítica (dados patrimoniais > dados de vulnerabilidade no espectro de risco reputacional). |
| **Aplicação AP sugerida** | Adotar matriz idêntica. **Em AP, dados patrimoniais de mandante JAMAIS em C1/C2/C3** — apenas em C4 (Bedrock) ou armazenados em S2/S3 do ADR-009b. |
| **Esforço estimado conversão** | 0h |

**Síntese:** **Conversão zero, valor exponencial.** Esta disciplina é a coluna vertebral de qualquer operação séria com dados sensíveis. AP herda gratuitamente.

---

### Ativo S15 — DELL VAIO Positivo (estação operacional CEO 24h)

| Campo | Valor |
|---|---|
| **Localização canônica MC** | `04-OPERACAO/infraestrutura/MC-REGISTRO-Infraestrutura-DELL-Snapshot-Hardware-v1_0-2026-0513.md` |
| **Filtros atendidos** | F3 + F4 |
| **Carimbo de conversão** | 🟢 ZERO |
| **Valor estratégico AP** | Máquina física: VAIO Positivo VJFE69F11X-B0221H (AMD Ryzen 7 5825U 8C/16T, 32GB DDR4, 512GB NVMe, Win10 22H2). É o próprio ambiente runtime onde Code Alessandro opera AGORA. Mesma máquina serve para operar MC e AP sem conflito (logical separation suficiente). |
| **Aplicação AP sugerida** | Continuar operando AP nesta máquina até crescimento justificar dedicada. **Ponto de atenção:** Win10 EOL out/2025 (já passou) — em algum momento Beto/Alessandro precisa upgrade Win11 ou nova máquina. Risco operacional documentado. |
| **Esforço estimado conversão** | 0h |

**Síntese:** Conversão zero. **Risco operacional:** Win10 EOL é dívida técnica de prazo curto.

---

### Ativo S16 — WhatsApp Cloud API (DESCARTAR para AP)

| Campo | Valor |
|---|---|
| **Localização canônica MC** | Referência em Arquitetura MCP v3.0 + POPs E1-E6 |
| **Filtros atendidos** | nenhum (canal MC) |
| **Carimbo de conversão** | N/A |
| **Valor estratégico AP** | **ZERO em AP.** Canal MC é WhatsApp (98% penetração hipervulneráveis). Canal AP é referência boca-a-boca + telefone + email + Calendly. Cliente high-net-worth raramente prefere WhatsApp para assuntos patrimoniais (preferem reunião presencial ou Zoom). |

**Síntese:** Descartado por incompatibilidade de canal.

---

### Ativo S17 — Identidade Visual MCPs (Figma + Canva + Adobe)

| Campo | Valor |
|---|---|
| **Localização canônica MC** | MCPs já instalados conforme S6 |
| **Filtros atendidos** | F3 + F4 |
| **Carimbo de conversão** | 🟢 ZERO |
| **Valor estratégico AP** | Conjunto de MCPs cofounder para criação visual: Figma (design), Canva (templates), Adobe (Creative Cloud). Necessário para cunhagem da identidade visual AP no momento certo (sprint dedicada futura). |
| **Aplicação AP sugerida** | Disponível para uso quando founder for cunhar identidade visual AP. |
| **Esforço estimado conversão** | 0h |

**Síntese:** Conversão zero.

---

### Ativo S18 — Sync ClickUp Daemon (Princípio #20)

| Campo | Valor |
|---|---|
| **Localização canônica MC** | `04-OPERACAO/logs/SYNC-PROTOCOLO-Documentacao-Vault-v1_0-2026-0512.md` + Princípio #20 |
| **Filtros atendidos** | F2 + F3 + F4 |
| **Carimbo de conversão** | 🟢 ZERO |
| **Valor estratégico AP** | Daemon de sincronização ClickUp → Vault Obsidian (cada 5 min). Garante que tarefas do ClickUp aparecem no Vault como `.md`. Em AP: mesma infraestrutura sincroniza Space AP do ClickUp para namespace AP no Vault. |
| **Aplicação AP sugerida** | Configurar daemon para também sincronizar Space `Alessandro Premium` para `inventario-AP/sync/` ou pasta análoga. |
| **Esforço estimado conversão** | 0,5h (config adicional do daemon) |

**Síntese:** Conversão zero.

---

## 3 · Ativos descartados com nota

| Ativo | Razão do descarte |
|---|---|
| WhatsApp Cloud API | Canal MC; AP usa outros canais (S16) |
| Evolution API (removida do futuro MC) | Já obsoleto em MC e em AP |
| MC-GOVBR-MapaNormativo v1.0 | Material regulatório útil mas embarcado em Grimório e ADRs |
| MC-GOVBR-Taxonomia-Unificada | Taxonomia auxiliar; útil em referência interna |
| MC-GOVBR-Inventario-Fontes | Mapeamento de fontes — útil mas auxiliar |
| MC-GOVBR-ERRATA-001-KBA-Bronze | Errata histórica MC |
| MC-GOVBR-E8 ParteB Rotas + ParteC FAQ | Material institucional MC para CPMI |
| `02-ARQUITETURA/govbr/` (folder com 5 arquivos antigos) | Versões antigas, superadas pelo `04-DADOS/govbr/` canônico v1.1+ |
| Servidor Hostinger acesso credenciais (em si) | Estão no Bitwarden — não duplicar |
| 04-DADOS/MC-INTELIGENCIA-IAnoINSS-Folha-2026-0406 | Inteligência setorial sobre IA no INSS — útil como referência |
| 04-DADOS/MC-ANALISE-LAI-Lote1-Triagem | Análise LAI MC |
| 04-DADOS/MC-HIPERPLANILHA v1.1 CHANGELOG | Hiperplanilha MC (controle interno) |
| BEPS análise consolidada | Dados estatísticos macro INSS — apenas referência |
| CPMI Dossiê v2 Março 2026 | Material CPMI MC |

---

## 4 · Lacunas Detectadas

| Lacuna | Por que importa |
|---|---|
| **AP-INFRA Namespace separado** (Coolify project) | Isolamento operacional MC ↔ AP |
| **AP-WORKFLOWS N8N catálogo** | Catalogar workflows AP-específicos a cunhar |
| **AP-CANAL Comunicação cliente (Calendly + email + Zoom)** | Substitui WhatsApp como canal AP |
| **AP-IDENTIDADE Visual completa** (logo + papelaria + assinatura email + slide deck) | Sprint dedicada |
| **AP-MCP Stack KYC/AML** | Inexiste em MC; AP precisa para Fraudscore (R3) |
| **AP-INFRA Backup dossiês offline (cliente alta-renda exige offline copies)** | Política específica de backup encriptado físico |
| **AP-MONITORAMENTO Performance LLM por persona** | Métricas separadas para casos AP (latência, qualidade resposta GAIA × Bedrock × Sabiá em casos de alta renda) |

---

## 5 · Recomendações Operacionais

1. **Sprint 1 AP (30 dias) · custo: ~5h:** Criar namespaces (S1 Coolify, S2 Bitwarden, S3 ClickUp Space, S7 N8N prefix, S18 sync daemon).
2. **Sprint 2 AP (60 dias) · custo: ~20h:** Cunhar workflows AP-específicos (S7), adotar GovBr ferramentas AP (S11/S12/S13).
3. **Sprint 3 AP (90 dias) · custo: ~10h:** Cobrir Matriz Camadas IA AP (S14 idêntico, atenção reforçada), backup offline.
4. **Sprint dedicada futura:** Identidade visual AP (S17 ferramentas disponíveis), Stack KYC/AML (AP-MCP novo).

**Esforço total Stack & Infra AP:** ~35-40h.

---

**AP-INVENTARIO-StackInfra v1.0 · SELADO 20/05/2026**
Executor: Claude Code DELL · MB-AP-002 · Tarefa 2.5 de 8
∞
