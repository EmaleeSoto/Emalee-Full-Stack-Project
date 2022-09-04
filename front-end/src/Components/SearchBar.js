import React from "react";

export default function SearchBar({ gamers, searchFor }) {
  return (
    <section>
      <form
        className="search-bar"
        onSubmit={(event) => {
          event.preventDefault();
          searchFor(gamers, event.target.value);
        }}
      >
        <label htmlFor="search">Search: </label>
        <input type="text" placeholder="user-id, game, rank..." />
      </form>
    </section>
  );
}
