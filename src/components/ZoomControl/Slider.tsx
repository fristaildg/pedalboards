import { useTranslation } from 'next-i18next'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Spacer, Text, Slider, SliderValue, SliderProps } from '../../common'

export type ZoomSliderProps = SliderProps & {
  onAfterChange: (value: SliderValue) => void
}

const SliderWrapper = styled.div``

const ZoomSlider = ({ onAfterChange, disabled, defaultValue }: ZoomSliderProps) => {
  const [value, setValue] = useState<SliderValue>(defaultValue)
  const { t } = useTranslation('my-board')

  const handleAfterChange = (sliderValue: SliderValue) => {
    onAfterChange(sliderValue)
    setValue(sliderValue)
  }

  return (
    <SliderWrapper>
      <Text>{t('sidebar.set_zoom')} ({value as React.ReactChild}%)</Text>
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
