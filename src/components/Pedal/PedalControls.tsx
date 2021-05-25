import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { removePedal } from '../../redux/board'
import { togglePedalModal } from '../../redux/pedal'
import styled from 'styled-components'
import { Icon, Spacer } from '../../common'
import { PageContext } from '../../context/pageContext'

export type PedalControlsProps = {
  pedalId: string
  pedalName: string
  className?: string
}

const ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const PedalControls = ({ pedalId, className, pedalName }: PedalControlsProps) => {
  const dispatch = useDispatch()
  const { isPublic } = useContext(PageContext)

  const handleConfigClick = () => {
    dispatch(togglePedalModal({ pedalName, pedalId }))
  }
  
  const handleDeleteClick = () => {
    dispatch(removePedal(pedalId))
  }

  return (
    <ControlsWrapper className={className}>
      {isPublic ? (
        <Icon icon='more' onClick={handleConfigClick} width={30} />
      ) : (
        <>
          <Icon icon='cog' onClick={handleConfigClick} />
          <Spacer />
          <Icon icon='trash' onClick={handleDeleteClick} />
        </>
      )}
    </ControlsWrapper>
  )
}

export default styled(PedalControls)``
