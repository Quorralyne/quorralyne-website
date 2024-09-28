import Image from "next/image";
import heroImage from "../../public/images/heather-experience.jpg";

export default function Experience() {
  const experiences = [
    {
      title: "Director, Technology – Mobility & Innovation",
      company: "VML",
      period: "January 2017 - Present",
      description:
        "Created custom skill prototypes on the Alexa platform for numerous brands, coordinated external thought leadership opportunities, managed technology intern, aggregated voice interface development best practices.",
    },
    {
      title: "Senior Development Engineer – Mobile",
      company: "VML",
      period: "March 2016 - Present",
      description:
        "Full stack developer currently working on developing the Quick Trip mobile application. Focus on Web API services and native mobile implementation.",
    },
    {
      title: "Senior Solutions Consultant",
      company: "Oakwood Systems Group",
      period: "January 2015 – February 2016",
      description:
        "Architected and delivered inventory workflow mobile application using Xamarin. Created various .Net web applications utilizing MVC, Entity Framework, Angular and Web API.",
    },
    {
      title: "Senior Software Engineer",
      company: "Blue Ocean Consulting",
      period: "August 2014 – January 2015",
      description:
        "Responsible for native mobile architecture by leveraging Xamarin for cross-platform mobile development. Handled enhancements to existing applications using .Net, AngularJS, MVC and WebAPI.",
    },
  ];

  return (
    <div className="experience">
      <div className="hero">
        <Image
         src={heroImage}
         alt="Hero image"
         layout="fill"
         objectFit="cover"
         objectPosition="50% 40%"
        />
        <div className="hero-content">
          <h1>Professional Experience</h1>
        </div>
      </div>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <h2>{exp.title}</h2>
          <h3>{exp.company}</h3>
          <p>{exp.period}</p>
          <p>{exp.description}</p>
        </div>
      ))}
    </div>
  );
}
