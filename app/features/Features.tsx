'use client';
import { useTranslation } from "react-i18next";
import doswiadczenie_i_wiedza from "../assets/icons/doswiadczenie_i_wiedza.svg";
import kompleksowe from "../assets/icons/kompleksowe_podejscie.svg";
import wsparcie from "../assets/icons/wsparcie_na_etapie.svg";
import zorientowanie from "../assets/icons/zorientowane_na_kienta.svg";
import Image from "next/image";

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
    <section className="md:flex pt-24 md:p-2">
      {featuresData.map(({ icon, title, description }, index) => (
        <div
          key={index}
          className="feature-item flex flex-col items-center p-4 "
        >
          <Image
            src={icon}
            alt={title}
            className="feature-icon w-36 h-36"
            style={{ stroke: "red", fill: "red" }}
          />
          <p className="text-center font-bold mt-2 ">{title}</p>
          <p className="text-center">{description}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
