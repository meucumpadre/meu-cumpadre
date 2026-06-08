// compliance.js — Agente Revisor-Compliance MC (motor determinístico).
//
// Varre texto contra TODAS as "Proibições Absolutas" do CLAUDE.md + Proof-First.
// Severidades: CRITICO (REPROVADO), ALTO (HANDOFF_HUMANO), AVISO (anota).
//
// Estrutura de regra:
//   { id, sev, msg, re }            -> dispara se `re` casa
//   { id, sev, msg, re, near }      -> dispara se `re` E `near` casam (proximidade lógica)
//   { id, sev, msg, test(text) }    -> dispara se a função retorna true
// Tudo determinístico e offline.

const REGRAS = [
  // --- Posicionamento (Ontologia v4.0) -------------------------------------
  { id: "POS-01", sev: "CRITICO", re: /\blegaltech\b/i, msg: 'MC não é "legaltech".' },
  { id: "POS-02", sev: "CRITICO", re: /escrit[óo]rio\s+com\s+ia/i, msg: 'MC não é "escritório com IA".' },
  { id: "POS-03", sev: "CRITICO", re: /marketplace\s+de\s+advogados/i, msg: 'MC não é "marketplace de advogados".' },

  // --- Firewall OAB ---------------------------------------------------------
  { id: "OAB-01", sev: "CRITICO", re: /prazo\s+de\s+concess[ãa]o/i, msg: "Proibido prometer prazo de concessão INSS." },
  { id: "OAB-02", sev: "CRITICO", re: /\b(garant(o|imos|ido|ia)|assegur(o|amos))\b.{0,40}\b(resultado|benef[íi]cio|aprova|concess|ganho de causa|vit[óo]ria)/i, msg: "Proibido prometer/garantir resultado jurídico (firewall OAB)." },
  { id: "OAB-03", sev: "ALTO", re: /success\s*fee|honor[áa]rio\s+de\s+[êe]xito|percentual\s+sobre\s+o\s+benef[íi]cio/i, msg: "Success fee percentual é VEDADO." },

  // --- Custódia / LGPD operacional (ADR-009a) ------------------------------
  { id: "CUS-01", sev: "CRITICO", re: /clickup/i, near: /senha|credencial|gov\.?br/i, msg: "Senha gov.br NUNCA no ClickUp (ADR-009a) — custódia é Bitwarden Org MC." },
  { id: "CUS-02", sev: "CRITICO", re: /\b(reter|reten[çc][ãa]o|retemos|ret[êe]m)\b/i, near: /credenci|senha|gov\.?br/i, msg: "Proibido reter credenciais como instrumento de cobrança." },

  // --- Inadimplência (CDC) --------------------------------------------------
  { id: "INA-01", sev: "ALTO", test: cancelamentoAntesDeD60, msg: "Proibido cancelar por inadimplência antes de D+60." },
  { id: "INA-02", sev: "CRITICO", re: /suspend\w*[^.]{0,60}comunica\w*|comunica\w*[^.]{0,60}suspend\w*/i, near: /inadimpl/i, msg: "Proibido suspender comunicação processual na inadimplência (CDC art. 6º III)." },

  // --- Preços superados (ADR-007 v3.x) -------------------------------------
  { id: "PRC-01", sev: "CRITICO", re: /R\$\s?1\.?500\b[^.]{0,30}standard|standard[^.]{0,30}R\$\s?1\.?500\b/i, msg: "Preço superado: standard é R$ 2.200 (não R$ 1.500)." },
  { id: "PRC-02", sev: "CRITICO", re: /R\$\s?900\b/, msg: "Preço superado: CadÚnico é R$ 1.500 (não R$ 900)." },
  { id: "PRC-03", sev: "ALTO", re: /R\$\s?2\.?200\b[^.]{0,20}\b3\s?[x×]\b|\b3\s?[x×]\b[^.]{0,20}R\$\s?2\.?200/i, msg: "Φ₁ Standard parcela em 4× (não 3×) — ADR-007 v3.5." },
  { id: "PRC-04", sev: "ALTO", re: /Φ\s*₂|\bΦ2\b|\bphi\s?2\b|\bfi\s?2\b/i, near: /cobran|cobra|b2c|mensal|cliente/i, msg: "Φ₂ foi ELIMINADO como cobrança B2C (ADR-007 v3.x)." },
  { id: "PRC-05", sev: "ALTO", re: /R\$\s?200\b[^.]{0,12}800|200\s?[-–a]\s?800/i, near: /Ψ\s*₁|\bΨ1\b|\bpsi\s?1\b|licenciamento/i, msg: "Ψ₁ tem 3 tiers (R$600-800 / R$1.200-1.800 / R$2.500-4.000), não faixa única R$200-800." },
  { id: "PRC-06", sev: "ALTO", re: /299\b[^.]{0,8}599|R\$\s?299\b/i, msg: "Ψ₂ tem 3 tiers (R$699 / R$1.499 / R$2.499), não R$299-599." },

  // --- Valuation / CMD ------------------------------------------------------
  { id: "VAL-01", sev: "ALTO", re: /valuation[^.]{0,30}\bARR\b|\bARR\b[^.]{0,30}valuation/i, msg: "Valuation NÃO é ARR — é Capital Morto Desbloqueado (CMD)." },

  // --- Pessoas / ciclos encerrados -----------------------------------------
  { id: "PES-01", sev: "CRITICO", re: /juliana\s+alencar/i, msg: 'Ciclo encerrado: é "Dra. Juliana Pereira de Melo", nunca "Juliana Alencar".' },
  { id: "PES-02", sev: "ALTO", re: /servidor\s+(do\s+)?inss\s+ativo|servidor\s+ativo\s+do\s+inss/i, msg: "Alessandro NÃO é servidor INSS ativo (Portaria 1.505/2025)." },

  // --- Stack vedada ---------------------------------------------------------
  { id: "STK-01", sev: "ALTO", re: /\bdeepseek\b/i, msg: "DeepSeek não é opção viável (descartado)." },
  { id: "STK-02", sev: "ALTO", re: /\bautentique\b/i, msg: "Autentique vedada (ADR-014) — substituída por ZapSign." },
  { id: "STK-03", sev: "AVISO", re: /\b(zapier|docusign|make|hubspot|evolution\s+api)\b/i, msg: "Ferramenta descartada em produção (verificar contexto)." },

  // --- Router-Ethics versão errada -----------------------------------------
  { id: "RTR-01", sev: "ALTO", re: /router[-\s]?ethics\s*(9\.0|10\.0)\b|\b91\s+n[óo]s\b|\b105\s+n[óo]s\b|score\s*[≥>=]+\s*39/i, msg: "Router-Ethics atual é 11.0 / 140 nós / threshold tripartite (não 9.0/91/≥39 nem 10.0/105)." },
];

// INA-01: cancelamento por inadimplência com D+N e N < 60.
function cancelamentoAntesDeD60(text) {
  if (!/cancel\w*/i.test(text) || !/inadimpl/i.test(text)) return false;
  const ds = [...String(text).matchAll(/d\s*\+\s*(\d{1,3})/gi)].map((m) => Number(m[1]));
  return ds.some((n) => n < 60);
}

// Proof-First: número percentual/monetário sem marcador de fonte por perto.
const NUM_RE = /\b\d{1,3}(?:[.,]\d+)?\s?%|\bR\$\s?\d/g;
const FONTE_NEARBY = /\[fonte|fonte:|lei\s|art\.?\s|sei\s|hash|beps|lai|\bv\d/i;

function proofFirstWarnings(text) {
  const out = [];
  String(text).split(/\n/).forEach((linha, i) => {
    const nums = linha.match(NUM_RE);
    if (nums && !FONTE_NEARBY.test(linha) && !/\[fonte pendente\]/i.test(linha)) {
      out.push({ id: "PROOF-01", sev: "AVISO", msg: `Número sem fonte/marcador na linha ${i + 1} ("${nums[0]}") — marcar [FONTE PENDENTE] ou citar fonte.` });
    }
  });
  return out;
}

// Marcadores de negação/guardrail: quando a proibição aparece logo após um
// destes, é uma AFIRMAÇÃO da regra ("NUNCA ser legaltech"), não uma violação.
// Inclui formas verbais (evitando, impedindo, proibindo, vedando).
const NEG_RE = /(\bnunca\b|\bjamais\b|\bn[ãa]o\b|\bnao\b|\bsem\b|\bevit\w*|\bimpe[dç]\w*|\bproib\w*|\bveda\w*|\banti\b|deixar de)/i;

function emNegacao(text, index) {
  if (index < 0) return false;
  const janela = text.slice(Math.max(0, index - 90), index);
  return NEG_RE.test(janela);
}

// Avalia uma regra: retorna { hit, negado }. Usa exec para obter a posição e
// checar o contexto imediatamente anterior ao match.
function avaliar(regra, text) {
  if (regra.test) return { hit: regra.test(text), negado: false };
  const m = regra.re.exec(text);
  if (!m) return { hit: false };
  if (regra.near && !regra.near.test(text)) return { hit: false };
  return { hit: true, negado: emNegacao(text, m.index) };
}

export function auditCompliance(text) {
  const achados = [];
  for (const r of REGRAS) {
    const av = avaliar(r, text);
    if (!av.hit) continue;
    // Em contexto de negação/guardrail, rebaixa para AVISO (não bloqueia),
    // mas mantém visível no relatório. Violação direta preserva a severidade.
    const sev = av.negado ? "AVISO" : r.sev;
    const msg = av.negado ? `(menção em guardrail/negação) ${r.msg}` : r.msg;
    achados.push({ id: r.id, sev, msg, contexto: av.negado ? "negacao" : "direto" });
  }
  achados.push(...proofFirstWarnings(text));

  const criticos = achados.filter((a) => a.sev === "CRITICO");
  const altos = achados.filter((a) => a.sev === "ALTO");
  const avisos = achados.filter((a) => a.sev === "AVISO");

  const veredito = criticos.length ? "REPROVADO" : altos.length ? "HANDOFF_HUMANO" : "APROVADO";
  return { veredito, criticos, altos, avisos, total: achados.length, achados };
}

// Exporta o catálogo de IDs (usado pelos testes para garantir cobertura).
export const REGRA_IDS = REGRAS.map((r) => r.id);
