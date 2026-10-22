"use client";

import { useEffect, useRef, useState } from "react";
import s from "./styles.module.css";

const links = [
  ["Training", "#training"],
  ["Fleet", "#fleet"],
  ["Simulator", "#simulator"],
  ["About", "#about"],
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
          <img src="/noble-aire/logo.png" alt="Noble Aire Aviation" className={s.logo} />
        </a>
        <nav className={`${s.navLinks} ${open ? s.navOpen : ""}`} aria-label="Primary">
          {links.map(([label, href]) => <a key={href} href={href} onClick={close}>{label}</a>)}
          <a href={tel} className={`${s.btn} ${s.btnPurple} ${s.navCta}`}>Call {phone}</a>
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

export type Aircraft = { tail: string; model: string; year: string; engine: string; avionics: string[]; img?: string; alt?: string; soon?: boolean };

/** Hangar selector: pick a tail number, see its spec sheet. */
export function Hangar({ fleet }: { fleet: Aircraft[] }) {
  const [i, setI] = useState(0);
  const a = fleet[i];
  return (
    <div className={s.hangar}>
      <div className={s.tails} role="tablist" aria-label="Aircraft">
        {fleet.map((f, k) => (
          <button key={f.tail} role="tab" aria-selected={k === i} className={`${s.tailBtn} ${k === i ? s.tailOn : ""}`} onClick={() => setI(k)}>
            <b>{f.tail}</b>
            <span>{f.model}</span>
          </button>
        ))}
      </div>
      <div className={s.sheet} role="tabpanel" aria-label={`${a.tail} details`}>
        <div className={s.sheetImg}>
          {a.img ? (
            <img key={a.img} src={a.img} alt={a.alt ?? ""} loading="lazy" />
          ) : (
            <div className={s.placard} aria-hidden>
              <span>{a.tail}</span>
              <small>{a.soon ? "Arriving soon" : a.model}</small>
            </div>
          )}
          {a.soon && <span className={s.soon}>Coming soon</span>}
        </div>
        <div className={s.sheetBody}>
          <p className={s.sheetTail}>{a.tail}</p>
          <h3>{a.year ? `${a.year} ` : ""}{a.model}</h3>
          {a.soon ? (
            <p className={s.sheetNote}>The newest addition to the Noble Aire fleet is on its way.</p>
          ) : (
            <dl className={s.specs}>
              <div><dt>Engine</dt><dd>{a.engine}</dd></div>
              <div><dt>Avionics</dt><dd>{a.avionics.join(" · ")}</dd></div>
              <div><dt>Rating</dt><dd>IFR certified</dd></div>
              <div><dt>Seats</dt><dd>4</dd></div>
            </dl>
          )}
        </div>
      </div>
    </div>
  );
}

const interests = ["Learning to fly", "Discovery flight", "Getting back into flying", "Advanced training (instrument, commercial)", "Rotary to fixed wing", "Something else"];

export function Inquiry({ email }: { email: string }) {
  const [interest, setInterest] = useState(interests[1]);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [`Name: ${name}`, `Interested in: ${interest}`, msg ? `\n${msg}` : ""].filter(Boolean).join("\n");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(`${interest}: Noble Aire inquiry`)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <form className={s.form} onSubmit={send}>
      <p className={s.formTitle}>What interests you?</p>
      <div className={s.chips} role="radiogroup" aria-label="Interest">
        {interests.map((t) => (
          <button type="button" key={t} role="radio" aria-checked={interest === t} className={`${s.chip} ${interest === t ? s.chipOn : ""}`} onClick={() => setInterest(t)}>{t}</button>
        ))}
      </div>
      <label className={s.field}><span>First name</span><input required value={name} onChange={(e) => setName(e.target.value)} autoComplete="given-name" /></label>
      <label className={s.field}><span>Message</span><textarea rows={3} value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Tell us about your flying goals" /></label>
      <button type="submit" className={`${s.btn} ${s.btnPurple} ${s.formBtn}`}>Send message</button>
    </form>
  );
}
