import "./css/app.css";
import HorizontalLine from "./content/HorizontalLine";
import TypewriterHeading from "./structure/TypewriterHeading";
import SocialIcons from "./ui/SocialIcons";
import Footer from "./structure/Footer";
import Hero from "./content/hero-section/Hero";
import ThemeSwitcher from "./ui/ThemeSwitcher";
import SkillsSection from "./content/skills-section/SkillsSection";
import ProjectsSection from "./content/projects-section/ProjectsSection";
import CertsSection from "./content/certs-section/CertsSection";
import Carousel from "./content/Carousel";

function App() {
  return (
    <div className="w-full overflow-x-hidden snap-y snap-mandatory h-screen overflow-y-scroll">
      <div className="snap-start h-screen overflow-y-hidden">
        <TypewriterHeading />
        <br />
        <HorizontalLine width="sm:w-xl" />
        <SocialIcons />
        <ThemeSwitcher />
        <br />
        <Hero />
      </div>
      <Carousel />
      <SkillsSection />
      <ProjectsSection />
      <CertsSection />
      <Footer />
    </div>
  );
}

export default App;
