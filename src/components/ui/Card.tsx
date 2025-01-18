import { Paper, Title, Text } from "@mantine/core";
import { theme } from "@/theme";
import styles from "./Card.module.css";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  image: string;
  href?: string;
  onClick?: () => void;
}

export function Card({ title, description, image, href, onClick }: CardProps) {
  const Component = href ? "a" : "div";

  return (
    <Paper
      component={Component}
      href={href}
      onClick={onClick}
      shadow="sm"
      radius="md"
      className={styles.card}
      style={{ cursor: href || onClick ? "pointer" : "default" }}
    >
      <div className={styles.imageWrapper}>
        <Image src={image} alt={title} className={styles.image} />
        <div
          className={styles.overlay}
          style={{
            background: `linear-gradient(180deg, transparent 0%, ${theme.colors.primary}20 100%)`,
          }}
        />
      </div>

      <div
        className={styles.accent}
        style={{
          backgroundColor: theme.colors.accent,
        }}
      />

      <div className={styles.content}>
        <Title order={3} c={theme.colors.primary} mb="xs">
          {title}
        </Title>
        <Text size="sm" c={theme.colors.text}>
          {description}
        </Text>
      </div>
    </Paper>
  );
}
