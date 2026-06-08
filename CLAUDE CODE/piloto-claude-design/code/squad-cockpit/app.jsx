/* Squad Cockpit · app.jsx — shell, navegação, montagem */

const SCREENS = [
  { key: "mission", index: "01", label: "Mission Control", tag: "ATIVA", Comp: () => window.MissionControl },
  { key: "router",  index: "02", label: "Router-Ethics",   tag: "11.0",  Comp: () => window.RouterEthics },
  { key: "fleet",   index: "03", label: "Agent Fleet",     tag: "4",     Comp: () => window.AgentFleet },
  { key: "reports", index: "04", label: "Landing Reports", tag: "6",     Comp: () => window.LandingReports },
  { key: "budget",  index: "05", label: "Context Budget",  tag: "62%",   Comp: () => window.ContextBudget },
];

function useHashScreen() {
  const read = () => {
    const h = (window.location.hash || "").replace("#", "");
    return SCREENS.some((s) => s.key === h) ? h : "mission";
  };
  const [screen, setScreen] = React.useState(read);
  React.useEffect(() => {
    const on = () => setScreen(read());
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  const go = (k) => { window.location.hash = k; setScreen(k); };
  return [screen, go];
}

function Clock() {
  const [t, setT] = React.useState("");
  React.useEffect(() => {
    const fmt = () => {
      const now = new Date();
      const p = (n) => String(n).padStart(2, "0");
      setT(p(now.getHours()) + ":" + p(now.getMinutes()) + ":" + p(now.getSeconds()));
    };
    fmt();
    const id = window.setInterval(fmt, 1000);
    return () => window.clearInterval(id);
  }, []);
  return (
    <span className="clock"><span className="static-dot" />{t} BRT</span>
  );
}

function Sidebar({ screen, go }) {
  const d = window.COCKPIT;
  return (
    <aside className="sidebar">
      <div className="sb-brand">
        <span className="sb-glyph"><MCGlyph size={22} /></span>
        <div>
          <div className="word">Squad Cockpit</div>
          <div className="sub">{d.squad.id}</div>
        </div>
      </div>

      <div className="sb-section">Painel de comando</div>
      <nav className="sb-nav">
        {SCREENS.map((s) => (
          <button
            key={s.key}
            className={"sb-item" + (screen === s.key ? " active" : "")}
            onClick={() => go(s.key)}
          >
            <span className="nav-index">{s.index}</span>
            <span>{s.label}</span>
            <span className="nav-tag">{s.tag}</span>
          </button>
        ))}
      </nav>

      <div className="sb-footer">
        <div>HARNESS · <span className="hash">7f0c91ae</span></div>
        <div>{d.squad.mission} · janela {d.squad.window}</div>
        <span className="sb-status">ESQUADRÃO ATIVO</span>
      </div>
    </aside>
  );
}

function App() {
  const [screen, go] = useHashScreen();
  const meta = SCREENS.find((s) => s.key === screen) || SCREENS[0];
  const Comp = meta.Comp();

  return (
    <div className="app">
      <Sidebar screen={screen} go={go} />
      <div className="main">
        <header className="topbar">
          <div className="crumbs">
            <span>HARNESS</span>
            <span className="sep">/</span>
            <span>ESQUADRÃO {window.COCKPIT.squad.id}</span>
            <span className="sep">/</span>
            <span className="here">{meta.label}</span>
          </div>
          <div className="toolbar">
            <Clock />
            <button className="btn btn-ghost" onClick={() => go("mission")}>Mission Control</button>
          </div>
        </header>
        <main className="surface" data-screen-label={meta.label}>
          {Comp ? <Comp /> : null}
        </main>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
