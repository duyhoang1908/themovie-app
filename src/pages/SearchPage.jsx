import React, { useState } from "react";
import { FaAngleDown, FaAngleRight, FaBars } from "react-icons/fa";
import SearchInput from "../components/common/SearchInput";
import SideBar from "../components/SideBar";

import searchImg from "../media/images/searchImg.avif";
import logo from "../media/images/logo.png"

const SearchPage = () => {
  const [isShowOptions, setIsShowOptions] = useState(true);
  const [showMenu, setShowMenu] = useState(false)
  const [option, setOption] = useState("Movie")
  return (
    <div className="md:flex w-full h-[100vh] overflow-hidden relative">
      <div className="md:hidden flex justify-between items-center px-2 mt-4">
        <img src={logo} alt="logo" className="w-[50px]" />
        <div
          className="text-[#989898] text-base cursor-pointer"
          onClick={() => setShowMenu(true)}
        >
          <FaBars />
        </div>
      </div>
      <div className="hidden md:block md:w-2/12">
        <SideBar category="search"/>
      </div>
      <div className="w-full md:w-7/12 flex flex-col items-center mt-5 md:mt-[70px] pb-[10px] md:px-[0] px-3">
        <h1 className="text-white text-2xl font-medium leading-7 text-center">
          Find your favourite movies, TV shows, people and more
        </h1>
        <div className="w-[70%] mt-[30px] mb-[55px]">
          <SearchInput />
        </div>
        <div className="rounded-2xl overflow-hidden">
          <img
            src={searchImg}
            alt=""
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
        </div>
      </div>
      <div className="hidden md:block md:w-3/12">
        <div className="bg-[#333335] rounded-lg leading-6 pt-3 px-4 translate-y-16">
          <div className="flex items-center justify-between text-white text-lg pb-3">
            <p className="">Search results</p>
            <div
              className="cursor-pointer"
              onClick={() => setIsShowOptions(!isShowOptions)}
            >
              {isShowOptions ? <FaAngleDown /> : <FaAngleRight />}
            </div>
          </div>
          {isShowOptions && <div className="flex flex-col gap-2 items-center py-5 border-t border-black">
                <div className="w-full hover:bg-[#49494b] rounded-lg text-white text-lg py-1 text-center cursor-pointer duration-300" style={{backgroundColor: option === "All"?"#49494b":"transparent"}} onClick={() => setOption("All")}>All</div>
                <div className="w-full hover:bg-[#49494b] rounded-lg text-white text-lg py-1 text-center cursor-pointer duration-300" style={{backgroundColor: option === "Movie"?"#49494b":"transparent"}} onClick={() => setOption("Movie")}>Movie</div>
                <div className="w-full hover:bg-[#49494b] rounded-lg text-white text-lg py-1 text-center cursor-pointer duration-300" style={{backgroundColor: option === "TV Show"?"#49494b":"transparent"}} onClick={() => setOption("TV Show")}>TV Show</div>
                <div className="w-full hover:bg-[#49494b] rounded-lg text-white text-lg py-1 text-center cursor-pointer duration-300" style={{backgroundColor: option === "People"?"#49494b":"transparent"}} onClick={() => setOption("People")}>People</div>
            </div>}
        </div>
      </div>
      <div
        className="md:hidden w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.5)] z-40 absolute top-0 left-0"
        style={{ display: showMenu ? "block" : "none" }}
        onClick={() => setShowMenu(false)}
      ></div>
      <div
        className="absolute top-0 left-0 z-50 md:hidden bg-[#333335] w-[65vw] duration-300"
        style={{ transform: showMenu ? "translateX(0)" : "translateX(-65vw)" }}
      >
        <SideBar category="search"/>
      </div>
    </div>
  );
};

export default SearchPage;
