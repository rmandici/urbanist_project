import { ArrowDown, ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="hero" id="hero" aria-labelledby="hero-heading">
      <div className="hero__grid" aria-hidden="true" />
      <div className="site-container hero__inner">
        <div className="hero__content">
          <span className="eyebrow eyebrow--light">
            <span className="eyebrow__dash" /> SERVICII DE URBANISM ȘI
            CONSULTANȚĂ TEHNICĂ
          </span>
          <h1 id="hero-heading">
            Transformăm oportunitățile <strong>în proiecte realizabile.</strong>
          </h1>
          <p>
            Planificare urbană, consultanță și management de proiect. Soluții
            fundamentate, adaptate fiecărui teritoriu și fiecărei investiții.
          </p>
          <div className="hero__actions">
            <a className="button button--light" href="#servicii">
              Descoperă serviciile <ArrowUpRight size={18} />
            </a>
            <a className="hero__text-link" href="#despre">
              Despre noi <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="hero-art__organic hero-art__organic--one" />
          <div className="hero-art__organic hero-art__organic--two" />

          <svg className="hero-art__drawing" viewBox="0 0 560 560" fill="none">
            <path
              d="M-20 405 C85 385 75 240 180 218 S325 246 357 144 S470 64 590 94"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M-24 453 C90 432 97 291 200 271 S336 294 387 191 S478 101 590 134"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M-12 495 C109 473 126 342 229 325 S349 348 419 242 S504 156 595 181"
              stroke="currentColor"
              strokeWidth="2"
            />

            <path
              className="hero-art__route"
              d="M36 135 C154 162 195 74 278 109 S394 194 524 157"
              strokeLinecap="round"
            />

            <rect
              x="90"
              y="220"
              width="110"
              height="72"
              rx="22"
              transform="rotate(-16 90 220)"
              stroke="currentColor"
            />
            <rect
              x="365"
              y="330"
              width="100"
              height="74"
              rx="24"
              transform="rotate(14 365 330)"
              stroke="currentColor"
            />
          </svg>

          <span className="hero-art__marker" />

          <div className="hero-art__center">
            <span className="hero-art__monogram">
              UM<span>S</span>
            </span>
            <span className="hero-art__caption">URBAN MOVEMENT STUDIO</span>
          </div>
        </div>
      </div>
      <a
        className="hero__scroll"
        href="#despre"
        aria-label="Derulează la secțiunea Despre noi"
      >
        <ArrowDown size={18} />
        <span>SCROLL PENTRU A EXPLORA</span>
      </a>
      <div className="hero__bottom-rule" />
    </section>
  );
}
