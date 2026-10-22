"use client";

import { useEffect, useRef, useState } from "react";
import s from "./styles.module.css";

const links = [
  ["First Lesson", "#first-lesson"],
  ["Rates", "#rates"],
  ["The Airplane", "#airplane"],
  ["Ground School", "#ground-school"],
  ["Our Story", "#story"],
  ["Contact", "#contact"],
];

/** Their gold "Eagles' Wings" lettering and banner swoosh, redrawn for the web. */
export function Wordmark({ small = false }: { small?: boolean }) {
  return (
    <span className={`${s.wordmark} ${small ? s.wordmarkSmall : ""}`}>
      <span className={s.wordmarkText}>Eagles&apos; Wings</span>
      <svg className={s.swoosh} viewBox="0 0 220 14" aria-hidden preserveAspectRatio="none">
        <path d="M2 11C60 2 150 0 218 5" />
      </svg>
      <small>Flight Training · Since 1984</small>
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
        <a href="#top" onClick={close} className={s.brand} aria-label="Eagles' Wings Flight Training, home">
          <Wordmark small />
        </a>
        <nav className={`${s.navLinks} ${open ? s.navOpen : ""}`} aria-label="Primary">
          {links.map(([label, href]) => <a key={href} href={href} onClick={close}>{label}</a>)}
          <a href={tel} className={`${s.btn} ${s.btnGold} ${s.navCta}`}>Call or text {phone}</a>
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

const usd = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

/**
 * Uses only the posted rates: $140/hr dual (airplane, fuel, insurance and instruction),
 * $115/hr solo, $15 insurance surcharge for the first three lessons, then $400 a year,
 * plus the listed test and medical fees. David's advice: plan on about 30 hours dual and 30 solo.
 */
export function Estimator() {
  const [dual, setDual] = useState(30);
  const [solo, setSolo] = useState(30);
  const flying = dual * 140 + solo * 115;
  const insurance = 3 * 15 + 400;
  const fees = 175 + 600 + 110; // knowledge test, examiner, medical (about $100–125)
  const total = flying + insurance + fees;
  return (
    <div className={s.estimator}>
      <div className={s.estHead}>
        <span>Private Pilot budget</span>
        <em>From posted rates · not a quote</em>
      </div>
      <label className={s.slider}>
        <span><b>{dual}</b> hours dual instruction</span>
        <input type="range" min={20} max={50} value={dual} onChange={(e) => setDual(Number(e.target.value))} aria-label="Hours of dual instruction" />
        <small>$140/hr · airplane, fuel, insurance &amp; instruction</small>
      </label>
      <label className={s.slider}>
        <span><b>{solo}</b> hours solo</span>
        <input type="range" min={10} max={40} value={solo} onChange={(e) => setSolo(Number(e.target.value))} aria-label="Hours of solo flight" />
        <small>$115/hr · airplane rental</small>
      </label>
      <dl className={s.estRows}>
        <div><dt>Flying ({dual + solo} hrs)</dt><dd>{usd(flying)}</dd></div>
        <div><dt>Insurance (3 × $15, then $400/yr)</dt><dd>{usd(insurance)}</dd></div>
        <div><dt>Knowledge test, examiner, medical</dt><dd>{usd(fees)}</dd></div>
      </dl>
      <div className={s.estTotal}><span>Estimated total</span><strong>{usd(total)}</strong></div>
      <p className={s.estNote}>Excludes ground instruction ($40/hr) and books ($50–400). Most Eagles&apos; Wings students finish in about 60 hours.</p>
    </div>
  );
}

const interests = ["First lesson", "Private Pilot", "Ground school", "Flight review", "Training in my airplane", "Drones / Part 107"];

export function Inquiry({ email }: { email: string }) {
  const [pick, setPick] = useState(interests[0]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [`Name: ${name}`, phone ? `Phone: ${phone}` : "", `Interested in: ${pick}`, msg ? `\n${msg}` : ""].filter(Boolean).join("\n");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(`${pick}: Eagles' Wings`)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <form className={s.form} onSubmit={send}>
      <p className={s.formTitle}>Let&apos;s go flying</p>
      <div className={s.chips} role="radiogroup" aria-label="What are you interested in?">
        {interests.map((t) => (
          <button type="button" key={t} role="radio" aria-checked={pick === t} className={`${s.chip} ${pick === t ? s.chipOn : ""}`} onClick={() => setPick(t)}>{t}</button>
        ))}
      </div>
      <div className={s.fields}>
        <label><span>Name</span><input required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" /></label>
        <label><span>Phone</span><input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" autoComplete="tel" /></label>
        <label className={s.full}><span>Message</span><textarea rows={3} value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="When can you fly? Any experience so far?" /></label>
      </div>
      <button type="submit" className={`${s.btn} ${s.btnGold} ${s.formBtn}`}>Email David</button>
    </form>
  );
}
