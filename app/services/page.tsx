import { Metadata } from "next";
import ServicesSection from "../features/ServicesSection";

export const metadata: Metadata = {
  title: "Usługi LubTech – technologie chemiczne, R&D i procesy technologiczne",
  description:
    "Poznaj usługi LubTech: procesy technologiczne, projektowanie rozwiązań inżynieryjnych, formulacje produktowe oraz badania i rozwój (R&D) w chemii. Syntezy, separacje, destylacje, ekstrakcje i nowoczesne technologie.",
  keywords: [
    "pomoc badania i rozwój",
    "pomoc R&D",
    "badania i rozwój",
    "technologie",
    "technologia chemiczna",
    "inżynieria chemiczna",
    "kosmetyki",
    "projektowanie",
    "przemysł",
    "formulacje produktowe",
    "chemia nieorganiczna",
    "chemia organiczna",
    "syntezy",
    "syntezy chemiczne",
    "destylacja",
    "ekstrakcja",
    "oczyszczanie",
    "krystalizacja",
    "analiza MS",
    "PSD particle size distribution",
    "mielenie",
    "mieszanie",
    "miedzalnik"
  ],
  openGraph: {
    title: "Usługi LubTech – technologie chemiczne i procesy R&D",
    description:
      "Odkryj ofertę LubTech: procesy technologiczne, projektowanie rozwiązań inżynieryjnych, formulacje dla przemysłu i wsparcie badawczo-rozwojowe (R&D).",
    url: "https://www.lubtech.net.pl/services",
    siteName: "LubTech",
    images: [
      {
        url: "/og-services.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Usługi LubTech – technologie chemiczne i procesy R&D",
    description:
      "Oferta LubTech: procesy technologiczne, R&D, syntezy chemiczne, ekstrakcje, destylacje, analiz i rozwiązania inżynieryjne dla przemysłu.",
    images: ["/og-services.png"],
  },
};

export default function Page() {
  return (
  <ServicesSection />
  );
}
