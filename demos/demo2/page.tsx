// Demo 2: warm, elegant restaurant site
export const metadata = { title: "Olive & Thyme" };

const c = { bg: "#f6f0e6", ink: "#2f2a24", accent: "#6b7d3c", line: "#d9cdb8" };

export default function Demo2() {
  return (
    <div style={{ background: c.bg, color: c.ink, minHeight: "100vh", fontFamily: "Georgia, 'Times New Roman', serif" }}>
      <header style={{ textAlign: "center", padding: "14vh 6vw 8vh", borderBottom: `1px solid ${c.line}` }}>
        <p style={{ letterSpacing: 4, textTransform: "uppercase", color: c.accent, fontSize: 13 }}>Est. 1998 · Napa Valley</p>
        <h1 style={{ fontSize: "clamp(44px, 8vw, 88px)", fontWeight: 400, margin: "12px 0" }}>Olive &amp; Thyme</h1>
        <p style={{ fontStyle: "italic", fontSize: 20 }}>Seasonal Mediterranean cooking</p>
      </header>
      <section style={{ maxWidth: 640, margin: "0 auto", padding: "8vh 6vw" }}>
        <h2 style={{ textAlign: "center", fontWeight: 400 }}>Tonight&apos;s Menu</h2>
        {[
          ["Charred octopus, lemon, oregano", "18"],
          ["Lamb shoulder, saffron rice", "34"],
          ["Olive oil cake, figs", "12"],
        ].map(([dish, price]) => (
          <div key={dish} style={{ display: "flex", justifyContent: "space-between", padding: "16px 0", borderBottom: `1px dotted ${c.line}` }}>
            <span>{dish}</span>
            <span style={{ color: c.accent }}>${price}</span>
          </div>
        ))}
        <p style={{ textAlign: "center", marginTop: 48 }}>
          <a href="#" style={{ color: c.ink, border: `1px solid ${c.ink}`, padding: "12px 32px", textDecoration: "none" }}>Reserve a table</a>
        </p>
      </section>
    </div>
  );
}
