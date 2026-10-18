"use client";

import { useEffect, useRef, useState } from "react";
import s from "./styles.module.css";
import { contact } from "./data";

const links = [
  ["Flight School", "#discovery"],
  ["Fleet", "#fleet"],
  ["Maintenance", "#maintenance"],
  ["Hangars", "#airport"],
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

  const close = () => setOpen(false);

  return (
    <header className={`${s.nav} ${scrolled || open ? s.navSolid : ""}`}>
      <div className={s.navInner}>
        <a href="#top" onClick={close} className={s.brand}>
          <img src="/suburban-aviation/logo.png" alt="Suburban Aviation" width={700} height={311} />
        </a>
        <nav className={`${s.navLinks} ${open ? s.navOpen : ""}`} aria-label="Primary">
          {links.map(([label, href]) => <a key={href} href={href} onClick={close}>{label}</a>)}
          <a href={contact.schedule} target="_blank" rel="noreferrer" className={s.navSchedule}>Schedule</a>
          <a href="#discovery" onClick={close} className={`${s.btn} ${s.btnYellow} ${s.navCta}`}>Book a Discovery Flight</a>
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

/** Live "open now" indicator using the airport's local time (Michigan, Eastern). */
export function OpenStatus() {
  const [state, setState] = useState<null | { open: boolean; time: string }>(null);
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const time = now.toLocaleTimeString("en-US", { timeZone: "America/Detroit", hour: "numeric", minute: "2-digit" });
      const hour = Number(now.toLocaleString("en-US", { timeZone: "America/Detroit", hour: "numeric", hour12: false }));
      setState({ open: hour >= 8 && hour < 18, time });
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className={`${s.status} ${state?.open ? s.statusOpen : ""}`}>
      <span className={s.statusDot} />
      {state ? (state.open ? `Open now · ${state.time} local` : `Opens 8:00 AM · ${state.time} local`) : "Open 8 AM – 6 PM daily"}
    </span>
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
