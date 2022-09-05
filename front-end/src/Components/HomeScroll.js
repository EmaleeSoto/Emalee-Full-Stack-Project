import guy_girl from "../assets/partyup_guy_girl.png";
import { useState } from "react";

export default function HomeScroll() {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    setVisible(true);
  };
  return (
    <section onScroll={handleScroll} className={visible ? "show" : "hide"}>
      <h2>Come Party Up with your forever-duo!</h2>
      <h2>Looking for a Support to your Carry?</h2>
      <h2>Or a Tank to your Healer?</h2>
      <span>
        <h2>
          Look no further, because here at Party Up! finding a gaming partner
          has never been so easy! Party Up with your forever-duo in your
          favorite games!
        </h2>
        <img src={guy_girl} alt="guy-girl" />
      </span>
    </section>
  );
}
