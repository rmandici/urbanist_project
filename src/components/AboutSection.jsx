import { ArrowUpRight } from "lucide-react";

export function AboutSection() {
  return (
    <section className="section section--about" id="despre" aria-labelledby="about-title">
      <div className="site-container">
        <div className="section-heading">
          <span className="eyebrow"><span className="eyebrow__dash" /> 01 / DESPRE NOI</span>
        </div>
        <div className="about-layout">
          <div className="about-layout__lead">
            <h2 id="about-title">De la potențialul unui teren la <em>o direcție clară de dezvoltare.</em></h2>
            <div className="about-metric"><strong>6<span>+</span></strong><span>ani de experiență în urbanism și planificare teritorială</span></div>
          </div>
          <div className="about-layout__copy">
            <h3>Suntem dedicați transformării oportunităților de dezvoltare în proiecte realizabile.</h3>
            <p>Cu o experiență de peste 6 ani în domeniul urbanismului și planificării teritoriale, oferim servicii de consultanță și proiectare orientate către identificarea celor mai eficiente soluții de dezvoltare pentru fiecare proprietate. Analizăm cu atenție contextul urbanistic, reglementările aplicabile și obiectivele investiționale pentru a fundamenta decizii clare și sustenabile.</p>
            <p>Abordarea noastră se bazează pe profesionalism, rigoare tehnică și colaborare eficientă cu beneficiarii, specialiștii implicați și autoritățile competente. Ne propunem să simplificăm procesele complexe de dezvoltare și să oferim suport pe întreg parcursul elaborării și avizării documentațiilor de urbanism.</p>
            <a className="inline-link" href="#contact">Hai să discutăm despre proiectul tău <ArrowUpRight size={18}/></a>
          </div>
        </div>
      </div>
    </section>
  );
}
