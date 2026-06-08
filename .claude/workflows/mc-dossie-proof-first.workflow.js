/**
 * ════════════════════════════════════════════════════════════════════════════
 *  MC-WORKFLOW · DOSSIÊ PROOF-FIRST  ·  Lastro de alegações com fonte:linha + SIV
 *  v0.1 PROVISIONAL · RASCUNHO · 2026-06-02 · drop zone (instalação no .claude/ = gate)
 * ════════════════════════════════════════════════════════════════════════════
 *
 *  ESCOPO  Dado um tema ou uma lista de ALEGAÇÕES, monta um dossiê Proof-First:
 *  decompõe em proposições, garimpa lado A (corrobora) + lado B (contraprova) com
 *  fonte:linha / URL / Lei, carimba o estado de prova (✅/⚠️/❌), sela a integridade
 *  (SIV: SHA-256 das fontes-arquivo) e marca lacunas [FONTE PENDENTE]. Entrega a
 *  LINHA DE EVIDÊNCIA + tabela + bloco SIV. PARA no gate humano. NÃO sela, NÃO
 *  escreve no Vault.
 *
 *  GENERALIZA o Coletor do squad-r3 (evidência A/B + fonte:linha + gaps) sob a
 *  anatomia CP-MC (Constelação Probatória: GPN/SIV/ICE · 5 vedações). NÃO é o
 *  dossiê probatório OPERACIONAL do cidadão (esse tem PII, é atividade-meio sob
 *  R3 e vive no C1). Este é Zona Verde: lastra CLAIMS de doutrina/método/métrica/
 *  capacidade/norma — nunca ingere PII.
 *
 *  GOVERNANÇA (fail-closed · D > C > V)
 *   · Proof-First duro (§2.4): nada de fato sem origem rastreável; estado de prova
 *     explícito ✅ verificado / ⚠️ não-verificado / ❌ refutado; sem rastro → [FONTE PENDENTE].
 *   · 5 VEDAÇÕES da linha ética CP-MC (C2-20:86-94): zero conclusão jurídica · zero
 *     adjetivação interpretativa · zero redação de despacho · ZERO OMISSÃO DE
 *     CONTRAPROVA (lado B obrigatório) · zero promessa de resultado.
 *   · Zona Verde: NUNCA ingere PII (CPF/NB/CID/CNIS). Fonte com PII → [GATE R3],
 *     não transcreve. Firewall OAB: organiza evidência (meio), não conclui (fim).
 *   · NÃO sela, NÃO escreve no Vault — devolve o dossiê.
 *
 *  LASTRO (peças reais · engenharia reversa, não invenção)
 *   Coletor (evidência lado A/B + fonte:linha + gaps) ... .claude/workflows/squad-r3-pipeline.js (COLETA_SCHEMA :29-45)
 *   CP-MC = Constelação Probatória (GPN/SIV/ICE) ........ C2-20 MC-POP-VisualLaw-DossieSelado-PARTE1 :36,42-46
 *   SIV = Selo Integridade Visual (SHA-256 + ICP + OTS) . C2-20 :44
 *   3 camadas cognitivas (entrada 10s · malha auditável · scaffolding) . C2-20 :191-201
 *   5 vedações da linha ética (inclui zero omissão de contraprova) ..... C2-20 :86-94
 *   Proof-First (✅/⚠️/❌ · citar origem) ................ MC-RÉGUA-COMPASSO §2.4 :145-156
 *
 *  REGRAS: Date.now()/Math.random()/new Date() NÃO existem (quebram resume) —
 *  varie por índice, timestamps via args. meta é literal puro.
 * ════════════════════════════════════════════════════════════════════════════
 */

export const meta = {
  name: 'mc-dossie-proof-first',
  description: 'Monta um dossiê Proof-First de alegações: decompõe em proposições, garimpa lado A (corrobora) + lado B (contraprova obrigatória) com fonte:linha/URL/Lei, carimba estado de prova (✅/⚠️/❌), sela integridade (SIV: SHA-256) e marca [FONTE PENDENTE]. Entrega a Linha de Evidência + tabela + bloco SIV. Zona Verde (claims de doutrina/método/métrica) — NUNCA ingere PII; NÃO é o dossiê probatório do cidadão (R3). 5 vedações CP-MC (zero conclusão jurídica, zero omissão de contraprova). Sem args = roda fixture (regressão Proof-First). NÃO sela, NÃO escreve no Vault.',
  phases: [
    { title: 'Alegações', detail: 'decompõe o tema em proposições a lastrear (cada uma = um claim verificável)' },
    { title: 'Garimpo', detail: 'por alegação (paralelo): lado A (corrobora) + lado B (contraprova) com fonte:linha/URL/Lei · firewall PII fail-closed' },
    { title: 'Dossiê', detail: 'estado de prova ✅/⚠️/❌ + SIV (SHA-256) + linha de evidência + tabela + [FONTE PENDENTE] · STOP no gate' },
  ],
}

// ── Fixture (regressão Proof-First · dogfooding: lastro de métricas MC) ──────
const FIXTURE_DOSSIE = {
  isFixture: true,
  tema: 'Lastro das métricas/afirmações de método MC (Zona Verde)',
  alegacoes: [
    { id: 'A1', proposicao: 'RA-MC (Razão de Automação) sustenta o Φ₁ a partir de ≥4× (THU_manual ÷ THU_target).', tipo: 'metrica',
      lado_a: ['MC-PRINCIPIO-021 (#23):36,44 — definição + "≥4× sustenta Φ₁"', 'Catálogo C1-17:70 — baseline empírica Hib001 = 4,71×'], lado_b: [],
      estado_esperado: 'verificado' },
    { id: 'A2', proposicao: 'CMD (Capital Morto Desbloqueado) é a North Star, com denominador zero (sem captura MC) e status SELADO.', tipo: 'metrica',
      lado_a: ['MC-INDICADORES:195-219 — equação + "Denominador. Zero." + "SELADO"'], lado_b: [],
      estado_esperado: 'verificado' },
    { id: 'A3', proposicao: 'Existe uma fórmula formalizada e canônica de TENV-MC em fonte do Vault.', tipo: 'capacidade',
      lado_a: ['nome+sentido em C0-03:177 e C1-17:242'], lado_b: ['busca 2026-06-02: painel v1.2 (05/05) anterior ao caso JAN001 (09/05); backlog v1.3 C0-10:886-892 não a enfileira'],
      estado_esperado: 'nao-verificado' },
    { id: 'A4', proposicao: 'O preço "standard" alegado [valor superado — exemplo de contraprova] ainda é o vigente.', tipo: 'fato',
      lado_a: [], lado_b: ['Proibição Absoluta mc-lint: o valor citado está superado (a régua atualizou o standard)'],
      estado_esperado: 'refutado' },
  ],
}

const INPUT = (args && (args.tema || args.alegacoes))
  ? { isFixture: false, tema: args.tema || '(derivar das alegações)', alegacoes_seed: args.alegacoes || null, fonte_pasta: args.fonte_pasta || null }
  : FIXTURE_DOSSIE

// ───────────────────────── FASE 0 — ALEGAÇÕES ─────────────────────────
phase('Alegações')
log(`Dossiê Proof-First · ${INPUT.isFixture ? 'FIXTURE (regressão Proof-First)' : INPUT.tema}`)

const ALEGACOES_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    escopo: { type: 'string' },
    alegacoes: {
      type: 'array',
      items: {
        type: 'object', additionalProperties: false,
        properties: {
          id: { type: 'string' },
          proposicao: { type: 'string', description: 'claim VERIFICÁVEL (uma asserção, não pergunta)' },
          tipo: { type: 'string', enum: ['fato', 'metrica', 'capacidade', 'norma', 'tese'] },
        },
        required: ['id', 'proposicao', 'tipo'],
      },
    },
  },
  required: ['escopo', 'alegacoes'],
}

let alegacoes
if (INPUT.isFixture) {
  alegacoes = FIXTURE_DOSSIE.alegacoes
} else {
  const dec = await agent(
    `Você é o DECOMPOSITOR do dossiê Proof-First MC. Tema: "${INPUT.tema}". ${INPUT.alegacoes_seed ? 'Alegações-semente: ' + JSON.stringify(INPUT.alegacoes_seed) : ''} ${INPUT.fonte_pasta ? 'Pasta de fontes (Zona Verde): ' + INPUT.fonte_pasta : ''}\n\nQuebre o tema em ALEGAÇÕES verificáveis (cada uma = uma proposição/claim atômico, não pergunta), com tipo (fato/metrica/capacidade/norma/tese). Só Zona Verde (doutrina/método/métrica/mercado) — NUNCA proposições que exijam PII de cidadão. Retorne SOMENTE via schema.`,
    { agentType: 'Explore', label: 'decompositor', phase: 'Alegações', schema: ALEGACOES_SCHEMA }
  )
  alegacoes = dec.alegacoes
}

// ───────────────────── FASE 1 — GARIMPO (lado A + lado B · por alegação) ─────────────────────
phase('Garimpo')

const GARIMPO_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    alegacao_id: { type: 'string' },
    lado_a: { type: 'array', items: { type: 'string' }, description: 'fontes que CORROBORAM (fonte:linha / URL / Lei + data)' },
    lado_b: { type: 'array', items: { type: 'string' }, description: 'CONTRAPROVA — fontes que contradizem/limitam (obrigatório investigar; vazio só se realmente não há)' },
    pii_detectada: { type: 'boolean', description: 'true se a fonte carrega PII → [GATE R3], não transcrever' },
    gaps: { type: 'array', items: { type: 'string' }, description: 'o que falta lastrear → [FONTE PENDENTE]' },
  },
  required: ['alegacao_id', 'lado_a', 'lado_b', 'pii_detectada', 'gaps'],
}

let garimpado
if (INPUT.isFixture) {
  log('FIXTURE: pulando busca — lados A/B vêm do fixture (regressão do carimbo de prova).')
  garimpado = FIXTURE_DOSSIE.alegacoes.map((a) => ({ alegacao_id: a.id, lado_a: a.lado_a, lado_b: a.lado_b, pii_detectada: false, gaps: [] }))
} else {
  garimpado = (await parallel(alegacoes.map((a) => () =>
    agent(
      `Você é o COLETOR Proof-First (Explore, read-only) do dossiê MC, lastreando a alegação ${a.id}: "${a.proposicao}" (tipo: ${a.tipo}).\n\nGarimpe LADO A (fontes que CORROBORAM) e LADO B (CONTRAPROVA — fontes que contradizem/limitam; investigar SEMPRE, é vedação dura "zero omissão de contraprova"). Fontes possíveis: Vault/C1 (cite arquivo:linha), Lei/norma (cite artigo), web pública (URL + data de acesso). ${INPUT.fonte_pasta ? 'Priorize a pasta: ' + INPUT.fonte_pasta : ''}\n\nFIREWALL (fail-closed): Zona Verde. Se uma fonte carregar PII (CPF/NB/CID/CNIS/nome civil), pii_detectada=true e NÃO transcreva — [GATE R3]. O que faltar lastrear → gaps ([FONTE PENDENTE]). Proof-First: nada fabricado; sem rastro não vira lado A. Retorne SOMENTE via schema.`,
      { agentType: 'Explore', label: `coletor:${a.id}`, phase: 'Garimpo', schema: GARIMPO_SCHEMA }
    )
  )).filter(Boolean)
}

// ───────────────────── FASE 2 — DOSSIÊ (estado de prova + SIV + montagem) ─────────────────────
phase('Dossiê')

const DOSSIE_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    linha_de_evidencia: {
      type: 'array',
      items: {
        type: 'object', additionalProperties: false,
        properties: {
          alegacao_id: { type: 'string' }, proposicao: { type: 'string' },
          estado_prova: { type: 'string', enum: ['verificado', 'nao-verificado', 'refutado'] },
          fonte_principal: { type: 'string', description: 'a 🎯 que sustenta (fonte:linha/URL/Lei)' },
          contraprova: { type: 'string', description: 'lado B resumido (ou "nenhuma contraprova encontrada")' },
          sha256: { type: 'string', description: 'SIV: hash da fonte-arquivo local, se aplicável; senão vazio' },
          nota: { type: 'string' },
        },
        required: ['alegacao_id', 'estado_prova', 'fonte_principal', 'contraprova'],
      },
    },
    quadro_sintese: { type: 'string', description: 'entrada 10s (CP-MC C2-20:191): quantas verificadas / não-verificadas / refutadas' },
    tabela_md: { type: 'string', description: 'tabela: Alegação | Estado | Fonte principal | Contraprova | SHA-256' },
    bloco_siv: { type: 'string', description: 'bloco de integridade SIV: lista fonte-arquivo → SHA-256 (C2-20:44)' },
    gaps_fonte_pendente: { type: 'array', items: { type: 'string' } },
    vedacoes_ok: { type: 'boolean', description: 'as 5 vedações foram respeitadas? (zero conclusão jurídica, zero omissão de contraprova, etc.)' },
    regressao_fixture: {
      type: 'object', additionalProperties: false,
      properties: { veredito: { type: 'string', enum: ['PASSOU', 'REPROVADO', 'N/A'] }, divergencias: { type: 'array', items: { type: 'string' } } },
      required: ['veredito'],
    },
    pendencias: { type: 'array', items: { type: 'string' } },
  },
  required: ['linha_de_evidencia', 'quadro_sintese', 'tabela_md', 'bloco_siv', 'gaps_fonte_pendente', 'vedacoes_ok', 'regressao_fixture'],
}

const dossie = await agent(
  `Você é o ESCRIBA PROOF-FIRST + SIV do dossiê MC (atividade-MEIO; honra as 5 vedações CP-MC). Monte o dossiê.\n\nALEGAÇÕES:\n${JSON.stringify(alegacoes, null, 2)}\n\nGARIMPO (lados A/B por alegação):\n${JSON.stringify(garimpado, null, 2)}\n\nPara CADA alegação carimbe o ESTADO DE PROVA (§2.4): 'verificado' (lado A confere contra fonte oficial/rastreável) · 'nao-verificado' (plausível, sem âncora/fonte ainda → também vira [FONTE PENDENTE]) · 'refutado' (lado B contradiz). Inclua a CONTRAPROVA sempre (lado B; se vazio, escreva "nenhuma contraprova encontrada" — vedação "zero omissão de contraprova"). SIV: para cada fonte que seja ARQUIVO LOCAL, compute o SHA-256 (ex.: \`certutil -hashfile "<path>" SHA256\` ou \`sha256sum\`) e liste no bloco_siv; fontes web não hasheiam. Monte: quadro_sintese (entrada 10s), tabela_md (Alegação|Estado|Fonte|Contraprova|SHA-256), bloco_siv, gaps [FONTE PENDENTE].\n\n5 VEDAÇÕES (C2-20:86-94): zero conclusão jurídica · zero adjetivação interpretativa · zero redação de despacho · zero omissão de contraprova · zero promessa de resultado. vedacoes_ok=false se violou alguma.\n${INPUT.isFixture ? 'REGRESSÃO (fixture): cada alegação tem estado_esperado. Carimbe pela evidência primeiro, depois compare: regressao_fixture.veredito = PASSOU se todos batem; senão REPROVADO + divergências.' : 'regressao_fixture.veredito = "N/A".'}\n\nFIREWALL: Zona Verde, zero PII. NÃO conclua juridicamente, NÃO sele, NÃO escreva no Vault. Retorne SOMENTE via schema.`,
  { agentType: 'general-purpose', label: 'escriba+siv', phase: 'Dossiê', schema: DOSSIE_SCHEMA }
)

// ───────────── STOP no GATE — devolve o dossiê, NÃO sela/escreve ─────────────
return {
  tema: INPUT.tema,
  modo: INPUT.isFixture ? 'FIXTURE (regressão Proof-First)' : 'dossiê real',
  gate: 'DOSSIÊ PROOF-FIRST — rascunho para decisão humana. Atividade-MEIO: organiza a evidência, NÃO conclui juridicamente (atividade-fim 100% advogada). NÃO selou e NÃO escreveu no Vault.',
  linha_de_evidencia: dossie.linha_de_evidencia,
  quadro_sintese: dossie.quadro_sintese,
  tabela_md: dossie.tabela_md,
  bloco_siv: dossie.bloco_siv,
  gaps_fonte_pendente: dossie.gaps_fonte_pendente,
  vedacoes_ok: dossie.vedacoes_ok,
  regressao_fixture: dossie.regressao_fixture,
  pendencias: dossie.pendencias || [],
}
