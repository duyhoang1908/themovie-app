import React from "react";
import { FaSearch } from "react-icons/fa";
import Card from "../common/Card";
import NotFound from "../NotFound";

const SearchContent = ({ query, data }) => {
  return (
    <div className="mt-10 px-5">
      <div className="flex">
        <div className="w-[70%] m-auto flex justify-between items-center bg-[#333335] rounded-full text-[#989898]">
          <label htmlFor="search__input" className="px-4 text-xl">
            <FaSearch />
          </label>
          <input
            id="search__input"
            type="text"
            //   value={searchValue}
            //   onChange={(e) => setSearchValue(e.target.value)}
            //   onKeyDown={(e) => {
            //     if (e.code === "Enter") handleSearch(searchValue);
            //   }}
            placeholder="Search..."
            className="flex-1 bg-transparent border-none outline-0 py-3 text-white font-normal"
          />
        </div>
      </div>

      {data.total_results === 0 ? (
        <div className="md:mt-20 mt-7 px-[2vw]">
          <div className="text-white md:text-xl text-lg mb-6">{`Search results for "${query}" (${data.total_results} results found)`}</div>
          <NotFound />
        </div>
      ) : (
        <div className="md:mt-20 mt-7 px-[2vw]">
          <div className="text-white md:text-xl text-lg mb-6">{`Search results for "${query}" (${data.total_results} results found)`}</div>
          <div className="flex flex-wrap justify-between items-center">
            {data.results.map((film) => <div className="w-[31%]"><Card film={film}/></div>)}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchContent;
