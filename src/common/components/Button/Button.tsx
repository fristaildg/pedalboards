import React from 'react'
import styled, { css } from 'styled-components'
import { Children, OnClick } from '../../types'
import { COLORS, FONTS } from '../../theme/constants'
import { Text } from '../Typography' 

type ButtonProps = {
  children: Children
  onClick?: OnClick
  isDisabled?: boolean
  className?: string
  intent?: 'neutral' | 'danger'
  variant?: 'dense' | 'text'
}

const denseVariant = (intent: string) => css`
  ${() => intent === 'danger' ? css`
    background-color: ${COLORS.ERROR};
    color: ${COLORS.WHITE};
  ` : css`
    background-color: ${COLORS.ACCENT};
  `}

  &:hover {
    background-color: ${() => intent === 'danger' ? COLORS.ERROR_HOVER : COLORS.ACCENT_LIGHT};
  }

  &:disabled {
    background-color: ${COLORS.GRAY};
    pointer-events: none;
  }
`

const textVariant = () => css`
  background-color: transparent;
  color: ${COLORS.WHITE};

  &:hover {
    background-color: ${COLORS.BODY_HOVER};
  }
`

const StyledButton = styled.button<Pick<ButtonProps, 'intent' | 'variant'>>`
  border: none;
  appearance: none;
  width: fit-content;
  min-width: 100px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  letter-spacing: 2px;
  // variants
  ${({ variant, intent }) => {
    switch(variant) {
      case 'dense':
        return denseVariant(intent!)
      case 'text':
        return textVariant()
    }
  }}
`

const ButtonComp = ({ children, onClick, isDisabled, className, intent = 'neutral', variant = 'dense' }: ButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={isDisabled}
      className={className}
      intent={intent}
      variant={variant}
    >
      <Text fontStyle="sans-serif" fontSize={14}>{children}</Text>
    </StyledButton>
  )
}

export const Button = styled(ButtonComp)``
