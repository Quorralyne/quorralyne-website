"use client";

import { Grid, Paper, Title, Text, Anchor } from '@mantine/core';
import { Section, Navigation, Footer } from "@/components/ui";
import Hero from "@/components/Hero";
import ContactForm from '@/components/ContactForm';
import heroImage from "@/public/images/heather-contact.jpg";
import { IconBrandTwitter, IconBrandLinkedin, IconBrandYoutube, IconBrandBluesky } from '@tabler/icons-react';

export default function Contact() {
  const socialLinks = [
    {
      name: "Bluesky",
      icon: IconBrandBluesky,
      href: "https://bsky.app/profile/heatherdown.ing"
    },
    {
      name: "Twitter",
      icon: IconBrandTwitter,
      href: "https://twitter.com/quorralyne"
    },
    {
      name: "LinkedIn",
      icon: IconBrandLinkedin,
      href: "https://www.linkedin.com/in/quorralyne/"
    },
    {
      name: "YouTube",
      icon: IconBrandYoutube,
      href: "https://www.youtube.com/channel/UCrECGWFVH-3QVUFaVVSCDyg"
    }
  ];

  return (
    <main>
      <Navigation />

      <Hero
        image={heroImage}
        title="Contact Heather"
        subtitle="Let's Connect"
      />

      <Section>
        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Paper shadow="sm" p="xl" style={{ height: '100%' }}>
              <Title order={2} c="#34A853" mb="lg">
                Get in Touch
              </Title>
              <Text size="lg" mb="md">
                Are you interested in working with me? Have a question about my presentations or services? I&apos;d love to hear from you!
              </Text>
              <Text size="lg" mb="xl">
                Feel free to reach out using the form, or connect with me on social media:
              </Text>
              <Grid gutter="md">
                {socialLinks.map((link) => (
                  <Grid.Col key={link.name} span={6}>
                    <Anchor
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none', width: '100%', display: 'block' }}
                    >
                      <Paper 
                        shadow="sm" 
                        p="md" 
                        style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '0.5rem',
                          backgroundColor: '#ffffff',
                          transition: 'background-color 0.2s ease',
                          '&:hover': {
                            backgroundColor: '#2d9147'
                          }
                        }}
                      >
                        <link.icon size={24} />
                        <Text fw={500}>{link.name}</Text>
                      </Paper>
                    </Anchor>
                  </Grid.Col>
                ))}
              </Grid>
            </Paper>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Paper shadow="sm" p="xl" style={{ height: '100%' }}>
              <ContactForm />
            </Paper>
          </Grid.Col>
        </Grid>
      </Section>

      <Footer />
    </main>
  );
}