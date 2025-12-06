"use client";
import { LanguageSwitcher } from "./LanguageSwitcher";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import lutech_logo from "../../assets/logo_lutech.svg";
import Image from "next/image";

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <div className="navbar bg-base-100 shadow-sm px-4 h-[100px] fixed top-0 z-50 ">
      <div className="flex-1">
        <Link href="/">
          <div className="bg-white rounded-full flex items-center justify-center m-2 md:m-10 w-24 h-24">
            <Image src={lutech_logo} alt="LUBTECH" className="w-full h-full" />
          </div>
        </Link>
      </div>

      {/* Mobile hamburger */}
      <div className="flex-none md:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-lg"
          >
            <li>
              <Link href="/about">{t("nav.about")}</Link>
            </li>
            <li>
              <Link href="/services">{t("nav.services")}</Link>
            </li>
            <li>
              <Link href="/projects">{t("nav.projects")}</Link>
            </li>
            <LanguageSwitcher />
          </ul>
        </div>
      </div>

      {/* Desktop menu */}
      <div className="flex-none hidden md:block">
        <ul className="menu menu-horizontal px-1 text-xl">
          <li>
            <Link href="/about">{t("nav.about")}</Link>
          </li>
          <li>
            <Link href="/services">{t("nav.services")}</Link>
          </li>
          <li>
            <Link href="/projects">{t("nav.projects")}</Link>
          </li>
          <LanguageSwitcher />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
