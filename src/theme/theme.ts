import { components } from './components'
import typography from './typography'

const space = {
  px: '1px',
  '0': '0rem',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '8': '2rem',
  '10': '2.5rem',
  '12': '3rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  '32': '8rem',
  '40': '10rem',
  '48': '12rem',
  '56': '14rem',
  '64': '16rem',
}

const sizes = {
  boxed: '1300px',

  heightXl: '57px',
  heightXlMobile: '50px',

  heightLg: '50px',
  heightLgMobile: '38px',

  heightMd: '42px',
  heightMdMobile: '32px',

  heightSm: '32px',
  heightSmMobile: '24px',
}

const fontWeights = {
  normal: '400',
  bold: '600',
}

const fontSizes = {
  lg: ['1', null, '1.25rem'],
  md: ['.8125rem', null, '1.0rem'],
  sm: ['.6875rem', null, '.8125rem'],
  xs: ['.6875rem', null, '.6875rem'],
}

const colors = {
  transparent: 'transparent',
  current: 'currentColor',
  black: '#000',
  white: '#fff',
  disabled: '#E0E2DF',
  primary: '#173b99',
  primaryLight: '#214dc7',
  secondary: '#696969',
  textPrimary: '#232323',
  textSecondary: '#A8A8A8',
  drawerText: '#0B0C0D',
  buttonText: '#0A0E0D',
  charcoal: '#000000',
  offwhite: '#f5f5f4',
  whiteSands: '#fcfcf9',
  morning: '#9eacae',
  showers: '#cee2ea',
  sage: '#6e7b70',
  seastone: '#cdd1ce',
  foam: '#e2e6e3',
  foam2: '#e9ebe7',
  lightFoam: '#ECECEC',
  offwhite2: '#f2f2ef',
  offwhite3: '#f7f7f7',

  // form colors
  formError: '#dc3545',
  formHelperText: '#888',
  formIcon: '#2b2e2b',
  // Separator
  separator: '#5c5c5c',
  //badge
  tomato: '#f06570',
  // checkout
  sectionSeparator: '#202020',
  laurelGreen: '#258d03',
  checkoutText: '#152B2A',
  disabledNav: '#acacac',
  subHeading: '#999999',
  selectedAddressBg: 'rgba(110, 123, 112, 0.1)',
  modalBg: 'rgba(205, 209, 206,0.8)',
  checkMark: '#3d3f43',
  darkColor: '#1D2B2B',
  successBagdeColor: '#4D5549',
  lightGray: '#E5E5E5',
  topNavDarkBorder: '#292929',
  greySelectBorder: '#ACAFAD',
  detailsText: '#525F53',
}

const shadows = {
  sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl:
    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  outline: '0 0 0 3px rgba(66, 153, 225, 0.6)',
  inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
  topNavShadow: '0 2px 3px -3px grey',
  addressBlockShadow:
    '1px 0 1px rgba(0, 0, 0, 0.2), -1px 0 1px rgba(0, 0, 0, 0.19)',
  none: 'none',
}

const breakpoints = ['768px', '992px', '1200px', '1440px']

const zIndices = {
  hide: -1,
  auto: 'auto',
  base: 0,
  header: 1,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
}

const radii = {
  none: '0',
  sm: '0.125rem',
  md: '0.25rem',
  lg: '0.5rem',
  round: '50%',
  full: '9999px',
}

const opacity = {
  '0': '0',
  '20%': '0.2',
  '40%': '0.4',
  '60%': '0.6',
  '80%': '0.8',
  '100%': '1',
}

const borders = {
  none: 0,
  '1px': '1px solid',
  '2px': '2px solid',
  '4px': '4px solid',

  disabled: `1px solid ${colors.disabled}`,
  primary: `1px solid ${colors.primary}`,
  whiteSands: `1px solid ${colors.whiteSands}`,
  morning: `1px solid ${colors.morning}`,
}

const durations = {
  instant: '0s',
  quick: '0.2s',
  default: '0.4s',
  slow: '0.6s',
  verySlow: '0.9s',
}

const easings = {
  default: 'ease-in-out',
}

const transitions = {
  allEase: 'all ease 500ms',
  cspEase: 'opacity ease 500ms'
}

const globalStyles = {
  color: `rgb(30, 45, 43)`,
  fontFamily: 'body',
  'a:hover': {
    cursor: 'pointer',
  },
  '*': `
  @font-face {
    font-family: 'Abril Fatface';
    src: url("https://fonts.googleapis.com/css?family=Abril+Fatface:300,700");
    font-weight: 700;
  }

  @font-face {
    font-family: 'Work Sans';
    src: url("https://fonts.googleapis.com/css?family=Work+Sans:300,700");
    font-weight: 300;
  }
  `,
}

const customTheme = {
  styles: {
    global: globalStyles,
  },
  breakpoints,
  zIndices,
  radii,
  opacity,
  borders,
  colors,
  durations,
  easings,
  ...typography,
  sizes,
  shadows,
  space,
  fontWeights,
  fontSizes,
  components,
  transitions,
}

export type CustomTheme = typeof customTheme

export default customTheme
