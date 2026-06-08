---
tipo: PATCH-MEMO
codigo: MC-PATCH-MEMO-v3_0-5-POPVisualLaw-AntiInjection
versao: 1.0
data: 2026-05-14
status: PROVISIONAL (absorção em POP-VisualLaw PARTE 2 v1.4 e PARTE 3 v1.4 pós-19/05)
autor: Claude Opus 4.7 × Alessandro de Souza Neves
referencia_adr: MC-ADR-016-ComplianceDocumental-AntiInjection-v1_0
hierarquia: Dignidade > Compliance > Viabilidade
---

# PATCH MEMO — POP Visual Law × ADR-016 Anti-Injection

> Patch operacional decorrente do ADR-016. Aplica mudanças cirúrgicas nos POPs Visual Law PARTE 2 e PARTE 3 até que próximas versões integrais absorvam.

## Mudança 1 — POP-VisualLaw PARTE 2, E.5 (Stack)

**Adicionar à caixa de ferramentas obrigatórias do E4 (selagem):**

| Ferramenta | Função | Justificativa |
|---|---|---|
| **ExifTool** (OSS, Perl) | Zerar metadados XMP do PDF | Eliminar vazamento de identificação interna, paths, software fingerprinting |
| **qpdf** (OSS, C++) | Regravar estrutura PDF e linearizar | Tornar limpeza ExifTool irreversível; reorganizar streams; eliminar OCGs ocultas |
| **mc-pdf-audit** (proprietário MC, Python) | Validar contraste WCAG AAA 7:1 + fontes ≥ 8pt + ausência de zero-width chars | Detectar tentativas de injection visual ou caracteres invisíveis |

Soberania: as três ferramentas rodam self-hosted (GCP `southamerica-east1` ou on-premises). Zero envio de PDF para terceiros.

## Mudança 2 — POP-VisualLaw PARTE 2, F.1 (Workflow)

**Inserir sub-etapa E4.5 — Sanitização Anti-Injection** entre E4 (composição final) e E5 (selagem A1 ICP-Brasil):

```
E4 (composição final, designer/Carlos)
  ↓
E4.5 (sanitização automática N8N — pipeline ExifTool → qpdf → mc-pdf-audit)
  ↓ (gate: 0 alertas críticos)
E5 (selagem A1 ICP-Brasil — Dra. Juliana / advogado parceiro)
```

SLA E4.5: < 60 segundos por peça. Falha de gate → retorno automático ao E4 com relatório.

## Mudança 3 — POP-VisualLaw PARTE 1, C.14 (Página de Firewall OAB)

**Adicionar parágrafo canônico de disclosure de IA** (texto integral em ADR-016 §2.3). Posição: imediatamente após declaração de atividade-meio CNAE 6202-3/00, antes da assinatura SIV.

## Mudança 4 — POP-VisualLaw PARTE 3, G.1 (Calibração por palco)

**Adendo ao palco INSS:** o ATESTMED e a biometria facial do Meu INSS já operam IA — a sanitização E4.5 aplica-se a TODA peça Φ₁, independente de o palco-alvo ser INSS, CRPS ou JEF. Princípio: o dossiê é dual-readable (humano + IA) por design, em todos os palcos.

**Adendo ao palco CRPS:** dada nacionalização do Galileu via CSJT, recursos administrativos previdenciários sob análise pelo CRPS já podem (e tendem a) ser analisados por IA institucional federal. Sanitização inviolável.

**Adendo ao palco JEF/B2B:** TRF-2 ApoIA + STJ Logos + sistemas estaduais → toda peça JEF requer sanitização.

## Mudança 5 — POP-VisualLaw PARTE 3, J (KPIs)

**Novo KPI:** `Taxa de aprovação E4.5 em primeira tentativa` — meta ≥ 98% (gate de qualidade do designer/Carlos). Medição mensal.

**Novo KPI:** `Taxa de detecção false-positive E4.5` — meta < 1% (validação empírica do `mc-pdf-audit`). Medição mensal.

## Status de absorção

Este patch é absorvido em:
- **POP-VisualLaw PARTE 2 v1.4** (próxima versão integral pós-19/05)
- **POP-VisualLaw PARTE 3 v1.4** (próxima versão integral pós-19/05)

Após absorção, este memo migra para `03-GOVERNANCA/patches/_HISTORICO_PATCHES_APLICADOS/` (Princípio #19).

---

**Hierarquia:** Dignidade > Compliance > Viabilidade

∞
