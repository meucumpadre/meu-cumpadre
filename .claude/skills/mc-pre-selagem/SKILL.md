---
name: mc-pre-selagem
status: PROVISIONAL · INSTALADO (PR #14) · cloud-portable (scriptPath repo-relativo) · 2026-06-02
description: >
  Roda o ritual de GATE antes de selar um artefato no Vault. 3 checagens em
  paralelo — Camada 0 (mc-lint, Proibições Absolutas) · Camada 1 (sister-ancia,
  revisão adversarial 9 eixos) · rito/gate (R1/R2/R3 + ADR-011 + disciplina de
  versão) — consolidadas num VEREDITO: PODE-SELAR / CONDICIONADO / BLOQUEADO,
  com o rito exato requerido e os gates pendentes. NÃO sela, NÃO escreve no
  Vault, NÃO conserta: devolve o go/no-go ao humano. Catraca dura: OAB/LGPD/PII
  ⇒ R3 (Dra. Juliana). Gatilhos: "pré-selagem", "posso selar isto?", "passar no
  gate antes de selar", "rodar sister-ancia + mc-lint", "checar antes do vault".
rua:
  id: mc-pre-selagem
  nome: Ritual de Pré-Selagem (gate de qualidade)
  tipo: skill
  versao: v0.1
  status: INSTALADO
  papel: 'Gate antes de selar no Vault: 3 checagens (mc-lint · sister-ancia · rito/gate)
    → veredito PODE-SELAR/CONDICIONADO/BLOQUEADO'
  gatilhos:
  - /mc-pre-selagem
  - pré-selagem
  - posso selar isto?
  - checar antes do vault
  entrega: veredito + bloqueios + gates pendentes + rito requerido
  metodo_fonte: sister-ancia (9 eixos) · mc-lint · ritos R1/R2/R3 · ADR-011
  instancia_aci: transversal
  camada_ase: L4
  compoe_com:
  - sister-ancia
  - mc-lint
  nao_confundir_com:
  - id: squad-r3
    motivo: aquele é parecer de compliance de política/preço; este é gate de qualidade
      de QUALQUER artefato
  - id: sister-ancia
    motivo: a sister-ancia é UMA das 3 camadas que a pré-selagem orquestra
  gate: R1
  zona: Verde
  lgpd_nota: alvo que toca OAB/LGPD/PII ⇒ catraca dura R3 (Dra. Juliana)
  vedacoes_honradas:
  - D>C>V
  - Proof-First
  - Firewall-OAB
  - LGPD
  para_no_gate: NÃO sela, NÃO escreve, NÃO conserta · devolve go/no-go ao humano
  custo:
    gasta_agente: true
    opt_in: true
    fan_out: 3 checagens paralelas
  emite_audit: false
  depende_de:
  - sister-ancia
  - mc-lint
---

## Comando

`/mc-pre-selagem CAMINHO-DO-ARTEFATO`

- Ex.: `/mc-pre-selagem 02-ARQUITETURA/MC-NOVO-ARTEFATO-v0_1.md` (caminho relativo à raiz do repo)
- **Sem argumentos:** `/mc-pre-selagem` roda o **fixture** (regressão da régua de selagem: 1 alvo limpo → PODE-SELAR/R1, 1 alvo com violação + fronteira OAB/LGPD → BLOQUEADO/R3).

## Escopo — LER ANTES

- É o **gate de qualidade/conformidade** de QUALQUER artefato MC antes de virar canônico. NÃO é o `/squad-r3` (parecer de compliance de política/preço), nem o `/mc-compasso-sweep` (curadoria de fontes), nem o `/mc-especimen-autoevolutivo` (motor de casos).
- **NÃO sela e NÃO escreve no Vault.** Por **ADR-011**, só o Code TALÃO escreve no Vault, sob *"aprovado para vault"*; este motor só produz o **veredito**. **R3** (OAB/LGPD/ANPD/PII) exige **Dra. Juliana** antes de selar — catraca dura.
- **Rode numa sessão com raiz no Vault** — é o que torna a `sister-ancia` (subagente) e o `mc-lint.py` disponíveis. Se rodar fora, a Camada 0 reporta `rodou=false` (não finge limpo).

## Execução

1. Workflow tool com `scriptPath = ".claude/workflows/mc-pre-selagem.workflow.js"` — caminho **relativo à raiz do repo** (resolve em sessão local E cloud claude.ai).
2. Se o Founder deu o caminho do artefato, passe `args: { alvo, descricao? }`. Sem isso, rode **sem args** (fixture).
3. Fases: **Alvo** (tipo/status/toca-OAB-LGPD-PII) → **Checagens** (mc-lint ∥ sister-ancia ∥ rito/gate) → **Veredito** (consolida).
4. Apresente ao Founder: por alvo, o **veredito** (PODE-SELAR/CONDICIONADO/BLOQUEADO), **rito requerido**, **bloqueios**, **gates pendentes**, **próximo passo**. E a `regressao_fixture` se rodou sem args.
5. **NÃO sele.** Selar é ato do Code TALÃO sob aval; R3 espera a Dra. Juliana.

## Regras

- **D > C > V lexicográfico:** achado 🔴 ou hit de mc-lint ⇒ BLOQUEADO. Dignidade/Compliance não negociam.
- **Na dúvida, BLOQUEIA:** selar lixo no canônico é o erro mais caro.
- **Proof-First:** cada achado com fonte:linha; sem lastro → `[GATE]`.
- Lastro das peças (sister-ancia §3-§4, mc-lint, ritos R1/R2/R3, ADR-011): `_LEIA-mc-pre-selagem.md`.
