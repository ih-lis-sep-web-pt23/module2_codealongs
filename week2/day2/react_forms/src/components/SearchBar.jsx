import { useState } from "react";

function SearchBar({ searchedMovies }) {
  const [search, setSearch] = useState("");

  const handleSearch = e => {
    setSearch(e.target.value);
    searchedMovies(e.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        name="search"
        id="search"
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
