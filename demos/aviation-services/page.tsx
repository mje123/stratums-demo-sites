// Aviation Services Company / Aviation Services LLC (aviationservicescompany.com): redesign concept by Stratum
// Facts are from aviationservicescompany.com; photos are the school's own, copied into /public/aviation-services.
import { Rajdhani, Inter_Tight } from "next/font/google";
import s from "./styles.module.css";
import { CourseLedger, Inquiry, Nav, Reveal, Wordmark } from "./client";

const display = Rajdhani({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--as-display" });
const sans = Inter_Tight({ subsets: ["latin"], variable: "--as-sans" });

export const metadata = {
  title: "Aviation Services Company | Flight Training at Wittman Regional Airport, Oshkosh, WI",
  description: "Pay-as-you-go, one-on-one flight instruction from first flight to flight instructor at Oshkosh's Wittman Regional Airport. Serving the area for 50+ years.",
};

const img = (n: string) => `/aviation-services/${n}.jpg`;
const contact = {
  phone: "920.410.FLY1",
  tel: "tel:+19204103591",
  email: "sdondavis@gmail.com",
  mailto: (subject: string) => `mailto:sdondavis@gmail.com?subject=${encodeURIComponent(subject)}`,
  blog: "http://www.sdondavis.blogspot.com/",
  address: ["540 Aviation Rd", "Oshkosh, WI 54901"],
  maps: "https://www.google.com/maps/search/?api=1&query=540+Aviation+Rd+Oshkosh+WI+54901",
  embed: "https://maps.google.com/maps?q=540%20Aviation%20Rd%2C%20Oshkosh%2C%20WI%2054901&t=m&z=14&output=embed",
};

const promises = [
  ["Pay as you go", "No requirement to prepay any course. You pay for training as you receive it."],
  ["Only lessons flown", "Hourly charges apply only to lessons actually conducted. No penalty for weather or scheduling conflicts."],
  ["No obligation", "There's no obligation to complete a course. Your pace, your decision."],
  ["Same instructor, same time", "Most training is one-on-one with the same instructor at the same times each week."],
  ["Year-round, after hours", "Students accepted all year, with flexible hours including evenings and weekends."],
  ["Training is the only job", "Pilot training is the only priority here. No charter or other activities."],
];

const rates: [string, string, string][] = [
  ["Ground & virtual instruction", "$30", "/hr"],
  ["Single-engine flight instruction", "$50", "/hr"],
  ["Beechcraft Sundowner rental", "$147", "/hr · tax & fuel incl."],
  ["Sundowner with instructor", "$197", "/hr · maneuvers, night & cross-country"],
  ["IFR ground trainer (ATC 610), dual", "$71", "/hr"],
  ["Instruction in your airplane, single", "$60", "/hr"],
  ["Instruction in your airplane, multi", "$70", "/hr"],
  ["Aircraft maintenance", "$60", "/hr"],
];

const tutoring = ["Regulations", "Navigation", "Airspace", "Meteorology", "Physiology", "IFR approaches", "DME arcs", "Holding patterns", "Emergency procedures"];

const graduates = [
  { img: "grad-luke", name: "Luke C.", date: "04/19/22", what: "Private Pilot Certificate, Airplane Single Engine Land" },
  { img: "grad-steve", name: "Steve B.", date: "01/16/22", what: "" },
  { img: "grad-tyler", name: "Tyler K.", date: "07/17/21", what: "" },
  { img: "grad-ethan", name: "Ethan E.", date: "12/14/17", what: "" },
  { img: "grad-john", name: "John F.", date: "11/17/17", what: "" },
  { img: "grad-milan", name: "Milan S.", date: "07/18/16", what: "" },
];

export default function AviationServices() {
  return (
    <div id="top" className={`${s.root} ${display.variable} ${sans.variable}`}>
      <Nav phone={contact.phone} tel={contact.tel} />

      {/* HERO */}
      <section className={s.hero}>
        <img className={s.heroImg} src={img("ramp-line")} alt="Training airplanes lined up on the ramp under a clear blue sky" fetchPriority="high" />
        <div className={s.heroShade} />
        <div className={s.heroInner}>
          <p className={`${s.update} ${s.rise}`}>
            <span>Update · May 26, 2026</span> All basic flight training restored. Enrollment for primary training is open.
          </p>
          <p className={`${s.eyebrow} ${s.rise}`} style={{ animationDelay: "80ms" }}>Wittman Regional Airport · Oshkosh, Wisconsin</p>
          <h1 className={`${s.heroTitle} ${s.rise}`} style={{ animationDelay: "160ms" }}>
            Take off<br /><span>with us.</span>
          </h1>
          <p className={`${s.heroLede} ${s.rise}`} style={{ animationDelay: "280ms" }}>
            Whether you want to fly as a hobby or become a professional pilot, one-on-one training from an instructor who has spent 50+ years
            teaching novices to airline pilots.
          </p>
          <div className={`${s.ctas} ${s.rise}`} style={{ animationDelay: "400ms" }}>
            <a href="#first-flight" className={`${s.btn} ${s.btnRed}`}>Book a $149 First Flight</a>
            <a href="#rates" className={`${s.btn} ${s.btnGlass}`}>See Every Rate</a>
          </div>
        </div>
        <div className={`${s.totals} ${s.rise}`} style={{ animationDelay: "540ms" }} aria-label="Logbook totals">
          <p className={s.totalsLabel}>Logbook totals</p>
          <div className={s.totalsRow}>
            {[["50+", "years serving the area"], ["33,300", "flight hours, owner Steve Davis"], ["20,000+", "hours of flight instruction given"], ["38", "years as a Designated Pilot Examiner"]].map(([n, l]) => (
              <div key={l} className={s.total}><strong>{n}</strong><span>{l}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMISES */}
      <section className={`${s.section} ${s.paper}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>How training works here</p>
              <h2 className={s.h2}>No contracts. <em>No surprises.</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>Completion depends on your persistence, not school policy. Hundreds of pilots have trained here, and many went on to careers in aviation.</p>
            </Reveal>
          </div>
          <div className={s.promises}>
            {promises.map(([t, d], i) => (
              <Reveal key={t} delay={(i % 3) * 80} className={s.promise}>
                <span className={s.promiseNo}>{String(i + 1).padStart(2, "0")}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FIRST FLIGHT */}
      <section id="first-flight" className={`${s.section} ${s.teal}`}>
        <div className={`${s.wrap} ${s.first}`}>
          <Reveal className={s.firstMedia}>
            <img src={img("sundowner-panel")} alt="The instrument panel of their Beechcraft Sundowner" loading="lazy" />
          </Reveal>
          <Reveal delay={120}>
            <p className={`${s.kicker} ${s.kickerLight}`}>First flight introductory lesson</p>
            <h2 className={`${s.h2} ${s.h2Light}`}>Take the controls <em>for one hour.</em></h2>
            <p className={`${s.lede} ${s.ledeLight}`}>An actual flight lesson with hands-on controls, for anyone wondering whether flying is for them.</p>
            <div className={s.ticket}>
              <div className={s.ticketCols}>
                <div><small>Preflight</small><b>20 min</b></div>
                <div><small>In flight</small><b>40 min</b></div>
                <div><small>Basic maneuvers</small><b>You fly</b></div>
              </div>
              <div className={s.ticketPrice}><small>Total cost</small><strong>$149</strong></div>
            </div>
            <div className={s.ctas}>
              <a href={contact.tel} className={`${s.btn} ${s.btnRed}`}>Call {contact.phone}</a>
              <a href={contact.mailto("First flight lesson")} className={`${s.btn} ${s.btnGlass}`}>Email to Book</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRAINING */}
      <section id="training" className={`${s.section} ${s.paper} ${s.ruled}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>Courses &amp; costs</p>
              <h2 className={s.h2}>From pre-solo <em>to flight instructor.</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>Flight courses are combined when it makes sense, for the most benefit and cost-effectiveness: a safe, competent and marketable pilot. Pick a course to see the hours and what it costs.</p>
            </Reveal>
          </div>
          <Reveal>
            <CourseLedger />
          </Reveal>
          <div className={s.compare}>
            <Reveal className={s.compareCard}>
              <p className={s.compareTitle}>Which certificate fits?</p>
              <div className={s.compareTable} role="table" aria-label="Certificate comparison">
                <div className={s.compareRow} role="row"><span role="columnheader" /><b role="columnheader">Sport</b><b role="columnheader">Recreational</b><b role="columnheader">Private</b></div>
                <div className={s.compareRow} role="row"><span role="rowheader">Minimum hours</span><em role="cell">20</em><em role="cell">30</em><em role="cell">40</em></div>
                <div className={s.compareRow} role="row"><span role="rowheader">Aircraft</span><em role="cell">Light-sport only</em><em role="cell">Single engine, ≤180 hp, ≤4 seats</em><em role="cell">Airplanes under 12,500 lbs</em></div>
                <div className={s.compareRow} role="row"><span role="rowheader">Passengers</span><em role="cell">1</em><em role="cell">1</em><em role="cell">Multiple</em></div>
                <div className={s.compareRow} role="row"><span role="rowheader">Night flying</span><em role="cell">No</em><em role="cell">No</em><em role="cell">Yes</em></div>
              </div>
            </Reveal>
            <Reveal delay={120} className={s.fastTrack}>
              <p className={s.compareTitle}>Fast Track Program</p>
              <p>Any course can be accelerated. You&apos;re assigned an instructor one-on-one for at least <b>4 hours a day</b>, with 4 hours of home study daily. It takes maximum effort, and instructor availability is limited: first come, first served.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* RATES */}
      <section id="rates" className={`${s.section} ${s.teal}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={`${s.kicker} ${s.kickerLight}`}>Services &amp; rates</p>
              <h2 className={`${s.h2} ${s.h2Light}`}>Every rate, <em>posted plainly.</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={`${s.lede} ${s.ledeLight}`}>Ground and flight instruction for Private, Commercial, ATP, Instrument and Instructor certificates, plus maintenance on your own airplane.</p>
            </Reveal>
          </div>
          <div className={s.rates}>
            <Reveal className={s.rateBoard}>
              {rates.map(([label, price, unit]) => (
                <div key={label} className={s.rateRow}>
                  <span>{label}</span>
                  <i />
                  <b>{price}<small>{unit}</small></b>
                </div>
              ))}
              <p className={s.surcharge}>A temporary fuel surcharge of $14/hr is added to the aircraft rental rate.</p>
            </Reveal>
            <Reveal delay={120} className={s.tutor}>
              <p className={s.tutorTitle}>Stuck on something? Get tutoring.</p>
              <p className={s.tutorText}>Individual ground training on problem areas, by video, in the classroom or in person, at $30/hr.</p>
              <ul className={s.topics}>{tutoring.map((t) => <li key={t}>{t}</li>)}</ul>
              <img src={img("classroom-trainer")} alt="Their classroom with an instrument ground trainer" loading="lazy" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* FLEET & FACILITY */}
      <section className={`${s.section} ${s.paper}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>Airplanes &amp; facility</p>
              <h2 className={s.h2}>An established home <em>on the field.</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>A flight school with single and multi-engine airplanes, simulators, video equipment and maintenance, all at Wittman Regional Airport.</p>
            </Reveal>
          </div>
          <div className={s.gallery}>
            <Reveal className={`${s.shot} ${s.shotWide}`}><img src={img("ramp-2")} alt="One of their training airplanes on the ramp" loading="lazy" /><span>On the ramp</span></Reveal>
            <Reveal delay={80} className={s.shot}><img src={img("building")} alt="The Aviation Services building on the field" loading="lazy" /><span>The school</span></Reveal>
            <Reveal delay={160} className={s.shot}><img src={img("classroom")} alt="Their classroom" loading="lazy" /><span>Classroom</span></Reveal>
            <Reveal delay={80} className={s.shot}><img src={img("apache-panel")} alt="The instrument panel of their Piper Apache" loading="lazy" /><span>Piper Apache panel</span></Reveal>
            <Reveal delay={160} className={`${s.shot} ${s.shotWide}`}><img src={img("apache-hangar")} alt="Their twin-engine Piper Apache in the hangar" loading="lazy" /><span>Piper Apache · multi-engine class rating presently not available</span></Reveal>
          </div>
        </div>
      </section>

      {/* MAINTENANCE */}
      <section id="maintenance" className={`${s.section} ${s.teal} ${s.mxSection}`}>
        <div className={`${s.wrap} ${s.mx}`}>
          <Reveal>
            <p className={`${s.kicker} ${s.kickerLight}`}>Aircraft maintenance · $60/hr</p>
            <h2 className={`${s.h2} ${s.h2Light}`}>Your airplane, <em>in expert hands.</em></h2>
            <ul className={s.mxList}>
              <li><b>Inspections</b> Annuals and 100-hour inspections for single and light multi-engine airplanes, with AD compliance.</li>
              <li><b>Engines</b> Overhauls, cylinder work or replacement, at your facility or ours.</li>
              <li><b>Repairs</b> Minor repairs, plus major repairs, alterations and rebuilding at their off-airport facility.</li>
              <li><b>Owner-assisted annuals</b> Welcome.</li>
            </ul>
          </Reveal>
          <Reveal delay={120} className={s.mxPhotos}>
            <img src={img("shop-hangar")} alt="Airplanes in their maintenance hangar" loading="lazy" />
            <img src={img("shop")} alt="Their maintenance shop" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* CREW */}
      <section id="crew" className={`${s.section} ${s.paper} ${s.ruled}`}>
        <div className={s.wrap}>
          <div className={s.captain}>
            <Reveal className={s.captainPhoto}>
              <img src={img("steve")} alt="Steve D. Davis" loading="lazy" />
            </Reveal>
            <Reveal delay={120}>
              <p className={s.kicker}>Owner &amp; general manager</p>
              <h2 className={s.h2}>Steve D. Davis</h2>
              <p className={s.creds}>ATP · ASMEL · CFI-AIM · GI-A&amp;I · A&amp;P IA</p>
              <p className={s.lede}>
                Professional pilot and flight instructor who has taught in single and multi-engine, piston and turbine, small and large airplanes, from
                the novice to the airline pilot. His Airline Transport Pilot certificate carries DC-3 and DC-3 turboprop type ratings, and he has
                served 38 years as a Designated Pilot Examiner.
              </p>
              <div className={s.logRow}>
                {[["33,300", "total flight hours"], ["20,000+", "instruction given"], ["5,400", "large, turboprop & jet"], ["3,400", "as an airline pilot"], ["3,500+", "simulator"], ["25,000", "one-on-one ground"]].map(([n, l]) => (
                  <div key={l}><strong>{n}</strong><span>{l}</span></div>
                ))}
              </div>
            </Reveal>
          </div>
          <div className={s.crew}>
            <Reveal className={s.member}>
              <img src={img("jim")} alt="Jim Whitehouse" loading="lazy" />
              <div>
                <h3>Jim Whitehouse</h3>
                <p className={s.memberRole}>Shop Manager</p>
                <p className={s.memberMeta}>ATP · AMEL · CFI-AIM · GI-A&amp;I · 20+ years, 14,000 flight hours</p>
              </div>
            </Reveal>
            <Reveal delay={100} className={s.member}>
              <img src={img("nancy")} alt="Nancy Davis" loading="lazy" />
              <div>
                <h3>Nancy Davis</h3>
                <p className={s.memberRole}>Office &amp; Billing</p>
                <p className={s.memberMeta}>Your first call for scheduling and accounts.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GRADUATES */}
      <section className={`${s.section} ${s.teal}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={`${s.kicker} ${s.kickerLight}`}>Recent graduates</p>
              <h2 className={`${s.h2} ${s.h2Light}`}>Hundreds of pilots. <em>Every one signed off here.</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={`${s.lede} ${s.ledeLight}`}>Some recent graduates fly large turboprop and jet aircraft, and others have held flight officer positions with the major airlines for years.</p>
            </Reveal>
          </div>
          <div className={s.grads}>
            {graduates.map((g, i) => (
              <Reveal key={g.name} delay={(i % 3) * 80} className={s.grad}>
                <img src={img(g.img)} alt={`Graduate ${g.name}`} loading="lazy" />
                <div className={s.gradEntry}>
                  <span className={s.gradDate}>{g.date}</span>
                  <b>{g.name}</b>
                  {g.what && <span className={s.gradWhat}>{g.what}</span>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOREIGN PILOTS */}
      <section className={`${s.section} ${s.paper} ${s.foreignSection}`}>
        <div className={`${s.wrap} ${s.foreign}`}>
          <Reveal>
            <p className={s.kicker}>Foreign pilots welcome</p>
            <h2 className={s.h2}>Gain experience <em>or a U.S. certificate.</em></h2>
          </Reveal>
          <Reveal delay={120} className={s.foreignCard}>
            <p>Non-U.S. citizens apply through the TSA&apos;s Alien Flight Student Program before training begins: an online application, fingerprints, passport copies and details of the training requested, with a <b>$130</b> background-check fee. The school takes your photo on the day you report for training.</p>
            <a href="https://www.flightschoolcandidates.gov/afsp2/?acct_type=c&section=FQ" target="_blank" rel="noreferrer" className={`${s.btn} ${s.btnTeal}`}>TSA Alien Flight Student Program</a>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={s.contact}>
        <img src={img("building-wide")} alt="" className={s.contactImg} loading="lazy" />
        <div className={s.contactShade} />
        <div className={`${s.wrap} ${s.contactInner}`}>
          <Reveal>
            <p className={`${s.kicker} ${s.kickerLight}`}>Don&apos;t delay your enrollment</p>
            <h2 className={s.contactTitle}>Get working on <em>your certificate today.</em></h2>
            <div className={s.ctas}>
              <a href={contact.tel} className={`${s.btn} ${s.btnRed}`}>Call {contact.phone}</a>
              <a href={contact.mailto("Flight training")} className={`${s.btn} ${s.btnGlass}`}>Email Steve</a>
            </div>
            <div className={s.contactCard}>
              <div><span>Write or visit</span><p><a href={contact.maps} target="_blank" rel="noreferrer">Aviation Services LLC<br />{contact.address[0]}<br />{contact.address[1]}</a></p></div>
              <div><span>Call</span><p><a href={contact.tel}>{contact.phone}</a></p></div>
              <div><span>Email</span><p><a href={`mailto:${contact.email}`}>{contact.email}</a></p></div>
              <div><span>Read</span><p><a href={contact.blog} target="_blank" rel="noreferrer">Steve&apos;s Blog</a></p></div>
            </div>
            <div className={s.map}>
              <iframe src={contact.embed} title="Map to Aviation Services at Wittman Regional Airport, Oshkosh" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Inquiry email={contact.email} />
          </Reveal>
        </div>
        <footer className={`${s.wrap} ${s.footer}`}>
          <span className={s.footBrand}><Wordmark className={s.footWordmark} /> Oshkosh, Wisconsin · Always fly safe.</span>
          <span>Website concept by Stratum</span>
        </footer>
      </section>
    </div>
  );
}
