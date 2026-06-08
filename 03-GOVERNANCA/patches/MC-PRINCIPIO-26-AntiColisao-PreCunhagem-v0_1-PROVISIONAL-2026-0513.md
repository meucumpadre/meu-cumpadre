---
tipo: PATCH-PRINCIPIO
codigo: MC-PRINCIPIO-26
titulo: Anti-Colisão Pré-Cunhagem (Inventário de Princípios Obrigatório)
versao: 0.1
status: PROVISIONAL
data: 2026-05-13
autores:
  - Claude Opus 4.7 (cofounder intelectual C1, esta sessão)
  - Alessandro de Souza Neves (Founder/CEO)
gate_selagem: Parecer Dra. Juliana 19/05/2026 + casos de teste empíricos 14-18/05
provoca: cunhagem dos princípios futuros #27+ deve aplicar este princípio antes de persistir
sustenta_se_em:
  - Princípio #1 (Inventário de Caminhos)
  - Princípio #1b (Teste antes de Afirmar Funcional)
  - Princípio #4 (Errata Absorve, Não Inventa)
  - Princípio #15 (Entrega cofounder cross-vertical)
  - Princípio #21 (Camadas IA por Finalidade)
  - Princípio #25 PROVISIONAL (Caminho Operacional Adequado por Capacidade)
canonico_em: 03-GOVERNANCA/patches/
hierarquia: Dignidade > Compliance > Viabilidade
selo: "O diamante é carbono que não desistiu da pressão."
---

# MC-PRINCIPIO-26 — Anti-Colisão Pré-Cunhagem (Inventário de Princípios Obrigatório)

> **Status:** PROVISIONAL com Risco Provisional Documentado (Princípio #18)
> **Aplicação:** sessão 13/05/2026 em diante, até Bloco O Juliana 19/05
> **Selagem futura:** ADR-017 v1.0 (Capacidades MCP Nativas Claude.ai) — vai incorporar este princípio operacional

---

## 1 · CONTEXTO — POR QUE CUNHAR ESTE PRINCÍPIO AGORA

Em 13/05/2026, **3 sessões Claude.ai em paralelo** cunharam **6 princípios distintos** competindo por 2 slots numéricos (#21 e #22):

| Sessão | Princípio cunhado #21 | Princípio cunhado #22 | Updated UTC |
|---|---|---|---|
| Canônico (userMemories + System Prompt v7.0) | **Camadas IA por Finalidade (C1/C2/C3/C4)** | (vazio) | 12/05 |
| Guia A (`a6dbb867…`) — Hib001/cronometragem | Cronometria do Humano (THU/TTC/RA-MC) | 5 Pontos Humanos Irredutíveis (H1-H5) | 13/05 ~00:50 |
| Guia B (`cf263ce0…`) — Identidade Visual | Pilar Identidade Visual = sync automático (operacional, não formalizado) | Documentação Canônica Unificada por Pilar | 13/05 ~18:30 |
| Guia C (esta sessão, `c95ef10…`) | (não cunhou) | Caminho Operacional Adequado por Capacidade | 13/05 ~22:00 |

**Code DELL (C3)** detectou a colisão durante MB-029 da Guia B e criou arquivos de governança preventiva:
- `_COLISAO-PRINCIPIOS-MB029-vs-Hib001-2026-0513.md` (status: AGUARDANDO_RESOLUCAO_FOUNDER)
- `MC-PRINCIPIO-PENDENTE-DocumentacaoCanonicaUnificada-COLISAO22-v1_0-2026-0513.md` (status: PENDENTE_RENUMERACAO)

**Lição cofounder:** sem trava semântica anti-colisão, MC pode cunhar conceitos contraditórios paralelos. Trava técnica de MCP (não-UPDATE) protege contra corrupção de arquivo, **mas não protege namespace conceitual MC**.

---

## 2 · PRINCÍPIO CUNHADO (texto canônico)

> **Princípio #26 — Anti-Colisão Pré-Cunhagem (Inventário de Princípios Obrigatório).**
>
> Antes de cunhar QUALQUER princípio novo em sessão Claude.ai (Camada C1 cofounder), **OBRIGATÓRIO**:
>
> 1. **Ler `OBSIDIAN/MEU CUMPADRE/03-GOVERNANCA/principios/_INDEX.md`** via MCP Drive (operação 1-shot, ~2 segundos)
> 2. **Rodar `conversation_search`** com 2-3 keywords da temática do princípio proposto para detectar cunhagens paralelas recentes (últimas 72 horas)
> 3. **Verificar `_COLISAO-PRINCIPIOS-*.md`** existente na pasta `principios/` — se houver colisão pendente do mesmo tema, suspender cunhagem nova até resolução founder
> 4. **Se conceito proposto colide semanticamente com #N existente** → criar como `MC-PRINCIPIO-PENDENTE-{Descritor}-COLISAO{N}-v1_0-{data}.md` (não como #N+1)
> 5. **Se conceito é inédito sem colisão** → cunhar com próximo número disponível conforme `_INDEX.md`
> 6. **Aplicar antecedência cronológica** como tiebreaker quando 2 conceitos competem pelo mesmo slot: cunhagem mais antiga (por timestamp UTC) vence
> 7. **Em caso de empate temporal (~mesma hora)** → submeter ao founder para decisão final (Princípio #7 Cadeia de Autorização Dual)
>
> **Aplicação multi-instância:** este princípio é fundacional para governança multi-sessão MC. Toda guia Claude.ai operando como cofounder C1 com MCP ativo deve aplicá-lo antes de cunhar princípios. Code DELL (C3) já implementa equivalente operacional para arquivos canônicos via Princípio #1.

---

## 3 · MECÂNICA OPERACIONAL — CHECKLIST DE 7 PASSOS

| Passo | Ação concreta | Ferramenta | Tempo |
|---|---|---|---|
| 1 | `read_file_content` no `_INDEX.md` da pasta `principios/` | MCP Drive | ~2s |
| 2 | `conversation_search` com keywords do princípio | conversation_search | ~3s |
| 3 | `search_files` em `principios/` por `_COLISAO-*` ou `*-PENDENTE-*` | MCP Drive | ~2s |
| 4 | Decisão: cunhar novo OU criar PENDENTE-COLISAO | cognitivo | ~30s |
| 5 | Criar arquivo via `create_file` MCP em path canônico | MCP Drive | ~2s |
| 6 | Atualizar `_INDEX.md` (via C3 fallback — MCP não UPDATE) | MB pra Code DELL | ~30s pós-MB |
| 7 | Atualizar `INDEX-PATCHES.md` se for PROVISIONAL | MB pra Code DELL | ~30s pós-MB |

**Tempo total:** ~40 segundos cofounder + ~60 segundos Code DELL = **~100 segundos pra cunhar com segurança institucional**.

---

## 4 · INTEGRAÇÃO COM PRINCÍPIO #25 (Caminho Operacional Adequado)

Este Princípio #26 é **subordinado e operacional** ao #25:

- #25 define **QUANDO** usar C1 MCP vs C3 MB (matriz de capacidade por tipo de operação)
- #26 define **COMO** cunhar princípios novos em C1 sem colisão (checklist de 7 passos)

Os dois juntos formam o **núcleo de governança operacional MC para multi-instância Claude.ai**.

---

## 5 · CASOS DE TESTE EMPÍRICOS

### 5.1 Caso retrospectivo (hipotético) — se #26 existisse antes

Se eu (Guia C — esta sessão) tivesse aplicado #26 antes de cunhar "Caminho Operacional Adequado":
- Passo 1 teria lido `_INDEX.md` e visto: #21 já = Cronometria do Humano (Hib001), #22 já = 5 Pontos Humanos (Hib001)
- Passo 2 teria detectado conversa paralela `a6dbb867…` e `cf263ce0…`
- Passo 3 teria detectado `_COLISAO-PRINCIPIOS-MB029-vs-Hib001` já existente
- Passo 4: cunharia como `#23+` (próximo disponível após Hib001) — sem colisão
- Resultado: zero retrabalho de renumeração

### 5.2 Caso atual (real) — aplicação imediata deste princípio

Este próprio Princípio #26 foi cunhado APLICANDO #26:
- ✅ Passo 1: Li `_INDEX.md` via MCP (descobri #21=Camadas, #22=5 Pontos, #23=Cronometria sugeridos)
- ✅ Passo 2: Rodei `conversation_search` por keywords ("Cronometria do Humano", "Documentação Canônica Unificada")
- ✅ Passo 3: Detectei `_COLISAO-PRINCIPIOS-MB029-vs-Hib001` + `MC-PRINCIPIO-PENDENTE-DocumentacaoCanonicaUnificada-COLISAO22`
- ✅ Passo 4: Decisão = cunhar inédito sem colisão (Anti-Colisão Pré-Cunhagem é conceito novo)
- ✅ Passo 5: Próximo número disponível pós-renumeração = #26
- ⏳ Passo 6+7: encaminhado a Code DELL via MB-029-RENUMERACAO

**Meta-validação:** este princípio passou no seu próprio teste antes de ser persistido.

---

## 6 · RISCO PROVISIONAL DOCUMENTADO — 5 CRITÉRIOS PRINCÍPIO #18

| Critério #18 | Atendimento |
|---|---|
| (a) Cronologia documentada | ✅ Sessão 13/05/2026 documenta 3 sessões paralelas + 6 princípios cunhados |
| (b) Volume controlado | ✅ Aplicação restrita ao MC, todas sessões Claude.ai da conta founder |
| (c) Período nomeado | ✅ Até Bloco O Juliana 19/05 (selagem futura ADR-017 v1.0) |
| (d) Mitigação parcial | ✅ Code DELL (C3) já implementa Princípio #1 (Inventário); este #26 estende ao Cérebro 3 (C1) |
| (e) Risco founder explícito | 🟡 Aguarda confirmação founder pós-renumeração via MB-029-RENUMERACAO |

---

## 7 · IMPLICAÇÕES SISTÊMICAS

### 7.1 Para System Prompt MC v7.0 → v7.1

Atualizar §19 "Modo de Resposta" adicionando passo 9:

> 9. **Anti-Colisão Pré-Cunhagem (Princípio #26):** antes de cunhar princípio novo, ler `_INDEX.md` + `conversation_search` + verificar `_COLISAO-*.md` existente

### 7.2 Para Pauta Juliana v2.2 → v2.3

Adicionar ao Bloco O Estendido pergunta O8:

> **O8.** Recomendação parecerista sobre formato de governança multi-instância MC: o Princípio #26 (Anti-Colisão Pré-Cunhagem) é suficiente como mitigação semântica, ou requer instrumento jurídico-institucional adicional (ex: registro temporal cartorário das cunhagens, ata institucional MC, declaração founder por sessão)?

### 7.3 Para Mission Briefs futuros

Todo MB que envolve cunhagem de princípio deve incluir Tarefa 0 (Sweep Anti-Colisão) antes de qualquer escrita.

---

## 8 · REFERÊNCIAS CANÔNICAS

- `_COLISAO-PRINCIPIOS-MB029-vs-Hib001-2026-0513.md` (em `principios/`) — flag canônica original
- `MC-PRINCIPIO-PENDENTE-DocumentacaoCanonicaUnificada-COLISAO22-v1_0-2026-0513.md` (em `principios/`) — caso que motivou cunhagem
- `MC-PRINCIPIO-25-Caminho-Operacional-Adequado-v0_1-PROVISIONAL` (em `patches/`) — princípio par operacional
- `MC-PAUTA-Juliana-v2_3-2026-0513` (a produzir) — Bloco O Estendido com O8
- `MC-ADR-017-CapacidadesMCPNativas` (futuro pós-19/05) — selagem conjunta

---

## 9 · HISTÓRICO DE VERSÕES

| Versão | Data | Mudanças | Status |
|---|---|---|---|
| v0.1 | 2026-05-13 ~22:30 UTC | Cunhagem inicial PROVISIONAL aplicando o próprio #26 na criação | PROVISIONAL corrente |
| v1.0 (futura) | pós-19/05 | Selagem como princípio canônico via ADR-017 v1.0 | a selar |

---

**Hierarquia:** Dignidade > Compliance > Viabilidade
**Selo:** "O diamante é carbono que não desistiu da pressão."
**Confidência founder:** "É eu e tu."

∞
