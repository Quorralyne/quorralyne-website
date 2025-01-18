"use client";

import Image, { StaticImageData } from "next/image";
import { Grid, Paper, Title, Text, Anchor } from "@mantine/core";
import { Section, Navigation, Footer } from "@/components/ui";
import Hero from "@/components/Hero";
import heroImage from "@/public/images/heather-articles.jpg";
import codingMotivation from "@/public/images/articles/coding-motivation.png";
import impressiveInTech from "@/public/images/articles/impressive-in-tech.png";

interface Article {
  title: string;
  excerpt: string;
  date: Date;
  link: string;
  image: StaticImageData;
}

export default function Articles() {
  const articles: Article[] = [
    {
      title: "The truth of coding motivation",
      excerpt:
        "Years ago, a programmer's life was very different. Someone in the STEM field is considered quite smart. In many circles...",
      date: new Date("2025-02-07"),
      link: "https://medium.com/@quorralyne/the-truth-of-coding-motivation-377cd6c4be2f",
      image: codingMotivation,
    },
    {
      title: "Are you impressive in technology?",
      excerpt: `When you hear the word "impressive" used as a descriptor for someone in the tech industry, what is the bar that you set for that...`,
      date: new Date("2025-02-07"),
      link: "https://medium.com/@quorralyne/are-you-impressive-in-technology-a98adcf93edc",
      image: impressiveInTech,
    },
  ];

  return (
    <main>
      <Navigation />

      <Hero
        heroImage={heroImage}
        heading="Articles"
        subHeading="Thoughts on Technology & Leadership"
      />

      <Section>
        <Grid grow>
          {articles.map((article, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 6 }} style={{ display: 'flex' }}>
              <Anchor href={article.link} target="_blank" style={{ textDecoration: 'none', color: 'inherit', flex: 1 }}>
                <Paper shadow="sm" p="0" style={{ height: '100%' }}>
                  <div style={{ position: "relative", height: "200px", width: "100%" }}>
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ padding: "1rem" }}>
                    <Title order={3} c="#34A853" mb="xs">
                      {article.title}
                    </Title>
                    <Text size="sm" c="dimmed" mb="md">
                      {article.date.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                      , {article.date.getFullYear()}
                    </Text>
                    <Text c="text">
                      {article.excerpt}
                    </Text>
                  </div>
                </Paper>
              </Anchor>
            </Grid.Col>
          ))}
        </Grid>
      </Section>

      <Footer />
    </main>
  );
}
