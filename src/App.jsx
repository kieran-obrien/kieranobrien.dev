import { useState } from "react";
import "./css/app.css";
import TypewriterHeading from "./structure/TypewriterHeading";
import SocialIcons from "./content/SocialIcons";
import Footer from "./structure/Footer";
import ButtonTest from "./ui/ButtonTest";
import Blurb from "./content/Blurb";
import ThemeSwitcher from "./ui/ThemeSwitcher";
import SkillsSection from "./content/SkillsSection";
import Radio from "./content/TestRadio";

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
        <img src="../public/meghibli2.png" className="w-md h-md"></img>
      </div>
      {/*<ButtonTest />*/}
      <hr className="mx-auto w-xs sm:w-6xl" />
      <SkillsSection />
      <Footer />
    </>
  );
}

export default App;
