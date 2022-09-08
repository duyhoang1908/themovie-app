import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetail } from "../Api";
import SildeBarRecommentOrSimilar from "../components/common/SildeBarRecommentOrSimilar";
import FilmContent from "../components/Film/FilmContent";
import MiniSideBar from "../components/common/MiniSideBar";
import SideBar from "../components/SideBar";
import { FaBars } from "react-icons/fa";
import logo from "../media/images/logo.png"


const MovieWatch = () => {
  const { id } = useParams();
  const [film, setFilm] = useState([])
  const [showMenu, setShowMenu] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const responsive = await getMovieDetail(id)
      setFilm(responsive)
    }

    fetchData()
  },[id])

  return <div className="flex flex-col md:flex-row md:h-[100vh] md:overflow-hidden relative">
    <div className="md:hidden flex justify-between items-center px-2 mt-4 mb-2">
        <img src={logo} alt="logo" className="w-[50px]" />
        <div
          className="text-[#989898] text-base cursor-pointer"
          onClick={() => setShowMenu(true)}
        >
          <FaBars />
        </div>
      </div>
    <div className="hidden md:block md:w-1/12">
      <MiniSideBar category=""/>
    </div>
    <div className="w-full md:w-8/12 flex-grow px-[2vw] md:pt-11 pt-0">
      <FilmContent film={film}/>
    </div>
    <div className="w-full md:w-3/12 px-4 py-2 overflow-y-auto home__container">
      <SildeBarRecommentOrSimilar type="Recommendations" id={id} />
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
        <SideBar category=""/>
      </div>
  </div>;
};

export default MovieWatch;
