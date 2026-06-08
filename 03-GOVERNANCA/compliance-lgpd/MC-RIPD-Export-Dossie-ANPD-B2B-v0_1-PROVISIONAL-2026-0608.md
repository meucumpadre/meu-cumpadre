---
tipo: RIPD (Relatório de Impacto à Proteção de Dados Pessoais · LGPD art. 38)
nome: RIPD — Export de Dossiê (JSONL + SHA-256 · Rec #3) para ANPD e B2B
versao: v0.1 PROVISIONAL (ESQUELETO)
data: 2026-06-08
status: MINUTA-ESQUELETO — instrumenta as condicionantes (4) RIPD + (2) anonimização + (5) papel do Parecer R3 Bancada Governança (08/06) · aguarda DPO [cond. (3)] + camada de anonimização + completar campos + validação R3 (Dra.)
preparado_por: MC — Code TALÃO (atividade-meio)
lastro: Parecer R3 Bancada Governança LGPD/ANPD v1.1 SELADO (08/06) · RIPD Custódia v0.1 · ADR-009b (Três Estados)
firewall_oab: "Minuta de compliance (atividade-meio). NÃO é parecer jurídico. A validação é da Dra."
hierarquia: Dignidade > Compliance > Viabilidade
---

# 🛡️ RIPD — Export de Dossiê (Rec #3)

> **Escopo (selado pela Dra.):** export do dossiê (JSONL + SHA-256) com **DUAS finalidades distintas** que exigem tratamento distinto: **(A) ANPD / accountability** — legítima (trilha auditável); **(B) B2B** — exige **anonimização/minimização ANTES de sair**; **sensível (CID) vedado a B2B genérico**; não-anonimizado **só à advogada parceira do próprio cidadão** (art. 11 II "d"). Risco **ALTO** (dado sensível de hipervulnerável). *Piloto em fixture sintético é livre; este RIPD destrava o export sobre **dado real**.*

## 0. Natureza e limites
Minuta-esqueleto de compliance (atividade-meio). Não é parecer. *(Numeração das condicionantes = a do Parecer SELADO §6/§9: **(1)** Rec#1 metadado · **(2)** Rec#3 anonimização · **(3)** DPO · **(4)** dois RIPDs · **(5)** papel. "Parecer #9" = rótulo interno do índice MC.)* Este documento **é um dos dois RIPDs [cond. (4)]**, **instrumenta a anonimização/minimização B2B [cond. (2)]** e a **classificação de papel [cond. (5)]**. Validação final: Dra. + DPO.

## 1. Identificação
| Campo | Valor |
|---|---|
| Controlador / Operador | MC LTDA — **operador** (executa o export para o cidadão/advogada); **controlador** quanto à trilha p/ ANPD (Parecer #9, Q4 · cond. (5)) |
| Encarregado (DPO) | **Alessandro de Souza Neves** (Founder · acumula DPO na Crisálida, pessoa interna do MC — não a Dra.) · `alessandro.neves@meucumpadre.com.br` · **ato SELADO 08/06** |
| Tratamento | Geração e envio de export estruturado do dossiê (JSONL) com hash SHA-256 |
| Destinos | **(A)** ANPD (prestação de contas) · **(B)** B2B (advogada parceira) |

## 2. Descrição do tratamento
### 2.1 Finalidades (separadas — art. 6º I)
- **(A) ANPD / accountability:** comprovar conformidade e a trilha probatória (Lei + Evidência + Hash).
- **(B) B2B:** transferir o dossiê **à advogada escolhida pelo cidadão** (hand-off S2→S3 · ADR-009b) **ou** alimentar método/estatística **anonimizada**.

### 2.2 Categorias de dados
| Categoria | Sensível? | Observação |
|---|---|---|
| Identificação do titular (nome, CPF) | pessoal comum (não-sensível LGPD art. 5º II) — **mas restrito** | CPF nunca em claro fora da stack soberana (ADR-009a) |
| Dados do benefício (NB, DER, espécie) | pessoal comum — **restrito** | minimizar; não circula livre |
| **Saúde — CID, laudos** | **SENSÍVEL (art. 5º II)** | **vedado a B2B genérico**; só hand-off à advogada parceira (art. 11 II "d") ou **anonimizado** (art. 12) |
| Hash SHA-256 / metadados de integridade | não-PII | trilha auditável |

### 2.3 Tratamento por destino — **a regra que o Parecer #9 selou**
| Destino | Base legal | Regra de saída |
|---|---|---|
| **(A) ANPD** | **art. 7º, II** (obrigação regulatória) + **art. 6º, X** (accountability) | trilha JSONL + SHA-256 — defensável; **minimizar** ao necessário |
| **(B) B2B — advogada parceira do próprio cidadão** | **art. 11, II, "d"** (exercício regular de direitos em processo) | hand-off via **TTA** (ADR-009b); não-anonimizado **só** para ESTE caso/advogada |
| **(B) B2B — método/estatística / terceiro** | **art. 12** (anonimizado deixa de ser dado pessoal) | **anonimização/de-identificação + minimização ANTES de sair**; **sensível (CID) NUNCA** a B2B genérico |

### 2.4 Camada de anonimização/minimização (cond. (2) — spec criada)
Pipeline especificado em **`02-ARQUITETURA/specs/MC-SPEC-CamadaAnonimizacao-ExportDossie-v0_1`**: 3 modos (A ANPD · B1 advogada do próprio cidadão · B2 genérico anonimizado), taxonomia de campos (ID-direto/quase-ID/sensível/não-PII), (i) remoção/máscara de identificadores diretos; (ii) **supressão do sensível** (CID/laudos) exceto B1; (iii) minimização (art. 6º III); (iv) **teste de reversibilidade** k-anonimato (art. 12 — anonimização real, não pseudonimização). **☐ falta:** implementação (Igor) + validação R3 (Dra.: valor de **k**, limiar de "irreversível na prática").

## 3. Necessidade e proporcionalidade
Export ao **mínimo** necessário por destino; o sensível só transita quando há base do art. 11 II "d" (advogada do próprio cidadão) — caso contrário, **anonimizado**.

## 4. Matriz de riscos
| Risco | Sever. | Mitigação |
|---|---|---|
| Sensível (CID) vazar a **B2B genérico** | **Alta** | **vedação** + camada de anonimização (cond. (2)) antes de qualquer saída B2B |
| Reidentificação de "anonimizado" mal feito | Alta | teste de reversibilidade; se reversível → continua dado pessoal (art. 12) |
| Perfilamento / lock-in do hipervulnerável | Alta (D>C>V) | export serve a soberania do titular (dossiê é dele, portável); **vedado** extrair valor contra a soberania (Parecer #9, Q6) |
| Trilha p/ ANPD expor PII além do necessário | Média | minimização; SHA-256 em vez de conteúdo onde possível |

## 5. Salvaguardas
- Hand-off por **TTA assinado** (ADR-009b) · hash SHA-256 (integridade) · S3 não persiste no MC · vedada retenção como cobrança (CDC art. 39 V).
- `[a implementar]` **camada de anonimização** (cond. (2)).

## 6. Base legal (resumo)
art. 7º II + 6º X (ANPD) · art. 11 II "d" (B2B advogada do próprio cidadão) · art. 12 (B2B anonimizado) · art. 6º III (minimização).

## 7. Direitos dos titulares (art. 18)
Acesso, portabilidade (o dossiê é do cidadão, levável a qualquer advogado), eliminação, informação sobre compartilhamento — via canal do Encarregado.

## 8. ⚠️ Pendências (o output honesto)
- [ ] **DPO nomeado** (cond. (3)) — inserir no §1
- [ ] **Camada de anonimização/minimização especificada e implementada** (cond. (2) · §2.4)
- [ ] Definir **retenção** das trilhas de export
- [ ] **Validação R3 da Dra.** (confirmar enquadramentos art. 11 II "d" × art. 12 por destino)
- [ ] Classificação **controlador/operador** confirmada por destino (cond. (5))

## 9. Conclusão (operacional — não jurídica)
Export para **ANPD** é admissível (accountability). Export **B2B** é admissível **somente** com anonimização/minimização prévias (ou hand-off à advogada do próprio cidadão via TTA); **sensível vedado a B2B genérico**. Sobre **dado real**, **condicionado** ao DPO, à camada de anonimização e à validação da Dra.

---
**FIREWALL OAB:** minuta de **atividade-meio**. A admissibilidade e a validação são da **Dra.** (Parecer #9). Nada aqui pratica advocacia.
*RIPD Export · Code TALÃO · 08/06/2026 · condicionantes (4)+(2)+(5) do Parecer R3 Bancada Governança · D > C > V · Proof-First · ∞*
