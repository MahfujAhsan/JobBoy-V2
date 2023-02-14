import React, { useContext } from "react";
import { Link } from "react-router-dom";
import BrandLogo from "../../../assets/Logos/BrandLogo.png";
import "../../../styles/styles.css";
import { TfiMenuAlt } from "react-icons/tfi";
import { AuthContext } from "../../../contexts/AuthProvider";

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);

  console.log(user)

  const handleSignout = () => {
    logOut()
      .then(() => { })
      .catch((err) => console.log(err))
  }

  // Menu__Items
  const menuItems = (
    <React.Fragment>
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
      {user?.uid ? <React.Fragment>
        <li className="menu__item">
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <select className="cursor-pointer border-[3px] border-[#F2413A] hover:border-[#2196F3] px-[8px] py-[8px] text-[#f2413a] hover:text-[#2196F3] text-[14px] rounded-[8px] font-semibold" name="" id="">
          <option selected value="">
            {user?.displayName}
          </option>
          <option onClick={handleSignout} value="">
            Sign Out
          </option>
        </select>
      </React.Fragment> : <li>
        <Link
          className="border-[3px] border-[#F2413A] hover:border-[#2196F3] px-[15px] py-[8px] text-[#f2413a] hover:text-[#2196F3] text-[18px] rounded-[8px] font-semibold"
          to="/sign-in">
          Sign In
        </Link>
      </li>}
    </React.Fragment>
  );

  return (
    <nav className="navbar bg-base-100 py-[15px]">
      <div className="w-full items-center justify-between flex-row-reverse lg:navbar-end">
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
