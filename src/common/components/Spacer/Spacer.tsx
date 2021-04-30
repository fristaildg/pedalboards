import React from 'react'
import styled from 'styled-components'
import { SIZES } from '../../theme/constants'

type SpacerProps = {
  spacingX?: number
  spacingY?: number
  spacing?: number
}

const StyledSpacer = styled.div<SpacerProps>`
  margin: ${({spacing}) => `${spacing}px`};
  margin-right: ${({spacingX}) => `${spacingX}px`};
  margin-bottom: ${({spacingY}) => `${spacingY}px`};
  box-sizing: border-box;
`

const SpacerComp = ({spacing, spacingX, spacingY}: SpacerProps) => {
  return (
    <StyledSpacer
      spacing={spacing || SIZES.SPACING}
      spacingX={spacingX}
      spacingY={spacingY}
    />
  )
}

export const Spacer = styled(SpacerComp)``