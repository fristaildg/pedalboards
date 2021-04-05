import React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { Text } from '@spark-digital/ignition'
import { useDispatch } from 'react-redux'
import { BoardDocument } from '../../commonTypes'
import { setBoard } from '../../redux/board'

type BoardListProps = {
  boards: BoardDocument[]
}

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const ListItem = styled.li`
  padding: 20px;
  cursor: pointer;

  &:hover {
    background-color: #F6F6F6;
  }
`

const BoardList = ({ boards }: BoardListProps) => {
  const router = useRouter()
  const dispatch = useDispatch()

  const goToBoard = (board: BoardDocument) => {
    dispatch(setBoard(board))
    router.push('/my-board')
  }

  return (
    <List>
      {boards.map((board: BoardDocument) => (        
        <ListItem key={board.NO_ID_FIELD} onClick={() => goToBoard(board)}>
          <Text>
            {board.name}
          </Text>
        </ListItem>
      ))}
    </List>
  )
}

export default BoardList
