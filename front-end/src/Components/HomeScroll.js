import guy_girl from "../assets/partyup_guy_girl.png";

export default function HomeScroll() {
  return (
    <section>
      <section className="reveal">
        <h2>Come Party Up with your forever-duo!</h2>
        <h2>Looking for a Support to your Carry?</h2>
        <h2>Or a Tank to your Healer?</h2>
      </section>
      <section className="reveal">
        <span>
          <h2>
            Look no further, because here at Party Up! finding a gaming partner
            has never been so easy! Party Up with your forever-duo in your
            favorite games!
          </h2>
          <img src={guy_girl} alt="guy-girl" id="guy-girl" />
        </span>
      </section>
    </section>
  );
}
