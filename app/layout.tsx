import type { Metadata } from "next";
import { Geist, Geist_Mono, Qwitcher_Grypen } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import "./i18n/i18n";
import React from "react";
import Footer from "./components/footer/Footer";
import Image from "next/image";
import bg from "./assets/bg.png";

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
  title: "LUTech",
  description: "LUTech the best technologies are created in Lublin",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${qwitcherGtypen.variable}`}
      >
        <Navbar />
        <div className="pt-24">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
