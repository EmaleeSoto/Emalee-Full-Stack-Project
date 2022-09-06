import React from "react";
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
    editGamer(gamer);
  };

  return (
    <div>
      <form className="gamer-form" onSubmit={handleSubmit}>
        <span>
          <label htmlFor="gamertag">Gamertag: </label>
          <input
            id="gamertag"
            type="text"
            onChange={handleTextChange}
            value={gamer.gamertag}
            maxLength="20"
          />
        </span>
        <br></br>

        <span>
          <label htmlFor="pronouns">Pronouns: </label>
          <input
            id="pronouns"
            type="text"
            onChange={handleTextChange}
            value={gamer.pronouns}
          />
        </span>
        <br></br>

        <span>
          <label htmlFor="tagline">Tagline: </label>
          <input
            id="tagline"
            type="text"
            onChange={handleTextChange}
            value={gamer.tagline}
            maxLength="100"
          />
        </span>
        <br></br>

        <span>
          <label htmlFor="game">Game of Choice: </label>
          <input
            id="game"
            type="text"
            onChange={handleTextChange}
            value={gamer.game}
          />
        </span>
        <br></br>

        <span>
          <label htmlFor="rank">Rank: </label>
          <input
            id="rank"
            type="text"
            onChange={handleTextChange}
            value={gamer.rank}
          />
        </span>
        <br></br>

        <span>
          <label htmlFor="role">Role: </label>
          <input
            id="role"
            type="text"
            onChange={handleTextChange}
            value={gamer.role}
          />
        </span>
        <br></br>

        <span>
          <label htmlFor="age">Age: </label>
          <input
            id="age"
            type="number"
            onChange={handleTextChange}
            value={gamer.age}
          />
        </span>
        <br></br>

        <span>
          <label htmlFor="image">Profile Pic: </label>
          <input
            id="image"
            type="text"
            onChange={handleTextChange}
            value={gamer.image}
          />
        </span>
        <br></br>

        <span>
          <label htmlFor="country">Country: </label>
          <input
            id="country"
            type="text"
            onChange={handleTextChange}
            value={gamer.country}
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
            value={gamer.about}
            maxLength="300"
          />
        </span>
        <br></br>

        <span>
          <label htmlFor="socialmediaone">First Social Media: </label>
          <input
            id="socialmediaone"
            type="text"
            onChange={handleTextChange}
            value={gamer.socialmediaone}
          />
        </span>
        <br></br>

        <span>
          <label htmlFor="socialmediatwo">Second Social Media: </label>
          <input
            id="socialmediatwo"
            type="text"
            onChange={handleTextChange}
            value={gamer.socialmediatwo}
          />
        </span>
        <br></br>

        <span>
          <label htmlFor="socialmediathree">Third Social Media: </label>
          <input
            id="socialmediathree"
            type="text"
            onChange={handleTextChange}
            value={gamer.socialmediathree}
          />
        </span>
        <br></br>

        <span>
          <label htmlFor="status">Currently Looking for Duo? </label>
          <input
            id="status"
            type="checkbox"
            onChange={handleCheckbox}
            value={gamer.status}
          />
        </span>
        <br></br>

        <input className="submit-new" type="submit" value="Submit" />
      </form>
      <Link to={`/gamers/${id}`}>
        <button className="back">{`Never Mind!`}</button>
      </Link>
    </div>
  );
}
