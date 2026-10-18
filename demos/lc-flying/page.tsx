// Low Cost Flying (LCFlying.com): redesign concept by Stratum
// Facts are from lcflying.com; photos are the owner's own, copied into /public/lc-flying.
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import s from "./styles.module.css";
import { Nav, Reveal } from "./client";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--lc-display" });
const sans = DM_Sans({ subsets: ["latin"], variable: "--lc-sans" });

export const metadata = {
  title: "Low Cost Flying | Affordable Flight Training & Rental in Chandler, AZ",
  description: "Cessna 150 rental at $140/hr including gas and flight instruction from $50/hr at Chandler Municipal (KCHD).",
};

const img = (n: string) => `/lc-flying/${n}.jpg`;
const contact = {
  phone: "657-215-5540",
  tel: "tel:+16572155540",
  sms: "sms:+16572155540",
  email: "N3742J@gmail.com",
  mailto: (subject: string) => `mailto:N3742J@gmail.com?subject=${encodeURIComponent(subject)}`,
  facebook: "https://www.facebook.com/Low-Cost-Flying-106597641400939/",
  instagram: "https://www.instagram.com/low_cost_flying/",
  maps: "https://www.google.com/maps/search/?api=1&query=Chandler+Municipal+Airport+KCHD",
};

const services = [
  ["Private Pilot", "Get your license with quality instruction, without overspending."],
  ["Instrument Rating", "Earn your instrument rating and save on every hour of it."],
  ["Commercial Pilot", "Preparing for your commercial certificate? This is the place."],
  ["Time Building", "An affordable way to build hours toward your next goal."],
  ["Flight Review", "Stay current with a flight review, or ask about your specific needs."],
];

const equipment = [
  "Garmin GMA340 audio panel, intercom & marker beacon",
  "Garmin GTR 205",
  "TKM MX170C digital flip-flop Com/Nav",
  "Appareo Stratus ESGi transponder, WAAS GPS & AHRS",
  "Bendix/King KN-64 DME",
  "Dual CDI & glideslope indicators",
  "EI fuel totalizer, flow meter & EGT",
  "Artex 406 MHz ELT",
  "Directional gyro with heading bug",
  "LED taxi, landing, nav lights & beacon",
];

const gallery = [
  { src: "sedona", caption: "Sedona, Arizona" },
  { src: "kanab-ramp-2", caption: "Kanab, Utah" },
  { src: "clouds", caption: "Above the clouds" },
  { src: "sky-harbor", caption: "Phoenix Sky Harbor Airport" },
  { src: "four-peaks", caption: "Arizona from the left seat" },
  { src: "sunset", caption: "Sunset over the valley" },
];

const faq = [
  ["What airport do you fly from?", "We currently fly from Chandler Municipal Airport (KCHD)."],
  ["How can you operate at such a low cost?", "It starts with an economical, proven airplane. Applying efforts to many different areas adds up to savings for the customer."],
  ["Are you insured?", "Yes. A million-dollar instruction and rental insurance policy covers all occupants, student, instructor, property, et cetera."],
  ["What hours do you fly?", "We can accommodate almost any schedule, Monday through Sunday."],
];

export default function LowCostFlying() {
  return (
    <div id="top" className={`${s.root} ${display.variable} ${sans.variable}`}>
      <Nav phone={contact.phone} tel={contact.tel} />

      {/* HERO */}
      <section className={s.hero}>
        <img className={s.heroImg} src={img("grand-canyon")} alt="The Grand Canyon seen from under the wing of a Cessna 150" fetchPriority="high" />
        <div className={s.heroShade} />
        <div className={s.heroInner}>
          <p className={`${s.chip} ${s.rise}`}>Chandler, AZ · Chandler Municipal (KCHD)</p>
          <h1 className={`${s.heroTitle} ${s.rise}`} style={{ animationDelay: "120ms" }}>
            Fly more.<br /><span>Pay less.</span>
          </h1>
          <p className={`${s.heroLede} ${s.rise}`} style={{ animationDelay: "260ms" }}>
            Flying doesn&apos;t have to always be expensive. Affordable airplane rental and flight instruction, from your first
            lesson to your commercial certificate.
          </p>
          <div className={`${s.ctas} ${s.rise}`} style={{ animationDelay: "400ms" }}>
            <a href={contact.sms} className={`${s.btn} ${s.btnSun}`}>Text to Get Started</a>
            <a href="#rates" className={`${s.btn} ${s.btnGlass}`}>See the Rates</a>
          </div>
        </div>
        <div className={`${s.priceTags} ${s.rise}`} style={{ animationDelay: "560ms" }}>
          <div className={s.tag}>
            <span className={s.tagLabel}>Airplane rental</span>
            <strong>$140<small>/hr</small></strong>
            <span className={s.tagNote}>Including gas</span>
          </div>
          <div className={s.tag}>
            <span className={s.tagLabel}>Flight instruction</span>
            <strong>$50–65<small>/hr</small></strong>
            <span className={s.tagNote}>Instruction and rental together</span>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className={`${s.section} ${s.sand}`}>
        <div className={`${s.wrap} ${s.story}`}>
          <Reveal className={s.storyMedia}>
            <img src={img("kanab-ramp")} alt="A Low Cost Flying Cessna 150 on the ramp beneath red cliffs in Kanab, Utah" loading="lazy" />
          </Reveal>
          <Reveal delay={120}>
            <p className={s.kicker}>Why Low Cost Flying exists</p>
            <blockquote className={s.quote}>
              &ldquo;It took me a long time to get into flying, because of the cost. <em>I want to help others get past that obstacle.</em>&rdquo;
            </blockquote>
            <p className={s.lede}>
              Cut the cost, not the value. Whether you need primary instruction, an instrument rating, or just an affordable way
              to build time, we can help you get your license and ratings without overpaying.
            </p>
            <div className={s.facts}>
              <div><strong>2</strong><span>Cessna 150Gs</span></div>
              <div><strong>$1M</strong><span>instruction &amp; rental insurance</span></div>
              <div><strong>7</strong><span>days a week, almost any schedule</span></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RATES + SERVICES */}
      <section id="rates" className={`${s.section} ${s.night}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={`${s.kicker} ${s.kickerLight}`}>Training &amp; rates</p>
              <h2 className={`${s.h2} ${s.h2Light}`}>Every rating. <span>None of the sticker shock.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={`${s.lede} ${s.ledeLight}`}>Instruction and rental from one place, so you can fly without going broke.</p>
            </Reveal>
          </div>
          <div className={s.rateGrid}>
            <Reveal className={`${s.rateCard} ${s.rateFeature}`}>
              <p className={s.rateLabel}>Airplane rental · Cessna 150G</p>
              <p className={s.rateBig}>$140<span>/hr</span></p>
              <p className={s.rateNote}>Gas included. No fuel surcharge math.</p>
              <a href={contact.tel} className={`${s.btn} ${s.btnSun}`}>Call to Book</a>
            </Reveal>
            <Reveal delay={100} className={s.rateCard}>
              <p className={s.rateLabel}>Flight instruction</p>
              <p className={s.rateBig}>$50<span>–65/hr</span></p>
              <p className={s.rateNote}>Quality instruction at a rate that keeps you flying often.</p>
              <a href={contact.mailto("Flight instruction")} className={`${s.btn} ${s.btnLine}`}>Email About Training</a>
            </Reveal>
          </div>
          <div className={s.services}>
            {services.map(([t, d], i) => (
              <Reveal key={t} delay={i * 70} className={s.service}>
                <span className={s.serviceNum}>0{i + 1}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FLEET */}
      <section id="fleet" className={`${s.section} ${s.sand}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={s.kicker}>The airplane</p>
              <h2 className={s.h2}>The Cessna 150G. <span>Small plane, big value.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>&ldquo;I can&apos;t say enough good things about the Cessna 150. It is an amazingly valuable trainer.&rdquo; Stable, forgiving, well-equipped and well maintained.</p>
            </Reveal>
          </div>
          <div className={s.fleet}>
            <Reveal className={s.fleetPhotos}>
              <img className={s.fleetMain} src={img("n3742j-night")} alt="Cessna 150 N3742J on the ramp at night" loading="lazy" />
              <img src={img("panel")} alt="The Cessna 150 instrument panel" loading="lazy" />
              <img src={img("c150-trophy")} alt="A Low Cost Flying Cessna 150 on the ramp" loading="lazy" />
            </Reveal>
            <Reveal delay={120} className={s.fleetInfo}>
              <div className={s.perf}>
                <div><strong>2 × 200 lb</strong><span>for 2.5 hours, with a 30-minute fuel reserve</span></div>
                <div><strong>11,000–12,500 ft</strong><span>cruise, routinely, at max weight</span></div>
                <div><strong>4+ hours</strong><span>flown with more than 30 minutes of reserve</span></div>
              </div>
              <div className={s.adsb}>
                <img src={img("adsb")} alt="Live traffic and weather on a tablet via ADS-B" loading="lazy" />
                <p><strong>ADS-B in &amp; out.</strong> Live traffic map plus live weather and winds aloft to help you choose your cruising altitude. If you haven&apos;t flown with it, you need to.</p>
              </div>
              <p className={s.equipTitle}>Equipment</p>
              <ul className={s.equip}>{equipment.map((e) => <li key={e}>{e}</li>)}</ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className={`${s.section} ${s.night}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={`${s.kicker} ${s.kickerLight}`}>Where you&apos;ll fly</p>
              <h2 className={`${s.h2} ${s.h2Light}`}>The scenery is <span>part of the lesson.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={`${s.lede} ${s.ledeLight}`}>A sample of photos taken from the cockpit in and around Arizona.</p>
            </Reveal>
          </div>
          <div className={s.gallery}>
            {gallery.map((g, i) => (
              <Reveal key={g.src} delay={(i % 3) * 80} className={`${s.shot} ${i === 0 ? s.shotWide : ""}`}>
                <img src={img(g.src)} alt={g.caption} loading="lazy" />
                <span>{g.caption}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${s.section} ${s.sand}`}>
        <div className={`${s.wrap} ${s.faqWrap}`}>
          <Reveal>
            <p className={s.kicker}>Good questions</p>
            <h2 className={s.h2}>How is it <span>this affordable?</span></h2>
          </Reveal>
          <div>
            {faq.map(([q, a], i) => (
              <Reveal key={q} delay={i * 60}>
                <details className={s.faq} open={i === 1}>
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
        <img src={img("sunset")} alt="" className={s.contactImg} loading="lazy" />
        <div className={s.contactShade} />
        <div className={`${s.wrap} ${s.contactInner}`}>
          <Reveal>
            <h2 className={s.contactTitle}>If you want to fly without going broke, <span>get in touch.</span></h2>
            <p className={`${s.lede} ${s.ledeLight}`}>Call or text anytime. Expect a reply within 24 hours.</p>
            <div className={s.ctas}>
              <a href={contact.tel} className={`${s.btn} ${s.btnSun}`}>Call {contact.phone}</a>
              <a href={contact.sms} className={`${s.btn} ${s.btnGlass}`}>Text Us</a>
              <a href={contact.mailto("Low Cost Flying inquiry")} className={`${s.btn} ${s.btnGlass}`}>Email</a>
            </div>
          </Reveal>
          <Reveal delay={120} className={s.contactCard}>
            <div><span>Base</span><p><a href={contact.maps} target="_blank" rel="noreferrer">Chandler Municipal Airport (KCHD)<br />Chandler, AZ</a></p></div>
            <div><span>Call or text</span><p><a href={contact.tel}>{contact.phone}</a></p></div>
            <div><span>Email</span><p><a href={`mailto:${contact.email}`}>{contact.email}</a></p></div>
            <div><span>Follow</span><p><a href={contact.instagram} target="_blank" rel="noreferrer">Instagram</a> · <a href={contact.facebook} target="_blank" rel="noreferrer">Facebook</a></p></div>
          </Reveal>
        </div>
        <footer className={`${s.wrap} ${s.footer}`}>
          <span>© {new Date().getFullYear()} Low Cost Flying · LCFlying.com</span>
          <span>Website concept by Stratum</span>
        </footer>
      </section>
    </div>
  );
}
