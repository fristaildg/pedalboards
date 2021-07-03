import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { closeDeleteBoardModal } from '../../redux/board'
import { deleteBoardModalSelector } from '../../redux/selectors'
import { Modal, ModalBody, ModalFooter, Text, Button, Alert } from '../../common'
import { useBoard } from '../../swr/useFirebase'
import { useTranslation } from 'next-i18next'

type DeleteBoardModalProps = {
  onDeleted?: () => void
}

const DeleteBoardButton = ({ boardId, onClick }:{boardId: string; onClick: () => void}) => {
  const { deleteBoard } = useBoard(boardId)
  const { t } = useTranslation('common')

  const handleDeleteClick = async () => {
    try {
      await deleteBoard()
      onClick()
    } catch (error) {
      console.log(error)
    }
  }

  return <Button onClick={handleDeleteClick}>{t('delete_board_modal.button')}</Button>
}

const DeleteBoardModal = ({ onDeleted }: DeleteBoardModalProps) => {
  const dispatch = useDispatch()
  const { isOpen = false, boardId } = useSelector(deleteBoardModalSelector)
  const [alert, setAlert] = useState(false)
  const { t } = useTranslation('common')

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
          <Text>{t('delete_board_modal.text')}</Text>
        </ModalBody>
        <ModalFooter>
          {boardId && <DeleteBoardButton boardId={boardId} onClick={handleDeleteButtonClick} />}
        </ModalFooter>
      </Modal>
      <Alert isOpen={alert} message={t('delete_board_modal.alert')} onTimeout={handleAlertTimeout} />
    </>
  )
}

export default DeleteBoardModal
