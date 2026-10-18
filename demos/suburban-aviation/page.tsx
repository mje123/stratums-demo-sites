// Suburban Aviation: redesign concept by Stratum
import { Archivo, Inter, JetBrains_Mono } from "next/font/google";
import s from "./styles.module.css";
import { Nav, OpenStatus, Reveal } from "./client";
import { airportData, asset, contact, fleet, path, services, shop } from "./data";

const display = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--sa-display" });
const sans = Inter({ subsets: ["latin"], variable: "--sa-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--sa-mono" });

export const metadata = {
  title: "Suburban Aviation | Flight School, Maintenance & Hangars near Toledo",
  description: "Family-owned community airport in Ottawa Lake, MI, serving Northwest Ohio and Southeast Michigan since 1984.",
};

const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

function Label({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`${s.label} ${light ? s.labelLight : ""}`}>{children}</p>;
}

export default function SuburbanAviation() {
  const years = new Date().getFullYear() - 1984;
  return (
    <div id="top" className={`${s.root} ${display.variable} ${sans.variable} ${mono.variable}`}>
      <Nav />

      {/* HERO */}
      <section className={s.hero}>
        <img className={s.heroImg} src={asset("n6364d")} alt="Suburban Aviation's Cessna 172 Skyhawk N6364D on the ramp" fetchPriority="high" />
        <div className={s.heroShade} />
        <div className={s.heroGrid} aria-hidden />
        <div className={s.heroContent}>
          <div className={s.rise}><OpenStatus /></div>
          <h1 className={`${s.heroTitle} ${s.rise}`} style={{ animationDelay: "120ms" }}>
            Take<br />flight<span>.</span>
          </h1>
          <div className={`${s.heroBottom} ${s.rise}`} style={{ animationDelay: "280ms" }}>
            <p className={s.heroLede}>
              The hassle-free community airport just north of Toledo. Flight training, Cessna factory-trained maintenance,
              hangar storage and sales for Northwest Ohio and Southeast Michigan.
            </p>
            <div className={s.ctas}>
              <a href="#discovery" className={`${s.btn} ${s.btnYellow}`}>Book a $99 Discovery Flight <Arrow /></a>
              <a href={contact.tel} className={`${s.btn} ${s.btnGlass}`}>Call {contact.phone}</a>
            </div>
          </div>
        </div>
        <div className={s.ticker}>
          <div><span>Est.</span><strong>1984</strong></div>
          <div><span>Ownership</span><strong>Family-owned</strong></div>
          <div><span>Runway</span><strong>4,807 ft</strong></div>
          <div><span>Hours</span><strong>Open 7 days</strong></div>
        </div>
      </section>

      {/* SERVICES */}
      <section className={`${s.section} ${s.white}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <Label>Full-service airport</Label>
              <h2 className={s.h2}>Everything you need.<br /><span>None of the hassle.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>All the services of a big airport without the big-airport headaches: aircraft sales, storage, maintenance and flying lessons, all in one place.</p>
            </Reveal>
          </div>
          <div className={s.services}>
            {services.map((sv, i) => (
              <Reveal key={sv.title} delay={i * 80}>
                <a href={sv.href} className={s.service}>
                  <div className={s.serviceImg}><img src={asset(sv.image)} alt="" loading="lazy" /></div>
                  <div className={s.serviceBody}>
                    <span className={s.mono}>{sv.key}</span>
                    <h3>{sv.title}</h3>
                    <p>{sv.body}</p>
                    <span className={s.serviceGo}>Explore <Arrow /></span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DISCOVERY */}
      <section id="discovery" className={`${s.section} ${s.sky}`}>
        <div className={`${s.wrap} ${s.discovery}`}>
          <Reveal className={s.discoveryCard}>
            <Label>Discovery Flight</Label>
            <p className={s.bigPrice}><sup>$</sup>99</p>
            <h2 className={s.h2}>Serious about<br /><span>learning to fly?</span></h2>
            <p className={s.lede}>
              A Discovery Flight puts you in control of a Cessna Skyhawk 172, navigating the clear blue sky with a certified
              flight instructor by your side. It&apos;s an authentic feel for flying, and the best place to begin.
            </p>
            <div className={s.ctas}>
              <a href={contact.tel} className={`${s.btn} ${s.btnDark}`}>Call to Book <Arrow /></a>
              <a href={contact.schedule} target="_blank" rel="noreferrer" className={`${s.btn} ${s.btnLine}`}>Student Scheduling</a>
            </div>
          </Reveal>
          <Reveal delay={150} className={s.pathWrap}>
            <p className={s.pathTitle}>Once you&apos;re hooked</p>
            <ol className={s.path}>
              {path.map(([t, d], i) => (
                <li key={t}>
                  <span className={s.pathNum}>{String(i + 1).padStart(2, "0")}</span>
                  <div><h3>{t}</h3><p>{d}</p></div>
                </li>
              ))}
            </ol>
            <img src={asset("n75976")} alt="Cessna 172 Skyhawk N75976" loading="lazy" className={s.pathImg} />
          </Reveal>
        </div>
      </section>

      {/* FLEET */}
      <section id="fleet" className={`${s.section} ${s.dark}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <Label light>The Fleet</Label>
              <h2 className={`${s.h2} ${s.h2Light}`}>Glass cockpits.<br /><span>Or classic gauges.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={`${s.lede} ${s.ledeLight}`}>Two Cessna 172 Skyhawks with G500 glass cockpits for modern situational awareness, and a steam-gauge Cessna 152 for building a classic foundation.</p>
            </Reveal>
          </div>
          <div className={s.fleet}>
            {fleet.map((a, i) => (
              <Reveal key={a.tail} delay={i * 100} className={`${s.plane} ${a.image ? "" : s.planeNoImg}`}>
                {a.image ? (
                  <div className={s.planeImg}><img src={asset(a.image)} alt={`${a.type} ${a.tail}`} loading="lazy" /></div>
                ) : (
                  <div className={s.planeArt} aria-hidden><span>{a.tail}</span></div>
                )}
                <div className={s.planeBody}>
                  <p className={s.tail}>{a.tail}</p>
                  <h3>{a.type}</h3>
                  <p className={s.planePanel}>{a.panel}</p>
                  <div className={s.planeRate}><strong>{a.rate}</strong><span>{a.unit}</span></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MAINTENANCE */}
      <section id="maintenance" className={`${s.section} ${s.white}`}>
        <div className={`${s.wrap} ${s.split}`}>
          <Reveal className={s.splitMedia}>
            <img src={asset("shop")} alt="Aircraft in the Suburban Aviation maintenance hangar" loading="lazy" />
            <div className={s.yearsBadge}><strong>{years}</strong><span>years servicing<br />aircraft</span></div>
          </Reveal>
          <Reveal delay={120}>
            <Label>Maintenance</Label>
            <h2 className={s.h2}>Cessna factory trained.<br /><span>Every make welcome.</span></h2>
            <p className={s.lede}>
              Our technicians are Cessna factory trained and certified to service single and multiengine aircraft. With an
              extensive parts inventory and specialized tooling for piston-engine aircraft, we&apos;ve serviced thousands of
              aircraft from all major manufacturers since 1984.
            </p>
            <ul className={s.checks}>
              <li>Single &amp; multiengine piston aircraft</li>
              <li>Extensive parts inventory on site</li>
              <li>Specialized tooling</li>
              <li>Avidyne avionics sales &amp; installation</li>
            </ul>
            <div className={s.badges}>
              <img src={asset("cessna-asc")} alt="Cessna Authorized Service Center" loading="lazy" />
              <img src={asset("avidyne")} alt="Avidyne Authorized Avionics Dealer" loading="lazy" />
            </div>
            <a href={contact.tel} className={`${s.btn} ${s.btnDark}`}>Schedule Maintenance <Arrow /></a>
          </Reveal>
        </div>
      </section>

      {/* AIRPORT & HANGARS */}
      <section id="airport" className={`${s.section} ${s.sky}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <Label>The Airport &amp; Hangars</Label>
              <h2 className={s.h2}>Your aircraft&apos;s<br /><span>new home base.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>A wide range of affordable, convenient hangars, secure and fully enclosed, on long or short-term rental. Availability changes with demand, so call for pricing and openings.</p>
            </Reveal>
          </div>
          <div className={s.airport}>
            <Reveal className={s.aerial}>
              <img src={asset("aerial")} alt="Aerial view of Suburban Aviation's airport and runway" loading="lazy" />
            </Reveal>
            <Reveal delay={120} className={s.chart}>
              <div className={s.chartHead}><span>Airport data</span><span>Ottawa Lake, MI</span></div>
              <dl>
                {airportData.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
              </dl>
              <img src={asset("hangars")} alt="Row of enclosed hangars" loading="lazy" className={s.chartImg} />
              <a href={contact.tel} className={`${s.btn} ${s.btnYellow} ${s.chartCta}`}>Ask About Hangar Availability</a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SHOP */}
      <section id="shop" className={`${s.section} ${s.white} ${s.shopSection}`}>
        <div className={`${s.wrap} ${s.shop}`}>
          <Reveal>
            <Label>Pilot Shop</Label>
            <h2 className={s.h2}>Gear up <span>before you go.</span></h2>
            <p className={s.lede}>Headsets, training kits, charts, test prep and the small essentials, all available at the front desk.</p>
          </Reveal>
          <Reveal delay={120}>
            <ul className={s.shopList}>
              {shop.map(([k, v]) => <li key={k}><span>{k}</span><strong>{v}</strong></li>)}
            </ul>
            <p className={s.fine}>Selected items and prices from the current pilot shop listing. Call to check stock.</p>
          </Reveal>
        </div>
      </section>

      {/* CTA + CONTACT */}
      <section id="contact" className={s.contact}>
        <div className={s.wrap}>
          <Reveal className={s.contactTop}>
            <h2 className={s.contactTitle}>Come fly<br />with us<span>.</span></h2>
            <div className={s.ctas}>
              <a href={contact.tel} className={`${s.btn} ${s.btnYellow}`}>Call {contact.phone}</a>
              <a href={contact.maps} target="_blank" rel="noreferrer" className={`${s.btn} ${s.btnGlass}`}>Get Directions</a>
            </div>
          </Reveal>
          <div className={s.contactGrid}>
            <Reveal className={s.contactCard}>
              <span className={s.mono}>Visit</span>
              <p>{contact.street}<br />{contact.city}</p>
              <a href={contact.maps} target="_blank" rel="noreferrer">Open in Maps →</a>
            </Reveal>
            <Reveal delay={80} className={s.contactCard}>
              <span className={s.mono}>Hours</span>
              <p>{contact.hours}</p>
              <small>{contact.hoursNote}</small>
            </Reveal>
            <Reveal delay={160} className={s.contactCard}>
              <span className={s.mono}>Call</span>
              <p><a href={contact.tel}>{contact.phone}</a></p>
              <a href={contact.schedule} target="_blank" rel="noreferrer">Student scheduling login →</a>
            </Reveal>
          </div>
          <Reveal className={s.mapWrap}>
            <iframe
              title="Map to Suburban Aviation"
              src="https://maps.google.com/maps?q=4383%20Section%20Road%2C%20Ottawa%20Lake%2C%20MI%2049267&t=k&z=15&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
        <footer className={`${s.wrap} ${s.footer}`}>
          <img src="/suburban-aviation/logo.png" alt="Suburban Aviation" width={700} height={311} loading="lazy" />
          <nav aria-label="Footer">
            <a href="#discovery">Flight School</a>
            <a href="#fleet">Fleet</a>
            <a href="#maintenance">Maintenance</a>
            <a href="#airport">Hangars</a>
            <a href={contact.careers} target="_blank" rel="noreferrer">Join Our Team</a>
            <a href={contact.instagram} target="_blank" rel="noreferrer">Instagram</a>
            <a href={contact.facebook} target="_blank" rel="noreferrer">Facebook</a>
          </nav>
          <div className={s.footerBase}>
            <span>© {new Date().getFullYear()} Suburban Aviation · Family-owned since 1984</span>
            <span>Website concept by Stratum</span>
          </div>
        </footer>
      </section>
    </div>
  );
}
