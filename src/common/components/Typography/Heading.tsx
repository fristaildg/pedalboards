import React from 'react'
import styled from 'styled-components'
import { Children } from '../../types'

type HeadingProps = {
  children: Children
  tag?: 'h1' | 'h2'
}

const StyledHeading = styled.h1`
  font-family: 'Fira Sans Condensed', sans-serif;
  margin: 0;
`

const HeadingComp = ({ children, tag }: HeadingProps) => {
  return (
    <StyledHeading as={tag}>{children}</StyledHeading>
  )
}

export const Heading = styled(HeadingComp)``
