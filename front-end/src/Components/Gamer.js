import { Link } from "react-router-dom";

export default function Gamer({ gamer }) {
  return (
    <div className="gamer-card">
      <Link to={`/gamers/${gamer.id}`}>
        <h2>{gamer.gamertag}</h2>
        <h5 id="status">{gamer.status ? "Active 🟢" : "Inactive 🔴"}</h5>
        <h3>{gamer.game}</h3>
        <h5>{gamer.rank}</h5>
        <img src={gamer.image} alt={gamer.gamertag} />
        <p>{gamer.tagline}</p>
      </Link>
    </div>
  );
}
