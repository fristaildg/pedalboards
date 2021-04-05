import React from 'react'
import { Text, Heading } from '@spark-digital/ignition'
import styled from 'styled-components'
import LoginButton from '../LoginButton'

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  text-align: center;
`

const Logo = styled.img`
  width: 200px;
`

const Welcome = () => {
  return (
    <PageWrapper>
      <Logo src="/logo.svg" alt="Pedalboards"/>
      <Heading>Welcome to Pedalboards</Heading>
      <Text kind="quote">Build your own guitar / bass-guitar pedalboard, <br /> attach sample sounds and share it with the whole world!</Text>
      <LoginButton />
    </PageWrapper>
  )
}

export default Welcome
