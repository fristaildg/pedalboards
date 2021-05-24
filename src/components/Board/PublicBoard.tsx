import React from 'react'
import styled from 'styled-components'
import { Heading, Icon, Spacer } from '../../common'
import { BoardSurface } from './Board'
import Pedal from '../Pedal'
import AudioSamples from '../AudioSamples'
import { AudioFileObject, Pedal as PedalType } from '../../common/types'
import { usePublicBoard } from '../../swr/useFirebase'
import SignalChain from '../SignalChain'
import { fitScreenSelector } from '../../redux/selectors'
import { useSelector } from 'react-redux'

type PublicBoardProps = {
  boardId: string
}

const BoardWrapper = styled.div`
  /* padding: 20px; */
`

const PublicBoard = ({ boardId }: PublicBoardProps) => {
  const { board, loading } = usePublicBoard(boardId)
  const fitScreen = useSelector(fitScreenSelector)

  if (!board && loading) return <p>Loading board</p>

  const { name, pedals } = board

  return (
    <BoardWrapper>
      <Heading>{name}</Heading>
      {pedals && pedals.length > 0 && (
        <>
          <BoardSurface as={'ul'} fitScreen={fitScreen}>
            {pedals.map((pedal: PedalType) => (
              <Pedal key={pedal.Name} pedal={pedal} controls={false} />
            ))}
          </BoardSurface>
          <SignalChain chain={pedals} />
        </>
      )}
      <Spacer spacing={20} />
      {/* <AudioSamples samples={audioSamples} /> */}
    </BoardWrapper>
  )
}

export default PublicBoard
