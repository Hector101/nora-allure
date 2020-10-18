import { BoxProps, Box, useTheme, Flex, Image } from '@chakra-ui/core'
import React, { FC, useEffect, useState, ReactElement } from 'react'

import styled from 'src/theme/styled'
import useWindowDimensions from 'src/modules/shared/hooks/useWindowDimensions'
import ModalBase from 'src/modules/shared/components/Modal/ModalBase'
import DrawerCloseButton, { DrawerCloseProps } from './DrawerCloseButton'
import { oppose } from 'src/modules/shared/functions'
import { PushContentFunction, Anchor, DrawerChildren } from 'src/modules/shared/types'

type DrawerContentProps = BoxProps & {
  width: string[]
  pushContent: PushContentFunction
  removeSelf: () => void
  anchor: Anchor
  ix: number
  children: DrawerChildren
  offset: number
  maxW?: number | string
  setIsOpen: (val: boolean) => void
  closeButton?:
    | ((
        removeSelf: DrawerCloseProps['removeSelf'],
        anchor: DrawerCloseProps['anchor']
      ) => ReactElement<any>)
    | false
}

const DrawerContent: React.FC<DrawerContentProps> = ({
  children,
  removeSelf,
  pushContent,
  ix,
  anchor,
  closeButton,
  offset,
  setIsOpen,
  ...boxProps
}) => {
  const CloseButton = (() => {
    if (closeButton === false) {
      return null
    }

    if (closeButton === undefined) {
      return (
        <Flex height="64px" px={8} pt={10} direction="row" align="center" justify="space-between">
          <Image
            src="https://res.cloudinary.com/dqssxfxct/image/upload/v1602934281/nora_allure_logo_tpvgfl.png"
            display="inline-block"
            w="145px"
            h="auto"
          />
        <DrawerCloseButton
          anchor={anchor}
          setIsOpen={setIsOpen}
          removeSelf={removeSelf}
        />
        </Flex>
      )
    }

    return closeButton(removeSelf, anchor)
  })()

  return (
    <Box minWidth={['100%', 'auto', 'auto']} {...boxProps}>
      {CloseButton}
      {typeof children === 'function' ? children(pushContent) : children}
    </Box>
  )
}

const DrawerFG = styled(DrawerContent)(
  ({ theme, anchor, ix, maxW }) => ({
    position: 'fixed',
    top: 0,
    [anchor]: 0,
    height: '100%',
    maxWidth: `${maxW ? maxW : 'auto'}`,
    zIndex: theme.zIndices.modal + ix,
    background: theme.colors.offwhite,
    transform: `translateX(0)`,
    opacity: 1.0,
    boxShadow: theme.shadows.sm,
    transition: `transform ${theme.durations.default} cubic-bezier(0.28, 0.47, 0.29, 0.86), opacity ${theme.durations.default} ease-in-out 100ms`,
    '&.modal-enter': {
      opacity: 0,
      transform: `translateX(${anchor === 'left' ? '-' : ''}100%)`,
    },
    '&.modal-enter.modal-enter-active': {
      opacity: 1.0,
      transform: `translateX(0)`,
    },
    '&.modal-leave': {
      transform: `translateX(0)`,
      opacity: 1.0,
    },
    '&.modal-leave.modal-leave-active': {
      transform: `translateX(${anchor === 'left' ? '-' : ''}100%)`,
      opacity: 0,
    },
  })
)

interface DrawerProps {
  isOpen: boolean
  desktopWidth?: number
  anchor?: Anchor
  closeButton?: DrawerContentProps['closeButton']
  setIsOpen: (val: boolean) => void
  children: DrawerChildren
  maxW?: string
}

const Drawer: FC<DrawerProps> = ({
  children,
  isOpen,
  setIsOpen,
  closeButton,
  desktopWidth = 474,
  anchor = 'left',
  maxW,
}) => {
  const theme = useTheme()
  const [content, setContent] = useState<DrawerChildren[]>([children])

  const { innerWidth } = useWindowDimensions()
  const removeContent = (ix: number) => {
    setContent(content.filter((_, k) => k !== ix))
  }

  const breakDesktop = +theme.breakpoints[1].replace('px', '')
  const maxWidth = innerWidth - 50 // Leave 50px to close everything
  const width = desktopWidth ?? (breakDesktop - 50) / 2
  let totalOffset = maxWidth - content.length * width
  totalOffset = totalOffset > 0 ? 0 : totalOffset

  const drawers = content.map((cont, i) => {
    let offset = totalOffset + i * width
    offset = offset <= width * -1 + i * 8 ? width * -1 + (i + 1) * 8 : offset

    const pushContent = (newCont: DrawerChildren) => {
      setContent([...content.slice(0, i + 1), newCont])
    }

    return (
      <DrawerFG
        anchor={anchor}
        ix={i}
        key={`fg_${i}`}
        width={['100%', `${width}px`, `${width}px`]}
        pushContent={pushContent}
        removeSelf={() => removeContent(i)}
        closeButton={i === content.length - 1 ? closeButton : false}
        offset={offset}
        maxW={maxW}
        setIsOpen={setIsOpen}
      >
        {cont}
      </DrawerFG>
    )
  })

  useEffect(() => {
    if (content.length === 0) {
      setIsOpen(false)
      // We should always have the original content available.
      setContent([children])
    }
  }, [content.length, children, setIsOpen])

  useEffect(() => {
    if (isOpen === false && content.length > 1) {
      setContent([children])
    }
  }, [content.length, isOpen, children])

  useEffect(() => {
    setContent([children])
  }, [children])

  return (
    <ModalBase isOpen={isOpen} setIsOpen={setIsOpen}>
      {drawers}
    </ModalBase>
  )
}

export default Drawer
