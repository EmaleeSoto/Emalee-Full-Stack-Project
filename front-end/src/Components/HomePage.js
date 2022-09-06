import guy_girl from "../assets/partyup_guy_girl.png";

export default function HomePage() {
  return (
    <section>
      <section className="intro">
        <h2>Looking for a Support to your Carry?</h2>
        <h2>Or a Tank to your Healer?</h2>
        <h2>
          {`Or maybe you just want a gaming buddy to cuddle up with at night :)`}
        </h2>
      </section>
      <section>
        <span>
          <h2>
            Well look no further, because here at Party Up! finding a gaming
            partner has never been so easy! Browse through our users and connect
            with people who love the same games as you do.
          </h2>
          <img src={guy_girl} alt="guy-girl" id="guy-girl" />
        </span>
      </section>
    </section>
  );
}
