import React from "react";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import MovieDescription from "./MovieDescription";
import MovieMedia from "./MovieMedia";
import MovieRating from "./MovieRating";

const MovieDetailContent = ({ movie, reviews, credits, data }) => {
  
  return (
    <div className="">
      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
          alt=""
          className="md:h-[400px] h-[300px] w-[100%] object-cover rounded-bl-2xl"
        />
        <div className="absolute z-10 bottom-0 w-[100%] flex justify-between translate-y-[20%]">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
            className="w-[185px]"
          />
          <div className="flex-grow md:ml-14 ml-6 mt-6 md:mt-0">
            <div className="md:h-28 flex items-end">
              <h1 className=" text-white text-[45px] font-bold leading-tight ">
                {movie.title}
              </h1>
            </div>
            <ul className="flex gap-3 flex-wrap md:mt-7 mt-3">
              {movie.genres.slice(0,3).map((genre) => (
                <li key={genre.id} className="md:px-5 px-3 md:py-2 py-1 mb-3 rounded-full uppercase font-medium border border-gray-300 md:text-white hover:brightness-75 transition duration-300 cursor-pointer">
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Link
              to={`/movie/${movie.id}/watch`}
              className="flex gap-6 items-center pl-6 pr-12 py-3 rounded-full bg-[#5179FF] text-white hover:bg-blue-600 transition duration-300 mt-24 "
            >
              <div>
                <FaPlay />
              </div>
              <div className="text-lg font-medium">WATCH</div>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex z-20 relative flex-col md:flex-row mt-32 md:mt-0">
        <div className="w-2/12 mt-20 md:border-r border-[rgb(51,51,53)] pt-16">
            <MovieRating movie={movie}/>
        </div>
        <div className="w-7/12 flex-grow min-h-[500px] md:border-r border-[rgb(51,51,53)] md:px-16 px-5 md:py-7 pt-40">
            <MovieDescription movie={movie} reviews={reviews} credits={credits}/>
        </div>
        <div className="shrink-0 w-3/12 px-6 pt-6">
            <MovieMedia movie={movie} data={data}/>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailContent;
