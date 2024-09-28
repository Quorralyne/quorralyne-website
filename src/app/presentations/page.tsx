import Image from "next/image";
import heroImage from "../../public/images/heather-presentations.jpg";


export default function Presentations() {
  const presentations = [
    {
      title: "Real World Guide to Web API Authentication on Azure",
      description:
        "Covering A to Z the ultimate way to handle auth for your .NET APIs on Azure, in a way that's actually manageable and scalable for your team.",
    },
    {
      title: "Impostor Syndrome: Overcoming Self-Doubt in Success",
      description:
        "Exploring the impact of impostor syndrome on high achievers and strategies to overcome it.",
    },
    {
      title: "Demystifying User Management for Voice Apps",
      description:
        "A comprehensive look at authenticating and tracking users in voice applications for Google and Amazon platforms.",
    },
    {
      title: "Building for Alexa with Web API",
      description:
        "Integrating existing software or databases into an Alexa Skill using Web API hosted on Azure.",
    },
    {
      title: "Google vs Alexa: Battle of the Bots",
      description:
        "A code-centric comparison of developing for multiple voice interface ecosystems.",
    },
  ];

  return (
    <div className="presentations">
      <div className="hero">
      <Image
          src={heroImage}
          alt="Hero image"
          layout="fill"
          objectFit="cover"
          objectPosition="75% 50%"
        />
        <div className="hero-content">
          <h1>Presentations</h1>
        </div>
      </div>

      {presentations.map((presentation, index) => (
        <div key={index} className="presentation-item">
          <h2>{presentation.title}</h2>
          <p>{presentation.description}</p>
        </div>
      ))}
    </div>
  );
}
