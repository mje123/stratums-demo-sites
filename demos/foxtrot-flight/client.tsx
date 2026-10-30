"use client";

import { useEffect, useRef, useState } from "react";
import s from "./styles.module.css";

const links = [
  ["Discovery Flights", "#discovery"],
  ["Fleet", "#fleet"],
  ["Rates", "#rates"],
  ["Training", "#training"],
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
          <img src="/foxtrot-flight/logo.png" alt="" className={s.logo} />
          <span className={s.brandText}><b>Foxtrot</b><small>Flight Training</small></span>
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

const fleet = [
  { tail: "N704WF", call: "Four Whiskey Foxtrot", type: "Cessna 150M", tag: "IFR", rate: 115, note: "A classic trainer and a school favorite for her economy and stability. Fully IFR equipped, through every stage of training.", img: "n704wf" },
  { tail: "N8221F", call: "Two One Foxtrot", type: "Cessna 150F", tag: "VFR", rate: 115, note: "Joins Four Whiskey Foxtrot as a VFR-only Cessna 150, capable of private and commercial training.", img: "n8221f" },
  { tail: "N696LB", call: "Six Lima Bravo", type: "Piper PA-28-140", tag: "IFR", rate: 165, note: "Stable with docile stall characteristics, more room and a bit more speed. New landing lights and cockpit lighting for night flying.", img: "n696lb" },
  { tail: "N888H", call: "Triple Eight Hotel", type: "Cessna 172G", tag: "IFR", rate: 165, note: "The first 4-seat Cessna in the fleet, with dual G5s and a moving-map GPS, ready for private and instrument training.", img: "" },
  { tail: "N46P", call: "Four Six Papa", type: "Piper PA-24-260B", tag: "High performance", rate: 225, note: "A cross-country performer: useful load well above 1,000 lb, 5+ hours of range, Garmin avionics and a King autopilot.", img: "" },
  { tail: "N77937", call: "Nine Three Seven · \u201cLucy\u201d", type: "1946 Luscombe 8A", tag: "Tailwheel", rate: 100, note: "The tailwheel trainer and rental plane, upgraded to 75 hp. Light Sport, VFR only, and flown on straight skis in winter.", img: "luscombe-snow" },
];

export function Fleet() {
  const [i, setI] = useState(0);
  const a = fleet[i];
  return (
    <div className={s.fleet}>
      <div className={s.tails} role="tablist" aria-label="Choose an aircraft">
        {fleet.map((f, k) => (
          <button key={f.tail} role="tab" aria-selected={k === i} className={`${s.tailBtn} ${k === i ? s.tailOn : ""}`} onClick={() => setI(k)}>
            <b>{f.tail}</b><span>{f.type}</span>
          </button>
        ))}
      </div>
      <div className={s.plane}>
        <div className={s.planeImg}>
          {a.img ? <img src={`/foxtrot-flight/${a.img}.jpg`} alt={`${a.type} ${a.tail}`} /> : <div className={s.placard}><span>{a.tail}</span><small>{a.type}</small></div>}
        </div>
        <div className={s.planeBody}>
          <p className={s.callsign}>{a.call}</p>
          <h3>{a.type}</h3>
          <p>{a.note}</p>
          <div className={s.planeFoot}><span className={s.tag}>{a.tag}</span><strong>${a.rate}<small>/hr wet</small></strong></div>
        </div>
      </div>
    </div>
  );
}
