export const theme = {
  colors: {
    primary: '#34A853',
    secondary: '#86A789',
    accent: '#FFB74D',
    background: '#FFFFFF',
    backgroundHighlight: '#F5F5F5',
    text: '#2D3436',
  },
  spacing: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  typography: {
    fontFamily: {
      heading: 'var(--font-inter)',
      body: 'var(--font-inter)',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.25rem',
      xl: '1.5rem',
      xxl: '2rem',
      display: '3rem',
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '1.5rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    md: '0 4px 6px rgba(0,0,0,0.1)',
    lg: '0 10px 15px rgba(0,0,0,0.1)',
    xl: '0 20px 25px rgba(0,0,0,0.1)',
  },
  transitions: {
    default: 'all 0.3s ease',
    fast: 'all 0.15s ease',
    slow: 'all 0.45s ease',
  },
} as const;
