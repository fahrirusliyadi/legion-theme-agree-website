import { ThemeTokens } from '..';

const cssBaseText = {
  lineHeight: '150%',
  display: 'block',
};

const cssBaseLabel = {
  ...cssBaseText,
  fontWeight: '600',
  fontSize: '16px',
  marginBottom: '8px',
};

const cssBaseIconLeft = {
  lineHeight: 1,
  display: 'flex',
  alignItems: 'center',
};

const cassBaseCaption = {
  ...cssBaseText,
  fontWeight: '400',
  fontSize: '14px',
  marginTop: '8px',
  display: 'flex',
  alignItems: 'center',
  svg: {
    height: '16px',
  },
};

const cssSelectControl = (
  borderColor: string,
  pseudoBorderColor: string,
  pseudoShadowColor: string
) => ({
  borderRadius: '4px',
  boxShadow: `none`,
  border: `1px solid ${borderColor}`,
  '&:hover,&:active,&:focus': {
    borderColor: pseudoBorderColor,
    boxShadow: `0px 0px 0px 2px ${pseudoShadowColor}`,
  },
});

const ccsSelectOption = (tokens: ThemeTokens) => {
  return {
    borderRadius: '4px',
    color: tokens.tertiary800,
    '&:hover': {
      background: '#F5F3FF',
    },
  };
};

const cssSelectControlNormal = (tokens: ThemeTokens) => {
  return {
    ...cssSelectControl(
      tokens.tertiary300,
      tokens.primary500,
      tokens.tertiary300
    ),
  };
};

const cssSelectControlError = (tokens: ThemeTokens) => {
  return {
    ...cssSelectControl(tokens.error500, tokens.error500, tokens.error100),
  };
};

const cssSelectControlSuccess = (tokens: ThemeTokens) => {
  return {
    ...cssSelectControl(
      tokens.success500,
      tokens.success500,
      tokens.success100
    ),
  };
};

export const select = (tokens: ThemeTokens) => {
  return {
    label: {
      normal: {
        ...cssBaseLabel,
      },
      error: {
        ...cssBaseLabel,
      },
      success: {
        ...cssBaseLabel,
      },
    },
    iconLeft: {
      sm: {
        ...cssBaseIconLeft,
        paddingLeft: '6px',
        marginRight: '-6px',
        svg: {
          height: '16px',
          color: tokens.tertiary800,
        },
      },
      md: {
        ...cssBaseIconLeft,
        paddingLeft: '8px',
        marginRight: '-4px',
        svg: {
          height: '20px',
          color: tokens.tertiary800,
        },
      },
      lg: {
        ...cssBaseIconLeft,
        paddingLeft: '10px',
        marginRight: '-2px',
        svg: {
          height: '24px',
          color: tokens.tertiary800,
        },
      },
    },
    core: {
      control: {
        sm: {
          normal: {
            ...cssSelectControlNormal(tokens),
            minHeight: '32px',
          },
          error: {
            ...cssSelectControlError(tokens),
            minHeight: '32px',
          },
          success: {
            ...cssSelectControlSuccess(tokens),
            minHeight: '32px',
          },
        },
        md: {
          normal: {
            ...cssSelectControlNormal(tokens),
            minHeight: '40px',
          },
          error: {
            ...cssSelectControlError(tokens),
            minHeight: '40px',
          },
          success: {
            ...cssSelectControlSuccess(tokens),
            minHeight: '40px',
          },
        },
        lg: {
          normal: {
            ...cssSelectControlNormal(tokens),
            minHeight: '56px',
          },
          error: {
            ...cssSelectControlError(tokens),
            minHeight: '56px',
          },
          success: {
            ...cssSelectControlSuccess(tokens),
            minHeight: '56px',
          },
        },
      },
      menu: {
        boxShadow:
          '0px 2px 10px rgba(0, 0, 0, 0.1), 0px 0px 2px rgba(0, 0, 0, 0.2)',
        padding: '0 4px',
      },
      option: {
        sm: {
          ...ccsSelectOption(tokens),
          padding: '6px 10px',
          fontSize: '14px',
        },
        md: {
          ...ccsSelectOption(tokens),
          padding: '8px 10px',
          fontSize: '16px',
        },
        lg: {
          ...ccsSelectOption(tokens),
          padding: '8px 10px',
          fontSize: '18px',
        },
      },
      multiValue: {
        borderRadius: '24px',
        background: tokens.primary50,
      },
      multiValueLabel: {
        padding: '2px 2px 2px 7px',
        color: tokens.primary500,
      },
      multiValueRemove: {
        padding: '2px 4px 2px 2px',
        color: tokens.primary500,
      },
      indicatorsContainer: {
        padding: 0,
      },
      dropdownIndicator: {
        padding: '4px 8px',
      },
      placeholder: {
        sm: {
          fontSize: '14px',
          lineHeight: 1,
        },
        md: {
          fontSize: '16px',
          lineHeight: 1,
        },
        lg: {
          fontSize: '18px',
          lineHeight: 1,
        },
      },
    },
    hint: {
      ...cassBaseCaption,
      color: `${tokens.tertiary600}`,
    },
    caption: {
      normal: {
        ...cassBaseCaption,
        color: `${tokens.tertiary600}`,
      },
      error: {
        ...cassBaseCaption,
        color: `${tokens.error500}`,
      },
      success: {
        ...cassBaseCaption,
        color: `${tokens.success500}`,
      },
      icon: {
        display: 'flex',
        alignItems: 'center',
        paddingRight: '4px',
      },
      text: {
        display: 'flex',
        alignItems: 'center',
        lineHeight: 1,
      },
    },
  };
};
