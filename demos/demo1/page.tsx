// Demo 1: dark, bold SaaS landing page
export const metadata = { title: "Nova Analytics" };

const c = { bg: "#0b0f1a", card: "#151b2e", accent: "#7c5cff", text: "#e8eaf2", muted: "#8a90a6" };

export default function Demo1() {
  return (
    <div style={{ background: c.bg, color: c.text, minHeight: "100vh", fontFamily: "system-ui, sans-serif" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", padding: "24px 6vw" }}>
        <strong style={{ fontSize: 20 }}>◆ Nova</strong>
        <span style={{ color: c.muted }}>Product · Pricing · Contact</span>
      </nav>
      <header style={{ padding: "12vh 6vw", maxWidth: 820 }}>
        <h1 style={{ fontSize: "clamp(40px, 7vw, 76px)", lineHeight: 1.05, margin: 0 }}>
          Your data, <span style={{ color: c.accent }}>finally clear.</span>
        </h1>
        <p style={{ color: c.muted, fontSize: 20, marginTop: 24 }}>
          Real-time dashboards for teams that move fast.
        </p>
        <button style={{ marginTop: 32, background: c.accent, color: "#fff", border: 0, padding: "14px 28px", borderRadius: 10, fontSize: 16 }}>
          Start free trial
        </button>
      </header>
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20, padding: "0 6vw 12vh" }}>
        {["Live metrics", "Smart alerts", "Team sharing"].map((t) => (
          <div key={t} style={{ background: c.card, padding: 28, borderRadius: 14 }}>
            <h3 style={{ marginTop: 0 }}>{t}</h3>
            <p style={{ color: c.muted, margin: 0 }}>Built for clarity and speed, out of the box.</p>
          </div>
        ))}
      </section>
    </div>
  );
}
