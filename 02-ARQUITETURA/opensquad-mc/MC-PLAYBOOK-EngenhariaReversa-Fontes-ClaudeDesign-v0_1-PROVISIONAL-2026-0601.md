---
tipo: playbook-engenharia-reversa
nome: MC-Playbook · Engenharia Reversa de Fontes — Caderno "Claude Design"
versao: v0.1
status: PROVISIONAL
data: 2026-06-01
gate-promocao: validação founder dos pilares + 1ª colheita executada e conferida + parecer sobre uso institucional
relaciona: "Princípio #46 (Engenharia Reversa Founder · Motor Externo · Lapidação Interna) · MC-Squad lab-claude-design · NotebookLM Pro (300 fontes/notebook) · ADR-016 Anti-Injection · Visual Law Camada 3b · Sister 3.2 Design"
autor: Claude (claude-opus-4-8) arquiteto-executor × Alessandro de Souza Neves (Founder)
audiencia: L1-L2 (founder · cofounder)
ancora-oficial: https://www.anthropic.com/news/claude-design-anthropic-labs
proof-first: âncora oficial primeiro; toda fonte com data+autor; sem fonte verificável = baixa prioridade
---

# MC-PLAYBOOK — Engenharia Reversa de Fontes · Caderno "Claude Design" v0.1

> Motor Externo (NotebookLM destila 300 fontes) → Lapidação Interna (MC-Squad faz a engenharia reversa).
> Este playbook estrutura a COLHEITA: o que buscar, onde, em que ordem, com que critério.

## 0 · O que é Claude Design (âncora oficial — Proof-First)
Produto Anthropic Labs (abr/2026, research preview · Claude Opus 4.7). Texto/imagem/código → designs, protótipos, sites, slides, one-pagers. Extrai design system do codebase. Web capture. Uploads DOCX/PPTX/XLSX.
Fontes primárias: news oficial · plugin Frontend Design · Artifacts (substrato).

---

## 1 · CRITÉRIO DE RELEVÂNCIA ESTRATÉGICA MC (padrão de admissão de fonte)
Toda fonte candidata passa por este filtro antes de entrar no caderno:

1. **Âncora oficial primeiro.** Cada pilar começa pela fonte primária (Anthropic). Hype só depois do canônico.
2. **Recência.** Prioridade: 2026 > 2025. Pré-2024 só se seminal/estrutural.
3. **Tração/autoridade.** Views, engajamento e autor reconhecido = sinal de validação social. Ordenar por visualizações.
4. **Busca global.** Conteúdo primário está em inglês. Não limitar a PT-BR.
5. **Vídeo YouTube → preferir LONGA duração.** Deep dives/tutoriais completos (20 min+) > shorts. Short só se for anúncio oficial.
6. **Diversidade de tipo.** Oficial + docs + vídeo longo + artigo técnico + CRÍTICA. Evitar eco-câmara de hype.
7. **Anti-fabricação.** Fonte sem data/autor identificável = baixa prioridade ou descarte.

> Regra de ouro do caderno: para cada pilar, **1 âncora oficial fixada à mão** + o resto colhido pelo critério acima.

---

## 2 · OS 8 PILARES (o leque) + distribuição das 300 fontes

| # | Pilar | Por que importa pro MC | Cota |
|---|---|---|---|
| P1 | **Fundamento Oficial & Roadmap** | A verdade canônica; base de tudo | 20 |
| P2 | **Design System & Consistência** | MC precisa de identidade visual consistente (marca confiável p/ Dona Zilda) | 45 |
| P3 | **Conceito → Protótipo Funcional** | Núcleo: texto/imagem → interface; web capture; uploads | 50 |
| P4 | **Artifacts & Microapps (substrato)** | Onde o Claude Design "roda"; microapps, Live Artifacts, MCP | 40 |
| P5 | **Frontend Plugin · Claude Code · Agent Skills** | Como operacionalizar no fluxo de trabalho real | 40 |
| P6 | **Acessibilidade & Visual Law (ponte MC)** | Teste Zilda-STF · Camada 3b · design inclusivo | 35 |
| P7 | **Governança, Segurança & Anti-Injection** | ADR-016 · segurança de UI gerada por IA · LGPD | 30 |
| P8 | **Casos de Uso, Limites & Crítica honesta** | Proof-First exige ver limites, não só hype; comparativos | 40 |
|   | **TOTAL** | | **300** |

---

## 3 · SEQUÊNCIA CIRÚRGICA DE PROMPTS (aplicar 1 por vez, conferir o retorno)

> Em cada pilar: (a) fixe a **âncora oficial** à mão; (b) cole a descrição em **NotebookLM → Descobrir fontes**;
> (c) rode as buscas YouTube/Web; (d) admita só o que passar no Critério da seção 1.

### P1 · Fundamento Oficial & Roadmap — cota 20
- 🎯 Âncora: https://www.anthropic.com/news/claude-design-anthropic-labs · https://claude.com/plugins/frontend-design
- 🔎 NotebookLM Descobrir: *"Official Anthropic announcement and documentation of Claude Design (Anthropic Labs, 2026): what it is, capabilities, Opus 4.7 vision model, research preview, roadmap and changelog."*
- ▶️ YouTube (ordenar por views · 20min+): `"Claude Design" Anthropic full walkthrough` ; `"Claude Design" Anthropic Labs deep dive`
- 🌐 Web (2026): `Anthropic "Claude Design" launch site:anthropic.com OR site:claude.com`

### P2 · Design System & Consistência — cota 45
- 🎯 Âncora: seção "design system extraction" da news oficial (P1)
- 🔎 NotebookLM Descobrir: *"How Claude Design extracts and applies a design system: typography, CSS variables, color tokens, React components, brand consistency from existing codebase/Figma."*
- ▶️ YouTube (views · 20min+): `Claude Design system tokens tutorial` ; `AI extract design system from codebase Claude`
- 🌐 Web: `"Claude Design" design system extraction tokens 2026`

### P3 · Conceito → Protótipo Funcional — cota 50
- 🎯 Âncora: capabilities da news oficial + Frontend Design plugin
- 🔎 NotebookLM Descobrir: *"Claude turning text prompts, images and documents into functional UI prototypes and websites; web capture tool; prompt-to-interface workflows and examples."*
- ▶️ YouTube (views · 30min+): `Claude build website from prompt full tutorial` ; `Claude Design prototype to production`
- 🌐 Web: `Claude text to UI prototype web capture 2026`

### P4 · Artifacts & Microapps (substrato) — cota 40
- 🎯 Âncora: https://support.claude.com/en/articles/9487310-what-are-artifacts-and-how-do-i-use-them
- 🔎 NotebookLM Descobrir: *"Claude Artifacts and Live Artifacts (2026): interactive React/HTML, artifacts calling Claude API, persistent storage, MCP integrations, microapp development."*
- ▶️ YouTube (views · 20min+): `Claude Artifacts advanced build microapp` ; `Claude Live Artifacts MCP tutorial`
- 🌐 Web: `Claude Live Artifacts MCP microapp 2026`

### P5 · Frontend Plugin · Claude Code · Agent Skills — cota 40
- 🎯 Âncora: https://claude.com/plugins/frontend-design · https://officialskills.sh/anthropics/skills/web-artifacts-builder
- 🔎 NotebookLM Descobrir: *"Anthropic Frontend Design plugin, Claude Code skills for UI/UX, web-artifacts-builder Agent Skill: how design integrates into the developer workflow."*
- ▶️ YouTube (views · 20min+): `Claude Code frontend design plugin tutorial` ; `Claude agent skills UI build`
- 🌐 Web: `Claude Code frontend-design plugin skills 2026`

### P6 · Acessibilidade & Visual Law (ponte MC) — cota 35
- 🎯 Âncora: https://www.w3.org/WAI/standards-guidelines/wcag/ (WCAG) — padrão de acessibilidade
- 🔎 NotebookLM Descobrir: *"Accessible and inclusive design with AI-generated interfaces; WCAG compliance; plain-language and visual communication for low-literacy and elderly users; legal design / visual law."*
- ▶️ YouTube (views · 20min+): `accessible UI design WCAG AI tutorial` ; `legal design visual law plain language`
- 🌐 Web: `AI generated UI accessibility WCAG inclusive design 2026`

### P7 · Governança, Segurança & Anti-Injection — cota 30
- 🎯 Âncora: https://owasp.org/www-project-top-10-for-large-language-model-applications/ + docs de segurança Anthropic
- 🔎 NotebookLM Descobrir: *"Security of AI-generated frontends and design: prompt injection in UIs, OWASP LLM Top 10, data privacy, safe rendering of AI output."*
- ▶️ YouTube (views · 20min+): `prompt injection web app security LLM` ; `securing AI generated frontend`
- 🌐 Web: `prompt injection generated UI OWASP LLM 2026`

### P8 · Casos de Uso, Limites & Crítica honesta — cota 40
- 🎯 Âncora: comparativos independentes + reviews críticas (não-Anthropic)
- 🔎 NotebookLM Descobrir: *"Real use cases, limitations and honest critiques of Claude Design: slides, one-pagers, blog migration, proposals; comparisons vs Figma, v0, Lovable; failure modes and token limits."*
- ▶️ YouTube (views · 20min+): `Claude Design review honest limitations` ; `Claude Design vs Figma vs v0 comparison`
- 🌐 Web: `"Claude Design" limitations review vs alternatives 2026`

---

## 4 · CHECKLIST DE CONFERÊNCIA (founder valida cada retorno)
Para cada fonte que o NotebookLM/busca trouxer, marcar:
- [ ] É do pilar certo? (não duplica outro)
- [ ] Tem data e autor? É 2026/2025?
- [ ] Tem tração (views/autoridade)?
- [ ] Se vídeo: é longo (20min+) ou é o anúncio oficial?
- [ ] Acrescenta ângulo novo (não é mais do mesmo hype)?
- [ ] Inclui ao menos 1 fonte CRÍTICA por pilar (Proof-First)?

---

## 5 · FLUXO OPERACIONAL
1. Founder executa P1→P8 (1 pilar por vez), conferindo pelo checklist.
2. Notebook "Claude Design" chega a ~300 fontes distribuídas.
3. Gerar **Relatório/Resumo** por pilar no NotebookLM (Estúdio).
4. Exportar para `sources/claude-design-notebooklm.md` (ou 1 arquivo por pilar).
5. Rodar `lab-claude-design` (complianceMode: advisory) → blueprint institucional.
6. Founder decide "aprovado para vault".

---
*MC-PLAYBOOK Engenharia Reversa de Fontes · Claude Design · v0.1 PROVISIONAL · 2026-06-01*
*Arquiteto-executor: Claude × Founder Alessandro · D > C > V*
