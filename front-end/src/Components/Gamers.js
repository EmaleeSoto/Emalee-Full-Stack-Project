import Gamer from "./Gamer.js";
import SearchBar from "./SearchBar.js";
import { useEffect, useState } from "react";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function Gamers() {
  const [gamers, setGamers] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/gamers`)
      .then((response) => {
        setGamers(response.data.payload);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  const searchFor = (search, gamers) => {
    const newGamers = !search
      ? gamers
      : gamers.filter((gamer) => {
          return (
            gamer.gamertag === search ||
            gamer.game === search ||
            gamer.rank === search
          );
        });

    setGamers(newGamers);
  };

  // pickCohort = (code, array) => {
  //   const newArray =
  //     !code || code === "All Classes"
  //       ? array
  //       : array.filter((element) => {
  //           return element.cohort.cohortCode === code;
  //         });

  //   this.setState({
  //     classCode: code,
  //     currentCohort: newArray,
  //   });
  // };

  return (
    <div className="gamers-div">
      <SearchBar gamers={gamers} searchFor={searchFor} />
      <div className="gamer-wrapper">
        {gamers.map((gamer) => {
          return <Gamer gamer={gamer} />;
        })}
      </div>
    </div>
  );
}
