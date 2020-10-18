import {
  Flex,
  Heading,
} from "@chakra-ui/core"
import { keyframes } from "@emotion/core"
import React, { FC, ReactNode } from "react"

import Drawer from "src/modules/shared/components/Drawer/Drawer"
import {
  ListNavLink,
} from "src/modules/shared/components/SideNav/SideNavItem"
import { Anchor, NavTab } from "src/modules/shared/types"

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
  return (
    <Drawer {...drawerProps} desktopWidth={474}>
      {(push) => (
        <Flex justify="flex-start" pt={12} px={8} direction="column" flex={1} spacing={4}>
          <ListNavLink as={Heading} size="xs">
              Products
            </ListNavLink>
            <ListNavLink as={Heading} size="xs">
              Help
            </ListNavLink>
        </Flex>
      )}
    </Drawer>
  )
}

export default SideNav
