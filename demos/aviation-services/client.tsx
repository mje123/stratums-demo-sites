"use client";

import { useEffect, useRef, useState } from "react";
import s from "./styles.module.css";

const links = [
  ["Training", "#training"],
  ["Rates", "#rates"],
  ["Maintenance", "#maintenance"],
  ["Our Crew", "#crew"],
  ["Contact", "#contact"],
];

/** Their "Aviation Services Company" serif wordmark, redrawn so it stays sharp and readable on dark backgrounds. */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`${s.wordmark} ${className}`}>
      <span className={s.wmTop}>Aviation Services</span>
      <span className={s.wmBottom}>Company</span>
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
        <a href="#top" onClick={close} className={s.brand} aria-label="Aviation Services Company, home">
          <Wordmark />
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

/* ---------- Course ledger: hours from their course pages × their posted hourly rates ---------- */

const RATE = { aircraft: 147, instructor: 50, ground: 30, surcharge: 14 };

type Course = { key: string; name: string; aircraft: number; instructor: number; ground: number; materials: number; note: string };
const courses: Course[] = [
  { key: "presolo", name: "Pre-Solo", aircraft: 10, instructor: 10, ground: 10, materials: 10.5, note: "From your first lesson to your first solo. Be at least 15 years old." },
  { key: "sport", name: "Sport Pilot", aircraft: 20, instructor: 15, ground: 20, materials: 10.5, note: "Training is creditable toward the certificate, but no Sport-certified aircraft is currently available for the test." },
  { key: "recreational", name: "Recreational Pilot", aircraft: 30, instructor: 15, ground: 20, materials: 10.5, note: "Fly small single-engine, fixed-gear airplanes up to 180 hp and 4 seats, with one passenger." },
  { key: "private", name: "Private Pilot", aircraft: 40, instructor: 30, ground: 50, materials: 10.5, note: "The certificate most pilots start with: multiple passengers, night flying, and the path to every rating after." },
  { key: "professional", name: "Commercial + Instrument", aircraft: 200, instructor: 200, ground: 100, materials: 150, note: "Commercial Pilot, Airplane Single Engine Land, with an Instrument rating. Requires a Private Pilot certificate." },
  { key: "instructor", name: "Flight Instructor", aircraft: 60, instructor: 60, ground: 50, materials: 100, note: "Airplane, Instruments and Ground Instructor Advanced combined. All flight time is logged as pilot in command." },
];

const usd = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2 });

export function CourseLedger() {
  const [key, setKey] = useState("private");
  const [fuel, setFuel] = useState(false);
  const c = courses.find((x) => x.key === key)!;
  const aircraftRate = RATE.aircraft + (fuel ? RATE.surcharge : 0);
  const rows: [string, string, number][] = [
    ["Aircraft · Beechcraft Sundowner", `${c.aircraft} hrs × ${usd(aircraftRate)}`, c.aircraft * aircraftRate],
    ["Flight instructor", `${c.instructor} hrs × ${usd(RATE.instructor)}`, c.instructor * RATE.instructor],
    ["Ground instruction, one-on-one", `${c.ground} hrs × ${usd(RATE.ground)}`, c.ground * RATE.ground],
    ["Training materials", "", c.materials],
  ];
  const total = rows.reduce((t, r) => t + r[2], 0);
  return (
    <div className={s.ledger}>
      <div className={s.ledgerTabs} role="tablist" aria-label="Course">
        {courses.map((x) => (
          <button key={x.key} role="tab" aria-selected={key === x.key} className={`${s.ledgerTab} ${key === x.key ? s.ledgerTabOn : ""}`} onClick={() => setKey(x.key)}>{x.name}</button>
        ))}
      </div>
      <div className={s.ledgerSheet}>
        <div className={s.ledgerHead}>
          <span>Course</span>
          <strong>{c.name}</strong>
        </div>
        <p className={s.ledgerNote}>{c.note}</p>
        <div className={s.ledgerRows}>
          {rows.map(([label, calc, amt]) => (
            <div key={label} className={s.ledgerRow}>
              <span>{label}</span>
              <em>{calc}</em>
              <b>{usd(amt)}</b>
            </div>
          ))}
        </div>
        <div className={s.ledgerTotal}>
          <span>Minimum estimate</span>
          <strong>{usd(total)}</strong>
        </div>
        <label className={s.fuelToggle}>
          <input type="checkbox" checked={fuel} onChange={(e) => setFuel(e.target.checked)} />
          Include the temporary {usd(RATE.surcharge)}/hr fuel surcharge
        </label>
        <p className={s.ledgerFine}>
          Hours from their course pages at today&apos;s posted rates. Minimums, not guarantees: completion depends on your progress. Pay as you go, no prepayment required.
        </p>
      </div>
    </div>
  );
}

/* ---------- Inquiry form (opens an email) ---------- */

const interests = ["First flight lesson", "Pre-solo / Private", "Commercial & Instrument", "Flight instructor", "Ground or virtual tutoring", "Fast Track", "Maintenance", "Foreign pilot training"];

export function Inquiry({ email }: { email: string }) {
  const [interest, setInterest] = useState(interests[0]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [`Name: ${name}`, phone ? `Phone: ${phone}` : "", `Interested in: ${interest}`, msg ? `\n${msg}` : ""].filter(Boolean).join("\n");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(`${interest}: inquiry`)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <form className={s.form} onSubmit={send}>
      <p className={s.formTitle}>New logbook entry</p>
      <p className={s.formSub}>Tell Steve what you&apos;d like to work on.</p>
      <div className={s.chips} role="radiogroup" aria-label="Interested in">
        {interests.map((t) => (
          <button type="button" key={t} role="radio" aria-checked={interest === t} className={`${s.chip} ${interest === t ? s.chipOn : ""}`} onClick={() => setInterest(t)}>{t}</button>
        ))}
      </div>
      <div className={s.fields}>
        <label><span>Name</span><input required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" /></label>
        <label><span>Phone</span><input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" autoComplete="tel" /></label>
        <label className={s.full}><span>Message</span><textarea rows={3} value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Your experience so far, goals and the times that work for you" /></label>
      </div>
      <button type="submit" className={`${s.btn} ${s.btnRed} ${s.formBtn}`}>Send to Steve</button>
    </form>
  );
}
