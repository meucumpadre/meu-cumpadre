/**
 * ════════════════════════════════════════════════════════════════════════════
 *  MC-WORKFLOW · SQUAD-R2  ·  Rito R2 (Cunhagem Fundacional)
 *  v0.1 PROVISIONAL · 2026-06-03 · cloud-portable (scriptPath relativo, sem C1)
 * ════════════════════════════════════════════════════════════════════════════
 *
 *  ESCOPO  Executa o RITO R2 sobre um artefato FUNDACIONAL (ADR · Principio ·
 *  refactor do CLAUDE.md · mudanca de stack). O rito R2 = Founder + C3.1 (Cofounder)
 *  + Sister Ancia; o FOUNDER sela. Este motor faz a deliberacao do trio e devolve
 *  uma RECOMENDACAO de selagem. NAO redige o artefato, NAO sela, NAO escreve no
 *  Vault: para no gate humano (founder).
 *
 *  IRMAO do squad-r3: squad-r3 roda o rito R3 (compliance/OAB -> Dra. Juliana).
 *  Este roda o R2 (cunhagem fundacional -> trio interno -> founder sela). Quando o
 *  artefato fundacional TAMBEM toca OAB/LGPD/PII/ANPD, o R2 NAO basta: o motor
 *  marca escalada_R3 (fail-closed) e a selagem passa a exigir a Dra. Juliana ANTES.
 *
 *  5 FASES
 *   F0 Enquadrar (Explore, read-only) — classifica o tipo, mapeia o que muda,
 *      acha candidatos a supersessao, e DETECTA toque em OAB/LGPD/PII/ANPD -> escalada R3.
 *   F1 C3.1 (Cofounder) — cunhagem intelectual: fortalece a tese, conecta ao canone,
 *      nomeia o que cimenta/supersede, aponta lacunas doutrinarias.
 *   F2 Sister Ancia (agente real, agentType:'sister-ancia') — contraintuicao
 *      adversarial: varre os eixos de drift, achados com severidade BLOQUEIA/CORRIGIR/NOTA.
 *   F3 Coerencia + Supersessao + Versao — disciplina de cunhagem: coerencia com o
 *      canone, mapa de supersessao, bump de versao, banner de supersedencia.
 *   F4 Sintese — veredito DETERMINISTICO (PRONTO-PARA-SELAR / CONDICIONADO / VOLTA)
 *      + o que corrigir + pendencias_R2 + escalada_R3. STOP no gate (founder sela).
 *
 *  GOVERNANCA DURA (fail-closed)
 *   · D > C > V lexicografico: achado BLOQUEIA da Ancia (Dignidade/Compliance) => VOLTA.
 *   · Proof-First: cada saida cita fonte:linha; sem lastro -> [FONTE PENDENTE].
 *   · Firewall: artefato fundacional e Zona Verde (doutrina/método); PII NUNCA entra
 *     em prompt. Se o artefato toca OAB/LGPD/PII/ANPD -> escalada_R3 (Dra. Juliana).
 *   · NAO redige o artefato · NAO sela · NAO escreve no Vault · devolve rascunho.
 *
 *  REGRAS DE WORKFLOW: Date.now()/Math.random()/new Date() NAO existem (quebram o
 *  resume) — timestamps por args, variar por indice. meta e literal puro.
 * ════════════════════════════════════════════════════════════════════════════
 */

export const meta = {
  name: 'squad-r2',
  description: 'Executa o RITO R2 (cunhagem fundacional) sobre um artefato fundacional (ADR, Principio, refactor do CLAUDE.md, mudanca de stack). 5 fases: F0 Enquadrar (+ escalada R3 fail-closed se tocar OAB/LGPD/PII/ANPD) · F1 C3.1 Cofounder (cunhagem intelectual) · F2 Sister Ancia (contraintuicao adversarial, agente real) · F3 Coerencia + supersessao + disciplina de versao · F4 Sintese -> veredito PRONTO-PARA-SELAR / CONDICIONADO / VOLTA + mapa de supersessao + bump de versao + pendencias. Sem args = fixture de regressao. NAO redige o artefato, NAO sela, NAO escreve no Vault: para no gate (founder sela; C3.1 e a Ancia deliberam). Gatilhos: "rito R2", "squad r2", "cunhar este ADR/Principio", "posso selar este fundacional?", "deliberar com C3.1 e a Ancia".',
  phases: [
    { title: 'Enquadrar', detail: 'Explore (read-only) classifica o tipo, mapeia o que muda, acha supersessao, detecta toque OAB/LGPD/PII/ANPD -> escalada R3' },
    { title: 'C3.1', detail: 'Cofounder: cunhagem intelectual — fortalece a tese, conecta ao canone, nomeia supersessoes e lacunas' },
    { title: 'Ancia', detail: 'Sister Ancia (agente real): contraintuicao adversarial — achados BLOQUEIA/CORRIGIR/NOTA por eixo' },
    { title: 'Coerencia', detail: 'Disciplina de cunhagem: coerencia canonica + mapa de supersessao + bump de versao + banner' },
    { title: 'Sintese', detail: 'Veredito deterministico + o que corrigir + pendencias_R2 + escalada_R3 · STOP no gate (founder sela)' },
  ],
}

// ── FIXTURE de regressao (Zona Verde · de-identificado) ─────────────────────────
// Exercita o caminho CONDICIONADO + escalada_R3: um ADR plausivel que supersede
// outro E passa a tratar metadado com PII (CPF do signatario) -> tem que escalar p/ R3.
// Testa o JULGAMENTO do rito, nao um caso real. ZERO PII real (CPF do signatario e
// citado como CONCEITO do fluxo, nao um numero).
const FIXTURE = {
  caso: 'fixture R2 (regressao)',
  isFixture: true,
  tipo: 'ADR',
  titulo: 'ADR-EXEMPLO: adotar a Ferramenta Z para assinatura eletronica (supersede o ADR de assinatura anterior)',
  texto: [
    '# ADR-EXEMPLO — Plataforma de Assinatura Eletronica (Ferramenta Z)',
    'Status: PROPOSTO. Decisao: adotar a Ferramenta Z e SUPERSEDER o ADR de assinatura anterior.',
    'Contexto: precisamos de assinatura com trilha de auditoria. A Ferramenta Z atende.',
    'Consequencia: o fluxo passa a tratar METADADOS de assinatura, que incluem o CPF do signatario.',
    'Versao: v1.0. Nao traz banner de supersedencia apontando o ADR que esta sendo superado.',
  ].join('\n'),
}

// Caso real via args { artefato_texto? (preferido, inline/Zona Verde), artefato_path?, tipo?, caso? }
// Em cloud, prefira artefato_texto (inline); artefato_path so resolve se for relativo ao repo.
const INPUT = (args && (args.artefato_texto || args.artefato_path))
  ? {
      caso: args.caso || 'artefato R2',
      isFixture: false,
      tipo: args.tipo || '(detectar)',
      artefato_texto: args.artefato_texto || null,
      artefato_path: args.artefato_path || null,
    }
  : FIXTURE

const MAT = INPUT.isFixture
  ? `ARTEFATO FUNDACIONAL (fixture · Zona Verde · de-identificado):\nTipo declarado: ${FIXTURE.tipo}\nTitulo: ${FIXTURE.titulo}\n\n${FIXTURE.texto}`
  : (INPUT.artefato_texto
      ? `ARTEFATO FUNDACIONAL (inline · Zona Verde):\n${INPUT.artefato_texto}`
      : `ARTEFATO FUNDACIONAL no caminho abaixo (leia-o; em sessao cloud o caminho precisa ser RELATIVO a raiz do repo). Se houver PII, NAO a transcreva — marque escalada_R3:\n${INPUT.artefato_path}`)

// ───────────────────────── F0 — ENQUADRAR (Explore, read-only) ─────────────────────────
phase('Enquadrar')
log(`Enquadrando artefato R2 · caso: ${INPUT.caso}`)

const ENQ_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    tipo: { type: 'string', description: 'ADR | Principio | refactor-CLAUDE.md | mudanca-stack | outro-fundacional' },
    resumo: { type: 'string' },
    o_que_muda: { type: 'array', items: { type: 'string' }, description: 'o que este artefato altera no canone' },
    supersede_candidatos: { type: 'array', items: { type: 'string' }, description: 'artefatos que ESTE parece superar (com fonte:linha se possivel)' },
    toca_oab_lgpd_pii_anpd: { type: 'boolean', description: 'true se o artefato envolve OAB, LGPD, PII (CPF/NB/CID/CNIS), ANPD ou soberania individual' },
    motivo_escalada: { type: 'string', description: 'por que (ou por que nao) escala para R3' },
    escalada_R3: { type: 'boolean', description: 'true => a selagem exige a Dra. Juliana (R3) ANTES. Na duvida, true (fail-closed).' },
    fontes: { type: 'array', items: { type: 'string' } },
  },
  required: ['tipo', 'resumo', 'o_que_muda', 'toca_oab_lgpd_pii_anpd', 'escalada_R3', 'fontes'],
}

const enquadre = await agent(
  `Voce e o ENQUADRADOR (papel Explore, read-only) do rito R2 (cunhagem fundacional) do Meu Cumpadre. F0.\n\n${MAT}\n\nTAREFA: (a) classifique o TIPO (ADR / Principio / refactor-CLAUDE.md / mudanca-stack / outro-fundacional); (b) liste o_que_muda no canone; (c) ache supersede_candidatos (o que este artefato parece SUPERAR) com fonte:linha quando der; (d) DETECTE se ele toca OAB, LGPD, PII (CPF/NB/CID/CNIS), ANPD ou Soberania Individual -> se sim, escalada_R3=true (na duvida, TRUE — fail-closed). Proof-First (fonte:linha; sem lastro -> [FONTE PENDENTE]).\n\nFIREWALL: o artefato e Zona Verde (doutrina/método). Se houver PII real no material, NAO a transcreva. Retorne SOMENTE via schema.`,
  { agentType: 'Explore', label: 'enquadrador', phase: 'Enquadrar', schema: ENQ_SCHEMA }
)

// ───────────────────────── F1 — C3.1 (Cofounder · cunhagem intelectual) ─────────────────────────
phase('C3.1')

const C31_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    tese_fortalecida: { type: 'string', description: 'a tese do artefato, articulada na sua forma mais defensavel' },
    conexoes_canone: { type: 'array', items: { type: 'string' }, description: 'como conecta a D>C>V, ADRs, Principios existentes (fonte:linha)' },
    pontos_fortes: { type: 'array', items: { type: 'string' } },
    lacunas_doutrinarias: { type: 'array', items: { type: 'string' }, description: 'o que falta amarrar antes de virar canone' },
    supersede_confirmado: { type: 'array', items: { type: 'string' }, description: 'o que ESTE cimenta/supersede, confirmado' },
    fontes: { type: 'array', items: { type: 'string' } },
  },
  required: ['tese_fortalecida', 'conexoes_canone', 'lacunas_doutrinarias', 'fontes'],
}

const c31 = await agent(
  `Voce e o C3.1 (Cofounder, cunhagem intelectual) do Meu Cumpadre. F1 do rito R2. Sua voz e CONSTRUTIVA mas honesta: voce fortalece a cunhagem, nao bajula.\n\nENQUADRAMENTO (F0):\n${JSON.stringify(enquadre, null, 2)}\n\n${MAT}\n\nTAREFA: (a) articule a tese na forma mais defensavel; (b) conecte ao canone (D>C>V, ADRs, Principios — fonte:linha); (c) nomeie pontos_fortes e o que ele cimenta/supersede; (d) aponte lacunas_doutrinarias que precisam ser amarradas antes de selar. Proof-First. NAO redija o artefato final (so fortaleca a tese). Retorne SOMENTE via schema.`,
  { label: 'c3.1-cofounder', phase: 'C3.1', schema: C31_SCHEMA }
)

// ───────────────────────── F2 — SISTER ANCIA (agente real · contraintuicao adversarial) ─────────────────────────
phase('Ancia')

const ANCIA_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    achados: {
      type: 'array',
      items: {
        type: 'object', additionalProperties: false,
        properties: {
          severidade: { type: 'string', enum: ['BLOQUEIA', 'CORRIGIR', 'NOTA'], description: 'BLOQUEIA (vermelho, trava selagem) / CORRIGIR (amarelo) / NOTA (azul)' },
          eixo: { type: 'string', description: 'D>C>V | Firewall OAB | Proof-First | LGPD | Inversao Cosmica | confusao de instancia | gate/versao | supersessao | outro' },
          o_que: { type: 'string' },
          fonte: { type: 'string', description: 'arquivo:linha (Proof-First)' },
        },
        required: ['severidade', 'eixo', 'o_que'],
      },
    },
    veredito_ancia: { type: 'string', description: 'a 1a frase ja diz o veredito (estilo Anciã)' },
    ponto_cego: { type: 'string', description: 'a frase contraintuitiva que o trio nao esta vendo' },
  },
  required: ['achados', 'veredito_ancia', 'ponto_cego'],
}

const ancia = await agent(
  `Revise ADVERSARIALMENTE este artefato FUNDACIONAL antes de ele ser SELADO no canone (rito R2). Voce e a 3a voz — contraintuicao pura; reporta o ponto cego, nao conserta.\n\n${MAT}\n\nO C3.1 (Cofounder) disse:\n${JSON.stringify(c31, null, 2)}\n\nVarra os eixos de drift: D>C>V (Dignidade lexicografica), Firewall OAB (atividade-meio), Proof-First (fonte:linha, nada fabricado), LGPD/PII por instancia, Inversao Cosmica, confusao de instancia, disciplina de gate/versao, e SUPERSESSAO (este artefato supersede algo sem dizer?). Para cada achado: severidade (BLOQUEIA / CORRIGIR / NOTA), eixo, o_que e fonte. BLOQUEIA = fere Dignidade/Compliance ou incoerencia que NAO pode ser selada. NAO conserte. Retorne SOMENTE via schema.`,
  { agentType: 'sister-ancia', label: 'sister-ancia', phase: 'Ancia', schema: ANCIA_SCHEMA }
)

// ───────────────────────── F3 — COERENCIA + SUPERSESSAO + VERSAO ─────────────────────────
phase('Coerencia')

const COER_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    coerencia: { type: 'boolean', description: 'o artefato e coerente com o canone existente?' },
    notas_coerencia: { type: 'string' },
    supersessao_map: {
      type: 'array',
      items: {
        type: 'object', additionalProperties: false,
        properties: {
          artefato: { type: 'string', description: 'o artefato afetado/superado' },
          o_que_vira: { type: 'string', description: 'fica SUPERSEDIDO / atualizado inline / banner de supersedencia' },
        },
        required: ['artefato', 'o_que_vira'],
      },
    },
    versao_de: { type: 'string' },
    versao_para: { type: 'string', description: 'bump proposto (ex.: v1.0 -> v1.1 ou ADR novo)' },
    disciplina_versao_ok: { type: 'boolean', description: 'a versao/numeracao segue a disciplina MC?' },
    exige_banner_supersedencia: { type: 'boolean', description: 'true se algum selado precisa de banner apontando o que o superou' },
    lastro: { type: 'array', items: { type: 'string' } },
  },
  required: ['coerencia', 'supersessao_map', 'disciplina_versao_ok', 'exige_banner_supersedencia', 'lastro'],
}

const coer = await agent(
  `Voce e o GUARDIAO DA DISCIPLINA DE CUNHAGEM do rito R2 (a disciplina que sustenta a selagem do founder). F3.\n\nENQUADRAMENTO:\n${JSON.stringify(enquadre, null, 2)}\n\nC3.1:\n${JSON.stringify(c31, null, 2)}\n\nANCIA:\n${JSON.stringify(ancia, null, 2)}\n\n${MAT}\n\nTAREFA: (a) o artefato e COERENTE com o canone? (b) monte o supersessao_map (cada artefato afetado -> fica supersedido / atualizado inline / recebe banner); regra MC: operacionais atualizam INLINE, selados recebem BANNER de supersedencia; (c) proponha o bump de versao (de -> para) e diga se a disciplina_versao_ok; (d) marque exige_banner_supersedencia. Proof-First (fonte:linha). Retorne SOMENTE via schema.`,
  { label: 'coerencia-supersessao', phase: 'Coerencia', schema: COER_SCHEMA }
)

// ── VEREDITO DETERMINISTICO (Dignidade lexicografica) ──────────────────────────
const achados = Array.isArray(ancia.achados) ? ancia.achados : []
const nBloqueia = achados.filter(a => a && a.severidade === 'BLOQUEIA').length
const nCorrigir = achados.filter(a => a && a.severidade === 'CORRIGIR').length
const escalaR3 = enquadre.escalada_R3 === true
let veredito = 'PRONTO-PARA-SELAR'
if (nBloqueia > 0 || coer.coerencia === false) {
  veredito = 'VOLTA'
} else if (escalaR3 || nCorrigir > 0 || coer.disciplina_versao_ok === false) {
  veredito = 'CONDICIONADO'
}

// ───────────────────────── F4 — SINTESE (recomendacao p/ o founder selar) ─────────────────────────
phase('Sintese')

const SINT_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    veredito: { type: 'string', enum: ['PRONTO-PARA-SELAR', 'CONDICIONADO', 'VOLTA'] },
    justificativa: { type: 'string' },
    o_que_corrigir_antes_de_selar: { type: 'array', items: { type: 'string' } },
    mapa_supersessao: { type: 'array', items: { type: 'string' }, description: 'resumo legivel do supersessao_map' },
    versao_proposta: { type: 'string' },
    pendencias_R2: { type: 'array', items: { type: 'string' }, description: 'o que fica para a decisao do founder no gate R2' },
    escalada_R3: { type: 'boolean' },
    nota_de_selagem: { type: 'string', description: 'o que o founder precisa saber antes de selar (1 paragrafo)' },
  },
  required: ['veredito', 'justificativa', 'o_que_corrigir_antes_de_selar', 'versao_proposta', 'pendencias_R2', 'escalada_R3'],
}

const sintese = await agent(
  `Voce e o SINTETIZADOR do rito R2. O VEREDITO DETERMINISTICO ja foi computado e NAO pode ser amaciado: "${veredito}" (regra: BLOQUEIA da Ancia OU incoerencia => VOLTA; escalada_R3 OU CORRIGIR OU versao-irregular => CONDICIONADO; senao PRONTO-PARA-SELAR. Dignidade e lexicografica). escalada_R3 = ${escalaR3}.\n\nConsolide para o FOUNDER decidir SELAR. Insumos:\nENQUADRE: ${JSON.stringify(enquadre)}\nC3.1: ${JSON.stringify(c31)}\nANCIA: ${JSON.stringify(ancia)}\nCOERENCIA: ${JSON.stringify(coer)}\n\nEntregue: justificativa do veredito, o_que_corrigir_antes_de_selar, mapa_supersessao (legivel), versao_proposta, pendencias_R2, e nota_de_selagem. Se escalada_R3=true, deixe EXPLICITO que a SELAGEM exige a Dra. Juliana (R3) ANTES (OAB/LGPD/PII/ANPD). Use veredito="${veredito}". NAO redija o artefato. NAO sele. Retorne SOMENTE via schema.`,
  { label: 'sintetizador-r2', phase: 'Sintese', schema: SINT_SCHEMA }
)

// ───────────────────────── STOP no GATE R2 — o founder sela ─────────────────────────
return {
  caso: INPUT.caso,
  tipo: enquadre.tipo,
  veredito,
  escalada_R3: escalaR3,
  gate_R2: 'DECISAO HUMANA PENDENTE — o FOUNDER sela (rito R2 = Founder + C3.1 + Ancia). C3.1 e a Ancia deliberaram; o motor estressou e recomendou. NAO redigiu o artefato, NAO selou, NAO escreveu no Vault.' + (escalaR3 ? ' >>> ESCALADA R3: a selagem exige a Dra. Juliana (OAB/LGPD/PII/ANPD) ANTES — o R2 sozinho NAO basta.' : ''),
  sintese,
  // deliberacao das 5 fases (Proof-First · auditavel):
  deliberacao: {
    f0_enquadre: enquadre,
    f1_c31: c31,
    f2_ancia: ancia,
    f3_coerencia: coer,
  },
}
