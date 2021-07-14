import { useTranslation } from 'next-i18next'
import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { Spacer, Text, Slider, SliderValue, SliderProps } from '../../common'
import { PageContext } from '../../context/pageContext'

export type ZoomSliderProps = SliderProps & {
  onAfterChange: (value: SliderValue) => void
}

const SliderWrapper = styled.div``

const ZoomSlider = ({ onAfterChange, disabled, defaultValue }: ZoomSliderProps) => {
  const [value, setValue] = useState<SliderValue>(defaultValue)
  const { t } = useTranslation('my-board')
  const { isPublic } = useContext(PageContext)

  const handleAfterChange = (sliderValue: SliderValue) => {
    onAfterChange(sliderValue)
    setValue(sliderValue)
  }

  return (
    <SliderWrapper>
      <Text>{!isPublic ? t('sidebar.set_zoom') : 'Set zoom'} ({value as React.ReactChild}%)</Text>
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
