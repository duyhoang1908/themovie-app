import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import HomeSearchBar from "../components/HomeSearchBar";
import SearchContent from "../components/Search/SearchContent";
import MiniSideBar from "../components/common/MiniSideBar";
import Skeleton from "../components/common/Skeleton"
import SearchInput from "../components/common/SearchInput";
import {useCurrentViewportView} from "../hooks/useViewportView"
import { FaBars } from "react-icons/fa";
import SideBar from "../components/SideBar";
import logo from "../media/images/logo.png"


const SearchPageResults = () => {
  const { query, page } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [searchResults, setSearchResults] = useState({});
  const [showMenu, setShowMenu] = useState()
  const {isMobile} = useCurrentViewportView()

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=3b16dcd05c706df0ba353580de8bb2f6&query=${query}&page=${page}`
        );
        setSearchResults(response.data);
        setIsLoading(false);
      } catch (error) {}
    };

    fetchData();
  }, [query, page]);

  return (
    <div className="flex flex-col md:flex-row md:h-[100vh] md:overflow-hidden relative">
      <div className="md:hidden flex justify-between items-center px-2 mt-4">
        <img src={logo} alt="logo" className="w-[50px]" />
        <div
          className="text-[#989898] text-base cursor-pointer"
          onClick={() => setShowMenu(true)}
        >
          <FaBars />
        </div>
      </div>
      <div className="hidden md:block md:w-1/12">
        <MiniSideBar category="search"/>
      </div>
      <div className="w-full md:w-8/12 h-[100vh] overflow-y-auto home__container">
        {isLoading ? (
          <div className="mt-10 px-5">
          <div className="flex">
            <div className="w-full md:w-[70%] m-auto flex justify-between items-center bg-[#333335] rounded-full text-[#989898]">
              <SearchInput />
            </div>
          </div>
          
          <div className="md:mt-20 mt-7 px-[2vw]">
              <Skeleton className="w-80 h-5 mb-6"/>
              <div className="flex flex-wrap justify-between items-center">
                {Array(12).fill(0).map((item, index) => <div className="w-[48%] md:w-[32%] mb-5" key={index}><Skeleton className="h-[320px]"/></div>)}
              </div>
            </div>
        </div>
        ) : (
          <SearchContent query={query} data={searchResults} />
        )}
      </div>
      <div className="hidden w-full md:w-3/12">
        <HomeSearchBar />
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

export default SearchPageResults;
