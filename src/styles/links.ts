import { text, ThemeTokens } from '..';

export const links = (tokens: ThemeTokens) => {
  return {
    nav: {
      ...text.caption.lg.bold,

      color: tokens.tertiary900,
      padding: tokens.spacing3,
      margin: tokens.spacing1,

      '&:hover': {
        background: `${tokens.primary400}`,
        cursor: 'pointer',
      },

      '&:active': {
        background: `${tokens.primary400}`,
        borderRight: `${tokens.spacing1} solid ${tokens.primary500}`,
        cursor: 'pointer',
      },

      svg: {
        height: '14px',
        width: '14px',
        marginRight: tokens.spacing3,
      },
    },
    primary: {
      bg: `${tokens.primary500}`,
      color: `${tokens.tertiary25}`,
    },
    secondary: {
      bg: `${tokens.secondary50}`,
      color: `${tokens.tertiary900}`,
    },
  };
};
