import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { CSSTransitionGroup as Transition } from 'react-transition-group'

import ModalCurtain from './ModalCurtain'
import useBlockScroll from 'src/modules/shared/hooks/useBlockScroll'
import { useTheme } from 'src/theme/styled'
import { timeToMs } from 'src/utils'

interface ModalBaseProps {
  isOpen: boolean
  setIsOpen: (val: boolean) => void
}

const ModalBase: React.FC<ModalBaseProps> = ({
  isOpen,
  setIsOpen,
  children,
}) => {
  const [target, setTarget] = useState<HTMLElement | void>()
  const theme = useTheme()

  const duration = timeToMs(theme.durations.default)

  useBlockScroll(isOpen)
  useEffect(() => setTarget(document.body), [])

  if (!target) {
    return null
  }

  return ReactDOM.createPortal(
    <Transition
      transitionName="modal"
      transitionEnterTimeout={duration}
      transitionLeaveTimeout={duration}
      style={{
        zIndex: theme.zIndices.modal,
        position: 'relative',
      }}
    >
      {isOpen && (
        <ModalCurtain
          onClick={() => {
            setIsOpen(false)
          }}
        />
      )}
      {isOpen && children}
    </Transition>,
    target
  )
}

export default ModalBase
