---
chat_origem: https://claude.ai/chat/fc010f32-ea9d-4d47-a432-2f7c0466616a
name: meu-cumpadre-orquestrador-mestre
version: 3.1.0-SUPERSEDED
description: >
  [SUPERSEDED 2026-06-03] Esta skill monolítica (v3.1, 1001 linhas) cumpriu sua
  finalidade causal na IDEAÇÃO do MC — era o "carregador de identidade + orquestrador"
  quando ainda não havia fontes canônicas distintas. Hoje cada função dela vive em
  fonte canônica própria (CLAUDE.md, MC-ACI, Router-Ethics 11.0, ADRs, família de
  skills modulares). Manter o monólito = segunda-fonte-da-verdade que drifta.
  APOSENTADA via MC-PROPOSTA-Aposentadoria-OrquestradorMestre (Founder · 2026-06-03).
  Conteúdo íntegro preservado em 99-ARQUIVO-Legado/skills/. Para orquestração, use as
  fontes canônicas no mapa abaixo. NÃO invocar como fonte de verdade.
status: SUPERSEDED · arquivada (reversível · #29) · deleção do tombstone só via ADR + janela ≥30d
rua:
  id: meu-cumpadre-orquestrador-mestre
  nome: Orquestrador Mestre MC (SUPERSEDED · tombstone)
  tipo: skill
  versao: v3.1.0-SUPERSEDED
  status: SUPERSEDED
  papel: "[SUPERSEDED] Era a skill mestre monolítica de orquestração/identidade; aposentada — cada função migrou para fonte canônica (ver mapa no corpo)"
  gatilhos: ["/meu-cumpadre-orquestrador-mestre (retorna o redirecionamento)"]
  entrega: redirecionamento para as fontes canônicas + ponteiro p/ o legado
  metodo_fonte: "MC-PROPOSTA-Aposentadoria-OrquestradorMestre-v0_1 · conteúdo em 99-ARQUIVO-Legado/skills/"
  instancia_aci: transversal
  camada_ase: L3
  compoe_com: []
  nao_confundir_com:
    - id: orquestracao
      motivo: aquele é protocolo genérico de plan-mode do Code (ATIVO); este é o monólito MC aposentado
  gate: R1
  zona: Verde
  lgpd_nota: "tombstone · sem conteúdo operacional · sem PII"
  vedacoes_honradas: ["D>C>V", Firewall-OAB, Proof-First]
  para_no_gate: "tombstone · só redireciona · não orquestra nem sela"
  custo:
    gasta_agente: false
    opt_in: false
    fan_out: null
  emite_audit: false
  depende_de: []
---

# ⚰️ SUPERSEDED — Orquestrador Mestre v3.1 (aposentado 2026-06-03)

> **Esta skill foi aposentada.** Cumpriu finalidade causal na ideação do negócio;
> hoje cada função dela vive em fonte canônica própria. Manter o monólito de 1001
> linhas = segunda-fonte-da-verdade que drifta (foi o que motivou a aposentadoria).
>
> **Conteúdo íntegro preservado:** `99-ARQUIVO-Legado/skills/MC-SKILL-OrquestradorMestre-v3_1-LEGADO-2026-0603.md`
> **Decisão:** `03-GOVERNANCA/propostas/MC-PROPOSTA-Aposentadoria-OrquestradorMestre-v0_1-PROVISIONAL-2026-0603.md`

## Mapa de redirecionamento — onde cada função vive agora (fonte canônica)

| Seção do monólito | Fonte canônica viva |
|---|---|
| §1 Ontologia (MC NÃO é / É) · §2 Hierarquia D>C>V · §17 Proibições Absolutas | **CLAUDE.md** (Identidade · Regras Invioláveis · Proibições) |
| §5 Router-Ethics 11.0 (140 nós, 7 hooks, 3 scores) | **`_MC-RouterEthics_11_v1_1-2026-0505-CLevel`** |
| §6 Jornada E0–E7 · §6.3 DIB Urgency · §6.4 Correção 48h | **`MC-PROCESSO-Jornada_E0E7_Mestre`** |
| §7 Custódia · Três Estados | **ADR-009a / ADR-009b** |
| §11 Modelo econômico / preços | **ADR-007 v3.x** (Φ₁ R$2.200 · Φ₁c R$1.500) |
| §13 Stack técnico (3 camadas LLM) | **CLAUDE.md §Stack** · **ADR-008** · Princípio **#21** (Camadas IA) |
| §14 Time · §15 Casos âncora | **CLAUDE.md §Equipe** · casos no C1/Vault |
| §3 Inversão Cósmica · §4 Três Relógios · §10 9 Verticais · §12 Moats | **05-ESTRATEGIA/** (doutrina EIS · manifesto) |
| §9 Proof-First | **CLAUDE.md** · Princípio **#43** · skill **`mc-dossie-proof-first`** |
| §19 Programa MC-VTVL | **`MC-VTVL-Propulsive-Landing-Programa`** (02-ARQUITETURA) |
| Arquitetura cognitiva / orquestração viva | **`02-ARQUITETURA/cognitiva/MC-ARQUITETURA-Cognitiva-Integrada-v2.1-2026-0528.md`** (MC-ACI) + família de skills modulares (RUA) |

## A verdadeira orquestração hoje

Não é uma skill-monólito — é o **sistema distribuído**: CLAUDE.md (DNA) + MC-ACI (arquitetura cognitiva) + Router-Ethics 11.0 (decisão) + a família de skills modulares (cada uma faz uma coisa, instrumentadas no RUA) + os gates (mc-lint, sister-ancia, R1/R2/R3).

> Tombstone reversível (#29). Para reativar: restaurar do legado. Para deletar de vez: ADR formal + janela ≥30d.
> **D > C > V** · *o que cumpriu sua causa e foi superado, honra-se no legado* · ∞
