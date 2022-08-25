import React from "react";

const MovieCast = ({ credits }) => {
  console.log(credits);
  return (
    <div className="mt-10 text-lg max-h-[400px] overflow-y-auto home__container">
      <ul className="grid grid-cols-2 gap-x-20 gap-y-8">
        {credits.map((credit) => (
          <li className="flex gap-3 items-center">
            <div className="shrink-0 max-w-[65px] w-full h-[65px]">
              <span className=" lazy-load-image-background opacity lazy-load-image-loaded">
                <img
                  src={`https://image.tmdb.org/t/p/w185/${credit.profile_path}`}
                  alt=""
                  className="object-cover rounded-full h-[65px] w-[65px]"
                />
              </span>
            </div>
            <div className="flex-grow">
              <p className="text-[rgb(81,121,255)] text-lg font-medium">
                {credit.name}
              </p>
              <p className="text-white text-base">
                <i>as</i> <br /> {credit.character}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
