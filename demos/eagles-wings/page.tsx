// Eagles' Wings Flight Training (eagleswings.net): redesign concept by Stratum
// Facts are from eagleswings.net; photos are David Hersman's own, copied into /public/eagles-wings.
import { Cinzel, Lato } from "next/font/google";
import s from "./styles.module.css";
import { Estimator, Inquiry, Nav, Reveal, Wordmark } from "./client";

const display = Cinzel({ subsets: ["latin"], weight: ["500", "700", "800"], variable: "--ew-display" });
const sans = Lato({ subsets: ["latin"], weight: ["400", "700", "900"], style: ["normal", "italic"], variable: "--ew-sans" });

export const metadata = {
  title: "Eagles' Wings Flight Training | Learn to Fly in the Greenbrier Valley, West Virginia",
  description: "Flight instruction with David Hersman, CFI, at Greenbrier Valley Airport (LWB) since 1984. $140/hr dual in a Cessna 150, including airplane, fuel, insurance and instruction.",
};

const img = (n: string) => `/eagles-wings/${n}.jpg`;
const contact = {
  phone: "304-445-6046",
  tel: "tel:+13044456046",
  sms: "sms:+13044456046",
  email: "David@EaglesWings.net",
  youtube: "https://www.youtube.com/channel/UCw6jXwtiXV1YwK4MOnRJ-gQ",
  address: ["1458 Henson Road", "Clintonville, West Virginia 24931"],
};

const rates = [
  { label: "Dual instruction in my airplane", price: "$140", unit: "/hr", note: "Airplane, fuel, insurance and instruction, all in." },
  { label: "Solo flight or airplane rental", price: "$115", unit: "/hr", note: "Plus the insurance surcharge or annual fee." },
  { label: "Instruction in your airplane", price: "$80", unit: "/session min.", note: "Bring two reasonable-quality headsets." },
  { label: "Ground instruction", price: "$40", unit: "/hr", note: "One-on-one time for the knowledge you need." },
  { label: "Biennial flight review", price: "$80", unit: "+ airplane", note: "Stay current and legal." },
];

const extras = [
  ["Insurance surcharge", "$15 per lesson for your first three lessons, then $400 a year with no surcharge"],
  ["Books or videos", "$50–400"],
  ["Third class medical", "About $100–125"],
  ["FAA knowledge test", "$175"],
  ["Examiner fee, practical test", "$600"],
];

const solos = [
  { img: "gabriel", name: "Gabriel Bishop", date: "October 25, 2025", note: "Soloed less than a month after turning 16. A Greenbrier East student and Civil Air Patrol cadet." },
  { img: "halee", name: "Halee Parks", date: "April 10, 2024", note: "Soloed the Cessna 150 at 19, and aspires to fly helicopters." },
  { img: "logan", name: "Logan Halderman", date: "May 10, 2023", note: "Now enjoys the scenery of southeastern West Virginia and nearby Virginia." },
  { img: "caldwell", name: "Stephen Caldwell", date: "November 24, 2021", note: "Has since passed his Private Pilot practical test." },
];

const recentNames = [
  "Gabriel Bishop", "Elijah Keller", "Chris Pankey", "Halee Parks", "Logan Halderman", "Daniel Phillips", "Caleb Douglas VanBuren",
  "Stephen Caldwell", "Joshua Craig", "Joelle Heilemann", "Patrick Henry Tilley", "Bob Neff", "Justin Douglas", "Jackson Croy",
  "Kalab Hughart", "Emma Grant", "Malachi Kratz", "Damani Mitchell", "Rudy Swatzyna", "Danielle Price", "Patrick Pastrana",
];

const steps = [
  ["Book your first lesson", "Text, call or email David. That's really all you need to start."],
  ["Bring proof of citizenship", "A birth certificate plus driver's license, or a passport, per TSA rules for training toward a license."],
  ["Get your student certificate", "Register on the FAA's IACRA site; David verifies and signs, and it arrives by email in about a week."],
  ["Get a third class medical", "From an Aviation Medical Examiner, or BasicMed from your own doctor in some cases."],
  ["Pass the pre-solo test", "A locally administered knowledge test on your airplane and the airport environment."],
  ["Solo!", "Your first flight alone, as early as 16. Then build solo time and cross-country skills toward your license at 17."],
];

const history = [
  ["1935", "Ruth Tolley Gwinn solos at Pence Springs at 16. She would become David's primary instructor."],
  ["1976", "David's first flights, in Tate Mauzy's 1946 Piper J-3 Cub from an 800-foot farm strip at Williamsburg."],
  ["1977", "First solo at Greenbrier Valley Airport on March 19, in Ruth Gwinn's 1959 Cessna 150."],
  ["1984", "Commercial and flight instructor certificates. Eagles' Wings begins teaching the Greenbrier Valley."],
  ["1986", "Cessna 150 N22648 is based at LWB, where it's still training pilots today."],
  ["2021", "David flies his 7,000th hour, with his son Kent, a retired Army pilot he taught to fly."],
  ["2025", "At 76, David earns his Airframe & Powerplant mechanic certificate. Student #110 solos in October."],
];

export default function EaglesWings() {
  return (
    <div id="top" className={`${s.root} ${display.variable} ${sans.variable}`}>
      <Nav phone={contact.phone} tel={contact.tel} />

      {/* HERO */}
      <section className={s.hero}>
        <img className={s.heroImg} src={img("sweet-springs")} alt="Sweet Springs Valley and Peters Mountain, West Virginia, from the air" fetchPriority="high" />
        <div className={s.heroShade} />
        <svg className={s.ridges} viewBox="0 0 1440 220" preserveAspectRatio="none" aria-hidden>
          <path className={s.ridgeBack} d="M0 120L120 92 240 118 380 70 520 110 660 80 800 116 960 64 1100 104 1240 76 1440 110V220H0Z" />
          <path className={s.ridgeFront} d="M0 170L160 140 300 168 460 128 620 162 780 136 940 170 1100 140 1260 166 1440 142V220H0Z" />
        </svg>
        <div className={s.heroInner}>
          <p className={`${s.eyebrow} ${s.rise}`}>Greenbrier Valley Airport (LWB) · Lewisburg, West Virginia</p>
          <h1 className={`${s.heroTitle} ${s.rise}`} style={{ animationDelay: "120ms" }}>
            Get your dreams<br /><span>off the ground.</span>
          </h1>
          <p className={`${s.heroLede} ${s.rise}`} style={{ animationDelay: "260ms" }}>
            Learn to fly in the beautiful Greenbrier Valley of Southern West Virginia with David Hersman, a flight instructor who
            soloed at this same airport in 1977.
          </p>
          <div className={`${s.ctas} ${s.rise}`} style={{ animationDelay: "400ms" }}>
            <a href={contact.sms} className={`${s.btn} ${s.btnGold}`}>Text David to Get Started</a>
            <a href="#first-lesson" className={`${s.btn} ${s.btnGlass}`}>Your First Lesson</a>
          </div>
        </div>
        <div className={`${s.stats} ${s.rise}`} style={{ animationDelay: "560ms" }}>
          {[["1984", "teaching in the Greenbrier Valley"], ["110", "students soloed since 1985"], ["6,600+", "hours of instruction given"], ["$140", "per hour, airplane & fuel included"]].map(([n, l]) => (
            <div key={n} className={s.stat}><strong>{n}</strong><span>{l}</span></div>
          ))}
        </div>
      </section>

      {/* WELCOME */}
      <section className={`${s.section} ${s.cream}`}>
        <div className={`${s.wrap} ${s.welcome}`}>
          <Reveal className={s.welcomeMedia}>
            <img src={img("taylorcraft")} alt="David Hersman, CFI, with a 1941 Taylorcraft at Hinton-Alderson Airport, Pence Springs" loading="lazy" />
            <img src={img("burr")} alt="Charles Burr, age 90, with David Hersman on his birthday flight" loading="lazy" />
          </Reveal>
          <Reveal delay={120}>
            <p className={s.kicker}>Welcome to the sky</p>
            <h2 className={s.h2}>Flight instruction is a good job, <em>if you like to see other people&apos;s dreams come true.</em></h2>
            <p className={s.lede}>
              David has trained young people who soloed on their 16th birthday and older folks fulfilling a lifelong dream, and once flew a
              90-year-old Korea veteran over the valley where he&apos;d run a dairy farm for 40 years. Since 1984 the goal has been the same:
              thorough, quality flight training at a reasonable price.
            </p>
            <div className={s.creds}>
              <span>Certified Flight Instructor</span>
              <span>A&amp;P Mechanic</span>
              <span>Part 107 Drone Pilot</span>
              <span>7,700+ flight hours</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FIRST LESSON */}
      <section id="first-lesson" className={`${s.section} ${s.navy}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={`${s.kicker} ${s.kickerLight}`}>Your first lesson</p>
              <h2 className={`${s.h2} ${s.h2Light}`}>Lewisburg to Beckley, <em>over the New River Gorge.</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={`${s.lede} ${s.ledeLight}`}>
                You go through the start, taxi, takeoff, straight-and-level and landing sequence twice, and see how quickly an airplane
                gets from one place to another. You may take an introductory flight without proof of citizenship.
              </p>
            </Reveal>
          </div>
          <div className={s.route}>
            <Reveal className={s.routeMap}>
              <svg viewBox="0 0 600 260" aria-label="Illustration of the first-lesson route from Lewisburg to Beckley and back" role="img">
                <path className={s.routeRidge} d="M0 210C80 190 140 220 220 196S380 170 440 196 560 214 600 200" />
                <path className={s.routeGorge} d="M250 40C270 90 300 120 290 170S320 230 330 260" />
                <text x="306" y="74" className={s.routeLabelSmall}>New River Gorge</text>
                <path className={s.routePath} d="M490 130C400 60 220 60 110 120" />
                <path className={s.routePathBack} d="M110 120C220 170 400 170 490 130" />
                <g className={s.routePlane}>
                  <path transform="rotate(90) translate(-12 -12)" d="M12 2c.8 0 1.4.7 1.4 1.6V9l7.6 4.4v2l-7.6-2.2v4.6l2.2 1.6V21L12 20l-3.6 1v-1.6l2.2-1.6v-4.6L3 15.4v-2L10.6 9V3.6C10.6 2.7 11.2 2 12 2z" />
                  <animateMotion dur="9s" repeatCount="indefinite" rotate="auto" path="M490 130C400 60 220 60 110 120C220 170 400 170 490 130" />
                </g>
                <circle cx="490" cy="130" r="9" className={s.routeDot} />
                <circle cx="110" cy="120" r="9" className={s.routeDot} />
                <text x="490" y="162" className={s.routeLabel} textAnchor="middle">LWB</text>
                <text x="490" y="180" className={s.routeLabelSmall} textAnchor="middle">Lewisburg</text>
                <text x="110" y="152" className={s.routeLabel} textAnchor="middle">Beckley</text>
              </svg>
            </Reveal>
            <Reveal delay={120} className={s.lessonCard}>
              <span className={s.lessonTag}>First lesson</span>
              <p className={s.lessonPrice}>$187.50<small>–</small>$200</p>
              <ul>
                <li><b>1.3–1.4 hours</b> of flying</li>
                <li><b>Logbook</b> included ($10)</li>
                <li><b>Insurance surcharge</b> included ($15)</li>
                <li>Need a shorter lesson? <b>Just ask.</b></li>
              </ul>
              <a href={contact.sms} className={`${s.btn} ${s.btnGold}`}>Text to Schedule</a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* RATES */}
      <section id="rates" className={`${s.section} ${s.cream}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>Rates</p>
              <h2 className={s.h2}>About as low a price <em>as you&apos;ll find these days.</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>Simple hourly rates, and new students can take three lessons before the annual insurance fee. Most lessons run 1.2 to 1.3 hours, so you have time to digest each new experience.</p>
            </Reveal>
          </div>
          <div className={s.rates}>
            <div className={s.rateBoard}>
              {rates.map((r, i) => (
                <Reveal key={r.label} delay={i * 60} className={`${s.rate} ${i === 0 ? s.rateFeature : ""}`}>
                  <div>
                    <p className={s.rateLabel}>{r.label}</p>
                    <p className={s.rateNote}>{r.note}</p>
                  </div>
                  <p className={s.ratePrice}>{r.price}<small>{r.unit}</small></p>
                </Reveal>
              ))}
              <Reveal className={s.extras}>
                <p className={s.extrasTitle}>Other expenses along the way</p>
                <dl>{extras.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <Estimator />
              <p className={s.tip}><b>David&apos;s tip:</b> plan on about 30 hours dual and 30 hours solo from the start. Meaningful solo practice reduces the dual instruction you need, and saves you money.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* AIRPLANE */}
      <section id="airplane" className={`${s.section} ${s.navy}`}>
        <div className={`${s.wrap} ${s.plane}`}>
          <Reveal className={s.planeMedia}>
            <img className={s.planeMain} src={img("n22648")} alt="David Hersman with Cessna 150 N22648 after its new numbers, June 2019" loading="lazy" />
            <img src={img("moonrise")} alt="Cessna 150 N22648 under a rising moon at Greenbrier Valley Airport" loading="lazy" />
            <img src={img("dhh-wv77-2008")} alt="David Hersman with N22648 at Hinton-Alderson Airport on April 10, 2008" loading="lazy" />
          </Reveal>
          <Reveal delay={120}>
            <p className={`${s.kicker} ${s.kickerLight}`}>The airplane</p>
            <h2 className={`${s.h2} ${s.h2Light}`}>Cessna 150 <em>N22648.</em></h2>
            <p className={`${s.lede} ${s.ledeLight}`}>
              Based at Greenbrier Valley Airport since 1986 and used for so many hours of instruction that it has undoubtedly made more
              landings at LWB than any other airplane. David and Crystal stripped and repainted the whole fuselage themselves.
            </p>
            <div className={s.tail}>
              <div><small>Registration</small><b>N22648</b></div>
              <div><small>Type</small><b>Cessna 150</b></div>
              <div><small>Home base</small><b>LWB since 1986</b></div>
            </div>
            <p className={s.planeQuote}>
              David taught his son Kent to fly in this same Cessna 150. Kent went on to fly helicopters and fixed-wing aircraft through a
              20-year career as an Army pilot.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PATH TO SOLO */}
      <section className={`${s.section} ${s.cream}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>Getting started</p>
              <h2 className={s.h2}>Simpler than <em>you think.</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>From first call to first solo. The FAA minimum for a Private Pilot license is 40 hours (20 dual, 10 solo); most Eagles&apos; Wings students average about 60.</p>
            </Reveal>
          </div>
          <div className={s.pathWrap}>
            <ol className={s.path}>
              {steps.map(([t, d], i) => (
                <Reveal key={t} delay={i * 70} className={s.step}>
                  <span className={s.stepNum}>{i + 1}</span>
                  <div><h3>{t}</h3><p>{d}</p></div>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={120} className={s.preflight}>
              <img src={img("amanda-fuel")} alt="Student Amanda Baker checking a fuel sample during preflight" loading="lazy" />
              <img src={img("amanda-checklist")} alt="Amanda Baker using the starting engine checklist" loading="lazy" />
              <img src={img("amanda-fair")} alt="Amanda Baker flying over the West Virginia State Fair at Lewisburg" loading="lazy" />
              <p>Preflight, checklist, and the joy of flying: trainee Amanda Baker demonstrates on the Getting Started page.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GROUND SCHOOL */}
      <section id="ground-school" className={s.ground}>
        <img src={img("night-approach")} alt="" className={s.groundImg} loading="lazy" />
        <div className={s.groundShade} />
        <div className={`${s.wrap} ${s.groundInner}`}>
          <Reveal>
            <p className={`${s.kicker} ${s.kickerLight}`}>Private Pilot Ground School</p>
            <h2 className={`${s.h2} ${s.h2Light}`}>Know. Consider. <em>Do.</em></h2>
            <p className={`${s.lede} ${s.ledeLight}`}>
              Flying is partly knowledge, partly skill and partly judgment. A twelve-session ground school each spring, usually mid-March
              to early June, prepares you for your pre-solo test, the FAA knowledge test, your checkride, and a lifetime of learning.
            </p>
          </Reveal>
          <Reveal delay={120} className={s.groundCard}>
            <div><small>When</small><b>Thursdays, 6–8:30 PM</b></div>
            <div><small>Sessions</small><b>12 each spring</b></div>
            <div><small>Cost</small><b>$20 per class + book</b></div>
            <div><small>Former students</small><b>Free once licensed</b></div>
            <p>2.5 hours of certified instruction per class, with decades of real-world experience. Snacks included.</p>
          </Reveal>
        </div>
      </section>

      {/* SOLOS */}
      <section className={`${s.section} ${s.cream}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>Solo archives</p>
              <h2 className={s.h2}>110 first solos <em>and counting.</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>Every student David has soloed since February 1985 is listed in the Solo Archives, all at Greenbrier Valley or Hinton-Alderson. You&apos;ll probably find some of your friends there.</p>
            </Reveal>
          </div>
          <div className={s.solos}>
            {solos.map((x, i) => (
              <Reveal key={x.name} delay={i * 80} className={s.solo}>
                <img src={img(x.img)} alt={`${x.name} after first solo flights`} loading="lazy" />
                <div>
                  <span className={s.soloDate}>{x.date}</span>
                  <h3>{x.name}</h3>
                  <p>{x.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className={s.names} aria-label="Recent solo students">
          <div className={s.namesTrack}>
            {[...recentNames, ...recentNames].map((n, i) => <span key={i} aria-hidden={i >= recentNames.length}>{n}</span>)}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className={`${s.section} ${s.navy}`}>
        <div className={`${s.wrap} ${s.story}`}>
          <div>
            <Reveal>
              <p className={`${s.kicker} ${s.kickerLight}`}>Grass roots heritage</p>
              <h2 className={`${s.h2} ${s.h2Light}`}>Taught by the pilots <em>who taught the valley.</em></h2>
              <p className={`${s.lede} ${s.ledeLight}`}>
                David learned from Ruth Tolley Gwinn, who soloed in 1935, instructed military pilots by 19, and managed Hinton-Alderson
                Airport. The name Eagles&apos; Wings carries over from an aviation magazine David launched in the early 1980s.
              </p>
            </Reveal>
            <ol className={s.timeline}>
              {history.map(([y, t], i) => (
                <Reveal key={y} delay={i * 60} className={s.event}>
                  <span className={s.year}>{y}</span>
                  <p>{t}</p>
                </Reveal>
              ))}
            </ol>
          </div>
          <Reveal delay={120} className={s.storyMedia}>
            <img src={img("ruth-1976")} alt="Ruth Tolley Gwinn with her 1959 Cessna 150, Pence Springs, October 1976" loading="lazy" />
            <img src={img("cub-1976")} alt="David Hersman with a Piper Cub, 1976" loading="lazy" />
            <img src={img("cub-final")} alt="View from a Piper Cub on final approach to Mauzy's strip" loading="lazy" />
            <blockquote>
              &ldquo;Oh that I had wings like a dove, for then would I fly away and be at rest.&rdquo;
              <cite>Psalm 55:6</cite>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* AIRPORTS */}
      <section className={`${s.section} ${s.cream} ${s.airports}`}>
        <div className={s.wrap}>
          <div className={s.airportGrid}>
            <Reveal className={s.airport}>
              <span className={s.ident}>LWB</span>
              <h3>Greenbrier Valley Airport</h3>
              <p>Lewisburg, West Virginia. Home base, where most lessons and nearly every recent solo have taken place.</p>
            </Reveal>
            <Reveal delay={100} className={s.airport}>
              <span className={s.ident}>WV77</span>
              <h3>Hinton-Alderson Airport</h3>
              <p>Pence Springs, along the Greenbrier River. Grass-roots aviation, and one of David&apos;s favorite places in the whole world.</p>
            </Reveal>
            <Reveal delay={200} className={`${s.airport} ${s.airportPhoto}`}>
              <img src={img("wv77-planes")} alt="Several airplanes on the grass at Pence Springs, September 2016" loading="lazy" />
            </Reveal>
          </div>
          <Reveal className={s.notice}>
            <b>Winter schedule:</b> David and Crystal serve as educational missionaries in Papua New Guinea during the coldest months,
            when flying slows down anyway. Their next trip begins November 23, 2026, for about two months. A great time to get ahead on
            ground knowledge.
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={s.contact}>
        <img src={img("moonrise")} alt="" className={s.contactImg} loading="lazy" />
        <div className={s.contactShade} />
        <div className={`${s.wrap} ${s.contactInner}`}>
          <Reveal>
            <p className={`${s.kicker} ${s.kickerLight}`}>This could be the year your dreams take flight</p>
            <h2 className={s.contactTitle}>Let&apos;s go <em>flying.</em></h2>
            <p className={`${s.lede} ${s.ledeLight}`}>Call, text or email David to set up your first lesson. You could be flying an airplane in the very near future.</p>
            <div className={s.ctas}>
              <a href={contact.sms} className={`${s.btn} ${s.btnGold}`}>Text {contact.phone}</a>
              <a href={contact.tel} className={`${s.btn} ${s.btnGlass}`}>Call</a>
            </div>
            <div className={s.contactCard}>
              <div><span>Instructor</span><p>David H. Hersman, CFI</p></div>
              <div><span>Email</span><p><a href={`mailto:${contact.email}`}>{contact.email}</a></p></div>
              <div><span>Mail</span><p>{contact.address[0]}<br />{contact.address[1]}</p></div>
              <div><span>Watch</span><p><a href={contact.youtube} target="_blank" rel="noreferrer">YouTube channel</a></p></div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Inquiry email={contact.email} />
          </Reveal>
        </div>
        <footer className={`${s.wrap} ${s.footer}`}>
          <Wordmark small />
          <span>© {new Date().getFullYear()} Eagles&apos; Wings Flight Training · Greenbrier Valley, West Virginia</span>
          <span>Website concept by Stratum</span>
        </footer>
      </section>
    </div>
  );
}
