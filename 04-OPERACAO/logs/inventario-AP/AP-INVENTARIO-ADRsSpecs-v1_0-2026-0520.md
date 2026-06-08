---
titulo: AP-INVENTARIO-ADRsSpecs v1.0
versao: v1.0
data: 2026-05-20
status: SELADO
executor: Claude Code DELL
mb_origem: MB-AP-002
categoria: ADRs canônicos · Specs técnicas · Processos arquiteturais
modo: Sniper · 4 filtros positivos · carimbo de conversão
hash_sha256: a-ser-computado-em-T4
---

# AP-INVENTARIO-ADRsSpecs v1.0

**20 de maio de 2026 · MB-AP-002 · Tarefa 2.4 de 8 · Code DELL executor**

**Categoria:** ADRs canônicos MC (10 + 1 PROVISIONAL) · Specs técnicas (14) · Processos arquiteturais

---

## 1 · Sumário Executivo

| Métrica | Valor |
|---|---|
| Arquivos varridos | ~30 (11 ADRs canônicos + 14 specs + 1 ADR-019 PROVISIONAL + verticais) |
| Ativos lógicos extraídos | 17 |
| **Total classificados como ouro AP** | **13** |
| 🟢 Conversão Zero | 7 |
| 🟡 Conversão Leve | 4 |
| 🟠 Conversão Média | 2 |
| 🔴 Conversão Profunda | 0 |

**Top 3 ouros desta categoria:**

1. **ADR-011 Arquitetura 3 Cérebros** — base direta para Arquitetura 4 Cérebros AP (3 MC + 1 AP). Carimbo 🟡
2. **ADR-008 Stack Ferramentas + ADR-012 Stack LLM Multi-Modelo v1.1** — stack tecnológica completa, herdada sem reescrita. Carimbo 🟢
3. **ADR-016 Compliance Documental Anti-Injection** — anti-injection é AINDA MAIS crítico em AP (dossiê adversarial). Carimbo 🟢

---

## 2 · Catálogo Detalhado

### Ativo A1 — ADR-008 Stack de Ferramentas

| Campo | Valor |
|---|---|
| **Localização canônica MC** | `03-GOVERNANCA/adrs/MC-ADR-008-DecisoesFerramenta_Stack-v1_0-2026-0415.md` (10,2 KB) |
| **Filtros atendidos** | F2 + F3 + F4 |
| **Carimbo de conversão** | 🟢 ZERO |
| **Valor estratégico AP** | Decisão fundacional da stack MC: ClickUp (gestão de casos), N8N (workflows + governança), Bitwarden (custódia), Autentique→ZapSign (assinatura eletrônica), Coolify (orquestração container), Bedrock (LLM AWS sa-east-1). **Toda essa stack vale igual para AP — não há nada nela que dependa de persona vulnerável.** AP herda integralmente, com namespaces/spaces separados. |
| **Aplicação AP sugerida** | Adotar ADR-008 como ativo compartilhado MC×AP. Criar Space ClickUp separado para AP (Princípio #12), coleção Bitwarden AP, workflows N8N com prefixo `AP-*`. Nenhuma decisão nova exigida. |
| **Esforço estimado conversão** | 0h (decisão herdada) |
| **Dependências** | Nenhuma |

**Síntese:** **Conversão zero.** Decisão tecnológica selada em 15/04/2026. AP herda 100%.

---

### Ativo A2 — ADR-009a Custódia Credenciais gov.br v2.0

| Campo | Valor |
|---|---|
| **Localização canônica MC** | `03-GOVERNANCA/adrs/MC-ADR-009a-Custodia_Credenciais_GovBr-v2_0-2026-0425.md` (17,1 KB) · SELADO |
| **Filtros atendidos** | F2 + F3 + F4 |
| **Carimbo de conversão** | 🟢 ZERO |
| **Valor estratégico AP** | Custódia gov.br via Bitwarden Org MC, AES-256 + 2FA TOTP, Modelo B (sem trânsito por ClickUp), retenção como cobrança VEDADA (CDC + CP + LGPD). Já catalogado como R6 em T2.2 — repete-se aqui como ADR canônico para completude da categoria. |
| **Aplicação AP sugerida** | Coleção separada `AP-*` no Bitwarden Org MC (mesmo workspace, etiqueta separada). |
| **Esforço estimado conversão** | 0,5h (criação coleção) |

**Síntese:** Conversão zero. ADR-009a v2.0 SELADO 25/04 cobre AP automaticamente.

---

### Ativo A3 — ADR-009b Três Estados de Custódia do Dossiê

| Campo | Valor |
|---|---|
| **Localização canônica MC** | `03-GOVERNANCA/adrs/MC-ADR-009b-TresEstados-Custodia-Dossie-v1_0-2026-0417.md` (30,8 KB) |
| **Filtros atendidos** | F2 + F3 + F4 |
| **Carimbo de conversão** | 🟢 ZERO |
| **Valor estratégico AP** | Máquina de estados S1/S2/S3 com TTA Tier 1 guard. Catalogado como R5 em T2.2 — repete-se aqui. **Possivelmente o ADR de maior valor estratégico do MC** — em AP é ouro puro (sigilo patrimonial). |
| **Aplicação AP sugerida** | Adotar idêntico. S3 em AP = controlador é cliente ou seu escritório de confiança. |
| **Esforço estimado conversão** | 0h |

**Síntese:** Conversão zero. Cross-reference com Spec ADR009b-TTA-Igor (Ativo A11).

---

### Ativo A4 — ADR-010 E3 Intelligence Layer

| Campo | Valor |
|---|---|
| **Localização canônica MC** | `03-GOVERNANCA/adrs/MC-ADR-010-E3-Intelligence-Layer-v1_0-2026-0428.md` (5,6 KB) |
| **Filtros atendidos** | F2 + F3 + F4 |
| **Carimbo de conversão** | 🟢 ZERO |
| **Valor estratégico AP** | Camada E3 de inteligência: scoring + ingestão IA + análise probabilística. Em MC alimenta Router-Ethics (C_conf/C_comp/C_fraud); em AP alimenta Pv (Cc/Ha/ROI/Mc). **Mesma camada técnica**, motor de decisão diferente. |
| **Aplicação AP sugerida** | Adotar ADR-010 integralmente. Adicionar conector ao Pv como output adicional. |
| **Esforço estimado conversão** | 0h (decisão arquitetural; implementação herda) |
| **Dependências** | Ativo R2 (Complexity Score do Router) |

**Síntese:** Conversão zero. E3 vira engine compartilhada MC×AP.

---

### Ativo A5 — ADR-011 Arquitetura 3 Cérebros → Arquitetura 4 Cérebros AP

| Campo | Valor |
|---|---|
| **Localização canônica MC** | `03-GOVERNANCA/adrs/MC-ADR-011-Arquitetura3Cerebros-v1_0-2026-0509.md` (3,1 KB) |
| **Filtros atendidos** | F2 + F3 + F4 |
| **Carimbo de conversão** | 🟡 LEVE |
| **Valor estratégico AP** | Define a Trinity: Cérebro 1 (Documentação - laboratório vivo) + Cérebro 2 (Vault Obsidian - memória canônica) + Cérebro 3 (Claude.ai Project Knowledge - mesa de julgamento). Para AP, **adicionar Cérebro 4: Vault AP separado** (ou namespace AP dentro do Vault MC durante fase de incubação). Memória `project_omega` indica que MB-OMEGA-001 já cunhou conceito de Cérebros 1/2/3 do projeto Ω paralelo — AP segue padrão análogo. |
| **Aplicação AP sugerida** | `AP-ADR-001-Arquitetura4Cerebros-v1_0`: estende ADR-011 com Cérebro 4 dedicado AP. **[CONFIRMAR FOUNDER]:** AP terá Vault Obsidian separado de MC, ou namespace dentro do Vault MC nas primeiras fases (igual fizemos com `inventario-AP/`)? Recomendação: **namespace dentro do Vault MC** por 60-90 dias (incubação) → migrar para Vault AP separado quando volume justificar. |
| **Esforço estimado conversão** | 2-3h (escrever ADR AP herdando do MC) |
| **Dependências** | Decisão founder sobre fase incubação |

**Síntese:** **Ativo top-1 desta categoria.** Define a topologia arquitetural AP. Conversão leve porque o ADR base é compacto e claro.

---

### Ativo A6 — ADR-012 Stack LLM Multi-Modelo v1.1

| Campo | Valor |
|---|---|
| **Localização canônica MC** | `03-GOVERNANCA/adrs/MC-ADR-012-StackLLM-MultiModelo-v1_1-2026-0513.md` (12,8 KB) — CANÔNICA CORRENTE (v1.0 superseded) |
| **Filtros atendidos** | F2 + F3 + F4 |
| **Carimbo de conversão** | 🟢 ZERO |
| **Valor estratégico AP** | Stack LLM consolidada: **GAIA-4B** (português especializado previdenciário) + **Sabiá-4 Maritaca** (PT-BR raciocínio) + **Claude via Bedrock sa-east-1** (raciocínio sofisticado, gateway Anthropic via AWS — não-transferência LGPD) + **Llama 3.3 70B via Groq** (latência ultra-baixa) + **LiteLLM** (orquestração) + **Albertina PT-BR** (embeddings). Status PROVISIONAL — gates DPA Anthropic + parecer Juliana 19/05. **Stack idêntica vale para AP** — os modelos são neutros à persona; o que muda são os prompts. |
| **Aplicação AP sugerida** | Adotar ADR-012 v1.1 idêntico. Prompts AP-específicos novos (vocabulário, persona high-net-worth, foco em revisões e tributação previdenciária). Aproveitar mesmo gateway Bedrock sa-east-1 (custo zero adicional). |
| **Esforço estimado conversão** | 0h (stack); ~10h adicional para prompts AP-específicos (que é trabalho de produto, não infraestrutura) |
| **Dependências** | DPA Anthropic, parecer Juliana 19/05 (gates MC; AP herda gates) |

**Síntese:** Conversão zero. Stack LLM é fundacional. AP é apenas mais um cliente do mesmo motor.

---

### Ativo A7 — ADR-014 Plataforma Assinatura Eletrônica (ZapSign)

| Campo | Valor |
|---|---|
| **Localização canônica MC** | `03-GOVERNANCA/adrs/MC-ADR-014-PlataformaAssinaturaEletronica-v1_0-2026-0510.md` (8,4 KB) |
| **Filtros atendidos** | F2 + F3 + F4 |
| **Carimbo de conversão** | 🟢 ZERO |
| **Valor estratégico AP** | ZapSign como plataforma única de assinatura eletrônica + A1 ICP-Brasil CertiSign. Cliente AP precisa do mesmo serviço (assinatura digital de contratos AP, TTA, RIPDs). |
| **Aplicação AP sugerida** | Adotar ZapSign idêntico. Possivelmente upgrade de plano para volume AP (a depender). |
| **Esforço estimado conversão** | 0h |

**Síntese:** Conversão zero.

---

### Ativo A8 — ADR-015 Features Avançadas ClickUp

| Campo | Valor |
|---|---|
| **Localização canônica MC** | `03-GOVERNANCA/adrs/MC-ADR-015-FeaturesAvancadas-ClickUp-v1_0-2026-0512.md` (20,2 KB) · PROVISIONAL |
| **Filtros atendidos** | F2 + F3 + F4 |
| **Carimbo de conversão** | 🟡 LEVE |
| **Valor estratégico AP** | Decisão arquitetural Modelo A + Linked/Dependencies/TIML + cidadao_id_hash + 4 fases adoção. Princípios cunhados: #11 (governança N8N), #12 (Custom Field > Task Central), #13 (View > TIML), #14 (webhook + polling). **AP herda decisões + cria Space AP separado** com mesma estrutura de Custom Fields adaptada para mandante (não cidadão). |
| **Aplicação AP sugerida** | `AP-ADR-002-FeaturesAvancadas-ClickUp-Space-AP-v1_0`: herda ADR-015 + define Space AP separado com: Custom Fields para Pv (Cc/Ha/ROI/Mc), `mandante_id_hash` (similar a `cidadao_id_hash`), Tags específicas AP. |
| **Esforço estimado conversão** | 2-3h |
| **Dependências** | SALT_AP (similar a SALT_MC do Igor) — gerar separado para evitar correlação entre Vaults MC e AP. |

**Síntese:** Carimbo leve. Decisões herdadas + adaptação localizada.

---

### Ativo A9 — ADR-016 Compliance Documental Anti-Injection

| Campo | Valor |
|---|---|
| **Localização canônica MC** | `03-GOVERNANCA/adrs/MC-ADR-016-ComplianceDocumental-AntiInjection-v1_0-2026-0514.md` (7,2 KB) · PROVISIONAL |
| **Filtros atendidos** | F2 + F3 + F4 |
| **Carimbo de conversão** | 🟢 ZERO |
| **Valor estratégico AP** | **3 Pilares anti-injection**: (1) PDF/A-2u + JSON-LD (Camada 0); (2) Sanitização E4.5 (ExifTool + qpdf + mc-pdf-audit); (3) Disclosure IA (CFOAB 001/2024). Conformidade Resolução CNJ 615/2025 + Recomendação CFOAB 001/2024 + OWASP LLM01 + NIST AI 600-1. **Crítico em AP** — caso AP frequentemente vai a contencioso onde adversários podem tentar prompt injection no dossiê do cliente. Origem: MB-029 caso TRT-8 Parauapebas 12/05/2026 (Galileu detectou prompt injection em fonte branca). |
| **Aplicação AP sugerida** | Adotar ADR-016 idêntico. Aplicar pipeline anti-injection a TODO dossiê AP. Considerado **mandatório** para entrega ao cliente. |
| **Esforço estimado conversão** | 0h |

**Síntese:** Conversão zero. **Em AP é ainda mais crítico** que em MC — risco reputacional altíssimo.

---

### Ativo A10 — ADR-019 PROVISIONAL Limitação MCP Drive

| Campo | Valor |
|---|---|
| **Localização canônica MC** | `03-GOVERNANCA/patches/MC-ADR-019-LimitacaoMCP-Drive-v0_1-PROVISIONAL-2026-0514.md` |
| **Filtros atendidos** | F2 + F3 |
| **Carimbo de conversão** | 🟢 ZERO |
| **Valor estratégico AP** | Decisão arquitetural sobre limites do MCP Drive (Google Drive ↔ workflow LLM). Limitação técnica universal — vale para qualquer namespace. |
| **Aplicação AP sugerida** | Adotar idêntico. |
| **Esforço estimado conversão** | 0h |

**Síntese:** Conversão zero.

---

### Ativo A11 — MC-SPEC ADR009b TTA Igor v1.0

| Campo | Valor |
|---|---|
| **Localização canônica MC** | `02-ARQUITETURA/specs/MC-SPEC-ADR009b-TTA-Igor-v1_0-2026-0430.md` (28,5 KB) |
| **Filtros atendidos** | F2 + F3 + F4 |
| **Carimbo de conversão** | 🟡 LEVE |
| **Valor estratégico AP** | Especificação técnica do TTA (Termo de Transferência Autorizada) para o backend Igor implementar. Define API endpoints, máquina de estados S1→S2→S3, validações guard, integração ZapSign. **Spec técnica direta** — backend AP usa o mesmo TTA com namespace AP. |
| **Aplicação AP sugerida** | Adotar spec; eventualmente passar para o Igor com escopo "implementar TTA também para Space AP" como sprint posterior. |
| **Esforço estimado conversão** | 1-2h (apenas adicionar namespace AP na spec) |
| **Dependências** | Igor backend |

**Síntese:** Carimbo leve.

---

### Ativo A12 — MC-SPEC ClickUp v3.1.1 Módulo B CustomFields

| Campo | Valor |
|---|---|
| **Localização canônica MC** | `02-ARQUITETURA/specs/MC-SPEC-ClickUp-v3_0-MODULO-B-CustomFields-v3_1_1-Canonizado.md` (19,6 KB) — substitui v3.0.1 |
| **Filtros atendidos** | F2 + F3 + F4 |
| **Carimbo de conversão** | 🟠 MÉDIA |
| **Valor estratégico AP** | Especificação detalhada dos Custom Fields ClickUp do MC (vínculo Custom Field → fase E0-E7 → obrigatoriedade → automação). Para AP, **a estrutura sobrevive** mas os campos mudam: (a) campos vulnerabilidade (IVCAD, IVS, PcD) **descartados** ou tornados opcionais; (b) campos novos para AP (Patrimônio, Faixa IRPF, Regime Tributário, Holding Familiar, Complementar Privada PGBL/VGBL); (c) campo `mandante_id_hash` no lugar de `cidadao_id_hash`. |
| **Aplicação AP sugerida** | `AP-SPEC-ClickUp-CustomFields-v1_0`: herda estrutura MC + curadoria de campos para AP. |
| **Esforço estimado conversão** | 4-6h |
| **Dependências** | Ativo A8 (ADR-015), Pv definições |

**Síntese:** Carimbo médio. Estrutura herdada, campos curados.

---

### Ativo A13 — MC-SPEC Playwright MeuINSS v1.0

| Campo | Valor |
|---|---|
| **Localização canônica MC** | `02-ARQUITETURA/specs/MC-SPEC-PLAYWRIGHT-MEUINSS-v1_0-2026-0327.md` (20 KB) |
| **Filtros atendidos** | F2 + F3 + F4 |
| **Carimbo de conversão** | 🟢 ZERO |
| **Valor estratégico AP** | Especificação RPA Playwright para automação no portal Meu INSS: protocolo de requerimento, consulta CNIS, baixa de comunicados. **Funcionalidade neutra à persona** — automação INSS funciona igual para vulnerável ou high-net-worth. |
| **Aplicação AP sugerida** | Adotar idêntico. Eventuais novos fluxos AP-específicos (e.g., automação consulta CNIS empresarial, protocolo recurso CRPS) seriam extensões posteriores. |
| **Esforço estimado conversão** | 0h |

**Síntese:** Conversão zero.

---

### Ativo A14 — MC-Spec-Driven-Workflow v1.0

| Campo | Valor |
|---|---|
| **Localização canônica MC** | `02-ARQUITETURA/specs/MC-Spec-Driven-Workflow-v1_0-2026-0404.md` (14 KB) |
| **Filtros atendidos** | F2 + F3 |
| **Carimbo de conversão** | 🟢 ZERO |
| **Valor estratégico AP** | Metodologia Spec-Driven (specifica antes de implementar) — referência aplicada em todo o MC. Universal. |
| **Aplicação AP sugerida** | Adotar como princípio de desenvolvimento AP. |
| **Esforço estimado conversão** | 0h |

**Síntese:** Conversão zero.

---

### Ativo A15 — MC-SPEC IdentidadeVisual Técnico v2.1 + Reprodutibilidade

| Campo | Valor |
|---|---|
| **Localização canônica MC** | `02-ARQUITETURA/specs/MC-SPEC-IdentidadeVisual-Tecnico-v2_1-2026-0515.md` (27,2 KB) + `01-IDENTIDADE/MC-SPEC-IdentidadeVisual-Reprodutibilidade-v1_0-2026-0514.md` |
| **Filtros atendidos** | F2 + F3 |
| **Carimbo de conversão** | 🟡 LEVE |
| **Valor estratégico AP** | Tokens canônicos: **Diamante 700 #0F1E3D + Ouro Selo #C9A961**. Tipografia: **Fraunces + Inter + JetBrains Mono**. Foundation v0.3 PROVISIONAL SELADA (10 páginas tokens canônicos em `05-ESTRATEGIA/design-system/foundation-v0_3/`). Visual Law UI Kit (26 cartões + 3 superfícies). **Os tokens cromáticos são premium-aderentes por design** — Diamante (institucional) + Ouro (status) servem AP sem nenhuma alteração. O que muda: marca (substituir logo MC por logo AP futuro) + alguns componentes específicos. |
| **Aplicação AP sugerida** | Adotar tokens cromáticos + tipográficos idênticos. Spec Visual Law UI Kit pode ser herdada (mesmas 26 cartas servem AP). Marca AP a desenvolver em sprint dedicada (não nesta missão). |
| **Esforço estimado conversão** | 2h (extrair tokens canônicos; identidade visual AP-específica é tarefa de outro projeto) |
| **Dependências** | Marca AP (não cunhada) |

**Síntese:** Carimbo leve. Diamante 700 + Ouro Selo já está alinhado com expectativa AP.

---

### Ativo A16 — MC-PROCESSO-Jornada E0E7 Mestre v1.3.1

| Campo | Valor |
|---|---|
| **Localização canônica MC** | `04-OPERACAO/protocolos/MC-PROCESSO-Jornada_E0E7_Mestre-v1_3_1-2026-0509.md` |
| **Filtros atendidos** | (catalogado em T2.3 como P2) |
| **Carimbo de conversão** | 🟠 MÉDIA (herda de P2) |
| **Valor estratégico AP** | Cross-reference T2.3 P2. Spec do processo Jornada. Não duplicar catalogação. |

**Síntese:** Cross-reference T2.3.

---

### Ativo A17 — MC-INFRA Servidor Hostinger Acessos v1.0

| Campo | Valor |
|---|---|
| **Localização canônica MC** | `02-ARQUITETURA/infra/MC-INFRA-Servidor_Hostinger_Acessos-v1_0-2026-0415.md` |
| **Filtros atendidos** | F2 + F3 + F4 |
| **Carimbo de conversão** | 🟢 ZERO |
| **Valor estratégico AP** | Infraestrutura servidor Hostinger 31.97.167.252 — host de workflows N8N, Coolify, MCPs, etc. **Catalogado em T2.5 como S1 (Stack & Infra)** — repete aqui apenas como referência ADR-adjacente. |

**Síntese:** Cross-reference T2.5.

---

## 3 · Ativos descartados com nota

| Ativo | Razão do descarte |
|---|---|
| ADR-007 Campo de Precificação v3.8 | Pricing Φ MC não aplicável AP (decisão founder selada: AP usa Pv) |
| ADR-013 Convenções Operacionais IVCAD-MC | IVCAD-MC é instrumento de vulnerabilidade — irrelevante AP |
| MC-SPEC Marketplace Critérios Admissão (v1.0 e v1.1) | AP não tem marketplace de advogados (decisão founder) |
| MC-SPEC Marketplace Selo Premium | Idem |
| SPEC-instagram-mc v1.0 | Instagram MC, não aplicável AP (canal de divulgação diferente) |
| MC-SPEC IdentidadeVisual Tecnico v1.0 (archived) | Versão antiga, superada por v2.1 |
| MC-SPEC IdentidadeVisual Tecnico v2.0 | Versão intermediária, superada por v2.1 |
| MC-SPEC VisualLaw PaletaJuridica v0.1 PROVISIONAL | Paleta MC vulnerável-friendly; AP usa Diamante/Ouro |
| MC-CARTA SUPERSEDED SPEC | Documento de supersedência histórico |
| MC-CANONICO IdentidadeVisual SeloOficial ERRATA v1.0 | Selo MC, não aplicável AP |
| MC-CANONICO Vocabulario IdentidadeVisual ERRATA v1.0 | Vocabulário MC |
| MC-MB040 SisterClaude.ai32 OperacaoClaudeDesign | MB operacional MC |
| MC-MB043 Housekeeping Vault MB042 | MB operacional MC |
| MC-PROMPTS VisualLaw B1-B4 Dossie PROVISIONAL | Prompts visuais MC |
| ADR-007 com adornos OBSIDIAN (em 02) | Duplicata de governança (cobre-se via 03) |
| MC-MAPA Vault v1.0/v1.1/v1.2 | Mapas do Vault MC, não diretamente aplicáveis AP |
| Comprovação Atividade Rural (verticais/) | Verticais MC; AP não cobre rural especificamente |
| MC-ANALISE GAIA Arquitetura LLM | Análise técnica que motivou ADR-012 — cobre-se via A6 |
| MC-ANALISE Tamanho Mercado Judicial v1.0/v1.1 | Análise mercado vulneráveis MC; AP é nicho diferente |
| MC-ANALISE Ecossistema IA Vertical Agentica v2.0 | Análise de mercado MC |
| MC-RADAR Galileu Anti-Injection TRT-8 | Caso radar; substância já em ADR-016 |
| MC-CHANGELOG Juridico v2.0 | Catalogado em T2.1 (Grimório Ativo 11) |

---

## 4 · Lacunas Detectadas

| Lacuna | Por que importa |
|---|---|
| **AP-ADR-001 Arquitetura 4 Cérebros** | Estende ADR-011 com Cérebro AP separado |
| **AP-ADR-002 Features Avançadas ClickUp Space AP** | Estende ADR-015 |
| **AP-ADR-003 Stack KYC/AML** | MC zero; AP precisa de stack para Fraudscore reformulado (R3) |
| **AP-ADR-004 Pricing Pv** | AP-only — cunhada em MB-AP-001 (`AP-ADR-001-PricingPorROI-v1_0-2026-0520.md`) |
| **AP-ADR-005 Modelo de Sub-contratação Advogado Concierge** | Para casos contenciosos quando AP precisa de advogado credenciado (não-marketplace) |
| **AP-SPEC ClickUp CustomFields** | Espelha A12 com curadoria AP |
| **AP-SPEC Marca Visual** | Identidade visual AP (sub-projeto dedicado) |
| **AP-SPEC Backoffice Conciliação Patrimonial** | Para clientes empresários, conciliação previdenciário × tributário × patrimonial |

---

## 5 · Recomendações Operacionais

1. **Adoções imediatas (Sprint 1 AP, 30 dias):** A1, A2, A3, A4, A6, A7, A9, A10, A13, A14 — todos com conversão zero. ~5h totais de housekeeping (criar namespaces).
2. **Cunhagens leves (Sprint 2 AP, 60 dias):** A5 (4 Cérebros), A8 (ClickUp Space AP), A11 (TTA AP namespace), A15 (Tokens AP). ~10-15h.
3. **Cunhagens médias (Sprint 3 AP, 90 dias):** A12 (CustomFields completo). ~6h.
4. **Lacunas a cunhar do zero (Sprint 4-5):** AP-ADR-003 (KYC/AML), AP-ADR-005 (Sub-contratação), AP-SPEC Marca Visual. ~30-50h.

**Esforço total ADRs & Specs AP:** ~50-75h.

---

**AP-INVENTARIO-ADRsSpecs v1.0 · SELADO 20/05/2026**
Executor: Claude Code DELL · MB-AP-002 · Tarefa 2.4 de 8
∞
