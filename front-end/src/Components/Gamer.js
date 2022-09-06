import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Gamer({ gamer }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="gamer-card" data-aos="fade-up">
      <Link to={`/gamers/${gamer.id}`}>
        <img src={gamer.image} alt={gamer.gamertag} />
        <h2>{`${gamer.gamertag} `}</h2>
        <h5 id="status">{gamer.status ? "🟢" : "🔴"}</h5>
        <p id="pronouns">({gamer.pronouns})</p>
        <h3>{gamer.game}</h3>
        <h5>{gamer.rank}</h5>
        <p id="tagline">{gamer.tagline}</p>
      </Link>
    </div>
  );
}
