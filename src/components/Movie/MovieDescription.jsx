import React, { useState } from "react";
import MovieCast from "./MovieCast";
import MovieOverall from "./MovieOverall";
import MovieReviews from "./MovieReviews";
import MovieSeasons from "./MovieSeasons";

const MovieDescription = ({movie, reviews, credits}) => {
  const [route, setRoute] = useState("Overall");
  return (
    <div className="">
      <div className="flex gap-10 text-gray-400 text-lg justify-center">
        <button
          className="hover:text-white transition duration-300 pb-1  font-medium -translate-y-2"
          style={{
            borderBottom:
              route === "Overall" ? "2px solid rgb(81,121,255)" : "0px",
          }}
          onClick={() => setRoute("Overall")}
        >
          Overall
        </button>
        <button
          className="hover:text-white transition duration-300 pb-1  font-medium -translate-y-2"
          style={{
            borderBottom:
              route === "Cast" ? "2px solid rgb(81,121,255)" : "0px",
          }}
          onClick={() => setRoute("Cast")}
        >
          Cast
        </button>
        <button
          className="hover:text-white transition duration-300 pb-1  font-medium -translate-y-2"
          style={{
            borderBottom:
              route === "Reviews" ? "2px solid rgb(81,121,255)" : "0px",
          }}
          onClick={() => setRoute("Reviews")}
        >
          Reviews
        </button>
        <button
          className="hover:text-white transition duration-300 pb-1  font-medium -translate-y-2"
          style={{
            borderBottom:
              route === "Seasons" ? "2px solid rgb(81,121,255)" : "0px",
          }}
          onClick={() => setRoute("Seasons")}
        >
          Seasons
        </button>
      </div>

      {route === "Overall" && <MovieOverall movie={movie}/>}
      {route === "Cast" && <MovieCast credits={credits}/>}
      {route === "Reviews" && <MovieReviews reviews={reviews}/>}
      {route === "Seasons" && <MovieSeasons movie={movie}/>}
    </div>
  );
};

export default MovieDescription;
