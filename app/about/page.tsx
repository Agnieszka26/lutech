"use client";
import Image from "next/image";
import img_flow from "../assets/img_flow.png" 
// import { useTranslation } from "react-i18next";


export default function HomePage() {
  // const { t } = useTranslation();

  return (
    <section className="container mx-auto px-4 py-12  bg-gray-100">
      <h3 className=" text-6xl font-bold text-dark-blue"> O nas</h3>
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
        <h2 className="text-3xl font-bold mb-4 text-dark-blue">Nasza motywacja</h2>
        <p className="text-base text-neutral/80 leading-relaxed mb-4">
LuTech to zespół osób z doświadczeniem w opracowywaniu i wdrażaniu technologii dla przemysłu chemicznego i pokrewnych.
Naszym celem jest łączenie wiedzy naukowej z praktyką przemysłową, by tworzyć rozwiązania, które realnie zwiększają efektywność i bezpieczeństwo procesów.
        </p>
        <p className="text-base text-neutral/80 leading-relaxed mb-4">
Nasz zespół można opisać słowem balans. Jesteśmy połączeniem młodości i dojrzałości, spokoju i doświadczenia oraz ambicji i nieustannych wysiłków. Wśród członków mamy pracowników z ponad 10 letnim stażem na uczelni, ponad 20 letnim w przemyśle, a także aspirujące, młode, aczkolwiek już istotnie doświadczone jednostki. Wynikiem połączenia takich substratów jest zespół, którego ambicją jest dawać rozwiązania dla polskiego przemysłu a przy tym rozwijać się, uczyć, poszerzać horyzonty.

 
        </p>
                <p className="text-base text-neutral/80 leading-relaxed ">Jesteśmy typem „closerów”,  choć uwielbiamy samą drogę do celu, to zawsze finalizujemy swoje zadania. Wiele rozwiązanych problemów pozwoliło nam wyklarować schemat działania, który powtarzalnie przynosi bardzo dobre rezultaty. Jeśli nie korzystasz jeszcze z naszych usług, skorzystaj z naszego schematu ze swoim problemem: zagłębiamy temat, sprawdzamy hipotezy, nakierowujemy rozwiązanie i tworzymy projekt, potwierdzamy zgodność założeń przy skalowaniu i wdrażamy.
                </p>
      </div>
     </div>

    </section>
  );
}