import "./css/app.css";
import HorizontalLine from "./content/HorizontalLine";
import TypewriterHeading from "./structure/TypewriterHeading";
import SocialIcons from "./ui/SocialIcons";
import Divider from "./content/Divider";
import CertsSection from "./content/certs-section/CertsSection";
import AltProjectsSection from "./content/projects-section/AltProjectsSection";
import { starstufSkills } from "./content/projects-section/ProjectSkills";
import StackSection from "./content/stack-section/StackSection";
import StudiesSection from "./content/studies-section/StudiesSection";

function App() {
  return (
    <div className="w-full overflow-x-hidden h-screen overflow-y-scroll mx-5">
      <div className="overflow-y-hidden  flex flex-col items-center justify-center mt-10 mb-5">
        <div className="mockup-code bg-neutral xl:mx-80">
          <pre data-prefix="$">
            <code>sudo apt get kieranobrien</code>
          </pre>
          <pre data-prefix="$">
            <code>sudo apt install kieranobrien</code>
          </pre>
          <pre data-prefix=">" className="text-error">
            <code>hiring new dev...</code>
          </pre>
          <pre data-prefix=">" className="text-success">
            <code>Done, no regrets!</code>
          </pre>
        </div>
        <SocialIcons />
      </div>
      <Divider heading="me" />
      <div className="xl:mx-80">
        <p
          className={`block ml-20 leading-relaxed text-md sm:text-lg text-end text-shadow-md/5`}
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
      <Divider heading="stack" />
      <StackSection />
      <Divider heading="studies" />
      <StudiesSection />
      {/*}
      <Divider heading="projects" />
      <AltProjectsSection skills={starstufSkills} /> */}
    </div>
  );
}

export default App;
