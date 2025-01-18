"use client";

import { Section, Navigation, Footer } from "@/components/ui";
import Hero from "@/components/Hero";
import heroImage from "@/public/images/heather-bio.jpg";

export default function Bio() {
  return (
    <main>
      <Navigation />

      <Hero
        heroImage={heroImage}
        heading="About Heather Downing"
        subHeading="Software Developer & Speaker"
      />

      <Section title="Professional Background">
        <p>
          Heather is a passionate coder and entrepreneur with experience working
          with Fortune 500 companies building enterprise-level voice, mobile,
          and C#/.Net applications. She focuses on external thought leadership,
          encouraging fellow programmers to present on topics outside of the
          office and in the community.
        </p>
        <p>
          As an international technical speaker, Heather shares her expertise on
          various platforms. She is also a co-host of the YouTube channel
          &quot;The Hello World Show&quot; — a weekly video series that
          interviews software masters and teaches the audience something
          valuable in less than 10 minutes.
        </p>
      </Section>

      <Section title="Advocacy & Personal Journey">
        <p>
          Heather is an advocate for those with nontraditional backgrounds
          entering the world of software development. She changed careers at 27
          and does not have a degree, yet has built a reputation as an early
          adapter of new tech. She is an advocate of women in tech and is part
          of Kansas City Women in Technology.
        </p>
      </Section>

      <Section title="Outside of Tech">
        <p>
          When not coding, Heather spends her time as a competitive equestrian
          and learning the art of mounted archery.
        </p>
      </Section>

      <Footer />
    </main>
  );
}
