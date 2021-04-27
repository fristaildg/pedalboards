import React, { useState } from 'react'
import styled from 'styled-components'
import { Spacer, Text, Slider, SliderValue, SliderProps } from '../../common'

type ZoomSliderProps = SliderProps & {
  onAfterChange: (value: SliderValue) => void
}

const SliderWrapper = styled.div``

const ZoomSlider = ({ onAfterChange, disabled, defaultValue }: ZoomSliderProps) => {
  const [value, setValue] = useState<SliderValue>(defaultValue)

  const handleAfterChange = (sliderValue: SliderValue) => {
    onAfterChange(sliderValue)
    setValue(sliderValue)
  }

  return (
    <SliderWrapper>
      <Text>Set zoom ({value as React.ReactChild}%)</Text>
      <Spacer spacing={20} />
      <Slider
        onAfterChange={handleAfterChange}
        disabled={disabled}
        defaultValue={defaultValue}
      />
    </SliderWrapper>
  )
}

export default ZoomSlider
