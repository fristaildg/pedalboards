import React from 'react'
import styled from 'styled-components'
import { FONTS } from '../../theme/constants'
import { Children } from '../../types'

type TextProps = {
  children?: Children
  tag?: 'p' | 'span'
  fontStyle?: 'serif' | 'sans-serif'
  className?: string;
}

const StyledText = styled.span<TextProps>`
  font-family: ${({fontStyle}) => fontStyle === 'serif' ? FONTS.SERIF_SECONDARY : FONTS.SANS_SERIF};
`

const TextComp = ({ children, tag, fontStyle = 'serif', className }: TextProps) => {
  return (
    <StyledText className={className} as={tag} fontStyle={fontStyle}>{children}</StyledText>
  )
}

export const Text = styled(TextComp)``