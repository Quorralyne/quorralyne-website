import Image from "next/image";
import heroImage from "../../public/images/heather-appearances.jpg";

export default function Appearances() {
  const appearances = [
    {
      event: "SWETUGG",
      location: "Stockholm, Sweden",
      date: "February 7-8, 2019",
      talk: "Building for Alexa with Web API",
    },
    {
      event: "VISUAL STUDIO LIVE",
      location: "Las Vegas, Nevada",
      date: "March 3-8, 2019",
      talk: "The Visible Developer: Why You Shouldn't Blend In & Google vs Alexa: Battle of the Bots",
    },
    {
      event: "NDC COPENHAGEN",
      location: "Copenhagen, Denmark",
      date: "March 27-29, 2019",
      talk: "Real World Guide to Web API on Azure",
    },
    {
      event: "KCDC",
      location: "Kansas City, Missouri, USA",
      date: "July 17-19, 2019",
      talk: "Demystifying User Management for Voice Apps",
    },
    {
      event: "NDC SYDNEY",
      location: "Sydney, Australia",
      date: "October 14-18, 2019",
      talk: "TBD",
    },
  ];

  return (
    <div className="appearances">
      <div className="hero">
      <Image
          src={heroImage}
          alt="Hero image"
          layout="fill"
          objectFit="cover"
          objectPosition="50% 20%"
        />
        <div className="hero-content">
          <h1>Upcoming Appearances</h1>
        </div>
      </div>

      {appearances.map((appearance, index) => (
        <div key={index} className="appearance-item">
          <h2>{appearance.event}</h2>
          <p>{appearance.location}</p>
          <p>{appearance.date}</p>
          <p>Talk: {appearance.talk}</p>
        </div>
      ))}
    </div>
  );
}
