import React from "react";
import { LanguageSwitcher } from "./navbar/Languagechanger";


const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">LuTech</a>
      </div>
      <div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>About Us</a>
          </li>
          <LanguageSwitcher />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
