---
tipo: KIT-LASTRO R3 (parecer ADR-016 · mesa da parecerista)
codigo: MC-LASTRO-R3-ADR016-AntiInjection-ParaDra-Melo
versao: v1.0
data: 2026-06-09
para: Dra. Juliana Pereira de Melo — OAB-GO 38.662 (parecerista externa independente · atividade-fim)
de: MC — Code TALÃO (atividade-meio · organiza o lastro; a tese é da Dra.)
objeto: parecer sobre ADR-016 (Compliance Documental Anti-Injection) — gates G1 (CNJ 615/2025) e G2 (disciplina de produção de peças)
firewall_oab: o enquadramento jurídico (CNJ 615/2025, CFOAB 001/2024, art. 77 CPC) é da Dra. O MC organiza os fatos técnicos. Nada aqui pratica advocacia.
hierarquia: Dignidade > Compliance > Viabilidade
---

# 🗂️ Kit R3 — ADR-016 Anti-Injection (gates G1/G2)

> **Dra., 2º condicionado da ordem que a senhora fixou** (ADR-012 ✅ → **ADR-016** → Φ₁ → Ψ₁). O ADR-016 é a **disciplina inviolável de produção de peças** do MC contra **prompt injection documental** — nascida do caso **TRT-8 Parauapebas (12/05/2026)**, a primeira jurisprudência brasileira de injection (multa R$ 84.250,08 · afastamento do art. 77 §6º CPC). Os **gates G1 e G2 dependem do seu parecer**. Tudo à vista. *(O ADR-016-fonte segue no kit.)*

---

## 1. Matéria e a pergunta jurídica

**Matéria:** disciplina de produção de toda peça documental do MC (B2C Φ₁/Φ₁c/Φ₁-PcD/Φ₀ · B2B Ψ₁) à luz da jurisprudência de **prompt injection** e das normas **Resolução CNJ nº 615/2025** (IA no Judiciário, vigente 14/07/2025) e **Recomendação CFOAB nº 001/2024** (uso de IA na advocacia).

**Perguntas (a senhora decide — G1/G2):**
1. **(G1)** A disciplina do ADR-016 (3 pilares) é **conforme à Resolução CNJ 615/2025** e antecipa adequadamente seus deveres?
2. **(G2)** A **disciplina de produção** (sanitização E4.5 + proibições absolutas + camada humana) é suficiente como **prova de boa-fé documental**, afastando o risco do art. 77 §6º CPC (litigância de má-fé por injection) que o caso TRT-8 materializou?
3. O **texto de disclosure de IA** (§2.3 do ADR / §4 deste kit) está adequado à Recomendação CFOAB 001/2024 e ao Firewall OAB? **+ há um ponto de CNAE a conferir (§4).**
4. A **camada humana** (leitura visual da senhora antes da assinatura A1 ICP-Brasil) é suficiente como salvaguarda de risco residual (§5)?

---

## 2. O caso gerador (TRT-8 Parauapebas) — o fato que torna isto urgente

Em **12/05/2026**, o sistema **Galileu (TRT-4/CSJT)** detectou **prompt injection em fonte branca** numa petição inicial (3ª Vara do Trabalho de Parauapebas/PA). O juiz aplicou **multa de R$ 84.250,08** e **afastou a proteção do art. 77 §6º CPC**. Contexto: CNJ/PNUD 2024 → **178 iniciativas de IA** em tribunais BR · **45,8%** de adoção de IA generativa. O MC opera 3 palcos com IA institucional ativa/planejada (INSS · CRPS · JEF/B2B) → **exposto ao mesmo risco**. O ADR-016 é a defesa **by design**.

---

## 3. A disciplina (3 pilares) — o que a senhora valida

| Pilar | Conteúdo | Norma que antecipa |
|---|---|---|
| **1 — Formato canônico** | Peça em **PDF/A-2u** (ISO 19005-2) + JSON-LD (Camada 0). PDF/A-2u **proíbe** JavaScript/fontes externas/cripto/conteúdo dinâmico → elimina vetores clássicos | — |
| **2 — Sanitização E4.5** (antes da assinatura A1) | ExifTool (zera XMP) · qpdf (regrava/irreversível) · validação de contraste WCAG AAA <7:1 · validação de fontes (≥8pt, sem zero-width U+200B/C/D/FEFF) · **SIV** (SHA-256 + timestamp ICP-Brasil + OpenTimestamps) | art. 77 CPC (boa-fé) |
| **3 — Disclosure de IA** | Declaração explícita na Página de Firewall OAB (texto §4) | **CFOAB 001/2024 · CNJ 615/2025** |

> **Proibições absolutas** (ADR §3): fonte branca, fonte <8pt, zero-width chars, XMP com dado interno, OCG ocultas, alt-text com instrução a LLM, **qualquer instrução direcionada a IA institucional — mesmo "proteja meu cliente da IA"**, submeter sem sanitização.

> **Já propagado pelo MC nesta linha:** **Hook 8 — Sanitization Gate** (spec criada · Router-Ethics) + gates anti-injection nos artefatos Hornes C/F. O que falta é a **selagem G1/G2** (seu parecer).

### 3.1 As duas normas-pivô — resumo verificado (texto-fonte à mão da Dra.)

**Resolução CNJ nº 615/2025** *(publicada 14/03/2025 · vigente 14/07/2025 · substitui a Res. 332/2020)* — `[VERIFICADO via web · atos.cnj.jus.br/atos/detalhar/6001]`
- Governança, classificação de risco, auditoria e transparência de IA no Judiciário.
- **Centralidade humana:** a IA **não substitui** o magistrado — é apoio; a decisão final é responsabilidade exclusiva do juiz.
- **Proteção de dados:** observar segredo de justiça e **LGPD (Lei 13.709/2018)**.
- **Classificação de risco:** baixo (funções acessórias — extração/organização) × **alto** (influencia o mérito — exige auditoria/mitigação).
- **Cadastro no Sinapses** (catálogo de sistemas de IA).
- **Vedações:** perfilamento pessoal/comportamental com finalidade decisória (trabalhista/criminal).

**Recomendação CFOAB nº 001/2024** *(aprovada 11/11/2024 · Observatório Nacional de Cibersegurança/IA/Proteção de Dados da OAB)* — `[VERIFICADO via web · oab.org.br/noticia/62711]`
- **4 pilares:** Legislação Aplicável · Confidencialidade/Privacidade · Prática Jurídica Ética · **Comunicação sobre o uso de IA**.
- **Formalização com o cliente:** o advogado deve **informar previamente** ao cliente a intenção de usar IA (→ ancora o **Pilar 3 disclosure** do ADR-016).
- **Prática ética:** **não delegar atividade privativa** da advocacia à IA; **supervisão humana** do julgamento profissional (→ ancora a **camada humana** / a selagem da senhora).
- Cautela especial no uso de IA para doutrina/jurisprudência.

> *(Resumos `[VERIFICADO via web]` — o inteiro teor oficial está nos links acima, para anexar ao parecer.)*

---

## 4. O texto de disclosure (§2.3) — para sua validação + 1 ponto a conferir

> *"Este dossiê foi produzido com auxílio de Inteligência Artificial generativa (Claude Sonnet via AWS Bedrock sa-east-1 e/ou Sabiá-4 Maritaca, ambos com dados em solo brasileiro), sob supervisão humana integral pelo MC (atividade-meio CNAE **6202-3/00**) e selagem jurídica pela Dra. Juliana Pereira de Melo (OAB-GO 38.662). Nenhum comando oculto, instrução invisível ou texto formatado para manipulação de sistemas de IA institucional foi inserido. O documento está em conformidade com a Recomendação CFOAB 001/2024 e a Resolução CNJ 615/2025."*

⚠️ **Dois pontos que o MC traz à sua atenção (Proof-First):**
1. **CNAE divergente — ✅ já corrigido na fonte:** o disclosure dizia **6202-3/00**, mas o canônico é **6201-5/01**. **Errata aplicada no ADR-016 §2.3 (09/06)** — a redação acima já está corrigida para 6201-5/01. Sinalizo para a senhora confirmar.
   *(Nota de fonte: o ADR-016 tem uma tensão interna própria — o §2.1 decide **PDF/A-2u**, mas o §1 Contexto menciona **PDF/A-3**; o MC trata A-2u como a decisão vigente. A senhora pode querer que se uniformize.)*
2. **Dependência do ADR-012:** a afirmação *"ambos com dados em solo brasileiro"* (sobre o Claude/Bedrock) **depende da resolução do ADR-012** (transferência internacional · art. 33). Enquanto o caminho ouro não selar, essa frase pode precisar de ajuste (ex.: "subprocessador internacional informado", conforme o Cenário Beta). **Cross-link com o kit ADR-012.**

---

## 5. Risco residual e a camada humana (§6 do ADR)

Mesmo com os 3 pilares, ataques sofisticados (esteganografia textual, codepoints Unicode não-ASCII) podem escapar. **Mitigação central:** **a senhora lê visualmente cada peça antes da assinatura A1 ICP-Brasil** (operação atual, mantida). **Pergunta:** isto é suficiente como salvaguarda de risco residual, ou a senhora recomenda camada técnica adicional?

---

## 6. Gates de selagem (G1–G5)

| Gate | Item | Owner | Estado |
|---|---|---|---|
| **G1** | Conformidade Resolução CNJ 615/2025 | **Dra.** | 🔴 **aguarda seu parecer** |
| **G2** | Disciplina de produção de peças (boa-fé / art. 77) | **Dra.** | 🔴 **aguarda seu parecer** |
| G3 | Viabilidade pipeline ExifTool+qpdf+Python no N8N | Igor | ⏳ pós-validação técnica |
| G4 | Declaração C.14 não fere Teste Zilda-STF | Carlos UX | ⏳ |
| G5 | Empírico N=20 peças · falso-positivo <1% | piloto | ⏳ pós-piloto |

---

## 7. Perguntas de selagem (resumo)
1. **(G1)** ADR-016 conforme à CNJ 615/2025? (§3)
2. **(G2)** Disciplina afasta o risco art. 77 §6º CPC (caso TRT-8)? (§2/§3)
3. Disclosure adequado (CFOAB 001/2024) + **CNAE corrigido 6201-5/01** + frase "solo brasileiro" sob ADR-012? (§4)
4. Camada humana suficiente p/ risco residual? (§5)

## 8. Veredito da signatária (marcar/assinar)
> ☐ **G1 VALIDO** (conforme CNJ 615/2025) · ☐ com ajustes: ______
> ☐ **G2 VALIDO** (disciplina afasta art. 77 §6º) · ☐ com ajustes: ______
> Disclosure: ☐ aprovo (com CNAE→6201-5/01) · ☐ ajustar: ______
> Camada humana: ☐ suficiente · ☐ recomendo adicional: ______
>
> _______________________________________
> Dra. Juliana Pereira de Melo — OAB-GO 38.662 · data: ___/___/2026

---

## 9. Lastro (texto-fonte à vista)
| Item | Onde |
|---|---|
| ADR-016 v1.0 (3 pilares + proibições + gates + caso TRT-8) | `03-GOVERNANCA/adrs/MC-ADR-016-ComplianceDocumental-AntiInjection-v1_0-2026-0514.md` (no kit) |
| Radar do caso gerador | `02-ARQUITETURA/inteligencia-setorial/MC-RADAR-Galileu-AntiInjection-Caso-TRT8-Parauapebas-v1_0-2026-0514.md` |
| Hook 8 (Sanitization Gate · já specado) | `02-ARQUITETURA/router-ethics/MC-SPEC-Hook8-SanitizationGate-v1_0-PROVISIONAL-2026-0606.md` |
| Disclosure no POP | POP Visual Law PARTE 1 · C.14 (Firewall OAB) |
| Cross-link transferência internacional | `…/MC-LASTRO-R3-ADR012-StackLLM-ParaDra-Melo-v1_0` (a frase "solo brasileiro") |
| Resolução CNJ 615/2025 · Recomendação CFOAB 001/2024 | **resumo verificado no §3.1** + links oficiais (`atos.cnj.jus.br/atos/detalhar/6001` · `oab.org.br/noticia/62711`) — `[VERIFICADO via web]` |

---

**FIREWALL OAB:** kit de **atividade-meio** — organiza os fatos técnicos, o caso gerador e as normas. O **enquadramento (CNJ 615/2025, CFOAB 001/2024, art. 77 CPC) e a validação G1/G2** são da **Dra. Juliana** (atividade-fim). O MC não opina sobre Direito. Nada aqui pratica advocacia.
*Kit R3 ADR-016 · Code TALÃO · 09/06/2026 · 2º condicionado (ordem da Dra.) · D > C > V · Proof-First · ∞*
