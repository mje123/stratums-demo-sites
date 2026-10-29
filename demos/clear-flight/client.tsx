"use client";

import { useEffect, useRef, useState } from "react";
import s from "./styles.module.css";

const links = [
  ["Training", "#training"],
  ["Costs", "#costs"],
  ["Mission", "#mission"],
  ["Instructor", "#instructor"],
  ["Contact", "#contact"],
];

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className={`${s.wordmark} ${light ? s.wordmarkLight : ""}`}>
      <svg viewBox="0 0 24 24" className={s.wordmarkPlane} aria-hidden>
        <path d="M12 2c.8 0 1.4.7 1.4 1.6V9l7.6 4.4v2l-7.6-2.2v4.6l2.2 1.6V21L12 20l-3.6 1v-1.6l2.2-1.6v-4.6L3 15.4v-2L10.6 9V3.6C10.6 2.7 11.2 2 12 2z" />
      </svg>
      <span className={s.wordmarkText}>
        <strong>Clearflight</strong>
        <small>Aviation</small>
      </span>
    </span>
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
        <a href="#top" onClick={close} className={s.brand} aria-label="Clearflight Aviation, home">
          <Wordmark />
        </a>
        <nav className={`${s.navLinks} ${open ? s.navOpen : ""}`} aria-label="Primary">
          {links.map(([label, href]) => <a key={href} href={href} onClick={close}>{label}</a>)}
          <a href={tel} className={`${s.btn} ${s.btnCoral} ${s.navCta}`}>Call {phone}</a>
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

/* ---------- Cost board (their published rates, by program) ---------- */

type Line = [string, string, string?];
const boards: Record<string, { lede: string; headline?: [string, string]; lines: Line[]; note: string }> = {
  "Private Pilot": {
    lede: "Train per hour or pay in bulk. Extra instruction, if you need it, is billed by the hour.",
    headline: ["$10,000*", "approximate cost of a Private ASEL"],
    lines: [
      ["Dual flight instruction", "our planes", "$250/hr"],
      ["Dual flight instruction", "your plane", "$75/hr"],
      ["Solo requirements", "25 hours", "$175/hr"],
      ["Supervised solo", "", "$50/hr"],
      ["Ground instruction", "", "$45/hr"],
      ["Check ride setup & supervision", "", "$150"],
      ["DPE practical & oral exam", "approximate", "$1,300"],
      ["FAA private knowledge test", "", "$125"],
    ],
    note: "*Based on 40 hours, the FAA minimum.",
  },
  "CFI": {
    lede: "Become a certified flight instructor: one of the best ways to build hours as a commercial pilot.",
    lines: [
      ["Flight instruction", "about 10 hours", "$1,950–2,340"],
      ["Ground instruction", "3–5 hours", "$145–225"],
    ],
    note: "Exam fees aren't included; they're set by outside examiners.",
  },
  "Recurrent": {
    lede: "Out of aviation for a while? A focused refresher to get you back up and flying.",
    lines: [
      ["Dual flight instruction", "about 3–5 hours", "$195/hr"],
      ["Ground instruction", "1–2 hours, as needed", "$45/hr"],
    ],
    note: "Approximate hours; ground instruction only as needed.",
  },
};

export function CostBoard() {
  const [tab, setTab] = useState("Private Pilot");
  const b = boards[tab];
  return (
    <div className={s.board}>
      <div className={s.tabs} role="tablist" aria-label="Program">
        {Object.keys(boards).map((k) => (
          <button key={k} role="tab" aria-selected={tab === k} className={`${s.tab} ${tab === k ? s.tabOn : ""}`} onClick={() => setTab(k)}>{k}</button>
        ))}
      </div>
      <p className={s.boardLede}>{b.lede}</p>
      {b.headline && (
        <div className={s.boardHeadline}><strong>{b.headline[0]}</strong><span>{b.headline[1]}</span></div>
      )}
      <ul className={s.lines}>
        {b.lines.map(([item, qty, price]) => (
          <li key={item + qty}>
            <span className={s.lineItem}>{item}{qty && <small>{qty}</small>}</span>
            <i aria-hidden />
            <b>{price}</b>
          </li>
        ))}
      </ul>
      <p className={s.boardNote}>{b.note}</p>
    </div>
  );
}

/* ---------- Recurrent training: a tickable "preflight checklist" of their topics ---------- */

const topics = ["FARs", "Airspace", "Radio communications", "Fitness to fly", "Decision making", "Basic stick and rudder skills"];

export function Checklist() {
  const [done, setDone] = useState<Set<number>>(new Set());
  const toggle = (i: number) => setDone((d) => { const n = new Set(d); if (n.has(i)) n.delete(i); else n.add(i); return n; });
  return (
    <div className={s.checklist}>
      <div className={s.checklistHead}>
        <span>Recurrent training</span>
        <b>{done.size}/{topics.length}</b>
      </div>
      <ul>
        {topics.map((t, i) => (
          <li key={t}>
            <button type="button" role="checkbox" aria-checked={done.has(i)} onClick={() => toggle(i)} className={done.has(i) ? s.checkOn : ""}>
              <span className={s.box} aria-hidden />
              {t}
            </button>
          </li>
        ))}
      </ul>
      <p className={s.checklistFoot}>{done.size === topics.length ? "Checklist complete. Ready to fly again." : "Tap each item: here's what we'll cover together."}</p>
    </div>
  );
}

/* ---------- Inquiry form (opens the visitor's email app) ---------- */

const interests = ["Introductory flight", "Private pilot", "CFI training", "Recurrent training", "Training in my plane"];

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
      <p className={s.formTitle}>What would you like to do?</p>
      <div className={s.chips} role="radiogroup" aria-label="Interest">
        {interests.map((t) => (
          <button type="button" key={t} role="radio" aria-checked={interest === t} className={`${s.chip} ${interest === t ? s.chipOn : ""}`} onClick={() => setInterest(t)}>{t}</button>
        ))}
      </div>
      <div className={s.fields}>
        <label><span>Name</span><input required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" /></label>
        <label><span>Phone</span><input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" autoComplete="tel" /></label>
        <label className={s.full}><span>Message</span><textarea rows={3} value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Your goals, your schedule, any flying you've done" /></label>
      </div>
      <button type="submit" className={`${s.btn} ${s.btnCoral} ${s.formBtn}`}>Send to Clearflight</button>
    </form>
  );
}
