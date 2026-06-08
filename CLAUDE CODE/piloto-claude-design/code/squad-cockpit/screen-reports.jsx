/* Squad Cockpit · screen-reports.jsx — Landing Reports */

function scoreClass(n) {
  if (n >= 85) return "s-hi";
  if (n >= 60) return "s-mid";
  return "s-lo";
}

// Critérios do landing validator (mc_vtvl_landing_validator) derivados do veredito do pouso.
function deriveChecks(l) {
  const hiCav = l.caveats.some((c) => c.sev === "hi");
  const pass = l.verdict === "pass";
  return [
    { k: "Firewall · Zona Verde", s: "pass" },
    { k: "Proof-First · fonte + hash", s: l.sealed ? "pass" : "warn" },
    { k: "Compasso aplicado", s: "pass" },
    { k: "Critérios de aceite atendidos", s: pass ? "pass" : "fail" },
    { k: "Sem drift de escopo", s: hiCav ? "fail" : (pass ? "pass" : "warn") },
  ];
}

function LandingReports() {
  const d = window.COCKPIT;
  const [selId, setSelId] = React.useState(d.landings[0].id);
  const sel = d.landings.find((l) => l.id === selId) || d.landings[0];
  const sc = scoreClass(sel.score);

  return (
    <React.Fragment>
      <PageMeta left={d.squad.id + " · " + d.squad.mission} right="04 / 05 · LANDING REPORTS" />
      <PageHead
        eyebrow="POUSOS · SCORE · RESSALVAS · LIÇÕES"
        title="Landing Reports"
        lede="Todo micropasso pousa com um veredito. Score de zero a cem, ressalvas ordenadas por severidade, PASS ou FAIL — e a lição que o esquadrão carrega para o próximo despacho."
      />

      <div className="kpi-row">
        {d.reportKpis.map((k, i) => (
          <Kpi key={i} label={k.label} value={k.value} unit={k.unit} cls={k.cls} />
        ))}
      </div>

      <div className="reports-layout">
        <Panel title="Pousos registrados" meta="recentes primeiro" flush>
          <div className="landing-list">
            {d.landings.map((l) => (
              <button
                className={"landing-row" + (selId === l.id ? " sel" : "")}
                key={l.id}
                onClick={() => setSelId(l.id)}
              >
                <span className={"lr-score " + scoreClass(l.score)}>{l.score}</span>
                <span style={{ minWidth: 0 }}>
                  <span className="lr-name">{l.title}</span>
                  <span className="lr-sub">
                    <span>{l.id}</span>
                    <span>· {l.step}</span>
                    <span>· {l.agent}</span>
                    <span>· {l.when}</span>
                  </span>
                </span>
                <span className={"verdict " + l.verdict}>{l.verdict === "pass" ? "PASS" : "FAIL"}</span>
              </button>
            ))}
          </div>
        </Panel>

        <div className="report">
          <div className="report-head">
            <div className="r-meta">
              <span>{sel.id} · {sel.step}</span>
              <span>{sel.agent}</span>
            </div>
            <div className="r-title">{sel.title}</div>
            <div className="r-sub">Pouso registrado {sel.when} · conferido pelo VerificationEngine</div>
          </div>

          <div className="report-scoreline">
            <div className={"score-big " + sc}>{sel.score}<span className="denom"> / 100</span></div>
            <div>
              <div className="score-bar">
                <div className={"fill " + sc} style={{ width: sel.score + "%" }} />
              </div>
              <div className="eyebrow-mono" style={{ marginTop: 8 }}>
                score de pouso · limiar de selo ≥ 85
              </div>
            </div>
            <span className={"verdict " + sel.verdict}>{sel.verdict === "pass" ? "PASS" : "FAIL"}</span>
          </div>

          <div className="report-section">
            <div className="rs-head">Critérios de verificação · Motor</div>
            <div className="checks-list">
              {deriveChecks(sel).map((c, i) => (
                <div className={"check-row chk-" + c.s} key={i}>
                  <span className="chk-mark">{c.s === "pass" ? "✓" : c.s === "fail" ? "✕" : "!"}</span>
                  <span className="chk-k">{c.k}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="report-section">
            <div className="rs-head">Ressalvas · {sel.caveats.length}</div>
            <div className="caveat-list">
              {sel.caveats.map((c, i) => (
                <div className={"caveat sev-" + c.sev} key={i}>
                  <span className="c-mark" />
                  <span>
                    {c.text}
                    <span className="c-sev">
                      severidade {c.sev === "hi" ? "alta" : c.sev === "mid" ? "média" : "baixa"}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="report-section">
            <div className="rs-head">Lições · {sel.lessons.length}</div>
            <div className="lesson-list">
              {sel.lessons.map((l, i) => (
                <div className="lesson" key={i}>
                  <span className="l-arrow">↳</span>
                  <span>{l}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="report-seal">
            <div className="rs-text">
              <span className="q">Falha barrada cedo custa menos que pouso ruim revertido.</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-end" }}>
              <StatusChip status={sel.sealed ? "done" : "prov"} label={sel.sealed ? "SELADO" : "PROVISIONAL"} />
              <Hash>{sel.hash}</Hash>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

window.LandingReports = LandingReports;
