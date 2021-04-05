import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ReactSortable } from 'react-sortablejs'
import styled, { css } from 'styled-components'
import Pedal from '../Pedal'
import { pedalsSelector, fitScreenSelector, boardNameSelector } from '../../redux/selectors'
import { Pedal as PedalType } from '../../commonTypes'
import { reorderPedals } from '../../redux/board'
import SignalChain from '../SignalChain'
import PedalboardName from '../PedalboardName'
import { useBoard } from '../../swr/useFirebase'
import { Button, useAlert, Alert } from '@spark-digital/ignition'
import AudioSamples from '../AudioSamples'

type BoardSurfaceProps = {
  pedalsLength?: number
  fitScreen?: boolean
}

export const BoardSurface = styled(ReactSortable)<BoardSurfaceProps>`
  background-color: lightgray;
  display: flex;
  align-items: center;
  overflow: auto;
  flex-wrap: nowrap;
  padding: 20px;

  > * {
    ${({ fitScreen }) => !fitScreen && css`flex-shrink: 0;`}
  }
`

const BoardFooter = styled.footer`
  padding: 20px;
  display: flex;
  justify-content: flex-end;
`

const Board = () => {
  const dispatch = useDispatch()
  const pedals = useSelector(pedalsSelector)
  const boardName = useSelector(boardNameSelector)
  const fitScreen = useSelector(fitScreenSelector)
  const [reorderedPedals, setReorderedPedals] = useState()
  const [saving, setSaving] = useState(false)
  const { updateBoard } = useBoard()
  const { showAlert, ...alertProps } = useAlert()  
  
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
    showAlert()
  }
  
  return (
    <div>
      <PedalboardName name={boardName} />
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
          <SignalChain chain={pedals} />
        </>
      )}
      <AudioSamples />
      <BoardFooter>
        <Button label="Save" onClick={handleSaveClick} isDisabled={saving} />
      </BoardFooter>
      <Alert {...alertProps} message="Pedalboard saved!" intent="success" placement="bottom" />
    </div>
  )
}

export default Board
