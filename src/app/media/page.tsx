"use client";

import Image from "next/image";
import { Grid, Paper, Title, Text } from "@mantine/core";
import { Section, Navigation, Footer } from "@/components/ui";
import Hero from "@/components/Hero";
import heroImage from "@/public/images/heather-media.jpg";
import { getMediaAppearances } from "@/services/media";

export default function Media() {
  const mediaAppearances = getMediaAppearances();

  return (
    <main>
      <Navigation />

      <Hero
        image={heroImage}
        title="Media"
        subtitle="Interviews & Podcasts"
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
