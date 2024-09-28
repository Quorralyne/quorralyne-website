import Image from "next/image";
import Link from "next/link";

import heroImage from "../public/images/heather-home.jpg";

export default function Home() {
  return (
    <div className="home">
      <div className="hero">
        <Image
          src={heroImage}
          alt="Hero image"
          layout="fill"
          objectFit="cover"
          objectPosition="45% 30%"
        />
        <div className="hero-content">
          <h1>Heather Downing</h1>
          <h2>Staying Curious.</h2>
        </div>
      </div>

      <section className="strengths">
        <h3>What I do have is a very particular set of skills</h3>
        <div className="strength-items">
          <div>
            <h4>Server-side Development</h4>
            <p>Slim, maintainable RESTful services</p>
          </div>
          <div>
            <h4>Conversational AI</h4>
            <p>Voice Apps and Chat Bots</p>
          </div>
          <div>
            <h4>Mobile App Development</h4>
            <p>Cross-Platform Approach</p>
          </div>
          <div>
            <h4>Technical Speaking</h4>
            <p>Presentations on code and confidence</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h3>Are You Curious?</h3>
        <Link href="/contact">Contact Me</Link>
      </section>
    </div>
  );
}
