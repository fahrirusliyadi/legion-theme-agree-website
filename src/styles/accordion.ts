import { ThemeTokens } from '..';

export const accordion = (tokens: ThemeTokens) => {
  return {
    width: '100%',

    '&> input[type="checkbox"]': {
      position: 'absolute',
      left: '-100vw',

      '&:checked ~ .content': {
        height: 'auto',
        overflow: 'visible',
        borderBottom: `1px solid ${tokens.tertiary300}`,
        padding: tokens.spacing3,
        borderTop: 0,
      },

      '&:checked ~ label': {
        borderBottom: 'none',

        '.toggle-up': {
          display: 'inline-block !important',
        },

        '.toggle-down': {
          display: 'none !important',
        },
      },

      '&:checked ~ label + .content': {
        opacity: 1,
        transition: '.3s',
        height: 'auto',
      },
    },

    label: {
      display: 'block',
      color: tokens.tertiary800,
      cursor: 'pointer',
      padding: tokens.spacing3,
      background: '#FFF',
      fontSize: '16px',
      borderBottom: `1px solid ${tokens.tertiary300}`,
      position: 'relative',

      '&.menu-label': {
        fontWeight: 'bold',
        fontSize: '14px !important',
        borderBottom: '0 !important',
      },

      '> svg': {
        marginRight: tokens.spacing3,
        fontSize: '16px',
        fontWeight: 'bold',
        lineHeight: '28px',
        verticalAlign: 'middle',
        position: 'absolute',
        right: '-8px',
        top: '14px',

        '&.toggle-down': {
          display: 'inline-block',
        },

        '&.toggle-up': {
          display: 'none',
        },
      },

      '.left-icon': {
        marginRight: tokens.spacing2,
        position: 'relative',
        top: '2px',
      },
    },

    '.content': {
      opacity: 0,
      transition: '.3s',
      height: 0,
      background: '#FFF',

      '&.menu-content': {
        padding: `0 ${tokens.spacing3} !important`,
        borderBottom: '0 !important',
      },
    },
  };
};
