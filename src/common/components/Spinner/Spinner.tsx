import React from 'react'
import styled from 'styled-components'
import { Animation } from '../Animation'

const StyledAnimation = styled(Animation)`
  display: inline-block;
`

const SpinnerComp = () => {
  return (
    <StyledAnimation
      src="https://assets6.lottiefiles.com/temp/lf20_y9pvg7.json"
      speed={0.5}
      autoplay
      loop
    />
  )
}

export const Spinner = styled(SpinnerComp)``
