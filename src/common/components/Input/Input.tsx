import React, { forwardRef, useRef } from 'react'
import styled from 'styled-components'
import { Text } from '../Typography'
import { COLORS, FONTS } from '../../theme/constants'

type InputProps = {
  onChange?: (event: unknown) => void
  onFocus?: () => void
  onBlur?: () => void
  defaultValue?: string
  value?: string
  placeholder?: string
  label?: string
  id?: string
  name?: string
  type?: string
  className?: string
}

const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
`

const StyledInput = styled.input`
  background-color: transparent;
  border: 1px solid ${COLORS.GRAY};
  color: ${COLORS.WHITE};
  box-sizing: border-box;
  padding: 5px;
  font-family: ${FONTS.SERIF_SECONDARY};
  outline: none;

  &:focus {
    border-color: ${COLORS.PRIMARY_LIGHT};
  }
`

const InputComp = forwardRef<HTMLInputElement, InputProps>(
  ({ onChange, defaultValue, value, placeholder, label, id = 'input-component', name, onBlur, onFocus, type = 'text', className }: InputProps, ref) => {
    return (
      <InputLabel
        htmlFor={id}
        className={className}
      >
          <Text>{label}</Text>
          <StyledInput
            ref={ref}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            defaultValue={defaultValue}
            value={value}
            placeholder={placeholder}
            name={name}
            id={id}
            type={type}
          />
      </InputLabel>
    )
  }
)

export const Input = styled(InputComp)``
