import React from 'react'
import { Heading } from '@chakra-ui/core'

import PageHeader from 'src/modules/shared/components/PageHeader'
import withLayout from 'src/modules/shared/hoc/withLayout'

const Index = () => (
  <PageHeader title="Home">
    <Heading>Hello World</Heading>
  </PageHeader>
)

export default withLayout(Index, 'main')
