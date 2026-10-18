"use client";

import { useEffect, useRef, useState } from "react";
import s from "./styles.module.css";
import { categories, contact, courses } from "./data";

const links = [
  ["Courses", "#courses"],
  ["How It Works", "#how"],
  ["Fleet", "#fleet"],
  ["Seaplane", "#seaplane"],
  ["FBO", "#fbo"],
  ["Contact", "#contact"],
];

export function Compass({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" aria-hidden>
      <circle cx="20" cy="20" r="18.5" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      <path d="M20 4 24 20 20 36 16 20Z" fill="currentColor" opacity="0.35" />
      <path d="M20 4 24 20H16Z" fill="currentColor" />
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
        <a href="#top" onClick={close} className={s.brand} aria-label="Venture North Aviation, home">
          <Compass className={s.brandMark} />
          <span><strong>Venture North</strong><small>Aviation · Since 1992</small></span>
        </a>
        <nav className={`${s.navLinks} ${open ? s.navOpen : ""}`} aria-label="Primary">
          {links.map(([label, href]) => <a key={href} href={href} onClick={close}>{label}</a>)}
          <a href={contact.tel} className={`${s.btn} ${s.btnGold} ${s.navCta}`}>Call {contact.phone}</a>
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

export function CourseFinder() {
  const [cat, setCat] = useState("All");
  const shown = courses.filter((c) => cat === "All" || c.cat === cat);
  return (
    <div>
      <div className={s.tabs} role="tablist" aria-label="Filter courses">
        {categories.map((c) => (
          <button key={c} role="tab" aria-selected={cat === c} className={`${s.tab} ${cat === c ? s.tabOn : ""}`} onClick={() => setCat(c)}>
            {c}
          </button>
        ))}
      </div>
      <div className={s.courses}>
        {shown.map((c) => (
          <article key={c.name} className={s.course}>
            <div className={s.courseDays}><strong>{c.days}</strong><span>{c.unit}</span></div>
            <p className={s.courseCat}>{c.cat}</p>
            <h3>{c.name}</h3>
            <p className={s.courseBody}>{c.body}</p>
            <div className={s.courseFoot}>
              <a href={contact.tel}>Call for pricing</a>
              <a href={contact.mailto(`${c.days}-day ${c.name} course`)} aria-label={`Email about the ${c.name} course`}>Email →</a>
            </div>
          </article>
        ))}
      </div>
    </div>
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
