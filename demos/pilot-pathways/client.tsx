"use client";

import { useEffect, useRef, useState } from "react";
import s from "./styles.module.css";

const links = [
  ["Learn to Fly", "#learn"],
  ["Level Up", "#level-up"],
  ["Gear", "#gear"],
  ["Reviews & Tutoring", "#more"],
  ["Contact", "#contact"],
];

export function Nav({ email }: { email: string }) {
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
        <a href="#top" onClick={close} className={s.brand} aria-label="Pilot Pathways home">
          <svg viewBox="0 0 40 40" className={s.mark} aria-hidden>
            <circle cx="20" cy="20" r="18.5" className={s.markRing} />
            <path d="M8 29c6-1 7-7 12-9s9-3 12-11" className={s.markPath} />
            <circle cx="8" cy="29" r="2.4" className={s.markDot} />
            <path d="M32 9l-5.2 1.2 2.1 1.6-.4 2.6z" className={s.markPlane} />
          </svg>
          <span><strong>Pilot Pathways</strong><small>Flight Instruction · Upstate SC</small></span>
        </a>
        <nav className={`${s.navLinks} ${open ? s.navOpen : ""}`} aria-label="Primary">
          {links.map(([label, href]) => <a key={href} href={href} onClick={close}>{label}</a>)}
          <a href={`mailto:${email}?subject=${encodeURIComponent("Getting started with Pilot Pathways")}`} className={`${s.btn} ${s.btnSun} ${s.navCta}`}>Start Your Pathway</a>
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

/* ---------- Level-up board (prices from their "Level up my Certificate" page) ---------- */

type Item = { name: string; price: string; note: string };
const boards: Record<string, { intro: string; items: Item[] }> = {
  Instrument: {
    intro: "Start any time, though they recommend finishing your Private Pilot checkride first. Already a commercial pilot? They can help you finish the rating too.",
    items: [
      { name: "Time building: simulated instrument", price: "$170/hr", note: "Block time in 10-hour increments. Applies when flying with a safety pilot, without an instructor." },
      { name: "Instrument training & checkride prep", price: "$3,300–3,600", note: "Assuming no previous training: a minimum of 15 hours, depending on your needs." },
      { name: "Ground checkride prep & endorsements", price: "$150", note: "The ground and endorsement review needed to apply for the rating." },
    ],
  },
  Commercial: {
    intro: "You'll need your Private Pilot certificate first, and 250 flight hours meeting 14 CFR 61.121–133 to apply.",
    items: [
      { name: "Time building", price: "$170/hr", note: "Block time purchased in 10-hour increments." },
      { name: "Flight checkride prep", price: "$220–240/hr", note: "Anywhere from 3 to 20 hours, depending on your situation and needs." },
    ],
  },
  Instructor: {
    intro: "Ready to teach? Get help preparing for the instructor checkride, then add the instrument rating to your instructor certificate.",
    items: [
      { name: "CFI: Certificated Flight Instructor", price: "Prep", note: "Help preparing for your Flight Instructor checkride." },
      { name: "CFII: Instrument rating on your CFI", price: "Prep", note: "Help adding your Instrument rating to your Flight Instructor certificate." },
    ],
  },
  Endorsements: {
    intro: "Instruction available in client aircraft for these endorsements. Multi-engine and seaplane ratings aren't equipped yet, but they're open to aircraft owner partnerships.",
    items: [
      { name: "High performance · Complex · Tailwheel · High altitude", price: "Your aircraft", note: "Not equipped in-house at this time, but available to instruct in client aircraft." },
      { name: "Added category: Airplane", price: "Available", note: "They can facilitate your added category for Airplane." },
      { name: "Multi-engine land · Single- & multi-engine sea", price: "Partners", note: "Not equipped at this time, but open to aircraft owner partnerships." },
    ],
  },
};

export function LevelUp() {
  const [tab, setTab] = useState<keyof typeof boards>("Instrument");
  const b = boards[tab];
  return (
    <div className={s.board}>
      <div className={s.tabs} role="tablist" aria-label="Certificate or rating">
        {Object.keys(boards).map((k) => (
          <button key={k} role="tab" aria-selected={tab === k} className={`${s.tab} ${tab === k ? s.tabOn : ""}`} onClick={() => setTab(k)}>{k}</button>
        ))}
      </div>
      <p className={s.boardIntro}>{b.intro}</p>
      <ul className={s.boardList}>
        {b.items.map((it) => (
          <li key={it.name}>
            <div><strong>{it.name}</strong><span>{it.note}</span></div>
            <b>{it.price}</b>
          </li>
        ))}
      </ul>
      <p className={s.boardFine}>All costs are estimates; your situation and experience may vary.</p>
    </div>
  );
}

/* ---------- Inquiry (opens the visitor's email app) ---------- */

const paths = ["Learn to fly", "Discovery flight", "Instrument", "Commercial", "CFI / CFII", "Flight review", "Tutoring", "Equipment package", "STEM event"];

export function Inquiry({ email }: { email: string }) {
  const [path, setPath] = useState(paths[0]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [`Name: ${name}`, phone ? `Phone: ${phone}` : "", `Pathway: ${path}`, msg ? `\n${msg}` : ""].filter(Boolean).join("\n");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(`${path}: Pilot Pathways inquiry`)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <form className={s.form} onSubmit={send}>
      <p className={s.formTitle}>Where does your pathway start?</p>
      <div className={s.chips} role="radiogroup" aria-label="Pathway">
        {paths.map((p) => (
          <button type="button" key={p} role="radio" aria-checked={path === p} className={`${s.chip} ${path === p ? s.chipOn : ""}`} onClick={() => setPath(p)}>{p}</button>
        ))}
      </div>
      <div className={s.fields}>
        <label><span>Name</span><input required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" /></label>
        <label><span>Phone</span><input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" autoComplete="tel" /></label>
        <label className={s.full}><span>Your goals</span><textarea rows={3} value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Experience so far, schedule, what you want to fly…" /></label>
      </div>
      <button type="submit" className={`${s.btn} ${s.btnSun} ${s.formBtn}`}>Send to Pilot Pathways</button>
    </form>
  );
}
