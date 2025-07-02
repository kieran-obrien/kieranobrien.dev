import CertModal from "./CertModal";
import Footer from "../../structure/Footer";

const CertsSection = () => {
  return (
    <section id="projects" className="flex flex-col justify-start items-center flex-wrap">
      <h2 className="text-3xl sm:text-4xl font-bold font-[IBM_Plex_Mono] text-center my-4 lg:my-8 mb-12">
        Education / Certifications
      </h2>
      <div className="grid grid-cols-2 place-items-center lg:grid-cols-3 gap-10 sm:gap-18 lg:gap-30 mx-5 mb-5 ">
        <CertModal certName="Harvard/edX CS50X" certImg="./CS50X.jpg" />
        <CertModal certName="Harvard/edX CS50P" certImg="./CS50P.jpg" />
        <CertModal certName="Mimo Front End Dev" certImg="./MimoFE.jpg" />
        <CertModal certName="Mimo JavaScript" certImg="./MimoJS.jpg" />
        <CertModal
          hasNoCert={true}
          certName="Northcoders Software Dev w/ JS"
          certImg="./PlaceholderCert.jpg"
        />
        <CertModal
          hasNoCert={true}
          certName="Linux Foundation Certified IT Associate (In Progress)"
          certImg="./PlaceholderCert.jpg"
        />
      </div>
    </section>
  );
};

export default CertsSection;
