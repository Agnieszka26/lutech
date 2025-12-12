import { Metadata } from "next";
import AboutPage from "../components/AboutPage";

export const metadata: Metadata = {
  title: "LubTech – kim jesteśmy, misja i doświadczenie zespołu | LubTech",
  description:
    "LubTech to zespół ekspertów z doświadczeniem w opracowywaniu i wdrażaniu technologii dla przemysłu chemicznego i pokrewnych. Łączymy wiedzę naukową z praktyką przemysłową, aby zwiększać efektywność i bezpieczeństwo procesów.",
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
    "miedzalnik",
  ],
  openGraph: {
    title: "LubTech – kim jesteśmy, misja i doświadczenie zespołu | LubTech",
    description:
      "LubTech to zespół ekspertów z doświadczeniem w opracowywaniu i wdrażaniu technologii dla przemysłu chemicznego i pokrewnych. Łączymy wiedzę naukową z praktyką przemysłową, aby zwiększać efektywność i bezpieczeństwo procesów.",
    url: "https://www.lubtech.net.pl/about",
    siteName: "LubTech",
    images: [
      {
        url: "/og-about.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: "LubTech – kim jesteśmy, misja i doświadczenie zespołu | LubTech",
    description:
      "LubTech to zespół ekspertów z doświadczeniem w opracowywaniu i wdrażaniu technologii dla przemysłu chemicznego i pokrewnych. Łączymy wiedzę naukową z praktyką przemysłową, aby zwiększać efektywność i bezpieczeństwo procesów.",
    images: ["/og-about.png"],
  },
};

const ProjectPage = () => {
  return <AboutPage />;
};

export default ProjectPage;
