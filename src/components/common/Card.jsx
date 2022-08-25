import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

import imgDefault from "../../media/images/netflixChill.webp"

const Card = ({ film }) => {
  return (
    <div className="hover:scale-[1.05] duration-300 w-[100%] mb-6 relative">
      <Link
        to={`/movie/${film.id}`}
        className="flex flex-col items-center rounded-xl overflow-hidden bg-[#19191B] min-h-[365px]"
      >
        <img
          src={film.poster_path?`https://image.tmdb.org/t/p/w500/${film.poster_path}`:imgDefault}
          alt=""
          className="w-[100%] max-h-[300px] object-cover"
        />
        <div className="p-[8px] text-[#989898] card__title">{film.title}</div>
        {film.vote_average !== 0 && (
          <div className="hidden md:flex absolute top-[3%] right-[3%] bg-primary px-2 py-1 rounded-full text-[13px] text-white  items-center bg-[rgb(81,121,255)] gap-2">
            <p>{film.vote_average}</p>
            <div>
              <FaStar />
            </div>
          </div>
        )}
      </Link>
    </div>
  );
};

export default Card;
