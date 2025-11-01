import React from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import Link from "next/link";


const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" href="/">LuTech</Link>
      </div>
      <div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <LanguageSwitcher />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
