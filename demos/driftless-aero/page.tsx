// Driftless Aero: redesign concept by Stratum
import { Fraunces, Manrope } from "next/font/google";
import s from "./styles.module.css";
import { Nav, Reveal } from "./client";
import {
  community, contact, img, instruction, programs, rates, requirements, services, specs, team, testimonials, wix,
} from "./data";

const serif = Fraunces({ subsets: ["latin"], style: ["normal", "italic"], axes: ["opsz", "SOFT"], variable: "--da-serif" });
const sans = Manrope({ subsets: ["latin"], variable: "--da-sans" });

export const metadata = {
  title: "Driftless Aero | Flight Training in Mineral Point, Wisconsin",
  description: "Southwest Wisconsin's most cost-effective flight training and aircraft rental, based at Iowa County Airport (KMRJ).",
};

const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

/** Contour lines: a nod to the hills and valleys of the unglaciated Driftless Area. */
function Contours({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <g fill="none" stroke="currentColor" strokeWidth="1">
        {Array.from({ length: 14 }, (_, i) => {
          const r = 40 + i * 34;
          return (
            <path
              key={i}
              d={`M ${560 - r} 300 C ${560 - r} ${300 - r * 0.8}, ${560 + r * 0.6} ${300 - r * 0.95}, ${560 + r} ${300 - r * 0.2} S ${560 + r * 0.5} ${300 + r * 0.9}, ${560 - r * 0.2} ${300 + r * 0.75} S ${560 - r} ${300 + r * 0.3}, ${560 - r} 300 Z`}
            />
          );
        })}
      </g>
    </svg>
  );
}

function Eyebrow({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`${s.eyebrow} ${light ? s.eyebrowLight : ""}`}>{children}</p>;
}

export default function DriftlessAero() {
  return (
    <div id="top" className={`${s.root} ${serif.variable} ${sans.variable}`}>
      <Nav />

      {/* HERO */}
      <section className={s.hero}>
        <img
          className={s.heroImg}
          src={wix(img.sunset, 1440, 1080)}
          alt="Driftless Aero's Cessna 150, N2608J, on the ramp at sunset"
          fetchPriority="high"
        />
        <div className={s.heroShade} />
        <div className={s.heroContent}>
          <p className={`${s.heroKicker} ${s.rise}`}>Mineral Point, Wisconsin · KMRJ</p>
          <h1 className={`${s.heroTitle} ${s.rise}`} style={{ animationDelay: "150ms" }}>
            Learn to fly<br />over the <em>Driftless.</em>
          </h1>
          <p className={`${s.heroLede} ${s.rise}`} style={{ animationDelay: "300ms" }}>
            Southwest Wisconsin&apos;s most cost-effective flight training, aircraft rental and professional aviation
            services, proudly based at Iowa County Airport.
          </p>
          <div className={`${s.ctas} ${s.rise}`} style={{ animationDelay: "450ms" }}>
            <a href="#discovery" className={`${s.btn} ${s.btnSun}`}>Book an $80 Discovery Flight <Arrow /></a>
            <a href="#pricing" className={`${s.btn} ${s.btnGlass}`}>See Transparent Pricing</a>
          </div>
        </div>
        <div className={s.rateRail}>
          {rates.map((r, i) => (
            <div key={r.label} className={`${s.rate} ${s.rise}`} style={{ animationDelay: `${600 + i * 90}ms` }}>
              <p className={s.ratePrice}>{r.price}<span>{r.unit}</span></p>
              <p className={s.rateLabel}>{r.label}</p>
              <p className={s.rateNote}>{r.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION */}
      <section className={`${s.section} ${s.mission}`}>
        <Contours className={s.contours} />
        <div className={`${s.wrap} ${s.missionGrid}`}>
          <Reveal>
            <Eyebrow>Clear Skies, Disciplined Training</Eyebrow>
            <p className={s.missionQuote}>
              Earning a pilot certificate should be <em>attainable and affordable</em>, without ever compromising safety,
              professionalism, or the quality of instruction.
            </p>
            <p className={s.lede}>
              Every student arrives with different experience, commitments and goals. That&apos;s why training at Driftless
              Aero is tailored to your learning style and your schedule: flexible, practical, and built to help you
              succeed efficiently.
            </p>
          </Reveal>
          <Reveal delay={150} className={s.stats}>
            <div><strong>7,000+</strong><span>hours of staff flight experience</span></div>
            <div><strong>40+</strong><span>aircraft types flown by our team</span></div>
            <div><strong>2024</strong><span>founded to make training affordable</span></div>
            <div><strong>KMRJ</strong><span>Iowa County Airport, Hangar C</span></div>
          </Reveal>
        </div>
      </section>

      {/* TRAINING */}
      <section id="training" className={`${s.section} ${s.sectionPaper}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <Eyebrow>Flight Programs</Eyebrow>
              <h2 className={s.h2}>From first flight to <em>flight instructor.</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>LSA · PPL · IFR · CPL · CFI. Comprehensive ground school and flight instruction, taught by instructors who genuinely want to see you reach your goals.</p>
            </Reveal>
          </div>
          <div className={s.bento}>
            {programs.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 90} className={`${s.card} ${i === 0 ? s.cardFeature : ""}`}>
                <img src={wix(p.image, i === 0 ? 1200 : 900, i === 0 ? 1300 : 700)} alt="" loading="lazy" />
                <div className={s.cardShade} />
                <div className={s.cardBody}>
                  <span className={s.cardCode}>{p.code}</span>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                  <a href={contact.mailto(`${p.title} inquiry`)} className={s.cardLink}>Ask about this <Arrow /></a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className={s.servicesHead}>
              <h3>For licensed pilots &amp; owners</h3>
              <p>Professional services for the pilots already flying the Driftless.</p>
            </div>
          </Reveal>
          <div className={s.services}>
            {services.map(([t, d], i) => (
              <Reveal key={t} delay={(i % 3) * 80} className={s.service}>
                <span className={s.serviceNum}>{String(i + 1).padStart(2, "0")}</span>
                <h4>{t}</h4>
                <p>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className={`${s.section} ${s.sectionInk}`}>
        <Contours className={`${s.contours} ${s.contoursLight}`} />
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <Eyebrow light>Transparent Pricing</Eyebrow>
              <h2 className={`${s.h2} ${s.h2Light}`}>No mystery math. <em>Just flying.</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={`${s.lede} ${s.ledeLight}`}>Flight and ground instruction are billed at the same rate. Our aircraft and instructors are insured for flight training, with an extremely low deductible as a courtesy to you.</p>
            </Reveal>
          </div>
          <div className={s.pricingGrid}>
            <Reveal className={s.priceTable}>
              <p className={s.tableTitle}>Rates</p>
              <ul>
                {instruction.map(([k, v]) => (
                  <li key={k}><span>{k}</span><strong>{v}</strong></li>
                ))}
              </ul>
              <a href={contact.mailto("Gift card inquiry")} className={s.giftCard}>
                <span>🎁</span>
                <div><strong>Give the gift of flight</strong><p>Gift cards make the perfect unique gift. Ask us today.</p></div>
                <Arrow />
              </a>
            </Reveal>
            <div className={s.reqs}>
              {requirements.map((r, i) => (
                <Reveal key={r.title} delay={i * 90}>
                  <details className={s.req} open={i === 0}>
                    <summary>
                      <span>{r.title}</span>
                      <span className={s.reqPlus} aria-hidden />
                    </summary>
                    <ul>{r.items.map((it) => <li key={it}>{it}</li>)}</ul>
                    <p className={s.reqCost}>{r.cost}</p>
                  </details>
                </Reveal>
              ))}
              <p className={s.fine}>Endorsements such as tailwheel, high performance, complex and high altitude have no minimum time; they require demonstrated ability. Ask for an estimated timeline based on your experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FLEET */}
      <section id="fleet" className={`${s.section} ${s.sectionPaper}`}>
        <div className={`${s.wrap} ${s.fleet}`}>
          <Reveal className={s.fleetMedia}>
            <img className={s.fleetMain} src={wix(img.n2608jHangar, 1400, 1050)} alt="Cessna 150G N2608J outside the Driftless Aero hangar" loading="lazy" />
            <div className={s.fleetThumbs}>
              <img src={wix(img.interior, 700, 520)} alt="Cabin with four-point harnesses" loading="lazy" />
              <img src={wix(img.cockpitView, 700, 520)} alt="View from the cockpit over southwest Wisconsin" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>The Fleet</Eyebrow>
            <h2 className={s.h2}>Meet <em>N2608J.</em></h2>
            <p className={s.lede}>A well-maintained, always-improving 1967 Cessna 150G, our trainer and rental aircraft. Simple, honest, and a fun flying experience.</p>
            <dl className={s.specs}>
              {specs.map(([k, v]) => (<div key={k}><dt>{k}</dt><dd>{v}</dd></div>))}
            </dl>
            <div className={s.fleetPrice}>
              <strong>$115</strong><span>per hour, wet<br />plus tax</span>
              <a href={contact.mailto("Aircraft rental inquiry")} className={`${s.btn} ${s.btnInk}`}>Rent N2608J <Arrow /></a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT / TEAM */}
      <section id="about" className={`${s.section} ${s.sectionSand}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <Eyebrow>Meet the Staff</Eyebrow>
              <h2 className={s.h2}>Local pilots. <em>Personal training.</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>Rooted in southwest Wisconsin. Our instructors are experienced in a wide variety of aircraft, systems and scenarios, and believe in leading by example.</p>
            </Reveal>
          </div>
          <div className={s.team}>
            {team.map((t, i) => (
              <Reveal key={t.name} delay={i * 100} className={s.member}>
                <span className={s.monogram} aria-hidden>{t.name.split(" ").map((n) => n[0]).join("")}</span>
                <h3>{t.name}</h3>
                <p className={s.role}>{t.role}</p>
                <p>{t.bio}</p>
              </Reveal>
            ))}
          </div>
          <div className={s.strip}>
            {[img.studentsGroup, img.goldenPair, img.checkride, img.bfr, img.couple, img.orangeShirt].map((id, i) => (
              <Reveal key={id} delay={i * 60}>
                <img src={wix(id, 520, 640)} alt="Driftless Aero students and pilots with N2608J" loading="lazy" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={`${s.section} ${s.sectionPaper}`}>
        <div className={s.wrap}>
          <Reveal>
            <Eyebrow>In Their Words</Eyebrow>
            <h2 className={s.h2}>&ldquo;More achievable <em>than you think.&rdquo;</em></h2>
          </Reveal>
          <div className={s.quotes}>
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 2) * 100} className={s.quoteCard}>
                <span className={s.quoteMark} aria-hidden>&ldquo;</span>
                <blockquote>{t.quote}</blockquote>
                <p className={s.quoteMore}>{t.more}</p>
                <p className={s.quoteBy}><strong>{t.name}</strong> · {t.tag}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className={`${s.section} ${s.sectionSand}`}>
        <div className={s.wrap}>
          <div className={s.head}>
            <Reveal>
              <Eyebrow>Community</Eyebrow>
              <h2 className={s.h2}>Strong roots in the <em>Driftless Region.</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.lede}>Hosting events, volunteering, sponsoring, and visiting local schools to share aviation careers. Have an idea or an event you&apos;d like us at? Reach out.</p>
            </Reveal>
          </div>
          <div className={s.community}>
            {community.map((c, i) => (
              <Reveal key={c.caption} delay={i * 80} className={s.communityItem}>
                <img src={wix(c.image, 800, 1000)} alt={c.caption} loading="lazy" />
                <p>{c.caption}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DISCOVERY */}
      <section id="discovery" className={s.discovery}>
        <img src={wix(img.cockpitView, 2000, 1300)} alt="" loading="lazy" className={s.discoveryImg} />
        <div className={s.discoveryShade} />
        <Reveal className={`${s.wrap} ${s.discoveryInner}`}>
          <p className={s.discoveryPrice}>$80</p>
          <div>
            <Eyebrow light>Discovery Flight</Eyebrow>
            <h2 className={`${s.h2} ${s.h2Light}`}>Take the controls <em>today.</em></h2>
            <p className={`${s.lede} ${s.ledeLight}`}>Your introductory flight lesson: meet your instructor, take off from Iowa County Airport and fly the airplane yourself over the hills and valleys of southwest Wisconsin.</p>
            <div className={s.ctas}>
              <a href={contact.tel} className={`${s.btn} ${s.btnSun}`}>Call {contact.phone}</a>
              <a href={contact.sms} className={`${s.btn} ${s.btnGlass}`}>Text Us</a>
              <a href={contact.mailto("Discovery flight booking")} className={`${s.btn} ${s.btnGlass}`}>Email Us</a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CONTACT */}
      <section id="contact" className={`${s.section} ${s.sectionPaper}`}>
        <div className={`${s.wrap} ${s.contact}`}>
          <Reveal>
            <Eyebrow>Get in Touch</Eyebrow>
            <h2 className={s.h2}>Call, text, <em>or stop by the hangar.</em></h2>
            <dl className={s.contactList}>
              <div><dt>Phone (call or text)</dt><dd><a href={contact.tel}>{contact.phone}</a></dd></div>
              <div><dt>Email</dt><dd><a href={`mailto:${contact.email}`}>{contact.email}</a></dd></div>
              <div><dt>Location</dt><dd><a href={contact.maps} target="_blank" rel="noreferrer">{contact.airport}<br />{contact.street}<br />{contact.city}</a></dd></div>
              <div><dt>Follow</dt><dd><a href={contact.instagram} target="_blank" rel="noreferrer">Instagram</a> · <a href={contact.facebook} target="_blank" rel="noreferrer">Facebook</a> · @driftlessaero</dd></div>
            </dl>
            <div className={s.ctas}>
              <a href={contact.tel} className={`${s.btn} ${s.btnInk}`}>Call Now</a>
              <a href={contact.mailto("Flight inquiry")} className={`${s.btn} ${s.btnLine}`}>Email Us</a>
              <a href={contact.maps} target="_blank" rel="noreferrer" className={`${s.btn} ${s.btnLine}`}>Directions</a>
            </div>
          </Reveal>
          <Reveal delay={120} className={s.mapStack}>
            <iframe
              title="Map to Iowa County Airport"
              src="https://maps.google.com/maps?q=Iowa%20County%20Airport%2C%20Mineral%20Point%2C%20WI&t=k&z=15&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <figure className={s.diagram}>
              <img src={wix(img.diagram, 600, 670)} alt="KMRJ airport diagram showing the Driftless Aero hangar" loading="lazy" />
              <figcaption>Find us at Hangar C</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <footer className={s.footer}>
        <div className={`${s.wrap} ${s.footerTop}`}>
          <div>
            <img src="/driftless-aero/logo-light.png" alt="Driftless Aero" className={s.footerLogo} width={828} height={203} loading="lazy" />
            <p className={s.footerMission}>&ldquo;Our goal is to help you achieve your goals.&rdquo;</p>
          </div>
          <nav aria-label="Footer">
            <a href="#training">Training</a>
            <a href="#pricing">Pricing</a>
            <a href="#fleet">Fleet</a>
            <a href="#about">About</a>
            <a href="#discovery">Discovery Flights</a>
          </nav>
          <div className={s.footerContact}>
            <a href={contact.tel}>{contact.phone}</a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <span>{contact.airport}<br />{contact.city}</span>
          </div>
        </div>
        <div className={`${s.wrap} ${s.footerBase}`}>
          <span>© {new Date().getFullYear()} Driftless Aero. All rights reserved.</span>
          <span>Website concept by Stratum</span>
        </div>
      </footer>
    </div>
  );
}
