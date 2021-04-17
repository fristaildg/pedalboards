import React from 'react'
import styled from 'styled-components'
import { IconButton } from '@spark-digital/ignition'
import { useRouter } from 'next/router'
import PedalSelect from '../PedalSelect'
import ZoomControl from '../ZoomControl'
import { COLORS } from '../../common'

type SidebarProps = {
  className?: string
}

const StyledAside = styled.aside`
  border-right: 1px solid ${COLORS.GRAY};
  padding: 20px;
`

const SidebarHeader = styled.header``

const Sidebar = ({ className }: SidebarProps) => {
  const router = useRouter()

  const goToHome = () => {
    router.push('/')
  }

  return (
    <StyledAside className={className}>
      <SidebarHeader>
        <IconButton icon="chevron-left" onClick={goToHome} />
      </SidebarHeader>
      <PedalSelect />
      <ZoomControl />
    </StyledAside>
  )
}

export default Sidebar
