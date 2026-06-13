---
name: mc-strategic-intelligence
status: PROVISIONAL · INSTALADO · cloud-portable (paths repo-relativos) · 2026-06-06
description: >
  Orquestrador de INTELIGÊNCIA ESTRATÉGICA do Meu Cumpadre. Recebe um tema/pergunta
  do Founder, cura fontes (prioriza YouTube · aceita PDF/texto), envia ao NotebookLM
  (notebooklm-py CLI) para análise profunda, e estrutura a colheita em Markdown padrão
  MC — Proof-First (fonte+data+URL/hash), scores Router-Ethics 11.0 quando fizer
  sentido, conexões com as 9 verticais Skybridge, e um entregável útil (resumo
  executivo / infográfico / análise técnica). Salva na MESA DE TRABALHO (Cérebro 1)
  em Research/ · Intelligence/ · Flywheel-Inputs/, e PROPÕE como o conhecimento vira
  insumo do Proprietary Data Flywheel (MoR de-identificado) e artefato Pipefy/SoR.
  Zona Verde (inteligência de mercado PÚBLICA) — ZERO PII (CPF/NB/CID/CNIS nunca vão
  ao NotebookLM/Google-US). Alimenta o Flywheel/MoR (método DE-IDENTIFICADO) — NÃO é
  o SoR do cidadão (PII · stack soberana). NÃO sela em Cérebro 2 nem edita o CLAUDE.md
  sozinho (R2): PARA no gate humano. Gatilhos: "inteligência estratégica",
  "mc-strategic-intelligence", "pesquisar tema estratégico", "analisar no NotebookLM",
  "insumo pro Flywheel", "briefing estratégico", "research → NotebookLM → vault".
rua:
  # Bloco A · Identidade
  id: mc-strategic-intelligence
  nome: Strategic Intelligence — orquestrador research → NotebookLM → mesa de trabalho
  tipo: skill
  versao: v0.1
  status: INSTALADO
  data: 2026-06-06
  # Bloco B · Função
  papel: Orquestra pesquisa + análise NotebookLM + estruturação Markdown padrão MC; gera
    insumo de alta qualidade pro Proprietary Data Flywheel (MoR) e pra governança (GHS-Pipefy)
  gatilhos:
    - "/mc-strategic-intelligence TEMA | RECORTE"
    - "inteligência estratégica"
    - "pesquisar tema estratégico"
    - "analisar no NotebookLM"
    - "insumo pro Flywheel"
    - "briefing estratégico"
  entrega: Brief de Inteligência (Markdown MC) + bloco Flywheel/MoR + conexões Skybridge
    + sugestão de artefato Pipefy/SoR + arquivos salvos na mesa de trabalho (Cérebro 1)
  metodo_fonte: "MC-INFRA-NotebookLM-CLI-v1_0-2026-0406.md · Router-Ethics 11.0
    (_MC-RouterEthics_11_v1_1-2026-0505-CLevel) · ADR-011 (3 Cérebros) · MC-SOR v0.1 ×
    MoR (disrupter-escala-zilda) · Proof-First (CLAUDE.md §4)"
  # Bloco C · Posição na MC-ACI
  instancia_aci: transversal
  camada_ase: L2-L4
  compoe_com:
    - mc-compasso-sweep      # curadoria de fontes <5% (entrada upstream)
    - mc-dossie-proof-first  # lastro de alegações de Zona Verde (downstream opcional)
    - deep-research          # fan-out web quando o tema pede varredura multi-fonte
  nao_confundir_com:
    - id: MC-SOR (System of Record do cidadão)
      motivo: o SoR guarda PII do hipervulnerável em stack soberana; ESTA skill alimenta o
        Flywheel/MoR (método DE-IDENTIFICADO, Zona Verde) — nunca ingere PII
    - id: mc-compasso-sweep
      motivo: aquele só CURA fontes (régua <5%) e para; este orquestra fonte→NotebookLM→análise→Markdown
    - id: squad-r3
      motivo: aquele é parecer de COMPLIANCE/OAB; este é inteligência de mercado pública
  # Bloco D · Governança (fail-closed)
  gate: R1
  zona: Verde
  lgpd_nota: "NotebookLM = Google US, fora do perímetro Llama BR. CPF/NB/CID/CNIS e PII não
    anonimizada NUNCA viram source. Caso real → de-identificar antes (prefixo CASE-)."
  vedacoes_honradas: [Proof-First, Zona-Verde, "D>C>V", Firewall-OAB, LGPD]
  para_no_gate: "true — salva em Cérebro 1 (mesa de trabalho); NÃO sela em Cérebro 2 sem
    'aprovado para vault'; NÃO edita o CLAUDE.md sozinho (R2) — PROPÕE e para no gate"
  # Bloco E · Operação & Telemetria
  custo:
    gasta_agente: true
    opt_in: true
    fan_out: "N (1 pesquisador por eixo do recorte) + 1 NotebookLM por caderno"
  regressao:
    fixture: "sem args → roda o fixture 'NTEP CID-CNAE' (testa o pipeline de estruturação, não a rede)"
    veredito_esperado: "Brief estruturado + bloco Flywheel + conexão Skybridge Saúde/Trabalhista"
  emite_audit: false
  depende_de: [WebSearch, WebFetch, "notebooklm-py CLI (Bash)", deep-research, mc-compasso-sweep]
---

## Comando

`/mc-strategic-intelligence TEMA | RECORTE`

- Ex.: `/mc-strategic-intelligence Reversão B31→B91 via NTEP — janela de mercado 2026 | só fonte pública, prioriza YouTube de peritos/advogados previdenciários + docs INSS/TCU`
- **Fontes diretas:** pode colar URLs de YouTube, caminhos de PDF (`./doc.pdf`) ou texto. A skill prioriza **YouTube**, mas aceita PDF e texto.
- **Sem argumentos:** `/mc-strategic-intelligence` roda o **fixture** (`NTEP CID-CNAE`) — regressão do pipeline de estruturação (não testa a rede).

## Escopo — LER ANTES (Zona Verde · fonte PÚBLICA · para no gate)

- Produz **inteligência estratégica de mercado/método PÚBLICA** (ecossistema previdenciário, IA, regulação, concorrência, doutrina). **NÃO** toca caso de cidadão nem PII.
- **Firewall NotebookLM/LGPD:** o NotebookLM roda em Google US, **fora** do perímetro soberano Llama BR. CPF/NB/CID/CNIS, senhas gov.br e PII não-anonimizada **nunca** viram source. Caso real → de-identificar **antes** (convenção `CASE-`, ver `MC-INFRA-NotebookLM-CLI`).
- **Alimenta o Flywheel/MoR** (Method-of-Record · aprendizado de método **DE-IDENTIFICADO**) — *não confundir* com o **SoR** do cidadão (PII · stack soberana · `MC-SOR-MemoriaSystemOfRecord`).
- **NÃO sela em Cérebro 2** (memória canônica) sem "aprovado para vault" (ADR-011) e **NÃO edita o CLAUDE.md sozinho** — refactor do manual é R2 (Founder + C3.1 + Anciã). Devolve no gate humano.

## Execução (7 fases — qualidade > velocidade)

1. **Enquadrar (F0).** Receba `TEMA | RECORTE`. Classifique o eixo estratégico (vertical Skybridge âncora, camada do ecossistema, horizonte). **Fail-closed:** se o tema arrastar PII/caso real → PARE e peça de-identificação. Se tocar OAB/LGPD/ANPD → marque escalada **R3** (Dra. Juliana) antes de qualquer canonização.
2. **Curar fontes (F1).** Priorize **YouTube** (peritos, advogados, audiências, canais oficiais), depois PDF/texto/web. Para varredura ampla, delegue à skill **`deep-research`**; para curadoria sob régua <5% + BLOCO de URLs puro, delegue à **`mc-compasso-sweep`**. Toda fonte com **URL + data + autor** (Proof-First); sem rastro → `[FONTE PENDENTE]`.
3. **Ingerir no NotebookLM (F2).** Via `notebooklm-py` CLI (ver `NOTEBOOKLM-RECIPES.md`): crie/selecione caderno com prefixo correto (`MC-`/`TECH-`), adicione as sources (`source add`, `source add` de YouTube/PDF, `source add-research --mode deep`), aguarde indexação (`source wait`).
4. **Análise profunda (F3).** Peça ao NotebookLM (`ask --json` p/ citações + `generate`): **(a)** análise estruturada; **(b)** insights para o **Flywheel/MoR · SoR · Router-Ethics 11.0**; **(c)** conexões com as **9 verticais Skybridge** (Previdenciário âncora → Saúde, Bancário, Rural, Cartório, Telemedicina, Consumidor, Trabalhista, Sucessório); **(d)** um **entregável** (resumo executivo `generate report`, infográfico `generate infographic`, ou análise técnica). Prompts prontos em `NOTEBOOKLM-RECIPES.md`.
5. **Estruturar Markdown MC (F4).** Monte o **Brief de Inteligência** com o `TEMPLATE-Intelligence-Brief.md`: Proof-First (cada claim com fonte:URL+data, estado ✅/⚠️/❌, `[FONTE PENDENTE]` p/ lacunas), **scores Router-Ethics** quando fizer sentido (Confidence Verde≥70/Amarela40-70/Vermelha<40 · Complexity · Fraudscore), linguagem **D > C > V**, e o **Teste Zilda-STF** (legível p/ Dona Zilda *e* ministro do STF).
6. **Salvar na mesa de trabalho (F5).** Grave em **Cérebro 1** (escrita livre, ADR-011) sob `Documentação/Intelligence/<AAAA-MMDD>-<slug>/` nas pastas: `Research/` (fontes + transcrições/colheita), `Intelligence/` (o Brief estruturado), `Flywheel-Inputs/` (o destilado de-identificado pro MoR). Nome do arquivo: `MC-INTEL-<Descriptor>-v1_0-<AAAA-MMDD>.md`. **NÃO** escreva em Cérebro 2 (Vault canônico) — isso é gate "aprovado para vault".
7. **Fechar o loop de governança (F6).** Sempre responda: *como isto alimenta o Flywheel/MoR ou a governança (GHS-Pipefy)?* Sugira o **artefato** (card Pipefy, registro SoR de-identificado, ADR candidato). Se detectar **padrão recorrente** de análise ou preferência do Founder → **PROPONHA** o patch do `CLAUDE.md` (diff sugerido) e **pare no gate R2** — não edite sozinho.

## Regras

- **Proof-First:** zero dado fabricado · fonte = URL + data + autor (+ SHA-256 se arquivo) · Gemini/LLM fabrica → cross-referenciar · lacuna → `[FONTE PENDENTE]`.
- **Rastreabilidade:** todo Brief carrega a procedência (fonte + data + contexto do recorte) e o `notebook_id` do caderno NotebookLM usado.
- **Zona Verde · ZERO PII:** nada de CPF/NB/CID/CNIS/senha gov.br no NotebookLM. PII → `[GATE R3]`, não transcreve.
- **Flywheel = MoR de-identificado** ≠ **SoR (PII)** — o `Flywheel-Inputs/` guarda método/padrão, nunca dado pessoal.
- **D > C > V** · **Firewall OAB** (atividade-meio · zero conclusão jurídica/promessa de resultado) · **Teste Zilda-STF**.
- **Gate (ADR-011):** mesa de trabalho = livre; Vault canônico = "aprovado para vault"; CLAUDE.md = R2; OAB/LGPD/ANPD = R3. A skill **propõe e para**.
- Receitas CLI + prompts NotebookLM: `NOTEBOOKLM-RECIPES.md`. Template do entregável: `TEMPLATE-Intelligence-Brief.md`.
