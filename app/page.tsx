"use client";
import HeroArea from "./features/HeroArea";
import Features from "./features/Features";
import ServicesSection from "./features/ServicesSection";
import CtaSection from "./features/CtaSection"; 

export default function HomePage() {
  return (
    <div>
      <HeroArea />
      <Features />
      <ServicesSection />
      <CtaSection />
    </div>
  );
}
