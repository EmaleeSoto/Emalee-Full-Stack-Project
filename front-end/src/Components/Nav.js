import { Link } from "react-router-dom";
import controller from "../assets/partyup_controller.png";

export default function Nav({ signOut, loggedIn }) {
  return (
    <nav>
      <div className="logo-wrapper">
        <span>
          <img src={controller} alt="controller" />
          <h3>
            Party <span>Up!</span>
          </h3>
        </span>
      </div>
      <div className="tab">
        <Link to="/">
          <h3>Home</h3>
        </Link>
      </div>
      <div className="tab">
        <Link to="/gamers">
          <h3>Meet Our Gamers</h3>
        </Link>
      </div>

      {loggedIn && (
        <div className="tab">
          <Link to="/newprofile">
            <h3>Create A Profile</h3>
          </Link>
        </div>
      )}

      <div className="tab">
        <Link to="/about" id="about">
          <h3>About</h3>
        </Link>
      </div>
      {loggedIn ? (
        <div id="login-wrapper">
          <button className="tab" id="logout" onClick={signOut}>
            Log Out
          </button>
        </div>
      ) : (
        <div className="tab" id="login-wrapper">
          <Link to="/sign-in" id="sign-in">
            <button>
              <span>Login</span>
            </button>
          </Link>
          <Link to="/sign-up" id="sign-up">
            <button>
              <span>Sign Up</span>
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
