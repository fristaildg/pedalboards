import React from 'react'
import { IconButton } from '@spark-digital/ignition'
import { useDispatch } from 'react-redux'
import { removePedal } from '../../redux/board'
import styled from 'styled-components'

export type PedalControlsProps = {
  name: string
  className?: string
}

const PedalControls = ({ name, className }: PedalControlsProps) => {
  const dispatch = useDispatch()

  const handleIconButtonClick = () => {
    dispatch(removePedal(name))
  }

  return (
    <div className={className}>
      <IconButton icon="times" onClick={handleIconButtonClick} />
    </div>
  )
}

export default styled(PedalControls)``
