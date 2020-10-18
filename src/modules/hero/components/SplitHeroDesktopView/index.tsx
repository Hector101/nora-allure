import { Flex, BoxProps } from '@chakra-ui/core'
import React, { FC } from 'react'

import HeroLeftSection from './HeroLeftSection'
import HeroRightSection from './HeroRightSection'

const SplitHeroDesktopView: FC<BoxProps> = ({ display }) => {
  return (
    <>
      <Flex display={display}>
        <HeroLeftSection />
        <HeroRightSection />
      </Flex>
    </>
  )
}

export default SplitHeroDesktopView
