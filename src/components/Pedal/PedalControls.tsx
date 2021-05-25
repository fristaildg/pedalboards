import React from 'react'
import { useDispatch } from 'react-redux'
import { removePedal } from '../../redux/board'
import styled from 'styled-components'
import { Icon } from '../../common'

export type PedalControlsProps = {
  pedalId: string
  className?: string
  disabled?: boolean
}

const ControlsWrapper = styled.div``

const PedalControls = ({ pedalId, className, disabled }: PedalControlsProps) => {
  const dispatch = useDispatch()

  const handleIconButtonClick = () => {
    dispatch(removePedal(pedalId))
  }

  return disabled ? null : (
    <ControlsWrapper className={className}>
      <Icon src='/icons/trash.svg' onClick={handleIconButtonClick} />
    </ControlsWrapper>
  )
}

export default styled(PedalControls)``
