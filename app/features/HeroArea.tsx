import Image from "next/image";
import bg from "../assets/bg.png";
import { useTranslation } from "react-i18next";
import lutech_logo from "../assets/logo_lutech.svg";
const HeroArea = () => {
  const { t } = useTranslation();
  return (
    <main className="hero h-screen ">
      <Image
        src={bg}
        alt="Background"
        className="hero-background object-cover h-screen w-screen"
      />
      <div className="pb-48 md:pb-56">
        <div className="bg-white rounded-full w-24 h-24 md:w-48 md:h-48 flex items-center justify-center m-2 md:m-10">
          <Image src={lutech_logo} alt="LUTECH" className="w-full h-full" />
        </div>
        <h2 className="text-2xl md:text-5xl font-bold text-white m-2 md:m-10">
          The best technologies are created in Lublin
        </h2>
        <h1 className="text-2xl md:text-5xl font-bold text-white m-2 md:m-10">
          Łączymy naukę z przemysłem. Projektujemy i rozwijamy technologie
          chemiczne.
        </h1>
        <p className="text-white m-2 md:m-10">
          Od koncepcji laboratoryjnej po wdrożenie przemysłowe — wspieramy firmy
          w opracowywaniu procesów, formulacji i rozwiązań technologicznych
          dopasowanych do potrzeb produkcji.
        </p>
        <button className="btn mx-2 md:mx-10">skontaktuj się z nami</button>
      </div>
    </main>
  );
};

export default HeroArea;
