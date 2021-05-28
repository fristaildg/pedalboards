import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../..'
import { Children } from '../../types'

type ContainerProps = {
  children: Children
}

const StyledContainer = styled.div`
  border: 1px dashed ${COLORS.GRAY};
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`

const ContainerComp = ({ children }: ContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>
}

export const Container = styled(ContainerComp)``
