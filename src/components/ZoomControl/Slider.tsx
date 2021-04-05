import React, { useRef } from 'react'
import ReactSlider from 'react-slider'
import styled from 'styled-components'
import { Text } from '@spark-digital/ignition'

export type SliderProps = {
  onAfterChange: (value: number | number[] | null | undefined) => void
  disabled?: boolean
  defaultValue?: number | undefined 
}

const SliderWrapper = styled.div``

const Thumb = styled.div<HTMLDivElement>`
  background-color: #0767E2;
  color: white;
  padding: 5px;
`

const Track = styled.div<HTMLDivElement>`
  height: 5px;
  background-color: lightgray;
`

const Slider = ({ onAfterChange, disabled, defaultValue }: SliderProps) => {
  const sliderRef = useRef<any>(null)

  return (
    <SliderWrapper>
      <Text kind="input">Set zoom</Text>
      <ReactSlider
        ref={sliderRef}
        // @ts-ignore
        renderThumb={(props, state) => <Thumb {...props}>{state.valueNow}</Thumb>}
        // @ts-ignore
        renderTrack={(props, state) => <Track {...props} index={state.index} />}
        onAfterChange={onAfterChange}
        disabled={disabled}
        defaultValue={defaultValue}
      />
    </SliderWrapper>
  )
}

export default Slider
