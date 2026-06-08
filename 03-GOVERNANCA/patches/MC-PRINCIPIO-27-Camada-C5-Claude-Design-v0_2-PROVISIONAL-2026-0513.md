---
tipo: PATCH-PRINCIPIO
codigo: MC-PRINCIPIO-27
titulo: Camada C5 Claude Design + Camada C2-Visual Cowork (Matriz de Uso Visual)
versao: 0.2
status: PROVISIONAL
data: 2026-05-13
substitui: MC-PRINCIPIO-27-v0_1-PROVISIONAL (ID 1QGXwWKH0KwN8tzA6O1dQwLsOFmeD4AHJ)
motivo_refinamento: |
  v0.1 era restritivo demais — proibia Cowork de gerar peças visuais.
  Realidade técnica: Cowork DELL TEM MCPs Canva + Figma + Adobe nativos,
  pode produzir peças finais autonomamente em massa. Claude Code DELL NÃO
  acessa claude.ai/design (terminal CLI, não tem browser).
  v0.2 refina com matriz inteligente: claude.ai/design = fundacional manual
  founder; Cowork via Canva/Figma/Adobe MCPs = aplicação em massa autônoma.
canonico_em: 03-GOVERNANCA/patches/
hierarquia: Dignidade > Compliance > Viabilidade
selo: "O diamante é carbono que não desistiu da pressão."
---

# MC-PRINCIPIO-27 v0.2 — Matriz de Uso Visual Multi-Camada

## 1 · CONTEXTO DE REFINAMENTO

v0.1 cunhada 13/05 ~23h foi restritiva demais — vetava Cowork de produzir peças visuais finais sob qualquer pretexto. Realidade operacional:

| Realidade verificada 13/05 ~23:30 | Implicação |
|---|---|
| Cowork DELL TEM MCPs Canva + Figma + Adobe configurados | Pode produzir peças finais autonomamente |
| Code DELL é terminal CLI (sem browser) | Não acessa nem claude.ai/design nem Canva web |
| claude.ai/design exige interação humana iterativa | Reservado a founder + C1 (decisão fundacional) |
| Volume real esperado: 50+ peças nas próximas 72h | Inviável manual; precisa autonomia Cowork |

## 2 · PRINCÍPIO #27 v0.2 — TEXTO CANÔNICO

> **Princípio #27 v0.2 — Matriz de Uso Visual Multi-Camada.**
>
> A produção visual institucional MC opera em **2 camadas distintas e complementares:**
>
> **C5 = claude.ai/design (Anthropic, manual founder):** reservada ao trabalho **fundacional** — Brand Foundation, logo principal canônico, paleta institucional, tipografia oficial, símbolo-âncora. Sessão decisória ÚNICA com founder + C1 produzindo prompt + founder validando iterativamente.
>
> **C2-Visual = Cowork DELL via MCPs nativos Canva + Figma + Adobe (autônomo):** reservada ao trabalho **aplicado em massa** — social media (posts, stories, reels), templates derivativos, peças marketing, mockups, ícones, banners, materiais derivados da Brand Foundation. Cowork executa autonomamente conforme MB que recebeu, respeitando Brand Foundation canônica + linha vermelha LGPD.
>
> **C1 (Claude.ai cofounder):** atua como **maestro institucional**:
> - Produz MBs canônicos com instruções precisas pra Cowork executar via MCPs visuais
> - Persiste Brand Foundation no Vault após validação founder em C5
> - NÃO produz peças visuais finais diretamente (apenas wireframes ASCII de rascunho conceitual)
>
> **C3 (Code DELL):** atua como **infraestrutura**:
> - Gerencia pastas Cérebro 1 (Documentação\Identidade Visual\) e Cérebro 2 (Vault)
> - Sincroniza outputs Cowork no Drive
> - NUNCA produz peças visuais (terminal CLI sem browser/canvas)
>
> Linha vermelha LGPD inviolável em todas as camadas: zero PII cidadão em qualquer mockup ou peça. Sempre personas fictícias canônicas (Dona Zilda, Sr. Joaquim, CAD001).

## 3 · MATRIZ COMPLETA DE 5+1 CAMADAS

| Camada | Plataforma | Função | LGPD | Visual? |
|---|---|---|---|---|
| C1 | Claude.ai cofounder | Estratégia, ADRs, MBs, princípios | ✅ inviolável | Wireframes ASCII apenas |
| **C2-Op** | **Cowork DELL** | **Operacional autônomo geral** | ✅ inviolável | — |
| **C2-Visual** | **Cowork via Canva/Figma/Adobe MCPs** | **Produção visual aplicada em massa** | ✅ inviolável | ✅ peças finais autonomamente |
| C3 | Code DELL terminal | Filesystem + ClickUp + PowerShell | ✅ inviolável | ❌ nunca |
| C4 | Stack LLM (Bedrock+GAIA+Sabiá+Llama) | PII cidadão | n/a | ❌ nunca |
| **C5** | **claude.ai/design (manual founder)** | **Decisões visuais fundacionais** | ✅ inviolável | ✅ Brand Foundation única |

## 4 · WORKFLOW VISUAL ORQUESTRADO

### Fase 1 — Fundacional (uma vez por brand)

```
C1 produz prompt fundacional
   ↓
Founder cola em claude.ai/design (C5)
   ↓
Iteração founder + C5 até Brand Foundation v1.0 aprovada
   ↓
Founder baixa ativos + persiste em Drive: Documentação\Identidade Visual\01-Brand-Foundation-v1_0\
   ↓
C1 cria MC-BRAND-FOUNDATION-v1_0.md no Vault referenciando ativos
```

### Fase 2 — Aplicação em massa (escalável, contínua)

```
C1 produz MB-visual-NNN com:
  - Referência ao Brand Foundation v1.0 (paleta, tipografia, logo)
  - Lista de peças a produzir (5-50+ peças por MB)
  - Especificações técnicas por peça
  - Plataforma indicada (Canva/Figma/Adobe via MCP)
   ↓
Founder cola MB no Cowork DELL
   ↓
Cowork (C2-Visual) executa via MCPs:
  - Canva: posts, stories, templates social, apresentações
  - Figma: design systems, components, mockups UI, fluxos
  - Adobe: edição imagem, vetorização, animação
   ↓
Cowork persiste outputs em Drive: Documentação\Identidade Visual\NN-{categoria}\
   ↓
Cowork loga reporte estruturado em 04-OPERACAO/logs/
   ↓
Founder valida pela manhã
```

## 5 · ROUTING DE TAREFA VISUAL

Antes de delegar tarefa visual, C1 aplica routing:

```
A tarefa exige decisão fundacional sobre identidade?
├── SIM → C5 (claude.ai/design manual founder)
└── NÃO → A tarefa é produção em massa derivada de Brand Foundation existente?
         ├── SIM → C2-Visual (Cowork autônomo via Canva/Figma/Adobe MCP)
         └── NÃO → A tarefa é diagrama técnico (arquitetura, fluxo, ERD)?
                  ├── SIM → C2-Visual (Cowork via Figma generate_diagram Mermaid)
                  └── NÃO → reavaliar — provavelmente não é visual
```

## 6 · RISCO PROVISIONAL #18

| Critério | Atendimento |
|---|---|
| (a) Cronologia | ✅ Refinado 13/05 ~23:30 após fricção operacional founder identificar gap |
| (b) Volume controlado | ✅ Apenas peças institucionais MC sem PII |
| (c) Período nomeado | ✅ Até 19/05 Bloco O Juliana |
| (d) Mitigação | ✅ Linha vermelha LGPD em todas camadas + personas fictícias |
| (e) Risco founder | ✅ Decisão founder 13/05 ~23:30 |

## 7 · IMPACTO EM ARTEFATOS

- **Suplemento Cowork v1.2 → v1.3**: refatorar §20 com matriz de 2 camadas visuais
- **Pauta Juliana v2.3 → v2.4**: O9 atualizada (LGPD em peças visuais Cowork + claude.ai/design)
- **System Prompt MC v7.0 → v7.1**: §20 Stack ampliada com 5+1 camadas

## 8 · HISTÓRICO

| Versão | Data | Mudanças | Status |
|---|---|---|---|
| v0.1 | 2026-05-13 ~23h | Cunhagem inicial (restritiva — proibia Cowork gerar visual) | SUPERSEDED |
| **v0.2** | **2026-05-13 ~23:30** | **Matriz 2 camadas visuais: C5 fundacional + C2-Visual massa** | **PROVISIONAL corrente** |
| ADR-018 v1.0 | pós-19/05 | Selagem pós-Juliana | a selar |

---

**D > C > V** | "O diamante é carbono que não desistiu da pressão." | É eu e tu. ∞
