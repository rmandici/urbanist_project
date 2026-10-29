const competences = [
  [
    "Planuri Urbanistice Zonale (PUZ)",
    "Elaborarea documentațiilor necesare pentru reglementarea și dezvoltarea coerentă a unor zone urbane sau teritorii aflate în proces de transformare.",
  ],
  [
    "Planuri Urbanistice de Detaliu (PUD)",
    "Detalierea condițiilor de amplasare, conformare și integrare a construcțiilor în contextul urban existent.",
  ],
  [
    "Strategii de Dezvoltare Urbană",
    "Definirea direcțiilor de dezvoltare pe termen mediu și lung pentru comunități și teritorii, în concordanță cu obiectivele locale.",
  ],
  [
    "QGIS - Sistem de Informații Geografice",
    "Utilizarea sistemelor GIS pentru analiza, gestionarea și reprezentarea datelor spațiale necesare procesului de planificare urbană.",
  ],
  [
    "Legislație Urbanistică",
    "Aplicarea și interpretarea reglementărilor urbanistice și a cadrului legislativ relevant pentru dezvoltarea proiectelor.",
  ],
  [
    "Elaborare Regulamente Locale",
    "Redactarea reglementărilor urbanistice specifice, adaptate caracteristicilor și obiectivelor fiecărui teritoriu.",
  ],
  [
    "Avizare Proiecte",
    "Coordonarea și susținerea procesului de obținere a avizelor și acordurilor necesare aprobării documentațiilor.",
  ],
  [
    "Raportare și Prezentare",
    "Întocmirea documentațiilor scrise și a materialelor de prezentare pentru beneficiari, autorități și factori interesați.",
  ],
  [
    "Participare Publică",
    "Sprijinirea proceselor de informare și consultare a publicului în cadrul procedurilor de urbanism și planificare teritorială.",
  ],
  [
    "Management de Proiect",
    "Planificarea, coordonarea și monitorizarea activităților necesare pentru implementarea eficientă a proiectelor.",
  ],
];

export function SkillsSection() {
  return (
    <section
      className="section section--skills"
      id="competente"
      aria-labelledby="skills-title"
    >
      <div className="site-container">
        <div className="section-heading section-heading--split">
          <div>
            <span className="eyebrow">
              <span className="eyebrow__dash" /> 03 / COMPETENȚE
            </span>
            <h2 id="skills-title">
              Rigoare tehnică.
              <br />
              <em>Perspectivă de ansamblu.</em>
            </h2>
          </div>
          <p>
            Instrumentele și competențele prin care susținem decizii de
            dezvoltare clare, responsabile și bine fundamentate.
          </p>
        </div>
        <div className="competences-grid">
          {competences.map(([title, description], index) => (
            <article key={title} className="competence-item">
              <span className="competence-item__number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
