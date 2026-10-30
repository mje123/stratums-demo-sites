// Foxtrot Flight Training (foxtrotflighttraining.com): redesign concept by Stratum
// Facts are from foxtrotflighttraining.com; photos are the school's own, copied into /public/foxtrot-flight.
import { Fjalla_One, Cabin } from "next/font/google";
import s from "./styles.module.css";
import { Fleet, Nav, Reveal } from "./client";

const display = Fjalla_One({ subsets: ["latin"], weight: "400", variable: "--fx-display" });
const sans = Cabin({ subsets: ["latin"], variable: "--fx-sans" });

export const metadata = {
  title: "Foxtrot Flight Training | Flight School at Dowagiac Municipal Airport (C91), Michigan",
  description: "Discovery flights from $130, Sport through instrument training, tailwheel in a 1946 Luscombe, and a six-plane fleet at Dowagiac, Michigan.",
};

const img = (n: string) => `/foxtrot-flight/${n}.jpg`;
const contact = {
  phone: "(269) 775-3614",
  tel: "tel:+12697753614",
  email: "foxtrotflighttraining.llc@gmail.com",
  mailto: (subject: string) => `mailto:foxtrotflighttraining.llc@gmail.com?subject=${encodeURIComponent(subject)}`,
  instagram: "https://www.instagram.com/foxtrotflighttraining/",
  maps: "https://www.google.com/maps/search/?api=1&query=710+W+Prairie+Ronde+St+Dowagiac+MI+49047",
};

const discovery = [
  ["Luscombe 8A", "$130"],
  ["Cessna 150", "$140"],
  ["Cessna 172", "$160"],
  ["Piper PA-24-260B", "$190"],
];

const certs = [
  {
    name: "Sport Pilot",
    cost: "$6,500–9,500",
    body: "Fly for fun and take a friend up on good-weather days. One passenger, airplanes up to 4 seats, day VFR.",
    facts: ["Minimum age 17", "20 hrs: 15 dual, 5 solo", "40-question written, 70% to pass", "3rd class medical or US driver's license"],
    planes: "Luscombe 8A, Cessna 150, PA-28-140",
  },
  {
    name: "Private Pilot",
    cost: "$11,500–16,500",
    body: "The most common certificate: bigger aircraft, more diverse weather, as many passengers as the plane safely carries, and the door to an instrument rating.",
    facts: ["40 hrs: 30 dual, 10 solo", "60-question written, 70% to pass", "3rd class medical"],
    planes: "Cessna 150, PA-28-140",
  },
];

const faq = [
  ["What is your safety record?", "In five years of operations there have been no accidents or injuries. The rare incidents that have occurred are openly discussed and used to increase safety further."],
  ["Who maintains the aircraft?", "Foxtrot partners with Munson Aviation. With two IAs on staff, most routine maintenance is turned around within one or two days."],
  ["Can I earn a degree?", "Yes. Through partner Lake Michigan College, students who complete CFI or CFII training at Foxtrot can obtain an AS or AAS in aviation."],
  ["Do you rent aircraft?", "Absolutely, at the posted rates. The tricycle-gear aircraft (C-150, C-172, PA-28) have minimal PIC requirements; the Luscombe and PA-24 have stricter ones."],
  ["Do you accept student loans or the GI Bill?", "Not at this time, but there is an option for private financing."],
];

const team = [
  ["Matthew Harrison", "Owner, Chief Flight Instructor & Company Mechanic", "Began flight training at 14. CFII and A&P mechanic with a B.S. in Aviation Maintenance Management from Liberty University."],
  ["Isaac Rolfsen", "Certified Flight Instructor", "CFI/CFII with a B.S. in Aviation Flight Technology and a minor in Aircraft Dispatch from Lewis University (2024)."],
  ["Daniel Baker", "Certified Flight Instructor", "Former Navy P-3 Orion aircrewman who flew combat missions over the Middle East, then began flight training in the Navy flying club."],
];

export default function FoxtrotFlight() {
  return (
    <div id="top" className={`${s.root} ${display.variable} ${sans.variable}`}>
      <Nav phone={contact.phone} tel={contact.tel} />

      {/* HERO */}
      <section className={s.hero}>
        <img className={s.heroImg} src={img("hero-sunset")} alt="Foxtrot's Luscombe 8A on the ramp at sunset" fetchPriority="high" />
        <div className={s.heroShade} />
        <div className={s.heroInner}>
          <img src={img("logo").replace(".jpg", ".png")} alt="Foxtrot Flight Training logo: a fox pilot flying a biplane" className={`${s.heroBadge} ${s.rise}`} />
          <p className={`${s.eyebrow} ${s.rise}`}>Dowagiac Municipal Airport · C91 · Southwest Michigan</p>
          <h1 className={`${s.heroTitle} ${s.rise}`} style={{ animationDelay: "120ms" }}>
            Stop gazing at the sky.<br /><span>Start flying it.</span>
          </h1>
          <p className={`${s.heroLede} ${s.rise}`} style={{ animationDelay: "260ms" }}>
            Your local flight school of southwestern Michigan, founded with one goal: to teach flying to anyone who wishes to learn. For fun,
            for business, or for a career.
          </p>
          <div className={`${s.ctas} ${s.rise}`} style={{ animationDelay: "400ms" }}>
            <a href="#discovery" className={`${s.btn} ${s.btnPrimary}`}>Discovery Flights from $130</a>
            <a href="#fleet" className={`${s.btn} ${s.btnGlass}`}>Meet the Fleet</a>
          </div>
        </div>
        <div className={`${s.callbar} ${s.rise}`} style={{ animationDelay: "560ms" }} aria-label="Highlights">
          <div><b>6</b><span>aircraft, from a 1946 Luscombe to a PA-24 Comanche</span></div>
          <div><b>$70</b><span>per hour flight instruction, all ratings</span></div>
          <div><b>0</b><span>accidents or injuries in five years of operations</span></div>
          <div><b>AS / AAS</b><span>degree path through Lake Michigan College</span></div>
        </div>
      </section>

      {/* DISCOVERY */}
      <section id="discovery" className={`${s.section} ${s.cream}`}>
        <div className={`${s.wrap} ${s.disc}`}>
          <Reveal>
            <p className={s.kicker}>Discovery flights</p>
            <h2 className={s.h2}>Take the controls <span>over your own hometown.</span></h2>
            <p className={s.lede}>
              About an hour and a half, with 30–40 minutes of hands-on flying with an instructor. Thinking about becoming a pilot, or looking for the
              perfect gift for an aviation enthusiast? Start here.
            </p>
            <div className={s.ctas}>
              <a href={contact.tel} className={`${s.btn} ${s.btnPrimary}`}>Book: {contact.phone}</a>
              <a href={contact.mailto("Discovery flight")} className={`${s.btn} ${s.btnLine}`}>Email to Book</a>
            </div>
          </Reveal>
          <Reveal delay={120} className={s.ticket}>
            <p className={s.ticketHead}>Pick your airplane <small>per person</small></p>
            {discovery.map(([a, p]) => (
              <div key={a} className={s.ticketRow}><span>{a}</span><i /><b>{p}</b></div>
            ))}
            <img src={img("aerial")} alt="View over the wing of lakes and farmland in southwest Michigan" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* FLEET */}
      <section id="fleet" className={`${s.section} ${s.navy}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={`${s.kicker} ${s.kickerLight}`}>What we fly</p>
              <h2 className={`${s.h2} ${s.h2Light}`}>Six airplanes. <span>Every one has a name.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={`${s.lede} ${s.ledeLight}`}>From classic Cessna 150 trainers to a high-performance Comanche and a vintage tailwheel Luscombe. Pick a tail number to meet her.</p>
            </Reveal>
          </div>
          <Reveal><Fleet /></Reveal>
        </div>
      </section>

      {/* RATES + TRAINING */}
      <section id="rates" className={`${s.section} ${s.cream}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>Rates</p>
              <h2 className={s.h2}>Posted, verified, <span>fuel included.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>Instruction is $70/hr in the air and $60/hr on the ground, for every rating. Rental rates include fuel.</p>
            </Reveal>
          </div>
          <Reveal className={s.rates}>
            {[["Luscombe 8A", "N77937", 100], ["Cessna 150", "N704WF · N8221F", 115], ["Cessna 172", "N888H", 165], ["Piper PA-28-140", "N696LB", 165], ["Piper PA-24-260B", "N46P", 225]].map(([a, t, r]) => (
              <div key={String(t)} className={s.rate}><span>{a}</span><small>{t}</small><strong>${r}<em>/hr</em></strong></div>
            ))}
            <div className={`${s.rate} ${s.rateAlt}`}><span>Instruction</span><small>All ratings</small><strong>$70<em> flight</em> · $60<em> ground</em></strong></div>
          </Reveal>
          <p className={s.fine}>Lessons at airports other than Dowagiac (C91) add $15/hr to instruction, plus aircraft time to and from. Last price change April 5, 2026.</p>

          <div id="training" className={s.certs}>
            {certs.map((c, i) => (
              <Reveal key={c.name} delay={i * 120} className={s.cert}>
                <div className={s.certTop}><h3>{c.name}</h3><strong>{c.cost}<small>estimated at Foxtrot</small></strong></div>
                <p>{c.body}</p>
                <ul>{c.facts.map((f) => <li key={f}>{f}</li>)}</ul>
                <p className={s.certPlanes}>Trains in: {c.planes}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TAILWHEEL */}
      <section className={s.tail}>
        <img src={img("luscombe-grass")} alt="The Luscombe 8A on grass" className={s.tailImg} loading="lazy" />
        <div className={s.tailShade} />
        <div className={`${s.wrap} ${s.tailInner}`}>
          <Reveal className={s.tailCard}>
            <p className={`${s.kicker} ${s.kickerLight}`}>Tailwheel · grassroots aviation</p>
            <h2 className={`${s.h2} ${s.h2Light}`}>Fly a 1946 Luscombe. <span>On skis in winter.</span></h2>
            <p className={`${s.lede} ${s.ledeLight}`}>Handling comparable to many warbirds of its day, light and simple enough to teach you to truly fly the plane.</p>
            <div className={s.tailOpts}>
              <div><b>$325</b><span>Tailwheel intro flight: ~1.5 hrs ground + 1.5 hrs flight</span></div>
              <div><b>5–10 hrs</b><span>Typical tailwheel endorsement, billed at posted rates</span></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TEAM + FAQ */}
      <section className={`${s.section} ${s.cream}`}>
        <div className={`${s.wrap} ${s.split}`}>
          <Reveal>
            <p className={s.kicker}>Your instructors</p>
            <h2 className={s.h2}>Pilots, mechanics, <span>teachers.</span></h2>
            <img src={img("team")} alt="The Foxtrot Flight Training team on the ramp with two aircraft" className={s.teamImg} loading="lazy" />
            <div className={s.team}>
              {team.map(([n, r, b]) => (
                <div key={n} className={s.member}><h3>{n}</h3><p className={s.role}>{r}</p><p>{b}</p></div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className={s.kicker}>Good questions</p>
            {faq.map(([q, a], i) => (
              <details key={q} className={s.faq} open={i === 0}>
                <summary>{q}<span aria-hidden /></summary>
                <p>{a}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={s.contact}>
        <img src={img("over-trees")} alt="" className={s.contactImg} loading="lazy" />
        <div className={s.contactShade} />
        <div className={`${s.wrap} ${s.contactInner}`}>
          <Reveal>
            <h2 className={s.contactTitle}>Have you stood gazing into the sky? <span>Let&apos;s go up.</span></h2>
            <p className={`${s.lede} ${s.ledeLight}`}>Most general inquiries get a same-day reply, and they&apos;ll answer any aviation question you have.</p>
            <div className={s.ctas}>
              <a href={contact.tel} className={`${s.btn} ${s.btnPrimary}`}>Call {contact.phone}</a>
              <a href={contact.mailto("Flight training inquiry")} className={`${s.btn} ${s.btnGlass}`}>Email Us</a>
            </div>
          </Reveal>
          <Reveal delay={120} className={s.contactCard}>
            <div><span>Find us</span><p><a href={contact.maps} target="_blank" rel="noreferrer">Dowagiac Municipal Airport (C91)<br />710 W Prairie Ronde St, Dowagiac, MI 49047</a></p></div>
            <div><span>Call</span><p><a href={contact.tel}>{contact.phone}</a></p></div>
            <div><span>Email</span><p><a href={`mailto:${contact.email}`}>{contact.email}</a></p></div>
            <div><span>Follow</span><p><a href={contact.instagram} target="_blank" rel="noreferrer">Instagram</a></p></div>
          </Reveal>
        </div>
        <footer className={`${s.wrap} ${s.footer}`}>
          <span>© {new Date().getFullYear()} Foxtrot Flight Training LLC · Dowagiac, Michigan</span>
          <span>Website concept by Stratum</span>
        </footer>
      </section>
    </div>
  );
}
