import React from 'react'
import { Spacer, Switch } from '../../common'
import { useDispatch, useSelector } from 'react-redux'
import { setZoom, toggleFitScreen } from '../../redux/ui'
import { fitScreenSelector, zoomSelector } from '../../redux/selectors'
import Slider, { SliderProps } from './Slider'
import styled from 'styled-components'

const ZoomControlWrapper = styled.div`
  /* display: flex; */
`

const ZoomControl = () => {
  const dispatch = useDispatch()
  const fitScreen = useSelector(fitScreenSelector)
  const zoom = useSelector(zoomSelector)

  const handleZoomChange: SliderProps['onAfterChange'] = (value) => {
    dispatch(setZoom(value))
  }

  const handleFitScreenChange = (checked: boolean) => {
    dispatch(toggleFitScreen(checked))
  }

  return (
    <ZoomControlWrapper>
      <Slider
        onAfterChange={handleZoomChange}
        disabled={fitScreen}
        defaultValue={zoom}
      />
      <Spacer spacing={80} />
      <Switch
        label="Fit screen"
        isChecked={fitScreen}
        onChange={handleFitScreenChange}
        isDisabled={false}
      />
    </ZoomControlWrapper>
  )
}

export default ZoomControl
