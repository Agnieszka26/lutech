"use client";
import Image from "next/image";
import image_16 from "../assets/images/16.webp" 
// import { useTranslation } from "react-i18next";


export default function HomePage() {
  // const { t } = useTranslation();

  return (
    <section className="container mx-auto px-4 py-12">
      <h3 className="py-36 text-6xl font-bold"> O nas</h3>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-6 py-16  bg-gray-100">
      {/* Left - Image */}
      <div className="w-full md:w-1/2">
        <div className="rounded-2xl overflow-hidden shadow-md">
          <Image
            src={image_16} 
            alt="Team collaborating at a laptop"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Right - Text */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-4 text-neutral">Nasza motywacja</h2>
        <p className="text-base text-neutral/80 leading-relaxed mb-4">
LuTech to zespół osób z doświadczeniem w opracowywaniu i wdrażaniu technologii dla przemysłu chemicznego i pokrewnych.
Naszym celem jest łączenie wiedzy naukowej z praktyką przemysłową, by tworzyć rozwiązania, które realnie zwiększają efektywność i bezpieczeństwo procesów.
        </p>
        <p className="text-base text-neutral/80 leading-relaxed mb-4">
Nasze obszary specjalizacji:
projektowanie procesów syntezy organicznej i nieorganicznej 
opracowywanie i optymalizacja formulacjii chemicznych 
ekstrakcja, krystalizacja, destylacja i separacje wieloskładnikowe 
projektowanie urządzeń procesowych i linii technologicznych 
dokumentacja technologiczna i wsparcie wdrożeniowe 
 
        </p>
                <p className="text-base text-neutral/80 leading-relaxed ">Działamy w modelu B2B, współpracując z firmami produkcyjnymi, R&D oraz działami technologicznymi w Polsce i Europie.
                </p>
      </div>
     </div>

    </section>
  );
}