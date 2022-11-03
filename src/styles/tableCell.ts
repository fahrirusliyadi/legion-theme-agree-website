import { text, ThemeTokens } from '..';

export const tableCell = (tokens: ThemeTokens) => {
  return {
    borderBottom: `1px solid ${tokens.tertiary300}`,
    padding: `${tokens.spacing3} ${tokens.spacing4}`,
    ...text.caption.lg.regular,
  };
};
