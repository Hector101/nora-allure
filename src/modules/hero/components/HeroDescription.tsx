import { Flex, Text, Heading, BoxProps, Button, Link } from '@chakra-ui/core'
import React from 'react'
import { productsRef, connectWithtUsRef } from 'src/utils/refs'
import { scrollTo } from 'src/utils/scrollTo'

const HeroDescription: React.FC<BoxProps> = ({ ...rest }) => {
  const gotoProductSection = () => {
    scrollTo(productsRef)
  }

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
        Nora allure fashion store
      </Heading>
      <Text
        as="h2"
        fontSize="24px"
        mb={2}
      >
        People will stare, Make it worth their while.
      </Text>
      <Text
        size="md"
        color="offwhite"
      >
        So let us provide you outfits that suits your body type, Clothes that will make you smile. So be Stylish, be our customer.
      </Text>
      <Button
        variant="outline"
        size="md"
        width={['100%', '50%', '50%']}
        color="offwhite"
        mt={[4, 8, 8]}
        borderWidth="3px"
        py={[2, 4, 6]}
        onClick={gotoProductSection}
      >
        ORDER NOW
      </Button>
    </Flex>
  )
}

export default HeroDescription
