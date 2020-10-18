import { Box } from '@chakra-ui/core'
import React from 'react'

import { BackSlashIcon } from './BackSlash'
import { SlashIcon } from './Slash'

const CloseIcon = () => {
  return (
    <Box
      position="relative"
      color="nightGreen"
      w={['16px', '16px', '18px']}
      h={['16px', '16px', '18px']}
      _hover={{
        color: 'black',
      }}
    >
      <SlashIcon position="absolute" top={0} left={0} w="100%" h="100%" />
      <BackSlashIcon position="absolute" top={0} left={0} w="100%" h="100%" />
    </Box>
  )
}

export default CloseIcon
