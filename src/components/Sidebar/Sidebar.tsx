import React from 'react'
import styled, { css } from 'styled-components'
import { useRouter } from 'next/router'
import PedalSelect from '../PedalSelect'
import ZoomControl from '../ZoomControl'
import { COLORS, Icon, Spacer, Text } from '../../common'

type SidebarProps = {
  className?: string
}

type AsideListItemProps = {
  horizontal?: boolean
  onClick?: () => void
}

const StyledAside = styled.aside`
  height: 100%;
`

const AsideList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const AsideListItem = styled.li<AsideListItemProps>`
  border-bottom: 1px solid ${COLORS.GRAY};
  padding: 20px;
  display: flex;
  ${({ onClick }) => typeof onClick === 'function' && css`cursor: pointer;`}
  ${({ horizontal }) => horizontal ? 
    css`flex-direction: row; align-items: center;` : 
    css`flex-direction: column; justify-content: center; align-items: stretch;`}

  &:hover {
    background-color: ${COLORS.BODY_HOVER};
  }
`

const Sidebar = ({ className }: SidebarProps) => {
  const router = useRouter()

  const goToHome = () => {
    router.push('/')
  }

  return (
    <StyledAside className={className}>
      <AsideList>
        <AsideListItem horizontal onClick={goToHome}>
          <Icon src='/icons/arrow-left.svg' />
          <Spacer />
          <Text>Go to dashboard</Text>
        </AsideListItem>
        <AsideListItem>
          <ZoomControl />
        </AsideListItem>
        <AsideListItem>
          <PedalSelect />
        </AsideListItem>
      </AsideList>
    </StyledAside>
  )
}

export default Sidebar
