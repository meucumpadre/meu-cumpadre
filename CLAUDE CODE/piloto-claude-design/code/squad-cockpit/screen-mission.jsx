/* Squad Cockpit · screen-mission.jsx — Mission Control */

function MissionControl() {
  const d = window.COCKPIT;
  const [sel, setSel] = React.useState("μ03");
  const [dispatch, setDispatch] = React.useState("idle"); // idle | sending | sent

  function doDispatch() {
    if (dispatch !== "idle") return;
    setDispatch("sending");
    window.setTimeout(() => setDispatch("sent"), 1600);
  }

  const dispatchLabel = {
    idle: "Despachar esquadrão",
    sending: "Despachando…",
    sent: "Esquadrão despachado",
  }[dispatch];

  return (
    <React.Fragment>
      <PageMeta
        left={d.squad.id + " · " + d.squad.mission}
        right="01 / 05 · MISSION CONTROL"
      />
      <PageHead
        eyebrow="MISSÃO ATIVA · DESPACHO DE MICROPASSOS"
        title="Mission Control"
        lede="O contrato da missão e a fila de micropassos antes do despacho. Nada parte sem especificação selada — o pré-voo é a fronteira entre intenção e execução."
      />

      <div className="kpi-row">
        <Kpi label="Micropassos" value="6" meta="2 concluídos · 1 em curso" />
        <Kpi label="Esquadrão pronto" value="5" unit="/ 5" cls="ok" meta="Triagem · Router · Dossiê · Human · Watch" />
        <Kpi label="Orçamento de contexto" value="62" unit="%" cls="warn" meta="112k / 180k tokens" />
        <Kpi label="Pré-voo" value="3" unit="/ 4" cls="warn" meta="1 ressalva aberta" />
      </div>

      <Panel title="Jornada do caso" meta="E0 → E7 · esteira" inst>
        <div className="journey">
          <div className="jrn-track">
            {d.journey.stages.map((s) => (
              <div className={"jrn-stage js-" + s.state} key={s.id}>
                <span className="js-dot" />
                <span className="js-id">{s.id}</span>
                <span className="js-label">{s.label}</span>
              </div>
            ))}
          </div>
          <p className="jrn-note">{d.journey.note}</p>
        </div>
      </Panel>

      <div className="split-2">
        <div className="col-stack">
          <Panel title="Especificação" meta="4 camadas · L1–L4" inst>
            <div className="spec-layers">
              {d.spec.map((s) => (
                <div className="spec-layer" key={s.tag}>
                  <span className={"l-tag " + s.t}>{s.tag}</span>
                  <div className="l-body">
                    <strong>{s.title}</strong>
                    {s.body && <span>{s.body}</span>}
                    {s.list && (
                      <ul>
                        {s.list.map((li, i) => <li key={i}>{li}</li>)}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 16, flexWrap: "wrap" }}>
              <StatusChip status="prov" label="PROVISIONAL" />
              <span className="eyebrow-mono">aguardando selo do Lead</span>
              <span style={{ flex: 1 }} />
              <Hash>spec-7f0c</Hash>
            </div>
          </Panel>

          <Panel title="Fila de micropassos" meta="μ01 → μ06" flush>
            <div className="queue">
              {d.queue.map((q) => (
                <button
                  className={"qstep" + (sel === q.id ? " sel" : "")}
                  key={q.id}
                  onClick={() => setSel(q.id)}
                >
                  <span className="q-id">{q.id}</span>
                  <span className="q-main">
                    <span className="q-desc">{q.desc}</span>
                    <span className="q-sub">
                      <span className="agent">{q.agent}</span>
                      <span>·</span>
                      <span>{q.cost} tok</span>
                      <span>·</span>
                      <span>{q.time}</span>
                    </span>
                  </span>
                  <span className="q-right">
                    <StatusChip status={q.status} label={q.label} />
                  </span>
                </button>
              ))}
            </div>
          </Panel>
        </div>

        <div className="col-stack">
          <section className="dispatch">
            <div className="d-head">
              <span className="d-title">Despacho</span>
              <span className="d-sub">PRÉ-VOO · D &gt; C &gt; V</span>
            </div>
            <div className="d-body">
              <div className="preflight">
                {d.preflight.map((p, i) => (
                  <div className="pf-row" key={i}>
                    <span className={"pf-mark " + p.cls}>{p.mark}</span>
                    <span>{p.label}</span>
                    <span className={"pf-meta " + p.cls}>{p.meta}</span>
                  </div>
                ))}
              </div>

              <button
                className="btn btn-primary btn-lg btn-block"
                onClick={doDispatch}
                disabled={dispatch !== "idle"}
              >
                {dispatch === "sending" && <span className="live-dot" />}
                {dispatchLabel}
              </button>

              <div className="d-note">
                {dispatch === "sent"
                  ? "μ03–μ06 entregues ao esquadrão · pousos serão registrados em Landing Reports"
                  : "Despacho libera μ03 em diante ao esquadrão"}
              </div>

              <div className="d-quote">
                « O diamante é carbono que não desistiu da pressão. »
                <span className="src">MC · Princípio fundador</span>
              </div>
            </div>
          </section>

          <Panel title="Selo de missão" meta="hierarquia preservada">
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                <DCVStamp />
                <span className="eyebrow-mono">Dignidade &gt; Compliance &gt; Viabilidade</span>
              </div>
              <hr className="rule" />
              <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 8, fontFamily: "var(--mc-font-mono)", fontSize: 11, color: "var(--mc-text-secondary)", letterSpacing: "0.04em", lineHeight: 1.8 }}>
                <span>Esquadrão</span><span style={{ color: "var(--mc-text-primary)" }}>{d.squad.id}</span>
                <span>Missão</span><span style={{ color: "var(--mc-text-primary)" }}>{d.squad.mission}</span>
                <span>Janela</span><span style={{ color: "var(--mc-text-primary)" }}>{d.squad.window} tokens</span>
                <span>Roteador</span><span style={{ color: "var(--mc-text-primary)" }}>RouterEthics</span>
              </div>
            </div>
          </Panel>
        </div>
      </div>
    </React.Fragment>
  );
}

window.MissionControl = MissionControl;
