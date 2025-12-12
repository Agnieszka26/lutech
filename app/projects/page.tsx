import ProjectPage from "../components/ProjectsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projekty LubTech – portfolio technologiczne i badawczo-rozwojowe",
  description:
    "Zobacz projekty LubTech: wdrożenia technologiczne, rozwiązania R&D, procesy chemiczne, syntezy, separacje i innowacje przemysłowe. Nasze case studies i efekty prac badawczo-rozwojowych.",
  keywords: [
    "projekty technologiczne",
    "portfolio projektów",
    "wdrożenia R&D",
    "badania i rozwój",
    "technologie chemiczne",
    "inżynieria chemiczna",
    "innowacje przemysłowe",
    "syntezy chemiczne",
    "procesy technologiczne",
    "separacje",
    "destylacja w projektach",
    "krystalizacja projektów",
    "analiza PSD",
    "analiza MS",
    "formulacje produktowe",
    "przemysłowe wdrożenia",
    "case studies"
  ],
  openGraph: {
    title: "Projekty LubTech – portfolio technologiczne i badawczo-rozwojowe",
    description:
      "Przegląd projektów firmy LubTech: wdrożenia technologiczne, badania i rozwój (R&D), innowacje procesowe i chemiczne oraz ich wyniki.",
    url: "https://www.lubtech.net.pl/projects",
    siteName: "LubTech – Projekty",
    images: [
      {
        url: "/og-projects.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projekty LubTech – portfolio technologiczne i badawczo-rozwojowe",
    description:
      "Zobacz projekty LubTech: wdrożenia R&D, procesy technologiczne i rozwiązania przemysłowe.",
    images: ["/og-projects.png"],
  },
};

const Page = () => {
  
  return <ProjectPage />
};

export default Page;
