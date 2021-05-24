import { useRef, useState } from 'react'
import { useFirestore, useFirestoreCollectionData, useFirestoreDocData, useStorage } from 'reactfire'
import { useAuth0 } from '@auth0/auth0-react'
import { useSelector } from 'react-redux'
import { boardIdSelector } from '../redux/selectors'

export const useBoards = () => {
  const { user } = useAuth0()
  const boardsRef = useFirestore()
    .collection('boards')  
  const userBoardsRef = boardsRef.where('ownerId', '==', user.sub)
  const { status, data: boards } = useFirestoreCollectionData(userBoardsRef)
  const loading = status === 'loading'
  const error = status !== 'success' && status !== 'loading'
  const createBoard = (newBoardData) => boardsRef.add(newBoardData)

  return {
    boards,
    error,
    loading,
    createBoard
  }
}

export const useBoard = (boardId) => {
  const storedId = useSelector(boardIdSelector)
  const id = boardId || storedId
  const boardRef = useFirestore()
    .collection('boards')
    .doc(id)
  const { status, data: board } = useFirestoreDocData(boardRef)
  const loading = status === 'loading'
  const error = status !== 'success' && status !== 'loading'
  const updateBoard = (boardData) => boardRef.update(boardData)

  return {
    board,
    loading,
    error,
    updateBoard
  }
}

export const usePublicBoard = (boardId) => {
  const boardRef = useFirestore()
    .collection('boards')
    .doc(boardId)
  const { status, data: board } = useFirestoreDocData(boardRef)
  const loading = status === 'loading'
  const error = status !== 'success' && status !== 'loading'

  return {
    board,
    loading,
    error
  }
}

export const useAudioFiles = (boardId) => {
  const { updateBoard, board } = useBoard(boardId)
  const [loading, setLoading] = useState(false)
  const uploadStatus = useRef(null)
  const deleteStatus = useRef(null)
  const storageRef = useStorage().ref()
  const audioSamples = board?.audioSamples || []

  const uploadFile = async (blob) => {
    try {
      setLoading(true)
      uploadStatus.current = 'upload_succeeded'
      const file = await storageRef.child(`audio-samples/${blob.name}`).put(blob)
      const url = await file.ref.getDownloadURL()
      const name = blob.name
      const fileObj = {
        url,
        name
      }
      updateBoard({ audioSamples: [...audioSamples, fileObj] })
    } catch (error) {
      console.log(error)
      uploadStatus.current = 'upload_errored'
    } finally {
      setLoading(false)
    }
  }

  const deleteFile = async (fileName) => {
    try {
      setLoading(true)
      deleteStatus.current = 'delete_succeeded'
      await storageRef.child(`audio-samples/${fileName}`).delete()
      await updateBoard({ audioSamples: audioSamples.filter(sample => sample.name !== fileName) })
    } catch (error) {
      console.log(error)
      deleteStatus.current = 'delete_errored'
    } finally {
      setLoading(false)
      // setDeleteStatus('idle')
    }
  }

  return {
    uploadFile,
    deleteFile,
    loading,
    deleteStatus: deleteStatus.current,
    uploadStatus: uploadStatus.current,
  }
}
