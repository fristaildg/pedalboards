import React, { useRef } from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'
import { COLORS } from '../../theme/constants'
import { Children } from '../../types'
import { Portal } from '../Portal'
import { Icon } from '../Icon'
import { Spacer } from '../Spacer'
import { motion, AnimatePresence } from 'framer-motion'
import { useOnClickOutside } from '../../../utils/hooks'

type ModalProps = {
  children: Children
  isOpen: boolean
  onCloseClick?: () => void
}

const Overlay = styled(motion.div)`
  background-color: ${rgba(COLORS.BODY_HOVER, 0.8)};
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`

const ContentWrapper = styled(motion.div)`
  width: 70%;
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  background-color: ${COLORS.BODY};
  color: ${COLORS.WHITE};
  border: 1px dashed ${COLORS.GRAY};
`

const CloseIcon = styled(Icon)`
  align-self: flex-end;
`

const overlayAnimation = {
  key:"modal-overlay",
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

const contentWrapperAnimation = {
  key:"modal-content",
  initial: { y: -15, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { bounce: 0 } },
  exit: { y: 15, opacity: 0 },
}

const ModalComp = ({ isOpen, children, onCloseClick }: ModalProps) => {
  const onClickOutsideRef = useRef(null)
  useOnClickOutside(onClickOutsideRef, onCloseClick)

  return (
    <Portal selector="#modal-portal">
      <AnimatePresence>
        {isOpen && (
          <Overlay {...overlayAnimation}>
            <AnimatePresence>
              {isOpen && (
                <ContentWrapper
                  ref={onClickOutsideRef}
                  {...contentWrapperAnimation}
                >
                  <CloseIcon src='/icons/close.svg' onClick={onCloseClick} />
                  <Spacer spacingY={5}/>
                  <Content>
                    {children}
                  </Content>
                </ContentWrapper>
              )}
            </AnimatePresence>
          </Overlay>
        )}
      </AnimatePresence>
    </Portal>
  )
}

export const Modal = styled(ModalComp)``
