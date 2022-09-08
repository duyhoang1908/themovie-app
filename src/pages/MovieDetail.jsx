import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getMovieCreditsWithMovieId,
  getMovieDetail,
  getMovieMedia,
  getReviewsWithMovieId,
} from "../Api";
import SildeBarRecommentOrSimilar from "../components/common/SildeBarRecommentOrSimilar";
import MovieDetailContent from "../components/Movie/MovieDetailContent";
import MiniSideBar from "../components/common/MiniSideBar";
import Skeleton from "../components/common/Skeleton";
import SideBar from "../components/SideBar";

import logo from "../media/images/logo.png"
import { FaBars } from "react-icons/fa";

const MovieDetail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [currentMovie, setCurrentMovie] = useState({});
  const [reviews, setReviews] = useState([]);
  const [credits, setCredits] = useState([]);
  const [medias, setMedias] = useState([]);
  const [showMenu, setShowMenu] = useState()

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getMovieDetail(id);
        const comments = await getReviewsWithMovieId(id);
        const movieCredits = await getMovieCreditsWithMovieId(id);
        const mediaInfo = await getMovieMedia(id);
        setMedias(mediaInfo.results);
        setCurrentMovie(response);
        setReviews(comments.results);
        setCredits(movieCredits.cast);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  return (
    <div className="flex flex-col md:flex-row md:h-[100vh] md:overflow-hidden home__container relative">
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
        <MiniSideBar category="" />
      </div>
      <div className="w-full md:w-8/12 h-[100vh] overflow-y-auto home__container">
        {isLoading ? (
          <div className="">
            <Skeleton className="w-full h-[250px] md:h-[400px]" />

            <div className="flex z-20 relative flex-col md:flex-row mt-32 md:mt-0">
              <div className="w-2/12 mt-20 md:border-r border-[rgb(51,51,53)] pt-16">
                <Skeleton className="w-full h-full" />
              </div>
              <div className="w-7/12 flex-grow min-h-[500px] md:border-r border-[rgb(51,51,53)] md:px-16 px-5 md:py-7 pt-40">
                <Skeleton className="w-full h-full" />
              </div>
              <div className="shrink-0 w-3/12 px-6 pt-6">
                <Skeleton className="w-full h-full" />
              </div>
            </div>
          </div>
        ) : (
          <MovieDetailContent
            movie={currentMovie}
            reviews={reviews}
            credits={credits}
            data={medias}
          />
        )}
      </div>
      <div className="w-full md:w-3/12 px-4 py-8 overflow-y-auto home__container">
        <SildeBarRecommentOrSimilar type="Similar" id={id} />
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

export default MovieDetail;
