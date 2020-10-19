import { Flex, Box, Divider, Text } from '@chakra-ui/core'
import React from 'react'

const LightFooter = () => {
  return (
    <>
      <Divider borderColor="moss" />
      <Box
        width="100%"
        bg="primary"
        color="offwhite"
        py={6}
        px={5}
      >
        <Flex
          justify="flex-start"
          align="center"
        >
          <Text size="md">
              © 2020 Nora allure Fashion
          </Text>
        </Flex>
      </Box>
    </>
  )
}

export default LightFooter
