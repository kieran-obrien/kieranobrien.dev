import CertModal from "./CertModal";
import Footer from "../../structure/Footer";

const CertsSection = () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-start items-center snap-start lg:h-screen"
    >
      <h2 className="text-3xl sm:text-4xl font-bold font-[IBM_Plex_Mono] text-center my-4 mb-12">
        Certifications
      </h2>
      <div className="grid grid-cols-2 gap-10 sm:gap-18 lg:gap-30 mx-5 mb-5 ">
        <CertModal certName="CS50P" certImg="./CS50P.jpg" />
        <CertModal certName="CS50" certImg="./cs50p.png" />
        <CertModal certName="CS50" certImg="./cs50p.png" />
        <CertModal certName="CS50" certImg="./cs50p.png" />
      </div>
    </section>
  );
};

export default CertsSection;
