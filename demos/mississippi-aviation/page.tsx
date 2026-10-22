// Mississippi Aviation Academy (mississippiaviationacademy.com): redesign concept by Stratum
// Facts are from mississippiaviationacademy.com; photos and logo are the school's own, copied into /public/mississippi-aviation.
import { Roboto_Slab, Albert_Sans } from "next/font/google";
import s from "./styles.module.css";
import { Inquiry, Nav, RateBoard, Reveal } from "./client";

const display = Roboto_Slab({ subsets: ["latin"], weight: ["500", "700", "800"], variable: "--ms-display" });
const sans = Albert_Sans({ subsets: ["latin"], variable: "--ms-sans" });

export const metadata = {
  title: "Mississippi Aviation Academy | Flight School in Starkville, MS",
  description: "Flight instruction, aircraft rental and maintenance in Starkville, Mississippi. $75/hr discovery flights, block rates from $140/hr, and 10% off for military and first responders.",
};

const img = (n: string) => `/mississippi-aviation/${n}.jpg`;
const contact = {
  phone: "(205) 422-5721",
  tel: "tel:+12054225721",
  email: "flight.training@starkvillecirclesaviation.com",
  mailto: (subject: string) => `mailto:flight.training@starkvillecirclesaviation.com?subject=${encodeURIComponent(subject)}`,
  facebook: "https://www.facebook.com/circleSaviation",
  instagram: "https://www.instagram.com/circlesaviation/",
  maps: "https://www.google.com/maps/search/?api=1&query=320+Airport+Road+Starkville+MS+39759",
  embed: "https://maps.google.com/maps?q=320%20Airport%20Road%2C%20Starkville%2C%20MS%2039759&t=m&z=14&output=embed",
};

const discovery = [
  ["Meet your CFI", "An FAA certified flight instructor walks you through the flight controls and aerodynamics."],
  ["Taxi out", "Taxi to the runway and get ready for your first assisted takeoff."],
  ["Take off", "With your instructor beside you, you're flying."],
  ["See Starkville from above", "Soar over the Mississippi State University campus and Davis Wade Stadium."],
  ["Your first landing", "Enjoy your first cockpit landing, with expert assistance."],
  ["Log it", "Your instructor signs your logbook: the start of your aviation journey."],
];

const programs = [
  {
    code: "PPL", title: "Private Pilot",
    lead: "Where every pilot starts.",
    reqs: ["At least 17 years old", "Read, speak and understand English", "Current third-class medical certificate", "40+ hours of flight time, including training and solo", "Knowledge test and practical test"],
  },
  {
    code: "IR", title: "Instrument Pilot",
    lead: "Fly by reference to instruments.",
    reqs: ["Private pilot certificate (or applying concurrently)", "50 hours cross-country PIC", "40 hours actual or simulated instrument time", "15 hours of instrument training from an instructor", "An IFR cross-country of 250 nm with three kinds of approaches"],
  },
  {
    code: "CPL", title: "Commercial Pilot",
    lead: "Get paid to fly.",
    reqs: ["At least 18 years old", "Third-class medical certificate", "250 hours of flight time", "20 hours of training, including 10 instrument and 10 complex", "Knowledge test and practical test"],
  },
  {
    code: "CFI", title: "Certified Flight Instructor",
    lead: "Teach the next generation.",
    reqs: ["Commercial certificate with instrument rating", "Spin endorsement", "CFI and Fundamentals of Instruction written exams", "CFI practical exam"],
  },
  {
    code: "CFII", title: "Instrument Instructor",
    lead: "Teach instrument flying.",
    reqs: ["Commercial certificate with instrument rating", "CFII written exam", "CFII practical exam"],
  },
  {
    code: "INTL", title: "International Flight Students",
    lead: "Train in Starkville from abroad.",
    reqs: ["At least 17 years old", "Read, speak and understand English", "Current third-class medical certificate", "40+ hours of flight time", "Knowledge test and practical test"],
  },
];

const instructors = [
  { img: "bobby", name: "Bobby Sorrels", role: "Owner · Instructor · Chief Mechanic, A&P IA", bio: "Founded the academy in 2017. Years of flight experience commanding large-scale aircraft for commercial airlines and private corporations." },
  { img: "zac", name: "Zac McCarroll", role: "Flight Instructor", bio: "Started in gliders in Florida, flew the West Coast on weekends as a robotics engineer, then taught at ATP Flight School in Long Beach before coming to North Mississippi." },
  { img: "carter", name: "Carter Biggers", role: "Certified Flight Instructor", bio: "A Mississippi native who earned his Private, Instrument, Commercial and CFI ratings right here at Mississippi Aviation Academy." },
  { img: "sam", name: "Samuel D. Fisher", role: "Flight Instructor", bio: "A third-generation flight instructor from a military aviation family, with a calm, focused approach built on safety and precision." },
];

export default function MississippiAviation() {
  return (
    <div id="top" className={`${s.root} ${display.variable} ${sans.variable}`}>
      <Nav phone={contact.phone} tel={contact.tel} />

      {/* HERO */}
      <section className={s.hero}>
        <img className={s.heroImg} src={img("champ-sunset")} alt="A yellow taildragger on the ramp at sunset" fetchPriority="high" />
        <div className={s.heroShade} />
        <div className={s.heroInner}>
          <p className={`${s.eyebrow} ${s.rise}`}>Starkville, Mississippi · Since 2017</p>
          <h1 className={`${s.heroTitle} ${s.rise}`} style={{ animationDelay: "120ms" }}>
            Fly high<br /><span>with us.</span>
          </h1>
          <p className={`${s.heroLede} ${s.rise}`} style={{ animationDelay: "260ms" }}>
            Top-notch flight instruction in a personal, professional environment, at some of the most affordable rates in the Southeast.
          </p>
          <div className={`${s.ctas} ${s.rise}`} style={{ animationDelay: "400ms" }}>
            <a href="#discovery" className={`${s.btn} ${s.btnGold}`}>Discovery Flight · $75/hr</a>
            <a href="#rates" className={`${s.btn} ${s.btnGlass}`}>See Rental Rates</a>
          </div>
        </div>
        <div className={`${s.ticker} ${s.rise}`} style={{ animationDelay: "560ms" }}>
          {[["Open", "7 days · 6am–9pm"], ["Block rates", "from $140/hr"], ["Discount", "10% military & first responders"], ["Maintenance", "In-house A&P IA"]].map(([k, v]) => (
            <div key={k}><small>{k}</small><b>{v}</b></div>
          ))}
        </div>
      </section>

      {/* DISCOVERY */}
      <section id="discovery" className={`${s.section} ${s.cream}`}>
        <div className={`${s.wrap} ${s.disc}`}>
          <Reveal className={s.discMedia}>
            <img src={img("campus-aerial")} alt="Aerial view from under a yellow wing" loading="lazy" />
            <div className={s.discPrice}><small>Discovery flight</small><b>$75</b><span>an hour</span></div>
          </Reveal>
          <div>
            <Reveal>
              <p className={s.kicker}>Your first flight</p>
              <h2 className={s.h2}>Take the controls <span>over Starkville.</span></h2>
              <p className={s.lede}>Discover the thrill of soaring through the skies. Our experienced instructors guide you every step of the way, starting with this one.</p>
            </Reveal>
            <ol className={s.steps}>
              {discovery.map(([t, d], i) => (
                <Reveal key={t} delay={i * 70} className={s.step}>
                  <span className={s.stepNum}>{i + 1}</span>
                  <div><h3>{t}</h3><p>{d}</p></div>
                </Reveal>
              ))}
            </ol>
            <Reveal><a href={contact.tel} className={`${s.btn} ${s.btnMaroon}`}>Call to Book · {contact.phone}</a></Reveal>
          </div>
        </div>
      </section>

      {/* RATES + FLEET */}
      <section id="rates" className={`${s.section} ${s.maroon}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={`${s.kicker} ${s.kickerLight}`}>Rates &amp; fleet</p>
              <h2 className={`${s.h2} ${s.h2Light}`}>Affordable for everyone. <span>Thanks to those who serve.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={`${s.lede} ${s.ledeLight}`}>
                Rental rates designed to be accessible, with a 10% discount for military personnel, law enforcement and first responders. Every aircraft
                is kept in optimal flying condition by our own maintenance team.
              </p>
            </Reveal>
          </div>
          <div className={s.ratesGrid}>
            <Reveal><RateBoard /></Reveal>
            <Reveal delay={120} className={s.fleetMosaic}>
              <img src={img("n32la")} alt="A Cessna from the academy fleet on the ramp" loading="lazy" />
              <img src={img("champ-hangar")} alt="A yellow taildragger outside the hangar" loading="lazy" />
              <img src={img("panel")} alt="A Cessna instrument panel" loading="lazy" />
              <img src={img("cessna-dusk")} alt="A Cessna on the ramp at dusk" loading="lazy" />
            </Reveal>
          </div>
          <p className={s.fine}>Rates apply to rental only; instructor fees, fuel and maintenance are additional. Fees are subject to change with fuel prices.</p>
        </div>
      </section>

      {/* TRAINING */}
      <section id="training" className={`${s.section} ${s.cream}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>Start your training</p>
              <h2 className={s.h2}>From first lesson <span>to teaching others.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>Our instructors lead you every step of the way. Tap a program to see what it takes.</p>
            </Reveal>
          </div>
          <div className={s.programs}>
            {programs.map((p, i) => (
              <Reveal key={p.code} delay={(i % 3) * 80}>
                <details className={s.program} open={i === 0}>
                  <summary>
                    <span className={s.code}>{p.code}</span>
                    <span className={s.progTitle}><b>{p.title}</b><small>{p.lead}</small></span>
                    <span className={s.plus} aria-hidden />
                  </summary>
                  <ul>{p.reqs.map((r) => <li key={r}>{r}</li>)}</ul>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO STRIP */}
      <section className={s.strip} aria-label="Photos from the academy">
        {["student-cockpit", "champ-flight", "reflection", "champ-tail"].map((src, i) => (
          <Reveal key={src} delay={i * 90} className={s.shot}><img src={img(src)} alt="" loading="lazy" /></Reveal>
        ))}
      </section>

      {/* INSTRUCTORS */}
      <section id="instructors" className={`${s.section} ${s.paper}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>Professional flight instructors</p>
              <h2 className={s.h2}>Meet the team <span>beside you.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>A cadre of experienced, passionate flight educators committed to exceptional instruction.</p>
            </Reveal>
          </div>
          <div className={s.team}>
            {instructors.map((m, i) => (
              <Reveal key={m.name} delay={i * 80} className={s.member}>
                <div className={s.memberImg}><img src={img(m.img)} alt={m.name} loading="lazy" /></div>
                <div className={s.memberBody}>
                  <h3>{m.name}</h3>
                  <p className={s.memberRole}>{m.role}</p>
                  <p>{m.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STORY + MAINTENANCE */}
      <section className={`${s.section} ${s.cream}`}>
        <div className={`${s.wrap} ${s.story}`}>
          <Reveal className={s.storyMedia}>
            <img src={img("circle-s-tail")} alt="The Circle S Aviation logo on a Cessna tail" loading="lazy" />
          </Reveal>
          <div>
            <Reveal>
              <p className={s.kicker}>Our story</p>
              <h2 className={s.h2}>Circle S Aviation, <span>all grown up.</span></h2>
              <p className={s.lede}>
                Bobby Sorrels founded the school in 2017 as Circle S Aviation, with a vision to offer the highest quality flight instruction at the most
                affordable rates in the Southeast. It has grown exponentially since, expanding the fleet and team while keeping a personal,
                professional teaching atmosphere.
              </p>
            </Reveal>
            <Reveal delay={100} className={s.mx}>
              <h3>Our own maintenance shop</h3>
              <p>Safety is the utmost priority. Led by Chief Mechanic Bobby Sorrels, A&amp;P IA, our mechanics address any mechanical concern, whatever its scale, so every aircraft is ready for safe, efficient flights.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={`${s.section} ${s.maroon} ${s.quotes}`}>
        <div className={s.wrap}>
          <Reveal><p className={`${s.kicker} ${s.kickerLight}`}>What our clients say</p></Reveal>
          <div className={s.quoteGrid}>
            <Reveal className={s.quote}>
              <blockquote>&ldquo;Having recently accomplished my first solo flight, I can confidently say that Mississippi Aviation Academy has proven to be an exceptional business to partner with throughout my flight training journey.&rdquo;</blockquote>
              <cite>Peter Querciagrossa · Student pilot</cite>
            </Reveal>
            <Reveal delay={120} className={s.quote}>
              <blockquote>&ldquo;From the moment I contacted Mississippi Aviation Academy regarding the damage to my airplane, I was immediately impressed by the level of attentiveness and genuine concern shown by their staff.&rdquo;</blockquote>
              <cite>Kenny Coats · Maintenance customer</cite>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={s.contact}>
        <img src={img("pilots-hangar")} alt="" className={s.contactImg} loading="lazy" />
        <div className={s.contactShade} />
        <div className={`${s.wrap} ${s.contactInner}`}>
          <Reveal>
            <p className={`${s.kicker} ${s.kickerLight}`}>Find us</p>
            <h2 className={s.contactTitle}>Have questions? <span>Talk with an instructor.</span></h2>
            <div className={s.ctas}>
              <a href={contact.tel} className={`${s.btn} ${s.btnGold}`}>Call {contact.phone}</a>
              <a href={contact.mailto("Flight training question")} className={`${s.btn} ${s.btnGlass}`}>Email Us</a>
            </div>
            <div className={s.contactCard}>
              <div><span>Visit</span><p><a href={contact.maps} target="_blank" rel="noreferrer">320 Airport Road<br />Starkville, MS 39759</a></p></div>
              <div><span>Hours</span><p>Monday–Sunday<br />6am–9pm</p></div>
              <div><span>Email</span><p><a href={`mailto:${contact.email}`}>{contact.email}</a></p></div>
              <div><span>Follow</span><p><a href={contact.facebook} target="_blank" rel="noreferrer">Facebook</a> · <a href={contact.instagram} target="_blank" rel="noreferrer">Instagram</a></p></div>
            </div>
            <div className={s.map}>
              <iframe src={contact.embed} title="Map to Mississippi Aviation Academy, 320 Airport Road, Starkville" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Inquiry email={contact.email} />
          </Reveal>
        </div>
        <footer className={`${s.wrap} ${s.footer}`}>
          <span>© {new Date().getFullYear()} Mississippi Aviation Academy · Starkville, Mississippi</span>
          <span>Website concept by Stratum</span>
        </footer>
      </section>
    </div>
  );
}
