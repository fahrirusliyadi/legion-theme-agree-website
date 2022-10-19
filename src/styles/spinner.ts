import { ThemeTokens } from '../tokens';

export const spinner = (tokens: ThemeTokens) => {
  return {
    primary: {
      color: tokens.primary500,
    },
    secondary: {
      color: tokens.secondary500,
    },
  };
};
