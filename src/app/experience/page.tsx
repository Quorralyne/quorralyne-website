"use client";

import Image from "next/image";
import { Paper, Title, Text, Grid } from "@mantine/core";
import { Section, Navigation, Footer } from "@/components/ui";
import Hero from "@/components/Hero";
import heroImage from "@/public/images/heather-experience.jpg";
import { getExperiences } from "@/services/experiences";

export default function Experience() {
  const experiences = getExperiences();

  return (
    <main>
      <Navigation />

      <Hero
        image={heroImage}
        title="Professional Experience"
        subtitle="Building Solutions That Matter"
      />

      <Section>
        <Grid grow>
          {experiences.map((exp, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 6 }} style={{ display: 'flex' }}>
              <Paper shadow="sm" p="lg" style={{ height: '100%', flex: 1 }}>
                <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem", padding: 'lg' }}>
                  <Image
                    src={exp.image}
                    alt={exp.company}
                    width={100}
                    height={100}
                    style={{ objectFit: "contain" }}
                  />
                  <div>
                    <Title order={3} c="#34A853" mb="xs">
                      {exp.title}
                    </Title>
                    <Title order={4} c="text" mb="xs">
                      {exp.company}
                    </Title>
                    <Text size="sm" c="dimmed" mb="md">
                      {exp.period}
                    </Text>
                  </div>
                </div>
                <Text c="text" style={{ padding: 'lg' }}>{exp.description}</Text>
              </Paper>
            </Grid.Col>
          ))}
        </Grid>
      </Section>

      <Footer />
    </main>
  );
}
