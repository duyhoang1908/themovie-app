import React from "react";
import {Link} from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar, FaPlay } from "react-icons/fa";
import { Autoplay } from "swiper";

import "swiper/css";

const BannerSlider = ({ data }) => {
  
  return (
    <div className="rounded-lg overflow-hidden">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={1}
      >
        {data.map((film) => (
          <SwiperSlide key={film.id}>
            <div className="w-[100%] relative cursor-pointer group max-h-[410px]">
              <img
                src={`https://image.tmdb.org/t/p/w1280/${film.backdrop_path}`}
                alt=""
                className="w-[100%] h-[100%] object-contain"
              />
              <div className="absolute top-0 right-0 left-0 bg-gradient-to-r from-[rgba(0,0,0,0.9)] to-[rgba(0,0,0,0)] w-[100%] h-[100%] p-4">
                <div className="flex justify-between">
                  <div className="mb-8 md:text-4xl text-xl  text-[rgb(81,121,255)] font-semibold tracking-wide md:tw-multiline-ellipsis-2 tw-multiline-ellipsis-3">
                    {film.original_title}
                  </div>
                  <div className="hidden md:flex absolute top-[5%] right-[3%] bg-primary px-3 py-1 rounded-full text-white  items-center bg-[rgb(81,121,255)] gap-2">
                    <p>{film.vote_average}</p>
                    <div>
                      <FaStar />
                    </div>
                  </div>
                </div>

                <div className="text-white font-semibold md:text-2xl text-base mt-6">
                  Release Date: {film.release_date}
                </div>

                {film.adult || <div className="inline-block mt-3 text-red-600 border border-red-600 px-3 py-1 rounded-2xl">18 +</div>}

                <div className="flex items-center  mt-4">
                    <div className="text-white mr-4">Language:</div>
                    <div className="inline-block text-[#989898] border border-[#989898] px-3 py-1 rounded-2xl">{film.original_language}</div>
                </div>

                <div className=" mt-3 text-base text-[#989898]">
                  {film.overview}
                </div>
              </div>

              <div className="hidden group-hover:flex absolute top-0 right-0 left-0 w-[100%] h-[100%] z-10">
                <Link to={`/movie/${film.id}/watch`} className="flex m-auto text-white bg-gradient-to-r from-[#5757f5] to-[#783f8a] w-[70px] h-[70px] rounded-[50%]">
                    <div className="m-auto"><FaPlay /></div>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
