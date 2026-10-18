// Venture North Aviation: redesign concept by Stratum
import { Sora, Inter } from "next/font/google";
import s from "./styles.module.css";
import { Compass, CourseFinder, Nav, Reveal } from "./client";
import { contact, facility, fleet, includes, services, steps, stories } from "./data";

const display = Sora({ subsets: ["latin"], variable: "--vn-display" });
const sans = Inter({ subsets: ["latin"], variable: "--vn-sans" });

export const metadata = {
  title: "Venture North Aviation | Accelerated Flight Training in Cloquet, Minnesota",
  description: "10-day instrument rating, 5-day CFI and more. Accelerated flight training in northern Minnesota since 1992.",
};

const img = (n: string) => `/venture-north/${n}.jpg`;

function Kicker({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`${s.kicker} ${light ? s.kickerLight : ""}`}>{children}</p>;
}

export default function VentureNorth() {
  const years = new Date().getFullYear() - 1992;
  return (
    <div id="top" className={`${s.root} ${display.variable} ${sans.variable}`}>
      <Nav />

      {/* HERO */}
      <section className={s.hero}>
        <img className={s.heroImg} src={img("forest")} alt="Fog drifting over a northern pine forest" fetchPriority="high" />
        <div className={s.heroShade} />
        <div className={s.heroInner}>
          <div className={s.heroCopy}>
            <p className={`${s.heroKicker} ${s.rise}`}>Accelerated Flight Training · Cloquet, Minnesota</p>
            <h1 className={`${s.heroTitle} ${s.rise}`} style={{ animationDelay: "120ms" }}>
              Your rating<br />in <em>days,</em><br />not months.
            </h1>
            <p className={`${s.heroLede} ${s.rise}`} style={{ animationDelay: "260ms" }}>
              A flight instructor exclusively assigned to you, unlimited instruction, and a course built around you.
              Training pilots in northern Minnesota since 1992.
            </p>
            <div className={`${s.ctas} ${s.rise}`} style={{ animationDelay: "400ms" }}>
              <a href="#courses" className={`${s.btn} ${s.btnGold}`}>Find Your Course</a>
              <a href={contact.tel} className={`${s.btn} ${s.btnGlass}`}>Call {contact.phone}</a>
            </div>
          </div>
          <div className={`${s.clock} ${s.rise}`} style={{ animationDelay: "520ms" }}>
            <p className={s.clockTitle}>Course clock</p>
            {[["10", "Instrument Rating"], ["5", "Flight Instructor (CFI)"], ["5", "Commercial Pilot"], ["21", "Private Pilot"], ["3", "Seaplane Rating"]].map(([d, n]) => (
              <a key={n} href="#courses" className={s.clockRow}>
                <strong>{d}</strong><span>days</span><em>{n}</em>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUDES */}
      <section className={`${s.section} ${s.bone}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <Kicker>Every course includes</Kicker>
              <h2 className={s.h2}>Train the way you fly.<br /><em>Fly the way you train.</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>Our elite staff of pilots, each with thousands of hours of experience, deliver comprehensive, single-pilot, scenario-based training. Every program can be customized to you, whatever your experience level.</p>
            </Reveal>
          </div>
          <div className={s.includes}>
            {includes.map(([t, d], i) => (
              <Reveal key={t} delay={(i % 3) * 80} className={s.include}>
                <span className={s.includeNum}>{String(i + 1).padStart(2, "0")}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section id="courses" className={`${s.section} ${s.pine}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <Kicker light>12 accelerated courses</Kicker>
              <h2 className={`${s.h2} ${s.h2Light}`}>Pick your rating.<br /><em>We&apos;ll set the pace.</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={`${s.lede} ${s.ledeLight}`}>From the 21-day Private Pilot course to the 90-day Professional Pilot Program. Pricing depends on your aircraft and goals, so call and we&apos;ll build your quote.</p>
            </Reveal>
          </div>
          <Reveal><CourseFinder /></Reveal>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className={`${s.section} ${s.bone}`}>
        <div className={s.wrap}>
          <Reveal>
            <Kicker>How it works</Kicker>
            <h2 className={s.h2}>Monday to <em>checkride.</em></h2>
          </Reveal>
          <ol className={s.steps}>
            {steps.map(([t, d], i) => (
              <li key={t}>
                <Reveal delay={i * 90}>
                  <span className={s.stepNum}>{i + 1}</span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* STORIES */}
      <section className={`${s.section} ${s.mist}`}>
        <img src={img("clouds")} alt="" className={s.mistImg} loading="lazy" />
        <div className={s.mistShade} />
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <Kicker light>Recent success stories</Kicker>
              <h2 className={`${s.h2} ${s.h2Light}`}>Pilots fly in from <em>across the country.</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={`${s.lede} ${s.ledeLight}`}>Congratulations to the pilots who earned their ratings with us in September 2026.</p>
            </Reveal>
          </div>
          <div className={s.stories}>
            {stories.map((st, i) => (
              <Reveal key={st.name + st.what} delay={i * 90} className={s.story}>
                <p className={s.storyFrom}>{st.from}</p>
                <h3>{st.name}</h3>
                <p className={s.storyEarned}>{st.earned}</p>
                <p className={s.storyWhat}>{st.what} · {st.plane}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FLEET */}
      <section id="fleet" className={`${s.section} ${s.bone}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <Kicker>The fleet</Kicker>
              <h2 className={s.h2}>Glass cockpits, <em>Cirrus and floats.</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>Train in technically advanced aircraft, or bring your own airplane and train in what you fly.</p>
            </Reveal>
          </div>
          <div className={s.fleet}>
            {fleet.map(([n, m, a], i) => (
              <Reveal key={n + m} delay={(i % 3) * 80} className={s.plane}>
                <Compass className={s.planeMark} />
                <p className={s.planeModel}>{m}</p>
                <h3>{n}</h3>
                <p className={s.planeAv}>{a}</p>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <blockquote className={s.stone}>
              <p>&ldquo;Successful piloting of a Technically Advanced Aircraft is an exercise in managing aircraft automation. Successful instructing in a Technically Advanced Aircraft is an exercise in managing student learning.&rdquo;</p>
              <cite><strong>William A. Stone</strong> · President · ATP, CFII, MEII, DPE</cite>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* SEAPLANE */}
      <section id="seaplane" className={s.seaplane}>
        <img src={img("lake")} alt="A calm northern lake ringed by pines" loading="lazy" className={s.seaImg} />
        <div className={s.seaShade} />
        <Reveal className={`${s.wrap} ${s.seaInner}`}>
          <Kicker light>Seaplane rating</Kicker>
          <h2 className={`${s.h2} ${s.h2Light}`}>Land of 10,000 lakes.<br /><em>Land on them.</em></h2>
          <p className={`${s.lede} ${s.ledeLight}`}>Earn your private or commercial seaplane rating in three days in a PA-18-160 Super Cub on Wipline floats, or go deeper with the 5-day Wilderness Seaplane Adventure: up to 16 hours of back-country flying.</p>
          <div className={s.seaStats}>
            <div><strong>3</strong><span>day rating course</span></div>
            <div><strong>5</strong><span>day wilderness adventure</span></div>
          </div>
          <a href={contact.tel} className={`${s.btn} ${s.btnGold}`}>Book Your Seaplane Rating</a>
        </Reveal>
      </section>

      {/* FBO */}
      <section id="fbo" className={`${s.section} ${s.bone}`}>
        <div className={`${s.wrap} ${s.fbo}`}>
          <div>
            <Reveal>
              <Kicker>More than a flight school</Kicker>
              <h2 className={s.h2}>A full-service <em>Northwoods FBO.</em></h2>
            </Reveal>
            <div className={s.services}>
              {services.map(([t, d], i) => (
                <Reveal key={t} delay={(i % 2) * 80} className={s.service}>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={120} className={s.facility}>
            <img src={img("charter")} alt="Passengers walking from a Venture North Cirrus" loading="lazy" />
            <div className={s.facilityBody}>
              <p className={s.facilityTitle}>Stop in and visit us</p>
              <ul>{facility.map((f) => <li key={f}>{f}</li>)}</ul>
              <p className={s.unicom}>UNICOM <strong>{contact.unicom}</strong></p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={s.contact}>
        <div className={s.wrap}>
          <Reveal className={s.contactTop}>
            <div>
              <Kicker light>Let VNA lead you toward success</Kicker>
              <h2 className={s.contactTitle}>Your next aviation <em>venture</em> starts here.</h2>
            </div>
            <div className={s.ctas}>
              <a href={contact.tel} className={`${s.btn} ${s.btnGold}`}>Call {contact.phone}</a>
              <a href={contact.mailto("Course scheduling")} className={`${s.btn} ${s.btnGlass}`}>Email Us</a>
            </div>
          </Reveal>
          <div className={s.contactGrid}>
            <Reveal className={s.contactCard}>
              <span>Visit</span>
              <p>{contact.street}<br />{contact.city}</p>
              <a href={contact.maps} target="_blank" rel="noreferrer">Get directions →</a>
            </Reveal>
            <Reveal delay={80} className={s.contactCard}>
              <span>Call</span>
              <p><a href={contact.tel}>{contact.phone}</a></p>
              <a href={contact.finance} target="_blank" rel="noreferrer">Flight training financing (AOPA) →</a>
            </Reveal>
            <Reveal delay={160} className={s.contactCard}>
              <span>Email</span>
              <p className={s.contactEmail}><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
              <a href={contact.youtube} target="_blank" rel="noreferrer">Watch us on YouTube →</a>
            </Reveal>
          </div>
          <Reveal className={s.mapWrap}>
            <iframe title="Map to Venture North Aviation" src="https://maps.google.com/maps?q=125%20Wheaton%20Road%2C%20Cloquet%2C%20MN%2055720&t=k&z=14&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </Reveal>
        </div>
        <footer className={`${s.wrap} ${s.footer}`}>
          <div className={s.footerBrand}>
            <Compass className={s.brandMark} />
            <span><strong>Venture North Aviation, LLC</strong><small>Training pilots for {years} years</small></span>
          </div>
          <nav aria-label="Footer">
            <a href="#courses">Courses</a>
            <a href="#fleet">Fleet</a>
            <a href="#seaplane">Seaplane</a>
            <a href="#fbo">FBO Services</a>
            <a href={contact.facebook} target="_blank" rel="noreferrer">Facebook</a>
            <a href={contact.instagram} target="_blank" rel="noreferrer">Instagram</a>
            <a href={contact.tiktok} target="_blank" rel="noreferrer">TikTok</a>
          </nav>
          <div className={s.footerBase}>
            <span>© {new Date().getFullYear()} Venture North Aviation, LLC</span>
            <span>Website concept by Stratum</span>
          </div>
        </footer>
      </section>
    </div>
  );
}
