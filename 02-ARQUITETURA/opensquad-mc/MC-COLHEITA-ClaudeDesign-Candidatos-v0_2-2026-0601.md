---
projeto: Meu Cumpadre — Caderno do ASSUNTO (Claude Design)
arquivo: MC-COLHEITA-ClaudeDesign-Candidatos-v0_2-2026-0601
data: 2026-06-01
status: candidatos para inspeção (Proof-First) — fecha os vazios P4/P6/P7
mescla_com: MC-COLHEITA-ClaudeDesign-Candidatos-v0_1 (P1/P2/P3/P5/P8, ~17 vídeos, outra guia)
ferramenta_de_caça: WebSearch + WebFetch (Algrow só análise de vídeo, offline para busca)
---

# Colheita Claude Design — v0_2 (fecha os vazios P4 · P6 · P7)

> Incremento desta guia. Caça com ferramenta real; âncoras oficiais marcadas ✅ foram **lidas e verificadas** via fetch.
> **Régua MC:** recência pós-lançamento (17/04/2026); âncora oficial primeiro em cada pilar; views/duração = **"conferir no YT"** (Algrow offline); Proof-First (nada inventado).

## ⚓ Âncora-zero (oficial — comum a todos os pilares)

| Fonte | Link | Uso no NotebookLM |
|---|---|---|
| Introducing Claude Design (Anthropic Labs) — anúncio, 17/04/2026 ✅ | https://www.anthropic.com/news/claude-design-anthropic-labs | fonte primária: data, Opus 4.7, features, planos |
| Get started with Claude Design — doc oficial | https://support.claude.com/en/articles/14604416-get-started-with-claude-design | how-to canônico |
| Set up your design system — doc oficial | https://support.claude.com/en/articles/14604397-set-up-your-design-system-in-claude-design | âncora do P2 (Design System/Figma) |
| Design plugin / Frontend Design plugin | https://claude.com/plugins/design · https://claude.com/plugins/frontend-design | capacidades + handoff |

*Verificado no oficial: lançamento 17/04/2026, Opus 4.7 (visão), canvas+chat, "adjustment knobs" (= Tweaks), handoff bundle → Claude Code, export Canva/PDF/PPTX/HTML, research preview Pro/Max/Team/Enterprise.*

---

## 🎯 P4 — ARTIFACTS

> Por que é pilar: Artifacts é a camada de renderização/output interativo do Claude Design (HTML/React/apps com IA + MCP).

| Fonte | Link | Por que é âncora MC |
|---|---|---|
| What are Artifacts (oficial) ✅ | https://support.claude.com/en/articles/9487310-what-are-artifacts-and-how-do-i-use-them | define Artifacts, conexão MCP (Asana/Slack/GCal), storage stateful 20MB |
| Turn ideas into interactive AI-powered apps (oficial) | https://www.anthropic.com/news/build-artifacts | Artifacts viram apps AI-powered (usuário autentica, sem custo p/ criador) |
| Claude Artifacts Guide (2026) — Albato | https://albato.com/blog/publications/how-to-use-claude-artifacts-guide | guia prático atualizado |
| Claude Live Artifacts: Persistent Workspace (2026) — Eigent | https://www.eigent.ai/blog/claude-live-artifacts-guide | aprofunda persistência/stateful |

**Uso NotebookLM:** ancorar os 2 oficiais como base conceitual; usar os guias 2026 para exemplos de uso.

---

## 🎯 P6 — ACESSIBILIDADE / VISUAL LAW (pilar da inclusão)

### Âncora oficial (a11y no produto) — verificada ✅
| Fonte | Link | O que crava |
|---|---|---|
| Design guidelines (oficial) ✅ | https://claude.com/docs/connectors/building/mcp-apps/design-guidelines | tap 44×44pt, contraste WCAG AA mín., teclado + text alternatives, viewport 320pt→tablet, "usable by everyone" |
| Get started (Claude revisa a11y) | https://support.claude.com/en/articles/14604416-get-started-with-claude-design | revisão de acessibilidade/contraste/hierarquia sob demanda |
| Design plugin (accessibility audits) | https://claude.com/plugins/design | auditoria de acessibilidade no fluxo |

### P6-A — Gap de acessibilidade do design por IA (coração causal)
| Fonte | Link | Nota |
|---|---|---|
| "33 Claude Skills p/ o gap de acessibilidade do vibe design" (Abr/2026) | https://matthewlarn.medium.com/i-built-33-claude-skills-to-fix-the-vibe-design-accessibility-gap-a0f7f3ff1d1c | tese: demo bonito ≠ produto usável; scanners pegam só ~30% do WCAG |
| accessibility-agents (11 specialists WCAG 2.2 AA) | https://github.com/Community-Access/accessibility-agents | impede IA de gerar código inacessível |
| Accessibility Risks in AI-Generated Interfaces | https://brics-econ.org/accessibility-risks-in-ai-generated-interfaces-wcag-and-real-world-failures | estudo ACM (2024): 6 sites feitos por IA = 308 erros |
| claude-a11y-skill · AccessLint marketplace | https://github.com/airowe/claude-a11y-skill · https://github.com/accesslint/claude-marketplace | ferramental de auditoria (axe-core/jsx-a11y, MCP) |

### P6 — Régua normativa (fundação)
| Fonte | Link | Nota |
|---|---|---|
| W3C WAI — WCAG (oficial normativo) | https://www.w3.org/WAI/standards-guidelines/wcag/ | fonte-zero do padrão; WCAG 3.0 draft (mar/2026) |
| Contexto legal | — | ADA prazo 24/04/2026 (entes públicos 50k+); California AB-331 (vigor 01/01/2026, avaliação algorítmica de acessibilidade em IA pública) |

### P6-B — Visual Law / Legal Design
| Fonte | Link | Por que é âncora MC |
|---|---|---|
| Stanford — Plain Language & Legal Design | http://justiceinnovation.law.stanford.edu/plain-language-legal-design/ | âncora acadêmica (Legal Design Lab = referência mundial) |
| Visual Law: Definition, Uses, Benefits | https://lawyersdesignschool.com/visual-law-for-lawyers-the-end-of-dense-legal-writing/ | define Visual Law (fim do texto jurídico denso) |
| What is legal design? — Juro | https://juro.com/learn/legal-design | base conceitual |
| Legal Design best practices — Zefort | https://zefort.com/blog/essential-legal-design-best-practices-for-modern-legal-workflow/ | infográficos, fluxogramas, pictogramas no jurídico |

**Uso NotebookLM:** P6 = pilar da inclusão (design usável por todos + direito compreensível). Conecta a11y técnica com Visual Law.
**Nota Proof-First:** P6 vive em docs/artigos/repos — **sem vídeos** nesta batida.

---

## 🎯 P7 — ANTI-INJECTION (segurança / falha-fechado)

### Âncoras oficiais — verificadas ✅
| Fonte | Link | O que crava |
|---|---|---|
| Anthropic — Mitigating prompt injection (browser use) ✅ | https://www.anthropic.com/research/prompt-injection-defenses | 3 camadas: training (RL) + classifier (escaneia conteúdo não-confiável) + red team; Opus 4.5 = 1% ASR; "nenhum agente é imune" |
| MCP — Security Best Practices (oficial protocolo) ✅ | https://modelcontextprotocol.io/specification/draft/basic/security_best_practices | MUST/SHOULD: confused deputy→consent por-cliente; token passthrough proibido; SSRF→bloquear IP privado/metadata; session hijack; RCE de server local→sandbox+consent; least-privilege |
| Anthropic — Trustworthy agents in practice | https://www.anthropic.com/research/trustworthy-agents | base: instrução vs. dado; exemplo do e-mail malicioso |

### P7-A — Ameaça na superfície do Claude/Artifacts (casos reais)
> Proof-First: security research / disclosures de fornecedor — vários via HackerOne. Inspecionar antes de citar como fato fechado.

| Fonte | Link | Nota |
|---|---|---|
| Oasis Security — exfiltra chat/files/memories | https://www.oasis.security/blog/claude-ai-prompt-injection-data-exfiltration-vulnerability | foco em network access default |
| Infosecurity Mag — 3 extensões oficiais vulneráveis (Koi) | https://www.infosecurity-magazine.com/news/claude-desktop-extensions-prompt/ | severidade alta, HackerOne |
| Actionable Security — "AI as insider threat" | https://actionablesec.com/blog/when-ai-becomes-the-insider-threat-claude-and-the-risk-of-indirect-prompt-injections | injection indireta |
| TrueFoundry — guia injection Claude Code enterprise | https://www.truefoundry.com/blog/claude-code-prompt-injection | lado defensivo |

### P7-B — Vetor MCP (a porta que o Claude Design abre)
| Fonte | Link | Nota |
|---|---|---|
| Simon Willison — MCP tem problemas de injection | https://simonwillison.net/2025/Apr/9/mcp-prompt-injection/ | autoridade máxima |
| Unit 42 (Palo Alto) — ataques via MCP Sampling | https://unit42.paloaltonetworks.com/model-context-protocol-attack-vectors/ | "Rug Pull": tool muda definição pós-install |
| Breaking the Protocol — Maloyan | https://maloyan.xyz/blog/mcp-security-analysis | MCP amplifica ataque 23–41% |

### P7-C — Defesas / Anti-Injection (defense-in-depth)
| Fonte | Link | Nota |
|---|---|---|
| Design Patterns for Securing LLM Agents (arXiv) | https://arxiv.org/pdf/2506.08837 | âncora acadêmica de padrões |
| LlamaFirewall (open source) | https://arxiv.org/pdf/2505.03574 | PromptGuard 2 + Agent Alignment Checks + CodeShield |
| Parallax: Agents que Pensam Nunca Devem Agir | https://arxiv.org/html/2604.12986v1 | ressoa com falha-fechado meio↔fim (Camada R3) |
| Microsoft — When prompts become shells (RCE), mai/2026 | https://www.microsoft.com/en-us/security/blog/2026/05/07/prompts-become-shells-rce-vulnerabilities-ai-agent-frameworks/ | injection → execução de código |

**🔥 Munição dura (contexto):** ataques +340% YoY (fim 2025); indiretos >55% dos casos; 40% dos frameworks com falha explorável; estudo conjunto OpenAI+Anthropic+DeepMind: sob ataque adaptativo, **toda defesa publicada furada com >90% de sucesso**. → Não há muralha; só falha-fechado em camadas.

**Uso NotebookLM:** P7 = base de segurança do produto. Ancorar os 2 oficiais verificados; usar MCP + casos reais para mapear superfície de ataque; usar P7-C para a estratégia de defesa.

---

## 📌 Parênteses — Claude for Legal (NÃO é deste caderno)
Achado lateral durante a caça de P6. Registro com o **filtro do founder**:
- Claude for Legal lançado 12/05/2026 (12 plugins por área, Harvey/Thomson Reuters, grounding anti-alucinação; trilha access-to-justice: Courtroom5, Descrybe, Free Law Project).
- **Filtro BR≠EUA (founder):** já estudado; muito do stack/usabilidade dos EUA **não converge para o Brasil**. Não é "não" taxativo — é ressalva. *Se* for olhar, olhar **só com esse filtro**.
- Status: candidato a caderno próprio, **não aberto**.

## ✅ Próximos passos
1. Mesclar este v0_2 (P4/P6/P7) com o v0_1 (P1/P2/P3/P5/P8) na outra guia/repo.
2. Quando o **Algrow** voltar: reordenar toda a colheita por **views/duração reais** e marcar top por pilar.
3. Inspeção do founder antes de subir ao NotebookLM (Proof-First).
