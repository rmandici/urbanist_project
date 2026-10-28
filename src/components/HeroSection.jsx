import { ArrowDown, ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="hero" id="hero" aria-labelledby="hero-heading">
      <div className="hero__grid" aria-hidden="true" />
      <div className="site-container hero__inner">
        <div className="hero__content">
          <span className="eyebrow eyebrow--light"><span className="eyebrow__dash" /> URBANISM & PLANIFICARE TERITORIALĂ</span>
          <h1 id="hero-heading">Transformăm oportunitățile <strong>în proiecte realizabile.</strong></h1>
          <p>Planificare urbană, consultanță și management de proiect. Soluții fundamentate, adaptate fiecărui teritoriu și fiecărei investiții.</p>
          <div className="hero__actions">
            <a className="button button--light" href="#servicii">Descoperă serviciile <ArrowUpRight size={18} /></a>
            <a className="hero__text-link" href="#despre">Despre noi <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="hero-art__glow" />
          <div className="hero-art__ring hero-art__ring--outer" />
          <div className="hero-art__ring hero-art__ring--middle" />
          <div className="hero-art__ring hero-art__ring--inner" />
          <div className="hero-art__axis hero-art__axis--horizontal" />
          <div className="hero-art__axis hero-art__axis--vertical" />
          <span className="hero-art__node hero-art__node--one" />
          <span className="hero-art__node hero-art__node--two" />
          <span className="hero-art__node hero-art__node--three" />
          <div className="hero-art__center">
            <span className="hero-art__monogram">UM<span>S</span></span>
            <span className="hero-art__caption">URBAN MOVEMENT STUDIO</span>
          </div>
          <div className="hero-art__coordinate hero-art__coordinate--one">44° 28′ N</div>
          <div className="hero-art__coordinate hero-art__coordinate--two">26° 06′ E</div>
        </div>
      </div>
      <a className="hero__scroll" href="#despre" aria-label="Derulează la secțiunea Despre noi"><ArrowDown size={18}/><span>SCROLL PENTRU A EXPLORA</span></a>
      <div className="hero__bottom-rule" />
    </section>
  );
}
