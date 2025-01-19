import { StaticImageData } from "next/image";
import dotNetRocks from "@/public/images/media/dot-net-rocks.jpg";
import developerOnFire from "@/public/images/media/developer-on-fire.png";
import itCareerEnergizer from "@/public/images/media/it-career-energizer.jpg";
import buildStuff from "@/public/images/media/buildstuff.jpg";
import devoxxBelgium from "@/public/images/media/devoxx.jpg";

export interface MediaAppearance {
  title: string;
  description: string;
  episode: string;
  image: StaticImageData;
  date?: Date;  // Adding date for sorting capability
}

export const mediaAppearances: MediaAppearance[] = [
  {
    title: ".Net Rocks!",
    description: "Podcast Interview (2018)",
    episode: "Episode 1596: Voice UI with Heather Downing",
    image: dotNetRocks,
    date: new Date("2018-01-01"),  // Approximate date, update as needed
  },
  {
    title: "Developer On Fire",
    description: "Podcast Interview (2018)",
    episode: "Episode 284: Heather Downing - Positive Leadership",
    image: developerOnFire,
    date: new Date("2018-02-01"),  // Approximate date, update as needed
  },
  {
    title: "IT Career Energizer",
    description: "Podcast Interview (2018)",
    episode: "Episode 33 – Pride Comes Before A Fall with Heather Downing",
    image: itCareerEnergizer,
    date: new Date("2018-03-01"),  // Approximate date, update as needed
  },
  {
    title: "BuildStuff",
    description: "Conference Interview (2018)",
    episode:
      "Interviewed on team practices and what makes mobile exciting for developers.",
    image: buildStuff,
    date: new Date("2018-06-01"),  // Approximate date, update as needed
  },
  {
    title: "DEVOXX Belgium",
    description: "Conference Interview (2018)",
    episode: "Interviewed about developer confidence and learning issues.",
    image: devoxxBelgium,
    date: new Date("2018-11-01"),  // Approximate date, update as needed
  },
];
