import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function GamerDetails() {
  const [gamer, setGamer] = useState([]);
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

  const handleDelete = () => {
    axios
      .delete(`${API}/gamers/${id}`)
      .then(() => {
        navigate("/gamers");
      })
      .catch(() => {
        console.warn("error");
      });
  };

  return (
    <div className="gamer-details">
      <hr></hr>
      <article>
        <div>
          <h2>{gamer.gamertag}</h2>
          <h5>{`${gamer.pronouns} - ${gamer.age} years old`}</h5>
          <h3>{gamer.game}</h3>
          <h5>{gamer.rank}</h5>
          <img src={gamer.image} alt={gamer.gamertag} />
          <h4>{`Country: ${gamer.country}`}</h4>
          <h4>About Me: </h4>
          <p>{gamer.about}</p>
          <h5>{gamer.status ? "Status: Active 🟢" : "Status: Inactive 🔴"}</h5>
          <h5>{`${gamer.socialmediaone} - ${gamer.socialmediatwo} - ${gamer.socialmediathree}`}</h5>
        </div>

        <div className="showNavigation">
          <div>
            <Link to={`/gamers`}>
              <button>Back</button>
            </Link>
          </div>
          <div>
            <Link to={`/gamers/${gamer.id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
          <div>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </article>
    </div>
  );
}
export default GamerDetails;
