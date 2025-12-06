"use client";
import img_1 from "../assets/images/1.jpg";
import img_2 from "../assets/images/2.jpg";
import img_3 from "../assets/images/3.jpg";
import img_4 from "../assets/images/4.jpg";
import Image from "next/image";
import { DiagramAnimated } from "./MindMap";
import { useTranslation } from "react-i18next";
import SlideIn from "../components/SlideIn";
import SlideInRight from "../components/SlideInRight";

const ServicesSection = () => {
  const { t } = useTranslation();
  const servicesData = [
    {
      title: t("services.processes"),
      id: "processes",
      description: t("services.processes_desc"),
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
    <section className="container mx-auto md:pb-12" id="services">
      <h2 className="text-3xl font-bold mb-2 text-center text-white">
        {t("services.title")}
      </h2>
      <p className="text-center text-white pb-">{t("services.subtitle")}</p>
      <DiagramAnimated />

      <div className="flex flex-col space-y-16 pt-4">
        {servicesData.map(({ icon, title, description, id }, index) => (
          <div
            id={id}
            key={index}
            className={`flex flex-col md:flex-row items-center md:items-start md:space-x-10  p-4 ${
              index % 2 === 1 ? "md:flex-row-reverse " : "bg-gray-100"
            }`}
          >
            {/* Obrazek */}
            <SlideIn className="relative w-full md:w-1/2 md:h-[500px] aspect-square rounded-2xl overflow-hidden shadow-lg">

          
              <Image src={icon} alt={title} fill className="object-cover" />
            
            </SlideIn>

            {/* Tekst */}
            <SlideInRight className="w-full md:w-1/2 mt-6 md:mt-0 text-center md:text-left">

              <h3 className="text-3xl font-bold mb-4 text-dark-blue">
                {title}
              </h3>

              <p className="text-gray-700 leading-relaxed text-xl">
                {description.split("\n").map((line, i) => (
                  <span key={i} className="block">
                    <span className={"text-primary-orange"}>•</span> {line}
                  </span>
                ))}
              </p>
                </SlideInRight>
           
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
