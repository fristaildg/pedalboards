import React from 'react'
import styled from 'styled-components'
import { COLORS, Container, Spinner, Text } from '../../common'
import { BoardDocument } from '../../common/types'
import { useBoards } from '../../swr/useFirebase'
import DeleteBoardModal from '../DeleteBoardModal'
import BoardListEmpty from './BoardListEmpty'
import ListItem from './ListItem'

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  border: 1px solid ${COLORS.GRAY};
`

const BoardList = () => {
  const { loading, boards } = useBoards()

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
              <ListItem key={board.NO_ID_FIELD} board={board} />
            ))}
          </List>
        ) : (
          <BoardListEmpty />
        )
      )}
      <DeleteBoardModal />
    </>
  )
}

export default BoardList
