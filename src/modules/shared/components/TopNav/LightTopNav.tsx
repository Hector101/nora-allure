import { Flex, chakra } from '@chakra-ui/core'

const NavLogo = chakra('img', {
  baseStyle: {
    maxWidth: '200px',
    display: 'flex',
    margin: 'auto',
  },
})

export default function LightTopNav() {
  return (
    <Flex
      justify="center"
      align="center"
      py={4}
      borderBottomWidth="1px"
      borderBottomColor={['sectionSeparator', 'sectionSeparator', 'nightGreen']}
    >
      <NavLogo src="https://res.cloudinary.com/dqssxfxct/image/upload/v1602934281/nora_allure_logo_tpvgfl.png" />
    </Flex>
  )
}
