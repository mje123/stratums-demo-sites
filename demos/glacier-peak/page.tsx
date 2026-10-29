// Glacier Peak Aviators (glacierpeakaviators.com): redesign concept by Stratum
// Facts are from glacierpeakaviators.com; photos of N7YZ and the logo are the school's own, copied into /public/glacier-peak.
import { Gloock, Instrument_Sans } from "next/font/google";
import s from "./styles.module.css";
import { Inquiry, LessonCalc, Nav, Programs, Reveal } from "./client";

const display = Gloock({ subsets: ["latin"], weight: "400", variable: "--gp-display" });
const sans = Instrument_Sans({ subsets: ["latin"], variable: "--gp-sans" });

export const metadata = {
  title: "Glacier Peak Aviators | Flight Training at Arlington Municipal Airport (KAWO)",
  description: "A small flight school in Arlington, Washington, about 30 miles north of Seattle. Personalized training from discovery flight to CFII, with a focus on safety, proficiency and professionalism.",
};

const img = (n: string) => `/glacier-peak/${n}.jpg`;
const contact = {
  phone: "425-375-9434",
  tel: "tel:+14253759434",
  email: "cessnapilotbrian@outlook.com",
  facebook: "https://www.facebook.com/glacierpeakaviators",
  maps: "https://www.google.com/maps/search/?api=1&query=Arlington+Municipal+Airport+KAWO+Arlington+WA",
};
const RATES = { aircraft: 176, instruction: 75 };

const programs = [
  {
    key: "ppl", name: "Private Pilot", stat: "40", statLabel: "flight hours minimum",
    blurb: "The freedom to fly for personal travel or recreation, carry passengers, and explore new destinations from a completely different perspective.",
    eligibility: ["At least 17 years old", "Read, speak, write and understand English", "At least a third-class medical certificate", "US citizen or meet TSA requirements"],
    training: ["Ground school for aeronautical knowledge", "20 hours of flight training with an instructor", "10 hours of solo flight time", "3 hours each of cross-country, instrument, night and checkride-prep training", "3 takeoffs and landings to a full stop at a towered airport", "FAA knowledge test and practical test (checkride)"],
  },
  {
    key: "ir", name: "Instrument Rating", stat: "40", statLabel: "hours of instrument time",
    blurb: "Navigate confidently in low visibility and inclement weather, relying on instruments for precise control and expanding your operational limits.",
    eligibility: ["At least a private pilot certificate, or applying concurrently", "Read, speak, write and understand English", "Ground training from an authorized instructor or a home-study course"],
    training: ["50 hours of cross-country time as pilot in command", "40 hours of actual or simulated instrument time", "15 hours of instrument flight training with an instructor", "An IFR cross-country of at least 250 nm with three different approaches at three airports", "FAA knowledge test and practical test"],
  },
  {
    key: "cpl", name: "Commercial Pilot", stat: "250", statLabel: "flight hours minimum",
    blurb: "Fly professionally and get paid for it. The foundation for careers from charter and cargo to aerial survey, firefighting and the airlines.",
    eligibility: ["At least 18 years old", "Hold a private pilot certificate", "Read, speak, write and understand English", "A second-class medical to exercise commercial privileges"],
    training: ["Ground school in advanced aeronautical knowledge", "250 flight hours, including 100 as pilot in command", "50 hours of cross-country flight time", "20 hours of flight training, including 10 of instrument training", "Two 2-hour cross-country flights of at least 100 nm, one by day and one at night", "3 hours of practical test preparation"],
  },
  {
    key: "cfi", name: "Flight Instructor", stat: "5–10", statLabel: "hours from the right seat",
    blurb: "Share your passion while building valuable hours. Done as an accelerated course or at your own pace, and it can be combined with commercial training.",
    eligibility: ["At least 18 years old", "Read, speak, write and understand English", "A commercial or ATP certificate with the appropriate category and class", "An instrument rating, or privileges appropriate to the rating sought"],
    training: ["Ground training from an authorized instructor", "Stall/spin awareness training", "5–10 hours of flight training from the right seat", "15 hours as PIC in the appropriate category and class", "FOI and FIA knowledge exams, then the FAA checkride"],
  },
  {
    key: "cfii", name: "Instrument Instructor", stat: "20", statLabel: "hours of CFII ground school",
    blurb: "Teach instrument students, CFII candidates and instrument proficiency checks. Normally an add-on to a CFI, and it can reinstate an expired CFI certificate.",
    eligibility: ["At least 18 years old", "Read, speak, write and understand English", "A commercial or ATP certificate with an instrument rating"],
    training: ["Instructional proficiency in approaches, navigation and emergency procedures", "CFII ground school (20 hours)", "8–10 hours of dual flight training from the right seat", "Flight Instructor Instrument (FII) knowledge exam and FAA checkride"],
  },
];

const specs: [string, string][] = [
  ["Model", "Cessna 172K"], ["Year", "1970"], ["Engine", "Lycoming O-360"], ["Horsepower", "180 hp"],
  ["Usable fuel", "38 gal"], ["Gross weight", "2,500 lbs"], ["Useful load", "1,099 lbs"], ["Cruise", "131 mph"],
  ["Vx / Vy", "65 / 84 mph"], ["Vs / Vso", "57 / 49 mph"], ["Range", "615 miles"],
];

export default function GlacierPeak() {
  return (
    <div id="top" className={`${s.root} ${display.variable} ${sans.variable}`}>
      <Nav phone={contact.phone} tel={contact.tel} />

      {/* HERO */}
      <section className={s.hero}>
        <img className={s.heroImg} src={img("landing-7yz")} alt="Glacier Peak Aviators' Cessna 172, N7YZ, touching down on the runway" fetchPriority="high" />
        <div className={s.heroShade} />
        <div className={s.heroInner}>
          <div className={s.heroCopy}>
            <p className={`${s.eyebrow} ${s.rise}`}>Arlington Municipal Airport · KAWO · Arlington, Washington</p>
            <h1 className={`${s.heroTitle} ${s.rise}`} style={{ animationDelay: "120ms" }}>
              Safe. Proficient.<br /><em>Professional.</em>
            </h1>
            <p className={`${s.heroLede} ${s.rise}`} style={{ animationDelay: "260ms" }}>
              A small flight school about 30 miles north of Seattle. Personalized, one-on-one training, from your first discovery flight to
              teaching others to fly.
            </p>
            <div className={`${s.ctas} ${s.rise}`} style={{ animationDelay: "400ms" }}>
              <a href="#contact" className={`${s.btn} ${s.btnCopper}`}>Book a Discovery Flight</a>
              <a href="#training" className={`${s.btn} ${s.btnGlass}`}>Explore Training</a>
            </div>
          </div>
          <div className={`${s.heroBadge} ${s.rise}`} style={{ animationDelay: "560ms" }}>
            <img src="/glacier-peak/logo.png" alt="" />
          </div>
        </div>
        <div className={`${s.heroBar} ${s.rise}`} style={{ animationDelay: "650ms" }}>
          <div><small>Cessna 172 · fuel included</small><b>${RATES.aircraft}<i>/hr</i></b></div>
          <div><small>Flight or ground instruction</small><b>${RATES.instruction}<i>/hr</i></b></div>
          <div><small>Open</small><b>7 days<i> · by appointment</i></b></div>
        </div>
      </section>

      {/* WHY */}
      <section className={`${s.section} ${s.paper}`}>
        <div className={`${s.wrap} ${s.why}`}>
          <Reveal>
            <p className={s.kicker}>Small by design</p>
            <h2 className={s.h2}>A small school. <em>All of the attention.</em></h2>
            <p className={s.lede}>
              If you prefer a small, personalized learning experience over a large, structured program, Glacier Peak Aviators may be the right fit.
              Whether you want a career as a professional pilot or to fly for pleasure or business, we&apos;re here to help.
            </p>
          </Reveal>
          <div className={s.values}>
            {[
              ["Safe", "Safety is the foundation of every lesson, from the preflight to the tie-down."],
              ["Proficient", "Skills that are sharp and current, not just enough to pass the checkride."],
              ["Professional", "Training that treats your time, goals and budget with respect."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 90} className={s.value}>
                <span className={s.valueStar} aria-hidden>✦</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING */}
      <section id="training" className={`${s.section} ${s.forest}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={`${s.kicker} ${s.kickerLight}`}>Training</p>
              <h2 className={`${s.h2} ${s.h2Light}`}>From first lesson <em>to flight instructor.</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={`${s.lede} ${s.ledeLight}`}>Private pilot through instrument instructor, each built around the FAA requirements below. Choose a certificate to see what it takes.</p>
            </Reveal>
          </div>
          <Reveal>
            <Programs programs={programs} />
          </Reveal>
        </div>
      </section>

      {/* BACK ON TRACK */}
      <section className={`${s.section} ${s.paper}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>Already a pilot?</p>
              <h2 className={s.h2}>Life gets in the way. <em>We&apos;ll get you back in the air.</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>Started a license or rating and stalled? Haven&apos;t flown for a few years? We can do your training in your aircraft or ours.</p>
            </Reveal>
          </div>
          <div className={s.back}>
            {[
              ["Flight Review", "Required every 24 calendar months: at least one hour of flight training and one hour of ground. Not a test, but a chance to sharpen skills and get feedback."],
              ["Currency", "Stay legal and confident to carry passengers and fly in the system."],
              ["Instrument Proficiency Check", "Keep your instrument privileges, in your aircraft or ours."],
              ["Rusty Pilots", "Haven't flown for a few years? We'd love to help you get back in the air."],
              ["Finish What You Started", "If you've started a license or rating, we'll help you get your training back on track."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={(i % 3) * 80} className={s.backCard}>
                <h3>{t}</h3>
                <p>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AIRCRAFT */}
      <section id="aircraft" className={`${s.section} ${s.slate}`}>
        <div className={`${s.wrap} ${s.aircraft}`}>
          <Reveal className={s.acPhoto}>
            <img src={img("taxi-7yz")} alt="N7YZ, a cream and red 1970 Cessna 172K, taxiing" loading="lazy" />
            <span className={s.tailTag}>N7YZ</span>
          </Reveal>
          <Reveal delay={120}>
            <p className={`${s.kicker} ${s.kickerLight}`}>The airplane</p>
            <h2 className={`${s.h2} ${s.h2Light}`}>Meet N7YZ. <em>Cessna 172K, 180 hp.</em></h2>
            <dl className={s.specs}>
              {specs.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
            </dl>
            <p className={s.specNote}>Specifications from the school. Not for flight planning.</p>
          </Reveal>
        </div>
      </section>

      {/* RATES */}
      <section id="rates" className={`${s.section} ${s.paper}`}>
        <div className={`${s.wrap} ${s.rates}`}>
          <Reveal>
            <p className={s.kicker}>Rates</p>
            <h2 className={s.h2}>Three numbers. <em>No surprises.</em></h2>
            <div className={s.rateBoard}>
              <div><span>Cessna 172</span><i /><strong>${RATES.aircraft}<small>/hr</small></strong></div>
              <p className={s.rateSub}>Fuel included</p>
              <div><span>Flight instruction</span><i /><strong>${RATES.instruction}<small>/hr</small></strong></div>
              <div><span>Ground instruction</span><i /><strong>${RATES.instruction}<small>/hr</small></strong></div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <LessonCalc aircraft={RATES.aircraft} instruction={RATES.instruction} />
          </Reveal>
        </div>
      </section>

      {/* DISCOVERY */}
      <section className={s.discovery}>
        <img src={img("runway-7yz")} alt="" className={s.discImg} loading="lazy" />
        <div className={s.discShade} />
        <div className={`${s.wrap} ${s.discInner}`}>
          <Reveal>
            <p className={`${s.kicker} ${s.kickerLight}`}>Discovery flight</p>
            <h2 className={`${s.h2} ${s.h2Light}`}>Not a scenic ride. <em>You take the controls.</em></h2>
            <p className={`${s.lede} ${s.ledeLight}`}>
              With a certified flight instructor beside you, learn basic maneuvers, get a feel for the cockpit, and find out if flying is your passion.
              It&apos;s the perfect first step, whether you&apos;re considering training or just want an unforgettable adventure.
            </p>
            <div className={s.ctas}>
              <a href={contact.tel} className={`${s.btn} ${s.btnCopper}`}>Call {contact.phone}</a>
              <a href="#contact" className={`${s.btn} ${s.btnGlass}`}>Send a Message</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={`${s.section} ${s.forest} ${s.contact}`}>
        <div className={`${s.wrap} ${s.contactInner}`}>
          <Reveal>
            <p className={`${s.kicker} ${s.kickerLight}`}>Your aviation journey starts here</p>
            <h2 className={s.contactTitle}>Ready when <em>you are.</em></h2>
            <div className={s.contactCard}>
              <div><span>Location</span><p><a href={contact.maps} target="_blank" rel="noreferrer">Arlington Municipal Airport (KAWO)<br />Arlington, Washington</a></p></div>
              <div><span>Hours</span><p>Monday – Sunday<br />By appointment</p></div>
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
          <span>© {new Date().getFullYear()} Glacier Peak Aviators · Arlington, Washington</span>
          <span>Website concept by Stratum</span>
        </footer>
      </section>
    </div>
  );
}
