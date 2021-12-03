import React from "react";

function Search({handleSearch, search}) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    handleSearch(e.target.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
