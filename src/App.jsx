import "./css/app.css";
import HorizontalLine from "./content/HorizontalLine";
import TypewriterHeading from "./structure/TypewriterHeading";
import SocialIcons from "./ui/SocialIcons";
import Footer from "./structure/Footer";
import Blurb from "./content/Blurb";
import ThemeSwitcher from "./ui/ThemeSwitcher";
import SkillsSection from "./content/skills-section/SkillsSection";
import ProjectsSection from "./content/projects-section/ProjectsSection";

function App() {
  return (
    <>
      <TypewriterHeading />
      <br />
      <HorizontalLine width="sm:w-xl" />
      <SocialIcons />
      <ThemeSwitcher />
      <br />
      <div className="main-body flex flex-col lg:flex-row gap-8 m-5">
        <img src="./meghibli2.png" className="w-md h-md"></img>
        <Blurb />
        {/*<Blurb
          invisible="invisible"
          border="border-solid border-white border-2"
        />*/}
      </div>
      <HorizontalLine width="sm:w-6xl" />
      <SkillsSection />
      <HorizontalLine width="sm:w-6xl" />
      <ProjectsSection />
      <HorizontalLine width="sm:w-6xl" />
      <Footer />
    </>
  );
}

export default App;
