import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  // Planificare Urbană
  {
    name: "Planuri Urbanistice Zonale (PUZ)",
    level: 90,
    category: "Planificare",
  },
  {
    name: "Planuri Urbanistice de Detaliu (PUD)",
    level: 85,
    category: "Planificare",
  },
  {
    name: "Strategii de Dezvoltare Urbană",
    level: 85,
    category: "Planificare",
  },

  // GIS & Software
  { name: "QGIS", level: 80, category: "GIS & Software" },
  { name: "AutoCAD", level: 90, category: "GIS & Software" },
  { name: "SketchUp", level: 75, category: "GIS & Software" },
  { name: "Adobe Illustrator", level: 85, category: "GIS & Software" },

  // Legislație & Reglementare
  { name: "Legislație Urbanistică", level: 90, category: "Reglementare" },
  { name: "Elaborare Regulamente Locale", level: 80, category: "Reglementare" },
  { name: "Avizare Proiecte", level: 85, category: "Reglementare" },

  // Instrumente & Comunicare
  { name: "Simulări 3D", level: 75, category: "Instrumente" },
  { name: "Raportare și Prezentare", level: 80, category: "Instrumente" },
  { name: "Participare publică", level: 80, category: "Instrumente" },
  { name: "Management de proiect", level: 70, category: "Instrumente" },
];

const categories = [
  "toate",
  "Planificare",
  "GIS & Software",
  "Reglementare",
  "Instrumente",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("toate");

  const filteredSkills = skills.filter(
    (skill) => activeCategory == "toate" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary">
      <div
        className="container mx-auto max-w-5xl"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Competențe
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12 ">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer hover:shadow-[0_0_10px_rgba(11,105,157,0.5)]",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/60 text-foreground hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-in-out]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {/* <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
