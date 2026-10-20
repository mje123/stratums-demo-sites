// Cypress College Flight Training (cypresscollegeflighttraining.com): redesign concept by Stratum
// Facts are from cypresscollegeflighttraining.com; photos are from the school's site, copied into /public/cypress-college.
import { Space_Grotesk, Inter } from "next/font/google";
import s from "./styles.module.css";
import { Nav, Reveal } from "./client";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--cy-display" });
const sans = Inter({ subsets: ["latin"], variable: "--cy-sans" });

export const metadata = {
  title: "Cypress College Flight Training | Pilot, Drone & Aviation Careers",
  description: "Simulator-based pilot training that can cut the cost of becoming a pilot by nearly $6,000. Pilot certificates, an A.S. in Commercial Pilot, and California's first community college UAS drone degree.",
};

const img = (n: string) => `/cypress-college/${n}.jpg`;
const contact = {
  phone: "714-484-7252",
  tel: "tel:+17144847252",
  email: "cypresscollegeflighttraining@gmail.com",
  mailto: (subject: string) => `mailto:cypresscollegeflighttraining@gmail.com?subject=${encodeURIComponent(subject)}`,
  facebook: "https://www.facebook.com/CypressCollegeFlightTraining/",
  instagram: "https://www.instagram.com/cypresscollegeflighttraining/",
  youtube: "https://www.youtube.com/channel/UCImFc6F1ufq9NicXRuz9qVQ",
};

const stats = [
  ["1967", "the year Cypress College began training pilots"],
  ["~$6K", "less to become a pilot, thanks to simulator training"],
  ["8+", "realistic flight simulators in the lab"],
  ["1st", "California community college with a UAS drone degree"],
];

const pathway = [
  { step: "Private Pilot", tag: "Certificate 1" },
  { step: "Instrument Pilot", tag: "Certificate 2" },
  { step: "Commercial Pilot", tag: "Certificate 3" },
  { step: "Advanced Pilot", tag: "Certificate 4" },
];

const simSkills = ["Basic flight skills", "Aircraft performance", "Flight maneuvers", "Situational awareness", "FAA exam prep", "Instrument procedures"];

const programs = [
  { img: "airliner", tag: "Pilot Program", title: "Fly for a living, or fly for fun.", body: "Ground training and flight simulation with instructors who currently work, or have worked extensively, with many of the leading airlines.", link: "#pathway" },
  { img: "drone", tag: "UAS / Drone", title: "The fastest-growing seat in aviation.", body: "Drone operations on land, in the air and in space: communications, propulsion and power, teaming, and FAA regulations, with college credit toward certificates, degrees and transfer.", link: "#contact" },
  { img: "attendant", tag: "Airline & Travel Careers", title: "Careers in the sky, at sea, and on land.", body: "From flight attendant to travel careers and cruise ships, the Aviation & Travel Careers department has a program for you.", link: "#contact" },
];

const PLANE = "M12 2c.8 0 1.4.7 1.4 1.6V9l7.6 4.4v2l-7.6-2.2v4.6l2.2 1.6V21L12 20l-3.6 1v-1.6l2.2-1.6v-4.6L3 15.4v-2L10.6 9V3.6C10.6 2.7 11.2 2 12 2z";

function Plane({ className }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} aria-hidden><path d={PLANE} fill="currentColor" /></svg>;
}

// Decorative cockpit instruments (no data): ticks, a needle and a label
function Gauge({ label, kind = "dial" }: { label: string; kind?: "dial" | "attitude" }) {
  const ticks = Array.from({ length: 36 }, (_, i) => i * 10);
  return (
    <svg viewBox="0 0 120 120" className={s.gauge} aria-hidden>
      <defs>
        <clipPath id={`face-${label}`}><circle cx="60" cy="60" r="46" /></clipPath>
      </defs>
      <circle cx="60" cy="60" r="56" className={s.gBezel} />
      {kind === "attitude" ? (
        <g clipPath={`url(#face-${label})`}>
          <g className={s.gHorizon}>
            <rect x="-20" y="-20" width="160" height="80" fill="#2f7fd0" />
            <rect x="-20" y="60" width="160" height="80" fill="#8a5a2b" />
            <line x1="-20" y1="60" x2="140" y2="60" stroke="#fff" strokeWidth="1.5" />
            {[-16, -8, 8, 16].map((d) => <line key={d} x1={d % 16 ? 52 : 46} x2={d % 16 ? 68 : 74} y1={60 + d} y2={60 + d} stroke="#fff" strokeWidth="1" />)}
          </g>
        </g>
      ) : (
        <g>
          <circle cx="60" cy="60" r="46" className={s.gFace} />
          {ticks.map((t) => (
            <line key={t} x1="60" y1="16" x2="60" y2={t % 30 ? 21 : 25} className={s.gTick} transform={`rotate(${t} 60 60)`} />
          ))}
          <path d="M60 60 L60 22" className={s.gNeedle} />
        </g>
      )}
      {kind === "attitude" && <path d="M38 62 H52 L56 66 L60 62 L64 66 L68 62 H82" className={s.gWings} />}
      <circle cx="60" cy="60" r="3.5" fill="#ffb547" />
      <text x="60" y="86" className={s.gLabel}>{label}</text>
    </svg>
  );
}

export default function CypressCollege() {
  return (
    <div id="top" className={`${s.root} ${display.variable} ${sans.variable}`}>
      <Nav phone={contact.phone} tel={contact.tel} />

      {/* HERO */}
      <section className={s.hero}>
        <img className={s.heroImg} src={img("pilot")} alt="A smiling student pilot wearing a headset in the cockpit of a small airplane" fetchPriority="high" />
        <div className={s.heroShade} />
        <div className={s.heroInner}>
          <p className={`${s.chip} ${s.rise}`}>Aviation &amp; Travel Careers · Greater O.C./L.A.</p>
          <h1 className={`${s.heroTitle} ${s.rise}`} style={{ animationDelay: "120ms" }}>
            Get ready to<br /><span>go places.</span>
          </h1>
          <p className={`${s.heroLede} ${s.rise}`} style={{ animationDelay: "260ms" }}>
            State-of-the-art simulators, a proven curriculum, and instructors with real airline connections. Start your path to the flight deck
            for thousands less than a traditional flight school.
          </p>
          <div className={`${s.ctas} ${s.rise}`} style={{ animationDelay: "400ms" }}>
            <a href={contact.mailto("Schedule a visit")} className={`${s.btn} ${s.btnPrimary}`}>Schedule a Visit</a>
            <a href="#pathway" className={`${s.btn} ${s.btnGlass}`}>See the Pilot Pathway</a>
          </div>
        </div>
        <div className={`${s.stats} ${s.rise}`} style={{ animationDelay: "560ms" }}>
          {stats.map(([n, l]) => (
            <div key={n} className={s.stat}><strong>{n}</strong><span>{l}</span></div>
          ))}
        </div>
      </section>

      {/* RUNWAY */}
      <div className={s.runway} aria-hidden>
        <div className={s.threshold}>{Array.from({ length: 8 }, (_, i) => <i key={i} />)}</div>
        <span className={s.rwyNum}>CYPRESS</span>
        <div className={s.centerline} />
        <Plane className={s.rwyPlane} />
      </div>

      {/* PATHWAY */}
      <section id="pathway" className={`${s.section} ${s.light}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>Your flight plan</p>
              <h2 className={s.h2}>Two kinds of school. <span>One clear route.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>
                Becoming a pilot takes ground school and flight lessons. Cypress College covers the ground school with four stacked certificates,
                then has the resources, instructors and partnerships to get you actually flying, at a lower cost than most flight schools.
              </p>
            </Reveal>
          </div>
          <ol className={s.route}>
            <Plane className={s.routePlane} />
            {pathway.map((p, i) => (
              <Reveal key={p.step} delay={i * 90} className={s.leg}>
                <span className={s.legDot}>{i + 1}</span>
                <span className={s.legTag}>{p.tag}</span>
                <h3>{p.step}</h3>
              </Reveal>
            ))}
          </ol>
          <div className={s.routeCards}>
            <Reveal className={s.routeCard}>
              <p className={s.routeLabel}>Certificates</p>
              <p className={s.routeBig}>31–35 <small>units</small></p>
              <p>All four pilot certificates, earned on average in about 1 to 3 semesters.</p>
            </Reveal>
            <Reveal delay={100} className={`${s.routeCard} ${s.routeFeature}`}>
              <p className={s.routeLabel}>For a greater edge</p>
              <p className={s.routeBig}>A.S. <small>Commercial Pilot</small></p>
              <p>The Advanced Certificate plus general education, in about 4 to 5 semesters total.</p>
            </Reveal>
            <Reveal delay={200} className={s.routeCard}>
              <p className={s.routeLabel}>Then</p>
              <p className={s.routeBig}>Fly <small>for real</small></p>
              <p>Flight lessons through Cypress College&apos;s instructors and partnerships, with the career goal of a six-figure salary.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SIMULATORS */}
      <section id="sims" className={`${s.section} ${s.dark}`}>
        <div className={`${s.wrap} ${s.sims}`}>
          <Reveal className={s.simMedia}>
            <img src={img("sim")} alt="Students at the controls in a flight simulator" loading="lazy" />
            <span className={s.simBadge}>Free for enrolled flight students</span>
          </Reveal>
          <Reveal delay={120}>
            <p className={`${s.kicker} ${s.kickerLight}`}>The simulation lab</p>
            <h2 className={`${s.h2} ${s.h2Light}`}>Practice until it&apos;s <span>second nature.</span></h2>
            <p className={`${s.lede} ${s.ledeLight}`}>
              Over eight realistic flight simulators for every level, from private to instrument, commercial and beyond. The lab now includes
              full-immersion simulation for electric aircraft and Virtual Reality training. It lowers the cost of becoming a pilot, improves safety,
              and prepares you for FAA examinations.
            </p>
            <ul className={s.skills}>{simSkills.map((k) => <li key={k}>{k}</li>)}</ul>
            <div className={s.simTags}>
              <span>Electric aircraft simulation</span>
              <span>Virtual Reality</span>
              <span>Open lab for enrolled students</span>
            </div>
            <div className={s.sixPack} aria-hidden>
              <Gauge label="ASI" /><Gauge label="ATT" kind="attitude" /><Gauge label="ALT" />
              <Gauge label="TC" /><Gauge label="HDG" /><Gauge label="VSI" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className={`${s.section} ${s.light}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>Programs</p>
              <h2 className={s.h2}>From the flight deck <span>to the cabin.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>Aviation certificates, a pilot degree, UAV drone certificates and degree, and airline and travel careers, all in one department.</p>
            </Reveal>
          </div>
          <div className={s.programs}>
            {programs.map((p, i) => (
              <Reveal key={p.tag} delay={i * 100} className={s.program}>
                <a href={p.link}>
                  <div className={s.programImg}><img src={img(p.img)} alt="" loading="lazy" /></div>
                  <div className={s.programBody}>
                    <span className={s.programTag}>{p.tag}</span>
                    <h3>{p.title}</h3>
                    <p>{p.body}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal className={s.uas}>
            <p className={s.uasTitle}>The UAS program has three goals:</p>
            <ol>
              <li>Prepare you to succeed in the competitive hiring process</li>
              <li>Prepare you to pass the rigorous training requirements</li>
              <li>Provide college credit toward certificates, degrees and transfer</li>
            </ol>
          </Reveal>
        </div>
      </section>

      {/* GO FLY */}
      <section className={s.goFly}>
        <img src={img("takeoff")} alt="An airplane climbing out over the runway at sunset" className={s.goFlyImg} loading="lazy" />
        <div className={s.goFlyShade} />
        <div className={`${s.wrap} ${s.goFlyInner}`}>
          <Reveal className={s.goFlyCard}>
            <p className={`${s.kicker} ${s.kickerLight}`}>Ground school, then the real thing</p>
            <h2 className={`${s.h2} ${s.h2Light}`}>Then you <span>actually go fly.</span></h2>
            <p className={`${s.lede} ${s.ledeLight}`}>
              After ground school, Cypress College has the resources, instructors and partnerships to help you get in the air, at a lower cost than
              most flight schools offer.
            </p>
            <ul className={s.checklist}>
              <li>Ground school certificates</li>
              <li>Simulator practice, free for enrolled students</li>
              <li>Flight lessons through instructors &amp; partners</li>
              <li>Professional pilot career path</li>
            </ul>
            <a href={contact.mailto("Getting started with flight training")} className={`${s.btn} ${s.btnPrimary}`}>Start Your Flight Plan</a>
          </Reveal>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className={s.community}>
        <img src={img("campus")} alt="Aerial view of the Cypress College campus during a commencement ceremony" className={s.communityImg} loading="lazy" />
        <div className={s.communityShade} />
        <div className={`${s.wrap} ${s.communityInner}`}>
          <Reveal>
            <p className={`${s.kicker} ${s.kickerLight}`}>Welcome aboard</p>
            <blockquote className={s.quote}>A community of passionate aviators, <span>educators, and learners.</span></blockquote>
            <p className={`${s.lede} ${s.ledeLight}`}>Skilled instructors with inside connections in the industry, helping you gain a critical edge and land a fulfilling job in aviation and travel.</p>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={`${s.section} ${s.dark} ${s.contact}`}>
        <div className={`${s.wrap} ${s.contactInner}`}>
          <Reveal>
            <p className={`${s.kicker} ${s.kickerLight}`}>Visit &amp; tour</p>
            <h2 className={s.contactTitle}>See the campus. <span>Try a simulator.</span></h2>
            <p className={`${s.lede} ${s.ledeLight}`}>We encourage questions and scheduled tours. Email us or message us on Facebook to schedule your visit. We&apos;re excited for you to see everything Cypress College has to offer.</p>
            <div className={s.ctas}>
              <a href={contact.mailto("Schedule a visit")} className={`${s.btn} ${s.btnPrimary}`}>Schedule a Visit</a>
              <a href={contact.tel} className={`${s.btn} ${s.btnGlass}`}>Call {contact.phone}</a>
            </div>
          </Reveal>
          <Reveal delay={120} className={s.contactCard}>
            <img src={img("students")} alt="Cypress College students on the campus lawn" loading="lazy" />
            <div className={s.contactRows}>
              <div><span>Call</span><p><a href={contact.tel}>{contact.phone}</a></p></div>
              <div><span>Email</span><p><a href={`mailto:${contact.email}`}>{contact.email}</a></p></div>
              <div><span>Follow</span><p><a href={contact.instagram} target="_blank" rel="noreferrer">Instagram</a> · <a href={contact.facebook} target="_blank" rel="noreferrer">Facebook</a> · <a href={contact.youtube} target="_blank" rel="noreferrer">YouTube</a></p></div>
            </div>
          </Reveal>
        </div>
        <footer className={`${s.wrap} ${s.footer}`}>
          <span>© {new Date().getFullYear()} Cypress College Flight Training · Aviation &amp; Travel Careers</span>
          <span>Website concept by Stratum</span>
        </footer>
      </section>
    </div>
  );
}
