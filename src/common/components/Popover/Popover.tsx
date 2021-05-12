import React, { useRef, useState } from 'react'
import { usePopper } from 'react-popper'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { COLORS } from '../../theme/constants'
import { Children } from '../../types'
import { useOnClickOutside } from '../../../utils/hooks'

type PopoverProps = {
  children: Children
  content: Children
  className?: string
  visible: boolean
  onClickOutside?: () => void
}

const PopoverContentWrapper = styled.div`
  /* position: relative; */
  width: 180px;
`

const PopoverContent = styled(motion.div)`
  background-color: ${COLORS.BODY};
  border: 1px solid ${COLORS.GRAY};
  width: 100%;
`

const popOverContentAnimation = {
  key:"popover",
  initial: { y: -15, opacity: 0},
  animate: { y: 0, opacity: 1},
  exit: { y: -15, opacity: 0 },
  transition: { bounce: 0 }
}

const PopoverComp = ({ children, content, className, visible, onClickOutside }: PopoverProps) => {
  const [referenceElement, setReferenceElement] = useState(null)
  const [popperElement, setPopperElement] = useState(null)
  const { styles, attributes } = usePopper(referenceElement, popperElement)
  const clickOutsideRef = useRef(null)

  const handleClickOutside = () => {
    if (onClickOutside) {
      onClickOutside()
    }
  }

  useOnClickOutside(clickOutsideRef, handleClickOutside)
  
  return (
    <div ref={clickOutsideRef}>
      <div
        ref={setReferenceElement as unknown as typeof referenceElement}
        style={{display: 'inline-block'}}
        className={className}
      >
        {children}
      </div>
      <PopoverContentWrapper
        ref={setPopperElement as unknown as typeof popperElement}
        style={styles.popper}
        {...attributes.popper}
        >
        <AnimatePresence>
          {visible && content && (
            <PopoverContent {...popOverContentAnimation}>
              {content}
            </PopoverContent>
          )}
        </AnimatePresence>
      </PopoverContentWrapper>
    </div>
  )
}

export const Popover = styled(PopoverComp)``
