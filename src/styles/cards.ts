import { ThemeTokens } from '../tokens';

export const cards = (tokens: ThemeTokens) => {
  return {
    base: {
      borderRadius: tokens.radius4,
      overflow: 'hidden',
    },
    flat: {
      backgroundColor: tokens.tertiary50,
    },
    bordered: {
      backgroundColor: '#FFF',
      border: `1px solid ${tokens.tertiary200}`,
    },
    shadow: {
      backgroundColor: '#FFF',
      boxShadow:
        '0px 8px 40px rgba(0, 0, 0, 0.2), 0px 0px 4px rgba(0, 0, 0, 0.1)',
    },
    header: {
      padding: `${tokens.spacing4} ${tokens.spacing4} 0`,
    },
    body: {
      padding: tokens.spacing4,
    },
    footer: {
      padding: `0 ${tokens.spacing4} ${tokens.spacing4}`,
    },
  };
};
