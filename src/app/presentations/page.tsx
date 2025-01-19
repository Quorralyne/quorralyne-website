"use client";

import Image from "next/image";
import { Grid, Paper, Title, Text, List } from "@mantine/core";
import { Section, Navigation, Footer } from "@/components/ui";
import Hero from "@/components/Hero";
import heroImage from "@/public/images/heather-presentations.jpg";
import { getPresentations } from "@/services/presentations";

export default function Presentations() {
  const presentations = getPresentations();

  return (
    <main>
      <Navigation />

      <Hero
        image={heroImage}
        title="Presentations"
        subtitle="Speaking Engagements & Workshops"
      />

      <Section>
        <Grid grow>
          {presentations.map((presentation, index) => (
            <Grid.Col
              key={index}
              span={{ base: 12, md: 6 }}
              style={{ display: "flex" }}
            >
              <Paper
                shadow="sm"
                p="0"
                style={{ height: "100%", flex: 1, overflow: "hidden" }}
              >
                <div
                  style={{
                    position: "relative",
                    height: "200px",
                    width: "100%",
                  }}
                >
                  <Image
                    src={presentation.image}
                    alt={presentation.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: "1rem" }}>
                  <Title order={3} c="#34A853" mb="xs">
                    {presentation.title}
                  </Title>
                  <Text c="text">{presentation.description}</Text>
                  {presentation.list && presentation.list.length > 0 && (
                    <List mt="md">
                      {presentation.list.map((item, index) => (
                        <List.Item key={index}>{item}</List.Item>
                      ))}
                    </List>
                  )}
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
