// Dakota Flight Center (dakotaflight.com): redesign concept by Stratum
// Facts are from dakotaflight.com; photos, team headshots and logo are the school's own, copied into /public/dakota-flight.
import { Zilla_Slab, Karla } from "next/font/google";
import s from "./styles.module.css";
import { Budget, Inquiry, Nav, Reveal } from "./client";

const display = Zilla_Slab({ subsets: ["latin"], weight: ["500", "600", "700"], style: ["normal", "italic"], variable: "--dk-display" });
const sans = Karla({ subsets: ["latin"], variable: "--dk-sans" });

export const metadata = {
  title: "Dakota Flight Center | Flight Training in Mitchell, South Dakota",
  description: "Independent FAA Part 61 flight school at the historic George McGovern Terminal, Mitchell Municipal Airport. Private, instrument, commercial, multi-engine, tailwheel and instructor ratings.",
};

const img = (n: string) => `/dakota-flight/${n}.jpg`;
const contact = {
  phone: "(605) 299-4359",
  tel: "tel:+16052994359",
  email: "partners@dakotaflight.com",
  mailto: (subject: string) => `mailto:partners@dakotaflight.com?subject=${encodeURIComponent(subject)}`,
  youtube: "https://www.youtube.com/@dakotaflightcenter829",
  pay: "http://pay.dakotaflight.com/",
  schedule: "http://www.flightcircle.com/",
  maps: "https://www.google.com/maps/search/?api=1&query=5971+Airport+Road+Mitchell+SD+57301",
  embed: "https://maps.google.com/maps?q=5971%20Airport%20Road%2C%20Mitchell%2C%20SD%2057301&t=m&z=14&output=embed",
};

const programs = [
  { title: "Private Pilot", body: "The first step, whether you want to travel with family, fly for business or start an aviation career.", tag: "Start here" },
  { title: "Instrument Rating", body: "One of the most challenging, rewarding and fun projects in aviation. Fly through weather that grounds VFR pilots.", tag: "Next step" },
  { title: "Commercial Pilot", body: "Fly for compensation or hire, and build the time toward a career as an airline transport pilot.", tag: "Career" },
  { title: "Multi-Engine", body: "Advanced capability and performance, valued by charter operators and corporate flight departments.", tag: "Add-on" },
  { title: "Tailwheel", body: "Superior stick-and-rudder skills, and the nostalgia of how flight began. 16 to solo and earn the endorsement.", tag: "Endorsement" },
  { title: "CFI · CFII · MEI", body: "Instructor ratings for a job market that's strong for flight instructors, locally and across the nation.", tag: "Teach" },
];

const fleet = [
  { img: "warrior", name: "Piper Cherokee Warrior", role: "Primary trainer", rate: 160, seats: 4, speed: 120, note: "IFR / VFR" },
  { img: "c182rg", name: "Cessna 182RG", role: "High-performance & complex", rate: 250, seats: 4, speed: 175, note: "IFR / VFR" },
  { img: "cougar", name: "Gulfstream GA-7 Cougar", role: "Multi-engine trainer", rate: 350, seats: 4, speed: 160, note: "Twin" },
  { img: "j3-hangar", name: "J3 Piper Cub", role: "Light sport & tailwheel", rate: 120, seats: 2, speed: 60, note: "Day VFR" },
  { img: "legend-cub", name: "American Legend Cub", role: "Light sport & tailwheel", rate: 130, seats: 2, speed: 70, note: "VFR" },
  { img: "helicopter", name: "Helicopter", role: "Rental for rated pilots", rate: 350, seats: 2, speed: 70, note: "Training not currently offered" },
];

const history = [
  ["1937", "Mitchell's airport opens in November."],
  ["1943", "Rebuilt by the U.S. Army Air Force as a B-17 and B-24 bomber training field. The 700th Bomb Squadron trains here before heading to England."],
  ["1951", "Airline service begins. Braniff, North Central and Republic all fly from Mitchell over the next three decades."],
  ["1991", "Passenger flights end at the George McGovern Terminal. Cargo follows in 1996."],
  ["2016", "Dakota Flight Center is incorporated in December."],
  ["2017", "Terminal renovations wrap up and classes take off."],
];

const team = [
  { img: "scott", name: "Scott Dorwart", role: "Partner, Instructor", ratings: "CFI · CFII · MEI · SES · SEL · MEL · CG" },
  { img: "levi", name: "Levi Koerner", role: "Partner, Instructor", ratings: "CFI · CFII · MEI · AGI · IGI · SES · SEL · MEL · MES · CG" },
  { img: "renee", name: "Renee Koerner", role: "Partner, Office & Facilities Manager", ratings: "" },
  { img: "brandon", name: "Brandon Muhs", role: "Contract Flight Instructor", ratings: "CFI · CFII · IGI · MEI · SEL · MEL · A&P · Drone Pilot" },
  { img: "ben", name: "Ben Hobbie", role: "Contract Flight Instructor", ratings: "CFI · CFII · SEL · MEL" },
  { img: "koen", name: "Koen Riemenschneider", role: "Contract Flight Instructor", ratings: "CFI · CFII · MEI · CSEL · CMEL" },
];

export default function DakotaFlight() {
  return (
    <div id="top" className={`${s.root} ${display.variable} ${sans.variable}`}>
      <Nav phone={contact.phone} tel={contact.tel} />

      {/* HERO */}
      <section className={s.hero}>
        <img className={s.heroImg} src={img("cub-terminal")} alt="A yellow J3 Piper Cub parked in front of the George McGovern Terminal" fetchPriority="high" />
        <div className={s.heroShade} />
        <div className={s.heroInner}>
          <p className={`${s.eyebrow} ${s.rise}`}>Mitchell Municipal Airport · KMHE · South Dakota</p>
          <h1 className={`${s.heroTitle} ${s.rise}`} style={{ animationDelay: "120ms" }}>
            Learn to fly<br /><em>with us.</em>
          </h1>
          <p className={`${s.heroLede} ${s.rise}`} style={{ animationDelay: "260ms" }}>
            An independent FAA Part 61 flight school in a historic airline terminal. One-on-one training that fits your schedule, your learning
            style and your budget, mornings, evenings or weekends.
          </p>
          <div className={`${s.ctas} ${s.rise}`} style={{ animationDelay: "400ms" }}>
            <a href="#contact" className={`${s.btn} ${s.btnPrimary}`}>Book a Discovery Flight</a>
            <a href="#training" className={`${s.btn} ${s.btnGlass}`}>Explore Training</a>
          </div>
        </div>
        <div className={`${s.badges} ${s.rise}`} style={{ animationDelay: "560ms" }}>
          {[["Est.", "2016"], ["FAA", "Part 61"], ["Facility", "Open 24/7"], ["Lessons", "Evenings & weekends"]].map(([k, v]) => (
            <div key={k} className={s.badge}><small>{k}</small><b>{v}</b></div>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className={`${s.section} ${s.cream}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>Why Dakota Flight Center</p>
              <h2 className={s.h2}>Small school. <em>Big sky.</em> Your schedule.</h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>We work one-on-one and in small groups, so training fits around work and school instead of the other way around.</p>
            </Reveal>
          </div>
          <div className={s.whyGrid}>
            {[
              ["Flexible training", "Morning, evening and weekend lessons that eliminate conflicts with work and school."],
              ["Own a plane?", "It may be possible to train in your own aircraft, saving you money on rental costs."],
              ["Precision maintenance", "Aircraft maintained by experienced A&P mechanics on the field, with 24/7 access and fueling."],
              ["24-hour facility", "A lounge and study area open to pilots and students around the clock."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 80} className={s.why}>
                <span className={s.whyNum}>0{i + 1}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING */}
      <section id="training" className={`${s.section} ${s.navy}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={`${s.kicker} ${s.kickerLight}`}>Flight training</p>
              <h2 className={`${s.h2} ${s.h2Light}`}>Every milestone, <em>every step of the way.</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={`${s.lede} ${s.ledeLight}`}>From your first discovery flight to teaching others to fly, earning each certificate is a huge milestone. We want to be there for all of them.</p>
            </Reveal>
          </div>
          <div className={s.programs}>
            {programs.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 80} className={s.program}>
                <span className={s.programTag}>{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </Reveal>
            ))}
          </div>
          <div className={s.budgetWrap}>
            <Reveal>
              <p className={`${s.kicker} ${s.kickerLight}`}>Tuition &amp; budget</p>
              <h3 className={s.budgetTitle}>No surprises. <em>Here&apos;s what it costs.</em></h3>
              <p className={`${s.lede} ${s.ledeLight}`}>Real, itemized budgets, so you can plan your training with confidence before your first lesson.</p>
              <img src={img("night-panel")} alt="The instrument panel lit up during a night flight" className={s.budgetImg} loading="lazy" />
            </Reveal>
            <Reveal delay={120}>
              <Budget />
            </Reveal>
          </div>
        </div>
      </section>

      {/* FLEET */}
      <section id="fleet" className={`${s.section} ${s.cream}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>Our aircraft</p>
              <h2 className={s.h2}>From Cubs <em>to a twin.</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>A fleet for every rating, from tailwheel nostalgia to multi-engine performance. Hourly rates include fuel.</p>
            </Reveal>
          </div>
          <div className={s.fleet}>
            {fleet.map((a, i) => (
              <Reveal key={a.name} delay={(i % 3) * 80} className={s.plane}>
                <div className={s.planeImg}>
                  <img src={img(a.img)} alt={a.name} loading="lazy" />
                  <span className={s.rate}>${a.rate}<small>/hr</small></span>
                </div>
                <div className={s.planeBody}>
                  <span className={s.planeRole}>{a.role}</span>
                  <h3>{a.name}</h3>
                  <div className={s.specs}>
                    <span><b>{a.seats}</b> seats</span>
                    <span><b>{a.speed}</b> mph</span>
                    <span>{a.note}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className={s.fine}>All rates subject to change. Rates include fuel.</p>
        </div>
      </section>

      {/* GALLERY */}
      <section className={s.gallery} aria-label="Photos from the cockpit">
        {[
          ["sunset-nose", "Sunset over the cowling"],
          ["above-clouds", "Above the clouds"],
          ["j3-sunset", "A Cub at golden hour"],
          ["wing-view", "The view from the left seat"],
        ].map(([src, cap], i) => (
          <Reveal key={src} delay={i * 90} className={s.shot}>
            <img src={img(src)} alt={cap} loading="lazy" />
            <span>{cap}</span>
          </Reveal>
        ))}
      </section>

      {/* STORY */}
      <section id="story" className={`${s.section} ${s.paper}`}>
        <div className={`${s.wrap} ${s.story}`}>
          <Reveal className={s.storyMedia}>
            <img src={img("terminal")} alt="The George McGovern Terminal at Mitchell Municipal Airport" loading="lazy" />
            <img src={img("warrior-terminal")} alt="A Dakota Flight Center Piper Warrior on the ramp" loading="lazy" />
          </Reveal>
          <div>
            <Reveal>
              <p className={s.kicker}>Our story</p>
              <h2 className={s.h2}>A WWII airfield. <em>A terminal reborn.</em></h2>
              <p className={s.lede}>
                Dakota Flight Center operates from the George McGovern Terminal, Mitchell&apos;s passenger terminal until 1991. After years as equipment
                storage, it was renovated in 2017 into classrooms, a lounge and a study area for a new generation of pilots.
              </p>
            </Reveal>
            <ol className={s.timeline}>
              {history.map(([y, t], i) => (
                <Reveal key={y} delay={i * 70} className={s.event}>
                  <span className={s.year}>{y}</span>
                  <p>{t}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className={`${s.section} ${s.cream}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>Our team</p>
              <h2 className={s.h2}>Meet your <em>instructors.</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>Owner-operated and instructor-led, with ratings that cover everything from seaplanes to multi-engine instruction.</p>
            </Reveal>
          </div>
          <div className={s.team}>
            {team.map((m, i) => (
              <Reveal key={m.name} delay={(i % 3) * 80} className={s.member}>
                <img src={img(m.img)} alt={m.name} loading="lazy" />
                <div>
                  <h3>{m.name}</h3>
                  <p className={s.memberRole}>{m.role}</p>
                  {m.ratings && <p className={s.ratings}>{m.ratings}</p>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={s.contact}>
        <img src={img("runway-sign")} alt="" className={s.contactImg} loading="lazy" />
        <div className={s.contactShade} />
        <div className={`${s.wrap} ${s.contactInner}`}>
          <Reveal>
            <p className={`${s.kicker} ${s.kickerLight}`}>Take your first discovery flight</p>
            <h2 className={s.contactTitle}>We&apos;d be honored to <em>have you fly with us.</em></h2>
            <p className={`${s.lede} ${s.ledeLight}`}>Contact us to schedule a discovery flight and start your aviation training. Mornings, evenings and weekends.</p>
            <div className={s.ctas}>
              <a href={contact.tel} className={`${s.btn} ${s.btnPrimary}`}>Call {contact.phone}</a>
              <a href={contact.mailto("Discovery flight")} className={`${s.btn} ${s.btnGlass}`}>Email Us</a>
            </div>
            <div className={s.contactCard}>
              <div><span>Visit</span><p><a href={contact.maps} target="_blank" rel="noreferrer">George McGovern Terminal<br />5971 Airport Road, Mitchell, SD 57301</a></p></div>
              <div><span>Email</span><p><a href={`mailto:${contact.email}`}>{contact.email}</a></p></div>
              <div><span>Students</span><p><a href={contact.schedule} target="_blank" rel="noreferrer">Flight Circle</a> · <a href={contact.pay} target="_blank" rel="noreferrer">Pay my bill</a> · <a href={contact.youtube} target="_blank" rel="noreferrer">YouTube</a></p></div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Inquiry email={contact.email} />
          </Reveal>
        </div>
        <footer className={`${s.wrap} ${s.footer}`}>
          <span>© {new Date().getFullYear()} Dakota Flight Center · Mitchell, South Dakota</span>
          <span>Website concept by Stratum</span>
        </footer>
      </section>
    </div>
  );
}
