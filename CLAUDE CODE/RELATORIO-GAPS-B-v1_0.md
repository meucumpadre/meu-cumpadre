# RELATÓRIO DE GAPS — Varredura-B | MC-Armadura v3.0

**Data:** 2026-04-20
**Escopo:** 3 subpastas — B2B-ADVOGADOS (60 arquivos) + CLAUDE Cowork (106) + ClickUP 4.0 x Claude Code (35) = **201 arquivos classificados**
**Manifesto:** `MANIFESTO-ARMADURA-B-v1_0.csv` (202 linhas: 1 header + 201 dados)
**Descartados:** ~20 arquivos (`.gdoc`, `.mkv/.mp3/.mp4`, `desktop.ini`)
**Flags para revisão manual:** 62 | **Duplicatas detectadas:** 19

---

## Distribuição consolidada por Peça

| Peça | Nome | Qt | % | Status massa crítica |
|---|---|---:|---:|---|
| 0 | INDEX_RAIZ | 5 | 2,5% | ⚠️ Precisa consolidar |
| 1 | COGS TEMPO-HOMEM | 3 | 1,5% | 🔴 **P0 CRÍTICO** |
| 2 | PLANILHAS_OPERACIONAIS | 1 | 0,5% | 🔴 **P0 CRÍTICO** |
| 3 | ADR_ARQUITETURA | 12 | 6,0% | 🟡 Parcial |
| 4 | DEFESA_ANTROPOLÓGICA | 18 | 9,0% | 🟢 OK |
| 5 | ÂNCORA_R$12k | 8 | 4,0% | 🟡 Parcial |
| 6 | NUBANK_LAYER | 0 | 0,0% | 🔴 **P0 VAZIO** |
| 7 | EXÉRCITO_ESPECIALISTAS | 29 | 14,4% | 🟢 Forte (Juliana Melo + B2B) |
| 8 | FIREWALL_OAB | 24 | 11,9% | 🟢 Forte (jurisprudência + incidente LGPD) |
| 9 | ARQUIVO_LEGADO | 101 | 50,2% | — Peneira funcionou |

**Leitura geral:** Varredura-B entregou massa crítica nas peças jurídicas/ética (7, 8, 4) mas deixou explícitos os 3 gaps estruturais do duelo v3.0 (1, 2, 6). Metade do acervo (50%) é legado — confirma que as 3 pastas B são operacionais/transicionais, não núcleo-duelo.

---

## Peça 1 — COGS TEMPO-HOMEM

**Arquivos classificados:** 3
- B2B: `Case Smith Consultores - AI_BASED_PRICING.md` (benchmark case time)
- COW: `API GOV NARRATIVA PACIFICADA.md` + `Gov_br Open APIs Roadmap.md`

**Subpastas vazias:** 01A_MATRIZ_TEMPO_TELA_PRIMARIA, 01B_CALIBRACAO_MULTI_ESPECIE, 01C_POR_ESPECIE_BENEFICIO (todas 7 espécies), 01D_RETRY_GOV_BR, 01E_CUSTO_HORA_CLT, 01F_CURVA_APRENDIZADO

**Evidência mínima:** 🔴 **AUSENTE.** Nenhuma matriz tempo-tela. Nenhum log de cronometragem operacional. O dump ClickUp de 429 tasks (CLK-004) tem **Time Spent = 0 em TODAS as 429 linhas** — evidência de que NUNCA se mediu tempo operacional.

### Gap P0 (bloqueante v3.0)
- **Produzir matriz tempo-tela para 7 espécies** (B41/B42/B21/B32/B91/B87/B46) — sem isso Peça 1 cai em adversarial²
- **Iniciar medição REAL agora:** ClickUp Time Spent ativo em tarefas da operação diária (Gil/CAS001 casos) por 14 dias = baseline empírico
- **Custo-hora CLT ancorado:** R$8,52/R$36,79 + fator 1,85 — precisa decompor em planilha fonte (atualmente só texto narrativo)

### Gap P1 (fortalece, não bloqueia)
- Logs retry gov.br por operador (hoje inexistente)
- Curva de aprendizado: t(n) = t₁ · n^(-α) com α medido, não estimado

### Gap P2 (pós-duelo)
- Integração Obsidian para atualização automática da matriz

---

## Peça 2 — PLANILHAS_OPERACIONAIS

**Arquivos classificados:** 1
- COW: `Simulação de cenários LGPD.md` (único item, marginal)

**Subpastas vazias:** 02A_MC_CENARIO_GERAL, 02B_UNIT_ECONOMICS, 02C_COGS_CONSOLIDADO, 02D_CALCULOS_AUXILIARES, 02E_RECONCILIACAO_FINANCEIRA

**Evidência mínima:** 🔴 **AUSENTE.** Nenhuma planilha viva de cenários MC. ADR-007 selou 7 equações + 42 grandezas, mas a **implementação em planilha** não está em nenhuma das 3 pastas varridas.

### Gap P0 (bloqueante v3.0)
- **Planilha MC-CENARIO-v3_0** com Φ₁-Φ₄, Ψ₁-Ψ₃, break-even Rota A/B/C e cross-subsídio B2B→rural
- **Unit economics por vertical:** COGS, CAC, LTV, margin — atualmente zero instrumentado
- **Reconciliação financeira:** fluxo projetado vs real (ainda pré-revenue)

### Gap P1
- Calculadora pública (Zilda-STF) — uma versão Zilda simplificada + uma STF/investidor detalhada

### Gap P2
- Dashboard LookerStudio conectado à planilha

**⚠️ Hipótese:** material de planilhas pode existir em subpasta não-varrida (MANUS, Acelera 360, claude.ai project knowledge). Se não, é produção nova.

---

## Peça 3 — ADR_ARQUITETURA

**Arquivos classificados:** 12 (todos Cowork)
- Jornada E0-E7 mestre, Spec-Driven Development, Conceito Hybrid Vertical AI, reuniões Igor/Carlos, Frameworks Estratégicos, Conformidade, UX Carlos, fluxograma, Mapeamento OCDE

**Coverage subpastas:** parcial — 03A-03E tocados. Vazios: 03F (Proof-First), 03G (Router-Ethics canônico), 03H (Stack LLM decision trail)

**Evidência mínima:** 🟡 **PARCIAL** — base conceitual presente, mas ADRs numerados formais (ADR-007 Pricing, próximos ADRs) estão dispersos em outras pastas não-varridas.

### Gap P0
- **Centralizar ADR-007 selado** em `03_ADR/03A_PRICING/` (atualmente vive em 05-ESTRATEGIA)
- **ADR-008 a ADR-012** planejados: Router-Ethics, Proof-First hash, LLM-split Llama/Gemini/Claude, Human-API 4 tiers, Firewall OAB técnico

### Gap P1
- Template ADR padronizado (contexto → decisão → consequências → status)
- Changelog transversal ADRs

### Gap P2
- Integração Linear/Obsidian para status-tracking de ADRs

---

## Peça 4 — DEFESA_ANTROPOLÓGICA

**Arquivos classificados:** 18 (2 B2B + 16 COW)
- Crisálida, Amuletos, Hipervulnerabilidade, Correção 48h, Alquimia, Plataforma das Plataformas, Grimório Anjo, Playbooks (operador/custódia/Beto), System Prompt Beto, Plano Gilberto

**Coverage subpastas:** 04A (Zilda-Layer), 04B (Dignidade), 04C (Anjos), 04D (Grimório Ética) cobertos. 04E (Tagline/comparativo vs legaltechs) **vazio** — apesar de ADENDO indicar que screencasts Cowork deveriam ir aqui (foram para 09_LEGADO por falta de critério visual).

**Evidência mínima:** 🟢 **OK** — narrativa antropológica robusta, Zilda-Layer bem documentada.

### Gap P0
- **04E_TAGLINE/comparativo_vs_legaltechs/** — produzir benchmark comparativo formal (MC vs Jusbrasil/legaltechs grandes), atualmente só existe em formato disperso

### Gap P1
- Grimório Anjo v2 consolidado (hoje fragmentado em 5 arquivos)
- Casos-âncora documentados (Dona Zilda, Mãe de Marcelo) com permissão LGPD

### Gap P2
- Curadoria visual (screencasts, ilustrações) migrados de 09_LEGADO para 04E

---

## Peça 5 — ÂNCORA_R$12k

**Arquivos classificados:** 8 (3 B2B + 5 COW)
- B2B: tabela OAB honorários, benchmark escritório IA
- COW: 4 hipervulnerabilidade digital + Ecossistema INSS

**Subpastas propostas (ausentes no esqueleto original):**
- **05G_HIPERVULNERABILIDADE_DIGITAL/** (NEW) → 4 arquivos Cowork primários
- **05C_ADVOGADO_INTERIOR/** → ~3 arquivos B2B

**Evidência mínima:** 🟡 **PARCIAL** — âncora R$12k fundamentada conceitualmente mas falta **quantificação do LTV por cascata familiar** (hoje apenas narrada).

### Gap P0
- **Matriz LTV cascata familiar v3.0** — por tipo de núcleo (idoso + cuidador + filho) × benefício concedido × recorrência Guardião
- **Validar piso R$12k** contra BEPS Serra do Ramalho (dados reais de valor desbloqueado por caso)

### Gap P1
- Comparativo R$12k vs tabela OAB estadual (evidência: cumpadre custa ~60% do advogado padrão)
- Rastro Advogado-do-Interior: quem cobra quanto hoje no Nordeste?

### Gap P2
- Calculadora pública âncora (input: idade, CID, vulnerabilidade → output: faixa valor + rota recomendada)

---

## Peça 6 — NUBANK_LAYER

**Arquivos classificados:** 0 🔴

**Evidência mínima:** 🔴 **VAZIO TOTAL.**

### Gap P0 (bloqueante v3.0)
- **Toda a espinha Nubank** está ausente deste escopo: fintech-layer, Phi4 (COGS por coorte), Guardião R$19,90/mês, cascata familiar bancarizada
- Material pode existir em `OBSIDIAN_MC/05-ESTRATEGIA/` ou `claude.ai project knowledge` — **recomendação: Varredura-C dirigida para Nubank**

### Gap P1
- Desenho operacional Guardião (produto pós-concessão)
- Integração Pix/conta-salário + DataPrev

### Gap P2
- Racionalidade expansão pós-previdenciário (saúde, sucessório)

---

## Peça 7 — EXÉRCITO_ESPECIALISTAS

**Arquivos classificados:** 29 (27 B2B + 2 COW)
- B2B: qualificação Juliana Melo (canônico), encerramento Alencar, cases advogados parceiros, CRM jurídico
- COW: Simulação LGPD, DPA Anthropic SCCs

**Subpastas criadas:**
- `07A_JULIANA_MELO/correspondencia/alencar-historico/` (mantém histórico ciclo anterior)
- `07A_JULIANA_MELO/qualificacao/` (canônico v1.1)
- `07A_JULIANA_MELO/cumpadre-advogados/` (B2B fundacional)

**Evidência mínima:** 🟢 **FORTE** — Cumpadre Advogados bem instrumentado, Dra. Juliana Melo OAB-GO 38.662 validada.

### Gap P0
- **Contrato B2B Cumpadre Advogados formalizado** (atualmente em minuta)
- **Marketplace de advogados marginais** (Alencar + Jessica Lorrane retomam papel marketplace, não core)

### Gap P1
- Onboarding padrão advogado parceiro (SLA, honorários, divisão de risco)
- Treinamento Anjos pela Dra. Juliana (registrar sessões)

### Gap P2
- Dashboard match escala: advogado × vertical × região
- DPA Anthropic reavaliado quando escalar Claude para produção

---

## Peça 8 — FIREWALL_OAB

**Arquivos classificados:** 24 (18 B2B + 3 COW + 3 CLK)
- B2B: ACPs OAB-SP, REsp 2.079.440, Ementa CFOAB 069/2024, GROK/PERPLEXITY dossiês advocacia brasileira
- COW: Visual Law contratos, Advocacia Popular, Nicho Previdenciário
- **CLK: MC-CLICKUP-EXTRACAO + Fatia0 CAS001 + Fatia0 JER001 → 08H_LGPD_INCIDENTES/clickup-pii-leak-abril2026/** (NEW subpasta)

**Subpasta nova proposta:**
- **08F_MERCADO_ADVOCACIA_BRASILEIRA/** (NEW) — 18 B2B de contexto estratégico
- **08H_LGPD_INCIDENTES/** (NEW) — incidente vivo com PII (CPF + senha gov.br em custom field ClickUp)

**Evidência mínima:** 🟢 **FORTE** — Firewall OAB tem jurisprudência, pareceres, contrastivos + um **incidente LGPD real documentado** que valida por que o Firewall é inegociável.

### Gap P0
- **Remediar incidente LGPD ClickUp ANTES do duelo** (CPF CAS001 + senha gov.br expostos em custom field — ação imediata)
- CNAE 6201-5/01 × atividade-fim: cross-referência formal (parecer Juliana + 3 precedentes judiciais)

### Gap P1
- Relatório-sentinela: monitoramento REsp previdenciário × OAB (automatizar)
- Playbook interno: "o que NÃO fazer" (checklist atividade-meio)

### Gap P2
- Sistema ético-jurídico auditável (LangFuse traces + flag advocacia detection)

---

## Peça 9 — ARQUIVO_LEGADO

**Arquivos classificados:** 101 (8 B2B + 61 COW + 32 CLK)

**Breakdown:**
- **Bravy-Marlon:** 10 arquivos (reuniões, briefings, transcrições)
- **Tooling ClickUp reconstruction:** 11 arquivos
- **Tooling N8N Bravy:** 3 arquivos
- **Vendor cancellation (LightForms/Make):** 9 arquivos
- **Tooling skills constellation:** 20 arquivos (skills/notebooklm references)
- **Bravy ClickUp extraction raw:** 1 arquivo (429-task dump)
- **Biografia/etnografia:** ~8 arquivos
- **Meta-varredura:** ~5 arquivos
- **Confidencial:** 1 arquivo (Valuation v2.0 protegido)
- **Outros:** ~33 arquivos diversos

**Subpastas novas propostas:**
- `09_LEGADO/bravy-marlon/`, `/tooling-clickup-reconstruction/`, `/tooling-n8n-bravy/`, `/tooling-infra/`, `/tooling-skills-constellation/`, `/tooling-skills-notebooklm/`, `/vendor-cancellation/lightforms-make/`, `/bravy-clickup-extraction/`, `/confidencial/`, `/marketing-social/`

**Status:** 🟢 **Peneira funcionou** — 50% do acervo foi filtrado para legado, mantendo duelo v3.0 enxuto.

---

## Consolidação P0/P1/P2

### P0 — Bloqueantes para v3.0 (fazer antes do duelo)

1. **Peça 1:** iniciar medição tempo-tela REAL (ClickUp Time Spent ativo 14 dias) + matriz 7 espécies
2. **Peça 2:** planilha MC-CENARIO-v3_0 com Φ/Ψ + unit economics por vertical
3. **Peça 6:** localizar/produzir material Nubank (Varredura-C ou produção nova)
4. **Peça 4:** 04E_TAGLINE/comparativo_vs_legaltechs/ formalizado
5. **Peça 5:** matriz LTV cascata familiar validada vs BEPS
6. **Peça 7:** contrato B2B Cumpadre Advogados assinado
7. **Peça 8:** remediar incidente LGPD ClickUp (CPF + senha gov.br expostos)

### P1 — Fortalecem sem bloquear

- Peça 1: logs retry gov.br por operador + curva de aprendizado α medido
- Peça 2: calculadora pública dual Zilda/STF
- Peça 3: template ADR padronizado, ADR-008 a 012
- Peça 4: Grimório Anjo v2 consolidado + casos-âncora LGPD-compliant
- Peça 5: benchmark vs tabela OAB estadual
- Peça 7: onboarding padrão advogado parceiro
- Peça 8: playbook "o que NÃO fazer" atividade-meio

### P2 — Pós-duelo

- Peça 1: integração Obsidian auto-update
- Peça 2: dashboard LookerStudio
- Peça 3: Linear tracking ADR status
- Peça 4: curadoria visual tagline
- Peça 5: calculadora pública âncora R$12k
- Peça 6: racional expansão saúde/sucessório
- Peça 7: dashboard match escala advogado × vertical
- Peça 8: auditoria ético-jurídica automatizada (LangFuse)

---

## Achados laterais relevantes

1. **Zero cronometragem operacional** em todas as 3 pastas varridas. O dump ClickUp de 429 tasks tem `Time Spent = 0` em 100% dos registros — confirma que a base empírica da Peça 1 precisa ser **produzida agora**, não garimpada do passado.

2. **Incidente LGPD ativo:** arquivo CLK-001 documenta custom field "MEU INSS" no ClickUp com senha gov.br de CAS001 em texto claro. Proposta: tratar como Peça 8 evidence (prova viva de por que Firewall LGPD é inegociável) + remediar imediatamente (deletar custom field + rotacionar senha CAS001).

3. **Duplicação estrutural "Gestão = Administrativo":** bug da estrutura Bravy ClickUp documentado — 2 Spaces servem ao mesmo propósito. Registrado como legado; a reconstrução v2.0 (CLK-023) já resolve.

4. **Tensão Juliana Alencar vs Juliana Melo:** resolvida na Varredura-A. Alencar → histórico preservado em `07A_JULIANA_MELO/correspondencia/alencar-historico/`. Melo é canônica (OAB-GO 38.662, contrato B2B fundacional).

5. **Valuation v2.0 CONFIDENCIAL:** detectado em Cowork e rotado para `09_LEGADO/confidencial/` com flag_review=true — CLAUDE.md restringe exposição.

6. **Skills constellation (20 arquivos):** tooling Claude Code skills — fora do duelo v3.0, legado puro.

7. **LightForms/Make saga (9 arquivos):** evidência de waste vendor (12 meses pagando sem usar). Útil para narrativa cost discipline, mas legado.

---

## Próximos passos sugeridos (ordem)

1. **Founder valida** este relatório e aprova subpastas novas (05G, 08F, 08H + clusters 09)
2. **Remediar incidente LGPD** ClickUp (ação imediata, não-depende-de-duelo)
3. **Varredura-C dirigida** para Peça 6 Nubank (subpastas candidatas: MANUS, Acelera 360, claude.ai project knowledge, 05-ESTRATEGIA)
4. **Iniciar medição tempo real** ClickUp Time Spent (baseline 14 dias para Peça 1)
5. **Produzir planilha MC-CENARIO-v3_0** (Peça 2, pré-duelo)
6. **Execução movimentação física** `aplicar_plano.py --manifesto MANIFESTO-ARMADURA-B-v1_0.csv --dry-run` (só após OK explícito)

---

## Limite de responsabilidade

Varredura-B mapeou **o esqueleto físico** presente nas 3 pastas. A leitura de mérito estratégico — se cada gap é realmente bloqueante no duelo vs Opus 4.7, se subpasta nova deve virar canônica, se incidente LGPD justifica pausar outras frentes — retorna ao chat com Claude Opus 4.7.

**FIM RELATÓRIO.**
