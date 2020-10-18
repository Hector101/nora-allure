import React from 'react'
import { Button, ButtonProps, Flex, Icon } from '@chakra-ui/core'

import { ChevronLeft } from 'src/modules/shared/components/Icons/ChevronLeft'
import { Anchor } from "src/modules/shared/types"

export type DrawerCloseProps = Omit<ButtonProps, "children"> & {
  anchor?: Anchor;
  removeSelf: () => void;
  setIsOpen: (val: boolean) => void
};

const DrawerCloseButton: React.FC<DrawerCloseProps> = ({
  anchor = "left",
  setIsOpen,
  removeSelf,
  ...buttonProps
}) => {
  return (
    <Button
      variant="blank"
      borderRadius="full"
      onClick={() => {
        setIsOpen(false)
        removeSelf()
      }}
      {...buttonProps}
    >
      <Flex
        borderRadius="full"
        border="1px"
        borderColor="sage"
        width="2rem"
        height="2rem"
        align="center"
        justify="center"
      >
        <ChevronLeft size="md" color="sage" />
      </Flex>
    </Button>
  );
};

export default DrawerCloseButton;
