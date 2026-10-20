// J. F. Aviation (jfaviationinc.com): redesign concept by Stratum
// Facts are from jfaviationinc.com; photos are the school's own, copied into /public/jf-aviation.
import { Big_Shoulders, Work_Sans } from "next/font/google";
import s from "./styles.module.css";
import { Nav, Reveal } from "./client";

const display = Big_Shoulders({ subsets: ["latin"], variable: "--jf-display" });
const sans = Work_Sans({ subsets: ["latin"], variable: "--jf-sans" });

export const metadata = {
  title: "J. F. Aviation | Flight Instruction & Aircraft Maintenance in Joliet, IL",
  description: "Start with a $59 introduction flight. Private, instrument, commercial and CFI training in Cessna aircraft, plus full-service airframe and engine maintenance.",
};

const img = (n: string) => `/jf-aviation/${n}.jpg`;
const contact = {
  phone: "815.744.7528",
  tel: "tel:+18157447528",
  email: "bob@jfaviationinc.com",
  mailto: (subject: string) => `mailto:bob@jfaviationinc.com?subject=${encodeURIComponent(subject)}`,
  facebook: "https://www.facebook.com/j.f.aviationinc",
  address: ["4000 W Jefferson St.", "Joliet, IL 60431"],
  maps: "https://www.google.com/maps/search/?api=1&query=4000+W+Jefferson+St+Joliet+IL+60431",
  embed: "https://maps.google.com/maps?q=4000%20W.%20Jefferson%20St.%20Joliet%2C%20IL%2060431&t=m&z=13&output=embed",
};

const ticker = [
  "$59 introduction flight",
  "Cessna C-150 & C-172 trainers",
  "Instructors sunrise to sunset",
  "Night & after-hours on call",
  "Jeppesen & ASA training material",
  "In-house airframe, engine & accessory work",
];

const programs = [
  ["Private Pilot Certificate", "Where it starts. Learn to fly, solo, and earn the certificate that lets you take friends and family up with you."],
  ["Instrument Rating", "Fly by reference to instruments and handle the weather that keeps other pilots on the ground."],
  ["Commercial Certificate", "The next step toward flying for a living, with full-time instructors who teach the full spectrum."],
  ["Certified Flight Instructor", "Turn your experience into teaching, and pass on what you've learned."],
  ["Flight Reviews (BFR)", "Stay current and sharp with a biennial flight review on your schedule."],
];

const fleet = [
  { model: "C-150", type: "Cessna two-seat trainer", seats: 2, note: "The classic way to learn. Average training cost of about $7,500." },
  { model: "C-172", type: "Cessna four-place trainer", seats: 4, note: "Room for the family once you're certified. Average training cost of about $8,500." },
];

const maintenance = ["Annual inspections", "100-hour inspections", "Airworthiness directives (ADs)", "Service bulletins", "Scheduled maintenance", "Unscheduled repairs"];
const makes = ["Cessna", "Mooney", "Piper", "Beech", "Single-engine", "Multi-engine"];
const shop = ["Aeronautical charts", "Flight computers", "Headsets", "Clipboards", "Flashlights", "Jeppesen pilot training kits"];

const faq = [
  ["How much does it cost to learn to fly?", "It varies by program and by your own abilities. The average cost is $7,500 in a two-seat trainer to $8,500 in a four-seat trainer. It's a pay-as-you-go program, so stop in and review the costs in detail with one of our flight instructors."],
  ["How long does it take to learn to fly?", "You need at least 40 flight hours for a Private Pilot certificate (20 with an instructor, 20 solo). The national average is about 65 to 75 hours. The more often you fly, the less you have to relearn between lessons."],
  ["How much is the introductory flight?", "Your Introductory Flight Certificate entitles you to a flight lesson for only $59. Call us to schedule a flight with one of our flight instructors."],
  ["How old do you have to be?", "You can be any age to learn to fly. You must be at least 16 to solo and 17 to get a Private Pilot Certificate."],
  ["How long does a lesson last?", "Most lessons are based on a 1-hour flight but take about 2 hours start to finish, with pre- and post-flight discussions with your instructor about what you did well and what's next."],
  ["Can I carry passengers?", "Student pilots can't carry passengers when flying solo, but friends or family may ride along on dual lessons. Private pilots may carry as many passengers as the airplane will legally hold."],
];

export default function JFAviation() {
  return (
    <div id="top" className={`${s.root} ${display.variable} ${sans.variable}`}>
      <Nav phone={contact.phone} tel={contact.tel} />

      {/* HERO */}
      <section className={s.hero}>
        <img className={s.heroImg} src={img("stearman-hangar")} alt="A yellow Stearman biplane parked in front of the J.F. Aviation Service Center hangar" fetchPriority="high" />
        <div className={s.heroShade} />
        <div className={s.heroInner}>
          <p className={`${s.chip} ${s.rise}`}>Flight instruction &amp; maintenance · Joliet, IL</p>
          <h1 className={`${s.heroTitle} ${s.rise}`} style={{ animationDelay: "120ms" }}>
            Stop dreaming.<br /><span>Start flying.</span>
          </h1>
          <p className={`${s.heroLede} ${s.rise}`} style={{ animationDelay: "260ms" }}>
            Full-time instructors, Cessna trainers, and a training plan built around your busy schedule. It all starts with one flight.
          </p>
          <div className={`${s.ctas} ${s.rise}`} style={{ animationDelay: "400ms" }}>
            <a href={contact.tel} className={`${s.btn} ${s.btnYellow}`}>Book Your Intro Flight</a>
            <a href="#training" className={`${s.btn} ${s.btnGlass}`}>Explore Training</a>
          </div>
        </div>
        <div className={`${s.ticket} ${s.rise}`} style={{ animationDelay: "600ms" }} aria-label="Introductory flight certificate, $59">
          <div className={s.ticketMain}>
            <span className={s.ticketLabel}>Introductory Flight Certificate</span>
            <strong>$59</strong>
            <span className={s.ticketNote}>A real flight lesson with a J.F. Aviation instructor</span>
          </div>
          <div className={s.ticketStub}>
            <span>Admit</span>
            <b>One</b>
            <span>Future pilot</span>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className={s.ticker} aria-label="Highlights">
        <div className={s.tickerTrack}>
          {[...ticker, ...ticker].map((t, i) => <span key={i} aria-hidden={i >= ticker.length}>{t}</span>)}
        </div>
      </div>

      {/* TWO DOORS */}
      <section className={`${s.section} ${s.cream}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>One hangar, two specialties</p>
              <h2 className={s.h2}>Learn to fly it. <span>Keep it flying.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>Whether you&apos;re booking your first lesson or your next annual, J.F. Aviation handles it under one roof, with a staff of pilots and aircraft owners who understand what you need.</p>
            </Reveal>
          </div>
          <div className={s.doors}>
            <Reveal className={s.door}>
              <a href="#training">
                <img src={img("instruction")} alt="A pilot at the controls in the cockpit" loading="lazy" />
                <div className={s.doorBody}>
                  <span className={s.doorNum}>01</span>
                  <h3>Flight Instruction</h3>
                  <p>Private through CFI, plus flight reviews, aircraft rental and rides.</p>
                  <span className={s.doorLink}>See programs →</span>
                </div>
              </a>
            </Reveal>
            <Reveal delay={120} className={s.door}>
              <a href="#maintenance">
                <img src={img("comanche")} alt="A low-wing airplane in flight" loading="lazy" />
                <div className={s.doorBody}>
                  <span className={s.doorNum}>02</span>
                  <h3>Airplane Maintenance</h3>
                  <p>From a simple oil change to major inspections and repairs, modern to vintage.</p>
                  <span className={s.doorLink}>See services →</span>
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TRAINING */}
      <section id="training" className={`${s.section} ${s.navy}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={`${s.kicker} ${s.kickerLight}`}>Flight instruction</p>
              <h2 className={`${s.h2} ${s.h2Light}`}>Customers first. <span>Your schedule, not ours.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={`${s.lede} ${s.ledeLight}`}>
                A staff of full-time instructors qualified to teach the full spectrum of flight courses. Instructors are available anytime between
                sunrise and sunset, and on call for night flights or after-hours instruction as needed.
              </p>
            </Reveal>
          </div>
          <ol className={s.programs}>
            {programs.map(([t, d], i) => (
              <Reveal key={t} delay={i * 70} className={s.program}>
                <span className={s.programNum}>0{i + 1}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </Reveal>
            ))}
          </ol>
          <div className={s.fleet}>
            {fleet.map((f, i) => (
              <Reveal key={f.model} delay={i * 120} className={s.plane}>
                <div className={s.planeTop}>
                  <strong>{f.model}</strong>
                  <span className={s.seats} aria-label={`${f.seats} seats`}>
                    {Array.from({ length: f.seats }, (_, j) => <i key={j} />)}
                  </span>
                </div>
                <p className={s.planeType}>{f.type}</p>
                <p className={s.planeNote}>{f.note}</p>
              </Reveal>
            ))}
            <Reveal delay={240} className={`${s.plane} ${s.planeAlt}`}>
              <p className={s.planeType}>Also available</p>
              <p className={s.planeNote}>Aircraft for instruction <em>and</em> rental, plus pilot services and aircraft rides.</p>
              <a href={contact.tel} className={`${s.btn} ${s.btnYellow}`}>Call {contact.phone}</a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* COST & TIME */}
      <section className={`${s.section} ${s.cream}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>The honest numbers</p>
              <h2 className={s.h2}>What it takes to <span>earn your wings.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>Pay as you go, with no big up-front package. Stop in and review the costs in detail with one of our flight instructors.</p>
            </Reveal>
          </div>
          <div className={s.numbers}>
            {[
              ["$7.5–8.5K", "average cost to a Private Pilot certificate, two-seat to four-seat trainer"],
              ["40 hrs", "FAA minimum: 20 with an instructor, 20 solo"],
              ["65–75 hrs", "the national average to earn a Private certificate"],
              ["16 / 17", "minimum age to solo / to earn your Private certificate"],
            ].map(([n, l], i) => (
              <Reveal key={n} delay={i * 80} className={s.number}>
                <strong>{n}</strong>
                <span>{l}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MAINTENANCE */}
      <section id="maintenance" className={`${s.section} ${s.steel}`}>
        <div className={`${s.wrap} ${s.mx}`}>
          <Reveal>
            <p className={`${s.kicker} ${s.kickerLight}`}>Airplane maintenance</p>
            <h2 className={`${s.h2} ${s.h2Light}`}>Oil changes to overhauls. <span>Modern to vintage.</span></h2>
            <p className={`${s.lede} ${s.ledeLight}`}>
              Our airframe shop is equipped to handle anything from a simple oil change to major inspections and repairs. Handling airframe, engine
              and accessory work in house makes us a great choice for all your maintenance needs.
            </p>
            <blockquote className={s.mxQuote}>
              &ldquo;Many of our technicians are also pilots and aircraft owners, which helps them better understand your special needs.&rdquo;
            </blockquote>
          </Reveal>
          <Reveal delay={120} className={s.mxCard}>
            <p className={s.listTitle}>Services</p>
            <ul className={s.checks}>{maintenance.map((m) => <li key={m}>{m}</li>)}</ul>
            <p className={s.listTitle}>Aircraft we work on</p>
            <ul className={s.pills}>{makes.map((m) => <li key={m}>{m}</li>)}</ul>
            <div className={s.vintage}>
              <strong>Antique &amp; vintage specialists.</strong> Along with the metalworking skills airframe shops need today, our staff is current with
              the skills demanded by rare, vintage aircraft.
            </div>
            <a href={contact.mailto("Maintenance request")} className={`${s.btn} ${s.btnYellow}`}>Request Service</a>
          </Reveal>
        </div>
      </section>

      {/* PILOT SHOP */}
      <section className={`${s.section} ${s.cream} ${s.shopSection}`}>
        <div className={`${s.wrap} ${s.shop}`}>
          <Reveal>
            <p className={s.kicker}>Pilot center</p>
            <h2 className={s.h2}>Everything for <span>your flight bag.</span></h2>
            <p className={s.lede}>A complete line of pilot and training supplies featuring Jeppesen and ASA training material, stocked and ready when you stop in.</p>
          </Reveal>
          <Reveal delay={120}>
            <ul className={s.shopGrid}>{shop.map((x, i) => <li key={x}><span>{String(i + 1).padStart(2, "0")}</span>{x}</li>)}</ul>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className={`${s.section} ${s.paper}`}>
        <div className={`${s.wrap} ${s.faqWrap}`}>
          <Reveal>
            <p className={s.kicker}>Frequently asked</p>
            <h2 className={s.h2}>Questions before <span>your first flight?</span></h2>
            <p className={s.lede}>Our courteous, trained staff has answers to all of your flight training questions. Call anytime.</p>
          </Reveal>
          <div>
            {faq.map(([q, a], i) => (
              <Reveal key={q} delay={i * 60}>
                <details className={s.faq} open={i === 0}>
                  <summary>{q}<span aria-hidden /></summary>
                  <p>{a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={s.contact}>
        <div className={`${s.wrap} ${s.contactInner}`}>
          <Reveal>
            <p className={`${s.kicker} ${s.kickerLight}`}>It&apos;s time</p>
            <h2 className={s.contactTitle}>Your first lesson is <span>$59 away.</span></h2>
            <p className={`${s.lede} ${s.ledeLight}`}>Stop by and talk to one of our professional flight instructors about a training plan that fits your schedule, or call to book your introduction flight.</p>
            <div className={s.ctas}>
              <a href={contact.tel} className={`${s.btn} ${s.btnYellow}`}>Call {contact.phone}</a>
              <a href={contact.mailto("Introduction flight")} className={`${s.btn} ${s.btnGlass}`}>Email Us</a>
            </div>
            <div className={s.contactCard}>
              <div><span>Visit</span><p><a href={contact.maps} target="_blank" rel="noreferrer">{contact.address[0]}<br />{contact.address[1]}</a></p></div>
              <div><span>Call</span><p><a href={contact.tel}>{contact.phone}</a></p></div>
              <div><span>Email</span><p><a href={`mailto:${contact.email}`}>{contact.email}</a></p></div>
              <div><span>Follow</span><p><a href={contact.facebook} target="_blank" rel="noreferrer">Facebook</a></p></div>
            </div>
          </Reveal>
          <Reveal delay={120} className={s.map}>
            <iframe src={contact.embed} title="Map to J. F. Aviation, 4000 W Jefferson St., Joliet, IL" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </Reveal>
        </div>
        <footer className={`${s.wrap} ${s.footer}`}>
          <span>© {new Date().getFullYear()} J. F. Aviation, Inc. · Joliet, Illinois</span>
          <span>Website concept by Stratum</span>
        </footer>
      </section>
    </div>
  );
}
