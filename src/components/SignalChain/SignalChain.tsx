import React, { useContext } from 'react'
import { Pedal } from '../../common/types'
import styled from 'styled-components'
import { COLORS, Icon, Spacer, Text } from '../../common'
import { useTranslation } from 'next-i18next'
import { PageContext } from '../../context/pageContext'

type SignalChainProps = {
  chain: Pedal[]
}

const SignalChainWrapper = styled.div`
  padding: 20px;
  border: 1px dashed ${COLORS.GRAY};
`

const PedalsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

const SignalChain = ({ chain }: SignalChainProps) => {
  const { t } = useTranslation('common')
  const { isPublic } = useContext(PageContext)

  return (
    <SignalChainWrapper>
      <Text fontStyle="sans-serif">{!isPublic ? t('signal_chain.heading') : 'Signal Chain'}:</Text>
      <Spacer />
      <PedalsWrapper>
        <Icon icon='music' width={40} color={COLORS.WHITE} />
        <Spacer />
        {chain.map(({ id, Name }) => 
          <React.Fragment key={id}>
            <Icon icon='arrow-right' />
            <Spacer />
            <Text>{Name}</Text>
            <Spacer />
          </React.Fragment>
        )}
        <Icon icon='arrow-right' />
        <Spacer />
        <Icon icon='speaker' width={40} color={COLORS.WHITE} />
      </PedalsWrapper>
    </SignalChainWrapper>
  )
}

export default SignalChain
