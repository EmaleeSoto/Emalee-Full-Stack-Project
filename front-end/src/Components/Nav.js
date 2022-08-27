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
    </nav>
  );
}
