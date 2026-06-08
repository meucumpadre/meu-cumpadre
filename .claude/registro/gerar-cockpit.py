#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
gerar-cockpit.py — Cockpit HTML autossuficiente do Registro de Unidades Agênticas
=================================================================================
Fase 3 do MC-SPEC-RegistroAgentes-ASE. Lê o registro-unidades-agenticas.json e
emite painel-mc.html: UM arquivo, zero servidor, zero dependência externa (dados
embutidos · molde do dashboard autossuficiente f2810ce). Abre em qualquer lugar,
cola no Claude, manda no zap.

PRINCÍPIO "gerado, não mantido": o painel é projeção do Registro, que é projeção
do .claude/. Não editar o HTML à mão — regenerar.

ZONA VERDE: o painel só mostra metadados de governança das UAs (caixa de ferramentas
+ POP + linhas vermelhas LGPD). Zero PII · compartilhável = público.

Uso:  python3 .claude/registro/gerar-cockpit.py
Hierarquia: D > C > V · v0.1 PROVISIONAL · 2026-06-03
"""
import json
import os

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
JSON_PATH = os.path.join(SCRIPT_DIR, "registro-unidades-agenticas.json")
OUT_PATH = os.path.join(SCRIPT_DIR, "painel-mc.html")

with open(JSON_PATH, encoding="utf-8") as fh:
    REG = json.load(fh)

# Embute o JSON dentro de <script>: escapa `<` como < para que nenhum dado
# futuro (ex.: um gatilho contendo "</script>") possa quebrar a página. Continua
# JSON válido — fail-closed sem custo.
DATA_JSON = json.dumps(REG, ensure_ascii=False).replace("<", "\\u003c")

TEMPLATE = r"""<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Cockpit MC · Registro de Unidades Agênticas</title>
<style>
  :root{
    --bg:#120d08; --panel:#1c140d; --panel2:#241a10; --line:#3a2c1c;
    --txt:#f0e6d6; --dim:#b8a98f; --gold:#d4af37; --goldsoft:#caa84f;
    --verde:#3fae6b; --amarela:#e2a32b; --vermelha:#d2563f;
    --r1:#5b8aa6; --r2:#e2a32b; --r3:#d2563f;
  }
  *{box-sizing:border-box}
  body{margin:0;background:var(--bg);color:var(--txt);
    font:14px/1.5 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}
  header{padding:24px 28px 16px;border-bottom:1px solid var(--line);
    background:linear-gradient(180deg,#1c140d,#120d08)}
  h1{margin:0 0 4px;font-size:20px;color:var(--gold);font-weight:600;letter-spacing:.2px}
  .sub{color:var(--dim);font-size:12.5px}
  .meta{margin-top:10px;display:flex;gap:18px;flex-wrap:wrap;font-size:12px;color:var(--dim)}
  .meta b{color:var(--txt)}
  .stats{display:flex;gap:10px;flex-wrap:wrap;margin:16px 28px 0}
  .stat{background:var(--panel);border:1px solid var(--line);border-radius:10px;
    padding:10px 14px;min-width:96px}
  .stat .n{font-size:22px;font-weight:700;color:var(--gold)}
  .stat .l{font-size:11px;color:var(--dim);text-transform:uppercase;letter-spacing:.5px}
  .controls{display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin:18px 28px 6px}
  .controls input{background:var(--panel);border:1px solid var(--line);color:var(--txt);
    border-radius:8px;padding:8px 12px;font-size:13px;min-width:240px;flex:1}
  .chips{display:flex;gap:6px;flex-wrap:wrap;margin:8px 28px}
  .chip{background:var(--panel);border:1px solid var(--line);color:var(--dim);
    border-radius:999px;padding:5px 12px;font-size:12px;cursor:pointer;user-select:none}
  .chip.on{background:var(--gold);color:#1a120b;border-color:var(--gold);font-weight:600}
  .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(330px,1fr));
    gap:14px;padding:18px 28px 60px}
  .card{background:var(--panel);border:1px solid var(--line);border-radius:12px;
    padding:16px;cursor:pointer;transition:border-color .15s,transform .05s}
  .card:hover{border-color:var(--goldsoft)}
  .card.sup{opacity:.62}
  .ctop{display:flex;justify-content:space-between;align-items:flex-start;gap:8px}
  .cid{font-size:13px;color:var(--gold);font-weight:600;word-break:break-word}
  .cnome{font-size:12px;color:var(--dim);margin-top:1px}
  .badges{display:flex;gap:5px;flex-wrap:wrap;margin-top:2px;justify-content:flex-end}
  .b{font-size:10.5px;padding:2px 7px;border-radius:6px;font-weight:600;white-space:nowrap}
  .b.tipo{background:var(--panel2);color:var(--dim);border:1px solid var(--line)}
  .b.r1{background:rgba(91,138,166,.18);color:#9cc2d6;border:1px solid var(--r1)}
  .b.r2{background:rgba(226,163,43,.16);color:#f0c46a;border:1px solid var(--r2)}
  .b.r3{background:rgba(210,86,63,.18);color:#f0a08c;border:1px solid var(--r3)}
  .b.zv{background:rgba(63,174,107,.16);color:#8fd9ad;border:1px solid var(--verde)}
  .b.za{background:rgba(226,163,43,.16);color:#f0c46a;border:1px solid var(--amarela)}
  .b.zr{background:rgba(210,86,63,.20);color:#f3a594;border:1px solid var(--vermelha)}
  .b.sup{background:#2a2018;color:var(--dim);border:1px dashed var(--line)}
  .papel{font-size:12.5px;color:var(--txt);margin:10px 0 0;opacity:.92}
  .pop{margin-top:10px;font-size:12px;color:var(--dim);display:none}
  .card.open .pop{display:block}
  .pop .row{margin:7px 0;padding-top:7px;border-top:1px solid var(--line)}
  .pop .k{color:var(--goldsoft);font-weight:600;font-size:11px;text-transform:uppercase;
    letter-spacing:.4px;display:block;margin-bottom:2px}
  .pop code{background:var(--panel2);padding:1px 5px;border-radius:4px;font-size:11.5px}
  .pop ul{margin:3px 0 0;padding-left:16px}
  .nc{color:#f0a08c}
  footer{color:var(--dim);font-size:11.5px;padding:14px 28px 40px;border-top:1px solid var(--line)}
  .hint{font-size:11px;color:var(--dim);margin-left:auto}
  a{color:var(--goldsoft)}
</style>
</head>
<body>
<header>
  <h1>🧭 Cockpit MC — Registro de Unidades Agênticas</h1>
  <div class="sub">A caixa de ferramentas + o POP de cada uma + a linha vermelha LGPD. Plano de controle sobre o plano de dados agêntico.</div>
  <div class="meta" id="meta"></div>
</header>
<div class="stats" id="stats"></div>
<div class="controls">
  <input id="q" placeholder="🔎 buscar por id, papel, gatilho…">
  <span class="hint">clique num card para abrir o POP</span>
</div>
<div class="chips" id="chips"></div>
<div class="grid" id="grid"></div>
<footer id="foot"></footer>

<script>
const DATA = __DATA__;
const U = DATA.unidades || [];
const cob = DATA.cobertura || {};
const meta = DATA._meta || {};

const ZB = {Verde:"zv", Amarela:"za", Vermelha:"zr"};
const RB = {R1:"r1", R2:"r2", R3:"r3"};

document.getElementById("meta").innerHTML =
  `commit <b>${meta.gerado_de_commit||"?"}</b> · <b>${cob.instrumentadas_completas||0}</b> UAs · `+
  `<b>${cob.pct_instrumentado||0}%</b> cobertura · ${meta.zona||""} · <i>gerado, não mantido</i>`;

function count(field,val){return U.filter(u=>u[field]===val).length}
const stats=[
  ["UAs", U.length],
  ["R1", count("gate","R1")], ["R2", count("gate","R2")], ["R3", count("gate","R3")],
  ["🟢 Verde", count("zona","Verde")], ["🟡 Amarela", count("zona","Amarela")], ["🔴 Vermelha", count("zona","Vermelha")],
];
document.getElementById("stats").innerHTML = stats.map(s=>
  `<div class="stat"><div class="n">${s[1]}</div><div class="l">${s[0]}</div></div>`).join("");

const FILTERS={tipo:new Set(),gate:new Set(),zona:new Set(),status:new Set()};
function uniq(f){return [...new Set(U.map(u=>u[f]).filter(Boolean))].sort()}
const chipDefs=[["tipo",uniq("tipo")],["gate",uniq("gate")],["zona",uniq("zona")],["status",uniq("status")]];
document.getElementById("chips").innerHTML = chipDefs.map(([g,vals])=>
  vals.map(v=>`<span class="chip" data-g="${g}" data-v="${v}">${v}</span>`).join("")
).join(' <span style="width:10px"></span> ');

document.querySelectorAll(".chip").forEach(c=>c.onclick=()=>{
  const g=c.dataset.g,v=c.dataset.v;
  FILTERS[g].has(v)?FILTERS[g].delete(v):FILTERS[g].add(v);
  c.classList.toggle("on"); render();
});
document.getElementById("q").oninput=render;

function arr(x){return Array.isArray(x)?x:(x?[x]:[])}
function esc(s){return String(s==null?"":s).replace(/[&<>]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[m]))}

function card(u){
  const sup = u.status==="SUPERSEDED";
  const custo=u.custo||{};
  const gat=arr(u.gatilhos).map(g=>`<code>${esc(g)}</code>`).join(" ");
  const nc=arr(u.nao_confundir_com).map(x=>`<li class="nc"><b>${esc(x.id)}</b>: ${esc(x.motivo)}</li>`).join("");
  const art=arr(u._artefatos).map(a=>`<code>${esc(a)}</code>`).join("<br>");
  return `<div class="card ${sup?'sup':''}" data-id="${esc(u.id)}">
    <div class="ctop">
      <div><div class="cid">${esc(u.id)}</div><div class="cnome">${esc(u.nome)}</div></div>
      <div class="badges">
        <span class="b tipo">${esc(u.tipo)}</span>
        <span class="b ${RB[u.gate]||'tipo'}">${esc(u.gate)}</span>
        <span class="b ${ZB[u.zona]||'tipo'}">${esc(u.zona)}</span>
        ${sup?'<span class="b sup">SUPERSEDED</span>':''}
      </div>
    </div>
    <div class="papel">${esc(u.papel)}</div>
    <div class="pop">
      <div class="row"><span class="k">Quando usar</span>${gat||"—"}</div>
      <div class="row"><span class="k">Entrega</span>${esc(u.entrega)}</div>
      <div class="row"><span class="k">Para no gate</span>${esc(u.para_no_gate)}</div>
      <div class="row"><span class="k">Custo</span>agente: ${custo.gasta_agente?"sim":"não"} · opt-in: ${custo.opt_in?"sim":"não"}${custo.fan_out?` · fan-out: ${esc(custo.fan_out)}`:""}</div>
      ${u.lgpd_nota?`<div class="row"><span class="k">LGPD</span>${esc(u.lgpd_nota)}</div>`:""}
      <div class="row"><span class="k">Vedações honradas</span>${arr(u.vedacoes_honradas).map(esc).join(" · ")||"—"}</div>
      ${nc?`<div class="row"><span class="k">Não confundir com</span><ul>${nc}</ul></div>`:""}
      <div class="row"><span class="k">Método-fonte</span><code>${esc(u.metodo_fonte)}</code></div>
      <div class="row"><span class="k">Instância MC-ACI · camada ASE</span>${esc(u.instancia_aci)} · ${esc(u.camada_ase||"—")}</div>
      ${art?`<div class="row"><span class="k">Artefatos</span>${art}</div>`:""}
    </div>
  </div>`;
}

function render(){
  const q=document.getElementById("q").value.toLowerCase().trim();
  const out=U.filter(u=>{
    for(const g of ["tipo","gate","zona","status"]) if(FILTERS[g].size && !FILTERS[g].has(u[g])) return false;
    if(q){
      const hay=(u.id+" "+u.nome+" "+u.papel+" "+arr(u.gatilhos).join(" ")).toLowerCase();
      if(!hay.includes(q)) return false;
    }
    return true;
  });
  document.getElementById("grid").innerHTML = out.map(card).join("") || '<div style="color:var(--dim);padding:20px">nenhuma UA bate os filtros.</div>';
  document.querySelectorAll(".card").forEach(c=>c.onclick=()=>c.classList.toggle("open"));
  document.getElementById("foot").innerHTML =
    `Mostrando <b>${out.length}</b>/${U.length} UAs · ${esc(meta.nota||"")} · `+
    `<b>D &gt; C &gt; V</b> · Proof-First · Zona Verde · gerado, não mantido · ∞`;
}
render();
</script>
</body>
</html>
"""

html = TEMPLATE.replace("__DATA__", DATA_JSON)
with open(OUT_PATH, "w", encoding="utf-8") as fh:
    fh.write(html)

print(f"✅ Cockpit gerado (commit {REG['_meta']['gerado_de_commit']}):")
print(f"   {REG['cobertura']['instrumentadas_completas']} UAs · {len(html)} bytes · autossuficiente")
print(f"   → .claude/registro/painel-mc.html")
