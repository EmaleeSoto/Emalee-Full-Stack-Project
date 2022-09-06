import React from "react";
import CountrySelectMenu from "./CountrySelectMenu";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
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
    <div className="form-wrapper">
      <form className="gamer-form" onSubmit={handleSubmit}>
        <span>
          <label htmlFor="gamertag">Gamertag: </label>
          <input
            id="gamertag"
            type="text"
            onChange={handleTextChange}
            maxLength="20"
            required
          />
        </span>
        <br></br>

        <span>
          <label htmlFor="pronouns">Pronouns: </label>

          <input id="pronouns" type="text" onChange={handleTextChange} />
        </span>
        <br></br>

        <span>
          <label htmlFor="tagline">Tagline: </label>

          <input
            id="tagline"
            type="text"
            onChange={handleTextChange}
            maxLength="100"
          />
        </span>
        <br></br>

        <span>
          <label htmlFor="game">Game of Choice: </label>

          <input id="game" type="text" onChange={handleTextChange} required />
        </span>
        <br></br>

        <span>
          <label htmlFor="rank">Rank: </label>

          <input id="rank" type="text" onChange={handleTextChange} />
        </span>
        <br></br>

        <span>
          <label htmlFor="role">Role: </label>

          <input id="role" type="text" onChange={handleTextChange} />
        </span>
        <br></br>

        <span>
          <label htmlFor="age">Age: </label>

          <input id="age" type="number" onChange={handleTextChange} />
        </span>

        <br></br>
        <span>
          <label htmlFor="image">Profile Pic: </label>

          <input id="image" type="text" onChange={handleTextChange} />
        </span>
        <br></br>

        <span>
          <label htmlFor="country">Country: </label>
          <CountrySelectMenu
            id="country"
            handleSelectChange={handleTextChange}
          />
        </span>
        <br></br>

        <span>
          <label htmlFor="about">About Me: </label>
          <textarea
            id="about"
            onChange={handleTextChange}
            rows="6"
            cols="50"
            maxLength="300"
          />
        </span>
        <br></br>

        <span>
          <label htmlFor="socialmediaone">First Social Media: </label>
          <input id="socialmediaone" type="text" onChange={handleTextChange} />
        </span>
        <br></br>

        <span>
          <label htmlFor="socialmediatwo">Second Social Media: </label>
          <input id="socialmediatwo" type="text" onChange={handleTextChange} />
        </span>
        <br></br>

        <span>
          <label htmlFor="socialmediathree">Third Social Media: </label>
          <input
            id="socialmediathree"
            type="text"
            onChange={handleTextChange}
          />
        </span>
        <br></br>

        <span>
          <label htmlFor="status">Currently Looking for Duo? </label>
          <input id="status" type="checkbox" onChange={handleCheckbox} />
        </span>
        <br></br>

        <input className="submit-new" type="submit" value="Submit" />
      </form>
      <Link className="back" to={`/gamers`}>
        <button>Never Mind!</button>
      </Link>
    </div>
  );
}
