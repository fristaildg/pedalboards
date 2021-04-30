import React, { useState } from 'react'
import Knob from 'react-dial-knob'
import styled, { css } from 'styled-components'
import { Icon, Spacer, Text } from '../../common'

type PedalKnobProps = {
  label?: string
  defaultValue?: number
  onRemoveClick?: () => void
  onChange?: (knob: string, event: number) => void
  isDisabled?: boolean
}

const RemoveIcon = styled(Icon)``

const KnobWrapper = styled.div<{disabled?: boolean}>`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  max-width: 100px;
  position: relative;

  ${RemoveIcon} {
    align-self: flex-end;
    opacity: 0;
  }

  &:hover {
    ${RemoveIcon} {
      opacity: 1;
    }
  }

  ${({disabled}) => disabled && css`
    pointer-events: none;
    opacity: 0.5;
  `}
`

const KnobInfo = styled.div``

const KnobImage = styled(Icon)<{ value: number }>`
  pointer-events: none;
  transform: ${({ value }) => `rotate(${value * 33}deg)`};
`

const KnobValue = styled(Text)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const PedalKnob = ({ label = 'unnamed knob', defaultValue, onRemoveClick, onChange, isDisabled }: PedalKnobProps) => {
  const [value, setValue] = useState<number>(defaultValue || 0)
  const handleValueChange = (event: number) => {
    setValue(event)
    onChange && onChange(label, event)
  }

  return (
    <KnobWrapper disabled={isDisabled}>
      <RemoveIcon src='/icons/trash.svg' onClick={onRemoveClick} />
      <Knob
        diameter={100}
        value={value}
        onValueChange={handleValueChange}
        min={0}
        max={10}
        step={1}
        spaceMaxFromZero
      >
        <KnobImage value={value} src="/perilla.svg" width={100} />
        <KnobValue>{value}</KnobValue>
      </Knob>
      <Spacer spacing={5} />
      <KnobInfo>
        {label && (
          <Text tag="span">{label} </Text>
        )}
      </KnobInfo>
    </KnobWrapper>
  )
}

export default styled(PedalKnob)``
