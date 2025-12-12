"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import lutech_logo from "../../assets/logo_lubtech.png";

const Footer = () => {
  const { t } = useTranslation();

  return (
<footer className="bg-dark-blue text-white py-10">
  <div className="container mx-auto flex flex-col items-center text-center gap-10 md:flex-row md:items-start md:text-left md:justify-between px-6">

    {/* Logo */}
    <div className="bg-white rounded-full flex items-center justify-center w-24 h-24 shrink-0">
      <Image
        src={lutech_logo}
        alt="LUBTECH"
        className="w-full h-full object-contain"
      />
    </div>

    {/* Linki – dwie kolumny */}
    <div className="flex gap-10">
      <div className="flex flex-col gap-2">
        <Link href="/about">{t("nav.about")}</Link>
        <Link href="/services">{t("nav.services")}</Link>
        <Link href="/projects">{t("nav.projects")}</Link>
      </div>

      <div className="flex flex-col gap-2">
        <Link href="/about">{t("footer.privacy")}</Link>
        <Link href="/#services">{t("footer.terms")}</Link>
      </div>
    </div>

    {/* Kontakt */}
    <div className="flex flex-col gap-4">
      <p className="text-xl font-semibold">Kontakt:</p>

      <div className="flex flex-col gap-4 text-base">
        <p>
          Agnieszka Lipa <br />
          agnieszka.lipa@lubtech.net.pl <br />
          +48 531 799 843
        </p>

        <p>
          Grzegorz Wroński <br />
          grzegorz.wroński@lubtech.net.pl <br />
          +48 602 276 001
        </p>
      </div>
    </div>

  </div>

  {/* Copyright */}
  <div className="container mx-auto mt-10 text-center text-gray-300 text-sm">
    &copy; {new Date().getFullYear()} LubTech. {t("footer.rights")}
  </div>
</footer>

  );
};

export default Footer;
