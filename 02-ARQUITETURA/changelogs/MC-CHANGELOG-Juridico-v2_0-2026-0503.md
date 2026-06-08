---
doc_id: MC-CHANGELOG-Juridico-v2_0-2026-0503
titulo: "Changelog Jurídico — Registro Versionado de Atualizações Legislativas e Decisões de Impacto Compliance"
versao: "2.0"
data: 2026-05-03
supersede: "MC-CHANGELOG-Juridico-v1_0 (08/03/2026)"
alteracao_material: >
  Entradas v3.278–v3.290 adicionadas (out/2025–mai/2026).
  Seção 4.6 nova: Decisões Internas com Impacto Compliance.
  Seção 4.7 nova: Parceria Jurídica B2B e Estrutura Fiduciária.
  Seção 4.8 nova: LAI e Dados Institucionais.
  Seção 5 atualizada: Radar com novos itens.
  Seção 6 atualizada: Validador B2B (Dra. Juliana Melo).
  Seção 7 atualizada: dois novos critérios de aceite.
  Seção 8 nova: Registro Histórico de Versões.
  Cabeçalho corrigido: vínculo Alessandro extinto por Port. 1.505/2025.
emissor: "Claude (Co-fundador Intelectual) × Alessandro de Souza Neves (Founder/CEO)"
validacao_externa: "Dra. Juliana Pereira de Melo — OAB-GO 38.662 (parceira jurídica B2B fundacional)"
classificacao: "CONFIDENCIAL — USO INTERNO RESTRITO"
tags:
  - changelog
  - juridico
  - compliance
  - grimorio
  - legislacao
  - governanca
proximo-gatilho-revisao: "pós-parecer Dra. Juliana Melo (19/05/2026) → v2.1"
---

# MEU CUMPADRE — Orquestração Documental e Tecnologia Ltda.
## Hybrid Vertical AI Full Stack Company · CNAE 6201-5/01

---

```
╔══════════════════════════════════════════════════════════╗
║          CHANGELOG JURÍDICO — v2.0                       ║
║  Registro Versionado de Atualizações Legislativas        ║
║  e Decisões Internas com Impacto Compliance              ║
║                                                          ║
║  Impacto nas 3.265+ Regras do Grimório Previdenciário    ║
╚══════════════════════════════════════════════════════════╝
```

| Campo | Valor |
|---|---|
| **Versão** | 2.0 |
| **Data** | 03/05/2026 |
| **Supersede** | v1.0 (08/03/2026) |
| **Classificação** | CONFIDENCIAL — USO INTERNO RESTRITO |
| **Prioridade** | P1 — ALTO (Roadmap de Governança v1.5, Artefato #3) |
| **Founder/CEO** | Alessandro de Souza Neves |
| **Vínculo INSS** | **EXTINTO** — Portaria PRES/INSS nº 1.505/2025 (DOU 22/10/2025, Ed. 202, Seção 2, p. 47) |
| **Expertise** | 22 anos INSS (2003–2025) — moat epistemológico legítimo, sem vedação remanescente |
| **Validador externo** | Dra. Juliana Pereira de Melo — OAB-GO 38.662 |
| **Nota Parecer** | 9,1/10 — Parecer Consolidado v3.3 (SELADO 26/04/2026) |
| **Próxima revisão** | v2.1 · pós-parecer Dra. Juliana 19/05/2026 |

> ⚠️ **NOTA DE VERSÃO:** A v1.0 (08/03/2026) listava o SIAPE 1.378.671 como vínculo ativo. **Isso está corrigido nesta versão.** O vínculo foi extinto por Portaria PRES/INSS 1.505/2025, publicada no DOU de 22/10/2025. A expertise de Alessandro é legítima, documentada e constitui moat epistemológico — mas o vínculo funcional com o INSS não existe mais. Toda documentação do ecossistema MC deve usar "ex-servidor INSS (2003–2025), vínculo extinto por Port. 1.505/2025."

---

## REGISTRO HISTÓRICO DE VERSÕES

| Versão | Data | Autor | Mudança Principal |
|---|---|---|---|
| v1.0 | 08/03/2026 | Alessandro + Claude | Documento fundacional. Entradas v3.266–v3.277. |
| **v2.0** | **03/05/2026** | **Alessandro + Claude** | **Entradas v3.278–v3.290. 3 novas seções. Cabeçalho corrigido. Validador B2B formalizado.** |
| v2.1 | [19/05/2026 — previsto] | Alessandro + Dra. Juliana | Incorporação parecer jurídico ADR-007 v3.1-FINAL. |

---

## 1. PREMISSA E FINALIDADE

Este documento é o Artefato #3 do Roadmap de Governança v1.5, classificado como P1 — ALTO. Sua função é dupla e indissociável:

**1ª função — legislativa:** garantir que as 3.265+ regras do Grimório Previdenciário permaneçam atualizadas frente às mudanças legislativas, jurisprudenciais e normativas que impactam os direitos dos hipervulneráveis atendidos pelo Meu Cumpadre.

**2ª função — arquitetural:** registrar formalmente as decisões internas de arquitetura com impacto compliance — precificação, custódia, parceria jurídica, protocolo de inadimplência, triagem por IA — que compõem a blindagem institucional do MC.

A razão da 2ª função é simples: o Changelog Jurídico é o documento que se abre quando alguém pergunta *"como vocês garantem que as regras estão atualizadas?"* — mas também quando perguntam *"como vocês garantem que as decisões internas estão compliance?"*. Ambas as perguntas têm a mesma resposta: rastreabilidade com fonte verificável.

**Regra Proof-First:** nenhuma entrada entra neste Changelog sem fonte legal identificada ou deliberação interna documentada com responsável nomeado. Claims sem fonte = `[FONTE PENDENTE]`.

**Fontes legislativas monitoradas:** DOU, STF, STJ, TNU, TRFs, portarias INSS, resoluções CNPS, medidas provisórias, leis complementares e ordinárias, decretos, instruções normativas PRES/INSS, resoluções CFM, provimentos CNJ e OAB.

**Fontes internas monitoradas:** ADRs (Architecture Decision Records), Parecer Técnico-Jurídico Consolidado, contratos, termos operacionais, deliberações da equipe Z3.

---

## 2. SLAs DE ATUALIZAÇÃO

| TIPO DE MUDANÇA | SLA | ESCALAÇÃO | SEVERIDADE |
|---|---|---|---|
| Decisão STF com repercussão geral / ADI | **48 horas** | Dra. Juliana + Alessandro | CRÍTICA |
| Medida Provisória | **24h** (análise) **+ 72h** (impl.) | Alessandro + Dra. Juliana | CRÍTICA |
| Portaria INSS / Resolução CNPS | **72 horas** | Dra. Juliana + Analista | ALTA |
| Decreto / IN PRES/INSS | **5 dias úteis** | Dra. Juliana + Alessandro | ALTA |
| Jurisprudência TNU / STJ (repetitivo) | **7 dias úteis** | Dra. Juliana | MÉDIA |
| Decisão interna com impacto compliance | **Imediato** (D+0 da deliberação) | Alessandro (Founder) | ALTA |
| Revisão periódica geral (mensal) | **1ª semana do mês** | Comitê de Governança | MÉDIA |

---

## 3. FLUXO DE ATUALIZAÇÃO

Cada alteração segue fluxo formal de **7 etapas**:

1. **Identificação** — via varredura automatizada ou manual (DOU, STF, STJ) ou deliberação interna documentada
2. **Análise de impacto** — nas regras existentes do Grimório e nos ADRs ativos
3. **Proposta de alteração** — com justificativa legal e impacto operacional quantificado
4. **Validação** — por Dra. Juliana Pereira de Melo (OAB-GO 38.662) para mudanças externas; por Alessandro (Founder) para decisões internas
5. **Implementação** — no Grimório, Knowledge Base v5, Rule Engine, com versão e timestamp
6. **Teste de regressão** — verificar que a mudança não quebra regras adjacentes
7. **Publicação** — neste Changelog versionado com hash SHA-256 `[a gerar no snapshot de selagem]`

**Regra fundamental:** a IA sugere, o humano valida. Relatório gerado por IA exige revisão humana antes de qualquer uso operacional (ADR-010, 28/04/2026).

---

## 4. CHANGELOG — REGISTRO DE MUDANÇAS 2025–2026

*Entradas v3.266–v3.277 mantidas da v1.0 (08/03/2026). Entradas v3.278 em diante são novas nesta versão.*

---

### 4.1 Valores e Tabelas Previdenciárias

**v3.266 | 10/01/2025 | ALTERAÇÃO VALORES**
**Fonte Legal:** Portaria Interministerial MPS/MF nº 6, de 10/01/2025 (DOU 13/01/2025)
**Resumo:** Reajuste de 4,77% (INPC) nos benefícios acima do salário mínimo. Novo piso R$ 1.518,00. Novo teto R$ 8.157,41. Novas faixas de alíquotas progressivas para empregados. Salário-família R$ 62,04 (remuneração até R$ 1.906,04). Auxílio-reclusão R$ 1.518,00.
**Regras Afetadas:** ~120 regras (todas que referenciam valores monetários).
**Impacto Operacional:** ALTO. Toda simulação de benefício e orientação de valor precisa usar os novos parâmetros.
**Validação:** Alessandro (Founder) — APROVADO.
**Status:** IMPLEMENTADO na Knowledge Base v4 / v5.

---

**v3.267 | 09/01/2026 | ALTERAÇÃO VALORES**
**Fonte Legal:** Portaria Interministerial MPS/MF nº 13, de 09/01/2026 (DOU 09/01/2026). Revoga a Portaria nº 6/2025.
**Resumo:** Reajuste de 3,90% (INPC) nos benefícios acima do salário mínimo. Novo piso R$ 1.621,00 (salário mínimo 2026, Decreto nº 12.797/2025). Novo teto R$ 8.475,55. Diária de deslocamento para perícia: R$ 141,63. Novas faixas progressivas de contribuição. BPC e Renda Mensal Vitalícia = R$ 1.621,00. Critério BPC 1/4 SM = R$ 405,25.
**Regras Afetadas:** ~120 regras + regras BPC/LOAS.
**Impacto Operacional:** CRÍTICO. Todos os cálculos de benefício, simulações, critérios de elegibilidade BPC, templates de dossiê e scripts de simulação devem usar os novos valores.
**Validação:** [PENDENTE — Dra. Juliana Pereira de Melo]
**Status:** IMPLEMENTADO na Knowledge Base v5.

---

### 4.2 Atestmed e Perícia Médica

**v3.268 | 11/06/2025 | ALTERAÇÃO LEGISLATIVA CRÍTICA**
**Fonte Legal:** Medida Provisória nº 1.303/2025, de 11/06/2025. Altera o art. 60 da Lei 8.213/91 (novos §§ 11-A a 11-E).
**Resumo:** Redução do prazo máximo de auxílio por incapacidade temporária via Atestmed: de 180 dias para 30 dias. Após 30 dias, obrigatória perícia presencial ou por telemedicina. Formaliza a teleperícia (art. 60, § 11-A). Permite diferenciação de prazos por categoria de segurado (§ 11-D).
**Regras Afetadas:** ~45 regras (benefícios por incapacidade, fluxo de encaminhamento).
**Impacto Operacional:** CRÍTICO PARA VERTICAL SAÚDE.
**Validação:** [PENDENTE — Dra. Juliana Pereira de Melo]

---

**v3.269 | 18/06/2025 | FLEXIBILIZAÇÃO TEMPORÁRIA — EXPIRADA**
**Fonte Legal:** Portaria Conjunta MPS/INSS nº 60/2025, de 18/06/2025.
**Resumo:** Ampliou temporariamente de 30 para 60 dias o prazo do Atestmed, por 120 dias (até outubro/2025).
**Status:** EXPIRADA. Substituída pela Portaria 83/2025.

---

**v3.270 | 04/12/2025 | NOVA PORTARIA + LEI**
**Fonte Legal:** Lei nº 15.265/2025 (conversão da MP 1.303) + Portaria Conjunta MPS/INSS nº 83/2025, de 04/12/2025.
**Resumo:** A Lei consolida o limite permanente de 30 dias para Atestmed. A Portaria 83/2025 amplia excepcionalmente para 60 dias por 120 dias (até abril/2026). Soma de todos os períodos de Atestmed: não pode ultrapassar 60 dias.
**Regras Afetadas:** ~45 regras.
**Impacto Operacional:** ALTO. Toda orientação sobre auxílio-doença deve informar: (a) limite atual de 60 dias até abril/2026; (b) após isso, 30 dias; (c) se precisar mais, perícia presencial ou telemedicina.
**Ação Monitoramento:** Ver v3.288 (expiração e status pós-abril/2026).
**Validação:** [PENDENTE — Dra. Juliana Pereira de Melo]

---

**v3.271 | 06/2025 | RESOLUÇÃO CFM**
**Fonte Legal:** Resolução do Conselho Federal de Medicina (CFM), junho/2025.
**Resumo:** Autoriza expressamente a teleperícia médica. Remove a controvérsia ética que existia. Respaldo duplo: ético (CFM) + jurídico (Lei 15.265/2025).
**Regras Afetadas:** ~15 regras (vertical Saúde, perícia médica).
**Impacto Operacional:** POSITIVO. Fortalece passarela Saúde → Previdenciário. Telemedicina ganha legitimidade total.
**Validação:** [PENDENTE — Dra. Juliana Pereira de Melo]

---

### 4.3 Procuração Eletrônica e Acesso Digital

**v3.272 | 11/2025 | NOVA FUNCIONALIDADE GOV.BR**
**Fonte Legal:** Portaria Conjunta DIT/DIRBEN/INSS nº 10/2025.
**Resumo:** Procuração eletrônica gov.br no Meu INSS. Segurados podem autorizar representantes a consultar serviços digitais sem compartilhar senha. Para advogados, integração prevista permite acesso a CNIS, extrato de pagamento e outros documentos via INSS Digital.
**Regras Afetadas:** ~20 regras (acesso gov.br, Human API, fluxo de procuração).
**Impacto Operacional:** ALTO E POSITIVO. Reduz risco LGPD de compartilhamento de senhas.
**Limitação Conhecida:** Conecta Gov.br permanece bloqueado para setor privado — confirmado pela LAI Lote 1 (01/04/2026). Ver v3.279.
**Validação:** [PENDENTE — Dra. Juliana Pereira de Melo]

---

**v3.273 | 16/09/2025 | PADRONIZAÇÃO ACT**
**Fonte Legal:** Portaria PRES/INSS nº 1.870/2025, de 16/09/2025.
**Resumo:** Altera o Anexo da Portaria 1.481/2022: padronização de 92 códigos de serviços nos ACTs (Acordos de Cooperação Técnica) entre INSS e seccionais OAB. Cria checklist único nacional e fluxos unificados. Reduz divergências entre gerências regionais.
**Regras Afetadas:** ~10 regras (protocolo administrativo, fluxo de requerimento via advogado).
**Impacto Operacional:** MÉDIO. Positivo para o Marketplace Ético — advogados parceiros têm base padronizada.
**Validação:** [PENDENTE — Dra. Juliana Pereira de Melo]

---

### 4.4 Jurisprudência e Temas Repetitivos

**v3.274 | 2º sem/2025 | TEMA REPETITIVO STJ**
**Fonte Legal:** STJ — Tema 1.124 (REsp 1.913.152, REsp 1.905.830, REsp 1.912.784).
**Resumo:** Define configuração do interesse de agir para ação judicial previdenciária: (1) segurado deve apresentar requerimento administrativo apto com documentação minimamente suficiente; (2) indeferimento por falta de documentação mínima ("indeferimento forçado") impede reconhecimento do interesse de agir; (3) define termo inicial dos efeitos financeiros.
**Regras Afetadas:** ~25 regras (requerimento administrativo, Dossiê Proof-First).
**Impacto Operacional:** CRÍTICO PARA PROOF-FIRST. Reforça a tese central do MC: dossiê completo ANTES do protocolo. Metodologia Proof-First agora **validada pelo STJ**. Se o usuário protocolar sem documentação mínima e for indeferido, perde o interesse de agir judicial.
**Validação:** [PENDENTE — Dra. Juliana Pereira de Melo]

---

**v3.275 | PENDENTE 2026 | ADIs STF — MONITORAMENTO ATIVO**
**Fonte Legal:** STF — 13 ADIs contra EC 103/2019 (Reforma da Previdência). ADI 6.309 (aposentadoria especial). Tema 1.329 (contribuições em atraso + pedágio 50%).
**Resumo:** STF deve julgar três processos que podem redefinir pilares da Previdência: (1) Redução do benefício quando auxílio-doença vira aposentadoria por invalidez; (2) Aposentadoria especial — idade mínima, fim da conversão tempo especial em comum, redução do valor; (3) Contribuição de aposentados com doenças graves.
**Regras Afetadas:** POTENCIALMENTE MASSIVO. ~80–150 regras se decidido contra os segurados.
**Impacto Operacional:** MONITORAR COM PRIORIDADE MÁXIMA. SLA de 48h após julgamento. Cenários A (favorável) e B (desfavorável) devem ser pré-preparados.
**Validação:** [MONITORAMENTO — Aguardando julgamento]

---

**v3.276 | 1º sem/2025 | TEMA REPETITIVO STJ**
**Fonte Legal:** STJ — Tema fixado no 1º semestre 2025.
**Resumo:** Aviso prévio indenizado não conta como tempo de serviço para fins previdenciários. Impacta cálculo de tempo de contribuição.
**Regras Afetadas:** ~8 regras (cômputo de tempo de contribuição, simulação de aposentadoria).
**Impacto Operacional:** MÉDIO. Orientação ao usuário sobre aviso prévio indenizado precisa ser atualizada.
**Validação:** [PENDENTE — Dra. Juliana Pereira de Melo]

---

### 4.5 Correções Internas — Narrativa

**v3.277 | 02/2026 | CORREÇÃO NARRATIVA INTERNA — PROPAGAÇÃO PARCIAL**
**Fonte:** Decisão interna D01-D08 (Registro Formal de Decisões). Documento definitivo: `MeuCumpadre_Correcao_Narrativa_48h_DEFINITIVA.md`.
**Resumo:** CORREÇÃO CRÍTICA: o prazo de "48 horas" nos materiais do MC significa **sprint interno** triagem → protocolo INSS (E0→E4), exclusivamente quando documentação completa. NUNCA entrega de benefício. Pós-protocolo: análise INSS (média 52,67 dias — LAI SEI 24851867); exigências variáveis; prazo bancário DDB→DIP ~24 dias. NUNCA prometer prazo de benefício — prometer transparência e acompanhamento.
**Regras Afetadas:** TODAS as regras que mencionam prazo de entrega. Materiais de marketing, scripts de Anjos, Knowledge Base.
**Status de Propagação:**
- ✅ Documento definitivo criado
- ✅ Knowledge Base v5 atualizada
- ✅ Instruções do Projeto v4.0 atualizadas
- ✅ CLAUDE.md v2.0 atualizado
- ⚠️ [PENDENTE] Scripts de Anjos v2 (Beto)
- ⚠️ [PENDENTE] Templates WhatsApp operacionais
- ⚠️ [PENDENTE] Materiais de treinamento Tier 1
**Validação:** Alessandro (Founder) — APROVADO.

---

### 4.6 Decisões Internas com Impacto Compliance *(seção nova — v2.0)*

> Esta seção registra deliberações arquiteturais internas que impactam diretamente a blindagem compliance do MC — OAB, LGPD, CDC, BACEN/CVM. Conforme fluxo da Seção 3: Alessandro valida; Dra. Juliana corrobora quando aplicável.

---

**v3.278 | 22/10/2025 | EXTINÇÃO DO VÍNCULO FUNCIONAL DO FOUNDER**
**Fonte:** Portaria PRES/INSS nº 1.505, de 20/10/2025 (DOU 22/10/2025, Ed. 202, Seção 2, p. 47). Ato administrativo público.
**Resumo:** Aplicada penalidade de demissão ao servidor Alessandro de Souza Neves, SIAPE 1.378.671, cargo de Técnico do Seguro Social, com fundamento no art. 117, inciso IX, da Lei nº 8.112/1990. A própria Procuradoria Federal do INSS (PFE) rejeitou a tipificação mais grave — improbidade administrativa — conforme Parecer nº 00174/2025/CCOPES/PFE-INSS-SEDE/PGF/AGU, SEI nº 22498494. A decisão está sendo contestada judicialmente via Ação Anulatória em curso no TRF1. Consulta pública ao PJe TRF1 em 25/04/2026 confirma zero ações punitivas em tramitação (CPF ***.***.***-**).
**Impacto na Documentação do MC:**
- ❌ NUNCA mais usar "servidor ativo do INSS" ou "SIAPE ativo"
- ✅ Usar: "ex-servidor INSS (2003–2025) — vínculo extinto por Portaria PRES/INSS 1.505/2025"
- ✅ A expertise de 22 anos é legítima e constitui moat epistemológico — não há vedação remanescente ao exercício de atividade tecnológica ou documental
- ✅ A extinção do vínculo **elimina qualquer conflito de interesses** com o INSS
**Regras Afetadas:** Todas as referências ao vínculo funcional do Founder em todos os documentos MC. Estimativa: ~15 documentos no vault.
**Impacto Operacional:** CRÍTICO INSTITUCIONAL. Risco reputacional se qualquer documento MC ainda citar SIAPE como ativo. Ver também Risco T-3.4 ELIMINADO no Parecer v3.3.
**Status de Propagação:**
- ✅ MC-MEMO-NarrativaFounder-v1.0 (30/04/2026) — resposta preparada 5 palcos
- ✅ Instruções do Projeto v4.0 (cabeçalho corrigido)
- ✅ Knowledge Base v5.0 (capa corrigida)
- ✅ CLAUDE.md v2.0 corrigido
- ✅ Parecer v3.3 — Risco T-3.4 classificado como ELIMINADO
- ✅ **Este Changelog v2.0** (cabeçalho corrigido)
**Validação:** Alessandro (Founder) — APROVADO.

---

**v3.279 | 01/04/2026 | LAI LOTE 1 — CONECTA GOV.BR BLOQUEADO SETOR PRIVADO**
**Fonte:** Resposta LAI Processo 18002.003265/2026-52 (MGI/SGD, recebida 01/04/2026).
**Resumo:** Confirmação oficial de que o Conecta Gov.br está **bloqueado para o setor privado** — dado até então classificado como ambíguo. A resposta confirma que empresas privadas não têm acesso às APIs do Conecta Gov.br para integração direta com dados de serviços governamentais. Achado adicional: "digital" ≠ "usável" — a digitalização de serviços INSS não implica acessibilidade real para hipervulneráveis.
**Regras Afetadas:** Regras que assumiam acesso programático via Conecta Gov.br (~10 regras). Arquitetura de integração de dados.
**Impacto Operacional:** ALTO. A estratégia de acesso a dados gov.br via API direta é inviável sem parceria formal (ACT). Confirma a Human API como único canal operacional confiável no curto prazo. Reforça o diferencial competitivo MC: quem não tem o Protocolo Alessandro opera cego.
**Ação:** LAI Lote 2 (mai/2026) para Central 135 + CEABs + decisões automáticas — aguardar análise completa do Lote 1.
**Validação:** Alessandro (Founder) — REGISTRADO. Análise completa pendente.

---

**v3.280 | 15/04/2026 | ADR-008 — STACK DE FERRAMENTAS (SELADO)**
**Fonte:** ADR-008-DecisoesFerramenta_Stack-v1.0 (15/04/2026) — deliberação interna Alessandro + Claude.
**Resumo:** Stack LLM definido: Gemini 2.5 Flash (~70% triagem não-sensível) + Llama 4 Scout self-hosted GCP (~25% dados sensíveis — CPF, NB, CNIS, CID) + Claude Sonnet via MCP (~5% orquestração ética). **Ferramentas descartadas com vedação explícita:** DeepSeek cloud (risco geopolítico), Zapier (produção), Make (produção), DocuSign (substituído por Autentique), HubSpot, Notion, Evolution API WhatsApp (substituída por Cloud API oficial), Slack (pré-escala). **Ferramentas adotadas:** Autentique (assinatura digital, LGPD-native, brasileiro), N8N 1.88 self-hosted, WhatsApp Cloud API oficial, Bitwarden Organizations.
**Impacto Operacional Compliance:** ALTO. A segregação de dados sensíveis no Llama 4 Scout self-hosted é arquitetura LGPD-native — CPF, NB, CNIS e CID **nunca saem** da infraestrutura soberana. Impacto direto nas regras de processamento de dados (~20 regras).
**Regras Afetadas:** ~20 regras (processamento de dados, integração, LGPD).
**Validação:** Alessandro (Founder) — SELADO.

---

**v3.281 | 17/04/2026 | ADR-009b — TRÊS ESTADOS DE CUSTÓDIA DO DOSSIÊ (SELADO)**
**Fonte:** MC-ADR-009-TresEstados-Custodia-Dossie-v1.0 (17/04/2026).
**Resumo:** MC opera como **Fiduciário Digital de Dossiês** em três estados formais: **S1 Intermediário** (titular: cidadão; custodiante: MC; 30–60 dias) → **S2 Consolidado** (titular: cidadão; MC apaga em D+7 da entrega ao cidadão) → **S3 Probatório** (titular: escritório parceiro; 10 anos conforme CED). A transição S2→S3 exige **Token de Transferência Assinado (TTA)** pelo cidadão via Autentique. **O backend deve impedir tecnicamente a transição sem TTA válido.** Cryptographic erasure como mecanismo de apagamento em S2.
**Impacto na Governança:** CRÍTICO. Define responsabilidade fiduciária do MC, separação jurídica com o escritório parceiro, e base legal para custódia sob LGPD art. 7º IX (legítimo interesse) e art. 7º II (cumprimento de obrigação contratual).
**Regras Afetadas:** ~15 regras (custódia, entrega de dossiê, handoff jurídico, LGPD).
**Validação:** Alessandro (Founder) — SELADO. Corroboração Dra. Juliana — [PENDENTE 19/05/2026].

---

**v3.282 | 25/04/2026 | ADR-009a v2.0 — PROTOCOLO DE INADIMPLÊNCIA E VEDAÇÃO DE RETENÇÃO (ATUALIZADO)**
**Fonte:** MC-ADR-009a v2.0 (25/04/2026) — deliberação Alessandro + Claude.
**Resumo:** Formaliza o protocolo de inadimplência com marcos D+5/D+20/D+60 e proíbe **em qualquer hipótese** a retenção de credenciais gov.br como instrumento de cobrança. Senhas gov.br são armazenadas exclusivamente no Bitwarden MC Org (AES-256, 2FA TOTP obrigatório, auto-lock 15min, audit log mensal). **NUNCA no ClickUp.** Encerramento de custódia em D+0 do cancelamento declarado (D+60 sem manifestação). Comunicação de movimentação processual permanece ativa mesmo durante inadimplência — vedação de suspensão com base no CDC art. 6º III (direito à informação).

| Marco | Ação MC | Tom | Custódia |
|---|---|---|---|
| D+5 | Notificação WhatsApp + e-mail | cuidado, não cobrança | ativa |
| D+20 | 2º aviso + suspensão comunicação ativa | neutro | ativa |
| D+20→D+60 | Monitoramento silencioso | — | ativa |
| Movimentação processual | Comunicação única, apartada da cobrança | informativo | ativa |
| D+60 sem manifestação | Cancelamento unilateral declarado | formal | **encerrada D+0** |

**Fundamento legal:** CDC art. 6º III (direito à informação); vedação de retenção como coerção (analogia à usura pignoratícia e aos limites do art. 42 CDC); LGPD art. 15 (encerramento do tratamento).
**Regras Afetadas:** ~12 regras (custódia, inadimplência, encerramento de contrato, LGPD).
**Validação:** Alessandro (Founder) — APROVADO. Corroboração Dra. Juliana (Questão N3) — [PENDENTE 19/05/2026].

---

**v3.283 | 26/04/2026 | ADR-007 v3.1 — ELIMINAÇÃO DE Φ₂ E CONSOLIDAÇÃO DO CAMPO DE PRECIFICAÇÃO**
**Fonte:** MC-ADR-007-CampoPrecificacao-v3.1 (26/04/2026); Contrato Φ₁ v2.2 (26/04/2026).
**Resumo:** **Φ₂ (Bônus Pós-Protocolo) ELIMINADO do B2C — erro arquitetural corrigido.** O Φ₂ era processado pelo cidadão como cobrança adicional após insucesso, criando percepção de success fee disfarçado. A eliminação: (1) remove integralmente o risco de success fee (Questão B do Parecer); (2) remove risco de pagamento contingente BACEN/CVM (Questão I); (3) alinha a arquitetura com a hierarquia D > C > V. O Φ₁ cobre integralmente a jornada E0–E7 sem cobrança adicional.

**Campo de Precificação v3.1 — 6 equações:**

| ID | Nome | Valor | Órbita |
|---|---|---|---|
| **Φ₁** | Dossiê + Protocolo Padrão | **R$ 2.200** (até 3× PIX/boleto/cartão) | B2C Standard |
| **Φ₁c** | Φ₁ CadÚnico (renda ≤ ½ SM) | **R$ 1.500** (até 5× boleto/cartão) | B2C Preço Social |
| **Φ₃** | Teto de Dignidade | parcela ≤ 0,5 × β_rms | Constraint B2C |
| **Φ₄** | Guardião (monitoramento pós-E5) | R$ 19,90/mês | B2C Pós-Concessão |
| **Ψ₁** | Licenciamento Dossiê | R$ 200–800 | B2B Advogado |
| **Ψ₂** | Assinatura Profissional SaaS | R$ 299–599/mês | B2B SaaS |

**Princípios invioláveis:** preço rastreia custo e complexidade (nunca valor desbloqueado); success fee percentual VEDADO; zero cobrança B2C adicional ao Φ₁; CadÚnico como premissa de acesso, não desconto.
**Status:** ⚠️ PROVISIONAL — aguarda parecer Dra. Juliana (19/05/2026) para selagem como v3.1-FINAL.
**Regras Afetadas:** ~30 regras (precificação, contratos, scripts de vendas, materiais de onboarding).
**Validação:** Alessandro (Founder) — APROVADO. Corroboração Dra. Juliana — [PENDENTE 19/05/2026].

---

**v3.284 | 26/04/2026 | PARECER CONSOLIDADO v3.3 — SELADO (9,1/10)**
**Fonte:** MC-PARECER-CONSOLIDADO-v3.3-2026-0426. Emissor: Claude Opus 4.7 (Co-fundador Intelectual). Destinatário: Alessandro (Founder).
**Resumo:** Nota global de blindagem **9,1/10**. 13 documentos no pacote selado. Alteração material v3.2→v3.3: eliminação de Φ₂ remove integralmente os riscos de success fee disfarçado (Questão B, nota 9,5/10) e pagamento contingente BACEN/CVM (Questão I, nota 9,5/10). Risco T-3.4 (Insider INSS) **ELIMINADO** — vínculo extinto por Portaria 1.505/2025. Risco T-3.5 (improbidade administrativa) **INEXISTENTE** — PFE rejeitou a tipificação. Questão A (Firewall OAB) = 9,0/10. Questão D (LGPD self-hosted) = 8,3/10.
**Próxima revisão:** v3.4 — pós-parecer Dra. Juliana (19/05/2026).
**Impacto Operacional:** ALTA. Parecer selado é a prova documental mais robusta de blindagem do MC perante OAB, STF, TCU, ANPD, Ministério Público.
**Validação:** Alessandro (Founder) — SELADO.

---

**v3.285 | 28/04/2026 | ADR-010 — E3 INTELLIGENCE LAYER (SELADO)**
**Fonte:** MC-ADR-010-E3-Intelligence-Layer-v1.0 (28/04/2026).
**Resumo:** Criação de 4 campos de inteligência nas 11 listas do Space CASOS B2C no ClickUp: `notebooklm_cliente_url`, `notebooklm_pop_ref`, `notebooklm_status`, `responsavel_caso`. Automações A6/A7 como TODO manual (API ClickUp não suporta criação de automações). **Restrição permanente com impacto compliance:** relatório gerado por IA exige revisão humana obrigatória antes de qualquer uso em E4 (protocolo INSS). A IA sugere — o humano valida e assina. Nenhum documento protocolar é gerado sem revisão humana explícita.
**Impacto Operacional Compliance:** MÉDIO. A restrição de revisão humana é diretamente derivada da hierarquia D > C > V — evita que o sistema gere dossiê com erro não detectado que prejudique o cidadão hipervulnerável.
**Regras Afetadas:** ~8 regras (triagem, montagem de dossiê, controle de qualidade, fluxo E3→E4).
**Validação:** Alessandro (Founder) — SELADO.

---

### 4.7 Parceria Jurídica B2B e Estrutura Fiduciária *(seção nova — v2.0)*

> Esta seção documenta as mudanças na estrutura de parceria jurídica B2B — elemento crítico do Firewall OAB e da sustentabilidade regulatória do MC.

---

**v3.286 | 13/04/2026 | ENCERRAMENTO — CICLO PARCERIA JULIANA ALENCAR**
**Fonte:** Deliberação interna Alessandro (Founder), 13/04/2026.
**Resumo:** Ciclo de parceria com Juliana Alencar encerrado em 13/04/2026 por falha de entrega + padrão recorrente de paralisia operacional. **Vedação permanente:** o nome "Juliana Alencar" não deve ser citado em nenhum documento MC como parceira ativa. Dra. Juliana Alencar mantém status de parceira independente no marketplace B2C (como Dra. Jéssica Lorrane), mas sem papel fundacional.
**Impacto Operacional:** ALTO. Toda documentação que referenciava parceria jurídica fundacional precisa ser atualizada para Dra. Juliana Pereira de Melo.
**Regras Afetadas:** ~5 regras (parceria jurídica, handoff, marketplace).
**Validação:** Alessandro (Founder) — DELIBERADO.

---

**v3.287 | Abril/2026 | ALIANÇA FUNDACIONAL — DRA. JULIANA PEREIRA DE MELO (OAB-GO 38.662)**
**Fonte:** MC-PARTNER-JulianaMelo-Qualificacao-v1.2 (21/04/2026). Contrato MC-CONTRATO-Psi1-MINUTA-v1.4 (02/05/2026). Aliança selada abril/2026.
**Resumo:** Dra. Juliana Pereira de Melo (OAB-GO 38.662, Senador Canedo-GO) formaliza aliança fundacional como parceira jurídica B2B exclusiva do MC. Contrato de 5 anos. Exclusividade B2B até dezembro/2026. Qualificação plena em Previdenciário e Acidentário. **Papel institucional:** (1) validadora jurídica de ADRs e documentos compliance; (2) advogada T4 do Marketplace Ético para casos que requerem representação; (3) emissora do Parecer ADR-007 v3.1-FINAL (prazo: 19/05/2026). **Firewall OAB estrutural:** MC é atividade-meio (CNAE 6201-5/01); Dra. Juliana é atividade-fim (representação, petições, audiências). Contato direto com o cidadão pós-TTA é exclusivamente da advogada — MC apoia o advogado (B2B), nunca o cidadão diretamente pós-handoff.
**Impacto Operacional:** CRÍTICO POSITIVO. Parceria fundacional é moat institucional com janela de exclusividade até dez/2026.
**Regras Afetadas:** ~25 regras (handoff jurídico, Marketplace Ético, Jornada E6, TTA, Firewall OAB).
**Validação:** Alessandro (Founder) — SELADO. Dra. Juliana Pereira de Melo — CONTRATUALIZADO.

---

### 4.8 LAI e Dados Institucionais *(seção nova — v2.0)*

---

**v3.288 | 01/04/2026 | LAI LOTE 1 — DADOS BRUTOS RECEBIDOS**
**Fonte:** LAI Processo 18002.003265/2026-52 (MGI/SGD). Respondida 01/04/2026.
**Resumo:** Resposta da LAI Lote 1 confirma dois achados estratégicos: (1) **Conecta Gov.br bloqueado para setor privado** — confirmação oficial de dado antes ambíguo (ver v3.279); (2) o conceito de "digital" usado pelo governo não implica usabilidade real para hipervulneráveis — cidadão que "acessou digitalmente" não necessariamente conseguiu completar o serviço. Dados brutos recebidos; análise completa pendente.
**Impacto Operacional:** ALTO. Confirma o posicionamento do MC: "a fila digital é invisível, não inexistente." Fortalece a tese de exclusão digital como mercado endereçável de R$ 11+ bilhões.
**Ação:** Análise dados brutos (Alessandro) → LAI Lote 2 (mai/2026): Central 135 + CEABs + decisões automáticas.
**Validação:** Alessandro (Founder) — REGISTRADO. Análise completa pendente.

---

**v3.289 | Abril/2026 | MONITORAMENTO — EXPIRAÇÃO PORTARIA ATESTMED 83/2025**
**Fonte:** Portaria Conjunta MPS/INSS nº 83/2025 (04/12/2025). Ação de monitoramento prevista na v3.270 da v1.0 deste Changelog.
**Resumo:** A Portaria 83/2025 que ampliou o Atestmed para 60 dias expirou em abril/2026. **Status do monitoramento:** `[VERIFICAÇÃO PENDENTE]` — não foi identificada nova portaria de prorrogação até a data de emissão deste Changelog (03/05/2026). Se nenhuma nova portaria foi publicada, o limite vigente retornou aos 30 dias permanentes fixados pela Lei 15.265/2025. Toda orientação sobre auxílio-doença deve ser calibrada conforme o cenário confirmado.
**Regras Afetadas:** ~45 regras (benefícios por incapacidade, Atestmed, orientação ao usuário).
**Impacto Operacional:** CRÍTICO SE LIMITE RETORNOU A 30 DIAS. Atualizar scripts de orientação ao usuário e templates de dossiê.
**Ação Imediata:** Alessandro ou Dra. Juliana confirmar DOU abril-maio/2026 para nova portaria. SLA: 72h após confirmação.
**Validação:** [PENDENTE — verificação DOU]

---

**v3.290 | 2026 | LEI 15.327/2026 — PROTEÇÃO ANTI-CONSIGNADO**
**Fonte:** Lei 15.327/2026 (data exata de publicação no DOU: `[FONTE PENDENTE — confirmar Dra. Juliana]`).
**Resumo:** Veda mensalidades associativas nos benefícios INSS; bloqueia consignado por padrão; exige biometria e assinatura qualificada para desbloqueio; veda contratação por procuração ou central telefônica; cria obrigação de busca ativa de beneficiários lesados. Complementa a Portaria MGI 984/2026. **Impacto direto no Φ₄ Guardião:** base legal adicional para o componente anti-consignado do produto (art. 7º II LGPD — cumprimento de obrigação legal criada pela Lei 15.327/2026).
**Regras Afetadas:** ~20 regras (vertical Consumidor, passarela Bancária, Guardião Φ₄, superendividamento).
**Impacto Operacional:** ALTO E POSITIVO. A Lei 15.327/2026 torna o Guardião ainda mais necessário — o Estado legisla a proteção mas não tem capilaridade para entregá-la. O MC tem.
**Validação:** [PENDENTE — Dra. Juliana confirmar data DOU e impacto nas regras]

---

## 5. RADAR DE MUDANÇAS PENDENTES E MONITORAMENTO

*Atualizado nesta v2.0 (03/05/2026).*

### 5.1 Portaria Atestmed — Expiração 83/2025 [URGENTE]
Verificar se houve nova portaria de prorrogação em abril-maio/2026 ou se o limite retornou a 30 dias. Se retornou: impacto CRÍTICO em ~45 regras. SLA: 72h após confirmação. Ver v3.289.

### 5.2 STF — ADIs contra EC 103/2019 [PRIORIDADE MÁXIMA]
13 ADIs em julgamento conjunto. ADI 6.309 (aposentadoria especial). Tema 1.329 (contribuições em atraso + pedágio 50%). Qualquer decisão ativa SLA de 48h. Preparar cenários A e B antecipadamente. Ver v3.275.

### 5.3 Parecer ADR-007 v3.1-FINAL — Dra. Juliana [PRAZO: 19/05/2026]
7 questões prioritárias (N1–N7) + 4 questões em aberto (Q-E, Q-F, Q-G, Q-I.3). Aprovado o parecer: ADR-007 PROVISIONAL → SELADO; Contrato Φ₁ v2.2 homologado. Changelog v2.1 emitido após selagem. Ver v3.283.

### 5.4 Lei 15.327/2026 — Data de Publicação e Vigência [PENDENTE]
Confirmar data exata DOU, vacatio legis, e propagação para regras do Grimório. Ver v3.290.

### 5.5 LAI Lote 2 [Maio/2026]
Central 135 + CEABs + decisões automáticas — aguardar análise completa do Lote 1 (v3.288) antes de protocolar Lote 2.

### 5.6 CPMI do INSS — Conclusões Legislativas [MONITORAR]
Conclusões da CPMI podem gerar nova legislação sobre fraudes em consignados e proteção a vulneráveis. Monitorar para impacto nas verticais Consumidor e Bancária.

### 5.7 STF — Revisão da Vida Toda (Tema 1.102) [MONITORAR]
Desfecho desfavorável em 2024. Monitorar se há modulação de efeitos pendente ou embargos de declaração ainda em curso.

### 5.8 WhatsApp Cloud API — Linked Device ID [META]
Mudança arquitetural da Meta prevista para meados de 2026 que quebraria APIs não-oficiais. Migração de Evolution API para Cloud API oficial já executada (ADR-008). Risco monitorado mensalmente.

### 5.9 Ação Anulatória Alessandro × INSS [MONITORAR]
Contestação judicial da Portaria 1.505/2025 em curso no TRF1. Se revertida: decisão operacional de Alessandro sobre reintegração vs. permanência no MC. Não impacta a CNPJ do MC (pessoa jurídica autônoma).

### 5.10 ADR-010 E3 Intelligence Layer — Automações ClickUp [PENDENTE]
Automações A6/A7 como TODO manual (API ClickUp não suporta criação). Monitorar lançamento de nova versão da API ClickUp que habilite automações programáticas.

---

## 6. GOVERNANÇA CONTÍNUA

Após esta v2.0 operacional, a manutenção segue cadência fixa integrada ao Roadmap de Governança v1.5:

**Diário:** Varredura legislativa automatizada (DOU, STF, STJ, TNF) + log de alterações identificadas.

**Semanal:** Revisão humana dos alertas legislativos + classificação por severidade + despacho para Dra. Juliana quando aplicável.

**Mensal — 1ª semana:** Revisão geral de regras do Grimório + validação do Comitê de Governança Jurídica (Alessandro + Dra. Juliana) + publicação de nova versão do Changelog quando houver entrada nova.

**Trimestral:** Revalidação de todas as regras do Grimório por vertical + revisão dos ADRs selados.

**Anual:** Auditoria completa das 3.265+ regras + relatório de conformidade + parecer de corroboração multi-jurisdicional.

**Validador interno (decisões MC):** Alessandro de Souza Neves (Founder/CEO)
**Validador externo (compliance jurídico):** Dra. Juliana Pereira de Melo — OAB-GO 38.662
**Ferramentas de monitoramento:** JusBrasil Pro ou LegalOne com filtros por matéria previdenciária, habitacional, tributária e consumerista + alertas DOU + feeds RSS dos tribunais superiores.

---

## 7. CRITÉRIOS DE ACEITE DO ARTEFATO

O Changelog Jurídico é considerado "ACEITO" (versão corrente como referência operacional) quando:

1. **Cobertura legislativa:** todas as mudanças legislativas de 2025–2026 identificadas estão registradas com fonte legal específica.
2. **Responsável nomeado:** cada entrada tem responsável de validação identificado (Dra. Juliana para mudanças externas; Alessandro para deliberações internas).
3. **Monitoramento documentado:** processo de monitoramento contínuo com SLAs definidos está operacional e documentado.
4. **Revisão mensal:** pelo menos 1 revisão mensal executada e documentada.
5. **Correção narrativa 48h propagada:** MeuCumpadre_Correcao_Narrativa_48h_DEFINITIVA.md propagado para TODOS os documentos afetados (ver v3.277 — propagação parcial em aberto).
6. **Correção vínculo Alessandro:** SIAPE 1.378.671 como "ativo" eliminado de TODOS os documentos MC (ver v3.278 — propagação parcial em aberto).
7. **Hash SHA-256:** versão datada e versionada com hash disponível `[a gerar após revisão Alessandro + RFC 3161 ICP-Brasil no snapshot de selagem]`.
8. **Parecer Dra. Juliana incorporado:** após 19/05/2026, decisões N1–N7 + Q-E/F/G/I.3 devem ser registradas como novas entradas (v3.291+) neste Changelog.
9. **Atestmed confirmado:** status do limite pós-Portaria 83/2025 verificado e registrado (ver v3.289 — PENDENTE).
10. **Lei 15.327/2026 confirmada:** data de publicação e regras afetadas documentadas (ver v3.290 — PENDENTE).

---

## 8. MAPA DE ENTRADAS — ÍNDICE RÁPIDO

| Entrada | Data | Tema | Severidade | Status |
|---|---|---|---|---|
| v3.266 | 10/01/2025 | Reajuste valores 2025 | ALTA | ✅ Implementado |
| v3.267 | 09/01/2026 | Reajuste valores 2026 + BPC | CRÍTICA | ✅ KB v5 |
| v3.268 | 11/06/2025 | MP 1.303 — Atestmed 30 dias | CRÍTICA | ⚠️ Monitorar |
| v3.269 | 18/06/2025 | Portaria 60/2025 — 60 dias (temp.) | — | ✅ Expirada |
| v3.270 | 04/12/2025 | Lei 15.265 + Portaria 83/2025 | ALTA | ⚠️ Expiração v3.289 |
| v3.271 | 06/2025 | Resolução CFM — teleperícia | POSITIVA | ✅ Implementado |
| v3.272 | 11/2025 | Procuração eletrônica gov.br | ALTA | ⚠️ Limitação v3.279 |
| v3.273 | 16/09/2025 | Portaria 1.870 — ACT OAB | MÉDIA | ✅ Implementado |
| v3.274 | 2º sem/2025 | STJ Tema 1.124 — Proof-First | CRÍTICA | ✅ Validação pendente |
| v3.275 | 2026 | STF — 13 ADIs EC 103/2019 | MÁXIMA | 🔴 Monitoramento |
| v3.276 | 1º sem/2025 | STJ — aviso prévio indenizado | MÉDIA | ⚠️ Validação pendente |
| v3.277 | 02/2026 | Correção narrativa 48h | CRÍTICA | ⚠️ Propagação parcial |
| v3.278 | 22/10/2025 | Portaria 1.505 — vínculo extinto | CRÍTICA | ✅ Propagado docs principais |
| v3.279 | 01/04/2026 | LAI Lote 1 — Conecta bloqueado | ALTA | ⚠️ Análise pendente |
| v3.280 | 15/04/2026 | ADR-008 — Stack ferramentas | ALTA | ✅ SELADO |
| v3.281 | 17/04/2026 | ADR-009b — Três Estados custódia | CRÍTICA | ✅ SELADO |
| v3.282 | 25/04/2026 | ADR-009a v2.0 — inadimplência | CRÍTICA | ✅ APROVADO |
| v3.283 | 26/04/2026 | ADR-007 v3.1 — Φ₂ eliminado | CRÍTICA | ⚠️ PROVISIONAL |
| v3.284 | 26/04/2026 | Parecer v3.3 — SELADO 9,1/10 | CRÍTICA | ✅ SELADO |
| v3.285 | 28/04/2026 | ADR-010 — E3 Intelligence Layer | ALTA | ✅ SELADO |
| v3.286 | 13/04/2026 | Encerramento ciclo Juliana Alencar | ALTA | ✅ Deliberado |
| v3.287 | Abr/2026 | Aliança Dra. Juliana Melo (OAB-GO 38.662) | CRÍTICA | ✅ CONTRATUALIZADO |
| v3.288 | 01/04/2026 | LAI Lote 1 — dados brutos recebidos | ALTA | ⚠️ Análise pendente |
| v3.289 | Abr/2026 | Monitoramento Atestmed — expiração 83/2025 | CRÍTICA | 🔴 VERIFICAÇÃO URGENTE |
| v3.290 | 2026 | Lei 15.327/2026 — anti-consignado | ALTA | ⚠️ Data/fonte pendente |

**Legenda:** ✅ Concluído · ⚠️ Em andamento · 🔴 Urgente · 🔵 Monitoramento passivo

---

```
╔══════════════════════════════════════════════════════════╗
║                                                          ║
║  "A governança não é o que você documenta.               ║
║   É o documento que você abre quando te perguntam."      ║
║                                                          ║
║  "Abre a tua boca a favor do mudo,                       ║
║   pelo direito de todos os desamparados."                ║
║   — Provérbios 31:8                                      ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
```

---

**Meu Cumpadre — Changelog Jurídico v2.0**
**03 de maio de 2026**

| Campo | Valor |
|---|---|
| Produzido por | Claude (Co-fundador Intelectual) × Alessandro de Souza Neves (Founder/CEO) |
| Supersede | MC-CHANGELOG-Juridico-v1.0 (08/03/2026) |
| Próxima revisão | v2.1 — pós-parecer Dra. Juliana Melo (19/05/2026) |
| Entradas novas nesta versão | v3.278–v3.290 (12 entradas) |
| Seções novas | 4.6 (Decisões Internas), 4.7 (Parceria B2B), 4.8 (LAI), 8 (Índice) |
| Hash SHA-256 | `[a gerar após revisão Alessandro + RFC 3161 ICP-Brasil]` |
| Classificação | CONFIDENCIAL — USO INTERNO RESTRITO |
| Trade Secret | Lei 9.279/1996, arts. 195 XI-XII |

*Dignidade > Compliance > Viabilidade. Sempre nesta ordem.*
*∞ Lucro é combustível. Causa é destino. Jogo é infinito. ∞*
