import React from "react";
import {
  FaHome,
  FaSearch,
  FaDiceD6,
  FaBookOpen,
  FaClock,
  FaUserAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "../../media/images/logo.png";
import defaultAvatar from "../../media/images/defaultAvatar.jpg";


const SearchSideBar = () => {
  return (
    <div className="sidebar flex flex-col justify-between items-center h-[100vh] py-[32px] overflow-y-auto">
      <Link to="/">
        <img src={logo} alt="" className="w-[70px]" />
      </Link>
      <div className="text-[#989898]">
        <div className="flex flex-col items-center gap-5">
          <Link
            to="/"
            className="py-[10px] text-[20px] font-light hover:text-white hover:font-normal duration-300"
          >
            <div className="">
              <FaHome />
            </div>
          </Link>
          <Link
            to="/"
            className="py-[10px] text-[20px] font-light hover:text-white hover:font-normal duration-300"
          >
            <div className="">
              <FaDiceD6 />
            </div>
          </Link>
          <Link
            to="/"
            className="py-[10px] text-[20px] text-[#5179FF] font-light hover:text-[#5179FF] hover:font-normal duration-300"
          >
            <div className="">
              <FaSearch />
            </div>
          </Link>

          <Link
          to="/"
          className="py-[10px] text-[20px] font-light hover:text-white hover:font-normal duration-300"
        >
          <div className="">
            <FaBookOpen />
          </div>
        </Link>
        <Link
          to="/"
          className="py-[10px] text-[20px] font-light hover:text-white hover:font-normal duration-300"
        >
          <div className="">
            <FaClock />
          </div>
        </Link>

        <Link
          to="/"
          className="py-[10px] text-[20px] font-light hover:text-white hover:font-normal duration-300"
        >
          <div className="">
            <FaUserAlt />
          </div>
        </Link>
        </div>
      </div>

      <Link to="/profile">
        <img src={defaultAvatar} alt="" className="w-[40px] h-[40px] rounded-[50%]" />
      </Link>
    </div>
  );
};

export default SearchSideBar;
