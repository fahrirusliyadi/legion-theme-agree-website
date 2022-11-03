import { ThemeTokens } from '../tokens';
import { styles } from './styles';

export const cards = (tokens: ThemeTokens) => {
  const sx = styles(tokens);

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
      ...sx.elevation.elevation5,
    },
    hoverable: {
      '&:hover': {
        transform: 'translateY(-2px)',
        ...sx.elevation.elevation5,
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
