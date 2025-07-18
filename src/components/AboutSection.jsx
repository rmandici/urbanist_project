import { Briefcase, Code, User, FileText } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          Despre noi
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-card p-2 rounded-lg shadow-xs">
              <img
                src="/media/image_about.jpg"
                alt="Image about"
                className="max-h-55 object-contain justify-self-center"
                data-aos="fade-up"
                data-aos-delay="200"
              />
            </div>
            <h3
              className="text-2xl font-semibold"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Urbanist dedicat dezvoltării spațiilor urbane moderne și
              sustenabile
            </h3>

            <p
              className="text-muted-foreground"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Prin acumularea de experiență în proiecte diverse de urbanism în
              decursul a 6 ani de activitate, oferind soluții adaptate
              contextului local și nevoilor comunității, fiecare proiect mi-a
              pus la dispoziție ocazia de a contribui la crearea unor spații
              funcționale și plăcute.
            </p>

            <p
              className="text-muted-foreground"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              Procesele de planificare urbană, colaborarea multidisciplinară și
              atenția la detalii fiind motivarea să găsesc cele mai bune
              abordări pentru fiecare spațiu în parte.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <a href="#contact" className="cosmic-button">
                {" "}
                Contact{" "}
              </a>

              <a
                href="#skills"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                {" "}
                Competențe{" "}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div
                  className="text-left"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <h4 className="font-semibold text-lg">Planificare Urbană</h4>
                  <p className="text-muted-foreground">
                    Elaborarea de strategii și documentații pentru dezvoltarea
                    coerentă a spațiilor urbane.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div
                  className="text-left"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <h4 className="font-semibold text-lg">
                    Consultanță Urbanistică
                  </h4>
                  <p className="text-muted-foreground">
                    Oferirea de expertiză pentru investitori, autorități sau
                    comunități în vederea luării celor mai bune decizii privind
                    utilizarea terenurilor.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div
                  className="text-left"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <h4 className="font-semibold text-lg">
                    Management de Proiect
                  </h4>
                  <p className="text-muted-foreground">
                    Coordonarea proceselor și echipelor implicate în
                    implementarea proiectelor urbanistice, asigurând respectarea
                    termenelor și calității.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div
                  className="text-left"
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  <h4 className="font-semibold text-lg">
                    Elaborare Documentații (PUZ/PUD)
                  </h4>
                  <p className="text-muted-foreground">
                    Întocmirea documentațiilor urbanistice necesare pentru
                    autorizarea construcțiilor și dezvoltarea proiectelor
                    imobiliare.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
