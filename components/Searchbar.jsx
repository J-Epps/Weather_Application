import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
    setQuery("");
  };

  return (
    <form className="flex items-center" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search location"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full py-2 px-4 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r-md flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <FaSearch className="mr-2" />
        Search
      </button>
    </form>
  );
};

export default SearchBar;
