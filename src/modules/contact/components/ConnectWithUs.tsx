import { Flex, Box, Image, Heading } from '@chakra-ui/core'
import React from 'react'

import SocialMediaLinks from 'src/modules/shared/components/SocialMediaLinks'
import { connectWithtUsRef } from 'src/utils/refs'

const ConnectWithUs = () => {
  return (
    <Flex
      align="center"
      justify="center"
      width="100%"
      py={[12, 20, 20]}
      ref={connectWithtUsRef}
    >
      <SocialMediaLinks
        width={[1]}
      />
    </Flex>
  )
}

export default ConnectWithUs
