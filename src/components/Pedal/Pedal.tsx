import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Pedal as PedalType } from '../../common/types'
import { zoomSelector } from '../../redux/selectors'
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

const Pedal = ({ pedal }: PedalProps) => {
  const zoom = useSelector(zoomSelector)

  if (!pedal) return null

  const { Image, Width, Height, Name, id } = pedal

  return (
    <>
      <ImageWrapper
        pedalWidth={Width}
        pedalHeight={Height}
        zoom={zoom}
      >
        <PedalControls pedalName={Name} pedalId={id} />
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
