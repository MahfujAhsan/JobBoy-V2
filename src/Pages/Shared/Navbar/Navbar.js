import React from "react";
import { Link } from "react-router-dom";
import BrandLogo from "../../../assets/Logos/BrandLogo.png";
import "../../../styles/styles.css";
import { TfiMenuAlt } from "react-icons/tfi";

// Menu__Items
const menuItems = (
  <>
    <li className="menu__item">
      <Link to="/talents">Talents</Link>
    </li>
    <li className="menu__item">
      <Link to="/influencers">Influencers</Link>
    </li>
    <li className="menu__item">
      <Link to="/micro-jobs">Microjobs</Link>
    </li>
    <li className="menu__item">
      <Link to="/post-an-ad">Post an Ad</Link>
    </li>
  </>
);

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 py-[15px]">
      <div className="w-full justify-between flex-row-reverse lg:navbar-end">
        <div className="dropdown flex-1 text-end">
          <label tabIndex={0} className="btn btn-primary lg:hidden">
            <TfiMenuAlt size={26} fill={"#fff"} />
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-200 rounded-box w-full"
          >
            {menuItems}
          </ul>
        </div>
        <Link className="flex-1" to="/">
          <img src={BrandLogo} alt="" />
        </Link>
      </div>
      <div className="lg:navbar-end hidden lg:flex">
        <ul className="menu__items__container">{menuItems}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
