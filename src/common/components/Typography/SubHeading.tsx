import React from 'react'
import styled from 'styled-components'
import { Children } from '../../types'
import { FONTS } from '../../theme/constants'

type SubHeadingProps = {
  children: Children
  tag?: 'h3' | 'h4' | 'h5' | 'h6'
}

const StyledSubHeading = styled.h3`
  font-family: ${FONTS.SERIF_PRIMARY};
  margin: 0;
  font-size: 1.5em;
`

const SubHeadingComp = ({ children, tag }: SubHeadingProps) => {
  return (
    <StyledSubHeading as={tag}>{children}</StyledSubHeading>
  )
}

export const SubHeading = styled(SubHeadingComp)``