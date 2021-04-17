import React, { FC } from 'react'
import styled from 'styled-components'
import { SIZES } from '../../theme/constants'
// import { Children } from '../../types'

// type GridProps = {
//   children?: Children
// }

const StyledGrid = styled.div`
  margin: 0 auto;
  max-width: ${SIZES.GRID_DESKTOP}px;
`

const GridComp: FC = ({ children }) => {
  return (
    <StyledGrid>{children}</StyledGrid>
  )
}

export const Grid = styled(GridComp)``
