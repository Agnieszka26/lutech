"use client";
import Image from "next/image";
import img_flow from "../assets/img_flow.png";
import { useTranslation } from "react-i18next";
import Accordion from "../components/Accordion";
import bg from "../assets/bg.png";
import image_11 from "../assets/images/11.avif";
import SlideIn from "../components/SlideIn";
export default function HomePage() {
  const { t } = useTranslation();
  const questions = [
    { q: t("about.question1"), a: t("about.text1") },
    { q: t("about.question2"), a: t("about.text2") },
    { q: t("about.question3"), a: t("about.text3") },
    { q: t("about.question4"), a: t("about.text4") },
    { q: t("about.question5"), a: t("about.text5") },
  ];

  return (
    <section className="bg-linear-to-r from-dark-blue to-light-blue">
      <div className="container mx-auto px-4 py-12">
        <SlideIn>

        <h3 className=" text-6xl font-bold text-white py-4">
          {t("nav.about")}
        </h3>
        </SlideIn>

          <div className="">
            {questions.map(({ q, a }, index) => {
              return <SlideIn key={index} delay={index *0.4}><Accordion question={q} content={a} /></SlideIn>;

            })}
          </div>

        <SlideIn delay={2}>
          <Image
            src={image_11}
            alt="About Us"
            className="mt-12 rounded-lg shadow-lg mx-auto "
            width={800}
            height={150}
          />
        </SlideIn>
      </div>
    </section>
  );
}
