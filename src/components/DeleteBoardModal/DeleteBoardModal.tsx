import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { closeDeleteBoardModal } from '../../redux/board'
import { deleteBoardModalSelector } from '../../redux/selectors'
import { Modal, ModalBody, ModalFooter, Text, Button, Alert } from '../../common'
import { useBoard } from '../../swr/useFirebase'

type DeleteBoardModalProps = {
  onDeleted?: () => void
}

const DeleteBoardButton = ({ boardId, onClick }:{boardId: string; onClick: () => void}) => {
  const { deleteBoard } = useBoard(boardId)

  const handleDeleteClick = async () => {
    try {
      await deleteBoard()
      onClick()
    } catch (error) {
      console.log(error)
    }
  }

  return <Button onClick={handleDeleteClick}>Delete</Button>
}

const DeleteBoardModal = ({ onDeleted }: DeleteBoardModalProps) => {
  const dispatch = useDispatch()
  const { isOpen, boardId } = useSelector(deleteBoardModalSelector)
  const [alert, setAlert] = useState(false)

  const handleCloseClick = () => {
    dispatch(closeDeleteBoardModal())
  }

  const handleDeleteButtonClick = () => {
    setAlert(true)
    handleCloseClick()
  }

  const handleAlertTimeout = () => {
    setAlert(false)
    !!onDeleted && onDeleted()
  }

  return (
    <>
      <Modal isOpen={isOpen} onCloseClick={handleCloseClick}>
        <ModalBody>
          <Text>Are you sure you want to delete this board? (this action cannot be undone)</Text>
        </ModalBody>
        <ModalFooter>
          {boardId && <DeleteBoardButton boardId={boardId} onClick={handleDeleteButtonClick} />}
        </ModalFooter>
      </Modal>
      <Alert isOpen={alert} message='Board deleted successfully' onTimeout={handleAlertTimeout} />
    </>
  )
}

export default DeleteBoardModal
