// EAS Flight Training (easflighttraining.com): redesign concept by Stratum
// Facts are from easflighttraining.com; photos and logo are the school's own, copied into /public/eas-flight.
import { Literata, Atkinson_Hyperlegible } from "next/font/google";
import s from "./styles.module.css";
import { FleetBoard, Inquiry, Nav, ProgramBoard, Reveal, type Aircraft } from "./client";

const display = Literata({ subsets: ["latin"], style: ["normal", "italic"], variable: "--eas-display" });
const sans = Atkinson_Hyperlegible({ subsets: ["latin"], weight: ["400", "700"], variable: "--eas-sans" });

export const metadata = {
  title: "EAS Flight Training | Pilots Made Here · Aurora, Monett & Neosho, Missouri",
  description: "Part 61 flight training since 1997 at three southwest Missouri airports. $99 discovery flights, private through flight instructor and ATP, ten aircraft and a Redbird full-motion simulator.",
};

const img = (n: string) => `/eas-flight/${n}.jpg`;
const contact = {
  phone: "877-2FLYEAS",
  phoneDigits: "877-235-9327",
  tel: "tel:+18772359327",
  email: "info@easflighttraining.com",
  fspSignup: "https://app.flightschedulepro.com/Account/Signup/119187",
  fspLogin: "https://app.flightschedulepro.com/Account/Login/119187",
  stratus: "https://stratus.finance/apply/easflighttraining687081/",
  aopa: "https://finance.aopa.org/flight-training-finance",
};

const locations = [
  {
    id: "2H2",
    town: "Aurora",
    airport: "Aurora Municipal Airport",
    address: "1526 E Highland St, Aurora, MO 65605",
    ext: "ext 1",
    tag: "Where EAS began",
    points: ["All programs, private through commercial and flight instructor", "Full-motion simulator", "FBO: fuel sales, hangar rental, meeting rooms"],
  },
  {
    id: "KHFJ",
    town: "Monett",
    airport: "Monett Regional Airport",
    address: "1215G State Hwy 97, Pierce City, MO 65723",
    ext: "ext 2 or 4",
    tag: "Maintenance headquarters",
    points: ["Primary maintenance facility for the training fleet", "Customer aircraft repairs and inspections", "Accelerated courses: one-day complex / high-performance checkout, transition training for new aircraft or avionics"],
  },
  {
    id: "KEOS",
    town: "Neosho",
    airport: "Neosho Municipal Airport",
    address: "1400 Terry Johnson Drive, Neosho, MO 64850",
    ext: "ext 3",
    tag: "Opened 2024",
    points: ["All programs, private through commercial and flight instructor", "Operates 7 days per week", "Openings to start as soon as you're ready"],
  },
];

const fleet: Aircraft[] = [
  { tail: "N546MC", model: "2000 Cessna 172S", rate: 194, kind: "c172", img: "n546mc", kit: ["180 HP", "Garmin GPS 175", "KAP 140 autopilot", "ADS-B in/out, traffic & weather", "Wi-Fi", "Dual vacuum pumps"], use: "Primary, instrument, commercial · open rental" },
  { tail: "N80759", model: "1976 Cessna 172M", rate: 194, kind: "c172", img: "g3x-panel", kit: ["Garmin G3X PFD", "Standby Garmin G5", "Garmin GPS 175", "Glideslope / DME", "ADS-B out"], use: "Primary, instrument, commercial · open rental" },
  { tail: "N3926Q", model: "1972 Cessna 172L", rate: 184, kind: "c172", img: "n3926q", kit: ["Garmin 530W", "Dual nav/com with glideslope", "ADS-B out", "IFR certified"], use: "Primary, instrument, commercial · open rental" },
  { tail: "N46668", model: "1969 Cessna 172K", rate: 184, kind: "c172", img: "n46668", kit: ["King HSI", "Garmin G5 attitude", "Garmin 430W + GPSS", "S-Tec 30 autopilot, altitude hold", "ADS-B out"], use: "Primary, instrument, commercial · open rental" },
  { tail: "N35672", model: "1968 Cessna 172I", rate: 184, kind: "c172", img: "n35672", kit: ["Garmin 430W + GPSS", "S-Tec 30 autopilot, altitude hold", "Garmin 345, ADS-B in/out", "IFR certified"], use: "Primary, instrument, commercial · open rental" },
  { tail: "N9857G", model: "1971 Cessna 172L", rate: 184, kind: "c172", img: "n9857g", kit: ["Garmin 430W", "IFR certified"], use: "Primary, instrument, commercial · open rental" },
  { tail: "N12466", model: "1973 Cessna 172M", rate: 184, kind: "c172", img: "n12466", kit: ["GNS 430W + GNS 300XL", "S-Tec autopilot", "Dual nav/com with glideslope", "ADS-B out"], use: "Instrument, commercial, CFI · open rental" },
  { tail: "N4486R", model: "1974 Cessna 172M", rate: 184, kind: "c172", img: "n4486r", kit: ["Garmin 430 (VFR GPS)", "Dual nav/com", "ADS-B out"], use: "Primary, commercial · open rental" },
  { tail: "N41391", model: "1974 Piper Arrow PA-28R-200", rate: 199, kind: "arrow", img: "n41391", kit: ["Complex · 140 KTAS", "GNS 430W", "GTX 345 ADS-B in/out", "Single-axis autopilot", "IFR certified"], use: "Instrument, commercial, complex, CFI", dualOnly: true },
  { tail: "N212BM", model: "1972 Piper Arrow PA-28R-200", rate: 199, kind: "arrow", img: "n212bm", kit: ["Complex · 140 KTAS", "GNS 430W", "S-Tec 60-2 autopilot, altitude hold", "ADS-B out", "IFR certified"], use: "Instrument, commercial, complex, CFI", dualOnly: true },
  { tail: "Redbird FMX", model: "Full-motion simulator", rate: 65, kind: "sim", img: "redbird-fmx", kit: ["180° visuals", "Cessna 172S · Piper PA-28-161", "Cirrus SR20 (G1000) · Seneca I"], use: "Private through multi-engine, time building and currency" },
];

const crew = [
  { group: "Owners", people: [
    { name: "Justin Richmond", role: "Owner", img: "justin", note: "Flying since 1990; founded the school in 1997. Commercial multi-engine, instrument, A&P with Inspector Authorization, advanced ground instructor." },
    { name: "Bart Marcules", role: "Owner / Chief Instructor", img: "bart", note: "Full-time EAS instructor since 2017, owner since 2022. Teaches private through ATP, single and multi-engine, CFI, CFII and MEI." },
  ]},
  { group: "Location managers", people: [
    { name: "Grant Davis", role: "Aurora Manager / Instructor", img: "grant", note: "With EAS since 2016. Degree in airport management and professional pilot, University of Central Missouri." },
    { name: "Darren Rowe", role: "Neosho Manager / Instructor", img: "darren", note: "Instrument and multi-engine instructor; tailwheel, high-performance and complex endorsements." },
  ]},
  { group: "Flight instructors", people: [
    { name: "Mike Rasico", role: "Flight Instructor", img: "mike", note: "18 years flying, with EAS since 2019. Commercial single-engine land and sea, CFI, advanced ground instructor." },
    { name: "Sam Cybulski", role: "Flight Instructor", img: "sam", note: "Flying with EAS since 2020, instructing since 2024. Commercial single and multi-engine." },
    { name: "Sally Cybulski", role: "Flight Instructor, Aurora", img: "sally", note: "Earned every rating at EAS, from private to flight instructor." },
    { name: "Guy Gibson", role: "Flight Instructor", img: "guy", note: "Joined EAS in spring 2024, with a military background." },
    { name: "Jason Garner", role: "Flight Instructor", img: "jason", note: "Started as an EAS student in December 2023; now an EAS instructor." },
    { name: "Jake Hendricks", role: "Flight Instructor", img: "jake-h", note: "B.S. in Aviation; commercial and flight instructor certificates." },
    { name: "Amber McBride", role: "Flight Instructor, Aurora", img: "amber", note: "Began training at EAS in May 2021 and now teaches there." },
  ]},
  { group: "Maintenance", people: [
    { name: "Jake Ascoli", role: "Shop Manager, A&P/IA", img: "jake-a", note: "Knows Cessna, Piper and Beech models inside out." },
    { name: "Kurt Tennyson", role: "Aircraft Mechanic, A&P", img: "kurt", note: "Seven years in the armed forces before joining the shop." },
    { name: "Rocco Palazzolo", role: "Mechanics Apprentice", img: "rocco", note: "Works in the Monett Regional Airport service center." },
    { name: "Wes Eaton", role: "Mechanics Apprentice", img: "", note: "Working toward his A&P certificate." },
  ]},
  { group: "Office", people: [
    { name: "Dan Bays", role: "Accounting / Customer Representative", img: "dan", note: "An EAS instructor in the early 1990s, back for scheduling and customer relations." },
    { name: "Tasha Marcules", role: "Social Media Coordinator", img: "tasha", note: "Keeps the EAS community posted." },
  ]},
];

export default function EASFlight() {
  return (
    <div id="top" className={`${s.root} ${display.variable} ${sans.variable}`}>
      <Nav phone={contact.phone} tel={contact.tel} />

      {/* HERO */}
      <section className={s.hero}>
        <img className={s.heroImg} src={img("on-final")} alt="A runway seen from the cockpit on final approach" fetchPriority="high" />
        <div className={s.heroShade} />
        <div className={s.heroInner}>
          <p className={`${s.eyebrow} ${s.rise}`}>Since 1997 · Aurora · Monett · Neosho, Missouri</p>
          <h1 className={`${s.heroTitle} ${s.rise}`} style={{ animationDelay: "120ms" }}>
            Pilots <em>made here.</em>
          </h1>
          <p className={`${s.heroLede} ${s.rise}`} style={{ animationDelay: "260ms" }}>
            One-on-one, FAA Part 61 flight training at three southwest Missouri airports. Fly six days a week or once a week around work and school:
            you set the pace, from your first discovery flight to the right seat as an instructor.
          </p>
          <div className={`${s.ctas} ${s.rise}`} style={{ animationDelay: "400ms" }}>
            <a href="#discovery" className={`${s.btn} ${s.btnAmber}`}>Book a $99 Discovery Flight</a>
            <a href="#training" className={`${s.btn} ${s.btnGlass}`}>See Programs & Prices</a>
          </div>
        </div>
        <div className={`${s.heroStats} ${s.rise}`} style={{ animationDelay: "560ms" }}>
          {[["1997", "training pilots since"], ["3", "airports: 2H2 · KHFJ · KEOS"], ["10", "aircraft + Redbird FMX"], ["Part 61", "one-on-one, your pace"]].map(([n, l]) => (
            <div key={n} className={s.heroStat}><strong>{n}</strong><span>{l}</span></div>
          ))}
        </div>
      </section>

      {/* LOCATIONS */}
      <section id="locations" className={`${s.section} ${s.paper}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>Three airfields, one school</p>
              <h2 className={s.h2}>Training across <em>southwest Missouri.</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>EAS operates three FAA Part 61 flight training centers and serves a four-state area. Pick the field closest to you.</p>
            </Reveal>
          </div>
          <div className={s.locs}>
            {locations.map((l, i) => (
              <Reveal key={l.id} delay={i * 100} className={s.loc}>
                <div className={s.locTop}>
                  <span className={s.locId}>{l.id}</span>
                  <span className={s.locTag}>{l.tag}</span>
                </div>
                <h3>{l.town}</h3>
                <p className={s.locAirport}>{l.airport}</p>
                <ul>{l.points.map((p) => <li key={p}>{p}</li>)}</ul>
                <div className={s.locFoot}>
                  <span>{l.address}</span>
                  <a href={contact.tel}>{contact.phoneDigits} {l.ext}</a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DISCOVERY + FSP */}
      <section id="discovery" className={`${s.section} ${s.navy}`}>
        <div className={`${s.wrap} ${s.disc}`}>
          <Reveal className={s.discMedia}>
            <img src={img("checkride-handshake")} alt="Two pilots shaking hands beside a Cessna" loading="lazy" />
          </Reveal>
          <div>
            <Reveal>
              <p className={`${s.kicker} ${s.kickerLight}`}>Your first step</p>
              <h2 className={`${s.h2} ${s.h2Light}`}>Take the controls <em>for $99.</em></h2>
              <p className={`${s.lede} ${s.ledeLight}`}>A discovery flight puts you at the controls with an instructor: take the controls, learn the basics, and find out if becoming a pilot is right for you.</p>
            </Reveal>
            <div className={s.discCards}>
              <Reveal className={s.discCard}>
                <span className={s.discPrice}>$99</span>
                <h3>Discovery flight</h3>
                <p>Call to schedule your first flight.</p>
                <a href={contact.tel} className={`${s.btn} ${s.btnAmber}`}>Call {contact.phone}</a>
              </Reveal>
              <Reveal delay={120} className={s.discCard}>
                <span className={s.discIcon} aria-hidden>FSP</span>
                <h3>Register for Flight Schedule Pro</h3>
                <p>Book lessons, track progress and see real-time instructor and aircraft availability. Every student and renter uses it.</p>
                <a href={contact.fspSignup} target="_blank" rel="noreferrer" className={`${s.btn} ${s.btnGlass}`}>Sign Up</a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* TRAINING */}
      <section id="training" className={`${s.section} ${s.paper}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>Programs & honest pricing</p>
              <h2 className={s.h2}>Every certificate, <em>itemized.</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>EAS keeps training and rental costs as affordable as possible and publishes the estimate for each program, line by line.</p>
            </Reveal>
          </div>
          <div className={s.train}>
            <Reveal><ProgramBoard /></Reveal>
            <Reveal delay={120} className={s.zero}>
              <span className={s.zeroTag}>Career track</span>
              <h3>Zero to Certified Flight Instructor</h3>
              <p className={s.zeroPrice}>$72,900</p>
              <div className={s.zeroStats}>
                <div><b>18</b><span>months</span></div>
                <div><b>~285</b><span>flight hours</span></div>
                <div><b>4</b><span>days a week</span></div>
              </div>
              <p className={s.zeroPath}>Private <i>›</i> Instrument <i>›</i> Commercial <i>›</i> CFI <i>›</i> CFII</p>
              <p className={s.zeroInc}>Includes books, classroom, written exam fees, simulator time, aircraft, instructor and check-ride costs.</p>
              <img src={img("cfi-pair")} alt="Two pilots standing beside an aircraft" loading="lazy" />
            </Reveal>
          </div>

          <div className={s.more}>
            {[
              { t: "Initial Flight Instructor (CFI)", p: "$6,995", d: "Turns a current commercial pilot into an instructor: FOI and FIA written exams, then the oral and practical. Lodging on request." },
              { t: "Instrument Flight Instructor (CFII)", p: "$3,695", d: "Teach instrument flying and endorse students for the instrument check ride. Custom programs based on your experience." },
              { t: "Airline Transport Pilot", p: "Call", d: "After your ATP certification course, EAS can give the written exam and the multi-engine training for the FAA practical." },
              { t: "Endorsements", p: "On request", d: "Tailwheel; complex (typically 3–5 hrs, done in a day); high performance (often a single afternoon)." },
            ].map((x, i) => (
              <Reveal key={x.t} delay={(i % 4) * 70} className={s.moreCard}>
                <div className={s.moreTop}><h3>{x.t}</h3><b>{x.p}</b></div>
                <p>{x.d}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className={s.own}>
            <div>
              <p className={s.kicker}>Train in your aircraft</p>
              <p className={s.ownText}>Private, insurance checkouts, CFI, flight reviews, IPCs or multi-engine commercial, in the airplane you already fly.</p>
            </div>
            <dl className={s.ownRates}>
              {[["Ground", "$65"], ["Primary flight", "$65"], ["Advanced flight", "$75"], ["Multi-engine", "$100"]].map(([k, v]) => (
                <div key={k}><dt>{k}</dt><dd>{v}<small>/hr</small></dd></div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* FLEET */}
      <section id="fleet" className={`${s.section} ${s.sky}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>Aircraft fleet & rentals</p>
              <h2 className={s.h2}>Ten airplanes. <em>Every rate wet.</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>Eight Cessna 172s and two complex Piper Arrows, maintained in-house at Monett, plus a Redbird FMX full-motion simulator. Rental starts with a Flight Schedule Pro account; an instructor will reach out.</p>
            </Reveal>
          </div>
          <FleetBoard fleet={fleet} />
        </div>
      </section>

      {/* SIM BAND */}
      <section className={s.sim}>
        <img src={img("redbird-cockpit")} alt="Pilots training in the Redbird full-motion simulator" className={s.simImg} loading="lazy" />
        <div className={s.simShade} />
        <div className={`${s.wrap} ${s.simInner}`}>
          <Reveal>
            <p className={`${s.kicker} ${s.kickerLight}`}>Redbird FMX · $65/hr</p>
            <h2 className={`${s.h2} ${s.h2Light}`}>Full motion. <em>Four airplanes.</em></h2>
            <p className={`${s.lede} ${s.ledeLight}`}>180-degree visuals and configurations for the Cessna 172S, Piper PA-28-161, Cirrus SR20 with G1000 and Seneca I. Use it for instrument work, multi-engine procedures, time building and staying current.</p>
          </Reveal>
        </div>
      </section>

      {/* CREW */}
      <section id="crew" className={`${s.section} ${s.paper}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>Meet the crew</p>
              <h2 className={s.h2}>Several of them <em>learned to fly here.</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>Owners, instructors, mechanics and the office team. EAS alumni now fly for airlines, charter providers, corporate flight departments, the US Army and the US Air Force.</p>
            </Reveal>
          </div>
          {crew.map((g) => (
            <div key={g.group} className={s.crewGroup}>
              <p className={s.crewLabel}>{g.group}</p>
              <div className={s.crew}>
                {g.people.map((p, i) => (
                  <Reveal key={p.name} delay={(i % 4) * 60} className={s.member}>
                    {p.img
                      ? <img src={img(p.img)} alt={p.name} loading="lazy" />
                      : <span className={s.initials} aria-hidden>{p.name.split(" ").map((w) => w[0]).join("")}</span>}
                    <div>
                      <h3>{p.name}</h3>
                      <p className={s.memberRole}>{p.role}</p>
                      <p className={s.memberNote}>{p.note}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES + FINANCING */}
      <section className={`${s.section} ${s.navy}`}>
        <div className={`${s.wrap} ${s.money}`}>
          <Reveal className={s.svc}>
            <p className={`${s.kicker} ${s.kickerLight}`}>Pilot services</p>
            <h3>Need a pilot for your airplane?</h3>
            <p>EAS pilots can qualify on most owner insurance policies, with experience in piston singles and twins as well as turboprop twins.</p>
            <dl className={s.svcRates}>
              <div><dt>Single engine</dt><dd>$90<small>/hr</small> · $750<small>/day</small></dd></div>
              <div><dt>Multi-engine</dt><dd>$110<small>/hr</small> · $850<small>/day</small></dd></div>
            </dl>
            <p className={s.svcFine}>Overnight trips may add other costs and expenses.</p>
          </Reveal>
          <Reveal delay={120} className={s.fin}>
            <p className={`${s.kicker} ${s.kickerLight}`}>Financing</p>
            <h3>Fly now, pay over time.</h3>
            <p>EAS partners with Stratus Financial and AOPA. Stratus looks beyond FICO scores, finances whole programs, and allows early payoff with no penalty.</p>
            <ul className={s.loans}>
              {[["Private Pilot Program", "$14,700"], ["Instrument Pilot Program", "$12,375"], ["Certificate Finish-Up", "$8,000"], ["Professional Pilot Finish-Up", "$20,500"]].map(([k, v]) => (
                <li key={k}><span>{k}</span><b>{v}</b></li>
              ))}
            </ul>
            <div className={s.ctas}>
              <a href={contact.stratus} target="_blank" rel="noreferrer" className={`${s.btn} ${s.btnAmber}`}>Check Loan Options</a>
              <a href={contact.aopa} target="_blank" rel="noreferrer" className={`${s.btn} ${s.btnGlass}`}>AOPA Financing</a>
            </div>
            <p className={s.svcFine}>Ask about available military funding.</p>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={s.contact}>
        <img src={img("above-clouds")} alt="" className={s.contactImg} loading="lazy" />
        <div className={s.contactShade} />
        <div className={`${s.wrap} ${s.contactInner}`}>
          <Reveal>
            <p className={`${s.kicker} ${s.kickerLight}`}>Ready when you are</p>
            <h2 className={s.contactTitle}>Your seat is <em>waiting.</em></h2>
            <p className={`${s.lede} ${s.ledeLight}`}>Call 877-2FLYEAS and choose your location, or send a note and the right team will get back to you.</p>
            <div className={s.ctas}>
              <a href={contact.tel} className={`${s.btn} ${s.btnAmber}`}>Call {contact.phoneDigits}</a>
              <a href={contact.fspLogin} target="_blank" rel="noreferrer" className={`${s.btn} ${s.btnGlass}`}>Student Login (FSP)</a>
            </div>
            <div className={s.contactCard}>
              <div><span>Aurora · ext 1</span><p>1526 E Highland St<br />Aurora, MO 65605</p></div>
              <div><span>Monett · ext 2 or 4</span><p>1215G State Hwy 97<br />Pierce City, MO 65723</p></div>
              <div><span>Neosho · ext 3</span><p>1400 Terry Johnson Dr<br />Neosho, MO 64850</p></div>
              <div><span>Email</span><p><a href={`mailto:${contact.email}`}>{contact.email}</a><br /><a href="mailto:darren@easflighttraining.com">darren@easflighttraining.com</a> (Neosho)</p></div>
            </div>
          </Reveal>
          <Reveal delay={120}><Inquiry /></Reveal>
        </div>
        <footer className={`${s.wrap} ${s.footer}`}>
          <span>© {new Date().getFullYear()} EAS Flight Training · P.O. Box 230, Pierce City, MO 65723 · Prices subject to change</span>
          <span>Website concept by Stratum</span>
        </footer>
      </section>
    </div>
  );
}
