import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ReactSortable } from 'react-sortablejs'
import styled, { css } from 'styled-components'
import Pedal from '../Pedal'
import { pedalsSelector, fitScreenSelector, boardNameSelector } from '../../redux/selectors'
import { Pedal as PedalType } from '../../common/types'
import { reorderPedals } from '../../redux/board'
import SignalChain from '../SignalChain'
import PedalboardName from '../PedalboardName'
import AudioSamples from '../AudioSamples'
import { COLORS, Spacer, SubHeading, Text, SIZES } from '../../common'
import BoardFooter from './BoardFooter'

type BoardSurfaceProps = {
  pedalsLength?: number
  fitScreen?: boolean
}

type BoardProps = {
  className?: string
}

export const BoardSurface = styled(ReactSortable)<BoardSurfaceProps>`
  border: 1px dashed ${COLORS.GRAY};
  display: flex;
  align-items: center;
  overflow: auto;
  padding: 20px;
  width: 100%;
  overflow-y: auto;

  > * {
    ${({ fitScreen }) => !fitScreen && css`flex-shrink: 0;`}
  }
`

const EmptyBoardSurface = styled(BoardSurface)`
  flex-direction: column;
  padding: ${SIZES.HEADER_HEIGHT}px;
`

const Board = ({ className }: BoardProps) => {
  const dispatch = useDispatch()
  const pedals = useSelector(pedalsSelector)
  const boardName = useSelector(boardNameSelector)
  const fitScreen = useSelector(fitScreenSelector)
  const [reorderedPedals, setReorderedPedals] = useState()
  
  useEffect(() => {
    if (!!reorderedPedals) {
      dispatch(reorderPedals(reorderedPedals))
    }
  }, [reorderedPedals])
  
  const handleSetList = (list: any) => {
    setReorderedPedals(list)    
  }
  
  return (
    <div className={className}>
      <PedalboardName name={boardName} />
      <Spacer />
      {pedals.length > 0 ? (
        <>
          <BoardSurface
            fitScreen={fitScreen}
            list={pedals}
            setList={handleSetList}
            pedalsLength={pedals.length}
          >
            {pedals.map((pedal: PedalType) => (
              <Pedal key={pedal.id} pedal={pedal} />
            ))}
          </BoardSurface>
          <Spacer />
          <SignalChain chain={pedals} />
          <Spacer />
        </>
      ) : (
        <>
          <EmptyBoardSurface as='div'>
            <SubHeading>Let's Add some pedals!</SubHeading>
            <Text>Select pedals from the list, sort them according to you signal chain and even add some knobs to each of them</Text>
          </EmptyBoardSurface>
          <Spacer />
        </>
      )}
      <AudioSamples />
      <Spacer />
      <BoardFooter />
    </div>
  )
}

export default Board
