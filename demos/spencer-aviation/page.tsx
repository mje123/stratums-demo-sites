// Spencer Aviation: redesign concept by Stratum
import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import s from "./styles.module.css";
import { CountUp, Nav, Reveal } from "./client";
import {
  asset, awards, contact, extras, fleet, goals, groundQuotes, instructorCreds, locations, noFees, programs, studentQuotes,
} from "./data";

const serif = DM_Serif_Display({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--sp-serif" });
const sans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--sp-sans" });

export const metadata = {
  title: "Spencer Aviation | Award-Winning Flight Training in Central Ohio",
  description: "AOPA Best Flight School in the Great Lakes Region. Flight training at Delaware Municipal and Union County airports.",
};

const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

function Kicker({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`${s.kicker} ${light ? s.kickerLight : ""}`}>{children}</p>;
}

export default function SpencerAviation() {
  return (
    <div id="top" className={`${s.root} ${serif.variable} ${sans.variable}`}>
      <Nav />

      {/* HERO */}
      <section className={s.hero}>
        <img className={s.heroImg} src={asset("arrow-flight")} alt="A Spencer Aviation Piper in flight over Ohio farmland" fetchPriority="high" />
        <div className={s.heroShade} />
        <div className={s.heroContent}>
          <a href="#awards" className={`${s.laurel} ${s.rise}`}>
            <span className={s.laurelStar}>★</span>
            AOPA Best Flight School · Great Lakes Region 2019
          </a>
          <h1 className={`${s.heroTitle} ${s.rise}`} style={{ animationDelay: "150ms" }}>
            Ohio&apos;s award-winning<br /><em>flight school.</em>
          </h1>
          <p className={`${s.heroLede} ${s.rise}`} style={{ animationDelay: "300ms" }}>
            Over 35 years of flying experience, Gold Seal instruction, and a reputation students keep voting for, at
            Delaware Municipal and Union County airports.
          </p>
          <div className={`${s.ctas} ${s.rise}`} style={{ animationDelay: "450ms" }}>
            <a href={contact.mailto("Introductory flight")} className={`${s.btn} ${s.btnRed}`}>Book a $150 Intro Flight <Arrow /></a>
            <a href="#awards" className={`${s.btn} ${s.btnGlass}`}>See Our Awards</a>
          </div>
        </div>
        <div className={s.proof}>
          <div className={s.proofInner}>
            <div><strong>100</strong><span>AOPA recommend score · national avg 56</span></div>
            <div><strong>Top 3%</strong><span>of U.S. flight schools for 10+ years</span></div>
            <div><strong>#2</strong><span>on AOPA&apos;s national Honor Roll, 2012</span></div>
            <div><strong>9</strong><span>AOPA recognitions since 2012</span></div>
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section id="awards" className={`${s.section} ${s.navy}`}>
        <div className={s.wrap}>
          <div className={s.awardsTop}>
            <Reveal className={s.scoreBlock}>
              <Kicker light>2021 AOPA Flight Training Experience Survey</Kicker>
              <p className={s.score}><CountUp to={100} /><span className={s.scoreOf}>/100</span></p>
              <p className={s.scoreCaption}>
                &ldquo;How likely are you to recommend your flight school to a friend?&rdquo; Spencer students answered with a perfect
                score. The national average was <strong>56</strong>.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <h2 className={`${s.h2} ${s.h2Light}`}>A decade of <em>being the best.</em></h2>
              <p className={`${s.lede} ${s.ledeLight}`}>
                Recognized again and again by the Aircraft Owners and Pilots Association, the world&apos;s largest aviation
                association, and nominated every time by our own students.
              </p>
              <blockquote className={s.aopaQuote}>
                &ldquo;It was clear from the customer reviews that these professionals are providing a quality flight instruction experience.&rdquo;
                <cite>Brittney Miculka, Director of Pilot Community Development, AOPA</cite>
              </blockquote>
            </Reveal>
          </div>
          <div className={s.awards}>
            {awards.map((a, i) => (
              <Reveal key={a.year} delay={(i % 5) * 70} className={s.award}>
                <div className={s.awardImg}><img src={asset(a.image)} alt={`AOPA ${a.year} ${a.title}`} loading="lazy" /></div>
                <p className={s.awardYear}>{a.year}</p>
                <p className={s.awardTitle}>{a.title}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY / GOALS */}
      <section className={`${s.section} ${s.paper}`}>
        <div className={`${s.wrap} ${s.why}`}>
          <Reveal className={s.whyMedia}>
            <img src={asset("team")} alt="Spencer Aviation instructors with a training aircraft" loading="lazy" />
            <div className={s.whyBadge}>Every student is unique. <em>Let&apos;s make your game plan.</em></div>
          </Reveal>
          <div>
            <Reveal>
              <Kicker>What sets us apart</Kicker>
              <h2 className={s.h2}>Built around <em>your</em> success.</h2>
              <p className={s.lede}>Our #1 focus is flight training, and helping each student become the best pilot they can be. Spencer Aviation was developed with six goals:</p>
            </Reveal>
            <ol className={s.goals}>
              {goals.map(([t, d], i) => (
                <li key={t}>
                  <Reveal delay={i * 60}>
                    <span className={s.goalNum}>{i + 1}</span>
                    <div><h3>{t}</h3><p>{d}</p></div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* TRAINING */}
      <section id="training" className={`${s.section} ${s.white}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <Kicker>The Complete Flight Training Experience</Kicker>
              <h2 className={s.h2}>Student pilot to <em>CFI.</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>Fly just for fun, build a career as a professional pilot, or head for the military. We&apos;ve trained everyone from brand-new students to retired military and airline pilots.</p>
            </Reveal>
          </div>
          <div className={s.programs}>
            {programs.map((p, i) => (
              <Reveal key={p.code} delay={i * 80} className={s.program}>
                <span className={s.programCode}>{p.code}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                <a href={contact.mailto(`${p.title} training`)}>Ask about {p.title} <Arrow /></a>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className={s.extras}>
              <img src={asset("approach")} alt="On final approach" loading="lazy" />
              <div>
                <p className={s.extrasTitle}>All under one roof</p>
                <ul>{extras.map((e) => <li key={e}>{e}</li>)}</ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FLEET */}
      <section id="fleet" className={`${s.section} ${s.navy}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <Kicker light>The Fleet</Kicker>
              <h2 className={`${s.h2} ${s.h2Light}`}>Train in the right <em>airplane.</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={`${s.lede} ${s.ledeLight}`}>A wide variety of makes and models. Every aircraft is hangared, with engine preheaters on timers in winter so it&apos;s warm and ready before your lesson.</p>
            </Reveal>
          </div>
          <div className={s.fleet}>
            {fleet.map((a, i) => (
              <Reveal key={a.name} delay={(i % 3) * 90} className={`${s.plane} ${i === 0 ? s.planeWide : ""}`}>
                <img src={asset(a.image)} alt={a.name} loading="lazy" />
                <div className={s.planeShade} />
                <div className={s.planeBody}>
                  <h3>{a.name} {a.count && <span>{a.count}</span>}</h3>
                  <p>{a.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GROUND SCHOOL */}
      <section id="ground" className={`${s.section} ${s.paper}`}>
        <div className={`${s.wrap} ${s.ground}`}>
          <div>
            <Reveal>
              <Kicker>Classroom Ground School</Kicker>
              <h2 className={s.h2}>Learn it in a room. <em>Not a video.</em></h2>
              <p className={s.lede}>Meet other future pilots and learn from a Gold Seal Flight Instructor. Take ground school before flight training or alongside it. Classes fill up quickly.</p>
            </Reveal>
            <div className={s.classes}>
              <Reveal className={s.classCard}>
                <p className={s.classDay}>Mondays</p>
                <h3>Private Pilot</h3>
                <p>6:30–9:00 PM · 10 weeks · Prepares you for the Private Pilot Knowledge Test</p>
              </Reveal>
              <Reveal delay={100} className={s.classCard}>
                <p className={s.classDay}>Tuesdays</p>
                <h3>Instrument Pilot</h3>
                <p>6:30–9:00 PM · 10 weeks · Prepares you for the Instrument Knowledge Test</p>
              </Reveal>
            </div>
            <Reveal>
              <a href={contact.mailto("Reserve a ground school seat")} className={`${s.btn} ${s.btnNavy}`}>Reserve a Seat <Arrow /></a>
            </Reveal>
          </div>
          <Reveal delay={120} className={s.instructor}>
            <img src={asset("classroom")} alt="Spencer Aviation classroom" loading="lazy" />
            <div className={s.instructorBody}>
              <p className={s.instructorTitle}>Your instructor</p>
              <ul>{instructorCreds.map((c) => <li key={c}>{c}</li>)}</ul>
              <blockquote>
                &ldquo;Thanks to Spencer&apos;s efforts to prepare the applicant for the knowledge and oral exams the graduates have always been more knowledgeable…&rdquo;
                <cite>Designated Pilot Examiner</cite>
              </blockquote>
            </div>
          </Reveal>
        </div>
        <div className={s.marquee} aria-label="Student comments">
          <div className={s.marqueeTrack}>
            {[...groundQuotes, ...studentQuotes, ...groundQuotes, ...studentQuotes].map((q, i) => (
              <span key={i}>&ldquo;{q}&rdquo;</span>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className={`${s.section} ${s.white}`}>
        <div className={`${s.wrap} ${s.pricing}`}>
          <Reveal className={s.introCard}>
            <Kicker light>Is flying for you?</Kicker>
            <p className={s.introPrice}>$150</p>
            <h2 className={`${s.h2} ${s.h2Light}`}>Introductory <em>flight.</em></h2>
            <p className={s.introBody}>Sit in the pilot&apos;s seat with a professional flight instructor and actually fly the airplane. Includes your pilot logbook, and the time counts toward any future flying you do.</p>
            <a href={contact.mailto("Introductory flight")} className={`${s.btn} ${s.btnRed}`}>Email to Schedule <Arrow /></a>
          </Reveal>
          <Reveal delay={120}>
            <Kicker>Honest pricing</Kicker>
            <h2 className={s.h2}>No surprises. <em>No fine print.</em></h2>
            <p className={s.lede}>You don&apos;t pay up front. Pay at each lesson; a typical two-hour lesson averages $200–$400. Lower operating costs at our airports keep rates competitive, and current rates are reviewed with you before training starts.</p>
            <ul className={s.noFees}>{noFees.map((f) => <li key={f}>{f}</li>)}</ul>
            <p className={s.fine}>Discounted rates are available with a refundable account deposit. We accept all major credit cards, cash or check, and can recommend flight-training financing.</p>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={`${s.section} ${s.paper}`}>
        <div className={s.wrap}>
          <Reveal>
            <Kicker>From our students</Kicker>
            <h2 className={s.h2}>&ldquo;They are hands down <em>the best.&rdquo;</em></h2>
          </Reveal>
          <div className={s.quotes}>
            {studentQuotes.map((q, i) => (
              <Reveal key={q} delay={(i % 3) * 90} className={s.quote}>
                <p>&ldquo;{q}&rdquo;</p>
                <span>Spencer Aviation student</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS + CONTACT */}
      <section id="locations" className={`${s.section} ${s.navy}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <Kicker light>Two Locations</Kicker>
              <h2 className={`${s.h2} ${s.h2Light}`}>Central Ohio, <em>covered.</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={`${s.lede} ${s.ledeLight}`}>Want to tour our facilities, meet our instructors and see our aircraft? Email us for an appointment. All flight training is by prior appointment.</p>
            </Reveal>
          </div>
          <div className={s.locations}>
            {locations.map((l, i) => (
              <Reveal key={l.name} delay={i * 120} className={s.location}>
                <p className={s.locAirport}>{l.airport}</p>
                <h3>{l.name}</h3>
                <p>{l.detail}</p>
                <p className={s.locAddr}>{l.area}<br />{l.city}</p>
                <a href={l.maps} target="_blank" rel="noreferrer">Get directions <Arrow /></a>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className={s.emailCta}>
              <div>
                <p className={s.emailNote}>Everyone at Spencer Aviation is a pilot, so we use email for first contact. <em>(We don&apos;t text or talk on the phone while flying.)</em></p>
                <a href={contact.mailto("Flight training inquiry")} className={s.emailBig}>{contact.email}</a>
              </div>
              <div className={s.ctas}>
                <a href={contact.mailto("Flight training inquiry")} className={`${s.btn} ${s.btnRed}`}>Email Us <Arrow /></a>
                <a href={contact.schedule} target="_blank" rel="noreferrer" className={`${s.btn} ${s.btnGlass}`}>Student Login</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className={s.footer}>
        <div className={`${s.wrap} ${s.footerInner}`}>
          <img src="/spencer-aviation/logo.png" alt="Spencer Aviation, Inc." width={720} height={298} loading="lazy" />
          <nav aria-label="Footer">
            <a href="#awards">Awards</a>
            <a href="#training">Training</a>
            <a href="#fleet">Fleet</a>
            <a href="#ground">Ground School</a>
            <a href="#locations">Locations</a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </nav>
        </div>
        <div className={`${s.wrap} ${s.footerBase}`}>
          <span>© {new Date().getFullYear()} Spencer Aviation, Inc. · Flying 7 days a week, year-round, by appointment</span>
          <span>Website concept by Stratum</span>
        </div>
      </footer>
    </div>
  );
}
