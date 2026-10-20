"use client";

import { useEffect, useRef, useState } from "react";
import s from "./styles.module.css";

const links = [
  ["Training", "#training"],
  ["Fleet", "#fleet"],
  ["Our Story", "#story"],
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
          <img src="/dakota-flight/logo.png" alt="Dakota Flight Center" className={s.logo} />
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

const trainingTypes = ["Discovery Flight", "Private Pilot", "Instrument Rating", "Commercial", "Multi-Engine", "Tailwheel", "Instructor Ratings", "Aircraft Rental"];

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
      <p className={s.formTitle}>Begin your aviation future</p>
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

type Line = [string, string, string];
const budgets: Record<string, { total: string; note: string; lines: Line[] }> = {
  "Private Pilot": {
    total: "$10,000–12,000",
    note: "The FAA requires 40 hours; most students fly 60–65 hours before the check ride.",
    lines: [
      ["FAA medical exam", "1", "$75–100"],
      ["Ground / flight instruction", "40 hrs", "$2,600"],
      ["Airplane rental (Piper Warrior)", "40–60 hrs", "$5,000–7,500"],
      ["FAA knowledge test", "", "$160"],
      ["FAA practical test (check ride)", "", "$500"],
      ["Books, headset, logbook, supplies", "", "$500–1,000"],
    ],
  },
  "Instrument Rating": {
    total: "$8,000–10,000",
    note: "Includes at least 40 hours of actual or simulated instrument time, 15 with an authorized CFI.",
    lines: [
      ["Ground / flight instruction", "55–65 hrs", "$2,750–3,250"],
      ["Airplane rental", "35–45 hrs", "$4,400–6,000"],
      ["FAA knowledge test", "1", "$160"],
      ["FAA practical test (check ride)", "", "$500"],
      ["Books and supplies", "", "$200"],
    ],
  },
};

export function Budget() {
  const [tab, setTab] = useState("Private Pilot");
  const b = budgets[tab];
  return (
    <div className={s.budget}>
      <div className={s.budgetTabs} role="tablist" aria-label="Training budget">
        {Object.keys(budgets).map((k) => (
          <button key={k} role="tab" aria-selected={tab === k} className={`${s.budgetTab} ${tab === k ? s.budgetTabOn : ""}`} onClick={() => setTab(k)}>{k}</button>
        ))}
      </div>
      <div className={s.budgetTotal}><span>Typical total budget</span><strong>{b.total}</strong></div>
      <p className={s.budgetNote}>{b.note}</p>
      <table className={s.budgetTable}>
        <tbody>
          {b.lines.map(([item, qty, cost]) => (
            <tr key={item}><td>{item}</td><td>{qty}</td><td>{cost}</td></tr>
          ))}
        </tbody>
      </table>
      <p className={s.budgetFine}>All costs subject to change.</p>
    </div>
  );
}
