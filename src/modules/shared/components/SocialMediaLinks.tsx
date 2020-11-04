import { Box, BoxProps, Flex, FlexProps, Text } from '@chakra-ui/core'
import React from 'react'

import { FacebookIcon } from './Icons/Facebook'
import { InstagramIcon } from './Icons/Instagram'
import { WhatsAppIcon } from './Icons/WhatsApp'

type SocialMediaLinksProps = FlexProps & {
  width: number[] | string[] | string
  size?: string
}

type SocialMediaLinkProps = BoxProps & {
  href: string
}

const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({
  href,
  children,
  ...rest
}) => {
  return (
    <Box {...rest}>
      <Flex
        as="a"
        target="_blank"
        rel=" noopener noreferrer"
        display="inline-flex"
        align="center"
        justify="space-between"
        direction="column"
        href={href}
        transition="0.3s"
        _hover={{
          transform: 'scale(1.08)',
        }}
      >
        {children}
      </Flex>
    </Box>
  )
}

const SocialMediaLinks: React.FC<SocialMediaLinksProps> = ({
  width,
  size = 'lg',
}) => {

  return (
    <Flex direction="row" justify="center" align="center" mt={2} width={width} flexShrink={0} mb={[6, 6, 0]}>
      <SocialMediaLink
        href="https://www.instagram.com/nora.allure/"
      >
        <InstagramIcon
          w={size === 'lg' ? '70px' : '20px'}
          h={size === 'lg' ? '70px' : '20px'}
        />
        <Text>Instagram</Text>
      </SocialMediaLink>
      <SocialMediaLink
        ml={size === 'lg' ? 10 : 3}
        href="https://www.facebook.com/Noraallure-102124804464479/"
      >
        <FacebookIcon
          w={size === 'lg' ? '70px' : '20px'}
          h={size === 'lg' ? '70px' : '20px'}
        />
        <Text>Facebook</Text>
      </SocialMediaLink>
      <SocialMediaLink
        ml={size === 'lg' ? 10 : 3}
        href="https://wa.me/2349053166712"
      >
        <WhatsAppIcon
          w={size === 'lg' ? '70px' : '30px'}
          h={size === 'lg' ? '70px' : '30px'}
        />
        <Text>WhatsApp</Text>
      </SocialMediaLink>
    </Flex>
  )
}

export default SocialMediaLinks
