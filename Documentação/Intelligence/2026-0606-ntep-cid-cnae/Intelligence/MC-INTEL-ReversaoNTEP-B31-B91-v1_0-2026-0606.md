---
tipo: inteligencia-estrategica
artefato: "MC-INTEL — Brief de Inteligência Estratégica"
versao: v1_0
status: PROVISIONAL · mesa de trabalho (Cérebro 1) · FIXTURE/TESTE · não selado no Vault
data: 2026-06-06
forja: mc-strategic-intelligence v0.1 (FIXTURE · modo degradado — notebooklm CLI ausente no sandbox)
tema: "Reversão B31→B91 via NTEP (Nexo Técnico Epidemiológico) — janela de mercado 2026"
recorte: "só fonte pública · prioriza YouTube de peritos/advogados previdenciários + docs INSS/TCU"
zona: Verde
gate: "R1 (intel pública) · escalar R3 se a aplicação a um caso real tocar OAB/LGPD/PII"
notebook_id: "[PENDENTE — criar em sessão local: 'MC- Intel: NTEP CID-CNAE 2026-0606']"
vertical_ancora: "Previdenciário (âncora) → passarelas Saúde + Trabalhista"
---

# MC-INTEL · Reversão B31→B91 via NTEP — janela de mercado 2026

> **Hierarquia: D > C > V** · Proof-First · Teste Zilda-STF
> Procedência: tema *Reversão B31→B91 via NTEP* · recorte *fonte pública, prioriza YouTube* · NotebookLM `[PENDENTE — sessão local]` · colhido em 2026-06-06.
> ⚙️ **Modo degradado:** rodado como FIXTURE de regressão do pipeline de estruturação. A análise profunda do NotebookLM (síntese multi-fonte, infográfico) roda em sessão local com a CLI `notebooklm-py`. Aqui valida-se o **esqueleto Proof-First + Router-Ethics + Skybridge + Flywheel** com lastro interno do vault.

## 1. Resumo Executivo (Teste Zilda-STF)
- Quando um trabalhador adoece por causa do trabalho mas o INSS concede auxílio-doença **comum (B31)** em vez de **acidentário (B91)**, ele perde estabilidade de 12 meses, FGTS no afastamento e a via da ação regressiva. O **NTEP** cruza o **CID** do laudo com o **CNAE** da empresa: se há nexo epidemiológico presumido, a espécie correta é B91.
- O MC é **atividade-meio**: a IA detecta a divergência CID×CNAE e organiza a evidência; a peça de reversão e qualquer conclusão jurídica são da advogada parceira (Firewall OAB).
- É um **produto de passarela** (Skybridge): entra pelo Previdenciário, ativa Saúde e Trabalhista, e abre cascata (FGTS + estabilidade + regressiva).

## 2. Análise Estruturada
[PENDENTE — NotebookLM sessão local] Síntese profunda multi-fonte (YouTube de peritos/advogados + Nota Técnica INSS + acórdãos TCU) a ser gerada via `notebooklm ask --json` + `generate report`. Esqueleto a preencher: (a) mecânica do NTEP e presunção legal; (b) onde o INSS erra a espécie na prática; (c) o que torna a reversão administrativa viável vs. judicial; (d) tamanho da janela 2026.

## 3. Linha de Evidência (Proof-First)
| # | Afirmação | Fonte (autor · URL · data) | Estado | Nota |
|---|---|---|---|---|
| 1 | O produto B31→B91 via NTEP cruza CID do laudo × CNAE da empresa; divergência = peça de reversão; recupera FGTS + estabilidade 12m + abre ação regressiva. | `05-ESTRATEGIA/produtos/MC-PRODUTO-JornadaEcossistema-v2_0-2026-0503.md:264` (interno · 2026-05-03) | ✅ verificado | Fonte canônica interna (Zona Verde). |
| 2 | B31/B91 têm janela DIB de 30 dias do evento médico (Art. 60 §1º Lei 8.213/91); após, DIB=DER e o retroativo se perde → SLA 24h. | `CLAUDE.md` Regra 7 (Protocolo DIB Urgency) | ✅ verificado | Liga o produto ao SLA de urgência. |
| 3 | As 9 verticais conectam-se por Skybridges bidirecionais com o Previdenciário como âncora. | `…JornadaEcossistema…:248-259` (interno · 2026-05-03) | ✅ verificado | Base da §5. |
| 4 | Volume de mercado de concessões B31 com CID×CNAE divergente elegíveis a reversão (Brasil, 2025-2026). | `[FONTE PENDENTE]` | ⚠️ não-verificado | **Exige** garimpo público (TCU/INSS/Datatprev) no NotebookLM — não fabricar. |
| 5 | Taxa de êxito da reversão **administrativa** (vs. judicial) por NTEP. | `[FONTE PENDENTE]` | ⚠️ não-verificado | Buscar acórdãos/estudos; marcar contraprova (lado B). |

## 4. Leitura Router-Ethics 11.0
> Aplica-se: o produto **roteia ação sobre caso** (reversão), logo os 3 scores são pertinentes na E2 (Triagem/Deliberação).

| Score | Faixa | Leitura estratégica |
|---|---|---|
| **Confidence** | Verde ≥70 / Amarela 40-70 / Vermelha <40 | Divergência CID×CNAE é **determinística** (tabela NTEP) → tende a **Verde** na detecção. Mas a *decisão de reverter* mistura clínica+jurídico → provável **handoff Rota C** (advogada). |
| **Complexity** | — | **Alta**: cruza prova médica + vínculo empregatício + presunção legal. Eleva handoff — não é caso de autonomia plena. |
| **Fraudscore** | — | Vetor a vigiar: laudo inflado / CID forçado para casar com CNAE. Antifraude antes de protocolar (protege o Firewall e a advogada). |

## 5. Conexões com as Verticais Skybridge
- **Vertical âncora:** Previdenciário (entrada pelo B31 em curso).
- **Passarelas ativadas:** **Saúde** (laudo/CID, telemedicina p/ perícia) ↔ **Trabalhista** (estabilidade 12m, FGTS, ação regressiva contra a empresa).
- **Cascata potencial:** reversão B91 → estabilidade → (se desligamento indevido) reintegração/verbas → eventual **Bancário** (consignado indevido durante afastamento · CDC).

## 6. Insumo pro Proprietary Data Flywheel (MoR · DE-IDENTIFICADO)
> `Flywheel-Inputs/` · padrão/método, **nunca PII**. Não confundir com o SoR do cidadão.
- **Padrão de método capturado:** heurística "CID×CNAE divergente ⇒ candidato a B91" como **regra de triagem reutilizável** — generalizável sem qualquer dado pessoal.
- **Como enriquece o MoR:** vira nó de método no acervo proprietário de detecção de espécie errada (Method-of-Record de-identificado). Lastro do conceito: `Documentação/02-Arquitetura/Squad-Evolutivo/agents/disrupter-escala-zilda.md:51,59`.
- **Impacto em escala (40-60M):** "epidemia ocupacional invisível" — milhões de B31 que deveriam ser B91. Teste Zilda: reverte perda de FGTS/estabilidade de quem adoeceu no trabalho. **Alta Escala + Dignidade.**

## 7. Entregável NotebookLM
- **Tipo sugerido:** resumo executivo (`generate report --format briefing-doc`) **+** infográfico da mecânica CID×CNAE→B91.
- **Arquivo:** `[PENDENTE — sessão local → Research/briefing-ntep.md + Research/infografico-ntep.png]`.

## 8. Recomendação de Governança (GHS-Pipefy / SoR / ADR)
- **Vira artefato?** [x] **Card Pipefy** — pipe "Produtos Fase 2", fase "Discovery/Validação NTEP" · [ ] Registro SoR de-identificado (só quando virar caso real, sob R3) · [x] **ADR candidato:** "Produto Reversão NTEP — escopo atividade-meio + gatilho Router-Ethics" · [ ] só arquivo de mesa.
- **Próximo gate:** R1 arquiva este Brief na mesa; o ADR candidato sobe a **R2**; aplicação a caso real de cidadão = **R3** (Dra. Juliana · OAB/LGPD/PII).
- **Padrão recorrente detectado?** Ainda não (1ª rodada). Se temas "produto de passarela" recorrerem, proponho seção no `CLAUDE.md` mapeando o gatilho Router-Ethics por produto — **diff a propor no gate R2**, nunca auto-editado.

## 9. Lacunas & Próximos Passos
- `[FONTE PENDENTE]`: volume de mercado (#4) e taxa de êxito administrativo (#5) — garimpar no NotebookLM com contraprova obrigatória.
- Próximo recorte: "Reversão NTEP — via administrativa vs. judicial: onde a atividade-meio agrega sem invadir a atividade-fim".

---
*MC-INTEL v1_0 · FIXTURE/TESTE · mesa de trabalho (Cérebro 1) · NÃO selado · D > C > V · Proof-First · Zona Verde · Sempre*
