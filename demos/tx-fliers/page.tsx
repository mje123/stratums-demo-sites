// Gulf Coast Flight Training (txfliers.com): redesign concept by Stratum.
// All facts, quotes and captions come from their site (see data.ts); photos, logo and cockpit footage are their own,
// copied into /public/tx-fliers (footage re-encoded from their 29 MB original).
import { League_Gothic, Onest } from "next/font/google";
import s from "./styles.module.css";
import { BookFlight, FlightPlan, Gallery, HeroVideo, MobileBar, Nav, Reveal, Reviews } from "./client";
import { alanCreds, contact, faq, img, pillars, toolkit } from "./data";

const display = League_Gothic({ subsets: ["latin"], weight: "400", variable: "--gc-display" });
const sans = Onest({ subsets: ["latin"], variable: "--gc-sans" });

export const metadata = {
  title: "Gulf Coast Flight Training | Learn to Fly in Corpus Christi, Aransas Pass & Rockport, TX",
  description:
    "Personalized flight training at Ingleside Regional Airport (KTFP): discovery flights, Private Pilot, Instrument and Commercial with CFI Alan \"Gator\" O'Martin. Serving Corpus Christi, Portland, Padre Island and Rockport.",
};

export default function GulfCoastFlightTraining() {
  return (
    <div id="top" className={`${s.root} ${display.variable} ${sans.variable}`}>
      <Nav />

      {/* HERO */}
      <section className={s.hero}>
        <HeroVideo />
        <div className={s.heroShade} />
        <div className={s.heroInner}>
          <p className={`${s.eyebrow} ${s.rise}`}><span aria-hidden>★</span> Ingleside Regional Airport · Aransas Pass, Texas</p>
          <h1 className={`${s.heroTitle} ${s.rise}`} style={{ animationDelay: "120ms" }}>
            Learn to fly the <span>Texas Gulf Coast.</span>
          </h1>
          <p className={`${s.heroLede} ${s.rise}`} style={{ animationDelay: "260ms" }}>
            Personalized flight training for lifestyle pilots, one-on-one with a family-run school that puts safety first. Proudly serving
            Corpus Christi, Portland, Padre Island and Rockport.
          </p>
          <div className={`${s.ctas} ${s.rise}`} style={{ animationDelay: "400ms" }}>
            <a href="#book" className={`${s.btn} ${s.btnCoral}`}>Book a Discovery Flight</a>
            <a href="#training" className={`${s.btn} ${s.btnGlass}`}>See the Training Path</a>
          </div>
        </div>
        <div className={`${s.atis} ${s.rise}`} style={{ animationDelay: "560ms" }} aria-label="School information">
          <div><small>Field</small><b>KTFP</b></div>
          <div><small>Hours</small><b>0900–1700</b></div>
          <div><small>Instructor</small><b>CFI · AGI</b></div>
          <div className={s.atisWide}><small>Call</small><b><a href={contact.tel}>{contact.phone}</a></b></div>
        </div>
      </section>

      {/* PROOF STRIP */}
      <section className={s.proof} aria-label="What students say">
        <div className={s.proofTrack}>
          {[...Array(2)].map((_, k) => (
            <div key={k} className={s.proofSet} aria-hidden={k === 1}>
              <span>&ldquo;I became a Private Pilot in just 3 months&rdquo; <em>Ian C</em></span>
              <span>&ldquo;Alan&rsquo;s training stresses safety above all else&rdquo; <em>Thad C.</em></span>
              <span>&ldquo;He genuinely cared about my aviation journey&rdquo; <em>Andrea</em></span>
              <span>&ldquo;Alan will allow you to learn and train at your desired pace&rdquo; <em>Ronnie L.</em></span>
              <span>&ldquo;Alan is a great instructor and very adaptable to the way I learn&rdquo; <em>Robert B.</em></span>
            </div>
          ))}
        </div>
      </section>

      {/* DISCOVERY FLIGHT */}
      <section id="discovery" className={`${s.section} ${s.sand}`}>
        <div className={`${s.wrap} ${s.discovery}`}>
          <div>
            <Reveal>
              <p className={s.kicker}>Your first flight</p>
              <h2 className={s.h2}>Take the controls <span>on day one.</span></h2>
              <p className={s.lede}>
                A Discovery Flight lets you experience being at the controls with an FAA-Certificated Flight Instructor, then talk through how
                training can fit your goals.
              </p>
            </Reveal>
            <ol className={s.timeline}>
              {[
                ["Briefing", "A pre-flight briefing on the ground, so you know exactly what's about to happen."],
                ["Fly", "A short flight, with you at the controls."],
                ["Debrief", "Tailored feedback on how training can fit your goals and your schedule."],
              ].map(([t, d], i) => (
                <Reveal key={t} delay={i * 90} className={s.tStep}>
                  <span className={s.tNum}>0{i + 1}</span>
                  <div><h3>{t}</h3><p>{d}</p></div>
                </Reveal>
              ))}
            </ol>
            <Reveal className={s.duration}>
              <strong>30–45</strong><span>minutes, typically, from briefing to debrief</span>
            </Reveal>
          </div>
          <Reveal delay={120} className={s.bookWrap}>
            <div id="book" className={s.bookAnchor} />
            <BookFlight />
          </Reveal>
        </div>
      </section>

      {/* TRAINING PATH */}
      <section id="training" className={`${s.section} ${s.gulf}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={`${s.kicker} ${s.kickerLight}`}>Training path</p>
              <h2 className={`${s.h2} ${s.h2Light}`}>File your <span>flight plan.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={`${s.lede} ${s.ledeLight}`}>
                Four legs, one instructor. Tap a waypoint to see what each leg involves. Every program follows carefully structured lesson
                plans, so you always know where you are and what&apos;s next.
              </p>
            </Reveal>
          </div>
          <Reveal><FlightPlan /></Reveal>
        </div>
      </section>

      {/* INSTRUCTOR */}
      <section id="instructor" className={`${s.section} ${s.sand}`}>
        <div className={`${s.wrap} ${s.cfi}`}>
          <Reveal className={s.cfiMedia}>
            <img src={img("alan")} alt="Alan O'Martin, CFI, leaning on the wing of a light aircraft" loading="lazy" />
            <div className={s.cfiBadge}><small>Your instructor</small><b>Alan &ldquo;Gator&rdquo; O&rsquo;Martin</b><span>Owner · CFI · AGI</span></div>
          </Reveal>
          <div>
            <Reveal>
              <p className={s.kicker}>Meet your instructor</p>
              <h2 className={s.h2}>Train as you fly. <span>Fly as you train.</span></h2>
              <p className={s.lede}>
                Alan is an FAA Certificated Flight Instructor and Advanced Ground Instructor with a Commercial certificate and Instrument rating.
                A retired Naval Aircrewman with thousands of hours in a variety of aircraft, and a certified Project Manager with PMI. Flying
                safely is his top priority.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <ul className={s.logbook} aria-label="Credentials">
                {alanCreds.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </Reveal>
            <Reveal delay={160} className={s.family}>
              <img src={img("yvonne-alan")} alt="Yvonne and Alan O'Martin with their Cherokee 180" loading="lazy" />
              <div>
                <h3>Family run, family fun.</h3>
                <p>&ldquo;We&rsquo;re a couple of aviation enthusiasts, and we look forward to working with you to achieve your goals.&rdquo; As Ian C. remembers it: &ldquo;My first call with Yvonne and meeting Alan immediately made me feel comfortable…&rdquo;</p>
                <a href={`mailto:${contact.email}`} className={s.textLink}>{contact.email}</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY + AIRCRAFT */}
      <section className={`${s.section} ${s.night}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={`${s.kicker} ${s.kickerLight}`}>Why fly with Gulf Coast</p>
              <h2 className={`${s.h2} ${s.h2Light}`}>Four things <span>every lesson gets.</span></h2>
            </Reveal>
          </div>
          <div className={s.pillars}>
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className={s.pillar}>
                <span className={s.pillarNum}>0{i + 1}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </Reveal>
            ))}
          </div>
          <div className={s.aircraft}>
            <Reveal className={s.acPhoto}>
              <img src={img("cherokee-180")} alt="A student beside the Piper Cherokee 180" loading="lazy" />
            </Reveal>
            <Reveal delay={100} className={s.acInfo}>
              <p className={`${s.kicker} ${s.kickerLight}`}>The airplane</p>
              <h3 className={s.acTitle}>Meet the <span>Cherokee 180.</span></h3>
              <p>Yvonne and Alan&rsquo;s own Piper, the airplane in many of the first-solo and new-pilot photos on our wall.</p>
              <img src={img("panel")} alt="The instrument panel" loading="lazy" className={s.acPanel} />
            </Reveal>
            <Reveal delay={180} className={s.coin}>
              <img src={img("challenge-coin")} alt="The Gulf Coast Flight Training pilot challenge coin" loading="lazy" />
              <p><em>The Gulf Coast Flight Training pilot challenge coin.</em></p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STUDENTS */}
      <section id="students" className={`${s.section} ${s.sand}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>Student achievements</p>
              <h2 className={s.h2}>Real students. <span>Real wings.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>From first discovery flights to first solos and new private pilot certificates. We appreciate our students and are thrilled to celebrate their achievements.</p>
            </Reveal>
          </div>
          <Reveal><Gallery /></Reveal>
          <Reveal className={s.reviewsWrap}><Reviews /></Reveal>
        </div>
      </section>

      {/* WHERE */}
      <section className={s.where}>
        <img src="/tx-fliers/coast-inlet.jpg" alt="The coastline seen from their cockpit" className={s.whereImg} loading="lazy" />
        <div className={s.whereShade} />
        <div className={`${s.wrap} ${s.whereInner}`}>
          <Reveal>
            <p className={`${s.kicker} ${s.kickerLight}`}>Where you&apos;ll fly</p>
            <h2 className={`${s.h2} ${s.h2Light}`}>Your classroom <span>has a coastline.</span></h2>
            <p className={`${s.lede} ${s.ledeLight}`}>
              Based at the beautiful Ingleside Regional Airport, just outside of Portland and Corpus Christi. The footage at the top of this page
              comes straight from the cockpit.
            </p>
            <ul className={s.serving} aria-label="Areas served">{contact.serving.map((c) => <li key={c}>{c}</li>)}</ul>
          </Reveal>
          <Reveal delay={120} className={s.placeCard}>
            <small>Come say hi</small>
            <b>{contact.airport}</b>
            <p>{contact.street}<br />{contact.city}</p>
            <p className={s.placeHours}>Open {contact.hours}</p>
            <a href={contact.directions} target="_blank" rel="noreferrer" className={`${s.btn} ${s.btnCoral}`}>Get Directions</a>
          </Reveal>
        </div>
      </section>

      {/* FAQ + TOOLKIT */}
      <section className={`${s.section} ${s.sand}`}>
        <div className={`${s.wrap} ${s.faqWrap}`}>
          <Reveal>
            <p className={s.kicker}>Good questions</p>
            <h2 className={s.h2}>Before you <span>call.</span></h2>
            <p className={s.lede}>Still wondering about something? Yvonne is a phone call away at <a href={contact.tel} className={s.textLink}>{contact.phone}</a>.</p>
          </Reveal>
          <div>
            {faq.map(([q, a], i) => (
              <Reveal key={q} delay={i * 40}>
                <details className={s.faq} open={i === 0}>
                  <summary>{q}<span aria-hidden /></summary>
                  <p>{a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
        <div className={`${s.wrap} ${s.toolkit}`}>
          <Reveal>
            <p className={s.kicker}>Pilot toolkit</p>
            <h3 className={s.toolTitle}>Guides and tools for planning your next adventure.</h3>
          </Reveal>
          <ul className={s.tools}>
            {toolkit.map((t, i) => (
              <Reveal key={t.name} delay={i * 50} className={s.tool}>
                <a href={t.href} target="_blank" rel="noreferrer">
                  <b>{t.name} <span aria-hidden>↗</span></b>
                  <span>{t.what}</span>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={s.contact}>
        <div className={`${s.wrap} ${s.contactInner}`}>
          <Reveal>
            <p className={`${s.kicker} ${s.kickerLight}`}>The world is within reach</p>
            <h2 className={s.contactTitle}>Get your wings <span>with Gulf Coast.</span></h2>
            <div className={s.ctas}>
              <a href="#book" className={`${s.btn} ${s.btnCoral}`}>Book a Discovery Flight</a>
              <a href={contact.tel} className={`${s.btn} ${s.btnGlass}`}>Call {contact.phone}</a>
            </div>
            <div className={s.contactCard}>
              <div><span>Visit</span><p><a href={contact.directions} target="_blank" rel="noreferrer">{contact.airport}<br />{contact.street}, {contact.city}</a></p></div>
              <div><span>Email</span><p><a href={`mailto:${contact.email}`}>{contact.email}</a></p></div>
              <div><span>Hours</span><p>{contact.hours}</p></div>
              <div><span>Follow</span><p><a href={contact.facebook} target="_blank" rel="noreferrer">Facebook</a> · <a href={contact.instagram} target="_blank" rel="noreferrer">Instagram</a> · <a href={contact.google} target="_blank" rel="noreferrer">Google</a></p></div>
            </div>
          </Reveal>
          <Reveal delay={120} className={s.map}>
            <iframe src={contact.embed} title="Map to Gulf Coast Flight Training at Ingleside Regional Airport" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </Reveal>
        </div>
        <footer className={`${s.wrap} ${s.footer}`}>
          <img src="/tx-fliers/logo-white.png" alt="Gulf Coast Flight Training" className={s.footLogo} loading="lazy" />
          <span>© {new Date().getFullYear()} Gulf Coast Flight Training · Aransas Pass, Texas</span>
          <span>Website concept by Stratum</span>
        </footer>
      </section>

      <MobileBar />
    </div>
  );
}
