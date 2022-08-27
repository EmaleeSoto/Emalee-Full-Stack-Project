import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <Link to="/gamers">
        <h1>Meet Our Gamers</h1>
      </Link>
      <Link to="/newprofile">
        <h1>Create A Profile</h1>
      </Link>
    </nav>
  );
}
