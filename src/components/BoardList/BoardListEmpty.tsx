import React from 'react'
import styled from 'styled-components'
import { COLORS, Spacer, SubHeading, Text, Container } from '../../common'
import SVG from 'react-inlinesvg'

const ArrowImg = styled(SVG)`
  position: absolute;
  width: 100px;
  right: 100px;
  transform: rotateY(180deg);
  fill: ${COLORS.WHITE};
`

const BoardListEmpty = () => {
  return (
    <Container>
      <SubHeading>Time to create your first Board!</SubHeading>
      <Spacer spacing={5} />
      <Text>Click on the "Create pedalboard" button to begin</Text>
      <ArrowImg src="/arrow.svg" />
    </Container>
  )
}

export default BoardListEmpty
