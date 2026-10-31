// AV (youth aviation outreach, Atlanta): pre-launch website concept by Stratum.
// Mission from the founder's own description: introducing young kids around Atlanta to aviation by
// visiting elementary, middle and high schools to let students fly a plane. Brand name is still in progress.
// Photos are public domain (NASA) or CC0 (Flickr), not of this organization.
import { Fredoka, Nunito } from "next/font/google";
import s from "./styles.module.css";
import { AvMark, Levels, Nav, Reveal, VisitForm } from "./client";

const display = Fredoka({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--av-display" });
const sans = Nunito({ subsets: ["latin"], variable: "--av-sans" });

export const metadata = {
  title: "AV | Youth Aviation Across Atlanta",
  description: "Bringing aviation to Atlanta's elementary, middle and high schools, so students can experience flying a plane.",
};

const img = (n: string) => `/av-atlanta/${n}.jpg`;

export default function AvAtlanta() {
  return (
    <div id="top" className={`${s.root} ${display.variable} ${sans.variable}`}>
      <Nav />

      {/* HERO */}
      <section className={s.hero}>
        <div className={s.sky} aria-hidden>
          <span className={`${s.cloud} ${s.c1}`} /><span className={`${s.cloud} ${s.c2}`} /><span className={`${s.cloud} ${s.c3}`} />
          <div className={s.loopWrap}>
            <svg className={s.loop} viewBox="0 0 600 300" width="600" height="300">
              <path d="M300 150 C 380 40, 560 40, 560 150 C 560 260, 380 260, 300 150 C 220 40, 40 40, 40 150 C 40 260, 220 260, 300 150 Z" />
            </svg>
            <svg className={s.plane} viewBox="0 0 24 24"><path d="M12 2c.8 0 1.4.7 1.4 1.6V9l7.6 4.4v2l-7.6-2.2v4.6l2.2 1.6V21L12 20l-3.6 1v-1.6l2.2-1.6v-4.6L3 15.4v-2L10.6 9V3.6C10.6 2.7 11.2 2 12 2z" /></svg>
          </div>
        </div>
        <div className={s.heroInner}>
          <div className={s.heroCopy}>
            <p className={`${s.chip} ${s.rise}`}><span /> Atlanta, Georgia · School outreach</p>
            <h1 className={`${s.heroTitle} ${s.rise}`} style={{ animationDelay: "120ms" }}>
              The sky is a <em>classroom.</em>
            </h1>
            <p className={`${s.heroLede} ${s.rise}`} style={{ animationDelay: "240ms" }}>
              We introduce young people around Atlanta to aviation, visiting elementary, middle and high schools so students can do something most
              never imagine they could: fly a plane.
            </p>
            <div className={`${s.ctas} ${s.rise}`} style={{ animationDelay: "360ms" }}>
              <a href="#contact" className={`${s.btn} ${s.btnPrimary}`}>Book a School Visit</a>
              <a href="#mission" className={`${s.btn} ${s.btnGhost}`}>Our Mission</a>
            </div>
          </div>
          <div className={`${s.heroPhoto} ${s.rise}`} style={{ animationDelay: "300ms" }}>
            <img src={img("kid-sim")} alt="A young student at the controls of a flight simulator" fetchPriority="high" />
            <div className={s.badge}><AvMark className={s.badgeMark} /><span>First time<br />at the controls</span></div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section id="mission" className={`${s.section} ${s.white}`}>
        <div className={`${s.wrap} ${s.mission}`}>
          <Reveal>
            <p className={s.kicker}>Our mission</p>
            <h2 className={s.h2}>Every kid deserves a <span>first flight.</span></h2>
            <p className={s.lede}>
              For a lot of students, aviation feels out of reach: something for other people. We bring it to them, at their school, and let them
              feel it for themselves. One flight can change what a kid believes is possible.
            </p>
          </Reveal>
          <div className={s.pillars}>
            {[
              ["01", "We come to you", "Visits to elementary, middle and high schools across the Atlanta area."],
              ["02", "Hands on, not hands off", "The goal is real experience at the controls, not just a lecture about planes."],
              ["03", "A door to a future", "Showing students the pilots, mechanics and engineers they could become."],
            ].map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 90} className={s.pillar}>
                <span>{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SCHOOLS */}
      <section id="schools" className={`${s.section} ${s.teal}`}>
        <div className={`${s.wrap} ${s.schools}`}>
          <Reveal className={s.schoolsCopy}>
            <p className={`${s.kicker} ${s.kickerLight}`}>For every grade</p>
            <h2 className={`${s.h2} ${s.h2Light}`}>Built for <span>K through 12.</span></h2>
            <p className={`${s.lede} ${s.ledeLight}`}>Each visit meets students where they are, from first wonder to a real career path.</p>
            <Levels />
          </Reveal>
          <Reveal delay={120} className={s.collage}>
            <img src={img("paper-plane")} alt="A student folding a paper airplane" loading="lazy" />
            <img src={img("students-lab")} alt="Students working at computers with an instructor" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className={`${s.section} ${s.white}`}>
        <div className={s.wrap}>
          <Reveal className={s.head}>
            <p className={s.kicker}>What a visit looks like</p>
            <h2 className={s.h2}>From the classroom <span>to the cockpit.</span></h2>
          </Reveal>
          <ol className={s.steps}>
            {[
              ["Book", "A teacher, principal or parent reaches out and we plan a date that fits the school calendar."],
              ["Spark", "Students learn what makes an airplane fly and what pilots actually do."],
              ["Fly", "The big moment: students get their hands on the controls and experience flying a plane."],
              ["Next", "We point interested students toward what comes next on their path into aviation."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 90} className={s.step}>
                <span className={s.stepNum}>{i + 1}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* BAND */}
      <section className={s.band}>
        <img src={img("clouds")} alt="" className={s.bandImg} loading="lazy" />
        <div className={s.bandShade} />
        <Reveal className={`${s.wrap} ${s.bandInner}`}>
          <h2 className={s.bandTitle}>&ldquo;I flew a plane today.&rdquo;</h2>
          <p>That&apos;s the sentence we want every student in Atlanta to get to say.</p>
        </Reveal>
      </section>

      {/* GET INVOLVED */}
      <section id="contact" className={`${s.section} ${s.cream}`}>
        <div className={`${s.wrap} ${s.contact}`}>
          <Reveal>
            <p className={s.kicker}>Get involved</p>
            <h2 className={s.h2}>Bring AV to <span>your school.</span></h2>
            <p className={s.lede}>Teachers, administrators, parents and students: tell us about your school and we&apos;ll be in touch. Sponsors and partners who want to help more kids fly are welcome too.</p>
            <div className={s.who}>
              {["Teachers", "Principals", "Parents", "Sponsors"].map((w) => <span key={w}>{w}</span>)}
            </div>
            <img src={img("field-trip")} alt="A group of students posing in front of an aircraft" className={s.contactImg} loading="lazy" />
          </Reveal>
          <Reveal delay={120}>
            <VisitForm />
          </Reveal>
        </div>
      </section>

      <footer className={s.footer}>
        <div className={`${s.wrap} ${s.footerInner}`}>
          <span className={s.footBrand}><AvMark className={s.footMark} /> AV · Youth Aviation · Atlanta, GA</span>
          <span>Website concept by Stratum · Photos: NASA (public domain), Flickr (CC0)</span>
        </div>
      </footer>
    </div>
  );
}
