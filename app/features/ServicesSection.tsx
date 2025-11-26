import img_1 from "../assets/images/1.jpg";
import img_2 from "../assets/images/2.jpg";
import img_3 from "../assets/images/3.jpg";
import img_4 from "../assets/images/4.jpg";
import Image from "next/image";
import { DiagramAnimated } from "./MindMap";

const servicesData = [
  {
    title: "Procesy technologiczne",
    id: "processes",
    description: `Przygotowujemy ścieżeki syntezy organicznej  i nieorganicznej, \n
Optymalizujemy parametry, zwiększamy wydajność, czystość produktu,\n
Projektujemy procesy wieloetapowych i sprzężonych,\n
Wykonujemy separacje wieloskładnikowe: oczyszczanie na kolumnach chromatograficznych preparatywnych, krystalizacje przez chłodzenie, sublimacje, ekstrakcje LLE, SLE, SFE, Soxhlet, destylacje frakcyjną, azeotropową, pod obniżonym ciśnieniem, destylację z parą wodną, hydrodestylacje oraz suszenie i odzysk rozpuszczalników,
`,
    icon: img_1,
  },
  {
    title: "Rozwiązania inżynieryjne",
    id: "solutions",
    description: `Wykonujemy projekt koncepcyjny i technologiczny urządzeń, \n
Projektujemy kompletne linie przemysłowe, \n
Projektujemy hale do produkcji chemicznej,\n
dobieramy materiały i parametry pracy,\n
Przygotowujemy schematy technologiczne PFD, P&ID,\n
Doradzamy przy modernizacji i wdrożeniach, uruchomieniach zaprojektowanych przez nas linii produkcyjnych, \n
Wspieramy w uzyskaniu pozwoleń środowiskowych \n

`,
    icon: img_2,
  },
  {
    title: "Formulacje produktowe",
    id: "formulations",
    description: `Dla przemysłów: kosmetycznych, farmaceutycznych, nawozowych, paszowych, \n
Opracowujemy i optymalizujemy receptury w oparciu o wytyczne klienta, \n
Wykonujemy testy stabilności, zgodności, \n
Opracowujemy technologie wytwarzania oraz przygotowujemy dokumentacje technologiczne \n
`,
    icon: img_3,
  },
  {
    title: "Zlecone prace R&D",
    id: "rd",
    description: `Przygotowujemy i wdrażamy zespoły w przeglądy literaturowe,\n
Oferujemy badania i wsparcie przy projektach naukowych, wnioskach o dotacje, panelach ekspertów.\n
Wykonujemy analizy oraz raporty GCMS, 1H, 13C NMR, PSD.\n
`,
    icon: img_4,
  },
];
const ServicesSection = () => {
  return (
    <section className="container mx-auto px-4 py-12" id="services">
      <h2 className="text-4xl font-bold mb-10 text-center">
        Mapa kompetencji LuTech
      </h2>
      <p className="text-center pb-7">
        Zobacz, jak łączymy wiedzę naukową, technologię procesową i inżynierję w
        praktyce.
      </p>
      <DiagramAnimated />

      <div className="flex flex-col space-y-16">
        {servicesData.map(({ icon, title, description, id }, index) => (
          <div
            id={id}
            key={index}
            className={`flex flex-col md:flex-row items-center md:items-start md:space-x-10 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Obrazek */}
            <div className="relative w-full md:w-1/2 aspect-square rounded-2xl overflow-hidden shadow-lg">
              <Image src={icon} alt={title} fill className="object-cover" />
            </div>

            {/* Tekst */}
            <div className="w-full md:w-1/2 mt-6 md:mt-0 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4 text-dark-blue">{title}</h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line ">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
