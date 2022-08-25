import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import HomeSearchBar from "../components/HomeSearchBar";
import Loader from "../components/Loader";
import SearchSideBar from "../components/Search/SearchSideBar";
import SearchContent from "../components/Search/SearchContent";
import Pagination from "../components/Search/Pagination";

const SearchPage = () => {
  const { query, page } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [searchResults, setSearchResults] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=3b16dcd05c706df0ba353580de8bb2f6&query=${query}&page=${page}`
        );
        setSearchResults(response.data);
        setIsLoading(false);
      } catch (error) {}
    };

    fetchData();
  }, [query, page]);

  return (
    <div className="flex">
      <div className="w-1/12">
        <SearchSideBar />
      </div>
      <div className="w-8/12 h-[100vh] overflow-y-auto home__container">
        {isLoading ? (
          <Loader />
        ) : (
          <SearchContent query={query} data={searchResults} />
        )}
        <div className="flex">
          <div className="m-auto">
            <Pagination query={query} totalPages={searchResults.total_pages} />
          </div>
        </div>
      </div>
      <div className="w-3/12">
        <HomeSearchBar />
      </div>
    </div>
  );
};

export default SearchPage;
