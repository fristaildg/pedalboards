import React from 'react'
import styled from 'styled-components'
import { COLORS, Spacer, SubHeading, Text } from '../../common'
import SVG from 'react-inlinesvg'

const StyledContainer = styled.div`
  border: 1px dashed ${COLORS.GRAY};
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`

const ArrowImg = styled(SVG)`
  position: absolute;
  width: 100px;
  right: 100px;
  transform: rotateY(180deg);
  fill: ${COLORS.WHITE};
`

const BoardListEmpty = () => {
  return (
    <StyledContainer>
      <SubHeading>Time to create your first Board!</SubHeading>
      <Spacer spacing={5} />
      <Text>Click on the "Create pedalboard" button to begin</Text>
      <ArrowImg src="/arrow.svg" />
    </StyledContainer>
  )
}

export default BoardListEmpty
