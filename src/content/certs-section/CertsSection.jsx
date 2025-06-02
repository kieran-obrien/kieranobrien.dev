import CertModal from "./CertModal";

const CertsSection = () => {
  return (
    <section id="projects" className="py-20 sm:px-5 flex-col">
      <h2 className="text-4xl font-bold font-[IBM_Plex_Mono] text-center mb-12">
        Certifications
      </h2>
      <div className="flex justify-around flex-wrap w-full">
        <CertModal certName="CS50X" certImg="./cs50p.png" />
        <CertModal certName="CS50P" certImg="./cs50p.png" />
        <CertModal certName="CS50P" certImg="./cs50p.png" />
        <CertModal certName="CS50P" certImg="./cs50p.png" />
      </div>
    </section>
  );
};

export default CertsSection;
