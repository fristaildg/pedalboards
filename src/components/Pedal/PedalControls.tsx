import React from 'react'
import { useDispatch } from 'react-redux'
import { removePedal } from '../../redux/board'
import { togglePedalModal } from '../../redux/pedal'
import styled from 'styled-components'
import { Icon, Spacer } from '../../common'

export type PedalControlsProps = {
  pedalId: string
  pedalName: string
  className?: string
  disabled?: boolean
}

const ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const PedalControls = ({ pedalId, className, disabled, pedalName }: PedalControlsProps) => {
  const dispatch = useDispatch()

  const handleConfigClick = () => {
    dispatch(togglePedalModal(pedalName))
  }
  
  const handleDeleteClick = () => {
    dispatch(removePedal(pedalId))
  }

  return disabled ? null : (
    <ControlsWrapper className={className}>
      <Icon icon='cog' onClick={handleConfigClick} />
      <Spacer />
      <Icon icon='trash' onClick={handleDeleteClick} />
    </ControlsWrapper>
  )
}

export default styled(PedalControls)``
