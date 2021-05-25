import React from 'react'
import styled from 'styled-components'
import { Animation } from '../Animation'

const SpinnerComp = () => {
  return (
    <Animation
      src="https://assets6.lottiefiles.com/temp/lf20_y9pvg7.json"
      speed={0.5}
      autoplay
      loop
    />
  )
}

export const Spinner = styled(SpinnerComp)``
