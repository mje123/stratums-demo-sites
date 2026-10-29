"use client";

import { useEffect, useRef, useState } from "react";
import s from "./styles.module.css";
import { contact, gallery, programs, reviews, img, type Shot } from "./data";

const links = [
  ["Discovery Flight", "#discovery"],
  ["Training", "#training"],
  ["Instructor", "#instructor"],
  ["Students", "#students"],
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
        <a href="#top" onClick={close} className={s.brand} aria-label="Gulf Coast Flight Training, home">
          <img src="/tx-fliers/logo-white.png" alt="Gulf Coast Flight Training" width={827} height={288} />
        </a>
        <nav className={`${s.navLinks} ${open ? s.navOpen : ""}`} aria-label="Primary">
          {links.map(([label, href]) => <a key={href} href={href} onClick={close}>{label}</a>)}
          <a href={contact.tel} className={s.navPhone} onClick={close}>{contact.phone}</a>
          <a href="#book" className={`${s.btn} ${s.btnCoral} ${s.navCta}`} onClick={close}>Book a Discovery Flight</a>
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

/** Thumb-reach call/book bar on phones; hidden once the booking form itself is on screen. */
export function MobileBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const book = document.getElementById("book");
    let pastHero = false;
    let bookVisible = false;
    const update = () => setShow(pastHero && !bookVisible);
    const onScroll = () => { pastHero = window.scrollY > window.innerHeight * 0.6; update(); };
    const io = book ? new IntersectionObserver(([e]) => { bookVisible = e.isIntersecting; update(); }) : null;
    if (book && io) io.observe(book);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); io?.disconnect(); };
  }, []);
  return (
    <div className={`${s.mobileBar} ${show ? s.mobileBarOn : ""}`} aria-hidden={!show}>
      <a href={contact.tel} className={`${s.btn} ${s.btnGlass}`} tabIndex={show ? 0 : -1}>Call</a>
      <a href="#book" className={`${s.btn} ${s.btnCoral}`} tabIndex={show ? 0 : -1}>Book a Discovery Flight</a>
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

/** Their own cockpit footage, re-encoded from ~29 MB to ~0.6–1.6 MB. Pausable; never autoplays for reduced motion. */
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }, []);
  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) v.play().then(() => setPlaying(true)).catch(() => {});
    else { v.pause(); setPlaying(false); }
  };
  return (
    <>
      <video ref={ref} className={s.heroVideo} muted loop playsInline preload="metadata" poster="/tx-fliers/coast-poster.jpg" aria-hidden>
        <source src="/tx-fliers/coast-720.mp4" type="video/mp4" media="(max-width: 760px)" />
        <source src="/tx-fliers/coast-1280.mp4" type="video/mp4" />
      </video>
      <button type="button" className={s.videoToggle} onClick={toggle} aria-label={playing ? "Pause background video" : "Play background video"}>
        {playing ? <svg viewBox="0 0 24 24" aria-hidden><path d="M7 5h3v14H7zM14 5h3v14h-3z" /></svg> : <svg viewBox="0 0 24 24" aria-hidden><path d="M8 5l11 7-11 7z" /></svg>}
      </button>
    </>
  );
}

/** Training as a flight plan: pick a waypoint to see what that leg involves. */
export function FlightPlan() {
  const [i, setI] = useState(0);
  const p = programs[i];
  return (
    <div className={s.plan}>
      <ol className={s.route} role="tablist" aria-label="Training programs">
        {programs.map((x, j) => (
          <li key={x.key}>
            <button
              type="button"
              role="tab"
              id={`wp-${x.key}`}
              aria-selected={i === j}
              aria-controls="wp-panel"
              className={`${s.wpt} ${i === j ? s.wptOn : ""} ${j < i ? s.wptDone : ""}`}
              onClick={() => setI(j)}
            >
              <span className={s.wptDot}>{x.code}</span>
              <span className={s.wptName}>{x.title}</span>
            </button>
          </li>
        ))}
      </ol>
      <div className={s.legCard} role="tabpanel" id="wp-panel" aria-labelledby={`wp-${p.key}`} key={p.key}>
        <div className={s.legHead}>
          <span className={s.legNum}>Leg {i + 1} of {programs.length}</span>
          <span className={s.legKicker}>{p.kicker}</span>
        </div>
        <h3>{p.title}</h3>
        <p>{p.body}</p>
        <ul className={s.legPoints}>{p.points.map((x) => <li key={x}>{x}</li>)}</ul>
        <div className={s.legActions}>
          <a href="#book" className={`${s.btn} ${s.btnCoral}`}>{i === 0 ? "Book a Discovery Flight" : `Ask about ${p.title}`}</a>
          {i < programs.length - 1 && (
            <button type="button" className={`${s.btn} ${s.btnLine}`} onClick={() => setI(i + 1)}>
              Next leg: {programs[i + 1].title} →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

const goals = [
  ["curious", "Just curious: try it out"],
  ["private", "Earn my Private Pilot certificate"],
  ["instrument", "Add an Instrument Rating"],
  ["commercial", "Work toward Commercial"],
] as const;
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const times = ["Morning", "Midday", "Afternoon"];

/** Three-step discovery-flight request that ends in a ready-to-send email or a phone call. No backend. */
export function BookFlight() {
  const [step, setStep] = useState(0);
  const [goal, setGoal] = useState<string>("curious");
  const [pickDays, setPickDays] = useState<string[]>([]);
  const [pickTimes, setPickTimes] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const toggle = (list: string[], set: (v: string[]) => void, v: string) => set(list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);
  const goalText = goals.find(([k]) => k === goal)?.[1] ?? "";

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [
      `Hi Yvonne,`,
      ``,
      `I'd like to schedule a discovery flight.`,
      ``,
      `Name: ${name}`,
      phone ? `Phone: ${phone}` : "",
      `Goal: ${goalText}`,
      pickDays.length ? `Days that work: ${pickDays.join(", ")}` : "",
      pickTimes.length ? `Times that work: ${pickTimes.join(", ")}` : "",
      note ? `\n${note}` : "",
    ].filter((l) => l !== "").join("\n");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(`Discovery flight request: ${name}`)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className={s.book} onSubmit={send} aria-labelledby="book-title">
      <div className={s.bookTop}>
        <p id="book-title" className={s.bookTitle}>Request your discovery flight</p>
        <ol className={s.steps} aria-label="Progress">
          {["Goal", "When", "You"].map((t, j) => (
            <li key={t} className={j === step ? s.stepOn : j < step ? s.stepDone : ""} aria-current={j === step ? "step" : undefined}>
              <span>{j + 1}</span>{t}
            </li>
          ))}
        </ol>
      </div>

      {step === 0 && (
        <fieldset className={s.fs}>
          <legend>What brings you to the airport?</legend>
          <div className={s.goalGrid}>
            {goals.map(([k, label]) => (
              <label key={k} className={`${s.goal} ${goal === k ? s.goalOn : ""}`}>
                <input type="radio" name="goal" value={k} checked={goal === k} onChange={() => setGoal(k)} />
                {label}
              </label>
            ))}
          </div>
        </fieldset>
      )}

      {step === 1 && (
        <fieldset className={s.fs}>
          <legend>When could you fly? <span>(open {contact.hours})</span></legend>
          <div className={s.chips} role="group" aria-label="Days">
            {days.map((d) => (
              <button key={d} type="button" aria-pressed={pickDays.includes(d)} className={`${s.chip} ${pickDays.includes(d) ? s.chipOn : ""}`} onClick={() => toggle(pickDays, setPickDays, d)}>{d}</button>
            ))}
          </div>
          <div className={s.chips} role="group" aria-label="Times">
            {times.map((t) => (
              <button key={t} type="button" aria-pressed={pickTimes.includes(t)} className={`${s.chip} ${s.chipWide} ${pickTimes.includes(t) ? s.chipOn : ""}`} onClick={() => toggle(pickTimes, setPickTimes, t)}>{t}</button>
            ))}
          </div>
        </fieldset>
      )}

      {step === 2 && (
        <fieldset className={s.fs}>
          <legend>Where should Yvonne reach you?</legend>
          <div className={s.fields}>
            <label><span>Name</span><input required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" /></label>
            <label><span>Phone</span><input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" autoComplete="tel" /></label>
            <label className={s.full}><span>Anything else? <em>(optional)</em></span><textarea rows={2} value={note} onChange={(e) => setNote(e.target.value)} placeholder="Experience so far, questions, who's coming along…" /></label>
          </div>
        </fieldset>
      )}

      <div className={s.bookNav}>
        {step > 0 ? <button type="button" className={`${s.btn} ${s.btnGhostDark}`} onClick={() => setStep(step - 1)}>Back</button> : <a href={contact.tel} className={s.bookCall}>or call {contact.phone}</a>}
        {step < 2
          ? <button type="button" className={`${s.btn} ${s.btnCoral}`} onClick={() => setStep(step + 1)}>Continue</button>
          : <button type="submit" className={`${s.btn} ${s.btnCoral}`}>Send to Yvonne</button>}
      </div>
      <p className={s.bookFine}>Opens your email app with everything filled in. Nothing is sent until you hit send.</p>
    </form>
  );
}

const filters: [Shot["kind"] | "all", string][] = [["all", "All"], ["solo", "First solos"], ["private", "New private pilots"], ["discovery", "Discovery & first flights"]];

export function Gallery() {
  const [f, setF] = useState<(typeof filters)[number][0]>("all");
  const shown = gallery.filter((g) => f === "all" || g.kind === f);
  return (
    <div>
      <div className={s.filters} role="group" aria-label="Filter photos">
        {filters.map(([k, label]) => (
          <button key={k} type="button" aria-pressed={f === k} className={`${s.filter} ${f === k ? s.filterOn : ""}`} onClick={() => setF(k)}>
            {label} <span>{k === "all" ? gallery.length : gallery.filter((g) => g.kind === k).length}</span>
          </button>
        ))}
      </div>
      <ul className={s.wall}>
        {shown.map((g) => (
          <li key={g.src} className={s.photo}>
            <img src={img(g.src)} alt={g.caption} loading="lazy" />
            <span>{g.caption}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Reviews() {
  const [i, setI] = useState(0);
  const r = reviews[i];
  const go = (d: number) => setI((i + d + reviews.length) % reviews.length);
  return (
    <div className={s.reviews}>
      <figure className={s.review} key={r.name} aria-live="polite">
        <span className={s.reviewTag}>{r.tag}</span>
        <blockquote>
          <p className={s.reviewHead}>&ldquo;{r.headline}&rdquo;</p>
          <p>{r.body}</p>
        </blockquote>
        <figcaption>{r.name}</figcaption>
      </figure>
      <div className={s.reviewNav}>
        <button type="button" onClick={() => go(-1)} aria-label="Previous review">←</button>
        <div className={s.dots} role="group" aria-label="Choose a review">
          {reviews.map((x, j) => (
            <button key={x.name} type="button" aria-label={`Review from ${x.name}`} aria-pressed={i === j} className={i === j ? s.dotOn : ""} onClick={() => setI(j)} />
          ))}
        </div>
        <button type="button" onClick={() => go(1)} aria-label="Next review">→</button>
      </div>
    </div>
  );
}
