import { Flex, Box, Image, Heading } from '@chakra-ui/core'
import React from 'react'

const Gallery = () => {
  return (
    <Box
      width="100%"
    >
      <Flex
        direction={['column', 'column', 'row']}
        align="center"
        justify="center"
        width="100%"
        backgroundColor="white"
      >
        <Flex
          align="center"
          justify="center"
          width={[1, 1, 1 / 2]}
          px={[10, 10, 20]}
          py={[10, 32, 3]}
          marginTop={[0, 0, 5]}
        >
          <Heading
            as="h3"
            size="md"
            className="quote"
          >
            "Fashion you can buy, style you possess. We can help you achieve both regardless"
          </Heading>
        </Flex>
        <Box width={[1, 1, 1 / 2]} alignSelf="flex-start">
          <Image
            src="https://res.cloudinary.com/dqssxfxct/image/upload/v1604489807/IMG-20201006-WA0007_jwhan2.jpg"
            objectFit="cover"
            ignoreFallback={true}
          />
        </Box>
      </Flex>
      <Flex
        direction={['column', 'column', 'row-reverse']}
        align="center"
        justify="center"
        width="100%"
        backgroundColor="white"
      >
        <Flex
          align="center"
          justify="center"
          width={[1, 1, 1 / 2]}
          px={[10, 10, 20]}
          py={[10, 32, 3]}
          marginTop={[0, 0, 5]}
        >
          <Heading
            as="h3"
            size="md"
            className="quote"
          >
            "You can have anything you want in life if you dress for it, Let's help you along the way"
          </Heading>
        </Flex>
        <Box width={[1, 1, 1 / 2]} alignSelf="flex-start">
          <Image
            src="https://res.cloudinary.com/dqssxfxct/image/upload/v1519925929/test-blog-cover2_md9gli.jpg"
            objectFit="cover"
            ignoreFallback={true}
          />
        </Box>
      </Flex>
    </Box>
  )
}

export default Gallery
