import React from 'react'
import styled from 'styled-components'
import { Heading, Icon, Spacer } from '../../common'
import { BoardSurface } from './Board'
import Pedal from '../Pedal'
import AudioSamples from '../AudioSamples'
import { Pedal as PedalType } from '../../common/types'
import { useBoard } from '../../swr/useFirebase'
import SignalChain from '../SignalChain'

type PublicBoardProps = {
  boardId: string
}

const BoardWrapper = styled.div`
  padding: 20px;
`

const PublicBoard = ({ boardId }: PublicBoardProps) => {
  const { board, loading } = useBoard(boardId)

  if (!board && loading) return <p>Loading board</p>

  const { name, pedals } = board

  return (
    <BoardWrapper>
      <Heading>{name}</Heading>
      <Icon src="./icons/trash.svg" />
      {pedals && pedals.length > 0 && (
        <>
          <BoardSurface as={'ul'} fitScreen>
            {pedals.map((pedal: PedalType) => (
              <Pedal key={pedal.Name} pedal={pedal} controls={false} />
            ))}
          </BoardSurface>
          <SignalChain chain={pedals} />
        </>
      )}
      <Spacer spacing={20} />
      <AudioSamples uploader={false} boardId={boardId} />
    </BoardWrapper>
  )
}

export default PublicBoard
