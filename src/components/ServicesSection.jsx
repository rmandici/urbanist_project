import { Map, Compass, Layers, ArrowUpRight } from "lucide-react";

const services = [
  {
    num: "01", Icon: Map,
    title: "Planificare Urbană",
    description: "Elaborăm strategii și documentații de urbanism care contribuie la dezvoltarea coerentă și sustenabilă a teritoriului, integrând cerințele legislative, obiectivele investiționale și particularitățile locale ale fiecărui proiect.",
  },
  {
    num: "02", Icon: Compass,
    title: "Consultanță Urbanistică",
    description: "Oferim consultanță de specialitate proprietarilor de terenuri, investitorilor, dezvoltatorilor imobiliari și autorităților publice, facilitând identificarea celor mai eficiente soluții pentru valorificarea și dezvoltarea proprietăților.",
  },
  {
    num: "03", Icon: Layers,
    title: "Management de Proiect",
    description: "Coordonăm procesele și colaborarea dintre specialiști, autorități și beneficiari pe parcursul elaborării și avizării documentațiilor, asigurând gestionarea eficientă a etapelor de proiect.",
  },
];

export function ServicesSection() {
  return (
    <section className="section section--services" id="servicii" aria-labelledby="services-title">
      <div className="site-container">
        <div className="section-heading section-heading--split">
          <div>
            <span className="eyebrow"><span className="eyebrow__dash" /> 02 / SERVICII</span>
            <h2 id="services-title">Expertiză pentru fiecare etapă a dezvoltării.</h2>
          </div>
          <p>De la analiza inițială la documentațiile și avizele necesare, fiecare soluție pornește de la contextul real al proiectului.</p>
        </div>
        <div className="services-grid">
          {services.map(({ num, Icon, title, description }) => (
            <article className="service-card" key={title}>
              <div className="service-card__top"><span>{num} / 03</span><Icon size={30} strokeWidth={1.25} aria-hidden="true" /></div>
              <h3>{title}</h3>
              <p>{description}</p>
              <a href="#contact" className="service-card__link" aria-label={`Solicită informații despre ${title}`}><ArrowUpRight size={21}/></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
