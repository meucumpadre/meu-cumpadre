---
name: mc-compasso-sweep
status: PROVISIONAL · INSTALADO (PR #14) · cloud-portable (scriptPath repo-relativo) · 2026-06-02
description: >
  Roda a curadoria de fontes sob a MC-RÉGUA-COMPASSO (<5%): abre um tema, finca a
  âncora oficial 🎯 por pilar, caça 🛠️/💎 em leque e aplica REGISTRO×ESCALÃO×JOGADA +
  exclusão dura + âncora cruzada + dedup. Entrega tabela curada + BLOCO DE URLs PURO
  pronto p/ NotebookLM + balotes com motivo. Zona Verde (inteligência de mercado
  PÚBLICA) — zero PII. NÃO injeta no NotebookLM, NÃO sela, NÃO escreve no Vault:
  devolve a colheita no gate humano. NÃO é o motor de espécimens (#45/#46/#47) nem
  o squad-r3 (compliance). Gatilhos: "passar no compasso", "garimpar/curar fontes",
  "abrir escopo <tema>", "colheita NotebookLM", "régua <5%", "bloco de URLs puro".

# ── Registro de Unidades Agênticas (RUA · MC-SPEC-RegistroAgentes-ASE v0.1) ──
# Primeira UA instrumentada (Fase 1). O gerador colhe este bloco. "gerado, não mantido".
rua:
  # Bloco A · Identidade
  id: mc-compasso-sweep
  nome: Compasso Sweep — curadoria de fontes <5%
  tipo: skill
  versao: v0.1
  status: INSTALADO
  data: 2026-06-02
  # Bloco B · Função
  papel: Curadoria por exclusão de fontes públicas sob a MC-RÉGUA-COMPASSO (<5%); entrega pronta p/ NotebookLM
  gatilhos:
    - "/mc-compasso-sweep TEMA | RECORTE"
    - "passar no compasso"
    - "garimpar/curar fontes"
    - "régua <5%"
    - "bloco de URLs puro"
  entrega: tabela curada + BLOCO de URLs puro + balotes com motivo + cobertura por pilar
  metodo_fonte: "MC-RÉGUA-COMPASSO-Metodo-v1_0-2026-0601.md (§1.4 :59-78 · §2 :108-171 · §4 :233-332 · §6.1 :384-399 · §7 :492-516)"
  # Bloco C · Posição na MC-ACI
  instancia_aci: transversal
  camada_ase: L2-L3
  compoe_com: []
  nao_confundir_com:
    - id: mc-especimen-autoevolutivo
      motivo: aquele é motor de método de CASOS (#45/#46/#47); este é curadoria de FONTES
    - id: squad-r3
      motivo: aquele é parecer de COMPLIANCE; este é inteligência de mercado pública
  # Bloco D · Governança (fail-closed)
  gate: R1
  zona: Verde
  lgpd_nota: "Caderno NotebookLM é público (§6.2 :425). CPF/NB/CID/CNIS nunca entram."
  vedacoes_honradas: [Proof-First, Zona-Verde, "D>C>V", Firewall-OAB]
  para_no_gate: "true — NÃO injeta no NotebookLM, NÃO sela, NÃO escreve no Vault; devolve a colheita ao Founder"
  # Bloco E · Operação & Telemetria
  custo:
    gasta_agente: true
    opt_in: true
    fan_out: "N (1 caçador por pilar, em paralelo)"
  regressao:
    fixture: "golden fixture WhatsApp Cloud API (rodar sem args)"
    veredito_esperado: "2 admitidas + 4 balotes → regressao_fixture.veredito = PASSOU"
  emite_audit: false
  depende_de: [WebSearch, WebFetch, "Workflow tool"]
---

## Comando

`/mc-compasso-sweep TEMA | RECORTE`

- Ex.: `/mc-compasso-sweep Claude Cowork / multi-agent 2026 | só oficial Anthropic + ensina-fazendo, recorte 2026`
- **Sem argumentos:** `/mc-compasso-sweep` roda o **golden fixture** (regressão da régua — testa o julgamento, não a busca).

## Escopo — LER ANTES (Zona Verde · fonte pública · NÃO injeta sozinho)

- Curadoria de **inteligência de mercado PÚBLICA** (ecossistema Anthropic/IA, docs, padrões). **NÃO** toca caso de cliente nem PII — o caderno NotebookLM é público (§6.2 :425). CPF/NB/CID/CNIS **nunca** entram.
- O workflow **cura e entrega** a colheita pronta pra colar; quem **injeta** no NotebookLM e **canoniza** no Vault é o Founder, sob gate (§6.3/§7).
- Para estressar política/preço/cláusula do MC → `/squad-r3`. Para evoluir método de caso → `/mc-especimen-autoevolutivo`. **Este é só curadoria de fontes.**

## Execução

1. Chame a ferramenta **Workflow** com `scriptPath = ".claude/workflows/mc-compasso-sweep.workflow.js"` — caminho **relativo à raiz do repo**, resolve em sessão **local E cloud** (NÃO use caminho absoluto `G:\…`, que não existe no sandbox cloud claude.ai).
2. Se o Founder deu `TEMA | RECORTE`, passe `args: { tema, recorte }` (opcional `escalao_ancora`, `pilares`). Sem isso, rode **sem args** (fixture).
3. Fases: **Escopo** (K1-K8) → **Caça** (fan-out por pilar: 🎯 + 🛠️/💎, paralelo) → **Compasso** (régua <5% + dedup + split + BLOCO URLs).
4. Apresente ao Founder: `tabela_md`, `bloco_urls_puro`, `balotes` (com motivo), `cobertura_por_pilar`, e a `regressao_fixture` (se rodou sem args).
5. **NÃO injete no NotebookLM e NÃO sele** — é gate humano.

## Regras

- **Proof-First:** toda fonte com URL+data; sem rastro → `[CONFERIR]`; nunca inventar fonte/view/data (§2.4).
- **Exclusão dura > acúmulo:** na dúvida, corta — falso-positivo custa mais que falso-negativo (§2.2 :133).
- **Âncora cruzada:** 🛠️/💎 sem 🎯 = balote órfão (§2.3).
- **D > C > V** · **Zona Verde** (sem PII).
- Lastro do método (fonte:linha) e limites: `_LEIA-mc-compasso-sweep.md`. Método-fonte: `MC-RÉGUA-COMPASSO-Metodo-v1_0-2026-0601.md`.
