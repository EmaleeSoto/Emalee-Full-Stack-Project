import React from "react";

export default function Gamer({ gamer }) {
  return (
    <div>
      <h2>{gamer.gamertag}</h2>
      <h5>{`${gamer.pronouns} - ${gamer.age} years old`}</h5>
      <h3>{gamer.game}</h3>
      <h5>{gamer.rank}</h5>
      <img src={gamer.image} alt={gamer.gamertag} />
      <h4>{`Country: ${gamer.country}`}</h4>
      <p>{`About Me: ${gamer.about}`}</p>
      <h5>{`${gamer.socialmediaone} - ${gamer.socialmediatwo} - ${gamer.socialmediathree}`}</h5>
      <h5>{gamer.status ? "Status: Active" : "Status: Inactive"}</h5>
    </div>
  );
}
