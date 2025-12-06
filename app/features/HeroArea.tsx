import Image from "next/image";
import bg from "../assets/bg.png";
import { useTranslation } from "react-i18next";
import lutech_logo from "../assets/logo_lutech.svg";
import SlideIn from "../components/SlideIn";
import SlideInRight from "../components/SlideInRight";
const HeroArea = () => {
  const { t } = useTranslation();
  return (
    <main className="hero h-screen ">
      <Image
        src={bg}
        alt="Background"
        className="hero-background object-cover h-screen w-screen absolute -z-10"
      />
      <div className="pb-48 md:pb-56 h-screen text-center md:text-left">
        <div className="md:flex ">
          <div className="md:w-1/2">
            <SlideIn>
              <h2 className="text-5xl md:text-8xl font-bold m-2 md:m-10 text-primary-orange font-qwitcher-grypen ">
                The best technologies are created in Lublin
              </h2>
            </SlideIn>
            <SlideIn delay={0.5}>
              <h1 className="text-3xl md:text-5xl font-bold text-white m-2 md:m-10 md:leading-13">
                {t("hero.title")}
              </h1>
            </SlideIn>
            <SlideIn delay={1}>
              <p className="text-white md:text-2xl m-2 md:m-10">
                {t("hero.description")}
              </p>
            </SlideIn>
            <SlideIn delay={1.5}>
              <button className="btn text-xl md:text-2xl mx-2 py-6 md:mx-10 bg-primary-orange border-primary-orange hover:bg-orange-700 text-white">
                {t("hero.cta")}
              </button>
            </SlideIn>
          </div>
          <div>
            <SlideInRight delay={1.25}>
              <div className="bg-white rounded-full  flex items-center justify-center m-2 md:m-10 shadow-2xl">
                <Image
                  src={lutech_logo}
                  alt="LUBTECH"
                  className="w-full h-full"
                />
              </div>
            </SlideInRight>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroArea;
