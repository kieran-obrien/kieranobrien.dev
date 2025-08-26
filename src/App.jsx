import "./css/app.css";
import Divider from "./content/Divider";
import StackSection from "./content/stack-section/StackSection";
import StudiesSection from "./content/studies-section/StudiesSection";
import AltProjectsSection from "./content/projects-section/AltProjectsSection";
import Footer from "./structure/Footer";
import Header from "./structure/Header";

function App() {
  return (
    <div className="w-full overflow-x-hidden h-screen overflow-y-scroll text-shadow-sm/5 py-5 px-5 xs:px-10 sm:px-20 md:px-40 lg:px-60 xl:px-80">
      <Header />
      <Divider heading="me" />
      <div>
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
      <Divider heading="work" />
      <AltProjectsSection />
      <Divider heading="study" />
      <StudiesSection />
      <Footer />
    </div>
  );
}

export default App;
