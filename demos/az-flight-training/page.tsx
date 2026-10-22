// AZ Flight Training (azflighttraining.com): redesign concept by Stratum
// Facts are from azflighttraining.com; photos and logo are the school's own, copied into /public/az-flight-training.
import { Bebas_Neue, Hanken_Grotesk } from "next/font/google";
import s from "./styles.module.css";
import { CostEstimator, Inquiry, Nav, Requirements, Reveal } from "./client";

const display = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--az-display" });
const sans = Hanken_Grotesk({ subsets: ["latin"], variable: "--az-sans" });

export const metadata = {
  title: "AZ Flight Training | Affordable Flying Lessons in Phoenix, Avondale & Scottsdale",
  description: "$99 discovery flights, $65/hr flight and ground instruction, and Cessna rentals from $135/hr. Private, instrument and commercial training in the Phoenix area.",
};

const img = (n: string) => `/az-flight-training/${n}.jpg`;
const contact = {
  email: "affordableflyinglessons@gmail.com",
  facebook: "https://www.facebook.com/AZ-Flight-Training-101367505176571",
  offices: [
    { city: "Avondale", lines: ["12725 W. Indian School Rd, Suite E-101", "Avondale, AZ 85392"], phone: "602-334-3547", tel: "tel:+16023343547", maps: "https://www.google.com/maps/search/?api=1&query=12725+W+Indian+School+Rd+Suite+E-101+Avondale+AZ+85392" },
    { city: "Scottsdale", lines: ["5635 N. Scottsdale Road, Suite 170", "Scottsdale, AZ 85250"], phone: "480-424-4854", tel: "tel:+14804244854", maps: "https://www.google.com/maps/search/?api=1&query=5635+N+Scottsdale+Rd+Suite+170+Scottsdale+AZ+85250" },
  ],
};
const main = contact.offices[0];

const windows = [
  ["aerial-1", "aerial-5", "aerial-9", "aerial-13"],
  ["aerial-3", "aerial-7", "aerial-11", "aerial-2"],
  ["aerial-4", "aerial-8", "aerial-12", "aerial-6"],
];

const deals = [
  { label: "Discovery flight", price: "$99", unit: "special", note: "Hands-on, and it counts toward your total time." },
  { label: "Simulator / VR experience", price: "$50", unit: "", note: "Cessna 172 sim plus a VR fighter-plane bonus." },
  { label: "Flight instruction", price: "$65", unit: "/hr", note: "One-on-one, airport to airport." },
  { label: "Ground instruction", price: "$65", unit: "/hr", note: "Only pay for the ground school you need." },
];

const fleet = [
  { img: "c172", name: "Cessna 172", model: "172P · carbureted", hp: 180, rate: "$135/hr", note: "When it comes to a reliable trainer, one of the best." },
  { img: "c150", name: "Cessna 150", model: "100 hp hour builder", hp: 100, rate: null, note: "A great airplane to build hours." },
  { img: "c172sp-panel", name: "Cessna 172SP G1000", model: "Glass panel + autopilot", hp: 180, rate: null, note: "Advanced avionics that make it a pleasure to fly." },
];

const services = [
  ["Flight instruction", "$65/hr", "Quality instruction that teaches you, in depth, to navigate safely from airport to airport."],
  ["Introductory flights", "$99", "Probably the most exciting flight of your life, outside of your first solo."],
  ["Flight reviews", "1 + 1 hr min", "One hour ground, one hour flight minimum. We'll get you back up to speed."],
  ["Ground instruction", "$65/hr", "One-on-one ground school when you want it, independent study when you don't."],
  ["Simulator instruction", "$50", "Practice controls, instruments and systems before you leave the ground."],
  ["Checkouts", "Call", "Aircraft checkouts are available. Call us to set one up."],
  ["Aerial photography", "Call", "Aerial photography flights are available. Call us for details."],
];

const gallery = ["aerial-14", "ramp-mountains", "aerial-10", "night-runway", "panel", "night-city", "ramp-lineup", "aerial-6"];

export default function AZFlightTraining() {
  return (
    <div id="top" className={`${s.root} ${display.variable} ${sans.variable}`}>
      <Nav phone={main.phone} tel={main.tel} />

      {/* HERO */}
      <section className={s.hero}>
        <div className={s.heroGrid} aria-hidden />
        <div className={`${s.wrap} ${s.heroInner}`}>
          <div className={s.heroCopy}>
            <p className={`${s.eyebrow} ${s.rise}`}><span className={s.dot} /> Phoenix · Avondale · Scottsdale</p>
            <h1 className={`${s.heroTitle} ${s.rise}`} style={{ animationDelay: "120ms" }}>
              Call today.<br /><span>Fly tomorrow.</span>
            </h1>
            <p className={`${s.heroLede} ${s.rise}`} style={{ animationDelay: "260ms" }}>
              We can get you flying fast for less. Affordable flight instruction and great rental rates in the Phoenix area, with your safety as our
              number one priority.
            </p>
            <div className={`${s.ctas} ${s.rise}`} style={{ animationDelay: "400ms" }}>
              <a href={main.tel} className={`${s.btn} ${s.btnLime}`}>Book a $99 Discovery Flight</a>
              <a href="#cost" className={`${s.btn} ${s.btnGhost}`}>See What It Costs</a>
            </div>
            <div className={`${s.tags} ${s.rise}`} style={{ animationDelay: "520ms" }}>
              <div><b>$65</b><span>/hr instruction</span></div>
              <div><b>$135</b><span>/hr Cessna 172</span></div>
              <div><b>3</b><span>Cessna models to train in</span></div>
            </div>
          </div>
          <div className={`${s.windows} ${s.rise}`} style={{ animationDelay: "300ms" }} aria-label="Photos from the AZ Flight Training gallery">
            {windows.map((col, i) => (
              <div key={i} className={`${s.winCol} ${i === 1 ? s.winColUp : ""}`}>
                {[...col, ...col].map((src, j) => (
                  <div key={j} className={s.win} aria-hidden={j >= col.length}>
                    <img src={img(src)} alt={j < col.length ? "A view from the air, from the AZ Flight Training gallery" : ""} loading={j < 2 ? "eager" : "lazy"} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEALS */}
      <section id="deals" className={`${s.section} ${s.ice}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>Best flight instruction deals in Arizona</p>
              <h2 className={s.h2}>Flying fast <span>for less.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>
                Whether you&apos;re a brand-new pilot flying for the first time or a seasoned pilot looking for great rental rates, we&apos;re here for you.
                The cost and time to finish your training is up to you.
              </p>
            </Reveal>
          </div>
          <div className={s.deals}>
            {deals.map((d, i) => (
              <Reveal key={d.label} delay={i * 80} className={`${s.deal} ${i === 0 ? s.dealHot : ""}`}>
                <span className={s.dealLabel}>{d.label}</span>
                <strong className={s.dealPrice}>{d.price}<small>{d.unit}</small></strong>
                <p>{d.note}</p>
              </Reveal>
            ))}
          </div>
          <p className={s.fine}>All prices are subject to change.</p>
        </div>
      </section>

      {/* COST */}
      <section id="cost" className={`${s.section} ${s.dark}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={`${s.kicker} ${s.kickerLight}`}>What a private pilot license costs</p>
              <h2 className={`${s.h2} ${s.h2Light}`}>Your pace. <span>Your price.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={`${s.lede} ${s.ledeLight}`}>
                Highly motivated and studying independently? You&apos;ll save. Want more personal ground school? We&apos;ve got you covered. And the more
                consistently you fly, the faster you progress. Drag the sliders to see how it adds up.
              </p>
            </Reveal>
          </div>
          <Reveal>
            <CostEstimator />
          </Reveal>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className={`${s.section} ${s.ice}`}>
        <div className={`${s.wrap} ${s.reqWrap}`}>
          <Reveal>
            <p className={s.kicker}>Great training options</p>
            <h2 className={s.h2}>Private, instrument, <span>commercial.</span></h2>
            <p className={s.lede}>The FAA minimums for each certificate, so you know exactly what&apos;s ahead. Most students need some extra time to become proficient.</p>
            <blockquote className={s.quote}>
              &ldquo;There is no sport equal to that which aviators enjoy while being carried through the air on great white wings.&rdquo;
              <cite>The Wright Brothers</cite>
            </blockquote>
          </Reveal>
          <Reveal delay={120}>
            <Requirements />
          </Reveal>
        </div>
      </section>

      {/* FLEET */}
      <section id="fleet" className={`${s.section} ${s.paper}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>The fleet</p>
              <h2 className={s.h2}>Three Cessna models. <span>Hours to glass.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>Every airplane we use is regularly maintained and inspected to make sure it&apos;s in top condition for each flight.</p>
            </Reveal>
          </div>
          <div className={s.fleet}>
            {fleet.map((a, i) => (
              <Reveal key={a.name} delay={i * 100} className={s.plane}>
                <div className={s.planeImg}>
                  <img src={img(a.img)} alt={a.name} loading="lazy" />
                  {a.rate && <span className={s.rate}>{a.rate}</span>}
                </div>
                <div className={s.planeBody}>
                  <span className={s.planeModel}>{a.model}</span>
                  <h3>{a.name}</h3>
                  <p>{a.note}</p>
                  <div className={s.gauge}>
                    <span>Horsepower</span>
                    <div className={s.gaugeBar}><i style={{ width: `${(a.hp / 180) * 100}%` }} /></div>
                    <b>{a.hp} hp</b>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SIMULATOR */}
      <section id="simulator" className={`${s.section} ${s.dark}`}>
        <div className={`${s.wrap} ${s.sim}`}>
          <Reveal className={s.simMedia}>
            <img src={img("simulator")} alt="The Cessna 172 flight simulator" loading="lazy" />
            <img src={img("vr")} alt="The virtual reality fighter plane simulation" loading="lazy" />
          </Reveal>
          <Reveal delay={120}>
            <p className={`${s.kicker} ${s.kickerLight}`}>Flight simulator · $50</p>
            <h2 className={`${s.h2} ${s.h2Light}`}>Learn to fly <span>before you leave the ground.</span></h2>
            <p className={`${s.lede} ${s.ledeLight}`}>
              Today&apos;s simulators are amazingly accurate. Our course combines simulator and ground knowledge to show you how to take off, climb,
              cruise and even land a Cessna 172. Save time and money by understanding the airplane before you get in it for the first time.
            </p>
            <div className={s.vr}>
              <b>Bonus: VR dogfights.</b> Go head to head with other planes in combat, in a true 360-degree virtual world.
            </div>
            <a href={main.tel} className={`${s.btn} ${s.btnLime}`}>Book a Simulator Session</a>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className={`${s.section} ${s.ice}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>Services</p>
              <h2 className={s.h2}>Your needs <span>come first.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>Designed to have you flying quickly and confidently for a great price. We know the process can feel overwhelming, so ask us anything.</p>
            </Reveal>
          </div>
          <div className={s.services}>
            {services.map(([t, p, d], i) => (
              <Reveal key={t} delay={(i % 4) * 60} className={s.service}>
                <div className={s.serviceTop}><h3>{t}</h3><span>{p}</span></div>
                <p>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className={s.gallery} aria-label="Photos from AZ Flight Training">
        {gallery.map((g, i) => (
          <Reveal key={g} delay={(i % 4) * 70} className={s.shot}>
            <img src={img(g)} alt="" loading="lazy" />
          </Reveal>
        ))}
      </section>

      {/* CONTACT */}
      <section id="contact" className={`${s.section} ${s.dark} ${s.contact}`}>
        <div className={`${s.wrap} ${s.contactInner}`}>
          <Reveal>
            <p className={`${s.kicker} ${s.kickerLight}`}>Come fly with us</p>
            <h2 className={s.contactTitle}>Two offices. <span>One mission.</span></h2>
            <p className={`${s.lede} ${s.ledeLight}`}>Our mission is to help you achieve your goals in aviation. Call, email, or send us a note and we&apos;ll get right on it.</p>
            <div className={s.offices}>
              {contact.offices.map((o) => (
                <div key={o.city} className={s.office}>
                  <span className={s.officeCity}>{o.city}</span>
                  <a href={o.maps} target="_blank" rel="noreferrer" className={s.officeAddr}>{o.lines[0]}<br />{o.lines[1]}</a>
                  <a href={o.tel} className={s.officePhone}>{o.phone}</a>
                </div>
              ))}
            </div>
            <p className={s.contactMeta}>
              <a href={`mailto:${contact.email}`}>{contact.email}</a> · <a href={contact.facebook} target="_blank" rel="noreferrer">Facebook</a>
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Inquiry email={contact.email} />
          </Reveal>
        </div>
        <footer className={`${s.wrap} ${s.footer}`}>
          <span>© {new Date().getFullYear()} AZ Flight Training · Phoenix, Arizona</span>
          <span>Website concept by Stratum</span>
        </footer>
      </section>
    </div>
  );
}
