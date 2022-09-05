import React from "react";
import controller from "../assets/partyup_controller.png";
import HomeScroll from "../Components/HomeScroll";

export default function Home() {
  return (
    <div className="Home">
      <h1>Party Up!</h1>
      <img src={controller} alt="controller" />
      <section>
        <HomeScroll />
      </section>
    </div>
  );
}
