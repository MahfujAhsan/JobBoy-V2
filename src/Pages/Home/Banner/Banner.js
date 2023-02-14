import React from "react";
import { FaChess, FaUsers } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";
import { Link } from "react-router-dom";
import BannerImage from "../../../assets/BannerImages/HeroRightImage.png";

const Banner = () => {
  return (
    <section className="flex justify-between items-center gap-x-[50px] ">
      <div className="flex-1 text-[#444445] ">
        <h2 className="font-[900] text-[36px]">Remote Jobs Marketplace</h2>
        <p className="font-[700] mb-[50px] mt-[15px] text-[18px]">
          Unlock endless opportunities with JobBoy - the premier platform for
          remote jobs. Join our community and work from anywhere.
        </p>
        <div className="flex gap-[15px] items-center my-[25px]">
          <Link to="talents">
            <button className="banner__btn bg-[#2196F3]">
              <FaChess size={26} /> Talents
            </button>
          </Link>
          <Link to="talents">
            <button className="banner__btn bg-[#8A2BE2]">
              <GrAnnounce size={26} /> Influencers
            </button>
          </Link>
          <Link to="micro-jobs">
            <button className="banner__btn bg-[#F2413A]">
              <FaUsers size={26} /> Micro Jobs
            </button>
          </Link>
        </div>
      </div>
      <div className="flex-1">
        <img src={BannerImage} alt="BannerImage" />
      </div>
    </section>
  );
};

export default Banner;
