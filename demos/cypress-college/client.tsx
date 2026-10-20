"use client";

import { useEffect, useRef, useState } from "react";
import s from "./styles.module.css";

const links = [
  ["Pathway", "#pathway"],
  ["Simulators", "#sims"],
  ["Programs", "#programs"],
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
          <svg className={s.wings} viewBox="0 0 72 26" aria-hidden>
            <g fill="currentColor">
              <path d="M29 9.5C20 9 10 6.5 1 2c5.5 5.5 15 9 28 10.2z" />
              <path d="M29 13.6c-8 .2-15.5-1.2-23-4.2 5 4.6 12.5 6.8 23 6.9z" />
              <path d="M29 17.6c-6 .4-11.5-.4-17-2.6 4 3.6 9.6 5 17 5z" />
              <g transform="translate(72 0) scale(-1 1)">
                <path d="M29 9.5C20 9 10 6.5 1 2c5.5 5.5 15 9 28 10.2z" />
                <path d="M29 13.6c-8 .2-15.5-1.2-23-4.2 5 4.6 12.5 6.8 23 6.9z" />
                <path d="M29 17.6c-6 .4-11.5-.4-17-2.6 4 3.6 9.6 5 17 5z" />
              </g>
            </g>
            <path d="M36 4.5l6 2.6v5.6c0 4.4-2.6 7.6-6 9-3.4-1.4-6-4.6-6-9V7.1z" fill="#ffb547" />
            <path d="M36 9.2l1.1 2.6 2.8.2-2.2 1.8.7 2.7-2.4-1.5-2.4 1.5.7-2.7-2.2-1.8 2.8-.2z" fill="#070d1a" />
          </svg>
          <span className={s.brandText}><strong>Cypress College</strong><small>Flight Training</small></span>
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
