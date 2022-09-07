import partyup_girl from "../assets/partyup_girl_controller.png";
import partyup_boy from "../assets/partyup_guy_controller.png";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function GamerDetails({ loggedIn }) {
  const [gamer, setGamer] = useState([]);
  const [like, setLike] = useState(false);
  let { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${API}/gamers/${id}`)
      .then((res) => {
        setGamer(res.data.payload);
        navigate(`/gamers/${id}`);
      })
      .catch(() => {
        navigate("/not found");
      });
  }, [id, navigate]);

  const deleteGamer = () => {
    axios
      .delete(`${API}/gamers/${id}`)
      .then(() => {})
      .catch(() => {
        console.warn("error");
      });
  };

  const handleLikeButton = () => {
    setLike(!like);
  };

  const handleDelete = () => {
    if (
      window.confirm("Are you sure you want to delete this profile?") === true
    ) {
      deleteGamer();
      navigate("/deleted-profile");
    }
  };

  const displayIcon = (gamer) => {
    if (gamer.pronouns === undefined) {
      return <h2>whatever</h2>;
    } else if (gamer.pronouns.includes("him")) {
      return <img src={partyup_boy} alt="partyup_boy" id="partyup_boy" />;
    } else if (gamer.pronouns.includes("her")) {
      return <img src={partyup_girl} alt="partyup_girl" id="partyup_girl" />;
    }
  };

  const createOneMediaLink = (socialmedia) => {
    if (socialmedia.includes("tumblr")) {
      return (
        <a href={socialmedia} target="_blank" rel="noreferrer noopener">
          Tumblr
        </a>
      );
    } else if (socialmedia.includes("reddit")) {
      return (
        <a href={socialmedia} target="_blank" rel="noreferrer noopener">
          Reddit
        </a>
      );
    } else if (socialmedia.includes("instagram")) {
      return (
        <a href={socialmedia} target="_blank" rel="noreferrer noopener">
          Instagram
        </a>
      );
    } else if (socialmedia.includes("twitter")) {
      return (
        <a href={socialmedia} target="_blank" rel="noreferrer noopener">
          Twitter
        </a>
      );
    } else if (socialmedia.includes("facebook")) {
      return (
        <a href={socialmedia} target="_blank" rel="noreferrer noopener">
          Facebook
        </a>
      );
    } else if (socialmedia.includes("youtube")) {
      return (
        <a href={socialmedia} target="_blank" rel="noreferrer noopener">
          YouTube
        </a>
      );
    } else if (socialmedia.includes("twitch")) {
      return (
        <a href={socialmedia} target="_blank" rel="noreferrer noopener">
          Twitch
        </a>
      );
    } else if (socialmedia.includes("github")) {
      return (
        <a href={socialmedia} target="_blank" rel="noreferrer noopener">
          GitHub
        </a>
      );
    } else if (socialmedia.includes("linked")) {
      return (
        <a href={socialmedia} target="_blank" rel="noreferrer noopener">
          LinkedIn
        </a>
      );
    }
    return <a href={socialmedia}>Placeholder</a>;
  };

  const createSocialMediaLinks = (gamer) => {
    if (
      gamer.socialmediaone === undefined ||
      gamer.socialmediatwo === undefined ||
      gamer.socialmediathree === undefined
    ) {
      return <h2>whatever</h2>;
    }
    const gamerSocials = [
      gamer.socialmediaone.toLowerCase(),
      gamer.socialmediatwo.toLowerCase(),
      gamer.socialmediathree.toLowerCase(),
    ];
    const heading = document.createElement("h5");
    for (const social of gamerSocials) {
      heading.append(createOneMediaLink(social));
    }

    return (
      <h5>
        {createOneMediaLink(gamerSocials[0])}
        {createOneMediaLink(gamerSocials[1])}
        {createOneMediaLink(gamerSocials[2])}
      </h5>
    );
  };

  return (
    <div className="gamer-details">
      <section>
        <section className="gamer-image">
          <h2 id="gamertag">{gamer.gamertag}</h2>
          <h5 id="age">{`${gamer.pronouns} - ${gamer.age} years old`}</h5>
          <img src={gamer.image} alt={gamer.gamertag} />
          <h3 id="tagline">{gamer.tagline}</h3>
          <div>{createSocialMediaLinks(gamer)}</div>
        </section>
      </section>
      <section className="gamer-info">
        <h3>Plays {gamer.game}</h3>
        <h5> - {gamer.rank} - </h5>
        <h4>{`Based In: ${gamer.country}`}</h4>
        <h4 id="about-title">About Me: </h4>
        <p className="about-info">{gamer.about}</p>
        <h5>{gamer.status ? "Actively Looking 🟢" : "Not Available 🔴"}</h5>
        <div>{displayIcon(gamer)}</div>
        <div className="showNavigation" id={loggedIn ? "show" : "hide"}>
          <Link to={`/gamers/${gamer.id}/edit`} id="edit-button">
            <button>Edit</button>
          </Link>
          <div>
            <button onClick={handleDelete} id="delete-button">
              Delete
            </button>
          </div>
        </div>
        <section className="like-user" id={loggedIn ? "show" : "hide"}>
          <h4>{like ? "Unlike this User" : "Like this User?"}</h4>
          <button id="like-button" onClick={handleLikeButton}>
            {like ? "💗" : "❤️"}
          </button>
        </section>
      </section>
    </div>
  );
}
export default GamerDetails;
