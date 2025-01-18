import { StaticImageData } from "next/image";

import swetugg from "@/public/images/appearances/swetugg.png";
import jfokus from "@/public/images/appearances/jfokus-2019.png";
import visualStudioLive from "@/public/images/appearances/visual-studio-live.png";
import ndcCopenhagen from "@/public/images/appearances/ndc-copenhagen.png";
import lucerneUserGroup from "@/public/images/appearances/placeholder.png";
import codestock from "@/public/images/appearances/placeholder.png";
import kcDotNet from "@/public/images/appearances/placeholder.png";
import buildStuffEspana from "@/public/images/appearances/placeholder.png";
import techoramaBelgium from "@/public/images/appearances/placeholder.png";
import devsum from "@/public/images/appearances/placeholder.png";
import ndcOslo from "@/public/images/appearances/placeholder.png";
import kcdc from "@/public/images/appearances/kcdc.png";
import thatConference from "@/public/images/appearances/placeholder.png";
import techoramaNetherlands from "@/public/images/appearances/placeholder.png";
import ndcSydney from "@/public/images/appearances/placeholder.png";
import buildStuffLt from "@/public/images/appearances/placeholder.png";
import antarcticonf from "@/public/images/appearances/placeholder.png";


export interface Appearance {
  event: string;
  location: string;
  country: string;
  date: Date;
  endDate?: Date;
  talk: string;
  image: StaticImageData;
}

export const appearances: Appearance[] = [
  {
    event: "SWETUGG",
    location: "Stockholm, Sweden",
    country: "SE",
    date: new Date("2019-02-07"),
    endDate: new Date("2019-02-08"),
    talk: "Building for Alexa with Web API",
    image: swetugg,
  },
  {
    event: "JFOKUS",
    location: "Stockholm, Sweden",
    country: "SE",
    date: new Date("2019-02-05"),
    endDate: new Date("2019-02-06"),
    talk: "Google vs Alexa: Battle of the Bots",
    image: jfokus,
  },
  {
    event: "VISUAL STUDIO LIVE",
    location: "Las Vegas, Nevada",
    country: "US",
    date: new Date("2019-03-03"),
    endDate: new Date("2019-03-08"),
    talk: "The Visible Developer: Why You Shouldn't Blend In & Google vs Alexa: Battle of the Bots",
    image: visualStudioLive,
  },
  {
    event: "NDC COPENHAGEN",
    location: "Copenhagen, Denmark",
    country: "DK",
    date: new Date("2019-03-27"),
    endDate: new Date("2019-03-29"),
    talk: "Real World Guide to Web API on Azure",
    image: ndcCopenhagen,
  },
  {
    event: "LUCERNE USER GROUP",
    location: "Lucerne, Switzerland",
    country: "CH",
    date: new Date("2019-04-01"),
    endDate: new Date("2019-04-01"),
    talk: "Google vs Alexa: Battle of the Bots",
    image: lucerneUserGroup,
  },
  {
    event: "CODESTOCK",
    location: "Knoxville, Tennessee",
    country: "US",
    date: new Date("2019-04-12"),
    endDate: new Date("2019-04-13"),
    talk: "The Visible Developer: Why You Shouldn't Blend In & TDD with Kotlin",
    image: codestock,
  },
  {
    event: "KC .NET USER GROUP",
    location: "Kansas City, Missouri",
    country: "US",
    date: new Date("2019-04-23"),
    endDate: new Date("2019-04-23"),
    talk: "Real World Guide to Web API on Azure",
    image: kcDotNet,
  },
  {
    event: "BUILDSTUFF ESPANA",
    location: "Malaga, Spain",
    country: "ES",
    date: new Date("2019-05-04"),
    endDate: new Date("2019-05-05"),
    talk: "The Visible Developer: Why You Shouldn't Blend In & Building for Alexa with Web API",
    image: buildStuffEspana,
  },
  {
    event: "TECHORAMA BELGIUM",
    location: "Antwerp, Belgium",
    country: "BE",
    date: new Date("2019-05-20"),
    endDate: new Date("2019-05-22"),
    talk: "The Care and Feeding of Software Engineers",
    image: techoramaBelgium,
  },
  {
    event: "DEVSUM",
    location: "Stockholm, Sweden",
    country: "SE",
    date: new Date("2019-05-23"),
    endDate: new Date("2019-05-24"),
    talk: "The Visible Developer: Why You Shouldn't Blend In",
    image: devsum,
  },
  {
    event: "NDC OSLO",
    location: "Oslo, Norway",
    country: "NO",
    date: new Date("2019-06-17"),
    endDate: new Date("2019-06-21"),
    talk: "The Visible Developer: Why You Shouldn't Blend In",
    image: ndcOslo,
  },
  {
    event: "KCDC",
    location: "Kansas City, Missouri",
    country: "US",
    date: new Date("2019-07-17"),
    endDate: new Date("2019-07-19"),
    talk: "Demystifying User Management for Voice Apps",
    image: kcdc,
  },
  {
    event: "THAT CONFERENCE",
    location: "Wisconsin Dells, Wisconsin",
    country: "US",
    date: new Date("2019-08-05"),
    endDate: new Date("2019-08-08"),
    talk: "Real World Guide to Web API Authentication on Azure",
    image: thatConference,
  },
  {
    event: "TECHORAMA NETHERLANDS",
    location: "Ede, The Netherlands",
    country: "NL",
    date: new Date("2019-10-01"),
    endDate: new Date("2019-10-02"),
    talk: "TBD",
    image: techoramaNetherlands,
  },
  {
    event: "NDC SYDNEY",
    location: "Sydney, Australia",
    country: "AU",
    date: new Date("2019-10-14"),
    endDate: new Date("2019-10-18"),
    talk: "TBD",
    image: ndcSydney,
  },
  {
    event: "BUILDSTUFF LT",
    location: "Vilnius, Lithuania",
    country: "LT",
    date: new Date("2019-11-13"),
    endDate: new Date("2019-11-17"),
    talk: "TBD",
    image: buildStuffLt,
  },
  {
    event: "ANTARCTICONF",
    location: "Coral Princess, Antarctica",
    country: "AQ",
    date: new Date("2020-01-05"),
    endDate: new Date("2020-01-21"),
    talk: "The Care and Feeding of Software Engineers",
    image: antarcticonf,
  },
];
