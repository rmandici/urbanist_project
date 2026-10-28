import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ServicesSection } from "../components/ServicesSection";
import { SkillsSection } from "../components/SkillsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

const handleSectionClick = (e) => {
  const link = e.target.closest('a[href^="#"]');

  if (!link || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;

  const sectionId = link.getAttribute("href").slice(1);
  const section = document.getElementById(sectionId);

  if (!section) return;

  e.preventDefault();

  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  // Eliminăm eventualul hash existent din URL
  if (window.location.hash) {
    window.history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search
    );
  }
};

export const Home = () => (

  

  <div className="site-shell" onClick={handleSectionClick}>
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);
