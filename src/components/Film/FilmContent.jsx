import React from "react";
import { FaStar } from "react-icons/fa";

const FilmContent = ({ film }) => {
  console.log(film);
  return (
    <div>
      <div className="relative h-0 pb-[56.25%]">
        {film.id && (
          <iframe
            className="absolute w-full h-full top-0 left-0"
            src={`https://www.2embed.to/embed/tmdb/movie/?id=${film.id}`}
            title="Film Video Player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        )}
      </div>

      {film && <div className="">
        <h1 className="text-white md:text-3xl text-xl font-medium md:mt-5">
          {film.title}
        </h1>
        <div className="flex md:mt-4">
            <div className="flex gap-3 items-center text-lg my-3"><div className="text-[#5179FF]"><FaStar /></div> <p className=" text-[#989898]">{film.vote_average}</p></div>
        </div>
        <div className="flex gap-4">{film.genres && film.genres.map(genre => <div key={genre.id} className="px-3 py-1 bg-[#29292B] rounded-full hover:brightness-75 duration-300 transition text-[#989898]">{genre.name}</div>)}</div>
        <div className="">
            <div className="md:text-xl text-lg font-medium text-white mt-5">Overview:</div>
            <p className="md:text-lg text-[#989898] mt-1 inline-block">{film.overview}</p>
        </div>
      </div>}
    </div>
  );
};

export default FilmContent;
