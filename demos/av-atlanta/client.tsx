"use client";

import { useEffect, useRef, useState } from "react";
import s from "./styles.module.css";

const links = [
  ["Our Mission", "#mission"],
  ["For Schools", "#schools"],
  ["A Visit", "#visit"],
  ["Get Involved", "#contact"],
];

/** Their AV mark: a figure-eight flight loop with the letters AV, redrawn as vector. */
export function AvMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="AV logo">
      <circle cx="32" cy="32" r="31" fill="#0b0f14" />
      <g fill="none" strokeLinecap="round">
        <path d="M32 31c-7 0-11-4-11-9.5S25 12 32 12s11 4 11 9.5S39 31 32 31zm0 0c7 0 11 4.5 11 10.5S39 52 32 52s-11-4-11-10.5S25 31 32 31z" stroke="#2fd4c4" strokeWidth="2.4" />
        <path d="M32 33.5c-5.5 0-8.6-3.4-8.6-8s3.1-8 8.6-8 8.6 3.4 8.6 8-3.1 8-8.6 8zm0 0c5.5 0 8.6 3.6 8.6 8.6s-3.1 8.4-8.6 8.4-8.6-3.4-8.6-8.4 3.1-8.6 8.6-8.6z" stroke="#e8f7f5" strokeWidth="1.2" opacity="0.85" />
      </g>
      <text x="32" y="35.5" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="11" letterSpacing="1" fill="#fff">AV</text>
    </svg>
  );
}

export function Nav() {
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
          <AvMark className={s.brandMark} />
          <span><b>AV</b><small>Youth Aviation · Atlanta</small></span>
        </a>
        <nav className={`${s.navLinks} ${open ? s.navOpen : ""}`} aria-label="Primary">
          {links.map(([label, href]) => <a key={href} href={href} onClick={close}>{label}</a>)}
          <a href="#contact" onClick={close} className={`${s.btn} ${s.btnPrimary} ${s.navCta}`}>Book a School Visit</a>
        </nav>
        <button className={`${s.burger} ${open ? s.burgerOpen : ""}`} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
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

const levels = {
  Elementary: { tag: "Grades K–5", line: "Spark the dream.", body: "Wonder first: what makes a plane fly, what pilots do, and the moment a student sees the sky from the cockpit." },
  "Middle School": { tag: "Grades 6–8", line: "Connect it to the classroom.", body: "Turn science and math into lift, weight, thrust and drag, and show students the careers waiting in aviation." },
  "High School": { tag: "Grades 9–12", line: "Point them to a path.", body: "Real stick time and a clear picture of the road from first flight to pilot, mechanic, or aerospace career." },
} as const;

export function Levels() {
  const [k, setK] = useState<keyof typeof levels>("Elementary");
  const l = levels[k];
  return (
    <div className={s.levels}>
      <div className={s.levelTabs} role="tablist" aria-label="School level">
        {(Object.keys(levels) as (keyof typeof levels)[]).map((x) => (
          <button key={x} role="tab" aria-selected={k === x} className={`${s.levelTab} ${k === x ? s.levelOn : ""}`} onClick={() => setK(x)}>{x}</button>
        ))}
      </div>
      <div className={s.levelCard}>
        <span className={s.levelTag}>{l.tag}</span>
        <h3>{l.line}</h3>
        <p>{l.body}</p>
      </div>
    </div>
  );
}

export function VisitForm() {
  const [sent, setSent] = useState(false);
  return sent ? (
    <div className={s.formDone} role="status">
      <h3>Thanks! You&apos;re on the list.</h3>
      <p>This is a demo form. Once live, requests like this would go straight to the AV team.</p>
    </div>
  ) : (
    <form className={s.form} onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
      <p className={s.formTitle}>Bring AV to your school</p>
      <div className={s.fields}>
        <label><span>Your name</span><input required autoComplete="name" /></label>
        <label><span>School</span><input required /></label>
        <label><span>Role</span>
          <select defaultValue="Teacher"><option>Teacher</option><option>Administrator</option><option>Parent</option><option>Student</option><option>Sponsor</option></select>
        </label>
        <label><span>Level</span>
          <select defaultValue="Middle School"><option>Elementary</option><option>Middle School</option><option>High School</option></select>
        </label>
        <label className={s.full}><span>Email</span><input type="email" required autoComplete="email" /></label>
      </div>
      <button type="submit" className={`${s.btn} ${s.btnPrimary} ${s.formBtn}`}>Request a Visit</button>
    </form>
  );
}
