import GamerDetails from "../Components/GamerDetails";

export default function Show({ loggedIn }) {
  return (
    <div className="Show">
      <GamerDetails loggedIn={loggedIn} />
    </div>
  );
}
