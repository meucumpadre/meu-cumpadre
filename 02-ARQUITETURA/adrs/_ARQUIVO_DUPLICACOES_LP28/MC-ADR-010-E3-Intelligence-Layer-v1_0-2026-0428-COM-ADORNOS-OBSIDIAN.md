# MC-ADR-010-E3-Intelligence-Layer-v1_0-2026-0428.md

---
tipo: ADR
subtipo: arquitetura-futura
codigo: MC-ADR-010
versao: 1.0
data-criacao: 2026-04-28
status: REGISTRADO-PENDENTE-IMPLEMENTAÇÃO
autor: Alessandro Neves (CEO) × Claude (co-founder intelectual)
tags: [adr, notebooklm, e3, intelligence, llm, dossie, arquitetura-futura]
---

## Contexto

Durante sessão estratégica de 28/04/2026, identificamos que a etapa E3 (Coleta Documental) é o gargalo de inteligência da Jornada E0-E7. O dossiê bem construído em E3 determina o desfecho em E6. Atualmente, a análise estratégica do caso depende inteiramente do expertise humano do Alessandro.

## Decisão

Registrar como arquitetura futura o **E3 Intelligence Layer** — camada de inteligência que cruza dois cadernos NotebookLM via LLM para gerar relatório estratégico por caso.

## Arquitetura

**Dois cadernos de entrada:**

| Caderno | Conteúdo | Tipo |
|---------|----------|------|
| `CASE-POP-[Espécie]` | Legislação + normativos INSS + formulários + POP MC + instruções da espécie | Permanente (9 cadernos fixos) |
| `CASE-[Pseudônimo]` | CNIS + documentos do cliente + histórico de indeferimentos | Temporário (ciclo E3, máx 15 dias) |

**Output: `relatorio-estrategico-[pseudonimo].md`**

Salvo em `Drive/03_dossie/` antes de cristalizar o dossiê final. Contém:
- Mapa de cobertura contributiva (lacunas e pontos fortes)
- Documentos presentes × documentos necessários × documentos críticos ausentes
- Riscos jurídicos identificados (ponto fraco do caso)
- Rota recomendada (A/B/C via Router-Ethics)
- Peças de fortalecimento sugeridas
- Estimativa de probabilidade de deferimento

## Implementação por fases

**Fase atual (Crisálida — manual):**
Alessandro opera os dois cadernos manualmente, gera relatório em 20-30 min por caso. Sem automação. Resultado salvo no Drive. Beto operacionaliza coleta com base no relatório.

**Fase 2 (50+ casos simultâneos — semi-automático):**
Claude Code orquestra: abre cadernos via `notebooklm-py`, injeta prompt de análise, gera rascunho do relatório. Alessandro revisa e aprova antes de salvar no dossiê.

**Fase 3 (escala — automático com revisão humana obrigatória):**
N8N + Claude Code + NotebookLM. Relatório gerado automaticamente ao final de E3. Alessandro ou supervisor T3 assina o relatório antes de avançar para E4. Assinatura via ZapSign (ADR-014, substitui Autentique).

## Campos ClickUp associados (já implementados)

- `notebooklm_cliente_url` — URL do caderno temporário do cliente
- `notebooklm_pop_ref` — espécie do POP de referência
- `notebooklm_status` — Não iniciado / Ativo / Hibernado / Excluído

## Restrição permanente

**Relatório gerado por Gemini exige revisão humana obrigatória antes de ir para o dossiê.** Gemini fabrica dados (decisão selada). Claude Code é preferível como LLM de geração — mas mesmo assim, revisão humana é inviolável antes de E4.

## Status

Registrado. Não implementar até gate: 20+ casos cronometrados em E3 com dados empíricos de tempo real (A4-PENDENTE do ADR-007).

---

# PROMPT PARA GUIA CLICKUP
# Adicionar campos NotebookLM + E3 Intelligence Layer
# Copie entre INÍCIO e FIM

---

## INÍCIO DO PROMPT

---

Cumpadre, preciso adicionar ao ClickUp os campos e automations do **E3 Intelligence Layer** — decisão estratégica registrada hoje (28/04/2026) como ADR-010.

### Contexto

A etapa E3 (Coleta Documental) da Jornada E0-E7 passa a ter suporte de dois cadernos NotebookLM:

1. **Caderno POP da espécie** (permanente) — legislação + normativos INSS + formulários + POP MC
2. **Caderno do cliente** (temporário, máx 15 dias) — docs do cliente + CNIS + histórico

O cruzamento dos dois gera um **relatório estratégico** salvo no Drive do cliente antes de cristalizar o dossiê.

### O que preciso que você faça

**Ação 1 — Adicionar 3 campos novos ao grupo Integração do Space CASOS B2C:**

| Campo | Tipo | Classificação | Valores / Descrição |
|-------|------|---------------|---------------------|
| `notebooklm_cliente_url` | URL | N2 | Link do caderno temporário do cliente no NotebookLM. Preenchido quando caso entra em E3. |
| `notebooklm_pop_ref` | Dropdown | N2 | POP-Rural / POP-BPC / POP-Hibrida / POP-Incapacidade / POP-Especial / POP-Acidentario / POP-Pensao / POP-Planejamento / POP-Generico |
| `notebooklm_status` | Dropdown | N2 | Não iniciado / Ativo / Hibernado / Excluído |

**Ação 2 — Adicionar Automation A6:**

- **Gatilho:** campo `etapa_atual` muda para `E3`
- **Condição:** `notebooklm_status` = "Não iniciado"
- **Ação:** notificar `custodia_operador` com mensagem: "Caso [pseudônimo] entrou em E3. Criar caderno NotebookLM do cliente e preencher notebooklm_cliente_url."

**Ação 3 — Adicionar Automation A7:**

- **Gatilho:** task permanece com status "Aguardando documentação" por mais de 15 dias
- **Condição:** `notebooklm_status` = "Ativo"
- **Ação:** mudar `notebooklm_status` para "Hibernado" + notificar Alessandro com mensagem: "Caso [pseudônimo] bloqueado >15 dias. Caderno NotebookLM deve ser hibernado (exportar para Drive + deletar)."

### Referência de IDs existentes

- Space CASOS B2C: usar ID retornado pelo `mc-clickup-bootstrap.py`
- Custom Fields grupo Integração: campos `adr_obsidian_url`, `drive_folder_url` já existem — adicionar os 3 novos ao mesmo grupo

### Regras de execução

- Não alterar campos já existentes
- Classificação dos 3 novos campos: N2 (identificável não-sensível)
- Se API de automations não estiver disponível, documentar A6 e A7 como TODO manual via UI
- Reportar IDs dos campos criados ao final

Executa.

---

## FIM DO PROMPT

---
---

## Documentos relacionados
- [[_MC-MANIFESTO-NovaOrdem-v1.0-2026-0427 Identidade Posicionamento e Valuation MC]]
- [[MC-INSTRUCOES-PROJETO-v6_0_2-2026-0509]]
- [[MC-PROCESSO-Jornada_E0E7_Mestre-v1_3_1-2026-0509]]
- [[_MC-RouterEthics_11_v1_1-2026-0505-CLevel]]
- [[MC-ADR-007-CampoPrecificacao-v3_8-ADDENDUM-2026-0507]]
- [[MC-ADR-009a-Custodia_Credenciais_GovBr-v2_0-2026-0425]]
- [[MC-ADR-009b-TresEstados-Custodia-Dossie-v1_0-2026-0417]]
- [[MC-ADR-010-E3-Intelligence-Layer-v1_0-2026-0428]]
- [[MC-ADR-011-Arquitetura3Cerebros-v1_0-2026-0509]]
- [[MC-ADR-013-ConvencoesOperacionais-IVCAD-MC-v1_0-2026-0507]]
- [[MC-PARECER-CONSOLIDADO-v3_4-2026-0427]]
- [[MC-PAUTA-Juliana-19Mai-v2_0-2026-0509]]
- [[MC-GOVBR-ArvoreDecisao-APIHumana-v1_1-2026-0509]]
- [[MC-ESTUDO-Arquitetura-Custo-Sistemico-v1_0-2026-0427]]