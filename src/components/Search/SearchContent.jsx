import React from "react";
import Card from "../common/Card";
import SearchInput from "../common/SearchInput";
import NotFound from "../NotFound";

const SearchContent = ({ query, data }) => {

  return (
    <div className="mt-10 px-5">
      <div className="flex">
        <div className="w-full md:w-[70%] m-auto flex justify-between items-center bg-[#333335] rounded-full text-[#989898]">
          <SearchInput />
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
            {data.results.map((film) => <div className="w-[48%] md:w-[31%]"><Card film={film}/></div>)}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchContent;
