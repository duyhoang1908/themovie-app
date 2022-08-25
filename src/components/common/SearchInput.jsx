import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";


const SearchInput = () => {
  const history = useNavigate();

  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value) => {
    value.length && history(`/search/${value}/page=1`);
  };
  return (
    <div className="flex justify-between items-center bg-[#333335] rounded-full text-[#989898]">
      <label htmlFor="search__input" className="px-4 text-xl">
        <FaSearch />
      </label>
      <input
        id="search__input"
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.code === "Enter") handleSearch(searchValue);
        }}
        placeholder="Search..."
        className="flex-1 bg-transparent border-none outline-0 py-3 text-white font-normal"
      />
    </div>
  );
};

export default SearchInput;
