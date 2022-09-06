import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function About() {
  //initialize aos, gives global animations to html elements
  //duration set to 2 seconds
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="About">
      <h2 className="title">About Party Up!</h2>
      <section>
        <p data-aos="fade-up">
          Party Up! was created as a match-making site to bring gamers together.
          Meeting new people is a daunting task for the average person, and even
          more so when gamers want to find dates with similar gaming interests.
          As a gamer, regular dating sites consist of swiping right until you
          find a match, only to discover your match does not find your hobby
          quite as endearing as you'd have hoped.
        </p>
        <p data-aos="fade-up">
          Wouldn't it be nice to find a date that raids with you on Friday
          nights with your WoW guild? Or a Jungle player that helps your mid
          lane in your ranked League games? Or even just someone who understands
          your hobby and is supportive of the time you set aside to play online
          every now and then? Gaming can bring people together, and finding a
          partner who understands your love for the hobby can really buff a
          relationship.
        </p>
        <p data-aos="fade-up">
          So here at Party Up!, dating has never been so simple for gamers of
          all roles and ranks! We'll match you with your forever-duo, and the
          two of you can take on any gaming world together.
        </p>
      </section>
      <h2 className="title" data-aos="fade-up">
        Meet Our Dev
      </h2>
      <section>
        <img
          src="https://avatars.githubusercontent.com/u/44484202?s=400&u=3bb7d64849429c268ba1bf123bacee1a54ab5716&v=4"
          alt="emalee"
          data-aos="fade-up"
        />
        <p data-aos="fade-up">
          Nice to meet you! I'm Emalee Soto, the dev behind Party Up! I'm a
          fellow gamer who raids in WoW's Azeroth, supports in League of
          Legends, and fights in Apex's battle royale. As a gamer, I love to
          meet people who share my hobby, and I especially love spending my
          weekends playing games with my forever-duo.
        </p>
        <p data-aos="fade-up">
          I'm a full-stack Junior Web Developer at the Pursuit Felowship, a
          rigorous 12-month software engineering bootcamp. I have studied
          Computer Science at Hunter College, and plan to finish my Bachelor's
          within the next two years. Party Up! is my passion project, where I
          have combined my love for web development with my love for the gaming
          community, and I hope to bring people together in this community
          through my app. I hope you enjoy!
        </p>
      </section>
    </div>
  );
}
