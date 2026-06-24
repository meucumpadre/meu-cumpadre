# MC-ADR-007 v3.8 — ADDENDUM ao Campo de Precificação

**Status:** ⚠️ PROVISIONAL — Ótimo Defensável Pré-Selagem (herda status v3.7)
**Data:** 07/05/2026
**Autor:** Claude Opus 4.6 × Alessandro de Souza Neves
**Substitui:** v3.7 (05/05/2026) — este documento é ADDENDUM, não reescrita. Todas as disposições do v3.7 permanecem vigentes salvo quando explicitamente alteradas abaixo.
**Selagem exige:** parecer Dra. Juliana 19/05 (incluindo Bloco M) + cronometragem Hib001 + V21 [CRONOMETRIA-PCD] + resposta SAGICAD/MDS (ADR-013)
**Dependências novas:** ADR-013 v1.0 (Convenções Operacionais IVCAD-MC) · MC-METODOLOGIA-IVCAD-Oficial-v1_0 · Caso CAD001

---

> ## ⚠️ ERRATA-A3 (2026-06-24) — SUCCESS FEE Φ₀ SUPRIMIDO · `[SELADO R3 · Dra. Juliana]`
>
> A redação original deste addendum tratava o **success fee no Φ₀ CadÚnico como "PERMITIDO ⚠️ PROVISIONAL"**, pendente de validação da Dra. Juliana (Bloco M2). **Essa validação ocorreu e superou a redação provisional:** parecer **SELADO** da Dra. Juliana Pereira de Melo (OAB-GO 38.662), de **06/06/2026 — Opção A3** — *success fee **VEDADO** também no Φ₀; preço **flat R$ 120** (R$ 60 entrada + R$ 60 na **entrega do serviço**, em 4× R$ 15), com a 2ª fração presa a **marco de serviço** (entrega do dossiê / aceite no CRAS), **nunca ao resultado / liberação do benefício**.*
>
> **Esta errata PROPAGA ao ADR-007 uma decisão R3 já selada** — não é decisão nova. O `CLAUDE.md` canônico já estava reconciliado ao A3; o ADR-007 ficou em **drift residual**. As ocorrências marcadas **[ERRATA-A3]** abaixo (§A1.2 L35/L42/L43 · §A2.1 L77 · §A2.4 L96 · §A4) leem-se conforme o A3, **não** conforme o texto original. Detalhe e lastro no **§A7** ao final.

---

## A1. Novos produtos na constelação (3 adições)

### A1.1 — Φ₀-Triagem IA CadÚnico (NOVO)

| Campo | Valor |
|-------|-------|
| ID | Φ₀-Triagem |
| Nome | Diagnóstico CadÚnico por IA |
| Valor | **R$ 0 (gratuito)** |
| Escopo | B2C — qualquer cidadão que está ou quer estar no CadÚnico |
| Entrega | IVCAD-MC calculado (radar 6 dimensões) + mapa de direitos não-acessados + pendências cadastrais detectadas + plano de ação priorizado |
| Canal | WhatsApp (Whisper + Llama 4 Scout) |
| API Humana | Não requer. Processamento 100% IA. |
| COGS estimado | R$ 5-7/caso (Whisper + LLM + infra) |
| Finalidade estratégica | Porta de entrada do funil MC. Alimenta IPH-MC. Habilita passarela Φ₀ → Φ₁ previdenciário e Φ₀ → Φ₀-Dossiê. |
| Elegibilidade | (a) Quem não está no CadÚnico (invisíveis estatísticos, est. 8-12M), (b) quem está no CadÚnico mas não recebe BF/BPC (subdetectados, est. 30-40M). Ambos os grupos. |

### A1.2 — Φ₀-Dossiê CadÚnico (NOVO)

| Campo | Valor |
|-------|-------|
| ID | Φ₀-Dossiê |
| Nome | Dossiê CadÚnico com coleta assistida |
| Valor | **R$ 120 flat** = R$ 60 entrada + R$ 60 na **entrega do serviço** (4× R$ 15) · **[ERRATA-A3: 2ª fração presa a marco de serviço, nunca ao resultado — success fee suprimido]** |
| Escopo | B2C — cidadão que precisa de organização documental + coleta de dados via API Humana para protocolar/atualizar/recorrer no CRAS |
| Entrega | Tudo do Φ₀-Triagem + dossiê documental estruturado + formulário pré-analisado + checklist de pendências corrigidas + preparação para entrevista CRAS |
| Canal | WhatsApp + API Humana coletora |
| API Humana | Sim — acesso gov.br, Bitwarden, extração CNIS dentro do CadÚnico, coleta de tentativas anteriores negadas, empacotamento. Estimativa: 40 min/caso. |
| COGS estimado | R$ 20-23/caso (API Humana ~R$15 + componente técnico ~R$7) |
| Margem estimada | R$ 97-100/caso |
| Gatilho de cobrança | R$ 60 no ato da contratação (pré-serviço) + R$ 60 na **entrega do serviço** (dossiê entregue / aceite no CRAS), em 4× R$ 15 · **[ERRATA-A3: a 2ª fração NÃO é condicionada à liberação do benefício — é marco de serviço, nunca resultado]** |
| Base legal da 2ª fração | **[ERRATA-A3]** Success fee **VEDADO** no Φ₀ (parecer SELADO Dra. Juliana, 06/06/2026, Opção A3). A 2ª fração de R$ 60 é **contraprestação por marco de serviço** (entrega do dossiê), **não** honorário de êxito. `[SELADO R3]` |
| Parcelamento | Lei 14.181/2021 (Superendividamento) aplicável ao R$60 entrada em até 4× R$15 se necessário. |

### A1.3 — Φ₄ Guardião CadÚnico (EXTENSÃO do Φ₄ existente)

O Φ₄ Guardião ganha um regime escalonado específico para famílias CadÚnico, com as seguintes alterações em relação ao v3.7:

**Princípio novo:** β_rms (renda mensal de sustento) **inclui o benefício recebido** (BF, BPC) para fins de escalonamento do Φ₄. Mesma régua D > C > V aplicada no previdenciário.

**Tabela escalonada Φ₄ Guardião CadÚnico:**

| β_rms per capita (renda total, BF incluso) | Φ₄/mês |
|---------------------------------------------|---------|
| Sem renda detectável (regime D > C > V) | R$ 0 |
| Até R$ 218 per capita (extrema pobreza) | R$ 3 |
| Até R$ 660 per capita (pobreza / ½ SM) | R$ 5 |
| Até 1 SM per capita (R$ 1.518) | R$ 9,95 |
| Acima de 1 SM per capita | escalonamento progressivo até R$ 19 (cap Standard) |

**Caso CAD001 validação:** CAD001 — família 2 pessoas, β_rms = R$ 1.300 (R$ 600 trabalho + R$ 650 BF + R$ 50 outras) ÷ 2 = R$ 650 per capita → faixa "pobreza / ½ SM" → **Φ₄ = R$ 5/mês**. Cabe sem violar D > C > V.

**Faixa "acima de 1 SM":** curva exata pendente — a ser definida entre R$ 9,95 e R$ 19 com progressão linear ou por faixa. ⚠️ Gate: revisão ADR-007 v4.0.

---

## A2. Alterações em disposições existentes do v3.7

### A2.1 — Tabela de referência rápida (ATUALIZADA)

Adicionar ao final da tabela do v3.7:

| ID | Nome | Valor | Escopo |
|----|------|-------|--------|
| Φ₀-Triagem | Diagnóstico CadÚnico por IA | R$ 0 (gratuito) | B2C CadÚnico |
| Φ₀-Dossiê | Dossiê CadÚnico com coleta assistida | **R$ 120 flat** (R$ 60 + R$ 60 na entrega, 4× R$ 15) **[ERRATA-A3: sem success fee]** | B2C CadÚnico |
| Φ₄-CadÚnico | Guardião CadÚnico (escalonado) | R$ 0 a R$ 19/mês por β_rms per capita | B2C pós-Φ₀ |

### A2.2 — Hook 1b do Router-Ethics 11.0 (REFATORADO)

**Antes (v3.7):** Hook 1b consulta IVCAD via Wiki SAGI/MDS por NIS → impossível (IVCAD não é acessível ao cidadão nem ao MC).

**Agora (v3.8):** Hook 1b calcula IVCAD-MC localmente sobre formulário CadÚnico consentido pelo cidadão, utilizando fórmula oficial MDS com convenções declaradas no ADR-013. Sub-rotas do Hook 1b permanecem 3 (NIS presente / NIS ausente com CEP / NIS ausente sem CEP).

### A2.3 — IPH-MC fórmula (CORRIGIDA)

**Antes (v3.7):** IPH-MC = IVS(IPEA) × IVCAD(MDS/NIS)

**Agora (v3.8):** IPH-MC = IVS(IPEA, via CEP→município) × **IVCAD-MC** (calculado localmente, ADR-013)

### A2.4 — Princípios invioláveis (ADIÇÃO)

Adicionar aos princípios do v3.7:

- **[ERRATA-A3] Success fee VEDADO no Φ₀ CadÚnico** — parecer SELADO Dra. Juliana (06/06/2026, Opção A3) **suprimiu** o componente condicionado: preço **flat R$ 120**, 2ª fração presa a **marco de serviço** (entrega do dossiê / aceite no CRAS), **nunca ao resultado**. *(Redação original "Success fee PERMITIDO ⚠️ PROVISIONAL" superada — ver banner ERRATA-A3 no topo e §A7.)* A vedação ao Φ₁ previdenciário permanece **integral e inalterada**. `[SELADO R3 · Dra. Juliana]`
- **β_rms inclui benefício recebido** — BF, BPC e outras transferências entram no cálculo da renda para escalonamento Φ₄. Renda declarada ao CadÚnico NÃO é referência para pricing MC (ver §A3 sobre posicionamento).
- **Φ₀ e Φ₁ são produtos distintos com regras distintas** — o que vale no CadÚnico não contamina o previdenciário, e vice-versa. O MC mantém firewall entre verticais.

### A2.5 — Cláusulas de pivô (ADIÇÃO)

Adicionar ao v3.7 §E2:

- **Gate Φ₀-COGS:** após 30 casos Φ₀-Dossiê, revisar COGS real vs estimado (R$ 20-23). Se COGS real > R$ 40, reavaliar modelo de receita.
- **Gate Φ₀-Conversão:** após 50 casos Φ₀-Triagem (gratuita), medir taxa de conversão para Φ₀-Dossiê e para Φ₁. Se conversão Φ₀→Φ₁ > 15%, o Φ₀ se paga como aquisição mesmo a custo zero.

---

## A3. Posicionamento sobre renda declarada vs renda real

**Decisão arquitetural (07/05/2026):** o MC NÃO pergunta "qual é tua renda real". O MC NÃO induz declaração de renda. O MC entrega informação que o Estado já tem mas não devolve ao cidadão (simetria informacional).

Para fins de pricing MC (escalonamento Φ₄), a referência é o **dado oficial do comprovante CadÚnico** (faixa de renda per capita): "Sem renda", "Até R$ 105", "Até R$ 218", "Até meio salário mínimo", "Acima de meio salário mínimo" — conforme consta no comprovante que o cidadão já possui.

O MC **adiciona** ao cálculo de β_rms o valor do benefício recebido (BF, BPC), porque esse valor é público e verificável no extrato de benefícios do app Meu CadÚnico.

**Fundamentação da decisão:** preservar a marca MC distante de qualquer interpretação de cumplicidade com declaração de renda fictícia. O MC opera sobre dado oficial, adiciona dado oficial, e cobra com base no resultado oficial. Sem julgamento moral. Sem "renda real". Sem risco reputacional.

---

## A4. Novas proibições (adicionar à lista do v3.7 §11)

❌ Cobrar Φ₁ (R$ 2.200) por serviço que é escopo Φ₀ CadÚnico (R$ 120)
❌ Aplicar success fee no Φ₁ previdenciário (vedação mantida integralmente — REsp 2.079.440/RO · art. 22 Lei 8.906/94) · **[ERRATA-A3: o Φ₀ TAMBÉM não tem success fee desde o A3 — não há mais "analogia ao Φ₀" a invocar]**
❌ **[ERRATA-A3]** Aplicar success fee / componente condicionado ao **resultado** no Φ₀ CadÚnico (vedado pelo parecer A3 — a 2ª fração só pode prender-se a marco de serviço)
❌ Perguntar ao cidadão "qual é tua renda real" ou induzir declaração divergente do CadÚnico
❌ Apresentar IVCAD-MC como "diagnóstico social" (competência de assistente social, Lei 8.662/1993)
❌ Comunicar IVCAD-MC como substituto do IVCAD oficial do MDS
❌ Citar Φ₀-Dossiê como "gratuito" (a triagem IA é gratuita; o dossiê é R$ 120)

---

## A5. Documentação de suporte (novos canônicos)

| Documento | Versão | Status |
|-----------|--------|--------|
| MC-ADR-013-ConvencoesOperacionais-IVCAD-MC | v1.0 | ⚠️ PROVISIONAL |
| MC-METODOLOGIA-IVCAD-Oficial-EngenhariaReversa | v1.0 | ✅ Sprint B1 |
| MC-MAPEAMENTO-IVCAD-Indicador-Campo | v1.0 | ✅ Sprint B1.5 |
| MC-INVENTARIO-CadUnico | v1.0 | ✅ Sprint A |
| MC-PAUTA-Juliana-BlocoM-CadUnico-IVCAD | v1.9 | ⚠️ Adendo Pauta |

---

## A6. Cronograma atualizado (impacto da v3.8)

```
2026-05-07 (HOJE) ────────────────────────────────────► 2026-06-30

│
├── 07/05  E-mail SAGICAD/MDS (7 perguntas) ★ DISPARAR HOJE ★
│          ADR-013 v1.0 gravado · ADR-007 v3.8 addendum · Bloco M redigido
│
├── 12/05  Pacote 15 documentos entregue à Dra. Juliana (14 originais + ADR-013)
│          Grimório v2.1 §LC142 · Calculadora Φ₃ · Hib001 cronometragem
│
├── 14/05  RouterEthics v3.1 — nós PcD-LC142 + Hook 1b IVCAD-MC refatorado
│
├── 19/05  ★ JULIANA — 54 perguntas / 12 blocos (A-M) / 6h-6h30 ★
│          ├── Blocos A-L (v1.8 original)
│          └── Bloco M (CadÚnico/IVCAD-MC/Φ₀) — 7 perguntas novas
│
├── 02/06  V21 definitivo · Calibração Φ₁-PcD · Resposta SAGICAD esperada
│          ADR-013 v1.1 (se SAGICAD respondeu)
│
├── Jun    JUCEG constituição · Alteração contratual TA
│
└── 30/06  ADR-007 v4.0 selagem definitiva (inclui Φ₀ + Φ₄ CadÚnico)
           FINEP Tecnova IV submissão (jul-ago)
```

---

## A7. ERRATA-A3 — registro de reconciliação (2026-06-24)

| Locus | Antes (original v3.8, PROVISIONAL) | Depois (A3 selado) |
|---|---|---|
| §A1.2 L35 | "R$ 60 sucesso ... R$ 120 total" | flat R$ 120 · 2ª fração a marco de serviço |
| §A1.2 L42 | "condicionado à liberação do benefício (success fee)" | "na entrega do serviço" · nunca ao resultado |
| §A1.2 L43 | "Base legal do success fee \| Permitido ⚠️ PROVISIONAL" | success fee **VEDADO** · 2ª fração = contraprestação por marco `[SELADO R3]` |
| §A2.1 L77 | "R$ 60 + R$ 60 (success)" | flat R$ 120, sem success fee |
| §A2.4 L96 | "Success fee **PERMITIDO** no Φ₀ ⚠️ PROVISIONAL" | success fee **VEDADO** `[SELADO R3]` |
| §A4 | "por analogia ao Φ₀" + (sem proibição de condicionar Φ₀ ao resultado) | analogia moot · + nova proibição: condicionar Φ₀ ao resultado |

**Motivo.** Parecer **SELADO** da Dra. Juliana Pereira de Melo (OAB-GO 38.662), de **06/06/2026 — Opção A3**: success fee suprimido no Φ₀, preço **flat R$ 120**, com a 2ª fração presa a **marco de serviço** (entrega do dossiê / aceite no CRAS), **nunca ao resultado**. A validação que a redação original deste addendum aguardava (Bloco M2) **ocorreu** — logo, a cláusula "PROVISIONAL — validação Juliana" está **resolvida**, não mais pendente.

**Natureza desta errata.** É **propagação de uma decisão R3 já selada**, não deliberação nova. O `CLAUDE.md` canônico já refletia o A3 (success fee Φ₀ VEDADO); o ADR-007 v3.8 permanecia com a redação anterior — **drift documental residual** detectado em 2026-06-24. Esta errata reconcilia o ADR-007 ao estado já selado. Princípio #4 (Errata Absorve, Não Inventa): o texto original é preservado no histórico git; o diff é a trilha de auditoria.

**Lastro (Proof-First).** `03-GOVERNANCA/instancias-ia/juliana-parecer/pareceres-selados-dra-2026-0606/MC-CONTRATO-Phi0-v0_2-A3-RATIFICADA-PARECERISTA-2026-0607.docx` · `…/MC-CONTRATO-Phi0-MINUTA-v0_2-A3-2026-0606.docx`. A minuta Φ₀ **v0.2** supersede a v0.1. A vedação a success fee no **Φ₁ previdenciário permanece integral e inalterada** (REsp 2.079.440/RO; art. 22 Lei 8.906/94).

**Gate.** Revisão adversarial Sister Anciã (Code) antes do PR · selo final pelo Founder. O gate R3 de mérito já está satisfeito pelo próprio parecer A3 (esta errata não cria questão jurídica nova). Pendência separada (não tratada aqui): a Minuta Φ₀ em `03-GOVERNANCA/contratos/` ainda é a **v0.1 PROVISIONAL** — atualizar para refletir a v0.2-A3 é tarefa à parte.

---

**MC-ADR-007-CampoPrecificacao-v3_8-ADDENDUM-2026-0507.md**
**Addendum ao canônico MC-ADR-007-CampoPrecificacao-v3_7-2026-0505.md**
**∞**
