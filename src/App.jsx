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

function App() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll mt-[5rem]">
      <div className="snap-start h-screen">
        <TypewriterHeading />
        <br />
        <HorizontalLine width="sm:w-xl" />
        <SocialIcons />
        <ThemeSwitcher />
        <br />
        <Hero />
      </div>
      <HorizontalLine width="sm:w-full" />
      <SkillsSection />
      <HorizontalLine width="sm:w-full" />
      <ProjectsSection />
      <HorizontalLine width="sm:w-full" />
      {/*<BooksSection />*/}
      <HorizontalLine width="sm:w-full" />
      <CertsSection />
      <Footer />
    </div>
  );
}

export default App;
