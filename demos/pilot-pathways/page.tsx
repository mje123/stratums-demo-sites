// Pilot Pathways (pilotpathways.com): redesign concept by Stratum
// Facts are from pilotpathways.com; photos and partner logos are the school's own, copied into /public/pilot-pathways.
import { Lexend, Public_Sans } from "next/font/google";
import s from "./styles.module.css";
import { Inquiry, LevelUp, Nav, Reveal } from "./client";

const display = Lexend({ subsets: ["latin"], variable: "--pp-display" });
const sans = Public_Sans({ subsets: ["latin"], variable: "--pp-sans" });

export const metadata = {
  title: "Pilot Pathways | Personalized Flight Instruction in Upstate South Carolina",
  description: "Private, elite and personalized flight instruction in Spartanburg, SC. Learn to fly, level up your certificate, flight reviews, tutoring and pilot equipment packages.",
};

const img = (n: string) => `/pilot-pathways/${n}.jpg`;
const contact = {
  name: "David Whitley",
  email: "david.whitley@pilotpathways.com",
  info: "info@pilotpathways.com",
  address: "500 Ammons Road, Spartanburg, SC",
  maps: "https://www.google.com/maps/search/?api=1&query=500+Ammons+Road+Spartanburg+SC",
  embed: "https://maps.google.com/maps?q=500%20Ammons%20Road%2C%20Spartanburg%2C%20SC&t=m&z=13&output=embed",
};
const mailto = (subject: string) => `mailto:${contact.email}?subject=${encodeURIComponent(subject)}`;

const steps = [
  { title: "Meet your Pathways instructor", cost: "Step one", body: "In person or virtually. Your instructor verifies your eligibility and helps you apply for your Student Pilot Certificate." },
  { title: "Get medically cleared", cost: "Often < $250", body: "A medical evaluation with an FAA Aviation Medical Examiner. Your instructor advises on applying and scheduling." },
  { title: "Secure financing & schedule", cost: "Plan ahead", body: "Your schedule and financing are the biggest hurdles. Sort them at the start and your chances of success go way up." },
  { title: "Discovery flight", cost: "~$250", body: "A proper first lesson, not a cheap aerial tour. It's logged and counts toward your certificate." },
  { title: "Gear up", cost: "~$400–3,200", body: "Headset, EFB, plotter, calculators, logbooks and more, or one of the flat-rate equipment packages below." },
  { title: "Online prep for the knowledge exam", cost: "2–3 weeks min.", body: "Dedicated ground study should be your main focus before you fly solo." },
  { title: "Pass the knowledge exam", cost: "~$175", body: "An FAA-proctored multiple-choice exam. Passing first time saves money and shows commitment." },
  { title: "Build flight experience", cost: "~$8,500–9,500", body: "At least 40 hours: 10 solo and 20 with an instructor. Additional time can cost up to $260/hr." },
  { title: "Take the practical test", cost: "~$2,000", body: "An oral and a scenario-based flight with a Designated Pilot Examiner. Pass, and the certificate is yours." },
];

const gear = [
  { name: "Fly in style!", price: "$3,200", tag: "Premium", body: "Top-shelf gear for PPL training and more: core FAA textbooks, premium headset that pairs with the included EFB and optional iPad, stainless steel E6B plus electronic calculator, rotating plotters, local sectional and supplements." },
  { name: "Success in a backpack!", price: "$1,850", tag: "Best value", body: "Everything you need to finish training, picked from quality, built-to-last industry standards, with an optional iPad for the included 1-year EFB subscription. Already have a recent iPad with 100GB free? It comes off the cost." },
  { name: "Rock it old school!", price: "$500–700", tag: "Paper & pencil", body: "Train the way they did back in the day: paper publications, manual calculators and hard-copy directories, all to FAA standards." },
  { name: "For the mildly interested", price: "$250", tag: "Teens & enthusiasts", body: "Educational tools and FAA textbooks, plus an airband receiver to listen to nearby aircraft and ATC in real time. You might be on track for a 16th-birthday solo!" },
];

export default function PilotPathways() {
  return (
    <div id="top" className={`${s.root} ${display.variable} ${sans.variable}`}>
      <Nav email={contact.email} />

      {/* HERO */}
      <section className={s.hero}>
        <img className={s.heroImg} src={img("archer-n5006s")} alt="Piper N5006S on the ramp" fetchPriority="high" />
        <div className={s.heroShade} />
        <svg className={s.heroRoute} viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden>
          <path d="M-20 820 C 260 760, 360 610, 640 600 S 1080 470, 1460 140" />
        </svg>
        <div className={s.heroInner}>
          <p className={`${s.eyebrow} ${s.rise}`}>Spartanburg · Upstate South Carolina</p>
          <h1 className={`${s.heroTitle} ${s.rise}`} style={{ animationDelay: "120ms" }}>
            Your pathway<br />to the <span>left seat.</span>
          </h1>
          <p className={`${s.heroLede} ${s.rise}`} style={{ animationDelay: "260ms" }}>
            Private, elite and personalized flight instruction. An individualized, optimized pathway to every certificate and rating, built on
            actual FAA standards instead of revenue-centric curriculums.
          </p>
          <div className={`${s.ctas} ${s.rise}`} style={{ animationDelay: "400ms" }}>
            <a href="#learn" className={`${s.btn} ${s.btnSun}`}>I Want to Learn to Fly</a>
            <a href="#level-up" className={`${s.btn} ${s.btnGlass}`}>Level Up My Certificate</a>
          </div>
        </div>
        <div className={`${s.waypoints} ${s.rise}`} style={{ animationDelay: "560ms" }}>
          {[["Discovery flight", "~$250"], ["Private pilot, all in", "~$15K avg"], ["Instrument time building", "$170/hr"], ["Equipment kits from", "$250"]].map(([k, v]) => (
            <div key={k} className={s.waypoint}><small>{k}</small><b>{v}</b></div>
          ))}
        </div>
      </section>

      {/* MISSION */}
      <section className={`${s.section} ${s.cream}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>Our mission</p>
              <h2 className={s.h2}>Your success. <span>Not our revenue.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>
                Nearly anyone can learn to fly. Pilot Pathways is optimized for clients who value safety, training efficiency and are dedicated to
                realizing their aviation goals.
              </p>
            </Reveal>
          </div>
          <div className={s.pillars}>
            {[
              ["01", "Pass your checkrides", "Training focused on actual FAA standards, not revenue-centric flight curriculums."],
              ["02", "A curated process", "Instruction methods and techniques that leverage FAA-sourced standards, including some of the best (and worst) kept secrets in the industry."],
              ["03", "Quality aircraft", "You'll only fly quality aircraft with a great maintenance record."],
            ].map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 90} className={s.pillar}>
                <span className={s.pillarNum}>{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS TO SUCCESS */}
      <section id="learn" className={`${s.section} ${s.forest}`}>
        <div className={s.contours} aria-hidden />
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={`${s.kicker} ${s.kickerLight}`}>I want to learn to fly</p>
              <h2 className={`${s.h2} ${s.h2Light}`}>Nine steps. <span>Every cost on the map.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={`${s.lede} ${s.ledeLight}`}>
                Starting flight training can seem complex and confusing. Pilot Pathways keeps it straight: here&apos;s the whole route to a Private Pilot
                Certificate, with the average cost of each leg.
              </p>
            </Reveal>
          </div>
          <ol className={s.trail}>
            {steps.map((st, i) => (
              <Reveal key={st.title} delay={(i % 3) * 70} className={`${s.leg} ${i % 2 ? s.legRight : ""}`}>
                <span className={s.legNum}>{String(i + 1).padStart(2, "0")}</span>
                <div className={s.legCard}>
                  <div className={s.legTop}><h3>{st.title}</h3><b>{st.cost}</b></div>
                  <p>{st.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
          <Reveal className={s.summit}>
            <div>
              <small>All in, a Private Pilot Certificate averages around</small>
              <strong>$15,000</strong>
            </div>
            <p>It could be less. Taking more than 6 months or more than the required time usually pushes costs above average, so plan your schedule and financing up front.</p>
            <a href={mailto("Discovery flight")} className={`${s.btn} ${s.btnSun}`}>Book a Discovery Flight</a>
          </Reveal>
        </div>
      </section>

      {/* LEVEL UP */}
      <section id="level-up" className={`${s.section} ${s.cream}`}>
        <div className={`${s.wrap} ${s.levelWrap}`}>
          <Reveal>
            <p className={s.kicker}>Level up my certificate</p>
            <h2 className={s.h2}>Already flying? <span>Climb higher.</span></h2>
            <p className={s.lede}>Ready for an added rating, an endorsement or the next certificate? Pick a pathway to see what it takes and what it costs.</p>
            <figure className={s.panelShot}>
              <img src={img("panel")} alt="An aircraft instrument panel with a GPS navigator" loading="lazy" />
            </figure>
          </Reveal>
          <Reveal delay={120}>
            <LevelUp />
          </Reveal>
        </div>
      </section>

      {/* GEAR */}
      <section id="gear" className={`${s.section} ${s.sand}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>Pilot equipment packages</p>
              <h2 className={s.h2}>Get geared up <span>for success.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>Sourced kits with everything you need to begin and finish training. Every package includes a free hour of review and setup; allow up to two weeks of lead time.</p>
            </Reveal>
          </div>
          <div className={s.gear}>
            {gear.map((g, i) => (
              <Reveal key={g.name} delay={i * 80} className={`${s.kit} ${i === 1 ? s.kitHot : ""}`}>
                <span className={s.kitTag}>{g.tag}</span>
                <h3>{g.name}</h3>
                <p className={s.kitPrice}>{g.price}</p>
                <p>{g.body}</p>
                <a href={mailto(`Equipment package: ${g.name}`)} className={s.kitLink}>Request this kit →</a>
              </Reveal>
            ))}
          </div>
          <p className={s.fine}>Optional $200 online ground school recommended. All costs are estimates based on equipment prices at time of pricing; EFB subscriptions are for one year.</p>
        </div>
      </section>

      {/* AIRCRAFT STRIP */}
      <section className={s.strip} aria-label="Aircraft photos">
        {[["hangar-n4122d", "N4122D in the hangar"], ["cessna-n20068", "N20068 in the hangar"], ["archer-n5006s", "N5006S on the ramp"]].map(([src, cap], i) => (
          <Reveal key={src} delay={i * 90} className={s.shot}>
            <img src={img(src)} alt={cap} loading="lazy" />
            <span>{cap}</span>
          </Reveal>
        ))}
      </section>

      {/* MORE */}
      <section id="more" className={`${s.section} ${s.cream}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>Beyond the checkride</p>
              <h2 className={s.h2}>Return to the sky <span>with confidence.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>Quality instruction that&apos;s worth the time invested, whether you&apos;re rusty, training elsewhere, or just love aviation.</p>
            </Reveal>
          </div>
          <div className={s.more}>
            {[
              ["Flight reviews", "A Flight Review is NOT a checkride and shouldn't be run like a test. They get to know your mission and tailor the training so you fly safer, with more confidence."],
              ["Rusty pilots", "Unsure if you're rusty? Don't find out alone. A friendly ground review and a brief flight with a competent CFI on board."],
              ["Private tutoring", "Discreet ground and flight tutoring for pilots training with any school, instructor or agency who want focused help."],
              ["Second opinion", "Feeling pushed toward a milestone? Get a no-stress review and assessment of your knowledge and skills."],
              ["Confidence building", "Advanced instruction after a milestone, without checkride pressure, so you can fly the missions you trained for."],
              ["Aviation & STEM", "Speaking engagements, learning labs for your event, and aircraft tours to introduce new people to aviation."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={(i % 3) * 80} className={s.moreCard}>
                <h3>{t}</h3>
                <p>{d}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className={s.partners}>
            <p className={s.kicker}>Our partners</p>
            <div>
              <img src={img("partner-cloud-chaser")} alt="Cloud Chaser Aviation, LLC" loading="lazy" />
              <img src={img("partner-safe")} alt="SAFE: Spartanburg Area Flight Education" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={`${s.section} ${s.forest} ${s.contact}`}>
        <div className={s.contours} aria-hidden />
        <div className={`${s.wrap} ${s.contactInner}`}>
          <Reveal>
            <p className={`${s.kicker} ${s.kickerLight}`}>Contact us</p>
            <h2 className={`${s.h2} ${s.h2Light}`}>Let&apos;s plot <span>your pathway.</span></h2>
            <p className={`${s.lede} ${s.ledeLight}`}>Contact us to schedule your first lesson and discover the joy of flying. Meet in person or virtually.</p>
            <div className={s.contactCard}>
              <div><span>Instructor</span><p>{contact.name}</p></div>
              <div><span>Email</span><p><a href={`mailto:${contact.email}`}>{contact.email}</a><br /><a href={`mailto:${contact.info}`}>{contact.info}</a></p></div>
              <div><span>Location</span><p><a href={contact.maps} target="_blank" rel="noreferrer">{contact.address}</a></p></div>
            </div>
            <div className={s.map}>
              <iframe src={contact.embed} title="Map to 500 Ammons Road, Spartanburg, SC" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Inquiry email={contact.email} />
          </Reveal>
        </div>
        <footer className={`${s.wrap} ${s.footer}`}>
          <span>© {new Date().getFullYear()} Pilot Pathways · Spartanburg, South Carolina</span>
          <span>Website concept by Stratum</span>
        </footer>
      </section>
    </div>
  );
}
