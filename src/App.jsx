import "./css/app.css";
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
      <hr className="mx-auto w-xs sm:w-xl" />
      <SocialIcons />
      <ThemeSwitcher />
      <div className="main-body flex flex-col lg:flex-row gap-8 m-5">
        <Blurb />
        {/*<Blurb
          invisible="invisible"
          border="border-solid border-white border-2"
        />*/}
        <img src="./meghibli2.png" className="w-md h-md"></img>
      </div>
      <hr className="mx-auto w-xs sm:w-6xl" />
      <SkillsSection />
      <hr className="mx-auto w-xs sm:w-6xl" />
      <ProjectsSection />
      <Footer />
    </>
  );
}

export default App;
