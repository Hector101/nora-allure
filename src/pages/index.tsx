import React from 'react'
import { Heading } from '@chakra-ui/core'

import HeroSection from 'src/modules/hero/components/HeroSection'
import PageHeader from 'src/modules/shared/components/PageHeader'
import withLayout from 'src/modules/shared/hoc/withLayout'

const Index = () => (
  <PageHeader title="Home">
    <HeroSection />
  </PageHeader>
)

export default withLayout(Index, 'main')
