// Aviators Academy (aviatorsacademy.us): redesign concept by Stratum
// Facts are from aviatorsacademy.us; photos and logo are the school's own, copied into /public/aviators-academy.
import { Montserrat, Nunito_Sans } from "next/font/google";
import s from "./styles.module.css";
import { Inquiry, Nav, Reveal } from "./client";

const display = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800", "900"], style: ["normal", "italic"], variable: "--aa-display" });
const sans = Nunito_Sans({ subsets: ["latin"], variable: "--aa-sans" });

export const metadata = {
  title: "Aviators Academy | Flight Training at Daytona Beach International Airport",
  description: "Private pilot, instrument and commercial training in Cessna 172R and 182S aircraft at Daytona Beach International Airport. Flexible scheduling, financing available.",
};

const img = (n: string) => `/aviators-academy/${n}.jpg`;
const contact = {
  phone: "(386) 388-7744",
  tel: "tel:+13863887744",
  email: "Info@aviatorsacademy.us",
  mailto: (subject: string) => `mailto:Info@aviatorsacademy.us?subject=${encodeURIComponent(subject)}`,
  address: ["1575 Aviation Center Pkwy #405", "Daytona Beach, FL"],
  maps: "https://www.google.com/maps/search/?api=1&query=1575+Aviation+Center+Pkwy+%23405+Daytona+Beach+FL",
  embed: "https://maps.google.com/maps?q=1575%20Aviation%20Center%20Pkwy%2C%20Daytona%20Beach%2C%20FL&t=m&z=13&output=embed",
  schedule: "https://flightcircle.com/associate/93712f38aa28",
  pay: "https://aviatorsacademy.us/pay",
  insurance: "http://www.avemco.com/aa66",
  loans: "https://stratus.finance/student-loan/",
  jobs: "https://www.jsfirm.com",
  instagram: "https://www.instagram.com/aviatorsacademy.pilot",
  facebook: "https://www.facebook.com/share/1BtNSJk3Mj/?mibextid=wwXIfr",
  yelp: "https://www.yelp.com/biz/aviators-academy-daytona-beach?osq=Flight+Instruction",
};

const why = [
  ["Highly rated by our students", "4.9 stars on Google from the pilots who trained here."],
  ["Personalized flight training", "A plan built around you, not a one-size-fits-all syllabus."],
  ["Experienced flight instructors", "Learn from professional flight instructors."],
  ["Well-maintained training aircraft", "High-performance Cessnas with touchscreen GPS."],
  ["Training built around your goals", "Flexible scheduling, from first lesson to career."],
];

const programs = [
  {
    code: "PPL",
    title: "Private Pilot",
    note: "Your license to fly, and the first step toward every other rating.",
    rows: [["Instruction flight", 20], ["Solo flight", 20], ["Ground school", 5]] as [string, number][],
  },
  {
    code: "IR",
    title: "Instrument Rating",
    note: "Fly by reference to instruments, through weather that grounds others.",
    rows: [["Instruction flight", 40], ["Ground school", 10]] as [string, number][],
  },
  {
    code: "CPL",
    title: "Commercial Pilot",
    note: "Get paid to fly. Includes time in a technically advanced aircraft.",
    rows: [["TAA time", 10], ["Total time required", 250]] as [string, number][],
  },
];

const steps = [
  { n: "01", title: "Book a discovery flight", body: "Call us to take the controls and see if flying is for you.", href: contact.tel, cta: "Call " + contact.phone },
  { n: "02", title: "Create your account", body: "Schedule lessons and aircraft online, any time, through Flight Circle.", href: contact.schedule, cta: "Open the schedule" },
  { n: "03", title: "Make your first deposit", body: "Start a new course in Daytona Beach or add funds to your flight account.", href: contact.pay, cta: "Go to payments" },
  { n: "04", title: "Start training", body: "Fly with your instructor on a plan built around your goals.", href: contact.mailto("New student"), cta: "Email us" },
];

const wall = [
  ["student-ramp", "On the ramp"],
  ["student-thumbs", "Ready to fly"],
  ["certificate", "Milestones worth celebrating"],
  ["student-preflight", "Preflight"],
  ["in-flight", "In the air"],
  ["student-wing", "Up close with the aircraft"],
];

export default function AviatorsAcademy() {
  return (
    <div id="top" className={`${s.root} ${display.variable} ${sans.variable}`}>
      <Nav phone={contact.phone} tel={contact.tel} />

      {/* HERO */}
      <section className={s.hero}>
        <img className={s.heroImg} src={img("c172-sunset")} alt="A Cessna 172 on the ramp under a pink sunset sky" fetchPriority="high" />
        <div className={s.heroShade} />
        <div className={s.heroInner}>
          <p className={`${s.chip} ${s.rise}`}><span className={s.stars} aria-hidden>★★★★★</span> 4.9 on Google · Daytona Beach International Airport</p>
          <h1 className={`${s.heroTitle} ${s.rise}`} style={{ animationDelay: "120ms" }}>
            Your journey to the <span>cockpit</span> starts here.
          </h1>
          <p className={`${s.heroLede} ${s.rise}`} style={{ animationDelay: "260ms" }}>
            Professional flight training in Daytona Beach, Florida. Learn from professional flight instructors, on a flexible schedule, in
            well-maintained high-performance Cessnas.
          </p>
          <div className={`${s.ctas} ${s.rise}`} style={{ animationDelay: "400ms" }}>
            <a href={contact.tel} className={`${s.btn} ${s.btnPrimary}`}>Book a Discovery Flight</a>
            <a href="#training" className={`${s.btn} ${s.btnGlass}`}>Explore Training</a>
          </div>
        </div>
        <div className={`${s.heroBar} ${s.rise}`} style={{ animationDelay: "560ms" }}>
          <div><b>KDAB</b><span>Daytona Beach Int&apos;l</span></div>
          <div><b>C172R · C182S</b><span>Training fleet</span></div>
          <div><b>Flexible</b><span>Scheduling</span></div>
          <div><b>Financing</b><span>Available</span></div>
        </div>
      </section>

      {/* EPAULETTE DIVIDER */}
      <div className={s.braid} aria-hidden><i /><i /><i /><i /></div>

      {/* WHY */}
      <section className={`${s.section} ${s.light}`}>
        <div className={`${s.wrap} ${s.why}`}>
          <Reveal className={s.whyMedia}>
            <img src={img("student-portrait")} alt="A smiling Aviators Academy student in a branded polo" loading="lazy" />
            <img src={img("lesson")} alt="A student pilot at the controls during a lesson" loading="lazy" />
            <div className={s.badge}>
              <strong>4.9</strong>
              <span>★★★★★</span>
              <small>Google reviews</small>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className={s.kicker}>Why choose Aviators Academy</p>
              <h2 className={s.h2}>Training that earns <span>its wings.</span></h2>
            </Reveal>
            <ul className={s.whyList}>
              {why.map(([t, d], i) => (
                <Reveal key={t} delay={i * 70} className={s.whyItem}>
                  <span className={s.whyNum}>{String(i + 1).padStart(2, "0")}</span>
                  <div><h3>{t}</h3><p>{d}</p></div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TRAINING */}
      <section id="training" className={`${s.section} ${s.navy}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={`${s.kicker} ${s.kickerLight}`}>Pilot training</p>
              <h2 className={`${s.h2} ${s.h2Light}`}>Three ratings. <span>One clear path.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={`${s.lede} ${s.ledeLight}`}>From your first solo to flying for hire, here&apos;s the time each program is built around. Questions? We get back to you as soon as possible.</p>
            </Reveal>
          </div>
          <div className={s.programs}>
            {programs.map((p, i) => {
              const max = Math.max(...p.rows.map((r) => r[1]));
              return (
                <Reveal key={p.code} delay={i * 100} className={s.program}>
                  <div className={s.programTop}>
                    <span className={s.code}>{p.code}</span>
                    <span className={s.stripes} aria-hidden>{Array.from({ length: i + 2 }, (_, j) => <i key={j} />)}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p className={s.programNote}>{p.note}</p>
                  <ul className={s.hours}>
                    {p.rows.map(([label, h]) => (
                      <li key={label}>
                        <div className={s.hoursRow}><span>{label}</span><b>{h} hr</b></div>
                        <div className={s.bar}><i style={{ width: `${Math.max(8, (h / max) * 100)}%` }} /></div>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              );
            })}
          </div>
          <Reveal className={s.finance}>
            <div>
              <strong>Finance available.</strong> Student loans through our partner Stratus Financial, plus pilot insurance through Avemco.
            </div>
            <div className={s.financeLinks}>
              <a href={contact.loans} target="_blank" rel="noreferrer" className={`${s.btn} ${s.btnLine}`}>Student Loans</a>
              <a href={contact.insurance} target="_blank" rel="noreferrer" className={`${s.btn} ${s.btnLine}`}>Pilot Insurance</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* AIRCRAFT */}
      <section id="aircraft" className={`${s.section} ${s.light}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>The fleet</p>
              <h2 className={s.h2}>High performance. <span>Well maintained.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>Train in a Cessna 172R and a Cessna 182S, equipped with touchscreen GPS and weather and traffic advisories.</p>
            </Reveal>
          </div>
          <div className={s.fleet}>
            {[
              { model: "Cessna 172R", tag: "Skyhawk", body: "A well-maintained Skyhawk with modern touchscreen navigation, ready for your training flights." },
              { model: "Cessna 182S", tag: "Skylane · High performance", body: "A high-performance, well-maintained Skylane with the same touchscreen GPS and advisories." },
            ].map((a, i) => (
              <Reveal key={a.model} delay={i * 100} className={s.plane}>
                <span className={s.planeTag}>{a.tag}</span>
                <h3>{a.model}</h3>
                <p>{a.body}</p>
                <ul className={s.specs}>
                  <li>Touchscreen GPS</li>
                  <li>Weather advisory</li>
                  <li>Traffic advisory</li>
                </ul>
              </Reveal>
            ))}
            <Reveal delay={200} className={s.panelShot}>
              <img src={img("panel")} alt="The instrument panel of a training aircraft" loading="lazy" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* STUDENT WALL */}
      <section className={s.wall} aria-label="Aviators Academy students">
        {wall.map(([src, cap], i) => (
          <Reveal key={src} delay={(i % 3) * 80} className={`${s.shot} ${i === 0 || i === 4 ? s.shotTall : ""}`}>
            <img src={img(src)} alt={cap} loading="lazy" />
            <span>{cap}</span>
          </Reveal>
        ))}
      </section>

      {/* GET STARTED */}
      <section id="start" className={`${s.section} ${s.light}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>Ready?</p>
              <h2 className={s.h2}>From first call <span>to first lesson.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>Four steps, all online or one phone call away.</p>
            </Reveal>
          </div>
          <ol className={s.steps}>
            {steps.map((st, i) => (
              <Reveal key={st.n} delay={i * 90} className={s.step}>
                <span className={s.stepNum}>{st.n}</span>
                <h3>{st.title}</h3>
                <p>{st.body}</p>
                <a href={st.href} target={st.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{st.cta} →</a>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={s.contact}>
        <img src={img("night-approach")} alt="" className={s.contactImg} loading="lazy" />
        <div className={s.contactShade} />
        <div className={`${s.wrap} ${s.contactInner}`}>
          <Reveal>
            <p className={`${s.kicker} ${s.kickerLight}`}>Are you ready to get started?</p>
            <h2 className={s.contactTitle}>Your seat in the <span>cockpit is waiting.</span></h2>
            <p className={`${s.lede} ${s.ledeLight}`}>Questions about our programs? Send us a message and we&apos;ll get back to you as soon as possible.</p>
            <div className={s.ctas}>
              <a href={contact.tel} className={`${s.btn} ${s.btnPrimary}`}>Call {contact.phone}</a>
              <a href={contact.schedule} target="_blank" rel="noreferrer" className={`${s.btn} ${s.btnGlass}`}>Online Schedule</a>
            </div>
            <div className={s.contactCard}>
              <div><span>Visit</span><p><a href={contact.maps} target="_blank" rel="noreferrer">{contact.address[0]}<br />{contact.address[1]}</a></p></div>
              <div><span>Hours</span><p>Mon–Fri 9:00 am – 5:00 pm<br />Sat–Sun closed</p></div>
              <div><span>Email</span><p><a href={`mailto:${contact.email}`}>{contact.email}</a></p></div>
              <div><span>Follow</span><p><a href={contact.instagram} target="_blank" rel="noreferrer">Instagram</a> · <a href={contact.facebook} target="_blank" rel="noreferrer">Facebook</a> · <a href={contact.yelp} target="_blank" rel="noreferrer">Yelp</a></p></div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Inquiry email={contact.email} />
          </Reveal>
        </div>
        <footer className={`${s.wrap} ${s.footer}`}>
          <span>© {new Date().getFullYear()} Aviators Academy · Daytona Beach, Florida · <a href={contact.jobs} target="_blank" rel="noreferrer">Aviation jobs on JSfirm</a></span>
          <span>Website concept by Stratum</span>
        </footer>
      </section>
    </div>
  );
}
