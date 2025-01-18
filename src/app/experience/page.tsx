"use client";

import Image, { StaticImageData } from "next/image";
import { Paper, Title, Text, Grid } from "@mantine/core";
import { Section, Navigation, Footer } from "@/components/ui";
import Hero from "@/components/Hero";
import heroImage from "@/public/images/heather-experience.jpg";
import vmlLogo from "@/public/images/experience/vml.png";
import oakwoodLogo from "@/public/images/experience/oakwood.png";
import blueOceanLogo from "@/public/images/experience/blue-ocean.png";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  image: StaticImageData;
}

export default function Experience() {
  const experiences: Experience[] = [
    {
      title: "Director, Technology – Mobility & Innovation",
      company: "VML",
      period: "January 2017 – Present",
      description:
        "Created custom skill prototypes on the Alexa platform for numerous brands, coordinated external thought leadership opportunities, managed technology intern, aggregated voice interface development best practices.",
      image: vmlLogo,
    },
    {
      title: "Senior Development Engineer – Mobile",
      company: "VML",
      period: "March 2016 – Present",
      description:
        "Full stack developer currently working on developing the Quick Trip mobile application. Focus on Web API services and native mobile implementation.",
      image: vmlLogo,
    },
    {
      title: "Senior Solutions Consultant",
      company: "Oakwood Systems Group",
      period: "January 2015 – February 2016",
      description:
        "Architected and delivered inventory workflow mobile application using Xamarin. Created various .Net web applications utilizing MVC, Entity Framework, Angular and Web API.",
      image: oakwoodLogo,
    },
    {
      title: "Senior Software Engineer",
      company: "Blue Ocean Consulting",
      period: "August 2014 – January 2015",
      description:
        "Responsible for native mobile architecture by leveraging Xamarin for cross-platform mobile development. Handled enhancements to existing applications using .Net, AngularJS, MVC and WebAPI.",
      image: blueOceanLogo,
    },
  ];

  return (
    <main>
      <Navigation />

      <Hero
        heroImage={heroImage}
        heading="Professional Experience"
        subHeading="Building Solutions That Matter"
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
