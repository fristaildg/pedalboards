import React, { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Modal, Text, ModalBody, ModalFooter, Button } from '../../common'
import { deleteAudioModalSelector, boardIdSelector } from '../../redux/selectors'
import { toggleDeleteAudioModal, toggleAlert, setAlertMessage } from '../../redux/audioPlayer'
import { useAudioFiles } from '../../swr/useFirebase'

const DeleteAudioModal = () => {
  const boardId = useSelector(boardIdSelector)
  const { isOpen: isModalOpen, name } = useSelector(deleteAudioModalSelector)
  const dispatch = useDispatch()
  const { deleteFile, loading: deleteLoading, deleteStatus } = useAudioFiles(boardId)

  const handleDeleteFile = async () => {
    await deleteFile(name)
    dispatch(toggleAlert())
    dispatch(setAlertMessage(deleteStatus))
    dispatch(toggleDeleteAudioModal(name))
  }


  return (
    <>
      <Modal isOpen={isModalOpen}>
        <ModalBody>
          <Text>delete file?</Text>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleDeleteFile}>
            Delete file
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default DeleteAudioModal