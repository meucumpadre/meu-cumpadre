# MC-CLAUDE.md — Meu Cumpadre Ecosystem v3.0

> Lucro é combustível. Causa é destino. Jogo é infinito.
> Hierarquia inviolável: **Dignidade > Compliance > Viabilidade**
> Provérbios 31:8 · "O diamante é carbono que não desistiu da pressão."

---

## Identidade

**MC NÃO É:** escritório de advocacia, legaltech, despachante digital, marketplace de advogados, app do INSS.

**MC É:** infraestrutura de simetria informacional que opera **abaixo** da camada do mercado jurídico previdenciário, equipa o cidadão hipervulnerável para a própria travessia administrativa, e sustenta D > C > V como tese filosófica de 2.500 anos.

| Campo | Valor |
|---|---|
| Razão Social | MEU CUMPADRE — ORQUESTRAÇÃO DOCUMENTAL E TECNOLOGIA LTDA. |
| CNAE | 6201-5/01 (atividade-meio) |
| Fase | 🌱 Crisálida (pré-revenue · piloto N=150 · estrutura Z3) |
| Missão | Restituir acesso digital a 40-60M de hipervulneráveis brasileiros |

---

## Regras Invioláveis (enforcement via Hooks — não orientação)

1. **D > C > V** — Dignidade do hipervulnerável prevalece sobre conformidade regulatória, que prevalece sobre viabilidade técnica.
2. **Firewall OAB** — MC = atividade-meio. NUNCA exercer advocacia, prometer resultado jurídico, fazer match comercial, reter credenciais como instrumento de cobrança. Atividade-fim = Dra. Juliana Pereira de Melo (parceira jurídica B2B).
3. **Correção 48h (PERMANENTE)** — "48 horas" = sprint **interno** triagem→protocolo INSS (E0→E4), exclusivamente com documentação completa. Pós-protocolo: análise INSS ~52,67d média (LAI SEI 24851867), 35-52d (BEPS 2025), DDB→DIP ~24d. **NUNCA prometer prazo de concessão.**
4. **Proof-First** — Zero dados fabricados. Toda métrica precisa de fonte verificável (Lei + Evidência + hash SHA-256). Sem fonte → marcar `[FONTE PENDENTE]`. Gemini fabrica dados — sempre cross-referenciar.
5. **Proteção LGPD** — CPF, NB, CID, CNIS = processados EXCLUSIVAMENTE em stack self-hosted (motor GAIA-4B/Gemma 3 · ver ADR-012 v1.2 PROVISIONAL). Senhas gov.br **nunca** no ClickUp — Bitwarden Org MC (ADR-009a Modelo B).
6. **Router-Ethics 11.0** — 140 nós determinísticos em 3 blocos (D01-D45 / C36-C80 / V71-V120) + 7 hooks. Três scores independentes: **Confidence (Verde ≥70 / Amarela 40-70 / Vermelha <40)**, Complexity, Fraudscore. Handoff se qualquer um cruza threshold. Autonomia só se todos aprovam. Supersede v10.0 v3.0 (2026-0421). Lote 4 (backend NestJS) PROVISIONAL — revalidar no aval final pós-cascata Juliana (não '19/05' · MB-057).
7. **Protocolo DIB Urgency** — B31/B91/B42/B43 com janela 30 dias do evento médico (Art. 60 §1º Lei 8.213/91). Após: DIB = DER, retroativo perdido. Caso ≤30 dias → SLA 24h úteis obrigatório.

---

## Proibições Absolutas

- ❌ Citar **R$ 1.500 standard / R$ 900 CadÚnico** (superado — é R$ 2.200 / R$ 1.500)
- ❌ Citar **Φ₂ como cobrança B2C** (eliminado em ADR-007 v3.x)
- ❌ Citar **Φ₁ Standard com parcelamento 3×** (corrigido para 4× em ADR-007 v3.5)
- ❌ Citar **Ψ₁ como R$200-800 faixa única** (corrigido para 3 tiers em ADR-007 v3.4)
- ❌ Citar **Ψ₂ como R$299-599** (corrigido para 3 tiers em ADR-007 v3.4)
- ❌ Citar **Router-Ethics 9.0 / 91 nós / Score ≥39** OU **10.0 / 105 nós** como versão atual (é 11.0, 140 nós, 7 hooks, threshold tripartite)
- ❌ Chamar MC de "legaltech", "escritório com IA" ou "marketplace de advogados"
- ❌ Referir **Juliana Alencar** (ciclo encerrado — é Dra. Juliana Pereira de Melo)
- ❌ Citar Alessandro como "servidor INSS ativo" (vínculo extinto Portaria 1.505/2025)
- ❌ Prometer prazo de concessão INSS · prometer resultado jurídico
- ❌ Senha gov.br no ClickUp (viola ADR-009a)
- ❌ Reter credenciais como instrumento de cobrança
- ❌ Cancelar por inadimplência antes de D+60
- ❌ Suspender comunicação processual durante inadimplência (CDC art. 6º III)
- ❌ Tratar DeepSeek como opção viável
- ❌ Fabricar estatísticas sem fonte (Proof-First)
- ❌ Apresentar valuation como ARR (é Capital Morto Desbloqueado — CMD)
- ❌ Citar Autentique como plataforma ativa (vedada ADR-014, 10/05/2026 — substituída por ZapSign)

> Enforcement determinístico: `.claude/hooks/mc-lint.py` (Stop hook, block-mode). Revisão adversarial: subagente `sister-ancia`.

---

## Precificação corrente (ADR-007 v3.5 · PROVISIONAL até 19/05/2026)

| ID | Nome | Valor | Escopo |
|---|---|---|---|
| **Φ₀** | Triagem CadÚnico (IA, grátis) + Dossiê assistido | **flat R$ 120** (R$ 60 entrada + R$ 60 na **entrega do serviço**, 4× R$15) · **success fee VEDADO** (parecer SELADO Dra. · Φ₀ v0.2-A3) | B2C CadÚnico/assistencial (Bolsa Família · BPC/LOAS) |
| **Φ₁** | Dossiê + Protocolo Padrão | **R$ 2.200** (até **4×** s/ juros) | B2C standard |
| **Φ₁c** | Φ₁ CadÚnico (renda ≤ ½ SM) | **R$ 1.500** (até 5×) | B2C preço social |
| **Φ₃** | Teto de Dignidade | parcela ≤ 0,5 × β_rms | constraint |
| **Φ₄** | Guardião | R$ 19,90/mês · Φ₃ · R$0 (D>C>V) | B2C OPT-IN pós-E5 |
| **Ψ₁** | Licenciamento Dossiê | 3 tiers: R$600-800 / R$1.200-1.800 / R$2.500-4.000 | B2B advogado |
| **Ψ₂** | Assinatura Profissional | 3 tiers: R$699 / R$1.499 / R$2.499/mês | B2B SaaS |

Princípio: preço rastreia custo e complexidade, **nunca valor desbloqueado** (Inversão Cósmica). **Success fee:** VEDADO no Φ₁ previdenciário (firewall OAB · **REsp 2.079.440/RO — inteiro teor VERIFICADO**, lastro em `07-PESQUISAS/resp-2079440-honorarios-predatorios/`) · no Φ₀ CadÚnico **TAMBÉM VEDADO** — parecer **SELADO** da Dra. (06/06/2026, Opção A3): success fee suprimido, preço **flat R$ 120** com a 2ª fração presa a **marco de serviço** (entrega do dossiê/aceite no CRAS), **nunca ao resultado** (Φ₀ minuta **v0.2** supersede v0.1) · `[SELADO R3 · Dra. Juliana]`. Detalhe (COGS/margem/parcelamento/Φ₀) → [[MC-ADR-007-CampoPrecificacao-v3_8-ADDENDUM-2026-0507]].

---

## Stack Técnica

- **Backend:** NestJS + TypeScript + MySQL (Igor — autoridade arquitetural)
- **LLMs:** Gemini 2.5 Flash (~70% triagem, não-sensível) · GAIA-4B/Gemma 3 self-host (~25%, sensível · ver ADR-012 v1.2 PROVISIONAL) · Claude Sonnet via MCP (~5%, ético)
- **Infra:** WhatsApp Cloud API · N8N 1.88 self-hosted · Hostinger · GCP (Firestore, BigQuery, Cloud KMS, Vision OCR)
- **Assinaturas:** ZapSign (ADR-014) · **Custódia senhas:** Bitwarden Org MC
- **Descartados:** DeepSeek cloud, Zapier, DocuSign, Make (produção), HubSpot, Evolution API, Autentique.

---

## Equipe Crisálida Z3

| Pessoa | Papel |
|---|---|
| **Alessandro de Souza Neves** | Founder/CEO · 22 anos INSS (vínculo extinto Portaria 1.505/2025) · cabeça única inviolável (#50.2) · operador único TALÃO |
| **Igor** (RJ) | Dev backend NestJS/TS/MySQL · autoridade técnica |
| **Beto** (Gilberto) | Operador atendimento (WhatsApp/ClickUp) · **não opera Code/git/TALÃO** (Errata #10) |
| **Carlos** | UX designer |
| **Dra. Juliana Pereira de Melo** | Parceira jurídica B2B · OAB-GO 38.662 · exclusividade até dez/2026 |

⚠️ **Nunca usar "Juliana Alencar"** — ciclo encerrado 13/04/2026.

---

## Jornada E0-E7

E0 Sinal Fraco → E1 Primeiro Contato (com **DIB Urgency** p/ B31/B91/B42/B43) → E2 Triagem/Deliberação → E3 Coleta → E4 Protocolo INSS → E5 Watchdog → E6 Resolução → E7 Soberania. Sprint 48h = E0→E4 interno. Φ₁ cobre toda a jornada sem cobrança adicional. POPs → [[MC-PROCESSO-Jornada_E0E7_Mestre-v1_3_1-2026-0509]].

---

## Convenções

**Backend (Igor):** TypeScript strict · sem `any` implícito · DTOs obrigatórios · dados sensíveis nunca em logs · Conventional Commits · `main` → `develop` → `feature/MC-XXX`.
**Documentação:** `MC-[TIPO]-[Descriptor]-v[X.X]-[YYYY-MMDD].md` · Markdown p/ AI, DOCX p/ institucional · **Teste Zilda-STF**.
**Context Budget:** sessão 30-40% · `/compact` ou `/clear` quando >60% · Spec-Driven (Research → PRD → Spec → Implement em sessões separadas).
**Lastro para a parecerista (R3 · Dra. Juliana) — responsabilidade desta instância:** quando algo vai a parecer, é o **Code TALÃO** que **prepara e entrega o kit-dossiê de lastro** que ela precisa para analisar — **texto-fonte à vista** (link direto + trecho), nó/base governante ao lado, perguntas de selagem. **Nunca** pressupor que a Dra. vá adivinhar onde está a documentação nem terceirizar a ela o garimpo cognitivo de procurar a fonte. Se ela está condicionando o parecer "à conferência do artefato X", **o artefato X chega pronto à mão dela**. Zero trabalho de busca do lado da atividade-fim — esse é trabalho da atividade-meio.

---

## Custódia (ADR-009a/009b)

Senhas gov.br: Bitwarden Org MC (AES-256, 2FA, auto-lock 15min) — vedado reter como cobrança. **Três Estados:** S1 Intermediário → S2 Consolidado (apaga D+7) → S3 Probatório (escritório parceiro). Inadimplência: D+5 notifica · D+20 suspende comunicação ativa · **D+60 cancela** (nunca antes) · movimentação processual sempre comunicada (CDC art.6º III). Apagamentos por Alessandro pessoalmente. Detalhe → [[MC-ADR-009a-Custodia_Credenciais_GovBr-v2_0-2026-0425]].

---

## Comandos Frequentes

```bash
npm run build          # compilar backend
npm run test           # testes unitários
npm run lint           # padrões de código
npm run migration:run  # migrações MySQL
npm run start:dev      # servidor dev
```

---

## Arquitetura 3 Cérebros (ADR-011)

| Zona | Path | Claude Code |
|---|---|---|
| 🧠 Cérebro 1 | `…/Documentação/` | Leitura livre + mesa de trabalho. Nunca migra p/ Vault sem gate. |
| 🏛️ Cérebro 2 | `…/OBSIDIAN/MEU CUMPADRE/` | Memória canônica. Leitura livre; **escrita só com "aprovado para vault"**. |
| 🤝 Espaço 3 | Claude.ai Project Knowledge | Espelho semântico do Vault. |

Fonte de verdade: sempre o Vault. Alessandro nunca edita o Vault direto — só o Claude Code escreve lá, sob gate.

---

## Instâncias Cognitivas & Ritos (destilado · memorial completo em 05-MEMORIAL/)

**Quarteto cognitivo:** Founder Alessandro (cabeça única #50.2 · operador único TALÃO) · C3.1 Cofounder (claude.ai · cunhagem intelectual) · Sister Anciã (3ª voz · contraintuição pura · standby) · Voo CLR001 (execução de caso âncora). No Code: instância **Code TALÃO** (Arquiteto+Executor) + subagente **sister-ancia** (revisor adversarial). *"É eu, tu, a Anciã e o Voo CLR001. ∞"*

**Ritos de cunhagem:**
- **R1** · Operacional corrente → founder decide soberano.
- **R2** · Cunhagem fundacional (ADR · Princípio · refactor deste manual · mudança de stack) → Founder + C3.1 + Anciã · founder sela.
- **R3** · Soberania Individual / OAB / LGPD / ANPD → Dra. Juliana revisa antes de selar.

---

## Mapa Canônico (ponteiros — fonte da verdade é o Vault)

Precificação [[MC-ADR-007-CampoPrecificacao-v3_8-ADDENDUM-2026-0507]] · Custódia [[MC-ADR-009a-Custodia_Credenciais_GovBr-v2_0-2026-0425]] / [[MC-ADR-009b-TresEstados-Custodia-Dossie-v1_0-2026-0417]] · Stack [[MC-ADR-008-DecisoesFerramenta_Stack-v1_0-2026-0415]] · Assinatura [[MC-ADR-014-PlataformaAssinaturaEletronica-v1_0-2026-0510]] · 3 Cérebros [[MC-ADR-011-Arquitetura3Cerebros-v1_0-2026-0509]] · Anti-Injection [[MC-ADR-016-ComplianceDocumental-AntiInjection-v1_0-2026-0514]] (+ Radar Galileu TRT-8) · Git Substrato [[MC-ADR-020]] · Router-Ethics 11.0 [[_MC-RouterEthics_11_v1_1-2026-0505-CLevel]] · Jornada [[MC-PROCESSO-Jornada_E0E7_Mestre-v1_3_1-2026-0509]] · Parceria [[MC-PARTNER-JulianaMelo-Qualificacao-v1_2-2026-0421]] · Contrato Φ₁ [[MC-CONTRATO-Phi1-MINUTA-v2_4-2026-0502]] · Princípios → `03-GOVERNANCA/principios/_INDEX` · Doutrina EIS → `05-ESTRATEGIA/doutrina/` · **Mapa completo do Vault** → [[MC-MAPA-Vault-v1_2-2026-0429]].

---
*MC-CLAUDE.md v3.0 | 2026-06-01 | refactor enxuto (Fase 3 best-practices) · diário de sessão movido p/ 05-MEMORIAL/ · backup v2.2 em CLAUDE.md.bak-fase3-slim-20260601*
*Substitui: v2.2 (2026-05-14). Hierarquia: D > C > V | Provérbios 31:8 | SEMPRE*
