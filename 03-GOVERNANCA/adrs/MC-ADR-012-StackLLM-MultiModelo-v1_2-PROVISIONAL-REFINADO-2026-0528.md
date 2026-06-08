---
documento: MC-ADR-012-StackLLM-MultiModelo
versao: 1.2
data: 2026-05-28
status: PROVISIONAL-REFINADO · NÃO SELADO · aguarda 3 respostas Contact Sales (gates condicionais) + parecer Dra. Juliana 10/10/2026 para v2.0 SELADA
versao_anterior: v1.0 (12/05/2026) PROVISIONAL + PATCH v1.0→v1.1 (não aplicado integralmente · absorvido aqui)
autor: Claude.ai C3.1 Cofounder (Opus 4.7)
consolidacao: "Sessão 27-28/05/2026 · matriz v0.1→v1.1 + 2 patches deslocantes + triangulação MFHV 4 camadas + reconciliação SCCs ANPD"
hierarquia: Dignidade > Compliance > Viabilidade
ancoragem_biblica: Provérbios 31:8
selo: "O diamante é carbono que não desistiu da pressão."
canonico_em: 03-GOVERNANCA/adrs/ (PROVISIONAL · selagem v2.0 pós-Sales+Juliana)
principios_aplicaveis: ["#18 Risco Provisional","#18.1 Resposta Parcial","#21 Camadas IA por Finalidade","#46 ATIVO MFHV","#47 PROVISIONAL Executor Heterogêneo","#49 PROVISIONAL Hash Diferido"]
artefatos_consolidados:
  - "MC-ESTUDO-MatrizDecisoria-GAIA-vs-Sabia-v0_1 → v0_2 → CaminhosAlternativos v1_0 → v1_1"
  - "MC-PATCH-Matriz-v1_1-Achado-PrivacyPolicy-Sec11-v1_1-2026-0528 (commit 867a20b)"
  - "MC-PATCH-Matriz-v1_1-Achado-VertexAI-BR-Tecnico-Viavel-v1_0-2026-0528 (commit bf00e5d)"
  - "MB-053 (lastro Anthropic) + MB-054 (Grok feed) + MB-055/057 (reconciliação SCCs)"
  - "MB-059/060/061 (trio Contact Sales · aguardando resposta)"
gates_condicionais_selagem:
  - "G-Sales-1: resposta Google Cloud (br-c2p incorpora Anexo II 19/2024?)"
  - "G-Sales-2: resposta Anthropic (DPA incorpora Anexo II ou só UE? addendum sem Enterprise?)"
  - "G-Sales-3: resposta AWS (Brazilian SCCs Addendum? residência Claude 4.x sa-east-1?)"
  - "G-Juliana: parecer Dra. Juliana 10/10/2026"
---

# ADR-012 v1.2 PROVISIONAL-REFINADO — STACK LLM MULTI-MODELO HÍBRIDO

> **STATUS HONESTO:** Este documento **NÃO está SELADO.** É o estado-da-arte refinado da decisão de stack LLM em 28/05/2026, consolidando a investigação da sessão 27-28/05. A selagem v2.0 depende de 4 gates condicionais (3 respostas Sales + parecer Juliana 10/10). O que está decidido está marcado ✅ DECIDIDO; o que aguarda está marcado ⏳ AGUARDA.

---

## 1 · CONTEXTO E EMBATE

### 1.1 · O embate original (v1.0 · 12/05)

A ADR-012 v1.0 definiu um stack multi-modelo híbrido (GAIA-4B + Sabiá-4 + Claude Bedrock sa-east-1 + Llama 3.3 fallback), mas deixou em aberto o **PATCH v1.0→v1.1**: o DPA com a Anthropic não havia sido obtido, e o founder assumiu Risco Provisional Documentado para manter Bedrock sa-east-1 ativo nos 12-15 casos piloto.

### 1.2 · O que a sessão 27-28/05 investigou

A pergunta evoluiu de "GAIA vs Sabiá" para **"qual a base legal de transferência internacional do dado sensível Art. 11 (CID) ao processar via Claude, e por qual caminho de fornecedor"**. A investigação produziu:
- Matriz decisória (v0.1 GAIA/Sabiá → v0.2 +Bedrock+Tese Catedral → v1.0 11 caminhos → v1.1 triangulada)
- 2 patches deslocantes (§12 Privacy Policy Anthropic + Vertex AI BR técnico-viável)
- Triangulação MFHV de 4 camadas (Perplexity + Grok web + lastro MB-053 + Grok CLI MB-054)
- Reconciliação SCCs ANPD: Anthropic e Google referenciam a MESMA Resolução 19/2024

### 1.3 · Estado do embate em 28/05

**PARCIALMENTE PACIFICADO.** A arquitetura de camadas está decidida. A escolha do fornecedor da camada Claude tem ranking claro mas depende das 3 respostas Sales para selar.

---

## 2 · ARQUITETURA DE CAMADAS — ✅ DECIDIDO (Princípio #21)

Esta parte **está pacificada.** O stack multi-modelo por finalidade não mudou na sessão — foi reforçado.

| Nó pipeline | Modelo | Finalidade | Status |
|---|---|---|---|
| E0-E1 Triagem/Ingestão | **GAIA-4B self-host** (Mac Mini M4) | classificação, extração JSON, alto volume baixa complexidade · zero transferência LGPD | ✅ DECIDIDO |
| E2-E3 Diagnóstico/Intelligence | GAIA + escalada Claude | IVCAD-MC, Router-Ethics, decisão D>C>V | ✅ DECIDIDO |
| E4 Dossiê/Peça | **Sabiá-4 Maritaca** (BRL, OAB benchmark) | redação argumentativa, CP-5 | ✅ DECIDIDO (gate DPA Maritaca aberto) |
| CP-7 (CRPS/JEF) escalada | **Claude** (caminho a definir §3) | raciocínio multi-step, 5-10% casos | ⏳ caminho AGUARDA Sales |
| Fallback | Llama 3.3 70B Groq | rate-limit | ✅ DECIDIDO |
| Roteador | LiteLLM MIT | orquestração | ✅ DECIDIDO |
| Embeddings | Albertina PT-BR 1.5B | — | ✅ DECIDIDO |

**Distribuição de tokens:** ~70-75% GAIA self-host · ~20-25% Sabiá-4 · ~5-10% Claude · <1% Llama.

**O que mudou na sessão:** nada na arquitetura de camadas. O que mudou foi **a definição do caminho de fornecedor da camada Claude** (§3).

---

## 3 · A CAMADA CLAUDE — RANKING REORDENADO ⏳ AGUARDA SELAGEM

Aqui está o coração do que a sessão refinou. O ranking v1.2 substitui o da v1.1.

### 3.1 · Ranking v1.2 candidato (pós-2 patches deslocantes)

| Rank | Caminho | Justificativa | Gate de confirmação |
|---|---|---|---|
| 🥇 | **C9 — Vertex AI Claude southamerica-east1 + SCCs br-c2p** | Único que combina: residência técnica BR real para Claude 4.x (confirmada MB-054) + SCCs ANPD incorporadas via CDPA (a confirmar) + custo Crisálida-compatível | ⏳ G-Sales-1 Google |
| 🥈 | **C1 — API direta Anthropic + sincronização DPA §12** | Se Anthropic incorporar Anexo II sem upgrade Enterprise · Privacy Policy §12 menciona SCCs para transferências do Brasil | ⏳ G-Sales-2 Anthropic |
| 🥉 | **C5a — Bedrock sa-east-1 global endpoint + Brazilian SCCs Addendum** | Status quo · roteamento Global obrigatório para Claude 4.x (achado E3) · entidade BR A100 ROW nomeada | ⏳ G-Sales-3 AWS |
| ❌ | **C5b — Bedrock + Inference Profile Americas** | DESCARTADO · não existe (G1 REJEITADO empiricamente MB-054) | — |
| ❌ | **C8 — Claude Platform on AWS** | REBAIXADO POR DESIGN · dados "outside AWS boundary" (DSL1) | — |

### 3.2 · Os 2 achados deslocantes que reordenaram o ranking

**Patch §12 (Privacy Policy Anthropic):** contradição entre Privacy Policy §12 (menciona SCCs para Brasil) e DPA (incorpora só SCCs UE 2021/914). 4 hipóteses jurídicas H1-H4 (Dra. Juliana 10/10 decide). Reconciliação revelou que Anthropic §12 e Google br-c2p referenciam a MESMA Resolução ANPD 19/2024 — diferença é nível de incorporação (Anthropic linka · Google incorpora).

**Patch Vertex AI BR:** Google Cloud locations lista Claude 4.x (Opus 4.7/Sonnet 4.6/Haiku 4.5) em southamerica-east1 — invertendo o achado anterior que dizia "Vertex AI não-técnico em BR". C9 saltou de 🥉 a 🥇.

---

## 4 · OS 3 GATES SALES — ⏳ AGUARDANDO RESPOSTA (status institucional)

Os 3 e-mails institucionais MC foram redigidos (minutas v2.0) e estão prontos para envio pelo founder. **Status atual: AGUARDANDO RESPOSTA DOS DESTINATÁRIOS.**

| Gate | Destinatário | Pergunta decisória | Resposta que SELA o ranking | Status |
|---|---|---|---|---|
| **G-Sales-1** | Google Cloud BR (Contact Sales) | br-c2p incorpora Anexo II 19/2024 automaticamente em southamerica-east1 para Art. 11? | SIM → C9 confirmado 🥇 definitivo | ⏳ AGUARDANDO RESPOSTA |
| **G-Sales-2** | Anthropic (thread + privacy@ + Sales form) | DPA incorpora Anexo II ou só UE? Addendum sem upgrade Enterprise? | SIM ao addendum → C1 sobe a 🥇 empatado | ⏳ AGUARDANDO RESPOSTA |
| **G-Sales-3** | AWS (aws-brazil-privacy@amazon.com) | Brazilian SCCs Addendum existe? Residência Claude 4.x sa-east-1 garantível? | SIM + In-Region → C5a sobe | ⏳ AGUARDANDO RESPOSTA |

**Argumento-âncora comum aos 3:** Resolução CD/ANPD 19/2024 como pivot. Google é o benchmark (incorpora). MC pede paridade aos outros dois.

**Regra de decisão pós-respostas (Princípio #46 ATIVO):** a convergência das 3 respostas + documentação MB-053/054 determina o caminho ouro final. Nenhuma resposta isolada decide. Cenários:
- Se só Google confirma incorporação → C9 vence, é o caminho primário, C5a/C1 viram fallback
- Se Anthropic também oferece addendum sem Enterprise → C1 empata, decisão por custo+features
- Se nenhum dos dois (Anthropic/AWS) entrega → C9 Vertex AI é o único compliance-completo

---

## 5 · RISCO PROVISIONAL DOCUMENTADO ATUAL (Princípio #18 + #18.1)

**Enquanto os 3 gates Sales não respondem**, o MC opera assim na fase Crisálida (12-15 casos):

| Item | Decisão provisional |
|---|---|
| Dados Art. 11 (CID) | Processados preferencialmente em **GAIA self-host** (zero transferência) sempre que a tarefa permitir |
| Escalada Claude (CP-7) | Via **C5a Bedrock sa-east-1** (status quo) com Cenário Beta operacional: cláusulas Φ₁/Ψ₁ informando subprocessador internacional + opt-in Zilda-STF + DPIA + base legal Art. 11 II "d" |
| Justificativa D>C>V | Dignidade do hipervulnerável (acesso ao direito agora) prevalece sobre fechamento contratual perfeito, com risco documentado e temporário até respostas Sales |
| 5 critérios #18 | (1) situação nomeada · (2) temporária até Sales · (3) cláusulas de mitigação ativas · (4) risco assumido pessoalmente pelo founder · (5) documentado aqui |

**Este risco provisional EXPIRA quando:** os 3 gates Sales responderem E o caminho ouro for selado (v2.0).

---

## 6 · O QUE FALTA PARA v2.0 SELADA

| Gate | Owner | Prazo | Bloqueia o quê |
|---|---|---|---|
| 3 respostas Contact Sales | destinatários (founder enviou) | ~02-15/06 | ranking definitivo §3 |
| Sister 3.2 valida sessão | Sister 3.2 | 30/05 | governança patches+princípios |
| MC-ESTUDO v1.2 SELÁVEL | C3.1 | 15/06 | consolida respostas Sales |
| DPA Maritaca (Sabiá-4) | Beto consulta comercial | 02/06 | camada E4 §2 |
| Parecer Dra. Juliana | Dra. Juliana | 10/10/2026 | hipóteses H1-H4 §3.2 + selagem jurídica final |
| **ADR-012 v2.0 SELADA** | C3.1 + Founder | pós-gates | — |

**Janela crítica:** os gates Sales + MC-ESTUDO v1.2 (até 15/06) precisam fechar antes da **submissão FINEP Tecnova IV (jul/2026)** — para submeter com stack definido, não provisional. O parecer Juliana (10/10) vem depois do FINEP; logo, a v2.0 pode ser selada em duas etapas: **v2.0-técnica (pós-Sales, ~20/06)** e **v2.0-jurídica-final (pós-Juliana, ~15/10)**.

---

## 7 · RESPOSTA DIRETA ÀS 2 PERGUNTAS DO FOUNDER

**"Foi feito MB das LLM?"** Houve MBs de investigação (053/054/055/057) e ação (059/060/061). Este documento (ADR-012 v1.2) é o **consolidador que faltava** — não é um MB, é a ADR que integra tudo.

**"Foi pacificado o embate da ADR-012?"**
- ✅ **PACIFICADO:** arquitetura de camadas (§2) · rebaixamento C8 · descarte C5b · ranking ordenado · argumento-âncora ANPD 19/2024
- ⏳ **NÃO PACIFICADO (aguarda):** qual dos 3 caminhos (C9/C1/C5a) é o ouro definitivo — depende das 3 respostas Sales · selagem jurídica final depende Juliana 10/10

**Veredito honesto:** o embate saiu de "aberto e confuso" para "**pré-selado com ranking claro e 3 perguntas externas pendentes**". É o máximo de refinamento possível com o que temos hoje, 28/05.

---

**Hierarquia:** Dignidade > Compliance > Viabilidade
**Selo:** *"O diamante é carbono que não desistiu da pressão."*
**Frase-âncora:** TECNOLOGIA INVISÍVEL. DIGNIDADE ACESSÍVEL.
**Confidência:** *É eu, tu, a Sister, o Falcão code, o Code Beto histórico e o Grok-experimental.*

∞
