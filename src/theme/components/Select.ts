import { Input } from './Input';

const baseStyle = {
  field: {
    ...Input.baseStyle.field,
    appearance: 'none',
    paddingRight: '2rem',
    paddingBottom: '1px',
    lineHeight: 'normal',
  },
  icon: {
    color: 'currentColor',
    fontSize: '1.25rem',
    _disabled: { opacity: 0.5 },
  },
}

const sizes = Input.sizes
const variants = Input.variants
const defaultProps = Input.defaultProps

export const Select = {
  parts: {
    field: '',
    icon: '',
  },
  defaultProps,
  baseStyle,
  sizes,
  variants,
};
