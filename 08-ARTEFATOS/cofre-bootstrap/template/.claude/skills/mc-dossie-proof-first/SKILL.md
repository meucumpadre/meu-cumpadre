---
name: mc-dossie-proof-first
status: PROVISIONAL · INSTALADO (PR #14) · cloud-portable (scriptPath repo-relativo) · 2026-06-02
description: >
  Monta um DOSSIÊ PROOF-FIRST de alegações: decompõe um tema em proposições
  verificáveis, garimpa lado A (corrobora) + lado B (contraprova obrigatória) com
  fonte:linha/URL/Lei, carimba o estado de prova (✅ verificado / ⚠️ não-verificado /
  ❌ refutado), sela integridade (SIV: SHA-256 das fontes-arquivo) e marca lacunas
  [FONTE PENDENTE]. Entrega a Linha de Evidência + tabela + bloco SIV. Zona Verde
  (doutrina/método/métrica/norma/mercado) — NUNCA ingere PII; NÃO é o dossiê
  probatório do cidadão (atividade-meio sob R3, vive no C1). Honra as 5 vedações
  CP-MC (zero conclusão jurídica, zero omissão de contraprova). NÃO sela, NÃO
  escreve no Vault. Gatilhos: "dossiê proof-first", "lastrear esta alegação/claim",
  "linha de evidência", "provar com fonte:linha", "verificar contra a fonte", "SIV/hash".
rua:
  id: mc-dossie-proof-first
  nome: Dossiê Proof-First de Alegações
  tipo: skill
  versao: v0.1
  status: INSTALADO
  papel: Decompõe um tema em proposições verificáveis (lado A + contraprova B), carimba
    estado de prova, sela SIV
  gatilhos:
  - /mc-dossie-proof-first
  - dossiê proof-first
  - lastrear esta alegação
  - linha de evidência
  - provar com fonte:linha
  entrega: Linha de Evidência + tabela + bloco SIV (SHA-256)
  metodo_fonte: CP-MC (5 vedações) · método Proof-First (Lei+Evidência+hash)
  instancia_aci: transversal
  camada_ase: L2-L3
  compoe_com: []
  nao_confundir_com:
  - id: handoff-juridico
    motivo: este NÃO é o dossiê probatório do cidadão (atividade-meio sob R3, vive
      no C1); é dossiê de doutrina/método/mercado
  gate: R1
  zona: Verde
  lgpd_nota: doutrina/método/métrica/norma/mercado · NUNCA ingere PII de cliente
  vedacoes_honradas:
  - Proof-First
  - Zona-Verde
  - Firewall-OAB
  - D>C>V
  para_no_gate: NÃO sela, NÃO escreve no Vault · devolve a Linha de Evidência
  custo:
    gasta_agente: true
    opt_in: true
    fan_out: lado A + lado B
  emite_audit: false
  depende_de:
  - WebSearch
  - WebFetch
---

## Comando

`/mc-dossie-proof-first TEMA` (ou cole as ALEGAÇÕES)

- Ex.: `/mc-dossie-proof-first lastro das capacidades de harness que vamos citar no Modo FINEP`
- Opcional `fonte_pasta` (Zona Verde) para priorizar a busca.
- **Sem argumentos:** `/mc-dossie-proof-first` roda o **fixture** (regressão Proof-First sobre as métricas MC: RA-MC ✅, CMD ✅, fórmula TENV-MC ⚠️ pendente, preço superado ❌ refutado).

## Escopo — LER ANTES

- Lastra **alegações de Zona Verde** (doutrina, método, métrica, capacidade, norma, mercado). **NUNCA ingere PII** (CPF/NB/CID/CNIS); fonte com PII → `[GATE R3]`, não transcreve.
- **NÃO é o dossiê probatório do cidadão** (CP-MC operacional com PII = atividade-meio sob R3, no C1). Este é o lastro **de método/claim**. Atividade-fim (conclusão jurídica) é 100% da advogada — **5 vedações CP-MC** (zero conclusão jurídica, zero adjetivação, zero despacho, **zero omissão de contraprova**, zero promessa de resultado).
- **NÃO sela e NÃO escreve no Vault.** Devolve o dossiê (rascunho) ao gate humano.

## Execução

1. Workflow tool com `scriptPath = ".claude/workflows/mc-dossie-proof-first.workflow.js"` — caminho **relativo à raiz do repo** (resolve em sessão local E cloud claude.ai).
2. Se o Founder deu tema/alegações, passe `args: { tema, alegacoes?, fonte_pasta? }`. Sem isso, rode **sem args** (fixture).
3. Fases: **Alegações** (decompõe) → **Garimpo** (lado A + lado B por alegação, paralelo) → **Dossiê** (estado de prova + SIV + linha de evidência).
4. Apresente: `linha_de_evidencia`, `quadro_sintese`, `tabela_md`, `bloco_siv` (hashes), `gaps_fonte_pendente`, e a `regressao_fixture` se rodou sem args.
5. **NÃO conclua juridicamente, NÃO sele.**

## Regras

- **Proof-First:** estado de prova explícito (✅/⚠️/❌); sem rastro → `[FONTE PENDENTE]`; nunca fabricar fonte.
- **Contraprova obrigatória** (lado B): omitir contraprova fere a vedação CP-MC.
- **SIV:** fontes-arquivo locais recebem SHA-256 (integridade).
- **Zona Verde** (sem PII) · **D > C > V** · atividade-meio (não conclui).
- Lastro das peças (Coletor squad-r3, CP-MC GPN/SIV/ICE, 5 vedações, Proof-First §2.4): `_LEIA-mc-dossie-proof-first.md`.
