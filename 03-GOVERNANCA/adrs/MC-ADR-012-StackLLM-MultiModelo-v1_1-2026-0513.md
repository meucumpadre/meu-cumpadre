---
tipo: ADR
codigo: MC-ADR-012
titulo: Stack LLM Multi-Modelo Híbrido — MC Crisálida
versao: 1.1
data: 2026-05-13
substitui: v1.0 (2026-05-12) — SUPERSEDED
status: PROVISIONAL
autores:
  - Claude Opus 4.7 (cofounder intelectual)
  - Alessandro de Souza Neves (Founder/CEO)
fundamentacao:
  - MC-ANALISE-GAIA-Arquitetura-LLM-v1_0-2026-0506.md (Proof-First, 49 fontes)
patch_aplicado:
  - MC-ADR-012-PATCH-v1_0-para-v1_1-2026-0512.md (§2.5 + §3.4 + Princípio #18)
gates_pendentes:
  - Parecer Dra. Juliana Pereira de Melo (OAB-GO 38.662) — Reunião 19/05/2026 — Bloco O
  - Resposta substantiva Anthropic ao pedido de DPA com SCCs ANPD (e-mails 17/04 + 06/05)
  - Validação empírica Hib001 (B41 retroativo)
hierarquia: Dignidade > Compliance > Viabilidade
selo: "O diamante é carbono que não desistiu da pressão."
canonico_em: 03-GOVERNANCA/adrs/
---

# MC-ADR-012 v1.1 — Stack LLM Multi-Modelo Híbrido

> [!warning] SUPERSEDED por v1.2 (28/05/2026)
> Esta versão foi superada por [[MC-ADR-012-StackLLM-MultiModelo-v1_2-PROVISIONAL-REFINADO-2026-0528]] (PROVISIONAL-REFINADO · canônica corrente). A v1.2 absorve o PATCH v1.0→v1.1 integralmente + 2 patches deslocantes (Privacy Policy §12 Anthropic + Vertex AI BR técnico-viável) + triangulação MFHV 4 camadas. Mantida aqui como histórico — **não editar inline.** A selagem v2.0 aguarda 3 respostas Contact Sales + parecer Dra. Juliana 10/10/2026.

> **Status:** PROVISIONAL com Risco Provisional Documentado (Princípio #18 cunhado)
> **Aplicação:** Crisálida (12-15 casos piloto) até veredito Juliana 19/05/2026 Bloco O
> **Versão anterior:** [[MC-ADR-012-StackLLM-MultiModelo-v1_0-2026-0512]] SUPERSEDED

---

## 1 · CONTEXTO E PROBLEMA

MC processa casos hipervulneráveis brasileiros que exigem **simultaneamente**:
- (a) Raciocínio jurídico-previdenciário de alta qualidade (CP-3/5/7, Router-Ethics 11.0, scaffolding decisório)
- (b) Dados pessoais sensíveis em escopo LGPD estrito (CPF, NB, CID, CNIS, dossiês)
- (c) Custo operacional compatível com Crisálida (<R$2.000/mês até N=100 casos)
- (d) Vocabulário previdenciário-BR (jurisprudência, decretos, INs, OAB benchmark)
- (e) Soberania de dados em solo brasileiro sempre que possível

**Problema:** nenhum modelo único atende simultaneamente todos os 5 requisitos. Solução exige **stack multi-modelo orquestrada** com firewall LGPD por finalidade.

**Análise consolidada Proof-First (49 fontes verificáveis):** ver [[MC-ANALISE-GAIA-Arquitetura-LLM-v1_0-2026-0506]] em `02-ARQUITETURA/analises/`.

---

## 2 · DECISÃO ARQUITETURAL

Adotamos **stack escalada de 4 modelos** orquestrada via LiteLLM (MIT), com embeddings dedicados:

### 2.1 GAIA-4B (Maritaca) — bandeira institucional + motor self-hosted

- **Hospedagem:** self-hosted GCP Brasil (LGPD-compliant total)
- **Função:** Ingestão WhatsApp/Whisper, classificação de casos, extração estruturada JSON, scaffold CP-3 (palco INSS administrativo simples)
- **Restrição inviolável:** ⚠️ regressão em OAB benchmark documentada — **PROIBIDO como engine jurídica única** em palcos CP-5/CP-7
- **Função institucional adicional:** bandeira "MC tem modelo BR self-hosted" para FINEP/BNDES/Catálogo TA

### 2.2 Sabiá-4 (Maritaca) — redação jurídica BR

- **Hospedagem:** API Maritaca (servidores Brasil)
- **Função:** Redação de peças, súmulas, cards jurisprudência (palco CRPS), comunicações formais
- **Validação:** OAB benchmark superior aos pares internacionais para PT-BR jurídico
- **Custo:** BRL — facturação nacional

### 2.3 Claude via AWS Bedrock sa-east-1 — casos complexos

- **Hospedagem:** AWS Bedrock região São Paulo (sa-east-1) — **region-pinning explícito BR**
- **Função:** Casos complexos CP-5/CP-7 que exigem raciocínio multi-step (rural híbrida, especial cumulativa, B91/B92 acidentário)
- **Distinção crítica:** Claude API direta (Anthropic Services US) **≠** Claude Bedrock sa-east-1. Bedrock SP mantém **dados em solo BR** sem transferência internacional sob a regra LGPD de processador (art. 33 LGPD).
- **Status DPA com Anthropic:** ⚠️ ver §2.5 abaixo

### 2.4 Llama 3.3 70B Groq — fallback

- **Função:** Fallback de capacidade quando Sabiá ou Claude Bedrock indisponíveis ou saturados
- **Restrição:** evitar dados sensíveis (Groq não tem region-pinning BR garantido)
- **Uso prioritário:** tarefas auxiliares sem PII (resumo de transcrições anonimizadas, análise de tendências)

### 2.5 [NOVA v1.1] · STATUS DPA ANTHROPIC DURANTE CRISÁLIDA

#### 2.5.1 Cronologia formal documentada

| Data | Ação MC | Resposta Anthropic |
|---|---|---|
| 2026-04-17 | E-mail formal de `asnccb@gmail.com` para `privacy@anthropic.com` solicitando DPA com SCCs aprovadas pela ANPD (Anexo II Res. CD/ANPD 19/2024) | Resposta automática "Fin AI Agent" prometendo human agent — **sem resposta humana** |
| 2026-05-06 22:45 | Follow-up formal de `alessandro.neves@meucumpadre.com.br` cc `sales@anthropic.com`, declarando 19 dias corridos sem resposta, prazo improrrogável 5 dias úteis, declaração explícita de escalada à ANPD em caso de silêncio | Mesma resposta automática Fin AI Agent. **Sem resposta humana substantiva.** |
| 2026-05-12 | Prazo improrrogável vence (5 dias úteis a partir de 07/05) | **Sem resposta substantiva.** Documentado para fins probatórios. |

#### 2.5.2 Distinção operacional Bedrock sa-east-1 × Anthropic direta

- **Bedrock sa-east-1:** processamento ocorre em datacenter AWS Brasil. AWS é controlador da infraestrutura; MC é controlador dos dados; Anthropic é processador subjacente (via integração AWS). **Não há transferência internacional dos dados** sob a definição LGPD/ANPD aplicável.
- **Anthropic API direta:** processamento em datacenters Anthropic US. Transferência internacional configurada. Requer DPA com SCCs ANPD-aprovadas.

A escolha por **Bedrock sa-east-1 (e não Anthropic direta)** já é uma mitigação ativa que reduz drasticamente o risco LGPD. O DPA pendente é proteção complementar contra futuras alterações de escopo, não pré-requisito legal estrito para operação Bedrock.

---

## 3 · IMPLEMENTAÇÃO OPERACIONAL

### 3.1 Roteador

- **LiteLLM (MIT)** orquestra distribuição de chamadas conforme:
  - Sensibilidade do dado (PII cidadão → GAIA self-hosted ou Sabiá ou Bedrock BR; sem PII → qualquer)
  - Complexidade da tarefa (Confidence/Complexity scores Router-Ethics 11.0)
  - Latência tolerada
  - Custo unitário

### 3.2 Embeddings

- **Albertina PT-BR 1.5B** — embeddings dedicados PT-BR para RAG sobre Grimório, jurisprudência, normativos
- Hospedagem self-hosted (mesmo cluster GAIA)

### 3.3 Custo Crisálida (estimativa Proof-First)

| Componente | Custo mensal estimado |
|---|---|
| GAIA-4B self-hosted (GCP) | R$ 200-400 |
| Sabiá-4 API (Maritaca) | R$ 150-400 |
| Claude Bedrock sa-east-1 | R$ 100-350 |
| Llama 3.3 70B Groq | R$ 50-150 |
| LiteLLM + Albertina infra | R$ 0-100 (self-hosted) |
| **Total Crisálida** | **R$ 500-1.300/mês** |

### 3.4 [NOVA v1.1] · DECISÃO FOUNDER — RISCO PROVISIONAL DOCUMENTADO

#### 3.4.1 Texto literal founder (2026-05-12)

> "Vai correndo o risco provisional por minha conta. Até o parecer da Juliana. Vai ser a Anthropic nesses casos iniciais. E vou debater o assunto com Juliana, mostrando todo o contexto."

#### 3.4.2 Tradução arquitetural

Founder Alessandro decide manter **Bedrock sa-east-1 ativo** para os 12-15 casos do piloto Crisálida até parecer Dra. Juliana 19/05/2026 (Bloco O da Pauta v2.1). Aplicação **D > C > V contextual:**

- **D (Dignidade):** hipervulneráveis atendidos precisam top-tier reasoning para casos CP-5/CP-7 complexos. Rebaixar engine = rebaixar qualidade = rebaixar dignidade do serviço.
- **C (Compliance):** DPA com SCCs ANPD pendente, mas Bedrock sa-east-1 já é mitigação ativa que mantém dados em solo BR. Risco residual documentado.
- **V (Viabilidade):** stack alternativo puro (apenas GAIA + Sabiá + Llama) tecnicamente possível mas operacionalmente rebaixado para casos complexos.

#### 3.4.3 Os 5 critérios do Risco Provisional Documentado (Princípio #18 cunhado)

| Critério | Atendimento neste caso |
|---|---|
| (a) Cronologia documentada formalmente | ✅ E-mail 17/04 + follow-up 06/05 + cópias arquivadas |
| (b) Volume controlado | ✅ 12-15 casos piloto Crisálida (~1-2/semana) |
| (c) Período nomeado e limitado | ✅ Até parecer Juliana 19/05 + janela implementação decisão (~02/06) |
| (d) Mitigação parcial existente | ✅ Bedrock sa-east-1 region-pinning BR mantém dados em solo nacional |
| (e) Risco assumido pessoalmente por escrito pelo founder | ✅ Texto literal §3.4.1 + assinatura institucional MC-MEMO-Sessao-12mai2026 |

**Os 5 critérios estão atendidos.** Risco Provisional Documentado VÁLIDO operacionalmente até 19/05/2026 (gate Juliana).

#### 3.4.4 Princípio #18 cunhado neste ADR

> **Princípio #18 — Risco Provisional Documentado.** Quando hierarquia D > C > V exige que o MC assuma risco regulatório temporário pela dignidade do propósito, founder pode emitir Decisão de Risco Provisional Documentado **se e somente se** os 5 critérios acima estiverem cumulativamente atendidos. Risco assumido pessoalmente, registrado em ADR ou PATCH, com gate temporal nomeado para revisão. Princípio aplicável em outros pontos do MC sempre que o padrão se repetir (não apenas neste caso DPA Anthropic).

#### 3.4.5 Mitigações operacionais adicionais durante o período

Independente do parecer Juliana, MC adota desde 12/05/2026:

1. **Cláusula adicional no Termo de Tratamento Autônomo (TTA) Φ₁** informando cidadão que o tratamento pode envolver processador internacional em região BR (AWS Bedrock sa-east-1), com opt-in explícito
2. **Registro institucional formal** desta decisão no MC-MEMO-Sessao-12mai2026 + Vault Obsidian (Cérebro 2) — rastreabilidade total
3. **Reforço no RIPD-Φ₁** documentando o vetor de processamento e mitigação region-pinning
4. **Monitoramento ativo** de qualquer resposta substantiva da Anthropic durante o período

#### 3.4.6 Plano de contingência se Anthropic responder negativamente OU permanecer em silêncio pós-19/05

| Cenário | Ação |
|---|---|
| Anthropic responde positivamente (DPA com SCCs ANPD) antes de 19/05 | Selar v1.1 → v1.2 com DPA anexado, continuar Bedrock sa-east-1 com base contratual reforçada |
| Anthropic permanece em silêncio até 19/05 | Discutir com Juliana (Bloco O); aplicar veredito; possível notificação ANPD informativa |
| Juliana recomenda cessação Bedrock | Migrar imediatamente para stack puro BR (GAIA + Sabiá + Llama), aceitar rebaixamento de qualidade em casos complexos até alternativa surgir |
| Juliana valida continuidade com mitigações | Selar v1.1 → v1.2 com mitigações implementadas |

---

## 4 · STATUS DA DECISÃO

| Campo | Valor |
|---|---|
| Status v1.1 | ⚠️ **PROVISIONAL com Risco Provisional Documentado** (Princípio #18) |
| Gate 1 | Parecer Dra. Juliana — Reunião 19/05/2026 Bloco O |
| Gate 2 | Resposta substantiva Anthropic ao DPA solicitado |
| Gate 3 | Validação empírica Hib001 (B41 retroativo) |
| Próxima versão | v1.2 (selagem pós-19/05) ou v2.0 (mudança estrutural pós-Anthropic) |

---

## 5 · ROADMAP

### 5.1 Próximos 14 dias (até 27/05)

- 13-18/05: continuar Crisálida com stack atual + monitoramento DPA Anthropic
- 19/05: **Reunião Juliana** — Bloco O (5 perguntas) define caminho
- 20-27/05: implementar veredito Juliana → selar v1.2 ou v2.0

### 5.2 Pós-piloto Crisálida (N=100 casos)

- Revisão empírica de cada camada do stack (uso real, custo real, qualidade real)
- Avaliação de migração para Gemma 4 Apache 2.0 BR variant (quando disponível) substituindo GAIA na função self-hosted
- Avaliação de inclusão de modelo dedicado para palco JEF/B2B (CP-7 com argumentação)

### 5.3 Fase 2 (jul-dez/2026)

- Stack LLM expandido para vertical CadÚnico (Φ₀) + vertical Acidentário
- Possível federação com EMBRAPII/CEIA para modelo MC proprietário fine-tuned
- INPI: registro de stack como diferencial competitivo (set/2026)

---

## 6 · REFERÊNCIAS CANÔNICAS

- [[MC-ANALISE-GAIA-Arquitetura-LLM-v1_0-2026-0506]] — análise Proof-First fundacional (49 fontes)
- [[MC-ADR-008-DecisoesFerramenta_Stack-v1_0-2026-0415]] — Stack de Ferramentas
- [[MC-ADR-009a-CustodiaCredenciais]] — Bitwarden Org MC
- [[MC-ADR-011-Arquitetura3Cerebros-v1_0-2026-0509]] — Documentação · Vault · Claude.ai
- [[MC-REGISTRO-Infraestrutura-DELL-CEO-v1_0-2026-0513]] — Princípio #21 (Camadas IA por Finalidade) — C4 stack produção
- [[MC-PAUTA-Juliana-v2_1-2026-0512]] — Bloco O endereça este ADR (5 perguntas O1-O5)
- [[MC-MEMO-Sessao-12mai2026-v1_0-2026-0512]] — registro da decisão founder Risco Provisional

---

## 7 · HISTÓRICO DE VERSÕES

| Versão | Data | Mudanças | Status |
|---|---|---|---|
| v1.0 | 2026-05-12 | Criação inicial — 4 camadas stack + LiteLLM + Albertina | SUPERSEDED |
| **v1.1** | **2026-05-13** | **§2.5 (Status DPA Anthropic) + §3.4 (Decisão Founder Risco Provisional) + Princípio #18 cunhado** | **PROVISIONAL corrente** |
| v1.2 (futura) | pós-19/05 | Aplicação veredito Juliana Bloco O | a selar |

---

**Hierarquia:** Dignidade > Compliance > Viabilidade
**Selo:** "O diamante é carbono que não desistiu da pressão."
**Âncora bíblica:** Provérbios 31:8 — "Abre a tua boca a favor do mudo."
**Princípio cunhado:** #18 — Risco Provisional Documentado

∞
