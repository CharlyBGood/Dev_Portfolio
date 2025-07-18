import { HeroSection } from "./components/HeroSection";
import { ProjectCardsContainer } from "./components/ProjectCardsContainer";
import { Footer } from "./components/Footer";
import { ContactSection } from "./components/ContactSection";
import { ScrollNavigation } from "./components/ScrollNavigation";

function App() {
  return (
    <div className="min-h-screen bg-portfolio-deep text-white">
      <HeroSection />
      <ProjectCardsContainer />
      <div className="section-divider-dark-to-light"></div>
      <ContactSection />
      <div className="section-divider-light-to-dark"></div>
      <Footer />
      <ScrollNavigation />
    </div>
  );
}

export default App;
