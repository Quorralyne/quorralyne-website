import { Paper, Title, Text } from "@mantine/core";
import {
  IconCode,
  IconRobot,
  IconDeviceMobile,
  IconMicrophone,
} from "@tabler/icons-react";
import styles from "./SkillCard.module.css";

interface SkillCardProps {
  title: string;
  description: string;
  content: string;
  icon: string;
}

export function SkillCard({
  title,
  description,
  content,
  icon,
}: SkillCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "coding":
        return <IconCode size={48} color="#34A853" />;
      case "ai":
        return <IconRobot size={48} color="#34A853" />;
      case "mobile":
        return <IconDeviceMobile size={48} color="#34A853" />;
      case "speaking":
        return <IconMicrophone size={48} color="#34A853" />;
      default:
        return null;
    }
  };

  return (
    <Paper 
      className={styles.card}
      style={{
        backgroundColor: 'rgb(var(--background-highlight-rgb))',
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <div>
          <div className={styles.header}>
            {getIcon()}
            <div>
              <Title order={3} c="#34A853" my="0">
                {title}
              </Title>
              <Text c="rgb(var(--foreground-rgb))" size="lg" my="0">
                {description}
              </Text>
            </div>
          </div>
          <Text mt="md" c="rgb(var(--foreground-rgb))">
            {content}
          </Text>
        </div>
      </div>
    </Paper>
  );
}
