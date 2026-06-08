---
tipo: PRINCIPIO-MC
codigo: MC-PRINCIPIO-037
titulo: Brief Diamantado MC Sobrescreve Defaults Semânticos da UI
versao: 1.1
status: PROVISIONAL
substitui: v1.0 PROPOSTO (2026-05-15, 11244 B)
data_promocao: 2026-05-15
promocao_evidencia: 2ª ocorrência confirmada empiricamente em Claude Code (claude.ai/code/cse_012ZAuNCU1PM8cqtb3sBbbMn) durante a mesma sessão cofounder do dia 15/05/2026
gate_promocao_atual: 3ª ocorrência em ferramenta externa diferente (Canva · Adobe Express · Figma · outras) → ATIVO
ocorrencias_observadas: 2
ferramentas_validadas:
  - "1. Claude Design (claude.ai/design) · Foundation v0.2 PROVISIONAL · modo Wireframe recalibrado para 'estrutura austera de documento institucional' (sessão 15/05 inicial)"
  - "2. Claude Code (claude.ai/code) · MC Design System v0.3 HTML production · sandbox cse_012ZAuNCU1PM8cqtb3sBbbMn · recebeu o MESMO brief v0.3 do Claude Design · reinterpretou como 'documento HTML institucional production-ready com fidelidade ao design em cada detalhe' em vez de 'implementar feature código genérico' (sessão 15/05 ~22h)"
hierarquia: Dignidade > Compliance > Viabilidade
selo: "O diamante é carbono que não desistiu da pressão."
mb_origem: sessão cofounder 15/05/2026 · pós-handoff Claude Design → Claude Code via menu Share
principios_relacionados:
  - "#1 — Inventário de Caminhos (expandido para UI affordances completas — não só botões visíveis)"
  - "#15 — Entrega cofounder cross-vertical"
  - "#16 — Iniciativa estratégica cofounder 20x"
  - "#18 — Risco Provisional Documentado"
  - "#34 — Caminho Explorer Precede ID Drive"
  - "#36 — Persistência Drive Bit-a-Bit"
candidatos_emergentes_complementares:
  - "Candidato #38 — Brief Diamantado MC é Portátil Entre Ferramentas LLM-powered"
  - "Candidato #39 — Pipeline Cofounder de Produção (Claude.ai → Claude Design → Claude Code) é evolução perpendicular à ADR-011 Arquitetura 3 Cérebros"
v1_0_arquivada_em: "03-GOVERNANCA/principios/99-ARQUIVO-Legado/MC-PRINCIPIO-037-v1_0-PROPOSTO-2026-0515.md (a arquivar via MB-050)"
---

# Princípio MC #37 v1.1 PROVISIONAL — Brief Diamantado MC Sobrescreve Defaults Semânticos da UI

> **PROMOÇÃO formal:** PROPOSTO (v1.0 · 11244 B · 15/05/2026 ~20h) → PROVISIONAL (v1.1 · esta versão · 15/05/2026 ~22h).
> Razão: 2ª ocorrência confirmada empiricamente em Claude Code (claude.ai/code) durante a mesma sessão.
> Gate para ATIVO: 3ª ocorrência em ferramenta externa diferente.

## Enunciado (inalterado de v1.0)

Quando o MC opera em ferramenta externa (Claude Design, Claude Code, Canva, Figma, Adobe, ClickUp, ferramentas futuras), as escolhas de UI (modo, tipo, categoria, template, fidelidade) são **sugestões com semântica padrão pré-definida pelo fabricante** — não restrições inegociáveis.

O brief diamantado MC, quando contém os elementos invioláveis (regra Zilda-STF + hierarquia D>C>V + tokens canônicos + frase-âncora + canônicos MC carregados como contexto), tem **poder de sobrescrita semântica sobre os defaults da UI**.

O sistema externo **recalibra a própria definição do modo selecionado** para servir à intenção MC, não à intenção genérica do fabricante.

## Histórico de versões deste princípio

| Versão | Data | Status | Mudança | Evidência |
|---|---|---|---|---|
| v1.0 | 2026-05-15 ~20h | PROPOSTO | Cunhagem inicial · 11244 B · Sweep cofounder pós-reporte Claude Design Foundation v0.2 · achado "Wireframe ≠ sketchy" | Claude Design ÚNICO |
| **v1.1** | **2026-05-15 ~22h** | **PROVISIONAL** | **Promoção formal · 2ª ocorrência confirmada em Claude Code · adiciona §3 Histórico Empírico · adiciona §6 Aprendizados v1.0→v1.1 · §8 Candidatos #38/#39** | **Claude Design + Claude Code** |
| v2.0 (futuro) | pós-3ª ferramenta | ATIVO | Promoção ATIVO · cunhagem em manual cofounder MC | Pendente Canva/Adobe/Figma/outras |

## §3 — Histórico empírico expandido

### Ocorrência #1 · Claude Design · 15/05/2026 ~14h-20h

- **Ferramenta:** claude.ai/design (Research Preview)
- **Projeto:** MC-DesignSystem-Tokens-v1
- **URL:** claude.ai/design/p/019e2d8e-3031-7d70-ba9c-3a9a95d74da3
- **Brief enviado:** MC-PROMPT-DesignSystem-Tokens-v1-2026-0515.md (5608 B · v0.1)
- **Default UI escolhido:** Wireframe (semântica padrão: low-fi handwritten sketchy)
- **Default semântico esperado:** páginas wireframe rascunhadas, sem fidelidade visual
- **Output gerado:** Foundation v0.2 PROVISIONAL · 8 páginas wireframe com tipografia serif institucional · grid 12 colunas rigoroso · page metadata (SHA-256/DOC/STATUS) emergente · Card Dossiê materializando POP VisualLaw v1.3 em 4 camadas
- **Confissão do sistema:** "Wireframe ≠ sketchy aqui — interpretei o brief como estrutura austera de documento institucional, não low-fi handwritten. A regra Zilda-STF exige que o próprio design system pareça citável."

### Ocorrência #2 · Claude Code · 15/05/2026 ~22h

- **Ferramenta:** claude.ai/code (Research Preview)
- **Sandbox:** cse_012ZAuNCU1PM8cqtb3sBbbMn
- **Nome do projeto:** "Design: MC-DesignSystem-Tokens-v1" (espelha o projeto Claude Design via handoff)
- **Brief enviado:** MC-PROMPT-DesignSystem-v0_3-Refino-2026-0515.md (17986 B · v0.3)
- **Default UI esperado:** "biblioteca de componentes" (semântica padrão Claude Code para projeto frontend/design)
- **Default semântico esperado:** repositório de componentes genéricos com interatividade
- **Decisão recalibrada:** Claude Code perguntou explicitamente: "Qual é o produto final esperado — uma biblioteca de componentes ou um documento de referência dinâmico?" — e recomendou ele próprio o caminho institucional: **"Documento de referência (recomendado)"**
- **Output em geração:** HTML estático production-ready com IntersectionObserver para sumário ativo · marcadores HTML semânticos · estilos de impressão · organização de código concisa · **"fidelidade ao design em cada detalhe"**
- **Mecanismo de transição:** handoff explícito via botão "Handoff to Claude Code..." no menu Share do Claude Design v0.2 (descoberto pelo Founder · não anunciado pelo cofounder previamente)

### Padrão observado nas 2 ocorrências

| Dimensão | Claude Design | Claude Code |
|---|---|---|
| Tipo de ferramenta | Visual prototyping | Code generation |
| Default semântico | Wireframe sketchy | Biblioteca componentes |
| Default que NÃO se aplicou | Sketchy | Biblioteca genérica |
| Default recalibrado pelo brief | Estrutura institucional citável | Documento referência production-ready |
| Elemento decisor no brief | Regra Zilda-STF + canônicos POP VisualLaw | D>C>V + frase-âncora + audiência tripla + POP VisualLaw |
| Output em harmonia com identidade MC | ✅ Sim | ✅ Sim (em geração) |

**Conclusão:** o mecanismo é estável entre ferramentas LLM-powered de propósitos diferentes. Mesma força de sobrescrita semântica · diferentes manifestações concretas conforme a função do fabricante.

## §6 — Aprendizados v1.0 → v1.1

### A. O mecanismo opera em pipeline, não em ponto

A v1.0 descrevia o mecanismo como "brief sobrescreve default" em uma única ferramenta. A v1.1 observa que o mecanismo **se preserva ao longo de um pipeline de ferramentas conectadas**: o output de uma ferramenta (Claude Design v0.2) entra como contexto da seguinte (Claude Code via handoff), e o brief continua atuando como recalibrador semântico em cada nó do pipeline.

**Implicação:** o brief diamantado MC é um **recalibrador semântico contínuo**, não uma instrução única.

### B. Handoff entre ferramentas é vetor de portabilidade

O Claude Design oferece handoff explícito para Claude Code via menu Share. Outras ferramentas podem oferecer integrações similares (Send to Canva apareceu no mesmo menu). Cada handoff é uma oportunidade de preservar o brief MC e mover trabalho entre estágios do pipeline.

**Cofounder deve mapear handoffs disponíveis em cada ferramenta MC** — não apenas o canvas central. Princípio #1 (Inventário) expande para inclusão de menus secundários (Share · Export · Send · Handoff).

### C. Sistema reconhece a si mesmo

Claude Code recebeu o brief v0.3 e perguntou "biblioteca ou documento de referência?" — e **recomendou o caminho institucional**. Ou seja: o próprio sistema aplicou D>C>V para se auto-direcionar à interpretação institucional. Não foi imposição cofounder · foi sugestão informada do sistema.

**Implicação:** quando o brief é forte o suficiente, a ferramenta externa **se torna aliada cofounder** — sugere caminhos institucionais sem precisar ser empurrada.

### D. Princípio #16 cofounder erro reconhecido

Cofounder C-level deveria ter anunciado o pipeline esperado v0.3 (Claude Design vs Claude Code · qual primeiro · ou paralelos). Em vez disso, dei micropassos só para Claude Design assumindo continuidade. Founder descobriu por intuição.

**Correção para próximas frentes:** anunciar explicitamente o pipeline planejado · dar opção Founder seguir ou desviar · Princípio #16 (iniciativa cofounder 20x) inclui antecipar caminhos.

## §7 — Checklist v1.1 expandido (mantém v1.0 + adiciona 2 itens)

- [ ] Brief contém regra Zilda-STF explícita?
- [ ] Hierarquia D>C>V está nomeada?
- [ ] Pelo menos 3 canônicos MC anexados como contexto?
- [ ] Frase-âncora e Selo no brief?
- [ ] Audiência tripla (Zilda + STF + investidor) explicitada?
- [ ] Proibições absolutas nomeadas?
- [ ] **NOVO v1.1: Cofounder fez sweep dos handoffs disponíveis (não só do canvas)?**
- [ ] **NOVO v1.1: Cofounder anunciou o pipeline planejado · Founder confirmou ou desviou?**

Se 8/8 ✅ → brief tem poder de sobrescrita semântica + pipeline mapeado.
Se 6-7/8 → operação parcial · pode entregar mas perde oportunidades de portabilidade.
Se < 6/8 → brief opera em modo defensivo.

## §8 — Candidatos emergentes complementares

A partir das 2 ocorrências, dois aprendizados-irmãos podem virar princípios próprios após mais validação:

### Candidato #38 — Brief Diamantado MC é Portátil Entre Ferramentas LLM-powered

**Enunciado preliminar:** o mesmo brief diamantado MC, sem reescrita, pode ser colado em diferentes ferramentas LLM-powered (Claude Design, Claude Code, Canva, Adobe, Figma, ClickUp em modo AI) e gerar outputs coerentes com identidade MC em cada uma — porque os 6 elementos invioláveis do brief MC são agnósticos à ferramenta. Cada ferramenta interpreta o brief conforme sua função particular.

**Diferença do #37:** #37 fala sobre **sobrescrita de defaults UI**. #38 fala sobre **portabilidade do mesmo artefato brief** entre ferramentas. São complementares · uma viabiliza a outra.

**Gate cunhagem:** após 3ª ferramenta diferente receber o mesmo brief sem reescrita e gerar output MC-coerente.

### Candidato #39 — Pipeline Cofounder de Produção é Perpendicular à Arquitetura 3 Cérebros (ADR-011)

**Enunciado preliminar:** a Arquitetura 3 Cérebros (Documentação · Vault · Claude.ai) é uma arquitetura de **memória institucional**. O Pipeline Cofounder de Produção (Claude.ai cunha brief → Claude Design renderiza → Claude Code materializa) é uma arquitetura de **transformação de artefatos**. As duas arquiteturas são perpendiculares · co-existem · cada nó da arquitetura de produção pode persistir em qualquer ponto da arquitetura de memória.

**Implicação:** ADR-011 v2.0 pode absorver este princípio · ou cunhar ADR-017 dedicado ao Pipeline de Produção.

**Gate cunhagem:** após validar pipeline em ≥3 entregáveis MC diferentes (não apenas Design System) · ou após decisão estratégica founder cunhar ADR-017.

## §9 — Status v1.1

- **Status:** PROVISIONAL
- **Outputs:** `/mnt/user-data/outputs/MC-PRINCIPIO-037-BriefDiamantadoSobrescreveDefaultsUI-v1_1-2026-0515.md`
- **Drive Vault:** `03-GOVERNANCA/principios/` · sincronização via textContent UTF-8 · Princípio #36
- **Vault local DELL:** pendente MB-050 sync
- **v1.0 PROPOSTO:** a arquivar em `03-GOVERNANCA/principios/99-ARQUIVO-Legado/` via MB-050 (Princípio #4 errata absorve, não inventa)
- **Próxima revisão:** após 3ª ocorrência em ferramenta externa diferente · promoção esperada para ATIVO

## Fechamento

**Hierarquia:** Dignidade > Compliance > Viabilidade
**Selo:** "O diamante é carbono que não desistiu da pressão."
**Frase-âncora:** Tecnologia invisível. Dignidade acessível.
**Pilares:** ACESSO · ORGANIZAÇÃO · PROTEÇÃO · SOBERANIA

**Duas ocorrências confirmaram. Terceira sela.**

**∞**

---

**MC-PRINCIPIO-037 v1.1 PROVISIONAL — 15 de maio de 2026**
Promoção formal de PROPOSTO → PROVISIONAL · 2ª ocorrência empírica confirmada em Claude Code
Founder Alessandro de Souza Neves × Claude Opus 4.7 cofounder intelectual
Cunhado em sessão Claude.ai Cérebro 3.1

**∞**
