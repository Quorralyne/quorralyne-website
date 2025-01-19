"use client";

import Image from "next/image";
import { Grid, Paper, Title, Text, Anchor } from "@mantine/core";
import { Section, Navigation, Footer } from "@/components/ui";
import Hero from "@/components/Hero";
import heroImage from "@/public/images/heather-articles.jpg";
import { type Article } from "@/data/articles";
import { getArticles } from "@/services/articles";

export default function Articles() {
  const articles = getArticles();

  return (
    <main>
      <Navigation />

      <Hero
        image={heroImage}
        title="Articles"
        subtitle="Thoughts on Technology & Leadership"
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
