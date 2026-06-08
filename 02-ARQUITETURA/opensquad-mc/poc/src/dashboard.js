// dashboard.js — "Escritório Virtual": gera HTML autossuficiente a partir do audit JSONL.
// Snapshot pós-execução (honesto: não é stream ao vivo) + replay animado dos eventos.

const EMOJI = { pesquisador: "🔎", estrategista: "🧭", redator: "✍️", designer: "🎨", revisor: "✅" };

function esc(s) {
  return String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

// Reconstrói o estado dos estágios a partir dos eventos.
function parseStages(events) {
  const map = new Map();
  const get = (id) => map.get(id) ?? map.set(id, { id, role: "", status: "pendente", ethics: null, checkpoint: false }).get(id);
  for (const e of events) {
    if (e.ev === "stage_start") { const s = get(e.stage); s.role = e.role; s.status = "rodando"; }
    if (e.ev === "router_ethics") { const s = get(e.stage); s.ethics = e; if (e.handoff) s.handoff = true; }
    if (e.ev === "checkpoint_auto_approve" || e.ev === "checkpoint_decision") { const s = get(e.stage); s.checkpoint = true; }
    if (e.ev === "stage_done") get(e.stage).status = "concluido";
    if (e.ev === "halt" && e.stage) get(e.stage).status = "bloqueado";
    if (e.ev === "gate_block" && e.stage) get(e.stage).status = "bloqueado";
  }
  return [...map.values()];
}

function summary(events) {
  const find = (ev) => events.find((e) => e.ev === ev) ?? {};
  return {
    zona: find("zone_ok").zona ?? "—",
    provider: find("zone_ok").provider ?? "—",
    tier: find("zone_ok").tier ?? "—",
    dcv: find("dcv").decisao ?? "—",
    compliance: find("compliance_audit").veredito ?? "—",
    halted: (events.find((e) => e.ev === "halt") || {}).motivo ?? null,
    gateBlock: (events.find((e) => e.ev === "gate_block_fatal" || e.ev === "gate_block") || {}).code ?? null,
  };
}

function bar(label, val, max, danger) {
  const pct = Math.min(100, (val / max) * 100);
  const cls = danger ? "danger" : "ok";
  return `<div class="bar"><span>${label}</span><i class="${cls}" style="width:${pct}%"></i><b>${val}</b></div>`;
}

export function renderDashboard({ squadName, events }) {
  const stages = parseStages(events);
  const s = summary(events);

  const statusColor = { concluido: "#37d67a", rodando: "#f5c451", pendente: "#5b6472", bloqueado: "#e35", handoff: "#f59e0b" };

  const desks = stages.map((st) => {
    const color = st.status === "concluido" && st.handoff ? statusColor.handoff : statusColor[st.status];
    return `<div class="desk" data-stage="${esc(st.id)}" style="--c:${color}">
      <div class="emoji">${EMOJI[st.role] ?? "🧩"}</div>
      <div class="role">${esc(st.role || "—")}</div>
      <div class="sid">${esc(st.id)}</div>
      <div class="badge">${st.status}${st.handoff ? " · handoff" : ""}${st.checkpoint ? " · ⏸" : ""}</div>
    </div>`;
  }).join("");

  const pipeline = stages.map((st) => {
    const e = st.ethics;
    const bars = e ? `${bar("conf", e.confidence, 100, e.confidence < 70)}${bar("compl", e.complexity, 100, e.complexity > 70)}${bar("fraud", e.fraudscore, 100, e.fraudscore > 40)}` : `<small>sem score</small>`;
    return `<div class="stage" data-stage="${esc(st.id)}">
      <div class="stage-head">${EMOJI[st.role] ?? "🧩"} <b>${esc(st.id)}</b> <span class="tag">${esc(st.role)}</span>${e && e.handoff ? '<span class="tag warn">HANDOFF</span>' : ""}${st.checkpoint ? '<span class="tag">⏸ checkpoint</span>' : ""}</div>
      ${bars}
      ${e ? `<small>faixa: ${esc(e.faixaConfidence)} · motivos: ${esc((e.motivos || []).join("; ") || "—")}</small>` : ""}
    </div>`;
  }).join("");

  const gateChip = (label, val, danger) => `<div class="chip ${danger ? "bad" : "good"}"><b>${label}</b><span>${esc(val)}</span></div>`;
  const gates = [
    gateChip("Zona LGPD", `${s.zona} (${s.tier})`, s.zona === "sensivel" && s.tier === "cloud"),
    gateChip("Provider", s.provider, false),
    gateChip("D&gt;C&gt;V", s.dcv, String(s.dcv).startsWith("HALT")),
    gateChip("Compliance", s.compliance, s.compliance === "REPROVADO"),
    s.gateBlock ? gateChip("Bloqueio", s.gateBlock, true) : "",
    s.halted ? gateChip("HALT", s.halted, true) : "",
  ].join("");

  const data = JSON.stringify(events);

  return `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Escritório Virtual — ${esc(squadName)}</title>
<style>
:root{--bg:#0e1116;--panel:#161b22;--line:#243040;--txt:#e6edf3;--mut:#8b97a7}
*{box-sizing:border-box}body{margin:0;font:14px/1.5 system-ui,Segoe UI,Roboto,sans-serif;background:var(--bg);color:var(--txt)}
header{padding:18px 22px;border-bottom:1px solid var(--line);display:flex;align-items:center;gap:14px;flex-wrap:wrap}
header h1{font-size:17px;margin:0}
.sub{color:var(--mut);font-size:13px}
.wrap{padding:18px 22px;max-width:1100px;margin:0 auto}
h2{font-size:13px;text-transform:uppercase;letter-spacing:.08em;color:var(--mut);margin:22px 0 10px}
.office{display:flex;gap:14px;flex-wrap:wrap}
.desk{background:var(--panel);border:1px solid var(--line);border-top:3px solid var(--c);border-radius:10px;padding:14px;width:150px;text-align:center;transition:.2s}
.desk.active{outline:2px solid var(--c);transform:translateY(-3px)}
.desk .emoji{font-size:30px}.desk .role{font-weight:600;text-transform:capitalize}
.desk .sid{color:var(--mut);font-size:12px}
.desk .badge{margin-top:6px;font-size:11px;color:var(--c)}
.chips{display:flex;gap:10px;flex-wrap:wrap}
.chip{background:var(--panel);border:1px solid var(--line);border-radius:8px;padding:8px 12px;display:flex;flex-direction:column}
.chip b{font-size:11px;color:var(--mut);text-transform:uppercase}
.chip.good span{color:#37d67a}.chip.bad span{color:#e35;font-weight:700}
.stage{background:var(--panel);border:1px solid var(--line);border-radius:10px;padding:12px 14px;margin-bottom:10px}
.stage.active{outline:2px solid #f5c451}
.stage-head{display:flex;align-items:center;gap:8px;margin-bottom:8px}
.tag{font-size:11px;background:#22303f;color:var(--mut);padding:2px 7px;border-radius:20px}
.tag.warn{background:#5a3a12;color:#f59e0b}
.bar{display:flex;align-items:center;gap:8px;margin:3px 0}
.bar span{width:42px;color:var(--mut);font-size:12px}
.bar i{height:8px;border-radius:4px;background:#37d67a;display:block}
.bar i.danger{background:#e35}.bar b{font-size:12px;width:28px;text-align:right}
small{color:var(--mut)}
button{background:#1f6feb;color:#fff;border:0;border-radius:8px;padding:8px 14px;cursor:pointer;font-size:13px}
details{margin-top:18px}pre{background:#0a0d12;border:1px solid var(--line);border-radius:8px;padding:12px;overflow:auto;max-height:320px;font-size:12px}
.foot{color:var(--mut);font-size:12px;margin-top:24px;border-top:1px solid var(--line);padding-top:12px}
</style></head><body>
<header>
  <h1>🏢 Escritório Virtual · MC-Squad</h1>
  <span class="sub">${esc(squadName)}</span>
  <span style="flex:1"></span>
  <button id="replay">▶ Replay</button>
</header>
<div class="wrap">
  <h2>Gates de governança</h2>
  <div class="chips">${gates}</div>

  <h2>Mesas (agentes)</h2>
  <div class="office">${desks}</div>

  <h2>Pipeline · Router-Ethics 11.0 (tripartite)</h2>
  ${pipeline}

  <details><summary>Trilha de auditoria (JSONL · ${events.length} eventos)</summary>
    <pre>${esc(events.map((e) => JSON.stringify(e)).join("\n"))}</pre>
  </details>
  <div class="foot">Snapshot pós-execução. Scores Router-Ethics = heurística de demonstração do PoC. D &gt; C &gt; V.</div>
</div>
<script>
const EVENTS = ${data};
const replay = () => {
  const order = EVENTS.filter(e => e.ev === "stage_start").map(e => e.stage);
  document.querySelectorAll(".desk,.stage").forEach(n => n.classList.remove("active"));
  let i = 0;
  const step = () => {
    if (i > 0) document.querySelectorAll('[data-stage="'+order[i-1]+'"]').forEach(n => n.classList.remove("active"));
    if (i >= order.length) return;
    document.querySelectorAll('[data-stage="'+order[i]+'"]').forEach(n => n.classList.add("active"));
    i++; setTimeout(step, 700);
  };
  step();
};
document.getElementById("replay").onclick = replay;
replay();
</script>
</body></html>`;
}
