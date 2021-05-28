import React from 'react'
import styled from 'styled-components'
import { COLORS, Container, Spinner, Text } from '../../common'
import { BoardDocument } from '../../common/types'
import { useBoards } from '../../swr/useFirebase'
import { useGoToBoard } from '../Board'
import BoardListEmpty from './BoardListEmpty'

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

const BoardList = () => {
  const { loading, boards } = useBoards()
  const goToBoard = useGoToBoard()

  return (
    <>
      {loading ? (
        <Container>
          <Spinner />
        </Container>
      ) : (
        boards && boards.length > 0 ? (
          <List>
            {boards.map((board: BoardDocument) => (        
              <ListItem key={board.NO_ID_FIELD} onClick={() => goToBoard(board)}>
                <Text>{board.name}</Text>
              </ListItem>
            ))}
          </List>
        ) : (
          <BoardListEmpty />
        )
      )}
    </>
  )
}

export default BoardList
