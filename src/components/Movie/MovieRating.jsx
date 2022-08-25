import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const MovieRating = ({ movie }) => {
  return (
    <div className="shrink-0 w-full flex items-center md:flex-col justify-center flex-row gap-20">
      <div className="flex flex-col gap-6 items-center">
        <p className="text-white font-medium text-lg">RATING</p>
        <div className="w-[70px]">
          <CircularProgressbar
            value={movie.vote_average * 10}
            text={`${movie.vote_average.toFixed(1)}`}
            styles={buildStyles({
              // Rotation of path and trail, in number of turns (0-1)
              rotation: 0,

              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "butt",

              // Text size
              textSize: "20px",

              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 0.5,

              // Can specify path transition in more detail, or remove it entirely
              // pathTransition: 'none',

              // Colors
              pathColor: `#4768D6, ${movie.vote_average / 100})`,
              textColor: "#989898",
              trailColor: "#1C1C1E",
              backgroundColor: "#1C1C1E",
            })}
          />
        </div>
      </div>
      <div className="flex flex-col gap-6 items-center">
        <p className="text-white font-medium text-lg">EP LENGTH</p>
        <div className="text-2xl text-[#989898]">{movie.runtime} min</div>
      </div>
    </div>
  );
};

export default MovieRating;
