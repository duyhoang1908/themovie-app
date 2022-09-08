import React, { useState } from "react";
import HomeMovie from "./HomeMovie";
import HomeTVshow from "./HomeTVshow";

import logo from "../media/images/logo.png";
import { FaBars } from "react-icons/fa";
import SideBar from "./SideBar";

const HomeContent = () => {
  const [isTVshow, setTVshow] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="py-[18px] md:py-[28px] px-[15px] relative">
      <div className="md:hidden flex justify-between items-center mb-2">
        <img src={logo} alt="logo" className="w-[50px]" />
        <div
          className="text-[#989898] text-base cursor-pointer"
          onClick={() => setShowMenu(true)}
        >
          <FaBars />
        </div>
      </div>
      {isTVshow ? (
        <HomeTVshow isTVshow={isTVshow} setTVshow={setTVshow} />
      ) : (
        <HomeMovie isTVshow={isTVshow} setTVshow={setTVshow} />
      )}
      <div
        className="w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.5)] z-40 absolute top-0 left-0"
        style={{ display: showMenu ? "block" : "none" }}
        onClick={() => setShowMenu(false)}
      ></div>
      <div
        className="absolute top-0 left-0 z-50 md:hidden bg-[#333335] w-[65vw] duration-300"
        style={{ transform: showMenu ? "translateX(0)" : "translateX(-65vw)" }}
      >
        <SideBar />
      </div>
    </div>
  );
};

export default HomeContent;
