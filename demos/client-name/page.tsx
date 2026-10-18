// Client demo: bright, playful fitness studio
export const metadata = { title: "Pulse Studio" };

const c = { bg: "#fff", ink: "#111", pop: "#ff4d2e", sun: "#ffd23f" };

export default function ClientName() {
  return (
    <div style={{ background: c.bg, color: c.ink, minHeight: "100vh", fontFamily: "'Arial Black', Arial, sans-serif" }}>
      <header style={{ background: c.sun, padding: "10vh 6vw", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32, alignItems: "center" }}>
        <h1 style={{ fontSize: "clamp(48px, 9vw, 110px)", lineHeight: 0.9, margin: 0, textTransform: "uppercase" }}>
          Move<br />Loud.
        </h1>
        <div style={{ fontFamily: "Arial, sans-serif" }}>
          <p style={{ fontSize: 22 }}>High-energy classes. Zero judgement. First class free.</p>
          <button style={{ background: c.ink, color: "#fff", border: 0, padding: "16px 30px", fontSize: 18, fontWeight: 700 }}>
            Book now →
          </button>
        </div>
      </header>
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        {["Spin", "HIIT", "Boxing", "Yoga"].map((cls, i) => (
          <div key={cls} style={{ flex: "1 1 200px", padding: "8vh 4vw", background: i % 2 ? c.pop : c.ink, color: "#fff", fontSize: 32, textTransform: "uppercase" }}>
            {cls}
          </div>
        ))}
      </section>
    </div>
  );
}
