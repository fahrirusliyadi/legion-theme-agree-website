import { ThemeTokens } from '..';

export const tableRow = (tokens: ThemeTokens) => {
  return {
    color: '#1D2939 !important',
    fontSize: '12px !important',
    fontWeight: `400 !important`,
    backgroundColor: `${tokens.tertiary25} !important`,
  };
};
