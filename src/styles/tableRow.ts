import { ThemeTokens } from '..';

export const tableRow = (tokens: ThemeTokens) => {
  return {
    '&:nth-child(even)': {
      backgroundColor: `${tokens.tertiary50}`,
    },
  };
};
