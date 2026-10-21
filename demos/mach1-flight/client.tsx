"use client";

import { useEffect, useRef, useState } from "react";
import s from "./styles.module.css";

const links = [
  ["Training", "#training"],
  ["Aircraft", "#aircraft"],
  ["Rates", "#rates"],
  ["Team", "#team"],
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
          <img src="/mach1-flight/logo.png" alt="Mach 1 Flight Training" className={s.logo} />
        </a>
        <nav className={`${s.navLinks} ${open ? s.navOpen : ""}`} aria-label="Primary">
          {links.map(([label, href]) => <a key={href} href={href} onClick={close}>{label}</a>)}
          <a href={tel} className={`${s.btn} ${s.btnPrimary} ${s.navCta}`}>Call {phone}</a>
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

const trainingTypes = ["Discovery Flight", "Private Pilot", "Sport Pilot", "Instrument Rating", "Commercial Pilot", "IPC", "Flight Review", "Visit"];

export function Inquiry({ email }: { email: string }) {
  const [type, setType] = useState(trainingTypes[0]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [`Name: ${name}`, phone ? `Phone: ${phone}` : "", `Interested in: ${type}`, msg ? `\n${msg}` : ""].filter(Boolean).join("\n");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(`${type} inquiry`)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <form className={s.form} onSubmit={send}>
      <p className={s.formTitle}>Request your flight plan</p>
      <div className={s.typeGrid} role="radiogroup" aria-label="Training type">
        {trainingTypes.map((t) => (
          <button type="button" key={t} role="radio" aria-checked={type === t} className={`${s.type} ${type === t ? s.typeOn : ""}`} onClick={() => setType(t)}>{t}</button>
        ))}
      </div>
      <div className={s.fields}>
        <label><span>Name</span><input required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" /></label>
        <label><span>Phone</span><input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" autoComplete="tel" /></label>
        <label className={s.full}><span>Message</span><textarea rows={3} value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Tell us about your flying goals" /></label>
      </div>
      <button type="submit" className={`${s.btn} ${s.btnPrimary} ${s.formBtn}`}>Send Inquiry</button>
    </form>
  );
}

const AIRCRAFT = 178;
const INSTRUCTOR = 68;
const usd = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

/** Estimator built only from the posted hourly rates; it isn't a quote. */
export function Estimator() {
  const [dual, setDual] = useState(25);
  const [solo, setSolo] = useState(15);
  const dualCost = dual * (AIRCRAFT + INSTRUCTOR);
  const soloCost = solo * AIRCRAFT;
  return (
    <div className={s.estimator}>
      <div className={s.estHead}>
        <span>Flight-time estimator</span>
        <span className={s.estTag}>Posted rates</span>
      </div>
      <label className={s.slider}>
        <span><b>{dual}</b> hrs with an instructor <small>{usd(AIRCRAFT + INSTRUCTOR)}/hr</small></span>
        <input type="range" min={0} max={80} value={dual} onChange={(e) => setDual(Number(e.target.value))} aria-label="Hours with an instructor" />
      </label>
      <label className={s.slider}>
        <span><b>{solo}</b> solo hrs <small>{usd(AIRCRAFT)}/hr</small></span>
        <input type="range" min={0} max={60} value={solo} onChange={(e) => setSolo(Number(e.target.value))} aria-label="Solo hours" />
      </label>
      <div className={s.estRows}>
        <div><span>Dual: aircraft + instructor</span><b>{usd(dualCost)}</b></div>
        <div><span>Solo: aircraft</span><b>{usd(soloCost)}</b></div>
      </div>
      <div className={s.estTotal}><span>Flight time total</span><strong>{usd(dualCost + soloCost)}</strong></div>
      <p className={s.estFine}>Based on $178/hr wet aircraft rental and $68/hr instruction, with no fuel surcharge. Excludes ground instruction, exams, materials and medical. Not a quote.</p>
    </div>
  );
}
