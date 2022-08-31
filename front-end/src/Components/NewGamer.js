import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

export default function NewGamer() {
  const [gamer, setGamer] = useState({
    gamertag: "",
    pronouns: "",
    tagline: "",
    game: "",
    rank: "",
    role: "",
    age: 0,
    image: "",
    country: "",
    about: "",
    socialmediaone: "",
    socialmediatwo: "",
    socialmediathree: "",
    status: false,
  });
  const navigate = useNavigate();

  const addGamer = (newGamer) => {
    axios
      .post(`${API}/gamers`, newGamer)
      .then(() => {
        navigate(`/gamers`);
      })
      .catch((error) => console.warn(error));
  };

  const handleTextChange = (event) => {
    setGamer({ ...gamer, [event.target.id]: event.target.value });
  };

  const handleCheckbox = () => {
    setGamer({ ...gamer, status: !gamer.status });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addGamer(gamer);
  };

  return (
    <div>
      <form id="new-gamer" onSubmit={handleSubmit}>
        <label htmlFor="gamertag">Gamertag: </label>
        <br></br>
        <input
          id="gamertag"
          type="text"
          onChange={handleTextChange}
          maxlength="30"
        />
        <br></br>
        <label htmlFor="pronouns">Pronouns: </label>
        <br></br>
        <input id="pronouns" type="text" onChange={handleTextChange} />
        <br></br>
        <label htmlFor="tagline">Tagline: </label>
        <br></br>
        <input
          id="tagline"
          type="text"
          onChange={handleTextChange}
          maxlength="100"
        />
        <br></br>
        <label htmlFor="game">Game of Choice: </label>
        <br></br>
        <input id="game" type="text" onChange={handleTextChange} />
        <br></br>
        <label htmlFor="rank">Rank: </label>
        <br></br>
        <input id="rank" type="text" onChange={handleTextChange} />
        <br></br>
        <label htmlFor="role">Role: </label>
        <br></br>
        <input id="role" type="text" onChange={handleTextChange} />
        <br></br>
        <label htmlFor="age">Age: </label>
        <br></br>
        <input id="age" type="number" onChange={handleTextChange} />
        <br></br>
        <label htmlFor="image">Profile Pic: </label>
        <br></br>
        <input id="image" type="text" onChange={handleTextChange} />
        <br></br>
        <label htmlFor="country">Country: </label>
        <br></br>
        <input id="country" type="text" onChange={handleTextChange} />
        <br></br>
        <label htmlFor="about">About Me: </label>
        <br></br>
        <textarea
          id="about"
          onChange={handleTextChange}
          rows="6"
          cols="50"
          maxlength="300"
        />
        <br></br>
        <label htmlFor="socialmediaone">First Social Media: </label>
        <br></br>
        <input id="socialmediaone" type="text" onChange={handleTextChange} />
        <br></br>
        <label htmlFor="socialmediatwo">Second Social Media: </label>
        <br></br>
        <input id="socialmediatwo" type="text" onChange={handleTextChange} />
        <br></br>
        <label htmlFor="socialmediathree">Third Social Media: </label>
        <br></br>
        <input id="socialmediathree" type="text" onChange={handleTextChange} />
        <br></br>
        <label htmlFor="status">Currently Looking for Duo? </label>
        <input id="status" type="checkbox" onChange={handleCheckbox} />
        <br></br>
        <input className="submit-new" type="submit" value="Submit" />
      </form>
      <button className="back">Back</button>
    </div>
  );
}
