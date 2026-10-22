"use client";

import { useEffect, useRef, useState } from "react";
import s from "./styles.module.css";

const links = [
  ["Discovery Flight", "#discovery"],
  ["Rates", "#rates"],
  ["Training", "#training"],
  ["Instructors", "#instructors"],
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
          <img src="/mississippi-aviation/logo.png" alt="Mississippi Aviation Academy" className={s.logo} />
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

const trainingTypes = ["Discovery Flight", "Private Pilot", "Instrument", "Commercial", "CFI / CFII", "International Student", "Aircraft Rental", "Maintenance"];

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
      <p className={s.formTitle}>Talk with an instructor</p>
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

const rates: Record<"Hourly" | "Block", { note: string; rows: [string, string, string][] }> = {
  Hourly: {
    note: "Rental rate per hour. Instructor fees, fuel and maintenance are additional.",
    rows: [["Cessna 150", "$150", "Primary trainer"], ["Cessna 172", "$190", ""], ["The Champ", "$190", ""]],
  },
  Block: {
    note: "Prepay 10 hours for a discounted rate: effectively one free hour of flight.",
    rows: [["Cessna 150", "$140", "10-hour block"], ["Cessna 172", "$171", "10-hour block"], ["The Champ", "$171", "10-hour block"]],
  },
};

export function RateBoard() {
  const [tab, setTab] = useState<"Hourly" | "Block">("Hourly");
  const b = rates[tab];
  return (
    <div className={s.board}>
      <div className={s.boardTop}>
        <span className={s.boardTitle}>Aircraft rental</span>
        <div className={s.boardTabs} role="tablist" aria-label="Rate type">
          {(["Hourly", "Block"] as const).map((k) => (
            <button key={k} role="tab" aria-selected={tab === k} className={`${s.boardTab} ${tab === k ? s.boardTabOn : ""}`} onClick={() => setTab(k)}>{k}</button>
          ))}
        </div>
      </div>
      <ul className={s.boardRows}>
        {b.rows.map(([name, price, use]) => (
          <li key={name}>
            <span className={s.boardName}>{name}{use && <small>{use}</small>}</span>
            <span className={s.boardPrice}>{price}<small>/hr</small></span>
          </li>
        ))}
      </ul>
      <p className={s.boardNote}>{b.note}</p>
      <p className={s.boardBadge}>10% off for military, law enforcement &amp; first responders</p>
    </div>
  );
}
