"use client";
import HeroArea from "./features/HeroArea";
import Features from "./features/Features";
import CtaSection from "./features/CtaSection"; 

export default function HomePage() {
  return (
    <div>
      <HeroArea />
      <Features />
      <CtaSection />
    </div>
  );
}
