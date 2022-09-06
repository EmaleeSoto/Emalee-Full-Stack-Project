import { Link } from "react-router-dom";
import controller from "../assets/partyup_controller.png";

export default function Nav({ signOut, loggedIn }) {
  return (
    <nav>
      <div className="logo-wrapper">
        <span>
          <img src={controller} alt="controller" />
          <h3>Party Up!</h3>
        </span>
      </div>
      <div>
        <Link to="/">
          <h3>Home</h3>
        </Link>
      </div>
      <div>
        <Link to="/gamers">
          <h3>Meet Our Gamers</h3>
        </Link>
      </div>
      <div>
        <Link to="/newprofile">
          <h3>Create A Profile</h3>
        </Link>
      </div>
      <div>
        <Link to="/about" id="about">
          <h3>About</h3>
        </Link>
      </div>
      {loggedIn ? (
        <button onClick={signOut}>Log Out</button>
      ) : (
        <div id="login-wrapper">
          <Link to="/sign-up" id="sign-up">
            <button>
              <span>Login/Sign Up</span>
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
