import React from 'react'
import styled from 'styled-components'
import RSwitch from 'rc-switch'
import { Text } from '../Typography/'
import { COLORS } from '../../theme/constants'

type SwitchProps = {
  label: string
  isChecked: boolean
  onChange: any
  isDisabled: boolean
}

const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const StyledSwitch = styled(RSwitch)`
  outline: none;
  border-radius: 20px;
  width: 40px;
  position: relative;
  height: 24px;
  padding: 0;
  margin: 0;
  border: none;
  background-color: ${COLORS.GRAY};
  cursor: pointer;

  .rc-switch-inner {
    width: 15px;
    height: 15px;
    display: block;
    background-color: ${COLORS.PRIMARY_LIGHT};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 5px;
    box-sizing: border-box;
    transform: translateY(-50%);
    will-change: left;
    transition: left 0.2s ease-in-out, background-color 0.2s ease-in-out;
  }

  &.rc-switch-checked {
    .rc-switch-inner {
      left: calc(100% - 20px);
      background-color: ${COLORS.ACCENT}
    }
  }
`

const Switchcomp = ({ label, isChecked, onChange, isDisabled }: SwitchProps) => {
  return (
    <SwitchWrapper>
      <Text>{label}</Text>
      <StyledSwitch
        checked={isChecked}
        onChange={onChange}
        disabled={isDisabled}
      />
    </SwitchWrapper>
  )
}

export const Switch = styled(Switchcomp)``
