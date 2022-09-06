import { Link } from "react-router-dom";

export default function Gamer({ gamer }) {
  return (
    <div className="gamer-card">
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
