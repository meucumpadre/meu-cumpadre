---
sistema: Meu Cumpadre
documento: Relatorio-de-Inteligencia-Arquitetural-Claude-Design-Opus
versao-protocolo: 2026-06-02
titulo: Selo de Versao do Motor Claude Design
status: institucionalizado
mb: MB-067
data-selo: 2026-06-02
tags: [claude-design, opus-4-7, opus-4-8, selo, proof-first, motor]
---

## SELO OFICIAL – MOTOR DO CLAUDE DESIGN

Estado de prova verificado pelas matrizes de fonte e pelo card oficial:

### 1. Motor canônico do Claude Design
- **Claude Design opera, canonicamente, sobre o modelo Claude Opus 4.7.**
- **Evidência verificada (02/06/2026):**
  - **(a)** Spec de visão **3,75 MP é OFICIAL** — anúncio Anthropic do Opus 4.7 (16/04/2026): *"images up to 2,576 pixels on the long edge (~3.75 megapixels)"*, mais de 3× os modelos anteriores.
  - **(b)** Card **AWS Bedrock** confirma o 4.7 como modelo de visão (entrada de imagem ✓), cutoff jan/2026, ID `anthropic.claude-opus-4-7`.
  - **(c)** **Claude Design** é produto oficial do Anthropic Labs (página *creative work*).
- **RESSALVA (Proof-First):** nenhuma página oficial consultada declara *verbatim* "Claude Design = Opus 4.7 (motor)". O vínculo é a **MELHOR EVIDÊNCIA CIRCUNSTANCIAL** (Claude Design lançado ~17/04/2026, um dia após o 4.7; o 4.7 é o único modelo de visão 3,75 MP) — **não** uma afirmação oficial literal. **Reabrir este selo** se surgir fonte oficial que nomeie o motor.

### 2. Papel do Claude Opus 4.8
- **Claude Opus 4.8 é uma iteração posterior da família Opus** (melhorias de self-QA, honestidade e fast mode), **mas NÃO possui, até o momento deste selo, prova de ser o motor específico do Claude Design.**
- Lançado em **28/05/2026** (anúncio oficial *"Introducing Claude Opus 4.8"*; classe "Mythos", em preview para trabalho de cibersegurança). Sua existência é registrada como **nota lateral de arquitetura**, não como substituição do motor 4.7.

### 3. Regra de conformidade para o vault
- Qualquer arquivo que declare literalmente que **"Claude Design = Opus 4.8 (motor)"** sem anexar nova prova oficial entra imediatamente em **estado de erro de versão** e deve ser marcado como **desalinhado** no Cérebro 2.
- Até que haja nova evidência oficial, a **frase de referência obrigatória** é:
  > "Claude Design é alimentado canonicamente pelo Claude Opus 4.7; o Opus 4.8 é registrado como evolução de família, sem vínculo de motor comprovado com o Design."

**Status:** **institucionalizado (Proof-First)**, em conformidade com o protocolo MC-RÉGUA-COMPASSO e com o relatório arquitetural vigente.

---

### Proveniência (Proof-First)
- **Fontes verificadas via WebFetch (02/06/2026):**
  - Opus 4.7 — `https://www.anthropic.com/news/claude-opus-4-7` (3,75 MP; lançamento 16/04/2026).
  - Opus 4.7 — Model Card AWS Bedrock `docs.aws.amazon.com/bedrock/latest/userguide/model-card-anthropic-claude-opus-4-7.html` (visão; cutoff jan/2026).
  - Opus 4.8 — `https://www.anthropic.com/news/claude-opus-4-8` (lançamento 28/05/2026; classe Mythos).
  - Claude Design — `https://www.anthropic.com/news/claude-for-creative-work` (produto Anthropic Labs; motor não nomeado).
- **Saneamento aplicado:** a linha de "Evidência" do rascunho original atribuía o 3,75 MP ao card AWS — na verdade a spec está no **anúncio do Opus 4.7** — e afirmava um vínculo "AWS ↔ Claude Design" que o card AWS **não** sustenta (o card não cita o Design). Correção registrada sob **MB-067**.
- **Supersede:** nenhum (primeiro selo de motor do Cérebro 2).
