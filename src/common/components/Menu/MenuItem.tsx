import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../..'

type MenuItemProps = {
  onClick?: () => void
}

const StyledMenuItem = styled.div`
  cursor: pointer;
  padding: 20px;
  width: 100%;
  text-align: center;

  &:hover {
    background-color: ${COLORS.BODY_HOVER};
  }
`

const MenuItemComp: React.FC<MenuItemProps> = ({ children, onClick }) => {
  return (
    <StyledMenuItem onClick={onClick}>{children}</StyledMenuItem>
  )
}

export const MenuItem = styled(MenuItemComp)``
