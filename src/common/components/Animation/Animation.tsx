import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import styled from 'styled-components'

type AnimationProps = {
  src: string
  autoplay?: boolean
  loop?: boolean
  speed?: number
  width?: number
  height?: number
}

const AnimationComp = ({ src, autoplay, loop, speed, width = 100, height = 100 }: AnimationProps) => {
  return (
    <Player
      src={src}
      autoplay={autoplay}
      loop={loop}
      speed={speed}
      style={{ height, width }}
    />
  )
}

export const Animation = styled(AnimationComp)``
