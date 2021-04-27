import React from 'react'
import styled from 'styled-components'
import RSelect, { Props } from 'react-select'
import { COLORS, SIZES } from '../../theme/constants'
import { Text } from '../Typography/Text'
import { Spacer } from '../Spacer'

type SelectProps = Props

const styles = {
  control: (provided: any) => ({
    ...provided,
    backgroundColor: 'transparent',
    border: `1px solid ${COLORS.GRAY}`,
    borderRadius: 0,
  }),
  singleValue: () => ({
    color: COLORS.WHITE,
  }),
  input: () => ({
    color: COLORS.WHITE,
  }),
  placeholder: () => ({
    color: COLORS.WHITE,
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  menu: () => ({
    border: `1px solid ${COLORS.GRAY}`,
    backgroundColor: COLORS.BODY,
  }),
  option: () => ({
    padding: SIZES.SPACING,
    '&:hover': {
      backgroundColor: COLORS.BODY_HOVER,
    }
  }),
}

const SelectComp = ({ options, label, onChange, isLoading }: SelectProps) => {
  return (
    <>
      <Text>{label}</Text>
      <Spacer spacing={5} />
      <RSelect
        options={options}
        label={label} 
        onChange={onChange}
        isLoading={isLoading}
        styles={styles}
      />
    </>
  )
}

export const Select = styled(SelectComp)``
