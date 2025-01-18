'use client';

import { MantineProvider, Container, Title, Grid, Text, Box, Paper } from '@mantine/core';
import styles from './design.module.css';
import Image from 'next/image';

// Color scheme
const colors = {
  primary: '#34A853',
  secondary: '#86A789',
  accent: '#FFB74D',
  background: '#FFFFFF',
  text: '#2D3436',
};

// Sample presentation data
const samplePresentation = {
  title: 'Real World Guide to Web API Authentication on Azure',
  description: 'Covering A to Z the ultimate way to handle auth for your .NET APIs on Azure, in a way that\'s actually manageable and scalable for your team.',
  image: 'https://picsum.photos/800/450?random=1',
};

// Card Component
const Card = ({ title, description, image }: { title: string; description: string; image: string }) => (
  <Paper
    shadow="sm"
    radius="md"
    className={styles.minimalCard}
  >
    <div className={styles.imageWrapper}>
      <Image
        src={image}
        alt={title}
        className={styles.image}
      />
      <div
        className={styles.cardOverlay}
        style={{
          background: `linear-gradient(180deg, transparent 0%, ${colors.primary}20 100%)`,
        }}
      />
    </div>

    <div
      className={styles.cardAccent}
      style={{
        backgroundColor: colors.accent,
      }}
    />

    <div className={styles.content}>
      <Title order={3} c={colors.primary} mb="xs">
        {title}
      </Title>
      <Text size="sm" c={colors.text}>
        {description}
      </Text>
    </div>
  </Paper>
);

export default function DesignDemo() {
  return (
    <MantineProvider>
      <Box py="xl">
        <Container size="xl">
          <Grid>
            <Grid.Col span={6}>
              <Card {...samplePresentation} />
            </Grid.Col>
            <Grid.Col span={6}>
              <Card 
                title="Building Resilient APIs with .NET"
                description="Learn how to design and implement robust APIs that can handle failures gracefully and maintain high availability."
                image="https://picsum.photos/800/450?random=2"
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Card 
                title="Microservices Security Patterns"
                description="Explore common security patterns and best practices for securing distributed microservices architectures."
                image="https://picsum.photos/800/450?random=3"
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Card 
                title="Cloud-Native Development"
                description="Deep dive into cloud-native development practices and patterns for building scalable applications."
                image="https://picsum.photos/800/450?random=4"
              />
            </Grid.Col>
          </Grid>
        </Container>
      </Box>
    </MantineProvider>
  );
}
