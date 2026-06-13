---
name: mc-especimen-autoevolutivo
status: PROVISIONAL · INSTALADO (PR #14) · cloud-portable (Template-Mestre inline) · 2026-06-02
description: >
  Roda o MOTOR ESPÉCIMEN AUTO-EVOLUTIVO (#45 Diamante Bifronte + #46 Engenharia
  Reversa + #47 DNA Precede Ato) sobre UM espécimen já de-identificado: instancia
  do Template-Mestre vN, captura a Trilha B, faz engenharia reversa com triagem
  ouro/meio-termo/pirita, diffa contra o template, roda REGRESSÃO no golden fixture
  Hib001 e propõe upgrade vN→vN+1 + nota de catálogo. Opera SÓ no método/Zona Verde
  (Firewall OAB) — PII de cliente NUNCA entra (vive no C1 sob gate R3). NÃO sela e
  NÃO escreve no Vault: devolve rascunhos e para no gate humano (Founder + Dra.
  Juliana). NÃO serve para a tese jurídica do caso de um cidadão (atividade-fim da
  advogada). Frases-gatilho: "espécimen auto-evolutivo", "rodar o motor #45/#46/#47",
  "engenharia reversa do espécimen", "extrair diamantes da Trilha B", "diff do
  template-mestre", "regressão Hib001", "subir o template de versão", "triagem
  ouro/meio-termo/pirita".
rua:
  id: mc-especimen-autoevolutivo
  nome: Motor Espécimen Auto-Evolutivo (#45/#46/#47)
  tipo: skill
  versao: vN
  status: INSTALADO
  papel: Engenharia reversa de UM espécimen de-identificado + diff do template-mestre
    + regressão Hib001 + proposta upgrade vN→vN+1
  gatilhos:
  - /mc-especimen-autoevolutivo
  - espécimen auto-evolutivo
  - 'motor #45/#46/#47'
  - regressão Hib001
  - diff do template-mestre
  entrega: 'rascunhos: Trilha B + diff + regressão + proposta de upgrade + nota de
    catálogo'
  metodo_fonte: 'Princípios #45 Diamante Bifronte · #46 Eng. Reversa · #47 DNA Precede
    Ato · golden fixture Hib001'
  instancia_aci: transversal
  camada_ase: L2-L3
  compoe_com: []
  nao_confundir_com:
  - id: mc-compasso-sweep
    motivo: aquele é curadoria de FONTES; este é motor de método de CASOS
  - id: squad-r3
    motivo: aquele é parecer de COMPLIANCE; este evolui o método do caso
  gate: R3
  zona: Verde
  lgpd_nota: opera SÓ no método/Zona Verde (Firewall OAB) · PII de cliente NUNCA entra
    (vive no C1 sob R3)
  vedacoes_honradas:
  - Firewall-OAB
  - Proof-First
  - Zona-Verde
  - D>C>V
  para_no_gate: NÃO sela, NÃO escreve no Vault · gate humano Founder + Dra. Juliana
    (R3)
  custo:
    gasta_agente: true
    opt_in: true
    fan_out: por fase do motor
  emite_audit: false
  depende_de: []
---

## Comando

`/mc-especimen-autoevolutivo CASO | PASTA-DO-ESPÉCIMEN-DE-IDENTIFICADO`

- Exemplo: `/mc-especimen-autoevolutivo CLR001 (de-identificado) | <pasta-no-repo>/CLR001-ZonaVerde` — caminho **relativo à raiz do repo** (cloud não alcança o C1 `G:\…`); a pasta deve conter **só material de-identificado** (Zona Verde).
- **Sem argumentos:** `/mc-especimen-autoevolutivo` roda o **golden fixture Hib001** como teste de regressão do próprio motor (golden master).

## Escopo — LER ANTES (método/Zona Verde, **não** atividade-fim, **não** PII)

Este motor opera a **Trilha B** (#45) — o método replicável que cada caso ensina. É **atividade-MEIO** (CNAE 6201-5/01): organiza, generaliza e versiona método. **NÃO** produz tese jurídica, petição ou parecer do caso de um cidadão — isso é **atividade-fim privativa da advogada parceira** (Lei 8.906/94 art. 1º; Firewall OAB).

- **PII jamais entra.** O motor recebe apenas material **de-identificado** (Trilha B / método já de-identificado + Template-Mestre Zona Verde). Nome civil, CPF, NIT, NB, protocolo, CID, endereço **vivem no C1 sob gate R3 (Dra. Juliana)** e são proibidos em prompt de agente — **inclusive o Catálogo C1-17** (apesar do nome, é arquivo de Camada 1 com CPF/NB): o motor **não o abre**; a estrutura canônica já vem do Template-Mestre (ERRATA-001). Se a pasta de entrada contiver PII, o motor marca `pii_detectada=true` e aborta o trecho (fail-closed).
- **Compliance MC ≠ caso de cliente.** Para estressar uma política/preço/cláusula do MC, use o `/squad-r3` (parecer adversarial R3). Este motor é o **loop de auto-evolução do método**, não um parecer de compliance.

## Execução

1. Chame a ferramenta **Workflow** com `scriptPath = ".claude/workflows/mc-especimen-autoevolutivo.workflow.js"` — caminho **relativo à raiz do repo** (resolve em sessão local E cloud claude.ai). O Template-Mestre vem **inline** no `.js`; o motor **não** depende do C1.
2. Se o usuário deu `CASO | PASTA` depois do comando, passe `args: { caso, especimen_pasta }` (opcional `versao_template`). Sem isso, rode **sem args** (golden fixture Hib001).
3. O motor executa Instanciar (Explore) → Captura bifronte (Explore) → Engenharia reversa #46 → Diff + Regressão Hib001 → Upgrade, e **para no gate humano**.
4. Apresente ao humano: o **resultado da regressão Hib001** (PASSOU / REPROVADO), o **diff**, a **proposta de upgrade vN→vN+1** (mudanças aprovadas vs. rejeitados-staging), a **nota de catálogo** e as **pendências_R3**.
5. **NÃO sele e NÃO escreva nada no Vault.** A decisão é humana (Founder valida derivações; Dra. Juliana valida PII/OAB/LGPD). A persistência/instalação só ocorre após o aval.

## Regras

- O motor **extrai, tria, diffa e testa regressão**; **não decide e não sela** (fail-closed).
- **Firewall OAB:** opera só no método/Zona Verde; PII no C1 sob gate R3; atividade-fim 100% da advogada.
- **Regressão é piso, não adorno:** se a regressão Hib001 dá `REPROVADO`, o upgrade NÃO sobe — volta ao staging (caos #54), mesmo que pareça uma melhora.
- **Promoção (§4.2):** um diff só vira upgrade se for promovível (≥2 casos OU estruturalmente novo) + passar os 3 filtros estéticos (Zilda-STF · Provérbios 31:8 · Inovação Redentora) + ter lastro Proof-First + não quebrar a regressão.
- **Proof-First:** toda saída cita fonte:linha; sem lastro → `[GATE]` / `[FONTE PENDENTE]`.
- **D > C > V** lexicográfico.
- Lastro das 5 lacunas fechadas, escopo e limites: `.claude/workflows/_LEIA-mc-especimen-autoevolutivo.md`.
- Blueprint-fonte (editável no C1): `MC-SISTEMA-Template-Especimen-AutoEvolutivo-v1_0-PROVISIONAL-2026-0602.md` — o `.js` carrega um **snapshot inline** dele (Zona Verde, de-identificado); re-inlinar quando a fonte mudar.
