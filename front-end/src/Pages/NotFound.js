import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="NotFound">
      <h2 className="title">Page Not Found!!</h2>
      <Link className="back" to={`/gamers`}>
        <button>Go back home!</button>
      </Link>
    </div>
  );
}
