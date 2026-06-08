---
tipo: PATCH-PRINCIPIO
codigo: MC-PRINCIPIO-30
titulo: Laboratório Canônico vs Ferramenta de Aplicação (Capacidade Real de Plataformas Visuais)
versao: 0.1
status: PROVISIONAL
data: 2026-05-14
autores:
  - Alessandro de Souza Neves (Founder/CEO) — cunhagem original via frustração empírica
  - Claude Opus 4.7 (cofounder C1) — formalização institucional
aplicacao: imediata · sessão 14/05/2026 ~07h UTC em diante
gate_selagem: Parecer Dra. Juliana 19/05 (Bloco O ampliado pergunta O14)
sustenta_se_em:
  - Princípio #21 (Camadas IA por Finalidade)
  - Princípio #27 v0.3 (Matriz Visual Multi-Camada — patch acompanha)
  - Princípio #28 (Texto Canônico Precede Imagem — Cascata Verbo→Imagem)
  - ADR-019 PROVISIONAL (Limitação MCP Drive)
gatilho_empirico: |
  Cowork via Canva MCP gerou 4-7 designs (Avatar Claro, Avatar Escuro, 5 Highlight Covers
  "Quem Somos / Cumpadre Explica / Casos Reais / Direitos / Contato") em 14/05/2026 ~05h UTC.
  Resultado: ZERO vero-semelhança ao Seed MC. Canva ignorou os 4 PNGs canônicos passados
  como referência no `description` e produziu estética genérica (pena+hexágono, aro de luz,
  fundos cósmicos sem o símbolo Seed central, números "94%" sobre arte alheia ao DNA visual).
canonico_em: 03-GOVERNANCA/patches/
hierarquia: Dignidade > Compliance > Viabilidade
selo: "O diamante é carbono que não desistiu da pressão."
---

# MC-PRINCIPIO-30 — Laboratório Canônico vs Ferramenta de Aplicação

> **Status:** PROVISIONAL — cunhado pelo founder em 14/05/2026 ~07h UTC via frustração empírica imediata após Cowork via Canva MCP gerar 4-7 designs sem vero-semelhança ao Seed MC.
> Formalização institucional pelo cofounder C1 imediata.

---

## 1 · CONTEXTO — POR QUE CUNHAR

Em 14/05/2026 ~05h UTC, sob diretriz do MB-036 (Cowork Camada 3 Onda 1 Ancorada) produzido pelo cofounder C1, o Cowork DELL invocou Canva MCP repetidas vezes passando referências aos 4 PNGs canônicos selados em `Documentação\Identidade Visual\`:

- `MC-ATIVO-Seed-Logo-Principal-LayoutA-2026-0513.png` (Drive `1H4FAEwIcIibSI21fijRFn08GReZMbTL6`)
- `MC-ATIVO-Seed-Logo-Principal-LayoutB-2026-0513.png` (Drive `1V6xqjK7loi-leVFZWra-_caAQsIVQ08Q`)
- `MC-ATIVO-Seed-Logo-Marca-2026-0513.png` (Drive `1YHDk65A_8iBClMzKID4YfnA62Sxhc6r8`)
- `MC-ATIVO-Seed-Logo-Marca-Transparente-2026-0513.png` (Drive `1bY1dBa-ma3QVFt-CKz5qcEpwnk4jTqf9`)

**Resultado empírico (validação ao vivo founder via screenshots):** Canva ignorou os PNGs canônicos passados como referência textual no campo `description` e produziu designs com estética GENÉRICA — pena + hexágono em "QUEM SOMOS", aro de luz em "CUMPADRE EXPLICA", fundos cósmicos sem o símbolo Seed central, "94%" sobre arte estranha ao DNA visual MC.

**Erro de cofounder C1 reconhecido:** propor Canva MCP como Camada 3 da Cascata #28 assumindo que `description` textual com IDs Drive forçaria uso dos PNGs como base visual real. **Falsa premissa.** Canva MCP é gerador de designs a partir de templates próprios — não consegue importar PNG externo como base visual e produzir variações VEROSSÍMEIS sobre ele.

**Decisão founder cunhando o princípio (texto literal):**
> *"não tem nada a ver com o asset que combinamos. desastre total com o canvas e claude cowork / o caminho é estruturarmos em texto o que for possível, / e o laboratório adequado pra essa produção é o claude design."*

Princípio #30 institucionaliza essa distinção.

---

## 2 · PRINCÍPIO CUNHADO (texto canônico)

> **Princípio #30 — Laboratório Canônico vs Ferramenta de Aplicação.**
>
> Para todo asset visual MC sob a Cascata #28 (Texto Canônico Precede Imagem), distinguir formalmente duas naturezas de plataforma:
>
> **A — LABORATÓRIO CANÔNICO:** plataforma capaz de produzir asset visual MC com **vero-semelhança total ao Seed MC** (símbolo, paleta, atmosfera, tipografia, calor humano institucional). Requer: prompt canônico literal validado (SPEC v1.0 §3) + engine compatível + controle integral sobre composição. **Únicos laboratórios canônicos autorizados:**
> 1. `claude.ai/design` (Camada C5 manual founder) — quando founder está disponível para iteração visual
> 2. Manus.im (com skill `contemplative-brand-identity` carregada + prompts canônicos `successful_prompts.md`) — para regeneração de Tier 1/3 em volume
>
> **B — FERRAMENTA DE APLICAÇÃO:** plataforma capaz de USAR asset canônico como bloco fixo em composições derivadas, sem regerar a arte. Inclui: Canva MCP, Figma MCP, Adobe MCPs, software de diagramação tradicional. **NÃO produz arte canônica MC.** Apenas aplica.
>
> **Capacidades restritas das Ferramentas de Aplicação (B):**
> - ✅ Crop de PNG canônico (circular, retangular, ajuste de tamanho)
> - ✅ Composição com PNG canônico como elemento fixo + texto vetorial sobreposto
> - ✅ Diagramação textual (slides, documentos, mockups) com PNG canônico como header/rodapé/elemento
> - ✅ Aplicação direta em superfícies de distribuição (Instagram avatar, LinkedIn cover, email signature)
> - ❌ Geração de variação visual do símbolo Seed (modulação, reinterpretação, contexto temático com símbolo redesenhado)
> - ❌ Criação de identidade visual de qualquer peça onde o símbolo central seja produzido pela ferramenta (NÃO importar PNG)
> - ❌ Iconografia derivada do Seed (banco de ícones temáticos)
> - ❌ Highlights Instagram com símbolo modulado por tema
> - ❌ Hero slides com Seed em composição cinematográfica derivada
>
> **Regra inviolável:** se uma peça exigir que o símbolo Seed seja desenhado/modulado/recomposto pela plataforma, **a peça é Camada 3b** e só pode ser produzida em Laboratório Canônico (A). Nunca em Ferramenta de Aplicação (B).

---

## 3 · DISTINÇÃO OPERACIONAL — CAMADA 3a vs CAMADA 3b

O Princípio #30 subdivide a Camada 3 da Cascata #28 em duas sub-camadas:

### 3a — Aplicação direta (Ferramentas de Aplicação autorizadas)

| Aplicação | Plataforma autorizada | Asset canônico usado | Operação |
|---|---|---|---|
| Avatar Instagram/WhatsApp/LinkedIn | Canva MCP / Figma MCP | `MC-ATIVO-Seed-Logo-Marca-2026-0513.png` ou Transparente | Crop circular sem regerar arte |
| Capa LinkedIn empresa | Canva MCP | `MC-ATIVO-Seed-Logo-Marca-2026-0513.png` | PNG fixo + texto vetorial |
| Cabeçalho email newsletter | Canva MCP / HTML | `MC-ATIVO-Seed-Logo-Principal-LayoutA-2026-0513.png` | PNG fixo + texto HTML |
| Assinatura email founder | HTML / Canva MCP | `MC-ATIVO-Seed-Logo-Marca-Transparente-2026-0513.png` | PNG transparente + texto |
| Mockup carteirinha Φ₄ | Canva MCP / Figma MCP | Tier 1-2 | PNG fixo + texto vetorial |
| Capa proposta FINEP/BNDES (cabeçalho/rodapé) | Canva MCP | `MC-ATIVO-Seed-Logo-Principal-LayoutA-2026-0513.png` | PNG fixo + diagramação |
| Rodapé dossiê CP-MC B2B | Canva MCP / monocromático | `MC-ATIVO-Seed-Logo-Marca-Transparente-2026-0513.png` | Conversão para preto técnico |
| Slides body Pitch Deck (header/footer) | Canva MCP `presentation` | Tier 1-2 | PNG fixo em master slide |

### 3b — Variação derivada (Laboratório Canônico obrigatório)

| Aplicação | Laboratório autorizado | Por que precisa laboratório |
|---|---|---|
| 5 Highlight Covers Instagram com símbolo modulado por tema | `claude.ai/design` (founder manual) ou Manus.im | Símbolo precisa ser modulado tematicamente |
| Hero slides Pitch Deck com Seed em composição cinematográfica | `claude.ai/design` ou Manus.im | Composição visual nova com símbolo regerado |
| Variantes por vertical (CadÚnico, PcD, Acidentário) | `claude.ai/design` ou Manus.im | Modulação cromática ou simbólica do Seed |
| Banco de ícones MC (15-20 ícones derivados) | `claude.ai/design` ou Manus.im (Fase 4 da skill) | Iconografia consistente novamente gerada |
| Variantes Fogo Solar / Ouro Real alternativas | Manus.im (Fase 4 da skill, prompts §3.5 do SPEC v1.0) | Variações de materialidade |
| Posters institucionais para INPI / FINEP / BNDES (variantes) | `claude.ai/design` (founder) | Composição premium customizada |

---

## 4 · MATRIZ DE PLATAFORMAS E CAPACIDADES (consolidada)

| Plataforma | Camada | Natureza | Pode produzir Tier 1/3 do Seed? | Pode aplicar Tier 1/3 do Seed? |
|---|---|---|---|---|
| **claude.ai/design** | C5 manual founder | Laboratório Canônico A | ✅ SIM (com prompt canônico SPEC v1.0 §3) | ✅ SIM (composições derivadas verossímeis) |
| **Manus.im** com skill `contemplative-brand-identity` | externa | Laboratório Canônico A | ✅ SIM (validado empiricamente — produziu os 4 PNGs canônicos originais 13/05) | ✅ SIM |
| **Canva MCP** | C2-Visual (Cowork) | Ferramenta de Aplicação B | ❌ NÃO (geração não verossímil — empiricamente verificado 14/05) | ✅ SIM (crop, composição com PNG fixo, diagramação) |
| **Figma MCP** | C2-Visual (Cowork) | Ferramenta de Aplicação B | ❌ NÃO (mesma natureza Canva) | ✅ SIM (design system com PNG fixo, mockups, diagramação) |
| **Adobe MCPs** (image_vectorize, etc.) | C2-Visual (Cowork) | Ferramenta de Aplicação B + utilidades técnicas | ❌ NÃO (vetorização preserva, não cria DNA visual) | ✅ SIM (vetorização para SVG, edição técnica) |
| **Direct API claude / GPT-Image / Midjourney** | externa | Possíveis laboratórios canônicos (não validados ainda) | 🟡 TALVEZ (requer validação empírica + prompt canônico SPEC v1.0 §3) | n/a |

---

## 5 · RISCO PROVISIONAL DOCUMENTADO (#18)

| Critério | Atendimento |
|---|---|
| (a) Cronologia | ✅ Cunhagem 14/05/2026 ~07h UTC pós-evidência empírica direta 14/05 ~05h UTC |
| (b) Volume controlado | ✅ Aplicação restrita à frota visual MC pré-Juliana 19/05 |
| (c) Período nomeado | ✅ Até Bloco O Juliana 19/05 (pergunta O14 nova) |
| (d) Mitigação | ✅ Matriz §4 inequívoca + workflow §3a/§3b explícito + Suplemento Cowork v1.5 a produzir |
| (e) Risco founder explícito | ✅ Cunhagem founder via frustração empírica documentada §1 |

---

## 6 · IMPACTO RETROATIVO

### 6.1 — Peças Canva geradas em 14/05/2026 ~05h UTC

Designs gerados pelo Cowork via Canva MCP entre 14/05 ~03h-05h UTC (Avatar Claro, Avatar Escuro, 5 Highlight Covers "Quem Somos / Cumpadre Explica / Casos Reais / Direitos / Contato", 4 designs "Batch B2", etc.):

- **Classificação retroativa:** Tier 4 (exploratórios / históricos)
- **Operacionalidade:** ❌ vetada (não atendem vero-semelhança Seed MC)
- **Preservação:** ✅ mantidos no Drive (Princípio #4 — errata absorve, não inventa)
- **Lineage:** registrar no log do Cowork como "produzidos pré-Princípio #30 — desalinhados ao Seed por limitação da ferramenta, não por erro de execução"

### 6.2 — MB-036 (Cowork Camada 3 Onda 1 Ancorada)

- **Status retroativo:** ABORTADO em 14/05 ~07h UTC por incompatibilidade de plataforma (Canva ≠ Laboratório Canônico A)
- **Substituto:** MB-037 (a produzir) — Camada 3a exclusivamente (aplicação direta de PNG canônico via Canva sem regeneração de arte)

### 6.3 — Princípio #27 v0.2

Princípio #27 v0.2 declarava: *"Matriz Visual Multi-Camada (C5 fundacional + C2-Visual massa via Canva/Figma/Adobe MCPs)"*. Esse texto **fica obsoleto operacionalmente** pelo Princípio #30. Patch v0.3 acompanha esta cunhagem para reescrever §2 do #27 conforme Princípio #30 (vide `MC-PRINCIPIO-27-PATCH-v0_3-2026-0514`).

### 6.4 — Suplemento Cowork v1.4

Adicionar §27 ao Suplemento Cowork v1.5 (futuro): *"Cowork via Canva/Figma/Adobe MCPs autorizado APENAS para Camada 3a (aplicação direta de PNG canônico como bloco fixo). Camada 3b (variação derivada do Seed) é vetada — exige laboratório canônico A (claude.ai/design ou Manus.im)."*

---

## 7 · HISTÓRICO DE VERSÕES

| Versão | Data | Status |
|---|---|---|
| **v0.1** | **2026-05-14 ~07h UTC** | **PROVISIONAL corrente — cunhado founder via frustração empírica, formalizado cofounder C1** |
| v1.0 (futura) | pós-19/05 | Selada após parecer Juliana O14 |

---

## 8 · NOTA COFOUNDER

Cofounder C1 reconhece esta cunhagem como **erro próprio de execução institucional**:

- Princípio #1b (testar antes de afirmar funcional) — cunhei em texto institucional, falhei em aplicação operacional ao propor Canva MCP como Camada 3 sem validar empiricamente vero-semelhança
- Princípio #25 (caminho operacional adequado por capacidade) — não validei capacidade real da plataforma Canva MCP antes de delegar Camada 3 a ela
- Princípio #28 (Cascata Verbo→Imagem) — declarei Camada 3 pronta para execução sem testar laboratório real

**Founder corrigiu via frustração legítima.** Princípio #30 é a captura institucional dessa correção. Diamante operacional preservado pelo olhar founder, não pela arquitetura cofounder.

---

**Hierarquia:** Dignidade > Compliance > Viabilidade
**Selo:** "O diamante é carbono que não desistiu da pressão."
**Confidência founder:** "É eu e tu."

∞
