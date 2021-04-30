import React, { useEffect } from 'react'
import styled from 'styled-components'
import { COLORS } from '../../theme/constants'
import { Portal } from '../Portal'
import { Text } from '../Typography'
import { motion, AnimatePresence } from 'framer-motion'

type AlertProps = {
  isOpen: boolean
  message: string
  onTimeout?: () => void
}

const StyledAlert = styled(motion.div)`
  background-color: ${COLORS.PRIMARY};
  position: fixed;
  bottom: 20px;
  left: 20px;
  padding: 20px;
  color: ${COLORS.WHITE};
`
const alertAnimation = {
  key:"alert",
  initial: { y: 15, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -15, opacity: 0 },
  transition: { bounce: 0 }
}

const AlertComp = ({ isOpen, message, onTimeout }: AlertProps) => {
  useEffect(() => {
    if (isOpen && onTimeout) {
      setTimeout(() => {
        onTimeout()
      }, 3000)
    }
  }, [isOpen])

  return (
    <Portal selector='#alert-portal'>
      <AnimatePresence>
        {isOpen && (
          <StyledAlert {...alertAnimation}>
            <Text>{message}</Text>
          </StyledAlert>          
        )}
      </AnimatePresence>
    </Portal>
  )
}

export const Alert = styled(AlertComp)``
