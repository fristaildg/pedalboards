import React, { useMemo } from 'react'
import { Text, Chip, IconButton } from '@spark-digital/ignition'
import { Pedal } from '../../common/types'
import styled from 'styled-components'

type SignalChainProps = {
  chain: Pedal[]
}

const SignalChainWrapper = styled.div`
  padding: 20px;
`

const PedalsWrapper = styled.div`
  display: flex;
  align-items: center;
`

const StyledChip = styled(Chip)`
  margin: 0 5px;
`

const SignalChain = ({ chain }: SignalChainProps) => {
  const pedalNames = useMemo(() => chain.map(pedal => pedal.Name), [chain])

  return (
    <SignalChainWrapper>
      <Text>Current signal chain:</Text>
      <PedalsWrapper>
        {pedalNames.map(pedal => 
          <React.Fragment key={pedal}>
            <IconButton icon='chevron-right' onClick={() => {}} />
            <StyledChip variant="secondary">{pedal}</StyledChip>
          </React.Fragment>
        )}
      </PedalsWrapper>
    </SignalChainWrapper>
  )
}

export default SignalChain
