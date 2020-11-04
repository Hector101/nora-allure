import { Box, Flex, Heading, Text, Button, Link } from '@chakra-ui/core'
import React from 'react'

import { Product } from 'src/modules/products/constants'

const ProductCard: React.FC<Product> = ({
  title,
  image,
  desc,
}) => {
  return (
    <Flex
      position="relative"
      direction="column"
      justify="space-between"
      backgroundColor="white"
      w={['100%', '48%', '48%', '24%']}
      maxW={['540px', '100%']}
      p={6}
      marginBottom={[4, 8, 10]}
    >
      <Box width={1} marginBottom={3} backgroundColor="lightFoam" padding={8}>
        <Box
          as="img"
          src={image}
          objectFit="cover"
          maxH="192px"
          width="100%"
        />
      </Box>
      <Heading size="xs" marginBottom={3}>
        {title}
      </Heading>
      <Text size="md" marginBottom={3} flexGrow={1}>
        {desc}
      </Text>
      <Link
        target="_blank"
        rel=" noopener noreferrer"
        href="https://wa.me/2349053166712"
      >
        <Button
          width="100%"
          variant="outline"
          mt={2}
          px={2}
          py={4}
        >
          Order Now
        </Button>
      </Link>
    </Flex>
  )
}

export default ProductCard
