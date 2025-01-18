"use client";

import Image, { StaticImageData } from "next/image";
import { Grid, Paper, Title, Text } from "@mantine/core";
import { Section, Navigation, Footer } from "@/components/ui";
import Hero from "@/components/Hero";
import heroImage from "@/public/images/heather-media.jpg";
import dotNetRocks from "@/public/images/media/dot-net-rocks.jpg";
import developerOnFire from "@/public/images/media/developer-on-fire.png";
import itCareerEnergizer from "@/public/images/media/it-career-energizer.jpg";
import buildStuff from "@/public/images/media/buildstuff.jpg";
import devoxxBelgium from "@/public/images/media/devoxx.jpg";

interface MediaAppearance {
  title: string;
  description: string;
  episode: string;
  image: StaticImageData;
}

export default function Media() {
  const mediaAppearances: MediaAppearance[] = [
    {
      title: ".Net Rocks!",
      description: "Podcast Interview (2018)",
      episode: "Episode 1596: Voice UI with Heather Downing",
      image: dotNetRocks,
    },
    {
      title: "Developer On Fire",
      description: "Podcast Interview (2018)",
      episode: "Episode 284: Heather Downing - Positive Leadership",
      image: developerOnFire,
    },
    {
      title: "IT Career Energizer",
      description: "Podcast Interview (2018)",
      episode: "Episode 33 – Pride Comes Before A Fall with Heather Downing",
      image: itCareerEnergizer,
    },
    {
      title: "BuildStuff",
      description: "Conference Interview (2018)",
      episode:
        "Interviewed on team practices and what makes mobile exciting for developers.",
      image: buildStuff,
    },
    {
      title: "DEVOXX Belgium",
      description: "Conference Interview (2018)",
      episode: "Interviewed about developer confidence and learning issues.",
      image: devoxxBelgium,
    },
  ];

  return (
    <main>
      <Navigation />

      <Hero
        heroImage={heroImage}
        heading="Media"
        subHeading="Interviews & Podcasts"
      />

      <Section>
        <Grid grow>
          {mediaAppearances.map((media, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 6 }} style={{ display: 'flex' }}>
              <Paper shadow="sm" p="0" style={{ height: '100%', flex: 1, overflow: "hidden" }}>
                <div style={{ position: "relative", height: "200px", width: "100%" }}>
                  <Image
                    src={media.image}
                    alt={media.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: "1rem" }}>
                  <Title order={3} c="#34A853" mb="xs">
                    {media.title}
                  </Title>
                  <Text size="sm" c="dimmed" mb="md">
                    {media.description}
                  </Text>
                  <Text c="text">
                    {media.episode}
                  </Text>
                </div>
              </Paper>
            </Grid.Col>
          ))}
        </Grid>
      </Section>

      <Footer />
    </main>
  );
}
