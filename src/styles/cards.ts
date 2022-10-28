import { ThemeTokens } from '../tokens';

export const cards = (tokens: ThemeTokens) => {
  return {
    base: {
      borderRadius: tokens.radius4,
      overflow: 'hidden',
      transition:
        'box-shadow 0.15s ease-in-out 0s, transform 0.15s ease-in-out 0s',
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
      boxShadow: `${tokens.elevation51X} ${tokens.elevation51Y} ${tokens.elevation51Blur} ${tokens.elevation51Spread} ${tokens.elevation51Color}, ${tokens.elevation50X} ${tokens.elevation50Y} ${tokens.elevation50Blur} ${tokens.elevation50Spread} ${tokens.elevation50Color}`,
    },
    hoverable: {
      '&:hover': {
        boxShadow: `${tokens.elevation51X} ${tokens.elevation51Y} ${tokens.elevation51Blur} ${tokens.elevation51Spread} ${tokens.elevation51Color}, ${tokens.elevation50X} ${tokens.elevation50Y} ${tokens.elevation50Blur} ${tokens.elevation50Spread} ${tokens.elevation50Color}`,
        transform: 'translateY(-2px)',
      },
    },
    pressable: {
      cursor: 'pointer',
      '&:active': {
        transform: 'scale(97%)',
      },
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
