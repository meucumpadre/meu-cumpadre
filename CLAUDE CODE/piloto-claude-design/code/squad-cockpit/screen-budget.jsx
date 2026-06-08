/* Squad Cockpit · screen-budget.jsx — Context Budget */

function ContextBudget() {
  const d = window.COCKPIT;
  const b = d.budget;
  const pct = Math.round((b.used / b.total) * 100);

  return (
    <React.Fragment>
      <PageMeta left={d.squad.id + " · " + d.squad.mission} right="05 / 05 · CONTEXT BUDGET" />
      <PageHead
        eyebrow="ORÇAMENTO DE ATENÇÃO · FONTES INJETADAS"
        title="Context Budget"
        lede="A janela é finita; a atenção é o recurso escasso. O Gestor de Contexto cura o que entra, prioriza o que está selado e poda antes do limite — margem é silêncio, não decoração."
      />

      <div className="budget-hero">
        <div className="budget-meter">
          <div className="bm-top">
            <div className="bm-total">
              {b.used}k<span className="denom"> / {b.total}k tokens</span>
            </div>
            <span className="bm-pct">{pct}% da janela</span>
          </div>
          <div className="bm-caption">composição do contexto injetado · por categoria</div>
          <div className="stack-bar">
            {b.segments.map((s) => (
              <div
                key={s.key}
                className={"stack-seg " + s.cls}
                style={{ width: (s.k / b.total) * 100 + "%" }}
                title={s.label + " · " + s.k + "k"}
              />
            ))}
            <div className="stack-seg free" style={{ width: ((b.total - b.used) / b.total) * 100 + "%" }} title="Livre" />
          </div>
          <div className="stack-legend">
            {b.segments.map((s) => (
              <span className="legend-item" key={s.key}>
                <span className={"sw " + s.cls} />
                {s.label} <b>{s.k}k</b>
              </span>
            ))}
            <span className="legend-item">
              <span className="sw free" />
              Livre <b>{b.total - b.used}k</b>
            </span>
          </div>
        </div>

        <div className="budget-gauge">
          <div>
            <div className="bg-label">Atenção em uso</div>
            <div className="bg-value">{pct}%</div>
            <div className="bg-sub">
              Abaixo do limiar de poda (80%). O esquadrão ainda pode receber {b.total - b.used}k tokens antes da compressão automática.
            </div>
          </div>
          <div className="bg-flags">
            {d.budgetFlags.map((f, i) => (
              <div className="bg-flag" key={i}>
                <span className="fmark">↳</span>
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Panel title="Fontes injetadas" meta="6 fontes · ordenadas por peso" flush>
        <div className="src-table">
          {d.sources.map((s, i) => (
            <div className="src-row" key={i}>
              <span className={"s-dot " + s.cls} />
              <span>
                <span className="s-name">{s.name}</span>
                <span className="s-cat">{s.cat}</span>
              </span>
              <span className="s-tokens">{s.k}k</span>
              <span className="s-mini">
                {!s.free && <span className={"f " + s.cls} style={{ width: Math.min(100, s.pct * 2.6) + "%" }} />}
              </span>
              <span className="s-pct">{s.free ? "reserva" : s.pct + "%"}</span>
            </div>
          ))}
        </div>
      </Panel>
    </React.Fragment>
  );
}

window.ContextBudget = ContextBudget;
