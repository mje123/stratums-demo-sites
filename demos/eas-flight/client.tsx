"use client";

import { useEffect, useRef, useState } from "react";
import s from "./styles.module.css";

const links = [
  ["Locations", "#locations"],
  ["Training", "#training"],
  ["Fleet", "#fleet"],
  ["Crew", "#crew"],
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
        <a href="#top" onClick={close} className={s.brand} aria-label="EAS Flight Training, home">
          <img src="/eas-flight/logo-wings-white.png" alt="" className={s.brandWings} />
          <img src="/eas-flight/logo-type-white.png" alt="EAS Flight Training" className={s.brandType} />
        </a>
        <nav className={`${s.navLinks} ${open ? s.navOpen : ""}`} aria-label="Primary">
          {links.map(([label, href]) => <a key={href} href={href} onClick={close}>{label}</a>)}
          <a href={tel} className={`${s.btn} ${s.btnAmber} ${s.navCta}`}>Call {phone}</a>
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

/* ---------- Program cost board (their published estimates) ---------- */

type Line = [string, string];
type Program = { key: string; label: string; total: string; needs: string; lines: Line[]; note?: string };

const programs: Program[] = [
  {
    key: "ppl",
    label: "Private Pilot",
    total: "$15,000",
    needs: "17 by check-ride day. There is no maximum age.",
    lines: [
      ["FAA physical exam (3rd class)", "$175"],
      ["50 hrs Cessna 172", "$9,950"],
      ["40 hrs primary instruction (in aircraft)", "$2,600"],
      ["15 hrs ground instruction / classroom", "$975"],
      ["Textbooks & study material", "$275"],
      ["FAA written exam", "$175"],
      ["FAA oral / practical test (check ride)", "$850"],
    ],
    note: "Based on national average times.",
  },
  {
    key: "ir",
    label: "Instrument",
    total: "$13,725",
    needs: "Private pilot certificate. Estimate assumes 50 hrs cross-country PIC.",
    lines: [
      ["45 hrs aircraft", "$8,955"],
      ["30 hrs advanced instruction (in aircraft)", "$2,250"],
      ["20 hrs ground instruction / classroom", "$1,300"],
      ["Textbooks & study material", "$195"],
      ["FAA written exam", "$175"],
      ["FAA oral / practical test (check ride)", "$850"],
    ],
  },
  {
    key: "cpl",
    label: "Commercial",
    total: "$10,365",
    needs: "Private + instrument, 220 hrs, and 18 by check-ride day. Assumes 220 hrs total, 10 hrs complex.",
    lines: [
      ["30 hrs aircraft", "$5,970"],
      ["25 hrs advanced instruction (in aircraft)", "$1,875"],
      ["20 hrs ground instruction / classroom", "$1,300"],
      ["Textbooks & study material", "$195"],
      ["FAA written exam", "$175"],
      ["FAA oral / practical test (check ride)", "$850"],
    ],
  },
  {
    key: "me",
    label: "Multi-Engine",
    total: "$5,795",
    needs: "Add-on to private, instrument or commercial. 15 hrs complex time to enroll at these rates.",
    lines: [
      ["8–10 hrs advanced instruction, PA-30 Twin Comanche", "$4,995"],
      ["3–5 hrs ground school / oral prep", "Included"],
      ["Textbooks & study material", "Included"],
      ["FAA oral / practical test (check ride)", "$800"],
    ],
    note: "Twin Comanche with GNS 430W and S-Tec autopilot. Multi-engine time building $495/hr in 10-hour blocks. Lodging $50/night on request.",
  },
];

export function ProgramBoard() {
  const [k, setK] = useState(programs[0].key);
  const p = programs.find((x) => x.key === k)!;
  return (
    <div className={s.board}>
      <div className={s.tabs} role="tablist" aria-label="Program">
        {programs.map((x) => (
          <button key={x.key} role="tab" aria-selected={k === x.key} className={`${s.tab} ${k === x.key ? s.tabOn : ""}`} onClick={() => setK(x.key)}>{x.label}</button>
        ))}
      </div>
      <div className={s.boardTop}>
        <div>
          <span className={s.boardLabel}>Estimated program cost</span>
          <strong className={s.boardTotal}>{p.total}</strong>
        </div>
        <p className={s.boardNeeds}>{p.needs}</p>
      </div>
      <ul className={s.lines}>
        {p.lines.map(([a, b]) => <li key={a}><span>{a}</span><i /><b>{b}</b></li>)}
      </ul>
      {p.note && <p className={s.boardNote}>{p.note}</p>}
      <p className={s.boardFine}>Estimates as published by EAS. Prices subject to change. The more often you fly, the sooner and less costly your training.</p>
    </div>
  );
}

/* ---------- Fleet board ---------- */

export type Aircraft = { tail: string; model: string; rate: number; kind: "c172" | "arrow" | "sim"; img: string; kit: string[]; use: string; dualOnly?: boolean };

export function FleetBoard({ fleet }: { fleet: Aircraft[] }) {
  const [f, setF] = useState<"all" | Aircraft["kind"]>("all");
  const shown = fleet.filter((a) => f === "all" || a.kind === f);
  const filters: [typeof f, string][] = [["all", `All (${fleet.length})`], ["c172", "Cessna 172s"], ["arrow", "Piper Arrows"], ["sim", "Simulator"]];
  return (
    <div>
      <div className={s.filters} role="group" aria-label="Filter fleet">
        {filters.map(([key, label]) => (
          <button key={key} aria-pressed={f === key} className={`${s.filter} ${f === key ? s.filterOn : ""}`} onClick={() => setF(key)}>{label}</button>
        ))}
      </div>
      <div className={s.fleet}>
        {shown.map((a) => (
          <article key={a.tail} className={s.plane}>
            <div className={s.planeImg}>
              <img src={`/eas-flight/${a.img}.jpg`} alt={`${a.model}, ${a.tail}`} loading="lazy" />
              <span className={s.rate}>${a.rate}<small>/hr{a.kind === "sim" ? "" : " wet"}</small></span>
            </div>
            <div className={s.planeBody}>
              <span className={s.tail}>{a.tail}</span>
              <h3>{a.model}</h3>
              <ul className={s.kit}>{a.kit.map((x) => <li key={x}>{x}</li>)}</ul>
              <p className={s.use}>{a.use}</p>
              {a.dualOnly && <span className={s.dual}>Dual only · no open rental</span>}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

/* ---------- Inquiry form (opens an email) ---------- */

const interests = ["Discovery flight", "Private pilot", "Instrument", "Commercial", "Multi-engine", "Zero to CFI", "Rental", "Maintenance"];
const bases = [
  { key: "Aurora (2H2)", email: "info@easflighttraining.com" },
  { key: "Monett (KHFJ)", email: "info@easflighttraining.com" },
  { key: "Neosho (KEOS)", email: "darren@easflighttraining.com" },
];

export function Inquiry() {
  const [interest, setInterest] = useState(interests[0]);
  const [base, setBase] = useState(bases[0].key);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const to = bases.find((b) => b.key === base)!.email;
    const body = [`Name: ${name}`, phone ? `Phone: ${phone}` : "", `Interested in: ${interest}`, `Preferred location: ${base}`, msg ? `\n${msg}` : ""].filter(Boolean).join("\n");
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(`${interest} inquiry, ${base}`)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <form className={s.form} onSubmit={send}>
      <p className={s.formTitle}>Start your training</p>
      <p className={s.formLabel}>I&apos;m interested in</p>
      <div className={s.chips}>
        {interests.map((x) => (
          <button type="button" key={x} aria-pressed={interest === x} className={`${s.chip} ${interest === x ? s.chipOn : ""}`} onClick={() => setInterest(x)}>{x}</button>
        ))}
      </div>
      <p className={s.formLabel}>Closest location</p>
      <div className={s.chips}>
        {bases.map((b) => (
          <button type="button" key={b.key} aria-pressed={base === b.key} className={`${s.chip} ${base === b.key ? s.chipOn : ""}`} onClick={() => setBase(b.key)}>{b.key}</button>
        ))}
      </div>
      <div className={s.fields}>
        <label><span>Name</span><input required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" /></label>
        <label><span>Phone</span><input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" autoComplete="tel" /></label>
        <label className={s.full}><span>Message</span><textarea rows={3} value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Your goals, schedule, and any flying you've done" /></label>
      </div>
      <button type="submit" className={`${s.btn} ${s.btnAmber} ${s.formBtn}`}>Send to EAS</button>
    </form>
  );
}
