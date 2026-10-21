// West Nyack Aviation (westnyackaviation.com): redesign concept by Stratum
// Facts are from westnyackaviation.com; photos are the school's own, copied into /public/west-nyack-aviation.
import { Anton, Libre_Franklin } from "next/font/google";
import s from "./styles.module.css";
import { BaseRates, Inquiry, Nav, Reveal } from "./client";

const display = Anton({ subsets: ["latin"], weight: "400", variable: "--wn-display" });
const sans = Libre_Franklin({ subsets: ["latin"], variable: "--wn-sans" });

export const metadata = {
  title: "West Nyack Aviation | Flight Training at Orange County, East Hampton & Brookhaven",
  description: "Flight instruction from Sport Pilot to ATP since 1985. Intro flight lessons, private pilot training, instrument, commercial and CFI ratings across New York.",
};

const img = (n: string) => `/west-nyack-aviation/${n}.jpg`;
const contact = {
  phone: "631-374-9652",
  tel: "tel:+16313749652",
  email: "Robert@WestNyackAviation.com",
  facebook: "https://www.facebook.com/profile.php?id=61562349178189",
  instagram: "https://www.instagram.com/westnyackaviation/",
};

const prereqs = [
  "Speak and understand English",
  "Be 16 to solo (training can start at any age)",
  "FAA Student Pilot Certificate (free; your instructor helps)",
  "Third-class FAA medical certificate",
  "Aircraft renter's insurance",
  "Proof of age and citizenship (visitors: proof of legal status and TSA approval)",
];

const ppl = [
  ["40", "flight hours minimum"],
  ["20", "hours of instruction"],
  ["10", "hours of solo flight"],
];

const pplItems = ["Dual and solo cross-country flights", "Night instruction and a night cross-country", "Simulated instrument (IFR) instruction", "Written exam before solo, and a comprehensive written before the check ride", "Oral and flight test with a Designated Pilot Examiner"];

const ladder = [
  { n: "01", title: "Private Pilot", body: "Your license to learn: fly day or night in clear weather and carry passengers. Sport Pilot is a shorter option with more restrictions." },
  { n: "02", title: "Instrument Rating", body: "Precision and the freedom to fly home when the weather turns. 50 hours of cross-country and 40 hours of instrument time, 15 with a CFII." },
  { n: "03", title: "Commercial Pilot", body: "250 total hours and a second-class medical open the door to paid flying. Earn the instrument rating first: that time counts toward the minimums." },
  { n: "04", title: "Flight Instructor", body: "Most career pilots instruct next, building time while getting paid. CFI, then CFII; MEI through our affiliates." },
  { n: "05", title: "Airline Transport Pilot", body: "1,500 hours for Part 121 airline flying. ATP training is available through our affiliate network." },
];

const endorsements = ["High Performance", "Complex", "High Altitude", "Tailwheel", "TAA"];

const airports = [
  ["East Hampton", "Wainscott, NY"],
  ["Brookhaven", "Shirley, NY"],
  ["Republic", "Farmingdale, NY"],
  ["Gabreski", "Westhampton, NY"],
  ["Orange County", "Montgomery, NY"],
  ["Warwick Municipal", "Warwick, NY"],
  ["Resnick", "Ellenville, NY"],
  ["Randall", "Middletown, NY"],
  ["Sussex County", "Sussex, NJ"],
  ["August Field", "Griffin Island, Hudson River · seaplane & tailwheel"],
];

const affiliates = [
  ["Curtis Air Taxi", "Air taxi services"],
  ["Goodspeed Seaplane Academy", "Seaplane rating"],
  ["Andover Flight Academy", "Spin, aerobatic & tailwheel"],
  ["Groton Multi Engine Training", "Multi-engine"],
  ["Wenk Aviation", "Insurance"],
  ["VIP Avionics", "Avionics"],
  ["Total Aircraft Parts", "Maintenance & parts"],
];

const journey = ["Ramapo Valley Airport", "Clow International, Chicago", "Monroe, Louisiana", "Nashville, Tennessee", "Chicago", "Sag Harbor, New York"];

export default function WestNyackAviation() {
  return (
    <div id="top" className={`${s.root} ${display.variable} ${sans.variable}`}>
      <Nav phone={contact.phone} tel={contact.tel} />

      {/* HERO */}
      <section className={s.hero}>
        <img className={s.heroImg} src={img("trainer-climb")} alt="A West Nyack Aviation Cessna trainer climbing out over the trees" fetchPriority="high" />
        <div className={s.heroShade} />
        <div className={s.heroInner}>
          <p className={`${s.eyebrow} ${s.rise}`}>Orange County · East Hampton · Brookhaven</p>
          <h1 className={`${s.heroTitle} ${s.rise}`} style={{ animationDelay: "120ms" }}>
            Take to<br />the <span>skies.</span>
          </h1>
          <p className={`${s.heroLede} ${s.rise}`} style={{ animationDelay: "260ms" }}>
            Expert flight instruction from pilots who have been there and done that, from your first lesson all the way to the ATP. Training tailored to
            your schedule and your budget.
          </p>
          <div className={`${s.ctas} ${s.rise}`} style={{ animationDelay: "400ms" }}>
            <a href="#start" className={`${s.btn} ${s.btnPrimary}`}>Book a $200 Intro Flight</a>
            <a href={contact.tel} className={`${s.btn} ${s.btnGhost}`}>Call {contact.phone}</a>
          </div>
        </div>
        <div className={`${s.heroStats} ${s.rise}`} style={{ animationDelay: "560ms" }}>
          <div><b>1985</b><span>Founded by Robert Kittine</span></div>
          <div><b>6</b><span>Instructors across three airports</span></div>
          <div><b>10+</b><span>Northeast airports we teach at</span></div>
          <div><b style={{ whiteSpace: "nowrap" }}>Sport → ATP</b><span>Every step of the way</span></div>
        </div>
      </section>

      {/* GET STARTED */}
      <section id="start" className={`${s.section} ${s.paper}`}>
        <div className={s.wrap}>
          <div className={s.start}>
            <Reveal className={s.intro}>
              <p className={s.kicker}>Let&apos;s get started</p>
              <h2 className={s.h2}>Your first lesson <span>is $200.</span></h2>
              <p className={s.lede}>
                The introductory flight lesson starts on the ground with the basics of general aviation, then a preflight inspection of a Cessna 172 or
                similar trainer. Then you take the controls for a short flight with your instructor, and decide if flying is for you.
              </p>
              <div className={s.ticket}>
                <div><small>Intro flight lesson</small><b>$200</b></div>
                <ol>
                  <li>Ground lesson</li>
                  <li>Preflight inspection</li>
                  <li>You fly</li>
                </ol>
              </div>
              <a href={contact.tel} className={`${s.btn} ${s.btnDark}`}>Call to Schedule</a>
            </Reveal>
            <Reveal delay={120} className={s.startMedia}>
              <img src={img("walkaround")} alt="An instructor and student talking at the wing of a Cessna" loading="lazy" />
              <div className={s.prereq}>
                <p className={s.listTitle}>Before you solo</p>
                <ul className={s.checks}>{prereqs.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
            </Reveal>
          </div>

          <div className={s.pplBlock}>
            <Reveal>
              <p className={s.kicker}>The private pilot license</p>
              <h3 className={s.h3}>What the FAA asks of you</h3>
            </Reveal>
            <div className={s.pplGrid}>
              {ppl.map(([n, l], i) => (
                <Reveal key={l} delay={i * 80} className={s.bigStat}>
                  <b>{n}</b>
                  <span>{l}</span>
                </Reveal>
              ))}
              <Reveal delay={240} className={s.pplList}>
                <ul>{pplItems.map((x) => <li key={x}>{x}</li>)}</ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* RATES */}
      <section id="rates" className={`${s.section} ${s.ink}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={`${s.kicker} ${s.kickerLight}`}>Rates by airport</p>
              <h2 className={`${s.h2} ${s.h2Light}`}>Three bases. <span>One standard.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={`${s.lede} ${s.ledeLight}`}>
                Fly where it suits you. Aircraft and instructor rates are billed per hour of use, and scheduling flexes around instructor and aircraft
                availability.
              </p>
            </Reveal>
          </div>
          <div className={s.rates}>
            <Reveal><BaseRates /></Reveal>
            <Reveal delay={120} className={s.estimate}>
              <p className={s.listTitleLight}>Estimated private pilot license</p>
              <p className={s.estimateBig}>$14K<span>–</span>19K</p>
              <p className={s.estimateNote}>Plus training materials, renter&apos;s insurance, test fees and the check ride. Your instructor will walk you through the total.</p>
              <p className={s.listTitleLight}>What changes your timeline</p>
              <ul className={s.factors}>
                <li><b>Commitment</b> · the biggest factor</li>
                <li><b>How often you fly</b></li>
                <li><b>How concepts click</b></li>
                <li><b>Weather</b></li>
                <li><b>Instructor &amp; aircraft availability</b></li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TRAINING PATH */}
      <section id="training" className={`${s.section} ${s.paper}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>Beyond the PPL</p>
              <h2 className={s.h2}>Sport Pilot <span>to ATP.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>Private Pilot through CFI and CFII in house. Spin training, multi-engine, MEI and ATP training through trusted affiliates. One instructor, start to finish.</p>
            </Reveal>
          </div>
          <ol className={s.ladder}>
            {ladder.map((l, i) => (
              <Reveal key={l.n} delay={i * 80} className={s.rung}>
                <span className={s.rungNum}>{l.n}</span>
                <h3>{l.title}</h3>
                <p>{l.body}</p>
              </Reveal>
            ))}
          </ol>
          <div className={s.extras}>
            <Reveal className={s.extra}>
              <p className={s.listTitle}>Endorsements</p>
              <div className={s.tags}>{endorsements.map((e) => <span key={e}>{e}</span>)}</div>
              <p className={s.extraNote}>Tailwheel and seaplane ratings at other locations or through affiliates.</p>
            </Reveal>
            <Reveal delay={100} className={s.extra}>
              <p className={s.listTitle}>Fly your own airplane</p>
              <p>Training in your own aircraft, including flight reviews and instrument proficiency checks (IPCs).</p>
            </Reveal>
            <Reveal delay={200} className={s.extra}>
              <p className={s.listTitle}>Ground school</p>
              <p>Primary/VFR and Advanced/IFR: online courses, one-on-one, or possible weekly evening group sessions.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* COCKPIT BAND */}
      <section className={s.band} aria-label="Cockpit photos">
        <Reveal className={s.bandShot}><img src={img("panel-9934q")} alt="A student's hands on the controls of a Cessna with a glass-panel navigator" loading="lazy" /></Reveal>
        <Reveal delay={100} className={s.bandShot}><img src={img("panel-glass")} alt="A Cessna instrument panel with electronic flight instruments" loading="lazy" /></Reveal>
        <Reveal delay={200} className={`${s.bandShot} ${s.bandQuote}`}>
          <p>Experienced pilots who have been there, done that, and stay with you from start to finish.</p>
        </Reveal>
      </section>

      {/* SIMULATOR */}
      <section className={`${s.section} ${s.ink}`}>
        <div className={`${s.wrap} ${s.sim}`}>
          <Reveal className={s.simMedia}>
            <img src={img("simulator")} alt="The X-Plane 12 flight simulator setup with yoke, throttle quadrant and wraparound screens" loading="lazy" />
          </Reveal>
          <div>
            <Reveal>
              <p className={`${s.kicker} ${s.kickerLight}`}>Flight simulator training</p>
              <h2 className={`${s.h2} ${s.h2Light}`}>Practice on the ground. <span>Save in the air.</span></h2>
              <p className={`${s.lede} ${s.ledeLight}`}>Prepare for your first solo, rehearse emergency procedures, get ready for the instrument rating, and stay current and proficient.</p>
            </Reveal>
            <div className={s.simCards}>
              <Reveal className={s.simCard}>
                <small>Practice sim · near East Hampton</small>
                <b>$75<span>/hr</span></b>
                <p>X-Plane 12, instructor included. Great practice; not loggable time.</p>
              </Reveal>
              <Reveal delay={100} className={`${s.simCard} ${s.simCardAlt}`}>
                <small>Loggable · Center Moriches, NY</small>
                <b>$50<span>/hr + instructor</span></b>
                <p>FAA-approved Gleim simulator at Sunshine Flight Aviation, with dual or supervised time from Robert Kittine or Kevin Gilbert, CFII.</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* NETWORK */}
      <section className={`${s.section} ${s.paper}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>Where we fly</p>
              <h2 className={s.h2}>The whole <span>Northeast.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>Our instructors teach at airports from the East End of Long Island to the Hudson Valley and New Jersey, and many more across the Northeast.</p>
            </Reveal>
          </div>
          <div className={s.network}>
            <Reveal className={s.netMedia}>
              <img src={img("airfield-aerial")} alt="Aerial view of an airfield surrounded by woods, with the coastline beyond" loading="lazy" />
            </Reveal>
            <Reveal delay={120}>
              <ol className={s.airports}>
                {airports.map(([n, w], i) => (
                  <li key={n}><span>{String(i + 1).padStart(2, "0")}</span><b>{n}</b><em>{w}</em></li>
                ))}
              </ol>
            </Reveal>
          </div>
          <Reveal className={s.affiliates}>
            <p className={s.listTitle}>Our affiliates</p>
            <div>{affiliates.map(([n, r]) => <span key={n}><b>{n}</b>{r}</span>)}</div>
          </Reveal>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className={`${s.section} ${s.ink} ${s.storySection}`}>
        <div className={`${s.wrap} ${s.story}`}>
          <div>
            <Reveal>
              <p className={`${s.kicker} ${s.kickerLight}`}>Our story</p>
              <h2 className={`${s.h2} ${s.h2Light}`}>Four decades <span>in the left seat.</span></h2>
              <p className={`${s.lede} ${s.ledeLight}`}>
                In 1959, at 11 years old, Robert Kittine took his first flight lesson at Dutchess County Airport, paid for with his allowance. He kept
                flying by working around the airport. Training at the Aerospace Technological Institute (later FIT&apos;s Professional Flight Department)
                and Air Force service led to a Part 121 airline career and Part 135 charter flying.
              </p>
              <p className={`${s.lede} ${s.ledeLight}`}>
                In 1985 he formed West Nyack Aviation to make flight training more accessible. Today it&apos;s headquartered in Manhattan&apos;s West
                Village and Sag Harbor.
              </p>
            </Reveal>
            <Reveal delay={100} className={s.journey}>
              <p className={s.listTitleLight}>The journey so far</p>
              <ol>{journey.map((j) => <li key={j}>{j}</li>)}</ol>
            </Reveal>
          </div>
          <div className={s.archive}>
            <Reveal className={s.polaroid}>
              <img src={img("type-rating-day")} alt="Archive photo of a pilot standing beside a business jet on the ramp" loading="lazy" />
              <span>From the archives: type rating day</span>
            </Reveal>
            <Reveal delay={140} className={`${s.polaroid} ${s.polaroidTilt}`}>
              <img src={img("n98772-solberg")} alt="Cessna 172 N98772 at Solberg Airport" loading="lazy" />
              <span>N98772, our first factory-new Cessna 172</span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className={`${s.section} ${s.paper}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>More than lessons</p>
              <h2 className={s.h2}>Pilots helping <span>pilots.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>Our team members are aircraft owners themselves. If we can&apos;t help, we&apos;ll point you in the right direction.</p>
            </Reveal>
          </div>
          <div className={s.services}>
            {[
              ["Pilot shop", "At our Orange County hangar: manuals, online courses, kneeboards, charts, checklists, FAR/AIM, headsets from Faro, ASA and Sigtronics, plus Yaesu airband radios."],
              ["Lease-back program", "Own a well-maintained aircraft that sits too much? Put it to work in our Orange County fleet and earn income from it."],
              ["Sky rides & Bird's Eye View", "Special-occasion flights for friends and family, or see a property from above, relative to the villages and beaches."],
              ["Aircraft help", "Moving an aircraft, buying one, and advice on your aviation path, plus referrals to mechanics and avionics shops across the Northeast."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 80} className={s.service}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={s.contact}>
        <div className={`${s.wrap} ${s.contactInner}`}>
          <Reveal>
            <p className={`${s.kicker} ${s.kickerLight}`}>Get started today</p>
            <h2 className={s.contactTitle}>Stop wondering. <span>Start flying.</span></h2>
            <div className={s.ctas}>
              <a href={contact.tel} className={`${s.btn} ${s.btnPrimary}`}>Call {contact.phone}</a>
            </div>
            <div className={s.contactCard}>
              <div><span>Main flight center</span><p>Hangar 8, T-2 Unit, Orange County Airport (KMGJ)<br />500 Dunn Road, Montgomery, NY 12549</p></div>
              <div><span>East Hampton</span><p>Executive Terminal, East Hampton Town Airport (KJPX)<br />50 Industrial Road, Wainscott, NY 11975</p></div>
              <div><span>Instructors wanted</span><p>Send your resume to <a href={`mailto:${contact.email}`}>{contact.email}</a></p></div>
              <div><span>Follow</span><p><a href={contact.instagram} target="_blank" rel="noreferrer">Instagram</a> · <a href={contact.facebook} target="_blank" rel="noreferrer">Facebook</a></p></div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Inquiry email={contact.email} phone={contact.phone} tel={contact.tel} />
          </Reveal>
        </div>
        <footer className={`${s.wrap} ${s.footer}`}>
          <span>© {new Date().getFullYear()} West Nyack Aviation · Manhattan &amp; Sag Harbor, NY</span>
          <span>Website concept by Stratum</span>
        </footer>
      </section>
    </div>
  );
}
