# 📋 Painel Estratégico

> Última atualização: 06/04/2026 · **revisão pontual 01/06/2026** (ver banner)
> Fase: **Crisálida** | Status: Pré-revenue

> ⚠️ **Banner de revisão — 01/06/2026.** Este painel está **congelado em 06/04/2026**; frentes, métricas e decisões abaixo refletem abril e precisam de atualização geral.
> **Correção factual já aplicável:** a parceria **fundacional** não é mais "Alencar Advogados" — aquele ciclo encerrou em 13/04/2026. A parceira fundacional/integrada é a **Dra. Juliana Pereira de Melo** (Melo Advogados, OAB-GO 38.662). Os itens abaixo que citam "contrato de gaveta / holding Alencar" referem-se ao **plano fundacional de abril (superado)**.
> **Modelo de marketplace (Opção C · saneamento ADR-009b SELADO · decisão do Founder 06/06/2026):** durante a Crisálida (exclusividade até **31/12/2026**) **só a Dra. Juliana Melo é apresentada** ao cidadão. As demais parceiras credenciadas **são reais** e ficam **reservadas a posteriori** (inclusão imediata se houver provocação/stress da OAB). Marketplace randômico ampliado reabre em **01/01/2027** (Melo permanece). Por isso os nomes das reservadas não figuram em artefatos vivos de apresentação.

---

## Estado das Frentes (Abril 2026)

### 🔴 Urgente
- **ADR-007 Precificação** — Equações seladas. Falta: modelagem cenários (Manus T8-T9 ⚠️ verificar status), validação jurídica externa, piloto A/B R$97 vs R$147. #adr #decisao
- **Análise LAI Lote 1** — Resposta MGI/SGD recebida 01/04. Triagem técnica pendente (despacho + 3 planilhas). Alimenta ADR-007 e dossiê Proof-First. #dados
- **Reagendar reunião Iuri (Bravy)** — Encontro de 06/04 16h adiado por doença. Mapeamento ClickUp/processos travado até nova data. #operacoes

### 🟡 Em Andamento
- **Diário Sistêmico Jornada Usuário** — Pesquisa em curso. Serve ADR-007 + CDC + investidor. #pesquisa
- **Contrato de gaveta — Alencar Advogados** — Modelo B2B2C selado. MC presta infraestrutura tecnológica ao escritório (~95% exclusividade). Formalizar instrumento. #juridico
- **Bravy School — Mapeamento processos** — Iuri lidera trilha ClickUp/MGI. ⚠️ Risco VibeCoding upsell mantido. #operacoes
- **Playbook Custódia Credenciais gov.br** — v1.0 concluído 26/03. Manter em revisão contínua. #governanca

### 🟢 Concluído Recente
- ✅ Dia D — Claude Code + Obsidian + ClickUp operacionais (25/03)
- ✅ Briefing C-Level para Claude Code (27/03)
- ✅ CLAUDE.md gerado (27/03)
- ✅ Estruturação do vault Obsidian (27/03)
- ✅ **Holding Juliana DESCARTADA** — substituída por contrato de gaveta B2B2C com Alencar Advogados Associados s/c. Firewall OAB resolvido via instrumento operacional, sem holding societária. (06/04)
- ✅ **LAI Lote 1 — Processo 18002.003265/2026-52** — MGI/SGD respondeu em 01/04/2026. Recebidos: `SEI_59709603_Despacho.pdf`, `ExtracaoeSIC.xlsx`, `inss.xlsx`, `MeusPedidos.xlsx`. (06/04)
- ✅ **NotebookLM CLI integrado** — `notebooklm-py 0.3.4`, skill instalada no Claude Code, 165 notebooks reorganizados em 6 clusters (MC-/CASE-/TECH-/PESSOAL-/ARQUIVO-/DPE-BA intocados). Doc: `02-ARQUITETURA/MC-INFRA-NotebookLM-CLI-v1_0-2026-0406.md`. (06/04)
- ✅ Sync ClickUp↔Obsidian estável — daemon 5min, 419+ tarefas
- ✅ Correção de paths no `CLAUDE.md` (06/04)

---

## 🔍 Achados Preliminares — LAI Lote 1

Confirmados pelo próprio MGI/SGD na resposta de 01/04:

1. **Conecta Gov.br bloqueado para setor privado** — confirmação oficial. Inviabiliza integração direta MC↔gov.br pela via Conecta. Caminho alternativo precisa ser desenhado.
2. **Classificação A-E descontinuada** — substituída por sistema de **Selos não públicos**. Critério oficial de maturidade digital deixou de existir como ferramenta de auditoria externa.
3. **"Digital" ≠ usável** — confirmado pelo próprio MGI. Serviço marcado como digital no painel oficial não significa que cidadão hipervulnerável consegue usar. Reforça tese central do MC (IVCAD).

**Implicação estratégica:** os 3 achados são munição direta para CPMI, ADR-007 (modelagem custo de fricção) e narrativa investidor. Triagem técnica detalhada das 3 planilhas é a próxima ação.

---

## Decisões Pendentes

| # | Decisão | Tipo | Bloqueio |
|---|---------|------|----------|
| 1 | Preço piloto: R$97 ou R$147? | Tipo 1 (irreversível) | Aguarda modelagem Manus ⚠️ verificar status |
| 2 | B2B first ou B2C first? | Tipo 1 | COGS indica B2B first; modelo Alencar reforça B2B2C |
| 3 | Formalização contrato de gaveta Alencar | Tipo 1 | Redação do instrumento |
| 4 | Grimório Acidentário v1 — quando iniciar? | Tipo 2 (reversível) | Depende da Juliana (operação Alencar) |
| 5 | Análise das 3 planilhas LAI — quem executa? | Tipo 2 | Definir responsável e prazo |

---

## Métricas-Alvo Phase 1 (até Junho 2026) ⚠️ verificar

| Métrica | Meta | Atual |
|---------|------|-------|
| Usuários piloto pagantes | 500 | 0 |
| Taxa concessão Proof-First | >80% | — |
| NPS | >80 | — |
| Docs no Grimório Acidentário | v1.0 | 0 |
| ADRs formalizados | 10 | 7 (ADR-001 a 007) ⚠️ verificar |

> Revisar coerência das metas e contagem de ADRs após análise LAI.

---

## Próximos Marcos

- [ ] Triagem técnica das 3 planilhas LAI Lote 1 (ExtracaoeSIC, inss, MeusPedidos)
- [ ] Modelagem cenários Manus (T8-T9) ⚠️ verificar status
- [ ] Redação do contrato de gaveta MC ↔ Alencar Advogados
- [ ] Reagendar reunião com Iuri (Bravy) — mapeamento ClickUp
- [ ] LAI Lote 2 (maio, calibrado a partir dos achados Lote 1)
- [ ] Piloto 500 usuários

---

*Atualizar este painel semanalmente. É o cockpit do founder.*
*D > C > V | Sempre*
