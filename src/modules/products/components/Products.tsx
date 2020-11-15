import { Flex, Box, Heading } from '@chakra-ui/core'
import React from 'react'

import { products } from 'src/modules/products/constants'
import ProductCard from 'src/modules/products/components/ProductCard'
import { productsRef } from 'src/utils/refs'

const Products = () => {
  return (
    <Box
      maxW="1600px"
      width="100%"
      backgroundColor="offwhite"
      paddingTop={[10, 10, 20]}
      px={4}
      mx="auto"
      ref={productsRef}
    >
      <Heading
        as="h3"
        fontSize="30px"
        mb={8}
      >
        Available Products
      </Heading>
      <Flex
        direction={['column', 'row']}
        width="100%"
        align={['center', 'unset']}
        justify="space-between"
        wrap="wrap"
      >
        {products.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </Flex>
    </Box>
  )
}

export default Products
