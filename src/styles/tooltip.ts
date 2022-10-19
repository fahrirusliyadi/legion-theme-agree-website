import { ThemeTokens } from '../tokens';

export const tooltip = (tokens: ThemeTokens) => {
  return {
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
  };
};
