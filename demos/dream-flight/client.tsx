"use client";

import { useEffect, useRef, useState } from "react";
import s from "./styles.module.css";

const links = [
  ["Discovery Flight", "#discovery"],
  ["Fleet & Rates", "#rates"],
  ["Instructors", "#instructors"],
  ["FAQ", "#faq"],
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
          <svg viewBox="0 0 24 24" className={s.brandStar} aria-hidden><path d="M12 1l2.2 8.8L23 12l-8.8 2.2L12 23l-2.2-8.8L1 12l8.8-2.2z" /></svg>
          <span><em>Dream</em><small>Flight School</small></span>
        </a>
        <nav className={`${s.navLinks} ${open ? s.navOpen : ""}`} aria-label="Primary">
          {links.map(([label, href]) => <a key={href} href={href} onClick={close}>{label}</a>)}
          <a href={tel} className={`${s.btn} ${s.btnGold} ${s.navCta}`}>Call {phone}</a>
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

/* ---------- Rates board: standard vs. $3,000 block (5% off) ---------- */

type RateRow = { tail: string; model: string; rate: number; block: number };

export function RateBoard({ aircraft, instruction }: { aircraft: RateRow[]; instruction: { rate: number; block: number } }) {
  const [block, setBlock] = useState(false);
  const fmt = (n: number) => `$${n.toFixed(n % 1 ? 2 : 0)}`;
  return (
    <div className={s.board}>
      <div className={s.boardTop}>
        <div className={s.toggle} role="group" aria-label="Rate type">
          <button type="button" aria-pressed={!block} className={!block ? s.toggleOn : ""} onClick={() => setBlock(false)}>Hourly</button>
          <button type="button" aria-pressed={block} className={block ? s.toggleOn : ""} onClick={() => setBlock(true)}>$3,000 block · 5% off</button>
        </div>
        <span className={s.boardNote}>{block ? "Prepay a $3,000 block and save 5% on flight time and instruction." : "Pay as you go, per hour."}</span>
      </div>
      <table className={s.rates}>
        <thead>
          <tr><th scope="col">Tail</th><th scope="col">Aircraft</th><th scope="col">Per hour</th></tr>
        </thead>
        <tbody>
          {aircraft.map((a) => (
            <tr key={a.tail}>
              <td className={s.tail}>{a.tail}</td>
              <td>{a.model}</td>
              <td className={s.price}>{fmt(block ? a.block : a.rate)}</td>
            </tr>
          ))}
          <tr className={s.instrRow}>
            <td className={s.tail}>CFI</td>
            <td>All instruction</td>
            <td className={s.price}>{fmt(block ? instruction.block : instruction.rate)}</td>
          </tr>
        </tbody>
      </table>
      <p className={s.fine}>3-hour minimum for reservations of 6 or more hours. Additional 2-hour minimum for each overnight after 48 hours.</p>
    </div>
  );
}

/* ---------- Dual-lesson cost calculator (their published rates, simple arithmetic) ---------- */

export function DualCalculator({ plane, instructor }: { plane: number; instructor: number }) {
  const [hours, setHours] = useState(60);
  const perHour = plane + instructor;
  const standard = hours * perHour;
  const block = standard * 0.95;
  const money = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  return (
    <div className={s.calc}>
      <label className={s.calcLabel} htmlFor="dual-hours">
        Dual flight hours in a Cessna 172N <strong>{hours} hrs</strong>
      </label>
      <input id="dual-hours" type="range" min={10} max={80} step={5} value={hours} onChange={(e) => setHours(Number(e.target.value))} className={s.range} />
      <div className={s.calcScale} aria-hidden><span>10</span><span>40 · FAA minimum</span><span>80</span></div>
      <div className={s.calcOut}>
        <div><span>Hourly rates</span><strong>{money(standard)}</strong></div>
        <div className={s.calcSave}><span>With block rates</span><strong>{money(block)}</strong><em>You save {money(standard - block)}</em></div>
      </div>
      <p className={s.fine}>Aircraft ({money(plane)}/hr) plus instructor ({money(instructor)}/hr) for each dual hour. Doesn&apos;t include solo time, ground lessons, exams or supplies.</p>
    </div>
  );
}

/* ---------- Inquiry form (opens the visitor's email app) ---------- */

const interests = ["Discovery Flight", "Private Pilot", "Instrument", "Commercial", "Aircraft Rental", "Photo Flight", "Gift Certificate"];

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
      <p className={s.formTitle}>I&apos;m dreaming of…</p>
      <div className={s.chips} role="radiogroup" aria-label="Interest">
        {interests.map((t) => (
          <button type="button" key={t} role="radio" aria-checked={interest === t} className={`${s.chip} ${interest === t ? s.chipOn : ""}`} onClick={() => setInterest(t)}>{t}</button>
        ))}
      </div>
      <div className={s.fields}>
        <label><span>Name</span><input required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" /></label>
        <label><span>Phone</span><input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" autoComplete="tel" /></label>
        <label className={s.full}><span>Message</span><textarea rows={3} value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Best days and times, questions, a gift recipient…" /></label>
      </div>
      <button type="submit" className={`${s.btn} ${s.btnGold} ${s.formBtn}`}>Send to Dream Flight School</button>
    </form>
  );
}
