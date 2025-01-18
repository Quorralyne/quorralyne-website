import { Paper, Title, Text } from "@mantine/core";
import { theme } from "@/theme";
import styles from "./SkillCard.module.css";
import {
  IconCode,
  IconRobot,
  IconDeviceMobile,
  IconMicrophone,
} from "@tabler/icons-react";

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
        return <IconCode size={48} color={theme.colors.primary} />;
      case "ai":
        return <IconRobot size={48} color={theme.colors.primary} />;
      case "mobile":
        return <IconDeviceMobile size={48} color={theme.colors.primary} />;
      case "speaking":
        return <IconMicrophone size={48} color={theme.colors.primary} />;
      default:
        return null;
    }
  };

  return (
    <Paper className={styles.card}>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <div>
          <div className={styles.header}>
            {getIcon()}
            <div>
              <Title order={3} c={theme.colors.primary} my="0">
                {title}
              </Title>
              <Text c={theme.colors.text} size="lg" my="0">
                {description}
              </Text>
            </div>
          </div>
          {content && (
            <Text c={theme.colors.text} fs="italic" opacity={0.8}>
              {content}
            </Text>
          )}
        </div>
      </div>
    </Paper>
  );
}
