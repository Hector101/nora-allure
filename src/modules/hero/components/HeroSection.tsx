import React from 'react'

import SplitHeroDesktopView from './SplitHeroDesktopView'
import SplitHeroMobileView from './SplitHeroMobileView'

const HeroSection = () => {
  return (
    <>
      <SplitHeroDesktopView display={['none', 'flex', 'flex']} />
      <SplitHeroMobileView display={['block', 'none', 'none']} />
    </>
  )
}
export default HeroSection
