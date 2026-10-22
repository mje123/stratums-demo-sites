"use client";

import { useEffect, useRef, useState } from "react";
import s from "./styles.module.css";

const links = [
  ["Training", "#training"],
  ["Rates", "#rates"],
  ["Fleet", "#fleet"],
  ["Maintenance", "#maintenance"],
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
          <img src="/progress-flight/logo.png" alt="" className={s.brandLogo} />
          <span><strong>Progress</strong><small>Flight Academy</small></span>
        </a>
        <nav className={`${s.navLinks} ${open ? s.navOpen : ""}`} aria-label="Primary">
          {links.map(([label, href]) => <a key={href} href={href} onClick={close}>{label}</a>)}
          <a href={tel} className={`${s.btn} ${s.btnRed} ${s.navCta}`}>Call {phone}</a>
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

type Row = [string, string, string?];
const tracks: Record<"Helicopter" | "Airplane", { rates: Row[]; packages: Row[]; discovery: Row[]; note: string }> = {
  Helicopter: {
    rates: [["Robinson R22 · dual", "$325"], ["Robinson R22 · solo", "$300"], ["Robinson R44 II", "$600"], ["Ground instruction", "$80"]],
    packages: [["R22 Private Pilot", "$17,000", "40 flight hours, unlimited ground"], ["R44 II Private Pilot", "$26,000", "40 flight hours, unlimited ground"]],
    discovery: [["R22", "$200"], ["R44", "$325"]],
    note: "FAA minimum for a helicopter private pilot: 35 hours, including 20 dual and 5 solo.",
  },
  Airplane: {
    rates: [["Cessna 172 · dual", "$225"], ["Cessna 172 · solo", "$200"], ["Cessna 182 · dual", "$350"], ["Ground instruction", "$80"]],
    packages: [["C172 Private Pilot", "$12,000", "42.5 hours of flight training incl. fuel & instructor, ground, Redbird AATD, books"], ["C182 Private Pilot", "$17,000", "Full TAA with a 4-axis autopilot"]],
    discovery: [["C172", "$225"]],
    note: "FAA minimum for an airplane private pilot: 40 hours, including 20 dual and 10 solo.",
  },
};

export function RateBoard() {
  const [track, setTrack] = useState<keyof typeof tracks>("Helicopter");
  const t = tracks[track];
  return (
    <div className={s.board}>
      <div className={s.switch} role="tablist" aria-label="Training track">
        {(Object.keys(tracks) as (keyof typeof tracks)[]).map((k) => (
          <button key={k} role="tab" aria-selected={track === k} className={`${s.switchBtn} ${track === k ? s.switchOn : ""}`} onClick={() => setTrack(k)}>
            {k}
          </button>
        ))}
      </div>
      <div className={s.boardGrid}>
        <div>
          <p className={s.boardHead}>Hourly rates</p>
          {t.rates.map(([k, v]) => (
            <div key={k} className={s.row}><span>{k}</span><i /><strong>{v}<small>/hr</small></strong></div>
          ))}
          <p className={s.boardHead} style={{ marginTop: 22 }}>Discovery flight</p>
          <div className={s.disco}>
            {t.discovery.map(([k, v]) => <div key={k}><small>{k}</small><b>{v}</b></div>)}
          </div>
        </div>
        <div>
          <p className={s.boardHead}>Private pilot packages</p>
          {t.packages.map(([k, v, d]) => (
            <div key={k} className={s.pkg}>
              <div><b>{k}</b><span>{d}</span></div>
              <strong>{v}</strong>
            </div>
          ))}
          <p className={s.boardNote}>{t.note}</p>
        </div>
      </div>
    </div>
  );
}

const interests = ["Discovery flight", "Helicopter training", "Airplane training", "Instrument / Commercial", "Flight instructor", "Maintenance & avionics"];

export function Inquiry({ email }: { email: string }) {
  const [topic, setTopic] = useState(interests[0]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [`Name: ${name}`, phone ? `Phone: ${phone}` : "", `Interested in: ${topic}`, msg ? `\n${msg}` : ""].filter(Boolean).join("\n");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(`${topic} inquiry`)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <form className={s.form} onSubmit={send}>
      <p className={s.formTitle}>What are you interested in?</p>
      <div className={s.chips} role="radiogroup" aria-label="Interest">
        {interests.map((t) => (
          <button type="button" key={t} role="radio" aria-checked={topic === t} className={`${s.chip} ${topic === t ? s.chipOn : ""}`} onClick={() => setTopic(t)}>{t}</button>
        ))}
      </div>
      <div className={s.fields}>
        <label><span>Name</span><input required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" /></label>
        <label><span>Phone</span><input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" autoComplete="tel" /></label>
        <label className={s.full}><span>Message</span><textarea rows={3} value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Your goals, experience, and when you'd like to fly" /></label>
      </div>
      <button type="submit" className={`${s.btn} ${s.btnRed} ${s.formBtn}`}>Send Inquiry</button>
    </form>
  );
}
