/**
 * ════════════════════════════════════════════════════════════════════════════
 *  MC-WORKFLOW · COMPASSO SWEEP  ·  Curadoria de fontes <5% (REGISTRO×ESCALÃO×JOGADA)
 *  v0.1 PROVISIONAL · RASCUNHO · 2026-06-02 · drop zone (instalação no .claude/ = gate)
 * ════════════════════════════════════════════════════════════════════════════
 *
 *  ESCOPO  Operacionaliza o método MC-RÉGUA-COMPASSO: abre um escopo/tema,
 *  decompõe em pilares, finca a âncora oficial 🎯 por pilar, caça 🛠️/💎 em
 *  leque (fan-out) e aplica a régua <5% (admissão REGISTRO×ESCALÃO×JOGADA +
 *  exclusão dura + âncora cruzada + dedup). Entrega a colheita curada: tabela +
 *  BLOCO DE URLs PURO pronto p/ NotebookLM + balotes com motivo.
 *  NÃO injeta no NotebookLM (o Founder cola — §6.3/§7) · NÃO sela · NÃO escreve no Vault.
 *
 *  NÃO CONFUNDIR: este é curadoria de INTELIGÊNCIA DE MERCADO (Zona Verde, fontes
 *  públicas). NÃO é o mc-especimen-autoevolutivo (motor de método de casos #45/#46/#47)
 *  nem o squad-r3 (parecer de compliance). Cada workflow nasce do SEU método-fonte.
 *
 *  GOVERNANÇA (fail-closed)
 *   · D > C > V · Proof-First: toda fonte com URL + data; sem rastro → [CONFERIR];
 *     nunca inventar fonte/view/data (MC-RÉGUA-COMPASSO §2.4 :145-156).
 *   · Zona Verde: SÓ inteligência de mercado PÚBLICA. NUNCA dado pessoal sensível
 *     (CPF/NB/CID/CNIS) numa fonte — o caderno é público (§6.2 :425).
 *   · Curadoria por EXCLUSÃO, não acúmulo (§1.1 :31-33). Na dúvida, CORTA (§2.2 :133).
 *   · NÃO injeta no NotebookLM, NÃO sela, NÃO escreve no Vault — devolve a colheita.
 *
 *  LASTRO (método canônico · engenharia reversa, não invenção)
 *   Compasso (REGISTRO×ESCALÃO×JOGADA) ................. MC-RÉGUA-COMPASSO:59-78
 *   Calibração <5% / exclusão dura / âncora cruzada / Proof-First ......... :108-171
 *   Rito 6 fases (Escopo→Pilares→Âncora→Caça→Curadoria→Persistir) ......... :233-332
 *   Esquadrão (Caçador×N · Âncora-Oficial · Juiz · Curador · T1/T2) ....... :336-376
 *   Kickoff K1-K8 ........................................................ :384-399
 *   NotebookLM (300 fontes · BLOCO URLs puro · 2 cadernos) ............... :492-516
 *
 *  REGRAS: Date.now()/Math.random()/new Date() NÃO existem (quebram resume) —
 *  varie por índice, timestamps via args. meta é literal puro.
 * ════════════════════════════════════════════════════════════════════════════
 */

export const meta = {
  name: 'mc-compasso-sweep',
  description: 'Curadoria de fontes sob a MC-RÉGUA-COMPASSO (<5%). Abre um tema, finca a âncora oficial 🎯 por pilar, caça 🛠️/💎 em leque e aplica REGISTRO×ESCALÃO×JOGADA + exclusão dura + âncora cruzada + dedup. Entrega tabela curada + BLOCO DE URLs PURO p/ NotebookLM + balotes com motivo. Sem args = roda o golden fixture (regressão da régua). Zona Verde (inteligência de mercado pública) — zero PII. NÃO injeta no NotebookLM, NÃO sela, NÃO escreve no Vault: devolve a colheita no gate humano.',
  phases: [
    { title: 'Escopo', detail: 'K1-K8: tema + recorte + escalão-âncora + pilares MECE + exclusão dura + DoD (§6.1)' },
    { title: 'Caça', detail: 'fan-out por pilar (paralelo): finca 🎯 oficial + garimpa 🛠️/💎 com URL+data (§4.3-4.4 · esquadrão T1)' },
    { title: 'Compasso', detail: 'régua <5%: admissão + exclusão dura + âncora cruzada + dedup + split MÉTODO/ASSUNTO + BLOCO URLs puro (§2 · §4.5 · esquadrão T2)' },
  ],
}

// ── Fixture (regressão da RÉGUA · Zona Verde · ilustrativo) ──────────────────
// Testa o JULGAMENTO do Compasso (não a busca web): dado o caráter de cada
// candidata, a régua reproduz o veredito conhecido? Baseado em §6.4 Exemplo A.
const FIXTURE_COMPASSO = {
  isFixture: true,
  tema: 'WhatsApp Business Cloud API (oficial Meta) p/ primeiro contato e watchdog de cidadão de baixo letramento — versão corrente. NÃO é Evolution API / libs não-oficiais.',
  escalao_ancora: 'Executor-tecnico',
  pilares: [
    { id: 'P2', rotulo: 'Janela 24h e templates (HSM)', pergunta_motriz: 'como funcionam a janela de 24h e os templates aprovados?' },
    { id: 'P3', rotulo: 'Webhooks / entrega / status', pergunta_motriz: 'como receber e confirmar entrega/leitura via webhook?' },
  ],
  candidatos: [
    { fonte: 'Docs oficiais Meta — Cloud API (HSM / janela 24h)', url: '[FIXTURE·ilustrativo] developers.facebook.com/docs/whatsapp', registro: 'bala-prata', escalao: 'Executor-tecnico', jogada_proposta: 'checklist de implementação por pilar (ASSUNTO)', natureza: 'doc oficial canônica', veredito_esperado: 'admitida', motivo_esperado: '🎯 âncora oficial' },
    { fonte: 'Dev mostrando integração webhook real na tela (build ao vivo)', url: '[FIXTURE·ilustrativo] youtube.com/exemplo-webhook', registro: 'ensina-fazendo', escalao: 'Executor-tecnico', jogada_proposta: 'passo a passo replicável (MÉTODO)', natureza: 'demo real, mão na massa, cruzada com a 🎯 Meta', veredito_esperado: 'admitida', motivo_esperado: '🛠️ com demo + âncora cruzada' },
    { fonte: 'Tutorial Evolution API (não-oficial)', url: '[FIXTURE·ilustrativo] blog/evolution-api', registro: 'ensina-fazendo', escalao: 'Executor-tecnico', jogada_proposta: '—', natureza: 'fora da fronteira (K1: NÃO é Evolution)', veredito_esperado: 'balote', motivo_esperado: 'fora-de-fronteira' },
    { fonte: '"Growth hack" de disparo em massa', url: '[FIXTURE·ilustrativo] thread/growth-hack', registro: 'outlier', escalao: 'Marketing', jogada_proposta: '—', natureza: 'viola política Meta + régua MC', veredito_esperado: 'balote', motivo_esperado: 'fora-de-fronteira' },
    { fonte: 'Post "WhatsApp vai mudar o atendimento" (sem tela/código)', url: '[FIXTURE·ilustrativo] medium/opiniao', registro: 'outlier', escalao: 'Marketing', jogada_proposta: '—', natureza: 'anuncia, não mostra', veredito_esperado: 'balote', motivo_esperado: 'hype-sem-demo' },
    { fonte: 'Vídeo 🛠️ sobre webhooks sem nenhuma 🎯 que confirme', url: '[FIXTURE·ilustrativo] youtube/orfa', registro: 'ensina-fazendo', escalao: 'Executor-tecnico', jogada_proposta: 'passo a passo', natureza: 'prática órfã, sem âncora oficial', veredito_esperado: 'balote', motivo_esperado: 'orfa-sem-ancora' },
  ],
}

// Caso real via args { tema, recorte, escalao_ancora?, pilares? }; senão fixture.
const INPUT = (args && args.tema)
  ? {
      isFixture: false,
      tema: args.tema,
      recorte: args.recorte || '(definir no Escopo)',
      escalao_ancora: args.escalao_ancora || null,
      pilares_seed: args.pilares || null,
    }
  : FIXTURE_COMPASSO

// ───────────────────────── FASE 0 — ESCOPO (K1-K8) ─────────────────────────
phase('Escopo')
log(`Abrindo escopo Compasso · ${INPUT.isFixture ? 'FIXTURE (regressão da régua)' : INPUT.tema}`)

const ESCOPO_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    tema_frase: { type: 'string', description: 'tema em 1 frase com recorte temporal + fronteira (K1)' },
    fora_de_fronteira: { type: 'array', items: { type: 'string' }, description: 'lista "NÃO é isto" (K1)' },
    escalao_ancora: { type: 'string', enum: ['Design', 'Marketing', 'Executor-tecnico'], description: 'escalão dominante (K5 / Fase 0)' },
    pilares: {
      type: 'array',
      items: {
        type: 'object', additionalProperties: false,
        properties: {
          id: { type: 'string' },
          rotulo: { type: 'string' },
          pergunta_motriz: { type: 'string', description: 'pilar é PERGUNTA, não substantivo (§4.2 :254)' },
          prioridade: { type: 'integer', description: 'risco × centralidade (§4.2 :255)' },
        },
        required: ['id', 'rotulo', 'pergunta_motriz'],
      },
    },
    exclusao_dura: { type: 'array', items: { type: 'string' }, description: 'cortes específicos deste tema (K8)' },
    dod: { type: 'string', description: 'Definition of Done: nº pilares, mín 1×🎯/pilar, 2 cadernos' },
  },
  required: ['tema_frase', 'fora_de_fronteira', 'escalao_ancora', 'pilares', 'exclusao_dura', 'dod'],
}

const escopo = await agent(
  `Você é o ENGENHEIRO REVERSO (Fases 0-1 do rito MC-RÉGUA-COMPASSO) abrindo um escopo. ${INPUT.isFixture
    ? `MODO FIXTURE (regressão): use EXATAMENTE este escopo já definido, NÃO invente: ${JSON.stringify({ tema: INPUT.tema, escalao_ancora: INPUT.escalao_ancora, pilares: INPUT.pilares }, null, 2)}.`
    : `Tema do Founder: "${INPUT.tema}". Recorte: ${INPUT.recorte}. ${INPUT.escalao_ancora ? 'Escalão-âncora sugerido: ' + INPUT.escalao_ancora + '.' : ''} ${INPUT.pilares_seed ? 'Pilares-semente: ' + JSON.stringify(INPUT.pilares_seed) : ''}`}\n\nResponda o Kickoff K1-K8 (§6.1): (K1) tema em 1 frase com recorte+fronteira + lista "NÃO é isto"; (K5) escalão-âncora dominante; (K3) pilares MECE 3-8, cada um uma PERGUNTA-MOTRIZ (não substantivo) + prioridade por risco×centralidade; (K8) exclusões duras específicas deste tema; DoD. NÃO garimpe ainda. Proof-First: nada fabricado. Retorne SOMENTE via schema.`,
  { label: 'escopo:K1-K8', phase: 'Escopo', schema: ESCOPO_SCHEMA }
)

// ───────────────────── FASE 1 — CAÇA (fan-out por pilar · esquadrão T1) ─────────────────────
phase('Caça')

const CACA_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    pilar_id: { type: 'string' },
    ancora_oficial: {
      type: 'object', additionalProperties: false,
      properties: {
        url: { type: 'string', description: 'URL da 🎯 oficial (doc/spec/norma/repo/paper). [CONFERIR] se não confirmada' },
        titulo: { type: 'string' },
        versao_data: { type: 'string', description: 'versão + data (desatualizado por versão = exclusão dura adiante)' },
      },
      required: ['url', 'titulo'],
    },
    vazio: { type: 'boolean', description: 'true se NÃO há 🎯 oficial → [VAZIO Px], pilar bloqueado (§4.3 :265)' },
    candidatos: {
      type: 'array',
      items: {
        type: 'object', additionalProperties: false,
        properties: {
          fonte: { type: 'string' },
          url: { type: 'string' },
          data: { type: 'string', description: 'data/recência. [CONFERIR] se incerta' },
          registro: { type: 'string', enum: ['bala-prata', 'ensina-fazendo', 'outlier'] },
          escalao: { type: 'string', enum: ['Design', 'Marketing', 'Executor-tecnico'] },
          jogada_proposta: { type: 'string', description: 'o que habilita no NotebookLM (MÉTODO/ASSUNTO) — 1 frase' },
          ancora_cruza_url: { type: 'string', description: 'URL da 🎯 que confirma o fato (obrigatório p/ 🛠️/💎)' },
        },
        required: ['fonte', 'url', 'registro', 'escalao', 'jogada_proposta'],
      },
    },
  },
  required: ['pilar_id', 'vazio', 'candidatos'],
}

let colheita_bruta
if (INPUT.isFixture) {
  // Regressão: NÃO busca web; usa as candidatas do fixture (testa a régua, não a busca).
  log('FIXTURE: pulando busca web — candidatas vêm do fixture (regressão do julgamento).')
  colheita_bruta = [{ pilar_id: 'FIXTURE', vazio: false, ancora_oficial: { url: '(fixture)', titulo: 'âncora descrita por candidata' }, candidatos: FIXTURE_COMPASSO.candidatos }]
} else {
  // Tempo 1 — Caçadores em paralelo (um por pilar): finca 🎯 + garimpa 🛠️/💎.
  colheita_bruta = (await parallel(escopo.pilares.map((p) => () =>
    agent(
      `Você é o CAÇADOR + ÂNCORA-OFICIAL do pilar ${p.id} ("${p.rotulo}": ${p.pergunta_motriz}) no rito Compasso. Tema: "${escopo.tema_frase}". Fora de fronteira: ${JSON.stringify(escopo.fora_de_fronteira)}. Escalão-âncora: ${escopo.escalao_ancora}.\n\n(1) Finque a ÂNCORA OFICIAL 🎯 do pilar PRIMEIRO (doc/spec/norma/repo/paper oficial), com URL + versão/data. Se NÃO existir 🎯 → vazio=true ([VAZIO ${p.id}], pilar bloqueado — §4.3). (2) Depois garimpe em leque (WebSearch/WebFetch) 🛠️ ensina-fazendo (demo real, mão na massa) e 💎 outliers (case/benchmark que inspira). Para cada candidata: fonte, URL, data, registro (bala-prata/ensina-fazendo/outlier), escalão, jogada (o que habilita no NotebookLM) e a URL da 🎯 que cruza (obrigatório p/ 🛠️/💎).\n\nPROOF-FIRST (§2.4): só fontes PÚBLICAS reais com URL+data; sem rastro → [CONFERIR]; NUNCA invente fonte/data/view. ZONA VERDE: nada de dado pessoal sensível. Largura aqui (o corte é na próxima fase). Retorne SOMENTE via schema.`,
      { agentType: 'general-purpose', label: `caçador:${p.id}`, phase: 'Caça', schema: CACA_SCHEMA }
    )
  )).filter(Boolean)
}

// ─────────────── FASE 2 — COMPASSO (régua <5% · T2 corte + montagem) ───────────────
phase('Compasso')

const COMPASSO_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    admitidas: {
      type: 'array',
      items: {
        type: 'object', additionalProperties: false,
        properties: {
          fonte: { type: 'string' }, url: { type: 'string' }, data: { type: 'string' },
          registro: { type: 'string', enum: ['bala-prata', 'ensina-fazendo', 'outlier'] },
          escalao: { type: 'string', enum: ['Design', 'Marketing', 'Executor-tecnico'] },
          jogada: { type: 'string' },
          caderno: { type: 'string', enum: ['METODO', 'ASSUNTO', 'AMBOS'] },
          ancora_cruzada_url: { type: 'string' },
          estado_prova: { type: 'string', enum: ['verificado', 'nao-verificado', 'refutado'] },
        },
        required: ['fonte', 'url', 'registro', 'escalao', 'jogada', 'caderno', 'estado_prova'],
      },
    },
    balotes: {
      type: 'array',
      items: {
        type: 'object', additionalProperties: false,
        properties: {
          fonte: { type: 'string' }, url: { type: 'string' },
          motivo: { type: 'string', enum: ['SEO-vazio', 'hype-sem-demo', 'fala-mas-nao-faz', 'desatualizado-versao', 'duplicata-angulo', 'orfa-sem-ancora', 'fora-de-fronteira'] },
          nota: { type: 'string' },
        },
        required: ['fonte', 'motivo'],
      },
    },
    tabela_md: { type: 'string', description: 'tabela markdown: Fonte | Registro | Escalão | Jogada | Âncora cruzada | Prova' },
    bloco_urls_puro: { type: 'string', description: 'RODAPÉ DE URLs EM TEXTO PURO (só admitidas, uma por linha, SEM markdown) p/ Ctrl+C→Ctrl+V no NotebookLM (§7.2 :504)' },
    cobertura_por_pilar: {
      type: 'array',
      items: { type: 'object', additionalProperties: false, properties: { pilar_id: { type: 'string' }, tem_ancora: { type: 'boolean' }, n_admitidas: { type: 'integer' } }, required: ['pilar_id', 'tem_ancora', 'n_admitidas'] },
    },
    regressao_fixture: {
      type: 'object', additionalProperties: false,
      properties: {
        veredito: { type: 'string', enum: ['PASSOU', 'REPROVADO', 'N/A'] },
        divergencias: { type: 'array', items: { type: 'string' }, description: 'candidata: esperado vs obtido' },
      },
      required: ['veredito'],
    },
    pendencias: { type: 'array', items: { type: 'string' } },
  },
  required: ['admitidas', 'balotes', 'tabela_md', 'bloco_urls_puro', 'cobertura_por_pilar', 'regressao_fixture'],
}

const compasso = await agent(
  `Você é o JUIZ PROOF-FIRST + CURADOR (esquadrão T2, fan-in) do Compasso. Aplique a RÉGUA <5%.\n\nESCOPO:\n${JSON.stringify(escopo, null, 2)}\n\nCOLHEITA BRUTA (candidatas + âncoras por pilar):\n${JSON.stringify(colheita_bruta, null, 2)}\n\nRÉGUA (§1.4, §2):\n1. ADMISSÃO = REGISTRO definido × ESCALÃO nítido × JOGADA concreta (as 3 na mesma linha; 2 de 3 = balote).\n2. EXCLUSÃO DURA (§2.2): SEO-vazio · hype-sem-demo · fala-mas-nao-faz · desatualizado-versao · duplicata-angulo · fora-de-fronteira (viola K1/K8). Na dúvida, CORTA.\n3. ÂNCORA CRUZADA (§2.3): toda 🛠️/💎 cruza com uma 🎯 oficial que confirma o fato; sem âncora → balote 'orfa-sem-ancora'. Se contradiz a 🎯 sem justificar → estado 'refutado'.\n4. ESTADO DE PROVA (§2.4): verificado (confere c/ 🎯) · nao-verificado (plausível, sem âncora ainda) · refutado.\n5. DEDUP (Curador §5.2): duplicata de ângulo → fica a melhor.\n6. SPLIT (§4.6): cada admitida vai p/ caderno METODO (como fazer · 🛠️/💎) e/ou ASSUNTO (o tema · 🎯).\n\nSAÍDA: (a) admitidas (com caderno + estado de prova); (b) balotes (motivo do enum + nota); (c) tabela_md (Fonte|Registro|Escalão|Jogada|Âncora|Prova); (d) bloco_urls_puro = SÓ as URLs das admitidas, uma por linha, SEM markdown (pronto p/ NotebookLM, §7.2); (e) cobertura por pilar (tem 🎯? quantas admitidas?).\n${INPUT.isFixture ? 'REGRESSÃO (fixture): cada candidata traz veredito_esperado + motivo_esperado. Julgue pela RÉGUA primeiro (não use o esperado como dica), depois compare: regressao_fixture.veredito = PASSOU se TODOS batem, REPROVADO se algum diverge (liste divergências).' : 'regressao_fixture.veredito = "N/A".'}\n\nPROOF-FIRST: nada fabricado; URL+data ou [CONFERIR]. NÃO injete no NotebookLM, NÃO sele, NÃO escreva no Vault. Retorne SOMENTE via schema.`,
  { label: 'juiz+curador:<5%', phase: 'Compasso', schema: COMPASSO_SCHEMA }
)

// ───────────── STOP no GATE — devolve a colheita, NÃO injeta/sela/escreve ─────────────
return {
  tema: escopo.tema_frase,
  modo: INPUT.isFixture ? 'FIXTURE (regressão da régua)' : 'colheita real',
  gate: 'COLHEITA CURADA — pronta para o Founder colar no NotebookLM (caderno MÉTODO/ASSUNTO). O workflow NÃO injetou, NÃO selou e NÃO escreveu no Vault (injeção/canonização é gate humano · §6.3/§7).',
  escopo,
  admitidas: compasso.admitidas,
  balotes: compasso.balotes,
  tabela_md: compasso.tabela_md,
  bloco_urls_puro: compasso.bloco_urls_puro,
  cobertura_por_pilar: compasso.cobertura_por_pilar,
  regressao_fixture: compasso.regressao_fixture,
  pendencias: compasso.pendencias || [],
}
