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
      <div className="flex justify-around flex-wrap w-full">
        <CertModal certName="CS50X" certImg="./cs50p.png" />
        <CertModal certName="CS50P" certImg="./cs50p.png" />
        <CertModal certName="CS50P" certImg="./cs50p.png" />
        <CertModal certName="CS50P" certImg="./cs50p.png" />
      </div>
      <Footer />
    </section>
  );
};

export default CertsSection;
