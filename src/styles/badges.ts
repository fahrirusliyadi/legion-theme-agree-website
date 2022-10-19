import { Theme } from '@theme-ui/css';
import { ThemeTokens } from '../tokens';
import { text } from '..';

export const badges = (tokens: ThemeTokens): Theme['badges'] => {
  return {
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
  };
};
