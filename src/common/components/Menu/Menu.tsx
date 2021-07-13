import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../..'
import { Popover, PopoverProps } from '../Popover'

export type MenuProps = PopoverProps

const MenuWrapper = styled(Popover)`
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  padding: 20px;
`

const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${COLORS.WHITE};
`

const MenuComp: React.FC<MenuProps> = ({ trigger, children, visible, onClickOutside }) => {
  return (
    <MenuWrapper visible={visible} trigger={trigger} onClickOutside={onClickOutside}>
      <MenuContent>
        {children}
      </MenuContent>
    </MenuWrapper>
  )
}

export const Menu = styled(MenuComp)``
