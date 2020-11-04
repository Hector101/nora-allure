import { Box, Flex, BoxProps } from '@chakra-ui/core'
import React, { FC } from 'react'

import HeroDescription from './HeroDescription'

const SplitHeroMobileView: FC<BoxProps> = ({ display }) => {
  return (
    <>
      <Box
        backgroundImage={
          "url('https://res.cloudinary.com/dqssxfxct/image/upload/v1603019821/native_fsdy8e.jpg')"
        }
        backgroundRepeat="no-repeat"
        backgroundPosition="bottom"
        bgSize="cover"
        minH="450px"
        pt="40%"
        position="relative"
        display={display}
      >
        <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        backgroundColor="black"
        opacity={0.7}
      >
        <Flex
          px={4}
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
    </>
  )
}

export default SplitHeroMobileView
