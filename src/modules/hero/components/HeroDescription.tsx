import { Flex, Text, Heading, BoxProps, Button } from '@chakra-ui/core'
import React from 'react'

const HeroDescription: React.FC<BoxProps> = ({ ...rest }) => {
  return (
    <Flex
      direction="column"
      justify="center"
      maxW={['360px', '450px', '520px']}
      my="0"
      color="whiteSands"
      {...rest}
    >
      <Heading
        as="h1"
        fontSize={['2.625rem', '3.375rem', '3.375rem']}
        letterSpacing="0.43px"
        lineHeight="3.18rem"
        mb={[2, 4, 4]}
      >
        Nora allure Fashion Store
      </Heading>
      <Text
        size="md"
      >
        We provide the outfits that you love, Clothes that will make you smile. So be Stylish, be our customer
      </Text>
      <Button
        variant="outline"
        size="md"
        width={['100%', '50%', '50%']}
        color="offwhite"
        mt={[4, 8, 8]}
        borderWidth="3px"
        py={[2, 4, 6]}
      >
        ORDER NOW
      </Button>
    </Flex>
  )
}

export default HeroDescription
