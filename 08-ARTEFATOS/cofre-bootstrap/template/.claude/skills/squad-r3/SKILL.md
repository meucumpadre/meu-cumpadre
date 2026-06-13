---
name: squad-r3
description: >
  Roda o Squad Causal R3 — produção de PARECER de compliance com TESTE ADVERSARIAL
  (Zilda-STF) sobre uma POLÍTICA, PREÇO, CLÁUSULA ou PRODUTO do Meu Cumpadre. É o
  R3 atuando como parecerista de COMPLIANCE/OAB do próprio MC (autorregulação — o
  MC é o cliente). Pipeline: Coletor→Tesista→Red-Team→Cascata D→C→V→Escriba, parando
  no Gate R3 humano (NÃO sela). NÃO serve para análise jurídica do caso de um cidadão
  (isso é Router-Ethics → Rota C → Marketplace → advogada). Frases-gatilho:
  "squad r3", "rodar o squad", "parecer adversarial", "teste adversarial nessa
  política/preço/cláusula", "isso é admissível?", "isso fere o firewall/compliance?".
rua:
  id: squad-r3
  nome: Squad Causal R3 (parecer de compliance MC)
  tipo: skill
  versao: n/d
  status: INSTALADO
  papel: Parecer de compliance/OAB do próprio MC (autorregulação) com teste adversarial
    Zilda-STF sobre política/preço/cláusula/produto
  gatilhos:
  - /squad-r3
  - squad r3
  - parecer adversarial
  - isso fere o firewall/compliance?
  entrega: parecer adversarial (Coletor→Tesista→Red-Team→Cascata D→C→V→Escriba) parando
    no Gate R3
  metodo_fonte: Cascata D>C>V · Teste Zilda-STF · Router-Ethics
  instancia_aci: C3.1
  camada_ase: L4
  compoe_com:
  - squad-r3-pipeline
  - squad-r3-redteam-core
  nao_confundir_com:
  - id: mc-pre-selagem
    motivo: aquele é gate de qualidade de artefato; este é parecer de compliance de
      política/preço
  - id: meu-cumpadre-orquestrador-mestre
    motivo: NÃO serve p/ análise jurídica do caso de um cidadão (isso é Router-Ethics→Rota
      C→advogada)
  gate: R3
  zona: Verde
  lgpd_nota: autorregulação do MC (política/preço/cláusula) · NÃO é caso de cidadão
    · sem PII
  vedacoes_honradas:
  - Firewall-OAB
  - D>C>V
  - Proof-First
  - Zilda-STF
  para_no_gate: para no Gate R3 humano · NÃO sela
  custo:
    gasta_agente: true
    opt_in: true
    fan_out: pipeline (5 papéis)
  emite_audit: false
  depende_de: []
---

## Comando

`/squad-r3 PERGUNTA | PASTA-DO-DOSSIÊ`

- Exemplo: `/squad-r3 O Φ₄ Guardião pode cobrar mensalidade de quem está no CadÚnico? | G:\Meu Drive\...\avaliacao-guardiao-cadunico`
- Sem argumentos: `/squad-r3` roda o caso-fixture (success fee Φ₀) como teste de regressão do squad.

## Escopo — LER ANTES (R3 × MC, **não** R3 × cliente)

Este squad é para **R3 como parecerista de COMPLIANCE do próprio MC**: o "cliente" é o MC e suas regras (preço, cláusula, política, produto). Pergunta típica: *"isso é admissível / fere o firewall?"*.

**NÃO use para a análise jurídica do caso de um cidadão.** Caso de cliente flui por outra máquina: **Router-Ethics v11 (cascata D→C→V sobre o caso) → Rota C → Marketplace → advogada (atividade-fim)**, por escolha livre do cidadão. Produzir a tese jurídica do caso de um cidadão é atividade-FIM (privativa da advocacia) e **violaria o firewall meio↔fim**. O squad opera só do lado MEIO (MC como seu próprio cliente).

> Overlap permitido (bem cercado): o Red-Team Zilda-STF pode auditar materiais do **próprio MC** (scripts de atendimento, comunicação, templates de dossiê) quanto a linguagem predatória / dignidade — ainda é MC-como-cliente. **Nunca** julgar o mérito jurídico do caso do cidadão.

## Execução

1. Chame a ferramenta **Workflow** com:
   `scriptPath = "G:\Meu Drive\0.1_MEU_CUMPADRE\0 0 Gestão Software\OBSIDIAN\MEU CUMPADRE\.claude\workflows\squad-r3-pipeline.js"`
2. Se o usuário deu `PERGUNTA | PASTA` depois do comando, passe `args: { pergunta, pasta }`. Sem isso, rode **sem args** (fixture Φ₀).
3. O pipeline executa Coletor (Explore) → Tesista → [engine adversarial validado] → Escriba e **para no Gate R3**.
4. Apresente ao humano: o **veredito da cascata** (ADMISSIVEL / CONDICIONADO-C / CONDICIONADO-D / HALT), o **componente a reprovar** (se houver), e os **rascunhos devolvidos** (parecer, errata se necessária, 2 redações de core).
5. **NÃO sele e NÃO escreva nada no Vault.** A decisão R3 é humana (Dra. Juliana / Founder). A persistência (papel Curador, fase 6) só ocorre após o aval.

## Regras
- O squad **organiza e estressa**; **não decide e não sela** (fail-closed).
- **NUNCA** produzir tese jurídica do caso de um cidadão — atividade-fim da advogada (Firewall OAB).
- Dignidade é **lexicográfica**: se a cascata dá `HALT` ou `CONDICIONADO-D`, o caminho permissivo não pode ser selado sem resolver a camada D.
- Vedação de success fee no **Φ₁** é inviolável e não-analogizável.
- Engine adversarial validado: `.claude/workflows/squad-r3-redteam-core.js` (baseline de regressão na SPEC §6).
- Desenho completo, lições e escopo: `Documentação/avaliacao-juridica-successfee-cadunico/MC-SPEC-SquadCausal-R3-ParecerAdversarial-v0_1-PROVISIONAL`.
