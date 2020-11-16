import { Box, Flex } from '@chakra-ui/core'
import React from 'react'

import MainTopNav from 'src/modules/shared/components/TopNav/MainTopNav'
import Footer from 'src/modules/shared/components/Footer/Footer'

const px = [5, 5, 10]

export interface MainLayoutProps {
  theme?: 'light' | 'dark'
  hasBorder?: boolean
  hasBoxShadow?: boolean
}

const MainLayout: React.FC<MainLayoutProps> = ({
  theme,
  children,
  hasBorder = true,
  hasBoxShadow = false,
}) => {
  return (
    <Box
      bgColor="offwhite"
      maxW="2100px"
      m="0 auto"
      position="relative"
    >
      <MainTopNav theme={theme} hasBorder={hasBorder} hasBoxShadow={hasBoxShadow} />
      <Flex direction="column" minH="100vh" px={0} mx={0} pt={0}>
        <Box
          flexGrow={1}
          flexShrink={0}
          css={{
            '> *:first-of-type': {
              // This is the height of the abs positioned topNav. Should it be in theme?
              paddingTop: '64px',
            },
            '> *': {
              paddingLeft: px,
              paddingRight: px,
            },
          }}
        >
          {children}
        </Box>
        <Box as={Footer} flexGrow={0} flexShrink={0} px={px} />
      </Flex>
    </Box>
  )
}

export default MainLayout
