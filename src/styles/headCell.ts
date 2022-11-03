import { text, ThemeTokens } from '..';

export const headCell = (tokens: ThemeTokens) => {
  return {
    borderBottom: `1px solid ${tokens.tertiary400}`,
    color: '#000',
    backgroundColor: tokens.tertiary200,
    padding: `${tokens.spacing3} ${tokens.spacing4}`,
    ...text.body.sm.bold,
  };
};
