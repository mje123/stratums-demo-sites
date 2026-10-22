// Kal-Aero's propeller logo, redrawn as vector from the one on kal-aero.com:
// a navy two-blade propeller with white tip stripes and a silver hub, ringed by
// "Kal-Aero Flight Instruction" in bold serif lettering.
import s from "./styles.module.css";

const BLADE = "M12 -7C50 -8 90 -22 132 -20C150 -19 157 -8 157 0C157 8 150 19 132 20C90 22 50 8 12 7Z";

export function Propeller({ className, spin = false }: { className?: string; spin?: boolean }) {
  return (
    <svg viewBox="-170 -170 340 340" className={className} aria-hidden>
      <defs>
        <clipPath id="ka-blade"><path d={BLADE} /><path d={BLADE} transform="rotate(180)" /></clipPath>
        <linearGradient id="ka-hub" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f4f6f9" />
          <stop offset="0.55" stopColor="#aeb6c2" />
          <stop offset="1" stopColor="#6c7686" />
        </linearGradient>
      </defs>
      <g transform="rotate(-35)">
        <g className={spin ? s.propIdle : undefined}>
          <path d={BLADE} className={s.blade} />
          <path d={BLADE} transform="rotate(180)" className={s.blade} />
          <g clipPath="url(#ka-blade)" className={s.tips}>
            <rect x="126" y="-30" width="7" height="60" />
            <rect x="138" y="-30" width="5" height="60" />
            <rect x="-133" y="-30" width="7" height="60" />
            <rect x="-143" y="-30" width="5" height="60" />
          </g>
          <circle r="17" fill="url(#ka-hub)" stroke="#1b245e" strokeWidth="4" />
          <circle r="6" fill="#dfe3ea" />
        </g>
      </g>
    </svg>
  );
}

/** Full badge: propeller plus arched lettering, as on their site. */
export function LogoBadge({ className }: { className?: string }) {
  return (
    <div className={`${s.badge} ${className ?? ""}`}>
      <Propeller className={s.badgeProp} spin />
      <svg viewBox="0 0 400 400" className={s.badgeText} role="img" aria-label="Kal-Aero Flight Instruction">
        <defs>
          <path id="ka-top" d="M62 210 A138 138 0 0 1 338 210" />
          <path id="ka-bottom" d="M54 205 A146 146 0 0 0 346 205" />
        </defs>
        <text className={s.arc}><textPath href="#ka-top" startOffset="50%" textAnchor="middle">Kal-Aero</textPath></text>
        <text x="200" y="128" textAnchor="middle" className={s.mid}>Flight</text>
        <text className={s.arc}><textPath href="#ka-bottom" startOffset="50%" textAnchor="middle">Instruction</textPath></text>
      </svg>
    </div>
  );
}
