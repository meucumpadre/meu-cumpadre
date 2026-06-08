---
name: sintetizador-evolutivo
status: PROVISIONAL · NÃO-INSTALADO · NÃO-SELADO · drop zone (Cérebro 1) · acompanha o workflow v0.4 · 2026-06-04
description: >
  Wrapper /sintetizador-evolutivo — dispara o Squad Evolutivo: lê a memory/ (Fase 0,
  read-only) → as 3 pétalas (arquiteto desenha · disrupter estressa · guardião checa
  Proof-First) → o auxiliar consolida a `sintese` → o Sintetizador aplica o Teste de
  Aceitação F (minuta/veto) → INVOCA o Curador (guardiao-grimorio) p/ registrar attempt
  (§3) e promover note→skill (§4). O motor NÃO grava na memory/ — só o Curador (§6).
  Sem args = roda o fixture (regressão: loop + divergência de dignidade). NÃO sela
  (ADR-011). Gatilhos: "sintetizador evolutivo", "rodar o squad evolutivo", "loop
  evolutivo do squad".
rua:
  id: sintetizador-evolutivo
  nome: Sintetizador Evolutivo (wrapper do Squad Evolutivo)
  tipo: skill
  versao: v0.4
  status: PROVISIONAL
  papel: 'Wrapper que dispara o workflow do Squad Evolutivo (5 fases: Memória · Proposta · Teste F · Curadoria · Gate) e para no gate. Loop que melhora por rodada via memory/.'
  gatilhos:
  - /sintetizador-evolutivo
  - rodar o squad evolutivo
  - loop evolutivo do squad
  entrega: resultado-rascunho do loop + attempt registrado/promovido na memory/ (via Curador) + perguntas p/ o gate
  metodo_fonte: workflow sintetizador-evolutivo (5 fases) · SINTESE_SCHEMA v1.1 · Contrato Memory v0.3 · os 4 agentes do squad
  instancia_aci: transversal
  camada_ase: L4
  compoe_com:
  - arquiteto-invisivel
  - disrupter-escala-zilda
  - sintetizador-auxiliar
  - guardiao-grimorio
  nao_confundir_com:
  - id: sintetizador-auxiliar
    motivo: aquele é o AGENTE auxiliar dentro do loop; esta skill é o WRAPPER que dispara o loop inteiro
  - id: squad-r3
    motivo: aquele é parecer de compliance; este é orquestração de método/arquitetura (Zona Verde)
  - id: mc-especimen-autoevolutivo
    motivo: aquele é motor de casos de-identificados; este é o squad de desenho+aprendizado
  gate: R1
  zona: Verde
  lgpd_nota: opera sobre método/arquitetura · PII nunca entra na memory/ (LGPD · §7)
  vedacoes_honradas:
  - D>C>V
  - Proof-First
  - Firewall-OAB
  - LGPD
  para_no_gate: NÃO sela, NÃO escreve no Vault · o MOTOR não grava na memory/ — invoca o Curador (§6)
  custo:
    gasta_agente: true
    opt_in: true
    fan_out: 4 pétalas/agentes + Curador (registro/promoção) por rodada
  emite_audit: false
  depende_de:
  - arquiteto-invisivel
  - disrupter-escala-zilda
  - sintetizador-auxiliar
  - guardiao-grimorio
---

## Comando

`/sintetizador-evolutivo [tema]`

Dispara o **Squad Evolutivo** sobre um tema. Sem `tema` → roda o **fixture** (regressão do loop + da divergência de dignidade).

> ⚠️ **PROVISIONAL · NÃO-INSTALADO.** Wrapper-rascunho na mesa de trabalho (Cérebro 1). Para rodar de verdade, o workflow e os 4 agentes precisam ser instalados em `.claude/` (gate do Founder) + RUA regenerado + `args.instalado=true`. Guia: **`Documentação/02-Arquitetura/Squad-Evolutivo/INSTALAR-SQUAD-EVOLUTIVO.md`** (pré-selagem → **CONDICIONADO**: SoR→MoR ✅ · resolver **R2** antes de copiar). Até lá: fixture (e `args.sintese` p/ exercitar a cadeia Teste F → Curador).

## O que faz (5 fases · detalhe no `_LEIA`)

1. **Memória** — lê `memory/{attempts,notes,skills}` **read-only** (Explore) · schema §3.
2. **Proposta** (Fases 1-3) — `arquiteto-invisivel` produz a minuta → `disrupter-escala-zilda` assessa a dignidade → `guardiao-grimorio` (catraca leve) traz `fontes[]`/`lacunas[]` → `sintetizador-auxiliar` consolida a `sintese` (preserva divergências).
3. **Teste F** — o Sintetizador decide **minuta/veto** via `increasesDignity(DonaZilda)` (§8) — **pode divergir** do `sinal` do Disrupter.
4. **Curadoria** — **INVOCA o Curador** → registra attempt (§3, fonte+prova destilados) + promove note→skill (§4). **O motor não grava** (§6).
5. **Gate** — consolida + perguntas abertas · **STOP** (NÃO sela).

## Saída

Resultado-rascunho do loop + o que o Curador registrou/promoveu em `memory/` + perguntas p/ o gate do Founder. **Nada selado.**

## Limites (fail-closed)

- **Motor não grava (§6):** o workflow **não escreve** na `memory/` — só o Curador grava. **NÃO sela / NÃO escreve no Vault** (ADR-011).
- **Zona Verde:** PII nunca entra na `memory/` (§7).
- **Proof-First (Decisão 4):** registrar attempt exige `fonte`+`prova` (§3); `lacunas` bloqueiam `validado`/skill (§4).
- **Firewall OAB:** a escala para na atividade-meio.
- **Catraca dura R3:** compliance pesado (OAB/LGPD/ANPD) → handoff p/ a Dra. Juliana (Lote 4).

---

**Hierarquia:** Dignidade > Compliance > Viabilidade · **Proof-First** · **Zona Verde** · ∞
