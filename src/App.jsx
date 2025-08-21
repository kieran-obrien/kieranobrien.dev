import "./css/app.css";
import HorizontalLine from "./content/HorizontalLine";
import TypewriterHeading from "./structure/TypewriterHeading";
import SocialIcons from "./ui/SocialIcons";
import Divider from "./content/Divider";
import AltProjectsSection from "./content/projects-section/AltProjectsSection";
import { starstufSkills } from "./content/projects-section/ProjectSkills";

function App() {
  return (
    <div className="w-full overflow-x-hidden h-screen overflow-y-scroll">
      <div className="overflow-y-hidden">
        <TypewriterHeading />
        <SocialIcons />
      </div>
      <Divider heading="me"/>
      <div className="xl:mx-80">
        <p
          className={`block sm:m-16 leading-relaxed text-md sm:text-lg text-center text-shadow-md/5 text-[var(--fg)]`}
        >
          a junior software developer with a passion for building functional and
          user-focused applications. After over a decade of professional
          experience in a different field, I’ve leapt headfirst into tech,
          bringing with me a sharp eye for detail, strong problem-solving
          skills, and a relentlessly curious drive to learn. Whether it’s
          working with JavaScript, Python, or exploring the world of Linux and
          DevOps, I’m all about writing clean code that solves real world
          problems. Let’s build something great together!
        </p>
      </div>

      <Divider heading="projects" />
      <AltProjectsSection skills={starstufSkills} />
      <Divider heading="stack" />
      <Divider heading="studies" />
      {/*
      <HorizontalLine/>
      <SkillsSection />
      <HorizontalLine/>
      <ProjectsSection />
      <HorizontalLine/>
      <CertsSection />
      <ContactToast />
      <Footer /> */}
    </div>
  );
}

export default App;
