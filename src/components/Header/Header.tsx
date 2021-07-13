import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { COLORS, SIZES, Text } from '../../common'
import UserWidget from '../UserWidget'
import LangWidget from '../LangWidget'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 0 20px;
  width: 100%;
  height: ${SIZES.HEADER_HEIGHT}px;
  background-color: ${COLORS.BODY};
  box-sizing: border-box;
  border-bottom: 1px solid ${COLORS.GRAY};
  position: fixed;
  top: 0;
  z-index: 2;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  color: ${COLORS.WHITE};
  cursor: pointer;
`

const UserContainer = styled.div`
  display: inline-flex;
  align-items: center;
  height: 100%;
`

const TypoLogo = styled(Text)`
  font-size: 1.5em;
`

const Header = () => {
  const { push } = useRouter()

  const goToHome = () => push('/')

  return (
    <StyledHeader>
      <LogoContainer onClick={goToHome}>
        <TypoLogo>Pedalboards</TypoLogo>
      </LogoContainer>
      <UserContainer>
        <LangWidget />
        <UserWidget />
      </UserContainer>
    </StyledHeader>
  )
}

export default Header
