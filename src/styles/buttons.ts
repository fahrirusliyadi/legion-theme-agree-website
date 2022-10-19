import { Theme } from '@theme-ui/css';
import { ThemeTokens } from '../tokens';
import { text } from '..';

export const buttons = (tokens: ThemeTokens): Theme['buttons'] => {
  return {
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
  };
};
