"use client";

import { Grid } from "@mantine/core";
import {
  Button,
  Section,
  Navigation,
  Footer,
  SkillCard,
} from "@/components/ui";
import Hero from "@/components/Hero";
import heroImage from "@/public/images/heather-home.jpg";
import Link from "next/link";
import { getSkills } from "@/services/skills";

export default function Home() {
  const skills = getSkills();
  
  return (
    <main>
      <Navigation />

      <Hero
        image={heroImage}
        title="Heather Downing"
        subtitle="Senior software developer and international speaker specializing in backend microservices, voice app development, and mobile cross-platform apps."
      />

      <Section title="Skills">
        <Grid>
          {skills.map((skill, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 6 }}>
              <SkillCard {...skill} />
            </Grid.Col>
          ))}
        </Grid>
      </Section>

      <Section title="Are you curious?" centered highlight size="xl">
        <Link href="/contact" passHref>
          <Button variant="primary">
            Contact Me
          </Button>
        </Link>
      </Section>

      <Footer />
    </main>
  );
}
