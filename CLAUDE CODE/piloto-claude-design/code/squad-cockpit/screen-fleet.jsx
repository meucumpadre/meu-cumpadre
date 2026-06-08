/* Squad Cockpit · screen-fleet.jsx — Agent Fleet */

function AgentFleet() {
  const d = window.COCKPIT;
  const [sel, setSel] = React.useState(null);

  return (
    <React.Fragment>
      <PageMeta left={d.squad.id + " · " + d.squad.mission} right="03 / 05 · AGENT FLEET" />
      <PageHead
        eyebrow="ESQUADRÃO · CINCO PAPÉIS DA JORNADA"
        title="Agent Fleet"
        lede="Cada agente tem um papel inviolável na esteira do cidadão. A Triagem classifica, o Router-Ethics decide D>C>V, o Dossiê prova com fonte e hash, a Human API recebe o handoff, o Watchdog vigia o pós-protocolo."
      />

      <div className="kpi-row">
        {d.fleetKpis.map((k, i) => (
          <Kpi key={i} label={k.label} value={k.value} unit={k.unit} cls={k.cls} />
        ))}
      </div>

      <div className="fleet-grid">
        {d.agents.map((a) => (
          <article
            className={"agent-card " + a.cls + (sel === a.name ? " sel" : "")}
            key={a.name}
            onClick={() => setSel(sel === a.name ? null : a.name)}
          >
            <div className="ac-head">
              <span className="ac-glyph">{a.glyph}</span>
              <div style={{ minWidth: 0 }}>
                <div className="ac-id">{a.id}</div>
                <div className="ac-name">{a.name}</div>
                <div className="ac-role">{a.role}</div>
              </div>
              <StatusChip status={a.status} label={a.statusLabel} />
            </div>
            <div className="ac-metrics">
              {a.metrics.map((m, i) => (
                <div className="ac-metric" key={i}>
                  <div className="m-label">{m.label}</div>
                  <div className="m-value">{m.value}<span className="u"> {m.u}</span></div>
                </div>
              ))}
            </div>
            <div className="ac-foot">
              <span>{a.foot}</span>
              <Hash>{a.cls + "-7f"}</Hash>
            </div>
          </article>
        ))}
      </div>
    </React.Fragment>
  );
}

window.AgentFleet = AgentFleet;
