import {
  Flex,
  Heading,
} from '@chakra-ui/core'
import { keyframes } from '@emotion/core'
import React, { FC, ReactNode } from 'react'

import Drawer from 'src/modules/shared/components/Drawer/Drawer'
import {
  ListNavLink,
} from 'src/modules/shared/components/SideNav/SideNavItem'
import { Anchor, NavTab } from 'src/modules/shared/types'
import { productsRef, connectWithtUsRef } from 'src/utils/refs'
import { scrollTo } from 'src/utils/scrollTo'

const bounce = keyframes`
  from {
    transform: translateX(-5%)
    opacity: 0
  }
`

export interface SideNavProps {
  isOpen: boolean
  setIsOpen: (val: boolean) => void
  setLeftNavTab: (val: NavTab) => void
  leftNavTab: NavTab
  anchor: Anchor
}

const SideNav: FC<SideNavProps> = ({
  leftNavTab,
  setLeftNavTab,
  ...drawerProps
}) => {
  const gotoProductSection = () => {
    scrollTo(productsRef)
    drawerProps.setIsOpen(false)
  }

  const gotoContactUsSection = () => {
    scrollTo(connectWithtUsRef)
    drawerProps.setIsOpen(false)
  }

  return (
    <Drawer {...drawerProps} desktopWidth={474}>
      {(push) => (
        <Flex justify="flex-start" pt={12} px={8} direction="column" flex={1} spacing={4}>
          <ListNavLink
            as={Heading}
            size="xs"
            onClick={gotoProductSection}
          >
            Products
          </ListNavLink>
          <ListNavLink
            as={Heading}
            size="xs"
            onClick={gotoContactUsSection}
          >
            Connect with us
          </ListNavLink>
        </Flex>
      )}
    </Drawer>
  )
}

export default SideNav
