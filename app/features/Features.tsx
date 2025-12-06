"use client";
import { useTranslation } from "react-i18next";
import doswiadczenie_i_wiedza from "../assets/icons/doswiadczenie_i_wiedza.svg";
import kompleksowe from "../assets/icons/kompleksowe_podejscie.svg";
import wsparcie from "../assets/icons/wsparcie_na_etapie.svg";
import zorientowanie from "../assets/icons/zorientowane_na_kienta.svg";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowCircleDown } from "react-icons/fa";
import SlideIn from "../components/SlideIn";

const Features = () => {
  const { t } = useTranslation();
  const featuresData = [
    {
      title: t("feature.experience.title"),
      description: t("feature.experience.description"),
      icon: doswiadczenie_i_wiedza,
    },
    {
      title: t("feature.comprehensive.title"),
      description: t("feature.comprehensive.description"),
      icon: kompleksowe,
    },
    {
      title: t("feature.customer_oriented.title"),
      description: t("feature.customer_oriented.description"),
      icon: zorientowanie,
    },
    {
      title: t("feature.support.title"),
      description: t("feature.support.description"),
      icon: wsparcie,
    },
  ];
  return (
    <section>
      <div className="md:flex pt-60 md:p-8 md:gap-4">
        {featuresData.map(({ icon, title, description }, index) => (
          <SlideIn key={index} delay={index * 0.2} className="feature-item flex flex-col items-center p-4 max-w-sm mx-auto md:mx-0 md:w-1/4">

          <div
          key={index}
          className="feature-item flex flex-col items-center p-4 max-w-sm mx-auto "
          >
            <Image
              src={icon}
              alt={title}
              className="feature-icon w-36 h-36"
              style={{ stroke: "red", fill: "red" }}
            />
            <p className="text-center font-bold mt-2 text-2xl ">{title}</p>
            <p className="text-center text-xl">{description}</p>
          </div>
              </SlideIn>
        ))}
      </div>
      <div className="w-full flex justify-center mt-8 animate-bounce ">
        <FaArrowCircleDown className="text-light-blue h-20 w-20" />
      </div>
      <div className="w-full flex justify-center mt-8 mb-16">
        <Link
          className="btn text-xl md:text-2xl mx-2 py-6 md:mx-10 bg-primary-orange  hover:bg-orange-700 text-white px-8 "
          href={"/services"}
        >
          {t("feature.subtitle")}
          <FaArrowRightLong className="text-white" />
        </Link>
      </div>
    </section>
  );
};

export default Features;
