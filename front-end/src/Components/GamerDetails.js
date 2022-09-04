import DeleteModal from "./DeleteModal";
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

  const deleteGamer = () => {
    axios
      .delete(`${API}/gamers/${id}`)
      .then((navigate) => {
        // <DeleteModal navigate={navigate} />;
        // navigate("/deleted-profile");
      })
      .catch(() => {
        console.warn("error");
      });
  };

  const handleDelete = () => {
    if (
      window.confirm("Are you sure you want to delete this profile?") === true
    ) {
      deleteGamer();
      navigate("/deleted-profile");
    }
  };

  return (
    <div className="gamer-details">
      <hr></hr>
      <article>
        <div>
          <section className="gamer-info">
            <h2>{gamer.gamertag}</h2>
            <h5>{`${gamer.pronouns} - ${gamer.age} years old`}</h5>
            <h3>{gamer.game}</h3>
            <h5>{gamer.rank}</h5>
          </section>
          <section className="gamer-image">
            <img src={gamer.image} alt={gamer.gamertag} />
            <h4>{`Country: ${gamer.country}`}</h4>
          </section>
          <aside>
            <h4>About Me: </h4>
            <p>{gamer.about}</p>
            <h5>
              {gamer.status ? "Status: Active 🟢" : "Status: Inactive 🔴"}
            </h5>
            <h5>{`${gamer.socialmediaone} - ${gamer.socialmediatwo} - ${gamer.socialmediathree}`}</h5>
          </aside>
        </div>

        <Link to={`/gamers`} id="back-button">
          <button>Back</button>
        </Link>

        <div className="showNavigation">
          <Link to={`/gamers/${gamer.id}/edit`} id="edit-button">
            <button>Edit</button>
          </Link>
          <div>
            <button onClick={handleDelete} id="delete-button">
              Delete
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
export default GamerDetails;
