import { Box, Button } from '@chakra-ui/core'
import React from 'react'

const HeroRightSection = () => {
  return (
    <Box
      backgroundImage={
        "url('https://res.cloudinary.com/dqssxfxct/image/upload/v1603019820/stylish_be4ovo.jpg')"
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
        left="50%"
        width="50%"
        height="calc(750px + 64px)"
        backgroundColor="black"
        opacity={0.7}
      />
    </Box>
  )
}

export default HeroRightSection
