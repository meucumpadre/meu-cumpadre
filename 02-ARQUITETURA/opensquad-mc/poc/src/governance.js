// governance.js — Gates de governança MC embutidos na orquestração.
// Tudo aqui é ENFORCEMENT (não orientação). Reflete CLAUDE.md / Router-Ethics 11.0 / ADR-009a.
//
// IMPORTANTE (Proof-First): os scores Router-Ethics deste PoC são uma HEURÍSTICA
// DETERMINÍSTICA de demonstração do fluxo de controle — NÃO são o motor real de 140 nós.
// Em produção, `assessRouterEthics` é substituída pelo router determinístico real.

export class GovernanceError extends Error {
  constructor(message, code) {
    super(message);
    this.name = "GovernanceError";
    this.code = code;
  }
}

// --- Scanner de PII (CPF, NB, CID) ------------------------------------------
// Anti-vazamento: dado sensível NUNCA pode trafegar na zona segura (cloud).
const PII_PATTERNS = [
  { tipo: "CPF", re: /\b\d{3}\.?\d{3}\.?\d{3}-?\d{2}\b/g },
  { tipo: "NB", re: /\b(?:NB|benef[ií]cio)\s*[:#]?\s*\d{2}[.\/]?\d{3}[.\/]?\d{3}-?\d?\b/gi },
  { tipo: "CID", re: /\bCID[-\s]?10?\s*[:#]?\s*[A-TV-Z]\d{2}(?:\.\d)?\b/gi },
];

export function scanPII(text) {
  const achados = [];
  for (const { tipo, re } of PII_PATTERNS) {
    const m = String(text).match(re);
    if (m) achados.push({ tipo, ocorrencias: m.length });
  }
  return achados;
}

// --- Gate 1: Zona LGPD (Firewall ADR-009a) ----------------------------------
// Squad em zona 'sensivel' NÃO pode usar provider de tier 'cloud'.
export function checkZone(squad, provider) {
  const zona = squad.zona ?? "segura";
  if (zona === "sensivel" && provider.tier === "cloud") {
    throw new GovernanceError(
      `Zona SENSÍVEL exige stack self-hosted (Llama 4 Scout/GCP Brasil). ` +
        `Provider '${provider.id}' é tier='cloud' — bloqueado por ADR-009a/LGPD.`,
      "LGPD_ZONE_VIOLATION"
    );
  }
  return { zona, ok: true };
}

// --- Gate 2: Anti-vazamento PII na zona segura ------------------------------
export function checkNoPIIInSafeZone(squad, text) {
  const zona = squad.zona ?? "segura";
  if (zona !== "segura") return { ok: true, achados: [] };
  const achados = scanPII(text);
  if (achados.length > 0) {
    throw new GovernanceError(
      `PII detectada em squad de zona SEGURA: ${achados
        .map((a) => `${a.tipo}×${a.ocorrencias}`)
        .join(", ")}. Dado sensível não trafega na zona segura.`,
      "PII_LEAK_SAFE_ZONE"
    );
  }
  return { ok: true, achados };
}

// --- Gate 3: Router-Ethics 11.0 (tripartite) --------------------------------
// Três scores independentes. Handoff se QUALQUER um cruzar threshold.
// Confidence: Verde >=70 / Amarela 40-70 / Vermelha <40.
const THRESHOLDS = {
  confidenceVerde: 70,
  confidenceVermelha: 40,
  complexityMax: 70, // acima disso -> handoff
  fraudscoreMax: 40, // acima disso -> handoff
};

export function assessRouterEthics(stage, squad) {
  // Heurística determinística de PoC a partir de sinais declarados no stage/squad.
  // (Substituível pelo router real de 140 nós.)
  const sinais = stage.sinais ?? {};
  const confidence = clamp(sinais.confidence ?? 85, 0, 100);
  const complexity = clamp(sinais.complexity ?? 30, 0, 100);
  const fraudscore = clamp(sinais.fraudscore ?? 5, 0, 100);

  const faixaConfidence =
    confidence >= THRESHOLDS.confidenceVerde
      ? "Verde"
      : confidence >= THRESHOLDS.confidenceVermelha
      ? "Amarela"
      : "Vermelha";

  const motivos = [];
  if (confidence < THRESHOLDS.confidenceVerde)
    motivos.push(`confidence ${confidence} (${faixaConfidence})`);
  if (complexity > THRESHOLDS.complexityMax)
    motivos.push(`complexity ${complexity} > ${THRESHOLDS.complexityMax}`);
  if (fraudscore > THRESHOLDS.fraudscoreMax)
    motivos.push(`fraudscore ${fraudscore} > ${THRESHOLDS.fraudscoreMax}`);

  const handoff = motivos.length > 0;
  return {
    confidence,
    complexity,
    fraudscore,
    faixaConfidence,
    handoff,
    autonomia: !handoff,
    motivos,
  };
}

// --- Gate 4: Hierarquia D > C > V -------------------------------------------
// Se um flag de dignidade é levantado, ele sobrepõe compliance e viabilidade.
export function enforceDCV(flags = {}) {
  if (flags.dignidadeEmRisco) {
    return {
      ordem: "D>C>V",
      decisao: "HALT_DIGNIDADE",
      nota: "Dignidade do hipervulnerável em risco — sobrepõe C e V. Handoff humano obrigatório.",
    };
  }
  if (flags.complianceEmRisco) {
    return {
      ordem: "D>C>V",
      decisao: "HALT_COMPLIANCE",
      nota: "Risco de compliance (ex.: firewall OAB) — sobrepõe viabilidade.",
    };
  }
  return { ordem: "D>C>V", decisao: "PROSSEGUIR" };
}

function clamp(n, lo, hi) {
  return Math.max(lo, Math.min(hi, Number(n)));
}

export { THRESHOLDS };
