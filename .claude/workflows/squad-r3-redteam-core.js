export const meta = {
  name: 'squad-r3-redteam-core',
  description: 'Squad R3 — núcleo Red-Team (Zilda-STF, lentes cegas) + Cascata D→C→V ENDURECIDA (veredito por componente + flag severável; distingue HALT de CONDICIONADO-D). Parametrizável por args; default = fixture success fee Φ₀.',
  phases: [
    { title: 'Red-Team', detail: 'lentes independentes atacam o COMPONENTE ofensivo da tese' },
    { title: 'Cascata', detail: 'cascata D→C→V determinística (component-level) + síntese do Juiz' },
  ],
}

// ── FIXTURE (golden regression) ─────────────────────────────────────────────
// Default quando o workflow roda sem args. Para um caso novo, passe args:
//   { caso, contexto, tese, parecer_previo? }
const FIXTURE = {
  caso: 'success fee Φ₀ CadÚnico (golden fixture)',
  isFixture: true,
  contexto: `
ECOSSISTEMA: Meu Cumpadre (MC) — vertical AI para hipervulneráveis brasileiros. Hierarquia decisória INVIOLÁVEL e lexicográfica: DIGNIDADE > COMPLIANCE > VIABILIDADE.

PRODUTO Φ₀ CadÚnico: triagem assistencial gratuita + elaboração de dossiê documental para acesso a programas da assistência social (CadÚnico → BPC/LOAS, Bolsa Família, Tarifa Social). NÃO há assinatura de peça, representação processual nem consultoria jurídica individualizada — portanto NÃO é atividade privativa de advocacia. Público: famílias de baixa renda, baixa literacia; o benefício assistencial é o MÍNIMO EXISTENCIAL da família. O BPC/LOAS é direito subjetivo (presentes os requisitos, o Estado DEVE conceder).

CÂNONE RELEVANTE:
- No produto Φ₁ PREVIDENCIÁRIO o success fee é VEDADO, com fundamento (a) kantiano — "aquilo que tem dignidade não tem preço" — e (b) no REsp 2.079.440/RO (STJ, Nancy Andrighi, 2024, "advocacia previdenciária predatória"; trânsito em julgado NÃO confirmado).
- Documento SELADO 'MC-PARECER-CONSOLIDADO v3.4' tirou nota global 9,1/10 e elevou as frentes Remuneração e BACEN/CVM a 9,5/10 PRECISAMENTE porque ELIMINOU o produto Φ₂ (bônus pós-protocolo contingente) e afirmou textualmente: "não existe no modelo B2C qualquer pagamento contingente, pós-resultado ou vinculado a concessão" e "zero componente variável no contrato B2C".`,
  tese: `"É juridicamente admissível cobrar, no Φ₀, R$ 60,00 no ato + R$ 60,00 CONDICIONADOS à efetiva liberação do benefício assistencial (success fee), parcelados em 4× de R$ 15,00 (total R$ 120). Se o benefício não sai, a 2ª parcela não é cobrada. Fundamento: não há prerrogativa OAB no âmbito assistencial/CadÚnico, o fee é fixo (não percentual) e o ticket é baixo."`,
  parecer_previo: `O parecer humano v2.0 concluiu (independentemente, ANTES deste red-team): (i) admissível na camada Compliance/OAB; (ii) camada DIGNIDADE NÃO superada (o success fee precifica o desbloqueio de um resultado dignidade-sensível e ressuscita o Φ₂ eliminado do selo v3.4); (iii) cura = reenquadrar de "prêmio por êxito" ASCENDENTE (paga MAIS se sair) para "perdão por insucesso" DESCENDENTE (preço único R$120 com ABATIMENTO social se NÃO sair) — fluxos idênticos, ética oposta; (iv) nota 7,1/10 permissivo vs 9,2/10 reestruturado.`,
}

const INPUT = (args && args.contexto && args.tese)
  ? { caso: args.caso || 'caso ad-hoc', isFixture: false, contexto: args.contexto, tese: args.tese, parecer_previo: args.parecer_previo || null }
  : FIXTURE

// ── Schema endurecido: a lente veredita o COMPONENTE ofensivo, não o pacote ──
const VERDICT_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    lente: { type: 'string' },
    bloco: { type: 'string', enum: ['D', 'C', 'V'], description: 'D=Dignidade, C=Compliance, V=Viabilidade' },
    componente_alvo: { type: 'string', description: 'o MECANISMO/componente específico que você condena (ex.: "o gatilho de concessão ascendente") — NÃO a tese inteira' },
    ataque: { type: 'string', description: 'o ataque mais forte possível ao componente_alvo' },
    melhor_defesa: { type: 'string' },
    veredito: { type: 'string', enum: ['ELIMINADO', 'MITIGADO', 'SOBREVIVE'], description: 'sobre o COMPONENTE: ELIMINADO=ataque derrotado, componente são; MITIGADO=risco residual; SOBREVIVE=componente é genuinamente problemático' },
    severidade: { type: 'integer', minimum: 1, maximum: 5 },
    severavel: { type: 'boolean', description: 'o componente_alvo pode ser REMOVIDO/REENQUADRADO sem matar o produto? true=existe saída limpa; false=o vício é o produto inteiro' },
    correcao_proposta: { type: 'string', description: 'se severável, a correção concreta; senão, vazio' },
    nota: { type: 'number', minimum: 0, maximum: 10, description: 'quão blindada a tese está NESTA lente (10=blindada)' },
    recomendacao: { type: 'string' },
  },
  required: ['lente', 'bloco', 'componente_alvo', 'ataque', 'veredito', 'severidade', 'severavel', 'nota', 'recomendacao'],
}

const LENSES = [
  { id: 'zilda-dignidade', bloco: 'D', persona: 'Você é o GUARDIÃO DA DIGNIDADE de Dona Zilda — idosa rural, analfabeta, cujo benefício é o único pão da casa. Ataque pela camada DIGNIDADE (a superior na hierarquia lexicográfica MC).', foco: 'Qual componente da tese fere o mínimo existencial? O princípio kantiano que veda no campo análogo se aplica com MAIS ou MENOS força aqui? "Não há prerrogativa OAB" responde a esta objeção, ou responde a uma camada inferior?' },
  { id: 'stf-oab', bloco: 'C', persona: 'Você é parecerista sênior da OAB / Ministro do STF, escrutínio normativo máximo.', foco: 'O argumento central da tese é juridicamente SUFICIENTE, ou apenas necessário? Onde quebra sob escrutínio (EAOAB, CED-OAB, jurisprudência)?' },
  { id: 'coerencia-canonica', bloco: 'C', persona: 'Você é auditor de coerência do cânone MC e conhece os documentos SELADOS.', foco: 'A tese contradiz algum documento SELADO? Reabre risco que estava fechado? Um documento PROVISIONAL está contradizendo um SELADO em silêncio?' },
  { id: 'consumerista-procon', bloco: 'C', persona: 'Você é promotor do PROCON / MP-GO, defesa do consumidor hipervulnerável.', foco: 'Há violação de CDC art. 39, IV (prevalecer-se da necessidade/ignorância), art. 37 (engano por omissão) ou art. 51, IV (vantagem excessiva)? As salvaguardas eliminam o NÚCLEO do problema?' },
  { id: 'regulatorio-bacen', bloco: 'V', persona: 'Você é analista regulatório (BACEN/SFN).', foco: 'Há operação típica de instituição financeira (Lei 4.595/64, art. 17), concessão de crédito ou êxito disfarçado — ou é mero diferimento de preço próprio? Atenção a substância sobre forma (parcelamento que disfarça contingência).' },
  { id: 'integridade-fonte', bloco: 'V', persona: 'Você é revisor de integridade probatória de pareceres.', foco: 'A tese se sustenta nas fontes? A jurisprudência-âncora é primária e vigente (trânsito em julgado)? Há LACUNA no marco normativo efetivamente aplicável que a tese deveria enfrentar e não enfrenta?' },
]

phase('Red-Team')
log(`Red-Team sobre: ${INPUT.caso} — ${LENSES.length} lentes cegas, veredito por COMPONENTE...`)

const verdicts = (await parallel(LENSES.map(L => () =>
  agent(
    `${INPUT.contexto}\n\nTESE A ATACAR:\n${INPUT.tese}\n\nSUA LENTE: ${L.persona}\nFOCO: ${L.foco}\n\nTAREFA: identifique o COMPONENTE/mecanismo ofensivo específico (campo componente_alvo) e ataque ESSE componente na máxima força — NÃO veredite a tese-pacote inteira (um vício num componente não absolve nem condena o resto). Depois dê a melhor defesa, o veredito honesto do componente, e diga se ele é SEVERÁVEL (removível/reenquadrável sem matar o produto) com a correção concreta. Um red-team que só confirma a tese é inútil: seja implacável, mas justo. Classifique o bloco (${L.bloco} é o esperado, mas use seu julgamento), severidade 1-5 e nota 0-10. Retorne SOMENTE via schema.`,
    { label: `red-team:${L.id}`, phase: 'Red-Team', schema: VERDICT_SCHEMA }
  )
))).filter(Boolean)

phase('Cascata')

// ── Cascata D→C→V ENDURECIDA (lições do teste referencial, MC-SPEC §4/§8) ────
// Dignidade dispara em SOBREVIVE(sev>=3) OU MITIGADO(sev>=4): uma lente pode julgar
// o pacote como MITIGADO e ainda condenar o componente. Distingue:
//   HALT          → D dispara e o vício NÃO é severável (é o produto inteiro)
//   CONDICIONADO-D → D dispara mas o componente é severável (reprovar componente, reenquadrar)
//   CONDICIONADO-C → só Compliance aberto
//   ADMISSIVEL     → nada dispara
const dFire = verdicts.filter(v => v.bloco === 'D' && (
  (v.veredito === 'SOBREVIVE' && v.severidade >= 3) ||
  (v.veredito === 'MITIGADO' && v.severidade >= 4)
))
const dFatal = dFire.filter(v => v.severavel === false)
const cOpen = verdicts.filter(v => v.bloco === 'C' && v.veredito === 'SOBREVIVE' && v.severidade >= 3)

let cascade
if (dFatal.length) cascade = 'HALT'
else if (dFire.length) cascade = 'CONDICIONADO-D'
else if (cOpen.length) cascade = 'CONDICIONADO-C'
else cascade = 'ADMISSIVEL'

const notaMedia = Math.round((verdicts.reduce((s, v) => s + v.nota, 0) / verdicts.length) * 10) / 10
const correcoes = dFire.concat(cOpen).map(v => v.correcao_proposta).filter(Boolean)
log(`Cascata: ${cascade} · D-fire=${dFire.length} (fatal=${dFatal.length}) · C-aberto=${cOpen.length} · nota média=${notaMedia}/10`)

const SYNTH_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    veredito_consolidado: { type: 'string', enum: ['ADMISSIVEL', 'CONDICIONADO-C', 'CONDICIONADO-D', 'HALT'] },
    nota_blindagem: { type: 'number', minimum: 0, maximum: 10 },
    componente_a_reprovar: { type: 'string' },
    caminho_recomendado: { type: 'string' },
    convergencia_vs_parecer_previo: { type: 'string' },
    sintese: { type: 'string' },
  },
  required: ['veredito_consolidado', 'nota_blindagem', 'caminho_recomendado', 'sintese'],
}

const previoBlock = INPUT.parecer_previo
  ? `\n\nPARECER PRÉVIO (para checar convergência/divergência):\n${INPUT.parecer_previo}`
  : ''

const synth = await agent(
  `${INPUT.contexto}\n\nVocê é o JUIZ da cascata D→C→V do squad. Vereditos independentes por componente:\n\n${JSON.stringify(verdicts, null, 2)}\n\nCascata determinística ENDURECIDA: ${cascade} (D-fire=${dFire.length}, fatal/não-severável=${dFatal.length}, C-aberto=${cOpen.length}, nota média=${notaMedia}).${previoBlock}\n\nREGRAS: (1) Dignidade é lexicográfica — se um componente dispara D, nenhuma média de C/V o salva. (2) HALT só se o vício NÃO for severável (é o produto inteiro); se for severável, é CONDICIONADO-D (reprovar o componente, manter o produto). (3) Veredite o COMPONENTE, não o pacote.\n\nTAREFA: consolide o veredito R3, nomeie o componente a reprovar, recomende o caminho${INPUT.parecer_previo ? ', e diga se convergiu ou divergiu do parecer prévio (e onde)' : ''}. Retorne SOMENTE via schema.`,
  { label: 'juiz:sintese', phase: 'Cascata', schema: SYNTH_SCHEMA }
)

return {
  caso: INPUT.caso,
  cascata_deterministica: cascade,
  nota_media_lentes: notaMedia,
  d_fire: dFire.map(v => ({ lente: v.lente, veredito: v.veredito, sev: v.severidade, severavel: v.severavel, componente: v.componente_alvo })),
  d_fatal: dFatal.map(v => v.componente_alvo),
  c_aberto: cOpen.map(v => v.lente),
  correcoes_propostas: correcoes,
  vereditos: verdicts.map(v => ({ lente: v.lente, bloco: v.bloco, componente: v.componente_alvo, veredito: v.veredito, sev: v.severidade, severavel: v.severavel, nota: v.nota })),
  sintese_juiz: synth,
}
