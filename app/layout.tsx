import type { Metadata } from "next";
import { Geist, Geist_Mono, Qwitcher_Grypen } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import "./i18n/i18n";
import React from "react";
import Footer from "./components/footer/Footer";
import Script from "next/script";

const qwitcherGtypen = Qwitcher_Grypen({
  weight: "400",
  variable: "--font-qwitcher-grypen",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LubTech - the best technologies are created in Lublin",
  description:
    "Łączymy naukę z przemysłem, projektujemy i rozwijamy technologie chemiczne dla firm.",
  openGraph: {
    title: "LubTech - the best technologies are created in Lublin",
    description:
      "Łączymy naukę z przemysłem, projektujemy i rozwijamy technologie chemiczne dla firm.",
    url: "https://www.lubtech.net.pl//",
    siteName: "LubTech",
    images: [
      {
        url: "/og-image.png", // umieść plik w public/
        width: 1200,
        height: 630,
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LubTech - the best technologies are created in Lublin",
    description:
      "Łączymy naukę z przemysłem, projektujemy i rozwijamy technologie chemiczne dla firm.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJson = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LubTech",
    legalName: "LubTech",
    url: "https://www.lubtech.net.pl/",
    logo: "https://www.lubtech.net.pl/logo.png",
    description:
      "Łączymy naukę z przemysłem, projektujemy i rozwijamy technologie chemiczne dla firm.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        name: "Agnieszka Lipa",
        email: "agnieszka.lipa@lubtech.net.pl",
        telephone: "+48 531 799 843",
        areaServed: "PL",
      },
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        name: "Grzegorz Wroński",
        email: "grzegorz.wronski@lubtech.net.pl",
        telephone: "+48 602 276 001",
        areaServed: "PL",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lublin",
      addressCountry: "PL",
    },
  };

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "LubTech",
    image: "https://www.lubtech.net.pl/logo.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lublin",
      addressCountry: "PL",
    },
    telephone: "+48 531 799 843",
    url: "https://www.lubtech.net.pl/",
  };
  const websiteJson = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "LubTech",
    url: "https://www.lubtech.net.pl/",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.lubtech.net.pl/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const faqJson = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Na czym polega pomoc LubTech w obszarze badań i rozwoju (R&D)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oferujemy kompleksowe wsparcie badawczo-rozwojowe, obejmujące analizę technologii, projektowanie procesów, opracowywanie nowych produktów oraz wdrażanie rozwiązań chemicznych w przemyśle. Pomagamy zarówno w tworzeniu nowych technologii, jak i optymalizacji istniejących."
      }
    },
    {
      "@type": "Question",
      "name": "Jakiego rodzaju pomoc R&D świadczy LubTech?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Realizujemy usługi R&D związane z syntezami chemicznymi, opracowaniem formulacji produktowych, doborem surowców, projektowaniem technologii, optymalizacją procesów oraz przygotowaniem produktów do wdrożenia przemysłowego."
      }
    },
    {
      "@type": "Question",
      "name": "W jakich technologiach specjalizuje się LubTech?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Specjalizujemy się w technologiach chemicznych i inżynierii chemicznej, obejmujących procesy syntezy, destylacji, ekstrakcji, oczyszczania, krystalizacji, mielenia, mieszania oraz analiz procesowych takich jak MS czy PSD (particle size distribution)."
      }
    },
    {
      "@type": "Question",
      "name": "Czy LubTech zajmuje się technologią chemiczną i inżynierią chemiczną?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tak, projektujemy i rozwijamy technologie chemiczne oraz procesy inżynierii chemicznej. Tworzymy rozwiązania dla przemysłu chemicznego, kosmetycznego, materiałowego i pokrewnych gałęzi produkcji."
      }
    },
    {
      "@type": "Question",
      "name": "Czy LubTech projektuje formulacje produktowe, np. dla kosmetyków?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tak, tworzymy formulacje produktowe dla branży kosmetycznej i chemicznej. Opracowujemy receptury od podstaw, optymalizujemy skład, dobieramy surowce oraz przygotowujemy produkty do testów i wdrożeń przemysłowych."
      }
    },
    {
      "@type": "Question",
      "name": "Czy LubTech realizuje syntezy chemiczne?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tak, wykonujemy syntezy chemiczne oraz opracowujemy metody syntezy w obszarze chemii organicznej i nieorganicznej. Oferujemy również rozwój i optymalizację istniejących procesów syntezy."
      }
    },
    {
      "@type": "Question",
      "name": "Jakie procesy jednostkowe są dostępne w LubTech?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Realizujemy procesy takie jak destylacja, ekstrakcja, oczyszczanie, krystalizacja, mieszanie, mielenie oraz przygotowywanie próbek do analiz. Zajmujemy się także projektowaniem procedur technologicznych na skalę laboratoryjną i półtechniczną."
      }
    },
    {
      "@type": "Question",
      "name": "Czy LubTech wykonuje analizy MS lub PSD (particle size distribution)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tak, pracujemy z analizami MS oraz PSD w kontekście rozwoju technologicznego, procesowego i jakościowego. Pomagamy w interpretacji wyników oraz dostosowaniu procesu do określonych parametrów."
      }
    },
    {
      "@type": "Question",
      "name": "Co to jest miedzalnik i czy LubTech pracuje z tym urządzeniem?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Miedzalnik to urządzenie do intensywnego mieszania i homogenizacji substancji chemicznych lub kosmetycznych. Tak, pracujemy z procesami mieszania i miedzalnikami w kontekście opracowywania oraz optymalizacji technologii."
      }
    }
  ]
}

  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${qwitcherGtypen.variable} `}
      >
        <Navbar />
        <div className="pt-[100px]">{children}</div>
        <Footer />
      </body>
      <Script
        id="ld-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJson) }}
      />
      <Script
        id="ld-localbusiness"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJson) }}
      />
      <Script
        id="ld-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJson) }}
      />

      <Script
        id="ld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
      />
    </html>
  );
}
