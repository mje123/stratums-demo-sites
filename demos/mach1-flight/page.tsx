// Mach 1 Flight Training (mach1flighttraining.com): redesign concept by Stratum
// Facts are from mach1flighttraining.com; photos and logo are the school's own, copied into /public/mach1-flight.
import { Chakra_Petch, Exo_2 } from "next/font/google";
import s from "./styles.module.css";
import { Estimator, Inquiry, Nav, Reveal } from "./client";

const display = Chakra_Petch({ subsets: ["latin"], weight: ["500", "600", "700"], style: ["normal", "italic"], variable: "--m1-display" });
const sans = Exo_2({ subsets: ["latin"], variable: "--m1-sans" });

export const metadata = {
  title: "Mach 1 Flight Training | Part 61 Flight School in Loveland, Colorado",
  description: "Private, Sport, Commercial and Instrument training in a Cessna 172P at Northern Colorado Regional Airport. $178/hr wet, $68/hr instruction, no fuel surcharges.",
};

const img = (n: string) => `/mach1-flight/${n}.jpg`;
const contact = {
  phone: "970-966-2632",
  tel: "tel:+19709662632",
  email: "mbruehl@mach1flighttraining.com",
  mailto: (subject: string) => `mailto:mbruehl@mach1flighttraining.com?subject=${encodeURIComponent(subject)}`,
  address: "5280 Northrop St., Loveland, CO",
  maps: "https://www.google.com/maps/search/?api=1&query=5280+Northrop+St+Loveland+CO",
  facebook: "https://www.facebook.com/profile.php?id=61586254334182",
  linkedin: "https://www.linkedin.com/company/mach-1-flight-training",
};

const programs = [
  { code: "PPL", title: "Private Pilot", body: "Your license to fly. Ground school plus in-flight training, planned around your schedule and budget." },
  { code: "SPL", title: "Sport Pilot", body: "A streamlined path into the air, built from the same mix of ground school and flight training." },
  { code: "IR", title: "Instrument Rating", body: "Fly by reference to instruments, on an aircraft with a modern Garmin and Aspen panel." },
  { code: "CPL", title: "Commercial Pilot", body: "The certificate that lets you fly for hire, the next step toward an aviation career." },
  { code: "IPC", title: "Instrument Proficiency Check", body: "Show proficiency with instrument flying and stay legal to fly IFR." },
  { code: "FR", title: "Flight Review", body: "Demonstrate your proficiency and keep flying with a flight review." },
];

const panel = ["Garmin GNS 430W", "Aspen Evolution", "ADS-B In / Out", "Garmin GTX 330"];

const promises = [
  ["Easy", "A clear plan to finish your training within your schedule and budget."],
  ["Enjoyable", "We take the time to understand your learning style and keep you encouraged."],
  ["Affordable", "Some of the most affordable rates at Northern Colorado Regional Airport."],
  ["Safe", "Bespoke training delivered with consideration and safety, every flight."],
];

export default function Mach1() {
  return (
    <div id="top" className={`${s.root} ${display.variable} ${sans.variable}`}>
      <Nav phone={contact.phone} tel={contact.tel} />

      {/* HERO */}
      <section className={s.hero}>
        <img className={s.heroImg} src={img("in-flight")} alt="Mach 1 Flight Training's red and white Cessna 172 in flight against a blue sky" fetchPriority="high" />
        <div className={s.heroShade} />
        <div className={s.shock} aria-hidden>{Array.from({ length: 5 }, (_, i) => <i key={i} />)}</div>
        <div className={s.heroInner}>
          <p className={`${s.eyebrow} ${s.rise}`}><span>FAA Part 61</span> Loveland · Northern Colorado</p>
          <h1 className={`${s.heroTitle} ${s.rise}`} style={{ animationDelay: "120ms" }}>
            Learn to fly<br /><em>at Mach 1.</em>
          </h1>
          <p className={`${s.heroLede} ${s.rise}`} style={{ animationDelay: "260ms" }}>
            Bespoke flight training for new and experienced pilots: easy, enjoyable, affordable and safe. One aircraft, one plan, built around you.
          </p>
          <div className={`${s.ctas} ${s.rise}`} style={{ animationDelay: "400ms" }}>
            <a href="#contact" className={`${s.btn} ${s.btnGold}`}>Book a Discovery Flight</a>
            <a href={contact.tel} className={`${s.btn} ${s.btnGhost}`}>Call {contact.phone}</a>
          </div>
        </div>
        <div className={`${s.hud} ${s.rise}`} style={{ animationDelay: "560ms" }}>
          <div><small>Aircraft</small><b>$178<span>/hr wet</span></b></div>
          <div><small>Instructor</small><b>$68<span>/hr</span></b></div>
          <div><small>Fuel surcharge</small><b>$0</b></div>
          <div><small>Founded</small><b>2025</b></div>
        </div>
      </section>

      {/* PROMISE */}
      <section className={`${s.section} ${s.light}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>Why Mach 1</p>
              <h2 className={s.h2}>Training built <em>around you.</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>
                Mach 1 Flight Training was founded in 2025 to meet the growing demand for high-quality flight training in Northern Colorado. As a Part 61
                school, we can adapt the curriculum to fit the way you learn.
              </p>
            </Reveal>
          </div>
          <div className={s.promises}>
            {promises.map(([t, d], i) => (
              <Reveal key={t} delay={i * 80} className={s.promise}>
                <span className={s.chev} aria-hidden>{"›".repeat(i + 1)}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING */}
      <section id="training" className={`${s.section} ${s.dark}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={`${s.kicker} ${s.kickerLight}`}>Flight training</p>
              <h2 className={`${s.h2} ${s.h2Light}`}>From first lesson <em>to flying for hire.</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={`${s.lede} ${s.ledeLight}`}>Every program combines ground school with hands-on flight training, whether you&apos;re just starting out or have been flying for years.</p>
            </Reveal>
          </div>
          <div className={s.programs}>
            {programs.map((p, i) => (
              <Reveal key={p.code} delay={(i % 3) * 80} className={s.program}>
                <span className={s.code}>{p.code}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AIRCRAFT */}
      <section id="aircraft" className={`${s.section} ${s.light}`}>
        <div className={`${s.wrap} ${s.aircraft}`}>
          <Reveal className={s.acPhotos}>
            <img className={s.acMain} src={img("ramp-golden")} alt="The Cessna 172P Skyhawk II on the ramp" loading="lazy" />
            <img src={img("panel")} alt="The Cessna's updated instrument panel" loading="lazy" />
            <img src={img("tail")} alt="The tail of Cessna N65197" loading="lazy" />
          </Reveal>
          <Reveal delay={120}>
            <p className={s.kicker}>The aircraft</p>
            <h2 className={s.h2}>Cessna 172P <em>Skyhawk II.</em></h2>
            <p className={s.lede}>Meticulously maintained and the perfect learning platform for new and experienced students, with an updated panel.</p>
            <div className={s.tailCard}>
              <div className={s.tailTop}><span>Registration</span><b>N65197</b></div>
              <div className={s.tailGrid}>
                <div><small>Model</small><b>C172P</b></div>
                <div><small>Seats</small><b>4</b></div>
                <div><small>Rental</small><b>$178/hr wet</b></div>
              </div>
              <p className={s.tailHead}>Avionics</p>
              <ul className={s.avionics}>{panel.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GALLERY */}
      <section className={s.gallery} aria-label="Photos of the aircraft">
        {[["nose-on", "Nose on"], ["profile", "In profile"], ["ramp-dusk", "Ramp at dusk"], ["ramp-wide", "Ready to fly"]].map(([src, cap], i) => (
          <Reveal key={src} delay={i * 80} className={s.shot}>
            <img src={img(src)} alt={`Mach 1's Cessna 172: ${cap.toLowerCase()}`} loading="lazy" />
            <span>{cap}</span>
          </Reveal>
        ))}
      </section>

      {/* RATES */}
      <section id="rates" className={`${s.section} ${s.dark}`}>
        <div className={`${s.wrap} ${s.rates}`}>
          <div>
            <Reveal>
              <p className={`${s.kicker} ${s.kickerLight}`}>Current rates</p>
              <h2 className={`${s.h2} ${s.h2Light}`}>Transparent pricing. <em>No fuel surcharges.</em></h2>
              <p className={`${s.lede} ${s.ledeLight}`}>
                We strive to keep training cost-efficient. Our rates are some of the most affordable at Northern Colorado Regional Airport. Compare them
                with the State of Flight Training 2025 report.
              </p>
            </Reveal>
            <div className={s.rateCards}>
              <Reveal className={s.rateCard}><small>Aircraft rental</small><b>$178</b><span>per hour, wet</span></Reveal>
              <Reveal delay={100} className={s.rateCard}><small>Instructor</small><b>$68</b><span>per hour</span></Reveal>
            </div>
            <Reveal className={s.badges}>
              <span>Low cost</span><span>No fuel surcharges</span><span>Transparent pricing</span>
            </Reveal>
            <a className={s.source} href="https://flighttrainingcentral.com/2025/03/redbirds-2025-flight-training-survey-costs-and-completion-time-hold-steady/" target="_blank" rel="noreferrer">
              State of Flight Training 2025 report ↗
            </a>
          </div>
          <Reveal delay={120}>
            <Estimator />
          </Reveal>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className={`${s.section} ${s.light}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>Meet the team</p>
              <h2 className={s.h2}>A flight school dedicated <em>to your success.</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>We want you to finish your training and share your success story with others.</p>
            </Reveal>
          </div>
          <div className={s.team}>
            <Reveal className={s.member}>
              <img src={img("ethan")} alt="Ethan, Chief Instructor, with the Cessna 172" loading="lazy" />
              <div className={s.memberBody}>
                <span className={s.role}>Chief Instructor · CFI/I</span>
                <h3>Ethan</h3>
                <p>Ethan started his flight journey in 2015 as a Civil Air Patrol cadet and has been passionate about flying ever since. He trained at a local flight school and at Aims Community College, and he&apos;ll work with you to keep your training safe and affordable.</p>
              </div>
            </Reveal>
            <Reveal delay={120} className={s.member}>
              <img src={img("matthew")} alt="Matthew Bruehl, owner, in the cockpit wearing a headset" loading="lazy" />
              <div className={s.memberBody}>
                <span className={s.role}>Owner</span>
                <h3>Matthew Bruehl</h3>
                <p>Mach 1 Flight Training exists to give aspiring and experienced pilots bespoke training opportunities, delivered with consideration and safety. Reach Matthew directly with any questions.</p>
                <a href={`mailto:${contact.email}`} className={s.memberLink}>{contact.email}</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={s.contact}>
        <img src={img("ramp-dusk")} alt="" className={s.contactImg} loading="lazy" />
        <div className={s.contactShade} />
        <div className={`${s.wrap} ${s.contactInner}`}>
          <Reveal>
            <p className={`${s.kicker} ${s.kickerLight}`}>Let&apos;s chat</p>
            <h2 className={s.contactTitle}>Take the first step. <em>Begin your journey.</em></h2>
            <p className={`${s.lede} ${s.ledeLight}`}>Contact us to arrange a visit, a discovery flight or lessons.</p>
            <div className={s.ctas}>
              <a href={contact.tel} className={`${s.btn} ${s.btnGold}`}>Call {contact.phone}</a>
              <a href={contact.mailto("Discovery flight")} className={`${s.btn} ${s.btnGhost}`}>Email Us</a>
            </div>
            <div className={s.contactCard}>
              <div><span>Visit</span><p><a href={contact.maps} target="_blank" rel="noreferrer">{contact.address}</a></p></div>
              <div><span>Email</span><p><a href={`mailto:${contact.email}`}>{contact.email}</a></p></div>
              <div><span>Follow</span><p><a href={contact.facebook} target="_blank" rel="noreferrer">Facebook</a> · <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></p></div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Inquiry email={contact.email} />
          </Reveal>
        </div>
        <footer className={`${s.wrap} ${s.footer}`}>
          <span>© {new Date().getFullYear()} Mach 1 Flight Training · Loveland, Colorado</span>
          <span>Website concept by Stratum</span>
        </footer>
      </section>
    </div>
  );
}
