import React from "react";
import HomeScroll from "../Components/HomeScroll";

export default function Home() {
  return (
    <div className="Home fadein">
      <h1 className="title">Party Up!</h1>
      <section>
        <HomeScroll />
      </section>
    </div>
  );
}
