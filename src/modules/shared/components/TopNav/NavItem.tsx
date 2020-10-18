import { Link, LinkProps } from '@chakra-ui/core'
import React from 'react'

type NavItemProps = LinkProps & {
  display?: string[] | string
  onClick?: () => void
  href?: string
  mr?: number
}

const NavItem: React.FC<NavItemProps> = (props) => {
  return (
    <Link
      as="a"
      fontSize="14px"
      lineHeight="17px"
      mr={5}
      py={1}
      px={4}
      transition="color .3s ease-in-out"
      _hover={{
        color: '#3d5b57',
      }}
      {...props}
    />
  )
}

export default NavItem
