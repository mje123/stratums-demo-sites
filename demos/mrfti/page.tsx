// Middletown Regional Flight Training Institute (mrfti.com): redesign concept by Stratum
// Facts are from mrfti.com; photos are the school's own, copied into /public/mrfti.
import { Saira_Condensed, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import s from "./styles.module.css";
import { Nav, RateBoard, Reveal } from "./client";

const display = Saira_Condensed({ subsets: ["latin"], weight: ["500", "700", "800"], variable: "--mr-display" });
const sans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--mr-sans" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["500"], variable: "--mr-mono" });

export const metadata = {
  title: "MRFTI | Flight Training & Airplane Rental at Middletown Regional Airport (KMWO)",
  description: "Flight instruction, Cessna 172 rentals and a flying club serving Greater Cincinnati and Dayton. Discovery flights from $124.",
};

const img = (n: string) => `/mrfti/${n}.jpg`;
const contact = {
  phone: "(513) 217-4636",
  tel: "tel:+15132174636",
  schedule: "https://middletown.kal-soft.com/",
  facebook: "http://www.facebook.com/mrfti",
  instagram: "https://www.instagram.com/MRFTI_LLC/",
  maps: "https://www.google.com/maps/search/?api=1&query=Middletown+Regional+Airport+KMWO+1707+Run+Way+Middletown+OH",
  embed: "https://maps.google.com/maps?q=1707%20Run%20Way%2C%20Middletown%2C%20OH%2045042&t=m&z=14&output=embed",
};

const fleet = [
  { tail: "N3355E", model: "1978 C172N Skyhawk", hp: 160, fuel: 40, type: "172" },
  { tail: "N65673", model: "1982 C172P Skyhawk", hp: 160, fuel: 50, type: "172" },
  { tail: "N51580", model: "1980 C172P Skyhawk", hp: 160, fuel: 40, type: "172" },
  { tail: "N40SP", model: "1980 C172P Skyhawk", hp: 160, fuel: 40, type: "172" },
  { tail: "N65626", model: "1982 C172P Skyhawk", hp: 160, fuel: 40, type: "172" },
  { tail: "N5285V", model: "1980 C172RG Cutlass", hp: 180, fuel: 62, type: "RG" },
  { tail: "N107TS", model: "1980 C172RG Cutlass", hp: 180, fuel: 62, type: "RG" },
];

const career = [
  { code: "A", title: "Private Pilot Certificate", items: ["Airplane single-engine land rating"] },
  { code: "B", title: "Aeronautical Experience Building", items: ["Pilot-in-command cross-country flying", "Complex airplane endorsement"] },
  { code: "C", title: "Instrument Airplane Rating", items: [] },
  { code: "D", title: "Commercial Pilot Certificate", items: ["Airplane multi-engine land rating"] },
];

const crew = [
  ["Tim Epperhart", "Chief Instructor & Mechanic (I.A.)"],
  ["Frances Mead", "Assistant Chief Instructor"],
  ["Terry Smith", "Check Instructor & Mechanic"],
  ["Chris Arany", "Mechanic (I.A.)"],
  ["Michelle Smith", "Office Manager & Commercial Pilot"],
  ["Nick Thwaits", "Flight Instructor"],
  ["Ayden Szymanowski", "Line Technician & Student Pilot"],
  ["Dakota Spahn", "Line Technician"],
];

const scholarships = [
  "AOPA", "Air Line Pilots Association (ALPA)", "Experimental Aircraft Association (EAA)",
  "Betty Stagg-Turner Memorial Scholarship", "I Hart Flying Foundation", "The Ninety-Nines", "Women In Aviation International",
];

export default function MRFTI() {
  return (
    <div id="top" className={`${s.root} ${display.variable} ${sans.variable} ${mono.variable}`}>
      <Nav phone={contact.phone} tel={contact.tel} />

      {/* HERO */}
      <section className={s.hero}>
        <img className={s.heroImg} src={img("sunset-cockpit")} alt="A pilot silhouetted in the cockpit against a sunset" fetchPriority="high" />
        <div className={s.heroShade} />
        <div className={s.heroInner}>
          <div>
            <p className={`${s.eyebrow} ${s.rise}`}>Greater Cincinnati &amp; Dayton</p>
            <h1 className={`${s.heroTitle} ${s.rise}`} style={{ animationDelay: "120ms" }}>
              Prepare<br />for <span>takeoff.</span>
            </h1>
            <p className={`${s.heroLede} ${s.rise}`} style={{ animationDelay: "260ms" }}>
              Flight instruction and airplane rentals at Middletown Regional Airport, from instructors with real-world flying experience
              who work with you one-on-one.
            </p>
            <div className={`${s.ctas} ${s.rise}`} style={{ animationDelay: "400ms" }}>
              <a href="#discovery" className={`${s.btn} ${s.btnPrimary}`}>Discovery Flights from $124</a>
              <a href={contact.tel} className={`${s.btn} ${s.btnGlass}`}>Call {contact.phone}</a>
            </div>
          </div>
          <div className={`${s.strip} ${s.rise}`} style={{ animationDelay: "600ms" }} aria-label="School details">
            <div className={s.stripCell}><small>Field</small><b>KMWO</b></div>
            <div className={s.stripCell}><small>Hangar</small><b>1701</b></div>
            <div className={s.stripCell}><small>Est.</small><b>2010</b></div>
            <div className={`${s.stripCell} ${s.stripWide}`}><small>Fleet</small><b>5× C172 · 2× C172RG</b></div>
            <div className={`${s.stripCell} ${s.stripWide}`}><small>Rentals</small><b>7 days a week</b></div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className={`${s.section} ${s.paper}`}>
        <div className={s.wrap}>
          <div className={s.why}>
            <Reveal>
              <p className={s.kicker}>Personal &amp; experience-based training</p>
              <h2 className={s.h2}>Instructors, <span>not time-builders.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>
                Our instructors have real-world flying experience to pass on. Whether you&apos;re new to flying and seeking a private pilot certificate,
                adding a new rating, or have career aspirations, we work with you one-on-one to achieve your goals.
              </p>
            </Reveal>
          </div>
          <div className={s.pillars}>
            {[
              { img: "dual-lesson", tag: "01 · Training", title: "Private to professional", body: "From your first lesson through instrument, commercial and instructor ratings.", href: "#career" },
              { img: "fleet-3", tag: "02 · Rentals & club", title: "Get airborne today", body: "Cessna 172 and 172RG aircraft for personal use. Fly often? Join the flying club.", href: "#fleet" },
              { img: "panel", tag: "03 · Career", title: "A real plan to the airlines", body: "An on-staff career advisor helps students and parents plan a goal-oriented path with back-up options.", href: "#career" },
            ].map((p, i) => (
              <Reveal key={p.title} delay={i * 100} className={s.pillar}>
                <a href={p.href}>
                  <img src={img(p.img)} alt="" loading="lazy" />
                  <div>
                    <span>{p.tag}</span>
                    <h3>{p.title}</h3>
                    <p>{p.body}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DISCOVERY */}
      <section id="discovery" className={`${s.section} ${s.navy}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={`${s.kicker} ${s.kickerLight}`}>Discovery flights</p>
              <h2 className={`${s.h2} ${s.h2Light}`}>Take the controls. <span>See if flying is for you.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={`${s.lede} ${s.ledeLight}`}>
                Every package includes a certificate of training with instructor endorsements, and the training time can be applied toward your private
                pilot certificate.
              </p>
            </Reveal>
          </div>
          <div className={s.tickets}>
            <Reveal className={s.ticket}>
              <div className={s.ticketTop}>
                <span className={s.ticketName}>Basic Discovery Flight</span>
                <span className={s.ticketPrice}>$124</span>
              </div>
              <div className={s.ticketSplit}><div><small>Ground</small><b>30 min</b></div><div><small>Flight</small><b>30 min</b></div><div><small>Aircraft</small><b>C172</b></div></div>
              <p>Learn to inspect the aircraft before flight, then experience ground operations, takeoff, climbs, turns, descents and landing.</p>
              <a href={contact.tel} className={`${s.btn} ${s.btnLine}`}>Call to Schedule</a>
            </Reveal>
            <Reveal delay={120} className={`${s.ticket} ${s.ticketHot}`}>
              <div className={s.ticketTop}>
                <span className={s.ticketName}>Ultimate Discovery Flight</span>
                <span className={s.ticketPrice}>$479 <s>$595</s></span>
              </div>
              <div className={s.ticketSplit}><div><small>Ground</small><b>2.5 hrs</b></div><div><small>Flight</small><b>2.5 hrs</b></div><div><small>Lessons</small><b>2 + 3</b></div></div>
              <p>An in-depth look at the program: aviation, licensing, airplane systems and basic aerodynamics, plus slow flight, stalls and landings in the air.</p>
              <a href={contact.tel} className={`${s.btn} ${s.btnPrimary}`}>Call to Schedule</a>
            </Reveal>
          </div>
          <Reveal className={s.qualify}>
            <strong>To qualify:</strong>
            <span>No existing pilot&apos;s license</span>
            <span>At least 15 years old</span>
            <span>Live within 1.5 hours of Middletown Airport</span>
          </Reveal>
        </div>
      </section>

      {/* RATES */}
      <section id="rates" className={`${s.section} ${s.paper}`}>
        <div className={`${s.wrap} ${s.rates}`}>
          <Reveal>
            <p className={s.kicker}>Rates &amp; financing</p>
            <h2 className={s.h2}>Honest prices, <span>posted in public.</span></h2>
            <p className={s.lede}>
              The primary costs are aircraft and instruction. Pay as you go, lock in block rates, or join the club. Prefer a monthly payment? We work with
              Flight Training Finance: once approved, you just sign and fly.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <RateBoard />
          </Reveal>
        </div>
      </section>

      {/* FLEET */}
      <section id="fleet" className={`${s.section} ${s.chart}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>Our fleet</p>
              <h2 className={s.h2}>Seven Cessnas. <span>Ready seven days a week.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>Rentals are available seven days a week, and every aircraft is available for non-dual rental once you meet the model-specific requirements.</p>
            </Reveal>
          </div>
          <div className={s.gallery}>
            {["fleet-1", "fleet-5", "fleet-4", "fleet-7"].map((f, i) => (
              <Reveal key={f} delay={i * 80} className={s.shot}><img src={img(f)} alt="A Cessna from the MRFTI fleet on the ramp" loading="lazy" /></Reveal>
            ))}
          </div>
          <div className={s.tails}>
            {fleet.map((a, i) => (
              <Reveal key={a.tail} delay={(i % 4) * 60} className={`${s.tail} ${a.type === "RG" ? s.tailRg : ""}`}>
                <span className={s.tailNo}>{a.tail}</span>
                <span className={s.tailModel}>{a.model}</span>
                <span className={s.tailSpec}>{a.hp} HP · {a.fuel} gal{a.type === "RG" ? " · Retractable" : ""}</span>
              </Reveal>
            ))}
            <Reveal delay={180} className={`${s.tail} ${s.tailNote}`}>
              <span className={s.tailModel}>ADS-B Out in every aircraft. Six of seven also carry a Garmin GNS 430W and a Stratus i3 ADS-B receiver.</span>
            </Reveal>
          </div>
          <div className={s.reqs}>
            <Reveal className={s.req}>
              <p className={s.reqTitle}>Rent the Cessna 172</p>
              <ul><li>Student pilot with MRFTI CFI endorsement, <em>or</em></li><li>Private pilot (ASEL)</li></ul>
            </Reveal>
            <Reveal delay={100} className={s.req}>
              <p className={s.reqTitle}>Rent the Cessna 172RG</p>
              <ul><li>Private pilot with complex endorsement</li><li>100 hours total time</li><li>10 hours complex (3 in C172RGs), or 5 hours of C172RG dual</li></ul>
            </Reveal>
            <Reveal delay={200} className={`${s.req} ${s.reqAlt}`}>
              <p className={s.reqTitle}>Flying with one of our CFIs?</p>
              <p>No renter requirements when a CFI is on board.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CAREER */}
      <section id="career" className={`${s.section} ${s.navy}`}>
        <img src={img("clouds")} alt="" className={s.careerBg} loading="lazy" />
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={`${s.kicker} ${s.kickerLight}`}>Career pilots</p>
              <h2 className={`${s.h2} ${s.h2Light}`}>Zero time <span>to the airlines.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={`${s.lede} ${s.ledeLight}`}>
                Skip the turn-key &ldquo;pilot mill.&rdquo; Get real-world, focused training from instructors who care more about the quality of time in your
                logbook than the quantity of time in theirs.
              </p>
            </Reveal>
          </div>
          <ol className={s.route}>
            {career.map((c, i) => (
              <Reveal key={c.code} delay={i * 90} className={s.leg}>
                <span className={s.wpt}>{c.code}</span>
                <h3>{c.title}</h3>
                {c.items.map((it) => <p key={it}>{it}</p>)}
              </Reveal>
            ))}
            <Reveal delay={360} className={`${s.leg} ${s.legSplit}`}>
              <span className={s.wpt}>E</span>
              <h3>Build commercial experience</h3>
              <div className={s.options}>
                <div><b>Option A · Flight instructor</b><p>CFI single &amp; multi-engine, plus instrument instructor. Typically 20 to 40 flight hours, then build time teaching.</p></div>
                <div><b>Option B · Commercial work</b><p>Entry-level jobs in survey flying, banner-towing, sightseeing rides or flying skydivers.</p></div>
              </div>
            </Reveal>
            <Reveal delay={450} className={`${s.leg} ${s.legEnd}`}>
              <span className={s.wpt}>ATP</span>
              <h3>Airline Transport Pilot</h3>
              <p>1,500 hours qualifies you for the ATP certificate and regional airline applications.</p>
            </Reveal>
          </ol>
          <Reveal className={s.careerFoot}>
            <span><b>300+</b> flight hours to complete the training path</span>
            <a href={contact.tel} className={`${s.btn} ${s.btnPrimary}`}>Book a Career Consultation</a>
          </Reveal>
        </div>
      </section>

      {/* STORY */}
      <section className={`${s.section} ${s.paper}`}>
        <div className={`${s.wrap} ${s.story}`}>
          <Reveal className={s.storyMedia}>
            <img src={img("overhead")} alt="A Cessna passing overhead" loading="lazy" />
            <span className={s.say}>Say it like the locals: <b>&ldquo;Merf-tee&rdquo;</b></span>
          </Reveal>
          <Reveal delay={120}>
            <p className={s.kicker}>Our story</p>
            <h2 className={s.h2}>A hobby in 1994. <span>A family school today.</span></h2>
            <p className={s.lede}>
              Founder Tim Epperhart started flying for fun in Cincinnati and never dreamed it would become a career. He rose from part-time instructor
              to Chief Instructor, and in February 2010 bought the school&apos;s assets at Middletown Regional Airport. His two sons joined him, one a CFI
              and the other an A&amp;P/I.A.
            </p>
            <blockquote className={s.quote}>
              &ldquo;I have been given a number of breaks and lots of help from my friends over the years to get me here. I haven&apos;t forgotten it. This is
              my chance to pay some of that forward.&rdquo;
              <cite>Tim Epperhart, founder</cite>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* CREW */}
      <section className={`${s.section} ${s.chart} ${s.crewSection}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>Meet the crew</p>
              <h2 className={s.h2}>Instructors, pilots <span>&amp; mechanics.</span></h2>
            </Reveal>
            <Reveal delay={120} className={s.faces}>
              {["crew-1", "crew-2", "crew-3", "crew-5", "crew-6", "crew-8", "crew-9"].map((c) => <img key={c} src={img(c)} alt="" loading="lazy" />)}
            </Reveal>
          </div>
          <div className={s.crew}>
            {crew.map(([n, r], i) => (
              <Reveal key={n} delay={(i % 4) * 60} className={s.member}>
                <strong>{n}</strong>
                <span>{r}</span>
              </Reveal>
            ))}
          </div>
          <Reveal className={s.scholar}>
            <p className={s.reqTitle}>Scholarship opportunities</p>
            <div>{scholarships.map((x) => <span key={x}>{x}</span>)}</div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={s.contact}>
        <img src={img("sky")} alt="" className={s.contactImg} loading="lazy" />
        <div className={s.contactShade} />
        <div className={`${s.wrap} ${s.contactInner}`}>
          <Reveal>
            <p className={`${s.kicker} ${s.kickerLight}`}>Your adventure starts here</p>
            <h2 className={s.contactTitle}>Call to schedule a flight <span>or a consultation.</span></h2>
            <div className={s.ctas}>
              <a href={contact.tel} className={`${s.btn} ${s.btnPrimary}`}>Call {contact.phone}</a>
              <a href={contact.schedule} target="_blank" rel="noreferrer" className={`${s.btn} ${s.btnGlass}`}>Online Schedule</a>
            </div>
            <div className={s.contactCard}>
              <div><span>Location</span><p><a href={contact.maps} target="_blank" rel="noreferrer">Middletown Regional Airport (KMWO)<br />Office in Hangar 1701</a></p></div>
              <div><span>Mail</span><p>1707 Run Way<br />Middletown, Ohio 45042</p></div>
              <div><span>Phone</span><p><a href={contact.tel}>{contact.phone}</a></p></div>
              <div><span>Follow</span><p><a href={contact.facebook} target="_blank" rel="noreferrer">Facebook</a> · <a href={contact.instagram} target="_blank" rel="noreferrer">Instagram</a></p></div>
            </div>
          </Reveal>
          <Reveal delay={120} className={s.map}>
            <iframe src={contact.embed} title="Map to MRFTI at Middletown Regional Airport" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </Reveal>
        </div>
        <footer className={`${s.wrap} ${s.footer}`}>
          <span>© {new Date().getFullYear()} Middletown Regional Flight Training Institute · Middletown, Ohio</span>
          <span>Website concept by Stratum</span>
        </footer>
      </section>
    </div>
  );
}
