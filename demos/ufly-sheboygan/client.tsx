"use client";

import { useEffect, useRef, useState } from "react";
import s from "./styles.module.css";

const links = [
  ["Training", "#training"],
  ["Meet Jay", "#jay"],
  ["Students", "#students"],
  ["FAQ", "#faq"],
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
          <img src="/ufly-sheboygan/logo.png" alt="JD Hoogstra" className={s.logo} />
          <span className={s.brandText}>UFly<b>Sheboygan</b></span>
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

const goals = ["Private pilot training", "Flight simulator", "Aircraft inspection", "Something else"];
const places = ["Jay's facility", "My location", "Jay travels to me"];

function Chips({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className={s.chipGroup}>
      <p className={s.chipLabel}>{label}</p>
      <div role="radiogroup" aria-label={label} className={s.chips}>
        {options.map((o) => (
          <button key={o} type="button" role="radio" aria-checked={value === o} className={`${s.chip} ${value === o ? s.chipOn : ""}`} onClick={() => onChange(o)}>{o}</button>
        ))}
      </div>
    </div>
  );
}

/** Opens the visitor's email app with a message to Jay; nothing is stored or sent from the page. */
export function Inquiry({ email }: { email: string }) {
  const [goal, setGoal] = useState(goals[0]);
  const [place, setPlace] = useState(places[0]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [`Name: ${name}`, phone ? `Phone: ${phone}` : "", `Interested in: ${goal}`, `Where: ${place}`, msg ? `\n${msg}` : ""].filter(Boolean).join("\n");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(`${goal} with UFlySheboygan`)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <form className={s.form} onSubmit={send}>
      <p className={s.formTitle}>Tell Jay about your goals</p>
      <Chips label="What are you interested in?" options={goals} value={goal} onChange={setGoal} />
      <Chips label="Where would you like to train?" options={places} value={place} onChange={setPlace} />
      <div className={s.fields}>
        <label><span>Name</span><input required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" /></label>
        <label><span>Phone</span><input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" autoComplete="tel" /></label>
        <label className={s.full}><span>Message</span><textarea rows={3} value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Your schedule, experience, what you'd like to fly…" /></label>
      </div>
      <button type="submit" className={`${s.btn} ${s.btnPrimary} ${s.formBtn}`}>Email Jay</button>
    </form>
  );
}
