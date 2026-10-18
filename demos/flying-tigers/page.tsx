// Flying Tigers Flight School: redesign concept by Stratum
import { Barlow_Condensed, Inter, Instrument_Serif } from "next/font/google";
import s from "./styles.module.css";
import { Nav, Programs, Reveal } from "./client";
import { Arrow, Calendar, Mail, Phone, Pin } from "./icons";
import { avionics, contact, fleet, img, instructors, milestones, path, wix } from "./data";

const display = Barlow_Condensed({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--ft-display" });
const sans = Inter({ subsets: ["latin"], variable: "--ft-sans" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--ft-serif" });

export const metadata = {
  title: "Flying Tigers Flight School | Flight Training in Houston, Texas",
  description: "Part 61 & Part 141 flight training at Ellington Airport, Houston. Private, Instrument, Commercial, CFI and CFII programs.",
};

function Eyebrow({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`${s.eyebrow} ${light ? s.eyebrowLight : ""}`}>{children}</p>;
}

export default function FlyingTigers() {
  return (
    <div id="top" className={`${s.root} ${display.variable} ${sans.variable} ${serif.variable}`}>
      <Nav />

      {/* HERO */}
      <section className={s.hero}>
        <img
          className={s.heroImg}
          src={wix(img.sunset, 2400, 1350)}
          srcSet={`${wix(img.sunset, 1100, 1400)} 900w, ${wix(img.sunset, 2400, 1350)} 2400w`}
          sizes="100vw"
          alt="A Flying Tigers training aircraft on the ramp at sunset"
          fetchPriority="high"
        />
        <div className={s.heroShade} />
        <div className={s.heroContent}>
          <p className={`${s.heroCred} ${s.rise}`} style={{ animationDelay: "100ms" }}>
            <span className={s.dot} /> Part 61 &amp; Part 141 Flight Training | Houston, Texas
          </p>
          <h1 className={s.heroTitle}>
            <span className={s.rise} style={{ animationDelay: "250ms" }}>Your future</span>
            <span className={s.rise} style={{ animationDelay: "400ms" }}>takes flight<em>.</em></span>
          </h1>
          <p className={`${s.heroLede} ${s.rise}`} style={{ animationDelay: "600ms" }}>
            Build your aviation future with hands-on flight training in Houston, Texas.
          </p>
          <div className={`${s.heroCtas} ${s.rise}`} style={{ animationDelay: "750ms" }}>
            <a href="#programs" className={`${s.btn} ${s.btnAmber}`}>Explore Training Programs <Arrow /></a>
            <a href="#discovery" className={`${s.btn} ${s.btnGhost}`}>Schedule a Discovery Flight</a>
          </div>
        </div>
        <dl className={s.heroStrip}>
          <div><dt>Home base</dt><dd>Ellington Airport · KEFD</dd></div>
          <div><dt>Certification</dt><dd>Part 61 &amp; Part 141</dd></div>
          <div><dt>Programs</dt><dd>Private through CFII</dd></div>
          <div><dt>Fleet</dt><dd>Cessna &amp; Grumman</dd></div>
        </dl>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className={`${s.section} ${s.sectionLight}`}>
        <div className={s.wrap}>
          <div className={s.sectionHead}>
            <Reveal>
              <Eyebrow>Training Pathways</Eyebrow>
              <h2 className={s.h2}>Five programs.<br /><span className={s.serifAccent}>One</span> place to earn your wings.</h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>
                From your very first lesson to teaching students of your own, every certificate and rating is
                trained in-house. Each course includes ground school, books and materials, and written and flight tests.
              </p>
            </Reveal>
          </div>
          <Reveal><Programs /></Reveal>
          <p className={s.footnote}>
            Programs are offered under 14 CFR Part 61, and are Part 141 approved while enrolled in Liberty. Estimates are
            based on the current program pages. Flight hours vary by student (the national average for Private Pilot is
            about 50–60 hours). Contact us for current pricing.
          </p>
        </div>
      </section>

      {/* WHY */}
      <section id="about" className={`${s.section} ${s.sectionCream}`}>
        <div className={`${s.wrap} ${s.why}`}>
          <Reveal className={s.whyMedia}>
            <img src={wix(img.studentCheetah, 1100, 1300)} alt="A Flying Tigers student and instructor in a Grumman Cheetah" loading="lazy" />
            <p className={s.caption}>On the ramp at Ellington: a student and instructor in a Grumman Cheetah.</p>
          </Reveal>
          <div className={s.whyText}>
            <Reveal>
              <Eyebrow>Why Flying Tigers</Eyebrow>
              <blockquote className={s.quote}>&ldquo;We train the pilots of tomorrow.&rdquo;</blockquote>
              <p className={s.lede}>
                Over the years our reputation has grown as our graduates go on to become knowledgeable professionals in the
                field. If you&apos;re ready to roll up your sleeves, learn a new trade and make new friends, you&apos;ll fit right in.
              </p>
            </Reveal>
            <div className={s.pillars}>
              {[
                ["Hands-on from day one", "Engaging, practical training that builds real stick-and-rudder skill and real-world judgement."],
                ["Experienced instruction", "A team of CFIs and CFIIs led by Chief Pilot Dan Randolph, backed by an on-site maintenance team."],
                ["Aircraft access", "Train in Cessna 172s, Grumman Cheetahs and Tigers, including a G600 glass-cockpit TAA."],
                ["A real-world airport", "Ellington handles military, NASA and a unique blend of aircraft every day. It's an ideal place for fast-paced training."],
              ].map(([t, d], i) => (
                <Reveal key={t} delay={i * 80}>
                  <div className={s.pillar}>
                    <span className={s.pillarNum}>0{i + 1}</span>
                    <div><h3>{t}</h3><p>{d}</p></div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <div className={s.perks}>
                <span>5% discount for active duty &amp; retired military and law enforcement</span>
                <span>Financing available through partner programs</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FLEET */}
      <section id="fleet" className={`${s.section} ${s.sectionNavy}`}>
        <div className={s.wrap}>
          <div className={s.sectionHead}>
            <Reveal>
              <Eyebrow light>The Fleet</Eyebrow>
              <h2 className={`${s.h2} ${s.h2Light}`}>Cessna reliability.<br /><span className={s.serifAccent}>Grumman</span> character.</h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={`${s.lede} ${s.ledeLight}`}>
                Learn in proven high-wing Cessnas, then step into the low-wing, sliding-canopy Grummans that give
                Flying Tigers its personality.
              </p>
            </Reveal>
          </div>
          <div className={s.fleet}>
            {fleet.map((a, i) => (
              <Reveal key={a.make + a.model} delay={i * 90} className={s.plane}>
                <div className={s.planeImg}>
                  <img src={wix(a.image, 800, 600, a.crop)} alt={`Flying Tigers ${a.make} ${a.model}`} loading="lazy" />
                </div>
                <div className={s.planeBody}>
                  <p className={s.planeMake}>{a.make}</p>
                  <h3 className={s.planeModel}>{a.model}</h3>
                  <p className={s.planeNote}>{a.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className={s.avionics}>
              <span className={s.avionicsLabel}>Across the fleet</span>
              <ul>{avionics.map((a) => <li key={a}>{a}</li>)}</ul>
            </div>
          </Reveal>
          <p className={`${s.footnote} ${s.footnoteLight}`}>
            Fleet composition and availability change. Contact us for current aircraft, rental rates and instructor pricing.
          </p>
        </div>
      </section>

      {/* PATH */}
      <section id="path" className={`${s.section} ${s.sectionLight}`}>
        <div className={s.wrap}>
          <div className={s.sectionHead}>
            <Reveal>
              <Eyebrow>Your Path to the Cockpit</Eyebrow>
              <h2 className={s.h2}>Go as far as<br /><span className={s.serifAccent}>you</span> want to go.</h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>
                Some students fly for the love of it. Others are building a career. Every pilot&apos;s route is different,
                and our team will help you plan the one that fits your goals, schedule and budget.
              </p>
            </Reveal>
          </div>
          <div className={s.path}>
            {path.map((p, i) => (
              <Reveal key={p.step} delay={i * 100} className={s.pathStep}>
                <span className={s.pathNode}>{i === 0 ? "◉" : `0${i}`}</span>
                <h3>{p.step}</h3>
                <p>{p.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STUDENT SUCCESS */}
      <section id="success" className={`${s.section} ${s.sectionCream}`}>
        <div className={s.wrap}>
          <div className={s.success}>
            <Reveal className={s.successMedia}>
              <img src={wix(img.team, 1400, 1050)} alt="Flying Tigers students and instructors on the ramp" loading="lazy" />
              <div className={s.successTag}>#GoFlyingTigers</div>
            </Reveal>
            <div>
              <Reveal>
                <Eyebrow>Student Success</Eyebrow>
                <h2 className={s.h2}>Milestones<br /><span className={s.serifAccent}>worth</span> celebrating.</h2>
                <p className={s.lede}>
                  First solos, checkrides and new instructors: a few of the recent achievements our community has celebrated together.
                </p>
              </Reveal>
            </div>
          </div>
          <div className={s.milestones}>
            {milestones.map((m, i) => (
              <Reveal key={m.name} delay={(i % 4) * 70} className={s.milestone}>
                <span className={s.badge} data-kind={m.kind}>{m.kind}</span>
                <strong>{m.name}</strong>
                <span>{m.line}</span>
              </Reveal>
            ))}
          </div>
          <p className={s.footnote}>
            As shared on <a href={contact.instagram} target="_blank" rel="noreferrer">@goflyingtigers</a>.
          </p>
        </div>
      </section>

      {/* DISCOVERY */}
      <section id="discovery" className={s.discovery}>
        <img src={wix(img.ellington, 2000, 1200)} alt="" loading="lazy" className={s.discoveryImg} />
        <div className={s.discoveryShade} />
        <Reveal className={s.discoveryInner}>
          <Eyebrow light>Discovery Flight</Eyebrow>
          <h2 className={s.discoveryTitle}>Every pilot remembers<br />their <em>first</em> flight.</h2>
          <p>
            Sit in the left seat, take the controls with an instructor beside you, and see Houston from a whole new altitude.
            It&apos;s the easiest way to find out if flight training is right for you.
          </p>
          <div className={s.heroCtas}>
            <a href={contact.mailto("Discovery flight inquiry")} className={`${s.btn} ${s.btnAmber}`}>Ask About a Discovery Flight <Arrow /></a>
            <a href={contact.tel} className={`${s.btn} ${s.btnGhost}`}><Phone /> Call {contact.phone}</a>
          </div>
        </Reveal>
      </section>

      {/* CONTACT */}
      <section id="contact" className={`${s.section} ${s.sectionLight}`}>
        <div className={`${s.wrap} ${s.contact}`}>
          <Reveal>
            <Eyebrow>Contact</Eyebrow>
            <h2 className={s.h2}>Come see us<br /><span className={s.serifAccent}>at</span> Ellington.</h2>
            <p className={s.lede}>Questions about programs, scheduling or financing? Our team is happy to help. Call, email, or stop by.</p>
            <ul className={s.contactList}>
              <li><Pin /><a href={contact.maps} target="_blank" rel="noreferrer">{contact.street}<br />{contact.city}</a></li>
              <li><Phone /><a href={contact.tel}>{contact.phone}</a></li>
              <li><Mail /><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
            </ul>
            <div className={s.contactBtns}>
              <a href={contact.tel} className={`${s.btn} ${s.btnNavy}`}><Phone /> Call Now</a>
              <a href={contact.mailto("Flight training inquiry")} className={`${s.btn} ${s.btnOutline}`}><Mail /> Email Us</a>
              <a href={contact.schedule} target="_blank" rel="noreferrer" className={`${s.btn} ${s.btnOutline}`}><Calendar /> Student Scheduling</a>
            </div>
          </Reveal>
          <Reveal delay={120} className={s.mapCard}>
            <iframe
              title="Map to Flying Tigers Flight School"
              src="https://maps.google.com/maps?q=12711%20Blume%20Ave%2C%20Houston%2C%20TX%2077034&z=14&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className={s.mapMeta}>
              <span>Instructors</span>
              <ul>{instructors.map((n) => <li key={n}>{n}</li>)}</ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={s.footer}>
        <div className={`${s.wrap} ${s.footerGrid}`}>
          <div>
            <img src="/flying-tigers/logo-light.png" alt="Flying Tigers" className={s.footerLogo} width={624} height={364} loading="lazy" />
            <p className={s.footerSub}>Flight School · Part 61 &amp; Part 141</p>
            <p className={s.footerAddr}>{contact.street}<br />{contact.city}</p>
          </div>
          <nav aria-label="Footer">
            <p className={s.footerHead}>Explore</p>
            <a href="#programs">Training Programs</a>
            <a href="#fleet">Our Fleet</a>
            <a href="#about">About</a>
            <a href="#discovery">Discovery Flight</a>
          </nav>
          <div>
            <p className={s.footerHead}>Get in touch</p>
            <a href={contact.tel}>{contact.phone}</a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={contact.schedule} target="_blank" rel="noreferrer">Flight Schedule Pro</a>
          </div>
          <div>
            <p className={s.footerHead}>Follow</p>
            <a href={contact.instagram} target="_blank" rel="noreferrer">Instagram</a>
            <a href={contact.facebook} target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </div>
        <div className={`${s.wrap} ${s.footerBase}`}>
          <span>© {new Date().getFullYear()} Flying Tigers Flight School</span>
          <span>Website concept by Stratum</span>
        </div>
      </footer>
    </div>
  );
}
