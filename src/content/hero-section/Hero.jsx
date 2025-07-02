import Blurb from "../Blurb";
import { useState } from "react";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="main-body m-5">
      <div className="md:hidden relative flex items-center justify-center">
        <img
          src="./meghibli2.png"
          className={`w-md h-md transition-opacity duration-300 ${
            imageLoaded ? "opacity-25" : "opacity-10"
          }`}
          onLoad={handleImageLoad}
          loading="eager"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Blurb />
        </div>
      </div>
      <div className="hidden md:flex items-center flex-col lg:flex-row gap-8">
        <img
          src="./meghibli2.png"
          className={`w-md h-md transition-opacity duration-300 ${
            imageLoaded ? "opacity-100" : "opacity-30"
          }`}
          onLoad={handleImageLoad}
          loading="eager"
        />
        <Blurb />
      </div>
    </div>
  );
};

export default Hero;
