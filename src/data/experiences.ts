import { StaticImageData } from "next/image";
import vmlLogo from "@/public/images/experience/vml.png";
import oakwoodLogo from "@/public/images/experience/oakwood.png";
import blueOceanLogo from "@/public/images/experience/blue-ocean.png";

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  image: StaticImageData;
  startDate: Date;  // Adding for proper date sorting
  endDate?: Date;   // Optional for current positions
  order?: number;   // Optional for manual ordering if needed
}

export const experiences: Experience[] = [
  {
    title: "Director, Technology – Mobility & Innovation",
    company: "VML",
    period: "January 2017 – Present",
    description:
      "Created custom skill prototypes on the Alexa platform for numerous brands, coordinated external thought leadership opportunities, managed technology intern, aggregated voice interface development best practices.",
    image: vmlLogo,
    startDate: new Date("2017-01-01"),
    order: 1,
  },
  {
    title: "Senior Development Engineer – Mobile",
    company: "VML",
    period: "March 2016 – Present",
    description:
      "Full stack developer currently working on developing the Quick Trip mobile application. Focus on Web API services and native mobile implementation.",
    image: vmlLogo,
    startDate: new Date("2016-03-01"),
    order: 2,
  },
  {
    title: "Senior Solutions Consultant",
    company: "Oakwood Systems Group",
    period: "January 2015 – February 2016",
    description:
      "Architected and delivered inventory workflow mobile application using Xamarin. Created various .Net web applications utilizing MVC, Entity Framework, Angular and Web API.",
    image: oakwoodLogo,
    startDate: new Date("2015-01-01"),
    endDate: new Date("2016-02-28"),
    order: 3,
  },
  {
    title: "Senior Software Engineer",
    company: "Blue Ocean Consulting",
    period: "August 2014 – January 2015",
    description:
      "Responsible for native mobile architecture by leveraging Xamarin for cross-platform mobile development. Handled enhancements to existing applications using .Net, AngularJS, MVC and WebAPI.",
    image: blueOceanLogo,
    startDate: new Date("2014-08-01"),
    endDate: new Date("2015-01-31"),
    order: 4,
  },
];
