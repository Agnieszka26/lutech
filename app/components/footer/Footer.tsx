'use client'; 
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import lutech_logo from "../../assets/logo_lutech.svg";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-dark-blue text-white py-6 text-xl">
      <div className="container mx-auto mb-4 text-center flex flex-col md:flex-row md:justify-between px-24 items-center gap-4">
                  <div className="bg-white rounded-full flex items-center justify-center m-2 md:m-10 w-24 h-24">
            <Image src={lutech_logo} alt="LUBTECH" className="w-full h-full" />
          </div>
        <div className="grid">
          <Link href={"/about"}> {t("nav.about")} </Link>
          <Link href={"/services"}>{t("nav.services")} </Link>
          <Link href={"/projects"}>{t("nav.projects")}</Link>
        </div>
        <div className="grid">
          <Link href={"/about"}> {t("footer.privacy")}</Link>
          <Link href={"/#services"}> {t("footer.terms")} </Link>
        </div>

        <div>
          ul. Chemiczna 1, <br /> 20-000 Lublin, <br /> Polska
        </div>
      </div>
      <div className="container mx-auto text-center text-gray-300">
        <p>
          &copy; {new Date().getFullYear()} LuTech. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
