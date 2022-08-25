import React from "react";
import { Link } from "react-router-dom";
import SearchInput from "./common/SearchInput";

const HomeSearchBar = () => {
  const suggestSearch = ["Drama","Family","Talk","Comedy","Documentary","Kids","War & Politics"]

  return (
    <div className="px-6 pt-8">
      <SearchInput />

      <div className="flex flex-wrap gap-3 mt-7 items-center">
        {suggestSearch.map(suggest => (
            <button key={suggest} className="px-4 py-2 bg-dark-lighten rounded-full hover:brightness-75 transition duration-300 bg-[#333335] text-[#989898]">
            <Link to={`/search/${suggest}/page=1`}>{suggest}</Link>
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomeSearchBar;
