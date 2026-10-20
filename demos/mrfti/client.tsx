"use client";

import { useEffect, useRef, useState } from "react";
import s from "./styles.module.css";

const links = [
  ["Discovery Flights", "#discovery"],
  ["Rates", "#rates"],
  ["Fleet", "#fleet"],
  ["Career Path", "#career"],
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
          <span className={s.logo}>MRFTI</span>
          <span className={s.brandText}><strong>Middletown Regional</strong><small>Flight Training Institute</small></span>
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

type Rate = [string, string];
const boards: Record<string, { note: string; aircraft: Rate[]; instruction: Rate[] }> = {
  Standard: {
    note: "Pay-as-you-go at the end of each lesson.",
    aircraft: [["Cessna 172", "$146"], ["Cessna 172RG", "$165"]],
    instruction: [["Dual / ground", "$46"], ["Owner aircraft dual", "$56"]],
  },
  Block: {
    note: "Deposit $1,500 in advance for discounted rates, locked in until the funds are used or for six months, whichever comes first.",
    aircraft: [["Cessna 172", "$144"], ["Cessna 172RG", "$163"]],
    instruction: [["Dual / ground", "$45"], ["Owner aircraft dual", "$55"]],
  },
  Club: {
    note: "Flying club members get lower hourly rates and may take the aircraft on overnight trips. $150 initiation, $40/month, 1 hour/month minimum.",
    aircraft: [["Cessna 172", "$127"], ["Cessna 172RG", "$146"]],
    instruction: [],
  },
};

export function RateBoard() {
  const [tab, setTab] = useState<keyof typeof boards>("Standard");
  const b = boards[tab];
  return (
    <div className={s.board}>
      <div className={s.tabs} role="tablist" aria-label="Rate type">
        {Object.keys(boards).map((k) => (
          <button key={k} role="tab" aria-selected={tab === k} className={`${s.tab} ${tab === k ? s.tabOn : ""}`} onClick={() => setTab(k)}>{k}</button>
        ))}
      </div>
      <p className={s.boardNote}>{b.note}</p>
      <div className={s.boardCols}>
        <div>
          <p className={s.boardHead}>Aircraft · per hour</p>
          {b.aircraft.map(([k, v]) => <div key={k} className={s.row}><span>{k}</span><i /><strong>{v}</strong></div>)}
        </div>
        <div>
          <p className={s.boardHead}>Instruction · per hour</p>
          {b.instruction.length
            ? b.instruction.map(([k, v]) => <div key={k} className={s.row}><span>{k}</span><i /><strong>{v}</strong></div>)
            : <p className={s.boardEmpty}>Club pricing is a rental model for customer pilots in our Cessna 172 &amp; 172RG aircraft.</p>}
        </div>
      </div>
      <p className={s.fuel}>Plus a fuel surcharge that varies with current fuel prices.</p>
    </div>
  );
}
