---
tipo: KIT-LASTRO R3 (parecer ADR-012 · mesa da parecerista)
codigo: MC-LASTRO-R3-ADR012-StackLLM-ParaDra-Melo
versao: v1.0
data: 2026-06-09
para: Dra. Juliana Pereira de Melo — OAB-GO 38.662 (parecerista externa independente · atividade-fim)
de: MC — Code TALÃO (atividade-meio · organiza o lastro; a tese é da Dra.)
objeto: parecer sobre ADR-012 (Stack LLM) — transferência internacional (LGPD art. 33) de dado sensível Art. 11 (CID) ao processar via Claude
prioridade: ALTA — toca DADO REAL no piloto (Cenário Beta C5a em operação)
firewall_oab: o enquadramento jurídico (art. 33/11, SCCs, H1-H4) é da Dra. O MC organiza os fatos técnicos. Nada aqui pratica advocacia.
hierarquia: Dignidade > Compliance > Viabilidade
---

# 🗂️ Kit R3 — ADR-012 Stack LLM (transferência internacional · art. 33)

> **Dra., esta é a mesa do 1º condicionado da ordem que a senhora sugeriu** (ADR-012 → ADR-016 → Φ₁ → Ψ₁ v1.4). É o prioritário porque **toca dado real agora**: no piloto, o dado sensível Art. 11 (CID) do hipervulnerável já é processado via Claude no **Cenário Beta** (caminho C5a). A pergunta nuclear é a que a senhora cravou: **o caminho mantém o dado no Brasil, ou aciona o art. 33 (transferência internacional)? e a base está coberta?** Tudo à vista abaixo. *(O texto-fonte é a ADR-012 v1.2; segue no kit.)*

---

## 1. Matéria e a pergunta jurídica

**Matéria:** tratamento de **dado pessoal sensível** (saúde — CID/laudos · LGPD **art. 5º II**, **art. 11**) de cidadão **hipervulnerável**, processado por **LLM** na escalada de casos complexos (CP-7 · ~5-10% do volume). Quando o modelo (Claude) roda **fora do Brasil**, há **transferência internacional** (LGPD **art. 33**).

**Perguntas (a senhora decide):**
1. Cada um dos 3 caminhos candidatos **mantém o dado no Brasil** (sem art. 33) ou **configura transferência internacional**? Em qual base do art. 33 cada um se sustenta?
2. A **Resolução CD/ANPD nº 19/2024** (cláusulas-padrão contratuais brasileiras · Anexo II) está **incorporada** no contrato de cada fornecedor — ou só **referenciada**? Basta referenciar?
3. As **4 hipóteses H1–H4** sobre a contradição Privacy Policy §12 × DPA da Anthropic — qual prevalece?
4. O **Cenário Beta provisional** (C5a Bedrock, **em operação com dado real**) é **juridicamente adequado** para a Crisálida, ou exige ajuste imediato?

---

## 2. O que JÁ está decidido (não pende de parecer) — arquitetura de camadas

A arquitetura multi-modelo por finalidade está pacificada (não é objeto do parecer):
- **~70-75%** → **GAIA-4B self-host** (Mac Mini · **zero transferência LGPD**) — triagem/ingestão.
- **~20-25%** → **Sabiá-4 Maritaca** (BR) — redação (gate DPA Maritaca aberto).
- **~5-10%** → **Claude** — escalada CP-7 (**aqui mora o art. 33**).
- **<1%** → Llama fallback.

> **Mitigação de origem (D>C>V):** o dado Art. 11 é processado **preferencialmente em GAIA self-host** (zero transferência) sempre que a tarefa permite. A transferência só ocorre na fração que escala ao Claude.

---

## 3. Os 3 caminhos da camada Claude — o objeto do art. 33

| Rank | Caminho | Onde o dado é processado | Art. 33? | Base candidata |
|---|---|---|---|---|
| 🥇 | **C9 — Vertex AI Claude `southamerica-east1`** (São Paulo) + SCCs `br-c2p` | **no Brasil** (residência técnica confirmada · MB-054) | possivelmente **NÃO** (dado fica em BR) | se houver subprocessamento externo, SCCs ANPD 19/2024 via CDPA (a confirmar G-Sales-1) |
| 🥈 | **C1 — API Anthropic direta** + DPA §12 | **EUA** (transferência) | **SIM** | DPA — **contradição:** Privacy Policy §12 cita SCCs p/ Brasil, mas o DPA incorpora **só SCCs UE 2021/914** → H1–H4 |
| 🥉 | **C5a — Bedrock `sa-east-1` global endpoint** + Brazilian SCCs Addendum | `sa-east-1`, mas o **global endpoint roteia** Claude 4.x p/ fora | **SIM** (roteamento global) | Brazilian SCCs Addendum (existe? G-Sales-3) · entidade BR "A100 ROW" |
| ❌ | C5b Inference Profile Americas | — | — | **não existe** (rejeitado empiricamente) |
| ❌ | C8 Claude Platform on AWS | dados "outside AWS boundary" | — | rebaixado por design |

**Pivô comum:** **Resolução CD/ANPD nº 19/2024** (cláusulas-padrão BR). O MC trabalha com a **hipótese** de que o Google (br-c2p) **incorpora** a 19/2024 — mas isso **ainda é pergunta aberta** (G-Sales-1 ⏳: *"br-c2p incorpora o Anexo II automaticamente?"*), não fato selado; a Anthropic e a AWS, ao que se sabe, **referenciam/linkam**. A diferença que a senhora avalia: **incorporar × apenas referenciar** — e se "referenciar" basta para o art. 33.

---

## 4. As 4 hipóteses H1–H4 (contradição Anthropic §12 × DPA) — **etapa (ii), reservável p/ 10/10/2026**

> 🕐 **Separação de urgência:** o que é **pra agora** é o **Cenário Beta** com dado real (§5 — travar ou não a escalada Claude). As **H1–H4 abaixo são a selagem jurídica FINAL**, que o ADR-012 marca para o **parecer de 10/10/2026** (etapa (ii)) e que **depende das 3 respostas Sales** ainda pendentes. **A senhora pode reservá-las** — não precisam de veredito hoje.

A Privacy Policy §12 da Anthropic **menciona** SCCs para transferências do Brasil; o **DPA** incorpora **apenas** as SCCs da UE (2021/914). Quatro leituras possíveis — **a senhora decide qual prevalece**:
- **H1** — §12 é compromisso vinculante → SCCs-BR já valem (transferência coberta).
- **H2** — §12 é informativo; só o DPA vincula → sem SCCs-BR, transferência **descoberta**.
- **H3** — SCCs-UE bastam por equivalência/adequação → transferência coberta por analogia.
- **H4** — exige addendum específico (Anexo II 19/2024) → pendente até a Anthropic fornecer.
> *(O MC não escolhe entre H1–H4 — é tese jurídica, território da senhora.)*

---

## 5. ⚠️ O que toca dado real AGORA — Cenário Beta (provisional · C5a)

Enquanto os 3 gates Sales não respondem, o piloto (12-15 casos) processa a escalada Claude via **C5a Bedrock sa-east-1**, sob **Risco Provisional Documentado** (Princípio #18), com estas mitigações:
- cláusulas Φ₁/Ψ₁ **informando subprocessador internacional**;
- **opt-in Zilda-STF** (consentimento claro do titular);
- **DPIA/RIPD** específico;
- base legal **art. 11 II "d"** (exercício regular de direitos em processo);
- risco **assumido pessoalmente pelo Founder**, temporário, documentado.

**Pergunta-chave (§1.4):** isto é **adequado** para rodar com dado real de hipervulnerável **agora**, ou a senhora recomenda **travar a escalada Claude** (manter só GAIA self-host) **até** o caminho ouro selar? *(D>C>V: dignidade do acesso × proteção do dado.)*

---

## 6. Dependência externa (por que o parecer pode ser em 2 etapas)

A seleção **definitiva** do caminho ouro (C9/C1/C5a) depende de **3 respostas Contact Sales** (Google/Anthropic/AWS sobre incorporação da 19/2024), **ainda AGUARDANDO**. Por isso o parecer pode sair em duas etapas:
- **(i) AGORA — parecer do framework + do Cenário Beta provisional** (o que toca dado real): a senhora valida/ajusta a operação atual e o enquadramento art. 33/11.
- **(ii) PÓS-SALES — seleção do caminho ouro** (H1–H4 + qual fornecedor), quando as respostas chegarem.
> A senhora disse: *"produzo a minuta quando o kit chega."* Este kit entrega a etapa (i) já; a (ii) o MC complementa quando as 3 respostas Sales chegarem.

---

## 7. Perguntas de selagem (resumo)
1. Cada caminho: **art. 33 sim/não** + base. (§3)
2. **19/2024 incorporada × referenciada** — basta linkar? (§3)
3. **H1–H4** — qual prevalece? (§4)
4. **Cenário Beta** com dado real — adequado **agora** ou travar a escalada Claude? (§5)
5. Recomendação de **caminho ouro provisório** enquanto Sales não responde?

## 8. Veredito da signatária (marcar/assinar)
> ☐ **Cenário Beta ADEQUADO** para a Crisálida (com as mitigações) · ☐ **ADEQUADO COM AJUSTES**: ______ · ☐ **TRAVAR a escalada Claude** até o caminho ouro selar (motivo: ______)
> Caminho ouro provisório recomendado: ☐ C9 · ☐ C1 · ☐ C5a · ☐ aguardar Sales
> H1–H4 (preliminar, sujeito às respostas Sales): ☐ H__ · ☐ reservo p/ etapa (ii)
>
> _______________________________________
> Dra. Juliana Pereira de Melo — OAB-GO 38.662 · data: ___/___/2026

---

## 9. Lastro (texto-fonte à vista)
| Item | Onde |
|---|---|
| ADR-012 v1.2 (arquitetura + ranking + gates + H1-H4 + Cenário Beta) | `03-GOVERNANCA/adrs/MC-ADR-012-StackLLM-MultiModelo-v1_2-PROVISIONAL-REFINADO-2026-0528.md` (no kit) |
| Custódia/Três Estados (onde o dado vive) | `03-GOVERNANCA/adrs/MC-ADR-009b-TresEstados-Custodia-Dossie-v1_0-2026-0417.md` (SANEADO · Opção C) |
| Governança LGPD selada (telemetria/export · método) | `…/pareceres-selados-dra-2026-0606/MC-PARECER-R3-BancadaGovernanca-LGPD-ANPD-v1_1-RATIFICADO-SELADO-2026-0608.docx` + RIPDs em `03-GOVERNANCA/compliance-lgpd/` |
| Resolução CD/ANPD 19/2024 (Anexo II · SCCs-BR) | norma-pivô — **[conferir redação oficial no DOU/ANPD]** (o MC traz o ponteiro; a redação oficial é insumo a anexar) |

---

**FIREWALL OAB:** kit de **atividade-meio** — organiza os fatos técnicos e a norma-pivô. O **enquadramento (art. 33/11), as hipóteses H1–H4 e a validação** são da **Dra. Juliana** (atividade-fim). O MC não opina sobre Direito. Nada aqui pratica advocacia.
*Kit R3 ADR-012 · Code TALÃO · 09/06/2026 · 1º condicionado (ordem da Dra.) · prioridade: dado real · D > C > V · Proof-First · ∞*
