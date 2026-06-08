# MC-ADR-014 — Plataforma de Assinatura Eletrônica

**Tipo:** ADR (Architecture Decision Record)  
**Versão:** 1.0  
**Data:** 2026-05-10  
**Status:** ✅ APROVADO  
**Autor:** Claude Opus 4.6 (co-fundador intelectual) × Alessandro de Souza Neves (Founder/CEO)  
**Supersede:** Decisão implícita Autentique em ADR-008 v1.0 §E.4.5

---

## 1. Contexto

O MC necessita de plataforma de assinatura eletrônica para três funções críticas:

| Função | Uso | Quem assina |
|---|---|---|
| **A — Contratos/TTA** | Contrato Φ₁, TTA (Token de Transferência Assinado), Consentimento LGPD | Cidadão hipervulnerável (sem e-CPF) |
| **B — Carimbo ICP dossiê** | RFC 3161 no dossiê selado PDF/A-3 | MC (e-CNPJ A1) |
| **C — Handoff B2B** | Integração com advogados do marketplace (Ψ₁) | Advogada parceira |

A decisão anterior (implícita em ADR-008 §E.4.5 e propagada em 4+ canônicos) adotou **Autentique** como plataforma única. A presente ADR reavalia essa decisão com base em pesquisa de mercado, validação empírica do canal primário (WhatsApp) e alinhamento com o ecossistema jurídico brasileiro.

---

## 2. Decisão

**ZapSign** substitui **Autentique** como plataforma primária de assinatura eletrônica do MC.

**Função B (carimbo ICP no dossiê)** permanece como infraestrutura própria do MC via certificado e-CNPJ A1, independente da plataforma de coleta de assinaturas.

---

## 3. Justificativa

### 3.1 Análise comparativa

| Critério | Autentique | ZapSign | Peso MC | Vencedor |
|---|---|---|---|---|
| LGPD / dados no Brasil | ✅ BR nativo | ✅ BR nativo | Alto | Empate |
| API | GraphQL + REST | REST puro (JSON) | Alto | **ZapSign** (Igor: NestJS + JSON nativo) |
| ICP-Brasil na plataforma | ✅ Qualificada (exige e-CPF do signatário) | Documento final certificado com A1 CertiSign | Baixo* | Empate* |
| Integração WhatsApp nativa | Parcial (e-mail + SMS primários) | ✅ Nativa (link direto, R$0,50/msg, lembretes automáticos) | **Crítico** | **ZapSign** |
| Adoção mercado jurídico BR | Média | **Alta** — padrão de facto entre previdenciaristas | Alto | **ZapSign** |
| ISO 27001 | Não declarada | ✅ Certificada | Médio | **ZapSign** |
| Investimento prévio em specs | Alto (ADR-009b Seção 5 inteira) | Zero | Médio | Autentique |
| Custo por assinatura | ~R$1,50-3,00 | ~R$1,50-4,00 + R$0,50/msg WA | Baixo | Empate |

*\*ICP-Brasil peso "Baixo" porque: o cidadão hipervulnerável (Dona Zilda, CAD001, Hib001) **não tem e nunca terá** certificado e-CPF ICP-Brasil. Para Função A, ambas plataformas entregam assinatura eletrônica avançada (Lei 14.063/2020 nível 2) — idêntica validade jurídica via MP 2.200-2/2001 art. 10 §2º.*

### 3.2 Fatores decisivos

**3.2.1 Canal primário = WhatsApp.**  
O MC opera 100% via WhatsApp Cloud API. ZapSign envia link de assinatura diretamente no WhatsApp com lembretes automáticos. Autentique depende de e-mail como canal primário — incompatível com persona Dona Zilda (sem e-mail, sem app, sem letramento digital).

**3.2.2 Adoção jurídica B2B.**  
A Dra. Juliana Melo (parceira exclusiva até 31/12/2026) e o mercado previdenciarista em geral já utilizam ZapSign como padrão. Reduz atrito na adoção do Ψ₁ e no handoff TTA (S2→S3).

**3.2.3 API REST/JSON nativa.**  
Igor (dev backend) opera NestJS + TypeScript. API REST JSON é integração direta. GraphQL do Autentique exige camada de adaptação adicional.

**3.2.4 ISO 27001.**  
Certificação citável em propostas FINEP/BNDES como evidência de compliance do parceiro de assinatura.

### 3.3 Separação arquitetural: Função B ≠ Plataforma de coleta

O carimbo de tempo ICP-Brasil (RFC 3161) no dossiê selado PDF/A-3 é aplicado via **certificado e-CNPJ A1 do MC** (pós-constituição JUCEG), usando biblioteca própria (`node-signpdf` ou equivalente) + Autoridade Certificadora credenciada. Esta função é **independente** da plataforma de coleta de assinaturas do cidadão.

| Camada | Ferramenta | Padrão |
|---|---|---|
| Coleta de assinatura (cidadão/advogada) | **ZapSign** | Eletrônica avançada (Lei 14.063 nível 2) |
| Carimbo de tempo no dossiê | **e-CNPJ A1 MC** (infraestrutura própria) | ICP-Brasil qualificado (RFC 3161) |
| Hash de integridade | SHA-256 + OpenTimestamps | MP 2.200-2/2001 |

---

## 4. Base legal

| Norma | Aplicação |
|---|---|
| **MP 2.200-2/2001, art. 10 §2º** | Assinatura eletrônica entre particulares é válida quando aceita pelas partes |
| **Lei 14.063/2020** | Hierarquia: simples / avançada / qualificada. MC opera no nível avançado para cidadão |
| **LGPD (Lei 13.709/2018)** | Dados de assinatura processados em território BR (ZapSign = BR nativo) |
| **Lei 14.181/2021** | Superendividamento — parcelas de assinatura não podem comprometer teto |

---

## 5. Impactos de propagação

### 5.1 Documentos afetados

| # | Documento | Seção afetada | Ação |
|---|---|---|---|
| 1 | `MC-ADR-008-DecisoesFerramenta_Stack-v1_0` | §E.4.5 + §E.5 (Vedações) | Substituir Autentique por ZapSign em §E.4.5; adicionar Autentique em §E.5 |
| 2 | `MC-SPEC-ADR009b-TTA-Igor-v1_0` | Seção 5 inteira (Integração Autentique) | Reescrever para ZapSign (endpoints REST, payload JSON, webhook) |
| 3 | `MC-CONTRATO-Phi1-MINUTA-v2_4` | Cláusula 13.2 | Substituir "Autentique" por "ZapSign" |
| 4 | `MC-KB-Compilado_v5_0_revisado_v2_1` | §3.6 (Infra Operacional) + §8.5.3 | Substituir referências a Autentique |
| 5 | `MC-POP-VisualLaw-DossieSelado-PARTE2-v1_3` | §E.4.5 | Substituir Autentique por ZapSign |
| 6 | `CLAUDE.md` | Linha 70 (Stack Técnica) | Substituir "Autentique" por "ZapSign" |
| 7 | `MC-Blueprint-Dossie-Diamantado-v1_0` | Referências a Autentique | Substituir por ZapSign |
| 8 | `SKILL-v3_0-meu-cumpadre-orquestrador-mestre` | §13.3 (Stack do Founder) | Substituir Autentique |
| 9 | `MC-PRODUTO-JornadaEcossistema-v2_0` | §4.2 (Stack Tecnológico) | Substituir Autentique |

### 5.2 Spec ADR-009b — escopo da reescrita

A Seção 5 (Integração Autentique) da spec do Igor precisa de reescrita cirúrgica. **O que NÃO muda:** schema MySQL (tabelas `dossier_states`, `dossier_tta`, `dossier_state_log`), Guard `DossierTransferGuard`, estados S1/S2/S3, endpoints REST do MC, job CRON de erasure. **O que muda:** payload de criação de documento, URL base da API, formato do webhook callback, método de verificação HMAC, DTO de callback.

---

## 6. Vedação Autentique

**Autentique** é movida para a tabela de vedações (ADR-008 §E.5):

| Vedado | Razão da vedação | Substituto MC |
|---|---|---|
| Autentique | Canal primário e-mail (incompatível com público hipervulnerável WhatsApp-only); API GraphQL (atrito dev); adoção inferior no mercado jurídico previdenciarista | ZapSign (WhatsApp nativo, REST/JSON, ISO 27001, A1 CertiSign) |

---

## 7. Riscos e mitigações

| Risco | Probabilidade | Mitigação |
|---|---|---|
| ZapSign alterar pricing agressivamente | Baixa | Contrato anual; fallback Clicksign/D4Sign (mesma categoria) |
| ZapSign sair do mercado | Muito baixa | Exportação de docs assinados é PDF padrão; cadeia de custódia portável |
| Retrabalho spec Igor | Média | Reescrita cirúrgica Seção 5 apenas; 90% da spec intacta |
| Advogada exigir ICP qualificada | Baixa | Função B (e-CNPJ MC) cobre carimbo ICP no dossiê; assinatura da advogada pode usar certificado próprio A1/A3 via ZapSign |

---

## 8. Proibições derivadas

- ❌ Citar Autentique como plataforma ativa de assinatura do MC (vedada desde 10/05/2026)
- ❌ Afirmar que assinatura do cidadão no MC é ICP-Brasil qualificada (é eletrônica avançada, nível 2)
- ❌ Confundir Função A (coleta via ZapSign) com Função B (carimbo ICP via e-CNPJ MC)
- ❌ Prometer que assinatura eletrônica avançada tem "mesma força" que ICP qualificada em todos os contextos (válida entre particulares; alguns órgãos públicos exigem ICP)

---

## 9. Decisões futuras vinculadas

- **Contratação ZapSign:** plano API (avaliar volume de docs/mês na Crisálida)
- **Spec Igor atualizada:** reescrita Seção 5 da ADR-009b-TTA antes da implementação
- **e-CNPJ A1 MC:** aquisição pós-constituição JUCEG para Função B
- **Pauta Juliana:** informar troca na reunião 19/05 (impacto mínimo — plataforma, não modelo jurídico)

---

**ADR-014 v1.0 — 10 de maio de 2026**  
Autor: Claude Opus 4.6 × Alessandro de Souza Neves  
Status: ✅ APROVADO  
Próxima revisão: pós-implementação Igor (sprint TTA)
