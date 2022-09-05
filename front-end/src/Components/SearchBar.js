import { useState } from "react";

export default function SearchBar({ gamers, searchFor }) {
  const [search, setSearch] = useState();

  const handleTextChange = (event) => {
    setSearch(event.target.value);
    searchFor(gamers, search);
  };

  return (
    <section>
      <form
        className="search-bar"
        onSubmit={(event) => {
          event.preventDefault();
          searchFor(gamers, search);
        }}
      >
        <label htmlFor="search">Search: </label>
        <input
          type="text"
          placeholder="gamertag, game, rank..."
          onChange={handleTextChange}
        />
      </form>
    </section>
  );
}
