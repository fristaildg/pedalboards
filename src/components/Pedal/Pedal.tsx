import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Modal, useModal, Heading, Text } from '@spark-digital/ignition'
import { Pedal as PedalType } from '../../commonTypes'
import { zoomSelector } from '../../redux/selectors'
import PedalControls from './PedalControls'

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

const ImagelWrapper = styled.div<ImageProps>`
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
  const { showModal, ...modalProps } = useModal()

  if (!pedal) return null

  const { Image, Width, Height, Name, Brand } = pedal

  return (
    <>
      <ImagelWrapper
        pedalWidth={Width}
        pedalHeight={Height}
        zoom={zoom}
        onClick={showModal}
      >
        {controls && <PedalControls name={Name} />}
        <PedalImage
          src={`${imagesLocation}/${Image}`}
          alt={Name}
        />
      </ImagelWrapper>
      <Modal {...modalProps}>
        <Heading level={2}>{Name}</Heading>
        <Text kind="quote">{Brand}</Text>
      </Modal>
    </>
  )
}

export default Pedal
