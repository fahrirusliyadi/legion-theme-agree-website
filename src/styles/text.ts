import { Theme } from '@theme-ui/css';
import { ThemeTokens } from '../tokens';
import { text as txt } from '..';

export const text = (tokens: ThemeTokens): Theme['text'] => {
  return {
    default: {
      fontFamily: 'Nunito Sans, sans-serif',
      color: tokens.tertiary800,

      // Body
      lg_regular: { ...txt.body.lg.regular },
      lg_regular_respon: {
        ...txt.body.lg.regular,
        '@media screen and (max-width: 400px)': {
          fontSize: '16px',
          lineHeight: '24px',
        },
      },
      lg_semibold: { ...txt.body.lg.semibold },
      lg_semibold_respon: {
        ...txt.body.lg.semibold,
        '@media screen and (max-width: 400px)': {
          fontSize: '16px',
          lineHeight: '24px',
        },
      },
      lg_bold: { ...txt.body.lg.bold },
      lg_bold_respon: {
        ...txt.body.lg.bold,
        '@media screen and (max-width: 400px)': {
          fontSize: '16px',
          lineHeight: '24px',
        },
      },
      lg_italic: { ...txt.body.lg.italic },
      lg_italic_respon: {
        ...txt.body.lg.italic,
        '@media screen and (max-width: 400px)': {
          fontSize: '16px',
          lineHeight: '24px',
        },
      },
      lg_underline: { ...txt.body.lg.underline },
      lg_underline_respon: {
        ...txt.body.lg.underline,
        '@media screen and (max-width: 400px)': {
          fontSize: '16px',
          lineHeight: '24px',
        },
      },
      lg_underline_semibold: { ...txt.body.lg.underline_semibold },
      lg_underline_semibold_respon: {
        ...txt.body.lg.underline_semibold,
        '@media screen and (max-width: 400px)': {
          fontSize: '16px',
          lineHeight: '24px',
        },
      },
      lg_underline_bold: { ...txt.body.lg.underline_bold },
      lg_underline_bold_respon: {
        ...txt.body.lg.underline_bold,
        '@media screen and (max-width: 400px)': {
          fontSize: '16px',
          lineHeight: '24px',
        },
      },
      sm_regular: { ...txt.body.sm.regular },
      sm_regular_respon: {
        ...txt.body.sm.regular,
        '@media screen and (max-width: 400px)': {
          fontSize: '14px',
          lineHeight: '21px',
        },
      },
      sm_semibold: { ...txt.body.sm.semibold },
      sm_semibold_respon: {
        ...txt.body.sm.semibold,
        '@media screen and (max-width: 400px)': {
          fontSize: '14px',
          lineHeight: '21px',
        },
      },
      sm_bold: { ...txt.body.sm.bold },
      sm_bold_respon: {
        ...txt.body.sm.semibold,
        '@media screen and (max-width: 400px)': {
          fontSize: '14px',
          lineHeight: '21px',
        },
      },
      sm_italic: { ...txt.body.sm.italic },
      sm_italic_respon: {
        ...txt.body.sm.italic,
        '@media screen and (max-width: 400px)': {
          fontSize: '14px',
          lineHeight: '21px',
        },
      },
      sm_underline: { ...txt.body.sm.underline },
      sm_underline_respon: {
        ...txt.body.sm.underline,
        '@media screen and (max-width: 400px)': {
          fontSize: '14px',
          lineHeight: '21px',
        },
      },
      sm_underline_semibold: { ...txt.body.sm.underline_semibold },
      sm_underline_semibold_respon: {
        ...txt.body.sm.underline_semibold,
        '@media screen and (max-width: 400px)': {
          fontSize: '14px',
          lineHeight: '21px',
        },
      },
      sm_underline_bold: { ...txt.body.sm.underline_bold },
      sm_underline_bold_respon: {
        ...txt.body.sm.underline_bold,
        '@media screen and (max-width: 400px)': {
          fontSize: '14px',
          lineHeight: '21px',
        },
      },

      // Caption
      sizes: {
        lg_regular: { ...txt.caption.lg.regular },
        lg_regular_respon: {
          ...txt.caption.lg.regular,
          '@media screen and (max-width: 400px)': {
            fontSize: '12px',
            lineHeight: '18px',
          },
        },
        lg_semibold: { ...txt.caption.lg.semibold },
        lg_semibold_respon: {
          ...txt.caption.lg.semibold,
          '@media screen and (max-width: 400px)': {
            fontSize: '12px',
            lineHeight: '18px',
          },
        },
        lg_bold: { ...txt.caption.lg.bold },
        lg_bold_respon: {
          ...txt.caption.lg.bold,
          '@media screen and (max-width: 400px)': {
            fontSize: '12px',
            lineHeight: '18px',
          },
        },
        lg_italic: { ...txt.caption.lg.italic },
        lg_italic_respon: {
          ...txt.caption.lg.italic,
          '@media screen and (max-width: 400px)': {
            fontSize: '12px',
            lineHeight: '18px',
          },
        },
        lg_underline: { ...txt.caption.lg.underline },
        lg_underline_respon: {
          ...txt.caption.lg.underline,
          '@media screen and (max-width: 400px)': {
            fontSize: '12px',
            lineHeight: '18px',
          },
        },
        lg_underline_semibold: { ...txt.caption.lg.underline_semibold },
        lg_underline_semibold_respon: {
          ...txt.caption.lg.underline_semibold,
          '@media screen and (max-width: 400px)': {
            fontSize: '12px',
            lineHeight: '18px',
          },
        },
        lg_underline_bold: { ...txt.caption.lg.underline_bold },
        lg_underline_bold_respon: {
          ...txt.caption.lg.underline_bold,
          '@media screen and (max-width: 400px)': {
            fontSize: '12px',
            lineHeight: '18px',
          },
        },
        sm_regular: { ...txt.caption.sm.regular },
        sm_regular_respon: {
          ...txt.caption.sm.regular,
          '@media screen and (max-width: 400px)': {
            fontSize: '10px',
            lineHeight: '18px',
          },
        },
        sm_semibold: { ...txt.caption.sm.semibold },
        sm_semibold_respon: {
          ...txt.caption.sm.semibold,
          '@media screen and (max-width: 400px)': {
            fontSize: '10px',
            lineHeight: '18px',
          },
        },
        sm_bold: { ...txt.caption.sm.bold },
        sm_bold_respon: {
          ...txt.caption.sm.bold,
          '@media screen and (max-width: 400px)': {
            fontSize: '10px',
            lineHeight: '18px',
          },
        },
        sm_italic: { ...txt.caption.sm.italic },
        sm_italic_respon: {
          ...txt.caption.sm.italic,
          '@media screen and (max-width: 400px)': {
            fontSize: '10px',
            lineHeight: '18px',
          },
        },
        sm_underline: { ...txt.caption.sm.underline },
        sm_underline_respon: {
          ...txt.caption.sm.underline,
          '@media screen and (max-width: 400px)': {
            fontSize: '10px',
            lineHeight: '18px',
          },
        },
        sm_underline_semibold: { ...txt.caption.sm.underline_semibold },
        sm_underline_semibold_respon: {
          ...txt.caption.sm.underline_semibold,
          '@media screen and (max-width: 400px)': {
            fontSize: '10px',
            lineHeight: '18px',
          },
        },
        sm_underline_bold: { ...txt.caption.sm.underline_bold },
        sm_underline_bold_respon: {
          ...txt.caption.sm.underline_bold,
          '@media screen and (max-width: 400px)': {
            fontSize: '10px',
            lineHeight: '18px',
          },
        },
      },
    },

    // Heading
    heading: {
      h1: { ...txt.heading.h1 },
      h1Respon: {
        ...txt.heading.h1,
        '@media screen and (max-width: 400px)': {
          fontSize: '34px',
          lineHeight: '48px',
          fontWeight: '700',
        },
      },
      h2: { ...txt.heading.h2 },
      h2Respon: {
        ...txt.heading.h2,
        '@media screen and (max-width: 400px)': {
          fontSize: '28px',
          lineHeight: '42px',
          fontWeight: '700',
        },
      },
      h3: { ...txt.heading.h3 },
      h3Respon: {
        ...txt.heading.h3,
        '@media screen and (max-width: 400px)': {
          fontSize: '24px',
          lineHeight: '36px',
          fontWeight: '700',
        },
      },
      h4: { ...txt.heading.h4 },
      h4Respon: {
        ...txt.heading.h4,
        '@media screen and (max-width: 400px)': {
          fontSize: '22px',
          lineHeight: '32px',
          fontWeight: '700',
        },
      },
      h5: { ...txt.heading.h5 },
      h5Respon: {
        ...txt.heading.h5,
        '@media screen and (max-width: 400px)': {
          fontSize: '20px',
          lineHeight: '28px',
          fontWeight: '700',
        },
      },
      h6: { ...txt.heading.h6 },
      h6Respon: {
        ...txt.heading.h6,
        '@media screen and (max-width: 400px)': {
          fontSize: '18px',
          lineHeight: '26px',
          fontWeight: '700',
        },
      },
    },
  };
};
