import React from "react";
import controller from "../assets/partyup_controller.png";
import HomeScroll from "../Components/HomeScroll";

export default function Home() {
  return (
    <div className="Home">
      <h1 className="title">Party Up!</h1>
      <section>
        <HomeScroll />
      </section>
    </div>
  );
}
