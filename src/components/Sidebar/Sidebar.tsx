import React from 'react'
import styled from 'styled-components'
import { IconButton } from '@spark-digital/ignition'
import { useRouter } from 'next/router'
import PedalSelect from '../PedalSelect'
import ZoomControl from '../ZoomControl'

const StyledAside = styled.aside`
  display: flex;
  justify-content: space-around;

  > * {
    width: 50%;
  }
`

const SidebarHeader = styled.header``

const Sidebar = () => {
  const router = useRouter()

  const goToHome = () => {
    router.push('/')
  }

  return (
    <>
      <SidebarHeader>
        <IconButton icon="chevron-left" onClick={goToHome} />
      </SidebarHeader>
      <StyledAside>
        <PedalSelect />
        <ZoomControl />
      </StyledAside>
    </>
  )
}

export default Sidebar
