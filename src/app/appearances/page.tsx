"use client";

import Image from "next/image";
import { Grid, Paper, Title, Text, Group } from "@mantine/core";
import { Section, Navigation, Footer } from "@/components/ui";
import Hero from "@/components/Hero";
import heroImage from "@/public/images/heather-appearances.jpg";
import { appearances, type Appearance } from "@/data/appearances";
import { GB, SE, DK, US, AU, CH, ES, BE, NO, NL, LT, AQ } from "country-flag-icons/react/3x2";

const FlagComponent = ({ country }: { country: string }) => {
  switch (country) {
    case "GB":
      return <GB className="flag-icon" />;
    case "SE":
      return <SE className="flag-icon" />;
    case "DK":
      return <DK className="flag-icon" />;
    case "US":
      return <US className="flag-icon" />;
    case "AU":
      return <AU className="flag-icon" />;
    case "CH":
      return <CH className="flag-icon" />;
    case "ES":
      return <ES className="flag-icon" />;
    case "BE":
      return <BE className="flag-icon" />;
    case "NO":
      return <NO className="flag-icon" />;
    case "NL":
      return <NL className="flag-icon" />;
    case "LT":
      return <LT className="flag-icon" />;
    case "AQ":
      return <AQ className="flag-icon" />;
    default:
      return null;
  }
};

export default function Appearances() {
  return (
    <main>
      <Navigation />

      <Hero
        image={heroImage}
        title="Upcoming Appearances"
        subtitle="Conferences & Events"
      />

      <Section>
        <Grid grow>
          {appearances.map((appearance: Appearance, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 6 }} style={{ display: 'flex' }}>
              <Paper shadow="sm" p="0" style={{ height: '100%', flex: 1, overflow: "hidden" }}>
                <div
                  style={{
                    position: "relative",
                    height: "200px",
                    width: "100%",
                  }}
                >
                  <Image
                    src={appearance.image}
                    alt={appearance.event}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: "1rem" }}>
                  <Title order={3} c="#34A853" mb="xs">
                    {appearance.event}
                  </Title>
                  <Group gap="xs">
                    <Text c="text" fw={500}>
                      {appearance.location}
                    </Text>
                    <FlagComponent country={appearance.country} />
                  </Group>
                  <Text size="sm" c="dimmed" mb="sm">
                    {appearance.date.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                    {appearance.endDate &&
                      ` - ${appearance.endDate.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}`}
                    , {appearance.date.getFullYear()}
                  </Text>
                  <Text c="text">
                    <Text span fw={500}>Talk: </Text>
                    {appearance.talk}
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
