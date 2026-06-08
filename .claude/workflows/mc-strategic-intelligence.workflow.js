/**
 * ════════════════════════════════════════════════════════════════════════════
 *  MC-WORKFLOW · STRATEGIC INTELLIGENCE  ·  research → NotebookLM → Brief MC → mesa
 *  v0.1 PROVISIONAL · RASCUNHO · 2026-06-06 · drop zone (instalação no .claude/ = gate)
 * ════════════════════════════════════════════════════════════════════════════
 *
 *  ESCOPO  Dado um TEMA | RECORTE (e opcionalmente URLs/PDFs), orquestra inteligência
 *  estratégica: cura fontes (prioriza YouTube · aceita PDF/texto), ingere no NotebookLM
 *  (notebooklm-py CLI), pede análise profunda (estruturada · Flywheel/SoR/Router-Ethics
 *  · conexões Skybridge · entregável), e ESTRUTURA em Brief Markdown padrão MC
 *  (Proof-First · scores Router-Ethics 11.0 · Teste Zilda-STF · D>C>V). Salva na MESA
 *  DE TRABALHO (Cérebro 1: Documentação/Intelligence/<data>-<slug>/) e PROPÕE o artefato
 *  de governança (Pipefy/SoR/ADR). PARA no gate humano.
 *
 *  ALIMENTA o Proprietary Data Flywheel / MoR (Method-of-Record · DE-IDENTIFICADO).
 *  NÃO é o SoR do cidadão (PII · stack soberana) — não confundir (disrupter-escala-zilda:31).
 *
 *  GOVERNANÇA (fail-closed · D > C > V)
 *   · Zona Verde: NotebookLM = Google US (fora do perímetro Llama BR). NUNCA ingere PII
 *     (CPF/NB/CID/CNIS/senha gov.br). Fonte com PII → [GATE R3], de-identificar antes.
 *   · Proof-First: fonte = URL + data + autor (+ SHA-256 se arquivo); lacuna → [FONTE PENDENTE];
 *     nada fabricado (Gemini/LLM alucina → cross-referenciar).
 *   · ADR-011: escreve SÓ na mesa de trabalho (Cérebro 1). NÃO sela no Vault canônico
 *     (Cérebro 2) — isso é "aprovado para vault". NÃO edita o CLAUDE.md (R2): PROPÕE e para.
 *   · Firewall OAB: organiza inteligência de mercado (meio), não conclui juridicamente (fim).
 *
 *  LASTRO (peças reais)
 *   NotebookLM CLI (create/source/ask/generate/firewall) . 02-ARQUITETURA/MC-INFRA-NotebookLM-CLI-v1_0-2026-0406.md
 *   9 verticais Skybridge (Previdenciário âncora) ........ MC-PRODUTO-JornadaEcossistema-v2_0-2026-0503.md :248-264
 *   Router-Ethics 11.0 (Confidence/Complexity/Fraudscore)  _MC-RouterEthics_11_v1_1-2026-0505-CLevel.md
 *   Flywheel/MoR DE-IDENTIFICADO (≠ SoR) ................. Squad-Evolutivo/agents/disrupter-escala-zilda.md :31,51,59
 *   3 Cérebros / gate de escrita no Vault ................ ADR-011 (CLAUDE.md "Arquitetura 3 Cérebros")
 *
 *  REGRAS DO RUNTIME: Date.now()/Math.random()/new Date() NÃO existem (quebram resume) —
 *  varie por índice; timestamps via args. meta é literal puro.
 * ════════════════════════════════════════════════════════════════════════════
 */

export const meta = {
  name: 'mc-strategic-intelligence',
  description: 'Orquestrador de inteligência estratégica MC: cura fontes (prioriza YouTube · aceita PDF/texto) → ingere no NotebookLM (notebooklm-py) → análise profunda (estruturada · Flywheel/SoR/Router-Ethics · Skybridge · entregável) → Brief Markdown padrão MC (Proof-First · Router-Ethics 11.0 · Zilda-STF · D>C>V). Salva na mesa de trabalho (Cérebro 1) e propõe artefato de governança (Pipefy/SoR/ADR). Zona Verde · ZERO PII (NotebookLM=Google US). Alimenta o Flywheel/MoR DE-IDENTIFICADO — não é o SoR do cidadão. Sem args = fixture NTEP CID-CNAE (regressão da estruturação). NÃO sela no Vault, NÃO edita o CLAUDE.md (R2): para no gate.',
  phases: [
    { title: 'Enquadrar', detail: 'classifica eixo estratégico + vertical Skybridge âncora; firewall fail-closed (PII→pára; OAB/LGPD/ANPD→flag R3)' },
    { title: 'Curar', detail: 'cura fontes (prioriza YouTube · PDF/texto/web) com URL+data+autor (Proof-First); lacuna → [FONTE PENDENTE]' },
    { title: 'NotebookLM', detail: 'cria/seleciona caderno (prefixo MC-/TECH-), ingere sources, aguarda indexação · ZERO PII (Google US)' },
    { title: 'Analisar', detail: 'pede ao NotebookLM (paralelo): análise estruturada + insights Flywheel/SoR/Router-Ethics + conexões Skybridge + entregável' },
    { title: 'Estruturar', detail: 'monta o Brief MC: Proof-First (✅/⚠️/❌) + scores Router-Ethics + Skybridge + insumo Flywheel/MoR + Zilda-STF' },
    { title: 'Mesa+Governança', detail: 'salva em Cérebro 1 (Documentação/Intelligence/) + propõe artefato Pipefy/SoR/ADR · STOP no gate (não sela, não edita CLAUDE.md)' },
  ],
}

// ── Fixture (regressão da estruturação · NÃO testa a rede) ───────────────────
const FIXTURE = {
  isFixture: true,
  tema: 'Reversão B31→B91 via NTEP (Nexo Técnico Epidemiológico) — janela de mercado 2026',
  recorte: 'só fonte pública · prioriza YouTube de peritos/advogados previdenciários + docs INSS/TCU',
  fontes_diretas: [],
  vertical_ancora: 'Previdenciário (âncora) → Saúde + Trabalhista',
  // sementes Proof-First com lastro INTERNO real (Zona Verde) + lacunas honestas
  claims_seed: [
    { afirmacao: 'B31→B91 via NTEP cruza CID do laudo × CNAE da empresa; divergência = peça de reversão (FGTS + estabilidade 12m + regressiva).',
      fonte: 'MC-PRODUTO-JornadaEcossistema-v2_0-2026-0503.md:264 (interno)', estado_esperado: 'verificado' },
    { afirmacao: 'B31/B91 têm janela DIB de 30 dias (Art. 60 §1º Lei 8.213/91); após, DIB=DER → SLA 24h.',
      fonte: 'CLAUDE.md Regra 7 (DIB Urgency)', estado_esperado: 'verificado' },
    { afirmacao: 'Volume de mercado de B31 com CID×CNAE divergente elegíveis a reversão (Brasil 2025-2026).',
      fonte: '[FONTE PENDENTE]', estado_esperado: 'nao-verificado' },
  ],
  data: '2026-0606',
}

const ts = (args && args.data) ? String(args.data) : '0000-0000'
const INPUT = (args && (args.tema || args.fontes_diretas))
  ? {
      isFixture: false,
      tema: args.tema || '(derivar das fontes diretas)',
      recorte: args.recorte || 'fonte pública · prioriza YouTube',
      fontes_diretas: args.fontes_diretas || [],
      vertical_ancora: args.vertical_ancora || null,
      claims_seed: null,
      data: ts,
    }
  : FIXTURE

const slug = (INPUT.tema || 'tema').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 48)
const MESA = `Documentação/Intelligence/${INPUT.data}-${slug}`

// ───────────────────────── FASE 0 — ENQUADRAR ─────────────────────────
phase('Enquadrar')
log(`Strategic Intelligence · ${INPUT.isFixture ? 'FIXTURE (regressão da estruturação)' : INPUT.tema}`)
log(`Mesa de trabalho (Cérebro 1): ${MESA}/  · Research/ · Intelligence/ · Flywheel-Inputs/`)

const ENQ_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    eixo_estrategico: { type: 'string', description: 'a tese/pergunta central, em uma frase' },
    vertical_ancora: { type: 'string', description: 'qual das 9 verticais Skybridge é o ponto de entrada' },
    pii_risk: { type: 'boolean', description: 'true se o tema arrasta PII/caso real → PARAR e pedir de-identificação' },
    escalada_r3: { type: 'boolean', description: 'true se toca OAB/LGPD/ANPD → flag R3 (Dra. Juliana) antes de canonizar' },
    eixos_pesquisa: { type: 'array', items: { type: 'string' }, description: '2-5 eixos para fan-out de curadoria de fontes' },
  },
  required: ['eixo_estrategico', 'vertical_ancora', 'pii_risk', 'escalada_r3', 'eixos_pesquisa'],
}

let enq
if (INPUT.isFixture) {
  enq = { eixo_estrategico: 'Janela 2026 da reversão B31→B91 via NTEP como produto de passarela atividade-meio',
    vertical_ancora: 'Previdenciário → Saúde + Trabalhista', pii_risk: false, escalada_r3: false,
    eixos_pesquisa: ['mecânica NTEP CID×CNAE', 'reversão administrativa vs judicial', 'tamanho de mercado / volume B31'] }
} else {
  enq = await agent(
    `Você é o ENQUADRADOR de inteligência estratégica do Meu Cumpadre. Tema: "${INPUT.tema}". Recorte: "${INPUT.recorte}".\n\nClassifique: (a) o eixo estratégico (tese central em uma frase); (b) a vertical Skybridge âncora entre as 9 (Previdenciário[âncora], Saúde, Bancário, Rural, Cartório, Telemedicina, Consumidor, Trabalhista, Sucessório); (c) eixos_pesquisa para fan-out de curadoria.\n\nFIREWALL fail-closed: se o tema arrasta PII/caso de cidadão real → pii_risk=true. Se toca OAB/LGPD/ANPD → escalada_r3=true. Retorne SOMENTE via schema.`,
    { agentType: 'Explore', label: 'enquadrador', phase: 'Enquadrar', schema: ENQ_SCHEMA }
  )
}
if (enq.pii_risk) {
  return { tema: INPUT.tema, modo: 'ABORTADO', gate: 'PII/caso real detectado no tema. Zona Verde apenas — de-identifique antes (convenção CASE-) e reenvie. Nada foi ao NotebookLM.', enquadramento: enq }
}

// ───────────────────── FASE 1 — CURAR FONTES (fan-out · prioriza YouTube) ─────────────────────
phase('Curar')

const CURAR_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    eixo: { type: 'string' },
    fontes: {
      type: 'array',
      items: {
        type: 'object', additionalProperties: false,
        properties: {
          titulo: { type: 'string' },
          tipo: { type: 'string', enum: ['youtube', 'pdf', 'web', 'texto'] },
          url_ou_path: { type: 'string' },
          autor: { type: 'string' },
          data: { type: 'string', description: 'data da fonte ou de acesso (AAAA-MM-DD)' },
          pii: { type: 'boolean', description: 'true → descartar/de-identificar (não vai ao NotebookLM)' },
        },
        required: ['titulo', 'tipo', 'url_ou_path', 'data', 'pii'],
      },
    },
    gaps: { type: 'array', items: { type: 'string' }, description: 'lacunas → [FONTE PENDENTE]' },
  },
  required: ['eixo', 'fontes', 'gaps'],
}

let curadoria
if (INPUT.isFixture) {
  log('FIXTURE: pulando busca — fontes vêm das sementes internas (regressão da estruturação).')
  curadoria = [{ eixo: 'fixture', fontes: INPUT.claims_seed.map((c, i) => ({
    titulo: c.afirmacao.slice(0, 60), tipo: 'texto', url_ou_path: c.fonte, autor: 'vault MC', data: '2026-05-03', pii: false })),
    gaps: ['volume de mercado B31 divergente', 'taxa de êxito administrativo'] }]
} else {
  const seeds = (INPUT.fontes_diretas.length ? [{ eixo: 'fontes-diretas-do-founder', urls: INPUT.fontes_diretas }] : [])
    .concat(enq.eixos_pesquisa.map((e) => ({ eixo: e, urls: [] })))
  curadoria = (await parallel(seeds.map((s) => () =>
    agent(
      `Você é o CURADOR de fontes (Zona Verde · inteligência de mercado PÚBLICA) do MC, eixo: "${s.eixo}". Recorte: "${INPUT.recorte}".\n${s.urls.length ? 'Fontes diretas do Founder a catalogar: ' + JSON.stringify(s.urls) : ''}\n\nGarimpe e cure fontes PÚBLICAS, PRIORIZANDO YouTube (peritos, advogados previdenciários, audiências, canais oficiais), depois PDF/web/texto. Cada fonte com URL/path + autor + data (Proof-First). Exclusão dura: na dúvida, corte. FIREWALL: marque pii=true em qualquer fonte com dado pessoal (não entra no NotebookLM — Google US). O que faltar → gaps ([FONTE PENDENTE]). Retorne SOMENTE via schema.`,
      { agentType: 'Explore', label: `curador:${s.eixo}`, phase: 'Curar', schema: CURAR_SCHEMA }
    )
  )).filter(Boolean)
}
const fontesLimpas = curadoria.flatMap((c) => c.fontes.filter((f) => !f.pii))
log(`Fontes curadas (sem PII): ${fontesLimpas.length} · gaps: ${curadoria.flatMap((c) => c.gaps).length}`)

// ───────────────────── FASE 2 — NOTEBOOKLM (ingestão) ─────────────────────
phase('NotebookLM')

const NB_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    cli_disponivel: { type: 'boolean', description: 'notebooklm CLI instalada e autenticada nesta sessão?' },
    notebook_id: { type: 'string', description: 'id do caderno criado/selecionado (prefixo MC-/TECH-); vazio se modo degradado' },
    sources_ingeridas: { type: 'array', items: { type: 'string' } },
    modo: { type: 'string', enum: ['live', 'degradado'], description: 'degradado = CLI ausente → blocos do NotebookLM ficam [PENDENTE]' },
    nota: { type: 'string' },
  },
  required: ['cli_disponivel', 'modo'],
}

const nb = await agent(
  `Você é o INGESTOR NotebookLM do MC. Fontes curadas (Zona Verde · SEM PII):\n${JSON.stringify(fontesLimpas, null, 2)}\n\n1) Cheque a CLI: \`command -v notebooklm\` + \`notebooklm auth check\`. Se AUSENTE/não-autenticada → cli_disponivel=false, modo="degradado", NÃO invente saída (os blocos do NotebookLM serão [PENDENTE — sessão local]).\n2) Se disponível: \`notebooklm create "MC- Intel: ${(INPUT.tema || 'tema').slice(0, 40)} ${INPUT.data}"\` → \`use\` → para cada fonte \`source add "<url|path>"\` (YouTube/PDF/web) → \`source wait\`. Prefixo MC- ou TECH-. Receitas: .claude/skills/mc-strategic-intelligence/NOTEBOOKLM-RECIPES.md.\nFIREWALL: ZERO PII no NotebookLM (Google US). Retorne SOMENTE via schema.`,
  { agentType: 'general-purpose', label: 'ingestor-nblm', phase: 'NotebookLM', schema: NB_SCHEMA }
)
const degradado = nb.modo !== 'live'
if (degradado) log('NotebookLM em MODO DEGRADADO (CLI ausente) — blocos de análise profunda ficam [PENDENTE — sessão local].')

// ───────────────────── FASE 3 — ANALISAR (4 pedidos canônicos · paralelo) ─────────────────────
phase('Analisar')

const ANALISE_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    foco: { type: 'string', enum: ['estruturada', 'flywheel-sor-router', 'skybridge', 'entregavel'] },
    conteudo: { type: 'string', description: 'a saída do NotebookLM (ou [PENDENTE — sessão local] se degradado), com citações' },
    citacoes: { type: 'array', items: { type: 'string' }, description: 'fonte:URL+data de cada afirmação' },
  },
  required: ['foco', 'conteudo'],
}

const focos = ['estruturada', 'flywheel-sor-router', 'skybridge', 'entregavel']
const analises = await parallel(focos.map((foco) => () =>
  agent(
    `Você é o ANALISTA NotebookLM do MC (foco: ${foco}). Caderno: ${nb.notebook_id || '(degradado)'}. Modo: ${nb.modo}.\n${degradado ? 'MODO DEGRADADO: a CLI não está disponível. Devolva conteudo="[PENDENTE — rodar NotebookLM em sessão local]" + o PROMPT exato a usar (de NOTEBOOKLM-RECIPES.md §F3). NÃO fabrique a análise.' : 'Rode o pedido canônico via `notebooklm ask --json` (+ `generate` se foco=entregavel) e devolva a saída com citações.'}\n\nPedido por foco:\n- estruturada: tese central + fatores + evidências (cite fonte) + contraevidências (Teste Zilda-STF).\n- flywheel-sor-router: insights p/ (1) Proprietary Data Flywheel/MoR DE-IDENTIFICADO, (2) SoR do cidadão sobre o Estado, (3) Router-Ethics (Confidence/Complexity/Fraudscore). Diga qual cada insight alimenta.\n- skybridge: conexões entre as 9 verticais (Previdenciário âncora); passarelas + cascata de benefícios.\n- entregavel: qual entregável (report/infográfico/análise técnica) e o comando \`generate\`.\n\nProof-First: cada afirmação com fonte; sem fonte → [FONTE PENDENTE]. Retorne SOMENTE via schema.`,
    { agentType: degradado ? 'Explore' : 'general-purpose', label: `analista:${foco}`, phase: 'Analisar', schema: ANALISE_SCHEMA }
  )
)

// ───────────────────── FASE 4 — ESTRUTURAR (Brief MC) ─────────────────────
phase('Estruturar')

const BRIEF_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    titulo: { type: 'string' },
    nome_arquivo: { type: 'string', description: 'MC-INTEL-<Descriptor>-v1_0-<AAAA-MMDD>.md' },
    brief_md: { type: 'string', description: 'Brief COMPLETO seguindo TEMPLATE-Intelligence-Brief.md (9 seções)' },
    flywheel_input_md: { type: 'string', description: 'destilado DE-IDENTIFICADO p/ Flywheel-Inputs/ (método/padrão, nunca PII)' },
    linha_evidencia: {
      type: 'array',
      items: {
        type: 'object', additionalProperties: false,
        properties: {
          afirmacao: { type: 'string' },
          fonte: { type: 'string' },
          estado: { type: 'string', enum: ['verificado', 'nao-verificado', 'refutado'] },
        },
        required: ['afirmacao', 'fonte', 'estado'],
      },
    },
    router_ethics_aplica: { type: 'boolean' },
    gaps_fonte_pendente: { type: 'array', items: { type: 'string' } },
    regressao_fixture: {
      type: 'object', additionalProperties: false,
      properties: { veredito: { type: 'string', enum: ['PASSOU', 'REPROVADO', 'N/A'] }, divergencias: { type: 'array', items: { type: 'string' } } },
      required: ['veredito'],
    },
  },
  required: ['titulo', 'nome_arquivo', 'brief_md', 'flywheel_input_md', 'linha_evidencia', 'router_ethics_aplica', 'gaps_fonte_pendente', 'regressao_fixture'],
}

const brief = await agent(
  `Você é o ESCRIBA de inteligência estratégica do MC (atividade-MEIO · Firewall OAB · D>C>V). Monte o Brief seguindo .claude/skills/mc-strategic-intelligence/TEMPLATE-Intelligence-Brief.md (9 seções).\n\nTEMA: ${INPUT.tema}\nRECORTE: ${INPUT.recorte}\nENQUADRAMENTO: ${JSON.stringify(enq)}\nFONTES CURADAS: ${JSON.stringify(fontesLimpas)}\nNOTEBOOK: ${nb.notebook_id || '(degradado)'} · modo ${nb.modo}\nANÁLISES: ${JSON.stringify(analises)}\n${INPUT.isFixture ? 'SEMENTES Proof-First (fixture): ' + JSON.stringify(INPUT.claims_seed) : ''}\n\nExigências: (§3) Linha de Evidência Proof-First — cada claim com fonte (URL+data ou arquivo:linha) e estado ✅verificado/⚠️nao-verificado/❌refutado; lacuna → [FONTE PENDENTE]; NUNCA fabricar. (§4) Leitura Router-Ethics 11.0 (Confidence Verde≥70/Amarela40-70/Vermelha<40 · Complexity · Fraudscore) SE o tema roteia caso; senão "N/A — intel de mercado". (§5) Conexões Skybridge (9 verticais · Previdenciário âncora). (§6) Insumo Flywheel/MoR DE-IDENTIFICADO (método/padrão, nunca PII; NÃO confundir com SoR). (§1) Resumo no Teste Zilda-STF. (§8) Recomendação de governança: vira card Pipefy / registro SoR de-identificado / ADR candidato? qual gate?\n${INPUT.isFixture ? 'REGRESSÃO: as sementes têm estado_esperado — carimbe pela evidência e compare. regressao_fixture.veredito=PASSOU se baterem; senão REPROVADO + divergências.' : 'regressao_fixture.veredito="N/A".'}\nflywheel_input_md = destilado DE-IDENTIFICADO p/ Flywheel-Inputs/.\nNÃO conclua juridicamente, NÃO sele, NÃO edite o CLAUDE.md. Retorne SOMENTE via schema.`,
  { agentType: 'general-purpose', label: 'escriba-brief', phase: 'Estruturar', schema: BRIEF_SCHEMA }
)

// ───────────────────── FASE 5 — MESA + GOVERNANÇA (Cérebro 1 · STOP no gate) ─────────────────────
phase('Mesa+Governança')

const SAVE_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    arquivos_salvos: { type: 'array', items: { type: 'string' }, description: 'paths escritos na mesa de trabalho (Cérebro 1)' },
    artefato_governanca: { type: 'string', description: 'sugestão: card Pipefy (pipe/fase) / registro SoR de-identificado / ADR candidato' },
    proximo_gate: { type: 'string', description: 'R1 arquiva · "aprovado para vault" canoniza · R2 se mexer CLAUDE.md/ADR · R3 se OAB/LGPD/ANPD' },
    padrao_recorrente: { type: 'string', description: 'padrão de análise/preferência do Founder detectado → diff PROPOSTO p/ CLAUDE.md (R2), ou "nenhum nesta rodada"' },
  },
  required: ['arquivos_salvos', 'artefato_governanca', 'proximo_gate', 'padrao_recorrente'],
}

const saved = await agent(
  `Você é o ARQUIVISTA da mesa de trabalho MC (Cérebro 1 · ADR-011 · escrita LIVRE; Cérebro 2 canônico é GATE — NÃO escreva lá). Salve os artefatos abaixo SOMENTE sob "${MESA}/":\n- "${MESA}/Intelligence/${brief.nome_arquivo}" ← brief_md\n- "${MESA}/Flywheel-Inputs/${brief.nome_arquivo.replace('MC-INTEL', 'MC-FLYWHEEL')}" ← flywheel_input_md (DE-IDENTIFICADO)\n- "${MESA}/Research/_fontes.md" ← lista das fontes curadas (URL+autor+data)\n\nbrief_md:\n${brief.brief_md}\n\nflywheel_input_md:\n${brief.flywheel_input_md}\n\nFONTES:\n${JSON.stringify(fontesLimpas, null, 2)}\n\nCrie as pastas se faltarem (mkdir -p) e escreva os arquivos. Depois proponha: artefato_governanca (card Pipefy com pipe/fase, ou registro SoR de-identificado, ou ADR candidato), proximo_gate, e padrao_recorrente (se houver, ESCREVA o diff PROPOSTO p/ o CLAUDE.md mas NÃO o aplique — é R2). Retorne SOMENTE via schema.`,
  { agentType: 'general-purpose', label: 'arquivista-mesa', phase: 'Mesa+Governança', schema: SAVE_SCHEMA }
)

// ───────────── STOP no GATE — devolve, escreveu SÓ na mesa (Cérebro 1) ─────────────
return {
  tema: INPUT.tema,
  modo: INPUT.isFixture ? 'FIXTURE (regressão da estruturação)' : (degradado ? 'real · NotebookLM degradado (CLI ausente)' : 'real · NotebookLM live'),
  gate: 'BRIEF DE INTELIGÊNCIA — rascunho na MESA DE TRABALHO (Cérebro 1). Atividade-MEIO (Zona Verde, sem PII). NÃO selou no Vault canônico (Cérebro 2 = "aprovado para vault") e NÃO editou o CLAUDE.md (R2). Escalada R3 se tocar OAB/LGPD/ANPD.',
  enquadramento: enq,
  notebook: { id: nb.notebook_id || null, modo: nb.modo },
  titulo: brief.titulo,
  arquivos_salvos: saved.arquivos_salvos,
  linha_evidencia: brief.linha_evidencia,
  router_ethics_aplica: brief.router_ethics_aplica,
  artefato_governanca: saved.artefato_governanca,
  proximo_gate: saved.proximo_gate,
  padrao_recorrente_proposto: saved.padrao_recorrente,
  gaps_fonte_pendente: brief.gaps_fonte_pendente,
  regressao_fixture: brief.regressao_fixture,
  escalada_r3: enq.escalada_r3,
}
