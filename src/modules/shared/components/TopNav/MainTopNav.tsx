import { Box, BoxProps, Flex, Text, Link, Button } from '@chakra-ui/core'
import React, { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'

import SideNav from 'src/modules/shared/components/SideNav/SideNav'
import { NavTab } from 'src/modules/shared/types'
import NavItem from './NavItem'
import { debounce } from 'src/utils'
import { productsRef, connectWithtUsRef } from 'src/utils/refs'
import { scrollTo } from 'src/utils/scrollTo'

const Hamburger = (
  { bgColor, ...rest }: BoxProps & { display: string[]; onClick: () => void; bgColor: string; }
) => (
  <Box
    as="button"
    aria-label="Navigation Menu"
    backgroundColor="transparent"
    border="none"
    width="16px"
    marginRight="15px"
    position="relative"
    bottom="1px"
    cursor="pointer"
    p={0}
    {...rest}
  >
    {[...Array(3)].map(() => (
      <Text
        key={uuid()}
        as="span"
        height="1px"
        display="block"
        marginBottom="4px"
        bgColor={bgColor}
      />
    ))}
  </Box>
)

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
  const [isSticky, setSticky] = useState(false)

  
  useEffect(() => {
    const debouncedHandleScroll = debounce(() => {
      setSticky(window.scrollY >= 70)
    }, 10)
    
    window.addEventListener('scroll', debouncedHandleScroll)
    
    return () => {
      window.removeEventListener('scroll', () => debouncedHandleScroll)
    }
  }, [])
  
  const openLeftNav = (navTab: NavTab) => {
    setSelectedNavTab(navTab)
    setLeftNavOpen(true)
  }

  const gotoProductSection = () => {
    scrollTo(productsRef)
  }

  const gotoContactUsSection = () => {
    scrollTo(connectWithtUsRef)
  }

  const boxShadow = hasBoxShadow || isSticky ? 'topNavShadow' : 'none'

  return (
    <>
      <Box
        top="0"
        width="100%"
        position={isSticky ? 'fixed' : 'absolute'}
        backgroundColor={isSticky ? 'whiteSands' : 'initial'}
        zIndex={isSticky ? 'sticky' : 'header'}
        boxShadow={['topNavShadow', boxShadow, boxShadow]}
      >
        <Flex
          direction="row"
          align="center"
          justify="space-between"
          height="64px"
          px={hasBorder ? [5, 5, 0] : [5, 5, 10]}
          mx={hasBorder ? [0, 0, 10] : 0}
          pt={2}
          color={theme === 'light' && !isSticky ? 'offwhite' : 'black'}
          borderBottom={hasBorder && !isSticky ? '1px' : 'none'}
          borderColor={theme === 'light' && !isSticky ? 'offwhite' : 'topNavDarkBorder'}
        >
          <Flex align="center" justify="center">
            <Hamburger
              display={['block', 'block', 'none']}
              onClick={() => openLeftNav(NavTab.SHOP)}
              bgColor={!isSticky ? 'offwhite' : 'black'}
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
                  src={isSticky
                      ? 'https://res.cloudinary.com/dqssxfxct/image/upload/v1602934281/nora_allure_logo_tpvgfl.png'
                      : 'https://res.cloudinary.com/dqssxfxct/image/upload/v1603030006/logo_light_fp4pio.png'
                  }
                  height="100%"
                />
              </Flex>
            </Link>
          </Flex>
          <Flex align="center" mt={-1}>
            <NavItem
              display={['none', 'none', 'block']}
              onClick={gotoProductSection}
            >
              Products
            </NavItem>

            <NavItem
              display={['none', 'none', 'block']}
              onClick={gotoContactUsSection}
            >
              Connect with us
            </NavItem>
            <Link
              target="_blank"
              rel=" noopener noreferrer"
              href="https://wa.me/2349053166712"
            >
              <Button sizes={['sm', 'md', 'md']}>
                Order Now
              </Button>
            </Link>
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
