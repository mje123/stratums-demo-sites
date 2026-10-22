"use client";

import { useEffect, useRef, useState } from "react";
import s from "./styles.module.css";

const links = [
  ["Start Flying", "#start"],
  ["Rates & Fleet", "#rates"],
  ["Programs", "#programs"],
  ["Our Team", "#team"],
  ["Contact", "#contact"],
];

/** Their sun-and-moon badge logo, redrawn as vector so it stays crisp on any background. */
export function OfcLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 -20 290 176" className={className} role="img" aria-label="Orlandi Flight Center">
      <defs>
        <radialGradient id="ofc-sun" cx="50%" cy="62%" r="62%">
          <stop offset="0" stopColor="#fffdf2" />
          <stop offset="0.45" stopColor="#fff3a6" />
          <stop offset="1" stopColor="#f2c614" />
        </radialGradient>
        <linearGradient id="ofc-moon" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e9ecf0" />
          <stop offset="1" stopColor="#b9bec6" />
        </linearGradient>
        <clipPath id="ofc-top"><rect x="0" y="0" width="290" height="80" /></clipPath>
        <clipPath id="ofc-bot"><rect x="0" y="80" width="290" height="80" /></clipPath>
        <path id="ofc-arc" d="M67 80 A78 78 0 0 1 223 80" />
      </defs>
      <circle cx="145" cy="80" r="72" fill="#fff" />
      <circle cx="145" cy="80" r="68" fill="url(#ofc-sun)" clipPath="url(#ofc-top)" />
      <g clipPath="url(#ofc-bot)">
        <circle cx="145" cy="80" r="68" fill="url(#ofc-moon)" />
        <circle cx="120" cy="118" r="9" fill="#a7adb6" opacity=".55" />
        <circle cx="168" cy="126" r="6" fill="#a7adb6" opacity=".5" />
        <circle cx="150" cy="104" r="4" fill="#a7adb6" opacity=".45" />
        <circle cx="185" cy="102" r="5" fill="#a7adb6" opacity=".4" />
      </g>
      <text fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="21" letterSpacing="2" fill="currentColor">
        <textPath href="#ofc-arc" startOffset="50%" textAnchor="middle">ORLANDI</textPath>
      </text>
      {/* banners */}
      <rect x="6" y="58" width="80" height="24" rx="2" fill="#fff" stroke="#111" strokeWidth="2" />
      <rect x="204" y="58" width="80" height="24" rx="2" fill="#fff" stroke="#111" strokeWidth="2" />
      <text x="46" y="77" textAnchor="middle" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="18" fill="#111">FLIGHT</text>
      <text x="244" y="77" textAnchor="middle" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="18" fill="#111">CENTER</text>
      {/* airplane, front view */}
      <g fill="#0b497d">
        <path d="M142 14 L148 14 L150 60 L140 60 Z" />
        <path d="M100 63 L190 63 L188 68 L102 68 Z" />
        <path d="M4 84 L118 78 L172 78 L286 84 L286 94 L172 92 L118 92 L4 94 Z" />
        <ellipse cx="145" cy="78" rx="21" ry="20" />
        <path d="M136 92 L154 92 L151 112 L139 112 Z" />
      </g>
      <path d="M132 66 Q145 58 158 66 L156 74 L134 74 Z" fill="#fff" />
      <ellipse cx="122" cy="86" rx="20" ry="5" fill="#fff" />
      <ellipse cx="168" cy="86" rx="20" ry="5" fill="#fff" />
      <circle cx="145" cy="86" r="5.5" fill="#fff" stroke="#0b497d" strokeWidth="1.5" />
      <g fill="#111">
        <rect x="102" y="104" width="7" height="16" rx="3.5" />
        <rect x="141.5" y="112" width="7" height="16" rx="3.5" />
        <rect x="181" y="104" width="7" height="16" rx="3.5" />
      </g>
      <text x="145" y="143" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="8" fill="#333">LLC</text>
    </svg>
  );
}

export function Nav({ phone, tel }: { phone: string; tel: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`${s.nav} ${scrolled || open ? s.navSolid : ""}`}>
      <div className={s.navInner}>
        <a href="#top" onClick={close} className={s.brand} aria-label="Orlandi Flight Center home">
          <OfcLogo className={s.brandLogo} />
        </a>
        <nav className={`${s.navLinks} ${open ? s.navOpen : ""}`} aria-label="Primary">
          {links.map(([label, href]) => <a key={href} href={href} onClick={close}>{label}</a>)}
          <a href={tel} className={`${s.btn} ${s.btnSun} ${s.navCta}`}>Call {phone}</a>
        </nav>
        <button
          className={`${s.burger} ${open ? s.burgerOpen : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span />
        </button>
      </div>
    </header>
  );
}

export function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add(s.in); io.disconnect(); }
    }, { rootMargin: "0px 0px -8% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`${s.reveal} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

/* ---------- Introductory flight packages (New Jersey rates from their Training page) ---------- */
const intro = {
  Basic: { detail: "½ hr ground · ½ hr preflight · ½ hr flight", prices: [["Piper J3 Cub", "$195"], ["Cessna 172K/L", "$205"], ["Piper Seneca II", "$315"]] },
  Advanced: { detail: "½ hr ground · ½ hr preflight · 1 hr flight", prices: [["Piper J3 Cub", "$305"], ["Cessna 172K/L", "$335"], ["Piper Seneca II", "$535"]] },
  Ultimate: { detail: "1 hr ground · ½ hr preflight · 1 hr flight", prices: [["Piper J3 Cub", "$345"], ["Cessna 172K/L", "$375"], ["Piper Seneca II", "$575"]] },
} as const;

export function IntroBoard() {
  const [tab, setTab] = useState<keyof typeof intro>("Advanced");
  const p = intro[tab];
  return (
    <div className={s.board}>
      <div className={s.tabs} role="tablist" aria-label="Introductory flight package">
        {(Object.keys(intro) as (keyof typeof intro)[]).map((k) => (
          <button key={k} role="tab" aria-selected={tab === k} className={`${s.tab} ${tab === k ? s.tabOn : ""}`} onClick={() => setTab(k)}>{k}</button>
        ))}
      </div>
      <p className={s.boardNote}>{p.detail}. Preflight inspection and post-flight debrief included; it&apos;s your first logged syllabus lesson.</p>
      {p.prices.map(([k, v]) => (
        <div key={k} className={s.row}><span>{k}</span><i /><strong>{v}</strong></div>
      ))}
      <p className={s.fine}>New Jersey rates shown. Pre-paid, all inclusive, no hidden fees or tax.</p>
    </div>
  );
}

/* ---------- Fleet rates (per hour, wet) from their Rental Fleet page ---------- */
type Plane = { tail: string; year: number; model: string; kind: "tailwheel" | "172" | "multi"; rate: number; panel: string; uses: string };
const fleet: Plane[] = [
  { tail: "N26719", year: 1940, model: "Piper J3C-85 Cub", kind: "tailwheel", rate: 149, panel: "Handheld intercom & com radio, ADS-B in", uses: "Tailwheel, Sport, primary & advanced · dual only" },
  { tail: "N1500N", year: 1947, model: "Piper J3C-65 Cub", kind: "tailwheel", rate: 149, panel: "Handheld intercom & com radio, ADS-B in", uses: "Tailwheel, Sport, primary & advanced · dual only" },
  { tail: "N7380G", year: 1970, model: "Cessna 172K", kind: "172", rate: 179, panel: "Steam gauges, autopilot, ADS-B out", uses: "Primary & advanced, IFR, night, rental" },
  { tail: "N78066", year: 1969, model: "Cessna 172K", kind: "172", rate: 179, panel: "Steam gauges, GNS 175W, ADS-B out", uses: "Primary & advanced, IFR, night, rental" },
  { tail: "N7833G", year: 1971, model: "Cessna 172L", kind: "172", rate: 189, panel: "G5 AI & HSI, GNS 430W, ADS-B out", uses: "Primary & advanced, IFR, night, rental" },
  { tail: "N7040Q", year: 1972, model: "Cessna 172L", kind: "172", rate: 189, panel: "G5 AI & HSI, GTN 650Xi, ADS-B out", uses: "Primary & advanced, IFR, night, rental" },
  { tail: "N7308G", year: 1970, model: "Cessna 172K", kind: "172", rate: 209, panel: "Dual Dynon glass, GNS 530W, autopilot, ADS-B in & out", uses: "TAA, primary & advanced, IFR, night, rental" },
  { tail: "N1766H", year: 1959, model: "Cessna 310C", kind: "multi", rate: 399, panel: "IFR, autopilot, ADS-B out", uses: "Multi, complex, high performance, IFR, night · dual only" },
  { tail: "N9333K", year: 1976, model: "Piper Seneca II", kind: "multi", rate: 399, panel: "GNS 530W & 430W, autopilot, FIKI, ADS-B out", uses: "Multi, complex, high performance, IFR, night, rental" },
];
const filters = [["all", "All aircraft"], ["tailwheel", "Tailwheel"], ["172", "Cessna 172s"], ["multi", "Multiengine"]] as const;

export function FleetBoard() {
  const [f, setF] = useState<(typeof filters)[number][0]>("all");
  const list = fleet.filter((p) => f === "all" || p.kind === f);
  return (
    <div className={s.fleet}>
      <div className={s.chips} role="group" aria-label="Filter aircraft">
        {filters.map(([k, label]) => (
          <button key={k} aria-pressed={f === k} className={`${s.chip} ${f === k ? s.chipOn : ""}`} onClick={() => setF(k)}>{label}</button>
        ))}
      </div>
      <div className={s.planes}>
        {list.map((p) => (
          <article key={p.tail} className={s.plane}>
            <div className={s.planeTop}>
              <span className={s.tail}>{p.tail}</span>
              <span className={s.rate}>${p.rate}<small>/hr</small></span>
            </div>
            <h3>{p.year} {p.model}</h3>
            <p className={s.panel}>{p.panel}</p>
            <p className={s.uses}>{p.uses}</p>
          </article>
        ))}
        {f === "all" && (
          <article className={`${s.plane} ${s.planeSim}`}>
            <div className={s.planeTop}>
              <span className={s.tail}>Redbird Jay</span>
              <span className={s.rate}>Free</span>
            </div>
            <h3>Flight simulator (NJ)</h3>
            <p className={s.panel}>Yoke, throttle, rudder pedals, many aircraft, all weather conditions</p>
            <p className={s.uses}>Headset rental $3/hr at both bases</p>
          </article>
        )}
      </div>
    </div>
  );
}

/* ---------- Instructor rates ---------- */
const cfi = {
  "Primary training": { who: "If you don't yet hold a pilot certificate", rates: [["Flight Instructor", "$65"], ["Senior Instructor", "$75"], ["Asst. Chief / Chief Instructor", "$85"]] },
  "Advanced training": { who: "If you hold a pilot certificate", rates: [["Flight Instructor", "$70"], ["Senior Instructor", "$80"], ["Asst. Chief / Chief Instructor", "$90"]] },
} as const;

export function CfiRates() {
  const [tab, setTab] = useState<keyof typeof cfi>("Primary training");
  const c = cfi[tab];
  return (
    <div className={`${s.board} ${s.boardLight}`}>
      <div className={s.tabs} role="tablist" aria-label="Instructor rates">
        {(Object.keys(cfi) as (keyof typeof cfi)[]).map((k) => (
          <button key={k} role="tab" aria-selected={tab === k} className={`${s.tab} ${tab === k ? s.tabOn : ""}`} onClick={() => setTab(k)}>{k}</button>
        ))}
      </div>
      <p className={s.boardNote}>{c.who}. Briefings and debriefings are free: you only pay for time spent teaching.</p>
      {c.rates.map(([k, v]) => (
        <div key={k} className={s.row}><span>{k}</span><i /><strong>{v}<small>/hr</small></strong></div>
      ))}
      <p className={s.fine}>+$5/hr tailwheel or multiengine · +$20/hr in an owner&apos;s aircraft</p>
    </div>
  );
}

/* ---------- Inquiry (opens the visitor's email app) ---------- */
const interests = ["Discovery flight", "Intro flight", "Private / Sport", "Instrument", "Commercial & CFI", "Zero to Hero", "Tailwheel", "Rental checkout"];

export function Inquiry({ email }: { email: string }) {
  const [base, setBase] = useState("New Jersey (1N7)");
  const [interest, setInterest] = useState(interests[0]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [`Name: ${name}`, phone ? `Phone: ${phone}` : "", `Base: ${base}`, `Interested in: ${interest}`, msg ? `\n${msg}` : ""].filter(Boolean).join("\n");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(`${interest} · ${base}`)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <form className={s.form} onSubmit={send}>
      <p className={s.formTitle}>Plan your first flight</p>
      <p className={s.formLabel}>Which base?</p>
      <div className={s.seg}>
        {["New Jersey (1N7)", "Florida (VDF)"].map((b) => (
          <button type="button" key={b} aria-pressed={base === b} className={`${s.segBtn} ${base === b ? s.segOn : ""}`} onClick={() => setBase(b)}>{b}</button>
        ))}
      </div>
      <p className={s.formLabel}>I&apos;m interested in</p>
      <div className={s.typeGrid}>
        {interests.map((t) => (
          <button type="button" key={t} aria-pressed={interest === t} className={`${s.type} ${interest === t ? s.typeOn : ""}`} onClick={() => setInterest(t)}>{t}</button>
        ))}
      </div>
      <div className={s.fields}>
        <label><span>Name</span><input required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" /></label>
        <label><span>Phone</span><input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" autoComplete="tel" /></label>
        <label className={s.full}><span>Message</span><textarea rows={3} value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Your goals, schedule, experience so far" /></label>
      </div>
      <button type="submit" className={`${s.btn} ${s.btnSun} ${s.formBtn}`}>Email Orlandi Flight Center</button>
    </form>
  );
}
