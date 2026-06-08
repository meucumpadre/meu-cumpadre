---
tipo: SPEC (engenharia · atividade-meio)
codigo: MC-SPEC-CamadaAnonimizacao-ExportDossie
versao: v0.1 PROVISIONAL
data: 2026-06-08
para: Igor (backend NestJS · autoridade técnica) — implementação · Dra. Juliana — validação R3
objeto: camada de anonimização/de-identificação/minimização do export de dossiê — condicionante (2) do Parecer R3 Bancada Governança LGPD/ANPD v1.1 SELADO
lastro: Parecer #9 §3-Rec#3 / §5-Q2 (SELADO) · RIPD Export v0.1 §2.3/§2.4 · ADR-009b (Três Estados/TTA) · LGPD art. 5º II, 6º III, 11 II "d", 12
firewall_oab: spec de engenharia (atividade-meio). NÃO é parecer. A admissibilidade jurídica é da Dra. (Parecer #9).
hierarquia: Dignidade > Compliance > Viabilidade
---

# 🔒 SPEC — Camada de Anonimização do Export de Dossiê

> **Para que serve.** Destravar a **condicionante (2)** do Parecer #9: *"Rec #3 com anonimização/minimização antes de B2B; sensível (CID) vedado a B2B genérico; não-anonimizado só à advogada parceira do próprio cidadão (art. 11 II 'd')."* É a **única condicionante que exige engenharia nova** — as outras (DPO, RIPDs, papel, trava-metadado) são documentais. *Sobre dado real, o export B2B só liga quando esta camada estiver implementada e validada; **fixture sintético é livre**.*

## 1. Os três modos de export (a regra que o Parecer #9 selou)

| Modo | Destino | Base legal | O que sai |
|---|---|---|---|
| **A — ANPD** | prestação de contas / accountability | art. 7º II + 6º X | trilha **minimizada** (preferir hash/metadado a conteúdo) + SHA-256 |
| **B1 — advogada do próprio cidadão** | hand-off S2→S3 do caso daquele cidadão | **art. 11 II "d"** (exercício regular de direitos) | dossiê **completo, NÃO anonimizado**, via **TTA assinado** (ADR-009b) — só para ESTE caso/advogada |
| **B2 — B2B genérico / método / estatística** | terceiro comercial, treino, métrica | **art. 12** (anonimizado deixa de ser dado pessoal) | dossiê **ANONIMIZADO**, **sensível (CID) SUPRIMIDO**, campos minimizados |

> 🔴 **Gate duro:** o **Modo B2 NUNCA** carrega dado sensível (CID/laudos) nem identificador direto. O **sensível só transita no Modo B1** (base art. 11 II "d"). Confundir B1/B2 é a falha que esta camada existe para impedir.

## 2. Taxonomia de campos (classificar cada campo do dossiê)

| Classe | Exemplos (dossiê previdenciário) | Tratamento por modo |
|---|---|---|
| **Identificador direto** | nome, CPF, NB, e-mail, telefone, endereço, credencial gov.br | A: hash/máscara · B1: mantém (TTA) · **B2: REMOVE** |
| **Quase-identificador** | data de nascimento, município, sexo, profissão | A: generaliza · B1: mantém · **B2: GENERALIZA** (faixa etária, UF, etc.) |
| **Sensível (art. 5º II)** | **CID, laudos, dados de saúde** | A: suprime/hash · B1: mantém (TTA) · **B2: SUPRIME — VEDADO** |
| **Não-PII** | hashes SHA-256, timestamps, referências legais, saídas do Grimório de-identificadas | todos: mantém |

## 3. Pipeline (estágios — RIPD Export §2.4)

```
dossiê S2 (JSONL)
  └─ (0) classificar campos pela taxonomia §2  [config declarativa: mapa campo→classe]
  └─ (1) selecionar MODO (A / B1 / B2) + base legal  [gate: B1 exige TTA válido do cidadão]
  └─ (2) aplicar regras do modo:
         · remoção/máscara de identificadores diretos
         · SUPRESSÃO do sensível (CID/laudos) — exceto B1
         · generalização de quase-identificadores (B2)
         · minimização de campos ao estritamente necessário (art. 6º III)
  └─ (3) TESTE DE REVERSIBILIDADE (só B2) — ver §4
  └─ (4) selar saída: SHA-256 + carimbo de tempo + registro do modo/base no log de export
  └─ saída por modo (JSONL minimizado / TTA / JSONL anonimizado)
```

## 4. Anonimização real × pseudonimização (art. 12) — o teste

A LGPD art. 12: anonimizado **deixa de ser dado pessoal** *salvo se reversível*. Logo, **Modo B2 exige anonimização IRREVERSÍVEL na prática**, não pseudonimização.

- **Pseudonimização** (hash do CPF) **continua dado pessoal** — serve a A/B1, **não** basta para B2.
- **Teste mínimo para B2 (antes de liberar a saída):**
  - **k-anonimato:** cada combinação de quase-identificadores aparece em ≥ **k** registros (k a definir com a Dra. — sugerir k≥5 dado o hipervulnerável).
  - **supressão de sensível:** verificação automática de que **nenhum** campo classe-Sensível está presente.
  - **sem identificador direto:** verificação de que nenhum campo classe-ID-direto resta.
  - **reforços canônicos:** k-anonimato sozinho é vulnerável a homogeneidade/conhecimento prévio — somar **l-diversidade** (diversidade de valores sensíveis por classe) e, se viável, **t-closeness**.
  - **risco de reidentificação:** com **N=150** e quase-identificadores fortes (município + faixa etária + sexo + profissão), o k-anonimato individualizado **provavelmente não basta** — a resposta tecnicamente honesta tende a ser **Modo B2 só AGREGADO/estatístico, não registro-a-registro**. Esta porta fica **aberta por design**; a implementação **não pode fechá-la** sem nova validação.
- Falhou o teste → **bloquear a saída B2** (fail-closed).

## 5. Interface técnica (Igor)

- **Entrada:** dossiê S2 em JSONL + `modo` + (se B1) `tta_id` válido.
- **Config:** mapa declarativo `campo → classe` (versionado; revisável pela Dra.) — a taxonomia §2 não fica hard-coded.
- **Saída:** JSONL por modo + manifesto (`modo`, `base_legal`, `campos_removidos`, `campos_suprimidos`, `k` atingido, `sha256`, `timestamp_rfc3161`).
- **Log de export (governança):** registra modo/base/hash — **sem PII** (alinha à telemetria de metadado, cond. 1).
- **Fail-safe:** default = recusar export; só libera com modo+base válidos e (B2) teste passado.

## 6. Critérios de aceitação (fixture sintético — LIVRE)

- [ ] Modo B2 sobre fixture: **zero** campos sensíveis e **zero** identificadores diretos na saída (teste automatizado).
- [ ] Modo B2: k-anonimato ≥ k na saída; falha → bloqueia.
- [ ] Modo B1: exige `tta_id` válido; sem TTA → recusa.
- [ ] Modo A: saída minimizada; integridade SHA-256 preservada.
- [ ] Manifesto de export gerado e auditável; log sem PII.
- [ ] Regressão no golden fixture (dossiê sintético Hib001-like).

## 7. Status e gates

- **PROVISIONAL** — spec de engenharia. **Implementação:** Igor (NestJS). **Validação R3:** Dra. (enquadramentos art. 11 II "d" × art. 12; valor de **k**; o que basta como "irreversível na prática").
- **Destrava:** condicionante **(2)** do Parecer #9 → com (1)(3)(4)(5) validadas + esta implementada/validada, o **export sobre dado real** fica admissível. Até lá, **fixture sintético é livre**.
- **Pendência para a Dra. (no próximo lastro):** confirmar **k**, o limiar de "anonimização irreversível na prática", e se o piloto N=150 comporta Modo B2 ou só agregação.

---

**FIREWALL OAB:** spec de **engenharia/atividade-meio**. A admissibilidade jurídica e os enquadramentos são da **Dra.** (Parecer #9). Nada aqui pratica advocacia.
*SPEC Anonimização · Code TALÃO · 08/06/2026 · condicionante (2) do Parecer #9 · D > C > V · Proof-First · ∞*
