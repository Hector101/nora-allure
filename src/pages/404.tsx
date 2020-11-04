import { Text, Button, Flex } from '@chakra-ui/core'
import React from 'react'
import Link from 'next/link'

import PageHeader from 'src/modules/shared/components/PageHeader'

const NotFount = () => (
  <PageHeader title="Not Found">
    <Flex
      justify="center"
      align="center"
      direction="column"
      w="100%"
      h="100vh"
    >
      <Text size="md" mb={8}>Page Not Found</Text>
      <Link href="/">
        <Button>
          Go Back Home
        </Button>
      </Link>
    </Flex>
  </PageHeader>
)

export default NotFount
