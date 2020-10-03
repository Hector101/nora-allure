const parts = {
  overlay: 'the modal overlay',
  content: 'the modal content wrapper',
  header: 'the modal content header',
  body: 'the modal main content area',
  footer: 'the modal footer action',
};

type Dict = Record<string, any>;

function baseStyleOverlay(props: Dict) {
  const { isCentered, scrollBehavior } = props

  return {
    bg: 'modalBg',
    display: 'flex',
    justifyContent: 'center',
    alignItems: isCentered ? 'center' : 'flex-start',
    overflow: scrollBehavior === 'inside' ? 'hidden' : 'auto',
    p: [2, 2, 0],
  }
};

function baseStyleContent(props: Dict) {
  const { scrollBehavior, size } = props

  return {
    borderRadius: 'md',
    bg: size === 'errorModal' ? 'darkColor' : 'white',
    color: size === 'errorModal' ? 'white' : 'inherit',
    my: ['2rem', '2rem', '3.75rem'],
    maxH: scrollBehavior === 'inside' ? 'calc(100vh - 7.5rem)' : undefined,
    boxShadow: 'md',
    w: 'fit-content',
    p: [0, 1, 3],
  }
};

const baseStyleHeader = {
  px: 6,
  py: 4,
  fontSize: 'lg',
  fontWeight: 'bold',
};

function baseStyleBody(props: Dict) {
  const { scrollBehavior } = props
  return {
    px: 6,
    py: 2,
    flex: 1,
    overflow: scrollBehavior === 'inside' ? 'auto' : undefined,
  }
};

const baseStyleFooter = {
  px: 6,
  py: 4,
};

const baseStyle = (props: Dict) => ({
  overlay: baseStyleOverlay(props),
  content: baseStyleContent(props),
  header: baseStyleHeader,
  body: baseStyleBody(props),
  footer: baseStyleFooter,
});

/**
 * Since the `maxWidth` prop references theme.sizes internally,
 * we can leverage that to size our modals.
 */
function getSize(value: string) {
  if (value === 'full') {
    return { content: { maxW: '100vw', h: '100vh' } }
  }

  return {
    content: { maxW: value },
  }
};

const sizes = {
  xs: getSize('xs'),
  sm: getSize('sm'),
  md: getSize('md'),
  lg: getSize('lg'),
  xl: getSize('xl'),
  '2xl': getSize('2xl'),
  '3xl': getSize('3xl'),
  '4xl': getSize('4xl'),
  '5xl': getSize('5xl'),
  '6xl': getSize('6xl'),
  full: getSize('full'),
  errorModal: getSize('lg'),
};

const defaultProps = {
  size: '3xl',
};

const Modal = {
  parts,
  baseStyle,
  sizes,
  defaultProps,
};

export default Modal;
