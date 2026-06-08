/* Squad Cockpit · data.jsx — placeholders neutros, sem dados reais.
   Tudo descreve a mecânica do harness, não casos reais. */

const COCKPIT = {
  squad: {
    id: "MC-SQUAD-7F",
    mission: "Missão M-0007",
    window: "180k",
  },

  // ---- Mission Control ----
  spec: [
    {
      tag: "OBJETIVO", t: "t1",
      title: "Resultado pretendido",
      body: "Descreva aqui o estado-alvo que o esquadrão deve atingir. Placeholder neutro — sem dados reais. Um objetivo, verificável e sem ambiguidade.",
    },
    {
      tag: "ACEITE", t: "t2",
      title: "Critérios de aceite",
      list: [
        "Critério verificável A — placeholder.",
        "Critério verificável B — placeholder.",
        "Critério verificável C — placeholder.",
      ],
    },
    {
      tag: "RESTRIÇÃO", t: "t3",
      title: "Restrições e invariantes",
      body: "Limites que nenhum micropasso pode violar. Hierarquia preservada · escopo fechado · nada fora do contrato.",
    },
    {
      tag: "ENTREGA", t: "t4",
      title: "Entregável + verificação",
      body: "Artefato final e a forma como o Motor de Verificação confere o pouso. Sem entregável definido, não há despacho.",
    },
  ],

  queue: [
    { id: "μ01", desc: "Decompor a especificação em contrato verificável", agent: "Lead", cost: "~6k", time: "~40s", status: "done", label: "CONCLUÍDO" },
    { id: "μ02", desc: "Levantar contexto e fixar invariantes", agent: "Context Manager", cost: "~12k", time: "~55s", status: "done", label: "CONCLUÍDO" },
    { id: "μ03", desc: "Rascunhar abordagem do micropasso primário", agent: "Especialista · α", cost: "~18k", time: "~1m10s", status: "running", label: "EM CURSO" },
    { id: "μ04", desc: "Executar transformação no escopo isolado", agent: "Especialista · β", cost: "~22k", time: "—", status: "pending", label: "PENDENTE" },
    { id: "μ05", desc: "Conferir pouso contra critérios de aceite", agent: "VerificationEngine", cost: "~9k", time: "—", status: "pending", label: "PENDENTE" },
    { id: "μ06", desc: "Selar artefato e registrar lições", agent: "Lead", cost: "~5k", time: "—", status: "blocked", label: "BLOQUEADO" },
  ],

  preflight: [
    { label: "Especificação selada", mark: "✓", cls: "pass", meta: "selada" },
    { label: "Orçamento de contexto sob limite", mark: "⚠", cls: "warn", meta: "62%" },
    { label: "Motor de Verificação armado", mark: "✓", cls: "pass", meta: "pronto" },
    { label: "Esquadrão disponível", mark: "✓", cls: "pass", meta: "4 / 4" },
  ],

  // ---- Agent Fleet ---- (papéis reais da jornada MC · mecânica, sem caso real · Zona Verde)
  agents: [
    {
      cls: "spec", glyph: "T", id: "AGT · TRIAGEM",
      name: "Triagem",
      role: "Recebe o sinal, classifica e detecta hipervulnerabilidade e janela DIB. Cobre E0–E2.",
      status: "active", statusLabel: "ATIVO",
      metrics: [
        { label: "Sinais", value: "—", u: "fila" },
        { label: "Latência", value: "—", u: "s" },
        { label: "Etapa", value: "E2", u: "" },
      ],
      foot: "Sem ato de advocacia · atividade-meio",
    },
    {
      cls: "lead", glyph: "R", id: "AGT · ROUTER",
      name: "Router-Ethics",
      role: "Roteia o caso pela cascata D>C>V. Três scores decidem autonomia ou mão humana.",
      status: "running", statusLabel: "EM CURSO",
      metrics: [
        { label: "Nós", value: "140", u: "" },
        { label: "Scores", value: "3", u: "/3 ok" },
        { label: "Veredito", value: "ASSIST.", u: "" },
      ],
      foot: "11.0 · 7 hooks · determinístico",
    },
    {
      cls: "verify", glyph: "D", id: "AGT · DOSSIÊ",
      name: "Dossiê Proof-First",
      role: "Monta a prova: fonte:linha + Lei + hash SHA-256. Ônus de prova invertido, zero dado fabricado.",
      status: "active", statusLabel: "ATIVO",
      metrics: [
        { label: "Provas", value: "—", u: "sel." },
        { label: "Pendências", value: "—", u: "" },
        { label: "Hash", value: "✓", u: "" },
      ],
      foot: "[FONTE PENDENTE] marca lacuna · nunca inventa",
    },
    {
      cls: "context", glyph: "H", id: "AGT · HUMAN API",
      name: "Human API",
      role: "Recebe o handoff quando o roteador entrega ao humano. Quatro tiers de intervenção.",
      status: "idle", statusLabel: "OCIOSO",
      metrics: [
        { label: "Tier", value: "—", u: "/4" },
        { label: "Fila", value: "—", u: "" },
        { label: "Handoffs", value: "—", u: "" },
      ],
      foot: "Aciona na dúvida · OAB/LGPD → Dra. Juliana",
    },
    {
      cls: "watch", glyph: "W", id: "AGT · WATCHDOG",
      name: "Watchdog",
      role: "Acompanha o pós-protocolo (E5). Vigia prazos, DIB e movimentação — comunica sempre.",
      status: "active", statusLabel: "ATIVO",
      metrics: [
        { label: "Vigílias", value: "—", u: "" },
        { label: "Prazo", value: "—", u: "d" },
        { label: "Alertas", value: "—", u: "" },
      ],
      foot: "Nunca cancela antes de D+60 · CDC art. 6º III",
    },
  ],
  fleetKpis: [
    { label: "Papéis ativos", value: "4", unit: "/ 5", cls: "" },
    { label: "Cascata", value: "D>C>V", unit: "", cls: "small" },
    { label: "Roteador", value: "11.0", unit: "", cls: "ok" },
    { label: "Esquadrão", value: "ESTÁVEL", unit: "", cls: "ok small" },
  ],

  // ---- Jornada E0–E7 (mecânica · estado do caso na esteira · Zona Verde) ----
  journey: {
    activeStage: "E2",
    stages: [
      { id: "E0", label: "Sinal Fraco", state: "done" },
      { id: "E1", label: "Primeiro Contato", state: "done" },
      { id: "E2", label: "Triagem / Deliberação", state: "active" },
      { id: "E3", label: "Coleta", state: "pending" },
      { id: "E4", label: "Protocolo INSS", state: "pending" },
      { id: "E5", label: "Watchdog", state: "pending" },
      { id: "E6", label: "Resolução", state: "pending" },
      { id: "E7", label: "Soberania", state: "pending" },
    ],
    note: "Sprint 48h = E0→E4 interno (com documentação completa). Pós-protocolo: análise INSS fora do controle do MC — nunca prometer prazo de concessão.",
  },

  // ---- Landing Reports ----
  landings: [
    {
      id: "P-0006", step: "μ02", title: "Levantar contexto e fixar invariantes",
      score: 94, verdict: "pass", agent: "Context Manager", sealed: true, hash: "9f0e2d11", when: "há 4 min",
      caveats: [
        { sev: "lo", text: "Duas fontes ficaram acima do orçamento ideal; poda recomendada no próximo passo." },
      ],
      lessons: [
        "Fixar invariantes cedo reduz retrabalho nos passos seguintes.",
        "Contexto curado antes do despacho melhora o score de pouso.",
      ],
    },
    {
      id: "P-0005", step: "μ01", title: "Decompor a especificação em contrato verificável",
      score: 88, verdict: "pass", agent: "Lead", sealed: true, hash: "a4c1b2e8", when: "há 9 min",
      caveats: [
        { sev: "mid", text: "Um critério de aceite admitia interpretação dupla; reescrito antes de selar." },
        { sev: "lo", text: "Estimativa de custo do passo primário ficou otimista." },
      ],
      lessons: [
        "Critérios verificáveis evitam ambiguidade no pouso.",
        "Contrato explícito antecipa o veredito do VerificationEngine.",
      ],
    },
    {
      id: "P-0004", step: "μ00", title: "Validar disponibilidade do esquadrão",
      score: 71, verdict: "pass", agent: "Lead", sealed: false, hash: "2b8a0c47", when: "há 18 min",
      caveats: [
        { sev: "mid", text: "Um especialista respondeu fora do SLA na primeira tentativa." },
        { sev: "lo", text: "Heartbeat do Motor de Verificação atrasou 200ms." },
      ],
      lessons: [
        "Aquecer o pool de especialistas antes do despacho reduz latência inicial.",
      ],
    },
    {
      id: "P-0003", step: "μ-pré", title: "Tentativa de despacho sem spec selada",
      score: 38, verdict: "fail", agent: "Lead", sealed: false, hash: "e3d9f5a2", when: "há 26 min",
      caveats: [
        { sev: "hi", text: "Despacho barrado: especificação ainda PROVISIONAL no momento da tentativa." },
        { sev: "mid", text: "Orçamento de contexto não havia sido conferido." },
      ],
      lessons: [
        "Nenhum despacho sem spec selada — o pré-voo existe por isto.",
        "Falha barrada cedo custa menos que pouso ruim revertido.",
      ],
    },
  ],
  reportKpis: [
    { label: "Pousos registrados", value: "6", unit: "", cls: "" },
    { label: "Score médio", value: "73", unit: "/100", cls: "warn" },
    { label: "Taxa PASS", value: "83", unit: "%", cls: "ok" },
    { label: "Ressalvas abertas", value: "3", unit: "", cls: "risk" },
  ],

  // ---- Context Budget ----
  budget: {
    total: 180,        // k tokens (janela)
    used: 112,         // k tokens
    segments: [
      { key: "spec",   label: "Especificação", cls: "seg-spec",   k: 22 },
      { key: "hist",   label: "Histórico",     cls: "seg-hist",   k: 38 },
      { key: "tools",  label: "Ferramentas",   cls: "seg-tools",  k: 26 },
      { key: "system", label: "Sistema",       cls: "seg-system", k: 14 },
      { key: "memory", label: "Memória",       cls: "seg-memory", k: 12 },
    ],
  },
  sources: [
    { name: "Contrato da missão", cat: "Especificação", cls: "seg-spec",   k: 22, pct: 20 },
    { name: "Histórico de micropassos", cat: "Histórico", cls: "seg-hist", k: 38, pct: 34 },
    { name: "Resultados de ferramentas", cat: "Ferramentas", cls: "seg-tools", k: 26, pct: 23 },
    { name: "Prompt de sistema", cat: "Sistema", cls: "seg-system", k: 14, pct: 13 },
    { name: "Memória do esquadrão", cat: "Memória", cls: "seg-memory", k: 12, pct: 11 },
    { name: "Régua de poda (reserva)", cat: "Livre", cls: "free", k: 68, pct: 0, free: true },
  ],
  budgetFlags: [
    "Poda automática acima de 80% da janela",
    "Fontes seladas têm prioridade na retenção",
    "Histórico comprimido a cada 3 pousos",
  ],

  // ---- Router-Ethics 11.0 ----
  // Mecânica do roteador determinístico. Nós individuais são ILUSTRATIVOS (placeholder
  // neutro) — as contagens, blocos, thresholds e hooks refletem a doutrina real (Zona Verde).
  router: {
    version: "11.0",
    nodesTotal: 140,
    hierarchy: "Dignidade > Compliance > Viabilidade",
    blocks: [
      {
        key: "D", cls: "blk-d", label: "Dignidade", range: "D01–D45", count: 45,
        rule: "Prevalece sobre tudo. Um nó D em alerta trava o despacho, ignore os demais scores.",
        nodes: [
          { id: "D03", desc: "Hipervulnerabilidade detectada", state: "pass" },
          { id: "D12", desc: "Risco de dano irreversível ao cidadão", state: "pass" },
          { id: "D27", desc: "Janela DIB ≤ 30 dias (urgência)", state: "alert" },
          { id: "D41", desc: "Consentimento informado íntegro", state: "pass" },
        ],
      },
      {
        key: "C", cls: "blk-c", label: "Compliance", range: "C36–C80", count: 45,
        rule: "Conformidade regulatória. Cede à Dignidade, prevalece sobre Viabilidade.",
        nodes: [
          { id: "C38", desc: "Firewall OAB — sem ato de advocacia", state: "pass" },
          { id: "C52", desc: "LGPD — dado sensível em stack self-hosted", state: "pass" },
          { id: "C66", desc: "Sem promessa de prazo de concessão", state: "pass" },
          { id: "C74", desc: "Custódia de credencial conforme ADR-009a", state: "warn" },
        ],
      },
      {
        key: "V", cls: "blk-v", label: "Viabilidade", range: "V71–V120", count: 50,
        rule: "Exequibilidade técnica/operacional. Último na hierarquia — nunca atropela D ou C.",
        nodes: [
          { id: "V79", desc: "Documentação completa para protocolo", state: "warn" },
          { id: "V93", desc: "Custo de processamento dentro do orçamento", state: "pass" },
          { id: "V108", desc: "Esquadrão disponível para a rota", state: "pass" },
          { id: "V117", desc: "SLA interno E0→E4 exequível", state: "pass" },
        ],
      },
    ],
    // 3 scores INDEPENDENTES. Autonomia só se os três aprovam; handoff se qualquer um cruza threshold.
    scores: [
      {
        key: "confidence", label: "Confidence", value: 76, band: "verde",
        thresholds: "Verde ≥70 · Amarela 40–70 · Vermelha <40",
        reading: "Acima do limiar verde — roteador confia na rota.",
      },
      {
        key: "complexity", label: "Complexity", value: 48, band: "amarela",
        thresholds: "Baixa <40 · Média 40–70 · Alta >70",
        reading: "Faixa média — caso comporta autonomia assistida.",
      },
      {
        key: "fraud", label: "Fraudscore", value: 12, band: "verde",
        thresholds: "Verde <40 · Amarela 40–70 · Vermelha ≥70",
        reading: "Baixo risco de fraude — sem sinal de alerta.",
      },
    ],
    // 7 hooks transversais (gatilhos determinísticos que escalam fora da cascata).
    hooks: [
      { id: "H1", label: "DIB Urgency", desc: "Janela 30 dias (B31/B91/B42/B43) → SLA 24h", state: "armed" },
      { id: "H2", label: "Hipervulnerável", desc: "Eleva prioridade e revisão humana", state: "armed" },
      { id: "H3", label: "Multi-vertical", desc: "Caso cruza verticais → passarela cross-vertical", state: "idle" },
      { id: "H4", label: "Prova rural", desc: "Exige dossiê probatório reforçado", state: "idle" },
      { id: "H5", label: "Fraudscore alto", desc: "≥70 → handoff humano imediato", state: "idle" },
      { id: "H6", label: "Credencial gov.br", desc: "Custódia Bitwarden · veda retenção-cobrança", state: "armed" },
      { id: "H7", label: "Inadimplência", desc: "Nunca cancela antes de D+60 (CDC art. 6º III)", state: "idle" },
    ],
    verdict: {
      decision: "AUTONOMIA ASSISTIDA",
      cls: "warn",
      reason: "Os três scores aprovam, mas o hook DIB Urgency (D27) está armado — despacho segue com janela de revisão humana sob SLA 24h.",
      autonomy: "condicional",
    },
    kpis: [
      { label: "Nós avaliados", value: "140", unit: "", cls: "" },
      { label: "Em alerta", value: "1", unit: "· D27", cls: "warn" },
      { label: "Hooks armados", value: "3", unit: "/ 7", cls: "" },
      { label: "Veredito", value: "ASSISTIDA", unit: "", cls: "warn small" },
    ],
  },
};

window.COCKPIT = COCKPIT;
