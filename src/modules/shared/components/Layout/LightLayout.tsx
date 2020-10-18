import { Box } from '@chakra-ui/core'
import React from 'react'

import LightTopNav from 'src/modules/shared/components/TopNav/LightTopNav'
import Footer from 'src/modules/shared/components/Footer/Footer'

type LightLayoutProps = {
  bgColor?: string
}

const LightLayout: React.FC<LightLayoutProps> = ({
  children,
  bgColor,
}) => {
  return (
    <Box minHeight="100vh" backgroundColor={bgColor || 'offwhite'}>
      <LightTopNav />
      {children}
      <Footer />
    </Box>
  )
}

export default LightLayout
