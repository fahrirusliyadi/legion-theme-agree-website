import { ThemeTokens } from '..';

const cssBaseText = (tokens: ThemeTokens) => {
  return {
    fontFamily: tokens.fontFamiliesSecondary,
    lineHeight: '150%',
    display: 'block',
  };
};

const cssBaseLabel = (tokens: ThemeTokens) => {
  return {
    ...cssBaseText(tokens),
    fontWeight: '600',
    fontSize: '16px',
    marginBottom: '8px',
  };
};

const cassBaseCaption = (tokens: ThemeTokens) => {
  return {
    ...cssBaseText(tokens),
    fontWeight: '400',
    fontSize: '14px',
    marginTop: '8px',
    display: 'flex',
    alignItems: 'center',
    svg: {
      height: '16px',
    },
  };
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
        ...cssBaseLabel(tokens),
      },
      error: {
        ...cssBaseLabel(tokens),
      },
      success: {
        ...cssBaseLabel(tokens),
      },
    },
    iconLeft: {
      sm: {
        paddingLeft: '6px',
        marginRight: '-6px',
        svg: {
          height: '16px',
          color: tokens.tertiary800,
        },
      },
      md: {
        paddingLeft: '8px',
        marginRight: '-4px',
        svg: {
          height: '20px',
          color: tokens.tertiary800,
        },
      },
      lg: {
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
          padding: '10px 12px',
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
        },
        md: {
          fontSize: '16px',
        },
        lg: {
          fontSize: '18px',
        },
      },
    },
    hint: {
      ...cassBaseCaption(tokens),
      color: `${tokens.tertiary600}`,
    },
    caption: {
      normal: {
        ...cassBaseCaption(tokens),
        color: `${tokens.tertiary600}`,
      },
      error: {
        ...cassBaseCaption(tokens),
        color: `${tokens.error500}`,
      },
      success: {
        ...cassBaseCaption(tokens),
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
