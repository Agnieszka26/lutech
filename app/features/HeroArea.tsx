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
      <div className="pb-48 md:pb-56 h-screen text-center md:text-left">
        <div className="md:flex ">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-5xl font-bold text-white m-2 md:m-10">
              LubTech
            </h2>
            <h2 className="text-2xl md:text-3xl font-bold text-white m-2 md:m-10">
              {t("hero.slogan")}
            </h2>
            <h1 className="text-2xl md:text-3xl font-bold text-white m-2 md:m-10">
              {t("hero.title")}
            </h1>
            <p className="text-white m-2 md:m-10">{t("hero.description")}</p>
            <button className="btn mx-2 md:mx-10 bg-primary-orange border-primary-orange text-white">
              {t("hero.cta")}
            </button>
          </div>
          <div>
            <div className="bg-white rounded-full  flex items-center justify-center m-2 md:m-10 shadow-2xl">
              <Image src={lutech_logo} alt="LUBTECH" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroArea;
