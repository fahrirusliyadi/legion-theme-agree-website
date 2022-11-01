import { ThemeTokens } from '..';

export const headCell = (tokens: ThemeTokens) => {
  return {
    borderBottom: `1px solid ${tokens.tertiary400} !important`,
    color: `${tokens.tertiary900} !important`,
    fontSize: '16px !important',
    fontWeight: '700 !important',
    backgroundColor: `1px solid ${tokens.tertiary200} !important`,
    padding: '8px !important !important',
  };
};
