//import base from '@theme-ui/preset-base'
import { makeTheme } from '@theme-ui/css/utils';
import { color } from '.';
import spacer from './spacers';
import { text } from './typography';
//import { tokens as foundation } from './tokens/foundation';
import { tokens } from './tokens/agree-fisheries';

export const aqf = makeTheme({
  //...base,
  colors: {
    primary25: tokens.primary25,
    primary50: tokens.primary50,
    primary100: tokens.primary100,
    primary200: tokens.primary200,
    primary300: tokens.primary300,
    primary400: tokens.primary400,
    primary500: tokens.primary500,
    primary600: tokens.primary600,
    primary700: tokens.primary700,
    primary800: tokens.primary800,
    primary900: tokens.primary900,
    secondary25: tokens.secondary25,
    secondary50: tokens.secondary50,
    secondary100: tokens.secondary100,
    secondary200: tokens.secondary200,
    secondary300: tokens.secondary300,
    secondary400: tokens.secondary400,
    secondary500: tokens.secondary500,
    secondary600: tokens.secondary600,
    secondary700: tokens.secondary700,
    secondary800: tokens.secondary800,
    secondary900: tokens.secondary900,
    tertiary25: tokens.tertiary25,
    tertiary50: tokens.tertiary50,
    tertiary100: tokens.tertiary100,
    tertiary200: tokens.tertiary200,
    tertiary300: tokens.tertiary300,
    tertiary400: tokens.tertiary400,
    tertiary500: tokens.tertiary500,
    tertiary600: tokens.tertiary600,
    tertiary700: tokens.tertiary700,
    tertiary800: tokens.tertiary800,
    tertiary900: tokens.tertiary900,
    error25: tokens.error25,
    error50: tokens.error50,
    error100: tokens.error100,
    error200: tokens.error200,
    error300: tokens.error300,
    error400: tokens.error400,
    error500: tokens.error500,
    error600: tokens.error600,
    error700: tokens.error700,
    error800: tokens.error800,
    error900: tokens.error900,
    warning25: tokens.warning25,
    warning50: tokens.warning50,
    warning100: tokens.warning100,
    warning200: tokens.warning200,
    warning300: tokens.warning300,
    warning400: tokens.warning400,
    warning500: tokens.warning500,
    warning600: tokens.warning600,
    warning700: tokens.warning700,
    warning800: tokens.warning800,
    warning900: tokens.warning900,
    success25: tokens.success25,
    success50: tokens.success50,
    success100: tokens.success100,
    success200: tokens.success200,
    success300: tokens.success300,
    success400: tokens.success400,
    success500: tokens.success500,
    success600: tokens.success600,
    success700: tokens.success700,
    success800: tokens.success800,
    success900: tokens.success900,
    information25: tokens.information25,
    information50: tokens.information50,
    information100: tokens.information100,
    information200: tokens.information200,
    information300: tokens.information300,
    information400: tokens.information400,
    information500: tokens.information500,
    information600: tokens.information600,
    information700: tokens.information700,
    information800: tokens.information800,
    information900: tokens.information900,
  },
  spacers: {
    ...spacer,
  },
  layout: {
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
  },
  styles: {
    a: {
      color: tokens.anchorDefaultColor,
      disabled: {
        color: tokens.tertiary300,
        pointerEvents: 'none',
      },

      '&:hover': {
        color: `${tokens.anchorHoverColor} !important`,
        textDecoration: 'underline',
        outline: 'none',
        cursor: 'pointer',
      },
      '&:active': {
        color: `${tokens.anchorActiveColor} !important`,
        outline: 'none !important',
        textDecoration: 'underline !important',
      },
      '&:focus': {
        outline: `2px solid ${color.primary30} !important`,
        borderRadius: '4px !important',
        textDecoration: 'none !important',
      },
      '& .wrapper-anchor': {
        display: 'flex',
        alignItems: 'center',
      },
      '& .wrapper-icon-left-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center',
        marginRight: '5px',
      },
      '& .wrapper-icon-left-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center',
        marginRight: '5px',
      },
      '& .wrapper-icon-left-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center',
        marginRight: '5px',
      },
      '& .wrapper-icon-right-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center',
        marginLeft: '5px',
      },
      '& .wrapper-icon-right-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center',
        marginLeft: '5px',
      },
      '& .wrapper-icon-right-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center',
        marginLeft: '5px',
      },
      sm: {
        color: `${tokens.anchorDefaultColor} !important`,
        ...text.caption.lg.bold,
        display: 'inline-flex',
        alignItems: 'center',
      },
      md: {
        color: tokens.anchorDefaultColor,
        ...text.body.sm.bold,
        display: 'inline-flex',
        alignItems: 'center',
      },
      lg: {
        color: tokens.anchorDefaultColor,
        ...text.body.lg.bold,
        display: 'inline-flex',
        alignItems: 'center',
      },
    },
    background: {
      primary25: {
        background: `${tokens.primary25}`,
      },
      primary50: {
        background: `${tokens.primary50}`,
      },
      primary100: {
        background: `${tokens.primary100}`,
      },
      primary200: {
        background: `${tokens.primary200}`,
      },
      primary300: {
        background: `${tokens.primary300}`,
      },
      primary400: {
        background: `${tokens.primary400}`,
      },
      primary500: {
        background: `${tokens.primary500}`,
      },
      primary600: {
        background: `${tokens.primary600}`,
      },
      primary700: {
        background: `${tokens.primary700}`,
      },
      primary800: {
        background: `${tokens.primary800}`,
      },
      primary900: {
        background: `${tokens.primary900}`,
      },
      secondary25: {
        background: `${tokens.secondary25}`,
      },
      secondary50: {
        background: `${tokens.secondary50}`,
      },
      secondary100: {
        background: `${tokens.secondary100}`,
      },
      secondary200: {
        background: `${tokens.secondary200}`,
      },
      secondary300: {
        background: `${tokens.secondary300}`,
      },
      secondary400: {
        background: `${tokens.secondary400}`,
      },
      secondary500: {
        background: `${tokens.secondary500}`,
      },
      secondary600: {
        background: `${tokens.secondary600}`,
      },
      secondary700: {
        background: `${tokens.secondary700}`,
      },
      secondary800: {
        background: `${tokens.secondary800}`,
      },
      secondary900: {
        background: `${tokens.secondary900}`,
      },
      tertiary25: {
        background: `${tokens.tertiary25}`,
      },
      tertiary50: {
        background: `${tokens.tertiary50}`,
      },
      tertiary100: {
        background: `${tokens.tertiary100}`,
      },
      tertiary200: {
        background: `${tokens.tertiary200}`,
      },
      tertiary300: {
        background: `${tokens.tertiary300}`,
      },
      tertiary400: {
        background: `${tokens.tertiary400}`,
      },
      tertiary500: {
        background: `${tokens.tertiary500}`,
      },
      tertiary600: {
        background: `${tokens.tertiary600}`,
      },
      tertiary700: {
        background: `${tokens.tertiary700}`,
      },
      tertiary800: {
        background: `${tokens.tertiary800}`,
      },
      tertiary900: {
        background: `${tokens.tertiary900}`,
      },
      success25: {
        background: `${tokens.success25}`,
      },
      success50: {
        background: `${tokens.success50}`,
      },
      success100: {
        background: `${tokens.success100}`,
      },
      success200: {
        background: `${tokens.success200}`,
      },
      success300: {
        background: `${tokens.success300}`,
      },
      success400: {
        background: `${tokens.success400}`,
      },
      success500: {
        background: `${tokens.success500}`,
      },
      success600: {
        background: `${tokens.success600}`,
      },
      success700: {
        background: `${tokens.success700}`,
      },
      success800: {
        background: `${tokens.success800}`,
      },
      success900: {
        background: `${tokens.success900}`,
      },
      warning25: {
        background: `${tokens.warning25}`,
      },
      warning50: {
        background: `${tokens.warning50}`,
      },
      warning100: {
        background: `${tokens.warning100}`,
      },
      warning200: {
        background: `${tokens.warning200}`,
      },
      warning300: {
        background: `${tokens.warning300}`,
      },
      warning400: {
        background: `${tokens.warning400}`,
      },
      warning500: {
        background: `${tokens.warning500}`,
      },
      warning600: {
        background: `${tokens.warning600}`,
      },
      warning700: {
        background: `${tokens.warning700}`,
      },
      warning800: {
        background: `${tokens.warning800}`,
      },
      warning900: {
        background: `${tokens.warning900}`,
      },
      error25: {
        background: `${tokens.error25}`,
      },
      error50: {
        background: `${tokens.error50}`,
      },
      error100: {
        background: `${tokens.error100}`,
      },
      error200: {
        background: `${tokens.error200}`,
      },
      error300: {
        background: `${tokens.error300}`,
      },
      error400: {
        background: `${tokens.error400}`,
      },
      error500: {
        background: `${tokens.error500}`,
      },
      error600: {
        background: `${tokens.error600}`,
      },
      error700: {
        background: `${tokens.error700}`,
      },
      error800: {
        background: `${tokens.error800}`,
      },
      error900: {
        background: `${tokens.error900}`,
      },
      info25: {
        background: `${tokens.information25}`,
      },
      info50: {
        background: `${tokens.information50}`,
      },
      info100: {
        background: `${tokens.information100}`,
      },
      info200: {
        background: `${tokens.information200}`,
      },
      info300: {
        background: `${tokens.information300}`,
      },
      info400: {
        background: `${tokens.information400}`,
      },
      info500: {
        background: `${tokens.information500}`,
      },
      info600: {
        background: `${tokens.information600}`,
      },
      info700: {
        background: `${tokens.information700}`,
      },
      info800: {
        background: `${tokens.information800}`,
      },
      info900: {
        background: `${tokens.information900}`,
      },
    },
    text: {
      primary25: {
        color: `${tokens.primary25}`,
      },
      primary50: {
        color: `${tokens.primary50}`,
      },
      primary100: {
        color: `${tokens.primary100}`,
      },
      primary200: {
        color: `${tokens.primary200}`,
      },
      primary300: {
        color: `${tokens.primary300}`,
      },
      primary400: {
        color: `${tokens.primary400}`,
      },
      primary500: {
        color: `${tokens.primary500}`,
      },
      primary600: {
        color: `${tokens.primary600}`,
      },
      primary700: {
        color: `${tokens.primary700}`,
      },
      primary800: {
        color: `${tokens.primary800}`,
      },
      primary900: {
        color: `${tokens.primary900}`,
      },
      secondary25: {
        color: `${tokens.secondary25}`,
      },
      secondary50: {
        color: `${tokens.secondary50}`,
      },
      secondary100: {
        color: `${tokens.secondary100}`,
      },
      secondary200: {
        color: `${tokens.secondary200}`,
      },
      secondary300: {
        color: `${tokens.secondary300}`,
      },
      secondary400: {
        color: `${tokens.secondary400}`,
      },
      secondary500: {
        color: `${tokens.secondary500}`,
      },
      secondary600: {
        color: `${tokens.secondary600}`,
      },
      secondary700: {
        color: `${tokens.secondary700}`,
      },
      secondary800: {
        color: `${tokens.secondary800}`,
      },
      secondary900: {
        color: `${tokens.secondary900}`,
      },
      tertiary25: {
        color: `${tokens.tertiary25}`,
      },
      tertiary50: {
        color: `${tokens.tertiary50}`,
      },
      tertiary100: {
        color: `${tokens.tertiary100}`,
      },
      tertiary200: {
        color: `${tokens.tertiary200}`,
      },
      tertiary300: {
        color: `${tokens.tertiary300}`,
      },
      tertiary400: {
        color: `${tokens.tertiary400}`,
      },
      tertiary500: {
        color: `${tokens.tertiary500}`,
      },
      tertiary600: {
        color: `${tokens.tertiary600}`,
      },
      tertiary700: {
        color: `${tokens.tertiary700}`,
      },
      tertiary800: {
        color: `${tokens.tertiary800}`,
      },
      tertiary900: {
        color: `${tokens.tertiary900}`,
      },
      success25: {
        color: `${tokens.success25}`,
      },
      success50: {
        color: `${tokens.success50}`,
      },
      success100: {
        color: `${tokens.success100}`,
      },
      success200: {
        color: `${tokens.success200}`,
      },
      success300: {
        color: `${tokens.success300}`,
      },
      success400: {
        color: `${tokens.success400}`,
      },
      success500: {
        color: `${tokens.success500}`,
      },
      success600: {
        color: `${tokens.success600}`,
      },
      success700: {
        color: `${tokens.success700}`,
      },
      success800: {
        color: `${tokens.success800}`,
      },
      success900: {
        color: `${tokens.success900}`,
      },
      warning25: {
        color: `${tokens.warning25}`,
      },
      warning50: {
        color: `${tokens.warning50}`,
      },
      warning100: {
        color: `${tokens.warning100}`,
      },
      warning200: {
        color: `${tokens.warning200}`,
      },
      warning300: {
        color: `${tokens.warning300}`,
      },
      warning400: {
        color: `${tokens.warning400}`,
      },
      warning500: {
        color: `${tokens.warning500}`,
      },
      warning600: {
        color: `${tokens.warning600}`,
      },
      warning700: {
        color: `${tokens.warning700}`,
      },
      warning800: {
        color: `${tokens.warning800}`,
      },
      warning900: {
        color: `${tokens.warning900}`,
      },
      error25: {
        color: `${tokens.error25}`,
      },
      error50: {
        color: `${tokens.error50}`,
      },
      error100: {
        color: `${tokens.error100}`,
      },
      error200: {
        color: `${tokens.error200}`,
      },
      error300: {
        color: `${tokens.error300}`,
      },
      error400: {
        color: `${tokens.error400}`,
      },
      error500: {
        color: `${tokens.error500}`,
      },
      error600: {
        color: `${tokens.error600}`,
      },
      error700: {
        color: `${tokens.error700}`,
      },
      error800: {
        color: `${tokens.error800}`,
      },
      error900: {
        color: `${tokens.error900}`,
      },
      info25: {
        color: `${tokens.information25}`,
      },
      info50: {
        color: `${tokens.information50}`,
      },
      info100: {
        color: `${tokens.information100}`,
      },
      info200: {
        color: `${tokens.information200}`,
      },
      info300: {
        color: `${tokens.information300}`,
      },
      info400: {
        color: `${tokens.information400}`,
      },
      info500: {
        color: `${tokens.information500}`,
      },
      info600: {
        color: `${tokens.information600}`,
      },
      info700: {
        color: `${tokens.information700}`,
      },
      info800: {
        color: `${tokens.information800}`,
      },
      info900: {
        color: `${tokens.information900}`,
      },
    },
  },
  forms: {
    switch: {
      md: {
        height: '22px',
        width: '40px',
        marginTop: '-2px',
      },
      sm: {
        marginTop: '2px',
        height: '17px',
        width: '28px',
        div: {
          height: '12px !important',
          width: '12px !important',
        },
      },
      background: '#C8CCD2 !important',
      'input:checked ~ &': {
        backgroundColor: `${tokens.primary500} !important`,
      },
      ':disabled': {
        background: '#D9DDE3 !important',
      },
    },
    checkbox: {
      sizeBoxLarge: {
        fontSize: '16px',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        width: 'fit-content',
        fontFamily: 'Nunito Sans, sans-serif',
      },
      sizeBoxSmall: {
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        width: 'fit-content',
        fontFamily: 'Nunito Sans, sans-serif',
      },
      wrappLabel: {
        marginLeft: '10px',
      },
      '& .container-checkbox': {
        display: 'flex',
        alignItems: 'center',
      },
      check: {
        sm: {
          height: '20px !important',
          width: '20px !important',
        },
        '&:disabled': {
          '&:hover': {
            '&:after': {
              content: '""',
            },
            cursor: 'pointer',
          },
          '&:checked': {
            '&:after': {
              content: '"\\2714"',
              color: `${tokens.checkboxDisabledBorder} !important`,
            },
          },
          backgroundColor: `${tokens.checkboxDisabledBackgroundColor} !important`,
          borderRadius: `${tokens.checkboxBorderRadius} !important`,
          border: 'none !important',
        },
        height: '24px',
        width: '24px',
        appearance: 'none',
        border: `2px solid ${tokens.checkboxDefaultBorder}`,
        borderRadius: tokens.checkboxBorderRadius,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
          border: `2px solid ${tokens.checkboxActiveBorder}`,
          '&:after': {
            color: tokens.checkboxActiveDisableBackgroundColor,
            content: '"\\2714"',
          },
        },
        '&:checked': {
          backgroundColor: tokens.checkboxActiveBackgroundColor,
          border: `2px solid ${tokens.checkboxActiveBorder}`,
          transition: 'all 0.15s ease-in-out 0s',
          '&:after': {
            content: '"\\2714"',
            color: tokens.checkboxDefaultBackgroundColor,
          },
          '&:hover': {
            backgroundColor: tokens.checkboxActiveBorder,
            transition: 'all 0.15s ease-in-out 0s',
          },
        },
      },
      indeterminate: {
        sm: {
          height: '20px !important',
          width: '20px !important',
        },
        '&:disabled': {
          '&:hover': {
            '&:after': {
              content: '""',
            },
            cursor: 'pointer',
          },
          '&:checked': {
            '&:after': {
              content: '"\\2012"',
              color: `${tokens.checkboxDisabledBorder} !important`,
            },
          },
          backgroundColor: `${color.grayscale30} !important`,
          borderRadius: `${tokens.checkboxBorderRadius} !important`,
          border: 'none !important',
        },
        height: '24px',
        width: '24px',
        appearance: 'none',
        border: `2px solid ${tokens.checkboxDefaultBorder}`,
        borderRadius: tokens.checkboxBorderRadius,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
          border: `2px solid ${tokens.checkboxActiveBorder}`,
          '&:after': {
            color: tokens.checkboxActiveDisableBackgroundColor,
            content: '"\\2012"',
          },
        },
        '&:checked': {
          backgroundColor: tokens.checkboxActiveBackgroundColor,
          border: `2px solid ${tokens.checkboxActiveBorder}`,
          transition: 'all 0.15s ease-in-out 0s',
          '&:after': {
            content: '"\\2012"',
            color: tokens.checkboxDefaultBackgroundColor,
          },
          '&:hover': {
            backgroundColor: tokens.checkboxActiveBorder,
            transition: 'all 0.15s ease-in-out 0s',
          },
        },
      },
    },
    input: {
      container: {
        position: 'relative',
        display: 'flex !important',
        flexDirection: 'row',
        alignItems: 'center !important',
        height: 'none !important',
        backgroundColor: `${tokens.textFieldDefaultBackgroundColor}`,
        marginBottom: '30px',
      },
      containPrefLeft: {
        display: 'flex',
        height: '-webkit-fill-available',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: `${tokens.textFieldPaddingLeftRight}`,
        pointerEvents: 'none',
        zIndex: 3,
      },
      wrapperPrefLeft: {
        color: `${tokens.textFieldPrefixsufixTextColor}`,
        ...text.body.sm.semibold,
      },
      limitPrefLeft: {
        height: '24px',
        borderRight: `1px solid ${tokens.textFieldPrefixsufixLineColor}`,
        marginLeft: `${tokens.textFieldPaddingLeftRight}`,
      },
      wrappPrefLeftIconLeft: {
        display: 'flex',
        alignItems: 'center',
        width: '16px',
        height: '16px',
        marginLeft: '12px',
        zIndex: 2,
      },
      wrappIconLeft: {
        position: 'relative',
        marginLeft: `${tokens.textFieldPaddingLeftRight}`,
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
        width: '16px',
        height: '16px',
      },
      wrappField: {
        position: 'absolute',
        zIndex: 1,
        top: '0px',
        left: '0px',
        width: '100%',
        height: '-webkit-fill-available',
        borderRadius: `${tokens.textFieldBorderRadius}`,
        border: `1px solid ${tokens.textFieldDefaultOutlineColor}`,
        backgroundColor: `${tokens.textFieldDisableBackgroundColor} !important`,
        transition: 'all 0.15s ease-in-out 0s',
      },
      wrappNormal: {
        position: 'absolute',
        zIndex: 1,
        top: '0px',
        left: '0px',
        width: '100%',
        height: '-webkit-fill-available',
        border: `1px solid ${tokens.textFieldDefaultOutlineColor}`,
        borderRadius: `${tokens.textFieldBorderRadius}`,
        transition: 'all 0.15s ease-in-out 0s',
      },
      wrappSuccess: {
        zIndex: 1,
        top: '0px',
        left: '0px',
        width: '100%',
        height: '-webkit-fill-available',
        borderRadius: `${tokens.textFieldBorderRadius}`,
        border: `1px solid ${tokens.textFieldSuccessOutlineColor}`,
        transition: 'all 0.15s ease-in-out 0s',
        position: 'absolute',
      },
      wrappError: {
        zIndex: 1,
        top: '0px',
        left: '0px',
        width: '100%',
        height: '-webkit-fill-available',
        borderRadius: `${tokens.textFieldBorderRadius}`,
        border: `1px solid ${tokens.textFieldErrorOutlineColor}`,
        transition: 'all 0.15s ease-in-out 0s',
        position: 'absolute',
      },
      wrappPrefRightIconRight: {
        display: 'flex',
        alignItems: 'center',
        width: '16px',
        height: '16px',
        zIndex: 2,
        marginRight: '12px',
      },
      wrappIconRight: {
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
        width: '16px',
        height: '16px',
        marginRight: `${tokens.textFieldPaddingLeftRight}`,
        cursor: 'pointer',
      },
      containPrefRight: {
        textAlign: 'center',
        paddingRight: `${tokens.textFieldPaddingLeftRight}`,
        display: 'flex',
        zIndex: 3,
      },
      limitPrefRight: {
        height: '24px',
        borderRight: `1px solid ${tokens.textFieldPrefixsufixLineColor}`,
        marginRight: `${tokens.textFieldPaddingLeftRight}`,
      },
      wrapperPrefRight: {
        color: `${tokens.textFieldPrefixsufixTextColor}`,
        ...text.body.sm.semibold,
      },
      wrappLabelField: {
        justifyContent: 'space-between',
        marginBottom: '5px',
        color: `${tokens.textFieldDefaultLabelColor}`,
        ...text.body.sm.semibold,
        '.label-field-text': {
          gap: '4px',
      },
        '.label-field-help': {
          color: tokens.tertiary600,
          svg: {
            verticalAlign: 'middle',
          }
      },
        '.label-field-optional': {
          color: tokens.tertiary500,
          fontSize: '14px',
          fontWeight: 400,
        },
      },
      wrapperCaption: {
        alignItems: 'center',
        gap: '8px',
        marginTop: '8px',
        color: tokens.tertiary500,
        fontSize: '14px',
        lineHeight: '21px',
        '.container-textfield + &': {
          marginTop: '-22px',
        },
        '.container-textfield + & + .wrapper-field-caption': {
          marginTop: '8px',
        },
        error: {
          color: tokens.error500,
        },
        success: {
          color: tokens.success500,
        },
      },
      wrapperCaptionIcon: {
        display: 'flex',
        alignItems: 'center',
        '& svg': {
          width: '20px',
          height: '20px',
        },
      },
      // wrapErrorMessage: {
      //   marginTop: '-25px',
      //   color: `${tokens.textFieldErrorOutlineColor}`,
      //   ...text.caption.lg.regular,
      // },
      '&:disabled': {
        zIndex: 2,
        border: 0,
        backgroundColor: 'transparent !important',
      },
      normal: {
        '&::placeholder': {
          color: tokens.textFieldDefaultPlaceholderColor,
        },
        '&:focus': {
          outline: 'none',
        },
        '&:hover ~ .input-border': {
          outline: 'none',
          border: `1px solid ${tokens.textFieldActiveOutlineColor} !important`,
          transition: 'all 0.10s ease-in-out 0s',
        },
        '&:focus  ~ .input-border': {
          outline: 'none',
          border: `1px solid ${tokens.textFieldActiveOutlineColor}`,
          boxShadow: `0px 0px 0px 2px ${tokens.textFieldActiveBorderColor} !important`,
          transition: 'all 0.15s ease-in-out 0s',
        },
        '& .input-border': {
          paddingLeft: '30px !important',
        },
        border: '0',
        backgroundColor: 'transparent',
        padding: `${tokens.textFieldPaddingTopBottom} ${tokens.textFieldPaddingLeftRight} ${tokens.textFieldPaddingTopBottom} ${tokens.textFieldPaddingLeftRight} !important`,
        zIndex: '2',
      },
      success: {
        '&::placeholder': {
          color: tokens.textFieldDefaultPlaceholderColor,
        },
        '&:focus': {
          outline: 'none',
        },
        '&:hover ~ .input-border': {
          outline: 'none',
          border: `1px solid ${tokens.textFieldActiveOutlineColor} !important`,
          transition: 'all 0.10s ease-in-out 0s',
        },
        '&:focus ~ .input-border': {
          outline: 'none',
          border: `1px solid ${tokens.textFieldActiveOutlineColor}`,
          boxShadow: `0px 0px 0px 2px ${tokens.textFieldActiveBorderColor} !important`,
          transition: 'all 0.15s ease-in-out 0s',
        },
        zIndex: 2,
        border: '0',
        backgroundColor: 'transparent',
        padding: `${tokens.textFieldPaddingTopBottom} ${tokens.textFieldPaddingLeftRight} ${tokens.textFieldPaddingTopBottom} ${tokens.textFieldPaddingLeftRight} !important`,
      },
      error: {
        '&::placeholder': {
          color: tokens.textFieldDefaultPlaceholderColor,
        },

        '&:focus': {
          outline: 'none',
        },
        '&:hover  ~ .input-border': {
          outline: 'none',
          border: `1px solid ${tokens.textFieldActiveOutlineColor} !important`,
          transition: 'all 0.10s ease-in-out 0s',
        },
        '&:focus ~ .input-border': {
          border: `1px solid ${tokens.textFieldActiveOutlineColor}`,
          boxShadow: `0px 0px 0px 2px ${tokens.textFieldActiveBorderColor} !important`,
          transition: 'all 0.15s ease-in-out 0s',
        },
        zIndex: 2,
        border: '0',
        backgroundColor: 'transparent',
        padding: `${tokens.textFieldPaddingTopBottom} ${tokens.textFieldPaddingLeftRight} ${tokens.textFieldPaddingTopBottom} ${tokens.textFieldPaddingLeftRight} !important`,
      },
    },
    textarea: {
      backgroundColor: `${tokens.textFieldDefaultBackgroundColor}`,
      borderRadius: `${tokens.textFieldBorderRadius}`,

      // labelTextArea: {
      //   color: `${tokens.textFieldDefaultLabelColor}`,
      //   ...text.body.sm.semibold,
      // },
      '&::placeholder': {
        color: `${tokens.textFieldDefaultPlaceholderColor}`,
      },
      ':disabled': {
        border: `1px solid ${tokens.textFieldDefaultOutlineColor} !important`,
        backgroundColor: `${tokens.textFieldDisableBackgroundColor} !important`,
        ':hover': {
          border: `1px solid ${tokens.textFieldDefaultOutlineColor} !important`,
          outline: 'none',
          transition: 'all 0.15s ease-in-out 0s',
        },
      },
      ':hover': {
        outline: 'none',
        border: `1px solid ${tokens.textFieldActiveOutlineColor} !important`,
        transition: 'all 0.15s ease-in-out 0s',
      },
      ':focus': {
        outline: 'none',
        border: `1px solid ${tokens.textFieldActiveOutlineColor}`,
        boxShadow: `0px 0px 0px 2px ${tokens.textFieldActiveBorderColor}`,
      },
      normal: {
        border: `1px solid ${tokens.textFieldDefaultOutlineColor}`,
        transition: 'all 0.15s ease-in-out 0s',
      },
      success: {
        border: `1px solid ${tokens.textFieldSuccessOutlineColor}`,
        transition: 'all 0.15s ease-in-out 0s',
      },
      error: {
        border: `1px solid ${tokens.textFieldErrorOutlineColor}`,
        transition: 'all 0.15s ease-in-out 0s',
      },
    },
  },
  buttons: {
    sm: {
      minWidth: '32px',
      minHeight: '32px',
      padding: '5px 7px !important',
      ...text.caption.lg.semibold,
      lineHeight: '20px',
    },
    md: {
      minWidth: '40px',
      minHeight: '40px',
      padding: '7px 11px !important',
      ...text.body.sm.semibold,
      lineHeight: '24px',
    },
    lg: {
      minWidth: '56px',
      minHeight: '56px',
      padding: '13px 15px !important',
      ...text.body.sm.semibold,
      lineHeight: '28px',
    },
    solid: {
      alignItems: 'center',
      borderRadius: `${tokens.buttonsBorderRadius}`,
      cursor: 'pointer',
      display: 'flex',
      lineHeight: '21px',
      fontWeight: '700',
      justifyContent: 'center',
      backgroundColor: tokens.buttonsPrimaryDefaultBackgroundColor,
      color: tokens.buttonsPrimaryDefaultColor,
      border: '1px solid transparent',
      '& .wrapper-icon-left-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center',
      },
      '& .wrapper-icon-left-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center',
      },
      '& .wrapper-icon-left-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center',
      },
      '& .wrapper-icon-both-children': {
        marginLeft: '10px',
        marginRight: '10px',
      },
      '& .wrapper-icon-left-children': {
        marginLeft: '10px',
      },
      '& .wrapper-icon-right-children': {
        marginRight: '10px',
      },
      '& .wrapper-two-icon': {
        marginRight: '10px',
      },
      '& .wrapperIconLeft': {
        marginRight: 10,
      },
      '& .wrapperIconRight': {
        marginLeft: 10,
      },
      '& .wrapper-icon-right-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center',
      },
      '& .wrapper-icon-right-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center',
      },
      '& .wrapper-icon-right-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center',
      },
      '&:hover': {
        backgroundColor: tokens.buttonsPrimaryHoverBackgroundColor,
        color: tokens.buttonsPrimaryHoverColor,
        boxShadow: 'none !important',
        transition: 'all 0.15s ease-in-out 0s',
      },
      '&:focus': {
        boxShadow: `0px 0px 0px 2px ${tokens.buttonsPrimaryFocusBorderColors} !important`,
      },
      '&:active': {
        backgroundColor: tokens.buttonsPrimaryActiveBackgroundColor,
        color: tokens.buttonsPrimaryActiveColor,
        boxShadow: 'none !important',
      },
      '&:disabled': {
        cursor: 'unset !important',
        backgroundColor: tokens.buttonsPrimaryDisabledBackgroundColor,
        color: tokens.buttonsPrimaryDisabledColor,
      },
    },
    soft: {
      alignItems: 'center',
      borderRadius: `${tokens.buttonsBorderRadius}`,
      cursor: 'pointer',
      display: 'flex',
      lineHeight: '21px',
      fontWeight: '700',
      justifyContent: 'center',
      backgroundColor: tokens.buttonsSecondaryDefaultBackgroundColor,
      color: tokens.buttonsSecondaryDefaultColor,
      border: '1px solid transparent',
      '& .wrapper-icon-left-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center',
      },
      '& .wrapper-icon-left-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center',
      },
      '& .wrapper-icon-left-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center',
      },
      '& .wrapper-icon-both-children': {
        marginLeft: '10px',
        marginRight: '10px',
      },
      '& .wrapper-icon-left-children': {
        marginLeft: '10px',
      },
      '& .wrapper-icon-right-children': {
        marginRight: '10px',
      },
      '& .wrapper-two-icon': {
        marginRight: '10px',
      },
      '& .wrapperIconLeft': {
        marginRight: 10,
      },
      '& .wrapperIconRight': {
        marginLeft: 10,
      },
      '& .wrapper-icon-right-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center',
      },
      '& .wrapper-icon-right-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center',
      },
      '& .wrapper-icon-right-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center',
      },
      '&:hover': {
        backgroundColor: tokens.buttonsSecondaryHoverBackgroundColor,
        color: tokens.buttonsSecondaryHoverColor,
        boxShadow: 'none !important',
        transition: 'all 0.15s ease-in-out 0s',
      },
      '&:focus': {
        boxShadow: `0px 0px 0px 2px ${tokens.buttonsSecondaryFocusBorderColors} !important`,
      },
      '&:active': {
        backgroundColor: tokens.buttonsSecondaryActiveBackgroundColor,
        color: tokens.buttonsSecondaryActiveColor,
        boxShadow: 'none !important',
      },
      '&:disabled': {
        cursor: 'unset !important',
        backgroundColor: tokens.buttonsSecondaryDisabledBackgroundColor,
        color: tokens.buttonsSecondaryDisabledColor,
      },
    },
    outline: {
      alignItems: 'center',
      borderRadius: `${tokens.buttonsBorderRadius}`,
      cursor: 'pointer',
      display: 'flex',
      lineHeight: '21px',
      fontWeight: '700',
      justifyContent: 'center',
      backgroundColor: tokens.buttonsSecondaryDefaultBackgroundColor,
      border: `1px solid ${tokens.buttonsSecondaryDefaultColor}`,
      color: tokens.buttonsSecondaryDefaultColor,
      '& .wrapper-icon-left-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center',
      },
      '& .wrapper-icon-left-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center',
      },
      '& .wrapper-icon-left-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center',
      },
      '& .wrapper-icon-both-children': {
        marginLeft: '10px',
        marginRight: '10px',
      },
      '& .wrapper-icon-left-children': {
        marginLeft: '10px',
      },
      '& .wrapper-icon-right-children': {
        marginRight: '10px',
      },
      '& .wrapper-two-icon': {
        marginRight: '10px',
      },
      '& .wrapperIconLeft': {
        marginRight: 10,
      },
      '& .wrapperIconRight': {
        marginLeft: 10,
      },
      '& .wrapper-icon-right-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center',
      },
      '& .wrapper-icon-right-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center',
      },
      '& .wrapper-icon-right-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center',
      },
      '&:hover': {
        backgroundColor: tokens.buttonsSecondaryHoverBackgroundColor,
        border: `1px solid ${tokens.buttonsSecondaryHoverColor}`,
        color: tokens.buttonsSecondaryHoverColor,
        boxShadow: 'none !important',
        transition: 'all 0.15s ease-in-out 0s',
      },
      '&:focus': {
        boxShadow: `0px 0px 0px 2px ${tokens.buttonsSecondaryFocusBorderColors} !important`,
      },
      '&:active': {
        backgroundColor: tokens.buttonsSecondaryActiveBackgroundColor,
        border: `1px solid ${tokens.buttonsSecondaryActiveColor}`,
        color: tokens.buttonsSecondaryActiveColor,
        boxShadow: 'none !important',
      },
      '&:disabled': {
        cursor: 'unset',
        appearance: 'none',
        backgroundColor: `${tokens.buttonsSecondaryDisabledBackgroundColor} !important`,
        border: `1px solid ${tokens.buttonsSecondaryDisabledColor} !important`,
        color: `${tokens.buttonsSecondaryDisabledColor} !important`,
      },
    },
    transparent: {
      alignItems: 'center',
      borderRadius: `${tokens.buttonsBorderRadius}`,
      cursor: 'pointer',
      display: 'flex',
      lineHeight: '21px',
      fontWeight: '700',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      border: '1px solid transparent',
      color: tokens.buttonsSecondaryDefaultColor,

      '& .wrapper-icon-left-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center',
      },
      '& .wrapper-icon-left-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center',
      },
      '& .wrapper-icon-left-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center',
      },
      '& .wrapper-icon-both-children': {
        marginLeft: '10px',
        marginRight: '10px',
      },
      '& .wrapper-icon-left-children': {
        marginLeft: '10px',
      },
      '& .wrapper-icon-right-children': {
        marginRight: '10px',
      },
      '& .wrapper-two-icon': {
        marginRight: '10px',
      },
      '& .wrapperIconLeft': {
        marginRight: 10,
      },
      '& .wrapperIconRight': {
        marginLeft: 10,
      },
      '& .wrapper-icon-right-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center',
      },
      '& .wrapper-icon-right-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center',
      },
      '& .wrapper-icon-right-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center',
      },
      '&:hover': {
        backgroundColor: tokens.buttonsSecondaryDefaultBackgroundColor,
        color: tokens.buttonsSecondaryHoverColor,
        boxShadow: 'none !important',
        transition: 'all 0.15s ease-in-out 0s',
      },
      '&:focus': {
        backgroundColor: `${tokens.buttonsSecondaryDefaultBackgroundColor} !important`,
        color: `${tokens.buttonsSecondaryHoverColor} !important`,
        boxShadow: `0px 0px 0px 2px ${tokens.buttonsSecondaryFocusBorderColors} !important`,
      },
      '&:active': {
        backgroundColor: `${tokens.buttonsSecondaryHoverBackgroundColor} !important`,
        color: `${tokens.buttonsSecondaryActiveColor} !important`,
        boxShadow: 'none !important',
      },
      '&:disabled': {
        cursor: 'unset',
        appearance: 'none',
        backgroundColor: 'transparent !important',
        border: 'none !important',
        color: `${tokens.buttonsSecondaryDisabledColor} !important`,
      },
    },
  },
  badges: {
    primary: {
      bg: `${tokens.badgePrimaryBackgroundColor}`,
      color: tokens.badgePrimaryColor,
    },
    secondary: {
      bg: `${tokens.badgeSecondaryBackgroundColor}`,
      color: tokens.badgeSecondaryColor,
    },
    error: {
      bg: `${tokens.badgeErrorBackgroundColor}`,
      color: tokens.badgeErrorColor,
    },
    info: {
      bg: `${tokens.badgeInfoBackgroundColor}`,
      color: tokens.badgeInfoColor,
    },
    success: {
      bg: `${tokens.badgeSuccessBackgroundColor}`,
      color: tokens.badgeSuccessColor,
    },
    warning: {
      bg: `${tokens.badgeWarningBackgroundColor}`,
      color: tokens.badgeWarningColor,
    },
    small: {
      width: 8,
      height: 8,
      borderRadius: 8 / 2,
      ...text.body.sm.regular,
    },
    smallWithBorder: {
      border: '1px solid white',
      height: 10,
      borderRadius: 10 / 2,
      ...text.body.sm.regular,
    },
    largeWithBorder: {
      border: '2px solid white',
      ...text.body.lg.regular,
    },
    smallWithContent: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 21,
      borderRadius: 24,
      paddingX: '7px',
      ...text.body.sm.regular,
    },
    largeWithContent: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 28,
      borderRadius: tokens.badgeBorderRadius,
      paddingX: '14px',
      ...text.body.lg.regular,
    },
    large: {
      width: 12,
      height: 12,
      borderRadius: 12 / 2,
      ...text.body.lg.regular,
    },
  },
  text: {
    default: {
      fontFamily: 'Nunito Sans, sans-serif',
      color: tokens.tertiary800,

      // Body
      lg_regular: { ...text.body.lg.regular },
      lg_regular_respon: {
        ...text.body.lg.regular,
        '@media screen and (max-width: 400px)': {
          fontSize: '16px',
          lineHeight: '24px',
        },
      },
      lg_semibold: { ...text.body.lg.semibold },
      lg_semibold_respon: {
        ...text.body.lg.semibold,
        '@media screen and (max-width: 400px)': {
          fontSize: '16px',
          lineHeight: '24px',
        },
      },
      lg_bold: { ...text.body.lg.bold },
      lg_bold_respon: {
        ...text.body.lg.bold,
        '@media screen and (max-width: 400px)': {
          fontSize: '16px',
          lineHeight: '24px',
        },
      },
      lg_italic: { ...text.body.lg.italic },
      lg_italic_respon: {
        ...text.body.lg.italic,
        '@media screen and (max-width: 400px)': {
          fontSize: '16px',
          lineHeight: '24px',
        },
      },
      lg_underline: { ...text.body.lg.underline },
      lg_underline_respon: {
        ...text.body.lg.underline,
        '@media screen and (max-width: 400px)': {
          fontSize: '16px',
          lineHeight: '24px',
        },
      },
      lg_underline_semibold: { ...text.body.lg.underline_semibold },
      lg_underline_semibold_respon: {
        ...text.body.lg.underline_semibold,
        '@media screen and (max-width: 400px)': {
          fontSize: '16px',
          lineHeight: '24px',
        },
      },
      lg_underline_bold: { ...text.body.lg.underline_bold },
      lg_underline_bold_respon: {
        ...text.body.lg.underline_bold,
        '@media screen and (max-width: 400px)': {
          fontSize: '16px',
          lineHeight: '24px',
        },
      },
      sm_regular: { ...text.body.sm.regular },
      sm_regular_respon: {
        ...text.body.sm.regular,
        '@media screen and (max-width: 400px)': {
          fontSize: '14px',
          lineHeight: '21px',
        },
      },
      sm_semibold: { ...text.body.sm.semibold },
      sm_semibold_respon: {
        ...text.body.sm.semibold,
        '@media screen and (max-width: 400px)': {
          fontSize: '14px',
          lineHeight: '21px',
        },
      },
      sm_bold: { ...text.body.sm.bold },
      sm_bold_respon: {
        ...text.body.sm.semibold,
        '@media screen and (max-width: 400px)': {
          fontSize: '14px',
          lineHeight: '21px',
        },
      },
      sm_italic: { ...text.body.sm.italic },
      sm_italic_respon: {
        ...text.body.sm.italic,
        '@media screen and (max-width: 400px)': {
          fontSize: '14px',
          lineHeight: '21px',
        },
      },
      sm_underline: { ...text.body.sm.underline },
      sm_underline_respon: {
        ...text.body.sm.underline,
        '@media screen and (max-width: 400px)': {
          fontSize: '14px',
          lineHeight: '21px',
        },
      },
      sm_underline_semibold: { ...text.body.sm.underline_semibold },
      sm_underline_semibold_respon: {
        ...text.body.sm.underline_semibold,
        '@media screen and (max-width: 400px)': {
          fontSize: '14px',
          lineHeight: '21px',
        },
      },
      sm_underline_bold: { ...text.body.sm.underline_bold },
      sm_underline_bold_respon: {
        ...text.body.sm.underline_bold,
        '@media screen and (max-width: 400px)': {
          fontSize: '14px',
          lineHeight: '21px',
        },
      },

      // Caption
      sizes: {
        lg_regular: { ...text.caption.lg.regular },
        lg_regular_respon: {
          ...text.caption.lg.regular,
          '@media screen and (max-width: 400px)': {
            fontSize: '12px',
            lineHeight: '18px',
          },
        },
        lg_semibold: { ...text.caption.lg.semibold },
        lg_semibold_respon: {
          ...text.caption.lg.semibold,
          '@media screen and (max-width: 400px)': {
            fontSize: '12px',
            lineHeight: '18px',
          },
        },
        lg_bold: { ...text.caption.lg.bold },
        lg_bold_respon: {
          ...text.caption.lg.bold,
          '@media screen and (max-width: 400px)': {
            fontSize: '12px',
            lineHeight: '18px',
          },
        },
        lg_italic: { ...text.caption.lg.italic },
        lg_italic_respon: {
          ...text.caption.lg.italic,
          '@media screen and (max-width: 400px)': {
            fontSize: '12px',
            lineHeight: '18px',
          },
        },
        lg_underline: { ...text.caption.lg.underline },
        lg_underline_respon: {
          ...text.caption.lg.underline,
          '@media screen and (max-width: 400px)': {
            fontSize: '12px',
            lineHeight: '18px',
          },
        },
        lg_underline_semibold: { ...text.caption.lg.underline_semibold },
        lg_underline_semibold_respon: {
          ...text.caption.lg.underline_semibold,
          '@media screen and (max-width: 400px)': {
            fontSize: '12px',
            lineHeight: '18px',
          },
        },
        lg_underline_bold: { ...text.caption.lg.underline_bold },
        lg_underline_bold_respon: {
          ...text.caption.lg.underline_bold,
          '@media screen and (max-width: 400px)': {
            fontSize: '12px',
            lineHeight: '18px',
          },
        },
        sm_regular: { ...text.caption.sm.regular },
        sm_regular_respon: {
          ...text.caption.sm.regular,
          '@media screen and (max-width: 400px)': {
            fontSize: '10px',
            lineHeight: '18px',
          },
        },
        sm_semibold: { ...text.caption.sm.semibold },
        sm_semibold_respon: {
          ...text.caption.sm.semibold,
          '@media screen and (max-width: 400px)': {
            fontSize: '10px',
            lineHeight: '18px',
          },
        },
        sm_bold: { ...text.caption.sm.bold },
        sm_bold_respon: {
          ...text.caption.sm.bold,
          '@media screen and (max-width: 400px)': {
            fontSize: '10px',
            lineHeight: '18px',
          },
        },
        sm_italic: { ...text.caption.sm.italic },
        sm_italic_respon: {
          ...text.caption.sm.italic,
          '@media screen and (max-width: 400px)': {
            fontSize: '10px',
            lineHeight: '18px',
          },
        },
        sm_underline: { ...text.caption.sm.underline },
        sm_underline_respon: {
          ...text.caption.sm.underline,
          '@media screen and (max-width: 400px)': {
            fontSize: '10px',
            lineHeight: '18px',
          },
        },
        sm_underline_semibold: { ...text.caption.sm.underline_semibold },
        sm_underline_semibold_respon: {
          ...text.caption.sm.underline_semibold,
          '@media screen and (max-width: 400px)': {
            fontSize: '10px',
            lineHeight: '18px',
          },
        },
        sm_underline_bold: { ...text.caption.sm.underline_bold },
        sm_underline_bold_respon: {
          ...text.caption.sm.underline_bold,
          '@media screen and (max-width: 400px)': {
            fontSize: '10px',
            lineHeight: '18px',
          },
        },
      },
    },

    // Heading
    heading: {
      h1: { ...text.heading.h1 },
      h1Respon: {
        ...text.heading.h1,
        '@media screen and (max-width: 400px)': {
          fontSize: '34px',
          lineHeight: '48px',
          fontWeight: '700',
        },
      },
      h2: { ...text.heading.h2 },
      h2Respon: {
        ...text.heading.h2,
        '@media screen and (max-width: 400px)': {
          fontSize: '28px',
          lineHeight: '42px',
          fontWeight: '700',
        },
      },
      h3: { ...text.heading.h3 },
      h3Respon: {
        ...text.heading.h3,
        '@media screen and (max-width: 400px)': {
          fontSize: '24px',
          lineHeight: '36px',
          fontWeight: '700',
        },
      },
      h4: { ...text.heading.h4 },
      h4Respon: {
        ...text.heading.h4,
        '@media screen and (max-width: 400px)': {
          fontSize: '22px',
          lineHeight: '32px',
          fontWeight: '700',
        },
      },
      h5: { ...text.heading.h5 },
      h5Respon: {
        ...text.heading.h5,
        '@media screen and (max-width: 400px)': {
          fontSize: '20px',
          lineHeight: '28px',
          fontWeight: '700',
        },
      },
      h6: { ...text.heading.h6 },
      h6Respon: {
        ...text.heading.h6,
        '@media screen and (max-width: 400px)': {
          fontSize: '18px',
          lineHeight: '26px',
          fontWeight: '700',
        },
      },
    },
  },
  spinner: {
    primary: {
      color: tokens.primary500,
    },
    secondary: {
      color: tokens.secondary500,
    },
  },
  cards: {
    containerColors: { marginBottom: '20px' },
    wrappValueColors: {
      ...text.caption.sm.semibold,
      padding: '10px',
    },

    // Colors Primary
    primary25: {
      backgroundColor: `${tokens.primary25}`,
      color: `${tokens.primary900}`,
      padding: '1rem',
      width: '100%',
    },
    primary50: {
      backgroundColor: `${tokens.primary50}`,
      color: `${tokens.primary900}`,
      padding: '1rem',
      width: '100%',
    },
    primary100: {
      backgroundColor: `${tokens.primary100}`,
      color: `${tokens.primary900}`,
      padding: '1rem',
      width: '100%',
    },
    primary200: {
      backgroundColor: `${tokens.primary200}`,
      color: `${tokens.primary900}`,
      padding: '1rem',
      width: '100%',
    },
    primary300: {
      backgroundColor: `${tokens.primary300}`,
      color: `${tokens.primary900}`,
      padding: '1rem',
      width: '100%',
    },
    primary400: {
      backgroundColor: `${tokens.primary400}`,
      color: `${tokens.primary25}`,
      padding: '1rem',
      width: '100%',
    },
    primary500: {
      backgroundColor: `${tokens.primary500}`,
      color: `${tokens.primary25}`,
      padding: '1rem',
      width: '100%',
    },
    primary600: {
      backgroundColor: `${tokens.primary600}`,
      color: `${tokens.primary25}`,
      padding: '1rem',
      width: '100%',
    },
    primary700: {
      backgroundColor: `${tokens.primary700}`,
      color: `${tokens.primary25}`,
      padding: '1rem',
      width: '100%',
    },
    primary800: {
      backgroundColor: `${tokens.primary800}`,
      color: `${tokens.primary25}`,
      padding: '1rem',
      width: '100%',
    },
    primary900: {
      backgroundColor: `${tokens.primary900}`,
      color: `${tokens.primary25}`,
      padding: '1rem',
      width: '100%',
    },
    // Colors Secondary
    secondary25: {
      backgroundColor: `${tokens.secondary25}`,
      color: `${tokens.secondary900}`,
      padding: '1rem',
      width: '100%',
    },
    secondary50: {
      backgroundColor: `${tokens.secondary50}`,
      color: `${tokens.secondary900}`,
      padding: '1rem',
      width: '100%',
    },
    secondary100: {
      backgroundColor: `${tokens.secondary100}`,
      color: `${tokens.secondary900}`,
      padding: '1rem',
      width: '100%',
    },
    secondary200: {
      backgroundColor: `${tokens.secondary200}`,
      color: `${tokens.secondary900}`,
      padding: '1rem',
      width: '100%',
    },
    secondary300: {
      backgroundColor: `${tokens.secondary300}`,
      color: `${tokens.secondary900}`,
      padding: '1rem',
      width: '100%',
    },
    secondary400: {
      backgroundColor: `${tokens.secondary400}`,
      color: `${tokens.secondary25}`,
      padding: '1rem',
      width: '100%',
    },
    secondary500: {
      backgroundColor: `${tokens.secondary500}`,
      color: `${tokens.secondary25}`,
      padding: '1rem',
      width: '100%',
    },
    secondary600: {
      backgroundColor: `${tokens.secondary600}`,
      color: `${tokens.secondary25}`,
      padding: '1rem',
      width: '100%',
    },
    secondary700: {
      backgroundColor: `${tokens.secondary700}`,
      color: `${tokens.secondary25}`,
      padding: '1rem',
      width: '100%',
    },
    secondary800: {
      backgroundColor: `${tokens.secondary800}`,
      color: `${tokens.secondary25}`,
      padding: '1rem',
      width: '100%',
    },
    secondary900: {
      backgroundColor: `${tokens.secondary900}`,
      color: `${tokens.secondary25}`,
      padding: '1rem',
      width: '100%',
    },
    // Colors Tertiary
    tertiary25: {
      backgroundColor: `${tokens.tertiary25}`,
      color: `${tokens.tertiary900}`,
      padding: '1rem',
      width: '100%',
    },
    tertiary50: {
      backgroundColor: `${tokens.tertiary50}`,
      color: `${tokens.tertiary900}`,
      padding: '1rem',
      width: '100%',
    },
    tertiary100: {
      backgroundColor: `${tokens.tertiary100}`,
      color: `${tokens.tertiary900}`,
      padding: '1rem',
      width: '100%',
    },
    tertiary200: {
      backgroundColor: `${tokens.tertiary200}`,
      color: `${tokens.tertiary900}`,
      padding: '1rem',
      width: '100%',
    },
    tertiary300: {
      backgroundColor: `${tokens.tertiary300}`,
      color: `${tokens.tertiary900}`,
      padding: '1rem',
      width: '100%',
    },
    tertiary400: {
      backgroundColor: `${tokens.tertiary400}`,
      color: `${tokens.tertiary25}`,
      padding: '1rem',
      width: '100%',
    },
    tertiary500: {
      backgroundColor: `${tokens.tertiary500}`,
      color: `${tokens.tertiary25}`,
      padding: '1rem',
      width: '100%',
    },
    tertiary600: {
      backgroundColor: `${tokens.tertiary600}`,
      color: `${tokens.tertiary25}`,
      padding: '1rem',
      width: '100%',
    },
    tertiary700: {
      backgroundColor: `${tokens.tertiary700}`,
      color: `${tokens.tertiary25}`,
      padding: '1rem',
      width: '100%',
    },
    tertiary800: {
      backgroundColor: `${tokens.tertiary800}`,
      color: `${tokens.tertiary25}`,
      padding: '1rem',
      width: '100%',
    },
    tertiary900: {
      backgroundColor: `${tokens.tertiary900}`,
      color: `${tokens.tertiary25}`,
      padding: '1rem',
      width: '100%',
    },
    // Colors Success
    success25: {
      backgroundColor: `${tokens.success25}`,
      color: `${tokens.success900}`,
      padding: '1rem',
      width: '100%',
    },
    success50: {
      backgroundColor: `${tokens.success50}`,
      color: `${tokens.success900}`,
      padding: '1rem',
      width: '100%',
    },
    success100: {
      backgroundColor: `${tokens.success100}`,
      color: `${tokens.success900}`,
      padding: '1rem',
      width: '100%',
    },
    success200: {
      backgroundColor: `${tokens.success200}`,
      color: `${tokens.success900}`,
      padding: '1rem',
      width: '100%',
    },
    success300: {
      backgroundColor: `${tokens.success300}`,
      color: `${tokens.success900}`,
      padding: '1rem',
      width: '100%',
    },
    success400: {
      backgroundColor: `${tokens.success400}`,
      color: `${tokens.success25}`,
      padding: '1rem',
      width: '100%',
    },
    success500: {
      backgroundColor: `${tokens.success500}`,
      color: `${tokens.success25}`,
      padding: '1rem',
      width: '100%',
    },
    success600: {
      backgroundColor: `${tokens.success600}`,
      color: `${tokens.success25}`,
      padding: '1rem',
      width: '100%',
    },
    success700: {
      backgroundColor: `${tokens.success700}`,
      color: `${tokens.success25}`,
      padding: '1rem',
      width: '100%',
    },
    success800: {
      backgroundColor: `${tokens.success800}`,
      color: `${tokens.success25}`,
      padding: '1rem',
      width: '100%',
    },
    success900: {
      backgroundColor: `${tokens.success900}`,
      color: `${tokens.success25}`,
      padding: '1rem',
      width: '100%',
    },
    // Colors Warning
    warning25: {
      backgroundColor: `${tokens.warning25}`,
      color: `${tokens.warning900}`,
      padding: '1rem',
      width: '100%',
    },
    warning50: {
      backgroundColor: `${tokens.warning50}`,
      color: `${tokens.warning900}`,
      padding: '1rem',
      width: '100%',
    },
    warning100: {
      backgroundColor: `${tokens.warning100}`,
      color: `${tokens.warning900}`,
      padding: '1rem',
      width: '100%',
    },
    warning200: {
      backgroundColor: `${tokens.warning200}`,
      color: `${tokens.warning900}`,
      padding: '1rem',
      width: '100%',
    },
    warning300: {
      backgroundColor: `${tokens.warning300}`,
      color: `${tokens.warning900}`,
      padding: '1rem',
      width: '100%',
    },
    warning400: {
      backgroundColor: `${tokens.warning400}`,
      color: `${tokens.warning25}`,
      padding: '1rem',
      width: '100%',
    },
    warning500: {
      backgroundColor: `${tokens.warning500}`,
      color: `${tokens.warning25}`,
      padding: '1rem',
      width: '100%',
    },
    warning600: {
      backgroundColor: `${tokens.warning600}`,
      color: `${tokens.warning25}`,
      padding: '1rem',
      width: '100%',
    },
    warning700: {
      backgroundColor: `${tokens.warning700}`,
      color: `${tokens.warning25}`,
      padding: '1rem',
      width: '100%',
    },
    warning800: {
      backgroundColor: `${tokens.warning800}`,
      color: `${tokens.warning25}`,
      padding: '1rem',
      width: '100%',
    },
    warning900: {
      backgroundColor: `${tokens.warning900}`,
      color: `${tokens.warning25}`,
      padding: '1rem',
      width: '100%',
    },
    // Colors Error
    error25: {
      backgroundColor: `${tokens.error25}`,
      color: `${tokens.error900}`,
      padding: '1rem',
      width: '100%',
    },
    error50: {
      backgroundColor: `${tokens.error50}`,
      color: `${tokens.error900}`,
      padding: '1rem',
      width: '100%',
    },
    error100: {
      backgroundColor: `${tokens.error100}`,
      color: `${tokens.error900}`,
      padding: '1rem',
      width: '100%',
    },
    error200: {
      backgroundColor: `${tokens.error200}`,
      color: `${tokens.error900}`,
      padding: '1rem',
      width: '100%',
    },
    error300: {
      backgroundColor: `${tokens.error300}`,
      color: `${tokens.error900}`,
      padding: '1rem',
      width: '100%',
    },
    error400: {
      backgroundColor: `${tokens.error400}`,
      color: `${tokens.error25}`,
      padding: '1rem',
      width: '100%',
    },
    error500: {
      backgroundColor: `${tokens.error500}`,
      color: `${tokens.error25}`,
      padding: '1rem',
      width: '100%',
    },
    error600: {
      backgroundColor: `${tokens.error600}`,
      color: `${tokens.error25}`,
      padding: '1rem',
      width: '100%',
    },
    error700: {
      backgroundColor: `${tokens.error700}`,
      color: `${tokens.error25}`,
      padding: '1rem',
      width: '100%',
    },
    error800: {
      backgroundColor: `${tokens.error800}`,
      color: `${tokens.error25}`,
      padding: '1rem',
      width: '100%',
    },
    error900: {
      backgroundColor: `${tokens.error900}`,
      color: `${tokens.error25}`,
      padding: '1rem',
      width: '100%',
    },
    // Colors Information
    info25: {
      backgroundColor: `${tokens.information25}`,
      color: `${tokens.information900}`,
      padding: '1rem',
      width: '100%',
    },
    info50: {
      backgroundColor: `${tokens.information50}`,
      color: `${tokens.information900}`,
      padding: '1rem',
      width: '100%',
    },
    info100: {
      backgroundColor: `${tokens.information100}`,
      color: `${tokens.information900}`,
      padding: '1rem',
      width: '100%',
    },
    info200: {
      backgroundColor: `${tokens.information200}`,
      color: `${tokens.information900}`,
      padding: '1rem',
      width: '100%',
    },
    info300: {
      backgroundColor: `${tokens.information300}`,
      color: `${tokens.information900}`,
      padding: '1rem',
      width: '100%',
    },
    info400: {
      backgroundColor: `${tokens.information400}`,
      color: `${tokens.information25}`,
      padding: '1rem',
      width: '100%',
    },
    info500: {
      backgroundColor: `${tokens.information500}`,
      color: `${tokens.information25}`,
      padding: '1rem',
      width: '100%',
    },
    info600: {
      backgroundColor: `${tokens.information600}`,
      color: `${tokens.information25}`,
      padding: '1rem',
      width: '100%',
    },
    info700: {
      backgroundColor: `${tokens.information700}`,
      color: `${tokens.information25}`,
      padding: '1rem',
      width: '100%',
    },
    info800: {
      backgroundColor: `${tokens.information800}`,
      color: `${tokens.information25}`,
      padding: '1rem',
      width: '100%',
    },
    info900: {
      backgroundColor: `${tokens.information900}`,
      color: `${tokens.information25}`,
      padding: '1rem',
      width: '100%',
    },
  },
  tooltip: {
    position: 'relative',
    display: 'inline-block',
    '&:hover .wrapper-tooltip': {
      opacity: 1,
    },
    wrapper: {
      width: 'max-content',
      maxWidth: '50vw',
      fontWeight: 600,
      fontSize: '12px',
      lineHeight: '18xpx',
      color: '#fff',
      backgroundColor: tokens.tertiary800,
      padding: '12px',
      borderRadius: '8px',
      position: 'absolute',
      zIndex: 1,
      opacity: 0,
      transition: 'opacity 0.15s ease-in-out 0s',
      pointerEvents: 'none',
      arrow: {
        width: '12px',
        height: '12px',
        backgroundColor: tokens.tertiary800,
        borderRadius: '1px',
        transform: 'rotate(45deg)',
        position: 'absolute',
        'top-start': {
          bottom: '-3px',
          left: '12px',
        },
        'top-end': {
          bottom: '-3px',
          right: '12px',
        },
        top: {
          bottom: '-3px',
          left: '50%',
          transform: 'translateX(-50%) rotate(45deg)',
        },
        'bottom-start': {
          top: '-3px',
          left: '12px',
        },
        'bottom-end': {
          top: '-3px',
          right: '12px',
        },
        bottom: {
          top: '-3px',
          left: '50%',
          transform: 'translateX(-50%) rotate(45deg)',
        },
        left: {
          right: '-3px',
          top: '50%',
          transform: 'translateY(-50%) rotate(45deg)',
        },
        right: {
          left: '-3px',
          top: '50%',
          transform: 'translateY(-50%) rotate(45deg)',
        },
      },
      'top-start': {
        bottom: '100%',
        marginBottom: '10px',
        left: '-12px',
      },
      'top-end': {
        bottom: '100%',
        marginBottom: '10px',
        right: '-12px',
      },
      top: {
        bottom: '100%',
        marginBottom: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
      },
      'bottom-start': {
        top: '100%',
        marginTop: '10px',
        left: '-12px',
      },
      'bottom-end': {
        top: '100%',
        marginTop: '10px',
        right: '-12px',
      },
      bottom: {
        top: '100%',
        marginTop: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
      },
      left: {
        right: '100%',
        marginRight: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
      },
      right: {
        left: '100%',
        marginLeft: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
      },
    },
  },
});

export default aqf;
