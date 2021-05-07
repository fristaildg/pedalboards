import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ReactSortable } from 'react-sortablejs'
import styled, { css } from 'styled-components'
import Pedal from '../Pedal'
import { pedalsSelector, fitScreenSelector, boardNameSelector, boardIdSelector } from '../../redux/selectors'
import { Pedal as PedalType } from '../../common/types'
import { reorderPedals } from '../../redux/board'
import SignalChain from '../SignalChain'
import PedalboardName from '../PedalboardName'
import { useBoard } from '../../swr/useFirebase'
import AudioSamples from '../AudioSamples'
import { COLORS, Spacer, Button, Alert } from '../../common'
import CopyBoardLink from './CopyBoardLink'

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

const BoardFooter = styled.footer`
  display: flex;
  align-items: flex-start;
`

const Board = ({ className }: BoardProps) => {
  const dispatch = useDispatch()
  const pedals = useSelector(pedalsSelector)
  const boardName = useSelector(boardNameSelector)
  const boardId = useSelector(boardIdSelector)
  const fitScreen = useSelector(fitScreenSelector)
  const [reorderedPedals, setReorderedPedals] = useState()
  const [saving, setSaving] = useState(false)
  const { updateBoard, board } = useBoard()
  const [alertVisible, setAlertVisible] = useState(false)  
  
  useEffect(() => {
    if (!!reorderedPedals) {
      dispatch(reorderPedals(reorderedPedals))
    }
  }, [reorderedPedals])
  
  const handleSetList = (list: any) => {
    setReorderedPedals(list)    
  }

  const handleSaveClick = async () => {
    setSaving(true)
    await updateBoard({ name: boardName, pedals })
    setSaving(false)
    setAlertVisible(true)
  }
  
  return (
    <div className={className}>
      <PedalboardName name={boardName} />
      <Spacer />
      {pedals.length > 0 && (
        <>
          <BoardSurface
            fitScreen={fitScreen}
            list={pedals}
            setList={handleSetList}
            pedalsLength={pedals.length}
          >
            {pedals.map((pedal: PedalType) => (
              <Pedal key={pedal.Name} pedal={pedal} />
            ))}
          </BoardSurface>
          <Spacer />
          <SignalChain chain={pedals} />
          <Spacer />
        </>
      )}
      <AudioSamples />
      <Spacer />
      <BoardFooter>
        <Button
          onClick={handleSaveClick}
          isDisabled={saving}
        >
          {saving ? 'Saving' : 'Save Pedalboard'}
        </Button>
        <Spacer />
        <CopyBoardLink boardId={boardId} />
      </BoardFooter>
      <Alert
        isOpen={alertVisible}
        onTimeout={() => setAlertVisible(false)} 
        message="Pedalboard saved!"
      />
    </div>
  )
}

export default Board
