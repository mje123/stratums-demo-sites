"use client";

import { useEffect, useRef, useState } from "react";
import s from "./styles.module.css";

const links = [
  ["Get Started", "#start"],
  ["Rates", "#rates"],
  ["Training", "#training"],
  ["Our Story", "#story"],
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
          <span className={s.mark} aria-hidden><b>W</b>NA</span>
          <span className={s.brandText}><strong>West Nyack Aviation</strong><small>Flight training since 1985</small></span>
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

type Base = {
  key: string;
  name: string;
  code: string;
  role: string;
  address: string[];
  aircraft: string | null;
  instruction: string;
  instructors: number;
  note: string;
};

const bases: Base[] = [
  {
    key: "orange",
    name: "Orange County Airport",
    code: "KMGJ",
    role: "Main flight center",
    address: ["Hangar 8, T-2 Unit", "500 Dunn Road, Montgomery, NY 12549"],
    aircraft: "$200",
    instruction: "$60–75",
    instructors: 1,
    note: "Home of the pilot shop and the aircraft lease-back program.",
  },
  {
    key: "easthampton",
    name: "East Hampton Town Airport",
    code: "KJPX",
    role: "Free-lance instruction",
    address: ["Executive Terminal", "50 Industrial Road, Wainscott, NY 11975"],
    aircraft: "$210–220",
    instruction: "$75–95",
    instructors: 4,
    note: "Our X-Plane 12 practice simulator is nearby.",
  },
  {
    key: "brookhaven",
    name: "Brookhaven Airport",
    code: "KHWV",
    role: "Instruction",
    address: ["Shirley, NY"],
    aircraft: null,
    instruction: "$60–75",
    instructors: 1,
    note: "Call for aircraft availability and rates.",
  },
];

export function BaseRates() {
  const [key, setKey] = useState(bases[0].key);
  const b = bases.find((x) => x.key === key)!;
  return (
    <div className={s.board}>
      <div className={s.tabs} role="tablist" aria-label="Choose an airport">
        {bases.map((x) => (
          <button key={x.key} role="tab" aria-selected={x.key === key} className={`${s.tab} ${x.key === key ? s.tabOn : ""}`} onClick={() => setKey(x.key)}>
            {x.name.replace(" Airport", "").replace(" Town", "")}
          </button>
        ))}
      </div>
      <div className={s.boardBody}>
        <div className={s.boardHead}>
          <span className={s.code}>{b.code}</span>
          <div>
            <p className={s.boardRole}>{b.role}</p>
            <h3>{b.name}</h3>
            <p className={s.boardAddr}>{b.address.join(" · ")}</p>
          </div>
        </div>
        <div className={s.rateRow}>
          <div><small>Aircraft rental</small><b>{b.aircraft ?? "Call"}</b>{b.aircraft && <span>per hour</span>}</div>
          <div><small>Instructor</small><b>{b.instruction}</b><span>per hour, by instructor</span></div>
          <div><small>Instructors here</small><b>{b.instructors}</b><span>{b.instructors === 1 ? "instructor" : "instructors"}</span></div>
        </div>
        <p className={s.boardNote}>{b.note}</p>
      </div>
    </div>
  );
}

const goals = ["Intro flight", "Private Pilot", "Instrument", "Commercial", "CFI / CFII", "Flight review / IPC", "Own-aircraft training", "Simulator time"];

export function Inquiry({ email, phone, tel }: { email: string; phone: string; tel: string }) {
  const [goal, setGoal] = useState(goals[0]);
  const [where, setWhere] = useState(bases[0].name);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [`Name: ${name}`, `Interested in: ${goal}`, `Preferred airport: ${where}`, msg ? `\n${msg}` : ""].filter(Boolean).join("\n");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(`${goal} - flight training inquiry`)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <form className={s.form} onSubmit={send}>
      <p className={s.formTitle}>Plan your first flight</p>
      <p className={s.formLabel}>I&apos;m interested in</p>
      <div className={s.chips}>
        {goals.map((g) => (
          <button type="button" key={g} aria-pressed={goal === g} className={`${s.chip} ${goal === g ? s.chipOn : ""}`} onClick={() => setGoal(g)}>{g}</button>
        ))}
      </div>
      <div className={s.fields}>
        <label><span>Name</span><input required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" /></label>
        <label><span>Airport</span>
          <select value={where} onChange={(e) => setWhere(e.target.value)}>
            {bases.map((b) => <option key={b.key}>{b.name}</option>)}
            <option>Not sure yet</option>
          </select>
        </label>
        <label className={s.full}><span>Anything we should know?</span><textarea rows={3} value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Your schedule, experience, goals" /></label>
      </div>
      <button type="submit" className={`${s.btn} ${s.btnPrimary} ${s.formBtn}`}>Send by Email</button>
      <p className={s.formAlt}>Prefer to talk? <a href={tel}>Call {phone}</a> to schedule.</p>
    </form>
  );
}
