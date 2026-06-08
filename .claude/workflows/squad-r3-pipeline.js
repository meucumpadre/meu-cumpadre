export const meta = {
  name: 'squad-r3-pipeline',
  description: 'Squad Causal R3 ponta-a-ponta: Coletor(0)→Tesista(1)→[Red-Team+Cascata, delegado ao core validado](2-3)→Escriba(4)→STOP no Gate R3 humano(5). Parametrizável por args; default = caso Φ₀. NÃO sela e NÃO escreve no Vault — devolve rascunhos para decisão humana.',
  phases: [
    { title: 'Coleta', detail: 'Coletor (Explore, read-only) — Proof-First do dossiê' },
    { title: 'Tese', detail: 'Tesista — contexto neutro + tese a testar' },
    { title: 'Red-Team+Cascata', detail: 'delega ao squad-r3-redteam-core (engine validado)' },
    { title: 'Escriba', detail: 'rascunhos institucionais — DEVOLVIDOS, não escritos no Vault' },
  ],
}

// Caminho do engine adversarial VALIDADO (fases 2-3). Persistido no Vault (C2),
// ao lado deste pipeline, em OBSIDIAN/MEU CUMPADRE/.claude/workflows/ (SPEC §9.4).
const CORE_PATH = 'G:\\Meu Drive\\0.1_MEU_CUMPADRE\\0 0 Gestão Software\\OBSIDIAN\\MEU CUMPADRE\\.claude\\workflows\\squad-r3-redteam-core.js'

// ── Parametrização: caso novo via args {pergunta, pasta, caso}; senão fixture Φ₀ ──
const CASO = (args && args.pergunta && args.pasta)
  ? { pergunta: args.pergunta, pasta: args.pasta, caso: args.caso || 'caso ad-hoc' }
  : {
      pergunta: 'O success fee no produto Φ₀ CadÚnico é juridicamente admissível, mantida a vedação no Φ₁ previdenciário?',
      pasta: 'G:\\Meu Drive\\0.1_MEU_CUMPADRE\\0 0 Gestão Software\\Documentação\\avaliacao-juridica-successfee-cadunico',
      caso: 'success fee Φ₀ CadÚnico (fixture)',
    }

// ───────────────────────── FASE 0 — COLETOR (Proof-First) ─────────────────────────
phase('Coleta')
log(`Coletor (Explore) inventariando o dossiê: ${CASO.pasta}`)

const COLETA_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    resumo: { type: 'string' },
    evidencias_vedacao: { type: 'array', items: { type: 'string' }, description: 'lado A — trechos que VEDAM (com fonte:linha)' },
    evidencias_permissao: { type: 'array', items: { type: 'string' }, description: 'lado B — trechos que PERMITEM (com fonte:linha)' },
    gaps: { type: 'array', items: { type: 'string' } },
    alertas_nomenclatura: { type: 'array', items: { type: 'string' }, description: 'ex.: Φ₀ vs Φ₄, PROVISIONAL vs SELADO' },
    fontes: { type: 'array', items: { type: 'string' } },
  },
  required: ['resumo', 'evidencias_vedacao', 'evidencias_permissao', 'gaps', 'fontes'],
}

const coleta = await agent(
  `Você é o COLETOR (papel Code TALÃO, Proof-First) do squad R3 do Meu Cumpadre. Pergunta de compliance: "${CASO.pergunta}".\nInventarie o dossiê na pasta ${CASO.pasta} (e ponteiros que ela citar). Mapeie a evidência LINHA-A-LINHA em dois lados — o que VEDA (lado A) e o que PERMITE (lado B) — com fonte:linha. Liste GAPs e ALERTAS de nomenclatura (ex.: Φ₀ vs Φ₄; documento PROVISIONAL contradizendo SELADO). NÃO opine sobre admissibilidade — sua função é organizar a fonte (atividade-meio). Retorne SOMENTE via schema.`,
  { agentType: 'Explore', label: 'coletor:proof-first', phase: 'Coleta', schema: COLETA_SCHEMA }
)

// ───────────────────────── FASE 1 — TESISTA ─────────────────────────
phase('Tese')

const TESE_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    contexto: { type: 'string', description: 'contexto NEUTRO do caso (insumo do red-team) — fatos, cânone, hierarquia, sem conclusão' },
    tese_preliminar: { type: 'string', description: 'a posição mais defensável do negócio, a ser submetida ao red-team' },
    marco_normativo: { type: 'array', items: { type: 'string' } },
    analise: { type: 'string' },
  },
  required: ['contexto', 'tese_preliminar', 'marco_normativo', 'analise'],
}

const tese = await agent(
  `Você é o TESISTA (papel Cofounder C3.1) do squad R3. Com base na coleta Proof-First:\n${JSON.stringify(coleta, null, 2)}\n\nProduza: (a) um CONTEXTO neutro do caso para alimentar o red-team (fatos + cânone relevante + a hierarquia D>C>V, SEM concluir); (b) a TESE PRELIMINAR — a posição mais defensável do negócio sobre a pergunta "${CASO.pergunta}" — que será ATACADA pelo red-team; (c) o marco normativo. NÃO conclua admissibilidade definitiva: a tese existe para ser estressada. Retorne SOMENTE via schema.`,
  { label: 'tesista', phase: 'Tese', schema: TESE_SCHEMA }
)

// ─────────────── FASES 2-3 — RED-TEAM + CASCATA (delegado ao core validado) ───────────────
phase('Red-Team+Cascata')
log('Delegando ao engine validado squad-r3-redteam-core (6 lentes cegas + cascata D→C→V endurecida)...')

let adv
try {
  adv = await workflow({ scriptPath: CORE_PATH }, {
    caso: CASO.caso,
    contexto: tese.contexto,
    tese: tese.tese_preliminar,
    parecer_previo: null,
  })
} catch (e) {
  adv = { erro: `Falha ao delegar ao core (${CORE_PATH}): ${String(e)}. Verifique o path (SPEC §9.4).` }
}

// ───────────────────────── FASE 4 — ESCRIBA (rascunhos, sem escrita) ─────────────────────────
phase('Escriba')

const ESCRIBA_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    parecer_md: { type: 'string', description: 'rascunho do parecer institucional (padrão MC v3.4) em markdown' },
    errata_necessaria: { type: 'boolean', description: 'true se a tese contradiz documento SELADO' },
    errata_md: { type: 'string', description: 'rascunho da errata/banner de supersedência, se necessária' },
    core_redacao_conservadora: { type: 'string' },
    core_redacao_permissiva: { type: 'string' },
    pendencias_R3: { type: 'array', items: { type: 'string' }, description: 'perguntas/decisões que ficam para o humano no Gate R3' },
  },
  required: ['parecer_md', 'errata_necessaria', 'core_redacao_conservadora', 'pendencias_R3'],
}

const escriba = await agent(
  `Você é o ESCRIBA (C3.1→C2) do squad R3. Redija os RASCUNHOS institucionais a partir da tese e do veredito adversarial.\n\nTESE:\n${JSON.stringify(tese, null, 2)}\n\nVEREDITO ADVERSARIAL (engine validado):\n${JSON.stringify(adv, null, 2)}\n\nProduza: (1) parecer versionado no padrão MC (delimitação→marco→análise→teste adversarial→conclusão em camadas D>C>V); (2) se a tese contradiz um SELADO, a errata/banner de supersedência; (3) DUAS redações de core (conservadora e permissiva). REGRA DURA: devolva tudo como STRINGS no schema — NÃO escreva arquivos no Vault. O squad NÃO sela nem persiste nada antes do Gate R3 humano. Liste em pendencias_R3 o que fica para a decisão humana. Retorne SOMENTE via schema.`,
  { label: 'escriba', phase: 'Escriba', schema: ESCRIBA_SCHEMA }
)

// ───────────────────────── FASE 5 — GATE R3 (humano): STOP ─────────────────────────
// O squad NÃO decide e NÃO sela. Retorna os rascunhos para a Dra. Juliana / Founder.
return {
  caso: CASO.caso,
  gate_R3: 'DECISÃO HUMANA PENDENTE (Dra. Juliana / Founder). O squad organizou e estressou; NÃO selou nem escreveu no Vault.',
  fase_0_coleta: coleta,
  fase_1_tese: tese,
  fase_2_3_veredito: adv,
  fase_4_rascunhos: escriba,
}
