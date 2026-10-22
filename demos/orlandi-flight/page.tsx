// Orlandi Flight Center (orlandiflightcenter.com): redesign concept by Stratum
// Facts, rates and photos are from their own website; the logo is their badge, redrawn as vector.
import { Libre_Baskerville, Mulish } from "next/font/google";
import s from "./styles.module.css";
import { CfiRates, FleetBoard, Inquiry, IntroBoard, Nav, OfcLogo, Reveal } from "./client";

const display = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"], style: ["normal", "italic"], variable: "--of-display" });
const sans = Mulish({ subsets: ["latin"], variable: "--of-sans" });

export const metadata = {
  title: "Orlandi Flight Center | Award-Winning Flight Training in Blairstown, NJ & Tampa, FL",
  description: "Part 61 flight training and rentals at Blairstown Airport (1N7) and Tampa Executive (VDF). Discovery flights from $115, transparent all-inclusive rates, Cubs, Cessnas and twins.",
};

const img = (n: string) => `/orlandi-flight/${n}.jpg`;
const contact = {
  phone: "(201) 874-5458",
  tel: "tel:+12018745458",
  email: "go@orlandiflightcenter.com",
  facebook: "https://www.facebook.com/Orlandi-Flight-Center-LLC-473511202843191/",
  schedule: "https://www.flightschedulepro.com/",
  njMaps: "https://www.google.com/maps/search/?api=1&query=Blairstown+Airport+1N7+Blairstown+NJ",
  flMaps: "https://www.google.com/maps/search/?api=1&query=Tampa+Executive+Airport+VDF",
};

const awards = [
  ["2013", "AOPA Excellence Award Honor Roll"],
  ["2014", "AOPA Excellence Award Honor Roll"],
  ["2015", "AOPA Outstanding Flight School & Flight Instructor"],
  ["2016", "AOPA Excellence Award Honor Roll"],
  ["2017", "AOPA Distinguished Flight School & Instructor"],
  ["2018", "AOPA Distinguished Flight School & Instructor"],
  ["2019", "FAA District CFI of the Year"],
];

const cornerstones = ["Sound flying skills", "Procedural discipline", "Broad aeronautical knowledge", "Effective aeronautical decision making"];

const ratings = ["Sport Pilot", "Recreational Pilot", "Private Pilot", "Instrument Rating", "Commercial Pilot", "Multiengine Rating", "Flight Instructor (CFI, CFII, MEI)", "ATP Single & Multi", "Tailwheel", "Complex", "High Performance", "Flight Reviews & IPCs"];

const programs = [
  { name: "Private Pilot", aircraft: "J3 Cub; 172K & L", price: "$17,150", time: "3 months @ 4 days/week", hours: "40 hrs flight · 10 solo · 35 ground" },
  { name: "Sport Pilot (MOSAIC)", aircraft: "J3 Cub; 172K & L", price: "$10,750", time: "2 months @ 4 days/week", hours: "30 hrs flight · 5 solo · 10 ground" },
  { name: "Instrument Rating", aircraft: "172K & L", price: "$10,250", time: "Prereq: Private Pilot", hours: "27 hrs flight (22 hood) · 20 ground" },
  { name: "Commercial Pilot", aircraft: "172K & L", price: "$13,450", time: "1 month @ 4 days/week", hours: "20 hrs flight · 28 solo · 15 ground" },
  { name: "Multiengine Add-On", aircraft: "Seneca II; 310", price: "$6,850", time: "5 days", hours: "10 hrs flight · 8 ground" },
  { name: "CFI Initial", aircraft: "172K & L", price: "$7,150", time: "10 days", hours: "15 hrs flight · 25 ground" },
  { name: "CFII Add-On", aircraft: "172K & L", price: "$4,350", time: "Prereq: CFI", hours: "10 hrs flight · 10 ground" },
  { name: "Tailwheel Endorsement", aircraft: "J3 Cub", price: "$2,050", time: "2 days", hours: "Up to 7 hrs flight · 2 ground" },
  { name: "Master Tailwheel Cub Experience", aircraft: "J3 Cub", price: "$3,850", time: "4 days", hours: "15 hrs · 7+ airfields · 30 landings" },
  { name: "Back to Basics Stick & Rudder", aircraft: "J3 Cub", price: "$5,150", time: "7 days", hours: "20 hrs flight training" },
  { name: "Complex & High Performance", aircraft: "Seneca II; 310", price: "$1,750", time: "1 day", hours: "Up to 3 hrs flight · 2 ground" },
  { name: "Spin Endorsement", aircraft: "J3 Cub; 172K & L", price: "$750", time: "Short course", hours: "Up to 2 hrs flight · 1 ground" },
];

const timeline = [
  ["Month 3", "Private Pilot", "52 hrs"],
  ["Month 4", "Instrument time building & rating", "115 hrs"],
  ["Month 6", "Commercial time building", "192 hrs"],
  ["Month 7", "TAA & Commercial single-engine", "252 hrs"],
  ["Month 9", "Complex, high performance & multi add-on", "267 hrs"],
  ["Month 11", "Spin, CFI, CFII & MEI", "315 hrs"],
  ["Month 12", "Graduate", "315 hrs"],
];

const team = [
  ["Vincent Orlandi", "CFI, CFII, MEI, AIGI", "Chief Flight Instructor / Director of Operations, NJ"],
  ["Jase Smith", "CFI, CFII, MEI, AGI", "Senior Flight Instructor, NJ"],
  ["Jonathan Abraham", "CFI, CFII", "Senior Flight Instructor, NJ"],
  ["Emrah Ayhan", "CFI, CFII, AIGI, UAS", "Senior Flight Instructor, NJ"],
  ["Matt DePiano", "CFI, CFII, AGI, UAS", "Flight Instructor, NJ"],
  ["Ryan Johnson", "CFI", "Flight Instructor, FL"],
];

const milestones = [
  "Chris Dinizio · CFI checkride", "Ben De Winkle · Commercial checkride", "Jordan Solomon · Private checkride", "Sandor Gecsey · CFII checkride",
  "James Schwartz · Commercial Multiengine", "Keela Mc Elduff · Tailwheel endorsement", "Magno Mendes · Private checkride", "Shreya Sharma · First solo",
  "Connor Stark · Commercial checkride", "Dalton Dougherty · Private checkride", "Sivert Ramos · Complex & high performance", "Michael Alves · First solo",
];

export default function OrlandiFlightCenter() {
  return (
    <div id="top" className={`${s.root} ${display.variable} ${sans.variable}`}>
      <Nav phone={contact.phone} tel={contact.tel} />

      {/* HERO */}
      <section className={s.hero}>
        <div className={s.orb} aria-hidden><span className={s.orbSun} /><span className={s.orbMoon} /></div>
        <div className={s.heroInner}>
          <div className={s.heroCopy}>
            <p className={`${s.eyebrow} ${s.rise}`}>Blairstown, NJ <b>1N7</b> · Tampa, FL <b>VDF</b></p>
            <h1 className={`${s.heroTitle} ${s.rise}`} style={{ animationDelay: "120ms" }}>
              Enhance your life <em>through aviation.</em>
            </h1>
            <p className={`${s.heroLede} ${s.rise}`} style={{ animationDelay: "260ms" }}>
              A national award-winning, full-service flight school, open full time and all year at two bases. Personalized training from Sport
              Pilot to ATP, in Cubs, Cessnas and twins, with every rate published up front.
            </p>
            <div className={`${s.ctas} ${s.rise}`} style={{ animationDelay: "400ms" }}>
              <a href="#start" className={`${s.btn} ${s.btnSun}`}>Discovery Flights from $115</a>
              <a href="#rates" className={`${s.btn} ${s.btnGhost}`}>See Every Rate</a>
            </div>
          </div>
          <Reveal className={s.heroBadge} delay={200}>
            <OfcLogo className={s.heroLogo} />
            <p>Wheels move the body. <em>Wings move the soul.</em></p>
          </Reveal>
        </div>
        <div className={`${s.heroPhoto} ${s.rise}`} style={{ animationDelay: "520ms" }}>
          <img src={img("cub-n1500n")} alt="Their yellow 1947 Piper J3 Cub, N1500N, on the ramp" fetchPriority="high" />
          <div className={s.stats}>
            {[["10,200+", "flight hours, founder Geoff Orlandi"], ["20,700+", "accident-free takeoffs & landings"], ["2013–19", "national instruction awards"], ["2", "bases: New Jersey & Florida"]].map(([n, l]) => (
              <div key={n} className={s.stat}><strong>{n}</strong><span>{l}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section className={s.awards} aria-label="Awards">
        <div className={s.awardTrack}>
          {[...awards, ...awards].map(([y, a], i) => (
            <span key={i} aria-hidden={i >= awards.length}><b>{y}</b>{a}</span>
          ))}
        </div>
      </section>

      {/* START */}
      <section id="start" className={`${s.section} ${s.cream}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>Start flying</p>
              <h2 className={s.h2}>A taste of flight, <em>or your first real lesson.</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>
                Not sure yet? A Discovery Flight puts you at the controls with no syllabus or briefings, just flying. Ready to train? An Introductory
                Flight is your first logged lesson, with ground, preflight and flight. Both are pre-paid and all inclusive: aircraft, fuel and instructor.
              </p>
            </Reveal>
          </div>
          <div className={s.startGrid}>
            <Reveal className={s.discovery}>
              <p className={s.cardKicker}>Discovery flights · NJ &amp; FL</p>
              <h3>Just you, the sky, <em>and the controls.</em></h3>
              <div className={s.discTable}>
                <div className={s.discHead}><span>Aircraft</span><span>½ hour</span><span>1 hour</span></div>
                <div><span>Piper J3 Cub</span><b>$115</b><b>$235</b></div>
                <div><span>Cessna 172K &amp; L</span><b>$135</b><b>$265</b></div>
                <div><span>Twin: Cessna 310C (FL)</span><b>$245</b><b>$465</b></div>
              </div>
              <p className={s.discNote}>A logged training flight, not an air tour. Ride-alongs welcome when appropriate. A memorable gift, too.</p>
              <a href={contact.tel} className={`${s.btn} ${s.btnNavy}`}>Call or Text to Book</a>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.cardKicker}>Introductory flight packages</p>
              <IntroBoard />
            </Reveal>
          </div>
        </div>
      </section>

      {/* TRAINING */}
      <section className={`${s.section} ${s.night}`}>
        <div className={s.stars} aria-hidden />
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={`${s.kicker} ${s.kickerSun}`}>How we train</p>
              <h2 className={`${s.h2} ${s.h2Light}`}>Four cornerstones, <em>every single lesson.</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={`${s.lede} ${s.ledeLight}`}>
                Part 61 flight and ground training that covers not just what you need to pass the tests, but what you need for confident, enjoyable,
                real-world flying. Self-paced, accelerated, or Zero to Hero: your time, your budget.
              </p>
            </Reveal>
          </div>
          <ol className={s.corners}>
            {cornerstones.map((c, i) => (
              <Reveal key={c} delay={i * 90} className={s.corner}>
                <span className={s.cornerNum}>{["I", "II", "III", "IV"][i]}</span>
                <h3>{c}</h3>
              </Reveal>
            ))}
          </ol>
          <Reveal className={s.ratings}>
            <p className={s.ratingsTitle}>Training offered</p>
            <div>{ratings.map((r) => <span key={r}>{r}</span>)}</div>
          </Reveal>
        </div>
      </section>

      {/* RATES & FLEET */}
      <section id="rates" className={`${s.section} ${s.cream}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>Rates &amp; fleet</p>
              <h2 className={s.h2}>Completely transparent. <em>No hidden fees.</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>
                Aircraft rates include fuel: just add your instructor for lessons, or tax for solo rental. Instructors charge only for time spent
                teaching, not the lesson block. Most of the fleet is hangar kept, and both airports skip the taxi and clearance delays.
              </p>
            </Reveal>
          </div>
          <Reveal><FleetBoard /></Reveal>
          <div className={s.rateSplit}>
            <Reveal className={s.rateCopy}>
              <h3>From a 1940 Cub <em>to a twin with known ice.</em></h3>
              <p>Tailwheel, single and multiengine, steam, glass, TAA, complex and high performance: about as varied as a fleet gets. Clean, comfortable and meticulously maintained.</p>
              <img src={img("cub-panel")} alt="The classic instrument panel of one of their J3 Cubs" loading="lazy" />
            </Reveal>
            <Reveal delay={120}><CfiRates /></Reveal>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className={s.gallery} aria-label="The fleet">
        {[
          ["seneca", "Piper Seneca II"],
          ["n7308g", "Cessna 172K N7308G, glass & autopilot"],
          ["cub-hangar", "A J3 Cub at the hangar"],
          ["rainbow", "A rainbow over the field"],
        ].map(([src, cap], i) => (
          <Reveal key={src} delay={i * 90} className={s.shot}>
            <img src={img(src)} alt={cap} loading="lazy" />
            <span>{cap}</span>
          </Reveal>
        ))}
      </section>

      {/* PROGRAMS */}
      <section id="programs" className={`${s.section} ${s.cream}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>Accelerated programs</p>
              <h2 className={s.h2}>Fixed price. <em>Your schedule, not ours.</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>Priority scheduling, flexible dates and locked-in pricing, with realistic hour estimates instead of lowball quotes. Unused hours are refunded or credited.</p>
            </Reveal>
          </div>
          <div className={s.programs}>
            {programs.map((p, i) => (
              <Reveal key={p.name} delay={(i % 4) * 60} className={s.program}>
                <div className={s.programTop}><h3>{p.name}</h3><strong>{p.price}</strong></div>
                <p className={s.programMeta}>{p.aircraft} · {p.time}</p>
                <p className={s.programHours}>{p.hours}</p>
              </Reveal>
            ))}
          </div>
          <p className={s.fine}>Knowledge test and examiner fees not included. Prices from their Training page; all rates subject to change.</p>

          <Reveal className={s.zero}>
            <div className={s.zeroHead}>
              <div>
                <p className={`${s.kicker} ${s.kickerSun}`}>12-month career track</p>
                <h3>Zero to Hero: <em>private pilot to flight instructor.</em></h3>
                <p>A minimum of 315 flight hours, including TAA, complex, high performance, multiengine and all CFI ratings. Financing available.</p>
              </div>
              <div className={s.zeroPrice}>
                <span>Self-funded discounted fee</span>
                <strong>$95,000</strong>
                <small>Standard fee $99,700</small>
              </div>
            </div>
            <ol className={s.timeline}>
              {timeline.map(([m, t, h]) => (
                <li key={m}><b>{m}</b><span>{t}</span><i>{h}</i></li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* TIME BUILDING */}
      <section className={`${s.section} ${s.night} ${s.tb}`}>
        <img src={img("seneca")} alt="" className={s.tbImg} loading="lazy" />
        <div className={`${s.wrap} ${s.tbInner}`}>
          <Reveal>
            <p className={`${s.kicker} ${s.kickerSun}`}>Time building &amp; trips</p>
            <h2 className={`${s.h2} ${s.h2Light}`}>Build hours <em>going somewhere.</em></h2>
            <p className={`${s.lede} ${s.ledeLight}`}>Long cross-countries that teach what a local lesson can&apos;t, like trips from Blairstown to Tampa for Sun &apos;n Fun in the Seneca. Passengers can always ride along free when there&apos;s room.</p>
          </Reveal>
          <div className={s.tbCards}>
            <Reveal className={`${s.tbCard} ${s.tbHot}`}>
              <span>Cessna 310 Time Builder 10 Plus</span>
              <strong>$3,990</strong>
              <p>10 multiengine hours with an MEI on board, at the solo rate. No rental checkout, deposit or fuel surcharge.</p>
            </Reveal>
            <Reveal delay={90} className={s.tbCard}><span>My Trips</span><strong>50%</strong><p>Aircraft rate, instructor at full rate. You fly, log and learn.</p></Reveal>
            <Reveal delay={180} className={s.tbCard}><span>Safety Pilot</span><strong>50%</strong><p>Aircraft rate, no instructor fee. Rated students log time as PIC.</p></Reveal>
            <Reveal delay={270} className={s.tbCard}><span>Fly-Outs</span><strong>Shared</strong><p>Split expenses with other students; pay only while at the controls.</p></Reveal>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className={`${s.section} ${s.cream}`}>
        <div className={`${s.wrap} ${s.geoff}`}>
          <Reveal className={s.geoffCard}>
            <p className={s.cardKicker}>Founder · Owner · Chief Pilot</p>
            <h2 className={s.h2}>Geoffrey Orlandi</h2>
            <p className={s.creds}>CFI · CFII · MEI · AIGI · UAS · JD · Gold Seal Flight Instructor</p>
            <div className={s.geoffStats}>
              <div><strong>10,200+</strong><span>flight hours</span></div>
              <div><strong>7,900+</strong><span>hours instructing</span></div>
              <div><strong>2007</strong><span>CFI since</span></div>
            </div>
            <p className={s.lede}>
              A pilot since 2000, Geoff began instructing part time in Blairstown in April 2011 and opened OFC full time on September 1, 2012. He&apos;s
              flown private, commercial, skydive and airline operations, and won national awards for flight instruction excellence from 2013 through 2019.
            </p>
          </Reveal>
          <Reveal delay={120} className={s.pledge}>
            <p className={s.pledgeKicker}>My pledge to you</p>
            <blockquote>
              &ldquo;I will do everything I can to deliver the most rewarding flying experience available, with emphasis on sound piloting skills,
              procedural discipline, broad aeronautical knowledge, and effective aeronautical decision making, all while keeping it affordable and fun.&rdquo;
            </blockquote>
            <cite>Geoffrey Orlandi</cite>
          </Reveal>
        </div>
        <div className={s.wrap}>
          <div className={s.team}>
            {team.map(([n, c, r], i) => (
              <Reveal key={n} delay={(i % 3) * 70} className={s.member}>
                <strong>{n}</strong>
                <span className={s.memberCreds}>{c}</span>
                <span>{r}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <section className={s.milestones} aria-label="Recent student milestones">
        <p>Recent milestones</p>
        <div className={s.mileTrack}>
          {[...milestones, ...milestones].map((m, i) => <span key={i} aria-hidden={i >= milestones.length}>{m}</span>)}
        </div>
      </section>

      {/* FUNDING */}
      <section className={`${s.section} ${s.cream} ${s.fundingSection}`}>
        <div className={`${s.wrap} ${s.funding}`}>
          <Reveal>
            <p className={s.kicker}>Funding your training</p>
            <h2 className={s.h2}>Don&apos;t let money <em>be the roadblock.</em></h2>
            <p className={s.lede}>OFC partners with Stratus Financial and Flight Training Finance, in both Florida and New Jersey, and keeps a list of scholarships and grants for its students.</p>
          </Reveal>
          <Reveal delay={120} className={s.fundCards}>
            <div><strong>Stratus Financial</strong><span>Zero to Hero and individual certificate loans</span></div>
            <div><strong>Flight Training Finance</strong><span>Private, Instrument and Commercial loans</span></div>
            <div><strong>AOPA</strong><span>A credit line paid directly to you</span></div>
            <p className={s.scholar}>Scholarships: AOPA · EAA · NBAA · Ninety-Nines · Women in Aviation · Civil Air Patrol · Lindbergh Foundation · Sisters of the Skies · and more</p>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={s.contact}>
        <img src={img("rainbow")} alt="" className={s.contactImg} loading="lazy" />
        <div className={s.contactShade} />
        <div className={`${s.wrap} ${s.contactInner}`}>
          <Reveal>
            <p className={`${s.kicker} ${s.kickerSun}`}>Flying is the answer</p>
            <h2 className={s.contactTitle}>Let us bring aviation <em>into your life.</em></h2>
            <div className={s.ctas}>
              <a href={contact.tel} className={`${s.btn} ${s.btnSun}`}>Call or Text {contact.phone}</a>
              <a href={`mailto:${contact.email}`} className={`${s.btn} ${s.btnGhost}`}>Email Geoff</a>
            </div>
            <div className={s.bases}>
              <a href={contact.njMaps} target="_blank" rel="noreferrer" className={s.base}>
                <span>New Jersey base</span>
                <strong>Blairstown Airport (1N7)</strong>
                <p>140 Kerrs Corner Rd., Blairstown, NJ 07825</p>
              </a>
              <a href={contact.flMaps} target="_blank" rel="noreferrer" className={s.base}>
                <span>Florida base</span>
                <strong>Tampa Executive (VDF)</strong>
                <p>Tampa, FL</p>
              </a>
            </div>
            <p className={s.contactLinks}>
              <a href={contact.facebook} target="_blank" rel="noreferrer">Facebook</a> · Enrolled students book online via <a href={contact.schedule} target="_blank" rel="noreferrer">Flight Schedule Pro</a>
            </p>
          </Reveal>
          <Reveal delay={120}><Inquiry email={contact.email} /></Reveal>
        </div>
        <footer className={`${s.wrap} ${s.footer}`}>
          <span>© {new Date().getFullYear()} Orlandi Flight Center, LLC · Blairstown, NJ &amp; Tampa, FL</span>
          <span>Website concept by Stratum</span>
        </footer>
      </section>
    </div>
  );
}
