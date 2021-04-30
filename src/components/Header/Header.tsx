import React from 'react'
import styled from 'styled-components'
import LoginButton from '../LoginButton'
import { COLORS, SIZES, Text } from '../../common'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  height: ${SIZES.HEADER_HEIGHT}px;
  background-color: ${COLORS.BODY};
  box-sizing: border-box;
  border-bottom: 1px solid ${COLORS.GRAY};
  position: fixed;
  top: 0;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  color: ${COLORS.WHITE};
`

const TypoLogo = styled(Text)`
  font-size: 1.5em;
`

const Header = () => {
  return (
    <StyledHeader>
      <LogoContainer>
        <TypoLogo>Pedalboards</TypoLogo>
      </LogoContainer>
      <LoginButton />
    </StyledHeader>
  )
}

export default Header
