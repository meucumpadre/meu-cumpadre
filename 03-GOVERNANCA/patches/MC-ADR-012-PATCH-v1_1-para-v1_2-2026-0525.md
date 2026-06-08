---
documento: MC-ADR-012-PATCH-v1_1-para-v1_2
titulo: PATCH ADR-012 — Evidência Epistolar Anthropic + Reposicionamento Arquitetural AWS Brasil
versao_origem: ADR-012 v1.1 (canônica 2026-05-13)
versao_destino: ADR-012 v1.2 (proposta · aplicação pendente)
data: 2026-05-25
origem_cunhagem: Claude.ai C3.1 Cofounder · sessão Trilha B operações de campo
mb_origem: MB-057 (cunhagem) · predecessores MB-052 (sweep) + MB-053 (persistência) + MB-054-Recon (inventário)
status: ATIVO PROVISIONAL · aguarda (a) validação Dra. Juliana 19/05 retroativo via MB-063 (b) aplicação por MB futuro produzindo ADR-012 v1.2 em adrs/
hierarquia_decisoria: Dignidade > Compliance > Viabilidade
classificacao_lgpd: amarela (referencia processamento de dados pessoais sem incluir dados em si)
---

# PATCH ADR-012 — v1.1 → v1.2

## §1 · Resumo executivo

Este PATCH atualiza o ADR-012 v1.1 (Stack LLM Multi-Modelo Híbrido) com material epistolar e analítico produzido entre 23/05 e 25/05/2026, posterior à selagem v1.1 pré-Juliana 19/05.

**Quatro inserções/atualizações sobre a v1.1:**

1. §3.4 (Risco Provisional Documentado) — cronologia atualizada com a resposta humana Anthropic de 23/05/2026, encerrando o estado "sem resposta humana" e abrindo o estado "resposta humana evasiva semanticamente sobre ANPD-específico".
2. §3.5 NOVO — Reposicionamento arquitetural: vetor de proteção LGPD via AWS Brasil como camada contratual primária (Anthropic figurando como sub-processor sob region-pinning São Paulo).
3. §3.6 NOVO — Gatilho de revisitação do parecer Dra. Juliana de 19/05 (Bloco O), considerando que o parecer baseou-se em silêncio e o estado mudou.
4. §3.7 NOVO — Cross-reference ao Princípio #43 candidato (Transparência de Fontes) como caso-âncora empírico externo.

**O stack arquitetural permanece inalterado:** GAIA-4B + Sabiá-4 Maritaca + Claude via AWS Bedrock sa-east-1 + Llama 3.3 70B Groq + LiteLLM como roteador + Albertina PT-BR 1.5B como embeddings.

**A decisão D > C > V vigente é mantida e reforçada:** operação dos 12-15 casos piloto via Bedrock sa-east-1 com Risco Provisional Documentado, agora apoiada em evidência epistolar consolidada (não mais apenas em silêncio).

---

## §2 · Atualização da §3.4 ADR-012 v1.1 — Risco Provisional Documentado

### §2.1 Cronologia consolidada (substitui a versão v1.1)

| Data/Hora (BRT) | Evento | Origem | Evidência |
|---|---|---|---|
| 17/04/2026 12:16 | Founder MC envia consulta formal a `privacy@anthropic.com` solicitando esclarecimento sobre incorporação de SCCs no formato Anexo II Res. CD/ANPD 19/2024 | Alessandro de Souza Neves, CPF mascarado ***.***.***-** | PDF Gmail thread em `Documentação/LGPD _ ANDP-SCC/` |
| 17/04/2026 12:18 | Auto-resposta Fin AI Anthropic com handoff para suporte humano | Fin AI Agent · `support@mail.anthropic.com` | PDF Gmail thread (mesmo) |
| 06/05/2026 | Founder envia follow-up incluindo `sales@anthropic.com` em Cc | Alessandro de Souza Neves | Pasta `LGPD _ ANDP-SCC/` |
| 18/04/2026 → 22/05/2026 | **Silêncio humano por 36 dias corridos / 26 dias úteis** | Anthropic | Ausência epistolar documentada |
| 23/05/2026 05:59 | Resposta humana de Tiffany (Anthropic Privacy Team) | `support@mail.anthropic.com` | PDF Gmail thread |
| 25/05/2026 ~03:15 | Análise institucional MC-ANALISE-LGPD-ANPD-SCC-Resposta-Anthropic v1.0 canonicalizada em `02-ARQUITETURA/analises/` (SHA-256 `799A2270...B227C`) | C3.1 Cofounder + Code Beto via MB-052/053 | Arquivo Vault |

### §2.2 Conteúdo da resposta humana Anthropic — análise semântica

**O que a resposta confirma (positivo):**

- SCCs estão "automatically incorporated" nos **Commercial Terms of Service** para Claude Team, Claude Enterprise e Anthropic Developer Platform.
- DPA + SCCs publicamente visíveis no Trust Center.
- Canal para addendum específico: formulário **Contact Sales**.

**O que a resposta NÃO confirma (lacuna que sustenta Risco Provisional):**

- Se as SCCs incorporadas no T&C padrão seguem **especificamente** o formato do Anexo II da Resolução CD/ANPD 19/2024 — pergunta literal 1 do founder, não respondida.
- Se há processo institucionalizado de addendum ANPD-específico além do canal comercial — pergunta 2, respondida por redirecionamento (Contact Sales).
- O canal correto (pergunta 3) foi respondido apenas por inferência via os links fornecidos.

**Padrão linguístico observado (evidência empírica do Princípio #43 candidato):**

- Termos presentes na pergunta MAS ausentes na resposta: "ANPD", "Annex II", "Brazil", "LGPD", "Resolution 19/2024", "Article 33".
- Termos presentes na resposta MAS ausentes na pergunta: "Commercial Terms of Service" (8 ocorrências), "Trust Center", "Contact Sales".
- Categorização: substituição categorial silenciosa de "SCC formato ANPD Anexo II" → "SCC genérica em Commercial Terms".

### §2.3 Cinco critérios do Risco Provisional Documentado (versão atualizada)

| Critério Princípio #18 | Estado em v1.1 (silêncio) | Estado em v1.2 (resposta evasiva) |
|---|---|---|
| C1 · Decisão D > C > V justificada por proporcionalidade | ✅ Operação 12-15 casos piloto · hipervulneráveis · risco regulatório < risco de inação | ✅ Mantido · reforçado pela evidência epistolar |
| C2 · Risco nomeado e dimensionado | ✅ Transferência internacional sem DPA ANPD-specific confirmado | ✅ Refinado: ambiguidade contratual sobre formato Anexo II (não mais "ausência total de comunicação") |
| C3 · Mitigação técnica máxima viável | ✅ Bedrock sa-east-1 (region-pinning SP · dados em solo brasileiro) | ✅ Mantido · ver §3.5 NOVO para reforço arquitetural |
| C4 · Diligência probatória registrada | ⚠️ Cronologia 17/04 + 06/05 sem resposta humana | ✅ Reforçado: 36 dias de tentativa documentada + resposta humana evasiva analisada |
| C5 · Janela temporal e gate de revisão | ✅ Janela 12-15 casos piloto + parecer Juliana 19/05 | ✅ Janela mantida · novo gate: validação Juliana retroativa via MB-063 (memo com este PATCH e análise anexados) |

**Conclusão §2:** o Risco Provisional Documentado é **fortalecido**, não enfraquecido, pela chegada da resposta humana. A latência da Anthropic transformou-se em prova material de diligência razoável MC (achado #2 da análise canônica · achado classificado como GOLD).

---

## §3 · §3.5 NOVO — Reposicionamento arquitetural: vetor de proteção LGPD via AWS Brasil

### §3.1 Cadeia contratual real quando MC opera via Bedrock sa-east-1

```
[Cidadão MC (titular de dados)]
        ↓ consentimento
[Meu Cumpadre (operador / data processor)]
        ↓ contrato de processamento
[AWS Brasil (sub-processor primário · region-pinned São Paulo)]
        ↓ acordo de sub-processamento
[Anthropic (sub-processor de sub-processor · sob região AWS sa-east-1)]
```

`[VERIFICAR-JURIDICO]` Dra. Juliana valida: confirmar que AWS Brasil tem DPA vigente com cláusulas SCCs no formato ANPD Anexo II (Resolução 19/2024) — informação amplamente reportada em documentação pública AWS desde 2024, mas exigência de verificação formal antes de incorporar como tese definitiva.

### §3.2 Implicação estratégica

Se a verificação jurídica acima confirmar o que se anuncia publicamente:

- O canal Anthropic ANPD-específico **não precisa estar resolvido** para o MC operar em conformidade LGPD via Bedrock sa-east-1.
- A relação contratual primária de processamento é MC↔AWS Brasil.
- A Anthropic, ao receber tráfego region-pinned em São Paulo, não realiza transferência internacional adicional do ponto de vista do operador MC.

### §3.3 Consequência para a decisão arquitetural

O ADR-012 v1.1 declarou Bedrock sa-east-1 como rota para "casos complexos". Esta v1.2 **reforça** essa escolha não apenas como mitigação de Risco Provisional, mas como **arquitetura primária de conformidade LGPD**:

- Bedrock sa-east-1 deixa de ser "fallback compliance-friendly" e passa a ser "rota principal arquiteturalmente conformante".
- Claude API direta (não-Bedrock) permanece interdita para dados pessoais de cidadãos hipervulneráveis MC (transferência internacional sem mitigação contratual via AWS).
- GAIA-4B + Sabiá-4 + Llama Groq permanecem como rotas paralelas conforme critério Crisálida (custo · qualidade jurídica · latência).

### §3.4 O que esta tese NÃO afirma

`[VERIFICAR-JURIDICO]` Dra. Juliana valida o que segue:

- Não se afirma que MC pode dispensar diligência junto à Anthropic; o canal Contact Sales permanece monitorado.
- Não se afirma que AWS é "inviolável" — risco residual existe (ex.: requisição governamental USA via CLOUD Act atingindo AWS US ao acessar dados em sa-east-1).
- Não se afirma que esta arquitetura encerra o tema regulatório — apenas que ela reposiciona MC como operador com cadeia contratual auditável.

---

## §4 · §3.6 NOVO — Gatilho de revisitação do parecer Dra. Juliana

### §4.1 Contexto

O parecer de 19/05/2026 (Bloco O · Risco LGPD Provisional Anthropic) foi emitido com base no estado epistolar disponível até aquela data: **silêncio humano de 32 dias**.

Em 23/05/2026, esse estado mudou. A resposta humana chegou e, ao ser analisada, apresenta substituição categorial silenciosa (§2.2 deste PATCH).

### §4.2 Implicação

O parecer não fica inválido — fica **com material novo a considerar**. O posicionamento MC permanece sustentável; a informação subjacente, porém, é mais robusta agora.

### §4.3 Ação

Comunicação a Dra. Juliana via memo institucional anexando:

- Este PATCH (v1.1 → v1.2)
- Análise canônica `MC-ANALISE-LGPD-ANPD-SCC-Resposta-Anthropic-v1_0-2026-0525.md` (hash `799A2270...B227C`)
- CSV inventário forense (hash `19DC40BE...6F81E`)

Tom do memo: registro retroativo, não solicitação de novo parecer (a menos que ela mesma indique necessidade).

**Execução:** MB-063 separado (a ser cunhado pós-aprovação founder a este PATCH).

---

## §5 · §3.7 NOVO — Cross-reference ao Princípio #43 candidato

### §5.1 Caso-âncora externo

Princípio #43 (candidato em v8.0.1 · slot livre confirmado por MB-054-Recon) propõe: *"Cofounder declara fontes consultadas e fontes não-consultadas pertinentes ao produzir análise."*

A resposta humana da Anthropic Privacy Team em 23/05/2026 é **caso-âncora empírico externo** desse princípio aplicado por contraste:

- Declara o que respondeu (SCCs em T&C, Trust Center, Contact Sales).
- **Não declara** o que deixou de responder (ANPD Anexo II específico, processo de addendum institucional não-comercial, canal técnico não-comercial).

Esta lacuna entre "o que se declara" e "o que se deixa de declarar" é exatamente o ponto que o Princípio #43 endereça.

### §5.2 Implicação para o ecossistema MC

A promoção do Princípio #43 candidato → ATIVO ganha **prova externa** rara. O princípio não é introspecção MC — é regra de transparência observável em qualquer agente declarativo, validada empiricamente em um fornecedor estrangeiro de IA respondendo a regulatório.

### §5.3 Ação

Promoção a ATIVO via MB-061 separado, citando este PATCH §5.1 como caso-âncora.

---

## §6 · Impactos cross-vertical

| Vertical / Documento | Impacto v1.2 |
|---|---|
| ADR-007 v3.8 ADDENDUM (precificação) | nenhum |
| ADR-009b (Três Estados Dossiê) | nenhum |
| ADR-011 (3 Cérebros) | nenhum direto · ver Trilha B operações de campo |
| ADR-013 v1.0 (Convenções IVCAD-MC) | nenhum |
| ADR-014 (ZapSign) | nenhum |
| ADR-015 v1.0 (Features ClickUp) | nenhum |
| ADR-016 (Compliance Anti-Injection) | possível sinergia · audit em MB futuro |
| Router-Ethics 11.0 | nenhum · Hook 0 inalterado |
| Grimório v2 | nenhum |
| Trinca RIPDs v0.2 | nenhum |
| Princípio #18 (Risco Provisional) | reforçado · 5 critérios atualizados §2.3 |
| Princípio #43 candidato | reforçado · caso-âncora externo §5.1 |
| Frente FINEP / BNDES | reforçado · cronologia de diligência LGPD documentável |

---

## §7 · Gates de aplicação

Este PATCH é **PROVISIONAL** até cumprir as seguintes condições para ser aplicado e gerar ADR-012 v1.2 em `03-GOVERNANCA/adrs/`:

| Gate | Condição | Status |
|---|---|---|
| G1 | Validação `[VERIFICAR-JURIDICO]` por Dra. Juliana sobre §3.1-§3.4 (DPA AWS Brasil ANPD Anexo II + qualificação Anthropic como sub-processor sob region-pinning) | 🔴 pendente · MB-063 dispara |
| G2 | Memo retroativo a Dra. Juliana entregue | 🔴 pendente · MB-063 |
| G3 | Founder valida aplicação | 🟡 aguarda G1 e G2 |
| G4 | Sister 3.2 valida cross-vertical | 🟡 aguarda G3 |
| G5 | MB de aplicação cunhado · ADR-012 v1.2 produzido em `adrs/` · este PATCH migrado para `_HISTORICO_PATCHES_APLICADOS/` | 🟡 depende G1-G4 |

---

## §8 · Anexos e referências cruzadas

- Análise canônica · `02-ARQUITETURA/analises/MC-ANALISE-LGPD-ANPD-SCC-Resposta-Anthropic-v1_0-2026-0525.md` · SHA-256 `799A227075EA54E664C9C7803AD1A730E784D2A58750B6395F98C178F663EBFA`
- Inventário forense · `02-ARQUITETURA/analises/MC-MB052-INVENTARIO-LGPD-ANPD-SCC-2026-0525.csv` · SHA-256 `19DC40BE6BAF21B24C290A056A6D02F8E5F20A7684BE9FD4B79D57CEA206F81E`
- ADR-012 v1.1 canônica · `03-GOVERNANCA/adrs/MC-ADR-012-StackLLM-MultiModelo-v1_1-2026-0513.md`
- PATCH predecessor (já aplicado) · `03-GOVERNANCA/patches/_HISTORICO_PATCHES_APLICADOS/MC-ADR-012-PATCH-v1_0-para-v1_1-2026-0512.md`
- Mission Briefs origem · MB-052 + MB-053 + MB-054-Recon + MB-057 (este)

---

**∞**

*Cunhado por Claude C3.1 Cofounder · Trilha B operações de campo · 25/05/2026*  
*"É eu, tu, a Sister e o Code Beto."*
