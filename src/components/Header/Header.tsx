import React from 'react'
import { Text } from '@spark-digital/ignition'
import styled from 'styled-components'
import LoginButton from '../LoginButton'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  height: 80px;
  background-color: #212121;
  box-sizing: border-box;

  * {
    color: white;
  }
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`

const Logo = styled.img`
  height: 100%;
`

const Header = () => {
  return (
    <StyledHeader>
      <LogoContainer>
        <Logo src="/logo.svg" alt="Pedalboards" />
        <Text kind="button">Pedalboards</Text>
      </LogoContainer>
      <LoginButton />
    </StyledHeader>
  )
}

export default Header
