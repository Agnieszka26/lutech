"use client";
import { useTranslation } from "react-i18next";
import HeroArea from "./features/HeroArea";
import Features from "./features/Features";
import ServicesSection from "./features/ServicesSection";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div>
      {t("nav.home")}
      <HeroArea />
      <Features />
      <ServicesSection />
    </div>
  );
}
