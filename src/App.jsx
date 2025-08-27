import "./css/app.css";
import Divider from "./content/Divider";
import StackSection from "./content/stack-section/StackSection";
import StudiesSection from "./content/studies-section/StudiesSection";
import AltProjectsSection from "./content/projects-section/AltProjectsSection";
import Footer from "./structure/Footer";
import Header from "./structure/Header";
import Blurb from "./content/Blurb";

function App() {
  return (
    <div className="w-full overflow-x-hidden h-screen overflow-y-scroll text-shadow-sm/5 py-5 px-5 xs:px-10 sm:px-20 md:px-40 lg:px-60 xl:px-80 text-shadow-md/5">
      <Header />
      <Divider heading="me" />
      <Blurb />
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
