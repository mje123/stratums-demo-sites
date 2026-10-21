// UFlySheboygan (uflysheboygan.com): redesign concept by Stratum
// Facts and quotes are from uflysheboygan.com; photos and logo are Jay's own, copied into /public/ufly-sheboygan.
import { Unbounded, Rubik } from "next/font/google";
import s from "./styles.module.css";
import { Inquiry, Nav, Reveal } from "./client";

const display = Unbounded({ subsets: ["latin"], weight: ["500", "700", "800"], variable: "--uf-display" });
const sans = Rubik({ subsets: ["latin"], variable: "--uf-sans" });

export const metadata = {
  title: "UFlySheboygan | Flight Training with Jay Hoogstra in Sheboygan Falls, WI",
  description: "One-on-one private pilot training, flight simulation and aircraft inspections with instructor Jay Hoogstra, at his facility, at your location, or wherever you need him.",
};

const img = (n: string) => `/ufly-sheboygan/${n}`;
const contact = {
  phone: "920-698-0850",
  tel: "tel:+19206980850",
  email: "jdh@excel.net",
  mailto: (subject: string) => `mailto:jdh@excel.net?subject=${encodeURIComponent(subject)}`,
  area: "Sheboygan Falls, WI 53085",
};

const ways = [
  { tag: "01", title: "Flight simulator", body: "Practice navigation, emergency procedures and instrument flying in a safe, controlled environment, with Jay guiding every session." },
  { tag: "02", title: "Two accessible airplanes", body: "Get hands-on in real flight scenarios in two well-maintained training airplanes, and build confidence in a supportive setting." },
  { tag: "03", title: "Jay comes to you", body: "Train at Jay's facility, at your local airport or preferred location, or have Jay travel to you. Training is built around your schedule." },
];

const path = [
  ["Talk through your goals", "Call or email Jay directly. Training varies with every pilot, so it starts with a conversation about yours."],
  ["Build skills in the simulator", "Learn procedures and instrument flying on the ground first. It's easier, and cheaper, to get over the learning curve."],
  ["Fly the airplanes", "Put it together in the air in one of the two training airplanes, at a pace that fits you."],
  ["Track your progress", "Detailed feedback after your flights, so you always know what's improving and what's next."],
  ["Earn your certificate", "Guidance through the regulations and exam preparation, every step of the way to certification."],
];

const services = ["Private pilot training", "Flight simulation", "Aircraft inspections", "Mobile instruction", "Progress tracking", "Certification assistance"];

const quotes = [
  {
    text: "I was struggling with early IFR techniques and Jay did a GREAT job of using the local Redbird simulator as an easier (and cheaper!) way to get me over the learning curve quickly so my in-the-air time got right back on track!",
    who: "Cory B.",
    note: "2025",
  },
  {
    text: "He will teach you what you need to know at your own pace. Some of his students have finished their Private license in less than a month, it just depends on your schedule and goals.",
    who: "Ken P.",
    note: "Commercial SEL",
  },
];

const faq = [
  ["How do I book lessons?", "Booking with Jay is simple: contact him directly and pick a convenient time slot. Online booking is on the way, but because every pilot's training is different, a quick call is the best place to start."],
  ["Where does training happen?", "Wherever works for you: at Jay's facility in Sheboygan Falls, at your local airport or preferred location, or Jay can travel to you."],
  ["What equipment will I train on?", "A high-end flight simulator and two accessible airplanes for practical training."],
  ["Who can learn to fly with Jay?", "Jay has experience teaching students of all ages and skill levels, from first-timers to pilots adding skills like instrument flying."],
  ["How fast can I finish?", "It depends on your schedule and goals. Some of Jay's students have finished their private license in less than a month."],
];

export default function UFlySheboygan() {
  return (
    <div id="top" className={`${s.root} ${display.variable} ${sans.variable}`}>
      <Nav phone={contact.phone} tel={contact.tel} />

      {/* HERO */}
      <section className={s.hero}>
        <div className={s.sky} aria-hidden>
          <span className={s.cloud} style={{ top: "18%", left: "6%", animationDuration: "70s" }} />
          <span className={s.cloud} style={{ top: "58%", left: "40%", animationDuration: "95s", transform: "scale(0.7)" }} />
          <span className={s.cloud} style={{ top: "30%", left: "70%", animationDuration: "80s", transform: "scale(1.2)" }} />
          <svg className={s.flight} viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice">
            <path id="uf-route" d="M-60 430 C 260 400, 430 190, 700 210 S 1080 90, 1280 60" className={s.trail} fill="none" />
            <g className={s.planeIcon}>
              <path transform="rotate(90) scale(1.6) translate(-12 -12)" fill="currentColor" d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z" />
              <animateMotion dur="16s" repeatCount="indefinite" rotate="auto">
                <mpath href="#uf-route" />
              </animateMotion>
            </g>
          </svg>
        </div>
        <div className={s.heroInner}>
          <div className={s.heroCopy}>
            <p className={`${s.eyebrow} ${s.rise}`}>Sheboygan Falls, Wisconsin · One-on-one flight instruction</p>
            <h1 className={`${s.heroTitle} ${s.rise}`} style={{ animationDelay: "120ms" }}>
              Give your<br />dream <span>wings.</span>
            </h1>
            <p className={`${s.heroLede} ${s.rise}`} style={{ animationDelay: "260ms" }}>
              Learn to fly with instructor Jay Hoogstra: private pilot training, flight simulation and aircraft inspections, at his facility,
              your location, or wherever you need him.
            </p>
            <div className={`${s.ctas} ${s.rise}`} style={{ animationDelay: "400ms" }}>
              <a href={contact.tel} className={`${s.btn} ${s.btnPrimary}`}>Call Jay · {contact.phone}</a>
              <a href="#training" className={`${s.btn} ${s.btnGhost}`}>How Training Works</a>
            </div>
            <ul className={`${s.facts} ${s.rise}`} style={{ animationDelay: "540ms" }}>
              <li><b>Simulator</b> + 2 airplanes</li>
              <li><b>All ages</b> &amp; skill levels</li>
              <li><b>Mobile</b> instruction</li>
            </ul>
          </div>
          <div className={`${s.heroPortrait} ${s.rise}`} style={{ animationDelay: "300ms" }}>
            <div className={s.arch}>
              <img src={img("jay.jpg")} alt="Flight instructor Jay Hoogstra" fetchPriority="high" />
            </div>
            <div className={s.nameTag}>
              <small>Your instructor</small>
              <strong>Jay Hoogstra</strong>
            </div>
          </div>
        </div>
      </section>

      {/* MOTTO */}
      <div className={s.motto} aria-label="No clocks, no calendars, no excuses">
        <div className={s.mottoTrack} aria-hidden>
          {Array.from({ length: 4 }, (_, i) => (
            <span key={i}>No clocks <i>✈</i> No calendars <i>✈</i> No excuses <i>✈</i></span>
          ))}
        </div>
      </div>

      {/* TRAINING */}
      <section id="training" className={`${s.section} ${s.white}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>Training</p>
              <h2 className={s.h2}>Three ways to train. <span>One instructor who knows you.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>Personalized, one-on-one instruction tailored to your learning pace and preferences, with a mission of breaking down the barriers between you and the sky.</p>
            </Reveal>
          </div>
          <div className={s.ways}>
            {ways.map((w, i) => (
              <Reveal key={w.title} delay={i * 100} className={s.way}>
                <span className={s.wayTag}>{w.tag}</span>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className={s.photoBand}>
            <img src={img("ramp-thumbs-up.jpg")} alt="Two young aviators giving a thumbs-up from the cockpit of a polished aluminum airplane" loading="lazy" />
            <div className={s.photoNote}>
              <strong>Students of all ages.</strong>
              <span>Jay has experience teaching pilots of every age and skill level.</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PATH */}
      <section className={`${s.section} ${s.skySection}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>Your flight path</p>
              <h2 className={s.h2}>From first call <span>to certificate.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>Structured, with room for real life. You set the pace; Jay keeps you moving toward the goal.</p>
            </Reveal>
          </div>
          <ol className={s.path}>
            {path.map(([t, d], i) => (
              <Reveal key={t} delay={i * 80} className={s.step}>
                <span className={s.stepNum}>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* JAY */}
      <section id="jay" className={`${s.section} ${s.ink}`}>
        <div className={`${s.wrap} ${s.jay}`}>
          <Reveal className={s.jayMedia}>
            <img src={img("jay.jpg")} alt="Jay Hoogstra" loading="lazy" />
            <img src={img("logo.png")} alt="" className={s.jaySig} />
          </Reveal>
          <Reveal delay={120}>
            <p className={`${s.kicker} ${s.kickerLight}`}>Meet your instructor</p>
            <h2 className={`${s.h2} ${s.h2Light}`}>Jay Hoogstra, <span>private pilot instructor.</span></h2>
            <p className={`${s.lede} ${s.ledeLight}`}>
              The expert instructor behind UFlySheboygan, Jay is dedicated to guiding aspiring pilots toward certification. With a passion for aviation
              and teaching, he provides personalized, top-notch training, plus the support and guidance to help every student overcome challenges and
              excel.
            </p>
            <ul className={s.services}>{services.map((x) => <li key={x}>{x}</li>)}</ul>
            <div className={s.ctas}>
              <a href={contact.tel} className={`${s.btn} ${s.btnPrimary}`}>Call Jay</a>
              <a href={contact.mailto("Flight training with Jay")} className={`${s.btn} ${s.btnLight}`}>Email Jay</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STUDENTS */}
      <section id="students" className={`${s.section} ${s.white}`}>
        <div className={s.wrap}>
          <Reveal>
            <p className={s.kicker}>From Jay&apos;s students</p>
            <h2 className={s.h2}>Learn at <span>your own pace.</span></h2>
          </Reveal>
          <div className={s.quotes}>
            {quotes.map((q, i) => (
              <Reveal key={q.who} delay={i * 120} className={s.quote}>
                <span className={s.quoteMark} aria-hidden>&ldquo;</span>
                <blockquote>{q.text}</blockquote>
                <p className={s.quoteWho}><strong>{q.who}</strong> · {q.note}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className={`${s.section} ${s.skySection}`}>
        <div className={`${s.wrap} ${s.faqWrap}`}>
          <Reveal>
            <p className={s.kicker}>FAQ</p>
            <h2 className={s.h2}>Questions <span>before takeoff?</span></h2>
            <p className={s.lede}>Every pilot&apos;s training is different. If your question isn&apos;t here, Jay is a phone call away.</p>
          </Reveal>
          <div>
            {faq.map(([q, a], i) => (
              <Reveal key={q} delay={i * 60}>
                <details className={s.faq} open={i === 0}>
                  <summary>{q}<span aria-hidden /></summary>
                  <p>{a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={s.contact}>
        <div className={`${s.wrap} ${s.contactInner}`}>
          <Reveal>
            <p className={`${s.kicker} ${s.kickerLight}`}>Reach out today</p>
            <h2 className={s.contactTitle}>Let&apos;s talk about <span>your aviation goals.</span></h2>
            <p className={`${s.lede} ${s.ledeLight}`}>Training and aviation services vary with every pilot, so contact Jay directly to plan yours.</p>
            <div className={s.contactCard}>
              <div><span>Call</span><p><a href={contact.tel}>{contact.phone}</a></p></div>
              <div><span>Email</span><p><a href={`mailto:${contact.email}`}>{contact.email}</a></p></div>
              <div><span>Based in</span><p>{contact.area}</p></div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Inquiry email={contact.email} />
          </Reveal>
        </div>
        <footer className={`${s.wrap} ${s.footer}`}>
          <span>© {new Date().getFullYear()} UFlySheboygan · Sheboygan Falls, Wisconsin</span>
          <span>Website concept by Stratum</span>
        </footer>
      </section>
    </div>
  );
}
