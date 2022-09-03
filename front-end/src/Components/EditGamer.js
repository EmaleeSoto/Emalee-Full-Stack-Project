import React from "react";
import CountrySelectMenu from "./CountrySelectMenu";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function EditGamer() {
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
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/gamers/${id}`)
      .then((response) => {
        setGamer(response.data.payload);
      })
      .catch((err) => {
        // navigate("/not-found");
      });
  }, [id, navigate]);

  const editGamer = (gamer) => {
    axios
      .put(`${API}/gamers/${id}`, gamer)
      .then(() => {
        navigate(`/gamers`);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  const handleTextChange = (event) => {
    setGamer({ ...gamer, [event.target.id]: event.target.value });
  };
  const handleCheckbox = (event) => {
    setGamer({ ...gamer, status: !gamer.status });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editGamer(gamer, id);
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
          value={gamer.gamertag}
          maxlength="20"
        />
        <br></br>
        <label htmlFor="pronouns">Pronouns: </label>
        <br></br>
        <input
          id="pronouns"
          type="text"
          onChange={handleTextChange}
          value={gamer.pronouns}
        />
        <br></br>
        <label htmlFor="tagline">Tagline: </label>
        <br></br>
        <input
          id="tagline"
          type="text"
          onChange={handleTextChange}
          value={gamer.tagline}
          maxlength="100"
        />
        <br></br>
        <label htmlFor="game">Game of Choice: </label>
        <br></br>
        <input
          id="game"
          type="text"
          onChange={handleTextChange}
          value={gamer.game}
        />
        <br></br>
        <label htmlFor="rank">Rank: </label>
        <br></br>
        <input
          id="rank"
          type="text"
          onChange={handleTextChange}
          value={gamer.rank}
        />
        <br></br>
        <label htmlFor="role">Role: </label>
        <br></br>
        <input
          id="role"
          type="text"
          onChange={handleTextChange}
          value={gamer.role}
        />
        <br></br>
        <label htmlFor="age">Age: </label>
        <br></br>
        <input
          id="age"
          type="number"
          onChange={handleTextChange}
          value={gamer.age}
        />
        <br></br>
        <label htmlFor="image">Profile Pic: </label>
        <br></br>
        <input
          id="image"
          type="text"
          onChange={handleTextChange}
          value={gamer.image}
        />
        <br></br>
        <label htmlFor="country">Country: </label>
        <br></br>
        {/* <input
          id="country"
          type="text"
          onChange={handleTextChange}
          value={gamer.country}
        /> */}
        <CountrySelectMenu
          id="country"
          value={gamer.country}
          handleSelectChange={handleTextChange}
        />
        <br></br>
        <label htmlFor="about">About Me: </label>
        <br></br>
        <textarea
          id="about"
          onChange={handleTextChange}
          rows="6"
          cols="50"
          value={gamer.about}
          maxlength="300"
        />
        <br></br>
        <label htmlFor="socialmediaone">First Social Media: </label>
        <br></br>
        <input
          id="socialmediaone"
          type="text"
          onChange={handleTextChange}
          value={gamer.socialmediaone}
        />
        <br></br>
        <label htmlFor="socialmediatwo">Second Social Media: </label>
        <br></br>
        <input
          id="socialmediatwo"
          type="text"
          onChange={handleTextChange}
          value={gamer.socialmediatwo}
        />
        <br></br>
        <label htmlFor="socialmediathree">Third Social Media: </label>
        <br></br>
        <input
          id="socialmediathree"
          type="text"
          onChange={handleTextChange}
          value={gamer.socialmediathree}
        />
        <br></br>
        <label htmlFor="status">Currently Looking for Duo? </label>
        <input
          id="status"
          type="checkbox"
          onChange={handleCheckbox}
          value={gamer.status}
        />
        <br></br>
        <input className="submit-new" type="submit" value="Submit" />
      </form>
      <Link to={`/gamers/${id}`}>
        <button className="back">{`Never Mind!`}</button>
      </Link>
    </div>
  );
}
