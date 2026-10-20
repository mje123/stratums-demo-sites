// Airplane Rental Ventures (airplanerentalventures.com): redesign concept by Stratum
// Facts are from airplanerentalventures.com; photos and logo are the school's own, copied into /public/airplane-rental-ventures.
import { Playfair_Display, Outfit } from "next/font/google";
import s from "./styles.module.css";
import { Inquiry, Nav, Reveal } from "./client";

const display = Playfair_Display({ subsets: ["latin"], style: ["normal", "italic"], variable: "--arv-display" });
const sans = Outfit({ subsets: ["latin"], variable: "--arv-sans" });

export const metadata = {
  title: "Airplane Rental Ventures | Flight Training & Aircraft Rental at Falcon Field, Mesa AZ",
  description: "Part 61 flight training from private pilot to CFI and aircraft rental at Falcon Field in Mesa, Arizona. Helping make flying dreams come true since 2013.",
};

const img = (n: string) => `/airplane-rental-ventures/${n}.jpg`;
const contact = {
  phone: "480.204.8097",
  tel: "tel:+14802048097",
  email: "cfi@airplanerentalventures.com",
  mailto: (subject: string) => `mailto:cfi@airplanerentalventures.com?subject=${encodeURIComponent(subject)}`,
  address: ["4711 E. Falcon Drive, Suite 204", "Mesa, Arizona 85215"],
  maps: "https://www.google.com/maps/search/?api=1&query=4711+E+Falcon+Dr+Suite+204+Mesa+AZ+85215",
};

const ratings = [
  { title: "Private Pilot", body: "The first step for aspiring pilots: a certificate to fly for personal, non-commercial purposes, and the foundation for everything after." },
  { title: "Instrument Pilot", body: "Simulator training plus real flight time. Interpret instruments, fly approach procedures, and handle emergencies in IMC." },
  { title: "Commercial Pilot", body: "Fly for compensation or hire. The next step for pilots pursuing a career in aviation." },
  { title: "Flight Instructor", body: "Share what you know. Training for CFI-A (Airplane) and CFI-I (Instrument) ratings." },
];

const perks = [
  ["Part 61", "Your schedule sets the pace: frequency and length of lessons are up to you."],
  ["Financing", "Financing is available to help you get started."],
  ["Foreign students", "Training is available for foreign students."],
  ["Since 2013", "Over a decade helping make flying dreams come true."],
];

const videos = [
  { id: "2CbdNJWp8bM", title: "Takeoff in a Cessna 172 from Falcon Field, Mesa, AZ" },
  { id: "5NI1glWUDFk", title: "Sedona, Arizona from a Cessna 172" },
  { id: "Oyuh9rvod3A", title: "Landing a Cessna 172 at Falcon Field, Mesa, AZ" },
];

export default function AirplaneRentalVentures() {
  return (
    <div id="top" className={`${s.root} ${display.variable} ${sans.variable}`}>
      <Nav phone={contact.phone} tel={contact.tel} />

      {/* HERO */}
      <section className={s.hero}>
        <img className={s.heroImg} src={img("sedona-ramp")} alt="A red and white Cessna on the ramp beneath Arizona red rocks" fetchPriority="high" />
        <div className={s.heroShade} />
        <div className={s.heroInner}>
          <p className={`${s.eyebrow} ${s.rise}`}>Falcon Field (KFFZ) · Mesa, Arizona · Since 2013</p>
          <h1 className={`${s.heroTitle} ${s.rise}`} style={{ animationDelay: "120ms" }}>
            Learn to fly<br /><em>on your terms.</em>
          </h1>
          <p className={`${s.heroLede} ${s.rise}`} style={{ animationDelay: "260ms" }}>
            Highly individualized flight training and aircraft rental for new and current pilots. Your schedule, your pace, your dream of flying.
          </p>
          <div className={`${s.ctas} ${s.rise}`} style={{ animationDelay: "400ms" }}>
            <a href={contact.tel} className={`${s.btn} ${s.btnPrimary}`}>Call {contact.phone}</a>
            <a href="#training" className={`${s.btn} ${s.btnGlass}`}>Explore Training</a>
          </div>
        </div>
        <div className={`${s.heroFoot} ${s.rise}`} style={{ animationDelay: "560ms" }}>
          <span>Private</span><span>Instrument</span><span>Commercial</span><span>CFI-A &amp; CFI-I</span><span>Flight Review</span><span>Rental</span>
        </div>
      </section>

      {/* MISSION */}
      <section className={`${s.section} ${s.ivory}`}>
        <div className={`${s.wrap} ${s.mission}`}>
          <Reveal>
            <p className={s.kicker}>Our mission</p>
            <p className={s.missionText}>
              Devoted to developing and assisting General Aviation pilots with <em>highly individualized service,</em> helping current and new pilots
              train and improve their skills.
            </p>
          </Reveal>
          <Reveal delay={120} className={s.missionMedia}>
            <img src={img("student")} alt="A student pilot at the controls in the cockpit" loading="lazy" />
            <img src={img("peaks")} alt="Snow-covered mountains seen from under a high wing" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* TRAINING */}
      <section id="training" className={`${s.section} ${s.navy}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={`${s.kicker} ${s.kickerLight}`}>Flight training</p>
              <h2 className={`${s.h2} ${s.h2Light}`}>From first lesson <em>to flight instructor.</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={`${s.lede} ${s.ledeLight}`}>
                Learning to fly will enrich your life in countless ways. It&apos;s a thrilling, challenging adventure, and our training is flexible,
                comprehensive and efficient, with instructors and staff dedicated to your dream of becoming a pilot.
              </p>
            </Reveal>
          </div>
          <div className={s.ratings}>
            {ratings.map((r, i) => (
              <Reveal key={r.title} delay={i * 80} className={s.rating}>
                <span className={s.ratingNum}>{["I", "II", "III", "IV"][i]}</span>
                <h3>{r.title}</h3>
                <p>{r.body}</p>
              </Reveal>
            ))}
          </div>
          <div className={s.perks}>
            {perks.map(([t, d], i) => (
              <Reveal key={t} delay={i * 70} className={s.perk}>
                <strong>{t}</strong>
                <span>{d}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RENTALS */}
      <section id="rentals" className={`${s.section} ${s.ivory}`}>
        <div className={`${s.wrap} ${s.rent}`}>
          <Reveal className={s.rentMedia}>
            <img src={img("prop")} alt="Close-up of a polished propeller spinner on a blue aircraft" loading="lazy" />
          </Reveal>
          <Reveal delay={120}>
            <p className={s.kicker}>Aircraft rental</p>
            <h2 className={s.h2}>Keys to the sky, <em>right at Falcon Field.</em></h2>
            <p className={s.lede}>Our aircraft are available to rent from our Falcon Field location in Mesa. Call or email for our current rental aircraft and requirements.</p>
            <div className={s.ctas}>
              <a href={contact.tel} className={`${s.btn} ${s.btnDark}`}>Call for Availability</a>
              <a href={contact.mailto("Aircraft rental")} className={`${s.btn} ${s.btnOutline}`}>Email Us</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STRIP */}
      <section className={s.strip} aria-label="Photos from the cockpit">
        {[
          ["takeoff-cockpit", "Lined up and ready to roll"],
          ["peaks", "Above the snow-capped peaks"],
          ["night", "Night flying over the valley lights"],
          ["sedona-ramp", "Red-rock ramp days"],
        ].map(([src, cap], i) => (
          <Reveal key={src} delay={i * 90} className={s.stripItem}>
            <img src={img(src)} alt={cap} loading="lazy" />
            <span>{cap}</span>
          </Reveal>
        ))}
      </section>

      {/* VIDEOS */}
      <section id="videos" className={`${s.section} ${s.night}`}>
        <img src={img("night")} alt="" className={s.nightImg} loading="lazy" />
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <p className={`${s.kicker} ${s.kickerLight}`}>From the left seat</p>
              <h2 className={`${s.h2} ${s.h2Light}`}>See what your <em>lessons look like.</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={`${s.lede} ${s.ledeLight}`}>Takeoffs, landings and red-rock scenery, filmed from the cockpit of a Cessna 172.</p>
            </Reveal>
          </div>
          <div className={s.videos}>
            {videos.map((v, i) => (
              <Reveal key={v.id} delay={i * 100} className={s.video}>
                <a href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noreferrer">
                  <span className={s.thumb}>
                    <img src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`} alt="" loading="lazy" />
                    <span className={s.play} aria-hidden />
                  </span>
                  <span className={s.videoTitle}>{v.title}</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={s.contact}>
        <img src={img("takeoff-cockpit")} alt="" className={s.contactImg} loading="lazy" />
        <div className={s.contactShade} />
        <div className={`${s.wrap} ${s.contactInner}`}>
          <Reveal>
            <p className={`${s.kicker} ${s.kickerLight}`}>Have a question?</p>
            <h2 className={s.contactTitle}>Your flying dream <em>starts with a call.</em></h2>
            <p className={`${s.lede} ${s.ledeLight}`}>Let us help with your flight training goals: private, instrument, commercial, flight instructor, or a flight review.</p>
            <div className={s.ctas}>
              <a href={contact.tel} className={`${s.btn} ${s.btnPrimary}`}>Call {contact.phone}</a>
              <a href={contact.mailto("Flight training inquiry")} className={`${s.btn} ${s.btnGlass}`}>Email Us</a>
            </div>
            <div className={s.contactCard}>
              <div><span>Visit</span><p><a href={contact.maps} target="_blank" rel="noreferrer">{contact.address[0]}<br />{contact.address[1]}</a></p></div>
              <div><span>Call</span><p><a href={contact.tel}>{contact.phone}</a></p></div>
              <div><span>Email</span><p><a href={`mailto:${contact.email}`}>{contact.email}</a></p></div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Inquiry email={contact.email} />
          </Reveal>
        </div>
        <footer className={`${s.wrap} ${s.footer}`}>
          <span>© {new Date().getFullYear()} Airplane Rental Ventures · Mesa, Arizona</span>
          <span>Website concept by Stratum</span>
        </footer>
      </section>
    </div>
  );
}
