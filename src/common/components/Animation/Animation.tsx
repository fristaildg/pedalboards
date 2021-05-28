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
  className?: string
}

const AnimationComp = ({ src, autoplay, loop, speed, width = 100, height = 100, className }: AnimationProps) => {
  return (
    <Player
      src={src}
      autoplay={autoplay}
      loop={loop}
      speed={speed}
      style={{ height, width }}
      className={className}
    />
  )
}

export const Animation = styled(AnimationComp)``
