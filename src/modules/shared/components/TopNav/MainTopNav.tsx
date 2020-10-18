import { Box, BoxProps, Flex, Text, Link, Button } from '@chakra-ui/core'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import React, { useState, useContext, useEffect } from 'react'

import SideNav from 'src/modules/shared/components/SideNav/SideNav'
import { NavTab } from 'src/modules/shared/types'
import NavItem from './NavItem'
import { debounce } from 'src/utils'

const Hamburger = (
  props: BoxProps & { display: string[]; onClick: () => void }
) => (
  <Box as="button" aria-label="Navigation Menu" {...props}>
    <span></span>
    <span></span>
    <span></span>
  </Box>
)

const StyledHamburger = styled(Hamburger)`
  background-color: transparent;
  border: none;
  width: 16px;
  margin-right: 15px;
  position: relative;
  bottom: 1px;
  cursor: pointer;
  padding: 0;

  > span {
    height: 1px;
    display: block;
    background-color: #111211;
    margin-bottom: 4px;
  }
`

export interface TopNavProps {
  theme?: 'light' | 'dark'
  hasBorder?: boolean
  hasBoxShadow?: boolean
}

const MainTopNav: React.FC<TopNavProps> = ({
  theme = 'light',
  hasBorder = true,
  hasBoxShadow = false,
}) => {
  const [leftNavOpen, setLeftNavOpen] = useState(false)
  const [selectedNavTab, setSelectedNavTab] = useState<NavTab>(NavTab.SHOP)
  const [isSticky, setSticky] = useState(true)
  let unsubscribeFromOnCartHide = () => {}

  useEffect(() => {
    const debouncedHandleScroll = debounce(() => {
        setSticky(window.scrollY >= 70)
    }, 10)

    window.addEventListener('scroll', debouncedHandleScroll)

    return () => {
      window.removeEventListener('scroll', () => debouncedHandleScroll)
      unsubscribeFromOnCartHide
    }
  }, [])

  const openLeftNav = (navTab: NavTab) => {
    setSelectedNavTab(navTab)
    setLeftNavOpen(true)
  }

  return (
    <>
      <Box
        top="0"
        width="100%"
        position={isSticky ? 'fixed' : 'absolute'}
        backgroundColor={isSticky ? 'whiteSands' : 'initial'}
        zIndex={isSticky ? 'sticky' : 'header'}
        boxShadow={hasBoxShadow || isSticky ? 'topNavShadow' : 'none'}
      >
        <Flex
          direction="row"
          align="center"
          justify="space-between"
          height="64px"
          px={hasBorder ? [5, 5, 0] : [5, 5, 10]}
          mx={hasBorder ? [0, 0, 10] : 0}
          pt={2}
          color={theme === 'light' ? 'black' : 'offwhite'}
          borderBottom={hasBorder && !isSticky ? '1px' : 'none'}
          borderColor={theme === 'light' ? 'topNavDarkBorder' : 'white'}
        >
          <Flex align="center" justify="center">
            <StyledHamburger
              display={['block', 'block', 'none']}
              onClick={() => openLeftNav(NavTab.SHOP)}
            />

            <Link href="/">
              <Flex
                mt="-5px"
                align="center"
                display={['none', 'none', 'inline-block']}
                width={['auto', 'auto', '163px']}
                height={['20px', '20px', '44px']}
                mr={[0, 0, 16]}
              >
                <Box
                  as="img"
                  alt="logo"
                  src="https://res.cloudinary.com/dqssxfxct/image/upload/v1602934281/nora_allure_logo_tpvgfl.png"
                  height="100%"
                />
              </Flex>
            </Link>
          </Flex>
          <Flex align="center" mt={-1}>
            <NavItem
              display={['none', 'none', 'block']}
            >
              Products
            </NavItem>

            <NavItem
              display={['none', 'none', 'block']}
            >
              Help
            </NavItem>
            <Button sizes={['sm', 'md', 'md']}>Order Now</Button>
          </Flex>
        </Flex>
        <SideNav
          isOpen={leftNavOpen}
          setIsOpen={setLeftNavOpen}
          leftNavTab={selectedNavTab}
          setLeftNavTab={setSelectedNavTab}
          anchor="left"
        />
      </Box>
    </>
  )
}

export default MainTopNav
