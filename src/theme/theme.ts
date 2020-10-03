import { theme as chakraTheme } from '@chakra-ui/core';

import { components } from './components';

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
};

const colors = {
  ...chakraTheme.colors,
  transparent: 'transparent',
  current: 'currentColor',
  black: '#000',
  white: '#fff',
  disabled: '#E0E2DF',
  secondary: '#696969',
  // brand specific
  textPrimary: '#1E2D2B',
  textSecondary: '#A8A8A8',
  drawerText: '#0B0C0D',
  buttonText: '#0A0E0D',
  nightGreen: '#2b2e2b',
  moss: '#4b5548',
  sage: '#6e7b70',
  seastone: '#cdd1ce',
  seastone2: '#e0e2e0',
  foam: '#e2e6e3',
  charcoal: '#000000',
  offwhite: '#f5f5f4',
  offwhite2: '#f2f2ef',
  offwhite3: '#f7f7f7',
  whiteSands: '#fcfcf9',
  morning: '#9eacae',
  showers: '#cee2ea',

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
};

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
};

const breakpoints = ['40em', '52em', '64em'];

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
};

const radii = {
  none: '0',
  sm: '0.125rem',
  md: '0.25rem',
  lg: '0.5rem',
  round: '50%',
  full: '9999px',
};

const opacity = {
  '0': '0',
  '20%': '0.2',
  '40%': '0.4',
  '60%': '0.6',
  '80%': '0.8',
  '100%': '1',
};

const borders = {
  none: 0,
  '1px': '1px solid',
  '2px': '2px solid',
  '4px': '4px solid',

  disabled: `1px solid ${colors.disabled}`,
  nightGreen: `1px solid ${colors.nightGreen}`,
  whiteSands: `1px solid ${colors.whiteSands}`,
  seastone: `1px solid ${colors.seastone}`,
  moss: `1px solid ${colors.moss}`,
  morning: `1px solid ${colors.morning}`,
};

const durations = {
  instant: '0s',
  quick: '0.2s',
  default: '0.4s',
  slow: '0.6s',
};

const easings = {
  default: 'ease-in-out',
};

const globalStyles = {
  color: `rgb(30, 45, 43)`,
  fontFamily: 'body',
  // display: 'none',
  'a:hover': {
    cursor: 'pointer',
  },
  '*': `@font-face {
    font-family: "FF Bau Regular";
    src: url("/fonts/karla.woff2") format("woff2");
  }

  @font-face {
    font-family: freight-display-pro;
    src: url("https://use.typekit.net/af/f15774/0000000000000000000132cf/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3");
    font-display: swap;
    font-weight: 400;
  }
  @font-face {
    font-family: 'FF Bau Regular';
    src: url("/fonts/karla.woff2")  format("woff2");
  }

  @font-face {
    font-family: 'FF Bau Medium';
    src: url("https://cdn.shopify.com/s/files/1/0044/1237/5107/t/1/assets/3A0D89_0_0.woff2")  format("woff2");
  }

  /* latin-ext */
  @font-face {
    font-family: 'Karla';
    font-style: normal;
    font-weight: 400;
    src: local('Karla'), local('Karla-Regular'), url(https://fonts.gstatic.com/s/karla/v7/qkBbXvYC6trAT7RbLtyU5rZPoAU.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Karla';
    font-style: normal;
    font-weight: 400;
    src: local('Karla'), local('Karla-Regular'), url(https://fonts.gstatic.com/s/karla/v7/qkBbXvYC6trAT7RVLtyU5rZP.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* cyrillic-ext */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v13/JTUSjIg1_i6t8kCHKm459WRhyyTh89ZNpQ.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v13/JTUSjIg1_i6t8kCHKm459W1hyyTh89ZNpQ.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v13/JTUSjIg1_i6t8kCHKm459WZhyyTh89ZNpQ.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v13/JTUSjIg1_i6t8kCHKm459WdhyyTh89ZNpQ.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v13/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  `,
};

const theme = {
  ...chakraTheme,
  colors,
  breakpoints,
  zIndices,
  radii,
  opacity,
  borders,
  durations,
  easings,
  shadows,
  space,
  components,
  styles: {
    global: globalStyles,
  },
}

export type CustomTheme = typeof theme;

export default theme;
