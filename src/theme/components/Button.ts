const defaultProps = {
  variant: 'primary',
  size: 'md',
};

export const Button = {
  defaultProps,
  baseStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    lineHeight: 'tight',
    pt: '2px',
    fontWeight: 'bold',
    fontFamily: 'body',
    px: 4,
  },

  sizes: {
    lg: {
      minHeight: ['heightLgMobile', null, 'heightLg'],
      fontSize: ['buttonLgMobile', null, 'buttonLg'],
    },

    md: {
      minHeight: ['heightMdMobile', null, 'heightMd'],
      fontSize: ['buttonMdMobile', null, 'buttonMd'],
    },
    sm: {
      minHeight: ['heightSmMobile', null, 'heightSm'],
      fontSize: ['buttonSmMobile', null, 'buttonSm'],
    },
  },

  colorSchemes: {
    sage: {
      bg: 'sage',
      color: 'whiteSands',
      _hover: {
        bg: 'primary',
      },
      _disabled: {
        bg: 'disabled',
      },
    },
  },
  variants: {
    primary: {
      width: ['100%', null, 'auto'],
      minWidth: [null, null, '190px'],
      bg: 'primary',
      color: 'offwhite',
      _hover: {
        bg: 'primaryLight',
      },
      _disabled: {
        bg: 'disabled',
      },
    },
    secondary: {
      width: '100%',
      py: 3,
      px: 6,
      bg: 'transparent',
      color: 'buttonText',
      border: 'seastone',
      _hover: {
        bg: 'sage',
        color: 'whiteSands',
        border: 'sage',
      },
      _disabled: {
        bg: 'disabled',
        color: 'whiteSands',
        border: 'disabled',
      },
    },

    outline: {
      width: ['100%', null, 'auto'],
      minWidth: [null, null, '190px'],
      bg: 'transparent',
      border: 'primary',
      color: 'buttonText',
      _hover: {
        bg: 'primary',
        color: 'whiteSands',
      },
      _disabled: {
        border: 'disabled',
        color: 'disabled',
        bg: 'transparent',
      },
    },

    back: {
      width: ['100%', null, 'auto'],
      minWidth: ['100%', null, '190px'],
      bg: 'transparent',
      border: 'primary',
      color: 'buttonText',
      _hover: {
        bg: 'primary',
        color: 'whiteSands',
      },
      _disabled: {
        border: 'disabled',
        color: 'disabled',
        bg: 'transparent',
      },
    },

    'outline-white': {
      width: ['100%', null, 'auto'],
      minWidth: [null, null, '190px'],
      bg: 'transparent',
      border: 'whiteSands',
      color: 'whiteSands',
      _hover: {
        color: 'moss',
        border: 'moss',
      },
      _disabled: {
        border: 'disabled',
        color: 'disabled',
        bg: 'transparent',
      },
    },
    blank: {
      display: 'inline-block',
      border: 'none',
      lineHeight: 'inherit',
      minWidth: 'auto',
      minHeight: 'auto',
      width: 'auto',
      height: 'auto',
      fontWeight: 'inherit',
      fontFamily: 'inherit',
      pt: 0,
      px: 0,
      p: 0,
      background: 'none',
    },
  },
}
