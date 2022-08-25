import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getMovieCreditsWithMovieId,
  getMovieDetail,
  getMovieMedia,
  getReviewsWithMovieId,
  getSimilar,
} from "../Api";
import SildeBarRecommentOrSimilar from "../components/common/SildeBarRecommentOrSimilar";
import Loader from "../components/Loader";
import MovieDetailContent from "../components/Movie/MovieDetailContent";
import SearchSideBar from "../components/Search/SearchSideBar";

const MovieDetail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [currentMovie, setCurrentMovie] = useState({});
  const [reviews, setReviews] = useState([]);
  const [credits, setCredits] = useState([]);
  const [medias, setMedias] = useState([]);

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
    <div className="flex">
      <div className="w-1/12">
        <SearchSideBar />
      </div>
      <div className="w-8/12 h-[100vh] overflow-y-auto home__container">
        {isLoading ? (
          <Loader />
        ) : (
          <MovieDetailContent
            movie={currentMovie}
            reviews={reviews}
            credits={credits}
            data={medias}
          />
        )}
      </div>
      <div className="w-3/12 px-4 py-8 overflow-y-auto home__container">
        <SildeBarRecommentOrSimilar type="Similar" id={id}/>
      </div>
    </div>
  );
};

export default MovieDetail;
