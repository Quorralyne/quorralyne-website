import Image  from 'next/image';
import heroImage from "../../public/images/heather-media.jpg";

export default function Media() {
    const mediaAppearances = [
      {
        title: ".Net Rocks!",
        description: "Podcast Interview (2018)",
        episode: "Episode 1524 Voice Programming with Heather Downing"
      },
      {
        title: "Developer On Fire",
        description: "Podcast Interview (2017)",
        episode: "Episode 284: Heather Downing - Positive Leadership"
      },
      {
        title: "IT Career Energizer",
        description: "Podcast Interview (2017)",
        episode: "Episode 33 – Pride Comes Before A Fall with Heather Downing"
      },
      {
        title: "BuildStuff",
        description: "Conference Interview (2017)",
        episode: "Interviewed on team practices and what makes mobile exciting for developers."
      },
      {
        title: "DEVOXX Belgium",
        description: "Conference Interview (2017)",
        episode: "Interviewed about developer confidence and learning issues."
      }
    ];
  
    return (
      <div className="media">
      <div className="hero">
        <Image
         src={heroImage}
         alt="Hero image"
         layout="fill"
         objectFit="cover"
         objectPosition="50% 40%"
        />
        <div className="hero-content">
          <h1>Media Appearances</h1>
        </div>
      </div>
        {mediaAppearances.map((appearance, index) => (
          <div key={index} className="media-item">
            <h2>{appearance.title}</h2>
            <p>{appearance.description}</p>
            <p>{appearance.episode}</p>
          </div>
        ))}
      </div>
    )
  }