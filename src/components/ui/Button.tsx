import { Button as MantineButton, ButtonProps as MantineButtonProps } from '@mantine/core';
import { theme } from '@/theme';
import styles from './Button.module.css';

interface ButtonProps extends Omit<MantineButtonProps, 'variant'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
}

export function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: theme.colors.primary,
          color: 'white',
          '&:hover': {
            backgroundColor: theme.colors.primary,
            filter: 'brightness(1.1)',
          },
        };
      case 'secondary':
        return {
          backgroundColor: theme.colors.secondary,
          color: 'white',
          '&:hover': {
            backgroundColor: theme.colors.secondary,
            filter: 'brightness(1.1)',
          },
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: theme.colors.primary,
          border: `1px solid ${theme.colors.primary}`,
          '&:hover': {
            backgroundColor: `${theme.colors.primary}10`,
          },
        };
      case 'ghost':
        return {
          backgroundColor: 'transparent',
          color: theme.colors.primary,
          '&:hover': {
            backgroundColor: `${theme.colors.primary}10`,
          },
        };
    }
  };

  return (
    <MantineButton
      className={`${styles.button} ${className || ''}`}
      styles={{
        root: {
          ...getVariantStyles(),
          transition: theme.transitions.default,
          fontWeight: theme.typography.fontWeight.medium,
        },
      }}
      {...props}
    />
  );
}
