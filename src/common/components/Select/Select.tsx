import React from 'react'
import styled from 'styled-components'
import RSelect, { Props, MenuListComponentProps, createFilter, components } from 'react-select'

type SelectProps = Props

const SelectComp = ({ options, label, onChange, isLoading }: SelectProps) => {
  return (
    <RSelect
      options={options}
      label={label} 
      onChange={onChange}
      isLoading={isLoading}
      filterOption={createFilter({ ignoreAccents: false })}
      // menuIsOpen={true}
    />
  )
}

export const Select = styled(SelectComp)``
