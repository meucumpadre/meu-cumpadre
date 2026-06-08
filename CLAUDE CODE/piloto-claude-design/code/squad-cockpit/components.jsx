/* Squad Cockpit · components.jsx — blocos compartilhados */

// MC diamond glyph (inline SVG, canonical)
function MCGlyph({ size = 22, color = "var(--mc-ouro-500)" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path d="M32 6 L56 24 L32 58 L8 24 Z" stroke={color} strokeWidth="2" fill="none" />
      <path d="M32 6 L22 24 L32 58 L42 24 Z" stroke={color} strokeWidth="1.25" fill="none" />
      <path d="M8 24 L56 24" stroke={color} strokeWidth="1.25" />
    </svg>
  );
}

function PageMeta({ left, right }) {
  return (
    <div className="page-meta">
      <span>{left}</span>
      <span>{right}</span>
    </div>
  );
}

function PageHead({ eyebrow, title, lede }) {
  return (
    <div className="page-head">
      <div className="eyebrow">{eyebrow}</div>
      <h1 className="title">{title}</h1>
      {lede && <div className="lede">{lede}</div>}
    </div>
  );
}

function Kpi({ label, value, unit, meta, cls }) {
  return (
    <div className={"kpi " + (cls || "")}>
      <div className="k-label">{label}</div>
      <div className="k-value">
        {value}{unit && <span className="unit">{unit}</span>}
      </div>
      {meta && <div className="k-meta">{meta}</div>}
    </div>
  );
}

function Panel({ title, meta, inst, children, flush }) {
  return (
    <section className={"panel" + (inst ? " inst" : "")}>
      {(title || meta) && (
        <div className="panel-head">
          {title && <h2 className="p-title">{title}</h2>}
          {meta && <span className="p-meta">{meta}</span>}
        </div>
      )}
      <div className={"panel-body" + (flush ? " flush" : "")}>{children}</div>
    </section>
  );
}

function StatusChip({ status, label }) {
  const map = {
    idle: "st-idle", active: "st-active", running: "st-running",
    blocked: "st-blocked", done: "st-done", prov: "st-prov",
  };
  return <span className={"chip " + (map[status] || "st-idle")}>{label}</span>;
}

function DCVStamp() {
  return (
    <span className="dcv-stamp" title="Hierarquia inviolável: Dignidade > Compliance > Viabilidade">
      <span className="seg d">D</span>
      <span className="seg c">C</span>
      <span className="seg v">V</span>
    </span>
  );
}

function Hash({ children }) {
  return <span className="hash">{children}</span>;
}

Object.assign(window, { MCGlyph, PageMeta, PageHead, Kpi, Panel, StatusChip, DCVStamp, Hash });
