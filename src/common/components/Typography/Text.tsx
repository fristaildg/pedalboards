import React from 'react'
import styled, { css } from 'styled-components'
import { FONTS } from '../../theme/constants'
import { Children } from '../../types'

type TextProps = {
  children?: Children
  tag?: 'p' | 'span'
  fontStyle?: 'serif' | 'sans-serif'
  className?: string
  fontSize?: number
  color?: string
}

const StyledText = styled.span<TextProps>`
  font-family: ${({fontStyle}) => fontStyle === 'serif' ? FONTS.SERIF_SECONDARY : FONTS.SANS_SERIF};
  font-size: ${({fontSize}) => `${fontSize}px`};
  ${({color}) => color && css`
    color: ${color};
  `}
`

const TextComp = ({ children, tag, fontStyle = 'serif', className, fontSize = 16, color }: TextProps) => {
  return (
    <StyledText
      className={className}
      as={tag}
      fontStyle={fontStyle}
      fontSize={fontSize}
      color={color}
    >
      {children}
    </StyledText>
  )
}

export const Text = styled(TextComp)``