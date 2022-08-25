import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetail, getMovieMedia } from "../Api";
import SearchInput from "../components/common/SearchInput";
import SildeBarRecommentOrSimilar from "../components/common/SildeBarRecommentOrSimilar";
import FilmContent from "../components/Film/FilmContent";
import SearchSideBar from "../components/Search/SearchSideBar";

const MovieWatch = () => {
  const { id } = useParams();
  const [film, setFilm] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const responsive = await getMovieDetail(id)
      setFilm(responsive)
    }

    fetchData()
  },[id])

  return <div className="flex">
    <div className="w-1/12">
      <SearchSideBar />
    </div>
    <div className="w-8/12 flex-grow px-[2vw] md:pt-11 pt-0">
      <FilmContent film={film}/>
    </div>
    <div className="w-3/12 px-4 py-2 overflow-y-auto home__container">
      <SildeBarRecommentOrSimilar type="Recommendations" id={id} />
    </div>
  </div>;
};

export default MovieWatch;
