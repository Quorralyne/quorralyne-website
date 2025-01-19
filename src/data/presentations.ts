import { StaticImageData } from "next/image";

import realWorldGuide from "@/public/images/presentations/real-world-guide-to-web-api-authentication-on-azure.avif";
import impostorSyndrome from "@/public/images/presentations/impostor-syndrome.avif";
import demystifyingUserManagement from "@/public/images/presentations/demystifying-user-management-for-voice-apps.avif";
import buildingForAlexaWithWebApi from "@/public/images/presentations/building-for-alexa-with-web-api.avif";
import theCareAndFeedingOfSoftwareEngineers from "@/public/images/presentations/the-care-and-feeding-of-software-engineers.avif";
import googleVsAlexa from "@/public/images/presentations/google-vs-alexa.avif";
import theVisibleDeveloper from "@/public/images/presentations/the-visible-developer.avif";
import smallerNotTaller from "@/public/images/presentations/smaller-not-taller.avif";
import speakToMe from "@/public/images/presentations/speak-to-me.avif";

export interface Presentation {
  title: string;
  description: string;
  image: StaticImageData;
  list?: string[];
  order: number;
}

export const presentations: Presentation[] = [
  {
    title: "Real World Guide to Web API Authentication on Azure",
    description:
      "So you've built an awesome C# API, but now you need to connect it to existing customer data. Service development keeps growing in complexity - requiring tons of steps for everything from databases to hosting, let alone user management. In this talk we cover A to Z the ultimate way to handle auth for your .NET APIs on Azure, in a way that's actually manageable and scalable for your team. Featuring Okta's identity management solution.",
    image: realWorldGuide,
    order: 1,
  },
  {
    title: "Impostor Syndrome: Overcoming Self-Doubt in Success",
    description:
      "Impostor Syndrome is the domain of the high achiever. Those who set the bar low are rarely it's victim. What matters most is not whether we fear failing, looking foolish or not being enough; it's whether we give those fears the power to keep us from taking the actions needed to achieve our goals and highest aspirations. In this session we will bring this sensitive subject to light by exploring:",
    list: [
      "Why having this mindset is detrimental to your career",
      "Identifying the differences between healthy concern and illogical doubt",
      "What it actually means to ‘fake it till you make it'",
      "How believing something negative about yourself can make it really happen",
      "Ways to cope once you experience a sincere failure",
      "Learning to graciously express confidence",
    ],
    image: impostorSyndrome,
    order: 2,
  },
  {
    title: "Demystifying User Management for Voice Apps",
    description:
      "Many voice skills can be built for anonymous users, but it takes an additional step to authenticate and track known ones. In this talk, we go over all the steps you need to link Google and Amazon customers to your voice skill and match them to existing users in your database. From account linking to database integration, it's all covered here. Finally, learn to create and track new users who discover your voice app through Alexa and Google Assistant. Features ASP.NET code and Azure hosting.",
    image: demystifyingUserManagement,
    order: 3,
  },
  {
    title: "Building for Alexa with Web API",
    description:
      "Amazon Echo, Amazon Tap and Echo Dot have brought voice interfaces to life for the home. We will discuss ways to integrate your existing software or database into an Alexa Skill, allowing for voice-activated, meaningful interaction with a user. Using this SAAS approach, with Web API hosted on Azure can make this process easy for rapid prototyping. We will build and deploy a skill that you can use immediately with your Alexa enabled device, and discuss the challenges of the publishing journey to get in Alexa's Skill Store.",
    image: buildingForAlexaWithWebApi,
    order: 4,
  },
  {
    title: "The Care and Feeding of Software Engineers",
    description:
      "After years of excellence as a developer who gets things done, you are rewarded with a leadership title and more responsibility. Only now you are expected to manage people and not just code. What motivated you to improve doesn't seem to always work on your team. So what do you do? We will explore the art of managing talented people and learning what the human needs for guidance and support from their leader.",
    image: theCareAndFeedingOfSoftwareEngineers,
    order: 5,
  },
  {
    title: "Google vs Alexa: Battle of the Bots",
    description:
      "Why choose? Support them all! This code-centric talk demonstrates the approach you need to centralize your app logic and handle multiple voice interface ecosystems at once. We will walk through code examples for Alexa and Google Assistant integration, discovering the pros and cons of each in detail.",
    image: googleVsAlexa,
    order: 6,
  },
  {
    title: "The Visible Developer: Why You Shouldn't Blend In",
    description:
      "Ever wonder how some technical people are recognized and promoted quicker than others with the same skillset? Yes, there is a formula to make it more likely. We will explore the habits of well known developers outside of their coding chops, to identify what additionally allowed them to become a trusted and known voice in their environment. This approach can be a benefit to you, no matter how junior or senior you are.",
    image: theVisibleDeveloper,
    order: 7,
  },
  {
    title: "Smaller Not Taller: Defeating the Mobile App Architecture Giant",
    description:
      "Making the right decisions for a mobile project can be a very involved process of trial and error before you find a good fit. Wouldn't it be nice if you had a map? In this session we will compare frameworks and approaches based on the kind of mobile project you are doing, and walk through what the actual code looks like to accomplish basic tasks for each one. We will cover native, hybrid and mobile web approaches for enterprise-level solutions.",
    image: smallerNotTaller,
    order: 8,
  },
  {
    title: "Speak to Me: Voice App Conversation Practices",
    description:
      "What does it mean to develop a good interaction - without any visual aids? Natural Language Processing (NLP) has opened the door to communicating vocally, and made more easy to develop with popular platform APIs and in-home devices like Google Home and Amazon Echo. How do you start thinking about building for one of these platforms, or all of them? We will go over what has to be kept in mind for the development life cycle and empower you to make the architectural decisions that make sense with this emerging software skillset. This is a high level architectural and voice design discussion to avoid pitfalls and enhance user delight with your chatbot or voice skill.",
    image: speakToMe,
    order: 9,
  },
];
