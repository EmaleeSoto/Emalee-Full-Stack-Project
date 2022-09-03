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
        <Link to="/sign-in" id="sign-in">
          <h3>Sign In</h3>
        </Link>
      </div>
      <div>
        <Link to="/sign-up" id="sign-up">
          <h3>Sign Up</h3>
        </Link>
      </div>
    </nav>
  );
}
