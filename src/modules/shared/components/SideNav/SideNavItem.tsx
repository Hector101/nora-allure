import { Heading, chakra } from '@chakra-ui/core'

export const ListNavLink = chakra(Heading, {
  baseStyle: theme => ({
    display: 'inline-block',
    width: 'auto',
    border: 'none',
    borderBottom: `1px solid ${theme.colors.transparent}`,
    cursor: 'pointer',
    fontSize: 'lg',
    lineHeight: 1,
    mb: 4,
    transition: `
    color ${theme.durations.default} ${theme.easings.default},
    border-color ${theme.durations.default} ${theme.easings.default}
  `,
    '&:hover': {
      color: theme.colors.sage,
      borderColor: theme.colors.black,
    },
  }),
})

