import { ThemeTokens } from '..';

export const sidebar = (tokens: ThemeTokens) => {
  return {
    padding: `${tokens.spacing2} 0 ${tokens.spacing11}`,
    // width: tokens.spacing25,
    width: '16rem',
    overflowY: 'auto',

    '.sidebar-top-content': {
      marginBottom: tokens.spacing6,
    },

    '.sidebar-menu-wrapper': {
      padding: 0,
    },
  };
};
