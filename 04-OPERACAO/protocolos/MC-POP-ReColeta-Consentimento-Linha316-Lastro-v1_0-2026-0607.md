---
tipo: POP-KIT-LASTRO (atividade-meio · execução de condicionante selada)
codigo: MC-POP-ReColeta-Consentimento-Linha316-Lastro
versao: v1.0
data: 2026-06-07
origem: condicionante SELADA da Dra. Juliana (Despacho-Saneamento-ADR009b-OpcaoC v1.3 §5 · 06/06/2026)
gate: 🔴 BLOQUEANTE DE PRODUÇÃO — trava qualquer nova custódia de credencial gov.br / hand-off até cumprida
responsavel_execucao: Founder (Alessandro) · operação (Beto sob orientação) — NÃO é parecer; é execução
firewall_oab: este kit é atividade-MEIO (organiza e entrega o lastro à mão da operação). A tese jurídica é da Dra. (atividade-fim), citada com fonte à vista.
hierarquia: Dignidade > Compliance > Viabilidade
---

# 🗂️ KIT-LASTRO — Re-coleta do Consentimento (linha 316 · ADR-009b)

> **Para que serve este kit.** A Dra. Juliana selou (Opção C · §5) uma **pré-condição BLOQUEANTE**: enquanto o consentimento de custódia não for **reescrito E re-colhido** dos titulares antigos, **trava-se qualquer nova custódia/hand-off**. Este documento entrega à operação **tudo o que ela precisa, com o texto-fonte à vista** — fundamento, redação integral a coletar, universo de titulares, passo-a-passo e o que registrar. **Zero garimpo do lado da operação.**

---

## 0. Estado atual (o que já está feito × o que falta)

| Item | Estado | Responsável |
|---|---|---|
| Reescrever a redação do consentimento (texto lapidado §5) | ✅ **FEITO** — texto integral no ADR-009b (linhas 320-360) e na §3 deste kit | MC (Dra. lapidou) |
| Despersonalizar a linha 316 (tirar nome/CPF reais do artefato) | ✅ **FEITO no working tree** — JSON usa `"[NOME DO TITULAR]"` + CPF em hash (PRs #47/#48) | MC |
| Remover o nome real do **histórico git** | ⏳ **PENDENTE** — `git filter-repo` (tarefa do Founder; repo privado = urgência baixa) | Founder |
| **RE-COLETA do novo consentimento dos titulares antigos** | 🔴 **PENDENTE — é o objeto deste kit** | Founder / operação |
| RIPD da custódia de credencial gov.br | 🟡 **v0.1 PROVISIONAL produzido** → `03-GOVERNANCA/compliance-lgpd/MC-RIPD-Custodia-Dossie-Credenciais-v0_1-PROVISIONAL-2026-0606.md` (finalizar/selar) | MC + Founder |

> **Catraca:** a custódia/hand-off só **destrava** quando ✅ re-coleta concluída **E** ✅ RIPD finalizado (despacho §5 + §6.1).

---

## 1. Por que é bloqueante (fundamento — texto-fonte à vista)

**Despacho-Saneamento-ADR009b-OpcaoC v1.3 SELADO · §5 (citação literal da Dra.):**

> *"Bloqueante de produção. Enquanto o consentimento não for reescrito E re-colhido, recomenda-se travar qualquer nova custódia de credencial / hand-off, em qualquer das opções. Fundamento: o consentimento que cita 'três opções' inexistentes é viciado (**LGPD art. 8º, §3º**) e nulo por informação defeituosa (**art. 9º, §1º**), comprometendo a licitude da custódia (dado sensível de autenticação — **art. 11, II 'g' c/c art. 7º, V**)."*

**Tradução operacional (atividade-meio):** o consentimento antigo prometia ao cidadão "três opções de advogada" no marketplace. Sob a **Opção C**, durante a Crisálida **isso não existe** (só a Dra. Melo é apresentada). Um consentimento que descreve uma realidade que não ocorre é **viciado** — logo, qualquer custódia apoiada nele é juridicamente frágil. Por isso **re-coleta-se** sob a redação nova, que descreve a realidade Opção C com fidelidade.

---

## 2. Quem precisa re-consentir (universo de titulares)

**Despacho §5 (citação literal):**

> *"Re-coleta: todo titular cujo consentimento foi obtido sob a premissa de 'três opções' deve manifestar novo consentimento sob a redação saneada antes da continuidade da custódia."*

**Universo concreto:** **todo cidadão** de quem o MC já tenha (ou venha a continuar) custodiando credencial gov.br / dossiê **cujo aceite original mencionava "marketplace de 3 advogadas" ou nomes de parceiras hoje reservadas**. Na fase Crisálida (piloto N=150 · pré-revenue), o conjunto é pequeno e rastreável — **listar caso-a-caso** os titulares com custódia ativa antes de retomar qualquer movimentação.

> ⚠️ **Não há re-coleta "em massa anônima":** cada titular manifesta o novo aceite **individualmente** (áudio + ZapSign), com registro próprio (ver §5).

---

## 3. O QUE coletar — redação integral a apresentar (lapidada pela Dra. · §5)

**Texto a ser lido/apresentado ao cidadão e por ele aceito (sem números de artigo no texto que a cidadã lê — eixo Zilda):**

> *"Eu autorizo o Meu Cumpadre a organizar meus documentos. Com minha autorização e só enquanto durar o serviço, o Meu Cumpadre pode custodiar com segurança meu acesso ao gov.br. Isso é só para dar entrada ou atualizar meu pedido no CRAS. Eu entendo que:*
> *(a) **O dossiê é meu.** Posso levar ele para qualquer advogado(a) de minha livre escolha.*
> *(b) **O Meu Cumpadre não é advogado.** Não decide meu benefício. Não recebe comissão por indicar alguém.*
> *(c) **Se eu pedir**, o Meu Cumpadre pode me apresentar a parceira Dra. Juliana Melo (OAB-GO 38.662). Eu não sou obrigado a aceitar.*
> *(d) Posso cancelar esta autorização a qualquer momento, de graça, e pedir para apagar meus dados. Esta autorização vale só para o que está escrito aqui."*

**Garantias jurídicas que essa redação satisfaz** (despacho §5 — para o registro, não para ler à cidadã): finalidade específica (LGPD art. 8º §4º), informação clara/adequada (art. 9º), direitos de revogação e eliminação (art. 18, VI e IX).

### 3.1 ⏳ Validade temporal do item (c) — regra que muda na reabertura

**Despacho §5 — texto exato (sem edição):**

> *"A indicação nominal da advogada parceira é compatível com a exclusividade vigente (Opção C, até 31/12/2026). Reaberto o marketplace (jan/2027), o item (c) deve voltar a ser genérico ("advogada(s) parceira(s)") ou rotativo, sob pena de tender a direcionamento (Estatuto art. 34, IV; Prov. CFOAB 205/2021)."*

| Período | Redação do item (c) |
|---|---|
| **Crisálida — até 31/12/2026** (exclusividade) | Nominal: "a parceira Dra. Juliana Melo (OAB-GO 38.662)" ✅ permitido |
| **A partir de 01/01/2027** (marketplace ampliado reaberto) | Genérico/rotativo: "advogada(s) parceira(s) do marketplace" — **trocar o item (c)** para não nominar uma só |

> *Borda de data:* o **§5** do despacho já usa **"até 31/12/2026"** e **"jan/2027"** (acima); o corpo (§1/§4) refere o período como **"dez/2026"**. O **Founder fixou a borda** em **fim da exclusividade 31/12/2026 ⇒ reabertura 01/01/2027** (decisão de 06/06/2026) — coincide com o §5. Adota-se a borda do Founder.

---

## 4. Passo-a-passo da re-coleta (operação)

1. **Listar** os titulares com custódia ativa cujo aceite original citava "três opções" / nomes de parceiras (universo §2).
2. **Travar** qualquer nova custódia/hand-off desses casos até o novo aceite (gate §0).
3. **Contatar** cada titular (canal habitual — WhatsApp/voz), explicar em linguagem simples que a forma de apresentar a parceira mudou e que precisamos do aceite atualizado.
4. **Apresentar** a redação da §3 (item (c) **nominal** enquanto Crisálida).
5. **Colher** o novo consentimento: **áudio** (hash) **+ assinatura ZapSign** (ADR-014 — Autentique vedada). Nunca senha gov.br no ClickUp (ADR-009a).
6. **Registrar** os campos da §5 no TTA/log imutável.
7. **Só então destravar** a custódia/hand-off daquele titular.
8. Quando o RIPD (§0) estiver finalizado, registrar o desbloqueio geral da vertical de custódia.

---

## 5. O que registrar por titular (para o TTA / log imutável)

- `cidadao_nome_consentido`: nome do titular (no SoR soberano · **nunca** em repo/ClickUp)
- `cidadao_cpf_hash`: `sha256:...` (CPF nunca em claro)
- `versao_consentimento`: **"Opção C · §5 · v1.3"** (distingue do aceite antigo viciado)
- `item_c_modo`: **"nominal-Melo"** (Crisálida) → migra para **"generico"** em 01/01/2027
- `audio_consentimento_hash`: `sha256:...`
- `assinatura_zapsign_id`: `...`
- `timestamp_rfc3161`: carimbo de tempo (Lei 14.063/2020 · MP 2.200-2/2001)
- `motivo_recoleta`: **"saneamento Opção C — consentimento antigo viciado (despacho §5)"**

---

## 6. Mapa de fontes (texto-fonte à vista — onde conferir cada coisa)

| Item | Fonte (caminho) | Onde |
|---|---|---|
| Pré-condição bloqueante + fundamento LGPD | `…/pareceres-selados-dra-2026-0606/MC-DESPACHO-Saneamento-ADR009b-OpcaoC-v1_3-RATIFICADO-SELADO-2026-0606.docx` | §5 (e §0 PII · §6 RIPD) |
| Redação lapidada integral + validade item (c) | `03-GOVERNANCA/adrs/MC-ADR-009b-TresEstados-Custodia-Dossie-v1_0-2026-0417.md` | linhas 320-360 (bloco "Consentimento reescrito") |
| JSON de consentimento (já despersonalizado) | mesmo ADR-009b | linhas 300-318 |
| RIPD da custódia (a finalizar) | `03-GOVERNANCA/compliance-lgpd/MC-RIPD-Custodia-Dossie-Credenciais-v0_1-PROVISIONAL-2026-0606.md` | doc inteiro |
| Custódia: senha nunca no ClickUp, sem retenção como cobrança | `…/adrs/MC-ADR-009a-Custodia_Credenciais_GovBr-v2_0-2026-0425.md` | §6.3 condicionante |
| Status consolidado das condicionantes | `…/juliana-parecer/pareceres-selados-dra-2026-0606/_INDICE-Pareceres-Selados-Dra-2026-0606.md` | linha 65 (BLOQUEANTE) |

---

## 7. Definição de "pronto" (quando este bloqueante encerra)

- [ ] Lista de titulares antigos sob "três opções" levantada
- [ ] Novo consentimento (redação §3) colhido de **cada** titular (áudio + ZapSign + log)
- [ ] Nome real removido também do **histórico git** (Founder · `filter-repo`)
- [ ] **RIPD** da custódia de credencial finalizado/selado
- [ ] Registro de **desbloqueio** da vertical de custódia no log

> Cumpridos os 5, a catraca do §5 abre e a custódia/hand-off da Opção C opera em conformidade.

---

**FIREWALL OAB:** este kit é **atividade-meio** — organiza e entrega o lastro. A tese e a redação do consentimento são da **Dra. Juliana** (atividade-fim), citadas com fonte à vista. Nada aqui emite parecer.
*Kit-Lastro · Code TALÃO · 07/06/2026 · executa condicionante SELADA §5 · D > C > V · Proof-First · ∞*
