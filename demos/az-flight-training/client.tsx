"use client";

import { useEffect, useRef, useState } from "react";
import s from "./styles.module.css";

const links = [
  ["Deals", "#deals"],
  ["Cost", "#cost"],
  ["Fleet", "#fleet"],
  ["Simulator", "#simulator"],
  ["Contact", "#contact"],
];

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
        <a href="#top" onClick={close} className={s.brand}>
          <img src="/az-flight-training/logo.png" alt="AZ Flight Training" className={s.logo} />
        </a>
        <nav className={`${s.navLinks} ${open ? s.navOpen : ""}`} aria-label="Primary">
          {links.map(([label, href]) => <a key={href} href={href} onClick={close}>{label}</a>)}
          <a href={tel} className={`${s.btn} ${s.btnLime} ${s.navCta}`}>Call {phone}</a>
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

/* ---------- Private pilot cost estimator (their posted rates) ---------- */

const usd = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const FIXED: [string, number][] = [["Supplies", 200], ["Online ground school", 200], ["Knowledge test", 150], ["Practical test", 750]];

export function CostEstimator() {
  const [flight, setFlight] = useState(40);
  const [dual, setDual] = useState(20);
  const [ground, setGround] = useState(15);
  const lines: [string, string, number][] = [
    ["Flight time · Cessna 172", `${flight} hrs × $135`, flight * 135],
    ["Dual instruction", `${dual} hrs × $65`, dual * 65],
    ["Ground instruction", `${ground} hrs × $65`, ground * 65],
    ...FIXED.map(([k, v]) => [k, "", v] as [string, string, number]),
  ];
  const total = lines.reduce((a, [, , v]) => a + v, 0);
  const slider = (label: string, value: number, set: (n: number) => void, min: number, max: number, hint: string) => (
    <label className={s.slider}>
      <span className={s.sliderTop}><b>{label}</b><em>{value} hrs</em></span>
      <input type="range" min={min} max={max} value={value} onChange={(e) => set(Number(e.target.value))} aria-label={label} />
      <span className={s.sliderHint}>{hint}</span>
    </label>
  );
  return (
    <div className={s.estimator}>
      <div className={s.estControls}>
        {slider("Flight time", flight, setFlight, 40, 80, "FAA minimum is 40. The average student needs 50 or more.")}
        {slider("Dual instruction", dual, setDual, 20, 40, "At least 20 hours with an instructor.")}
        {slider("Ground instruction", ground, setGround, 0, 40, "Study on your own and save, or add more one-on-one ground school.")}
      </div>
      <div className={s.receipt}>
        <p className={s.receiptHead}>Private pilot · estimate</p>
        <ul>
          {lines.map(([k, d, v]) => (
            <li key={k}><span>{k}{d && <small>{d}</small>}</span><b>{usd(v)}</b></li>
          ))}
        </ul>
        <div className={s.receiptTotal}><span>Estimated total</span><strong>{usd(total)}</strong></div>
        <p className={s.receiptFine}>Built from posted rates. Not including tax. All prices subject to change.</p>
      </div>
    </div>
  );
}

/* ---------- Certificate requirements ---------- */

const REQS: Record<string, { lede: string; items: string[] }> = {
  "Private Pilot": {
    lede: "Your license to fly. 17 years minimum age.",
    items: ["40 hours total flight time", "20 hours dual instruction", "3 hours cross-country flight training", "3 hours instrument training", "10 hours solo flight time", "One 150-mile cross-country solo"],
  },
  "Instrument": {
    lede: "Fly by reference to instruments. Train in the Cessna 150 or the 172SP TAA.",
    items: ["40 hours actual or simulated instrument time", "15 hours dual instruction", "50 hours cross-country flight", "250-mile cross-country with 3 different types of approaches", "20 hours of simulator time can count toward simulated instrument time"],
  },
  "Commercial": {
    lede: "Fly for hire. Builds on your private and instrument.",
    items: ["250 hours total flight time", "100 hours pilot in command", "50 hours cross-country", "10 hours in a complex or TAA airplane", "Day and night 2-hour, 100-mile cross-countries", "One 250-mile straight-line cross-country"],
  },
};

export function Requirements() {
  const [tab, setTab] = useState("Private Pilot");
  const r = REQS[tab];
  return (
    <div className={s.reqs}>
      <div className={s.reqTabs} role="tablist" aria-label="Certificate">
        {Object.keys(REQS).map((k) => (
          <button key={k} role="tab" aria-selected={tab === k} className={`${s.reqTab} ${tab === k ? s.reqTabOn : ""}`} onClick={() => setTab(k)}>{k}</button>
        ))}
      </div>
      <p className={s.reqLede}>{r.lede}</p>
      <ol className={s.reqList}>
        {r.items.map((x, i) => <li key={x}><span>{String(i + 1).padStart(2, "0")}</span>{x}</li>)}
      </ol>
    </div>
  );
}

/* ---------- Inquiry (opens the visitor's email app) ---------- */

const interests = ["Discovery flight", "Private pilot", "Instrument", "Commercial", "Simulator / VR", "Flight review", "Rental checkout"];
const offices = ["Avondale", "Scottsdale"];

export function Inquiry({ email }: { email: string }) {
  const [interest, setInterest] = useState(interests[0]);
  const [office, setOffice] = useState(offices[0]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [`Name: ${name}`, phone ? `Phone: ${phone}` : "", `Interested in: ${interest}`, `Preferred office: ${office}`, msg ? `\n${msg}` : ""].filter(Boolean).join("\n");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(`${interest} inquiry`)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <form className={s.form} onSubmit={send}>
      <p className={s.formTitle}>Call today, fly tomorrow.</p>
      <p className={s.formLabel}>I&apos;m interested in</p>
      <div className={s.chips} role="radiogroup" aria-label="Interested in">
        {interests.map((t) => (
          <button type="button" key={t} role="radio" aria-checked={interest === t} className={`${s.chip} ${interest === t ? s.chipOn : ""}`} onClick={() => setInterest(t)}>{t}</button>
        ))}
      </div>
      <p className={s.formLabel}>Closest office</p>
      <div className={s.chips} role="radiogroup" aria-label="Closest office">
        {offices.map((t) => (
          <button type="button" key={t} role="radio" aria-checked={office === t} className={`${s.chip} ${office === t ? s.chipOn : ""}`} onClick={() => setOffice(t)}>{t}</button>
        ))}
      </div>
      <div className={s.fields}>
        <label><span>Name</span><input required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" /></label>
        <label><span>Phone</span><input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" autoComplete="tel" /></label>
        <label className={s.full}><span>Message</span><textarea rows={3} value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Tell us about your flying goals" /></label>
      </div>
      <button type="submit" className={`${s.btn} ${s.btnLime} ${s.formBtn}`}>Send Inquiry</button>
    </form>
  );
}
