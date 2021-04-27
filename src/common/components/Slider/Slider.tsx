import React from 'react'
import ReactSlider from 'react-slider'
import styled from 'styled-components'
import { COLORS, SIZES } from '../../theme/constants'

export type SliderValue = number | number[] | null | undefined

export type SliderProps = {
  onAfterChange?: (value: SliderValue) => void
  disabled?: boolean
  value?: number | undefined
  defaultValue?: number | undefined
}

const StyledSlider = styled(ReactSlider)`
  width: 100%;
`

const Thumb = styled.div<HTMLDivElement>`
  background-color: ${COLORS.ACCENT};
  width: ${SIZES.KNOBS}px;
  height: ${SIZES.KNOBS}px;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-40%);
  outline: none;

  .disabled & {
    background-color: ${COLORS.PRIMARY};
  }
`

const Track = styled.div<HTMLDivElement>`
  height: 4px;
  background-color: ${COLORS.GRAY};
`

const SliderComp = ({ onAfterChange, disabled, defaultValue, value }: SliderProps) => {
  return (
    <StyledSlider
      onAfterChange={onAfterChange}
      disabled={disabled}
      value={value}
      defaultValue={defaultValue}
      // @ts-ignore
      renderThumb={(props) => <Thumb {...props} />}
      // @ts-ignore
      renderTrack={(props, state) => <Track {...props} index={state.index} />}
    />
  )
}

export const Slider = styled(SliderComp)``
