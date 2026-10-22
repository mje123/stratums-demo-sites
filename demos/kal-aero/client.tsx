"use client";

import { useEffect, useRef, useState } from "react";
import { Propeller } from "./logo";
import s from "./styles.module.css";

const links = [
  ["Intro Flight", "#intro"],
  ["Rates", "#rates"],
  ["Training", "#training"],
  ["Visit", "#visit"],
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
          <Propeller className={s.brandProp} />
          <span><strong>Kal-Aero</strong><small>Flight Instruction</small></span>
        </a>
        <nav className={`${s.navLinks} ${open ? s.navOpen : ""}`} aria-label="Primary">
          {links.map(([label, href]) => <a key={href} href={href} onClick={close}>{label}</a>)}
          <a href={tel} className={`${s.btn} ${s.btnBeacon} ${s.navCta}`}>Call {phone}</a>
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

/** Plan your own hours with Kal-Aero's published rates. A planning tool, not a quote. */
export function Planner({ plane, cfi }: { plane: number; cfi: number }) {
  const [dual, setDual] = useState(20);
  const [solo, setSolo] = useState(10);
  const [ground, setGround] = useState(10);
  const money = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  const aircraft = (dual + solo) * plane;
  const instruction = (dual + ground) * cfi;
  const rows: [string, number, (n: number) => void, number][] = [
    ["Dual flight hours (you + instructor)", dual, setDual, 80],
    ["Solo flight hours", solo, setSolo, 40],
    ["Ground instruction hours", ground, setGround, 40],
  ];
  return (
    <div className={s.planner}>
      <div className={s.plannerHead}>
        <p>Plan your hours</p>
        <span>Your numbers × our rates</span>
      </div>
      {rows.map(([label, v, set, max]) => (
        <label key={label} className={s.slider}>
          <span className={s.sliderTop}><span>{label}</span><b>{v} hrs</b></span>
          <input type="range" min={0} max={max} value={v} onChange={(e) => set(Number(e.target.value))} aria-label={label} />
        </label>
      ))}
      <div className={s.sum}>
        <div><span>Aircraft · {dual + solo} hrs × {money(plane)}</span><b>{money(aircraft)}</b></div>
        <div><span>Instruction · {dual + ground} hrs × {money(cfi)}</span><b>{money(instruction)}</b></div>
        <div className={s.sumTotal}><span>Estimated flying &amp; instruction</span><b>{money(aircraft + instruction)}</b></div>
      </div>
      <p className={s.fine}>Planning tool only, not a quote. Excludes exams, medical, books and supplies. Ask for Kal-Aero&apos;s cost breakdown for your goal.</p>
    </div>
  );
}

const interests = ["Introductory Flight", "Private Pilot", "Instrument Rating", "Commercial Pilot", "Certified Flight Instructor"];

export function Inquiry({ email }: { email: string }) {
  const [interest, setInterest] = useState(interests[0]);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [from, setFrom] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [`Name: ${first} ${last}`.trim(), from ? `Email: ${from}` : "", phone ? `Phone: ${phone}` : "", `Interested in: ${interest}`, msg ? `\n${msg}` : ""].filter(Boolean).join("\n");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(`${interest} inquiry`)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <form className={s.form} onSubmit={send}>
      <p className={s.formTitle}>What are you interested in learning about?</p>
      <div className={s.chips} role="radiogroup" aria-label="Interest">
        {interests.map((t) => (
          <button type="button" key={t} role="radio" aria-checked={interest === t} className={`${s.chip} ${interest === t ? s.chipOn : ""}`} onClick={() => setInterest(t)}>{t}</button>
        ))}
      </div>
      <div className={s.fields}>
        <label><span>First name</span><input required value={first} onChange={(e) => setFirst(e.target.value)} autoComplete="given-name" /></label>
        <label><span>Last name</span><input value={last} onChange={(e) => setLast(e.target.value)} autoComplete="family-name" /></label>
        <label><span>Email</span><input type="email" value={from} onChange={(e) => setFrom(e.target.value)} autoComplete="email" /></label>
        <label><span>Phone</span><input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" /></label>
        <label className={s.full}><span>Message</span><textarea rows={3} value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Your goals, experience, best times to fly…" /></label>
      </div>
      <button type="submit" className={`${s.btn} ${s.btnBeacon} ${s.formBtn}`}>Send to Kal-Aero</button>
    </form>
  );
}
