// Dream Flight School (dreamflightschool.com): redesign concept by Stratum
// Facts are from dreamflightschool.com; photos are the school's own (cropped from its site), copied into /public/dream-flight.
import { Cormorant_Garamond, Figtree } from "next/font/google";
import s from "./styles.module.css";
import { DualCalculator, Inquiry, Nav, RateBoard, Reveal } from "./client";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600", "700"], style: ["normal", "italic"], variable: "--df-display" });
const sans = Figtree({ subsets: ["latin"], variable: "--df-sans" });

export const metadata = {
  title: "Dream Flight School | Flight Training at Carroll County Regional Airport (KDMW), Westminster, MD",
  description: "Discovery flights, private, instrument and commercial training, aircraft rental and photo flights in Cessna 172s, a Diamond DA40 and Cirrus SR22s.",
};

const img = (n: string) => `/dream-flight/${n}.jpg`;
const contact = {
  phone: "443-244-9218",
  tel: "tel:+14432449218",
  email: "info@dreamflightschool.com",
  mailto: (subject: string) => `mailto:info@dreamflightschool.com?subject=${encodeURIComponent(subject)}`,
  address: ["200 Airport Dr, SPC 12", "Westminster, MD 21157"],
  maps: "https://www.google.com/maps/search/?api=1&query=Carroll+County+Regional+Airport+200+Airport+Dr+Westminster+MD+21157",
  embed: "https://maps.google.com/maps?q=200%20Airport%20Dr%2C%20Westminster%2C%20MD%2021157&t=m&z=13&output=embed",
};

const aircraft = [
  { tail: "N382DF", model: "Cessna 172N", rate: 199, block: 189.05 },
  { tail: "N383DF", model: "Cessna 172N", rate: 199, block: 189.05 },
  { tail: "N672DS", model: "2007 Diamond DA40", rate: 219, block: 208.05 },
  { tail: "N284LM", model: "2005 Cirrus SR22", rate: 319, block: 303.05 },
  { tail: "N425CD", model: "2004 Cirrus SR22", rate: 319, block: 303.05 },
  { tail: "SIM", model: "Redbird FMX simulator", rate: 79, block: 75.05 },
];

const fleet = [
  { img: "skyhawk-tail", name: "Cessna 172", tails: "N382DF · N383DF", rate: 199, line: "High wing, excellent visibility, and windows that open in flight for photos. The most widely used training airplane." },
  { img: "da40", name: "Diamond DA40", tails: "N672DS · 2007", rate: 219, line: "Four seats, stick controls and a Garmin G1000 glass cockpit under a big panoramic canopy." },
  { img: null, name: "Cirrus SR22", tails: "N284LM · N425CD", rate: 319, line: "Two Cirrus SR22s (2004 and 2005) for pilots ready to go farther, faster." },
  { img: null, name: "Redbird FMX", tails: "Simulator", rate: 79, line: "A flight simulator for practicing procedures and instrument skills at a fraction of the cost of flying." },
];

const steps = [
  ["50 min", "On the ground", "Go over the lesson plan, learn the parts of the airplane and how they work, preflight it, run the checklist, start the engine and taxi to the runway."],
  ["~500 ft", "You take the controls", "Your instructor handles the takeoff, then hands the airplane to you."],
  ["~3,000 ft", "Fly it yourself", "Turns, climbs, descents and straight-and-level flight. You're the pilot for most of the 40 minutes in the air."],
  ["Landing", "Back to the hangar", "Your instructor lands, and you shut the airplane down with the checklist."],
  ["Logbook", "It counts", "You leave with a logbook. The time never expires and counts toward a private pilot certificate."],
];

const team = {
  fullTime: ["Joe Nealis", "Ben Farence", "Max Lawyer"],
  partTime: ["Enrico Bernoni", "Roman Kucharyk"],
};

const shop = ["FAR/AIM", "Sectional & IFR charts", "Approach plates", "ASA logbooks & oral exam guides", "Flight computers & plotters", "VFR/IFR kneeboards", "David Clark & ASA headsets", "Cessna 172S & DA40 manuals", "AeroShell 15W50 oil"];

const faq = [
  ["Is flying safe?", "Flying is safer than driving a car. In the rare event of an in-flight emergency, a small airplane can glide without power for several miles to find a suitable landing place."],
  ["Are your instructors FAA certified?", "Yes. Every instructor is an FAA-certified commercial pilot with at least 350 hours in the specific make and model airplane used at the school."],
  ["Can I switch instructors?", "Anytime. We recommend trying a few instructors early on, then sticking with your favorite for the rest of your training."],
  ["How long does a private pilot certificate take?", "The FAA requires 40 hours; the national average is 60–80. It can take as little as 3 weeks or as long as a year. Most students training part time with a full-time job take 6–8 months."],
  ["How old do I have to be?", "Any age to fly with an instructor. 16 to solo and 17 for a private pilot certificate. Many students start early and celebrate their 16th birthday with their first solo!"],
  ["Do I need perfect vision?", "No. Your eyesight just needs to be correctable to at least 20/40 with glasses or contacts."],
  ["Can I buy a flight as a gift?", "Yes. Gift certificates for discovery flights and lessons are available at the school, or call and we'll take payment over the phone and mail one to you."],
  ["Do you offer financing?", "Yes, through Pilot Finance, Inc. Stop by the school for more information or an application."],
];

export default function DreamFlight() {
  return (
    <div id="top" className={`${s.root} ${display.variable} ${sans.variable}`}>
      <Nav phone={contact.phone} tel={contact.tel} />

      {/* HERO: dusk sky */}
      <section className={s.hero}>
        <div className={s.sky} aria-hidden>
          <span className={s.stars} />
          <span className={s.sun} />
          <svg className={s.trail} viewBox="0 0 1200 600" preserveAspectRatio="none">
            <path d="M-40 520 C 260 470, 520 300, 820 210 S 1180 90, 1260 60" />
          </svg>
          <svg viewBox="0 0 24 24" className={s.heroPlane}><path d="M12 2c.8 0 1.4.7 1.4 1.6V9l7.6 4.4v2l-7.6-2.2v4.6l2.2 1.6V21L12 20l-3.6 1v-1.6l2.2-1.6v-4.6L3 15.4v-2L10.6 9V3.6C10.6 2.7 11.2 2 12 2z" /></svg>
          <span className={s.horizon} />
        </div>
        <div className={s.heroInner}>
          <div className={s.heroCopy}>
            <p className={`${s.eyebrow} ${s.rise}`}>Carroll County Regional Airport · KDMW · Westminster, MD</p>
            <h1 className={`${s.heroTitle} ${s.rise}`} style={{ animationDelay: "120ms" }}>
              You&apos;ve always <em>dreamt</em> of flying.
            </h1>
            <p className={`${s.heroLede} ${s.rise}`} style={{ animationDelay: "260ms" }}>
              Cross-country trips over western canyons. Remote islands only reachable by air. It starts with one lesson, one-on-one with an
              FAA-certified instructor.
            </p>
            <div className={`${s.ctas} ${s.rise}`} style={{ animationDelay: "400ms" }}>
              <a href="#discovery" className={`${s.btn} ${s.btnGold}`}>Book a $139 Discovery Flight</a>
              <a href="#rates" className={`${s.btn} ${s.btnGhost}`}>Fleet &amp; Rates</a>
            </div>
          </div>
          <div className={`${s.postcards} ${s.rise}`} style={{ animationDelay: "520ms" }} aria-hidden>
            <figure className={s.card1}><img src={img("skyhawk-ramp")} alt="" /><figcaption>Cessna 172</figcaption></figure>
            <figure className={s.card2}><img src={img("da40")} alt="" /><figcaption>Diamond DA40</figcaption></figure>
            <figure className={s.card3}><img src={img("student")} alt="" /><figcaption>Learn to fly!</figcaption></figure>
          </div>
        </div>
        <div className={`${s.facts} ${s.rise}`} style={{ animationDelay: "640ms" }}>
          {[["Since", "2011"], ["Lessons", "One-on-one"], ["Office", "9–5, 7 days"], ["Fleet", "C172 · DA40 · SR22"]].map(([k, v]) => (
            <div key={k}><small>{k}</small><b>{v}</b></div>
          ))}
        </div>
      </section>

      {/* DISCOVERY FLIGHT */}
      <section id="discovery" className={`${s.section} ${s.cream}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>The Discovery Flight</p>
              <h2 className={s.h2}>Ninety minutes that <em>change everything.</em></h2>
            </Reveal>
            <Reveal delay={120} className={s.ticket}>
              <div>
                <span className={s.ticketLabel}>Discovery Flight</span>
                <strong>$139</strong>
                <span className={s.ticketSub}>1.5 hours · 40 minutes in the air</span>
              </div>
              <a href={contact.tel} className={`${s.btn} ${s.btnInk}`}>Call to Book</a>
            </Reveal>
          </div>
          <Reveal className={s.profile}>
            <svg viewBox="0 0 800 240" role="img" aria-label="Flight profile: ground lesson, takeoff, you take the controls at about 500 feet, maneuvers at about 3,000 feet, landing">
              <defs>
                <linearGradient id="df-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#d9a35b" stopOpacity="0.35" />
                  <stop offset="1" stopColor="#d9a35b" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[60, 120, 180].map((y) => <line key={y} x1="0" x2="800" y1={y} y2={y} className={s.grid} />)}
              <text x="6" y="55" className={s.axis}>3,000 ft</text>
              <text x="6" y="175" className={s.axis}>500 ft</text>
              <path d="M20 215 L170 215 C 200 215, 210 190, 240 178 C 300 150, 340 80, 400 62 C 440 50, 460 74, 490 62 C 520 50, 540 74, 570 62 C 600 52, 620 60, 640 80 C 680 130, 700 205, 730 215 L780 215 L780 240 L20 240 Z" fill="url(#df-fill)" />
              <path className={s.flightPath} d="M20 215 L170 215 C 200 215, 210 190, 240 178 C 300 150, 340 80, 400 62 C 440 50, 460 74, 490 62 C 520 50, 540 74, 570 62 C 600 52, 620 60, 640 80 C 680 130, 700 205, 730 215 L780 215" />
              <line x1="0" x2="800" y1="215" y2="215" className={s.ground} />
              {[[95, 215], [240, 178], [480, 60], [730, 215]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="7" className={s.wpt} />)}
            </svg>
          </Reveal>
          <ol className={s.steps}>
            {steps.map(([tag, title, body], i) => (
              <Reveal key={title} delay={i * 80} className={s.step}>
                <span className={s.stepTag}>{tag}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* TRAINING */}
      <section className={`${s.section} ${s.night}`}>
        <div className={`${s.wrap} ${s.training}`}>
          <Reveal>
            <p className={`${s.kicker} ${s.kickerLight}`}>Flight training</p>
            <h2 className={`${s.h2} ${s.h2Light}`}>New pilot or new rating, <em>we&apos;ll get you there.</em></h2>
            <p className={`${s.lede} ${s.ledeLight}`}>
              Every lesson is one-on-one with an FAA-certified instructor. Students get online scheduling after their first lesson, so you can view
              and change lessons from home.
            </p>
            <div className={s.programs}>
              {["Discovery flights", "Private pilot", "Instrument rating", "Commercial pilot", "Aircraft rental", "Photo & sightseeing flights"].map((p) => <span key={p}>{p}</span>)}
            </div>
          </Reveal>
          <Reveal delay={120} className={s.numbers}>
            <div><strong>$12–16K</strong><span>estimated cost of a private pilot certificate, depending on how often you fly</span></div>
            <div><strong>60–80 hrs</strong><span>national average (FAA minimum is 40)</span></div>
            <div><strong>6–8 mo</strong><span>typical for part-time students with a full-time job</span></div>
            <div><strong>16 / 17</strong><span>minimum age to solo / to earn your certificate</span></div>
          </Reveal>
        </div>
      </section>

      {/* FLEET & RATES */}
      <section id="rates" className={`${s.section} ${s.cream}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>Fleet &amp; rates</p>
              <h2 className={s.h2}>From Skyhawk <em>to Cirrus.</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>Train in the airplanes our instructors know best, then rent them for your own adventures. Every price is posted, with no surprises.</p>
            </Reveal>
          </div>
          <div className={s.fleet}>
            {fleet.map((a, i) => (
              <Reveal key={a.name} delay={i * 80} className={s.plane}>
                {a.img ? <img src={img(a.img)} alt={a.name} loading="lazy" /> : <div className={s.planeArt} aria-hidden><span>{a.name.split(" ")[1]}</span></div>}
                <div className={s.planeBody}>
                  <div className={s.planeTop}><h3>{a.name}</h3><span>${a.rate}<small>/hr</small></span></div>
                  <p className={s.tails}>{a.tails}</p>
                  <p>{a.line}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className={s.ratesGrid}>
            <Reveal><RateBoard aircraft={aircraft} instruction={{ rate: 99, block: 94.05 }} /></Reveal>
            <Reveal delay={120}>
              <DualCalculator plane={199} instructor={99} />
              <p className={s.finance}>Financing available through <strong>Pilot Finance, Inc.</strong></p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* INSTRUCTORS */}
      <section id="instructors" className={`${s.section} ${s.paper}`}>
        <div className={`${s.wrap} ${s.founder}`}>
          <Reveal className={s.founderMedia}>
            <img src={img("new-pilots")} alt="Two people standing in front of a Cessna on the ramp" loading="lazy" />
            <img src={img("da40-panel")} alt="The Garmin G1000 panel of the Diamond DA40" loading="lazy" />
          </Reveal>
          <div>
            <Reveal>
              <p className={s.kicker}>Meet the founder</p>
              <h2 className={s.h2}>Jeremy Etzkorn: <em>teaching is his passion.</em></h2>
              <p className={s.lede}>
                Jeremy started Dream Flight School in August 2011. He&apos;s a certified flight instructor and airline transport pilot with over 3,000
                hours in the Cessna 172 and Diamond DA40, more than twelve years of teaching, and over 20 students taken to their private pilot
                certificate. He&apos;s flown to 28 states, the Bahamas, Turks and Caicos, and the U.S. Virgin Islands, and he hopes to bring his love of
                flying to every student.
              </p>
            </Reveal>
            <Reveal delay={100} className={s.stats}>
              <div><strong>3,000+</strong><span>hours in the school&apos;s make and model</span></div>
              <div><strong>12+</strong><span>years teaching</span></div>
              <div><strong>28</strong><span>states flown, plus the islands</span></div>
            </Reveal>
            <Reveal delay={160} className={s.crew}>
              <div><p className={s.crewLabel}>Full-time instructors</p><p>{team.fullTime.join(" · ")}</p></div>
              <div><p className={s.crewLabel}>Part-time instructors</p><p>{team.partTime.join(" · ")}</p></div>
              <p className={s.crewNote}>Every instructor is an FAA-certified commercial pilot with 350+ hours in the airplanes you&apos;ll fly. Switch instructors anytime.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MORE WAYS TO FLY */}
      <section className={`${s.section} ${s.cream}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>More ways to fly</p>
              <h2 className={s.h2}>Not ready to train? <em>Come along anyway.</em></h2>
            </Reveal>
          </div>
          <div className={s.extras}>
            <Reveal className={s.extra}>
              <img src={img("skyhawk-side")} alt="A Cessna 172 Skyhawk on the ramp under a cloudy sky" loading="lazy" />
              <h3>Photo &amp; sightseeing flights</h3>
              <p>See the region from above, for as long as you like, at standard rental and instructor rates. Open the Cessna&apos;s window for a bird&apos;s-eye photo, or take in the DA40&apos;s panoramic canopy.</p>
            </Reveal>
            <Reveal delay={100} className={s.extra}>
              <div className={s.gift} aria-hidden><span>Gift</span><strong>Discovery Flight</strong><em>for someone who dreams of flying</em></div>
              <h3>Gift certificates</h3>
              <p>Discovery flights and lessons make unforgettable gifts. Pick one up at the school, or call and we&apos;ll mail it to you.</p>
            </Reveal>
            <Reveal delay={200} className={s.extra}>
              <img src={img("pilot-shop")} alt="The pilot shop display case at Dream Flight School" loading="lazy" />
              <h3>Pilot shop</h3>
              <ul className={s.shopList}>{shop.map((x) => <li key={x}>{x}</li>)}</ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className={`${s.section} ${s.paper}`}>
        <div className={`${s.wrap} ${s.faqWrap}`}>
          <Reveal>
            <p className={s.kicker}>Good questions</p>
            <h2 className={s.h2}>Before your <em>first flight.</em></h2>
            <img src={img("c172-panel")} alt="The instrument panel of a Cessna 172S" className={s.faqImg} loading="lazy" />
          </Reveal>
          <div>
            {faq.map(([q, a], i) => (
              <Reveal key={q} delay={i * 50}>
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
        <div className={s.sky} aria-hidden><span className={s.stars} /><span className={s.horizon} /></div>
        <div className={`${s.wrap} ${s.contactInner}`}>
          <Reveal>
            <p className={`${s.kicker} ${s.kickerLight}`}>So don&apos;t wait</p>
            <h2 className={s.contactTitle}>Come see the airplanes. <em>Then fly one.</em></h2>
            <p className={`${s.lede} ${s.ledeLight}`}>Call for a personal tour of the facility and aircraft, or to schedule your discovery flight.</p>
            <div className={s.ctas}>
              <a href={contact.tel} className={`${s.btn} ${s.btnGold}`}>Call {contact.phone}</a>
              <a href={contact.mailto("Discovery flight")} className={`${s.btn} ${s.btnGhost}`}>Email Us</a>
            </div>
            <div className={s.contactCard}>
              <div><span>Find us</span><p><a href={contact.maps} target="_blank" rel="noreferrer">Carroll County Regional Airport, Hangar #5</a></p><small>At the end of Airport Drive, turn left and follow the signs.</small></div>
              <div><span>Mail</span><p>{contact.address[0]}<br />{contact.address[1]}</p></div>
              <div><span>Office hours</span><p>9:00 a.m.–5:00 p.m., 7 days a week</p></div>
              <div><span>Email</span><p><a href={`mailto:${contact.email}`}>{contact.email}</a></p></div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Inquiry email={contact.email} />
            <div className={s.map}><iframe src={contact.embed} title="Map to Carroll County Regional Airport, Westminster, MD" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
          </Reveal>
        </div>
        <footer className={`${s.wrap} ${s.footer}`}>
          <span>© {new Date().getFullYear()} Dream Aviation, Inc. · Dream Flight School · Westminster, Maryland</span>
          <span>Website concept by Stratum</span>
        </footer>
      </section>
    </div>
  );
}
