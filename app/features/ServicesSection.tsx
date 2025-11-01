import img_1 from "../assets/images/1.jpg";
import img_2 from "../assets/images/2.jpg";
import img_3 from "../assets/images/3.jpg";
import img_4 from "../assets/images/4.jpg";
import Image from "next/image";

const servicesData = [
  {
    title: "Procesy technologiczne",
    description:
      "Projektujemy i optymalizujemy procesy chemiczne. Zajmujemy się poszczególnymi etapami procesu od strony chemicznej jak i fizycznej. Wykonujemy: syntezy związków chemicznych, oczyszczanie związków przez destylację, wymianę jonową, odwróconą osmozę, krystalizację.",
    icon: img_1,
  },
  {
    title: "Rozwiązania inżynieryjne",
    description:
      "Tworzymy koncepcje urządzeń, układów procesowych i linii technologicznych dostosowane do wymagań produkcji. Pomagamy w projektowaniu hal do produkcji chemicznej, pozwoleniach środowiskowych oraz w uruchamianiu zaprojektowanych przez nas linii produkcyjnych.",
    icon: img_2,
  },
  {
    title: "Formulacje produktowe",
    description:
      "Opracowujemy formulacje gotowych produktów w oparciu o wytyczne klienta. Prowadzimy prace badawczo-rozwojowe dla przemysłu kosmetycznego, farmaceutycznego, nawozowego, paszowego i innych.",
    icon: img_3,
  },
  {
    title: "Zlecone prace R&D",
    description:
      "Jesteśmy w stanie wykonać przegląd literatury, prace badawcze w ustalonym zakresie oraz pomóc w napisaniu merytorycznej części projektu badawczego.",
    icon: img_4,
  },
];
const ServicesSection = () => {
  return (
    <section className="container mx-auto px-4 py-12" id="services">
      <h2 className="text-4xl font-bold mb-10 text-center">Czym się zajmujemy?</h2>

      <div className="flex flex-col space-y-16">
        {servicesData.map(({ icon, title, description }, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center md:items-start md:space-x-10 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Obrazek */}
            <div className="relative w-full md:w-1/2 aspect-square rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={icon}
                alt={title}
                fill
                className="object-cover"
              />
            </div>

            {/* Tekst */}
            <div className="w-full md:w-1/2 mt-6 md:mt-0 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">{title}</h3>
              <p className="text-gray-700 leading-relaxed">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
