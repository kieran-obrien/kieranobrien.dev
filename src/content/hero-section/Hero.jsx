import Blurb from "../Blurb";

const Hero = () => {
  return (
    <div className="main-body m-5">
      <div className="sm:hidden relative flex items-center justify-center">
        <img src="./meghibli2.png" className="w-md h-md opacity-25"></img>
        <div className="absolute inset-0 flex items-center justify-center">
          <Blurb />
        </div>
      </div>
      <div className="hidden sm:flex items-center flex-col lg:flex-row gap-8">
        <img src="./meghibli2.png" className="w-md h-md"></img>
        <Blurb />
      </div>
    </div>
  );
};

export default Hero;
