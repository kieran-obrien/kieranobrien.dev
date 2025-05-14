import { useState } from "react";
import "./App.css";
import TypewriterHeading from "./TypewriterHeading";
import SocialIcons from "./SocialIcons";
import Footer from "./Footer";
import ButtonTest from "./ButtonTest";
import Blurb from "./Blurb";
import ThemeSwitcher from "./ThemeSwitcher";

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
        <Blurb
          invisible="invisible"
          border="border-solid border-white border-2"
        />
      </div>
      {/*<ButtonTest />*/}
      <Footer />
    </>
  );
}

export default App;
