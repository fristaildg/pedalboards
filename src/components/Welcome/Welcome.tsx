import React from 'react'
import { Heading, Text, SIZES, Spacer } from '../../common'
import styled from 'styled-components'
import LoginButton from '../LoginButton'
import { useTranslation } from 'next-i18next'

const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 50px;
  text-align: center;
  height: ${`calc(100vh - ${SIZES.HEADER_HEIGHT}px)`};
  box-sizing: border-box;
  overflow-x: hidden;
`

const LeftCol = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const RightCol = styled.div`
  width: 50%;
  height: 100%;
  transform: translateX(150px);
`

const HeroImage = styled.div<{bgImage: string}>`
  width: 200%;
  height: 100%;
  background: url(${({bgImage}) => bgImage});
  background-size: contain;
  background-repeat: no-repeat;
`

const Welcome = () => {
  const { t, ready } = useTranslation('home')

  console.log(ready)

  return (
    <PageWrapper>
      <LeftCol>
        <Heading>{t('heading')}</Heading>
        <Spacer />
        <Text>Build your own guitar / bass-guitar pedalboard, <br /> attach sample sounds and share it with the whole world!</Text>
        <Spacer />
        <LoginButton />
      </LeftCol>
      <RightCol>
        <HeroImage bgImage='/hero-image.jpg' />
      </RightCol>
    </PageWrapper>
  )
}

export default Welcome
