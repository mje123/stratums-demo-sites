"use client";

import { useEffect, useRef, useState } from "react";
import s from "./styles.module.css";

const links = [
  ["Training", "#training"],
  ["Aircraft", "#aircraft"],
  ["Rates", "#rates"],
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
          <img src="/glacier-peak/logo.png" alt="Glacier Peak Aviators" className={s.brandLogo} />
        </a>
        <nav className={`${s.navLinks} ${open ? s.navOpen : ""}`} aria-label="Primary">
          {links.map(([label, href]) => <a key={href} href={href} onClick={close}>{label}</a>)}
          <a href={tel} className={`${s.btn} ${s.btnCopper} ${s.navCta}`}>Call {phone}</a>
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

/* ---------- Training: one tab per certificate, requirements from their pages ---------- */

type Program = { key: string; name: string; stat: string; statLabel: string; blurb: string; eligibility: string[]; training: string[] };

export function Programs({ programs }: { programs: Program[] }) {
  const [active, setActive] = useState(programs[0].key);
  const p = programs.find((x) => x.key === active) ?? programs[0];
  return (
    <div className={s.programs}>
      <div className={s.trail} role="tablist" aria-label="Certificates and ratings">
        {programs.map((x, i) => (
          <button
            key={x.key}
            role="tab"
            aria-selected={x.key === active}
            className={`${s.trailStop} ${x.key === active ? s.trailOn : ""}`}
            onClick={() => setActive(x.key)}
          >
            <span className={s.trailNum}>{String(i + 1).padStart(2, "0")}</span>
            <span className={s.trailName}>{x.name}</span>
          </button>
        ))}
      </div>
      <div className={s.programCard} role="tabpanel" key={p.key}>
        <div className={s.programHead}>
          <div>
            <h3>{p.name}</h3>
            <p>{p.blurb}</p>
          </div>
          <div className={s.programStat}><strong>{p.stat}</strong><span>{p.statLabel}</span></div>
        </div>
        <div className={s.programCols}>
          <div>
            <p className={s.colTitle}>Eligibility</p>
            <ul>{p.eligibility.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
          <div>
            <p className={s.colTitle}>Training &amp; experience</p>
            <ul>{p.training.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Lesson calculator built only from their posted rates ---------- */

export function LessonCalc({ aircraft, instruction }: { aircraft: number; instruction: number }) {
  const [flight, setFlight] = useState(1.2);
  const [ground, setGround] = useState(0.5);
  const total = flight * aircraft + flight * instruction + ground * instruction;
  const fmt = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  return (
    <div className={s.calc}>
      <p className={s.calcTitle}>Plan a lesson</p>
      <label className={s.slider}>
        <span>Flight time <b>{flight.toFixed(1)} hrs</b></span>
        <input type="range" min={0.5} max={3} step={0.1} value={flight} onChange={(e) => setFlight(Number(e.target.value))} />
      </label>
      <label className={s.slider}>
        <span>Ground instruction <b>{ground.toFixed(1)} hrs</b></span>
        <input type="range" min={0} max={2} step={0.1} value={ground} onChange={(e) => setGround(Number(e.target.value))} />
      </label>
      <div className={s.calcRows}>
        <div><span>Cessna 172, fuel included</span><b>{fmt(flight * aircraft)}</b></div>
        <div><span>Flight instruction</span><b>{fmt(flight * instruction)}</b></div>
        <div><span>Ground instruction</span><b>{fmt(ground * instruction)}</b></div>
      </div>
      <div className={s.calcTotal}><span>Estimated lesson</span><strong>{fmt(total)}</strong></div>
      <p className={s.calcNote}>An estimate from posted hourly rates, not a quote.</p>
    </div>
  );
}

/* ---------- Inquiry form (opens the visitor's email app) ---------- */

const interests = ["Discovery flight", "Private pilot", "Instrument rating", "Commercial pilot", "Flight instructor (CFI)", "Instrument instructor (CFII)", "Flight review / currency", "Rusty pilot"];

export function Inquiry({ email }: { email: string }) {
  const [interest, setInterest] = useState(interests[0]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [`Name: ${name}`, phone ? `Phone: ${phone}` : "", `Interested in: ${interest}`, msg ? `\n${msg}` : ""].filter(Boolean).join("\n");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(`${interest} inquiry`)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <form className={s.form} onSubmit={send}>
      <p className={s.formTitle}>Tell us where you want to go</p>
      <div className={s.chips} role="radiogroup" aria-label="Interested in">
        {interests.map((t) => (
          <button type="button" key={t} role="radio" aria-checked={interest === t} className={`${s.chip} ${interest === t ? s.chipOn : ""}`} onClick={() => setInterest(t)}>{t}</button>
        ))}
      </div>
      <div className={s.fields}>
        <label><span>Name</span><input required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" /></label>
        <label><span>Phone</span><input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" autoComplete="tel" /></label>
        <label className={s.full}><span>Message</span><textarea rows={3} value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Your goals, experience so far, and when you'd like to fly" /></label>
      </div>
      <button type="submit" className={`${s.btn} ${s.btnCopper} ${s.formBtn}`}>Send to Glacier Peak Aviators</button>
    </form>
  );
}
