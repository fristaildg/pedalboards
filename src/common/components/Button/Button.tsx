import React from 'react'
import styled from 'styled-components'
import { Children, OnClick } from '../../types'
import { COLORS } from '../../theme/constants'
import { Text } from '../Typography' 

type ButtonProps = {
  children: Children
  onClick?: OnClick
}

const StyledButton = styled.button`
  border: none;
  appearance: none;
  background-color: ${COLORS.ACCENT};
  width: fit-content;
  min-width: 100px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  font-family: 'Fira Sans Condensed', sans-serif;
  letter-spacing: 2px;

  &:hover {
    background-color: ${COLORS.ACCENT_LIGHT};
  }
`

const ButtonComp = ({ children, onClick }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick}>
      <Text fontStyle="sans-serif">{children}</Text>
    </StyledButton>
  )
}

export const Button = styled(ButtonComp)``
