import React from 'react'
import { Heading } from '@chakra-ui/core'

import withLayout from 'src/modules/shared/hoc/withLayout'
import PageHeader from 'src/modules/shared/components/PageHeader'
import HeroSection from 'src/modules/hero/components/HeroSection'
import Products from 'src/modules/products/components/Products'
import Gallery from 'src/modules/gallery/components/Gallery'
import ConnectWithUs from 'src/modules/contact/components/ConnectWithUs'

const Index = () => (
  <PageHeader title="Home">
    <HeroSection />
    <Products />
    <Gallery />
    <ConnectWithUs />
  </PageHeader>
)

export default withLayout(Index, 'main')
