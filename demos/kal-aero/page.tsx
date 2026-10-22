// Kal-Aero Flight Instruction (kal-aero.com): redesign concept by Stratum
// Facts are from kal-aero.com. Their site has no photos of its own (only a blurred
// template background), so this concept is built around their propeller logo, redrawn as vector.
import { Oswald, Source_Sans_3 } from "next/font/google";
import s from "./styles.module.css";
import { Inquiry, Nav, Planner, Reveal } from "./client";
import { LogoBadge, Propeller } from "./logo";

const display = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--ka-display" });
const sans = Source_Sans_3({ subsets: ["latin"], variable: "--ka-sans" });

export const metadata = {
  title: "Kal-Aero Flight Instruction | Affordable Flight Training at Kalamazoo/Battle Creek International",
  description: "Private, instrument, commercial and CFI training in Cessna 172s at Kalamazoo/Battle Creek International Airport. $175/hr wet, $60/hr instruction, $150 introductory flight.",
};

const PLANE = 175;
const CFI = 60;
const contact = {
  phone: "(269) 870-7643",
  tel: "tel:+12698707643",
  email: "Info@Kal-Aero.com",
  mailto: (subject: string) => `mailto:Info@Kal-Aero.com?subject=${encodeURIComponent(subject)}`,
  facebook: "https://www.facebook.com/Kal-Aero-Flight-Instruction-1412075882385571/",
  address: ["2422 E Kilgore Rd", "Portage, MI 49002"],
  maps: "https://www.google.com/maps/search/?api=1&query=2422+E+Kilgore+Rd+Portage+MI+49002",
  embed: "https://maps.google.com/maps?q=2422%20E%20Kilgore%20Rd%2C%20Portage%2C%20MI%2049002&t=m&z=13&output=embed",
};

const noGadgets = [
  ["No headset? No problem.", "Headsets are available to borrow, so you don't have to buy one before your first lesson."],
  ["No iPad required.", "Great to have, not necessary. You can learn to fly our Cessna 172s without expensive gadgets."],
  ["No wasted spend.", "The syllabus is designed to maximize learning without spending extra on unnecessary expenses."],
];

const introSteps = [
  ["Meet your CFI", "Sit down with one of our Certified Flight Instructors and get your questions answered."],
  ["Pre-flight", "Walk around the aircraft together and learn how a pilot inspects it before every flight."],
  ["Fly", "Normal operations, in the air, in a Cessna 172."],
  ["Post-flight", "Wrap up, debrief, and get set on the right track to success."],
];

const path = [
  { code: "01", title: "Introductory Flight", tag: "Start here", body: "An intro to Kal-Aero's operations and the aviation industry, suitable for all ages and designed to start you on the right foot." },
  { code: "02", title: "Private Pilot", tag: "Zero to licensed", body: "Learn the basics of flight and what it means to be Pilot in Command, from zero experience to your Private Pilot License." },
  { code: "03", title: "Instrument Rating", tag: "Fly more days", body: "Fly in instrument meteorological conditions and file IFR flight plans. More flying days, and a better well-rounded pilot." },
  { code: "04", title: "Commercial Pilot", tag: "Passion to career", body: "The step required to fly professionally and make the cockpit your office, tailored to build on the experience you bring." },
  { code: "05", title: "Certified Flight Instructor", tag: "Train the next generation", body: "A fast-paced program with real-world teaching experience to pass your CFI checkride, without leaving the state." },
];

export default function KalAero() {
  return (
    <div id="top" className={`${s.root} ${display.variable} ${sans.variable}`}>
      <Nav phone={contact.phone} tel={contact.tel} />

      {/* HERO */}
      <section className={s.hero}>
        <div className={s.beacon} aria-hidden />
        <div className={s.grid} aria-hidden />
        <div className={s.heroInner}>
          <div className={s.heroCopy}>
            <p className={`${s.eyebrow} ${s.rise}`}>Kalamazoo/Battle Creek International Airport · Portage, MI</p>
            <h1 className={`${s.heroTitle} ${s.rise}`} style={{ animationDelay: "120ms" }}>
              The best training.<br /><span>The sensible price.</span>
            </h1>
            <p className={`${s.heroLede} ${s.rise}`} style={{ animationDelay: "260ms" }}>
              Kal-Aero Flight Instruction is dedicated to giving the best and most affordable flight training available, from your first
              introductory flight to your CFI checkride, in Cessna 172s.
            </p>
            <div className={`${s.ctas} ${s.rise}`} style={{ animationDelay: "400ms" }}>
              <a href="#intro" className={`${s.btn} ${s.btnBeacon}`}>Book a $150 Intro Flight</a>
              <a href="#rates" className={`${s.btn} ${s.btnGhost}`}>See the Rates</a>
            </div>
          </div>
          <div className={`${s.heroLogo} ${s.rise}`} style={{ animationDelay: "300ms" }}>
            <LogoBadge />
          </div>
        </div>
        <div className={`${s.panel} ${s.rise}`} style={{ animationDelay: "560ms" }}>
          {[["Aircraft", `$${PLANE}`, "/hr wet, fuel included"], ["Instructor", `$${CFI}`, "/hr flight or ground"], ["Intro flight", "$150", "45 minutes"], ["Fleet", "C172", "Cessna 172s"]].map(([k, v, u]) => (
            <div key={k} className={s.gauge}><small>{k}</small><b>{v}</b><span>{u}</span></div>
          ))}
        </div>
      </section>

      {/* NO GADGETS */}
      <section className={`${s.section} ${s.light}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>Affordable by design</p>
              <h2 className={s.h2}>Spend on flying, <span>not on gadgets.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>Headsets, iPads and other expensive gadgets are all great to have, but they aren&apos;t necessary to fly. You pay for what actually makes you a pilot.</p>
            </Reveal>
          </div>
          <div className={s.cards}>
            {noGadgets.map(([t, d], i) => (
              <Reveal key={t} delay={i * 90} className={s.card}>
                <span className={s.cardNum}>{String(i + 1).padStart(2, "0")}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO FLIGHT */}
      <section id="intro" className={`${s.section} ${s.dark}`}>
        <div className={`${s.wrap} ${s.intro}`}>
          <Reveal className={s.ticket}>
            <div className={s.ticketMain}>
              <span className={s.ticketLabel}>Introductory Flight</span>
              <strong>$150</strong>
              <span className={s.ticketNote}>45-minute flight · special price, lowered from the normal rate</span>
            </div>
            <div className={s.ticketStub}>
              <Propeller className={s.stubProp} />
              <span>All ages</span>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className={`${s.kicker} ${s.kickerLight}`}>The journey starts here</p>
              <h2 className={`${s.h2} ${s.h2Light}`}>Your first flight, <span>start to finish.</span></h2>
              <p className={`${s.lede} ${s.ledeLight}`}>Our instructors are ready to answer any question you have and get you set on the right track.</p>
            </Reveal>
            <ol className={s.steps}>
              {introSteps.map(([t, d], i) => (
                <Reveal key={t} delay={i * 80} className={s.step}>
                  <span className={s.stepDot}>{i + 1}</span>
                  <div><h3>{t}</h3><p>{d}</p></div>
                </Reveal>
              ))}
            </ol>
            <Reveal>
              <div className={s.ctas}>
                <a href={contact.tel} className={`${s.btn} ${s.btnBeacon}`}>Reserve: {contact.phone}</a>
                <a href={contact.mailto("Introductory flight")} className={`${s.btn} ${s.btnGhost}`}>Email to Reserve</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* RATES */}
      <section id="rates" className={`${s.section} ${s.light}`}>
        <div className={`${s.wrap} ${s.rates}`}>
          <div>
            <Reveal>
              <p className={s.kicker}>Rates</p>
              <h2 className={s.h2}>Two numbers. <span>That&apos;s the whole menu.</span></h2>
              <p className={s.lede}>Simple hourly pricing for every program. Fuel is included in the aircraft rate, and the instructor rate is the same for flight or ground instruction.</p>
            </Reveal>
            <div className={s.rateCards}>
              <Reveal className={`${s.rateCard} ${s.rateFeature}`}>
                <p className={s.rateLabel}>Cessna 172 · wet</p>
                <p className={s.rateBig}>${PLANE}<span>/hr</span></p>
                <p className={s.rateNote}>Includes fuel.</p>
              </Reveal>
              <Reveal delay={100} className={s.rateCard}>
                <p className={s.rateLabel}>Flight instructor</p>
                <p className={s.rateBig}>${CFI}<span>/hr</span></p>
                <p className={s.rateNote}>Flight or ground instruction.</p>
              </Reveal>
            </div>
          </div>
          <Reveal delay={120}>
            <Planner plane={PLANE} cfi={CFI} />
          </Reveal>
        </div>
      </section>

      {/* TRAINING PATH */}
      <section id="training" className={`${s.section} ${s.dark} ${s.pathSection}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={`${s.kicker} ${s.kickerLight}`}>Flight training</p>
              <h2 className={`${s.h2} ${s.h2Light}`}>First flight <span>to flight instructor.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={`${s.lede} ${s.ledeLight}`}>Whatever your experience level, Kal-Aero instructors will take you to the next level of your flight journey.</p>
            </Reveal>
          </div>
          <ol className={s.path}>
            {path.map((p, i) => (
              <Reveal key={p.code} delay={i * 80} className={s.leg}>
                <span className={s.legCode}>{p.code}</span>
                <span className={s.legTag}>{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal className={s.pathCta}>
            <p>Starting your Private Pilot training? Ask for the estimated cost breakdown.</p>
            <a href={contact.mailto("Private pilot cost breakdown")} className={`${s.btn} ${s.btnBeacon}`}>Request More Information</a>
          </Reveal>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className={`${s.section} ${s.light}`}>
        <div className={`${s.wrap} ${s.visit}`}>
          <Reveal>
            <p className={s.kicker}>Where we fly</p>
            <h2 className={s.h2}>Find us <span>at the field.</span></h2>
            <p className={s.lede}>Kal-Aero Flight Instruction is based at Kalamazoo/Battle Creek International Airport in Portage, Michigan. Call ahead and come see the airplanes.</p>
            <div className={s.visitCard}>
              <div><span>Address</span><p><a href={contact.maps} target="_blank" rel="noreferrer">{contact.address[0]}<br />{contact.address[1]}</a></p></div>
              <div><span>Phone</span><p><a href={contact.tel}>{contact.phone}</a></p></div>
            </div>
          </Reveal>
          <Reveal delay={120} className={s.map}>
            <iframe src={contact.embed} title="Map to Kal-Aero Flight Instruction, 2422 E Kilgore Rd, Portage, MI" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={s.contact}>
        <Propeller className={s.contactProp} spin />
        <div className={`${s.wrap} ${s.contactInner}`}>
          <Reveal>
            <p className={`${s.kicker} ${s.kickerLight}`}>Start your dream of flight</p>
            <h2 className={s.contactTitle}>Ready when <span>you are.</span></h2>
            <p className={`${s.lede} ${s.ledeLight}`}>Tell us what you&apos;d like to learn about and we&apos;ll get you set on the right track.</p>
            <div className={s.contactList}>
              <div><span>Call</span><p><a href={contact.tel}>{contact.phone}</a></p></div>
              <div><span>Email</span><p><a href={`mailto:${contact.email}`}>{contact.email}</a></p></div>
              <div><span>Follow</span><p><a href={contact.facebook} target="_blank" rel="noreferrer">Facebook</a></p></div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Inquiry email={contact.email} />
          </Reveal>
        </div>
        <footer className={`${s.wrap} ${s.footer}`}>
          <span>© {new Date().getFullYear()} Kal-Aero Flight Instruction · Portage, Michigan</span>
          <span>Website concept by Stratum</span>
        </footer>
      </section>
    </div>
  );
}
