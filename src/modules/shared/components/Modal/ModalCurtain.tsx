import { Box } from '@chakra-ui/core'

import styled from 'src/theme/styled'

const ModalCurtain = styled(Box)(({ theme }) => ({
  position: 'fixed',
  height: '100%',
  width: '100%',
  top: 0,
  left: 0,
  opacity: 0.8,
  zIndex: theme.zIndices.modal - 1,
  background: theme.colors.seastone,
  backdropFilter: 'blur(3px)',
  '&.modal-enter': {
    opacity: 0,
    backdropFilter: 'blur(0px)',
  },
  '&.modal-enter.modal-enter-active': {
    opacity: 0.8,
    backdropFilter: 'blur(3px)',
    transition: `
      opacity ${theme.durations.default} ${theme.easings.default},
      backdropFilter ${theme.durations.default} ${theme.easings.default}
    `,
  },
  '&.modal-leave': {
    opacity: 0.8,
    backdropFilter: 'blur(3px)',
  },
  '&.modal-leave.modal-leave-active': {
    opacity: 0,
    backdropFilter: 'blur(0px)',
    transition: `
      opacity ${theme.durations.default} ${theme.easings.default},
      backdropFilter ${theme.durations.default} ${theme.easings.default}
    `,
  },
}))

export default ModalCurtain
