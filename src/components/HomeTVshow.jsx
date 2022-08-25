import React, { useEffect, useState } from "react";
import {
  getPopularFilm,
  getTopRateFilm,
  getTrendingFilms,
  getUpComingFilm,
} from "../Api";
import defaultAvatar from "../media/images/defaultAvatar.jpg";
import BannerSlider from "./BannerSlider";
import Loader from "./Loader";
import Slider from "./Slider";
import { useDispatch } from "react-redux";
import { exploreSlice } from "../store/Slice/exploreSlice";

const HomeTVshow = ({ isTVshow, setTVshow }) => {
  const dispatch = useDispatch();

  const [popularFilms, setPopularFilms] = useState([]);
  const [topRateFilms, setTopRateFilms] = useState([]);
  const [upCommingFilms, seUpCommingFilms] = useState([]);
  const [trendingFilms, setTrendingFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPopularFilm(1);
      const topRated = await getTopRateFilm(1);
      const upcoming = await getUpComingFilm(1);
      const trending = await getTrendingFilms("movie", "week");

      setTopRateFilms(topRated.results);
      setPopularFilms(data.results);
      seUpCommingFilms(upcoming.results);
      setTrendingFilms(trending.results);
      
      8
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="h-[100vh] overflow-y-auto home__container">
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="flex justify-between items-center">
            <div className="flex items-center border-b border-[rgb(58,57,57)]">
              <div
                className="text-[20px] pb-3 border-b-2 border-white mr-8 hover:cursor-pointer text-white font-medium"
                onClick={() => setTVshow(!isTVshow)}
              >
                TV Show
              </div>
              <div
                className="text-[20px] pb-3 hover:cursor-pointer text-[#989898] font-light"
                onClick={() => setTVshow(!isTVshow)}
              >
                Movie
              </div>
            </div>
            <div className="flex items-center text-[18px] text-[#989898]">
              <p>Anonymous</p>
              <div className="w-[28px] h-[28px] ml-6 object-cover rounded-[50%] overflow-hidden">
                <img src={defaultAvatar} alt="" />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <BannerSlider data={popularFilms} />
          </div>

          <div className="mt-4 md:mt-10">
            <div className="text-xl text-white font-medium tracking-wider mb-3">
              Top Rate
            </div>
            <div className="mt-5 md:mt-10">
              <Slider data={topRateFilms} />
            </div>
          </div>

          <div className="mt-4 md:mt-10">
            <div className="text-xl text-white font-medium tracking-wider mb-3">
              Up Coming
            </div>
            <div className="mt-5 md:mt-10">
              <Slider data={upCommingFilms} />
            </div>
          </div>

          <div className="mt-4 md:mt-10">
            <div className="text-xl text-white font-medium tracking-wider mb-3">
              Trending Movies of the week
            </div>
            <div className="mt-5 md:mt-10">
              <Slider data={trendingFilms} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeTVshow;
