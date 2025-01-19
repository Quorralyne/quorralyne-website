import { StaticImageData } from "next/image";
import codingMotivation from "@/public/images/articles/coding-motivation.png";
import impressiveInTech from "@/public/images/articles/impressive-in-tech.png";

export interface Article {
  title: string;
  excerpt: string;
  date: Date;
  link: string;
  image: StaticImageData;
}

export const articles: Article[] = [
  {
    title: "The truth of coding motivation",
    excerpt:
      "Years ago, a programmer's life was very different. Someone in the STEM field is considered quite smart. In many circles...",
    date: new Date("2018-01-25"),
    link: "https://medium.com/@quorralyne/the-truth-of-coding-motivation-377cd6c4be2f",
    image: codingMotivation,
  },
  {
    title: "Are you impressive in technology?",
    excerpt: `When you hear the word "impressive" used as a descriptor for someone in the tech industry, what is the bar that you set for that...`,
    date: new Date("2018-02-02"),
    link: "https://medium.com/@quorralyne/are-you-impressive-in-technology-70008fcb02fe",
    image: impressiveInTech,
  },
];
