import Gamer from "./Gamer.js";
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

  return (
    <div className="gamer-wrapper">
      {gamers.map((gamer) => {
        return <Gamer gamer={gamer} />;
      })}
    </div>
  );
}
