import React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { COLORS, Text } from '../../common'
import { BoardDocument } from '../../common/types'
import { setBoard } from '../../redux/board'
import { useGoToBoard } from '../Board'

type BoardListProps = {
  boards: BoardDocument[]
}

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  border: 1px solid ${COLORS.GRAY};
`

const ListItem = styled.li`
  padding: 20px;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.BODY_HOVER};
  }
`

const BoardList = ({ boards }: BoardListProps) => {
  const goToBoard = useGoToBoard()

  return (
    <List>
      {boards.map((board: BoardDocument) => (        
        <ListItem key={board.NO_ID_FIELD} onClick={() => goToBoard(board)}>
          <Text>{board.name}</Text>
        </ListItem>
      ))}
    </List>
  )
}

export default BoardList
