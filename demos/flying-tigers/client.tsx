"use client";

import { useEffect, useRef, useState } from "react";
import s from "./styles.module.css";
import { contact, programs, wix } from "./data";
import { Arrow } from "./icons";

const links = [
  ["Training Programs", "#programs"],
  ["Our Fleet", "#fleet"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

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

  return (
    <header className={`${s.nav} ${scrolled || open ? s.navSolid : ""}`}>
      <div className={s.navInner}>
        <a href="#top" className={s.brand} onClick={() => setOpen(false)} aria-label="Flying Tigers Flight School, home">
          <img src="/flying-tigers/logo-light.png" alt="Flying Tigers" className={s.brandLogo} width={624} height={364} />
          <span className={s.brandText}>
            <small>Flight School</small>
            <small>Houston, Texas</small>
          </span>
        </a>
        <nav className={`${s.navLinks} ${open ? s.navOpen : ""}`} aria-label="Primary">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a href="#discovery" className={`${s.btn} ${s.btnAmber} ${s.navCta}`} onClick={() => setOpen(false)}>
            Start Your Flight Training
          </a>
          <a href={contact.tel} className={s.navPhone}>{contact.phone}</a>
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

/** Fades children up once they scroll into view. */
export function Reveal({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add(s.in); io.disconnect(); }
    }, { rootMargin: "0px 0px -10% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`${s.reveal} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function Programs() {
  const [active, setActive] = useState(0);
  return (
    <div className={s.programs} role="list">
      {programs.map((p, i) => (
        <article
          key={p.code}
          role="listitem"
          className={`${s.program} ${active === i ? s.programActive : ""}`}
          onMouseEnter={() => setActive(i)}
          onFocus={() => setActive(i)}
          onClick={() => setActive(i)}
        >
          <img
            src={wix(p.image, 1000, 1200)}
            alt=""
            loading="lazy"
            className={s.programImg}
            style={{ objectPosition: p.focus ?? "50% 50%" }}
          />
          <div className={s.programShade} />
          <div className={s.programBody}>
            <div className={s.programTop}>
              <span className={s.programNum}>0{i + 1}</span>
              <span className={s.programCode}>{p.code}</span>
            </div>
            <div>
              <h3 className={s.programTitle}>{p.title}</h3>
              <p className={s.programTag}>{p.tagline}</p>
              <div className={s.programMore}>
                <p>{p.body}</p>
                <ul className={s.programFacts}>
                  <li>{p.ground}</li>
                  <li>{p.flight}</li>
                  <li>{p.estimate}</li>
                </ul>
                <a className={s.programCta} href={contact.mailto(`${p.title} training inquiry`)}>
                  Ask about {p.title} <Arrow />
                </a>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
