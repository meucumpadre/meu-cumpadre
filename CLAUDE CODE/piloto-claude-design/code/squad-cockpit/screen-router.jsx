/* Squad Cockpit · screen-router.jsx — Router-Ethics 11.0
   Roteador determinístico: 140 nós (D>C>V), 3 scores independentes, 7 hooks.
   Dados em data.jsx (router). Nós ilustrativos · contagens/thresholds reais · Zona Verde. */

function RouterEthics() {
  const d = window.COCKPIT;
  const r = d.router;
  const [sel, setSel] = React.useState("confidence");

  const selScore = r.scores.find((s) => s.key === sel) || r.scores[0];

  return (
    <React.Fragment>
      <PageMeta
        left={d.squad.id + " · Router-Ethics v" + r.version}
        right="02 / 05 · ROUTER-ETHICS"
      />
      <PageHead
        eyebrow="ROTEADOR DETERMINÍSTICO · 140 NÓS · 7 HOOKS"
        title="Router-Ethics 11.0"
        lede="A cascata que decide entre autonomia e mão humana. Três scores independentes, três blocos de nós em hierarquia inviolável. Autonomia só quando os três aprovam — qualquer score fora do limiar entrega o caso ao humano."
      />

      <div className="kpi-row">
        {r.kpis.map((k, i) => (
          <Kpi key={i} label={k.label} value={k.value} unit={k.unit} cls={k.cls} />
        ))}
      </div>

      {/* ---- 3 scores tripartite ---- */}
      <Panel title="Scores independentes" meta="autonomia exige aprovação tripla" inst>
        <div className="score-grid">
          {r.scores.map((s) => (
            <button
              key={s.key}
              className={"score-card band-" + s.band + (sel === s.key ? " sel" : "")}
              onClick={() => setSel(s.key)}
            >
              <div className="sc-label">{s.label}</div>
              <div className="sc-value">{s.value}<span className="sc-denom">/100</span></div>
              <div className="sc-meter">
                <span className={"sc-fill band-" + s.band} style={{ width: s.value + "%" }} />
              </div>
              <div className={"sc-band band-" + s.band}>{s.band.toUpperCase()}</div>
            </button>
          ))}
        </div>
        <div className="score-read">
          <span className="eyebrow-mono">{selScore.label} · leitura</span>
          <p className="sr-text">{selScore.reading}</p>
          <p className="sr-thresholds">{selScore.thresholds}</p>
        </div>
      </Panel>

      {/* ---- 3 blocos de nós em cascata D>C>V ---- */}
      <div className="cascade-meta">
        <DCVStamp />
        <span className="eyebrow-mono">{r.hierarchy}</span>
        <span style={{ flex: 1 }} />
        <span className="eyebrow-mono">{r.nodesTotal} nós · 3 blocos</span>
      </div>
      <div className="blocks-grid">
        {r.blocks.map((b) => (
          <section className={"node-block " + b.cls} key={b.key}>
            <div className="nb-head">
              <span className="nb-key">{b.key}</span>
              <div className="nb-titles">
                <div className="nb-label">{b.label}</div>
                <div className="nb-range">{b.range} · {b.count} nós</div>
              </div>
            </div>
            <p className="nb-rule">{b.rule}</p>
            <div className="nb-nodes">
              {b.nodes.map((n) => (
                <div className={"node-row st-" + n.state} key={n.id}>
                  <span className="nr-mark" />
                  <span className="nr-id">{n.id}</span>
                  <span className="nr-desc">{n.desc}</span>
                </div>
              ))}
              <div className="nb-more">+ {b.count - b.nodes.length} nós no bloco</div>
            </div>
          </section>
        ))}
      </div>

      <div className="split-2" style={{ marginTop: 24 }}>
        {/* ---- 7 hooks ---- */}
        <Panel title="Hooks transversais" meta="7 gatilhos determinísticos" flush>
          <div className="hooks-list">
            {r.hooks.map((h) => (
              <div className={"hook-row hk-" + h.state} key={h.id}>
                <span className="hk-id">{h.id}</span>
                <div className="hk-main">
                  <span className="hk-label">{h.label}</span>
                  <span className="hk-desc">{h.desc}</span>
                </div>
                <span className={"hk-state hk-" + h.state}>{h.state === "armed" ? "ARMADO" : "OCIOSO"}</span>
              </div>
            ))}
          </div>
        </Panel>

        {/* ---- Veredito ---- */}
        <section className="verdict-panel">
          <div className="vp-head">
            <span className="vp-title">Veredito do roteador</span>
            <span className="vp-sub">CASCATA · D &gt; C &gt; V</span>
          </div>
          <div className="vp-body">
            <div className={"vp-decision vp-" + r.verdict.cls}>{r.verdict.decision}</div>
            <p className="vp-reason">{r.verdict.reason}</p>
            <div className="vp-rule" />
            <div className="vp-logic">
              <div className="vl-row"><span className="vl-mark pass">✓</span><span>Confidence ≥ 70 · aprova</span></div>
              <div className="vl-row"><span className="vl-mark pass">✓</span><span>Complexity em faixa assistida · aprova</span></div>
              <div className="vl-row"><span className="vl-mark pass">✓</span><span>Fraudscore &lt; 40 · aprova</span></div>
              <div className="vl-row"><span className="vl-mark warn">!</span><span>Hook DIB Urgency armado · janela humana 24h</span></div>
            </div>
            <div className="vp-quote">
              « Autonomia só quando os três aprovam. A dúvida entrega ao humano. »
              <span className="src">Router-Ethics 11.0 · regra de ouro</span>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

window.RouterEthics = RouterEthics;
