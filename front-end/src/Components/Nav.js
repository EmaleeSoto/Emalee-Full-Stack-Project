import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
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
        <Link to="/about">
          <h3>About</h3>
        </Link>
      </div>
      <div id="login-wrapper">
        <Link to="/sign-in" id="sign-in">
          <button>
            <span>Log In</span>
          </button>
        </Link>
        <Link to="/sign-up" id="sign-up">
          <button>
            <span>Sign Up</span>
          </button>
        </Link>
      </div>
    </nav>
  );
}
