const baseStyle = {
  fontFamily: 'body',
  fontWeight: 'normal',
}

const sizes = {
  xl: {
    fontSize: ['1.125rem', null, '1.5rem'],
    lineHeight: ['1.5', null, '1.6'],
  },
  lg: {
    fontSize: ['1rem', null, '1.25rem'],
    lineHeight: ['1.5', null, '1.5'],
  },
  md: {
    fontSize: ['.8125rem', null, '1.0rem'],
    lineHeight: ['1.7', null, '1.5'],
  },
  sm: {
    fontSize: ['.6875rem', null, '.8125rem'],
    lineHeight: ['1.7', null, '1.5'],
  },
  xs: {
    fontSize: ['.6875rem', null, '.6875rem'],
    // fontWeight: 'bold',
    lineHeight: ['1.4', null, '1.5'],
    // letterSpacing: '.1rem',
    // textTransform: 'uppercase',
  },
}

const defaultProps = {
  size: 'md',
}

const Text = {
  defaultProps,
  baseStyle,
  sizes,
}

export { Text };
