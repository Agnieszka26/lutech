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
  title: 'LubTech - the best technologies are created in Lublin',
  description: 'Łączymy naukę z przemysłem, projektujemy i rozwijamy technologie chemiczne dla firm.',
   openGraph: {
    title: 'LubTech - the best technologies are created in Lublin',
    description: 'Łączymy naukę z przemysłem, projektujemy i rozwijamy technologie chemiczne dla firm.',
    url: 'https://lutech-eight.vercel.app/',
    siteName: 'LubTech',
    images: [
      {
        url: '/og-image.png', // umieść plik w public/
        width: 1200,
        height: 630,
      }
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LubTech - the best technologies are created in Lublin',
    description: 'Łączymy naukę z przemysłem, projektujemy i rozwijamy technologie chemiczne dla firm.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
  
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ldJson = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LubTech",
    url: "https://lutech-eight.vercel.app/",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. Chemiczna 1",
      addressLocality: "Lublin",
      postalCode: "20-000",
      addressCountry: "PL",
    },
  };
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
        id="organization-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />
    </html>
  );
}
