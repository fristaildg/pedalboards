import React, { useMemo } from 'react'
import { Pedal } from '../../common/types'
import styled from 'styled-components'
import { COLORS, Icon, Spacer, Text } from '../../common'

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
  const pedalNames = useMemo(() => chain.map(pedal => pedal.Name), [chain])

  return (
    <SignalChainWrapper>
      <Text fontStyle="sans-serif">Current signal chain:</Text>
      <Spacer />
      <PedalsWrapper>
        <Icon src='/icons/music.svg' width={40} color={COLORS.WHITE} />
        <Spacer />
        {pedalNames.map(pedal => 
          <React.Fragment key={pedal}>
            <Icon src='/icons/arrow-right.svg' />
            <Spacer />
            <Text>{pedal}</Text>
            <Spacer />
          </React.Fragment>
        )}
        <Icon src='/icons/arrow-right.svg' />
        <Spacer />
        <Icon src='/icons/speaker.svg' width={40} color={COLORS.WHITE} />
      </PedalsWrapper>
    </SignalChainWrapper>
  )
}

export default SignalChain
