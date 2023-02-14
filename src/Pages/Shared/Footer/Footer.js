import React from "react";
import BrandLogo from "../../../assets/Logos/BrandLogo.png";
import { FaTelegram, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const footerMenuOne = (
  <>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/talents">Talents</Link>
    </li>
    <li>
      <Link to="/influencers">Influencers</Link>
    </li>
    <li>
      <Link to="/micro-jobs">Micro Jobs</Link>
    </li>
  </>
);

const footerMenuTwo = (
  <>
    <li>
      <Link to="/privacy-policy">Privacy Policy</Link>
    </li>
    <li>
      <Link to="/terms-of-service">Terms of Service</Link>
    </li>
    <li>
      <Link to="/affiliate-terms-of-service">Affiliate Terms Of Service</Link>
    </li>
  </>
);

const footerMenuThree = (
  <>
    <li>
      <Link to="/affiliate">Affiliate</Link>
    </li>
    <li>
      <Link to="/earn-money-online">Earn Money Online</Link>
    </li>
    <li>
      <Link to="/grow-your-twitter">Grow your Twitter</Link>
    </li>
    <li>
      <Link to="/remote-jobs">Remote Jobs</Link>
    </li>
  </>
);

const footerMenuFour = (
  <>
      <li>
        <Link to="/support">Support</Link>
      </li>
      <li>
        <Link to="/faq">FAQ</Link>
      </li>
      <li>
        <Link to="/api">API</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
  </>
);

const Footer = () => {
  return (
    <footer>
      <div className="common__flex flex-col gap-y-[20px] my-[20px] lg:my-[50px]">
        <img src={BrandLogo} alt="BrandLogo" />
        <div className="common__flex gap-x-[20px]">
          <FaTelegram size={26} fill={"#CCCCCC"} color={"#fff"} />
          <FaTwitter size={26} fill={"#CCCCCC"} color={"#fff"} />
          <FaFacebook size={26} fill={"#CCCCCC"} color={"#fff"} />
          <FaInstagram size={26} fill={"#CCCCCC"} color={"#fff"} />
        </div>
      </div>
      <div className="grid grid-cols-2 place-items-center lg:flex justify-around items-center">
        <div className="footer__menu">
          <h3>Company</h3>
          <ul>{footerMenuOne}</ul>
        </div>
        <div className="footer__menu">
          <h3>Legal</h3>
          <ul>{footerMenuTwo}</ul>
        </div>
        <div className="footer__menu">
          <h3>Opportunities</h3>
          <ul>{footerMenuThree}</ul>
        </div>
        <div className="footer__menu">
          <h3>Resources</h3>
          <ul>{footerMenuFour}</ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
