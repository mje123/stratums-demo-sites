// Clearflight Aviation (clearflightaviation.com): redesign concept by Stratum
// Facts are from clearflightaviation.com; photos are the school's own, copied into /public/clear-flight.
// The partner emblems are Hobe Sound Bible College's and Missionary Flights International's, as shown on their site.
import { Epilogue, Spline_Sans } from "next/font/google";
import s from "./styles.module.css";
import { Checklist, CostBoard, Inquiry, Nav, Reveal, Wordmark } from "./client";

const display = Epilogue({ subsets: ["latin"], weight: ["500", "700", "800"], style: ["normal", "italic"], variable: "--cf-display" });
const sans = Spline_Sans({ subsets: ["latin"], variable: "--cf-sans" });

export const metadata = {
  title: "Clearflight Aviation | Flight Training on Florida's Treasure Coast, Fort Pierce",
  description: "Christian-owned Part 61 flight school in Fort Pierce, FL. Introductory flights, private pilot, CFI and recurrent training with James Howard, CFII/MEI/ATP.",
};

const img = (n: string, ext = "jpg") => `/clear-flight/${n}.${ext}`;
const contact = {
  phone: "(772) 485-4189",
  tel: "tel:+17724854189",
  email: "clearflight@gmail.com",
  mailto: (subject: string) => `mailto:clearflight@gmail.com?subject=${encodeURIComponent(subject)}`,
  form: "https://docs.google.com/forms/d/e/1FAIpQLSesD9xmZk45HPF_fBaNy54mggaVfx6OgoqOhCmg_28mKDxe8w/viewform",
  address: ["3180 Airmans Drive", "Fort Pierce, FL 34946"],
  maps: "https://www.google.com/maps/search/?api=1&query=3180+Airmans+Drive+Fort+Pierce+FL+34946",
  embed: "https://maps.google.com/maps?q=3180%20Airmans%20Drive%2C%20Fort%20Pierce%2C%20FL%2034946&t=m&z=13&output=embed",
};

const programs = [
  {
    n: "01", title: "Introductory Flight", price: "Book a flight",
    body: "A first-time aspiring pilot, or exploring options along the Treasure Coast? An introductory flight is a great way to see whether Clearflight is the right fit for you.",
    href: "#contact",
  },
  {
    n: "02", title: "Private Pilot", price: "≈ $10,000",
    body: "Your Private Pilot certificate (ASEL), trained per hour or paid in bulk. The estimate is based on 40 hours, the FAA minimum.",
    href: "#costs",
  },
  {
    n: "03", title: "Become a CFI", price: "≈ 10 hrs flight",
    body: "Master the fundamentals of instruction and different learning styles, write lesson plans, and pass your expertise on to future aviators.",
    href: "#costs",
  },
  {
    n: "04", title: "Recurrent Training", price: "$195/hr dual",
    body: "Out of aviation for a while? About 3–5 hours of dual instruction to get you back up and flying again.",
    href: "#recurrent",
  },
];

export default function Clearflight() {
  return (
    <div id="top" className={`${s.root} ${display.variable} ${sans.variable}`}>
      <Nav phone={contact.phone} tel={contact.tel} />

      {/* HERO */}
      <section className={s.hero}>
        <img className={s.heroImg} src={img("ramp")} alt="A white and blue Cessna taxiing on the ramp under a clear sky" fetchPriority="high" />
        <div className={s.heroShade} />
        <div className={s.heroInner}>
          <p className={`${s.eyebrow} ${s.rise}`}>Fort Pierce · Florida&apos;s Treasure Coast · Part 61</p>
          <h1 className={`${s.heroTitle} ${s.rise}`} style={{ animationDelay: "120ms" }}>
            Clear skies.<br /><em>A higher calling.</em>
          </h1>
          <p className={`${s.heroLede} ${s.rise}`} style={{ animationDelay: "260ms" }}>
            Quality flight instruction along the beautiful Treasure Coast, from a Christian-owned school that trains pilots with a passion to use
            aviation to serve people in need.
          </p>
          <div className={`${s.ctas} ${s.rise}`} style={{ animationDelay: "400ms" }}>
            <a href="#contact" className={`${s.btn} ${s.btnCoral}`}>Book an Introductory Flight</a>
            <a href="#costs" className={`${s.btn} ${s.btnInk}`}>See Training Costs</a>
          </div>
        </div>
        <div className={`${s.heroBar} ${s.rise}`} style={{ animationDelay: "560ms" }}>
          {[["18+ yrs", "training pilots"], ["CFII · MEI · ATP", "your instructor"], ["≈ $10K", "private pilot estimate"], ["Part 61", "flight school"]].map(([k, v]) => (
            <div key={k}><strong>{k}</strong><span>{v}</span></div>
          ))}
        </div>
      </section>

      {/* MISSION */}
      <section id="mission" className={`${s.section} ${s.white}`}>
        <div className={`${s.wrap} ${s.mission}`}>
          <Reveal className={s.missionMedia}>
            <img src={img("crew")} alt="Four pilots in uniform standing in front of a Cessna and a hangar" loading="lazy" />
          </Reveal>
          <Reveal delay={120}>
            <p className={s.kicker}>Flight training with a purpose</p>
            <h2 className={s.h2}>Learn to fly. <em>Then go serve.</em></h2>
            <p className={s.lede}>
              Clearflight Aviation is a Christian-owned flight school that primarily trains people with a passion to use aviation to serve people in
              need, and it partners with two organizations that share that calling.
            </p>
            <div className={s.partners}>
              <div className={s.partner}>
                <img src={img("hsbc", "png")} alt="Hobe Sound Bible College emblem" loading="lazy" />
                <span><b>Hobe Sound Bible College</b>Partner</span>
              </div>
              <div className={s.partner}>
                <img src={img("mfi", "png")} alt="Missionary Flights International emblem" loading="lazy" />
                <span><b>Missionary Flights International</b>Partner</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRAINING */}
      <section id="training" className={`${s.section} ${s.aqua}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>Training</p>
              <h2 className={s.h2}>From first flight <em>to flight instructor.</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>Dual instruction in our planes or yours. Pick where you are today, and we&apos;ll plan the next step together.</p>
            </Reveal>
          </div>
          <div className={s.programs}>
            {programs.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className={s.program}>
                <a href={p.href}>
                  <span className={s.programNum}>{p.n}</span>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                  <span className={s.programPrice}>{p.price} <span aria-hidden>→</span></span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COSTS */}
      <section id="costs" className={`${s.section} ${s.white}`}>
        <div className={`${s.wrap} ${s.costs}`}>
          <Reveal>
            <p className={s.kicker}>Costs, up front</p>
            <h2 className={s.h2}>Every rate, <em>in plain sight.</em></h2>
            <p className={s.lede}>No guessing what flight training costs. These are the published rates for each program; training is available per hour or in bulk payment.</p>
            <div className={s.costPhotos}>
              <img src={img("cockpit")} alt="A pilot in the left seat reviewing a checklist with the panel ahead" loading="lazy" />
              <img src={img("jim-student")} alt="An instructor and a student going over a checklist in the cockpit" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <CostBoard />
          </Reveal>
        </div>
      </section>

      {/* RECURRENT */}
      <section id="recurrent" className={`${s.section} ${s.ink}`}>
        <div className={`${s.wrap} ${s.recurrent}`}>
          <Reveal>
            <p className={`${s.kicker} ${s.kickerLight}`}>Recurrent training</p>
            <h2 className={`${s.h2} ${s.h2Light}`}>Been away a while? <em>Let&apos;s get you back up.</em></h2>
            <p className={`${s.lede} ${s.ledeLight}`}>
              About 3–5 hours of dual flight instruction at $195 per hour, plus 1–2 hours of ground instruction at $45 per hour as needed.
            </p>
            <a href={contact.mailto("Recurrent training")} className={`${s.btn} ${s.btnCoral}`}>Plan My Refresher</a>
          </Reveal>
          <Reveal delay={120}>
            <Checklist />
          </Reveal>
        </div>
        <img src={img("plane-cutout", "png")} alt="" className={s.flyby} loading="lazy" />
      </section>

      {/* INSTRUCTOR */}
      <section id="instructor" className={`${s.section} ${s.sand}`}>
        <div className={`${s.wrap} ${s.instructor}`}>
          <Reveal className={s.instructorMedia}>
            <img src={img("jim")} alt="James Howard in uniform beside a Cessna" loading="lazy" />
            <span className={s.nameTag}><small>Owner / operator</small>James &ldquo;Jim&rdquo; Howard</span>
          </Reveal>
          <Reveal delay={120}>
            <p className={s.kicker}>Your instructor</p>
            <h2 className={s.h2}>A lifelong love of flying, <em>shaped by a calling.</em></h2>
            <p className={s.lede}>
              Jim has loved flying since he was a child and dreamed of joining the Air Force. God had other plans, calling him into missionary work in
              Africa for nine years. Back in Florida, he began teaching aviation classes at Hobe Sound Bible College alongside his flight school.
            </p>
            <p className={s.lede}>He has been training pilots for over 18 years, with a passion to see people follow God&apos;s call and succeed in ministry.</p>
            <div className={s.creds}>
              {[["CFII", "Instrument instructor"], ["MEI", "Multi-engine instructor"], ["ATP", "Airline transport pilot"], ["9 yrs", "Missionary work in Africa"]].map(([k, v]) => (
                <div key={k}><b>{k}</b><span>{v}</span></div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* GALLERY */}
      <section className={s.gallery} aria-label="Photos">
        {[
          ["in-flight", "Overhead on a clear day"],
          ["taxi", "On the ramp"],
          ["pilot-portrait", "Ready for the next lesson"],
          ["jim-wing", "Your instructor, Jim"],
        ].map(([src, cap], i) => (
          <Reveal key={src} delay={i * 80} className={s.shot}>
            <img src={img(src)} alt={cap} loading="lazy" />
            <span>{cap}</span>
          </Reveal>
        ))}
      </section>

      {/* CONTACT */}
      <section id="contact" className={`${s.section} ${s.contact}`}>
        <div className={`${s.wrap} ${s.contactInner}`}>
          <Reveal>
            <p className={`${s.kicker} ${s.kickerLight}`}>Contact Clearflight today</p>
            <h2 className={`${s.h2} ${s.h2Light}`}>Your first flight <em>starts with a call.</em></h2>
            <p className={`${s.lede} ${s.ledeLight}`}>Book an introductory flight, ask about training, or plan a refresher. Prefer a form? Use their online contact form.</p>
            <div className={s.ctas}>
              <a href={contact.tel} className={`${s.btn} ${s.btnCoral}`}>Call {contact.phone}</a>
              <a href={contact.form} target="_blank" rel="noreferrer" className={`${s.btn} ${s.btnGlass}`}>Online Contact Form</a>
            </div>
            <div className={s.contactCard}>
              <div><span>Visit</span><p><a href={contact.maps} target="_blank" rel="noreferrer">{contact.address[0]}<br />{contact.address[1]}</a></p></div>
              <div><span>Call</span><p><a href={contact.tel}>{contact.phone}</a></p></div>
              <div><span>Email</span><p><a href={`mailto:${contact.email}`}>{contact.email}</a></p></div>
            </div>
            <p className={s.visa}>Clearflight Aviation is a Part 61 flight school and can&apos;t offer foreign students visas.</p>
          </Reveal>
          <Reveal delay={120} className={s.contactSide}>
            <Inquiry email={contact.email} />
            <div className={s.map}>
              <iframe src={contact.embed} title="Map to Clearflight Aviation, 3180 Airmans Drive, Fort Pierce, FL" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </Reveal>
        </div>
        <footer className={`${s.wrap} ${s.footer}`}>
          <Wordmark light />
          <span>© {new Date().getFullYear()} Clearflight Aviation LLC · Fort Pierce, Florida</span>
          <span>Website concept by Stratum</span>
        </footer>
      </section>
    </div>
  );
}
