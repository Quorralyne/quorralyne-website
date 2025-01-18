import { Box, Container, Title, Text } from '@mantine/core';
import { theme } from '@/theme';
import styles from './Section.module.css';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  centered?: boolean;
  highlight?: boolean;
}

export function Section({ 
  title, 
  subtitle, 
  children, 
  size = 'sm',
  centered = false,
  highlight = false,
}: SectionProps) {
  const padding = {
    sm: theme.spacing.lg,
    md: theme.spacing.xl,
    lg: theme.spacing.xxl,
    xl: `calc(${theme.spacing.xxl} * 2)`,
  };

  return (
    <Box
      py={padding[size]}
      className={styles.section}
      style={{
        backgroundColor: highlight ? theme.colors.backgroundHighlight : theme.colors.background,
        textAlign: centered ? 'center' : 'left',
      }}
    >
      <Container size="xl">
        {(title || subtitle) && (
          <div className={styles.header}>
            {title && (
              <Title
                order={1}
                c={theme.colors.primary}
                className={styles.title}
                mb={subtitle ? '0' : 'md'}
              >
                {title}
              </Title>
            )}
            {subtitle && (
              <Text
                size="lg"
                c={theme.colors.text}
                className={styles.subtitle}
                mb="md"
              >
                {subtitle}
              </Text>
            )}
          </div>
        )}
        {children}
      </Container>
    </Box>
  );
}
