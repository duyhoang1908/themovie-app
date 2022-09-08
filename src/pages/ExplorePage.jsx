import React, { useEffect, useState } from "react";
import MiniSideBar from "../components/common/MiniSideBar";
import SearchInput from "../components/common/SearchInput";
import Card from "../components/common/Card";
import { FaAngleDown, FaAngleRight, FaBars } from "react-icons/fa";
import { getTopRateFilm } from "../Api";
import { genresFilter } from "../ultils/constants";
import Skeleton from "../components/common/Skeleton";
import logo from "../media/images/logo.png";
import SideBar from "../components/SideBar";

const ExplorePage = () => {
  const [exploreMovie, setExploreMovie] = useState([]);
  const [isShowOptions, setIsShowOptions] = useState(true);
  const [isShowBox, setIsShowBox] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentOption, setCurrentOption] = useState("Most popular");
  const [showMenu, setShowMenu] = useState(false);

  let genres = [];

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await getTopRateFilm(2);
      setExploreMovie(response.results);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (currentOption === "Most popular") {
      let movieHavePopular = [];
      let movieHaventPopular = [];
      exploreMovie.forEach((movie) => {
        if (movie.popularity) movieHavePopular.push(movie);
        else movieHaventPopular.push(movie);
      });
      movieHavePopular.sort((a, b) => b.popularity - a.popularity);
      setExploreMovie([...movieHavePopular, ...movieHaventPopular]);
    } else {
      let movieHaveVote = [];
      let movieHaventVote = [];
      exploreMovie.forEach((movie) => {
        if (movie.vote_average) movieHaveVote.push(movie);
        else movieHaventVote.push(movie);
      });
      movieHaveVote.sort((a, b) => b.vote_average - a.vote_average);
      setExploreMovie([...movieHaveVote, ...movieHaventVote]);
    }
  }, [currentOption]);

  const handleFillter = (id) => {
    if (genres.includes(id)) {
      const newGenres = genres.filter((item) => item !== id);
      genres = [...newGenres];
    } else {
      genres.push(id);
    }
    console.log(genres);
    genres.length !== 0 && filterFilmByGenres();
  };

  const filterFilmByGenres = () => {
    const fillterFilms = exploreMovie.filter((film) => {
      let check;
      console.log("chay");
      genres.forEach((number) => {
        if (film.genre_ids.includes(number)) check = true;
        else {
          check = false;
          return;
        }
      });
      if (check) return film;
    });
    console.log(fillterFilms);
  };

  return (
    <div className="flex md:flex-row flex-col-reverse overflow-hidden relative">
      <div className="hidden md:block md:w-1/12">
        <MiniSideBar category="bookmarked" />
      </div>
      <div className="w-full md:w-8/12 pt-10">
        <div className="hidden md:flex justify-between items-center px-3">
          <h2 className="text-white text-3xl font-medium">
            FIND FILMS THAT BEST FIT YOU
          </h2>
          <SearchInput />
        </div>
        {isLoading ? (
          <div className="flex justify-between flex-wrap gap-2 mt-20">
            {Array(20)
              .fill(0)
              .map((item, index) => (
                <div key={index} className="w-[23%]">
                  <Skeleton className="w-full h-[350px] mb-4" />
                </div>
              ))}
          </div>
        ) : (
          exploreMovie && (
            <div className="flex justify-between flex-wrap gap-2 mt-20 px-4">
              {exploreMovie.map((result) => (
                <div className="w-[46%] md:w-[23%]" key={result.id}>
                  <Card film={result} />
                </div>
              ))}
            </div>
          )
        )}
      </div>
      <div className="w-full md:w-3/12 px-4 md:px-8">
        <h2 className="text-white text-3xl font-medium mt-2">
          FIND FILMS THAT BEST FIT YOU
        </h2>
        <div className="bg-[#333335] rounded-lg leading-6 pt-3 px-4 translate-y-16 relative z-20">
          <div className="flex items-center justify-between text-white text-lg pb-3">
            <p className="">Search results</p>
            <div
              className="cursor-pointer"
              onClick={() => setIsShowOptions(!isShowOptions)}
            >
              {isShowOptions ? <FaAngleDown /> : <FaAngleRight />}
            </div>
          </div>
          {isShowOptions && (
            <div className="flex flex-col gap-2 items-center py-5 border-t border-black">
              <div className="text-left text-[#989898] text-lg w-full">
                Sort results by
              </div>
              <div
                className="flex justify-between w-full items-center py-1 text-white bg-[#49494b] rounded-lg hover:cursor-pointer"
                onClick={() => setIsShowBox(!isShowBox)}
              >
                <div className="flex-1 pl-2">{currentOption}</div>
                <span className="w-[1px] h-[22px] bg-slate-200 "></span>
                <div className="px-2">
                  <FaAngleDown />
                </div>
              </div>
            </div>
          )}
          {isShowBox && (
            <div className="flex justify-between flex-col  gap-1 w-full items-center py-2 text-white bg-[#49494b] rounded-lg absolute bottom-[-65%] left-[0] z-20">
              <div
                className="w-full text-white leading-6 px-3 py-2 hover:cursor-pointer"
                style={{
                  backgroundColor:
                    currentOption === "Most popular"
                      ? "#989898"
                      : "transparent",
                }}
                onClick={() => {
                  setCurrentOption("Most popular");
                  setIsShowBox(!isShowBox);
                }}
              >
                Most popular
              </div>
              <div
                className="w-full text-white leading-6 px-3 py-2 hover:cursor-pointer"
                style={{
                  backgroundColor:
                    currentOption === "Most rating" ? "#989898" : "transparent",
                }}
                onClick={() => {
                  setCurrentOption("Most rating");
                  setIsShowBox(!isShowBox);
                }}
              >
                Most rating
              </div>
            </div>
          )}
        </div>

        <div className="bg-[#333335] rounded-lg leading-6 pt-3 px-4 mt-7 translate-y-16 relative">
          <div className="flex items-center justify-between text-white text-lg pb-3">
            <p className="">Filter</p>
          </div>
          <div className="flex flex-col gap-2 items-center py-5 border-t border-black">
            <div className="text-left text-[#989898] text-lg w-full">
              Genres
            </div>
            <div className="max-h-[200px] overflow-y-auto home__container flex flex-wrap gap-2">
              {genresFilter.map((item) => (
                <div
                  key={item.id}
                  className="py-1 px-4 text-base text-[#989898] text-center rounded-full border border-[#989898] cursor-pointer hover:opacity-75"
                  style={{
                    backgroundColor: genres.includes(item.id)
                      ? "#5179ff"
                      : "transparent",
                  }}
                  onClick={() => {
                    handleFillter(item.id);
                  }}
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden flex justify-between items-center px-2 mt-4">
        <img src={logo} alt="logo" className="w-[50px]" />
        <div
          className="text-[#989898] text-base cursor-pointer"
          onClick={() => setShowMenu(true)}
        >
          <FaBars />
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
        <SideBar category="search" />
      </div>
    </div>
  );
};

export default ExplorePage;
