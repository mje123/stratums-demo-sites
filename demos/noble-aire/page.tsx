// Noble Aire Aviation (nobleaire.us): redesign concept by Stratum
// Facts are from nobleaire.us; photos and logo are the school's own, copied into /public/noble-aire.
import { Josefin_Sans, Red_Hat_Text } from "next/font/google";
import s from "./styles.module.css";
import { Hangar, Inquiry, Nav, Reveal, type Aircraft } from "./client";

const display = Josefin_Sans({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--na-display" });
const sans = Red_Hat_Text({ subsets: ["latin"], variable: "--na-sans" });

export const metadata = {
  title: "Noble Aire Aviation | Flight Training in Marana, Arizona",
  description: "Safe, effective, affordable flight training over Arizona since 2019. Private, instrument and commercial training, a Redbird TD2 simulator, and aircraft rental in Marana, AZ.",
};

const img = (n: string) => `/noble-aire/${n}.jpg`;
const contact = {
  phone: "(520) 507-8106",
  tel: "tel:+15205078106",
  email: "admin@nobleaire.us",
  address: "11700 W Avra Valley Rd, Marana, AZ",
  maps: "https://www.google.com/maps/search/?api=1&query=11700+W+Avra+Valley+Rd+Marana+AZ",
  embed: "https://maps.google.com/maps?q=11700%20W%20Avra%20Valley%20Rd%2C%20Marana%2C%20AZ&t=m&z=13&output=embed",
  facebook: "https://www.facebook.com/NobleAireAviation",
  instagram: "https://www.instagram.com/noble_aire_Aviation",
};

const fleet: Aircraft[] = [
  { tail: "N7035Q", year: "1971", model: "Cessna 172L", engine: "Lycoming 320 E2A, 160 hp", avionics: ["Garmin GNS430W", "uAvionix AV30"], img: img("n7035q"), alt: "Cessna 172 N7035Q taxiing on the ramp" },
  { tail: "N730LB", year: "1974", model: "Cessna 172M", engine: "Lycoming 320 E2A, 160 hp", avionics: ["Garmin GNS530W", "Dual Garmin G5s"] },
  { tail: "N2130J", year: "1979", model: "Piper Archer II", engine: "O-360-A4M, 180 hp", avionics: [], img: img("n2130j"), alt: "Piper Archer N2130J in golden-hour light by the hangars" },
  { tail: "N4337F", year: "1977", model: "Piper Archer II", engine: "O-360-A4M, 180 hp", avionics: ["Garmin 400 GNC"], img: img("n4337f"), alt: "Piper Archer N4337F on the ramp" },
  { tail: "N7528G", year: "", model: "Cessna 172N", engine: "", avionics: [], soon: true },
];

const programs = [
  { code: "PPL", title: "Private Pilot", body: "The starting point. Be pilot in command of most single-engine aircraft, and take friends and family exploring the skies and other airports." },
  { code: "IR", title: "Instrument Rating", body: "The next step for most pilots: refine your skills and learn the procedures to fly under IFR in lower visibility." },
  { code: "CPL", title: "Commercial Pilot", body: "Get paid to fly. Requires a private certificate and at least 250 hours. Ask for a consultation about your path to flying professionally." },
  { code: "R→F", title: "Rotary to Fixed Wing", body: "Helicopter pilots adding fixed wing are most welcome. Noble Aire built a program just for you." },
  { code: "BFR", title: "Flight Reviews & IPCs", body: "Biennial flight reviews and instrument proficiency checks to keep you current. Bring your own aircraft if you like." },
  { code: "GS", title: "Ground School", body: "Build your aeronautical knowledge and prepare for your certificates and ratings." },
];

export default function NobleAire() {
  return (
    <div id="top" className={`${s.root} ${display.variable} ${sans.variable}`}>
      <Nav phone={contact.phone} tel={contact.tel} />

      {/* HERO */}
      <section className={s.hero}>
        <div className={s.sun} aria-hidden />
        <div className={s.ridge} aria-hidden />
        <div className={`${s.wrap} ${s.heroGrid}`}>
          <div className={s.heroCopy}>
            <p className={`${s.eyebrow} ${s.rise}`}><span className={s.stars} aria-hidden>★★★★★</span> Marana, Arizona · Since 2019</p>
            <h1 className={`${s.heroTitle} ${s.rise}`} style={{ animationDelay: "120ms" }}>
              Discover the adventure of <em>learning to fly</em> over Arizona.
            </h1>
            <p className={`${s.heroLede} ${s.rise}`} style={{ animationDelay: "260ms" }}>
              Safe, effective flight training at an affordable price, on your schedule, in a relaxed atmosphere that encourages learning <em>and</em> fun.
            </p>
            <div className={`${s.ctas} ${s.rise}`} style={{ animationDelay: "400ms" }}>
              <a href="#contact" className={`${s.btn} ${s.btnPurple}`}>Schedule a Discovery Flight</a>
              <a href="#training" className={`${s.btn} ${s.btnLine}`}>How to become a pilot</a>
            </div>
          </div>
          <div className={`${s.heroMedia} ${s.rise}`} style={{ animationDelay: "300ms" }}>
            <div className={s.heroFrame}>
              <img src={img("cessna-nose")} alt="A Cessna 172 on the ramp with mountains behind" fetchPriority="high" />
            </div>
            <div className={s.heroBadge}>
              <span>The student comes first</span>
              <b>Our philosophy</b>
            </div>
          </div>
        </div>
        <div className={`${s.wrap} ${s.facts} ${s.rise}`} style={{ animationDelay: "560ms" }}>
          {[["4", "IFR-certified airplanes, one more on the way"], ["PPL→CPL", "private through commercial"], ["TD2", "Redbird simulator, loggable time"], ["2019", "founded as Marana Flight School"]].map(([n, l]) => (
            <div key={n} className={s.fact}><b>{n}</b><span>{l}</span></div>
          ))}
        </div>
      </section>

      {/* FIRST FLIGHT */}
      <section id="training" className={`${s.section} ${s.white}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>How do I become a pilot?</p>
              <h2 className={s.h2}>Anyone can <em>learn to fly.</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>
                It will be full of new experiences and challenges, but anyone can make it with a little hard work. There&apos;s nothing quite like the freedom
                and accomplishment of earning your pilot&apos;s license.
              </p>
            </Reveal>
          </div>
          <ol className={s.path}>
            {[
              { n: "01", t: "Discovery Flight", d: "Tour the facility, meet the instructors, and take a short flight to get a feel for training.", img: "sunset-preflight", alt: "An instructor and student doing a preflight at sunset" },
              { n: "02", t: "Plan your training", d: "Hooked? Talk through your schedule and financial options, and pick up your study materials.", img: "ground-school", alt: "An instructor and student working through ground lessons" },
              { n: "03", t: "Enroll with your CFI", d: "Your certified flight instructor walks you through every step to formalize your enrollment.", img: "student-smile", alt: "A smiling student pilot at the controls" },
              { n: "04", t: "Checkride ready", d: "Deep knowledge, strong piloting skills and unwavering confidence before your FAA test and checkride.", img: "student-cockpit", alt: "A student pilot wearing a headset in the cockpit" },
            ].map((p, i) => (
              <Reveal key={p.n} delay={i * 90} className={s.step}>
                <div className={s.stepImg}><img src={img(p.img)} alt={p.alt} loading="lazy" /></div>
                <span className={s.stepNum}>{p.n}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className={`${s.section} ${s.navy}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={`${s.kicker} ${s.kickerLight}`}>Our services</p>
              <h2 className={`${s.h2} ${s.h2Light}`}>From your 1st flight <em>to your 101st.</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={`${s.lede} ${s.ledeLight}`}>Flight training and aircraft rental for every stage of your flying, and beyond.</p>
            </Reveal>
          </div>
          <div className={s.programs}>
            {programs.map((p, i) => (
              <Reveal key={p.code} delay={(i % 3) * 80} className={s.program}>
                <span className={s.programCode}>{p.code}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FLEET */}
      <section id="fleet" className={`${s.section} ${s.sand}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>Our fleet</p>
              <h2 className={s.h2}>Cessnas and Archers, <em>IFR certified.</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>Once you&apos;ve been checked out by one of our CFIs, you can rent any of our aircraft, from training flights to pleasure flights.</p>
            </Reveal>
          </div>
          <Reveal><Hangar fleet={fleet} /></Reveal>
        </div>
      </section>

      {/* SIMULATOR */}
      <section id="simulator" className={`${s.section} ${s.white}`}>
        <div className={`${s.wrap} ${s.sim}`}>
          <Reveal className={s.simMedia}>
            <img src={img("sim")} alt="An instructor and student training on the Redbird simulator" loading="lazy" />
          </Reveal>
          <Reveal delay={120}>
            <p className={s.kicker}>Redbird TD2 simulator</p>
            <h2 className={s.h2}>Practice on the ground. <em>Log the time.</em></h2>
            <p className={s.lede}>
              An FAA-approved Basic Aviation Training Device, so your simulator time can be logged. A cost-effective way to introduce new skills, practice
              procedures and refine the ones you have, with glass and analog panel configurations and multiple aircraft options.
            </p>
            <ul className={s.checks}>
              <li>Get comfortable with new procedures before flying them</li>
              <li>Learn new avionics without distractions</li>
              <li>Maintain your IFR currency</li>
              <li>Save time and money, and it&apos;s easy to schedule</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className={s.about}>
        <img src={img("wing-desert")} alt="The view over a wing above the Arizona desert at sunset" className={s.aboutImg} loading="lazy" />
        <div className={s.aboutShade} />
        <div className={`${s.wrap} ${s.aboutInner}`}>
          <Reveal className={s.aboutCard}>
            <p className={`${s.kicker} ${s.kickerLight}`}>About Noble Aire</p>
            <h2 className={`${s.h2} ${s.h2Light}`}>&ldquo;The student <em>comes first.&rdquo;</em></h2>
            <p className={`${s.lede} ${s.ledeLight}`}>
              Founded in 2019 as Marana Flight School, Noble Aire Aviation&apos;s mission is safe and effective flight training at an affordable price. We work
              with you on your schedule, and we want every student to reach the checkride with a deep understanding of aeronautical knowledge, strong
              piloting skills and unwavering confidence.
            </p>
          </Reveal>
        </div>
      </section>

      {/* GALLERY */}
      <section className={s.gallery} aria-label="Photos from Noble Aire">
        {[
          ["noble-cessna", "A Noble Aire Cessna on the ramp"],
          ["preflight", "Instructor and student at the aircraft"],
          ["cessna-ramp", "A Cessna 172 on the ramp"],
        ].map(([src, alt], i) => (
          <Reveal key={src} delay={i * 90} className={s.shot}><img src={img(src)} alt={alt} loading="lazy" /></Reveal>
        ))}
      </section>

      {/* CONTACT */}
      <section id="contact" className={`${s.section} ${s.sand}`}>
        <div className={`${s.wrap} ${s.contact}`}>
          <Reveal>
            <p className={s.kicker}>Schedule a discovery flight</p>
            <h2 className={s.h2}>Ready to take <em>the controls?</em></h2>
            <p className={s.lede}>Send us a message and we&apos;ll get back to you shortly, or give us a call. Ask us for current rates and training options.</p>
            <div className={s.ctas}>
              <a href={contact.tel} className={`${s.btn} ${s.btnPurple}`}>Call {contact.phone}</a>
              <a href={`mailto:${contact.email}`} className={`${s.btn} ${s.btnLine}`}>Email us</a>
            </div>
            <div className={s.contactCard}>
              <div><span>Visit</span><p><a href={contact.maps} target="_blank" rel="noreferrer">{contact.address}</a></p></div>
              <div><span>Email</span><p><a href={`mailto:${contact.email}`}>{contact.email}</a></p></div>
              <div><span>Follow</span><p><a href={contact.facebook} target="_blank" rel="noreferrer">Facebook</a> · <a href={contact.instagram} target="_blank" rel="noreferrer">Instagram</a></p></div>
            </div>
            <div className={s.map}>
              <iframe src={contact.embed} title="Map to Noble Aire Aviation, 11700 W Avra Valley Rd, Marana, AZ" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Inquiry email={contact.email} />
          </Reveal>
        </div>
      </section>

      <footer className={s.footer}>
        <div className={s.wrap}>
          <img src="/noble-aire/logo.png" alt="Noble Aire Aviation" className={s.footLogo} />
          <div className={s.footRow}>
            <span>© {new Date().getFullYear()} Noble Aire Aviation, LLC · Marana, Arizona</span>
            <span>Website concept by Stratum</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
