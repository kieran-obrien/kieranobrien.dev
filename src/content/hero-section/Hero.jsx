import Blurb from "../Blurb";

const Hero = () => {
  return (
    <div className="main-body flex items-center flex-col lg:flex-row gap-8 m-5 ">
      <img src="./meghibli2.png" className="w-md h-md hidden sm:block "></img>
      <Blurb />
    </div>
  );
};

export default Hero;
