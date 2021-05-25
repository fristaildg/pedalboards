import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Pedal as PedalType } from '../../common/types'
import { zoomSelector } from '../../redux/selectors'
import { togglePedalModal } from '../../redux/pedal'
import PedalControls from './PedalControls'
import PedalModal from './PedalModal'

const imagesLocation = 'https://www.pedalplayground.com/public/images/pedals'

type PedalProps = {
  pedal: PedalType
  controls?: boolean
}

type ImageProps = {
  zoom: number
  pedalWidth: PedalType['Width']
  pedalHeight: PedalType['Height']
}

const ImageWrapper = styled.div<ImageProps>`
  cursor: pointer;
  ${({ pedalWidth, zoom}) => `
    width: ${pedalWidth * zoom}px;
  `}
  padding: 10px;

  ${PedalControls} { 
    opacity: 0;
  }
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);

    ${PedalControls} {
      opacity: 1;
    }
  }
`

const PedalImage = styled.img`
  width: 100%;
  height: auto;
`

const Pedal = ({ pedal, controls = true }: PedalProps) => {
  const zoom = useSelector(zoomSelector)
  const dispatch = useDispatch()

  if (!pedal) return null

  const { Image, Width, Height, Name, id } = pedal

  const handlePedalClick = () => {
    dispatch(togglePedalModal(Name))
  }

  return (
    <>
      <ImageWrapper
        pedalWidth={Width}
        pedalHeight={Height}
        zoom={zoom}
        onClick={handlePedalClick}
      >
        <PedalControls pedalId={id} disabled={!controls} />
        <PedalImage
          src={`${imagesLocation}/${Image}`}
          alt={Name}
        />
      </ImageWrapper>
      <PedalModal pedal={pedal} />
    </>
  )
}

export default Pedal
