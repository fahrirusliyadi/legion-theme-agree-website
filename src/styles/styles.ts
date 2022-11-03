import { Theme, ThemeUIStyleObject } from '@theme-ui/css';
import { ThemeTokens } from '../tokens';
import { color, text } from '..';
import { ElevationVariant } from '../elevations';

type ThemeStyles = Theme['styles'] & { elevation: ThemeStyleElevation };
type ThemeStyleElevation = Record<ElevationVariant, ThemeUIStyleObject>;

export const styles = (tokens: ThemeTokens): ThemeStyles => {
  return {
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
    elevation: {
      elevation0: {
        boxShadow: `${tokens.elevation0X} ${tokens.elevation0Y} ${tokens.elevation0Blur} ${tokens.elevation0Spread} ${tokens.elevation0Color}`,
      },
      elevation1: {
        boxShadow: `${tokens.elevation1X} ${tokens.elevation1Y} ${tokens.elevation1Blur} ${tokens.elevation1Spread} ${tokens.elevation1Color}`,
      },
      elevation2: {
        boxShadow: `${tokens.elevation21X} ${tokens.elevation21Y} ${tokens.elevation21Blur} ${tokens.elevation21Spread} ${tokens.elevation21Color}, ${tokens.elevation20X} ${tokens.elevation20Y} ${tokens.elevation20Blur} ${tokens.elevation20Spread} ${tokens.elevation20Color}`,
      },
      elevation3: {
        boxShadow: `${tokens.elevation31X} ${tokens.elevation31Y} ${tokens.elevation31Blur} ${tokens.elevation31Spread} ${tokens.elevation31Color}, ${tokens.elevation30X} ${tokens.elevation30Y} ${tokens.elevation30Blur} ${tokens.elevation30Spread} ${tokens.elevation30Color}`,
      },
      elevation4: {
        boxShadow: `${tokens.elevation41X} ${tokens.elevation41Y} ${tokens.elevation41Blur} ${tokens.elevation41Spread} ${tokens.elevation41Color}, ${tokens.elevation40X} ${tokens.elevation40Y} ${tokens.elevation40Blur} ${tokens.elevation40Spread} ${tokens.elevation40Color}`,
      },
      elevation5: {
        boxShadow: `${tokens.elevation51X} ${tokens.elevation51Y} ${tokens.elevation51Blur} ${tokens.elevation51Spread} ${tokens.elevation51Color}, ${tokens.elevation50X} ${tokens.elevation50Y} ${tokens.elevation50Blur} ${tokens.elevation50Spread} ${tokens.elevation50Color}`,
      },
    },
  };
};
