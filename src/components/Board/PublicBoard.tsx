import React from 'react'
import { Heading } from '@spark-digital/ignition'
import { BoardSurface } from './Board'
import Pedal from '../Pedal'
import AudioSamples from '../AudioSamples'
import { Pedal as PedalType } from '../../commonTypes'
import { useBoard } from '../../swr/useFirebase'
import SignalChain from '../SignalChain'

const PublicBoard = ({ boardId }) => {
  const { board, loading } = useBoard(boardId)

  if (!board && loading) return <p>Loading board</p>

  const { name, pedals } = board

  return (
    <>
      <Heading level={2}>{name}</Heading>
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
      <AudioSamples uploader={false} boardId={boardId} />
    </>
  )
}

export default PublicBoard
