import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-auto z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Salut, suntem</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Urban
            </span>
            <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Movement
            </span>
            <span className="ml-2 opacity-0 animate-fade-in-delay-3">
              {" "}
              studio
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Firma cu experiență, specializată în planificare urbană, consultanță
            și dezvoltare de proiecte pentru crearea de comunități durabile și
            sustenabile.
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#about" className="cosmic-button">
              Start
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
