import { Box, Flex } from '@chakra-ui/core'
import React from 'react'

import HeroDescription from 'src/modules/hero/components//HeroDescription'

const HeroLeftSection = () => {
  return (
    <Box
      backgroundImage={
        "url('https://res.cloudinary.com/dqssxfxct/image/upload/v1603019821/native_fsdy8e.jpg')"
      }
      backgroundRepeat="no-repeat"
      backgroundPosition="top center"
      bgSize="cover"
      minH="750px"
      w="50%"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        width="50%"
        height="calc(750px + 64px)"
        backgroundColor="black"
        opacity={0.7}
      >
        <Flex
          px={8}
          pt="64px"
          w="100%"
          h="100%"
          align="center"
          justify="center"
          direction="column"
        >
          <HeroDescription px={3} />
        </Flex>
      </Box>
    </Box>
  )
}

export default HeroLeftSection
