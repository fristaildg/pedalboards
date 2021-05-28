import React, { useState } from 'react'
import styled from 'styled-components'
import { COLORS, Icon, Modal, ModalBody, ModalFooter, Text, Button } from '../../common'
import { BoardDocument } from '../../common/types'
import { useBoard } from '../../swr/useFirebase'
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
  const [modalVisible, setModalVisible] = useState(false)
  const goToBoard = useGoToBoard()
  const { deleteBoard } = useBoard(board.NO_ID_FIELD)

  const handleItemClick = () => {
    goToBoard(board)
  }

  const handleDeleteIconClick = (event: any) => {
    event.stopPropagation()
    setModalVisible(true)
  }

  const handleDeleteClick = () => {
    deleteBoard()
  }

  const handleCloseModalClick = () => {
    setModalVisible(false)
  }

  return (
    <>
      <StyledListItem onClick={handleItemClick}>
        <Text>{board.name}</Text>
        <div>
          <Icon icon="trash" onClick={handleDeleteIconClick} />
        </div>
      </StyledListItem>
      <Modal isOpen={modalVisible} onCloseClick={handleCloseModalClick}>
        <ModalBody>
          <Text>Are you sure you want to delete this board? (this action cannot be undone)</Text>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleDeleteClick}>Delete</Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default ListItem
