import React from 'react'
import styled from 'styled-components'
import { Children, OnClick } from '../../types'
import { COLORS, FONTS } from '../../theme/constants'
import { Text } from '../Typography' 

type ButtonProps = {
  children: Children
  onClick?: OnClick
  isDisabled?: boolean
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
  letter-spacing: 2px;

  &:hover {
    background-color: ${COLORS.ACCENT_LIGHT};
  }

  &:disabled {
    background-color: ${COLORS.GRAY};
    pointer-events: none;
  }
`

const ButtonComp = ({ children, onClick, isDisabled }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} disabled={isDisabled}>
      <Text fontStyle="sans-serif" fontSize={14}>{children}</Text>
    </StyledButton>
  )
}

export const Button = styled(ButtonComp)``
