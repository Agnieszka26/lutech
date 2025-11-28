'use client';
import img_1 from "../assets/images/1.jpg";
import img_2 from "../assets/images/2.jpg";
import img_3 from "../assets/images/3.jpg";
import img_4 from "../assets/images/4.jpg";
import Image from "next/image";
import { DiagramAnimated } from "./MindMap";
import { useTranslation } from "react-i18next";


const ServicesSection = () => {
  const {t} = useTranslation();
  const servicesData = [
    {
      title: t("services.processes"),
      id: "processes",
      description:t("services.processes_desc"),
      icon: img_1,
    },
    {
      title: t("services.solutions"),
      id: "solutions",
      description: t("services.solutions_desc"),
      icon: img_2,
    },
    {
      title: t("services.formulations"),
      id: "formulations",
      description: t("services.formulations_desc"),
      icon: img_3,
    },
    {
      title: t("services.rd"),
      id: "rd",
      description: t("services.rd_desc"),
      icon: img_4,
    },
  ];


  return (
    <section className="container mx-auto px-4 py-12" id="services">
      <h2 className="text-4xl font-bold mb-10 text-center">
       { t("services.title")}
      </h2>
      <p className="text-center pb-7">
        {t("services.subtitle")}
      </p>
      <DiagramAnimated />

      <div className="flex flex-col space-y-16">
        {servicesData.map(({ icon, title, description, id }, index) => (
          <div
            id={id}
            key={index}
            className={`flex flex-col md:flex-row items-center md:items-start md:space-x-10 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Obrazek */}
            <div className="relative w-full md:w-1/2 aspect-square rounded-2xl overflow-hidden shadow-lg">
              <Image src={icon} alt={title} fill className="object-cover" />
            </div>

            {/* Tekst */}
            <div className="w-full md:w-1/2 mt-6 md:mt-0 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4 text-dark-blue">{title}</h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line ">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
