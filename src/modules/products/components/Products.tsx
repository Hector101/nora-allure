import { Box, Heading , HStack} from '@chakra-ui/core'
import React from 'react'

import { products } from 'src/modules/products/constants'
import ProductCard from 'src/modules/products/components/ProductCard'
import { productsRef } from 'src/utils/refs'

const Products = () => {
  return (
    <Box
      px={4}
      width="100%"
      backgroundColor="offwhite"
      paddingTop={20}
      mx="auto"
      ref={productsRef}
    >
      <Heading
        as="h3"
        fontSize="30px"
        mb={8}
        textAlign="center"
      >
        Available Products
      </Heading>
      <HStack
        spacing={[0, 3, 4, 8]}
        direction={['column', 'row']}
        width="100%"
        align={['center', 'unset']}
        justify="center"
        wrap="wrap"
      >
        {products.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </HStack>
    </Box>
  )
}

export default Products
