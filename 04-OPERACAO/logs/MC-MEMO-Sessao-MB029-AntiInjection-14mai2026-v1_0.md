---
tipo: MEMO-SESSAO
codigo: MC-MEMO-Sessao-MB029-AntiInjection
versao: 1.0
data: 2026-05-14
mb_origem: MB-029
hierarquia: Dignidade > Compliance > Viabilidade
selo: "O diamante é carbono que não desistiu da pressão."
---

# MEMO Sessão MB-029 — Diamantação Anti-Injection

## Síntese

| Artefato | Status | Path canônico | Hash SHA-256 |
|---|---|---|---|
| Anexo radar Galileu/Parauapebas | ✅ persistido | `02-ARQUITETURA/inteligencia-setorial/MC-RADAR-Galileu-AntiInjection-Caso-TRT8-Parauapebas-v1_0-2026-0514.md` | `CA43CD0CEB517EAB307C478BFDD3276F9E676AF8B5E0C316872B90F39AB44F26` |
| ADR-016 v1.0 PROVISIONAL | ✅ canonizado | `03-GOVERNANCA/adrs/MC-ADR-016-ComplianceDocumental-AntiInjection-v1_0-2026-0514.md` | `ADACCAC0D14C9BE0686BE91FAA0554EAD40757B0FAE7F56C43570EBFB6137D8C` |
| PATCH POP Visual Law v3.0-5 | ✅ canonizado | `03-GOVERNANCA/patches/MC-PATCH-MEMO-v3_0-5-POPVisualLaw-AntiInjection-2026-0514.md` | `A98DF91C62E5BC77CA80A3A70B11E09868147EBFBCDA05B0B9EC5A91C099D790` |
| Pauta Juliana v2.5 (Bloco P) | ✅ canonizada | `03-GOVERNANCA/pautas/MC-PAUTA-Juliana-v2_5-2026-0514.md` | `E874F8E1AD682B3B94CECD69C1676497481A6F1D84FF9AC21974B04B95D49CA9` |
| CLAUDE.md atualizado v2.2 | ✅ | vault root | (backup `.20260514-192642.bak` preservado) |

**Verificações operacionais:**
- ✅ Anexo origem Documentação/ preservado (Copy, não Move)
- ✅ INDEX-ADRS.md atualizado (backup `.20260514-192153.bak`)
- ✅ INDEX-PATCHES.md atualizado (backup `.20260514-192313.bak`)
- ✅ INDEX-PAUTAS.md atualizado (backup `.20260514-192558.bak`) — ressincronizado de v2.1 para v2.5
- ✅ Pautas v2.1, v2.2, v2.3, v2.4 preservadas (histórico institucional intacto)
- ✅ ADRs seladas (007-015) não modificadas (Princípio: ADR-008 recebe adendo via PATCH, não edição direta)

## Desvio do MB documentado

O MB-029 instruía bumpar Pauta v2.1 → v2.2. Na execução foi detectado que a pauta já evoluíra para **v2.4** (canônica corrente em 14/05) com Bloco O ampliado (O11-O14) — três versões intermediárias (v2.2, v2.3, v2.4) que o MB não conhecia. Decisão executiva (sem aguardar autorização, conforme directive da sessão "trabalhar sem pausar"): criar **v2.5 sobre v2.4**, acrescentando o Bloco P (8 perguntas) no topo da pauta vigente, em vez de criar v2.2 e sobrescrever histórico de 2 dias de cunhagens institucionais. Justificativa: Princípio #4 (errata absorve, não inventa) + Princípio do menor desvio operacional. Total final v2.5: **78 perguntas, 15 blocos (A-P), 8h-8h30** (vs. estimativa MB de 74/15/8h30 — diferença +4 perguntas vem das ampliações pré-existentes).

## Princípio reforçado

**#17 (gov.br = infraestrutura nacional de identidade digital) estendido:** a Justiça brasileira é infraestrutura nacional de leitura institucional por IA. O protocolo virou interface humano-máquina dual. **Compliance Documental Anti-Injection é decorrência operacional deste fato**, não defesa contra ataque externo — é disciplina de produção alinhada ao novo Judiciário 4.0.

## Moat reforçado

O MC entra na Pauta Juliana 19/05 com decisão arquitetural canônica sobre prompt injection — **antes** que qualquer competidor previdenciário tenha lido o caso Parauapebas. Argumento institucional para FINEP/BNDES/Centelha:

> "O MC é a primeira infraestrutura previdenciária BR a operar Compliance Documental Anti-Injection by design — alinhada a Resolução CNJ 615/2025, Recomendação CFOAB 001/2024, OWASP LLM01, NIST AI 600-1."

Abre cunha estratégica para **Ψ₃-AntiInjection Compliance** — produto B2B advogado de sanitização documental (pós-piloto Crisálida, validação OAB em P7).

## Próximas janelas

- **15-18/05:** preparar pacote v2.5 da Pauta para Dra. Juliana (entregar 18/05 noite — 3 docs novos vs. v2.4: ADR-016 + PATCH POPs + RADAR Galileu)
- **19/05 Bloco P:** validar ADR-016 com parecerista (vereditos P1-P8)
- **20/05:** selagem ADR-016 v2.0 (ou ajustes propostos)
- **Pós-25/05:** validação técnica Igor (viabilidade pipeline ExifTool+qpdf+mc-pdf-audit no N8N — gate G3)
- **Pré-19/05:** validação Carlos UX (Teste Zilda-STF disclosure C.14 — gate G4)
- **Pós-piloto N=20:** validação empírica falso-positivo < 1% (gate G5) + KPIs E4.5

## Cross-references operacionais

- ADR-008 (Stack) recebe adendo via PATCH; não editado direto.
- POP-VisualLaw PARTE 2 v1.4 e PARTE 3 v1.4 (próximas versões integrais pós-19/05) absorvem o PATCH → patch migra para `_HISTORICO_PATCHES_APLICADOS/` (Princípio #19).
- Router-Ethics 11.0 ganha **Hook 8 — Sanitization Gate** pós-parecer Juliana (spec a produzir em iteração futura).

## Âncora

Provérbios 31:8 — "Abre a tua boca a favor do mudo."

O cidadão hipervulnerável merece dossiê que sobreviva **ao olhar humano E ao olhar algorítmico** sem qualquer tipo de manipulação. **Anti-injection é dignidade.**

**Lucro é combustível. Causa é destino. Jogo é infinito.**
**Hierarquia:** Dignidade > Compliance > Viabilidade
**Selo:** "O diamante é carbono que não desistiu da pressão."
**Confidência founder:** "É eu e tu."

∞
