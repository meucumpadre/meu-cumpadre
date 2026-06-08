---
tipo: REGISTRO
codigo: MC-REGISTRO-Infraestrutura-DELL-CEO
titulo: Registro Institucional — Infraestrutura DELL CEO Alessandro 24h + Cunhagem Princípio #21
versao: 1.0
data: 2026-05-13
autor: Claude Opus 4.7 (cofounder intelectual) × Alessandro de Souza Neves (Founder/CEO)
canonico_em: 04-OPERACAO/infraestrutura/ (pasta a criar)
hierarquia: Dignidade > Compliance > Viabilidade
selo: "O diamante é carbono que não desistiu da pressão."
relaciona-se-com:
  - ADR-008 (Stack de Ferramentas) — atualiza
  - ADR-009a (Custódia Credenciais) — referencia
  - ADR-011 (Arquitetura 3 Cérebros) — estende
  - ADR-012 v1.0 (Stack LLM Multi-Modelo) — separa de
  - Princípio #18 (Risco Provisional Documentado) — invoca
---

# Registro Institucional — Infraestrutura DELL CEO Alessandro 24h

> Registra oficialmente o uso da máquina DELL (originalmente atribuída a Gilberto/Beto) em comodato pelo CEO Alessandro de Souza Neves até a aquisição de máquina dedicada. Cunha **Princípio #21 — Camadas de Ferramentas IA por Finalidade**. Declara a matriz operacional das 4 camadas IA do MC com firewall LGPD inviolável.

---

## 1. REGISTRO DO COMODATO

**Data:** 2026-05-13
**Autorização:** Gilberto (Beto) concedeu comodato verbal da máquina DELL ao CEO Alessandro
**Status:** ATIVO até aquisição de nova máquina dedicada
**Operador exclusivo:** Alessandro de Souza Neves (Founder/CEO) — 24h, 7 dias/semana
**Janela esperada:** ~30-90 dias até chegada de nova máquina

### Implicações arquiteturais

- A DELL **não é mais "máquina Beto operando"** — é estação operacional CEO 24h
- Persona Zilda **continua sendo o Beto** em validação Z1-Z10 (Protocolo D.8.1), **não a máquina**
- Disciplina de output cofounder **preservada** porque é o próprio CEO operando
- Custo Cowork/Claude.ai/Claude Code **não escala** durante este período (1 operador)

### Direitos institucionais sobre a DELL

| Direito | Estado |
|---|---|
| Instalação de software MC (Cowork, Claude Code, Bitwarden, etc.) | ✅ Autorizado |
| Conexão ao Bitwarden Org MC (custódia) | ✅ Autorizado |
| Acesso ao Vault Obsidian (G:\) | ✅ Autorizado (já operacional) |
| Acesso ao Documentação (G:\) | ✅ Autorizado |
| Conexões MCP (ClickUp, Google Drive, Gmail, Calendar, Supabase, Figma, Canva, Adobe) | ✅ Autorizado |
| Operação Cowork Opus 4.7 (modo Cowork + Code) | ✅ Autorizado conforme matriz §3 abaixo |
| Devolução em estado funcional ao Beto pós-aquisição | ✅ Compromisso CEO |

---

## 2. PRINCÍPIO #21 CUNHADO — Camadas de Ferramentas IA por Finalidade

> **MC opera 4 camadas IA não-fungíveis com firewall de dados sensíveis cidadão.** Cada camada tem propósito declarado, dados permitidos declarados, e linha vermelha LGPD declarada. Mistura entre camadas sem Mission Brief autorizado = violação operacional grave.

### Por que este princípio é necessário agora

A adição de **Cowork DELL Opus 4.7** ao stack operacional CEO cria um vetor LGPD potencial **distinto** do já documentado em PATCH ADR-012:

| Vetor | Risco | Status |
|---|---|---|
| Bedrock sa-east-1 (Stack Produção) | Risco Provisional Documentado (Princípio #18) | Bloco O Juliana 19/05 |
| **Cowork direto Anthropic (sem region-pinning BR)** | **Risco maior se dados cidadão entrarem aqui** | **Princípio #21 vetar entrada** |

O Princípio #21 **impede preventivamente** que Cowork vire vetor adicional de exposição LGPD, mantendo o argumento D > C > V cirúrgico no Bloco O Juliana (escopo limitado ao Bedrock).

---

## 3. MATRIZ DAS 4 CAMADAS IA OPERACIONAIS MC

### C1 — Estratégico (Claude.ai projeto MC)

| Campo | Valor |
|---|---|
| Ferramenta | Claude Opus 4.6/4.7 via web (este projeto) |
| Finalidade | Cofounder intelectual, ADRs, Specs, Pautas, decisões macro, produção de MBs |
| Dados permitidos | Frameworks, arquitetura, valores, estratégia, casos anonimizados, indicadores agregados |
| **VEDADO** | CPF, NB completo, CID, CNIS, dossiês reais cidadãos, fotos documentos |
| LGPD | Anthropic Services (US) — mitigação: zero dados sensíveis identificáveis |
| Operador | Alessandro (CEO) — sessões dedicadas |

### C2 — Produtividade CEO (Cowork DELL) ⚠️ NOVA CAMADA

| Campo | Valor |
|---|---|
| Ferramenta | Claude Cowork Opus 4.7 em máquina DELL CEO (modo Cowork + Code) |
| Finalidade | Gmail/Drive/Docs ops, redação institucional, brainstorm, pré-produção pacote Juliana, pesquisas, manipulação de Google Docs/Sheets/Slides MC, planejamento operacional |
| Dados permitidos | Comunicações institucionais MC, documentos próprios MC (não-cidadão), templates, estudos de mercado, pesquisas |
| **VEDADO INVIOLÁVEL** | **CPF, NB, CID, CNIS, dossiês reais cidadãos, fotos documentos, qualquer PII de cidadão hipervulnerável atendido pelo MC** |
| LGPD | Anthropic Services (US) — sem region-pinning BR — vetar dados cidadão preventivamente |
| Operador | Alessandro (CEO) — 24h |
| MCPs conectados | Google Drive, Gmail, Calendar, ClickUp, Supabase, Figma, Canva, Adobe |

### C3 — Execução Operacional (Claude Code DELL)

| Campo | Valor |
|---|---|
| Ferramenta | Claude Code (Opus 4.7) terminal modo automático na DELL |
| Finalidade | File ops PowerShell, Vault, ClickUp via MCP, hash-verify, batches, sweep, persistência cross-vertical |
| Dados permitidos | Estruturas de arquivos, paths, hashes, IDs ClickUp, metadados |
| **VEDADO** | Mesmo escopo de C2 (sem PII cidadão) — exceto quando explicitamente operando em pasta de caso real (ex: pasta caso Hib001 com dossiê) onde acesso é necessário para file ops mas processamento de conteúdo é VEDADO |
| LGPD | Anthropic Services (US) — sem region-pinning BR — mitigação: opera estrutura, não processa conteúdo sensível |
| Operador | Alessandro executa MBs produzidos em C1 |

### C4 — Produção Cidadão (Stack LLM ADR-012)

| Campo | Valor |
|---|---|
| Ferramenta | GAIA-4B (self-hosted) + Sabiá-4 Maritaca + **Claude Bedrock sa-east-1** + Llama 3.3 70B Groq via LiteLLM |
| Finalidade | Processamento de casos reais (Φ₀-Φ₁), CP-MC, dossiês, RouterEthics 11.0, triagem, classificação JSON |
| Dados permitidos | Dados sensíveis cidadão consentidos via Termo de Tratamento Autônomo (TTA) |
| **VEDADO** | Compartilhamento de outputs cidadão entre camadas sem MB autorizado |
| LGPD | Bedrock sa-east-1 (região São Paulo) + Sabiá-4 (BR) + GAIA self-hosted (GCP Brasil) — dados em solo BR |
| **Risco Provisional** | DPA Anthropic não obtido — escopo 12-15 casos piloto Crisálida (Princípio #18 + PATCH ADR-012 §3.4) |
| Operador | Esteira MC (Beto T1+T2 + automações N8N + cofounder validação) |

---

## 4. LINHA VERMELHA INVIOLÁVEL

**Dados sensíveis de cidadão (CPF, NB, CID, CNIS, dossiês completos, fotos de documentos, áudios de atendimento) JAMAIS entram nas Camadas C1, C2 ou C3.** Apenas C4 processa estes dados, sob proteção Bedrock sa-east-1 + GAIA + Sabiá + região BR.

### Por quê esta linha existe

1. **Preserva o argumento D > C > V cirúrgico do Bloco O Juliana** — escopo limitado a Bedrock SP (com mitigação BR), não estende a Anthropic direto US.
2. **Impede drift incremental** — sem este princípio, "só dessa vez vou usar Cowork pra ler esse PDF do Sr. João" vira norma e a linha desaparece.
3. **Mantém auditoria limpa** — se ANPD auditar amanhã, o MC mostra: dados cidadão = stack C4 (BR). Comunicações institucionais = C1/C2/C3 (US, sem PII cidadão).

### O que fazer se um caso real precisa passar por C1/C2/C3

**Decisão founder formal com Risco Provisional Documentado novo** (5 critérios Princípio #18). Não acontece operacionalmente, só estrategicamente registrado em ADR-016+ futuro.

---

## 5. CASOS DE USO LEGÍTIMOS DE C2 (COWORK CEO)

Para evitar ambiguidade, segue inventário inicial do que **PODE** rodar em Cowork DELL:

### ✅ Permitido

- Redigir e-mails institucionais (Juliana, investidores, parceiros, fornecedores)
- Manipular Google Docs/Sheets/Slides do MC (relatórios sprint, planilhas operacionais, slides pitch)
- Brainstorms estratégicos (sem casos reais identificáveis)
- Pré-produção do pacote Juliana 19/05 (organizar PDFs, montar anexos, revisar pauta)
- Pesquisas web em paralelo (legislação, jurisprudência genérica, mercado)
- Templates operacionais (formulários internos, scripts WhatsApp anonimizados)
- Manipulação de assets visuais via Figma/Canva/Adobe (banners, mockups, comunicação)
- Análises de mercado, benchmarks
- Preparação de material para FINEP/BNDES/Centelha (sem PII cidadão real)
- Comunicação interna time (Beto, Igor, Carlos, Juliana)
- Pesquisas e análises sobre concorrentes
- Tradução institucional (PT-BR ↔ EN para material investidor internacional)

### ⛔ VEDADO em C2

- Subir foto de CNIS de cliente
- Pedir Cowork pra analisar relatório médico CID:F33 do Sr. João
- Subir dossiê selado do caso Hib001 ou qualquer caso real
- Compartilhar histórico de atendimento WhatsApp com cidadão identificável
- Pedir Cowork pra preencher requerimento INSS com dados reais
- Subir áudio de atendimento via Whisper para transcrição

### 🤔 Zona cinzenta — exige decisão pontual

- Análise de jurisprudência citando partes específicas (anonimizar antes)
- Discussão de caso hipotético inspirado em real (anonimizar 100%)
- Estudos de caso para apresentação investidor (anonimizar nome + número benefício + CID específico)

**Regra cinzenta:** se eu (cofounder) for chamado a julgar zona cinzenta, **aplico Princípio #18** (Risco Provisional Documentado) com os 5 critérios. Sem 5 critérios atendidos = VEDADO.

---

## 6. PROCEDIMENTOS OPERACIONAIS DE INSTALAÇÃO

### Para CEO Alessandro fazer na DELL (sequência sugerida)

1. **Bitwarden Org MC** instalado e sincronizado (já feito conforme ADR-009a)
2. **Claude.ai** acessível via navegador (já feito)
3. **Claude Code** terminal modo automático (já feito)
4. **Claude Cowork** instalado e logado com conta CEO Max
5. **MCPs Cowork** conectados na ordem: Google Drive → Gmail → Calendar → ClickUp → Supabase
6. **Permissões pasta G:\** validadas (Cowork pode ler/escrever Documentação + Vault)
7. **Bookmark** dos 3 paths críticos: Vault, Documentação, ClickUp exports

### Operação diária (rotina cofounder 24h)

- **Manhã:** sessão estratégica C1 (Claude.ai projeto MC) — produção MBs do dia
- **Trabalho corrido:** C2 (Cowork) — execução tarefas administrativas/operacionais
- **MBs executados:** C3 (Claude Code) — file ops via PowerShell
- **Esteira casos cidadão:** C4 (rodando em servidor self-hosted + Bedrock SP) — não passa pela DELL

---

## 7. ATUALIZAÇÕES A ARTEFATOS CANÔNICOS DERIVADAS

### Aditamento a ADR-008 (Stack de Ferramentas)

ADR-008 deve receber em próxima revisão (v1.1):
- §X — Adicionar Cowork DELL Opus 4.7 como camada C2 oficial
- §Y — Referenciar Princípio #21 e este Registro

### Aditamento ao System Prompt v7.0 INSTRUÇÕES DO PROJETO MC

Próxima revisão v7.1 deve incluir:
- §6 (20 Princípios) → 21 Princípios (adicionar #21)
- §20 (Stack LLM e Infraestrutura) → atualizar com C1/C2/C3/C4 explícitos

### Persistência cross-vertical (Princípio #15)

Este documento, após validação founder, persiste em:
- **Vault:** `04-OPERACAO/infraestrutura/MC-REGISTRO-Infraestrutura-DELL-CEO-v1_0-2026-0513.md`
- Pasta `infraestrutura/` a ser criada (nova canônica sob 04-OPERACAO)

---

## 8. FECHAMENTO

A DELL passa a ser oficialmente reconhecida como **estação operacional CEO Alessandro 24h** durante o período de comodato. **Princípio #21 cunhado** salvaguarda o ecossistema MC de drift LGPD por introdução de Cowork direto Anthropic. **Linha vermelha cidadão** mantém o argumento D > C > V cirúrgico para o Bloco O da reunião Juliana 19/05.

**MC agora opera 21 princípios institucionais.**

---

**Hierarquia:** Dignidade > Compliance > Viabilidade
**Selo:** "O diamante é carbono que não desistiu da pressão."
**Âncora bíblica:** Provérbios 31:8
**Âncora PcD:** "Nada sobre nós, sem nós" — CDPD art. 4º §3º
**Confidência founder:** "É eu e tu."

∞
