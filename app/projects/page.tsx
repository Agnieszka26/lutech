'use client';
import { useTranslation } from "react-i18next";
import TestimonialSection from "../components/TestimonialSection";

const Page = () => {
  const {t} = useTranslation();
  return (
    <div className="container mx-auto w-screen">
      <h3 className="text-3xl font-bold mb-4 text-center text-dark-blue">
      {t("testimonials.title")}
      </h3>
      <p className="text-dark-blue text-center">{t("testimonials.subtitle")}</p>
      <TestimonialSection />
    </div>
  );
};

export default Page;
