---
tipo: KIT-LASTRO R3 (mesa de validação da parecerista · atividade-meio)
codigo: MC-LASTRO-R3-DPO-RIPDs-ParaDra
versao: v1.0
data: 2026-06-08
para: Dra. Juliana Pereira de Melo — OAB-GO 38.662 (atividade-fim · parecerista externa independente)
de: MC — Code TALÃO (atividade-meio · organiza e entrega o lastro; NÃO valida)
objeto: validação R3, de uma vez, das condicionantes (1)(3)(4)(5) do Parecer #9 (DPO + 2 RIPDs + papel + trava-metadado)
firewall_oab: autorregulação (o MC é o próprio agente de tratamento). A validação é da signatária. O MC só prepara o lastro.
hierarquia: Dignidade > Compliance > Viabilidade
---

# 🗂️ Lastro R3 — Validação do DPO + 2 RIPDs (Parecer #9)

> **Dra., esta é a sua mesa.** A senhora selou (Parecer #9 · 08/06) **5 condicionantes** antes de qualquer dado real. O MC executou as que dependiam dele e traz aqui **4 prontas para sua validação numa só passada** — o **ato de DPO** (selado) e os **dois RIPDs** (telemetria + export), que cobrem as condicionantes **(1)(3)(4)(5)**. **Zero garimpo do seu lado.** *(A condicionante **(2)** — camada de anonimização — fica para um round próprio: depende de engenharia ainda a construir.)*

---

## 1. Estado das 5 condicionantes (numeração do seu §6/§9)

| # | Condicionante | Lastro MC | Para a senhora |
|---|---|---|---|
| **(1)** | Telemetria travada no metadado | RIPD Telemetria + firewall `mc-audit.py` (9 chaves, zero-PII) | **validar** a não-incidência do art. 11 |
| **(2)** | Anonimização antes do B2B | *camada a construir (engenharia)* | **fora deste round** |
| **(3)** | DPO por ato formal | Ato SELADO 08/06 (Alessandro acumula DPO) | **validar** o ato (art. 41 + Res. 18/2024) |
| **(4)** | Dois RIPDs | RIPD Telemetria + RIPD Export | **validar** o conteúdo (art. 38) |
| **(5)** | Papel controlador/operador | classificado nos 2 RIPDs | **validar** a classificação |

---

## 2. Os documentos da mesa (todos no ZIP)

| # | Documento | O que é |
|---|---|---|
| 1 | `MC-ATO-NomeacaoEncarregado-DPO-v1_0-SELADO-FIRMADO-2026-0608.docx` | **Ato formal** de nomeação do Encarregado (selado pelo Founder) |
| 2 | `MC-RIPD-Telemetria-Governanca-RUA-v0_1` | RIPD da telemetria (Rec #1 · baixo risco · metadado) |
| 3 | `MC-RIPD-Export-Dossie-ANPD-B2B-v0_1` | RIPD do export (Rec #3 · alto risco · sensível) |
| 4 | `MC-PARECER-R3-BancadaGovernanca-LGPD-ANPD-v1_1-RATIFICADO-SELADO` | **o seu parecer** (base) |
| 5 | este lastro | capa + perguntas de validação |

---

## 3. Perguntas de validação (o que preciso da senhora)

**Cond. (3) — DPO:**
1. O ato formal (escrito, datado, assinado, art. 41 + Res. CD/ANPD 18/2024) **satisfaz** a exigência? Dois pontos a pesar na **independência funcional**: (a) o **Founder acumula** a função de Encarregado; (b) o **canal é nominal** (`alessandro.neves@…`) e não despessoalizado (`encarregado@/dpo@`). É aceitável na fase Crisálida assim, ou a senhora recomenda Encarregado distinto e/ou canal dedicado?

> *Nota de numeração:* o **ato firmado** chama o DPO de **"gate (1) de execução"**; no **seu §6/§9** o DPO é a **condicionante (3)**. É o **mesmo gate** — só dois esquemas (execução do MC × condições do parecer). Os RIPDs e este lastro usam a **sua** numeração.

**Cond. (1) — telemetria metadado:**
2. O **RIPD Telemetria** + o firewall `mc-audit.py` (conjunto fechado de 9 chaves de governança, conteúdo descartado, session hasheado, default-off — *código que a senhora leu*) **bastam** para sustentar que **o art. 11 não incide** enquanto travado no metadado? **Pode ligar sobre dado real?**

**Cond. (4) — RIPDs:**
3. Os **dois RIPDs** atendem ao **conteúdo mínimo do art. 38** (tipos, metodologia, salvaguardas, mitigação)? Algo a **acrescentar** antes de servirem de lastro à ANPD?

**Cond. (5) — papel:**
4. A **classificação** está correta? — *telemetria = MC controlador do metadado; dossiê = MC operador (para o cidadão/advogada)*; figura "operador fiduciário" a ajustar no RIPD?

---

## 4. Veredito da signatária (marcar/assinar)

> Validação das condicionantes (1)(3)(4)(5) do Parecer #9:
> ☐ **VALIDO** (as quatro estão satisfeitas; libera o **dado real** quando a (2) anonimização também estiver pronta)
> ☐ **VALIDO COM AJUSTES** (especificar: __________)
> ☐ **NÃO VALIDO** (motivo / o que falta: __________)
>
> DPO acumulado pelo Founder: ☐ aceitável na Crisálida · ☐ aceitável com ressalva: __________ · ☐ recomenda Encarregado distinto
>
> _______________________________________
> Dra. Juliana Pereira de Melo — OAB-GO 38.662 · data: ___/___/2026

> ⚠️ **Lembrete (sua própria condicionante):** mesmo validadas (1)(3)(4)(5), o **dado real** só é liberado quando a **(2) — camada de anonimização** estiver construída. Até lá, **fixture sintético é livre**.

---

**FIREWALL OAB:** kit de **atividade-meio** (autorregulação — o MC é o próprio agente de tratamento). A admissibilidade e a validação são da **Dra. Juliana** (atividade-fim). O Encarregado é papel interno do MC, distinto da parecerista. Nada aqui pratica advocacia.
*Lastro R3 · Code TALÃO · 08/06/2026 · mesa pronta à mão da parecerista · D > C > V · Proof-First · ∞*
