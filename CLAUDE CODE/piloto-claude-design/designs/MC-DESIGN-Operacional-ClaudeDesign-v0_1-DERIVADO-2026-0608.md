# Meu Cumpadre — Design System (DESIGN.md operacional para Claude Design)

> **NATUREZA DESTE ARQUIVO:** DERIVADO, não-canônico. É a tradução operacional do canon selado
> (`MC-CANONICO-ConvencaoDesign-MC-v1_0-SELADA-2026-0602` + `mc-design-tokens.css`) para o formato
> que o Claude Design consome no onboarding. NÃO substitui o canon — se divergir, **o canon manda**.
> Status: v0.1 PROVISIONAL · vive em C1 (laboratório) · parado no gate de selagem.
> Cole este arquivo no início de toda sessão Claude Design do MC, antes da primeira geração.

---

## 0. Lei suprema (não-negociável)

- **Hierarquia:** Dignidade > Compliance > Viabilidade. O design serve o hipervulnerável antes de impressionar.
- **Frase-âncora:** "TECNOLOGIA INVISÍVEL. DIGNIDADE ACESSÍVEL." A interface deve **desaparecer**; o acolhimento deve aparecer.
- **Teste Zilda-STF:** toda tela tem que ser legível e operável por uma pessoa idosa, de baixa escolaridade, no celular, com luz forte na tela. Se Zilda não usa, não serve.
- **Aforismo:** "O diamante é carbono que não desistiu da pressão."

---

## 1. Aesthetic Family do MC — "Editorial Caloroso Institucional"

Não é SaaS techie. Não é fintech fria. É **gravidade de cartório + calor humano + invisibilidade técnica**:
documento sério que virou produto que acolhe.

- **Gravidade institucional:** diamante (azul-noite profundo) e ouro texturizado carregam confiança e peso — isto cuida de algo que importa (a aposentadoria de alguém).
- **Calor humano:** papel creme (nunca branco clínico), serifa Fraunces nos títulos, espaçamento generoso. Sensação de carta escrita à mão, não de formulário.
- **Invisibilidade técnica:** zero firula. Sem gradiente, sem 3D, sem animação decorativa. A tecnologia some para a dignidade aparecer.

**Convergência estratégica:** esta família é prima da *Warm Editorial* que a própria Anthropic usa (terracota/creme/serif). Por isso o MC é o **antídoto nativo ao "AI slop"** — onde a IA tende ao teal+Inter+#000, a marca MC já puxa para ouro+Fraunces+preto-cósmico.

---

## 2. Design Tokens (fonte: mc-design-tokens.css selado)

### 2.1 Cor — primitivas

```
colors.diamante.500   #0F1E3D   (azul-noite institucional · cor-assinatura)
colors.diamante.700   #07101F   (texto primário claro)
colors.ouro.500       #D4AF37   (dourado texturizado · ÚNICO acento de marca)
colors.preto-cosmico  #1A120B   (preto quente — substitui #000 SEMPRE)
colors.papel          #FAFAF7   (fundo padrão · creme, nunca #FFFFFF puro como base)
colors.azul.700       #243D63    (pilar ACESSO / fluxo)
colors.verde.700      #1F4E3A    (pilar PROTEÇÃO / sucesso)
colors.vermelho.700   #7A1F1F    (risco / erro — uso parcimonioso)
colors.rule           #CFC9BD    (divisórias suaves)
```

### 2.2 Tipografia

```
typography.heading    Fraunces (serif) · H1 56/1.05/500 · H2 40/1.10/500 · H3 28/1.15/500
typography.subhead    Inter (sans)  · H4 22/1.25/600 · H5 18/1.30/600 · H6 14/1.40/600
typography.body       Inter · 16px / line-height 1.55 / weight 400
typography.label      Inter · 13px / tracking 0.04em
typography.code       JetBrains Mono · 13px
```

### 2.3 Espaço, raio, motion (baseline 8pt)

```
spacing   4 · 8 · 16 · 24 · 32 · 48 · 64 · 96
radius    0 · 4 · 8 · 16   (NUNCA pill/totalmente-arredondado em containers institucionais)
motion    fast 100ms · standard 200ms · slow 300ms · ease cubic-bezier(0.4,0,0.2,1)
elevation sombras discretas (elev-1/elev-2) — peso por borda+contraste, não por drop-shadow forte
```

---

## 3. Intenção Semântica (quando usar cada token)

- **Ouro `#D4AF37` é sagrado e escasso.** Use APENAS para o acento de marca: 1 CTA primário por tela, selo, detalhe de assinatura. Nunca como cor de fundo de bloco, nunca em texto corrido. Ouro everywhere mata o ouro.
- **Diamante `#0F1E3D`** é a cor institucional de superfície inversa (headers, faixas de autoridade, dark mode base).
- **Preto cósmico `#1A120B`** é o tom de texto/tinta mais escuro permitido. `#000000` é **proibido** (frieza clínica).
- **Papel `#FAFAF7`** é o fundo padrão. `#FFFFFF` puro só para superfícies elevadas (cards), nunca como base de página.
- **Pilares cromáticos** (mapeiam os 4 pilares MC): ACESSO→azul `#243D63` · PROTEÇÃO→verde `#1F4E3A` · risco→vermelho `#7A1F1F`. Use cor com significado, nunca decorativa.
- **Serif Fraunces** carrega a voz humana (títulos, frases-âncora). **Inter** carrega a informação (corpo, dados, UI). Não inverta.

---

## 4. ANTI-SLOP KIT (contra-regras invioláveis)

> Estas regras neutralizam os vícios padrão do Claude Design (Opus 4.7 visão). Adaptadas do
> `awesome-claude-design/Anti-Slop Kit` e ancoradas no canon cromático MC. São BLOQUEIOS, não sugestões.

1. **Sem teal genérico.** O acento é ouro `#D4AF37` — e só. Proibido `#16d5e6` ou qualquer teal/ciano default.
2. **Sem `#000000`.** O preto é sempre `#1A120B` (preto cósmico). Branco-base é sempre `#FAFAF7` (papel).
3. **Sem ponto piscante "live/AI".** Zero indicadores de status animados. Nada de bolinha verde pulsando.
4. **Containers aninham no máximo 2 níveis.** Proibida "sopa de containers" (card dentro de card dentro de card com 24px de padding em tudo).
5. **Sem grade de 3 colunas no hero.** Use linha-única, linhas alternadas ou marquee. Nada de "feature grid" clichê.
6. **Tipografia explícita, não vibe.** Headings = Fraunces 500. Corpo = Inter 400. Proibido serif-default aleatório do Claude ou Inter-em-tudo.
7. **Barra-acento à esquerda = só semântica.** Régua/borda esquerda reservada para severidade/alerta (ex: caso urgente DIB). Nunca decoração em card.
8. **Uma família de ícones só.** Comprometer com um set (ou tipografia pura). Proibido empilhar Lucide default em nav+botão+empty-state.
9. **Sem gradiente, sem 3D.** Veto do Princípio #46. Superfície é cor chapada + textura sutil de papel/ouro.
10. **Densidade humana, não densidade techie.** Respeitar Zilda-STF: alvos de toque ≥44px, texto base nunca <16px, contraste AA mínimo.

---

## 5. Componentes canônicos (esqueleto)

- **CTA Primário:** fundo ouro `#D4AF37`, texto preto-cósmico, radius 8, 1 por tela. Estado hover escurece ouro 8%.
- **CTA Secundário:** outline diamante, fundo transparente.
- **Card institucional:** fundo `#FFFFFF` sobre base papel, borda `#CFC9BD` 1px, radius 8, elev-1, padding 24.
- **Faixa de autoridade (header):** fundo diamante `#0F1E3D`, texto papel, logomark marca-abraço.
- **Alerta urgente (DIB):** borda-esquerda 4px vermelho `#7A1F1F`, ícone único, fundo `#F8E5E5` claro.
- **Selo/assinatura:** detalhe ouro, serif Fraunces.

---

## 6. Como operar (disciplina de sessão)

1. **Scaffold once.** Gere o esqueleto da tela UMA vez via chat, com este DESIGN.md colado.
2. **Itere inline.** Refinamentos via comentário no canvas (clicar no elemento), não novos prompts — re-edita só o pedaço.
3. **Máx. 4 telas de referência.** Nunca jogar o monorepo inteiro; linkar só `/components` ou o que importa.
4. **Tweaks panel** para variações de margem/cor sem regerar.
5. **Handoff → Claude Code** quando o mock estiver pronto: bundle de 1 clique → eu (Falcão) implemento em produção com os tokens reais (`mc-design-tokens.css`).

---

## 7. Proveniência (rastreabilidade Proof-First)

- Cromática/tipografia/espaço: `mc-design-tokens.css` (selado em `MC-CANONICO-ConvencaoDesign-MC-v1_0`).
- Vetos (gradiente/3D, dual filled+linha): Princípio #46 + ERRATA-Cromatica-001.
- Anti-Slop Kit: `github.com/rohitg00/awesome-claude-design` (Anti-Slop Kit · aesthetic families), cruzado com canon MC.
- Motor: Claude Design = Opus 4.7 visão (`MC-DESIGN-SELO-Motor-Opus47`).
- Lei suprema: `CLAUDE.md` MC v3.0 (D>C>V · Zilda-STF · Firewall OAB).

> **Gate aberto:** camada Visual Law jurídica (azul-marinho) é trilha R3 (Dra. Juliana) — NÃO incluída aqui.
> Este arquivo cobre a camada institucional/produto. Zona Verde 100%.

---
*Derivado por Falcão (Claude Code) sob leme do Founder · 2026-06-08 · v0.1 PROVISIONAL · não-selado.*
