---
type: mapa
data: 2026-05-09
hora-scan: pós-Anamnese E12
versao: v1.3 (foto pós-Anamnese E12)
supersede: MC-MAPA-Documentacao-Drive-v1_2-2026-0509.md
baseline: MC-MAPA-Documentacao-Drive-v1_0-2026-0429.md
status: foto-de-atualização-evolutiva
proxima-revisao: 2026-05-14 (alinhada com Grid v1.1) ou trigger
---

# MC-MAPA-Documentacao-Drive — Inventário Estratégico v1.3

**Caminho:** `G:\Meu Drive\0 0 MEU CUMPADRE\0 0 Gestão Software\Documentação`
**Data:** 2026-05-09 (atualização pós-Anamnese E12)
**Versão:** v1.3 — após produção da **Anamnese-Triagem-GovBr v1.0** que resolve a única pendência crítica do v1.2.
**Supersede:** [v1.2](./MC-MAPA-Documentacao-Drive-v1_2-2026-0509.md) (mesma data, pré-Anamnese)
**Baseline:** [v1.0](./MC-MAPA-Documentacao-Drive-v1_0-2026-0429.md) (2026-04-29 10:51 BRT)

> **Para que serve esta v1.3:** registrar a conclusão da Sprint MC-GOVBR. A Anamnese de Triagem (E12) — listada como faltante no v1.2 — foi produzida e está agora gravada na pasta canônica `GOV.BR-API-HUMANA\` + replicada no vault `06-OPERACOES\`. Sprint encerrado com **13 documentos** (não 12 — incluindo a Anamnese).

---

## ⚡ ATUALIZAÇÃO v1.3 — Anamnese E12 v1.0 produzida (09/05/2026)

### O que mudou desde v1.2

| Item | v1.2 | v1.3 |
|---|---|---|
| **Anamnese-Triagem-GovBr v1.0** | ❌ pendente — apenas PROMPT-E12 existia | ✅ **produzida** (23.518 bytes / 363 linhas) |
| Documentos GOVBR no Sprint | 12 | **13** |
| `GOV.BR-API-HUMANA\` (P6) | 4 arquivos | **5 arquivos** (+ Anamnese) |
| Vault `06-OPERACOES\` (MC-GOVBR-*) | 2 arquivos | **3 arquivos** (+ Anamnese) |
| Tier-1 pendência crítica | "produzir Anamnese E12" | ✅ resolvido — Tier-1 agora começa em "eliminar duplicatas" |

### Anamnese E12 — referências e fontes

| Atributo | Valor |
|---|---|
| **Path canônico** | `Jornada _ E0-E7\GOV.BR-API-HUMANA\MC-GOVBR-Anamnese-Triagem-GovBr-v1_0-2026-0509.md` |
| **Path vault** | `OBSIDIAN _ MC\MEU CUMPADRE\06-OPERACOES\MC-GOVBR-Anamnese-Triagem-GovBr-v1_0-2026-0509.md` |
| **Tamanho** | 23.518 bytes · 363 linhas |
| **Fontes** | E8 v1.1 (ArvoreDecisao) + E5 v1.1 (CatalogoTravas) + ERRATA-001 |
| **Produzida via** | PROMPT-E12-v2 (mantido em workspace `CONTA GOV.BR PRATA OURO\`) |
| **Estrutura** | 9 seções: Objetivo · Fluxo (13 MSG, 4 blocos) · Preview Beto · Regras (R1-R5 revisadas + 22 combinações) · Detecção 12 travas · Spec N8N (17 campos ClickUp) · Versão manual · Encaixe ecossistema · Roadmap |
| **Conformidade ERRATA-001** | Rota 1 = biometria facial sempre · KBA diagnóstico nunca como rota inicial · R1-R3 revisadas |

---

## Estado pós-Sprint MC-GOVBR (consolidado)

### `Jornada _ E0-E7\GOV.BR-API-HUMANA\` (P6 — 5 arquivos finais)

| # | Arquivo | Versão | Função |
|---|---|---|---|
| 1 | MC-GOVBR-ArvoreDecisao-APIHumana | v1.1 | Árvore de decisão · 18 cenários · 4 rotas |
| 2 | MC-GOVBR-CatalogoTravas | v1.1 | 46 travas em 3 eixos · quadrantes frequência×impacto |
| 3 | MC-GOVBR-Matriz-NivelServico | v1.2 | Matriz serviço × nível · impactos Φ₁/Φ₀/Φ₄ |
| 4 | MC-GOVBR-ERRATA-001-KBA-Bronze-Reposicionamento | v1.0 | Reposicionamento KBA = Bronze · hierarquia revisada |
| 5 | **MC-GOVBR-Anamnese-Triagem-GovBr** | **v1.0** | **Hook 0 conversacional · 13 MSG · 22 combinações · 12 travas detectáveis · spec N8N** |

### `PEDIDO DE INFORMAÇÃO\GOV.BR-NORMATIVA\` (P2 — 3 arquivos finais)

| # | Arquivo | Versão | Função |
|---|---|---|---|
| 1 | MC-GOVBR-Inventario-Fontes | v1.0 | 52 fontes mapeadas |
| 2 | MC-GOVBR-Taxonomia-Unificada | v1.0 | Vocabulário controlado |
| 3 | MC-GOVBR-MapaNormativo | v1.0 | Mapa normativo gov.br |

### `CONTA GOV.BR PRATA OURO\` (workspace ativo — 12 arquivos remanescentes, sem mudança vs v1.2)

6 PROMPTS geradores · 4 versões anteriores (drafts) · 2 partes intermediárias E8.

### Vault `06-OPERACOES\` (MC-GOVBR-*) — 3 arquivos

| # | Arquivo |
|---|---|
| 1 | MC-GOVBR-ArvoreDecisao-APIHumana-v1_1-2026-0509.md |
| 2 | MC-GOVBR-ERRATA-001-KBA-Bronze-Reposicionamento-v1_0-2026-0509.md |
| 3 | **MC-GOVBR-Anamnese-Triagem-GovBr-v1_0-2026-0509.md** *(novo v1.3)* |

---

## 1. Resumo Executivo (snapshot v1.1, mantido para histórico)

### Comparação v1.0 → v1.1 (referência histórica — 29/04/2026)

| Métrica | v1.0 (10:51) | v1.1 (13:40) | Delta |
|---|---:|---:|---:|
| Total `.md/.pdf` | 1.713 | 521 | −1.192 (−70%) |
| Arquivos na raiz | ~75 | 0 | −100% ✓ |
| Pastas com `.md/.pdf` | 97 | 93 | −4 |
| Stale > 30 dias | 1.403 | 204 | −1.199 |
| Aderência ao padrão `MC-…` | 7,2% | 24,6% | +17,4 pp |
| Duplicatas (mesmo nome) | 58 nomes | 51 | −7 |

### Leitura crítica (v1.1 ainda válida em v1.3)

- A Documentação caiu para 30% do volume original.
- Sinal/ruído melhorou 3,4×.
- Stale despencou 86%.
- A raiz tá zerada — meta principal alcançada.

> Métricas globais não foram re-escaneadas em v1.2 nem v1.3 (apenas deltas estruturais Sprint MC-GOVBR foram registrados). Próximo full-scan: **2026-05-14** com Grid v1.1.

---

## 2. Trabalho Executado no Sprint MC-GOVBR (08–09/05/2026)

| # | Data | Ação | Resultado |
|---|---|---|---|
| 1 | 08/05 | Sprint iniciado em `CONTA GOV.BR PRATA OURO\` | Workspace ativo |
| 2 | 08/05 | Produção dos 3 docs normativos | Inventario · Taxonomia · MapaNormativo (v1.0) |
| 3 | 08/05 | Produção Matriz-NivelServico (v1.0 → v1.1) | Iteração via PROMPT-E4_1 |
| 4 | 08/05 | Produção ArvoreDecisao + CatalogoTravas (v1.0) | Estruturas de decisão e travas |
| 5 | 08/05 | Produção das partes E8 (B + C) | Rotas + FAQ/Ética/Métricas |
| 6 | 09/05 | Produção da ERRATA-001 (KBA-Bronze) | Reposicionamento KBA = Bronze (evidência JAN001) |
| 7 | 09/05 | Versões finais v1.1/v1.2 produzidas | ArvoreDecisao v1.1 · CatalogoTravas v1.1 · Matriz v1.2 |
| 8 | 09/05 | **Reorganização v1.2** | 2 pastas criadas + 7 arquivos movidos + 2 copiados ao vault |
| 9 | 09/05 | **Produção da Anamnese E12 v1.0** *(novo v1.3)* | 13 MSG · spec N8N · gravada em API-HUMANA + vault |

**Sprint MC-GOVBR encerrado:** **13 documentos produzidos** (8 v1.0 do dia 08/05 + 4 v1.1/v1.2 do dia 09/05 + 1 ERRATA + Anamnese E12) + **2 pastas-pilar criadas** + **3 docs replicados ao vault**.

---

## 3. Distribuição Atual (.md/.pdf por pasta de 1º nível) — atualizada v1.3

```
Documentação/  (~529 .md/.pdf · 32 pastas)
├── (root) ............................................. 0  (META mantida ✓)
├── _RECEITA - B2C - DOSSIÊ SELADO _ ADR 007 Precificação 258  (P1)
├── PEDIDO DE INFORMAÇÃO ............................... 64  (P2, +3 vs v1.1)
│   └── GOV.BR-NORMATIVA\ ........................ 3  (NOVA v1.2 — P2)
├── _Knowledge Base v5.0 20.04.2026 ................... 25  (P4)
├── _DNA MC ........................................... 23  (P4)
├── SKILLS _ 8 ........................................ 20  (P3)
├── Bloco 3 ........................................... 16  (P2)
├── 0 FIDUCIÁRIO ... ADR-009/ ........................ 16  (P3)
├── Mapeamento de Processos + ... .................... 14  (P6)
├── _QUEM SOMOS POSICIONAMENTO DE MARCA ............... 13  (P4)
├── CONTA GOV.BR PRATA OURO ........................... 12  (P6, workspace ativo MC-GOVBR)
├── Jornada _ E0-E7 ................................... 11  (P6, +5 vs v1.1)
│   └── GOV.BR-API-HUMANA\ ....................... 5  (NOVA v1.2, +1 v1.3 — P6)
├── LOVABLE ........................................... 9  (P3)
├── 04_2026 ........................................... 8
├── 0 MIcrofases - Dados sobre a Jornada Cliente ...... 7  (P6)
├── 0  GRIMÓRIO PREVIDENCIÁRIO v2 ..................... 7  (P2)
├── _ARQUIVO .......................................... 6
├── ADRs .............................................. 5  (P3)
├── RECEITA - Guardião B2C ............................ 4  (P1)
├── _CONSULTA JURÍDICA 2 .............................. 3  (P2 — pós-limpeza 2026-05-08)
├── MCP ............................................... 3  (P3)
├── _INFRA-ECOSSISTEMA ................................ 3  (P7)
├── RouterEthics ...................................... 3  (P3)
├── APIs _ Documentação ............................... 2  (P3)
├── RECEITA - B2B Advogados ........................... 2  (P1)
├── _FINANCEIRO ....................................... 2  (P5)
├── ENGENHARIA DE PROMPTS _ MC ........................ 2  (P3)
├── BLOCO 4 ........................................... 2  (P2)
├── Bloco 1 ........................................... 1
├── SKILL MASTER ...................................... 1  (P3)
├── Clonar voz _ Relatório de Caso e Planejamento .... 1  (P3)
└── SERVIÇOS  _ BENEFÍCIOS ............................ 1
```

### Pastas vazias remanescentes (sem mudança vs v1.1)

- `MANUS AI` · `Fluxos de Automação` · `LGPD  _  ANDP SCC` — pendência herdada.

---

## 4. Pastas Novas Criadas no Sprint MC-GOVBR

| Pasta | Pilar | Arquivos | Conteúdo |
|---|---|---:|---|
| `Jornada _ E0-E7\GOV.BR-API-HUMANA\` | **P6** | **5** | ArvoreDecisao v1.1 · CatalogoTravas v1.1 · Matriz v1.2 · ERRATA-001 · **Anamnese v1.0** *(novo v1.3)* |
| `PEDIDO DE INFORMAÇÃO\GOV.BR-NORMATIVA\` | **P2** | **3** | Inventario-Fontes v1.0 · Taxonomia-Unificada v1.0 · MapaNormativo v1.0 |

---

## 5. Sinais de Atenção Remanescentes (herdados de v1.1)

Sem mudanças vs v1.2:
- Stale > 30 dias: ~204 arquivos (não tratado neste sprint)
- Duplicatas: 51 nomes
- Pastas > 15 arquivos: 4
- PDFs > 5 MB: 11 (~129 MB)

---

## 6. Limpezas Adjacentes

### 6.1 `_CONSULTA JURÍDICA 2\` — limpeza pós-unificação Pauta v2.0 (2026-05-08)

Apagados 6 arquivos: v1.4–v1.8 da Pauta-Juliana + BlocoM v1.9 (registrado em v1.2).

---

## 7. Pendências Remanescentes (próxima rodada)

### Tier-1 (alto impacto, baixo esforço) — *Anamnese E12 removida (resolvida em v1.3)*

1. **Eliminar duplicatas confirmadas em `_ARQUIVO\duplicatas-revisar\`** — 4 arquivos com hash idêntico (pendência v1.1).
2. **Consolidar 9 PARTES do KB v5.0** (pendência v1.1).
3. **Eleger pasta canônica para ADRs** (pendência v1.1).
4. **Apagar 3 pastas vazias** (`MANUS AI`, `Fluxos de Automação`, `LGPD _ ANDP SCC`) (pendência v1.1).
5. **Replicar Inventario / Taxonomia / MapaNormativo no vault** — atualmente os 3 docs P2 normativos só existem no Drive principal, não no vault. Se forem operacionais/consultáveis pelo time, copiar para `04-DADOS\` ou pasta P2 equivalente do vault.

### Tier-2 (médio esforço)

6. **Consolidar pareceres** (GROK / CHATGPT / PERPLEXITY) em 1 mestre (pendência v1.1).
7. **Renomear ao padrão `MC-…`** — meta ≥40% (pendência v1.1).
8. **Decidir destino dos 6 PROMPTS geradores GOVBR** — mantidos no workspace `CONTA GOV.BR PRATA OURO\` ou pasta de prompts dedicada?

### Tier-3

9. Histórico de v1.0 / v1.1 das matérias GOVBR (drafts) — política de arquivamento.

---

## 8. Próxima Foto Evolutiva

**v1.4 → 2026-05-14** (alinhada com Grid v1.1) ou trigger.

Triggers v1.4 (qualquer um antecipa a foto):
1. Phi1 ou Psi1 sai de MINUTA → ASSINADA
2. 1º Anjo piloto recrutado
3. Contador onboarded (P5 sai do vermelho)
4. Igor entrega 1º endpoint NestJS funcional ou implementa o N8N da Anamnese E12 §6
5. Resposta LAI relevante chega
6. **Reunião Dra. Juliana 19/05** (gera novos docs de parecer)

### Métricas-alvo v1.4

| Métrica | v1.1 | v1.3 | Meta v1.4 |
|---|---:|---:|---:|
| Aderência padrão `MC-…` | 24,6% | ↑ | ≥40% |
| Duplicatas (nomes únicos) | 51 | 51 | ≤30 |
| `_ARQUIVO\duplicatas-revisar\` | 4 | 4 | 0 |
| Pastas vazias | 3 | 3 | 0 |
| Sprint MC-GOVBR completo | — | ✓ 13 docs | em uso operacional (Beto/Igor) |

---

## CHANGELOG

| Versão | Data | Alteração |
|---|---|---|
| **v1.0** | **29/04/2026 10:51** | Inventário inaugural — 1.713 arquivos. 22 células-âncora. |
| **v1.1** | **29/04/2026 13:40** | Foto pós-limpeza — 521 arquivos (−70%). Raiz zerada. Stale −86%. 4 pastas-pilar novas. |
| **v1.2** | **09/05/2026** | Sprint MC-GOVBR Parte 1: 12 documentos produzidos. 2 novas pastas (`GOV.BR-API-HUMANA` em P6, `GOV.BR-NORMATIVA` em P2). 7 docs realocados. Workspace `CONTA GOV.BR PRATA OURO` mantido. 1 doc faltante (Anamnese E12). Limpeza adjacente em `_CONSULTA JURÍDICA 2\` (6 arquivos apagados). |
| **v1.3** | **09/05/2026** | **Sprint MC-GOVBR Parte 2 — encerramento: Anamnese-Triagem-GovBr v1.0 produzida** (363 linhas, 9 seções, 13 MSG WhatsApp, 22 combinações, 12 travas detectáveis, spec N8N com 17 campos ClickUp). Gravada em `GOV.BR-API-HUMANA\` (canônico) + replicada em vault `06-OPERACOES\`. Sprint MC-GOVBR fechado com **13 documentos**. Pendência crítica do Tier-1 do v1.2 resolvida. |

---

```
D > C > V | DIGNIDADE > COMPLIANCE > VIABILIDADE | SEMPRE
"Abre a tua boca a favor do mudo." — Provérbios 31:8
Lucro é combustível. Causa é destino. Jogo é infinito.
```

**Foto evolutiva v1.3.** Gerada por Claude Code · Sprint MC-GOVBR encerrado em 2026-05-09.
**Próxima foto:** 2026-05-14 (Grid v1.1) ou trigger.
