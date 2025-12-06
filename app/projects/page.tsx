'use client';
import { useTranslation } from "react-i18next";
import TestimonialSection from "../components/TestimonialSection";
import SlideIn from "../components/SlideIn";

const Page = () => {
  const {t} = useTranslation();
  return (
    <div className=" pt-8 mx-auto  bg-[#0D1418]">
      <SlideIn>

      <h3 className="text-5xl font-bold mb-4 text-center text-white">
      {t("testimonial.title")}
      </h3>
      </SlideIn>
      <p className="text-white text-center text-2xl">{t("testimonial.subtitle")}</p>
      <TestimonialSection />
    </div>
  );
};

export default Page;
