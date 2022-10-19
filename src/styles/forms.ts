import { Theme } from '@theme-ui/css';
import { ThemeTokens } from '../tokens';
import { color, text } from '..';

export const forms = (tokens: ThemeTokens): Theme['forms'] => {
  return {
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
        backgroundColor: `${tokens.textFieldDefaultBackgroundColor}`,
        marginBottom: '30px',
        sm: {
          fontSize: '14px',
          lineHeight: '20px',
          '.wrap-icon-left': {
            width: '12px',
            height: '12px',
            marginLeft: '8px',
          },
          '.wrap-icon-right': {
            width: '12px',
            height: '12px',
            marginRight: '8px',
          },
          '.contain-prefix-left': {
            paddingLeft: '8px',
          },
          '.contain-prefix-right': {
            paddingRight: '8px',
          },
          '.limit-prefix-left': {
            marginLeft: '7px',
          },
          '.limit-prefix-right': {
            marginRight: '7px',
          },
        },
        md: {
          fontSize: '16px',
          lineHeight: '24px',
          '.wrap-icon-left': {
            width: '16px',
            height: '16px',
            marginLeft: '8px',
          },
          '.wrap-icon-right': {
            width: '16px',
            height: '16px',
            marginRight: '8px',
          },
          '.contain-prefix-left': {
            paddingLeft: '8px',
          },
          '.contain-prefix-right': {
            paddingRight: '8px',
          },
          '.limit-prefix-left': {
            marginLeft: '7px',
          },
          '.limit-prefix-right': {
            marginRight: '7px',
          },
        },
        lg: {
          fontSize: '18px',
          lineHeight: '28px',
          '.wrap-icon-left': {
            width: '20px',
            height: '20px',
            marginLeft: '16px',
          },
          '.wrap-icon-right': {
            width: '20px',
            height: '20px',
            marginRight: '16px',
          },
          '.contain-prefix-left': {
            paddingLeft: '16px',
          },
          '.contain-prefix-right': {
            paddingRight: '16px',
          },
          '.limit-prefix-left': {
            marginLeft: '15px',
          },
          '.limit-prefix-right': {
            marginRight: '15px',
          },
        },
      },
      containPrefLeft: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        zIndex: 3,
      },
      wrapperPrefLeft: {
        color: `${tokens.textFieldPrefixsufixTextColor}`,
        fontWeight: text.body.sm.semibold.fontWeight,
      },
      limitPrefLeft: {
        height: '24px',
        borderRight: `1px solid ${tokens.textFieldPrefixsufixLineColor}`,
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
        cursor: 'pointer',
      },
      containPrefRight: {
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        zIndex: 3,
      },
      limitPrefRight: {
        height: '24px',
        borderRight: `1px solid ${tokens.textFieldPrefixsufixLineColor}`,
      },
      wrapperPrefRight: {
        color: `${tokens.textFieldPrefixsufixTextColor}`,
        fontWeight: text.body.sm.semibold.fontWeight,
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
          },
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
      },
      sm: {
        padding: '6px 8px',
      },
      md: {
        padding: '8px',
      },
      lg: {
        padding: '14px 16px',
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
  };
};
