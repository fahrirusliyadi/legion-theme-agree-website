import { ThemeTokens } from '..';

export const tableCell = (tokens: ThemeTokens) => {
  return {
    borderBottom: `1px solid ${tokens.tertiary300} !important`,
    padding: '8px !important',
  };
};
