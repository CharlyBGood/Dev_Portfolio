import { HeroSection } from "./components/HeroSection";
import { SkillCardsContainer } from "./components/SkillCardsContainer";
import { ProjectCardsContainer } from "./components/ProjectCardsContainer";
import { Footer } from "./components/Footer";
import { ContactSection } from "./components/ContactSection";

function App() {
  return (
    <div className="min-h-screen bg-portfolio-deep text-white">
      <HeroSection />
      <div className="section-divider-dark-to-light"></div>
      <SkillCardsContainer />
      <div className="section-divider-light-to-dark"></div>
      <ProjectCardsContainer />
      <div className="section-divider-dark-to-light"></div>
      <ContactSection />
      <div className="section-divider-light-to-dark"></div>
      <Footer />
    </div>
  );
}

export default App;
