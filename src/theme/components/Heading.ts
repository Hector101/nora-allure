const baseStyle = {
  fontFamily: 'heading',
  fontWeight: 'normal',
};

const sizes = {
  lg: {
    fontSize: ['2rem', null, '3.375rem'],
    lineHeight: ['1em', null, '.963em'],
  },
  md: {
    fontSize: ['1.5rem', '2rem', '3rem'],
    lineHeight: ['1.125em', null, '1.25em'],
  },
  sm: {
    fontSize: ['1.4rem', null, '2.25rem'],
    lineHeight: ['1.125em', null, '1.333em'],
  },
  xs: {
    fontSize: ['1.4rem', null, '1.75rem'],
    lineHeight: ['1.125em', null, '1.4em'],
  },
};

const defaultProps = {
  size: 'lg',
};

const Heading = {
  defaultProps,
  baseStyle,
  sizes,
};

export { Heading };
