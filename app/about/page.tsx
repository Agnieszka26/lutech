'use client'
import Image from "next/image";
import img_flow from "../assets/img_flow.png";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto px-4 py-12  bg-gray-100">
      <h3 className=" text-6xl font-bold text-dark-blue">{t("nav.about")}</h3>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-6">
        {/* Left - Image */}
        <div className="w-full md:w-1/3">
          <Image
            src={img_flow}
            alt="Flow of work"
            className="object-cover scale-50 rounded-2xl overflow-hidden shadow-md"
          />
        </div>

        {/* Right - Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-dark-blue">
            {t("about.title")}
          </h2>
          <p className="text-base text-neutral/80 leading-relaxed mb-4">
            {t("about.text1")}
          </p>
          <p className="text-base text-neutral/80 leading-relaxed mb-4">
            {t("about.text2")}
          </p>
          <p className="text-base text-neutral/80 leading-relaxed ">
            {t("about.text3")}
          </p>
        </div>
      </div>
    </section>
  );
}
