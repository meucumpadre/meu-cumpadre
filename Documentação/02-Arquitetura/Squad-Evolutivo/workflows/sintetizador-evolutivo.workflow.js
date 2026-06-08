/**
 * ════════════════════════════════════════════════════════════════════════════
 *  MC-WORKFLOW · SINTETIZADOR EVOLUTIVO  ·  orquestrador do Squad Evolutivo
 *  v0.4 PROVISIONAL · RASCUNHO · 2026-06-04 · drop zone (Cérebro 1 · instalação = gate)
 * ════════════════════════════════════════════════════════════════════════════
 *
 *  ESCOPO  Loop que MELHORA por rodada: lê a memória → Fases 1-3 (arquiteto
 *  desenha → disrupter estressa → guardião checa Proof-First → auxiliar consolida
 *  a `sintese`) → o Sintetizador aplica o Teste de Aceitação F (minuta/veto) e
 *  INVOCA o Curador (guardiao-grimorio) p/ registrar/promover na memory/ → STOP
 *  no gate humano. O motor NÃO sela e NÃO escreve no Vault canônico (ADR-011).
 *
 *  ESTADO DE IMPLEMENTAÇÃO (build incremental — ver _LEIA + specs/SINTESE_SCHEMA.md)
 *   ✅ Lote 1 — Fase 0 (leitura real da memory/, read-only) · data via arg · §6.
 *   ✅ Lote 2 — Teste F (básico) · registro de attempt (§3) · promoção (§4).
 *   ✅ Lote 3 — Fases 1-3 com DELEGAÇÃO REAL aos agentes (arquiteto/disrupter/
 *      guardião-catraca/auxiliar) → `sintese` (SINTESE_SCHEMA v1.1, validado).
 *      Pontos 2/4 (revisão do shape): o SINTETIZADOR decide a dignidade (pode
 *      divergir do sinal do Disrupter); a `sintese` carrega fontes[]/lacunas[] e
 *      o Curador DESTILA fonte+prova singulares no registro (§3). fonte+prova
 *      obrigatórios; lacunas bloqueiam validado. Real exige args.instalado; fixture exercita.
 *   ☐ Lote 4+ — handoff R3 real (gancho toca_compliance_pesado pronto).
 *
 *  NÃO CONFUNDIR: orquestrador do Squad (método/arquitetura, Zona Verde). NÃO é
 *  squad-r3 (compliance), mc-especimen (casos), nem mc-pre-selagem (selagem).
 *
 *  GOVERNANÇA (fail-closed · D > C > V)
 *   · memory/: o MOTOR NÃO escreve — INVOCA o Curador (único que grava · §2/§6).
 *   · Zona Verde: PII NUNCA entra (§7). Achou → incidente, não registra.
 *   · Firewall OAB: escala do disrupter PARA na atividade-meio; compliance pesado
 *     NÃO é adjudicado aqui → handoff R3 (Dra. Juliana).
 *   · Proof-First (Decisão 4): registrar attempt exige fonte+prova (§3) — o Curador
 *     destila dos fontes[] da rodada; lacunas bloqueiam `validado`/skill (§4).
 *
 *  SCHEMA DA SINTESE  = Documentação/02-Arquitetura/Squad-Evolutivo/specs/SINTESE_SCHEMA.md (v1.1, validado)
 *  SCHEMA DA MEMORY/  = Documentação/02-Arquitetura/Squad-Evolutivo/memory/CONTRATO-memory.md (v0.3 · §3/§4/§5/§7)
 *
 *  REGRAS DO HARNESS: Date.now()/Math.random()/new Date() NÃO existem — data via
 *  args.data (YYYY-MM-DD); ids variam por índice (contagem da memory/); meta é
 *  literal. Globais do runner: phase(), log(), agent({agentType,label,phase,schema}).
 * ════════════════════════════════════════════════════════════════════════════
 */

export const meta = {
  name: 'sintetizador-evolutivo',
  description: 'Orquestrador do Squad Evolutivo (v0.4 · shape rev. pontos 2/4). Loop: lê memory/ (Fase 0) → Fases 1-3 (arquiteto→disrupter→guardião-catraca→auxiliar → `sintese`, SINTESE_SCHEMA v1.1) → Teste F: o SINTETIZADOR decide a dignidade (pode divergir do Disrupter) → minuta/veto (§8) → INVOCA o Curador, que DESTILA fonte+prova (§3) e registra/promove (§4). Motor NÃO grava (§6). fonte+prova obrigatórios; lacunas bloqueiam validado. Sem args = fixture. NÃO sela (ADR-011).',
  phases: [
    { title: 'Memória',  detail: 'Fase 0 ✅: lê memory/{attempts,notes,skills} READ-ONLY (Explore) · schema Contrato §3' },
    { title: 'Proposta', detail: 'Fases 1-3 ✅: arquiteto→disrupter→guardião-catraca→auxiliar → `sintese` (Documentação/02-Arquitetura/Squad-Evolutivo/specs/SINTESE_SCHEMA.md)' },
    { title: 'Teste F',  detail: '✅ o SINTETIZADOR decide dignidade (pode divergir do Disrupter) → minuta/veto (§8)' },
    { title: 'Curadoria', detail: '✅ INVOCA o Curador → destila fonte+prova + registra attempt §3 + promove note→skill §4 (lacunas bloqueiam) · motor não grava (§6)' },
    { title: 'Gate',     detail: 'consolida + STOP no gate humano (NÃO sela, NÃO escreve no Vault nem na memory/)' },
  ],
}

// ═══ SCHEMAS ═══════════════════════════════════════════════════════════════════
// memory/ (Contrato §3)
const MEMORIA_ENTRY_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    id: { type: 'string', description: '[attempt|note|skill]-YYYYMMDD-XXX' },
    tipo: { type: 'string', enum: ['attempt', 'note', 'skill'] },
    data_criacao: { type: 'string', description: 'YYYY-MM-DD (de args.data)' },
    fonte: { type: 'string' }, prova: { type: 'string' },
    dignidade_impacto: { type: 'string', enum: ['aumenta', 'neutro', 'diminui'] },
    status: { type: 'string', enum: ['rascunho', 'validado', 'obsoleto'] },
  },
  required: ['id', 'tipo', 'data_criacao', 'fonte', 'prova', 'dignidade_impacto', 'status'],
}
const MEMORIA_SNAPSHOT_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    contagem: { type: 'object', additionalProperties: false, properties: { attempts: { type: 'number' }, notes: { type: 'number' }, skills: { type: 'number' } }, required: ['attempts', 'notes', 'skills'] },
    attempts: { type: 'array', items: MEMORIA_ENTRY_SCHEMA },
    notes: { type: 'array', items: MEMORIA_ENTRY_SCHEMA },
    skills: { type: 'array', items: MEMORIA_ENTRY_SCHEMA },
    pii_detectada: { type: 'boolean' }, fontes_lidas: { type: 'array', items: { type: 'string' } },
  },
  required: ['contagem', 'attempts', 'notes', 'skills'],
}
// Pétalas (Fases 1-3) — autoridade do shape: Documentação/02-Arquitetura/Squad-Evolutivo/specs/SINTESE_SCHEMA.md
const ARQUITETO_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: { minuta: { type: 'string' }, artefatos: { type: 'array', items: { type: 'object', additionalProperties: false, properties: { tipo: { type: 'string' }, ref: { type: 'string', description: 'PONTEIRO p/ Cérebro 1 (não inline)' } }, required: ['tipo', 'ref'] } } },
  required: ['minuta'],
}
const DIGNIDADE_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: { sinal: { type: 'string', enum: ['aumenta', 'neutro', 'diminui'], description: 'assessment do Disrupter — o Sintetizador (Teste F) PODE divergir (ponto 2)' }, zilda_stf: { type: 'boolean' }, escala_4060M: { type: 'string' }, justificativa: { type: 'string' } },
  required: ['sinal', 'zilda_stf', 'justificativa'],
}
// proof_first carrega fontes[]/lacunas[] (contexto da rodada); o Curador DESTILA
// fonte+prova singulares no registro (§3) — ponto 4.
const PROOF_FIRST_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: { fontes: { type: 'array', items: { type: 'string' }, description: 'fontes da rodada — o Curador DESTILA p/ fonte+prova singulares no registro (§3, ponto 4)' }, lacunas: { type: 'array', items: { type: 'string' }, description: 'gaps → [FONTE PENDENTE]; bloqueiam validado (Decisão 4)' } },
  required: ['fontes', 'lacunas'],
}
const ESCALA_COMPLIANCE_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: { toca_oab_lgpd_anpd: { type: 'boolean', description: '→ gancho handoff R3' }, nota: { type: 'string' } },
  required: ['toca_oab_lgpd_anpd'],
}
const DISRUPTER_SCHEMA = { type: 'object', additionalProperties: false, properties: { dignidade: DIGNIDADE_SCHEMA }, required: ['dignidade'] }
const GUARDIAO_CATRACA_SCHEMA = { type: 'object', additionalProperties: false, properties: { proof_first: PROOF_FIRST_SCHEMA, escala_compliance: ESCALA_COMPLIANCE_SCHEMA }, required: ['proof_first', 'escala_compliance'] }
// sintese consolidada (Auxiliar) — espelha Documentação/02-Arquitetura/Squad-Evolutivo/specs/SINTESE_SCHEMA.md
const SINTESE_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    tema: { type: 'string' },
    minuta: { type: 'string' },
    artefatos: { type: 'array', items: { type: 'object', additionalProperties: false, properties: { tipo: { type: 'string' }, ref: { type: 'string' } }, required: ['tipo', 'ref'] } },
    convergencias: { type: 'array', items: { type: 'string' } },
    divergencias: { type: 'array', items: { type: 'object', additionalProperties: false, properties: { ponto: { type: 'string' }, posicoes: { type: 'array', items: { type: 'object', additionalProperties: false, properties: { petala: { type: 'string' }, posicao: { type: 'string' } }, required: ['petala', 'posicao'] } } }, required: ['ponto', 'posicoes'] } },
    dignidade: DIGNIDADE_SCHEMA, proof_first: PROOF_FIRST_SCHEMA, escala_compliance: ESCALA_COMPLIANCE_SCHEMA,
  },
  required: ['minuta', 'dignidade', 'proof_first'],
}
// Teste F (P5) — o SINTETIZADOR decide a dignidade (pode divergir do Disrupter · ponto 2)
const TESTE_F_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: { dignidade_decidida: { type: 'string', enum: ['aumenta', 'neutro', 'diminui'], description: 'leitura de dignidade do SINTETIZADOR — pode DIVERGIR do dignidade.sinal do Disrupter (ponto 2); vai p/ attempt.dignidade_impacto (§3)' }, increases_dignity: { type: 'boolean', description: '§8: =(dignidade_decidida===aumenta)' }, veredito: { type: 'string', enum: ['minuta', 'veto'] }, justificativa: { type: 'string' }, toca_compliance_pesado: { type: 'boolean', description: 'OAB/LGPD/ANPD → handoff R3' }, fontes: { type: 'array', items: { type: 'string' } } },
  required: ['dignidade_decidida', 'increases_dignity', 'veredito', 'justificativa'],
}
const REGISTRO_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: { registrado: { type: 'boolean' }, caminho: { type: 'string' }, entrada: MEMORIA_ENTRY_SCHEMA, motivo: { type: 'string' } },
  required: ['registrado'],
}
const PROMOCAO_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    promovidas: { type: 'array', items: { type: 'object', additionalProperties: false, properties: { note_id: { type: 'string' }, nova_skill_id: { type: 'string' }, justificativa: { type: 'string' } }, required: ['note_id', 'nova_skill_id'] } },
    nao_promovidas: { type: 'array', items: { type: 'object', additionalProperties: false, properties: { note_id: { type: 'string' }, motivo: { type: 'string' } }, required: ['note_id', 'motivo'] } },
  },
  required: ['promovidas', 'nao_promovidas'],
}

// ═══ FIXTURE (regressão do LOOP · 1ª rodada · memória vazia) ════════════════════
const FIXTURE_EVOLUTIVO = {
  isFixture: true,
  tema: 'rodada-exemplo — aviso de prazo (DIB Urgency) legível p/ Dona Zilda',
  data: '2026-06-04',
  memoria_snapshot: { contagem: { attempts: 0, notes: 0, skills: 0 }, attempts: [], notes: [], skills: [], pii_detectada: false, fontes_lidas: [] },
  sintese: {
    disponivel: true, tema: 'aviso DIB Urgency p/ Dona Zilda',
    minuta: 'Aviso de 1 linha, sem jargão, com 1 ação única (sem "DIB")',
    artefatos: [{ tipo: 'spec', ref: 'work-desk:aviso-dib.spec.md (exemplo)' }],
    convergencias: ['clareza > completude para Dona Zilda'],
    divergencias: [{ ponto: 'usar o termo "DIB"?', posicoes: [{ petala: 'arquiteto', posicao: 'precisão técnica' }, { petala: 'disrupter', posicao: 'jargão exclui Dona Zilda' }] }],
    dignidade: { sinal: 'aumenta', zilda_stf: true, escala_4060M: 'template reusável, não texto manual', justificativa: 'clareza sem jargão aumenta a dignidade operacional' },
    proof_first: { fontes: ['Art. 60 §1º Lei 8.213/91', 'CLAUDE.md §Protocolo DIB Urgency'], lacunas: [] },
    escala_compliance: { toca_oab_lgpd_anpd: false, nota: 'aviso informativo · atividade-meio' },
  },
  teste_f: { dignidade_decidida: 'aumenta', increases_dignity: true, veredito: 'minuta', justificativa: 'clareza sem jargão aumenta a dignidade (§8)', toca_compliance_pesado: false, fontes: ['CLAUDE.md §Teste Zilda-STF'] },
  registro: { registrado: true, caminho: 'memory/attempts/attempt-20260604-001.md', entrada: { id: 'attempt-20260604-001', tipo: 'attempt', data_criacao: '2026-06-04', fonte: 'Art. 60 §1º Lei 8.213/91', prova: 'CLAUDE.md §DIB Urgency (destilado pelo Curador)', dignidade_impacto: 'aumenta', status: 'rascunho' } },
  promocao: { promovidas: [], nao_promovidas: [] },
}

// ═══ FIXTURE de DIVERGÊNCIA (ponto 2 · regressão permanente) ════════════════════
// O Disrupter assessa 'aumenta', mas o Sintetizador DECIDE 'neutro' → o veredito
// vira 'veto' e o attempt registra a decisão do Sintetizador ('neutro'), NÃO o
// sinal do Disrupter. (teste_f_bruto traz increases_dignity/veredito incoerentes
// de propósito — a reconciliação TEM de corrigir a partir de dignidade_decidida.)
const FIXTURE_DIVERGENCIA = {
  disrupter_sinal: 'aumenta',
  teste_f_bruto: { dignidade_decidida: 'neutro', increases_dignity: true, veredito: 'minuta', justificativa: 'Sintetizador discorda do Disrupter: ganho marginal não muda a travessia da Dona Zilda', toca_compliance_pesado: false, fontes: [] },
  esperado: { increases_dignity: false, veredito: 'veto', attempt_dignidade_impacto: 'neutro' },
}

// ═══ INPUT (data via arg · args.instalado habilita delegação real ao squad) ══════
const INPUT = (typeof args !== 'undefined' && args && args.tema)
  ? { isFixture: false, tema: args.tema, data: (args.data || null), descricao: (args.descricao || ''), sintese: (args.sintese || null) }
  : FIXTURE_EVOLUTIVO

const DATA_OK = typeof INPUT.data === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(INPUT.data)
const INSTALADO = !!(typeof args !== 'undefined' && args && args.instalado === true)
const MEMORY_DIR = 'Documentação/02-Arquitetura/Squad-Evolutivo/memory'

// Reconciliação do Teste F (ponto 2): o Sintetizador decide via dignidade_decidida;
// increases_dignity e veredito DERIVAM dela (podem divergir do assessment do Disrupter).
// Helper compartilhado pelo fluxo principal E pela regressão de divergência.
function reconciliarDignidade(tf) {
  if (tf && tf.dignidade_decidida) tf.increases_dignity = (tf.dignidade_decidida === 'aumenta')
  if (tf && typeof tf.increases_dignity === 'boolean') tf.veredito = tf.increases_dignity ? 'minuta' : 'veto'
  return tf
}

// ───────────────────────── FASE 0 — MEMÓRIA (read-only) ─────────────────────────
phase('Memória')
log(`Sintetizador Evolutivo v0.4 · ${INPUT.isFixture ? 'FIXTURE' : 'tema: ' + INPUT.tema} · data=${INPUT.data || '(ausente)'} · instalado=${INSTALADO}`)
if (!INPUT.isFixture && !DATA_OK) log('⚠️ args.data ausente/!=YYYY-MM-DD — leitura segue; registrar attempt EXIGE data (§3).')

let memoria
if (INPUT.isFixture) {
  memoria = FIXTURE_EVOLUTIVO.memoria_snapshot
} else {
  memoria = await agent(
    `Você é o LEITOR DE MEMÓRIA (Explore, READ-ONLY). SEM ESCREVER NADA, leia ${MEMORY_DIR}/attempts/, ${MEMORY_DIR}/notes/ e ${MEMORY_DIR}/skills/ (ignore .gitkeep e CONTRATO-memory.md). Parseie cada entrada conforme o Contrato §3. Conte por estágio. PII (CPF/NB/CID/CNIS/senha) → pii_detectada=true (§7). Liste fontes_lidas. READ-ONLY. Retorne SOMENTE via schema.`,
    { agentType: 'Explore', label: 'fase0:ler-memoria', phase: 'Memória', schema: MEMORIA_SNAPSHOT_SCHEMA }
  )
}
log(`memory/: ${memoria.contagem.attempts}a · ${memoria.contagem.notes}n · ${memoria.contagem.skills}s${memoria.pii_detectada ? ' · ⚠️ PII (§7)' : ''}`)

// ─────────────── FASES 1-3 — PROPOSTA (delegação real → `sintese`) ───────────────
// arquiteto (minuta/artefatos) → disrupter (dignidade) → guardião-catraca
// (proof_first fontes/lacunas + escala_compliance) → auxiliar consolida.
phase('Proposta')
let sintese
if (INPUT.isFixture) {
  sintese = FIXTURE_EVOLUTIVO.sintese
} else if (INPUT.sintese) {
  sintese = { disponivel: true, ...INPUT.sintese } // override manual (teste sem agentes)
} else if (!INSTALADO) {
  sintese = { disponivel: false, nota: 'agentes do squad não instalados em .claude/agents/ — passe args.instalado=true (pós-instalação) ou args.sintese p/ exercitar.' }
} else {
  const arq = await agent(
    `Você é o ARQUITETO DO INVISÍVEL (Guardião do SDD). Tema: "${INPUT.tema}". Contexto (notes da memory/): ${JSON.stringify(memoria.notes)}. Produza a 'minuta' (proposta SDD, atividade-MEIO — nunca atividade-fim jurídica) e 'artefatos' como PONTEIROS p/ specs no Cérebro 1 (não inline). Retorne SOMENTE via schema.`,
    { agentType: 'arquiteto-invisivel', label: 'fase1:arquiteto', phase: 'Proposta', schema: ARQUITETO_SCHEMA }
  )
  const dis = await agent(
    `Você é o DISRUPTER DA ESCALA ZILDA (lente read-only). Avalie a minuta: "${arq.minuta}". Aplique Teste Zilda-STF + escala 40-60M + dependência. Produza 'dignidade' { sinal (aumenta/neutro/diminui · seu assessment — o Sintetizador pode divergir) · zilda_stf (bool) · escala_4060M · justificativa }. Retorne SOMENTE via schema.`,
    { agentType: 'disrupter-escala-zilda', label: 'fase2:disrupter', phase: 'Proposta', schema: DISRUPTER_SCHEMA }
  )
  const gua = await agent(
    `Você é o GUARDIÃO em modo CATRACA LEVE (só Proof-First — NÃO adjudica compliance pesado; se tocar OAB/LGPD/ANPD além de Proof-First, marque toca_oab_lgpd_anpd=true → escala R3). Sobre a minuta: "${arq.minuta}". Produza 'proof_first' { fontes[] (todas as fontes da rodada) · lacunas[] (gaps de lastro — NÃO invente) } — o Curador destila os singulares fonte/prova no registro — e 'escala_compliance'. Retorne SOMENTE via schema.`,
    { agentType: 'guardiao-grimorio', label: 'fase3a:guardiao-catraca', phase: 'Proposta', schema: GUARDIAO_CATRACA_SCHEMA }
  )
  const aux = await agent(
    `Você é o AUXILIAR DO SINTETIZADOR. CONSOLIDE os pareceres das pétalas numa 'sintese' (minuta provisória), PRESERVANDO divergências COM AUTORIA (não force consenso, não decida, não vete). Arquiteto: ${JSON.stringify(arq)}. Disrupter: ${JSON.stringify(dis)}. Guardião: ${JSON.stringify(gua)}. Monte convergencias + divergencias[{ponto,posicoes:[{petala,posicao}]}] e carregue dignidade/proof_first/escala_compliance. Retorne SOMENTE via schema (Documentação/02-Arquitetura/Squad-Evolutivo/specs/SINTESE_SCHEMA.md).`,
    { agentType: 'sintetizador-auxiliar', label: 'fase3b:auxiliar', phase: 'Proposta', schema: SINTESE_SCHEMA }
  )
  sintese = { disponivel: true, ...aux }
}
log(`Proposta: ${sintese.disponivel ? 'sintese pronta · lacunas=' + ((sintese.proof_first && sintese.proof_first.lacunas) ? sintese.proof_first.lacunas.length : '?') : 'PENDENTE'}`)

// ───────────────────────── TESTE F (P5) — o Sintetizador decide a dignidade ─────────────────────────
phase('Teste F')
let testeF
if (INPUT.isFixture) {
  testeF = FIXTURE_EVOLUTIVO.teste_f
} else if (!sintese.disponivel) {
  testeF = { dignidade_decidida: 'diminui', increases_dignity: false, veredito: 'veto', justificativa: 'sem sintese (Fases 1-3 pendentes)', toca_compliance_pesado: false, fontes: [] }
} else {
  testeF = await agent(
    `Você é o SINTETIZADOR aplicando o TESTE DE ACEITAÇÃO F (§8): "Isso AUMENTA a dignidade operacional da Dona Zilda?" (Teste Zilda-STF). O Disrupter trouxe dignidade.sinal="${(sintese.dignidade && sintese.dignidade.sinal) || '?'}" — você PODE DIVERGIR; VOCÊ decide. Informe dignidade_decidida (aumenta/neutro/diminui · sua leitura) e increases_dignity = (dignidade_decidida === aumenta). toca_compliance_pesado=true se tocar OAB/LGPD/ANPD além de Proof-First (→ R3). Proof-First: cite fonte. Sintese: ${JSON.stringify(sintese)}. Retorne SOMENTE via schema.`,
    { label: 'fase:teste-F', phase: 'Teste F', schema: TESTE_F_SCHEMA }
  )
}
// o Sintetizador decide via dignidade_decidida (ponto 2) — mesma lógica que a regressão de divergência testa
reconciliarDignidade(testeF)
log(`Teste F: dignidade_decidida=${testeF.dignidade_decidida} → ${testeF.veredito}${testeF.toca_compliance_pesado ? ' · ⚠️ compliance pesado → R3' : ''}`)

// ───────────────────────── CURADORIA (P4 §3 · P6 §4) — via Curador (§6) ─────────────────────────
phase('Curadoria')
const pf = sintese.proof_first || {}
const temFontes = !!(pf.fontes && pf.fontes.length)     // ponto 4 + Decisão 4: precisa de fonte(s) p/ o Curador destilar fonte+prova (§3)
const temLacunas = !!(pf.lacunas && pf.lacunas.length)  // Decisão 4: lacunas bloqueiam validado/skill
const idSeq = String((memoria.contagem.attempts || 0) + 1).padStart(3, '0') // varia por índice
const attemptId = DATA_OK ? `attempt-${INPUT.data.replace(/-/g, '')}-${idSeq}` : null
// fonte/prova NÃO entram aqui — o Curador DESTILA no registro (ponto 4). dignidade vem do Sintetizador (ponto 2).
const attemptProposto = {
  id: attemptId, tipo: 'attempt', data_criacao: (INPUT.data || null),
  dignidade_impacto: ((testeF && testeF.dignidade_decidida) || (sintese.dignidade && sintese.dignidade.sinal) || 'neutro'),
  status: 'rascunho', // validado é PROMOÇÃO separada (bloqueada por lacunas — Decisão 4)
}

let registro, promocao
if (INPUT.isFixture) {
  registro = FIXTURE_EVOLUTIVO.registro; promocao = FIXTURE_EVOLUTIVO.promocao
} else if (!sintese.disponivel) {
  registro = { registrado: false, motivo: 'sem sintese (Fases 1-3 pendentes)' }; promocao = { promovidas: [], nao_promovidas: [] }
} else if (memoria.pii_detectada) {
  registro = { registrado: false, motivo: 'PII na memory/ (§7) — incidente, NÃO registra' }; promocao = { promovidas: [], nao_promovidas: [] }
} else if (!DATA_OK) {
  registro = { registrado: false, motivo: 'sem args.data válida — §3 exige data_criacao', entrada: attemptProposto }; promocao = { promovidas: [], nao_promovidas: [] }
} else if (!temFontes) {
  registro = { registrado: false, motivo: 'Decisão 4: §3 exige fonte+prova; sem fontes na rodada p/ o Curador destilar (lacunas: ' + ((pf.lacunas || []).join('; ') || '—') + ')', entrada: attemptProposto }; promocao = { promovidas: [], nao_promovidas: [] }
} else if (!INSTALADO) {
  registro = { registrado: false, motivo: 'guardião (Curador) não instalado em .claude/agents/ — payload pronto; passe args.instalado=true', entrada: attemptProposto }; promocao = { promovidas: [], nao_promovidas: [] }
} else {
  // P4 — invocação REAL do Curador: DESTILA fonte+prova + GRAVA o attempt (motor não grava · §6)
  registro = await agent(
    `Você é o CURADOR (guardiao-grimorio), ÚNICO que escreve na memory/. Confirme ausência de PII (§7). DESTILE 'fonte' e 'prova' singulares (§3) a partir das fontes da rodada ${JSON.stringify(pf.fontes || [])} (Decisão 4: fonte+prova OBRIGATÓRIOS — se não houver lastro real p/ destilar, registrado=false). GRAVE ${MEMORY_DIR}/attempts/${attemptId}.md com este template + a fonte/prova destiladas (Proof-First, não invente): ${JSON.stringify(attemptProposto)}. status=rascunho; lacunas (${JSON.stringify(pf.lacunas || [])}) BLOQUEIAM virar validado (Decisão 4). Retorne a entrada completa via schema.`,
    { agentType: 'guardiao-grimorio', label: 'P4:registrar-attempt', phase: 'Curadoria', schema: REGISTRO_SCHEMA }
  )
  // P6 — promoção note→skill (§4 + Decisão 4)
  promocao = await agent(
    `Você é o CURADOR (guardiao-grimorio). Avalie PROMOÇÃO note→skill conforme o Contrato §4 E a Decisão 4: promova SÓ se (a) reproduzida em ≥2 rodadas independentes, (b) sem contraexemplo, (c) fonte preenchida, (d) dignidade_impacto ≠ diminui, (e) SEM lacunas de proof. Notes: ${JSON.stringify(memoria.notes)}. Attempts: ${JSON.stringify(memoria.attempts)}. Grave skills promovidas em ${MEMORY_DIR}/skills/ (§3; substituição vira -v2, §5). Retorne SOMENTE via schema.`,
    { agentType: 'guardiao-grimorio', label: 'P6:promover', phase: 'Curadoria', schema: PROMOCAO_SCHEMA }
  )
}
log(`Curadoria: attempt ${registro.registrado ? 'registrado (' + (registro.caminho || attemptId) + ')' : 'NÃO — ' + (registro.motivo || '')} · promovidas: ${promocao.promovidas.length}`)

// Regressão permanente do PONTO 2 — divergência dignidade_decidida ≠ disrupter.sinal.
// Roda só no fixture · usa o MESMO reconciliarDignidade() do fluxo de produção.
const _loopOk = INPUT.isFixture && testeF.veredito === 'minuta' && testeF.dignidade_decidida === 'aumenta' && registro.registrado === true && registro.entrada && registro.entrada.status === 'rascunho' && promocao.promovidas.length === 0
let _regDiv = null
if (INPUT.isFixture) {
  const _tfd = reconciliarDignidade({ ...FIXTURE_DIVERGENCIA.teste_f_bruto })
  const _attDig = (_tfd.dignidade_decidida || FIXTURE_DIVERGENCIA.disrupter_sinal || 'neutro') // o que iria p/ attempt.dignidade_impacto
  const _ok = _tfd.increases_dignity === FIXTURE_DIVERGENCIA.esperado.increases_dignity && _tfd.veredito === FIXTURE_DIVERGENCIA.esperado.veredito && _attDig === FIXTURE_DIVERGENCIA.esperado.attempt_dignidade_impacto && _attDig !== FIXTURE_DIVERGENCIA.disrupter_sinal
  _regDiv = { veredito: _ok ? 'PASSOU' : 'REPROVADO', cenario: 'Sintetizador decide neutro contra disrupter.sinal=aumenta → veto · attempt grava neutro (não aumenta)', obtido: { increases_dignity: _tfd.increases_dignity, veredito: _tfd.veredito, attempt_dignidade_impacto: _attDig } }
}

// ───── STOP no GATE — motor NÃO sela · NÃO escreve no Vault · NÃO grava na memory/ ─────
return {
  modo: INPUT.isFixture ? 'FIXTURE (regressão do loop)' : (INSTALADO ? 'execução real (squad instalado)' : 'execução real parcial (squad não instalado)'),
  workflow: 'sintetizador-evolutivo',
  versao: 'v0.4 · Lote 3 (shape rev. pontos 2/4) — Sintetizador decide dignidade · Curador destila fonte/prova',
  rodada: { tema: INPUT.tema, data: (INPUT.data || null), data_valida: DATA_OK },
  memoria, sintese, teste_f: testeF, curadoria: { registro, promocao },
  handoff_r3: (testeF && testeF.toca_compliance_pesado) ? 'PENDENTE — minuta toca compliance pesado → Dra. Juliana (handoff R3 = Lote 4)' : 'não aplicável nesta rodada',
  schema_autoridade: { sintese: 'Documentação/02-Arquitetura/Squad-Evolutivo/specs/SINTESE_SCHEMA.md (v1.1)', memory: 'Documentação/02-Arquitetura/Squad-Evolutivo/memory/CONTRATO-memory.md (v0.3 · §3/§4/§7)' },
  gate: 'humano (Founder) · STOP — o motor NÃO sela, NÃO escreve no Vault e NÃO grava na memory/ (invoca o Curador). ADR-011.',
  fases_pendentes: [{ fase: 'Handoff R3', detalhe: 'roteamento real p/ Dra. Juliana quando toca_compliance_pesado', lote: 4 }],
  regressao_fixture: INPUT.isFixture
    ? { veredito: (_loopOk && _regDiv && _regDiv.veredito === 'PASSOU') ? 'PASSOU' : 'REPROVADO', loop_principal: _loopOk ? 'PASSOU' : 'REPROVADO', divergencia_ponto2: _regDiv, nota: 'happy-path (minuta · attempt rascunho · 0 promoções §4) + divergência ponto 2 (Sintetizador decide neutro contra disrupter=aumenta → veto · attempt grava neutro)' }
    : null,
  rastreabilidade: {
    lastro: ['Documentação/02-Arquitetura/Squad-Evolutivo/agents/arquiteto-invisivel.md', 'Documentação/02-Arquitetura/Squad-Evolutivo/agents/disrupter-escala-zilda.md', 'Documentação/02-Arquitetura/Squad-Evolutivo/agents/sintetizador-auxiliar.md', 'Documentação/02-Arquitetura/Squad-Evolutivo/agents/guardiao-grimorio.md', 'Documentação/02-Arquitetura/Squad-Evolutivo/specs/SINTESE_SCHEMA.md', 'Documentação/02-Arquitetura/Squad-Evolutivo/memory/CONTRATO-memory.md', 'CLAUDE.md'],
    governanca: ['D>C>V', 'Proof-First', 'Firewall-OAB', 'LGPD', 'ADR-011', 'Contrato v0.3 §2/§3/§4/§6/§7/§8', 'Decisão 4', 'pontos 2/4'],
  },
  proximo_passo: INPUT.isFixture
    ? 'Lote 4: handoff R3 real + (gate) instalar o squad em .claude/agents/ p/ rodar de fato'
    : (!DATA_OK ? 'fornecer args.data (YYYY-MM-DD)' : (!INSTALADO ? 'instalar o squad em .claude/agents/ + args.instalado=true' : 'rodada real completa — revisar no gate')),
}
