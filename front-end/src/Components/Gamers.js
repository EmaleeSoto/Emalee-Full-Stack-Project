import Gamer from "./Gamer.js";
import SearchBar from "./SearchBar.js";
import { useEffect, useState } from "react";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function Gamers() {
  const [gamers, setGamers] = useState([]);
  const [searchedGamers, setSearchedGamers] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/gamers`)
      .then((response) => {
        setGamers(response.data.payload);
        setSearchedGamers(response.data.payload);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  const searchFor = (gamers, search) => {
    const formatSearch = search.toLowerCase();
    const filteredGamers =
      formatSearch === undefined || formatSearch === ""
        ? gamers
        : gamers.filter((gamer) => {
            return (
              gamer.gamertag.toLowerCase().includes(formatSearch) ||
              gamer.game.toLowerCase().includes(formatSearch) ||
              gamer.rank.toLowerCase().includes(formatSearch)
            );
          });
    setSearchedGamers(filteredGamers);
  };

  return (
    <div className="gamers-div">
      <SearchBar gamers={gamers} searchFor={searchFor} />
      <div className="gamer-wrapper">
        {searchedGamers.map((gamer) => {
          return <Gamer key={gamer.id} gamer={gamer} />;
        })}
      </div>
    </div>
  );
}
