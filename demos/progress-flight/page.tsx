// Progress Flight Academy (progressflightacademy.com): redesign concept by Stratum
// Facts, prices and photos are from progressflightacademy.com (photos copied into /public/progress-flight).
// Location and contact use the DeLand, FL details from the site footer.
import { Urbanist, Schibsted_Grotesk } from "next/font/google";
import s from "./styles.module.css";
import { Inquiry, Nav, RateBoard, Reveal } from "./client";

const display = Urbanist({ subsets: ["latin"], variable: "--pf-display" });
const sans = Schibsted_Grotesk({ subsets: ["latin"], variable: "--pf-sans" });

export const metadata = {
  title: "Progress Flight Academy | Helicopter & Airplane Flight Training in DeLand, FL",
  description: "Robinson R22 and R44 helicopter training and Cessna 172 and 182 airplane training. Private pilot packages, discovery flights, and maintenance and avionics.",
};

const img = (n: string) => `/progress-flight/${n}.jpg`;
const contact = {
  phone: "386-279-4401",
  tel: "tel:+13862794401",
  email: "deland@progressflightacademy.com",
  mailto: (subject: string) => `mailto:deland@progressflightacademy.com?subject=${encodeURIComponent(subject)}`,
  address: ["955 Singleton Dr", "DeLand, FL 32724"],
  maps: "https://www.google.com/maps/search/?api=1&query=955+Singleton+Dr+DeLand+FL+32724",
};

const path = [
  { cert: "Private Pilot", time: "5 weeks", items: ["30 hrs dual R22 instruction", "10 hrs solo rental", "All pre/post-flight reviews", "Unlimited ground instruction*", "Books & materials"] },
  { cert: "Instrument Rating", time: "4 weeks", items: ["35 hrs flight instruction", "Earned while working toward Commercial"] },
  { cert: "Commercial Pilot", time: "6 weeks", items: ["30 hrs solo rental", "Instrument + Commercial track"] },
  { cert: "Flight Instructor", time: "1 week", items: ["10 hrs dual R22 instruction"] },
];

const fleet = [
  { name: "Robinson R22", kind: "Helicopter", rate: "$325/hr dual · $300 solo", note: "Primary helicopter trainer.", photo: "hangar-fleet", alt: "Robinson helicopters lined up in the hangar" },
  { name: "Robinson R44 II", kind: "Helicopter", rate: "$600/hr", note: "Four-seat Robinson for training and private pilot packages.", photo: "r44-dusk", alt: "A Robinson R44 on the ramp at dusk" },
  { name: "Cessna 172", kind: "Airplane", rate: "$225/hr dual · $200 solo", note: "A very safe primary trainer.", photo: "cessna-n19804", alt: "Cessna N19804 in flight" },
  { name: "Cessna 182", kind: "Airplane", rate: "$350/hr dual", note: "Full TAA with a 4-axis autopilot.", photo: null, alt: "" },
];

const avionics = [
  "91.413 transponder certification (24 calendar months)",
  "91.411 pitot-static certification (24 calendar months)",
  "ADS-B transponder installation & certification",
  "Comm/Nav radio installation",
  "Routine, scheduled & unscheduled maintenance",
  "Fixed-wing and helicopter",
];

const faq = [
  ["Do I need an airplane license before helicopter training?", "No. Helicopters and airplanes are different categories to the FAA, so you don't need any fixed-wing experience to start."],
  ["I want both ratings. Which should I start first?", "Start with the helicopter. In an emergency people revert to their first training, and ingrained airplane reactions can compromise safety in a helicopter."],
  ["I already fly airplanes. Can I learn helicopters?", "Absolutely. It takes a little extra effort from you and your instructor to break airplane habits, and before you know it you'll be a safe helicopter pilot."],
  ["How old do I have to be?", "You can start at any age. You can solo at 16, and you're eligible for a private pilot certificate at 17."],
  ["How fast can I earn a private certificate?", "In as little as 5 weeks if you fly 10 hours a week. Lessons are available on weekends and evenings as needed."],
  ["Can I take an introductory flight?", "Yes. You'll spend time with your instructor on the basics of the controls, then you fly the aircraft with their help. Discovery flights are loggable."],
];

export default function ProgressFlight() {
  return (
    <div id="top" className={`${s.root} ${display.variable} ${sans.variable}`}>
      <Nav phone={contact.phone} tel={contact.tel} />

      {/* HERO */}
      <section className={s.hero}>
        <img className={s.heroImg} src={img("heli-flight")} alt="A helicopter in flight against a blue sky" fetchPriority="high" />
        <div className={s.heroShade} />
        <div className={s.rotor} aria-hidden><span /><span /></div>
        <div className={s.heroInner}>
          <img src="/progress-flight/logo.png" alt="Progress Flight Academy" className={`${s.heroLogo} ${s.rise}`} />
          <p className={`${s.eyebrow} ${s.rise}`} style={{ animationDelay: "80ms" }}>DeLand, Florida · Helicopter &amp; airplane training</p>
          <h1 className={`${s.heroTitle} ${s.rise}`} style={{ animationDelay: "160ms" }}>
            Rotor or wing.<br /><span>Your call.</span>
          </h1>
          <p className={`${s.heroLede} ${s.rise}`} style={{ animationDelay: "280ms" }}>
            Experienced instructors, Robinson helicopters and Cessna airplanes, and on-site mechanics. Private pilot through flight instructor,
            on a schedule that works around your job.
          </p>
          <div className={`${s.ctas} ${s.rise}`} style={{ animationDelay: "400ms" }}>
            <a href="#rates" className={`${s.btn} ${s.btnRed}`}>Book a Discovery Flight</a>
            <a href="#training" className={`${s.btn} ${s.btnGlass}`}>Compare Training</a>
          </div>
        </div>
        <div className={`${s.ticker} ${s.rise}`} style={{ animationDelay: "560ms" }}>
          {[["R22", "from $300/hr"], ["R44 II", "$600/hr"], ["C172", "from $200/hr"], ["C182", "$350/hr"], ["Ground", "$80/hr"]].map(([a, b]) => (
            <div key={a}><b>{a}</b><span>{b}</span></div>
          ))}
        </div>
      </section>

      {/* TWO TRACKS */}
      <section id="training" className={`${s.section} ${s.light}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>Two ways to fly</p>
              <h2 className={s.h2}>Helicopter or airplane. <span>Same standard.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>Private Pilot, Instrument, Commercial and Certified Flight Instructor training, plus rental aircraft, ground instruction and an on-site pilot supply store.</p>
            </Reveal>
          </div>
          <div className={s.tracks}>
            <Reveal className={s.track}>
              <div className={s.trackImg}><img src={img("r44-dusk")} alt="A Robinson R44 helicopter on the ramp at dusk" loading="lazy" /><span className={s.trackTag}>Rotorcraft</span></div>
              <div className={s.trackBody}>
                <h3>Helicopter training</h3>
                <p>Train in the Robinson R22 and R44, among the most used helicopters in the world. No airplane experience needed to start.</p>
                <dl><div><dt>FAA minimum</dt><dd>35 hrs</dd></div><div><dt>Dual / solo</dt><dd>20 / 5</dd></div><div><dt>R22 PPL package</dt><dd>$17,000</dd></div></dl>
              </div>
            </Reveal>
            <Reveal delay={120} className={s.track}>
              <div className={s.trackImg}><img src={img("cessna-n19804")} alt="Cessna N19804 in flight" loading="lazy" /><span className={s.trackTag}>Fixed wing</span></div>
              <div className={s.trackBody}>
                <h3>Airplane training</h3>
                <p>Learn in the Cessna 172, a very safe trainer, or step up to the technically advanced Cessna 182 with a 4-axis autopilot.</p>
                <dl><div><dt>FAA minimum</dt><dd>40 hrs</dd></div><div><dt>Dual / solo</dt><dd>20 / 10</dd></div><div><dt>C172 PPL package</dt><dd>$12,000</dd></div></dl>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* RATES */}
      <section id="rates" className={`${s.section} ${s.dark}`}>
        <div className={`${s.wrap} ${s.rates}`}>
          <Reveal>
            <p className={`${s.kicker} ${s.kickerLight}`}>Rates &amp; packages</p>
            <h2 className={`${s.h2} ${s.h2Light}`}>Every price, <span>right here.</span></h2>
            <p className={`${s.lede} ${s.ledeLight}`}>
              Pay as you go, or lock in a private pilot package. Discovery flights include a half hour of ground instruction and a half hour of
              flight training that you can log toward your certificate.
            </p>
            <div className={s.extra}>
              <p className={s.extraTitle}>Additional costs</p>
              <div><span>FAA medical</span><b>$110</b></div>
              <div><span>Written exam</span><b>$150 each</b></div>
              <div><span>Examiner fee</span><b>$400–600 each</b></div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <RateBoard />
          </Reveal>
        </div>
      </section>

      {/* CAREER PATH */}
      <section className={`${s.section} ${s.light}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>Helicopter career path</p>
              <h2 className={s.h2}>Zero to instructor <span>in 16 weeks.*</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>Private first, then instrument and commercial so you can fly for compensation, then your instructor certificate to start building time. Completion times are based on 10 flight hours a week.</p>
            </Reveal>
          </div>
          <ol className={s.path}>
            {path.map((p, i) => (
              <Reveal key={p.cert} delay={i * 90} className={s.leg}>
                <div className={s.legTop}>
                  <span className={s.legNum}>0{i + 1}</span>
                  <span className={s.legTime}>{p.time}</span>
                </div>
                <h3>{p.cert}</h3>
                <ul>{p.items.map((x) => <li key={x}>{x}</li>)}</ul>
              </Reveal>
            ))}
          </ol>
          <p className={s.fine}>
            * Completion times assume 10 flight hours per week. Unlimited ground instruction is available Monday–Saturday, 8 am–5 pm; other
            times are billed at $80/hr. Additional flight time is billed at pay-as-you-go student rates (fuel included; 2% airport tax not included).
          </p>
        </div>
      </section>

      {/* FLEET */}
      <section id="fleet" className={`${s.section} ${s.steel}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>The fleet</p>
              <h2 className={s.h2}>Robinsons &amp; Cessnas. <span>Rotor and wing.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>A diverse fleet means you can gain experience in different aircraft types. Every aircraft is maintained by our on-site mechanics, and students also train on a Redbird AATD simulator.</p>
            </Reveal>
          </div>
          <div className={s.fleet}>
            {fleet.map((a, i) => (
              <Reveal key={a.name} delay={(i % 4) * 80} className={s.plane}>
                <div className={s.planeImg}>
                  {a.photo ? <img src={img(a.photo)} alt={a.alt} loading="lazy" /> : <div className={s.planeArt}><span>C182</span><small>TAA · 4-axis autopilot</small></div>}
                  <span className={`${s.kind} ${a.kind === "Helicopter" ? s.kindHeli : ""}`}>{a.kind}</span>
                </div>
                <div className={s.planeBody}>
                  <h3>{a.name}</h3>
                  <p>{a.note}</p>
                  <b>{a.rate}</b>
                </div>
              </Reveal>
            ))}
          </div>
          <div className={s.whyRow}>
            {[
              ["Evenings & weekends", "Most students juggle jobs. We fly weekends and evenings as needed."],
              ["As little as 9 weeks", "Fly consistently and you can earn your certificate fast."],
              ["Hired from within", "Internships and entry-level positions for graduates to help build hours."],
              ["On-site mechanics", "Aircraft maintained to the highest standards, in house."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 70} className={s.why}>
                <strong>{t}</strong>
                <span>{d}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MAINTENANCE */}
      <section id="maintenance" className={`${s.section} ${s.dark}`}>
        <div className={`${s.wrap} ${s.mx}`}>
          <Reveal className={s.mxMedia}>
            <img src={img("r44-maintenance")} alt="A technician working on a Robinson R44 in the hangar" loading="lazy" />
            <span className={s.mxBadge}>Garmin avionics dealer</span>
          </Reveal>
          <Reveal delay={120}>
            <p className={`${s.kicker} ${s.kickerLight}`}>Maintenance &amp; avionics</p>
            <h2 className={`${s.h2} ${s.h2Light}`}>Rotor or fixed wing, <span>kept in top shape.</span></h2>
            <p className={`${s.lede} ${s.ledeLight}`}>
              FAA-certificated mechanics who are Robinson certified and factory trained by Lycoming, Continental and Rolls-Royce. From a radio
              install to a glass-cockpit upgrade.
            </p>
            <ul className={s.checks}>{avionics.map((a) => <li key={a}>{a}</li>)}</ul>
            <div className={s.mxPrice}><span>91.413 transponder check</span><b>$150</b></div>
            <p className={s.brands}>Aspen · TruTrak · PS Engineering · Avidyne · Appareo · L3 · Garmin</p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${s.section} ${s.light}`}>
        <div className={`${s.wrap} ${s.faqWrap}`}>
          <Reveal>
            <p className={s.kicker}>Common questions</p>
            <h2 className={s.h2}>Thinking about <span>helicopters?</span></h2>
            <p className={s.lede}>Call {contact.phone} to arrange a meeting with one of our instructors. On your first lesson you&apos;ll plan a course of action around your goals.</p>
            <img src={img("heli-sunset")} alt="A helicopter flying at sunset" className={s.faqImg} loading="lazy" />
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
            <Reveal className={s.funding}>
              <p className={s.extraTitle}>Financing &amp; scholarships</p>
              <div>{["Meritize", "AOPA flight training loans", "Pilot Finance, Inc.", "Simple Tuition", "EAA scholarships", "The Ninety-Nines", "Women in Aviation"].map((f) => <span key={f}>{f}</span>)}</div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={s.contact}>
        <img src={img("hangar-fleet")} alt="" className={s.contactImg} loading="lazy" />
        <div className={s.contactShade} />
        <div className={`${s.wrap} ${s.contactInner}`}>
          <Reveal>
            <p className={`${s.kicker} ${s.kickerLight}`}>We look forward to flying with you</p>
            <h2 className={s.contactTitle}>Come see the <span>flight line.</span></h2>
            <p className={`${s.lede} ${s.ledeLight}`}>Take a discovery flight and see what it&apos;s like to be a pilot. Call today to discuss your aviation future.</p>
            <div className={s.ctas}>
              <a href={contact.tel} className={`${s.btn} ${s.btnRed}`}>Call {contact.phone}</a>
              <a href={contact.mailto("Discovery flight")} className={`${s.btn} ${s.btnGlass}`}>Email Us</a>
            </div>
            <div className={s.contactCard}>
              <div><span>Visit</span><p><a href={contact.maps} target="_blank" rel="noreferrer">{contact.address[0]}<br />{contact.address[1]}</a></p></div>
              <div><span>Call</span><p><a href={contact.tel}>{contact.phone}</a></p></div>
              <div><span>Email</span><p><a href={`mailto:${contact.email}`}>{contact.email}</a></p></div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Inquiry email={contact.email} />
          </Reveal>
        </div>
        <footer className={`${s.wrap} ${s.footer}`}>
          <span>© {new Date().getFullYear()} Progress Flight Academy · DeLand, Florida</span>
          <span>Website concept by Stratum</span>
        </footer>
      </section>
    </div>
  );
}
