import React from 'react'
import styled from 'styled-components'
import RSelect, { Props } from 'react-select'
import { COLORS, SIZES } from '../../theme/constants'
import { Text } from '../Typography/Text'
import { Spacer } from '../Spacer'
import { FixedSizeList as List } from 'react-window'

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

const MenuList = ({options, children, maxHeight, getValue}: any) => {
  const height = 40
  const [value] = getValue()
  const initialOffset = options.indexOf(value) * height

  return (
    <List
      height={maxHeight}
      itemCount={children.length}
      itemSize={height}
      initialScrollOffset={initialOffset}
      width="100%"
    >
      {({ index, style }) => <div style={style}>{children[index]}</div>}
    </List>
  )
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
        components={{ MenuList }}
      />
    </>
  )
}

export const Select = styled(SelectComp)``
