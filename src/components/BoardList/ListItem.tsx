import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { toggleDeleteBoardModal } from '../../redux/board'
import { COLORS, Icon, Text } from '../../common'
import { BoardDocument } from '../../common/types'
import { useGoToBoard } from '../Board'

type ListItemProps = {
  board: BoardDocument
}

const StyledListItem = styled.li`
  padding: 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: ${COLORS.BODY_HOVER};
  }
`

const ListItem = ({ board }: ListItemProps) => {
  const dispatch = useDispatch()
  const goToBoard = useGoToBoard()

  const handleItemClick = () => {
    goToBoard(board)
  }

  const handleDeleteIconClick = (event: any) => {
    event.stopPropagation()
    dispatch(toggleDeleteBoardModal(board.NO_ID_FIELD))
  }

  return (
    <>
      <StyledListItem onClick={handleItemClick}>
        <Text>{board.name}</Text>
        <div>
          <Icon icon="trash" onClick={handleDeleteIconClick} />
        </div>
      </StyledListItem>
    </>
  )
}

export default ListItem
