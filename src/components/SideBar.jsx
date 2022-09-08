import React from "react";
import { FaHome, FaSearch, FaDiceD6, FaBookOpen, FaClock, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "../media/images/logo.png";

const SideBar = ({category}) => {
  return (
    <div className="sidebar h-[100vh] pt-[40px] pl-[32px] overflow-y-auto">
      <Link to="/">
        <img src={logo} alt="" className="w-[100px]" />
      </Link>
      <div className="text-[#989898]">
        <h3 className="text-white text-lg font-medium mt-12">MENU</h3>
        <div className="flex flex-col mt-8 ml-4">
          <Link
            to="/"
            className="flex items-center py-[10px] text-[20px] text-[#5719FF] font-light hover:text-[#5719FF] hover:font-normal duration-300"
            style={{color:category === "home"?"#5719FF":"#989898"}}
          >
            <div className="mr-[20px]">
              <FaHome />
            </div>

            <p>Home</p>
          </Link>
          <Link
            to="/explore"
            className="flex items-center py-[10px] text-[20px] font-light hover:text-white hover:font-normal duration-300"
            style={{color:category === "explore"?"#5719FF":"#989898"}}
          >
            <div className="mr-[20px]">
              <FaDiceD6 />
            </div>

            <p>Explore</p>
          </Link>
          <Link
            to="/search"
            className="flex items-center py-[10px] text-[20px] font-light hover:text-white hover:font-normal duration-300"
            style={{color:category === "search"?"#5719FF":"#989898"}}
          >
            <div className="mr-[20px]">
              <FaSearch />
            </div>

            <p>Search</p>
          </Link>
        </div>


        <h3 className="text-white text-lg font-medium mt-12">PERSONAL</h3>
        <div className="flex flex-col mt-8 ml-4">
          <Link
            to="/explore"
            className="flex items-center py-[10px] text-[20px] font-light hover:text-white hover:font-normal duration-300"
            style={{color:category === "bookmarked"?"#5719FF":"#989898"}}
          >
            <div className="mr-[20px]">
              <FaBookOpen />
            </div>

            <p>Bookmarked</p>
          </Link>
          <Link
            to="/history"
            className="flex items-center py-[10px] text-[20px] font-light hover:text-white hover:font-normal duration-300"
            style={{color:category === "history"?"#5719FF":"#989898"}}
          >
            <div className="mr-[20px]">
              <FaClock />
            </div>

            <p>History</p>
          </Link>
        </div>

        <h3 className="text-white text-lg font-medium mt-12">GENERAL</h3>
        <div className="flex flex-col mt-8 ml-4">
          <Link
            to="/frofile"
            className="flex items-center py-[10px] text-[20px] font-light hover:text-white hover:font-normal duration-300"
            style={{color:category === "frofile"?"#5719FF":"#989898"}}
          >
            <div className="mr-[20px]">
              <FaUserAlt />
            </div>

            <p>Frofile</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
