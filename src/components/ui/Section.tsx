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
        backgroundColor: highlight 
          ? 'rgb(var(--background-highlight-rgb))'
          : 'rgb(var(--background-rgb))',
        textAlign: centered ? 'center' : 'left',
      }}
    >
      <Container size="xl">
        {(title || subtitle) && (
          <div className={styles.header}>
            {title && (
              <Title
                order={1}
                c="#34A853"
                className={styles.title}
                mb={subtitle ? '0' : 'md'}
              >
                {title}
              </Title>
            )}
            {subtitle && (
              <Text c="dimmed" size="xl" mb="lg">
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
