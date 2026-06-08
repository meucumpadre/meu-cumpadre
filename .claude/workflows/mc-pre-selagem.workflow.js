/**
 * ════════════════════════════════════════════════════════════════════════════
 *  MC-WORKFLOW · PRÉ-SELAGEM  ·  Ritual de gate ANTES de selar no Vault
 *  v0.1 PROVISIONAL · RASCUNHO · 2026-06-02 · drop zone (instalação no .claude/ = gate)
 * ════════════════════════════════════════════════════════════════════════════
 *
 *  ESCOPO  Automatiza o ritual pré-selagem sobre UM artefato/diff que se quer
 *  selar no Vault. Roda 3 checagens (Camada 0 mc-lint · Camada 1 sister-ancia ·
 *  disciplina de rito/gate) e consolida num VEREDITO: PODE-SELAR / CONDICIONADO /
 *  BLOQUEADO, com o rito exato requerido (R1/R2/R3). O motor NÃO sela e NÃO
 *  escreve no Vault — entrega o go/no-go ao humano (ADR-011: só Code TALÃO sela,
 *  sob "aprovado para vault").
 *
 *  NÃO CONFUNDIR: este é o GATE de selagem (qualidade/conformidade de qualquer
 *  artefato MC). NÃO é o squad-r3 (parecer de compliance de política/preço), nem
 *  o mc-compasso-sweep (curadoria de fontes), nem o mc-especimen (motor de casos).
 *
 *  GOVERNANÇA (fail-closed · D > C > V lexicográfico)
 *   · NÃO sela, NÃO escreve no Vault, NÃO conserta — só diagnostica e barra.
 *   · Proof-First: cada achado com fonte:linha; sem lastro → [GATE].
 *   · Na dúvida, BLOQUEIA (a régua é de exclusão; falso-negativo de selagem é o
 *     erro mais caro — sela lixo no canônico).
 *   · R3 (OAB/LGPD/ANPD/PII) é catraca dura: artefato que codifica fronteira
 *     regulatória NÃO sela sem Dra. Juliana.
 *
 *  LASTRO (peças reais do harness · engenharia reversa, não invenção)
 *   sister-ancia — revisão adversarial 9 eixos + rodapé Anciã .. .claude/agents/sister-ancia.md §3-§4 :35-72
 *   mc-lint — Proibições Absolutas (12+ regras, warn/block) .... .claude/hooks/mc-lint.py
 *   Ritos R1/R2/R3 (operacional · fundacional · OAB/LGPD/ANPD) . CLAUDE.md §Instâncias Cognitivas & Ritos
 *   ADR-011 (Cérebro 2 Vault · escrita só sob "aprovado p/ vault") CLAUDE.md §Arquitetura 3 Cérebros
 *   Disciplina gate/versão (inline operacional · banner supersedência selado) . convenção MC (project_meu_cumpadre)
 *
 *  REGRAS: roda numa sessão com raiz no Vault (p/ sister-ancia e mc-lint
 *  estarem disponíveis). Date.now()/Math.random()/new Date() NÃO existem
 *  (quebram resume) — varie por índice, timestamps via args. meta é literal puro.
 * ════════════════════════════════════════════════════════════════════════════
 */

export const meta = {
  name: 'mc-pre-selagem',
  description: 'Ritual de gate ANTES de selar um artefato no Vault. 3 checagens: (Camada 0) mc-lint Proibições Absolutas · (Camada 1) sister-ancia revisão adversarial 9 eixos · (rito) disciplina de gate/versão + qual rito R1/R2/R3 é requerido. Consolida em VEREDITO: PODE-SELAR / CONDICIONADO / BLOQUEADO + bloqueios + gates pendentes. Sem args = roda fixture (regressão da régua de selagem). NÃO sela, NÃO escreve no Vault, NÃO conserta — devolve o go/no-go ao humano (ADR-011).',
  phases: [
    { title: 'Alvo', detail: 'identifica o artefato/diff: tipo · status · toca OAB/LGPD/PII? (Explore, read-only)' },
    { title: 'Checagens', detail: 'paralelo: Camada 0 mc-lint · Camada 1 sister-ancia (9 eixos) · disciplina rito/gate' },
    { title: 'Veredito', detail: 'consolida → PODE-SELAR / CONDICIONADO / BLOQUEADO + rito requerido (R1/R2/R3) · STOP no gate' },
  ],
}

// ── Fixture (regressão da RÉGUA DE SELAGEM · descreve achados, testa o veredito) ──
const FIXTURE_PRESELAGEM = {
  isFixture: true,
  alvos: [
    {
      nome: 'alvo-A — artefato operacional Zona Verde (limpo)',
      tipo: 'nota operacional', status: 'MINUTA', toca_oab_lgpd_pii: false,
      lint_findings: [], // mc-lint limpo
      ancia_findings: [], // sem drift
      veredito_esperado: 'PODE-SELAR', rito_esperado: 'R1',
    },
    {
      nome: 'alvo-B — artefato com token vetado + toca fronteira OAB/LGPD',
      tipo: 'doc que codifica custódia de credencial gov.br', status: 'MINUTA', toca_oab_lgpd_pii: true,
      lint_findings: ['Proibição Absoluta: preço superado (descrito p/ teste, não literal)'],
      ancia_findings: ['🔴 D>C>V: otimiza viabilidade às custas de compliance', '🟡 disciplina de gate: selando sem aprovação'],
      veredito_esperado: 'BLOQUEADO', rito_esperado: 'R3', // R3 por OAB/LGPD + 🔴 lint/ancia
    },
  ],
}

const INPUT = (args && args.alvo)
  ? { isFixture: false, alvo: args.alvo, descricao: args.descricao || '' } // args.alvo = caminho do artefato/diff
  : FIXTURE_PRESELAGEM

// ───────────────────────── FASE 0 — ALVO ─────────────────────────
phase('Alvo')
log(`Pré-selagem · ${INPUT.isFixture ? 'FIXTURE (regressão da régua de selagem)' : INPUT.alvo}`)

const ALVO_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    tipo: { type: 'string' },
    status_atual: { type: 'string', enum: ['MINUTA', 'PROVISIONAL', 'SELADO', 'desconhecido'] },
    toca_oab_lgpd_pii: { type: 'boolean', description: 'codifica fronteira OAB/LGPD/ANPD ou contém PII (CPF/NB/CID/CNIS)? → catraca R3' },
    fundacional: { type: 'boolean', description: 'ADR / Princípio / refactor do manual / mudança de stack? → R2' },
    resumo: { type: 'string' },
    fontes: { type: 'array', items: { type: 'string' } },
  },
  required: ['tipo', 'status_atual', 'toca_oab_lgpd_pii', 'fundacional', 'resumo'],
}

let alvos // lista de {alvo_meta, checagens} por artefato
if (INPUT.isFixture) {
  alvos = FIXTURE_PRESELAGEM.alvos.map((a) => ({ fixture: a }))
} else {
  const alvo_meta = await agent(
    `Você é o IDENTIFICADOR (Explore, read-only) do gate de pré-selagem MC. Leia o artefato/diff alvo:\n${INPUT.alvo}\n${INPUT.descricao ? 'Contexto: ' + INPUT.descricao : ''}\n\nClassifique: tipo · status_atual (MINUTA/PROVISIONAL/SELADO pelo frontmatter) · toca_oab_lgpd_pii (codifica fronteira OAB/LGPD/ANPD OU contém PII CPF/NB/CID/CNIS? → catraca R3) · fundacional (ADR/Princípio/refactor do manual/mudança de stack? → R2) · resumo. Proof-First: cite fonte:linha. Retorne SOMENTE via schema.`,
    { agentType: 'Explore', label: 'identificador-alvo', phase: 'Alvo', schema: ALVO_SCHEMA }
  )
  alvos = [{ alvo_meta }]
}

// ───────────────────────── FASE 1 — CHECAGENS (paralelo · Camadas 0/1/rito) ─────────────────────────
phase('Checagens')

const LINT_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    rodou: { type: 'boolean', description: 'mc-lint.py rodou de fato? (precisa de sessão na raiz do Vault)' },
    proibicoes_encontradas: { type: 'array', items: { type: 'string' }, description: 'cada hit de Proibição Absoluta (regra + trecho)' },
    resumo: { type: 'string' },
  },
  required: ['rodou', 'proibicoes_encontradas'],
}
const ANCIA_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    achados: {
      type: 'array',
      items: {
        type: 'object', additionalProperties: false,
        properties: {
          severidade: { type: 'string', enum: ['🔴', '🟡', '🔵'], description: '🔴 bloqueia selagem · 🟡 corrigir antes de evoluir · 🔵 observação' },
          eixo: { type: 'string', description: 'D>C>V / Firewall OAB / Proof-First / LGPD / Inversão Cósmica / confusão de instância / gate-versão / contradição / vetor humano' },
          gap: { type: 'string' }, regra_ferida: { type: 'string' },
        },
        required: ['severidade', 'eixo', 'gap'],
      },
    },
    rodape_ancia: { type: 'string', description: 'onde está · próximo passo único · ponto cego (4 linhas)' },
  },
  required: ['achados', 'rodape_ancia'],
}
const RITO_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    rito_requerido: { type: 'string', enum: ['R1', 'R2', 'R3'], description: 'R1 operacional (founder soberano) · R2 fundacional (Founder+C3.1+Anciã) · R3 OAB/LGPD/ANPD/PII (Dra. Juliana)' },
    gate_versao_ok: { type: 'boolean', description: 'status coerente? não está marcando SELADO sem aprovação? selado → exige banner de supersedência em vez de reescrever?' },
    problemas_gate: { type: 'array', items: { type: 'string' } },
    fontes: { type: 'array', items: { type: 'string' } },
  },
  required: ['rito_requerido', 'gate_versao_ok'],
}

async function checar(meta_alvo, alvoRef) {
  // Camada 0 — mc-lint
  const lint = await agent(
    `Você é a CAMADA 0 (mc-lint) do gate de pré-selagem. Rode \`python3 .claude/hooks/mc-lint.py --all\` (você precisa estar na raiz do Vault). Reporte CADA hit de Proibição Absoluta (preços superados, Φ₂ B2C, Router-Ethics superada, Juliana Alencar↔Melo, senha gov.br no ClickUp, DeepSeek, Autentique, promessa de resultado INSS, etc.). Se NÃO conseguir rodar (não está na raiz do Vault / sem python), rodou=false e diga — NÃO finja limpo. Alvo: ${JSON.stringify(meta_alvo)}. Proof-First. Retorne SOMENTE via schema.`,
    { agentType: 'general-purpose', label: 'camada0:mc-lint', phase: 'Checagens', schema: LINT_SCHEMA }
  )
  // Camada 1 — sister-ancia (o revisor adversarial REAL, via agentType)
  const ancia = await agent(
    `Revise adversarialmente, em contexto fresco, o artefato alvo da pré-selagem (${alvoRef}). Aplique seu checklist de 9 eixos (D>C>V, Firewall OAB, Proof-First, LGPD, Inversão Cósmica, confusão de instância, disciplina de gate/versão, contradição não-reconciliada, vetor humano + teste Zilda-STF). Reporte só gaps que afetam Dignidade/Compliance/coerência/requisito, com severidade 🔴/🟡/🔵, e feche com o rodapé Anciã. NÃO conserte. Se está coerente, declare coerente.`,
    { agentType: 'sister-ancia', label: 'camada1:sister-ancia', phase: 'Checagens', schema: ANCIA_SCHEMA }
  )
  // Rito / gate-versão
  const rito = await agent(
    `Você é o GUARDIÃO DE RITO/GATE da pré-selagem. Com base no alvo:\n${JSON.stringify(meta_alvo)}\n\nDetermine o RITO requerido (CLAUDE.md §Ritos): R1 (operacional · founder soberano) · R2 (fundacional: ADR/Princípio/refactor do manual/mudança de stack → Founder+C3.1+Anciã) · R3 (Soberania Individual/OAB/LGPD/ANPD/PII → Dra. Juliana revisa ANTES de selar). Catraca dura: toca_oab_lgpd_pii=true ⇒ R3 obrigatório. Cheque disciplina de gate/versão (ADR-011): está marcando SELADO sem "aprovado para vault"? Se SELADO, edição exige BANNER DE SUPERSEDÊNCIA (não reescrever)? Status coerente? Proof-First. Retorne SOMENTE via schema.`,
    { label: 'guardiao:rito-gate', phase: 'Checagens', schema: RITO_SCHEMA }
  )
  return { lint, ancia, rito }
}

let checados
if (INPUT.isFixture) {
  log('FIXTURE: pulando checagens reais — usando achados conhecidos (regressão do veredito).')
  checados = FIXTURE_PRESELAGEM.alvos.map((a) => ({
    fixture: a,
    lint: { rodou: true, proibicoes_encontradas: a.lint_findings },
    ancia: { achados: a.ancia_findings.map((g) => ({ severidade: g.startsWith('🔴') ? '🔴' : (g.startsWith('🟡') ? '🟡' : '🔵'), eixo: 'fixture', gap: g })), rodape_ancia: '(fixture)' },
    rito: { rito_requerido: a.toca_oab_lgpd_pii ? 'R3' : 'R1', gate_versao_ok: a.ancia_findings.every((g) => !g.includes('gate')), problemas_gate: [] },
  }))
} else {
  checados = []
  for (const a of alvos) {
    const c = await checar(a.alvo_meta, INPUT.alvo)
    checados.push({ alvo_meta: a.alvo_meta, ...c })
  }
}

// ───────────────────────── FASE 2 — VEREDITO (consolidação · STOP no gate) ─────────────────────────
phase('Veredito')

const VEREDITO_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    vereditos: {
      type: 'array',
      items: {
        type: 'object', additionalProperties: false,
        properties: {
          alvo: { type: 'string' },
          veredito: { type: 'string', enum: ['PODE-SELAR', 'CONDICIONADO', 'BLOQUEADO'] },
          rito_requerido: { type: 'string', enum: ['R1', 'R2', 'R3'] },
          bloqueios: { type: 'array', items: { type: 'string' }, description: 'o que impede selar agora (hit mc-lint, achado 🔴, etc.)' },
          gates_pendentes: { type: 'array', items: { type: 'string' }, description: 'o que falta no gate (ex.: R3 Dra. Juliana, "aprovado para vault", banner supersedência)' },
          proximo_passo: { type: 'string' },
        },
        required: ['alvo', 'veredito', 'rito_requerido', 'bloqueios', 'gates_pendentes', 'proximo_passo'],
      },
    },
    regressao_fixture: {
      type: 'object', additionalProperties: false,
      properties: { veredito: { type: 'string', enum: ['PASSOU', 'REPROVADO', 'N/A'] }, divergencias: { type: 'array', items: { type: 'string' } } },
      required: ['veredito'],
    },
  },
  required: ['vereditos', 'regressao_fixture'],
}

const consolidado = await agent(
  `Você é o CONSOLIDADOR do gate de pré-selagem (D>C>V lexicográfico). Achados das 3 checagens por alvo:\n${JSON.stringify(checados, null, 2)}\n\nREGRA DO VEREDITO:\n- BLOQUEADO se: qualquer hit de mc-lint (Proibição Absoluta) OU achado 🔴 da sister-ancia OU D>C>V invertido. (Dignidade/Compliance não negociam.)\n- CONDICIONADO se: sem 🔴, mas há rito R2/R3 pendente OU achado 🟡 OU problema de gate/versão (selando sem "aprovado para vault", status incoerente, falta banner de supersedência em selado).\n- PODE-SELAR se: mc-lint limpo + sem 🔴/🟡 + rito R1 satisfeito + gate/versão ok.\nCatraca dura: toca_oab_lgpd_pii ⇒ rito R3 (Dra. Juliana) ⇒ no MÁXIMO CONDICIONADO até parecer dela.\nPara cada alvo: veredito + rito_requerido + bloqueios + gates_pendentes + próximo_passo (UM, concreto). O motor NÃO sela — só diz o go/no-go.\n${INPUT.isFixture ? 'REGRESSÃO (fixture): compare cada veredito ao veredito_esperado/rito_esperado do fixture. regressao_fixture.veredito = PASSOU se todos batem; senão REPROVADO + divergências.' : 'regressao_fixture.veredito = "N/A".'}\nRetorne SOMENTE via schema.`,
  { label: 'consolidador:veredito', phase: 'Veredito', schema: VEREDITO_SCHEMA }
)

// ───────────── STOP no GATE — o motor NÃO sela e NÃO escreve no Vault ─────────────
return {
  modo: INPUT.isFixture ? 'FIXTURE (regressão da régua de selagem)' : 'pré-selagem real',
  gate: 'VEREDITO DE PRÉ-SELAGEM — decisão de selar é HUMANA. Por ADR-011, só o Code TALÃO escreve no Vault, sob "aprovado para vault"; R3 (OAB/LGPD/PII) exige Dra. Juliana ANTES. O motor diagnosticou e barrou; NÃO selou e NÃO escreveu nada.',
  vereditos: consolidado.vereditos,
  regressao_fixture: consolidado.regressao_fixture,
  rastreabilidade: checados,
}
