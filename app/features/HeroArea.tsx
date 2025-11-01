import Image from "next/image";
import bg from "../assets/bg.png";
import { useTranslation } from "react-i18next";
const HeroArea = () => {
  const { t } = useTranslation();
  return (
    <main className="hero  h-screen ">
      <Image src={bg} alt="Background" className="hero-background h-screen w-screen" />
      <div>

      <h1 className="text-2xl md:text-5xl font-bold text-white m-2 md:m-10">
        Łączymy naukę z przemysłem. Projektujemy i rozwijamy technologie
        chemiczne.
      </h1>
      <p className="text-white m-2 md:m-10">
        Od koncepcji laboratoryjnej po wdrożenie przemysłowe — wspieramy firmy w
        opracowywaniu procesów, formulacji i rozwiązań technologicznych
        dopasowanych do potrzeb produkcji.
      </p>
      <button className="btn mx-2 md:mx-10">skontaktuj się z nami</button> 
      </div>

    
    </main>
  );
};

export default HeroArea;
