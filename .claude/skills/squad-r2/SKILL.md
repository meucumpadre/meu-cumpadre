---
name: squad-r2
status: PROVISIONAL · cloud-portable (scriptPath repo-relativo) · NÃO-SELADO (selagem = gate R2) · 2026-06-03
description: >
  Executa o RITO R2 (cunhagem fundacional) sobre um artefato fundacional — ADR,
  Princípio, refactor do CLAUDE.md ou mudança de stack. Roda a deliberação do trio
  (C3.1 Cofounder + Sister Anciã, com o Founder no gate): F0 Enquadrar (+ escalada
  R3 fail-closed se tocar OAB/LGPD/PII/ANPD) · F1 C3.1 (cunhagem intelectual) · F2
  Sister Anciã (contraintuição adversarial, agente real) · F3 Coerência + supersessão
  + disciplina de versão · F4 Síntese → VEREDITO (PRONTO-PARA-SELAR / CONDICIONADO /
  VOLTA) + mapa de supersessão + bump de versão + pendências. NÃO redige o artefato,
  NÃO sela, NÃO escreve no Vault: devolve a recomendação e PARA no gate (o Founder
  sela). É o irmão R2 do /squad-r3 (que roda o rito R3 → Dra. Juliana). Gatilhos:
  "rito R2", "squad r2", "cunhar este ADR/Princípio", "posso selar este fundacional?",
  "deliberar com C3.1 e a Anciã", "passar a cunhagem pelo trio".
rua:
  # Bloco A · Identidade
  id: squad-r2
  nome: Squad R2 (rito de cunhagem fundacional MC)
  tipo: skill
  versao: v0.1
  status: PROVISIONAL
  data: 2026-06-03
  # Bloco B · Função
  papel: Executa o RITO R2 (cunhagem fundacional — ADR · Princípio · refactor do CLAUDE.md
    · mudança de stack) via deliberação do trio (C3.1 + Sister Anciã, Founder no gate);
    estressa e RECOMENDA, não redige nem sela
  gatilhos:
  - /squad-r2
  - squad r2
  - rito R2
  - cunhar este ADR/Princípio
  - posso selar este fundacional?
  - deliberar com C3.1 e a Anciã
  entrega: veredito (PRONTO-PARA-SELAR / CONDICIONADO / VOLTA) + mapa de supersessão +
    bump de versão + pendências_R2 + escalada_R3 quando tocar OAB/LGPD/PII/ANPD
  metodo_fonte: Rito R2 (trio C3.1 + Sister Anciã) · deliberação adversarial · disciplina
    de supersessão e versão · catraca fail-closed → escalada R3
  # Bloco C · Posição na MC-ACI
  instancia_aci: transversal
  camada_ase: L4
  compoe_com:
  - squad-r2.workflow
  nao_confundir_com:
  - id: squad-r3
    motivo: aquele é o rito R3 (compliance/OAB/LGPD → Dra. Juliana); este é o rito R2
      (cunhagem fundacional · o Founder sela)
  - id: mc-pre-selagem
    motivo: aquele apenas DETECTA qual rito o artefato exige (+ roda mc-lint/sister-ancia);
      aqui o rito R2 é EXECUTADO
  # Bloco D · Governança (fail-closed)
  gate: R2
  zona: Verde
  lgpd_nota: artefato fundacional = doutrina/método · PII nunca entra em prompt · se tocar
    OAB/LGPD/PII/ANPD/Soberania, marca escalada_R3 e a selagem passa a exigir a Dra. Juliana
  vedacoes_honradas:
  - D>C>V
  - Proof-First
  - Firewall-OAB
  - Zona-Verde
  para_no_gate: "true — NÃO redige o artefato, NÃO sela, NÃO escreve no Vault · recomenda
    e PARA no gate (o Founder sela; C3.1 e a Anciã deliberam)"
  # Bloco E · Operação & Telemetria
  custo:
    gasta_agente: true
    opt_in: true
    fan_out: trio (C3.1 + Sister Anciã + coerência)
  regressao:
    fixture: "ADR de exemplo que supersede outro E passa a tratar PII (rodar sem args)"
    veredito_esperado: "CONDICIONADO + escalada_R3"
  emite_audit: false
  depende_de: []
---

## Comando

`/squad-r2 ARTEFATO` (cole o texto do ADR/Princípio, ou passe o caminho)

- Ex. (inline, recomendado): `/squad-r2` + cole o rascunho do ADR/Princípio.
- Ex. (caminho): `/squad-r2 03-GOVERNANCA/principios/MC-PRINCIPIO-NN-rascunho.md` (relativo à raiz do repo).
- **Sem argumentos:** `/squad-r2` roda o **fixture** de regressão (um ADR de exemplo que supersede outro E passa a tratar PII → deve dar **CONDICIONADO + escalada R3**). Testa o julgamento do rito, não um caso real.

## Escopo — LER ANTES

- É a **cerimônia do rito R2** (cunhagem fundacional): **ADR · Princípio · refactor do CLAUDE.md · mudança de stack**. O R2 é **Founder + C3.1 + Anciã**, e **o Founder sela**. Este motor roda a deliberação do trio e **recomenda** — não decide nem sela.
- **NÃO é** o `/squad-r3` (rito R3 = compliance/OAB/LGPD → Dra. Juliana), nem o `/mc-pre-selagem` (que só *detecta* qual rito o artefato exige + roda mc-lint/sister-ancia), nem o `/mc-dossie-proof-first` (lastro de alegação). Aqui é o **rito R2 executado**.
- **Catraca dura (fail-closed):** se o artefato fundacional **também** toca OAB/LGPD/PII/ANPD/Soberania Individual, o R2 **não basta** — o motor marca `escalada_R3` e a **selagem passa a exigir a Dra. Juliana (R3) ANTES**. Na dúvida, escala.
- **NÃO redige o artefato** (decisão tua: o Founder/C3.1 cunham o texto; o motor estressa e recomenda). **NÃO sela, NÃO escreve no Vault** (ADR-011: só o Code TALÃO escreve, sob *"aprovado para vault"*).
- **Rode numa sessão com raiz no Vault** — é o que torna o agente `sister-ancia` (F2) disponível. Fora dela, a F2 reporta limitação (não finge a deliberação da Anciã).
- **Zona Verde:** o artefato fundacional é doutrina/método. **PII nunca entra em prompt** — se o material tiver PII, o motor marca escalada R3 e não a transcreve.

## Execução

1. Workflow tool com `scriptPath = ".claude/workflows/squad-r2.workflow.js"` — caminho **relativo à raiz do repo** (resolve em sessão local E cloud claude.ai).
2. Se o Founder deu o artefato, passe `args: { artefato_texto }` (inline, **preferido** — cloud-safe) ou `args: { artefato_path, tipo? }`. Sem isso, rode **sem args** (fixture).
3. Fases: **Enquadrar** (tipo + o que muda + supersessão + escalada R3) → **C3.1** (fortalece a tese) → **Anciã** (contraintuição adversarial) → **Coerência** (supersessão + versão) → **Síntese** (veredito).
4. Apresente ao Founder: o **veredito** (PRONTO-PARA-SELAR / CONDICIONADO / VOLTA), **o que corrigir antes de selar**, **mapa de supersessão**, **versão proposta**, **pendências_R2**, e — se marcado — a **escalada R3** (selagem exige Juliana antes). E a `deliberacao` (C3.1 + Anciã + coerência) para auditoria.
5. **NÃO sele.** Selar é ato do Founder (rito R2); se houver escalada R3, a Dra. Juliana entra antes.

## Regras

- **D > C > V lexicográfico:** achado **BLOQUEIA** da Anciã (Dignidade/Compliance) ou incoerência ⇒ **VOLTA**. Não negocia.
- **Escalada R3 é fail-closed:** OAB/LGPD/PII/ANPD ⇒ `escalada_R3=true` ⇒ selagem só depois da Dra. Juliana. Na dúvida, escala.
- **Supersessão com disciplina:** operacionais atualizam **inline**; selados recebem **banner de supersedência**. O motor monta o mapa.
- **Proof-First:** cada achado com `fonte:linha`; sem lastro → `[FONTE PENDENTE]`. Nunca fabricar fonte.
- **Não redige, não sela, não escreve no Vault** (devolve rascunho/recomendação).
- Lastro das fases ↔ rito, escopo e limites: `_LEIA-squad-r2.md`. Irmão: `/squad-r3` (rito R3).
