import { Theme } from '@theme-ui/css';
import { color, spacer } from '..';

export const layout = (): Theme['layout'] => {
  return {
    container: {
      fontFamily: 'Nunito Sans, sans-serif',
      '.container-login-center': {
        ['@media (max-width:480px)']: {
          '.container-side-right': {
            display: 'none',
          },
        },
        position: 'relative',
        overflow: 'hidden',
        height: '100vh',

        '.form-side-center': {
          ['@media (max-width:480px)']: {
            height: '90vh',
            width: '90%',
          },
          position: 'absolute',
          backgroundColor: color.grayscale10,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '50%',
          padding: '50px 50px 20px 50px',
          overflowY: 'scroll',
          height: '70vh',

          '.container-logo': {
            textAlign: 'center',
            '.wrapper-logo': {
              width: '150px',
            },
          },

          '.wrapper-title': {
            color: color.secondary70,
            fontWeight: 700,
            fontSize: '36px',
            marginTop: spacer.spacing8,
            marginBottom: spacer.spacing3,
            textAlign: 'center',
          },

          '.wrapper-desc': {
            color: color.grayscale50,
            lineHeight: '24px',
            fontSize: '16px',
            marginBottom: spacer.spacing6,
            textAlign: 'center',
          },

          '.wrapper-remember': {
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: spacer.spacing6,
            marginBottom: spacer.spacing6,
          },

          '.wrapper-button': {
            width: '100%',
          },

          '.wrapper-or': {
            display: 'flex',
            alignItems: 'center',
            marginTop: spacer.spacing4,
            marginBottom: spacer.spacing4,
            '.wrapper-line': {
              width: '50%',
              borderBottom: `1px solid ${color.grayscale40}`,
            },
            '.or': {
              marginLeft: '20px',
              marginRight: '20px',
            },
          },

          '.wrapper-register': {
            color: color.grayscale70,
            fontWeight: 600,
            fontSize: '16px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: spacer.spacing4,
            marginBottom: spacer.spacing10,
          },

          '.wrapper-footer': {
            color: color.grayscale80,
            fontWeight: 600,
            fontSize: '14px',
            display: 'flex',
            justifyContent: 'center',
            fontFamily: 'Nunito Sans, sans-serif',
          },
        },

        '.container-side-right': {
          width: '100%',

          '.wrapper-background': {
            width: '100% !important',
            height: '100vh !important',
            objectFit: 'cover',
          },
        },
      },

      '.container-login': {
        ['@media (max-width:768px)']: {
          '.container-side-right': {
            display: 'none',
          },
        },
        display: 'flex',
        overflow: 'hidden',
        height: '100vh',

        '.form-side-right': {
          ['@media (max-width:480px)']: {
            padding: '20px',
            width: '100%',
          },
          order: 1,
          width: '75%',
          padding: '50px 100px',
          overflowY: 'scroll',
          height: '100vh',
          position: 'relative',

          '.wrapper-logo': {
            width: '150px',
          },

          '.wrapper-title': {
            color: color.secondary70,
            fontWeight: 700,
            fontSize: '36px',
            marginTop: spacer.spacing8,
            marginBottom: spacer.spacing3,
          },

          '.wrapper-desc': {
            color: color.grayscale50,
            lineHeight: '24px',
            fontSize: '16px',
            marginBottom: spacer.spacing6,
          },

          '.wrapper-title-email': {
            color: color.grayscale80,
            fontWeight: 600,
            fontSize: '16px',
          },

          '.wrapper-title-pass': {
            color: color.grayscale80,
            marginTop: spacer.spacing6,
            fontWeight: 600,
            fontSize: '16px',
          },

          '.wrapper-remember': {
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: spacer.spacing6,
            marginBottom: spacer.spacing6,
          },

          '.wrapper-button': {
            width: '100%',
          },

          '.wrapper-or': {
            display: 'flex',
            alignItems: 'center',
            marginTop: spacer.spacing4,
            marginBottom: spacer.spacing4,
            '.wrapper-line': {
              width: '50%',
              borderBottom: `1px solid ${color.grayscale40}`,
            },
            '.or': {
              marginLeft: '20px',
              marginRight: '20px',
            },
          },

          '.wrapper-register': {
            color: color.grayscale70,
            fontWeight: 600,
            fontSize: '16px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: spacer.spacing4,
            marginBottom: spacer.spacing10,
          },

          '.wrapper-footer': {
            color: color.grayscale80,
            fontWeight: 600,
            fontSize: '14px',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '70px',
            fontFamily: 'Nunito Sans, sans-serif',
          },
        },

        '.form-side-left': {
          ['@media (max-width:480px)']: {
            padding: '20px',
            width: '100%',
          },
          width: '75%',
          padding: '50px 100px',
          overflowY: 'scroll',
          height: '100vh',
          position: 'relative',

          '.wrapper-logo': {
            width: '150px',
          },

          '.wrapper-title': {
            color: color.secondary70,
            fontWeight: 700,
            fontSize: '36px',
            marginTop: spacer.spacing8,
            marginBottom: spacer.spacing3,
          },

          '.wrapper-desc': {
            color: color.grayscale50,
            lineHeight: '24px',
            fontSize: '16px',
            marginBottom: spacer.spacing6,
          },

          '.wrapper-title-email': {
            color: color.grayscale80,
            fontWeight: 600,
            fontSize: '16px',
          },

          '.wrapper-title-pass': {
            color: color.grayscale80,
            marginTop: spacer.spacing6,
            fontWeight: 600,
            fontSize: '16px',
          },

          '.wrapper-remember': {
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: spacer.spacing6,
            marginBottom: spacer.spacing6,
          },

          '.wrapper-button': {
            width: '100%',
          },

          '.wrapper-or': {
            display: 'flex',
            alignItems: 'center',
            marginTop: spacer.spacing4,
            marginBottom: spacer.spacing4,
            '.wrapper-line': {
              width: '50%',
              borderBottom: `1px solid ${color.grayscale40}`,
            },
            '.or': {
              marginLeft: '20px',
              marginRight: '20px',
            },
          },

          '.wrapper-register': {
            color: color.grayscale70,
            fontWeight: 600,
            fontSize: '16px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: spacer.spacing4,
            marginBottom: spacer.spacing10,
          },

          '.wrapper-footer': {
            color: color.grayscale80,
            fontWeight: 600,
            fontSize: '14px',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '70px',
            fontFamily: 'Nunito Sans, sans-serif',
          },
        },

        '.container-side-right': {
          width: '100%',

          '.wrapper-background': {
            width: '100% !important',
            height: '100vh !important',
            objectFit: 'cover',
          },
        },
      },
    },
  };
};
